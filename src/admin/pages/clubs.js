import { supabase } from '../../lib/supabase.js'
import { encodeVowels } from '../../components/card.js'
import { generateKitPreviewSVG, KIT_STYLES, DEFAULT_KIT } from '../../components/avatar.js'

// ── Mapping pays → physique ───────────────────────────────
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
const ALL_HAIR = ['court','mi-long','pompadour','fade','raide','afro','boucle','ondule']
const ALL_LENGTHS = ['rase','court','moyen']
const ALL_COUNTRIES = [
  'FR','DE','ES','PT','IT','GB','NL','BE','DK','SE','NO','PL','CH','AT',
  'CZ','HR','RS','AL','TR','AR','BR','UY','CO','MX','CL','PE','EC',
  'MA','DZ','TN','EG','NG','SN','CI','CM','GH','ML','GN','CD','AO','ZA','KE',
  'JP','KR','CN','VN','TH','ID','PH','US','CA','AU','RU','UA','GR',
  'RO','BG','IR','SA','AE','IN','PK','BD',
]

function skinForCountry(cc) { return COUNTRY_SKIN[cc] || 'blanc' }
function hairForCountry(cc) {
  const h = COUNTRY_HAIR[cc]
  if (h) return h
  const skin = skinForCountry(cc)
  if (skin === 'noir') return 'afro'
  if (skin === 'typ')  return 'raide'
  return ALL_HAIR[Math.floor(Math.random() * 4)] // blanc/metisse : variété
}
function rand(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function randomCountryExcluding(cc) {
  const pool = ALL_COUNTRIES.filter(c => c !== cc)
  return pick(pool)
}

function generateSquad(clubId, countryCode) {
  const slots = [
    { job:'GK', count:2 }, { job:'DEF', count:8 },
    { job:'MIL', count:6 }, { job:'ATT', count:4 },
  ]
  const players = []
  const FIRST_NAMES = ['Lucas','Mateo','Rafael','Carlos','Luis','Diego','Andre','Paulo','Marco','Stefan',
    'Ahmed','Omar','Yusuf','Mamadou','Ibrahima','Cheikh','Moussa','Kofi','Emeka','Tunde',
    'Ryota','Kenji','Hiroshi','Jae','Sung','Wei','Ming','Van','Duc','Sorn',
    'James','Ryan','Tyler','Kevin','Nathan','Liam','Noah','Ethan','Oliver','Hugo']
  const SURNAMES = ['Silva','Santos','Costa','Pereira','Oliveira','Mendes','Ferreira','Alves',
    'Diallo','Traore','Coulibaly','Bah','Konaté','Touré','Camara','Barry','Diop',
    'Müller','Schmidt','Schneider','Fischer','Weber','Richter','Bauer',
    'Nakamura','Tanaka','Suzuki','Kim','Park','Lee','Chen','Wang','Liu',
    'Johnson','Williams','Brown','Davis','Wilson','Moore','Martinez','Lopez']

  let idx = 0
  slots.forEach(({ job, count }) => {
    for (let i = 0; i < count; i++) {
      idx++
      const isNative = idx <= 10 // 50% natifs (10/20)
      const cc = isNative ? countryCode : randomCountryExcluding(countryCode)
      const skin = skinForCountry(cc)
      const hair = hairForCountry(cc)
      const length = pick(ALL_LENGTHS)
      const note = rand(1, 20)
      const hasSecondary = Math.random() > 0.4
      const noteSec = hasSecondary ? Math.max(1, note - rand(1, 4)) : null
      const firstname = pick(FIRST_NAMES)
      const surname = pick(SURNAMES)
      players.push({
        job, job2: noteSec ? (job === 'ATT' ? 'MIL' : job === 'MIL' ? 'DEF' : job === 'DEF' ? 'MIL' : null) : null,
        firstname,
        surname_real: surname,
        surname_encoded: encodeVowels(surname.toUpperCase()),
        country_code: cc,
        club_id: clubId,
        note_g: job === 'GK' ? note  : (noteSec && job === 'DEF' ? noteSec : rand(1,10)),
        note_d: job === 'DEF' ? note : (noteSec && job === 'MIL' ? noteSec : rand(1,10)),
        note_m: job === 'MIL' ? note : (noteSec && (job==='DEF'||job==='ATT') ? noteSec : rand(1,10)),
        note_a: job === 'ATT' ? note : (noteSec && job === 'MIL' ? noteSec : rand(1,10)),
        skin, hair, hair_length: length,
        rarity: 'normal',
      })
    }
  })
  return players
}

let clubs = []

export async function pageClubs(container, { toast, openModal, closeModal }) {
  await loadClubs(container, { toast, openModal, closeModal })
}

async function loadClubs(container, helpers) {
  const { data, error } = await supabase.from('clubs').select('*').order('real_name')
  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }
  clubs = data || []
  renderClubs(container, helpers)
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

function renderClubs(container, helpers) {
  const { toast, openModal, closeModal } = helpers
  container.innerHTML = `
    <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;flex-wrap:wrap">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1;min-width:160px">
      <button class="btn btn-primary" id="add-club-btn">+ Nouveau club</button>
    </div>
    <div id="clubs-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px"></div>
  `
  renderCards(clubs)

  document.getElementById('search-clubs').addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    renderCards(clubs.filter(c => c.real_name.toLowerCase().includes(q) || c.encoded_name.toLowerCase().includes(q)))
  })

  document.getElementById('add-club-btn').addEventListener('click', () => {
    openClubModal(null, helpers)
  })

  function renderCards(list) {
    const grid = document.getElementById('clubs-grid')
    if (!list.length) { grid.innerHTML = '<p style="color:var(--gray-600);padding:20px">Aucun club.</p>'; return }
    grid.innerHTML = list.map(c => {
      const kit = buildKitFromClub(c)
      const kitSVG = generateKitPreviewSVG(kit).replace('<svg ', '<svg style="width:48px;height:56px" ')
      return `
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;position:relative">
          <!-- Logo -->
          <div style="flex-shrink:0">
            ${c.logo_url
              ? `<img src="${c.logo_url}" style="width:44px;height:44px;object-fit:contain;border-radius:8px">`
              : `<div style="width:44px;height:44px;background:linear-gradient(135deg,${kit.color1},${kit.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:900">${c.encoded_name.slice(0,3)}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.real_name}</div>
            <div style="font-size:11px;color:var(--gray-600);font-family:monospace">${c.encoded_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${c.country_code}/flat/24.png" style="height:14px"> 
              <span style="font-size:11px;color:var(--gray-600)">${c.country_code}</span>
            </div>
          </div>
          <!-- Kit -->
          <div style="flex-shrink:0">${kitSVG}</div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${c.id}" title="Modifier">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${c.id}" title="Supprimer">🗑️</button>
          </div>
        </div>`
    }).join('')

    grid.querySelectorAll('[data-edit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const club = clubs.find(c => c.id === btn.dataset.edit)
        openClubModal(club, helpers)
      })
    })
    grid.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Supprimer ce club ?')) return
        const { error } = await supabase.from('clubs').delete().eq('id', btn.dataset.del)
        if (error) toast(error.message, 'error')
        else { toast('Club supprimé', 'success'); loadClubs(container, helpers) }
      })
    })
  }
}

// ── Modal création / édition ─────────────────────────────
function openClubModal(club, helpers) {
  const { toast, openModal, closeModal } = helpers
  const isEdit = !!club
  const kit = club ? buildKitFromClub(club) : { ...DEFAULT_KIT }
  const kitStyleOptions = Object.entries(KIT_STYLES)
    .map(([k,v]) => `<option value="${k}" ${kit.style===k?'selected':''}>${v.label}</option>`).join('')
  const countryOptions = ALL_COUNTRIES
    .map(c => `<option value="${c}" ${(club?.country_code||'FR')===c?'selected':''}>${c}</option>`).join('')

  openModal(
    isEdit ? `✏️ ${club.real_name}` : '➕ Nouveau club',
    `<div style="display:flex;flex-direction:column;gap:16px">

      <!-- Identité -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="form-group">
          <label>Nom du club *</label>
          <input id="m-real" value="${club?.real_name||''}" placeholder="Paris Saint-Germain">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div class="form-group">
            <label>Nom encodé *</label>
            <div style="display:flex;gap:6px">
              <input id="m-encoded" value="${club?.encoded_name||''}" placeholder="PARIS FC" style="flex:1;text-transform:uppercase;font-family:monospace">
              <button class="btn btn-ghost btn-sm" id="auto-encode" title="Auto">↻</button>
            </div>
          </div>
          <div class="form-group">
            <label>Pays *</label>
            <select id="m-country" style="width:100%">${countryOptions}</select>
          </div>
        </div>
        <div class="form-group">
          <label>Logo (URL)</label>
          <input id="m-logo" value="${club?.logo_url||''}" placeholder="https://...">
        </div>
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:14px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
          <!-- Contrôles couleurs -->
          <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style de maillot</label>
              <select id="m-kit-style">${kitStyleOptions}</select>
            </div>
            ${[
              ['Couleur principale','m-kit-color1',kit.color1],
              ['Couleur secondaire','m-kit-color2',kit.color2],
              ['Short','m-kit-shorts',kit.shorts],
              ['Chaussettes','m-kit-socks',kit.socks],
            ].map(([lbl,id,val]) => `
              <div class="form-group">
                <label>${lbl}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${id}" value="${val}" style="width:36px;height:30px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${id}-txt" value="${val}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join('')}
          </div>
          <!-- Aperçu kit -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:80px">
            <div id="kit-preview-wrap" style="background:#f5f5f5;border-radius:10px;padding:12px;border:1px solid var(--gray-200)"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Actions spéciales -->
      ${!isEdit ? `
      <div style="border-top:1px solid var(--gray-200);padding-top:14px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:4px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer">
          <input type="checkbox" id="m-gen-stadium" checked>
          Créer automatiquement la carte Stade du club
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer">
          <input type="checkbox" id="m-gen-squad">
          Générer 20 joueurs aléatoires (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:22px">50% nationalité du club · notes 1–20 · physique adapté au pays</div>
      </div>` : ''}

      <div id="m-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%">${isEdit ? '💾 Enregistrer' : '✅ Créer le club'}</button>
    </div>`
  )

  // ── Sync couleurs ────────────────────────────────────────
  function syncColor(pickId, txtId) {
    const pk = document.getElementById(pickId)
    const tx = document.getElementById(txtId)
    if (!pk || !tx) return
    pk.addEventListener('input', () => { tx.value = pk.value; refreshKit() })
    tx.addEventListener('input', () => { if (/^#[0-9a-fA-F]{6}$/.test(tx.value)) { pk.value = tx.value; refreshKit() } })
  }
  syncColor('m-kit-color1','m-kit-color1-txt')
  syncColor('m-kit-color2','m-kit-color2-txt')
  syncColor('m-kit-shorts','m-kit-shorts-txt')
  syncColor('m-kit-socks','m-kit-socks-txt')
  document.getElementById('m-kit-style')?.addEventListener('change', refreshKit)

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
    const w = document.getElementById('kit-preview-wrap'); if (!w) return
    w.innerHTML = generateKitPreviewSVG(getKit())
  }
  refreshKit()

  // ── Auto-encode ─────────────────────────────────────────
  function autoEncode() {
    const real = document.getElementById('m-real')?.value || ''
    const words = real.trim().split(/\s+/)
    const abbr = words.length === 1 ? words[0].toUpperCase().slice(0,6)
      : words.filter(w => w.length > 2).map(w => w[0].toUpperCase()).join('') || words[0].toUpperCase().slice(0,4)
    const enc = document.getElementById('m-encoded')
    if (enc && !enc.value) enc.value = abbr
  }
  document.getElementById('auto-encode')?.addEventListener('click', () => {
    document.getElementById('m-encoded').value = ''
    autoEncode()
  })
  document.getElementById('m-real')?.addEventListener('input', autoEncode)

  // ── Sauvegarde ───────────────────────────────────────────
  document.getElementById('m-save')?.addEventListener('click', async () => {
    const errEl = document.getElementById('m-error')
    const realName    = document.getElementById('m-real')?.value.trim()
    const encodedName = document.getElementById('m-encoded')?.value.trim().toUpperCase()
    const countryCode = document.getElementById('m-country')?.value.trim().toUpperCase()
    const logoUrl     = document.getElementById('m-logo')?.value.trim() || null
    const k           = getKit()
    const genStadium  = document.getElementById('m-gen-stadium')?.checked ?? false
    const genSquad    = document.getElementById('m-gen-squad')?.checked ?? false

    if (!realName || !encodedName || !countryCode) { errEl.textContent = 'Nom, nom encodé et pays sont requis.'; return }

    const btn = document.getElementById('m-save')
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

      // ── Carte stade ──────────────────────────────────────
      if (genStadium) {
        btn.textContent = 'Création du stade…'
        // 1. Créer la définition du stade
        const { data: stadDef, error: eSD } = await supabase
          .from('stadium_definitions')
          .insert({ name: `Stade de ${realName}`, club_id: clubId, country_code: countryCode })
          .select().single()
        if (!eSD && stadDef) {
          // 2. Créer la carte stade (sans owner — c'est une carte de pool)
          await supabase.from('cards').insert({
            card_type: 'stadium', stadium_id: stadDef.id,
          })
        }
      }

      // ── Génération effectif ──────────────────────────────
      if (genSquad) {
        btn.textContent = 'Génération des joueurs…'
        const squad = generateSquad(clubId, countryCode)
        for (const p of squad) {
          const { data: newPlayer, error: eP } = await supabase.from('players').insert(p).select().single()
          if (eP) { console.warn('[GenSquad] Player error:', eP.message); continue }
          // Créer la carte joueur associée
          await supabase.from('cards').insert({ card_type: 'player', player_id: newPlayer.id })
        }
      }
    }

    toast(isEdit ? 'Club modifié ✅' : 'Club créé ✅', 'success')
    closeModal()
    const content = document.getElementById('page-content')
    if (content) loadClubs(content, helpers)
  })
}
