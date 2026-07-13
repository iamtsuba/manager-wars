/**
 * svg-editor.js — Éditeur visuel SVG complet
 *
 * Previews : Choix deck / Match en cours / Équipe adverse / Deck builder
 * Modes    : Cartes (drag indépendant) / Liens (largeur/opacité)
 * Viewport : Mobile 375px / PC 1200px
 * Sauvegarde directe en Supabase (svg_config)
 */

import { supabase }                 from '../../lib/supabase.js'
import { FORMATION_POSITIONS, FORMATION_LINKS, getActiveLinks, linkColor } from '../../match/formation-links.js'
import { renderPlayerCard }         from '../../components/player-card.js'
import { getSvgConfig, saveSvgConfig, SVG_DEFAULTS } from '../../lib/svg-config.js'

// ── Équipe fictive pour la preview ───────────────────────
function makeFakeTeam() {
  const positions = { GK:['GK'], DEF:['DEF','DEF','DEF','DEF'], MIL:['MIL','MIL','MIL'], ATT:['ATT','ATT','ATT'] }
  const names = { GK:['Neuer'], DEF:['Varane','Ramos','Hernandez','Meunier'], MIL:['Modric','Kante','Pedri'], ATT:['Messi','Ronaldo','Mbappe'] }
  const team = { GK:[], DEF:[], MIL:[], ATT:[] }
  Object.entries(positions).forEach(([role, arr]) => {
    arr.forEach((r, i) => {
      team[role].push({
        cardId: `${role}${i}`, name: (names[role]||[])[i] || role,
        firstname: '', note_g:14, note_d:14, note_m:14, note_a:14,
        _evolution_bonus:0, job:role, _line:role, _col:i,
        country_code:'FR', rarity: i===0 ? 'legende' : i===1 ? 'pepite' : 'normal',
        used:false, boost:0, stadiumBonus: i===0,
        clubName:'Club', clubLogo:null, face:null,
      })
    })
  })
  return team
}

const PAGES_PREVIEW = [
  { id:'deck-select',  label:'📋 Choix deck' },
  { id:'match',        label:'⚽ Match en cours' },
  { id:'opponent',     label:'🔴 Équipe adverse' },
  { id:'deck-builder', label:'🛠️ Deck builder' },
]

export async function renderSvgEditor(container) {
  const cfg = await getSvgConfig()
  const state = {
    cfg: { ...cfg },
    viewport:    'mobile',
    page:        'deck-select',
    editMode:    'cards',    // 'cards' | 'links'
    formation:   '4-3-3',
    team:        makeFakeTeam(),
    dragging:    null,       // { pos, startX, startY, origX, origY }
    saved:       false,
  }

  container.innerHTML = `
  <div id="sve" style="display:flex;flex-direction:column;height:100%;background:#060d07;color:#fff;overflow:hidden;font-family:system-ui,sans-serif">

    <!-- ── Toolbar ── -->
    <div style="flex-shrink:0;background:#0d1f0e;border-bottom:1px solid rgba(255,255,255,0.1);padding:8px 12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="font-weight:900;color:#D4A017;font-size:15px">🎨 SVG Editor</span>

      <!-- Pages -->
      <div style="display:flex;background:rgba(0,0,0,0.4);border-radius:8px;overflow:hidden;flex-wrap:wrap">
        ${PAGES_PREVIEW.map(p => `
        <button class="pg-btn" data-pg="${p.id}" style="padding:5px 10px;border:none;background:${p.id===state.page?'#1A6B3C':'transparent'};color:${p.id===state.page?'#fff':'rgba(255,255,255,0.5)'};font-size:11px;cursor:pointer;white-space:nowrap">${p.label}</button>`).join('')}
      </div>

      <!-- Viewport -->
      <div style="display:flex;background:rgba(0,0,0,0.4);border-radius:8px;overflow:hidden">
        <button id="vp-mob" style="padding:5px 12px;border:none;background:#1A6B3C;color:#fff;font-size:11px;cursor:pointer;font-weight:700">📱 Mobile</button>
        <button id="vp-pc"  style="padding:5px 12px;border:none;background:transparent;color:rgba(255,255,255,0.5);font-size:11px;cursor:pointer">🖥️ PC</button>
      </div>

      <!-- Mode édition -->
      <div style="display:flex;background:rgba(0,0,0,0.4);border-radius:8px;overflow:hidden">
        <button id="mode-cards" style="padding:5px 12px;border:none;background:#7a28b8;color:#fff;font-size:11px;cursor:pointer;font-weight:700">🃏 Cartes</button>
        <button id="mode-links" style="padding:5px 12px;border:none;background:transparent;color:rgba(255,255,255,0.5);font-size:11px;cursor:pointer">🔗 Liens</button>
      </div>

      <!-- Formation -->
      <select id="ed-form" style="padding:4px 8px;border-radius:6px;background:#1a3a1a;border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:11px">
        ${Object.keys(FORMATION_POSITIONS).map(f => `<option value="${f}" ${f===state.formation?'selected':''}>${f}</option>`).join('')}
      </select>

      <!-- Actions -->
      <div style="margin-left:auto;display:flex;gap:6px">
        <button id="reset-btn" style="padding:5px 10px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:rgba(255,255,255,0.6);font-size:11px;cursor:pointer">↺ Reset</button>
        <button id="save-btn" style="padding:5px 14px;border:none;border-radius:6px;background:#1A6B3C;color:#fff;font-size:11px;font-weight:900;cursor:pointer">💾 Sauvegarder</button>
      </div>
    </div>

    <!-- ── Main ── -->
    <div style="flex:1;min-height:0;display:flex;gap:0;overflow:hidden">

      <!-- Preview -->
      <div id="preview-area" style="flex:1;min-width:0;background:#0a1f0c;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:16px;position:relative">
        <div id="preview-frame" style="position:relative;border:1px solid rgba(255,255,255,0.15);border-radius:8px;overflow:visible;background:#0a3d1e">
          <div id="preview-label" style="position:absolute;top:-20px;left:0;font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:1px">MOBILE — 375px</div>
          <div id="preview-content" style="overflow:visible"></div>
          <div id="card-drag-layer" style="position:absolute;inset:0;pointer-events:none;overflow:visible"></div>
        </div>
      </div>

      <!-- Panneau contrôles -->
      <div style="width:240px;flex-shrink:0;background:#0d1f0e;border-left:1px solid rgba(255,255,255,0.08);overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:0">

        <!-- Cartes -->
        <div id="panel-cards">
          <div style="font-size:10px;color:#D4A017;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">🃏 Cartes</div>
          ${mkSlider('cw_ratio',       'Taille (CW = W × ratio)', 0.08, 0.30, 0.01)}
          ${mkSlider('card_offset_pc', 'Offset PC (px)',           0,    60,   1)}
          ${mkSlider('card_offset_mob','Offset Mobile (px)',       0,    60,   1)}
          ${mkSlider('margin_pc',      'Margin-top PC (px)',       0,    80,   1)}
          ${mkSlider('margin_mob',     'Margin-top Mobile (px)',   0,    80,   1)}
        </div>

        <!-- Liens -->
        <div id="panel-links" style="display:none">
          <div style="font-size:10px;color:#D4A017;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">🔗 Liens</div>
          ${mkSlider('link_width_green', 'Épaisseur lien vert',   0.5, 6, 0.5)}
          ${mkSlider('link_width_yellow','Épaisseur lien jaune',  0.5, 6, 0.5)}
          ${mkSlider('link_width_red',   'Épaisseur lien rouge',  0.5, 6, 0.5)}
          ${mkSlider('link_opacity',     'Opacité liens',         0.1, 1, 0.05)}
          ${mkSlider('pad_ratio',        'PAD normal (CW × ratio)',   0.20, 1.50, 0.05)}
          ${mkSlider('mob_pad_ratio',    'PAD mobile (CW × ratio)',   0.10, 1.00, 0.05)}
          ${mkSlider('pad_min',          'PAD minimum (px)',           20,   150,  5)}
        </div>

        <!-- Positions reset -->
        <div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.08);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:8px">Positions joueurs</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.55);margin-bottom:6px">Glisse les ronds dorés pour repositionner les joueurs indépendamment des liens.</div>
          <button id="reset-pos-btn" style="width:100%;padding:6px;border:1px solid rgba(255,100,100,0.3);border-radius:6px;background:transparent;color:rgba(255,130,130,0.7);font-size:11px;cursor:pointer">↺ Reset positions (${state.formation})</button>
        </div>

        <!-- Valeurs calculées -->
        <div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.08);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:6px">Valeurs calculées</div>
          <div id="calc-vals" style="font-size:10px;color:#4fc3f7;line-height:1.9"></div>
        </div>

        <!-- Status save -->
        <div id="save-status" style="margin-top:auto;padding-top:12px;font-size:11px;text-align:center;color:rgba(255,255,255,0.4)"></div>
      </div>
    </div>
  </div>`

  // Init sliders avec les valeurs actuelles
  syncSlidersFromCfg(container, state.cfg)
  render(container, state)
  bindAll(container, state)
}

// ── Slider helper ─────────────────────────────────────────
function mkSlider(key, label, min, max, step) {
  return `<div style="margin-bottom:11px">
    <div style="display:flex;justify-content:space-between;margin-bottom:3px">
      <span style="font-size:10px;color:rgba(255,255,255,0.6)">${label}</span>
      <span id="vl-${key}" style="font-size:10px;color:#D4A017;font-weight:700">—</span>
    </div>
    <input type="range" id="sl-${key}" min="${min}" max="${max}" step="${step}" value="0"
      style="width:100%;accent-color:#D4A017;cursor:pointer">
  </div>`
}

function syncSlidersFromCfg(container, cfg) {
  const keys = ['cw_ratio','card_offset_pc','card_offset_mob','margin_pc','margin_mob',
                 'link_width_green','link_width_yellow','link_width_red','link_opacity',
                 'pad_ratio','mob_pad_ratio','pad_min']
  keys.forEach(k => {
    const sl = container.querySelector(`#sl-${k}`)
    const vl = container.querySelector(`#vl-${k}`)
    if (sl && cfg[k] !== undefined) { sl.value = cfg[k]; if(vl) vl.textContent = cfg[k] }
  })
}

// ── Rendu principal ───────────────────────────────────────
function render(container, state) {
  const isMob   = state.viewport === 'mobile'
  const viewW   = isMob ? 375 : 1100
  const frame   = container.querySelector('#preview-frame')
  const content = container.querySelector('#preview-content')
  const dragL   = container.querySelector('#card-drag-layer')
  const label   = container.querySelector('#preview-label')
  const calcDiv = container.querySelector('#calc-vals')
  if (!frame || !content) return

  frame.style.width = viewW + 'px'
  label.textContent = isMob ? `MOBILE — ${viewW}px` : `PC — ${viewW}px`

  const cfg = state.cfg
  const W   = viewW - 40
  const H   = Math.round(W * 1.05)
  const CW  = Math.max(52, Math.round(W * cfg.cw_ratio))
  const PAD = isMob
    ? Math.round(CW * cfg.mob_pad_ratio)
    : Math.round(Math.max(CW * cfg.pad_ratio, cfg.pad_min))
  const marginTop = isMob ? cfg.margin_mob : cfg.margin_pc
  const cardOffset = isMob ? cfg.card_offset_mob : cfg.card_offset_pc

  if (calcDiv) calcDiv.innerHTML =
    `W: ${W}px · H: ${H}px<br>CW (carte): ${CW}px<br>CH (carte): ${Math.round(CW*657/507)}px<br>PAD: ${PAD}px<br>margin-top: ${marginTop}px<br>card-offset: ${cardOffset}px`

  // Patcher les positions avec overrides
  const overrides = cfg.position_overrides?.[state.formation] || {}
  const origPos   = FORMATION_POSITIONS[state.formation] || {}
  const patchedPos = { ...origPos }
  Object.entries(overrides).forEach(([pos, coords]) => {
    patchedPos[pos] = { ...origPos[pos], ...coords }
  })
  FORMATION_POSITIONS[state.formation] = patchedPos

  // Construire le SVG
  const svgHtml = buildCustomSVG(state.team, state.formation, W, H, CW, PAD, cfg)

  FORMATION_POSITIONS[state.formation] = origPos

  // Rendu de la page choisie
  content.innerHTML = renderPagePreview(state, svgHtml, marginTop, viewW, cfg)
  frame.style.minHeight = (H + marginTop + 100) + 'px'

  // Overlays drag cartes
  buildDragOverlays(container, state, W, H, CW, PAD, marginTop, patchedPos)
}

// ── SVG custom (cartes + liens séparés) ───────────────────
function buildCustomSVG(team, formation, W, H, CW, PAD, cfg) {
  const CH      = Math.round(CW * 657 / 507)
  const FPOS    = FORMATION_POSITIONS[formation] || {}
  const FLINKS  = getActiveLinks(formation) || FORMATION_LINKS[formation] || []

  const vbX = -PAD, vbY = -PAD, vbW = W + PAD*2, vbH = H + PAD*2

  let linksSvg = ''
  let cardsSvg = ''

  // ── Liens ──────────────────────────────────────────────
  for (const [posA, posB] of FLINKS) {
    const pA = FPOS[posA], pB = FPOS[posB]
    if (!pA || !pB) continue
    const x1 = pA.x * W, y1 = pA.y * H
    const x2 = pB.x * W, y2 = pB.y * H

    // Couleur basée sur les joueurs réels
    const roleA = posA.replace(/[0-9]/g,'')
    const roleB = posB.replace(/[0-9]/g,'')
    const pAp = (team[roleA]||[])[0]
    const pBp = (team[roleB]||[])[0]
    const lc  = pAp && pBp ? linkColor(pAp, pBp) : '#FFD700'

    const lw = lc === '#00ff88' ? cfg.link_width_green
             : lc === '#FFD700' ? cfg.link_width_yellow
             : cfg.link_width_red
    const op = cfg.link_opacity

    linksSvg += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"
      stroke="${lc}" stroke-width="${lw}" opacity="${op}" stroke-linecap="round"/>`
  }

  // ── Cartes ─────────────────────────────────────────────
  const slots = {}
  const LINES = ['ATT','MIL','DEF','GK']
  for (const role of LINES) {
    ;(team[role]||[]).forEach((p,i) => { slots[`${role}${i+1}`] = p })
  }

  for (const [pos, p] of Object.entries(slots)) {
    const coord = FPOS[pos]
    if (!coord || !p) continue
    const role = pos.replace(/[0-9]/g,'')
    const fx = Math.round(coord.x * W - CW/2)
    const fy = Math.round(coord.y * H - CH/2)
    const cardHtml = renderPlayerCard(
      { ...p, _evolution_bonus: 0 },
      { width: CW, showStad: !!p.stadiumBonus, role, extraNote: 0, _cardOffset: 0 }
    )
    cardsSvg += `<foreignObject x="${fx}" y="${fy - 26}" width="${CW+8}" height="${CH+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">${cardHtml}</div>
    </foreignObject>`
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="${vbX} ${vbY} ${vbW} ${vbH}"
    width="100%" style="display:block;overflow:visible">
    <g id="links-group">${linksSvg}</g>
    <g id="cards-group">${cardsSvg}</g>
  </svg>`
}

// ── Preview des différentes pages ─────────────────────────
function renderPagePreview(state, svgHtml, marginTop, viewW, cfg) {
  const isMob = state.viewport === 'mobile'
  const pg    = state.page

  const terrain = `<div style="margin-top:${marginTop}px;overflow:visible">${svgHtml}</div>`

  if (pg === 'deck-select') return `
    <div style="background:#0a3d1e;color:#fff;width:${viewW}px">
      <div style="padding:8px 12px;background:rgba(0,0,0,0.4);text-align:center">
        <div style="font-size:10px;opacity:.5;letter-spacing:2px">MATCH VS IA — EASY</div>
        <div style="font-size:15px;font-weight:900">Choisis ton deck</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
        <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:16px">◀</div>
        <div style="flex:1;text-align:center">
          <div style="font-size:16px;font-weight:900">3-5-2 : TEAM OM</div>
          <div style="font-size:11px;opacity:.6">${state.formation} · 11/11</div>
        </div>
        <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:16px">▶</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent)">
        <span>🏟️</span><span style="font-size:12px;font-weight:700">Stade de Marseille</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs OM</span>
      </div>
      <div style="overflow:visible">${terrain}</div>
      <div style="padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2);margin-top:8px">
        <div style="width:100%;padding:14px;border-radius:12px;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;text-align:center">✅ Valider ce deck</div>
        <div style="width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.5);font-size:13px;text-align:center">Annuler</div>
      </div>
    </div>`

  if (pg === 'match') return `
    <div style="background:#0a3d1e;color:#fff;width:${viewW}px">
      <div style="padding:8px 12px;background:rgba(0,0,0,0.5);display:flex;align-items:center;gap:8px">
        <div style="width:30px;height:30px;border-radius:50%;background:#c0392b;display:flex;align-items:center;justify-content:center;font-size:12px">✕</div>
        <div style="flex:1;text-align:center;font-size:13px;font-weight:900">LEGENDARY TEAM <span style="color:#D4A017">2</span> — <span style="color:#D4A017">1</span> IA EASY</div>
        <div style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:14px">👁️</div>
      </div>
      <div style="overflow:visible">${terrain}</div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.08)">
        <div style="display:flex;gap:6px">
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.06);font-size:11px;text-align:center">GC 1</div>
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(122,40,184,0.3);font-size:11px;text-align:center">GC 2</div>
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.06);font-size:11px;text-align:center">+1</div>
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.06);font-size:11px;text-align:center">IN/OUT</div>
        </div>
      </div>
      <div style="margin:8px;padding:14px;border-radius:12px;background:#D4A017;color:#111;font-size:15px;font-weight:900;text-align:center">⚔️ ATTAQUEZ</div>
    </div>`

  if (pg === 'opponent') return `
    <div style="background:#0a3d1e;color:#fff;width:${viewW}px;text-align:center;padding-top:12px">
      <div style="font-size:10px;opacity:.5;letter-spacing:2px">ÉQUIPE ADVERSE</div>
      <div style="font-size:20px;font-weight:900;color:#e03030;margin:4px 0 8px">IA (EASY)</div>
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);margin-bottom:4px;text-align:left">
        <span>🏟️</span><span style="font-size:12px;font-weight:700">DOGUES OLYMPIC Stadium</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 DOGUES OLYMPIC</span>
      </div>
      ${terrain}
      <div style="padding:16px;font-size:12px;opacity:0.5;font-style:italic">Chargement...</div>
    </div>`

  if (pg === 'deck-builder') return `
    <div style="background:#0a3d1e;color:#fff;width:${viewW}px">
      <div style="display:flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(0,0,0,0.4)">
        <div style="font-size:18px;cursor:pointer;opacity:0.7">←</div>
        <div style="flex:1"><div style="font-size:14px;font-weight:900">Mon Deck</div><div style="font-size:11px;opacity:0.6">11/11 · 3/5 rempl.</div></div>
        <div style="padding:6px 12px;border-radius:8px;background:#1A6B3C;font-size:12px;font-weight:700">💾 Sauvegarder</div>
      </div>
      <div style="overflow:visible">${terrain}</div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.35);border-top:1px solid rgba(255,255,255,0.08)">
        <div style="display:flex;gap:8px;align-items:center">
          <div style="flex:1">
            <div style="font-size:9px;opacity:0.5;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Remplaçants (3/5)</div>
            <div style="display:flex;gap:4px">
              ${[1,2,3].map(() => `<div style="width:34px;height:44px;background:rgba(255,255,255,0.06);border-radius:5px;border:1px solid rgba(255,255,255,0.1)"></div>`).join('')}
              <div style="width:34px;height:44px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4)">+</div>
            </div>
          </div>
          <div style="text-align:center"><div style="font-size:9px;opacity:0.5;margin-bottom:4px">🏟️</div><div style="width:44px;height:56px;border:2px dashed rgba(255,165,0,0.4);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px">🏟️</div></div>
          <div style="text-align:center"><div style="font-size:9px;opacity:0.5;margin-bottom:4px">⚽</div><div style="width:50px;height:56px;border-radius:6px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900">${state.formation}</div></div>
        </div>
      </div>
    </div>`

  return `<div>${terrain}</div>`
}

// ── Overlays drag pour les cartes ─────────────────────────
function buildDragOverlays(container, state, W, H, CW, PAD, marginTop, patchedPos) {
  const dragL  = container.querySelector('#card-drag-layer')
  const frame  = container.querySelector('#preview-frame')
  if (!dragL || !frame) return

  if (state.editMode !== 'cards') { dragL.innerHTML = ''; dragL.style.pointerEvents = 'none'; return }
  dragL.innerHTML = ''
  dragL.style.pointerEvents = 'auto'

  const frameW  = frame.clientWidth  || (state.viewport==='mobile' ? 375 : 1100)
  const frameH  = frame.clientHeight || H + marginTop + 200

  // Décalage du terrain dans la frame (centré horizontalement, margin-top verticalement)
  const terrainOffX = (frameW - (W + PAD*2)) / 2  // le SVG est width:100% donc 0 ici
  const terrainOffY = marginTop

  // Ratio SVG viewBox → pixels display
  const svgEl  = frame.querySelector('svg')
  const vb     = svgEl?.getAttribute('viewBox')?.split(' ').map(Number)
  const svgVbW = vb ? vb[2] : W + PAD*2
  const svgVbH = vb ? vb[3] : H + PAD*2
  const dispW  = svgEl?.clientWidth  || frameW
  const dispH  = svgEl?.clientHeight || H
  const scaleX = dispW / svgVbW
  const scaleY = dispH / svgVbH

  const formation = state.formation
  const origPos   = FORMATION_POSITIONS[formation] || {}

  Object.entries(patchedPos).forEach(([pos, coord]) => {
    const role = pos.replace(/[0-9]/g,'')
    if (!state.team[role]?.length) return

    // Position en pixels dans le display (SVG space → display space)
    const svgX = (coord.x * W + PAD) * scaleX
    const svgY = (coord.y * H + PAD) * scaleY + terrainOffY

    const dot = document.createElement('div')
    dot.dataset.pos = pos
    dot.style.cssText = `
      position:absolute;
      left:${svgX - 12}px;top:${svgY - 12}px;
      width:24px;height:24px;
      border-radius:50%;
      border:2.5px solid #D4A017;
      background:rgba(212,160,23,0.35);
      cursor:grab;z-index:20;
      display:flex;align-items:center;justify-content:center;
      font-size:7px;color:#D4A017;font-weight:900;
      user-select:none;touch-action:none;
      box-shadow:0 0 8px rgba(212,160,23,0.5)`
    dot.textContent = pos.slice(0,4)
    dragL.appendChild(dot)

    let dragging = false, sX, sY, sL, sT

    const onDown = e => {
      e.preventDefault()
      dragging = true
      const pt = e.touches ? e.touches[0] : e
      sX = pt.clientX; sY = pt.clientY
      sL = parseFloat(dot.style.left); sT = parseFloat(dot.style.top)
      dot.style.cursor = 'grabbing'
      dot.style.zIndex = '30'
      dot.style.background = 'rgba(212,160,23,0.7)'
    }
    const onMove = e => {
      if (!dragging) return
      e.preventDefault()
      const pt = e.touches ? e.touches[0] : e
      dot.style.left = (sL + pt.clientX - sX) + 'px'
      dot.style.top  = (sT + pt.clientY - sY) + 'px'
    }
    const onUp = e => {
      if (!dragging) return
      dragging = false
      dot.style.cursor = 'grab'
      dot.style.zIndex = '20'
      dot.style.background = 'rgba(212,160,23,0.35)'

      // Convertir pixels finaux → coords normalisées
      const newPxX = parseFloat(dot.style.left) + 12
      const newPxY = parseFloat(dot.style.top)  + 12 - terrainOffY
      const newX = Math.max(0.01, Math.min(0.99, (newPxX / scaleX - PAD) / W))
      const newY = Math.max(0.01, Math.min(0.99, (newPxY / scaleY - PAD) / H))

      if (!state.cfg.position_overrides) state.cfg.position_overrides = {}
      if (!state.cfg.position_overrides[formation]) state.cfg.position_overrides[formation] = {}
      state.cfg.position_overrides[formation][pos] = {
        x: +newX.toFixed(4), y: +newY.toFixed(4)
      }

      render(container, state)
    }

    dot.addEventListener('mousedown',  onDown)
    dot.addEventListener('touchstart', onDown, { passive: false })
    document.addEventListener('mousemove', onMove)
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('mouseup',   onUp)
    document.addEventListener('touchend',  onUp)
  })
}

// ── Listeners ─────────────────────────────────────────────
function bindAll(container, state) {

  // Pages
  container.querySelectorAll('.pg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.page = btn.dataset.pg
      container.querySelectorAll('.pg-btn').forEach(b => {
        b.style.background = b.dataset.pg === state.page ? '#1A6B3C' : 'transparent'
        b.style.color      = b.dataset.pg === state.page ? '#fff' : 'rgba(255,255,255,0.5)'
      })
      render(container, state)
    })
  })

  // Viewport
  const activateVP = (vp) => {
    state.viewport = vp
    const mob = container.querySelector('#vp-mob')
    const pc  = container.querySelector('#vp-pc')
    mob.style.background = vp==='mobile' ? '#1A6B3C' : 'transparent'
    mob.style.color      = vp==='mobile' ? '#fff' : 'rgba(255,255,255,0.5)'
    pc.style.background  = vp==='pc'     ? '#1A6B3C' : 'transparent'
    pc.style.color       = vp==='pc'     ? '#fff' : 'rgba(255,255,255,0.5)'
    render(container, state)
  }
  container.querySelector('#vp-mob')?.addEventListener('click', () => activateVP('mobile'))
  container.querySelector('#vp-pc') ?.addEventListener('click', () => activateVP('pc'))

  // Mode édition
  const activateMode = (mode) => {
    state.editMode = mode
    const mc = container.querySelector('#mode-cards')
    const ml = container.querySelector('#mode-links')
    const pc = container.querySelector('#panel-cards')
    const pl = container.querySelector('#panel-links')
    mc.style.background = mode==='cards' ? '#7a28b8' : 'transparent'
    mc.style.color      = mode==='cards' ? '#fff' : 'rgba(255,255,255,0.5)'
    ml.style.background = mode==='links' ? '#7a28b8' : 'transparent'
    ml.style.color      = mode==='links' ? '#fff' : 'rgba(255,255,255,0.5)'
    pc.style.display    = mode==='cards' ? 'block' : 'none'
    pl.style.display    = mode==='links' ? 'block' : 'none'
    render(container, state)
  }
  container.querySelector('#mode-cards')?.addEventListener('click', () => activateMode('cards'))
  container.querySelector('#mode-links')?.addEventListener('click', () => activateMode('links'))

  // Formation
  container.querySelector('#ed-form')?.addEventListener('change', e => {
    state.formation = e.target.value
    const resetBtn = container.querySelector('#reset-pos-btn')
    if (resetBtn) resetBtn.textContent = `↺ Reset positions (${state.formation})`
    render(container, state)
  })

  // Sliders
  const sliderKeys = ['cw_ratio','card_offset_pc','card_offset_mob','margin_pc','margin_mob',
                       'link_width_green','link_width_yellow','link_width_red','link_opacity',
                       'pad_ratio','mob_pad_ratio','pad_min']
  sliderKeys.forEach(k => {
    const sl = container.querySelector(`#sl-${k}`)
    const vl = container.querySelector(`#vl-${k}`)
    if (sl) sl.addEventListener('input', () => {
      state.cfg[k] = parseFloat(sl.value)
      if (vl) vl.textContent = sl.value
      render(container, state)
    })
  })

  // Reset positions
  container.querySelector('#reset-pos-btn')?.addEventListener('click', () => {
    if (state.cfg.position_overrides) delete state.cfg.position_overrides[state.formation]
    render(container, state)
  })

  // Reset tout
  container.querySelector('#reset-btn')?.addEventListener('click', () => {
    Object.assign(state.cfg, { ...SVG_DEFAULTS, position_overrides: {} })
    syncSlidersFromCfg(container, state.cfg)
    render(container, state)
  })

  // Sauvegarder
  container.querySelector('#save-btn')?.addEventListener('click', async () => {
    const saveBtn = container.querySelector('#save-btn')
    const status  = container.querySelector('#save-status')
    saveBtn.disabled = true
    saveBtn.textContent = '⏳ Sauvegarde...'
    const ok = await saveSvgConfig(state.cfg)
    saveBtn.disabled = false
    saveBtn.textContent = '💾 Sauvegarder'
    if (ok) {
      status.textContent = '✅ Sauvegardé !'
      status.style.color = '#22c55e'
    } else {
      status.textContent = '❌ Erreur Supabase'
      status.style.color = '#e03030'
    }
    setTimeout(() => { status.textContent = '' }, 3000)
  })
}
