import { supabase } from '../lib/supabase.js'
import { renderCardHTML } from '../components/card.js'

const RARITY_COLORS = { normal:'#ccc', pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }

export async function renderMarket(container, ctx) {
  const { state, toast } = ctx
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>'

  await loadMarket(container, ctx)
}

async function loadMarket(container, ctx) {
  const { state, toast } = ctx

  // Annonces actives (marché d'achat global)
  const { data: activeListings } = await supabase
    .from('market_listings')
    .select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`)
    .eq('status', 'active')
    .order('listed_at', { ascending: false })
    .limit(60)

  // Toutes MES ventes (actives + vendues) — requête séparée pour ne pas dépendre
  // de la limite/filtre du marché global
  const { data: myAllListings } = await supabase
    .from('market_listings')
    .select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`)
    .eq('seller_id', state.profile.id)
    .in('status', ['active', 'sold'])
    .order('listed_at', { ascending: false })
    .limit(100)

  const others = (activeListings || []).filter(l => l.seller_id !== state.profile.id)
  const myListings = myAllListings || []
  const myActiveCount = myListings.filter(l => l.status === 'active').length

  container.innerHTML = `
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${others.length} carte(s) en vente · Solde : ${(state.profile.credits||0).toLocaleString('fr')} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${myListings.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `

  function renderTab(tab) {
    const content = document.getElementById('mkt-content')
    const list = tab === 'buy' ? others : myListings

    if (list.length === 0) {
      content.innerHTML = `<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${tab === 'buy' ? 'Aucune carte en vente actuellement.' : 'Tu n\'as aucune vente pour le moment.'}
      </div>`
      return
    }

    // Pour "Mes ventes" : grouper actives en premier, puis vendues (plus récentes d'abord)
    const sortedList = tab === 'mine'
      ? [...list].sort((a,b) => {
          if (a.status !== b.status) return a.status === 'active' ? -1 : 1
          return new Date(b.listed_at) - new Date(a.listed_at)
        })
      : list

    content.innerHTML = `<div style="display:flex;flex-direction:column;gap:10px">
      ${sortedList.map(l => {
        const p = l.card?.player
        if (!p) return ''
        const note = p.job === 'GK' ? p.note_g : p.job === 'DEF' ? p.note_d : p.job === 'MIL' ? p.note_m : p.note_a
        const rarColor = RARITY_COLORS[p.rarity]
        const canAfford = (state.profile.credits || 0) >= l.price
        const isSold = l.status === 'sold'

        return `<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${isSold?'opacity:0.65':''}">
          <div style="width:44px;height:44px;border-radius:8px;background:${jobColor(p.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${rarColor};flex-shrink:0">${note}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${p.firstname} ${p.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${p.country_code} · ${p.clubs?.encoded_name || '—'} · ${p.rarity} · ${p.job}</div>
            ${tab === 'buy'
              ? `<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${l.seller?.pseudo || '—'}</div>`
              : isSold
                ? `<div style="font-size:11px;color:var(--green)">✅ Vendu à ${l.buyer?.pseudo || '—'} · ${l.sold_at ? new Date(l.sold_at).toLocaleDateString('fr') : ''}</div>`
                : `<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(l.listed_at).toLocaleDateString('fr')}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${l.price.toLocaleString('fr')}</div>
            ${tab === 'buy'
              ? `<button class="btn btn-primary btn-sm" data-buy="${l.id}" ${!canAfford ? 'disabled' : ''} style="margin-top:4px">${canAfford ? 'Acheter' : 'Trop cher'}</button>`
              : isSold
                ? `<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>`
                : `<button class="btn btn-danger btn-sm" data-cancel="${l.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`
      }).join('')}
    </div>`

    // Achat
    content.querySelectorAll('[data-buy]').forEach(btn => {
      btn.addEventListener('click', () => buyCard(btn.dataset.buy, list, container, ctx))
    })
    // Annulation
    content.querySelectorAll('[data-cancel]').forEach(btn => {
      btn.addEventListener('click', () => cancelListing(btn.dataset.cancel, container, ctx))
    })
  }

  renderTab('buy')

  container.querySelectorAll('.mkt-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.mkt-tab').forEach(t => {
        const active = t === tab
        t.style.background  = active ? 'var(--green)' : '#fff'
        t.style.color       = active ? '#fff' : 'var(--gray-600)'
        t.style.borderColor = active ? 'var(--green)' : 'var(--gray-200)'
      })
      renderTab(tab.dataset.tab)
    })
  })
}

// ── Achat de carte ────────────────────────────────────────
async function buyCard(listingId, list, container, ctx) {
  const { state, toast } = ctx
  const listing = list.find(l => l.id === listingId)
  if (!listing) return

  const price    = listing.price
  const myCredit = state.profile.credits || 0
  const player   = listing.card?.player

  if (myCredit < price) { toast('Crédits insuffisants', 'error'); return }
  if (!confirm(`Acheter ${player?.firstname} ${player?.surname_encoded} pour ${price.toLocaleString('fr')} crédits ?`)) return

  // Désactiver le bouton pendant la transaction
  const btn = document.querySelector(`[data-buy="${listingId}"]`)
  if (btn) { btn.disabled = true; btn.textContent = '⏳' }

  try {
    // Transaction atomique côté serveur (RPC) : transfère la carte, met à jour
    // les crédits des deux parties, marque l'annonce vendue, notifie le vendeur.
    // Contourne les limitations RLS qui empêchent un acheteur de modifier
    // la ligne 'users' ou 'market_listings' du vendeur.
    const { data: result, error: rpcErr } = await supabase
      .rpc('buy_market_card', { p_listing_id: listingId, p_buyer_id: state.profile.id })

    if (rpcErr) throw new Error(rpcErr.message)
    if (!result?.success) throw new Error(result?.error || 'Achat impossible')

    // Enregistrer le transfert (club acheteur + prix) dans l'historique de CETTE carte
    if (listing.card_id || listing.card?.id) {
      const cardId = listing.card_id || listing.card.id
      supabase.rpc('record_transfer', {
        p_card_id: cardId,
        p_player_id: player?.id || null,
        p_club_name: state.profile.club_name || state.profile.pseudo,
        p_manager_name: state.profile.pseudo,
        p_source: 'market', p_price: price
      }).then(()=>{}).catch(()=>{})
    }

    // Mettre à jour les crédits localement
    state.profile.credits = myCredit - price

    const headerCredits = document.querySelector('[data-credits]') || document.querySelector('.credits-display')
    if (headerCredits) headerCredits.textContent = (myCredit - price).toLocaleString('fr') + ' cr.'

    toast(`✅ ${player?.surname_encoded} ajouté à ta collection !`, 'success')
    loadMarket(container, ctx)

  } catch (err) {
    toast('❌ ' + err.message, 'error')
    if (btn) { btn.disabled = false; btn.textContent = 'Acheter' }
  }
}

// ── Annuler une annonce ───────────────────────────────────
async function cancelListing(listingId, container, ctx) {
  const { toast } = ctx
  const { data: listing } = await supabase.from('market_listings').select('card_id').eq('id', listingId).single()

  await supabase.from('market_listings').update({ status: 'cancelled' }).eq('id', listingId)
  if (listing) {
    await supabase.from('cards').update({ is_for_sale: false, sale_price: null }).eq('id', listing.card_id)
  }
  toast('Annonce retirée', 'success')
  loadMarket(container, ctx)
}

function jobColor(job) {
  return { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }[job] || '#888'
}
