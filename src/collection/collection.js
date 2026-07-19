import { supabase } from '../lib/supabase.js'
import { renderPlayerCard } from '../components/player-card.js'
import { GC_DEFS } from '../match/game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS } from '../match/formation-links.js'
import { EVOLUTIVE_RULES, currentSecondaryNote, getBaseMainNote } from '../match/evolutive-cards.js'

// ── Constantes ─────────────────────────────────────────────
const RAR_COLORS  = { normal:'#ccc', pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }
const JOB_COLORS  = { GK:'#111111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }
const JOB_ORDER   = ['GK','DEF','MIL','ATT']
const JOB_FILTERS = ['Tous','GK','DEF','MIL','ATT']

// Prix de vente directe
const DIRECT_SELL_PRICE = { normal:1000, pepite:5000, papyte:5000, legende:10000 }

// Note effective d'une carte : current_note pour pépite/papyte, sinon note du poste
function getCardNote(card) {
  const p = card.player
  if (!p) return null
  const rar = p.rarity
  if ((rar === 'pepite' || rar === 'papyte') && card.current_note != null) return card.current_note
  return Math.max(Number(p.note_g)||0, Number(p.note_d)||0, Number(p.note_m)||0, Number(p.note_a)||0)
}

// Carte avec la meilleure note parmi des copies du même joueur
function bestCard(cards) {
  if (!cards.length) return cards[0]
  return cards.reduce((best, c) => (getCardNote(c) > getCardNote(best) ? c : best), cards[0])
}

function job2NoteKey(job) {
  return job==='GK'?'note_g':job==='DEF'?'note_d':job==='MIL'?'note_m':'note_a'
}


// Noms pays
const COUNTRY_NAMES = {
  MA:'MAROC', FR:'FRANCE', AR:'ARGENTINE', PT:'PORTUGAL', BR:'BRESIL',
  ES:'ESPAGNE', DE:'ALLEMAGNE', GB:'ANGLETERRE', IT:'ITALIE',
  CM:'CAMEROUN', SN:'SENEGAL', NG:'NIGERIA', DK:'DANEMARK',
  NL:'PAYS-BAS', BE:'BELGIQUE', CI:"CÔTE D'IVOIRE",
  AL:'ALBANIE', HR:'CROATIE', RS:'SERBIE', TR:'TURQUIE',
}

function getPortrait(p) {
  const url = import.meta.env.VITE_SUPABASE_URL
  if (!url || !p?.skin || !p?.hair) return null
  const key = p.hair === 'chauve' ? `${p.skin}-chauve-rase` : `${p.skin}-${p.hair}-${p.hair_length}`
  return `${url}/storage/v1/object/public/assets/tetes/${key}.png`
}

function getNote(p, job) {
  if (!p) return 0
  return Number(job==='GK'?p.note_g : job==='DEF'?p.note_d : job==='MIL'?p.note_m : p.note_a) || 0
}

// ── Rendu d'une carte joueur ──────────────────────────────
function renderCard(card, countBadge = '') {
  const p = card.player
  if (!p) return ''
  const evo = card.evolution_bonus || 0
  const player = { ...p, _evolution_bonus: evo }
  const badge = countBadge ? `<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${countBadge}</div>` : ''
  return `<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${card.id}">
    ${badge}
    ${renderPlayerCard(player, { width: 140 })}
  </div>`
}
// ── Rendu d'une carte joueur MANQUANTE (grisée, non possédée) ──
function renderMissingCard(p) {
  return `<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${renderPlayerCard(p, { width: 140 })}
  </div>`
}
// ── Page principale ────────────────────────────────────────
export async function renderCollection(container, ctx) {
  const { state, navigate, toast, openModal, closeModal } = ctx
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: cards } = await supabase
    .from('cards')
    .select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`)
    .eq('owner_id', state.profile.id)

  // Tous les joueurs actifs (pour le mode "Voir tout")
  const { data: allPlayers } = await supabase
    .from('players')
    .select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`)
    .eq('is_active', true)

  const playerCards  = (cards||[]).filter(c => c.card_type === 'player' && c.player)
  const gcCards      = (cards||[]).filter(c => c.card_type === 'game_changer')
  const formCards    = (cards||[]).filter(c => c.card_type === 'formation')
  const stadiumCards = (cards||[]).filter(c => c.card_type === 'stadium')

  // Définitions GC depuis la DB (image, couleur, effet)
  const { data: gcDefinitions } = await supabase
    .from('gc_definitions').select('name,gc_type,color,effect,image_url')
  const gcDefMap = {}
  ;(gcDefinitions||[]).forEach(d => { gcDefMap[d.name] = d })

  const { data: stadiumDefs } = await supabase
    .from('stadium_definitions').select('id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)')
  const stadDefMap = {}
  ;(stadiumDefs||[]).forEach(d => { stadDefMap[d.id] = d })
  // Aussi enrichir depuis les cartes jointes directement
  stadiumCards.forEach(c => { if (c.stadium_def) stadDefMap[c.stadium_id] = c.stadium_def })

  const ALL_FORMATIONS = Object.keys(FORMATION_LINKS)
  const ALL_GC_TYPES   = Object.keys(GC_DEFS)

  // Compter les doublons par player_id
  const countByPlayer = {}
  playerCards.forEach(c => {
    const pid = c.player.id
    countByPlayer[pid] = (countByPlayer[pid] || 0) + 1
  })

  const ownedPlayerIds  = new Set(Object.keys(countByPlayer).map(id => String(id)))
  const ownedFormations = new Set(formCards.map(c => c.formation))
  const ownedGcTypes    = new Set(gcCards.map(c => c.gc_type))

  let activeTab    = 'player'   // 'player' | 'formation' | 'gc' | 'stadium'
  let activeFilter = 'Tous'
  let searchQ      = ''
  let showAll      = false

  // Trier les cartes joueurs : GK → DEF → MIL → ATT
  function sortedCards() {
    return [...playerCards].sort((a, b) => {
      const iA = JOB_ORDER.indexOf(a.player.job)
      const iB = JOB_ORDER.indexOf(b.player.job)
      if (iA !== iB) return iA - iB
      return (a.player.surname_real||'').localeCompare(b.player.surname_real||'')
    })
  }

  function sortedAllPlayers() {
    return [...(allPlayers||[])].sort((a, b) => {
      const iA = JOB_ORDER.indexOf(a.job)
      const iB = JOB_ORDER.indexOf(b.job)
      if (iA !== iB) return iA - iB
      return (a.surname_real||'').localeCompare(b.surname_real||'')
    })
  }

  function filteredCards() {
    return sortedCards().filter(c => {
      const p = c.player
      const matchJob    = activeFilter === 'Tous' || p.job === activeFilter
      const matchSearch = !searchQ || `${p.firstname} ${p.surname_real}`.toLowerCase().includes(searchQ)
      return matchJob && matchSearch
    })
  }

  function filteredAllPlayers() {
    return sortedAllPlayers().filter(p => {
      const matchJob    = activeFilter === 'Tous' || p.job === activeFilter
      const matchSearch = !searchQ || `${p.firstname} ${p.surname_real}`.toLowerCase().includes(searchQ)
      return matchJob && matchSearch
    })
  }

  container.innerHTML = `
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='player'?'var(--green)':'transparent'};
        color:${activeTab==='player'?'var(--green)':'var(--tile-fg-dim)'}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${playerCards.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='formation'?'var(--green)':'transparent'};
        color:${activeTab==='formation'?'var(--green)':'var(--tile-fg-dim)'}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${formCards.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='gc'?'var(--green)':'transparent'};
        color:${activeTab==='gc'?'var(--green)':'var(--tile-fg-dim)'}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${gcCards.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='stadium'?'#E87722':'transparent'};
        color:${activeTab==='stadium'?'#E87722':'var(--tile-fg-dim)'}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${stadiumCards.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`

  // ── Rendu de la barre de filtres (dépend de l'onglet) ───
  function renderFilters() {
    const bar = document.getElementById('col-filters')
    if (!bar) return

    if (activeTab === 'player') {
      bar.innerHTML = `
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${searchQ}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${JOB_FILTERS.map(f => `
            <button class="filter-btn" data-job="${f}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${f===activeFilter?'var(--green)':'var(--tile-border)'};
                background:${f===activeFilter?'var(--green)':'#fff'};
                color:${f===activeFilter?'#fff':'var(--tile-fg-dim)'}">
              ${f}
            </button>`).join('')}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${showAll?'var(--yellow)':'var(--tile-border)'};
              background:${showAll?'var(--yellow)':'#fff'};
              color:${showAll?'#111':'var(--tile-fg-dim)'}; font-size:18px; padding:5px 10px">
            ${showAll ? '👁️' : '🚫👁️'}
          </button>
        </div>`

      document.getElementById('col-search').addEventListener('input', e => {
        searchQ = e.target.value.toLowerCase()
        renderCards()
      })
      container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeFilter = btn.dataset.job
          renderFilters()
          renderCards()
        })
      })
      document.getElementById('show-all-btn').addEventListener('click', () => {
        showAll = !showAll
        renderFilters()
        renderCards()
      })
    } else {
      // Formations / Game Changer : juste le toggle "Voir tout"
      bar.innerHTML = `
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${showAll?'var(--yellow)':'var(--tile-border)'};
              background:${showAll?'var(--yellow)':'#fff'};
              color:${showAll?'#111':'var(--tile-fg-dim)'}; font-size:18px; padding:5px 10px">
            ${showAll ? '👁️' : '🚫👁️'}
          </button>
        </div>`
      document.getElementById('show-all-btn').addEventListener('click', () => {
        showAll = !showAll
        renderFilters()
        renderCards()
      })
    }
  }

  // ── Rendu des cartes selon l'onglet actif ───────────────
  function renderCards() {
    const grid = document.getElementById('col-grid')
    if (!grid) return

    if (activeTab === 'player') {
      renderPlayerGrid(grid)
    } else if (activeTab === 'formation') {
      renderFormationGrid(grid)
    } else if (activeTab === 'stadium') {
      renderStadiumGrid(grid)
    } else {
      renderGCGrid(grid)
    }
  }

  // ── Affichage big card + strip mini ─────────────────────
  function renderBigAndStrip(items, renderBigFn, renderMiniFn, onBigClick, borderColor) {
    borderColor = borderColor || '#7a28b8'
    const grid    = document.getElementById('col-grid')
    const bigZone = document.getElementById('col-big')
    if (!grid || !bigZone) return
    var sel = 0

    function repaint() {
      // Patch desktop : agrandir la zone carte + fixer la hauteur de la strip
      const isDesktop = window.innerWidth >= 768
      const bigZoneEl = document.getElementById('col-big')
      const gridEl    = document.getElementById('col-grid')
      if (isDesktop && bigZoneEl) {
        bigZoneEl.style.minHeight = '420px'
        bigZoneEl.style.flex     = '1 1 auto'
      }
      if (isDesktop && gridEl) {
        // 310 × 0.76 + padding = environ 252px
        gridEl.style.height     = Math.round(310 * 0.76 + 16) + 'px'
        gridEl.style.flexShrink = '0'
        gridEl.style.overflowX  = 'auto'
        gridEl.style.overflowY  = 'hidden'
        gridEl.style.alignItems = 'center'
        gridEl.style.padding    = '8px 16px'
      }
      bigZone.innerHTML = '<div id="big-card-inner" style="display:inline-block;transform-origin:top center">' + renderBigFn(items[sel]) + '</div>'
      var bigEl = bigZone.querySelector('[data-card-id],[data-form-id],[data-gc-id]')
      if (bigEl) bigEl.addEventListener('click', function() { onBigClick(items[sel]) })
      // Auto-scale pour que la carte rentre dans la zone disponible
      requestAnimationFrame(function() {
        var inner = document.getElementById('big-card-inner')
        var strip = document.getElementById('col-grid')
        if (!inner || !bigZone) return
        var availH = bigZone.clientHeight - 8
        var availW   = bigZone.clientWidth - 24
        var cardH    = inner.offsetHeight
        var cardW    = inner.offsetWidth
        if (cardH > 0 && cardW > 0 && availH > 40) {
          var maxScale = isDesktop ? 2.2 : 1.6   // mobile : agrandir la carte centrale
          var scale = Math.min(availH / cardH, availW / cardW, maxScale)
          inner.style.transform = 'scale(' + scale.toFixed(3) + ')'
          inner.style.transformOrigin = 'top center'
        }
      })

      var isDesktopGrid = window.innerWidth >= 768

      grid.innerHTML = items.map(function(item, i) {
        var isSel = i === sel
        // Wrapper sans dimensions fixes — la taille est définie par le contenu (zoom)
        var wrapStyle = 'flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;'
          + (isSel ? 'outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);' : '')
        return '<div class="col-mini-item" data-idx="' + i + '" style="' + wrapStyle + '">'
          + renderMiniFn(item, isSel)
          + '</div>'
      }).join('')

      grid.querySelectorAll('.col-mini-item').forEach(function(el) {
        el.addEventListener('click', function() {
          sel = Number(el.dataset.idx)
          repaint()
          el.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' })
        })
      })
    }
    repaint()
  }

  function miniPlayerCard(card) {
    var SCALE = window.innerWidth >= 768 ? 0.76 : 0.54
    var inner
    if (!card || card._fake) {
      var p = card ? card.player : null
      if (!p) return ''
      inner = renderMissingCard(p)
    } else {
      inner = renderCard(card, '')
    }
    // zoom affecte le layout → wrapper s'adapte automatiquement à la vraie taille de la carte
    return '<div style="display:inline-block;zoom:' + SCALE + ';pointer-events:none;line-height:0">' + inner + '</div>'
  }

  // ── SVG terrain formation ────────────────────────────────
  function formFieldSVG(formation, w, h) {
    w = w || 100; h = h || 140
    // FORMATION_POSITIONS: { ATT1:{x:0-1, y:0-1}, DEF2:{x,y}, GK1:{x,y}, ... }
    var pos = FORMATION_POSITIONS[formation] || {}
    var colors = { GK:'#111111', DEF:'#cc2222', MIL:'#D4A017', ATT:'#22aa55' }
    var r = Math.max(3, Math.round(w * 0.06))
    var dots = Object.entries(pos).map(function(entry) {
      var key = entry[0], p = entry[1]
      // Extraire le rôle depuis la clé (ATT1→ATT, DEF3→DEF, GK1→GK, MIL2→MIL)
      var role = key.replace(/\d+$/, '')
      var color = colors[role] || '#888'
      var cx = Math.round(p.x * w)
      var cy = Math.round(p.y * h)
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'
    }).join('')
    var lw = Math.max(1, Math.round(w/50))
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%">'
      + '<rect width="' + w + '" height="' + h + '" fill="#1A6B3C"/>'
      + '<rect x="' + Math.round(w*.2) + '" y="' + Math.round(h*.02) + '" width="' + Math.round(w*.6) + '" height="' + Math.round(h*.16) + '" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="' + lw + '"/>'
      + '<line x1="0" y1="' + Math.round(h*.5) + '" x2="' + w + '" y2="' + Math.round(h*.5) + '" stroke="rgba(255,255,255,0.3)" stroke-width="' + lw + '"/>'
      + '<ellipse cx="' + Math.round(w*.5) + '" cy="' + Math.round(h*.5) + '" rx="' + Math.round(w*.18) + '" ry="' + Math.round(h*.11) + '" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="' + lw + '"/>'
      + '<rect x="' + Math.round(w*.2) + '" y="' + Math.round(h*.82) + '" width="' + Math.round(w*.6) + '" height="' + Math.round(h*.16) + '" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="' + lw + '"/>'
      + dots + '</svg>'
  }

  function renderFormationCard(formation, card, count) {
    var badge = count>1 ? '<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×' + count + '</div>' : ''
    var id = card ? 'data-form-id="' + card.id + '"' : ''
    var fs = formation.length > 7 ? 14 : formation.length > 5 ? 16 : 19
    var owned = !!card
    return '<div ' + id + ' style="position:relative;width:140px;border-radius:12px;border:3px solid ' + (owned?'#2a7a40':'#bbb') + ';background:var(--tile-bg);display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);' + (!owned?'filter:grayscale(1);opacity:0.5':'') + '">'
      + badge
      + '<div style="padding:8px 6px 6px;background:var(--tile-bg);text-align:center;border-bottom:3px solid ' + (owned?'#1A6B3C':'#aaa') + ';flex-shrink:0">'
      + '<div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div>'
      + '<div style="font-size:' + fs + 'px;font-weight:900;color:' + (owned?'#1A6B3C':'#aaa') + ';line-height:1">' + formation + '</div>'
      + '</div>'
      + '<div style="flex:1;overflow:hidden;background:' + (owned?'#1A6B3C':'#ccc') + '">' + formFieldSVG(formation, 140, 220) + '</div>'
      + '</div>'
  }

  function miniFormationCard(formation, owned) {
    var SCALE = window.innerWidth >= 768 ? 0.76 : 0.54
    var W = 140, H = 305
    var nameH = Math.round(H*0.22), fieldH = H - nameH
    var fs = formation.length > 7 ? 10 : 13
    var svg = formFieldSVG(formation, W, fieldH)
    var border = owned ? '1.5px solid #2a7a40' : '1px solid #ddd'
    var filter = owned ? '' : 'filter:grayscale(1);opacity:0.45;'
    var nameBg = owned ? '#1A6B3C' : '#bbb'
    var nameColor = '#fff'
    return '<div style="display:inline-block;zoom:' + SCALE + ';line-height:0;pointer-events:none"><div style="width:' + W + 'px;height:' + H + 'px;border-radius:6px;border:' + border + ';background:var(--tile-bg);display:flex;flex-direction:column;overflow:hidden;' + filter + '">'
      + '<div style="height:' + nameH + 'px;background:' + nameBg + ';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0">'
      + '<span style="font-size:' + fs + 'px;font-weight:900;color:' + nameColor + ';text-align:center;overflow:hidden;white-space:nowrap;max-width:' + (W-4) + 'px">' + formation + '</span>'
      + '</div>'
      + '<div style="height:' + fieldH + 'px;overflow:hidden;flex-shrink:0">' + svg + '</div>'
      + '</div></div>'
  }

  function renderPlayerGrid(grid) {
    if (showAll) {
      const list = filteredAllPlayers()
      if (!list.length) {
        grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>'
        return
      }
      // showAll : même pattern big+strip mais items = players (avec carte ou grisée)
      const cards2 = list.map(p => playerCards.find(c => c.player.id === p.id) || { _fake:true, player:p, id:'fake-'+p.id })
      renderBigAndStrip(
        cards2,
        (card) => card._fake ? renderMissingCard(card.player) : renderCard(card, ''),
        (card) => card._fake ? miniPlayerCard({player:card.player, id:'x', _fake:true}) : miniPlayerCard(card),
        (card) => { if (!card._fake) openCardDetail(card, playerCards, countByPlayer, ctx) },
        '#1A6B3C'
      )
    } else {
      const list = filteredCards()
      if (!list.length) {
        grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>'
        return
      }

      // Dédupliquer — garder la carte avec la meilleure note pour l'affichage
      const byPlayer = {}
      list.forEach(card => {
        const pid = card.player.id
        if (!byPlayer[pid]) { byPlayer[pid] = [] }
        byPlayer[pid].push(card)
      })
      const deduped = Object.values(byPlayer).map(cards => bestCard(cards))

      renderBigAndStrip(
        deduped,
        (card) => {
          const count = countByPlayer[card.player.id] || 1
          const badge = count > 1 ? `<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${count}</div>` : ''
          const forSale = playerCards.filter(c => c.player.id === card.player.id && c.is_for_sale).length
          const saleBadge = forSale > 0 ? `<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>` : ''
          return renderCard(card, badge + saleBadge)
        },
        (card) => miniPlayerCard(card),
        (card) => openCardDetail(card, playerCards, countByPlayer, ctx),
        '#1A6B3C'
      )
    }
  }

  function renderFormationGrid(grid) {
    const formationsToShow = showAll ? ALL_FORMATIONS : [...ownedFormations]

    if (!formationsToShow.length) {
      grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>'
      return
    }

    const formItems = formationsToShow.map(f => ({ formation:f, card: formCards.find(c=>c.formation===f)||null, owned: ownedFormations.has(f) }))
    renderBigAndStrip(
      formItems,
      ({formation, card, owned}) => renderFormationCard(formation, owned ? card : null, owned ? formCards.filter(c=>c.formation===formation).length : 0),
      ({formation, owned}) => miniFormationCard(formation, owned),
      ({card, owned}) => { if (owned && card) openFormationModal(card, formCards, ctx, openModal) },
      '#1A6B3C'
    )
  }

  function renderGCGrid(grid) {
    const allFromDB = Object.keys(gcDefMap)
    const typesToShow = showAll ? (allFromDB.length ? allFromDB : ALL_GC_TYPES) : [...ownedGcTypes]

    if (!typesToShow.length) {
      grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>'
      return
    }

    const gcItems = typesToShow.map(type => ({ type, gc: GC_DEFS[type]||{icon:'⚡',desc:''}, def: gcDefMap[type]||null, owned: ownedGcTypes.has(type), card: gcCards.find(c=>c.gc_type===type)||null }))
    renderBigAndStrip(
      gcItems,
      ({type, gc, def, owned, card}) => {
        const count  = owned ? gcCards.filter(c=>c.gc_type===type).length : 0
        const badge  = count>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${count}</div>`:''
        const isUltra= def?.gc_type==='ultra_game_changer'
        const BG  = {purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'}
        const BORD= {purple:'#b06ce0',light_blue:'#00d4ef'}
        const bg   = BG[def?.color]  ||BG.purple
        const bord = BORD[def?.color]||BORD.purple
        const effect = def?.effect||gc.desc||''
        const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : (def?.club?.logo_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null))
        if (owned && card) return `<div data-gc-id="${card.id}" data-gc-type="${type}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${bord}66;cursor:pointer">
          ${badge}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${type.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${type}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${isUltra?'💎 ULTRA GC':'⚡ GAME CHANGER'}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${imgUrl?`<img src="${imgUrl}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${gc.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${effect.slice(0,60)}</div>
          </div>
        </div>`
        return `<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${type}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${gc.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`
      },
      ({type, gc, def, owned}) => { const _s=window.innerWidth>=768?0.76:0.54; const BG2={purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'},bo2={purple:'#9b59b6',light_blue:'#00bcd4'}; const bg2=BG2[def?.color]||BG2.purple,bor2=bo2[def?.color]||bo2.purple,imgU=def?.image_url?`${import.meta.env.BASE_URL}icons/${def.image_url}`:null; if(owned){ return `<div style="display:inline-block;zoom:${_s};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${bg2};border:1px solid ${bor2};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${type}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${imgU?`<img src="${imgU}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${gc.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${(def?.effect||gc.desc||'').slice(0,30)}</span></div></div></div>` } return `<div style="display:inline-block;zoom:${_s};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${gc.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${type}</span></div></div>` },
      ({type, owned, def}) => { if (owned) openGCModal(type, def, openModal) },
      '#7a28b8'
    )
  }

  function renderStadiumGrid(grid) {
    const ORANGE = '#E87722'
    const BASE2 = import.meta.env.BASE_URL
    if (!stadiumCards.length) {
      grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>'
      return
    }
    // Grouper par stadium_id
    const grouped = {}
    stadiumCards.forEach(c => { const sid=c.stadium_id||'?'; (grouped[sid]=grouped[sid]||[]).push(c) })

    const items = Object.entries(grouped).map(([sid, cards]) => ({
      sid, def: stadDefMap[sid]||null, count: cards.length, card: cards[0]
    }))

    renderBigAndStrip(
      items,
      ({ def, count }) => {
        const name  = def?.name || '?'
        const label = def?.club?.encoded_name || def?.country_code || '—'
        const imgUrl = def?.image_url
        ? `${BASE2}icons/${def.image_url}`
        : (def?.club?.logo_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null))
        const imgHTML = imgUrl
          ? `<img src="${imgUrl}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`
          : `<div style="font-size:56px">🏟️</div>`
        const badge = count>1 ? `<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${count}</div>` : ''
        return `<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ORANGE},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ORANGE}66">
          ${badge}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${name}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${imgHTML}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${label}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`
      },
      ({ def, count }) => {
        const _s = window.innerWidth>=768 ? 0.76 : 0.54
        const name  = def?.name || '?'
        const label = def?.club?.encoded_name || def?.country_code || '—'
        const imgUrl = def?.image_url
        ? `${BASE2}icons/${def.image_url}`
        : (def?.club?.logo_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null))
        const imgHTML = imgUrl
          ? `<img src="${imgUrl}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`
          : '<span style="font-size:32px">🏟️</span>'
        return `<div style="display:inline-block;zoom:${_s};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${ORANGE},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${name}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${imgHTML}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${label}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`
      },
      null,
      ORANGE
    )
  }

  // ── Onglets ──────────────────────────────────────────────
  container.querySelectorAll('.col-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab
      activeFilter = 'Tous'
      searchQ = ''
      showAll = false
      container.querySelectorAll('.col-tab-btn').forEach(b => {
        const a = b.dataset.tab === activeTab
        b.style.borderBottomColor = a ? 'var(--green)' : 'transparent'
        b.style.color = a ? 'var(--green)' : 'var(--tile-fg-dim)'
      })
      renderFilters()
      renderCards()
    })
  })

  renderFilters()
  renderCards()

  // Flèches scroll

}

// ── Modal Game Changer ────────────────────────────────────
function openGCModal(gcType, def, openModal) {
  const fallback = GC_DEFS[gcType] || { icon:'⚡', desc:'Effet spécial.' }
  const isUltra = def?.gc_type === 'ultra_game_changer'
  const BG   = { purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)', light_blue:'linear-gradient(160deg,#006080,#00bcd4)' }
  const BORD = { purple:'#b06ce0', light_blue:'#00d4ef' }
  const bg   = BG[def?.color]   || BG.purple
  const bord = BORD[def?.color] || BORD.purple
  const name   = def?.name   || gcType
  const effect = def?.effect || fallback.desc
  const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null

  openModal('Game Changer',
    `<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${bg};border-radius:16px;border:2px solid ${bord};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${isUltra?'💎 ULTRA GC':'⚡ GAME CHANGER'}</div>
          <div style="font-size:20px;font-weight:900">${name}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${imgUrl ? `<img src="${imgUrl}" style="max-width:150px;max-height:150px;object-fit:contain">` : `<span style="font-size:64px">${fallback.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${effect}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,
    `<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`
  )
}

// ── Modal Formation avec schéma visuel des liens ──────────
const FORMATION_DIRECT_SELL_PRICE = 1000

function openFormationModal(card, allFormationCards, ctx, openModal) {
  const { state, toast, closeModal, navigate, refreshProfile } = ctx
  const formation = card.formation
  const JC = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

  function renderGrid() {
    const FPOS   = FORMATION_POSITIONS[formation] || {}
    const FLINKS = FORMATION_LINKS[formation]     || []

    const W = 290, H = 360
    const R = 20 // rayon cercle joueur

    function px(pos) {
      const p = FPOS[pos]
      if (!p) return null
      return { x: p.x * W, y: p.y * H }
    }

    let svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`

    // ── Liens (schema neutre, sans joueurs assignes) ──
    for (const [posA, posB] of FLINKS) {
      const a = px(posA), b = px(posB)
      if (!a || !b) continue
      svg += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`
    }

    // ── Postes ──
    for (const pos of Object.keys(FPOS)) {
      const c = px(pos)
      if (!c) continue
      const role  = pos.replace(/\d+/, '')
      const color = JC[role] || '#555'
      svg += `<circle cx="${c.x}" cy="${c.y}" r="${R}" fill="${color}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`
      svg += `<text x="${c.x}" y="${c.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${role}</text>`
    }

    svg += '</svg>'
    return svg
  }

  // Cartes de cette même formation (pour vente directe / compteur)
  const sameFormationCards = allFormationCards.filter(c => c.formation === formation)
  const count = sameFormationCards.length
  const canMarket = !card.is_for_sale

  openModal(`Formation ${formation}`,
    `<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${renderGrid()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+5</b> à l'action (<b>+10</b> si les deux correspondent).
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${canMarket ? `
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${FORMATION_DIRECT_SELL_PRICE}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>` : ''}
    ${card.is_for_sale ? `
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(card.sale_price||0).toLocaleString('fr')} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>` : ''}`,
    `<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`
  )

  // Vente directe
  document.getElementById('direct-sell-form-btn')?.addEventListener('click', async () => {
    if (!confirm(`Vendre 1 carte Formation ${formation} pour ${FORMATION_DIRECT_SELL_PRICE.toLocaleString('fr')} crédits ? Cette action est irréversible.`)) return

    const cardToSell = sameFormationCards.find(c => !c.is_for_sale) || sameFormationCards[0]
    if (!cardToSell) { toast('Aucune carte à vendre', 'error'); return }

    await supabase.from('market_listings').delete().eq('card_id', cardToSell.id)
    await supabase.from('transfer_history').delete().eq('card_id', cardToSell.id)
    const { error } = await supabase.from('cards').delete().eq('id', cardToSell.id)
    if (error) { toast(error.message, 'error'); return }

    await supabase.from('users')
      .update({ credits: (state.profile.credits||0) + FORMATION_DIRECT_SELL_PRICE })
      .eq('id', state.profile.id)

    await refreshProfile()
    toast(`+${FORMATION_DIRECT_SELL_PRICE.toLocaleString('fr')} crédits ! Carte vendue.`, 'success')
    closeModal()
    navigate('collection')
  })

  // Marché
  document.getElementById('market-sell-form-btn')?.addEventListener('click', async () => {
    const price = parseInt(document.getElementById('sell-price-form').value)
    if (!price || price < 1) { toast('Prix invalide', 'error'); return }

    await supabase.from('cards').update({ is_for_sale: true, sale_price: price }).eq('id', card.id)
    await supabase.from('market_listings').insert({ seller_id: state.profile.id, card_id: card.id, price })

    toast('Carte mise en vente sur le marché !', 'success')
    closeModal()
    navigate('collection')
  })

  // Retirer du marché
  document.getElementById('cancel-sell-form-btn')?.addEventListener('click', async () => {
    await supabase.from('cards').update({ is_for_sale: false, sale_price: null }).eq('id', card.id)
    await supabase.from('market_listings').update({ status:'cancelled' }).eq('card_id', card.id).eq('status','active')
    toast('Annonce retirée', 'success')
    closeModal()
    navigate('collection')
  })
}

// ── Détail carte joueur + vente directe ───────────────────
async function openCardDetail(card, allPlayerCards, countByPlayer, ctx) {
  const { state, toast, openModal, closeModal, navigate, refreshProfile } = ctx
  const p = card.player

  // Toutes les cartes de ce joueur (pour vente directe)
  const samePlayerCards = allPlayerCards.filter(c => c.player.id === p.id)
  const count           = samePlayerCards.length

  // Prix de vente directe depuis sell_price_configs (note = max des notes du joueur)
  const evoCard = card.evolution_bonus || 0
  const playerMaxNote = Math.max(
    (Number(p.note_g)||0) + (p.job==='GK'||p.job2==='GK'?evoCard:0),
    (Number(p.note_d)||0) + (p.job==='DEF'||p.job2==='DEF'?evoCard:0),
    (Number(p.note_m)||0) + (p.job==='MIL'||p.job2==='MIL'?evoCard:0),
    (Number(p.note_a)||0) + (p.job==='ATT'||p.job2==='ATT'?evoCard:0)
  )
  const rarity = p.rarity || 'normal'
  const { data: priceConfigs } = await supabase
    .from('sell_price_configs').select('*')
    .eq('rarity', rarity)
    .lte('note_min', playerMaxNote)
    .gte('note_max', playerMaxNote)
    .order('note_min', { ascending: false }) // règle la plus précise en premier
    .limit(1)
  const directPrice = priceConfigs?.[0]?.price ?? DIRECT_SELL_PRICE[rarity] ?? 1000

  // Règles revente marché : Légende non vendable
  const canMarket = p.rarity !== 'legende'

  const portrait = getPortrait(p)
  const note1    = ((p.rarity==='pepite'||p.rarity==='papyte') && card.current_note != null ? card.current_note : getNote(p, p.job)) + evoCard
  const isEvol   = p.rarity==='pepite'||p.rarity==='papyte'
  const note2    = p.job2 ? ((isEvol ? currentSecondaryNote(card, job2NoteKey(p.job2)) : getNote(p, p.job2)) + (getNote(p,p.job2)>0?evoCard:0)) : null
  const jobColor  = JOB_COLORS[p.job] || '#1A6B3C'
  const job2Color = p.job2 ? JOB_COLORS[p.job2] : null
  const rarColor  = RAR_COLORS[p.rarity] || '#ccc'
  const country   = COUNTRY_NAMES[p.country_code] || p.country_code || ''

  // Notes avec bonus d'évolution
  const evo = card.evolution_bonus || 0
  const mainNoteBase = note1
  const mainNoteEvo  = mainNoteBase + evo
  const job2NoteBase = note2 || 0
  const job2NoteEvo  = job2NoteBase > 0 ? job2NoteBase + evo : 0

  // Historique des transferts PAR CARTE (chaque carte est unique).
  // On récupère l'historique de chacune des cartes possédées de ce joueur.
  const myCardIds = samePlayerCards.map(c => c.id)
  let transfersByCard = {}
  if (myCardIds.length) {
    const { data: allTransfers } = await supabase
      .from('transfer_history')
      .select('card_id, club_name, manager_name, source, price, transferred_at')
      .in('card_id', myCardIds)
      .order('transferred_at', { ascending: true })
    ;(allTransfers || []).forEach(t => {
      if (!transfersByCard[t.card_id]) transfersByCard[t.card_id] = []
      transfersByCard[t.card_id].push(t)
    })
  }

  const lineHTML = (t) => {
    const date = t.transferred_at ? new Date(t.transferred_at).toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric' }) : ''
    const price = t.source === 'booster' ? 'Booster' : (t.price ? t.price.toLocaleString('fr') : '—')
    return `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.club_name}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">(${t.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${t.source==='booster'?'var(--tile-fg-dim)':'var(--yellow)'}">${price}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">${date}</div>
      </div>
    </div>`
  }

  // Un bloc par carte possédée avec checkbox de sélection
  const clubsHTML = myCardIds.length ? `
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${count>1?`(${count})`:''}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${samePlayerCards.map((c, i) => {
          const hist = transfersByCard[c.id] || []
          const isForSale = c.is_for_sale
          const lastClub = hist.length ? hist[hist.length-1] : null
          const isEvol = p.rarity === 'pepite' || p.rarity === 'papyte'
          const noteLabel = isEvol && c.current_note != null ? ` (☆${c.current_note})` : ''
          return `
            <div data-card-id="${c.id}" data-card-idx="${i}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${isForSale?'opacity:0.6':''}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${c.id}" ${isForSale?'disabled':''} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${i+1}${noteLabel}${isForSale?' 🏷️ En vente':''}</div>
                  ${lastClub?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${lastClub.club_name} · ${lastClub.source==='booster'?'Booster':(lastClub.price?lastClub.price.toLocaleString('fr')+' cr.':'—')}
                  </div>`:''}
                </div>
                <button class="expl-hist-toggle" data-idx="${i}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${hist.length ? `${hist.length} club${hist.length>1?'s':''}` : ''} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${i}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${hist.map(lineHTML).join('')}
              </div>
            </div>`
        }).join('')}
      </div>

      <!-- Panneau d'action (visible quand au moins 1 sélectionné) -->
      <div id="sell-action-panel" style="display:none;margin-top:12px;background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px">
        <div style="font-size:13px;font-weight:900;color:#1A6B3C;margin-bottom:10px">
          <span id="sell-selected-count">0</span> exemplaire(s) sélectionné(s)
        </div>

        <!-- Évolution du joueur -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;background:#f0fdf4;border-radius:10px;padding:10px 14px">
          <div>
            <div style="font-size:12px;font-weight:700;color:#1A6B3C">Évolution</div>
            <div style="font-size:11px;color:#555;margin-top:2px">
              ${(card.evolution_bonus||0) > 0
                ? `+${card.evolution_bonus} appliqué${(card.evolution_bonus)>1?'s':''} · Note : ${mainNoteEvo}${p.job2&&job2NoteBase>0?` / ${job2NoteEvo}`:''}`
                : `Note actuelle : ${mainNoteEvo}${p.job2&&job2NoteBase>0?` / ${job2NoteEvo}`:''}` }
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${count <= 1 ? '#ccc' : '#1A6B3C'};border-color:${count <= 1 ? '#ccc' : '#1A6B3C'};padding:8px 16px;font-weight:900;cursor:${count <= 1 ? 'not-allowed' : 'pointer'}"
            ${count <= 1 ? 'disabled title="Un seul exemplaire — impossible de fusionner"' : ''}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${canMarket ? `
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${p.sell_price||5000}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>` : ''}
      </div>
    </div>` : ''

  openModal(`${p.firstname} ${p.surname_real}`,
    `<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${renderPlayerCard({ ...p, _evolution_bonus: evoCard }, { width: 160 })}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${rarColor}">${p.rarity.toUpperCase()}</div>
          ${(p.rarity==='pepite'||p.rarity==='papyte') ? `
          <div style="margin-top:6px;background:${rarColor}18;border-left:3px solid ${rarColor};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${rarColor};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${p.rarity==='pepite'
                ? `✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>`
                : `✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>`}
              <br>Note actuelle : <b>${card.current_note ?? (p.rarity==='pepite'?p.note_min:p.note_max) ?? '—'}</b>
              &nbsp;·&nbsp; Min : <b>${p.note_min ?? '—'}</b>
              &nbsp;·&nbsp; Max : <b>${p.note_max ?? '—'}</b>
            </div>
          </div>` : ''}
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${p.job}${p.job2?' / '+p.job2:''}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[['GK',p.note_g],['DEF',p.note_d],['MIL',p.note_m],['ATT',p.note_a]].map(([j,n]) => {
              const col = JOB_COLORS[j]
              const textCol = j === 'GK' ? '#fff' : col
              const isJobNote = j === p.job || j === p.job2
              const val = (Number(n)||0) + (isJobNote && evo > 0 ? evo : 0)
              return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${col};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${textCol};font-family:Arial Black,Arial;line-height:1">${val}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${textCol}">${j}</span>
              </div>`
            }).join('')}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${count}</div>
        </div>
      </div>
    </div>
    ${clubsHTML}
`,
    `<button class="btn btn-ghost" id="close-detail">Fermer</button>`
  )

  // Fermer
  document.getElementById('close-detail')?.addEventListener('click', closeModal)

  // ── Logique de sélection des exemplaires ──────────────────────────────────
  let selectedCardIds = new Set()

  const updatePanel = () => {
    const n = selectedCardIds.size
    const panel = document.getElementById('sell-action-panel')
    if (!panel) return
    panel.style.display = n > 0 ? 'block' : 'none'
    document.getElementById('sell-selected-count').textContent = n
    // Mettre à jour le texte du bouton Évoluer avec le nombre de cartes
    const evolveBtn = document.getElementById('evolve-btn')
    if (evolveBtn) evolveBtn.textContent = `⬆️ Évoluer ${n > 1 ? '(+'+n+')' : ''}`
  }

  // Checkboxes
  document.querySelectorAll('.expl-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = cb.dataset.id
      if (cb.checked) selectedCardIds.add(id)
      else selectedCardIds.delete(id)
      // Mettre en surbrillance la row
      const row = cb.closest('.exemplaire-row')
      if (row) row.style.borderColor = cb.checked ? '#1A6B3C' : '#eee'
      updatePanel()
    })
  })

  // Clic sur la row entière → toggle checkbox
  document.querySelectorAll('.exemplaire-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('button') || e.target.tagName === 'INPUT') return
      const cb = row.querySelector('.expl-check')
      if (cb && !cb.disabled) { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change')) }
    })
  })

  // Toggle historique
  document.querySelectorAll('.expl-hist-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const hist = document.querySelector(`.expl-hist[data-hist="${btn.dataset.idx}"]`)
      if (hist) hist.style.display = hist.style.display === 'none' ? 'flex' : 'none'
    })
  })

  // ── Vente directe (les cartes sélectionnées) ────────────────────────────
  document.getElementById('evolve-btn')?.addEventListener('click', async () => {
    if (count <= 1) return  // bouton grisé, double protection

    const ids = [...selectedCardIds]
    if (!ids.length) return

    // Bloquer si l'exemplaire principal (card.id = Exemplaire 1) est sélectionné
    if (selectedCardIds.has(card.id)) {
      const ov = document.createElement('div')
      ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px'
      ov.innerHTML = `
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`
      document.body.appendChild(ov)
      ov.querySelector('#err-close').addEventListener('click', () => ov.remove())
      ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
      return
    }
    const idsToDelete = ids.filter(id => id !== card.id)
    const bonusPerCopy = p.rarity === 'legende' ? 2 : 1  // légende +2, autres +1
    const bonusGained = (idsToDelete.length || 1) * bonusPerCopy

    if (!idsToDelete.length && ids.length === 1 && ids[0] === card.id) {
      // Cas : seul exemplaire sélectionné = la carte principale → +1 sans suppression
    } else if (!idsToDelete.length) {
      toast('Sélectionne des copies à sacrifier', 'warning'); return
    }

    // Popup de confirmation de sacrifice
    const confirmed = await new Promise(resolve => {
      const ov = document.createElement('div')
      ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px'
      ov.innerHTML = `
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${p.firstname} ${p.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${idsToDelete.length}</strong> copie${idsToDelete.length>1?'s':''} sacrifiée${idsToDelete.length>1?'s':''}<br>
            📈 Note : <strong>${note1+(card.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${note1+(card.evolution_bonus||0)+idsToDelete.length*bonusPerCopy}</strong>
            ${note2&&note2>0 ? `<br>📈 Note 2 : <strong>${note2+(card.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${note2+(card.evolution_bonus||0)+idsToDelete.length*bonusPerCopy}</strong>` : ''}
            ${p.rarity==='legende'?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${bonusPerCopy} par copie sacrifiée</span>`:''}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`
      document.body.appendChild(ov)
      ov.querySelector('#sac-cancel').addEventListener('click', () => { ov.remove(); resolve(false) })
      ov.querySelector('#sac-ok').addEventListener('click', () => { ov.remove(); resolve(true) })
      ov.addEventListener('click', e => { if (e.target === ov) { ov.remove(); resolve(false) } })
    })
    if (!confirmed) return

    // 1. Supprimer toutes les dépendances FK des copies sacrifiées
    if (idsToDelete.length) {
      // Nettoyer dans l'ordre : market_listings → deck_cards → transfer_history → cards
      await supabase.from('market_listings').delete().in('card_id', idsToDelete)
      await supabase.from('deck_cards').delete().in('card_id', idsToDelete)
      await supabase.from('transfer_history').delete().in('card_id', idsToDelete)
      // Aussi retirer le stadium_card_id si un deck pointe sur une carte sacrifiée
      await supabase.from('decks').update({ stadium_card_id: null }).in('stadium_card_id', idsToDelete)
      const { error: delErr } = await supabase.from('cards').delete().in('id', idsToDelete)
      if (delErr) { toast('Erreur suppression : ' + delErr.message, 'error'); return }
    }

    // 2. Ajouter le bonus à la carte principale
    const newEvo = (card.evolution_bonus || 0) + idsToDelete.length * bonusPerCopy
    const { error: evoErr } = await supabase.from('cards')
      .update({ evolution_bonus: newEvo })
      .eq('id', card.id)
    if (evoErr) { toast('Erreur évolution : ' + evoErr.message, 'error'); return }

    const mainNoteAfter = note1 + newEvo
    toast(`⬆️ ${p.firstname} ${p.surname_real} : note ${note1+card.evolution_bonus||note1} → ${mainNoteAfter}${idsToDelete.length?` · ${idsToDelete.length} copie${idsToDelete.length>1?'s':''} sacrifiée${idsToDelete.length>1?'s':''}`:''} !`, 'success', 4000)
    closeModal()
    navigate('collection')
  })

  // ── Marché (les cartes sélectionnées, même prix pour toutes) ────────────
  document.getElementById('market-sell-btn')?.addEventListener('click', async () => {
    const ids = [...selectedCardIds]
    if (!ids.length) { toast('Sélectionne au moins un exemplaire', 'warning'); return }
    const price = parseInt(document.getElementById('sell-market-price')?.value)
    if (!price || price < 1) { toast('Prix invalide', 'error'); return }

    // Marquer les cartes en vente
    const { error } = await supabase.from('cards').update({ is_for_sale: true, sale_price: price }).in('id', ids)
    if (error) { toast(error.message, 'error'); return }

    // Créer UNE ligne market_listing par carte (pas une seule pour toutes)
    const listings = ids.map(cid => ({
      seller_id: state.profile.id,
      card_id: cid,
      price,
      status: 'active'
    }))
    const { error: listErr } = await supabase.from('market_listings').insert(listings)
    if (listErr) { console.warn('[Market] insert listings:', listErr.message) }

    toast(`${ids.length} carte${ids.length>1?'s':''} mise${ids.length>1?'s':''} en vente à ${price.toLocaleString('fr')} cr. chacune !`, 'success')
    closeModal(); navigate('collection')
  })

  // Retirer du marché
  document.getElementById('cancel-sell-btn')?.addEventListener('click', async () => {
    await supabase.from('cards').update({ is_for_sale: false, sale_price: null }).eq('id', card.id)
    await supabase.from('market_listings').update({ status:'cancelled' }).eq('card_id', card.id).eq('status','active')
    toast('Annonce retirée', 'success')
    closeModal()
    navigate('collection')
  })
}
