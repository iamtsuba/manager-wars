import { supabase } from '../lib/supabase.js'

export async function renderHome(container, { state, navigate, toast }) {
  const p = state.profile
  if (!p) return

  // Stats récentes
  const { data: recentMatches } = await supabase
    .from('matches')
    .select('id,home_score,away_score,status,mode,winner_id,created_at')
    .or(`home_id.eq.${p.id},away_id.eq.${p.id}`)
    .eq('status','finished')
    .order('created_at', { ascending: false })
    .limit(3)

  const parts = (p.club_name || 'MW').split(' ').filter(Boolean)
  const ini = parts.length >= 2 ? (parts[0][0]+parts[1][0]).toUpperCase() : (p.club_name||'MW').slice(0,2).toUpperCase()

  container.innerHTML = `
  <div class="page">
    <div class="page-body">

      <!-- Hero profil -->
      <div class="hero">
        <div class="info">
          <h3>${p.pseudo}</h3>
          <div class="level">Niveau ${p.level} · ${p.club_name}</div>
          <div class="stats">
            <div class="stat"><span class="val">${p.wins}</span><span class="lbl">V</span></div>
            <div class="stat"><span class="val">${p.trophies_top1}</span><span class="lbl">TOP1</span></div>
            <div class="stat"><span class="val">${(p.credits||0).toLocaleString('fr')}</span><span class="lbl">Crédits</span></div>
          </div>
        </div>
        <div class="logo-big" style="background:${p.club_color2};border-color:${p.club_color1}">
          <span style="color:${p.club_color1}">${ini}</span>
        </div>
      </div>

      <!-- Ranked -->
      <div class="ranked-banner">
        <img src="${import.meta.env.BASE_URL}icons/badge-legendary.png" alt="" class="ranked-icon">
        <img src="${import.meta.env.BASE_URL}icons/badge-ranked.png" alt="Ranked" class="ranked-text">
      </div>

      <!-- Jeu -->
      <div>
        <div class="section-title">🎮 Jouer</div>
        <div class="play-grid">
          <div class="play-card" data-action="match-ai">
            <img src="${import.meta.env.BASE_URL}icons/badge-ai.png" alt="" class="play-icon">
            <img src="${import.meta.env.BASE_URL}icons/badge-matchia-txt.png" alt="Match IA" class="play-text" onerror="this.style.display='none'">
          </div>
          <div class="play-card" data-action="match-random">
            <img src="${import.meta.env.BASE_URL}icons/badge-vs.png" alt="" class="play-icon">
            <img src="${import.meta.env.BASE_URL}icons/badge-random.png" alt="Match Random" class="play-text">
          </div>
          <div class="play-card" data-action="match-friend">
            <img src="${import.meta.env.BASE_URL}icons/badge-championship.png" alt="" class="play-icon">
            <img src="${import.meta.env.BASE_URL}icons/badge-matchfriend.png" alt="Match Friend" class="play-text">
          </div>
          <div class="play-card" data-action="championship">
            <img src="${import.meta.env.BASE_URL}icons/badge-trophy.png" alt="" class="play-icon">
            <img src="${import.meta.env.BASE_URL}icons/badge-minileague-txt.png" alt="Mini League" class="play-text" onerror="this.style.display='none'">
          </div>
        </div>
      </div>

      <!-- Collection rapide -->
      <div>
        <div class="section-title">
          🃏 Ma collection
          <a href="#" data-nav="collection">Voir tout</a>
        </div>
        <div class="action-grid" style="grid-template-columns:1fr 1fr 1fr">
          <div class="action-card" data-nav="collection">
            <div class="icon">📖</div>
            <div class="label">Cartes</div>
          </div>
          <div class="action-card" data-nav="decks">
            <div class="icon">📋</div>
            <div class="label">Decks</div>
          </div>
          <div class="action-card" data-nav="boosters">
            <div class="icon">📦</div>
            <div class="label">Boosters</div>
          </div>
        </div>
      </div>

      <!-- Marché & Classement -->
      <div>
        <div class="section-title">🌐 Marché & Social</div>
        <div class="action-grid" style="grid-template-columns:1fr 1fr">
          <div class="action-card" data-nav="market">
            <div class="icon">🛒</div>
            <div class="label">Marché</div>
          </div>
          <div class="action-card" data-nav="rankings">
            <div class="icon">📊</div>
            <div class="label">Classement</div>
          </div>
        </div>
      </div>

      <!-- Derniers matchs -->
      ${recentMatches && recentMatches.length > 0 ? `
      <div>
        <div class="section-title">⚽ Derniers matchs</div>
        <div class="card-panel" style="padding:0">
          ${recentMatches.map(m => {
            const isWin  = m.winner_id === p.id
            const isDraw = m.home_score === m.away_score
            const result = isDraw ? 'N' : isWin ? 'V' : 'D'
            const color  = isDraw ? '#888' : isWin ? '#1A6B3C' : '#c0392b'
            const label  = {vs_ai_easy:'IA Facile',vs_ai_medium:'IA Moyen',vs_ai_hard:'IA Difficile',vs_ai_club:'IA Club',friend_challenge:'Défi ami',championship:'Championnat'}[m.mode] || m.mode
            const date = new Date(m.created_at)
            const dateStr = date.toLocaleDateString('fr', {month:'short', day:'numeric'})
            return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${label}</div>
                <div style="font-size:11px;color:var(--gray-600)">${dateStr}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${m.home_score} - ${m.away_score}</span>
                <span style="background:${color};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${result}</span>
              </div>
            </div>`
          }).join('')}
        </div>
      </div>` : ''}

      <!-- Logout -->
      <div style="text-align:center;padding:12px 0">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
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

  // Actions jeu
  container.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', () => {
      // Effet visuel : +20% luminosité au clic
      el.classList.add('tapped')
      setTimeout(() => el.classList.remove('tapped'), 200)

      const action = el.dataset.action
      if (action === 'championship') { toast('Championnats — bientôt disponibles', 'info'); return }
      if (action === 'match-random') { toast('Matchmaking aléatoire — bientôt disponible', 'info'); return }
      if (action === 'match-friend') { toast('Défi ami — bientôt disponible', 'info'); return }
      if (action === 'match-ai') showDifficultyPicker(navigate)
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
