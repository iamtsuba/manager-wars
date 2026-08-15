/**
 * player-card.js — Composant universel carte joueur Manager Wars
 * Deux gabarits : PC (372x574) et Mobile (372x372, carré).
 * Position/échelle de chaque composant ET visibilité par écran sont
 * pilotées depuis Admin > Joueurs > Design Card (voir cardDesign.js).
 * Les tailles/positions codées ci-dessous ne sont que le POINT DE DÉPART
 * (base size avant application du scale de l'éditeur) — jamais la
 * position finale, qui vient toujours de la config.
 */
import { getPortrait } from '../lib/portrait.js'
import { generateSilhouetteSVG } from './silhouette.js'
import { getCardDesignSync, isComponentVisible, preloadCardDesign } from '../lib/cardDesign.js'

// Précharge dès le premier import de ce module (fire-and-forget) : le tout
// premier rendu peut retomber sur les valeurs par défaut le temps que la
// requête aboutisse (voir getCardDesignSync), aucun risque de blocage.
preloadCardDesign()

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

const JOB_ACCENT = { GK: '#c0c0c0', DEF: '#e03030', MIL: '#D4A017', ATT: '#3fbf5f' }

// Dégradés métallisés (plus sombres, avec reflets) au lieu d'aplats plats —
// retour testeur : "trop simple, je veux un effet plus métalisé et plus
// foncé". Diagonal 135deg pour un effet de reflet de tôle brossée.
const RARITY_BG = {
  normal:  '#0a0a0a',
  pepite:  'linear-gradient(135deg, #2b2005 0%, #8a6710 22%, #D4A017 45%, #f6d878 52%, #D4A017 60%, #8a6710 80%, #2b2005 100%)',
  pépite:  'linear-gradient(135deg, #2b2005 0%, #8a6710 22%, #D4A017 45%, #f6d878 52%, #D4A017 60%, #8a6710 80%, #2b2005 100%)',
  papyte:  'linear-gradient(135deg, #14171c 0%, #4a525e 22%, #9aa4b0 45%, #e4e9f0 52%, #9aa4b0 60%, #4a525e 80%, #14171c 100%)',
  legende: 'linear-gradient(135deg, #180a26 0%, #4a1878 22%, #7a28b8 45%, #c090ec 52%, #7a28b8 60%, #4a1878 80%, #180a26 100%)',
  légende: 'linear-gradient(135deg, #180a26 0%, #4a1878 22%, #7a28b8 45%, #c090ec 52%, #7a28b8 60%, #4a1878 80%, #180a26 100%)',
}
const RARITY_GLOW = { legende: '#7a28b8', légende: '#7a28b8', pepite: '#D4A017', pépite: '#D4A017', papyte: '#c8d0dc' }

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
  const keyMap = { GK: 'g', DEF: 'd', MIL: 'm', ATT: 'a' }
  const key = 'note_' + (keyMap[job] || job.toLowerCase())
  const base = Number(p[key]) || 0
  return base + ((job === p.job || job === p.job2) ? evo : 0)
}
function hasStadBonus(p, stadDef) {
  if (!stadDef) return false
  return (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
         (stadDef.country_code && p.country_code === stadDef.country_code)
}

// Taille de police du nom : calcul CONTINU selon la largeur disponible
// réelle (et non plus 2-3 paliers fixes) — garantit qu'un nom long
// s'affiche toujours EN ENTIER (jamais tronqué avec "..."), juste plus
// petit. 0.60 ≈ ratio largeur/hauteur moyen d'un caractère majuscule en
// gras (Arial Black) ; ajusté empiriquement pour rester lisible.
function autoFitNameSize(name, availWidthPx, maxSize, minSize) {
  if (!name) return maxSize
  const estimated = availWidthPx / (name.length * 0.60)
  return Math.max(minSize, Math.min(maxSize, Math.round(estimated)))
}

export const stadiumBadgeSVG = `
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

export function renderPlayerCard(p, opts = {}) {
  const {
    width = 160, showStad = false, stadDef = null, used = false, extraNote = 0,
    role: forceRole = null, _forceStadColor = false, portraitOverride = null,
    context = 'collection',   // écran d'appel (voir CONTEXTS dans cardDesign.js)
  } = opts
  if (!p) return `<div style="width:${width}px;height:${Math.round(width*1.05)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  const mode = opts.compactSquare ? 'mobile' : 'pc'
  const design = getCardDesignSync(mode)
  const cmp = (name) => design.components[name] || { x: 0.5, y: 0.5, scale: 1 }
  const vis = (name) => isComponentVisible(mode, name, context)

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

  // Visibilité finale = réglage de l'éditeur (par écran) ET logique métier
  const showName   = vis('name')
  const showPhoto  = vis('photo') && (!!faceUrl || useSilhouette)
  const showNote   = vis('note')
  const showNote2  = vis('note2') && job2Note !== null
  const showFlag   = vis('flag')
  const showClub   = vis('club')
  const showStadiumBadge = vis('stadium_badge') && stadB > 0

  const tmpl = mode === 'mobile'
    ? (CARD_TEMPLATES_MOBILE[job] || CARD_TEMPLATES_MOBILE.MIL)
    : (CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL)

  const ratio  = width / 372
  const height = mode === 'mobile' ? width : Math.round(width * 574 / 372)
  const cardHRef = mode === 'mobile' ? 372 : 574   // hauteur de référence du gabarit
  const ax  = (n) => Math.round(n * ratio)
  const fpx = (n, min) => Math.max(min, ax(n)) + 'px'

  // Positionne un composant : x_pct/y_pct = CENTRE (fraction de largeur /
  // hauteur du gabarit de référence), baseSizePx = taille de base avant
  // application du scale de l'éditeur.
  function place(component, baseWpx, baseHpx) {
    const c = cmp(component)
    const w = baseWpx * c.scale
    const h = baseHpx * c.scale
    const cx = c.x * width
    const cy = c.y * height
    return { left: cx - w / 2, top: cy - h / 2, w, h }
  }

  // ── Photo/silhouette ──
  const photoBaseW = ax(372 * 0.82)
  const photoBaseH = mode === 'mobile' ? ax(372 * (0.70 - 0.155)) : ax(574 * (0.62 - 0.155))
  const photoBox = place('photo', photoBaseW, photoBaseH)
  const silhouetteSVG = useSilhouette
    ? generateSilhouetteSVG({
        style: p.clubs?.kit_style, color1: p.clubs?.kit_color1, color2: p.clubs?.kit_color2,
        color3: p.clubs?.kit_color3, shorts: p.clubs?.kit_shorts, socks: p.clubs?.kit_socks,
      }, Math.round(photoBox.w), p.id || p.firstname || 'sil')
    : ''

  // ── Nom : taille auto-adaptée à la longueur (jamais tronqué) ──
  const nameC = cmp('name')
  const namePadding = ax(mode === 'mobile' ? 10 : 18)
  const nameAvailW = width - namePadding * 2
  const nameMaxSize = ax(mode === 'mobile' ? 20 : 46) * nameC.scale
  const nameMinSize = ax(9)
  const nameFontSize = autoFitNameSize(displayName, nameAvailW, nameMaxSize, nameMinSize)
  const nameBaseH = ax(cardHRef === 372 ? 372*0.155 : 574*0.155)
  const nameBox = place('name', width, nameBaseH)

  // ── Note principale / secondaire ──
  const noteBaseW = width
  const noteBaseH = mode === 'mobile' ? ax(372*(0.70-0.155)) : ax(574*(0.775-0.60))
  const noteBox = place('note', noteBaseW, noteBaseH)
  const noteFontSize = ax(mode === 'mobile' ? 48 : 58) * cmp('note').scale
  const note2Box = place('note2', ax(80), ax(28))
  const note2FontSize = ax(16) * cmp('note2').scale

  // ── Carrés pays / club : remplissent tout leur emplacement (retour
  // testeur), la config pilote leur CENTRE et un facteur d'échelle sur la
  // taille de base déjà calculée pour "remplir le carré". ──
  // ×1.3 : mes mesures pixel initiales du gabarit sous-estimaient la vraie
  // taille du carré dessiné dans le cadre, laissant un espace visible
  // entre le drapeau (qui remplit pourtant SA zone à 100%) et le cadre
  // autour — retour testeur confirmé même hors cache (navigation privée).
  const squareBase = (mode === 'mobile'
    ? Math.max(ax(372*(0.84-0.70)), ax(372*(0.352-0.095)))
    : Math.max(ax(574*(0.895-0.78)), ax(372*(0.3226-0.095)))) * 1.3
  const flagBox = place('flag', squareBase, squareBase)
  const clubBox = place('club', squareBase, squareBase)

  // ── Badge stade ──
  const stadBox = place('stadium_badge', ax(38), ax(38))

  // ── Fond de la zone centrale (derrière photo/note), selon la rareté —
  // du bas de la zone nom jusqu'au bas de la zone carrés, pour couvrir
  // aussi l'espace entre les 2 carrés. ──
  // Le fond doit couvrir la vraie zone transparente DU GABARIT (fixe),
  // PAS la position actuelle des composants (déplaçables par l'éditeur) —
  // sinon déplacer le nom ou la note laisse un trou de transparence entre
  // les deux (retour testeur confirmé).
  const bgTop = mode === 'mobile' ? ax(372 * 0.155) : ax(574 * 0.155)
  const bgBottom = mode === 'mobile' ? ax(372 * 0.84) : ax(574 * 0.895)

  return `<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacity}user-select:none;${glowStyle}">
  <div style="position:absolute;top:${opts._cardOffset||0}px;left:0;width:${width}px;height:${height}px">

  <div style="position:absolute;left:0;top:${bgTop}px;width:100%;height:${bgBottom-bgTop}px;background:${bgFill};z-index:1"></div>

  ${showPhoto && faceUrl ? `<img src="${faceUrl}" style="position:absolute;left:${photoBox.left}px;top:${photoBox.top}px;
    width:${photoBox.w}px;height:${photoBox.h}px;object-fit:cover;object-position:${mode==='mobile'?'bottom':'top'} center;z-index:2"
    onerror="this.style.display='none'">` : ''}
  ${showPhoto && useSilhouette ? `<div style="position:absolute;left:${photoBox.left}px;top:${photoBox.top}px;width:${photoBox.w}px;height:${photoBox.h}px;overflow:hidden;z-index:2">
    <div style="position:absolute;${mode==='mobile'?'bottom':'top'}:0;left:50%;transform:translateX(-50%)">${silhouetteSVG}</div>
  </div>` : ''}

  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill;z-index:3" draggable="false">

  ${showName ? `<div style="position:absolute;left:${nameBox.left}px;top:${nameBox.top}px;width:${nameBox.w}px;height:${nameBox.h}px;z-index:4;
    display:flex;align-items:center;justify-content:center;padding:0 ${namePadding}px;box-sizing:border-box">
    <span style="font-size:${nameFontSize}px;font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 6px #000;font-family:Arial Black,Arial;
      white-space:nowrap;text-align:center">${displayName}</span>
  </div>` : ''}

  ${showStadiumBadge ? `<div style="position:absolute;left:${stadBox.left}px;top:${stadBox.top}px;width:${stadBox.w}px;height:${stadBox.h}px;z-index:6">${stadiumBadgeSVG}</div>` : ''}

  ${showNote ? `<div style="position:absolute;left:${noteBox.left}px;top:${noteBox.top}px;width:${noteBox.w}px;height:${noteBox.h}px;z-index:5;
    display:flex;align-items:center;justify-content:center">
    <span style="font-size:${noteFontSize}px;font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 6px rgba(0,0,0,0.9)">${mainNote}</span>
  </div>` : ''}
  ${showNote2 ? `<div style="position:absolute;left:${note2Box.left}px;top:${note2Box.top}px;width:${note2Box.w}px;height:${note2Box.h}px;z-index:5;
    display:flex;align-items:center;justify-content:center">
    <span style="font-size:${note2FontSize}px;font-weight:900;color:${JOB_ACCENT[job2]||'#e03030'};font-family:Arial Black,Arial;line-height:1">${job2Note}</span>
  </div>` : ''}

  ${showFlag ? `<div style="position:absolute;left:${flagBox.left}px;top:${flagBox.top}px;width:${flagBox.w}px;height:${flagBox.h}px;z-index:5;overflow:hidden;display:flex;align-items:center;justify-content:center">
    ${flagUrl ? `<img src="${flagUrl}" style="width:100%;height:100%;object-fit:fill">` : `<span style="font-size:${fpx(20,11)}">🌍</span>`}
  </div>` : ''}
  ${showClub ? `<div style="position:absolute;left:${clubBox.left}px;top:${clubBox.top}px;width:${clubBox.w}px;height:${clubBox.h}px;z-index:5;overflow:hidden;display:flex;align-items:center;justify-content:center">
    ${clubLogoUrl ? `<img src="${clubLogoUrl}" style="width:100%;height:100%;object-fit:cover">`
      : `<span style="font-size:${fpx(13,9)};font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
  </div>` : ''}

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
