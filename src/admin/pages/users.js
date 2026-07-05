import { supabase } from '../../lib/supabase.js'
import { getTier } from '../../ranked/glicko2.js'

export async function pageUsers(container, { toast }) {
  const { data, error } = await supabase
    .from('users')
    .select('id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws')
    .order('created_at', { ascending: false })

  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }

  const users = data || []

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${users.length} manager(s)</span>
    </div>
    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Manager</th>
              <th>Crédits / Niv.</th>
              <th>Matchs (V/N/D)</th>
              <th>Trophées</th>
              <th>⚔️ Ranked</th>
              <th>MMR (caché)</th>
              <th>Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="users-tbody"></tbody>
        </table>
      </div>
    </div>
  `

  renderRows(users)
  document.getElementById('search-users').addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    renderRows(users.filter(u => u.pseudo.toLowerCase().includes(q) || u.club_name?.toLowerCase().includes(q)))
  })

  function renderRows(list) {
    document.getElementById('users-tbody').innerHTML = list.map(u => {
      const mmr      = u.mmr ?? 1000
      const rd       = u.mmr_deviation ?? 350
      const placed   = u.placement_matches ?? 0
      const tier     = getTier(mmr)
      const rWins    = u.ranked_wins   ?? 0
      const rLosses  = u.ranked_losses ?? 0
      const rDraws   = u.ranked_draws  ?? 0
      const rTotal   = rWins + rLosses + rDraws
      const wr       = rTotal > 0 ? Math.round(rWins / rTotal * 100) : null
      const isPlacement = placed < 10

      // Couleur RD : vert = stable, orange = incertain, rouge = très incertain
      const rdColor  = rd < 80 ? '#1A6B3C' : rd < 150 ? '#e67e22' : '#bb2020'

      return `
        <tr>
          <td>
            <div style="font-weight:700">${u.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.club_name || '—'}</div>
          </td>
          <td style="font-size:12px">
            <div>${(u.credits||0).toLocaleString('fr')} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${u.level}</div>
          </td>
          <td style="font-size:12px">${u.wins}V / ${u.draws}N / ${u.losses}D</td>
          <td style="font-size:12px">🥇${u.trophies_top1} 🥈${u.trophies_top2} 🥉${u.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${tier.emoji}</span>
              <span style="font-weight:700;color:${tier.color}">${tier.label}</span>
            </div>
            ${isPlacement
              ? `<div style="font-size:10px;color:#e67e22">${placed}/10 placement${placed < 10 ? ` (${10-placed} restants)` : ''}</div>`
              : `<div style="font-size:10px;color:var(--gray-600)">${rWins}V ${rDraws}N ${rLosses}D${wr !== null ? ` · ${wr}% WR` : ''}</div>`
            }
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${mmr}</div>
            <div style="font-size:10px;color:${rdColor}">RD ±${Math.round(rd)}</div>
          </td>
          <td>
            ${u.is_admin
              ? '<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>'
              : '<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${u.id}" data-is-admin="${u.is_admin}">
              ${u.is_admin ? '🔒 Retirer' : '🔓 Admin'}
            </button>
          </td>
        </tr>`
    }).join('')

    document.querySelectorAll('[data-toggle-admin]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const newVal = btn.dataset.isAdmin === 'true' ? false : true
        if (!confirm(`Voulez-vous ${newVal ? 'rendre admin' : 'retirer le rôle admin'} de ce Manager ?`)) return
        const { error } = await supabase.from('users').update({ is_admin: newVal }).eq('id', btn.dataset.toggleAdmin)
        if (error) toast(error.message, 'error')
        else { toast('Rôle mis à jour ✅', 'success'); pageUsers(container, { toast }) }
      })
    })
  }
}
