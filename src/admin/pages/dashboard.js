import { supabase } from '../../lib/supabase.js'

export async function pageDashboard(container) {
  // Récupérer les stats
  const [
    { count: nbPlayers },
    { count: nbClubs },
    { count: nbUsers },
    { count: nbCards },
    { count: nbMatches },
    { data: signupPwdData },
  ] = await Promise.all([
    supabase.from('players').select('*', { count:'exact', head:true }),
    supabase.from('clubs').select('*', { count:'exact', head:true }),
    supabase.from('users').select('*', { count:'exact', head:true }),
    supabase.from('cards').select('*', { count:'exact', head:true }),
    supabase.from('matches').select('*', { count:'exact', head:true }),
    supabase.rpc('get_signup_password'),
  ])
  const currentSignupPwd = signupPwdData || ''

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${stat('🃏', 'Joueurs (cartes)', nbPlayers ?? '–', '#1A6B3C')}
      ${stat('🏟️', 'Clubs', nbClubs ?? '–', '#D4A017')}
      ${stat('👥', 'Managers', nbUsers ?? '–', '#7a28b8')}
      ${stat('📦', 'Cartes possédées', nbCards ?? '–', '#2a8f52')}
      ${stat('⚽', 'Matchs joués', nbMatches ?? '–', '#bb2020')}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
      <div class="card-panel">
        <h3 style="font-size:14px;margin-bottom:12px;font-weight:600">🎯 Actions rapides</h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn btn-primary" onclick="window.adminNav('players')">+ Ajouter un joueur</button>
          <button class="btn btn-yellow" onclick="window.adminNav('clubs')">+ Ajouter un club</button>
          <button class="btn btn-ghost" onclick="window.adminNav('card-builder')">🎨 Ouvrir Card Builder</button>
        </div>
      </div>
      <div class="card-panel">
        <h3 style="font-size:14px;margin-bottom:12px;font-weight:600">📋 Infos GDD</h3>
        <div style="font-size:12px;color:var(--gray-600);line-height:1.7">
          <div>Rarités: Normal / Pépite (or) / Papyte (argent) / Légende (violet)</div>
          <div>Postes: GK (noir) / DEF (rouge) / MIL (jaune) / ATT (vert)</div>
          <div>Formations: 25/25 schémas FUT17 (toutes les formations officielles)</div>
          <div>Encodage voyelles: A→E, E→I, I→O, O→U, U→A</div>
        </div>
      </div>
    </div>

    <div class="card-panel">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600">🔐 Code d'accès à l'inscription</h3>
      <div style="font-size:12px;color:var(--gray-600);margin-bottom:12px">Requis pour que le bouton "Créer mon compte" soit actif sur la page de connexion.</div>
      <div style="display:flex;gap:8px;max-width:420px">
        <input id="signup-pwd-input" type="text" value="${currentSignupPwd.replace(/"/g,'&quot;')}" style="flex:1;padding:10px 12px;border-radius:8px;border:1.5px solid var(--gray-200);font-size:14px;color:#1a1a1a">
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
    if (!val) { statusEl.textContent = 'Le code ne peut pas être vide.'; statusEl.style.color = '#cc2222'; return }
    const btn = document.getElementById('signup-pwd-save')
    btn.disabled = true; btn.textContent = '⏳...'
    const { error } = await supabase.rpc('set_signup_password', { new_password: val })
    btn.disabled = false; btn.textContent = '💾 Enregistrer'
    if (error) { statusEl.textContent = error.message; statusEl.style.color = '#cc2222'; return }
    statusEl.textContent = '✅ Code mis à jour.'
    statusEl.style.color = '#1A6B3C'
  })
}

function stat(icon, label, value, color) {
  return `<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${icon}</div>
    <div style="font-size:28px;font-weight:700;color:${color}">${value}</div>
    <div style="font-size:11px;color:var(--gray-600)">${label}</div>
  </div>`
}
