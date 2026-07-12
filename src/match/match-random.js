/**
 * match-random.js — Mode Random et Ranked.
 *
 * Spécifique : matchmaking, file d'attente, Glicko-2.
 * Tout le rendu PvP est délégué à match-pvp.js.
 */

import { supabase }              from '../lib/supabase.js'
import { computeGlicko2, getTier } from '../ranked/glicko2.js'
import { renderDeckSelect, loadMatchSetup, _hideBottomNav, _showBottomNav } from './match-shared.js'
import { renderPvpMatch, resumePvpMatch as _resumePvpMatch } from './match-pvp.js'

export async function renderMatchRandom(container, ctx, isRanked = false) {
  const { state, navigate, toast } = ctx
  const rankedData = isRanked ? (ctx?.state?.params?.rankedData || null) : null

  await loadMatchSetup(container, ctx, isRanked ? 'ranked' : 'random', async ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs, stadiumDef }) => {
    const myGC = gcCardsEnriched || []
    _hideBottomNav(container)
    await showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, myGC, gcDefs, stadiumDef, isRanked, rankedData)
  })
}

export async function resumePvpMatch(container, ctx, matchId) {
  return _resumePvpMatch(container, ctx, matchId)
}

// ── File de matchmaking ────────────────────────────────────

async function showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, myGC = [], gcDefs = [], stadiumDef = null, isRanked = false, rankedData = null) {
  const { state, navigate, toast } = ctx
  const myMmr = rankedData?.mmr ?? state.profile?.mmr ?? 1000
  const tier   = isRanked ? getTier(myMmr) : null
  const bgGrad = isRanked
    ? `linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)`
    : `linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)`
  const spinCol = isRanked ? (tier?.color || '#D4A017') : '#FFD700'

  container.innerHTML = `
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${bgGrad};color:#fff;padding:32px;text-align:center;gap:20px">
      ${isRanked ? `<div style="font-size:36px">${tier?.emoji || '⚽'}</div>` : ''}
      <div style="font-size:18px;font-weight:900;color:#fff">${isRanked ? 'Recherche Ranked…' : 'Recherche d\'un adversaire…'}</div>
      ${isRanked ? `<div style="font-size:13px;color:${tier?.color || '#D4A017'}">${tier?.name || ''} · ${Math.round(myMmr)} MMR</div>` : ''}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${spinCol};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`

  document.getElementById('cancel-mm')?.addEventListener('click', () => {
    channel?.unsubscribe()
    _showBottomNav(container)
    navigate('home')
  })

  // Inscrit dans la file de matchmaking
  const myId = state.user.id
  const { data: existing } = await supabase.from('matchmaking_queue').select('id').eq('user_id', myId).single()
  if (!existing) {
    await supabase.from('matchmaking_queue').insert({
      user_id: myId, deck_id: deckId, formation, mmr: myMmr, is_ranked: isRanked
    })
  }

  let channel
  let matched = false

  // Polling + Realtime pour trouver un match
  const checkMatch = async () => {
    if (matched) return
    const { data: match } = await supabase
      .from('matches')
      .select('id, home_id, away_id')
      .or(`home_id.eq.${myId},away_id.eq.${myId}`)
      .eq('status', 'in_progress')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (match) {
      matched = true
      channel?.unsubscribe()
      await supabase.from('matchmaking_queue').delete().eq('user_id', myId)
      const amIHome = match.home_id === myId
      await renderPvpMatch(container, ctx, match.id, amIHome, {
        myGC, gcDefs, stadiumDef, isRanked, rankedData,
        onMatchEnd: isRanked ? handleRankedEnd : null
      })
    }
  }

  await checkMatch()
  if (matched) return

  // Écoute Realtime
  channel = supabase.channel(`mm_${myId}`)
    .on('postgres_changes', {
      event: 'INSERT', schema: 'public', table: 'matches',
      filter: `home_id=eq.${myId}`
    }, checkMatch)
    .on('postgres_changes', {
      event: 'UPDATE', schema: 'public', table: 'matches',
      filter: `away_id=eq.${myId}`
    }, checkMatch)
    .subscribe()

  // Polling de secours toutes les 3s
  const pollTimer = setInterval(checkMatch, 3000)
  setTimeout(() => { clearInterval(pollTimer); channel?.unsubscribe() }, 120000)
}

async function handleRankedEnd(result, ctx) {
  const { state, toast } = ctx
  const { winnerId, homeId, awayId, homeScore, awayScore, matchId } = result

  const myId = state.user.id
  const amIHome = homeId === myId
  const iWon = winnerId === myId

  const { data: myProfile } = await supabase.from('users').select('mmr, mmr_rd, mmr_v').eq('id', myId).single()
  const { data: oppProfile } = await supabase.from('users').select('mmr, mmr_rd, mmr_v').eq('id', amIHome ? awayId : homeId).single()

  if (myProfile && oppProfile) {
    const myResult = computeGlicko2(
      myProfile.mmr, myProfile.mmr_rd, myProfile.mmr_v,
      oppProfile.mmr, oppProfile.mmr_rd,
      iWon ? 1 : 0
    )
    await supabase.from('users').update({
      mmr: myResult.mmr, mmr_rd: myResult.rd, mmr_v: myResult.v,
      mmr_wins:   iWon   ? supabase.sql`mmr_wins + 1`   : undefined,
      mmr_losses: !iWon  ? supabase.sql`mmr_losses + 1` : undefined,
    }).eq('id', myId)
    toast(iWon ? `+MMR ↑ ${Math.round(myResult.mmr - myProfile.mmr)}` : `-MMR ↓ ${Math.round(myProfile.mmr - myResult.mmr)}`, iWon ? 'success' : 'error', 4000)
  }
}
