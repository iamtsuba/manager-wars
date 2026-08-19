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

async function loadSteps() {
  const { data, error } = await supabase
    .from('tutorial_steps_v2')
    .select('*')
    .order('step_number', { ascending: true })
  if (error) { console.warn('[TutorialV2] chargement étapes échoué:', error.message); return [] }
  return data || []
}

// ── Point d'entrée : joue le tutoriel depuis le début ────────────────────
export async function startTutorialV2(ctx, onComplete) {
  steps = await loadSteps()
  if (!steps.length) { onComplete?.(); return }

  ctxRef = ctx
  onCompleteRef = onComplete
  idx = 0

  ov?.remove()
  ov = document.createElement('div')
  ov.id = 'tv2-player-overlay'
  ov.style.cssText = 'position:fixed;inset:0;z-index:9800;pointer-events:none'
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
  if (ctxRef.state.page !== targetPage) {
    ctxRef.navigate(targetPage)
    await wait(400)
  }

  render(step)
}

function render(step) {
  ov.innerHTML = ''

  const targetEl = step.dom_selector ? findVisibleTarget(step.dom_selector) : null
  const highlight = step.highlight_type || 'none'
  const dimScreen = !!step.dim_overlay
  const allowInteraction = !!step.allow_interaction
  const showNext = step.show_next_button !== false

  // Réactive ou bloque les vraies interactions du joueur sur le reste de
  // l'app selon le choix de l'étape.
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = allowInteraction ? '' : 'none'

  let html = ''

  if (dimScreen) {
    if (targetEl) {
      const r = targetEl.getBoundingClientRect()
      html += `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.62);
        clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%,
          0% ${r.top - 6}px,${r.left - 6}px ${r.top - 6}px,${r.left - 6}px ${r.bottom + 6}px,
          ${r.right + 6}px ${r.bottom + 6}px,${r.right + 6}px ${r.top - 6}px,0% ${r.top - 6}px)"></div>`
    } else {
      html += `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.62)"></div>`
    }
  }

  if (targetEl && highlight !== 'none') {
    const r = targetEl.getBoundingClientRect()
    const ringColor = highlight === 'glow' ? '#D4A017' : '#1A6B3C'
    const anim = highlight === 'pulse' ? 'animation:tv2Pulse 1.6s infinite;'
               : highlight === 'glow'  ? 'animation:tv2Glow 1.6s infinite;' : ''
    html += `<div id="tv2-ring" style="position:absolute;left:${r.left - 6}px;top:${r.top - 6}px;
      width:${r.width + 12}px;height:${r.height + 12}px;border-radius:10px;
      border:2.5px solid ${ringColor};box-shadow:0 0 0 2px rgba(255,255,255,0.85);${anim}"></div>`
  }

  const vw = window.innerWidth, vh = window.innerHeight
  const bw = Math.min(340, vw - 32)
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
  }
  const bubbleStyle = posMap[step.popup_position] || posMap.center
  const isLast = idx === steps.length - 1
  const canSkip = step.skip_allowed !== false

  html += `<div id="tv2-bubble" style="position:absolute;${bubbleStyle}max-width:${bw}px;background:#fff;
    border-radius:14px;box-shadow:0 8px 36px rgba(0,0,0,0.5);padding:16px 18px;pointer-events:auto">
    <div style="height:3px;background:#eee;border-radius:2px;margin-bottom:12px;overflow:hidden">
      <div style="height:100%;width:${Math.round(((idx + 1) / steps.length) * 100)}%;background:#1A6B3C;transition:width .3s"></div>
    </div>
    <div style="font-weight:900;font-size:15px;color:#1a1a2e;margin-bottom:6px">${escapeHtmlV2(step.popup_title)}</div>
    <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:12px">${escapeHtmlV2(step.popup_text)}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
      ${canSkip ? `<button id="tv2-skip" style="background:none;border:none;font-size:11px;color:#999;cursor:pointer;padding:4px">Passer le tutoriel</button>` : '<div></div>'}
      ${showNext
        ? `<button id="tv2-next" style="background:#1A6B3C;color:#fff;border:none;border-radius:9px;padding:9px 20px;font-size:13px;font-weight:800;cursor:pointer">${isLast ? '🚀 Terminer' : 'Suivant →'}</button>`
        : `<div style="font-size:11px;color:#1A6B3C;font-weight:800">👆 ${escapeHtmlV2(step.action_required || 'Clique sur l\'élément indiqué')}</div>`
      }
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
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = ''

  const userId = ctxRef?.state?.profile?.id
  if (userId) {
    await supabase.from('tutorial_progress_v2').upsert({
      user_id: userId,
      current_step: idx + 1,
      tutorial_done: true,
      tutorial_skipped: skipped,
      completed_at: new Date().toISOString(),
    }, { onConflict: 'user_id' })
  }

  onCompleteRef?.()
}
