/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Template 372x609px (nouveau design, remplace l'ancien octogone 507x657)
 * Positions mesurées par analyse programmatique des gabarits (voir zones
 * ci-dessous), en fractions de largeur/hauteur pour rester exactes quelle
 * que soit la taille de rendu demandée.
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

const JOB_ACCENT = {
  GK:  '#c0c0c0',
  DEF: '#e03030',
  MIL: '#D4A017',
  ATT: '#3fbf5f',
}

// Fond de la zone centrale (derrière la photo/silhouette) selon la rareté —
// le gabarit a désormais un centre transparent, donc ce fond doit être
// posé explicitement (avant, le PNG octogonal faisait déjà fond noir).
const RARITY_BG = {
  normal: '#0a0a0a',
  pepite: '#D4A017',
  pépite: '#D4A017',
  papyte: '#9aa4b0',
  legende: '#7a28b8',
  légende: '#7a28b8',
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

  // Nouveau ratio 372:609 (l'ancien gabarit était 507:657)
  if (!p) return `<div style="width:${width}px;height:${Math.round(width*609/372)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  const ratio  = width / 372
  const height = Math.round(width * 609 / 372)
  const ax     = (n) => Math.round(n * ratio)
  const px     = (n) => ax(n) + 'px'
  // Le texte passe par fpx() avec un plancher minimum de lisibilité — sans
  // ça, les polices en pur ratio deviennent illisibles sur les petites
  // cartes (retour testeurs confirmé aujourd'hui).
  const fpx    = (n, min) => Math.max(min, ax(n)) + 'px'

  const job    = forceRole || p._line || p.job || 'MIL'
  const accent = JOB_ACCENT[job] || '#D4A017'
  const tmpl   = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL
  const bgFill = RARITY_BG[p.rarity] || RARITY_BG.normal

  const RARITY_GLOW = {
    legende: '0 0 12px 4px #7a28b8, 0 0 24px 8px rgba(122,40,184,0.5)',
    légende: '0 0 12px 4px #7a28b8, 0 0 24px 8px rgba(122,40,184,0.5)',
    pepite:  '0 0 12px 4px #D4A017, 0 0 24px 8px rgba(212,160,23,0.5)',
    pépite:  '0 0 12px 4px #D4A017, 0 0 24px 8px rgba(212,160,23,0.5)',
    papyte:  '0 0 4px 2px #e8eaf0, 0 0 12px 6px #a8b4c4, 0 0 28px 10px rgba(168,180,196,0.6), 0 0 2px 1px #f0f2f5',
  }
  const glowColor = { legende:'#7a28b8', légende:'#7a28b8', pepite:'#D4A017', pépite:'#D4A017', papyte:'#c8d0dc' }[p.rarity]
  const glowStyle = glowColor ? `filter:drop-shadow(0 0 5px ${glowColor}) drop-shadow(0 0 12px ${glowColor});` : ''

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
  const opacity     = used ? 'opacity:0.35;' : ''

  // Taille police nom adaptée à la longueur (nom seul en pleine largeur)
  const nameFsN = displayName.length > 14 ? 30 : displayName.length > 10 ? 38 : 46

  // ── Positions mesurées sur le nouveau gabarit 372x609 (analyse pixel) ──
  //   Bande du haut (nom)         : y = 0    → 14.5%
  //   Zone centrale (photo)       : y = 14.5% → 78%     x = 9%  → 91%
  //   Bande basse (carrés+note)   : y = 80.5% → 89%
  //     carré pays (gauche)       : x = 10%  → 31.5%
  //     note (centre, entre les 2): x = 31.5% → 68.5%
  //     carré club (droit)        : x = 68.5% → 90%

  const photoTop = ax(609 * 0.145)
  const photoW   = ax(372 * 0.82)
  const photoH   = ax(609 * (0.78 - 0.145))

  const silhouetteSVG = useSilhouette
    ? generateSilhouetteSVG({
        style:  p.clubs?.kit_style,
        color1: p.clubs?.kit_color1,
        color2: p.clubs?.kit_color2,
        color3: p.clubs?.kit_color3,
        shorts: p.clubs?.kit_shorts,
        socks:  p.clubs?.kit_socks,
      }, Math.round(photoW), p.id || p.firstname || 'sil')
    : ''

  // Bande basse : carrés pays/club + note centrale
  const squareTop = ax(609 * 0.805)
  const squareH   = ax(609 * (0.89 - 0.805))
  const squareLX  = ax(372 * 0.10)
  const squareLW  = ax(372 * (0.315 - 0.10))
  const squareRX  = ax(372 * 0.685)
  const squareRW  = ax(372 * (0.90 - 0.685))
  const noteX     = ax(372 * 0.315)
  const noteW     = ax(372 * (0.685 - 0.315))

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none;${glowStyle}">
  <div style="position:absolute;top:${opts._cardOffset||0}px;left:0;width:${width}px;height:${height}px">

  <!-- Fond de la zone centrale, selon la rareté (le gabarit a un centre transparent) -->
  <div style="position:absolute;left:0;top:${photoTop}px;width:100%;height:${ax(609*0.78)-photoTop}px;background:${bgFill};z-index:1"></div>

  <!-- Portrait / silhouette -->
  ${faceUrl ? `<img src="${faceUrl}"
    style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);
    width:${photoW}px;height:${photoH}px;object-fit:cover;object-position:top center;z-index:2"
    onerror="this.style.display='none'">` : ''}
  ${useSilhouette ? `<div style="position:absolute;top:${photoTop}px;left:50%;transform:translateX(-50%);
    width:${photoW}px;height:${photoH}px;overflow:hidden;z-index:2">
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%)">${silhouetteSVG}</div>
  </div>` : ''}

  <!-- Gabarit (cadre + bande du haut + carrés), transparent au centre -->
  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill;z-index:3" draggable="false">

  <!-- Nom : pleine largeur, blanc, dans la bande du haut -->
  <div style="position:absolute;top:0;left:0;right:0;height:${px(609*0.145)};z-index:4;
    display:flex;align-items:center;justify-content:center;padding:0 ${px(18)}">
    <span style="font-size:${fpx(nameFsN,12)};font-weight:900;color:#fff;line-height:1;
      text-shadow:0 2px 6px #000;font-family:Arial Black,Arial;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center">${displayName}</span>
  </div>

  ${stadB > 0 ? `<div style="position:absolute;left:${noteX + noteW/2 - ax(21)}px;top:${squareTop - ax(6)}px;width:${ax(42)}px;height:${ax(42)}px;z-index:6;display:flex;align-items:center;justify-content:center">
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
    </div>
  </div>` : ''}

  <!-- Note principale : bande basse, entre les deux carrés -->
  <div style="position:absolute;left:${noteX}px;top:${squareTop}px;width:${noteW}px;height:${squareH}px;
    z-index:5;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <span style="font-size:${fpx(46,16)};font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 6px rgba(0,0,0,0.9)">${mainNote}</span>
    ${job2Note !== null ? `<span style="font-size:${fpx(16,9)};font-weight:900;color:${JOB_ACCENT[job2]||'#e03030'};font-family:Arial Black,Arial;line-height:1;margin-top:${px(2)}">${job2Note}</span>` : ''}
  </div>

  <!-- Drapeau : carré (bas gauche) -->
  <div style="position:absolute;left:${squareLX}px;top:${squareTop}px;width:${squareLW}px;height:${squareH}px;z-index:5;
    overflow:hidden;display:flex;align-items:center;justify-content:center">
    ${flagUrl
      ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:cover">`
      : `<span style="font-size:${fpx(20,11)}">🌍</span>`}
  </div>

  <!-- Logo club : carré (bas droit) -->
  <div style="position:absolute;left:${squareRX}px;top:${squareTop}px;width:${squareRW}px;height:${squareH}px;z-index:5;
    overflow:hidden;display:flex;align-items:center;justify-content:center">
    ${clubLogoUrl
      ? `<img src="${clubLogoUrl}" style="width:100%;height:100%;object-fit:cover">`
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
