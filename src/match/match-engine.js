/**
 * match-engine.js — Moteur de rendu universel pour tous les modes de match.
 *
 * Ce fichier est l'unique source de vérité pour :
 *   - Calcul des dimensions SVG (svgW / svgH)
 *   - Construction d'objets player pour l'historique (histPlayer / withStadBonus)
 *   - Rendu du terrain (renderMatchField)
 *   - Rendu de la révélation adverse (renderOpponentReveal)
 *   - Rendu du duel milieu (renderMidfieldDuel)
 *   - Rendu du résultat d'un duel (renderDuelResult)
 *   - Rendu d'une entrée de log (renderLogEntry)
 *   - Animations : but (showGoalAnimation), remplacement (showSubAnimation), toast (showGameToast)
 *
 * Chaque mode de match (IA, random, friend, mini-league, ranked) importe ce fichier
 * et y ajoute uniquement sa logique spécifique.
 */

import { renderPlayerCard } from '../components/player-card.js'
import { buildTeamSVG, renderTeam, getPortrait, renderMiniCardHTML } from './match-shared.js'
import { getNoteForRole } from './game-logic.js'
import { linkColor } from './formation-links.js'

const BASE = import.meta.env.BASE_URL

// ── Dimensions SVG ─────────────────────────────────────────
// Source unique pour W et H — garantit la cohérence PC/mobile

export function svgW() {
  return Math.min(window.innerWidth - 40, 860)
}

export function svgH() {
  return Math.round(svgW() * 1.1)
}

// ── Helper player pour l'historique ───────────────────────
// Préserve : notes avec evo intégré, stadiumBonus, boost, face, _line

export function histPlayer(p) {
  if (!p) return null
  const role = p._line || p.job || 'MIL'
  const noteVal = role === 'GK'  ? (p.note_g || 0)
                : role === 'DEF' ? (p.note_d || 0)
                : role === 'MIL' ? (p.note_m || 0)
                :                  (p.note_a || 0)
  const stadB = p.stadiumBonus ? 10 : 0
  return {
    name:      p.name,
    firstname: p.firstname || '',
    note:      noteVal + (p.boost || 0) + stadB,
    note_g:    p.note_g  || 0,
    note_d:    p.note_d  || 0,
    note_m:    p.note_m  || 0,
    note_a:    p.note_a  || 0,
    _evolution_bonus: 0,   // evo déjà intégré dans les notes par playerFromCard
    stadiumBonus:  p.stadiumBonus  || false,
    boost:         p.boost         || 0,
    job:           p.job,
    job2:          p.job2          || null,
    _line:         p._line         || p.job,
    _col:          p._col,
    country_code:  p.country_code,
    club_id:       p.club_id,
    rarity:        p.rarity,
    clubName:      p.clubName      || p.clubs?.encoded_name || null,
    clubLogo:      p.clubLogo      || p.clubs?.logo_url     || null,
    face:          p.face          || null,
    portrait:      getPortrait(p),
  }
}

// Recalcule stadiumBonus depuis stadiumDef (robuste aux pertes de flag)
export function withStadBonus(player, stadiumDef) {
  if (!stadiumDef || !player) return player
  const match = (
    (stadiumDef.club_id      && String(player.club_id)      === String(stadiumDef.club_id)) ||
    (stadiumDef.country_code && player.country_code          === stadiumDef.country_code)
  )
  return { ...player, stadiumBonus: match }
}

// ── Rendu terrain de match ─────────────────────────────────

export function renderMatchField(game, selectedIds = [], extraSelectableIds = []) {
  const W = svgW(), H = svgH()
  return renderTeam(
    game.homeTeam,
    game.formation,
    game.phase,
    selectedIds,
    W, H,
    extraSelectableIds
  )
}

// ── Révélation équipe adverse ──────────────────────────────

export function renderOpponentReveal(team, formation, stadiumDef, label = 'Adversaire') {
  const W = svgW(), H = svgH()
  const stadLabel = stadiumDef
    ? `<div style="font-size:12px;color:#D4A017;margin-bottom:8px">
        🏟️ ${stadiumDef.name || 'Stade'} · <span style="color:#D4A017">+10 aux joueurs ${stadiumDef.club?.encoded_name || stadiumDef.country_code || ''}</span>
       </div>`
    : ''
  return `
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${label}</div>
      ${stadLabel}
      <div style="width:100%;max-width:${W}px;margin:0 auto">
        ${buildTeamSVG(team, formation, null, [], W, H)}
      </div>
    </div>`
}

// ── Duel du milieu de terrain ──────────────────────────────

export function renderMidfieldDuel(homeMils, aiMils, homeLabel, aiLabel, homeTotal, aiTotal, homeStad, aiStad) {
  const renderMilCard = (p, stadDef) => renderPlayerCard(
    { ...p, _evolution_bonus: 0 },
    {
      width: window.innerWidth >= 900 ? Math.min(150, Math.max(90, Math.round(window.innerWidth * 0.22 / 3))) : 58,
      showStad: true,
      stadDef,
      role: 'MIL',
      extraNote: p.boost || 0,
    }
  )

  const homeScore = `${homeMils.reduce((s, p) => {
    const base = p.note_m || 0
    const stadB = homeStad && (
      (homeStad.club_id     && String(p.club_id)     === String(homeStad.club_id)) ||
      (homeStad.country_code && p.country_code        === homeStad.country_code)
    ) ? 10 : 0
    return s + base + (p.boost || 0) + stadB
  }, 0)}`

  return `
    <div style="text-align:center;padding:16px">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:12px">Duel du Milieu de Terrain</div>

      <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">${homeLabel}</div>
      <div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;margin-bottom:8px">
        ${homeMils.slice(0,5).map(p => renderMilCard(p, homeStad)).join('')}
      </div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:16px">Score: ${homeTotal} + liens = <b style="color:#fff">${homeTotal}</b></div>

      <div style="font-size:36px;font-weight:900;color:#D4A017">${homeTotal}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.4);margin:4px 0">VS</div>
      <div style="font-size:36px;font-weight:900;color:rgba(255,255,255,0.5)">${aiTotal}</div>

      <div style="font-size:13px;font-weight:700;color:#fff;margin-top:16px;margin-bottom:8px">${aiLabel}</div>
      <div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;margin-bottom:8px">
        ${aiMils.slice(0,5).map(p => renderMilCard(p, aiStad)).join('')}
      </div>
    </div>`
}

// ── Résultat d'un duel attaque/défense ─────────────────────

export function renderDuelResult(attPlayers, defPlayers, attTotal, defTotal, attName, defName, attWon) {
  const renderCard = (p) => renderPlayerCard(
    { ...p, _evolution_bonus: 0 },
    { width: window.innerWidth >= 900 ? Math.min(150, Math.max(90, Math.round(window.innerWidth * 0.22 / 3))) : 58, showStad: true, role: p._line || p.job }
  )

  return `
    <div style="text-align:center;padding:16px">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:12px">Duel</div>
      <div style="display:flex;justify-content:center;gap:4px;margin-bottom:8px">
        ${(attPlayers||[]).slice(0,5).map(renderCard).join('')}
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,0.6)">${attName}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;margin:16px 0">
        <div style="font-size:42px;font-weight:900;color:${attWon?'#22c55e':'#e03030'}">${attTotal}</div>
        <div style="font-size:16px;color:rgba(255,255,255,0.4)">VS</div>
        <div style="font-size:42px;font-weight:900;color:${attWon?'#e03030':'#22c55e'}">${defTotal}</div>
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,0.6)">${defName}</div>
      <div style="display:flex;justify-content:center;gap:4px;margin-top:8px">
        ${(defPlayers||[]).slice(0,5).map(renderCard).join('')}
      </div>
    </div>`
}

// ── Entrée de log (historique des actions) ─────────────────

export function renderLogEntry(entry) {
  if (!entry) return ''

  const renderCard = (p) => {
    if (!p) return ''
    return renderPlayerCard(
      { ...p, _evolution_bonus: 0 },
      { width: 52, role: p._line || p.job, showStad: !!p.stadiumBonus, extraNote: p.boost || 0 }
    )
  }

  const icons = {
    'goal':         '⚽',
    'goal-home':    '⚽',
    'goal-ai':      '⚽',
    'duel':         '⚔️',
    'midfield':     '🎯',
    'sub':          '🔄',
    'gc':           '⚡',
    'boost':        '💥',
    'defense-won':  '🛡️',
    'attack-won':   '⚔️',
    'defense-lost': '😓',
    'attack-lost':  '😓',
  }

  const icon = icons[entry.type] || '📋'
  const isGoal = entry.type?.includes('goal')

  return `
    <div style="padding:8px 12px;border-left:3px solid ${isGoal?'#22c55e':'rgba(255,255,255,0.15)'};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:4px">${icon} ${entry.title||entry.text||''}</div>
      ${entry.homePlayers?.length ? `
        <div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:4px">
          ${entry.homePlayers.map(renderCard).join('')}
        </div>` : ''}
      ${entry.aiPlayers?.length ? `
        <div style="display:flex;gap:3px;flex-wrap:wrap">
          ${entry.aiPlayers.map(renderCard).join('')}
        </div>` : ''}
      ${entry.text && entry.title ? `<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px">${entry.text}</div>` : ''}
    </div>`
}

// ── Animation but ──────────────────────────────────────────

export function showGoalAnimation(scoringPlayers, homeScore, aiScore, homeScored, onDone) {
  const existing = document.getElementById('goal-anim-overlay')
  if (existing) existing.remove()

  const overlay = document.createElement('div')
  overlay.id = 'goal-anim-overlay'
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`

  const cards = (scoringPlayers || []).slice(0, 3).map(p =>
    renderPlayerCard({ ...p, _evolution_bonus: 0 }, {
      width: Math.min(140, Math.round(window.innerWidth / 4)),
      role: p._line || p.job,
      showStad: !!p.stadiumBonus,
    })
  ).join('')

  overlay.innerHTML = `
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${cards}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${homeScored ? `<span style="color:#22c55e">${homeScore}</span>` : homeScore}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${!homeScored ? `<span style="color:#22c55e">${aiScore}</span>` : aiScore}
      </div>
    </div>`

  document.body.appendChild(overlay)

  // Animation CSS
  if (!document.getElementById('goal-anim-style')) {
    const style = document.createElement('style')
    style.id = 'goal-anim-style'
    style.textContent = `
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`
    document.head.appendChild(style)
  }

  setTimeout(() => {
    overlay.style.opacity = '0'
    overlay.style.transition = 'opacity 0.4s'
    setTimeout(() => { overlay.remove(); onDone?.() }, 400)
  }, 1800)
}

// ── Animation remplacement ─────────────────────────────────

export function showSubAnimation(outPlayer, inPlayer, onDone) {
  const existing = document.getElementById('sub-anim-overlay')
  if (existing) existing.remove()

  const overlay = document.createElement('div')
  overlay.id = 'sub-anim-overlay'
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`

  const W = Math.min(120, Math.round(window.innerWidth / 4))
  const outCard = outPlayer ? renderPlayerCard({ ...outPlayer, _evolution_bonus: 0 }, { width: W, role: outPlayer._line || outPlayer.job }) : ''
  const inCard  = inPlayer  ? renderPlayerCard({ ...inPlayer,  _evolution_bonus: 0 }, { width: W, role: inPlayer._line  || inPlayer.job  }) : ''

  overlay.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🔄</div>
      <div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:16px">Remplacement</div>
      <div style="display:flex;align-items:center;gap:16px;justify-content:center">
        <div style="text-align:center">
          ${outCard}
          <div style="font-size:10px;color:#e03030;margin-top:4px">SORT ▼</div>
        </div>
        <div style="font-size:28px;color:rgba(255,255,255,0.4)">→</div>
        <div style="text-align:center">
          ${inCard}
          <div style="font-size:10px;color:#22c55e;margin-top:4px">ENTRE ▲</div>
        </div>
      </div>
    </div>`

  document.body.appendChild(overlay)
  setTimeout(() => {
    overlay.style.opacity = '0'
    overlay.style.transition = 'opacity 0.4s'
    setTimeout(() => { overlay.remove(); onDone?.() }, 400)
  }, 1600)
}

// ── Toast de match ─────────────────────────────────────────

export function showGameToast(msg, bg = 'rgba(0,0,0,0.85)', duration = 2200) {
  const existing = document.getElementById('game-toast')
  if (existing) existing.remove()

  const el = document.createElement('div')
  el.id = 'game-toast'
  el.style.cssText = `
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${bg};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`
  el.textContent = msg

  if (!document.getElementById('game-toast-style')) {
    const style = document.createElement('style')
    style.id = 'game-toast-style'
    style.textContent = `
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`
    document.head.appendChild(style)
  }

  document.body.appendChild(el)
  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transition = 'opacity 0.3s'
    setTimeout(() => el.remove(), 300)
  }, duration)
}


// ── Duel milieu : calculs et rendu ──────────────────────────
// Source unique partagée par match-ia.js et match-pvp.js

function milNoteWithBonus(p, stadDef) {
  const base = getNoteForRole(p, 'MIL')
  const stadBonus = (p.stadiumBonus || (stadDef && (
    (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
    (stadDef.country_code && p.country_code === stadDef.country_code)
  ))) ? 10 : 0
  return base + stadBonus
}

export function milScore(mils, stadDef) {
    return mils.reduce((s,p) => s + milNoteWithBonus(p, stadDef), 0)
  }

export function milLinks(mils) {
    let bonus = 0
    for (let i = 0; i < mils.length-1; i++) {
      const c = linkColor(mils[i], mils[i+1])
      if (c === '#00ff88') bonus += 2
      else if (c === '#FFD700') bonus += 1
    }
    return bonus
  }

export function renderMilRow(mils, label, color, side, stadDef) {
    return `<div id="duel-row-${side}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${label}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${mils.map((p, i) => {
          const lc = i < mils.length-1 ? linkColor(p, mils[i+1]) : null
          const noLink = !lc || lc === '#ff3333' || lc === '#cc2222'
          const linkVal = lc === '#00ff88' ? '+2' : lc === '#FFD700' ? '+1' : ''
          const noteDisplay = milNoteWithBonus(p, stadDef)
          const hasStad = p.stadiumBonus || (stadDef && (
            (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
            (stadDef.country_code && p.country_code === stadDef.country_code)
          ))
          return `
          <div class="duel-card duel-card-${side}" data-idx="${i}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${renderPlayerCard({ ...p, _evolution_bonus: 0 }, {
              width: window.innerWidth >= 900 ? Math.min(150, Math.max(90, Math.round(window.innerWidth * 0.22 / 3))) : 58,
              showStad: true, stadDef, role: 'MIL', extraNote: p.boost||0
            })}
          </div>
          ${i < mils.length-1 ? `<div class="duel-link duel-link-${side}" data-idx="${i}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${noLink?'rgba(255,255,255,0.12)':lc};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${noLink?'none':`0 0 8px ${lc}`}">
            ${linkVal?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${lc}">${linkVal}</span>`:''}
          </div>` : ''}
          `
        }).join('')}
      </div>
      <div class="duel-score-line duel-score-line-${side}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${milScore(mils, stadDef)} + ${milLinks(mils)} liens = <b style="color:#fff">${milScore(mils, stadDef)+milLinks(mils)}</b>
      </div>
    </div>`
  }

