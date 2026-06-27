/**
 * Manager Wars — SPA Router
 * Architecture : UN SEUL navigate() qui injecte toujours dans #page-content.
 * Le shell (top-nav + bottom-nav) est rendu une seule fois et jamais écrasé.
 */
import { supabase } from './lib/supabase.js'
import { registerAvatarGenerator } from './components/card.js'
import { generateAvatarSVG }       from './components/avatar.js'
registerAvatarGenerator(generateAvatarSVG)

import { renderAuth }       from './auth/auth.js'
import { renderSetup }      from './auth/setup.js'
import { renderHome }       from './home/home.js'
import { renderCollection } from './collection/collection.js'
import { renderDecks }      from './decks/decks.js'
import { renderBoosters, renderStarterOnboarding }   from './boosters/boosters.js'
import { renderMatchIA }     from './match/match-ia.js'
import { renderMatchRandom } from './match/match-random.js'
import { renderMarket }     from './market/market.js'
import { renderRankings }   from './rankings/rankings.js'
import { renderMatches }    from './matches/matches.js'
import { renderFriends }    from './friends/friends.js'
import { setFormationLinksOverrides } from './match/formation-links.js'

// ── État global ───────────────────────────────────────────
export const state = {
  user:    null,
  profile: null,
  page:    'home',
  params:  {},
}

// ── Toast ─────────────────────────────────────────────────
export function toast(msg, type = 'info', duration = 3000) {
  const el = document.getElementById('toast')
  if (!el) return
  el.textContent = msg
  el.className = `show ${type}`
  clearTimeout(el._t)
  el._t = setTimeout(() => { el.className = '' }, duration)
}

// ── Modal ─────────────────────────────────────────────────
export function openModal(title, bodyHTML, footerHTML = '') {
  document.getElementById('modal-title').textContent = title
  document.getElementById('modal-body').innerHTML   = bodyHTML
  document.getElementById('modal-footer').innerHTML = footerHTML
  document.getElementById('modal-overlay').classList.remove('hidden')
}
export function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden')
}

// ── Refresh profil ────────────────────────────────────────
export async function refreshProfile() {
  if (!state.user) return
  const { data } = await supabase.from('users').select('*').eq('id', state.user.id).single()
  if (data) state.profile = data
}

// ── THÈME ─────────────────────────────────────────────────
const THEME_KEY = 'mw_theme'

export function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'light' // par défaut : design du kit graphique
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme)
  applyTheme(theme)
  // Persister côté serveur si profil connu
  if (state.profile?.id) {
    supabase.from('users').update({ theme }).eq('id', state.profile.id).then(() => {})
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

// ── NAVIGATE — point d'entrée unique ─────────────────────
export function navigate(page, params = {}) {
  state.page   = page
  state.params = params
  renderPage()
}

async function renderPage() {
  const container = document.getElementById('page-content')
  if (!container) return

  // Maj bottom-nav active
  document.querySelectorAll('.bottom-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === state.page)
  })

  // Maj crédits
  const credEl = document.getElementById('nav-credits')
  if (credEl && state.profile) {
    credEl.textContent = `💰 ${(state.profile.credits||0).toLocaleString('fr')}`
  }

  const ctx = { state, navigate, toast, openModal, closeModal, refreshProfile }

  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽</div>'

  switch (state.page) {
    case 'home':       await renderHome(container, ctx);       break
    case 'collection': await renderCollection(container, ctx); break
    case 'decks':      await renderDecks(container, ctx);      break
    case 'boosters':   await renderBoosters(container, ctx);   break
    case 'match': {
      const mm = (state.params && state.params.matchMode) || 'vs_ai_easy'
      if (mm === 'random') await renderMatchRandom(container, ctx)
      else                 await renderMatchIA(container, ctx)
      break
    }
    case 'market':     await renderMarket(container, ctx);     break
    case 'rankings':   await renderRankings(container, ctx);   break
    case 'matches':    await renderMatches(container, ctx);    break
    case 'friends':    await renderFriends(container, ctx);    break
    default:           await renderHome(container, ctx);
  }
}

// ── APP SHELL — construit UNE SEULE FOIS ─────────────────
function renderAppShell() {
  const app = document.getElementById('app')
  const p   = state.profile
  if (!p) return

  const ICON = import.meta.env.BASE_URL + 'icons/'

  app.innerHTML = `
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${ICON}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(p.credits||0).toLocaleString('fr')}</div>
        <button id="theme-toggle" class="theme-toggle-btn" title="Changer le thème">
          <span id="theme-icon"></span>
        </button>
      </div>
    </nav>

    <main id="page-content" class="page"></main>

    <nav class="bottom-nav">
      <a href="#" data-page="home" class="active">
        <div class="nav-icon-wrap">
          <img src="${ICON}nav-home.png" alt="" class="nav-icon">
          <img src="${ICON}nav-home-txt.png" alt="Accueil" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="collection">
        <div class="nav-icon-wrap">
          <img src="${ICON}nav-collection.png" alt="" class="nav-icon">
          <img src="${ICON}nav-collection-txt.png" alt="Cartes" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="decks">
        <div class="nav-icon-wrap">
          <img src="${ICON}nav-decks.png" alt="" class="nav-icon">
          <img src="${ICON}nav-deck-txt.png" alt="Decks" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="boosters">
        <div class="nav-icon-wrap">
          <img src="${ICON}nav-boosters.png" alt="" class="nav-icon">
          <img src="${ICON}nav-boosters-txt.png" alt="Boosters" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="market">
        <div class="nav-icon-wrap">
          <img src="${ICON}nav-market.png" alt="" class="nav-icon">
          <img src="${ICON}nav-market-txt.png" alt="Marché" class="nav-label">
        </div>
      </a>
    </nav>
  `

  // Attacher les listeners UNE SEULE FOIS
  document.querySelectorAll('.bottom-nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault()
      navigate(a.dataset.page)
    })
  })
  document.getElementById('nav-logo').addEventListener('click', () => navigate('home'))
  document.getElementById('nav-credits').addEventListener('click', () => navigate('boosters'))

  // Toggle thème
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = getTheme()
    const next = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
    updateThemeIcon(next)
  })
  updateThemeIcon(getTheme())
}

function updateThemeIcon(theme) {
  const el = document.getElementById('theme-icon')
  if (!el) return
  // dark = noir actuel -> icône proposant de passer au clair (soleil)
  // light = clair -> icône proposant de revenir au sombre (lune)
  el.textContent = theme === 'dark' ? '☀️' : '🌙'
}

// ── BOOTSTRAP ─────────────────────────────────────────────
async function init() {
  // Appliquer le thème sauvegardé avant tout rendu (évite le flash)
  applyTheme(getTheme())

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal()
  })
  document.getElementById('modal-close').addEventListener('click', closeModal)

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    hideLoader()
    renderAuth(document.getElementById('app'), { navigate: () => window.location.reload(), toast })
    return
  }

  state.user = session.user
  await refreshProfile()
  hideLoader()

  // Charger les liens de formation personnalisés depuis l'admin (si définis)
  try {
    const { data: overridesRows } = await supabase
      .from('formation_links_overrides')
      .select('formation, links')
    const overrides = {}
    ;(overridesRows || []).forEach(row => { overrides[row.formation] = row.links })
    setFormationLinksOverrides(overrides)
  } catch (e) {
    console.warn('Impossible de charger les overrides de formation:', e)
  }

  if (!state.profile) {
    renderSetup(document.getElementById('app'), { state, navigate: async () => { await refreshProfile(); launchApp() }, toast, refreshProfile })
    return
  }

  // Onboarding : si des boosters de démarrage sont en attente, les faire ouvrir d'abord
  const pendingBoosters = Array.isArray(state.profile.pending_boosters) ? state.profile.pending_boosters : []
  if (!state.profile.onboarding_done && pendingBoosters.length > 0) {
    renderStarterOnboarding(document.getElementById('app'), { state, navigate: () => launchApp(), toast, refreshProfile })
    return
  }

  // Appliquer le thème sauvegardé en BDD si présent (prioritaire sur localStorage)
  if (state.profile.theme && state.profile.theme !== getTheme()) {
    localStorage.setItem(THEME_KEY, state.profile.theme)
    applyTheme(state.profile.theme)
  }

  launchApp()

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_OUT') {
      state.user = null
      state.profile = null
      document.getElementById('app').innerHTML = ''
      renderAuth(document.getElementById('app'), { navigate: () => window.location.reload(), toast })
    }
  })
}

// ── Fix viewport mobile (bug 100vh Android) ───────────────
// Sur certains navigateurs mobiles, 100vh inclut la zone sous la barre
// d'outils du navigateur, et 100dvh n'est pas toujours honoré. window.
// innerHeight peut lui aussi renvoyer la hauteur du *layout viewport*
// (plus grande que la zone visible). window.visualViewport.height est la
// mesure la plus fiable de la zone réellement visible (hors barre d'URL).
function realViewportHeight() {
  return Math.round((window.visualViewport && window.visualViewport.height) || window.innerHeight)
}
function applyAppHeight() {
  const app = document.getElementById('app')
  if (app) app.style.height = realViewportHeight() + 'px'
}
window.addEventListener('resize', applyAppHeight)
window.addEventListener('orientationchange', () => setTimeout(applyAppHeight, 150))
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', applyAppHeight)
}

function launchApp() {
  // Ping de présence : mise à jour last_seen_at au démarrage et toutes les 60s
  const pingPresence = () => {
    if (state.user?.id) {
      supabase.from('users').update({ last_seen_at: new Date().toISOString() }).eq('id', state.user.id).then(() => {})
    }
  }
  pingPresence()
  if (window._presencePingInterval) clearInterval(window._presencePingInterval)
  window._presencePingInterval = setInterval(pingPresence, 60_000)
  const app = document.getElementById('app')
  app.style.display = 'flex'
  app.style.flexDirection = 'column'
  applyAppHeight()
  renderAppShell()
  renderPage()
}

function hideLoader() {
  const l = document.getElementById('app-loader')
  const app = document.getElementById('app')
  if (app) app.style.display = ''
  if (l) {
    l.classList.add('zoom-out')
    setTimeout(() => l.style.display = 'none', 500)
  }
}

function showBootError(msg) {
  const l = document.getElementById('app-loader')
  if (l) l.style.display = 'none'
  if (document.getElementById('boot-error')) return
  const ov = document.createElement('div')
  ov.id = 'boot-error'
  ov.style.cssText = 'position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center'
  ov.innerHTML = `
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${msg || "Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`
  document.body.appendChild(ov)
  document.getElementById('boot-retry')?.addEventListener('click', () => window.location.reload())
}

init().catch(err => {
  console.error('Échec du démarrage:', err)
  showBootError()
})

// Watchdog : si le loader est encore visible après 12s, le démarrage est bloqué
setTimeout(() => {
  const l = document.getElementById('app-loader')
  if (l && l.style.display !== 'none' && !l.classList.contains('zoom-out') && !document.getElementById('boot-error')) {
    showBootError("Le serveur met trop de temps à répondre.")
  }
}, 12000)
