import { linkColor } from './formation-links.js'

/**
 * Manager Wars — Logique de jeu (GDD §7 & §8)
 * Grille 3 colonnes × 4 lignes. Liens H (même ligne, cols adjacentes) et V (même col, lignes adjacentes)
 */

export const GC_DEFS = {
  'Ressusciter':    { icon:'💫', desc:'Réactive un joueur grisé pour ce match.' },
  'Double attaque': { icon:'⚡', desc:'La note d\'attaque compte double.' },
  'Bouclier':       { icon:'🛡️', desc:'Annule le prochain but adverse.' },
  'Vol de note':    { icon:'🎯', desc:'-1 à la note d\'un joueur adverse.' },
  'Gel':            { icon:'❄️', desc:'Bloque le meilleur attaquant IA.' },
  'Remplacement+':  { icon:'🔄', desc:'+1 remplacement pour ce match.' },
}

// ── Placement en grille selon le nombre de joueurs ────────
// 1 → [1], 2 → [0,2], 3 → [0,1,2], 4 → [0,1,1,2], 5 → [0,1,1,1,2]
export function getColsForCount(n) {
  if (n === 1) return [1]
  if (n === 2) return [0, 2]
  if (n === 3) return [0, 1, 2]
  if (n === 4) return [0, 1, 1, 2]
  if (n === 5) return [0, 1, 1, 1, 2]
  return [1]
}

// Affecter une colonne à chaque joueur d'une ligne
export function assignCols(players, role, allLines) {
  const n = players.length
  const cols = getColsForCount(n)
  return players.map((p, i) => ({ ...p, _line: role, _col: cols[i] }))
}

// ── Note d'un joueur selon le rôle ────────────────────────
export function getNoteForRole(player, role) {
  if (!player) return 0
  let base = 0
  switch (role) {
    case 'GK':  base = Number(player.note_g) || 0; break
    case 'DEF': base = Number(player.note_d) || 0; break
    case 'MIL': base = Number(player.note_m) || 0; break
    case 'ATT': base = Number(player.note_a) || 0; break
    default:    base = 0
  }
  // boost est ajouté ici (evo est déjà intégré dans les notes par playerFromCard)
  return base + (player.boost || 0)
}

// ── Calcul des liens (GDD §7) ─────────────────────────────
// Liens H : même ligne, cols adjacentes (|col1-col2| == 1)
// Liens V : même col,  lignes adjacentes (lignes consécutives dans la grille)
const LINE_ORDER = ['ATT','MIL','DEF','GK']

// Adjacence réelle sur la grille (même ligne + colonnes adjacentes, OU même
// colonne + lignes adjacentes) — source unique, utilisée aussi par
// renderCardRow (match-shared.js) pour ne pas afficher un lien qui ne compte
// pas réellement dans le total.
export function isAdjacent(a, b) {
  if (!a || !b) return false
  const sameCol  = a._col != null && b._col != null && a._col === b._col
  const adjCols  = a._col != null && b._col != null && Math.abs(a._col - b._col) === 1
  const lineIdxA = LINE_ORDER.indexOf(a._line || a.job)
  const lineIdxB = LINE_ORDER.indexOf(b._line || b.job)
  const adjLines = Math.abs(lineIdxA - lineIdxB) === 1
  const sameLine = (a._line || a.job) === (b._line || b.job)
  return (sameLine && adjCols) || (sameCol && adjLines)
}

export function calcLinks(selected) {
  let bonus = 0
  const n = selected.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = selected[i]
      const b = selected[j]
      if (!a || !b) continue

      if (!isAdjacent(a, b)) continue

      // Bonus dérivé DIRECTEMENT de linkColor (source unique avec l'affichage) :
      // gère aussi les Légendes (lien doré garanti avec tout le monde, vert si
      // le pays correspond en plus) — l'ancienne réimplémentation locale ici
      // oubliait cette règle, d'où un désaccord avec la couleur affichée.
      const lc = linkColor(a, b)
      if (lc === '#00ff88') bonus += 10
      else if (lc === '#FFD700') bonus += 5
    }
  }
  return bonus
}

// ── Attaque (GDD §5.2) ────────────────────────────────────
// Note en attaque selon le SLOT : MIL → note_m, ATT → note_a
// "Double attaque" (GC) ne double QUE la note brute du joueur — pas le
// bonus stade (+10), ni le boost, ni les liens (bug corrigé : ces valeurs
// étaient additionnées avant le *2, donc doublées par erreur).
export function calcAttack(selected, modifiers = {}) {
  let noteSum = 0, extraSum = 0
  selected.forEach(p => {
    const r = p._line || p.job
    const note = Number(r==='MIL' ? p.note_m : p.note_a) || 0
    const stadBonus = p.stadiumBonus && (r === 'MIL' || r === 'ATT') ? 10 : 0
    noteSum  += modifiers.doubleAttack ? note * 2 : note
    extraSum += (p.boost||0) + stadBonus
  })
  const base  = noteSum + extraSum
  const links = calcLinks(selected)
  let total = base + links
  if (modifiers.stolenNote) total -= modifiers.stolenNote
  return { base, links, total: Math.max(0, total) }
}

// ── Défense (GDD §5.4) ────────────────────────────────────
// GK → note_g, MIL → note_m (les milieux gardent leur note MIL en défense aussi), DEF → note_d
export function calcDefense(selected, modifiers = {}) {
  const base = selected.reduce((s, p) => {
    const r = p._line || p.job
    let note = 0
    if (r === 'GK') note = Number(p.note_g)||0
    else if (r === 'MIL') note = Number(p.note_m)||0
    else note = Number(p.note_d)||0
    const stadBonus = p.stadiumBonus && (r === 'GK' || r === 'DEF' || r === 'MIL') ? 10 : 0
    return s + note + (p.boost||0) + stadBonus
  }, 0)
  const links = calcLinks(selected)
  let total = base + links
  if (modifiers.stolenNote) total -= modifiers.stolenNote
  return { base, links, total: Math.max(0, total) }
}

// ── Duel milieu (GDD §4.1) ───────────────────────────────
export function calcMidfieldDuel(midfielders) {
  const base  = midfielders.reduce((s, p) => s + getNoteForRole(p, 'MIL'), 0)
  const links = calcLinks(midfielders)
  return base + links
}

// ── Résolution (GDD §5.7) ────────────────────────────────
export function resolveDuel(atk, def, modifiers = {}) {
  if (modifiers.shield) return { goal: false, shielded: true }
  return { goal: atk > def, shielded: false }
}

// ── IA ────────────────────────────────────────────────────
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

// ── Récompenses (GDD §6.1) ───────────────────────────────
export function getRewards(mode, result) {
  const table = {
    vs_ai_easy:   { victoire:500,  nul:250,  defaite:50 },
    vs_ai_medium: { victoire:1000, nul:500,  defaite:50 },
    vs_ai_hard:   { victoire:1500, nul:750,  defaite:100 },
    vs_ai_club:   { victoire:2500, nul:1250, defaite:100 },
  }
  return (table[mode] || table.vs_ai_easy)[result] || 0
}
