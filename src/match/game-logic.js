/**
 * Manager Wars — Logique de jeu (GDD §7 & §8)
 * Liens séquentiels : orange (club OU pays) = +1, vert (club ET pays) = +2
 */
import { linkColor } from './formation-links.js'

export const GC_DEFS = {
  'Ressusciter':    { icon:'💫', desc:'Réactive un joueur grisé pour ce match.' },
  'Double attaque': { icon:'⚡', desc:'La note d\'attaque compte double.' },
  'Bouclier':       { icon:'🛡️', desc:'Annule le prochain but adverse.' },
  'Vol de note':    { icon:'🎯', desc:'-1 à la note d\'un joueur adverse.' },
  'Gel':            { icon:'❄️', desc:'Bloque le meilleur attaquant IA.' },
  'Remplacement+':  { icon:'🔄', desc:'+1 remplacement pour ce match.' },
}

export function getColsForCount(n) {
  if (n === 1) return [1]
  if (n === 2) return [0, 2]
  if (n === 3) return [0, 1, 2]
  if (n === 4) return [0, 1, 1, 2]
  if (n === 5) return [0, 1, 1, 1, 2]
  return [1]
}

export function assignCols(players, role, allLines) {
  const n = players.length
  const cols = getColsForCount(n)
  return players.map((p, i) => ({ ...p, _line: role, _col: cols[i] }))
}

export function getNoteForRole(player, role) {
  if (!player) return 0
  switch (role) {
    case 'GK':  return Number(player.note_g) || 0
    case 'DEF': return Number(player.note_d) || 0
    case 'MIL': return Number(player.note_m) || 0
    case 'ATT': return Number(player.note_a) || 0
    default:    return 0
  }
}

/**
 * Calcul des liens — règle GDD révisée :
 * On parcourt les joueurs sélectionnés dans l'ordre de sélection.
 * Pour chaque paire consécutive (i, i+1) :
 *   - lien vert  (#00ff88) : même club ET même pays → +2
 *   - lien jaune (#FFD700) : même club OU même pays → +1
 *   - lien rouge : aucune chimie → +0
 * Exemple : 3 DEF note 5 + liens orange entre eux → 5 +1 +5 +1 +5 = 17
 */
export function calcLinks(selected) {
  let bonus = 0
  for (let i = 0; i < selected.length - 1; i++) {
    const a = selected[i]
    const b = selected[i + 1]
    if (!a || !b) continue
    const lc = linkColor(a, b)
    if (lc === '#00ff88')  bonus += 2  // vert : club + pays = +2
    else if (lc === '#FFD700') bonus += 1  // jaune : club OU pays = +1
    // rouge = +0
  }
  return bonus
}

export function calcAttack(selected, modifiers = {}) {
  const base = selected.reduce((s, p) => {
    const r = p._line || p.job
    return s + (Number(r === 'MIL' ? p.note_m : p.note_a) || 0)
  }, 0)
  const links = calcLinks(selected)
  let total = base + links
  if (modifiers.doubleAttack) total *= 2
  if (modifiers.stolenNote)   total -= modifiers.stolenNote
  return { base, links, total: Math.max(0, total) }
}

export function calcDefense(selected, modifiers = {}) {
  const base = selected.reduce((s, p) => {
    const r = p._line || p.job
    let note = 0
    if (r === 'GK')       note = Number(p.note_g) || 0
    else if (r === 'MIL') note = Number(p.note_m) || 0
    else                  note = Number(p.note_d) || 0
    return s + note
  }, 0)
  const links = calcLinks(selected)
  let total = base + links
  if (modifiers.stolenNote) total -= modifiers.stolenNote
  return { base, links, total: Math.max(0, total) }
}

export function calcMidfieldDuel(midfielders) {
  const base  = midfielders.reduce((s, p) => s + getNoteForRole(p, 'MIL'), 0)
  const links = calcLinks(midfielders)
  return base + links
}

export function resolveDuel(atk, def, modifiers = {}) {
  if (modifiers.shield) return { goal: false, shielded: true }
  return { goal: atk > def, shielded: false }
}

export function aiSelectPlayers(availablePlayers, mode, difficulty = 'easy') {
  const usable = availablePlayers.filter(p => !p.used)
  if (!usable.length) return []
  const sorted = [...usable].sort((a, b) => {
    const nA = mode === 'attack' ? getNoteForRole(a,'ATT') : (a._line==='GK' ? getNoteForRole(a,'GK') : getNoteForRole(a,'DEF'))
    const nB = mode === 'attack' ? getNoteForRole(b,'ATT') : (b._line==='GK' ? getNoteForRole(b,'GK') : getNoteForRole(b,'DEF'))
    return nB - nA
  })
  let count = difficulty === 'easy'   ? 1 + Math.floor(Math.random() * 2)
            : difficulty === 'medium' ? 2 + Math.floor(Math.random() * 2)
            : 3
  return sorted.slice(0, Math.min(count, sorted.length, 3))
}

export function getRewards(mode, result) {
  const table = {
    vs_ai_easy:   { victoire:500,  nul:250,  defaite:50 },
    vs_ai_medium: { victoire:1000, nul:500,  defaite:50 },
    vs_ai_hard:   { victoire:1500, nul:750,  defaite:100 },
    vs_ai_club:   { victoire:2500, nul:1250, defaite:100 },
  }
  return (table[mode] || table.vs_ai_easy)[result] || 0
}
