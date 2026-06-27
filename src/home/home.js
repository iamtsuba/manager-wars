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
  <div class="page">
    <div class="page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>

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
