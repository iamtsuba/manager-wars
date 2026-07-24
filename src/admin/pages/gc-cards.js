import { supabase } from '../../lib/supabase.js'
import { renderGCCard } from '../../components/special-cards.js'

const GC_TYPES = [
  { value: 'game_changer',       label: '⚡ Game Changer',       border: '#7a28b8', bg: 'linear-gradient(135deg,#4a0080,#7a28b8)' },
  { value: 'ultra_game_changer', label: '💎 Ultra Game Changer', border: '#00bcd4', bg: 'linear-gradient(135deg,#006080,#00bcd4)' },
]
const GC_COLORS = [
  { value: 'purple',     label: 'Violet',     hex: '#7a28b8' },
  { value: 'light_blue', label: 'Bleu clair', hex: '#00bcd4' },
]
const EFFECT_TYPES = [
  { value:'BOOST_STAT',    label:'⚡ Boost stats (+N)',            hasValue:true,  hasTarget:true, hasCount:true, hasRoles:true  },
  { value:'DEBUFF_STAT',   label:'💀 Debuff stats (-N)',           hasValue:true,  hasTarget:true, hasCount:true, hasRoles:true  },
  { value:'GRAY_PLAYER',   label:'❄️ Griser un joueur',            hasValue:false, hasTarget:true, hasCount:true, hasRoles:true  },
  { value:'REVIVE_PLAYER', label:'💫 Ressusciter un joueur',       hasValue:false, hasTarget:false,hasCount:true, hasRoles:false },
  { value:'REMOVE_GOAL',   label:'🚫 Retirer un but adverse',      hasValue:false, hasTarget:false,hasCount:false,hasRoles:false },
  { value:'ADD_GOAL_DRAW', label:'⚽ +1 but si duel nul',          hasValue:false, hasTarget:false,hasCount:false,hasRoles:false },
  { value:'ADD_SUB',       label:'🔄 Ajouter un remplacement',     hasValue:false, hasTarget:false,hasCount:true, hasRoles:false },
  { value:'CUSTOM',        label:'🛠️ Effet custom (hardcodé)',     hasValue:false, hasTarget:false,hasCount:false,hasRoles:false },
]
const ROLES_LIST = ['GK','DEF','MIL','ATT']

export async function renderGCCards(container, helpers) {
  await load(container, helpers)
}

async function load(container, helpers) {
  const { data: cards } = await supabase
    .from('gc_definitions').select('*').order('sort_order').order('created_at')

  container.innerHTML = `
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(cards||[]).length ? (cards||[]).map(c => gcCardHTML(c)).join('') : '<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`

  document.getElementById('gc-add-btn')?.addEventListener('click', () => openGCModal(null, container, helpers))

  container.querySelectorAll('[data-edit-gc]').forEach(el => {
    el.addEventListener('click', () => {
      const c = (cards||[]).find(x => x.id === el.dataset.editGc)
      if (c) openGCModal(c, container, helpers)
    })
  })
  container.querySelectorAll('.btn-del-gc').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation()
      if (!confirm('Supprimer cette carte Game Changer ?')) return
      await supabase.from('gc_definitions').delete().eq('id', btn.dataset.del)
      load(container, helpers)
    })
  })
}

function gcCardHTML(c) {
  const def = GC_TYPES.find(t => t.value === c.gc_type) || GC_TYPES[0]
  const imgUrl = c.image_url ? `${import.meta.env.BASE_URL}icons/${c.image_url}` : null
  const card = renderGCCard(c.name || '?', imgUrl, def.label.split(' ')[0], c.effect || '', { width: 130 })
  return `<div data-edit-gc="${c.id}" style="position:relative;cursor:pointer">
    ${card}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${c.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${!c.is_active ? `<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>` : ''}
  </div>`
}

function openGCModal(c, container, helpers) {
  const { openModal, closeModal, toast } = helpers
  const isNew = !c
  const sel = c || { name:'', gc_type:'game_changer', color:'purple', effect:'', image_url:'', sort_order:0, is_active:true, effect_type:'BOOST_STAT', effect_params:{} }

  const paramsHTML = (() => {
    const params = sel.effect_params || {}
    const ef = EFFECT_TYPES.find(e => e.value === (sel.effect_type||'BOOST_STAT')) || EFFECT_TYPES[0]
    return `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${ef.hasValue ? `<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${params.value||2}">
      </div>` : ''}
      ${ef.hasCount ? `<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${params.count||1}">
      </div>` : ''}
      ${ef.hasTarget ? `<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(params.target||'home')==='home'?'selected':''}>Mon équipe</option>
          <option value="opponent" ${params.target==='opponent'?'selected':''}>Équipe adverse</option>
        </select>
      </div>` : ''}
      ${ef.hasRoles ? `<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${ROLES_LIST.map(r => `<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${r}" ${(!params.roles||params.roles.includes(r))?'checked':''}> ${r}
          </label>`).join('')}
        </div>
      </div>` : ''}
    </div>`
  })()

  const bodyHTML = `
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${renderGCCard(sel.name||'?', sel.image_url?`${import.meta.env.BASE_URL}icons/${sel.image_url}`:null, (GC_TYPES.find(t=>t.value===sel.gc_type)||GC_TYPES[0]).label.split(' ')[0], sel.effect||'', { width: 150 })}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${sel.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${sel.effect||''}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${GC_TYPES.map(t => `<option value="${t.value}" ${sel.gc_type===t.value?'selected':''}>${t.label}</option>`).join('')}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${GC_COLORS.map(cl => `<option value="${cl.value}" ${sel.color===cl.value?'selected':''}>${cl.label}</option>`).join('')}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${sel.image_url||''}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${sel.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${sel.is_active?'checked':''} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${EFFECT_TYPES.map(e => `<option value="${e.value}" ${(sel.effect_type||'BOOST_STAT')===e.value?'selected':''}>${e.label}</option>`).join('')}
          </select>
        </div>
        <div id="gc-params-wrap">${paramsHTML}</div>
      </div>
    </div>
  `
  const footerHTML = `
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `

  openModal(isNew ? 'Nouvelle carte Game Changer' : `Modifier : ${sel.name}`, bodyHTML, footerHTML)

  const updatePreview = () => {
    const name = document.getElementById('gc-name')?.value || '?'
    const effect = document.getElementById('gc-effect')?.value || ''
    const type = document.getElementById('gc-type')?.value || 'game_changer'
    const img = document.getElementById('gc-image-url')?.value?.trim()
    const def = GC_TYPES.find(t => t.value === type) || GC_TYPES[0]
    const prev = document.getElementById('gc-modal-preview')
    if (prev) prev.innerHTML = renderGCCard(name, img ? `${import.meta.env.BASE_URL}icons/${img}` : null, def.label.split(' ')[0], effect, { width: 150 })
  }
  ;['gc-name','gc-effect','gc-type','gc-image-url'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updatePreview)
    document.getElementById(id)?.addEventListener('change', updatePreview)
  })

  // Rebuild effect-params section when effect type changes
  document.getElementById('gc-effect-type')?.addEventListener('change', () => {
    const efType = document.getElementById('gc-effect-type').value
    const ef = EFFECT_TYPES.find(e => e.value === efType) || EFFECT_TYPES[0]
    const wrap = document.getElementById('gc-params-wrap')
    wrap.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${ef.hasValue ? `<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>` : ''}
      ${ef.hasCount ? `<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>` : ''}
      ${ef.hasTarget ? `<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>` : ''}
      ${ef.hasRoles ? `<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${ROLES_LIST.map(r => `<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${r}" checked> ${r}</label>`).join('')}</div></div>` : ''}
    </div>`
  })

  document.getElementById('btn-pick-gc-icon')?.addEventListener('click', async () => {
    const picker = document.getElementById('gc-icon-picker')
    if (!picker) return
    if (picker.style.display !== 'none') { picker.style.display = 'none'; return }
    picker.innerHTML = '<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>'
    picker.style.display = 'block'
    try {
      const res   = await fetch('https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons')
      const files = await res.json()
      const icons = Array.isArray(files)
        ? files.filter(f => f.name.startsWith('gamechanger-') && /\.(png|jpg|svg|webp)$/i.test(f.name))
        : []
      if (!icons.length) {
        picker.innerHTML = '<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>'
        return
      }
      const cur = document.getElementById('gc-image-url')?.value || ''
      picker.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${icons.map(f => `
        <div class="gc-icon-item" data-name="${f.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${f.name===cur?'#7a28b8':'#ddd'};background:${f.name===cur?'#f5f0ff':'#fff'}">
          <img src="${import.meta.env.BASE_URL}icons/${f.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name.replace(/\.(png|jpg|svg|webp)$/i,'').replace('gamechanger-','')}</div>
        </div>`).join('')}
      </div>`
      picker.querySelectorAll('.gc-icon-item').forEach(item => {
        item.addEventListener('click', () => {
          const inp = document.getElementById('gc-image-url')
          if (inp) inp.value = item.dataset.name
          picker.style.display = 'none'
          updatePreview()
        })
      })
    } catch(e) {
      picker.innerHTML = `<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${e.message}</div>`
    }
  })

  document.getElementById('gc-cancel')?.addEventListener('click', () => closeModal())

  document.getElementById('gc-save')?.addEventListener('click', async () => {
    const ef = EFFECT_TYPES.find(e => e.value === (document.getElementById('gc-effect-type')?.value||'BOOST_STAT')) || EFFECT_TYPES[0]
    const roles = ef.hasRoles
      ? [...document.querySelectorAll('.gc-p-role:checked')].map(cb => cb.value)
      : null
    const effect_params = {
      ...(ef.hasValue  ? { value: Number(document.getElementById('gc-p-value')?.value)||2 } : {}),
      ...(ef.hasCount  ? { count: Number(document.getElementById('gc-p-count')?.value)||1 } : {}),
      ...(ef.hasTarget ? { target: document.getElementById('gc-p-target')?.value||'home'  } : {}),
      ...(ef.hasRoles  ? { roles: roles?.length ? roles : null }        : {}),
    }
    const payload = {
      name:          document.getElementById('gc-name')?.value?.trim()      || '',
      effect:        document.getElementById('gc-effect')?.value?.trim()    || null,
      image_url:     document.getElementById('gc-image-url')?.value?.trim() || null,
      gc_type:       document.getElementById('gc-type')?.value              || 'game_changer',
      color:         document.getElementById('gc-color')?.value             || 'purple',
      sort_order:    Number(document.getElementById('gc-sort')?.value)      || 0,
      is_active:     document.getElementById('gc-active')?.checked         ?? true,
      effect_type:   document.getElementById('gc-effect-type')?.value      || 'BOOST_STAT',
      effect_params,
    }
    if (!payload.name) { toast('Le nom est obligatoire', 'error'); return }

    const { error } = isNew
      ? await supabase.from('gc_definitions').insert(payload)
      : await supabase.from('gc_definitions').update(payload).eq('id', sel.id)
    if (error) { toast(error.message, 'error'); return }
    toast(isNew ? 'Carte créée ✅' : 'Carte modifiée ✅', 'success')
    closeModal()
    load(container, helpers)
  })
}
