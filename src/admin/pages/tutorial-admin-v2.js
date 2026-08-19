// src/admin/pages/tutorial-admin-v2.js
/**
 * Admin Tutorial Manager v2
 * CRUD complet pour les étapes du tutoriel
 * Table: tutorial_steps_v2
 *
 * Layout : liste des étapes à gauche, formulaire au centre,
 * PRÉVISUALISATION RÉELLE à droite.
 *
 * La prévisualisation charge le VRAI site (index.html) dans un iframe, en
 * mode "?tutorialPreview=1" : le compte démo partagé (le même que celui
 * utilisé par tutorial-v3.js côté joueur) rend la vraie page ciblée, et un
 * overlay (spotlight + bulle) piloté en direct par postMessage montre
 * exactement ce qu'un nouveau joueur verrait. Zéro mockup, zéro duplication
 * visuelle — si le design du jeu change, la preview suit automatiquement.
 *
 * NOTE CSS : .admin-content applique color:rgba(255,255,255,0.9) (thème sombre).
 * Ce composant utilise des fonds clairs → on force explicitement color:#1a1a1a
 * sur tous les textes/labels/inputs pour éviter le texte blanc sur fond blanc.
 */

import { supabase } from '../../lib/supabase.js'

const TEXT_DARK = '#1a1a1a'
const TEXT_MUTED = '#666'
const INPUT_STYLE = `width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;background:#fff;color:${TEXT_DARK}`
const LABEL_STYLE = `display:block;font-weight:600;font-size:12px;margin-bottom:6px;color:${TEXT_DARK}`

// Échappe une valeur avant de l'injecter dans un attribut HTML value="...".
// CRITIQUE : les sélecteurs CSS contiennent presque toujours des guillemets
// (ex: [data-key="home2"]) — sans échappement, le premier " referme
// prématurément l'attribut et tronque tout le reste de la valeur (bug
// silencieux : la valeur semble "sauvegardée" mais est en fait coupée dès
// le premier re-rendu du formulaire).
function escAttr(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// Dimensions réelles de l'iframe selon le mode (déclenche les vrais
// breakpoints CSS de l'app — le seuil mobile/desktop du jeu est 900px,
// voir isMobile() dans tutorial-v3.js)
const PREVIEW_SIZES = {
  mobile:  { w: 320, h: 640 },
  desktop: { w: 1100, h: 650 },
}

export async function renderTutorialAdminV2(container, { toast, openModal, closeModal }) {
  let steps = []
  let editingId = null
  let previewMode = 'mobile'
  let previewIframe = null
  let previewLoadedPage = null   // page actuellement chargée dans l'iframe
  let updateDebounceTimer = null
  let targetNotFound = false     // dernier statut reçu de l'iframe (sélecteur introuvable)
  let selectorIsGlobalNav = false // dernier élément pické fait partie de la nav globale (chrome)

  // Options pour les listes déroulantes
  const PAGE_ROUTES = ['home', 'collection', 'decks', 'boosters', 'match', 'market', 'rankings', 'matches', 'settings']
  const POPUP_POSITIONS = [
    { value: 'top',           label: 'Haut' },
    { value: 'upper-center',  label: 'Entre haut et centre' },
    { value: 'center',        label: 'Centre' },
    { value: 'lower-center',  label: 'Entre centre et bas' },
    { value: 'bottom',        label: 'Bas' },
    { value: 'top-left',      label: 'Haut gauche' },
    { value: 'top-right',     label: 'Haut droite' },
    { value: 'bottom-left',   label: 'Bas gauche' },
    { value: 'bottom-right',  label: 'Bas droite' },
  ]
  const HIGHLIGHT_TYPES = ['none', 'glow', 'pulse', 'highlight']
  const VALIDATORS = ['none', 'page_loaded', 'click_detected', 'card_shown', 'booster_opened', 'card_bought', 'card_sold', 'deck_created', 'formation_selected', '8_players_placed', 'links_visible', 'sub_added', 'deck_valid', 'filter_applied', 'match_started', 'deck_selected', 'gc_selected', 'rendered', 'phase_done', 'attack_sent', 'defense_sent', 'gc_used', 'match_won', 'accepted', 'pvp_started', 'matched', 'synced', 'tutorial_done']

  // Charger toutes les étapes
  async function loadSteps() {
    const { data, error } = await supabase
      .from('tutorial_steps_v2')
      .select('*')
      .order('step_number', { ascending: true })

    if (error) {
      toast(`Erreur chargement: ${error.message}`, 'error')
      return
    }
    steps = data || []
    render()
  }

  // ── Colonne gauche : liste des étapes ──────────────────────
  function renderStepsList() {
    if (!steps.length) {
      return `<div style="text-align:center;padding:40px 12px;color:${TEXT_MUTED};font-size:13px">Aucune étape créée.<br>Utilise le formulaire pour en créer une.</div>`
    }

    return steps.map(step => `
      <div class="tsv2-list-item" data-id="${step.id}" style="
        padding:12px;border-radius:10px;margin-bottom:8px;cursor:pointer;
        background:${editingId === step.id ? '#eaf7ee' : '#fff'};
        border:1.5px solid ${editingId === step.id ? '#1A6B3C' : '#eee'};
        transition:border-color .15s,background .15s;
      ">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
          <span style="font-weight:800;font-size:13px;color:${TEXT_DARK}">#${step.step_number} · ${step.step_name}</span>
          ${step.is_mandatory ? '<span style="font-size:10px;background:#D4A017;color:#1a1a1a;padding:1px 6px;border-radius:8px;font-weight:700">OBLI.</span>' : ''}
        </div>
        <div style="font-size:12px;color:${TEXT_MUTED};margin-bottom:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${step.popup_title || '—'}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <code style="font-size:10px;background:#f0f0f0;color:${TEXT_DARK};padding:2px 6px;border-radius:4px">${step.page_route || 'aucune page'}</code>
          <div style="display:flex;gap:4px">
            <button class="btn btn-sm btn-ghost edit-step-btn" data-id="${step.id}" style="padding:3px 7px;font-size:11px">✏️</button>
            <button class="btn btn-sm btn-danger delete-step-btn" data-id="${step.id}" style="padding:3px 7px;font-size:11px;color:#c0392b">🗑️</button>
          </div>
        </div>
      </div>
    `).join('')
  }

  // ── Colonne centrale : formulaire ───────────────────────────
  function renderForm() {
    const step = editingId ? steps.find(s => s.id === editingId) : {}

    return `
    <div style="background:#f5f5f5;border-radius:12px;padding:20px;color:${TEXT_DARK}">
      <h3 style="margin:0 0 16px 0;font-size:16px;font-weight:700;color:${TEXT_DARK}">
        ${editingId ? '✏️ Éditer étape #' + step.step_number : '➕ Nouvelle étape'}
      </h3>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:16px">
        <div class="form-group">
          <label style="${LABEL_STYLE}">Numéro de step *</label>
          <input type="number" id="step-number" value="${step.step_number || ''}" min="1" max="100" placeholder="Ex: 1"
            style="${INPUT_STYLE}" />
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Nom étape (identifiant) *</label>
          <input type="text" id="step-name" value="${escAttr(step.step_name)}" placeholder="Ex: home-welcome"
            style="${INPUT_STYLE}" />
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Page/Route</label>
          <select id="page-route" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne une route --</option>
            ${PAGE_ROUTES.map(p => `<option value="${p}" ${step.page_route === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Sélecteur DOM</label>
          <div style="display:flex;gap:6px">
            <input type="text" id="dom-selector" value="${escAttr(step.dom_selector)}" placeholder="Ex: [data-page='collection']"
              style="${INPUT_STYLE};flex:1" />
            <button type="button" id="picker-btn" title="Cliquer sur un élément dans l'aperçu"
              style="flex-shrink:0;padding:0 10px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px">🎯</button>
          </div>
          <div style="font-size:10px;color:${TEXT_MUTED};margin-top:4px">Utilise 🎯 plutôt que de taper un sélecteur à la main — évite les fautes de frappe (attribut/valeur inexistants).</div>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Position popup</label>
          <select id="popup-position" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${POPUP_POSITIONS.map(p => `<option value="${p.value}" ${step.popup_position === p.value ? 'selected' : ''}>${p.label}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Type de highlight</label>
          <select id="highlight-type" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${HIGHLIGHT_TYPES.map(h => `<option value="${h}" ${step.highlight_type === h ? 'selected' : ''}>${h}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Validateur</label>
          <select id="validator-logic" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${VALIDATORS.map(v => `<option value="${v}" ${step.validator_logic === v ? 'selected' : ''}>${v}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Durée affichage (ms, 0=infini)</label>
          <input type="number" id="display-duration" value="${step.display_duration_ms || 0}" min="0" step="1000"
            style="${INPUT_STYLE}" />
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">Ordre de tri</label>
          <input type="number" id="sort-order" value="${step.sort_order || 0}" min="0"
            style="${INPUT_STYLE}" />
        </div>
      </div>

      <div class="form-group" style="margin-bottom:12px">
        <label style="${LABEL_STYLE}">Titre du popup *</label>
        <input type="text" id="popup-title" value="${escAttr(step.popup_title)}" maxlength="150" placeholder="Ex: 👋 Bienvenue dans Manager Wars !"
          style="${INPUT_STYLE}" />
        <div style="font-size:11px;color:${TEXT_MUTED};margin-top:4px">Caractères: <span id="title-count">0</span>/150</div>
      </div>

      <div class="form-group" style="margin-bottom:12px">
        <label style="${LABEL_STYLE}">Texte du popup *</label>
        <textarea id="popup-text" maxlength="500" placeholder="Ex: Explique ce que le joueur doit faire..."
          style="${INPUT_STYLE};min-height:80px;font-family:monospace;resize:vertical">${escAttr(step.popup_text)}</textarea>
        <div style="font-size:11px;color:${TEXT_MUTED};margin-top:4px">Caractères: <span id="text-count">0</span>/500</div>
      </div>

      <div class="form-group" style="margin-bottom:12px">
        <label style="${LABEL_STYLE}">Action requise</label>
        <input type="text" id="action-required" value="${escAttr(step.action_required)}" placeholder="Ex: Clique sur Collection"
          style="${INPUT_STYLE}" />
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:${TEXT_DARK}">
          <input type="checkbox" id="dim-overlay" ${step.dim_overlay ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px;color:${TEXT_DARK}">🌑 Griser le reste de l'écran</span>
        </label>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:${TEXT_DARK}">
          <input type="checkbox" id="allow-interaction" ${step.allow_interaction ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px;color:${TEXT_DARK}">👆 Autoriser le clic sur les boutons</span>
        </label>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:${TEXT_DARK}">
          <input type="checkbox" id="show-next-button" ${step.show_next_button !== false ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px;color:${TEXT_DARK}">➡️ Afficher le bouton "Suivant"</span>
        </label>
      </div>
      <div style="font-size:10px;color:${TEXT_MUTED};margin-bottom:16px;margin-top:-6px">
        Si décoché : l'étape avance automatiquement quand le joueur clique sur l'élément ciblé (Sélecteur DOM) — nécessite "Autoriser le clic" activé.
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:${TEXT_DARK}">
          <input type="checkbox" id="skip-allowed" ${step.skip_allowed !== false ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px;color:${TEXT_DARK}">Permet le skip</span>
        </label>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:${TEXT_DARK}">
          <input type="checkbox" id="is-mandatory" ${step.is_mandatory ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px;color:${TEXT_DARK}">Étape obligatoire</span>
        </label>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" id="save-step-btn" style="flex:1;min-width:120px">
          ${editingId ? '💾 Mettre à jour' : '➕ Créer'}
        </button>
        ${editingId ? `<button class="btn btn-ghost" id="cancel-edit-btn" style="flex:1;min-width:120px">✕ Annuler</button>` : ''}
      </div>
    </div>
    `
  }

  // ── Colonne droite : prévisualisation RÉELLE (iframe) ───────

  function getFormState() {
    const val = id => container.querySelector('#' + id)?.value || ''
    const checked = id => container.querySelector('#' + id)?.checked || false
    return {
      page_route: val('page-route') || 'home',
      dom_selector: val('dom-selector'),
      popup_position: val('popup-position') || 'center',
      popup_title: val('popup-title'),
      popup_text: val('popup-text'),
      action_required: val('action-required'),
      highlight_type: val('highlight-type') || 'none',
      dim_overlay: checked('dim-overlay'),
      allow_interaction: checked('allow-interaction'),
      show_next_button: checked('show-next-button'),
      is_mandatory: checked('is-mandatory'),
      skip_allowed: checked('skip-allowed'),
    }
  }

  function stateToParams(state) {
    return new URLSearchParams({
      tutorialPreview: '1',
      page: state.page_route,
      selector: state.dom_selector || '',
      position: state.popup_position,
      title: state.popup_title || '',
      text: state.popup_text || '',
      action: state.action_required || '',
      highlight: state.highlight_type,
      dim: state.dim_overlay ? '1' : '0',
    })
  }

  function renderPreviewPanel() {
    const size = PREVIEW_SIZES[previewMode]
    return `
    <div style="background:#f5f5f5;border-radius:12px;padding:16px;color:${TEXT_DARK}">
      <h3 style="margin:0 0 10px 0;font-size:14px;font-weight:800;color:${TEXT_DARK}">👁️ Prévisualisation réelle</h3>
      <div style="font-size:11px;color:${TEXT_MUTED};margin-bottom:12px;line-height:1.4">
        Rendu du vrai jeu (compte démo), aperçu figé — clics désactivés.
      </div>

      <!-- Toggle Mobile / Desktop -->
      <div style="display:flex;gap:6px;margin-bottom:14px;background:#e8e8e8;border-radius:8px;padding:3px">
        <button type="button" id="tsv2-tab-mobile" style="
          flex:1;padding:6px 8px;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;
          background:${previewMode === 'mobile' ? '#1A6B3C' : 'transparent'};
          color:${previewMode === 'mobile' ? '#fff' : TEXT_DARK};
        ">📱 Mobile</button>
        <button type="button" id="tsv2-tab-desktop" style="
          flex:1;padding:6px 8px;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;
          background:${previewMode === 'desktop' ? '#1A6B3C' : 'transparent'};
          color:${previewMode === 'desktop' ? '#fff' : TEXT_DARK};
        ">🖥️ Desktop</button>
      </div>

      <div id="tsv2-preview-badges" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px"></div>

      <div id="tsv2-preview-frame-wrap" style="display:flex;justify-content:center"></div>
    </div>
    `
  }

  function renderBadges(state) {
    const el = container.querySelector('#tsv2-preview-badges')
    if (!el) return
    el.innerHTML = `
      <span style="font-size:10px;font-weight:700;background:#e8e8e8;color:${TEXT_DARK};padding:3px 8px;border-radius:10px">Page: ${state.page_route}</span>
      <span style="font-size:10px;font-weight:700;background:#e8e8e8;color:${TEXT_DARK};padding:3px 8px;border-radius:10px">Highlight: ${state.highlight_type}</span>
      ${state.dim_overlay ? `<span style="font-size:10px;font-weight:700;background:#333;color:#fff;padding:3px 8px;border-radius:10px">🌑 Grisé</span>` : ''}
      ${state.dom_selector && targetNotFound ? `<span style="font-size:10px;font-weight:700;background:#fdecea;color:#c0392b;padding:3px 8px;border-radius:10px">⚠️ Élément introuvable sur cette page</span>` : ''}
      ${state.dom_selector && selectorIsGlobalNav ? `<span style="font-size:10px;font-weight:700;background:#e0eefe;color:#1a5fb4;padding:3px 8px;border-radius:10px">🧭 Navigation globale (toutes les pages)</span>` : ''}
      ${state.is_mandatory ? `<span style="font-size:10px;font-weight:700;background:#D4A017;color:#1a1a1a;padding:3px 8px;border-radius:10px">Obligatoire</span>` : ''}
      ${state.skip_allowed ? `<span style="font-size:10px;font-weight:700;background:#eaf7ee;color:#1A6B3C;padding:3px 8px;border-radius:10px">Skip OK</span>` : `<span style="font-size:10px;font-weight:700;background:#fdecea;color:#c0392b;padding:3px 8px;border-radius:10px">Non skippable</span>`}
    `
  }

  // (Re)crée le wrapper + l'iframe pour le mode courant (mobile/desktop).
  // Appelé uniquement au changement de mode, PAS à chaque frappe.
  function mountPreviewFrame() {
    const wrap = container.querySelector('#tsv2-preview-frame-wrap')
    if (!wrap) return
    const size = PREVIEW_SIZES[previewMode]
    const state = getFormState()

    if (previewMode === 'mobile') {
      wrap.innerHTML = `
        <div style="border:8px solid #1a1a2e;border-radius:22px;box-shadow:0 4px 14px rgba(0,0,0,0.2);overflow:hidden;line-height:0">
          <iframe id="tsv2-preview-iframe" style="width:${size.w}px;height:${size.h}px;border:none;display:block"></iframe>
        </div>
      `
    } else {
      // Rendu réel en pleine largeur desktop (1100px), affiché à échelle
      // réduite pour tenir dans la colonne, SANS changer son viewport interne
      // (le transform:scale ne déclenche pas de resize dans l'iframe : les
      // breakpoints CSS du jeu restent bien évalués sur 1100px réels).
      const visibleW = 380
      const scale = visibleW / size.w
      const visibleH = Math.round(size.h * scale)
      wrap.innerHTML = `
        <div style="border:1px solid #ccc;border-radius:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);overflow:hidden;width:${visibleW}px;height:${visibleH}px">
          <iframe id="tsv2-preview-iframe" style="width:${size.w}px;height:${size.h}px;border:none;display:block;transform:scale(${scale});transform-origin:top left"></iframe>
        </div>
      `
    }

    previewIframe = container.querySelector('#tsv2-preview-iframe')
    previewLoadedPage = state.page_route
    targetNotFound = false
    selectorIsGlobalNav = false
    previewIframe.src = '/index.html?' + stateToParams(state).toString()
  }

  // Met à jour l'aperçu en direct : si la page a changé, on renavigue via
  // postMessage (le jeu réel gère la transition) ; sinon on ne fait que
  // redessiner le spotlight/la bulle. Aucun rechargement d'iframe.
  function updatePreviewLive() {
    const state = getFormState()
    renderBadges(state)
    if (!previewIframe) return
    previewLoadedPage = state.page_route
    try {
      previewIframe.contentWindow.postMessage({
        type: 'tutorial-preview-update',
        payload: stateToParams(state).toString(),
      }, '*')
    } catch (e) {
      // iframe pas encore chargée — ignorer, le prochain 'input' réessaiera
    }
  }

  function debouncedUpdatePreview() {
    clearTimeout(updateDebounceTimer)
    updateDebounceTimer = setTimeout(updatePreviewLive, 150)
  }

  function setPreviewMode(mode) {
    previewMode = mode
    const mobileTab = container.querySelector('#tsv2-tab-mobile')
    const desktopTab = container.querySelector('#tsv2-tab-desktop')
    if (mobileTab) {
      mobileTab.style.background = mode === 'mobile' ? '#1A6B3C' : 'transparent'
      mobileTab.style.color = mode === 'mobile' ? '#fff' : TEXT_DARK
    }
    if (desktopTab) {
      desktopTab.style.background = mode === 'desktop' ? '#1A6B3C' : 'transparent'
      desktopTab.style.color = mode === 'desktop' ? '#fff' : TEXT_DARK
    }
    mountPreviewFrame()
  }

  // ── Picker : clique sur un élément DANS l'aperçu pour le sélectionner ──
  let pickerActive = false

  function startPicker() {
    if (!previewIframe) return
    pickerActive = true
    const btn = container.querySelector('#picker-btn')
    if (btn) { btn.textContent = '⏳'; btn.style.background = '#eaf7ee'; btn.disabled = true }
    try {
      previewIframe.contentWindow.postMessage({ type: 'tutorial-preview-picker-start' }, '*')
    } catch (e) { /* iframe pas prête */ }
  }

  function endPickerUI() {
    pickerActive = false
    const btn = container.querySelector('#picker-btn')
    if (btn) { btn.textContent = '🎯'; btn.style.background = '#fff'; btn.disabled = false }
  }

  // Écoute globale (une seule fois) des messages venant de l'iframe preview
  window.addEventListener('message', e => {
    if (!e.data) return
    if (e.data.type === 'tutorial-preview-picker-result') {
      const domInput = container.querySelector('#dom-selector')
      if (domInput) {
        domInput.value = e.data.selector || ''
        domInput.dispatchEvent(new Event('input', { bubbles: true }))
      }
      endPickerUI()
      selectorIsGlobalNav = !!e.data.isGlobalNav
      if (e.data.isGlobalNav) {
        toast(`Élément sélectionné : ${e.data.selector} — 🧭 fait partie de la navigation, visible sur toutes les pages`, 'success', 5000)
      } else {
        toast(`Élément sélectionné : ${e.data.selector}`, 'success')
      }
      renderBadges(getFormState())
    }
    if (e.data.type === 'tutorial-preview-picker-cancelled') {
      endPickerUI()
    }
    if (e.data.type === 'tutorial-preview-target-status') {
      targetNotFound = !e.data.found
      renderBadges(getFormState())
    }
  })

  // ── Rendu principal (layout 3 colonnes) ─────────────────────
  function render() {
    container.innerHTML = `
    <div style="padding:20px;background:#f9f9f9;color:${TEXT_DARK}">
      <div style="margin-bottom:20px">
        <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:900;color:${TEXT_DARK}">
          🎓 Tutoriel Manager Wars v2
        </h2>
        <p style="margin:0;color:${TEXT_MUTED};font-size:13px">
          Gérez les étapes du tutoriel interactif. Chaque étape affiche un popup + highlight sur un élément.
        </p>
      </div>

      <div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">

        <!-- Colonne gauche : liste des étapes -->
        <div style="width:280px;flex-shrink:0;max-width:100%">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <h3 style="margin:0;font-size:14px;font-weight:800;color:${TEXT_DARK}">
              📋 ${steps.length} étape(s)
            </h3>
            <button class="btn btn-sm btn-primary" id="new-step-btn" style="padding:5px 10px;font-size:12px">➕ Nouvelle</button>
          </div>
          <div style="max-height:calc(100vh - 220px);overflow-y:auto;padding-right:4px">
            ${renderStepsList()}
          </div>
        </div>

        <!-- Colonne centrale : formulaire -->
        <div style="flex:1;min-width:320px">
          ${renderForm()}
        </div>

        <!-- Colonne droite : prévisualisation réelle -->
        <div style="width:420px;flex-shrink:0;max-width:100%">
          ${renderPreviewPanel()}
        </div>

      </div>
    </div>
    `

    // Listeners formulaire
    const titleInput = container.querySelector('#popup-title')
    const textInput = container.querySelector('#popup-text')
    const saveBtn = container.querySelector('#save-step-btn')
    const cancelBtn = container.querySelector('#cancel-edit-btn')
    const newBtn = container.querySelector('#new-step-btn')

    if (titleInput) {
      const titleCount = container.querySelector('#title-count')
      if (titleCount) titleCount.textContent = titleInput.value.length
      titleInput.addEventListener('input', e => {
        if (titleCount) titleCount.textContent = e.target.value.length
      })
    }

    if (textInput) {
      const textCount = container.querySelector('#text-count')
      if (textCount) textCount.textContent = textInput.value.length
      textInput.addEventListener('input', e => {
        if (textCount) textCount.textContent = e.target.value.length
      })
    }

    if (saveBtn) saveBtn.addEventListener('click', saveStep)
    if (cancelBtn) cancelBtn.addEventListener('click', () => { editingId = null; render() })
    if (newBtn) newBtn.addEventListener('click', () => { editingId = null; render() })

    // Clic sur une carte de la liste (hors boutons) → édite l'étape
    container.querySelectorAll('.tsv2-list-item').forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.closest('.edit-step-btn') || e.target.closest('.delete-step-btn')) return
        editingId = Number(item.dataset.id)
        render()
      })
    })

    container.querySelectorAll('.edit-step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        editingId = Number(btn.dataset.id)
        render()
      })
    })

    container.querySelectorAll('.delete-step-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        if (!confirm('Supprimer cette étape ? Action irréversible.')) return
        const id = Number(btn.dataset.id)
        const { error } = await supabase
          .from('tutorial_steps_v2')
          .delete()
          .eq('id', id)
        if (error) toast(`Erreur suppression: ${error.message}`, 'error')
        else {
          if (editingId === id) editingId = null
          toast('Étape supprimée', 'success')
          await loadSteps()
        }
      })
    })

    // Toggle Mobile / Desktop
    const tabMobile = container.querySelector('#tsv2-tab-mobile')
    const tabDesktop = container.querySelector('#tsv2-tab-desktop')
    if (tabMobile) tabMobile.addEventListener('click', () => setPreviewMode('mobile'))
    if (tabDesktop) tabDesktop.addEventListener('click', () => setPreviewMode('desktop'))

    // Live preview : tout champ met à jour l'iframe réelle en direct
    const formFieldIds = [
      'page-route', 'dom-selector', 'popup-position', 'popup-title', 'popup-text',
      'action-required', 'validator-logic', 'highlight-type', 'dim-overlay',
      'allow-interaction', 'show-next-button', 'skip-allowed', 'is-mandatory'
    ]
    formFieldIds.forEach(id => {
      const el = container.querySelector('#' + id)
      if (!el) return
      const evt = (el.tagName === 'SELECT' || el.type === 'checkbox') ? 'change' : 'input'
      el.addEventListener(evt, debouncedUpdatePreview)
    })

    // Sélecteur d'élément cliquable dans l'aperçu
    const pickerBtn = container.querySelector('#picker-btn')
    if (pickerBtn) pickerBtn.addEventListener('click', startPicker)

    // Si le sélecteur est modifié manuellement (pas via le picker), le
    // badge "navigation globale" du pick précédent n'est plus fiable
    const domSelectorInput = container.querySelector('#dom-selector')
    if (domSelectorInput) {
      domSelectorInput.addEventListener('input', () => {
        selectorIsGlobalNav = false
      })
    }

    // Monte l'iframe (premier chargement du formulaire)
    mountPreviewFrame()
  }

  // Sauvegarder une étape
  async function saveStep() {
    const stepNumber = parseInt(container.querySelector('#step-number').value)
    const stepName = container.querySelector('#step-name').value.trim()
    const pageRoute = container.querySelector('#page-route').value || null
    const domSelector = container.querySelector('#dom-selector').value.trim() || null
    const popupPosition = container.querySelector('#popup-position').value || null
    const popupTitle = container.querySelector('#popup-title').value.trim()
    const popupText = container.querySelector('#popup-text').value.trim()
    const actionRequired = container.querySelector('#action-required').value.trim() || null
    const validatorLogic = container.querySelector('#validator-logic').value || null
    const highlightType = container.querySelector('#highlight-type').value || 'none'
    const dimOverlay = container.querySelector('#dim-overlay').checked
    const allowInteraction = container.querySelector('#allow-interaction').checked
    const showNextButton = container.querySelector('#show-next-button').checked
    const skipAllowed = container.querySelector('#skip-allowed').checked
    const isMandatory = container.querySelector('#is-mandatory').checked
    const displayDuration = parseInt(container.querySelector('#display-duration').value) || 0
    const sortOrder = parseInt(container.querySelector('#sort-order').value) || 0

    if (!stepNumber || stepNumber < 1) { toast('Numéro de step invalide', 'error'); return }
    if (!stepName) { toast('Nom d\'étape requis', 'error'); return }
    if (!popupTitle) { toast('Titre du popup requis', 'error'); return }
    if (!popupText) { toast('Texte du popup requis', 'error'); return }

    const payload = {
      step_number: stepNumber,
      step_name: stepName,
      page_route: pageRoute,
      dom_selector: domSelector,
      popup_position: popupPosition,
      popup_title: popupTitle,
      popup_text: popupText,
      action_required: actionRequired,
      validator_logic: validatorLogic,
      highlight_type: highlightType,
      dim_overlay: dimOverlay,
      allow_interaction: allowInteraction,
      show_next_button: showNextButton,
      skip_allowed: skipAllowed,
      is_mandatory: isMandatory,
      display_duration_ms: displayDuration,
      sort_order: sortOrder,
      updated_at: new Date().toISOString(),
    }

    let error
    if (editingId) {
      const result = await supabase
        .from('tutorial_steps_v2')
        .update(payload)
        .eq('id', editingId)
      error = result.error
      if (!error) toast('Étape mise à jour', 'success')
    } else {
      const result = await supabase
        .from('tutorial_steps_v2')
        .insert([payload])
      error = result.error
      if (!error) toast('Étape créée', 'success')
    }

    if (error) toast(`Erreur: ${error.message}`, 'error')
    else { editingId = null; await loadSteps() }
  }

  // Charger au démarrage
  await loadSteps()
}
