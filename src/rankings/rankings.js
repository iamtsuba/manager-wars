import { supabase } from '../lib/supabase.js'
import { getTier, TIERS } from '../ranked/glicko2.js'

export async function renderRankings(container, ctx) {
  const { state, navigate } = ctx
  const initialTab = ctx?.state?.params?.tab || 'ranked'

  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>'

  const [{ data: ranked }, { data: miniLeague }, { data: random }] = await Promise.all([
    supabase.from('users')
      .select('id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches')
      .gte('placement_matches', 1)
      .order('mmr', { ascending: false })
      .limit(100),
    supabase.rpc('get_mini_league_leaderboard'),
    supabase.rpc('get_random_leaderboard'),
  ])

  let activeTab = initialTab

  const podiumBg = i => i<3 ? ['#D4A017','#a0a0a0','#cd7f32'][i] : 'var(--green)'
  const podiumFg = i => i<3 ? '#000' : '#fff'

  function renderTab() {
    const listEl = document.getElementById('rankings-list')
    if (!listEl) return

    if (activeTab === 'ranked') {
      const list = ranked || []
      listEl.innerHTML = list.length > 0 ? list.map((u, i) => {
        const tier   = getTier(u.mmr ?? 1000)
        const total  = (u.ranked_wins||0) + (u.ranked_losses||0) + (u.ranked_draws||0)
        const wr     = total > 0 ? Math.round((u.ranked_wins||0) / total * 100) : 0
        const isMe   = u.id === state.profile.id
        const placed = (u.placement_matches||0) < 10
        return `
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${isMe ? 'border:2px solid var(--yellow)' : ''}">
            <div style="width:32px;height:32px;border-radius:50%;background:${i<3?['#D4A017','#a0a0a0','#cd7f32'][i]:'rgba(255,255,255,0.08)'};color:${i<3?'#000':'var(--tile-fg-on-page)'};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${i<3?'16':'13'}px">${i<3?['🥇','🥈','🥉'][i]:i+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${tier.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${u.club_name} · ${tier.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${placed ? '❓' : tier.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${tier.color}">${placed ? 'Placement' : tier.label}</div>
              ${!placed ? `<div style="font-size:10px;color:var(--tile-fg-dim)">${wr}% WR</div>` : ''}
            </div>
          </div>`
      }).join('') : '<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'

    } else if (activeTab === 'mini-league') {
      const list = miniLeague || []
      listEl.innerHTML = list.length > 0 ? list.map((u, i) => `
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${u.user_id === state.profile.id ? 'border:2px solid var(--yellow)' : ''}">
          <div style="width:32px;height:32px;border-radius:50%;background:${podiumBg(i)};color:${podiumFg(i)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${i<3?'16':'13'}px">${i<3?['🥇','🥈','🥉'][i]:i+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${u.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${u.top1} 🥈${u.top2} 🥉${u.top3}</div>
            <div style="color:var(--tile-fg-dim)">${u.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join('') : '<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l\'instant.</div>'

    } else {
      const list = random || []
      listEl.innerHTML = list.length > 0 ? list.map((u, i) => `
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${u.user_id === state.profile.id ? 'border:2px solid var(--yellow)' : ''}">
          <div style="width:32px;height:32px;border-radius:50%;background:${podiumBg(i)};color:${podiumFg(i)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${i<3?'16':'13'}px">${i<3?['🥇','🥈','🥉'][i]:i+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${u.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:var(--green)">${u.win_pct}%</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${u.wins}/${u.total} V</div>
          </div>
        </div>
      `).join('') : '<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l\'instant.</div>'
    }

    document.getElementById('tab-ranked')?.style && (document.getElementById('tab-ranked').style.cssText = tabStyle(activeTab === 'ranked'))
    document.getElementById('tab-mini-league')?.style && (document.getElementById('tab-mini-league').style.cssText = tabStyle(activeTab === 'mini-league'))
    document.getElementById('tab-random')?.style && (document.getElementById('tab-random').style.cssText = tabStyle(activeTab === 'random'))
  }

  const tabStyle = (active) => `flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${active?'900':'400'};background:${active?'var(--green)':'rgba(255,255,255,0.06)'};color:${active?'#fff':'var(--tile-fg-dim)'};transition:all 0.2s`

  container.innerHTML = `
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${tabStyle(activeTab==='ranked')}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${tabStyle(activeTab==='mini-league')}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${tabStyle(activeTab==='random')}">🎲 Random</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`

  renderTab()

  document.getElementById('tab-ranked')?.addEventListener('click', () => { activeTab = 'ranked'; renderTab() })
  document.getElementById('tab-mini-league')?.addEventListener('click', () => { activeTab = 'mini-league'; renderTab() })
  document.getElementById('tab-random')?.addEventListener('click', () => { activeTab = 'random'; renderTab() })
}
