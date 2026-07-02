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
import { renderMatchFriend } from './match/match-friend.js'
import { renderMiniLeague  } from './mini-league/mini-league.js'
import { renderMatchMiniLeague } from './match/match-minileague.js'
import { checkAndShowTutorial } from './tutorial/tutorial.js'
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
      else if (mm === 'friend') await renderMatchFriend(container, ctx, state.params?.friendId, state.params?.friendName)
      else if (mm === 'mini-league') await renderMatchMiniLeague(container, ctx, state.params?.mlMatchId, state.params?.leagueId)
      else                 await renderMatchIA(container, ctx)
      break
    }
    case 'market':     await renderMarket(container, ctx);     break
    case 'rankings':   await renderRankings(container, ctx);   break
    case 'matches':    await renderMatches(container, ctx);    break
    case 'friends':    await renderFriends(container, ctx);    break
    case 'mini-league': await renderMiniLeague(container, ctx); break
    case 'match-mini-league': {
      const p = state.params||{}
      await renderMatchMiniLeague(container, ctx, p.mlMatchId, p.leagueId)
      break
    }
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
        <button id="journal-btn" title="Journal des mises à jour" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          📰
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
  document.getElementById('journal-btn')?.addEventListener('click', () => showJournalPopup())
}

// ── Journal des mises à jour ───────────────────────────────
async function showJournalPopup() {
  const { data: articles } = await supabase
    .from('patch_notes')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(20)

  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px'

  const list = (articles||[]).map(a => {
    const date = new Date(a.published_at).toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' })
    return `<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${a.image_url ? `<img src="${a.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">` : ''}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${date}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${a.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${a.description}</div>
    </div>`
  }).join('')

  ov.innerHTML = `
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${list || '<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`

  document.body.appendChild(ov)
  ov.querySelector('#journal-close').addEventListener('click', () => ov.remove())
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

// ── BOOTSTRAP ─────────────────────────────────────────────
async function init() {
  // Toujours mode light (le toggle dark/light a été supprimé)
  document.documentElement.setAttribute('data-theme', 'light')

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

  launchApp()
  // Tutoriel première connexion (après rendu de la home)
  setTimeout(() => checkAndShowTutorial(state.profile, navigate, toast), 800)

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
