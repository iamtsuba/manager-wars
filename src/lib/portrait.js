// src/lib/portrait.js
//
// SOURCE UNIQUE pour tout ce qui touche aux photos de joueurs.
// Bucket Supabase Storage "faces" (public), organisé en dossiers par
// continent : Oceanie, Asie, Europe, Amerique du Nord, Afrique, Amerique du Sud.
// `players.face` stocke le chemin relatif dans le bucket, ex:
//   "Europe/PP1Europeans0042.png"
//
// Toute nouvelle fonctionnalité touchant aux photos doit passer par ce
// module — ne JAMAIS dupliquer cette logique ailleurs (ça a été fait 5 fois
// par le passé, source de bugs et d'incohérences).

import { supabase } from './supabase.js'

const BUCKET = 'faces'

// ── Mapping pays → continent (dossier du bucket) ──────────
const CONTINENT_FOR_COUNTRY = {
  // Europe
  FR:'Europe', DE:'Europe', ES:'Europe', PT:'Europe', IT:'Europe', GB:'Europe',
  NL:'Europe', BE:'Europe', DK:'Europe', SE:'Europe', NO:'Europe', PL:'Europe',
  CH:'Europe', AT:'Europe', CZ:'Europe', HR:'Europe', RS:'Europe', AL:'Europe',
  TR:'Europe', RU:'Europe', UA:'Europe', GR:'Europe', RO:'Europe', BG:'Europe',
  // Amérique du Sud
  AR:'Amerique du Sud', BR:'Amerique du Sud', UY:'Amerique du Sud', CO:'Amerique du Sud',
  CL:'Amerique du Sud', PE:'Amerique du Sud', EC:'Amerique du Sud',
  // Amérique du Nord
  MX:'Amerique du Nord', US:'Amerique du Nord', CA:'Amerique du Nord',
  // Afrique
  MA:'Afrique', DZ:'Afrique', TN:'Afrique', EG:'Afrique', NG:'Afrique', SN:'Afrique',
  CI:'Afrique', CM:'Afrique', GH:'Afrique', ML:'Afrique', GN:'Afrique', CD:'Afrique',
  AO:'Afrique', ZA:'Afrique', KE:'Afrique',
  // Asie (Moyen-Orient inclus, faute de dossier dédié)
  JP:'Asie', KR:'Asie', CN:'Asie', VN:'Asie', TH:'Asie', ID:'Asie', PH:'Asie',
  IN:'Asie', PK:'Asie', BD:'Asie', IR:'Asie', SA:'Asie', AE:'Asie',
  // Océanie
  AU:'Oceanie', NZ:'Oceanie', FJ:'Oceanie',
}

export function continentForCountry(countryCode) {
  return CONTINENT_FOR_COUNTRY[countryCode] || 'Europe'
}

export const ALL_CONTINENTS = ['Europe','Afrique','Asie','Amerique du Nord','Amerique du Sud','Oceanie']

// ── URL publique d'affichage (synchrone — p.face doit déjà être renseigné) ──
export function getPortrait(p) {
  if (!p?.face) return null
  const path = p.face.replace(/^\/+/, '')
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return data?.publicUrl || null
}

// ── Listing des fichiers d'un dossier (cache mémoire, un seul appel réseau par continent) ──
const _listCache = {}
export async function listContinentFiles(continent) {
  // Ne retourne le cache que s'il est non vide (permet retry si erreur précédente)
  if (_listCache[continent]?.length) return _listCache[continent]
  const { data, error } = await supabase.storage.from(BUCKET).list(continent, { limit: 1000, offset: 0 })
  if (error) {
    console.error('[portrait] liste bucket échouée pour', continent, error)
    return []
  }
  console.log('[portrait] bucket faces/' + continent + ' → ' + (data?.length ?? 0) + ' entrées brutes', (data||[]).slice(0,3).map(f => f.name))
  const files = (data || [])
    .filter(f => f.name && /\.(png|jpe?g|webp)$/i.test(f.name))
    .map(f => f.name)
  console.log('[portrait] fichiers images valides:', files.length, files.slice(0,3))
  if (files.length) _listCache[continent] = files  // ne cache que si résultat non vide
  return files
}

/**
 * Attribue une photo pour un pays donné, en évitant si possible les photos
 * déjà utilisées (usedSet contient des chemins complets "Continent/fichier").
 * Retourne le chemin relatif à stocker dans players.face, ou null si le
 * dossier du continent est vide.
 */
export async function assignFace(countryCode, usedSet = new Set()) {
  const continent = continentForCountry(countryCode)
  const files = await listContinentFiles(continent)
  if (!files.length) return null
  const avail = files.filter(f => !usedSet.has(`${continent}/${f}`))
  const pool = avail.length ? avail : files // si épuisé, autorise la réutilisation
  const picked = pool[Math.floor(Math.random() * pool.length)]
  return `${continent}/${picked}`
}

/** Vide le cache local (utile après un upload de nouvelles photos dans le bucket) */
export function clearPortraitCache() {
  for (const k in _listCache) delete _listCache[k]
}
