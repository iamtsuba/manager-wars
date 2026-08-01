import { supabase } from '../lib/supabase.js'
import { computeGlicko2 } from '../ranked/glicko2.js'
import { hideV2ChromeNow } from '../home/home2.js'
import { renderPlayerCard } from '../components/player-card.js'
import {
  histPlayer as _histPlayer, withStadBonus, renderLogEntry,
  renderMatchField, showGoalAnimation, showSubAnimation, showGameToast,
  renderOpponentReveal, renderMidfieldDuel, renderDuelResult,
  svgW, svgH,
  milScore, milLinks, renderMilRow,
} from './match-engine.js'
import {
  GC_DEFS, getNoteForRole, calcAttack, calcDefense,
  calcMidfieldDuel, resolveDuel, aiSelectPlayers, getRewards
} from './game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, linkColor, getActiveLinks } from './formation-links.js'
import { renderGCCard } from '../components/special-cards.js'
import { stopBGM, playBGM, playUrgentSound, stopUrgentSound } from '../lib/sound.js'
import {
  showMsg, getPortrait, playerFromCard, getColsForLine, buildTeam, rollBoost, applyStadiumBonus, applyStadiumBonusToSubs,
  _hideBottomNav, _showBottomNav, renderDeckSelect, showGCSelection,
  getClubLogo, renderMiniCardHTML, renderCardRow, flagImgUrl, countryFlag,
  buildTeamSVG, renderTeam, renderMiniPlayer, loadMatchSetup, FORMATIONS, JOB_COLORS,
} from './match-shared.js'

// ═══════════════════════════════════════════════════════════
// match-ia.js — Match vs IA uniquement.
// Le rendu (terrain, header, GC, boost, historique) vient de match-shared.js,
// donc il est garanti visuellement identique à match-random.js.
// Seule la logique de tour (IA qui joue automatiquement) est ici.
// ═══════════════════════════════════════════════════════════

// ── Point d'entrée public ──────────────────────────────────
export async function renderMatchIA(container, ctx) {
  const { state } = ctx
  const params = state.params || {}
  const matchMode  = params.matchMode || 'vs_ai_easy'
  const isSolo     = matchMode === 'solo'
  const isRankedAI = matchMode === 'ranked_ai'
  const soloLevel  = params.soloLevel || 1
  const difficulty = matchMode.replace('vs_ai_','')
  const mode       = matchMode

  // Mode Solo : configuration du niveau (note visée, liens, stade) définie dans l'admin
  let soloLevelConfig = null
  if (isSolo) {
    const { data: cfg } = await supabase.from('solo_levels').select('*').eq('level_number', soloLevel).maybeSingle()
    soloLevelConfig = cfg || { level_number: soloLevel, target_note_avg: 10, nb_liens_jaune: 2, nb_liens_vert: 1, nb_joueurs_stade: 2, reward_credits: 500 }
  }

  // Mode Ranked sans adversaire réel trouvé (fallback après 20s) : l'IA est
  // calibrée sur la force RÉELLE de l'équipe du joueur (note totale ±10%,
  // même nombre de liens jaunes/verts) — calculé plus bas une fois homeTeam construit.
  const rankedAIData = params.rankedData || null

  // Fallback IA Ranked : le deck et les GC ont déjà été choisis lors de la
  // recherche d'adversaire réel — on ne les redemande pas, on lance direct.
  const presetSetup = params.presetSetup || null

  async function runMatchSetupCallback({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs, stadiumDef }) {
    try {
      let homeTeam = buildTeam(starters, formation)
      if (stadiumDef) {
        homeTeam = applyStadiumBonus(homeTeam, stadiumDef)
        applyStadiumBonusToSubs(subsRaw, stadiumDef)
      }

      // Fallback IA Ranked : calibrer l'IA sur la force RÉELLE de mon équipe.
      // L'IA tire au sort un niveau de difficulté : -10%, à égalité, ou +20%.
      let rankedAIConfig = null
      if (isRankedAI) {
        // Force réelle = notes des 11 titulaires + bonus stade effectif (+10
        // par joueur concerné). Sans ce bonus, l'IA était calibrée sous la
        // vraie puissance de l'équipe adverse.
        const myTotalNote = sumTeamNote(homeTeam) + countStadiumBoosted(homeTeam) * 10
        const { jaune, vert } = countTeamLinks(homeTeam, formation)
        const VARIANCES = [0.9, 1.0, 1.2]
        const variance  = VARIANCES[Math.floor(Math.random() * VARIANCES.length)]
        const targetTotal = Math.max(11, Math.round(myTotalNote * variance))
        rankedAIConfig = {
          // /11 (les titulaires) et non /16 : le total d'équipe ne compte que
          // les 11 sur le terrain, diviser par 16 sous-calibrait l'IA de ~31%.
          target_note_avg:   Math.max(1, Math.round(targetTotal / 11)),
          target_total_note: targetTotal,
          nb_liens_jaune:    jaune,
          nb_liens_vert:     vert,
          nb_joueurs_stade:  stadiumDef ? 3 : 0,
          _variance:         variance,
        }
      }

      const aiResult = isSolo
        ? await generateAITeamForLevel(formation, soloLevelConfig)
        : isRankedAI
        ? await generateAITeamForLevel(formation, rankedAIConfig)
        : await generateAITeam(formation, difficulty)
      const aiTeam   = aiResult.lines || aiResult  // compatibilité fallback fake

      const launchMatch = async (selectedGC) => {
        try {
          // La contrainte matches_mode_check n'autorise pas 'vs_ai_club' ni 'solo' —
          // la valeur attendue en base pour ces paliers IA est 'club'.
          // On ne change QUE la valeur insérée ; `mode`/`game.mode` restent
          // 'vs_ai_club'/'solo' pour les récompenses, l'affichage et le replay.
          const dbMode = (mode === 'vs_ai_club' || mode === 'solo' || mode === 'ranked_ai') ? 'club' : mode
          const { data: match, error: matchErr } = await supabase.from('matches').insert({
            home_id: state.profile.id, away_id:null, mode: dbMode,
            home_deck_id: deckId, status:'in_progress',
          }).select().single()

          if (matchErr) {
            console.error('[MatchIA] Erreur création match:', matchErr)
            showMsg(container, '⚠️', "Impossible de créer le match (" + matchErr.message + ").", 'Retour', () => ctx.navigate('home'))
            return
          }

          // Appliquer stade IA si disponible
          const aiStadiumDef = aiResult.stadiumDef || null
          if (aiStadiumDef && aiTeam) {
            applyStadiumBonus(aiTeam, aiStadiumDef)
            applyStadiumBonusToSubs(aiResult.subs || [], aiStadiumDef)
          }
          const game = {
            gcDefs:   gcDefs || [],
            matchId:  match?.id, mode, difficulty, formation,
            isSolo, soloLevel, soloLevelConfig,
            isRankedAI, rankedAIData,
            homeTeam, aiTeam,
            homeSubs: subsRaw,
            subsUsed: 0, maxSubs: Math.min(subsRaw.length, 3),
            aiSubs: aiResult.subs || [],
            aiSubsUsed: 0, aiMaxSubs: Math.min((aiResult.subs||[]).length, 3),
            aiUsedSubIds: [],
            aiGcCards: aiResult.gcCards || [],
            aiUsedGc: [],
            aiGcTarget: aiResult.gcTarget || 2,
            aiStadiumDef,
            homeScore:0, aiScore:0,
            gcCards:  selectedGC,
            usedGc:   [],
            boostCard: null, boostUsed: false,
            phase:'midfield', attacker:null, round:0,
            selected:[], pendingAttack:null,
            log:[], modifiers:{ home:{}, ai:{} },
            clubName: state.profile.club_name || 'Vous',
          }
          showOpponentReveal(container, game, ctx)
        } catch (e) {
          console.error('[MatchIA] Exception launchMatch:', e)
          showMsg(container, '⚠️', 'Erreur au lancement du match : ' + e.message, 'Retour', () => ctx.navigate('home'))
        }
      }

      // Fallback IA Ranked : les GC ont déjà été choisis en amont (myGC) —
      // on ne redemande pas, on lance directement avec cette sélection.
      if (isRankedAI && presetSetup) { launchMatch(presetSetup.gcCardsEnriched || []); return }
      if (!gcCardsEnriched.length) { launchMatch([]); return }
      showGCSelection(container, gcCardsEnriched, launchMatch)
    } catch (e) {
      console.error('[MatchIA] Exception setup:', e)
      showMsg(container, '⚠️', 'Erreur de préparation du match : ' + e.message, 'Retour', () => ctx.navigate('home'))
    }
  }

  if (presetSetup) {
    // Deck déjà choisi (fallback IA Ranked) : on saute entièrement le sélecteur de deck
    await runMatchSetupCallback(presetSetup)
  } else {
    await loadMatchSetup(container, ctx, matchMode, runMatchSetupCallback)
  }
}

async function generateAITeam(formation, difficulty) {
  const { data: players } = await supabase
    .from('players')
    .select('id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)')
    .eq('is_active', true).limit(80)

  if (!players || players.length < 11) return { lines: generateFakeAITeam(formation), subs: [], gcCards: [], stadiumDef: null }

  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }
  const used   = new Set()

  function makePlayer(p, role, i) {
    used.add(p.id)
    return {
      cardId:'ai-'+p.id+'-'+i, id:p.id,
      firstname:p.firstname, name:p.surname_real,
      country_code:p.country_code, club_id:p.club_id,
      job:p.job, job2:p.job2,
      note_g:Number(p.note_g)||0, note_d:Number(p.note_d)||0,
      note_m:Number(p.note_m)||0, note_a:Number(p.note_a)||0,
      rarity:p.rarity, skin:p.skin, hair:p.hair, hair_length:p.hair_length, face:p.face,
      clubName:p.clubs?.encoded_name||null, clubLogo:p.clubs?.logo_url||null,
      boost:0, used:false, _line:role,
    }
  }

  for (const role of ['GK','DEF','MIL','ATT']) {
    const candidates = players.filter(p => p.job === role && !used.has(p.id))
    const others     = players.filter(p => p.job !== role && !used.has(p.id))
    const sorted     = [...candidates, ...others]
    const linePlayers = []
    for (let i = 0; i < struct[role]; i++) {
      const p = sorted[i]
      if (p) linePlayers.push(makePlayer(p, role, i))
    }
    const cols = getColsForLine(linePlayers.length)
    linePlayers.forEach((p,i) => { p._col = cols[i] })
    lines[role] = linePlayers
  }

  // Remplaçants IA (5 joueurs non encore utilisés)
  const subPool = players.filter(p => !used.has(p.id))
  const subs = subPool.slice(0, 5).map((p, i) => makePlayer(p, p.job, 100+i))

  // GC réelles IA (3 parmi les cartes actives configurées en admin)
  const { data: realGcDefs } = await supabase.from('gc_definitions').select('*').eq('is_active', true)
  const shuffledDefs = [...(realGcDefs || [])].sort(() => Math.random() - 0.5)
  const gcCards = shuffledDefs.slice(0, 3).map((def, i) => ({
    id: 'ai-gc-'+i, gc_type: def.name,
    name: def.name, icon: '⚡',
    effect_type: def.effect_type, effect_params: def.effect_params || {},
  }))

  // Stade IA : choisir un club présent dans l'équipe IA, donner +10 à ses joueurs
  const allAiPlayers = Object.values(lines).flat()
  const clubCounts = {}
  allAiPlayers.forEach(p => { if (p.club_id) clubCounts[p.club_id] = (clubCounts[p.club_id]||0)+1 })
  const topClubId = Object.entries(clubCounts).sort((a,b)=>b[1]-a[1])[0]?.[0]
  let stadiumDef = null
  if (topClubId) {
    const { data: club } = await supabase.from('clubs').select('id,encoded_name,logo_url,country_code').eq('id', topClubId).single()
    if (club) stadiumDef = { club_id: club.id, country_code: null, name: club.encoded_name + ' Stadium', club: { encoded_name: club.encoded_name, logo_url: club.logo_url } }
  }

  return { lines, subs, gcCards, stadiumDef }
}

// ── Génération d'équipe IA pilotée par la config d'un niveau Solo ──────────
// Le choix précis des cartes reste à l'IA ; ces paramètres (note globale visée,
// nb de liens jaunes/verts, nb de joueurs liés au stade) définissent seulement
// le profil global recherché — l'IA privilégie un "club coeur" pour maximiser
// les liens verts (pays+club), un groupe "même pays" pour les liens jaunes,
// et complète avec le reste du pool en visant la note moyenne demandée.
// ── Force réelle d'une équipe (pour calibrer l'IA du fallback Ranked) ──────
function sumTeamNote(team) {
  let sum = 0
  for (const role of ['GK','DEF','MIL','ATT']) {
    (team[role]||[]).forEach(p => {
      const r = p._line || role
      const note = Number(r==='GK'?p.note_g:r==='DEF'?p.note_d:r==='MIL'?p.note_m:p.note_a) || 0
      sum += note + (p.boost||0)
    })
  }
  return sum
}

function countStadiumBoosted(team) {
  let n = 0
  for (const role of ['GK','DEF','MIL','ATT']) {
    (team[role]||[]).forEach(p => { if (p?.stadiumBonus) n++ })
  }
  return n
}

function countTeamLinks(team, formation) {
  const slots = {}
  for (const role of ['GK','DEF','MIL','ATT']) {
    (team[role]||[]).forEach((p,i) => { slots[`${role}${i+1}`] = p })
  }
  const FLINKS = getActiveLinks(formation) || FORMATION_LINKS[formation] || []
  let jaune = 0, vert = 0
  for (const [posA, posB] of FLINKS) {
    const pA = slots[posA], pB = slots[posB]
    if (!pA || !pB) continue
    const lc = linkColor(pA, pB)
    if (lc === '#00ff88') vert++
    else if (lc === '#FFD700') jaune++
  }
  return { jaune, vert }
}

function mainNoteOf(p) {
  const j = p.job || 'ATT'
  return Number(j==='GK'?p.note_g : j==='DEF'?p.note_d : j==='MIL'?p.note_m : p.note_a) || 0
}

function pickClosestToAvg(pool, targetAvg, count) {
  if (count <= 0 || !pool.length) return []
  const sorted = [...pool].sort((a,b) => Math.abs(mainNoteOf(a)-targetAvg) - Math.abs(mainNoteOf(b)-targetAvg))
  return sorted.slice(0, Math.min(count, sorted.length))
}

async function generateAITeamForLevel(formation, levelConfig) {
  const targetAvg  = Number(levelConfig?.target_note_avg) || 10
  const nbJaune    = Number(levelConfig?.nb_liens_jaune) || 0
  const nbVert     = Number(levelConfig?.nb_liens_vert) || 0
  const nbStade    = Number(levelConfig?.nb_joueurs_stade) || 0

  const { data: players } = await supabase
    .from('players')
    .select('id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)')
    .eq('is_active', true).limit(300)

  if (!players || players.length < 16) return { lines: generateFakeAITeam(formation), subs: [], gcCards: [], stadiumDef: null }

  // "Club coeur" : celui avec le plus de joueurs disponibles, pour maximiser
  // les chances de liens verts (mêmes joueurs = même club ET même pays)
  const clubCounts = {}
  players.forEach(p => { if (p.club_id) clubCounts[p.club_id] = (clubCounts[p.club_id]||0) + 1 })
  const coreClubId = Object.entries(clubCounts).sort((a,b)=>b[1]-a[1])[0]?.[0] || null
  const coreClubPlayers = coreClubId ? players.filter(p => p.club_id === coreClubId) : []
  const coreCountry = coreClubPlayers[0]?.country_code || null

  // Joueurs du même pays mais d'un autre club (liens jaunes)
  const sameCountryOtherClub = coreCountry
    ? players.filter(p => p.country_code === coreCountry && p.club_id !== coreClubId)
    : []

  const nbCore        = Math.min(coreClubPlayers.length, Math.max(2, nbVert + 1), 16)
  const nbSameCountry = Math.min(sameCountryOtherClub.length, Math.max(0, nbJaune), 16 - nbCore)

  const selected  = []
  const usedIds   = new Set()
  pickClosestToAvg(coreClubPlayers, targetAvg, nbCore).forEach(p => { selected.push(p); usedIds.add(p.id) })
  pickClosestToAvg(sameCountryOtherClub, targetAvg, nbSameCountry).forEach(p => { selected.push(p); usedIds.add(p.id) })

  const remaining = Math.max(0, 16 - selected.length)
  const fillPool  = players.filter(p => !usedIds.has(p.id))
  pickClosestToAvg(fillPool, targetAvg, remaining).forEach(p => { selected.push(p); usedIds.add(p.id) })

  // Répartition dans la formation (mêmes règles que generateAITeam standard)
  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }
  const used   = new Set()

  function makePlayer(p, role, i) {
    used.add(p.id)
    return {
      cardId:'ai-'+p.id+'-'+i, id:p.id,
      firstname:p.firstname, name:p.surname_real,
      country_code:p.country_code, club_id:p.club_id,
      job:p.job, job2:p.job2,
      note_g:Number(p.note_g)||0, note_d:Number(p.note_d)||0,
      note_m:Number(p.note_m)||0, note_a:Number(p.note_a)||0,
      rarity:p.rarity, skin:p.skin, hair:p.hair, hair_length:p.hair_length, face:p.face,
      clubName:p.clubs?.encoded_name||null, clubLogo:p.clubs?.logo_url||null,
      boost:0, used:false, _line:role,
    }
  }

  for (const role of ['GK','DEF','MIL','ATT']) {
    let candidates = selected.filter(p => p.job === role && !used.has(p.id))
    // Un joueur de champ placé dans les buts a une note_g catastrophique
    // (d'où les gardiens à 4 observés). Si aucun vrai GK n'a été retenu,
    // on va en chercher un dans le pool complet.
    if (role === 'GK' && !candidates.length) {
      const realGk = players.filter(p => p.job === 'GK' && !used.has(p.id))
      if (realGk.length) candidates = pickClosestToAvg(realGk, targetAvg, 1)
    }
    const others     = selected.filter(p => p.job !== role && !used.has(p.id))
    const sorted     = [...candidates, ...others]
    const linePlayers = []
    for (let i = 0; i < struct[role]; i++) {
      const p = sorted[i]
      if (p) linePlayers.push(makePlayer(p, role, i))
    }
    const cols = getColsForLine(linePlayers.length)
    linePlayers.forEach((p,i) => { p._col = cols[i] })
    lines[role] = linePlayers
  }

  // Remplaçants (5 joueurs restants de la sélection, sinon on pioche dans le pool complet)
  let subPool = selected.filter(p => !used.has(p.id))
  if (subPool.length < 5) {
    const extra = players.filter(p => !used.has(p.id) && !subPool.some(s=>s.id===p.id))
    subPool = subPool.concat(pickClosestToAvg(extra, targetAvg, 5 - subPool.length))
  }
  const subs = subPool.slice(0, 5).map((p, i) => makePlayer(p, p.job, 100+i))

  // ── Mise à l'échelle sur la force cible ──────────────────────────
  // Les joueurs de l'IA proviennent de la table `players` : leurs notes sont
  // BRUTES, sans évolution ni bonus. Face à une collection très évoluée
  // (notes 100+), l'IA plafonnait donc structurellement, quel que soit le
  // target visé. On ajuste ici les notes du poste occupé pour atteindre
  // exactement la cible.
  const targetTotal = Number(levelConfig?.target_total_note) || 0
  if (targetTotal > 0) {
    const NOTE_KEY = { GK:'note_g', DEF:'note_d', MIL:'note_m', ATT:'note_a' }
    const onField = []
    for (const role of ['GK','DEF','MIL','ATT']) {
      (lines[role]||[]).forEach(p => onField.push({ p, key: NOTE_KEY[role] }))
    }
    const current = onField.reduce((s, o) => s + (Number(o.p[o.key]) || 0), 0)
    if (current > 0 && onField.length) {
      const factor = targetTotal / current
      onField.forEach(o => { o.p[o.key] = Math.max(1, Math.round((Number(o.p[o.key]) || 0) * factor)) })
      let diff = targetTotal - onField.reduce((s, o) => s + o.p[o.key], 0)
      let guard = 0
      while (diff !== 0 && guard++ < 500) {
        const o = onField[Math.floor(Math.random() * onField.length)]
        if (diff > 0) { o.p[o.key]++; diff-- }
        else if (o.p[o.key] > 1) { o.p[o.key]--; diff++ }
      }
      subs.forEach(s => {
        const key = NOTE_KEY[s.job] || 'note_m'
        s[key] = Math.max(1, Math.round((Number(s[key]) || 0) * factor))
      })
    }
  }

  // GC réelles (3 parmi les cartes actives configurées en admin)
  const { data: realGcDefs2 } = await supabase.from('gc_definitions').select('*').eq('is_active', true)
  const shuffledGC = [...(realGcDefs2 || [])].sort(() => Math.random() - 0.5)
  const gcCards = shuffledGC.slice(0, 3).map((def, i) => ({
    id: 'ai-gc-'+i, gc_type: def.name,
    name: def.name, icon: '⚡',
    effect_type: def.effect_type, effect_params: def.effect_params || {},
  }))

  // Stade : celui du "club coeur", pour que ~nbStade joueurs en profitent
  let stadiumDef = null
  if (nbStade > 0 && coreClubId) {
    const { data: club } = await supabase.from('clubs').select('id,encoded_name,logo_url,country_code').eq('id', coreClubId).single()
    if (club) stadiumDef = { club_id: club.id, country_code: null, name: club.encoded_name + ' Stadium', club: { encoded_name: club.encoded_name, logo_url: club.logo_url } }
  }

  // Nombre de GC que l'IA utilisera réellement pendant le match (1 à 3)
  const gcTarget = 1 + Math.floor(Math.random() * 3)

  return { lines, subs, gcCards, stadiumDef, gcTarget }
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

function showOpponentReveal(container, game, ctx) {
  playBGM(`${import.meta.env.BASE_URL}sounds/match-opening.mp3`, 0.3)
  const stadSVG = `<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;inset:-6px;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.6) 0%,transparent 68%);pointer-events:none"></div>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;width:22px;height:22px;display:block">
      <ellipse cx="16" cy="29.5" rx="12" ry="2.5" fill="#999" opacity="0.35"/>
      <ellipse cx="16" cy="19" rx="13" ry="9" fill="#3a7bbf"/>
      <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="#4a8fd4"/>
      <ellipse cx="16" cy="14" rx="7.5" ry="3" fill="#2ea44f"/>
      <line x1="6" y1="11" x2="4" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="11" y1="9.5" x2="11" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="21" y1="9.5" x2="21" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="26" y1="11" x2="28" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <rect x="14" y="22" width="4" height="5" rx="1" fill="#1a4a80"/>
      <line x1="9" y1="6" x2="9" y2="13" stroke="#333" stroke-width="1.3"/>
      <polygon points="9,6 14.5,8.5 9,11" fill="#FFD700"/>
      <line x1="23" y1="6" x2="23" y2="13" stroke="#333" stroke-width="1.3"/>
      <polygon points="23,6 17.5,8.5 23,11" fill="#FFD700"/>
      <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
      <ellipse cx="16" cy="19" rx="13" ry="9" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    </svg>
  </div>`

  container.innerHTML = `
  <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">
    <div style="flex-shrink:0;padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center">
      <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${game.isSolo ? `SOLO — NIVEAU ${game.soloLevel}` : game.isRankedAI ? 'RANKED (IA)' : `IA (${game.difficulty.toUpperCase()})`}</div>
    </div>
    ${game.aiStadiumDef ? `
    <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-bottom:1px solid rgba(30,120,255,0.45);flex-shrink:0">
      ${stadSVG}
      <span style="font-size:12px;font-weight:700">${game.aiStadiumDef.name}</span>
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${game.aiStadiumDef.club?.encoded_name||game.aiStadiumDef.country_code||''}</span>
    </div>` : ''}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`

  requestAnimationFrame(() => requestAnimationFrame(() => {
    const wrap = container.querySelector('.opponent-preview-wrap')
    const zone = container.querySelector('#opponent-swipe-zone')
    if (!wrap || !zone) return
    const isPC = zone.clientWidth >= 900
    // Strictement borné à la zone pour ne pas dépasser la page
    const availH = Math.max(200, zone.clientHeight - (isPC ? 8 : 40))
    const availW = Math.max(200, zone.clientWidth - (isPC ? 8 : 16))
    const mobilePad = isPC ? null : Math.round(Math.max(44, Math.round(availW * 0.168)) * 0.55)
    wrap.innerHTML = renderTeam(game.aiTeam, game.formation, null, [], availW, availH, [], mobilePad)
    wrap.style.cssText = `width:${availW}px;height:${availH}px;overflow:hidden;flex-shrink:0`
    const svg = wrap.querySelector('svg')
    if (svg) {
      svg.style.cssText = 'display:block;width:100%;height:100%'
      svg.setAttribute('preserveAspectRatio', isPC ? 'xMidYMid meet' : 'none')
    }
  }))

  setTimeout(() => showMidfieldAnimation(container, game, ctx), 5000)
}


// histPlayer importé depuis match-engine.js
const histPlayer = (p) => _histPlayer(p)

function showMidfieldAnimation(container, game, ctx) {
  const homeMils = game.homeTeam.MIL || []
  const aiMils   = game.aiTeam.MIL   || []
  const homeStad = game.stadiumDef || null
  const aiStad   = game.aiStadiumDef || null

  function milNoteWithBonus(p, stadDef) {
    // note_m contient DEJA l'evo via playerFromCard → pas de double comptage
    const base = getNoteForRole(p, 'MIL')  // = p.note_m + p.boost
    const stadBonus = (p.stadiumBonus || (stadDef && (
      (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
      (stadDef.country_code && p.country_code === stadDef.country_code)
    ))) ? 10 : 0
    return base + stadBonus
  }


  const homeTotal = milScore(homeMils, homeStad) + milLinks(homeMils)
  const aiTotal   = milScore(aiMils, aiStad)     + milLinks(aiMils)
  const homeWins  = homeTotal >= aiTotal


  container.innerHTML = `
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:clamp(6px,1.5vh,20px);padding:clamp(8px,1.5vw,24px);background:#0a3d1e">
    <style>
      @keyframes duelPulse { 0%{transform:scale(1)} 50%{transform:scale(1.18)} 100%{transform:scale(1)} }
      @keyframes duelGlow { 0%,100%{text-shadow:0 0 12px rgba(255,215,0,0.6)} 50%{text-shadow:0 0 28px rgba(255,215,0,0.95)} }
      @keyframes vsFlash { 0%{opacity:0;transform:scale(2)} 60%{opacity:1;transform:scale(0.9)} 100%{opacity:1;transform:scale(1)} }
      @keyframes winnerSlam { 0%{transform:scale(1)} 35%{transform:translateY(-14px) scale(1.05)} 70%{transform:translateY(10px) scale(1.12,0.92)} 100%{transform:translateY(0) scale(1)} }
      @keyframes crushSquash { 0%{transform:scaleY(1);opacity:1} 55%{transform:scaleY(0.1) translateY(8px);opacity:.5} 100%{transform:scaleY(0);opacity:0} }
      @keyframes shockwave { 0%{transform:translateX(-50%) scale(0.2);opacity:.9} 100%{transform:translateX(-50%) scale(2.4);opacity:0} }
      @keyframes boostFlipIn { 0%{transform:perspective(600px) rotateY(90deg) scale(0.6);opacity:0} 60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1} 100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    </style>
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${renderMilRow(homeMils, game.clubName, '#D4A017', 'home', homeStad)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${renderMilRow(aiMils, 'IA', '#bb2020', 'ai', aiStad)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`

  // ── Séquence d'animation ──────────────────────────────────
  const animate = () => {
    const reveal = (sel, delay) => container.querySelectorAll(sel).forEach((el, i) => {
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0) scale(1)' }, delay + i*90)
    })
    // 1) Cartes domicile puis IA (en cascade)
    reveal('.duel-card-home', 150)
    reveal('.duel-card-ai', 500)
    // 2) Liens qui s'illuminent
    setTimeout(() => container.querySelectorAll('.duel-link').forEach((el,i)=>{
      setTimeout(()=>{ el.style.opacity='1' }, i*70)
    }), 900)
    // 3) VS + lignes de score
    setTimeout(() => {
      const vs = container.querySelector('#vs-label')
      if (vs) { vs.style.opacity='1'; vs.style.animation='vsFlash .5s ease' }
      container.querySelectorAll('.duel-score-line').forEach(el=>el.style.opacity='1')
    }, 1250)
    // 4) Comptage animé des scores
    setTimeout(() => {
      countUp('score-home', homeTotal, 800)
      countUp('score-ai', aiTotal, 800)
    }, 1500)
  }
  function countUp(id, target, dur) {
    const el = document.getElementById(id)
    if (!el) return
    const t0 = performance.now()
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur)
      el.textContent = Math.round(target * (1 - Math.pow(1-k, 3)))
      if (k < 1) requestAnimationFrame(step)
      else el.textContent = target
    }
    requestAnimationFrame(step)
  }
  requestAnimationFrame(animate)

  // ── Révélation vainqueur + écrasement + boost + bouton (inline) ──
  game.attacker = homeWins ? 'home' : 'ai'
  const boostValue = homeWins ? rollBoost() : null
  if (homeWins) game.boostCard = { value: boostValue }
  game.log.push({
    type: 'duel',
    title: 'Milieu de Terrain',
    homePlayers: homeMils.map(p => histPlayer(p)),
    aiPlayers:   aiMils.map(p   => histPlayer(p)),
    homeTotal, aiTotal,
    text: `Duel milieu : ${game.clubName} ${homeTotal} – ${aiTotal} IA → ${homeWins ? game.clubName+' attaque' : 'IA attaque'}`,
  })

  const startMatch = () => {
    game.phase = game.attacker === 'home' ? 'attack' : 'ai-attack'
    renderGame(container, game, ctx)
    if (game.attacker === 'ai') setTimeout(() => aiTurn(container, game, ctx), 800)
  }

  setTimeout(() => {
    const elHome = document.getElementById('score-home')
    const elAi   = document.getElementById('score-ai')
    const winRow  = document.getElementById(homeWins ? 'duel-row-home' : 'duel-row-ai')
    const loseRow = document.getElementById(homeWins ? 'duel-row-ai' : 'duel-row-home')
    const elWin = homeWins ? elHome : elAi
    const elLose = homeWins ? elAi : elHome

    // 1) Le score du vainqueur grossit
    if (elWin) {
      elWin.style.fontSize = '80px'
      elWin.style.color = homeWins ? '#FFD700' : '#ff6b6b'
      elWin.style.animation = 'duelPulse .5s ease' + (homeWins ? ', duelGlow 1.5s ease infinite .5s' : '')
    }
    if (elLose) elLose.style.opacity = '0.25'

    // 2) Écrasement : le vainqueur slam (sur place), le perdant s'aplatit
    setTimeout(() => {
      if (winRow) {
        winRow.style.transformOrigin = 'center'
        winRow.style.animation = 'winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards'
        winRow.style.zIndex = '5'
      }
      // impact : onde de choc + écrasement du perdant + vibration
      setTimeout(() => {
        const shock = document.getElementById('duel-shock')
        if (shock) {
          const r = (loseRow||winRow)?.getBoundingClientRect()
          const sr = container.querySelector('.match-screen').getBoundingClientRect()
          if (r) { shock.style.top = (r.top - sr.top + r.height/2) + 'px' }
          shock.style.animation = 'shockwave .5s ease-out forwards'
        }
        if (loseRow) {
          loseRow.style.transformOrigin = 'center'
          loseRow.style.animation = 'crushSquash .45s ease-in forwards'
        }
        if (navigator.vibrate) navigator.vibrate([40, 30, 60])
      }, 320)

      // 3) Révélation de l'overlay centré (boost + bouton) — toujours visible
      setTimeout(() => {
        const fin = document.getElementById('duel-finale')
        if (!fin) return
        fin.innerHTML = `
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${homeWins ? `⚽ ${game.clubName}<br>gagne le milieu et attaque !` : `😔 L'IA gagne l'engagement<br>et attaque !`}
          </div>
          ${homeWins ? `
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${boostValue}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>` : ''}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`
        fin.style.transition = 'opacity .45s ease'
        fin.style.opacity = '1'
        fin.style.pointerEvents = 'auto'
        document.getElementById('start-match-btn')?.addEventListener('click', startMatch)
      }, 600)
    }, 700)
  }, 2800)
}

// renderLogEntry importé depuis match-engine.js

function renderGame(container, game, ctx) {
  const selectedIds = game.selected.map(s => s.cardId)
  const usedSubIds  = game.usedSubIds || []
  const availSubs   = game.homeSubs.filter(s => !usedSubIds.includes(s.cardId))
  const grayedPlayers = Object.values(game.homeTeam).flat().filter(p => p.used)
  const canSub = grayedPlayers.length > 0 && availSubs.length > 0 && game.subsUsed < game.maxSubs

  // Règle DEF/GK (3 paliers) :
  //  1. DEF attaque (note=1) si l'IA n'a plus AUCUN joueur.
  //  2. GK attaque (note=1) si l'IA n'a plus personne ET que je n'ai moi-même
  //     plus que lui (dernier recours absolu).
  //  3. Blocage mutuel : si NI moi NI l'IA n'avons plus de MIL/ATT (mais qu'il
  //     reste des joueurs des deux côtés), tous mes DEF/GK deviennent
  //     attaquables en note=1 — sinon le match resterait bloqué indéfiniment.
  const homeMilAtt = [...(game.homeTeam.MIL||[]),...(game.homeTeam.ATT||[])].filter(p=>!p.used)
  const aiMilAtt   = [...(game.aiTeam.MIL||[]),...(game.aiTeam.ATT||[])].filter(p=>!p.used)
  const aiIsEmpty  = isTeamEmpty(game.aiTeam)
  const mutualDeadlock = homeMilAtt.length===0 && aiMilAtt.length===0 && !aiIsEmpty
  const unusedDef = (game.homeTeam.DEF||[]).filter(p=>!p.used)
  const unusedGk  = (game.homeTeam.GK||[]).filter(p=>!p.used)
  let extraSelectableIds = []
  if (game.phase==='attack' && homeMilAtt.length===0) {
    if (aiIsEmpty) {
      extraSelectableIds = unusedDef.map(p=>p.cardId)
      if (unusedDef.length===0) extraSelectableIds = extraSelectableIds.concat(unusedGk.map(p=>p.cardId))
    } else if (mutualDeadlock) {
      extraSelectableIds = [...unusedDef, ...unusedGk].map(p=>p.cardId)
    }
  }

  // Dernière action
  const lastLog  = game.log[game.log.length - 1]
  const isAITurn = game.phase === 'ai-attack' || game.phase === 'ai-defense'
  const isAttack = game.phase === 'attack'
  const isDefense = game.phase === 'defense'
  const isFinished = game.phase === 'finished'

  // Joueur bloqué : phase attack, aucun MIL/ATT/DEF/GK dispo, plus de remplacements possibles
  const availSubsNowRender = (game.homeSubs||[]).filter(s => !(game.usedSubIds||[]).includes(s.cardId))
  const canSubNowRender = availSubsNowRender.length > 0 && game.subsUsed < game.maxSubs
  const isBlocked = isAttack && homeMilAtt.length === 0 && extraSelectableIds.length === 0 && !canSubNowRender

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

  <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">

    <!-- SCORE BAR -->
    <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
      <button id="match-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${game.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${game.homeScore} – ${game.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">${game.isSolo ? `SOLO — NIVEAU ${game.soloLevel}` : game.isRankedAI ? 'RANKED (IA)' : `IA (${game.difficulty.toUpperCase()})`}</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
      ${(()=>{
        // Attaque IA en cours → panel visuel rouge + aperçu live de MA défense en cours de sélection
        if (game.phase === 'defense' && game.pendingAttack) {
          const atk = game.pendingAttack
          let livePreview = ''
          if (game.selected.length > 0) {
            const selectedLive = game.selected.map(s => {
              const live = (game.homeTeam[s._role]||[]).find(x => x.cardId === s.cardId) || s
              return { ...live, _line: s._role }
            })
            const calc = calcDefense(selectedLive, game.modifiers.home, game.formation)
            livePreview = `<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${game.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${renderCardRow(selectedLive.map(p=>({...p,used:false})), '#3a7bd5', calc.total, 'defense', game.formation)}</div>
            </div>`
          }
          return `<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${renderCardRow((atk.players||[]).map(p=>({...p,used:false})), '#ff6b6b', atk.total, 'attack', game.formation)}</div>
            ${livePreview}
          </div>`
        }
        if (game.phase === 'ai-defense' && game.pendingAttack) {
          const atk = game.pendingAttack
          return `<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${renderCardRow((atk.players||[]).map(p=>({...p,used:false})), '#00ff88', atk.total, 'attack', game.formation)}</div>
          </div>`
        }
        // Phase attaque, pas encore confirmé → aperçu live de MA sélection
        if (game.phase === 'attack' && game.selected.length > 0) {
          const selectedLive = game.selected.map(s => {
            const live = (game.homeTeam[s._role]||[]).find(x => x.cardId === s.cardId) || s
            const isDefAttacking = ['GK','DEF'].includes(s._role)
            return { ...live, _line: s._role, ...(isDefAttacking ? { note_a: Math.max(1, Number(live.note_a)||0) } : {}) }
          })
          const calc = calcAttack(selectedLive, game.modifiers.home, game.formation)
          return `<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${game.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${renderCardRow(selectedLive.map(p=>({...p,used:false})), '#FFD700', calc.total, 'attack', game.formation)}</div>
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
        const name   = def?.name || gc.gc_type
        const effect = def?.effect || GC_DEFS[gc.gc_type]?.desc || ''
        const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
        const icon   = GC_DEFS[gc.gc_type]?.icon || '⚡'
        return `<div class="gc-mini" data-gc-id="${gc.id}" data-gc-type="${gc.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${renderGCCard(name, imgUrl, icon, effect, { width: w })}
        </div>`
      }

      // ─── Carte Boost : MÊME boîte (box-sizing:border-box + dimensions identiques
      // à gcCardDesign) pour garantir un alignement pixel-perfect avec les cartes GC ───
      const boostCardDesign = (w, h) => `<div id="boost-card"
          style="box-sizing:border-box;width:${w}px;height:${h}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(h*0.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(h*0.2)}px">⚡</div>
            <div style="font-size:${Math.round(h*0.09)}px;color:#000;font-weight:900">+${game.boostCard?.value}</div>
          </div>`

      const gcMiniPC = (gc, isBoost) => isBoost ? boostCardDesign(95, 162) : gcCardDesign(gc, 95, 162)
      const gcMiniMob = (gc, isBoost) => isBoost ? boostCardDesign(53, 90) : gcCardDesign(gc, 53, 90)

      // ─── Bouton action ────────────────────────────────────
      const btnStyle = _pc
        ? 'padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%'
        : 'padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%'

      const actionBtn = isFinished
        ? `<button id="btn-results" style="${btnStyle};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`
        : isAITurn
        ? `<div style="${btnStyle};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`
        : isBlocked
        ? `<button id="btn-pass" style="${btnStyle};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`
        : isAttack
        ? `<button id="btn-action" style="${btnStyle};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${game.selected.length===0?'disabled':''}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`
        : isDefense
        ? `<button id="btn-action" style="${btnStyle};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${game.selected.length===0?'disabled':''}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`
        : `<div style="${btnStyle};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`

      const counter = (isAttack||isDefense) ? `<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${game.selected.length}/3 sélectionné(s)</div>` : ''

      // ─── Subs column (commun) ─────────────────────────────
      const subsHTML = `<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_pc?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${availSubs.length===0
          ? `<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>`
          : availSubs.map(s=>`<div class="sub-btn-col" data-sub-id="${s.cardId}" style="cursor:pointer;flex-shrink:0">${renderMiniCardHTML(s,76,100)}</div>`).join('')}
      </div>`

      // ─── Terrain ──────────────────────────────────────────
      const terrainHTML = `<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${renderTeam(game.homeTeam,game.formation,game.phase,selectedIds,_pc?1300:svgW(),_pc?600:svgH(),extraSelectableIds)}
        </div>
      </div>`

      if (_pc) {
        // ══ LAYOUT PC : subs | terrain+btn | colonne droite GC ══
        return `
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${subsHTML}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${terrainHTML}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${actionBtn}${counter}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${activeGCs.map(gc=>gcMiniPC(gc,false)).join('')}
            ${boostAvail?gcMiniPC(null,true):''}
          </div>
        </div>`
      } else {
        // ══ LAYOUT MOBILE : terrain (flex) + barre d'action ÉPINGLÉE en bas ══
        // La barre d'action est en position:absolute;bottom:0 → ancrée au bas
        // de l'écran de match (lui-même fixed = bas de la fenêtre visible).
        // Elle NE PEUT PAS être coupée, quoi qu'il arrive au-dessus.
        return `
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${renderTeam(game.homeTeam,game.formation,game.phase,selectedIds,_pc?1300:svgW(),_pc?600:svgH(),extraSelectableIds)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${activeGCs.map(gc=>gcMiniMob(gc,false)).join('')}
            ${boostAvail?gcMiniMob(null,true):''}
            <div id="sub-btn-main" style="cursor:${canSub?'pointer':'default'};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${canSub?'rgba(255,255,255,0.5)':'rgba(255,255,255,0.15)'};background:${canSub?'rgba(60,60,60,0.9)':'rgba(40,40,40,0.5)'};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${canSub?1:0.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${availSubs.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${game.subsUsed}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${game.subsUsed}/${game.maxSubs} rempl.</div>
            </div>
          </div>
          <div>${actionBtn}${counter}</div>
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
              const homeWon = (e.homeTotal ?? 0) >= (e.aiTotal ?? 0)
              return `<div style="padding:8px;border-radius:8px;background:${isGoal?'rgba(212,160,23,0.12)':'rgba(255,255,255,0.04)'};border-left:3px solid ${accent};margin-bottom:4px">
                <div style="font-size:9px;color:${accent};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${side}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${e.aiPlayers?.length ? `<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${renderCardRow(e.aiPlayers,'#ff6b6b',undefined,undefined,game.formation)}</div>` : '<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${!homeWon?'#22c55e':'#e03030'}">${e.aiTotal ?? '–'}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${homeWon?'#22c55e':'#e03030'}">${e.homeTotal ?? '–'}</span>
                  </div>
                  ${e.homePlayers?.length ? `<div style="flex:1;display:flex;justify-content:flex-start">${renderCardRow(e.homePlayers,'rgba(255,255,255,0.7)',undefined,undefined,game.formation)}</div>` : '<div style="flex:1"></div>'}
                </div>
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

  // ── Dimensionner l'écran de match exactement (hauteur réelle visible) ─
  // IMPORTANT : doit être RÉAPPLIQUÉ quand le viewport change (barre d'URL
  // mobile qui apparaît/disparaît), sinon l'écran garde la hauteur du moment
  // du rendu (ex: 749px barre masquée) alors que la zone visible rétrécit
  // (ex: 693px barre visible) → le bas (bouton) passe sous l'écran.
  function updateMatchHeight() {
    const ms = container.querySelector('.match-screen')
    if (!ms) return
    const vh = Math.round((window.visualViewport && window.visualViewport.height) || window.innerHeight)
    ms.style.bottom = 'auto'
    ms.style.height = vh + 'px'
    ms.style.minHeight = vh + 'px'
    ms.style.maxHeight = vh + 'px'
    ms.style.overflow = 'hidden'
    const bar = container.querySelector('#mobile-action-bar')
    const play = container.querySelector('#mobile-play-area')
    if (bar && play) play.style.paddingBottom = bar.offsetHeight + 'px'
  }
  updateMatchHeight()
  // Réappliquer après stabilisation de la barre d'URL + à chaque resize viewport
  setTimeout(updateMatchHeight, 120)
  setTimeout(updateMatchHeight, 400)
  setTimeout(updateMatchHeight, 1000)
  if (!game._vvBound) {
    game._vvBound = true
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateMatchHeight)
      window.visualViewport.addEventListener('scroll', updateMatchHeight)
    }
    window.addEventListener('resize', updateMatchHeight)
  }

  // ── Dimensionnement du SVG du terrain (PC / Mobile) ──────────
  ;(function fixSVG() {
    const svg = container.querySelector('#match-field .terrain-wrapper svg')
             || container.querySelector('.terrain-wrapper svg')
    if (!svg) return
    // CAUSE RACINE : #match-terrain-wrap (div généré par renderTeam) n'a pas
    // de largeur → dans un flex centré, il se réduit et le SVG width:100%
    // devient minuscule. On force le wrap ET le svg à remplir le conteneur.
    const wrap = svg.closest('#match-terrain-wrap')
    if (wrap) wrap.style.cssText = 'position:relative;width:100%;height:100%;padding:0'
    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  })()

  if (!game._resizeBound) {
    game._resizeBound = true
    window.addEventListener('resize', () => {
      const svg2 = container.querySelector('.terrain-wrapper svg')
      if (svg2) {
        const wrap2 = svg2.closest('#match-terrain-wrap')
        if (wrap2) wrap2.style.cssText = 'position:relative;width:100%;height:100%;padding:0'
        svg2.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
      }
    })
  }

  // ── CHRONO (point 7) ─────────────────────────────────────
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  stopUrgentSound()
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
        if (!phase2) { phase2 = true; remaining = 15; paint(); playUrgentSound(`${import.meta.env.BASE_URL}sounds/timer-urgent.mp3`, 0.6) }
        else {
          clearInterval(game._timerInt); game._timerInt = null
          stopUrgentSound()
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
  document.getElementById('btn-pass')?.addEventListener('click', () => {
    game.log.push({ text: "⏭️ Vous passez votre tour (plus d'attaquants)", type:'info' })
    // Sécurité anti-blocage mutuel : si l'IA sera elle aussi bloquée (pas de
    // MIL/ATT, et moi pas vide donc pas de fallback DEF/GK pour elle), le
    // match se termine ici plutôt que de boucler indéfiniment sur PASSER.
    if (wouldBeStuck(game.aiTeam, game.homeTeam)) {
      game.log.push({ text: "🏁 Plus personne ne peut attaquer — match terminé.", type:'info' })
      finishMatch(container, game, ctx)
      return
    }
    game.phase = 'ai-attack'
    renderGame(container, game, ctx)
    setTimeout(() => aiTurn(container, game, ctx), 800)
  })

  container.querySelectorAll('.match-slot-hit').forEach(el => {
    el.addEventListener('click', () => toggleSelect(el, game, container, ctx))
  })
  // Clic sur une carte dos (joueur utilisé) → ouvre le remplacement présélectionné
  container.querySelectorAll('.match-used-hit').forEach(el => {
    el.addEventListener('click', () => openSubstitution(container, game, ctx, null, el.dataset.cardId))
  })
  container.querySelectorAll('.gc-mini').forEach(el => {
    if (!isAttack) {
      el.style.opacity = '0.35'
      el.style.cursor = 'default'
      el.addEventListener('click', () => showGameToast('⚡ Les Game Changers ne sont utilisables qu\'en attaque', 'rgba(180,100,0,0.9)'))
    } else {
      el.addEventListener('click', () => openGCDetail(el.dataset.gcId, el.dataset.gcType, container, game, ctx))
    }
  })
  document.getElementById('boost-card')?.addEventListener('click', () => useBoost(container, game, ctx))

  // Subs : clic sur portrait dans colonne
  container.querySelectorAll('.sub-btn-col').forEach(el => {
    el.addEventListener('click', () => openSubstitution(container, game, ctx, el.dataset.subId))
  })
  document.getElementById('sub-btn-main')?.addEventListener('click', () => openSubstitution(container, game, ctx))
}

function toggleSelect(el, game, container, ctx) {
  const cardId = el.dataset.cardId
  const role   = el.dataset.role
  const existing = game.selected.findIndex(s => s.cardId === cardId)
  if (existing !== -1) {
    game.selected.splice(existing, 1)
  } else {
    if (game.selected.length >= 3) { ctx.toast('Maximum 3 joueurs', 'error'); return }
    const player = (game.homeTeam[role]||[]).find(p => p.cardId === cardId)
    if (player) {
      game.selected.push({ ...player, _role: role, _line: role })
    } else {
      // Diagnostic visible (pas de console sur mobile) : ce cas ne devrait jamais arriver.
      const availableRoles = Object.keys(game.homeTeam||{}).map(r => `${r}:${(game.homeTeam[r]||[]).length}`).join(' ')
      ctx.toast(`Sélection impossible (rôle="${role}" introuvable dans homeTeam[${availableRoles}])`, 'error')
      console.error('[MatchIA] toggleSelect: joueur introuvable', { cardId, role, homeTeam: game.homeTeam })
      return
    }
  }
  renderGame(container, game, ctx)
}

function updateLastPlayer(game, ctx, playerId) {
  if (!game.matchId) return
  supabase.from('matches').update({ last_player_id: playerId }).eq('id', game.matchId).then(()=>{})
}

function confirmAttack(container, game, ctx) {
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  stopUrgentSound()
  updateLastPlayer(game, ctx, ctx.state.profile.id)
  // Re-piocher les objets joueurs À JOUR (boost inclus) depuis game.homeTeam.
  // Les DEF/GK ne sont sélectionnables en attaque que via le fallback (plus de
  // MIL/ATT dispo) → leur note est toujours forcée à 1 dans ce cas.
  const selected = game.selected.map(s => {
    const live = (game.homeTeam[s._role]||[]).find(x => x.cardId === s.cardId) || s
    const isDefAttacking = ['GK','DEF'].includes(s._role)
    return { ...live, _line: s._role, ...(isDefAttacking ? { note_a: Math.max(1, Number(live.note_a)||0) } : {}) }
  })
  const calc = calcAttack(selected, game.modifiers.home, game.formation)
  game.pendingAttack = { ...calc, players:[...selected], side:'home' }
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

function confirmDefense(container, game, ctx) {
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  stopUrgentSound()
  updateLastPlayer(game, ctx, ctx.state.profile.id)
  // Re-piocher les objets joueurs À JOUR (boost inclus) depuis game.homeTeam.
  const homeSt = game.stadiumDef || null
  const selected = game.selected.map(s => {
    const live = (game.homeTeam[s._role]||[]).find(x => x.cardId === s.cardId) || s
    // Recalculer stadiumBonus depuis stadiumDef au cas où le flag serait perdu
    const stadB = live.stadiumBonus || (homeSt && (
      (homeSt.club_id     && String(live.club_id)     === String(homeSt.club_id)) ||
      (homeSt.country_code && live.country_code        === homeSt.country_code)
    )) || false
    return { ...live, _line: s._role, stadiumBonus: stadB }
  })
  const calc = calcDefense(selected, game.modifiers.home, game.formation)
  game.selected.forEach(sel => {
    const p = (game.homeTeam[sel._role]||[]).find(pp => pp.cardId === sel.cardId)
    if (p) p.used = true
  })
  const result = resolveDuel(game.pendingAttack.total, calc.total, game.modifiers.home)
  const duelEntryDef = {
    type: 'duel',
    title: 'Défense',
    aiPlayers:   (game.pendingAttack.players||[]).map(p => histPlayer(p)),
    homePlayers: game.selected.map(s => { const pp = (game.homeTeam[s._role]||[]).find(x=>x.cardId===s.cardId)||s; return histPlayer(pp) }),
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

// ── IA : décision remplacement + GC ──────────────────────
// `done` est appelé une fois l'animation terminée (ou immédiatement si aucun
// remplacement) : l'IA doit montrer ses changements au joueur, comme lui.
function aiMaySub(game, done = () => {}) {
  if (game.aiSubsUsed >= game.aiMaxSubs) return done()
  const usedPlayers = Object.values(game.aiTeam).flat().filter(p => p.used)
  if (!usedPlayers.length) return done()
  const availSubs = (game.aiSubs || []).filter(s => !game.aiUsedSubIds.includes(s.cardId))
  if (!availSubs.length) return done()
  // Remplacer un joueur utilisé par un remplaçant de même poste si possible
  const out = usedPlayers[Math.floor(Math.random() * usedPlayers.length)]
  const sameLine = availSubs.find(s => s.job === out.job) || availSubs[0]
  const inPlayer = { ...sameLine, used: false, _line: out._line, _col: out._col }
  // Remplacer dans la team
  const line = game.aiTeam[out._line]
  const idx = line.findIndex(p => p.cardId === out.cardId)
  if (idx !== -1) line[idx] = inPlayer
  game.aiUsedSubIds.push(sameLine.cardId)
  game.aiSubsUsed++
  game.log.push({ text: `🔄 IA : ${sameLine.firstname} ${sameLine.name} remplace ${out.firstname} ${out.name}`, type:'info' })
  showSubAnimation(out, inPlayer, done)
}

// ── Applique automatiquement l'effet d'une carte GC pour l'IA (équivalent
// non-interactif de GC_ENGINE : l'IA choisit ses cibles elle-même) ─────────
function aiApplyGCEffect(def, game) {
  const params = def.effect_params || {}
  const value  = params.value  || 1
  const count  = params.count  || 1
  const roles  = params.roles  || []
  const target = params.target || 'home' // 'home' = cible le joueur humain, 'ai' = cible sa propre équipe

  switch (def.effect_type) {
    case 'BOOST_STAT': {
      const pool = Object.values(game.aiTeam).flat().filter(p => !p.used && (!roles.length || roles.includes(p._line)))
      const picks = pool.sort(() => Math.random()-0.5).slice(0, count)
      picks.forEach(p => { p.boost = (p.boost||0) + value })
      if (picks.length) game.log.push({ text: `⚡ IA : +${value} sur ${picks.length} joueur(s)`, type:'gc' })
      break
    }
    case 'DEBUFF_STAT': {
      const team = target === 'ai' ? game.aiTeam : game.homeTeam
      const pool = Object.values(team).flat().filter(p => !p.used && (!roles.length || roles.includes(p._line)))
      const picks = pool.sort(() => Math.random()-0.5).slice(0, count)
      picks.forEach(p => { p.boost = (p.boost||0) - value })
      if (picks.length) game.log.push({ text: `🎯 IA : -${value} sur ${picks.length} joueur(s)${target!=='ai'?' (vous)':''}`, type:'gc' })
      break
    }
    case 'GRAY_PLAYER': {
      const team = target === 'ai' ? game.aiTeam : game.homeTeam
      const pool = Object.values(team).flat().filter(p => !p.used && (!roles.length || roles.includes(p._line)))
      const picks = pool.sort(() => Math.random()-0.5).slice(0, count)
      picks.forEach(p => { p.used = true })
      if (picks.length) game.log.push({ text: `❌ IA : ${picks.length} joueur(s)${target!=='ai'?' (vous)':''} exclu(s)`, type:'gc' })
      break
    }
    case 'REVIVE_PLAYER': {
      const pool = Object.values(game.aiTeam).flat().filter(p => p.used)
      const picks = pool.sort(() => Math.random()-0.5).slice(0, count)
      picks.forEach(p => { p.used = false })
      if (picks.length) game.log.push({ text: `💫 IA : ${picks.length} joueur(s) ressuscité(s)`, type:'gc' })
      break
    }
    case 'REMOVE_GOAL':
      if (game.homeScore > 0) { game.homeScore--; game.log.push({ text: '🚫 IA : votre dernier but est annulé !', type:'gc' }) }
      break
    case 'ADD_GOAL_DRAW':
      if (game.homeScore === game.aiScore) { game.aiScore++; game.log.push({ text: '🎯 IA : but bonus (match nul) !', type:'gc' }) }
      break
    case 'ADD_SUB':
      game.aiMaxSubs = (game.aiMaxSubs||3) + value
      game.log.push({ text: `🔄 IA : +${value} remplacement(s)`, type:'gc' })
      break
    default: break
  }
}

function aiMayPlayGC(game, done = () => {}) {
  if (!game.aiGcCards?.length) return done()
  const target = game.aiGcTarget || 2
  if (game.aiUsedGc.length >= target) return done()
  const available = game.aiGcCards.filter(gc => !game.aiUsedGc.includes(gc.id))
  if (!available.length) return done()
  // L'IA doit réellement consommer son quota (1 à 3 sur le match) : à partir
  // du 4e tour, si elle n'a encore rien joué, on force la carte.
  const mustPlay = (game.round >= 4 && game.aiUsedGc.length === 0)
  if (!mustPlay && Math.random() > 0.55) return done()
  const gc = available[Math.floor(Math.random() * available.length)]
  game.aiUsedGc.push(gc.id)
  if (gc.effect_type) {
    aiApplyGCEffect(gc, game)
  } else {
    game.log.push({ text: `⚡ IA joue ${gc.icon||'⚡'} ${gc.name}`, type:'gc' })
  }
  showAiGCAnimation(gc, done)
}

// Révélation de la carte Game Changer jouée par l'IA (le joueur doit voir
// ce qui lui arrive, au même titre que les buts ou les remplacements).
function showAiGCAnimation(gc, onDone = () => {}) {
  const prev = document.getElementById('ai-gc-anim-overlay')
  if (prev) prev.remove()
  const overlay = document.createElement('div')
  overlay.id = 'ai-gc-anim-overlay'
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.82);animation:aiGcFade .25s ease`
  overlay.innerHTML = `
    <style>
      @keyframes aiGcFade { from{opacity:0} to{opacity:1} }
      @keyframes aiGcPop  { 0%{transform:scale(.6) rotateY(90deg);opacity:0}
                            60%{transform:scale(1.06) rotateY(0);opacity:1}
                            100%{transform:scale(1) rotateY(0);opacity:1} }
    </style>
    <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#ff6b6b;margin-bottom:14px">
      ⚡ L'ADVERSAIRE JOUE UNE CARTE
    </div>
    <div style="animation:aiGcPop .5s cubic-bezier(.2,.8,.3,1) both">
      ${renderGCCard(gc.name || 'Game Changer', null, gc.icon || '⚡', gc.effect || '', { width: 170 })}
    </div>`
  document.body.appendChild(overlay)
  setTimeout(() => { overlay.remove(); onDone() }, 2100)
}

function aiTurn(container, game, ctx) {
  updateLastPlayer(game, ctx, null)
  // Enchaîner les animations : remplacement -> Game Changer -> attaque.
  // Le reste du tour attend leur fin pour rester lisible pour le joueur.
  aiMaySub(game, () => {
    aiMayPlayGC(game, () => {
      renderGame(container, game, ctx)
      aiTurnCore(container, game, ctx)
    })
  })
}

function aiTurnCore(container, game, ctx) {
  let allAi = [...(game.aiTeam.MIL||[]),...(game.aiTeam.ATT||[])].filter(p=>!p.used)
  let aiForcedNote1 = false
  if (!allAi.length) {
    const homeMilAttNow = [...(game.homeTeam.MIL||[]),...(game.homeTeam.ATT||[])].filter(p=>!p.used)
    const homeIsEmptyNow = isTeamEmpty(game.homeTeam)
    if (homeIsEmptyNow || homeMilAttNow.length===0) {
      const unusedAiDef = (game.aiTeam.DEF||[]).filter(p=>!p.used)
      const unusedAiGk  = (game.aiTeam.GK||[]).filter(p=>!p.used)
      allAi = homeIsEmptyNow
        ? (unusedAiDef.length ? unusedAiDef : unusedAiGk)   // palier 1/2 : adversaire vide
        : [...unusedAiDef, ...unusedAiGk]                    // palier 3 : blocage mutuel
      aiForcedNote1 = true
    }
  }
  const selected = aiSelectPlayers(allAi, 'attack', game.difficulty)
  if (!selected.length) { checkEnd(container, game, ctx); return }
  if (aiForcedNote1) selected.forEach(p => { p._line = p._line || p.job; p.note_a = Math.max(1, Number(p.note_a)||0) })
  const calc = calcAttack(selected, game.modifiers.ai, game.formation)
  game.pendingAttack = { ...calc, players:selected, side:'ai' }
  selected.forEach(s => { s.used = true })
  game.log.push({ text:`🤖 IA attaque : ${calc.total} (${selected.map(p=>p.name).join(', ')})`, type:'info' })
  game.modifiers.ai = {}

  // Si le joueur n'a aucun défenseur dispo (GK/DEF/MIL) ET aucun remplacement possible → but auto IA
  const homeDefenders = [...(game.homeTeam.GK||[]),...(game.homeTeam.DEF||[]),...(game.homeTeam.MIL||[])].filter(p=>!p.used)
  const availSubsNow  = (game.homeSubs||[]).filter(s => !(game.usedSubIds||[]).includes(s.cardId))
  const canSubNow     = availSubsNow.length > 0 && game.subsUsed < game.maxSubs
  if (homeDefenders.length === 0 && !canSubNow) {
    const attackerIsOnlyGK = selected.length === 1 && (selected[0]._line === 'GK' || selected[0].job === 'GK')
    if (attackerIsOnlyGK && isTeamEmpty(game.homeTeam) && game.homeScore === game.aiScore) {
      // Corner décisif : le gardien adverse monte marquer, je n'ai plus personne du tout.
      game.aiScore++
      logAndPlayCorner(container, game, ctx, 'ai', selected[0])
      return
    }
    game.aiScore++
    const duelEntry = {
      type:'duel', isGoal:true, homeScored:false,
      aiPlayers: selected.map(p => histPlayer(p)),
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

  // Nouvelle règle : si l'IA n'a plus aucun joueur sur le terrain,
  // le joueur marque automatiquement, même avec un défenseur.
  const aiAvailable = ['GK','DEF','MIL','ATT'].flatMap(r => (game.aiTeam[r]||[]).filter(p=>!p.used))
  if (!aiAvailable.length) {
    const att = game.pendingAttack?.players || []
    const attackerIsOnlyGK = att.length === 1 && (att[0]._line === 'GK' || att[0].job === 'GK')
    if (attackerIsOnlyGK && game.homeScore === game.aiScore) {
      // Corner décisif : mon gardien monte marquer, l'IA n'a plus personne.
      game.homeScore++
      logAndPlayCorner(container, game, ctx, 'home', att[0])
      return
    }
    game.homeScore++
    const duelEntry = {
      type:'duel', isGoal:true, homeScored:true,
      homePlayers: att.map(p => histPlayer(p)),
      homeTotal: game.pendingAttack?.total || 0, aiTotal: 0,
      text: `⚽ BUT ! L'IA n'a plus de joueurs — but automatique !`,
    }
    game.log.push(duelEntry)
    game.modifiers.ai = {}
    game.pendingAttack = null
    renderGame(container, game, ctx)
    showGoalAnimation(duelEntry.homePlayers, game.homeScore, game.aiScore, true, () => {
      nextTurn(container, game, ctx, 'ai-attack')
    })
    return
  }
  const defVal = selected.length > 0 ? calcDefense(selected, game.modifiers.ai, game.formation).total : 0
  selected.forEach(s => { s.used = true })
  const result = resolveDuel(game.pendingAttack.total, defVal, game.modifiers.ai)
  const duelEntryAttack = {
    type: 'duel',
    title: 'Attaque',
    homePlayers: (game.pendingAttack.players||[]).map(p => histPlayer(p)),
    aiPlayers:   selected.map(p => histPlayer(p)),
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

function nextTurn(container, game, ctx, next) {
  game.round++
  // Corner décisif : un camp n'a plus QUE son gardien ET l'adversaire n'a
  // plus aucun joueur du tout, score nul → le gardien monte marquer.
  if (tryLastCornerGoal(container, game, ctx)) return
  if (isMatchOver(game)) { finishMatch(container, game, ctx); return }
  if (next === 'home-attack') {
    // Fallback GK/DEF (note forcée à 1) inclus : "attaquants" = tout joueur
    // encore disponible, pas seulement MIL/ATT.
    const homeAny = ['MIL','ATT','GK','DEF'].some(r => (game.homeTeam[r]||[]).some(p=>!p.used))
    if (!homeAny) { checkEnd(container, game, ctx); return }
    game.phase = 'attack'
    renderGame(container, game, ctx)
  } else {
    const aiAny = ['MIL','ATT','GK','DEF'].some(r => (game.aiTeam[r]||[]).some(p=>!p.used))
    if (!aiAny) { checkEnd(container, game, ctx); return }
    game.phase = 'ai-attack'
    renderGame(container, game, ctx)
    setTimeout(() => aiTurn(container, game, ctx), 800)
  }
}

// ── Corner décisif ────────────────────────────────────────
// Ne se déclenche QUE si : mon camp n'a plus QUE son gardien, l'ADVERSAIRE
// n'a plus AUCUN joueur du tout (vraiment vide), et le score est nul.
// Si l'adversaire a encore des joueurs, le gardien reste un défenseur normal.
function isTeamEmpty(team) {
  return !['GK','DEF','MIL','ATT'].some(r => (team[r]||[]).some(p => !p.used))
}
function onlyGKLeft(team) {
  const gkFree   = (team.GK||[]).some(p => !p.used)
  const restFree = ['DEF','MIL','ATT'].some(r => (team[r]||[]).some(p => !p.used))
  return gkFree && !restFree
}

function tryLastCornerGoal(container, game, ctx) {
  if (game.homeScore !== game.aiScore) return false
  if (onlyGKLeft(game.homeTeam) && isTeamEmpty(game.aiTeam)) {
    const gk = (game.homeTeam.GK||[]).find(p => !p.used)
    if (!gk) return false
    gk.used = true
    game.homeScore++
    logAndPlayCorner(container, game, ctx, 'home', gk)
    return true
  }
  if (onlyGKLeft(game.aiTeam) && isTeamEmpty(game.homeTeam)) {
    const gk = (game.aiTeam.GK||[]).find(p => !p.used)
    if (!gk) return false
    gk.used = true
    game.aiScore++
    logAndPlayCorner(container, game, ctx, 'ai', gk)
    return true
  }
  return false
}

// Log + cinématique, en supposant le score déjà incrémenté et le gardien déjà marqué used
function logAndPlayCorner(container, game, ctx, side, gk) {
  game.log.push({
    type: 'duel', isGoal: true, homeScored: side === 'home',
    homePlayers: side === 'home' ? [histPlayer(gk)] : [],
    aiPlayers:   side === 'ai'   ? [histPlayer(gk)] : [],
    text: `⚽ DERNIER CORNER — Le gardien ${side==='home'?'':'adverse '}marque !`,
  })

  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px'
  document.body.appendChild(overlay)

  const showText = (text, color) => new Promise(resolve => {
    overlay.innerHTML = `<div style="font-size:32px;font-weight:900;color:${color};letter-spacing:2px;animation:lcFade 1.4s ease both">${text}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`
    setTimeout(resolve, 1400)
  })

  ;(async () => {
    await showText('⚽ DERNIER CORNER', '#FFD700')
    await showText('🧤 LE GARDIEN MONTE !', '#4fc3f7')
    overlay.remove()
    game.pendingAttack = null
    renderGame(container, game, ctx)
    showGoalAnimation([histPlayer(gk)], game.homeScore, game.aiScore, side === 'home', () => {
      if (isMatchOver(game)) { finishMatch(container, game, ctx); return }
      nextTurn(container, game, ctx, side === 'home' ? 'ai-attack' : 'home-attack')
    })
  })()
}

function isMatchOver(game) {
  const homeOK = ['MIL','ATT','GK','DEF'].some(r => (game.homeTeam[r]||[]).some(p=>!p.used))
  const aiOK   = ['MIL','ATT','GK','DEF'].some(r => (game.aiTeam[r]||[]).some(p=>!p.used))
  return !homeOK && !aiOK
}

// Un camp est-il définitivement bloqué (plus de MIL/ATT, et l'adversaire
// n'est pas totalement vide donc le fallback DEF/GK note=1 est impossible) ?
function wouldBeStuck(team, oppTeam) {
  const milAtt = ['MIL','ATT'].some(r => (team[r]||[]).some(p=>!p.used))
  if (milAtt) return false
  if (isTeamEmpty(oppTeam)) return false // palier 1/2 : adversaire vide, DEF/GK peuvent attaquer
  const oppMilAtt = ['MIL','ATT'].some(r => (oppTeam[r]||[]).some(p=>!p.used))
  if (!oppMilAtt) return false // palier 3 : blocage mutuel résolu, DEF/GK peuvent s'affronter en note=1
  return true
}

function checkEnd(container, game, ctx) {
  if (tryLastCornerGoal(container, game, ctx)) return
  if (isMatchOver(game)) { finishMatch(container, game, ctx); return }
  // Sécurité anti-blocage mutuel : si NI moi NI l'IA ne pouvons plus jamais
  // attaquer (pas de MIL/ATT, adversaire pas vide pour aucun des deux côtés),
  // le match se termine ici plutôt que de boucler indéfiniment sur PASSER.
  if (wouldBeStuck(game.homeTeam, game.aiTeam) && wouldBeStuck(game.aiTeam, game.homeTeam)) {
    game.log.push({ text: "🏁 Plus personne ne peut attaquer — match terminé.", type:'info' })
    finishMatch(container, game, ctx)
    return
  }
  game.phase = 'attack'; renderGame(container, game, ctx)
}

// showSubAnimation importé depuis match-engine.js

// showGameToast importé depuis match-engine.js

function renderSubCard(p) {
  const portrait = getPortrait(p)
  const jobColor = JOB_COLORS[p.job] || '#555'
  const rarityBorder = { normal:'rgba(255,255,255,0.2)', pepite:'#D4A017', pépite:'#D4A017', papyte:'#909090', legende:'#7a28b8', légende:'#7a28b8' }[p.rarity] || 'rgba(255,255,255,0.2)'
  const GLOW_IA = { legende:'#7a28b8', pepite:'#D4A017', pépite:'#D4A017', papyte:'#909090' }
  const glowIA = GLOW_IA[p.rarity] ? `filter:drop-shadow(0 0 4px ${GLOW_IA[p.rarity]}) drop-shadow(0 0 10px ${GLOW_IA[p.rarity]});` : ''
  const note = p.job==='GK'?p.note_g:p.job==='DEF'?p.note_d:p.job==='MIL'?p.note_m:p.note_a
  return `
  <div style="width:72px;overflow:hidden;border-radius:8px;border:2px solid ${rarityBorder};background:rgba(0,0,0,0.5);flex-shrink:0;${glowIA}">
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

function openSubstitution(container, game, ctx, preferredSubId = null, preferredOutId = null) {
  if (game.phase !== 'attack') { showGameToast('⏰ Remplacement uniquement avant une attaque','rgba(180,100,0,0.9)'); return }
  if (!game.usedSubIds) game.usedSubIds = []
  if (game.subsUsed >= game.maxSubs) { showGameToast(`Maximum ${game.maxSubs} remplacements atteint`,'rgba(180,30,30,0.9)'); return }
  const grayedPlayers = Object.entries(game.homeTeam).flatMap(([r,ps]) => (ps||[]).filter(p => p.used).map(p => ({...p, _line:p._line||r})))
  const availSubs     = game.homeSubs.filter(s => !game.usedSubIds.includes(s.cardId))
  if (!grayedPlayers.length) { showGameToast('Aucun joueur utilisé à remplacer'); return }
  if (!availSubs.length)     { showGameToast('Aucun remplaçant disponible'); return }

  // Présélection : joueur sortant cliqué + 1er remplaçant au même poste
  let outIdx = Math.max(0, grayedPlayers.findIndex(p => p.cardId === preferredOutId))
  const _outRole = grayedPlayers[outIdx]?._line || grayedPlayers[outIdx]?.job
  let inIdx  = preferredSubId
    ? Math.max(0, availSubs.findIndex(s => s.cardId === preferredSubId))
    : Math.max(0, availSubs.findIndex(s => s.job === _outRole))
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

function openGCDetail(gcId, gcType, container, game, ctx) {
  const dbDef = (game.gcDefs||[]).find(d => d.name === gcType)
  const legDef = GC_DEFS[gcType] || { icon:'⚡', desc:'Carte spéciale.' }
  const name   = dbDef?.name || gcType
  const effect = dbDef?.effect || legDef.desc
  const imgUrl = dbDef?.image_url ? `${import.meta.env.BASE_URL}icons/${dbDef.image_url}` : null
  const icon   = legDef.icon || '⚡'
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px'
  overlay.innerHTML = `
    ${renderGCCard(name, imgUrl, icon, effect, { width: 190 })}
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
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${pool.map(p => {
        const role = p._line || p.job || 'MIL'
        const sel  = chosen.find(x => x.cardId === p.cardId)
        const cardHtml = renderPlayerCard(
          { ...p, _evolution_bonus: 0 },
          { width: 90, showStad: true, role, extraNote: p.boost || 0 }
        )
        return `<div class="gc-pick-item" data-cid="${p.cardId}"
          style="position:relative;border-radius:8px;${sel?'outline:3px solid #FFD700;outline-offset:2px;':''}cursor:pointer;flex-shrink:0;${p.used?'opacity:0.3;pointer-events:none':''}">
          ${cardHtml}
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

// ── Moteur GC paramétrique ────────────────────────────────
const GC_ENGINE = {
  // Booste la stat d'un ou plusieurs joueurs : le joueur CHOISIT
  BOOST_STAT: ({ value = 1, count = 1, roles = [] }, game, container, ctx) => {
    const pool = Object.entries(game.homeTeam)
      .filter(([r]) => !roles.length || roles.includes(r))
      .flatMap(([r, ps]) => ps.filter(p => !p.used).map(p => ({ ...p, _line: r })))
    if (!pool.length) { game.log.push({ text: '⚡ Aucun joueur disponible', type:'info' }); renderGame(container, game, ctx); return true }
    openGCPicker(pool, count, `Choisir ${count} joueur(s) à booster (+${value})`, container, game, (chosen) => {
      chosen.forEach(p => {
        const live = (game.homeTeam[p._line]||[]).find(x => x.cardId === p.cardId)
        if (live) { live.boost = (live.boost||0) + value; game.log.push({ text: `⚡ +${value} sur ${live.name}`, type:'info' }) }
      })
      renderGame(container, game, ctx)
    })
    return true
  },
  // Débuff : si target=ai → joueur choisit quel adverse cibler ; sinon propre équipe
  DEBUFF_STAT: ({ value = 1, count = 1, roles = [], target = 'ai' }, game, container, ctx) => {
    const team = target === 'home' ? game.homeTeam : game.aiTeam
    const teamLabel = target === 'ai' ? 'adverse' : 'allié'
    const pool = Object.entries(team)
      .filter(([r]) => !roles.length || roles.includes(r))
      .flatMap(([r, ps]) => ps.filter(p => !p.used).map(p => ({ ...p, _line: r })))
    if (!pool.length) { game.log.push({ text: `🎯 Aucun joueur ${teamLabel} disponible`, type:'info' }); renderGame(container, game, ctx); return true }
    openGCPicker(pool, count, `Choisir ${count} joueur(s) ${teamLabel}(s) à débuffer (-${value})`, container, game, (chosen) => {
      chosen.forEach(p => {
        const teamObj = target === 'home' ? game.homeTeam : game.aiTeam
        const live = (teamObj[p._line]||[]).find(x => x.cardId === p.cardId)
        if (live) { live.boost = (live.boost||0) - value; game.log.push({ text: `🎯 -${value} sur ${live.name}${target==='ai'?' (IA)':''}`, type:'info' }) }
      })
      renderGame(container, game, ctx)
    })
    return true
  },
  // Grise un joueur : le joueur choisit lequel (le sien ou l'adverse)
  GRAY_PLAYER: ({ count = 1, roles = [], target = 'ai' }, game, container, ctx) => {
    const team = target === 'home' ? game.homeTeam : game.aiTeam
    const teamLabel = target === 'ai' ? 'adverse' : 'allié'
    const pool = Object.entries(team)
      .filter(([r]) => !roles.length || roles.includes(r))
      .flatMap(([r, ps]) => ps.filter(p => !p.used).map(p => ({ ...p, _line: r })))
    if (!pool.length) { game.log.push({ text: `❌ Aucun joueur ${teamLabel} à exclure`, type:'info' }); renderGame(container, game, ctx); return true }
    openGCPicker(pool, count, `Choisir ${count} joueur(s) ${teamLabel}(s) à exclure`, container, game, (chosen) => {
      chosen.forEach(p => {
        const teamObj = target === 'home' ? game.homeTeam : game.aiTeam
        const live = (teamObj[p._line]||[]).find(x => x.cardId === p.cardId)
        if (live) { live.used = true; game.log.push({ text: `❌ ${live.name}${target==='ai'?' (IA)':''} exclu !`, type:'info' }) }
      })
      renderGame(container, game, ctx)
    })
    return true
  },
  // Ressuscite : le joueur choisit qui faire revenir
  REVIVE_PLAYER: ({ count = 1, roles = [] }, game, container, ctx) => {
    const pool = Object.entries(game.homeTeam)
      .filter(([r]) => !roles.length || roles.includes(r))
      .flatMap(([r, ps]) => ps.filter(p => p.used).map(p => ({ ...p, _line: r })))
    if (!pool.length) { game.log.push({ text: '💫 Aucun joueur à ressusciter', type:'info' }); renderGame(container, game, ctx); return true }
    openGCPicker(pool, count, `Choisir ${count} joueur(s) à ressusciter`, container, game, (chosen) => {
      chosen.forEach(p => {
        const live = (game.homeTeam[p._line]||[]).find(x => x.cardId === p.cardId)
        if (live) { live.used = false; game.log.push({ text: `💫 ${live.name} ressuscité !`, type:'info' }) }
      })
      renderGame(container, game, ctx)
    })
    return true
  },
  // Annule le dernier but encaissé
  REMOVE_GOAL: ({}, game) => {
    if (game.aiScore > 0) { game.aiScore--; game.log.push({ text: '🚫 Dernier but IA annulé !', type:'info' }) }
    else game.log.push({ text: '🚫 Aucun but à annuler', type:'info' })
    return false
  },
  // Ajoute un but si match nul
  ADD_GOAL_DRAW: ({}, game) => {
    if (game.homeScore === game.aiScore) { game.homeScore++; game.log.push({ text: '🎯 But bonus (match nul) !', type:'info' }) }
    else game.log.push({ text: '🎯 But bonus : non applicable (pas de match nul)', type:'info' })
    return false
  },
  // Ajoute un remplacement supplémentaire
  ADD_SUB: ({ value = 1 }, game) => {
    game.maxSubs = (game.maxSubs || 3) + value
    game.log.push({ text: `🔄 +${value} remplacement(s) débloqué(s)`, type:'info' })
    return false
  },
  CUSTOM: () => false,
}

function useGameChanger(gcId, gcType, container, game, ctx) {
  game.usedGc.push(gcId)

  // Chercher la définition DB en cache : matcher sur name (exact) puis
  // sur name insensible à la casse, pour éviter les problèmes de casse/espaces
  const gcDefs = game.gcDefs || []
  const def = gcDefs.find(d => d.name === gcType)
    || gcDefs.find(d => d.name?.toLowerCase().trim() === gcType?.toLowerCase().trim())

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

// showGoalAnimation importé depuis match-engine.js

async function finishMatch(container, game, ctx) {
  stopBGM()
  stopUrgentSound()
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  game.phase = 'finished'
  const { state } = ctx
  const isWin  = game.homeScore > game.aiScore
  const isDraw = game.homeScore === game.aiScore
  const result  = isWin?'victoire':isDraw?'nul':'defaite'
  const rewards = (game.isSolo && game.soloLevelConfig?.reward_credits && isWin)
    ? Number(game.soloLevelConfig.reward_credits)
    : getRewards(game.mode, result)

  // Mode Solo : débloquer le niveau suivant en cas de victoire
  if (game.isSolo && isWin) {
    try {
      const { data: progress } = await supabase
        .from('user_solo_progress').select('unlocked_level').eq('user_id', state.profile.id).maybeSingle()
      const currentUnlocked = progress?.unlocked_level || 1
      if (game.soloLevel >= currentUnlocked) {
        await supabase.from('user_solo_progress').upsert({
          user_id: state.profile.id,
          unlocked_level: game.soloLevel + 1,
          updated_at: new Date().toISOString(),
        })
      }
    } catch (e) {
      console.warn('[Solo] Erreur mise à jour progression:', e.message)
    }
  }

  // Ranked sans adversaire réel (fallback IA après 20s) : met quand même à jour
  // le MMR via LA MÊME RPC que les vrais matchs PvP (update_mmr_after_ranked),
  // pour que placement_matches / ranked_wins / ranked_losses / ranked_draws
  // s'incrémentent correctement (ces compteurs vivent uniquement dans la RPC).
  // L'IA n'ayant pas de vrai compte, on utilise un UUID sentinelle en away_id.
  const AI_SENTINEL_ID = '00000000-0000-0000-0000-000000000000'
  let rankedMmrDelta = null
  if (game.isRankedAI) {
    try {
      const { data: myProfile } = await supabase.from('users').select('mmr, mmr_deviation, mmr_volatility, placement_matches').eq('id', state.profile.id).single()
      if (myProfile) {
        const myMmr = myProfile.mmr ?? 1000
        const myRd  = myProfile.mmr_deviation ?? 350
        const myV   = myProfile.mmr_volatility ?? 0.06
        const score = isWin ? 1 : isDraw ? 0.5 : 0
        const isPlacement = (myProfile.placement_matches ?? 0) < 10
        const myResult = computeGlicko2(myMmr, myRd, myV, myMmr, 350, score, isPlacement)
        const winnerId = isDraw ? null : (isWin ? state.profile.id : AI_SENTINEL_ID)
        await supabase.rpc('update_mmr_after_ranked', {
          p_match_id     : game.matchId,
          p_winner_id    : winnerId,
          p_home_id      : state.profile.id,
          p_away_id      : AI_SENTINEL_ID,
          p_home_delta   : myResult.delta,
          p_away_delta   : 0,
          p_home_new_rd  : myResult.newRd,
          p_away_new_rd  : 350,
          p_home_new_vol : myResult.newSigma,
          p_away_new_vol : 0.06,
        })
        rankedMmrDelta = myResult.delta
      }
    } catch (e) {
      console.warn('[RankedAI] Erreur mise à jour MMR:', e.message)
    }
  }

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
    <div style="text-align:center;padding:40px;color:#fff;max-width:380px;width:100%">
      <div style="font-size:72px;margin-bottom:12px">${isWin?'🏆':isDraw?'🤝':'😔'}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${isWin?'Victoire !':isDraw?'Match nul':'Défaite'}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${game.homeScore} – ${game.aiScore}</div>

      <div style="display:grid;grid-template-columns:${(game.isRankedAI && rankedMmrDelta !== null) ? '1fr 1fr' : '1fr'};gap:10px;margin:16px 0">
        <div style="background:rgba(212,160,23,0.15);border:1px solid var(--yellow);border-radius:14px;padding:14px 10px">
          <div style="font-size:11px;opacity:.7;margin-bottom:4px">Récompense</div>
          <div style="font-size:20px;font-weight:900;color:var(--yellow);white-space:nowrap">+${rewards.toLocaleString('fr')} cr.</div>
        </div>
        ${(game.isRankedAI && rankedMmrDelta !== null) ? `
        <div style="background:${rankedMmrDelta>=0?'rgba(26,107,60,0.2)':'rgba(224,48,48,0.15)'};border:1px solid ${rankedMmrDelta>=0?'#1A6B3C':'#e03030'};border-radius:14px;padding:14px 10px">
          <div style="font-size:11px;opacity:.7;margin-bottom:4px">MMR</div>
          <div style="font-size:20px;font-weight:900;color:${rankedMmrDelta>=0?'#4caf50':'#ff6b6b'};white-space:nowrap">${rankedMmrDelta>=0?'↑ +':'↓ '}${rankedMmrDelta}</div>
        </div>` : ''}
      </div>

      ${(game.isSolo && isWin) ? `<div style="background:rgba(26,107,60,0.2);border:1px solid #1A6B3C;border-radius:14px;padding:12px;margin-bottom:12px;font-size:14px;font-weight:700">🔓 Niveau ${game.soloLevel + 1} débloqué !</div>` : ''}

      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3);padding:12px 8px;font-size:14px;white-space:nowrap">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1;padding:12px 8px;font-size:14px;white-space:nowrap">${game.isRankedAI ? '🔄 Nouveau match' : 'Rejouer'}</button>
      </div>
      ${(game.isSolo && isWin) ? `<button class="btn btn-primary" id="res-next-level" style="width:100%;margin-top:10px;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">▶️ Niveau ${game.soloLevel + 1}</button>` : ''}
    </div>`
  document.body.appendChild(overlay)
  document.getElementById('res-home')?.addEventListener('click',()=>{overlay.remove();_showBottomNav(container);ctx.navigate('home')})
  document.getElementById('res-replay')?.addEventListener('click', async () => {
    overlay.remove(); _showBottomNav(container)
    if (game.isRankedAI) {
      // Relance directement une nouvelle recherche Ranked (pas juste le menu)
      const { data: p } = await supabase.from('users').select('mmr, mmr_deviation, mmr_volatility, placement_matches').eq('id', ctx.state.profile.id).single()
      hideV2ChromeNow()
      ctx.navigate('match', {
        matchMode : 'ranked',
        rankedData: {
          mmr: p?.mmr ?? 1000, rd: p?.mmr_deviation ?? 350, sigma: p?.mmr_volatility ?? 0.06,
          isPlacement: (p?.placement_matches ?? 0) < 10,
        },
      })
      return
    }
    ctx.navigate('match', game.isSolo ? {matchMode:game.mode, soloLevel:game.soloLevel} : {matchMode:game.mode})
  })
  document.getElementById('res-next-level')?.addEventListener('click',()=>{overlay.remove();_showBottomNav(container);ctx.navigate('match', {matchMode:'solo', soloLevel:game.soloLevel+1})})
}

function showAITeam(game, ctx) {
  ctx.openModal('Équipe adverse (IA)',
    `<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${buildTeamSVG(game.aiTeam, game.formation, null, [], Math.min(window.innerWidth-40,860), Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,
    `<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`
  )
}

