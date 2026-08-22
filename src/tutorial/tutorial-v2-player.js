// src/tutorial/tutorial-v2-player.js
/**
 * Moteur de lecture du Tutoriel v2 — joue, sur l'app RÉELLE (pas un aperçu),
 * les étapes configurées dans l'admin (table tutorial_steps_v2).
 *
 * Contrairement au mode preview (?tutorialPreview=1 dans app.js, utilisé
 * par l'admin), ce moteur tourne dans la session du VRAI joueur : les
 * boutons sont réellement cliquables (si allow_interaction), la navigation
 * change réellement de page, et la progression est sauvegardée en base
 * (table tutorial_progress_v2).
 *
 * Deux façons d'avancer d'une étape, pilotées par step.show_next_button :
 *   - true  → un bouton "Suivant →" est affiché dans le popup
 *   - false → l'étape avance automatiquement quand le joueur clique sur le
 *             vrai élément ciblé (step.dom_selector)
 */
import { supabase } from '../lib/supabase.js'

let steps = []
let idx = 0
let ctxRef = null
let onCompleteRef = null
let ov = null
let cleanupCurrentStep = null

function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

// Même logique que le mode preview (app.js) : certains éléments existent en
// double dans le DOM (nav desktop/mobile, basculée en CSS) — on cible le
// premier match réellement visible, pas le premier dans l'ordre du DOM.
function findVisibleTarget(selector) {
  if (!selector) return null
  let all
  try { all = document.querySelectorAll(selector) } catch (e) { return null }
  for (const el of all) {
    const r = el.getBoundingClientRect()
    if (r.width > 0 && r.height > 0) return el
  }
  return all[0] || null
}

function escapeHtmlV2(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// La barre de navigation (home2-chrome-header, home2-mobile-top,
// home2-mobile-bottom) est montée directement sur document.body — HORS de
// #app — pour survivre aux re-rendus de page. Le blocage des interactions
// doit donc l'inclure explicitement en plus de #app.
const NAV_CONTAINER_SELECTORS = [
  '.home2-chrome-header', '.home2-mobile-top', '.home2-mobile-bottom',
  '.top-nav', '.bottom-nav',
]

// Bloque TOUJOURS l'ensemble de l'app (rien n'est cliquable par défaut).
// L'interaction n'est jamais rouverte globalement — voir setOnlyClickable()
// ci-dessous, qui n'autorise qu'un seul élément précis à la fois.
function blockAllInteraction() {
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = 'none'
  NAV_CONTAINER_SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => { el.style.pointerEvents = 'none' })
  })
}

function restoreAllInteraction() {
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = ''
  NAV_CONTAINER_SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => { el.style.pointerEvents = '' })
  })
}

// Seul l'élément passé en argument devient cliquable (le reste de l'app
// reste bloqué par blockAllInteraction). pointer-events:auto sur un
// descendant redevient cliquable même si un ancêtre a pointer-events:none —
// comportement standard CSS, aucune astuce nécessaire.
let lastClickableEl = null
function setOnlyClickable(el) {
  if (lastClickableEl && lastClickableEl !== el) {
    lastClickableEl.style.pointerEvents = ''
  }
  if (el) el.style.pointerEvents = 'auto'
  lastClickableEl = el || null
}

async function loadSteps() {
  const { data, error } = await supabase
    .from('tutorial_steps_v2')
    .select('*')
    .order('step_number', { ascending: true })
  if (error) { console.warn('[TutorialV2] chargement étapes échoué:', error.message); return [] }
  return data || []
}

// ── Point d'entrée : joue le tutoriel depuis le début ────────────────────
// Compte démo partagé — même compte que l'aperçu admin et la démo publique
// (?tutorialPreview=1 / ?tutorialDemo=1 dans app.js).
const DEMO_ID = '00000000-0000-4000-8000-000000000001'

let realProgressUserId = null // vrai joueur, pour la sauvegarde de progression

export async function startTutorialV2(ctx, onComplete) {
  steps = await loadSteps()
  if (!steps.length) { onComplete?.(); return }

  // La progression (tutorial_done) doit toujours être enregistrée pour le
  // VRAI joueur qui suit le tutoriel, même si on bascule ensuite l'affichage
  // sur le compte démo ci-dessous.
  realProgressUserId = ctx.state.profile?.id || null

  // Bascule temporairement le contexte de rendu sur le compte démo partagé,
  // pour que les pages affichent toujours des cartes/decks de démonstration
  // — indépendamment de l'état réel du compte du joueur qui suit le
  // tutoriel (fraîchement créé, cartes vendues, etc.). Restauré dans
  // finish() une fois le tutoriel terminé ou passé.
  const realUser = ctx.state.user
  const realProfile = ctx.state.profile
  const { data: demoProfile } = await supabase
    .from('users').select('*').eq('id', DEMO_ID).single()
  ctx.state.user = { id: DEMO_ID }
  ctx.state.profile = demoProfile || realProfile
  ctx._tv2RealUser = realUser
  ctx._tv2RealProfile = realProfile

  ctxRef = ctx
  onCompleteRef = onComplete
  idx = 0
  lastClickableEl = null
  blockAllInteraction()

  ov?.remove()
  ov = document.createElement('div')
  ov.id = 'tv2-player-overlay'
  ov.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:2147483000;pointer-events:none'
  document.body.appendChild(ov)

  if (!document.getElementById('tv2-player-anim-style')) {
    const st = document.createElement('style')
    st.id = 'tv2-player-anim-style'
    st.textContent = `
      @keyframes tv2Pulse { 0%{box-shadow:0 0 0 0 rgba(26,107,60,0.6);} 70%{box-shadow:0 0 0 12px rgba(26,107,60,0);} 100%{box-shadow:0 0 0 0 rgba(26,107,60,0);} }
      @keyframes tv2Glow  { 0%,100%{box-shadow:0 0 8px 3px rgba(212,160,23,0.7);} 50%{box-shadow:0 0 20px 8px rgba(212,160,23,0.95);} }
    `
    document.head.appendChild(st)
  }

  playStep()
}

// ── Vérifie si le joueur a déjà terminé (pour l'auto-déclenchement) ──────
export async function checkAndShowTutorialV2(profile, navigate, toast) {
  if (!profile?.id) return
  const { data } = await supabase
    .from('tutorial_progress_v2')
    .select('tutorial_done')
    .eq('user_id', profile.id)
    .maybeSingle()
  if (data?.tutorial_done) return
  await startTutorialV2({ state: { profile, page: 'home' }, navigate, toast }, () => navigate('boosters'))
}

async function playStep() {
  const step = steps[idx]
  if (!step) return finish(false)

  cleanupCurrentStep?.()
  cleanupCurrentStep = null

  const targetPage = step.page_route || 'home'
  const needsNav = ctxRef.state.page !== targetPage
  if (needsNav) {
    ctxRef.navigate(targetPage)
  }

  // Certaines pages font plusieurs requêtes Supabase avant de construire
  // leur contenu réel (ex: collection.js charge cartes+joueurs+GC+stades
  // en 4 requêtes successives avant d'afficher ses onglets). Un délai fixe
  // est fragile : on attend donc activement que l'élément ciblé apparaisse
  // réellement dans le DOM, plutôt que de deviner un timing.
  await waitForStepReady(step, needsNav)

  render(step)

  if (needsNav) {
    // Filet de sécurité : certaines pages du jeu font des requêtes async
    // avant de construire leur contenu, SANS vérifier si la page a changé
    // entre-temps (ex: race condition corrigée dans home2.js, mais d'autres
    // pages pourraient avoir le même souci). Si le rendu de la page
    // précédente termine APRÈS notre navigation et écrase le contenu, on
    // renavigue une seconde fois une fois ce risque très probablement
    // retombé — seulement si cette étape est toujours celle affichée.
    setTimeout(() => {
      if (steps[idx] === step) {
        ctxRef.navigate(targetPage)
        render(step)
      }
    }, 700)
  }
}

function waitForStepReady(step, needsNav) {
  return new Promise(resolve => {
    const maxWait = 4000
    const interval = 100
    let waited = 0
    let lastRect = null

    const rectsMatch = (a, b) =>
      a && b && a.top === b.top && a.left === b.left && a.width === b.width && a.height === b.height

    const tick = () => {
      // Sans sélecteur : un court délai suffit (juste laisser le DOM se stabiliser)
      if (!step.dom_selector) {
        return setTimeout(resolve, needsNav ? 250 : 200)
      }

      const el = findVisibleTarget(step.dom_selector)
      if (!el) {
        if (waited >= maxWait) return resolve()
        waited += interval
        return setTimeout(tick, interval)
      }

      // L'élément existe et est visible, mais peut être encore en pleine
      // animation d'entrée (ouverture de modale, transition CSS) : on
      // attend que sa position/taille soit STABLE sur deux mesures
      // consécutives avant de dessiner le spotlight, sinon l'anneau se
      // positionne sur des coordonnées transitoires et semble "raté".
      const rect = el.getBoundingClientRect()
      if (rectsMatch(rect, lastRect) || waited >= maxWait) {
        return resolve()
      }
      lastRect = rect
      waited += interval
      setTimeout(tick, interval)
    }

    // Laisse au minimum le temps à navigate() de démarrer son rendu avant
    // le premier essai, pour éviter de tester sur l'ancienne page encore
    // affichée à l'écran.
    setTimeout(tick, needsNav ? 150 : 0)
  })
}

function render(step) {
  ov.innerHTML = ''

  const targetEl = step.dom_selector ? findVisibleTarget(step.dom_selector) : null

  // Un sélecteur qui matche un conteneur QUASI EXACTEMENT plein écran (ex:
  // "#app", le wrapper racine de toute l'app) rend le spotlight/grisage
  // inopérant en pratique : le "trou" découpé dans le voile aurait alors la
  // taille de l'écran entier, donc rien ne semble grisé. On ignore
  // délibérément CES cibles précises pour le rendu visuel du grisage/anneau
  // — mais PAS une modale simplement large (ex: #modal-body), qui a presque
  // toujours une marge sur au moins une dimension. D'où une vérification
  // sur largeur ET hauteur séparément (>97% des deux), plus stricte qu'un
  // simple ratio de surface qui inclurait à tort de grandes modales.
  let visualTargetEl = targetEl
  if (targetEl) {
    const r0 = targetEl.getBoundingClientRect()
    const coversFullWidth = r0.width / window.innerWidth > 0.97
    const coversFullHeight = r0.height / window.innerHeight > 0.97
    if (coversFullWidth && coversFullHeight) visualTargetEl = null
  }
  const highlight = step.highlight_type || 'none'
  const dimScreen = !!step.dim_overlay
  const allowInteraction = !!step.allow_interaction
  const showNext = step.show_next_button !== false

  // Seul l'élément CIBLÉ (dom_selector) devient cliquable si
  // "allow_interaction" est activé — jamais l'app entière. Le reste de
  // l'app/nav reste bloqué à tout moment (blockAllInteraction() appelée
  // une fois au démarrage du tutoriel, voir startTutorialV2).
  setOnlyClickable(allowInteraction ? targetEl : null)

  let html = ''

  if (dimScreen) {
    if (visualTargetEl) {
      const r = visualTargetEl.getBoundingClientRect()
      html += `<div style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:rgba(0,0,0,0.62);
        clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%,
          0% ${r.top - 6}px,${r.left - 6}px ${r.top - 6}px,${r.left - 6}px ${r.bottom + 6}px,
          ${r.right + 6}px ${r.bottom + 6}px,${r.right + 6}px ${r.top - 6}px,0% ${r.top - 6}px)"></div>`
    } else {
      html += `<div style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:rgba(0,0,0,0.62)"></div>`
    }
  }

  if (visualTargetEl && highlight !== 'none') {
    const r = visualTargetEl.getBoundingClientRect()
    const ringColor = highlight === 'glow' ? '#D4A017' : '#1A6B3C'
    const anim = highlight === 'pulse' ? 'animation:tv2Pulse 1.6s infinite;'
               : highlight === 'glow'  ? 'animation:tv2Glow 1.6s infinite;' : ''
    // Double liseré (blanc puis sombre) autour de la couleur principale pour
    // rester bien visible même sur un élément déjà coloré (ex: un bouton
    // vert vif) — sans ça, un anneau doré fin pouvait se fondre visuellement.
    html += `<div id="tv2-ring" style="position:absolute;left:${r.left - 7}px;top:${r.top - 7}px;
      width:${r.width + 14}px;height:${r.height + 14}px;border-radius:11px;
      border:3.5px solid ${ringColor};
      box-shadow:0 0 0 2px rgba(255,255,255,0.95), 0 0 0 4px rgba(0,0,0,0.35), 0 0 14px 2px ${ringColor};
      ${anim}"></div>`
  }

  const vw = window.innerWidth, vh = window.innerHeight
  const bw = vw - 100
  const isMobileViewport = window.innerWidth < 900

  // Hauteur réelle de la nav (mesurée en JS par le jeu lui-même, posée sur
  // documentElement — voir home2.js applyAppHeight/ensureV2Chrome). On s'en
  // sert pour placer précisément le popup juste au-dessus (mobile, nav en
  // bas) ou juste en dessous (desktop, nav en haut) de la vraie barre.
  const navBottomH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--v2-bottom-height')) || 76
  const navTopH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--v2-top-height')) || 56

  const posMap = {
    center:         'top:50%;left:50%;transform:translate(-50%,-50%);',
    top:            'top:16px;left:50%;transform:translateX(-50%);',
    'upper-center': 'top:28%;left:50%;transform:translate(-50%,-50%);',
    'lower-center': 'top:72%;left:50%;transform:translate(-50%,-50%);',
    'top-left':     'top:16px;left:16px;',
    'top-right':    'top:16px;right:16px;',
    bottom:         'bottom:16px;left:50%;transform:translateX(-50%);',
    'bottom-left':  'bottom:16px;left:16px;',
    'bottom-right': 'bottom:16px;right:16px;',
    // Mobile : nav en bas → popup juste au-dessus. Desktop : nav en haut →
    // pas de "au-dessus" possible (hors écran), donc juste en dessous.
    'above-nav':    isMobileViewport
      ? `bottom:${navBottomH + 12}px;left:50%;transform:translateX(-50%);`
      : `top:${navTopH + 12}px;left:50%;transform:translateX(-50%);`,
  }
  // Position réellement adaptée au device courant (seuil 900px, identique
  // au reste du jeu) — pas au mode simulé dans l'admin, qui ne concerne
  // que sa propre preview figée.
  const chosenPosition = (isMobileViewport ? step.popup_position : step.popup_position_desktop) || step.popup_position
  const bubbleStyle = posMap[chosenPosition] || posMap.center
  // Largeur pleine uniquement pour les positions centrées horizontalement
  // (center/top/bottom/upper-center/lower-center) — les positions en coin
  // (top-left, bottom-right, etc.) restent compactes, une largeur forcée
  // les ferait déborder de l'écran.
  const isCenteredPos = ['center', 'top', 'bottom', 'upper-center', 'lower-center', 'above-nav'].includes(chosenPosition)
  const widthRule = isCenteredPos ? `width:${bw}px;` : ''
  const isLast = idx === steps.length - 1
  const canSkip = step.skip_allowed !== false

  html += `<div id="tv2-bubble" style="position:absolute;${bubbleStyle}max-width:${bw}px;${widthRule}background:#fff;
    border-radius:14px;box-shadow:0 8px 36px rgba(0,0,0,0.5);padding:16px 18px;pointer-events:auto">
    <div style="height:3px;background:#eee;border-radius:2px;margin-bottom:12px;overflow:hidden">
      <div style="height:100%;width:${Math.round(((idx + 1) / steps.length) * 100)}%;background:#1A6B3C;transition:width .3s"></div>
    </div>
    <div style="font-weight:900;font-size:15px;color:#1a1a2e;margin-bottom:6px;text-align:center">${escapeHtmlV2(step.popup_title)}</div>
    <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:12px;text-align:center">${step.popup_text || ''}</div>
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px">
      ${showNext
        ? `<button id="tv2-next" style="background:#1A6B3C;color:#fff;border:none;border-radius:9px;padding:9px 20px;font-size:13px;font-weight:800;cursor:pointer;text-align:center">${isLast ? '🚀 Terminer' : 'Suivant →'}</button>`
        : `<div style="font-size:11px;color:#1A6B3C;font-weight:800;text-align:center">👆 ${escapeHtmlV2(step.action_required || 'Clique sur l\'élément indiqué')}</div>`
      }
      ${canSkip ? `<button id="tv2-skip" style="background:none;border:none;font-size:11px;color:#999;cursor:pointer;padding:4px;text-align:center">Passer le tutoriel</button>` : ''}
    </div>
  </div>`

  ov.innerHTML = html

  const skipBtn = ov.querySelector('#tv2-skip')
  skipBtn?.addEventListener('click', () => {
    if (confirm('Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.')) finish(true)
  })

  if (showNext) {
    ov.querySelector('#tv2-next')?.addEventListener('click', () => advance())
  } else if (targetEl) {
    // Avance automatiquement quand le joueur clique réellement sur la
    // cible — on écoute en phase bulle, APRÈS le vrai gestionnaire du
    // bouton, pour laisser l'action réelle du jeu s'exécuter d'abord.
    const handler = e => {
      const r = targetEl.getBoundingClientRect()
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
        document.removeEventListener('click', handler, true)
        setTimeout(() => advance(), 50)
      }
    }
    document.addEventListener('click', handler, true)
    cleanupCurrentStep = () => document.removeEventListener('click', handler, true)
  }
}

function advance() {
  cleanupCurrentStep?.()
  cleanupCurrentStep = null
  idx++
  if (idx >= steps.length) finish(false)
  else playStep()
}

async function finish(skipped) {
  cleanupCurrentStep?.()
  cleanupCurrentStep = null
  ov?.remove()
  restoreAllInteraction()
  lastClickableEl = null

  // La progression se sauvegarde TOUJOURS pour le vrai joueur, même si
  // l'affichage a tourné sur le compte démo pendant le tutoriel.
  const userId = realProgressUserId
  if (userId) {
    await supabase.from('tutorial_progress_v2').upsert({
      user_id: userId,
      current_step: idx + 1,
      tutorial_done: true,
      tutorial_skipped: skipped,
      completed_at: new Date().toISOString(),
    }, { onConflict: 'user_id' })

    // Compatibilité : plusieurs écrans existants (ex. panneau "Premiers
    // pas") vérifient encore users.tutorial_done pour débloquer le contenu
    // post-tutoriel. On le maintient synchronisé pour éviter de casser ces
    // écrans en attendant leur éventuelle migration vers tutorial_progress_v2.
    await supabase.from('users').update({ tutorial_done: true }).eq('id', userId)
  }

  // Restaure le vrai compte du joueur (annule la bascule démo faite au
  // démarrage) avant de rendre la main à l'appelant, pour que la suite
  // (ex: renderRewardsList()) opère bien sur les vraies données.
  if (ctxRef) {
    if (ctxRef._tv2RealUser)    ctxRef.state.user = ctxRef._tv2RealUser
    if (ctxRef._tv2RealProfile) {
      ctxRef._tv2RealProfile.tutorial_done = true
      ctxRef.state.profile = ctxRef._tv2RealProfile
    }
    await ctxRef.refreshProfile?.()
    // Le fond affiché pendant le tutoriel montrait les pages du compte démo
    // — on rafraîchit la page courante avec les vraies données avant de
    // continuer, pour éviter tout résidu visuel du compte démo.
    if (ctxRef.state.page) ctxRef.navigate?.(ctxRef.state.page)
  }

  onCompleteRef?.()
}
