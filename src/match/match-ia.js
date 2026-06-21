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

  await loadMatchSetup(container, ctx, matchMode, async ({ deckId, formation, starters, subsRaw, gcCardsEnriched, gcDefs }) => {
    try {
      const homeTeam = buildTeam(starters, formation)
      const aiTeam   = await generateAITeam(formation, difficulty)

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

          const game = {
            gcDefs:   gcDefs || [],
            matchId:  match?.id, mode, difficulty, formation,
            homeTeam, aiTeam,
            homeSubs: subsRaw,
            subsUsed: 0, maxSubs: Math.min(subsRaw.length, 3),
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

function renderLogEntry(entry) {
  if (entry.type === 'duel') {
    const hw = entry.homeTotal >= entry.aiTotal
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
        ? `<div id="boost-card" style="width:110px;height:150px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;flex-shrink:0">
            <div style="font-size:30px">⚡</div>
            <div style="font-size:13px;color:#000;font-weight:900">+${game.boostCard?.value}</div>
          </div>`
        : gcCardDesign(gc, 110, 150)

      const gcMiniMob = (gc, isBoost) => isBoost
        ? `<div id="boost-card" style="width:68px;height:95px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;text-align:center;flex-shrink:0">
            <div style="font-size:20px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${game.boostCard?.value}</div>
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
        // ══ LAYOUT MOBILE : subs | terrain | (GC en ligne + bouton pleine largeur) ══
        return `
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${subsHTML}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${renderTeam(game.homeTeam,game.formation,game.phase,selectedIds,300,300)}
            </div>
          </div>
        </div>
        <!-- Zone bas mobile : GC en ligne scrollable AU-DESSUS, bouton pleine largeur EN DESSOUS -->
        <div style="flex-shrink:0;background:rgba(0,0,0,0.35);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${activeGCs.map(gc=>gcMiniMob(gc,false)).join('')}
            ${boostAvail?gcMiniMob(null,true):''}
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
      ms.style.height = '100%'
      ms.style.maxHeight = '100%'
      ms.style.overflow = 'hidden'
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

