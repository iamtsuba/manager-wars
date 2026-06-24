/**
 * Composant carte Manager Wars
 * Conforme au design GDD §4.1-4.3
 * Usage: renderCard(container, playerData, options)
 */

const JOB_COLORS = {
  ATT: '#1A6B3C',  // Vert
  MIL: '#D4A017',  // Jaune
  DEF: '#bb2020',  // Rouge
  GK:  '#111111'   // Noir
}
const JOB_LABELS = { ATT:'ATT', MIL:'MIL', DEF:'DEF', GK:'GK' }
const RARITY_BORDERS = {
  normal: '#cccccc',
  pepite: '#D4A017',
  papyte: '#909090',
  legende: '#7a28b8'
}
const COUNTRY_NAMES = {
  MA:'MAROC', FR:'FRANCE', AR:'ARGENTINE', PT:'PORTUGAL', BR:'BRESIL',
  ES:'ESPAGNE', DE:'ALLEMAGNE', GB:'ANGLETERRE', IT:'ITALIE',
  CM:'CAMEROUN', SN:'SENEGAL', NG:'NIGERIA', DK:'DANEMARK',
  NL:'PAYS-BAS', BE:'BELGIQUE', CI:"CÔTE D'IVOIRE", MA:'MAROC',
  AL:'ALBANIE', HR:'CROATIE', RS:'SERBIE', TR:'TURQUIE', MA:'MAROC'
}

// Import lazy pour éviter les imports circulaires — on l'injecte via la fonction utilitaire
let _generateAvatarSVG = null
export function registerAvatarGenerator(fn) { _generateAvatarSVG = fn }

/**
 * Génère le SVG d'une étoile avec note
 * @param {string} color - couleur de fond
 * @param {number} note - note affichée
 * @param {number} size - taille (grand=52, petit=32)
 */
function starSVG(color, note, size = 52) {
  const big = size === 52
  const pts = big
    ? '26,3 31.5,18 48,18 35,29 39.5,46 26,36 12.5,46 17,29 4,18 20.5,18'
    : '16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11'
  const tx = big ? 26 : 16
  const ty = big ? 32 : 20
  const fs = big ? 16 : 9
  const h  = big ? 50 : 31
  return `<svg width="${size}" height="${h}" viewBox="0 0 ${size} ${h}" style="display:block">
    <polygon points="${pts}" fill="${color}" stroke="#0005" stroke-width="${big?2:1.5}"/>
    <text x="${tx}" y="${ty}" text-anchor="middle" font-size="${fs}" font-weight="900"
      fill="white" font-family="Arial Black,Arial">${note}</text>
  </svg>`
}

/**
 * Rendu HTML d'une carte joueur
 * @param {Object} player - données joueur depuis Supabase
 * @param {Object} opts - { size:'sm'|'md', showNotes:bool, portraitUrl:string, clubLogoUrl:string }
 */
export function renderCardHTML(player, opts = {}) {
  const {
    size = 'md',
    showNotes = false,
    portraitUrl = null,
    clubLogoUrl = null
  } = opts

  const rarity   = player.rarity || 'normal'
  const border   = RARITY_BORDERS[rarity]
  const job1     = player.job || 'ATT'
  const job2     = player.job2
  const note1    = player.current_note ?? (job1 === 'ATT' ? player.note_a : job1 === 'MIL' ? player.note_m : job1 === 'DEF' ? player.note_d : player.note_g)
  const note2    = job2 ? (job2 === 'ATT' ? player.note_a : job2 === 'MIL' ? player.note_m : job2 === 'DEF' ? player.note_d : player.note_g) : null
  const c1       = JOB_COLORS[job1]
  const c2       = job2 ? JOB_COLORS[job2] : null
  const country  = player.country_code || ''
  const cname    = COUNTRY_NAMES[country] || country
  const w        = size === 'sm' ? 120 : 160

  // Portrait — avatar_config SVG en priorité, sinon URL image, sinon placeholder
  let portraitHTML
  if (!portraitUrl && player.avatar_config && _generateAvatarSVG) {
    const kit = opts.kitConfig || null
    const svg = _generateAvatarSVG(player.avatar_config, kit, w === 120 ? 100 : 130)
    portraitHTML = `<div style="width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center;overflow:hidden">${svg}</div>`
  } else if (portraitUrl) {
    portraitHTML = `<img src="${portraitUrl}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block">`
  } else {
    portraitHTML = `<div style="width:100%;height:100%;background:#c5d8ec;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>`
  }

  // Club
  const clubHTML = clubLogoUrl
    ? `<img src="${clubLogoUrl}" alt="" class="mw-club-logo">`
    : `<div class="mw-club-badge">${player.club_encoded_name || 'CLUB'}</div>`

  // Rareté badge footer
  const rarityBadge = rarity === 'legende'
    ? `<div style="background:#f5c518;color:#7a5800;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">LÉGENDE</div>`
    : rarity === 'pepite'
    ? `<div style="background:#D4A017;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PÉPITE</div>`
    : rarity === 'papyte'
    ? `<div style="background:#909090;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PAPYTE</div>`
    : clubHTML

  const scaleStyle = size === 'sm' ? 'transform:scale(0.75);transform-origin:top left;' : ''

  return `<div class="mw-card" style="background:${border};width:${w}px;${scaleStyle}">
    <div class="mw-inner" style="${rarity!=='normal'?`border:3px solid ${border};border-radius:8px`:``}">
      <div class="mw-name">
        <div class="mw-firstname">${player.firstname || ''}</div>
        <div class="mw-lastname" style="font-size:${w===120?'13px':'16px'}">${(player.surname_encoded || '').toUpperCase()}</div>
      </div>
      <div class="mw-stars">
        <div class="mw-band" style="background:${c1}"></div>
        ${starSVG(c1, note1, 52)}
        ${job2 && c2 ? starSVG(c2, note2, 32) : ''}
      </div>
      <div class="mw-portrait" style="height:${w===120?'88px':'116px'}">
        ${portraitHTML}
      </div>
      <div class="mw-footer">
        <div class="mw-flag">
          <img src="https://flagsapi.com/${country}/flat/64.png" alt="${cname}">
        </div>
        <div class="mw-country">${cname}</div>
        ${rarity === 'normal' ? clubHTML : rarityBadge}
      </div>
      ${showNotes ? `<div style="background:#e8e0cc;padding:4px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px;font-size:9px">
        <div style="color:#555">GK <b style="color:#111">${player.note_g}</b></div>
        <div style="color:#555">DEF <b style="color:#111">${player.note_d}</b></div>
        <div style="color:#555">MIL <b style="color:#111">${player.note_m}</b></div>
        <div style="color:#555">ATT <b style="color:#111">${player.note_a}</b></div>
      </div>` : ''}
    </div>
  </div>`
}

/** Injecte la carte dans un élément DOM */
export function renderCard(container, player, opts) {
  container.innerHTML = renderCardHTML(player, opts)
}

/** Encodage des voyelles (GDD §4.5) */
export function encodeVowels(str) {
  const map = { A:'E',E:'I',I:'O',O:'U',U:'A',a:'e',e:'i',i:'o',o:'u',u:'a' }
  return (str || '').replace(/[AEIOUaeiou]/g, c => map[c] || c)
}

export { JOB_COLORS, JOB_LABELS, RARITY_BORDERS, COUNTRY_NAMES }
