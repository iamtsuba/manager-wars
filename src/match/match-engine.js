/**
 * match-engine.js — Moteur de match universel
 *
 * Gère tout le rendu UI et la logique commune à tous les modes :
 * - Affichage terrain (SVG responsive PC/mobile)
 * - Phases attaque/défense
 * - Historique des actions
 * - Substitutions
 * - Game Changers
 * - Animations (but, remplacement, milieu)
 *
 * Chaque mode de match fournit des hooks :
 * {
 *   mode,           // 'ia' | 'random' | 'friend' | 'mini-league' | 'ranked'
 *   onSetup,        // async () => { homeTeam, aiTeam, formation, ... }
 *   onAttackEnd,    // async (result, game) => void
 *   onDefenseEnd,   // async (result, game) => void
 *   onMatchEnd,     // async (game) => void
 *   onAITurn,       // async (game) => { selected, phase } — pour IA uniquement
 * }
 */

import { supabase } from '../lib/supabase.js'
import { renderPlayerCard } from '../components/player-card.js'
import {
  calcAttack, calcDefense, calcMidfieldDuel, resolveDuel,
  getNoteForRole, getRewards
} from './game-logic.js'
import {
  showMsg, getPortrait, buildTeam, rollBoost,
  applyStadiumBonus, applyStadiumBonusToSubs,
  _hideBottomNav, _showBottomNav,
  renderMiniCardHTML, renderCardRow, renderMiniPlayer,
  buildTeamSVG, renderTeam, flagImgUrl,
  getClubLogo, JOB_COLORS, FORMATIONS, loadMatchSetup,
  renderDeckSelect, showGCSelection,
} from './match-shared.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, getActiveLinks } from './formation-links.js'

const BASE = import.meta.env.BASE_URL

// ── Dimensions SVG responsive ────────────────────────────────────────────────
export function svgW() {
  return Math.min(window.innerWidth - 40, 860)
}
export function svgH() {
  return Math.round(svgW() * 1.05)
}

// ── Helper histPlayer ─────────────────────────────────────────────────────────
export function histPlayer(p) {
  const role = p._line || p.job || 'MIL'
  const noteVal = role==='GK' ? (p.note_g||0) : role==='DEF' ? (p.note_d||0)
                : role==='MIL' ? (p.note_m||0) : (p.note_a||0)
  return {
    name: p.name, firstname: p.firstname || '',
    note: noteVal + (p.boost||0) + (p.stadiumBonus ? 10 : 0),
    note_g: p.note_g||0, note_d: p.note_d||0, note_m: p.note_m||0, note_a: p.note_a||0,
    _evolution_bonus: 0,
    stadiumBonus: p.stadiumBonus || false,
    boost: p.boost || 0,
    job: p.job, job2: p.job2 || null,
    _line: p._line || p.job, _col: p._col,
    country_code: p.country_code,
    club_id: p.club_id,
    rarity: p.rarity,
    clubName: p.clubName || p.clubs?.encoded_name || null,
    clubLogo: p.clubLogo || p.clubs?.logo_url || null,
    face: p.face || null,
    portrait: getPortrait(p),
  }
}

// ── Recalcul stadiumBonus depuis stadiumDef ───────────────────────────────────
export function withStadBonus(player, stadiumDef) {
  if (!stadiumDef) return player
  const stadB = player.stadiumBonus || (
    (stadiumDef.club_id && String(player.club_id) === String(stadiumDef.club_id)) ||
    (stadiumDef.country_code && player.country_code === stadiumDef.country_code)
  )
  return { ...player, stadiumBonus: !!stadB }
}

// ── renderLogEntry ────────────────────────────────────────────────────────────
export function renderLogEntry(entry) {
  const cardW = Math.min(52, Math.round(svgW() * 0.08))

  if (entry.type === 'duel') {
    const homeCards = (entry.homePlayers||[]).map(p =>
      renderPlayerCard(p, { width: cardW, role: p._line || p.job, extraNote: p.boost||0 })
    ).join('')
    const aiCards = (entry.aiPlayers||[]).map(p =>
      renderPlayerCard(p, { width: cardW, role: p._line || p.job, extraNote: p.boost||0 })
    ).join('')
    return `
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">
        ${entry.title||'Duel'}
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:4px">${homeCards}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.6)">
        ${entry.homeLabel||''} : ${entry.homeBase||0} + ${entry.homeLinks||0} liens = <b>${entry.homeTotal||0}</b>
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin:4px 0">${aiCards}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.6)">
        ${entry.aiLabel||'IA'} : ${entry.aiBase||0} + ${entry.aiLinks||0} liens = <b>${entry.aiTotal||0}</b>
      </div>`
  }

  if (entry.type === 'attack' || entry.type === 'defense') {
    const myCards = (entry.homePlayers||[]).map(p =>
      renderPlayerCard(p, { width: cardW, role: p._line || p.job, extraNote: p.boost||0 })
    ).join('')
    const oppCards = (entry.aiPlayers||[]).map(p =>
      renderPlayerCard(p, { width: cardW, role: p._line || p.job, extraNote: p.boost||0 })
    ).join('')
    return `
      <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">
        ${entry.type === 'attack' ? '⚔️ Attaque' : '🛡️ Défense'}
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap">${myCards}</div>
      <div style="font-size:13px;font-weight:900;margin:6px 0;color:${entry.win?'#22c55e':'#ef4444'}">
        ${entry.homeTotal} vs ${entry.aiTotal} → ${entry.win ? '✅ Gagné' : '❌ Perdu'}
      </div>
      ${oppCards ? `<div style="display:flex;gap:4px;flex-wrap:wrap">${oppCards}</div>` : ''}`
  }

  if (entry.type === 'sub') {
    return `
      <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
        ${entry.outPlayer ? renderPlayerCard(entry.outPlayer, { width: cardW }) : ''}
        <span style="font-size:18px;color:rgba(255,255,255,0.4)">→</span>
        ${entry.inPlayer ? renderPlayerCard(entry.inPlayer, { width: cardW }) : ''}
      </div>`
  }

  if (entry.type === 'gc') {
    return `
      <div style="font-size:11px;color:#7a28b8;text-transform:uppercase">⚡ Game Changer</div>
      <div style="font-size:13px;font-weight:700;margin-top:2px">${entry.text||''}</div>`
  }

  return `<div style="font-size:12px;color:rgba(255,255,255,0.6)">${entry.text||''}</div>`
}

// ── Rendu terrain responsive ──────────────────────────────────────────────────
export function renderMatchField(team, formation, phase, selectedIds, extraSelectableIds = []) {
  const W = svgW()
  const H = svgH()
  return renderTeam(team, formation, phase, selectedIds, W, H, extraSelectableIds)
}

// ── showGoalAnimation ─────────────────────────────────────────────────────────
export function showGoalAnimation(players, homeScore, aiScore, isHome, callback) {
  const cardW = Math.min(80, Math.round(svgW() * 0.12))
  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px`

  const cards = (players||[]).map(p =>
    renderPlayerCard(p, { width: cardW, role: p._line || p.job, extraNote: p.boost||0 })
  ).join('')

  overlay.innerHTML = `
    <div style="font-size:60px;animation:goalPulse 0.5s ease-in-out 3">${isHome ? '⚽' : '😞'}</div>
    <div style="font-size:28px;font-weight:900;color:${isHome?'#22c55e':'#ef4444'}">
      ${isHome ? 'BUT !' : 'BUT ENCAISSÉ'}
    </div>
    <div style="font-size:48px;font-weight:900;color:#fff">${homeScore} — ${aiScore}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">${cards}</div>`

  document.body.appendChild(overlay)
  setTimeout(() => { overlay.remove(); callback?.() }, 2200)
}

// ── showSubAnimation ──────────────────────────────────────────────────────────
export function showSubAnimation(outPlayer, inPlayer, callback) {
  const cardW = Math.min(80, Math.round(svgW() * 0.12))
  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px`
  overlay.innerHTML = `
    <div style="font-size:24px;font-weight:900;color:#fff">🔄 REMPLACEMENT</div>
    <div style="display:flex;align-items:center;gap:20px">
      <div style="text-align:center;opacity:0.6">
        ${renderPlayerCard(outPlayer, { width: cardW })}
        <div style="font-size:12px;color:#ef4444;margin-top:4px">Sort</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.4)">→</div>
      <div style="text-align:center">
        ${renderPlayerCard(inPlayer, { width: cardW })}
        <div style="font-size:12px;color:#22c55e;margin-top:4px">Entre</div>
      </div>
    </div>`
  document.body.appendChild(overlay)
  setTimeout(() => { overlay.remove(); callback?.() }, 1800)
}

// ── showGameToast ─────────────────────────────────────────────────────────────
export function showGameToast(msg, color = 'rgba(0,0,0,0.85)') {
  const el = document.createElement('div')
  el.style.cssText = `
    position:fixed;top:80px;left:50%;transform:translateX(-50%) translateY(-20px);
    background:${color};color:#fff;padding:10px 20px;border-radius:12px;
    font-size:15px;font-weight:700;z-index:4000;pointer-events:none;
    transition:opacity 0.4s,transform 0.4s;opacity:0`
  el.textContent = msg
  document.body.appendChild(el)
  requestAnimationFrame(() => {
    el.style.opacity = '1'
    el.style.transform = 'translateX(-50%) translateY(0)'
  })
  setTimeout(() => {
    el.style.opacity = '0'
    setTimeout(() => el.remove(), 400)
  }, 2000)
}

// ── Affichage équipe adverse ──────────────────────────────────────────────────
export function renderOpponentReveal(container, game, ctx) {
  const W = svgW()
  const H = svgH()
  _hideBottomNav(container)
  container.innerHTML = `
    <div style="min-height:100vh;background:var(--page-bg);background-image:var(--page-gradient);
      display:flex;flex-direction:column;align-items:center;padding:20px 16px 80px">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">
        Équipe Adverse
      </div>
      <div style="font-size:24px;font-weight:900;color:#ef4444;margin-bottom:8px">
        ${game.aiName || 'IA'}
      </div>
      ${game.aiStadiumDef ? `
        <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:#D4A017;margin-bottom:12px">
          ${game.aiStadiumDef.club?.logo_url
            ? `<img src="${game.aiStadiumDef.club.logo_url}" style="width:20px;height:20px;object-fit:contain">`
            : '🏟️'}
          <span>${game.aiStadiumDef.name} · +10 aux joueurs ${game.aiStadiumDef.club?.encoded_name||game.aiStadiumDef.country_code||''}</span>
        </div>` : ''}
      <div style="width:100%;max-width:${W}px">
        ${buildTeamSVG(game.aiTeam, game.formation, null, [], W, H)}
      </div>
      <div id="reveal-loading" style="margin-top:20px;color:rgba(255,255,255,0.5);font-size:14px">
        Chargement...
      </div>
    </div>`
}

// ── Duel milieu de terrain ────────────────────────────────────────────────────
export function renderMidfieldDuel(container, game, homeName, homeTotal, aiTotal, homeBase, aiBase, homeLinks, aiLinks, homeMils, aiMils, homeWins, stadDef, callback) {
  const cardW = Math.min(90, Math.round(svgW() * 0.10))
  _hideBottomNav(container)

  function milCard(p) {
    return renderPlayerCard(
      { ...p, _evolution_bonus: 0 },
      { width: cardW, showStad: true, stadDef, role: 'MIL', extraNote: p.boost||0 }
    )
  }

  container.innerHTML = `
    <div style="min-height:100vh;background:var(--page-bg);background-image:var(--page-gradient);
      display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:20px">
      <div style="font-size:12px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase">
        Duel du Milieu de Terrain
      </div>

      <div style="width:100%;max-width:700px">
        <div style="font-size:13px;font-weight:700;color:#D4A017;text-align:center;margin-bottom:8px">
          ${homeName}
        </div>
        <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap">
          ${homeMils.map(milCard).join('')}
        </div>
        <div style="font-size:12px;color:rgba(255,255,255,0.5);text-align:center;margin-top:6px">
          Score: ${homeBase} + ${homeLinks} liens = <b style="color:#fff">${homeTotal}</b>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div style="font-size:64px;font-weight:900;color:${homeWins?'#22c55e':'#ef4444'}">${homeTotal}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4)">VS</div>
        <div style="font-size:64px;font-weight:900;color:${!homeWins?'#22c55e':'#ef4444'}">${aiTotal}</div>
      </div>

      <div style="width:100%;max-width:700px">
        <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.7);text-align:center;margin-bottom:8px">
          IA
        </div>
        <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap">
          ${aiMils.map(milCard).join('')}
        </div>
        <div style="font-size:12px;color:rgba(255,255,255,0.5);text-align:center;margin-top:6px">
          Score: ${aiBase} + ${aiLinks} liens = <b style="color:#fff">${aiTotal}</b>
        </div>
      </div>
    </div>`

  setTimeout(callback, 3500)
}

// ── Résultat attaque/défense ──────────────────────────────────────────────────
export function renderDuelResult(container, homeScore, aiScore, homeTotal, aiTotal, homePlayers, aiPlayers, win, isAttack, callback) {
  const cardW = Math.min(80, Math.round(svgW() * 0.10))

  const makeCards = (players) => (players||[]).map(p =>
    renderPlayerCard(p, { width: cardW, role: p._line || p.job, extraNote: p.boost||0 })
  ).join('')

  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:2500;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px`

  overlay.innerHTML = `
    <div style="font-size:13px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase">
      ${isAttack ? 'Attaque' : 'Défense'}
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
      ${makeCards(homePlayers)}
    </div>
    <div style="display:flex;align-items:center;gap:24px">
      <div style="text-align:center">
        <div style="font-size:48px;font-weight:900;color:#fff">${homeTotal}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.4)">Vous</div>
      </div>
      <div style="font-size:20px;color:rgba(255,255,255,0.3)">VS</div>
      <div style="text-align:center">
        <div style="font-size:48px;font-weight:900;color:#fff">${aiTotal}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.4)">IA</div>
      </div>
    </div>
    ${aiPlayers?.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">${makeCards(aiPlayers)}</div>` : ''}
    <div style="font-size:28px;font-weight:900;color:${win?'#22c55e':'#ef4444'}">
      ${win ? '✅ Réussi !' : '❌ Raté !'}
    </div>
    <div style="font-size:24px;font-weight:900;color:#D4A017">${homeScore} — ${aiScore}</div>`

  document.body.appendChild(overlay)
  setTimeout(() => { overlay.remove(); callback?.() }, 2500)
}
