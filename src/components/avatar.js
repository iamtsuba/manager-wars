/**
 * avatar.js — Générateur SVG personnage Manager Wars
 * Génère un personnage complet style "figurine" (tête + corps + tenue)
 * à partir d'un avatar_config JSON et d'un kit_config de club
 */

// ── Palettes ──────────────────────────────────────────────

export const SKIN_COLORS = {
  blanc:   { base: '#F5CFA0', shadow: '#D9A870', ear: '#E8BC88' },
  metisse: { base: '#C8895A', shadow: '#A86A3A', ear: '#B87848' },
  typ:     { base: '#8B5E3C', shadow: '#6B3E20', ear: '#7B4E2C' },
  noir:    { base: '#4A2C15', shadow: '#2E1A08', ear: '#3E2210' },
}

export const HAIR_COLORS = {
  noir:    '#1A1008',
  marron:  '#5C3010',
  chatain: '#7A4828',
  blond:   '#D4A030',
  roux:    '#A03818',
  blanc:   '#E8E0D0',
  gris:    '#808080',
}

export const EYE_STYLES = {
  normal:  { label: 'Normal' },
  ferme:   { label: 'Mi-clos' },
  large:   { label: 'Grand ouvert' },
  dur:     { label: 'Regard dur' },
}

export const NOSE_STYLES = {
  petit:  { label: 'Petit' },
  moyen:  { label: 'Moyen' },
  large:  { label: 'Large' },
}

export const MOUTH_STYLES = {
  neutre:  { label: 'Neutre' },
  sourire: { label: 'Sourire' },
  serieux: { label: 'Sérieux' },
}

export const EYEBROW_STYLES = {
  normal:  { label: 'Normal' },
  epais:   { label: 'Épais' },
  fonce:   { label: 'Froncé' },
  fin:     { label: 'Fin' },
}

export const BEARD_STYLES = {
  aucune:    { label: 'Aucune' },
  legere:    { label: 'Légère' },
  courte:    { label: 'Courte' },
  complete:  { label: 'Complète' },
  bouc:      { label: 'Bouc' },
}

export const HAIR_STYLES = {
  chauve:      { label: 'Chauve' },
  rase:        { label: 'Rasé' },
  court:       { label: 'Court classique' },
  pompadour:   { label: 'Pompadour' },
  afro:        { label: 'Afro' },
  boucle:      { label: 'Bouclé' },
  longbraids:  { label: 'Tresses longues' },
  fade:        { label: 'Fade / Dégradé' },
  mohawk:      { label: 'Mohawk' },
  undercut:    { label: 'Undercut' },
}

export const KIT_STYLES = {
  uni:          { label: 'Uni',                    colors: 1 },
  rayures_v:    { label: 'Rayures verticales',     colors: 2 },
  rayures_v3:   { label: 'Rayures 3 couleurs',     colors: 3 },
  rayures_h:    { label: 'Rayures horizontales',   colors: 2 },
  rayures_h3:   { label: 'Rayures H 3 couleurs',   colors: 3 },
  degrade:      { label: 'Dégradé',                colors: 2 },
  degrade3:     { label: 'Dégradé 3 couleurs',     colors: 3 },
  epaules:      { label: 'Épaules contrastées',    colors: 2 },
  epaules3:     { label: 'Épaules 3 couleurs',     colors: 3 },
  bandes:       { label: 'Bandes latérales',       colors: 2 },
  bandes3:      { label: 'Bandes 3 couleurs',      colors: 3 },
  diagonal:     { label: 'Diagonal',               colors: 2 },
  diagonal3:    { label: 'Diagonal 3 couleurs',    colors: 3 },
  hoops:        { label: 'Cercles (Hoops)',         colors: 2 },
  hoops3:       { label: 'Hoops 3 couleurs',        colors: 3 },
  croix:        { label: 'Croix centrale',          colors: 3 },
}

// ── Config par défaut ─────────────────────────────────────

export const DEFAULT_AVATAR = {
  skin:      'blanc',
  hair:      'pompadour',
  hairColor: 'marron',
  eyes:      'normal',
  nose:      'moyen',
  mouth:     'neutre',
  eyebrows:  'normal',
  beard:     'aucune',
}

export const DEFAULT_KIT = {
  style:   'uni',
  color1:  '#1A6B3C',
  color2:  '#ffffff',
  color3:  '#000000',
  shorts:  '#111111',
  socks:   '#ffffff',
}

// ── Générateur SVG principal ──────────────────────────────

/**
 * Génère le SVG complet du personnage
 * @param {Object} avatar - avatar_config du joueur
 * @param {Object} kit    - kit_config du club  { style, color1, color2, shorts, socks }
 * @param {number} w      - largeur totale (défaut 120)
 * @returns {string} SVG string
 */
export function generateAvatarSVG(avatar = {}, kit = {}, w = 120) {
  const av = { ...DEFAULT_AVATAR, ...avatar }
  const kt = { ...DEFAULT_KIT, ...kit }
  const h  = Math.round(w * 1.45)

  const skin  = SKIN_COLORS[av.skin] || SKIN_COLORS.blanc
  const hcol  = HAIR_COLORS[av.hairColor] || HAIR_COLORS.marron

  // Proportions relatives à w
  const s = w / 120  // facteur scale

  // Centres
  const cx  = w / 2
  const headY = h * 0.12   // centre tête
  const headR = w * 0.26   // rayon tête
  const neckY = headY + headR * 0.85
  const bodyTopY = neckY + headR * 0.25
  const bodyW  = w * 0.52
  const bodyH  = h * 0.32
  const bodyX  = cx - bodyW / 2
  const bodyBotY = bodyTopY + bodyH
  const legH   = h * 0.22
  const footH  = h * 0.06
  const armW   = w * 0.16
  const armH   = h * 0.28

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${kitPattern(kt, w)}
    <radialGradient id="headGrad" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="${skin.base}"/>
      <stop offset="100%" stop-color="${skin.shadow}"/>
    </radialGradient>
  </defs>

  <!-- Ombre sol -->
  <ellipse cx="${cx}" cy="${h - footH * 0.4}" rx="${w * 0.32}" ry="${h * 0.025}" fill="rgba(0,0,0,0.15)"/>

  <!-- Jambes -->
  ${legs(cx, bodyBotY, legH, footH, w, kt, skin)}

  <!-- Bras -->
  ${arms(cx, bodyTopY, bodyW, armW, armH, w, kt, skin)}

  <!-- Corps (maillot) -->
  ${body(bodyX, bodyTopY, bodyW, bodyH, kt)}

  <!-- Cou -->
  <rect x="${cx - w*0.07}" y="${neckY - 2*s}" width="${w*0.14}" height="${headR*0.35}" rx="${w*0.03}" fill="${skin.base}"/>

  <!-- Tête -->
  ${head(av, cx, headY, headR, skin, hcol, s)}

  <!-- Cheveux (sur la tête) -->
  ${hair(av.hair, hcol, cx, headY, headR, s)}

</svg>`
}

// ── Corps ─────────────────────────────────────────────────

function body(x, y, w, h, kt) {
  const rx = w * 0.12
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="url(#kitPat)"/>
  <!-- Col maillot -->
  <path d="M ${x + w*0.35} ${y} Q ${x+w*0.5} ${y + h*0.12} ${x + w*0.65} ${y}"
    fill="none" stroke="${kt.color2}" stroke-width="${Math.max(1.5, w*0.018)}"/>`
}

function kitPatternId(kt, totalW, id) {
  const c1 = kt.color1, c2 = kt.color2, c3 = kt.color3 || '#000000'
  switch (kt.style) {
    case 'rayures_v':
      return `<pattern id="${id}" x="0" y="0" width="12" height="100%" patternUnits="userSpaceOnUse">
        <rect width="6" height="100%" fill="${c1}"/>
        <rect x="6" width="6" height="100%" fill="${c2}"/>
      </pattern>`
    case 'rayures_v3':
      return `<pattern id="${id}" x="0" y="0" width="18" height="100%" patternUnits="userSpaceOnUse">
        <rect width="6" height="100%" fill="${c1}"/>
        <rect x="6" width="6" height="100%" fill="${c2}"/>
        <rect x="12" width="6" height="100%" fill="${c3}"/>
      </pattern>`
    case 'rayures_h':
      return `<pattern id="${id}" x="0" y="0" width="100%" height="10" patternUnits="userSpaceOnUse">
        <rect width="100%" height="5" fill="${c1}"/>
        <rect y="5" width="100%" height="5" fill="${c2}"/>
      </pattern>`
    case 'rayures_h3':
      return `<pattern id="${id}" x="0" y="0" width="100%" height="15" patternUnits="userSpaceOnUse">
        <rect width="100%" height="5" fill="${c1}"/>
        <rect y="5" width="100%" height="5" fill="${c2}"/>
        <rect y="10" width="100%" height="5" fill="${c3}"/>
      </pattern>`
    case 'hoops':
      return `<pattern id="${id}" x="0" y="0" width="100%" height="16" patternUnits="userSpaceOnUse">
        <rect width="100%" height="8" fill="${c1}"/>
        <rect y="8" width="100%" height="8" fill="${c2}"/>
      </pattern>`
    case 'hoops3':
      return `<pattern id="${id}" x="0" y="0" width="100%" height="24" patternUnits="userSpaceOnUse">
        <rect width="100%" height="8" fill="${c1}"/>
        <rect y="8" width="100%" height="8" fill="${c2}"/>
        <rect y="16" width="100%" height="8" fill="${c3}"/>
      </pattern>`
    case 'degrade':
      return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>`
    case 'degrade3':
      return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="50%" stop-color="${c2}"/>
        <stop offset="100%" stop-color="${c3}"/>
      </linearGradient>`
    case 'epaules':
      return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c2}"/>
        <stop offset="30%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c1}"/>
      </linearGradient>`
    case 'epaules3':
      return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c3}"/>
        <stop offset="25%" stop-color="${c2}"/>
        <stop offset="45%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c1}"/>
      </linearGradient>`
    case 'bandes':
      return `<pattern id="${id}" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">
        <rect width="100%" height="100%" fill="${c1}"/>
        <rect x="0" width="18%" height="100%" fill="${c2}"/>
        <rect x="82%" width="18%" height="100%" fill="${c2}"/>
      </pattern>`
    case 'bandes3':
      return `<pattern id="${id}" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">
        <rect width="100%" height="100%" fill="${c1}"/>
        <rect x="0" width="12%" height="100%" fill="${c2}"/>
        <rect x="14%" width="8%" height="100%" fill="${c3}"/>
        <rect x="78%" width="8%" height="100%" fill="${c3}"/>
        <rect x="88%" width="12%" height="100%" fill="${c2}"/>
      </pattern>`
    case 'diagonal':
      return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="50%" stop-color="${c1}"/>
        <stop offset="50%" stop-color="${c2}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>`
    case 'diagonal3':
      return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="33%" stop-color="${c1}"/>
        <stop offset="33%" stop-color="${c2}"/>
        <stop offset="66%" stop-color="${c2}"/>
        <stop offset="66%" stop-color="${c3}"/>
        <stop offset="100%" stop-color="${c3}"/>
      </linearGradient>`
    case 'croix':
      // Couleur de fond c1, croix centrale c2, contour croix c3
      return `<pattern id="${id}" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">
        <rect width="100%" height="100%" fill="${c1}"/>
        <rect x="40%" width="20%" height="100%" fill="${c3}"/>
        <rect y="35%" width="100%" height="30%" fill="${c3}"/>
        <rect x="42%" width="16%" height="100%" fill="${c2}"/>
        <rect y="37%" width="100%" height="26%" fill="${c2}"/>
      </pattern>`
    default: // uni
      return `<linearGradient id="${id}"><stop stop-color="${c1}"/></linearGradient>`
  }
}
function kitPattern(kt, totalW) {
  return kitPatternId(kt, totalW, 'kitPat')
}


function legs(cx, topY, legH, footH, totalW, kt, skin) {
  const legW = totalW * 0.2
  const gap  = totalW * 0.055
  const sockH = legH * 0.45
  const shinH = legH - sockH
  const rx = legW * 0.4

  // Jambe gauche + droite
  const legs = [-1, 1].map(side => {
    const lx = cx + side * gap - legW / 2
    return `
    <!-- cuisse ${side < 0 ? 'G' : 'D'} -->
    <rect x="${lx}" y="${topY}" width="${legW}" height="${shinH}" rx="${rx}" fill="${kt.shorts}"/>
    <!-- chaussette ${side < 0 ? 'G' : 'D'} -->
    <rect x="${lx}" y="${topY + shinH}" width="${legW}" height="${sockH}" rx="${rx}" fill="${kt.socks}"/>
    <!-- chaussure ${side < 0 ? 'G' : 'D'} -->
    <ellipse cx="${cx + side * gap}" cy="${topY + legH + footH*0.4}" rx="${legW * 0.65}" ry="${footH * 0.55}" fill="#1a1a2e"/>
    `
  })
  return legs.join('')
}

function arms(cx, bodyTopY, bodyW, armW, armH, totalW, kt, skin) {
  const armTopY = bodyTopY + totalW * 0.04
  const sideX_L = cx - bodyW / 2
  const sideX_R = cx + bodyW / 2
  const rx = armW * 0.45
  const handR = armW * 0.42

  return `
  <!-- Bras gauche -->
  <rect x="${sideX_L - armW}" y="${armTopY}" width="${armW}" height="${armH * 0.65}" rx="${rx}" fill="url(#kitPat)"/>
  <circle cx="${sideX_L - armW/2}" cy="${armTopY + armH * 0.65 + handR*0.6}" r="${handR}" fill="${skin.base}"/>

  <!-- Bras droit -->
  <rect x="${sideX_R}" y="${armTopY}" width="${armW}" height="${armH * 0.65}" rx="${rx}" fill="url(#kitPat)"/>
  <circle cx="${sideX_R + armW/2}" cy="${armTopY + armH * 0.65 + handR*0.6}" r="${handR}" fill="${skin.base}"/>
  `
}

// ── Tête ──────────────────────────────────────────────────

function head(av, cx, cy, r, skin, hcol, s) {
  const eyeY    = cy + r * 0.08
  const eyeGap  = r * 0.42
  const noseY   = cy + r * 0.35
  const mouthY  = cy + r * 0.58
  const earR    = r * 0.22

  return `
  <!-- Oreilles -->
  <ellipse cx="${cx - r * 0.93}" cy="${cy + r*0.08}" rx="${earR * 0.55}" ry="${earR}" fill="${skin.ear}"/>
  <ellipse cx="${cx + r * 0.93}" cy="${cy + r*0.08}" rx="${earR * 0.55}" ry="${earR}" fill="${skin.ear}"/>

  <!-- Tête principale -->
  <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 1.08}" fill="url(#headGrad)"/>

  <!-- Sourcils -->
  ${eyebrows(av.eyebrows, cx, eyeY - r*0.28, eyeGap, r, hcol, s)}

  <!-- Yeux -->
  ${eyes(av.eyes, cx, eyeY, eyeGap, r, s)}

  <!-- Nez -->
  ${nose(av.nose, cx, noseY, r, skin, s)}

  <!-- Bouche -->
  ${mouth(av.mouth, cx, mouthY, r, s)}

  <!-- Barbe -->
  ${beard(av.beard, cx, cy, r, hcol, s)}
  `
}

// ── Traits du visage ──────────────────────────────────────

function eyebrows(style, cx, y, gap, r, hcol, s) {
  const bw = r * 0.35
  const bh = r * 0.06
  const thick = style === 'epais' ? bh * 2.2 : bh
  const rx = bh * 0.8

  let leftPath, rightPath
  if (style === 'fonce') {
    // Sourcils froncés (inclinés vers le centre)
    leftPath  = `<path d="M ${cx - gap - bw*0.6} ${y + bh} L ${cx - gap + bw*0.6} ${y - bh}" stroke="${hcol}" stroke-width="${thick*2}" stroke-linecap="round" fill="none"/>`
    rightPath = `<path d="M ${cx + gap - bw*0.6} ${y - bh} L ${cx + gap + bw*0.6} ${y + bh}" stroke="${hcol}" stroke-width="${thick*2}" stroke-linecap="round" fill="none"/>`
  } else if (style === 'fin') {
    leftPath  = `<rect x="${cx - gap - bw/2}" y="${y}" width="${bw}" height="${bh * 0.7}" rx="${rx}" fill="${hcol}"/>`
    rightPath = `<rect x="${cx + gap - bw/2}" y="${y}" width="${bw}" height="${bh * 0.7}" rx="${rx}" fill="${hcol}"/>`
  } else {
    leftPath  = `<rect x="${cx - gap - bw/2}" y="${y}" width="${bw}" height="${thick}" rx="${rx}" fill="${hcol}"/>`
    rightPath = `<rect x="${cx + gap - bw/2}" y="${y}" width="${bw}" height="${thick}" rx="${rx}" fill="${hcol}"/>`
  }
  return leftPath + rightPath
}

function eyes(style, cx, y, gap, r, s) {
  const er = r * 0.14
  const pupilR = er * 0.65

  const makeEye = (ex) => {
    if (style === 'ferme') {
      return `<path d="M ${ex - er} ${y} Q ${ex} ${y + er * 0.6} ${ex + er} ${y}" stroke="#333" stroke-width="${er*0.4*s}" fill="none" stroke-linecap="round"/>`
    }
    const eyeH = style === 'large' ? er * 1.2 : style === 'dur' ? er * 0.65 : er
    return `
    <ellipse cx="${ex}" cy="${y}" rx="${er}" ry="${eyeH}" fill="white"/>
    <ellipse cx="${ex}" cy="${y}" rx="${pupilR}" ry="${style === 'dur' ? pupilR * 0.6 : pupilR}" fill="#1a1008"/>
    <circle cx="${ex + pupilR*0.3}" cy="${y - pupilR*0.3}" r="${pupilR*0.22}" fill="rgba(255,255,255,0.7)"/>
    `
  }
  return makeEye(cx - gap) + makeEye(cx + gap)
}

function nose(style, cx, y, r, skin, s) {
  const nw = style === 'large' ? r * 0.28 : style === 'petit' ? r * 0.14 : r * 0.20
  const nh = style === 'large' ? r * 0.14 : r * 0.10
  return `
  <ellipse cx="${cx - nw*0.55}" cy="${y}" rx="${nw*0.32}" ry="${nh*0.55}" fill="${skin.shadow}"/>
  <ellipse cx="${cx + nw*0.55}" cy="${y}" rx="${nw*0.32}" ry="${nh*0.55}" fill="${skin.shadow}"/>
  <path d="M ${cx - nw*0.3} ${y - nh*0.4} Q ${cx} ${y + nh} ${cx + nw*0.3} ${y - nh*0.4}" fill="none" stroke="${skin.shadow}" stroke-width="${Math.max(1, r*0.04*s)}" stroke-linecap="round"/>
  `
}

function mouth(style, cx, y, r, s) {
  const mw = r * 0.42
  const col = '#8B4040'
  if (style === 'sourire') {
    return `<path d="M ${cx - mw/2} ${y} Q ${cx} ${y + r*0.22} ${cx + mw/2} ${y}" fill="none" stroke="${col}" stroke-width="${Math.max(1.5, r*0.07*s)}" stroke-linecap="round"/>`
  } else if (style === 'serieux') {
    return `<path d="M ${cx - mw/2} ${y + r*0.04} L ${cx + mw/2} ${y + r*0.04}" stroke="${col}" stroke-width="${Math.max(1.5, r*0.07*s)}" stroke-linecap="round"/>`
  }
  // neutre
  return `<path d="M ${cx - mw/2} ${y} Q ${cx} ${y + r*0.08} ${cx + mw/2} ${y}" fill="none" stroke="${col}" stroke-width="${Math.max(1.5, r*0.06*s)}" stroke-linecap="round"/>`
}

function beard(style, cx, cy, r, hcol, s) {
  if (style === 'aucune') return ''
  const col = hcol + 'cc'  // légèrement transparent
  const jawY = cy + r * 0.62
  const jawW = r * 0.75

  if (style === 'legere') {
    return `<ellipse cx="${cx}" cy="${jawY}" rx="${jawW}" ry="${r*0.22}" fill="${col}" opacity="0.4"/>`
  } else if (style === 'courte') {
    return `<ellipse cx="${cx}" cy="${jawY}" rx="${jawW}" ry="${r*0.3}" fill="${col}" opacity="0.6"/>
    <ellipse cx="${cx - r*0.38}" cy="${cy + r*0.3}" rx="${r*0.18}" ry="${r*0.28}" fill="${col}" opacity="0.5"/>
    <ellipse cx="${cx + r*0.38}" cy="${cy + r*0.3}" rx="${r*0.18}" ry="${r*0.28}" fill="${col}" opacity="0.5"/>`
  } else if (style === 'complete') {
    return `<ellipse cx="${cx}" cy="${jawY}" rx="${jawW}" ry="${r*0.42}" fill="${col}" opacity="0.75"/>
    <ellipse cx="${cx - r*0.42}" cy="${cy + r*0.25}" rx="${r*0.22}" ry="${r*0.38}" fill="${col}" opacity="0.7"/>
    <ellipse cx="${cx + r*0.42}" cy="${cy + r*0.25}" rx="${r*0.22}" ry="${r*0.38}" fill="${col}" opacity="0.7"/>`
  } else if (style === 'bouc') {
    return `<ellipse cx="${cx}" cy="${jawY + r*0.05}" rx="${r*0.25}" ry="${r*0.22}" fill="${col}" opacity="0.75"/>
    <ellipse cx="${cx}" cy="${cy + r*0.3}" rx="${r*0.08}" ry="${r*0.12}" fill="${col}" opacity="0.65"/>`
  }
  return ''
}

// ── Cheveux ───────────────────────────────────────────────

function hair(style, hcol, cx, cy, r, s) {
  if (style === 'chauve') return ''

  if (style === 'rase') {
    return `<ellipse cx="${cx}" cy="${cy - r*0.2}" rx="${r * 0.98}" ry="${r * 0.55}" fill="${hcol}" opacity="0.9"/>`
  }

  if (style === 'court') {
    return `<ellipse cx="${cx}" cy="${cy - r*0.55}" rx="${r * 0.95}" ry="${r * 0.5}" fill="${hcol}"/>
    <ellipse cx="${cx}" cy="${cy - r*0.75}" rx="${r * 0.8}" ry="${r * 0.32}" fill="${hcol}"/>`
  }

  if (style === 'pompadour') {
    return `
    <!-- Base cheveux -->
    <ellipse cx="${cx}" cy="${cy - r*0.6}" rx="${r * 0.95}" ry="${r * 0.48}" fill="${hcol}"/>
    <!-- Pompadour (volume avant-droit) -->
    <path d="M ${cx - r*0.7} ${cy - r*0.6}
             C ${cx - r*0.5} ${cy - r*1.6} ${cx + r*0.2} ${cy - r*1.7} ${cx + r*0.75} ${cy - r*0.85}
             L ${cx + r*0.85} ${cy - r*0.5} Z"
          fill="${hcol}"/>
    <!-- Reflet -->
    <path d="M ${cx - r*0.3} ${cy - r*0.85}
             C ${cx} ${cy - r*1.5} ${cx + r*0.4} ${cy - r*1.55} ${cx + r*0.55} ${cy - r*0.95}"
          fill="none" stroke="${lighten(hcol)}" stroke-width="${r*0.06*s}" stroke-linecap="round" opacity="0.5"/>
    `
  }

  if (style === 'afro') {
    return `
    <circle cx="${cx}" cy="${cy - r*0.15}" r="${r * 1.22}" fill="${hcol}"/>
    <circle cx="${cx - r*0.8}" cy="${cy - r*0.05}" r="${r * 0.55}" fill="${hcol}"/>
    <circle cx="${cx + r*0.8}" cy="${cy - r*0.05}" r="${r * 0.55}" fill="${hcol}"/>
    <!-- découpe pour voir le visage -->
    <ellipse cx="${cx}" cy="${cy + r*0.1}" rx="${r * 0.75}" ry="${r * 0.95}" fill="url(#headGrad)"/>
    `
  }

  if (style === 'boucle') {
    return `
    <ellipse cx="${cx}" cy="${cy - r*0.5}" rx="${r * 0.96}" ry="${r * 0.55}" fill="${hcol}"/>
    <circle cx="${cx - r*0.6}" cy="${cy - r*0.7}" r="${r*0.22}" fill="${hcol}"/>
    <circle cx="${cx - r*0.2}" cy="${cy - r*0.88}" r="${r*0.22}" fill="${hcol}"/>
    <circle cx="${cx + r*0.2}" cy="${cy - r*0.88}" r="${r*0.22}" fill="${hcol}"/>
    <circle cx="${cx + r*0.6}" cy="${cy - r*0.7}" r="${r*0.22}" fill="${hcol}"/>
    `
  }

  if (style === 'longbraids') {
    return `
    <ellipse cx="${cx}" cy="${cy - r*0.5}" rx="${r * 0.95}" ry="${r * 0.52}" fill="${hcol}"/>
    <!-- Tresses descendantes -->
    ${[-0.55, -0.2, 0.2, 0.55].map(ox => `
      <rect x="${cx + ox*r - r*0.06}" y="${cy + r*0.6}" width="${r*0.12}" height="${r*1.1}" rx="${r*0.06}" fill="${hcol}" opacity="0.9"/>
    `).join('')}
    `
  }

  if (style === 'fade') {
    return `
    <!-- Fade: haut plein, côtés dégradés -->
    <ellipse cx="${cx}" cy="${cy - r*0.52}" rx="${r * 0.95}" ry="${r * 0.5}" fill="${hcol}"/>
    <ellipse cx="${cx - r*0.88}" cy="${cy + r*0.05}" rx="${r*0.2}" ry="${r*0.38}" fill="${hcol}" opacity="0.4"/>
    <ellipse cx="${cx + r*0.88}" cy="${cy + r*0.05}" rx="${r*0.2}" ry="${r*0.38}" fill="${hcol}" opacity="0.4"/>
    `
  }

  if (style === 'mohawk') {
    return `
    <!-- Côtés rasés -->
    <!-- Crête centrale -->
    <path d="M ${cx - r*0.18} ${cy - r*0.55}
             C ${cx - r*0.15} ${cy - r*1.65} ${cx + r*0.15} ${cy - r*1.65} ${cx + r*0.18} ${cy - r*0.55}
             Z"
          fill="${hcol}"/>
    `
  }

  if (style === 'undercut') {
    return `
    <!-- Dessus seulement, côtés rasés -->
    <path d="M ${cx - r*0.9} ${cy - r*0.45}
             C ${cx - r*0.85} ${cy - r*1.05} ${cx + r*0.85} ${cy - r*1.05} ${cx + r*0.9} ${cy - r*0.45}
             Z"
          fill="${hcol}"/>
    <!-- Mèche sur le front légèrement penchée -->
    <path d="M ${cx - r*0.3} ${cy - r*0.75} C ${cx + r*0.1} ${cy - r*0.9} ${cx + r*0.6} ${cy - r*0.6} ${cx + r*0.7} ${cy - r*0.42}"
          fill="none" stroke="${hcol}" stroke-width="${r*0.18*s}" stroke-linecap="round"/>
    `
  }

  return ''
}

// ── Utilitaires ───────────────────────────────────────────

function lighten(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
  const lr = Math.min(255, r + 60), lg = Math.min(255, g + 60), lb = Math.min(255, b + 60)
  return `#${lr.toString(16).padStart(2,'0')}${lg.toString(16).padStart(2,'0')}${lb.toString(16).padStart(2,'0')}`
}

/**
 * Génère un SVG de preview maillot (pour la page clubs)
 * @param {Object} kit  { style, color1, color2, shorts, socks }
 * @returns {string} SVG string
 */
export function generateKitPreviewSVG(kit = {}, uid = '') {
  const kt  = { ...DEFAULT_KIT, ...kit }
  const pid = 'kitPat' + (uid || Math.random().toString(36).slice(2, 7))
  const w = 120, h = 140

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${kitPatternId(kt, w, pid)}
  </defs>

  <!-- Maillot corps -->
  <path d="M 25 38 L 15 28 L 35 22 L 45 36 L 75 36 L 85 22 L 105 28 L 95 38 L 95 90 Q 95 95 90 95 L 30 95 Q 25 95 25 90 Z"
    fill="url(#${pid})"/>

  <!-- Manches -->
  <path d="M 25 38 L 15 28 L 8 50 L 20 55 Z" fill="url(#${pid})"/>
  <path d="M 95 38 L 105 28 L 112 50 L 100 55 Z" fill="url(#${pid})"/>

  <!-- Col V -->
  <path d="M 45 36 Q 60 48 75 36" fill="none" stroke="${kt.color2}" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Short -->
  <rect x="28" y="95" width="28" height="30" rx="3" fill="${kt.shorts}"/>
  <rect x="64" y="95" width="28" height="30" rx="3" fill="${kt.shorts}"/>

  <!-- Chaussettes -->
  <rect x="30" y="125" width="24" height="12" rx="2" fill="${kt.socks}"/>
  <rect x="66" y="125" width="24" height="12" rx="2" fill="${kt.socks}"/>
</svg>`
}
