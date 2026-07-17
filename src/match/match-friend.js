/**
 * match-friend.js — Mode Match Ami.
 *
 * Spécifique : invitation par ID ami, pas de matchmaking.
 * Tout le rendu PvP est délégué à match-pvp.js.
 */

import { supabase }          from '../lib/supabase.js'
import { loadMatchSetup, showGCSelection, _hideBottomNav, _showBottomNav } from './match-shared.js'
import { renderPvpMatch }    from './match-pvp.js'

export async function renderMatchFriend(container, ctx) {
  const { state, navigate, toast } = ctx
  const params = state.params || {}
  const friendId   = params.friendId   || null
  const friendName = params.friendName || 'Ami'

  await loadMatchSetup(container, ctx, 'friend', async ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs, stadiumDef }) => {
    _hideBottomNav(container)

    const proceed = async (chosenGC) => {
      const myGC = chosenGC || []
      if (friendId) {
        // Inviteur : créer le match et attendre que l'ami rejoigne
        await createFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef, friendId, friendName)
      } else {
        // Invité : rejoindre un match existant
        await joinFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef)
      }
    }

    if (!gcCardsEnriched?.length) { await proceed([]); return }
    showGCSelection(container, gcCardsEnriched, proceed)
  })
}

async function createFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef, friendId, friendName) {
  const { state, navigate, toast } = ctx
  const myId = state.user.id

  // Créer l'invitation (avec mon deck, nécessaire pour créer le match à l'acceptation)
  const { data: invite, error: inviteErr } = await supabase.from('friend_match_invites').insert({
    inviter_id: myId, invitee_id: friendId, friend_id: friendId, status: 'pending',
    inviter_deck_id: deckId, expires_at: new Date(Date.now() + 2*60*1000).toISOString()
  }).select('id').single()

  if (inviteErr || !invite) {
    console.error('[Friend] Erreur création invitation:', inviteErr)
    toast('Impossible de créer l\'invitation', 'error')
    navigate('home')
    return
  }

  container.innerHTML = `
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${friendName}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`

  let matched = false
  let channel = null

  const cleanup = async () => {
    if (channel) { channel.unsubscribe(); channel = null }
  }

  document.getElementById('cancel-friend')?.addEventListener('click', async () => {
    await cleanup()
    await supabase.from('friend_match_invites').update({ status: 'declined' }).eq('id', invite.id)
    _showBottomNav(container)
    navigate('home')
  })

  // L'ami accepte via la RPC accept_friend_invite, qui crée la ligne `matches`
  // et met à jour l'invitation (status='accepted', match_id) → on écoute ça.
  channel = supabase.channel(`friend_invite_${invite.id}`)
    .on('postgres_changes', {
      event: 'UPDATE', schema: 'public', table: 'friend_match_invites',
      filter: `id=eq.${invite.id}`
    }, async ({ new: row }) => {
      if (matched || row.status !== 'accepted' || !row.match_id) return
      matched = true
      await cleanup()
      await renderPvpMatch(container, ctx, row.match_id, true, { myGC, gcDefs, stadiumDef })
    })
    .subscribe()

  // Poll de secours (au cas où l'événement Realtime serait manqué)
  const pollTimer = setInterval(async () => {
    if (matched) return
    const { data: row } = await supabase.from('friend_match_invites').select('status, match_id').eq('id', invite.id).single()
    if (row?.status === 'accepted' && row.match_id) {
      matched = true
      clearInterval(pollTimer)
      await cleanup()
      await renderPvpMatch(container, ctx, row.match_id, true, { myGC, gcDefs, stadiumDef })
    }
  }, 3000)

  setTimeout(async () => {
    if (!matched) {
      clearInterval(pollTimer)
      await cleanup()
      toast('Invitation expirée', 'info')
      navigate('home')
    }
  }, 120000)
}

async function joinFriendMatch(container, ctx, deckId, myGC, gcDefs, stadiumDef) {
  const { state, navigate, toast } = ctx
  const myId = state.user.id

  // Chercher une invitation en attente pour moi
  const { data: invite } = await supabase
    .from('friend_match_invites')
    .select('id, inviter_id')
    .eq('invitee_id', myId)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!invite) {
    toast('Aucune invitation en attente', 'error')
    navigate('home')
    return
  }

  // Accepter via la RPC : crée réellement la ligne `matches`
  const { data: result, error } = await supabase.rpc('accept_friend_invite', {
    p_invite_id: invite.id, p_invitee_deck_id: deckId
  })

  if (error || !result?.success) {
    console.error('[Friend] Erreur accept_friend_invite:', error || result)
    toast(result?.error || 'Impossible de rejoindre le match', 'error')
    navigate('home')
    return
  }

  await renderPvpMatch(container, ctx, result.match_id, false, { myGC, gcDefs, stadiumDef })
}
