import { supabase } from './supabase.js'

// Cache court (30s) pour éviter une requête DB à chaque clic
let _cache = null
let _cacheAt = 0
const CACHE_TTL = 30000

async function _refreshCache() {
  const { data } = await supabase.from('app_feature_flags').select('key, enabled')
  _cache = {}
  ;(data || []).forEach(f => { _cache[f.key] = f.enabled })
  _cacheAt = Date.now()
  return _cache
}

export async function isFeatureEnabled(key) {
  const now = Date.now()
  if (!_cache || now - _cacheAt > CACHE_TTL) await _refreshCache()
  // Par défaut activé si le flag n'existe pas encore en base
  return _cache[key] !== false
}

// ── Accès SYNCHRONE au cache, pour les fonctions de rendu non-async
// (renderCardHTML, getPortrait...). Retourne la dernière valeur connue ;
// si le cache n'a jamais été chargé, retourne `true` par défaut (comme
// isFeatureEnabled) et déclenche un chargement en arrière-plan pour la
// prochaine fois.
export function isFeatureEnabledSync(key) {
  if (!_cache) { _refreshCache(); return true }
  return _cache[key] !== false
}

// ── Helpers d'affichage pour les 3 toggles (nom joueur / nom club / face) ──

/** Nom du joueur à afficher : lastname_reel si real_player_mode actif, sinon surname_real */
export function getPlayerDisplayName(player) {
  if (!player) return ''
  if (isFeatureEnabledSync('real_player_mode') && player.lastname_reel) {
    return player.lastname_reel
  }
  return player.surname_real || ''
}

/** Nom du club à afficher : real_name si club_real_name_mode actif, sinon encoded_name */
export function getClubDisplayName(club) {
  if (!club) return ''
  if (isFeatureEnabledSync('club_real_name_mode') && club.real_name) {
    return club.real_name
  }
  return club.encoded_name || ''
}

// ⚠️ Convention à confirmer avec Thomas : ici on suppose que le dossier
// alternatif reprend le même nom que le dossier d'origine avec le suffixe
// "_alt" (ex: "Europe/xxx.png" -> "Europe_alt/xxx.png"). À adapter dans
// cette seule fonction si la convention réelle diffère.
export function getFacePath(facePath) {
  if (!facePath) return facePath
  if (!isFeatureEnabledSync('player_face_alt_mode')) return facePath
  const slash = facePath.indexOf('/')
  if (slash === -1) return facePath
  const folder = facePath.slice(0, slash)
  const rest = facePath.slice(slash)
  return `${folder}_alt${rest}`
}

// Invalide le cache immédiatement (utile après un changement dans l'admin)
export function invalidateFeatureFlagsCache() {
  _cache = null
}

// Popup générique "Module en cours de développement"
export function showFeatureDisabledPopup() {
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px'
  overlay.innerHTML = `
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px;max-width:340px;width:100%;color:#fff;text-align:center">
      <div style="font-size:40px;margin-bottom:10px">🚧</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:8px">Module en cours de développement</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:20px">Cette fonctionnalité n'est pas encore disponible. Reviens un peu plus tard !</div>
      <button id="feature-disabled-close" class="btn btn-primary" style="width:100%;padding:10px">Compris</button>
    </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#feature-disabled-close').addEventListener('click', () => overlay.remove())
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove() })
}
