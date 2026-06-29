import { supabase } from '../lib/supabase.js'
import { showPendingPopup } from '../friends/friends.js'


// Version de build, affichée uniquement aux admins. Construite à partir de la
// date/heure réelle du build Vite (BUILD_TIME défini dans vite.config.js).
// Fallback sur la date courante si la variable n'est pas injectée (dev local).
const APP_VERSION = (typeof __BUILD_TIME__ !== 'undefined' && __BUILD_TIME__)
  ? __BUILD_TIME__
  : new Date().toISOString().slice(0,16).replace('T','-').replace(':','h')

export async function renderHome(container, { state, navigate, toast }) {
  const p = state.profile
  if (!p) return

  container.innerHTML = `
  <style>
    @media (min-width: 768px) {
      .home-page-body {
        max-width: 700px !important;
        height: 100%;
        box-sizing: border-box;
        display: flex !important;
        flex-direction: column;
        gap: 10px !important;
        overflow: hidden;
      }
      /* Hero : taille fixe */
      .home-page-body .hero-compact { flex-shrink: 0; }
      /* Bannières dynamiques : taille fixe */
      #friend-requests-banner, #match-invite-banner, #ongoing-match-banner { flex-shrink: 0; }
      /* Ranked : hauteur fixe */
      .home-page-body .ranked-banner { flex-shrink: 0; min-height: 80px; max-height: 80px; }
      /* Grille 2x2 : prend tout l'espace restant */
      .home-page-body .play-grid {
        flex: 1 1 0;
        min-height: 0;
        grid-template-rows: 1fr 1fr;
      }
      .home-page-body .play-card { min-height: unset; height: 100%; }
      /* Boutons bas : taille fixe */
      .home-page-body > div:last-child { flex-shrink: 0; }
    }
  </style>
  <div class="page" style="height:100%;overflow:hidden">
    <div class="page-body home-page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>
      <!-- Invitations de match ami en attente -->
      <div id="match-invite-banner"></div>
      <!-- Match(s) en cours à reprendre -->
      <div id="ongoing-match-banner"></div>
      <!-- Invitation match ami en attente -->

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${p.club_color1};border:2px solid ${p.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="${import.meta.env.BASE_URL}icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${p.pseudo}</h3>
          <div class="level">Niveau ${p.level} · ${p.club_name}</div>
        </div>
        <button class="nav-rankings-btn" id="nav-matches" title="Mes matchs" style="margin-left:auto">
          <img src="${import.meta.env.BASE_URL}icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:22px'}))">
        </button>
      </div>

      <!-- Ranked (bouton) -->
      <div class="ranked-banner play-card" data-action="ranked">
        <img src="${import.meta.env.BASE_URL}icons/badge-ranked.png" alt="" class="play-icon">
        <img src="${import.meta.env.BASE_URL}icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay">
      </div>

      <!-- Jeu : 4 tuiles -->
      <div class="play-grid">
        <div class="play-card" data-action="match-ai">
          <img src="${import.meta.env.BASE_URL}icons/badge-ai.png" alt="" class="play-icon">
          <img src="${import.meta.env.BASE_URL}icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay">
        </div>
        <div class="play-card" data-action="match-random">
          <img src="${import.meta.env.BASE_URL}icons/badge-random.png" alt="" class="play-icon">
          <img src="${import.meta.env.BASE_URL}icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay">
        </div>
        <div class="play-card" data-action="match-friend">
          <img src="${import.meta.env.BASE_URL}icons/badge-vs.png" alt="" class="play-icon">
          <img src="${import.meta.env.BASE_URL}icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay">
        </div>
        <div class="play-card" data-action="mini-league">
          <img src="${import.meta.env.BASE_URL}icons/badge-league.png" alt="" class="play-icon">
          <img src="${import.meta.env.BASE_URL}icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay">
        </div>
      </div>

            <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${p.is_admin ? `
        <a href="${import.meta.env.BASE_URL}admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${APP_VERSION}</div>` : ''}
      </div>

    </div>
  </div>
  `

  // Navigation
  container.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      navigate(el.dataset.nav)
    })
  })

  document.getElementById('nav-rankings')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('nav-matches')?.addEventListener('click', () => navigate('matches'))

  // Actions jeu
  container.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', () => {
      // Effet visuel : +20% luminosité au clic
      el.classList.add('tapped')
      setTimeout(() => el.classList.remove('tapped'), 200)

      const action = el.dataset.action
      if (action === 'match-ai') { showDifficultyPicker(navigate); return }
      if (action === 'match-random') { navigate('match', { matchMode: 'random' }); return }
      if (action === 'match-friend') { navigate('friends'); return }
      // Modes pas encore développés : bientôt disponible
      toast('Bientôt disponible', 'info')
    })
  })

  document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut()
    window.location.reload()
  })

  // Charger les demandes d'amis en attente (sans bloquer le rendu)
  loadFriendRequestsBanner(state, toast)
  // Charger les invitations de match ami en attente
  loadMatchInviteBanner(state, toast, navigate)
  // Charger les matchs en cours à reprendre
  loadOngoingMatchBanner(state, toast, navigate)
  // Vérifier si un ami nous invite à jouer
}

// ── Bannière : match(s) en cours à reprendre ────────────────────────────────
async function loadOngoingMatchBanner(state, toast, navigate) {
  const banner = document.getElementById('ongoing-match-banner')
  if (!banner) return
  const uid = state.profile.id

  // Matchs actifs où je suis impliqué
  const { data: matches } = await supabase
    .from('matches')
    .select('id, home_id, away_id, status, mode')
    .eq('status', 'active')
    .or(`home_id.eq.${uid},away_id.eq.${uid}`)
    .order('created_at', { ascending: false })

  if (!matches?.length) { banner.innerHTML = ''; return }

  // Récupérer les noms des adversaires
  const oppIds = matches.map(m => m.home_id === uid ? m.away_id : m.home_id).filter(Boolean)
  let names = {}
  if (oppIds.length) {
    const { data: profs } = await supabase.from('users').select('id, pseudo, club_name').in('id', oppIds)
    ;(profs||[]).forEach(p => { names[p.id] = p.club_name || p.pseudo })
  }

  banner.innerHTML = matches.map(m => {
    const oppId = m.home_id === uid ? m.away_id : m.home_id
    const oppName = names[oppId] || 'Adversaire'
    const modeLabel = m.mode === 'friend' ? 'Match ami' : 'Match'
    return `
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${modeLabel} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${oppName}</div>
        </div>
        <button data-resume="${m.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${m.id}" data-opp="${oppId}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`
  }).join('')

  banner.querySelectorAll('[data-resume]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const { resumePvpMatch } = await import('../match/match-random.js')
      const container = document.getElementById('page-content') || document.getElementById('app')
      resumePvpMatch(container, { state, navigate, toast, openModal: null, closeModal: null, refreshProfile: null }, btn.dataset.resume)
    })
  })

  banner.querySelectorAll('[data-abandon]').forEach(btn => {
    btn.addEventListener('click', () => {
      showAbandonConfirm(async () => {
        await abandonMatch(btn.dataset.abandon, btn.dataset.opp, uid)
        toast('Match abandonné (défaite 3-0)', 'info')
        loadOngoingMatchBanner(state, toast, navigate)
      })
    })
  })
}

// Abandonner un match : défaite 3-0 pour celui qui abandonne, victoire pour l'adversaire
async function abandonMatch(matchId, oppId, uid) {
  // Récupérer le match pour savoir qui est home/away
  const { data: m } = await supabase.from('matches').select('home_id, away_id, game_state').eq('id', matchId).single()
  if (!m) return
  const amIHome = m.home_id === uid
  // L'adversaire gagne 3-0
  const home_score = amIHome ? 0 : 3
  const away_score = amIHome ? 3 : 0
  const gs = m.game_state || {}
  gs.p1Score = home_score; gs.p2Score = away_score
  gs.phase = 'finished'; gs.forfeit = true
  await supabase.from('matches').update({
    status: 'finished', forfeit: true, winner_id: oppId,
    home_score, away_score, game_state: gs
  }).eq('id', matchId)
}

// Popup de confirmation d'abandon
function showAbandonConfirm(onConfirm) {
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px'
  ov.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.querySelector('#ab-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#ab-ok').addEventListener('click', () => { ov.remove(); onConfirm() })
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

// ── Bannière invitation de match ami en attente ──────────────────────────────
async function loadMatchInviteBanner(state, toast, navigate) {
  const banner = document.getElementById('match-invite-banner')
  if (!banner) return

  const { data: invites } = await supabase
    .from('friend_match_invites')
    .select('id, inviter_id, inviter:users!inviter_id(pseudo, club_name)')
    .eq('invitee_id', state.user.id)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!invites) { banner.innerHTML = ''; return }

  const inviterName = invites.inviter?.club_name || invites.inviter?.pseudo || '?'
  const inviterId = invites.inviter_id

  banner.innerHTML = `
    <div id="match-invite-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1a0a2e,#4a0a8a);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(74,10,138,0.4);
      animation:matchInvPulse 2s ease-in-out infinite;
    ">
      <style>@keyframes matchInvPulse{0%,100%{box-shadow:0 3px 12px rgba(74,10,138,0.4)}50%{box-shadow:0 3px 24px rgba(74,10,138,0.8)}}</style>
      <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:900">${inviterName} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`

  document.getElementById('match-inv-accept')?.addEventListener('click', () => {
    banner.innerHTML = ''
    navigate('match', { matchMode: 'friend', friendId: inviterId, friendName: inviterName })
  })
  document.getElementById('match-inv-decline')?.addEventListener('click', async () => {
    await supabase.from('friend_match_invites').update({ status: 'declined' }).eq('id', invites.id)
    banner.innerHTML = ''
    toast('Invitation refusée', 'info')
  })
}

// ── Bannière demandes d'amis en attente ─────────────────────────────────────
async function loadFriendRequestsBanner(state, toast) {
  const banner = document.getElementById('friend-requests-banner')
  if (!banner) return

  const { data: pending, error } = await supabase
    .from('friendships')
    .select('id, requester:users!requester_id(pseudo, club_name)')
    .eq('addressee_id', state.user.id)
    .eq('status', 'pending')

  if (error || !pending?.length) {
    banner.innerHTML = ''
    return
  }

  const count = pending.length
  const names = pending.slice(0, 2).map(r => r.requester?.pseudo || '?').join(', ')
  const extra = count > 2 ? ` +${count - 2}` : ''

  banner.innerHTML = `
    <div id="friend-req-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1A6B3C,#2a9d5c);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(26,107,60,0.35);
      animation:friendReqPulse 2.5s ease-in-out infinite;
    ">
      <style>
        @keyframes friendReqPulse {
          0%,100% { box-shadow:0 3px 12px rgba(26,107,60,0.35) }
          50% { box-shadow:0 3px 22px rgba(26,107,60,0.65) }
        }
      </style>
      <div style="background:rgba(255,255,255,0.25);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">
          ${count} demande${count > 1 ? 's' : ''} d'ami${count > 1 ? 's' : ''} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${names}${extra}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`

  document.getElementById('friend-req-btn').addEventListener('click', () => {
    showPendingPopup(state, toast, () => loadFriendRequestsBanner(state, toast))
  })
}


// Sélecteur de difficulté IA (GDD §3.1)
function showDifficultyPicker(navigate) {
  const levels = [
    { mode:'vs_ai_easy',   label:'Facile',    sub:'Gain 500 cr.',  icon:'🟢' },
    { mode:'vs_ai_medium', label:'Moyen',     sub:'Gain 1 000 cr.', icon:'🟡' },
    { mode:'vs_ai_hard',   label:'Difficile', sub:'Gain 1 500 cr.', icon:'🟠' },
    { mode:'vs_ai_club',   label:'Club',      sub:'Gain 2 500 cr.', icon:'🔴' },
  ]
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.style.zIndex = '2000'
  overlay.innerHTML = `
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${levels.map(l => `
            <div class="action-card" data-mode="${l.mode}" style="cursor:pointer">
              <div class="icon">${l.icon}</div>
              <div class="label">${l.label}</div>
              <div class="sub">${l.sub}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `
  document.body.appendChild(overlay)
  const cleanup = () => overlay.remove()
  document.getElementById('diff-cancel').addEventListener('click', cleanup)
  overlay.addEventListener('click', e => { if (e.target === overlay) cleanup() })
  overlay.querySelectorAll('[data-mode]').forEach(el => {
    el.addEventListener('click', () => {
      cleanup()
      navigate('match', { matchMode: el.dataset.mode })
    })
  })
}
