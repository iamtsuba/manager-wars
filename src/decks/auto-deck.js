import { FORMATION_POSITIONS, FORMATION_LINKS, getActiveLinks, linkColor } from '../match/formation-links.js'

/**
 * Construction automatique du meilleur deck possible.
 *
 * Score d'une équipe = somme des notes au poste occupé
 *                    + bonus de liens (vert +10 / jaune +5, cf. linkColor)
 *                    + bonus de stade (+10 par joueur du même club OU pays)
 * — exactement le barème appliqué en match (game-logic.js).
 *
 * L'espace de recherche (quel joueur à quel poste, pour chaque formation et
 * chaque stade possédé) est bien trop grand pour être exploré exhaustivement.
 * On procède donc en deux temps, formation par formation :
 *   1. affectation gloutonne (meilleure note disponible à chaque poste)
 *   2. recherche locale : échanges et remplacements tant qu'ils améliorent
 *      le score total — c'est cette étape qui optimise réellement les liens.
 */

const ROLE_KEY = { GK:'note_g', DEF:'note_d', MIL:'note_m', ATT:'note_a' }

function noteAt(card, role) {
  const p = card?.player
  if (!p) return 0
  const evo = card.evolution_bonus || 0
  const base = Number(p[ROLE_KEY[role]]) || 0
  // Le bonus d'évolution ne s'applique qu'au poste principal/secondaire
  return base + ((role === p.job || role === p.job2) ? evo : 0)
}

function roleOf(pos) { return pos.replace(/[0-9]/g, '') }

function stadiumBonusFor(card, stadDef) {
  if (!card?.player || !stadDef) return 0
  const p = card.player
  const sameClub    = stadDef.club_id     && String(p.club_id)      === String(stadDef.club_id)
  const sameCountry = stadDef.country_code && String(p.country_code) === String(stadDef.country_code)
  return (sameClub || sameCountry) ? 10 : 0
}

/** Score complet d'une affectation { position: card } */
function scoreAssignment(assign, formation, stadDef) {
  let total = 0
  for (const [pos, card] of Object.entries(assign)) {
    if (!card) continue
    total += noteAt(card, roleOf(pos))
    total += stadiumBonusFor(card, stadDef)
  }
  const links = getActiveLinks(formation) || FORMATION_LINKS[formation] || []
  for (const [a, b] of links) {
    const cA = assign[a], cB = assign[b]
    if (!cA || !cB) continue
    const lc = linkColor(cA.player, cB.player)
    if (lc === '#00ff88') total += 10
    else if (lc === '#FFD700') total += 5
  }
  return total
}

/** Affectation gloutonne : meilleure note disponible à chaque poste */
function greedyAssign(positions, pool, stadDef) {
  const assign = {}
  const used = new Set()
  // Les postes les plus contraints d'abord (GK puis DEF/ATT, MIL en dernier)
  const order = [...positions].sort((a, b) => {
    const w = { GK: 0, DEF: 1, ATT: 2, MIL: 3 }
    return w[roleOf(a)] - w[roleOf(b)]
  })
  for (const pos of order) {
    const role = roleOf(pos)
    let best = null, bestVal = -1
    for (const c of pool) {
      if (used.has(c.id)) continue
      const val = noteAt(c, role) + stadiumBonusFor(c, stadDef)
      if (val > bestVal) { bestVal = val; best = c }
    }
    if (best) { assign[pos] = best; used.add(best.id) }
  }
  return { assign, used }
}

/** Recherche locale : échanges + remplacements tant que le score progresse */
function optimize(assign, used, positions, pool, formation, stadDef, maxPasses = 6) {
  let score = scoreAssignment(assign, formation, stadDef)
  const bench = pool.filter(c => !used.has(c.id))

  for (let pass = 0; pass < maxPasses; pass++) {
    let improved = false

    // a) Échanger deux titulaires de postes différents
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const pA = positions[i], pB = positions[j]
        const cA = assign[pA], cB = assign[pB]
        if (!cA || !cB) continue
        assign[pA] = cB; assign[pB] = cA
        const s = scoreAssignment(assign, formation, stadDef)
        if (s > score) { score = s; improved = true }
        else { assign[pA] = cA; assign[pB] = cB }
      }
    }

    // b) Remplacer un titulaire par un joueur du banc
    for (const pos of positions) {
      const cur = assign[pos]
      for (let k = 0; k < bench.length; k++) {
        const cand = bench[k]
        assign[pos] = cand
        const s = scoreAssignment(assign, formation, stadDef)
        if (s > score) {
          score = s; improved = true
          bench[k] = cur                     // l'ancien titulaire retourne au banc
          used.delete(cur?.id); used.add(cand.id)
          break
        } else {
          assign[pos] = cur
        }
      }
    }

    if (!improved) break
  }
  return score
}

/**
 * @returns {{formation, stadiumCardId, slots, subs, score}} meilleure combinaison
 */
export function buildBestDeck({ playerCards, availableFormations, stadiumCards, stadDefMap }) {
  const pool = (playerCards || []).filter(c => c.player)
  if (pool.length < 11) return null

  // Stades candidats : ceux possédés + l'option "aucun stade"
  const stadiumOptions = [{ id: null, def: null }]
  ;(stadiumCards || []).forEach(sc => {
    const def = stadDefMap?.[sc.stadium_id]
    if (def) stadiumOptions.push({ id: sc.id, def })
  })

  let best = null

  for (const formation of (availableFormations || [])) {
    const posMap = FORMATION_POSITIONS[formation]
    if (!posMap) continue
    const positions = Object.keys(posMap)
    if (positions.length !== 11) continue

    for (const stad of stadiumOptions) {
      const { assign, used } = greedyAssign(positions, pool, stad.def)
      if (Object.keys(assign).length !== 11) continue
      const score = optimize(assign, used, positions, pool, formation, stad.def)

      if (!best || score > best.score) {
        // Remplaçants : les 5 meilleurs restants (meilleure note tous postes)
        const remaining = pool.filter(c => !Object.values(assign).some(a => a.id === c.id))
        const subs = remaining
          .map(c => ({ c, v: Math.max(noteAt(c,'GK'), noteAt(c,'DEF'), noteAt(c,'MIL'), noteAt(c,'ATT')) }))
          .sort((a, b) => b.v - a.v)
          .slice(0, 5)
          .map(x => x.c.id)

        const slots = {}
        Object.entries(assign).forEach(([pos, c]) => { slots[pos] = c.id })
        best = { formation, stadiumCardId: stad.id, slots, subs, score }
      }
    }
  }
  return best
}
