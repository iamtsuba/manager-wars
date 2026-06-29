import { supabase } from '../lib/supabase.js'
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

  const job      = p.job || 'ATT'
  const jobColor = JOB_COLORS[job]
  const rarColor = RAR_COLORS[p.rarity] || '#ccc'
  // Pour pépite/papyte : afficher current_note (note évolutive), sinon note du poste
  const isEvolutive = p.rarity === 'pepite' || p.rarity === 'papyte'
  const note1    = isEvolutive && card.current_note != null ? card.current_note : getNote(p, job)
  const note2    = p.job2 ? (isEvolutive ? currentSecondaryNote(card, job2NoteKey(p.job2)) : getNote(p, p.job2)) : null
  const job2Color = p.job2 ? JOB_COLORS[p.job2] : null
  const portrait = getPortrait(p)
  const country  = COUNTRY_NAMES[p.country_code] || p.country_code || ''

  return `
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${rarColor};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${card.id}">
    ${countBadge}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${p.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(p.surname_encoded||'').toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${jobColor}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${jobColor}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${note1}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${note2 !== null ? `
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${job2Color}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${note2}</text>
        </svg>` : ''}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${portrait
          ? `<img src="${portrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\'>👤</div>'">`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>`}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${p.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${country}</div>
        ${p.clubs?.logo_url
          ? `<img src="${p.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`
          : `<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(p.clubs?.encoded_name||'').slice(0,6)}</div>`}
      </div>
    </div>
  </div>`
}

// ── Rendu d'une carte joueur MANQUANTE (grisée, non possédée) ──
function renderMissingCard(p) {
  const job = p.job || 'ATT'
  const note1 = getNote(p, job)
  const country = COUNTRY_NAMES[p.country_code] || p.country_code || ''

  return `
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:#ccc;flex-shrink:0;position:relative;filter:grayscale(1);opacity:0.45
  ">
    <div style="background:#e8e8e8;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#888">${p.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#444;font-family:Arial Black,Arial;line-height:1.1">${(p.surname_encoded||'').toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#e8e8e8;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:#999"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="#999" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${note1}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${country}</div>
      </div>
    </div>
  </div>`
}

// ── Page principale ────────────────────────────────────────
export async function renderCollection(container, ctx) {
  const { state, navigate, toast, openModal, closeModal } = ctx
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: cards } = await supabase
    .from('cards')
    .select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`)
    .eq('owner_id', state.profile.id)

  // Tous les joueurs actifs (pour le mode "Voir tout")
  const { data: allPlayers } = await supabase
    .from('players')
    .select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`)
    .eq('is_active', true)

  const playerCards = (cards||[]).filter(c => c.card_type === 'player' && c.player)
  const gcCards     = (cards||[]).filter(c => c.card_type === 'game_changer')
  const formCards   = (cards||[]).filter(c => c.card_type === 'formation')

  // Définitions GC depuis la DB (image, couleur, effet)
  const { data: gcDefinitions } = await supabase
    .from('gc_definitions').select('name,gc_type,color,effect,image_url')
  const gcDefMap = {}
  ;(gcDefinitions||[]).forEach(d => { gcDefMap[d.name] = d })

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

  let activeTab    = 'player'   // 'player' | 'formation' | 'gc'
  let activeFilter = 'Tous'
  let searchQ      = ''
  let showAll      = false

  // Trier les cartes joueurs : GK → DEF → MIL → ATT
  function sortedCards() {
    return [...playerCards].sort((a, b) => {
      const iA = JOB_ORDER.indexOf(a.player.job)
      const iB = JOB_ORDER.indexOf(b.player.job)
      if (iA !== iB) return iA - iB
      return (a.player.surname_encoded||'').localeCompare(b.player.surname_encoded||'')
    })
  }

  function sortedAllPlayers() {
    return [...(allPlayers||[])].sort((a, b) => {
      const iA = JOB_ORDER.indexOf(a.job)
      const iB = JOB_ORDER.indexOf(b.job)
      if (iA !== iB) return iA - iB
      return (a.surname_encoded||'').localeCompare(b.surname_encoded||'')
    })
  }

  function filteredCards() {
    return sortedCards().filter(c => {
      const p = c.player
      const matchJob    = activeFilter === 'Tous' || p.job === activeFilter
      const matchSearch = !searchQ || `${p.firstname} ${p.surname_encoded}`.toLowerCase().includes(searchQ)
      return matchJob && matchSearch
    })
  }

  function filteredAllPlayers() {
    return sortedAllPlayers().filter(p => {
      const matchJob    = activeFilter === 'Tous' || p.job === activeFilter
      const matchSearch = !searchQ || `${p.firstname} ${p.surname_encoded}`.toLowerCase().includes(searchQ)
      return matchJob && matchSearch
    })
  }

  container.innerHTML = `
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='player'?'var(--green)':'transparent'};
        color:${activeTab==='player'?'var(--green)':'var(--gray-600)'}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${playerCards.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='formation'?'var(--green)':'transparent'};
        color:${activeTab==='formation'?'var(--green)':'var(--gray-600)'}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${formCards.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${activeTab==='gc'?'var(--green)':'transparent'};
        color:${activeTab==='gc'?'var(--green)':'var(--gray-600)'}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${gcCards.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

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
                border:1.5px solid ${f===activeFilter?'var(--green)':'var(--gray-200)'};
                background:${f===activeFilter?'var(--green)':'#fff'};
                color:${f===activeFilter?'#fff':'var(--gray-600)'}">
              ${f}
            </button>`).join('')}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${showAll?'var(--yellow)':'var(--gray-200)'};
              background:${showAll?'var(--yellow)':'#fff'};
              color:${showAll?'#111':'var(--gray-600)'}; font-size:18px; padding:5px 10px">
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
              border:1.5px solid ${showAll?'var(--yellow)':'var(--gray-200)'};
              background:${showAll?'var(--yellow)':'#fff'};
              color:${showAll?'#111':'var(--gray-600)'}; font-size:18px; padding:5px 10px">
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
        gridEl.style.height     = '200px'
        gridEl.style.flexShrink = '0'
        gridEl.style.overflowX  = 'auto'
        gridEl.style.overflowY  = 'hidden'
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
          var maxScale = isDesktop ? 2.2 : 1   // desktop : autoriser agrandissement
          var scale = Math.min(availH / cardH, availW / cardW, maxScale)
          inner.style.transform = 'scale(' + scale.toFixed(3) + ')'
          inner.style.transformOrigin = 'top center'
        }
      })

      grid.innerHTML = items.map(function(item, i) {
        var selStyle = i === sel
          ? 'border:2px solid rgba(255,255,255,0.9);box-shadow:0 0 8px rgba(255,255,255,0.6);border-radius:6px;'
          : 'border:2px solid transparent;border-radius:6px;'
        return '<div class="col-mini-item" data-idx="' + i + '" style="flex-shrink:0;cursor:pointer;' + selStyle + 'transition:border-color .15s;overflow:hidden">' + renderMiniFn(item, i === sel) + '</div>'
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
    var SCALE = 0.54
    var W = Math.round(140*SCALE), H = Math.round(310*SCALE)
    var inner
    if (!card || card._fake) {
      var p = card ? card.player : null
      if (!p) return ''
      inner = renderMissingCard(p)
    } else {
      inner = renderCard(card, '')
    }
    return '<div style="width:' + W + 'px;height:' + H + 'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale(' + SCALE + ');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">' + inner + '</div></div>'
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
    return '<div ' + id + ' style="position:relative;width:140px;border-radius:12px;border:3px solid ' + (owned?'#2a7a40':'#bbb') + ';background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);' + (!owned?'filter:grayscale(1);opacity:0.5':'') + '">'
      + badge
      + '<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid ' + (owned?'#1A6B3C':'#aaa') + ';flex-shrink:0">'
      + '<div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div>'
      + '<div style="font-size:' + fs + 'px;font-weight:900;color:' + (owned?'#1A6B3C':'#aaa') + ';line-height:1">' + formation + '</div>'
      + '</div>'
      + '<div style="flex:1;overflow:hidden;background:' + (owned?'#1A6B3C':'#ccc') + '">' + formFieldSVG(formation, 140, 220) + '</div>'
      + '</div>'
  }

  function miniFormationCard(formation, owned) {
    var SCALE = 0.54
    var W = Math.round(140*SCALE), H = Math.round(305*SCALE)
    var nameH = Math.round(H*0.22), fieldH = H - nameH
    var fs = formation.length > 7 ? 5 : 7
    var svg = formFieldSVG(formation, W, fieldH)
    var border = owned ? '1.5px solid #2a7a40' : '1px solid #ddd'
    var filter = owned ? '' : 'filter:grayscale(1);opacity:0.45;'
    var nameBg = owned ? '#1A6B3C' : '#bbb'
    var nameColor = '#fff'
    return '<div style="width:' + W + 'px;height:' + H + 'px;border-radius:6px;border:' + border + ';background:#fff;display:flex;flex-direction:column;overflow:hidden;' + filter + '">'
      + '<div style="height:' + nameH + 'px;background:' + nameBg + ';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0">'
      + '<span style="font-size:' + fs + 'px;font-weight:900;color:' + nameColor + ';text-align:center;overflow:hidden;white-space:nowrap;max-width:' + (W-4) + 'px">' + formation + '</span>'
      + '</div>'
      + '<div style="height:' + fieldH + 'px;overflow:hidden;flex-shrink:0">' + svg + '</div>'
      + '</div>'
  }

  function renderPlayerGrid(grid) {
    if (showAll) {
      const list = filteredAllPlayers()
      if (!list.length) {
        grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>'
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
        grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>'
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
      grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>'
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
      grid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>'
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
        const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
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
      ({type, gc, def, owned}) => owned
        ? (() => { const W=Math.round(140*0.54),H=Math.round(310*0.54),imgH=Math.round(H*0.65),nameH=Math.round(H*0.18),botH=H-Math.round(H*0.65)-Math.round(H*0.18); const BG2={purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'},bo2={purple:'#9b59b6',light_blue:'#00bcd4'}; const bg2=BG2[def?.color]||BG2.purple,bor2=bo2[def?.color]||bo2.purple,imgU=def?.image_url?`${import.meta.env.BASE_URL}icons/${def.image_url}`:null; return `<div style="width:${W}px;height:${H}px;border-radius:8px;background:${bg2};border:1px solid ${bor2};display:flex;flex-direction:column;overflow:hidden"><div style="height:${nameH}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${W-6}px">${type}</span></div><div style="height:${imgH}px;display:flex;align-items:center;justify-content:center">${imgU?`<img src="${imgU}" style="max-width:${W-8}px;max-height:${imgH-4}px;object-fit:contain">`:`<span style="font-size:24px">${gc.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${(def?.effect||gc.desc||'').slice(0,20)}</span></div></div>` })()
        : (() => { const W=Math.round(140*0.54),H=Math.round(310*0.54); return `<div style="width:${W}px;height:${H}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${gc.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${type}</span></div>` })(),
      ({type, owned, def}) => { if (owned) openGCModal(type, def, openModal) },
      '#7a28b8'
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
        b.style.color = a ? 'var(--green)' : 'var(--gray-600)'
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
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${canMarket ? `
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${FORMATION_DIRECT_SELL_PRICE}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
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
  const playerMaxNote = Math.max(Number(p.note_g)||0, Number(p.note_d)||0, Number(p.note_m)||0, Number(p.note_a)||0)
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
  const note1    = (p.rarity==='pepite'||p.rarity==='papyte') && card.current_note != null ? card.current_note : getNote(p, p.job)
  const isEvol   = p.rarity==='pepite'||p.rarity==='papyte'
  const note2    = p.job2 ? (isEvol ? currentSecondaryNote(card, job2NoteKey(p.job2)) : getNote(p, p.job2)) : null
  const jobColor  = JOB_COLORS[p.job] || '#1A6B3C'
  const job2Color = p.job2 ? JOB_COLORS[p.job2] : null
  const rarColor  = RAR_COLORS[p.rarity] || '#ccc'
  const country   = COUNTRY_NAMES[p.country_code] || p.country_code || ''

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
        <div style="font-size:11px;color:var(--gray-600)">(${t.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${t.source==='booster'?'var(--gray-600)':'var(--yellow)'}">${price}</div>
        <div style="font-size:11px;color:var(--gray-600)">${date}</div>
      </div>
    </div>`
  }

  // Un bloc par carte possédée avec checkbox de sélection
  const clubsHTML = myCardIds.length ? `
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
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

        <!-- Vente directe -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div>
            <div style="font-size:11px;color:#555">Vente directe</div>
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${directPrice.toLocaleString('fr')} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
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

  openModal(`${p.firstname} ${p.surname_encoded}`,
    `<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${rarColor};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${p.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(p.surname_encoded||'').toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${jobColor}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${jobColor}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${note1}</text>
            </svg>
            ${note2 !== null ? `
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${job2Color}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${note2}</text>
            </svg>` : ''}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${portrait
              ? `<img src="${portrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be\'>👤</div>'">`
              : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>`}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${p.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${country}</div>
            ${p.clubs?.logo_url
              ? `<img src="${p.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`
              : `<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(p.clubs?.encoded_name||'').slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
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
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${p.job}${p.job2?' / '+p.job2:''}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[['GK',p.note_g],['DEF',p.note_d],['MIL',p.note_m],['ATT',p.note_a]].map(([j,n]) => {
              const col = JOB_COLORS[j]
              const val = Number(n)||0
              return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${col}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${val}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${j}</span>
              </div>`
            }).join('')}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
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
    document.getElementById('sell-direct-total').textContent =
      (n * directPrice).toLocaleString('fr') + ' cr.'
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
  document.getElementById('direct-sell-btn')?.addEventListener('click', async () => {
    const ids = [...selectedCardIds]
    if (!ids.length) return
    const total = ids.length * directPrice
    if (!confirm(`Vendre ${ids.length} carte${ids.length>1?'s':''} ${p.surname_encoded} pour ${total.toLocaleString('fr')} crédits ? Action irréversible.`)) return

    // Supprimer les dépendances FK avant de supprimer les cartes
    await supabase.from('market_listings').delete().in('card_id', ids)
    await supabase.from('transfer_history').delete().in('card_id', ids)

    const { error } = await supabase.from('cards').delete().in('id', ids)
    if (error) { toast(error.message, 'error'); return }

    await supabase.from('users')
      .update({ credits: (state.profile.credits||0) + total })
      .eq('id', state.profile.id)
    await refreshProfile()
    const credEl = document.getElementById('nav-credits')
    if (credEl) credEl.textContent = `💰 ${(state.profile.credits||0).toLocaleString('fr')}`
    toast(`+${total.toLocaleString('fr')} crédits ! ${ids.length} carte${ids.length>1?'s':''} vendue${ids.length>1?'s':''}.`, 'success')
    closeModal(); navigate('collection')
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
