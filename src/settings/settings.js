// src/settings/settings.js — Page Réglages (thème, son, déconnexion)
import { supabase } from '../lib/supabase.js'
import { getTheme, setTheme } from '../app.js'
import { getVolume, setVolume, playSound } from '../lib/sound.js'
import { startTutorialV2 } from '../tutorial/tutorial-v2-player.js'

export async function renderSettings(container, ctx) {
  const { state, navigate, toast } = ctx
  const theme = getTheme()
  const volume = getVolume()
  const isAdmin = state?.profile?.is_admin
  const APP_VERSION = (typeof __BUILD_TIME__ !== 'undefined' && __BUILD_TIME__)
    ? __BUILD_TIME__
    : new Date().toISOString().slice(0,16).replace('T','-').replace(':','h')

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🛡️ Mon équipe</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Ton pseudo, le nom et les couleurs de ton club.</div>

        <div style="display:flex;flex-direction:column;gap:10px">
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">PSEUDO</label>
            <input id="team-pseudo" value="${(state.profile.pseudo||'').replace(/"/g,'&quot;')}" readonly disabled
              style="width:100%;box-sizing:border-box;padding:10px;border-radius:8px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:14px;cursor:not-allowed">
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">NOM DU CLUB</label>
            <input id="team-club-name" value="${(state.profile.club_name||'').replace(/"/g,'&quot;')}"
              style="width:100%;box-sizing:border-box;padding:10px;border-radius:8px;border:1.5px solid var(--tile-border);background:var(--input-bg,#fff);color:var(--input-fg,#111);font-size:14px">
          </div>
          <div style="display:flex;gap:14px">
            <div style="flex:1">
              <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">COULEUR 1</label>
              <input type="color" id="team-color1" value="${state.profile.club_color1||'#1A6B3C'}" style="width:100%;height:38px;padding:2px;border-radius:8px;border:1.5px solid var(--tile-border);cursor:pointer">
            </div>
            <div style="flex:1">
              <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">COULEUR 2</label>
              <input type="color" id="team-color2" value="${state.profile.club_color2||'#D4A017'}" style="width:100%;height:38px;padding:2px;border-radius:8px;border:1.5px solid var(--tile-border);cursor:pointer">
            </div>
          </div>
          <div id="team-preview" style="height:48px;border-radius:10px;margin-top:2px"></div>
          <div id="team-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
          <button id="team-save" class="btn btn-primary" style="width:100%;padding:12px;border-radius:10px;font-weight:700;font-size:14px">💾 Enregistrer</button>
        </div>
      </div>

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="club" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${theme==='club'?'#D4A017':'var(--tile-border)'};background:${theme==='club'?'rgba(212,160,23,0.12)':'transparent'}">
            <div style="font-size:22px;margin-bottom:6px">🛡️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Club</div>
          </button>
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

      ${isAdmin ? `
      <a href="${import.meta.env.BASE_URL}admin.html" id="settings-admin-mode"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:none;background:var(--yellow,#D4A017);color:#111;font-weight:900;font-size:14px;cursor:pointer;margin-top:6px;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px">
        ⚙️ Administration Mode
      </a>` : ''}

      <button id="settings-tutorial"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.15);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:14px;cursor:pointer;margin-top:${isAdmin?'10px':'6px'};text-align:center;display:flex;align-items:center;justify-content:center;gap:8px">
        📖 Revoir le tutoriel
      </button>

      <a href="https://discord.gg/aaMKMA8VS" target="_blank" rel="noopener" id="settings-discord"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:none;background:#5865F2;color:#fff;font-weight:900;font-size:14px;cursor:pointer;margin-top:10px;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px">
        💬 Rejoindre le Discord
      </a>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:10px;display:flex;align-items:center;justify-content:center">
        Déconnexion
      </button>

      <div style="text-align:center;font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace;margin-top:4px">build ${APP_VERSION}</div>

    </div>
  </div>`


  container.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTheme(btn.dataset.themeChoice)
      renderSettings(container, ctx)
    })
  })

  // ── Mon équipe : aperçu live des couleurs + sauvegarde ──────────────────
  const c1 = container.querySelector('#team-color1')
  const c2 = container.querySelector('#team-color2')
  const preview = container.querySelector('#team-preview')
  const updatePreview = () => {
    if (preview) preview.style.background = `linear-gradient(135deg, ${c1.value} 50%, ${c2.value} 50%)`
  }
  updatePreview()
  c1?.addEventListener('input', updatePreview)
  c2?.addEventListener('input', updatePreview)

  container.querySelector('#team-save')?.addEventListener('click', async () => {
    const errEl = container.querySelector('#team-error')
    const saveBtn = container.querySelector('#team-save')
    const clubName = container.querySelector('#team-club-name').value.trim()
    if (clubName.length < 2) { errEl.textContent = 'Nom de club trop court.'; return }

    saveBtn.disabled = true; saveBtn.textContent = '⏳ Enregistrement...'
    errEl.textContent = ''

    const { error } = await supabase.from('users').update({
      club_name: clubName,
      club_color1: c1.value, club_color2: c2.value,
    }).eq('id', state.profile.id)

    saveBtn.disabled = false; saveBtn.textContent = '💾 Enregistrer'

    if (error) { errEl.textContent = error.message; return }

    state.profile.club_name = clubName
    state.profile.club_color1 = c1.value
    state.profile.club_color2 = c2.value
    errEl.style.color = '#2ecc71'
    errEl.textContent = '✅ Modifications enregistrées.'
    if (getTheme() === 'club') setTheme('club') // rafraîchit le fond aux nouvelles couleurs
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

  container.querySelector('#settings-tutorial')?.addEventListener('click', () => {
    startTutorialV2({ state, navigate, toast }, () => {})
  })

  container.querySelector('#settings-logout').addEventListener('click', async () => {
    await supabase.auth.signOut()
    window.location.reload()
  })
}
