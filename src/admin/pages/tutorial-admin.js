import { supabase } from '../../lib/supabase.js'

export async function renderTutorialAdmin(container) {
  await load(container)
}

async function load(container) {
  const { data: steps } = await supabase
    .from('tutorial_steps')
    .select('*')
    .order('step_order')

  container.innerHTML = `
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <div>
          <h2 style="font-size:20px;font-weight:900">🎓 Tutoriel — Étapes</h2>
          <div style="font-size:12px;color:#888;margin-top:2px">Gérez les slides du tutoriel affiché aux nouveaux joueurs</div>
        </div>
        <div style="display:flex;gap:8px">
          <button id="ts-reset" class="btn btn-ghost btn-sm" style="color:#7a28b8" title="Réinitialiser tutorial_done pour tous les joueurs">🔄 Reset tutos</button>
          <button id="ts-add" class="btn btn-primary">+ Ajouter</button>
        </div>
      </div>

      <div id="ts-list" style="display:flex;flex-direction:column;gap:10px">
        ${(steps||[]).length === 0 ? `
          <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
            Aucune étape. Clique sur "+ Ajouter" pour commencer.
          </div>` :
          (steps||[]).map(s => stepRowHTML(s)).join('')
        }
      </div>

      <!-- Formulaire -->
      <div id="ts-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
        <h3 id="ts-form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouvelle étape</h3>
        <input type="hidden" id="ts-id">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
          <div>
            <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">EMOJI *</label>
            <input id="ts-emoji" placeholder="⚽" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:22px;text-align:center">
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">COULEUR ACCENT</label>
            <div style="display:flex;gap:8px;align-items:center">
              <input type="color" id="ts-color" value="#1A6B3C" style="width:48px;height:38px;border:none;border-radius:6px;cursor:pointer">
              <input id="ts-color-hex" value="#1A6B3C" placeholder="#1A6B3C" maxlength="7"
                style="flex:1;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;font-family:monospace">
            </div>
          </div>
        </div>
        <div style="margin-bottom:12px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">TITRE *</label>
          <input id="ts-title" placeholder="Ex: Bienvenue dans Manager Wars !" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div style="margin-bottom:12px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">ORDRE (position dans le tutoriel)</label>
          <input id="ts-order" type="number" min="0" value="0" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">CONTENU HTML *</label>
          <textarea id="ts-content" rows="7" placeholder="&lt;p&gt;Texte de l'étape…&lt;/p&gt;"
            style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;font-family:monospace;resize:vertical"></textarea>
          <div style="font-size:11px;color:#aaa;margin-top:4px">HTML supporté : &lt;p&gt; &lt;ul&gt; &lt;ol&gt; &lt;li&gt; &lt;strong&gt; &lt;em&gt; &lt;span&gt;</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
          <input type="checkbox" id="ts-active" checked style="width:16px;height:16px">
          <label for="ts-active" style="font-size:13px;font-weight:600">Visible (activée)</label>
        </div>
        <!-- Aperçu -->
        <div id="ts-preview-area" style="margin-bottom:16px"></div>
        <div style="display:flex;gap:10px">
          <button id="ts-preview-btn" class="btn btn-ghost" style="flex:1">👁️ Aperçu</button>
          <button id="ts-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
          <button id="ts-save" class="btn btn-primary" style="flex:1">Enregistrer</button>
        </div>
      </div>
    </div>`

  document.getElementById('ts-add')?.addEventListener('click', () => openForm(null, steps?.length || 0))
  document.getElementById('ts-reset')?.addEventListener('click', async () => {
    if (!confirm('Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion.')) return
    const { error } = await supabase.from('users').update({ tutorial_done: false }).neq('id', '00000000-0000-0000-0000-000000000000')
    if (error) alert('Erreur : ' + error.message)
    else alert('✅ Tutorial_done réinitialisé pour tous les joueurs.')
  })
  document.getElementById('ts-cancel')?.addEventListener('click', closeForm)
  document.getElementById('ts-save')?.addEventListener('click', () => saveForm(container))
  document.getElementById('ts-preview-btn')?.addEventListener('click', previewStep)

  // Sync color picker ↔ hex input
  document.getElementById('ts-color')?.addEventListener('input', e => {
    const hex = document.getElementById('ts-color-hex')
    if (hex) hex.value = e.target.value
  })
  document.getElementById('ts-color-hex')?.addEventListener('input', e => {
    const val = e.target.value
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      const picker = document.getElementById('ts-color')
      if (picker) picker.value = val
    }
  })

  container.querySelectorAll('[data-edit]').forEach(btn => {
    const s = (steps||[]).find(x => x.id === btn.dataset.edit)
    if (s) btn.addEventListener('click', () => openForm(s))
  })
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer cette étape ?')) return
      await supabase.from('tutorial_steps').delete().eq('id', btn.dataset.delete)
      load(container)
    })
  })
  container.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const s = (steps||[]).find(x => x.id === btn.dataset.toggle)
      if (!s) return
      await supabase.from('tutorial_steps').update({ is_active: !s.is_active }).eq('id', s.id)
      load(container)
    })
  })
  container.querySelectorAll('[data-up]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const list = steps || []
      const idx = list.findIndex(x => x.id === btn.dataset.up)
      if (idx <= 0) return
      await Promise.all([
        supabase.from('tutorial_steps').update({ step_order: list[idx-1].step_order }).eq('id', list[idx].id),
        supabase.from('tutorial_steps').update({ step_order: list[idx].step_order }).eq('id', list[idx-1].id),
      ])
      load(container)
    })
  })
  container.querySelectorAll('[data-down]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const list = steps || []
      const idx = list.findIndex(x => x.id === btn.dataset.down)
      if (idx < 0 || idx >= list.length - 1) return
      await Promise.all([
        supabase.from('tutorial_steps').update({ step_order: list[idx+1].step_order }).eq('id', list[idx].id),
        supabase.from('tutorial_steps').update({ step_order: list[idx].step_order }).eq('id', list[idx+1].id),
      ])
      load(container)
    })
  })
}

function stepRowHTML(s) {
  return `
  <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
    <div style="font-size:28px;flex-shrink:0;width:40px;text-align:center">${s.emoji}</div>
    <div style="width:10px;height:36px;border-radius:4px;flex-shrink:0;background:${s.color}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.title}</div>
      <div style="font-size:11px;color:#aaa;margin-top:2px">Ordre : ${s.step_order} · ${s.is_active ? '🟢 Active' : '🔴 Désactivée'}</div>
    </div>
    <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end">
      <button data-up="${s.id}" class="btn btn-ghost btn-sm" title="Monter" style="padding:4px 8px">↑</button>
      <button data-down="${s.id}" class="btn btn-ghost btn-sm" title="Descendre" style="padding:4px 8px">↓</button>
      <button data-toggle="${s.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px">${s.is_active ? '🔴 Désactiver' : '🟢 Activer'}</button>
      <button data-edit="${s.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px">✏️</button>
      <button data-delete="${s.id}" class="btn btn-ghost btn-sm" style="color:#cc2222;padding:4px 8px">🗑️</button>
    </div>
  </div>`
}

function openForm(s, defaultOrder = 0) {
  document.getElementById('ts-form').style.display = 'block'
  document.getElementById('ts-form-title').textContent = s ? 'Modifier l\'étape' : 'Nouvelle étape'
  document.getElementById('ts-id').value    = s?.id || ''
  document.getElementById('ts-emoji').value  = s?.emoji || '⚽'
  document.getElementById('ts-title').value  = s?.title || ''
  document.getElementById('ts-content').value = s?.content || ''
  document.getElementById('ts-order').value  = s?.step_order ?? defaultOrder
  document.getElementById('ts-active').checked = s ? s.is_active : true
  const col = s?.color || '#1A6B3C'
  document.getElementById('ts-color').value     = col
  document.getElementById('ts-color-hex').value = col
  document.getElementById('ts-preview-area').innerHTML = ''
  document.getElementById('ts-form').scrollIntoView({ behavior: 'smooth' })
}

function closeForm() {
  document.getElementById('ts-form').style.display = 'none'
  document.getElementById('ts-preview-area').innerHTML = ''
}

function previewStep() {
  const emoji   = document.getElementById('ts-emoji').value || '⚽'
  const title   = document.getElementById('ts-title').value || 'Titre'
  const content = document.getElementById('ts-content').value || ''
  const color   = document.getElementById('ts-color-hex').value || '#1A6B3C'
  const pa = document.getElementById('ts-preview-area')
  pa.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:60%;background:${color}"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${emoji}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${title}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        <!-- Contenu -->
        <div style="padding:14px 20px 18px;font-size:13px;color:#333;line-height:1.7">${content}</div>
        <!-- Navigation -->
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${color};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`

  // Appliquer les styles listes
  pa.querySelectorAll('ul,ol').forEach(el => { el.style.paddingLeft='20px'; el.style.margin='6px 0' })
  pa.querySelectorAll('li').forEach(el => { el.style.marginBottom='4px' })
  pa.querySelectorAll('p').forEach(el => { el.style.marginBottom='8px' })
}

async function saveForm(container) {
  const id      = document.getElementById('ts-id').value
  const emoji   = document.getElementById('ts-emoji').value.trim() || '⚽'
  const title   = document.getElementById('ts-title').value.trim()
  const content = document.getElementById('ts-content').value.trim()
  const color   = document.getElementById('ts-color-hex').value.trim() || '#1A6B3C'
  const order   = parseInt(document.getElementById('ts-order').value) || 0
  const active  = document.getElementById('ts-active').checked

  if (!title || !content) { alert('Titre et contenu sont obligatoires.'); return }

  const payload = { emoji, title, content, color, step_order: order, is_active: active }
  let error
  if (id) {
    ({ error } = await supabase.from('tutorial_steps').update(payload).eq('id', id))
  } else {
    ({ error } = await supabase.from('tutorial_steps').insert(payload))
  }
  if (error) { alert('Erreur : ' + error.message); return }
  closeForm()
  load(container)
}
