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
  await renderPriceGrid(helpers)
}

// Empêche la fermeture du modal au clic sur le fond noir (édition en cours = pas de perte accidentelle)
function blockBackdropClose() {
  const overlay = document.getElementById('modal-overlay')
  if (!overlay || overlay._pgBlocker) return
  const blocker = (e) => { if (e.target === e.currentTarget) e.stopImmediatePropagation() }
  overlay.addEventListener('click', blocker, true) // phase de capture : s'exécute avant le handler de fermeture
  overlay._pgBlocker = blocker
}
function unblockBackdropClose() {
  const overlay = document.getElementById('modal-overlay')
  if (overlay?._pgBlocker) {
    overlay.removeEventListener('click', overlay._pgBlocker, true)
    delete overlay._pgBlocker
  }
}

async function renderPriceGrid(helpers) {
  const { openModal, closeModal, toast } = helpers
  const { data: configs, error } = await supabase
    .from('sell_price_configs')
    .select('*')
    .order('rarity').order('note_min')

  if (error) { toast(error.message, 'error'); return }

  const rarityOptions = (selected) => RARITIES.map(r => `<option value="${r.value}" ${r.value===selected?'selected':''}>${r.label}</option>`).join('')

  const rowHTML = (cfg) => `
    <tr data-row="${cfg.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${cfg.id}" style="width:100%;padding:6px;font-size:13px">${rarityOptions(cfg.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${cfg.id}" type="number" min="0" max="999" value="${cfg.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${cfg.id}" type="number" min="0" max="999" value="${cfg.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${cfg.id}" type="number" min="0" value="${cfg.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${cfg.id}" type="number" min="0" value="${cfg.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${cfg.id}">🗑️</button>
      </td>
    </tr>`

  const bodyHTML = `
    <p style="font-size:13px;color:#666;margin-bottom:14px">
      Définit la fourchette de prix autorisée à la vente sur le marché, selon la rareté et la note du joueur.
      Modifie une cellule et quitte-la (Tab/clic ailleurs) pour enregistrer automatiquement — comme dans un tableur.
    </p>
    <div style="max-height:400px;overflow-y:auto;margin-bottom:14px">
      <table>
        <thead>
          <tr><th>Rareté</th><th style="text-align:center">Note min</th><th style="text-align:center">Note max</th><th style="text-align:right">Prix min</th><th style="text-align:right">Prix max</th><th style="text-align:center">Actions</th></tr>
        </thead>
        <tbody id="pg-tbody">
          ${(configs||[]).map(rowHTML).join('') || '<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `
  const footerHTML = `
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `

  openModal('📊 Grille des prix — vente marché', bodyHTML, footerHTML)
  blockBackdropClose()

  document.getElementById('pg-close')?.addEventListener('click', () => {
    unblockBackdropClose()
    closeModal()
  })

  // ── Sauvegarde automatique par cellule (change = quitte la cellule) ──────
  function saveCell(input) {
    const id    = input.dataset.id
    const field = input.dataset.field
    const value = (field === 'rarity') ? input.value : (Number(input.value) || 0)
    return updateRow(id, { [field]: value }, input)
  }

  async function updateRow(id, patch, inputEl) {
    // Validation cohérente en relisant les autres cellules de la même ligne
    const row = document.querySelector(`tr[data-row="${id}"]`)
    const get = (f) => row.querySelector(`[data-field="${f}"]`)
    const noteMin  = 'note_min'  in patch ? patch.note_min  : Number(get('note_min').value)
    const noteMax  = 'note_max'  in patch ? patch.note_max  : Number(get('note_max').value)
    const priceMin = 'price_min' in patch ? patch.price_min : Number(get('price_min').value)
    const priceMax = 'price_max' in patch ? patch.price_max : Number(get('price_max').value)

    if (noteMin > noteMax)   { toast('Note min doit être ≤ note max', 'error'); return }
    if (priceMin > priceMax) { toast('Prix min doit être ≤ prix max', 'error'); return }

    const { error } = await supabase.from('sell_price_configs').update(patch).eq('id', id)
    if (error) { toast(error.message, 'error'); return }

    // Petit flash visuel de confirmation sur la cellule modifiée
    if (inputEl) {
      inputEl.style.transition = 'background .3s'
      inputEl.style.background = '#e8f8ee'
      setTimeout(() => { inputEl.style.background = '' }, 500)
    }
  }

  function bindRowInputs() {
    document.querySelectorAll('#pg-tbody [data-field]').forEach(el => {
      el.addEventListener('change', () => saveCell(el))
    })
  }
  bindRowInputs()

  document.querySelectorAll('[data-del-row]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer cette ligne ?')) return
      await supabase.from('sell_price_configs').delete().eq('id', btn.dataset.delRow)
      toast('Ligne supprimée', 'success')
      unblockBackdropClose()
      renderPriceGrid(helpers)
    })
  })

  document.getElementById('pg-add-row')?.addEventListener('click', async () => {
    const defaults = { rarity: 'normal', note_min: 0, note_max: 20, price_min: 2500, price_max: 15000 }
    const { data, error } = await supabase.from('sell_price_configs').insert(defaults).select().single()
    if (error) { toast(error.message, 'error'); return }
    const tbody = document.getElementById('pg-tbody')
    if (tbody.querySelector('td[colspan]')) tbody.innerHTML = ''
    tbody.insertAdjacentHTML('beforeend', rowHTML(data))
    bindRowInputs()
    document.querySelector(`[data-del-row="${data.id}"]`)?.addEventListener('click', async function() {
      if (!confirm('Supprimer cette ligne ?')) return
      await supabase.from('sell_price_configs').delete().eq('id', data.id)
      toast('Ligne supprimée', 'success')
      unblockBackdropClose()
      renderPriceGrid(helpers)
    })
    toast('Ligne ajoutée — modifie les valeurs directement', 'success')
  })
}
