/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Deux gabarits distincts :
 *   - PC  : 372x574, rectangulaire (photo + note au-dessus de 2 carrés)
 *   - Mobile (compactSquare) : 372x372, carré (note énorme + photo en bas
 *     + 3 carrés : pays / note secondaire / club)
 * Positions mesurées par analyse programmatique des gabarits fournis.
 */
import { getPortrait } from '../lib/portrait.js'
import { generateSilhouetteSVG } from './silhouette.js'

const BASE = import.meta.env.BASE_URL

const CARD_TEMPLATES = {
  GK:  BASE + 'cards/card-GK.png',
  DEF: BASE + 'cards/card-DEF.png',
  MIL: BASE + 'cards/card-MIL.png',
  ATT: BASE + 'cards/card-ATT.png',
}
const CARD_TEMPLATES_MOBILE = {
  GK:  BASE + 'cards/card-mobile-GK.png',
  DEF: BASE + 'cards/card-mobile-DEF.png',
  MIL: BASE + 'cards/card-mobile-MIL.png',
  ATT: BASE + 'cards/card-mobile-ATT.png',
}

const JOB_ACCENT = {
  GK:  '#c0c0c0',
  DEF: '#e03030',
  MIL: '#D4A017',
  ATT: '#3fbf5f',
}

// Fond de la zone centrale (derrière la photo/silhouette) selon la rareté —
// les gabarits ont un centre transparent, ce fond doit donc être posé
// explicitement par-dessus.
const RARITY_BG = {
  normal: '#0a0a0a',
  pepite: '#D4A017',
  pépite: '#D4A017',
  papyte: '#9aa4b0',
  legende: '#7a28b8',
  légende: '#7a28b8',
}

const RARITY_GLOW = {
  legende: '#7a28b8', légende: '#7a28b8',
  pepite:  '#D4A017', pépite:  '#D4A017',
  papyte:  '#c8d0dc',
}

function getFlagUrl(code) {
  if (!code || code.length < 2) return null
  return `https://flagsapi.com/${code.slice(0, 2).toUpperCase()}/flat/64.png`
}

function getClubLogoUrl(p) {
  const url = import.meta?.env?.VITE_SUPABASE_URL || ''
  const logo = p?.clubs?.logo_url || p?.clubLogo
  if (!logo) return null
  if (logo.startsWith('http') || logo.startsWith('data:')) return logo
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
  const { width = 160, showStad = false, stadDef = null, used = false, extraNote = 0, role: forceRole = null, _forceStadColor = false, portraitOverride = null } = opts
  if (!p) return `<div style="width:${width}px;height:${Math.round(width*1.05)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  const job    = forceRole || p._line || p.job || 'MIL'
  const accent = JOB_ACCENT[job] || '#D4A017'
  const bgFill = RARITY_BG[p.rarity] || RARITY_BG.normal
  const glowColor = RARITY_GLOW[p.rarity]
  const glowStyle = glowColor ? `filter:drop-shadow(0 0 5px ${glowColor}) drop-shadow(0 0 12px ${glowColor});` : ''
  const opacity   = used ? 'opacity:0.35;' : ''

  const evo    = p._evolution_bonus ?? p.evolution_bonus ?? 0
  const stadB  = showStad && (p.stadiumBonus || hasStadBonus(p, stadDef)) ? 10 : 0
  const mainNote  = getNoteForJob(p, job, evo) + extraNote + stadB
  const isSecondaryRole = forceRole && forceRole !== p.job
  const noteColor = (stadB > 0 || _forceStadColor) ? '#4fc3f7' : isSecondaryRole ? '#E87722' : accent
  const job2      = (!forceRole && p.job2 && p.job2 !== job) ? p.job2 : null
  const job2Note  = job2 ? getNoteForJob(p, job2, evo) + extraNote + stadB : null

  const faceUrl     = portraitOverride || getPortrait(p)
  const useSilhouette = !faceUrl && p.rarity === 'normal'
  const flagUrl     = getFlagUrl(p.country_code)
  const clubLogoUrl = getClubLogoUrl(p)
  const displayName = (p.surname_real || p.name || '').toUpperCase()

  const stadiumBadgeSVG = `
    <div style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center">
      <div style="position:absolute;inset:-40%;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.65) 0%,transparent 68%);pointer-events:none"></div>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;width:90%;height:90%;display:block">
        <ellipse cx="16" cy="29.5" rx="12" ry="2.5" fill="#999" opacity="0.35"/>
        <ellipse cx="16" cy="19" rx="13" ry="9" fill="#3a7bbf"/>
        <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="#4a8fd4"/>
        <ellipse cx="16" cy="14" rx="7.5" ry="3" fill="#2ea44f"/>
        <line x1="6" y1="11" x2="4" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
        <line x1="11" y1="9.5" x2="11" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
        <line x1="21" y1="9.5" x2="21" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
        <line x1="26" y1="11" x2="28" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
        <rect x="14" y="22" width="4" height="5" rx="1" fill="#1a4a80"/>
        <line x1="9" y1="6" x2="9" y2="13" stroke="#333" stroke-width="1.3"/>
        <polygon points="9,6 14.5,8.5 9,11" fill="#FFD700"/>
        <line x1="23" y1="6" x2="23" y2="13" stroke="#333" stroke-width="1.3"/>
        <polygon points="23,6 17.5,8.5 23,11" fill="#FFD700"/>
        <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
        <ellipse cx="16" cy="19" rx="13" ry="9" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
      </svg>
    </div>`

  // ══════════════════════════════════════════════════════════════════════
  // MODE MOBILE (compactSquare) : gabarit 372x372, note énorme + photo en
  // bas + 3 carrés (pays / note secondaire / club)
  // ══════════════════════════════════════════════════════════════════════
  if (opts.compactSquare) {
    const ratio  = width / 372
    const height = width  // carré parfait
    const ax  = (n) => Math.round(n * ratio)
    const fpx = (n, min) => Math.max(min, ax(n)) + 'px'
    const tmpl = CARD_TEMPLATES_MOBILE[job] || CARD_TEMPLATES_MOBILE.MIL

    // Zones mesurées sur le gabarit mobile (372x372) :
    //   nom          : y = 0     → 15.5%
    //   note énorme  : y = 15.5% → 42%
    //   photo (bas)  : y = 42%   → 70%      x = 9%   → 91%
    //   carrés       : y = 70%   → 84%
    //     pays       : x = 9.5%  → 35.2%
    //     note sec.  : x = 40.0% → 60.0%
    //     club       : x = 65.6% → 90.5%
    const photoTop = ax(372 * 0.42)
    const photoW   = ax(372 * 0.82)
    const photoH   = ax(372 * (0.70 - 0.42))
    const noteTop  = ax(372 * 0.155)
    const noteH    = ax(372 * (0.42 - 0.155))
    const squareTop  = ax(372 * 0.70)
    const zoneTopH   = ax(372 * (0.84 - 0.70))
    const zoneLX0 = ax(372*0.095), zoneLW0 = ax(372*(0.352-0.095))
    const zoneMX0 = ax(372*0.400), zoneMW0 = ax(372*(0.600-0.400))
    const zoneRX0 = ax(372*0.656), zoneRW0 = ax(372*(0.905-0.656))
    // Vrai carré (voir commentaire équivalent en mode PC plus bas)
    const squareH = Math.min(zoneTopH, zoneLW0, zoneMW0, zoneRW0)
    const zoneLX  = zoneLX0 + (zoneLW0 - squareH) / 2
    const zoneMX  = zoneMX0 + (zoneMW0 - squareH) / 2
    const zoneRX  = zoneRX0 + (zoneRW0 - squareH) / 2
    const zoneLW  = squareH, zoneMW = squareH, zoneRW = squareH

    const silhouetteSVG = useSilhouette
      ? generateSilhouetteSVG({
          style: p.clubs?.kit_style, color1: p.clubs?.kit_color1, color2: p.clubs?.kit_color2,
          color3: p.clubs?.kit_color3, shorts: p.clubs?.kit_shorts, socks: p.clubs?.kit_socks,
        }, Math.round(photoW), p.id || p.firstname || 'sil')
      : ''

    return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none;${glowStyle}">

    <!-- Fond rareté derrière photo/note -->
    <div style="position:absolute;left:0;top:${ax(372*0.155)}px;width:100%;height:${ax(372*0.70)-ax(372*0.155)}px;background:${bgFill};z-index:1"></div>

    <!-- Photo/silhouette : ancrée en BAS de sa zone (peut être rognée en haut) -->
    ${faceUrl ? `<img src="${faceUrl}" style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);
      width:${photoW}px;height:${photoH}px;object-fit:cover;object-position:bottom center;z-index:2" onerror="this.style.display='none'">` : ''}
    ${useSilhouette ? `<div style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);width:${photoW}px;height:${photoH}px;overflow:hidden;z-index:2">
      <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%)">${silhouetteSVG}</div>
    </div>` : ''}

    <!-- Gabarit -->
    <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill;z-index:3" draggable="false">

    <!-- Nom -->
    <div style="position:absolute;top:0;left:0;right:0;height:${ax(372*0.155)}px;z-index:4;display:flex;align-items:center;justify-content:center;padding:0 ${ax(10)}px">
      <span style="font-size:${fpx(20,11)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 5px #000;font-family:Arial Black,Arial;
        overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${displayName}</span>
    </div>

    <!-- Note principale : énorme, dominante -->
    <div style="position:absolute;left:0;top:${noteTop}px;width:100%;height:${noteH}px;z-index:4;display:flex;align-items:center;justify-content:center">
      <span style="font-size:${fpx(66,26)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 8px rgba(0,0,0,0.95)">${mainNote}</span>
    </div>

    ${stadB > 0 ? `<div style="position:absolute;left:${zoneMX + zoneMW/2 - ax(16)}px;top:${squareTop - ax(14)}px;width:${ax(32)}px;height:${ax(32)}px;z-index:6">${stadiumBadgeSVG}</div>` : ''}

    <!-- Pays -->
    <div style="position:absolute;left:${zoneLX}px;top:${squareTop}px;width:${zoneLW}px;height:${squareH}px;z-index:5;overflow:hidden;display:flex;align-items:center;justify-content:center">
      ${flagUrl ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:cover">` : `<span style="font-size:${fpx(16,10)}">🌍</span>`}
    </div>
    <!-- Note secondaire (si job2) -->
    ${job2Note !== null ? `<div style="position:absolute;left:${zoneMX}px;top:${squareTop}px;width:${zoneMW}px;height:${squareH}px;z-index:5;display:flex;align-items:center;justify-content:center">
      <span style="font-size:${fpx(20,12)};font-weight:900;color:${JOB_ACCENT[job2]||'#e03030'};font-family:Arial Black,Arial;line-height:1">${job2Note}</span>
    </div>` : ''}
    <!-- Club -->
    <div style="position:absolute;left:${zoneRX}px;top:${squareTop}px;width:${zoneRW}px;height:${squareH}px;z-index:5;overflow:hidden;display:flex;align-items:center;justify-content:center">
      ${clubLogoUrl ? `<img src="${clubLogoUrl}" style="width:100%;height:100%;object-fit:cover">`
        : `<span style="font-size:${fpx(12,9)};font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
    </div>
  </div>`
  }

  // ══════════════════════════════════════════════════════════════════════
  // MODE PC : gabarit 372x574, photo + note au-dessus de 2 carrés
  // ══════════════════════════════════════════════════════════════════════
  const ratio  = width / 372
  const height = Math.round(width * 574 / 372)
  const ax     = (n) => Math.round(n * ratio)
  const px     = (n) => ax(n) + 'px'
  const fpx    = (n, min) => Math.max(min, ax(n)) + 'px'
  const tmpl   = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL
  const nameFsN = displayName.length > 14 ? 30 : displayName.length > 10 ? 38 : 46

  // Zones mesurées sur le gabarit PC (372x574) :
  //   nom          : y = 0     → 15.5%
  //   photo        : y = 15.5% → 62%      x = 9%   → 91%
  //   note (bande) : y = 63%   → 77.5%
  //   carrés       : y = 78%   → 89.5%
  //     pays       : x = 9.5%  → 32.3%
  //     club       : x = 66.9% → 90.5%
  const photoTop = ax(574 * 0.155)
  const photoW   = ax(372 * 0.82)
  const photoH   = ax(574 * (0.62 - 0.155))

  const silhouetteSVG = useSilhouette
    ? generateSilhouetteSVG({
        style: p.clubs?.kit_style, color1: p.clubs?.kit_color1, color2: p.clubs?.kit_color2,
        color3: p.clubs?.kit_color3, shorts: p.clubs?.kit_shorts, socks: p.clubs?.kit_socks,
      }, Math.round(photoW), p.id || p.firstname || 'sil')
    : ''

  const noteRectTop = ax(574 * 0.63)
  const noteRectH   = ax(574 * (0.775 - 0.63))

  const squareTop = ax(574 * 0.78)
  const zoneTopH  = ax(574 * (0.895 - 0.78))
  const zoneLX0 = ax(372*0.095), zoneLW0 = ax(372*(0.3226-0.095))
  const zoneRX0 = ax(372*0.6694), zoneRW0 = ax(372*(0.905-0.6694))
  // Vrai carré : la zone mesurée n'est pas exactement carrée (largeur >
  // hauteur), on prend donc la plus petite dimension et on centre dedans —
  // sinon le drapeau/logo s'étire en rectangle (retour testeur confirmé
  // sur le premier gabarit, même correctif nécessaire ici).
  const squareH = Math.min(zoneTopH, zoneLW0)
  const zoneLX  = zoneLX0 + (zoneLW0 - squareH) / 2
  const zoneRX  = zoneRX0 + (zoneRW0 - squareH) / 2
  const zoneLW  = squareH
  const zoneRW  = squareH

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none;${glowStyle}">
  <div style="position:absolute;top:${opts._cardOffset||0}px;left:0;width:${width}px;height:${height}px">

  <!-- Fond de la zone centrale, selon la rareté -->
  <div style="position:absolute;left:0;top:${photoTop}px;width:100%;height:${(noteRectTop+noteRectH)-photoTop}px;background:${bgFill};z-index:1"></div>

  <!-- Portrait / silhouette -->
  ${faceUrl ? `<img src="${faceUrl}" style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);
    width:${photoW}px;height:${photoH}px;object-fit:cover;object-position:top center;z-index:2" onerror="this.style.display='none'">` : ''}
  ${useSilhouette ? `<div style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);width:${photoW}px;height:${photoH}px;overflow:hidden;z-index:2">
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%)">${silhouetteSVG}</div>
  </div>` : ''}

  <!-- Gabarit -->
  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill;z-index:3" draggable="false">

  <!-- Nom -->
  <div style="position:absolute;top:0;left:0;right:0;height:${px(574*0.155)};z-index:4;display:flex;align-items:center;justify-content:center;padding:0 ${px(18)}">
    <span style="font-size:${fpx(nameFsN,12)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 6px #000;font-family:Arial Black,Arial;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center">${displayName}</span>
  </div>

  ${stadB > 0 ? `<div style="position:absolute;left:${width/2 - ax(21)}px;top:${noteRectTop - ax(18)}px;width:${ax(42)}px;height:${ax(42)}px;z-index:6">${stadiumBadgeSVG}</div>` : ''}

  <!-- Note principale : bande centrée, au-dessus des carrés -->
  <div style="position:absolute;left:0;top:${noteRectTop}px;width:100%;height:${noteRectH}px;z-index:5;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <span style="font-size:${fpx(46,17)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 6px rgba(0,0,0,0.9)">${mainNote}</span>
    ${job2Note !== null ? `<span style="font-size:${fpx(16,9)};font-weight:900;color:${JOB_ACCENT[job2]||'#e03030'};font-family:Arial Black,Arial;line-height:1;margin-top:${px(2)}">${job2Note}</span>` : ''}
  </div>

  <!-- Pays -->
  <div style="position:absolute;left:${zoneLX}px;top:${squareTop}px;width:${zoneLW}px;height:${squareH}px;z-index:5;overflow:hidden;display:flex;align-items:center;justify-content:center">
    ${flagUrl ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:cover">` : `<span style="font-size:${fpx(20,11)}">🌍</span>`}
  </div>
  <!-- Club -->
  <div style="position:absolute;left:${zoneRX}px;top:${squareTop}px;width:${zoneRW}px;height:${squareH}px;z-index:5;overflow:hidden;display:flex;align-items:center;justify-content:center">
    ${clubLogoUrl ? `<img src="${clubLogoUrl}" style="width:100%;height:100%;object-fit:cover">`
      : `<span style="font-size:${fpx(13,9)};font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
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
