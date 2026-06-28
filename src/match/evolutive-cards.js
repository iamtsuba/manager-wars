import { supabase } from '../lib/supabase.js'

// Règles d'évolution des cartes évolutives après un match (hors IA)
//  Pépite  : victoire +2 / défaite -1
//  Papyte  : victoire +1 / défaite -2
const RULES = {
  pepite: { win: +2, loss: -1 },
  papyte: { win: +1, loss: -2 },
}

/**
 * Met à jour les notes actuelles des cartes évolutives (pépite/papyte)
 * des deux managers après un match non-IA.
 * @param {string|null} winnerId  - ID du manager gagnant (null = nul)
 * @param {string|null} loserId   - ID du manager perdant (null = nul)
 */
export async function updateEvolutiveCards(winnerId, loserId) {
  // En cas de nul, aucune évolution
  if (!winnerId && !loserId) return
  if (!winnerId || !loserId) return

  await Promise.all([
    applyEvolution(winnerId, 'win'),
    applyEvolution(loserId, 'loss'),
  ])
}

async function applyEvolution(userId, outcome) {
  // Récupérer toutes les cartes pépite/papyte du manager
  const { data: cards } = await supabase
    .from('cards')
    .select(`
      id, current_note,
      player:players(rarity, note_min, note_max)
    `)
    .eq('owner_id', userId)
    .eq('card_type', 'player')

  if (!cards?.length) return

  const evolutive = cards.filter(c =>
    c.player?.rarity === 'pepite' || c.player?.rarity === 'papyte'
  )
  if (!evolutive.length) return

  // Appliquer les deltas et mettre à jour
  const updates = evolutive.map(card => {
    const rule = RULES[card.player.rarity]
    const delta = outcome === 'win' ? rule.win : rule.loss
    const noteMin = card.player.note_min ?? 1
    const noteMax = card.player.note_max ?? 10
    // note de départ = current_note si défini, sinon note_max
    const base = card.current_note ?? noteMax
    const newNote = Math.min(noteMax, Math.max(noteMin, base + delta))
    return { id: card.id, current_note: newNote }
  })

  // Mise à jour en parallèle (une par une pour respecter RLS)
  await Promise.all(
    updates.map(u =>
      supabase.from('cards').update({ current_note: u.current_note }).eq('id', u.id)
    )
  )
}
