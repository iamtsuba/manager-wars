import { supabase } from '../lib/supabase.js'
import { showPendingPopup } from '../friends/friends.js'

const APP_VERSION = (typeof __BUILD_TIME__ !== 'undefined' && __BUILD_TIME__)
  ? __BUILD_TIME__
  : new Date().toISOString().slice(0,16).replace('T','-').replace(':','h')

export async function renderHome(container, { state, navigate, toast }) {
  const p = state.profile
  if (!p) return

  container.innerHTML = `
  <style>
    .home-dark {
      min-height: 100%;
      background: radial-gradient(ellipse at 20% 50%, rgba(0,60,30,0.55) 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 20%, rgba(0,40,80,0.4) 0%, transparent 55%),
                  linear-gradient(160deg, #0a0f0a 0%, #0d1a0f 40%, #080d08 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 16px 16px 80px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .home-inner {
      width: 100%;
      max-width: 560px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .home-hero {
      background: linear-gradient(135deg, ${p.club_color1}cc, ${p.club_color2}88);
      border: 1.5px solid ${p.club_color2};
      border-radius: 16px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .home-hero-info h3 { margin:0; font-size:17px; font-weight:900; color:#fff; }
    .home-hero-info .level { font-size:11px; color:rgba(255,255,255,0.7); letter-spacing:1px; text-transform:uppercase; margin-top:2px; }
    .home-hero-btn {
      width:38px; height:38px; border-radius:50%; border:none;
      background:rgba(255,255,255,0.15); cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      transition: background .2s;
    }
    .home-hero-btn:hover { background:rgba(255,255,255,0.25); }
    .home-hero-btn img { width:22px; height:22px; object-fit:contain; }

    .ranked-tile {
      border-radius: 16px;
      background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%);
      border: 1.5px solid rgba(122,40,184,0.6);
      box-shadow: 0 4px 20px rgba(122,40,184,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      transition: transform .15s, box-shadow .15s;
    }
    .ranked-tile:active { transform: scale(.97); }

    .play-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .play-tile {
      border-radius: 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: transform .15s, background .15s;
      backdrop-filter: blur(4px);
    }
    .play-tile:hover { background: rgba(255,255,255,0.09); }
    .play-tile:active { transform: scale(.96); }
    .play-text-overlay { max-height: 26px !important; width: auto !important; }
    .ranked-tile .play-text-overlay { max-height: 34px !important; }
    .play-text-overlay { max-height: 28px !important; width: auto !important; }
    .ranked-tile .play-text-overlay { max-height: 36px !important; }

    .home-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 4px 0;
    }
    .home-logout-btn {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      color: rgba(255,255,255,0.5);
      font-size: 12px;
      padding: 6px 18px;
      cursor: pointer;
      transition: background .2s;
    }
    .home-logout-btn:hover { background: rgba(255,255,255,0.12); }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">

      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <!-- Hero / pseudo -->
      <div class="home-hero">
        <button class="home-hero-btn" id="nav-rankings">
          <img src="${import.meta.env.BASE_URL}icons/badge-trophy.png" alt="Classement" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'🏆',style:'font-size:20px'}))">
        </button>
        <div class="home-hero-info" style="flex:1">
          <h3>${p.pseudo}</h3>
          <div class="level">Niveau ${p.level} · ${p.club_name}</div>
        </div>
        <button class="home-hero-btn" id="nav-matches">
          <img src="${import.meta.env.BASE_URL}icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:20px'}))">
        </button>
      </div>

      <!-- Ranked -->
      <div class="ranked-tile" data-action="ranked">
        <div class="play-badge-group">
          <img src="${import.meta.env.BASE_URL}icons/badge-ranked.png" alt="" class="play-icon" style="height:80px">
          <img src="${import.meta.env.BASE_URL}icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay">
        </div>
      </div>

      <!-- Grille 2x2 -->
      <div class="play-grid">
        <div class="play-tile" data-action="match-ai">
          <div class="play-badge-group">
            <img src="${import.meta.env.BASE_URL}icons/badge-ai.png" alt="" class="play-icon" style="height:70px">
            <img src="${import.meta.env.BASE_URL}icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="match-random">
          <div class="play-badge-group">
            <img src="${import.meta.env.BASE_URL}icons/badge-random.png" alt="" class="play-icon" style="height:70px">
            <img src="${import.meta.env.BASE_URL}icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="match-friend">
          <div class="play-badge-group">
            <img src="${import.meta.env.BASE_URL}icons/badge-vs.png" alt="" class="play-icon" style="height:70px">
            <img src="${import.meta.env.BASE_URL}icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="mini-league">
          <div class="play-badge-group">
            <img src="${import.meta.env.BASE_URL}icons/badge-league.png" alt="" class="play-icon" style="height:70px">
            <img src="${import.meta.env.BASE_URL}icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay">
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="home-footer">
        <button class="home-logout-btn" id="logout-btn">Déconnexion</button>
        ${p.is_admin ? `
        <a href="${import.meta.env.BASE_URL}admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${APP_VERSION}</div>` : ''}
      </div>

    </div>
  </div>`

  // Adapter la hauteur des tuiles
  requestAnimationFrame(() => {
    const vh = window.visualViewport?.height || window.innerHeight
    const topBar = document.querySelector('.top-nav')?.offsetHeight || 56
    const botNav = document.querySelector('.bottom-nav')?.offsetHeight || 60
    const inner = container.querySelector('.home-inner')
    if (inner) {
      const avail = vh - topBar - botNav
      container.querySelector('.home-dark').style.minHeight = avail + 'px'
    }

    if (window.innerWidth < 768) {
      const hero    = container.querySelector('.home-hero')?.offsetHeight || 60
      const ranked  = container.querySelector('.ranked-tile')
      const grid    = container.querySelector('.play-grid')
      const footer  = container.querySelector('.home-footer')?.offsetHeight || 44
      const banners = ['friend-requests-banner','match-invite-banner','ongoing-match-banner']
        .reduce((s, id) => s + (document.getElementById(id)?.offsetHeight || 0), 0)
      const gap = 12 * 5
      const avail2 = vh - topBar - botNav - hero - footer - banners - gap - 32
      const rankedH = Math.max(80, Math.round(avail2 * 0.28))
      const gridH   = Math.max(160, Math.round(avail2 * 0.72))
      const cellH   = Math.floor((gridH - 10) / 2)
      if (ranked) ranked.style.minHeight = ranked.style.maxHeight = rankedH + 'px'
      container.querySelectorAll('.play-tile').forEach(c => {
        c.style.minHeight = c.style.height = cellH + 'px'
      })
      container.querySelectorAll('.play-tile .play-icon').forEach(img => {
        img.style.height = Math.round(cellH * 0.55) + 'px'
      })
    }
  })

  document.getElementById('nav-rankings')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('nav-matches')?.addEventListener('click', () => navigate('matches'))

  container.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', () => {
      el.style.transform = 'scale(.96)'
      setTimeout(() => el.style.transform = '', 180)
      const action = el.dataset.action
      if (action === 'match-ai') { showDifficultyPicker(navigate); return }
      if (action === 'match-random') { navigate('match', { matchMode: 'random' }); return }
      if (action === 'match-friend') { navigate('friends'); return }
      if (action === 'mini-league')  { navigate('mini-league'); return }
      if (action === 'ranked')       { navigate('ranked'); return }
      toast('Bientôt disponible', 'info')
    })
  })

  document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut()
    window.location.reload()
  })

  loadFriendRequestsBanner(state, toast)
  loadMatchInviteBanner(state, toast, navigate)
  loadOngoingMatchBanner(state, toast, navigate)
}

// ── Bannière match en cours ──────────────────────────────────────────────────
async function loadOngoingMatchBanner(state, toast, navigate) {
  const banner = document.getElementById('ongoing-match-banner')
  if (!banner) return
  const uid = state.profile.id
  const { data: matches } = await supabase
    .from('matches').select('id, home_id, away_id, status, mode')
    .eq('status', 'active').or(`home_id.eq.${uid},away_id.eq.${uid}`)
    .order('created_at', { ascending: false })
  if (!matches?.length) { banner.innerHTML = ''; return }
  const oppIds = matches.map(m => m.home_id === uid ? m.away_id : m.home_id).filter(Boolean)
  let names = {}
  if (oppIds.length) {
    const { data: profs } = await supabase.from('users').select('id, pseudo, club_name').in('id', oppIds)
    ;(profs||[]).forEach(p => { names[p.id] = p.club_name || p.pseudo })
  }
  banner.innerHTML = matches.map(m => {
    const oppId = m.home_id === uid ? m.away_id : m.home_id
    const oppName = names[oppId] || 'Adversaire'
    const isMiniLeague = m.mode === 'mini_league'
    const modeLabel = isMiniLeague ? '🏆 Mini League' : m.mode === 'friend' ? 'Match ami' : 'Match'
    return `<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${modeLabel} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${oppName}</div>
      </div>
      <button data-resume="${m.id}" data-mini="${isMiniLeague?'1':''}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${m.id}" data-opp="${oppId}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`
  }).join('')
  banner.querySelectorAll('[data-resume]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const container = document.getElementById('page-content') || document.getElementById('app')
      if (btn.dataset.mini === '1') {
        const { data: mlM } = await supabase.from('mini_league_matches').select('id, league_id').eq('match_id', btn.dataset.resume).single()
        if (mlM) navigate('match-mini-league', { mlMatchId: mlM.id, leagueId: mlM.league_id })
        else navigate('mini-league')
      } else {
        const { resumePvpMatch } = await import('../match/match-random.js')
        resumePvpMatch(container, { state, navigate, toast, openModal: null, closeModal: null, refreshProfile: null }, btn.dataset.resume)
      }
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

async function abandonMatch(matchId, oppId, uid) {
  const { data: m } = await supabase.from('matches').select('home_id, away_id, game_state').eq('id', matchId).single()
  if (!m) return
  const amIHome = m.home_id === uid
  const home_score = amIHome ? 0 : 3
  const away_score = amIHome ? 3 : 0
  const gs = m.game_state || {}
  gs.p1Score = home_score; gs.p2Score = away_score
  gs.phase = 'finished'; gs.forfeit = true
  await supabase.from('matches').update({ status:'finished', forfeit:true, winner_id:oppId, home_score, away_score, game_state:gs }).eq('id', matchId)
}

function showAbandonConfirm(onConfirm) {
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px'
  ov.innerHTML = `<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`
  document.body.appendChild(ov)
  ov.querySelector('#ab-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#ab-ok').addEventListener('click', () => { ov.remove(); onConfirm() })
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

async function loadMatchInviteBanner(state, toast, navigate) {
  const banner = document.getElementById('match-invite-banner')
  if (!banner) return
  const { data: invites } = await supabase
    .from('friend_match_invites').select('id, inviter_id, inviter:users!inviter_id(pseudo, club_name)')
    .eq('invitee_id', state.user.id).eq('status', 'pending').order('created_at', { ascending: false }).limit(1).maybeSingle()
  if (!invites) { banner.innerHTML = ''; return }
  const inviterName = invites.inviter?.club_name || invites.inviter?.pseudo || '?'
  const inviterId = invites.inviter_id
  banner.innerHTML = `<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${inviterName} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`
  document.getElementById('match-inv-accept')?.addEventListener('click', () => { banner.innerHTML = ''; navigate('match', { matchMode:'friend', friendId:inviterId, friendName:inviterName }) })
  document.getElementById('match-inv-decline')?.addEventListener('click', async () => {
    await supabase.from('friend_match_invites').update({ status:'declined' }).eq('id', invites.id)
    banner.innerHTML = ''; toast('Invitation refusée', 'info')
  })
}

async function loadFriendRequestsBanner(state, toast) {
  const banner = document.getElementById('friend-requests-banner')
  if (!banner) return
  const { data: pending, error } = await supabase.from('friendships').select('id, requester:users!requester_id(pseudo, club_name)').eq('addressee_id', state.user.id).eq('status', 'pending')
  if (error || !pending?.length) { banner.innerHTML = ''; return }
  const count = pending.length
  const names = pending.slice(0, 2).map(r => r.requester?.pseudo || '?').join(', ')
  const extra = count > 2 ? ` +${count - 2}` : ''
  banner.innerHTML = `<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${count} demande${count>1?'s':''} d'ami${count>1?'s':''}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${names}${extra}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`
  document.getElementById('friend-req-btn').addEventListener('click', () => showPendingPopup(state, toast, () => loadFriendRequestsBanner(state, toast)))
}

function showDifficultyPicker(navigate) {
  const levels = [
    { mode:'vs_ai_easy',   label:'Facile',    sub:'Gain 500 cr.',   icon:'🟢' },
    { mode:'vs_ai_medium', label:'Moyen',     sub:'Gain 1 000 cr.', icon:'🟡' },
    { mode:'vs_ai_hard',   label:'Difficile', sub:'Gain 1 500 cr.', icon:'🟠' },
    { mode:'vs_ai_club',   label:'Club',      sub:'Gain 2 500 cr.', icon:'🔴' },
  ]
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.style.zIndex = '2000'
  overlay.innerHTML = `<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${levels.map(l => `<div class="action-card" data-mode="${l.mode}" style="cursor:pointer"><div class="icon">${l.icon}</div><div class="label">${l.label}</div><div class="sub">${l.sub}</div></div>`).join('')}
      </div>
    </div>
  </div>`
  document.body.appendChild(overlay)
  const cleanup = () => overlay.remove()
  document.getElementById('diff-cancel').addEventListener('click', cleanup)
  overlay.addEventListener('click', e => { if (e.target === overlay) cleanup() })
  overlay.querySelectorAll('[data-mode]').forEach(el => {
    el.addEventListener('click', () => { cleanup(); navigate('match', { matchMode: el.dataset.mode }) })
  })
}
