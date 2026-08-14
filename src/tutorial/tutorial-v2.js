/**
 * tutorial-v2.js — Tutoriel interactif scriptable Manager Wars
 *
 * Architecture :
 * - Un overlay plein écran par-dessus l'app (z-index 9800+)
 * - Chaque chapitre affiche un FAUX écran construit en HTML (données fictives)
 *   → 100% indépendant de la vraie collection du joueur
 * - Certains chapitres réutilisent de vrais composants (renderPlayerCard,
 *   buildTeamSVG, showBoosterAnimation, renderMilRow)
 * - Tout clic en dehors de la zone guidée est bloqué (overlay absorbe les événements)
 * - Mobile-friendly : même breakpoints que la vraie app (< 900px)
 */

import { renderPlayerCard } from '../components/player-card.js'
import { renderGCCard, renderFormationCard, renderStadiumCard } from '../components/special-cards.js'
import { buildTeamSVG } from '../match/match-shared.js'
import { renderMilRow } from '../match/match-engine.js'
import { showBoosterAnimation } from '../boosters/boosters.js'
import { supabase } from '../lib/supabase.js'

// ═══════════════════════════════════════════════════════════════
// DONNÉES FICTIVES — modifier ici pour changer les joueurs du tuto
// ═══════════════════════════════════════════════════════════════

const FP = (id, first, surname, job, job2, nG, nD, nM, nA, rarity, flag, club, evo=0) => ({
  id, firstname: first, surname_real: surname, job, job2, rarity,
  note_g: nG, note_d: nD, note_m: nM, note_a: nA, evolution_bonus: evo,
  country_code: flag, club_id: club,
  clubs: { encoded_name: club, logo_url: null },
  face: null,
})

const FAKE_PLAYERS = [
  FP('f1','Fabien','BARTHEZ',    'GK',  null, 82, 0,  0,  0,  'normal',  'FR','PSG'),
  FP('f2','Marcel','DESAILLY',   'DEF', 'MIL',0,  84, 72, 0,  'pepite',  'FR','OM'),
  FP('f3','Lilian','THURAM',     'DEF', null, 0,  86, 0,  0,  'normal',  'FR','JUV'),
  FP('f4','Laurent','BLANC',     'DEF', null, 0,  83, 0,  0,  'normal',  'FR','OM'),
  FP('f5','Bixente','LIZARAZU',  'DEF', null, 0,  80, 0,  0,  'normal',  'FR','BAY'),
  FP('f6','Didier','DESCHAMPS',  'MIL', null, 0,  0,  79, 0,  'normal',  'FR','JUV'),
  FP('f7','Patrick','VIEIRA',    'MIL', 'ATT',0,  0,  88, 75, 'pepite',  'FR','ARS'),
  FP('f8','Emmanuel','PETIT',    'MIL', null, 0,  0,  77, 0,  'normal',  'FR','ARS'),
  FP('f9','Zinedine','ZIDANE',   'MIL', 'ATT',0,  0,  96, 82, 'legende', 'FR','REA', 45),
  FP('f10','Thierry','HENRY',    'ATT', null, 0,  0,  0,  93, 'legende', 'FR','ARS'),
  FP('f11','David','TREZEGUET',  'ATT', null, 0,  0,  0,  87, 'pepite',  'FR','JUV'),
]

const FAKE_FORMATION = '4-3-3'
const FAKE_TEAM = {
  GK:  [FAKE_PLAYERS[0]],
  DEF: [FAKE_PLAYERS[1], FAKE_PLAYERS[2], FAKE_PLAYERS[3], FAKE_PLAYERS[4]],
  MIL: [FAKE_PLAYERS[5], null, FAKE_PLAYERS[7]], // slot MIL2 vide pour l'étape 6
  ATT: [FAKE_PLAYERS[9], FAKE_PLAYERS[10], FAKE_PLAYERS[8]],
}
const FAKE_TEAM_FULL = {
  GK:  [FAKE_PLAYERS[0]],
  DEF: [FAKE_PLAYERS[1], FAKE_PLAYERS[2], FAKE_PLAYERS[3], FAKE_PLAYERS[4]],
  MIL: [FAKE_PLAYERS[5], FAKE_PLAYERS[6], FAKE_PLAYERS[7]],
  ATT: [FAKE_PLAYERS[9], FAKE_PLAYERS[10], FAKE_PLAYERS[8]],
}

// Cartes spéciales fictives
const FAKE_GC_CARTON = { id:'gc1', gc_type:'red_card', rarity:'pepite', name:'Carton Rouge', owned:true }
const FAKE_STADE = { id:'s1', name:'Stade de France', country_code:'FR' }
const FAKE_FORMATION_CARD = { id:'fo1', formation:'4-3-3', rarity:'normal' }

// 5 joueurs fictifs pour l'animation booster
const FAKE_BOOSTER_CARDS = [
  { id:'bc1', card_type:'player', evolution_bonus:0, player: FAKE_PLAYERS[9] },
  { id:'bc2', card_type:'player', evolution_bonus:0, player: FAKE_PLAYERS[10] },
  { id:'bc3', card_type:'player', evolution_bonus:0, player: FAKE_PLAYERS[6] },
  { id:'bc4', card_type:'player', evolution_bonus:0, player: FAKE_PLAYERS[2] },
  { id:'bc5', card_type:'player', evolution_bonus:0, player: FAKE_PLAYERS[4] },
]

// ═══════════════════════════════════════════════════════════════
// MOTEUR DU TUTORIEL
// ═══════════════════════════════════════════════════════════════

const isMobile = () => window.innerWidth < 900
let ov = null        // overlay principal
let onDone = null

export function startTutorialV2(done) {
  if (ov) return
  onDone = done
  buildOv()
  runChapter(0)
}

function buildOv() {
  if (ov) ov.remove()
  ov = document.createElement('div')
  ov.id = 'tv2-ov'
  ov.style.cssText = 'position:fixed;inset:0;z-index:9800;background:#0d1f14;overflow:hidden'
  ov.innerHTML = `
    <div id="tv2-screen" style="position:absolute;inset:0;overflow-y:auto"></div>
    <div id="tv2-bubble-wrap" style="position:absolute;inset:0;pointer-events:none;z-index:9820"></div>
    <div id="tv2-blocker" style="position:absolute;inset:0;z-index:9815;background:rgba(0,0,0,0.55);display:none"></div>
    <button id="tv2-skip" onclick="" style="position:fixed;top:14px;right:14px;z-index:9999;background:rgba(0,0,0,0.5);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:8px;padding:6px 12px;font-size:12px;cursor:pointer">✕ Passer le tuto</button>
    <div id="tv2-progress" style="position:fixed;bottom:0;left:0;right:0;height:3px;z-index:9999;background:rgba(255,255,255,0.1)">
      <div id="tv2-progress-bar" style="height:100%;background:#1A6B3C;transition:width .4s ease;width:0%"></div>
    </div>`
  document.body.appendChild(ov)
  ov.querySelector('#tv2-skip').addEventListener('click', finish)
}

function setProgress(chapterIdx) {
  const pct = Math.round(chapterIdx / CHAPTERS.length * 100)
  ov.querySelector('#tv2-progress-bar').style.width = pct + '%'
}

// Positionne et affiche une bulle à côté d'un élément du faux écran
function bubble({ title, text, targetSel = null, side = 'bottom', btnLabel = 'Suivant →', onBtn = null, isAction = false }) {
  const wrap = ov.querySelector('#tv2-bubble-wrap')
  wrap.innerHTML = ''
  wrap.style.pointerEvents = 'auto'

  const bDiv = document.createElement('div')
  bDiv.style.cssText = `position:absolute;max-width:${isMobile()?'90vw':'340px'};background:#fff;border-radius:14px;box-shadow:0 8px 40px rgba(0,0,0,0.45);padding:16px 18px;z-index:9821`

  bDiv.innerHTML = `
    <div style="font-weight:900;font-size:${isMobile()?'14':'15'}px;color:#1a1a2e;margin-bottom:6px">${title}</div>
    <div style="font-size:${isMobile()?'12':'13'}px;color:#555;line-height:1.55;white-space:pre-line">${text}</div>
    ${isAction ? `<div style="font-size:11px;color:#1A6B3C;font-weight:800;margin-top:10px">👆 ${btnLabel}</div>`
      : `<button id="tv2-next-btn" style="margin-top:12px;float:right;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:8px 18px;font-size:13px;font-weight:800;cursor:pointer">${btnLabel}</button>
         <div style="clear:both"></div>`}`
  wrap.appendChild(bDiv)

  const vw = window.innerWidth, vh = window.innerHeight

  if (targetSel) {
    const el = ov.querySelector(targetSel)
    if (el) {
      const r = el.getBoundingClientRect()
      // Spotlight : masque tout sauf la zone
      const blocker = ov.querySelector('#tv2-blocker')
      blocker.style.display = 'block'
      const hole = document.createElement('div')
      hole.style.cssText = `position:absolute;left:${r.left-4}px;top:${r.top-4}px;width:${r.width+8}px;height:${r.height+8}px;border-radius:10px;box-shadow:0 0 0 9999px rgba(0,0,0,0.55);pointer-events:none;z-index:9816`
      ov.querySelector('#tv2-blocker').appendChild(hole)
      // Positionner la bulle
      const BW = isMobile() ? vw * 0.9 : 340, BH = 160
      let bl = r.left + r.width/2 - BW/2
      let bt = side === 'bottom' ? r.bottom + 10 : r.top - BH - 10
      bl = Math.max(8, Math.min(bl, vw - BW - 8))
      bt = Math.max(8, Math.min(bt, vh - BH - 8))
      bDiv.style.left = bl + 'px'
      bDiv.style.top  = bt + 'px'
      bDiv.style.width = BW + 'px'
    }
  } else {
    // Bulle centrée (pour les modales sans spotlight)
    ov.querySelector('#tv2-blocker').style.display = 'none'
    bDiv.style.left = '50%'
    bDiv.style.top  = '50%'
    bDiv.style.transform = 'translate(-50%,-50%)'
    bDiv.style.width = isMobile() ? '90vw' : '360px'
  }

  if (!isAction) {
    bDiv.querySelector('#tv2-next-btn')?.addEventListener('click', () => {
      ov.querySelector('#tv2-blocker').style.display = 'none'
      ov.querySelector('#tv2-bubble-wrap').innerHTML = ''
      onBtn?.()
    }, { once: true })
  } else {
    // Mode action : surveiller un clic sur la cible
    if (targetSel) {
      const el = ov.querySelector(targetSel)
      if (el) {
        el.style.pointerEvents = 'auto'
        el.style.cursor = 'pointer'
        el.addEventListener('click', () => {
          ov.querySelector('#tv2-blocker').style.display = 'none'
          ov.querySelector('#tv2-bubble-wrap').innerHTML = ''
          onBtn?.()
        }, { once: true })
        // Laisser passer le clic sur cet élément uniquement
        ov.querySelector('#tv2-blocker').addEventListener('click', e => {
          const r2 = el.getBoundingClientRect()
          if (e.clientX >= r2.left && e.clientX <= r2.right && e.clientY >= r2.top && e.clientY <= r2.bottom) {
            el.click()
          }
        })
      }
    }
  }
}

function screen(html) {
  ov.querySelector('#tv2-screen').innerHTML = html
  ov.querySelector('#tv2-blocker').style.display = 'none'
  ov.querySelector('#tv2-blocker').innerHTML = ''
  ov.querySelector('#tv2-bubble-wrap').innerHTML = ''
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

// ═══════════════════════════════════════════════════════════════
// CHAPITRES
// ═══════════════════════════════════════════════════════════════

function navBar(active) {
  const tabs = [
    { key:'home',     label:'ACCUEIL',  emoji:'🏠' },
    { key:'cards',    label:'CARTES',   emoji:'🃏' },
    { key:'decks',    label:'EQUIPES',  emoji:'👥' },
    { key:'boosters', label:'BOUTIQUE', emoji:'🎁' },
    { key:'market',   label:'MERCATO',  emoji:'💰' },
  ]
  if (isMobile()) {
    return `<div style="position:fixed;bottom:0;left:0;right:0;background:#05080a;border-top:1px solid rgba(255,255,255,0.1);display:flex;align-items:stretch;justify-content:space-around;padding:9px 6px 9px;z-index:200">
      ${tabs.map(t => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:9px;font-weight:700;color:${t.key===active?'#D4A017':'rgba(255,255,255,0.45)'}">
        <span style="font-size:22px">${t.emoji}</span>${t.label}</div>`).join('')}
    </div>`
  }
  return `<div style="position:fixed;top:0;left:0;right:0;background:#05080a;border-bottom:1px solid rgba(255,255,255,0.12);display:flex;align-items:center;padding:0 24px;height:56px;gap:12px;z-index:200">
    <div style="font-size:22px">⚽</div>
    <div style="flex:1"></div>
    ${tabs.map(t => `<div style="padding:8px 16px;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;${t.key===active?'background:#1A6B3C;color:#fff':'color:rgba(255,255,255,0.5)'}">${t.emoji} ${t.label}</div>`).join('')}
  </div>`
}

function pageWrap(content, active) {
  const pt = isMobile() ? '16px 16px 80px' : '72px 24px 24px'
  return `${navBar(active)}<div style="padding:${pt};min-height:100vh;color:#fff">${content}</div>`
}

// Taille de carte adaptée
const CARD_W = () => isMobile() ? 110 : 160

const CHAPTERS = [

  // ── Chapitre 0 : intro ──────────────────────────────────────
  async () => {
    screen(pageWrap(`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:70vh;text-align:center;gap:16px">
      <div style="font-size:64px">⚽</div>
      <h1 style="font-size:${isMobile()?'22':'28'}px;font-weight:900;margin:0">Bienvenue dans Manager Wars !</h1>
      <p style="font-size:${isMobile()?'13':'15'}px;color:rgba(255,255,255,0.6);max-width:400px;line-height:1.6">Ce tutoriel te guide à travers toutes les fonctionnalités du jeu. Tu vas découvrir la collection, les formations, les boosters et le système de match.</p>
    </div>`, 'home'))
    bubble({ title:'🏆 Le tutoriel Manager Wars', text:'En quelques minutes, tu vas apprendre tout ce qu\'il faut pour devenir un grand manager.\n\nClique sur Suivant pour commencer !', btnLabel:'C\'est parti ! →', onBtn:() => nextChapter() })
  },

  // ── Chapitre 1 : Collection ─────────────────────────────────
  async () => {
    const w = CARD_W()
    const highlighted = FAKE_PLAYERS[8] // Zidane
    const others = FAKE_PLAYERS.filter(p => p.id !== highlighted.id).slice(0, isMobile() ? 3 : 6)
    screen(pageWrap(`
      <h2 style="margin:0 0 16px;font-size:${isMobile()?'18':'22'}px">🃏 Ma collection</h2>
      <div style="display:flex;gap:${isMobile()?'8':'12'}px;overflow-x:auto;padding-bottom:16px;-webkit-overflow-scrolling:touch">
        ${others.map(p => `<div style="flex-shrink:0;opacity:0.5">${renderPlayerCard(p,{width:isMobile()?70:100,context:'collection'})}</div>`).join('')}
        <div id="tv2-main-card" style="flex-shrink:0;transform:scale(1.05);transform-origin:top center;box-shadow:0 8px 32px rgba(212,160,23,0.4);border-radius:12px">
          ${renderPlayerCard(highlighted,{width:w,context:'collection'})}
        </div>
        ${others.slice(0,2).map(p => `<div style="flex-shrink:0;opacity:0.5">${renderPlayerCard(p,{width:isMobile()?70:100,context:'collection'})}</div>`).join('')}
      </div>`, 'cards'))
    await wait(200)
    bubble({ title:'🃏 Ta collection de cartes', text:'Chaque carte représente un joueur. Glisse horizontalement pour parcourir ta collection.\n\nLa carte mise en avant (ZIDANE) est une carte Légende — les plus puissantes du jeu !', targetSel:'#tv2-main-card', side:'bottom', onBtn:() => showCardDetails() })
  },

  // Détails carte (sous-étapes du chapitre 1)
  async () => {
    const w = CARD_W()
    const p = FAKE_PLAYERS[8]
    screen(pageWrap(`
      <h2 style="margin:0 0 16px;font-size:${isMobile()?'18':'22'}px">🃏 Ma collection</h2>
      <div style="display:flex;${isMobile()?'flex-direction:column;align-items:center':'gap:32px;align-items:flex-start'}">
        <div id="tv2-detail-card" style="flex-shrink:0">${renderPlayerCard(p,{width:isMobile()?160:220,context:'collection'})}</div>
        <div style="flex:1;min-width:0">
          <div id="tv2-card-name" style="background:rgba(255,255,255,0.06);border-radius:10px;padding:12px;margin-bottom:8px"><b>Nom du joueur</b> — affiché en haut de la carte</div>
          <div id="tv2-card-note" style="background:rgba(255,255,255,0.06);border-radius:10px;padding:12px;margin-bottom:8px"><b>Note principale (${p.note_m})</b> — la force du joueur à son poste naturel (MIL)</div>
          <div id="tv2-card-note2" style="background:rgba(212,160,23,0.1);border:1px solid rgba(212,160,23,0.3);border-radius:10px;padding:12px;margin-bottom:8px"><b>Note secondaire (${p.note_a})</b> — ce joueur peut aussi jouer ATT avec une note de ${p.note_a}</div>
          <div id="tv2-card-flag" style="background:rgba(255,255,255,0.06);border-radius:10px;padding:12px;margin-bottom:8px"><b>🇫🇷 Drapeau du pays</b> — utile pour les liens de nationalité (+5 pts)</div>
          <div id="tv2-card-club" style="background:rgba(255,255,255,0.06);border-radius:10px;padding:12px"><b>Club (REA)</b> — utile pour les liens de club (+5 pts entre coéquipiers)</div>
        </div>
      </div>`, 'cards'))
    await wait(200)

    const steps = [
      { sel:'#tv2-card-name',  t:'📛 Le nom du joueur', txt:'Le nom s\'affiche en haut de la carte. Les joueurs les plus connus ont des cartes Pépite (or) ou Légende (violet) avec des notes bien plus élevées.' },
      { sel:'#tv2-card-note',  t:'🔢 La note principale', txt:'C\'est la force du joueur à son poste naturel. Cette note est utilisée lors des duels de match.' },
      { sel:'#tv2-card-note2', t:'🔸 La note secondaire', txt:'Certains joueurs peuvent jouer à deux postes ! Zidane peut jouer MIL (96) ou ATT (82). Cette flexibilité est un gros avantage tactique.' },
      { sel:'#tv2-card-flag',  t:'🏳️ Le pays', txt:'Le pays du joueur crée des liens avec ses compatriotes dans ta formation. Deux joueurs du même pays côte à côte = +5 pts chacun !' },
      { sel:'#tv2-card-club',  t:'🛡️ Le club', txt:'Le club crée aussi des liens dans la formation. Deux coéquipiers du même club placés côte à côte = +5 pts chacun !' },
    ]

    const runStep = (i) => {
      if (i >= steps.length) { nextChapter(); return }
      const s = steps[i]
      bubble({ title:s.t, text:s.txt, targetSel:s.sel, side:'right', btnLabel: i < steps.length-1 ? 'Suivant →' : 'J\'ai compris !', onBtn:() => runStep(i+1) })
    }
    runStep(0)
  },

  // ── Chapitre 2 : Clic sur carte ─────────────────────────────
  async () => {
    const w = isMobile() ? 140 : 200
    const p = FAKE_PLAYERS[9] // Henry
    screen(pageWrap(`
      <h2 style="margin:0 0 16px">🃏 Ma collection</h2>
      <div style="display:flex;${isMobile()?'flex-direction:column;align-items:center':'gap:32px'};align-items:flex-start">
        <div id="tv2-click-card" style="cursor:pointer;transition:transform .2s;transform:scale(1)">${renderPlayerCard(p,{width:w,context:'collection'})}</div>
        <div id="tv2-card-menu" style="display:none;flex-direction:column;gap:10px;padding:16px;background:rgba(255,255,255,0.06);border-radius:14px;min-width:220px">
          <div id="tv2-menu-sell" style="padding:12px;border-radius:10px;background:rgba(231,76,60,0.15);border:1px solid rgba(231,76,60,0.3);cursor:pointer">💰 Vente rapide — <b>+200 crédits</b></div>
          <div id="tv2-menu-mercato" style="padding:12px;border-radius:10px;background:rgba(26,107,60,0.15);border:1px solid rgba(26,107,60,0.3);cursor:pointer">🏪 Mettre sur le Mercato — fixe ton propre prix</div>
          <div id="tv2-menu-evolve" style="padding:12px;border-radius:10px;background:rgba(212,160,23,0.15);border:1px solid rgba(212,160,23,0.3);cursor:pointer">⬆️ Faire évoluer — fusionne des doublons pour booster la note</div>
        </div>
      </div>`, 'cards'))
    await wait(200)
    bubble({ title:'👆 Clique sur la carte', text:'Clique sur la carte Henry pour voir ce que tu peux faire avec !', targetSel:'#tv2-click-card', side:'right', isAction:true, btnLabel:'Clique sur la carte !', onBtn:() => {
      const card = ov.querySelector('#tv2-click-card')
      if (card) { card.style.transform = 'scale(0.97)'; setTimeout(()=>card.style.transform='scale(1)',150) }
      ov.querySelector('#tv2-card-menu').style.display = 'flex'
      wait(300).then(() => {
        const steps2 = [
          { sel:'#tv2-menu-sell',    t:'💰 Vente rapide', txt:'Vends immédiatement ta carte contre des crédits. Pratique pour les cartes en doublon dont tu n\'as pas besoin !' },
          { sel:'#tv2-menu-mercato', t:'🏪 Le Mercato', txt:'Mets ta carte aux enchères sur le Mercato. D\'autres joueurs pourront l\'acheter. Tu fixes le prix !' },
          { sel:'#tv2-menu-evolve',  t:'⬆️ Faire évoluer', txt:'Si tu as plusieurs fois le même joueur (doublons), tu peux les fusionner pour augmenter définitivement sa note. Plus de doublons = plus de bonus !' },
        ]
        const run2 = (i) => {
          if (i >= steps2.length) { nextChapter(); return }
          bubble({ title:steps2[i].t, text:steps2[i].txt, targetSel:steps2[i].sel, side:'right', btnLabel: i < steps2.length-1 ? 'Suivant →' : 'Compris !', onBtn:()=>run2(i+1) })
        }
        run2(0)
      })
    }})
  },

  // ── Chapitre 3 : Cartes spéciales ───────────────────────────
  async () => {
    const fc = renderFormationCard({ formation:'4-3-3', rarity:'normal' }, 150)
    const sc = renderStadiumCard({ id:'s1', name:'Parc des Princes', country_code:'FR' }, 150)
    const gc = renderGCCard({ gc_type:'red_card', rarity:'pepite' }, 150)
    screen(pageWrap(`
      <h2 style="margin:0 0 16px">🃏 Ma collection — Cartes spéciales</h2>
      <div style="display:flex;flex-wrap:wrap;gap:${isMobile()?'16':'24'}px;justify-content:center">
        <div style="text-align:center">
          <div id="tv2-form-card" style="display:inline-block">${fc}</div>
          <p style="font-size:12px;color:rgba(255,255,255,0.5);margin:8px 0 0">Formation</p>
        </div>
        <div style="text-align:center">
          <div id="tv2-stad-card" style="display:inline-block">${sc}</div>
          <p style="font-size:12px;color:rgba(255,255,255,0.5);margin:8px 0 0">Stade</p>
        </div>
        <div style="text-align:center">
          <div id="tv2-gc-card" style="display:inline-block">${gc}</div>
          <p style="font-size:12px;color:rgba(255,255,255,0.5);margin:8px 0 0">Game Changer</p>
        </div>
      </div>`, 'cards'))
    await wait(200)
    const steps3 = [
      { sel:'#tv2-form-card', t:'📋 Carte Formation', txt:'La carte Formation détermine la tactique de ton équipe. Chaque formation positionne différemment tes 11 joueurs sur le terrain.\n\nLa 4-3-3 est populaire pour son équilibre attaque/défense.' },
      { sel:'#tv2-stad-card', t:'🏟️ Carte Stade', txt:'Le Stade donne un bonus de +10 pts aux joueurs de la même nationalité ou du même club que le stade.\n\nLe Parc des Princes booste tous tes joueurs français !' },
      { sel:'#tv2-gc-card',   t:'⚡ Carte Game Changer', txt:'Le Game Changer est une carte action spéciale jouée pendant le match. Le Carton Rouge exclut un joueur adverse et réduit son score au duel du milieu !\n\nChaque Game Changer ne peut être utilisé qu\'une fois par match.' },
    ]
    const run3 = (i) => {
      if (i >= steps3.length) { nextChapter(); return }
      bubble({ title:steps3[i].t, text:steps3[i].txt, targetSel:steps3[i].sel, side:'bottom', btnLabel: i < steps3.length-1 ? 'Suivant →' : 'Super !', onBtn:()=>run3(i+1) })
    }
    run3(0)
  },

  // ── Chapitre 4 : Formation avec slot vide ────────────────────
  async () => {
    const W = isMobile() ? window.innerWidth - 32 : 420
    const H = Math.round(W * 0.92)
    const teamForSVG = { ...FAKE_TEAM }
    const svgHTML = buildTeamSVG(teamForSVG, FAKE_FORMATION, null, [], W, H)
    screen(pageWrap(`
      <h2 style="margin:0 0 12px">👥 Ma formation — Deck France 98</h2>
      <div style="display:flex;${isMobile()?'flex-direction:column':'gap:24px'};align-items:flex-start">
        <div>
          <div id="tv2-terrain" style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">${svgHTML}</div>
          <p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0;text-align:center">Formation 4-3-3 · 1 milieu manquant</p>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;gap:8px">
          <div id="tv2-link-pays" style="padding:12px;border-radius:10px;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.25)">🇫🇷 <b>Lien Pays +5</b> — deux joueurs du même pays côte à côte</div>
          <div id="tv2-link-club" style="padding:12px;border-radius:10px;background:rgba(212,160,23,0.08);border:1px solid rgba(212,160,23,0.2)">🛡️ <b>Lien Club +5</b> — deux coéquipiers du même club</div>
          <div id="tv2-link-stad" style="padding:12px;border-radius:10px;background:rgba(79,195,247,0.08);border:1px solid rgba(79,195,247,0.2)">🏟️ <b>Stade +10</b> — bonus si le joueur partage la nationalité du stade</div>
        </div>
      </div>`, 'decks'))
    await wait(200)

    const stepsF = [
      { sel:'#tv2-terrain',    t:'⚽ Le terrain', txt:'Voici ta formation. Chaque cercle = un joueur. Le cercle grisé au milieu est un slot vide — tu dois y placer un milieu de terrain !' },
      { sel:'#tv2-link-pays',  t:'🇫🇷 Lien Pays (+5 pts)', txt:'Quand deux joueurs de la même nationalité sont côte à côte sur le terrain, chacun reçoit +5 pts lors des duels !\n\nTous tes joueurs sont français ici → beaucoup de liens !' },
      { sel:'#tv2-link-club',  t:'🛡️ Lien Club (+5 pts)', txt:'Même principe avec le club. Vieira et Petit jouent tous les deux à Arsenal → +5 pts chacun s\'ils sont voisins dans la formation.' },
      { sel:'#tv2-link-stad',  t:'🏟️ Bonus Stade (+10 pts)', txt:'Si tu équipes ta formation d\'une carte Stade France, tous tes joueurs français reçoivent +10 pts supplémentaires lors des duels du milieu !\n\nC\'est l\'un des bonus les plus puissants du jeu.' },
    ]
    const runF = (i) => {
      if (i >= stepsF.length) { nextChapter(); return }
      bubble({ title:stepsF[i].t, text:stepsF[i].txt, targetSel:stepsF[i].sel, side: i===0?'right':'left', btnLabel: i < stepsF.length-1 ? 'Suivant →' : 'Compris !', onBtn:()=>runF(i+1) })
    }
    runF(0)
  },

  // ── Chapitre 5 : Booster fictif ─────────────────────────────
  async () => {
    screen(pageWrap(`
      <h2 style="margin:0 0 16px">🎁 La Boutique</h2>
      <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center">
        <div id="tv2-booster-box" style="cursor:pointer;background:linear-gradient(135deg,#1a3a2a,#0d2016);border:2px solid #1A6B3C;border-radius:16px;padding:24px;text-align:center;width:160px;transition:transform .2s">
          <div style="font-size:48px;margin-bottom:8px">🎴</div>
          <div style="font-weight:900;font-size:15px;color:#fff">Booster Joueurs</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:4px">5 cartes joueurs</div>
          <div style="margin-top:12px;background:#1A6B3C;border-radius:8px;padding:8px;font-size:13px;font-weight:700;color:#fff">Ouvrir !</div>
        </div>
      </div>
      <p style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;margin-top:16px">Dans la vraie boutique, chaque booster a un coût en crédits.</p>`, 'boosters'))
    await wait(200)
    bubble({ title:'🎁 La Boutique', text:'Les boosters contiennent des cartes aléatoires. Plus la rareté est élevée, plus tes chances d\'obtenir un joueur Légende augmentent !\n\nClique sur "Ouvrir !" pour découvrir les 5 cartes de ce booster.', targetSel:'#tv2-booster-box', side:'right', isAction:true, btnLabel:'Clique pour ouvrir !', onBtn:() => {
      const fakeBoosterUI = { name:'Booster Joueurs Tutorial', type:'player', img: null }
      showBoosterAnimation(FAKE_BOOSTER_CARDS, fakeBoosterUI, () => {}, () => nextChapter())
    }})
  },

  // ── Chapitre 6 : Mercato ────────────────────────────────────
  async () => {
    const w = isMobile() ? 90 : 130
    const listings = [
      { p: FAKE_PLAYERS[6], price: 1200 },
      { p: FAKE_PLAYERS[1], price: 800 },
      { p: FAKE_PLAYERS[10],price: 1500 },
    ]
    screen(pageWrap(`
      <h2 style="margin:0 0 16px">💰 Le Mercato</h2>
      <div style="display:flex;flex-direction:column;gap:10px" id="tv2-mercato-list">
        ${listings.map(l => `
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
            <div style="flex-shrink:0">${renderPlayerCard(l.p,{width:w,context:'mercato'})}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:${isMobile()?'13':'15'}px">${l.p.surname_real}</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.5)">${l.p.job} · ${l.p.country_code}</div>
            </div>
            <div style="text-align:right">
              <div style="font-weight:900;font-size:${isMobile()?'14':'16'}px;color:#D4A017">💰 ${l.price.toLocaleString()}</div>
              <div style="margin-top:6px;background:#1A6B3C;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;cursor:pointer">Acheter</div>
            </div>
          </div>`).join('')}
      </div>`, 'market'))
    await wait(200)
    bubble({ title:'🏪 Le Mercato', text:'Le Mercato est la place de marché du jeu. Les joueurs y vendent leurs cartes, tu peux y acheter des joueurs spécifiques pour compléter ta formation.\n\nConseil : surveille régulièrement le Mercato pour trouver de bonnes affaires !', targetSel:'#tv2-mercato-list', side:'top', onBtn:() => nextChapter() })
  },

  // ── Chapitre 7 : Accueil + modes de jeu ─────────────────────
  async () => {
    screen(pageWrap(`
      <h2 style="margin:0 0 16px">🏠 Accueil — Modes de jeu</h2>
      <div style="display:grid;grid-template-columns:${isMobile()?'1fr':'1fr 1fr'};gap:12px">
        <div id="tv2-mode-solo" style="padding:18px;background:linear-gradient(135deg,rgba(26,107,60,0.2),rgba(26,107,60,0.05));border:1px solid rgba(26,107,60,0.4);border-radius:14px;cursor:pointer">
          <div style="font-size:28px;margin-bottom:8px">🤖</div>
          <div style="font-weight:900;font-size:16px;margin-bottom:4px">Solo</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.55)">Affronte l'IA niveau par niveau. Parfait pour s'entraîner et gagner des récompenses.</div>
        </div>
        <div id="tv2-mode-ranked" style="padding:18px;background:linear-gradient(135deg,rgba(212,160,23,0.2),rgba(212,160,23,0.05));border:1px solid rgba(212,160,23,0.4);border-radius:14px;cursor:pointer">
          <div style="font-size:28px;margin-bottom:8px">🏆</div>
          <div style="font-weight:900;font-size:16px;margin-bottom:4px">Classé (Ranked)</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.55)">Affronte des joueurs réels. Grimpe dans le classement et gagne des récompenses exclusives.</div>
        </div>
        <div id="tv2-mode-ami" style="padding:18px;background:linear-gradient(135deg,rgba(79,195,247,0.2),rgba(79,195,247,0.05));border:1px solid rgba(79,195,247,0.4);border-radius:14px;cursor:pointer">
          <div style="font-size:28px;margin-bottom:8px">👥</div>
          <div style="font-weight:900;font-size:16px;margin-bottom:4px">Ami</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.55)">Invite un ami en partie privée. Défis amicaux sans impact sur le classement.</div>
        </div>
        <div id="tv2-mode-league" style="padding:18px;background:linear-gradient(135deg,rgba(155,89,182,0.2),rgba(155,89,182,0.05));border:1px solid rgba(155,89,182,0.4);border-radius:14px;cursor:pointer">
          <div style="font-size:28px;margin-bottom:8px">🥇</div>
          <div style="font-weight:900;font-size:16px;margin-bottom:4px">Mini-League</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.55)">Rejoins une ligue de 8 joueurs. Format championnat avec classement et récompenses finales.</div>
        </div>
      </div>`, 'home'))
    await wait(200)
    const modesSteps = [
      { sel:'#tv2-mode-solo',   t:'🤖 Mode Solo',       txt:'Le mode Solo est parfait pour débuter. Affronte l\'IA à des niveaux croissants pour tester ton équipe et gagner des crédits et cartes bonus.' },
      { sel:'#tv2-mode-ranked', t:'🏆 Mode Classé',     txt:'En Ranked, tu affrontes de vrais joueurs. Chaque victoire fait monter ton MMR (classement). Atteins les tops rangs pour des récompenses exclusives !' },
      { sel:'#tv2-mode-ami',    t:'👥 Mode Ami',        txt:'Défie un ami directement depuis son profil. Aucun enjeu de classement — juste pour le plaisir et les défis entre amis !' },
      { sel:'#tv2-mode-league', t:'🥇 Mini-League',     txt:'La Mini-League regroupe 8 managers dans un championnat. Plusieurs journées, un classement final, et des récompenses pour les meilleurs !' },
    ]
    const runM = (i) => {
      if (i >= modesSteps.length) { nextChapter(); return }
      bubble({ title:modesSteps[i].t, text:modesSteps[i].txt, targetSel:modesSteps[i].sel, side:'right', btnLabel: i < modesSteps.length-1 ? 'Suivant →' : 'Super, on joue !', onBtn:()=>runM(i+1) })
    }
    runM(0)
  },

  // ── Chapitre 8 : Match scripté ──────────────────────────────
  async () => {
    // Phase 1 : choisir le deck
    const W = isMobile() ? window.innerWidth - 32 : 380
    const H = Math.round(W * 0.92)
    screen(pageWrap(`
      <h2 style="margin:0 0 16px">⚽ Lancer un match Solo</h2>
      <div id="tv2-deck-choice" style="display:flex;flex-direction:column;gap:10px">
        <div id="tv2-deck-row" style="display:flex;align-items:center;gap:12px;padding:14px;background:rgba(255,255,255,0.06);border-radius:12px;border:2px solid rgba(26,107,60,0.5);cursor:pointer">
          <div style="font-size:24px">🇫🇷</div>
          <div style="flex:1"><div style="font-weight:800">France 98</div><div style="font-size:11px;color:rgba(255,255,255,0.5)">4-3-3 · 11/11 joueurs</div></div>
          <div style="font-size:12px;color:#1A6B3C;font-weight:700">Sélectionner</div>
        </div>
      </div>`, 'home'))
    await wait(200)
    bubble({ title:'⚽ Choix du deck', text:'Avant chaque match, tu choisis quelle équipe tu veux aligner.\n\nSélectionne le deck "France 98" pour ce match de démonstration.', targetSel:'#tv2-deck-row', isAction:true, btnLabel:'Clique pour sélectionner !', onBtn:() => showMatchGC() })
  },

  async () => { await showMatchGC() },   // placeholder, géré dans la fonction

]

// Phases du match scripté découpées pour lisibilité
async function showMatchGC() {
  const gc = renderGCCard({ gc_type:'red_card', rarity:'pepite' }, isMobile() ? 100 : 140)
  screen(pageWrap(`
    <h2 style="margin:0 0 16px">⚡ Choix du Game Changer</h2>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
      <div id="tv2-gc-choice" style="cursor:pointer;padding:8px;background:rgba(212,160,23,0.1);border:2px solid rgba(212,160,23,0.4);border-radius:12px;text-align:center">
        ${gc}
        <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:6px">Carton Rouge</div>
      </div>
      <div style="padding:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;text-align:center;opacity:0.5">
        <div style="width:${isMobile()?100:140}px;height:${isMobile()?100:140}px;display:flex;align-items:center;justify-content:center;font-size:32px">❔</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:6px">Autre GC</div>
      </div>
    </div>`, 'home'))
  await wait(200)
  bubble({ title:'⚡ Ton Game Changer', text:'Avant le match, choisis un Game Changer à garder en main secrète. Tu pourras l\'utiliser au bon moment pour retourner la situation !\n\nChoisis le Carton Rouge.', targetSel:'#tv2-gc-choice', isAction:true, btnLabel:'Sélectionner le Carton Rouge', onBtn:() => showMatchDuel() })
}

async function showMatchDuel() {
  // Construire deux équipes de milieux fictives
  const homeMils = [FAKE_PLAYERS[5], FAKE_PLAYERS[6], FAKE_PLAYERS[7]]
  const aiMils   = [
    FP('ai1','Diego','MARADONA', 'MIL', null, 0, 0, 94, 0, 'legende', 'AR', 'NAP'),
    FP('ai2','Ronaldo','NAZARIO','MIL', 'ATT',0, 0, 88, 92, 'legende', 'BR', 'BAR'),
    FP('ai3','Zinedine','RIVALDO','MIL', null,0, 0, 85, 0, 'pepite',  'BR', 'BAR'),
  ]
  const milRowHome = renderMilRow(homeMils, 'TON MILIEU', '#D4A017', 'home', null)
  const milRowAI   = renderMilRow(aiMils,   'MILIEU ADVERSE', '#bb2020', 'ai', null)
  const scoreHome = homeMils.reduce((s,p)=>s+(p.note_m||0),0)
  const scoreAI   = aiMils.reduce((s,p)=>s+(p.note_m||0),0)

  screen(`<div style="background:#0a1628;min-height:100vh;padding:${isMobile()?'16':'24'}px;color:#fff">
    <h2 style="text-align:center;margin:0 0 20px;font-size:${isMobile()?'16':'20'}px">⚔️ Duel du milieu de terrain</h2>
    <div id="tv2-score-bar" style="display:flex;align-items:center;justify-content:center;gap:24px;margin-bottom:24px">
      <div style="font-size:${isMobile()?'28':'36'}px;font-weight:900;color:#D4A017">0</div>
      <div style="font-size:${isMobile()?'13':'16'}px;color:rgba(255,255,255,0.5)">—</div>
      <div style="font-size:${isMobile()?'28':'36'}px;font-weight:900;color:#bb2020">0</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:24px;align-items:center">
      <div id="tv2-ai-row" style="width:100%">${milRowAI}</div>
      <div id="tv2-home-row" style="width:100%">${milRowHome}</div>
    </div>
    <div id="tv2-gc-banner" style="display:none;margin-top:16px;padding:12px;background:rgba(212,160,23,0.15);border:1px solid rgba(212,160,23,0.4);border-radius:10px;text-align:center;font-weight:700;color:#D4A017">
      ⚡ Carton Rouge joué ! Ronaldo Nazario est expulsé — score adverse réduit.
    </div>
    <div id="tv2-result-banner" style="display:none;margin-top:16px;padding:16px;background:rgba(26,107,60,0.2);border:1px solid rgba(26,107,60,0.5);border-radius:12px;text-align:center">
      <div style="font-size:28px;font-weight:900;color:#1A6B3C">🏆 Tu gagnes le duel !</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:6px">${scoreHome+10} vs ${scoreAI - aiMils[1].note_m + 0} (après carton rouge)</div>
    </div>
  </div>`)

  await wait(300)
  // Animer l'apparition des cartes
  ov.querySelectorAll('.duel-card').forEach((el,i) => {
    setTimeout(() => { el.style.opacity='1'; el.style.transform='translateY(0) scale(1)' }, 100+i*120)
  })
  ov.querySelectorAll('.duel-link').forEach((el,i) => setTimeout(()=>el.style.opacity='1', 500+i*80))
  ov.querySelectorAll('.duel-score-line').forEach(el => setTimeout(()=>el.style.opacity='1', 1200))

  await wait(400)
  bubble({ title:'⚔️ Le duel du milieu', text:'Au début de chaque match, vos milieux de terrain s\'affrontent ! Le total des notes de tes 3 milieux (+ les bonus liens) contre ceux de l\'adversaire.\n\nPlus ton total est élevé, plus tu as de chances de marquer en attaque !', onBtn:() => {
    bubble({ title:'⚡ Utiliser ton Game Changer !', text:'Tu vois que l\'adversaire est fort ? C\'est le bon moment d\'utiliser ton Carton Rouge !\n\nIl va expulser Ronaldo Nazario et réduire le score adverse.', targetSel:'#tv2-ai-row', side:'bottom', isAction:false, onBtn:() => {
      ov.querySelector('#tv2-gc-banner').style.display='block'
      ov.querySelector('#tv2-score-bar').innerHTML=`<div style="font-size:${isMobile()?'28':'36'}px;font-weight:900;color:#D4A017">${scoreHome}</div><div style="font-size:14px;color:rgba(255,255,255,0.5)">—</div><div style="font-size:${isMobile()?'28':'36'}px;font-weight:900;color:#bb2020">${scoreAI - aiMils[1].note_m}</div>`
      wait(800).then(() => {
        ov.querySelector('#tv2-result-banner').style.display='block'
        bubble({ title:'🏆 Tu remportes le duel !', text:`Ton score : ${scoreHome} pts\nAdversaire après carton rouge : ${scoreAI - aiMils[1].note_m} pts\n\nGrâce au Game Changer, tu prends l\'avantage ! Maintenant tu peux attaquer ou défendre selon la phase de jeu.`, onBtn:() => showMatchPhases() })
      })
    }})
  }})
}

async function showMatchPhases() {
  const W = isMobile() ? window.innerWidth - 32 : 360
  const H = Math.round(W * 0.92)
  screen(`<div style="background:#0a1628;min-height:100vh;padding:${isMobile()?'16':'24'}px;color:#fff">
    <h2 style="text-align:center;margin:0 0 8px">⚽ Phase de match</h2>
    <p style="text-align:center;color:rgba(255,255,255,0.5);font-size:12px;margin:0 0 16px">Tu attaques ! Sélectionne 3 attaquants</p>
    <div style="display:flex;justify-content:center;margin-bottom:16px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">
        ${buildTeamSVG(FAKE_TEAM_FULL, FAKE_FORMATION, 'attack', [], W, H)}
      </div>
    </div>
    <div id="tv2-phase-btns" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button id="tv2-btn-atk" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:13px;font-weight:800;cursor:pointer">⚔️ Attaquer (3 sélectionnés)</button>
      <button style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.5);border:none;border-radius:10px;padding:10px 20px;font-size:13px;font-weight:700;opacity:0.5">🛡️ Défendre</button>
    </div>
  </div>`)
  await wait(200)
  bubble({ title:'⚔️ Phase d\'attaque', text:'Tu gagnes le duel du milieu, donc tu choisis d\'abord !\n\nSur le terrain, clique sur 3 joueurs en surbrillance (tes attaquants et milieux) pour lancer une attaque.', targetSel:'#tv2-btn-atk', side:'top', isAction:true, btnLabel:'Lancer l\'attaque !', onBtn:() => showDefensePhase() })
}

async function showDefensePhase() {
  const W = isMobile() ? window.innerWidth - 32 : 360
  const H = Math.round(W * 0.92)
  screen(`<div style="background:#0a1628;min-height:100vh;padding:${isMobile()?'16':'24'}px;color:#fff">
    <h2 style="text-align:center;margin:0 0 8px">🛡️ Phase de match</h2>
    <p style="text-align:center;color:rgba(255,255,255,0.5);font-size:12px;margin:0 0 16px">L'adversaire attaque. Sélectionne 3 défenseurs !</p>
    <div style="display:flex;justify-content:center;margin-bottom:16px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">
        ${buildTeamSVG(FAKE_TEAM_FULL, FAKE_FORMATION, 'defense', [], W, H)}
      </div>
    </div>
    <div id="tv2-def-btns" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button id="tv2-btn-def" style="background:#1a3a8a;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:13px;font-weight:800;cursor:pointer">🛡️ Défendre (3 sélectionnés)</button>
    </div>
  </div>`)
  await wait(200)
  bubble({ title:'🛡️ Phase de défense', text:'L\'adversaire attaque maintenant ! Sélectionne 3 défenseurs ou milieux pour bloquer l\'attaque.\n\nPlus les notes de tes défenseurs sont élevées, plus tu as de chances d\'arrêter l\'attaque !', targetSel:'#tv2-btn-def', side:'top', isAction:true, btnLabel:'Défendre !', onBtn:() => showWinCondition() })
}

async function showWinCondition() {
  screen(`<div style="background:#0a1628;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;color:#fff;gap:16px">
    <div id="tv2-score-final" style="font-size:${isMobile()?'48':'64'}px;font-weight:900;letter-spacing:4px">2 — 1</div>
    <div style="font-size:${isMobile()?'14':'17'}px;color:rgba(255,255,255,0.7)">Victoire ! 🏆</div>
    <div id="tv2-win-expl" style="background:rgba(255,255,255,0.06);border-radius:14px;padding:20px;max-width:380px;text-align:left">
      <div style="font-weight:900;margin-bottom:12px;font-size:${isMobile()?'14':'16'}px">🏆 Comment gagner un match ?</div>
      <div style="font-size:${isMobile()?'12':'13'}px;color:rgba(255,255,255,0.7);line-height:1.7">
        • <b>3 phases</b> d'attaque + 3 de défense se succèdent<br>
        • Chaque attaque réussie = <b>+1 but</b><br>
        • Le joueur avec le plus de buts après les 6 phases gagne<br>
        • En cas d'égalité → <b>duel du milieu de terrain</b> décisif<br>
        • Les Game Changers peuvent tout changer en une action !
      </div>
    </div>
  </div>`)
  await wait(200)
  bubble({ title:'🏆 Comment gagner', text:'Un match se joue en 6 phases alternées (3 attaques, 3 défenses). Chaque attaque réussie donne 1 but.\n\nLe joueur avec le plus de buts gagne — et remonte dans le classement !', targetSel:'#tv2-win-expl', side:'top', onBtn:() => nextChapter() })
}

// Chapitre final
CHAPTERS.push(async () => {
  screen(`<div style="background:linear-gradient(160deg,#0a3d1e,#063015);min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;color:#fff;gap:20px">
    <div style="font-size:${isMobile()?'56':'72'}px">🏆</div>
    <h1 style="font-size:${isMobile()?'22':'28'}px;font-weight:900;margin:0">Tutoriel terminé !</h1>
    <p style="font-size:${isMobile()?'13':'15'}px;color:rgba(255,255,255,0.7);max-width:400px;line-height:1.6">Tu connais maintenant toutes les bases de Manager Wars. Ouvre tes boosters, construis ta meilleure équipe et lance ton premier match !</p>
    <button id="tv2-finish-btn" style="background:#1A6B3C;color:#fff;border:none;border-radius:12px;padding:14px 36px;font-size:16px;font-weight:900;cursor:pointer">🚀 Commencer à jouer !</button>
  </div>`)
  ov.querySelector('#tv2-finish-btn').addEventListener('click', finish)
})

// Helpers
let _chapterIdx = 0
async function nextChapter() {
  _chapterIdx++
  if (_chapterIdx >= CHAPTERS.length) { finish(); return }
  setProgress(_chapterIdx)
  await CHAPTERS[_chapterIdx]()
}

async function runChapter(idx) {
  _chapterIdx = idx
  setProgress(idx)
  await CHAPTERS[idx]()
}

async function finish() {
  if (ov) { ov.remove(); ov = null }
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) await supabase.from('users').update({ tutorial_done: true }).eq('id', user.id)
  } catch {}
  onDone?.()
}
