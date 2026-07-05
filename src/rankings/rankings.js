import { supabase } from '../lib/supabase.js'
import { getTier, TIERS } from '../ranked/glicko2.js'

export async function renderRankings(container, ctx) {
  const { state, navigate } = ctx
  const initialTab = ctx?.state?.params?.tab || 'global'

  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const [{ data: global }, { data: ranked }] = await Promise.all([
    supabase.from('users')
      .select('id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level')
      .order('trophies_top1', { ascending: false })
      .limit(100),
    supabase.from('users')
      .select('id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches')
      .gte('placement_matches', 1)
      .order('mmr', { ascending: false })
      .limit(100),
  ])

  let activeTab = initialTab

  function renderTab() {
    const listEl = document.getElementById('rankings-list')
    if (!listEl) return

    if (activeTab === 'global') {
      const list = global || []
      listEl.innerHTML = list.length > 0 ? list.map((u, i) => `
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${u.id === state.profile.id ? 'border:2px solid var(--yellow)' : ''}">
          <div style="width:32px;height:32px;border-radius:50%;background:${i<3?['#D4A017','#a0a0a0','#cd7f32'][i]:'var(--green)'};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${i<3?'16':'13'}px">${i<3?['🥇','🥈','🥉'][i]:i+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${u.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${u.trophies_top1} 🥈${u.trophies_top2} 🥉${u.trophies_top3}</div>
            <div style="color:var(--gray-600)">${u.wins} V</div>
          </div>
        </div>
      `).join('') : '<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'

    } else {
      const list = ranked || []
      listEl.innerHTML = list.length > 0 ? list.map((u, i) => {
        const tier   = getTier(u.mmr ?? 1000)
        const total  = (u.ranked_wins||0) + (u.ranked_losses||0) + (u.ranked_draws||0)
        const wr     = total > 0 ? Math.round((u.ranked_wins||0) / total * 100) : 0
        const isMe   = u.id === state.profile.id
        const placed = (u.placement_matches||0) < 10
        return `
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${isMe ? 'border:2px solid var(--yellow)' : ''}">
            <div style="width:32px;height:32px;border-radius:50%;background:${i<3?['#D4A017','#a0a0a0','#cd7f32'][i]:'rgba(255,255,255,0.08)'};color:${i<3?'#000':'#fff'};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${i<3?'16':'13'}px">${i<3?['🥇','🥈','🥉'][i]:i+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${tier.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${u.club_name} · ${tier.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:16px;font-weight:900;color:${tier.color}">${placed ? '?' : u.mmr}</div>
              <div style="font-size:10px;color:var(--gray-600)">${placed ? 'Placement' : `${wr}% WR`}</div>
            </div>
          </div>`
      }).join('') : '<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'
    }

    // Update tab styles
    document.getElementById('tab-global')?.style && (document.getElementById('tab-global').style.cssText = tabStyle(activeTab === 'global'))
    document.getElementById('tab-ranked')?.style && (document.getElementById('tab-ranked').style.cssText = tabStyle(activeTab === 'ranked'))
  }

  const tabStyle = (active) => `flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${active?'900':'400'};background:${active?'var(--green)':'rgba(255,255,255,0.06)'};color:${active?'#fff':'var(--gray-600)'};transition:all 0.2s`

  container.innerHTML = `
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${tabStyle(activeTab==='global')}">🌍 Global</button>
        <button id="tab-ranked" style="${tabStyle(activeTab==='ranked')}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`

  renderTab()

  document.getElementById('tab-global')?.addEventListener('click', () => { activeTab = 'global'; renderTab() })
  document.getElementById('tab-ranked')?.addEventListener('click', () => { activeTab = 'ranked'; renderTab() })
}
