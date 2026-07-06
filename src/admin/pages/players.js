import { supabase }                from '../../lib/supabase.js'
import { encodeVowels, renderCardHTML } from '../../components/card.js'

const RARITY_LABELS = { normal:'Normal', pepite:'Pépite', papyte:'Papyte', legende:'Légende' }
const RARITY_COLORS = { normal:'#aaa',   pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }
const JOB_COLORS    = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }

const ALL_COUNTRIES = [
  'FR','DE','ES','PT','IT','GB','NL','BE','DK','SE','NO','PL','CH','AT',
  'CZ','HR','RS','AL','TR','AR','BR','UY','CO','MX','CL','PE','EC',
  'MA','DZ','TN','EG','NG','SN','CI','CM','GH','ML','GN','CD','AO','ZA','KE',
  'JP','KR','CN','VN','TH','ID','PH','US','CA','AU','RU','UA','GR',
  'RO','BG','IR','SA','AE','IN','PK','BD',
]

export async function pagePlayers(container, helpers) {
  await loadPlayers(container, helpers)
}

async function loadPlayers(container, helpers) {
  const { toast } = helpers

  const [{ data: players, error }, { data: clubs }] = await Promise.all([
    supabase.from('players').select('*, clubs(id,encoded_name,logo_url,kit_color1,kit_color2)').order('surname_encoded'),
    supabase.from('clubs').select('id,encoded_name').order('encoded_name'),
  ])
  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }

  renderPage(container, players || [], clubs || [], helpers)
}

function renderPage(container, players, clubs, helpers) {
  const { toast } = helpers

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px">
      <!-- Filtres -->
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
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${players.length} joueur(s)</div>
      <!-- Liste -->
      <div id="players-list" style="display:flex;flex-direction:column;gap:6px"></div>
    </div>`

  function filtered() {
    const q   = document.getElementById('search-players').value.toLowerCase()
    const job = document.getElementById('filter-job').value
    const rar = document.getElementById('filter-rarity').value
    return players.filter(p =>
      (!q   || `${p.firstname} ${p.surname_encoded} ${p.surname_real||''}`.toLowerCase().includes(q)) &&
      (!job || p.job === job) &&
      (!rar || p.rarity === rar)
    )
  }

  function renderList() {
    const list = filtered()
    document.getElementById('count-label').textContent = `${list.length} joueur(s)`
    const el = document.getElementById('players-list')
    if (!list.length) { el.innerHTML = '<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>'; return }

    el.innerHTML = list.map(p => {
      const rarColor = RARITY_COLORS[p.rarity] || '#aaa'
      const jobColor = JOB_COLORS[p.job]       || '#aaa'
      return `
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          <!-- Note + poste -->
          <div style="flex-shrink:0;width:40px;height:40px;border-radius:10px;border:2px solid ${rarColor};
            background:${jobColor}22;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px">
            <div style="font-size:16px;font-weight:900;color:${jobColor};line-height:1">${mainNote(p)}</div>
            <div style="font-size:9px;font-weight:700;color:${jobColor}">${p.job}</div>
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
              ${p.firstname} <span style="font-family:monospace">${p.surname_encoded}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${p.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600)">${p.country_code}</span>
              ${p.clubs ? `<span style="font-size:11px;color:var(--gray-600)">· ${p.clubs.encoded_name}</span>` : ''}
              ${p.job2 ? `<span style="font-size:10px;color:#aaa;background:rgba(0,0,0,0.08);border-radius:4px;padding:1px 4px">${p.job2}</span>` : ''}
            </div>
            <div style="font-size:10px;color:${rarColor};font-weight:700;margin-top:2px">${RARITY_LABELS[p.rarity]||p.rarity}</div>
          </div>
          <!-- Notes secondaires -->
          <div style="flex-shrink:0;font-size:10px;color:var(--gray-600);text-align:right;line-height:1.6;font-family:monospace">
            <div>GK <b>${p.note_g}</b></div>
            <div>DEF <b>${p.note_d}</b></div>
            <div>MIL <b>${p.note_m}</b></div>
            <div>ATT <b>${p.note_a}</b></div>
          </div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${p.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${p.id}">🗑️</button>
          </div>
        </div>`
    }).join('')

    el.querySelectorAll('[data-edit]').forEach(btn => {
      const p = players.find(x => x.id === btn.dataset.edit)
      btn.addEventListener('click', () => openPlayerModal(p, clubs, container, helpers))
    })
    el.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
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
  document.getElementById('add-player-btn').addEventListener('click', () => openPlayerModal(null, clubs, container, helpers))
}

function mainNote(p) {
  if (p.job === 'GK')  return p.note_g
  if (p.job === 'DEF') return p.note_d
  if (p.job === 'MIL') return p.note_m
  return p.note_a
}

// ── Modal avec card-builder live ──────────────────────────
function openPlayerModal(player, clubs, container, helpers) {
  const { toast, openModal, closeModal } = helpers
  const isEdit = !!player

  const clubOpts = `<option value="">— Club —</option>` +
    clubs.map(c => `<option value="${c.id}" ${player?.club_id === c.id ? 'selected' : ''}>${c.encoded_name}</option>`).join('')
  const countryOpts = ALL_COUNTRIES
    .map(c => `<option value="${c}" ${(player?.country_code || 'FR') === c ? 'selected' : ''}>${c}</option>`).join('')

  openModal(
    isEdit ? `✏️ ${player.firstname} ${player.surname_encoded}` : '➕ Nouveau joueur',
    `<div style="display:flex;flex-direction:column;gap:12px">

      <!-- Aperçu carte -->
      <div style="display:flex;justify-content:center;margin-bottom:4px">
        <div id="card-preview" style="transform:scale(1);transform-origin:top center"></div>
      </div>

      <!-- Identité -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div class="form-group">
          <label>Prénom *</label>
          <input id="pm-fn" value="${player?.firstname||''}" placeholder="Lucas">
        </div>
        <div class="form-group">
          <label>Nom réel *</label>
          <div style="display:flex;gap:4px">
            <input id="pm-real" value="${player?.surname_real||''}" placeholder="Silva" style="flex:1">
            <button class="btn btn-ghost btn-sm" id="pm-encode-btn" title="Encoder ↻">↻</button>
          </div>
        </div>
        <div class="form-group">
          <label>Nom encodé *</label>
          <input id="pm-enc" value="${player?.surname_encoded||''}" style="font-family:monospace;text-transform:uppercase">
        </div>
        <div class="form-group">
          <label>Pays</label>
          <select id="pm-country">${countryOpts}</select>
        </div>
      </div>

      <!-- Poste + club + rareté -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div class="form-group">
          <label>Poste 1 *</label>
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
      </div>

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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (1–20)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          ${[['GK','pm-g','note_g'],['DEF','pm-d','note_d'],['MIL','pm-m','note_m'],['ATT','pm-a','note_a']].map(([lbl,id,field]) => `
            <div class="form-group" style="text-align:center">
              <label style="color:${JOB_COLORS[lbl]};font-weight:700">${lbl}</label>
              <input id="${id}" type="number" min="1" max="20" value="${player?.[field]||1}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
            </div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
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

      <!-- Physique -->
      <div style="border-top:1px solid var(--gray-200);padding-top:10px">
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Peau</label>
            <select id="pm-skin">
              ${['blanc','metisse','typ','noir'].map(s => `<option value="${s}" ${player?.skin===s?'selected':''}>${s}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Cheveux</label>
            <select id="pm-hair">
              ${['blond','marron','noir','chauve'].map(h => `<option value="${h}" ${player?.hair===h?'selected':''}>${h}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Longueur</label>
            <select id="pm-hlen">
              ${['rase','court','milong','long'].map(l => `<option value="${l}" ${player?.hair_length===l?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>

      <div id="pm-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
        ${isEdit ? '💾 Enregistrer' : '✅ Créer le joueur'}
      </button>
    </div>`
  )

  // ── Init après DOM ──────────────────────────────────────
  setTimeout(() => {
    refreshCard()

    // Live preview sur tous les champs
    const WATCH = ['pm-fn','pm-enc','pm-real','pm-country','pm-job','pm-job2','pm-rarity','pm-g','pm-d','pm-m','pm-a','pm-skin','pm-hair','pm-hlen','pm-club']
    WATCH.forEach(id => document.getElementById(id)?.addEventListener('input', refreshCard))
    WATCH.forEach(id => document.getElementById(id)?.addEventListener('change', refreshCard))

    document.getElementById('pm-encode-btn')?.addEventListener('click', () => {
      const real = document.getElementById('pm-real')?.value || ''
      document.getElementById('pm-enc').value = encodeVowels(real.toUpperCase())
      refreshCard()
    })
    document.getElementById('pm-real')?.addEventListener('input', () => {
      const enc = document.getElementById('pm-enc')
      if (!enc?.value) { enc.value = encodeVowels(document.getElementById('pm-real').value.toUpperCase()); refreshCard() }
    })

    document.getElementById('pm-save')?.addEventListener('click', () => savePlayer(player, isEdit, container, helpers))
  }, 50)
}

function getFormData() {
  const g = id => document.getElementById(id)?.value
  const clubEl  = document.getElementById('pm-club')
  const clubOpt = clubEl?.options[clubEl.selectedIndex]
  return {
    firstname:       (g('pm-fn') || '').trim(),
    surname_real:    (g('pm-real') || '').trim(),
    surname_encoded: (g('pm-enc') || '').trim().toUpperCase(),
    country_code:    g('pm-country') || 'FR',
    club_id:         g('pm-club') || null,
    club_encoded_name: clubOpt?.text !== '— Club —' ? clubOpt?.text : null,
    job:             g('pm-job') || 'ATT',
    job2:            g('pm-job2') || null,
    rarity:          g('pm-rarity') || 'normal',
    note_g:          parseInt(g('pm-g'))    || 1,
    note_d:          parseInt(g('pm-d'))    || 1,
    note_m:          parseInt(g('pm-m'))    || 1,
    note_a:          parseInt(g('pm-a'))    || 1,
    note_min:        parseInt(g('pm-nmin')) || null,
    note_max:        parseInt(g('pm-nmax')) || null,
    skin:            g('pm-skin')   || 'blanc',
    hair:            g('pm-hair')   || 'marron',
    hair_length:     g('pm-hlen')   || 'court',
    sell_price:      parseInt(g('pm-price')) || 0,
  }
}

function refreshCard() {
  const wrap = document.getElementById('card-preview')
  if (!wrap) return
  const d = getFormData()
  const playerLike = {
    ...d,
    rarity: d.rarity,
    job: d.job, job2: d.job2 || null,
    firstname: d.firstname || 'Prénom',
    surname_encoded: d.surname_encoded || 'NOM',
  }
  console.log('[CardPreview]', playerLike.job, playerLike.note_g, playerLike.note_d, playerLike.note_m, playerLike.note_a)
  wrap.innerHTML = renderCardHTML(playerLike, { size: 'md', showNotes: false })
}

async function savePlayer(player, isEdit, container, helpers) {
  const { toast, closeModal } = helpers
  const errEl = document.getElementById('pm-error')
  const btn   = document.getElementById('pm-save')
  const d     = getFormData()

  if (!d.firstname)       { errEl.textContent = 'Le prénom est requis.';      return }
  if (!d.surname_real)    { errEl.textContent = 'Le nom réel est requis.';    return }
  if (!d.surname_encoded) { errEl.textContent = 'Le nom encodé est requis.';  return }

  btn.disabled = true; btn.textContent = 'Enregistrement…'

  // Retirer club_encoded_name (pas en DB)
  const { club_encoded_name, ...payload } = d

  const { error } = isEdit
    ? await supabase.from('players').update({ ...payload, updated_at: new Date().toISOString() }).eq('id', player.id)
    : await supabase.from('players').insert(payload)

  if (error) { errEl.textContent = error.message; btn.disabled = false; btn.textContent = isEdit ? '💾 Enregistrer' : '✅ Créer le joueur'; return }

  toast(isEdit ? 'Joueur modifié ✅' : 'Joueur créé ✅', 'success')
  closeModal()
  loadPlayers(container, helpers)
}
