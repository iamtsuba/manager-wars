/**
 * match-friend.js — Mode Match Ami.
 *
 * Spécifique : invitation par ID ami, pas de matchmaking.
 * Tout le rendu PvP est délégué à match-pvp.js.
 */

import { supabase }          from '../lib/supabase.js'
import { loadMatchSetup, _hideBottomNav, _showBottomNav } from './match-shared.js'
import { renderPvpMatch }    from './match-pvp.js'

export async function renderMatchFriend(container, ctx) {
  const { state, navigate, toast } = ctx
  const params = state.params || {}
  const friendId   = params.friendId   || null
  const friendName = params.friendName || 'Ami'

  await loadMatchSetup(container, ctx, 'friend', async ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs, stadiumDef }) => {
    const myGC = gcCardsEnriched || []
    _hideBottomNav(container)

    if (friendId) {
      // Inviteur : créer le match et attendre que l'ami rejoigne
      await createFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef, friendId, friendName)
    } else {
      // Invité : rejoindre un match existant
      await joinFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef)
    }
  })
}

async function createFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef, friendId, friendName) {
  const { state, navigate, toast } = ctx
  const myId = state.user.id

  // Créer l'invitation
  const { data: invite } = await supabase.from('friend_match_invites').insert({
    inviter_id: myId, invitee_id: friendId, status: 'pending'
  }).select('id').single()

  container.innerHTML = `
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${friendName}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`

  document.getElementById('cancel-friend')?.addEventListener('click', async () => {
    if (invite) await supabase.from('friend_match_invites').update({ status: 'declined' }).eq('id', invite.id)
    _showBottomNav(container)
    navigate('home')
  })

  // Attendre que le match soit créé
  let matched = false
  const channel = supabase.channel(`friend_${myId}`)
    .on('postgres_changes', {
      event: 'INSERT', schema: 'public', table: 'matches',
      filter: `home_id=eq.${myId}`
    }, async ({ new: match }) => {
      if (matched) return
      matched = true
      channel.unsubscribe()
      if (invite) await supabase.from('friend_match_invites').update({ status: 'accepted' }).eq('id', invite.id)
      await renderPvpMatch(container, ctx, match.id, true, { myGC, gcDefs, stadiumDef })
    })
    .subscribe()

  setTimeout(() => { if (!matched) { channel.unsubscribe(); toast('Invitation expirée', 'info'); navigate('home') } }, 120000)
}

async function joinFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef) {
  const { state, navigate, toast } = ctx
  const myId = state.user.id

  // Chercher un match en attente
  const { data: match } = await supabase
    .from('matches')
    .select('id, home_id, away_id, status')
    .eq('away_id', myId)
    .eq('status', 'in_progress')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!match) {
    toast('Aucun match en attente', 'error')
    navigate('home')
    return
  }

  await renderPvpMatch(container, ctx, match.id, false, { myGC, gcDefs, stadiumDef })
}
