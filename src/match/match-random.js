import { supabase } from '../lib/supabase.js'
import {
  GC_DEFS, getNoteForRole, calcAttack, calcDefense,
  calcMidfieldDuel, resolveDuel, aiSelectPlayers, getRewards
} from './game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, linkColor, getActiveLinks } from './formation-links.js'
import {
  showMsg, getPortrait, playerFromCard, getColsForLine, buildTeam, rollBoost,
  _hideBottomNav, _showBottomNav, renderDeckSelect, showGCSelection,
  getClubLogo, renderMiniCardHTML, renderCardRow, flagImgUrl, countryFlag,
  buildTeamSVG, renderTeam, renderMiniPlayer, loadMatchSetup,
} from './match-shared.js'

// ═══════════════════════════════════════════════════════════
// match-random.js — Match PvP (Match Random) uniquement.
// Le rendu (terrain, header, GC, boost, historique) vient de match-shared.js,
// donc il est garanti visuellement identique à match-ia.js.
// Seule la logique de tour (adversaire humain via Supabase Realtime) est ici.
// ═══════════════════════════════════════════════════════════

// ── Point d'entrée public ──────────────────────────────────
export async function renderMatchRandom(container, ctx) {
  const { state } = ctx
  const matchMode = 'random'

  await loadMatchSetup(container, ctx, matchMode, ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs }) => {
    const startRandom = (selectedGC) => {
      showMatchmakingSearch(container, ctx, deckId, formation, starters, subsRaw, selectedGC, gcDefs || [])
    }
    if (!gcCardsEnriched.length) { startRandom([]); return }
    showGCSelection(container, gcCardsEnriched, startRandom)
  })
}

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
    // Re-piocher les joueurs À JOUR (boost inclus) depuis l'équipe : selected_*
    // contient des copies figées à la sélection, sans un boost appliqué après.
    const selected = (gameState['selected_'+myRole]||[]).map(s => {
      const live = (gameState[myRole+'Team'][s._role]||[]).find(x => x.cardId === s.cardId) || s
      return { ...live, _line: s._role }
    })
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
    // Re-piocher les joueurs À JOUR (boost inclus) depuis l'équipe.
    const selected = (gameState['selected_'+myRole]||[]).map(s => {
      const live = (gameState[myRole+'Team'][s._role]||[]).find(x => x.cardId === s.cardId) || s
      return { ...live, _line: s._role }
    })
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

