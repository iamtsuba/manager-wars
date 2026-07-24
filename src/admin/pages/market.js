import { supabase } from '../../lib/supabase.js'

const RARITIES = [
  { value: 'normal',  label: 'Normal',  color: '#ccc' },
  { value: 'pepite',  label: 'Pépite',  color: '#D4A017' },
  { value: 'papyte',  label: 'Papyte',  color: '#909090' },
  { value: 'legende', label: 'Légende', color: '#7a28b8' },
]

export async function pageMarket(container, helpers) {
  const { toast } = helpers
  const { data, error } = await supabase
    .from('market_listings')
    .select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `)
    .order('listed_at', { ascending: false })
    .limit(100)

  if (error) { container.innerHTML = `<p style="color:var(--danger)">${error.message}</p>`; return }
  const listings = data || []
  const active   = listings.filter(l => l.status === 'active').length
  const sold     = listings.filter(l => l.status === 'sold').length

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${active}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${sold}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Vendues</div>
        </div>
      </div>
    </div>
    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Carte</th><th>Vendeur</th><th>Acheteur</th>
              <th>Prix</th><th>Statut</th><th>Date</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${listings.map(l => {
              const p = l.card?.player
              const name = p ? `${p.firstname} ${p.surname_real}` : l.card?.card_type || '—'
              const statusColor = { active:'#1A6B3C', sold:'#D4A017', cancelled:'#888' }
              return `<tr>
                <td><b>${name}</b>${p ? `<div style="font-size:10px;color:var(--tile-fg-dim)">${p.rarity} · ${p.job}</div>` : ''}</td>
                <td style="font-size:12px">${l.seller?.pseudo || '—'}</td>
                <td style="font-size:12px">${l.buyer?.pseudo || '—'}</td>
                <td style="font-size:13px;font-weight:600">${(l.price||0).toLocaleString('fr')} cr.</td>
                <td>
                  <span style="background:${statusColor[l.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${l.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:var(--tile-fg-dim)">${new Date(l.listed_at).toLocaleDateString('fr')}</td>
                <td>
                  ${l.status === 'active' ? `<button class="btn btn-danger btn-sm" data-cancel="${l.id}">Annuler</button>` : ''}
                </td>
              </tr>`
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `

  document.querySelectorAll('[data-cancel]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Annuler cette annonce ?')) return
      const { error } = await supabase
        .from('market_listings').update({ status: 'cancelled' }).eq('id', btn.dataset.cancel)
      if (error) toast(error.message, 'error')
      else { toast('Annonce annulée', 'success'); pageMarket(container, helpers) }
    })
  })

  document.getElementById('btn-price-grid')?.addEventListener('click', () => openPriceGridModal(helpers))
}

async function openPriceGridModal(helpers) {
  const { openModal, closeModal, toast } = helpers
  await renderPriceGrid(helpers)
}

async function renderPriceGrid(helpers) {
  const { openModal, closeModal, toast } = helpers
  const { data: configs, error } = await supabase
    .from('sell_price_configs')
    .select('*')
    .order('rarity').order('note_min')

  if (error) { toast(error.message, 'error'); return }

  const rowHTML = (cfg) => {
    const r = RARITIES.find(x => x.value === cfg.rarity) || RARITIES[0]
    return `<tr data-row="${cfg.id}">
      <td><span style="color:${r.color};font-weight:700">${r.label}</span></td>
      <td style="text-align:center">${cfg.note_min}</td>
      <td style="text-align:center">${cfg.note_max}</td>
      <td style="text-align:right">${(cfg.price_min||0).toLocaleString('fr')} cr.</td>
      <td style="text-align:right">${(cfg.price_max||0).toLocaleString('fr')} cr.</td>
      <td style="text-align:center">
        <button class="btn btn-ghost btn-sm" data-edit-row="${cfg.id}">✏️</button>
        <button class="btn btn-danger btn-sm" data-del-row="${cfg.id}">🗑️</button>
      </td>
    </tr>`
  }

  const bodyHTML = `
    <p style="font-size:13px;color:#666;margin-bottom:14px">
      Définit la fourchette de prix autorisée à la vente sur le marché, selon la rareté et la note du joueur.
      Ex : Normal, note 1 à 5 → vendable entre 2 500 et 15 000 cr.
    </p>
    <div style="max-height:320px;overflow-y:auto;margin-bottom:14px">
      <table>
        <thead>
          <tr><th>Rareté</th><th style="text-align:center">Note min</th><th style="text-align:center">Note max</th><th style="text-align:right">Prix min</th><th style="text-align:right">Prix max</th><th style="text-align:center">Actions</th></tr>
        </thead>
        <tbody id="pg-tbody">
          ${(configs||[]).map(rowHTML).join('') || '<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>

    <div id="pg-form" style="display:none;background:#f7f7f7;border-radius:10px;padding:14px;margin-top:10px">
      <input type="hidden" id="pg-id">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
        <div>
          <label>RARETÉ</label>
          <select id="pg-rarity">${RARITIES.map(r=>`<option value="${r.value}">${r.label}</option>`).join('')}</select>
        </div>
        <div></div>
        <div>
          <label>NOTE MIN</label>
          <input id="pg-note-min" type="number" min="0" max="999" value="0">
        </div>
        <div>
          <label>NOTE MAX</label>
          <input id="pg-note-max" type="number" min="0" max="999" value="20">
        </div>
        <div>
          <label>PRIX MIN (cr.)</label>
          <input id="pg-price-min" type="number" min="0" value="2500">
        </div>
        <div>
          <label>PRIX MAX (cr.)</label>
          <input id="pg-price-max" type="number" min="0" value="15000">
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="pg-form-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="pg-form-save" class="btn btn-primary" style="flex:1">Enregistrer la ligne</button>
      </div>
    </div>
  `
  const footerHTML = `
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `

  openModal('📊 Grille des prix — vente marché', bodyHTML, footerHTML)

  document.getElementById('pg-close')?.addEventListener('click', () => closeModal())

  document.getElementById('pg-add-row')?.addEventListener('click', () => {
    document.getElementById('pg-form').style.display = 'block'
    document.getElementById('pg-id').value = ''
    document.getElementById('pg-rarity').value = 'normal'
    document.getElementById('pg-note-min').value = 0
    document.getElementById('pg-note-max').value = 20
    document.getElementById('pg-price-min').value = 2500
    document.getElementById('pg-price-max').value = 15000
  })

  document.querySelectorAll('[data-edit-row]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cfg = (configs||[]).find(c => c.id === btn.dataset.editRow)
      if (!cfg) return
      document.getElementById('pg-form').style.display = 'block'
      document.getElementById('pg-id').value = cfg.id
      document.getElementById('pg-rarity').value = cfg.rarity
      document.getElementById('pg-note-min').value = cfg.note_min
      document.getElementById('pg-note-max').value = cfg.note_max
      document.getElementById('pg-price-min').value = cfg.price_min
      document.getElementById('pg-price-max').value = cfg.price_max
    })
  })

  document.querySelectorAll('[data-del-row]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer cette ligne ?')) return
      await supabase.from('sell_price_configs').delete().eq('id', btn.dataset.delRow)
      toast('Ligne supprimée', 'success')
      renderPriceGrid(helpers)
    })
  })

  document.getElementById('pg-form-cancel')?.addEventListener('click', () => {
    document.getElementById('pg-form').style.display = 'none'
  })

  document.getElementById('pg-form-save')?.addEventListener('click', async () => {
    const id = document.getElementById('pg-id').value
    const payload = {
      rarity:    document.getElementById('pg-rarity').value,
      note_min:  Number(document.getElementById('pg-note-min').value) || 0,
      note_max:  Number(document.getElementById('pg-note-max').value) || 0,
      price_min: Number(document.getElementById('pg-price-min').value) || 0,
      price_max: Number(document.getElementById('pg-price-max').value) || 0,
    }
    if (payload.price_min > payload.price_max) { toast('Le prix min doit être ≤ prix max', 'error'); return }
    if (payload.note_min > payload.note_max) { toast('La note min doit être ≤ note max', 'error'); return }

    const { error } = id
      ? await supabase.from('sell_price_configs').update(payload).eq('id', id)
      : await supabase.from('sell_price_configs').insert(payload)
    if (error) { toast(error.message, 'error'); return }
    toast('Règle enregistrée ✅', 'success')
    renderPriceGrid(helpers)
  })
}
