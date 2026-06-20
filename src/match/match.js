import { supabase } from '../lib/supabase.js'
import {
  GC_DEFS, getNoteForRole, calcAttack, calcDefense,
  calcMidfieldDuel, resolveDuel, aiSelectPlayers, getRewards
} from './game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, linkColor, getActiveLinks } from './formation-links.js'

const FORMATIONS = {
  '4-3-3 (3)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '5-3-2':     { GK:1, DEF:5, MIL:3, ATT:2 },
  '4-3-3 (4)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-2-1':   { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3 (2)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3':     { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3 (5)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '5-2-2-1':   { GK:1, DEF:5, MIL:2, ATT:3 },
  '4-3-1-2':   { GK:1, DEF:4, MIL:4, ATT:2 },
  '5-2-1-2':   { GK:1, DEF:5, MIL:3, ATT:2 },
  '4-5-1 (2)': { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-5-1':     { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-4-2':     { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-4-2 (2)': { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-4-1-1':   { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-1-2-1-2':     { GK:1, DEF:4, MIL:4, ATT:2 },
  '3-4-1-2':       { GK:1, DEF:3, MIL:5, ATT:2 },
  '3-4-2-1':       { GK:1, DEF:3, MIL:4, ATT:3 },
  '3-5-2':         { GK:1, DEF:3, MIL:5, ATT:2 },
  '4-1-4-1':       { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-2-2-2':       { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-2-3-1':       { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-2-3-1 (2)':   { GK:1, DEF:4, MIL:5, ATT:1 },
  '3-4-3':         { GK:1, DEF:3, MIL:4, ATT:3 },
  '4-1-2-1-2 (2)': { GK:1, DEF:4, MIL:4, ATT:2 },
}
const JOB_COLORS = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

// ── Helpers ───────────────────────────────────────────────
function showMsg(container, icon, msg, btnLabel, btnFn) {
  container.innerHTML = `<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${icon}</div>
      <p style="margin-bottom:16px">${msg}</p>
      <button class="btn btn-primary" id="msg-btn">${btnLabel}</button>
    </div>
  </div>`
  document.getElementById('msg-btn')?.addEventListener('click', btnFn)
}

function getPortrait(p) {
  const url = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_SUPABASE_URL : ''
  if (!url || !p?.skin || !p?.hair) return null
  const key = p.hair === 'chauve' ? `${p.skin}-chauve-rase` : `${p.skin}-${p.hair}-${p.hair_length}`
  return `${url}/storage/v1/object/public/assets/tetes/${key}.png`
}

function playerFromCard(card, position) {
  const p = card.player
  return {
    cardId: card.id,
    position: position || null,
    id: p.id,
    firstname: p.firstname,
    name: p.surname_encoded,
    country_code: p.country_code,
    club_id: p.club_id,
    job: p.job, job2: p.job2,
    note_g: Number(p.note_g)||0,
    note_d: Number(p.note_d)||0,
    note_m: Number(p.note_m)||0,
    note_a: Number(p.note_a)||0,
    rarity: p.rarity,
    skin: p.skin, hair: p.hair, hair_length: p.hair_length,
    clubName: p.clubs?.encoded_name || null,
    clubLogo: p.clubs?.logo_url || null,
    boost: 0,
    used: false,
    _line: null, _col: null,
  }
}

function getColsForLine(n) {
  if (n===1) return [1]
  if (n===2) return [0,2]
  if (n===3) return [0,1,2]
  if (n===4) return [0,1,1,2]
  if (n===5) return [0,1,1,1,2]
  return [1]
}

function rollBoost() {
  // +1 70%, +2 20%, +3 10%
  const r = Math.random() * 100
  if (r < 10) return 3
  if (r < 30) return 2
  return 1
}

// starters : tableau de { ...playerFromCard, position } où position = vrai slot DB (ex: 'MIL5','DEF3','GK1')
// Si position est fourni, on respecte EXACTEMENT le placement du deck (comme decks.js).
// Sinon (fallback, ancien code appelant sans position) on garde l'heuristique par job.
function buildTeam(starters, formation) {
  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }

  const hasPositions = starters.length && starters.every(p => p.position)

  if (hasPositions) {
    // Regrouper par rôle extrait de la position (ex: 'MIL5' → 'MIL'), trié par numéro de slot
    for (const role of ['GK','DEF','MIL','ATT']) {
      const linePlayers = starters
        .filter(p => p.position && p.position.replace(/\d+$/, '') === role)
        .sort((a,b) => parseInt(a.position.replace(/\D+/g,''),10) - parseInt(b.position.replace(/\D+/g,''),10))
        .map(p => ({ ...p, _line: role }))
      const cols = getColsForLine(linePlayers.length)
      linePlayers.forEach((p, i) => { p._col = cols[i] })
      lines[role] = linePlayers
    }
    return lines
  }

  // ── Fallback heuristique (ancien comportement, utilisé seulement si pas de position) ──
  const pool = [...starters]
  for (const role of ['GK','DEF','MIL','ATT']) {
    const linePlayers = []
    for (let i = 0; i < struct[role]; i++) {
      let idx = pool.findIndex(p => p.job === role)
      if (idx === -1) idx = pool.findIndex(p => p.job2 === role)
      if (idx === -1) idx = 0
      if (pool[idx]) {
        const p = { ...pool[idx], _line: role }
        linePlayers.push(p)
        pool.splice(idx, 1)
      }
    }
    const cols = getColsForLine(linePlayers.length)
    linePlayers.forEach((p, i) => { p._col = cols[i] })
    lines[role] = linePlayers
  }
  return lines
}

async function generateAITeam(formation, difficulty) {
  const { data: players } = await supabase
    .from('players')
    .select('id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)')
    .eq('is_active', true).limit(60)

  if (!players || players.length < 11) return generateFakeAITeam(formation)

  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }
  const pool   = [...players]

  for (const role of ['GK','DEF','MIL','ATT']) {
    const candidates = pool.filter(p => p.job === role)
    const others     = pool.filter(p => p.job !== role)
    const sorted     = [...candidates, ...others]
    const linePlayers = []
    for (let i = 0; i < struct[role]; i++) {
      const p = sorted[i] || pool[i]
      if (p) linePlayers.push({
        cardId:'ai-'+p.id+'-'+i, id:p.id,
        firstname:p.firstname, name:p.surname_encoded,
        country_code:p.country_code, club_id:p.club_id,
        job:p.job, job2:p.job2,
        note_g:Number(p.note_g)||0, note_d:Number(p.note_d)||0,
        note_m:Number(p.note_m)||0, note_a:Number(p.note_a)||0,
        rarity:p.rarity, skin:p.skin, hair:p.hair, hair_length:p.hair_length,
        clubName:p.clubs?.encoded_name||null, clubLogo:p.clubs?.logo_url||null,
        boost:0, used:false, _line:role,
      })
    }
    const cols = getColsForLine(linePlayers.length)
    linePlayers.forEach((p,i) => { p._col = cols[i] })
    lines[role] = linePlayers
  }
  return lines
}

function generateFakeAITeam(formation) {
  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }
  const NAMES  = ['ROBOT','CYBER','NEXUS','ALGO','PIXEL','BYTE','LOGIC','TURBO','CORE','VOLT','FLUX']
  let n = 0
  for (const role of ['GK','DEF','MIL','ATT']) {
    const linePlayers = []
    for (let i = 0; i < struct[role]; i++) {
      const note = 3 + Math.floor(Math.random() * 5)
      linePlayers.push({
        cardId:'fake-'+n, id:'fake-'+n,
        firstname:'IA', name:NAMES[n%NAMES.length],
        country_code:'XX', club_id:null,
        job:role, job2:null,
        note_g:role==='GK'?note:2, note_d:role==='DEF'?note:2,
        note_m:role==='MIL'?note:2, note_a:role==='ATT'?note:2,
        rarity:'normal', boost:0, used:false, _line:role,
      })
      n++
    }
    const cols = getColsForLine(linePlayers.length)
    linePlayers.forEach((p,i) => { p._col = cols[i] })
    lines[role] = linePlayers
  }
  return lines
}

// ── ENTRY POINT ───────────────────────────────────────────
// ── Masquer/Afficher le header haut + la nav bas pendant le match ──
function _hideBottomNav(container) {
  // Cibler explicitement les barres top-nav et bottom-nav (enfants de #app)
  document.querySelectorAll('.top-nav, .bottom-nav').forEach(el => {
    el.style.setProperty('display', 'none', 'important')
    el.dataset.matchHidden = '1'
  })
}
function _showBottomNav(container) {
  document.querySelectorAll('.top-nav, .bottom-nav').forEach(el => {
    el.style.removeProperty('display')
    delete el.dataset.matchHidden
  })
}


// ── MATCH RANDOM : écran de recherche + matchmaking ───────
async function showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, myGC = [], gcDefs = []) {
  const { state, navigate, toast } = ctx
  let cancelled = false
  let channel = null

  container.style.overflow = 'hidden'
  container.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`

  const statusEl = () => document.getElementById('mm-status')
  const cleanup = async (removeFromQueue = true) => {
    cancelled = true
    if (channel) { supabase.removeChannel(channel); channel = null }
    if (removeFromQueue) {
      await supabase.rpc('cancel_matchmaking', { p_user_id: state.profile.id }).catch(()=>{})
    }
  }

  document.getElementById('mm-cancel')?.addEventListener('click', async () => {
    // Toujours revenir à l'accueil, même si cleanup() échoue côté serveur
    try { await cleanup(true) } catch (e) { console.warn('[Matchmaking] cleanup error:', e) }
    _showBottomNav(container)
    navigate('home')
  })

  // ── Lancer le match une fois matché (par moi ou par l'adversaire) ──
  const startPvpMatch = async (matchId, opponentId, amIHome) => {
    if (cancelled) return
    cancelled = true
    if (channel) { supabase.removeChannel(channel); channel = null }
    if (statusEl()) statusEl().textContent = 'Adversaire trouvé !'
    await new Promise(r => setTimeout(r, 600))
    if (container.isConnected === false) return
    renderPvpMatch(container, ctx, matchId, amIHome, myGC, gcDefs)
  }

  // ── Tentative de matchmaking ────────────────────────────
  const { data: result, error } = await supabase.rpc('try_matchmake', {
    p_user_id: state.profile.id, p_deck_id: deckId
  })

  if (error || !result?.success) {
    toast('Erreur de matchmaking', 'error')
    _showBottomNav(container)
    navigate('home')
    return
  }

  if (result.matched) {
    // Un adversaire attendait déjà : on est "away", lui est "home"
    startPvpMatch(result.match_id, result.opponent_id, false)
    return
  }

  // Personne en attente : on écoute en Realtime notre propre entrée dans la queue
  if (statusEl()) statusEl().textContent = 'En attente d\'un autre joueur...'

  channel = supabase
    .channel('matchmaking-' + state.profile.id)
    .on('postgres_changes', {
      event: 'UPDATE', schema: 'public', table: 'matchmaking_queue',
      filter: `user_id=eq.${state.profile.id}`
    }, (payload) => {
      const row = payload.new
      if (row.status === 'matched' && row.match_id) {
        // On était "home" (premier inscrit), l'adversaire nous a rejoint
        startPvpMatch(row.match_id, row.matched_with, true)
      }
    })
    .subscribe()
}


// ════════════════════════════════════════════════════════
// MATCH PVP — synchro temps réel via matches.game_state
// ════════════════════════════════════════════════════════
//
// Principe : un seul état de jeu (gameState) est stocké en DB dans
// matches.game_state (JSONB). Chaque action d'un joueur :
//   1. Calcule le nouvel état localement
//   2. L'écrit dans matches.game_state (UPDATE)
//   3. Les DEUX clients (via Realtime) reçoivent l'update et re-render
//
// Le state utilise 'p1'/'p2' au lieu de 'home'/'ai'. Chaque client
// sait s'il est p1 (home_id) ou p2 (away_id) et adapte l'affichage
// (mon équipe à gauche, adversaire à droite, mes boutons actifs
// seulement quand c'est mon tour).

async function renderPvpMatch(container, ctx, matchId, amIHome, myGC = [], gcDefs = []) {
  const { state, navigate, toast } = ctx
  const myRole  = amIHome ? 'p1' : 'p2'
  const oppRole = amIHome ? 'p2' : 'p1'

  // GC pré-sélectionnés (avant matchmaking) : ids + version enrichie complète
  const myGCIds  = (myGC || []).map(g => g.id)
  const myGCFull = (myGC || []).map(g => ({ id: g.id, gc_type: g.gc_type, _gcDef: g._gcDef || null }))

  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>'

  // ── Charger le match + les 2 decks ──────────────────────
  const { data: match } = await supabase.from('matches').select('*').eq('id', matchId).single()
  if (!match) { toast('Match introuvable', 'error'); navigate('home'); return }

  // ── Construire les données d'équipes (les 2 clients en ont besoin) ──
  async function buildGameState() {
    // RPC SECURITY DEFINER : contourne le blocage RLS deck_cards_own
  // (Tom ne peut normalement pas lire les deck_cards d'Iron et vice-versa)
  const [{ data: p1DeckData, error: p1Err }, { data: p2DeckData, error: p2Err }, { data: p1Profile }, { data: p2Profile }] = await Promise.all([
      supabase.rpc('get_deck_for_match', { p_deck_id: match.home_deck_id }),
      supabase.rpc('get_deck_for_match', { p_deck_id: match.away_deck_id }),
      supabase.from('users').select('id,pseudo,club_name').eq('id', match.home_id).single(),
      supabase.from('users').select('id,pseudo,club_name').eq('id', match.away_id).single(),
    ])

    if (p1Err) console.error('[PvP] get_deck_for_match p1 error:', p1Err)
    if (p2Err) console.error('[PvP] get_deck_for_match p2 error:', p2Err)

    function rpcPlayerToLocal(row, position) {
      return {
        cardId: row.card_id, position: position || row.position,
        id: row.id, firstname: row.firstname, name: row.surname_encoded,
        country_code: row.country_code, club_id: row.club_id,
        job: row.job, job2: row.job2,
        note_g: Number(row.note_g)||0, note_d: Number(row.note_d)||0,
        note_m: Number(row.note_m)||0, note_a: Number(row.note_a)||0,
        rarity: row.rarity, skin: row.skin, hair: row.hair, hair_length: row.hair_length,
        clubName: row.club_encoded_name || null, clubLogo: row.club_logo_url || null,
        boost: 0, used: false, _line: null, _col: null,
      }
    }

    const p1Starters = (p1DeckData?.starters || []).map(r => rpcPlayerToLocal(r, r.position))
    const p2Starters = (p2DeckData?.starters || []).map(r => rpcPlayerToLocal(r, r.position))
    const p1Subs     = (p1DeckData?.subs || []).map(r => rpcPlayerToLocal(r, r.position))
    const p2Subs     = (p2DeckData?.subs || []).map(r => rpcPlayerToLocal(r, r.position))
    const p1Formation = p1DeckData?.formation || '4-4-2'
    const p2Formation = p2DeckData?.formation || '4-4-2'

    console.log('[PvP] p1Formation:', p1Formation, 'p1 starters:', p1Starters.length, 'positions:', p1Starters.map(s=>s.position))
    console.log('[PvP] p2Formation:', p2Formation, 'p2 starters:', p2Starters.length, 'positions:', p2Starters.map(s=>s.position))

    return {
      p1Team: buildTeam(p1Starters, p1Formation),
      p2Team: buildTeam(p2Starters, p2Formation),
      p1Subs, p2Subs,
      p1Formation, p2Formation,
      p1Name: p1Profile?.club_name || p1Profile?.pseudo || 'Joueur 1',
      p2Name: p2Profile?.club_name || p2Profile?.pseudo || 'Joueur 2',
      p1Score: 0, p2Score: 0,
      p1Subs_used: 0, p2Subs_used: 0,
      maxSubs: 3,
      phase: 'reveal',           // reveal → midfield → p1/p2-attack/defense → finished
      attacker: null,
      round: 0,
      selected_p1: [], selected_p2: [],
      pendingAttack: null,
      log: [],
      modifiers: { p1:{}, p2:{} },
      // GC déjà choisis avant le matchmaking : p1 (home) injecte les siens ici.
      gc_p1: amIHome ? myGCIds : [],
      gc_p2: amIHome ? [] : myGCIds,
      gcCardsFull_p1: amIHome ? myGCFull : [],
      gcCardsFull_p2: amIHome ? [] : myGCFull,
      gcReady_p1: true, gcReady_p2: true,
      usedGc_p1: [], usedGc_p2: [],
      lastActionAt: new Date().toISOString(),
    }
  }

  // ── Verrou d'initialisation : SEUL p1 (home) construit et écrit l'état initial ──
  // p2 attend en Realtime que p1 ait terminé, pour éviter toute race condition
  // (sinon les deux clients construisent et écrasent le state en parallèle).
  let gameState = match.game_state && Object.keys(match.game_state).length ? match.game_state : null

  if (!gameState) {
    if (amIHome) {
      gameState = await buildGameState()
      // Écriture atomique : seulement si game_state est encore vide en DB
      // (évite d'écraser si jamais ce client se relance deux fois)
      const { data: check } = await supabase.from('matches').select('game_state').eq('id', matchId).single()
      if (!check?.game_state || !Object.keys(check.game_state).length) {
        await supabase.from('matches').update({ game_state: gameState, turn_user_id: match.home_id }).eq('id', matchId)
      } else {
        gameState = check.game_state
      }
    } else {
      // p2 attend que p1 ait initialisé le state (poll court + realtime)
      container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l\'adversaire...</div>'
      for (let i = 0; i < 30 && !gameState; i++) {
        await new Promise(r => setTimeout(r, 400))
        const { data: m2 } = await supabase.from('matches').select('game_state').eq('id', matchId).single()
        if (m2?.game_state && Object.keys(m2.game_state).length) gameState = m2.game_state
      }
      if (!gameState) { toast('Erreur de synchronisation', 'error'); navigate('home'); return }

      // p2 injecte SES propres GC (p1 n'avait mis que les siens) puis sauvegarde
      gameState.gc_p2 = myGCIds
      gameState.gcCardsFull_p2 = myGCFull
      await supabase.from('matches').update({ game_state: gameState }).eq('id', matchId)
    }
  }

  let _pvpEnded = false

  // ── Écran de fin (victoire / défaite / forfait) ──
  function showPvpEndScreen(row) {
    try { supabase.removeChannel(channel) } catch {}
    const myId = state.profile.id
    const iWon = row.winner_id === myId
    const byForfeit = !!row.forfeit
    const myFinal = gameState[myRole + 'Score'] ?? 0
    const oppFinal = gameState[oppRole + 'Score'] ?? 0
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center'
    overlay.innerHTML = `
      <div style="font-size:64px">${iWon ? '🏆' : '😞'}</div>
      <div style="font-size:26px;font-weight:900;color:${iWon ? '#FFD700' : '#ff6b6b'}">${iWon ? 'VICTOIRE !' : 'DÉFAITE'}</div>
      <div style="font-size:18px;color:#fff">${gameState[myRole+'Name']} ${myFinal} – ${oppFinal} ${gameState[oppRole+'Name']}</div>
      ${byForfeit ? `<div style="font-size:13px;color:rgba(255,255,255,0.5)">${iWon ? "L'adversaire a quitté la partie" : 'Match perdu par forfait'}</div>` : ''}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`
    document.body.appendChild(overlay)
    overlay.querySelector('#pvp-end-home')?.addEventListener('click', () => {
      overlay.remove()
      _showBottomNav(container)
      navigate('home')
    })
  }

  // ── Channel Realtime : écouter les changements du match ──
  const channel = supabase
    .channel('pvp-match-' + matchId)
    .on('postgres_changes', {
      event: 'UPDATE', schema: 'public', table: 'matches', filter: `id=eq.${matchId}`
    }, (payload) => {
      const row = payload.new
      try {
        // Fin de match (forfait ou terminé) : afficher le résultat une seule fois
        if (row.status === 'finished' || row.forfeit) {
          if (_pvpEnded) return
          _pvpEnded = true
          if (gameState._timerInt) { clearInterval(gameState._timerInt); gameState._timerInt = null }
          if (row.game_state) gameState = row.game_state
          showPvpEndScreen(row)
          return
        }
        if (row.game_state) {
          gameState = row.game_state
          renderPvpScreen()
        }
      } catch (e) {
        console.error('[PvP] Realtime render crash:', e, 'gameState:', gameState)
      }
    })
    .subscribe()

  // ── Écrire le nouvel état en DB (déclenche le re-render chez les 2) ──
  async function pushState(partial) {
    Object.assign(gameState, partial)
    gameState.lastActionAt = new Date().toISOString()
    const { error } = await supabase.from('matches').update({ game_state: gameState }).eq('id', matchId)
    if (error) {
      console.error('[PvP] pushState DB error:', error.message, error)
      toast('Erreur de synchronisation : ' + error.message, 'error')
    }
    try {
      renderPvpScreen()
    } catch (e) {
      console.error('[PvP] renderPvpScreen crash après pushState:', e)
      toast('Erreur d\'affichage : ' + e.message, 'error')
    }
  }

  // ── Quitter proprement (forfait) ──────────────────────────
  async function forfeitMatch() {
    if (_pvpEnded) return
    _pvpEnded = true
    // Nettoyer le timer pour éviter tout re-render fantôme
    if (gameState._timerInt) { clearInterval(gameState._timerInt); gameState._timerInt = null }
    const winnerId = amIHome ? match.away_id : match.home_id
    try {
      await supabase.from('matches').update({
        status: 'finished', forfeit: true, winner_id: winnerId
      }).eq('id', matchId)
    } catch (e) { console.warn('[PvP] forfeit DB error:', e) }
    try { supabase.removeChannel(channel) } catch {}
    _showBottomNav(container)
    navigate('home')
  }

  // ── Rendu principal ────────────────────────────────────
  function renderPvpScreen() {
    const myTeam  = gameState[myRole + 'Team']
    const oppTeam = gameState[oppRole + 'Team']
    const myScore = gameState[myRole + 'Score']
    const oppScore= gameState[oppRole + 'Score']
    const myName  = gameState[myRole + 'Name']
    const oppName = gameState[oppRole + 'Name']

    if (gameState.phase === 'gc-select') {
      return renderPvpGCSelect()
    }
    if (gameState.phase === 'reveal') {
      return renderPvpReveal()
    }
    if (gameState.phase === 'midfield') {
      return renderPvpMidfield()
    }
    if (gameState.phase === 'finished') {
      return renderPvpResult()
    }

    const isMyAttack  = gameState.phase === myRole + '-attack'
    const isMyDefense = gameState.phase === myRole + '-defense'
    const isOppTurn   = gameState.phase === oppRole + '-attack' || gameState.phase === oppRole + '-defense'
    const mySelected  = Array.isArray(gameState['selected_' + myRole]) ? gameState['selected_' + myRole] : []
    const selectedIds = mySelected.map(s => s.cardId)

    container.style.overflow = 'hidden'
    container.style.height = '100%'
    container.style.display = 'flex'
    container.style.flexDirection = 'column'

    const _pc = window.innerWidth >= 700
    const mySubs = gameState[myRole + 'Subs'] || []
    const usedSubIds = (gameState['usedSubIds_' + myRole]) || []
    const availSubs = mySubs.filter(s => !usedSubIds.includes(s.cardId))
    const myGcCardsFull = gameState['gcCardsFull_' + myRole] || []  // [{id, gc_type, _gcDef}]
    const myUsedGc = gameState['usedGc_' + myRole] || []
    const activeGCs = myGcCardsFull.filter(gc => !myUsedGc.includes(gc.id))
    const boostAvail = gameState.boostOwner === myRole && !gameState.boostUsed

    // ─── Design Collection pour les cartes GC (identique vs IA) ───
    const gcCardDesignPvp = (gc, w, h) => {
      const def    = gc._gcDef
      const bg     = ({purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'})[def?.color] || 'linear-gradient(160deg,#4a0a8a,#7a28b8)'
      const bord   = ({purple:'#b06ce0',light_blue:'#00d4ef'})[def?.color] || '#b06ce0'
      const name   = def?.name || gc.gc_type
      const effect = def?.effect || GC_DEFS[gc.gc_type]?.desc || ''
      const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
      const icon   = GC_DEFS[gc.gc_type]?.icon || '⚡'
      const nameH  = Math.round(h * 0.22), effH = Math.round(h * 0.22), imgH = h - nameH - effH
      const fs     = name.length > 12 ? 7 : 9
      return `<div class="pvp-gc-mini" data-gc-id="${gc.id}" data-gc-type="${gc.gc_type}"
        style="width:${w}px;height:${h}px;border-radius:10px;border:2px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${nameH}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${fs}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${w-6}px">${name}</span>
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

    const boostCardHTML = (w, h) => `<div id="pvp-boost-card" style="width:${w}px;height:${h}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${_pc?22:18}px">⚡</div>
      <div style="font-size:${_pc?11:9}px;color:#000;font-weight:900">+${gameState.boostValue}</div>
    </div>`

    const subsHTML = `<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_pc?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${availSubs.length===0
        ? `<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>`
        : availSubs.map(s=>`<div class="pvp-sub-btn" data-sub-id="${s.cardId}" style="cursor:pointer;flex-shrink:0">${renderMiniCardHTML(s,_pc?60:44,_pc?78:58)}</div>`).join('')}
    </div>`

    const terrainHTML = `<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${renderTeam(myTeam, gameState[myRole+'Formation'], isMyAttack?'attack':isMyDefense?'defense':'idle', selectedIds, 300, 300)}
      </div>
    </div>`

    const btnStyle = _pc
      ? 'padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%'
      : 'padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%'

    const actionBtn = isMyAttack
      ? `<button id="pvp-action" style="${btnStyle};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${mySelected.length===0?'disabled':''}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`
      : isMyDefense
      ? `<button id="pvp-action" style="${btnStyle};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${mySelected.length===0?'disabled':''}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`
      : `<div style="${btnStyle};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${oppName}</div>`
    const counter = (isMyAttack||isMyDefense) ? `<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${mySelected.length}/3 sélectionné(s)</div>` : ''

    // Zone actions : montre l'attaque adverse en cours (quand je défends) ou ma dernière action
    const actionZone = (() => {
      const pa = gameState.pendingAttack
      if (isMyDefense && pa && Array.isArray(pa.players)) {
        return `<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${oppName} ATTAQUE — Défendez !</div>
          ${renderCardRow(pa.players.map(p=>({...p,used:false})), '#ff6b6b', pa.total)}
        </div>`
      }
      const log = Array.isArray(gameState.log) ? gameState.log : []
      const last = log[log.length-1]
      if (!last) return '<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'
      const accent = last.type === 'goal' ? '#FFD700' : last.type === 'stop' ? '#00ff88' : last.type === 'attack' ? '#ff6b6b' : 'rgba(255,255,255,0.6)'
      return `<div style="padding:7px 10px;border-left:3px solid ${accent};font-size:12px;color:#fff">${last.text || ''}</div>`
    })()

    const histLen = (Array.isArray(gameState.log) ? gameState.log : []).length

    const headerHTML = `
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${myName} <span style="color:#FFD700;font-size:18px">${myScore}</span> – <span style="color:#FFD700;font-size:18px">${oppScore}</span> ${oppName}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${isOppTurn?'rgba(255,255,255,0.4)':'#FFD700'};font-weight:700;flex-shrink:0">
        ${isOppTurn ? `⏳ Tour de ${oppName}` : isMyAttack ? '⚔️ À vous d\'attaquer !' : isMyDefense ? '🛡️ À vous de défendre !' : ''}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${actionZone}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${histLen})
      </button>`

    if (_pc) {
      container.innerHTML = `
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${headerHTML}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${subsHTML}
          ${terrainHTML}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${actionBtn}${counter}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${boostAvail ? boostCardHTML(110,90) : ''}
            ${activeGCs.map(gc=>gcCardDesignPvp(gc,110,150)).join('')}
          </div>
        </div>
      </div>`
    } else {
      container.innerHTML = `
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${headerHTML}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${subsHTML}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden"></div>
          </div>
        </div>
        <!-- ZONE BAS : cartes GC en ligne + bouton pleine largeur (comme vs IA) -->
        <div style="flex-shrink:0;background:rgba(0,0,0,0.35);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${activeGCs.map(gc=>gcCardDesignPvp(gc,68,95)).join('')}
            ${boostAvail ? boostCardHTML(68,95) : ''}
          </div>
          <div>${actionBtn}${counter}</div>
        </div>
      </div>`
      // Le terrain est rendu hors du flux flex (sinon il prend toute la hauteur) :
      // on injecte le SVG dans .terrain-wrapper après coup
      const tw = container.querySelector('.terrain-wrapper')
      if (tw) tw.innerHTML = renderTeam(myTeam, gameState[myRole+'Formation'], isMyAttack?'attack':isMyDefense?'defense':'idle', selectedIds, 300, 300)
    }

    // Sélection de joueurs (clic sur le terrain)
    container.querySelectorAll('.match-slot-hit').forEach(el => {
      el.addEventListener('click', () => {
        if (!isMyAttack && !isMyDefense) return
        const cardId = el.dataset.cardId
        const role   = el.dataset.role
        const p = (myTeam[role]||[]).find(pp => pp.cardId === cardId)
        if (!p || p.used) return
        if (!Array.isArray(gameState['selected_' + myRole])) gameState['selected_' + myRole] = []
        const arr = gameState['selected_' + myRole]
        const idx = arr.findIndex(s => s.cardId === cardId)
        if (idx > -1) arr.splice(idx, 1)
        else if (arr.length < 3) arr.push({ ...p, _role: role })
        renderPvpScreen()
      })
    })

    container.querySelector('#pvp-boost-card')?.addEventListener('click', () => {
      pvpOpenBoostPicker()
    })

    container.querySelectorAll('.pvp-gc-mini').forEach(el => {
      el.addEventListener('click', () => {
        pvpOpenGCDetail(el.dataset.gcId, el.dataset.gcType)
      })
    })

    container.querySelector('#pvp-action')?.addEventListener('click', () => {
      if (isMyAttack) pvpConfirmAttack()
      else if (isMyDefense) pvpConfirmDefense()
    })
    container.querySelector('#pvp-quit')?.addEventListener('click', () => {
      if (confirm('Quitter le match ? Vous perdrez par forfait.')) forfeitMatch()
    })
    container.querySelector('#pvp-view-opp')?.addEventListener('click', () => {
      pvpShowOpponentTeam()
    })

    container.querySelector('#pvp-toggle-history')?.addEventListener('click', () => {
      pvpShowHistory()
    })

    // Contraindre le match-screen + SVG terrain (identique vs IA)
    ;(function fixSVGPvp() {
      const svg = container.querySelector('.terrain-wrapper svg')
      if (svg) {
        svg.removeAttribute('width'); svg.removeAttribute('height')
        svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
        svg.setAttribute('viewBox', '-26 -26 352 352')
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
      }
      const ms = container.querySelector('.match-screen')
      if (ms) {
        const h = container.clientHeight
        if (h > 50) { ms.style.height = h + 'px'; ms.style.maxHeight = h + 'px'; ms.style.overflow = 'hidden' }
      }
    })()

    // Timer (30s→15s) uniquement si c'est mon tour
    if (gameState._timerInt) { clearInterval(gameState._timerInt); gameState._timerInt = null }
    if ((isMyAttack || isMyDefense) && !_pvpEnded) {
      // Cycle identique vs IA : 30s puis 15s (rouge) puis forfait
      let remaining = 30, phase2 = false
      const timerEl = () => document.getElementById('pvp-timer')
      const paint = () => { if (timerEl()) { timerEl().textContent = remaining+'s'; timerEl().style.color = phase2 ? '#ff4444' : '#fff' } }
      paint()
      gameState._timerInt = setInterval(() => {
        remaining--
        if (remaining < 0) {
          if (!phase2) { phase2 = true; remaining = 15; paint() }
          else {
            clearInterval(gameState._timerInt); gameState._timerInt = null
            forfeitMatch()
          }
        } else paint()
      }, 1000)
    }
  }

  // ── Sélection des Game Changers avant match (PvP) — design vs IA ──
  function renderPvpGCSelect() {
    const myReady  = gameState['gcReady_' + myRole]
    const oppReady = gameState['gcReady_' + oppRole]
    if (!Array.isArray(gameState['gc_' + myRole])) gameState['gc_' + myRole] = []
    let chosen = gameState['gc_' + myRole]
    const MAX = 3

    function gcCardHTML(card, selected) {
      const def  = card._gcDef
      const BG   = { purple:'linear-gradient(135deg,#3d0a7a,#7a28b8)', light_blue:'linear-gradient(135deg,#006080,#00bcd4)' }
      const BORD = { purple:'#9b59b6', light_blue:'#00bcd4' }
      const bg   = BG[def?.color]   || BG.purple
      const bord = BORD[def?.color] || BORD.purple
      return `<div class="pvp-gc-card" data-id="${card.id}"
        style="width:100px;border-radius:10px;border:3px solid ${selected?'#FFD700':bord};background:${bg};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${selected?'0 0 18px #FFD700':'0 2px 8px rgba(0,0,0,0.4)'};
          transform:${selected?'scale(1.06)':'scale(1)'};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${(def?.name||card.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${def?.name||card.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${def?.image_url ? `<img src="${import.meta.env.BASE_URL}icons/${def.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">` : `<span style="font-size:32px">⚡</span>`}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${(def?.effect||'').slice(0,50)}</span>
        </div>
        ${selected ? '<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>' : ''}
      </div>`
    }

    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${MAX}</b> cartes · ${chosen.length}/${MAX}
        </div>
      </div>
      ${myReady ? `
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${oppReady ? 'Adversaire aussi.' : `En attente de ${gameState[oppRole+'Name']}...`}</div>
      </div>` : `
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${chosen.length ? `⚡ Valider (${chosen.length} GC)` : '▶ Continuer sans GC'}
        </button>
      </div>`}
    </div>`

    if (myReady) return

    const myUserId = myRole==='p1' ? match.home_id : match.away_id
    supabase.from('cards').select('id,gc_type').eq('owner_id', myUserId).eq('card_type','game_changer')
      .then(async ({ data: myGcCards }) => {
        const { data: gcDefs } = await supabase.from('gc_definitions').select('*').eq('is_active', true)
        const seen = new Set()
        const distinct = (myGcCards||[]).filter(cd => { if (seen.has(cd.gc_type)) return false; seen.add(cd.gc_type); return true })
          .map(cd => ({ ...cd, _gcDef: gcDefs?.find(d => d.name === cd.gc_type) || null }))
        const grid = document.getElementById('pvp-gc-grid')
        if (!grid) return
        if (!distinct.length) {
          grid.innerHTML = '<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>'
          return
        }
        grid.innerHTML = distinct.map(cd => gcCardHTML(cd, chosen.includes(cd.id))).join('')
        grid.querySelectorAll('.pvp-gc-card').forEach(el => {
          el.addEventListener('click', () => {
            const id = el.dataset.id
            const idx = chosen.indexOf(id)
            if (idx > -1) chosen.splice(idx, 1)
            else if (chosen.length < MAX) chosen.push(id)
            renderPvpScreen()
          })
        })
      })

    container.querySelector('#pvp-gc-validate')?.addEventListener('click', async () => {
      // Charger les définitions complètes des cartes choisies, pour les avoir
      // disponibles dans gameState pendant tout le match (design Collection)
      const myUserId2 = myRole==='p1' ? match.home_id : match.away_id
      const { data: myCardsFull } = await supabase.from('cards').select('id,gc_type').eq('owner_id', myUserId2).eq('card_type','game_changer').in('id', chosen)
      const { data: gcDefsFull } = await supabase.from('gc_definitions').select('*').eq('is_active', true)
      const enriched = (myCardsFull||[]).map(c => ({ ...c, _gcDef: gcDefsFull?.find(d => d.name === c.gc_type) || null }))

      await pushState({ ['gcReady_' + myRole]: true, ['gcCardsFull_' + myRole]: enriched })
      if (gameState['gcReady_' + oppRole]) {
        await pushState({ phase: 'reveal' })
      }
    })
  }

  // ── Reveal équipe adverse (5s), identique au design vs IA ──
  function renderPvpReveal() {
    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${gameState[oppRole+'Name']}</div>
      <div style="width:min(90vw,420px)">${buildTeamSVG(gameState[oppRole+'Team'], gameState[oppRole+'Formation'], null, [], 300, 300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`

    // Seul p1 déclenche la transition (évite double-écriture)
    if (myRole === 'p1') {
      setTimeout(async () => { await pushState({ phase: 'midfield' }) }, 5000)
    }
  }

    // ── Duel milieu (calculé localement par p1, écrit en DB) ──
  function renderPvpMidfield() {
    const myMils  = gameState[myRole + 'Team'].MIL || []
    const oppMils = gameState[oppRole + 'Team'].MIL || []

    function milScore(mils) { return mils.reduce((s,p) => s + getNoteForRole(p,'MIL'), 0) }
    function milLinks(mils) {
      let bonus = 0
      for (let i = 0; i < mils.length-1; i++) {
        const c = linkColor(mils[i], mils[i+1])
        if (c === '#00ff88') bonus += 2
        else if (c === '#FFD700') bonus += 1
      }
      return bonus
    }

    const myTotal  = milScore(myMils)  + milLinks(myMils)
    const oppTotal = milScore(oppMils) + milLinks(oppMils)
    const myWins   = myTotal >= oppTotal

    function renderMilRow(mils, label, color) {
      return `<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${label}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${mils.map((p, i) => {
            const portrait = getPortrait(p)
            const lc = i < mils.length-1 ? linkColor(p, mils[i+1]) : null
            const hasLink = lc && lc !== '#ff3333' && lc !== '#cc2222'
            return `
            <div style="width:52px;height:52px;border-radius:8px;background:${color};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${portrait?`<img src="${portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:''}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${getNoteForRole(p,'MIL')}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${p.name}</div>
            </div>
            ${lc ? `<div style="width:14px;height:4px;border-radius:2px;background:${lc};flex-shrink:0;opacity:${hasLink?0.9:0.3}"></div>` : ''}
            `
          }).join('')}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${milScore(mils)} + ${milLinks(mils)} liens = <b style="color:#fff">${milScore(mils)+milLinks(mils)}</b>
        </div>
      </div>`
    }

    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${renderMilRow(myMils, gameState[myRole+'Name'], '#D4A017')}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${myTotal}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${oppTotal}</div>
      </div>

      ${renderMilRow(oppMils, gameState[oppRole+'Name'], '#bb2020')}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`

    setTimeout(() => {
      const elMe  = document.getElementById('pvp-score-me')
      const elOpp = document.getElementById('pvp-score-opp')
      const elRes = document.getElementById('pvp-midfield-result')
      if (elMe && elOpp) {
        if (myWins) { elMe.style.fontSize='80px'; elMe.style.color='#FFD700'; elOpp.style.opacity='0.25' }
        else { elOpp.style.fontSize='80px'; elOpp.style.color='#ff6b6b'; elMe.style.opacity='0.25' }
      }
      // Carte boost : calculée localement par chacun à partir de la même seed déterministe
      // (pour que les 2 joueurs affichent exactement la même valeur sans dépendre du Realtime)
      const p1Mils0 = gameState.p1Team.MIL || []
      const p2Mils0 = gameState.p2Team.MIL || []
      const p1Total0 = milScore(p1Mils0) + milLinks(p1Mils0)
      const p2Total0 = milScore(p2Mils0) + milLinks(p2Mils0)
      const winnerRole0 = p1Total0 >= p2Total0 ? 'p1' : 'p2'
      const winnerName0 = gameState[winnerRole0 + 'Name']

      // Tirer la valeur du boost MAINTENANT (p1 fait foi), pour l'afficher tout de suite.
      // Si elle existe déjà dans le state (echo realtime), on la réutilise.
      let boostValueNow = gameState.boostValue
      if (boostValueNow == null) {
        boostValueNow = rollBoost()
        gameState.boostValue = boostValueNow
        gameState.boostOwner = winnerRole0
        gameState.boostUsed = false
      }

      if (elRes) {
        elRes.style.opacity = '1'
        elRes.innerHTML = `<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${myWins ? `${gameState[myRole+'Name']} gagne le milieu de terrain et attaque !` : `${gameState[oppRole+'Name']} gagne l'engagement et attaque !`}
        </div>
        ${myWins ? `
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${boostValueNow}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>` : ''}`
      }

      // Transition de phase — seul p1 écrit en DB (avec la valeur boost déjà tirée)
      setTimeout(async () => {
        if (myRole !== 'p1') return
        const attacker = winnerRole0
        await pushState({
          phase: attacker + '-attack', attacker, round: 1,
          boostValue: gameState.boostValue, boostUsed: false, boostOwner: attacker,
        })
      }, 1800)
    }, 600)

    // Afficher la vraie valeur du boost dès qu'elle est connue (via le state, après transition)
    // → géré par renderPvpScreen au prochain rendu (boostValue affiché dans la zone GC)
  }

  // ── Écran résultat final ───────────────────────────────
  // ── Picker pour appliquer la carte boost ───────────────────
  function pvpOpenBoostPicker() {
    const myTeamNow = gameState[myRole + 'Team']
    const pool = Object.entries(myTeamNow).flatMap(([role, players]) =>
      (players||[]).filter(p=>!p.used).map(p=>({...p,_line:role})))
    if (!pool.length) return

    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden'
    overlay.innerHTML = `
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${gameState.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${pool.map(p => {
          const bg = ({GK:'#111',DEF:'#bb2020',MIL:'#D4A017',ATT:'#1A6B3C'})[p._line]||'#555'
          const note = getNoteForRole(p, p._line) + (p.boost||0)
          return `<div class="boost-pick-item" data-cid="${p.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${bg};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||'?'}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${note}</div>
          </div>`
        }).join('')}
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#boost-picker-close')?.addEventListener('click', () => overlay.remove())
    overlay.querySelectorAll('.boost-pick-item').forEach(el => {
      el.addEventListener('click', async () => {
        const cid = el.dataset.cid
        const p = pool.find(x => x.cardId === cid)
        if (!p) return
        const team = gameState[myRole + 'Team']
        const target = (team[p._line]||[]).find(pp => pp.cardId === cid)
        if (target) target.boost = (target.boost||0) + gameState.boostValue
        overlay.remove()
        await pushState({ [myRole+'Team']: team, boostUsed: true })
      })
    })
  }

  // ── Détail carte GC (design Collection) + utilisation basique ──
  // ── Historique du match (popup) ──
  function pvpShowHistory() {
    const log = Array.isArray(gameState.log) ? gameState.log : []
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column'
    overlay.innerHTML = `
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${log.length === 0
          ? `<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`
          : [...log].reverse().map(e => {
              const accent = e.type === 'goal' ? '#FFD700' : e.type === 'defense' ? '#00ff88' : 'rgba(255,255,255,0.5)'
              return `<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${accent}">
                <div style="font-size:12px;color:#fff">${e.text || ''}</div>
              </div>`
            }).join('')}
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#pvp-hist-close')?.addEventListener('click', () => overlay.remove())
  }

  // ── Voir l'équipe adverse (popup, design identique à showAITeam) ──
  function pvpShowOpponentTeam() {
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto'
    overlay.innerHTML = `
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${gameState[oppRole+'Name']}</div>
      <div style="width:min(90vw,420px)">${buildTeamSVG(gameState[oppRole+'Team'], gameState[oppRole+'Formation'], null, [], 300, 300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`
    document.body.appendChild(overlay)
    overlay.querySelector('#pvp-view-opp-close')?.addEventListener('click', () => overlay.remove())
  }

  function pvpOpenGCDetail(gcId, gcType) {
    const myGcCardsFull = gameState['gcCardsFull_' + myRole] || []
    const card = myGcCardsFull.find(c => c.id === gcId)
    const dbDef = card?._gcDef
    const legDef = GC_DEFS[gcType] || { icon:'⚡', desc:'Carte spéciale.' }
    const bg     = ({purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'})[dbDef?.color] || 'linear-gradient(160deg,#4a0a8a,#7a28b8)'
    const bord   = ({purple:'#b06ce0',light_blue:'#00d4ef'})[dbDef?.color] || '#b06ce0'
    const name   = dbDef?.name || gcType
    const effect = dbDef?.effect || legDef.desc
    const imgUrl = dbDef?.image_url ? `${import.meta.env.BASE_URL}icons/${dbDef.image_url}` : null
    const icon   = legDef.icon || '⚡'
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px'
    overlay.innerHTML = `
      <div style="width:190px;border-radius:16px;border:3px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${bord}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${name.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${name}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${imgUrl ? `<img src="${imgUrl}" style="max-width:150px;max-height:150px;object-fit:contain">` : `<span style="font-size:72px">${icon}</span>`}
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
    overlay.querySelector('#pvp-gc-back')?.addEventListener('click', () => overlay.remove())
    overlay.querySelector('#pvp-gc-use')?.addEventListener('click', async () => {
      overlay.remove()
      const used = gameState['usedGc_' + myRole] || []
      used.push(gcId)
      await pushState({ ['usedGc_' + myRole]: used })
    })
  }

  function renderPvpResult() {
    const myScore = gameState[myRole+'Score'], oppScore = gameState[oppRole+'Score']
    const won = myScore > oppScore
    const draw = myScore === oppScore
    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${won?'🏆':draw?'🤝':'😤'}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${won?'Victoire !':draw?'Match nul':'Défaite'}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${myScore} - ${oppScore}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`
    document.getElementById('pvp-home')?.addEventListener('click', () => {
      supabase.removeChannel(channel)
      _showBottomNav(container)
      navigate('home')
    })
  }

  // ── Action : confirmer attaque ──────────────────────────
  async function pvpConfirmAttack() {
    const selected = (gameState['selected_'+myRole]||[]).map(s=>({...s,_line:s._role}))
    if (!selected.length) return
    const calc = calcAttack(selected, gameState.modifiers[myRole]||{})
    selected.forEach(sel => {
      const p = (gameState[myRole+'Team'][sel._role]||[]).find(pp=>pp.cardId===sel.cardId)
      if (p) p.used = true
    })
    const log = Array.isArray(gameState.log) ? gameState.log : []
    log.push({
      type: 'attack',
      text: `⚔️ ${gameState[myRole+'Name']} attaque (${calc.total})`,
      players: selected, total: calc.total, side: myRole,
    })
    await pushState({
      pendingAttack: { ...calc, players: selected, side: myRole },
      ['selected_'+myRole]: [],
      modifiers: { ...gameState.modifiers, [myRole]: {} },
      phase: oppRole + '-defense',
      log,
    })
  }

  // ── Action : confirmer défense ──────────────────────────
  async function pvpConfirmDefense() {
    const selected = (gameState['selected_'+myRole]||[]).map(s=>({...s,_line:s._role}))
    const calc = calcDefense(selected, gameState.modifiers[myRole]||{})
    selected.forEach(sel => {
      const p = (gameState[myRole+'Team'][sel._role]||[]).find(pp=>pp.cardId===sel.cardId)
      if (p) p.used = true
    })
    const result = resolveDuel(gameState.pendingAttack.total, calc.total, gameState.modifiers[myRole]||{})
    const attackerRole = gameState.pendingAttack.side
    const goal = result === 'attack'
    const newAttackerScore = gameState[attackerRole+'Score'] + (goal?1:0)

    // Round suivant : l'autre équipe attaque (alternance simple)
    const nextAttacker = attackerRole === 'p1' ? 'p2' : 'p1'
    const round = (gameState.round||0) + 1
    const isFinished = round > 10  // 10 rounds par match (ajustable)

    const log = Array.isArray(gameState.log) ? gameState.log : []
    log.push({
      type: 'defense',
      text: `🛡️ ${gameState[myRole+'Name']} défend (${calc.total})`,
      players: selected, total: calc.total, side: myRole,
    })
    log.push({
      type: goal ? 'goal' : 'stop',
      text: goal
        ? `⚽ BUT de ${gameState[attackerRole+'Name']} ! (${gameState.pendingAttack.total} vs ${calc.total})`
        : `✋ Attaque stoppée (${gameState.pendingAttack.total} vs ${calc.total})`,
    })

    await pushState({
      [attackerRole+'Score']: newAttackerScore,
      ['selected_'+myRole]: [],
      modifiers: { ...gameState.modifiers, [myRole]: {} },
      pendingAttack: null,
      phase: isFinished ? 'finished' : nextAttacker + '-attack',
      attacker: nextAttacker,
      round,
      log,
    })

    if (isFinished) {
      await supabase.from('matches').update({ status: 'finished' }).eq('id', matchId)
    }
  }

  renderPvpScreen()
}

export async function renderMatch(container, ctx) {
  const { state, navigate, toast } = ctx
  _hideBottomNav(container)
  const params = state.params || {}
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const matchMode  = params.matchMode || 'vs_ai_easy'
  const difficulty = matchMode.replace('vs_ai_','')
  const mode       = matchMode

  if (!params.deckId) {
    return renderDeckSelect(container, ctx, matchMode)
  }

  const deckId = params.deckId

  // Charger formation depuis decks table EN PRIORITÉ
  const [{ data: deckMeta }, { data: deckCards }] = await Promise.all([
    supabase.from('decks').select('formation,name').eq('id', deckId).single(),
    supabase.from('deck_cards')
      .select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`)
      .eq('deck_id', deckId).order('slot_order')
  ])

  const starters = (deckCards||[]).filter(dc => dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))
  const subsRaw  = (deckCards||[]).filter(dc => !dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))

  if (starters.length < 11) {
    showMsg(container, '⚠️', `Deck incomplet (${starters.length}/11).`, 'Compléter', () => navigate('decks'))
    return
  }

  // Formation : priorité decks.formation, puis formation card, puis défaut
  const formationCard = (deckCards||[]).find(dc => dc.card?.card_type === 'formation')
  const formation = deckMeta?.formation || formationCard?.card?.formation || '4-4-2'

  // Charger toutes les cartes GC disponibles
  const { data: allGCCards } = await supabase
    .from('cards')
    .select('id, gc_type, gc_definition_id')
    .eq('owner_id', state.profile.id)
    .eq('card_type', 'game_changer')

  const { data: gcDefs } = await supabase.from('gc_definitions').select('*').eq('is_active', true)

  // Enrichir les cartes GC avec leur définition
  const gcCardsEnriched = (allGCCards||[]).map(card => ({
    ...card,
    _gcDef: gcDefs?.find(d => d.name === card.gc_type || d.id === card.gc_definition_id) || null,
  }))

  // ── MODE RANDOM : sélection GC AVANT le matchmaking (comme vs IA) ──
  if (matchMode === 'random') {
    const startRandom = (selectedGC) => {
      // selectedGC = cartes enrichies choisies (avec _gcDef)
      showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, selectedGC, gcDefs || [])
    }
    if (!gcCardsEnriched.length) { startRandom([]); return }
    showGCSelection(container, gcCardsEnriched, startRandom)
    return
  }

  const homeTeam = buildTeam(starters, formation)
  const aiTeam   = await generateAITeam(formation, difficulty)

  // ── Sélection des GC avant match ──────────────────────────
  const launchMatch = async (selectedGC) => {
    const { data: match } = await supabase.from('matches').insert({
      home_id: state.profile.id, away_id:null, mode,
      home_deck_id: deckId, status:'in_progress',
    }).select().single()

    const game = {
      gcDefs:   gcDefs || [],
      matchId:  match?.id, mode, difficulty, formation,
      homeTeam, aiTeam,
      homeSubs: subsRaw,
      subsUsed: 0, maxSubs: Math.min(subsRaw.length, 3),
      homeScore:0, aiScore:0,
      gcCards:  selectedGC,   // seulement les 3 sélectionnées
      usedGc:   [],
      boostCard: null, boostUsed: false,
      phase:'midfield', attacker:null, round:0,
      selected:[], pendingAttack:null,
      log:[], modifiers:{ home:{}, ai:{} },
      clubName: state.profile.club_name || 'Vous',
    }
    showOpponentReveal(container, game, ctx)
  }

  // Si pas de GC disponibles → lancer directement
  if (!gcCardsEnriched.length) { launchMatch([]); return }

  // Sinon → écran de sélection GC
  showGCSelection(container, gcCardsEnriched, launchMatch)
}

// ── Écran de sélection des Game Changers ──────────────────
function showGCSelection(container, gcCards, onConfirm) {
  const MAX = 3

  // ── Distinct par gc_type : une seule carte par type ──────
  const seen = new Set()
  const distinctCards = gcCards.filter(card => {
    const key = card.gc_type || card.id
    if (seen.has(key)) return false
    seen.add(key); return true
  })

  let chosen = []

  function gcCardHTML(card, selected) {
    const def  = card._gcDef
    const BG   = { purple:'linear-gradient(135deg,#3d0a7a,#7a28b8)', light_blue:'linear-gradient(135deg,#006080,#00bcd4)' }
    const BORD = { purple:'#9b59b6', light_blue:'#00bcd4' }
    const bg   = BG[def?.color]   || BG.purple
    const bord = BORD[def?.color] || BORD.purple
    return `<div class="gc-select-card" data-id="${card.id}"
      style="width:100px;border-radius:10px;border:3px solid ${selected?'#FFD700':bord};background:${bg};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${selected?'0 0 18px #FFD700':'0 2px 8px rgba(0,0,0,0.4)'};
        transform:${selected?'scale(1.06)':'scale(1)'};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${(def?.name||card.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${def?.name||card.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${def?.image_url ? `<img src="${import.meta.env.BASE_URL}icons/${def.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">` : `<span style="font-size:32px">⚡</span>`}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${(def?.effect||'').slice(0,50)}</span>
      </div>
      ${selected ? '<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>' : ''}
    </div>`
  }

  function renderOverlay() {
    // Overlay centré avec les 3 boutons — apparaît quand MAX cartes sélectionnées
    const existing = container.querySelector('#gc-confirm-overlay')
    if (existing) existing.remove()
    if (chosen.length < MAX) return

    const ov = document.createElement('div')
    ov.id = 'gc-confirm-overlay'
    ov.style.cssText = 'position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)'
    ov.innerHTML = `
      <div style="font-size:28px">⚡</div>
      <div style="font-size:18px;font-weight:900;color:#FFD700;text-align:center">${MAX} cartes sélectionnées !</div>
      <button id="gc-launch" style="width:100%;max-width:320px;padding:16px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:16px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(122,40,184,0.5)">
        ⚡ Partir avec ces ${MAX} GC
      </button>
      <button id="gc-no-gc" style="width:100%;max-width:320px;padding:14px;border-radius:14px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        ▶ Partir sans GC
      </button>
      <button id="gc-reset" style="width:100%;max-width:320px;padding:14px;border-radius:14px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:#D4A017;font-size:14px;font-weight:700;cursor:pointer">
        🔄 Changer de GC
      </button>`

    const _gcDone = (cards) => {
      // Réinitialiser les styles imposés par showGCSelection
      container.style.overflow      = ''
      container.style.height        = ''
      container.style.display       = ''
      container.style.flexDirection = ''
      onConfirm(cards)
    }
    ov.querySelector('#gc-launch')?.addEventListener('click', () => _gcDone(chosen))
    ov.querySelector('#gc-no-gc')?.addEventListener('click', () => _gcDone([]))
    ov.querySelector('#gc-reset')?.addEventListener('click', () => { chosen = []; render() })

    const wrap = container.querySelector('#gc-screen-wrap')
    if (wrap) wrap.appendChild(ov)
    else container.appendChild(ov)
  }

  function render() {
    container.style.overflow = 'hidden'
    const _gcH = container.clientHeight || container.getBoundingClientRect().height
    if (_gcH > 50) container.style.height = _gcH + 'px'

    container.innerHTML = `
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${MAX}</b> cartes · ${chosen.length}/${MAX}
          ${chosen.length > 0 && chosen.length < MAX ? ` · encore ${MAX - chosen.length}` : ''}
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${distinctCards.map(card => {
          const sel = chosen.find(x => x.gc_type === card.gc_type)
          return gcCardHTML(card, !!sel)
        }).join('')}
      </div>
    </div>`

    // Events cartes
    container.querySelectorAll('.gc-select-card').forEach(el => {
      el.addEventListener('click', () => {
        const cardId = el.dataset.id
        const card   = distinctCards.find(c => c.id === cardId)
        if (!card) return
        const idx = chosen.findIndex(x => x.gc_type === card.gc_type)
        if (idx > -1) { chosen.splice(idx, 1) }
        else if (chosen.length < MAX) { chosen.push(card) }
        render()
        if (chosen.length === MAX) renderOverlay()
      })
    })

    if (chosen.length === MAX) renderOverlay()
  }

  render()
}

// ── SÉLECTION DU DECK (refonte) ───────────────────────────
async function renderDeckSelect(container, ctx, matchMode) {
  const { state, navigate } = ctx
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: decks } = await supabase
    .from('decks').select('id,name,is_active,formation')
    .eq('owner_id', state.profile.id).order('created_at', { ascending:false })

  if (!decks || decks.length === 0) {
    showMsg(container, '📋', 'Aucun deck. Crée un deck avant de jouer !', 'Créer un deck', () => navigate('decks'))
    return
  }

  const deckIds = decks.map(d => d.id)
  const { data: allDeckCards } = await supabase
    .from('deck_cards')
    .select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`)
    .in('deck_id', deckIds)
    .order('slot_order')

  let currentIdx = 0

  function renderPreview() {
    const deck = decks[currentIdx]
    const cards = (allDeckCards||[]).filter(dc => dc.deck_id === deck.id)
    const starters = cards.filter(dc => dc.is_starter && dc.card?.player).map(dc => playerFromCard(dc.card, dc.position))
    const formationCard = cards.find(dc => dc.card?.card_type === 'formation')
    const formation = deck.formation || formationCard?.card?.formation || '4-4-2'
    const team = starters.length >= 11 ? buildTeam(starters, formation) : null
    const complete = starters.length >= 11

    _hideBottomNav(container)
    container.style.height = '100%'
    container.style.overflow = 'hidden'
    container.innerHTML = `
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${matchMode.replace('vs_ai_','').toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${currentIdx===0?'0.05':'0.15'});border:2px solid rgba(255,255,255,${currentIdx===0?'0.1':'0.3'});color:${currentIdx===0?'rgba(255,255,255,0.2)':'#fff'};font-size:20px;cursor:${currentIdx===0?'default':'pointer'};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${deck.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${formation} · ${starters.length}/11 ${deck.is_active?'· ⭐ Actif':''}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${currentIdx===decks.length-1?'0.05':'0.15'});border:2px solid rgba(255,255,255,${currentIdx===decks.length-1?'0.1':'0.3'});color:${currentIdx===decks.length-1?'rgba(255,255,255,0.2)':'#fff'};font-size:20px;cursor:${currentIdx===decks.length-1?'default':'pointer'};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${team
          ? `<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${renderTeam(team, formation, null, [], 285, 285)}</div>`
          : `<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${starters.length}/11)</div>
             </div>`
        }
      </div>

      <!-- Indicateurs pagination -->
      ${decks.length > 1 ? `
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${decks.map((_,i)=>`<div style="width:7px;height:7px;border-radius:50%;background:${i===currentIdx?'#FFD700':'rgba(255,255,255,0.25)'}"></div>`).join('')}
      </div>` : ''}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${complete?'#1A6B3C':'rgba(255,255,255,0.08)'};
          color:${complete?'#fff':'rgba(255,255,255,0.3)'};font-size:16px;font-weight:900;cursor:${complete?'pointer':'default'}">
          ${complete?'✅ Valider ce deck':'⚠️ Deck incomplet'}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`

    // Retirer le cap max-width:440px du SVG pour qu'il remplisse le wrapper
    ;(function fixDeckSVG() {
      const svg = container.querySelector('.deck-preview-wrap svg')
      if (!svg) return
      svg.removeAttribute('width'); svg.removeAttribute('height')
      svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    })()

    document.getElementById('prev-deck')?.addEventListener('click', () => {
      if (currentIdx > 0) { currentIdx--; renderPreview() }
    })
    document.getElementById('next-deck')?.addEventListener('click', () => {
      if (currentIdx < decks.length-1) { currentIdx++; renderPreview() }
    })
    document.getElementById('validate-deck')?.addEventListener('click', () => {
      if (!complete) return
      ctx.navigate('match', { matchMode, deckId: deck.id })
    })
    document.getElementById('cancel-deck-select')?.addEventListener('click', () => { _showBottomNav(container); navigate('home') })

    // Swipe tactile gauche/droite
    const swipeZone = document.getElementById('deck-swipe-zone')
    if (swipeZone) {
      let touchStartX = 0
      let touchStartY = 0
      swipeZone.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
      }, { passive: true })
      swipeZone.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX
        const dy = e.changedTouches[0].clientY - touchStartY
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return // trop petit ou scroll vertical
        if (dx < 0 && currentIdx < decks.length - 1) { currentIdx++; renderPreview() }
        else if (dx > 0 && currentIdx > 0) { currentIdx--; renderPreview() }
      }, { passive: true })
    }
  }

  renderPreview()
}

// ── ANIMATION DUEL MILIEU ─────────────────────────────────
// ── POINT 6 : Reveal équipe adverse (5s) ─────────────────
function showOpponentReveal(container, game, ctx) {
  container.innerHTML = `
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${game.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${buildTeamSVG(game.aiTeam, game.formation, null, [], 300, 300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`
  setTimeout(() => showMidfieldAnimation(container, game, ctx), 5000)
}

// ── Midfield ─────────────────────────────────────────────
function showMidfieldAnimation(container, game, ctx) {
  const homeMils = game.homeTeam.MIL || []
  const aiMils   = game.aiTeam.MIL   || []

  function milScore(mils) {
    return mils.reduce((s,p) => s + getNoteForRole(p,'MIL'), 0)
  }
  function milLinks(mils) {
    let bonus = 0
    for (let i = 0; i < mils.length-1; i++) {
      const c = linkColor(mils[i], mils[i+1])
      if (c === '#00ff88') bonus += 2       // vert : +2
      else if (c === '#FFD700') bonus += 1  // orange : +1
    }
    return bonus
  }

  const homeTotal = milScore(homeMils) + milLinks(homeMils)
  const aiTotal   = milScore(aiMils)   + milLinks(aiMils)
  const homeWins  = homeTotal >= aiTotal

  function renderMilRow(mils, label, color) {
    return `<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${label}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${mils.map((p, i) => {
          const portrait = getPortrait(p)
          const lc = i < mils.length-1 ? linkColor(p, mils[i+1]) : null
          const hasLink = lc && lc !== '#ff3333' && lc !== '#cc2222'
          return `
          <div style="width:52px;height:52px;border-radius:8px;background:${color};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${portrait?`<img src="${portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:''}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${getNoteForRole(p,'MIL')}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${p.name}</div>
          </div>
          ${lc ? `<div style="width:14px;height:4px;border-radius:2px;background:${lc};flex-shrink:0;opacity:${hasLink?0.9:0.3}"></div>` : ''}
          `
        }).join('')}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${milScore(mils)} + ${milLinks(mils)} liens = <b style="color:#fff">${milScore(mils)+milLinks(mils)}</b>
      </div>
    </div>`
  }

  container.innerHTML = `
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${renderMilRow(homeMils, game.clubName, '#D4A017')}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${homeTotal}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${aiTotal}</div>
    </div>

    ${renderMilRow(aiMils, 'IA', '#bb2020')}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`

  setTimeout(() => {
    const elHome = document.getElementById('score-home')
    const elAi   = document.getElementById('score-ai')
    const elRes  = document.getElementById('midfield-result')
    if (elHome && elAi) {
      if (homeWins) {
        elHome.style.fontSize = '80px'; elHome.style.color = '#FFD700'
        elAi.style.opacity = '0.25'
      } else {
        elAi.style.fontSize = '80px'; elAi.style.color = '#ff6b6b'
        elHome.style.opacity = '0.25'
      }
    }
    if (elRes) {
      const boostValue = rollBoost()
      elRes.style.opacity = '1'
      const winner = homeWins ? game.clubName : 'IA'
      elRes.innerHTML = `
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${homeWins ? `${game.clubName} gagne le milieu de terrain et attaque !` : `L'IA gagne l'engagement et attaque !`}
        </div>
        ${homeWins ? `
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${boostValue}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>` : ''}
      `
      if (homeWins) game.boostCard = { value: boostValue }
    }

    game.attacker = homeWins ? 'home' : 'ai'
    game.log.push({
      type: 'duel',
      title: 'Milieu de Terrain',
      homePlayers: homeMils.map(p => ({ name:p.name, note:getNoteForRole(p,'MIL'), portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
      aiPlayers:   aiMils.map(p   => ({ name:p.name, note:getNoteForRole(p,'MIL'), portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
      homeTotal, aiTotal,
      text: `Duel milieu : ${game.clubName} ${homeTotal} – ${aiTotal} IA → ${homeWins ? game.clubName+' attaque' : 'IA attaque'}`,
    })

    // Page résultat séparée
    setTimeout(() => {
      const boostVal = game.boostCard?.value
      container.innerHTML = `
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:40px;height:100%;min-height:100%;gap:16px;padding-left:24px;padding-right:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${homeWins ? '🏆' : '😤'}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${homeWins
            ? `⚽ ${game.clubName}<br>gagne le milieu de terrain !`
            : `😔 L'IA gagne l'engagement !`}
        </div>
        ${boostVal && homeWins ? `
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${boostVal}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>` : ''}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`
      document.getElementById('start-match-btn')?.addEventListener('click', () => {
        game.phase = game.attacker === 'home' ? 'attack' : 'ai-attack'
        renderGame(container, game, ctx)
        if (game.attacker === 'ai') setTimeout(() => aiTurn(container, game, ctx), 800)
      })
    }, 100)
  }, 5000)
}

// ── Helper : logo club ───────────────────────────────────────
function getClubLogo(p) {
  const url = import.meta?.env?.VITE_SUPABASE_URL || ''
  if (!p?.clubLogo) return null
  if (p.clubLogo.startsWith('http')) return p.clubLogo
  return url ? `${url}/storage/v1/object/public/assets/clubs/${p.clubLogo}` : null
}

// ── Carte joueur HTML (hors SVG) ─────────────────────────────
function renderMiniCardHTML(p, w=44, h=58) {
  if (!p) return `<div style="width:${w}px;height:${h}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`
  const portrait = (typeof p.portrait === 'string' && p.portrait.startsWith('http')) ? p.portrait : getPortrait(p)
  const logoUrl  = getClubLogo(p)
  const role     = p._line || p.job || 'MIL'
  const jobColor = JOB_COLORS[role] || '#555'
  const rarityBorder = { normal:'#aaa', pépite:'#D4A017', papyte:'#222', légende:'#7a28b8' }[p?.rarity] || '#aaa'
  const note = p.note !== undefined ? Number(p.note)||0 : (Number(getNoteForRole(p, role))||0) + (p.boost||0)
  const flag = countryFlag(p?.country_code)
  const nameH = Math.round(h*0.19), botH = Math.round(h*0.25), portH = h - Math.round(h*0.19) - Math.round(h*0.25)
  const op = p?.used ? 0.28 : 1
  return `<div style="width:${w}px;height:${h}px;border-radius:5px;border:2px solid ${rarityBorder};background:${jobColor};position:relative;overflow:hidden;flex-shrink:0;opacity:${op}">
    <div style="position:absolute;top:0;left:0;right:0;height:${nameH}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(w/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${w-4}px">${(p?.name||'').slice(0,9)}</span>
    </div>
    ${portrait && !p?.used ? `<img src="${portrait}" style="position:absolute;top:${nameH}px;left:0;width:${w}px;height:${portH}px;object-fit:cover;object-position:top center">` : ''}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${botH}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${flagImgUrl(p?.country_code) ? `<img src="${flagImgUrl(p.country_code)}" style="width:${botH+2}px;height:${botH-3}px;object-fit:cover;border-radius:1px">` : `<span style="font-size:${botH-4}px">${flag}</span>`}
      <span style="font-size:${botH-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${p?.used?'–':note}</span>
      ${logoUrl ? `<img src="${logoUrl}" style="width:${botH-4}px;height:${botH-4}px;object-fit:contain">` : (p?.clubName ? `<span style="font-size:${Math.max(4,botH-8)}px;font-weight:700;color:#333">${(p.clubName||'').slice(0,3).toUpperCase()}</span>` : '')}
    </div>
  </div>`
}

// ── Ligne de cartes avec liens ───────────────────────────────
function renderCardRow(players, accentColor, total) {
  if (!players?.length) return ''
  const shown = players.slice(0, 5)
  let html = '<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">'
  shown.forEach((p, i) => {
    html += renderMiniCardHTML(p, 40, 52)
    if (i < shown.length - 1) {
      const lc = linkColor(p, shown[i+1])
      const noLink = lc === '#ff3333' || lc === '#cc2222'
      html += `<div style="width:7px;height:3px;background:${noLink?'rgba(255,255,255,0.12)':lc};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`
    }
  })
  if (total !== undefined) {
    const textColor = accentColor === '#00ff88' ? '#000' : '#fff'
    html += `<div style="margin-left:6px;background:${accentColor};color:${textColor};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${total}</div>`
  }
  html += '</div>'
  return html
}

// ── Helper : drapeau emoji depuis code pays ──────────────
function flagImgUrl(code) {
  if (!code || code.length < 2) return null
  return `https://flagcdn.com/24x18/${code.slice(0,2).toLowerCase()}.png`
}
function countryFlag(code) {
  if (!code || code.length < 2) return '🌍'
  try {
    const A = 0x1F1E6
    return String.fromCodePoint(A + code.charCodeAt(0) - 65) +
           String.fromCodePoint(A + code.charCodeAt(1) - 65)
  } catch { return '🌍' }
}

// ── TERRAIN SVG (liens : double ligne, pas de filter url) ─
function buildTeamSVG(team, formation, phase, selectedIds, W=310, H=310) {
  const FPOS   = FORMATION_POSITIONS[formation] || {}
  const FLINKS = getActiveLinks(formation) || FORMATION_LINKS[formation] || []
  const R      = 26

  const slots = {}
  const LINES = ['ATT','MIL','DEF','GK']
  for (const role of LINES) {
    const players = team[role] || []
    players.forEach((p, i) => { slots[`${role}${i+1}`] = p })
  }

  function px(pos) {
    const p = FPOS[pos]; return p ? { x:p.x*W, y:p.y*H } : null
  }

  let svg = ''

  // 1. Liens (double ligne, sans filter url pour éviter bug SPA Chrome)
  for (const [posA, posB] of FLINKS) {
    const a = px(posA), b = px(posB)
    if (!a || !b) continue
    const pA = slots[posA], pB = slots[posB]
    const lc = linkColor(pA, pB)
    const hasGlow = lc === '#00ff88' || lc === '#FFD700'
    if (hasGlow) {
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${lc}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${lc}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`
    } else {
      svg += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${lc}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`
    }
  }

  // 2. Cartes joueurs (style carte à la FUT)
  const CW = 48, CH = 64, NAMEH = 13, BOTHH = 16
  const rarityBorder = { normal:'#aaaaaa', pépite:'#D4A017', papyte:'#111111', légende:'#7a28b8' }

  for (const [pos, p] of Object.entries(slots)) {
    const c = px(pos)
    if (!c || !p) continue
    const role = pos.replace(/[0-9]/g,'')
    const bg   = JOB_COLORS[role] || '#555'

    const selectable = (phase==='attack' && ['MIL','ATT'].includes(role) && !p.used)
                    || (phase==='defense' && ['GK','DEF','MIL'].includes(role) && !p.used)
    const isSelected = selectedIds.includes(p.cardId)

    let note
    if      (phase==='attack')  note = role==='MIL'?Number(p.note_m)||0 : Number(p.note_a)||0
    else if (phase==='defense') note = role==='GK'?Number(p.note_g)||0 : role==='MIL'?Number(p.note_m)||0 : Number(p.note_d)||0
    else                        note = Number(role==='GK'?p.note_g:role==='DEF'?p.note_d:role==='MIL'?p.note_m:p.note_a)||0
    note = note + (p.boost||0)

    const rx0 = (c.x - CW/2).toFixed(1)
    const ry0 = (c.y - CH/2).toFixed(1)
    const cardOp  = p.used ? 0.25 : 1
    const rarity  = rarityBorder[p?.rarity] || rarityBorder.normal
    const bStroke = isSelected ? '#ff3030' : rarity
    const bWidth  = isSelected ? 3 : (p?.rarity==='légende'||p?.rarity==='pépite' ? 2.5 : 2)

    // Clip portrait à la zone centrale (sans nom ni bas)
    const portH = CH - NAMEH - BOTHH
    svg += `<defs><clipPath id="cp-${pos}"><rect x="${rx0}" y="${(c.y - CH/2 + NAMEH).toFixed(1)}" width="${CW}" height="${portH}"/></clipPath></defs>`

    // Fond
    svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${CH}" rx="5" fill="${bg}" opacity="${cardOp}"/>`

    // Portrait
    const portrait = getPortrait(p)
    if (portrait && !p.used) {
      svg += `<image href="${portrait}" x="${rx0}" y="${(c.y - CH/2 + NAMEH).toFixed(1)}" width="${CW}" height="${portH}" clip-path="url(#cp-${pos})" preserveAspectRatio="xMidYMin slice"/>`
    }

    // Barre nom (haut, fond blanc)
    svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${NAMEH}" rx="4" fill="rgba(255,255,255,0.92)"/>`
    svg += `<text x="${c.x.toFixed(1)}" y="${(c.y - CH/2 + 8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(p.name||'').slice(0,9)}</text>`

    // Bande bas (fond blanc)
    const by0 = (c.y + CH/2 - BOTHH).toFixed(1)
    svg += `<rect x="${rx0}" y="${by0}" width="${CW}" height="${BOTHH}" fill="rgba(255,255,255,0.92)"/>`

    if (p.used) {
      svg += `<text x="${c.x.toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`
    } else {
      // Drapeau pays (gauche)
      const flagU = flagImgUrl(p.country_code)
      if (flagU) svg += `<image href="${flagU}" x="${(c.x - 20).toFixed(1)}" y="${(c.y + CH/2 - BOTHH + 3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`
      else svg += `<text x="${(c.x - 13).toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${countryFlag(p.country_code)}</text>`
      // Note (centre)
      svg += `<text x="${c.x.toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${note}</text>`
      // Club (droite, 3 lettres)
      const logoUrl = getClubLogo(p)
      if (logoUrl) {
        svg += `<image href="${logoUrl}" x="${(c.x + CW/2 - 14).toFixed(1)}" y="${(c.y + CH/2 - BOTHH + 2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`
      } else if (p.clubName) {
        svg += `<text x="${(c.x + 14).toFixed(1)}" y="${(c.y + CH/2 - BOTHH/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(p.clubName||'').slice(0,3).toUpperCase()}</text>`
      }
      // Boost badge
      if (p.boost) {
        svg += `<rect x="${(c.x+CW/2-12).toFixed(1)}" y="${(c.y-CH/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`
        svg += `<text x="${(c.x+CW/2-5).toFixed(1)}" y="${(c.y-CH/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${p.boost}</text>`
      }
    }

    // Bordure rareté (+ surbrillance si sélectionné)
    svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${CH}" rx="5" fill="${isSelected?'rgba(255,255,255,0.12)':'none'}" stroke="${bStroke}" stroke-width="${bWidth}" opacity="${cardOp}"/>`

    // Zone cliquable (invisible)
    if (selectable) {
      svg += `<rect x="${rx0}" y="${ry0}" width="${CW}" height="${CH}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${isSelected?'selected':''}" data-card-id="${p.cardId}" data-role="${role}" style="cursor:pointer"/>`
    }
  }

  const PAD = 38  // marge pour cartes rectangulaires
  return `<svg viewBox="${-PAD} ${-PAD} ${W+PAD*2} ${H+PAD*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${svg}
  </svg>`
}

function renderTeam(team, formation, phase, selectedIds, W=300, H=300) {
  return `<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${buildTeamSVG(team, formation, phase, selectedIds, W, H)}
  </div>`
}


// ── RENDU MINI JOUEUR (zone action) ──────────────────────
function renderMiniPlayer(p, grayed=false) {
  const portrait = p.portrait || null
  const jobColor = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }[p.job] || '#555'
  return `
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${jobColor};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${grayed?'0.2':'0.5'});opacity:${grayed?0.4:1};margin:0 auto">
      ${portrait ? `<img src="${portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` : ''}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${p.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(p.name||'').slice(0,7)}</div>
  </div>`
}

function renderLogEntry(entry) {
  if (entry.type === 'duel') {
    const hw = entry.homeTotal >= entry.aiTotal
    return `
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(entry.title||'DUEL').toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(entry.homePlayers||[]).map(p=>renderMiniPlayer(p)).join('')}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${hw?20:14}px;font-weight:900;color:${hw?'#FFD700':'rgba(255,255,255,0.4)'};line-height:1">${entry.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${!hw?20:14}px;font-weight:900;color:${!hw?'#ff6b6b':'rgba(255,255,255,0.4)'};line-height:1">${entry.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(entry.aiPlayers||[]).map(p=>renderMiniPlayer(p)).join('')}
        </div>
      </div>
      ${entry.isGoal ? `<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${entry.homeScored?'⚽ BUT !':'⚽ BUT IA !'}</div>` : ''}
    </div>`
  }

  if (entry.type === 'sub') {
    const isHome = entry.subSide === 'home'
    return `
    <div style="display:flex;align-items:center;gap:4px;${isHome?'flex-direction:row-reverse':''};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${isHome?entry.clubName||'Vous':'IA'}</div>
      ${renderMiniPlayer(entry.outPlayer||{}, true)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${renderMiniPlayer(entry.inPlayer||{})}
    </div>`
  }

  // Info / goal simple
  return `<div style="font-size:11px;color:${entry.type==='goal'?'#FFD700':'rgba(255,255,255,0.65)'};font-weight:${entry.type==='goal'?700:400};padding:3px 2px">${entry.text||''}</div>`
}

// ── RENDU PRINCIPAL DU MATCH (layout mobile refonte) ──────
function renderGame(container, game, ctx) {
  const selectedIds = game.selected.map(s => s.cardId)
  const usedSubIds  = game.usedSubIds || []
  const availSubs   = game.homeSubs.filter(s => !usedSubIds.includes(s.cardId))
  const grayedPlayers = Object.values(game.homeTeam).flat().filter(p => p.used)
  const canSub = grayedPlayers.length > 0 && availSubs.length > 0 && game.subsUsed < game.maxSubs

  // Dernière action
  const lastLog  = game.log[game.log.length - 1]
  const isAITurn = game.phase === 'ai-attack' || game.phase === 'ai-defense'
  const isAttack = game.phase === 'attack'
  const isDefense = game.phase === 'defense'
  const isFinished = game.phase === 'finished'

  // GC disponibles
  const activeGCs = game.gcCards.filter(gc => !game.usedGc.includes(gc.id))
  const boostAvail = game.boostCard && !game.boostUsed

  // Container : hauteur fixe = espace dispo, pas de scroll
  container.style.overflow = 'hidden'
  container.style.height   = '100%'
  container.style.display  = 'flex'
  container.style.flexDirection = 'column'
  container.innerHTML = `
  <style>
    @keyframes subSlideOut { from{transform:translateX(0);opacity:1} to{transform:translateX(-120%);opacity:0} }
    @keyframes subSlideIn  { from{transform:translateX(120%);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes subFadeIn   { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
    .sub-anim-out { animation: subSlideOut 0.45s ease forwards; }
    .sub-anim-in  { animation: subSlideIn 0.45s ease 0.35s forwards; opacity:0; }
    #match-history-panel {
      position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:500;
      display:flex;flex-direction:column;
      transform:translateY(100%);transition:transform 0.3s ease;
    }
    #match-history-panel.open { transform:translateY(0); }
  </style>

  <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">

    <!-- SCORE BAR -->
    <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
      <button id="match-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${game.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${game.homeScore} – ${game.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">IA (${game.difficulty.toUpperCase()})</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">
      ${(()=>{
        // Attaque IA en cours → panel visuel rouge
        if (game.phase === 'defense' && game.pendingAttack) {
          const atk = game.pendingAttack
          return `<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${renderCardRow((atk.players||[]).map(p=>({...p,used:false})), '#ff6b6b', atk.total)}
          </div>`
        }
        if (game.phase === 'ai-defense' && game.pendingAttack) {
          const atk = game.pendingAttack
          return `<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${renderCardRow((atk.players||[]).map(p=>({...p,used:false})), '#00ff88', atk.total)}
          </div>`
        }
        // Sinon : dernière action du log
        const last = game.log[game.log.length-1]
        if (!last) return '<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'
        return '<div style="padding:2px 4px">'+renderLogEntry(last)+'</div>'
      })()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${game.log.length})
    </button>

    ${(()=>{
      const _pc = window.innerWidth >= 700

      // ─── Boutons GC (réutilisés dans les deux layouts) ───
      // ─── Design Collection pour les cartes GC ────────────────
      const gcCardDesign = (gc, w, h) => {
        const def    = (game.gcDefs||[]).find(d => d.name === gc.gc_type)
        const bg     = ({purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'})[def?.color] || 'linear-gradient(160deg,#4a0a8a,#7a28b8)'
        const bord   = ({purple:'#b06ce0',light_blue:'#00d4ef'})[def?.color] || '#b06ce0'
        const name   = def?.name || gc.gc_type
        const effect = def?.effect || GC_DEFS[gc.gc_type]?.desc || ''
        const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
        const icon   = GC_DEFS[gc.gc_type]?.icon || '⚡'
        const nameH  = Math.round(h * 0.22), effH = Math.round(h * 0.22), imgH = h - nameH - effH
        const fs     = name.length > 12 ? 7 : 9
        return `<div class="gc-mini" data-gc-id="${gc.id}" data-gc-type="${gc.gc_type}"
          style="width:${w}px;height:${h}px;border-radius:10px;border:2px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${nameH}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${fs}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${w-6}px">${name}</span>
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

      const gcMiniPC = (gc, isBoost) => isBoost
        ? `<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${game.boostCard?.value}</div>
          </div>`
        : gcCardDesign(gc, 110, 150)

      const gcMiniMob = (gc, isBoost) => isBoost
        ? `<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${game.boostCard?.value}</div>
          </div>`
        : gcCardDesign(gc, 68, 95)

      // ─── Bouton action ────────────────────────────────────
      const btnStyle = _pc
        ? 'padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%'
        : 'padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%'

      const actionBtn = isFinished
        ? `<button id="btn-results" style="${btnStyle};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`
        : isAITurn
        ? `<div style="${btnStyle};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`
        : isAttack
        ? `<button id="btn-action" style="${btnStyle};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${game.selected.length===0?'disabled':''}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`
        : isDefense
        ? `<button id="btn-action" style="${btnStyle};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${game.selected.length===0?'disabled':''}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`
        : `<div style="${btnStyle};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`

      const counter = (isAttack||isDefense) ? `<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${game.selected.length}/3 sélectionné(s)</div>` : ''

      // ─── Subs column (commun) ─────────────────────────────
      const subsHTML = `<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_pc?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${availSubs.length===0
          ? `<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>`
          : availSubs.map(s=>`<div class="sub-btn-col" data-sub-id="${s.cardId}" style="cursor:pointer;flex-shrink:0">${renderMiniCardHTML(s,44,58)}</div>`).join('')}
      </div>`

      // ─── Terrain ──────────────────────────────────────────
      const terrainHTML = `<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${renderTeam(game.homeTeam,game.formation,game.phase,selectedIds,300,300)}
        </div>
      </div>`

      if (_pc) {
        // ══ LAYOUT PC : subs | terrain | colonne droite GC+btn ══
        return `
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${subsHTML}
          ${terrainHTML}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${activeGCs.map(gc=>gcMiniPC(gc,false)).join('')}
            ${boostAvail?gcMiniPC(null,true):''}
            <div style="flex:1"></div>
            <div style="width:100%">${actionBtn}${counter}</div>
          </div>
        </div>`
      } else {
        // ══ LAYOUT MOBILE : subs | (terrain + zone bas) ══════
        return `
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${subsHTML}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${terrainHTML}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${activeGCs.map(gc=>gcMiniMob(gc,false)).join('')}
                ${boostAvail?gcMiniMob(null,true):''}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${actionBtn}${counter}
              </div>
            </div>
          </div>
        </div>`
      }
    })()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${game.log.length === 0
        ? `<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`
        : [...game.log].reverse().map(e => {
            if (e.type === 'duel') {
              const isGoal = e.isGoal
              const accent = e.homeScored ? '#FFD700' : isGoal ? '#ff6b6b' : 'rgba(255,255,255,0.3)'
              const side = e.homeScored ? '⚽ BUT !' : isGoal ? '⚽ BUT IA !' : e.homePlayers?.length ? '⚔️ Attaque' : '🛡️ Défense'
              return `<div style="padding:8px;border-radius:8px;background:${isGoal?'rgba(212,160,23,0.12)':'rgba(255,255,255,0.04)'};border-left:3px solid ${accent};margin-bottom:4px">
                <div style="font-size:9px;color:${accent};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${side}</div>
                ${e.homePlayers?.length ? `<div style="margin-bottom:3px">${renderCardRow(e.homePlayers,'rgba(255,255,255,0.7)',e.homeTotal)}</div>` : ''}
                ${e.aiPlayers?.length ? `<div style="opacity:0.7">${renderCardRow(e.aiPlayers,'#ff6b6b',e.aiTotal)}</div>` : ''}
              </div>`
            }
            if (e.type === 'sub') {
              return `<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${e.outPlayer ? renderMiniCardHTML({...e.outPlayer, used:true, _line:e.outPlayer.job, rarity:'normal'}, 38, 50) : ''}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${e.inPlayer ? renderMiniCardHTML({...e.inPlayer, _line:e.inPlayer.job, rarity:'normal'}, 38, 50) : ''}
                </div>
              </div>`
            }
            if (e.type === 'goal') {
              return `<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${e.text}</span>
              </div>`
            }
            return `<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${e.text||''}</span>
            </div>`
          }).join('')
      }
    </div>
  </div>`

  // ── Dimensionner le terrain exactement (hauteur disponible) ─
  // ── Dimensionnement adapté PC / Mobile ───────────────────
  ;(function fixSVG() {
    const svg = container.querySelector('.terrain-wrapper svg')
    if (!svg) return
    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
    // viewBox resserré : PAD original=38, on réduit à 10 → plus de zoom
    svg.setAttribute('viewBox', '-26 -26 352 352')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    const ms = container.querySelector('.match-screen')
    if (ms) {
      const h = container.clientHeight
      if (h > 50) { ms.style.height = h + 'px'; ms.style.overflow = 'hidden' }
    }
  })()
  if (!game._resizeBound) {
    game._resizeBound = true
    window.addEventListener('resize', () => {
      const svg2 = container.querySelector('.terrain-wrapper svg')
      if (svg2) { svg2.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0' }
    })
  }

  // ── CHRONO (point 7) ─────────────────────────────────────
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  const isPlayerTurn = (game.phase === 'attack' || game.phase === 'defense')
  if (isPlayerTurn) {
    let phase2 = false           // false = 30s vert, true = 15s rouge
    let remaining = 30
    const timerEl = () => document.getElementById('match-timer')
    const paint = () => {
      const el = timerEl()
      if (!el) return
      const mm = String(Math.floor(remaining/60)).padStart(2,'0')
      const ss = String(remaining%60).padStart(2,'0')
      el.textContent = ` ${mm}:${ss}`
      el.style.color = phase2 ? '#ff2222' : '#ff9500'
      el.style.fontWeight = '900'
    }
    paint()
    game._timerInt = setInterval(() => {
      remaining--
      if (remaining < 0) {
        if (!phase2) { phase2 = true; remaining = 15; paint() }
        else {
          clearInterval(game._timerInt); game._timerInt = null
          // Forfait
          game.homeScore = 0; game.aiScore = 3
          const ov = document.createElement('div')
          ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center'
          ov.innerHTML = `<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>`
          document.body.appendChild(ov)
          setTimeout(() => { ov.remove(); finishMatch(container, game, ctx) }, 2500)
        }
      } else paint()
    }, 1000)
  }

  // ── Events ────────────────────────────────────────────────
  document.getElementById('match-quit')?.addEventListener('click', () => {
    _showBottomNav(container)
    if (confirm('Abandonner ? Résultat : défaite 3-0')) {
      game.homeScore = 0; game.aiScore = 3
      finishMatch(container, game, ctx)
    }
  })
  document.getElementById('view-ai')?.addEventListener('click', () => showAITeam(game, ctx))

  document.getElementById('toggle-history')?.addEventListener('click', () => {
    document.getElementById('match-history-panel')?.classList.add('open')
  })
  document.getElementById('close-history')?.addEventListener('click', () => {
    document.getElementById('match-history-panel')?.classList.remove('open')
  })

  document.getElementById('btn-action')?.addEventListener('click', () => {
    if (game.selected.length === 0) return
    if (isAttack) confirmAttack(container, game, ctx)
    else if (isDefense) confirmDefense(container, game, ctx)
  })

  document.getElementById('btn-results')?.addEventListener('click', () => finishMatch(container, game, ctx))

  container.querySelectorAll('.match-slot-hit').forEach(el => {
    el.addEventListener('click', () => toggleSelect(el, game, container, ctx))
  })
  container.querySelectorAll('.gc-mini').forEach(el => {
    el.addEventListener('click', () => openGCDetail(el.dataset.gcId, el.dataset.gcType, container, game, ctx))
  })
  document.getElementById('boost-card')?.addEventListener('click', () => useBoost(container, game, ctx))

  // Subs : clic sur portrait dans colonne
  container.querySelectorAll('.sub-btn-col').forEach(el => {
    el.addEventListener('click', () => openSubstitution(container, game, ctx, el.dataset.subId))
  })
  document.getElementById('sub-btn-main')?.addEventListener('click', () => openSubstitution(container, game, ctx))
}

// ── SÉLECTION ─────────────────────────────────────────────
function toggleSelect(el, game, container, ctx) {
  const cardId = el.dataset.cardId
  const role   = el.dataset.role
  const existing = game.selected.findIndex(s => s.cardId === cardId)
  if (existing !== -1) {
    game.selected.splice(existing, 1)
  } else {
    if (game.selected.length >= 3) { ctx.toast('Maximum 3 joueurs', 'error'); return }
    const player = (game.homeTeam[role]||[]).find(p => p.cardId === cardId)
    if (player) game.selected.push({ ...player, _role: role, _line: role })
  }
  renderGame(container, game, ctx)
}

// ── ATTAQUE ───────────────────────────────────────────────
// ── Mise à jour du dernier joueur actif ──────────────────
function updateLastPlayer(game, ctx, playerId) {
  if (!game.matchId) return
  supabase.from('matches').update({ last_player_id: playerId }).eq('id', game.matchId).then(()=>{})
}

function confirmAttack(container, game, ctx) {
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  updateLastPlayer(game, ctx, ctx.state.profile.id)
  const selected = game.selected.map(s=>({...s,_line:s._role}))
  const calc = calcAttack(selected, game.modifiers.home)
  game.pendingAttack = { ...calc, players:[...game.selected], side:'home' }
  game.selected.forEach(sel => {
    const p = (game.homeTeam[sel._role]||[]).find(pp => pp.cardId === sel.cardId)
    if (p) p.used = true
  })
  game.log.push({ text:`⚔️ Vous attaquez : ${calc.total} (base ${calc.base}${calc.links?` +${calc.links} liens`:''}) — ${game.selected.map(p=>p.name).join(', ')}`, type:'info' })
  game.selected = []
  game.modifiers.home = {}
  game.phase = 'ai-defense'
  renderGame(container, game, ctx)
  setTimeout(() => aiDefend(container, game, ctx), 1200)
}

// ── DÉFENSE ───────────────────────────────────────────────
function confirmDefense(container, game, ctx) {
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  updateLastPlayer(game, ctx, ctx.state.profile.id)
  const selected = game.selected.map(s=>({...s,_line:s._role}))
  const calc = calcDefense(selected, game.modifiers.home)
  game.selected.forEach(sel => {
    const p = (game.homeTeam[sel._role]||[]).find(pp => pp.cardId === sel.cardId)
    if (p) p.used = true
  })
  const result = resolveDuel(game.pendingAttack.total, calc.total, game.modifiers.home)
  const duelEntryDef = {
    type: 'duel',
    title: 'Défense',
    aiPlayers:   (game.pendingAttack.players||[]).map(p => ({ name:p.name, note:p._line==='MIL'?p.note_m:p.note_a, portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
    homePlayers: game.selected.map(s => { const pp = (game.homeTeam[s._role]||[]).find(x=>x.cardId===s.cardId)||s; return { name:pp.name, note:pp._line==='GK'?pp.note_g:pp._line==='MIL'?pp.note_m:pp.note_d, portrait:getPortrait(pp), job:pp.job, country_code:pp.country_code, rarity:pp.rarity, clubName:pp.clubName, clubLogo:pp.clubLogo } }),
    homeTotal: calc.total,
    aiTotal: game.pendingAttack.total,
    isGoal: false, homeScored: false,
    text: '',
  }
  if (result.shielded) {
    duelEntryDef.text = '🛡️ Bouclier ! But annulé.'
    game.log.push(duelEntryDef)
  } else if (result.goal) {
    game.aiScore++
    duelEntryDef.isGoal = true; duelEntryDef.homeScored = false
    duelEntryDef.text = `⚽ BUT IA ! (${game.pendingAttack.total} > ${calc.total})`
    game.log.push(duelEntryDef)
    game.selected = []
    game.modifiers.home = {}
    game.pendingAttack = null
    renderGame(container, game, ctx)
    showGoalAnimation(duelEntryDef.aiPlayers, game.homeScore, game.aiScore, false, () => {
      nextTurn(container, game, ctx, 'home-attack')
    })
    return
  } else {
    duelEntryDef.text = `🧤 Défense réussie ! (${calc.total} ≥ ${game.pendingAttack.total})`
    game.log.push(duelEntryDef)
  }
  game.selected = []
  game.modifiers.home = {}
  game.pendingAttack = null
  nextTurn(container, game, ctx, 'home-attack')
}

// ── IA ────────────────────────────────────────────────────
function aiTurn(container, game, ctx) {
  updateLastPlayer(game, ctx, null)
  const allAi = [...(game.aiTeam.MIL||[]),...(game.aiTeam.ATT||[])]
  const selected = aiSelectPlayers(allAi, 'attack', game.difficulty)
  if (!selected.length) { checkEnd(container, game, ctx); return }
  const calc = calcAttack(selected, game.modifiers.ai)
  game.pendingAttack = { ...calc, players:selected, side:'ai' }
  selected.forEach(s => { s.used = true })
  game.log.push({ text:`🤖 IA attaque : ${calc.total} (${selected.map(p=>p.name).join(', ')})`, type:'info' })
  game.modifiers.ai = {}

  // Si le joueur n'a aucun défenseur dispo (GK/DEF/MIL) ET aucun remplacement possible → but auto IA
  const homeDefenders = [...(game.homeTeam.GK||[]),...(game.homeTeam.DEF||[]),...(game.homeTeam.MIL||[])].filter(p=>!p.used)
  const availSubsNow  = (game.homeSubs||[]).filter(s => !(game.usedSubIds||[]).includes(s.cardId))
  const canSubNow     = availSubsNow.length > 0 && game.subsUsed < game.maxSubs
  if (homeDefenders.length === 0 && !canSubNow) {
    game.aiScore++
    const duelEntry = {
      type:'duel', isGoal:true, homeScored:false,
      aiPlayers: selected.map(p => ({ name:p.name, note:p._line==='MIL'?p.note_m:p.note_a, portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
      aiTotal: calc.total,
      text:`⚽ BUT IA ! (aucun défenseur disponible)`,
    }
    game.log.push(duelEntry)
    game.pendingAttack = null
    renderGame(container, game, ctx)
    showGoalAnimation(duelEntry.aiPlayers, game.homeScore, game.aiScore, false, () => {
      nextTurn(container, game, ctx, 'home-attack')
    })
    return
  }

  game.phase = 'defense'
  renderGame(container, game, ctx)
}

function aiDefend(container, game, ctx) {
  const allAi = [...(game.aiTeam.GK||[]),...(game.aiTeam.DEF||[]),...(game.aiTeam.MIL||[])]
  const selected = aiSelectPlayers(allAi, 'defense', game.difficulty)
  const defVal = selected.length > 0 ? calcDefense(selected, game.modifiers.ai).total : 0
  selected.forEach(s => { s.used = true })
  const result = resolveDuel(game.pendingAttack.total, defVal, game.modifiers.ai)
  const duelEntryAttack = {
    type: 'duel',
    title: 'Attaque',
    homePlayers: (game.pendingAttack.players||[]).map(p => ({ name:p.name, note:p._line==='MIL'?p.note_m:p.note_a, portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
    aiPlayers:   selected.map(p => ({ name:p.name, note:p._line==='GK'?p.note_g:p._line==='MIL'?p.note_m:p.note_d, portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
    homeTotal: game.pendingAttack.total,
    aiTotal: defVal,
    isGoal: false, homeScored: false,
    text: '',
  }
  if (result.shielded) {
    duelEntryAttack.text = '🛡️ Bouclier IA !'
    game.log.push(duelEntryAttack)
  } else if (result.goal) {
    game.homeScore++
    duelEntryAttack.isGoal = true; duelEntryAttack.homeScored = true
    duelEntryAttack.text = `⚽ BUT ! (${game.pendingAttack.total} > ${defVal})`
    game.log.push(duelEntryAttack)
    game.modifiers.ai = {}
    game.pendingAttack = null
    renderGame(container, game, ctx)
    showGoalAnimation(duelEntryAttack.homePlayers, game.homeScore, game.aiScore, true, () => {
      nextTurn(container, game, ctx, 'ai-attack')
    })
    return
  } else {
    duelEntryAttack.text = `🧤 IA défend (${defVal} ≥ ${game.pendingAttack.total})`
    game.log.push(duelEntryAttack)
  }
  game.modifiers.ai = {}
  game.pendingAttack = null
  nextTurn(container, game, ctx, 'ai-attack')
}

// ── TOURS ─────────────────────────────────────────────────
function nextTurn(container, game, ctx, next) {
  game.round++
  if (isMatchOver(game)) { finishMatch(container, game, ctx); return }
  if (next === 'home-attack') {
    const homeAtt = [...(game.homeTeam.MIL||[]),...(game.homeTeam.ATT||[])].filter(p=>!p.used)
    if (!homeAtt.length) {
      const homeDef = [...(game.homeTeam.GK||[]),...(game.homeTeam.DEF||[]),...(game.homeTeam.MIL||[])].filter(p=>!p.used)
      if (!homeDef.length) { finishMatch(container, game, ctx); return }
      game.phase = 'ai-attack'
      renderGame(container, game, ctx)
      setTimeout(() => aiTurn(container, game, ctx), 800)
      return
    }
    game.phase = 'attack'
    renderGame(container, game, ctx)
  } else {
    const aiAtt = [...(game.aiTeam.MIL||[]),...(game.aiTeam.ATT||[])].filter(p=>!p.used)
    if (!aiAtt.length) { checkEnd(container, game, ctx); return }
    game.phase = 'ai-attack'
    renderGame(container, game, ctx)
    setTimeout(() => aiTurn(container, game, ctx), 800)
  }
}

function isMatchOver(game) {
  const homeOK = ['MIL','ATT','GK','DEF'].some(r => (game.homeTeam[r]||[]).some(p=>!p.used))
  const aiOK   = ['MIL','ATT','GK','DEF'].some(r => (game.aiTeam[r]||[]).some(p=>!p.used))
  return !homeOK && !aiOK
}

function checkEnd(container, game, ctx) {
  if (isMatchOver(game)) finishMatch(container, game, ctx)
  else { game.phase = 'attack'; renderGame(container, game, ctx) }
}

// ── ANIMATION REMPLACEMENT ────────────────────────────────
function showSubAnimation(outPlayer, inPlayer, callback) {
  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `
  const outPortrait  = getPortrait(outPlayer)
  const inPortrait   = getPortrait(inPlayer)
  const outColor     = JOB_COLORS[outPlayer.job] || '#555'
  const inColor      = JOB_COLORS[inPlayer.job]  || '#555'

  const outNote = outPlayer.job==='GK'?outPlayer.note_g:outPlayer.job==='DEF'?outPlayer.note_d:outPlayer.job==='MIL'?outPlayer.note_m:outPlayer.note_a
  const inNote  = inPlayer.job==='GK'?inPlayer.note_g:inPlayer.job==='DEF'?inPlayer.note_d:inPlayer.job==='MIL'?inPlayer.note_m:inPlayer.note_a
  overlay.innerHTML = `
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${outColor};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${outPortrait?`<img src="${outPortrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:``}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${outNote}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${outPlayer.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${outPlayer.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${inColor};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${inPortrait?`<img src="${inPortrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:``}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${inNote}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${inPlayer.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${inPlayer.name}</div>
      </div>
    </div>
  `
  document.body.appendChild(overlay)
  let subDismissed = false
  const subDismiss = () => {
    if (subDismissed) return
    subDismissed = true
    overlay.remove()
    callback()
  }
  overlay.addEventListener('click', subDismiss)
  setTimeout(subDismiss, 2000)
}

// ── TOAST MATCH ───────────────────────────────────────────
function showGameToast(msg, color='rgba(0,0,0,0.8)') {
  const el = document.createElement('div')
  el.style.cssText = `position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${color};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`
  el.textContent = msg
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 2200)
}

// ── CARTE JOUEUR MINI (modal sub) ─────────────────────────
function renderSubCard(p) {
  const portrait = getPortrait(p)
  const jobColor = JOB_COLORS[p.job] || '#555'
  const rarityBorder = { normal:'rgba(255,255,255,0.2)', pépite:'#D4A017', papyte:'#909090', légende:'#7a28b8' }[p.rarity] || 'rgba(255,255,255,0.2)'
  const note = p.job==='GK'?p.note_g:p.job==='DEF'?p.note_d:p.job==='MIL'?p.note_m:p.note_a
  return `
  <div style="width:72px;overflow:hidden;border-radius:8px;border:2px solid ${rarityBorder};background:rgba(0,0,0,0.5);flex-shrink:0">
    <div style="background:${jobColor};padding:3px;text-align:center">
      <span style="font-size:14px;font-weight:900;color:#fff">${note}</span>
    </div>
    <div style="height:64px;position:relative;overflow:hidden;background:${jobColor}44">
      ${portrait?`<img src="${portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:''}
    </div>
    <div style="padding:3px;background:rgba(0,0,0,0.6)">
      <div style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(p.name||'').slice(0,9)}</div>
      <div style="font-size:6px;color:rgba(255,255,255,0.4)">${p.job}</div>
    </div>
    <div style="height:2px;background:${rarityBorder}"></div>
  </div>`
}

// ── REMPLACEMENT ──────────────────────────────────────────
function openSubstitution(container, game, ctx, preferredSubId = null) {
  if (game.phase !== 'attack') { showGameToast('⏰ Remplacement uniquement avant une attaque','rgba(180,100,0,0.9)'); return }
  if (!game.usedSubIds) game.usedSubIds = []
  if (game.subsUsed >= game.maxSubs) { showGameToast(`Maximum ${game.maxSubs} remplacements atteint`,'rgba(180,30,30,0.9)'); return }
  const grayedPlayers = Object.values(game.homeTeam).flat().filter(p => p.used)
  const availSubs     = game.homeSubs.filter(s => !game.usedSubIds.includes(s.cardId))
  if (!grayedPlayers.length) { showGameToast('Aucun joueur utilisé à remplacer'); return }
  if (!availSubs.length)     { showGameToast('Aucun remplaçant disponible'); return }

  let outIdx = 0
  let inIdx  = Math.max(0, availSubs.findIndex(s => s.cardId === preferredSubId))
  let subConfirmDone = false

  const overlay = document.createElement('div')
  overlay.id = 'sub-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden'

  function rebuild() {
    const outP = grayedPlayers[outIdx]
    const inP  = availSubs[inIdx]
    const CARD_W = Math.min(130, Math.round((window.innerWidth - 90) / 2))
    const CARD_H = Math.round(CARD_W * 1.35)

    const arrowStyle = (disabled) => `background:rgba(255,255,255,0.12);border:none;color:${disabled?'rgba(255,255,255,0.2)':'#fff'};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${disabled?'default':'pointer'};flex-shrink:0`

    overlay.innerHTML = `
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${game.subsUsed}/${game.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${arrowStyle(inIdx===0)}" ${inIdx===0?'disabled':''}>▲</button>
        <div>${inP ? renderMiniCardHTML({...inP, used:false, boost:0}, CARD_W, CARD_H) : '<div>—</div>'}</div>
        <button id="in-down" style="${arrowStyle(inIdx>=availSubs.length-1)}" ${inIdx>=availSubs.length-1?'disabled':''}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${inIdx+1}/${availSubs.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${arrowStyle(outIdx===0)}" ${outIdx===0?'disabled':''}>▲</button>
        <div>${outP ? renderMiniCardHTML({...outP, used:false, boost:0}, CARD_W, CARD_H) : '<div>—</div>'}</div>
        <button id="out-down" style="${arrowStyle(outIdx>=grayedPlayers.length-1)}" ${outIdx>=grayedPlayers.length-1?'disabled':''}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${outIdx+1}/${grayedPlayers.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`

    overlay.querySelector('#sub-close')?.addEventListener('click', () => overlay.remove())
    overlay.querySelector('#out-up')?.addEventListener('click',   () => { if(outIdx>0){outIdx--;rebuild()} })
    overlay.querySelector('#out-down')?.addEventListener('click', () => { if(outIdx<grayedPlayers.length-1){outIdx++;rebuild()} })
    overlay.querySelector('#in-up')?.addEventListener('click',    () => { if(inIdx>0){inIdx--;rebuild()} })
    overlay.querySelector('#in-down')?.addEventListener('click',  () => { if(inIdx<availSubs.length-1){inIdx++;rebuild()} })

    // Swipe tactile vertical sur chaque panel
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
    bindSwipe('in-panel',  () => inIdx,  v => inIdx = v,  availSubs.length)
    bindSwipe('out-panel', () => outIdx, v => outIdx = v, grayedPlayers.length)

    overlay.querySelector('#sub-confirm')?.addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation()
      if (subConfirmDone) return   // évite double-fire sur mobile
      subConfirmDone = true

      const outPlayer = grayedPlayers[outIdx]
      const subPlayer = availSubs[inIdx]
      if (!outPlayer || !subPlayer) return

      let foundRole = null, foundIdx = -1
      for (const [role, players] of Object.entries(game.homeTeam)) {
        const idx = (players||[]).findIndex(p => p.cardId === outPlayer.cardId)
        if (idx !== -1) { foundRole = role; foundIdx = idx; break }
      }
      if (foundIdx === -1 || !foundRole) {
        showGameToast('Erreur : joueur introuvable', 'rgba(180,0,0,0.9)')
        overlay.remove()
        return
      }

      // Appliquer le remplacement
      const inPlayer = { ...subPlayer, _line:foundRole, _col:outPlayer._col||0, used:false, boost:0 }
      game.homeTeam[foundRole].splice(foundIdx, 1, inPlayer)
      if (!game.usedSubIds) game.usedSubIds = []
      game.usedSubIds.push(subPlayer.cardId)
      game.subsUsed++
      game.selected = []
      game.log.push({
        type:'sub', subSide:'home', clubName:game.clubName,
        outPlayer:{ name:outPlayer.name, firstname:outPlayer.firstname, note:getNoteForRole(outPlayer, foundRole), portrait:getPortrait(outPlayer), job:outPlayer.job, country_code:outPlayer.country_code, rarity:outPlayer.rarity, clubName:outPlayer.clubName, clubLogo:outPlayer.clubLogo },
        inPlayer: { name:subPlayer.name, firstname:subPlayer.firstname, note:getNoteForRole(subPlayer, foundRole), portrait:getPortrait(subPlayer), job:subPlayer.job, country_code:subPlayer.country_code, rarity:subPlayer.rarity, clubName:subPlayer.clubName, clubLogo:subPlayer.clubLogo },
        text:`🔄 ${subPlayer.firstname} ${subPlayer.name} remplace ${outPlayer.firstname} ${outPlayer.name}`,
      })

      overlay.remove()
      // Un seul renderGame, après l'animation
      showSubAnimation(outPlayer, subPlayer, () => renderGame(container, game, ctx))
    })
  }

  document.body.appendChild(overlay)
  rebuild()
}


// ── GAME CHANGER : popup détail ───────────────────────────
function openGCDetail(gcId, gcType, container, game, ctx) {
  const dbDef = (game.gcDefs||[]).find(d => d.name === gcType)
  const legDef = GC_DEFS[gcType] || { icon:'⚡', desc:'Carte spéciale.' }
  const bg     = ({purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)',light_blue:'linear-gradient(160deg,#006080,#00bcd4)'})[dbDef?.color] || 'linear-gradient(160deg,#4a0a8a,#7a28b8)'
  const bord   = ({purple:'#b06ce0',light_blue:'#00d4ef'})[dbDef?.color] || '#b06ce0'
  const name   = dbDef?.name || gcType
  const effect = dbDef?.effect || legDef.desc
  const imgUrl = dbDef?.image_url ? `${import.meta.env.BASE_URL}icons/${dbDef.image_url}` : null
  const icon   = legDef.icon || '⚡'
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px'
  overlay.innerHTML = `
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${bord}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${name.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${name}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${imgUrl ? `<img src="${imgUrl}" style="max-width:150px;max-height:150px;object-fit:contain">` : `<span style="font-size:72px">${icon}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${effect}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#gc-back')?.addEventListener('click', () => overlay.remove())
  overlay.querySelector('#gc-use')?.addEventListener('click', () => {
    overlay.remove()
    useGameChanger(gcId, gcType, container, game, ctx)
  })
}

// ── GAME CHANGER ──────────────────────────────────────────
// ── Picker joueurs pour les GC (BOOST/DEBUFF/GRAY/REVIVE) ─
function openGCPicker(pool, count, label, container, game, onConfirm) {
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden'
  let chosen = []

  function rebuildPicker() {
    overlay.innerHTML = `
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${label}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${chosen.length}/${count}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${pool.map(p => {
        const role = p._line || p.job || 'MIL'
        const bg   = ({ GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' })[role] || '#555'
        const note = getNoteForRole(p, role) + (p.boost||0)
        const sel  = chosen.find(x => x.cardId === p.cardId)
        return `<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${sel?'#FFD700':'rgba(255,255,255,0.25)'};background:${bg};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?'opacity:0.3;pointer-events:none':''}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||'?'}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${note}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${role}</div>
        </div>`
      }).join('')}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${chosen.length===0?'disabled style="opacity:0.4"':''} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${chosen.length}/${count})
      </button>
    </div>`

    overlay.querySelector('#gc-picker-close')?.addEventListener('click', () => overlay.remove())
    overlay.querySelectorAll('.gc-pick-item').forEach(el => {
      el.addEventListener('click', () => {
        const cid = el.dataset.cid
        const p   = pool.find(x => x.cardId === cid)
        if (!p) return
        const idx = chosen.findIndex(x => x.cardId === cid)
        if (idx > -1) { chosen.splice(idx, 1) }
        else if (chosen.length < count) { chosen.push(p) }
        rebuildPicker()
      })
    })
    overlay.querySelector('#gc-picker-confirm')?.addEventListener('click', () => {
      overlay.remove()
      onConfirm(chosen)
    })
  }
  rebuildPicker()
  document.body.appendChild(overlay)
}

// ── Moteur GC paramétrique ─────────────────────────────────
const GC_ENGINE = {
  BOOST_STAT({ value=2, target='home', count=1, roles=null }, game, container, ctx) {
    const team = target === 'home' ? game.homeTeam : game.aiTeam
    const pool = Object.entries(team).flatMap(([role, players]) =>
      (!roles || roles.includes(role)) ? (players||[]).filter(p=>!p.used).map(p=>({...p,_line:role})) : [])
    if (!pool.length) { ctx.toast('Aucun joueur disponible', 'error'); return true }
    openGCPicker(pool, count, value>0?`⚡ +${value} à ${count} joueur(s)`:`💀 -${Math.abs(value)} à ${count} joueur(s)`, container, game, selected => {
      selected.forEach(s => {
        for (const r of ['GK','DEF','MIL','ATT']) {
          const p=(game.homeTeam[r]||[]).find(pp=>pp.cardId===s.cardId)
                ||(game.aiTeam[r]||[]).find(pp=>pp.cardId===s.cardId)
          if(p){p.boost=(p.boost||0)+value;break}
        }
      })
      game.log.push({text:`${value>0?'⚡':'💀'} ${Math.abs(value)>0?'+':''}${value} → ${selected.map(p=>p.name).join(', ')}`,type:'info'})
      renderGame(container, game, ctx)
    })
    return true
  },
  DEBUFF_STAT(params, game, container, ctx) {
    return GC_ENGINE.BOOST_STAT({...params, value:-Math.abs(params.value||2)}, game, container, ctx)
  },
  GRAY_PLAYER({ target='opponent', count=1, roles=null }, game, container, ctx) {
    const team = target === 'opponent' ? game.aiTeam : game.homeTeam
    const pool = Object.entries(team).flatMap(([role, players]) =>
      (!roles||roles.includes(role)) ? (players||[]).filter(p=>!p.used).map(p=>({...p,_line:role})) : [])
    if (!pool.length) { ctx.toast('Aucun joueur à griser', 'error'); return true }
    openGCPicker(pool, count, `❄️ Griser ${count} joueur(s)`, container, game, selected => {
      selected.forEach(s => {
        for (const r of Object.keys(game.aiTeam).concat(Object.keys(game.homeTeam))) {
          const arr = target==='opponent'?game.aiTeam[r]:game.homeTeam[r]
          const p = (arr||[]).find(pp=>pp.cardId===s.cardId)
          if(p){p.used=true;break}
        }
      })
      game.log.push({text:`❄️ ${selected.map(p=>p.name).join(', ')} grisé(s) !`,type:'info'})
      renderGame(container, game, ctx)
    })
    return true
  },
  REVIVE_PLAYER({ count=1 }, game, container, ctx) {
    const pool = Object.entries(game.homeTeam).flatMap(([role, players]) =>
      (players||[]).filter(p=>p.used).map(p=>({...p,_line:role})))
    if (!pool.length) { ctx.toast('Aucun joueur à ressusciter', 'error'); return true }
    openGCPicker(pool, count, '💫 Ressusciter', container, game, selected => {
      selected.forEach(s => {
        for (const r of ['GK','DEF','MIL','ATT']) {
          const p=(game.homeTeam[r]||[]).find(pp=>pp.cardId===s.cardId)
          if(p){p.used=false;break}
        }
      })
      game.log.push({text:`💫 ${selected.map(p=>p.name).join(', ')} ressuscité(s) !`,type:'info'})
      renderGame(container, game, ctx)
    })
    return true
  },
  REMOVE_GOAL(_p, game, container, ctx) {
    if (game.aiScore <= 0) { ctx.toast('Aucun but adverse', 'error'); return false }
    game.aiScore--
    game.log.push({text:'🚫 But adverse retiré !',type:'info'})
    return false
  },
  ADD_GOAL_DRAW(_p, game, container, ctx) {
    game.modifiers = game.modifiers||{}
    game.modifiers.home = game.modifiers.home||{}
    game.modifiers.home.addGoalOnDraw = true
    game.log.push({text:'⚽ +1 but si duel nul activé !',type:'info'})
    return false
  },
  ADD_SUB({ count=1 }, game, container, ctx) {
    game.maxSubs += count
    game.log.push({text:`🔄 +${count} remplacement(s) débloqué(s)`,type:'info'})
    return false
  },
}

// ── useGameChanger : dispatch paramétrique ou legacy ───────
function useGameChanger(gcId, gcType, container, game, ctx) {
  if (game.usedGc.includes(gcId)) return
  game.usedGc.push(gcId)

  // Chercher la définition DB en cache
  const def = (game.gcDefs||[]).find(d => d.name === gcType)

  let needsRerender = false

  if (def?.effect_type && def.effect_type !== 'CUSTOM') {
    // ── Système paramétrique ──
    const handler = GC_ENGINE[def.effect_type]
    if (handler) {
      const async = handler(def.effect_params || {}, game, container, ctx)
      if (!async) needsRerender = true  // effet synchrone → rerendre
    } else {
      ctx.toast(`Effet "${def.effect_type}" non implémenté`, 'error')
      needsRerender = true
    }
  } else {
    // ── Legacy hardcodé (fallback) ──
    switch (gcType) {
      case 'Double attaque': game.modifiers.home.doubleAttack=true; game.log.push({text:'⚡ Double attaque activée !',type:'info'}); break
      case 'Bouclier': game.modifiers.home.shield=true; game.log.push({text:'🛡️ Bouclier activé !',type:'info'}); break
      case 'Ressusciter': {
        const pool=Object.entries(game.homeTeam).flatMap(([r,ps])=>(ps||[]).filter(p=>p.used).map(p=>({...p,_line:r})))
        if(pool.length){pool[0].used=false;game.log.push({text:`💫 ${pool[0].name} ressuscité !`,type:'info'})}
        else game.log.push({text:'💫 Aucun joueur à ressusciter',type:'info'})
        break
      }
      case 'Vol de note': game.modifiers.ai.stolenNote=(game.modifiers.ai.stolenNote||0)+1; game.log.push({text:'🎯 -1 à la prochaine attaque IA',type:'info'}); break
      case 'Gel': {
        const ai=[...(game.aiTeam.ATT||[]),...(game.aiTeam.MIL||[])].filter(p=>!p.used)
        if(ai.length){const b=ai.sort((a,b2)=>getNoteForRole(b2,'ATT')-getNoteForRole(a,'ATT'))[0];b.used=true;game.log.push({text:`❄️ ${b.name} (IA) gelé !`,type:'info'})}
        break
      }
      case 'Remplacement+': game.maxSubs++; game.log.push({text:'🔄 +1 remplacement débloqué',type:'info'}); break
    }
    needsRerender = true
  }

  supabase.from('cards').delete().eq('id', gcId).then(()=>{})
  if (needsRerender) renderGame(container, game, ctx)
}

// ── BOOST ─────────────────────────────────────────────────
function useBoost(container, game, ctx) {
  const allPlayers = Object.values(game.homeTeam).flat().filter(p => !p.used)
  if (!allPlayers.length) { ctx.toast('Aucun joueur actif à booster', 'error'); return }

  ctx.openModal('⚡ Utiliser le Boost',
    `<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${game.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${allPlayers.map(p => `
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${JOB_COLORS[p.job]||'#888'};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${getNoteForRole(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${game.boostCard.value}</div>
        </div>`).join('')}
    </div>`,
    `<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`
  )

  document.querySelectorAll('.player-boost-opt').forEach(el => {
    el.addEventListener('click', () => {
      const cardId = el.dataset.cardId
      for (const role of ['GK','DEF','MIL','ATT']) {
        const p = (game.homeTeam[role]||[]).find(pp => pp.cardId === cardId)
        if (p) {
          p.boost = (p.boost||0) + game.boostCard.value
          game.log.push({ text:`⚡ Boost +${game.boostCard.value} appliqué à ${p.name}`, type:'info' })
          break
        }
      }
      game.boostUsed = true
      ctx.closeModal()
      renderGame(container, game, ctx)
    })
  })
}


// ── ANIMATION BUT ─────────────────────────────────────────
function showGoalAnimation(miniPlayers, homeScore, aiScore, isHome, callback) {
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer'
  const fireworks = Array.from({length:10},(_,i)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${i%2===0?'A':'B'} ${0.7+Math.random()*0.7}s ease ${Math.random()*0.9}s both;opacity:0">
      ${['✨','🌟','⭐','💥','🎇','🎆','🔥','🌈'][i%8]}
    </div>`).join('')
  overlay.innerHTML = `
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${fireworks}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${isHome ? 'BUT !' : 'BUT IA !'}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${homeScore} – ${aiScore}
  </div>
  ${miniPlayers?.length ? `
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${miniPlayers.map(p=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${JOB_COLORS[p.job]||'#555'};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${p.portrait?`<img src="${p.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:''}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(p.name||'').slice(0,8)}</div>
    </div>`).join('')}
  </div>` : ''}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`
  document.body.appendChild(overlay)
  let goalDismissed = false
  const goalDismiss = () => {
    if (goalDismissed) return
    goalDismissed = true
    overlay.remove()
    setTimeout(() => callback(), 50)
  }
  overlay.addEventListener('click', goalDismiss)
  setTimeout(goalDismiss, 3500)
}

// ── FIN DE MATCH ──────────────────────────────────────────
async function finishMatch(container, game, ctx) {
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  game.phase = 'finished'
  const { state } = ctx
  const isWin  = game.homeScore > game.aiScore
  const isDraw = game.homeScore === game.aiScore
  const result  = isWin?'victoire':isDraw?'nul':'defaite'
  const rewards = getRewards(game.mode, result)

  if (game.matchId) {
    await supabase.from('matches').update({
      status:'finished', home_score:game.homeScore, away_score:game.aiScore,
      winner_id: isWin?state.profile.id:null,
      home_credits_reward:rewards, played_at:new Date().toISOString(),
    }).eq('id', game.matchId)
  }

  const updates = { credits:(state.profile.credits||0)+rewards, matches_played:(state.profile.matches_played||0)+1 }
  if (isWin) updates.wins=(state.profile.wins||0)+1
  else if (isDraw) updates.draws=(state.profile.draws||0)+1
  else updates.losses=(state.profile.losses||0)+1

  await supabase.from('users').update(updates).eq('id', state.profile.id)
  await ctx.refreshProfile()

  const overlay = document.createElement('div')
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000'
  overlay.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${isWin?'🏆':isDraw?'🤝':'😔'}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${isWin?'Victoire !':isDraw?'Match nul':'Défaite'}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${game.homeScore} – ${game.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${rewards.toLocaleString('fr')} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`
  document.body.appendChild(overlay)
  document.getElementById('res-home')?.addEventListener('click',()=>{overlay.remove();_showBottomNav(container);ctx.navigate('home')})
  document.getElementById('res-replay')?.addEventListener('click',()=>{overlay.remove();_showBottomNav(container);ctx.navigate('match',{matchMode:game.mode})})
}

function showAITeam(game, ctx) {
  ctx.openModal('Équipe adverse (IA)',
    `<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${buildTeamSVG(game.aiTeam, game.formation, null, [], 300, 300)}
    </div>`,
    `<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`
  )
}
