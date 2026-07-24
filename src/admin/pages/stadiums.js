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

export async function renderStadiums(container, helpers) {
  await load(container, helpers)
}

async function load(container, helpers) {
  const [{ data: stads }, { data: clubs }] = await Promise.all([
    supabase.from('stadium_definitions').select('*, club:clubs(encoded_name, logo_url)').order('name'),
    supabase.from('clubs').select('id, encoded_name, logo_url').order('encoded_name')
  ])

  container.innerHTML = `
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(stads||[]).length ? (stads||[]).map(s => stadCardHTML(s)).join('') : '<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`

  document.getElementById('st-add-btn')?.addEventListener('click', () => openStadiumModal(null, clubs, container, helpers))

  container.querySelectorAll('[data-edit-stadium]').forEach(el => {
    el.addEventListener('click', () => {
      const s = (stads||[]).find(x => x.id === el.dataset.editStadium)
      if (s) openStadiumModal(s, clubs, container, helpers)
    })
  })
}

function stadCardHTML(s) {
  let imgUrl = null
  if (s.image_url) imgUrl = s.image_url.startsWith('http') ? s.image_url : `${BASE}icons/${s.image_url}`
  else if (s.club?.logo_url) imgUrl = s.club.logo_url
  else if (s.country_code) imgUrl = `https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`

  const label = s.club?.encoded_name || s.country_code || '—'
  const card = renderStadiumCard(s.name, imgUrl, `${label}<br>+10 ⭐`, { width: 140 })
  return `<div data-edit-stadium="${s.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${card}
  </div>`
}

function openStadiumModal(s, clubs, container, helpers) {
  const { openModal, closeModal, toast } = helpers

  const bodyHTML = `
    <div style="display:flex;gap:20px;flex-wrap:wrap">
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">
        <div>
          <label>NOM DU STADE *</label>
          <input id="st-name" placeholder="Ex: Stade de France" value="${s?.name||''}">
        </div>
        <div>
          <label>CLUB AFFILIÉ (optionnel)</label>
          <select id="st-club">
            <option value="">-- Aucun club (bonus pays) --</option>
            ${(clubs||[]).map(c => `<option value="${c.id}" data-logo="${c.logo_url||''}" ${s?.club_id===c.id?'selected':''}>${c.encoded_name}</option>`).join('')}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${COUNTRIES.map(([code,name])=>`<option value="${code}" ${s?.country_code===code?'selected':''}>${name} (${code})</option>`).join('')}
          </select>
        </div>
        <div>
          <label>IMAGE (icône du stade)</label>
          <input id="st-image" placeholder="logo_club.png" value="${s?.image_url||''}">
        </div>
      </div>
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:8px">
        <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Aperçu carte</div>
        <div id="st-preview-card" style="width:140px"></div>
      </div>
    </div>
    ${s ? `<button id="st-delete" class="btn btn-danger btn-sm" style="margin-top:16px">🗑️ Supprimer ce stade</button>` : ''}
  `
  const footerHTML = `
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `

  openModal(s ? `Modifier : ${s.name}` : 'Nouveau stade', bodyHTML, footerHTML)

  const updatePreview = () => {
    const name    = document.getElementById('st-name')?.value || 'NOM DU STADE'
    const imgFile = document.getElementById('st-image')?.value?.trim()
    const country = document.getElementById('st-country')?.value?.trim()
    const clubSel = document.getElementById('st-club')
    const clubIdx = clubSel?.selectedIndex || 0
    const clubName = clubSel && clubIdx > 0 ? clubSel.options[clubIdx].text : ''
    const clubLogoOpt = clubSel?.options[clubIdx]?.getAttribute?.('data-logo') || ''

    let imgUrl = null
    if (imgFile) imgUrl = imgFile.startsWith('http') ? imgFile : `${BASE}icons/${imgFile}`
    else if (clubLogoOpt) imgUrl = clubLogoOpt
    else if (country) imgUrl = `https://flagsapi.com/${country.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`

    const label = clubName || (country ? country : '—')
    const preview = document.getElementById('st-preview-card')
    if (preview) preview.innerHTML = renderStadiumCard(name, imgUrl, `${label}<br>+10 ⭐`, { width: 140 })
  }
  updatePreview()
  ;['st-name','st-club','st-country','st-image'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updatePreview)
    document.getElementById(id)?.addEventListener('change', updatePreview)
  })

  document.getElementById('st-cancel')?.addEventListener('click', () => closeModal())

  document.getElementById('st-save')?.addEventListener('click', async () => {
    const name    = document.getElementById('st-name').value.trim()
    const clubId  = document.getElementById('st-club').value || null
    const country = document.getElementById('st-country').value.trim().toUpperCase() || null
    const imgUrl  = document.getElementById('st-image').value.trim() || null
    if (!name) { toast('Le nom est obligatoire', 'error'); return }
    const payload = { name, club_id: clubId, country_code: country, image_url: imgUrl }
    const { error } = s
      ? await supabase.from('stadium_definitions').update(payload).eq('id', s.id)
      : await supabase.from('stadium_definitions').insert(payload)
    if (error) { toast('Erreur : '+error.message, 'error'); return }
    toast(s ? 'Stade modifié ✅' : 'Stade créé ✅', 'success')
    closeModal()
    load(container, helpers)
  })

  document.getElementById('st-delete')?.addEventListener('click', async () => {
    if (!confirm('Supprimer ce stade ?')) return
    await supabase.from('stadium_definitions').delete().eq('id', s.id)
    toast('Stade supprimé', 'success')
    closeModal()
    load(container, helpers)
  })
}
