/**
 * tutorial-v2.js — Tutoriel interactif Manager Wars
 * Données 100% fictives (Ligue 1 1999-2000, clubs français)
 * Interface identique à la vraie app (mêmes classes CSS, icônes, header/footer)
 */
import { renderPlayerCard } from '../components/player-card.js'
import { renderGCCard, renderFormationCard, renderStadiumCard } from '../components/special-cards.js'
import { buildTeamSVG } from '../match/match-shared.js'
import { renderMilRow } from '../match/match-engine.js'
import { showBoosterAnimation } from '../boosters/boosters.js'
import { supabase } from '../lib/supabase.js'

const BASE = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/'
const ICON = BASE + 'icons/'

// ═══════════════════════════════════════════════════════════════════════
// JOUEURS FICTIFS — Ligue 1 française 1999-2000, evolution_bonus: 0
// (évite le bug note 96+45=141)
// ═══════════════════════════════════════════════════════════════════════
function mkP(id, first, sur, job, job2, nG, nD, nM, nA, rarity, flag, clubId, clubName) {
  return {
    id, firstname: first, surname_real: sur, job, job2,
    note_g: nG, note_d: nD, note_m: nM, note_a: nA,
    rarity, country_code: flag, club_id: clubId,
    clubs: { encoded_name: clubName, logo_url: null },
    evolution_bonus: 0, _evolution_bonus: 0, face: null,
  }
}

const P = {
  barthez:   mkP('t1','Fabien','BARTHEZ',    'GK',  null,  80,0,0,0,  'pepite', 'FR','OM1','OM'),
  vieira:    mkP('t2','Patrick','VIEIRA',    'MIL', 'ATT', 0,0,82,70, 'pepite', 'FR','ARS','ARS'),
  deschamps: mkP('t3','Didier','DESCHAMPS',  'MIL', null,  0,0,76,0,  'normal', 'FR','JUV','JUV'),
  desailly:  mkP('t4','Marcel','DESAILLY',   'DEF', 'MIL', 0,80,68,0, 'pepite', 'FR','CHE','CHE'),
  thuram:    mkP('t5','Lilian','THURAM',     'DEF', null,  0,82,0,0,  'normal', 'FR','PAR','PAR'),
  blanc:     mkP('t6','Laurent','BLANC',     'DEF', null,  0,80,0,0,  'normal', 'FR','INT','INT'),
  lizarazu:  mkP('t7','Bixente','LIZARAZU',  'DEF', null,  0,78,0,0,  'normal', 'FR','BAY','BAY'),
  zidane:    mkP('t8','Zinedine','ZIDANE',   'MIL', 'ATT', 0,0,92,78, 'legende','FR','JUV','JUV'),
  henry:     mkP('t9','Thierry','HENRY',     'ATT', null,  0,0,0,88,  'legende','FR','ARS','ARS'),
  trezeguet: mkP('t10','David','TREZEGUET', 'ATT', null,  0,0,0,84,  'pepite', 'FR','JUV','JUV'),
  petit:     mkP('t11','Emmanuel','PETIT',   'MIL', null,  0,0,74,0,  'normal', 'FR','BAR','BAR'),
  // Adversaires IA
  maradona:  mkP('ai1','Diego','MARADONA',   'MIL', null,  0,0,94,0,  'legende','AR','NAP','NAP'),
  ronaldo:   mkP('ai2','Ronaldo','NAZARIO',  'ATT', 'MIL', 0,0,72,92, 'legende','BR','BAR','BAR'),
  rivaldo:   mkP('ai3','Ronaldo','RIVALDO',  'MIL', null,  0,0,85,0,  'pepite', 'BR','BAR','BAR'),
}

const TEAM = {
  GK:  [P.barthez],
  DEF: [P.desailly, P.thuram, P.blanc, P.lizarazu],
  MIL: [P.deschamps, null, P.petit],   // slot MIL2 vide pour l'étape formation
  ATT: [P.henry, P.trezeguet, P.vieira],
}
const TEAM_FULL = {
  GK:  [P.barthez],
  DEF: [P.desailly, P.thuram, P.blanc, P.lizarazu],
  MIL: [P.deschamps, P.zidane, P.petit],
  ATT: [P.henry, P.trezeguet, P.vieira],
}

const BOOSTER_CARDS = [
  { id:'bc1', card_type:'player', evolution_bonus:0, player: P.zidane },
  { id:'bc2', card_type:'player', evolution_bonus:0, player: P.henry },
  { id:'bc3', card_type:'player', evolution_bonus:0, player: P.vieira },
  { id:'bc4', card_type:'player', evolution_bonus:0, player: P.desailly },
  { id:'bc5', card_type:'player', evolution_bonus:0, player: P.petit },
]

// ═══════════════════════════════════════════════════════════════════════
// MOTEUR
// ═══════════════════════════════════════════════════════════════════════
const isMobile = () => window.innerWidth < 900
const cw = () => isMobile() ? 100 : 150

let ov = null
let onDone = null

export function startTutorialV2(done) {
  if (ov) return
  onDone = done
  _idx = 0
  _buildOv()
  _run(0)
}

function _buildOv() {
  if (ov) ov.remove()
  ov = document.createElement('div')
  ov.id = 'tv2'
  // z-index plus haut que tout (nav fixée à 500, modales à 1000)
  ov.style.cssText = 'position:fixed;inset:0;z-index:9700;background:#0d1f14;overflow:hidden;display:flex;flex-direction:column'
  ov.innerHTML = `
    <div id="tv2-topbar" style="flex-shrink:0;background:#05080a;border-bottom:1px solid rgba(255,255,255,0.1);
      display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:${isMobile()?'50':'56'}px;position:relative;z-index:9730">
      <img src="${ICON}logo-withname.png" style="height:${isMobile()?'38':'44'}px;object-fit:contain" onerror="this.style.display='none'">
      <div style="display:flex;align-items:center;gap:8px">
        <div style="background:rgba(255,215,0,0.12);border:1px solid rgba(255,215,0,0.3);border-radius:20px;padding:5px 14px;font-size:${isMobile()?'12':'14'}px;font-weight:800;color:#D4A017">💰 1 839 440</div>
        <div style="background:rgba(255,255,255,0.08);border-radius:20px;padding:5px 12px;font-size:14px">⚙️</div>
      </div>
      <button id="tv2-skip" style="position:absolute;top:50%;right:${isMobile()?'8':'70'}px;transform:translateY(-50%);
        background:rgba(255,255,255,0.12);color:#fff;border:1px solid rgba(255,255,255,0.25);border-radius:8px;
        padding:5px 12px;font-size:11px;font-weight:700;cursor:pointer;z-index:9731">✕ Passer le tuto</button>
    </div>

    <div id="tv2-screen" style="flex:1;overflow-y:auto;position:relative;z-index:9710;padding-bottom:${isMobile()?'65':'16'}px"></div>

    <!-- Bottom nav identique à la vraie app -->
    <div id="tv2-botnav" style="flex-shrink:0;background:#05080a;border-top:1px solid rgba(255,255,255,0.1);
      display:${isMobile()?'flex':'none'};align-items:stretch;justify-content:space-around;
      padding:8px 4px calc(8px + env(safe-area-inset-bottom,0px));position:relative;z-index:9730">
      ${['ACCUEIL|home2|nav-home.png','CARTES|cards|nav-collection.png','EQUIPES|decks|nav-decks.png',
         'BOUTIQUE|boosters|nav-boosters.png','MERCATO|market|nav-market.png'].map(s => {
        const [label,key,icon] = s.split('|')
        return `<div class="tv2-tab" data-key="${key}" style="flex:1;display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:2px;padding:4px 2px;border-radius:10px;font-size:9px;font-weight:700;
          color:rgba(255,255,255,0.4);cursor:default">
          <img src="${ICON}${icon}" style="width:26px;height:26px;object-fit:contain;opacity:0.5"
            onerror="this.style.display='none';this.nextSibling.style.display='block'">
          <span style="display:none;font-size:20px">⚽</span>
          ${label}
        </div>`
      }).join('')}
    </div>

    <!-- Overlay bulle : z-index au-dessus de tout sauf le bouton skip -->
    <div id="tv2-dim" style="position:absolute;inset:0;z-index:9720;background:rgba(0,0,0,0);display:none;pointer-events:none"></div>
    <div id="tv2-bub" style="position:absolute;z-index:9740;display:none;max-width:${isMobile()?Math.round(window.innerWidth*0.9)+'px':'340px'};
      background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.5);padding:16px 18px;pointer-events:auto"></div>

    <div id="tv2-prog" style="position:absolute;bottom:${isMobile()?'65':'0'}px;left:0;right:0;height:3px;z-index:9731;background:rgba(255,255,255,0.08)">
      <div id="tv2-progbar" style="height:100%;background:#1A6B3C;transition:width .4s ease;width:0%"></div>
    </div>`

  document.body.appendChild(ov)
  ov.querySelector('#tv2-skip').addEventListener('click', _finish)
}

function setNav(activeKey) {
  ov.querySelectorAll('.tv2-tab').forEach(t => {
    const on = t.dataset.key === activeKey
    t.style.color = on ? '#D4A017' : 'rgba(255,255,255,0.4)'
    const img = t.querySelector('img')
    if (img) img.style.opacity = on ? '1' : '0.5'
  })
}

function setScreen(html, navKey) {
  ov.querySelector('#tv2-screen').innerHTML = `<div style="padding:${isMobile()?'16px 16px 8px':'24px'};color:#fff">${html}</div>`
  if (navKey) setNav(navKey)
  // Réinitialiser la bulle
  ov.querySelector('#tv2-bub').style.display = 'none'
  ov.querySelector('#tv2-dim').style.display = 'none'
  ov.querySelector('#tv2-dim').innerHTML = ''
  ov.querySelector('#tv2-dim').style.pointerEvents = 'none'
}

function setProgress(i, total) {
  ov.querySelector('#tv2-progbar').style.width = Math.round(i/total*100) + '%'
}

// Affiche une bulle positionnée sur un sélecteur du tv2-screen
// Si targetSel est null → bulle centrée à l'écran
function showBubble({ title, text, targetSel, side='bottom', btnLabel='Suivant →', onNext, isAction=false }) {
  const bub = ov.querySelector('#tv2-bub')
  const dim = ov.querySelector('#tv2-dim')

  bub.innerHTML = `
    <div style="font-weight:900;font-size:${isMobile()?'14':'15'}px;color:#1a1a2e;margin-bottom:8px">${title}</div>
    <div style="font-size:${isMobile()?'12':'13'}px;color:#555;line-height:1.55;white-space:pre-line">${text}</div>
    ${isAction
      ? `<div style="margin-top:12px;font-size:11px;color:#1A6B3C;font-weight:800">👆 ${btnLabel}</div>`
      : `<button id="tv2-next" style="margin-top:14px;float:right;background:#1A6B3C;color:#fff;border:none;
          border-radius:10px;padding:9px 20px;font-size:13px;font-weight:800;cursor:pointer">${btnLabel}</button>
         <div style="clear:both"></div>`}`

  const BW = isMobile() ? Math.round(window.innerWidth * 0.88) : 340
  bub.style.width = BW + 'px'

  const vw = window.innerWidth, vh = window.innerHeight

  if (targetSel) {
    const el = ov.querySelector(targetSel)
    if (el) {
      const r = el.getBoundingClientRect()
      // Spotlight via box-shadow sur un div positionné
      dim.style.display = 'block'
      dim.style.pointerEvents = 'none'
      dim.style.background = 'rgba(0,0,0,0)'
      dim.innerHTML = `<div style="position:absolute;left:${r.left-5}px;top:${r.top-5}px;
        width:${r.width+10}px;height:${r.height+10}px;border-radius:12px;
        box-shadow:0 0 0 4000px rgba(0,0,0,0.65);z-index:9721;pointer-events:none"></div>`

      const BH = 180
      let bl, bt
      if (side === 'bottom') { bt = r.bottom + 10; bl = r.left + r.width/2 - BW/2 }
      else if (side === 'top') { bt = r.top - BH - 10; bl = r.left + r.width/2 - BW/2 }
      else if (side === 'right') { bt = r.top + r.height/2 - BH/2; bl = r.right + 10 }
      else { bt = r.top + r.height/2 - BH/2; bl = r.left - BW - 10 }
      bl = Math.max(8, Math.min(bl, vw - BW - 8))
      bt = Math.max(8, Math.min(bt, vh - 200))
      bub.style.left = bl + 'px'; bub.style.top = bt + 'px'
      bub.style.removeProperty('transform')
    }
  } else {
    // Bulle centrée
    dim.style.display = 'block'
    dim.style.pointerEvents = 'none'
    dim.style.background = 'rgba(0,0,0,0)'
    dim.innerHTML = ''
    bub.style.left = '50%'; bub.style.top = '50%'
    bub.style.transform = 'translate(-50%,-50%)'
  }

  bub.style.display = 'block'

  if (!isAction) {
    const btn = bub.querySelector('#tv2-next')
    btn?.addEventListener('click', () => {
      bub.style.display = 'none'
      dim.style.display = 'none'
      dim.innerHTML = ''
      onNext?.()
    }, { once: true })
  } else {
    // Mode action : rend l'élément cliquable à travers la dim
    if (targetSel) {
      const el = ov.querySelector(targetSel)
      if (el) {
        // Le dim absorbe les clics; on détecte si c'est dans la zone de l'élément
        const doClick = (e) => {
          const r = el.getBoundingClientRect()
          if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
            bub.style.display = 'none'
            dim.style.display = 'none'
            dim.innerHTML = ''
            onNext?.()
          }
        }
        dim.style.pointerEvents = 'auto'
        dim.addEventListener('click', doClick, { once: true })
        // Aussi écouter directement sur l'élément
        el.style.cursor = 'pointer'
        el.addEventListener('click', () => {
          bub.style.display = 'none'
          dim.style.display = 'none'
          dim.innerHTML = ''
          onNext?.()
        }, { once: true })
      }
    }
  }
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

// ═══════════════════════════════════════════════════════════════════════
// SÉQUENCES — une fonction par chapitre
// ═══════════════════════════════════════════════════════════════════════

let _idx = 0
const TOTAL = 20  // nombre d'étapes au total pour la barre de progression

function next() { setProgress(++_idx, TOTAL); STEPS[_idx]?.() }

const STEPS = []
let _si = 0
function step(fn) { STEPS.push(fn) }

// ── 0 : Intro ───────────────────────────────────────────────────────
step(() => {
  setScreen(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:60vh;justify-content:center">
      <div style="font-size:${isMobile()?'52':'72'}px">⚽</div>
      <h1 style="font-size:${isMobile()?'20':'26'}px;font-weight:900;margin:0">Bienvenue dans Manager Wars !</h1>
      <p style="font-size:${isMobile()?'13':'15'}px;color:rgba(255,255,255,0.65);max-width:380px;line-height:1.6;margin:0">
        Ce tutoriel te guide à travers toutes les mécaniques du jeu en quelques minutes.
      </p>
    </div>`)
  showBubble({ title:'🏆 Tutoriel Manager Wars', text:'Tu vas découvrir :\n📌 La collection de cartes\n⚽ La formation\n🎁 Les boosters\n🏪 Le Mercato\n⚔️ Comment gagner un match !', btnLabel:"C'est parti !", onNext: next })
})

// ── 1 : Collection liste ────────────────────────────────────────────
step(() => {
  const players = [P.barthez, P.desailly, P.thuram, P.zidane, P.henry, P.trezeguet, P.petit]
  const mainCard = P.zidane
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🃏 Ma collection</h2>
    <div id="tv2-colrow" style="display:flex;gap:${isMobile()?'6':'10'}px;overflow-x:auto;padding-bottom:12px;-webkit-overflow-scrolling:touch">
      ${players.map(p => {
        const isMain = p.id === mainCard.id
        return `<div style="flex-shrink:0;${isMain?'transform:scale(1.08);transform-origin:top;z-index:2;position:relative':'opacity:0.55'}"
          id="${isMain?'tv2-main-card':''}">${renderPlayerCard(p,{width: isMain?(isMobile()?120:160):cw()*0.7,context:'collection'})}</div>`
      }).join('')}
    </div>
    <p style="font-size:11px;color:rgba(255,255,255,0.35);margin:4px 0 0">← Glisse pour parcourir ta collection</p>`, 'cards')
  wait(150).then(() => showBubble({ title:'🃏 Ta collection', text:'Ici tu trouves toutes tes cartes.\n\nLa carte ZIDANE est entourée en or : c\'est une carte Légende, la rareté la plus puissante du jeu !', targetSel:'#tv2-main-card', side:'bottom', onNext: next }))
})

// ── 2-6 : Détails de la carte ────────────────────────────────────────
step(() => {
  const p = P.zidane
  const w = isMobile() ? 140 : 200
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🃏 Détails d'une carte</h2>
    <div style="display:flex;${isMobile()?'flex-direction:column;align-items:center':'gap:28px;align-items:flex-start'}">
      <div style="flex-shrink:0">${renderPlayerCard(p,{width:w,context:'collection'})}</div>
      <div style="flex:1;display:flex;flex-direction:column;gap:8px;${isMobile()?'width:100%;margin-top:12px':''}">
        <div id="tv2-d-nom"   style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>📛 Nom :</b> ${p.surname_real}</div>
        <div id="tv2-d-note"  style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>🔢 Note principale :</b> ${p.note_m} (MIL)</div>
        <div id="tv2-d-note2" style="padding:10px 14px;border-radius:10px;background:rgba(212,160,23,0.1);border:1px solid rgba(212,160,23,0.25)"><b>🔸 Note secondaire :</b> ${p.note_a} (ATT) — peut jouer 2 postes !</div>
        <div id="tv2-d-flag"  style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>🇫🇷 Pays :</b> France → liens de nationalité +5 pts</div>
        <div id="tv2-d-club"  style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>🛡️ Club :</b> JUV → liens de club +5 pts avec coéquipiers</div>
      </div>
    </div>`, 'cards')
  const sq = [
    { sel:'#tv2-d-nom',   t:'📛 Le nom du joueur', tx:'Affiché en haut de la carte.\nLes cartes Pépite (or) et Légende (violet) ont des joueurs d\'exception avec de meilleures notes.' },
    { sel:'#tv2-d-note',  t:'🔢 La note principale', tx:'La force du joueur à son poste naturel. C\'est cette note qui est utilisée lors des duels de match.\n\nZidane a 92 en MIL — excellent !' },
    { sel:'#tv2-d-note2', t:'🔸 Note secondaire', tx:'Certains joueurs polyvalents peuvent jouer à deux postes !\n\nZidane peut jouer MIL (92) ou ATT (78). Cette flexibilité est un gros avantage tactique.' },
    { sel:'#tv2-d-flag',  t:'🇫🇷 Le pays', tx:'Le pays crée des liens avec les compatriotes dans ta formation.\n\nDeux joueurs français côte à côte = +5 pts chacun lors des duels !' },
    { sel:'#tv2-d-club',  t:'🛡️ Le club', tx:'Le club crée aussi des liens dans la formation.\n\nDeschamps + Zidane + Trezeguet jouent tous à la Juventus → +5 pts entre voisins !' },
  ]
  let si = 0
  const runSq = () => {
    if (si >= sq.length) { next(); return }
    const s = sq[si++]
    showBubble({ title:s.t, text:s.tx, targetSel:s.sel, side:'right', onNext: runSq })
  }
  wait(150).then(runSq)
})

// ── 7 : Clic sur une carte ───────────────────────────────────────────
step(() => {
  const p = P.henry
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🃏 Interagir avec une carte</h2>
    <div style="display:flex;${isMobile()?'flex-direction:column;align-items:center':'gap:24px;align-items:flex-start'}">
      <div id="tv2-clickcard" style="flex-shrink:0;cursor:pointer;transition:transform .15s">
        ${renderPlayerCard(p,{width:isMobile()?130:180,context:'collection'})}
      </div>
      <div id="tv2-cardmenu" style="display:none;flex-direction:column;gap:10px;${isMobile()?'width:100%':'min-width:220px'}">
        <div id="tv2-m-sell"    style="padding:12px 16px;border-radius:11px;background:rgba(231,76,60,0.12);border:1px solid rgba(231,76,60,0.3);cursor:pointer">💰 <b>Vente rapide</b> — +200 crédits immédiatement</div>
        <div id="tv2-m-mercato" style="padding:12px 16px;border-radius:11px;background:rgba(26,107,60,0.12);border:1px solid rgba(26,107,60,0.3);cursor:pointer">🏪 <b>Mettre sur le Mercato</b> — fixe ton propre prix</div>
        <div id="tv2-m-evolve"  style="padding:12px 16px;border-radius:11px;background:rgba(212,160,23,0.12);border:1px solid rgba(212,160,23,0.3);cursor:pointer">⬆️ <b>Faire évoluer</b> — fusionne des doublons pour booster la note</div>
      </div>
    </div>`, 'cards')
  wait(150).then(() => {
    showBubble({ title:'👆 Clique sur la carte Henry', text:'En cliquant sur une carte, tu accèdes à des options d\'action.', targetSel:'#tv2-clickcard', isAction:true, btnLabel:'Clique sur la carte !', onNext: () => {
      const card = ov.querySelector('#tv2-clickcard')
      card.style.transform = 'scale(0.95)'; setTimeout(()=>card.style.transform='scale(1)',150)
      ov.querySelector('#tv2-cardmenu').style.display = 'flex'
      const sq2 = [
        { sel:'#tv2-m-sell',    t:'💰 Vente rapide', tx:'Vends immédiatement ta carte contre des crédits.\nParfait pour les doublons dont tu n\'as pas besoin !' },
        { sel:'#tv2-m-mercato', t:'🏪 Le Mercato', tx:'Mets ta carte aux enchères.\nD\'autres joueurs pourront l\'acheter au prix que tu fixes !' },
        { sel:'#tv2-m-evolve',  t:'⬆️ Faire évoluer', tx:'Si tu as plusieurs fois le même joueur (doublons), tu peux les fusionner !\n\nChaque doublon fusionné augmente définitivement la note du joueur.' },
      ]
      let si2 = 0
      const r2 = () => { if (si2 >= sq2.length) { next(); return }; const s=sq2[si2++]; showBubble({ title:s.t, text:s.tx, targetSel:s.sel, side:'right', onNext:r2 }) }
      wait(300).then(r2)
    }})
  })
})

// ── 8 : Cartes spéciales ─────────────────────────────────────────────
step(() => {
  const fc = renderFormationCard({ formation:'4-3-3', rarity:'normal' }, isMobile()?120:150)
  const sc = renderStadiumCard({ id:'s1', name:'Stade de France', country_code:'FR' }, isMobile()?120:150)
  const gc = renderGCCard({ gc_type:'red_card', rarity:'pepite' }, isMobile()?120:150)
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🃏 Cartes spéciales</h2>
    <div style="display:flex;flex-wrap:wrap;gap:${isMobile()?'14':'20'}px;justify-content:center">
      <div style="text-align:center"><div id="tv2-c-form">${fc}</div><p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0">Formation</p></div>
      <div style="text-align:center"><div id="tv2-c-stad">${sc}</div><p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0">Stade</p></div>
      <div style="text-align:center"><div id="tv2-c-gc"  >${gc}</div><p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0">Game Changer</p></div>
    </div>`, 'cards')
  const sq3 = [
    { sel:'#tv2-c-form', t:'📋 Carte Formation', tx:'La Formation définit la tactique de ton équipe : où se placent tes 11 joueurs sur le terrain.\n\nLa 4-3-3 est la plus équilibrée pour débuter.' },
    { sel:'#tv2-c-stad', t:'🏟️ Carte Stade', tx:'Le Stade donne +10 pts aux joueurs de la même nationalité ou du même club que le stade.\n\nLe Stade de France booste tous tes joueurs français !' },
    { sel:'#tv2-c-gc',   t:'⚡ Game Changer', tx:'Carte action secrète jouée pendant le match.\n\nLe Carton Rouge expulse un milieu adverse et réduit son score. Utilisable une seule fois !' },
  ]
  let si3 = 0
  const r3 = () => { if (si3 >= sq3.length) { next(); return }; const s=sq3[si3++]; showBubble({ title:s.t, text:s.tx, targetSel:s.sel, side:'bottom', onNext:r3 }) }
  wait(150).then(r3)
})

// ── 9 : Formation ────────────────────────────────────────────────────
step(() => {
  const W = isMobile() ? Math.min(window.innerWidth-32,340) : 380
  const H = Math.round(W*0.92)
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 12px;font-weight:900">👥 Ma formation</h2>
    <div style="display:flex;${isMobile()?'flex-direction:column':'gap:20px'};align-items:flex-start">
      <div>
        <div id="tv2-terrain" style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">
          ${buildTeamSVG(TEAM,'4-3-3',null,[],W,H)}
        </div>
        <p style="font-size:10px;color:rgba(255,255,255,0.35);margin:5px 0 0;text-align:center">4-3-3 · Le slot milieu central est vide</p>
      </div>
      <div style="flex:1;${isMobile()?'width:100%;margin-top:12px':''}">
        <div id="tv2-l-pays" style="padding:10px 14px;border-radius:10px;background:rgba(255,215,0,0.07);border:1px solid rgba(255,215,0,0.2);margin-bottom:8px">🇫🇷 <b>Lien Pays +5</b> — 2 joueurs de même nationalité côte à côte</div>
        <div id="tv2-l-club" style="padding:10px 14px;border-radius:10px;background:rgba(212,160,23,0.07);border:1px solid rgba(212,160,23,0.2);margin-bottom:8px">🛡️ <b>Lien Club +5</b> — 2 coéquipiers du même club</div>
        <div id="tv2-l-stad" style="padding:10px 14px;border-radius:10px;background:rgba(79,195,247,0.07);border:1px solid rgba(79,195,247,0.2)">🏟️ <b>Bonus Stade +10</b> — joueur de la nationalité du stade</div>
      </div>
    </div>`, 'decks')
  const sq4 = [
    { sel:'#tv2-terrain', side:'right', t:'⚽ Le terrain', tx:'Voici ta formation. Chaque cercle = un joueur, le cercle grisé = slot vide (Zidane n\'est pas encore placé).\n\nLes lignes entre joueurs représentent les liens — plus de liens = plus de bonus !' },
    { sel:'#tv2-l-pays',  side:'left',  t:'🇫🇷 Lien Pays +5 pts',  tx:'Deschamps, Zidane et Petit sont tous français. Placés côte à côte = +5 pts par lien lors des duels !\n\nMets des joueurs de même nationalité ensemble pour maximiser tes bonus.' },
    { sel:'#tv2-l-club',  side:'left',  t:'🛡️ Lien Club +5 pts',  tx:'Deschamps, Zidane et Trezeguet jouent à la Juventus. Côte à côte dans la formation = +5 pts chacun !\n\nCombine des coéquipiers pour démultiplier les bonus.' },
    { sel:'#tv2-l-stad',  side:'left',  t:'🏟️ Bonus Stade +10 pts', tx:'Avec le Stade de France équipé, chaque joueur français dans ta formation reçoit +10 pts en plus lors des duels du milieu.\n\nC\'est le bonus le plus puissant du jeu !' },
  ]
  let si4 = 0
  const r4 = () => { if (si4 >= sq4.length) { next(); return }; const s=sq4[si4++]; showBubble({ title:s.t, text:s.tx, targetSel:s.sel, side:s.side, onNext:r4 }) }
  wait(150).then(r4)
})

// ── 10 : Booster ─────────────────────────────────────────────────────
step(() => {
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🎁 La Boutique</h2>
    <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <div id="tv2-bpack" style="cursor:pointer;background:linear-gradient(135deg,#1a3a2a,#0d2016);
        border:2px solid #1A6B3C;border-radius:16px;padding:24px 20px;text-align:center;width:${isMobile()?'140':'180'}px;
        transition:transform .15s">
        <div style="font-size:${isMobile()?'40':'52'}px;margin-bottom:8px">🎴</div>
        <div style="font-weight:900;font-size:14px;color:#fff">Booster Joueurs</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.45);margin:4px 0 10px">5 cartes joueurs</div>
        <div style="background:#1A6B3C;border-radius:8px;padding:8px;font-size:13px;font-weight:800;color:#fff">Ouvrir !</div>
      </div>
    </div>`, 'boosters')
  wait(150).then(() => showBubble({ title:'🎁 Les Boosters', text:'Les boosters contiennent des cartes aléatoires.\nPlus la rareté du booster est élevée, plus tes chances d\'obtenir des joueurs Pépite et Légende augmentent !\n\nClique sur "Ouvrir !" pour voir les 5 cartes.', targetSel:'#tv2-bpack', isAction:true, btnLabel:'Clique pour ouvrir !', onNext: () => {
    const el = ov.querySelector('#tv2-bpack')
    if (el) { el.style.transform = 'scale(0.95)'; setTimeout(()=>el.style.transform='scale(1)',150) }
    showBoosterAnimation(BOOSTER_CARDS, { name:'Booster Joueurs', type:'player', img:null }, ()=>{}, () => next())
  }}))
})

// ── 11 : Mercato ─────────────────────────────────────────────────────
step(() => {
  const listings = [
    { p:P.vieira,  price:1200 },
    { p:P.blanc,   price:600 },
    { p:P.henry,   price:1800 },
  ]
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🏪 Le Mercato</h2>
    <div id="tv2-mlist" style="display:flex;flex-direction:column;gap:10px">
      ${listings.map(l => `<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;
        background:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
        <div style="flex-shrink:0">${renderPlayerCard(l.p,{width:isMobile()?80:110,context:'mercato'})}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:${isMobile()?'13':'15'}px">${l.p.surname_real}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.45)">${l.p.job} · ${l.p.country_code}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:900;font-size:${isMobile()?'14':'16'}px;color:#D4A017">💰 ${l.price.toLocaleString()}</div>
          <div style="margin-top:5px;background:#1A6B3C;border-radius:8px;padding:5px 12px;
            font-size:12px;font-weight:700;color:#fff;cursor:pointer">Acheter</div>
        </div>
      </div>`).join('')}
    </div>`, 'market')
  wait(150).then(() => showBubble({ title:'🏪 Le Mercato', text:'Le Mercato est la place de marché du jeu.\n\nTu peux vendre tes cartes et acheter celles d\'autres joueurs. Surveille régulièrement les prix pour trouver de bonnes affaires !', targetSel:'#tv2-mlist', side:'top', onNext:next }))
})

// ── 12 : Modes de jeu ────────────────────────────────────────────────
step(() => {
  const modes = [
    { id:'tv2-m-solo',   emoji:'🤖', label:'Solo',       col:'rgba(26,107,60,0.2)',  brd:'rgba(26,107,60,0.4)',  txt:'Affronte l\'IA niveau par niveau. Parfait pour s\'entraîner et gagner des récompenses.' },
    { id:'tv2-m-rnk',    emoji:'🏆', label:'Classé',     col:'rgba(212,160,23,0.2)', brd:'rgba(212,160,23,0.4)', txt:'Affronte de vrais joueurs. Grimpe dans le classement pour des récompenses exclusives.' },
    { id:'tv2-m-ami',    emoji:'👥', label:'Ami',         col:'rgba(79,195,247,0.2)', brd:'rgba(79,195,247,0.4)', txt:'Défie un ami en partie privée sans impact sur le classement.' },
    { id:'tv2-m-league', emoji:'🥇', label:'Mini-League', col:'rgba(155,89,182,0.2)', brd:'rgba(155,89,182,0.4)', txt:'Championnat à 8 managers. Classement final avec récompenses !' },
  ]
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🏠 Les modes de jeu</h2>
    <div style="display:grid;grid-template-columns:${isMobile()?'1fr':'1fr 1fr'};gap:10px">
      ${modes.map(m => `<div id="${m.id}" style="padding:16px;background:${m.col};border:1px solid ${m.brd};border-radius:13px">
        <div style="font-size:${isMobile()?'24':'30'}px;margin-bottom:6px">${m.emoji}</div>
        <div style="font-weight:900;font-size:${isMobile()?'14':'16'}px;margin-bottom:4px">${m.label}</div>
        <div style="font-size:${isMobile()?'11':'12'}px;color:rgba(255,255,255,0.55);line-height:1.5">${m.txt}</div>
      </div>`).join('')}
    </div>`, 'home')
  const sq5 = modes.map(m => ({ sel:`#${m.id}`, t:`${m.emoji} Mode ${m.label}`, tx:m.txt + '\n\nTu peux rejouer ce tutoriel depuis les Réglages à tout moment.' }))
  let si5 = 0
  const r5 = () => { if (si5 >= sq5.length) { next(); return }; const s=sq5[si5++]; showBubble({ title:s.t, text:s.tx, targetSel:s.sel, side:'right', btnLabel:si5>=sq5.length?'Jouer ! →':'Suivant →', onNext:r5 }) }
  wait(150).then(r5)
})

// ── 13 : Match — choisir deck ────────────────────────────────────────
step(() => {
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">⚽ Lancer un match Solo</h2>
    <div id="tv2-deckrow" style="display:flex;align-items:center;gap:12px;padding:14px;
      background:rgba(26,107,60,0.12);border:2px solid rgba(26,107,60,0.45);border-radius:13px;cursor:pointer">
      <div style="font-size:${isMobile()?'22':'28'}px">🇫🇷</div>
      <div style="flex:1">
        <div style="font-weight:800;font-size:${isMobile()?'14':'16'}px">France 98</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.45)">4-3-3 · 11/11 joueurs</div>
      </div>
      <div style="font-size:12px;color:#1A6B3C;font-weight:700">Sélectionner →</div>
    </div>`, 'home')
  wait(150).then(() => showBubble({ title:'⚽ Choix du deck', text:'Avant chaque match, tu choisis quelle équipe aligner.\n\nSélectionne le deck France 98 !', targetSel:'#tv2-deckrow', isAction:true, btnLabel:'Sélectionne le deck !', onNext: next }))
})

// ── 14 : Choisir Game Changer ────────────────────────────────────────
step(() => {
  const gcH = renderGCCard({ gc_type:'red_card', rarity:'pepite' }, isMobile()?100:130)
  setScreen(`
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">⚡ Choix du Game Changer</h2>
    <p style="font-size:${isMobile()?'12':'13'}px;color:rgba(255,255,255,0.55);margin:0 0 14px">Choisis une carte action secrète à garder en main pour ce match.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px">
      <div id="tv2-gcchoice" style="cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);
        border:2px solid rgba(212,160,23,0.35);border-radius:12px;text-align:center">
        ${gcH}
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:6px">Carton Rouge</div>
      </div>
      <div style="padding:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);
        border-radius:12px;text-align:center;opacity:0.4">
        <div style="width:${isMobile()?100:130}px;height:${isMobile()?100:130}px;display:flex;align-items:center;justify-content:center;font-size:30px">❔</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Verrouillé</div>
      </div>
    </div>`, 'home')
  wait(150).then(() => showBubble({ title:'⚡ Le Game Changer', text:'Garde un Game Changer secret pour surprendre ton adversaire au bon moment !\n\nChoisis le Carton Rouge — il expulse un milieu adverse.', targetSel:'#tv2-gcchoice', isAction:true, btnLabel:'Sélectionner !', onNext: next }))
})

// ── 15 : Duel du milieu ──────────────────────────────────────────────
step(() => {
  const homeMils = [P.deschamps, P.zidane, P.petit]
  const aiMils   = [P.maradona, P.ronaldo, P.rivaldo]
  setScreen(`
    <h2 style="text-align:center;font-size:${isMobile()?'15':'19'}px;margin:0 0 16px;font-weight:900">⚔️ Duel du milieu de terrain</h2>
    <div id="tv2-scores" style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:20px">
      <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#D4A017">0</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4)">—</div>
      <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#bb2020">0</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;align-items:center">
      <div id="tv2-ai-row">${renderMilRow(aiMils,'MILIEU ADVERSE','#bb2020','ai',null)}</div>
      <div id="tv2-home-row">${renderMilRow(homeMils,'TON MILIEU','#D4A017','home',null)}</div>
    </div>
    <div id="tv2-gc-banner" style="display:none;margin-top:14px;padding:12px;background:rgba(212,160,23,0.12);border:1px solid rgba(212,160,23,0.3);border-radius:10px;text-align:center;font-weight:700;color:#D4A017">
      ⚡ Carton Rouge ! Ronaldo Nazario est expulsé — score adverse réduit !
    </div>`, 'home')
  wait(400).then(() => {
    // Animer apparition des cartes
    ov.querySelectorAll('.duel-card').forEach((el,i)=>setTimeout(()=>{el.style.opacity='1';el.style.transform='translateY(0) scale(1)'},100+i*100))
    ov.querySelectorAll('.duel-link').forEach((el,i)=>setTimeout(()=>el.style.opacity='1',600+i*60))
    ov.querySelectorAll('.duel-score-line').forEach(el=>setTimeout(()=>el.style.opacity='1',1100))
    wait(800).then(() => {
      const scoreHome = P.deschamps.note_m + P.zidane.note_m + P.petit.note_m  // 242
      const scoreAI   = P.maradona.note_m + P.ronaldo.note_m + P.rivaldo.note_m // 251
      const showGC = () => {
        ov.querySelector('#tv2-gc-banner').style.display = 'block'
        const newAI = scoreAI - P.ronaldo.note_m  // 179
        ov.querySelector('#tv2-scores').innerHTML = `
          <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#D4A017">${scoreHome}</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.4)">—</div>
          <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#bb2020">${newAI}</div>`
        wait(600).then(() => showBubble({ title:'🏆 Tu gagnes le duel !', text:`Ton score : ${scoreHome} pts\nAdversaire après carton rouge : ${newAI} pts\n\nTu prends l'avantage grâce au Game Changer ! Maintenant tu peux attaquer.`, onNext:next }))
      }
      showBubble({ title:'⚔️ Le duel du milieu', text:`Les scores actuels :\nToi : ${scoreHome} pts | Adversaire : ${scoreAI} pts\n\nTu es légèrement derrière... C\'est le moment d\'utiliser ton Carton Rouge sur Ronaldo Nazario !`, targetSel:'#tv2-ai-row', side:'bottom', btnLabel:'Jouer le Carton Rouge !', onNext: showGC })
    })
  })
})

// ── 16 : Phase d'attaque ─────────────────────────────────────────────
step(() => {
  const W = isMobile() ? Math.min(window.innerWidth-32,320) : 340
  const H = Math.round(W*0.92)
  setScreen(`
    <h2 style="text-align:center;font-size:${isMobile()?'14':'18'}px;margin:0 0 8px;font-weight:900">⚽ Phase de match — Attaque</h2>
    <p style="text-align:center;font-size:${isMobile()?'11':'12'}px;color:rgba(255,255,255,0.5);margin:0 0 12px">Tu remportes le duel → tu attaques ! Sélectionne 3 joueurs.</p>
    <div style="display:flex;justify-content:center;margin-bottom:12px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">
        ${buildTeamSVG(TEAM_FULL,'4-3-3','attack',[],W,H)}
      </div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button id="tv2-atk" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:${isMobile()?'13':'14'}px;font-weight:800;cursor:pointer">⚔️ Attaquer (3 sélectionnés)</button>
    </div>`, 'home')
  wait(150).then(() => showBubble({ title:'⚔️ Phase d\'attaque', text:'Tu gagnes le duel du milieu → tu attaques en premier !\n\nSur le terrain, les joueurs en surbrillance sont ceux que tu peux sélectionner. Choisis 3 attaquants ou milieux offensifs.', targetSel:'#tv2-atk', isAction:true, btnLabel:'Lancer l\'attaque !', onNext:next }))
})

// ── 17 : Phase de défense ────────────────────────────────────────────
step(() => {
  const W = isMobile() ? Math.min(window.innerWidth-32,320) : 340
  const H = Math.round(W*0.92)
  setScreen(`
    <h2 style="text-align:center;font-size:${isMobile()?'14':'18'}px;margin:0 0 8px;font-weight:900">🛡️ Phase de match — Défense</h2>
    <p style="text-align:center;font-size:${isMobile()?'11':'12'}px;color:rgba(255,255,255,0.5);margin:0 0 12px">L\'adversaire attaque ! Choisis 3 défenseurs.</p>
    <div style="display:flex;justify-content:center;margin-bottom:12px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">
        ${buildTeamSVG(TEAM_FULL,'4-3-3','defense',[],W,H)}
      </div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button id="tv2-def" style="background:#1a3a8a;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:${isMobile()?'13':'14'}px;font-weight:800;cursor:pointer">🛡️ Défendre (3 sélectionnés)</button>
    </div>`, 'home')
  wait(150).then(() => showBubble({ title:'🛡️ Phase de défense', text:'L\'adversaire attaque maintenant !\n\nChoisis 3 défenseurs (DEF) ou milieux défensifs. Plus leurs notes sont élevées, plus tu as de chances de stopper l\'attaque.', targetSel:'#tv2-def', isAction:true, btnLabel:'Défendre !', onNext:next }))
})

// ── 18 : Résultat et conditions de victoire ──────────────────────────
step(() => {
  setScreen(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:50vh;justify-content:center">
      <div style="font-size:${isMobile()?'48':'64'}px;font-weight:900;letter-spacing:4px">2 — 1</div>
      <div style="font-size:${isMobile()?'18':'22'}px;font-weight:900;color:#1A6B3C">Victoire ! 🏆</div>
      <div id="tv2-winbox" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:18px;max-width:380px;text-align:left;width:100%">
        <div style="font-weight:900;font-size:${isMobile()?'13':'15'}px;margin-bottom:10px">🏆 Règles pour gagner :</div>
        <div style="font-size:${isMobile()?'12':'13'}px;color:rgba(255,255,255,0.7);line-height:1.8">
          • <b>3 phases d'attaque</b> + <b>3 phases de défense</b><br>
          • Chaque attaque réussie = <b>+1 but</b><br>
          • Le plus de buts après les 6 phases gagne<br>
          • Égalité → <b>duel du milieu décisif</b><br>
          • Les <b>Game Changers</b> peuvent tout renverser !
        </div>
      </div>
    </div>`, 'home')
  wait(150).then(() => showBubble({ title:'🏆 Conditions de victoire', text:'Un match = 6 phases. Chaque attaque réussie marque 1 but.\n\nLe joueur avec le plus de buts gagne et monte dans le classement !', targetSel:'#tv2-winbox', side:'top', btnLabel:"Terminer ! 🚀", onNext:next }))
})

// ── 19 : Fin ─────────────────────────────────────────────────────────
step(() => {
  setScreen(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:70vh;justify-content:center">
      <div style="font-size:${isMobile()?'56':'72'}px">🏆</div>
      <h1 style="font-size:${isMobile()?'20':'26'}px;font-weight:900;margin:0">Tutoriel terminé !</h1>
      <p style="font-size:${isMobile()?'12':'14'}px;color:rgba(255,255,255,0.65);max-width:360px;line-height:1.6;margin:0">
        Tu connais maintenant toutes les bases de Manager Wars.<br>
        Ouvre tes boosters, construis ta formation et lance ton premier match !
      </p>
      <button id="tv2-finish" style="background:#1A6B3C;color:#fff;border:none;border-radius:12px;
        padding:14px 36px;font-size:${isMobile()?'15':'17'}px;font-weight:900;cursor:pointer;margin-top:8px">🚀 Commencer à jouer !</button>
    </div>`)
  ov.querySelector('#tv2-finish').addEventListener('click', _finish)
  ov.querySelector('#tv2-progbar').style.width = '100%'
})

function _run(i) { setProgress(i, STEPS.length-1); STEPS[i]?.() }

async function _finish() {
  if (ov) { ov.remove(); ov = null }
  try {
    const { data:{user} } = await supabase.auth.getUser()
    if (user) await supabase.from('users').update({ tutorial_done:true }).eq('id', user.id)
  } catch {}
  onDone?.()
}
