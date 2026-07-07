/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Template 507x657px
 */

const BASE = import.meta.env.BASE_URL

const CARD_TEMPLATES = {
  GK:  BASE + 'cards/card-GK.png',
  DEF: BASE + 'cards/card-DEF.png',
  MIL: BASE + 'cards/card-MIL.png',
  ATT: BASE + 'cards/card-ATT.png',
}

// Couleur de la note principale (couleur accent de la carte)
const JOB_ACCENT = {
  GK:  '#c0c0c0',
  DEF: '#e03030',
  MIL: '#D4A017',
  ATT: '#3fbf5f',
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
  const ax     = (n) => Math.round(n * ratio)

  const job    = p._line || p.job || 'MIL'
  const accent = JOB_ACCENT[job] || '#D4A017'
  const tmpl   = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL
  const evo    = p._evolution_bonus ?? p.evolution_bonus ?? 0
  const stadB  = showStad && (p.stadiumBonus || hasStadBonus(p, stadDef)) ? 10 : 0

  // Note principale = note du poste principal + evolution_bonus + éventuel stade
  const mainNote  = getNoteForJob(p, job, evo) + extraNote + stadB
  const noteColor = stadB > 0 ? '#E87722' : accent

  const job2      = (p.job2 && p.job2 !== job) ? p.job2 : null
  const job2Note  = job2 ? getNoteForJob(p, job2, evo) + extraNote + stadB : null

  const faceUrl     = getFaceUrl(p)
  const flagUrl     = getFlagUrl(p.country_code)
  const clubLogoUrl = getClubLogoUrl(p)
  const firstname   = (p.firstname || '').toUpperCase()
  const surname     = (p.surname_encoded || p.name || '').toUpperCase()
  const opacity     = used ? 'opacity:0.35;' : ''

  const surnameFsN = surname.length > 10 ? 40 : surname.length > 7 ? 48 : 56

  // Octogones (mesurés sur template 507x657) :
  //   Gauche  : x=1→199   → resserré : x=40→180  (w=140)
  //   Centre  : x=150→359                        (w=209)
  //   Droit   : x=307→505 → resserré : x=327→467 (w=140)
  const octL_x = ax(40),  octL_w = ax(140), octL_y = ax(455), octL_h = ax(140)
  const octR_x = ax(327), octR_w = ax(140), octR_y = ax(455), octR_h = ax(140)
  const octC_x = ax(150), octC_w = ax(209), octC_y = ax(448), octC_h = ax(150)

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none">

  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill" draggable="false">

  <!-- Prénom -->
  <div style="position:absolute;top:${px(42)};left:0;right:0;text-align:center;z-index:2;padding:0 ${px(50)}">
    <span style="font-size:${px(22)};font-weight:700;color:${accent};letter-spacing:${px(3)};line-height:1;text-shadow:0 1px 3px #000">${firstname}</span>
  </div>

  <!-- Nom -->
  <div style="position:absolute;top:${px(72)};left:0;right:0;text-align:center;z-index:2;padding:0 ${px(14)}">
    <span style="font-size:${px(surnameFsN)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 8px #000;font-family:Arial Black,Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${surname}</span>
  </div>

  <!-- Portrait : zone centrale, grand -->
  ${faceUrl ? `<img src="${faceUrl}"
    style="position:absolute;top:${px(175)};left:50%;transform:translateX(-50%);
    width:${px(300)};height:${px(290)};object-fit:cover;object-position:top center;z-index:2"
    onerror="this.style.display='none'">` : ''}

  <!-- Note principale : centrée dans l'octogone du template -->
  <div style="position:absolute;left:${octC_x}px;top:${octC_y}px;width:${octC_w}px;height:${octC_h}px;
    z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <span style="font-size:${px(66)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:0.9;text-shadow:0 2px 6px rgba(0,0,0,0.9)">${mainNote}</span>
  </div>

  <!-- Note secondaire : petit octogone rouge sous la note principale -->
  ${job2Note !== null ? `
  <div style="position:absolute;left:50%;transform:translateX(-50%);top:${px(575)};
    width:${px(90)};height:${px(70)};z-index:5;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:#0a0a0a;border:${px(3)} solid #e03030;
    display:flex;align-items:center;justify-content:center">
    <span style="font-size:${px(34)};font-weight:900;color:#e03030;font-family:Arial Black,Arial;line-height:1">${job2Note}</span>
  </div>` : ''}

  <!-- Drapeau : octogone gauche -->
  <div style="position:absolute;left:${octL_x}px;top:${octL_y}px;width:${octL_w}px;height:${octL_h}px;z-index:3;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${accent};display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${flagUrl
      ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:cover">`
      : `<span style="font-size:${px(22)}">🌍</span>`}
  </div>

  <!-- Logo club : octogone droit -->
  <div style="position:absolute;left:${octR_x}px;top:${octR_y}px;width:${octR_w}px;height:${octR_h}px;z-index:3;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${accent};display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${clubLogoUrl
      ? `<img src="${clubLogoUrl}" style="width:88%;height:88%;object-fit:contain">`
      : `<span style="font-size:${px(15)};font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
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
