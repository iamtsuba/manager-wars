import { supabase } from '../lib/supabase.js'

// ── Constantes ──────────────────────────────────────────────────────────────
const GREEN  = '#1A6B3C'
const YELLOW = '#D4A017'

// ══════════════════════════════════════════════════════════════════════════════
// POINT D'ENTRÉE
// ══════════════════════════════════════════════════════════════════════════════
export async function renderMiniLeague(container, ctx) {
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'
  // Si on revient d'un match ML, ouvrir directement la league concernée
  const openId = ctx.state.params?.openLeagueId
  if (openId) {
    ctx.state.params.openLeagueId = null // consommer le param
    await openLeague(container, ctx, openId)
  } else {
    await showLeagueList(container, ctx)
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// LISTE DES MINI LEAGUES
// ══════════════════════════════════════════════════════════════════════════════
async function showLeagueList(container, ctx) {
  const { state, toast } = ctx
  const uid = state.profile.id

  // Mes leagues actives
  const { data: myMemberships } = await supabase
    .from('mini_league_members')
    .select('league_id, mini_leagues(*)')
    .eq('user_id', uid)

  // Leagues publiques en attente
  const { data: publicLeagues } = await supabase
    .from('mini_leagues')
    .select('*, mini_league_members(count)')
    .eq('type', 'public')
    .eq('status', 'waiting')
    .order('created_at', { ascending: false })
    .limit(20)

  const myLeagues   = (myMemberships||[]).map(m => m.mini_leagues).filter(Boolean)
  const publicOthers = (publicLeagues||[]).filter(l => !myLeagues.find(m => m.id === l.id))

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>

    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">
      ${myLeagues.length ? `
        <div>
          <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Mes Mini Leagues</div>
          ${myLeagues.map(l => leagueCardHTML(l, uid, true)).join('')}
        </div>` : ''}

      ${publicOthers.length ? `
        <div>
          <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Rejoindre une Mini League</div>
          ${publicOthers.map(l => leagueCardHTML(l, uid, false)).join('')}
        </div>` : ''}

      ${!myLeagues.length && !publicOthers.length ? `
        <div style="text-align:center;padding:40px;color:#aaa">
          <div style="font-size:48px;margin-bottom:12px">🏆</div>
          <div style="font-size:14px">Aucune Mini League disponible.</div>
          <div style="font-size:12px;margin-top:4px">Crée la première !</div>
        </div>` : ''}
    </div>
  </div>`

  document.getElementById('ml-create-btn')?.addEventListener('click', () => showCreateForm(container, ctx))

  container.querySelectorAll('[data-league-id]').forEach(card => {
    card.addEventListener('click', () => openLeague(container, ctx, card.dataset.leagueId))
  })
  container.querySelectorAll('[data-join]').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); joinLeague(container, ctx, btn.dataset.join, btn.dataset.type) })
  })
}

function leagueCardHTML(l, uid, isMember) {
  const STATUS = { waiting:'🟡 En attente', active:'🟢 En cours', finished:'✅ Terminée' }
  const modeLabel = l.mode === 'aller-retour' ? 'Aller-Retour' : 'Aller'
  return `
  <div data-league-id="${l.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <div style="font-size:15px;font-weight:900">${l.name}</div>
      <span style="font-size:11px;color:#888">${STATUS[l.status]||l.status}</span>
    </div>
    <div style="display:flex;gap:12px;font-size:12px;color:#666;margin-bottom:${!isMember&&l.status==='waiting'?'10':'0'}px">
      <span>🔒 ${l.type==='private'?'Privée':'Publique'}</span>
      <span>⚽ ${modeLabel}</span>
      <span>👥 max ${l.max_players}</span>
      ${l.current_day>0?`<span>📅 J${l.current_day}/${l.total_days}</span>`:''}
    </div>
    ${!isMember && l.status==='waiting' ? `
    <button data-join="${l.id}" data-type="${l.type}" class="btn btn-primary btn-sm" style="width:100%">Rejoindre</button>` : ''}
  </div>`
}

// ══════════════════════════════════════════════════════════════════════════════
// CRÉATION D'UNE MINI LEAGUE
// ══════════════════════════════════════════════════════════════════════════════
function showCreateForm(container, ctx) {
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px'
  ov.innerHTML = `
    <div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
      <div style="padding:16px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:17px;font-weight:900">🏆 Créer une Mini League</div>
        <button id="ml-form-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:14px">
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOM *</label>
          <input id="ml-name" placeholder="Ex: Ligue des Champions" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOMBRE DE JOUEURS MAX</label>
          <input id="ml-max" type="number" min="3" max="8" value="6" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">TYPE</label>
          <div style="display:flex;gap:8px">
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-type" value="public" checked> Publique
            </label>
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-type" value="private"> Privée (MDP)
            </label>
          </div>
        </div>
        <div id="ml-pwd-block" style="display:none">
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MOT DE PASSE</label>
          <input id="ml-pwd" type="password" placeholder="Mot de passe..." style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MODE</label>
          <div style="display:flex;gap:8px">
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-mode" value="aller" checked> Aller
            </label>
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-mode" value="aller-retour"> Aller-Retour
            </label>
          </div>
        </div>
        <button id="ml-create-confirm" class="btn btn-primary" style="width:100%;padding:12px;font-size:15px">🚀 Créer la Mini League</button>
      </div>
    </div>`

  document.body.appendChild(ov)
  ov.querySelector('#ml-form-close').addEventListener('click', () => ov.remove())
  ov.addEventListener('click', e => { if (e.target===ov) ov.remove() })

  // Afficher/cacher champ MDP
  ov.querySelectorAll('input[name="ml-type"]').forEach(r => {
    r.addEventListener('change', () => {
      document.getElementById('ml-pwd-block').style.display = r.value==='private' ? 'block' : 'none'
    })
  })

  ov.querySelector('#ml-create-confirm').addEventListener('click', async () => {
    const { toast } = ctx
    const name    = document.getElementById('ml-name').value.trim()
    const maxP    = parseInt(document.getElementById('ml-max').value)||6
    const type    = ov.querySelector('input[name="ml-type"]:checked')?.value || 'public'
    const mode    = ov.querySelector('input[name="ml-mode"]:checked')?.value || 'aller'
    const pwd     = document.getElementById('ml-pwd')?.value?.trim() || null

    if (!name) { toast('Le nom est obligatoire', 'error'); return }
    if (type==='private' && !pwd) { toast('Mot de passe requis', 'error'); return }

    const { data: league, error } = await supabase.from('mini_leagues').insert({
      name, creator_id: ctx.state.profile.id, type, password: pwd, mode, max_players: maxP
    }).select().single()
    if (error) { toast('Erreur : '+error.message, 'error'); return }

    // Rejoindre automatiquement en tant que créateur
    await supabase.from('mini_league_members').insert({ league_id: league.id, user_id: ctx.state.profile.id })
    ov.remove()
    toast('Mini League créée !', 'success')
    openLeague(container, ctx, league.id)
  })
}

// ══════════════════════════════════════════════════════════════════════════════
// REJOINDRE
// ══════════════════════════════════════════════════════════════════════════════
async function joinLeague(container, ctx, leagueId, type) {
  const { toast } = ctx
  if (type === 'private') {
    const pwd = prompt('Mot de passe de la Mini League :')
    if (pwd === null) return
    const { data: l } = await supabase.from('mini_leagues').select('password,status,max_players').eq('id', leagueId).single()
    if (!l) { toast('Mini League introuvable', 'error'); return }
    if (l.status !== 'waiting') { toast('Cette Mini League a déjà démarré', 'warning'); return }
    if (l.password !== pwd) { toast('Mot de passe incorrect', 'error'); return }
  }
  const { error } = await supabase.from('mini_league_members').insert({ league_id: leagueId, user_id: ctx.state.profile.id })
  if (error) { toast('Erreur : '+error.message, 'error'); return }
  toast('Tu as rejoint la Mini League !', 'success')
  openLeague(container, ctx, leagueId)
}

// ══════════════════════════════════════════════════════════════════════════════
// SALON / DÉTAIL D'UNE MINI LEAGUE
// ══════════════════════════════════════════════════════════════════════════════
async function openLeague(container, ctx, leagueId) {
  const { state, toast, navigate } = ctx
  const uid = state.profile.id

  const [{ data: league }, { data: members }, { data: mlMatches }] = await Promise.all([
    supabase.from('mini_leagues').select('*').eq('id', leagueId).single(),
    supabase.from('mini_league_members').select('*, user:users(id,pseudo,club_name,club_color1,club_color2)').eq('league_id', leagueId),
    supabase.from('mini_league_matches').select('*').eq('league_id', leagueId).order('matchday').order('created_at')
  ])

  if (!league) { toast('Mini League introuvable', 'error'); await showLeagueList(container, ctx); return }

  const isMember  = (members||[]).some(m => m.user_id === uid)
  const isCreator = league.creator_id === uid
  const memberList = (members||[]).map(m => m.user).filter(Boolean)

  // Standings calculés depuis les matchs
  const standings = computeStandings(memberList, mlMatches||[])

  // Matchs de la journée en cours
  const todayMatches = (mlMatches||[]).filter(m => m.matchday === league.current_day)

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;padding:0">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${league.name}</div>
        <div style="font-size:11px;color:#888">${league.mode==='aller-retour'?'Aller-Retour':'Aller'} · max ${league.max_players} joueurs · ${league.type==='private'?'🔒 Privée':'🌐 Publique'}</div>
      </div>
      <span style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:12px;background:${league.status==='active'?'#d1fae5':league.status==='finished'?'#f3e8ff':'#fef9c3'};color:${league.status==='active'?'#166534':league.status==='finished'?'#6b21a8':'#854d0e'}">
        ${league.status==='waiting'?'En attente':league.status==='active'?`J${league.current_day}/${league.total_days}`:'Terminée'}
      </span>
    </div>

    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      <!-- LOBBY (en attente) -->
      ${league.status==='waiting' ? `
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:12px">👥 Joueurs (${memberList.length}/${league.max_players})</div>
        ${memberList.map(u => `
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${u.club_color2||GREEN};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${u.club_color1||'#fff'}">
              ${(u.pseudo||'?').slice(0,2).toUpperCase()}
            </div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">${u.club_name||u.pseudo}</div>
              <div style="font-size:11px;color:#999">@${u.pseudo}</div>
            </div>
            ${u.id===league.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑 Créateur</span>':''}
          </div>`).join('')}
        ${isCreator && memberList.length >= 2 ? `
          <button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">
            🚀 Lancer la Mini League (${memberList.length} joueurs)
          </button>` : ''}
        ${!isMember ? `<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre</button>` : ''}
        ${isMember && !isCreator ? '<div style="text-align:center;font-size:12px;color:#aaa;margin-top:10px">En attente du créateur pour lancer la partie...</div>' : ''}
        ${isCreator ? `<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer la Mini League</button>` : ''}
      </div>` : ''}

      <!-- JOURNÉE EN COURS -->
      ${league.status==='active' ? `
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${league.current_day} / ${league.total_days}</div>
        ${todayMatches.map(m => matchRowHTML(m, memberList, uid, isMember)).join('')}
        ${isCreator && todayMatches.every(m=>m.status==='finished'||m.status==='bye') && league.current_day < league.total_days ? `
          <button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>` : ''}
      </div>` : ''}

      <!-- CLASSEMENT -->
      ${(league.status==='active'||league.status==='finished') && standings.length ? `
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
              <th style="text-align:left;padding:6px 0">#</th>
              <th style="text-align:left;padding:6px 0">Club</th>
              <th style="text-align:center;padding:6px 4px">J</th>
              <th style="text-align:center;padding:6px 4px">G</th>
              <th style="text-align:center;padding:6px 4px">N</th>
              <th style="text-align:center;padding:6px 4px">P</th>
              <th style="text-align:center;padding:6px 4px">BP</th>
              <th style="text-align:center;padding:6px 4px">BC</th>
              <th style="text-align:center;padding:6px 4px">DB</th>
              <th style="text-align:center;padding:6px 4px;font-weight:900">PTS</th>
            </tr>
          </thead>
          <tbody>
            ${standings.map((s,i) => `
              <tr style="border-bottom:1px solid #f5f5f5;${s.userId===uid?'background:#f0fdf4;':''}">
                <td style="padding:8px 4px 8px 0;font-weight:700;color:${i===0?YELLOW:i<3?GREEN:'#555'}">${i+1}</td>
                <td style="padding:8px 4px">
                  <div style="font-weight:700;font-size:12px">${s.clubName}</div>
                  <div style="font-size:10px;color:#999">@${s.pseudo}</div>
                </td>
                <td style="text-align:center;padding:8px 4px">${s.played}</td>
                <td style="text-align:center;padding:8px 4px">${s.won}</td>
                <td style="text-align:center;padding:8px 4px">${s.drawn}</td>
                <td style="text-align:center;padding:8px 4px">${s.lost}</td>
                <td style="text-align:center;padding:8px 4px">${s.goalsFor}</td>
                <td style="text-align:center;padding:8px 4px">${s.goalsAgainst}</td>
                <td style="text-align:center;padding:8px 4px;color:${s.goalDiff>=0?GREEN:'#cc2222'}">${s.goalDiff>=0?'+':''}${s.goalDiff}</td>
                <td style="text-align:center;padding:8px 4px;font-weight:900;font-size:15px">${s.points}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>` : ''}

      <!-- HISTORIQUE JOURNÉES -->
      ${league.status!=='waiting' && league.current_day>1 ? `
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:league.current_day-1},(_,i)=>i+1).reverse().map(day => {
          const dayMatches = (mlMatches||[]).filter(m=>m.matchday===day)
          return `<div style="margin-bottom:10px">
            <div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${day}</div>
            ${dayMatches.map(m=>matchRowHTML(m,memberList,uid,false,true)).join('')}
          </div>`
        }).join('')}
      </div>` : ''}

    </div>
  </div>`

  document.getElementById('ml-back')?.addEventListener('click', () => showLeagueList(container, ctx))
  document.getElementById('ml-start-btn')?.addEventListener('click', () => startLeague(container, ctx, league, memberList))
  document.getElementById('ml-next-day')?.addEventListener('click', () => nextMatchday(container, ctx, leagueId))
  document.getElementById('ml-join-now')?.addEventListener('click', () => joinLeague(container, ctx, leagueId, league.type))
  document.getElementById('ml-delete-btn')?.addEventListener('click', async () => {
    if (!confirm(`Supprimer définitivement la Mini League "${league.name}" ? Cette action est irréversible.`)) return
    // Supprimer dans l'ordre (FK) : matchs → membres → league
    await supabase.from('mini_league_matches').delete().eq('league_id', leagueId)
    await supabase.from('mini_league_members').delete().eq('league_id', leagueId)
    const { error } = await supabase.from('mini_leagues').delete().eq('id', leagueId)
    if (error) { toast('Erreur suppression : ' + error.message, 'error'); return }
    toast('Mini League supprimée', 'success')
    showLeagueList(container, ctx)
  })

  // Boutons "Jouer" sur les matchs en cours
  container.querySelectorAll('[data-play-match]').forEach(btn => {
    btn.addEventListener('click', () => {
      const m = todayMatches.find(x => x.id === btn.dataset.playMatch)
      if (m) playMiniLeagueMatch(container, ctx, m, league)
    })
  })
}

// ══════════════════════════════════════════════════════════════════════════════
// AFFICHAGE D'UN MATCH DE LA JOURNÉE
// ══════════════════════════════════════════════════════════════════════════════
function matchRowHTML(m, members, uid, isMember, readonly=false) {
  const getUser = id => members.find(u => u.id === id)
  if (m.is_bye) {
    const exempt = getUser(m.home_id)
    return `<div style="padding:8px 10px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">
      🔵 ${exempt?.club_name||exempt?.pseudo||'?'} est exempté(e) cette journée
    </div>`
  }
  const home = getUser(m.home_id)
  const away = getUser(m.away_id)
  const isMyMatch = m.home_id===uid || m.away_id===uid
  const canPlay = isMyMatch && m.status==='pending' && isMember && !readonly
  const score = m.status==='finished' ? `${m.home_score} - ${m.away_score}` : 'vs'

  return `<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${isMyMatch?'#f0fdf4':'#f9f9f9'};margin-bottom:6px;border:1px solid ${isMyMatch?'#86efac':'#f0f0f0'}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${home?.club_name||home?.pseudo||'?'}</div>
    <div style="font-size:14px;font-weight:900;min-width:50px;text-align:center;color:${m.status==='finished'?GREEN:'#999'}">${score}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${away?.club_name||away?.pseudo||'?'}</div>
    ${canPlay ? `<button data-play-match="${m.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽ Jouer</button>` : ''}
    ${m.status==='finished'?`<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>`:''}
  </div>`
}

// ══════════════════════════════════════════════════════════════════════════════
// LANCEMENT DE LA MINI LEAGUE + GÉNÉRATION CALENDRIER
// ══════════════════════════════════════════════════════════════════════════════
async function startLeague(container, ctx, league, members) {
  const { toast } = ctx
  const schedule = generateSchedule(members.map(m=>m.id), league.mode)
  const totalDays = schedule.length

  // Insérer les matchs en DB
  const rows = []
  schedule.forEach((day, di) => {
    day.forEach(match => {
      rows.push({
        league_id: league.id,
        matchday: di+1,
        home_id:  match.home || match.bye,
        away_id:  match.away || null,
        is_bye:   !!match.bye,
        status:   match.bye ? 'bye' : 'pending'
      })
    })
  })

  const { error } = await supabase.from('mini_league_matches').insert(rows)
  if (error) { toast('Erreur génération calendrier : '+error.message,'error'); return }

  await supabase.from('mini_leagues').update({ status:'active', current_day:1, total_days: totalDays }).eq('id', league.id)
  toast('Mini League lancée ! Journée 1 commence.', 'success')
  openLeague(container, ctx, league.id)
}

// ══════════════════════════════════════════════════════════════════════════════
// ALGORITHME ROUND-ROBIN (cercle)
// Retourne un tableau de journées, chaque journée = tableau de {home,away} ou {bye}
// ══════════════════════════════════════════════════════════════════════════════
function generateSchedule(teamIds, mode) {
  const n = teamIds.length
  // Pour n impair, on ajoute un "bye" team
  const teams = n % 2 === 0 ? [...teamIds] : [...teamIds, null]
  const N = teams.length  // toujours pair maintenant
  const rounds = N - 1

  const days = []
  // Algorithme du cercle : fixer teams[0], tourner le reste
  let circle = teams.slice(1)

  for (let r = 0; r < rounds; r++) {
    const day = []
    const rotated = [teams[0], ...circle]
    for (let i = 0; i < N/2; i++) {
      const home = rotated[i]
      const away = rotated[N-1-i]
      if (home === null) day.push({ bye: away })
      else if (away === null) day.push({ bye: home })
      else day.push({ home, away })
    }
    days.push(day)
    // Rotation : décaler le cercle d'un cran
    circle = [circle[circle.length-1], ...circle.slice(0,-1)]
  }

  // Pour aller-retour, dupliquer avec home/away inversés
  if (mode === 'aller-retour') {
    const retour = days.map(day =>
      day.map(m => m.bye ? m : { home: m.away, away: m.home })
    )
    return [...days, ...retour]
  }
  return days
}

// ══════════════════════════════════════════════════════════════════════════════
// PASSER À LA JOURNÉE SUIVANTE
// ══════════════════════════════════════════════════════════════════════════════
async function nextMatchday(container, ctx, leagueId) {
  const { data: league } = await supabase.from('mini_leagues').select('current_day,total_days').eq('id', leagueId).single()
  const next = (league.current_day||0) + 1
  const done = next > (league.total_days||0)

  await supabase.from('mini_leagues').update({
    current_day: done ? league.total_days : next,
    status: done ? 'finished' : 'active'
  }).eq('id', leagueId)

  ctx.toast(done ? '🏆 Mini League terminée !' : `Journée ${next} commencée !`, 'success')
  openLeague(container, ctx, leagueId)
}

// ══════════════════════════════════════════════════════════════════════════════
// LANCER UN MATCH (intégration avec le système PvP existant)
// ══════════════════════════════════════════════════════════════════════════════
async function playMiniLeagueMatch(container, ctx, mlMatch, league) {
  const { navigate } = ctx
  navigate('match-mini-league', {
    mlMatchId: mlMatch.id,
    leagueId: league.id
  })
}

// ══════════════════════════════════════════════════════════════════════════════
// CALCUL DU CLASSEMENT
// ══════════════════════════════════════════════════════════════════════════════
function computeStandings(members, matches) {
  const stats = {}
  members.forEach(u => {
    stats[u.id] = { userId:u.id, pseudo:u.pseudo, clubName:u.club_name||u.pseudo,
      played:0, won:0, drawn:0, lost:0, goalsFor:0, goalsAgainst:0, goalDiff:0, points:0 }
  })

  matches.filter(m => m.status==='finished' && !m.is_bye && m.home_score!=null).forEach(m => {
    const h = stats[m.home_id], a = stats[m.away_id]
    if (!h || !a) return
    h.played++; a.played++
    h.goalsFor+=m.home_score; h.goalsAgainst+=m.away_score
    a.goalsFor+=m.away_score; a.goalsAgainst+=m.home_score
    if (m.home_score > m.away_score) { h.won++; h.points+=3; a.lost++ }
    else if (m.home_score < m.away_score) { a.won++; a.points+=3; h.lost++ }
    else { h.drawn++; h.points++; a.drawn++; a.points++ }
    h.goalDiff = h.goalsFor - h.goalsAgainst
    a.goalDiff = a.goalsFor - a.goalsAgainst
  })

  return Object.values(stats).sort((a,b) =>
    b.points-a.points || b.goalDiff-a.goalDiff || b.goalsFor-a.goalsFor
  )
}
