import { supabase } from '../lib/supabase.js'
import { flagImgUrl } from '../match/match-shared.js'

const JOB_COLORS  = { GK:'#111111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }
const RARITY_COLORS = { normal:'#ccc', pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }
const BASE = import.meta.env.BASE_URL

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
  const { state, toast } = ctx

  const { data: activeListings } = await supabase
    .from('market_listings')
    .select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`)
    .eq('status', 'active')
    .order('listed_at', { ascending: false })
    .limit(100)

  const { data: myAllListings } = await supabase
    .from('market_listings')
    .select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`)
    .eq('seller_id', state.profile.id)
    .in('status', ['active', 'sold'])
    .order('listed_at', { ascending: false })
    .limit(100)

  const others    = (activeListings || []).filter(l => l.seller_id !== state.profile.id)
  const myListings = myAllListings || []

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${others.length} carte(s) en vente · ${(state.profile.credits||0).toLocaleString('fr')} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${myListings.length})</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:#f9f9f9;border-bottom:1px solid var(--gray-200);display:flex;flex-wrap:wrap;gap:8px">
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <select id="flt-job" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:#fff">
        <option value="">Tous postes</option>
        <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
      </select>
      <select id="flt-rarity" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:#fff">
        <option value="">Toutes raretés</option>
        <option value="normal">Normal</option>
        <option value="pepite">Pépite</option>
        <option value="papyte">Papyte</option>
        <option value="legende">Légende</option>
      </select>
      <input id="flt-note1"   placeholder="★ Note min"    type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-note2"   placeholder="☆ Note 2 min" type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
    </div>

    <div id="mkt-content" style="padding:10px 16px;display:flex;flex-direction:column;gap:8px"></div>
  </div>`

  // ── Filtre + rendu ────────────────────────────────────────
  let activeTab = 'buy'
  const getFilters = () => ({
    name:     (document.getElementById('flt-name')?.value||'').toLowerCase().trim(),
    club:     (document.getElementById('flt-club')?.value||'').toLowerCase().trim(),
    country:  (document.getElementById('flt-country')?.value||'').toLowerCase().trim(),
    job:      document.getElementById('flt-job')?.value||'',
    rarity:   document.getElementById('flt-rarity')?.value||'',
    note1:    parseInt(document.getElementById('flt-note1')?.value)||0,
    note2:    parseInt(document.getElementById('flt-note2')?.value)||0,
  })

  function applyFilters(list) {
    const f = getFilters()
    return list.filter(l => {
      const p = l.card?.player
      if (!p) return false
      const fullName = `${p.firstname} ${p.surname_encoded}`.toLowerCase()
      const club     = (p.clubs?.encoded_name||'').toLowerCase()
      const country  = (p.country_code||'').toLowerCase()
      const note1    = getNote(p, p.job)
      const note2    = p.job2 ? getNote(p, p.job2) : 0
      if (f.name    && !fullName.includes(f.name))  return false
      if (f.club    && !club.includes(f.club))       return false
      if (f.country && !country.includes(f.country)) return false
      if (f.job     && p.job !== f.job)              return false
      if (f.rarity  && p.rarity !== f.rarity)        return false
      if (f.note1   && note1 < f.note1)              return false
      if (f.note2   && note2 < f.note2)              return false
      return true
    })
  }

  function renderBuyRow(l) {
    const p = l.card?.player
    if (!p) return ''
    const evo     = l.card?.evolution_bonus || 0
    const note1     = getNote(p, p.job, evo)
    const note2     = p.job2 ? getNote(p, p.job2, evo) : 0
    const canAfford = (state.profile.credits||0) >= l.price
    return `<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${rarityBar(p.rarity)}
      ${squareCell(note1, p.job)}
      ${squareCell(note2, p.job2||null)}
      ${flagImg(p.country_code)}
      ${clubLogoImg(p.clubs?.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${l.seller?.pseudo||'—'}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${l.price.toLocaleString('fr')}</div>
        <button class="btn btn-primary btn-sm" data-buy="${l.id}" ${!canAfford?'disabled':''} style="margin-top:4px;font-size:11px;padding:4px 10px">${canAfford?'Acheter':'Trop cher'}</button>
      </div>
    </div>`
  }

  function renderMineRow(l) {
    const p = l.card?.player
    if (!p) return ''
    const evo  = l.card?.evolution_bonus || 0
    const note1  = getNote(p, p.job, evo)
    const note2  = p.job2 ? getNote(p, p.job2, evo) : 0
    const isSold = l.status === 'sold'
    return `<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${isSold?'opacity:0.7':''}">
      ${rarityBar(p.rarity)}
      ${squareCell(note1, p.job)}
      ${squareCell(note2, p.job2||null)}
      ${flagImg(p.country_code)}
      ${clubLogoImg(p.clubs?.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
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
        ? list.map(renderBuyRow).join('')
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
        t.style.background  = a ? 'var(--green)' : '#fff'
        t.style.color       = a ? '#fff' : 'var(--gray-600)'
        t.style.borderColor = a ? 'var(--green)' : 'var(--gray-200)'
      })
      renderTab()
    })
  })

  // Listeners filtres (debounce léger)
  let _ft; ['flt-name','flt-club','flt-country','flt-job','flt-rarity','flt-note1','flt-note2'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => { clearTimeout(_ft); _ft=setTimeout(renderTab, 250) })
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
    await loadMarket(container, ctx)
  })
}

function showBuyConfirm(listing, onConfirm) {
  const p = listing.card?.player
  const name = p ? `${p.firstname} ${p.surname_encoded}` : 'cette carte'
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px'
  ov.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${name} ?</div>
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
