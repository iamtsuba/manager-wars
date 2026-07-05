/**
 * glicko2.js — Moteur Glicko-2 côté client
 *
 * Références :
 *   http://www.glicko.net/glicko/glicko2.pdf (Mark Glickman, 2012)
 *
 * Paramètres par défaut Manager Wars :
 *   - MMR initial    : 1000
 *   - RD initial     : 350  (très incertain = nouveaux joueurs)
 *   - Volatilité (σ) : 0.06
 *   - Constante τ    : 0.5  (contrainte sur la variation de volatilité)
 *
 * Mapping Glicko-2 → affichage :
 *   Le système Glicko-2 interne travaille en échelle µ/φ (moyenne/déviation).
 *   On convertit :
 *     µ  = (MMR - 1000) / 173.7178
 *     φ  = RD / 173.7178
 *   Et on reconvertit en sens inverse pour l'affichage.
 */

// ── Constantes ───────────────────────────────────────────────
const SCALE    = 173.7178
const TAU      = 0.5        // contrainte volatilité
const EPSILON  = 0.000001   // convergence algorithme Illinois

// ── Ligues ───────────────────────────────────────────────────
export const TIERS = [
  { id: 'bronze',   label: 'Bronze',   emoji: '🥉', min: 0,    max: 1199, color: '#cd7f32' },
  { id: 'silver',   label: 'Argent',   emoji: '🥈', min: 1200, max: 1499, color: '#a0a0a0' },
  { id: 'gold',     label: 'Or',       emoji: '🥇', min: 1500, max: 1799, color: '#D4A017' },
  { id: 'platinum', label: 'Platine',  emoji: '💎', min: 1800, max: 2099, color: '#00e5ff' },
  { id: 'diamond',  label: 'Diamant',  emoji: '🔷', min: 2100, max: 2399, color: '#5b9bd5' },
  { id: 'master',   label: 'Maître',   emoji: '👑', min: 2400, max: Infinity, color: '#9b59b6' },
]

export function getTier(mmr) {
  return TIERS.find(t => mmr >= t.min && mmr <= t.max) || TIERS[0]
}

// Progression dans la ligue actuelle (0–100%)
export function getTierProgress(mmr) {
  const tier = getTier(mmr)
  if (tier.id === 'master') return 100
  const range = tier.max - tier.min + 1
  return Math.round(((mmr - tier.min) / range) * 100)
}

// ── Fonctions internes Glicko-2 ──────────────────────────────
function g(phi) {
  return 1 / Math.sqrt(1 + (3 * phi * phi) / (Math.PI * Math.PI))
}

function E(mu, muJ, phiJ) {
  return 1 / (1 + Math.exp(-g(phiJ) * (mu - muJ)))
}

/**
 * Calculer les nouveaux paramètres Glicko-2 d'un joueur après un match.
 *
 * @param {number} mmr        - MMR actuel du joueur
 * @param {number} rd         - RD actuel (déviation, ~350 pour nouveaux)
 * @param {number} sigma      - Volatilité actuelle (~0.06)
 * @param {number} oppMmr     - MMR de l'adversaire
 * @param {number} oppRd      - RD de l'adversaire
 * @param {number} score      - Résultat : 1 (victoire), 0.5 (nul), 0 (défaite)
 * @param {boolean} isPlacement - Si true, double le gain/perte effectif
 * @returns {{ newMmr, newRd, newSigma, delta }}
 */
export function computeGlicko2(mmr, rd, sigma, oppMmr, oppRd, score, isPlacement = false) {
  // Convertir en échelle Glicko-2
  const mu     = (mmr    - 1000) / SCALE
  const phi    = rd    / SCALE
  const muJ    = (oppMmr - 1000) / SCALE
  const phiJ   = oppRd / SCALE

  // Étape 3 : v (variance estimée du rating)
  const gPhiJ = g(phiJ)
  const eVal  = E(mu, muJ, phiJ)
  const v     = 1 / (gPhiJ * gPhiJ * eVal * (1 - eVal))

  // Étape 4 : delta (amélioration estimée)
  const deltaRaw = v * gPhiJ * (score - eVal)

  // Étape 5 : nouvelle volatilité σ' via algorithme Illinois
  const a  = Math.log(sigma * sigma)
  const f  = (x) => {
    const eX  = Math.exp(x)
    const d2  = phi * phi + v + eX
    const p1  = eX * (deltaRaw * deltaRaw - d2) / (2 * d2 * d2)
    const p2  = (x - a) / (TAU * TAU)
    return p1 - p2
  }

  let A  = a
  let B  = deltaRaw * deltaRaw > phi * phi + v
    ? Math.log(deltaRaw * deltaRaw - phi * phi - v)
    : (function() { let k = 1; while (f(a - k * TAU) < 0) k++; return a - k * TAU })()

  let fA = f(A), fB = f(B)
  let iter = 0
  while (Math.abs(B - A) > EPSILON && iter < 100) {
    const C  = A + (A - B) * fA / (fB - fA)
    const fC = f(C)
    if (fC * fB < 0) { A = B; fA = fB }
    else             { fA = fA / 2 }
    B = C; fB = fC
    iter++
  }
  const newSigma = Math.exp(A / 2)

  // Étape 6 : pré-mise à jour de φ
  const phiStar  = Math.sqrt(phi * phi + newSigma * newSigma)

  // Étape 7 : mise à jour φ et µ
  const newPhi   = 1 / Math.sqrt(1 / (phiStar * phiStar) + 1 / v)
  const newMu    = mu + newPhi * newPhi * gPhiJ * (score - eVal)

  // Reconvertir en échelle lisible
  let newMmrRaw  = Math.round(newMu * SCALE + 1000)
  const newRd    = Math.round(newPhi * SCALE * 10) / 10

  // Doublement pour les matchs de placement
  if (isPlacement) {
    const rawDelta = newMmrRaw - mmr
    newMmrRaw = mmr + rawDelta * 2
  }

  const delta = newMmrRaw - mmr

  return {
    newMmr   : Math.max(0, newMmrRaw),
    newRd    : Math.min(350, Math.max(30, newRd)),
    newSigma : newSigma,
    delta    : isPlacement ? delta : Math.round(delta),
  }
}

/**
 * Calculer la probabilité de victoire du joueur A vs B (pour l'affichage).
 * @returns {number} probabilité 0–1
 */
export function winProbability(mmrA, rdA, mmrB, rdB) {
  const muA   = (mmrA - 1000) / SCALE
  const muB   = (mmrB - 1000) / SCALE
  const phiB  = rdB  / SCALE
  return E(muA, muB, phiB)
}

/**
 * Estimer le gain/perte AVANT le match (pour affichage dans le lobby).
 */
export function previewDelta(myMmr, myRd, mySigma, oppMmr, oppRd, isPlacement) {
  const win  = computeGlicko2(myMmr, myRd, mySigma, oppMmr, oppRd, 1, isPlacement)
  const draw = computeGlicko2(myMmr, myRd, mySigma, oppMmr, oppRd, 0.5, isPlacement)
  const loss = computeGlicko2(myMmr, myRd, mySigma, oppMmr, oppRd, 0, isPlacement)
  return { win: win.delta, draw: draw.delta, loss: loss.delta }
}
