/**
 * booster-engine.js
 * Helper utilisé par boosters.js pour :
 *  - Charger la liste des boosters configurés (booster_configs + drop_rates)
 *  - Simuler un tirage selon les taux de drop
 *  - Sélectionner un joueur/carte aléatoire correspondant aux critères tirés
 */
import { supabase } from '../lib/supabase.js'

// ── Charger tous les boosters actifs avec leurs taux ──────
export async function loadActiveBoosters() {
  const { data: configs } = await supabase
    .from('booster_configs')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')

  if (!configs?.length) return []

  const { data: rates } = await supabase
    .from('booster_drop_rates')
    .select('*')
    .in('booster_id', configs.map(c=>c.id))
    .order('sort_order')

  return configs.map(cfg => ({
    ...cfg,
    rates: (rates||[]).filter(r => r.booster_id === cfg.id)
  }))
}

// ── Tirer UN type/rareté/note_min/note_max selon les % ────
export function rollDropRate(rates) {
  if (!rates?.length) return null
  const total = rates.reduce((s,r)=>s+Number(r.percentage),0)
  let roll = Math.random() * total
  for (const rate of rates) {
    roll -= Number(rate.percentage)
    if (roll <= 0) return rate
  }
  return rates[rates.length-1]
}

// ── Tirer une carte réelle correspondant aux critères ─────
export async function drawCard(boosterConfig, ownerId) {
  const { card_count, rates } = boosterConfig
  const drawnCards = []

  for (let i = 0; i < (card_count || 5); i++) {
    const rate = rollDropRate(rates)
    if (!rate) continue

    const card = await resolveCard(rate, ownerId)
    if (card) drawnCards.push(card)
  }

  return drawnCards
}

// ── Résoudre un taux en vraie carte Supabase ─────────────
async function resolveCard(rate, ownerId) {
  const { card_type, rarity, note_min, note_max } = rate

  if (card_type === 'player') {
    // Tirage d'un joueur selon rareté + plage de notes
    let q = supabase.from('players').select('id,note_a,note_g,note_d,note_m').eq('is_active',true)
    if (rarity) q = q.eq('rarity', rarity)

    // Utiliser la note globale max (max de toutes les notes) comme proxy
    const { data: pool } = await q
    if (!pool?.length) return null

    // Filtrer sur note_min/note_max si définis
    let filtered = pool
    if (note_min || note_max) {
      filtered = pool.filter(p => {
        const best = Math.max(p.note_a||0, p.note_g||0, p.note_d||0, p.note_m||0)
        return (!note_min || best >= note_min) && (!note_max || best <= note_max)
      })
    }
    if (!filtered.length) filtered = pool

    const player = filtered[Math.floor(Math.random() * filtered.length)]

    // Insérer la carte en base
    const { data: card } = await supabase
      .from('cards')
      .insert({ owner_id: ownerId, card_type:'player', player_id: player.id, rarity: rarity||'normal' })
      .select('id, card_type, player_id, rarity')
      .single()
    return card

  } else if (card_type === 'formation') {
    const formations = ['4-4-2','4-3-3','3-5-2','4-5-1','5-3-2','4-3-3 (3)','4-2-3-1']
    const formation  = formations[Math.floor(Math.random()*formations.length)]
    const { data: card } = await supabase
      .from('cards')
      .insert({ owner_id:ownerId, card_type:'formation', formation, rarity:rarity||'normal' })
      .select('id,card_type,formation,rarity')
      .single()
    return card

  } else if (card_type === 'game_changer') {
    const GC_TYPES = ['Double attaque','Bouclier','Ressusciter','Vol de note','Gel','Remplacement+']
    const gc_type  = GC_TYPES[Math.floor(Math.random()*GC_TYPES.length)]
    const { data: card } = await supabase
      .from('cards')
      .insert({ owner_id:ownerId, card_type:'game_changer', gc_type, rarity:rarity||'normal' })
      .select('id,card_type,gc_type,rarity')
      .single()
    return card

  } else if (card_type === 'game_helper') {
    const { data: card } = await supabase
      .from('cards')
      .insert({ owner_id:ownerId, card_type:'game_helper', rarity:rarity||'normal' })
      .select('id,card_type,rarity')
      .single()
    return card
  }
  return null
}
