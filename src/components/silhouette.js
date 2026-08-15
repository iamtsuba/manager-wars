/**
 * silhouette.js — Silhouette générique pour les cartes joueur de rareté
 * "Normal" : bras/jambes/tête en aplat clair, maillot/short/chaussettes
 * dynamiques selon les couleurs du club (table `clubs`, champs kit_*).
 *
 * Réutilise la mécanique de motif de maillot de avatar.js (kitPatternId),
 * mais génère un identifiant UNIQUE par appel : les fonctions body()/arms()
 * de avatar.js utilisent un id fixe ("kitPat"), ce qui casse dès que
 * plusieurs cartes sont affichées ensemble sur un même écran (Collection,
 * terrain de match) — chaque <svg> "gagnerait" la couleur du premier
 * élément du DOM portant cet id. Ici, chaque silhouette est autonome.
 */
import { kitPatternId } from './avatar.js'

// Aplat neutre façon silhouette (pas une teinte de peau réaliste : un
// simple placeholder visuel, volontairement plat, sans dégradé marqué)
const SILHOUETTE_FILL = '#ECE7DA'
const SILHOUETTE_SHADE = '#DDD6C4'

const DEFAULT_KIT = {
  style: 'uni', color1: '#555555', color2: '#ffffff', color3: '#222222',
  shorts: '#333333', socks: '#555555',
}

export function generateSilhouetteSVG(kit = {}, w = 120, uid = '') {
  const kt  = { ...DEFAULT_KIT, ...kit }
  const pid = 'silKit' + (uid || Math.random().toString(36).slice(2, 8))

  // ── Empilement du haut vers le bas (fractions de la largeur w, pour un
  // ratio stable) : marge > tête > cou > maillot > jambe > pied > marge.
  // Additionnées, elles définissent la hauteur totale h — jamais l'inverse
  // (évite tout débordement du viewBox, contrairement à un calcul de h
  // indépendant des tailles réelles des segments).
  const topPad   = w * 0.03
  const headR    = w * 0.225
  const headD    = headR * 2 * 1.08          // ellipse : ry = headR*1.08
  const neckH    = headR * 0.55
  const bodyH    = w * 0.62
  const legH     = w * 0.78
  const footH    = w * 0.11
  const botPad   = w * 0.02

  const headCy   = topPad + headD / 2
  const neckY    = topPad + headD
  const bodyTopY = neckY + neckH
  const bodyBotY = bodyTopY + bodyH
  const legBotY  = bodyBotY + legH
  const h = Math.round(legBotY + footH + botPad)

  const cx      = w / 2
  const bodyW   = w * 0.5
  const bodyX   = cx - bodyW / 2
  const armW    = w * 0.15
  const armH    = bodyH * 0.92
  const armTopY = bodyTopY + w * 0.03
  const legW    = w * 0.19
  const legGap  = w * 0.06

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>${kitPatternId(kt, w, pid)}</defs>

  <!-- Jambes -->
  ${[-1, 1].map(side => {
    const lx = cx + side * legGap - legW / 2
    const sockH = legH * 0.42
    const shinH = legH - sockH
    return `
    <rect x="${lx}" y="${bodyBotY}" width="${legW}" height="${shinH}" rx="${legW*0.4}" fill="${SILHOUETTE_FILL}"/>
    <rect x="${lx}" y="${bodyBotY + shinH}" width="${legW}" height="${sockH}" rx="${legW*0.4}" fill="${kt.socks}"/>
    <ellipse cx="${cx + side*legGap}" cy="${bodyBotY + legH + footH*0.4}" rx="${legW*0.62}" ry="${footH*0.55}" fill="#1a1a2e"/>`
  }).join('')}

  <!-- Bras -->
  <rect x="${bodyX - armW}" y="${armTopY}" width="${armW}" height="${armH*0.62}" rx="${armW*0.45}" fill="url(#${pid})"/>
  <circle cx="${bodyX - armW/2}" cy="${armTopY + armH*0.62 + armW*0.25}" r="${armW*0.4}" fill="${SILHOUETTE_FILL}"/>
  <rect x="${bodyX + bodyW}" y="${armTopY}" width="${armW}" height="${armH*0.62}" rx="${armW*0.45}" fill="url(#${pid})"/>
  <circle cx="${bodyX + bodyW + armW/2}" cy="${armTopY + armH*0.62 + armW*0.25}" r="${armW*0.4}" fill="${SILHOUETTE_FILL}"/>

  <!-- Maillot -->
  <rect x="${bodyX}" y="${bodyTopY}" width="${bodyW}" height="${bodyH}" rx="${bodyW*0.12}" fill="url(#${pid})"/>
  <path d="M ${bodyX+bodyW*0.35} ${bodyTopY} Q ${cx} ${bodyTopY+bodyH*0.12} ${bodyX+bodyW*0.65} ${bodyTopY}"
    fill="none" stroke="${kt.color2}" stroke-width="${Math.max(1.5,w*0.016)}"/>

  <!-- Cou -->
  <rect x="${cx - w*0.06}" y="${neckY - h*0.01}" width="${w*0.12}" height="${headR*0.4}" rx="${w*0.025}" fill="${SILHOUETTE_SHADE}"/>

  <!-- Tête : silhouette plate, sans traits du visage -->
  <ellipse cx="${cx}" cy="${headCy}" rx="${headR}" ry="${headR*1.08}" fill="${SILHOUETTE_FILL}"/>
</svg>`
}
