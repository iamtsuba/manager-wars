/**
 * card-design-editor.js — Éditeur visuel "Design Card"
 * Overlay plein écran INDÉPENDANT du modal générique de l'app (celui-ci
 * est plafonné à 540px de large partout ailleurs — inadapté ici, on a
 * besoin de toute la largeur pour ne jamais avoir à scroller).
 * Chaque composant se glisse-dépose avec son VRAI visuel (drapeau, photo,
 * nom, logo...) et se redimensionne via une poignée en coin.
 */
import { supabase } from '../../lib/supabase.js'
import { renderPlayerCard, stadiumBadgeSVG } from '../../components/player-card.js'
import { invalidateCardDesignCache, CONTEXTS } from '../../lib/cardDesign.js'
import { getPortrait, assignFace } from '../../lib/portrait.js'

function flagUrlForEditor(code) {
  if (!code || code.length < 2) return null
  return `https://flagsapi.com/${code.slice(0, 2).toUpperCase()}/flat/64.png`
}

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
  const { toast } = helpers

  let mode = 'pc'
  let selectedComponent = 'name'
  let components = { pc: {}, mobile: {} }
  let visibility = { pc: {}, mobile: {} }

  const { data: compRows } = await supabase.from('card_design_components').select('*')
  const { data: visRows }  = await supabase.from('card_design_visibility').select('*')
  ;(compRows || []).forEach(c => { components[c.mode][c.component] = { x: Number(c.x_pct), y: Number(c.y_pct), scale: Number(c.scale) } })
  ;(visRows || []).forEach(v => {
    if (!visibility[v.mode][v.component]) visibility[v.mode][v.component] = {}
    visibility[v.mode][v.component][v.context] = v.visible
  })
  COMPONENTS.forEach(({ key }) => {
    ;['pc', 'mobile'].forEach(m => {
      if (!components[m][key]) components[m][key] = { x: 0.5, y: 0.5, scale: 1 }
      if (!visibility[m][key]) visibility[m][key] = {}
      CONTEXTS.forEach(ctx => { if (visibility[m][key][ctx] === undefined) visibility[m][key][ctx] = true })
    })
  })

  const testPlayer = {
    id: 'preview', firstname: 'Jean', surname_real: 'MANGALA',
    job: 'MIL', job2: 'DEF', rarity: 'pepite', country_code: 'FR',
    note_g: 10, note_d: 62, note_m: 78, note_a: 15,
    clubs: { encoded_name: 'PSG', logo_url: null, kit_style: 'uni', kit_color1: '#1A6B3C', kit_color2: '#fff', kit_shorts: '#fff', kit_socks: '#1A6B3C' },
    face: null, evolution_bonus: 0,
  }
  let previewContext = 'collection'
  let previewStadBonus = false

  // Visage aléatoire pour le test (au lieu d'une image vierge) — chargé une
  // fois à l'ouverture, mis à jour dans l'aperçu dès qu'il arrive.
  assignFace(testPlayer.country_code).then(face => {
    if (face) { testPlayer.face = face; refreshPreviewIfReady() }
  })
  function refreshPreviewIfReady() {
    const el = overlay?.querySelector('#cde-card-render')
    if (el) el.innerHTML = renderPreviewCard()
  }

  let PREVIEW_W = 380   // recalculé à l'ouverture selon la largeur d'écran

  function renderPreviewCard() {
    return renderPlayerCard(testPlayer, {
      width: PREVIEW_W,
      compactSquare: mode === 'mobile',
      context: previewContext,
      showStad: previewStadBonus,
      stadDef: previewStadBonus ? { club_id: null, country_code: 'FR' } : null,
    })
  }

  let overlay = null

  function close() {
    overlay?.remove()
    overlay = null
  }

  function render() {
    if (overlay) overlay.remove()

    // Largeur d'aperçu adaptée à l'écran, pour ne jamais avoir à scroller
    PREVIEW_W = Math.max(220, Math.min(420, Math.round(window.innerWidth * 0.28)))
    const previewH = mode === 'mobile' ? PREVIEW_W : Math.round(PREVIEW_W * 574 / 372)

    overlay = document.createElement('div')
    overlay.id = 'cde-overlay'
    overlay.style.cssText = 'position:fixed;inset:0;z-index:5000;background:#0b1410;overflow-y:auto'
    overlay.innerHTML = `
      <style>
        .cde-tab { padding:8px 16px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;cursor:pointer;font-weight:700;font-size:13px;color:#fff }
        .cde-tab.active { background:#1A6B3C;border-color:#1A6B3C;color:#fff }
        .cde-comp-btn { display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.18);background:transparent;cursor:pointer;font-size:13px;margin-bottom:6px;color:#e8e8e8 }
        .cde-comp-btn.active { background:#1A6B3C;border-color:#1A6B3C;color:#fff;font-weight:700 }
        .cde-drag-box { position:absolute;cursor:move;box-sizing:border-box;touch-action:none;
          border:2px dashed rgba(255,215,0,0.85);display:flex;align-items:center;justify-content:center;overflow:visible }
        .cde-drag-box.active { border-color:#00e5ff;border-width:3px;z-index:20 }
        .cde-drag-box:not(.active) { pointer-events:none;opacity:0.85 }
        .cde-resize-handle { position:absolute;right:-9px;bottom:-9px;width:18px;height:18px;border-radius:50%;
          background:#00e5ff;border:2px solid #06282b;cursor:nwse-resize;touch-action:none;z-index:21 }
        .cde-vis-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:11px }
        .cde-vis-cell { display:flex;align-items:center;gap:4px;padding:4px 6px;border-radius:6px;background:rgba(255,255,255,0.06);color:#ddd }
        .cde-label { font-size:11px;color:#aaa;font-weight:800;text-transform:uppercase;margin-bottom:6px }
        .cde-field label { color:#bbb !important }
        .cde-field input, .cde-field select { background:#182620;color:#fff;border-color:rgba(255,255,255,0.2) }
      </style>

      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.1);position:sticky;top:0;background:#0b1410;z-index:10">
        <div style="display:flex;align-items:center;gap:14px">
          <h2 style="color:#fff;margin:0;font-size:18px">🎨 Design Card</h2>
          <div style="display:flex;gap:6px">
            <button class="cde-tab ${mode==='pc'?'active':''}" data-mode="pc">🖥️ PC</button>
            <button class="cde-tab ${mode==='mobile'?'active':''}" data-mode="mobile">📱 Mobile</button>
          </div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost" id="cde-close" style="color:#fff;border-color:rgba(255,255,255,0.3)">Fermer sans enregistrer</button>
          <button class="btn btn-primary" id="cde-save">💾 Enregistrer</button>
        </div>
      </div>

      <div style="display:flex;gap:24px;padding:20px;flex-wrap:wrap;align-items:flex-start">
        <!-- Liste des composants -->
        <div style="min-width:190px">
          <div class="cde-label">Composants (glisser = déplacer, poignée bleue = zoom)</div>
          ${COMPONENTS.map(c => `<button class="cde-comp-btn ${selectedComponent===c.key?'active':''}" data-comp="${c.key}">${c.label}</button>`).join('')}
          <button class="btn btn-ghost btn-sm" id="cde-reset-pos" style="width:100%;margin-top:8px;color:#fff;border-color:rgba(255,255,255,0.3)">↺ Réinitialiser ce composant</button>
        </div>

        <!-- Aperçu + zone de drag -->
        <div style="flex:0 0 auto">
          <div id="cde-preview-wrap" style="position:relative;width:${PREVIEW_W}px;height:${previewH}px;background:#0a1a0f;border-radius:8px;box-shadow:0 0 0 1px rgba(255,255,255,0.08)">
            <div id="cde-card-render" style="position:absolute;top:0;left:0">${renderPreviewCard()}</div>
            <div id="cde-drag-layer" style="position:absolute;top:0;left:0;width:100%;height:100%"></div>
          </div>
        </div>

        <!-- Champs de test -->
        <div style="min-width:230px;display:flex;flex-direction:column;gap:8px" class="cde-field">
          <div class="cde-label">Tester avec</div>
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
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#ddd"><input type="checkbox" id="cde-t-stad" ${previewStadBonus?'checked':''}> Bonus de stade actif</label>
          <div class="form-group"><label>Écran prévisualisé</label>
            <select id="cde-t-context">${CONTEXTS.map(c=>`<option value="${c}" ${previewContext===c?'selected':''}>${CONTEXT_LABELS[c]}</option>`).join('')}</select>
          </div>

          <div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.12);padding-top:12px">
            <div class="cde-label">Visibilité de « ${COMPONENTS.find(c=>c.key===selectedComponent)?.label} » (${mode==='pc'?'PC':'Mobile'})</div>
            <div class="cde-vis-grid">
              ${CONTEXTS.map(ctx => `<label class="cde-vis-cell"><input type="checkbox" data-vis-ctx="${ctx}" ${visibility[mode][selectedComponent][ctx]?'checked':''}> ${CONTEXT_LABELS[ctx]}</label>`).join('')}
            </div>
          </div>
          <div id="cde-error" style="color:#ff6b6b;font-size:13px;margin-top:6px"></div>
        </div>
      </div>
    `
    document.body.appendChild(overlay)
    wire()
  }

  function wire() {
    overlay.querySelectorAll('.cde-tab').forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; render() }))
    overlay.querySelectorAll('.cde-comp-btn').forEach(b => b.addEventListener('click', () => { selectedComponent = b.dataset.comp; render() }))
    overlay.querySelector('#cde-close')?.addEventListener('click', close)
    overlay.querySelector('#cde-save')?.addEventListener('click', save)

    const refreshPreview = () => {
      testPlayer.surname_real = overlay.querySelector('#cde-t-name').value || 'JOUEUR'
      testPlayer.job  = overlay.querySelector('#cde-t-job').value
      testPlayer.job2 = overlay.querySelector('#cde-t-job2').value || null
      testPlayer.rarity = overlay.querySelector('#cde-t-rarity').value
      const noteVal = parseInt(overlay.querySelector('#cde-t-note').value) || 0
      const keyMap = { GK:'note_g', DEF:'note_d', MIL:'note_m', ATT:'note_a' }
      testPlayer[keyMap[testPlayer.job]] = noteVal
      if (testPlayer.job2) testPlayer[keyMap[testPlayer.job2]] = Math.round(noteVal*0.8)
      previewStadBonus = overlay.querySelector('#cde-t-stad').checked
      previewContext = overlay.querySelector('#cde-t-context').value
      overlay.querySelector('#cde-card-render').innerHTML = renderPreviewCard()
      attachDragBoxes()
    }
    ;['cde-t-name','cde-t-job','cde-t-job2','cde-t-rarity','cde-t-note','cde-t-stad','cde-t-context'].forEach(id => {
      overlay.querySelector('#'+id)?.addEventListener('input', refreshPreview)
      overlay.querySelector('#'+id)?.addEventListener('change', refreshPreview)
    })

    overlay.querySelectorAll('[data-vis-ctx]').forEach(cb => {
      cb.addEventListener('change', () => {
        visibility[mode][selectedComponent][cb.dataset.visCtx] = cb.checked
        refreshPreview()
      })
    })

    overlay.querySelector('#cde-reset-pos')?.addEventListener('click', () => {
      components[mode][selectedComponent] = { x: 0.5, y: 0.5, scale: 1 }
      refreshPreview()
    })

    attachDragBoxes()
  }

  // Reproduit EXACTEMENT les formules de taille de player-card.js, à la
  // MÊME largeur d'aperçu (PREVIEW_W) que le rendu réel juste en dessous —
  // ce qui garantit que la petite boîte de glisser-déposer prédit fidèle-
  // ment le résultat final (fini le décalage "modeste dans la boîte,
  // énorme sur la vraie carte").
  function boxSizeFor(key, c, wrapW, wrapH) {
    const ratio = wrapW / 372
    const ax = (n) => Math.round(n * ratio)
    if (key === 'name') {
      return { w: wrapW, h: ax(mode === 'mobile' ? 372 * 0.155 : 574 * 0.155) }
    }
    if (key === 'photo') {
      const baseW = ax(372 * 0.82)
      const baseH = mode === 'mobile' ? ax(372 * (0.70 - 0.155)) : ax(574 * (0.62 - 0.155))
      return { w: baseW * c.scale, h: baseH * c.scale }
    }
    if (key === 'note') {
      const baseH = mode === 'mobile' ? ax(372 * (0.70 - 0.155)) : ax(574 * (0.775 - 0.60))
      return { w: wrapW * c.scale, h: baseH * c.scale }
    }
    if (key === 'note2') return { w: ax(80) * c.scale, h: ax(28) * c.scale }
    if (key === 'flag' || key === 'club') {
      const base = mode === 'mobile'
        ? Math.max(ax(372 * (0.84 - 0.70)), ax(372 * (0.352 - 0.095)))
        : Math.max(ax(574 * (0.895 - 0.78)), ax(372 * (0.3226 - 0.095)))
      return { w: base * c.scale, h: base * c.scale }
    }
    if (key === 'stadium_badge') return { w: ax(38) * c.scale, h: ax(38) * c.scale }
    return { w: 40 * c.scale, h: 40 * c.scale }
  }

  // Même formule d'auto-adaptation que player-card.js — pour que le texte
  // affiché dans la petite boîte ait EXACTEMENT la taille réelle.
  function autoFitNameSizeEditor(name, availWidthPx, maxSize, minSize) {
    if (!name) return maxSize
    const estimated = availWidthPx / (name.length * 0.60)
    return Math.max(minSize, Math.min(maxSize, Math.round(estimated)))
  }

  // Miniature représentant le VRAI contenu du composant (taille réelle
  // incluse), affichée DANS la boîte de glisser-déposer.
  function componentPreviewHTML(key, boxW, boxH) {
    const p = testPlayer
    const ratio = PREVIEW_W / 372
    const ax = (n) => Math.round(n * ratio)

    if (key === 'name') {
      const namePadding = ax(mode === 'mobile' ? 10 : 18)
      const availW = boxW - namePadding * 2
      const maxSize = ax(mode === 'mobile' ? 20 : 46) * components[mode].name.scale
      const fs = autoFitNameSizeEditor(p.surname_real, availW, maxSize, ax(9))
      return `<span style="font-size:${fs}px;font-weight:900;color:#fff;white-space:nowrap;text-shadow:0 1px 3px #000">${p.surname_real}</span>`
    }
    if (key === 'note') {
      const fs = ax(mode === 'mobile' ? 48 : 58) * components[mode].note.scale
      return `<span style="font-size:${fs}px;font-weight:900;color:#D4A017;text-shadow:0 1px 3px #000">78</span>`
    }
    if (key === 'note2') {
      const fs = ax(16) * components[mode].note2.scale
      return `<span style="font-size:${fs}px;font-weight:900;color:#e03030;text-shadow:0 1px 3px #000">62</span>`
    }
    if (key === 'flag') {
      const url = flagUrlForEditor(p.country_code)
      return url ? `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:3px">` : '🌍'
    }
    if (key === 'club') return `<div style="width:100%;height:100%;background:#1A6B3C;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">PSG</div>`
    if (key === 'photo') {
      const url = getPortrait(p)
      return url
        ? `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:3px">`
        : `<div style="width:100%;height:100%;background:#333;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:20px">👤</div>`
    }
    // Vrai badge (identique au rendu réel) : garantit que le zoom via la
    // poignée agrandit VRAIMENT l'icône, pas seulement une lueur autour
    // (retour testeur : "je ne grossis que son contour bleu").
    if (key === 'stadium_badge') return stadiumBadgeSVG
    return ''
  }

  function attachDragBoxes() {
    const layer = overlay.querySelector('#cde-drag-layer')
    if (!layer) return
    layer.innerHTML = ''
    const wrap = overlay.querySelector('#cde-preview-wrap')
    const wrapW = wrap.offsetWidth, wrapH = wrap.offsetHeight

    COMPONENTS.forEach(({ key }) => {
      const c = components[mode][key]
      const isActive = key === selectedComponent
      const { w: boxW, h: boxH } = boxSizeFor(key, c, wrapW, wrapH)

      const box = document.createElement('div')
      box.className = 'cde-drag-box' + (isActive ? ' active' : '')
      box.style.left = (c.x * wrapW - boxW / 2) + 'px'
      box.style.top  = (c.y * wrapH - boxH / 2) + 'px'
      box.style.width = boxW + 'px'
      box.style.height = boxH + 'px'
      box.style.borderRadius = (key === 'flag' || key === 'club' || key === 'photo' || key === 'stadium_badge') ? '4px' : '6px'
      // TOUS les composants sont glissables directement (plus besoin de
      // cliquer dans la liste d'abord) — retour testeur : "quand je déplace
      // TOUS les composants, je veux voir le résultat en direct".
      box.style.pointerEvents = 'auto'
      box.style.opacity = isActive ? '1' : '0.75'
      box.innerHTML = componentPreviewHTML(key, boxW, boxH)
      layer.appendChild(box)

      let handle = null
      if (isActive) {
        handle = document.createElement('div')
        handle.className = 'cde-resize-handle'
        box.appendChild(handle)
      }

      let dragging = false, startX = 0, startY = 0, origX = c.x, origY = c.y
      let resizing = false, resizeStartDist = 0, origScale = c.scale
      const centerPx = () => ({ cx: c.x * wrapW, cy: c.y * wrapH })

      const selectThis = () => {
        if (selectedComponent !== key) { selectedComponent = key; render() }
      }

      box.addEventListener('mousedown', e => {
        if (e.target === handle) return
        e.preventDefault()
        selectThis()
        dragging = true; startX = e.clientX; startY = e.clientY; origX = c.x; origY = c.y
      })
      handle?.addEventListener('mousedown', e => {
        e.preventDefault(); e.stopPropagation()
        resizing = true; origScale = c.scale
        const { cx, cy } = centerPx()
        resizeStartDist = Math.hypot(e.clientX - (wrap.getBoundingClientRect().left + cx), e.clientY - (wrap.getBoundingClientRect().top + cy))
      })
      window.addEventListener('mousemove', e => {
        if (dragging) {
          const dx = (e.clientX - startX) / wrapW, dy = (e.clientY - startY) / wrapH
          c.x = Math.max(0, Math.min(1, origX + dx))
          c.y = Math.max(0, Math.min(1, origY + dy))
          const { w, h } = boxSizeFor(key, c, wrapW, wrapH)
          box.style.left = (c.x * wrapW - w / 2) + 'px'
          box.style.top  = (c.y * wrapH - h / 2) + 'px'
          overlay.querySelector('#cde-card-render').innerHTML = renderPreviewCard()
        } else if (resizing) {
          const { cx, cy } = centerPx()
          const rect = wrap.getBoundingClientRect()
          const dist = Math.hypot(e.clientX - (rect.left + cx), e.clientY - (rect.top + cy))
          // Plafond ramené à 2x (3x provoquait un effet "ultra zoomé"
          // incontrôlable, notamment sur le nom — retour testeur).
          c.scale = Math.max(0.3, Math.min(2, Math.round((origScale * (dist / Math.max(20, resizeStartDist))) * 100) / 100))
          const { w, h } = boxSizeFor(key, c, wrapW, wrapH)
          box.style.width = w + 'px'; box.style.height = h + 'px'
          box.style.left = (c.x * wrapW - w / 2) + 'px'
          box.style.top  = (c.y * wrapH - h / 2) + 'px'
          box.innerHTML = componentPreviewHTML(key, w, h)
          if (handle) box.appendChild(handle)
          overlay.querySelector('#cde-card-render').innerHTML = renderPreviewCard()
        }
      })
      window.addEventListener('mouseup', () => { dragging = false; resizing = false })

      box.addEventListener('touchstart', e => {
        selectThis()
        const t = e.touches[0]
        if (e.target === handle) {
          resizing = true; origScale = c.scale
          const { cx, cy } = centerPx(); const rect = wrap.getBoundingClientRect()
          resizeStartDist = Math.hypot(t.clientX-(rect.left+cx), t.clientY-(rect.top+cy))
        } else {
          dragging = true; startX = t.clientX; startY = t.clientY; origX = c.x; origY = c.y
        }
      }, { passive: true })
      box.addEventListener('touchmove', e => {
        const t = e.touches[0]
        if (dragging) {
          const dx = (t.clientX - startX) / wrapW, dy = (t.clientY - startY) / wrapH
          c.x = Math.max(0, Math.min(1, origX + dx)); c.y = Math.max(0, Math.min(1, origY + dy))
        } else if (resizing) {
          const { cx, cy } = centerPx(); const rect = wrap.getBoundingClientRect()
          const dist = Math.hypot(t.clientX-(rect.left+cx), t.clientY-(rect.top+cy))
          c.scale = Math.max(0.3, Math.min(2, Math.round((origScale*(dist/Math.max(20,resizeStartDist)))*100)/100))
        }
        const { w, h } = boxSizeFor(key, c, wrapW, wrapH)
        box.style.width = w+'px'; box.style.height = h+'px'
        box.style.left = (c.x*wrapW - w/2)+'px'; box.style.top = (c.y*wrapH - h/2)+'px'
        overlay.querySelector('#cde-card-render').innerHTML = renderPreviewCard()
      }, { passive: true })
      box.addEventListener('touchend', () => { dragging = false; resizing = false })
    })
  }

  async function save() {
    const errEl = overlay.querySelector('#cde-error')
    errEl.textContent = ''
    const saveBtn = overlay.querySelector('#cde-save')
    saveBtn.disabled = true; saveBtn.textContent = '⏳ Enregistrement...'

    const compRows2 = [], visRows2 = []
    ;['pc', 'mobile'].forEach(m => {
      COMPONENTS.forEach(({ key }) => {
        const c = components[m][key]
        compRows2.push({ mode: m, component: key, x_pct: c.x, y_pct: c.y, scale: c.scale })
        CONTEXTS.forEach(ctx => visRows2.push({ mode: m, component: key, context: ctx, visible: !!visibility[m][key][ctx] }))
      })
    })

    const { error: e1 } = await supabase.from('card_design_components').upsert(compRows2, { onConflict: 'mode,component' })
    if (e1) { errEl.textContent = e1.message; saveBtn.disabled = false; saveBtn.textContent = '💾 Enregistrer'; return }
    const { error: e2 } = await supabase.from('card_design_visibility').upsert(visRows2, { onConflict: 'mode,component,context' })
    if (e2) { errEl.textContent = e2.message; saveBtn.disabled = false; saveBtn.textContent = '💾 Enregistrer'; return }

    invalidateCardDesignCache()
    toast('✅ Design enregistré — appliqué partout dans l\'app', 'success')
    close()
  }

  render()
}
