import { supabase } from '../../lib/supabase.js'

export async function renderSoloMode(container, helpers) {
  const { toast } = helpers
  const { data: levels, error } = await supabase
    .from('solo_levels')
    .select('*')
    .order('level_number')

  if (error) { container.innerHTML = `<p style="color:var(--danger)">${error.message}</p>`; return }

  const rowHTML = (lvl) => `
    <tr data-row="${lvl.id}">
      <td style="padding:4px 8px;text-align:center">
        <input data-field="level_number" data-id="${lvl.id}" type="number" min="1" value="${lvl.level_number}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="target_note_avg" data-id="${lvl.id}" type="number" min="0" max="999" step="0.5" value="${lvl.target_note_avg}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_jaune" data-id="${lvl.id}" type="number" min="0" value="${lvl.nb_liens_jaune}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_vert" data-id="${lvl.id}" type="number" min="0" value="${lvl.nb_liens_vert}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_joueurs_stade" data-id="${lvl.id}" type="number" min="0" max="16" value="${lvl.nb_joueurs_stade}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="reward_credits" data-id="${lvl.id}" type="number" min="0" value="${lvl.reward_credits}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <input data-field="is_active" data-id="${lvl.id}" type="checkbox" ${lvl.is_active?'checked':''} style="width:18px;height:18px;cursor:pointer">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${lvl.id}">🗑️</button>
      </td>
    </tr>`

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🎮 Solo Mode — Niveaux</h2>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">
          Chaque niveau se débloque après victoire sur le précédent. Le choix des cartes précises reste piloté par l'IA ;
          ces paramètres définissent seulement le profil global de l'adversaire.
        </div>
      </div>
      <button id="solo-add-row" class="btn btn-primary">+ Ajouter un niveau</button>
    </div>

    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="text-align:center">Niveau</th>
              <th>Note globale visée<br><span style="font-weight:400;font-size:10px">(moyenne / 16 joueurs)</span></th>
              <th style="text-align:center">Liens jaunes</th>
              <th style="text-align:center">Liens verts</th>
              <th style="text-align:center">Joueurs liés au stade</th>
              <th style="text-align:right">Récompense (cr.)</th>
              <th style="text-align:center">Actif</th>
              <th style="text-align:center">Actions</th>
            </tr>
          </thead>
          <tbody id="solo-tbody">
            ${(levels||[]).map(rowHTML).join('') || '<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `

  function bindRowInputs() {
    document.querySelectorAll('#solo-tbody [data-field]').forEach(el => {
      el.addEventListener('change', () => saveCell(el))
    })
  }

  async function saveCell(input) {
    const id    = input.dataset.id
    const field = input.dataset.field
    const value = field === 'is_active' ? input.checked
                : field === 'target_note_avg' ? Number(input.value) || 0
                : Number(input.value) || 0

    const { error } = await supabase.from('solo_levels').update({ [field]: value }).eq('id', id)
    if (error) { toast(error.message, 'error'); return }
    input.style.transition = 'background .3s'
    input.style.background = '#e8f8ee'
    setTimeout(() => { input.style.background = '' }, 500)
  }
  bindRowInputs()

  document.querySelectorAll('[data-del-row]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.')) return
      await supabase.from('solo_levels').delete().eq('id', btn.dataset.delRow)
      toast('Niveau supprimé', 'success')
      renderSoloMode(container, helpers)
    })
  })

  document.getElementById('solo-add-row')?.addEventListener('click', async () => {
    const maxLevel = Math.max(0, ...(levels||[]).map(l => l.level_number))
    const defaults = {
      level_number: maxLevel + 1, target_note_avg: 10,
      nb_liens_jaune: 2, nb_liens_vert: 1, nb_joueurs_stade: 2,
      reward_credits: 500, is_active: true,
    }
    const { data, error } = await supabase.from('solo_levels').insert(defaults).select().single()
    if (error) { toast(error.message, 'error'); return }
    toast('Niveau ajouté — modifie les valeurs directement', 'success')
    renderSoloMode(container, helpers)
  })
}
