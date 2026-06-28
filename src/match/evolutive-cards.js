import { supabase } from '../lib/supabase.js'

// Règles d'évolution des cartes évolutives après un match (hors IA)
//  Pépite  : victoire +2 / défaite -1  — démarre à note_min depuis un booster
//  Papyte  : victoire +1 / défaite -2  — démarre à note_max depuis un booster
export const EVOLUTIVE_RULES = {
  pepite: { win: +2, loss: -1, boosterStart: 'min' },
  papyte: { win: +1, loss: -2, boosterStart: 'max' },
}

/**
 * Note actuelle d'un poste secondaire, calculée depuis le delta de la note principale.
 *  delta   = current_main - base_main
 *  current_secondary = clamp(base_secondary + delta, note_min, note_max)
 * Si base_secondary <= 0, on ne touche pas (note non significative).
 */
export function currentSecondaryNote(card, secondaryNoteKey) {
  const p = card.player
  if (!p) return 0
  const rar = p.rarity
  if (rar !== 'pepite' && rar !== 'papyte') {
    return Number(p[secondaryNoteKey]) || 0
  }
  const baseMain = getBaseMainNote(p)
  const baseSec  = Number(p[secondaryNoteKey]) || 0
  if (baseSec <= 0) return 0
  const noteMin  = p.note_min ?? 1
  const noteMax  = p.note_max ?? 10
  const current  = card.current_note ?? baseMain
  const delta    = current - baseMain
  return Math.min(noteMax, Math.max(noteMin, baseSec + delta))
}

/** Note de base du poste principal (non évoluée) */
export function getBaseMainNote(p) {
  const job = p.job || 'ATT'
  return Number(job==='GK'?p.note_g:job==='DEF'?p.note_d:job==='MIL'?p.note_m:p.note_a) || 0
}

/**
 * Met à jour les notes actuelles des cartes évolutives (pépite/papyte)
 * des deux managers après un match non-IA.
 */
export async function updateEvolutiveCards(winnerId, loserId) {
  if (!winnerId || !loserId) return
  await Promise.all([
    applyEvolution(winnerId, 'win'),
    applyEvolution(loserId,  'loss'),
  ])
}

async function applyEvolution(userId, outcome) {
  const { data: cards } = await supabase
    .from('cards')
    .select(`id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)`)
    .eq('owner_id', userId)
    .eq('card_type', 'player')

  if (!cards?.length) return

  const evolutive = cards.filter(c => c.player?.rarity === 'pepite' || c.player?.rarity === 'papyte')
  if (!evolutive.length) return

  await Promise.all(evolutive.map(card => {
    const rule    = EVOLUTIVE_RULES[card.player.rarity]
    const desired = outcome === 'win' ? rule.win : rule.loss
    const noteMin = card.player.note_min ?? 1
    const noteMax = card.player.note_max ?? 10
    const baseMain  = getBaseMainNote(card.player)
    const currMain  = card.current_note ?? baseMain
    // Delta réel plafonné (ex: +2 sur une note à 4 avec max 5 → +1)
    const newMain   = Math.min(noteMax, Math.max(noteMin, currMain + desired))
    return supabase.from('cards').update({ current_note: newMain }).eq('id', card.id)
  }))
}
