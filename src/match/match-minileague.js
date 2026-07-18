/**
 * match-minileague.js — Lancement d'un match de journée en Mini League.
 *
 * Le vrai système Mini League (lobby, calendrier, classement) vit dans
 * src/mini-league/mini-league.js. Ce fichier ne fait QUE lancer le match
 * d'une journée (identique visuellement et en règles à un match random :
 * choix deck + GC, puis renderPvpMatch), et reporte le résultat sur
 * mini_league_matches à la fin — le reste (journée suivante, classement,
 * fin de ligue) est déjà géré par mini-league.js via son bouton créateur.
 */

import { supabase } from '../lib/supabase.js'
import { loadMatchSetup, showGCSelection, _hideBottomNav, _showBottomNav } from './match-shared.js'
import { renderPvpMatch } from './match-pvp.js'

export async function renderMatchMiniLeague(container, ctx) {
  const { state, navigate, toast } = ctx
  const params    = state.params || {}
  const leagueId  = params.leagueId  || null
  const mlMatchId = params.mlMatchId || null
  const myId      = state.user.id

  if (!mlMatchId || !leagueId) {
    toast('Match introuvable', 'error')
    navigate('mini-league')
    return
  }

  const { data: mlMatch, error: mlErr } = await supabase
    .from('mini_league_matches')
    .select('id, league_id, home_id, away_id, status, match_id')
    .eq('id', mlMatchId)
    .single()

  if (mlErr || !mlMatch) {
    toast('Match introuvable', 'error')
    navigate('mini-league', { openLeagueId: leagueId })
    return
  }

  if (mlMatch.home_id !== myId && mlMatch.away_id !== myId) {
    toast('Vous ne faites pas partie de ce match', 'error')
    navigate('mini-league', { openLeagueId: leagueId })
    return
  }

  const amIHome = mlMatch.home_id === myId

  // Le match a déjà été créé (reprise, ou l'adversaire est passé avant nous)
  if (mlMatch.match_id) {
    await renderPvpMatch(container, ctx, mlMatch.match_id, amIHome, {
      mlLeagueId: leagueId, mlMatchId
    })
    return
  }

  // Sinon : choisir deck + GC comme pour un match random, puis se synchroniser
  await loadMatchSetup(container, ctx, 'mini_league', async ({ deckId, gcCardsEnriched, gcDefs, stadiumDef }) => {
    _hideBottomNav(container)

    const proceed = async (chosenGC) => {
      const { data: result, error } = await supabase.rpc('start_mini_league_match', {
        p_ml_match_id: mlMatchId, p_user_id: myId, p_deck_id: deckId
      })

      if (error || !result?.success) {
        console.error('[MiniLeague] start_mini_league_match error:', error || result)
        toast(result?.error || 'Impossible de lancer le match', 'error')
        navigate('mini-league', { openLeagueId: leagueId })
        return
      }

      if (result.matched) {
        await renderPvpMatch(container, ctx, result.match_id, amIHome, {
          mlLeagueId: leagueId, mlMatchId, myGC: chosenGC || [], gcDefs, stadiumDef
        })
        return
      }

      // En attente que l'adversaire choisisse aussi son deck
      await waitForOpponent(container, ctx, { mlMatchId, leagueId, amIHome, chosenGC, gcDefs, stadiumDef })
    }

    if (!gcCardsEnriched?.length) { await proceed([]); return }
    showGCSelection(container, gcCardsEnriched, proceed)
  })
}

function waitForOpponent(container, ctx, { mlMatchId, leagueId, amIHome, chosenGC, gcDefs, stadiumDef }) {
  return new Promise(resolve => {
    const { navigate } = ctx

    container.innerHTML = `
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`

    let done = false
    const finish = async (matchId) => {
      if (done) return
      done = true
      clearInterval(pollTimer)
      if (channel) { try { channel.unsubscribe() } catch {} }
      if (matchId) {
        await renderPvpMatch(container, ctx, matchId, amIHome, {
          mlLeagueId: leagueId, mlMatchId, myGC: chosenGC || [], gcDefs, stadiumDef
        })
      }
      resolve()
    }

    document.getElementById('wait-back')?.addEventListener('click', () => {
      done = true
      clearInterval(pollTimer)
      if (channel) { try { channel.unsubscribe() } catch {} }
      navigate('mini-league', { openLeagueId: leagueId })
      resolve()
    })

    const checkMatch = async () => {
      if (done) return
      const { data: row } = await supabase.from('mini_league_matches').select('match_id').eq('id', mlMatchId).single()
      if (row?.match_id) finish(row.match_id)
    }

    const channel = supabase.channel(`ml_match_${mlMatchId}`)
      .on('postgres_changes', {
        event: 'UPDATE', schema: 'public', table: 'mini_league_matches',
        filter: `id=eq.${mlMatchId}`
      }, (payload) => { if (payload.new?.match_id) finish(payload.new.match_id) })
      .subscribe()

    const pollTimer = setInterval(checkMatch, 3000)
    checkMatch()
  })
}
