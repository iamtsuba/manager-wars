/**
 * player-card.js — Composant universel carte joueur Manager Wars
 *
 * Usage :
 *   renderPlayerCard(p, options)
 *
 * p : objet joueur (fields: firstname, surname_encoded, job, job2,
 *     note_g, note_d, note_m, note_a, rarity, country_code,
 *     club_id, face, _evolution_bonus, stadiumBonus,
 *     clubs: { encoded_name, logo_url })
 *
 * options :
 *   width        {number}  largeur px (défaut 160)
 *   showStad     {boolean} afficher bonus stade (défaut false)
 *   stadDef      {object}  définition stade pour calcul bonus
 *   used         {boolean} carte grisée (défaut false)
 *   onClick      {fn}      callback clic
 *   extraNote    {number}  note additionnelle à ajouter (boost match)
 */

const BASE = import.meta.env.BASE_URL

// Templates par poste
const CARD_TEMPLATES = {
  GK:  BASE + 'cards/card-GK.png',
  DEF: BASE + 'cards/card-DEF.png',
  MIL: BASE + 'cards/card-MIL.png',
  ATT: BASE + 'cards/card-ATT.png',
}

// Couleur accent par poste (pour texte prénom + cercles)
const JOB_ACCENT = {
  GK:  '#aaaaaa',
  DEF: '#bb2020',
  MIL: '#D4A017',
  ATT: '#1A6B3C',
}

function getFaceUrl(p) {
  if (!p?.face) return null
  // face peut contenir 'public/faces/Africans/afr664.png' ou 'faces/Africans/afr664.png' ou 'Africans/afr664.png'
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
  const base = Number(p[`note_${job.toLowerCase()}`]) || 0
  return base + ((job === p.job || job === p.job2) ? evo : 0)
}

function hasStadBonus(p, stadDef) {
  if (!stadDef) return false
  return (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
         (stadDef.country_code && p.country_code === stadDef.country_code)
}

/**
 * Génère le HTML d'une carte joueur
 * @param {object} p - objet joueur
 * @param {object} opts - options
 * @returns {string} HTML string
 */
export function renderPlayerCard(p, opts = {}) {
  const {
    width = 160,
    showStad = false,
    stadDef = null,
    used = false,
    extraNote = 0,
  } = opts

  if (!p) return `<div style="width:${width}px;height:${Math.round(width * 1.38)}px;border-radius:8px;background:#111;opacity:0.3"></div>`

  const ratio   = width / 506  // ratio basé sur la taille native du template (506px)
  const height  = Math.round(width * 1.38)
  const job     = p._line || p.job || 'MIL'
  const accent  = JOB_ACCENT[job] || '#D4A017'
  const tmpl    = CARD_TEMPLATES[job] || CARD_TEMPLATES.MIL
  const evo     = p._evolution_bonus ?? p.evolution_bonus ?? 0
  const stadBon = showStad && (p.stadiumBonus || hasStadBonus(p, stadDef)) ? 10 : 0

  const mainNote = getNoteForJob(p, job, evo) + extraNote + stadBon
  const noteColor = stadBon > 0 ? '#E87722' : '#fff'

  const job2     = p.job2 || null
  const job2Note = (job2 && job2 !== job) ? getNoteForJob(p, job2, evo) + extraNote + stadBon : null

  const faceUrl    = getFaceUrl(p)
  const flagUrl    = getFlagUrl(p.country_code)
  const clubLogoUrl = getClubLogoUrl(p)

  const firstname = (p.firstname || '').toUpperCase()
  const surname   = (p.surname_encoded || p.name || '').toUpperCase()

  // Tailles relatives au ratio
  const r = (n) => Math.round(n * ratio)

  // Zone noms : ~18% du haut
  const nameZoneH   = r(145)
  const firstnameFs = r(22)
  const surnameFs   = r(52)

  // Zone portrait : centre
  const portraitTop  = r(148)
  const portraitH    = r(320)

  // Zone basse : octogones + note
  const bottomY      = r(470)
  const octSize      = r(100)  // taille octogone drapeau/logo
  const noteBoxSize  = r(130)  // taille octogone note
  const noteFs       = r(64)
  const note2Fs      = r(28)
  const note2BoxSize = r(60)

  const opacityStyle = used ? 'opacity:0.35;' : ''

  return `
<div style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${opacityStyle}user-select:none">
  <!-- Template de fond -->
  <img src="${tmpl}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill;border-radius:${r(12)}px" draggable="false">

  <!-- Zone noms -->
  <div style="position:absolute;top:${r(18)}px;left:0;right:0;text-align:center;z-index:2;padding:0 ${r(40)}px">
    <div style="font-size:${firstnameFs}px;font-weight:700;color:${accent};letter-spacing:${r(2)}px;line-height:1.1;text-shadow:0 1px 4px rgba(0,0,0,0.8)">${firstname}</div>
    <div style="font-size:${surnameFs}px;font-weight:900;color:#fff;letter-spacing:${r(1)}px;line-height:1;text-shadow:0 2px 8px rgba(0,0,0,0.9);font-family:Arial Black,Arial">${surname}</div>
  </div>

  <!-- Portrait joueur -->
  ${faceUrl ? `
  <img src="${faceUrl}"
    style="position:absolute;top:${portraitTop}px;left:50%;transform:translateX(-50%);
    width:${r(300)}px;height:${portraitH}px;object-fit:cover;object-position:top center;
    z-index:2"
    onerror="this.style.display='none'">
  ` : ''}

  <!-- Zone basse : drapeau + note + logo, centrés verticalement -->
  <div style="position:absolute;bottom:${r(18)}px;left:0;right:0;z-index:3;
    display:flex;align-items:center;justify-content:center;gap:${r(8)}px">

    <!-- Drapeau (octogone gauche) -->
    <div style="width:${octSize}px;height:${octSize}px;flex-shrink:0;
      clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
      background:${accent};
      display:flex;align-items:center;justify-content:center;overflow:hidden">
      ${flagUrl
        ? `<img src="${flagUrl}" style="width:${r(80)}px;height:${r(60)}px;object-fit:cover">`
        : `<span style="font-size:${r(28)}px">🌍</span>`}
    </div>

    <!-- Note principale (octogone centre) -->
    <div style="position:relative;width:${noteBoxSize}px;flex-shrink:0">
      <div style="width:${noteBoxSize}px;height:${noteBoxSize}px;
        clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
        background:#0a0a0a;border:${r(3)}px solid ${accent};
        display:flex;align-items:center;justify-content:center">
        <span style="font-size:${noteFs}px;font-weight:900;color:${noteColor};font-family:Arial Black,Arial;line-height:1">${mainNote}</span>
      </div>
      ${job2Note !== null ? `
      <div style="position:absolute;bottom:-${r(18)}px;left:50%;transform:translateX(-50%);
        width:${note2BoxSize}px;height:${note2BoxSize}px;
        clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
        background:#1a0000;border:${r(2)}px solid #bb2020;
        display:flex;align-items:center;justify-content:center">
        <span style="font-size:${note2Fs}px;font-weight:900;color:#bb2020;font-family:Arial Black,Arial">${job2Note}</span>
      </div>` : ''}
    </div>

    <!-- Logo club (octogone droit) -->
    <div style="width:${octSize}px;height:${octSize}px;flex-shrink:0;
      clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
      background:${accent};
      display:flex;align-items:center;justify-content:center;overflow:hidden">
      ${clubLogoUrl
        ? `<img src="${clubLogoUrl}" style="width:${r(72)}px;height:${r(72)}px;object-fit:contain">`
        : `<span style="font-size:${r(16)}px;font-weight:900;color:#fff">${(p.clubs?.encoded_name||p.clubName||'').slice(0,3).toUpperCase()}</span>`}
    </div>
  </div>
</div>`
}

/**
 * Crée un élément DOM carte joueur cliquable
 */
export function createPlayerCardEl(p, opts = {}) {
  const { onClick } = opts
  const div = document.createElement('div')
  div.style.cssText = 'display:inline-block;cursor:' + (onClick ? 'pointer' : 'default')
  div.innerHTML = renderPlayerCard(p, opts)
  if (onClick) div.addEventListener('click', () => onClick(p))
  return div
}
