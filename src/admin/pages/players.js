import { supabase } from '../../lib/supabase.js'
import { renderPlayerCard } from '../../components/player-card.js'
import { ALL_CONTINENTS, listContinentFiles, getPortrait } from '../../lib/portrait.js'

const BASE = import.meta.env.BASE_URL
const RARITY_LABELS = { normal:'Normal', pepite:'Pépite', papyte:'Papyte', legende:'Légende' }
const JOB_COLORS    = { GK:'#aaaaaa', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

// Manifeste des faces — rechargé à chaque ouverture de modal pour éviter le cache vide
async function getFacesManifest() {
  const manifest = {}
  for (const continent of ALL_CONTINENTS) {
    manifest[continent] = await listContinentFiles(continent)
  }
  return manifest
}

function mainNote(p) {
  if (p.job === 'GK')  return p.note_g || 0
  if (p.job === 'DEF') return p.note_d || 0
  if (p.job === 'MIL') return p.note_m || 0
  return p.note_a || 0
}

// ── Export Excel : toutes les colonnes de la table players ──────────────
async function exportPlayersExcel(toast) {
  const btn = document.getElementById('export-players-btn')
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Export...' }
  try {
    // select('*') : on exporte la table telle quelle, donc les colonnes
    // réimportées correspondront exactement — pas de mapping à maintenir.
    // Pagination : Supabase plafonne les retours (souvent 1000 lignes).
    let all = [], from = 0
    const PAGE = 1000
    for (;;) {
      const { data, error } = await supabase
        .from('players').select('*').order('surname_real').range(from, from + PAGE - 1)
      if (error) { toast(error.message, 'error'); return }
      all = all.concat(data || [])
      if (!data || data.length < PAGE) break
      from += PAGE
    }
    if (!all.length) { toast('Aucun joueur à exporter', 'error'); return }

    const XLSX = await import('xlsx')
    const ws = XLSX.utils.json_to_sheet(all)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Joueurs')
    const stamp = new Date().toISOString().slice(0, 10)
    XLSX.writeFile(wb, `joueurs_${stamp}.xlsx`)
    toast(`${all.length} joueur(s) exporté(s) ✅`, 'success')
  } catch (e) {
    toast(`Erreur export : ${e.message}`, 'error')
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '📤 Export Excel' }
  }
}

// ── Import Excel : modification de masse ────────────────────────────────
async function importPlayersExcel(file, container, helpers) {
  const { toast } = helpers
  const btn = document.getElementById('import-players-btn')
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Import...' }
  try {
    const XLSX = await import('xlsx')
    const buf  = await file.arrayBuffer()
    const wb   = XLSX.read(buf, { type: 'array' })
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: null })
    if (!rows.length) { toast('Fichier vide', 'error'); return }

    // On ne réécrit que des colonnes réellement modifiables : cela évite
    // qu'une colonne calculée ou renommée dans Excel ne fasse échouer tout
    // le lot, et protège les champs techniques.
    const EDITABLE = [
      'firstname','surname_real','lastname_reel','job','job2','rarity',
      'country_code','club_id','sell_price','note_g','note_d','note_m','note_a',
      'note_min','note_max','face',
    ]
    const NUMERIC = new Set(['sell_price','note_g','note_d','note_m','note_a','note_min','note_max'])

    const updates = []
    const skipped = []
    rows.forEach((r, i) => {
      if (!r.id) { skipped.push(`ligne ${i + 2} : id manquant`); return }
      const row = { id: r.id }
      // Colonnes requises en base : une cellule vide ne doit pas devenir null
      // (la contrainte NOT NULL ferait échouer tout le lot d'un coup).
      const REQUIRED = new Set(['firstname','surname_real'])
      EDITABLE.forEach(k => {
        if (!(k in r)) return
        let v = r[k]
        if (typeof v === 'string') v = v.trim()
        if (v === '') v = null
        if (v !== null && NUMERIC.has(k)) {
          const n = Number(v)
          v = Number.isFinite(n) ? n : null
        }
        if (v === null && REQUIRED.has(k)) {
          // Repli : le Surname reprend le nom réel, sinon on ne touche pas au champ
          if (v === null) return   // laisse la valeur existante en base intacte
        }
        row[k] = v
      })
      row.updated_at = new Date().toISOString()
      updates.push(row)
    })

    if (!updates.length) { toast('Aucune ligne exploitable (colonne "id" requise)', 'error'); return }
    if (!confirm(`Mettre à jour ${updates.length} joueur(s) depuis le fichier ?\n\nCette action écrase les données actuelles.`)) return

    // Envoi par lots : un upsert géant échoue en bloc et rend l'erreur
    // illisible ; par lots on identifie précisément ce qui casse.
    let ok = 0
    const CHUNK = 100
    for (let i = 0; i < updates.length; i += CHUNK) {
      const slice = updates.slice(i, i + CHUNK)
      const { error } = await supabase.from('players').upsert(slice, { onConflict: 'id' })
      if (error) { toast(`Erreur lot ${Math.floor(i / CHUNK) + 1} : ${error.message}`, 'error'); break }
      ok += slice.length
    }

    toast(`${ok} joueur(s) mis à jour ✅${skipped.length ? ` — ${skipped.length} ligne(s) ignorée(s)` : ''}`, 'success')
    if (skipped.length) console.warn('[Import joueurs] lignes ignorées :', skipped)
    if (ok) loadPlayers(container, helpers)
  } catch (e) {
    toast(`Erreur import : ${e.message}`, 'error')
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '📥 Import Excel' }
  }
}

// Petit composant "multi-select" additionnable (cases à cocher dans un
// menu déroulant). Utilisé pour Club et Pays : plusieurs valeurs cumulables
// avec un OR entre elles, puis un AND avec les autres filtres.
// L'état sélectionné vit dans window.__players<Kind>Filter (un Set), pour
// survivre aux ré-écritures de innerHTML lors des rechargements de liste.
function renderMultiSelect(kind, label, options, withSearch = false) {
  const varName = `__players${kind[0].toUpperCase()}${kind.slice(1)}Filter`
  if (!window[varName]) window[varName] = new Set()
  return `<div class="ms-wrap" data-ms-kind="${kind}" style="position:relative;min-width:150px">
    <button type="button" id="ms-btn-${kind}" class="btn btn-ghost" style="width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center;gap:6px">
      <span id="ms-label-${kind}">${label}</span>
      <span style="font-size:10px;opacity:.6">▾</span>
    </button>
    <div id="ms-panel-${kind}" style="display:none;position:absolute;z-index:50;top:calc(100% + 4px);left:0;min-width:220px;max-height:280px;overflow-y:auto;background:#fff;border:1px solid var(--gray-200,#ddd);border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,0.15);padding:8px">
      ${withSearch ? `<input id="ms-search-${kind}" placeholder="Rechercher…" style="width:100%;margin-bottom:6px;padding:6px 8px;font-size:12.5px">` : ''}
      <div style="display:flex;gap:6px;margin-bottom:6px">
        <button type="button" class="btn btn-ghost btn-sm" id="ms-all-${kind}" style="flex:1;font-size:11px;padding:4px">Tout</button>
        <button type="button" class="btn btn-ghost btn-sm" id="ms-none-${kind}" style="flex:1;font-size:11px;padding:4px">Aucun</button>
      </div>
      <div id="ms-options-${kind}">
        ${options.map(o => `
          <label style="display:flex;align-items:center;gap:6px;padding:3px 2px;font-size:12.5px;cursor:pointer" data-ms-label="${(o.label||'').toLowerCase()}">
            <input type="checkbox" class="ms-check-${kind}" value="${o.value}">
            <span>${o.label}</span>
          </label>`).join('')}
      </div>
    </div>
  </div>`
}

function wireMultiSelect(kind, container, onChange) {
  const varName = `__players${kind[0].toUpperCase()}${kind.slice(1)}Filter`
  const set = window[varName]
  const btn   = container.querySelector(`#ms-btn-${kind}`)
  const panel = container.querySelector(`#ms-panel-${kind}`)
  const labelEl = container.querySelector(`#ms-label-${kind}`)
  const baseLabel = labelEl?.textContent || ''

  function refreshLabel() {
    if (!labelEl) return
    labelEl.textContent = set.size ? `${baseLabel} (${set.size})` : baseLabel
  }
  // Re-cocher les cases selon l'état conservé (survit aux rechargements)
  container.querySelectorAll(`.ms-check-${kind}`).forEach(cb => {
    cb.checked = set.has(cb.value)
    cb.addEventListener('change', () => {
      if (cb.checked) set.add(cb.value); else set.delete(cb.value)
      refreshLabel(); onChange()
    })
  })
  refreshLabel()

  btn?.addEventListener('click', (e) => {
    e.stopPropagation()
    const isOpen = panel.style.display === 'block'
    document.querySelectorAll('[id^="ms-panel-"]').forEach(p => p.style.display = 'none')
    panel.style.display = isOpen ? 'none' : 'block'
  })
  panel?.addEventListener('click', (e) => e.stopPropagation())

  container.querySelector(`#ms-all-${kind}`)?.addEventListener('click', () => {
    container.querySelectorAll(`.ms-check-${kind}`).forEach(cb => { cb.checked = true; set.add(cb.value) })
    refreshLabel(); onChange()
  })
  container.querySelector(`#ms-none-${kind}`)?.addEventListener('click', () => {
    container.querySelectorAll(`.ms-check-${kind}`).forEach(cb => { cb.checked = false })
    set.clear(); refreshLabel(); onChange()
  })
  container.querySelector(`#ms-search-${kind}`)?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase()
    container.querySelectorAll(`#ms-options-${kind} label`).forEach(l => {
      l.style.display = l.dataset.msLabel.includes(q) ? 'flex' : 'none'
    })
  })
}

// Ferme les menus déroulants ouverts au clic ailleurs (une seule fois globalement)
if (!window.__playersMsDocListener) {
  window.__playersMsDocListener = true
  document.addEventListener('click', () => {
    document.querySelectorAll('[id^="ms-panel-"]').forEach(p => p.style.display = 'none')
  })
}

export async function pagePlayers(container, helpers) {
  await loadPlayers(container, helpers)
}

async function loadPlayers(container, helpers, savedFilters = null) {
  const { toast } = helpers
  // Sauvegarder les filtres courants si non fournis (avant un rechargement,
  // ex. après édition/suppression d'un joueur)
  if (!savedFilters) {
    savedFilters = {
      search:   document.getElementById('search-players')?.value || '',
      job:      document.getElementById('filter-job')?.value || '',
      rarity:   document.getElementById('filter-rarity')?.value || '',
      clubs:    window.__playersClubFilter    ? [...window.__playersClubFilter]    : [],
      countries:window.__playersCountryFilter ? [...window.__playersCountryFilter] : [],
      sort:     document.getElementById('sort-players')?.value || 'job',
    }
  }
  const [{ data: players, error }, { data: clubs }] = await Promise.all([
    supabase.from('players').select('*, clubs(id,encoded_name,logo_url)'),
    supabase.from('clubs').select('id,encoded_name').order('encoded_name'),
  ])
  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }
  const JOB_ORDER = { GK:0, DEF:1, MIL:2, ATT:3 }
  const sorted = (players || []).sort((a,b) => {
    const jo = (JOB_ORDER[a.job]??4) - (JOB_ORDER[b.job]??4)
    return jo !== 0 ? jo : (a.surname_real||'').localeCompare(b.surname_real||'')
  })
  renderPage(container, sorted, clubs || [], helpers, savedFilters)
}

function renderPage(container, players, clubs, helpers, savedFilters = null) {
  const { toast } = helpers

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="flex:1;min-width:140px">
        <select id="filter-job" style="width:100px">
          <option value="">Tout</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
        <select id="filter-rarity" style="width:110px">
          <option value="">Toutes</option>
          ${Object.entries(RARITY_LABELS).map(([k,v]) => `<option value="${k}">${v}</option>`).join('')}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="export-players-btn" style="white-space:nowrap">📤 Export Excel</button>
        <button class="btn btn-ghost" id="import-players-btn" style="white-space:nowrap">📥 Import Excel</button>
        <input type="file" id="import-players-file" accept=".xlsx,.xls" style="display:none">
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
        ${renderMultiSelect('club', '🏟️ Club', clubs.map(c => ({ value: c.id, label: c.encoded_name })), true)}
        ${renderMultiSelect('country', '🌍 Pays', [...new Set(players.map(p => p.country_code).filter(Boolean))].sort().map(cc => ({ value: cc, label: cc })), true)}
        <select id="sort-players" style="min-width:170px">
          <option value="job">Trier : Poste (défaut)</option>
          <option value="note_desc">Trier : Note ↓ (plus haute)</option>
          <option value="note_asc">Trier : Note ↑ (plus basse)</option>
          <option value="name">Trier : Nom (A→Z)</option>
        </select>
      </div>
      <div id="filters-restore-hook" style="display:none"></div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${players.length} joueur(s)</div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
    </div>`

  // Restaurer les filtres texte/select simples
  if (savedFilters) {
    const sf = savedFilters
    const el = (id) => document.getElementById(id)
    if (sf.search && el('search-players')) el('search-players').value = sf.search
    if (sf.job    && el('filter-job'))     el('filter-job').value     = sf.job
    if (sf.rarity && el('filter-rarity'))  el('filter-rarity').value  = sf.rarity
    if (sf.sort   && el('sort-players'))   el('sort-players').value   = sf.sort
  }
  // Restaurer l'état des multi-select (Club / Pays) : le Set global a pu
  // être vidé par un rechargement complet de page (navigation), on le
  // reconstruit alors depuis les valeurs sauvegardées.
  if (savedFilters?.clubs)     window.__playersClubFilter    = new Set(savedFilters.clubs)
  if (savedFilters?.countries) window.__playersCountryFilter = new Set(savedFilters.countries)

  function filtered() {
    const q         = document.getElementById('search-players').value.toLowerCase()
    const job       = document.getElementById('filter-job').value
    const rar       = document.getElementById('filter-rarity').value
    const clubSet   = window.__playersClubFilter    || new Set()
    const countrySet= window.__playersCountryFilter || new Set()
    const sortMode  = document.getElementById('sort-players')?.value || 'job'

    // Chaque filtre est additionnable EN INTERNE (OR entre les valeurs
    // cochées d'un même filtre : "France OU Espagne"), et les différents
    // filtres se combinent ENTRE EUX en ET ("France OU Espagne" ET "club X").
    let list = players.filter(p =>
      (!q          || `${p.firstname} ${p.surname_real}`.toLowerCase().includes(q)) &&
      (!job        || p.job === job) &&
      (!rar        || p.rarity === rar) &&
      (!clubSet.size    || clubSet.has(p.club_id)) &&
      (!countrySet.size || countrySet.has(p.country_code))
    )

    if (sortMode === 'note_desc') list = [...list].sort((a,b) => mainNote(b) - mainNote(a))
    else if (sortMode === 'note_asc') list = [...list].sort((a,b) => mainNote(a) - mainNote(b))
    else if (sortMode === 'name') list = [...list].sort((a,b) => (a.surname_real||'').localeCompare(b.surname_real||''))
    // 'job' : déjà trié par poste puis nom lors du chargement initial

    return list
  }

  const selected = new Set()
  function updateBulkBar() {
    const bar = document.getElementById('bulk-bar')
    const cnt = document.getElementById('bulk-count')
    if (!bar) return
    bar.style.display = selected.size > 0 ? 'flex' : 'none'
    if (cnt) cnt.textContent = `${selected.size} joueur(s) sélectionné(s)`
  }

  function renderList() {
    const list = filtered()
    document.getElementById('count-label').textContent = `${list.length} joueur(s)`
    const el = document.getElementById('players-list')
    if (!list.length) { el.innerHTML = '<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>'; return }

    el.innerHTML = list.map(p => {
      const playerObj = {
        ...p,
        clubs: p.clubs,
        face: p.face || null,
      }
      const card = renderPlayerCard(playerObj, { width: 120 })
      return `<div style="position:relative;cursor:pointer" data-edit="${p.id}">
        ${card}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${p.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`
    }).join('')

    // Clic carte → éditer
    el.querySelectorAll('[data-edit]').forEach(div => {
      div.addEventListener('click', () => {
        const p = players.find(x => x.id === div.dataset.edit)
        if (p) openPlayerModal(p, clubs, container, helpers)
      })
    })
    // Bouton supprimer
    el.querySelectorAll('.btn-del-player').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation()
        if (!confirm('Supprimer ce joueur ?')) return
        const { error } = await supabase.from('players').delete().eq('id', btn.dataset.del)
        if (error) toast(error.message, 'error')
        else { toast('Joueur supprimé ✅', 'success'); loadPlayers(container, helpers) }
      })
    })
  }

  renderList()
  document.getElementById('search-players').addEventListener('input', renderList)
  document.getElementById('filter-job').addEventListener('change', renderList)
  document.getElementById('filter-rarity').addEventListener('change', renderList)
  document.getElementById('sort-players').addEventListener('change', renderList)
  wireMultiSelect('club', container, renderList)
  wireMultiSelect('country', container, renderList)
  document.getElementById('bulk-cancel-btn')?.addEventListener('click', () => { selected.clear(); updateBulkBar(); renderList() })
  document.getElementById('bulk-delete-btn')?.addEventListener('click', async () => {
    if (!selected.size || !confirm(`Supprimer ${selected.size} joueur(s) ?`)) return
    const ids = [...selected]
    const { error } = await supabase.from('players').delete().in('id', ids)
    if (error) { toast(error.message, 'error'); return }
    toast(`${ids.length} joueur(s) supprimé(s) ✅`, 'success')
    selected.clear()
    const filters = {
    search:    document.getElementById('search-players')?.value || '',
    job:       document.getElementById('filter-job')?.value || '',
    rarity:    document.getElementById('filter-rarity')?.value || '',
    sort:      document.getElementById('sort-players')?.value || 'job',
    clubs:     window.__playersClubFilter    ? [...window.__playersClubFilter]    : [],
    countries: window.__playersCountryFilter ? [...window.__playersCountryFilter] : [],
  }
  loadPlayers(container, helpers, filters)
  })
  document.getElementById('add-player-btn').addEventListener('click', () => openPlayerModal(null, clubs, container, helpers))
  document.getElementById('export-players-btn').addEventListener('click', () => exportPlayersExcel(helpers.toast))
  document.getElementById('import-players-btn').addEventListener('click', () => {
    document.getElementById('import-players-file').click()
  })
  document.getElementById('import-players-file').addEventListener('change', (e) => {
    const file = e.target.files?.[0]
    if (file) importPlayersExcel(file, container, helpers)
    e.target.value = ''  // permet de réimporter le même fichier après correction
  })
}

// ── Modal Card Builder ────────────────────────────────────
async function openPlayerModal(player, clubs, container, helpers) {
  const { toast, openModal, closeModal } = helpers
  const isEdit = !!player
  const manifest = await getFacesManifest()

  // Faces déjà utilisées
  const { data: usedFaces } = await supabase.from('players').select('face').not('face', 'is', null)
  const usedSet = new Set((usedFaces || []).map(r => r.face).filter(Boolean))
  if (player?.face) usedSet.delete(player.face) // permettre de réutiliser la face actuelle

  const clubOpts = `<option value="">— Club —</option>` +
    clubs.map(c => `<option value="${c.id}" ${player?.club_id === c.id ? 'selected' : ''}>${c.encoded_name}</option>`).join('')

  const currentContinent = player?.face ? player.face.split('/')[0] : ''
  const folderOpts = Object.keys(manifest).map(f =>
    `<option value="${f}" ${currentContinent === f ? 'selected' : ''}>${f}</option>`
  ).join('')

  openModal(
    isEdit ? `✏️ ${player.firstname} ${player.surname_real}` : '➕ Nouveau joueur',
    `<style>
      /* Sur mobile, l'aperçu (largeur fixe) + le formulaire (min-width:300px)
         dépassaient la largeur de l'écran (480px minimum requis), forçant un
         layout écrasé avec scroll horizontal. En dessous de 700px, on empile
         verticalement : aperçu centré en haut, formulaire pleine largeur. */
      @media (max-width: 700px) {
        .pm-layout { flex-direction: column !important; }
        .pm-preview-col { position: static !important; width: 100% !important; }
        .pm-preview-col > div:last-child { display:flex; justify-content:center }
        .pm-form-col { min-width: 0 !important; width: 100% !important; }
        .pm-grid4 { grid-template-columns: 1fr 1fr !important; }
      }
    </style>
    <div class="pm-layout" style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">

      <!-- Colonne gauche : aperçu carte -->
      <div class="pm-preview-col" style="flex-shrink:0;position:sticky;top:0">
        <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center">Aperçu</div>
        <div id="card-preview" style="min-width:160px"></div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div class="pm-form-col" style="flex:1;min-width:300px;display:flex;flex-direction:column;gap:12px">

        <!-- Identité -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Prénom *</label>
            <input id="pm-fn" value="${player?.firstname||''}" placeholder="Lucas">
          </div>
          <div class="form-group">
            <label>Nom</label>
            <input id="pm-real" value="${player?.surname_real || ''}" placeholder="Silva">
          </div>
        </div>
        <div class="form-group">
          <label>Lastname (réel) <span style="font-weight:400;color:#999">— champ libre, indépendant</span></label>
          <input id="pm-lastname-reel" value="${player?.lastname_reel || ''}" placeholder="Silva">
        </div>

        <!-- Poste + Rareté + Pays -->
        <div class="pm-grid4" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Poste 1</label>
            <select id="pm-job">
              ${['GK','DEF','MIL','ATT'].map(j => `<option value="${j}" ${player?.job===j?'selected':''}>${j}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${['GK','DEF','MIL','ATT'].map(j => `<option value="${j}" ${player?.job2===j?'selected':''}>${j}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${['normal','pepite','papyte','legende'].map(r => `<option value="${r}" ${player?.rarity===r?'selected':''}>${RARITY_LABELS[r]}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${['FR','DE','ES','PT','IT','GB','NL','BE','DK','SE','NO','PL','CH','AT','CZ','HR','RS','AL','TR','AR','BR','UY','CO','MX','CL','PE','EC','MA','DZ','TN','EG','NG','SN','CI','CM','GH','ML','GN','CD','AO','ZA','KE','JP','KR','CN','VN','TH','ID','PH','US','CA','AU','RU','UA','GR','RO','BG','IR','SA','AE','IN','PK','BD']
                .map(c => `<option value="${c}" ${(player?.country_code||'FR')===c?'selected':''}>${c}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${clubOpts}</select>
          </div>
          <div class="form-group">
            <label>Prix vente (cr.)</label>
            <input id="pm-price" type="number" min="0" value="${player?.sell_price||0}">
          </div>
        </div>

        <!-- Notes -->
        <div style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (0–20)</div>
          <div class="pm-grid4" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
            ${[['GK','pm-g','note_g'],['DEF','pm-d','note_d'],['MIL','pm-m','note_m'],['ATT','pm-a','note_a']].map(([lbl,id,field]) => `
              <div class="form-group" style="text-align:center">
                <label style="color:${JOB_COLORS[lbl]};font-weight:700">${lbl}</label>
                <input id="${id}" type="number" min="0" max="20" value="${player?.[field]??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
              </div>`).join('')}
          </div>
          <div id="pm-minmax" style="display:${['pepite','papyte'].includes(player?.rarity)?'grid':'none'};grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
            <div class="form-group">
              <label>Note min</label>
              <input id="pm-nmin" type="number" min="0" max="20" value="${player?.note_min||''}">
            </div>
            <div class="form-group">
              <label>Note max</label>
              <input id="pm-nmax" type="number" min="0" max="20" value="${player?.note_max||''}">
            </div>
          </div>
        </div>

        <!-- Physique : choix du dossier puis de la face -->
        <div style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div class="form-group">
              <label>Continent</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${folderOpts}
              </select>
            </div>
            <div class="form-group">
              <label>Visage</label>
              <select id="pm-face">
                <option value="">— Choisir un visage —</option>
              </select>
            </div>
          </div>
          <!-- Aperçu grille de visages -->
          <div id="faces-grid" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;max-height:200px;overflow-y:auto"></div>
        </div>

        <div id="pm-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
        <div style="position:sticky;bottom:0;background:#fff;padding:8px 0 4px;margin-top:4px">
        <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
          ${isEdit ? '💾 Enregistrer' : '✅ Créer le joueur'}
        </button>
        </div>
      </div>
    </div>`
  )

  setTimeout(() => {
    // Chemin propre (Continent/fichier.png) pour les comparaisons internes
    let currentFace = player?.face || null

    function refreshCard() {
      const wrap = document.getElementById('card-preview')
      if (!wrap) return
      const fn  = document.getElementById('pm-fn')?.value || ''
      const nm  = (document.getElementById('pm-real')?.value || '').toUpperCase()  // toUpperCase pour l'affichage carte
      const job = document.getElementById('pm-job')?.value || 'ATT'
      const job2 = document.getElementById('pm-job2')?.value || null
      const rar = document.getElementById('pm-rarity')?.value || 'normal'
      const cc  = document.getElementById('pm-country')?.value || 'FR'
      const cid = document.getElementById('pm-club')?.value || null
      const clubEl = document.getElementById('pm-club')
      const clubOpt = clubEl?.options[clubEl.selectedIndex]
      const clubName = clubOpt?.text !== '— Club —' ? clubOpt?.text : null

      const ng = parseInt(document.getElementById('pm-g')?.value) || 0
      const nd = parseInt(document.getElementById('pm-d')?.value) || 0
      const nm2 = parseInt(document.getElementById('pm-m')?.value) || 0
      const na = parseInt(document.getElementById('pm-a')?.value) || 0

      // Trouver le logo du club sélectionné
      const selClub = clubs.find(c => c.id === cid)

      const p = {
        firstname: fn || 'Prénom',
        surname_real: nm || 'NOM',
        job, job2: job2 || null,
        rarity: rar,
        country_code: cc,
        club_id: cid,
        note_g: ng, note_d: nd, note_m: nm2, note_a: na,
        face: currentFace || null,
        clubs: selClub ? { encoded_name: selClub.encoded_name, logo_url: selClub.logo_url } : null,
      }
      wrap.innerHTML = renderPlayerCard(p, { width: 160 })

      // Afficher/masquer note min/max
      const mm = document.getElementById('pm-minmax')
      if (mm) mm.style.display = ['pepite','papyte'].includes(rar) ? 'grid' : 'none'
    }

    function loadFacesGrid(folder) {
      const grid = document.getElementById('faces-grid')
      const sel  = document.getElementById('pm-face')
      if (!grid || !sel) return
      const files = manifest[folder] || []
      console.log('[players] loadFacesGrid folder=', folder, 'files=', files.length, files.slice(0,5))
      if (!files.length) {
        sel.innerHTML = '<option value="">— Aucun visage disponible —</option>'
        grid.innerHTML = `<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${folder}" du bucket Supabase.</p>`
        return
      }
      const avail = files.filter(f => {
        const path = folder + '/' + f
        return path === currentFace || !usedSet.has(path)
      })

      // Mettre à jour le select
      sel.innerHTML = '<option value="">— Choisir un visage —</option>' +
        avail.map(f => {
          const path = folder + '/' + f
          return `<option value="${path}" ${currentFace === path ? 'selected' : ''}>${f}</option>`
        }).join('')

      // Grille visuelle
      grid.innerHTML = avail.map(f => {
        const path = folder + '/' + f
        const isSel = currentFace === path
        const imgUrl = getPortrait({ face: path })
        return `<div data-face="${path}" style="cursor:pointer;border:2px solid ${isSel?'#4fc3f7':'transparent'};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${imgUrl}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`
      }).join('')

      // Clic sur une face dans la grille
      grid.querySelectorAll('[data-face]').forEach(el => {
        el.addEventListener('click', () => {
          currentFace = el.dataset.face
          // Mettre à jour le select
          const s = document.getElementById('pm-face')
          if (s) s.value = currentFace
          // Mettre à jour la grille
          grid.querySelectorAll('[data-face]').forEach(e => {
            e.style.border = `2px solid ${e.dataset.face === currentFace ? '#4fc3f7' : 'transparent'}`
          })
          refreshCard()
        })
      })
    }

    // Init dossier si joueur existant
    const initFolder = player?.face ? player.face.split('/')[0] : ''
    if (initFolder && manifest[initFolder]) {
      document.getElementById('pm-folder').value = initFolder
      loadFacesGrid(initFolder)
    }

    // Changement de dossier
    document.getElementById('pm-folder')?.addEventListener('change', e => {
      loadFacesGrid(e.target.value)
    })

    // Changement de select face
    document.getElementById('pm-face')?.addEventListener('change', e => {
      currentFace = e.target.value || null
      refreshCard()
    })

    // Live preview
    const WATCH = ['pm-fn','pm-real','pm-country','pm-job','pm-job2','pm-rarity','pm-g','pm-d','pm-m','pm-a','pm-club']
    WATCH.forEach(id => {
      document.getElementById(id)?.addEventListener('input', refreshCard)
      document.getElementById(id)?.addEventListener('change', refreshCard)
    })

    document.getElementById('pm-save')?.addEventListener('click', () => savePlayer(player, isEdit, currentFace, container, helpers))
    refreshCard()
  }, 50)
}

function getFormData(face) {
  const g = id => document.getElementById(id)?.value
  return {
    firstname:       (g('pm-fn') || '').trim(),
    surname_real: (g('pm-real') || '').trim() || 'JOUEUR',
    // Champ nullable et indépendant : jamais de valeur de repli forcée.
    lastname_reel: (g('pm-lastname-reel') || '').trim() || null,
    country_code:    g('pm-country') || 'FR',
    club_id:         g('pm-club') || null,
    job:             g('pm-job') || 'ATT',
    job2:            g('pm-job2') || null,
    rarity:          g('pm-rarity') || 'normal',
    note_g:          parseInt(g('pm-g'))    || 0,
    note_d:          parseInt(g('pm-d'))    || 0,
    note_m:          parseInt(g('pm-m'))    || 0,
    note_a:          parseInt(g('pm-a'))    || 0,
    note_min:        parseInt(g('pm-nmin')) || null,
    note_max:        parseInt(g('pm-nmax')) || null,
    sell_price:      parseInt(g('pm-price')) || 0,
    face:            face || null,
    ethnie:          g('pm-folder') || null,
    is_active:       true,
  }
}

async function savePlayer(player, isEdit, face, container, helpers) {
  const { toast, closeModal } = helpers
  const errEl = document.getElementById('pm-error')
  const btn   = document.getElementById('pm-save')
  const d     = getFormData(face)

  if (!d.firstname)       { errEl.textContent = 'Le prénom est requis.';   return }
  if (!d.surname_real)    { errEl.textContent = 'Le nom est requis.';      return }

  btn.disabled = true; btn.textContent = 'Enregistrement…'

  const payload = d

  const { error } = isEdit
    ? await supabase.from('players').update({ ...payload, updated_at: new Date().toISOString() }).eq('id', player.id)
    : await supabase.from('players').insert(payload)

  if (error) {
    errEl.textContent = error.message
    btn.disabled = false
    btn.textContent = isEdit ? '💾 Enregistrer' : '✅ Créer le joueur'
    return
  }

  toast(isEdit ? 'Joueur modifié ✅' : 'Joueur créé ✅', 'success')
  closeModal()
  const filters = {
    search:    document.getElementById('search-players')?.value || '',
    job:       document.getElementById('filter-job')?.value || '',
    rarity:    document.getElementById('filter-rarity')?.value || '',
    sort:      document.getElementById('sort-players')?.value || 'job',
    clubs:     window.__playersClubFilter    ? [...window.__playersClubFilter]    : [],
    countries: window.__playersCountryFilter ? [...window.__playersCountryFilter] : [],
  }
  loadPlayers(container, helpers, filters)
}
