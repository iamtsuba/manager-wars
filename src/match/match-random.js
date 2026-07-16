/**
 * match-random.js — Mode Random et Ranked.
 *
 * Spécifique : matchmaking, file d'attente, Glicko-2.
 * Tout le rendu PvP est délégué à match-pvp.js.
 */

import { supabase }              from '../lib/supabase.js'
import { computeGlicko2, getTier } from '../ranked/glicko2.js'
import { renderDeckSelect, loadMatchSetup, showGCSelection, _hideBottomNav, _showBottomNav } from './match-shared.js'
import { renderPvpMatch, resumePvpMatch as _resumePvpMatch } from './match-pvp.js'

export async function renderMatchRandom(container, ctx, isRanked = false) {
  const { state, navigate, toast } = ctx
  const rankedData = isRanked ? (ctx?.state?.params?.rankedData || null) : null

  await loadMatchSetup(container, ctx, isRanked ? 'ranked' : 'random', async ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs, stadiumDef }) => {
    _hideBottomNav(container)
    const proceed = async (chosenGC) => {
      await showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, chosenGC || [], gcDefs, stadiumDef, isRanked, rankedData)
    }
    if (!gcCardsEnriched?.length) { await proceed([]); return }
    showGCSelection(container, gcCardsEnriched, proceed)
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

  let cancelled = false
  let channel = null
  let pollTimer = null

  container.innerHTML = `
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${bgGrad};color:#fff;padding:32px;text-align:center;gap:20px">
      ${isRanked ? `<div style="font-size:36px">${tier?.emoji || '⚽'}</div>` : ''}
      <div style="font-size:18px;font-weight:900;color:#fff">${isRanked ? 'Recherche Ranked…' : 'Recherche d\'un adversaire…'}</div>
      ${isRanked ? `<div style="font-size:13px;color:${tier?.color || '#D4A017'}">${tier?.name || ''} · ${Math.round(myMmr)} MMR</div>` : ''}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${spinCol};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`

  const cleanup = async () => {
    cancelled = true
    if (channel) { channel.unsubscribe(); channel = null }
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null }
    await supabase.rpc('cancel_matchmaking', { p_user_id: state.profile.id }).catch(()=>{})
  }

  document.getElementById('cancel-mm')?.addEventListener('click', async () => {
    await cleanup()
    _showBottomNav(container)
    navigate('home')
  })

  const startPvpMatch = async (matchId, amIHome) => {
    if (cancelled) return
    cancelled = true
    if (channel) { channel.unsubscribe(); channel = null }
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null }
    await renderPvpMatch(container, ctx, matchId, amIHome, {
      myGC, gcDefs, stadiumDef, isRanked, rankedData,
      onMatchEnd: isRanked ? handleRankedEnd : null
    })
  }

  // ── Tentative de matchmaking : apparie immédiatement ou m'inscrit en file ──
  // Ranked garde sa propre RPC try_matchmake_ranked (progressive MMR, déjà
  // existante) ; random simple utilise try_matchmake (user_id + deck_id).
  const myId = state.user.id
  const { data: result, error } = isRanked
    ? await supabase.rpc('try_matchmake_ranked', { p_user_id: myId, p_deck_id: deckId, p_mmr: myMmr })
    : await supabase.rpc('try_matchmake', { p_user_id: myId, p_deck_id: deckId })

  if (error || !result?.success) {
    console.error('[Matchmaking] try_matchmake error:', error || result)
    toast('Erreur de matchmaking', 'error')
    _showBottomNav(container)
    navigate('home')
    return
  }

  if (result.matched) {
    // Un adversaire attendait déjà : je suis "away", lui est "home"
    await startPvpMatch(result.match_id, false)
    return
  }

  // Personne en attente : j'écoute Realtime ma propre ligne matchmaking_queue
  // (mise à jour status='matched' + match_id par celui qui me rejoint), + poll en secours
  const checkMatch = async () => {
    if (cancelled) return
    const { data: row } = await supabase
      .from('matchmaking_queue')
      .select('status, match_id')
      .eq('user_id', myId)
      .maybeSingle()

    if (row?.status === 'matched' && row.match_id) {
      // J'attendais : je suis "home"
      await startPvpMatch(row.match_id, true)
    }
  }

  channel = supabase.channel(`mm_${myId}`)
    .on('postgres_changes', {
      event: 'UPDATE', schema: 'public', table: 'matchmaking_queue',
      filter: `user_id=eq.${myId}`
    }, (payload) => {
      const row = payload.new
      if (row.status === 'matched' && row.match_id) startPvpMatch(row.match_id, true)
    })
    .subscribe()

  pollTimer = setInterval(checkMatch, 3000)
  setTimeout(() => { if (!cancelled) cleanup() }, 120000)
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
