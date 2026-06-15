import { supabase } from '../lib/supabase.js'

export async function renderMatches(container, { state, navigate, toast }) {
  const p = state.profile
  if (!p) return

  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: matches } = await supabase
    .from('matches')
    .select('id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at')
    .or(`home_id.eq.${p.id},away_id.eq.${p.id}`)
    .order('created_at', { ascending: false })
    .limit(50)

  const MODE_LABELS = {
    vs_ai_easy:'IA Facile', vs_ai_medium:'IA Moyen', vs_ai_hard:'IA Difficile',
    vs_ai_club:'IA Club', friend_challenge:'Défi ami', championship:'Championnat',
    vs_random:'Match Random',
  }

  const finished   = (matches||[]).filter(m => m.status === 'finished')
  const inProgress = (matches||[]).filter(m => m.status === 'in_progress')

  function row(m) {
    const isHome   = m.home_id === p.id
    const myScore  = isHome ? m.home_score : m.away_score
    const oppScore = isHome ? m.away_score : m.home_score
    const isWin    = m.winner_id === p.id
    const isDraw   = (m.home_score === m.away_score) && m.status === 'finished'
    const result   = m.status !== 'finished' ? '…' : isDraw ? 'N' : isWin ? 'V' : 'D'
    const color    = m.status !== 'finished' ? '#888' : isDraw ? '#888' : isWin ? '#1A6B3C' : '#c0392b'
    let label      = MODE_LABELS[m.mode] || m.mode
    if (m.away_id === null && !label.startsWith('IA')) label = 'IA'

    // VAR en cours : match in_progress depuis +1h
    let varTag = ''
    if (m.status === 'in_progress') {
      const ageMs = Date.now() - new Date(m.created_at).getTime()
      if (ageMs > 3600 * 1000) varTag = ' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>'
    }

    const date = new Date(m.created_at)
    const dateStr = date.toLocaleDateString('fr', { day:'numeric', month:'short' }) + ' ' +
                    date.toLocaleTimeString('fr', { hour:'2-digit', minute:'2-digit' })

    const scoreDisplay = m.status === 'finished'
      ? `${m.home_score} - ${m.away_score}`
      : `${m.home_score||0} - ${m.away_score||0}`

    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${label}${varTag}</div>
        <div style="font-size:11px;color:var(--gray-600)">${dateStr}${m.status==='in_progress'?' · en cours':''}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${scoreDisplay}</span>
        <span style="background:${color};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${result}</span>
      </div>
    </div>`
  }

  container.innerHTML = `
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(matches||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${inProgress.length > 0 ? `
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${inProgress.map(row).join('')}
        </div>` : ''}

      ${finished.length > 0 ? `
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${finished.map(row).join('')}
        </div>` : ''}

      ${(matches||[]).length === 0 ? '<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l\'instant</div>' : ''}
    </div>
  </div>`
}
