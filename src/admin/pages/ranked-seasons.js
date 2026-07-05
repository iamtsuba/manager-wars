import { supabase } from '../../lib/supabase.js'

/**
 * renderRankedSeasons — Admin page pour gérer les saisons ranked.
 *
 * Fonctionnalités :
 *   - Lister toutes les saisons (passées, active, futures)
 *   - Créer une nouvelle saison (nom, date début, date fin)
 *   - Modifier une saison existante
 *   - Activer une saison (désactive automatiquement l'autre)
 *   - Archiver / supprimer une saison sans matchs
 *   - Stats live de la saison active (nb joueurs classés, MMR moyen, distribution des tiers)
 */
export async function renderRankedSeasons(container, { toast, openModal, closeModal }) {
  await load(container, { toast, openModal, closeModal })
}

async function load(container, helpers) {
  const { toast, openModal, closeModal } = helpers

  const [{ data: seasons, error }, { data: stats }] = await Promise.all([
    supabase.from('ranked_seasons').select('*').order('start_at', { ascending: false }),
    supabase.from('users')
      .select('mmr,rank_tier,placement_matches')
      .gte('placement_matches', 1),
  ])

  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }

  const list      = seasons || []
  const active    = list.find(s => s.is_active)
  const players   = (stats || []).filter(u => (u.placement_matches || 0) >= 1)
  const placed    = players.filter(u => (u.placement_matches || 0) >= 10)

  // Distribution des tiers
  const TIERS = ['bronze','silver','gold','platinum','diamond','master']
  const TIER_LABELS = { bronze:'Bronze', silver:'Argent', gold:'Or', platinum:'Platine', diamond:'Diamant', master:'Maître' }
  const TIER_COLORS = { bronze:'#cd7f32', silver:'#a0a0a0', gold:'#D4A017', platinum:'#00e5ff', diamond:'#5b9bd5', master:'#9b59b6' }
  const TIER_EMOJI  = { bronze:'🥉', silver:'🥈', gold:'🥇', platinum:'💎', diamond:'🔷', master:'👑' }

  const tierDist = {}
  TIERS.forEach(t => { tierDist[t] = 0 })
  placed.forEach(u => { const t = u.rank_tier || 'bronze'; if (tierDist[t] !== undefined) tierDist[t]++ })
  const avgMmr = placed.length ? Math.round(placed.reduce((s, u) => s + (u.mmr || 1000), 0) / placed.length) : 0

  function fmt(dateStr) {
    if (!dateStr) return '—'
    return new Date(dateStr).toLocaleDateString('fr', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function statusBadge(s) {
    const now = new Date()
    if (s.is_active) return '<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>'
    if (new Date(s.end_at) < now) return '<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>'
    return '<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'
  }

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${active ? `
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${active.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${players.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${placed.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${avgMmr}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0, Math.ceil((new Date(active.end_at) - new Date()) / 86400000))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${placed.length > 0 ? `
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${TIERS.map(t => {
            const count = tierDist[t]
            const pct   = placed.length > 0 ? Math.round(count / placed.length * 100) : 0
            return `
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${TIER_EMOJI[t]} ${TIER_LABELS[t]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${pct}%;background:${TIER_COLORS[t]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${count} (${pct}%)</span>
              </div>`
          }).join('')}
        </div>` : '<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l\'instant.</div>'}
      </div>` : `
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${list.length})</div>
        <button class="btn btn-primary" id="create-season-btn">+ Nouvelle saison</button>
      </div>

      <!-- Liste des saisons -->
      <div class="card-panel">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Durée</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="seasons-tbody">
              ${list.length === 0 ? `<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>` :
                list.map(s => {
                  const days = Math.round((new Date(s.end_at) - new Date(s.start_at)) / 86400000)
                  const isPast = new Date(s.end_at) < new Date() && !s.is_active
                  return `
                    <tr>
                      <td><b>${s.name}</b></td>
                      <td style="font-size:12px">${fmt(s.start_at)}</td>
                      <td style="font-size:12px">${fmt(s.end_at)}</td>
                      <td style="font-size:12px">${days} jours</td>
                      <td>${statusBadge(s)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${s.id}">✏️ Modifier</button>
                        ${!s.is_active ? `<button class="btn btn-primary btn-sm" data-activate="${s.id}">▶ Activer</button>` : `<button class="btn btn-ghost btn-sm" data-deactivate="${s.id}" style="color:#e67e22">⏹ Désactiver</button>`}
                        ${isPast ? `<button class="btn btn-danger btn-sm" data-delete="${s.id}">🗑</button>` : ''}
                      </td>
                    </tr>`
                }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`

  // ── Créer une saison ─────────────────────────────────────
  document.getElementById('create-season-btn')?.addEventListener('click', () => {
    openSeasonModal(null, { toast, openModal, closeModal, reload: () => load(container, helpers) })
  })

  // ── Modifier ─────────────────────────────────────────────
  container.querySelectorAll('[data-edit]').forEach(btn => {
    const season = list.find(s => s.id == btn.dataset.edit)
    btn.addEventListener('click', () => {
      openSeasonModal(season, { toast, openModal, closeModal, reload: () => load(container, helpers) })
    })
  })

  // ── Activer ──────────────────────────────────────────────
  container.querySelectorAll('[data-activate]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.dataset.activate)
      if (!confirm('Activer cette saison ? La saison actuellement active sera désactivée.')) return
      // Désactiver toutes, puis activer celle-ci
      const { error: e1 } = await supabase.from('ranked_seasons').update({ is_active: false }).neq('id', 0)
      if (e1) { toast(e1.message, 'error'); return }
      const { error: e2 } = await supabase.from('ranked_seasons').update({ is_active: true }).eq('id', id)
      if (e2) { toast(e2.message, 'error'); return }
      // Mettre à jour current_season_id sur tous les joueurs ayant joué ranked
      await supabase.from('users').update({ current_season_id: id }).gt('placement_matches', 0)
      toast('Saison activée ✅', 'success')
      load(container, helpers)
    })
  })

  // ── Désactiver ───────────────────────────────────────────
  container.querySelectorAll('[data-deactivate]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Désactiver la saison active ? Le mode Ranked sera suspendu.')) return
      const { error } = await supabase.from('ranked_seasons').update({ is_active: false }).eq('id', parseInt(btn.dataset.deactivate))
      if (error) { toast(error.message, 'error'); return }
      toast('Saison désactivée', 'success')
      load(container, helpers)
    })
  })

  // ── Supprimer ────────────────────────────────────────────
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer cette saison archivée ?')) return
      const { error } = await supabase.from('ranked_seasons').delete().eq('id', parseInt(btn.dataset.delete))
      if (error) { toast(error.message, 'error'); return }
      toast('Saison supprimée', 'success')
      load(container, helpers)
    })
  })
}

// ── Modal création / modification ───────────────────────────
function openSeasonModal(season, { toast, openModal, closeModal, reload }) {
  const isEdit = !!season

  // Valeurs par défaut : saison de 90 jours à partir d'aujourd'hui
  const defaultStart = new Date().toISOString().slice(0, 16)
  const defaultEnd   = new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 16)

  const startVal = season ? new Date(season.start_at).toISOString().slice(0, 16) : defaultStart
  const endVal   = season ? new Date(season.end_at).toISOString().slice(0, 16)   : defaultEnd
  const nameVal  = season?.name || ''

  openModal(
    isEdit ? '✏️ Modifier la saison' : '➕ Nouvelle saison',
    `<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${nameVal}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${startVal}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${endVal}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${isEdit ? '💾 Enregistrer' : '✅ Créer la saison'}</button>
    </div>`
  )

  // Calcul durée en live
  function updateDuration() {
    const s = document.getElementById('season-start')?.value
    const e = document.getElementById('season-end')?.value
    const el = document.getElementById('season-duration')
    if (!s || !e || !el) return
    const days = Math.round((new Date(e) - new Date(s)) / 86400000)
    el.textContent = days > 0 ? `Durée : ${days} jour${days > 1 ? 's' : ''}` : '⚠️ La fin doit être après le début'
    el.style.color = days > 0 ? 'var(--gray-600)' : '#bb2020'
  }

  setTimeout(() => {
    document.getElementById('season-start')?.addEventListener('input', updateDuration)
    document.getElementById('season-end')?.addEventListener('input', updateDuration)
    updateDuration()

    document.getElementById('season-save-btn')?.addEventListener('click', async () => {
      const name  = document.getElementById('season-name')?.value.trim()
      const start = document.getElementById('season-start')?.value
      const end   = document.getElementById('season-end')?.value
      const errEl = document.getElementById('season-error')

      if (!name)  { errEl.textContent = 'Le nom est requis.'; return }
      if (!start) { errEl.textContent = 'La date de début est requise.'; return }
      if (!end)   { errEl.textContent = 'La date de fin est requise.'; return }
      if (new Date(end) <= new Date(start)) { errEl.textContent = 'La date de fin doit être après le début.'; return }

      const btn = document.getElementById('season-save-btn')
      btn.disabled = true; btn.textContent = 'Enregistrement…'

      const payload = {
        name,
        start_at: new Date(start).toISOString(),
        end_at:   new Date(end).toISOString(),
      }

      let error
      if (isEdit) {
        ;({ error } = await supabase.from('ranked_seasons').update(payload).eq('id', season.id))
      } else {
        ;({ error } = await supabase.from('ranked_seasons').insert({ ...payload, is_active: false }))
      }

      if (error) { errEl.textContent = error.message; btn.disabled = false; btn.textContent = isEdit ? '💾 Enregistrer' : '✅ Créer la saison'; return }

      toast(isEdit ? 'Saison modifiée ✅' : 'Saison créée ✅', 'success')
      closeModal()
      reload()
    })
  }, 50)
}
