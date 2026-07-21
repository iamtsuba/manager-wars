// src/lib/sound.js — Gestion centralisée du son de l'app.
// Toute lecture de son doit passer par playSound()/playBGM()/playUrgentSound()
// pour respecter le volume choisi par l'utilisateur (page Réglages).

const VOLUME_KEY = 'mw_sound_volume' // 0-100

export function getVolume() {
  const v = localStorage.getItem(VOLUME_KEY)
  if (v === null) return 100
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 100
}

export function setVolume(pct) {
  localStorage.setItem(VOLUME_KEY, String(Math.max(0, Math.min(100, Math.round(pct)))))
}

// Rétro-compatibilité : "muet" = volume à 0.
export function isSoundMuted() {
  return getVolume() === 0
}

export function setSoundMuted(muted) {
  setVolume(muted ? 0 : 100)
}

function scaled(base) {
  return Math.max(0, Math.min(1, base * (getVolume() / 100)))
}

export function playSound(url, volume = 1) {
  if (isSoundMuted()) return null
  try {
    const audio = new Audio(url)
    audio.volume = scaled(volume)
    audio.play().catch(() => {})
    return audio
  } catch { return null }
}

// ── Musique de fond (boucle) ──────────────────────────────────
// Instance unique partagée : permet de la démarrer dans un fichier
// (ex: écran de révélation adverse) et de l'arrêter depuis un autre
// (ex: fin de match, abandon), quel que soit le mode (IA/PvP/mini-league).
let _bgmAudio = null
let _bgmUrl = null
let _bgmBaseVolume = 0.3

export function playBGM(url, volume = 0.3) {
  _bgmBaseVolume = volume
  if (_bgmAudio && _bgmUrl === url && !_bgmAudio.paused) {
    _bgmAudio.volume = scaled(_bgmBaseVolume) // suit un éventuel changement de volume en cours de lecture
    return
  }
  stopBGM()
  if (isSoundMuted()) return
  try {
    const audio = new Audio(url)
    audio.loop = true
    audio.volume = scaled(volume)
    audio.play().catch(() => {})
    _bgmAudio = audio
    _bgmUrl = url
  } catch {}
}

export function stopBGM() {
  if (_bgmAudio) {
    try { _bgmAudio.pause(); _bgmAudio.currentTime = 0 } catch {}
  }
  _bgmAudio = null
  _bgmUrl = null
}

// ── Son "urgent" (ex: chrono critique en jeu) ─────────────────
// Piste séparée de la BGM : les deux peuvent jouer en même temps
// (l'urgent se superpose à la musique de fond, ne la coupe pas).
let _urgentAudio = null

export function playUrgentSound(url, volume = 0.6) {
  stopUrgentSound()
  if (isSoundMuted()) return
  try {
    const audio = new Audio(url)
    audio.volume = scaled(volume)
    audio.play().catch(() => {})
    _urgentAudio = audio
  } catch {}
}

export function stopUrgentSound() {
  if (_urgentAudio) {
    try { _urgentAudio.pause(); _urgentAudio.currentTime = 0 } catch {}
  }
  _urgentAudio = null
}
