/**
 * interactive-tutorial.js — Tutoriel interactif Manager Wars
 *
 * Architecture : overlay bloquant par-dessus l'app réelle, avec spotlight
 * sur les vrais éléments de l'interface (pas de simulation). Le joueur
 * interagit avec la vraie interface guidé par des bulles d'explication.
 *
 * Le script d'étapes est entièrement en dur ici : une modification de ce
 * fichier suffit pour faire évoluer le tutoriel. Aucune dépendance à une
 * table DB (contrairement au tuto slides qui lit tutorial_steps).
 *
 * Types d'étapes :
 *   'spotlight' : met en surbrillance un sélecteur, bouton Suivant
 *   'navigate'  : navigue vers une route et attend le rendu
 *   'wait_click': attend que l'utilisateur clique sur un sélecteur ciblé
 *   'modal'     : affiche une bulle centrée sans spotlight (intro/outro)
 */
import { navigate } from '../app.js'
import { supabase } from '../lib/supabase.js'

// ═══════════════════════════════════════════════════════════════════════
// SCRIPT DU TUTORIEL — modifier uniquement cette section pour éditer le
// contenu, l'ordre, ou les cibles du tuto, sans toucher à la mécanique.
// ═══════════════════════════════════════════════════════════════════════
const TUTORIAL_SCRIPT = [
  {
    type: 'modal',
    emoji: '👋',
    title: 'Bienvenue dans Manager Wars !',
    text: 'Ce tutoriel va te guider à travers les étapes clés du jeu en quelques minutes. Tu vas découvrir ta collection de cartes, construire ta formation, et ouvrir un booster.',
  },
  {
    type: 'navigate',
    route: 'collection',
    waitMs: 600,
  },
  {
    type: 'spotlight',
    selector: '.home2-chrome-tab[data-key="cards"]',
    bubble: { side: 'bottom', title: '🃏 Tes cartes', text: 'Ici tu retrouves toutes tes cartes joueurs, formations, stades et Game Changers. C\'est ta collection !' },
  },
  {
    type: 'spotlight',
    selector: '#col-grid',
    bubble: { side: 'top', title: '⚽ Tes joueurs', text: 'Chaque carte représente un joueur. Sa note (en bas) définit sa force. Glisse horizontalement pour voir toutes tes cartes.' },
  },
  {
    type: 'spotlight',
    selector: '.col-tab-btn[data-tab="player"]',
    bubble: { side: 'bottom', title: '🔍 Filtrer par type', text: 'Ces onglets te permettent de filtrer ta collection : Joueurs, Formations, Game Changers ou Stades.' },
  },
  {
    type: 'navigate',
    route: 'decks',
    waitMs: 700,
  },
  {
    type: 'spotlight',
    selector: '.home2-chrome-tab[data-key="decks"]',
    bubble: { side: 'bottom', title: '👥 Tes équipes', text: 'Ici tu construis tes équipes. Chaque deck contient 11 joueurs en formation sur le terrain + 5 remplaçants.' },
  },
  {
    type: 'spotlight',
    selector: '#deck-field-wrap, .deck-field-wrap, [id*="field"], .formation-field',
    fallbackSelector: '#page-content',
    bubble: { side: 'right', title: '⚽ Le terrain', text: 'Ton terrain affiche ta formation. Chaque point sur le terrain est un joueur. Les lignes jaunes et vertes représentent les liens entre joueurs — plus de liens = plus de bonus !' },
  },
  {
    type: 'spotlight',
    selector: '.formation-slot[style*="opacity"], [data-pos]',
    fallbackSelector: '#page-content',
    bubble: { side: 'top', title: '➕ Ajouter un joueur', text: 'Clique sur un emplacement vide (en grisé) pour choisir un joueur de ta collection à placer à ce poste.' },
  },
  {
    type: 'navigate',
    route: 'boosters',
    waitMs: 600,
  },
  {
    type: 'spotlight',
    selector: '.home2-chrome-tab[data-key="boosters"]',
    bubble: { side: 'bottom', title: '🎁 La Boutique', text: 'Ici tu achètes et ouvres des boosters pour enrichir ta collection. Chaque booster contient des cartes aléatoires de différentes raretés.' },
  },
  {
    type: 'spotlight',
    selector: '.booster-card:not(.disabled)',
    fallbackSelector: '#page-content',
    bubble: { side: 'top', title: '📦 Les boosters', text: 'Chaque booster a son propre contenu : joueurs, formations, Game Changers ou Stades. Plus la rareté est élevée (Pépite 🌟, Légende 💎), plus le joueur est puissant !' },
  },
  {
    type: 'modal',
    emoji: '⚔️',
    title: 'Les modes de jeu',
    text: 'Manager Wars propose 3 façons de jouer :\n\n• **Solo** — affronte l\'IA pour progresser et gagner des récompenses\n• **PvP Rapide** — défie un adversaire aléatoire en ligne\n• **Ami** — invite un ami à une partie privée\n\nTon objectif : constituer le meilleur deck possible et grimper dans le classement !',
  },
  {
    type: 'modal',
    emoji: '🏆',
    title: 'Tu es prêt !',
    text: 'Tu connais maintenant les bases de Manager Wars. Ouvre tes boosters de démarrage, construis ta première formation et lance ton premier match. Bonne chance !',
    isLast: true,
  },
]
// ═══════════════════════════════════════════════════════════════════════

let overlay = null
let currentStep = 0
let onDone = null

export async function startInteractiveTutorial(profile, _navigate, done) {
  if (overlay) return   // déjà en cours
  onDone = done
  currentStep = 0
  buildOverlay()
  await runStep(currentStep)
}

function buildOverlay() {
  if (overlay) overlay.remove()
  overlay = document.createElement('div')
  overlay.id = 'ittuto-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9800;pointer-events:all'
  // Fond semi-opaque bloquant (les clics en dehors du spotlight n'atteignent
  // pas l'app — tout passe par l'overlay qui absorbé les événements)
  overlay.innerHTML = `
    <div id="ittuto-mask" style="position:absolute;inset:0;background:rgba(0,0,0,0.72)"></div>
    <svg id="ittuto-svg" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none">
      <defs>
        <mask id="ittuto-hole">
          <rect width="100%" height="100%" fill="white"/>
          <rect id="ittuto-hole-rect" x="0" y="0" width="0" height="0" rx="10" fill="black"/>
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="rgba(0,0,0,0.72)" mask="url(#ittuto-hole)"/>
    </svg>
    <div id="ittuto-bubble" style="position:absolute;display:none;max-width:320px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.45);padding:18px 20px;z-index:9810">
      <div id="ittuto-bubble-title" style="font-weight:900;font-size:16px;color:#1a1a2e;margin-bottom:6px"></div>
      <div id="ittuto-bubble-text" style="font-size:14px;color:#444;line-height:1.55;white-space:pre-line"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px">
        <span id="ittuto-step-counter" style="font-size:11px;color:#aaa"></span>
        <button id="ittuto-next-btn" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:9px 20px;font-size:14px;font-weight:800;cursor:pointer">Suivant →</button>
      </div>
    </div>
    <div id="ittuto-modal" style="position:absolute;inset:0;display:none;align-items:center;justify-content:center;padding:24px">
      <div style="background:#fff;border-radius:20px;max-width:420px;width:100%;padding:28px 24px;box-shadow:0 16px 64px rgba(0,0,0,0.45);text-align:center">
        <div id="ittuto-modal-emoji" style="font-size:52px;margin-bottom:12px"></div>
        <h2 id="ittuto-modal-title" style="font-size:20px;font-weight:900;color:#1a1a2e;margin:0 0 12px"></h2>
        <p id="ittuto-modal-text" style="font-size:14px;color:#444;line-height:1.6;margin:0 0 22px;white-space:pre-line;text-align:left"></p>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span id="ittuto-modal-counter" style="font-size:11px;color:#aaa"></span>
          <button id="ittuto-modal-next" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:11px 28px;font-size:15px;font-weight:900;cursor:pointer">Suivant →</button>
        </div>
      </div>
    </div>
    <button id="ittuto-skip" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:12px;cursor:pointer;z-index:9820">✕ Passer le tuto</button>
  `
  document.body.appendChild(overlay)
  overlay.querySelector('#ittuto-skip').addEventListener('click', finishTutorial)
}

function spotlightElement(el) {
  const rect = el.getBoundingClientRect()
  const pad = 8
  const hole = overlay.querySelector('#ittuto-hole-rect')
  const x = rect.left - pad, y = rect.top - pad
  const w = rect.width + pad * 2, h = rect.height + pad * 2
  hole.setAttribute('x', x); hole.setAttribute('y', y)
  hole.setAttribute('width', w); hole.setAttribute('height', h)
  return { x, y, w, h }
}

function clearSpotlight() {
  const hole = overlay.querySelector('#ittuto-hole-rect')
  hole.setAttribute('x', 0); hole.setAttribute('y', 0)
  hole.setAttribute('width', 0); hole.setAttribute('height', 0)
}

function positionBubble(spotlight, side, vw, vh) {
  const bubble = overlay.querySelector('#ittuto-bubble')
  const bw = 320, bh = 140
  const margin = 14
  let left, top

  if (side === 'bottom') {
    top = spotlight.y + spotlight.h + margin
    left = spotlight.x + spotlight.w / 2 - bw / 2
  } else if (side === 'top') {
    top = spotlight.y - bh - margin
    left = spotlight.x + spotlight.w / 2 - bw / 2
  } else if (side === 'right') {
    top = spotlight.y + spotlight.h / 2 - bh / 2
    left = spotlight.x + spotlight.w + margin
  } else {
    top = spotlight.y + spotlight.h / 2 - bh / 2
    left = spotlight.x - bw - margin
  }

  // Garde la bulle dans les limites de l'écran
  left = Math.max(16, Math.min(left, vw - bw - 16))
  top  = Math.max(16, Math.min(top,  vh - bh - 16))
  bubble.style.left = left + 'px'
  bubble.style.top  = top  + 'px'
}

function stepCounter(stepIdx) {
  const visibleSteps = TUTORIAL_SCRIPT.filter(s => s.type !== 'navigate').length
  let seen = 0
  for (let i = 0; i <= stepIdx; i++) if (TUTORIAL_SCRIPT[i].type !== 'navigate') seen++
  return `${seen} / ${visibleSteps}`
}

async function runStep(idx) {
  if (idx >= TUTORIAL_SCRIPT.length) { finishTutorial(); return }
  const step = TUTORIAL_SCRIPT[idx]

  // ── Navigate ──
  if (step.type === 'navigate') {
    navigate(step.route)
    await wait(step.waitMs || 500)
    await runStep(idx + 1)
    return
  }

  // ── Modal plein écran ──
  if (step.type === 'modal') {
    clearSpotlight()
    const modal = overlay.querySelector('#ittuto-modal')
    const bubble = overlay.querySelector('#ittuto-bubble')
    bubble.style.display = 'none'
    modal.style.display = 'flex'
    overlay.querySelector('#ittuto-modal-emoji').textContent = step.emoji || '💡'
    overlay.querySelector('#ittuto-modal-title').textContent = step.title || ''
    overlay.querySelector('#ittuto-modal-text').textContent  = step.text  || ''
    overlay.querySelector('#ittuto-modal-counter').textContent = stepCounter(idx)
    const btn = overlay.querySelector('#ittuto-modal-next')
    btn.textContent = step.isLast ? '🚀 C\'est parti !' : 'Suivant →'
    btn.onclick = null
    btn.addEventListener('click', () => {
      modal.style.display = 'none'
      currentStep = idx + 1
      runStep(currentStep)
    }, { once: true })
    return
  }

  // ── Spotlight ──
  if (step.type === 'spotlight') {
    const bubble  = overlay.querySelector('#ittuto-bubble')
    const modal   = overlay.querySelector('#ittuto-modal')
    modal.style.display = 'none'

    const el = document.querySelector(step.selector)
      || (step.fallbackSelector && document.querySelector(step.fallbackSelector))

    if (!el) {
      // Élément absent (page pas encore rendue, feature désactivée) → skip
      console.warn('[ITuto] sélecteur introuvable, skip :', step.selector)
      currentStep = idx + 1; runStep(currentStep); return
    }

    el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    await wait(200)
    const sp = spotlightElement(el)
    const vw = window.innerWidth, vh = window.innerHeight

    bubble.style.display = 'block'
    overlay.querySelector('#ittuto-bubble-title').textContent = step.bubble?.title || ''
    overlay.querySelector('#ittuto-bubble-text').textContent  = step.bubble?.text  || ''
    overlay.querySelector('#ittuto-step-counter').textContent = stepCounter(idx)
    positionBubble(sp, step.bubble?.side || 'bottom', vw, vh)

    const nextBtn = overlay.querySelector('#ittuto-next-btn')
    nextBtn.onclick = null
    nextBtn.addEventListener('click', () => {
      bubble.style.display = 'none'
      currentStep = idx + 1; runStep(currentStep)
    }, { once: true })
    return
  }

  // ── wait_click : attend un clic réel sur l'élément ──
  if (step.type === 'wait_click') {
    const el = document.querySelector(step.selector)
    if (!el) { currentStep = idx + 1; runStep(currentStep); return }
    const sp = spotlightElement(el)
    const vw = window.innerWidth, vh = window.innerHeight

    const bubble = overlay.querySelector('#ittuto-bubble')
    bubble.style.display = 'block'
    overlay.querySelector('#ittuto-bubble-title').textContent = step.bubble?.title || ''
    overlay.querySelector('#ittuto-bubble-text').textContent  = step.bubble?.text  || ''
    overlay.querySelector('#ittuto-step-counter').textContent = stepCounter(idx)
    positionBubble(sp, step.bubble?.side || 'bottom', vw, vh)
    overlay.querySelector('#ittuto-next-btn').style.display = 'none'

    // Laisser passer les clics sur l'élément ciblé (le reste reste bloqué)
    const passThrough = (e) => {
      if (el.contains(e.target) || el === e.target) {
        overlay.style.pointerEvents = 'none'
        el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        setTimeout(() => {
          overlay.style.pointerEvents = 'all'
          overlay.querySelector('#ittuto-next-btn').style.display = ''
          bubble.style.display = 'none'
          currentStep = idx + 1; runStep(currentStep)
        }, step.waitAfterMs || 400)
      }
    }
    overlay.addEventListener('click', passThrough, { once: true })
    return
  }
}

async function finishTutorial() {
  if (overlay) { overlay.remove(); overlay = null }
  try {
    await supabase.from('users').update({ tutorial_done: true })
      .eq('id', (await supabase.auth.getUser()).data?.user?.id)
  } catch {}
  onDone?.()
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)) }
