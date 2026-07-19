// src/settings/settings.js — Page Réglages (thème, son, déconnexion)
import { supabase } from '../lib/supabase.js'
import { getTheme, setTheme } from '../app.js'
import { isSoundMuted, setSoundMuted } from '../lib/sound.js'

export async function renderSettings(container, ctx) {
  const { navigate } = ctx
  const theme = getTheme()
  const muted = isSoundMuted()

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px">
      <button id="settings-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:#f3f5f2">‹</button>
      <div style="font-size:18px;font-weight:900;color:#f3f5f2">⚙️ Réglages</div>
    </div>

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:rgba(255,255,255,0.045);border:1px solid rgba(255,255,255,0.09);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:#f3f5f2;margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:rgba(243,245,242,0.6);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${theme==='dark'?'#D4A017':'rgba(255,255,255,0.15)'};background:${theme==='dark'?'rgba(212,160,23,0.12)':'rgba(255,255,255,0.03)'}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:#f3f5f2">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${theme==='light'?'#D4A017':'rgba(255,255,255,0.15)'};background:${theme==='light'?'rgba(212,160,23,0.12)':'rgba(255,255,255,0.03)'}">
            <div style="font-size:22px;margin-bottom:6px">☀️</div>
            <div style="font-size:13px;font-weight:700;color:#f3f5f2">Clair</div>
          </button>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.045);border:1px solid rgba(255,255,255,0.09);border-radius:14px;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:14px">
        <div>
          <div style="font-size:14px;font-weight:900;color:#f3f5f2">🔊 Son</div>
          <div style="font-size:12px;color:rgba(243,245,242,0.6);margin-top:2px">Musiques et effets sonores de l'app.</div>
        </div>
        <button id="sound-toggle" role="switch" aria-checked="${!muted}" style="flex-shrink:0;width:52px;height:30px;border-radius:999px;border:none;cursor:pointer;position:relative;background:${muted?'rgba(255,255,255,0.15)':'#1A6B3C'};transition:background .2s">
          <span style="position:absolute;top:3px;left:${muted?'3px':'25px'};width:24px;height:24px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></span>
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

  container.querySelector('#sound-toggle').addEventListener('click', () => {
    setSoundMuted(!isSoundMuted())
    renderSettings(container, ctx)
  })

  container.querySelector('#settings-logout').addEventListener('click', async () => {
    await supabase.auth.signOut()
    window.location.reload()
  })
}
