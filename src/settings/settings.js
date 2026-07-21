// src/settings/settings.js — Page Réglages (thème, son, déconnexion)
import { supabase } from '../lib/supabase.js'
import { getTheme, setTheme } from '../app.js'
import { getVolume, setVolume, playSound } from '../lib/sound.js'

export async function renderSettings(container, ctx) {
  const { navigate } = ctx
  const theme = getTheme()
  const volume = getVolume()

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px">
      <button id="settings-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--nav-fg,#fff)">‹</button>
      <div style="font-size:18px;font-weight:900;color:var(--nav-fg,#fff)">⚙️ Réglages</div>
    </div>

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${theme==='dark'?'#D4A017':'var(--tile-border)'};background:${theme==='dark'?'rgba(212,160,23,0.12)':'transparent'}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${theme==='light'?'#D4A017':'var(--tile-border)'};background:${theme==='light'?'rgba(212,160,23,0.12)':'transparent'}">
            <div style="font-size:22px;margin-bottom:6px">☀️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Clair</div>
          </button>
        </div>
      </div>

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🔊 Son</div>
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${volume}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${volume}"
          style="width:100%;accent-color:#1A6B3C;cursor:pointer;margin-bottom:14px">
        <button id="volume-test" class="btn" style="width:100%;padding:11px;border-radius:10px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">
          🎵 Tester le son
        </button>
      </div>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:6px">
        Déconnexion
      </button>

    </div>
  </div>`

  container.querySelector('#settings-back').addEventListener('click', () => navigate('home'))

  container.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTheme(btn.dataset.themeChoice)
      renderSettings(container, ctx)
    })
  })

  const slider = container.querySelector('#volume-slider')
  const label  = container.querySelector('#volume-label')
  let _testAudio = null
  slider.addEventListener('input', () => {
    setVolume(Number(slider.value))
    label.textContent = `${slider.value}%`
    if (_testAudio) _testAudio.volume = Math.max(0, Math.min(1, Number(slider.value) / 100))
  })
  container.querySelector('#volume-test').addEventListener('click', () => {
    _testAudio = playSound(`${import.meta.env.BASE_URL}sounds/match-opening.mp3`, 1)
  })

  container.querySelector('#settings-logout').addEventListener('click', async () => {
    await supabase.auth.signOut()
    window.location.reload()
  })
}
