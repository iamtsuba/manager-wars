/**
 * tutorial-v2.js — Tutoriel interactif Manager Wars
 *
 * Principe : réutilise les VRAIES fonctions de rendu du jeu (renderCollection,
 * openDeckBuilder, renderBoosters, renderMarket, renderHome2) en substituant
 * juste profile.id par un compte "démo" permanent (voir migration
 * migration_tutorial_demo_account.sql) pré-rempli avec des joueurs réels de
 * la base 1999-2000. Rendu garanti 100% identique au jeu réel, aujourd'hui
 * et pour toujours (aucune duplication de markup à maintenir en double).
 *
 * Les vrais onglets de nav (déjà liés à la vraie fonction navigate() de
 * app.js) sont désactivés (pointer-events:none) pendant le tuto pour éviter
 * qu'un clic dessus ne fasse fuir l'utilisateur vers une vraie page.
 */
import { renderCollection } from '../collection/collection.js'
import { openDeckBuilder } from '../decks/decks.js'
import { renderBoosters, showBoosterAnimation } from '../boosters/boosters.js'
import { renderMarket } from '../market/market.js'
import { renderHome2, ensureV2Chrome } from '../home/home2.js'
import { buildTeamSVG } from '../match/match-shared.js'
import { renderMilRow } from '../match/match-engine.js'
import { supabase } from '../lib/supabase.js'

const DEMO_ID = '00000000-0000-4000-8000-000000000001'
const ICON = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL || '/') + 'icons/'
const isMobile = () => window.innerWidth < 900
const wait = ms => new Promise(r => setTimeout(r, ms))

let ov = null            // overlay tutoriel (bulle + spotlight, PAS le contenu)
let realCtx = null       // ctx réel (pour restaurer l'état + toast/modal réels)
let fakeCtx = null       // ctx factice (profil démo, navigate neutralisé)
let onDone = null
let _idx = 0

export function startTutorialV2(ctxOrCallback, maybeCallback) {
  if (ov) return
  // Compat avec les deux signatures d'appel existantes :
  //   startTutorialV2(ctx, done)  — nouvel usage, préféré
  //   startTutorialV2(done)       — ancien usage (ctx réel indisponible)
  if (typeof ctxOrCallback === 'function') {
    realCtx = null
    onDone = ctxOrCallback
  } else {
    realCtx = ctxOrCallback
    onDone = maybeCallback
  }

  fakeCtx = {
    state: { profile: { id: DEMO_ID, pseudo: 'Démo', credits: 999999 }, params: {} },
    navigate: () => {},   // neutralisé : la navigation réelle romprait le tuto
    toast: (msg) => console.log('[Tuto]', msg),
    openModal: realCtx?.openModal || (() => {}),
    closeModal: realCtx?.closeModal || (() => {}),
    refreshProfile: async () => {},
  }

  _lockRealNav(true)
  _buildOv()
  _idx = 0
  STEPS[0]()
}

// Empêche les vrais onglets de nav / crédits / réglages de réagir aux clics
// pendant le tuto (ils restent déjà liés à la vraie fonction navigate()).
function _lockRealNav(lock) {
  document.querySelectorAll('.home2-chrome-tab, #home2-chrome-credits, #home2-chrome-settings-btn, #home2-mobtop-credits, #home2-mobtop-settings-btn')
    .forEach(el => { el.style.pointerEvents = lock ? 'none' : '' })
}

function _buildOv() {
  ov = document.createElement('div')
  ov.id = 'tv2'
  // Ne couvre QUE la zone de contenu (sous le header / au-dessus du bottom
  // nav) — le vrai header/nav reste visible EN DESSOUS, à travers ce trou,
  // pour un rendu pixel-identique au jeu réel.
  const topH = isMobile() ? 62 : 72
  const botH = isMobile() ? 66 : 0
  ov.style.cssText = `position:fixed;left:0;right:0;top:${topH}px;bottom:${botH}px;z-index:490;overflow:hidden`
  ov.innerHTML = `
    <div id="tv2-content" style="position:absolute;inset:0;overflow-y:auto;background:var(--page-bg,#0d1f14)"></div>
  `
  document.body.appendChild(ov)

  // Bouton "Passer le tuto" + barre de progression + bulle/dim : TOUS dans
  // le calque le plus haut (z-index 9800), au-dessus même d'une vraie
  // modale (#modal-overlay, z-index 1000) qui pourrait s'ouvrir pendant le
  // tuto (ex. détail d'une carte cliquée en étape 2).
  const chrome = document.createElement('div')
  chrome.id = 'tv2-chrome'
  chrome.style.cssText = 'position:fixed;inset:0;z-index:9800;pointer-events:none'
  chrome.innerHTML = `
    <button id="tv2-skip" style="position:absolute;top:${isMobile()?'8px':'12px'};right:${isMobile()?'8px':'70px'};
      pointer-events:auto;background:rgba(0,0,0,0.55);color:#fff;border:1px solid rgba(255,255,255,0.3);
      border-radius:8px;padding:5px 12px;font-size:11px;font-weight:700;cursor:pointer;z-index:9801">✕ Passer le tuto</button>
    <div style="position:absolute;bottom:${isMobile()?'62px':'0'};left:0;right:0;height:3px;background:rgba(0,0,0,0.2)">
      <div id="tv2-progbar" style="height:100%;background:#1A6B3C;transition:width .4s ease;width:0%"></div>
    </div>
    <div id="tv2-dim" style="position:absolute;inset:0;display:none;pointer-events:none"></div>
    <div id="tv2-bub" style="position:absolute;display:none;pointer-events:auto;
      max-width:${isMobile()?Math.round(window.innerWidth*0.88)+'px':'340px'};background:#fff;border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,0.5);padding:16px 18px"></div>`
  document.body.appendChild(chrome)
  chrome.querySelector('#tv2-skip').addEventListener('click', finish)
}

function content() { return ov.querySelector('#tv2-content') }

function setProgress(i) { const bar = document.getElementById('tv2-progbar'); if (bar) bar.style.width = Math.round(i/(STEPS.length-1)*100) + '%' }

function clearBubble() {
  document.getElementById('tv2-bub').style.display = 'none'
  document.getElementById('tv2-dim').style.display = 'none'
  document.getElementById('tv2-dim').innerHTML = ''
  document.getElementById('tv2-dim').style.pointerEvents = 'none'
}

// Positionne la bulle À CÔTÉ du spotlight (jamais par-dessus) — calcule
// l'espace disponible dans les 4 directions et choisit la meilleure.
function showBubble({ title, text, targetSel, container = null, btnLabel = 'Suivant →', onNext, isAction = false, preferSide = null }) {
  const bub = document.getElementById('tv2-bub')
  const dim = document.getElementById('tv2-dim')
  const vw = window.innerWidth, vh = window.innerHeight

  bub.innerHTML = `
    <div style="font-weight:900;font-size:${isMobile()?'14':'15'}px;color:#1a1a2e;margin-bottom:8px">${title}</div>
    <div style="font-size:${isMobile()?'12':'13'}px;color:#555;line-height:1.55;white-space:pre-line">${text}</div>
    ${isAction
      ? `<div style="margin-top:12px;font-size:11px;color:#1A6B3C;font-weight:800">👆 ${btnLabel}</div>`
      : `<button id="tv2-next" style="margin-top:14px;float:right;background:#1A6B3C;color:#fff;border:none;
          border-radius:10px;padding:9px 20px;font-size:13px;font-weight:800;cursor:pointer">${btnLabel}</button>
         <div style="clear:both"></div>`}`

  const BW = isMobile() ? Math.round(vw * 0.88) : 340
  bub.style.width = BW + 'px'

  const searchRoot = container || ov
  const el = targetSel ? searchRoot.querySelector(targetSel) : null

  if (el) {
    const r = el.getBoundingClientRect()
    dim.style.display = 'block'
    dim.style.pointerEvents = 'none'
    dim.innerHTML = `<div style="position:absolute;left:${r.left-5}px;top:${r.top-5}px;
      width:${r.width+10}px;height:${r.height+10}px;border-radius:12px;
      box-shadow:0 0 0 4000px rgba(0,0,0,0.62);z-index:21;pointer-events:none"></div>`

    // Espace disponible dans chaque direction (dans la fenêtre, en tenant
    // compte du header réel en haut) → on choisit celle qui a le plus de place.
    const BH = 170
    const spaceBottom = vh - r.bottom, spaceTop = r.top
    const spaceRight = vw - r.right, spaceLeft = r.left
    const sides = { bottom: spaceBottom, top: spaceTop, right: spaceRight, left: spaceLeft }
    const side = preferSide && sides[preferSide] > (isMobile() ? BH : 100) ? preferSide
      : Object.entries(sides).sort((a,b)=>b[1]-a[1])[0][0]

    let bl, bt
    if (side === 'bottom')      { bt = r.bottom + 10;              bl = r.left + r.width/2 - BW/2 }
    else if (side === 'top')    { bt = r.top - BH - 10;             bl = r.left + r.width/2 - BW/2 }
    else if (side === 'right')  { bt = r.top + r.height/2 - BH/2;   bl = r.right + 10 }
    else                        { bt = r.top + r.height/2 - BH/2;   bl = r.left - BW - 10 }

    bl = Math.max(8, Math.min(bl, vw - BW - 8))
    bt = Math.max(8, Math.min(bt, vh - 160))
    bub.style.left = bl + 'px'; bub.style.top = bt + 'px'
    bub.style.removeProperty('transform')

    el.scrollIntoView?.({ block: 'center', behavior: 'smooth' })
  } else {
    dim.style.display = 'block'; dim.innerHTML = ''
    bub.style.left = '50%'; bub.style.top = '50%'; bub.style.transform = 'translate(-50%,-50%)'
  }

  bub.style.display = 'block'

  if (!isAction) {
    bub.querySelector('#tv2-next')?.addEventListener('click', () => { clearBubble(); onNext?.() }, { once: true })
  } else if (el) {
    const doIt = () => { clearBubble(); onNext?.() }
    el.style.cursor = 'pointer'
    el.addEventListener('click', doIt, { once: true })
    dim.style.pointerEvents = 'auto'
    dim.addEventListener('click', (e) => {
      const r2 = el.getBoundingClientRect()
      if (e.clientX>=r2.left && e.clientX<=r2.right && e.clientY>=r2.top && e.clientY<=r2.bottom) doIt()
    }, { once: true })
  }
}

// ═══════════════════════════════════════════════════════════════════════
// SÉQUENCE
// ═══════════════════════════════════════════════════════════════════════
const STEPS = []
function step(fn) { STEPS.push(fn) }
function next() { _idx++; setProgress(_idx); STEPS[_idx]?.() }

// ── 0 : Intro ──────────────────────────────────────────────────────────
step(() => {
  content().innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;text-align:center;
    gap:16px;min-height:100%;justify-content:center;padding:24px;color:#fff">
    <div style="font-size:${isMobile()?'52':'72'}px">⚽</div>
    <h1 style="font-size:${isMobile()?'20':'26'}px;font-weight:900;margin:0">Bienvenue dans Manager Wars !</h1>
    <p style="font-size:${isMobile()?'13':'15'}px;color:rgba(255,255,255,0.65);max-width:380px;line-height:1.6;margin:0">
      Ce tutoriel te fait visiter le jeu tel qu'il est vraiment. Suis le guide !
    </p>
  </div>`
  clearBubble()
  showBubble({ title:'🏆 Tutoriel Manager Wars', text:"Tu vas découvrir la collection, la formation, les boosters, le mercato et un match complet — avec les vrais écrans du jeu.", btnLabel:"C'est parti !", onNext: next })
})

// ── 1 : Collection réelle (compte démo) ──────────────────────────────────
step(async () => {
  clearBubble()
  await renderCollection(content(), fakeCtx)
  await wait(300)
  const grid = content().querySelector('#col-grid')
  showBubble({ title:'🃏 Ta collection', text:"Voici toutes tes cartes joueurs. Glisse horizontalement pour les parcourir — chaque carte affiche le nom, la note, le pays et le club du joueur.", targetSel:'#col-grid', container: content(), preferSide:'bottom', onNext: next })
})

// ── 2 : Clic sur une carte (interactions réelles) ────────────────────────
step(async () => {
  clearBubble()
  await wait(100)
  const firstCard = content().querySelector('[data-card-id], .col-mini-item, #col-grid > div')
  if (!firstCard) { next(); return }
  showBubble({ title:'👆 Clique sur une carte', text:"Clique sur n'importe quelle carte pour voir les actions possibles : vente rapide, mise en vente sur le Mercato, ou évolution avec des doublons.", targetSel:'[data-card-id], .col-mini-item, #col-grid > div', container: content(), isAction:true, btnLabel:'Clique sur une carte !', onNext: () => {
    // La vraie modale de détail (vente/mercato/évolution) s'ouvre. On laisse
    // le temps au DOM de se mettre à jour, on explique, PUIS on la referme
    // nous-mêmes avant de continuer (sinon elle resterait ouverte par-dessus
    // la suite du tuto).
    wait(500).then(() => {
      showBubble({ title:'💰 Actions sur la carte', text:"Vente rapide, Mercato, Évolution : tu retrouves ici toutes les actions possibles sur cette carte. On les détaillera plus tard — pour l'instant, continuons la visite.", onNext: () => { fakeCtx.closeModal(); next() } })
    })
  }})
})

// ── 3 : Filtres de collection ────────────────────────────────────────────
step(async () => {
  clearBubble()
  const tabBar = content().querySelector('.col-tab-btn')?.parentElement
  if (!tabBar) { next(); return }
  showBubble({ title:'🔍 Filtrer ta collection', text:"Ces onglets filtrent par type de carte : Joueurs, Formations, Game Changers, Stades. Pratique pour retrouver rapidement ce que tu cherches !", targetSel:'.col-tab-btn', container: content(), preferSide:'bottom', onNext: next })
})

// ── 4 : Formation réelle (deck démo, vrai openDeckBuilder) ───────────────
step(async () => {
  clearBubble()
  const { data: deck } = await supabase.from('decks').select('id').eq('owner_id', DEMO_ID).eq('name','France 98').maybeSingle()
  if (!deck) { next(); return }
  await openDeckBuilder(deck.id, content(), fakeCtx)
  await wait(400)
  const field = content().querySelector('[id*="field"], .pitch-wrap, svg')
  showBubble({ title:'⚽ Ta formation', text:"Voici le terrain de ton deck. Chaque cercle est un joueur positionné selon la formation choisie. Le poste grisé au milieu n'a pas encore de titulaire !", targetSel:'[id*="field"], .pitch-wrap, svg', container: content(), preferSide:'right', onNext: next })
})

// ── 5 : Remplir le slot vide (vrai sélecteur de joueur) ──────────────────
step(async () => {
  clearBubble()
  await wait(150)
  const emptySlot = [...content().querySelectorAll('[data-pos]')].find(el => {
    const style = el.getAttribute('style') || ''
    return style.includes('opacity:0.35') || style.includes('opacity: 0.35') || el.querySelector('[style*="opacity:0.35"]')
  }) || content().querySelector('[data-pos="MIL2"]')
  if (!emptySlot) { next(); return }
  showBubble({ title:'➕ Complète ta formation', text:"Clique sur l'emplacement vide pour choisir un joueur de ta collection à placer à ce poste.", targetSel:'[data-pos="MIL2"]', container: content(), isAction:true, btnLabel:'Clique sur le slot vide !', onNext: () => {
    wait(500).then(() => showBubble({ title:'✅ Choisis un joueur', text:"Une liste de joueurs de ta collection s'affiche. Sélectionnes-en un pour l'ajouter à ta formation — la formation se met à jour instantanément !", onNext: next }))
  }})
})

// ── 6 : Liens de formation ────────────────────────────────────────────────
step(async () => {
  clearBubble()
  content().innerHTML = `<div style="padding:${isMobile()?'16px':'24px'};color:#fff">
    <h2 style="font-size:${isMobile()?'17':'21'}px;margin:0 0 14px;font-weight:900">🔗 Les liens dans ta formation</h2>
    <div style="display:flex;flex-direction:column;gap:10px;max-width:420px">
      <div id="tv2-l-pays" style="padding:14px;border-radius:12px;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.25)">🇫🇷 <b>Lien Pays +5 pts</b><br><span style="font-size:12px;color:rgba(255,255,255,0.6)">2 joueurs de même nationalité côte à côte sur le terrain</span></div>
      <div id="tv2-l-club" style="padding:14px;border-radius:12px;background:rgba(212,160,23,0.08);border:1px solid rgba(212,160,23,0.2)">🛡️ <b>Lien Club +5 pts</b><br><span style="font-size:12px;color:rgba(255,255,255,0.6)">2 coéquipiers du même club côte à côte</span></div>
      <div id="tv2-l-stad" style="padding:14px;border-radius:12px;background:rgba(79,195,247,0.08);border:1px solid rgba(79,195,247,0.2)">🏟️ <b>Bonus Stade +10 pts</b><br><span style="font-size:12px;color:rgba(255,255,255,0.6)">joueur de la nationalité/club du stade équipé</span></div>
    </div>
  </div>`
  const sq = [
    { sel:'#tv2-l-pays', tx:"Deux joueurs français placés côte à côte gagnent chacun +5 pts lors des duels. Compose ta formation en tenant compte des nationalités !" },
    { sel:'#tv2-l-club', tx:"Même principe avec le club : deux coéquipiers voisins sur le terrain = +5 pts chacun. Combine les liens pour maximiser tes bonus !" },
    { sel:'#tv2-l-stad', tx:"En équipant une carte Stade, tous les joueurs qui partagent sa nationalité (ou son club) reçoivent +10 pts en plus lors des duels du milieu — le bonus le plus puissant du jeu !" },
  ]
  let si = 0
  const run = () => { if (si>=sq.length) { next(); return }; const s = sq[si++]; showBubble({ title: content().querySelector(s.sel).textContent.split('\n')[0], text:s.tx, targetSel:s.sel, container: content(), preferSide:'right', onNext: run }) }
  run()
})

// ── 7 : Boosters réels (page réelle + révélation scriptée) ───────────────
step(async () => {
  clearBubble()
  await renderBoosters(content(), fakeCtx)
  await wait(300)
  const firstBooster = content().querySelector('.booster-card:not(.disabled)')
  if (!firstBooster) { next(); return }
  showBubble({ title:'🎁 Ouvrir un booster', text:"Voici la Boutique. Chaque booster contient des cartes aléatoires — plus sa rareté est élevée, plus tes chances d'obtenir des joueurs rares augmentent.\n\nClique sur un booster pour l'ouvrir !", targetSel:'.booster-card:not(.disabled)', container: content(), isAction:true, btnLabel:'Clique pour ouvrir !', onNext: () => {
    // Interception : on affiche une révélation SCRIPTÉE (identique pour
    // tout le monde) au lieu du vrai tirage aléatoire du compte démo.
    const cards = [
      { id:'bc1', card_type:'player', evolution_bonus:0, player_id:'ba5aa9cf-73b2-4846-8c09-008ee6ef4db9' },
      { id:'bc2', card_type:'player', evolution_bonus:0, player_id:'17ebe089-7d5a-44fe-bc51-5a51dc0a22bc' },
      { id:'bc3', card_type:'player', evolution_bonus:0, player_id:'7cbd6088-3b6e-40ac-9f79-23be6a4b288a' },
      { id:'bc4', card_type:'player', evolution_bonus:0, player_id:'470568c5-a79f-44f9-bd96-27fe73415e20' },
      { id:'bc5', card_type:'player', evolution_bonus:0, player_id:'f675e51a-2cdc-4b44-bbc1-7c76cddfa519' },
    ]
    supabase.from('players').select('id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,clubs(encoded_name,logo_url)')
      .in('id', cards.map(c=>c.player_id)).then(({ data: players }) => {
        const byId = Object.fromEntries((players||[]).map(p=>[p.id,p]))
        const full = cards.map(c => ({ ...c, player: byId[c.player_id] }))
        showBoosterAnimation(full, { name:'Booster Joueurs', type:'player', img:null }, () => {}, () => next())
      })
  }})
})

// ── 8 : Mercato réel ──────────────────────────────────────────────────────
step(async () => {
  clearBubble()
  await renderMarket(content(), fakeCtx)
  await wait(300)
  const list = content().querySelector('.page') || content()
  showBubble({ title:'🏪 Le Mercato', text:"Voici le Mercato : la place de marché du jeu. Tu peux acheter les cartes vendues par d'autres joueurs, ou mettre les tiennes en vente.\n\nSurveille-le régulièrement pour dénicher de bonnes affaires !", onNext: next })
})

// ── 9 : Accueil + modes de jeu réels ──────────────────────────────────────
step(async () => {
  clearBubble()
  await renderHome2(content(), fakeCtx)
  await wait(300)
  showBubble({ title:'🏠 L\'Accueil', text:"Voici ton accueil : accès rapide aux modes de jeu (Solo, Classé, Ami, Mini-League), à tes récompenses en attente et à l'actualité du jeu.\n\nPassons maintenant à un vrai match, pour voir comment tout ça s'articule !", onNext: () => startMatchSequence() })
})

// ═══════════════════════════════════════════════════════════════════════
// SÉQUENCE MATCH — réutilise les vrais composants (buildTeamSVG, renderMilRow,
// showBoosterAnimation), sur des données scriptées identiques pour tous.
// ═══════════════════════════════════════════════════════════════════════

const TEAM_FULL = {
  GK:  [{ id:'10dfdba1-5793-47b5-99f7-f72c1bbc60df', firstname:'Fabien', surname_real:'Barthez', job:'GK', job2:null, note_g:17,note_d:0,note_m:0,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 }],
  DEF: [
    { id:'470568c5-a79f-44f9-bd96-27fe73415e20', firstname:'Martin', surname_real:'Djetou', job:'DEF', job2:null, note_g:0,note_d:15,note_m:0,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'b43818be-80c6-468b-b81d-d1b02f9dc11b', firstname:'Willy', surname_real:'Sagnol', job:'DEF', job2:null, note_g:0,note_d:13,note_m:0,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'ba5aa9cf-73b2-4846-8c09-008ee6ef4db9', firstname:'Ming', surname_real:'Girard', job:'DEF', job2:null, note_g:0,note_d:20,note_m:0,note_a:0, rarity:'papyte', country_code:'FR', clubs:{encoded_name:'LILLE'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'8696cf6c-3162-4e2e-b66e-36331dae148e', firstname:'James', surname_real:'Bruno', job:'DEF', job2:null, note_g:0,note_d:15,note_m:0,note_a:0, rarity:'papyte', country_code:'FR', clubs:{encoded_name:'LILLE'}, evolution_bonus:0, _evolution_bonus:0 },
  ],
  MIL: [
    { id:'e9481065-766c-4e65-aeaf-3c23215babe0', firstname:'Sabri', surname_real:'Lamouchi', job:'MIL', job2:null, note_g:0,note_d:0,note_m:15,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'7cbd6088-3b6e-40ac-9f79-23be6a4b288a', firstname:'Noah', surname_real:'Bianchi', job:'MIL', job2:'DEF', note_g:0,note_d:13,note_m:15,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'LILLE'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'0fe9f0be-3215-4634-9df2-ecb39cb23e2f', firstname:'Sylvain', surname_real:'Legwinski', job:'MIL', job2:null, note_g:0,note_d:0,note_m:14,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 },
  ],
  ATT: [
    { id:'17ebe089-7d5a-44fe-bc51-5a51dc0a22bc', firstname:'David', surname_real:'Trezeguet', job:'ATT', job2:null, note_g:0,note_d:0,note_m:0,note_a:16, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'78181125-55e0-4241-b929-419b5c7feb56', firstname:'Ludovic', surname_real:'Giuly', job:'ATT', job2:null, note_g:0,note_d:0,note_m:0,note_a:16, rarity:'normal', country_code:'FR', clubs:{encoded_name:'MONACO'}, evolution_bonus:0, _evolution_bonus:0 },
    { id:'fd6bb2ab-ee46-4c28-80e9-d359622c71b2', firstname:'Rayan', surname_real:'Boukhris', job:'ATT', job2:null, note_g:0,note_d:0,note_m:0,note_a:20, rarity:'normal', country_code:'FR', clubs:{encoded_name:'CAPITALE SG'}, evolution_bonus:0, _evolution_bonus:0 },
  ],
}
const AI_MILS = [
  { id:'ai1', firstname:'Marco', surname_real:'ROSSI', job:'MIL', job2:null, note_g:0,note_d:0,note_m:16,note_a:0, rarity:'normal', country_code:'IT', clubs:{encoded_name:'GEN'}, evolution_bonus:0, _evolution_bonus:0 },
  { id:'ai2', firstname:'Luis', surname_real:'GOMEZ', job:'MIL', job2:null, note_g:0,note_d:0,note_m:14,note_a:0, rarity:'normal', country_code:'ES', clubs:{encoded_name:'GEN'}, evolution_bonus:0, _evolution_bonus:0 },
  { id:'ai3', firstname:'Hans', surname_real:'MULLER', job:'MIL', job2:null, note_g:0,note_d:0,note_m:15,note_a:0, rarity:'normal', country_code:'DE', clubs:{encoded_name:'GEN'}, evolution_bonus:0, _evolution_bonus:0 },
]

function matchPage(inner) {
  return `<div style="background:#0a1628;min-height:100%;padding:${isMobile()?'16px':'24px'};color:#fff">${inner}</div>`
}

async function startMatchSequence() {
  clearBubble()
  content().innerHTML = matchPage(`
    <h2 style="margin:0 0 16px;font-size:${isMobile()?'17':'21'}px">⚽ Lancer un match Solo</h2>
    <div id="tv2-deckrow" style="display:flex;align-items:center;gap:12px;padding:14px;
      background:rgba(26,107,60,0.12);border:2px solid rgba(26,107,60,0.45);border-radius:13px;cursor:pointer;max-width:400px">
      <div style="font-size:${isMobile()?'22':'28'}px">🇫🇷</div>
      <div style="flex:1"><div style="font-weight:800">France 98</div><div style="font-size:11px;color:rgba(255,255,255,0.45)">4-3-3 · 11/11 joueurs</div></div>
      <div style="font-size:12px;color:#1A6B3C;font-weight:700">Sélectionner →</div>
    </div>`)
  await wait(150)
  showBubble({ title:'⚽ Choix du deck', text:"Avant chaque match, choisis quelle équipe aligner. Sélectionne le deck France 98 !", targetSel:'#tv2-deckrow', container: content(), isAction:true, btnLabel:'Sélectionne le deck !', onNext: showMatchGC })
}

async function showMatchGC() {
  const { renderGCCard } = await import('../components/special-cards.js')
  content().innerHTML = matchPage(`
    <h2 style="margin:0 0 14px;font-size:${isMobile()?'17':'21'}px">⚡ Choix du Game Changer</h2>
    <div id="tv2-gcchoice" style="display:inline-block;cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);
      border:2px solid rgba(212,160,23,0.35);border-radius:12px;text-align:center">
      ${renderGCCard({ gc_type:'red_card', rarity:'pepite' }, isMobile()?110:140)}
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:6px">Carton Rouge</div>
    </div>`)
  await wait(150)
  showBubble({ title:'⚡ Ton Game Changer', text:"Choisis une carte action secrète à garder en main. Prends le Carton Rouge — il expulsera un milieu adverse !", targetSel:'#tv2-gcchoice', container: content(), isAction:true, btnLabel:'Sélectionner !', onNext: showMatchDuel })
}

async function showMatchDuel() {
  const homeMils = TEAM_FULL.MIL
  const W = isMobile() ? Math.min(window.innerWidth-32,340) : 420
  content().innerHTML = matchPage(`
    <h2 style="text-align:center;margin:0 0 16px;font-size:${isMobile()?'15':'19'}px">⚔️ Duel du milieu de terrain</h2>
    <div id="tv2-scores" style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:20px">
      <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#D4A017">0</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4)">—</div>
      <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#bb2020">0</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;align-items:center">
      <div id="tv2-ai-row">${renderMilRow(AI_MILS,'MILIEU ADVERSE','#bb2020','ai',null)}</div>
      <div id="tv2-home-row">${renderMilRow(homeMils,'TON MILIEU','#D4A017','home',null)}</div>
    </div>
    <div id="tv2-gc-banner" style="display:none;margin-top:14px;padding:12px;background:rgba(212,160,23,0.12);
      border:1px solid rgba(212,160,23,0.3);border-radius:10px;text-align:center;font-weight:700;color:#D4A017">
      ⚡ Carton Rouge ! Luis Gomez est expulsé — score adverse réduit !
    </div>`)
  await wait(400)
  content().querySelectorAll('.duel-card').forEach((el,i)=>setTimeout(()=>{el.style.opacity='1';el.style.transform='translateY(0) scale(1)'},100+i*100))
  content().querySelectorAll('.duel-link').forEach((el,i)=>setTimeout(()=>el.style.opacity='1',600+i*60))
  content().querySelectorAll('.duel-score-line').forEach(el=>setTimeout(()=>el.style.opacity='1',1100))

  await wait(900)
  const scoreHome = homeMils.reduce((s,p)=>s+p.note_m,0)
  const scoreAI   = AI_MILS.reduce((s,p)=>s+p.note_m,0)
  showBubble({ title:'⚔️ Le duel du milieu', text:`Scores actuels :\nToi : ${scoreHome} pts | Adversaire : ${scoreAI} pts\n\nUtilise ton Carton Rouge sur Luis Gomez pour prendre l'avantage !`, targetSel:'#tv2-ai-row', container: content(), preferSide:'bottom', btnLabel:'Jouer le Carton Rouge !', onNext: () => {
    content().querySelector('#tv2-gc-banner').style.display = 'block'
    const newAI = scoreAI - AI_MILS[1].note_m
    content().querySelector('#tv2-scores').innerHTML = `
      <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#D4A017">${scoreHome}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4)">—</div>
      <div style="font-size:${isMobile()?'32':'44'}px;font-weight:900;color:#bb2020">${newAI}</div>`
    wait(700).then(() => showBubble({ title:'🏆 Tu gagnes le duel !', text:`Ton score : ${scoreHome} pts\nAdversaire après carton rouge : ${newAI} pts\n\nTu prends l'avantage ! Tu peux maintenant attaquer.`, onNext: showAttackPhase }))
  }})
}

async function showAttackPhase() {
  const W = isMobile() ? Math.min(window.innerWidth-32,320) : 360
  const H = Math.round(W*0.92)
  content().innerHTML = matchPage(`
    <h2 style="text-align:center;font-size:${isMobile()?'14':'18'}px;margin:0 0 8px">⚔️ Phase d'attaque</h2>
    <p style="text-align:center;font-size:${isMobile()?'11':'12'}px;color:rgba(255,255,255,0.5);margin:0 0 12px">Tu gagnes le duel → tu attaques en premier. Sélectionne 3 joueurs.</p>
    <div style="display:flex;justify-content:center;margin-bottom:12px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">${buildTeamSVG(TEAM_FULL,'4-3-3','attack',[],W,H)}</div>
    </div>
    <div style="display:flex;justify-content:center">
      <button id="tv2-atk" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:${isMobile()?'13':'14'}px;font-weight:800;cursor:pointer">⚔️ Attaquer (3 sélectionnés)</button>
    </div>`)
  await wait(150)
  showBubble({ title:'⚔️ Sélectionne tes attaquants', text:"Sur le terrain, les joueurs en surbrillance sont sélectionnables. Choisis 3 attaquants ou milieux offensifs pour lancer ton attaque.", targetSel:'#tv2-atk', container: content(), isAction:true, btnLabel:'Lancer l\'attaque !', onNext: showDefensePhase })
}

async function showDefensePhase() {
  const W = isMobile() ? Math.min(window.innerWidth-32,320) : 360
  const H = Math.round(W*0.92)
  content().innerHTML = matchPage(`
    <h2 style="text-align:center;font-size:${isMobile()?'14':'18'}px;margin:0 0 8px">🛡️ Phase de défense</h2>
    <p style="text-align:center;font-size:${isMobile()?'11':'12'}px;color:rgba(255,255,255,0.5);margin:0 0 12px">L'adversaire attaque ! Choisis 3 défenseurs.</p>
    <div style="display:flex;justify-content:center;margin-bottom:12px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">${buildTeamSVG(TEAM_FULL,'4-3-3','defense',[],W,H)}</div>
    </div>
    <div style="display:flex;justify-content:center">
      <button id="tv2-def" style="background:#1a3a8a;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:${isMobile()?'13':'14'}px;font-weight:800;cursor:pointer">🛡️ Défendre (3 sélectionnés)</button>
    </div>`)
  await wait(150)
  showBubble({ title:'🛡️ Sélectionne tes défenseurs', text:"L'adversaire attaque à son tour ! Choisis 3 défenseurs ou milieux défensifs pour stopper l'attaque.", targetSel:'#tv2-def', container: content(), isAction:true, btnLabel:'Défendre !', onNext: showWinCondition })
}

async function showWinCondition() {
  content().innerHTML = matchPage(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:60vh;justify-content:center">
      <div style="font-size:${isMobile()?'48':'64'}px;font-weight:900;letter-spacing:4px">2 — 1</div>
      <div style="font-size:${isMobile()?'18':'22'}px;font-weight:900;color:#1A6B3C">Victoire ! 🏆</div>
      <div id="tv2-winbox" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);
        border-radius:14px;padding:18px;max-width:380px;text-align:left;width:100%">
        <div style="font-weight:900;font-size:${isMobile()?'13':'15'}px;margin-bottom:10px">🏆 Règles pour gagner :</div>
        <div style="font-size:${isMobile()?'12':'13'}px;color:rgba(255,255,255,0.7);line-height:1.8">
          • <b>3 phases d'attaque</b> + <b>3 phases de défense</b><br>
          • Chaque attaque réussie = <b>+1 but</b><br>
          • Le plus de buts après les 6 phases gagne<br>
          • Égalité → <b>duel du milieu décisif</b><br>
          • Les <b>Game Changers</b> peuvent tout renverser !
        </div>
      </div>
    </div>`)
  await wait(150)
  showBubble({ title:'🏆 Conditions de victoire', text:"Un match = 6 phases. Chaque attaque réussie marque 1 but. Le joueur avec le plus de buts gagne et monte au classement !", targetSel:'#tv2-winbox', container: content(), preferSide:'top', btnLabel:"Terminer ! 🚀", onNext: showFinalScreen })
}

async function showFinalScreen() {
  clearBubble()
  content().innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;
    min-height:100%;justify-content:center;padding:24px;color:#fff">
    <div style="font-size:${isMobile()?'56':'72'}px">🏆</div>
    <h1 style="font-size:${isMobile()?'20':'26'}px;font-weight:900;margin:0">Tutoriel terminé !</h1>
    <p style="font-size:${isMobile()?'12':'14'}px;color:rgba(255,255,255,0.65);max-width:360px;line-height:1.6;margin:0">
      Tu connais maintenant toutes les bases de Manager Wars.<br>Ouvre tes boosters, construis ta formation et lance ton premier match !
    </p>
    <button id="tv2-finish" style="background:#1A6B3C;color:#fff;border:none;border-radius:12px;
      padding:14px 36px;font-size:${isMobile()?'15':'17'}px;font-weight:900;cursor:pointer;margin-top:8px">🚀 Commencer à jouer !</button>
  </div>`
  document.getElementById('tv2-progbar').style.width = '100%'
  content().querySelector('#tv2-finish').addEventListener('click', finish)
}

async function finish() {
  _lockRealNav(false)
  if (ov) { ov.remove(); ov = null }
  document.getElementById('tv2-chrome')?.remove()
  try {
    const { data:{user} } = await supabase.auth.getUser()
    if (user) await supabase.from('users').update({ tutorial_done:true }).eq('id', user.id)
  } catch {}
  // Restaure le vrai chrome (header/nav) avec le vrai profil, sinon les
  // crédits/pseudo affichés resteraient ceux du compte démo.
  if (realCtx?.state?.profile) {
    ensureV2Chrome(realCtx.navigate, realCtx.state.profile, realCtx.state.page || 'home2', ICON, realCtx.toast)
  }
  onDone?.()
}
