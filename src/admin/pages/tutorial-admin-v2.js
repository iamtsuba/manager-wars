// src/admin/pages/tutorial-admin-v2.js
/**
 * Admin Tutorial Manager v2
 * CRUD complet pour les étapes du tutoriel
 * Table: tutorial_steps_v2
 *
 * Layout : liste des étapes à gauche (colonne fixe, scrollable),
 * formulaire de création/édition au centre,
 * prévisualisation live (mobile + desktop) à droite.
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

// Injecte une seule fois les keyframes CSS utilisées par les mockups de preview
function ensurePreviewStyles() {
  if (document.getElementById('tsv2-preview-styles')) return
  const style = document.createElement('style')
  style.id = 'tsv2-preview-styles'
  style.textContent = `
    @keyframes tsv2Pulse {
      0%   { box-shadow: 0 0 0 0 rgba(26,107,60,0.55); }
      70%  { box-shadow: 0 0 0 9px rgba(26,107,60,0); }
      100% { box-shadow: 0 0 0 0 rgba(26,107,60,0); }
    }
    @keyframes tsv2Glow {
      0%, 100% { box-shadow: 0 0 6px 2px rgba(212,160,23,0.6); }
      50%      { box-shadow: 0 0 16px 7px rgba(212,160,23,0.9); }
    }
    .tsv2-target-pulse { animation: tsv2Pulse 1.6s infinite; }
    .tsv2-target-glow  { animation: tsv2Glow 1.6s infinite; }
  `
  document.head.appendChild(style)
}

export async function renderTutorialAdminV2(container, { toast, openModal, closeModal }) {
  let steps = []
  let editingId = null

  ensurePreviewStyles()

  // Options pour les listes déroulantes
  const PAGE_ROUTES = ['home', 'collection', 'decks', 'boosters', 'match', 'market', 'rankings', 'matches', 'settings']
  const POPUP_POSITIONS = ['center', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right']
  const HIGHLIGHT_TYPES = ['none', 'glow', 'pulse', 'dim-overlay', 'highlight']
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
        <!-- Numéro de step -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Numéro de step *</label>
          <input type="number" id="step-number" value="${step.step_number || ''}" min="1" max="100" placeholder="Ex: 1"
            style="${INPUT_STYLE}" />
        </div>

        <!-- Nom de l'étape -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Nom étape (identifiant) *</label>
          <input type="text" id="step-name" value="${step.step_name || ''}" placeholder="Ex: home-welcome"
            style="${INPUT_STYLE}" />
        </div>

        <!-- Page/Route -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Page/Route</label>
          <select id="page-route" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne une route --</option>
            ${PAGE_ROUTES.map(p => `<option value="${p}" ${step.page_route === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>

        <!-- Sélecteur DOM -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Sélecteur DOM</label>
          <input type="text" id="dom-selector" value="${step.dom_selector || ''}" placeholder="Ex: [data-page='collection']"
            style="${INPUT_STYLE}" />
        </div>

        <!-- Position du popup -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Position popup</label>
          <select id="popup-position" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${POPUP_POSITIONS.map(p => `<option value="${p}" ${step.popup_position === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>

        <!-- Type highlight -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Type de highlight</label>
          <select id="highlight-type" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${HIGHLIGHT_TYPES.map(h => `<option value="${h}" ${step.highlight_type === h ? 'selected' : ''}>${h}</option>`).join('')}
          </select>
        </div>

        <!-- Validateur -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Validateur</label>
          <select id="validator-logic" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${VALIDATORS.map(v => `<option value="${v}" ${step.validator_logic === v ? 'selected' : ''}>${v}</option>`).join('')}
          </select>
        </div>

        <!-- Durée affichage -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Durée affichage (ms, 0=infini)</label>
          <input type="number" id="display-duration" value="${step.display_duration_ms || 0}" min="0" step="1000"
            style="${INPUT_STYLE}" />
        </div>

        <!-- Ordre de tri -->
        <div class="form-group">
          <label style="${LABEL_STYLE}">Ordre de tri</label>
          <input type="number" id="sort-order" value="${step.sort_order || 0}" min="0"
            style="${INPUT_STYLE}" />
        </div>
      </div>

      <!-- Titre du popup (champ plus grand) -->
      <div class="form-group" style="margin-bottom:12px">
        <label style="${LABEL_STYLE}">Titre du popup *</label>
        <input type="text" id="popup-title" value="${step.popup_title || ''}" maxlength="150" placeholder="Ex: 👋 Bienvenue dans Manager Wars !"
          style="${INPUT_STYLE}" />
        <div style="font-size:11px;color:${TEXT_MUTED};margin-top:4px">Caractères: <span id="title-count">0</span>/150</div>
      </div>

      <!-- Texte du popup (zone de texte) -->
      <div class="form-group" style="margin-bottom:12px">
        <label style="${LABEL_STYLE}">Texte du popup *</label>
        <textarea id="popup-text" maxlength="500" placeholder="Ex: Explique ce que le joueur doit faire..."
          style="${INPUT_STYLE};min-height:80px;font-family:monospace;resize:vertical">${step.popup_text || ''}</textarea>
        <div style="font-size:11px;color:${TEXT_MUTED};margin-top:4px">Caractères: <span id="text-count">0</span>/500</div>
      </div>

      <!-- Action requise -->
      <div class="form-group" style="margin-bottom:12px">
        <label style="${LABEL_STYLE}">Action requise</label>
        <input type="text" id="action-required" value="${step.action_required || ''}" placeholder="Ex: Clique sur Collection"
          style="${INPUT_STYLE}" />
      </div>

      <!-- Toggles -->
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

      <!-- Boutons d'action -->
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" id="save-step-btn" style="flex:1;min-width:120px">
          ${editingId ? '💾 Mettre à jour' : '➕ Créer'}
        </button>
        ${editingId ? `<button class="btn btn-ghost" id="cancel-edit-btn" style="flex:1;min-width:120px">✕ Annuler</button>` : ''}
      </div>
    </div>
    `
  }

  // ── Colonne droite : prévisualisation live ──────────────────

  // Lit l'état courant du formulaire directement dans le DOM
  function getFormState() {
    const val = id => container.querySelector('#' + id)?.value || ''
    const checked = id => container.querySelector('#' + id)?.checked || false
    return {
      step_number: val('step-number'),
      step_name: val('step-name'),
      page_route: val('page-route'),
      dom_selector: val('dom-selector'),
      popup_position: val('popup-position') || 'center',
      popup_title: val('popup-title'),
      popup_text: val('popup-text'),
      action_required: val('action-required'),
      validator_logic: val('validator-logic'),
      highlight_type: val('highlight-type') || 'none',
      skip_allowed: checked('skip-allowed'),
      is_mandatory: checked('is-mandatory'),
    }
  }

  // Style CSS absolute pour positionner le popup dans le mockup selon popup_position
  function positionStyle(pos) {
    switch (pos) {
      case 'top':          return 'top:10px;left:50%;transform:translateX(-50%)'
      case 'top-left':     return 'top:10px;left:10px'
      case 'top-right':    return 'top:10px;right:10px'
      case 'bottom':       return 'bottom:10px;left:50%;transform:translateX(-50%)'
      case 'bottom-left':  return 'bottom:10px;left:10px'
      case 'bottom-right': return 'bottom:10px;right:10px'
      case 'center':
      default:              return 'top:50%;left:50%;transform:translate(-50%,-50%)'
    }
  }

  // Style du "target" (élément DOM ciblé) selon highlight_type
  function targetStyle(type) {
    switch (type) {
      case 'glow':
        return { cls: 'tsv2-target-glow', style: 'border:2px solid #D4A017;background:rgba(212,160,23,0.15)' }
      case 'pulse':
        return { cls: 'tsv2-target-pulse', style: 'border:2px solid #1A6B3C;background:rgba(26,107,60,0.12)' }
      case 'highlight':
        return { cls: '', style: 'border:2px solid #1A6B3C;background:rgba(26,107,60,0.18);box-shadow:0 0 0 3px rgba(26,107,60,0.25)' }
      case 'dim-overlay':
        return { cls: '', style: 'border:2px solid #fff;background:#fff;box-shadow:0 0 0 4000px rgba(0,0,0,0.55)' }
      case 'none':
      default:
        return { cls: '', style: 'border:1.5px dashed #bbb;background:#eee' }
    }
  }

  // Construit le mockup HTML d'un écran (mobile ou desktop) avec popup + target
  // NOTE : screenW DOIT toujours inclure une unité CSS (px/%) — un nombre nu
  // (ex: "220" au lieu de "220px") rend la règle CSS invalide et casse la mise en page.
  function buildScreenMockup(state, kind) {
    const isMobile = kind === 'mobile'
    const screenW = isMobile ? '240px' : '100%'
    const screenH = isMobile ? 440 : 230
    const target = targetStyle(state.highlight_type)
    const popupMaxWidth = isMobile ? '190px' : '230px'

    const title = state.popup_title || 'Titre du popup…'
    const text = state.popup_text || 'Le texte du popup apparaîtra ici…'
    const pageLabel = state.page_route || 'page'

    return `
      <div style="position:relative;width:${screenW};height:${screenH}px;background:#eef1ee;border-radius:${isMobile ? '4px' : '6px'};overflow:hidden;box-sizing:border-box">
        <!-- Barre d'entête simulée -->
        <div style="height:${isMobile ? '24px' : '22px'};background:#1a1a2e;display:flex;align-items:center;gap:4px;padding:0 8px;box-sizing:border-box">
          ${isMobile
            ? `<span style="font-size:10px;color:#fff;opacity:.8">${pageLabel}</span>`
            : `<span style="width:7px;height:7px;border-radius:50%;background:#ff5f57"></span><span style="width:7px;height:7px;border-radius:50%;background:#febc2e"></span><span style="width:7px;height:7px;border-radius:50%;background:#28c840"></span><span style="font-size:10px;color:#fff;opacity:.7;margin-left:8px">fmwar.com/${pageLabel}</span>`
          }
        </div>

        <!-- Élément ciblé (simulateur) -->
        <div class="${target.cls}" style="
          position:absolute;top:${isMobile ? '46%' : '42%'};left:16%;
          width:${isMobile ? '64px' : '84px'};height:${isMobile ? '24px' : '28px'};
          border-radius:6px;${target.style};
          display:flex;align-items:center;justify-content:center;
          font-size:9px;color:#555;overflow:hidden;padding:0 4px;text-align:center;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box
        ">
          ${state.dom_selector ? state.dom_selector.slice(0, 14) : 'élément'}
        </div>

        <!-- Popup -->
        <div style="
          position:absolute;${positionStyle(state.popup_position)};
          max-width:${popupMaxWidth};width:calc(100% - 20px);box-sizing:border-box;
          background:#fff;border-radius:10px;padding:${isMobile ? '9px 11px' : '10px 12px'};
          box-shadow:0 6px 20px rgba(0,0,0,0.25);z-index:5;
        ">
          <div style="font-weight:800;font-size:${isMobile ? '11px' : '11px'};color:${TEXT_DARK};margin-bottom:3px;line-height:1.3">
            ${escapeHtml(title)}
          </div>
          <div style="font-size:${isMobile ? '10px' : '10px'};color:#444;line-height:1.35;margin-bottom:${state.action_required ? '6px' : '0'}">
            ${escapeHtml(text)}
          </div>
          ${state.action_required ? `
          <div style="display:inline-block;background:#1A6B3C;color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:12px">
            ${escapeHtml(state.action_required)}
          </div>` : ''}
        </div>
      </div>
    `
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  // Mode de preview actif : 'mobile' ou 'desktop'
  let previewMode = 'mobile'

  // Corps de la preview (mockup unique + badges d'état), régénéré à chaque frappe
  function renderPreviewBody() {
    const state = getFormState()
    const isMobile = previewMode === 'mobile'

    return `
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
        <span style="font-size:10px;font-weight:700;background:#e8e8e8;color:${TEXT_DARK};padding:3px 8px;border-radius:10px">
          Position: ${state.popup_position}
        </span>
        <span style="font-size:10px;font-weight:700;background:#e8e8e8;color:${TEXT_DARK};padding:3px 8px;border-radius:10px">
          Highlight: ${state.highlight_type}
        </span>
        ${state.is_mandatory ? `<span style="font-size:10px;font-weight:700;background:#D4A017;color:#1a1a1a;padding:3px 8px;border-radius:10px">Obligatoire</span>` : ''}
        ${state.skip_allowed ? `<span style="font-size:10px;font-weight:700;background:#eaf7ee;color:#1A6B3C;padding:3px 8px;border-radius:10px">Skip OK</span>` : `<span style="font-size:10px;font-weight:700;background:#fdecea;color:#c0392b;padding:3px 8px;border-radius:10px">Non skippable</span>`}
      </div>

      ${isMobile ? `
      <div style="display:flex;justify-content:center">
        <div style="border:8px solid #1a1a2e;border-radius:22px;padding:0;box-shadow:0 4px 14px rgba(0,0,0,0.2)">
          ${buildScreenMockup(state, 'mobile')}
        </div>
      </div>
      ` : `
      <div style="border:1px solid #ccc;border-radius:8px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.15)">
        ${buildScreenMockup(state, 'desktop')}
      </div>
      `}
    `
  }

  function renderPreviewPanel() {
    return `
    <div style="background:#f5f5f5;border-radius:12px;padding:16px;color:${TEXT_DARK}">
      <h3 style="margin:0 0 14px 0;font-size:14px;font-weight:800;color:${TEXT_DARK}">👁️ Prévisualisation</h3>

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

      <div id="tsv2-preview-body">
        ${renderPreviewBody()}
      </div>
    </div>
    `
  }

  function updatePreview() {
    const body = container.querySelector('#tsv2-preview-body')
    if (body) body.innerHTML = renderPreviewBody()
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
    updatePreview()
  }

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
        <div style="width:300px;flex-shrink:0;max-width:100%">
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

        <!-- Colonne droite : prévisualisation -->
        <div style="width:300px;flex-shrink:0;max-width:100%">
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

    // Listeners édition/suppression (boutons dans la liste)
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

    // Live preview : tout champ du formulaire met à jour la preview sans re-render complet
    const formFieldIds = [
      'step-number', 'step-name', 'page-route', 'dom-selector', 'popup-position',
      'popup-title', 'popup-text', 'action-required', 'validator-logic',
      'highlight-type', 'skip-allowed', 'is-mandatory'
    ]
    formFieldIds.forEach(id => {
      const el = container.querySelector('#' + id)
      if (!el) return
      const evt = (el.tagName === 'SELECT' || el.type === 'checkbox') ? 'change' : 'input'
      el.addEventListener(evt, updatePreview)
    })

    // Toggle Mobile / Desktop de la preview
    const tabMobile = container.querySelector('#tsv2-tab-mobile')
    const tabDesktop = container.querySelector('#tsv2-tab-desktop')
    if (tabMobile) tabMobile.addEventListener('click', () => setPreviewMode('mobile'))
    if (tabDesktop) tabDesktop.addEventListener('click', () => setPreviewMode('desktop'))

    // Preview initiale au chargement du formulaire
    updatePreview()
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
    const skipAllowed = container.querySelector('#skip-allowed').checked
    const isMandatory = container.querySelector('#is-mandatory').checked
    const displayDuration = parseInt(container.querySelector('#display-duration').value) || 0
    const sortOrder = parseInt(container.querySelector('#sort-order').value) || 0

    // Validation
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
