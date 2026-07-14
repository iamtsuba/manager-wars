/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Template 507x657px — positions mesurées au pixel
 */

const BASE = import.meta.env.BASE_URL

const CARD_TEMPLATES = {
  GK:  BASE + 'cards/card-GK.png',
  DEF: BASE + 'cards/card-DEF.png',
  MIL: BASE + 'cards/card-MIL.png',
  ATT: BASE + 'cards/card-ATT.png',
}

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
  return `https://flagsapi.com/${code.slice(0, 2).toUpperCase()}/flat/64.png`
}

function getClubLogoUrl(p) {
  const url = import.meta?.env?.VITE_SUPABASE_URL || ''
  const logo = p?.clubs?.logo_url || p?.clubLogo
  if (!logo) return null
  if (logo.startsWith('http')) return logo
  return url ? `${url}/storage/v1/object/public/assets/clubs/${logo}` : null
}

function getNoteForJob(p, job, evo = 0) {
  if (!job) return 0
  const keyMap = { GK:'g', DEF:'d', MIL:'m', ATT:'a' }
  const key = 'note_' + (keyMap[job] || job.toLowerCase())
  const base = Number(p[key]) || 0
  return base + ((job === p.job || job === p.job2) ? evo : 0)
}

function hasStadBonus(p, stadDef) {
  if (!stadDef) return false
  return (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
         (stadDef.country_code && p.country_code === stadDef.country_code)
}

export function renderPlayerCard(p, opts = {}) {
  const { width = 160, showStad = false, stadDef = null, used = false, extraNote = 0, role: forceRole = null, _forceStadColor = false } = opts

  if (!p) return `<div style="width:${width}px;height:${Math.round(width*657/507)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  const ratio  = width / 507
  const height = Math.round(width * 657 / 507)
  const ax     = (n) => Math.round(n * ratio)
  const px     = (n) => ax(n) + 'px'

  // Si forceRole est défini (joueur positionné sur un poste spécifique), utiliser ce poste pour la note
  const job    = forceRole || p._line || p.job || 'MIL'
  const accent = JOB_ACCENT[job] || '#D4A017'
  const tmpl   = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL


  // Glow selon rareté
  const RARITY_GLOW_COLOR = { legende:'#7a28b8', pepite:'#D4A017', pépite:'#D4A017', papyte:'#909090' }
  const glowColor = RARITY_GLOW_COLOR[p.rarity]
  const glowStyle = glowColor ? `filter:drop-shadow(0 0 5px ${glowColor}) drop-shadow(0 0 12px ${glowColor});` : ''

  // Glow selon rareté
  const RARITY_GLOW = {
    legende: '0 0 12px 4px #7a28b8, 0 0 24px 8px rgba(122,40,184,0.5)',
    pepite:  '0 0 12px 4px #D4A017, 0 0 24px 8px rgba(212,160,23,0.5)',
    pépite:  '0 0 12px 4px #D4A017, 0 0 24px 8px rgba(212,160,23,0.5)',
    papyte:  '0 0 10px 3px #909090, 0 0 20px 6px rgba(144,144,144,0.4)',
  }
  const evo    = p._evolution_bonus ?? p.evolution_bonus ?? 0
  const stadB  = showStad && (p.stadiumBonus || hasStadBonus(p, stadDef)) ? 10 : 0

  const mainNote  = getNoteForJob(p, job, evo) + extraNote + stadB
  // Couleur note : bleu si stade, orange si poste secondaire, sinon couleur du poste
  const isSecondaryRole = forceRole && forceRole !== p.job
  const noteColor = (stadB > 0 || _forceStadColor) ? '#4fc3f7' : isSecondaryRole ? '#E87722' : accent
  // On n'affiche que la note du poste joué (forceRole ou job principal)
  // job2Note uniquement si pas de forceRole ET job2 existe
  const job2      = (!forceRole && p.job2 && p.job2 !== job) ? p.job2 : null
  const job2Note  = job2 ? getNoteForJob(p, job2, evo) + extraNote + stadB : null

  const faceUrl     = getFaceUrl(p)
  const flagUrl     = getFlagUrl(p.country_code)
  const clubLogoUrl = getClubLogoUrl(p)
  const firstname   = (p.firstname || '').toUpperCase()
  const surname     = (p.surname_real || p.name || '').toUpperCase()
  const opacity     = used ? 'opacity:0.35;' : ''

  // Taille police nom adaptée à la longueur
  const surnameFsN = surname.length > 11 ? 34 : surname.length > 8 ? 42 : 50

  // ── Positions mesurées sur template 507x657 ──────────────
  // Bandeau nom : y=1→199, centre y=100
  //   prénom : y=55 (premier tiers du bandeau)
  //   nom    : y=110 (deuxième tiers)
  //
  // Haut octogone central : y=380 → photo top=165, hauteur=215 (jusqu'à y=380)
  //
  // Octogone central note : y=450→629, x=150→359
  //   note centrée : top=450, h=179
  //
  // Rectangles latéraux (remplacent octogones) :
  //   largeur=110, hauteur=90, y=468
  //   gauche  : x=55
  //   droit   : x=342

  const photoTop = ax(155)
  const photoW   = ax(260)
  const photoH   = ax(235)   // s'arrête au haut de l'octogone (y≈380)

  // Octogone central mesuré: y=380→639, x=100→409, centre x=254, y=509
  // Note : dans le tiers supérieur de l'octogone
  const noteTop  = ax(390)
  const noteH    = ax(180)
  const noteX    = ax(100)
  const noteW    = ax(309)

  // Drapeaux/logo : alignés sur le centre de la note (y centre note = 390+90=480)
  const rectH    = ax(85)
  const rectW    = ax(95)
  const rectY    = ax(435)
  const rectLX   = ax(38)    // moins collé au bord
  const rectRX   = ax(374)   // moins collé au bord
  const rectR    = ax(6)

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none;${glowStyle}">
  <div style="position:absolute;top:${opts._cardOffset||0}px;left:0;width:${width}px;height:${height}px">

  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill" draggable="false">

  ${stadB > 0 ? `<div style="position:absolute;left:${ax(216)}px;top:${rectY}px;width:${rectH}px;height:${rectH}px;z-index:10;font-size:${px(rectH)};line-height:1;display:flex;align-items:center;justify-content:center">🏟️</div>` : ''}

  <!-- Prénom : premier tiers du bandeau -->
  <div style="position:absolute;top:${px(48)};left:0;right:0;text-align:center;z-index:4;padding:0 ${px(50)}">
    <span style="font-size:${px(20)};font-weight:700;color:${accent};letter-spacing:${px(2)};line-height:1;text-shadow:0 1px 4px #000;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${firstname}</span>
  </div>

  <!-- Nom : deuxième tiers du bandeau -->
  <div style="position:absolute;top:${px(80)};left:0;right:0;text-align:center;z-index:4;padding:0 ${px(10)}">
    <span style="font-size:${px(surnameFsN)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 8px #000;font-family:Arial Black,Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${surname}</span>
  </div>

  <!-- Portrait : top aligné sous le bandeau, bas = haut octogone -->
  ${faceUrl ? `<img src="${faceUrl}"
    style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);
    width:${photoW}px;height:${photoH}px;object-fit:cover;object-position:top center;z-index:2"
    onerror="this.style.display='none'">` : ''}

  <!-- Note principale : centrée dans l'octogone du template -->
  <div style="position:absolute;left:${noteX}px;top:${noteTop}px;width:${noteW}px;height:${noteH}px;
    z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <span style="font-size:${px(80)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 8px rgba(0,0,0,0.9)">${mainNote}</span>
  </div>

  <!-- Note secondaire : carré arrondi rouge sous l'octogone -->
  ${job2Note !== null ? `
  <div style="position:absolute;left:50%;transform:translateX(-50%);top:${px(530)};
    width:${px(90)};height:${px(60)};z-index:5;
    border-radius:${px(8)};
    background:#0a0a0a;border:${px(2)} solid ${JOB_ACCENT[job2]||'#e03030'};
    display:flex;align-items:center;justify-content:center">
    <span style="font-size:${px(32)};font-weight:900;color:${JOB_ACCENT[job2]||'#e03030'};font-family:Arial Black,Arial;line-height:1">${job2Note}</span>
  </div>` : ''}

  <!-- Drapeau : sans fond -->
  <div style="position:absolute;left:${rectLX}px;top:${rectY}px;width:${rectW}px;height:${rectH}px;z-index:3;
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${flagUrl
      ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:${rectR}px">`
      : `<span style="font-size:${px(22)}">🌍</span>`}
  </div>

  <!-- Logo club : sans fond -->
  <div style="position:absolute;left:${rectRX}px;top:${rectY}px;width:${rectW}px;height:${rectH}px;z-index:3;
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${clubLogoUrl
      ? `<img src="${clubLogoUrl}" style="width:100%;height:100%;object-fit:contain">`
      : `<span style="font-size:${px(14)};font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
  </div>

</div></div>`
}

export function createPlayerCardEl(p, opts = {}) {
  const { onClick } = opts
  const div = document.createElement('div')
  div.style.cssText = 'display:inline-block;cursor:' + (onClick ? 'pointer' : 'default')
  div.innerHTML = renderPlayerCard(p, opts)
  if (onClick) div.addEventListener('click', () => onClick(p))
  return div
}
