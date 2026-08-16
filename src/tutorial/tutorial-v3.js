/**
 * tutorial-v3.js — Tutoriel interactif Manager Wars, rendu 100% fidèle
 *
 * Principe : au lieu de reconstruire les écrans (comme tutorial-v2.js),
 * on appelle les VRAIES fonctions de rendu du jeu (renderCollection,
 * openDeckBuilder) en substituant profile.id par un compte DÉMO permanent
 * et partagé (voir migration_tutorial_demo_account.sql). Le rendu suit
 * donc automatiquement toute évolution future du design — zéro
 * duplication visuelle, zéro dérive dans le temps.
 *
 * SÉCURITÉ — le compte démo est PARTAGÉ par tous les utilisateurs qui
 * suivent le tutoriel. Toute action réellement destructrice (vendre,
 * évoluer, mettre en vente, assigner un joueur à un slot) est
 * INTERCEPTÉE avant d'atteindre le vrai gestionnaire (capture + arrêt de
 * propagation), et remplacée par une simulation visuelle scriptée. Le
 * compte démo n'est donc jamais réellement modifiable depuis le tuto.
 *
 * Pour les actions à haut risque (booster réel, Game Changer, match),
 * on n'appelle pas la vraie page complète — on réutilise directement les
 * VRAIS composants (renderPlayerCard, buildTeamSVG, renderMilRow,
 * showBoosterAnimation) dans un flux entièrement scripté, comme dans
 * tutorial-v2.js — même fidélité visuelle, aucun risque de mutation.
 */
import { supabase } from '../lib/supabase.js'
import { renderCollection } from '../collection/collection.js'
import { openDeckBuilder } from '../decks/decks.js'
import { renderPlayerCard } from '../components/player-card.js'
import { renderGCCard } from '../components/special-cards.js'
import { buildTeamSVG } from '../match/match-shared.js'
import { renderMilRow } from '../match/match-engine.js'
import { showBoosterAnimation } from '../boosters/boosters.js'

const BASE = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/'
const ICON = BASE + 'icons/'
const isMobile = () => window.innerWidth < 900

const DEMO_ID = '00000000-0000-4000-8000-000000000001'   // compte démo (migration_tutorial_demo_account.sql)

let ov = null
let onDone = null
let DEMO_PROFILE = null   // profil réel chargé depuis la table users (démo)
let DEMO_DECK_ID = null   // id du deck "France 98" (généré à la migration)

// ctx factice pour appeler les vraies fonctions de rendu du jeu, avec le
// compte démo comme "utilisateur courant". Les callbacks de mutation
// (toast, refreshProfile) sont neutralisés : ils ne font jamais rien qui
// touche à un vrai compte, mais restent sans danger si le code du jeu les
// appelle malgré l'interception de clic.
function fakeCtx(navigateOverride) {
  return {
    state: { profile: DEMO_PROFILE, user: { id: DEMO_ID } },
    navigate: navigateOverride || (() => {}),
    toast: () => {},
    openModal: (title, body, footer) => _openFakeModal(title, body, footer),
    closeModal: () => _closeFakeModal(),
    refreshProfile: async () => {},
  }
}

// ── Modal isolée (ne touche jamais #modal-overlay, le vrai modal partagé
// de l'app — éviter tout conflit avec l'état réel de l'application) ──
function _openFakeModal(title, body, footer) {
  let m = ov.querySelector('#tv3-modal')
  if (!m) {
    m = document.createElement('div')
    m.id = 'tv3-modal'
    m.style.cssText = 'position:fixed;inset:0;z-index:9760;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;padding:16px'
    ov.appendChild(m)
  }
  m.innerHTML = `<div style="background:#fff;border-radius:16px;width:100%;max-width:520px;max-height:88vh;overflow-y:auto;box-shadow:0 8px 40px rgba(0,0,0,0.4)">
    <div style="padding:16px 20px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center">
      <h2 style="margin:0;font-size:17px;color:#1a1a2e">${title||''}</h2>
      <button id="tv3-modal-x" style="background:none;border:none;font-size:18px;cursor:pointer;color:#999">✕</button>
    </div>
    <div style="padding:18px 20px;color:#333">${body||''}</div>
    ${footer ? `<div style="padding:12px 20px;border-top:1px solid #eee;display:flex;justify-content:flex-end;gap:8px">${footer}</div>` : ''}
  </div>`
  m.style.display = 'flex'
  m.querySelector('#tv3-modal-x').addEventListener('click', _closeFakeModal)
  // Bloque tout clic dangereux DANS la modale (vendre/évoluer/mettre en vente)
  _armBlocklist(m)
}
function _closeFakeModal() {
  const m = ov?.querySelector('#tv3-modal')
  if (m) m.style.display = 'none'
}

// ── Interception : empêche toute écriture réelle (vente, évolution, mise
// en vente, achat, assignation de joueur) sans bloquer le reste de
// l'interface (navigation dans les onglets, ouverture de menus...) ──
const DANGEROUS_SELECTORS = [
  '.big-evolve-btn', '#market-sell-form-btn', '#single-sell-btn', '#single-direct-sell-btn',
  '[data-evolve-card]', '.evolve-btn', '.sell-btn', '.buy-btn', '.market-buy-btn',
  '[data-open-deck]',           // ouvrir un AUTRE deck démo non prévu par le script
  '.filter-btn', '.mf-check',   // filtres : évite un état incohérent avec le script
  // openDeckBuilder : tout ce qui écrit réellement en base
  '[id*="auto-deck"]',          // "Deck Automatique" (PC + mobile)
  '[id*="save-deck"]',          // "Enregistrer le deck"
  '#add-sub-btn',                // ajouter un remplaçant
  '#formation-pc-btn', '#formation-mobile-btn',  // changer de formation
  '#add-stad-btn', '#add-stad-btn-pc',           // assigner une carte stade
  '.wanted-market-btn',          // renvoie vers le Mercato (hors script)
  '#builder-back',               // retour à la liste des decks (hors script)
  '#remove-player',              // retirer un joueur d'un slot déjà rempli
  '.deck-slot-hit',               // clic sur un slot rempli (hors script prévu — voir chapitre 4)
]
function _armBlocklist(root) {
  root.addEventListener('click', (e) => {
    const dangerous = DANGEROUS_SELECTORS.some(sel => e.target.closest(sel))
    if (dangerous) {
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation()
      showToast('🔒 Action désactivée pendant le tutoriel')
    }
  }, true) // capture=true : s'exécute AVANT le vrai gestionnaire du bouton
}

function showToast(msg) {
  const t = document.createElement('div')
  t.textContent = msg
  t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1a1a2e;color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:700;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.3)'
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 1800)
}

// ═══════════════════════════════════════════════════════════════════════
// CHROME (header + navigation) — copie fidèle des classes réelles de
// home2.js (le style global est déjà injecté par l'app, on en hérite
// automatiquement), mais isolée du VRAI chrome global pour ne jamais
// risquer d'écraser l'affichage réel des crédits ou de rebrancher une
// vraie navigation.
// ═══════════════════════════════════════════════════════════════════════
const TABS = [
  { key:'home2', route:'home', label:'ACCUEIL', icon:'nav-home.png' },
  { key:'cards', route:'collection', label:'CARTES', icon:'nav-collection.png' },
  { key:'decks', route:'decks', label:'EQUIPES', icon:'nav-decks.png' },
  { key:'boosters', route:'boosters', label:'BOUTIQUE', icon:'nav-boosters.png' },
  { key:'market', route:'market', label:'MERCATO', icon:'nav-market.png' },
]

function chromeHTML(activeKey) {
  const tabsHTML = TABS.map(t => `
    <a class="home2-chrome-tab tv3-tab ${t.key===activeKey?'active':''}" data-key="${t.key}" style="cursor:default">
      <img src="${ICON}${t.icon}" onerror="this.style.display='none'">${t.label}
    </a>`).join('')
  return {
    header: `
      <div class="home2-chrome-header" style="position:sticky;top:0">
        <div class="home2-chrome-logo"><img src="${ICON}logo-withname.png" alt="Manager Wars"></div>
        <div class="home2-chrome-tabs">${tabsHTML}</div>
        <div class="home2-chrome-right">
          <div class="home2-chrome-credits">💰 ${(DEMO_PROFILE?.credits||0).toLocaleString('fr')}</div>
          <button class="home2-chrome-settings-pill" style="pointer-events:none;opacity:0.6">⚙️</button>
        </div>
      </div>`,
    mobileTop: `
      <div class="home2-mobile-top">
        <div class="home2-chrome-logo"><img src="${ICON}logo-withname.png" alt="Manager Wars"></div>
        <div class="home2-chrome-right">
          <div class="home2-chrome-credits">💰 ${(DEMO_PROFILE?.credits||0).toLocaleString('fr')}</div>
          <button class="home2-chrome-settings-pill" style="pointer-events:none;opacity:0.6"><span>⚙️</span></button>
        </div>
      </div>`,
    mobileBottom: `<div class="home2-mobile-bottom">${tabsHTML}</div>`,
  }
}

function buildOv() {
  if (ov) ov.remove()
  ov = document.createElement('div')
  ov.id = 'tv3'
  ov.style.cssText = 'position:fixed;inset:0;z-index:9700;background:#f4f6f4;overflow:hidden;display:flex;flex-direction:column'
  document.body.appendChild(ov)

  ov.innerHTML = `
    <div id="tv3-header-slot"></div>
    <div id="tv3-content" style="flex:1;overflow-y:auto;position:relative;background:var(--page-bg,#f4f6f4)"></div>
    <div id="tv3-bottom-slot"></div>
    <button id="tv3-skip" style="position:fixed;top:${isMobile()?'8':'14'}px;right:${isMobile()?'8':'14'}px;z-index:9780;
      background:rgba(0,0,0,0.55);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:8px;
      padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer">✕ Passer le tuto</button>
    <div id="tv3-dim" style="position:absolute;inset:0;z-index:9750;display:none;pointer-events:none"></div>
    <div id="tv3-bub" style="position:absolute;z-index:9770;display:none;pointer-events:auto"></div>
    <div id="tv3-prog" style="position:fixed;bottom:${isMobile()?'56':'0'}px;left:0;right:0;height:3px;z-index:9781;background:rgba(0,0,0,0.08)">
      <div id="tv3-progbar" style="height:100%;background:#1A6B3C;transition:width .4s ease;width:0%"></div>
    </div>`
  ov.querySelector('#tv3-skip').addEventListener('click', finish)
}

function setChrome(activeKey) {
  const c = chromeHTML(activeKey)
  const headerSlot = ov.querySelector('#tv3-header-slot')
  const bottomSlot = ov.querySelector('#tv3-bottom-slot')
  if (isMobile()) {
    headerSlot.innerHTML = c.mobileTop
    bottomSlot.innerHTML = c.mobileBottom
    bottomSlot.style.display = 'flex'
  } else {
    headerSlot.innerHTML = c.header
    bottomSlot.innerHTML = ''
    bottomSlot.style.display = 'none'
  }
}

function contentEl() { return ov.querySelector('#tv3-content') }

function setProgress(i, total) {
  ov.querySelector('#tv3-progbar').style.width = Math.round(i/total*100) + '%'
}

// ═══════════════════════════════════════════════════════════════════════
// BULLE + SPOTLIGHT — repositionné pour NE JAMAIS recouvrir l'élément
// ciblé (bug remonté sur la v2) : calcule l'espace disponible sur les 4
// côtés et choisit automatiquement le mieux placé si "side" n'a pas assez
// de place, plutôt que de forcer une position qui déborderait dessus.
// ═══════════════════════════════════════════════════════════════════════
function showBubble({ title, text, targetEl, preferSide='bottom', btnLabel='Suivant →', onNext, isAction=false }) {
  const bub = ov.querySelector('#tv3-bub')
  const dim = ov.querySelector('#tv3-dim')

  bub.innerHTML = `
    <div style="background:#fff;border-radius:14px;box-shadow:0 8px 36px rgba(0,0,0,0.5);padding:15px 17px;max-width:${isMobile()?Math.round(window.innerWidth*0.86):320}px">
      <div style="font-weight:900;font-size:${isMobile()?'13':'15'}px;color:#1a1a2e;margin-bottom:6px">${title}</div>
      <div style="font-size:${isMobile()?'11.5':'13'}px;color:#555;line-height:1.5;white-space:pre-line">${text}</div>
      ${isAction
        ? `<div style="margin-top:10px;font-size:11px;color:#1A6B3C;font-weight:800">👆 ${btnLabel}</div>`
        : `<button id="tv3-next" style="margin-top:12px;float:right;background:#1A6B3C;color:#fff;border:none;border-radius:9px;padding:8px 18px;font-size:12.5px;font-weight:800;cursor:pointer">${btnLabel}</button><div style="clear:both"></div>`}
    </div>`

  const vw = window.innerWidth, vh = window.innerHeight
  const bw = isMobile() ? Math.round(vw*0.86)+34 : 354
  const bh = 170

  if (targetEl) {
    const r = targetEl.getBoundingClientRect()
    dim.style.display = 'block'
    dim.innerHTML = `<div style="position:absolute;left:${r.left-5}px;top:${r.top-5}px;width:${r.width+10}px;height:${r.height+10}px;
      border-radius:12px;box-shadow:0 0 0 4000px rgba(0,0,0,0.62);pointer-events:none"></div>`

    // Espace disponible dans chaque direction autour de la cible
    const space = {
      bottom: vh - r.bottom, top: r.top,
      right: vw - r.right, left: r.left,
    }
    // Choisit le côté avec le plus d'espace parmi ceux qui suffisent, en
    // partant de la préférence si elle a assez de place.
    let side = preferSide
    const needed = side === 'left' || side === 'right' ? bw : bh
    if (space[side] < needed + 16) {
      side = Object.keys(space).sort((a,b) => space[b]-space[a])[0]
    }

    let bl, bt
    if (side === 'bottom') { bt = r.bottom + 10; bl = r.left + r.width/2 - bw/2 }
    else if (side === 'top') { bt = r.top - bh - 10; bl = r.left + r.width/2 - bw/2 }
    else if (side === 'right') { bt = r.top + r.height/2 - bh/2; bl = r.right + 10 }
    else { bt = r.top + r.height/2 - bh/2; bl = r.left - bw - 10 }

    bl = Math.max(6, Math.min(bl, vw - bw - 6))
    bt = Math.max(6, Math.min(bt, vh - bh - 6))
    bub.style.left = bl+'px'; bub.style.top = bt+'px'; bub.style.transform = ''
  } else {
    dim.style.display = 'block'
    dim.innerHTML = ''
    bub.style.left = '50%'; bub.style.top = '50%'; bub.style.transform = 'translate(-50%,-50%)'
  }

  bub.style.display = 'block'

  if (!isAction) {
    bub.querySelector('#tv3-next')?.addEventListener('click', () => {
      bub.style.display = 'none'; dim.style.display = 'none'; dim.innerHTML = ''
      onNext?.()
    }, { once: true })
  } else if (targetEl) {
    const handler = (e) => {
      dim.removeEventListener('click', handler)
      bub.style.display = 'none'; dim.style.display = 'none'; dim.innerHTML = ''
      onNext?.()
    }
    dim.style.pointerEvents = 'auto'
    dim.addEventListener('click', (e) => {
      const r2 = targetEl.getBoundingClientRect()
      if (e.clientX>=r2.left && e.clientX<=r2.right && e.clientY>=r2.top && e.clientY<=r2.bottom) handler(e)
    })
    targetEl.style.position = targetEl.style.position || 'relative'
    targetEl.style.zIndex = '9751'
  }
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

// ═══════════════════════════════════════════════════════════════════════
// CHAPITRES
// ═══════════════════════════════════════════════════════════════════════
let STEPS = []
let _i = 0
function step(fn) { STEPS.push(fn) }
function next() { setProgress(++_i, STEPS.length-1); STEPS[_i]?.() }

// ── 0 : Intro ──────────────────────────────────────────────────────
step(() => {
  setChrome('home2')
  contentEl().innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
    min-height:70vh;text-align:center;gap:16px;padding:24px">
    <div style="font-size:${isMobile()?'52':'70'}px">⚽</div>
    <h1 style="font-size:${isMobile()?'20':'26'}px;font-weight:900;margin:0;color:#1a1a2e">Bienvenue dans Manager Wars !</h1>
    <p style="font-size:${isMobile()?'13':'15'}px;color:#666;max-width:380px;line-height:1.6">Ce tutoriel te fait visiter le vrai jeu, étape par étape, avec une équipe de démonstration.</p>
  </div>`
  showBubble({ title:'🏆 C\'est parti !', text:'Tu vas découvrir la collection, la formation, les boosters, le mercato et comment gagner un match.', btnLabel:'Commencer →', onNext:next })
})

// ── 1 : Collection (VRAIE fonction renderCollection) ────────────────
step(async () => {
  setChrome('cards')
  const el = contentEl()
  el.innerHTML = ''
  await renderCollection(el, fakeCtx())
  _armBlocklist(el)
  await wait(250)
  // Cible la première carte réellement rendue dans la grille
  const firstCard = el.querySelector('[data-idx]') || el.querySelector('#col-grid > div') || el.querySelector('#col-grid')
  showBubble({ title:'🃏 Ta collection', text:'Voici la vraie collection du jeu, avec l\'équipe de démonstration. Chaque carte affiche le nom, la note, le pays et le club du joueur.', targetEl:firstCard, preferSide:'bottom', onNext:next })
})

// ── 2 : Clic sur une carte (menu réel, actions bloquées) ─────────────
step(async () => {
  const el = contentEl()
  await wait(100)
  const firstCard = el.querySelector('[data-idx]') || el.querySelector('#col-grid > div')
  if (!firstCard) { next(); return }
  showBubble({ title:'👆 Clique sur une carte', text:'Clique sur la carte mise en avant pour voir les actions possibles.', targetEl:firstCard, isAction:true, btnLabel:'Clique sur la carte !', onNext: () => {
    firstCard.click()
    wait(400).then(() => {
      showBubble({ title:'⚙️ Actions sur une carte', text:'Depuis ce menu tu peux : vendre rapidement, mettre en vente sur le Mercato, ou faire évoluer le joueur en fusionnant des doublons.\n\n(Ces actions sont désactivées sur le compte démo, mais fonctionnent normalement sur ton vrai compte !)', onNext: () => { _closeFakeModal(); next() } })
    })
  }})
})

// ── 3 : Formation (VRAIE fonction openDeckBuilder) ───────────────────
step(async () => {
  setChrome('decks')
  const el = contentEl()
  el.innerHTML = ''
  if (!DEMO_DECK_ID) { next(); return }
  await openDeckBuilder(DEMO_DECK_ID, el, fakeCtx())
  _armBlocklist(el)
  await wait(300)
  const terrain = el.querySelector('.pitch-wrap, [id*="field"], .page') || el
  showBubble({ title:'⚽ Ta formation', text:'Voici le vrai terrain du jeu : formation 4-3-3 avec l\'équipe démo. Remarque le poste milieu encore vide (grisé) !', targetEl:terrain, preferSide:'top', onNext:next })
})

// ── 4 : Remplir le slot vide (simulation visuelle, pas d'écriture réelle) ──
step(async () => {
  const el = contentEl()
  const emptySlot = el.querySelector('[data-pos="MIL2"], .formation-slot[style*="opacity"]')
  if (!emptySlot) { next(); return }
  showBubble({ title:'➕ Complète ta formation', text:'Clique sur le poste vide pour choisir un joueur de ta collection.', targetEl:emptySlot, isAction:true, btnLabel:'Clique sur le poste vide !', onNext: () => {
    // Interception : on affiche NOUS-MÊME le sélecteur avec un seul choix
    // scripté (Bianchi), au lieu de laisser le vrai flux écrire en base.
    _openFakeModal('Choisir MIL — MIL2', `
      <div style="display:flex;justify-content:center;padding:8px">
        <div id="tv3-pick-bianchi" style="cursor:pointer;text-align:center">
          ${renderPlayerCard({ id:'demo-bianchi', firstname:'Noah', surname_real:'Bianchi', job:'MIL', job2:'DEF',
            note_m:15, note_d:13, note_g:0, note_a:0, rarity:'normal', country_code:'FR',
            clubs:{encoded_name:'LILLE'}, evolution_bonus:0, _evolution_bonus:0, face:null }, { width:140, context:'selector' })}
          <div style="margin-top:8px;background:#1A6B3C;color:#fff;border-radius:8px;padding:8px;font-weight:800;font-size:13px">Sélectionner</div>
        </div>
      </div>`)
    ov.querySelector('#tv3-pick-bianchi').addEventListener('click', () => {
      _closeFakeModal()
      showBubble({ title:'✅ Bianchi ajouté !', text:'Ta formation est maintenant complète. Bianchi (Lille) rejoint Lamouchi et Legwinski au milieu — et crée un nouveau lien de club avec Girard et Bruno en défense !', onNext:next })
    }, { once:true })
  }})
})

// ── 5 : Booster (vrais composants, animation réelle) ──────────────────
step(async () => {
  setChrome('boosters')
  contentEl().innerHTML = `<div style="padding:${isMobile()?'16px':'24px'}">
    <h2 style="margin:0 0 16px;color:#1a1a2e">🎁 La Boutique</h2>
    <div style="display:flex;justify-content:center">
      <div id="tv3-booster" style="cursor:pointer;background:linear-gradient(135deg,#1a3a2a,#0d2016);border:2px solid #1A6B3C;
        border-radius:16px;padding:24px;text-align:center;width:${isMobile()?'150':'190'}px">
        <div style="font-size:${isMobile()?'40':'52'}px">🎴</div>
        <div style="font-weight:900;color:#fff;margin-top:6px">Booster Joueurs</div>
        <div style="background:#1A6B3C;color:#fff;border-radius:8px;padding:8px;margin-top:10px;font-weight:800;font-size:13px">Ouvrir !</div>
      </div>
    </div></div>`
  await wait(150)
  const box = ov.querySelector('#tv3-booster')
  showBubble({ title:'🎁 Ouvrir un booster', text:'Les boosters contiennent des cartes aléatoires. Clique pour découvrir 5 cartes !', targetEl:box, isAction:true, btnLabel:'Clique pour ouvrir !', onNext: () => {
    const cards = ['ba5aa9cf-73b2-4846-8c09-008ee6ef4db9','17ebe089-7d5a-44fe-bc51-5a51dc0a22bc','7cbd6088-3b6e-40ac-9f79-23be6a4b288a','470568c5-a79f-44f9-bd96-27fe73415e20','f675e51a-2cdc-4b44-bbc1-7c76cddfa519']
    const names = [['Ming','Girard','DEF',20,'papyte','LILLE'],['David','Trezeguet','ATT',16,'normal','MONACO'],['Noah','Bianchi','MIL',15,'normal','LILLE'],['Martin','Djetou','DEF',15,'normal','MONACO'],['Robert','Pires','MIL',17,'normal','OLYMPIC PHOCEENS']]
    const boosterCards = names.map((n,i) => ({ id:'bc'+i, card_type:'player', evolution_bonus:0, player:{
      id:cards[i], firstname:n[0], surname_real:n[1], job:n[2], job2:null,
      note_g: n[2]==='GK'?n[3]:0, note_d: n[2]==='DEF'?n[3]:0, note_m: n[2]==='MIL'?n[3]:0, note_a: n[2]==='ATT'?n[3]:0,
      rarity:n[4], country_code:'FR', clubs:{encoded_name:n[5]}, evolution_bonus:0, _evolution_bonus:0, face:null,
    }}))
    showBoosterAnimation(boosterCards, { name:'Booster Joueurs', type:'player', img:null }, ()=>{}, () => next())
  }})
})

// ── 6 : Mercato (VRAIE structure visuelle simplifiée, sûre) ───────────
step(async () => {
  setChrome('market')
  const p1 = { id:'m1', firstname:'Robert', surname_real:'Pires', job:'MIL', job2:null, note_m:17, note_g:0,note_d:0,note_a:0, rarity:'normal', country_code:'FR', clubs:{encoded_name:'OLYMPIC PHOCEENS'}, evolution_bonus:0,_evolution_bonus:0, face:null }
  contentEl().innerHTML = `<div style="padding:${isMobile()?'16px':'24px'}">
    <h2 style="margin:0 0 16px;color:#1a1a2e">🏪 Le Mercato</h2>
    <div id="tv3-listing" style="display:flex;align-items:center;gap:12px;padding:12px;background:#fff;border:1px solid #e5e5e5;border-radius:12px;max-width:420px">
      <div style="flex-shrink:0">${renderPlayerCard(p1,{width:isMobile()?80:110,context:'mercato'})}</div>
      <div style="flex:1"><div style="font-weight:800;color:#1a1a2e">${p1.surname_real}</div><div style="font-size:11px;color:#888">MIL · FR</div></div>
      <div style="text-align:right"><div style="font-weight:900;color:#D4A017">💰 1 200</div>
        <div class="buy-btn" style="margin-top:5px;background:#1A6B3C;color:#fff;border-radius:8px;padding:5px 12px;font-size:12px;font-weight:700">Acheter</div></div>
    </div></div>`
  _armBlocklist(contentEl())
  await wait(150)
  showBubble({ title:'🏪 Le Mercato', text:'La place de marché du jeu : achète et vends des cartes avec les autres joueurs.', targetEl:ov.querySelector('#tv3-listing'), preferSide:'top', onNext:next })
})

// ── 7 : Modes de jeu ───────────────────────────────────────────────────
step(async () => {
  setChrome('home2')
  const modes = [
    ['🤖','Solo','Affronte l\'IA niveau par niveau.'],
    ['🏆','Classé','Affronte de vrais joueurs, grimpe au classement.'],
    ['👥','Ami','Défis amicaux sans impact sur le classement.'],
    ['🥇','Mini-League','Championnat à 8 managers.'],
  ]
  contentEl().innerHTML = `<div style="padding:${isMobile()?'16px':'24px'}">
    <h2 style="margin:0 0 16px;color:#1a1a2e">🏠 Modes de jeu</h2>
    <div style="display:grid;grid-template-columns:${isMobile()?'1fr':'1fr 1fr'};gap:10px" id="tv3-modes">
      ${modes.map((m,i)=>`<div class="tv3-mode" data-i="${i}" style="padding:16px;background:#fff;border:1px solid #e5e5e5;border-radius:12px">
        <div style="font-size:26px">${m[0]}</div><div style="font-weight:900;color:#1a1a2e;margin:4px 0">${m[1]}</div>
        <div style="font-size:12px;color:#777">${m[2]}</div></div>`).join('')}
    </div></div>`
  await wait(150)
  const els = [...ov.querySelectorAll('.tv3-mode')]
  let mi = 0
  const runM = () => { if (mi>=els.length){next();return}; const e2=els[mi++]; showBubble({ title:modes[mi-1][0]+' '+modes[mi-1][1], text:modes[mi-1][2], targetEl:e2, preferSide:'bottom', onNext:runM }) }
  runM()
})

// ── 8 : Match scripté — choix deck, GC, duel, phases ──────────────────
step(async () => {
  setChrome('home2')
  contentEl().innerHTML = `<div style="padding:${isMobile()?'16px':'24px'}">
    <h2 style="margin:0 0 16px;color:#1a1a2e">⚽ Lancer un match Solo</h2>
    <div id="tv3-deckpick" style="display:flex;align-items:center;gap:12px;padding:14px;background:#fff;
      border:2px solid #1A6B3C;border-radius:12px;max-width:340px;cursor:pointer">
      <div style="font-size:24px">🇫🇷</div>
      <div style="flex:1"><div style="font-weight:800;color:#1a1a2e">France 98</div><div style="font-size:11px;color:#888">4-3-3 · 11/11</div></div>
      <div style="font-size:12px;color:#1A6B3C;font-weight:700">Sélectionner →</div>
    </div></div>`
  await wait(150)
  showBubble({ title:'⚽ Choix du deck', text:'Sélectionne ton équipe pour ce match.', targetEl:ov.querySelector('#tv3-deckpick'), isAction:true, btnLabel:'Sélectionne le deck !', onNext:showGCStep })
})

function showGCStep() {
  const gc = renderGCCard({ gc_type:'red_card', rarity:'pepite' }, isMobile()?100:130)
  contentEl().innerHTML = `<div style="padding:${isMobile()?'16px':'24px'}">
    <h2 style="margin:0 0 16px;color:#1a1a2e">⚡ Choix du Game Changer</h2>
    <div id="tv3-gcpick" style="cursor:pointer;display:inline-block;padding:8px;background:#fff;border:2px solid rgba(212,160,23,0.4);border-radius:12px">
      ${gc}<div style="font-size:11px;color:#888;margin-top:4px;text-align:center">Carton Rouge</div>
    </div></div>`
  wait(150).then(() => showBubble({ title:'⚡ Ton Game Changer', text:'Garde une carte action secrète pour renverser le match au bon moment.', targetEl:ov.querySelector('#tv3-gcpick'), isAction:true, btnLabel:'Sélectionner !', onNext:showDuelStep }))
}

function showDuelStep() {
  const P = (id,f,s,job,nM,rarity,club) => ({ id,firstname:f,surname_real:s,job,job2:null,note_m:nM,note_g:0,note_d:0,note_a:0,rarity,country_code:'FR',clubs:{encoded_name:club},evolution_bonus:0,_evolution_bonus:0,face:null })
  const homeMils = [P('h1','Sabri','Lamouchi','MIL',15,'normal','MONACO'), P('h2','Noah','Bianchi','MIL',15,'normal','LILLE'), P('h3','Sylvain','Legwinski','MIL',14,'normal','MONACO')]
  const aiMils   = [P('a1','Marco','Rossi','MIL',16,'normal','GEN'), P('a2','Luis','Gomez','MIL',14,'normal','GEN'), P('a3','Hans','Muller','MIL',15,'normal','GEN')]
  contentEl().innerHTML = `<div style="background:#0a1628;min-height:100%;padding:${isMobile()?'16px':'24px'};color:#fff">
    <h2 style="text-align:center;margin:0 0 16px">⚔️ Duel du milieu de terrain</h2>
    <div id="tv3-scores" style="display:flex;justify-content:center;gap:20px;margin-bottom:18px">
      <div style="font-size:${isMobile()?'30':'40'}px;font-weight:900;color:#D4A017">0</div><div style="color:#666">—</div>
      <div style="font-size:${isMobile()?'30':'40'}px;font-weight:900;color:#bb2020">0</div>
    </div>
    <div id="tv3-ai-row">${renderMilRow(aiMils,'MILIEU ADVERSE','#bb2020','ai',null)}</div>
    <div id="tv3-home-row" style="margin-top:20px">${renderMilRow(homeMils,'TON MILIEU','#D4A017','home',null)}</div>
    <div id="tv3-gcbanner" style="display:none;margin-top:14px;padding:12px;background:rgba(212,160,23,0.15);border-radius:10px;text-align:center;font-weight:700;color:#D4A017">⚡ Carton Rouge ! Luis Gomez expulsé — score réduit !</div>
  </div>`
  wait(400).then(() => {
    ov.querySelectorAll('.duel-card').forEach((el,i)=>setTimeout(()=>{el.style.opacity='1';el.style.transform='translateY(0) scale(1)'},100+i*100))
    ov.querySelectorAll('.duel-link').forEach((el,i)=>setTimeout(()=>el.style.opacity='1',600+i*60))
    wait(800).then(() => {
      const sH = 15+15+14, sA = 16+14+15
      showBubble({ title:'⚔️ Le duel du milieu', text:`Toi : ${sH} pts | Adversaire : ${sA} pts\n\nUtilise ton Carton Rouge pour prendre l'avantage !`, targetEl:ov.querySelector('#tv3-ai-row'), preferSide:'bottom', btnLabel:'Jouer le Carton Rouge !', onNext: () => {
        ov.querySelector('#tv3-gcbanner').style.display='block'
        const newA = sA - 14
        ov.querySelector('#tv3-scores').innerHTML = `<div style="font-size:${isMobile()?'30':'40'}px;font-weight:900;color:#D4A017">${sH}</div><div style="color:#666">—</div><div style="font-size:${isMobile()?'30':'40'}px;font-weight:900;color:#bb2020">${newA}</div>`
        wait(600).then(() => showBubble({ title:'🏆 Tu gagnes le duel !', text:`${sH} vs ${newA} pts. Tu peux attaquer en premier !`, onNext: showAttackStep }))
      }})
    })
  })
}

function showAttackStep() {
  const W = isMobile()?Math.min(window.innerWidth-32,320):340, H = Math.round(W*0.92)
  const TEAM_FULL = mkTeamFull()
  contentEl().innerHTML = `<div style="background:#0a1628;min-height:100%;padding:${isMobile()?'16px':'24px'};color:#fff">
    <h2 style="text-align:center;margin:0 0 8px;font-size:${isMobile()?'15':'18'}px">⚔️ Phase d'attaque</h2>
    <div style="display:flex;justify-content:center;margin:12px 0">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">${buildTeamSVG(TEAM_FULL,'4-3-3','attack',[],W,H)}</div>
    </div>
    <div style="text-align:center"><button id="tv3-atk" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-weight:800;cursor:pointer">⚔️ Attaquer</button></div>
  </div>`
  wait(150).then(() => showBubble({ title:'⚔️ Tu attaques !', text:'Sélectionne 3 joueurs offensifs pour lancer l\'attaque.', targetEl:ov.querySelector('#tv3-atk'), isAction:true, btnLabel:'Lancer l\'attaque !', onNext:showDefenseStep }))
}

function showDefenseStep() {
  const W = isMobile()?Math.min(window.innerWidth-32,320):340, H = Math.round(W*0.92)
  const TEAM_FULL = mkTeamFull()
  contentEl().innerHTML = `<div style="background:#0a1628;min-height:100%;padding:${isMobile()?'16px':'24px'};color:#fff">
    <h2 style="text-align:center;margin:0 0 8px;font-size:${isMobile()?'15':'18'}px">🛡️ Phase de défense</h2>
    <div style="display:flex;justify-content:center;margin:12px 0">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${W}px;height:${H}px">${buildTeamSVG(TEAM_FULL,'4-3-3','defense',[],W,H)}</div>
    </div>
    <div style="text-align:center"><button id="tv3-def" style="background:#1a3a8a;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-weight:800;cursor:pointer">🛡️ Défendre</button></div>
  </div>`
  wait(150).then(() => showBubble({ title:'🛡️ L\'adversaire attaque', text:'Sélectionne 3 défenseurs pour stopper l\'attaque.', targetEl:ov.querySelector('#tv3-def'), isAction:true, btnLabel:'Défendre !', onNext:showResultStep }))
}

function showResultStep() {
  contentEl().innerHTML = `<div style="background:#0a1628;min-height:100%;display:flex;flex-direction:column;align-items:center;
    justify-content:center;padding:24px;text-align:center;color:#fff;gap:14px">
    <div id="tv3-finalscore" style="font-size:${isMobile()?'42':'58'}px;font-weight:900">2 — 1</div>
    <div style="font-size:18px;font-weight:900;color:#1A6B3C">Victoire ! 🏆</div>
  </div>`
  wait(150).then(() => showBubble({ title:'🏆 Comment gagner', text:'6 phases (3 attaques + 3 défenses). Chaque attaque réussie = 1 but. Le plus de buts gagne !\n\nEn cas d\'égalité, le duel du milieu décide.', targetEl:ov.querySelector('#tv3-finalscore'), preferSide:'bottom', btnLabel:'Terminer !', onNext:next }))
}

function mkTeamFull() {
  const P = (id,f,s,job,nG,nD,nM,nA,club) => ({ id,firstname:f,surname_real:s,job,job2:null,note_g:nG,note_d:nD,note_m:nM,note_a:nA,rarity:'normal',country_code:'FR',clubs:{encoded_name:club},evolution_bonus:0,_evolution_bonus:0,face:null })
  return {
    GK:[P('g1','Fabien','Barthez','GK',17,0,0,0,'MONACO')],
    DEF:[P('d1','Martin','Djetou','DEF',0,15,0,0,'MONACO'),P('d2','Willy','Sagnol','DEF',0,13,0,0,'MONACO'),P('d3','Ming','Girard','DEF',0,20,0,0,'LILLE'),P('d4','James','Bruno','DEF',0,15,0,0,'LILLE')],
    MIL:[P('m1','Sabri','Lamouchi','MIL',0,0,15,0,'MONACO'),P('m2','Noah','Bianchi','MIL',0,13,15,0,'LILLE'),P('m3','Sylvain','Legwinski','MIL',0,0,14,0,'MONACO')],
    ATT:[P('t1','David','Trezeguet','ATT',0,0,0,16,'MONACO'),P('t2','Ludovic','Giuly','ATT',0,0,0,16,'MONACO'),P('t3','Rayan','Boukhris','ATT',0,0,0,20,'CAPITALE SG')],
  }
}

// ── 9 : Fin ────────────────────────────────────────────────────────────
step(() => {
  setChrome('home2')
  contentEl().innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
    min-height:70vh;text-align:center;gap:16px;padding:24px">
    <div style="font-size:${isMobile()?'54':'70'}px">🏆</div>
    <h1 style="font-size:${isMobile()?'20':'26'}px;font-weight:900;margin:0;color:#1a1a2e">Tutoriel terminé !</h1>
    <p style="font-size:${isMobile()?'13':'15'}px;color:#666;max-width:360px;line-height:1.6">Ouvre tes boosters, construis ta formation et lance ton premier match !</p>
    <button id="tv3-finish" style="background:#1A6B3C;color:#fff;border:none;border-radius:12px;padding:14px 34px;font-size:15px;font-weight:900;cursor:pointer">🚀 Commencer à jouer !</button>
  </div>`
  ov.querySelector('#tv3-finish').addEventListener('click', finish)
  setProgress(1,1)
})

// ═══════════════════════════════════════════════════════════════════════
// API PUBLIQUE
// ═══════════════════════════════════════════════════════════════════════
export async function startTutorialV3(done) {
  if (ov) return
  onDone = done
  _i = 0

  // Charge le profil démo + l'id du deck démo (créés par la migration)
  const { data: prof } = await supabase.from('users').select('*').eq('id', DEMO_ID).single()
  if (!prof) {
    console.error('[Tutoriel] Compte démo introuvable — la migration a-t-elle été exécutée ?')
    done?.()
    return
  }
  DEMO_PROFILE = prof
  const { data: deck } = await supabase.from('decks').select('id').eq('owner_id', DEMO_ID).eq('name', 'France 98').limit(1).single()
  DEMO_DECK_ID = deck?.id || null

  buildOv()
  setProgress(0, STEPS.length-1)
  STEPS[0]()
}

async function finish() {
  if (ov) { ov.remove(); ov = null }
  try {
    const { data:{user} } = await supabase.auth.getUser()
    if (user) await supabase.from('users').update({ tutorial_done:true }).eq('id', user.id)
  } catch {}
  onDone?.()
}
