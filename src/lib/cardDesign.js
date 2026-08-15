/**
 * cardDesign.js — Cache + accès à la configuration visuelle des cartes
 * (position/échelle/visibilité par composant), pilotée depuis
 * Admin > Joueurs > Design Card.
 *
 * Les valeurs par défaut ci-dessous reproduisent EXACTEMENT les positions
 * qui étaient codées en dur dans player-card.js avant l'éditeur — tant que
 * personne n'a modifié quoi que ce soit dans l'outil, le rendu ne change
 * pas d'un pixel.
 */
import { supabase } from './supabase.js'

const DEFAULT_COMPONENTS = {
  pc: {
    name:   { x: 0.5,   y: 0.078, scale: 1.0 },
    photo:  { x: 0.5,   y: 0.388, scale: 1.0 },
    note:   { x: 0.5,   y: 0.688, scale: 1.0 },
    note2:  { x: 0.5,   y: 0.73,  scale: 1.0 },
    flag:   { x: 0.209, y: 0.837, scale: 1.0 },
    club:   { x: 0.787, y: 0.837, scale: 1.0 },
    stadium_badge: { x: 0.5, y: 0.61, scale: 1.0 },
  },
  mobile: {
    name:   { x: 0.5,   y: 0.078, scale: 1.0 },
    photo:  { x: 0.5,   y: 0.56,  scale: 1.0 },
    note:   { x: 0.5,   y: 0.428, scale: 1.0 },
    note2:  { x: 0.5,   y: 0.77,  scale: 1.0 },
    flag:   { x: 0.223, y: 0.77,  scale: 1.0 },
    club:   { x: 0.780, y: 0.77,  scale: 1.0 },
    stadium_badge: { x: 0.5, y: 0.66, scale: 1.0 },
  },
}

const ALWAYS_VISIBLE = ['name', 'photo', 'note', 'flag', 'club']
const CONTEXTS = ['collection','formation','selector','match','mercato','boosters','admin','accueil']

function buildDefaultVisibility() {
  const out = { pc: {}, mobile: {} }
  for (const mode of ['pc', 'mobile']) {
    out[mode] = {
      name: {}, photo: {}, note: {}, flag: {}, club: {}, note2: {}, stadium_badge: {},
    }
    CONTEXTS.forEach(ctx => {
      ALWAYS_VISIBLE.forEach(c => { out[mode][c][ctx] = true })
      out[mode].note2[ctx] = true
      // Le badge stade n'a de sens que là où le bonus de stade s'applique
      out[mode].stadium_badge[ctx] = ['formation', 'selector', 'match'].includes(ctx)
    })
    // Photo masquée en Formation/Match sur mobile (retour testeur : la
    // note doit prendre la place de la photo à ces endroits précis)
    if (mode === 'mobile') {
      out[mode].photo.formation = false
      out[mode].photo.match = false
    }
  }
  return out
}
const DEFAULT_VISIBILITY = buildDefaultVisibility()

let _cache = null   // { pc:{components,visibility}, mobile:{components,visibility} }
let _loading = null

export async function preloadCardDesign() {
  if (_cache) return _cache
  if (_loading) return _loading
  _loading = (async () => {
    const [{ data: comps }, { data: vis }] = await Promise.all([
      supabase.from('card_design_components').select('*'),
      supabase.from('card_design_visibility').select('*'),
    ])
    const out = {
      pc:     { components: { ...JSON.parse(JSON.stringify(DEFAULT_COMPONENTS.pc)) },     visibility: JSON.parse(JSON.stringify(DEFAULT_VISIBILITY.pc)) },
      mobile: { components: { ...JSON.parse(JSON.stringify(DEFAULT_COMPONENTS.mobile)) }, visibility: JSON.parse(JSON.stringify(DEFAULT_VISIBILITY.mobile)) },
    }
    ;(comps || []).forEach(c => {
      if (!out[c.mode]) return
      out[c.mode].components[c.component] = { x: Number(c.x_pct), y: Number(c.y_pct), scale: Number(c.scale) }
    })
    ;(vis || []).forEach(v => {
      if (!out[v.mode]) return
      if (!out[v.mode].visibility[v.component]) out[v.mode].visibility[v.component] = {}
      out[v.mode].visibility[v.component][v.context] = v.visible
    })
    _cache = out
    return out
  })()
  return _loading
}

export function invalidateCardDesignCache() {
  _cache = null
  _loading = null
}

// Accès synchrone (utilisé par renderPlayerCard, appelée des centaines de
// fois par rendu — impossible d'attendre une promesse à chaque appel).
// Si le préchargement n'a pas encore eu lieu, on retombe sur les valeurs
// par défaut (identiques au rendu historique).
export function getCardDesignSync(mode) {
  if (_cache && _cache[mode]) return _cache[mode]
  return {
    components: DEFAULT_COMPONENTS[mode] || DEFAULT_COMPONENTS.pc,
    visibility: DEFAULT_VISIBILITY[mode] || DEFAULT_VISIBILITY.pc,
  }
}

export function isComponentVisible(mode, component, context) {
  const d = getCardDesignSync(mode)
  const v = d.visibility?.[component]?.[context]
  return v !== false   // visible par défaut si non renseigné
}

export { CONTEXTS, DEFAULT_COMPONENTS }
