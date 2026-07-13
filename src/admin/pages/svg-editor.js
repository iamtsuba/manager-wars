/**
 * svg-editor.js — Éditeur visuel SVG terrain de jeu
 *
 * Permet d'ajuster en direct sur PC et mobile :
 *   - Positions X/Y de chaque joueur (drag & drop)
 *   - Taille des cartes (CW ratio)
 *   - PAD haut/bas/gauche/droite
 *   - margin-top du wrap
 *   - preserveAspectRatio
 *
 * Génère le code CSS/JS à copier-coller dans match-shared.js
 */

import { supabase } from '../../lib/supabase.js'
import { FORMATION_POSITIONS } from '../../match/formation-links.js'
import { renderPlayerCard }    from '../../components/player-card.js'
import { buildTeamSVG }        from '../../match/match-shared.js'

// ── Valeurs par défaut (synchronisées avec match-shared.js) ──
const DEFAULTS = {
  CW_RATIO:    0.18,   // CW = W * CW_RATIO
  PAD_RATIO:   0.70,   // PAD = max(CW * PAD_RATIO, 80)
  PAD_MIN:     80,
  MARGIN_PC:   30,
  MARGIN_MOB:  10,
  PRESRV_PC:  'xMidYMid meet',
  PRESRV_MOB: 'none',
  MOB_PAD_RATIO: 0.55, // PAD mobile = CW * MOB_PAD_RATIO
}

export async function renderSvgEditor(container) {
  // Charger une équipe sample depuis la DB
  const { data: cards } = await supabase
    .from('deck_cards')
    .select(`id, position, card_id, is_starter,
      card:cards(id, card_type, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, skin, hair, hair_length, face, rarity,
          clubs(encoded_name, logo_url)))`)
    .eq('is_starter', true)
    .limit(11)

  const starters = (cards || []).filter(dc => dc.card?.player)
  const sampleFormation = '4-3-3'

  // Construire une team sample
  const team = { GK: [], DEF: [], MIL: [], ATT: [] }
  if (starters.length >= 11) {
    starters.forEach(dc => {
      const role = dc.position?.replace(/[0-9]/g, '') || 'MIL'
      if (!team[role]) team[role] = []
      const p = dc.card.player
      team[role].push({
        cardId: dc.card_id,
        name: p.surname_real || p.firstname,
        firstname: p.firstname,
        note_g: (p.note_g || 0) + (dc.card.evolution_bonus || 0),
        note_d: (p.note_d || 0) + (dc.card.evolution_bonus || 0),
        note_m: (p.note_m || 0) + (dc.card.evolution_bonus || 0),
        note_a: (p.note_a || 0) + (dc.card.evolution_bonus || 0),
        _evolution_bonus: 0,
        job: p.job, job2: p.job2,
        _line: role, _col: 0,
        country_code: p.country_code,
        club_id: p.club_id,
        rarity: p.rarity,
        clubName: p.clubs?.encoded_name,
        clubLogo: p.clubs?.logo_url,
        face: p.face,
        used: false, boost: 0, stadiumBonus: false,
      })
    })
  } else {
    // Équipe fictive si pas assez de joueurs
    const roles = ['GK','DEF','DEF','DEF','DEF','MIL','MIL','MIL','ATT','ATT','ATT']
    roles.forEach((role, i) => {
      if (!team[role]) team[role] = []
      team[role].push({
        cardId: `fake-${i}`, name: role, firstname: '',
        note_g:10, note_d:10, note_m:10, note_a:10, _evolution_bonus:0,
        job: role, _line: role, _col: i,
        country_code: 'FR', rarity: 'normal',
        used: false, boost: 0, stadiumBonus: false,
      })
    })
  }

  // State de l'éditeur
  const state = {
    formation:    sampleFormation,
    viewport:     'mobile',   // 'mobile' | 'pc'
    CW_RATIO:     DEFAULTS.CW_RATIO,
    PAD_RATIO:    DEFAULTS.PAD_RATIO,
    PAD_MIN:      DEFAULTS.PAD_MIN,
    MARGIN_PC:    DEFAULTS.MARGIN_PC,
    MARGIN_MOB:   DEFAULTS.MARGIN_MOB,
    MOB_PAD_RATIO: DEFAULTS.MOB_PAD_RATIO,
    // Overrides de positions par formation
    posOverrides: {},  // { formation: { pos: { x, y } } }
    team,
  }

  container.innerHTML = `
  <div style="display:flex;flex-direction:column;height:100%;background:#0a1a0f;color:#fff;font-family:monospace;overflow:hidden">

    <!-- Toolbar -->
    <div style="flex-shrink:0;background:#0d2a12;border-bottom:1px solid rgba(255,255,255,0.1);padding:8px 12px;display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      <span style="font-weight:900;color:#D4A017;font-size:14px">🎨 SVG Editor</span>

      <!-- Viewport switch -->
      <div style="display:flex;background:rgba(0,0,0,0.3);border-radius:8px;overflow:hidden">
        <button id="vp-mobile" style="padding:5px 12px;border:none;background:#1A6B3C;color:#fff;font-size:12px;cursor:pointer;font-weight:700">📱 Mobile</button>
        <button id="vp-pc"     style="padding:5px 12px;border:none;background:transparent;color:rgba(255,255,255,0.5);font-size:12px;cursor:pointer">🖥️ PC</button>
      </div>

      <!-- Formation -->
      <select id="ed-formation" style="padding:4px 8px;border-radius:6px;background:#1a3a1a;border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:12px">
        ${Object.keys(FORMATION_POSITIONS).map(f =>
          `<option value="${f}" ${f===sampleFormation?'selected':''}>${f}</option>`
        ).join('')}
      </select>

      <button id="gen-code" style="padding:5px 14px;border:none;border-radius:6px;background:#D4A017;color:#111;font-size:12px;font-weight:900;cursor:pointer">⚙️ Générer le code</button>
      <button id="reset-vals" style="padding:5px 10px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:rgba(255,255,255,0.6);font-size:11px;cursor:pointer">↺ Reset</button>
    </div>

    <!-- Main : preview + controls -->
    <div style="flex:1;min-height:0;display:flex;gap:0;overflow:hidden">

      <!-- Preview SVG -->
      <div id="preview-wrap" style="flex:1;min-width:0;display:flex;align-items:center;justify-content:center;background:#0a3d1e;overflow:hidden;position:relative">
        <div id="preview-inner" style="position:relative;border:2px solid rgba(255,255,255,0.15);border-radius:8px;overflow:visible">
          <div id="svg-mount" style="overflow:visible"></div>
          <!-- Overlays drag cliquables -->
          <div id="drag-layer" style="position:absolute;inset:0;pointer-events:none"></div>
        </div>
        <div id="viewport-label" style="position:absolute;top:8px;left:50%;transform:translateX(-50%);font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:1px">MOBILE — 375px</div>
      </div>

      <!-- Contrôles -->
      <div style="width:260px;flex-shrink:0;background:#0d2a12;border-left:1px solid rgba(255,255,255,0.08);overflow-y:auto;padding:12px">

        <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px">Paramètres</div>

        <!-- CW Ratio -->
        ${slider('CW_RATIO', 'Taille cartes (CW = W × ratio)', 0.08, 0.30, 0.01, state.CW_RATIO)}
        <!-- PAD Ratio -->
        ${slider('PAD_RATIO', 'PAD normal (CW × ratio)', 0.20, 1.50, 0.05, state.PAD_RATIO)}
        <!-- PAD Min -->
        ${slider('PAD_MIN', 'PAD minimum (px)', 20, 120, 5, state.PAD_MIN)}
        <!-- Mobile PAD Ratio -->
        ${slider('MOB_PAD_RATIO', 'PAD mobile (CW × ratio)', 0.10, 1.00, 0.05, state.MOB_PAD_RATIO)}
        <!-- Margin PC -->
        ${slider('MARGIN_PC', 'Margin-top PC (px)', 0, 80, 2, state.MARGIN_PC)}
        <!-- Margin Mobile -->
        ${slider('MARGIN_MOB', 'Margin-top Mobile (px)', 0, 80, 2, state.MARGIN_MOB)}

        <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,0.1);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Positions joueurs</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-bottom:8px">Glisse les cartes dans le SVG pour les repositionner</div>
          <button id="reset-pos" style="width:100%;padding:6px;border:1px solid rgba(255,100,100,0.4);border-radius:6px;background:transparent;color:rgba(255,150,150,0.8);font-size:11px;cursor:pointer">↺ Réinitialiser les positions</button>
        </div>

        <!-- Valeurs courantes -->
        <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,0.1);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Valeurs calculées</div>
          <div id="calc-vals" style="font-size:10px;color:#4fc3f7;line-height:1.8"></div>
        </div>

      </div>
    </div>

    <!-- Code généré -->
    <div id="code-panel" style="display:none;flex-shrink:0;max-height:220px;background:#000;border-top:2px solid #D4A017;padding:12px;overflow-y:auto">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:12px;color:#D4A017;font-weight:700">Code à copier dans match-shared.js</span>
        <button id="copy-code" style="padding:3px 10px;border:1px solid #D4A017;border-radius:4px;background:transparent;color:#D4A017;font-size:11px;cursor:pointer">📋 Copier</button>
        <button id="close-code" style="margin-left:auto;padding:3px 8px;border:none;background:rgba(255,255,255,0.1);color:#fff;border-radius:4px;cursor:pointer">✕</button>
      </div>
      <pre id="code-content" style="font-size:11px;color:#a8ff78;margin:0;white-space:pre-wrap"></pre>
    </div>

  </div>`

  // ── Init ────────────────────────────────────────────────
  render(container, state)
  bindControls(container, state)
}

// ── Slider helper ────────────────────────────────────────
function slider(key, label, min, max, step, val) {
  return `
  <div style="margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;margin-bottom:3px">
      <span style="font-size:10px;color:rgba(255,255,255,0.6)">${label}</span>
      <span id="val-${key}" style="font-size:10px;color:#D4A017;font-weight:700">${val}</span>
    </div>
    <input type="range" id="sl-${key}" min="${min}" max="${max}" step="${step}" value="${val}"
      style="width:100%;accent-color:#D4A017">
  </div>`
}

// ── Rendu principal ──────────────────────────────────────
function render(container, state) {
  const isMobile = state.viewport === 'mobile'
  const viewW    = isMobile ? 375 : 860

  // Dimensions preview
  const previewInner = container.querySelector('#preview-inner')
  const svgMount     = container.querySelector('#svg-mount')
  const dragLayer    = container.querySelector('#drag-layer')
  const vpLabel      = container.querySelector('#viewport-label')
  if (!previewInner || !svgMount) return

  // Appliquer la largeur du viewport
  previewInner.style.width  = viewW + 'px'

  // Calculer les paramètres
  const W   = viewW - 40
  const H   = Math.round(W * 1.1)
  const CW  = Math.max(52, Math.round(W * state.CW_RATIO))
  const PAD = isMobile
    ? Math.round(CW * state.MOB_PAD_RATIO)
    : Math.round(Math.max(CW * state.PAD_RATIO, state.PAD_MIN))
  const marginTop = isMobile ? state.MARGIN_MOB : state.MARGIN_PC

  // Mettre à jour les valeurs calculées
  const calcDiv = container.querySelector('#calc-vals')
  if (calcDiv) calcDiv.innerHTML =
    `W terrain: ${W}px<br>H terrain: ${H}px<br>CW (carte): ${CW}px<br>CH (carte): ${Math.round(CW * 657/507)}px<br>PAD: ${PAD}px<br>margin-top: ${marginTop}px`

  vpLabel.textContent = isMobile ? `MOBILE — ${viewW}px` : `PC — ${viewW}px`

  // Construire le SVG avec les overrides de positions
  const formation = state.formation
  const overrides = state.posOverrides[formation] || {}

  // Patcher FORMATION_POSITIONS temporairement avec les overrides
  const origPos = FORMATION_POSITIONS[formation] || {}
  const patchedPos = { ...origPos }
  Object.entries(overrides).forEach(([pos, {x, y}]) => {
    patchedPos[pos] = { ...patchedPos[pos], x, y }
  })

  // Sauvegarder et patcher
  const _orig = FORMATION_POSITIONS[formation]
  FORMATION_POSITIONS[formation] = patchedPos

  const svgHtml = buildTeamSVG(state.team, formation, null, [], W, H, [])

  // Restaurer
  FORMATION_POSITIONS[formation] = _orig

  svgMount.innerHTML = `<div style="margin-top:${marginTop}px;overflow:visible">${svgHtml}</div>`

  // Ajuster la hauteur preview
  const svgEl = svgMount.querySelector('svg')
  if (svgEl) {
    svgEl.style.width  = '100%'
    svgEl.style.height = 'auto'
    svgEl.setAttribute('preserveAspectRatio', isMobile ? 'none' : 'xMidYMid meet')
  }

  previewInner.style.height = (H + marginTop + 20) + 'px'

  // ── Drag layer : overlays sur chaque joueur ──────────────
  dragLayer.innerHTML = ''
  dragLayer.style.pointerEvents = 'auto'

  const vb   = svgEl?.getAttribute('viewBox')?.split(' ').map(Number)
  const svgW = vb ? vb[2] : W + PAD * 2
  const svgH = vb ? vb[3] : H + PAD * 2

  // Créer un overlay draggable pour chaque position
  Object.entries(patchedPos).forEach(([pos, coord]) => {
    const role = pos.replace(/[0-9]/g, '')
    if (!state.team[role]?.length) return

    // Convertir coordonnées SVG → pixels display
    const displayW = previewInner.clientWidth || viewW
    const displayH = previewInner.clientHeight || H + marginTop + 20
    const scaleX = displayW / svgW
    const scaleY = (displayH - marginTop) / svgH

    const px = (coord.x * W + PAD) * scaleX
    const py = (coord.y * H + PAD) * scaleY + marginTop

    const dot = document.createElement('div')
    dot.dataset.pos = pos
    dot.title = pos
    dot.style.cssText = `
      position:absolute;
      left:${px - 10}px;top:${py - 10}px;
      width:20px;height:20px;
      border-radius:50%;
      border:2px solid #D4A017;
      background:rgba(212,160,23,0.3);
      cursor:grab;
      z-index:10;
      display:flex;align-items:center;justify-content:center;
      font-size:7px;color:#D4A017;font-weight:700;
      user-select:none`
    dot.textContent = pos.slice(0, 3)
    dragLayer.appendChild(dot)

    // Drag & drop
    let dragging = false, startX, startY, startLeft, startTop

    dot.addEventListener('mousedown', e => {
      dragging = true
      startX = e.clientX; startY = e.clientY
      startLeft = parseFloat(dot.style.left)
      startTop  = parseFloat(dot.style.top)
      dot.style.cursor = 'grabbing'
      e.preventDefault()
    })

    document.addEventListener('mousemove', e => {
      if (!dragging || dot.dataset.pos !== pos) return
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      dot.style.left = (startLeft + dx) + 'px'
      dot.style.top  = (startTop  + dy) + 'px'
    })

    document.addEventListener('mouseup', e => {
      if (!dragging || dot.dataset.pos !== pos) return
      dragging = false
      dot.style.cursor = 'grab'

      // Convertir pixels finaux → coordonnées normalisées SVG
      const newPx = parseFloat(dot.style.left) + 10
      const newPy = parseFloat(dot.style.top)  + 10 - marginTop
      const newX  = Math.max(0, Math.min(1, (newPx / scaleX - PAD) / W))
      const newY  = Math.max(0, Math.min(1, (newPy / scaleY - PAD) / H))

      if (!state.posOverrides[formation]) state.posOverrides[formation] = {}
      state.posOverrides[formation][pos] = {
        x: +newX.toFixed(3),
        y: +newY.toFixed(3),
        ...((origPos[pos]?.link) ? { link: origPos[pos].link } : {})
      }

      // Re-render sans recréer les overlays (juste le SVG)
      render(container, state)
    })
  })
}

// ── Listeners contrôles ──────────────────────────────────
function bindControls(container, state) {

  // Sliders
  ;['CW_RATIO','PAD_RATIO','PAD_MIN','MOB_PAD_RATIO','MARGIN_PC','MARGIN_MOB'].forEach(key => {
    const sl = container.querySelector(`#sl-${key}`)
    const vl = container.querySelector(`#val-${key}`)
    sl?.addEventListener('input', () => {
      state[key] = parseFloat(sl.value)
      vl.textContent = sl.value
      render(container, state)
    })
  })

  // Viewport switch
  container.querySelector('#vp-mobile')?.addEventListener('click', () => {
    state.viewport = 'mobile'
    container.querySelector('#vp-mobile').style.background = '#1A6B3C'
    container.querySelector('#vp-mobile').style.color = '#fff'
    container.querySelector('#vp-pc').style.background = 'transparent'
    container.querySelector('#vp-pc').style.color = 'rgba(255,255,255,0.5)'
    render(container, state)
  })
  container.querySelector('#vp-pc')?.addEventListener('click', () => {
    state.viewport = 'pc'
    container.querySelector('#vp-pc').style.background = '#1A6B3C'
    container.querySelector('#vp-pc').style.color = '#fff'
    container.querySelector('#vp-mobile').style.background = 'transparent'
    container.querySelector('#vp-mobile').style.color = 'rgba(255,255,255,0.5)'
    render(container, state)
  })

  // Formation
  container.querySelector('#ed-formation')?.addEventListener('change', e => {
    state.formation = e.target.value
    render(container, state)
  })

  // Reset positions
  container.querySelector('#reset-pos')?.addEventListener('click', () => {
    delete state.posOverrides[state.formation]
    render(container, state)
  })

  // Reset tout
  container.querySelector('#reset-vals')?.addEventListener('click', () => {
    Object.assign(state, { ...DEFAULTS })
    state.posOverrides = {}
    ;['CW_RATIO','PAD_RATIO','PAD_MIN','MOB_PAD_RATIO','MARGIN_PC','MARGIN_MOB'].forEach(key => {
      const sl = container.querySelector(`#sl-${key}`)
      const vl = container.querySelector(`#val-${key}`)
      if (sl) sl.value = DEFAULTS[key]
      if (vl) vl.textContent = DEFAULTS[key]
    })
    render(container, state)
  })

  // Générer le code
  container.querySelector('#gen-code')?.addEventListener('click', () => {
    const code = generateCode(state)
    container.querySelector('#code-content').textContent = code
    container.querySelector('#code-panel').style.display = 'block'
  })

  container.querySelector('#close-code')?.addEventListener('click', () => {
    container.querySelector('#code-panel').style.display = 'none'
  })

  container.querySelector('#copy-code')?.addEventListener('click', () => {
    const text = container.querySelector('#code-content').textContent
    navigator.clipboard.writeText(text).then(() => {
      const btn = container.querySelector('#copy-code')
      btn.textContent = '✅ Copié !'
      setTimeout(() => btn.textContent = '📋 Copier', 2000)
    })
  })
}

// ── Génération du code ───────────────────────────────────
function generateCode(state) {
  const overrideEntries = Object.entries(state.posOverrides)
  const posCode = overrideEntries.length
    ? overrideEntries.map(([formation, positions]) =>
        `  // ${formation}\n` +
        Object.entries(positions).map(([pos, {x,y}]) =>
          `  FORMATION_POSITIONS['${formation}']['${pos}'] = { ...FORMATION_POSITIONS['${formation}']['${pos}'], x:${x}, y:${y} }`
        ).join('\n')
      ).join('\n')
    : '  // Aucun override de position'

  return `// ── Paramètres SVG (générés par SVG Editor) ──────────────
// À coller dans buildTeamSVG() dans match-shared.js

// Taille des cartes
const CW = Math.max(52, Math.round(W * ${state.CW_RATIO}))

// PAD
const isPC_ctx = typeof window !== 'undefined' && window.innerWidth >= 900
const PAD = padOverride !== null ? padOverride
  : isPC_ctx
    ? Math.round(Math.max(CW * ${state.PAD_RATIO}, ${state.PAD_MIN}))
    : Math.round(CW * ${state.MOB_PAD_RATIO})

// Dans fixDeckSVG / fixDeckField :
const marginTop = isPC ? ${state.MARGIN_PC} : ${state.MARGIN_MOB}

// Overrides de positions (à coller dans formation-links.js ou au début de buildTeamSVG)
${posCode}
`
}
