/**
 * svg-config.js — Config SVG chargée depuis Supabase.
 * Utilisée par buildTeamSVG, fixDeckSVG, fixDeckField.
 * Fallback sur les valeurs par défaut si Supabase inaccessible.
 */

import { supabase } from './supabase.js'

export const SVG_DEFAULTS = {
  cw_ratio:         0.18,
  pad_ratio:        0.70,
  pad_min:          80,
  mob_pad_ratio:    0.55,
  margin_pc:        30,
  margin_mob:       10,
  card_offset_pc:   30,
  card_offset_mob:  10,
  position_overrides: {},
  link_width_green:  2.5,
  link_width_yellow: 2.0,
  link_width_red:    1.5,
  link_opacity:      0.85,
}

// Cache en mémoire (évite de recharger à chaque rendu)
let _cache = null
let _loading = null

export async function getSvgConfig() {
  if (_cache) return _cache
  if (_loading) return _loading

  _loading = supabase
    .from('svg_config')
    .select('*')
    .eq('id', 'main')
    .single()
    .then(({ data }) => {
      _cache = data ? { ...SVG_DEFAULTS, ...data } : { ...SVG_DEFAULTS }
      _loading = null
      return _cache
    })
    .catch(() => {
      _cache = { ...SVG_DEFAULTS }
      _loading = null
      return _cache
    })

  return _loading
}

// Invalider le cache (après une sauvegarde admin)
export function invalidateSvgConfig() {
  _cache = null
  _loading = null
}

// Sauvegarder en Supabase (admin uniquement)
export async function saveSvgConfig(updates) {
  const { error } = await supabase
    .from('svg_config')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', 'main')
  if (!error) invalidateSvgConfig()
  return !error
}

// Synchrone avec fallback (pour les contextes non-async)
export function getSvgConfigSync() {
  return _cache || SVG_DEFAULTS
}
