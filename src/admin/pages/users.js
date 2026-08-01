import { supabase } from '../../lib/supabase.js'
import { getTier } from '../../ranked/glicko2.js'
import { renderPlayerCard } from '../../components/player-card.js'
import { renderGCCard, renderStadiumCard, renderFormationCard } from '../../components/special-cards.js'
import { FORMATION_POSITIONS } from '../../match/formation-links.js'

const ONLINE_THRESHOLD_MS = 2 * 60 * 1000 // 2 minutes sans heartbeat = hors ligne
function isOnline(u) {
  if (!u.last_seen) return false
  return (Date.now() - new Date(u.last_seen).getTime()) < ONLINE_THRESHOLD_MS
}

export async function pageUsers(container, { toast }) {
  const [{ data, error }, { data: soloProgress }, { data: emails }] = await Promise.all([
    supabase
      .from('users')
      .select('id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen')
      .order('created_at', { ascending: false }),
    supabase.from('user_solo_progress').select('user_id, unlocked_level'),
    supabase.rpc('admin_get_user_emails'),
  ])

  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }

  const soloLevelMap = {}
  ;(soloProgress || []).forEach(p => { soloLevelMap[p.user_id] = p.unlocked_level })
  const emailMap = {}
  ;(emails || []).forEach(e => { emailMap[e.id] = e.email })

  const users = data || []

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;user-select:none">
          <input type="checkbox" id="filter-online" style="width:16px;height:16px;cursor:pointer">
          <span>🟢 En ligne uniquement (<span id="online-count">0</span>)</span>
        </label>
      </div>
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

  function updateOnlineCount(list) {
    const el = document.getElementById('online-count')
    if (el) el.textContent = list.filter(isOnline).length
  }

  function applyFilters() {
    const q = document.getElementById('search-users').value.toLowerCase()
    const onlineOnly = document.getElementById('filter-online').checked
    renderRows(users.filter(u =>
      (u.pseudo.toLowerCase().includes(q) || u.club_name?.toLowerCase().includes(q)) &&
      (!onlineOnly || isOnline(u))
    ))
  }

  renderRows(users)
  updateOnlineCount(users)
  document.getElementById('search-users').addEventListener('input', applyFilters)
  document.getElementById('filter-online').addEventListener('change', applyFilters)

  // Rafraîchit le statut "en ligne" toutes les 20s (léger : uniquement last_seen)
  const refreshInterval = setInterval(async () => {
    const { data: fresh } = await supabase.from('users').select('id,last_seen')
    if (!fresh) return
    const freshMap = {}
    fresh.forEach(f => { freshMap[f.id] = f.last_seen })
    users.forEach(u => { u.last_seen = freshMap[u.id] ?? u.last_seen })
    updateOnlineCount(users)
    document.querySelectorAll('[data-online-dot]').forEach(dot => {
      const u = users.find(x => x.id === dot.dataset.onlineDot)
      if (u) dot.style.background = isOnline(u) ? '#22c55e' : 'transparent'
    })
  }, 20000)
  // Nettoyage si on quitte la page admin (évite les intervals qui s'accumulent)
  const observer = new MutationObserver(() => {
    if (!document.body.contains(container)) { clearInterval(refreshInterval); observer.disconnect() }
  })
  observer.observe(document.body, { childList: true, subtree: true })

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
            <div style="display:flex;align-items:center;gap:6px">
              <span data-online-dot="${u.id}" title="${isOnline(u) ? 'En ligne' : 'Hors ligne'}"
                style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${isOnline(u) ? '#22c55e' : 'transparent'};border:1px solid ${isOnline(u) ? '#22c55e' : 'var(--gray-300,#ccc)'}"></span>
              <div style="font-weight:700">${u.pseudo}</div>
            </div>
            <div style="font-size:11px;color:var(--gray-600);margin-left:14px">${u.club_name || '—'}</div>
            <div style="font-size:10.5px;color:var(--gray-600);margin-left:14px">${emailMap[u.id] || '—'}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${u.id}">${(u.credits||0).toLocaleString('fr')} cr.</span>
              <button class="btn-edit-credits" data-user="${u.id}" data-current="${u.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">🎮 Solo max : niv. ${soloLevelMap[u.id] ?? 1}</div>
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
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${u.id}" data-is-admin="${u.is_admin}">
              ${u.is_admin ? '🔒 Retirer' : '🔓 Admin'}
            </button>
            <button class="btn btn-ghost btn-sm" data-view-cards="${u.id}" data-pseudo="${u.pseudo}"
              title="Voir toutes les cartes et équipes de ce Manager">🃏</button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${u.id}" data-pseudo="${u.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`
    }).join('')

    document.querySelectorAll('.btn-edit-credits').forEach(btn => {
      btn.addEventListener('click', async () => {
        const userId = btn.dataset.user
        const current = Number(btn.dataset.current) || 0
        const input = prompt('Nouveau solde de crédits :', current)
        if (input === null) return
        const newVal = parseInt(input.replace(/\s/g, ''), 10)
        if (isNaN(newVal) || newVal < 0) { toast('Valeur invalide', 'error'); return }
        const { data, error } = await supabase.rpc('admin_update_user_credits', {
          p_user_id: userId, p_new_credits: newVal,
        })
        if (error) { toast(error.message, 'error'); return }
        if (!data?.success) { toast(data?.error || 'Échec de la mise à jour', 'error'); return }
        toast('Crédits mis à jour ✅', 'success')
        const display = document.getElementById(`credits-display-${userId}`)
        if (display) display.textContent = `${newVal.toLocaleString('fr')} cr.`
        btn.dataset.current = newVal
      })
    })

    document.querySelectorAll('[data-toggle-admin]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const newVal = btn.dataset.isAdmin === 'true' ? false : true
        if (!confirm(`Voulez-vous ${newVal ? 'rendre admin' : 'retirer le rôle admin'} de ce Manager ?`)) return
        const { error } = await supabase.from('users').update({ is_admin: newVal }).eq('id', btn.dataset.toggleAdmin)
        if (error) toast(error.message, 'error')
        else { toast('Rôle mis à jour ✅', 'success'); pageUsers(container, { toast }) }
      })
    })

    // Voir toute la collection d'un Manager
    document.querySelectorAll('[data-view-cards]').forEach(btn => {
      btn.addEventListener('click', () => {
        openManagerCardsModal(btn.dataset.viewCards, btn.dataset.pseudo, toast)
      })
    })

    // Supprimer un Manager (cascade delete)
    document.querySelectorAll('[data-delete-manager]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const userId = btn.dataset.deleteManager
        const pseudo = btn.dataset.pseudo
        if (!confirm(`⚠️ ATTENTION: Supprimer le Manager "${pseudo}" supprimera DÉFINITIVEMENT:\n- Tous ses decks\n- Toutes ses cartes\n- Tous ses matchs\n- Tous ses résultats ranked\n- Tout ce qui le lie en base\n\nContinuer ?`)) return
        if (!confirm(`Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE.`)) return

        btn.disabled = true
        btn.textContent = '⏳'
        const { data, error } = await supabase.rpc('delete_manager_cascade', { p_user_id: userId })
        if (error) { toast(`Erreur: ${error.message}`, 'error'); btn.disabled = false; btn.textContent = '🗑️'; return }
        if (!data?.success) { toast(`Erreur: ${data?.error || 'Suppression échouée'}`, 'error'); btn.disabled = false; btn.textContent = '🗑️'; return }
        toast(`Manager "${pseudo}" supprimé et ${Object.values(data.deleted).reduce((a,b)=>a+b)} entrées supprimées ✅`, 'success')
        pageUsers(container, { toast })
      })
    })
  }
}

// ── Modale : toute la collection d'un manager (cartes + équipes) ──────────
const CARD_TABS = [
  { key: 'player',       label: '⚽ Joueurs' },
  { key: 'formation',    label: '📋 Formations' },
  { key: 'stadium',      label: '🏟️ Stades' },
  { key: 'game_changer', label: '⚡ Game Changers' },
  { key: 'decks',        label: '👥 Équipes' },
]

function gcImgUrl(def) {
  if (def?.image_url) return `${import.meta.env.BASE_URL}icons/${def.image_url}`
  return null
}
function stadImgUrl(def) {
  if (def?.image_url) return `${import.meta.env.BASE_URL}icons/${def.image_url}`
  if (def?.club?.logo_url) return def.club.logo_url
  if (def?.country_code) return `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png`
  return null
}

function renderCardsGrid(html) {
  if (!html) return `<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>`
  return `<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${html}</div>`
}

async function openManagerCardsModal(userId, pseudo, toast) {
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.style.zIndex = '3000'
  overlay.innerHTML = `<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${pseudo}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`
  document.body.appendChild(overlay)
  const cleanup = () => overlay.remove()
  overlay.querySelector('#mc-close').addEventListener('click', cleanup)
  overlay.addEventListener('click', e => { if (e.target === overlay) cleanup() })

  const { data, error } = await supabase.rpc('admin_get_manager_collection', { p_user_id: userId })
  const body = overlay.querySelector('#mc-body')
  if (!body) return
  if (error || !data?.success) {
    body.innerHTML = `<div style="padding:20px;color:#bb2020">Erreur : ${error?.message || data?.error || 'chargement impossible'}</div>`
    return
  }

  const cards = data.cards || []
  const decks = data.decks || []
  const byType = {
    player:       cards.filter(c => c.card_type === 'player' && c.player),
    formation:    cards.filter(c => c.card_type === 'formation'),
    stadium:      cards.filter(c => c.card_type === 'stadium'),
    game_changer: cards.filter(c => c.card_type === 'game_changer'),
  }

  const counts = {
    player: byType.player.length,
    formation: byType.formation.length,
    stadium: byType.stadium.length,
    game_changer: byType.game_changer.length,
    decks: decks.length,
  }

  // ── Contenu de chaque onglet ──
  const panes = {}

  panes.player = renderCardsGrid(byType.player.map(c => {
    const p = { ...c.player, _evolution_bonus: c.evolution_bonus || 0 }
    const forSale = c.is_for_sale
      ? `<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>`
      : ''
    return `<div style="position:relative">${forSale}${renderPlayerCard(p, { width: 110 })}</div>`
  }).join(''))

  panes.formation = renderCardsGrid(byType.formation.map(c =>
    `<div style="position:relative">${renderFormationCard(c.formation, FORMATION_POSITIONS[c.formation], { width: 120 })}</div>`
  ).join(''))

  panes.stadium = renderCardsGrid(byType.stadium.map(c => {
    const def = c.stadium_def
    const label = def?.club?.encoded_name || def?.country_code || '—'
    return `<div style="position:relative">${renderStadiumCard(def?.name || '?', stadImgUrl(def), `${label}<br>+10 ⭐ joueurs alliés`, { width: 120 })}</div>`
  }).join(''))

  panes.game_changer = renderCardsGrid(byType.game_changer.map(c => {
    const def = c.gc_def
    return `<div style="position:relative">${renderGCCard(def?.name || c.gc_type || 'Game Changer', gcImgUrl(def), '⚡', def?.effect || '', { width: 120 })}</div>`
  }).join(''))

  panes.decks = decks.length
    ? decks.map(dk => {
        const dkCards = dk.cards || []
        const starters = dkCards.filter(c => c.is_starter)
        const subs     = dkCards.filter(c => !c.is_starter)
        const mini = (c) => {
          const p = {
            firstname: c.firstname, surname_real: c.surname_real,
            country_code: c.country_code, job: c.job, job2: c.job2,
            note_g: c.note_g, note_d: c.note_d, note_m: c.note_m, note_a: c.note_a,
            rarity: c.rarity, face: c.face,
            clubs: c.club_encoded_name ? { encoded_name: c.club_encoded_name, logo_url: c.club_logo_url } : null,
            _evolution_bonus: c.evolution_bonus || 0,
          }
          return `<div style="position:relative">
            <div style="font-size:9px;color:#888;text-align:center;margin-bottom:2px">${c.position || ''}</div>
            ${renderPlayerCard(p, { width: 78 })}
          </div>`
        }
        return `<div style="margin-bottom:18px;padding:12px;border:1px solid var(--gray-200,#e0e0e0);border-radius:12px;background:#fafafa">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap">
            <div style="font-weight:800;font-size:14px;color:#1a1a1a">${dk.name || 'Deck sans nom'}</div>
            <div style="font-size:11px;color:#666">${dk.formation || '—'} · ${starters.length} titulaire(s)${subs.length ? ` · ${subs.length} remplaçant(s)` : ''}</div>
          </div>
          ${starters.length
            ? `<div style="display:flex;flex-wrap:wrap;gap:8px">${starters.map(mini).join('')}</div>`
            : `<div style="font-size:12px;color:#999">Aucun titulaire enregistré.</div>`}
          ${subs.length
            ? `<div style="margin-top:10px"><div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS</div>
               <div style="display:flex;flex-wrap:wrap;gap:8px">${subs.map(mini).join('')}</div></div>`
            : ''}
        </div>`
      }).join('')
    : `<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`

  // ── Onglets ──
  body.innerHTML = `
    <div style="display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--gray-200,#e0e0e0);padding-bottom:10px;margin-bottom:14px">
      ${CARD_TABS.map((t, i) => `
        <button class="mc-tab" data-tab="${t.key}" style="
          border:1px solid ${i===0 ? '#1A6B3C' : 'var(--gray-200,#ddd)'};
          background:${i===0 ? '#1A6B3C' : '#fff'};
          color:${i===0 ? '#fff' : '#444'};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${t.label} (${counts[t.key]})
        </button>`).join('')}
    </div>
    ${CARD_TABS.map((t, i) => `
      <div class="mc-pane" data-pane="${t.key}" style="display:${i===0 ? 'block' : 'none'}">${panes[t.key]}</div>
    `).join('')}
  `

  body.querySelectorAll('.mc-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      body.querySelectorAll('.mc-tab').forEach(b => {
        const active = b === btn
        b.style.background  = active ? '#1A6B3C' : '#fff'
        b.style.color       = active ? '#fff' : '#444'
        b.style.borderColor = active ? '#1A6B3C' : 'var(--gray-200,#ddd)'
      })
      body.querySelectorAll('.mc-pane').forEach(p => {
        p.style.display = p.dataset.pane === btn.dataset.tab ? 'block' : 'none'
      })
    })
  })
}
