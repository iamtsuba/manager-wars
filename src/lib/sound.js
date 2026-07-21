// src/lib/sound.js — Gestion centralisée du son de l'app.
// Toute lecture de son doit passer par playSound() pour respecter le
// réglage ON/OFF choisi par l'utilisateur (page Réglages).

const SOUND_KEY = 'mw_sound_muted'

export function isSoundMuted() {
  return localStorage.getItem(SOUND_KEY) === '1'
}

export function setSoundMuted(muted) {
  localStorage.setItem(SOUND_KEY, muted ? '1' : '0')
}

export function playSound(url, volume = 1) {
  if (isSoundMuted()) return null
  try {
    const audio = new Audio(url)
    audio.volume = volume
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

export function playBGM(url, volume = 0.3) {
  if (_bgmAudio && _bgmUrl === url && !_bgmAudio.paused) return // déjà en cours
  stopBGM()
  if (isSoundMuted()) return
  try {
    const audio = new Audio(url)
    audio.loop = true
    audio.volume = volume
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
    audio.volume = volume
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
