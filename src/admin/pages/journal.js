import { supabase } from '../../lib/supabase.js'

export async function renderJournal(container) {
  await load(container)
}

async function load(container) {
  const { data: articles } = await supabase
    .from('patch_notes')
    .select('*')
    .order('published_at', { ascending: false })

  container.innerHTML = `
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(articles||[]).map(a => articleRowHTML(a)).join('') || '<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l\'instant.</div>'}
      </div>

      <!-- Formulaire -->
      <div id="article-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
        <h3 id="form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouvel article</h3>
        <input type="hidden" id="form-id">
        <div style="display:flex;flex-direction:column;gap:12px">
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">TITRE *</label>
            <input id="form-art-title" placeholder="Ex : Version 1.2 — Nouvelles formations" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">DATE DE PUBLICATION</label>
            <input id="form-art-date" type="datetime-local" style="padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">DESCRIPTION *</label>
            <textarea id="form-art-desc" rows="5" placeholder="Décris les changements apportés..." style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;resize:vertical"></textarea>
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">URL IMAGE (optionnel)</label>
            <input id="form-art-img" placeholder="https://... ou chemin relatif" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <input type="checkbox" id="form-art-pub" checked style="width:16px;height:16px">
            <label for="form-art-pub" style="font-size:13px;font-weight:600">Publié (visible des joueurs)</label>
          </div>
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="form-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
            <button id="form-save"   class="btn btn-primary" style="flex:1">Enregistrer</button>
          </div>
        </div>
      </div>
    </div>`

  document.getElementById('add-article').addEventListener('click', () => openForm(null))
  document.getElementById('form-cancel').addEventListener('click', () => {
    document.getElementById('article-form').style.display = 'none'
  })
  document.getElementById('form-save').addEventListener('click', () => saveForm(container))

  container.querySelectorAll('[data-edit]').forEach(btn => {
    const a = (articles||[]).find(x => x.id === btn.dataset.edit)
    if (a) btn.addEventListener('click', () => openForm(a))
  })
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer cet article ?')) return
      await supabase.from('patch_notes').delete().eq('id', btn.dataset.delete)
      await load(container)
    })
  })
}

function articleRowHTML(a) {
  const date = new Date(a.published_at).toLocaleDateString('fr-FR', { day:'2-digit', month:'short', year:'numeric' })
  return `
    <div style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start">
      ${a.image_url ? `<img src="${a.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">` : ''}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900;color:#1a1a1a">${a.title}</span>
          ${!a.is_published ? '<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>' : ''}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${date}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-edit="${a.id}" class="btn btn-ghost btn-sm">✏️</button>
        <button data-delete="${a.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
      </div>
    </div>`
}

function openForm(a) {
  const form = document.getElementById('article-form')
  form.style.display = 'block'
  document.getElementById('form-title').textContent = a ? 'Modifier l\'article' : 'Nouvel article'
  document.getElementById('form-id').value = a?.id || ''
  document.getElementById('form-art-title').value = a?.title || ''
  document.getElementById('form-art-desc').value  = a?.description || ''
  document.getElementById('form-art-img').value   = a?.image_url || ''
  document.getElementById('form-art-pub').checked = a ? a.is_published : true
  // Date locale pour l'input datetime-local
  const d = new Date(a?.published_at || Date.now())
  const local = new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,16)
  document.getElementById('form-art-date').value = local
  form.scrollIntoView({ behavior:'smooth' })
}

async function saveForm(container) {
  const id    = document.getElementById('form-id').value
  const title = document.getElementById('form-art-title').value.trim()
  const desc  = document.getElementById('form-art-desc').value.trim()
  const img   = document.getElementById('form-art-img').value.trim() || null
  const pub   = document.getElementById('form-art-pub').checked
  const dateV = document.getElementById('form-art-date').value

  if (!title) { alert('Le titre est obligatoire.'); return }
  if (!desc)  { alert('La description est obligatoire.'); return }

  const published_at = dateV ? new Date(dateV).toISOString() : new Date().toISOString()
  const payload = { title, description: desc, image_url: img, is_published: pub, published_at }

  let error
  if (id) {
    ({ error } = await supabase.from('patch_notes').update(payload).eq('id', id))
  } else {
    ({ error } = await supabase.from('patch_notes').insert(payload))
  }
  if (error) { alert('Erreur : ' + error.message); return }
  document.getElementById('article-form').style.display = 'none'
  await load(container)
}
