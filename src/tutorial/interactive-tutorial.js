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
    // Si le joueur a déjà un deck → cliquer dessus pour ouvrir le terrain.
    // Sinon → afficher un terrain pré-scripté avec des joueurs fictifs.
    type: 'open_deck_or_demo',
    bubble: { side: 'right', title: '⚽ Le terrain', text: 'Voici un aperçu d\'une formation. Chaque point est un joueur positionné sur le terrain. Les lignes entre les joueurs représentent les liens — plus de liens = plus de bonus de jeu !' },
  },
  {
    type: 'spotlight',
    selector: '#deck-field-wrap, .pitch-wrap, [id*="deck-field"], #page-content',
    bubble: { side: 'top', title: '➕ Ajouter un joueur', text: 'Clique sur un emplacement vide (en grisé) pour choisir un joueur de ta collection à placer à ce poste. Ta formation commence à prendre vie !' },
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
    const modal = overlay.querySelector('#ittuto-modal')
    modal.style.display = 'none'

    const el = document.querySelector(step.selector)
      || (step.fallbackSelector && document.querySelector(step.fallbackSelector))

    if (!el) {
      console.warn('[ITuto] sélecteur introuvable, skip :', step.selector)
      currentStep = idx + 1; runStep(currentStep); return
    }

    el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    await wait(200)
    const sp = spotlightElement(el)
    showBubble(step.bubble, sp, idx)
    return
  }

  // ── open_deck_or_demo : ouvre le 1er deck existant, ou affiche un terrain démo ──
  if (step.type === 'open_deck_or_demo') {
    const firstDeck = document.querySelector('[data-open-deck]')
    if (firstDeck) {
      // Deck existant → cliquer pour ouvrir le terrain réel
      overlay.style.pointerEvents = 'none'
      firstDeck.click()
      overlay.style.pointerEvents = 'all'
      await wait(800)
      const el = document.querySelector('#deck-field-wrap, .pitch-wrap, [id*="deck-field"], #page-content')
      if (el) {
        const sp = spotlightElement(el)
        showBubble(step.bubble, sp, idx)
      } else { currentStep = idx + 1; runStep(currentStep) }
    } else {
      // Aucun deck → afficher un terrain de démonstration en overlay
      showDemoTerrain(step.bubble, idx)
    }
    return
  }


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

function showBubble(bubbleCfg, sp, idx) {
  const bubble = overlay.querySelector('#ittuto-bubble')
  const modal  = overlay.querySelector('#ittuto-modal')
  modal.style.display = 'none'
  bubble.style.display = 'block'
  overlay.querySelector('#ittuto-bubble-title').textContent = bubbleCfg?.title || ''
  overlay.querySelector('#ittuto-bubble-text').textContent  = bubbleCfg?.text  || ''
  overlay.querySelector('#ittuto-step-counter').textContent = stepCounter(idx)
  const vw = window.innerWidth, vh = window.innerHeight
  positionBubble(sp, bubbleCfg?.side || 'bottom', vw, vh)
  const nextBtn = overlay.querySelector('#ittuto-next-btn')
  nextBtn.style.display = ''
  nextBtn.onclick = null
  nextBtn.addEventListener('click', () => {
    bubble.style.display = 'none'
    currentStep = idx + 1; runStep(currentStep)
  }, { once: true })
}

// Terrain de démonstration : affiché si le joueur n'a encore aucun deck.
// Formation 4-3-3 pré-scriptée avec 11 joueurs fictifs plausibles, sur fond
// vert, avec des points positionnés selon la formation réelle du jeu.
function showDemoTerrain(bubbleCfg, idx) {
  clearSpotlight()
  const modal  = overlay.querySelector('#ittuto-modal')
  const bubble = overlay.querySelector('#ittuto-bubble')
  modal.style.display = 'none'
  bubble.style.display = 'none'

  const DEMO_PLAYERS = [
    { pos: [50, 90],  name: 'BARTHEZ',    note: 74, job: 'GK',  flag: 'FR' },
    { pos: [15, 72],  name: 'THURAM',     note: 82, job: 'DEF', flag: 'FR' },
    { pos: [38, 72],  name: 'DESAILLY',   note: 78, job: 'DEF', flag: 'FR' },
    { pos: [62, 72],  name: 'BLANC',      note: 80, job: 'DEF', flag: 'FR' },
    { pos: [85, 72],  name: 'LIZARAZU',   note: 79, job: 'DEF', flag: 'FR' },
    { pos: [22, 48],  name: 'VIEIRA',     note: 85, job: 'MIL', flag: 'FR' },
    { pos: [50, 44],  name: 'DESCHAMPS',  note: 77, job: 'MIL', flag: 'FR' },
    { pos: [78, 48],  name: 'PETIT',      note: 76, job: 'MIL', flag: 'FR' },
    { pos: [20, 22],  name: 'WILTORD',    note: 80, job: 'ATT', flag: 'FR' },
    { pos: [50, 18],  name: 'ZIDANE',     note: 96, job: 'ATT', flag: 'FR' },
    { pos: [80, 22],  name: 'HENRY',      note: 93, job: 'ATT', flag: 'FR' },
  ]
  const JOB_COLOR = { GK: '#888', DEF: '#bb2020', MIL: '#D4A017', ATT: '#1A6B3C' }
  const LINKS = [[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[2,6],[3,6],[3,7],[4,7],[5,8],[6,9],[7,10],[5,6],[6,7]]

  const vw = window.innerWidth, vh = window.innerHeight
  const W = Math.min(vw - 32, 360), H = Math.round(W * 1.05)
  const left = (vw - W) / 2, top = (vh - H) / 2 - 20

  const demo = document.createElement('div')
  demo.id = 'ittuto-demo-terrain'
  demo.style.cssText = `position:fixed;left:${left}px;top:${top}px;width:${W}px;height:${H}px;z-index:9805;border-radius:12px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.6)`
  demo.innerHTML = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <!-- Fond terrain vert -->
      <defs>
        <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a5c28"/>
          <stop offset="100%" stop-color="#0f3a18"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#tg)"/>
      <!-- Lignes du terrain -->
      <rect x="${W*.08}" y="${H*.04}" width="${W*.84}" height="${H*.92}" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
      <line x1="${W*.08}" y1="${H*.5}" x2="${W*.92}" y2="${H*.5}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <circle cx="${W*.5}" cy="${H*.5}" r="${W*.12}" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <!-- Liens entre joueurs -->
      ${LINKS.map(([a,b]) => {
        const pa = DEMO_PLAYERS[a], pb = DEMO_PLAYERS[b]
        const x1 = W*pa.pos[0]/100, y1 = H*pa.pos[1]/100
        const x2 = W*pb.pos[0]/100, y2 = H*pb.pos[1]/100
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,215,0,0.55)" stroke-width="1.5" stroke-dasharray="4,3"/>`
      }).join('')}
      <!-- Joueurs -->
      ${DEMO_PLAYERS.map(p => {
        const x = W*p.pos[0]/100, y = H*p.pos[1]/100, r = W*0.072
        const c = JOB_COLOR[p.job]
        const flag = `https://flagsapi.com/${p.flag}/flat/32.png`
        const nameW = Math.min(p.name.length * 5.5, W*0.28)
        const fs = Math.max(6, Math.min(9, Math.round(nameW*0.9/Math.max(p.name.length,1))))
        return `
          <circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <text x="${x}" y="${y+3.5}" text-anchor="middle" font-size="${r*0.62}" font-family="Arial Black,Arial" font-weight="900" fill="#fff">${p.note}</text>
          <rect x="${x-r*0.85}" y="${y+r+2}" width="${r*1.7}" height="${r*0.75}" rx="3" fill="rgba(0,0,0,0.7)"/>
          <text x="${x}" y="${y+r+2+r*0.55}" text-anchor="middle" font-size="${Math.max(5, r*0.42)}" font-family="Arial,sans-serif" font-weight="700" fill="#fff">${p.name}</text>
        `
      }).join('')}
    </svg>`
  overlay.appendChild(demo)

  // Spotlight sur le terrain démo
  const rect = demo.getBoundingClientRect()
  const hole = overlay.querySelector('#ittuto-hole-rect')
  hole.setAttribute('x', rect.left - 4); hole.setAttribute('y', rect.top - 4)
  hole.setAttribute('width', rect.width + 8); hole.setAttribute('height', rect.height + 8)

  bubble.style.display = 'block'
  overlay.querySelector('#ittuto-bubble-title').textContent = bubbleCfg?.title || ''
  overlay.querySelector('#ittuto-bubble-text').textContent  = bubbleCfg?.text  || ''
  overlay.querySelector('#ittuto-step-counter').textContent = stepCounter(idx)
  positionBubble({ x: rect.left-4, y: rect.top-4, w: rect.width+8, h: rect.height+8 },
    'right', window.innerWidth, window.innerHeight)

  const nextBtn = overlay.querySelector('#ittuto-next-btn')
  nextBtn.style.display = ''
  nextBtn.onclick = null
  nextBtn.addEventListener('click', () => {
    demo.remove()
    bubble.style.display = 'none'
    clearSpotlight()
    currentStep = idx + 1; runStep(currentStep)
  }, { once: true })
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
