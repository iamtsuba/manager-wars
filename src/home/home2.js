import { supabase } from '../lib/supabase.js'
import { isFeatureEnabled, showFeatureDisabledPopup } from '../lib/featureFlags.js'
import { showPendingPopup } from '../friends/friends.js'
import { stopBGM } from '../lib/sound.js'
import { getTier, getTierProgress, getSubTier } from '../ranked/glicko2.js'
import { claimPendingReward, showBoosterAnimation } from '../boosters/boosters.js'
import { renderPlayerCard } from '../components/player-card.js'

const APP_VERSION = (typeof __BUILD_TIME__ !== 'undefined' && __BUILD_TIME__)
  ? __BUILD_TIME__
  : new Date().toISOString().slice(0,16).replace('T','-').replace(':','h')

// ── Helpers ──────────────────────────────────────────────────────────────

const V2_TABS = [
  { key: 'home2',      route: 'home2',      label: 'ACCUEIL',  icon: 'nav-home.png' },
  { key: 'cards',      route: 'collection', label: 'CARTES',   icon: 'nav-collection.png' },
  { key: 'decks',      route: 'decks',      label: 'EQUIPES',  icon: 'nav-decks.png' },
  { key: 'boosters',   route: 'boosters',   label: 'BOUTIQUE', icon: 'nav-boosters.png' },
  { key: 'market',     route: 'market',     label: 'MERCATO',  icon: 'nav-market.png' },
]

// ── Bandeau persistant Home v2 ──────────────────────────────────────────
// Attaché directement à document.body (hors #page-content), il survit donc
// à navigate() qui ne remplace que #page-content. Masque le top-nav/bottom-nav
// globaux tant qu'il est présent, et se retire uniquement via "Revenir à v1"
// ou déconnexion. Ne touche jamais aux fichiers des autres pages.
// Affichage compact des crédits (paysage mobile)
function formatCreditsCompact(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1).replace('.', ',') + 'M'
  if (n >= 1000)    return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace('.', ',') + 'K'
  return n.toLocaleString('fr')
}

export function ensureV2Chrome(navigate, p, activeRouteKey, ICON, toast) {
  if (!document.getElementById('home2-chrome-style')) {
    const style = document.createElement('style')
    style.id = 'home2-chrome-style'
    style.textContent = `
      body:has(#home2-chrome-marker) .top-nav,
      body:has(#home2-chrome-marker) .bottom-nav { display: none !important; }
      body:has(#home2-chrome-marker) #page-content {
        padding-top: var(--v2-top-height, 100px) !important;
        padding-bottom: 0 !important;
      }
      /* Neutralise le padding-top/bottom que certaines pages (ex: Cards) réappliquent sur leur propre .page interne imbriqué */
      body:has(#home2-chrome-marker) #page-content .page { padding-top: 0 !important; padding-bottom: 0 !important; }

      /* ── Pendant un match ou l'écran "Choisis ton deck", le bandeau v2 doit totalement disparaître ── */
      body:has(#home2-chrome-marker) #page-content:has(.match-screen),
      body:has(#home2-chrome-marker) #page-content:has(#deck-select-screen) {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
      body:has(.match-screen) #home2-chrome-header,
      body:has(.match-screen) .home2-mobile-top,
      body:has(.match-screen) .home2-mobile-bottom,
      body:has(#deck-select-screen) #home2-chrome-header,
      body:has(#deck-select-screen) .home2-mobile-top,
      body:has(#deck-select-screen) .home2-mobile-bottom { display: none !important; }

      /* ══════════ Bandeau unique PC (≥1024px) : logo + onglets + credits + parametres ══════════ */
      .home2-chrome-header {
        display: flex; position: fixed; top: 0; left: 0; right: 0; z-index: 500;
        align-items: center; gap: 14px;
        background: var(--nav-bg); border-bottom: 1px solid var(--tile-border);
        padding: 14px 20px; box-sizing: border-box;
      }
      .home2-chrome-logo { flex-shrink: 0; display: flex; align-items: center; }
      .home2-chrome-logo img { height: 72px; width: auto; display: block; }
      .home2-chrome-tabs { display: flex; gap: 10px; flex: 1; min-width: 0; justify-content: center; overflow-x: auto; scrollbar-width: none; }
      .home2-chrome-tabs::-webkit-scrollbar { display: none; }
      .home2-chrome-tab {
        flex-shrink: 0; width: 132px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
        padding: 12px 8px; border-radius: 14px; cursor: pointer; text-decoration: none;
        background: rgba(255,255,255,0.05); border: 1px solid transparent;
        color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 900; letter-spacing: .4px;
        transition: background .15s, color .15s;
      }
      .home2-chrome-tab img { width: 30px; height: 30px; object-fit: contain; opacity: .75; }
      .home2-chrome-tab-emoji { font-size: 26px; line-height: 1; opacity: .9; }
      .home2-chrome-tab.active { background: var(--green); color: #fff; }
      .home2-chrome-tab.active img { opacity: 1; }
      .home2-chrome-tab:not(.active):hover { background: rgba(255,255,255,0.09); color: #fff; }
      .home2-chrome-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
      .home2-chrome-credits {
        display: flex; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        border-radius: 22px; padding: 8px 16px; font-size: 15px; font-weight: 800; color: #f2c94c;
        cursor: pointer; white-space: nowrap;
      }
      .home2-chrome-credits:hover { background: rgba(255,255,255,0.1); }
      .home2-chrome-settings-pill {
        display: flex; align-items: center; justify-content: center;
        width: 40px; height: 40px; border-radius: 50%;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        font-size: 17px; cursor: pointer; flex-shrink: 0;
      }
      .home2-chrome-settings-pill:hover { background: rgba(255,255,255,0.12); }
      .home2-chrome-fs-pill {
        display: flex; align-items: center; justify-content: center;
        width: 34px; height: 34px; border-radius: 50%;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        font-size: 16px; cursor: pointer; flex-shrink: 0;
      }
      .home2-chrome-fs-pill:hover { background: rgba(255,255,255,0.12); }

      /* ══════════ Mobile (<1024px) : DEUX bandeaux séparés, haut + bas ══════════ */
      .home2-mobile-top, .home2-mobile-bottom { display: none; }

      @media (max-width: 1023px) {
        .home2-chrome-header { display: none; } /* le bandeau unique PC disparaît totalement */

        body:has(#home2-chrome-marker) #page-content {
          padding-top: var(--v2-top-height, 56px) !important;
          padding-bottom: var(--v2-bottom-height, 76px) !important;
        }
        body:has(#home2-chrome-marker) #page-content:has(.match-screen),
        body:has(#home2-chrome-marker) #page-content:has(#deck-select-screen) {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        /* Bandeau du haut : logo à gauche, crédits + paramètres à droite */
        .home2-mobile-top {
          display: flex; position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          align-items: center; justify-content: space-between; gap: 10px;
          background: #05080a; border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 10px 14px; box-sizing: border-box;
        }
        .home2-mobile-top .home2-chrome-logo img { height: 46px; }
        .home2-mobile-top .home2-chrome-right { gap: 8px; }
        .home2-mobile-top .home2-chrome-credits { padding: 6px 12px; font-size: 13px; }
        .home2-mobile-top .home2-chrome-settings-pill {
          padding: 6px; width: 34px; height: 34px; border-radius: 50%; justify-content: center;
        }
        .home2-mobile-top .home2-chrome-settings-pill span.pill-label { display: none; }

        /* Bandeau du bas : les onglets, façon bottom-nav classique */
        .home2-mobile-bottom {
          display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 500;
          align-items: stretch; justify-content: space-around;
          background: #05080a; border-top: 1px solid rgba(255,255,255,0.1);
          padding: 9px 6px calc(9px + env(safe-area-inset-bottom, 0px)); box-sizing: border-box;
          overflow-x: auto; scrollbar-width: none;
        }
        .home2-mobile-bottom::-webkit-scrollbar { display: none; }
        .home2-mobile-bottom .home2-chrome-tab {
          width: auto; flex: 1; min-width: 0; padding: 8px 2px; border-radius: 12px; gap: 4px;
        }
        .home2-mobile-bottom .home2-chrome-tab img { width: 33px; height: 33px; }
        .home2-mobile-bottom .home2-chrome-tab[data-key="game"] { display: none; }
        .home2-mobile-bottom .home2-chrome-tab-emoji { font-size: 29px; }
        .home2-mobile-bottom .home2-chrome-tab { font-size: 9px; }
      }

      /* ══════════ Drapeau global "en match" (recherche, choix deck, choix GC, jeu...) ══════════
         Posé par hideV2ChromeNow() dès le clic sur un mode, retiré uniquement quand une vraie
         page Home/Game se recharge. Couvre TOUS les écrans du parcours de match, quel que soit
         leur balisage interne, sans avoir à détecter chaque écran individuellement. Placé en
         dernier pour l'emporter sur les règles précédentes (spécificité égale + !important). */
      body.v2-match-flow #home2-chrome-header,
      body.v2-match-flow .home2-mobile-top,
      body.v2-match-flow .home2-mobile-bottom { display: none !important; }
      body.v2-match-flow #page-content,
      body.v2-match-flow #page-content .page {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }

      /* ══════════ PAYSAGE MOBILE (hauteur < 500px) ══════════
         Bandeau gauche  : logo + settings + fullscreen
         Bandeau droit   : onglets de navigation
         Contenu central : tout l'espace entre les deux     */
      @media (max-height: 500px) and (orientation: landscape) {
        .home2-mobile-top, .home2-mobile-bottom { display: none !important; }

        body:has(#home2-chrome-marker) #page-content {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          padding-left: 64px !important;
          padding-right: 72px !important;
        }

        #home2-ls-left  { display: flex !important; }
        #home2-ls-right { display: flex !important; }
      }

      /* ── Bandeau gauche : logo + actions ── */
      #home2-ls-left {
        display: none;
        position: fixed; top: 0; left: 0; bottom: 0; width: 64px;
        z-index: 500; flex-direction: column; align-items: center;
        justify-content: space-between;
        background: #05080a;
        border-right: 1px solid rgba(255,255,255,0.1);
        padding: 10px 0 10px; box-sizing: border-box;
      }
      #home2-ls-left .ls-logo img { width: 42px; height: auto; }
      #home2-ls-left .ls-actions {
        display: flex; flex-direction: column; align-items: center; gap: 8px;
      }
      #home2-ls-left .ls-pill {
        display: flex; align-items: center; justify-content: center;
        width: 40px; height: 40px; border-radius: 50%;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        font-size: 16px; cursor: pointer;
      }
      #home2-ls-left .ls-pill:hover { background: rgba(255,255,255,0.13); }

      /* ── Bandeau droit : onglets ── */
      #home2-ls-right {
        display: none;
        position: fixed; top: 0; right: 0; bottom: 0; width: 72px;
        z-index: 500; flex-direction: column; align-items: center;
        justify-content: center; gap: 4px;
        background: #05080a;
        border-left: 1px solid rgba(255,255,255,0.1);
        padding: 8px 0; box-sizing: border-box;
      }
      #home2-ls-right .ls-tab {
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        width: 60px; padding: 7px 4px; border-radius: 12px; cursor: pointer;
        font-size: 8px; font-weight: 700; color: rgba(255,255,255,0.5);
        text-transform: uppercase; letter-spacing: 0.4px; gap: 3px;
        text-decoration: none;
      }
      #home2-ls-right .ls-tab img { width: 26px; height: 26px; object-fit: contain; opacity: .65; }
      #home2-ls-right .ls-tab.active { background: var(--green); color: #fff; }
      #home2-ls-right .ls-tab.active img { opacity: 1; }
      #home2-ls-right .ls-tab:not(.active):hover { background: rgba(255,255,255,0.08); }
    `
    document.head.appendChild(style)
  }

  const tabsHTML = V2_TABS.map(t => `
    <a class="home2-chrome-tab" data-route="${t.route}" data-key="${t.key}">
      ${t.icon ? `<img src="${ICON}${t.icon}">` : `<span class="home2-chrome-tab-emoji">${t.emoji}</span>`}${t.label}
    </a>`).join('')

  // ── Bandeau unique PC ──
  let header = document.getElementById('home2-chrome-header')
  if (!header) {
    header = document.createElement('div')
    header.id = 'home2-chrome-header'
    header.className = 'home2-chrome-header'
    header.innerHTML = `
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${ICON}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${tabsHTML}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(p.credits||0).toLocaleString('fr')}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `
    document.body.appendChild(header)
    header.querySelector('#home2-chrome-settings-btn').addEventListener('click', () => navigate('settings'))
    header.querySelector('#home2-chrome-credits').addEventListener('click', () => openCreditsAdOffer(p, toast))
  }

  // ── Bandeau mobile du haut : logo + crédits + paramètres ──
  let topBar = document.getElementById('home2-mobile-top')
  if (!topBar) {
    topBar = document.createElement('div')
    topBar.id = 'home2-mobile-top'
    topBar.className = 'home2-mobile-top'
    topBar.innerHTML = `
      <div class="home2-chrome-logo"><img src="${ICON}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(p.credits||0).toLocaleString('fr')}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
        <button class="home2-chrome-fs-pill" id="home2-mobtop-fs-btn" title="Plein écran">⛶</button>
      </div>
    `
    document.body.appendChild(topBar)
    topBar.querySelector('#home2-mobtop-settings-btn').addEventListener('click', () => navigate('settings'))
    topBar.querySelector('#home2-mobtop-credits').addEventListener('click', () => openCreditsAdOffer(p, toast))
    topBar.querySelector('#home2-mobtop-fs-btn').addEventListener('click', () => {
      const el = document.documentElement
      if (!document.fullscreenElement) {
        const req = el.requestFullscreen?.() || el.webkitRequestFullscreen?.()
        if (req) req.catch?.(() => {})
        document.getElementById('home2-mobtop-fs-btn').textContent = '✕'
      } else {
        const exit = document.exitFullscreen?.() || document.webkitExitFullscreen?.()
        if (exit) exit.catch?.(() => {})
        document.getElementById('home2-mobtop-fs-btn').textContent = '⛶'
      }
    })
    document.addEventListener('fullscreenchange', () => {
      const btn = document.getElementById('home2-mobtop-fs-btn')
      if (btn) btn.textContent = document.fullscreenElement ? '✕' : '⛶'
    })
    document.addEventListener('webkitfullscreenchange', () => {
      const btn = document.getElementById('home2-mobtop-fs-btn')
      if (btn) btn.textContent = document.fullscreenElement ? '✕' : '⛶'
    })
  }

  // ── Bandeau mobile du bas : onglets ──
  let bottomBar = document.getElementById('home2-mobile-bottom')
  if (!bottomBar) {
    bottomBar = document.createElement('div')
    bottomBar.id = 'home2-mobile-bottom'
    bottomBar.className = 'home2-mobile-bottom'
    bottomBar.innerHTML = tabsHTML
    document.body.appendChild(bottomBar)
  }

  // ── Bandeaux paysage mobile (gauche + droit) ──
  if (!document.getElementById('home2-ls-left')) {
    // Bandeau gauche : logo + crédits + settings + fullscreen
    const lsLeft = document.createElement('div')
    lsLeft.id = 'home2-ls-left'
    lsLeft.innerHTML = `
      <div class="ls-logo"><img src="${ICON}logo.png" alt="MW"></div>
      <div class="ls-actions">
        <div class="ls-pill" id="home2-ls-credits" title="Crédits" style="font-size:10px;font-weight:900;color:#f2c94c;flex-direction:column;gap:1px">💰<span id="home2-ls-credits-val">${formatCreditsCompact(p.credits||0)}</span></div>
        <div class="ls-pill" id="home2-ls-settings" title="Paramètres">⚙️</div>
        <div class="ls-pill" id="home2-ls-fs" title="Plein écran">⛶</div>
      </div>
    `
    document.body.appendChild(lsLeft)
    lsLeft.querySelector('#home2-ls-settings').addEventListener('click', () => navigate('settings'))
    lsLeft.querySelector('#home2-ls-credits').addEventListener('click', () => openCreditsAdOffer(p, toast))
    lsLeft.querySelector('#home2-ls-fs').addEventListener('click', () => {
      const el = document.documentElement
      if (!document.fullscreenElement) {
        const req = el.requestFullscreen?.() || el.webkitRequestFullscreen?.()
        if (req) req.catch?.(() => {})
      } else {
        const exit = document.exitFullscreen?.() || document.webkitExitFullscreen?.()
        if (exit) exit.catch?.(() => {})
      }
    })
    document.addEventListener('fullscreenchange', () => {
      const btn = document.getElementById('home2-ls-fs')
      if (btn) btn.textContent = document.fullscreenElement ? '✕' : '⛶'
    })
    document.addEventListener('webkitfullscreenchange', () => {
      const btn = document.getElementById('home2-ls-fs')
      if (btn) btn.textContent = document.fullscreenElement ? '✕' : '⛶'
    })

    // Bandeau droit : onglets de navigation
    const lsRight = document.createElement('div')
    lsRight.id = 'home2-ls-right'
    lsRight.innerHTML = V2_TABS.map(t => `
      <a class="ls-tab home2-chrome-tab" data-route="${t.route}" data-key="${t.key}">
        ${t.icon ? `<img src="${ICON}${t.icon}">` : `<span style="font-size:22px">${t.emoji}</span>`}
        ${t.label}
      </a>`).join('')
    document.body.appendChild(lsRight)
  }

  // Un seul gestionnaire de clic pour tous les onglets (PC + mobile)
  document.querySelectorAll('.home2-chrome-tab').forEach(tab => {
    if (tab._v2Bound) return
    tab._v2Bound = true
    tab.addEventListener('click', () => {
      document.querySelectorAll('.home2-chrome-tab').forEach(t => t.classList.remove('active'))
      document.querySelectorAll(`.home2-chrome-tab[data-key="${tab.dataset.key}"]`).forEach(t => t.classList.add('active'))
      navigate(tab.dataset.route)
    })
  })

  // Met à jour l'onglet actif + le solde de crédits partout
  document.querySelectorAll('.home2-chrome-tab').forEach(t => t.classList.toggle('active', t.dataset.key === activeRouteKey))
  const credAmount = `💰 ${(p.credits||0).toLocaleString('fr')}`
  document.getElementById('home2-chrome-credits') && (document.getElementById('home2-chrome-credits').textContent = credAmount)
  document.getElementById('home2-mobtop-credits') && (document.getElementById('home2-mobtop-credits').textContent = credAmount)
  document.getElementById('home2-ls-credits') && (document.getElementById('home2-ls-credits').textContent = credAmount)
  const lsCredVal = document.getElementById('home2-ls-credits-val')
  if (lsCredVal) lsCredVal.textContent = formatCreditsCompact(p.credits||0)

  // Réaffiche le bandeau (annule un éventuel hideV2ChromeNow() laissé par une navigation précédente vers un match)
  document.body.classList.remove('v2-match-flow')
  header.style.display = ''
  topBar.style.display = ''
  bottomBar.style.display = ''
  const pcReset = document.getElementById('page-content')
  if (pcReset) { pcReset.style.removeProperty('padding-top'); pcReset.style.removeProperty('padding-bottom') }

  // Recalcule les hauteurs réelles pour compenser le padding du contenu
  // (double rAF : garantit que le layout est bien posé avant de mesurer,
  // évite une mesure prématurée à 0 ou incorrecte qui resterait figée)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const isMobile = window.innerWidth < 1024
      document.documentElement.style.setProperty('--v2-top-height', (isMobile ? topBar.offsetHeight : header.offsetHeight) + 'px')
      document.documentElement.style.setProperty('--v2-bottom-height', bottomBar.offsetHeight + 'px')
    })
  })
}

function teardownV2Chrome() {
  document.getElementById('home2-chrome-header')?.remove()
  document.getElementById('home2-mobile-top')?.remove()
  document.getElementById('home2-mobile-bottom')?.remove()
  document.getElementById('home2-chrome-style')?.remove()
}

// Masque le bandeau instantanément au clic (avant même la navigation), pour éviter
// tout flash pendant le chargement du match. Réaffiché automatiquement par
// ensureV2Chrome() dès qu'une vraie page v2 (hors match) se rend à nouveau.
// Met à jour instantanément le solde affiché dans le bandeau persistant, sans
// attendre qu'une page v2 se recharge (utile après l'ouverture d'un booster, etc.)
// ── Popup "Regarder des pubs pour des crédits" ──────────────────────────
const CREDITS_AD_OFFERS = [
  { ads: 1, seconds: 5,  credits: 4500 },
  { ads: 2, seconds: 10, credits: 9500 },
  { ads: 3, seconds: 15, credits: 15000 },
]

export async function openCreditsAdOffer(profile, toast) {
  if (!(await isFeatureEnabled('pub_mode'))) {
    const credits = (profile?.credits || 0).toLocaleString('fr')
    const ov = document.createElement('div')
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px'
    ov.innerHTML = `
      <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px 24px;max-width:360px;width:100%;color:#fff;text-align:center">
        <div style="font-size:36px;margin-bottom:12px">🚧</div>
        <div style="font-size:17px;font-weight:900;margin-bottom:8px">Module en cours de développement</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:20px">Cette fonctionnalité sera disponible prochainement.</div>
        <div style="background:rgba(212,160,23,0.1);border:1.5px solid rgba(212,160,23,0.35);border-radius:12px;padding:14px;margin-bottom:20px">
          <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Ton solde actuel</div>
          <div style="font-size:26px;font-weight:900;color:#D4A017">💰 ${credits} cr.</div>
        </div>
        <button id="cred-dev-close" style="width:100%;padding:11px;border-radius:10px;border:1px solid rgba(255,255,255,0.2);background:none;color:rgba(255,255,255,0.7);cursor:pointer;font-family:inherit;font-size:14px">Fermer</button>
      </div>`
    document.body.appendChild(ov)
    ov.querySelector('#cred-dev-close').addEventListener('click', () => ov.remove())
    ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
    return
  }

  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px'
  overlay.innerHTML = `
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${CREDITS_AD_OFFERS.map(o => `
          <button class="credits-ad-offer-btn" data-ads="${o.ads}" data-seconds="${o.seconds}" data-credits="${o.credits}"
            style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-radius:12px;border:1.5px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.08);cursor:pointer;color:#fff;font-family:inherit">
            <div style="text-align:left">
              <div style="font-weight:700;font-size:14px">${o.ads} pub${o.ads>1?'s':''} (${o.seconds}s)</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.5)">Regarde ${o.ads} publicité${o.ads>1?'s':''}</div>
            </div>
            <div style="font-weight:900;color:#D4A017;font-size:16px;white-space:nowrap">+${o.credits.toLocaleString('fr')} cr.</div>
          </button>`).join('')}
      </div>
      <button id="credits-ad-cancel" style="width:100%;margin-top:16px;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.2);background:none;color:rgba(255,255,255,0.7);cursor:pointer;font-family:inherit">Annuler</button>
    </div>`
  document.body.appendChild(overlay)

  overlay.querySelector('#credits-ad-cancel').addEventListener('click', () => overlay.remove())
  overlay.querySelectorAll('.credits-ad-offer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.remove()
      startCreditsAdFlow(
        parseInt(btn.dataset.ads), 5, parseInt(btn.dataset.credits),
        profile, toast
      )
    })
  })
}

function startCreditsAdFlow(totalAds, secondsPerAd, totalCredits, profile, toast) {
  let currentAd = 1

  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px'
  document.body.appendChild(overlay)

  function renderAdStep() {
    overlay.innerHTML = `
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${currentAd}/${totalAds}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${secondsPerAd}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) { console.warn('[AdSense]', e) }

    let remaining = secondsPerAd
    const interval = setInterval(() => {
      remaining--
      const cd = overlay.querySelector('#credits-ad-cd')
      if (cd) cd.textContent = remaining
      if (remaining <= 0) {
        clearInterval(interval)
        onAdComplete()
      }
    }, 1000)
  }

  function onAdComplete() {
    const status = overlay.querySelector('#credits-ad-status')
    const zone = overlay.querySelector('#credits-ad-next-zone')
    if (currentAd < totalAds) {
      if (status) status.textContent = 'Publicité terminée ✅'
      if (zone) zone.innerHTML = `
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${currentAd}/${totalAds}) →
        </button>`
      overlay.querySelector('#credits-ad-next-btn')?.addEventListener('click', () => {
        currentAd++
        renderAdStep()
      })
    } else {
      if (status) status.textContent = 'Toutes les publicités ont été vues ✅'
      if (zone) zone.innerHTML = `
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${totalCredits.toLocaleString('fr')} crédits
        </button>`
      overlay.querySelector('#credits-ad-claim-btn')?.addEventListener('click', async () => {
        const btn = overlay.querySelector('#credits-ad-claim-btn')
        btn.disabled = true; btn.textContent = '⏳...'
        const newCredits = (profile.credits || 0) + totalCredits
        const { error } = await supabase.from('users').update({ credits: newCredits }).eq('id', profile.id)
        if (error) { toast(error.message, 'error'); btn.disabled = false; return }
        profile.credits = newCredits
        syncV2Credits(newCredits)
        toast(`+${totalCredits.toLocaleString('fr')} crédits ✅`, 'success')
        overlay.remove()
      })
    }
  }

  renderAdStep()
}

// ── Popup "Regarder des pubs pour des crédits" (fin) ────────────────────

// ── Popup de réclamation des récompenses en attente ─────────────────────
async function openPendingRewardsPopup(state, toast, navigate) {
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px'
  document.body.appendChild(overlay)

  async function render() {
    const { data: rewards } = await supabase
      .from('pending_rewards')
      .select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`)
      .eq('user_id', state.profile.id).eq('claimed', false)
      .order('created_at', { ascending: true })

    if (!rewards?.length) {
      overlay.remove()
      // Rafraîchit la bannière (disparaît puisqu'il n'y a plus rien à réclamer)
      const banner = document.getElementById('pending-rewards-banner')
      if (banner) banner.remove()
      return
    }

    const rewardVisual = (r) => {
      if (r.reward_type === 'credits') {
        return `<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>`
      }
      if (r.reward_type === 'card' && r.player) {
        return `<div style="flex-shrink:0">${renderPlayerCard(r.player, { width: 56, context: 'accueil' })}</div>`
      }
      if (r.reward_type === 'booster') {
        const imgName = r.booster?.image_url || 'booster-players.png'
        return `<img src="${import.meta.env.BASE_URL}icons/${imgName}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`
      }
      return `<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>`
    }

    const rewardLabel = (r) => {
      if (r.reward_type === 'credits') return `${(r.credits_amount||0).toLocaleString('fr')} crédits`
      if (r.reward_type === 'card')    return `${r.player?.firstname||''} ${r.player?.surname_real||''}`.trim() || 'Carte joueur'
      if (r.reward_type === 'booster') return r.booster?.name || 'Booster'
      return 'Récompense'
    }

    overlay.innerHTML = `
      <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:420px;width:100%;max-height:80vh;overflow-y:auto;color:#fff">
        <div style="font-size:18px;font-weight:900;margin-bottom:4px">🎁 Tes récompenses</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:16px">${rewards.length} récompense${rewards.length>1?'s':''} à récupérer</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${rewards.map(r => `
            <div style="display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              ${rewardVisual(r)}
              <div style="flex:1;min-width:0">
                <div style="font-weight:700;font-size:13px">${rewardLabel(r)}</div>
                ${r.tier_label ? `<div style="font-size:10px;color:rgba(255,255,255,0.4)">${r.tier_label}</div>` : ''}
              </div>
              <button class="claim-reward-btn btn btn-primary btn-sm" data-id="${r.id}" style="white-space:nowrap">Récupérer</button>
            </div>`
          ).join('')}
        </div>
        <button id="pending-rewards-close" class="btn btn-ghost" style="width:100%;margin-top:16px">Fermer</button>
      </div>`

    overlay.querySelector('#pending-rewards-close')?.addEventListener('click', () => overlay.remove())

    overlay.querySelectorAll('.claim-reward-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const reward = rewards.find(r => r.id === btn.dataset.id)
        btn.disabled = true; btn.textContent = '⏳...'
        try {
          const result = await claimPendingReward(reward, state.profile, toast, null)
          await supabase.from('pending_rewards').update({ claimed: true, claimed_at: new Date().toISOString() }).eq('id', reward.id)

          if (result.type === 'credits') {
            syncV2Credits(state.profile.credits)
            toast(`+${result.amount.toLocaleString('fr')} crédits ✅`, 'success')
          } else if (result.type === 'card') {
            toast(`Carte reçue : ${result.player?.firstname||''} ${result.player?.surname_real||''} ✅`, 'success')
          } else if (result.type === 'booster') {
            overlay.remove()
            showBoosterAnimation(result.cards, result.boosterUI, navigate, () => {
              openPendingRewardsPopup(state, toast, navigate)
            })
            return
          }
        } catch (e) {
          toast(e.message || 'Erreur lors de la réclamation', 'error')
          btn.disabled = false; btn.textContent = 'Récupérer'
          return
        }
        render() // rafraîchit la liste (retire celle réclamée)
      })
    })
  }

  render()
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove() })
}

export function syncV2Credits(amount) {
  const label = `💰 ${(amount||0).toLocaleString('fr')}`
  const el1 = document.getElementById('home2-chrome-credits')
  const el2 = document.getElementById('home2-mobtop-credits')
  const el3 = document.getElementById('home2-ls-credits')
  if (el1) el1.textContent = label
  if (el2) el2.textContent = label
  if (el3) el3.textContent = label
  const el3val = document.getElementById('home2-ls-credits-val')
  if (el3val) el3val.textContent = formatCreditsCompact(amount||0)
}

export function hideV2ChromeNow() {
  document.body.classList.add('v2-match-flow')
  const h = document.getElementById('home2-chrome-header'); if (h) h.style.display = 'none'
  const t = document.getElementById('home2-mobile-top');    if (t) t.style.display = 'none'
  const b = document.getElementById('home2-mobile-bottom'); if (b) b.style.display = 'none'
  // Libère aussi l'espace réservé (sinon un vide subsiste tant que .match-screen n'existe pas encore,
  // ex: pendant "Choisis ton deck" avant que l'écran de match lui-même ne se monte)
  const pc = document.getElementById('page-content')
  if (pc) {
    pc.style.setProperty('padding-top', '0', 'important')
    pc.style.setProperty('padding-bottom', '0', 'important')
  }
}

function timeAgo(iso) {
  if (!iso) return ''
  const diffMs = Date.now() - new Date(iso).getTime()
  const min = Math.floor(diffMs / 60000)
  if (min < 1)   return 'à l\'instant'
  if (min < 60)  return `il y a ${min}min`
  const h = Math.floor(min / 60)
  if (h < 24)    return `il y a ${h}h`
  const j = Math.floor(h / 24)
  if (j < 7)     return `il y a ${j}j`
  return new Date(iso).toLocaleDateString('fr-FR', { day:'2-digit', month:'short' })
}

// getSubTier centralisée dans ranked/glicko2.js (source unique)

async function fetchTopRanking(myId) {
  const { data: top } = await supabase
    .from('users')
    .select('id,pseudo,club_name,mmr')
    .order('mmr', { ascending: false })
    .limit(5)

  const list = top || []
  const iAmInTop = list.some(u => u.id === myId)
  let myPosition = null
  if (!iAmInTop) {
    const { data: meRow } = await supabase.from('users').select('mmr').eq('id', myId).single()
    if (meRow) {
      const { count } = await supabase
        .from('users')
        .select('id', { count: 'exact', head: true })
        .gt('mmr', meRow.mmr || 0)
      myPosition = (count || 0) + 1
    }
  }
  return { list, iAmInTop, myPosition }
}

async function fetchNews(limit = 4) {
  const { data } = await supabase
    .from('patch_notes')
    .select('id,title,description,image_url,published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit)
  return data || []
}

async function fetchPromoBoosters() {
  const { data } = await supabase
    .from('booster_configs')
    .select('id,name,image_url,price_type,price_credits,card_count')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
    .limit(5)
  return data || []
}

// Popup journal complet — duplication locale volontaire (ne touche pas à app.js)
async function showFullJournalPopup() {
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
        <button id="journal-close-v2" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${list || '<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`

  document.body.appendChild(ov)
  ov.querySelector('#journal-close-v2').addEventListener('click', () => ov.remove())
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

// ── Popup BI Profil : classement par saison + meilleures cartes ──────────
const JOB_NOTE_KEY = { GK:'note_g', DEF:'note_d', MIL:'note_m', ATT:'note_a' }
function noteForPlayer(p) {
  const key = JOB_NOTE_KEY[p?.job] || 'note_m'
  return (Number(p?.[key]) || 0) + (Number(p?._evolution_bonus) || 0)
}

function biCardBlock(title, player, subLabel) {
  if (!player) {
    return `<div class="bi-card-block">
      <div class="bi-card-title">${title}</div>
      <div class="bi-card-empty">Aucune donnée pour l'instant</div>
    </div>`
  }
  return `<div class="bi-card-block">
    <div class="bi-card-title">${title}</div>
    <div class="bi-card-visual">${renderPlayerCard(player, { width: 130, context: 'accueil' })}</div>
    ${subLabel ? `<div class="bi-card-sub">${subLabel}</div>` : ''}
  </div>`
}

async function openProfileBIModal(state, openModal, closeModal) {
  const uid = state.profile.id

  openModal('📊 Mon profil', `<div style="padding:30px;text-align:center;color:var(--gray-600)">⏳ Chargement des statistiques...</div>`, `<button class="btn btn-ghost" id="bi-close">Fermer</button>`)
  document.getElementById('bi-close')?.addEventListener('click', closeModal)

  const PLAYER_SELECT = `id, firstname, surname_real, country_code, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)`

  const [
    { data: seasonHistory },
    { data: myPlayerCards },
    { data: boughtRows },
    { data: soldRows },
  ] = await Promise.all([
    supabase
      .from('ranked_seasons_history')
      .select(`final_rank_position, final_mmr, final_rank_tier, ranked_wins, ranked_losses, ranked_draws, logged_at, ranked_seasons(name)`)
      .eq('user_id', uid)
      .order('logged_at', { ascending: false }),
    supabase
      .from('cards')
      .select(`evolution_bonus, player:players(${PLAYER_SELECT})`)
      .eq('owner_id', uid)
      .eq('card_type', 'player'),
    supabase
      .from('market_listings')
      .select(`price, sold_at, card:cards(evolution_bonus, player:players(${PLAYER_SELECT}))`)
      .eq('buyer_id', uid)
      .eq('status', 'sold')
      .order('price', { ascending: false })
      .limit(1),
    supabase
      .from('market_listings')
      .select(`price, sold_at, card:cards(evolution_bonus, player:players(${PLAYER_SELECT}))`)
      .eq('seller_id', uid)
      .eq('status', 'sold')
      .order('price', { ascending: false })
      .limit(1),
  ])

  // ── Meilleure carte (note la plus haute) ──
  let bestPlayer = null, bestNote = -1
  ;(myPlayerCards || []).forEach(c => {
    if (!c.player) return
    const p = { ...c.player, _evolution_bonus: c.evolution_bonus || 0 }
    const n = noteForPlayer(p)
    if (n > bestNote) { bestNote = n; bestPlayer = p }
  })

  // ── Joueur acheté le plus cher ──
  const boughtRow = (boughtRows || [])[0]
  const boughtPlayer = boughtRow?.card?.player
    ? { ...boughtRow.card.player, _evolution_bonus: boughtRow.card.evolution_bonus || 0 }
    : null

  // ── Joueur vendu le plus cher ──
  const soldRow = (soldRows || [])[0]
  const soldPlayer = soldRow?.card?.player
    ? { ...soldRow.card.player, _evolution_bonus: soldRow.card.evolution_bonus || 0 }
    : null

  // ── Classement par saison ──
  const TIER_EMOJI = { bronze:'🥉', silver:'🥈', gold:'🥇', platinum:'💎', diamond:'🔷', master:'👑' }
  const seasonRowsHTML = (seasonHistory && seasonHistory.length)
    ? seasonHistory.map(s => `
      <div class="bi-season-row">
        <div class="bi-season-name">${s.ranked_seasons?.name || 'Saison'}</div>
        <div class="bi-season-pos">#${s.final_rank_position ?? '—'}</div>
        <div class="bi-season-tier">${TIER_EMOJI[s.final_rank_tier] || ''} ${s.final_rank_tier || ''}</div>
        <div class="bi-season-record">${s.ranked_wins||0}V ${s.ranked_draws||0}N ${s.ranked_losses||0}D</div>
      </div>`).join('')
    : `<div class="bi-card-empty">Aucune saison archivée pour l'instant</div>`

  const bodyHTML = `
  <style>
    .bi-section { margin-bottom: 18px; }
    .bi-section-title { font-size: 13px; font-weight: 700; color: var(--tile-fg-dim, #666); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
    .bi-season-row { display:flex; align-items:center; gap:10px; padding:8px 10px; background: rgba(0,0,0,0.03); border-radius:8px; margin-bottom:6px; font-size:13px; }
    .bi-season-name { flex:1; font-weight:700; }
    .bi-season-pos { font-weight:900; color:#1A6B3C; }
    .bi-season-tier { min-width:80px; }
    .bi-season-record { color:#888; font-size:11px; }
    .bi-cards-grid { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; }
    .bi-card-block { flex:1; min-width:140px; text-align:center; }
    .bi-card-title { font-size:12px; font-weight:700; margin-bottom:8px; color: var(--tile-fg-dim, #666); }
    .bi-card-visual { display:flex; justify-content:center; }
    .bi-card-sub { margin-top:8px; font-size:14px; font-weight:900; color:#D4A017; }
    .bi-card-empty { font-size:12px; color:#999; padding:20px 0; }
  </style>

  <div class="bi-section">
    <div class="bi-section-title">📊 Classement par saison</div>
    ${seasonRowsHTML}
  </div>

  <div class="bi-section">
    <div class="bi-section-title">⭐ Ma meilleure carte</div>
    <div class="bi-cards-grid">
      ${biCardBlock('Note la plus haute', bestPlayer, bestPlayer ? `Note ${bestNote}` : null)}
    </div>
  </div>

  <div class="bi-section">
    <div class="bi-section-title">🛒 Records du marché</div>
    <div class="bi-cards-grid">
      ${biCardBlock('💰 Achat le plus cher', boughtPlayer, boughtRow ? `${boughtRow.price.toLocaleString('fr')} cr.` : null)}
      ${biCardBlock('💸 Vente la plus chère', soldPlayer, soldRow ? `${soldRow.price.toLocaleString('fr')} cr.` : null)}
    </div>
  </div>
  `

  openModal('📊 Mon profil', bodyHTML, `<button class="btn btn-ghost" id="bi-close">Fermer</button>`)
  document.getElementById('bi-close')?.addEventListener('click', closeModal)
}

export async function renderHome2(container, { state, navigate, toast, openModal, closeModal }) {
  const p = state.profile
  if (!p) return

  const ICON = import.meta.env.BASE_URL + 'icons/'
  ensureV2Chrome(navigate, p, 'home2', ICON, toast)
  const mmr    = p.mmr ?? 450
  const tier   = getTier(mmr)
  const sub    = getSubTier(mmr, tier)
  const prog   = getTierProgress(mmr)
  const nextRP = isFinite(tier.max) ? tier.max + 1 : null

  const [{ list: topUsers, iAmInTop, myPosition }, news, promoBoosters, { count: pendingRewardsCount }] = await Promise.all([
    fetchTopRanking(p.id),
    fetchNews(5),
    fetchPromoBoosters(),
    supabase.from('pending_rewards').select('*', { count: 'exact', head: true }).eq('user_id', p.id).eq('claimed', false)
  ])

  // Protection anti-race condition : si le joueur (ou une navigation
  // programmatique, ex. le tutoriel) a déjà changé de page pendant que ces
  // requêtes étaient en cours, on abandonne — sinon ce rendu périmé
  // écraserait le contenu de la page réellement affichée entre-temps.
  if (state.page !== 'home' && state.page !== 'home2') return

  const rankRowHTML = (u, i) => {
    const uTier = getTier(u.mmr ?? 0)
    const uSub  = getSubTier(u.mmr ?? 0, uTier)
    return `
    <div class="rk-row ${u.id === p.id ? 'rk-row-me' : ''}">
      <div class="rk-pos ${i < 3 ? 'rk-pos-top' + (i+1) : ''}">${i < 3 ? ['🥇','🥈','🥉'][i] : i+1}</div>
      <div class="rk-name ${u.id === p.id ? 'rk-name-me' : ''}">${u.pseudo}</div>
      <div class="rk-rp-block">
        <div class="rk-rp-tier" style="color:${uTier.color}">${uTier.emoji} ${uTier.label.toUpperCase()}${uSub ? ' ' + uSub : ''}</div>
        <div class="rk-rp">${(u.mmr ?? 0).toLocaleString('fr')} MMR</div>
      </div>
    </div>`
  }

  const newsItemHTML = (n) => `
    <div class="news-item">
      ${n.image_url ? `<img src="${n.image_url}" class="news-thumb" onerror="this.style.display='none'">` : `<div class="news-thumb news-thumb-fallback">📰</div>`}
      <div class="news-body">
        <div class="news-title">${n.title}</div>
        <div class="news-desc">${n.description || ''}</div>
        <div class="news-time">${timeAgo(n.published_at)}</div>
      </div>
    </div>`

  let promoIdx = 0
  const promoSlideHTML = (b) => `
    <div class="promo-icon-wrap">
      <img src="${ICON}${b.image_url || 'nav-boosters.png'}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${b.name}</div>
      <div class="promo-desc">${b.card_count || 5} cartes · ${b.price_type === 'pub' ? 'Pub gratuite' : (b.price_credits||0).toLocaleString('fr') + ' cr.'}</div>
    </div>`

  container.innerHTML = `
  <style>
    .home-dark {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 0 16px 80px; box-sizing: border-box; overflow-y: auto;
    }
    .home-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; gap: 18px; }
    /* Les bannières (ami/invitation/match en cours) sont vides tant qu'aucune n'est active :
       il ne faut alors PAS qu'elles comptent dans le gap flex de .home-inner. */
    #friend-requests-banner:empty, #match-invite-banner:empty, #ongoing-match-banner:empty { display: none; }

    /* ── Profil ── */
    .profile-row { display: flex; align-items: center; gap: 16px; }
    .profile-badge {
      width: 62px; height: 62px; border-radius: 16px; flex-shrink: 0;
      background: linear-gradient(135deg, ${p.club_color1}cc, ${p.club_color2}88);
      border: 2px solid ${p.club_color2};
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; font-size: 26px; color: #fff;
    }
    /* Mobile par défaut : icône de rang. PC (≥1024px, cf media query plus bas) : numéro de niveau. */
    .badge-level { display: none; }
    .badge-rank-icon { display: flex; font-size: 30px; }
    .profile-info { flex: 1; min-width: 0; }
    .profile-info .name-row { display:flex; align-items:center; gap:6px; }
    .profile-info h3 { margin: 0; font-size: 22px; font-weight: 900; color: var(--tile-fg-on-page); }
    .profile-edit-btn { background:none; border:none; cursor:pointer; font-size:15px; opacity:.55; padding:0; color: var(--tile-fg-dim); }
    .profile-edit-btn:hover { opacity:1; }
    .profile-info .club { display:flex; align-items:center; gap:6px; font-size: 13px; color: var(--tile-fg-dim); margin-top: 4px; letter-spacing:.3px; }
    .profile-info .club .dot { width:7px; height:7px; border-radius:50%; background: var(--green-light); flex-shrink:0; }
    .profile-settings-btn {
      width: 42px; height: 42px; border-radius: 50%; border: none;
      background: rgba(255,255,255,0.08); cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; font-size: 19px; color: var(--tile-fg-dim);
    }
    .profile-settings-btn:hover { background: rgba(255,255,255,0.15); }

    /* ── Rank card ── */
    .rank-card {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 18px;
      padding: 20px 22px; display: flex; flex-direction: column; gap: 12px;
    }
    .rank-top-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
    .rank-tier-block .rank-label { font-size: 12px; font-weight: 900; color: var(--tile-fg-dim); letter-spacing: 1.5px; }
    .rank-tier-block .rank-tier-value { font-size: 28px; font-weight: 900; color: ${tier.color}; margin-top: 3px; }
    .rank-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .rank-rp-label { font-size: 14px; color: var(--tile-fg-dim); white-space: nowrap; }
    .rank-inline-link {
      display: inline-flex; align-items: center; gap: 5px;
      background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 13px; font-weight: 700;
      border-radius: 10px; padding: 6px 12px; cursor: pointer; white-space: nowrap;
    }
    .rank-inline-link:hover { filter: brightness(1.2); }
    .rank-progress-track { width: 100%; height: 10px; border-radius: 6px; background: rgba(255,255,255,0.08); overflow: hidden; }
    .rank-progress-fill { height: 100%; border-radius: 6px; background: linear-gradient(90deg, ${tier.color}99, ${tier.color}); transition: width .4s; }

    .profile-view-btn {
      display: none; width: 100%; align-items:center; justify-content:center; gap:8px;
      background: rgba(255,255,255,0.05); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 15px; font-weight: 700; border-radius: 12px;
      padding: 14px; cursor: pointer;
    }
    .profile-view-btn:hover { filter: brightness(1.15); }

    /* ── Classement mini-widget (PC uniquement) ── */
    .ranking-widget {
      display: none;
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 18px;
      padding: 20px 22px; flex-direction: column; gap: 8px;
    }
    .ranking-widget-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; }
    .ranking-widget-header h4 { margin:0; font-size:15px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:1px; }
    .ranking-widget-header a { font-size: 13px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .rk-row { display:flex; align-items:center; gap:12px; padding:10px 0; }
    .rk-row-me { background: rgba(26,107,60,0.18); border-radius: 8px; margin: 0 -8px; padding: 6px 8px; }
    .rk-pos {
      width: 32px; height: 32px; border-radius: 50%; flex-shrink:0;
      background: rgba(255,255,255,0.06); color: var(--tile-fg-dim);
      display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:900;
    }
    .rk-pos-top1 { background:#D4A017; color:#000; }
    .rk-pos-top2 { background:#a0a0a0; color:#000; }
    .rk-pos-top3 { background:#cd7f32; color:#000; }
    .rk-name { flex:1; min-width:0; font-size:15px; font-weight:700; color: var(--tile-fg-on-page); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .rk-name-me { color: var(--green-light); }
    .rk-rp-block { text-align:right; flex-shrink:0; }
    .rk-rp-tier { font-size:12px; font-weight:900; letter-spacing:0.3px; white-space:nowrap; }
    .rk-rp { font-size: 11px; font-weight:600; color: var(--tile-fg-dim); flex-shrink:0; margin-top:1px; }
    .ranking-widget-cta {
      display:flex; align-items:center; justify-content:center; gap:8px;
      width:100%; margin-top:8px; background: rgba(255,255,255,0.05); border:1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size:15px; font-weight:700; border-radius:12px; padding:13px; cursor:pointer;
    }
    .ranking-widget-cta:hover { filter: brightness(1.15); }

    /* ── Section Jouer ── */
    .play-section-header { display:flex; align-items:center; justify-content:center; gap:10px; margin: 2px 0; }
    .play-section-header h4 { margin:0; font-size:18px; font-weight:900; letter-spacing:4px; color: var(--tile-fg-on-page); }
    .play-section-header .slashes { color: var(--green-light); font-weight:900; font-size:20px; letter-spacing:1px; }

    .play-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; }
    .play-tile {
      grid-column: span 2;
      border-radius: 18px; background: var(--tile-bg); border: 1px solid var(--tile-border);
      cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 12px;
      transition: transform .15s, filter .15s; backdrop-filter: blur(4px); text-align:center; gap:4px;
      min-height: 150px;
    }
    .play-tile:hover { filter: brightness(1.15); }
    .play-tile:active { transform: scale(.96); }
    .play-tile img.tile-icon { height: 68px; object-fit:contain; }
    .play-tile .tile-label { font-size: 16px; font-weight: 900; color: var(--tile-fg-on-page); letter-spacing:.5px; margin-top:4px; }
    .play-tile .tile-desc { display:none; font-size: 12px; color: var(--tile-fg-dim); line-height:1.4; margin-top:3px; }

    .play-tile-big { grid-column: span 3; padding: 30px 16px; min-height: 190px; }
    .play-tile-big img.tile-icon { height: 84px; }
    .play-tile-big .tile-label { font-size: 19px; }
    .tile-mini-league { background: linear-gradient(135deg, #4a3a05 0%, #8a6a10 50%, #D4A017 100%); border: 1.5px solid rgba(212,160,23,0.6); box-shadow: 0 4px 20px rgba(212,160,23,0.25); }
    .tile-ranked { background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%); border: 1.5px solid rgba(122,40,184,0.6); box-shadow: 0 4px 20px rgba(122,40,184,0.3); }

    /* ── Bannière promo booster ── */
    .promo-banner {
      background: linear-gradient(135deg, #14261a 0%, #0d1a12 100%);
      border: 1px solid rgba(212,160,23,0.3); border-radius: 18px;
      padding: 24px; display:flex; align-items:center; gap:18px; position: relative; overflow:hidden;
      min-height: 100px;
    }
    .promo-icon-wrap { width:76px; height:76px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:rgba(212,160,23,0.12); border-radius:14px; border:1px solid rgba(212,160,23,0.3); }
    .promo-icon { max-width:70%; max-height:70%; object-fit:contain; }
    .promo-info { flex:1; min-width:0; }
    .promo-kicker { font-size:12px; font-weight:900; color:#D4A017; letter-spacing:1px; }
    .promo-title { font-size:21px; font-weight:900; color:#fff; margin-top:3px; }
    .promo-desc { font-size:13px; color:rgba(255,255,255,0.55); margin-top:4px; }
    .promo-cta {
      background: var(--green); color:#fff; border:none; border-radius:12px;
      padding:14px 22px; font-size:14px; font-weight:900; cursor:pointer; flex-shrink:0;
      display:flex; align-items:center; gap:7px; white-space:nowrap;
    }
    .promo-cta:hover { filter: brightness(1.2); }
    .promo-dots { position:absolute; bottom:6px; left:50%; transform:translateX(-50%); display:flex; gap:4px; }
    .promo-dot { width:5px; height:5px; border-radius:50%; background: rgba(255,255,255,0.25); transition: background .2s; cursor:pointer; }
    .promo-dot.active { background: #D4A017; }

    /* ── Actualités ── */
    .news-widget { background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 18px; padding: 22px; display:flex; flex-direction:column; gap: 10px; }
    .news-widget-header { display:flex; align-items:center; justify-content:space-between; }
    .news-widget-header h4 { margin:0; font-size:16px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:.5px; }
    .news-widget-header a { font-size: 13px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .news-item { display:flex; gap:14px; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.05); }
    .news-item:first-of-type { border-top:none; }
    .news-thumb { width:64px; height:64px; border-radius:10px; object-fit:cover; flex-shrink:0; }
    .news-thumb-fallback { background: rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:24px; }
    .news-body { flex:1; min-width:0; }
    .news-title { font-size:15px; font-weight:900; color: var(--tile-fg-on-page); }
    .news-desc { font-size:13px; color: var(--tile-fg-dim); margin-top:2px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
    .news-time { font-size:12px; color: rgba(255,255,255,0.35); margin-top:4px; }

    .home-footer { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 4px 0; }
    .home-logout-btn {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 22px;
      color: var(--tile-fg-dim); font-size: 14px; padding: 9px 22px; cursor: pointer; transition: filter .2s;
    }
    .home-logout-btn:hover { filter: brightness(1.15); }

    /* ── Structure : colonne unique par défaut (mobile) ── */
    .home2-dash { display:flex; flex-direction:column; gap:18px; }
    .home2-col-left, .home2-col-center, .home2-col-right { display:contents; }

    /* ══════════ MODE PC (≥1024px) ══════════ */
    @media (min-width: 1024px) {
      .home-inner { max-width: 1440px; }
      .home2-dash { display:grid; grid-template-columns: 380px 1fr 400px; gap: 28px; align-items:start; }
      .home2-col-left, .home2-col-center, .home2-col-right { display:flex; flex-direction:column; gap: 18px; }
      .badge-level { display: flex; }
      .badge-rank-icon { display: none; }
      .rank-inline-link { display: none; }
      .profile-view-btn { display: flex; }
      .ranking-widget { display: flex; }
      .play-tile .tile-desc { display: block; }
      .play-tile { padding: 26px 14px; min-height: 180px; }
      .play-tile img.tile-icon { height: 84px; }
      .play-tile-big { min-height: 220px; }
      .play-tile-big img.tile-icon { height: 108px; }
      .home-footer { flex-direction: row; justify-content: space-between; width: 100%; padding: 14px 4px; }
    }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">
      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <div class="home2-dash">

        <!-- Colonne gauche : rang + classement -->
        <div class="home2-col-left">
          <div class="rank-card">
            <div class="rank-top-row">
              <div class="rank-tier-block">
                <div class="rank-label">🛡️ RANKED</div>
                <div class="rank-tier-value">${tier.label.toUpperCase()}${sub ? ' ' + sub : ''}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${mmr.toLocaleString('fr')}${nextRP ? ' / ' + nextRP.toLocaleString('fr') : ''} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${prog}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${topUsers.map((u,i) => rankRowHTML(u,i)).join('')}
            ${(!iAmInTop && myPosition) ? `
              <div style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                ${rankRowHTML({ id: p.id, pseudo: p.pseudo, mmr }, myPosition - 1)}
              </div>` : ''}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          ${pendingRewardsCount > 0 ? `
          <div id="pending-rewards-banner" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
            background:linear-gradient(135deg,rgba(212,160,23,0.25),rgba(212,160,23,0.1));border:1.5px solid #D4A017;margin-bottom:14px">
            <div style="font-size:28px">🎁</div>
            <div style="flex:1">
              <div style="font-weight:900;font-size:14px;color:#fff">Tu as des récompenses à récupérer !</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6)">${pendingRewardsCount} récompense${pendingRewardsCount>1?'s':''} en attente</div>
            </div>
            <div style="font-size:20px;color:#D4A017">→</div>
          </div>` : ''}

          <div class="play-section-header"><span class="slashes">///</span><h4>JOUER</h4><span class="slashes">///</span></div>

          <div class="play-grid">
            <div class="play-tile play-tile-big tile-ranked" data-action="ranked">
              <img src="${ICON}badge-ranked.png" class="tile-icon">
              <div class="tile-label">RANKED</div>
              <div class="tile-desc">Grimpez dans le classement</div>
            </div>
            <div class="play-tile play-tile-big tile-mini-league" data-action="match-ai">
              <img src="${ICON}badge-ai.png" class="tile-icon">
              <div class="tile-label">SOLO</div>
              <div class="tile-desc">Progressez à travers les niveaux</div>
            </div>
            <div class="play-tile" data-action="mini-league">
              <img src="${ICON}badge-league.png" class="tile-icon">
              <div class="tile-label">MINI LEAGUE</div>
              <div class="tile-desc">Participez à des ligues</div>
            </div>
            <div class="play-tile" data-action="match-random">
              <img src="${ICON}badge-random.png" class="tile-icon">
              <div class="tile-label">RANDOM</div>
              <div class="tile-desc">Affrontez un adversaire aléatoire</div>
            </div>
            <div class="play-tile" data-action="match-friend">
              <img src="${ICON}badge-vs.png" class="tile-icon">
              <div class="tile-label">AMI</div>
              <div class="tile-desc">Affrontez un ami</div>
            </div>
          </div>

          ${promoBoosters.length ? `
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${promoSlideHTML(promoBoosters[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${promoBoosters.length > 1 ? `<div class="promo-dots">${promoBoosters.map((_,i)=>`<div class="promo-dot ${i===0?'active':''}" data-dot="${i}"></div>`).join('')}</div>` : ''}
          </div>` : ''}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${news.length ? news.map(newsItemHTML).join('') : '<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`

  // Adapter la hauteur globale
  requestAnimationFrame(() => {
    const vh = window.visualViewport?.height || window.innerHeight
    const isMobile = window.innerWidth < 1024
    let chromeH = 0
    if (isMobile) {
      const top = document.getElementById('home2-mobile-top')
      const bot = document.getElementById('home2-mobile-bottom')
      chromeH = (top?.offsetHeight || 0) + (bot?.offsetHeight || 0)
    } else {
      chromeH = document.getElementById('home2-chrome-header')?.offsetHeight || 0
    }
    const avail = vh - chromeH
    const dark = container.querySelector('.home-dark')
    if (dark) dark.style.minHeight = avail + 'px'
  })

  document.getElementById('nav-rankings-link')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('nav-rankings-cta')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('rank-inline-link-btn')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('nav-journal-link')?.addEventListener('click', () => showFullJournalPopup())

  container.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', () => {
      el.style.transform = 'scale(.96)'
      setTimeout(() => el.style.transform = '', 180)
      const action = el.dataset.action
      if (action === 'match-ai') { showSoloLevelPicker(navigate, state); return }
      if (action === 'match-random') { hideV2ChromeNow(); navigate('match', { matchMode: 'random' }); return }
      if (action === 'match-friend') { navigate('friends'); return }
      if (action === 'mini-league')  { navigate('mini-league'); return }
      if (action === 'ranked')       { navigate('ranked'); return }
      toast('Bientôt disponible', 'info')
    })
  })

  // Bannière promo booster : carousel automatique
  if (promoBoosters.length > 1) {
    const slideEl = document.getElementById('promo-slide-content')
    const dots    = () => Array.from(document.querySelectorAll('.promo-dot'))
    const goTo = (idx) => {
      promoIdx = idx
      if (slideEl) slideEl.innerHTML = promoSlideHTML(promoBoosters[promoIdx])
      dots().forEach((d,i) => d.classList.toggle('active', i === promoIdx))
    }
    const interval = setInterval(() => goTo((promoIdx + 1) % promoBoosters.length), 5000)
    document.querySelectorAll('.promo-dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(Number(dot.dataset.dot)))
    })
  }
  document.getElementById('promo-cta-btn')?.addEventListener('click', () => navigate('boosters'))

  loadFriendRequestsBanner(state, toast)

  document.getElementById('pending-rewards-banner')?.addEventListener('click', () => {
    openPendingRewardsPopup(state, toast, navigate)
  })

  // La bannière était chargée UNE SEULE FOIS au rendu de Home : une invitation
  // arrivant pendant que le joueur s'y trouve déjà passait donc totalement
  // inaperçue, alors qu'elle expire au bout de 2 minutes. On la maintient
  // désormais à jour en temps réel (+ vérification périodique de secours).
  watchMatchInvites(state, toast, navigate)
  loadOngoingMatchBanner(state, toast, navigate)
  checkUnclaimedMiniLeaguePrizes(state, toast)
}

async function checkUnclaimedMiniLeaguePrizes(state, toast) {
  const uid = state.profile.id
  const { data: rows } = await supabase
    .from('mini_league_members')
    .select('league_id, prize_amount, mini_leagues(name)')
    .eq('user_id', uid).eq('prize_claimed', false).gt('prize_amount', 0)
  if (!rows?.length) return

  const total = rows.reduce((s,r)=>s+(r.prize_amount||0),0)
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.style.zIndex = '2200'
  overlay.innerHTML = `<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${rows.length>1?'plusieurs mini leagues':'une mini league'} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${rows.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${r.mini_leagues?.name||'Mini League'}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(r.prize_amount||0).toLocaleString('fr')} cr.</span>
        </div>`).join('')}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${total.toLocaleString('fr')} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`
  document.body.appendChild(overlay)

  overlay.querySelector('#claim-later-btn').addEventListener('click', () => overlay.remove())
  overlay.querySelector('#claim-all-btn').addEventListener('click', async (e) => {
    const btn = e.currentTarget
    btn.disabled = true; btn.textContent = '...'
    let totalClaimed = 0
    for (const r of rows) {
      const { data: res } = await supabase.rpc('claim_mini_league_prize', { p_league_id: r.league_id, p_user_id: uid })
      if (res?.success && !res.already_claimed) totalClaimed += res.prize || 0
    }
    if (totalClaimed > 0) {
      state.profile.credits = (state.profile.credits||0) + totalClaimed
      const credEl = document.getElementById('nav-credits')
      if (credEl) credEl.textContent = `💰 ${state.profile.credits.toLocaleString('fr')}`
      toast(`💰 +${totalClaimed.toLocaleString('fr')} cr. récupérés !`, 'success')
    }
    overlay.remove()
  })
}

// ── Bannière match en cours ──────────────────────────────────────────────────
async function loadOngoingMatchBanner(state, toast, navigate) {
  const banner = document.getElementById('ongoing-match-banner')
  if (!banner) return
  const uid = state.profile.id
  const { data: matches } = await supabase
    .from('matches').select('id, home_id, away_id, status, mode')
    .eq('status', 'active').or(`home_id.eq.${uid},away_id.eq.${uid}`)
    .order('created_at', { ascending: false })
  if (!matches?.length) { banner.innerHTML = ''; return }
  const oppIds = matches.map(m => m.home_id === uid ? m.away_id : m.home_id).filter(Boolean)
  let names = {}
  if (oppIds.length) {
    const { data: profs } = await supabase.from('users').select('id, pseudo, club_name').in('id', oppIds)
    ;(profs||[]).forEach(p => { names[p.id] = p.club_name || p.pseudo })
  }
  banner.innerHTML = matches.map(m => {
    const oppId = m.home_id === uid ? m.away_id : m.home_id
    const oppName = names[oppId] || 'Adversaire'
    const isMiniLeague = m.mode === 'mini_league'
    const modeLabel = isMiniLeague ? '🏆 Mini League' : m.mode === 'friend' ? 'Match ami' : 'Match'
    return `<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${modeLabel} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${oppName}</div>
      </div>
      <button data-resume="${m.id}" data-mini="${isMiniLeague?'1':''}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${m.id}" data-opp="${oppId}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`
  }).join('')
  banner.querySelectorAll('[data-resume]').forEach(btn => {
    btn.addEventListener('click', async () => {
      hideV2ChromeNow()
      const container = document.getElementById('page-content') || document.getElementById('app')
      if (btn.dataset.mini === '1') {
        const { data: mlM } = await supabase.from('mini_league_matches').select('id, league_id').eq('match_id', btn.dataset.resume).single()
        if (mlM) navigate('match-mini-league', { mlMatchId: mlM.id, leagueId: mlM.league_id })
        else navigate('mini-league')
      } else {
        const { resumePvpMatch } = await import('../match/match-random.js')
        resumePvpMatch(container, { state, navigate, toast, openModal: null, closeModal: null, refreshProfile: null }, btn.dataset.resume)
      }
    })
  })
  banner.querySelectorAll('[data-abandon]').forEach(btn => {
    btn.addEventListener('click', () => {
      showAbandonConfirm(async () => {
        await abandonMatch(btn.dataset.abandon, btn.dataset.opp, uid)
        toast('Match abandonné (défaite 3-0)', 'info')
        loadOngoingMatchBanner(state, toast, navigate)
      })
    })
  })
}

async function abandonMatch(matchId, oppId, uid) {
  stopBGM()
  const { data: m } = await supabase.from('matches').select('home_id, away_id, game_state, mode').eq('id', matchId).single()
  if (!m) return
  const amIHome = m.home_id === uid
  const home_score = amIHome ? 0 : 3
  const away_score = amIHome ? 3 : 0
  const gs = m.game_state || {}
  gs.p1Score = home_score; gs.p2Score = away_score
  gs.phase = 'finished'; gs.forfeit = true
  await supabase.from('matches').update({ status:'finished', forfeit:true, winner_id:oppId, home_score, away_score, game_state:gs }).eq('id', matchId)
  // Spécifique Mini League : reporter aussi le résultat (sinon le match reste
  // "pending" indéfiniment et bloque le passage à la journée suivante)
  if (m.mode === 'mini_league') {
    await supabase.from('mini_league_matches').update({ status:'finished', home_score, away_score }).eq('match_id', matchId)
  }
}

function showAbandonConfirm(onConfirm) {
  const ov = document.createElement('div')
  ov.className = 'modal-overlay'
  ov.innerHTML = `<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`
  document.body.appendChild(ov)
  ov.querySelector('#ab-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#ab-ok').addEventListener('click', () => { ov.remove(); onConfirm() })
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

// ── Surveillance temps réel des invitations de match ────────────────────
let _inviteWatchTimer = null
let _inviteWatchChan  = null

function watchMatchInvites(state, toast, navigate) {
  const myId = state?.user?.id
  if (!myId) return

  const refresh = () => loadMatchInviteBanner(state, toast, navigate)
  refresh()

  // Filet de sécurité : le Realtime peut ne pas passer (réseau mobile,
  // onglet en veille). 5 s de latence max sur une invitation qui dure 2 min.
  clearInterval(_inviteWatchTimer)
  _inviteWatchTimer = setInterval(() => {
    // Inutile de sonder si la bannière n'est plus dans le DOM (on a quitté Home)
    if (!document.getElementById('match-invite-banner')) {
      clearInterval(_inviteWatchTimer); _inviteWatchTimer = null
      if (_inviteWatchChan) { try { supabase.removeChannel(_inviteWatchChan) } catch {} _inviteWatchChan = null }
      return
    }
    refresh()
  }, 5000)

  if (_inviteWatchChan) { try { supabase.removeChannel(_inviteWatchChan) } catch {} }
  _inviteWatchChan = supabase
    .channel('home-match-invites-' + myId)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'friend_match_invites', filter: `invitee_id=eq.${myId}` }, refresh)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'friend_match_invites', filter: `invitee_id=eq.${myId}` }, refresh)
    .subscribe()
}

async function loadMatchInviteBanner(state, toast, navigate) {
  const banner = document.getElementById('match-invite-banner')
  if (!banner) return
  const { data: invites } = await supabase
    .from('friend_match_invites').select('id, inviter_id, inviter:users!inviter_id(pseudo, club_name)')
    .eq('invitee_id', state.user.id).eq('status', 'pending').order('created_at', { ascending: false }).limit(1).maybeSingle()
  if (!invites) { banner.innerHTML = ''; return }
  const inviterName = invites.inviter?.club_name || invites.inviter?.pseudo || '?'
  const inviterId = invites.inviter_id
  banner.innerHTML = `<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${inviterName} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`
  document.getElementById('match-inv-accept')?.addEventListener('click', () => { banner.innerHTML = ''; hideV2ChromeNow(); navigate('match', { matchMode:'friend', friendId:inviterId, friendName:inviterName, isAccepting:true }) })
  document.getElementById('match-inv-decline')?.addEventListener('click', async () => {
    await supabase.from('friend_match_invites').update({ status:'declined' }).eq('id', invites.id)
    banner.innerHTML = ''; toast('Invitation refusée', 'info')
  })
}

async function loadFriendRequestsBanner(state, toast) {
  const banner = document.getElementById('friend-requests-banner')
  if (!banner) return
  const { data: pending, error } = await supabase.from('friendships').select('id, requester:users!requester_id(pseudo, club_name)').eq('addressee_id', state.user.id).eq('status', 'pending')
  if (error || !pending?.length) { banner.innerHTML = ''; return }
  const count = pending.length
  const names = pending.slice(0, 2).map(r => r.requester?.pseudo || '?').join(', ')
  const extra = count > 2 ? ` +${count - 2}` : ''
  banner.innerHTML = `<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${count} demande${count>1?'s':''} d'ami${count>1?'s':''}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${names}${extra}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`
  document.getElementById('friend-req-btn').addEventListener('click', () => showPendingPopup(state, toast, () => loadFriendRequestsBanner(state, toast)))
}

export async function showSoloLevelPicker(navigate, state) {
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.style.zIndex = '2000'
  overlay.innerHTML = `<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`
  document.body.appendChild(overlay)
  const cleanup = () => overlay.remove()
  document.getElementById('solo-cancel').addEventListener('click', cleanup)
  overlay.addEventListener('click', e => { if (e.target === overlay) cleanup() })

  const [{ data: levels }, { data: progress }] = await Promise.all([
    supabase.from('solo_levels').select('*').eq('is_active', true).order('level_number'),
    supabase.from('user_solo_progress').select('unlocked_level').eq('user_id', state.profile.id).maybeSingle(),
  ])
  const unlockedLevel = progress?.unlocked_level || 1
  const list = levels || []

  const list_el = document.getElementById('solo-levels-list')
  if (!list_el) return
  if (!list.length) {
    list_el.innerHTML = '<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>'
    return
  }

  list_el.innerHTML = list.map(lvl => {
    const isLocked = lvl.level_number > unlockedLevel
    const isNext   = lvl.level_number === unlockedLevel
    const bg     = isLocked ? '#f0f0f0' : (isNext ? '#eefaf2' : '#f7f7f7')
    const border = isLocked ? '#ddd' : (isNext ? '#bfe8cf' : '#e0e0e0')
    const text   = isLocked ? '#999' : '#12401f'
    return `
      <div class="solo-level-card" data-level="${lvl.level_number}" data-locked="${isLocked}"
        style="cursor:${isLocked?'not-allowed':'pointer'};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${bg};border:1px solid ${border};opacity:${isLocked?0.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${isLocked?'#bbb':'#1A6B3C'};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${isLocked ? '🔒' : lvl.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${text}">Niveau ${lvl.level_number}</div>
          <div style="font-size:11px;color:${text};opacity:0.75;margin-top:1px">
            Note globale ~${lvl.target_note_avg} · 🟡${lvl.nb_liens_jaune} 🟢${lvl.nb_liens_vert} · 🏟️${lvl.nb_joueurs_stade}
          </div>
        </div>
        ${!isLocked ? `<div style="font-weight:900;font-size:12.5px;color:${text};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${lvl.reward_credits} cr.</div>` : ''}
      </div>`
  }).join('')

  list_el.querySelectorAll('.solo-level-card').forEach(el => {
    if (el.dataset.locked === 'true') return
    el.addEventListener('mouseenter', () => { el.style.transform = 'translateY(-1px)' })
    el.addEventListener('mouseleave', () => { el.style.transform = '' })
    el.addEventListener('click', () => {
      cleanup()
      hideV2ChromeNow()
      navigate('match', { matchMode: 'solo', soloLevel: Number(el.dataset.level) })
    })
  })
}


