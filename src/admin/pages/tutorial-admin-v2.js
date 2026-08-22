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

// Injecté une seule fois : la balise contenteditable n'a pas de placeholder
// natif contrairement à <textarea> — cette astuce CSS (content:attr()) le
// simule proprement.
function ensureEditorStyles() {
  if (document.getElementById('tsv2-editor-styles')) return
  const style = document.createElement('style')
  style.id = 'tsv2-editor-styles'
  style.textContent = `
    #popup-text[contenteditable]:empty:before { content: attr(placeholder); color: #999; }
    .tsv2-fmt-btn:hover { background:#f0f0f0 !important; }
  `
  document.head.appendChild(style)
}
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
  ensureEditorStyles()
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
    { value: 'above-nav',     label: '🧭 Au-dessus de la navigation' },
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
      .order('created_at', { ascending: false })

    if (error) {
      toast(`Erreur chargement: ${error.message}`, 'error')
      return
    }
    steps = data || []
    render()
  }

  // ── Colonne gauche : liste des étapes ──────────────────────
  let stepFilter = ''

  function renderStepsList() {
    if (!steps.length) {
      return `<div style="text-align:center;padding:40px 12px;color:${TEXT_MUTED};font-size:13px">Aucune étape créée.<br>Utilise le formulaire pour en créer une.</div>`
    }

    const q = stepFilter.trim().toLowerCase()
    const filtered = q
      ? steps.filter(s =>
          String(s.step_number).includes(q) ||
          (s.step_name || '').toLowerCase().includes(q)
        )
      : steps

    if (!filtered.length) {
      return `<div style="text-align:center;padding:24px 12px;color:${TEXT_MUTED};font-size:13px">Aucun résultat pour "${escAttr(stepFilter)}".</div>`
    }

    return `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:6px">
      ${filtered.map(step => `
        <div class="tsv2-list-item" data-id="${step.id}" title="${escAttr(step.step_name)}" style="
          position:relative;padding:8px 6px;border-radius:8px;cursor:pointer;text-align:center;
          background:${editingId === step.id ? '#eaf7ee' : '#fff'};
          border:1.5px solid ${editingId === step.id ? '#1A6B3C' : '#eee'};
          transition:border-color .15s,background .15s;
        ">
          ${step.is_mandatory ? `<span style="position:absolute;top:3px;right:3px;width:6px;height:6px;border-radius:50%;background:#D4A017"></span>` : ''}
          <div style="font-weight:900;font-size:14px;color:${TEXT_DARK};line-height:1.2">#${step.step_number}</div>
          <div style="font-size:9px;color:${TEXT_MUTED};margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${step.step_name}</div>
          <button class="delete-step-btn" data-id="${step.id}" title="Supprimer"
            style="position:absolute;bottom:2px;right:2px;width:16px;height:16px;line-height:16px;padding:0;border:none;background:transparent;color:#c0392b;font-size:10px;cursor:pointer;opacity:.6">🗑️</button>
        </div>
      `).join('')}
    </div>
    `
  }

  function bindStepsListListeners() {
    container.querySelectorAll('.tsv2-list-item').forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.closest('.delete-step-btn')) return
        editingId = Number(item.dataset.id)
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
            <button type="button" id="explore-btn" title="Interagir vraiment avec l'aperçu (ouvrir une popup, une carte...)"
              style="flex-shrink:0;padding:0 10px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px">🖱️</button>
            <button type="button" id="picker-btn" title="Cliquer sur un élément dans l'aperçu"
              style="flex-shrink:0;padding:0 10px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px">🎯</button>
          </div>
          <div style="font-size:10px;color:${TEXT_MUTED};margin-top:4px">
            🖱️ Explorer = interagir réellement (ouvrir une popup de détail, un menu...) avant de sélectionner un élément à l'intérieur avec 🎯.
            🎯 seul = sélection directe. Évite de taper un sélecteur à la main (fautes de frappe possibles).
          </div>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">📱 Position popup (Mobile)</label>
          <select id="popup-position" style="${INPUT_STYLE}">
            <option value="">-- Sélectionne --</option>
            ${POPUP_POSITIONS.map(p => `<option value="${p.value}" ${step.popup_position === p.value ? 'selected' : ''}>${p.label}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label style="${LABEL_STYLE}">🖥️ Position popup (PC)</label>
          <select id="popup-position-desktop" style="${INPUT_STYLE}">
            <option value="">-- Identique au mobile --</option>
            ${POPUP_POSITIONS.map(p => `<option value="${p.value}" ${step.popup_position_desktop === p.value ? 'selected' : ''}>${p.label}</option>`).join('')}
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
        <div style="display:flex;gap:4px;margin-bottom:6px">
          <button type="button" class="tsv2-fmt-btn" data-cmd="bold" title="Gras" style="width:30px;height:28px;border:1px solid #ddd;border-radius:5px;background:#fff;cursor:pointer;font-weight:900;font-size:13px;color:${TEXT_DARK}">B</button>
          <button type="button" class="tsv2-fmt-btn" data-cmd="italic" title="Italique" style="width:30px;height:28px;border:1px solid #ddd;border-radius:5px;background:#fff;cursor:pointer;font-style:italic;font-size:13px;color:${TEXT_DARK}">I</button>
          <button type="button" class="tsv2-fmt-btn" data-cmd="underline" title="Souligné" style="width:30px;height:28px;border:1px solid #ddd;border-radius:5px;background:#fff;cursor:pointer;text-decoration:underline;font-size:13px;color:${TEXT_DARK}">U</button>
          <button type="button" class="tsv2-fmt-btn" data-cmd="insertUnorderedList" title="Liste à puces" style="padding:0 10px;height:28px;border:1px solid #ddd;border-radius:5px;background:#fff;cursor:pointer;font-size:12px;color:${TEXT_DARK}">• Liste</button>
          <button type="button" id="tsv2-fmt-clear" title="Effacer la mise en forme" style="padding:0 10px;height:28px;border:1px solid #ddd;border-radius:5px;background:#fff;cursor:pointer;font-size:12px;color:${TEXT_MUTED}">✕ Format</button>
        </div>
        <div id="popup-text" contenteditable="true" placeholder="Ex: Explique ce que le joueur doit faire..."
          style="${INPUT_STYLE};min-height:80px;overflow-y:auto;line-height:1.5">${step.popup_text || ''}</div>
        <div style="font-size:11px;color:${TEXT_MUTED};margin-top:4px">Caractères: <span id="text-count">0</span> · mise en forme HTML (gras/italique/liste) rendue telle quelle dans le popup</div>
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
      <div style="font-size:10px;color:${TEXT_MUTED};margin-bottom:6px;margin-top:-6px">
        Si décoché : l'étape avance automatiquement quand le joueur clique sur l'élément ciblé (Sélecteur DOM) — nécessite "Autoriser le clic" activé.
        Exemple : cible une carte dans Collection avec "Autoriser le clic" ✅ et "Suivant" ✕ → le joueur clique la carte, son détail réel s'ouvre, et l'étape suivante s'affiche automatiquement dessus.
      </div>
      <div id="tsv2-softlock-warning" style="display:none;font-size:11px;font-weight:700;color:#c0392b;background:#fdecea;border-radius:6px;padding:6px 10px;margin-bottom:16px">
        ⚠️ Sans bouton "Suivant" NI "Autoriser le clic", cette étape ne pourra jamais avancer.
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
        ${editingId ? `<button class="btn btn-ghost" id="duplicate-step-btn" style="flex:1;min-width:120px">📋 Dupliquer</button>` : ''}
        ${editingId ? `<button class="btn btn-ghost" id="cancel-edit-btn" style="flex:1;min-width:120px">✕ Annuler</button>` : ''}
      </div>
    </div>
    `
  }

  // ── Colonne droite : prévisualisation RÉELLE (iframe) ───────

  function getFormState() {
    const val = id => container.querySelector('#' + id)?.value || ''
    const checked = id => container.querySelector('#' + id)?.checked || false
    const html = id => container.querySelector('#' + id)?.innerHTML || ''
    return {
      page_route: val('page-route') || 'home',
      dom_selector: val('dom-selector'),
      popup_position: val('popup-position') || 'center',
      popup_position_desktop: val('popup-position-desktop'),
      popup_title: val('popup-title'),
      popup_text: html('popup-text'),
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
      positionDesktop: state.popup_position_desktop || '',
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
    // Un rechargement d'iframe repart d'un état neutre côté jeu (aucun mode
    // exploration actif dedans) — on resynchronise le bouton en conséquence.
    exploreActive = false
    const exploreBtn = container.querySelector('#explore-btn')
    if (exploreBtn) { exploreBtn.style.background = '#fff'; exploreBtn.style.borderColor = '#ddd' }
    previewIframe.src = '/index.html?' + stateToParams(state).toString()
  }

  // Met à jour l'aperçu en direct : si la page a changé, on renavigue via
  // postMessage (le jeu réel gère la transition) ; sinon on ne fait que
  // redessiner le spotlight/la bulle. Aucun rechargement d'iframe.
  function updatePreviewLive() {
    const state = getFormState()
    renderBadges(state)
    updateSoftlockWarning(state)
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

  function updateSoftlockWarning(state) {
    const el = container.querySelector('#tsv2-softlock-warning')
    if (!el) return
    const isSoftlocked = !state.show_next_button && !state.allow_interaction
    el.style.display = isSoftlocked ? 'block' : 'none'
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
  let exploreActive = false

  function toggleExplore() {
    if (!previewIframe) return
    exploreActive = !exploreActive
    const btn = container.querySelector('#explore-btn')
    if (btn) {
      btn.style.background = exploreActive ? '#eaf7ee' : '#fff'
      btn.style.borderColor = exploreActive ? '#1A6B3C' : '#ddd'
    }
    try {
      previewIframe.contentWindow.postMessage({
        type: exploreActive ? 'tutorial-preview-navmode-start' : 'tutorial-preview-navmode-stop',
      }, '*')
    } catch (e) { /* iframe pas prête */ }
  }

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
          <input type="text" id="step-filter" value="${escAttr(stepFilter)}" placeholder="🔍 Filtrer par nom ou numéro..."
            style="${INPUT_STYLE};margin-bottom:10px;font-size:13px" />
          <div id="tsv2-steps-list-wrap" style="max-height:calc(100vh - 260px);overflow-y:auto;padding-right:4px">
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

    // Filtre de la liste des étapes (nom ou numéro), mise à jour live sans
    // toucher au reste du formulaire (préserve le focus dans les champs)
    const filterInput = container.querySelector('#step-filter')
    if (filterInput) {
      filterInput.addEventListener('input', e => {
        stepFilter = e.target.value
        const wrap = container.querySelector('#tsv2-steps-list-wrap')
        if (wrap) wrap.innerHTML = renderStepsList()
        bindStepsListListeners()
      })
    }

    if (titleInput) {
      const titleCount = container.querySelector('#title-count')
      if (titleCount) titleCount.textContent = titleInput.value.length
      titleInput.addEventListener('input', e => {
        if (titleCount) titleCount.textContent = e.target.value.length
      })
    }

    if (textInput) {
      const textCount = container.querySelector('#text-count')
      if (textCount) textCount.textContent = textInput.textContent.length
      textInput.addEventListener('input', e => {
        if (textCount) textCount.textContent = e.target.textContent.length
      })
    }

    // Barre d'outils de mise en forme (Gras/Italique/Souligné/Liste)
    container.querySelectorAll('.tsv2-fmt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const editor = container.querySelector('#popup-text')
        editor?.focus()
        document.execCommand(btn.dataset.cmd, false, null)
        const textCount = container.querySelector('#text-count')
        if (textCount && editor) textCount.textContent = editor.textContent.length
        debouncedUpdatePreview()
      })
    })
    container.querySelector('#tsv2-fmt-clear')?.addEventListener('click', () => {
      const editor = container.querySelector('#popup-text')
      editor?.focus()
      document.execCommand('removeFormat', false, null)
      debouncedUpdatePreview()
    })

    if (saveBtn) saveBtn.addEventListener('click', saveStep)
    if (cancelBtn) cancelBtn.addEventListener('click', () => { editingId = null; render() })
    if (newBtn) newBtn.addEventListener('click', () => { editingId = null; render() })
    container.querySelector('#duplicate-step-btn')?.addEventListener('click', duplicateStep)

    // Clic sur une tuile (hors bouton supprimer) → édite l'étape ;
    // clic sur 🗑️ → supprime. Extrait dans une fonction réutilisable, car
    // le filtre de recherche ré-attache aussi ces listeners après avoir
    // remplacé uniquement le contenu de la liste (sans re-render() complet).
    bindStepsListListeners()

    // Toggle Mobile / Desktop
    const tabMobile = container.querySelector('#tsv2-tab-mobile')
    const tabDesktop = container.querySelector('#tsv2-tab-desktop')
    if (tabMobile) tabMobile.addEventListener('click', () => setPreviewMode('mobile'))
    if (tabDesktop) tabDesktop.addEventListener('click', () => setPreviewMode('desktop'))

    // Live preview : tout champ met à jour l'iframe réelle en direct
    const formFieldIds = [
      'page-route', 'dom-selector', 'popup-position', 'popup-position-desktop', 'popup-title', 'popup-text',
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

    // Mode exploration : interaction réelle temporaire dans l'aperçu
    const exploreBtn = container.querySelector('#explore-btn')
    if (exploreBtn) exploreBtn.addEventListener('click', toggleExplore)

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
    updateSoftlockWarning(getFormState())
  }

  // Sauvegarder une étape
  // Duplique l'étape actuellement en édition : copie tous les champs,
  // step_number = plus haut existant + 1, step_name suffixé pour rester
  // unique (contrainte UNIQUE en base).
  async function duplicateStep() {
    if (!editingId) return
    const original = steps.find(s => s.id === editingId)
    if (!original) return

    const nextNumber = steps.reduce((max, s) => Math.max(max, s.step_number || 0), 0) + 1

    // Garantit un step_name unique même en cas de duplications successives
    const existingNames = new Set(steps.map(s => s.step_name))
    let baseName = `${original.step_name}-copie`
    let newName = baseName
    let suffix = 2
    while (existingNames.has(newName)) {
      newName = `${baseName}-${suffix}`
      suffix++
    }

    const copy = { ...original }
    delete copy.id
    delete copy.created_at
    delete copy.updated_at
    copy.step_number = nextNumber
    copy.step_name = newName

    const { data, error } = await supabase
      .from('tutorial_steps_v2')
      .insert([copy])
      .select()
      .single()

    if (error) { toast(`Erreur duplication: ${error.message}`, 'error'); return }

    toast(`Étape dupliquée en #${nextNumber}`, 'success')
    editingId = data.id
    await loadSteps()
  }

  async function saveStep() {
    const stepNumber = parseInt(container.querySelector('#step-number').value)
    const stepName = container.querySelector('#step-name').value.trim()
    const pageRoute = container.querySelector('#page-route').value || null
    const domSelector = container.querySelector('#dom-selector').value.trim() || null
    const popupPosition = container.querySelector('#popup-position').value || null
    const popupPositionDesktop = container.querySelector('#popup-position-desktop').value || null
    const popupTitle = container.querySelector('#popup-title').value.trim()
    const popupText = container.querySelector('#popup-text').innerHTML.trim()
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
    const popupTextIsEmpty = !popupText || popupText === '<br>' || popupText === '<div><br></div>'
    if (popupTextIsEmpty) { toast('Texte du popup requis', 'error'); return }

    const payload = {
      step_number: stepNumber,
      step_name: stepName,
      page_route: pageRoute,
      dom_selector: domSelector,
      popup_position: popupPosition,
      popup_position_desktop: popupPositionDesktop,
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
