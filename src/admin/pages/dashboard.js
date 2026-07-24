import { supabase } from '../../lib/supabase.js'

export async function pageDashboard(container) {
  // Récupérer les stats
  const [
    { count: nbPlayers },
    { count: nbClubs },
    { count: nbUsers },
    { count: nbStadiums },
    { count: nbOnline },
    { data: signupPwdData },
  ] = await Promise.all([
    supabase.from('players').select('*', { count:'exact', head:true }),
    supabase.from('clubs').select('*', { count:'exact', head:true }),
    supabase.from('users').select('*', { count:'exact', head:true }),
    supabase.from('stadium_definitions').select('*', { count:'exact', head:true }),
    supabase.from('users').select('*', { count:'exact', head:true }).gt('last_seen_at', new Date(Date.now() - 3*60*1000).toISOString()),
    supabase.rpc('get_signup_password'),
  ])
  const currentSignupPwd = signupPwdData || ''

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${nbUsers ?? '–'}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${nbOnline ?? 0} joueurs connectés
        </div>
      </div>

      <!-- Stadiums -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🏟️ Stadiums</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${nbStadiums ?? '–'}</div>
        <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('stadiums')">+ Add new stadium</button>
      </div>

      <!-- Teams -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🛡️ Teams</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${nbClubs ?? '–'}</div>
        <button class="btn btn-yellow btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('clubs')">+ Add new teams</button>
      </div>

      <!-- Players -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🃏 Players</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${nbPlayers ?? '–'}</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('players')">+ Add new players</button>
      </div>

    </div>

    <div class="card-panel">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🔐 Code d'accès à l'inscription</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">Requis pour que le bouton "Créer mon compte" soit actif sur la page de connexion.</div>
      <div style="display:flex;gap:8px;max-width:420px">
        <input id="signup-pwd-input" type="text" value="${currentSignupPwd.replace(/"/g,'&quot;')}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `
  // Liaison navigation depuis les boutons
  window.adminNav = (page) => {
    document.querySelector(`[data-page="${page}"]`)?.click()
  }

  document.getElementById('signup-pwd-save')?.addEventListener('click', async () => {
    const val = document.getElementById('signup-pwd-input').value.trim()
    const statusEl = document.getElementById('signup-pwd-status')
    if (!val) { statusEl.textContent = 'Le code ne peut pas être vide.'; statusEl.style.color = '#ff6b6b'; return }
    const btn = document.getElementById('signup-pwd-save')
    btn.disabled = true; btn.textContent = '⏳...'
    const { error } = await supabase.rpc('set_signup_password', { new_password: val })
    btn.disabled = false; btn.textContent = '💾 Enregistrer'
    if (error) { statusEl.textContent = error.message; statusEl.style.color = '#ff6b6b'; return }
    statusEl.textContent = '✅ Code mis à jour.'
    statusEl.style.color = '#2ecc71'
  })
}
