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
import { renderHome2 }      from './home/home2.js'
import { renderGame }       from './home/game.js'
import { renderSettings }   from './settings/settings.js'
import { renderCollection } from './collection/collection.js'
import { renderDecks }      from './decks/decks.js'
import { renderBoosters, renderStarterOnboarding }   from './boosters/boosters.js'
import { renderMatchIA }     from './match/match-ia.js'
import { renderMatchRandom } from './match/match-random.js'
import { renderMatchFriend } from './match/match-friend.js'
import { renderMiniLeague  } from './mini-league/mini-league.js'
import { renderMatchMiniLeague } from './match/match-minileague.js'
import { checkAndShowTutorialV2, startTutorialV2 } from './tutorial/tutorial-v2-player.js'
import { renderMarket }     from './market/market.js'
import { renderRankings }   from './rankings/rankings.js'
import { renderRanked }     from './ranked/ranked.js'
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
  const ov = document.getElementById('modal-overlay')
  // #modal-overlay est PARTAGÉ par toute l'app. Certains écrans le masquent
  // temporairement (ex. évolution auto en Collection) ; si la restauration
  // échoue, plus aucune modale ne s'affiche nulle part. On réinitialise donc
  // systématiquement à l'ouverture.
  ov.style.visibility = ''
  ov.classList.remove('hidden')
}
export function closeModal() {
  const ov = document.getElementById('modal-overlay')
  ov.style.visibility = ''
  ov.classList.add('hidden')
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
  return localStorage.getItem(THEME_KEY) || 'dark' // par défaut : thème sombre
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
  if (theme === 'club') {
    document.documentElement.style.setProperty('--club-color1', state.profile?.club_color1 || '#0a0f0a')
    document.documentElement.style.setProperty('--club-color2', state.profile?.club_color2 || '#080d08')
  }
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
    case 'home':       await renderHome2(container, ctx);       break
    case 'home2':       await renderHome2(container, ctx);       break
    case 'game':        await renderGame(container, ctx);        break
    case 'settings':   await renderSettings(container, ctx);   break
    case 'collection': await renderCollection(container, ctx); break
    case 'decks':      await renderDecks(container, ctx);      break
    case 'boosters':   await renderBoosters(container, ctx);   break
    case 'ranked':     await renderRanked(container, ctx);     break
    case 'match': {
      const mm = (state.params && state.params.matchMode) || 'vs_ai_easy'
      if (mm === 'random')  await renderMatchRandom(container, ctx, false)
      else if (mm === 'ranked') await renderMatchRandom(container, ctx, true)
      else if (mm === 'friend') await renderMatchFriend(container, ctx, state.params?.friendId, state.params?.friendName)
      else if (mm === 'mini_league' || mm === 'mini-league') await renderMatchMiniLeague(container, ctx, state.params?.mlMatchId, state.params?.leagueId)
      else                   await renderMatchIA(container, ctx)
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
    default:           await renderHome2(container, ctx);
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
      <div class="logo" id="nav-logo" title="Manager Wars v${typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : '—'}" style="cursor:pointer">
        <img src="${ICON}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(p.credits||0).toLocaleString('fr')}</div>
        <button id="journal-btn" title="Journal des mises à jour" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          📰
        </button>
        <button id="settings-btn" title="Réglages" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          ⚙️
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
  document.getElementById('settings-btn')?.addEventListener('click', () => navigate('settings'))
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

// ── VITRINE PUBLIQUE (racine, sans session) ──────────────
// Contenu identique pour tout le monde (visiteurs et robots d'indexation/
// AdSense) — la connexion ne s'affiche qu'au clic sur "Jouer".
function renderPublicLanding(root, { onPlay }) {
  const ICON = import.meta.env.BASE_URL + 'icons/'
  root.style.cssText = ''
  root.innerHTML = `
  <style>
    #public-landing{
      --gold:#D4A017; --ink:#f3f5f2; --ink-dim:rgba(243,245,242,0.65); --ink-faint:rgba(243,245,242,0.42);
      min-height:100vh; box-sizing:border-box;
      background:
        radial-gradient(1100px 700px at 15% -10%, rgba(212,160,23,0.10), transparent 60%),
        radial-gradient(1400px 900px at 85% 10%, rgba(26,107,60,0.35), transparent 55%),
        linear-gradient(180deg, #081308, #0d1a0f 40%, #123018);
      color:var(--ink); font-family:'Inter', system-ui, sans-serif; line-height:1.6;
      display:flex; flex-direction:column; align-items:center; padding:32px 20px 60px;
    }
    #public-landing *{box-sizing:border-box}
    #public-landing .pl-wrap{max-width:640px; width:100%; text-align:center}
    #public-landing .pl-eyebrow{font-weight:700; letter-spacing:0.24em; text-transform:uppercase; font-size:11px; color:var(--gold); margin-bottom:12px}
    #public-landing h1{font-size:clamp(28px,7vw,42px); font-weight:900; line-height:1.05; margin:0 0 16px}
    #public-landing h1 em{font-style:normal; color:var(--gold)}
    #public-landing p.pl-lede{color:var(--ink-dim); font-size:15px; max-width:460px; margin:0 auto 26px}
    #public-landing .pl-btn{
      display:inline-flex; align-items:center; gap:8px; padding:14px 30px; border-radius:999px;
      background:var(--gold); color:#141000; font-weight:700; font-size:15px; border:none; cursor:pointer;
      box-shadow:0 10px 30px -8px rgba(212,160,23,0.55);
    }
    #public-landing .pl-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:44px 0}
    #public-landing .pl-card{background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px; text-align:left}
    #public-landing .pl-card .pl-ico{font-size:20px; margin-bottom:10px}
    #public-landing .pl-card h3{font-size:15px; margin:0 0 6px; color:var(--ink)}
    #public-landing .pl-card p{font-size:13px; color:var(--ink-dim); margin:0}
    #public-landing .pl-foot{margin-top:30px; font-size:13px; color:var(--ink-faint)}
    #public-landing .pl-foot a{color:var(--ink-dim); text-decoration:none; margin:0 10px}
    #public-landing .pl-foot a:hover{color:var(--ink)}
    #public-landing .pl-logo{height:36px; margin-bottom:26px}
    @media (max-width:620px){ #public-landing .pl-grid{grid-template-columns:1fr} }
  </style>
  <div id="public-landing">
    <div class="pl-wrap">
      <img class="pl-logo" src="${ICON}logo-withname.png" alt="Manager Wars">
      <p class="pl-eyebrow">Jeu de cartes football — gratuit</p>
      <h1>Composez votre onze,<br><em>activez vos liens</em>,<br>gagnez le duel.</h1>
      <p class="pl-lede">Placez vos joueurs sur une grille de formation, activez des bonus de club et de pays entre joueurs adjacents, et affrontez d'autres managers en duel tour par tour.</p>
      <button id="pl-play-btn" class="pl-btn">Jouer maintenant</button>

      <div class="pl-grid">
        <div class="pl-card">
          <div class="pl-ico">🃏</div>
          <h3>Construisez votre deck</h3>
          <p>Collectionnez des joueurs et assemblez votre onze titulaire.</p>
        </div>
        <div class="pl-card">
          <div class="pl-ico">🔗</div>
          <h3>Activez les liens</h3>
          <p>Club ou pays partagé entre joueurs adjacents : bonus garanti.</p>
        </div>
        <div class="pl-card">
          <div class="pl-ico">⚔️</div>
          <h3>Duel tour par tour</h3>
          <p>Attaquez, défendez, et affrontez IA, amis ou inconnus.</p>
        </div>
      </div>

      <div class="pl-foot">
        <a href="/accueil.html">En savoir plus</a>
        <a href="/confidentialite.html">Confidentialité</a>
        <a href="/contact.html">Contact</a>
      </div>
    </div>
  </div>`

  root.querySelector('#pl-play-btn')?.addEventListener('click', onPlay)
}


// ── BOOTSTRAP ─────────────────────────────────────────────
async function init() {
  // ── Mode "Preview Tutoriel" (?tutorialPreview=1) ─────────────────────
  // Utilisé par l'admin (Tutoriel v2) pour afficher un aperçu 100% fidèle
  // d'une étape de tutoriel : charge la VRAIE page du jeu avec le compte
  // démo partagé (même compte que tutorial-v3.js), puis dessine un
  // spotlight + une bulle par-dessus, pilotés en direct par le parent via
  // postMessage. Ne touche à AUCUN flux normal (auth, session réelle).
  const __previewParams = new URLSearchParams(location.search)
  if (__previewParams.get('tutorialPreview') === '1') {
    return initTutorialPreview(__previewParams)
  }

  // ── Mode "Démo publique du tutoriel" (?tutorialDemo=1) ────────────────
  // Utilisé par le bouton "Voir le tutoriel" de la page de présentation
  // publique (accueil.html, visiteurs SANS compte). Charge le compte démo
  // partagé et joue le VRAI tutoriel interactif complet (tutorial-v2-player)
  // exactement comme le vivrait un joueur inscrit — aucune duplication de
  // contenu, aucun compte requis.
  if (__previewParams.get('tutorialDemo') === '1') {
    return initTutorialDemo()
  }

  // Applique le thème choisi (club par défaut, ou la préférence sauvegardée)
  applyTheme(getTheme())

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal()
  })
  document.getElementById('modal-close').addEventListener('click', closeModal)

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    hideLoader()
    renderPublicLanding(document.getElementById('app'), {
      onPlay: () => renderAuth(document.getElementById('app'), { navigate: () => window.location.reload(), toast })
    })
    return
  }

  state.user = session.user
  await refreshProfile()
  applyTheme(getTheme())
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
    renderSetup(document.getElementById('app'), { state, navigate: async () => { await refreshProfile(); applyTheme(getTheme()); launchApp() }, toast, refreshProfile })
    return
  }

  // ── Heartbeat "en ligne" (visible dans Admin > Managers) ──
  // Un ping toutes les 45s tant que l'app est ouverte ; Admin considère
  // un manager "en ligne" si last_seen < 2 minutes.
  supabase.rpc('heartbeat').then(()=>{}).catch(()=>{})
  setInterval(() => { supabase.rpc('heartbeat').then(()=>{}).catch(()=>{}) }, 45000)

  // Onboarding : si des boosters de démarrage sont en attente, les faire ouvrir d'abord
  const pendingBoosters = Array.isArray(state.profile.pending_boosters) ? state.profile.pending_boosters : []
  if (!state.profile.onboarding_done && pendingBoosters.length > 0) {
    renderStarterOnboarding(document.getElementById('app'), {
      state, toast, refreshProfile,
      navigate: () => {
        launchApp()
        setTimeout(() => checkAndShowTutorialV2(state.profile, navigate, toast), 800)
      },
    })
    return
  }

  launchApp()
  // Tutoriel première connexion (après rendu de la home), ou forcé si lancé
  // depuis le bouton "Voir le tutoriel" de la page publique (?tutorial=1)
  const wantsTutorial = new URLSearchParams(location.search).get('tutorial') === '1'
  if (wantsTutorial) {
    history.replaceState({}, '', location.pathname)
    setTimeout(() => startTutorialV2({ state, navigate, toast }, () => navigate('settings')), 800)
  } else {
    setTimeout(() => checkAndShowTutorialV2(state.profile, navigate, toast), 800)
  }

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

export function launchApp() {
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
  const seo = document.getElementById('seo-content')
  const app = document.getElementById('app')
  if (app) app.style.display = ''
  if (seo) seo.style.display = 'none'
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

// ═══════════════════════════════════════════════════════════════════════
// MODE PREVIEW TUTORIEL — rendu 100% réel piloté depuis l'admin
// ═══════════════════════════════════════════════════════════════════════
// Compte démo partagé, identique à celui utilisé par tutorial-v3.js
// (voir migration_tutorial_demo_account.sql). Jamais modifié : toutes les
// interactions sont désactivées (pointer-events:none sur #app) — ceci est
// un aperçu à regarder, pas un tutoriel jouable.
const PREVIEW_DEMO_ID = '00000000-0000-4000-8000-000000000001'

async function initTutorialPreview(params) {
  const { data: demoProfile } = await supabase
    .from('users').select('*').eq('id', PREVIEW_DEMO_ID).single()

  state.user    = { id: PREVIEW_DEMO_ID }
  state.profile = demoProfile || { credits: 0, pseudo: 'Démo' }

  applyTheme(getTheme())
  hideLoader()
  launchApp()

  // Neutralise toute interaction réelle : ceci est un aperçu, pas le jeu.
  // (Le mode "picker" ci-dessous réactive temporairement les clics.)
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = 'none'

  navigate(params.get('page') || 'home')
  setTimeout(() => drawTutorialPreviewOverlay(params), 400)

  // Mises à jour live depuis le parent (admin), sans recharger l'iframe
  window.addEventListener('message', e => {
    if (!e.data) return

    if (e.data.type === 'tutorial-preview-update') {
      const p = new URLSearchParams(e.data.payload)
      const newPage = p.get('page') || 'home'
      if (newPage !== state.page) {
        navigate(newPage)
        setTimeout(() => drawTutorialPreviewOverlay(p), 350)
      } else {
        drawTutorialPreviewOverlay(p)
      }
      return
    }

    if (e.data.type === 'tutorial-preview-picker-start') {
      startElementPicker()
      return
    }

    if (e.data.type === 'tutorial-preview-picker-cancel') {
      stopElementPicker()
      return
    }
  })
}

// ── Mode démo publique : joue le VRAI tutoriel interactif, sans compte ──
async function initTutorialDemo() {
  const { data: demoProfile } = await supabase
    .from('users').select('*').eq('id', PREVIEW_DEMO_ID).single()

  state.user    = { id: PREVIEW_DEMO_ID }
  state.profile = demoProfile || { credits: 0, pseudo: 'Démo' }

  applyTheme(getTheme())
  hideLoader()
  launchApp()

  setTimeout(() => {
    startTutorialV2({ state, navigate, toast }, () => {
      // Fin de la démo publique → invite à créer un vrai compte
      window.location.href = '/'
    })
  }, 400)
}

// ── Sélecteur d'élément (picker) ────────────────────────────────────────
// Permet à l'admin de cliquer directement sur un élément dans l'aperçu
// pour récupérer automatiquement un sélecteur CSS, au lieu de le taper à
// la main. Réactive temporairement les clics (normalement désactivés),
// les intercepte en phase capture pour empêcher toute navigation réelle,
// puis les restaure à la sortie du mode picker.
let _pickerActive = false
let _pickerHoverEl = null

function startElementPicker() {
  if (_pickerActive) return
  _pickerActive = true
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = ''

  _pickerHoverEl = document.createElement('div')
  _pickerHoverEl.id = 'tut-picker-hover'
  _pickerHoverEl.style.cssText = 'position:fixed;z-index:9900;pointer-events:none;border:2px dashed #1A6B3C;background:rgba(26,107,60,0.15);border-radius:4px;display:none'
  document.body.appendChild(_pickerHoverEl)

  document.addEventListener('mouseover', onPickerMouseOver, true)
  document.addEventListener('click', onPickerClick, true)
  document.addEventListener('keydown', onPickerKeydown, true)

  // Bandeau d'instruction pendant la sélection
  let banner = document.getElementById('tut-picker-banner')
  if (!banner) {
    banner = document.createElement('div')
    banner.id = 'tut-picker-banner'
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9901;background:#1A6B3C;color:#fff;text-align:center;padding:8px;font-size:13px;font-weight:700;pointer-events:none'
    banner.textContent = '🎯 Clique sur un élément de la page pour le sélectionner (Échap pour annuler)'
    document.body.appendChild(banner)
  }
}

function stopElementPicker() {
  if (!_pickerActive) return
  _pickerActive = false
  const appEl = document.getElementById('app')
  if (appEl) appEl.style.pointerEvents = 'none'
  document.removeEventListener('mouseover', onPickerMouseOver, true)
  document.removeEventListener('click', onPickerClick, true)
  document.removeEventListener('keydown', onPickerKeydown, true)
  _pickerHoverEl?.remove()
  _pickerHoverEl = null
  document.getElementById('tut-picker-banner')?.remove()
}

function onPickerMouseOver(e) {
  if (!_pickerHoverEl) return
  const r = e.target.getBoundingClientRect()
  _pickerHoverEl.style.display = 'block'
  _pickerHoverEl.style.left = r.left + 'px'
  _pickerHoverEl.style.top = r.top + 'px'
  _pickerHoverEl.style.width = r.width + 'px'
  _pickerHoverEl.style.height = r.height + 'px'
}

// Sélecteurs des conteneurs de navigation persistante (chrome), visibles
// sur TOUTES les pages du jeu — un élément dedans n'est jamais "propre" à
// une seule page, même si l'aperçu est actuellement sur telle ou telle page.
const GLOBAL_NAV_CONTAINERS = [
  '.home2-chrome-header', '.home2-mobile-top', '.home2-mobile-bottom',
  '.home2-chrome-tabs', '.top-nav', '.bottom-nav',
]

function isInGlobalNav(el) {
  return GLOBAL_NAV_CONTAINERS.some(sel => el.closest(sel))
}

function onPickerClick(e) {
  e.preventDefault()
  e.stopPropagation()
  e.stopImmediatePropagation()
  const selector = buildSelectorFor(e.target)
  const isGlobalNav = isInGlobalNav(e.target)
  window.parent.postMessage({ type: 'tutorial-preview-picker-result', selector, isGlobalNav }, '*')
  stopElementPicker()
}

function onPickerKeydown(e) {
  if (e.key === 'Escape') {
    window.parent.postMessage({ type: 'tutorial-preview-picker-cancelled' }, '*')
    stopElementPicker()
  }
}

// Construit un sélecteur CSS lisible et si possible stable pour l'élément
// cliqué : priorité à un attribut data-* distinctif (convention déjà
// utilisée dans tout le jeu : data-page, data-card-id...), puis à l'id,
// puis à un chemin tag.class:nth-of-type limité à 3 niveaux.
function buildSelectorFor(el) {
  if (!el || el === document.body) return 'body'

  // Cherche l'élément lui-même puis ses parents proches pour un attribut
  // data-* exploitable (un clic tombe souvent sur une icône/texte enfant)
  let node = el
  for (let depth = 0; depth < 3 && node && node.nodeType === 1; depth++) {
    for (const attr of Array.from(node.attributes || [])) {
      if (attr.name.startsWith('data-') && attr.value) {
        return `[${attr.name}="${attr.value}"]`
      }
    }
    if (node.id) return '#' + node.id
    node = node.parentElement
  }

  // Fallback : chemin structurel court
  const path = []
  node = el
  for (let i = 0; i < 3 && node && node.nodeType === 1 && node !== document.body; i++) {
    let sel = node.tagName.toLowerCase()
    if (typeof node.className === 'string' && node.className.trim()) {
      const cls = node.className.trim().split(/\s+/).filter(Boolean).slice(0, 2).join('.')
      if (cls) sel += '.' + cls
    }
    const parent = node.parentElement
    if (parent) {
      const siblings = Array.from(parent.children).filter(s => s.tagName === node.tagName)
      if (siblings.length > 1) sel += `:nth-of-type(${siblings.indexOf(node) + 1})`
    }
    path.unshift(sel)
    node = parent
  }
  return path.join(' > ') || el.tagName.toLowerCase()
}

// Certains éléments (barre de navigation notamment) existent EN DOUBLE dans
// le DOM — une version desktop et une version mobile — la bascule entre les
// deux se faisant uniquement via CSS (display:none), pas en JS. Un simple
// querySelector() attrape alors systématiquement le premier des deux dans
// l'ordre du DOM, qui peut très bien être la version actuellement CACHÉE
// (taille 0×0, donc highlight invisible). On cherche ici explicitement le
// premier élément correspondant qui a une taille réelle (donc visible).
function findVisibleTarget(selector) {
  let all
  try {
    all = document.querySelectorAll(selector)
  } catch (e) {
    return null // sélecteur CSS invalide
  }
  for (const el of all) {
    const r = el.getBoundingClientRect()
    if (r.width > 0 && r.height > 0) return el
  }
  // Aucun match visible : retourne le premier quand même (pour que le
  // statut "found" reste correct côté admin), même s'il ne sera pas
  // visuellement mis en évidence.
  return all[0] || null
}

function drawTutorialPreviewOverlay(params) {
  document.getElementById('tut-preview-overlay')?.remove()

  const selector  = params.get('selector') || ''
  // L'iframe de l'admin est redimensionnée réellement (320px mobile /
  // 1100px desktop, voir tutorial-admin-v2.js) — window.innerWidth ici
  // reflète donc fidèlement le mode simulé, même seuil que le jeu (900px).
  const isMobileViewport = window.innerWidth < 900
  const position = (isMobileViewport
    ? params.get('position')
    : (params.get('positionDesktop') || params.get('position'))) || 'center'
  const title     = params.get('title') || ''
  const text      = params.get('text') || ''
  const action    = params.get('action') || ''
  const highlight = params.get('highlight') || 'none'   // style de l'anneau : none/glow/pulse/highlight
  const dimScreen = params.get('dim') === '1'            // grisage indépendant du highlight

  const targetEl = selector ? findVisibleTarget(selector) : null

  // Informe l'admin (parent) si le sélecteur ne matche rien, pour afficher
  // un avertissement au lieu de laisser l'utilisateur deviner pourquoi rien
  // ne s'affiche.
  try {
    window.parent.postMessage({
      type: 'tutorial-preview-target-status',
      selector,
      found: !selector || !!targetEl,
    }, '*')
  } catch (e) { /* pas dans un iframe (accès direct à l'URL) */ }

  // Un sélecteur qui matche un conteneur quasi plein écran (ex: "#app", le
  // wrapper racine de toute l'app) rend le spotlight/grisage inopérant en
  // pratique : le "trou" découpé dans le voile a alors la taille de
  // l'écran entier, donc rien ne semble grisé. On ignore délibérément ces
  // cibles pour le rendu visuel (le statut "found" envoyé ci-dessus reste
  // néanmoins correct pour l'admin).
  let visualTargetEl = targetEl
  if (targetEl) {
    const r0 = targetEl.getBoundingClientRect()
    const coverage = (r0.width * r0.height) / (window.innerWidth * window.innerHeight)
    if (coverage > 0.9) visualTargetEl = null
  }

  const dim = document.createElement('div')
  dim.id = 'tut-preview-overlay'
  dim.style.cssText = 'position:fixed;inset:0;z-index:9800;pointer-events:none'

  let html = ''

  // Grisage de l'écran (indépendant du style d'anneau) — avec découpe
  // autour de l'élément ciblé s'il existe, sinon plein écran.
  if (dimScreen) {
    if (visualTargetEl) {
      const r = visualTargetEl.getBoundingClientRect()
      html += `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.62);
        clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%,
          0% ${r.top - 6}px,${r.left - 6}px ${r.top - 6}px,${r.left - 6}px ${r.bottom + 6}px,
          ${r.right + 6}px ${r.bottom + 6}px,${r.right + 6}px ${r.top - 6}px,0% ${r.top - 6}px)"></div>`
    } else {
      html += `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.62)"></div>`
    }
  }

  // Anneau de mise en évidence autour de l'élément ciblé
  if (visualTargetEl && highlight !== 'none') {
    const r = visualTargetEl.getBoundingClientRect()
    const ringColor = highlight === 'glow' ? '#D4A017' : '#1A6B3C'
    const anim = highlight === 'pulse' ? 'animation:tutPreviewPulse 1.6s infinite;'
               : highlight === 'glow'  ? 'animation:tutPreviewGlow 1.6s infinite;' : ''
    html += `<div style="position:absolute;left:${r.left - 6}px;top:${r.top - 6}px;
      width:${r.width + 12}px;height:${r.height + 12}px;border-radius:10px;
      border:2.5px solid ${ringColor};box-shadow:0 0 0 2px rgba(255,255,255,0.85);${anim}"></div>`
  }

  const vw = window.innerWidth, vh = window.innerHeight
  const bw = vw - 100

  // Hauteur réelle de la nav (mesurée par le jeu lui-même dans l'iframe,
  // posée sur documentElement — voir home2.js). Sert à placer le popup
  // juste au-dessus (mobile, nav en bas) ou juste en dessous (desktop,
  // nav en haut) de la vraie barre.
  const navBottomH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--v2-bottom-height')) || 76
  const navTopH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--v2-top-height')) || 56

  // La position du popup respecte TOUJOURS le choix manuel (popup_position),
  // qu'un élément soit ciblé ou non — le sélecteur DOM ne pilote que le
  // spotlight/highlight, jamais l'emplacement de la bulle. (Auparavant, un
  // dom_selector qui matchait un élément — ex. "#app" — écrasait la
  // position choisie en collant systématiquement le popup à cet élément.)
  const posMap = {
    center:       'top:50%;left:50%;transform:translate(-50%,-50%);',
    top:          'top:16px;left:50%;transform:translateX(-50%);',
    'upper-center': 'top:28%;left:50%;transform:translate(-50%,-50%);',
    'lower-center': 'top:72%;left:50%;transform:translate(-50%,-50%);',
    'top-left':   'top:16px;left:16px;',
    'top-right':  'top:16px;right:16px;',
    bottom:       'bottom:16px;left:50%;transform:translateX(-50%);',
    'bottom-left':  'bottom:16px;left:16px;',
    'bottom-right': 'bottom:16px;right:16px;',
    'above-nav':  isMobileViewport
      ? `bottom:${navBottomH + 12}px;left:50%;transform:translateX(-50%);`
      : `top:${navTopH + 12}px;left:50%;transform:translateX(-50%);`,
  }
  const bubbleStyle = posMap[position] || posMap.center
  // Largeur pleine uniquement pour les positions centrées horizontalement —
  // les positions en coin restent compactes (sinon débordement d'écran).
  const isCenteredPos = ['center', 'top', 'bottom', 'upper-center', 'lower-center', 'above-nav'].includes(position)
  const widthRule = isCenteredPos ? `width:${bw}px;` : ''

  if (title || text) {
    html += `<div style="position:absolute;${bubbleStyle}max-width:${bw}px;${widthRule}background:#fff;
      border-radius:14px;box-shadow:0 8px 36px rgba(0,0,0,0.5);padding:16px 18px;pointer-events:none">
      <div style="font-weight:900;font-size:15px;color:#1a1a2e;margin-bottom:6px;text-align:center">${escapeTutPreview(title)}</div>
      <div style="font-size:13px;color:#555;line-height:1.5;text-align:center">${text || ''}</div>
      ${action ? `<div style="margin-top:10px;text-align:center">
        <span style="display:inline-block;background:#1A6B3C;color:#fff;
        font-size:12px;font-weight:800;padding:6px 14px;border-radius:20px">${escapeTutPreview(action)}</span>
      </div>` : ''}
    </div>`
  }

  dim.innerHTML = html
  document.body.appendChild(dim)

  if (!document.getElementById('tut-preview-anim-style')) {
    const st = document.createElement('style')
    st.id = 'tut-preview-anim-style'
    st.textContent = `
      @keyframes tutPreviewPulse { 0%{box-shadow:0 0 0 0 rgba(26,107,60,0.6);} 70%{box-shadow:0 0 0 12px rgba(26,107,60,0);} 100%{box-shadow:0 0 0 0 rgba(26,107,60,0);} }
      @keyframes tutPreviewGlow  { 0%,100%{box-shadow:0 0 8px 3px rgba(212,160,23,0.7);} 50%{box-shadow:0 0 20px 8px rgba(212,160,23,0.95);} }
    `
    document.head.appendChild(st)
  }
}

function escapeTutPreview(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
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
