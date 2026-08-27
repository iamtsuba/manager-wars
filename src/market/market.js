import { supabase } from '../lib/supabase.js'
import { renderPlayerCard } from '../components/player-card.js'
import { flagImgUrl } from '../match/match-shared.js'
import { ensureV2Chrome } from '../home/home2.js'

const JOB_COLORS  = { GK:'#111111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }
const RARITY_COLORS = { normal:'#ccc', pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }
const BASE = import.meta.env.BASE_URL

function isLandscapeMobile() {
  return window.matchMedia('(max-width: 1023px) and (max-height: 500px) and (orientation: landscape)').matches
}

function getNote(p, job, evo=0) {
  if (!job) return 0
  const base = Number(job==='GK'?p.note_g:job==='DEF'?p.note_d:job==='MIL'?p.note_m:p.note_a) || 0
  return base + (job===p.job||job===p.job2 ? evo : 0)
}

function rarityBar(rarity) {
  const COLORS = { normal:'#e0e0e0', pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }
  const LABELS = { normal:'NORMAL', pepite:'PÉPITE', papyte:'PAPYTE', legende:'LÉGENDE' }
  const col = COLORS[rarity] || '#e0e0e0'
  return `<div style="width:6px;height:100%;background:${col};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`
}

function squareCell(note, job) {
  const SZ = 32  // taille fixe pour tous les carrés
  const color = job ? (JOB_COLORS[job] || '#bbb') : '#d0d0d0'
  const label = note > 0 ? note : (job || '—')
  return `<div style="width:${SZ}px;height:${SZ}px;border-radius:6px;background:${color};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${label}</div>`
}

function flagImg(code) {
  const SZ = 32
  const url = flagImgUrl(code)
  if (!url) return `<div style="width:${SZ}px;height:${SZ}px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>`
  return `<div style="width:${SZ}px;height:${SZ}px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${url}" style="width:100%;height:100%;object-fit:cover"></div>`
}

function clubLogoImg(logoUrl) {
  const SZ = 32
  if (!logoUrl) return `<div style="width:${SZ}px;height:${SZ}px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>`
  return `<div style="width:${SZ}px;height:${SZ}px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${logoUrl}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`
}

export async function renderMarket(container, ctx) {
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'
  await loadMarket(container, ctx)
}

async function loadMarket(container, ctx) {
  const { state, toast, navigate } = ctx
  ensureV2Chrome(navigate, state.profile, 'market', import.meta.env.BASE_URL + 'icons/', toast)

  const { data: activeListings } = await supabase
    .from('market_listings')
    .select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`)
    .eq('status', 'active')
    .order('listed_at', { ascending: false })
    .limit(100)

  const { data: myAllListings } = await supabase
    .from('market_listings')
    .select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`)
    .eq('seller_id', state.profile.id)
    .in('status', ['active', 'sold'])
    .order('listed_at', { ascending: false })
    .limit(100)

  // Joueurs déjà présents dans MA collection : sert au filtre
  // "Déjà possédé"/"Nouveau" et à la couleur du bouton Acheter.
  const { data: myCards } = await supabase
    .from('cards')
    .select('player_id')
    .eq('owner_id', state.profile.id)
    .eq('card_type', 'player')
    .not('player_id', 'is', null)
  const ownedPlayerIds = new Set((myCards || []).map(c => c.player_id))

  // Joueurs faisant partie d'une de MES équipes : sert à afficher l'icône
  // Équipe sur le bouton Acheter (repère pour ne pas racheter un joueur
  // qu'on aligne déjà).
  const { data: myDecks } = await supabase
    .from('decks').select('id').eq('owner_id', state.profile.id)
  const myDeckIds = (myDecks || []).map(d => d.id)
  let inDeckPlayerIds = new Set()
  if (myDeckIds.length) {
    const { data: deckCards } = await supabase
      .from('deck_cards')
      .select('card:cards(player_id)')
      .in('deck_id', myDeckIds)
    inDeckPlayerIds = new Set((deckCards || []).map(dc => dc.card?.player_id).filter(Boolean))
  }

  const others    = (activeListings || []).filter(l => l.seller_id !== state.profile.id)
  const myListings = myAllListings || []

  container.innerHTML = `
  <style>
    .mkt-buy-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:18px; }
    .mkt-buy-tile { display:flex; flex-direction:column; align-items:center; gap:8px; }
    .mkt-buy-tile .mkt-price { font-size:16px; font-weight:900; color:#D4A017; }
    .mkt-buy-tile .mkt-seller { font-size:10px; color:var(--tile-fg-dim); margin-top:-4px; }
    .mkt-buy-tile button { width:100%; }

    /* ══ Paysage mobile : onglets en haut (pleine largeur), pas de sidebar
       filtres (source de bugs selon la densité/résolution de l'écran) —
       à la place, un bouton "🔍 Filtres" ouvre les filtres dans un popup
       plein-hauteur. Le contenu (cartes) prend toute la largeur, en
       grille 2 lignes swipeable horizontalement. ══ */
    @media (max-width: 1023px) and (max-height: 500px) and (orientation: landscape) {
      #mkt-outer {
        display: grid !important;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;
        height: 100% !important; overflow: hidden !important;
      }
      #mkt-header { padding: 5px 12px !important; }
      #mkt-header > div:first-child { font-size: 13px !important; }
      #mkt-header > div:last-child { font-size: 10px !important; margin-top: 0 !important; }
      #mkt-tabs { padding: 5px 12px !important; align-items: center !important; }
      #mkt-tabs .mkt-tab { padding: 4px 12px !important; font-size: 11px !important; }
      #mkt-filter-toggle { display: inline-flex !important; }

      /* Filtres : popup plein-hauteur depuis la gauche, caché par défaut.
         !important nécessaire pour primer sur le style inline posé par
         renderTab() (filters.style.display = 'flex'/'none' selon l'onglet). */
      #mkt-filters {
        display: none !important;
        position: fixed !important; top: 0 !important; left: 0 !important; bottom: 0 !important;
        width: 260px !important; max-width: 80vw !important; z-index: 700 !important;
        background: var(--tile-dark-bg) !important; border-right: 1px solid var(--tile-border) !important;
        border-bottom: none !important; flex-direction: column !important;
        overflow-y: auto !important; overflow-x: hidden !important;
        padding: 14px !important; gap: 8px !important; box-sizing: border-box !important;
        box-shadow: 4px 0 24px rgba(0,0,0,0.4) !important;
      }
      #mkt-filters.mkt-filters-open { display: flex !important; }
      #mkt-filters > input, #mkt-filters > div { width: 100% !important; max-width: 100% !important; flex: none !important; }
      #mkt-filters > div { display: flex !important; flex-direction: column !important; gap: 8px !important; }
      #mkt-filters input, #mkt-filters select {
        width: 100% !important; min-width: 0 !important; max-width: 100% !important;
        box-sizing: border-box !important; font-size: 12px !important; padding: 7px 9px !important;
      }
      #mkt-filters .mkt-own-btn {
        width: 100% !important; min-width: 0 !important; box-sizing: border-box !important;
        font-size: 11px !important; padding: 7px 4px !important; white-space: normal !important;
        text-align: center !important; line-height: 1.2 !important;
      }
      #mkt-filters-backdrop.mkt-filters-open {
        display: block !important; position: fixed !important; inset: 0 !important;
        background: rgba(0,0,0,0.5) !important; z-index: 699 !important;
      }

      /* Cartes en vente : pleine largeur, grille 2 lignes, swipe horizontal */
      #mkt-content {
        overflow: hidden !important; padding: 6px !important; box-sizing: border-box !important;
        height: 100% !important;
      }
      .mkt-buy-grid {
        display: grid !important;
        grid-template-rows: repeat(2, 1fr) !important; grid-auto-flow: column !important;
        grid-auto-columns: 100px !important; grid-template-columns: none !important;
        gap: 10px !important; height: 100% !important;
        overflow-x: auto !important; overflow-y: hidden !important;
        align-items: center !important; scrollbar-width: none !important;
      }
      .mkt-buy-grid::-webkit-scrollbar { display: none; }
      .mkt-buy-tile { min-width: 0 !important; gap: 3px !important; justify-content: center !important; }
      .mkt-buy-tile .mkt-price { font-size: 11px !important; }
      .mkt-buy-tile .mkt-seller { display: none !important; }
      .mkt-buy-tile button { font-size: 9px !important; padding: 4px 6px !important; }
    }
  </style>
  <div id="mkt-filters-backdrop" style="display:none"></div>
  <div id="mkt-outer" style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div id="mkt-header" style="padding:12px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${others.length} carte(s) en vente · ${(state.profile.credits||0).toLocaleString('fr')} cr.</div>
    </div>

    <!-- Onglets -->
    <div id="mkt-tabs" style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${myListings.length})</button>
      <button id="mkt-filter-toggle" style="display:none;margin-left:auto;padding:6px 14px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:12px;font-weight:700;cursor:pointer;align-items:center;gap:4px">🔍 Filtres</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:var(--tile-dark-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-wrap:wrap;gap:8px">
      <style>
        /* Le fond des champs était laissé au thème (sombre) alors que la
           bordure suggérait un champ clair : texte et placeholder blancs
           sur fond blanc, donc illisibles. On force ici un champ clair
           avec un texte sombre. */
        #mkt-filters input, #mkt-filters select {
          background: #fff !important;
          color: #1a1a1a !important;
        }
        #mkt-filters input::placeholder { color: #999 !important; }
        .mkt-own-btn { padding:6px 12px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid #ddd;background:#fff;color:#555 }
        .mkt-own-btn.active { background:var(--green);border-color:var(--green);color:#fff }
      </style>
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <!-- Ligne 2 : les 3 menus déroulants côte à côte -->
      <div style="display:flex;gap:8px;width:100%;flex-wrap:wrap">
        <select id="flt-job" style="flex:1;min-width:120px;padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
          <option value="">Tous postes</option>
          <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
        </select>
        <select id="flt-rarity" style="flex:1;min-width:130px;padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
          <option value="">Toutes raretés</option>
          <option value="normal">Normal</option>
          <option value="pepite">Pépite</option>
          <option value="papyte">Papyte</option>
          <option value="legende">Légende</option>
        </select>
        <select id="flt-sort" style="flex:1;min-width:150px;padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
          <option value="">Tri : plus récent</option>
          <option value="note_desc">Note ↓ (plus haute)</option>
          <option value="note_asc">Note ↑ (plus basse)</option>
          <option value="price_asc">Prix ↑ (moins cher)</option>
          <option value="price_desc">Prix ↓ (plus cher)</option>
        </select>
      </div>
      <!-- Ligne 3 : notes + filtres de possession sur la même ligne -->
      <div style="display:flex;gap:8px;width:100%;flex-wrap:wrap;align-items:center">
        <input id="flt-note1" placeholder="★ Note min"   type="number" min="0" max="100" style="width:100px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
        <input id="flt-note2" placeholder="☆ Note 2 min" type="number" min="0" max="100" style="width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
        <button type="button" class="mkt-own-btn active" data-own="">Tous</button>
        <button type="button" class="mkt-own-btn" data-own="owned">🟡 Déjà possédé</button>
        <button type="button" class="mkt-own-btn" data-own="new">✨ Nouveau joueur</button>
        <button type="button" class="mkt-own-btn" data-own="indeck">👥 Présent dans deck</button>
      </div>
    </div>

    <div id="mkt-content" style="padding:10px 16px;display:flex;flex-direction:column;gap:8px"></div>
  </div>`

  // ── Filtre + rendu ────────────────────────────────────────
  let activeTab = 'buy'
  let ownFilter = ''   // '' | 'owned' | 'new' | 'indeck'
  const getFilters = () => ({
    name:     (document.getElementById('flt-name')?.value||'').toLowerCase().trim(),
    club:     (document.getElementById('flt-club')?.value||'').toLowerCase().trim(),
    country:  (document.getElementById('flt-country')?.value||'').toLowerCase().trim(),
    job:      document.getElementById('flt-job')?.value||'',
    rarity:   document.getElementById('flt-rarity')?.value||'',
    sort:     document.getElementById('flt-sort')?.value||'',
    note1:    parseInt(document.getElementById('flt-note1')?.value)||0,
    note2:    parseInt(document.getElementById('flt-note2')?.value)||0,
  })

  function applyFilters(list) {
    const f = getFilters()
    const filtered = list.filter(l => {
      const p = l.card?.player
      if (!p) return false
      const fullName = `${p.firstname} ${p.surname_real}`.toLowerCase()
      const club     = (p.clubs?.encoded_name||'').toLowerCase()
      const country  = (p.country_code||'').toLowerCase()
      const evo      = l.card?.evolution_bonus || 0
      const note1    = getNote(p, p.job, evo)
      const note2    = p.job2 ? getNote(p, p.job2, evo) : 0
      if (f.name    && !fullName.includes(f.name))  return false
      if (f.club    && !club.includes(f.club))       return false
      if (f.country && !country.includes(f.country)) return false
      if (f.job     && p.job !== f.job)              return false
      if (f.rarity  && p.rarity !== f.rarity)        return false
      if (f.note1   && note1 < f.note1)              return false
      if (f.note2   && note2 < f.note2)              return false
      // Filtre possession : déjà dans ma collection, ou joueur inédit
      const owned = ownedPlayerIds.has(p.id)
      if (ownFilter === 'owned'  && !owned) return false
      if (ownFilter === 'new'    &&  owned) return false
      if (ownFilter === 'indeck' && !inDeckPlayerIds.has(p.id)) return false
      return true
    })

    // Tri (la meilleure note du joueur sert de référence, évolution incluse)
    const bestNote = (l) => {
      const p = l.card?.player
      if (!p) return 0
      const evo = l.card?.evolution_bonus || 0
      return Math.max(getNote(p, p.job, evo), p.job2 ? getNote(p, p.job2, evo) : 0)
    }
    if (f.sort === 'note_desc')  return [...filtered].sort((a,b) => bestNote(b) - bestNote(a))
    if (f.sort === 'note_asc')   return [...filtered].sort((a,b) => bestNote(a) - bestNote(b))
    if (f.sort === 'price_asc')  return [...filtered].sort((a,b) => a.price - b.price)
    if (f.sort === 'price_desc') return [...filtered].sort((a,b) => b.price - a.price)
    return filtered
  }

  function renderBuyTile(l) {
    const p = l.card?.player
    if (!p) return ''
    const evo        = l.card?.evolution_bonus || 0
    const canAfford  = (state.profile.credits||0) >= l.price
    const owned      = ownedPlayerIds.has(p.id)
    const inDeck     = inDeckPlayerIds.has(p.id)
    const cardW       = (window.innerWidth < 900 && isLandscapeMobile()) ? 90 : 140
    const cardHtml   = renderPlayerCard({ ...p, _evolution_bonus: evo }, { width: cardW, context: 'mercato' })
    // Bouton doré quand le joueur est DÉJÀ dans la collection : repère visuel
    // immédiat pour éviter d'acheter un doublon sans le vouloir.
    const btnStyle = owned
      ? 'font-size:12px;padding:8px 10px;background:linear-gradient(135deg,#D4A017,#f0c040);border:none;color:#1a1a1a;font-weight:900;display:flex;align-items:center;justify-content:center;gap:5px;width:100%'
      : 'font-size:12px;padding:8px 10px;display:flex;align-items:center;justify-content:center;gap:5px;width:100%'
    // Icône Équipe : uniquement si le joueur est aligné dans un de mes decks
    const deckIcon = inDeck
      ? `<img src="${import.meta.env.BASE_URL}icons/nav-decks.png" alt="Dans une de tes équipes" style="width:16px;height:16px;object-fit:contain;flex-shrink:0">`
      : ''
    const title = [owned ? 'Tu possèdes déjà ce joueur' : '', inDeck ? 'Il est aligné dans une de tes équipes' : ''].filter(Boolean).join(' · ')
    return `<div class="mkt-buy-tile">
      ${cardHtml}
      <div class="mkt-price">${l.price.toLocaleString('fr')} cr.</div>
      <div class="mkt-seller">Vendeur : ${l.seller?.pseudo||'—'}</div>
      <button class="btn btn-primary btn-sm" data-buy="${l.id}" ${!canAfford?'disabled':''} style="${btnStyle}" title="${title}"><span>${canAfford ? (owned ? '🟡 Acheter' : 'Acheter') : 'Trop cher'}</span>${deckIcon}</button>
    </div>`
  }

  function renderMineRow(l) {
    const p = l.card?.player
    if (!p) return ''
    const evo  = l.card?.evolution_bonus || 0
    const note1  = getNote(p, p.job, evo)
    const note2  = p.job2 ? getNote(p, p.job2, evo) : 0
    const isSold = l.status === 'sold'
    const flagUrl2 = p.country_code ? `https://flagsapi.com/${p.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null
    const noteCol1m = JOB_COLORS[p.job] || '#bbb'
    const noteCol2m = p.job2 ? (JOB_COLORS[p.job2] || '#bbb') : null
    const noteTxt1m = p.job === 'GK' ? '#fff' : noteCol1m
    const noteTxt2m = p.job2 === 'GK' ? '#fff' : noteCol2m
    return `<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${isSold?'opacity:0.7':''}">
      ${flagUrl2 ? `<img src="${flagUrl2}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">` : `<span style="font-size:20px">🌍</span>`}
      ${p.clubs?.logo_url ? `<img src="${p.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">` : ''}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${noteCol1m};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${noteTxt1m};font-family:Arial Black,Arial">${note1}</span>
        </div>
        ${note2 ? `<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${noteCol2m};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${noteTxt2m};font-family:Arial Black,Arial">${note2}</span>
        </div>` : ''}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${p.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.surname_real}</div>
        <div style="font-size:10px;color:${isSold?'#22c55e':'#999'};margin-top:1px">
          ${isSold?`✅ Vendu à ${l.buyer?.pseudo||'—'} · ${l.sold_at?new Date(l.sold_at).toLocaleDateString('fr'):''}` : `🟢 En vente depuis le ${new Date(l.listed_at).toLocaleDateString('fr')}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${l.price.toLocaleString('fr')}</div>
        ${isSold
          ? `<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>`
          : `<button class="btn btn-danger btn-sm" data-cancel="${l.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`
  }

  function renderTab() {
    const content  = document.getElementById('mkt-content')
    const filters  = document.getElementById('mkt-filters')
    if (!content) return
    filters.style.display = activeTab === 'buy' ? 'flex' : 'none'

    if (activeTab === 'buy') {
      const list = applyFilters(others)
      content.innerHTML = list.length
        ? `<div class="mkt-buy-grid">${list.map(renderBuyTile).join('')}</div>`
        : `<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>`
    } else {
      const active = myListings.filter(l=>l.status==='active').sort((a,b)=>new Date(b.listed_at)-new Date(a.listed_at))
      const sold   = myListings.filter(l=>l.status==='sold').sort((a,b)=>new Date(b.sold_at||b.listed_at)-new Date(a.sold_at||a.listed_at))
      content.innerHTML =
        (active.length ? `<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${active.length})</div>` + active.map(renderMineRow).join('') : '') +
        (sold.length   ? `<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${sold.length})</div>` + sold.map(renderMineRow).join('') : '') +
        (!active.length && !sold.length ? `<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>` : '')
    }

    content.querySelectorAll('[data-buy]').forEach(btn =>
      btn.addEventListener('click', () => buyCard(btn.dataset.buy, others, container, ctx)))
    content.querySelectorAll('[data-cancel]').forEach(btn =>
      btn.addEventListener('click', () => cancelListing(btn.dataset.cancel, container, ctx)))
  }

  // Listeners onglets
  container.querySelectorAll('.mkt-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeTab = tab.dataset.tab
      container.querySelectorAll('.mkt-tab').forEach(t => {
        const a = t === tab
        t.style.background  = a ? 'var(--green)' : 'var(--tile-bg)'
        t.style.color       = a ? '#fff' : 'var(--tile-fg-dim)'
        t.style.borderColor = a ? 'var(--green)' : 'var(--tile-border)'
      })
      renderTab()
    })
  })

  // Pré-remplissage depuis une autre page (ex. "🛒 Mercato" du sélecteur de
  // deck, qui envoie nom + club + pays via navigate('market', {...})) :
  // le nom seul remonterait trop de résultats (plusieurs homonymes), club et
  // pays permettent d'isoler la bonne carte.
  if (ctx.state?.params?.search || ctx.state?.params?.club || ctx.state?.params?.country) {
    const nameInput    = document.getElementById('flt-name')
    const clubInput    = document.getElementById('flt-club')
    const countryInput = document.getElementById('flt-country')
    if (nameInput    && ctx.state.params.search)  nameInput.value    = ctx.state.params.search
    if (clubInput    && ctx.state.params.club)    clubInput.value    = ctx.state.params.club
    if (countryInput && ctx.state.params.country) countryInput.value = ctx.state.params.country
    ctx.state.params = {}      // consommé : évite de re-filtrer au prochain passage
    renderTab()
  }

  // Listeners filtres (debounce léger)
  let _ft; ['flt-name','flt-club','flt-country','flt-job','flt-rarity','flt-sort','flt-note1','flt-note2'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => { clearTimeout(_ft); _ft=setTimeout(renderTab, 250) })
    // Les <select> n'émettent pas 'input' sur tous les navigateurs
    document.getElementById(id)?.addEventListener('change', () => { clearTimeout(_ft); _ft=setTimeout(renderTab, 100) })
  })

  // Filtre possession (Tous / Déjà possédé / Nouveau)
  container.querySelectorAll('.mkt-own-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ownFilter = btn.dataset.own || ''
      container.querySelectorAll('.mkt-own-btn').forEach(b => b.classList.toggle('active', b === btn))
      renderTab()
    })
  })

  // Popup filtres (paysage mobile) : ouverture/fermeture
  const filtersEl  = document.getElementById('mkt-filters')
  const backdropEl = document.getElementById('mkt-filters-backdrop')
  document.getElementById('mkt-filter-toggle')?.addEventListener('click', () => {
    filtersEl?.classList.toggle('mkt-filters-open')
    backdropEl?.classList.toggle('mkt-filters-open')
  })
  backdropEl?.addEventListener('click', () => {
    filtersEl?.classList.remove('mkt-filters-open')
    backdropEl?.classList.remove('mkt-filters-open')
  })

  renderTab()
}

// ── Achat ─────────────────────────────────────────────────
async function buyCard(listingId, list, container, ctx) {
  const { state, toast, refreshProfile } = ctx
  const listing = list.find(l => l.id === listingId)
  if (!listing) return

  const price    = listing.price
  const myCredit = state.profile.credits || 0
  if (myCredit < price) { toast('Crédits insuffisants', 'error'); return }

  showBuyConfirm(listing, async () => {
    const { error } = await supabase.rpc('buy_market_card', { p_listing_id: listingId, p_buyer_id: state.profile.id })
    if (error) { toast('Erreur achat : ' + error.message, 'error'); return }
    await refreshProfile()
    const credEl = document.getElementById('nav-credits')
    if (credEl) credEl.textContent = `💰 ${(state.profile.credits||0).toLocaleString('fr')}`
    toast('✅ Carte achetée !', 'success')

    // Résoudre automatiquement les decks qui attendaient ce joueur (slot
    // grisé "à acheter") : la nouvelle carte y remplace le marqueur wanted.
    // La RPC d'achat ne renvoyant pas l'id de la carte créée, on la retrouve
    // via la plus récente carte de ce joueur dans la collection de l'acheteur.
    await resolveWantedSlots(state.profile.id, listing.card?.player?.id, toast)

    await loadMarket(container, ctx)
  })
}

async function resolveWantedSlots(buyerId, playerId, toast) {
  if (!playerId) return
  const { data: pendingRows } = await supabase
    .from('deck_cards')
    .select('id, deck_id, decks!inner(owner_id)')
    .eq('wanted_player_id', playerId)
    .eq('decks.owner_id', buyerId)
  if (!pendingRows?.length) return

  const { data: newCard } = await supabase
    .from('cards')
    .select('id')
    .eq('owner_id', buyerId)
    .eq('player_id', playerId)
    .eq('card_type', 'player')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (!newCard) return

  const { error: updErr } = await supabase
    .from('deck_cards')
    .update({ card_id: newCard.id, wanted_player_id: null })
    .in('id', pendingRows.map(r => r.id))

  if (!updErr && pendingRows.length) {
    toast?.(`🔄 ${pendingRows.length} deck(s) complété(s) avec ce joueur`, 'success')
  }
}

function showBuyConfirm(listing, onConfirm) {
  const p = listing.card?.player
  const name = p ? `${p.firstname} ${p.surname_real}` : 'cette carte'
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px'
  ov.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${name} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${listing.price.toLocaleString('fr')} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  const close = (ok) => { ov.remove(); if (ok) onConfirm() }
  ov.querySelector('#buy-cancel').addEventListener('click', () => close(false))
  ov.querySelector('#buy-ok').addEventListener('click', () => close(true))
  ov.addEventListener('click', e => { if (e.target===ov) close(false) })
}

// ── Retrait d'annonce ─────────────────────────────────────
async function cancelListing(listingId, container, ctx) {
  const { toast } = ctx
  const { data: listing } = await supabase.from('market_listings').select('card_id').eq('id', listingId).single()

  await supabase.from('market_listings').update({ status: 'cancelled' }).eq('id', listingId)

  if (listing?.card_id) {
    const { count } = await supabase.from('market_listings')
      .select('id', { count: 'exact', head: true })
      .eq('card_id', listing.card_id).eq('status', 'active')
    if (!count) await supabase.from('cards').update({ is_for_sale: false, sale_price: null }).eq('id', listing.card_id)
  }
  toast('Annonce retirée', 'success')
  loadMarket(container, ctx)
}

