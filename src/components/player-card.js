/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Template 507x657px — positions mesurées au pixel
 *
 * Octogones bas (mesurés) :
 *   Gauche  : x=1→199,   y=450→629, centre x=100, y=539
 *   Centre  : x=150→359, y=450→629, centre x=254, y=539
 *   Droit   : x=307→505, y=450→629, centre x=406, y=539
 */

const BASE = import.meta.env.BASE_URL

const CARD_TEMPLATES = {
  GK:  BASE + 'cards/card-GK.png',
  DEF: BASE + 'cards/card-DEF.png',
  MIL: BASE + 'cards/card-MIL.png',
  ATT: BASE + 'cards/card-ATT.png',
}

const JOB_ACCENT = {
  GK:  '#aaaaaa',
  DEF: '#bb2020',
  MIL: '#D4A017',
  ATT: '#1A6B3C',
}

function getFaceUrl(p) {
  if (!p?.face) return null
  const f = p.face.replace(/^public\//, '').replace(/^\//, '')
  return BASE + f
}

function getFlagUrl(code) {
  if (!code || code.length < 2) return null
  return `https://flagcdn.com/64x48/${code.slice(0, 2).toLowerCase()}.png`
}

function getClubLogoUrl(p) {
  const url = import.meta?.env?.VITE_SUPABASE_URL || ''
  if (!url) return null
  const logo = p?.clubs?.logo_url || p?.clubLogo
  if (!logo) return null
  if (logo.startsWith('http')) return logo
  return `${url}/storage/v1/object/public/assets/clubs/${logo}`
}

function getNoteForJob(p, job, evo = 0) {
  if (!job) return 0
  const base = Number(p[`note_${job.toLowerCase()}`]) || 0
  return base + ((job === p.job || job === p.job2) ? evo : 0)
}

function hasStadBonus(p, stadDef) {
  if (!stadDef) return false
  return (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
         (stadDef.country_code && p.country_code === stadDef.country_code)
}

export function renderPlayerCard(p, opts = {}) {
  const { width = 160, showStad = false, stadDef = null, used = false, extraNote = 0 } = opts

  if (!p) return `<div style="width:${width}px;height:${Math.round(width*657/507)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  const ratio  = width / 507
  const height = Math.round(width * 657 / 507)
  const px     = (n) => Math.round(n * ratio) + 'px'
  // left/top/right/bottom en px absolus depuis les mesures template
  const ax     = (n) => Math.round(n * ratio)  // valeur numérique

  const job    = p._line || p.job || 'MIL'
  const accent = JOB_ACCENT[job] || '#D4A017'
  const tmpl   = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL
  const evo    = p._evolution_bonus ?? p.evolution_bonus ?? 0
  const stadB  = showStad && (p.stadiumBonus || hasStadBonus(p, stadDef)) ? 10 : 0

  const mainNote  = getNoteForJob(p, job, evo) + extraNote + stadB
  const noteColor = stadB > 0 ? '#E87722' : '#fff'
  const job2      = (p.job2 && p.job2 !== job) ? p.job2 : null
  const job2Note  = job2 ? getNoteForJob(p, job2, evo) + extraNote + stadB : null

  const flagUrl     = getFlagUrl(p.country_code)
  const clubLogoUrl = getClubLogoUrl(p)
  const firstname   = (p.firstname || '').toUpperCase()
  const surname     = (p.surname_encoded || p.name || '').toUpperCase()
  const opacity     = used ? 'opacity:0.35;' : ''

  // Taille police nom adaptée à la longueur
  const surnameFsN = surname.length > 10 ? 34 : surname.length > 7 ? 40 : 46

  // Positions octogones (mesurées sur 507x657)
  // Gauche  : x=1→199,   y=450→629  → décalé vers centre : x=30→228
  // Centre  : x=150→359, y=450→629
  // Droit   : x=307→505, y=450→629  → décalé vers centre : x=278→476
  const octL_x = ax(30),  octL_w = ax(170), octL_y = ax(450), octL_h = ax(179)
  const octR_x = ax(307), octR_w = ax(170), octR_y = ax(450), octR_h = ax(179)
  const octC_x = ax(150), octC_w = ax(209), octC_y = ax(450), octC_h = ax(179)

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none">

  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill" draggable="false">

  <!-- Prénom -->
  <div style="position:absolute;top:${px(38)};left:0;right:0;text-align:center;z-index:2;padding:0 ${px(50)}">
    <span style="font-size:${px(17)};font-weight:700;color:${accent};letter-spacing:${px(2)};line-height:1;text-shadow:0 1px 3px #000">${firstname}</span>
  </div>

  <!-- Nom -->
  <div style="position:absolute;top:${px(68)};left:0;right:0;text-align:center;z-index:2;padding:0 ${px(14)}">
    <span style="font-size:${px(surnameFsN)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 8px #000;font-family:Arial Black,Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${surname}</span>
  </div>

  <!-- Note principale : centrée dans l'octogone du template -->
  <div style="position:absolute;
    left:${octC_x}px;top:${octC_y}px;
    width:${octC_w}px;height:${octC_h}px;
    z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0">
    <span style="font-size:${px(job2Note!==null?54:66)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 6px rgba(0,0,0,0.8)">${mainNote}</span>
    ${job2Note !== null ? `<span style="font-size:${px(24)};font-weight:900;color:#bb2020;font-family:Arial Black,Arial;line-height:1.1">${job2Note}</span>` : ''}
  </div>

  <!-- Drapeau : octogone gauche décalé vers centre -->
  <div style="position:absolute;left:${octL_x}px;top:${octL_y}px;width:${octL_w}px;height:${octL_h}px;z-index:3;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${accent};display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${flagUrl
      ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:cover">`
      : `<span style="font-size:${px(22)}">🌍</span>`}
  </div>

  <!-- Logo club : octogone droit décalé vers centre -->
  <div style="position:absolute;left:${octR_x}px;top:${octR_y}px;width:${octR_w}px;height:${octR_h}px;z-index:3;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${accent};display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${clubLogoUrl
      ? `<img src="${clubLogoUrl}" style="width:100%;height:100%;object-fit:contain">`
      : `<span style="font-size:${px(13)};font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
  </div>

</div>`
}

export function createPlayerCardEl(p, opts = {}) {
  const { onClick } = opts
  const div = document.createElement('div')
  div.style.cssText = 'display:inline-block;cursor:' + (onClick ? 'pointer' : 'default')
  div.innerHTML = renderPlayerCard(p, opts)
  if (onClick) div.addEventListener('click', () => onClick(p))
  return div
}
