import { supabase } from '../../lib/supabase.js'
import { renderStadiumCard } from '../../components/special-cards.js'

const BASE = import.meta.env.BASE_URL

const COUNTRIES = [
  ['MA','Maroc'],['FR','France'],['AR','Argentine'],['PT','Portugal'],['BR','Brésil'],
  ['ES','Espagne'],['DE','Allemagne'],['GB','Angleterre'],['IT','Italie'],
  ['CM','Cameroun'],['SN','Sénégal'],['NG','Nigéria'],['DK','Danemark'],
  ['NL','Pays-Bas'],['BE','Belgique'],['CI',"Côte d'Ivoire"],['AL','Albanie'],
  ['HR','Croatie'],['RS','Serbie'],['TR','Turquie'],['MW','Malawi'],
  ['GH','Ghana'],['ZA','Afrique du Sud'],['EG','Égypte'],['US','États-Unis'],
  ['MX','Mexique'],['CO','Colombie'],['UY','Uruguay'],['CL','Chili'],
  ['JP','Japon'],['KR','Corée du Sud'],['CN','Chine'],['AU','Australie'],
  ['SW','Suisse'],['SE','Suède'],['NO','Norvège'],['PL','Pologne'],
]

export async function renderStadiums(container) {
  await load(container)
}

async function load(container) {
  const [{ data: stads }, { data: clubs }] = await Promise.all([
    supabase.from('stadium_definitions').select('*, club:clubs(encoded_name, logo_url)').order('name'),
    supabase.from('clubs').select('id, encoded_name, logo_url').order('encoded_name')
  ])

  container.innerHTML = `
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(stads||[]).map(s => stadRowHTML(s)).join('') || '<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
      </div>

      <!-- Formulaire -->
      <div id="st-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
        <h3 id="st-form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouveau stade</h3>
        <input type="hidden" id="st-id">
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          <!-- Formulaire gauche -->
          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOM DU STADE *</label>
              <input id="st-name" placeholder="Ex: Stade de France" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">CLUB AFFILIÉ (optionnel)</label>
              <select id="st-club" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">-- Aucun club (bonus pays) --</option>
                ${(clubs||[]).map(c => `<option value="${c.id}" data-logo="${c.logo_url||''}">${c.encoded_name}</option>`).join('')}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${COUNTRIES.map(([code,name])=>`<option value="${code}">${name} (${code})</option>`).join('')}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">IMAGE (icône du stade)</label>
              <input id="st-image" placeholder="logo_club.png" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
            </div>
          </div>
          <!-- Aperçu carte -->
          <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:8px">
            <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Aperçu carte</div>
            <div id="st-preview-card" style="width:140px"></div>
          </div>
        </div>
        <div style="display:flex;gap:10px;margin-top:16px">
          <button id="st-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
          <button id="st-preview-btn" class="btn btn-ghost" style="flex:1">👁️ Aperçu</button>
          <button id="st-save" class="btn btn-primary" style="flex:1">Enregistrer</button>
        </div>
      </div>
    </div>`

  document.getElementById('st-add-btn')?.addEventListener('click', () => openForm(null, clubs))
  document.getElementById('st-cancel')?.addEventListener('click', () => { document.getElementById('st-form').style.display='none' })
  document.getElementById('st-save')?.addEventListener('click', () => saveForm(container))
  document.getElementById('st-preview-btn')?.addEventListener('click', () => updatePreview())

  // Update aperçu live
  ;['st-name','st-club','st-country','st-image'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updatePreview)
    document.getElementById(id)?.addEventListener('change', updatePreview)
  })

  container.querySelectorAll('[data-edit]').forEach(btn => {
    const s = (stads||[]).find(x=>x.id===btn.dataset.edit)
    if (s) btn.addEventListener('click', () => openForm(s, clubs))
  })
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer ce stade ?')) return
      await supabase.from('stadium_definitions').delete().eq('id', btn.dataset.delete)
      load(container)
    })
  })
}

function stadRowHTML(s) {
  const logo = s.club?.logo_url
    ? `<img src="${s.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`
    : `<span style="font-size:20px">🌍</span>`
  return `
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:#4FC3F7;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${logo}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${s.name}</div>
        <div style="font-size:11px;color:#aaa">${s.club?.encoded_name || s.country_code || '—'}</div>
      </div>
      <button data-edit="${s.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${s.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`
}

function openForm(s, clubs) {
  document.getElementById('st-form').style.display = 'block'
  document.getElementById('st-form-title').textContent = s ? 'Modifier le stade' : 'Nouveau stade'
  document.getElementById('st-id').value = s?.id || ''
  document.getElementById('st-name').value = s?.name || ''
  document.getElementById('st-club').value = s?.club_id || ''
  const ctyEl = document.getElementById('st-country'); if(ctyEl) ctyEl.value = s?.country_code || ''
  document.getElementById('st-image').value = s?.image_url || ''
  document.getElementById('st-preview-card').innerHTML = ''
  updatePreview(s?.club?.logo_url, s?.club?.encoded_name)
  document.getElementById('st-form').scrollIntoView({ behavior:'smooth' })
}

function updatePreview() {
  const name    = document.getElementById('st-name')?.value || 'NOM DU STADE'
  const imgFile = document.getElementById('st-image')?.value?.trim()
  const country = document.getElementById('st-country')?.value?.trim()
  const clubSel = document.getElementById('st-club')
  const clubIdx = clubSel?.selectedIndex || 0
  const clubName = clubSel && clubIdx > 0 ? clubSel.options[clubIdx].text : ''
  const clubLogoOpt = clubSel?.options[clubIdx]?.getAttribute?.('data-logo') || ''

  // Image centrale : priorité image manuelle → logo club → drapeau pays
  let imgUrl = null
  if (imgFile) {
    imgUrl = `${BASE}icons/${imgFile}`
  } else if (clubLogoOpt) {
    imgUrl = clubLogoOpt
  } else if (country) {
    imgUrl = `https://flagsapi.com/${country.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`
  }

  const label = clubName || (country ? country : '—')
  document.getElementById('st-preview-card').innerHTML = renderStadiumCard(name, imgUrl, `${label}<br>+10 ⭐`, { width: 140 })
}

async function saveForm(container) {
  const id      = document.getElementById('st-id').value
  const name    = document.getElementById('st-name').value.trim()
  const clubId  = document.getElementById('st-club').value || null
  const country = document.getElementById('st-country').value.trim().toUpperCase() || null
  const imgUrl  = document.getElementById('st-image').value.trim() || null
  if (!name) { alert('Le nom est obligatoire'); return }
  const payload = { name, club_id: clubId, country_code: country, image_url: imgUrl }
  const { error } = id
    ? await supabase.from('stadium_definitions').update(payload).eq('id', id)
    : await supabase.from('stadium_definitions').insert(payload)
  if (error) { alert('Erreur : '+error.message); return }
  document.getElementById('st-form').style.display = 'none'
  load(container)
}
