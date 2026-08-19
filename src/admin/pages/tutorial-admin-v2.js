// src/admin/pages/tutorial-admin-v2.js
/**
 * Admin Tutorial Manager v2
 * CRUD complet pour les étapes du tutoriel
 * Table: tutorial_steps_v2
 */

import { supabase } from '../../lib/supabase.js'

export async function renderTutorialAdminV2(container, { toast, openModal, closeModal }) {
  let steps = []
  let editingId = null

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

  // Formulaire pour ajouter/éditer une étape
  function renderForm() {
    const step = editingId ? steps.find(s => s.id === editingId) : {}

    return `
    <div style="background:#f5f5f5;border-radius:12px;padding:20px;margin-bottom:20px">
      <h3 style="margin:0 0 16px 0;font-size:16px;font-weight:700">
        ${editingId ? '✏️ Éditer étape #' + step.step_number : '➕ Nouvelle étape'}
      </h3>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin-bottom:16px">
        <!-- Numéro de step -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Numéro de step *</label>
          <input type="number" id="step-number" value="${step.step_number || ''}" min="1" max="100" placeholder="Ex: 1"
            style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
        </div>

        <!-- Nom de l'étape -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Nom étape (identifiant) *</label>
          <input type="text" id="step-name" value="${step.step_name || ''}" placeholder="Ex: home-welcome"
            style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
        </div>

        <!-- Page/Route -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Page/Route</label>
          <select id="page-route" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px">
            <option value="">-- Sélectionne une route --</option>
            ${PAGE_ROUTES.map(p => `<option value="${p}" ${step.page_route === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>

        <!-- Sélecteur DOM -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Sélecteur DOM</label>
          <input type="text" id="dom-selector" value="${step.dom_selector || ''}" placeholder="Ex: [data-page='collection']"
            style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
        </div>

        <!-- Position du popup -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Position popup</label>
          <select id="popup-position" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px">
            <option value="">-- Sélectionne --</option>
            ${POPUP_POSITIONS.map(p => `<option value="${p}" ${step.popup_position === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>

        <!-- Type highlight -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Type de highlight</label>
          <select id="highlight-type" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px">
            <option value="">-- Sélectionne --</option>
            ${HIGHLIGHT_TYPES.map(h => `<option value="${h}" ${step.highlight_type === h ? 'selected' : ''}>${h}</option>`).join('')}
          </select>
        </div>

        <!-- Validateur -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Validateur</label>
          <select id="validator-logic" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px">
            <option value="">-- Sélectionne --</option>
            ${VALIDATORS.map(v => `<option value="${v}" ${step.validator_logic === v ? 'selected' : ''}>${v}</option>`).join('')}
          </select>
        </div>

        <!-- Durée affichage -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Durée affichage (ms, 0=infini)</label>
          <input type="number" id="display-duration" value="${step.display_duration_ms || 0}" min="0" step="1000"
            style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
        </div>

        <!-- Ordre de tri -->
        <div class="form-group">
          <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Ordre de tri</label>
          <input type="number" id="sort-order" value="${step.sort_order || 0}" min="0"
            style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
        </div>
      </div>

      <!-- Titre du popup (champ plus grand) -->
      <div class="form-group" style="margin-bottom:12px">
        <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Titre du popup *</label>
        <input type="text" id="popup-title" value="${step.popup_title || ''}" maxlength="150" placeholder="Ex: 👋 Bienvenue dans Manager Wars !"
          style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
        <div style="font-size:11px;color:#666;margin-top:4px">Caractères: <span id="title-count">0</span>/150</div>
      </div>

      <!-- Texte du popup (zone de texte) -->
      <div class="form-group" style="margin-bottom:12px">
        <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Texte du popup *</label>
        <textarea id="popup-text" maxlength="500" placeholder="Ex: Explique ce que le joueur doit faire..."
          style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;min-height:80px;font-family:monospace;resize:vertical">${step.popup_text || ''}</textarea>
        <div style="font-size:11px;color:#666;margin-top:4px">Caractères: <span id="text-count">0</span>/500</div>
      </div>

      <!-- Action requise -->
      <div class="form-group" style="margin-bottom:12px">
        <label style="display:block;font-weight:600;font-size:12px;margin-bottom:6px">Action requise</label>
        <input type="text" id="action-required" value="${step.action_required || ''}" placeholder="Ex: Clique sur Collection"
          style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px" />
      </div>

      <!-- Toggles -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="skip-allowed" ${step.skip_allowed !== false ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px">Permet le skip</span>
        </label>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="is-mandatory" ${step.is_mandatory ? 'checked' : ''} />
          <span style="font-weight:600;font-size:13px">Étape obligatoire</span>
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

  // Liste des étapes
  function renderStepsList() {
    if (!steps.length) {
      return '<div style="text-align:center;padding:40px;color:#999">Aucune étape créée. Crée-en une en haut.</div>'
    }

    return `
    <div style="background:#fff;border-radius:12px;padding:16px">
      <h3 style="margin:0 0 16px 0;font-size:16px;font-weight:700">
        📋 ${steps.length} étape(s) créée(s)
      </h3>
      
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:#f0f0f0;border-bottom:2px solid #ddd">
              <th style="padding:10px;text-align:left;font-weight:700">N°</th>
              <th style="padding:10px;text-align:left;font-weight:700">Nom</th>
              <th style="padding:10px;text-align:left;font-weight:700">Page</th>
              <th style="padding:10px;text-align:left;font-weight:700">Titre</th>
              <th style="padding:10px;text-align:center;font-weight:700">Obli.</th>
              <th style="padding:10px;text-align:center;font-weight:700">Skip</th>
              <th style="padding:10px;text-align:center;font-weight:700">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${steps.map(step => `
            <tr style="border-bottom:1px solid #eee;background:${editingId === step.id ? '#ffffeb' : '#fff'}">
              <td style="padding:10px"><strong>#${step.step_number}</strong></td>
              <td style="padding:10px">${step.step_name}</td>
              <td style="padding:10px"><code style="background:#f0f0f0;padding:2px 6px;border-radius:3px">${step.page_route || '—'}</code></td>
              <td style="padding:10px">${step.popup_title || '—'}</td>
              <td style="padding:10px;text-align:center">${step.is_mandatory ? '✅' : '—'}</td>
              <td style="padding:10px;text-align:center">${step.skip_allowed ? '✓' : '✗'}</td>
              <td style="padding:10px;text-align:center;white-space:nowrap">
                <button class="btn btn-sm btn-ghost edit-step-btn" data-id="${step.id}" style="padding:4px 8px;font-size:12px">✏️ Éditer</button>
                <button class="btn btn-sm btn-danger delete-step-btn" data-id="${step.id}" style="padding:4px 8px;font-size:12px;color:#c0392b">🗑️ Supprimer</button>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
    `
  }

  // Rendu principal
  function render() {
    const step = editingId ? steps.find(s => s.id === editingId) : null

    container.innerHTML = `
    <div style="padding:20px;background:#f9f9f9">
      <div style="margin-bottom:24px">
        <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:900">
          🎓 Tutoriel Manager Wars v2
        </h2>
        <p style="margin:0;color:#666;font-size:13px">
          Gérez les étapes du tutoriel interactif. Chaque étape affiche un popup + highlight sur un élément.
        </p>
      </div>

      ${renderForm()}
      ${renderStepsList()}
    </div>
    `

    // Listeners formulaire
    const titleInput = container.querySelector('#popup-title')
    const textInput = container.querySelector('#popup-text')
    const saveBtn = container.querySelector('#save-step-btn')
    const cancelBtn = container.querySelector('#cancel-edit-btn')

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

    // Listeners édition/suppression
    container.querySelectorAll('.edit-step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        editingId = Number(btn.dataset.id)
        render()
        window.scrollTo(0, 0)
      })
    })

    container.querySelectorAll('.delete-step-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Supprimer cette étape ? Action irréversible.')) return
        const id = Number(btn.dataset.id)
        const { error } = await supabase
          .from('tutorial_steps_v2')
          .delete()
          .eq('id', id)
        if (error) toast(`Erreur suppression: ${error.message}`, 'error')
        else { toast('Étape supprimée', 'success'); await loadSteps() }
      })
    })
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
