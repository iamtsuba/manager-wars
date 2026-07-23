import { supabase } from '../lib/supabase.js'
import { showPendingPopup } from '../friends/friends.js'
import { stopBGM } from '../lib/sound.js'
import { getTier, getTierProgress } from '../ranked/glicko2.js'

const APP_VERSION = (typeof __BUILD_TIME__ !== 'undefined' && __BUILD_TIME__)
  ? __BUILD_TIME__
  : new Date().toISOString().slice(0,16).replace('T','-').replace(':','h')

// ── Helpers ──────────────────────────────────────────────────────────────

const V2_TABS = [
  { key: 'home2',      route: 'home2',      label: 'HOME',     icon: 'nav-home.png' },
  { key: 'cards',      route: 'collection', label: 'CARDS',    icon: 'nav-collection.png' },
  { key: 'decks',      route: 'decks',      label: 'DECKS',    icon: 'nav-decks.png' },
  { key: 'boosters',   route: 'boosters',   label: 'BOOSTERS', icon: 'nav-boosters.png' },
  { key: 'market',     route: 'market',     label: 'MERCATO',  icon: 'nav-market.png' },
]

// ── Bandeau persistant Home v2 ──────────────────────────────────────────
// Attaché directement à document.body (hors #page-content), il survit donc
// à navigate() qui ne remplace que #page-content. Masque le top-nav/bottom-nav
// globaux tant qu'il est présent, et se retire uniquement via "Revenir à v1"
// ou déconnexion. Ne touche jamais aux fichiers des autres pages.
function ensureV2Chrome(navigate, p, activeRouteKey, ICON) {
  if (!document.getElementById('home2-chrome-style')) {
    const style = document.createElement('style')
    style.id = 'home2-chrome-style'
    style.textContent = `
      body:has(#home2-chrome-marker) .top-nav,
      body:has(#home2-chrome-marker) .bottom-nav { display: none !important; }
      body:has(#home2-chrome-marker) .page { padding-top: 72px !important; padding-bottom: 0 !important; }

      .home2-chrome-header {
        position: fixed; top: 0; left: 0; right: 0; z-index: 500;
        display: flex; align-items: center; gap: 14px;
        background: var(--nav-bg); border-bottom: 1px solid var(--tile-border);
        padding: 10px 16px; box-sizing: border-box;
      }
      .home2-chrome-logo { flex-shrink: 0; display: flex; align-items: center; }
      .home2-chrome-logo img { height: 40px; width: auto; display: block; }
      .home2-chrome-tabs { display: flex; gap: 6px; flex: 1; min-width: 0; justify-content: center; overflow-x: auto; scrollbar-width: none; }
      .home2-chrome-tabs::-webkit-scrollbar { display: none; }
      .home2-chrome-tab {
        flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
        padding: 8px 16px; border-radius: 12px; cursor: pointer; text-decoration: none;
        background: rgba(255,255,255,0.05); border: 1px solid transparent;
        color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 900; letter-spacing: .3px;
        transition: background .15s, color .15s;
      }
      .home2-chrome-tab img { width: 20px; height: 20px; object-fit: contain; opacity: .75; }
      .home2-chrome-tab.active { background: var(--green); color: #fff; }
      .home2-chrome-tab.active img { opacity: 1; }
      .home2-chrome-tab:not(.active):hover { background: rgba(255,255,255,0.09); color: #fff; }
      .home2-chrome-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
      .home2-chrome-settings {
        width: 34px; height: 34px; border-radius: 50%; border: none;
        background: rgba(255,255,255,0.08); cursor: pointer;
        display: flex; align-items: center; justify-content: center; font-size: 15px; color: rgba(255,255,255,0.8);
      }
      .home2-chrome-settings:hover { background: rgba(255,255,255,0.15); }
      .home2-chrome-credits {
        display: flex; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        border-radius: 20px; padding: 6px 12px; font-size: 13px; font-weight: 800; color: #f2c94c;
        cursor: pointer; white-space: nowrap;
      }
      .home2-chrome-credits:hover { background: rgba(255,255,255,0.1); }
      .home2-chrome-add {
        width: 30px; height: 30px; border-radius: 50%; border: none;
        background: var(--green); color: #fff; font-size: 17px; font-weight: 900; cursor: pointer;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .home2-chrome-add:hover { filter: brightness(1.15); }
      @media (max-width: 640px) {
        .home2-chrome-tab { padding: 7px 10px; }
        .home2-chrome-tab img { width: 18px; height: 18px; }
        .home2-chrome-logo img { height: 32px; }
      }
    `
    document.head.appendChild(style)
  }

  let header = document.getElementById('home2-chrome-header')
  if (!header) {
    header = document.createElement('div')
    header.id = 'home2-chrome-header'
    header.className = 'home2-chrome-header'
    header.innerHTML = `
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${ICON}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">
        ${V2_TABS.map(t => `
          <a class="home2-chrome-tab" data-route="${t.route}" data-key="${t.key}">
            <img src="${ICON}${t.icon}">${t.label}
          </a>`).join('')}
      </div>
      <div class="home2-chrome-right">
        <button class="home2-chrome-settings" id="home2-chrome-settings-btn">⚙️</button>
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(p.credits||0).toLocaleString('fr')}</div>
        <button class="home2-chrome-add" id="home2-chrome-add-btn">+</button>
      </div>
    `
    document.body.appendChild(header)

    header.querySelectorAll('.home2-chrome-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        header.querySelectorAll('.home2-chrome-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        navigate(tab.dataset.route)
      })
    })
    header.querySelector('#home2-chrome-settings-btn').addEventListener('click', () => navigate('settings'))
    header.querySelector('#home2-chrome-credits').addEventListener('click', () => navigate('boosters'))
    header.querySelector('#home2-chrome-add-btn').addEventListener('click', () => navigate('boosters'))
  }

  // Met à jour l'onglet actif + le solde de crédits à chaque re-rendu
  header.querySelectorAll('.home2-chrome-tab').forEach(t => t.classList.toggle('active', t.dataset.key === activeRouteKey))
  const creditsEl = header.querySelector('#home2-chrome-credits')
  if (creditsEl) creditsEl.textContent = `💰 ${(p.credits||0).toLocaleString('fr')}`
}

function teardownV2Chrome() {
  document.getElementById('home2-chrome-header')?.remove()
  document.getElementById('home2-chrome-style')?.remove()
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

function getSubTier(mmr, tier) {
  if (!isFinite(tier.max)) return ''
  const range = tier.max - tier.min + 1
  const third = Math.floor((mmr - tier.min) / (range / 3))
  return ['III','II','I'][Math.min(2, Math.max(0, third))]
}

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
    .select('id,name,icon,price_type,price_credits,card_count')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
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

export async function renderHome2(container, { state, navigate, toast }) {
  const p = state.profile
  if (!p) return

  const ICON = import.meta.env.BASE_URL + 'icons/'
  ensureV2Chrome(navigate, p, 'home2', ICON)
  const mmr    = p.mmr ?? 1000
  const tier   = getTier(mmr)
  const sub    = getSubTier(mmr, tier)
  const prog   = getTierProgress(mmr)
  const nextRP = isFinite(tier.max) ? tier.max + 1 : null

  const [{ list: topUsers, iAmInTop, myPosition }, news, promoBoosters] = await Promise.all([
    fetchTopRanking(p.id),
    fetchNews(5),
    fetchPromoBoosters()
  ])

  const rankRowHTML = (u, i) => `
    <div class="rk-row ${u.id === p.id ? 'rk-row-me' : ''}">
      <div class="rk-pos ${i < 3 ? 'rk-pos-top' + (i+1) : ''}">${i < 3 ? ['🥇','🥈','🥉'][i] : i+1}</div>
      <div class="rk-name ${u.id === p.id ? 'rk-name-me' : ''}">${u.pseudo}</div>
      <div class="rk-rp">${(u.mmr ?? 0).toLocaleString('fr')} RP</div>
    </div>`

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
      <img src="${ICON}${b.icon || 'nav-boosters.png'}" class="promo-icon" onerror="this.style.display='none'">
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
      display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
      padding: 16px 16px 80px; box-sizing: border-box; overflow-y: auto;
    }
    .home-inner { width: 100%; max-width: 560px; display: flex; flex-direction: column; gap: 14px; }

    /* ── Profil ── */
    .profile-row { display: flex; align-items: center; gap: 12px; }
    .profile-badge {
      width: 46px; height: 46px; border-radius: 12px; flex-shrink: 0;
      background: linear-gradient(135deg, ${p.club_color1}cc, ${p.club_color2}88);
      border: 1.5px solid ${p.club_color2};
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; font-size: 19px; color: #fff;
    }
    .profile-info { flex: 1; min-width: 0; }
    .profile-info .name-row { display:flex; align-items:center; gap:6px; }
    .profile-info h3 { margin: 0; font-size: 17px; font-weight: 900; color: var(--tile-fg-on-page); }
    .profile-edit-btn { background:none; border:none; cursor:pointer; font-size:12px; opacity:.55; padding:0; color: var(--tile-fg-dim); }
    .profile-edit-btn:hover { opacity:1; }
    .profile-info .club { display:flex; align-items:center; gap:5px; font-size: 11px; color: var(--tile-fg-dim); margin-top: 2px; letter-spacing:.3px; }
    .profile-info .club .dot { width:6px; height:6px; border-radius:50%; background: var(--green-light); flex-shrink:0; }
    .profile-settings-btn {
      width: 34px; height: 34px; border-radius: 50%; border: none;
      background: rgba(255,255,255,0.08); cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--tile-fg-dim);
    }
    .profile-settings-btn:hover { background: rgba(255,255,255,0.15); }

    /* ── Rank card ── */
    .rank-card {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 16px;
      padding: 14px 16px; display: flex; flex-direction: column; gap: 8px;
    }
    .rank-top-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
    .rank-tier-block .rank-label { font-size: 10px; font-weight: 900; color: var(--tile-fg-dim); letter-spacing: 1.5px; }
    .rank-tier-block .rank-tier-value { font-size: 20px; font-weight: 900; color: ${tier.color}; margin-top: 1px; }
    .rank-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .rank-rp-label { font-size: 11px; color: var(--tile-fg-dim); white-space: nowrap; }
    .rank-inline-link {
      display: inline-flex; align-items: center; gap: 4px;
      background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 11px; font-weight: 700;
      border-radius: 8px; padding: 4px 9px; cursor: pointer; white-space: nowrap;
    }
    .rank-inline-link:hover { filter: brightness(1.2); }
    .rank-progress-track { width: 100%; height: 7px; border-radius: 4px; background: rgba(255,255,255,0.08); overflow: hidden; }
    .rank-progress-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, ${tier.color}99, ${tier.color}); transition: width .4s; }

    .profile-view-btn {
      display: none; width: 100%; align-items:center; justify-content:center; gap:8px;
      background: rgba(255,255,255,0.05); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 12px; font-weight: 700; border-radius: 10px;
      padding: 10px; cursor: pointer;
    }
    .profile-view-btn:hover { filter: brightness(1.15); }

    /* ── Classement mini-widget (PC uniquement) ── */
    .ranking-widget {
      display: none;
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 16px;
      padding: 14px 16px; flex-direction: column; gap: 6px;
    }
    .ranking-widget-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; }
    .ranking-widget-header h4 { margin:0; font-size:12px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:1px; }
    .ranking-widget-header a { font-size: 11px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .rk-row { display:flex; align-items:center; gap:10px; padding:6px 0; }
    .rk-row-me { background: rgba(26,107,60,0.18); border-radius: 8px; margin: 0 -8px; padding: 6px 8px; }
    .rk-pos {
      width: 24px; height: 24px; border-radius: 50%; flex-shrink:0;
      background: rgba(255,255,255,0.06); color: var(--tile-fg-dim);
      display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900;
    }
    .rk-pos-top1 { background:#D4A017; color:#000; }
    .rk-pos-top2 { background:#a0a0a0; color:#000; }
    .rk-pos-top3 { background:#cd7f32; color:#000; }
    .rk-name { flex:1; min-width:0; font-size:12px; font-weight:700; color: var(--tile-fg-on-page); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .rk-name-me { color: var(--green-light); }
    .rk-rp { font-size: 12px; font-weight:900; color: var(--tile-fg-dim); flex-shrink:0; }
    .ranking-widget-cta {
      display:flex; align-items:center; justify-content:center; gap:6px;
      width:100%; margin-top:6px; background: rgba(255,255,255,0.05); border:1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size:12px; font-weight:700; border-radius:10px; padding:9px; cursor:pointer;
    }
    .ranking-widget-cta:hover { filter: brightness(1.15); }

    /* ── Section Jouer ── */
    .play-section-header { display:flex; align-items:center; justify-content:center; gap:10px; margin: 2px 0; }
    .play-section-header h4 { margin:0; font-size:14px; font-weight:900; letter-spacing:3px; color: var(--tile-fg-on-page); }
    .play-section-header .slashes { color: var(--green-light); font-weight:900; font-size:15px; letter-spacing:1px; }

    .play-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
    .play-tile {
      grid-column: span 2;
      border-radius: 16px; background: var(--tile-bg); border: 1px solid var(--tile-border);
      cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 12px 8px;
      transition: transform .15s, filter .15s; backdrop-filter: blur(4px); text-align:center; gap:2px;
    }
    .play-tile:hover { filter: brightness(1.15); }
    .play-tile:active { transform: scale(.96); }
    .play-tile img.tile-icon { height: 46px; object-fit:contain; }
    .play-tile .tile-label { font-size: 13px; font-weight: 900; color: var(--tile-fg-on-page); letter-spacing:.5px; margin-top:2px; }
    .play-tile .tile-desc { display:none; font-size: 10px; color: var(--tile-fg-dim); line-height:1.3; margin-top:2px; }

    .play-tile-big { grid-column: span 3; padding: 16px 10px; }
    .play-tile-big img.tile-icon { height: 56px; }
    .play-tile-big .tile-label { font-size: 15px; }
    .tile-mini-league { background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%); border: 1.5px solid rgba(122,40,184,0.6); box-shadow: 0 4px 20px rgba(122,40,184,0.3); }
    .tile-ranked { background: linear-gradient(135deg, #4a3a05 0%, #8a6a10 50%, #D4A017 100%); border: 1.5px solid rgba(212,160,23,0.6); box-shadow: 0 4px 20px rgba(212,160,23,0.25); }

    /* ── Bannière promo booster ── */
    .promo-banner {
      background: linear-gradient(135deg, #14261a 0%, #0d1a12 100%);
      border: 1px solid rgba(212,160,23,0.3); border-radius: 16px;
      padding: 16px; display:flex; align-items:center; gap:14px; position: relative; overflow:hidden;
    }
    .promo-icon-wrap { width:56px; height:56px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:rgba(212,160,23,0.12); border-radius:12px; border:1px solid rgba(212,160,23,0.3); }
    .promo-icon { max-width:70%; max-height:70%; object-fit:contain; }
    .promo-info { flex:1; min-width:0; }
    .promo-kicker { font-size:10px; font-weight:900; color:#D4A017; letter-spacing:1px; }
    .promo-title { font-size:16px; font-weight:900; color:#fff; margin-top:2px; }
    .promo-desc { font-size:11px; color:rgba(255,255,255,0.55); margin-top:2px; }
    .promo-cta {
      background: var(--green); color:#fff; border:none; border-radius:10px;
      padding:9px 14px; font-size:12px; font-weight:900; cursor:pointer; flex-shrink:0;
      display:flex; align-items:center; gap:5px; white-space:nowrap;
    }
    .promo-cta:hover { filter: brightness(1.2); }
    .promo-dots { position:absolute; bottom:6px; left:50%; transform:translateX(-50%); display:flex; gap:4px; }
    .promo-dot { width:5px; height:5px; border-radius:50%; background: rgba(255,255,255,0.25); transition: background .2s; cursor:pointer; }
    .promo-dot.active { background: #D4A017; }

    /* ── Actualités ── */
    .news-widget { background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 16px; padding: 14px 16px; display:flex; flex-direction:column; gap: 8px; }
    .news-widget-header { display:flex; align-items:center; justify-content:space-between; }
    .news-widget-header h4 { margin:0; font-size:13px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:.5px; }
    .news-widget-header a { font-size: 11px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .news-item { display:flex; gap:10px; padding: 7px 0; border-top: 1px solid rgba(255,255,255,0.05); }
    .news-item:first-of-type { border-top:none; }
    .news-thumb { width:46px; height:46px; border-radius:8px; object-fit:cover; flex-shrink:0; }
    .news-thumb-fallback { background: rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:18px; }
    .news-body { flex:1; min-width:0; }
    .news-title { font-size:12.5px; font-weight:900; color: var(--tile-fg-on-page); }
    .news-desc { font-size:11px; color: var(--tile-fg-dim); margin-top:1px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
    .news-time { font-size:10px; color: rgba(255,255,255,0.35); margin-top:3px; }

    .home-footer { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 4px 0; }
    .home-logout-btn {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 20px;
      color: var(--tile-fg-dim); font-size: 12px; padding: 6px 18px; cursor: pointer; transition: filter .2s;
    }
    .home-logout-btn:hover { filter: brightness(1.15); }

    /* ── Structure : colonne unique par défaut (mobile) ── */
    .home2-dash { display:flex; flex-direction:column; gap:14px; }
    .home2-col-left, .home2-col-center, .home2-col-right { display:contents; }

    /* ══════════ MODE PC (≥1024px) ══════════ */
    @media (min-width: 1024px) {
      .home-inner { max-width: 1180px; }
      .home2-dash { display:grid; grid-template-columns: 300px 1fr 320px; gap: 20px; align-items:start; }
      .home2-col-left, .home2-col-center, .home2-col-right { display:flex; flex-direction:column; gap: 14px; }
      .rank-inline-link { display: none; }
      .profile-view-btn { display: flex; }
      .ranking-widget { display: flex; }
      .play-tile .tile-desc { display: block; }
      .play-tile { padding: 16px 10px; }
      .play-tile img.tile-icon { height: 60px; }
      .play-tile-big img.tile-icon { height: 72px; }
      .home-footer { flex-direction: row; justify-content: space-between; width: 100%; padding: 10px 4px; }
    }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">
      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <div class="home2-dash">

        <!-- Colonne gauche : profil + rang + classement -->
        <div class="home2-col-left">
          <div class="profile-row">
            <div class="profile-badge">${p.level}</div>
            <div class="profile-info">
              <div class="name-row"><h3>${p.pseudo}</h3><button class="profile-edit-btn" id="nav-edit-btn">✏️</button></div>
              <div class="club"><span class="dot"></span>${(p.club_name||'').toUpperCase()}</div>
            </div>
            <button class="profile-settings-btn" id="nav-settings-btn">⚙️</button>
          </div>

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

          <button class="profile-view-btn" id="nav-profile-btn">Voir mon profil 📤</button>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${topUsers.map((u,i) => rankRowHTML(u,i)).join('')}
            ${(!iAmInTop && myPosition) ? `
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${myPosition}</div>
                <div class="rk-name rk-name-me">${p.pseudo}</div>
                <div class="rk-rp">${mmr.toLocaleString('fr')} RP</div>
              </div>` : ''}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          <div class="play-section-header"><span class="slashes">///</span><h4>JOUER</h4><span class="slashes">///</span></div>

          <div class="play-grid">
            <div class="play-tile" data-action="match-ai">
              <img src="${ICON}badge-ai.png" class="tile-icon">
              <div class="tile-label">VS IA</div>
              <div class="tile-desc">Affrontez l'intelligence artificielle</div>
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
            <div class="play-tile play-tile-big tile-mini-league" data-action="mini-league">
              <img src="${ICON}badge-league.png" class="tile-icon">
              <div class="tile-label">MINI LEAGUE</div>
              <div class="tile-desc">Participez à des ligues</div>
            </div>
            <div class="play-tile play-tile-big tile-ranked" data-action="ranked">
              <img src="${ICON}badge-ranked.png" class="tile-icon">
              <div class="tile-label">RANKED</div>
              <div class="tile-desc">Grimpez dans le classement</div>
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

      <!-- Footer -->
      <div class="home-footer">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(212,160,23,0.15);border:1px solid rgba(212,160,23,0.4);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;color:#D4A017">
          🧪 HOME V2 (BÊTA)
          <button id="back-to-v1-btn" style="background:none;border:none;color:#D4A017;text-decoration:underline;cursor:pointer;font-size:11px;font-weight:700;padding:0">← Revenir à v1</button>
          <span id="mode-indicator" style="border-left:1px solid rgba(212,160,23,0.4);padding-left:8px;margin-left:2px"></span>
        </div>
        <button class="home-logout-btn" id="logout-btn">Déconnexion</button>
        ${p.is_admin ? `
        <a href="${import.meta.env.BASE_URL}admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${APP_VERSION}</div>` : ''}
      </div>

    </div>
  </div>`

  // Adapter la hauteur globale
  requestAnimationFrame(() => {
    const vh = window.visualViewport?.height || window.innerHeight
    const chromeHeader = document.getElementById('home2-chrome-header')
    const chromeH = chromeHeader ? chromeHeader.offsetHeight : 0
    const avail = vh - chromeH
    const dark = container.querySelector('.home-dark')
    if (dark) dark.style.minHeight = avail + 'px'
  })

  // Indicateur de mode (Mobile / PC)
  const updateModeIndicator = () => {
    const el = document.getElementById('mode-indicator')
    if (!el) return
    el.textContent = window.innerWidth >= 1024 ? '🖥️ Mode PC' : '📱 Mode Mobile'
  }
  updateModeIndicator()
  window.addEventListener('resize', updateModeIndicator)

  document.getElementById('nav-settings-btn')?.addEventListener('click', () => navigate('settings'))
  document.getElementById('nav-edit-btn')?.addEventListener('click', () => navigate('settings'))
  document.getElementById('nav-profile-btn')?.addEventListener('click', () => navigate('settings'))
  document.getElementById('nav-rankings-link')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('nav-rankings-cta')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('rank-inline-link-btn')?.addEventListener('click', () => navigate('rankings'))
  document.getElementById('nav-journal-link')?.addEventListener('click', () => showFullJournalPopup())

  container.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', () => {
      el.style.transform = 'scale(.96)'
      setTimeout(() => el.style.transform = '', 180)
      const action = el.dataset.action
      if (action === 'match-ai') { showDifficultyPicker(navigate); return }
      if (action === 'match-random') { navigate('match', { matchMode: 'random' }); return }
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

  document.getElementById('logout-btn').addEventListener('click', async () => {
    teardownV2Chrome()
    await supabase.auth.signOut()
    window.location.reload()
  })

  document.getElementById('back-to-v1-btn')?.addEventListener('click', () => {
    teardownV2Chrome()
    navigate('home')
  })

  loadFriendRequestsBanner(state, toast)
  loadMatchInviteBanner(state, toast, navigate)
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
  document.getElementById('match-inv-accept')?.addEventListener('click', () => { banner.innerHTML = ''; navigate('match', { matchMode:'friend', friendId:inviterId, friendName:inviterName, isAccepting:true }) })
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

function showDifficultyPicker(navigate) {
  const levels = [
    { mode:'vs_ai_easy',   label:'Facile',    desc:'Pour découvrir le jeu',      credits:'500',   icon:'🟢',
      bg:'#eefaf2', border:'#bfe8cf', iconBg:'#1A6B3C', text:'#12401f' },
    { mode:'vs_ai_medium', label:'Moyen',     desc:'Un défi équilibré',          credits:'1 000', icon:'🟡',
      bg:'#fdf7e6', border:'#f0dd9e', iconBg:'#D4A017', text:'#5c4408' },
    { mode:'vs_ai_hard',   label:'Difficile', desc:'Réservé aux experts',        credits:'1 500', icon:'🔴',
      bg:'#fdecec', border:'#f3bcbc', iconBg:'#bb2020', text:'#5c1010' },
  ]
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.style.zIndex = '2000'
  overlay.innerHTML = `<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${levels.map(l => `
          <div class="diff-card" data-mode="${l.mode}" style="cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${l.bg};border:1px solid ${l.border};transition:transform .12s ease, box-shadow .12s ease">
            <div style="width:46px;height:46px;border-radius:12px;background:${l.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 10px -4px ${l.iconBg}">${l.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:15px;color:${l.text}">${l.label}</div>
              <div style="font-size:12px;color:${l.text};opacity:0.65;margin-top:1px">${l.desc}</div>
            </div>
            <div style="font-weight:900;font-size:12.5px;color:${l.text};background:rgba(255,255,255,0.6);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${l.credits} cr.</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`
  document.body.appendChild(overlay)
  overlay.querySelectorAll('.diff-card').forEach(el => {
    el.addEventListener('mouseenter', () => { el.style.transform = 'translateY(-1px)'; el.style.boxShadow = '0 6px 16px -6px rgba(0,0,0,0.18)' })
    el.addEventListener('mouseleave', () => { el.style.transform = ''; el.style.boxShadow = '' })
  })
  const cleanup = () => overlay.remove()
  document.getElementById('diff-cancel').addEventListener('click', cleanup)
  overlay.addEventListener('click', e => { if (e.target === overlay) cleanup() })
  overlay.querySelectorAll('[data-mode]').forEach(el => {
    el.addEventListener('click', () => { cleanup(); navigate('match', { matchMode: el.dataset.mode }) })
  })
}
