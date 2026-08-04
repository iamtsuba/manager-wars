import { isFeatureEnabledSync } from './featureFlags.js'

/**
 * Nom de famille à AFFICHER pour un joueur.
 *
 * Mode "Real Player" (flag `real_player_mode`, activable dans
 * Admin > Dashboard > Modes activables) : affiche `surname_encoded`
 * (le Surname) à la place de `surname_real` (le Nom) partout où le nom
 * d'un joueur apparaît — cartes, listes, modales, marché, matchs...
 *
 * SOURCE UNIQUE : tout affichage de nom doit passer par ici, afin qu'un
 * changement de règle ne nécessite jamais de repasser sur chaque page.
 *
 * Tolère les deux formes d'objet joueur manipulées dans l'app :
 *   - brut depuis la table `players` (surname_real / surname_encoded)
 *   - transformé pour le match par playerFromCard() (name / surnameEncoded)
 */
export function playerSurname(p) {
  if (!p) return ''
  const real = p.surname_real ?? p.name ?? ''
  if (!isFeatureEnabledSync('real_player_mode', false)) return real
  return p.surname_encoded ?? p.surnameEncoded ?? real ?? ''
}

/** Prénom + nom affichable (respecte le mode Real Player). */
export function playerFullName(p) {
  if (!p) return ''
  return `${p.firstname || ''} ${playerSurname(p)}`.trim()
}
