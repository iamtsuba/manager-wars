// src/components/special-cards.js
//
// Rendu partagé des cartes Game Changer, Stade et Formation, basé sur les
// nouveaux templates visuels (public/icons/template-*.png). SOURCE UNIQUE :
// toute l'app (Collection, Boosters, Admin, Match, Decks) doit passer par
// ces fonctions pour rester visuellement cohérente — ne JAMAIS dupliquer
// ce rendu localement dans un autre fichier.
//
// Zones mesurées précisément par analyse pixel des templates (404×690) :
const RATIO = 690 / 404 // hauteur/largeur du template

const ZONES = {
  gc: {
    name: { top: 6.4, height: 9.2 },
    body: { top: 15.6, height: 44.1 },
    desc: { top: 59.7, height: 31.3 },
  },
  stadium: {
    name: { top: 6.4, height: 9.2 },
    body: { top: 15.6, height: 53.1 },
    desc: { top: 68.7, height: 20.3 },
  },
  formation: {
    name: { top: 6.4, height: 9.2 },
    pitch: { top: 16.2, height: 72.5, left: 15.1, width: 70.3 },
  },
}

function tplUrl(kind) {
  return `${import.meta.env.BASE_URL}icons/template-${kind}.png`
}

/**
 * Carte Game Changer — nom (encadré haut) / image (au milieu) / effet (encadré bas)
 */
export function renderGCCard(name, imageUrl, fallbackIcon, description, opts = {}) {
  const { width = 140, onClick } = opts
  const height = Math.round(width * RATIO)
  const z = ZONES.gc
  const nameFs = Math.max(7, Math.round(width * (name && name.length > 14 ? 0.044 : 0.056)))
  const descFs = Math.max(7, Math.round(width * 0.056))
  return `<div class="special-card special-card-gc" style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${onClick ? 'cursor:pointer' : ''}">
    <img src="${tplUrl('gc')}" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none" alt="">
    <div style="position:absolute;left:14%;right:14%;top:${z.name.top}%;height:${z.name.height}%;display:flex;align-items:center;justify-content:center;z-index:1;overflow:hidden">
      <span style="font-size:${nameFs}px;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:.3px;text-align:center;line-height:1.15;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-width:100%">${name || ''}</span>
    </div>
    <div style="position:absolute;left:8%;right:8%;top:${z.body.top}%;height:${z.body.height}%;display:flex;align-items:center;justify-content:center;z-index:1">
      ${imageUrl
        ? `<img src="${imageUrl}" style="max-width:80%;max-height:85%;object-fit:contain;border-radius:6px">`
        : `<span style="font-size:${Math.round(width*0.32)}px;line-height:1">${fallbackIcon || '⚡'}</span>`}
    </div>
    <div style="position:absolute;left:11%;right:11%;top:${z.desc.top}%;height:${z.desc.height}%;display:flex;align-items:center;justify-content:center;z-index:1;padding:0 2%">
      <span style="font-size:${descFs}px;color:rgba(255,255,255,0.92);text-align:center;line-height:1.25;overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical">${description || ''}</span>
    </div>
  </div>`
}

/**
 * Carte Stade — nom (encadré haut) / logo (au milieu) / bonus (encadré bas)
 */
export function renderStadiumCard(name, imageUrl, description, opts = {}) {
  const { width = 140, onClick } = opts
  const height = Math.round(width * RATIO)
  const z = ZONES.stadium
  const nameFs = Math.max(8, Math.round(width * (name && name.length > 16 ? 0.058 : 0.072)))
  const descFs = Math.max(7, Math.round(width * 0.062))
  return `<div class="special-card special-card-stadium" style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${onClick ? 'cursor:pointer' : ''}">
    <img src="${tplUrl('stadium')}" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none" alt="">
    <div style="position:absolute;left:16%;right:16%;top:${z.name.top}%;height:${z.name.height}%;display:flex;align-items:center;justify-content:center;z-index:1;overflow:hidden">
      <span style="font-size:${nameFs}px;font-weight:900;color:#fff;text-align:center;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${name || 'Stade'}</span>
    </div>
    <div style="position:absolute;left:10%;right:10%;top:${z.body.top}%;height:${z.body.height}%;display:flex;align-items:center;justify-content:center;z-index:1">
      ${imageUrl
        ? `<img src="${imageUrl}" style="max-width:78%;max-height:80%;object-fit:contain;border-radius:6px">`
        : `<span style="font-size:${Math.round(width*0.3)}px;line-height:1">🏟️</span>`}
    </div>
    <div style="position:absolute;left:9%;right:9%;top:${z.desc.top}%;height:${z.desc.height}%;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1;gap:2px">
      <span style="font-size:${descFs}px;font-weight:900;color:#FFD700;text-align:center;line-height:1.2">${description || '+10 ⭐ joueurs alliés'}</span>
    </div>
  </div>`
}

const ROLE_COLORS = { GK:'#111111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

/**
 * Carte Formation — nom (encadré haut) / points de joueurs placés sur le
 * terrain déjà dessiné dans le template, selon FORMATION_POSITIONS.
 */
export function renderFormationCard(formationName, formationPositions, opts = {}) {
  const { width = 140, onClick } = opts
  const height = Math.round(width * RATIO)
  const z = ZONES.formation
  const nameFs = Math.max(9, Math.round(width * (formationName && formationName.length > 7 ? 0.09 : 0.11)))
  const pos = formationPositions || {}
  const dotSize = Math.max(6, Math.round(width * 0.09))
  const dots = Object.entries(pos).map(([slot, p]) => {
    const role = slot.replace(/\d+/, '')
    const color = ROLE_COLORS[role] || '#888'
    const yAdj = (role === 'ATT' || role === 'MIL') ? Math.min(1, p.y + 0.10) : p.y
    const leftPct = z.pitch.left + p.x * z.pitch.width
    const topPct  = z.pitch.top  + yAdj * z.pitch.height
    return `<div style="position:absolute;left:${leftPct}%;top:${topPct}%;width:${dotSize}px;height:${dotSize}px;border-radius:50%;background:${color};border:1.5px solid rgba(255,255,255,0.85);transform:translate(-50%,-50%);box-shadow:0 1px 3px rgba(0,0,0,0.5)"></div>`
  }).join('')
  return `<div class="special-card special-card-formation" style="position:relative;width:${width}px;height:${height}px;flex-shrink:0;${onClick ? 'cursor:pointer' : ''}">
    <img src="${tplUrl('formation')}" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none" alt="">
    <div style="position:absolute;left:16%;right:16%;top:${z.name.top}%;height:${z.name.height}%;display:flex;align-items:center;justify-content:center;z-index:1;overflow:hidden">
      <span style="font-size:${nameFs}px;font-weight:900;color:#fff;text-align:center;letter-spacing:1px">${formationName || ''}</span>
    </div>
    <div style="position:absolute;inset:0;z-index:1">${dots}</div>
  </div>`
}
