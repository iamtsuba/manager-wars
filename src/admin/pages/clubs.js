import { supabase } from '../../lib/supabase.js'
import { encodeVowels } from '../../components/card.js'
import { generateKitPreviewSVG, KIT_STYLES, DEFAULT_KIT } from '../../components/avatar.js'

// ── Physiques par pays ────────────────────────────────────
const COUNTRY_SKIN = {
  FR:'blanc', DE:'blanc', ES:'blanc', PT:'metisse', IT:'blanc', GB:'blanc',
  NL:'blanc', BE:'blanc', DK:'blanc', SE:'blanc', NO:'blanc', PL:'blanc',
  CH:'blanc', AT:'blanc', CZ:'blanc', HR:'blanc', RS:'blanc', AL:'blanc',
  TR:'metisse', AR:'blanc', BR:'metisse', UY:'blanc', CO:'metisse',
  MX:'metisse', CL:'metisse', PE:'metisse', EC:'metisse', VE:'metisse',
  MA:'metisse', DZ:'metisse', TN:'metisse', EG:'metisse', LY:'metisse',
  NG:'noir', SN:'noir', CI:'noir', CM:'noir', GH:'noir', ML:'noir',
  GN:'noir', BF:'noir', TG:'noir', BJ:'noir', GA:'noir', CG:'noir',
  CD:'noir', AO:'noir', MZ:'noir', ZA:'typ', KE:'noir', ET:'noir',
  JP:'typ', KR:'typ', CN:'typ', VN:'typ', TH:'typ', ID:'typ',
  PH:'typ', MY:'typ', SG:'typ', MM:'typ', US:'blanc', CA:'blanc',
  AU:'blanc', NZ:'blanc', RU:'blanc', UA:'blanc', GR:'metisse',
  RO:'blanc', BG:'blanc', SK:'blanc', SI:'blanc', HU:'blanc',
  IR:'metisse', IQ:'metisse', SA:'metisse', AE:'metisse', JO:'metisse',
  PS:'metisse', LB:'metisse', SY:'metisse', IL:'metisse', PK:'metisse',
  IN:'metisse', BD:'typ', LK:'metisse', NP:'typ', AF:'metisse',
}
const COUNTRY_HAIR = {
  JP:'raide', KR:'raide', CN:'raide', VN:'raide', TH:'raide', ID:'raide',
  PH:'raide', MY:'raide', SG:'raide',
  NG:'afro', SN:'afro', CI:'afro', CM:'afro', GH:'afro', ML:'afro',
  GN:'afro', BF:'afro', TG:'afro', BJ:'afro', GA:'afro', CG:'afro',
  CD:'afro', AO:'afro', MZ:'afro', KE:'afro', ET:'afro',
}
const ALL_HAIR    = ['court','mi-long','pompadour','fade','raide','afro','boucle','ondule']
const ALL_LENGTHS = ['rase','court','moyen']
const ALL_COUNTRIES = [
  'FR','DE','ES','PT','IT','GB','NL','BE','DK','SE','NO','PL','CH','AT',
  'CZ','HR','RS','AL','TR','AR','BR','UY','CO','MX','CL','PE','EC',
  'MA','DZ','TN','EG','NG','SN','CI','CM','GH','ML','GN','CD','AO','ZA','KE',
  'JP','KR','CN','VN','TH','ID','PH','US','CA','AU','RU','UA','GR',
  'RO','BG','IR','SA','AE','IN','PK','BD',
]

function skinForCountry(cc)  { return COUNTRY_SKIN[cc] || 'blanc' }
function hairForCountry(cc)  {
  const h = COUNTRY_HAIR[cc]
  if (h) return h
  const skin = skinForCountry(cc)
  if (skin === 'noir') return 'afro'
  if (skin === 'typ')  return 'raide'
  return ALL_HAIR[Math.floor(Math.random() * 4)]
}
function rand(a, b)  { return Math.floor(Math.random() * (b - a + 1)) + a }
function pick(arr)   { return arr[Math.floor(Math.random() * arr.length)] }
function randCC(exclude) {
  const pool = ALL_COUNTRIES.filter(c => c !== exclude)
  return pick(pool)
}

// ── Génération effectif ───────────────────────────────────
function generateSquad(clubId, countryCode) {
  const slots = [
    { job:'GK',  count:2 },
    { job:'DEF', count:8 },
    { job:'MIL', count:6 },
    { job:'ATT', count:4 },
  ]
  const JOB2 = { ATT:'MIL', MIL:'DEF', DEF:'MIL', GK: null }
  const FIRSTNAMES = [
    'Lucas','Mateo','Rafael','Carlos','Luis','Diego','Andre','Paulo','Marco','Stefan',
    'Ahmed','Omar','Yusuf','Mamadou','Ibrahima','Cheikh','Moussa','Kofi','Emeka','Tunde',
    'Ryota','Kenji','Hiroshi','Jae','Sung','Wei','Ming','Van','Duc','Sorn',
    'James','Ryan','Tyler','Kevin','Nathan','Liam','Noah','Ethan','Oliver','Hugo',
    'Alexis','Théo','Antoine','Kylian','Rayan','Axel','Tom','Paul','Enzo','Léo',
    'João','Gabriel','Felipe','Roberto','César','Miguel','Ivan','Luca','Federico','Sergio',
  ]
  const SURNAMES = [
    'Silva','Santos','Costa','Pereira','Oliveira','Mendes','Ferreira','Alves',
    'Diallo','Traore','Coulibaly','Bah','Konaté','Touré','Camara','Barry','Diop',
    'Müller','Schmidt','Schneider','Fischer','Weber','Richter','Bauer',
    'Nakamura','Tanaka','Suzuki','Kim','Park','Lee','Chen','Wang','Liu',
    'Johnson','Williams','Brown','Davis','Wilson','Moore','Martinez','Lopez',
    'Dubois','Martin','Bernard','Thomas','Petit','Dupont','Moreau','Laurent',
    'Garcia','Fernandez','Rodriguez','Gonzalez','Hernandez','López','Sánchez',
  ]

  const players = []
  // Mélanger l'ordre pour que les 10 premiers ne soient pas tous du même poste
  let idx = 0
  slots.forEach(({ job, count }) => {
    for (let i = 0; i < count; i++) {
      idx++
      const isNative = idx <= 10
      const cc   = isNative ? countryCode : randCC(countryCode)
      const skin = skinForCountry(cc)
      const hair = hairForCountry(cc)
      const len  = pick(ALL_LENGTHS)
      const note = rand(1, 20)
      const hasSecondary = job !== 'GK' && Math.random() > 0.4
      const noteSec = hasSecondary ? Math.max(1, note - rand(1, 4)) : null

      // Notes par poste principal + secondaire
      const base = { note_g: rand(1,8), note_d: rand(1,8), note_m: rand(1,8), note_a: rand(1,8) }
      if (job === 'GK')  { base.note_g = note }
      if (job === 'DEF') { base.note_d = note; if (noteSec) base.note_m = noteSec }
      if (job === 'MIL') { base.note_m = note; if (noteSec) base.note_d = noteSec }
      if (job === 'ATT') { base.note_a = note; if (noteSec) base.note_m = noteSec }

      players.push({
        job, job2: hasSecondary ? JOB2[job] : null,
        firstname: pick(FIRSTNAMES),
        surname_real: pick(SURNAMES),
        surname_encoded: encodeVowels(pick(SURNAMES).toUpperCase()),
        country_code: cc,
        club_id: clubId,
        ...base,
        skin, hair, hair_length: len,
        rarity: 'normal',
      })
    }
  })
  return players
}

// ── Utilitaires ───────────────────────────────────────────
function buildKitFromClub(c) {
  return {
    style:  c.kit_style  || DEFAULT_KIT.style,
    color1: c.kit_color1 || DEFAULT_KIT.color1,
    color2: c.kit_color2 || DEFAULT_KIT.color2,
    shorts: c.kit_shorts || DEFAULT_KIT.shorts,
    socks:  c.kit_socks  || DEFAULT_KIT.socks,
  }
}

let clubs = []

export async function pageClubs(container, helpers) {
  await loadClubs(container, helpers)
}

async function loadClubs(container, helpers) {
  const { data, error } = await supabase.from('clubs').select('*').order('real_name')
  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }
  clubs = data || []
  renderClubs(container, helpers)
}

function renderClubs(container, helpers) {
  const { toast, openModal, closeModal } = helpers

  container.innerHTML = `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`

  renderList(clubs)

  document.getElementById('search-clubs').addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    renderList(clubs.filter(c => c.real_name.toLowerCase().includes(q) || c.encoded_name.toLowerCase().includes(q)))
  })

  document.getElementById('add-club-btn').addEventListener('click', () => openClubModal(null, container, helpers))

  function renderList(list) {
    const el = document.getElementById('clubs-list')
    if (!list.length) { el.innerHTML = '<p style="color:var(--gray-600);padding:20px">Aucun club.</p>'; return }
    el.innerHTML = list.map(c => {
      const kit    = buildKitFromClub(c)
      const kitSVG = generateKitPreviewSVG(kit).replace('<svg ', '<svg style="width:40px;height:48px" ')
      const logo   = c.logo_url
        ? `<img src="${c.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`
        : `<div style="width:40px;height:40px;background:linear-gradient(135deg,${kit.color1},${kit.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${c.encoded_name.slice(0,3)}</div>`
      return `
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${logo}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${c.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${c.encoded_name} · ${c.country_code}</span>
            </div>
          </div>
          ${kitSVG}
          <div style="display:flex;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${c.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${c.id}">🗑️</button>
          </div>
        </div>`
    }).join('')

    el.querySelectorAll('[data-edit]').forEach(btn => {
      const club = clubs.find(c => c.id === btn.dataset.edit)
      btn.addEventListener('click', () => openClubModal(club, container, helpers))
    })
    el.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Supprimer ce club ?')) return
        const { error } = await supabase.from('clubs').delete().eq('id', btn.dataset.del)
        if (error) toast(error.message, 'error')
        else { toast('Club supprimé', 'success'); loadClubs(container, helpers) }
      })
    })
  }
}

// ── Modal ─────────────────────────────────────────────────
function openClubModal(club, container, helpers) {
  const { toast, openModal, closeModal } = helpers
  const isEdit = !!club
  const kit = club ? buildKitFromClub(club) : { ...DEFAULT_KIT }

  const kitStyleOptions = Object.entries(KIT_STYLES)
    .map(([k, v]) => `<option value="${k}" ${kit.style === k ? 'selected' : ''}>${v.label}</option>`).join('')
  const countryOptions = ALL_COUNTRIES
    .map(c => `<option value="${c}" ${(club?.country_code || 'FR') === c ? 'selected' : ''}>${c}</option>`).join('')

  openModal(
    isEdit ? `✏️ ${club.real_name}` : '➕ Nouveau club',
    `<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="form-group">
        <label>Nom du club *</label>
        <input id="m-real" value="${club?.real_name || ''}" placeholder="Paris Saint-Germain">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="form-group">
          <label>Nom encodé *</label>
          <div style="display:flex;gap:6px">
            <input id="m-encoded" value="${club?.encoded_name || ''}" placeholder="PSG" style="flex:1;text-transform:uppercase;font-family:monospace">
            <button class="btn btn-ghost btn-sm" id="auto-encode-btn" title="Auto-générer">↻</button>
          </div>
        </div>
        <div class="form-group">
          <label>Pays *</label>
          <select id="m-country" style="width:100%">
            <option value="">-- Choisir --</option>
            ${countryOptions}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Logo (URL)</label>
        <input id="m-logo" value="${club?.logo_url || ''}" placeholder="https://...">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start">
          <!-- Contrôles -->
          <div style="flex:1;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${kitStyleOptions}</select>
            </div>
            ${[
              ['Couleur principale', 'm-kit-color1', kit.color1],
              ['Couleur secondaire', 'm-kit-color2', kit.color2],
              ['Short',             'm-kit-shorts',  kit.shorts],
              ['Chaussettes',       'm-kit-socks',   kit.socks],
            ].map(([lbl, id, val]) => `
              <div class="form-group">
                <label>${lbl}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${id}" value="${val}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${id}-txt" value="${val}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join('')}
          </div>
          <!-- Aperçu -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--gray-200);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Génération auto (création uniquement) -->
      ${!isEdit ? `
      <div style="border-top:1px solid var(--gray-200);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">50% nationalité du club · notes 1–20 · physique adapté au pays</div>
      </div>` : ''}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${isEdit ? '💾 Enregistrer' : '✅ Créer le club'}
      </button>
    </div>`
  )

  // ── Init kit preview (setTimeout pour attendre le DOM de la modal) ──
  setTimeout(() => {
    refreshKit()

    // Sync color pickers ↔ text inputs
    ;['m-kit-color1','m-kit-color2','m-kit-shorts','m-kit-socks'].forEach(id => {
      const picker = document.getElementById(id)
      const txt    = document.getElementById(id + '-txt')
      if (!picker || !txt) return
      picker.addEventListener('input', () => { txt.value = picker.value; refreshKit() })
      txt.addEventListener('input', () => {
        const v = txt.value.trim()
        if (/^#[0-9a-fA-F]{6}$/.test(v)) { picker.value = v; refreshKit() }
      })
      txt.addEventListener('change', () => {
        let v = txt.value.trim()
        if (!v.startsWith('#')) v = '#' + v
        if (/^#[0-9a-fA-F]{6}$/.test(v)) { picker.value = v; txt.value = v; refreshKit() }
      })
    })
    document.getElementById('m-kit-style')?.addEventListener('change', refreshKit)

    // Auto-encode
    const realInput    = document.getElementById('m-real')
    const encodedInput = document.getElementById('m-encoded')
    function autoEncode() {
      if (!realInput || !encodedInput || encodedInput.value) return
      const words = realInput.value.trim().split(/\s+/)
      const abbr  = words.length === 1
        ? words[0].toUpperCase().slice(0, 6)
        : words.filter(w => w.length > 2).map(w => w[0].toUpperCase()).join('') || words[0].toUpperCase().slice(0, 4)
      encodedInput.value = abbr
    }
    realInput?.addEventListener('input', autoEncode)
    document.getElementById('auto-encode-btn')?.addEventListener('click', () => {
      if (encodedInput) encodedInput.value = ''
      autoEncode()
    })

    // Save
    document.getElementById('m-save')?.addEventListener('click', () => saveClub(club, isEdit, container, helpers))
  }, 50)
}

function getKit() {
  return {
    style:  document.getElementById('m-kit-style')?.value  || 'uni',
    color1: document.getElementById('m-kit-color1')?.value || '#1A6B3C',
    color2: document.getElementById('m-kit-color2')?.value || '#ffffff',
    shorts: document.getElementById('m-kit-shorts')?.value || '#111111',
    socks:  document.getElementById('m-kit-socks')?.value  || '#ffffff',
  }
}

function refreshKit() {
  const wrap = document.getElementById('kit-preview-wrap')
  if (!wrap) return
  wrap.innerHTML = generateKitPreviewSVG(getKit())
}

// ── Sauvegarde ────────────────────────────────────────────
async function saveClub(club, isEdit, container, helpers) {
  const { toast, closeModal } = helpers
  const errEl = document.getElementById('m-error')
  const btn   = document.getElementById('m-save')

  const realName    = document.getElementById('m-real')?.value.trim()
  const encodedName = document.getElementById('m-encoded')?.value.trim().toUpperCase()
  const countryCode = document.getElementById('m-country')?.value.trim().toUpperCase()
  const logoUrl     = document.getElementById('m-logo')?.value.trim() || null
  const genStadium  = document.getElementById('m-gen-stadium')?.checked ?? false
  const genSquad    = document.getElementById('m-gen-squad')?.checked   ?? false
  const k = getKit()

  if (!realName)    { errEl.textContent = 'Le nom du club est requis.';  return }
  if (!encodedName) { errEl.textContent = 'Le nom encodé est requis.';   return }
  if (!countryCode) { errEl.textContent = 'Le pays est requis.';         return }

  btn.disabled = true; btn.textContent = 'Enregistrement…'

  const payload = {
    real_name: realName, encoded_name: encodedName,
    country_code: countryCode, logo_url: logoUrl,
    kit_style: k.style, kit_color1: k.color1, kit_color2: k.color2,
    kit_shorts: k.shorts, kit_socks: k.socks,
  }

  let clubId = club?.id

  if (isEdit) {
    const { error } = await supabase.from('clubs').update(payload).eq('id', clubId)
    if (error) { errEl.textContent = error.message; btn.disabled = false; btn.textContent = '💾 Enregistrer'; return }
  } else {
    const { data: newClub, error } = await supabase.from('clubs').insert(payload).select().single()
    if (error) { errEl.textContent = error.message; btn.disabled = false; btn.textContent = '✅ Créer le club'; return }
    clubId = newClub.id

    // Carte Stade
    if (genStadium) {
      btn.textContent = '🏟️ Création du stade…'
      const { data: stadDef, error: eSD } = await supabase
        .from('stadium_definitions')
        .insert({ name: `Stade de ${realName}`, club_id: clubId, country_code: countryCode })
        .select().single()
      if (eSD) console.warn('[Stadium] Erreur def stade:', eSD.message)
      else if (stadDef) {
        await supabase.from('cards').insert({ card_type: 'stadium', stadium_id: stadDef.id })
      }
    }

    // Génération effectif
    if (genSquad) {
      btn.textContent = '⚽ Génération des joueurs…'
      const squad = generateSquad(clubId, countryCode)
      for (const p of squad) {
        const { data: newPlayer, error: eP } = await supabase.from('players').insert(p).select().single()
        if (eP) { console.warn('[GenSquad] Erreur joueur:', eP.message); continue }
        await supabase.from('cards').insert({ card_type: 'player', player_id: newPlayer.id })
      }
    }
  }

  toast(isEdit ? 'Club modifié ✅' : 'Club créé ✅', 'success')
  closeModal()
  loadClubs(container, helpers)
}
