import { supabase } from '../../lib/supabase.js'

const CARD_TYPES = [
  { value:'player',             label:'Joueur' },
  { value:'formation',          label:'Formation' },
  { value:'game_changer',       label:'Game Changer' },
  { value:'ultra_game_changer', label:'Ultra Game Changer' },
  { value:'game_helper',        label:'Game Helper' },
  { value:'stadium',            label:'🏟️ Stade' },
]
const RARITIES = [
  { value:'',        label:'Toutes' },
  { value:'normal',  label:'Normal' },
  { value:'pepite',  label:'Pépite' },
  { value:'papyte',  label:'Papyte' },
  { value:'legende', label:'Légende' },
]
const PRICE_TYPES = [
  { value:'credits', label:'Crédits' },
  { value:'pub',     label:'Publicité' },
  { value:'free',    label:'Gratuit' },
]

export async function renderBoostersConfig(container) {
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>'

  const { data: boosters } = await supabase
    .from('booster_configs').select('*').order('sort_order')

  let selectedId  = null
  let editRates   = []
  let prevSelId   = null   // pour ne PAS recharger DB quand on modifie en mémoire
  const isMobile  = () => window.innerWidth < 700

  // ── Chargement initial des taux (depuis DB) ──────────────
  async function maybeLoadRates() {
    if (!selectedId) { editRates = []; return }
    if (selectedId !== prevSelId) {
      const { data } = await supabase
        .from('booster_drop_rates').select('*')
        .eq('booster_id', selectedId).order('sort_order')
      editRates = data || []
      prevSelId = selectedId
    }
    // Si même booster sélectionné → garder editRates tel quel (modifs en mémoire)
  }

  // ── RENDER LISTE (gauche) ─────────────────────────────────
  function renderList() {
    return `
    <div id="booster-list" style="background:#fff;${isMobile()?'':'border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;'}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(boosters||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(boosters||[]).map(b => `
      <div class="booster-row" data-id="${b.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${b.id===selectedId?'#f0f7f0':'#fff'}">
        ${b.image_url
          ? `<img src="${import.meta.env.BASE_URL}icons/${b.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`
          : `<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>`}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name}</div>
          <div style="font-size:11px;color:#888">
            ${b.price_type==='credits'?(b.price_credits||0)+' cr.':b.price_type==='pub'?'Pub':'Gratuit'}
            · ${b.card_count||5} cartes · ${b.is_active?'✅':'⛔'}
          </div>
        </div>
        <button class="btn-delete" data-id="${b.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join('')}
      ${!(boosters||[]).length ? '<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>' : ''}
    </div>`
  }

  // ── RENDER ÉDITEUR (droite) ───────────────────────────────
  function renderEditor() {
    const sel = selectedId ? (boosters||[]).find(b => b.id === selectedId) : null
    if (!sel) return `<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`

    const totalPct = editRates.reduce((s,r) => s + Number(r.percentage||0), 0)
    const pctOk    = Math.abs(totalPct - 100) < 0.1

    return `
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${isMobile() ? `<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>` : ''}

      <h3 style="margin:0 0 14px;font-size:16px">${sel.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${sel.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${sel.image_url||''}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${sel.image_url ? `<img src="${import.meta.env.BASE_URL}icons/${sel.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">` : ''}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${PRICE_TYPES.map(t => `<option value="${t.value}" ${sel.price_type===t.value?'selected':''}>${t.label}</option>`).join('')}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${sel.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${sel.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${sel.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${sel.is_active?'checked':''} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
      </div>

      <!-- Taux de drop -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
          <div>
            <span style="font-weight:700;font-size:14px">Taux de drop</span>
            <span style="margin-left:10px;font-size:12px;color:${pctOk?'#27ae60':'#e74c3c'};font-weight:700">
              Total : ${totalPct.toFixed(1)}% ${pctOk?'✅':'⚠️'}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${editRates.length === 0
          ? '<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>'
          : editRates.map((r,i) => `
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${i}">
            <select class="rate-type" data-idx="${i}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${CARD_TYPES.map(t=>`<option value="${t.value}" ${r.card_type===t.value?'selected':''}>${t.label}</option>`).join('')}
            </select>
            <select class="rate-rarity" data-idx="${i}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${RARITIES.map(rt=>`<option value="${rt.value}" ${(r.rarity||'')===(rt.value)?'selected':''}>${rt.label}</option>`).join('')}
            </select>
            <input class="rate-note-min" data-idx="${i}" type="number" min="1" max="10" value="${r.note_min||''}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${i}" type="number" min="1" max="10" value="${r.note_max||''}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${i}" type="number" min="0.1" max="100" step="0.1" value="${r.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${i}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join('')}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`
  }

  // ── RENDER PRINCIPAL ──────────────────────────────────────
  async function render(skipDBReload = false) {
    if (!skipDBReload) await maybeLoadRates()

    const showEditor = selectedId && !isMobile()
    const showListMob  = !selectedId && isMobile()
    const showEditorMob = selectedId && isMobile()

    container.innerHTML = `
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${(!isMobile() || showListMob || !selectedId) ? renderList() : ''}
      ${(!isMobile() || showEditorMob) ? renderEditor() : ''}
    </div>`

    bindEvents()
  }

  // ── EVENTS ────────────────────────────────────────────────
  function bindEvents() {
    const q = id => container.querySelector(id)

    // Sélection booster
    container.querySelectorAll('.booster-row').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.btn-delete')) return
        selectedId = el.dataset.id
        prevSelId  = null   // forcer rechargement depuis DB
        render()
      })
    })

    // Retour (mobile)
    q('#btn-back')?.addEventListener('click', () => {
      selectedId = null; render()
    })

    // Nouveau booster
    q('#btn-new')?.addEventListener('click', async () => {
      const name = prompt('Nom du nouveau booster :')
      if (!name?.trim()) return
      const { data, error } = await supabase.from('booster_configs')
        .insert({ name:name.trim(), price_type:'credits', price_credits:1000, card_count:5 })
        .select().single()
      if (error) { alert(error.message); return }
      boosters.push(data)
      selectedId = data.id; prevSelId = null
      render()
    })

    // Supprimer booster
    container.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        if (!confirm('Supprimer ce booster ?')) return
        await supabase.from('booster_configs').delete().eq('id', btn.dataset.id)
        const idx = boosters.findIndex(b => b.id === btn.dataset.id)
        if (idx > -1) boosters.splice(idx, 1)
        if (selectedId === btn.dataset.id) { selectedId = null; prevSelId = null }
        render()
      })
    })

    // Annuler
    q('#btn-cancel')?.addEventListener('click', () => { selectedId = null; render() })

    // Prix type → afficher/masquer crédits
    q('#f-price-type')?.addEventListener('change', e => {
      const cf = q('#credits-field')
      if (cf) cf.style.opacity = e.target.value !== 'credits' ? '0.4' : '1'
    })

    // Sélecteur d'icônes GitHub
    q('#btn-pick-icon')?.addEventListener('click', async () => {
      const grid = q('#icon-picker-grid')
      if (!grid) return
      if (grid.style.display !== 'none') { grid.style.display = 'none'; return }
      grid.innerHTML = '<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>'
      grid.style.display = 'block'
      try {
        const res   = await fetch('https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons')
        const files = await res.json()
        const icons = Array.isArray(files)
          ? files.filter(f => f.name.startsWith('booster') && /\.(png|jpg|svg|webp)$/i.test(f.name))
          : []
        if (!icons.length) { grid.innerHTML = '<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>'; return }
        const cur = q('#f-image-url')?.value || ''
        grid.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${icons.map(f => `
          <div class="icon-pick-item" data-name="${f.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${f.name===cur?'#1A6B3C':'#ddd'};background:${f.name===cur?'#f0f7f0':'#fff'}">
            <img src="${import.meta.env.BASE_URL}icons/${f.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name.replace(/\.(png|jpg|svg|webp)$/i,'')}</div>
          </div>`).join('')}
        </div>`
        grid.querySelectorAll('.icon-pick-item').forEach(item => {
          item.addEventListener('click', () => {
            const inp = q('#f-image-url')
            if (inp) inp.value = item.dataset.name
            grid.style.display = 'none'
          })
        })
      } catch(e) {
        grid.innerHTML = `<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${e.message}</div>`
      }
    })

    // ═══ Sauver les valeurs DOM → editRates (avant re-render) ═══
    function saveRatesFromDOM() {
      container.querySelectorAll('[data-rate-idx]').forEach(row => {
        const i = Number(row.dataset.rateIdx)
        if (i >= 0 && i < editRates.length) {
          editRates[i].card_type  = row.querySelector('.rate-type')?.value   || 'player'
          editRates[i].rarity     = row.querySelector('.rate-rarity')?.value || null
          editRates[i].note_min   = Number(row.querySelector('.rate-note-min')?.value) || null
          editRates[i].note_max   = Number(row.querySelector('.rate-note-max')?.value) || null
          editRates[i].percentage = Number(row.querySelector('.rate-pct')?.value)      || 0
        }
      })
    }

    // ═══ + Ligne taux ═══
    q('#btn-add-rate')?.addEventListener('click', () => {
      saveRatesFromDOM()   // ← sauver DOM avant re-render
      editRates.push({
        id: null, booster_id: selectedId, card_type: 'player',
        rarity: 'normal', note_min: null, note_max: null, percentage: 10,
        sort_order: editRates.length
      })
      render(true)
    })

    // Supprimer ligne taux
    container.querySelectorAll('.btn-del-rate').forEach(btn => {
      btn.addEventListener('click', () => {
        saveRatesFromDOM()
        editRates.splice(Number(btn.dataset.idx), 1)
        render(true)
      })
    })

    // Enregistrer
    q('#btn-save')?.addEventListener('click', async () => {
      const sel = (boosters||[]).find(b => b.id === selectedId); if (!sel) return

      // Lire les taux depuis le DOM
      const ratesFromDOM = []
      container.querySelectorAll('[data-rate-idx]').forEach(tr => {
        const i = Number(tr.dataset.rateIdx)
        ratesFromDOM.push({
          booster_id: selectedId,
          card_type:  tr.querySelector('.rate-type')?.value   || 'player',
          rarity:     tr.querySelector('.rate-rarity')?.value || null,
          note_min:   Number(tr.querySelector('.rate-note-min')?.value)||null,
          note_max:   Number(tr.querySelector('.rate-note-max')?.value)||null,
          percentage: Number(tr.querySelector('.rate-pct')?.value)    || 0,
          sort_order: i
        })
        const r = ratesFromDOM[ratesFromDOM.length-1]
        if (!r.rarity) r.rarity = null
        if (!r.note_min) r.note_min = null
        if (!r.note_max) r.note_max = null
      })

      const total = ratesFromDOM.reduce((s,r) => s + r.percentage, 0)
      if (ratesFromDOM.length && Math.abs(total - 100) > 0.5) {
        alert(`La somme doit faire 100% (actuellement ${total.toFixed(1)}%)`)
        return
      }

      const updates = {
        name:          q('#f-name')?.value?.trim()             || sel.name,
        image_url:     q('#f-image-url')?.value?.trim()        || null,
        price_type:    q('#f-price-type')?.value,
        price_credits: Number(q('#f-price-credits')?.value)    || 0,
        card_count:    Number(q('#f-card-count')?.value)       || 5,
        is_active:     q('#f-active')?.checked                 ?? sel.is_active,
        sort_order:    Number(q('#f-sort')?.value)             || 0,
      }

      const { error: e1 } = await supabase.from('booster_configs').update(updates).eq('id', selectedId)
      if (e1) { alert(e1.message); return }
      Object.assign(sel, updates)

      await supabase.from('booster_drop_rates').delete().eq('booster_id', selectedId)
      if (ratesFromDOM.length) {
        const { error: e2 } = await supabase.from('booster_drop_rates').insert(ratesFromDOM)
        if (e2) { alert(e2.message); return }
      }
      editRates = ratesFromDOM
      prevSelId = selectedId   // taux en sync avec DB
      alert('✅ Booster enregistré !')
      render(true)
    })
  }

  render()
}
