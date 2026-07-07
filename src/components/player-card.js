/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Positions mesurées sur template 507x657px
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
  return `https://flagcdn.com/48x36/${code.slice(0, 2).toLowerCase()}.png`
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
  const key = `note_${job.toLowerCase()}`
  const base = Number(p[key]) || 0
  return base + ((job === p.job || job === p.job2) ? evo : 0)
}

function hasStadBonus(p, stadDef) {
  if (!stadDef) return false
  return (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
         (stadDef.country_code && p.country_code === stadDef.country_code)
}

export function renderPlayerCard(p, opts = {}) {
  const {
    width = 160,
    showStad = false,
    stadDef = null,
    used = false,
    extraNote = 0,
  } = opts

  if (!p) return `<div style="width:${width}px;height:${Math.round(width*1.295)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  // Template 507x657 → ratio
  const ratio  = width / 507
  const height = Math.round(width * 657 / 507)
  const px     = (n) => Math.round(n * ratio) + 'px'
  const pct    = (n, total) => (n / total * 100).toFixed(2) + '%'

  const job    = p._line || p.job || 'MIL'
  const accent = JOB_ACCENT[job] || '#D4A017'
  const tmpl   = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL
  const evo    = p._evolution_bonus ?? p.evolution_bonus ?? 0
  const stadB  = showStad && (p.stadiumBonus || hasStadBonus(p, stadDef)) ? 10 : 0

  const mainNote  = getNoteForJob(p, job, evo) + extraNote + stadB
  const noteColor = stadB > 0 ? '#E87722' : '#fff'

  const job2     = (p.job2 && p.job2 !== job) ? p.job2 : null
  const job2Note = job2 ? getNoteForJob(p, job2, evo) + extraNote + stadB : null

  const faceUrl     = getFaceUrl(p)
  const flagUrl     = getFlagUrl(p.country_code)
  const clubLogoUrl = getClubLogoUrl(p)

  const firstname = (p.firstname || '').toUpperCase()
  const surname   = (p.surname_encoded || p.name || '').toUpperCase()
  const opacity   = used ? 'opacity:0.35;' : ''

  // Taille police nom adaptée à la longueur
  const surnameFsNum = surname.length > 10 ? 36 : surname.length > 7 ? 42 : 48
  const surnameFsPx  = px(surnameFsNum)

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none">

  <!-- Template de fond -->
  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill" draggable="false">

  <!-- Prénom : bandeau haut, centre y≈42px/657 -->
  <div style="position:absolute;top:${pct(38,657)};left:0;right:0;text-align:center;z-index:2;padding:0 ${px(50)}">
    <span style="font-size:${px(18)};font-weight:700;color:${accent};letter-spacing:${px(2)};line-height:1;text-shadow:0 1px 3px #000">${firstname}</span>
  </div>

  <!-- Nom : sous le prénom -->
  <div style="position:absolute;top:${pct(60,657)};left:0;right:0;text-align:center;z-index:2;padding:0 ${px(16)}">
    <span style="font-size:${surnameFsPx};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 8px #000;font-family:Arial Black,Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${surname}</span>
  </div>

  <!-- Portrait : zone centrale, réduit pour rester dans la partie haute de l'octogone -->
  ${faceUrl ? `<img src="${faceUrl}"
    style="position:absolute;top:${pct(152,657)};left:50%;transform:translateX(-50%);
    width:${px(240)};height:${pct(270,657)};object-fit:cover;object-position:top center;z-index:2"
    onerror="this.style.display='none'">` : ''}

  <!-- Note principale : superposée dans l'octogone du template (centre x=254, y=539 sur 507x657) -->
  <div style="position:absolute;
    left:${pct(145,507)};right:${pct(145,507)};
    top:${pct(450,657)};bottom:${pct(43,657)};
    z-index:3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:0">
    <span style="font-size:${px(job2Note!==null?56:68)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 6px rgba(0,0,0,0.8)">${mainNote}</span>
    ${job2Note !== null ? `<span style="font-size:${px(26)};font-weight:900;color:#bb2020;font-family:Arial Black,Arial;line-height:1">${job2Note}</span>` : ''}
  </div>

  <!-- Drapeau : octogone gauche, flanquant la note -->
  <div style="position:absolute;
    left:${pct(22,507)};
    top:${pct(468,657)};
    width:${pct(100,507)};height:${pct(95,657)};
    z-index:3;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${accent};display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${flagUrl
      ? `<img src="${flagUrl}" style="width:85%;height:75%;object-fit:cover">`
      : `<span style="font-size:${px(22)}">🌍</span>`}
  </div>

  <!-- Logo club : octogone droit -->
  <div style="position:absolute;
    right:${pct(22,507)};
    top:${pct(468,657)};
    width:${pct(100,507)};height:${pct(95,657)};
    z-index:3;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${accent};display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${clubLogoUrl
      ? `<img src="${clubLogoUrl}" style="width:80%;height:80%;object-fit:contain">`
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
