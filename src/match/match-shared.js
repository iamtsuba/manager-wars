import { supabase } from '../lib/supabase.js'
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

const FORMATIONS = {
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
const JOB_COLORS = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

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
  const url = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_SUPABASE_URL : ''
  if (!url || !p?.skin || !p?.hair) return null
  const key = p.hair === 'chauve' ? `${p.skin}-chauve-rase` : `${p.skin}-${p.hair}-${p.hair_length}`
  return `${url}/storage/v1/object/public/assets/tetes/${key}.png`
}

export function playerFromCard(card, position) {
  const p = card.player
  return {
    cardId: card.id,
    position: position || null,
    id: p.id,
    firstname: p.firstname,
    name: p.surname_encoded,
    country_code: p.country_code,
    club_id: p.club_id,
    job: p.job, job2: p.job2,
    note_g: Number(p.note_g)||0,
    note_d: Number(p.note_d)||0,
    note_m: Number(p.note_m)||0,
    note_a: Number(p.note_a)||0,
    rarity: p.rarity,
    skin: p.skin, hair: p.hair, hair_length: p.hair_length,
    clubName: p.clubs?.encoded_name || null,
    clubLogo: p.clubs?.logo_url || null,
    boost: 0,
    used: false,
    _line: null, _col: null,
  }
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
}

export function _showBottomNav(container) {
  document.querySelectorAll('.top-nav, .bottom-nav').forEach(el => {
    el.style.removeProperty('display')
    delete el.dataset.matchHidden
  })
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

  function renderOverlay() {
    // Overlay centré avec les 3 boutons — apparaît quand MAX cartes sélectionnées
    const existing = container.querySelector('#gc-confirm-overlay')
    if (existing) existing.remove()
    if (chosen.length < MAX) return

    const ov = document.createElement('div')
    ov.id = 'gc-confirm-overlay'
    ov.style.cssText = 'position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)'
    ov.innerHTML = `
      <div style="font-size:28px">⚡</div>
      <div style="font-size:18px;font-weight:900;color:#FFD700;text-align:center">${MAX} cartes sélectionnées !</div>
      <button id="gc-launch" style="width:100%;max-width:320px;padding:16px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:16px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(122,40,184,0.5)">
        ⚡ Partir avec ces ${MAX} GC
      </button>
      <button id="gc-no-gc" style="width:100%;max-width:320px;padding:14px;border-radius:14px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        ▶ Partir sans GC
      </button>
      <button id="gc-reset" style="width:100%;max-width:320px;padding:14px;border-radius:14px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:#D4A017;font-size:14px;font-weight:700;cursor:pointer">
        🔄 Changer de GC
      </button>`

    const _gcDone = (cards) => {
      // Réinitialiser les styles imposés par showGCSelection
      container.style.overflow      = ''
      container.style.height        = ''
      container.style.display       = ''
      container.style.flexDirection = ''
      onConfirm(cards)
    }
    ov.querySelector('#gc-launch')?.addEventListener('click', () => _gcDone(chosen))
    ov.querySelector('#gc-no-gc')?.addEventListener('click', () => _gcDone([]))
    ov.querySelector('#gc-reset')?.addEventListener('click', () => { chosen = []; render() })

    const wrap = container.querySelector('#gc-screen-wrap')
    if (wrap) wrap.appendChild(ov)
    else container.appendChild(ov)
  }

  function render() {
    container.style.overflow = 'hidden'
    const _gcH = container.clientHeight || container.getBoundingClientRect().height
    if (_gcH > 50) container.style.height = _gcH + 'px'

    container.innerHTML = `
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${MAX}</b> cartes · ${chosen.length}/${MAX}
          ${chosen.length > 0 && chosen.length < MAX ? ` · encore ${MAX - chosen.length}` : ''}
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${distinctCards.map(card => {
          const sel = chosen.find(x => x.gc_type === card.gc_type)
          return gcCardHTML(card, !!sel)
        }).join('')}
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
        if (chosen.length === MAX) renderOverlay()
      })
    })

    if (chosen.length === MAX) renderOverlay()
  }

  render()
}

export async function renderDeckSelect(container, ctx, matchMode) {
  const { state, navigate } = ctx
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: decks } = await supabase
    .from('decks').select('id,name,is_active,formation')
    .eq('owner_id', state.profile.id).order('created_at', { ascending:false })

  if (!decks || decks.length === 0) {
    showMsg(container, '📋', 'Aucun deck. Crée un deck avant de jouer !', 'Créer un deck', () => navigate('decks'))
    return
  }

  const deckIds = decks.map(d => d.id)
  const { data: allDeckCards } = await supabase
    .from('deck_cards')
    .select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`)
    .in('deck_id', deckIds)
    .order('slot_order')

  let currentIdx = 0

  function renderPreview() {
    const deck = decks[currentIdx]
    const cards = (allDeckCards||[]).filter(dc => dc.deck_id === deck.id)
    const starters = cards.filter(dc => dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))
    const formationCard = cards.find(dc => dc.card?.card_type === 'formation')
    const formation = deck.formation || formationCard?.card?.formation || '4-4-2'
    const team = starters.length >= 11 ? buildTeam(starters, formation) : null
    const complete = starters.length >= 11

    _hideBottomNav(container)
    container.style.height = '100%'
    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${matchMode.replace('vs_ai_','').toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${currentIdx===0?'0.05':'0.15'});border:2px solid rgba(255,255,255,${currentIdx===0?'0.1':'0.3'});color:${currentIdx===0?'rgba(255,255,255,0.2)':'#fff'};font-size:20px;cursor:${currentIdx===0?'default':'pointer'};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${deck.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${formation} · ${starters.length}/11 ${deck.is_active?'· ⭐ Actif':''}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${currentIdx===decks.length-1?'0.05':'0.15'});border:2px solid rgba(255,255,255,${currentIdx===decks.length-1?'0.1':'0.3'});color:${currentIdx===decks.length-1?'rgba(255,255,255,0.2)':'#fff'};font-size:20px;cursor:${currentIdx===decks.length-1?'default':'pointer'};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${team
          ? `<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${renderTeam(team, formation, null, [], 285, 285)}</div>`
          : `<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${starters.length}/11)</div>
             </div>`
        }
      </div>

      <!-- Indicateurs pagination -->
      ${decks.length > 1 ? `
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${decks.map((_,i)=>`<div style="width:7px;height:7px;border-radius:50%;background:${i===currentIdx?'#FFD700':'rgba(255,255,255,0.25)'}"></div>`).join('')}
      </div>` : ''}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${complete?'#1A6B3C':'rgba(255,255,255,0.08)'};
          color:${complete?'#fff':'rgba(255,255,255,0.3)'};font-size:16px;font-weight:900;cursor:${complete?'pointer':'default'}">
          ${complete?'✅ Valider ce deck':'⚠️ Deck incomplet'}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`

    // Retirer le cap max-width:440px du SVG pour qu'il remplisse le wrapper
    ;(function fixDeckSVG() {
      const svg = container.querySelector('.deck-preview-wrap svg')
      if (!svg) return
      svg.removeAttribute('width'); svg.removeAttribute('height')
      svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    })()

    document.getElementById('prev-deck')?.addEventListener('click', () => {
      if (currentIdx > 0) { currentIdx--; renderPreview() }
    })
    document.getElementById('next-deck')?.addEventListener('click', () => {
      if (currentIdx < decks.length-1) { currentIdx++; renderPreview() }
    })
    document.getElementById('validate-deck')?.addEventListener('click', () => {
      if (!complete) return
      ctx.navigate('match', { matchMode, deckId: deck.id })
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

export function renderMiniCardHTML(p, w=44, h=58) {
  if (!p) return `<div style="width:${w}px;height:${h}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`
  const portrait = (typeof p.portrait === 'string' && p.portrait.startsWith('http')) ? p.portrait : getPortrait(p)
  const logoUrl  = getClubLogo(p)
  const role     = p._line || p.job || 'MIL'
  const jobColor = JOB_COLORS[role] || '#555'
  const rarityBorder = { normal:'#aaa', pépite:'#D4A017', papyte:'#222', légende:'#7a28b8' }[p?.rarity] || '#aaa'
  const note = p.note !== undefined ? Number(p.note)||0 : (Number(getNoteForRole(p, role))||0) + (p.boost||0)
  const flag = countryFlag(p?.country_code)
  const nameH = Math.round(h*0.19), botH = Math.round(h*0.25), portH = h - Math.round(h*0.19) - Math.round(h*0.25)
  const op = p?.used ? 0.28 : 1
  return `<div style="width:${w}px;height:${h}px;border-radius:5px;border:2px solid ${rarityBorder};background:${jobColor};position:relative;overflow:hidden;flex-shrink:0;opacity:${op}">
    <div style="position:absolute;top:0;left:0;right:0;height:${nameH}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(w/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${w-4}px">${(p?.name||'').slice(0,9)}</span>
    </div>
    ${portrait && !p?.used ? `<img src="${portrait}" style="position:absolute;top:${nameH}px;left:0;width:${w}px;height:${portH}px;object-fit:cover;object-position:top center">` : ''}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${botH}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${flagImgUrl(p?.country_code) ? `<img src="${flagImgUrl(p.country_code)}" style="width:${botH+2}px;height:${botH-3}px;object-fit:cover;border-radius:1px">` : `<span style="font-size:${botH-4}px">${flag}</span>`}
      <span style="font-size:${botH-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${p?.used?'–':note}</span>
      ${logoUrl ? `<img src="${logoUrl}" style="width:${botH-4}px;height:${botH-4}px;object-fit:contain">` : (p?.clubName ? `<span style="font-size:${Math.max(4,botH-8)}px;font-weight:700;color:#333">${(p.clubName||'').slice(0,3).toUpperCase()}</span>` : '')}
    </div>
  </div>`
}

export function renderCardRow(players, accentColor, total) {
  if (!players?.length) return ''
  const shown = players.slice(0, 5)
  let html = '<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">'
  shown.forEach((p, i) => {
    html += renderMiniCardHTML(p, 40, 52)
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
  return `https://flagcdn.com/24x18/${code.slice(0,2).toLowerCase()}.png`
}

export function countryFlag(code) {
  if (!code || code.length < 2) return '🌍'
  try {
    const A = 0x1F1E6
    return String.fromCodePoint(A + code.charCodeAt(0) - 65) +
           String.fromCodePoint(A + code.charCodeAt(1) - 65)
  } catch { return '🌍' }
}

export function buildTeamSVG(team, formation, phase, selectedIds, W=310, H=310) {
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

  // 2. Cartes joueurs (style carte à la FUT)
  const CW = 48, CH = 64, NAMEH = 13, BOTHH = 16
  const rarityBorder = { normal:'#aaaaaa', pépite:'#D4A017', papyte:'#111111', légende:'#7a28b8' }

  for (const [pos, p] of Object.entries(slots)) {
    const c = px(pos)
    if (!c || !p) continue
    const role = pos.replace(/[0-9]/g,'')
    const bg   = JOB_COLORS[role] || '#555'

    const selectable = (phase==='attack' && ['MIL','ATT'].includes(role) && !p.used)
                    || (phase==='defense' && ['GK','DEF','MIL'].includes(role) && !p.used)
    const isSelected = selectedIds.includes(p.cardId)

    let note
    if      (phase==='attack')  note = role==='MIL'?Number(p.note_m)||0 : Number(p.note_a)||0
    else if (phase==='defense') note = role==='GK'?Number(p.note_g)||0 : role==='MIL'?Number(p.note_m)||0 : Number(p.note_d)||0
    else                        note = Number(role==='GK'?p.note_g:role==='DEF'?p.note_d:role==='MIL'?p.note_m:p.note_a)||0
    note = note + (p.boost||0)

    const rx0 = (c.x - CW/2).toFixed(1)
    const ry0 = (c.y - CH/2).toFixed(1)
    const cardOp  = p.used ? 0.25 : 1
    const rarity  = rarityBorder[p?.rarity] || rarityBorder.normal
    const bStroke = isSelected ? '#ff3030' : rarity
    const bWidth  = isSelected ? 3 : (p?.rarity==='légende'||p?.rarity==='pépite' ? 2.5 : 2)

    // Clip portrait à la zone centrale (sans nom ni bas)
    const portH = CH - NAMEH - BOTHH
    svg += `<defs><clipPath id="cp-${pos}"><rect x="${rx0}" y="${(c.y - CH/2 + NAMEH).toFixed(1)}" width="${CW}" height="${portH}"/></clipPath></defs>`

    // Fond
    svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${CH}" rx="5" fill="${bg}" opacity="${cardOp}"/>`

    // Portrait
    const portrait = getPortrait(p)
    if (portrait && !p.used) {
      svg += `<image href="${portrait}" x="${rx0}" y="${(c.y - CH/2 + NAMEH).toFixed(1)}" width="${CW}" height="${portH}" clip-path="url(#cp-${pos})" preserveAspectRatio="xMidYMin slice"/>`
    }

    // Barre nom (haut, fond blanc)
    svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${NAMEH}" rx="4" fill="rgba(255,255,255,0.92)"/>`
    svg += `<text x="${c.x.toFixed(1)}" y="${(c.y - CH/2 + 8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(p.name||'').slice(0,9)}</text>`

    // Bande bas (fond blanc)
    const by0 = (c.y + CH/2 - BOTHH).toFixed(1)
    svg += `<rect x="${rx0}" y="${by0}" width="${CW}" height="${BOTHH}" fill="rgba(255,255,255,0.92)"/>`

    if (p.used) {
      svg += `<text x="${c.x.toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`
    } else {
      // Drapeau pays (gauche)
      const flagU = flagImgUrl(p.country_code)
      if (flagU) svg += `<image href="${flagU}" x="${(c.x - 20).toFixed(1)}" y="${(c.y + CH/2 - BOTHH + 3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`
      else svg += `<text x="${(c.x - 13).toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${countryFlag(p.country_code)}</text>`
      // Note (centre)
      svg += `<text x="${c.x.toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${note}</text>`
      // Club (droite, 3 lettres)
      const logoUrl = getClubLogo(p)
      if (logoUrl) {
        svg += `<image href="${logoUrl}" x="${(c.x + CW/2 - 14).toFixed(1)}" y="${(c.y + CH/2 - BOTHH + 2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`
      } else if (p.clubName) {
        svg += `<text x="${(c.x + 14).toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(p.clubName||'').slice(0,3).toUpperCase()}</text>`
      }
      // Boost badge
      if (p.boost) {
        svg += `<rect x="${(c.x+CW/2-12).toFixed(1)}" y="${(c.y-CH/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`
        svg += `<text x="${(c.x+CW/2-5).toFixed(1)}" y="${(c.y-CH/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${p.boost}</text>`
      }
    }

    // Bordure rareté (+ surbrillance si sélectionné)
    svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${CH}" rx="5" fill="${isSelected?'rgba(255,255,255,0.12)':'none'}" stroke="${bStroke}" stroke-width="${bWidth}" opacity="${cardOp}"/>`

    // Zone cliquable (invisible)
    if (selectable) {
      svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${CH}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${isSelected?'selected':''}" data-card-id="${p.cardId}" data-role="${role}" style="cursor:pointer"/>`
    }
  }

  const PAD = 38  // marge pour cartes rectangulaires
  return `<svg viewBox="${-PAD} ${-PAD} ${W+PAD*2} ${H+PAD*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${svg}
  </svg>`
}

export function renderTeam(team, formation, phase, selectedIds, W=300, H=300) {
  return `<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${buildTeamSVG(team, formation, phase, selectedIds, W, H)}
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

  // Charger formation depuis decks table EN PRIORITÉ
  const [{ data: deckMeta }, { data: deckCards }] = await Promise.all([
    supabase.from('decks').select('formation,name').eq('id', deckId).single(),
    supabase.from('deck_cards')
      .select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`)
      .eq('deck_id', deckId).order('slot_order')
  ])

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
  const { data: allGCCards } = await supabase
    .from('cards')
    .select('id, gc_type, gc_definition_id')
    .eq('owner_id', state.profile.id)
    .eq('card_type', 'game_changer')

  const { data: gcDefs } = await supabase.from('gc_definitions').select('*').eq('is_active', true)

  const gcCardsEnriched = (allGCCards||[]).map(card => ({
    ...card,
    _gcDef: gcDefs?.find(d => d.name === card.gc_type || d.id === card.gc_definition_id) || null,
  }))

  onReady({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs: gcDefs || [] })
}
