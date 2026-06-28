import { supabase } from '../../lib/supabase.js'

const RARITIES = [
  { value: 'normal',  label: 'Normal',  color: '#888' },
  { value: 'pepite',  label: 'Pépite',  color: '#D4A017' },
  { value: 'papyte',  label: 'Papyte',  color: '#909090' },
  { value: 'legende', label: 'Légende', color: '#7a28b8' },
]

export async function renderSellPriceConfig(container) {
  await load(container)
}

async function load(container) {
  const { data: configs, error } = await supabase
    .from('sell_price_configs')
    .select('*')
    .order('rarity').order('note_min')

  if (error) {
    container.innerHTML = `<div style="padding:24px;color:red">Erreur : ${error.message}</div>`
    return
  }

  container.innerHTML = `
    <div style="padding:20px;max-width:720px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">💰 Prix de vente directe</h2>
        <button id="add-config" class="btn btn-primary">+ Ajouter</button>
      </div>
      <p style="font-size:13px;color:#666;margin-bottom:16px">
        Configure le prix de vente directe selon la rareté et la plage de notes.
        La règle la plus précise (plage de notes la plus étroite) est appliquée en priorité.
      </p>

      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.1)">
        <thead>
          <tr style="background:#f5f5f5;font-size:12px;text-transform:uppercase;color:#666">
            <th style="padding:10px 14px;text-align:left">Rareté</th>
            <th style="padding:10px 14px;text-align:center">Note min</th>
            <th style="padding:10px 14px;text-align:center">Note max</th>
            <th style="padding:10px 14px;text-align:right">Prix (crédits)</th>
            <th style="padding:10px 14px;text-align:center">Actions</th>
          </tr>
        </thead>
        <tbody id="configs-tbody">
          ${(configs || []).map(cfg => rowHTML(cfg)).join('')}
        </tbody>
      </table>

      <!-- Formulaire ajout/édition -->
      <div id="config-form" style="display:none;margin-top:20px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 6px rgba(0,0,0,0.1)">
        <h3 id="form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouvelle règle</h3>
        <input type="hidden" id="form-id">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">RARETÉ</label>
            <select id="form-rarity" style="width:100%;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
              ${RARITIES.map(r => `<option value="${r.value}">${r.label}</option>`).join('')}
            </select>
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">PRIX (crédits)</label>
            <input id="form-price" type="number" min="0" value="1000"
              style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOTE MIN</label>
            <input id="form-note-min" type="number" min="1" max="20" value="1"
              style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOTE MAX</label>
            <input id="form-note-max" type="number" min="1" max="20" value="10"
              style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
        </div>
        <div style="display:flex;gap:10px">
          <button id="form-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
          <button id="form-save" class="btn btn-primary" style="flex:1">Enregistrer</button>
        </div>
      </div>
    </div>`

  // Bouton ajouter
  document.getElementById('add-config').addEventListener('click', () => openForm(null))
  document.getElementById('form-cancel').addEventListener('click', () => {
    document.getElementById('config-form').style.display = 'none'
  })
  document.getElementById('form-save').addEventListener('click', () => saveForm(container))

  // Boutons éditer/supprimer
  container.querySelectorAll('[data-edit]').forEach(btn => {
    const cfg = (configs||[]).find(c => c.id === btn.dataset.edit)
    if (cfg) btn.addEventListener('click', () => openForm(cfg))
  })
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer cette règle ?')) return
      await supabase.from('sell_price_configs').delete().eq('id', btn.dataset.delete)
      await load(container)
    })
  })
}

function rowHTML(cfg) {
  const rar = RARITIES.find(r => r.value === cfg.rarity)
  return `
    <tr style="border-top:1px solid #f0f0f0">
      <td style="padding:10px 14px">
        <span style="font-weight:700;color:${rar?.color||'#888'}">${rar?.label||cfg.rarity}</span>
      </td>
      <td style="padding:10px 14px;text-align:center">${cfg.note_min}</td>
      <td style="padding:10px 14px;text-align:center">${cfg.note_max}</td>
      <td style="padding:10px 14px;text-align:right;font-weight:900;color:#D4A017">${(cfg.price||0).toLocaleString('fr')} cr.</td>
      <td style="padding:10px 14px;text-align:center">
        <div style="display:flex;gap:6px;justify-content:center">
          <button data-edit="${cfg.id}" class="btn btn-ghost btn-sm">✏️</button>
          <button data-delete="${cfg.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
        </div>
      </td>
    </tr>`
}

function openForm(cfg) {
  document.getElementById('config-form').style.display = 'block'
  document.getElementById('form-title').textContent = cfg ? 'Modifier la règle' : 'Nouvelle règle'
  document.getElementById('form-id').value = cfg?.id || ''
  document.getElementById('form-rarity').value = cfg?.rarity || 'normal'
  document.getElementById('form-price').value = cfg?.price || 1000
  document.getElementById('form-note-min').value = cfg?.note_min ?? 1
  document.getElementById('form-note-max').value = cfg?.note_max ?? 10
  document.getElementById('config-form').scrollIntoView({ behavior: 'smooth' })
}

async function saveForm(container) {
  const id       = document.getElementById('form-id').value
  const rarity   = document.getElementById('form-rarity').value
  const price    = parseInt(document.getElementById('form-price').value) || 0
  const note_min = parseInt(document.getElementById('form-note-min').value) || 1
  const note_max = parseInt(document.getElementById('form-note-max').value) || 10

  if (note_min > note_max) { alert('Note min doit être ≤ note max'); return }

  const payload = { rarity, price, note_min, note_max, updated_at: new Date().toISOString() }

  let error
  if (id) {
    ({ error } = await supabase.from('sell_price_configs').update(payload).eq('id', id))
  } else {
    ({ error } = await supabase.from('sell_price_configs').insert(payload))
  }

  if (error) { alert('Erreur : ' + error.message); return }
  document.getElementById('config-form').style.display = 'none'
  await load(container)
}
