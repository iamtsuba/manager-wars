import { supabase } from '../../lib/supabase.js'
import { encodeVowels } from '../../components/card.js'
import { generateKitPreviewSVG, KIT_STYLES, DEFAULT_KIT } from '../../components/avatar.js'

let clubs = []

export async function pageClubs(container, { toast, openModal, closeModal }) {
  await loadClubs(container, { toast, openModal, closeModal })
}

async function loadClubs(container, helpers) {
  const { data, error } = await supabase
    .from('clubs').select('*').order('encoded_name')
  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }
  clubs = data || []
  renderClubs(container, helpers)
}

function renderClubs(container, { toast, openModal, closeModal }) {
  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <input id="search-clubs" placeholder="🔍 Rechercher un club…" style="width:280px">
      </div>
      <button class="btn btn-primary" id="add-club-btn">+ Nouveau club</button>
    </div>

    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Tenue</th>
              <th>Nom encodé</th>
              <th>Nom réel</th>
              <th>Pays</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="clubs-tbody"></tbody>
        </table>
      </div>
    </div>
  `

  renderRows(clubs)

  document.getElementById('search-clubs').addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    renderRows(clubs.filter(c =>
      c.encoded_name.toLowerCase().includes(q) ||
      c.real_name.toLowerCase().includes(q)
    ))
  })

  document.getElementById('add-club-btn').addEventListener('click', () => {
    openClubModal(null, { toast, openModal, closeModal, reload: () => loadClubs(container, { toast, openModal, closeModal }) })
  })

  function renderRows(list) {
    document.getElementById('clubs-tbody').innerHTML = list.map(c => {
      const kit = buildKitFromClub(c)
      const miniKit = generateKitPreviewSVG(kit)
        .replace('<svg ', '<svg style="width:36px;height:42px" ')
      return `
      <tr>
        <td>
          ${c.logo_url
            ? `<img src="${c.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`
            : `<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${c.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${KIT_STYLES[c.kit_style||'uni']?.label||'Uni'}">${miniKit}</td>
        <td><b>${c.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${c.real_name}</td>
        <td><img src="https://flagsapi.com/${c.country_code}/flat/32.png" alt="${c.country_code}" style="height:18px;vertical-align:middle"> ${c.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${c.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${c.id}">🗑️</button>
        </td>
      </tr>`
    }).join('')

    document.querySelectorAll('[data-edit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const club = clubs.find(c => c.id === btn.dataset.edit)
        openClubModal(club, { toast, openModal, closeModal, reload: () => loadClubs(container, { toast, openModal, closeModal }) })
      })
    })
    document.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Supprimer ce club ?')) return
        const { error } = await supabase.from('clubs').delete().eq('id', btn.dataset.del)
        if (error) toast(error.message, 'error')
        else { toast('Club supprimé', 'success'); loadClubs(container, { toast, openModal, closeModal }) }
      })
    })
  }
}

function buildKitFromClub(c) {
  return {
    style:  c.kit_style  || DEFAULT_KIT.style,
    color1: c.kit_color1 || DEFAULT_KIT.color1,
    color2: c.kit_color2 || DEFAULT_KIT.color2,
    shorts: c.kit_shorts || DEFAULT_KIT.shorts,
    socks:  c.kit_socks  || DEFAULT_KIT.socks,
  }
}

function openClubModal(club, { toast, openModal, closeModal, reload }) {
  const isEdit = !!club
  const kit = club ? buildKitFromClub(club) : { ...DEFAULT_KIT }

  const kitStyleOptions = Object.entries(KIT_STYLES)
    .map(([k, v]) => `<option value="${k}" ${kit.style === k ? 'selected' : ''}>${v.label}</option>`).join('')

  openModal(
    isEdit ? 'Modifier le club' : 'Nouveau club',
    `<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Infos de base -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>Nom réel *</label>
          <input id="m-real" value="${club?.real_name || ''}" placeholder="Paris Saint-Germain">
        </div>
        <div>
          <label>Nom encodé *</label>
          <div style="display:flex;gap:6px">
            <input id="m-encoded" value="${club?.encoded_name || ''}" placeholder="PARIS FC" style="flex:1;text-transform:uppercase">
            <button class="btn btn-ghost btn-sm" id="auto-encode" title="Auto-encoder">↻</button>
          </div>
        </div>
        <div>
          <label>Code pays (ISO) *</label>
          <input id="m-country" value="${club?.country_code || ''}" maxlength="2" style="text-transform:uppercase;width:80px">
        </div>
        <div>
          <label>Logo (URL)</label>
          <input id="m-logo" value="${club?.logo_url || ''}" placeholder="https://...">
        </div>
      </div>

      <!-- Séparateur tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:14px">
        <h4 style="font-size:13px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:6px">
          👕 Tenue du club
          <span style="font-size:11px;color:var(--gray-600);font-weight:400">(apparaît sur les cartes joueurs)</span>
        </h4>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start">

          <!-- Contrôles -->
          <div style="display:flex;flex-direction:column;gap:10px">
            <div>
              <label>Style de maillot</label>
              <select id="m-kit-style">${kitStyleOptions}</select>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div>
                <label>Couleur 1 (principale)</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-color1" value="${kit.color1}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-color1-txt" value="${kit.color1}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Couleur 2 (secondaire)</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-color2" value="${kit.color2}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-color2-txt" value="${kit.color2}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Short</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-shorts" value="${kit.shorts}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-shorts-txt" value="${kit.shorts}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Chaussettes</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-socks" value="${kit.socks}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-socks-txt" value="${kit.socks}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
            </div>
          </div>

          <!-- Preview tenue -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
            <div id="kit-preview-wrap" style="background:#f5f5f5;border-radius:8px;padding:16px;border:1px solid var(--gray-200)">
              <!-- injecté JS -->
            </div>
            <div style="font-size:11px;color:var(--gray-600);text-align:center">Aperçu tenue</div>
          </div>
        </div>
      </div>

    </div>`,
    `<button class="btn btn-ghost" id="m-cancel">Annuler</button>
     <button class="btn btn-primary" id="m-save">${isEdit ? 'Enregistrer' : 'Créer'}</button>`
  )

  // Sync color picker ↔ text input
  function syncColor(pickerId, txtId) {
    const picker = document.getElementById(pickerId)
    const txt    = document.getElementById(txtId)
    if (!picker || !txt) return
    picker.addEventListener('input', () => { txt.value = picker.value; refreshKitPreview() })
    txt.addEventListener('input', () => {
      if (/^#[0-9a-fA-F]{6}$/.test(txt.value)) { picker.value = txt.value; refreshKitPreview() }
    })
  }
  syncColor('m-kit-color1', 'm-kit-color1-txt')
  syncColor('m-kit-color2', 'm-kit-color2-txt')
  syncColor('m-kit-shorts', 'm-kit-shorts-txt')
  syncColor('m-kit-socks',  'm-kit-socks-txt')

  document.getElementById('m-kit-style')?.addEventListener('change', refreshKitPreview)

  function getKitFromForm() {
    return {
      style:  document.getElementById('m-kit-style')?.value  || 'uni',
      color1: document.getElementById('m-kit-color1')?.value || '#1A6B3C',
      color2: document.getElementById('m-kit-color2')?.value || '#ffffff',
      shorts: document.getElementById('m-kit-shorts')?.value || '#111111',
      socks:  document.getElementById('m-kit-socks')?.value  || '#ffffff',
    }
  }

  function refreshKitPreview() {
    const wrap = document.getElementById('kit-preview-wrap')
    if (!wrap) return
    wrap.innerHTML = generateKitPreviewSVG(getKitFromForm())
  }
  refreshKitPreview()

  document.getElementById('m-cancel').addEventListener('click', closeModal)

  document.getElementById('auto-encode').addEventListener('click', () => {
    const real = document.getElementById('m-real').value
    const city = real.split(' ')[0] || real
    document.getElementById('m-encoded').value = city.toUpperCase() + ' FC'
  })
  document.getElementById('m-real').addEventListener('input', () => {
    const real = document.getElementById('m-real').value
    if (!document.getElementById('m-encoded').value) {
      const city = real.split(' ')[0] || real
      document.getElementById('m-encoded').value = city.toUpperCase() + ' FC'
    }
  })

  document.getElementById('m-save').addEventListener('click', async () => {
    const k = getKitFromForm()
    const payload = {
      real_name:    document.getElementById('m-real').value.trim(),
      encoded_name: document.getElementById('m-encoded').value.trim().toUpperCase(),
      country_code: document.getElementById('m-country').value.trim().toUpperCase(),
      logo_url:     document.getElementById('m-logo').value.trim() || null,
      kit_style:    k.style,
      kit_color1:   k.color1,
      kit_color2:   k.color2,
      kit_shorts:   k.shorts,
      kit_socks:    k.socks,
    }
    if (!payload.real_name || !payload.encoded_name || !payload.country_code) {
      toast('Remplissez tous les champs obligatoires', 'error'); return
    }
    const { error } = isEdit
      ? await supabase.from('clubs').update(payload).eq('id', club.id)
      : await supabase.from('clubs').insert(payload)
    if (error) { toast(error.message, 'error'); return }
    toast(isEdit ? 'Club modifié ✅' : 'Club créé ✅', 'success')
    closeModal(); reload()
  })
}
