import { supabase } from '../../lib/supabase.js'
import { renderCardHTML, encodeVowels, JOB_COLORS, RARITY_BORDERS } from '../../components/card.js'
import {
  generateAvatarSVG,
  SKIN_COLORS, HAIR_COLORS, HAIR_STYLES, EYE_STYLES,
  NOSE_STYLES, MOUTH_STYLES, EYEBROW_STYLES, BEARD_STYLES,
  DEFAULT_AVATAR, DEFAULT_KIT
} from '../../components/avatar.js'

const RARITIES  = ['normal','pepite','papyte','legende']
const JOBS      = ['GK','DEF','MIL','ATT']
const COUNTRIES = [
  ['MA','Maroc'],['FR','France'],['AR','Argentine'],['PT','Portugal'],['BR','Brésil'],
  ['ES','Espagne'],['DE','Allemagne'],['GB','Angleterre'],['IT','Italie'],
  ['CM','Cameroun'],['SN','Sénégal'],['NG','Nigéria'],['DK','Danemark'],
  ['NL','Pays-Bas'],['BE','Belgique'],['CI',"Côte d'Ivoire"],['AL','Albanie'],
  ['HR','Croatie'],['RS','Serbie'],['TR','Turquie'],['MW','Malawi'],
]

// État avatar courant
let _avatarConfig = { ...DEFAULT_AVATAR }
// Clubs avec leur kit
let _clubs = []

export async function pageCardBuilder(container, { toast }) {
  const { data: clubs } = await supabase
    .from('clubs')
    .select('id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks')
    .order('encoded_name')
  _clubs = clubs || []
  _avatarConfig = { ...DEFAULT_AVATAR }

  container.innerHTML = buildUI(_clubs)
  attachEvents(container, _clubs, toast)
  updatePreview()
}

// ── Encodage voyelles ─────────────────────────────────────
function encodeVowelsUI() {
  const raw = document.getElementById('cb-surname-real')?.value || ''
  const el  = document.getElementById('cb-surname-enc')
  if (el) el.value = encodeVowels(raw)
}

// ── Kit du club sélectionné ───────────────────────────────
function getSelectedKit() {
  const clubId = document.getElementById('cb-club')?.value
  const club   = _clubs.find(c => String(c.id) === String(clubId))
  if (!club) return { ...DEFAULT_KIT }
  return {
    style:  club.kit_style  || DEFAULT_KIT.style,
    color1: club.kit_color1 || DEFAULT_KIT.color1,
    color2: club.kit_color2 || DEFAULT_KIT.color2,
    shorts: club.kit_shorts || DEFAULT_KIT.shorts,
    socks:  club.kit_socks  || DEFAULT_KIT.socks,
  }
}

// ── Preview carte ────────────────────────────────────────
function updatePreview() {
  const get = id => document.getElementById(id)?.value || ''
  const player = {
    firstname:         get('cb-firstname'),
    surname_real:   get('cb-surname-enc') || encodeVowels(get('cb-surname-real')),
    country_code:      get('cb-country'),
    club_encoded_name: document.getElementById('cb-club')?.selectedOptions[0]?.text || '',
    job:               get('cb-job'),
    job2:              get('cb-job2') || null,
    note_g:            parseInt(get('cb-note-g')) || 0,
    note_d:            parseInt(get('cb-note-d')) || 0,
    note_m:            parseInt(get('cb-note-m')) || 0,
    note_a:            parseInt(get('cb-note-a')) || 0,
    rarity:            get('cb-rarity'),
  }

  const kit      = getSelectedKit()
  const clubSel  = document.getElementById('cb-club')
  const logoUrl  = clubSel?.selectedOptions[0]?.dataset?.logo || null

  // Génère le SVG avatar complet (tête + corps + tenue)
  const avatarSvg = generateAvatarSVG(_avatarConfig, kit, 120)
  const portraitDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(avatarSvg)}`

  const html = renderCardHTML(player, { portraitUrl: portraitDataUrl, clubLogoUrl: logoUrl, showNotes: true })
  const preview = document.getElementById('card-preview')
  if (preview) preview.innerHTML = html

  // Mise à jour preview avatar isolée
  const avatarPreview = document.getElementById('avatar-preview-wrap')
  if (avatarPreview) avatarPreview.innerHTML = avatarSvg

  // Résumé encodage
  const realName = get('cb-surname-real')
  const sumEl    = document.getElementById('encode-summary')
  if (sumEl && realName) {
    sumEl.textContent = `${get('cb-firstname')} ${realName} → ${get('cb-firstname')} ${player.surname_real}`
  }
}

// ── Lecture avatar depuis les selects ───────────────────
function readAvatarFromForm() {
  const g = id => document.getElementById(id)?.value || ''
  _avatarConfig = {
    skin:      g('av-skin'),
    hair:      g('av-hair'),
    hairColor: g('av-hairColor'),
    eyes:      g('av-eyes'),
    nose:      g('av-nose'),
    mouth:     g('av-mouth'),
    eyebrows:  g('av-eyebrows'),
    beard:     g('av-beard'),
  }
}

// ── Événements ───────────────────────────────────────────
function attachEvents(container, clubs, toast) {
  // Inputs identité/stats → preview
  container.querySelectorAll('input,select').forEach(el => {
    el.addEventListener('input', updatePreview)
    el.addEventListener('change', updatePreview)
  })

  // Avatar selects → lire + preview
  const avatarSelIds = ['av-skin','av-hair','av-hairColor','av-eyes','av-nose','av-mouth','av-eyebrows','av-beard']
  avatarSelIds.forEach(id => {
    document.getElementById(id)?.addEventListener('change', () => { readAvatarFromForm(); updatePreview() })
  })

  // Encodage auto
  document.getElementById('cb-surname-real')?.addEventListener('input', () => {
    encodeVowelsUI(); updatePreview()
  })
  document.getElementById('btn-encode')?.addEventListener('click', () => {
    encodeVowelsUI(); updatePreview()
  })

  // Quand on change de club → mise à jour tenue dans preview
  document.getElementById('cb-club')?.addEventListener('change', updatePreview)

  // Enregistrer
  document.getElementById('btn-save-player')?.addEventListener('click', () => savePlayer(toast))

  // Réinitialiser
  document.getElementById('btn-reset')?.addEventListener('click', () => {
    container.querySelectorAll('input').forEach(el => el.value = '')
    container.querySelectorAll('select').forEach(el => el.selectedIndex = 0)
    _avatarConfig = { ...DEFAULT_AVATAR }
    // Remettre les selects avatar
    avatarSelIds.forEach(id => {
      const key = id.replace('av-', '')
      const el  = document.getElementById(id)
      if (el) el.value = DEFAULT_AVATAR[key] || ''
    })
    updatePreview()
  })
}

// ── Sauvegarde ────────────────────────────────────────────
async function savePlayer(toast) {
  const get = id => document.getElementById(id)?.value || ''
  const realName = get('cb-surname-real').trim()
  const encName  = get('cb-surname-enc').trim() || encodeVowels(realName)

  if (!get('cb-firstname') || !realName || !get('cb-country') || !get('cb-job')) {
    toast('Remplissez les champs obligatoires (prénom, nom, pays, poste)', 'error'); return
  }

  // S'assurer que l'avatar est bien lu
  readAvatarFromForm()

  const payload = {
    firstname:       get('cb-firstname').trim(),
    surname_real:    realName,
    surname_real: encName,
    country_code:    get('cb-country'),
    club_id:         get('cb-club') || null,
    job:             get('cb-job'),
    job2:            get('cb-job2') || null,
    note_g:          parseInt(get('cb-note-g')) || 0,
    note_d:          parseInt(get('cb-note-d')) || 0,
    note_m:          parseInt(get('cb-note-m')) || 0,
    note_a:          parseInt(get('cb-note-a')) || 0,
    rarity:          get('cb-rarity') || 'normal',
    note_min:        parseInt(get('cb-note-min')) || null,
    note_max:        parseInt(get('cb-note-max')) || null,
    sell_price:      parseInt(get('cb-price')) || 0,
    avatar_config:   _avatarConfig,
    // Champs hérités conservés pour compatibilité
    skin:            _avatarConfig.skin || 'blanc',
    hair:            _avatarConfig.hairColor || 'marron',
    hair_length:     'court',
  }

  const { error } = await supabase.from('players').insert(payload)
  if (error) { toast('Erreur: ' + error.message, 'error'); return }
  toast(`✅ Joueur "${payload.firstname} ${payload.surname_real}" enregistré !`, 'success')
}

// ── Rendu UI ─────────────────────────────────────────────
function buildUI(clubs) {
  const ctyOptions = COUNTRIES.map(([code, name]) =>
    `<option value="${code}">${name} (${code})</option>`).join('')

  const clubOptions = `<option value="">— Sélectionner un club —</option>` +
    clubs.map(c => `<option value="${c.id}" data-logo="${c.logo_url||''}">${c.encoded_name}</option>`).join('')

  const jobOptions    = JOBS.map(j => `<option value="${j}">${j}</option>`).join('')
  const job2Options   = `<option value="">Aucun</option>` + JOBS.map(j => `<option value="${j}">${j}</option>`).join('')
  const rarityOptions = RARITIES.map(r => `<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join('')

  // Options avatar
  const sel = (id, map, current) =>
    Object.entries(map).map(([k, v]) =>
      `<option value="${k}" ${k === (current||'') ? 'selected' : ''}>${v.label}</option>`
    ).join('')

  const skinOpts = Object.keys(SKIN_COLORS)
    .map(k => `<option value="${k}" ${k === DEFAULT_AVATAR.skin ? 'selected' : ''}>${k.charAt(0).toUpperCase()+k.slice(1)}</option>`).join('')

  const hairColorOpts = Object.keys(HAIR_COLORS)
    .map(k => `<option value="${k}" ${k === DEFAULT_AVATAR.hairColor ? 'selected' : ''}>${k.charAt(0).toUpperCase()+k.slice(1)}</option>`).join('')

  return `
  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start">

    <!-- ── Formulaire gauche ── -->
    <div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">👤 Identité du joueur</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Prénom *</label><input id="cb-firstname" placeholder="Osame"></div>
          <div>
            <label>Nom réel * <span style="font-weight:400;color:#999">(non affiché en jeu)</span></label>
            <div style="display:flex;gap:6px">
              <input id="cb-surname-real" placeholder="Sahraoui" style="flex:1">
              <button class="btn btn-ghost btn-sm" id="btn-encode" title="Encoder les voyelles">↻</button>
            </div>
          </div>
          <div>
            <label>Nom encodé * <span style="font-weight:400;color:#999">(GDD §4.5)</span></label>
            <input id="cb-surname-enc" placeholder="Sehreuao">
          </div>
          <div id="encode-summary-wrap" style="display:flex;align-items:flex-end">
            <div id="encode-summary" style="font-size:11px;color:var(--gray-600);padding-bottom:8px;font-style:italic"></div>
          </div>
          <div><label>Pays *</label><select id="cb-country">${ctyOptions}</select></div>
          <div><label>Club</label><select id="cb-club">${clubOptions}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${jobOptions}</select></div>
          <div><label>Poste secondaire</label><select id="cb-job2">${job2Options}</select></div>
          <div><label>Note GK (0-10)</label><input id="cb-note-g" type="number" min="0" max="10" value="0"></div>
          <div><label>Note DEF (0-10)</label><input id="cb-note-d" type="number" min="0" max="10" value="0"></div>
          <div><label>Note MIL (0-10)</label><input id="cb-note-m" type="number" min="0" max="10" value="0"></div>
          <div><label>Note ATT (0-10)</label><input id="cb-note-a" type="number" min="0" max="10" value="0"></div>
        </div>
      </div>

      <!-- Rareté -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">💎 Rareté</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div><label>Rareté</label><select id="cb-rarity">${rarityOptions}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${['normal','pepite','papyte','legende'].map(r => `
            <div style="background:${RARITY_BORDERS[r]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${r.toUpperCase()}
            </div>`).join('')}
        </div>
      </div>

      <!-- Avatar -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:4px">🎨 Portrait joueur (SVG)</h3>
        <p style="font-size:12px;color:var(--gray-600);margin-bottom:14px">
          Crée le personnage — il apparaîtra sur la carte avec la tenue du club sélectionné.
        </p>

        <div style="display:grid;grid-template-columns:1fr 120px;gap:16px;align-items:start">

          <!-- Contrôles avatar -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">

            <div>
              <label>Teint de peau</label>
              <select id="av-skin">${skinOpts}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${sel('av-hair', HAIR_STYLES, DEFAULT_AVATAR.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${hairColorOpts}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${sel('av-eyebrows', EYEBROW_STYLES, DEFAULT_AVATAR.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${sel('av-eyes', EYE_STYLES, DEFAULT_AVATAR.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${sel('av-nose', NOSE_STYLES, DEFAULT_AVATAR.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${sel('av-mouth', MOUTH_STYLES, DEFAULT_AVATAR.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${sel('av-beard', BEARD_STYLES, DEFAULT_AVATAR.beard)}</select>
            </div>
          </div>

          <!-- Preview avatar -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="avatar-preview-wrap" style="background:linear-gradient(135deg,#e8f4e8,#d0e8d0);border-radius:12px;padding:8px;border:2px solid var(--gray-200)">
              <!-- SVG injecté -->
            </div>
            <div style="font-size:10px;color:var(--gray-600);text-align:center">Personnage<br>(tenue du club)</div>
          </div>
        </div>
      </div>

      <!-- Prix -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">💰 Prix & Enregistrement</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <div><label>Prix de vente (crédits)</label><input id="cb-price" type="number" min="0" value="30000"></div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary" id="btn-save-player">💾 Enregistrer en BDD</button>
          <button class="btn btn-ghost" id="btn-reset">↺ Réinitialiser</button>
        </div>
      </div>
    </div>

    <!-- ── Preview droite (carte) ── -->
    <div style="position:sticky;top:16px">
      <div class="card-panel" style="text-align:center">
        <h3 style="font-size:13px;font-weight:600;margin-bottom:12px;color:var(--gray-600)">APERÇU EN TEMPS RÉEL</h3>
        <div id="card-preview" style="display:inline-block"></div>
        <div style="margin-top:10px;font-size:11px;color:var(--gray-600)">
          La carte se met à jour automatiquement.<br>
          La tenue correspond au club sélectionné.
        </div>
      </div>
    </div>
  </div>
  `
}
