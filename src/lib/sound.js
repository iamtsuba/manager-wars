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
