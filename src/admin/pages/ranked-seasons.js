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

  const [{ data: seasons, error }, { data: stats }, { data: rewardTiers }, { data: boosterList }] = await Promise.all([
    supabase.from('ranked_seasons').select('*').order('start_at', { ascending: false }),
    supabase.from('users')
      .select('mmr,rank_tier,placement_matches')
      .gte('placement_matches', 1),
    supabase.from('season_reward_tiers').select('*').order('rank_min'),
    supabase.from('booster_configs').select('id,name').order('sort_order'),
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
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${list.length})</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-yellow" id="start-new-season-btn">🚀 Démarrer une nouvelle saison</button>
          <button class="btn btn-primary" id="create-season-btn">+ Nouvelle saison (sans reset)</button>
        </div>
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
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${s.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${!s.is_active ? `<button class="btn btn-yellow btn-sm" data-launch="${s.id}">▶ Lancer la saison</button>` : ''}
                        ${!s.is_active ? `<button class="btn btn-primary btn-sm" data-activate="${s.id}">▶ Activer</button>` : `<button class="btn btn-ghost btn-sm" data-deactivate="${s.id}" style="color:#e67e22">⏹ Désactiver</button>`}
                        ${isPast ? `<button class="btn btn-danger btn-sm" data-delete="${s.id}">🗑</button>` : ''}
                      </td>
                    </tr>`
                }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Récompenses de saison par palier de classement -->
      <div class="card-panel" id="rewards-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;flex-wrap:wrap;gap:8px">
          <div style="font-weight:700;font-size:14px">🏆 Récompenses de saison</div>
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${!list.length ? 'disabled title="Crée d\'abord une saison"' : ''}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${!list.length ? '<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>' : `
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(rewardTiers||[]).map(t => {
                const isActive = !t.activate_at || new Date(t.activate_at) <= new Date()
                const seasonName = list.find(s => s.id === t.season_id)?.name || '—'
                return `<tr>
                  <td style="font-size:12px">${seasonName}</td>
                  <td><b>${t.label}</b></td>
                  <td>${t.rank_min === t.rank_max ? `#${t.rank_min}` : `#${t.rank_min}–${t.rank_max}`}</td>
                  <td style="text-align:right">${(t.credits||0).toLocaleString('fr')}</td>
                  <td style="text-align:center">${(t.player_ids||[]).length}</td>
                  <td style="text-align:center">${(t.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${t.activate_at ? fmt(t.activate_at) : 'Immédiat'}</td>
                  <td>
                    ${t.distributed_at
                      ? `<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${fmt(t.distributed_at)}</span>`
                      : isActive
                        ? '<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>'
                        : '<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'
                    }
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${t.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${t.id}" ${!isActive?'disabled':''}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${t.id}">🗑️</button>
                  </td>
                </tr>`
              }).join('') || '<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`}
      </div>
    </div>`

  // ── Créer une saison ─────────────────────────────────────
  document.getElementById('create-season-btn')?.addEventListener('click', () => {
    openSeasonModal(null, { toast, openModal, closeModal, reload: () => load(container, helpers) })
  })

  document.getElementById('start-new-season-btn')?.addEventListener('click', () => {
    openStartNewSeasonModal(active, { toast, openModal, closeModal, reload: () => load(container, helpers) })
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

  // ── Récompenses : défile vers la section et pré-sélectionne la saison ──
  container.querySelectorAll('[data-rewards-for]').forEach(btn => {
    btn.addEventListener('click', () => {
      const seasonId = parseInt(btn.dataset.rewardsFor)
      document.getElementById('rewards-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const season = list.find(s => s.id === seasonId)
      openRewardTierModal(null, list, season, boosterList || [], { toast, openModal, closeModal, reload: () => load(container, helpers) })
    })
  })

  // ── Lancer la saison : log du classement + reset MMR + activation ──────
  container.querySelectorAll('[data-launch]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const seasonId = parseInt(btn.dataset.launch)
      const season = list.find(s => s.id === seasonId)
      if (!confirm(
        `Lancer "${season?.name}" ?\n\n` +
        `Ceci va :\n` +
        `• Journaliser le classement actuel dans l'historique\n` +
        `• Recalculer le MMR de TOUS les joueurs (reset doux)\n` +
        `• Activer cette saison\n\n` +
        `Action irréversible. Continuer ?`
      )) return
      btn.disabled = true; btn.textContent = '⏳ Lancement...'
      const { data, error } = await supabase.rpc('admin_launch_season', { p_season_id: seasonId })
      btn.disabled = false; btn.textContent = '▶ Lancer la saison'
      if (error) { toast(error.message, 'error'); return }
      if (!data?.success) { toast(data?.error || 'Échec du lancement', 'error'); return }
      toast(`Saison lancée ✅ (${data.logged} classement(s) archivé(s), ${data.reset} joueur(s) recalculé(s))`, 'success')
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

  // ── Récompenses de saison : ajouter / modifier ────────────
  document.getElementById('add-reward-tier-btn')?.addEventListener('click', () => {
    openRewardTierModal(null, list, active, boosterList || [], { toast, openModal, closeModal, reload: () => load(container, helpers) })
  })
  container.querySelectorAll('[data-edit-tier]').forEach(btn => {
    const tier = (rewardTiers||[]).find(t => t.id === btn.dataset.editTier)
    btn.addEventListener('click', () => {
      openRewardTierModal(tier, list, active, boosterList || [], { toast, openModal, closeModal, reload: () => load(container, helpers) })
    })
  })

  // ── Récompenses de saison : distribuer ────────────────────
  container.querySelectorAll('[data-distribute-tier]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const tier = (rewardTiers||[]).find(t => t.id === btn.dataset.distributeTier)
      if (!confirm(`Distribuer les récompenses du palier "${tier?.label}" à tous les joueurs concernés ?`)) return
      btn.disabled = true; btn.textContent = '⏳...'
      const { data, error } = await supabase.rpc('admin_distribute_season_reward', { p_tier_id: btn.dataset.distributeTier })
      if (error) { toast(error.message, 'error'); btn.disabled = false; btn.textContent = '🎁 Distribuer'; return }
      if (!data?.success) { toast(data?.error || 'Échec de la distribution', 'error'); btn.disabled = false; btn.textContent = '🎁 Distribuer'; return }
      toast(`Récompenses distribuées à ${data.rewarded} joueur(s) ✅`, 'success')
      load(container, helpers)
    })
  })

  // ── Récompenses de saison : supprimer ──────────────────────
  container.querySelectorAll('[data-delete-tier]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer ce palier de récompense ?')) return
      const { error } = await supabase.from('season_reward_tiers').delete().eq('id', btn.dataset.deleteTier)
      if (error) { toast(error.message, 'error'); return }
      toast('Palier supprimé', 'success')
      load(container, helpers)
    })
  })
}

// ── Modal création / modification ───────────────────────────
function openRewardTierModal(tier, seasons, defaultSeason, boosterList, { toast, openModal, closeModal, reload }) {
  const isEdit = !!tier
  const selectedSeasonId = tier?.season_id ?? defaultSeason?.id ?? seasons[0]?.id ?? null
  let selectedPlayers = [] // { id, label }

  const toLocalDatetime = (iso) => {
    if (!iso) return ''
    const d = new Date(iso)
    return new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,16)
  }

  const bodyHTML = `
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${seasons.map(s => `<option value="${s.id}" ${s.id === selectedSeasonId ? 'selected' : ''}>${s.name}${s.is_active ? ' (active)' : ''}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>LIBELLÉ</label>
        <input id="rt-label" value="${tier?.label || ''}" placeholder="Ex: TOP 1, TOP 10...">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>CLASSEMENT MIN</label>
          <input id="rt-rank-min" type="number" min="1" value="${tier?.rank_min ?? 1}">
        </div>
        <div>
          <label>CLASSEMENT MAX</label>
          <input id="rt-rank-max" type="number" min="1" value="${tier?.rank_max ?? 1}">
        </div>
      </div>
      <div>
        <label>CRÉDITS OFFERTS</label>
        <input id="rt-credits" type="number" min="0" value="${tier?.credits ?? 0}">
      </div>
      <div>
        <label>DATE D'ACTIVATION (optionnel — vide = immédiat)</label>
        <input id="rt-activate-at" type="datetime-local" value="${toLocalDatetime(tier?.activate_at)}">
      </div>
      <div>
        <label>BOOSTERS OFFERTS</label>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:140px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:8px">
          ${boosterList.length ? boosterList.map(b => `
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${b.id}" ${(tier?.booster_config_ids||[]).includes(b.id)?'checked':''}>
              ${b.name}
            </label>`).join('') : '<div style="color:#999;font-size:12px">Aucun booster configuré.</div>'}
        </div>
      </div>
      <div>
        <label>CARTES JOUEUR SPÉCIFIQUES GARANTIES</label>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="rt-player-search" placeholder="Rechercher un joueur par nom..." style="flex:1">
          <button id="rt-player-search-btn" class="btn btn-ghost btn-sm" style="white-space:nowrap">🔍 Chercher</button>
        </div>
        <div id="rt-player-results" style="display:none;flex-direction:column;gap:4px;max-height:120px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:6px;margin-bottom:8px"></div>
        <div id="rt-player-chips" style="display:flex;flex-wrap:wrap;gap:6px"></div>
      </div>
      <div id="rt-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `
  const footerHTML = `
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `
  openModal(isEdit ? `Modifier : ${tier.label}` : 'Nouveau palier de récompense', bodyHTML, footerHTML)

  function renderChips() {
    const el = document.getElementById('rt-player-chips')
    if (!el) return
    el.innerHTML = selectedPlayers.map(p => `
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${p.label}
        <button data-remove-player="${p.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join('')
    el.querySelectorAll('[data-remove-player]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedPlayers = selectedPlayers.filter(p => p.id !== btn.dataset.removePlayer)
        renderChips()
      })
    })
  }

  // Pré-remplit les cartes déjà sélectionnées en cas d'édition
  if (tier?.player_ids?.length) {
    supabase.from('players').select('id,firstname,surname_real').in('id', tier.player_ids).then(({ data }) => {
      selectedPlayers = (data||[]).map(p => ({ id: p.id, label: `${p.firstname} ${p.surname_real}` }))
      renderChips()
    })
  }

  document.getElementById('rt-player-search-btn')?.addEventListener('click', async () => {
    const q = document.getElementById('rt-player-search').value.trim()
    if (q.length < 2) return
    const { data } = await supabase.from('players').select('id,firstname,surname_real,rarity')
      .or(`firstname.ilike.%${q}%,surname_real.ilike.%${q}%`).limit(10)
    const resultsEl = document.getElementById('rt-player-results')
    if (!data?.length) { resultsEl.style.display = 'flex'; resultsEl.innerHTML = '<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>'; return }
    resultsEl.style.display = 'flex'
    resultsEl.innerHTML = data.map(p => `
      <div data-add-player="${p.id}" data-label="${p.firstname} ${p.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${p.firstname} ${p.surname_real} <span style="color:#999;font-size:11px">(${p.rarity})</span>
      </div>`).join('')
    resultsEl.querySelectorAll('[data-add-player]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.addPlayer
        if (!selectedPlayers.some(p => p.id === id)) selectedPlayers.push({ id, label: el.dataset.label })
        renderChips()
        resultsEl.style.display = 'none'
        document.getElementById('rt-player-search').value = ''
      })
    })
  })

  document.getElementById('rt-cancel')?.addEventListener('click', () => closeModal())

  document.getElementById('rt-save')?.addEventListener('click', async () => {
    const errEl = document.getElementById('rt-error')
    const seasonId = parseInt(document.getElementById('rt-season').value)
    const label = document.getElementById('rt-label').value.trim()
    const rankMin = parseInt(document.getElementById('rt-rank-min').value) || 1
    const rankMax = parseInt(document.getElementById('rt-rank-max').value) || 1
    const credits = parseInt(document.getElementById('rt-credits').value) || 0
    const activateAtRaw = document.getElementById('rt-activate-at').value
    const activateAt = activateAtRaw ? new Date(activateAtRaw).toISOString() : null
    const boosterIds = [...document.querySelectorAll('.rt-booster-cb:checked')].map(cb => cb.value)

    if (!label) { errEl.textContent = 'Le libellé est obligatoire.'; return }
    if (rankMin > rankMax) { errEl.textContent = 'Le classement min doit être ≤ au max.'; return }
    if (!seasonId) { errEl.textContent = 'Choisis une saison.'; return }

    const payload = {
      season_id: seasonId, label, rank_min: rankMin, rank_max: rankMax, credits,
      booster_config_ids: boosterIds, player_ids: selectedPlayers.map(p => p.id),
      activate_at: activateAt,
    }

    const { error } = isEdit
      ? await supabase.from('season_reward_tiers').update(payload).eq('id', tier.id)
      : await supabase.from('season_reward_tiers').insert(payload)
    if (error) { errEl.textContent = error.message; return }

    toast(isEdit ? 'Palier modifié ✅' : 'Palier créé ✅', 'success')
    closeModal()
    reload()
  })
}
// ── Démarrer une nouvelle saison avec reset doux du MMR ─────────────────
function openStartNewSeasonModal(currentSeason, { toast, openModal, closeModal, reload }) {
  const today = new Date()
  const in30d = new Date(today.getTime() + 30*86400000)
  const toLocalDate = (d) => d.toISOString().slice(0, 10)

  const bodyHTML = `
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="background:#fff3cd;border:1.5px solid #e6a817;border-radius:10px;padding:12px 14px;color:#7a5c00;font-size:13px;line-height:1.5">
        ⚠️ <b>Action irréversible.</b> ${currentSeason ? `La saison actuelle ("${currentSeason.name}") sera clôturée et ` : ''}
        le MMR de <b>tous les joueurs</b> sera recalculé (compression à 50% vers la moyenne 1000, RD remis à 350,
        matchs de placement remis à 0). Les statistiques de carrière (V/N/D) ne sont pas affectées.
      </div>
      <div>
        <label>NOM DE LA SAISON</label>
        <input id="sns-name" placeholder="Ex: Saison 2">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>DATE DE DÉBUT</label>
          <input id="sns-start" type="date" value="${toLocalDate(today)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${toLocalDate(in30d)}">
        </div>
      </div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
        <input type="checkbox" id="sns-confirm">
        Je comprends que cette action va recalculer le MMR de tous les joueurs et ne peut pas être annulée.
      </label>
      <div id="sns-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `
  const footerHTML = `
    <button id="sns-cancel" class="btn btn-ghost">Annuler</button>
    <button id="sns-launch" class="btn btn-primary">🚀 Démarrer la saison</button>
  `
  openModal('Démarrer une nouvelle saison', bodyHTML, footerHTML)

  document.getElementById('sns-cancel')?.addEventListener('click', () => closeModal())
  document.getElementById('sns-launch')?.addEventListener('click', async () => {
    const errEl = document.getElementById('sns-error')
    const name = document.getElementById('sns-name').value.trim()
    const startRaw = document.getElementById('sns-start').value
    const endRaw = document.getElementById('sns-end').value
    const confirmed = document.getElementById('sns-confirm').checked

    if (!name) { errEl.textContent = 'Le nom de la saison est requis.'; return }
    if (!startRaw || !endRaw) { errEl.textContent = 'Les deux dates sont requises.'; return }
    if (new Date(startRaw) >= new Date(endRaw)) { errEl.textContent = 'La date de fin doit être après la date de début.'; return }
    if (!confirmed) { errEl.textContent = 'Coche la case de confirmation pour continuer.'; return }

    const btn = document.getElementById('sns-launch')
    btn.disabled = true; btn.textContent = '⏳ Recalcul en cours...'

    const { data, error } = await supabase.rpc('admin_start_new_season', {
      p_name: name,
      p_start_at: new Date(startRaw).toISOString(),
      p_end_at: new Date(endRaw).toISOString(),
    })

    btn.disabled = false; btn.textContent = '🚀 Démarrer la saison'

    if (error) { errEl.textContent = error.message; return }
    if (!data?.success) { errEl.textContent = data?.error || 'Échec de l\'opération.'; return }

    toast(`Nouvelle saison démarrée ✅ (${data.users_reset} joueur(s) recalculé(s))`, 'success')
    closeModal()
    reload()
  })
}

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
