import { supabase } from '../lib/supabase.js'

// ── Couleurs par défaut ─────────────────────────────────────────────────────
const GREEN  = '#1A6B3C'
const RED    = '#cc2222'
const YELLOW = '#D4A017'
const GRAY   = '#888'

// ══════════════════════════════════════════════════════════════════════════════
// Point d'entrée principal
// ══════════════════════════════════════════════════════════════════════════════
export async function renderFriends(container, ctx) {
  const { state, toast } = ctx

  container.innerHTML = `
    <div style="padding:16px;max-width:640px;margin:0 auto">
      <h2 style="font-size:20px;font-weight:900;margin-bottom:16px">👥 Amis</h2>

      <!-- Actions -->
      <div style="display:flex;gap:10px;margin-bottom:20px">
        <button id="btn-add-friend" class="btn btn-primary" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
          ➕ Ajouter un ami
        </button>
        <button id="btn-accept-friend" class="btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:#fff;border:1.5px solid var(--green,#1A6B3C);color:var(--green,#1A6B3C);font-weight:700">
          ✅ Accepter un ami
          <span id="pending-badge" style="display:none;background:#cc2222;color:#fff;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center"></span>
        </button>
      </div>

      <!-- Liste amis -->
      <div id="friends-list">
        <div style="text-align:center;color:#aaa;padding:32px">Chargement…</div>
      </div>
    </div>`

  await loadFriendsList(state, toast, ctx)

  document.getElementById('btn-add-friend').addEventListener('click', () => showAddFriendPopup(state, toast))
  document.getElementById('btn-accept-friend').addEventListener('click', () => showPendingPopup(state, toast, null, ctx))
}

// ══════════════════════════════════════════════════════════════════════════════
// Charger la liste d'amis acceptés
// ══════════════════════════════════════════════════════════════════════════════
async function loadFriendsList(state, toast, ctx = {}) {
  const { navigate } = ctx
  const uid = state.user.id

  // Récupérer les amitiés acceptées (je suis requester ou addressee)
  // 1. Récupérer les amitiés acceptées (sans jointure complexe pour fiabilité)
  const { data: rows, error } = await supabase
    .from('friendships')
    .select('id, requester_id, addressee_id')
    .eq('status', 'accepted')
    .or(`requester_id.eq.${uid},addressee_id.eq.${uid}`)

  // Badge demandes en attente
  const { count: pendingCount } = await supabase
    .from('friendships')
    .select('id', { count: 'exact', head: true })
    .eq('addressee_id', uid)
    .eq('status', 'pending')

  const badge = document.getElementById('pending-badge')
  if (badge) {
    if (pendingCount > 0) {
      badge.style.display = 'flex'
      badge.textContent = pendingCount
    } else {
      badge.style.display = 'none'
    }
  }

  const list = document.getElementById('friends-list')
  if (!list) return

  if (error) {
    console.error('[Friends] Erreur:', error)
    list.innerHTML = `<div style="color:${RED};text-align:center;padding:16px">Erreur chargement : ${error.message}</div>`
    return
  }

  // 2. Charger les profils des amis
  const friendIds = (rows || []).map(r => r.requester_id === uid ? r.addressee_id : r.requester_id)
  let profilesMap = {}
  if (friendIds.length) {
    const { data: profiles } = await supabase
      .from('users')
      .select('id, pseudo, club_name, last_seen_at, club_color1, club_color2')
      .in('id', friendIds)
    ;(profiles || []).forEach(p => { profilesMap[p.id] = p })
  }

  const friends = (rows || []).map(row => ({
    friendshipId: row.id,
    friend: profilesMap[row.requester_id === uid ? row.addressee_id : row.requester_id] || { pseudo: '?' }
  }))

  if (!friends.length) {
    list.innerHTML = `
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`
    return
  }

  list.innerHTML = `
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${friends.length} ami${friends.length > 1 ? 's' : ''}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${friends.map(({ friendshipId, friend }) => friendCardHTML(friend, friendshipId)).join('')}
    </div>`

  // Listeners boutons
  list.querySelectorAll('[data-stats]').forEach(btn => {
    btn.addEventListener('click', () => showStatsPopup(state, btn.dataset.stats, btn.dataset.friendName))
  })
  list.querySelectorAll('[data-match]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const fid = btn.dataset.friendId
      const fname = btn.dataset.friendName
      if (typeof navigate !== 'function') { toast('Erreur navigation', 'error'); return }

      // Cet ami m'a-t-il DÉJÀ envoyé une invitation en attente ? Si oui, je
      // dois la rejoindre au lieu d'en créer une nouvelle (sinon si les deux
      // joueurs cliquent chacun de leur côté, les deux créent une invitation
      // et personne ne rejoint jamais — match bloqué indéfiniment).
      const myId = state.user.id
      const { data: pendingFromFriend } = await supabase
        .from('friend_match_invites')
        .select('id')
        .eq('inviter_id', fid).eq('invitee_id', myId).eq('status', 'pending')
        .order('created_at', { ascending: false }).limit(1).maybeSingle()

      const isAccepting = !!pendingFromFriend
      console.log('[Friends] clic match', { fid, fname, isAccepting })
      navigate('match', { matchMode: 'friend', friendId: fid, friendName: fname, isAccepting })
    })
  })
}

// ── HTML d'une carte ami ────────────────────────────────────────────────────
function friendCardHTML(friend, friendshipId) {
  const clubName = friend.club_name || friend.pseudo || '?'
  const pseudo   = friend.pseudo || ''
  const initials = (pseudo || clubName).slice(0, 2).toUpperCase()

  // Couleurs du club (fallback vert)
  const bg = friend.club_color2 || GREEN
  const fg = friend.club_color1 || '#ffffff'

  // Présence : vert si vu il y a moins de 3 minutes
  const lastSeen = friend.last_seen_at ? new Date(friend.last_seen_at) : null
  const isOnline = lastSeen && (Date.now() - lastSeen.getTime()) < 3 * 60 * 1000
  const dot = `<div style="width:10px;height:10px;border-radius:50%;background:${isOnline?'#22c55e':'#ef4444'};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`

  return `
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${bg};border:2.5px solid ${fg};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${fg}">
          ${initials}
        </div>
        ${dot}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${clubName}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${pseudo}</div>
        <div style="font-size:11px;color:${isOnline?'#22c55e':'#bbb'};font-weight:600;margin-top:1px">${isOnline?'🟢 En ligne':'🔴 Hors ligne'}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${friendshipId}" data-friend-id="${friend.id}" data-friend-name="${clubName}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${friend.id}" data-friend-name="${clubName}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${YELLOW};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`
}

// ══════════════════════════════════════════════════════════════════════════════
// Popup : Ajouter un ami (par pseudo)
// ══════════════════════════════════════════════════════════════════════════════
function showAddFriendPopup(state, toast) {
  const ov = createOverlay()
  ov.innerHTML = `
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${RED};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${popupStyles()}`
  document.body.appendChild(ov)

  const input = ov.querySelector('#friend-pseudo-input')
  const errEl = ov.querySelector('#add-friend-error')
  const close = () => ov.remove()

  input.focus()
  ov.querySelector('#add-cancel').addEventListener('click', close)
  ov.addEventListener('click', e => { if (e.target === ov) close() })

  ov.querySelector('#add-ok').addEventListener('click', async () => {
    const pseudo = input.value.trim()
    if (!pseudo) { errEl.textContent = 'Entre un pseudo'; return }
    errEl.textContent = ''

    // Trouver l'utilisateur par pseudo
    const { data: found } = await supabase
      .from('users').select('id, pseudo').ilike('pseudo', pseudo).single()

    if (!found) { errEl.textContent = 'Utilisateur introuvable'; return }
    if (found.id === state.user.id) { errEl.textContent = 'Tu ne peux pas t\'ajouter toi-même'; return }

    // Vérifier si amitié existe déjà
    const { data: existing } = await supabase.from('friendships').select('id, status')
      .or(`and(requester_id.eq.${state.user.id},addressee_id.eq.${found.id}),and(requester_id.eq.${found.id},addressee_id.eq.${state.user.id})`)
      .single()

    if (existing) {
      const msg = existing.status === 'accepted' ? 'Vous êtes déjà amis !'
        : existing.status === 'pending' ? 'Demande déjà envoyée'
        : 'Une demande existe déjà'
      errEl.textContent = msg
      return
    }

    const { error } = await supabase.from('friendships').insert({
      requester_id: state.user.id,
      addressee_id: found.id,
      status: 'pending'
    })

    if (error) { errEl.textContent = 'Erreur : ' + error.message; return }

    close()
    toast(`✅ Demande envoyée à ${found.pseudo} !`, 'success')
  })
}

// ══════════════════════════════════════════════════════════════════════════════
// Popup : Demandes en attente
// ══════════════════════════════════════════════════════════════════════════════
export async function showPendingPopup(state, toast, onUpdate = null, ctx = {}) {
  const uid = state.user.id
  const { data: pendingRows } = await supabase
    .from('friendships')
    .select('id, requester_id')
    .eq('addressee_id', uid)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })

  // Charger les profils des requeteurs
  const reqIds = (pendingRows || []).map(r => r.requester_id)
  let reqProfiles = {}
  if (reqIds.length) {
    const { data: profs } = await supabase.from('users').select('id, pseudo, club_name').in('id', reqIds)
    ;(profs || []).forEach(p => { reqProfiles[p.id] = p })
  }
  const pending = (pendingRows || []).map(r => ({ ...r, requester: reqProfiles[r.requester_id] || { pseudo: '?' } }))

  const ov = createOverlay()
  const rows = pending || []

  ov.innerHTML = `
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${!rows.length
        ? `<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>`
        : `<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${rows.map(r => `
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${r.requester?.club_name || r.requester?.pseudo || '?'}
                  <span style="font-size:11px;color:#999;font-weight:400">(${r.requester?.pseudo || ''})</span>
                </div>
                <button data-accept="${r.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${GREEN};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${r.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${RED};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`).join('')}
           </div>`
      }
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${popupStyles()}`
  document.body.appendChild(ov)

  const close = () => ov.remove()
  ov.querySelector('#pending-close').addEventListener('click', close)
  ov.addEventListener('click', e => { if (e.target === ov) close() })

  ov.querySelectorAll('[data-accept]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const { error } = await supabase.from('friendships')
        .update({ status: 'accepted' })
        .eq('id', btn.dataset.accept)
      if (error) { toast('Erreur : ' + error.message, 'error'); return }
      btn.closest('div[style]').remove()
      toast('✅ Ami accepté !', 'success')
      // Recharger la liste amis et la bannière home si callback fourni
      loadFriendsList(state, toast, ctx)
      if (onUpdate) onUpdate()
    })
  })

  ov.querySelectorAll('[data-decline]').forEach(btn => {
    btn.addEventListener('click', async () => {
      await supabase.from('friendships')
        .delete()
        .eq('id', btn.dataset.decline)
      btn.closest('div[style]').remove()
      toast('Demande refusée', 'info')
      if (onUpdate) onUpdate()
    })
  })
}

// ══════════════════════════════════════════════════════════════════════════════
// Popup : Stats entre 2 amis
// ══════════════════════════════════════════════════════════════════════════════
async function showStatsPopup(state, friendId, friendName) {
  const uid = state.user.id
  // Ordonner les IDs pour retrouver la ligne (player1_id < player2_id)
  const [p1, p2] = [uid, friendId].sort()
  const iAmP1 = uid === p1

  const { data: stats } = await supabase
    .from('friend_match_stats')
    .select('*')
    .eq('player1_id', p1)
    .eq('player2_id', p2)
    .single()

  const myName = state.profile.club_name || state.profile.pseudo || 'Moi'

  // Orienter les stats selon ma perspective
  const s = stats || {}
  const myWins    = iAmP1 ? (s.wins_p1 || 0) : (s.wins_p2 || 0)
  const oppWins   = iAmP1 ? (s.wins_p2 || 0) : (s.wins_p1 || 0)
  const draws     = s.draws || 0
  const myGoals   = iAmP1 ? (s.goals_p1 || 0) : (s.goals_p2 || 0)
  const oppGoals  = iAmP1 ? (s.goals_p2 || 0) : (s.goals_p1 || 0)
  const myGC      = iAmP1 ? (s.gc_used_p1 || 0) : (s.gc_used_p2 || 0)
  const oppGC     = iAmP1 ? (s.gc_used_p2 || 0) : (s.gc_used_p1 || 0)
  const total     = s.matches_total || 0

  const statRow = (label, myVal, oppVal, myColor = GREEN, oppColor = RED) => `
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${myColor}">${myVal}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${label}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${oppColor}">${oppVal}</div>
    </div>`

  const ov = createOverlay()
  ov.innerHTML = `
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${friendName}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${myName}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${friendName}</div>
      </div>
      ${total === 0 ? `
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`
      : `
        ${statRow('Victoires', myWins, oppWins)}
        ${statRow('Nuls', draws, draws, GRAY, GRAY)}
        ${statRow('Défaites', oppWins, myWins)}
        ${statRow('Buts marqués', myGoals, oppGoals)}
        ${statRow('Buts encaissés', oppGoals, myGoals, RED, GREEN)}
        ${statRow('GC utilisés ⚡', myGC, oppGC, '#7a28b8', '#7a28b8')}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${total} match${total > 1 ? 's' : ''} joué${total > 1 ? 's' : ''}</div>`
      }
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${popupStyles()}`
  document.body.appendChild(ov)

  ov.querySelector('#stats-close').addEventListener('click', () => ov.remove())
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

// ══════════════════════════════════════════════════════════════════════════════
// Helpers UI
// ══════════════════════════════════════════════════════════════════════════════
function createOverlay() {
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px'
  return ov
}

function popupStyles() {
  return `
    <style>
      .popup-box {
        background:#fff;border-radius:18px;padding:24px;
        width:100%;max-width:420px;
        box-shadow:0 8px 40px rgba(0,0,0,0.25);
        max-height:85vh;overflow-y:auto;
      }
      .popup-title {
        font-size:18px;font-weight:900;margin-bottom:14px;
      }
      .popup-btn-ok {
        flex:1;padding:12px;border-radius:10px;border:none;
        background:${GREEN};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`
}

// ══════════════════════════════════════════════════════════════════════════════
// Export helper pour match-random : mettre à jour les stats après un match ami
// ══════════════════════════════════════════════════════════════════════════════
export async function updateFriendMatchStats({ player1Id, player2Id, score1, score2, gc1, gc2 }) {
  const [p1, p2] = [player1Id, player2Id].sort()
  const swapped  = player1Id !== p1
  const s1 = swapped ? score2 : score1
  const s2 = swapped ? score1 : score2
  const g1 = swapped ? gc2 : gc1
  const g2 = swapped ? gc1 : gc2

  const wins_p1 = s1 > s2 ? 1 : 0
  const wins_p2 = s2 > s1 ? 1 : 0
  const draw    = s1 === s2 ? 1 : 0

  // Upsert : si la ligne n'existe pas on la crée, sinon on incrémente
  const { data: existing } = await supabase
    .from('friend_match_stats')
    .select('*').eq('player1_id', p1).eq('player2_id', p2).single()

  if (existing) {
    await supabase.from('friend_match_stats').update({
      wins_p1: existing.wins_p1 + wins_p1,
      wins_p2: existing.wins_p2 + wins_p2,
      draws:   existing.draws + draw,
      goals_p1: existing.goals_p1 + s1,
      goals_p2: existing.goals_p2 + s2,
      gc_used_p1: existing.gc_used_p1 + g1,
      gc_used_p2: existing.gc_used_p2 + g2,
      matches_total: existing.matches_total + 1
    }).eq('player1_id', p1).eq('player2_id', p2)
  } else {
    await supabase.from('friend_match_stats').insert({
      player1_id: p1, player2_id: p2,
      wins_p1, wins_p2, draws: draw,
      goals_p1: s1, goals_p2: s2,
      gc_used_p1: g1, gc_used_p2: g2,
      matches_total: 1
    })
  }
}
