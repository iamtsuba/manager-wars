/**
 * match-minileague.js — Mode Mini Ligue.
 *
 * Spécifique : rounds, classement, lobby, résultat de ligue.
 * Tout le rendu PvP est délégué à match-pvp.js.
 */

import { supabase }       from '../lib/supabase.js'
import { loadMatchSetup, _hideBottomNav, _showBottomNav } from './match-shared.js'
import { renderPvpMatch } from './match-pvp.js'

export async function renderMatchMiniLeague(container, ctx) {
  const { state, navigate, toast } = ctx
  const params    = state.params || {}
  const leagueId  = params.leagueId  || null
  const mlMatchId = params.mlMatchId || null

  if (mlMatchId && leagueId) {
    // Reprendre un match de ligue existant
    await resumeMiniLeagueMatch(container, ctx, mlMatchId, leagueId)
    return
  }

  if (leagueId) {
    // Rejoindre une ligue existante
    await showLeagueLobby(container, ctx, leagueId)
    return
  }

  // Créer une nouvelle ligue
  await createLeague(container, ctx)
}

// ── Création d'une ligue ───────────────────────────────────

async function createLeague(container, ctx) {
  const { state, navigate, toast } = ctx

  await loadMatchSetup(container, ctx, 'mini_league', async ({ deckId, gcCardsEnriched, gcDefs, stadiumDef }) => {
    _hideBottomNav(container)

    const myGC = gcCardsEnriched || []
    const myId = state.user.id

    const { data: league } = await supabase.from('mini_leagues').insert({
      creator_id: myId, deck_id: deckId, status: 'waiting',
      gc_cards: myGC.map(g => g.id)
    }).select('id').single()

    if (!league) { toast('Erreur création ligue', 'error'); navigate('home'); return }

    await showLeagueLobby(container, ctx, league.id)
  })
}

// ── Lobby de ligue ─────────────────────────────────────────

async function showLeagueLobby(container, ctx, leagueId) {
  const { state, navigate, toast } = ctx
  const myId = state.user.id

  const { data: league } = await supabase
    .from('mini_leagues')
    .select('*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))')
    .eq('id', leagueId)
    .single()

  if (!league) { toast('Ligue introuvable', 'error'); navigate('home'); return }

  const isCreator = league.creator_id === myId
  const participants = league.participants || []
  const isFull = participants.length >= 4

  container.innerHTML = `
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:28px">🏆</div>
        <h2 style="margin:8px 0">Mini Ligue</h2>
        <div style="font-size:13px;opacity:0.6">Code : <b>${leagueId.slice(0,8).toUpperCase()}</b></div>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px">
        <div style="font-size:12px;opacity:0.6;margin-bottom:8px">Participants (${participants.length}/4)</div>
        ${participants.map(p => `
          <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <span>⚽</span>
            <span style="font-size:14px;font-weight:700">${p.users?.pseudo || '?'}</span>
            ${p.user_id === league.creator_id ? '<span style="font-size:10px;color:#D4A017">CRÉATEUR</span>' : ''}
          </div>`).join('')}
        ${Array(4 - participants.length).fill(0).map(() => `
          <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);opacity:0.3;font-size:13px">En attente…</div>`).join('')}
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto">
        ${isCreator && isFull ? `
          <button id="start-league" style="padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            🚀 Lancer la ligue
          </button>` : ''}
        ${!participants.find(p => p.user_id === myId) ? `
          <button id="join-league" style="padding:16px;border-radius:12px;border:none;background:#1a3a6b;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            ➕ Rejoindre
          </button>` : ''}
        <button id="back-home" style="padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;cursor:pointer">
          Retour
        </button>
      </div>
    </div>`

  document.getElementById('start-league')?.addEventListener('click', async () => {
    await supabase.from('mini_leagues').update({ status: 'in_progress' }).eq('id', leagueId)
    await startLeagueRound(container, ctx, leagueId)
  })

  document.getElementById('join-league')?.addEventListener('click', async () => {
    await loadMatchSetup(container, ctx, 'mini_league', async ({ deckId, gcCardsEnriched }) => {
      const myGC = gcCardsEnriched || []
      await supabase.from('mini_league_participants').insert({
        league_id: leagueId, user_id: myId, deck_id: deckId,
        gc_cards: myGC.map(g => g.id)
      })
      toast('Rejoint !', 'success')
      await showLeagueLobby(container, ctx, leagueId)
    })
  })

  document.getElementById('back-home')?.addEventListener('click', () => navigate('home'))
}

// ── Lancer un round ────────────────────────────────────────

async function startLeagueRound(container, ctx, leagueId) {
  const { navigate, toast } = ctx

  const { data: matches } = await supabase
    .from('mini_league_matches')
    .select('id, match_id, home_id, away_id, status')
    .eq('league_id', leagueId)
    .eq('status', 'pending')
    .order('round', { ascending: true })
    .limit(1)

  const nextMatch = matches?.[0]
  if (!nextMatch) {
    await showLeagueResults(container, ctx, leagueId)
    return
  }

  const myId = ctx.state.user.id
  const amIHome = nextMatch.home_id === myId

  await renderPvpMatch(container, ctx, nextMatch.match_id, amIHome, {
    mlLeagueId: leagueId,
    mlMatchId: nextMatch.id,
    onMatchEnd: async (result) => {
      await supabase.from('mini_league_matches').update({
        status: 'finished',
        home_score: result.homeScore,
        away_score: result.awayScore,
        winner_id: result.winnerId
      }).eq('id', nextMatch.id)
      await startLeagueRound(container, ctx, leagueId)
    }
  })
}

async function resumeMiniLeagueMatch(container, ctx, mlMatchId, leagueId) {
  const { data: mlMatch } = await supabase
    .from('mini_league_matches')
    .select('match_id, home_id, away_id')
    .eq('id', mlMatchId)
    .single()

  if (!mlMatch) { ctx.toast('Match introuvable', 'error'); ctx.navigate('home'); return }

  const amIHome = mlMatch.home_id === ctx.state.user.id
  await renderPvpMatch(container, ctx, mlMatch.match_id, amIHome, {
    mlLeagueId: leagueId,
    mlMatchId,
    onMatchEnd: async (result) => {
      await supabase.from('mini_league_matches').update({
        status: 'finished',
        home_score: result.homeScore,
        away_score: result.awayScore,
        winner_id: result.winnerId
      }).eq('id', mlMatchId)
      ctx.navigate('home')
    }
  })
}

// ── Résultats de ligue ─────────────────────────────────────

async function showLeagueResults(container, ctx, leagueId) {
  const { navigate } = ctx

  const { data: matches } = await supabase
    .from('mini_league_matches')
    .select('home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)')
    .eq('league_id', leagueId)

  // Calculer classement
  const points = {}
  const goals = {}
  ;(matches || []).forEach(m => {
    [m.home_id, m.away_id].forEach(id => { if (!points[id]) points[id] = 0; if (!goals[id]) goals[id] = 0 })
    if (m.winner_id) {
      points[m.winner_id] = (points[m.winner_id] || 0) + 3
    } else {
      points[m.home_id] = (points[m.home_id] || 0) + 1
      points[m.away_id] = (points[m.away_id] || 0) + 1
    }
    goals[m.home_id] = (goals[m.home_id] || 0) + (m.home_score || 0)
    goals[m.away_id] = (goals[m.away_id] || 0) + (m.away_score || 0)
  })

  const names = {}
  ;(matches || []).forEach(m => { names[m.home_id] = m.home?.pseudo; names[m.away_id] = m.away?.pseudo })

  const ranking = Object.keys(points).sort((a, b) => (points[b] - points[a]) || (goals[b] - goals[a]))
  const medals = ['🥇', '🥈', '🥉', '4️⃣']

  container.innerHTML = `
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${ranking.map((id, i) => `
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="font-size:24px">${medals[i] || '•'}</div>
            <div style="flex:1">
              <div style="font-size:15px;font-weight:900">${names[id] || '?'}</div>
              <div style="font-size:12px;opacity:0.6">${goals[id] || 0} buts</div>
            </div>
            <div style="font-size:18px;font-weight:900;color:#D4A017">${points[id] || 0} pts</div>
          </div>`).join('')}
      </div>

      <div style="margin-top:auto">
        <button id="back-home" style="width:100%;padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
          Retour à l'accueil
        </button>
      </div>
    </div>`

  document.getElementById('back-home')?.addEventListener('click', () => navigate('home'))
}
