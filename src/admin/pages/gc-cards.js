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

export async function renderGCCards(container) {
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>'

  const { data: cards } = await supabase
    .from('gc_definitions').select('*').order('sort_order').order('created_at')

  let selectedId = null

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
  const isMobile = () => window.innerWidth < 700
  const q = id => container.querySelector(id)

  // ── Carte preview ─────────────────────────────────────────
  function cardPreview(c, size = 130) {
    if (!c) return ''
    const def = GC_TYPES.find(t => t.value === c.gc_type) || GC_TYPES[0]
    const imgUrl = c.image_url ? `${import.meta.env.BASE_URL}icons/${c.image_url}` : null
    return renderGCCard(c.name || '?', imgUrl, def.label.split(' ')[0], c.effect || '', { width: size })
  }

  // ── Liste gauche ──────────────────────────────────────────
  function renderList() {
    return `
    <div id="gc-list" style="background:#fff;${isMobile()?'':'border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;'}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(cards||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(cards||[]).map(card => {
        const def   = GC_TYPES.find(t => t.value === card.gc_type) || GC_TYPES[0]
        const color = GC_COLORS.find(cl => cl.value === card.color) || GC_COLORS[0]
        return `
        <div class="gc-row" data-id="${card.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${card.id===selectedId?'#f5f0ff':'#fff'}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${color.hex};background:${def.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${card.image_url
              ? `<img src="${import.meta.env.BASE_URL}icons/${card.image_url}" style="width:28px;height:28px;object-fit:contain">`
              : def.label.split(' ')[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${card.name}</div>
            <div style="font-size:11px;color:#888">${def.label} · ${card.is_active?'✅ Actif':'⛔ Inactif'}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${card.id}" data-active="${card.is_active}"
              style="background:${card.is_active?'#e8f8ee':'#fff0f0'};border:1px solid ${card.is_active?'#27ae60':'#e74c3c'};color:${card.is_active?'#27ae60':'#e74c3c'};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${card.is_active?'Désactiver':'Activer'}</button>
            <button class="btn-delete-gc" data-id="${card.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`
      }).join('')}
      ${!(cards||[]).length ? '<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>' : ''}
    </div>`
  }

  // ── Éditeur droit ─────────────────────────────────────────
  function renderEditor() {
    const sel = selectedId ? (cards||[]).find(c => c.id === selectedId) : null
    if (!sel) return `<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`

    const def   = GC_TYPES.find(t => t.value === sel.gc_type) || GC_TYPES[0]
    const color = GC_COLORS.find(cl => cl.value === sel.color) || GC_COLORS[0]

    return `
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${isMobile() ? `<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>` : ''}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
        ${cardPreview(sel, isMobile() ? 120 : 150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${sel.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${sel.effect||''}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${GC_TYPES.map(t => `<option value="${t.value}" ${sel.gc_type===t.value?'selected':''}>${t.label}</option>`).join('')}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${GC_COLORS.map(cl => `<option value="${cl.value}" ${sel.color===cl.value?'selected':''}>${cl.label}</option>`).join('')}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${sel.image_url||''}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${sel.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${sel.is_active?'checked':''} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${EFFECT_TYPES.map(e => `<option value="${e.value}" ${(sel.effect_type||'BOOST_STAT')===e.value?'selected':''}>${e.label}</option>`).join('')}
            </select>
          </div>
          ${(() => {
            const params = sel.effect_params || {}
            const ef = EFFECT_TYPES.find(e => e.value === (sel.effect_type||'BOOST_STAT')) || EFFECT_TYPES[0]
            return `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${ef.hasValue ? `<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${params.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>` : ''}
              ${ef.hasCount ? `<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${params.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>` : ''}
              ${ef.hasTarget ? `<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(params.target||'home')==='home'?'selected':''}>Mon équipe</option>
                  <option value="opponent" ${params.target==='opponent'?'selected':''}>Équipe adverse</option>
                </select>
              </div>` : ''}
              ${ef.hasRoles ? `<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${ROLES_LIST.map(r => `<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${r}" ${(!params.roles||params.roles.includes(r))?'checked':''}> ${r}
                  </label>`).join('')}
                </div>
              </div>` : ''}
            </div>`
          })()}
        </div>
      </div>

      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save-gc" style="flex:1;background:#7a28b8;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel-gc" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`
  }

  // ── RENDER ────────────────────────────────────────────────
  function render() {
    container.innerHTML = `
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${(!isMobile() || !selectedId) ? renderList() : ''}
      ${(!isMobile() || selectedId) ? renderEditor() : ''}
    </div>`
    bindEvents()
  }

  // ── EVENTS ────────────────────────────────────────────────
  function bindEvents() {
    // Sélection carte
    container.querySelectorAll('.gc-row').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.btn-toggle-gc,.btn-delete-gc')) return
        selectedId = el.dataset.id; render()
      })
    })

    // Retour mobile
    q('#btn-gc-back')?.addEventListener('click', () => { selectedId = null; render() })
    q('#btn-cancel-gc')?.addEventListener('click', () => { selectedId = null; render() })

    // Nouveau
    q('#btn-new-gc')?.addEventListener('click', async () => {
      const name = prompt('Nom de la carte Game Changer :')
      if (!name?.trim()) return
      const { data, error } = await supabase.from('gc_definitions')
        .insert({ name: name.trim(), gc_type: 'game_changer', color: 'purple' })
        .select().single()
      if (error) { alert(error.message); return }
      cards.push(data); selectedId = data.id; render()
    })

    // Toggle actif/inactif
    container.querySelectorAll('.btn-toggle-gc').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        const newActive = btn.dataset.active !== 'true'
        await supabase.from('gc_definitions').update({ is_active: newActive }).eq('id', btn.dataset.id)
        const c = cards.find(x => x.id === btn.dataset.id)
        if (c) c.is_active = newActive
        render()
      })
    })

    // Supprimer
    container.querySelectorAll('.btn-delete-gc').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        if (!confirm('Supprimer cette carte Game Changer ?')) return
        await supabase.from('gc_definitions').delete().eq('id', btn.dataset.id)
        const idx = cards.findIndex(x => x.id === btn.dataset.id)
        if (idx > -1) cards.splice(idx, 1)
        if (selectedId === btn.dataset.id) selectedId = null
        render()
      })
    })

    // Picker image gamechanger
    q('#btn-pick-gc-icon')?.addEventListener('click', async () => {
      const picker = q('#gc-icon-picker')
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
        const cur = q('#gc-image-url')?.value || ''
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
            const inp = q('#gc-image-url')
            if (inp) inp.value = item.dataset.name
            picker.style.display = 'none'
          })
        })
      } catch(e) {
        picker.innerHTML = `<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${e.message}</div>`
      }
    })

    // Enregistrer
    q('#btn-save-gc')?.addEventListener('click', async () => {
      const sel = cards.find(c => c.id === selectedId); if (!sel) return
      const ef = EFFECT_TYPES.find(e => e.value === (q('#gc-effect-type')?.value||'BOOST_STAT')) || EFFECT_TYPES[0]
      const roles = ef.hasRoles
        ? [...container.querySelectorAll('.gc-p-role:checked')].map(cb => cb.value)
        : null
      const effect_params = {
        ...(ef.hasValue  ? { value: Number(q('#gc-p-value')?.value)||2 } : {}),
        ...(ef.hasCount  ? { count: Number(q('#gc-p-count')?.value)||1 } : {}),
        ...(ef.hasTarget ? { target: q('#gc-p-target')?.value||'home'  } : {}),
        ...(ef.hasRoles  ? { roles: roles?.length ? roles : null }        : {}),
      }
      const updates = {
        name:          q('#gc-name')?.value?.trim()       || sel.name,
        effect:        q('#gc-effect')?.value?.trim()     || null,
        image_url:     q('#gc-image-url')?.value?.trim()  || null,
        gc_type:       q('#gc-type')?.value               || 'game_changer',
        color:         q('#gc-color')?.value              || 'purple',
        sort_order:    Number(q('#gc-sort')?.value)       || 0,
        is_active:     q('#gc-active')?.checked           ?? sel.is_active,
        effect_type:   q('#gc-effect-type')?.value        || 'BOOST_STAT',
        effect_params,
      }
      const { error } = await supabase.from('gc_definitions').update(updates).eq('id', selectedId)
      if (error) { alert(error.message); return }
      Object.assign(sel, updates)
      alert('✅ Carte enregistrée !')
      render()
    })
  }

  render()
}
