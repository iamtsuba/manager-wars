import { supabase } from '../lib/supabase.js'
import {
  GC_DEFS, getNoteForRole, calcAttack, calcDefense,
  calcMidfieldDuel, resolveDuel, aiSelectPlayers, getRewards
} from './game-logic.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, linkColor, getActiveLinks } from './formation-links.js'
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
  const difficulty = matchMode.replace('vs_ai_','')
  const mode       = matchMode

  await loadMatchSetup(container, ctx, matchMode, async ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs, stadiumDef }) => {
    try {
      let homeTeam = buildTeam(starters, formation)
      if (stadiumDef) {
        homeTeam = applyStadiumBonus(homeTeam, stadiumDef)
        applyStadiumBonusToSubs(subsRaw, stadiumDef)
      }
      const aiResult = await generateAITeam(formation, difficulty)
      const aiTeam   = aiResult.lines || aiResult  // compatibilité fallback fake

      const launchMatch = async (selectedGC) => {
        try {
          const { data: match, error: matchErr } = await supabase.from('matches').insert({
            home_id: state.profile.id, away_id:null, mode,
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
            homeTeam, aiTeam,
            homeSubs: subsRaw,
            subsUsed: 0, maxSubs: Math.min(subsRaw.length, 3),
            aiSubs: aiResult.subs || [],
            aiSubsUsed: 0, aiMaxSubs: Math.min((aiResult.subs||[]).length, 3),
            aiUsedSubIds: [],
            aiGcCards: aiResult.gcCards || [],
            aiUsedGc: [],
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

      if (!gcCardsEnriched.length) { launchMatch([]); return }
      showGCSelection(container, gcCardsEnriched, launchMatch)
    } catch (e) {
      console.error('[MatchIA] Exception setup:', e)
      showMsg(container, '⚠️', 'Erreur de préparation du match : ' + e.message, 'Retour', () => ctx.navigate('home'))
    }
  })
}

async function generateAITeam(formation, difficulty) {
  const { data: players } = await supabase
    .from('players')
    .select('id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)')
    .eq('is_active', true).limit(80)

  if (!players || players.length < 11) return { lines: generateFakeAITeam(formation), subs: [], gcCards: [], stadiumDef: null }

  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const lines  = { GK:[], DEF:[], MIL:[], ATT:[] }
  const used   = new Set()

  function makePlayer(p, role, i) {
    used.add(p.id)
    return {
      cardId:'ai-'+p.id+'-'+i, id:p.id,
      firstname:p.firstname, name:p.surname_encoded,
      country_code:p.country_code, club_id:p.club_id,
      job:p.job, job2:p.job2,
      note_g:Number(p.note_g)||0, note_d:Number(p.note_d)||0,
      note_m:Number(p.note_m)||0, note_a:Number(p.note_a)||0,
      rarity:p.rarity, skin:p.skin, hair:p.hair, hair_length:p.hair_length,
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

  // GC aléatoires IA (3 parmi les types disponibles)
  const GC_TYPES = Object.keys(GC_DEFS)
  const shuffled = GC_TYPES.sort(() => Math.random() - 0.5)
  const gcCards = shuffled.slice(0, 3).map((type, i) => ({
    id: 'ai-gc-'+i, gc_type: type,
    name: GC_DEFS[type]?.name || type,
    icon: GC_DEFS[type]?.icon || '⚡',
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
  container.innerHTML = `
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${game.difficulty.toUpperCase()})</div>
    ${game.aiStadiumDef ? `<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${game.aiStadiumDef.name} · +10 aux joueurs ${game.aiStadiumDef.club?.encoded_name||''}</div>` : ''}
    <div style="width:min(90vw,420px)">${buildTeamSVG(game.aiTeam, game.formation, null, [], 300, 300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`
  setTimeout(() => showMidfieldAnimation(container, game, ctx), 5000)
}

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

  function renderMilRow(mils, label, color, side) {
    return `<div id="duel-row-${side}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${label}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${mils.map((p, i) => {
          const lc = i < mils.length-1 ? linkColor(p, mils[i+1]) : null
          const noLink = !lc || lc === '#ff3333' || lc === '#cc2222'
          const linkVal = lc === '#00ff88' ? '+2' : lc === '#FFD700' ? '+1' : ''
          return `
          <div class="duel-card duel-card-${side}" data-idx="${i}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${renderMiniCardHTML({ ...p, note: getNoteForRole(p,'MIL'), _line:'MIL' }, 58, 78)}
          </div>
          ${i < mils.length-1 ? `<div class="duel-link duel-link-${side}" data-idx="${i}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${noLink?'rgba(255,255,255,0.12)':lc};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${noLink?'none':`0 0 8px ${lc}`}">
            ${linkVal?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${lc}">${linkVal}</span>`:''}
          </div>` : ''}
          `
        }).join('')}
      </div>
      <div class="duel-score-line duel-score-line-${side}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${milScore(mils)} + ${milLinks(mils)} liens = <b style="color:#fff">${milScore(mils)+milLinks(mils)}</b>
      </div>
    </div>`
  }

  container.innerHTML = `
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
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

    ${renderMilRow(homeMils, game.clubName, '#D4A017', 'home')}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${renderMilRow(aiMils, 'IA', '#bb2020', 'ai')}

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
    homePlayers: homeMils.map(p => ({ name:p.name, note:getNoteForRole(p,'MIL'), portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
    aiPlayers:   aiMils.map(p   => ({ name:p.name, note:getNoteForRole(p,'MIL'), portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
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

function renderLogEntry(entry) {
  if (entry.type === 'duel' && (entry.homeTotal != null || entry.aiTotal != null)) {
    const hw = (entry.homeTotal||0) >= (entry.aiTotal||0)
    return `
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(entry.title||'DUEL').toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(entry.homePlayers||[]).map(p=>renderMiniPlayer(p)).join('')}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${hw?20:14}px;font-weight:900;color:${hw?'#FFD700':'rgba(255,255,255,0.4)'};line-height:1">${entry.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${!hw?20:14}px;font-weight:900;color:${!hw?'#ff6b6b':'rgba(255,255,255,0.4)'};line-height:1">${entry.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
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

function renderGame(container, game, ctx) {
  const selectedIds = game.selected.map(s => s.cardId)
  const usedSubIds  = game.usedSubIds || []
  const availSubs   = game.homeSubs.filter(s => !usedSubIds.includes(s.cardId))
  const grayedPlayers = Object.values(game.homeTeam).flat().filter(p => p.used)
  const canSub = grayedPlayers.length > 0 && availSubs.length > 0 && game.subsUsed < game.maxSubs

  // Défenseurs/GK autorisés à attaquer si : aucun MIL/ATT restant ET l'IA n'a
  // plus aucun joueur disponible. Dans ce cas leur note est forcée à 1.
  const aiHasNoOne = !['GK','DEF','MIL','ATT'].some(r => (game.aiTeam[r]||[]).some(p=>!p.used))
  const homeMilAtt = [...(game.homeTeam.MIL||[]),...(game.homeTeam.ATT||[])].filter(p=>!p.used)
  const extraSelectableIds = (game.phase==='attack' && aiHasNoOne && homeMilAtt.length===0)
    ? [...(game.homeTeam.GK||[]),...(game.homeTeam.DEF||[])].filter(p=>!p.used).map(p=>p.cardId)
    : []

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

  <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">

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
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
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
          style="box-sizing:border-box;width:${w}px;height:${h}px;border-radius:10px;border:2px solid ${bord};background:${bg};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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

      // ─── Carte Boost : MÊME boîte (box-sizing:border-box + dimensions identiques
      // à gcCardDesign) pour garantir un alignement pixel-perfect avec les cartes GC ───
      const boostCardDesign = (w, h) => `<div id="boost-card"
          style="box-sizing:border-box;width:${w}px;height:${h}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(h*0.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(h*0.2)}px">⚡</div>
            <div style="font-size:${Math.round(h*0.09)}px;color:#000;font-weight:900">+${game.boostCard?.value}</div>
          </div>`

      const gcMiniPC = (gc, isBoost) => isBoost ? boostCardDesign(130, 175) : gcCardDesign(gc, 130, 175)
      const gcMiniMob = (gc, isBoost) => isBoost ? boostCardDesign(68, 95) : gcCardDesign(gc, 68, 95)

      // ─── Bouton action ────────────────────────────────────
      const btnStyle = _pc
        ? 'padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%'
        : 'padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%'

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
      const subsHTML = `<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_pc?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${availSubs.length===0
          ? `<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>`
          : availSubs.map(s=>`<div class="sub-btn-col" data-sub-id="${s.cardId}" style="cursor:pointer;flex-shrink:0">${renderMiniCardHTML(s,76,100)}</div>`).join('')}
      </div>`

      // ─── Terrain ──────────────────────────────────────────
      const terrainHTML = `<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${renderTeam(game.homeTeam,game.formation,game.phase,selectedIds,300,300,extraSelectableIds)}
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
              ${renderTeam(game.homeTeam,game.formation,game.phase,selectedIds,300,300,extraSelectableIds)}
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
    const svg = container.querySelector('.terrain-wrapper svg')
    if (!svg) return
    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.style.cssText = 'width:100%;height:100%;display:block;max-width:none;margin:0'
    // viewBox resserré : PAD original=38, on réduit à 10 → plus de zoom
    svg.setAttribute('viewBox', '-26 -26 352 352')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
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
  // Clic sur une carte dos (joueur utilisé) → ouvre le remplacement présélectionné
  container.querySelectorAll('.match-used-hit').forEach(el => {
    el.addEventListener('click', () => openSubstitution(container, game, ctx, null, el.dataset.cardId))
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

function updateLastPlayer(game, ctx, playerId) {
  if (!game.matchId) return
  supabase.from('matches').update({ last_player_id: playerId }).eq('id', game.matchId).then(()=>{})
}

function confirmAttack(container, game, ctx) {
  if (game._timerInt) { clearInterval(game._timerInt); game._timerInt = null }
  updateLastPlayer(game, ctx, ctx.state.profile.id)
  // Re-piocher les objets joueurs À JOUR (boost inclus) depuis game.homeTeam.
  // Pour les DEF/GK qui attaquent en mode spécial (IA sans joueurs), forcer note à 1.
  const aiHasNoOneNow = !['GK','DEF','MIL','ATT'].some(r => (game.aiTeam[r]||[]).some(p=>!p.used))
  const selected = game.selected.map(s => {
    const live = (game.homeTeam[s._role]||[]).find(x => x.cardId === s.cardId) || s
    const isDefAttacking = aiHasNoOneNow && ['GK','DEF'].includes(s._role)
    return { ...live, _line: s._role, ...(isDefAttacking ? { note_a: Math.max(1, Number(live.note_a)||0) } : {}) }
  })
  const calc = calcAttack(selected, game.modifiers.home)
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
  updateLastPlayer(game, ctx, ctx.state.profile.id)
  // Re-piocher les objets joueurs À JOUR (boost inclus) depuis game.homeTeam.
  const selected = game.selected.map(s => {
    const live = (game.homeTeam[s._role]||[]).find(x => x.cardId === s.cardId) || s
    return { ...live, _line: s._role }
  })
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
    homePlayers: game.selected.map(s => { const pp = (game.homeTeam[s._role]||[]).find(x=>x.cardId===s.cardId)||s; return { name:pp.name, note:(pp._line==='GK'?Number(pp.note_g)||0:pp._line==='MIL'?Number(pp.note_m)||0:Number(pp.note_d)||0)+(pp.boost||0), portrait:getPortrait(pp), job:pp.job, country_code:pp.country_code, rarity:pp.rarity, clubName:pp.clubName, clubLogo:pp.clubLogo } }),
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
function aiMaySub(game) {
  if (game.aiSubsUsed >= game.aiMaxSubs) return
  const usedPlayers = Object.values(game.aiTeam).flat().filter(p => p.used)
  if (!usedPlayers.length) return
  const availSubs = (game.aiSubs || []).filter(s => !game.aiUsedSubIds.includes(s.cardId))
  if (!availSubs.length) return
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
}

function aiMayPlayGC(game) {
  if (!game.aiGcCards?.length) return
  const available = game.aiGcCards.filter(gc => !game.aiUsedGc.includes(gc.id))
  if (!available.length) return
  // 30% de chance de jouer un GC par tour
  if (Math.random() > 0.30) return
  const gc = available[Math.floor(Math.random() * available.length)]
  game.aiUsedGc.push(gc.id)
  // Appliquer l'effet GC côté IA
  const def = GC_DEFS[gc.gc_type] || {}
  switch(gc.gc_type) {
    case 'Boost+2': {
      const targets = Object.values(game.aiTeam).flat().filter(p => !p.used)
      if (targets.length) { const t = targets[Math.floor(Math.random()*targets.length)]; t.boost = (t.boost||0)+2 }
      break
    }
    case 'Boost+3': {
      const targets = Object.values(game.aiTeam).flat().filter(p => !p.used)
      if (targets.length) { const t = targets[Math.floor(Math.random()*targets.length)]; t.boost = (t.boost||0)+3 }
      break
    }
    case 'Remplacement+': game.aiMaxSubs = (game.aiMaxSubs||3)+1; break
    case 'Bouclier':      game.modifiers.ai.shield = true; break
    case 'Nul+1':         game.modifiers.ai.drawBonus = (game.modifiers.ai.drawBonus||0)+1; break
    default: break
  }
  game.log.push({ text: `⚡ IA joue ${gc.icon||'⚡'} ${gc.name}`, type:'gc' })
}

function aiTurn(container, game, ctx) {
  updateLastPlayer(game, ctx, null)
  // IA tente un remplacement ou un GC avant d'attaquer
  aiMaySub(game)
  aiMayPlayGC(game)
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

  // Nouvelle règle : si l'IA n'a plus aucun joueur sur le terrain,
  // le joueur marque automatiquement, même avec un défenseur.
  const aiAvailable = ['GK','DEF','MIL','ATT'].flatMap(r => (game.aiTeam[r]||[]).filter(p=>!p.used))
  if (!aiAvailable.length) {
    game.homeScore++
    const att = game.pendingAttack?.players || []
    const duelEntry = {
      type:'duel', isGoal:true, homeScored:true,
      homePlayers: att.map(p => ({ name:p.name, note:getNoteForRole(p,p._line||p.job), portrait:getPortrait(p), job:p.job, country_code:p.country_code, rarity:p.rarity, clubName:p.clubName, clubLogo:p.clubLogo })),
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

function nextTurn(container, game, ctx, next) {
  game.round++
  if (isMatchOver(game)) { finishMatch(container, game, ctx); return }
  if (next === 'home-attack') {
    const homeAtt = [...(game.homeTeam.MIL||[]),...(game.homeTeam.ATT||[])].filter(p=>!p.used)
    if (!homeAtt.length) {
      // Plus d'attaquants — s'il reste des défenseurs, l'IA attaque et le joueur
      // peut encore défendre. Sans ça, le match se terminait prématurément.
      const homeDef = [...(game.homeTeam.GK||[]),...(game.homeTeam.DEF||[]),...(game.homeTeam.MIL||[])].filter(p=>!p.used)
      if (!homeDef.length) {
        // Vraiment plus aucun joueur → fin de match normale
        checkEnd(container, game, ctx); return
      }
      // Il reste des défenseurs : l'IA attaque, le joueur doit défendre
      const aiAtt2 = [...(game.aiTeam.MIL||[]),...(game.aiTeam.ATT||[])].filter(p=>!p.used)
      if (!aiAtt2.length) { checkEnd(container, game, ctx); return }
      setTimeout(() => aiTurn(container, game, ctx), 100)
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

function showGameToast(msg, color='rgba(0,0,0,0.8)') {
  const el = document.createElement('div')
  el.style.cssText = `position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${color};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`
  el.textContent = msg
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 2200)
}

function renderSubCard(p) {
  const portrait = getPortrait(p)
  const jobColor = JOB_COLORS[p.job] || '#555'
  const rarityBorder = { normal:'rgba(255,255,255,0.2)', pepite:'#D4A017', pépite:'#D4A017', papyte:'#909090', legende:'#7a28b8', légende:'#7a28b8' }[p.rarity] || 'rgba(255,255,255,0.2)'
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

