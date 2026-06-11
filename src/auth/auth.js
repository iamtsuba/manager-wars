import { supabase } from '../lib/supabase.js'

export function renderAuth(container, { navigate, toast }) {
  container.innerHTML = `
  <div class="auth-screen" style="animation:fadeIn 0.4s ease">
    <div class="auth-box">
      <div class="logo">⚽</div>
      <h1>Manager Wars</h1>
      <p class="subtitle">Le jeu de cartes football stratégique</p>

      <div class="auth-tabs">
        <div class="auth-tab active" data-tab="login">Connexion</div>
        <div class="auth-tab" data-tab="register">Inscription</div>
      </div>

      <!-- Login -->
      <div id="tab-login">
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="login-email" placeholder="manager@example.com" autocomplete="email">
        </div>
        <div class="form-group">
          <label>Mot de passe</label>
          <input type="password" id="login-password" placeholder="••••••••" autocomplete="current-password">
        </div>
        <div id="login-error" class="form-error"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" id="login-btn">
          Se connecter
        </button>
      </div>

      <!-- Register -->
      <div id="tab-register" style="display:none">
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="reg-email" placeholder="manager@example.com" autocomplete="email">
        </div>
        <div class="form-group">
          <label>Mot de passe (min. 6 caractères)</label>
          <input type="password" id="reg-password" placeholder="••••••••" autocomplete="new-password">
        </div>
        <div class="form-group">
          <label>Confirmer le mot de passe</label>
          <input type="password" id="reg-confirm" placeholder="••••••••" autocomplete="new-password">
        </div>
        <div id="reg-error" class="form-error"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" id="reg-btn">
          Créer mon compte
        </button>
        <p style="font-size:11px;color:var(--gray-600);text-align:center;margin-top:10px">
          Un compte = un Manager. Gratuit, sans CB.
        </p>
      </div>
    </div>
  </div>

  <style>
    @keyframes fadeIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:none } }
  </style>
  `

  // Onglets
  container.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'))
      tab.classList.add('active')
      document.getElementById('tab-login').style.display    = tab.dataset.tab === 'login'    ? 'block' : 'none'
      document.getElementById('tab-register').style.display = tab.dataset.tab === 'register' ? 'block' : 'none'
    })
  })

  // Login
  document.getElementById('login-btn').addEventListener('click', async () => {
    const email    = document.getElementById('login-email').value.trim()
    const password = document.getElementById('login-password').value
    const errEl    = document.getElementById('login-error')
    errEl.textContent = ''

    if (!email || !password) { errEl.textContent = 'Remplissez tous les champs.'; return }

    const btn = document.getElementById('login-btn')
    btn.textContent = 'Connexion…'; btn.disabled = true

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    btn.textContent = 'Se connecter'; btn.disabled = false

    if (error) {
      errEl.textContent = error.message.includes('Invalid') ? 'Email ou mot de passe incorrect.' : error.message
      return
    }

    window.location.reload()
  })

  document.getElementById('login-password').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('login-btn').click()
  })

  // Register
  document.getElementById('reg-btn').addEventListener('click', async () => {
    const email    = document.getElementById('reg-email').value.trim()
    const password = document.getElementById('reg-password').value
    const confirm  = document.getElementById('reg-confirm').value
    const errEl    = document.getElementById('reg-error')
    errEl.textContent = ''

    if (!email || !password || !confirm) { errEl.textContent = 'Remplissez tous les champs.'; return }
    if (password.length < 6) { errEl.textContent = 'Mot de passe trop court (min. 6 caractères).'; return }
    if (password !== confirm) { errEl.textContent = 'Les mots de passe ne correspondent pas.'; return }

    const btn = document.getElementById('reg-btn')
    btn.textContent = 'Création…'; btn.disabled = true

    const { error } = await supabase.auth.signUp({ email, password })
    btn.textContent = 'Créer mon compte'; btn.disabled = false

    if (error) { errEl.textContent = error.message; return }

    toast('Compte créé ! Connectez-vous.', 'success', 4000)
    document.querySelector('[data-tab="login"]').click()
    document.getElementById('login-email').value = email
  })
}
