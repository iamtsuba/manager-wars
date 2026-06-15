/**
 * Admin – Configuration des boosters
 * Permet de créer / modifier / supprimer les boosters disponibles dans la boutique.
 */
import { supabase } from '../../lib/supabase.js'

const CARD_TYPES = [
  { value:'player',       label:'Joueur' },
  { value:'formation',    label:'Formation' },
  { value:'game_changer', label:'Game Changer' },
  { value:'game_helper',  label:'Game Helper' },
]
const RARITIES = [
  { value:'',        label:'Toutes' },
  { value:'normal',  label:'Normal' },
  { value:'pépite',  label:'Pépite' },
  { value:'papyte',  label:'Papyte' },
  { value:'légende', label:'Légende' },
]
const PRICE_TYPES = [
  { value:'credits', label:'Crédits' },
  { value:'pub',     label:'Publicité' },
  { value:'free',    label:'Gratuit' },
]

export async function renderBoostersConfig(container) {
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>'

  const { data: boosters } = await supabase
    .from('booster_configs')
    .select('*')
    .order('sort_order')

  let selectedId = null
  let editRates   = []

  async function loadRates(boosterId) {
    const { data } = await supabase
      .from('booster_drop_rates')
      .select('*')
      .eq('booster_id', boosterId)
      .order('sort_order')
    return data || []
  }

  // ── RENDER PRINCIPAL ──────────────────────────────────────
  async function render() {
    const sel = selectedId ? (boosters||[]).find(b => b.id === selectedId) : null
    if (sel) editRates = await loadRates(sel.id)

    const totalPct = editRates.reduce((s,r) => s + Number(r.percentage||0), 0)

    container.innerHTML = `
    <div style="display:grid;grid-template-columns:300px 1fr;gap:0;height:calc(100vh - 60px)">

      <!-- LISTE -->
      <div style="border-right:1px solid #e0e0e0;overflow-y:auto;background:#fff">
        <div style="padding:12px 16px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center">
          <b style="font-size:14px">Boosters (${(boosters||[]).length})</b>
          <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:700">+ Nouveau</button>
        </div>
        ${(boosters||[]).map(b => `
        <div class="booster-row" data-id="${b.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${b.id===selectedId?'#f0f7f0':'#fff'}">
          ${b.image_url
            ? `<img src="${supabase.storage.from('assets').getPublicUrl('boosters/'+b.image_url).data.publicUrl}" style="width:36px;height:36px;object-fit:contain;border-radius:6px">`
            : `<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px">📦</div>`}
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name}</div>
            <div style="font-size:11px;color:#888">${b.price_type==='credits'?b.price_credits+' cr.':b.price_type==='pub'?'Pub':'Gratuit'} · ${b.card_count} cartes · ${b.is_active?'✅':'⛔'}</div>
          </div>
          <button class="btn-delete" data-id="${b.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:16px;padding:2px 4px">🗑️</button>
        </div>`).join('')}
      </div>

      <!-- ÉDITEUR -->
      <div style="overflow-y:auto;background:#f8f8f8;padding:0">
        ${!sel ? `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#aaa;font-size:15px">
          ← Sélectionner un booster ou créer un nouveau
        </div>` : `

        <div style="padding:20px;max-width:800px">
          <h3 style="margin:0 0 16px">${sel.name}</h3>

          <!-- Infos de base -->
          <div style="background:#fff;border-radius:10px;padding:16px;margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div style="grid-column:1/-1">
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">NOM</label>
              <input id="f-name" value="${sel.name}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>

            <div style="grid-column:1/-1">
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">IMAGE</label>
              <div style="display:flex;gap:8px;align-items:center;margin-top:4px">
                <input id="f-image-url" value="${sel.image_url||''}" placeholder="ex: booster-players.png" style="flex:1;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px">
                <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:8px 12px;cursor:pointer;font-size:12px;white-space:nowrap">🖼️ Choisir</button>
              </div>
              ${sel.image_url ? `<div style="margin-top:8px;display:flex;align-items:center;gap:8px">
                <img src="${import.meta.env.BASE_URL}icons/${sel.image_url}" style="height:48px;object-fit:contain;border-radius:6px;background:#f0f0f0;padding:4px">
                <span style="font-size:11px;color:#888">${sel.image_url}</span>
              </div>` : ''}
              <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">NOMBRE DE CARTES</label>
              <input id="f-card-count" type="number" min="1" max="10" value="${sel.card_count}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">TYPE DE PRIX</label>
              <select id="f-price-type" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
                ${PRICE_TYPES.map(t => `<option value="${t.value}" ${sel.price_type===t.value?'selected':''}>${t.label}</option>`).join('')}
              </select>
            </div>

            <div id="credits-field" style="${sel.price_type!=='credits'?'opacity:0.4;pointer-events:none':''}">
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">PRIX EN CRÉDITS</label>
              <input id="f-price-credits" type="number" min="0" value="${sel.price_credits||0}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">ACTIF</label><br>
              <input type="checkbox" id="f-active" ${sel.is_active?'checked':''} style="margin-top:8px;width:18px;height:18px;cursor:pointer">
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">ORDRE D'AFFICHAGE</label>
              <input id="f-sort" type="number" value="${sel.sort_order||0}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>
          </div>

          <!-- Taux de drop -->
          <div style="background:#fff;border-radius:10px;padding:16px;margin-bottom:16px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
              <div>
                <b style="font-size:14px">Taux de drop</b>
                <span style="margin-left:10px;font-size:12px;color:${Math.abs(totalPct-100)<0.1?'#27ae60':'#e74c3c'};font-weight:700">
                  Total : ${totalPct.toFixed(1)}% ${Math.abs(totalPct-100)<0.1?'✅':'⚠️ doit faire 100%'}
                </span>
              </div>
              <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:700">+ Ligne</button>
            </div>

            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:13px">
                <thead>
                  <tr style="background:#f5f5f5">
                    <th style="padding:8px 10px;text-align:left;font-weight:700;color:#555;border-bottom:2px solid #eee">Type</th>
                    <th style="padding:8px 10px;text-align:left;font-weight:700;color:#555;border-bottom:2px solid #eee">Rareté</th>
                    <th style="padding:8px 6px;text-align:center;font-weight:700;color:#555;border-bottom:2px solid #eee">Note min</th>
                    <th style="padding:8px 6px;text-align:center;font-weight:700;color:#555;border-bottom:2px solid #eee">Note max</th>
                    <th style="padding:8px 10px;text-align:center;font-weight:700;color:#555;border-bottom:2px solid #eee">%</th>
                    <th style="padding:8px;border-bottom:2px solid #eee"></th>
                  </tr>
                </thead>
                <tbody>
                  ${editRates.map((r,i) => `
                  <tr style="border-bottom:1px solid #f0f0f0" data-rate-idx="${i}">
                    <td style="padding:6px 10px">
                      <select class="rate-type" data-idx="${i}" style="padding:5px;border:1px solid #ddd;border-radius:4px;font-size:12px;min-width:110px">
                        ${CARD_TYPES.map(t=>`<option value="${t.value}" ${r.card_type===t.value?'selected':''}>${t.label}</option>`).join('')}
                      </select>
                    </td>
                    <td style="padding:6px 10px">
                      <select class="rate-rarity" data-idx="${i}" style="padding:5px;border:1px solid #ddd;border-radius:4px;font-size:12px;min-width:90px">
                        ${RARITIES.map(rt=>`<option value="${rt.value}" ${(r.rarity||'')===(rt.value)?'selected':''}>${rt.label}</option>`).join('')}
                      </select>
                    </td>
                    <td style="padding:6px;text-align:center">
                      <input class="rate-note-min" data-idx="${i}" type="number" min="1" max="10" value="${r.note_min||''}" placeholder="–" style="width:52px;padding:5px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px">
                    </td>
                    <td style="padding:6px;text-align:center">
                      <input class="rate-note-max" data-idx="${i}" type="number" min="1" max="10" value="${r.note_max||''}" placeholder="–" style="width:52px;padding:5px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px">
                    </td>
                    <td style="padding:6px;text-align:center">
                      <input class="rate-pct" data-idx="${i}" type="number" min="0.01" max="100" step="0.1" value="${r.percentage}" style="width:65px;padding:5px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px">
                    </td>
                    <td style="padding:6px;text-align:center">
                      <button class="btn-del-rate" data-idx="${i}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:16px;line-height:1">×</button>
                    </td>
                  </tr>`).join('')}
                </tbody>
              </table>
              ${editRates.length===0?'<div style="text-align:center;padding:20px;color:#aaa;font-size:13px">Aucun taux configuré. Cliquez + Ligne pour ajouter.</div>':''}
            </div>
          </div>

          <!-- Actions -->
          <div style="display:flex;gap:10px">
            <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:12px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
            <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:12px 20px;font-size:14px;cursor:pointer">Annuler</button>
          </div>
        </div>
        `}
      </div>
    </div>`

    bindEvents()
  }

  // ── EVENTS ───────────────────────────────────────────────
  function bindEvents() {
    // Sélection booster
    container.querySelectorAll('.booster-row').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.btn-delete')) return
        selectedId = el.dataset.id
        render()
      })
    })

    // Nouveau booster
    container.querySelector('#btn-new')?.addEventListener('click', async () => {
      const name = prompt('Nom du nouveau booster :')
      if (!name?.trim()) return
      const { data, error } = await supabase.from('booster_configs')
        .insert({ name: name.trim(), price_type:'credits', price_credits:1000, card_count:5 })
        .select().single()
      if (error) { alert(error.message); return }
      boosters.push(data)
      selectedId = data.id
      render()
    })

    // Supprimer booster
    container.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        if (!confirm('Supprimer ce booster ?')) return
        const id = btn.dataset.id
        await supabase.from('booster_configs').delete().eq('id', id)
        const idx = boosters.findIndex(b=>b.id===id)
        if (idx>-1) boosters.splice(idx,1)
        if (selectedId === id) selectedId = null
        render()
      })
    })

    // Annuler
    container.querySelector('#btn-cancel')?.addEventListener('click', () => {
      selectedId = null; render()
    })

    // Type de prix → afficher/masquer crédits
    container.querySelector('#f-price-type')?.addEventListener('change', e => {
      const cf = container.querySelector('#credits-field')
      if (cf) cf.style.cssText = e.target.value!=='credits' ? 'opacity:0.4;pointer-events:none' : ''
    })

    // Sélecteur d'icônes depuis public/icons (fichiers commençant par "booster")
    container.querySelector('#btn-pick-icon')?.addEventListener('click', async () => {
      const grid = container.querySelector('#icon-picker-grid')
      if (!grid) return
      if (grid.style.display !== 'none') { grid.style.display = 'none'; return }
      grid.innerHTML = '<div style="text-align:center;padding:10px;color:#888;font-size:12px">⏳ Chargement des icônes...</div>'
      grid.style.display = 'block'
      try {
        const res = await fetch('https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons')
        const files = await res.json()
        const boosterIcons = Array.isArray(files)
          ? files.filter(f => f.name.startsWith('booster') && /\.(png|jpg|jpeg|webp|svg)$/i.test(f.name))
          : []
        if (!boosterIcons.length) {
          grid.innerHTML = '<div style="text-align:center;padding:10px;color:#e74c3c;font-size:12px">Aucune icône booster trouvée dans public/icons/</div>'
          return
        }
        const current = container.querySelector('#f-image-url')?.value
        grid.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:8px">
          ${boosterIcons.map(f => `
            <div class="icon-pick-item" data-name="${f.name}"
              style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${f.name===current?'#1A6B3C':'#ddd'};background:${f.name===current?'#f0f7f0':'#fff'}">
              <img src="${import.meta.env.BASE_URL}icons/${f.name}" style="height:44px;width:100%;object-fit:contain">
              <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name.replace('.png','')}</div>
            </div>`).join('')}
        </div>`
        grid.querySelectorAll('.icon-pick-item').forEach(item => {
          item.addEventListener('click', () => {
            const inp = container.querySelector('#f-image-url')
            if (inp) inp.value = item.dataset.name
            grid.style.display = 'none'
          })
        })
      } catch(e) {
        grid.innerHTML = `<div style="text-align:center;padding:10px;color:#e74c3c;font-size:12px">Erreur : ${e.message}<br><small>Vérifiez votre connexion ou les permissions GitHub API</small></div>`
      }
    })

    // Ajouter ligne taux
    container.querySelector('#btn-add-rate')?.addEventListener('click', () => {
      editRates.push({ id:null, booster_id:selectedId, card_type:'player', rarity:'normal', note_min:1, note_max:10, percentage:10, sort_order:editRates.length })
      render()
    })

    // Supprimer ligne taux
    container.querySelectorAll('.btn-del-rate').forEach(btn => {
      btn.addEventListener('click', () => {
        editRates.splice(Number(btn.dataset.idx), 1)
        render()
      })
    })

    // Enregistrer
    container.querySelector('#btn-save')?.addEventListener('click', async () => {
      const sel = (boosters||[]).find(b=>b.id===selectedId); if (!sel) return

      // Lire les valeurs depuis le DOM (les inputs peuvent avoir changé)
      const ratesFromDOM = []
      container.querySelectorAll('tr[data-rate-idx]').forEach(tr => {
        const i = Number(tr.dataset.rateIdx)
        const r = editRates[i] || {}
        const type  = tr.querySelector('.rate-type')?.value  || 'player'
        const rar   = tr.querySelector('.rate-rarity')?.value || ''
        const nmin  = tr.querySelector('.rate-note-min')?.value
        const nmax  = tr.querySelector('.rate-note-max')?.value
        const pct   = tr.querySelector('.rate-pct')?.value
        ratesFromDOM.push({
          booster_id: selectedId,
          card_type:  type,
          rarity:     rar||null,
          note_min:   nmin?Number(nmin):null,
          note_max:   nmax?Number(nmax):null,
          percentage: Number(pct)||0,
          sort_order: i
        })
      })

      // Valider total %
      const total = ratesFromDOM.reduce((s,r)=>s+r.percentage,0)
      if (Math.abs(total-100) > 0.5) {
        alert(`La somme des pourcentages doit faire 100%. Actuellement : ${total.toFixed(1)}%`)
        return
      }

      // Mettre à jour booster
      const updates = {
        name:          container.querySelector('#f-name')?.value?.trim() || sel.name,
        image_url:     container.querySelector('#f-image-url')?.value?.trim() || null,
        price_type:    container.querySelector('#f-price-type')?.value,
        price_credits: Number(container.querySelector('#f-price-credits')?.value)||0,
        card_count:    Number(container.querySelector('#f-card-count')?.value)||5,
        is_active:     container.querySelector('#f-active')?.checked,
        sort_order:    Number(container.querySelector('#f-sort')?.value)||0,
      }
      const { error: e1 } = await supabase.from('booster_configs').update(updates).eq('id', selectedId)
      if (e1) { alert(e1.message); return }
      Object.assign(sel, updates)

      // Supprimer anciens taux + réinsérer
      await supabase.from('booster_drop_rates').delete().eq('booster_id', selectedId)
      if (ratesFromDOM.length) {
        const { error: e2 } = await supabase.from('booster_drop_rates').insert(ratesFromDOM)
        if (e2) { alert(e2.message); return }
      }

      editRates = ratesFromDOM
      alert('✅ Booster enregistré !')
      render()
    })
  }

  render()
}
