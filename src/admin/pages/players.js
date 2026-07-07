import { supabase } from '../../lib/supabase.js'
import { renderPlayerCard } from '../../components/player-card.js'

const BASE = import.meta.env.BASE_URL
const RARITY_LABELS = { normal:'Normal', pepite:'Pépite', papyte:'Papyte', legende:'Légende' }
const JOB_COLORS    = { GK:'#aaaaaa', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

// Manifeste des faces (chargé une fois)
let FACES_MANIFEST = null
async function getFacesManifest() {
  if (FACES_MANIFEST) return FACES_MANIFEST
  try {
    const r = await fetch(BASE + 'faces-manifest.json')
    FACES_MANIFEST = await r.json()
  } catch { FACES_MANIFEST = {} }
  return FACES_MANIFEST
}

function mainNote(p) {
  if (p.job === 'GK')  return p.note_g || 0
  if (p.job === 'DEF') return p.note_d || 0
  if (p.job === 'MIL') return p.note_m || 0
  return p.note_a || 0
}

export async function pagePlayers(container, helpers) {
  await loadPlayers(container, helpers)
}

async function loadPlayers(container, helpers, savedFilters = null) {
  const { toast } = helpers
  // Sauvegarder les filtres courants si non fournis
  if (!savedFilters) {
    savedFilters = {
      search: document.getElementById('search-players')?.value || '',
      job:    document.getElementById('filter-job')?.value || '',
      rarity: document.getElementById('filter-rarity')?.value || '',
      club:   document.getElementById('filter-club')?.value || '',
      country:document.getElementById('filter-country')?.value || '',
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
    return jo !== 0 ? jo : (a.surname_encoded||'').localeCompare(b.surname_encoded||'')
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
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${clubs.map(c => `<option value="${c.id}">${c.encoded_name}</option>`).join('')}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(players.map(p => p.country_code).filter(Boolean))].sort()
            .map(cc => `<option value="${cc}">${cc}</option>`).join('')}
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

  // Restaurer les filtres sauvegardés
  if (savedFilters) {
    const sf = savedFilters
    const el = (id) => document.getElementById(id)
    if (sf.search  && el('search-players')) el('search-players').value = sf.search
    if (sf.job     && el('filter-job'))     el('filter-job').value     = sf.job
    if (sf.rarity  && el('filter-rarity'))  el('filter-rarity').value  = sf.rarity
    if (sf.club    && el('filter-club'))    el('filter-club').value    = sf.club
    if (sf.country && el('filter-country')) el('filter-country').value = sf.country
  }

  // Restaurer les filtres sauvegardés
  if (savedFilters) {
    const sf = savedFilters
    const el = (id) => document.getElementById(id)
    if (sf.search  && el('search-players')) el('search-players').value = sf.search
    if (sf.job     && el('filter-job'))     el('filter-job').value     = sf.job
    if (sf.rarity  && el('filter-rarity'))  el('filter-rarity').value  = sf.rarity
    if (sf.club    && el('filter-club'))    el('filter-club').value    = sf.club
    if (sf.country && el('filter-country')) el('filter-country').value = sf.country
  }

  function filtered() {
    const q       = document.getElementById('search-players').value.toLowerCase()
    const job     = document.getElementById('filter-job').value
    const rar     = document.getElementById('filter-rarity').value
    const club    = document.getElementById('filter-club').value
    const country = document.getElementById('filter-country').value
    return players.filter(p =>
      (!q       || `${p.firstname} ${p.surname_encoded}`.toLowerCase().includes(q)) &&
      (!job     || p.job === job) &&
      (!rar     || p.rarity === rar) &&
      (!club    || p.club_id === club) &&
      (!country || p.country_code === country)
    )
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
  document.getElementById('filter-club').addEventListener('change', renderList)
  document.getElementById('filter-country').addEventListener('change', renderList)
  document.getElementById('bulk-cancel-btn')?.addEventListener('click', () => { selected.clear(); updateBulkBar(); renderList() })
  document.getElementById('bulk-delete-btn')?.addEventListener('click', async () => {
    if (!selected.size || !confirm(`Supprimer ${selected.size} joueur(s) ?`)) return
    const ids = [...selected]
    const { error } = await supabase.from('players').delete().in('id', ids)
    if (error) { toast(error.message, 'error'); return }
    toast(`${ids.length} joueur(s) supprimé(s) ✅`, 'success')
    selected.clear()
    const filters = {
    search: document.getElementById('search-players')?.value || '',
    job:    document.getElementById('filter-job')?.value || '',
    rarity: document.getElementById('filter-rarity')?.value || '',
    club:   document.getElementById('filter-club')?.value || '',
    country:document.getElementById('filter-country')?.value || '',
  }
  loadPlayers(container, helpers, filters)
  })
  document.getElementById('add-player-btn').addEventListener('click', () => openPlayerModal(null, clubs, container, helpers))
}

// ── Modal Card Builder ────────────────────────────────────
async function openPlayerModal(player, clubs, container, helpers) {
  const { toast, openModal, closeModal } = helpers
  const isEdit = !!player
  const manifest = await getFacesManifest()

  // Faces déjà utilisées
  const { data: usedFaces } = await supabase.from('players').select('face').not('face', 'is', null)
  const usedSet = new Set((usedFaces || []).map(r => r.face ? r.face.replace('public/faces/', '') : null).filter(Boolean))
  if (player?.face) usedSet.delete(player.face) // permettre de réutiliser la face actuelle

  const clubOpts = `<option value="">— Club —</option>` +
    clubs.map(c => `<option value="${c.id}" ${player?.club_id === c.id ? 'selected' : ''}>${c.encoded_name}</option>`).join('')

  const folderOpts = Object.keys(manifest).map(f =>
    `<option value="${f}" ${(player?.ethnie === f || (!player?.ethnie && player?.face?.startsWith(f))) ? 'selected' : ''}>${f}</option>`
  ).join('')

  openModal(
    isEdit ? `✏️ ${player.firstname} ${player.surname_encoded}` : '➕ Nouveau joueur',
    `<div style="display:flex;gap:20px;align-items:flex-start">

      <!-- Colonne gauche : aperçu carte -->
      <div style="flex-shrink:0;position:sticky;top:0">
        <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center">Aperçu</div>
        <div id="card-preview" style="min-width:160px"></div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div style="flex:1;min-width:300px;display:flex;flex-direction:column;gap:12px">

        <!-- Identité -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Prénom *</label>
            <input id="pm-fn" value="${player?.firstname||''}" placeholder="Lucas">
          </div>
          <div class="form-group">
            <label>Nom</label>
            <input id="pm-real" value="${player?.surname_real||''}" placeholder="Silva">
          </div>
        </div>

        <!-- Poste + Rareté + Pays -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
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
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
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
              <label>Ethnie</label>
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
    // Chemin court (sans 'public/faces/') pour les comparaisons internes
    let currentFace = player?.face ? player.face.replace('public/faces/', '') : null

    function refreshCard() {
      const wrap = document.getElementById('card-preview')
      if (!wrap) return
      const fn  = document.getElementById('pm-fn')?.value || ''
      const nm  = (document.getElementById('pm-real')?.value || '').toUpperCase()
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
        surname_encoded: nm || 'NOM',
        job, job2: job2 || null,
        rarity: rar,
        country_code: cc,
        club_id: cid,
        note_g: ng, note_d: nd, note_m: nm2, note_a: na,
        face: currentFace ? 'faces/' + currentFace : null,
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
        return `<div data-face="${path}" style="cursor:pointer;border:2px solid ${isSel?'#4fc3f7':'transparent'};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${BASE}faces/${path}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
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
    const initFolder = player?.ethnie || (player?.face ? player.face.replace('public/faces/', '').split('/')[0] : '')
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
    surname_real:    (g('pm-real') || '').trim(),
    surname_encoded: (g('pm-real') || '').trim().toUpperCase(),
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
    face:            face ? 'public/faces/' + face : null,
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

  const { surname_real, ...payload } = d

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
    search: document.getElementById('search-players')?.value || '',
    job:    document.getElementById('filter-job')?.value || '',
    rarity: document.getElementById('filter-rarity')?.value || '',
    club:   document.getElementById('filter-club')?.value || '',
    country:document.getElementById('filter-country')?.value || '',
  }
  loadPlayers(container, helpers, filters)
}
