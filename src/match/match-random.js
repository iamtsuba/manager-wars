import { supabase } from '../lib/supabase.js'
import {
  GC_DEFS, getNoteForRole, calcAttack, calcDefense,
  calcMidfieldDuel, resolveDuel, aiSelectPlayers, getRewards, rollBoost as rollBoostFn,
} from './game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, linkColor, getActiveLinks } from './formation-links.js'
import {
  showMsg, getPortrait, playerFromCard, getColsForLine, buildTeam, rollBoost,
  _hideBottomNav, _showBottomNav, renderDeckSelect, showGCSelection,
  getClubLogo, renderMiniCardHTML, renderCardRow, flagImgUrl, countryFlag,
  buildTeamSVG, renderTeam, renderMiniPlayer, loadMatchSetup, FORMATIONS, JOB_COLORS,
} from './match-shared.js'

// ═══════════════════════════════════════════════════════════
// match-random.js — Match PvP (Match Random) uniquement.
// Expérience identique à match-ia.js : même animations, GC_ENGINE avec
// pickers, règles de but défenseur, hauteur mobile robuste, etc.
// ═══════════════════════════════════════════════════════════

export async function renderMatchRandom(container, ctx) {
  await loadMatchSetup(container, ctx, 'random', ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs }) => {
    const start = (selectedGC) => showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, selectedGC, gcDefs || [])
    if (!gcCardsEnriched.length) { start([]); return }
    showGCSelection(container, gcCardsEnriched, start)
  })
}

async function showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, myGC = [], gcDefs = []) {
  const { state, navigate, toast } = ctx
  let cancelled = false, channel = null

  _hideBottomNav(container)
  container.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`

  const cleanup = async (removeFromQueue = true) => {
    cancelled = true
    if (channel) { supabase.removeChannel(channel); channel = null }
    if (removeFromQueue) await supabase.rpc('cancel_matchmaking', { p_user_id: state.profile.id }).catch(()=>{})
  }

  document.getElementById('mm-cancel')?.addEventListener('click', async () => {
    try { await cleanup(true) } catch {}
    _showBottomNav(container); navigate('home')
  })

  const startPvpMatch = async (matchId, opponentId, amIHome) => {
    if (cancelled) return
    cancelled = true
    if (channel) { supabase.removeChannel(channel); channel = null }
    const s = document.getElementById('mm-status')
    if (s) s.textContent = 'Adversaire trouvé !'
    await new Promise(r => setTimeout(r, 600))
    if (!container.isConnected) return
    renderPvpMatch(container, ctx, matchId, amIHome, myGC, gcDefs)
  }

  const { data: result, error } = await supabase.rpc('try_matchmake', { p_user_id: state.profile.id, p_deck_id: deckId })
  if (error || !result?.success) { toast('Erreur de matchmaking', 'error'); _showBottomNav(container); navigate('home'); return }
  if (result.matched) { startPvpMatch(result.match_id, result.opponent_id, false); return }

  const s = document.getElementById('mm-status')
  if (s) s.textContent = "En attente d'un autre joueur..."

  channel = supabase.channel('matchmaking-' + state.profile.id)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'matchmaking_queue', filter: `user_id=eq.${state.profile.id}` },
      (payload) => { const row = payload.new; if (row.status === 'matched' && row.match_id) startPvpMatch(row.match_id, row.matched_with, true) })
    .subscribe()
}

async function renderPvpMatch(container, ctx, matchId, amIHome, myGC = [], gcDefs = []) {
  const { state, navigate, toast } = ctx
  const myRole  = amIHome ? 'p1' : 'p2'
  const oppRole = amIHome ? 'p2' : 'p1'
  const myGCIds  = (myGC||[]).map(g => g.id)
  const myGCFull = (myGC||[]).map(g => ({ id: g.id, gc_type: g.gc_type, _gcDef: g._gcDef || null }))

  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>'

  const { data: match } = await supabase.from('matches').select('*').eq('id', matchId).single()
  if (!match) { toast('Match introuvable', 'error'); navigate('home'); return }

  async function buildGameState() {
    const [{ data: p1D }, { data: p2D }, { data: p1P }, { data: p2P }] = await Promise.all([
      supabase.rpc('get_deck_for_match', { p_deck_id: match.home_deck_id }),
      supabase.rpc('get_deck_for_match', { p_deck_id: match.away_deck_id }),
      supabase.from('users').select('id,pseudo,club_name').eq('id', match.home_id).single(),
      supabase.from('users').select('id,pseudo,club_name').eq('id', match.away_id).single(),
    ])
    const toPlayer = (r) => ({
      cardId: r.card_id, position: r.position, id: r.id,
      firstname: r.firstname, name: r.surname_encoded,
      country_code: r.country_code, club_id: r.club_id,
      job: r.job, job2: r.job2,
      note_g: Number(r.note_g)||0, note_d: Number(r.note_d)||0,
      note_m: Number(r.note_m)||0, note_a: Number(r.note_a)||0,
      rarity: r.rarity, skin: r.skin, hair: r.hair, hair_length: r.hair_length,
      clubName: r.club_encoded_name||null, clubLogo: r.club_logo_url||null,
      boost: 0, used: false, _line: null, _col: null,
    })
    const p1Starters = (p1D?.starters||[]).map(r=>toPlayer(r))
    const p2Starters = (p2D?.starters||[]).map(r=>toPlayer(r))
    const p1F = p1D?.formation||'4-4-2', p2F = p2D?.formation||'4-4-2'
    return {
      p1Team: buildTeam(p1Starters, p1F), p2Team: buildTeam(p2Starters, p2F),
      p1Subs: (p1D?.subs||[]).map(r=>toPlayer(r)), p2Subs: (p2D?.subs||[]).map(r=>toPlayer(r)),
      p1Formation: p1F, p2Formation: p2F,
      p1Name: p1P?.club_name||p1P?.pseudo||'Joueur 1',
      p2Name: p2P?.club_name||p2P?.pseudo||'Joueur 2',
      p1Score: 0, p2Score: 0, p1Subs_used: 0, p2Subs_used: 0, maxSubs: 3,
      phase: 'reveal', attacker: null, round: 0,
      selected_p1: [], selected_p2: [],
      pendingAttack: null, log: [], modifiers: { p1:{}, p2:{} },
      gc_p1: amIHome ? myGCIds : [], gc_p2: amIHome ? [] : myGCIds,
      gcCardsFull_p1: amIHome ? myGCFull : [], gcCardsFull_p2: amIHome ? [] : myGCFull,
      usedGc_p1: [], usedGc_p2: [],
      boostValue: null, boostOwner: null, boostUsed: false,
      lastActionAt: new Date().toISOString(),
    }
  }

  let gameState = match.game_state && Object.keys(match.game_state).length ? match.game_state : null
  if (!gameState) {
    if (amIHome) {
      gameState = await buildGameState()
      const { data: check } = await supabase.from('matches').select('game_state').eq('id', matchId).single()
      if (!check?.game_state || !Object.keys(check.game_state).length)
        await supabase.from('matches').update({ game_state: gameState, turn_user_id: match.home_id }).eq('id', matchId)
      else gameState = check.game_state
    } else {
      container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>'
      for (let i = 0; i < 30 && !gameState; i++) {
        await new Promise(r => setTimeout(r, 400))
        const { data: m2 } = await supabase.from('matches').select('game_state').eq('id', matchId).single()
        if (m2?.game_state && Object.keys(m2.game_state).length) gameState = m2.game_state
      }
      if (!gameState) { toast('Erreur de synchronisation', 'error'); navigate('home'); return }
      gameState.gc_p2 = myGCIds; gameState.gcCardsFull_p2 = myGCFull
      await supabase.from('matches').update({ game_state: gameState }).eq('id', matchId)
    }
  }

  let _pvpEnded = false
  let _localTimerInt = null  // Timer LOCAL (pas dans gameState, sinon le JSON round-trip l'écrase)
  let _vvBound = false       // idem pour le listener visualViewport
  const _goalAnimShownFor = new Set()  // rounds dont l'animation BUT a déjà été montrée localement

  function showPvpEndScreen(row) {
    try { supabase.removeChannel(channel) } catch {}
    const myScore  = gameState[myRole+'Score']||0
    const oppScore = gameState[oppRole+'Score']||0
    // Source de vérité : winner_id si présent, sinon comparaison des scores
    let iWon, isDraw
    if (row.winner_id) {
      iWon = row.winner_id === state.profile.id
      isDraw = false
    } else if (row.forfeit) {
      // Forfait sans winner_id lisible → se fier au score (le vainqueur a 3)
      iWon = myScore > oppScore
      isDraw = false
    } else {
      isDraw = myScore === oppScore
      iWon = myScore > oppScore
    }
    // Supprimer un éventuel overlay précédent
    document.getElementById('pvp-end-overlay')?.remove()
    const overlay2 = document.createElement('div')
    overlay2.id = 'pvp-end-overlay'
    overlay2.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center'
    const _emoji = isDraw ? '🤝' : iWon ? '🏆' : '😞'
    const _titleTxt = isDraw ? 'MATCH NUL' : iWon ? 'VICTOIRE !' : 'DÉFAITE'
    const _titleCol = isDraw ? '#fff' : iWon ? '#FFD700' : '#ff6b6b'
    overlay2.innerHTML = `
      <div style="font-size:64px">${_emoji}</div>
      <div style="font-size:26px;font-weight:900;color:${_titleCol}">${_titleTxt}</div>
      <div style="font-size:18px">${gameState[myRole+'Name']} ${myScore} – ${oppScore} ${gameState[oppRole+'Name']}</div>
      ${row.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${iWon?"L'adversaire a quitté":'Perdu par forfait'}</div>`:''}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`
    document.body.appendChild(overlay2)
    overlay2.querySelector('#pvp-end-home')?.addEventListener('click', () => { overlay2.remove(); _showBottomNav(container); navigate('home') })
  }

  const channel = supabase.channel('pvp-match-' + matchId)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'matches', filter: `id=eq.${matchId}` }, (payload) => {
      const row = payload.new
      try {
        if (row.status === 'finished' || row.forfeit) {
          if (_pvpEnded) return; _pvpEnded = true
          if (_localTimerInt) { clearInterval(_localTimerInt); _localTimerInt = null }
          if (row.game_state) gameState = row.game_state
          showPvpEndScreen(row); return
        }
        if (row.game_state) {
          const prev = gameState
          gameState = row.game_state
          // Les joueurs utilisés sont recalculés depuis usedCardIds_* dans renderPvpScreen
          // (registre plat persisté, immunisé contre la perte de flag via JSON round-trip).
          // Animation BUT pour le joueur qui reçoit le résultat via Realtime
          const prevMy  = prev[myRole+'Score']||0
          const prevOpp = prev[oppRole+'Score']||0
          const newMy   = gameState[myRole+'Score']||0
          const newOpp  = gameState[oppRole+'Score']||0
          const iScored   = newMy  > prevMy
          const oppScored = newOpp > prevOpp
          if ((iScored || oppScored) && !_goalAnimShownFor.has(gameState.round)) {
            _goalAnimShownFor.add(gameState.round)
            const lastGoal = [...(gameState.log||[])].reverse().find(e => e.isGoal)
            const goalPlayers = (lastGoal?.homePlayers||[]).map(p=>({ name:p.name, note:p.note, portrait:p.portrait, job:p.job }))
            showGoalAnimation(goalPlayers, newMy, newOpp, iScored, () => renderPvpScreen())
            return
          }
          renderPvpScreen()
        }
      } catch(e) { console.error('[PvP] crash:', e) }
    }).subscribe()

  async function pushState(partial) {
    Object.assign(gameState, partial)
    gameState.lastActionAt = new Date().toISOString()
    const { error } = await supabase.from('matches').update({ game_state: gameState }).eq('id', matchId)
    if (error) toast('Erreur de synchronisation', 'error')
    try { renderPvpScreen() } catch(e) { console.error('[PvP] renderPvpScreen crash:', e) }
  }

  async function forfeitMatch() {
    if (_pvpEnded) return; _pvpEnded = true
    if (_localTimerInt) { clearInterval(_localTimerInt); _localTimerInt = null }
    const winnerId = amIHome ? match.away_id : match.home_id
    const winnerRole = amIHome ? 'p2' : 'p1'
    const loserRole  = amIHome ? 'p1' : 'p2'
    // Score forfait : 3-0 pour le vainqueur
    const forfeitState = { ...gameState,
      [winnerRole+'Score']: 3, [loserRole+'Score']: 0,
      phase: 'finished'
    }
    try {
      await supabase.from('matches').update({
        status:'finished', forfeit:true, winner_id:winnerId,
        game_state: forfeitState
      }).eq('id', matchId)
    } catch {}
    try { supabase.removeChannel(channel) } catch {}
    // Court délai pour que le Realtime atteigne l'adversaire avant navigation
    setTimeout(() => { _showBottomNav(container); navigate('home') }, 800)
  }

  // ── GC_ENGINE PvP (identique à match-ia.js mais sur gameState.p1/p2Team) ──
  const PVP_GC_ENGINE = {
    BOOST_STAT: ({ value=1, count=1, roles=[] }, gs, cb) => {
      const team = gs[myRole+'Team']
      const pool = Object.entries(team).filter(([r])=>!roles.length||roles.includes(r))
        .flatMap(([r,ps])=>ps.filter(p=>!p.used).map(p=>({...p,_line:r})))
      if (!pool.length) { gs.log.push({text:'⚡ Aucun joueur disponible',type:'info'}); cb(gs); return }
      pvpOpenPlayerPicker(pool, count, `Choisir ${count} joueur(s) à booster (+${value})`, (chosen) => {
        chosen.forEach(p => { const t=(team[p._line]||[]).find(x=>x.cardId===p.cardId); if(t){t.boost=(t.boost||0)+value; gs.log.push({text:`⚡ +${value} sur ${t.name}`,type:'info'})} })
        gs[myRole+'Team'] = team; cb(gs)
      })
    },
    DEBUFF_STAT: ({ value=1, count=1, roles=[], target='ai' }, gs, cb) => {
      const tRole = target==='home' ? myRole : oppRole
      const team = gs[tRole+'Team']
      const lbl = target==='home'?'allié':'adverse'
      const pool = Object.entries(team).filter(([r])=>!roles.length||roles.includes(r))
        .flatMap(([r,ps])=>ps.filter(p=>!p.used).map(p=>({...p,_line:r})))
      if (!pool.length) { gs.log.push({text:`🎯 Aucun joueur ${lbl}`,type:'info'}); cb(gs); return }
      pvpOpenPlayerPicker(pool, count, `Choisir ${count} joueur(s) ${lbl}(s) (-${value})`, (chosen) => {
        chosen.forEach(p => { const t=(team[p._line]||[]).find(x=>x.cardId===p.cardId); if(t){t.boost=(t.boost||0)-value; gs.log.push({text:`🎯 -${value} sur ${t.name}`,type:'info'})} })
        gs[tRole+'Team'] = team; cb(gs)
      })
    },
    GRAY_PLAYER: ({ count=1, roles=[], target='ai' }, gs, cb) => {
      const tRole = target==='home' ? myRole : oppRole
      const team = gs[tRole+'Team']
      const lbl = target==='home'?'allié':'adverse'
      const pool = Object.entries(team).filter(([r])=>!roles.length||roles.includes(r))
        .flatMap(([r,ps])=>ps.filter(p=>!p.used).map(p=>({...p,_line:r})))
      if (!pool.length) { gs.log.push({text:`❌ Aucun joueur ${lbl}`,type:'info'}); cb(gs); return }
      pvpOpenPlayerPicker(pool, count, `Choisir ${count} joueur(s) ${lbl}(s) à exclure`, (chosen) => {
        chosen.forEach(p => { const t=(team[p._line]||[]).find(x=>x.cardId===p.cardId); if(t){t.used=true; gs.log.push({text:`❌ ${t.name} exclu !`,type:'info'})} })
        gs[tRole+'Team'] = team; cb(gs)
      })
    },
    REVIVE_PLAYER: ({ count=1, roles=[] }, gs, cb) => {
      const team = gs[myRole+'Team']
      const pool = Object.entries(team).filter(([r])=>!roles.length||roles.includes(r))
        .flatMap(([r,ps])=>ps.filter(p=>p.used).map(p=>({...p,_line:r})))
      if (!pool.length) { gs.log.push({text:'💫 Aucun joueur à ressusciter',type:'info'}); cb(gs); return }
      pvpOpenPlayerPicker(pool, count, `Choisir ${count} joueur(s) à ressusciter`, (chosen) => {
        chosen.forEach(p => { const t=(team[p._line]||[]).find(x=>x.cardId===p.cardId); if(t){t.used=false; gs.log.push({text:`💫 ${t.name} ressuscité !`,type:'info'})} })
        gs[myRole+'Team'] = team; cb(gs)
      })
    },
    REMOVE_GOAL: ({}, gs, cb) => {
      const aSc = oppRole+'Score'
      if (gs[aSc]>0) { gs[aSc]--; gs.log.push({text:'🚫 Dernier but annulé !',type:'info'}) }
      else gs.log.push({text:'🚫 Aucun but à annuler',type:'info'})
      cb(gs)
    },
    ADD_GOAL_DRAW: ({}, gs, cb) => {
      if (gs[myRole+'Score']===gs[oppRole+'Score']) { gs[myRole+'Score']++; gs.log.push({text:'🎯 But bonus !',type:'info'}) }
      else gs.log.push({text:'🎯 Non applicable (pas de nul)',type:'info'})
      cb(gs)
    },
    ADD_SUB: ({ value=1 }, gs, cb) => {
      gs.maxSubs = (gs.maxSubs||3) + value; gs.log.push({text:`🔄 +${value} remplacement(s)`,type:'info'}); cb(gs)
    },
    CUSTOM: ({}, gs, cb) => cb(gs),
  }

  function pvpOpenPlayerPicker(pool, count, label, onConfirm) {
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden'
    let chosen = []
    function rebuild() {
      const itemsHTML = pool.map(p => {
        const bg=({GK:'#111',DEF:'#bb2020',MIL:'#D4A017',ATT:'#1A6B3C'})[p._line]||'#555'
        const note=getNoteForRole(p,p._line)+(p.boost||0)
        const sel=chosen.find(x=>x.cardId===p.cardId)
        const border=sel?'#FFD700':'rgba(255,255,255,0.25)'
        const opacity=p.used?'opacity:0.3;pointer-events:none':''
        return `<div class="pp-item" data-cid="${p.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${border};background:${bg};overflow:hidden;cursor:pointer;${opacity}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||'?'}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${note}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${p._line}</div>
        </div>`
      }).join('')
      overlay.innerHTML = `
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${label}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${chosen.length}/${count}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${itemsHTML}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${chosen.length===0?'disabled style="opacity:0.4"':''} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${chosen.length}/${count})
          </button>
        </div>`
      overlay.querySelector('#pp-close')?.addEventListener('click', () => overlay.remove())
      overlay.querySelectorAll('.pp-item').forEach(el => {
        el.addEventListener('click', () => {
          const cid = el.dataset.cid, p = pool.find(x=>x.cardId===cid), idx=chosen.findIndex(x=>x.cardId===cid)
          if (!p) return
          if (idx>-1) chosen.splice(idx,1); else if (chosen.length<count) chosen.push(p)
          rebuild()
        })
      })
      overlay.querySelector('#pp-confirm')?.addEventListener('click', () => { overlay.remove(); onConfirm(chosen) })
    }
    rebuild()
    document.body.appendChild(overlay)
  }

  async function pvpUseGameChanger(gcId, gcType) {
    const myGcFull = gameState['gcCardsFull_'+myRole]||[]
    const card = myGcFull.find(c=>c.id===gcId)
    const def = card?._gcDef || (gameState.gcDefs||[]).find(d=>d.name===gcType||d.name?.toLowerCase().trim()===gcType?.toLowerCase().trim())
    const used = [...(gameState['usedGc_'+myRole]||[]), gcId]

    if (def?.effect_type && def.effect_type !== 'CUSTOM') {
      const handler = PVP_GC_ENGINE[def.effect_type]
      if (handler) {
        const gs = { ...gameState }
        handler(def.effect_params||{}, gs, async (updated) => {
          updated['usedGc_'+myRole] = used
          await pushState(updated)
        })
        return
      }
    }
    // Fallback legacy
    const gs = { ...gameState }
    switch(gcType) {
      case 'Remplacement+': gs.maxSubs=(gs.maxSubs||3)+1; gs.log.push({text:'🔄 +1 remplacement',type:'info'}); break
      case 'VAR': { const aS=oppRole+'Score'; if(gs[aS]>0){gs[aS]--;gs.log.push({text:'🚫 But annulé',type:'info'})} break }
    }
    gs['usedGc_'+myRole] = used
    await pushState(gs)
  }

  // ── Gestion infaillible des joueurs utilisés (tableau plat persisté) ──
  // markUsed : ajoute des cardIds au registre persisté du joueur
  function markUsed(role, cardIds) {
    const key = 'usedCardIds_' + role
    const set = new Set(gameState[key] || [])
    cardIds.forEach(id => set.add(id))
    gameState[key] = [...set]
  }
  // applyUsedFlags : recalcule p.used sur les 2 équipes depuis le registre persisté.
  // Appelé à chaque rendu → immunisé contre la perte de flag via JSON round-trip.
  function applyUsedFlags() {
    for (const role of ['p1', 'p2']) {
      const used = new Set(gameState['usedCardIds_' + role] || [])
      const team = gameState[role + 'Team']
      if (!team) continue
      for (const line of ['GK', 'DEF', 'MIL', 'ATT']) {
        (team[line] || []).forEach(p => { p.used = used.has(p.cardId) })
      }
    }
  }

  // ── Rendu principal ──────────────────────────────────────
  function renderPvpScreen() {
    if (gameState.phase === 'reveal') return renderPvpReveal()
    if (gameState.phase === 'midfield') return renderPvpMidfield()
    if (gameState.phase === 'finished') return renderPvpResult()

    const myTeam   = gameState[myRole+'Team']
    const oppTeam  = gameState[oppRole+'Team']
    // ── Source de vérité INFAILLIBLE pour "joueur utilisé" ──
    // Un tableau plat de cardIds survit parfaitement au round-trip JSON Supabase,
    // contrairement aux flags .used sur objets imbriqués qui se perdent entre clients.
    applyUsedFlags()
    const myScore  = gameState[myRole+'Score']
    const oppScore = gameState[oppRole+'Score']
    const myName   = gameState[myRole+'Name']
    const oppName  = gameState[oppRole+'Name']

    const isMyAttack  = gameState.phase === myRole+'-attack'
    const isMyDefense = gameState.phase === myRole+'-defense'
    const isOppTurn   = !isMyAttack && !isMyDefense
    const mySelected  = Array.isArray(gameState['selected_'+myRole]) ? gameState['selected_'+myRole] : []
    const selectedIds = mySelected.map(s => s.cardId)
    const _pc = window.innerWidth >= 700

    const mySubs     = gameState[myRole+'Subs'] || []
    const usedSubIds = gameState['usedSubIds_'+myRole] || []
    const availSubs  = mySubs.filter(s => !usedSubIds.includes(s.cardId))
    const myGcFull   = gameState['gcCardsFull_'+myRole] || []
    const myUsedGc   = gameState['usedGc_'+myRole] || []
    const activeGCs  = myGcFull.filter(gc => !myUsedGc.includes(gc.id))
    const boostAvail = gameState.boostOwner === myRole && !gameState.boostUsed

    // DEF/GK attaquent si seuls restants ET adversaire sans joueurs
    const oppHasNoOne = !['GK','DEF','MIL','ATT'].some(r => (oppTeam[r]||[]).some(p=>!p.used))
    const myMilAtt    = [...(myTeam.MIL||[]),...(myTeam.ATT||[])].filter(p=>!p.used)
    const extraSelectableIds = (isMyAttack && oppHasNoOne && myMilAtt.length===0)
      ? [...(myTeam.GK||[]),...(myTeam.DEF||[])].filter(p=>!p.used).map(p=>p.cardId)
      : []

    // ── Design cartes GC (identique match-ia) ──
    function gcCardDesign(gc, w, h) {
      const def    = gc._gcDef
      const bg     = ({purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'})[def?.color] || 'linear-gradient(160deg,#4a0a8a,#7a28b8)'
      const bord   = ({purple:'#b06ce0',light_blue:'#00d4ef'})[def?.color] || '#b06ce0'
      const name   = def?.name || gc.gc_type
      const effect = def?.effect || GC_DEFS[gc.gc_type]?.desc || ''
      const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
      const icon   = GC_DEFS[gc.gc_type]?.icon || '⚡'
      const nameH  = Math.round(h*0.22), effH = Math.round(h*0.22), imgH = h-nameH-effH
      const fs     = name.length > 12 ? 7 : 9
      return `<div class="pvp-gc-mini" data-gc-id="${gc.id}" data-gc-type="${gc.gc_type}"
        style="box-sizing:border-box;width:${w}px;height:${h}px;border-radius:10px;border:2px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${nameH}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${fs}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${w-6}px">${name}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${imgH}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${imgUrl ? `<img src="${imgUrl}" style="max-width:${w-10}px;max-height:${imgH-6}px;object-fit:contain">` : `<span style="font-size:${Math.round(imgH*.55)}px">${icon}</span>`}
        </div>
        <div style="height:${effH}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${effect.slice(0,38)}</span>
        </div>
      </div>`
    }

    function boostCardDesign(w, h) {
      return `<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${w}px;height:${h}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(h*0.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(h*0.2)}px">⚡</div>
        <div style="font-size:${Math.round(h*0.09)}px;color:#000;font-weight:900">+${gameState.boostValue}</div>
      </div>`
    }

    const gcMiniPC  = (gc, isBoost) => isBoost ? boostCardDesign(130,175) : gcCardDesign(gc,130,175)
    const gcMiniMob = (gc, isBoost) => isBoost ? boostCardDesign(68,95)  : gcCardDesign(gc,68,95)

    // ── Bouton action (identique match-ia) ──
    const btnStyle = _pc
      ? 'padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%'
      : 'padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%'

    const actionBtn = isMyAttack
      ? (canAttack(myRole)
          ? `<button id="pvp-action" style="${btnStyle};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${mySelected.length===0?'disabled':''}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`
          : `<button id="pvp-action" data-pass="1" style="${btnStyle};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`)
      : isMyDefense
      ? `<button id="pvp-action" style="${btnStyle};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${mySelected.length===0?'disabled':''}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`
      : `<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${oppName}</div>`
    const counter = (isMyAttack && !canAttack(myRole))
      ? `<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>`
      : (isMyAttack||isMyDefense) ? `<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${mySelected.length}/3 sélectionné(s)</div>` : ''

    // ── Colonne remplaçants (GAUCHE, identique match-ia) ──
    const subsHTML = `<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_pc?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${availSubs.length===0
        ? `<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>`
        : availSubs.map(s=>`<div class="pvp-sub-btn" data-sub-id="${s.cardId}" style="cursor:pointer;flex-shrink:0">${renderMiniCardHTML(s,_pc?76:44,_pc?100:58)}</div>`).join('')}
    </div>`

    // ── Terrain ──
    const phase = isMyAttack?'attack':isMyDefense?'defense':'idle'
    const terrainHTML = `<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${renderTeam(myTeam, gameState[myRole+'Formation'], phase, selectedIds, 300, 300, extraSelectableIds)}
      </div>
    </div>`

    // ── renderLogEntry identique à match-ia ──
    function renderLogEntry(entry) {
      if (entry.type === 'duel' && (entry.homeTotal != null || entry.aiTotal != null)) {
        const hw = (entry.homeTotal||0) >= (entry.aiTotal||0)
        return `<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(entry.title||'DUEL').toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(entry.homePlayers||[]).map(p=>renderMiniPlayer(p)).join('')}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${hw?20:14}px;font-weight:900;color:${hw?'#FFD700':'rgba(255,255,255,0.4)'};line-height:1">${entry.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${!hw?20:14}px;font-weight:900;color:${!hw?'#ff6b6b':'rgba(255,255,255,0.4)'};line-height:1">${entry.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(entry.aiPlayers||[]).map(p=>renderMiniPlayer(p)).join('')}
            </div>
          </div>
          ${entry.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${entry.homeScored?'⚽ BUT !':'⚽ BUT !'}</div>`:''}
        </div>`
      }
      return `<div style="font-size:11px;color:${entry.type==='goal'?'#FFD700':'rgba(255,255,255,0.65)'};font-weight:${entry.type==='goal'?700:400};padding:3px 2px">${entry.text||''}</div>`
    }

    // ── Zone action (haut) — identique match-ia ──
    const logHTML = (() => {
      if (isMyDefense && gameState.pendingAttack?.players) {
        const atk = gameState.pendingAttack
        return `<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${oppName} ATTAQUE — Défendez !</div>
          ${renderCardRow((atk.players||[]).map(p=>({...p,used:false})),'#ff6b6b',atk.total)}
        </div>`
      }
      if (isMyAttack && gameState.pendingAttack?.players) {
        const atk = gameState.pendingAttack
        return `<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${renderCardRow((atk.players||[]).map(p=>({...p,used:false})),'#00ff88',atk.total)}
        </div>`
      }
      const last = (gameState.log||[]).slice(-1)[0]
      if (!last) return '<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'
      return '<div style="padding:2px 4px">' + renderLogEntry(last) + '</div>'
    })()

    // ── Header (identique match-ia) ──
    const headerHTML = `
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${myName}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${myScore} – ${oppScore}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${oppName}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${logHTML}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(gameState.log||[]).length})
      </button>`

    _hideBottomNav(container)
    container.style.overflow = 'hidden'

    if (_pc) {
      container.innerHTML = `
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${headerHTML}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${subsHTML}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${terrainHTML}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${actionBtn}${counter}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${activeGCs.map(gc=>gcMiniPC(gc,false)).join('')}
            ${boostAvail?gcMiniPC(null,true):''}
          </div>
        </div>
      </div>`
    } else {
      container.innerHTML = `
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${headerHTML}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${renderTeam(myTeam, gameState[myRole+'Formation'], phase, selectedIds, 300, 300, extraSelectableIds)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${activeGCs.map(gc=>gcMiniMob(gc,false)).join('')}
            ${boostAvail?gcMiniMob(null,true):''}
            <div id="pvp-sub-open" style="cursor:${(isMyAttack&&availSubs.length>0)?'pointer':'default'};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${(isMyAttack&&availSubs.length>0)?'rgba(255,255,255,0.5)':'rgba(255,255,255,0.15)'};background:${(isMyAttack&&availSubs.length>0)?'rgba(60,60,60,0.9)':'rgba(40,40,40,0.5)'};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${(isMyAttack&&availSubs.length>0)?1:0.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${availSubs.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(gameState['usedSubIds_'+myRole]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(gameState['usedSubIds_'+myRole]||[]).length}/${gameState.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${actionBtn}${counter}</div>
        </div>
      </div>`
    }

    // ── Fix hauteur mobile (visualViewport, identique match-ia) ──
    function updateMatchHeight() {
      const ms = container.querySelector('.match-screen')
      if (!ms) return
      const vh = Math.round((window.visualViewport&&window.visualViewport.height)||window.innerHeight)
      ms.style.height = vh+'px'; ms.style.minHeight = vh+'px'; ms.style.maxHeight = vh+'px'; ms.style.overflow = 'hidden'
      const bar = container.querySelector('#mobile-action-bar')
      const play = container.querySelector('#mobile-play-area')
      if (bar && play) play.style.paddingBottom = bar.offsetHeight+'px'
    }
    updateMatchHeight()
    setTimeout(updateMatchHeight, 120); setTimeout(updateMatchHeight, 400)
    if (!_vvBound) {
      _vvBound = true
      if (window.visualViewport) { window.visualViewport.addEventListener('resize', updateMatchHeight); window.visualViewport.addEventListener('scroll', updateMatchHeight) }
      window.addEventListener('resize', updateMatchHeight)
    }

    // ── Fix SVG terrain ──
    ;(function fixSVG() {
      const svg = container.querySelector('.terrain-wrapper svg')
      if (!svg) return
      svg.removeAttribute('width'); svg.removeAttribute('height')
      svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
      svg.setAttribute('viewBox', '-26 -26 352 352')
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    })()

    // ── Événements ──
    container.querySelectorAll('.match-slot-hit').forEach(el => {
      el.addEventListener('click', () => {
        if (!isMyAttack && !isMyDefense) return
        const cardId = el.dataset.cardId, role = el.dataset.role
        const p = (myTeam[role]||[]).find(pp=>pp.cardId===cardId)
        if (!p || p.used) return
        const isExtra = extraSelectableIds.includes(cardId)
        if (isMyAttack && !['MIL','ATT'].includes(role) && !isExtra) return
        if (!Array.isArray(gameState['selected_'+myRole])) gameState['selected_'+myRole] = []
        const arr = gameState['selected_'+myRole]
        const idx = arr.findIndex(s=>s.cardId===cardId)
        if (idx>-1) arr.splice(idx,1); else if (arr.length<3) arr.push({...p,_role:role})
        renderPvpScreen()
      })
    })

    // Clic sur une carte dos (joueur utilisé) → ouvre le remplacement présélectionné
    container.querySelectorAll('.match-used-hit').forEach(el => {
      el.addEventListener('click', () => pvpOpenSubSelector(el.dataset.cardId))
    })

    container.querySelectorAll('.pvp-sub-btn').forEach(el => {
      el.addEventListener('click', () => pvpOpenSubSelector())
    })
    // Bouton carte grise mobile → panel de remplacement
    container.querySelector('#pvp-sub-open')?.addEventListener('click', () => pvpOpenSubSelector())

    container.querySelectorAll('.pvp-gc-mini').forEach(el => {
      el.addEventListener('click', () => pvpShowGCDetail(el.dataset.gcId, el.dataset.gcType))
    })
    container.querySelector('#pvp-boost-card')?.addEventListener('click', () => pvpOpenBoostPicker())
    container.querySelector('#pvp-action')?.addEventListener('click', (e) => {
      if (isMyAttack) {
        if (e.currentTarget.dataset.pass === '1' || !canAttack(myRole)) pvpPassTurn()
        else pvpConfirmAttack()
      } else if (isMyDefense) pvpConfirmDefense()
    })
    container.querySelector('#pvp-quit')?.addEventListener('click', () => {
      if (confirm('Quitter ? Vous perdrez par forfait.')) forfeitMatch()
    })
    container.querySelector('#pvp-view-opp')?.addEventListener('click', () => pvpShowOpponentTeam())
    container.querySelector('#pvp-toggle-history')?.addEventListener('click', () => pvpShowHistory())

    // ── Timer local (hors gameState) ──
    if (_localTimerInt) { clearInterval(_localTimerInt); _localTimerInt = null }
    if ((isMyAttack||isMyDefense) && !_pvpEnded) {
      let remaining=30, phase2=false
      const timerEl = () => document.getElementById('pvp-timer')
      const paint = () => { if(timerEl()){timerEl().textContent=remaining+'s';timerEl().style.color=phase2?'#ff4444':'#fff'} }
      paint()
      _localTimerInt = setInterval(() => {
        remaining--
        if (remaining<0) {
          if(!phase2){phase2=true;remaining=15;paint()}
          else {
            clearInterval(_localTimerInt);_localTimerInt=null
            // Si l'action attendue est seulement PASSER (aucun attaquant), auto-passer au lieu de forfait
            if (isMyAttack && !canAttack(myRole)) pvpPassTurn()
            else forfeitMatch()
          }
        }
        else paint()
      }, 1000)
    }
  }

  // ── Reveal équipe adverse (5s) ──────────────────────────
  function renderPvpReveal() {
    _hideBottomNav(container)
    container.innerHTML = `
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${gameState[oppRole+'Name']||'Adversaire'}</div>
      <div style="width:min(90vw,420px)">${buildTeamSVG(gameState[oppRole+'Team'],gameState[oppRole+'Formation'],null,[],300,300)}</div>
    </div>`
    if (myRole==='p1') setTimeout(async()=>{ await pushState({ phase:'midfield' }) }, 5000)
  }

  // ── Duel milieu (identique match-ia.js avec vraies cartes + animation) ──
  let _midfieldAnimDone = false  // Protège l'animation du duel contre les re-renders Realtime

  function renderPvpMidfield() {
    // Si l'animation est déjà en cours, ne pas la relancer (les Realtime updates
    // déclenchent renderPvpScreen → renderPvpMidfield et cassent les setTimeout)
    if (_midfieldAnimDone) return

    const myMils  = gameState[myRole+'Team'].MIL||[]
    const oppMils = gameState[oppRole+'Team'].MIL||[]
    function milScore(mils){return mils.reduce((s,p)=>s+getNoteForRole(p,'MIL'),0)}
    function milLinks(mils){let b=0;for(let i=0;i<mils.length-1;i++){const c=linkColor(mils[i],mils[i+1]);if(c==='#00ff88')b+=2;else if(c==='#FFD700')b+=1};return b}
    const myTotal=milScore(myMils)+milLinks(myMils), oppTotal=milScore(oppMils)+milLinks(oppMils)
    const myWins=myTotal>=oppTotal

    function renderMilRow(mils,label,side){
      return `<div id="duel-row-${side}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${label}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${mils.map((p,i)=>{
            const lc=i<mils.length-1?linkColor(p,mils[i+1]):null
            const noLink=!lc||lc==='#ff3333'||lc==='#cc2222'
            const lv=lc==='#00ff88'?'+2':lc==='#FFD700'?'+1':''
            return `<div class="duel-card duel-card-${side}" data-idx="${i}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${renderMiniCardHTML({...p,note:getNoteForRole(p,'MIL'),_line:'MIL'},58,78)}
            </div>
            ${i<mils.length-1?`<div class="duel-link duel-link-${side}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${noLink?'rgba(255,255,255,0.12)':lc};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${noLink?'none':`0 0 8px ${lc}`}">
              ${lv?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${lc}">${lv}</span>`:''}
            </div>`:''}`
          }).join('')}
        </div>
        <div class="duel-score-line duel-score-line-${side}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${milScore(mils)} + ${milLinks(mils)} liens = <b style="color:#fff">${milScore(mils)+milLinks(mils)}</b>
        </div>
      </div>`
    }

    _hideBottomNav(container)
    container.innerHTML = `
    <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <style>
        @keyframes duelPulse{0%{transform:scale(1)}50%{transform:scale(1.18)}100%{transform:scale(1)}}
        @keyframes duelGlow{0%,100%{text-shadow:0 0 12px rgba(255,215,0,.6)}50%{text-shadow:0 0 28px rgba(255,215,0,.95)}}
        @keyframes vsFlash{0%{opacity:0;transform:scale(2)}60%{opacity:1;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}
        @keyframes winnerSlam{0%{transform:scale(1)}35%{transform:translateY(-14px) scale(1.05)}70%{transform:translateY(10px) scale(1.12,.92)}100%{transform:translateY(0) scale(1)}}
        @keyframes crushSquash{0%{transform:scaleY(1);opacity:1}55%{transform:scaleY(.1) translateY(8px);opacity:.5}100%{transform:scaleY(0);opacity:0}}
        @keyframes shockwave{0%{transform:translateX(-50%) scale(.2);opacity:.9}100%{transform:translateX(-50%) scale(2.4);opacity:0}}
        @keyframes boostFlipIn{0%{transform:perspective(600px) rotateY(90deg) scale(.6);opacity:0}60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>
      ${renderMilRow(myMils, gameState[myRole+'Name']||'Vous', 'me')}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${renderMilRow(oppMils, gameState[oppRole+'Name']||'Adversaire', 'opp')}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`

    // Animation identique match-ia.js
    const reveal=(sel,delay)=>container.querySelectorAll(sel).forEach((el,i)=>{setTimeout(()=>{el.style.opacity='1';el.style.transform='translateY(0) scale(1)'},delay+i*90)})
    reveal('.duel-card-me',150); reveal('.duel-card-opp',500)
    setTimeout(()=>container.querySelectorAll('.duel-link').forEach((el,i)=>setTimeout(()=>{el.style.opacity='1'},i*70)),900)
    setTimeout(()=>{const vs=container.querySelector('#pvp-vs');if(vs){vs.style.opacity='1';vs.style.animation='vsFlash .5s ease'}; container.querySelectorAll('.duel-score-line').forEach(el=>el.style.opacity='1')},1250)
    function countUp(id,target,dur){const el=document.getElementById(id);if(!el)return;const t0=performance.now();const s=(t)=>{const k=Math.min(1,(t-t0)/dur);el.textContent=Math.round(target*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(s);else el.textContent=target};requestAnimationFrame(s)}
    setTimeout(()=>{countUp('pvp-score-me',myTotal,800);countUp('pvp-score-opp',oppTotal,800)},1500)

    // Calcul boost (identique des 2 côtés via données gameState)
    const p1Mils=gameState.p1Team.MIL||[], p2Mils=gameState.p2Team.MIL||[]
    const p1T=milScore(p1Mils)+milLinks(p1Mils), p2T=milScore(p2Mils)+milLinks(p2Mils)
    const winnerRole=p1T>=p2T?'p1':'p2'
    let boostValueNow=gameState.boostValue
    if(boostValueNow==null){boostValueNow=rollBoost();gameState.boostValue=boostValueNow;gameState.boostOwner=winnerRole;gameState.boostUsed=false}

    // Bloquer immédiatement les re-renders Realtime pendant l'animation
    _midfieldAnimDone = true

    setTimeout(()=>{
      const winRow=container.querySelector('#duel-row-'+(myWins?'me':'opp'))
      const loseRow=container.querySelector('#duel-row-'+(myWins?'opp':'me'))
      const elMe=document.getElementById('pvp-score-me'), elOpp=document.getElementById('pvp-score-opp')
      const elWin=myWins?elMe:elOpp, elLose=myWins?elOpp:elMe
      if(elWin){elWin.style.fontSize='80px';elWin.style.color=myWins?'#FFD700':'#ff6b6b';elWin.style.animation='duelPulse .5s ease'+(myWins?',duelGlow 1.5s ease infinite .5s':'')}
      if(elLose)elLose.style.opacity='0.25'
      setTimeout(()=>{
        if(winRow){winRow.style.animation='winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards';winRow.style.zIndex='5'}
        setTimeout(()=>{
          const shock=document.getElementById('duel-shock')
          if(shock)shock.style.animation='shockwave .5s ease-out forwards'
          if(loseRow)loseRow.style.animation='crushSquash .45s ease-in forwards'
          if(navigator.vibrate)navigator.vibrate([40,30,60])
        },320)
        setTimeout(()=>{
          const fin=document.getElementById('pvp-duel-finale')
          if(!fin)return
          const boostHTML = gameState.boostOwner===myRole
            ? '<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+boostValueNow+'</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n\'importe quel joueur</div></div>'
            : ''
          // p1 voit le bouton Commencer, p2 attend via Realtime
          const ctaHTML = myRole==='p1'
            ? '<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>'
            : '<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l\'adversaire...</div>'
          fin.innerHTML = '<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'
            + (myWins ? '⚽ '+gameState[myRole+'Name']+'<br>gagne le milieu et attaque !' : '😔 '+gameState[oppRole+'Name']+'<br>gagne l\'engagement et attaque !')
            + '</div>' + boostHTML + ctaHTML
          fin.style.transition='opacity .45s ease'; fin.style.opacity='1'; fin.style.pointerEvents='auto'
          document.getElementById('pvp-start-match')?.addEventListener('click', async()=>{
            const attacker=winnerRole
            await pushState({phase:attacker+'-attack',attacker,round:1,boostValue:boostValueNow,boostUsed:false,boostOwner:attacker})
          })
        },600)
      },700)
    },2800)
  }

  function showGoalAnimation(players, myScore, oppScore, isMyGoal, callback) {
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer'
    const fw = Array.from({length:10},(_,i)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${i%2===0?'A':'B'} ${0.7+Math.random()*0.7}s ease ${Math.random()*0.9}s both;opacity:0">${['✨','🌟','⭐','💥','🎇','🎆','🔥','🌈'][i%8]}</div>`).join('')
    const JC = {GK:'#111',DEF:'#bb2020',MIL:'#D4A017',ATT:'#1A6B3C'}
    overlay.innerHTML = `
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${fw}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${isMyGoal ? 'BUT !' : 'BUT ADV !'}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${myScore} – ${oppScore}
      </div>
      ${players?.length ? `<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${players.map(p=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${JC[p.job]||'#555'};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${p.portrait?`<img src="${p.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:''}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(p.name||'').slice(0,8)}</div>
        </div>`).join('')}
      </div>` : ''}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`
    document.body.appendChild(overlay)
    let dismissed = false
    const dismiss = () => { if(dismissed)return; dismissed=true; overlay.remove(); setTimeout(()=>callback(),50) }
    overlay.addEventListener('click', dismiss)
    setTimeout(dismiss, 3500)
  }

  function pvpShowGCDetail(gcId, gcType) {
    const myGcFull=gameState['gcCardsFull_'+myRole]||[]
    const card=myGcFull.find(c=>c.id===gcId)
    const def=card?._gcDef
    const bg=({purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'})[def?.color]||'linear-gradient(160deg,#4a0a8a,#7a28b8)'
    const bord=({purple:'#b06ce0',light_blue:'#00d4ef'})[def?.color]||'#b06ce0'
    const name=def?.name||gcType, effect=def?.effect||GC_DEFS[gcType]?.desc||'Carte spéciale.'
    const imgUrl=def?.image_url?`${import.meta.env.BASE_URL}icons/${def.image_url}`:null
    const icon=GC_DEFS[gcType]?.icon||'⚡'
    const overlay=document.createElement('div')
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px'
    overlay.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${bord}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${name.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${name}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${imgUrl?`<img src="${imgUrl}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${icon}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${effect}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#pvp-gc-back')?.addEventListener('click',()=>overlay.remove())
    overlay.querySelector('#pvp-gc-use')?.addEventListener('click',()=>{ overlay.remove(); pvpUseGameChanger(gcId,gcType) })
  }

  function pvpOpenBoostPicker() {
    const team=gameState[myRole+'Team']
    const pool=Object.entries(team).flatMap(([r,ps])=>(ps||[]).filter(p=>!p.used).map(p=>({...p,_line:r})))
    if(!pool.length)return
    const overlay=document.createElement('div')
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden'
    overlay.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${gameState.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${pool.map(p=>{
          const bg=({GK:'#111',DEF:'#bb2020',MIL:'#D4A017',ATT:'#1A6B3C'})[p._line]||'#555'
          const note=getNoteForRole(p,p._line)+(p.boost||0)
          return `<div class="bp-item" data-cid="${p.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${bg};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||'?'}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${note}</div>
          </div>`
        }).join('')}
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#bp-close')?.addEventListener('click',()=>overlay.remove())
    overlay.querySelectorAll('.bp-item').forEach(el=>{
      el.addEventListener('click',async()=>{
        const cid=el.dataset.cid, p=pool.find(x=>x.cardId===cid)
        if(!p)return
        const target=(team[p._line]||[]).find(pp=>pp.cardId===cid)
        if(target)target.boost=(target.boost||0)+gameState.boostValue
        overlay.remove()
        await pushState({[myRole+'Team']:team,boostUsed:true})
      })
    })
  }

  // Sélectionner d'abord le remplaçant entrant (mobile carte grise)
  // Panel de remplacement carousel IN/OUT (identique à match-ia)
  function pvpOpenSubSelector(preferredOutId = null) {
    const _isMyAttack = gameState.phase === myRole+'-attack'
    if (!_isMyAttack) { toast('Remplacement uniquement avant votre attaque','warning'); return }
    const myTeam = gameState[myRole+'Team']
    const usedSubIds = gameState['usedSubIds_'+myRole]||[]
    const maxSubs = gameState.maxSubs||3
    if (usedSubIds.length >= maxSubs) { toast(`Maximum ${maxSubs} remplacements atteint`,'warning'); return }
    const grayedPlayers = Object.entries(myTeam).flatMap(([r,ps])=>(ps||[]).filter(p=>p.used).map(p=>({...p,_line:r})))
    const availSubsList = (gameState[myRole+'Subs']||[]).filter(s=>!usedSubIds.includes(s.cardId))
    if (!grayedPlayers.length) { toast('Aucun joueur utilisé à remplacer','warning'); return }
    if (!availSubsList.length) { toast('Aucun remplaçant disponible','warning'); return }

    // Présélection : joueur sortant cliqué + 1er remplaçant au même poste
    let outIdx = Math.max(0, grayedPlayers.findIndex(p => p.cardId === preferredOutId))
    const outRole = grayedPlayers[outIdx]?._line || grayedPlayers[outIdx]?.job
    let inIdx = Math.max(0, availSubsList.findIndex(s => (s.job === outRole)))
    let subConfirmDone = false
    const overlay = document.createElement('div')
    overlay.id = 'pvp-sub-overlay'
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden'

    function rebuild() {
      const outP = grayedPlayers[outIdx]
      const inP  = availSubsList[inIdx]
      const CARD_W = Math.min(130, Math.round((window.innerWidth - 90) / 2))
      const CARD_H = Math.round(CARD_W * 1.35)
      const arrowStyle = (disabled) => `background:rgba(255,255,255,0.12);border:none;color:${disabled?'rgba(255,255,255,0.2)':'#fff'};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${disabled?'default':'pointer'};flex-shrink:0`

      overlay.innerHTML = `
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${usedSubIds.length}/${maxSubs})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${arrowStyle(inIdx===0)}" ${inIdx===0?'disabled':''}>▲</button>
          <div>${inP ? renderMiniCardHTML({...inP, used:false, boost:0}, CARD_W, CARD_H) : '<div>—</div>'}</div>
          <button id="pin-down" style="${arrowStyle(inIdx>=availSubsList.length-1)}" ${inIdx>=availSubsList.length-1?'disabled':''}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${inIdx+1}/${availSubsList.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${arrowStyle(outIdx===0)}" ${outIdx===0?'disabled':''}>▲</button>
          <div>${outP ? renderMiniCardHTML({...outP, used:false, boost:0}, CARD_W, CARD_H) : '<div>—</div>'}</div>
          <button id="pout-down" style="${arrowStyle(outIdx>=grayedPlayers.length-1)}" ${outIdx>=grayedPlayers.length-1?'disabled':''}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${outIdx+1}/${grayedPlayers.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`

      overlay.querySelector('#psub-close')?.addEventListener('click', () => overlay.remove())
      overlay.querySelector('#pout-up')?.addEventListener('click',   () => { if(outIdx>0){outIdx--;rebuild()} })
      overlay.querySelector('#pout-down')?.addEventListener('click', () => { if(outIdx<grayedPlayers.length-1){outIdx++;rebuild()} })
      overlay.querySelector('#pin-up')?.addEventListener('click',    () => { if(inIdx>0){inIdx--;rebuild()} })
      overlay.querySelector('#pin-down')?.addEventListener('click',  () => { if(inIdx<availSubsList.length-1){inIdx++;rebuild()} })

      const bindSwipe = (panelId, getIdx, setIdx, maxLen) => {
        const panel = overlay.querySelector('#'+panelId)
        if (!panel) return
        let ty0 = 0
        panel.addEventListener('touchstart', e => { ty0 = e.touches[0].clientY }, {passive:true})
        panel.addEventListener('touchend', e => {
          const dy = e.changedTouches[0].clientY - ty0
          if (Math.abs(dy) < 30) return
          const i = getIdx()
          if (dy < 0 && i < maxLen-1) { setIdx(i+1); rebuild() }
          else if (dy > 0 && i > 0)   { setIdx(i-1); rebuild() }
        }, {passive:true})
      }
      bindSwipe('pin-panel',  () => inIdx,  v => inIdx = v,  availSubsList.length)
      bindSwipe('pout-panel', () => outIdx, v => outIdx = v, grayedPlayers.length)

      overlay.querySelector('#psub-confirm')?.addEventListener('click', async (ev) => {
        ev.preventDefault(); ev.stopPropagation()
        if (subConfirmDone) return
        subConfirmDone = true
        const outPlayer = grayedPlayers[outIdx]
        const subPlayer = availSubsList[inIdx]
        if (!outPlayer || !subPlayer) return
        const role = outPlayer._line
        const idx = (myTeam[role]||[]).findIndex(p=>p.cardId===outPlayer.cardId)
        if (idx === -1) { toast('Erreur : joueur introuvable','error'); overlay.remove(); return }
        // Remplacer en place (splice) — garde la position sur le terrain
        const inPlayer = { ...subPlayer, _line:role, position:outPlayer.position, used:false, boost:0 }
        myTeam[role].splice(idx, 1, inPlayer)
        const usedSubIdsNew = [...usedSubIds, subPlayer.cardId]
        overlay.remove()
        pvpShowSubAnimation(outPlayer, subPlayer, async () => {
          await pushState({ [myRole+'Team']: myTeam, [oppRole+'Team']: gameState[oppRole+'Team'],
            ['usedSubIds_'+myRole]: usedSubIdsNew })
        })
      })
    }

    document.body.appendChild(overlay)
    rebuild()
  }

  // Animation de remplacement
  function pvpShowSubAnimation(outPlayer, inPlayer, callback) {
    const JC = {GK:'#111',DEF:'#bb2020',MIL:'#D4A017',ATT:'#1A6B3C'}
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer'
    const card = (p, color, lbl) => `<div style="text-align:center">
      <div style="font-size:9px;color:${color};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${lbl}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${JC[p.job]||'#555'};border:3px solid ${color};position:relative;overflow:hidden;margin:0 auto">
        ${getPortrait(p)?`<img src="${getPortrait(p)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:''}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(p.name||'').slice(0,12)}</div>
    </div>`
    overlay.innerHTML = `
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${card(inPlayer,'#00ff88','Entre')}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${card(outPlayer,'#ff6b6b','Sort')}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`
    document.body.appendChild(overlay)
    let dismissed = false
    const dismiss = () => { if(dismissed)return; dismissed=true; overlay.remove(); setTimeout(()=>callback(),50) }
    overlay.addEventListener('click', dismiss)
    setTimeout(dismiss, 2200)
  }

  function pvpShowOpponentTeam() {
    const overlay=document.createElement('div')
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto'
    overlay.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${gameState[oppRole+'Name']}</div>
      <div style="width:min(90vw,420px)">${buildTeamSVG(gameState[oppRole+'Team'],gameState[oppRole+'Formation'],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`
    document.body.appendChild(overlay)
    overlay.querySelector('#pvp-opp-close')?.addEventListener('click',()=>overlay.remove())
  }

  function pvpShowHistory() {
    const log=gameState.log||[]
    const overlay=document.createElement('div')
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column'
    overlay.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${log.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>'
          :[...log].reverse().map(e=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${e.type==='goal'?'#FFD700':e.type==='stop'?'#00ff88':'rgba(255,255,255,0.5)'}"><div style="font-size:12px;color:#fff">${e.text||''}</div></div>`).join('')}
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#pvp-hist-close')?.addEventListener('click',()=>overlay.remove())
  }

  // Passer son tour d'attaque (aucun attaquant valide) → l'adversaire reprend l'attaque.
  async function pvpPassTurn() {
    if (gameState.phase !== myRole+'-attack') return
    const nextAttacker = myRole==='p1'?'p2':'p1'
    const round = (gameState.round||0) + 1
    const log = [...(gameState.log||[])]
    log.push({ type:'info', text:`⏭️ ${gameState[myRole+'Name']||'Vous'} passe (aucun attaquant disponible)` })

    // Fin de match si plus personne ne peut marquer
    const isFinished = checkMatchEnd(gameState)
    // Si l'adversaire ne peut pas attaquer non plus, le match se termine
    const oppCanAttack = canAttack(nextAttacker)
    const nextPhase = (isFinished || !oppCanAttack) ? 'finished' : nextAttacker+'-attack'

    await pushState({
      ['selected_'+myRole]: [], modifiers: { ...gameState.modifiers, [myRole]:{} },
      pendingAttack: null, phase: nextPhase, attacker: nextAttacker, round, log })
    if (nextPhase === 'finished') {
      await supabase.from('matches').update({ status:'finished', winner_id: computeWinnerId(gameState) }).eq('id', matchId)
    }
  }

  async function pvpConfirmAttack() {
    const myTeam = gameState[myRole+'Team']
    const oppHasNoOne = !['GK','DEF','MIL','ATT'].some(r => (gameState[oppRole+'Team'][r]||[]).some(p=>!p.used))
    const selected = (gameState['selected_'+myRole]||[]).map(s => {
      const live = (myTeam[s._role]||[]).find(x => x.cardId===s.cardId) || s
      const isExtra = oppHasNoOne && ['GK','DEF'].includes(s._role)
      return { ...live, _line: s._role, ...(isExtra ? { note_a: Math.max(1, Number(live.note_a)||0) } : {}) }
    })
    if (!selected.length) return
    const calc = calcAttack(selected, gameState.modifiers[myRole]||{})
    // Marquer used dans le registre persisté (source de vérité) + flag local immédiat
    markUsed(myRole, selected.map(s => s.cardId))
    selected.forEach(sel => { const p=(myTeam[sel._role]||[]).find(pp=>pp.cardId===sel.cardId); if(p) p.used=true })
    gameState['selected_'+myRole] = []
    renderPvpScreen()
    const log = [...(gameState.log||[])]

    if (oppHasNoOne) {
      const newScore = (gameState[myRole+'Score']||0) + 1
      const players = selected.map(p=>({ name:p.name, note:getNoteForRole(p,p._line||'ATT'), portrait:getPortrait(p), job:p.job }))
      log.push({ type:'duel', isGoal:true, homeScored:true,
        text:`⚽ BUT ! L'adversaire n'a plus de joueurs.`,
        homePlayers: players, homeTotal: calc.total, aiTotal: 0 })
      const round = (gameState.round||0) + 1
      const nextAttacker = myRole==='p1'?'p2':'p1'
      const newState = { ...gameState, [myRole+'Team']: myTeam, [myRole+'Score']: newScore }
      const isFinished = checkMatchEnd(newState)
      // Marquer le round pour éviter le double-affichage via le Realtime du propre pushState
      _goalAnimShownFor.add(round)
      showGoalAnimation(players, newScore, gameState[oppRole+'Score']||0, true, async () => {
        await pushState({ [myRole+'Team']: myTeam, [myRole+'Score']: newScore,
          ['selected_'+myRole]: [], modifiers: { ...gameState.modifiers, [myRole]:{} },
          pendingAttack: null, phase: isFinished?'finished':nextAttacker+'-attack',
          attacker: nextAttacker, round, log })
        if (isFinished) await supabase.from('matches').update({ status:'finished', winner_id: computeWinnerId({ ...gameState, [myRole+'Score']: newScore }) }).eq('id', matchId)
      })
      return
    }

    log.push({ type:'pending', text:`⚔️ ${gameState[myRole+'Name']} attaque (${calc.total})` })
    await pushState({ [myRole+'Team']: myTeam, [oppRole+'Team']: gameState[oppRole+'Team'],
      pendingAttack: { ...calc, players:selected, side:myRole },
      ['selected_'+myRole]: [], modifiers: { ...gameState.modifiers, [myRole]:{} },
      phase: oppRole+'-defense', log })
  }

  async function pvpConfirmDefense() {
    const myTeam = gameState[myRole+'Team']
    const selected = (gameState['selected_'+myRole]||[]).map(s => {
      const live = (myTeam[s._role]||[]).find(x => x.cardId===s.cardId) || s
      return { ...live, _line: s._role }
    })
    const calc = calcDefense(selected, gameState.modifiers[myRole]||{})
    // Marquer used dans le registre persisté (source de vérité) + flag local immédiat
    markUsed(myRole, selected.map(s => s.cardId))
    selected.forEach(sel => { const p=(myTeam[sel._role]||[]).find(pp=>pp.cardId===sel.cardId); if(p) p.used=true })
    gameState['selected_'+myRole] = []
    renderPvpScreen()

    const result = resolveDuel(gameState.pendingAttack.total, calc.total, gameState.modifiers[myRole]||{})
    const attackerRole = gameState.pendingAttack.side
    const goal = result==='attack' || result?.goal
    const nextAttacker = attackerRole==='p1'?'p2':'p1'
    const round = (gameState.round||0) + 1

    const attackPlayers = (gameState.pendingAttack.players||[]).map(p=>({ name:p.name, note:getNoteForRole(p,p._line||'ATT'), portrait:getPortrait(p), job:p.job }))
    const log = [...(gameState.log||[])]
    log.push({ type:'duel',
      isGoal: goal, homeScored: goal && attackerRole===myRole,
      text: goal
        ? `⚽ BUT de ${gameState[attackerRole+'Name']} ! (${gameState.pendingAttack.total} vs ${calc.total})`
        : `✋ Attaque stoppée (${gameState.pendingAttack.total} vs ${calc.total})`,
      homePlayers: attackPlayers,
      aiPlayers: selected.map(p=>({ name:p.name, note:getNoteForRole(p,p._line||'DEF'), portrait:getPortrait(p), job:p.job })),
      homeTotal: gameState.pendingAttack.total, aiTotal: calc.total })

    const newAttackerScore = goal ? (gameState[attackerRole+'Score']||0)+1 : (gameState[attackerRole+'Score']||0)
    const newState = { ...gameState, [myRole+'Team']: myTeam, [attackerRole+'Score']: newAttackerScore }
    const isFinished = checkMatchEnd(newState)
    // Le prochain attaquant garde la main même s'il ne peut pas attaquer (il verra PASSER).
    // Le match ne se termine que si plus personne ne peut marquer (checkMatchEnd).
    const nextPhase = isFinished ? 'finished' : nextAttacker+'-attack'

    const doNext = async () => {
      await pushState({ [myRole+'Team']: myTeam, [oppRole+'Team']: gameState[oppRole+'Team'],
        [attackerRole+'Score']: newAttackerScore,
        ['selected_'+myRole]: [], modifiers: { ...gameState.modifiers, [myRole]:{} },
        pendingAttack: null, phase: nextPhase, attacker: nextAttacker, round, log })
      if (nextPhase==='finished' || isFinished) await supabase.from('matches').update({ status:'finished', winner_id: computeWinnerId({ ...gameState, [attackerRole+'Score']: newAttackerScore }) }).eq('id', matchId)
    }

    // Bug 2 : showGoalAnimation si but
    if (goal) {
      const isMyGoal = attackerRole === myRole
      const myNewScore = isMyGoal ? newAttackerScore : (gameState[myRole+'Score']||0)
      const oppNewScore = isMyGoal ? (gameState[oppRole+'Score']||0) : newAttackerScore
      // Marquer le round pour éviter le double-affichage via le Realtime du propre pushState
      _goalAnimShownFor.add(round)
      showGoalAnimation(attackPlayers, myNewScore, oppNewScore, isMyGoal, doNext)
    } else {
      await doNext()
    }
  }

  // ── Helpers de capacité (règles de fin de partie) ──────────────────
  // Un joueur "attaquant valide" = MIL ou ATT non utilisé.
  function hasAttacker(team) {
    return ['MIL','ATT'].some(r => (team[r]||[]).some(p => !p.used))
  }
  // A-t-il encore au moins un joueur (toutes lignes) sur le terrain ?
  function hasAnyPlayer(team) {
    return ['GK','DEF','MIL','ATT'].some(r => (team[r]||[]).some(p => !p.used))
  }
  // N'a plus QUE des défenseurs/gardiens (pas de MIL/ATT) mais en a au moins un.
  function onlyDefenders(team) {
    return hasAnyPlayer(team) && !hasAttacker(team)
  }
  // Le rôle peut-il réellement attaquer ce tour-ci ?
  //  - oui s'il a un MIL/ATT
  //  - oui si l'adversaire est vide ET qu'il lui reste des GK/DEF (qui obtiennent note 1)
  //  - non sinon (→ bouton PASSER)
  function canAttack(role) {
    const myT  = gameState[role+'Team']
    const oppT = gameState[(role==='p1'?'p2':'p1')+'Team']
    if (hasAttacker(myT)) return true
    if (!hasAnyPlayer(oppT) && onlyDefenders(myT)) return true   // def → note 1
    return false
  }
  // Fin de match : aucun des deux ne peut plus marquer.
  // = les deux n'ont plus que des défenseurs (ou plus rien du tout).
  function checkMatchEnd(gs) {
    const p1CanScore = ['MIL','ATT'].some(r=>(gs.p1Team[r]||[]).some(p=>!p.used))
    const p2CanScore = ['MIL','ATT'].some(r=>(gs.p2Team[r]||[]).some(p=>!p.used))
    // Si l'un n'a plus que des def mais l'autre est vide, le def peut encore marquer (note 1)
    const p1Any = hasAnyPlayer(gs.p1Team), p2Any = hasAnyPlayer(gs.p2Team)
    const p1CouldScoreVsEmpty = !p2Any && p1Any
    const p2CouldScoreVsEmpty = !p1Any && p2Any
    const p1Done = !p1CanScore && !p1CouldScoreVsEmpty
    const p2Done = !p2CanScore && !p2CouldScoreVsEmpty
    return p1Done && p2Done
  }

  // winner_id basé sur les scores finaux (null = match nul)
  function computeWinnerId(gs) {
    const p1 = gs.p1Score||0, p2 = gs.p2Score||0
    if (p1 === p2) return null
    return p1 > p2 ? match.home_id : match.away_id
  }

  function renderPvpResult() {
    const myScore=gameState[myRole+'Score'],oppScore=gameState[oppRole+'Score']
    const won=myScore>oppScore,draw=myScore===oppScore
    _hideBottomNav(container)
    container.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${won?'🏆':draw?'🤝':'😤'}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${won?'Victoire !':draw?'Match nul':'Défaite'}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${myScore} - ${oppScore}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`
    document.getElementById('pvp-home')?.addEventListener('click',()=>{try{supabase.removeChannel(channel)}catch{};_showBottomNav(container);navigate('home')})
  }

  renderPvpScreen()
}
