import { supabase } from '../lib/supabase.js'
import { renderPlayerCard } from '../components/player-card.js'
import {
  GC_DEFS, getNoteForRole, calcAttack, calcDefense,
  calcMidfieldDuel, resolveDuel, aiSelectPlayers, getRewards
} from './game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, linkColor, getActiveLinks } from './formation-links.js'

// ═══════════════════════════════════════════════════════════
// match-shared.js — Code 100% commun entre Match vs IA et Match Random.
// Toute modification ici s'applique automatiquement aux deux modes,
// garantissant qu'ils restent visuellement et fonctionnellement identiques
// (sauf la logique de tour : IA d'un côté, joueur réel de l'autre).
// ═══════════════════════════════════════════════════════════

export const FORMATIONS = {
  '4-3-3 (3)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '5-3-2':     { GK:1, DEF:5, MIL:3, ATT:2 },
  '4-3-3 (4)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-2-1':   { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3 (2)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3':     { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3 (5)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '5-2-2-1':   { GK:1, DEF:5, MIL:2, ATT:3 },
  '4-3-1-2':   { GK:1, DEF:4, MIL:4, ATT:2 },
  '5-2-1-2':   { GK:1, DEF:5, MIL:3, ATT:2 },
  '4-5-1 (2)': { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-5-1':     { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-4-2':     { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-4-2 (2)': { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-4-1-1':   { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-1-2-1-2':     { GK:1, DEF:4, MIL:4, ATT:2 },
  '3-4-1-2':       { GK:1, DEF:3, MIL:5, ATT:2 },
  '3-4-2-1':       { GK:1, DEF:3, MIL:4, ATT:3 },
  '3-5-2':         { GK:1, DEF:3, MIL:5, ATT:2 },
  '4-1-4-1':       { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-2-2-2':       { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-2-3-1':       { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-2-3-1 (2)':   { GK:1, DEF:4, MIL:5, ATT:1 },
  '3-4-3':         { GK:1, DEF:3, MIL:4, ATT:3 },
  '4-1-2-1-2 (2)': { GK:1, DEF:4, MIL:4, ATT:2 },
}
export const JOB_COLORS = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

// ── Helpers ───────────────────────────────────────────────

export function showMsg(container, icon, msg, btnLabel, btnFn) {
  container.innerHTML = `<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${icon}</div>
      <p style="margin-bottom:16px">${msg}</p>
      <button class="btn btn-primary" id="msg-btn">${btnLabel}</button>
    </div>
  </div>`
  document.getElementById('msg-btn')?.addEventListener('click', btnFn)
}

export function getPortrait(p) {
  // Priorité : champ face (public/faces/...)
  if (p?.face) {
    const base = (typeof import.meta !== 'undefined' ? import.meta.env?.BASE_URL : null) || '/'
    const f = p.face.replace(/^public\//, '').replace(/^\//, '')
    return base + f
  }
  // Fallback ancien système skin/hair
  const url = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_SUPABASE_URL : ''
  if (!url || !p?.skin || !p?.hair) return null
  const key = p.hair === 'chauve' ? `${p.skin}-chauve-rase` : `${p.skin}-${p.hair}-${p.hair_length}`
  return `${url}/storage/v1/object/public/assets/tetes/${key}.png`
}

export function playerFromCard(card, position) {
  const p = card.player
  const evo = card.evolution_bonus || 0
  const j2base = p.job2 ? (Number(p[`note_${p.job2.toLowerCase()}`])||0) : 0
  return {
    cardId: card.id,
    position: position || null,
    id: p.id,
    firstname: p.firstname,
    name: p.surname_real,
    country_code: p.country_code,
    club_id: p.club_id,
    job: p.job, job2: p.job2,
    // Appliquer evolution_bonus sur toutes les notes
    note_g: (Number(p.note_g)||0) + (p.job==='GK' ? evo : 0) + (p.job2==='GK' && j2base>0 ? evo : 0),
    note_d: (Number(p.note_d)||0) + (p.job==='DEF' ? evo : 0) + (p.job2==='DEF' && j2base>0 ? evo : 0),
    note_m: (Number(p.note_m)||0) + (p.job==='MIL' ? evo : 0) + (p.job2==='MIL' && j2base>0 ? evo : 0),
    note_a: (Number(p.note_a)||0) + (p.job==='ATT' ? evo : 0) + (p.job2==='ATT' && j2base>0 ? evo : 0),
    evolution_bonus: evo,
    rarity: p.rarity,
    skin: p.skin, hair: p.hair, hair_length: p.hair_length, face: p.face || null,
    clubName: p.clubs?.encoded_name || null,
    clubLogo: p.clubs?.logo_url || null,
    boost: 0,
    used: false,
    _line: null, _col: null,
  }
}


// Applique le bonus stade (+10) aux joueurs d'une équipe qui correspondent au club ou pays du stade
export function applyStadiumBonus(team, stadiumDef) {
  if (!stadiumDef || !team) return team
  const { club_id, country_code } = stadiumDef
  Object.values(team).forEach(players => {
    if (!Array.isArray(players)) return
    players.forEach(p => {
      const matchClub    = club_id     && String(p.club_id)     === String(club_id)
      const matchCountry = country_code && String(p.country_code) === String(country_code)
      if (matchClub || matchCountry) {
        p.stadiumBonus = true   // flag uniquement — la note est ajoutée conditionnellement par phase
      }
    })
  })
  return team
}

// Applique le flag stadiumBonus sur un tableau de remplaçants
export function applyStadiumBonusToSubs(subs, stadiumDef) {
  if (!stadiumDef || !subs?.length) return subs
  const { club_id, country_code } = stadiumDef
  subs.forEach(p => {
    if (!p) return
    const matchClub    = club_id     && String(p.club_id)     === String(club_id)
    const matchCountry = country_code && String(p.country_code) === String(country_code)
    if (matchClub || matchCountry) p.stadiumBonus = true
  })
  return subs
}

export function getColsForLine(n) {
  if (n===1) return [1]
  if (n===2) return [0,2]
  if (n===3) return [0,1,2]
  if (n===4) return [0,1,1,2]
  if (n===5) return [0,1,1,1,2]
  return [1]
}

export function rollBoost() {
  // +1 70%, +2 20%, +3 10%
  const r = Math.random() * 100
  if (r < 10) return 3
  if (r < 30) return 2
  return 1
}

export function buildTeam(starters, formation) {
  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }

  const hasPositions = starters.length && starters.every(p => p.position)

  if (hasPositions) {
    // Regrouper par rôle extrait de la position (ex: 'MIL5' → 'MIL'), trié par numéro de slot
    for (const role of ['GK','DEF','MIL','ATT']) {
      const linePlayers = starters
        .filter(p => p.position && p.position.replace(/\d+$/, '') === role)
        .sort((a,b) => parseInt(a.position.replace(/\D+/g,''),10) - parseInt(b.position.replace(/\D+/g,''),10))
        .map(p => ({ ...p, _line: role }))
      const cols = getColsForLine(linePlayers.length)
      linePlayers.forEach((p, i) => { p._col = cols[i] })
      lines[role] = linePlayers
    }
    return lines
  }

  // ── Fallback heuristique (ancien comportement, utilisé seulement si pas de position) ──
  const pool = [...starters]
  for (const role of ['GK','DEF','MIL','ATT']) {
    const linePlayers = []
    for (let i = 0; i < struct[role]; i++) {
      let idx = pool.findIndex(p => p.job === role)
      if (idx === -1) idx = pool.findIndex(p => p.job2 === role)
      if (idx === -1) idx = 0
      if (pool[idx]) {
        const p = { ...pool[idx], _line: role }
        linePlayers.push(p)
        pool.splice(idx, 1)
      }
    }
    const cols = getColsForLine(linePlayers.length)
    linePlayers.forEach((p, i) => { p._col = cols[i] })
    lines[role] = linePlayers
  }
  return lines
}

export function _hideBottomNav(container) {
  // Cibler explicitement les barres top-nav et bottom-nav (enfants de #app)
  document.querySelectorAll('.top-nav, .bottom-nav').forEach(el => {
    el.style.setProperty('display', 'none', 'important')
    el.dataset.matchHidden = '1'
  })
  // La classe .page réserve padding-bottom:70px pour la bottom-nav (cf app.css).
  // Une fois la nav cachée, ce padding devient un espace fantôme qui décale
  // tout l'écran de match vers le bas (le bouton Attaquer/Défendre se retrouve
  // sous la ligne de flottaison, accessible seulement en scrollant la page).
  if (container) container.style.setProperty('padding-bottom', '0', 'important')
}

export function _showBottomNav(container) {
  document.querySelectorAll('.top-nav, .bottom-nav').forEach(el => {
    el.style.removeProperty('display')
    delete el.dataset.matchHidden
  })
  if (container) container.style.removeProperty('padding-bottom')
}

export function showGCSelection(container, gcCards, onConfirm) {
  const MAX = 3

  // ── Distinct par gc_type : une seule carte par type ──────
  const seen = new Set()
  const distinctCards = gcCards.filter(card => {
    const key = card.gc_type || card.id
    if (seen.has(key)) return false
    seen.add(key); return true
  })

  let chosen = []

  function gcCardHTML(card, selected) {
    const def  = card._gcDef
    const BG   = { purple:'linear-gradient(135deg,#3d0a7a,#7a28b8)', light_blue:'linear-gradient(135deg,#006080,#00bcd4)' }
    const BORD = { purple:'#9b59b6', light_blue:'#00bcd4' }
    const bg   = BG[def?.color]   || BG.purple
    const bord = BORD[def?.color] || BORD.purple
    return `<div class="gc-select-card" data-id="${card.id}"
      style="width:100px;border-radius:10px;border:3px solid ${selected?'#FFD700':bord};background:${bg};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${selected?'0 0 18px #FFD700':'0 2px 8px rgba(0,0,0,0.4)'};
        transform:${selected?'scale(1.06)':'scale(1)'};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${(def?.name||card.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${def?.name||card.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${def?.image_url ? `<img src="${import.meta.env.BASE_URL}icons/${def.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">` : `<span style="font-size:32px">⚡</span>`}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${(def?.effect||'').slice(0,50)}</span>
      </div>
      ${selected ? '<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>' : ''}
    </div>`
  }

  const _gcDone = (cards) => {
    // Réinitialiser les styles imposés par showGCSelection
    container.style.overflow      = ''
    container.style.height        = ''
    container.style.display       = ''
    container.style.flexDirection = ''
    onConfirm(cards)
  }

  function render() {
    container.style.overflow = 'hidden'
    container.style.height = '100%'
    container.style.display = 'flex'
    container.style.flexDirection = 'column'

    const canValidate = chosen.length > 0  // 1 à MAX cartes acceptées

    container.innerHTML = `
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">${MAX}</b> cartes · ${chosen.length}/${MAX}
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${distinctCards.map(card => {
          const sel = chosen.find(x => x.gc_type === card.gc_type)
          return gcCardHTML(card, !!sel)
        }).join('')}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${canValidate?'':'disabled'} style="width:100%;padding:14px;border-radius:14px;border:none;background:${canValidate?'linear-gradient(135deg,#5a0a9a,#9a28e8)':'rgba(255,255,255,0.08)'};color:${canValidate?'#fff':'rgba(255,255,255,0.3)'};font-size:15px;font-weight:900;cursor:${canValidate?'pointer':'default'};box-shadow:${canValidate?'0 4px 20px rgba(122,40,184,0.5)':'none'}">
          ⚡ Valider (${chosen.length}/${MAX})
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${chosen.length===0?'disabled':''} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${chosen.length===0?'rgba(212,160,23,0.3)':'#D4A017'};font-size:13px;font-weight:700;cursor:${chosen.length===0?'default':'pointer'}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`

    // Events cartes
    container.querySelectorAll('.gc-select-card').forEach(el => {
      el.addEventListener('click', () => {
        const cardId = el.dataset.id
        const card   = distinctCards.find(c => c.id === cardId)
        if (!card) return
        const idx = chosen.findIndex(x => x.gc_type === card.gc_type)
        if (idx > -1) { chosen.splice(idx, 1) }
        else if (chosen.length < MAX) { chosen.push(card) }
        render()
      })
    })

    container.querySelector('#gc-launch')?.addEventListener('click', () => { if (canValidate) _gcDone(chosen) })
    container.querySelector('#gc-no-gc')?.addEventListener('click', () => _gcDone([]))
    container.querySelector('#gc-reset')?.addEventListener('click', () => { if (chosen.length) { chosen = []; render() } })
  }

  render()
}

// Calcule le libellé d'en-tête selon le mode de match (IA / Random / Ami)
function matchTitleLabel(ctx) {
  const params = (ctx?.state?.params) || {}
  const mm = params.matchMode || 'vs_ai_easy'
  if (mm === 'friend') return `Match vs ${params.friendName || 'Ami'}`
  if (mm === 'random') return 'Match vs Random'
  // Modes IA : vs_ai_easy / vs_ai_medium / vs_ai_hard
  return `Match vs IA — ${mm.replace('vs_ai_','').toUpperCase()}`
}

export async function renderDeckSelect(container, ctx, matchMode) {
  const { state, navigate } = ctx
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: decks } = await supabase
    .from('decks').select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`)
    .eq('owner_id', state.profile.id).order('created_at', { ascending:false })

  if (!decks || decks.length === 0) {
    showMsg(container, '📋', 'Aucun deck. Crée un deck avant de jouer !', 'Créer un deck', () => navigate('decks'))
    return
  }

  const deckIds = decks.map(d => d.id)
  const { data: allDeckCards } = await supabase
    .from('deck_cards')
    .select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`)
    .in('deck_id', deckIds)
    .order('slot_order')

  // Charger les defs stade pour les cartes stadium présentes
  const stadiumIds = [...new Set((allDeckCards||[])
    .filter(dc=>dc.card?.card_type==='stadium' && dc.card?.stadium_id)
    .map(dc=>dc.card.stadium_id))]
  const stadiumDefMap = {}
  if (stadiumIds.length) {
    const { data: sdefs } = await supabase
      .from('stadium_definitions')
      .select('id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)')
      .in('id', stadiumIds)
    ;(sdefs||[]).forEach(d => { stadiumDefMap[d.id] = d })
    // Attacher la def à chaque card stadium
    ;(allDeckCards||[]).forEach(dc => {
      if (dc.card?.card_type==='stadium' && dc.card?.stadium_id)
        dc.card._stadiumDef = stadiumDefMap[dc.card.stadium_id] || null
    })
  }

  let currentIdx = 0

  function renderPreview() {
    const deck = decks[currentIdx]
    const cards = (allDeckCards||[]).filter(dc => dc.deck_id === deck.id)
    const starters = cards.filter(dc => dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))
    const formationCard = cards.find(dc => dc.card?.card_type === 'formation')
    const formation = deck.formation || formationCard?.card?.formation || '4-4-2'
    let team = starters.length >= 11 ? buildTeam(starters, formation) : null

    // Carte Stade : bonus +10 aux joueurs du même club/pays
    let stadiumDef = deck.stadium_card?.stadium_def || null
    if (stadiumDef && team) team = applyStadiumBonus(team, stadiumDef)

    const complete = starters.length >= 11

    _hideBottomNav(container)
    container.style.height = '100%'
    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${matchTitleLabel(ctx)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${currentIdx===0?'0.05':'0.15'});border:2px solid rgba(255,255,255,${currentIdx===0?'0.1':'0.3'});color:${currentIdx===0?'rgba(255,255,255,0.2)':'#fff'};font-size:18px;cursor:${currentIdx===0?'default':'pointer'};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${deck.name}</div>
            <div style="font-size:11px;opacity:.6">${formation} · ${starters.length}/11${deck.is_active?' · ⭐':''}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${currentIdx===decks.length-1?'0.05':'0.15'});border:2px solid rgba(255,255,255,${currentIdx===decks.length-1?'0.1':'0.3'});color:${currentIdx===decks.length-1?'rgba(255,255,255,0.2)':'#fff'};font-size:18px;cursor:${currentIdx===decks.length-1?'default':'pointer'};flex-shrink:0">▶</button>
        </div>
        ${stadiumDef ? `
        <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);border-top:1px solid rgba(232,119,34,0.3)">
          <span>🏟️</span>
          <span style="font-size:12px;font-weight:700">${stadiumDef.name}</span>
          <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs ${stadiumDef.club?.encoded_name||stadiumDef.country_code||''}</span>
        </div>` : ''}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:visible;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${team
          ? `<div class="deck-preview-wrap" style="overflow:visible;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>`
          : `<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${starters.length}/11)</div></div>`
        }
      </div>

      <!-- Pagination -->
      ${decks.length > 1 ? `<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${decks.map((_,i)=>`<div style="width:6px;height:6px;border-radius:50%;background:${i===currentIdx?'#FFD700':'rgba(255,255,255,0.25)'}"></div>`).join('')}</div>` : ''}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${complete?'#1A6B3C':'rgba(255,255,255,0.08)'};
          color:${complete?'#fff':'rgba(255,255,255,0.3)'};font-size:16px;font-weight:900;cursor:${complete?'pointer':'default'}">
          ${complete?'✅ Valider ce deck':'⚠️ Deck incomplet'}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`

    // Retirer le cap max-width:440px du SVG pour qu'il remplisse le wrapper
    // Double rAF : garantit que le layout flex est stabilisé (surtout sur mobile)
    requestAnimationFrame(() => requestAnimationFrame(function fixDeckSVG() {
      const wrap = container.querySelector('.deck-preview-wrap')
      const zone = container.querySelector('#deck-swipe-zone')
      if (!wrap || !zone || !team) return

      // Mesurer l'espace réel disponible : quasi toute la hauteur, marge 20px haut/bas
      const availH = Math.max(200, zone.clientHeight - 40)
      const availWraw = Math.max(200, zone.clientWidth - 16)
      const isPC = zone.clientWidth >= 900
      // PC : plafonner la largeur (zone très large) ; Mobile : utiliser toute la largeur
      const availW = isPC ? Math.min(availWraw, Math.round(availH * 0.95)) : availWraw
      // Recalculer CW comme dans buildTeamSVG pour connaître la taille des cartes
      const CW = Math.max(44, Math.round(availW * 0.168))

      if (availH < 220 || availW < 220) {
        // Le layout n'est pas encore stable → réessayer au prochain frame
        requestAnimationFrame(fixDeckSVG)
        return
      }

      // Générer le SVG avec EXACTEMENT ce ratio (W, H passés à renderTeam)
      // → le viewBox interne colle à la zone, pas de vert vide
      // Mobile : PAD réduit pour que GK touche le bas et ATT touche le haut
      const mobilePad = isPC ? null : Math.round(CW * 0.55)
      wrap.innerHTML = renderTeam(team, formation, null, [], availW, availH, [], mobilePad)
      wrap.style.cssText = `width:${availW}px;height:${availH}px;overflow:visible;margin:${isPC?0:60}px auto 0`

      const svg = wrap.querySelector('svg')
      if (svg) {
        svg.style.cssText = 'display:block;width:100%;height:100%'
        // Mobile : étirer pour remplir exactement la zone (pas de bandes vertes)
        // PC : conserver les proportions
        svg.setAttribute('preserveAspectRatio', isPC ? 'xMidYMid meet' : 'none')
      }
    }))

    document.getElementById('prev-deck')?.addEventListener('click', () => {
      if (currentIdx > 0) { currentIdx--; renderPreview() }
    })
    document.getElementById('next-deck')?.addEventListener('click', () => {
      if (currentIdx < decks.length-1) { currentIdx++; renderPreview() }
    })
    document.getElementById('validate-deck')?.addEventListener('click', () => {
      if (!complete) return
      // Préserver les params existants (friendId, friendName, matchMode réel) et
      // n'ajouter que le deckId. Ne JAMAIS écraser matchMode par la valeur locale,
      // sinon un match ami repasserait en random.
      const prev = ctx.state.params || {}
      ctx.navigate('match', { ...prev, matchMode: prev.matchMode || matchMode, deckId: deck.id })
    })
    document.getElementById('cancel-deck-select')?.addEventListener('click', () => { _showBottomNav(container); navigate('home') })

    // Swipe tactile gauche/droite
    const swipeZone = document.getElementById('deck-swipe-zone')
    if (swipeZone) {
      let touchStartX = 0
      let touchStartY = 0
      swipeZone.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
      }, { passive: true })
      swipeZone.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX
        const dy = e.changedTouches[0].clientY - touchStartY
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return // trop petit ou scroll vertical
        if (dx < 0 && currentIdx < decks.length - 1) { currentIdx++; renderPreview() }
        else if (dx > 0 && currentIdx > 0) { currentIdx--; renderPreview() }
      }, { passive: true })
    }
  }

  renderPreview()
}

export function getClubLogo(p) {
  const url = import.meta?.env?.VITE_SUPABASE_URL || ''
  if (!p?.clubLogo) return null
  if (p.clubLogo.startsWith('http')) return p.clubLogo
  return url ? `${url}/storage/v1/object/public/assets/clubs/${p.clubLogo}` : null
}

export function renderMiniCardHTML(p, w=44, h=58, stadDef=null) {
  // Délègue au nouveau composant universel
  return renderPlayerCard(p, { width: w, showStad: !!stadDef, stadDef, used: p?.used })
}


export function renderCardRow(players, accentColor, total) {
  if (!players?.length) return ''
  const shown = players.slice(0, 5)
  let html = '<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">'
  shown.forEach((p, i) => {
    const role = p._line || p.job || 'MIL'
    html += renderPlayerCard(p, { width: 40, role, extraNote: p.boost || 0 })
    if (i < shown.length - 1) {
      const lc = linkColor(p, shown[i+1])
      const noLink = lc === '#ff3333' || lc === '#cc2222'
      html += `<div style="width:7px;height:3px;background:${noLink?'rgba(255,255,255,0.12)':lc};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`
    }
  })
  if (total !== undefined) {
    const textColor = accentColor === '#00ff88' ? '#000' : '#fff'
    html += `<div style="margin-left:6px;background:${accentColor};color:${textColor};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${total}</div>`
  }
  html += '</div>'
  return html
}

export function flagImgUrl(code) {
  if (!code || code.length < 2) return null
  return `https://flagsapi.com/${code.slice(0,2).toUpperCase()}/flat/64.png`
}

export function countryFlag(code) {
  if (!code || code.length < 2) return '🌍'
  try {
    const A = 0x1F1E6
    return String.fromCodePoint(A + code.charCodeAt(0) - 65) +
           String.fromCodePoint(A + code.charCodeAt(1) - 65)
  } catch { return '🌍' }
}

export function buildTeamSVG(team, formation, phase, selectedIds, W=310, H=310, extraSelectableIds=[], padOverride=null) {
  const FPOS   = FORMATION_POSITIONS[formation] || {}
  const FLINKS = getActiveLinks(formation) || FORMATION_LINKS[formation] || []
  const R      = 26

  const slots = {}
  const LINES = ['ATT','MIL','DEF','GK']
  for (const role of LINES) {
    const players = team[role] || []
    players.forEach((p, i) => { slots[`${role}${i+1}`] = p })
  }

  function px(pos) {
    const p = FPOS[pos]; return p ? { x:p.x*W, y:p.y*H } : null
  }

  let svg = ''

  // 1. Liens (double ligne, sans filter url pour éviter bug SPA Chrome)
  for (const [posA, posB] of FLINKS) {
    const a = px(posA), b = px(posB)
    if (!a || !b) continue
    const pA = slots[posA], pB = slots[posB]
    const lc = linkColor(pA, pB)
    const hasGlow = lc === '#00ff88' || lc === '#FFD700'
    if (hasGlow) {
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${lc}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${lc}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`
    } else {
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${lc}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`
    }
  }

  // 2. Cartes joueurs : renderPlayerCard via foreignObject
  // Cartes grandes : ~18% de la largeur du terrain
  const CW = Math.max(44, Math.round(W * 0.168))
  const CH = Math.round(CW * 657/507)

  for (const [pos, p] of Object.entries(slots)) {
    const c = px(pos)
    if (!c || !p) continue
    const role = pos.replace(/[0-9]/g,'')

    const isExtraSelectable = extraSelectableIds.includes(p.cardId)
    const selectable = (phase==='attack' && (['MIL','ATT'].includes(role) || isExtraSelectable) && !p.used)
                    || (phase==='defense' && ['GK','DEF','MIL'].includes(role) && !p.used)
    const isSelected = selectedIds.includes(p.cardId)

    let extraNote = p.boost || 0
    if (p.stadiumBonus) {
      if (phase === 'attack' && (role === 'ATT' || role === 'MIL')) extraNote += 10
      else if (phase === 'defense' && (role === 'GK' || role === 'DEF' || role === 'MIL')) extraNote += 10
      else if (!phase) extraNote += 10
    }

    const fx = Math.round(c.x - CW/2)
    const fy = Math.round(c.y - CH/2)

    if (p.used) {
      const _base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/'
      const backUrl = `${_base}icons/carte-dos.png`
      svg += `<image href="${backUrl}" x="${fx}" y="${fy}" width="${CW}" height="${CH}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${p.cardId}" data-role="${role}" style="cursor:pointer"/>`
      continue
    }

    // Evo déjà intégré dans note_g/d/m/a par playerFromCard → _evolution_bonus:0
    // p.stadiumBonus déjà géré par renderPlayerCard (ligne 84 player-card.js)
    const cardHtml = renderPlayerCard(
      { ...p, _evolution_bonus: 0 },
      { width: CW, showStad: true, stadDef: null, role, extraNote, _cardOffset: 30 }
    )
    const selStyle = isSelected ? 'outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;' : ''
    svg += `<foreignObject x="${fx - 2}" y="${fy - 30}" width="${CW + 8}" height="${CH + 60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${selStyle}position:relative">
        ${cardHtml}
      </div>
    </foreignObject>`

    if (selectable) {
      svg += `<rect x="${fx}" y="${fy}" width="${CW}" height="${CH}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${isSelected?'selected':''}" data-card-id="${p.cardId}" data-role="${role}" style="cursor:pointer"/>`
    }
  }

  const PAD = padOverride !== null ? padOverride : Math.round(Math.max(CW * 0.7, 80))
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-PAD} ${-PAD} ${W+PAD*2} ${H+PAD*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${svg}
  </svg>`
  return `<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${buildTeamSVG(team, formation, phase, selectedIds, W, H, extraSelectableIds)}
  </div>`
}


export function renderTeam(team, formation, phase, selectedIds, W=300, H=300, extraSelectableIds=[], padOverride=null) {
  return `<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${buildTeamSVG(team, formation, phase, selectedIds, W, H, extraSelectableIds, padOverride)}
  </div>`
}

export function renderMiniPlayer(p, grayed=false) {
  const portrait = p.portrait || null
  const jobColor = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }[p.job] || '#555'
  return `
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${jobColor};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${grayed?'0.2':'0.5'});opacity:${grayed?0.4:1};margin:0 auto">
      ${portrait ? `<img src="${portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` : ''}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${p.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(p.name||'').slice(0,7)}</div>
  </div>`
}


// ── Point d'entrée commun : charge deck + GC, route vers IA ou Random ──
// onReady(ctx_data) est appelé une fois le deck + les GC chargés et validés,
// avec tout ce qu'il faut pour lancer le match (IA ou random selon le mode).
export async function loadMatchSetup(container, ctx, matchMode, onReady) {
  const { state, navigate, toast } = ctx
  _hideBottomNav(container)
  const params = state.params || {}
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  if (!params.deckId) {
    return renderDeckSelect(container, ctx, matchMode)
  }

  const deckId = params.deckId

  let deckMeta, deckCards, deckErr1, deckErr2
  try {
    const results = await Promise.all([
      supabase.from('decks').select('formation,name,stadium_card_id').eq('id', deckId).single(),
      supabase.from('deck_cards')
        .select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`)
        .eq('deck_id', deckId).order('slot_order')
    ])
    deckMeta  = results[0].data; deckErr1 = results[0].error
    deckCards = results[1].data; deckErr2 = results[1].error
  } catch (e) {
    console.error('[Match] Exception chargement deck:', e)
    showMsg(container, '⚠️', 'Erreur réseau lors du chargement du deck. Réessaie.', 'Retour', () => navigate('home'))
    return
  }

  if (deckErr1 || deckErr2) {
    console.error('[Match] Erreur Supabase:', deckErr1 || deckErr2)
    showMsg(container, '⚠️', 'Erreur lors du chargement du deck.', 'Retour', () => navigate('home'))
    return
  }

  const starters = (deckCards||[]).filter(dc => dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))
  const subsRaw  = (deckCards||[]).filter(dc => !dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))

  if (starters.length < 11) {
    showMsg(container, '⚠️', `Deck incomplet (${starters.length}/11).`, 'Compléter', () => navigate('decks'))
    return
  }

  // Formation : priorité decks.formation, puis formation card, puis défaut
  const formationCard = (deckCards||[]).find(dc => dc.card?.card_type === 'formation')
  const formation = deckMeta?.formation || formationCard?.card?.formation || '4-4-2'

  // Charger toutes les cartes GC disponibles
  const { data: allGCCards, error: gcErr } = await supabase
    .from('cards')
    .select('id, gc_type, gc_definition_id')
    .eq('owner_id', state.profile.id)
    .eq('card_type', 'game_changer')

  const { data: gcDefs } = await supabase.from('gc_definitions').select('*').eq('is_active', true)

  const gcCardsEnriched = (allGCCards||[]).map(card => ({
    ...card,
    _gcDef: gcDefs?.find(d => d.name === card.gc_type || d.id === card.gc_definition_id) || null,
  }))

  // Charger la def du stade du deck sélectionné
  let stadiumDef = null
  if (deckMeta?.stadium_card_id) {
    const { data: stadCard } = await supabase
      .from('cards').select('stadium_id').eq('id', deckMeta.stadium_card_id).single()
    if (stadCard?.stadium_id) {
      const { data: sDef } = await supabase
        .from('stadium_definitions')
        .select('id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)')
        .eq('id', stadCard.stadium_id).single()
      stadiumDef = sDef || null
    }
  }

  onReady({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs: gcDefs || [], stadiumDef })
}
