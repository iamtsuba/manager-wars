import { supabase } from '../lib/supabase.js'

export async function renderHome(container, { state, navigate, toast }) {
  const p = state.profile
  if (!p) return

  container.innerHTML = `
  <div class="page">
    <div class="page-body">

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
        </a>` : ''}
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
      // Modes pas encore développés : bientôt disponible
      toast('Bientôt disponible', 'info')
    })
  })

  document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut()
    window.location.reload()
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
