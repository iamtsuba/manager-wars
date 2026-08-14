/**
 * card-design-editor.js — Éditeur visuel "Design Card"
 * Accessible depuis Admin > Joueurs. Permet de repositionner/zoomer/
 * afficher-masquer chaque composant de la carte joueur (PC et mobile),
 * et de régler leur visibilité écran par écran. Les réglages sont lus
 * PARTOUT dans l'app via src/lib/cardDesign.js.
 */
import { supabase } from '../../lib/supabase.js'
import { renderPlayerCard } from '../../components/player-card.js'
import { invalidateCardDesignCache, CONTEXTS } from '../../lib/cardDesign.js'

const COMPONENTS = [
  { key: 'name',   label: '📛 Nom' },
  { key: 'photo',  label: '🖼️ Photo / silhouette' },
  { key: 'note',   label: '🔢 Note principale' },
  { key: 'note2',  label: '🔸 Note secondaire' },
  { key: 'flag',   label: '🏳️ Drapeau (pays)' },
  { key: 'club',   label: '🛡️ Logo club' },
  { key: 'stadium_badge', label: '🏟️ Badge stade' },
]
const CONTEXT_LABELS = {
  collection: 'Collection', formation: 'Formation', selector: 'Sélecteur',
  match: 'Match', mercato: 'Mercato', boosters: 'Boosters', admin: 'Admin', accueil: 'Accueil',
}

export async function openCardDesignEditor(helpers) {
  const { openModal, closeModal, toast } = helpers

  let mode = 'pc'
  let selectedComponent = 'name'
  let components = {}   // { [mode]: { [component]: {x,y,scale} } }
  let visibility = {}   // { [mode]: { [component]: { [context]: bool } } }

  const { data: compRows } = await supabase.from('card_design_components').select('*')
  const { data: visRows }  = await supabase.from('card_design_visibility').select('*')
  ;['pc', 'mobile'].forEach(m => { components[m] = {}; visibility[m] = {} })
  ;(compRows || []).forEach(c => { components[c.mode][c.component] = { x: Number(c.x_pct), y: Number(c.y_pct), scale: Number(c.scale) } })
  ;(visRows || []).forEach(v => {
    if (!visibility[v.mode][v.component]) visibility[v.mode][v.component] = {}
    visibility[v.mode][v.component][v.context] = v.visible
  })
  // Complète les entrées manquantes avec des valeurs neutres pour ne rien casser
  COMPONENTS.forEach(({ key }) => {
    ;['pc', 'mobile'].forEach(m => {
      if (!components[m][key]) components[m][key] = { x: 0.5, y: 0.5, scale: 1 }
      if (!visibility[m][key]) visibility[m][key] = {}
      CONTEXTS.forEach(ctx => { if (visibility[m][key][ctx] === undefined) visibility[m][key][ctx] = true })
    })
  })

  // Joueur fictif pour l'aperçu, modifiable via les champs de test
  const testPlayer = {
    id: 'preview', firstname: 'Jean', surname_real: 'MANGALA',
    job: 'MIL', job2: 'DEF', rarity: 'pepite', country_code: 'FR',
    note_g: 10, note_d: 62, note_m: 78, note_a: 15,
    clubs: { encoded_name: 'PSG', logo_url: null, kit_style: 'uni', kit_color1: '#1A6B3C', kit_color2: '#fff', kit_shorts: '#fff', kit_socks: '#1A6B3C' },
    face: null, evolution_bonus: 0,
  }
  let previewContext = 'collection'
  let previewStadBonus = false

  const PREVIEW_W = 340

  function renderPreviewCard() {
    return renderPlayerCard(testPlayer, {
      width: PREVIEW_W,
      compactSquare: mode === 'mobile',
      context: previewContext,
      showStad: previewStadBonus,
      stadDef: previewStadBonus ? { club_id: null, country_code: 'FR' } : null,
    })
  }

  function render() {
    const previewH = mode === 'mobile' ? PREVIEW_W : Math.round(PREVIEW_W * 574 / 372)

    openModal('🎨 Design Card', `
      <style>
        .cde-tab { padding:8px 16px;border-radius:8px;border:1.5px solid var(--tile-border);background:transparent;cursor:pointer;font-weight:700;font-size:13px }
        .cde-tab.active { background:var(--green);border-color:var(--green);color:#fff }
        .cde-comp-btn { display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;border:1.5px solid var(--tile-border);background:transparent;cursor:pointer;font-size:13px;margin-bottom:6px }
        .cde-comp-btn.active { background:var(--green);border-color:var(--green);color:#fff;font-weight:700 }
        .cde-drag-box { position:absolute;border:2px dashed rgba(255,215,0,0.9);cursor:move;box-sizing:border-box;touch-action:none }
        .cde-drag-box.active { border-color:#00e5ff;border-width:3px }
        .cde-zoom-btn { width:34px;height:34px;border-radius:8px;border:1px solid var(--tile-border);background:var(--tile-bg);cursor:pointer;font-size:16px;font-weight:900 }
        .cde-vis-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:11px }
        .cde-vis-cell { display:flex;align-items:center;gap:4px;padding:4px 6px;border-radius:6px;background:var(--tile-bg-alt,rgba(0,0,0,0.15)) }
      </style>

      <div style="display:flex;gap:6px;margin-bottom:14px">
        <button class="cde-tab ${mode==='pc'?'active':''}" data-mode="pc">🖥️ PC</button>
        <button class="cde-tab ${mode==='mobile'?'active':''}" data-mode="mobile">📱 Mobile</button>
      </div>

      <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">
        <!-- Aperçu + zone de drag -->
        <div>
          <div id="cde-preview-wrap" style="position:relative;width:${PREVIEW_W}px;height:${previewH}px;background:#0a1a0f;border-radius:8px;overflow:visible">
            <div id="cde-card-render" style="position:absolute;top:0;left:0">${renderPreviewCard()}</div>
            <div id="cde-drag-layer" style="position:absolute;top:0;left:0;width:100%;height:100%"></div>
          </div>
          <div style="margin-top:10px;display:flex;gap:8px;align-items:center">
            <span style="font-size:12px;font-weight:700">Zoom :</span>
            <button class="cde-zoom-btn" id="cde-zoom-minus">−</button>
            <span id="cde-zoom-val" style="font-size:12px;min-width:40px;text-align:center">100%</span>
            <button class="cde-zoom-btn" id="cde-zoom-plus">+</button>
            <button class="btn btn-ghost btn-sm" id="cde-reset-pos" style="margin-left:8px">↺ Réinitialiser position</button>
          </div>
        </div>

        <!-- Liste des composants -->
        <div style="min-width:200px">
          <div style="font-size:12px;font-weight:800;color:var(--tile-fg-dim);margin-bottom:6px;text-transform:uppercase">Composants</div>
          ${COMPONENTS.map(c => `<button class="cde-comp-btn ${selectedComponent===c.key?'active':''}" data-comp="${c.key}">${c.label}</button>`).join('')}
        </div>

        <!-- Champs de test -->
        <div style="min-width:220px;display:flex;flex-direction:column;gap:8px">
          <div style="font-size:12px;font-weight:800;color:var(--tile-fg-dim);text-transform:uppercase">Tester avec</div>
          <div class="form-group"><label>Nom</label><input id="cde-t-name" value="${testPlayer.surname_real}"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
            <div class="form-group"><label>Poste</label>
              <select id="cde-t-job">${['GK','DEF','MIL','ATT'].map(j=>`<option ${testPlayer.job===j?'selected':''}>${j}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label>Poste 2</label>
              <select id="cde-t-job2"><option value="">Aucun</option>${['GK','DEF','MIL','ATT'].map(j=>`<option ${testPlayer.job2===j?'selected':''}>${j}</option>`).join('')}</select>
            </div>
          </div>
          <div class="form-group"><label>Rareté</label>
            <select id="cde-t-rarity">${['normal','pepite','papyte','legende'].map(r=>`<option value="${r}" ${testPlayer.rarity===r?'selected':''}>${r}</option>`).join('')}</select>
          </div>
          <div class="form-group"><label>Note (poste actuel)</label><input id="cde-t-note" type="number" value="62"></div>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px"><input type="checkbox" id="cde-t-stad" ${previewStadBonus?'checked':''}> Bonus de stade actif</label>
          <div class="form-group"><label>Écran prévisualisé</label>
            <select id="cde-t-context">${CONTEXTS.map(c=>`<option value="${c}" ${previewContext===c?'selected':''}>${CONTEXT_LABELS[c]}</option>`).join('')}</select>
          </div>
        </div>
      </div>

      <div style="margin-top:18px;border-top:1px solid var(--tile-border);padding-top:14px">
        <div style="font-size:12px;font-weight:800;color:var(--tile-fg-dim);margin-bottom:8px;text-transform:uppercase">
          Visibilité de « ${COMPONENTS.find(c=>c.key===selectedComponent)?.label} » par écran (mode ${mode==='pc'?'PC':'Mobile'})
        </div>
        <div class="cde-vis-grid">
          ${CONTEXTS.map(ctx => `<label class="cde-vis-cell"><input type="checkbox" data-vis-ctx="${ctx}" ${visibility[mode][selectedComponent][ctx]?'checked':''}> ${CONTEXT_LABELS[ctx]}</label>`).join('')}
        </div>
      </div>

      <div id="cde-error" style="color:#bb2020;font-size:13px;margin-top:10px"></div>
    `, `
      <button class="btn btn-ghost" id="cde-close">Fermer sans enregistrer</button>
      <button class="btn btn-primary" id="cde-save">💾 Enregistrer</button>
    `)

    wire()
  }

  function wire() {
    document.querySelectorAll('.cde-tab').forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; render() }))
    document.querySelectorAll('.cde-comp-btn').forEach(b => b.addEventListener('click', () => { selectedComponent = b.dataset.comp; render() }))
    document.getElementById('cde-close')?.addEventListener('click', closeModal)
    document.getElementById('cde-save')?.addEventListener('click', save)

    // Champs de test -> re-render de l'aperçu uniquement (pas tout le modal)
    const refreshPreview = () => {
      testPlayer.surname_real = document.getElementById('cde-t-name').value || 'JOUEUR'
      testPlayer.job  = document.getElementById('cde-t-job').value
      testPlayer.job2 = document.getElementById('cde-t-job2').value || null
      testPlayer.rarity = document.getElementById('cde-t-rarity').value
      const noteVal = parseInt(document.getElementById('cde-t-note').value) || 0
      const keyMap = { GK:'note_g', DEF:'note_d', MIL:'note_m', ATT:'note_a' }
      testPlayer[keyMap[testPlayer.job]] = noteVal
      if (testPlayer.job2) testPlayer[keyMap[testPlayer.job2]] = Math.round(noteVal*0.8)
      previewStadBonus = document.getElementById('cde-t-stad').checked
      previewContext = document.getElementById('cde-t-context').value
      document.getElementById('cde-card-render').innerHTML = renderPreviewCard()
      attachDragBoxes()
    }
    ;['cde-t-name','cde-t-job','cde-t-job2','cde-t-rarity','cde-t-note','cde-t-stad','cde-t-context'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', refreshPreview)
      document.getElementById(id)?.addEventListener('change', refreshPreview)
    })

    // Visibilité par écran
    document.querySelectorAll('[data-vis-ctx]').forEach(cb => {
      cb.addEventListener('change', () => {
        visibility[mode][selectedComponent][cb.dataset.visCtx] = cb.checked
        refreshPreview()
      })
    })

    // Zoom
    document.getElementById('cde-zoom-minus')?.addEventListener('click', () => adjustScale(-0.05))
    document.getElementById('cde-zoom-plus')?.addEventListener('click', () => adjustScale(0.05))
    document.getElementById('cde-reset-pos')?.addEventListener('click', () => {
      components[mode][selectedComponent] = { x: 0.5, y: 0.5, scale: 1 }
      refreshPreview(); updateZoomLabel()
    })

    attachDragBoxes()
    updateZoomLabel()
  }

  function updateZoomLabel() {
    const el = document.getElementById('cde-zoom-val')
    if (el) el.textContent = Math.round((components[mode][selectedComponent]?.scale || 1) * 100) + '%'
  }

  function adjustScale(delta) {
    const c = components[mode][selectedComponent]
    c.scale = Math.max(0.3, Math.min(3, Math.round((c.scale + delta) * 100) / 100))
    document.getElementById('cde-card-render').innerHTML = renderPreviewCard()
    attachDragBoxes()
    updateZoomLabel()
  }

  // Superpose une boîte semi-transparente déplaçable par composant, calée
  // sur sa position actuelle (approximation par une zone carrée centrée —
  // suffisant pour du glisser-déposer, la taille réelle vient du rendu).
  function attachDragBoxes() {
    const layer = document.getElementById('cde-drag-layer')
    if (!layer) return
    layer.innerHTML = ''
    const wrap = document.getElementById('cde-preview-wrap')
    const wrapW = wrap.offsetWidth, wrapH = wrap.offsetHeight

    COMPONENTS.forEach(({ key }) => {
      const c = components[mode][key]
      const boxSize = 46
      const box = document.createElement('div')
      box.className = 'cde-drag-box' + (key === selectedComponent ? ' active' : '')
      box.style.left = (c.x * wrapW - boxSize / 2) + 'px'
      box.style.top  = (c.y * wrapH - boxSize / 2) + 'px'
      box.style.width = boxSize + 'px'
      box.style.height = boxSize + 'px'
      box.style.pointerEvents = key === selectedComponent ? 'auto' : 'none'
      box.title = key
      layer.appendChild(box)
      if (key !== selectedComponent) return

      let dragging = false, startX = 0, startY = 0, origX = c.x, origY = c.y

      const onDown = (clientX, clientY) => {
        dragging = true; startX = clientX; startY = clientY; origX = c.x; origY = c.y
      }
      const onMove = (clientX, clientY) => {
        if (!dragging) return
        const dx = (clientX - startX) / wrapW
        const dy = (clientY - startY) / wrapH
        c.x = Math.max(0, Math.min(1, origX + dx))
        c.y = Math.max(0, Math.min(1, origY + dy))
        box.style.left = (c.x * wrapW - boxSize / 2) + 'px'
        box.style.top  = (c.y * wrapH - boxSize / 2) + 'px'
        document.getElementById('cde-card-render').innerHTML = renderPreviewCard()
      }
      const onUp = () => { dragging = false }

      box.addEventListener('mousedown', e => { e.preventDefault(); onDown(e.clientX, e.clientY) })
      window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY))
      window.addEventListener('mouseup', onUp)
      box.addEventListener('touchstart', e => { const t = e.touches[0]; onDown(t.clientX, t.clientY) }, { passive: true })
      box.addEventListener('touchmove', e => { const t = e.touches[0]; onMove(t.clientX, t.clientY) }, { passive: true })
      box.addEventListener('touchend', onUp)
    })
  }

  async function save() {
    const errEl = document.getElementById('cde-error')
    errEl.textContent = ''
    const saveBtn = document.getElementById('cde-save')
    saveBtn.disabled = true; saveBtn.textContent = '⏳ Enregistrement...'

    const compRows2 = []
    const visRows2 = []
    ;['pc', 'mobile'].forEach(m => {
      COMPONENTS.forEach(({ key }) => {
        const c = components[m][key]
        compRows2.push({ mode: m, component: key, x_pct: c.x, y_pct: c.y, scale: c.scale })
        CONTEXTS.forEach(ctx => {
          visRows2.push({ mode: m, component: key, context: ctx, visible: !!visibility[m][key][ctx] })
        })
      })
    })

    const { error: e1 } = await supabase.from('card_design_components').upsert(compRows2, { onConflict: 'mode,component' })
    if (e1) { errEl.textContent = e1.message; saveBtn.disabled = false; saveBtn.textContent = '💾 Enregistrer'; return }
    const { error: e2 } = await supabase.from('card_design_visibility').upsert(visRows2, { onConflict: 'mode,component,context' })
    if (e2) { errEl.textContent = e2.message; saveBtn.disabled = false; saveBtn.textContent = '💾 Enregistrer'; return }

    invalidateCardDesignCache()
    toast('✅ Design enregistré — appliqué partout dans l\'app', 'success')
    closeModal()
  }

  render()
}
