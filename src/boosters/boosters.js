import { supabase } from '../lib/supabase.js'
import { FORMATION_POSITIONS } from '../match/formation-links.js'
import { loadActiveBoosters, drawCard, rollDropRate, recordBoosterClaim } from './booster-engine.js'

// Toutes les formations disponibles (depuis formation-links.js)
const ALL_FORMATIONS = () => Object.keys(FORMATION_POSITIONS)
const BOOSTERS = [
  { id:'players_std',  img: import.meta.env.BASE_URL+'icons/booster-players.png',     name:'Players',       sub:'5 cartes joueurs',  cost:5000,  costLabel:'5 000 crédits', cardCount:5, type:'player' },
  { id:'players_pub',  img: import.meta.env.BASE_URL+'icons/booster-silver.png',       name:'Players (pub)', sub:'3 cartes joueurs',  cost:0,     costLabel:'1 pub',         cardCount:3, type:'player' },
  { id:'game_changer', img: import.meta.env.BASE_URL+'icons/booster-gamechanger.png',  name:'Game Changer',  sub:'3 cartes spéciales',cost:10000, costLabel:'10 000 crédits',cardCount:3, type:'game_changer' },
  { id:'formation',    img: import.meta.env.BASE_URL+'icons/booster-formation.png',    name:'Formation',     sub:'1 carte formation', cost:10000, costLabel:'10 000 crédits',cardCount:1, type:'formation' },
]

const GC_DEFS = {
  'Ressusciter':    { icon:'💫', desc:'Réactive un joueur grisé.' },
  'Double attaque': { icon:'⚡', desc:'La prochaine attaque compte double.' },
  'Bouclier':       { icon:'🛡️', desc:'Annule le prochain but adverse.' },
  'Vol de note':    { icon:'🎯', desc:'-1 à la prochaine action IA.' },
  'Gel':            { icon:'❄️', desc:'Bloque le meilleur attaquant IA.' },
  'Remplacement+':  { icon:'🔄', desc:'+1 remplacement pour ce match.' },
}

function getPortrait(p) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  if (!supabaseUrl || !p?.skin || !p?.hair) return null
  const key = p.hair === 'chauve' ? `${p.skin}-chauve-rase` : `${p.skin}-${p.hair}-${p.hair_length}`
  return `${supabaseUrl}/storage/v1/object/public/assets/tetes/${key}.png`
}

const JOB_COLORS = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }
const RAR_COLORS = { normal:'#ccc', pepite:'#D4A017', papyte:'#909090', legende:'#7a28b8' }
const COUNTRY_NAMES = {
  MA:'MAROC', FR:'FRANCE', AR:'ARGENTINE', PT:'PORTUGAL', BR:'BRESIL',
  ES:'ESPAGNE', DE:'ALLEMAGNE', GB:'ANGLETERRE', IT:'ITALIE',
  CM:'CAMEROUN', SN:'SENEGAL', NG:'NIGERIA', DK:'DANEMARK',
  NL:'PAYS-BAS', BE:'BELGIQUE', CI:"CÔTE D'IVOIRE",
  AL:'ALBANIE', HR:'CROATIE', RS:'SERBIE', TR:'TURQUIE',
}
function getNote(p, job) {
  if (!p) return 0
  return Number(job==='GK'?p.note_g : job==='DEF'?p.note_d : job==='MIL'?p.note_m : p.note_a) || 0
}

// ── Rendu de carte joueur identique à la collection ──────
function renderCollectionCard(card) {
  const p = card.player
  if (!p) return ''
  const job = p.job || 'ATT'
  const jobColor = JOB_COLORS[job]
  const rarColor = RAR_COLORS[p.rarity] || '#ccc'
  const note1 = getNote(p, job)
  const note2 = p.job2 ? getNote(p, p.job2) : null
  const job2Color = p.job2 ? JOB_COLORS[p.job2] : null
  const portrait = getPortrait(p)
  const country = COUNTRY_NAMES[p.country_code] || p.country_code || ''
  return `
  <div style="width:140px;border-radius:12px;padding:6px;background:${rarColor};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${p.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(p.surname_encoded||'').toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${jobColor}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${jobColor}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${note1}</text>
        </svg>
        ${note2 !== null ? `
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${job2Color}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${note2}</text>
        </svg>` : ''}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${portrait
          ? `<img src="${portrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>`}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${p.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${country}</div>
        ${p.clubs?.logo_url
          ? `<img src="${p.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`
          : `<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(p.clubs?.encoded_name||'').slice(0,6)}</div>`}
      </div>
    </div>
  </div>`
}

// ── Convertir un booster DB en format UI ─────────────────
function dbToUI(b) {
  // Type dominant depuis les taux de drop
  const typeCounts = {}
  ;(b.rates||[]).forEach(r => {
    typeCounts[r.card_type] = (typeCounts[r.card_type]||0) + Number(r.percentage||0)
  })
  const primaryType = Object.entries(typeCounts).sort((a,z)=>z[1]-a[1])[0]?.[0] || 'player'

  const imgName = b.image_url || 'booster-players.png'
  return {
    id:        b.id,
    img:       import.meta.env.BASE_URL + 'icons/' + imgName,
    name:      b.name,
    sub:       `${b.card_count} carte(s)`,
    cost:      b.price_type === 'credits' ? (b.price_credits||0) : 0,
    costLabel: b.price_type === 'credits'
               ? `${(b.price_credits||0).toLocaleString('fr')} crédits`
               : b.price_type === 'pub' ? '1 pub' : 'Gratuit',
    cardCount: b.card_count || 5,
    type:      primaryType,
    isPub:     b.price_type === 'pub',
    rates:     b.rates || [],
    allow_duplicates: b.allow_duplicates !== false,  // false = anti-doublon
    _boosterId: b.id,  // pour recordBoosterClaim
    _raw:      b,
  }
}

export async function renderBoosters(container, { state, navigate, toast }) {
  const credits = state.profile?.credits || 0
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>'

  // Charger les boosters actifs depuis la DB
  let ACTIVE_BOOSTERS = []
  try {
    const dbBoosters = await loadActiveBoosters(state.user?.id)
    ACTIVE_BOOSTERS = dbBoosters.map(dbToUI)
  } catch(e) {
    console.warn('Erreur chargement boosters DB, fallback hardcodé', e)
  }
  // Fallback si aucun booster en DB
  if (!ACTIVE_BOOSTERS.length) ACTIVE_BOOSTERS = BOOSTERS.map(b => ({ ...b, rates:[], isPub: b.id==='players_pub' }))

  // Boosters sans doublons : vérifier si le pool est encore disponible
  const ownedForCheck = await supabase.from('cards')
    .select('player_id, card_type, formation, stadium_id, gc_type')
    .eq('owner_id', state.profile.id).then(r => r.data || [])
  const ownedStadsSet = new Set(ownedForCheck.filter(c=>c.card_type==='stadium').map(c=>c.stadium_id))
  const ownedFormsSet = new Set(ownedForCheck.filter(c=>c.card_type==='formation').map(c=>c.formation))
  const ownedGCSet    = new Set(ownedForCheck.filter(c=>c.card_type==='game_changer').map(c=>c.gc_type))

  const poolEmpty = {}
  for (const b of ACTIVE_BOOSTERS) {
    if (b.allow_duplicates !== false || !b.rates?.length) continue
    const types = [...new Set((b.rates||[]).map(r=>r.card_type))]
    let hasAvail = false
    for (const t of types) {
      if (t === 'stadium') {
        const { data: stads } = await supabase.from('stadium_definitions').select('id')
        if ((stads||[]).some(s => !ownedStadsSet.has(s.id))) { hasAvail = true; break }
      } else if (t === 'game_changer') {
        const { data: gcs } = await supabase.from('gc_definitions').select('name').eq('is_active', true)
        if ((gcs||[]).some(g => !ownedGCSet.has(g.name))) { hasAvail = true; break }
      } else if (t === 'formation') {
        const { FORMATION_LINKS } = await import('../match/formation-links.js')
        if (Object.keys(FORMATION_LINKS).some(f => !ownedFormsSet.has(f))) { hasAvail = true; break }
      } else {
        hasAvail = true; break  // joueurs/autres : trop grand pour vérifier exhaustivement
      }
    }
    if (!hasAvail) poolEmpty[b.id] = true
  }


  container.innerHTML = `
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${credits.toLocaleString('fr')} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${ACTIVE_BOOSTERS.map(b => {
          const canAfford = b.cost === 0 || credits >= b.cost
          const isPoolEmpty = poolEmpty[b.id] === true
          const isDisabled = !canAfford || isPoolEmpty
          return `<div class="booster-card ${isDisabled ? 'disabled' : ''}" data-booster="${b.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${b.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${b.img}" alt="${b.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='${import.meta.env.BASE_URL}icons/booster-players.png'"></div>
            <div class="name">${b.name}</div>
            <div class="desc">${b.sub}</div>
            <div class="cost">${b.costLabel}</div>
            ${!canAfford ? `<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>` : ''}
            ${isPoolEmpty ? `<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>` : ''}
          </div>`
        }).join('')}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`

  container.querySelectorAll('.booster-card:not(.disabled)').forEach(el => {
    el.addEventListener('click', async () => {
      const booster = ACTIVE_BOOSTERS.find(b => b.id === el.dataset.booster)
      if (!booster) return
      el.style.opacity = '0.5'; el.style.pointerEvents = 'none'
      try {
        await openBooster(booster, { state, toast, navigate, container })
      } catch(err) {
        toast(err.message, 'error')
        el.style.opacity = ''; el.style.pointerEvents = ''
      }
    })
  })

  // ℹ probabilités
  container.querySelectorAll('.booster-info-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const b = ACTIVE_BOOSTERS.find(x => x.id === btn.dataset.boosterId)
      showBoosterOdds(b)
    })
  })
}

async function openBooster(booster, { state, toast, navigate, container }) {
  if (booster.cost > 0 && state.profile.credits < booster.cost) {
    toast('Crédits insuffisants', 'error'); return
  }

  if (booster.isPub) {
    await showAd()
  }

  // Snapshot de la collection AVANT tirage (pour détecter les doublons)
  const { data: existingCards } = await supabase
    .from('cards')
    .select('card_type, player_id, formation')
    .eq('owner_id', state.profile.id)

  const ownedPlayerIds  = new Set((existingCards||[]).filter(c => c.card_type === 'player').map(c => c.player_id))
  const ownedFormations = new Set((existingCards||[]).filter(c => c.card_type === 'formation').map(c => c.formation))

  let newCards = []
  let _boosterError = null
  try {
    if (booster.rates?.length) {
      newCards = await openMixedBooster(state.profile, booster)
    } else {
      const type = booster.type || 'player'
      if (type === 'player') newCards = await openPlayersBooster(state.profile, booster.cardCount, booster.cost)
      else if (type === 'game_changer') newCards = await openGCBooster(state.profile, booster.cardCount, booster.cost)
      else if (type === 'formation') newCards = await openFormationBooster(state.profile, booster.cost)
      else newCards = await openMixedBooster(state.profile, booster)
    }
  } catch(e) {
    _boosterError = e.message || String(e)
    console.error('[Booster] Erreur:', e)
  }

  // Enregistrer le claim si booster à quota
  if (newCards?.length && booster._boosterId) {
    await recordBoosterClaim(state.user.id, booster._boosterId)
  }

  if (!newCards?.length) {
    const ov = document.createElement('div')
    ov.style.cssText = 'position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center'
    ov.innerHTML = `
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${_boosterError || 'Vérifie la console (F12) pour plus de détails'}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`
    document.body.appendChild(ov)
    ov.querySelector('#anim-close-err')?.addEventListener('click', () => ov.remove())
    return
  }

  // Marquer les doublons (déjà possédés avant ce tirage)
  newCards.forEach(card => {
    if (card.card_type === 'player' && card.player) {
      card.isDuplicate = ownedPlayerIds.has(card.player.id)
    } else if (card.card_type === 'formation') {
      card.isDuplicate = ownedFormations.has(card.formation)
    }
  })

  const { data } = await supabase.from('users').select('*').eq('id', state.profile.id).single()
  if (data) state.profile = data

  // Lancer l'animation FIFA
  showBoosterAnimation(newCards, booster, navigate)
}

// ── Probabilités d'obtention (GDD boosters) ──────────────
// 90% Normal note 1-5 | 8% Normal note 6-10 | 1.5% Pépite/Papyte | 0.5% Légende
function rollRarity() {
  const r = Math.random() * 100
  if (r < 0.5)  return 'legende'
  if (r < 2.0)  return 'special'      // pépite ou papyte
  if (r < 10.0) return 'normal_high'  // normal note 6-10
  return 'normal_low'                  // normal note 1-5
}

function maxNote(p) {
  return Math.max(Number(p.note_g)||0, Number(p.note_d)||0, Number(p.note_m)||0, Number(p.note_a)||0)
}

function pickPlayer(pool, targetRarity) {
  let candidates
  switch(targetRarity) {
    case 'legende':
      candidates = pool.filter(p => p.rarity === 'legende')
      if (!candidates.length) candidates = pool.filter(p => p.rarity === 'pepite' || p.rarity === 'papyte')
      if (!candidates.length) candidates = pool.filter(p => maxNote(p) >= 6)
      break
    case 'special':
      candidates = pool.filter(p => p.rarity === 'pepite' || p.rarity === 'papyte')
      if (!candidates.length) candidates = pool.filter(p => maxNote(p) >= 6)
      break
    case 'normal_high':
      candidates = pool.filter(p => p.rarity === 'normal' && maxNote(p) >= 6)
      if (!candidates.length) candidates = pool.filter(p => maxNote(p) >= 6)
      break
    default: // normal_low
      candidates = pool.filter(p => p.rarity === 'normal' && maxNote(p) >= 1 && maxNote(p) <= 5)
      if (!candidates.length) candidates = pool.filter(p => p.rarity === 'normal')
      break
  }
  if (!candidates.length) candidates = pool
  return candidates[Math.floor(Math.random() * candidates.length)]
}

// ── Booster mixte DB (taux configurés en admin) ──────────
async function openMixedBooster(profile, booster) {
  if (booster.cost > 0) {
    const { error } = await supabase.from('users')
      .update({ credits: profile.credits - booster.cost }).eq('id', profile.id)
    if (error) throw error
  }
  const allowDup = booster.allow_duplicates !== false  // true par défaut
  // Joueurs déjà possédés (pour réduire les doublons quand le pool le permet)
  // Query robuste : essayer avec stadium_id, fallback sans si colonne absente
  let ownedCards = []
  const { data: oc1, error: ocErr } = await supabase.from('cards')
    .select('player_id, card_type, formation, stadium_id, gc_type').eq('owner_id', profile.id)
  if (ocErr) {
    // Fallback sans stadium_id (colonne peut-être pas encore créée)
    const { data: oc2 } = await supabase.from('cards')
      .select('player_id, card_type, formation, gc_type').eq('owner_id', profile.id)
    ownedCards = oc2 || []
  } else {
    ownedCards = oc1 || []
  }
  const ownedPlayerIds  = new Set(ownedCards.filter(c=>c.card_type==='player').map(c => c.player_id))
  const ownedFormations = new Set(ownedCards.filter(c=>c.card_type==='formation').map(c => c.formation))
  const ownedGCTypes    = new Set(ownedCards.filter(c=>c.card_type==='game_changer').map(c => c.gc_type))
  const ownedStadiumIds = new Set(ownedCards.filter(c=>c.card_type==='stadium').map(c => c.stadium_id).filter(Boolean))
  const drawnThisBooster = new Set()  // joueurs déjà tirés dans CE booster
  const results = []
  for (let i = 0; i < (booster.cardCount||5); i++) {
    const rate = rollDropRate(booster.rates)
    if (!rate) continue
    if (rate.card_type === 'player') {
      // Tirer un joueur selon la rareté/note configurée
      // Normaliser la rareté : les configs booster ont pu être enregistrées
      // avec accent ('légende','pépite') alors que les joueurs sont stockés
      // sans accent ('legende','pepite'). On aligne pour que le .eq matche.
      const normRarity = (r) => ({ 'légende':'legende', 'pépite':'pepite', 'pépites':'pepite' }[r] || r)
      const wantedRarity = rate.rarity ? normRarity(rate.rarity) : null
      let q = supabase.from('players')
        .select('id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)')
        .eq('is_active', true)
      if (wantedRarity) q = q.eq('rarity', wantedRarity)
      const { data: pool } = await q
      let filtered = pool || []
      if (rate.note_min || rate.note_max) {
        filtered = filtered.filter(p => {
          const best = Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0)
          return (!rate.note_min || best >= rate.note_min) && (!rate.note_max || best <= rate.note_max)
        })
      }
      // Si contrainte note définie mais aucun joueur → fallback sur rareté seulement (pas toute la DB)
      if (!filtered.length) {
        if (rate.note_min || rate.note_max) {
          // Relâcher uniquement la contrainte note, garder la rareté
          filtered = (pool || [])
          console.warn('[Booster] Aucun joueur avec note', rate.note_min, '-', rate.note_max, '— fallback rareté uniquement')
        } else {
          filtered = pool || []
        }
      }
      if (!filtered.length) continue
      // Sans doublons : exclure les joueurs déjà possédés
      let pickPool = filtered.filter(p => !drawnThisBooster.has(p.id))
      if (!allowDup) {
        pickPool = pickPool.filter(p => !ownedPlayerIds.has(p.id))
        if (!pickPool.length) continue  // tous déjà possédés → skip
      } else {
        if (!pickPool.length) pickPool = filtered
      }
      const player = pickPool[Math.floor(Math.random()*pickPool.length)]
      drawnThisBooster.add(player.id)
      const isDup = ownedPlayerIds.has(player.id)
      const { data: card } = await supabase.from('cards')
        .insert({ owner_id:profile.id, player_id:player.id, card_type:'player' }).select().single()
      if (card) {
        results.push({ ...card, player, isDuplicate: isDup })
        supabase.rpc('record_transfer', {
          p_card_id: card.id, p_player_id: player.id,
          p_club_name: profile.club_name || profile.pseudo,
          p_manager_name: profile.pseudo,
          p_source: 'booster', p_price: null
        }).then(()=>{}).catch(()=>{})
      }
    } else if (rate.card_type === 'game_changer') {
      const { data: dbGC2 } = await supabase.from('gc_definitions').select('id,name').eq('is_active',true).eq('gc_type','game_changer')
      const gcPool = dbGC2?.length ? dbGC2 : [{name:'Ressusciter'},{name:'Double attaque'},{name:'Bouclier'},{name:'Vol de note'},{name:'Gel'}]
      // Sans doublons : exclure les GC déjà possédés
      const gcFiltered = !allowDup ? gcPool.filter(g => !ownedGCTypes.has(g.name)) : gcPool
      if (!allowDup && !gcFiltered.length) continue  // tous GC possédés → skip
      const gcPick = gcFiltered[Math.floor(Math.random()*gcFiltered.length)]
      const gc_type = gcPick.name
      const { data: card } = await supabase.from('cards')
        .insert({ owner_id:profile.id, card_type:'game_changer', gc_type }).select().single()
      if (card) results.push(card)
    } else if (rate.card_type === 'formation') {
      const formations = ALL_FORMATIONS()
      const formPool = !allowDup ? formations.filter(f => !ownedFormations.has(f)) : formations
      if (!allowDup && !formPool.length) continue  // toutes formations possédées → skip
      const formation = formPool[Math.floor(Math.random()*formPool.length)]
      const isDupF = ownedFormations.has(formation)
      const { data: cards } = await supabase.from('cards')
        .insert({ owner_id:profile.id, card_type:'formation', formation }).select()
      if (cards?.[0]) results.push({ ...cards[0], isDuplicate: isDupF })
    } else if (rate.card_type === 'stadium') {
      const { data: stads, error: stErr } = await supabase.from('stadium_definitions').select('id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)')
      if (stErr) { console.error('[Booster] stadium_definitions:', stErr.message); continue }
      if (!stads?.length) { console.warn('[Booster] Aucun stade en DB'); continue }
      const stadPool = !allowDup ? stads.filter(s => !ownedStadiumIds.has(s.id)) : stads
      if (!allowDup && !stadPool.length) continue  // tous stades possédés → skip
      const stadDef = stadPool[Math.floor(Math.random()*stadPool.length)]
      const { data: card, error: cErr } = await supabase.from('cards')
        .insert({ owner_id:profile.id, card_type:'stadium', stadium_id:stadDef.id })
        .select('id,card_type,stadium_id').single()
      if (cErr) { console.error('[Booster] insert stadium card:', cErr.message); continue }
      if (card) results.push({ ...card, rarity:'normal', _stadiumDef: stadDef })
    }
  }
  return results
}

async function openPlayersBooster(profile, count, cost) {
  if (cost > 0) {
    const { error } = await supabase.from('users')
      .update({ credits: profile.credits - cost }).eq('id', profile.id)
    if (error) throw error
  }

  const { data: players } = await supabase
    .from('players')
    .select('id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)')
    .eq('is_active', true)

  if (!players?.length) throw new Error('Pas de joueurs en BDD — ajoutes-en via le panel admin !')

  const gks    = players.filter(p => p.job === 'GK')
  const nonGks = players.filter(p => p.job !== 'GK')
  const needGK = !profile.first_booster_opened && gks.length > 0
  const selected = []

  for (let i = 0; i < count; i++) {
    // 1ère carte du 1er booster = GK obligatoire
    const pool = (i === 0 && needGK) ? gks : (i === 0 ? nonGks : players)
    const rarity = rollRarity()
    const player = pickPlayer(pool, rarity)
    if (player) selected.push(player)
  }

  if (needGK) {
    await supabase.from('users').update({ first_booster_opened: true }).eq('id', profile.id)
  }

  const { data: created } = await supabase.from('cards')
    .insert(selected.map(p => ({ owner_id: profile.id, player_id: p.id, card_type: 'player' })))
    .select()
  // Enregistrer chaque transfert (booster initial)
  ;(created||[]).forEach((card, i) => {
    supabase.rpc('record_transfer', {
      p_card_id: card.id, p_player_id: selected[i].id,
      p_club_name: profile.club_name || profile.pseudo,
      p_manager_name: profile.pseudo,
      p_source: 'booster', p_price: null
    }).then(()=>{}).catch(()=>{})
  })
  return selected.map((p, i) => ({ ...created[i], player: p }))
}

async function openGCBooster(profile, count, cost) {
  const { error } = await supabase.from('users')
    .update({ credits: profile.credits - cost }).eq('id', profile.id)
  if (error) throw error

  // Charger les GC actifs depuis la DB (ou fallback hardcodé)
  const { data: dbGC } = await supabase.from('gc_definitions')
    .select('id,name,gc_type,color,effect,image_url').eq('is_active', true)
  const pool = dbGC?.length ? dbGC : Object.keys(GC_DEFS).map(name => ({ name, gc_type:'game_changer' }))

  const inserts = Array.from({ length: count }, () => {
    const pick = pool[Math.floor(Math.random() * pool.length)]
    return {
      owner_id:         profile.id,
      card_type:        'game_changer',
      gc_type:          pick.name,                // nom = identifiant de l'effet
      gc_definition_id: pick.id || null,          // référence DB si dispo
    }
  })
  const { data: created, error: gcErr } = await supabase.from('cards').insert(inserts).select()
  if (gcErr) console.error('[Booster GC] Erreur insert:', gcErr.message, gcErr)
  // Attacher la définition complète pour le visuel
  const withDefs = (created||[]).map(card => {
    const def = dbGC?.find(d => d.name === card.gc_type || d.id === card.gc_definition_id)
    return { ...card, _gcDef: def || null }
  })
  return withDefs
}

async function openFormationBooster(profile, cost) {
  const { error } = await supabase.from('users')
    .update({ credits: profile.credits - cost }).eq('id', profile.id)
  if (error) throw error

  // Détecter doublon (formation déjà possédée)
  const { data: ownedF } = await supabase.from('cards')
    .select('formation').eq('owner_id', profile.id).eq('card_type', 'formation')
  const ownedFormations = new Set((ownedF||[]).map(c => c.formation))

  const formations = ALL_FORMATIONS()
  const formation  = formations[Math.floor(Math.random() * formations.length)]
  const isDup = ownedFormations.has(formation)
  const { data: created, error: insertErr } = await supabase.from('cards')
    .insert({ owner_id: profile.id, card_type: 'formation', formation }).select()
  if (insertErr) console.error('[Booster Formation] Erreur insert:', insertErr.message, insertErr)
  return (created || []).map(c => ({ ...c, isDuplicate: isDup }))
}

// ── Animation FIFA ─────────────────────────────────────────
// Phase 1 : booster qui tremble et s'ouvre
// Phase 2 : les cartes apparaissent une par une avec flip
function showBoosterAnimation(cards, booster, navigate, onClose = null) {
  // Guard : si aucune carte (insert DB échoué), afficher message d'erreur
  if (!cards || cards.length === 0) {
    const ov = document.createElement('div')
    ov.style.cssText = 'position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center'
    ov.innerHTML = `
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`
    document.body.appendChild(ov)
    ov.querySelector('#anim-close-err')?.addEventListener('click', () => ov.remove())
    return
  }

  // Trier les cartes : la carte joueur avec la note la plus haute apparaît en 1er.
  // (les cartes non-joueur — formation, GC — gardent leur ordre, placées après)
  cards = [...cards].sort((a, b) => {
    const na = a.player ? maxNote(a.player) : -1
    const nb = b.player ? maxNote(b.player) : -1
    return nb - na
  })

  const overlay = document.createElement('div')
  overlay.id = 'booster-anim-overlay'

  overlay.innerHTML = `
    <style>
      #booster-anim-overlay {
        position:fixed;inset:0;background:#0a1628;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        z-index:3000;overflow:hidden;
      }
      .pack-visual {
        width:180px;height:280px;border-radius:16px;
        background:transparent;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        filter:drop-shadow(0 0 30px rgba(212,160,23,0.5));cursor:pointer;
        animation:packFloat 2s ease-in-out infinite;
      }
      .pack-visual img { width:auto; height:100%; max-width:100%; object-fit:contain; }
      @keyframes packFloat {
        0%,100% { transform:translateY(0) rotate(-1deg); }
        50%      { transform:translateY(-8px) rotate(1deg); }
      }
      .pack-half { position:absolute; top:0; left:0; width:180px; height:280px; overflow:hidden; will-change:transform,opacity; }
      .pack-half img { position:absolute; top:0; left:0; width:180px; height:280px; object-fit:contain; }
      .pack-half-top    { clip-path: inset(0 0 80% 0); }
      .pack-half-bottom { clip-path: inset(20% 0 0 0); }
      .pack-cut .pack-half-top    { animation:cutTop .6s cubic-bezier(.4,0,.2,1) forwards; }
      .pack-cut .pack-half-bottom { animation:cutBottom .6s cubic-bezier(.4,0,.2,1) forwards; }
      @keyframes cutTop {
        0%{transform:translateY(0) rotate(0)} 
        100%{transform:translateY(-90px) translateX(-30px) rotate(-14deg);opacity:0}
      }
      @keyframes cutBottom {
        0%{transform:translateY(0) rotate(0)}
        100%{transform:translateY(60px) translateX(20px) rotate(8deg);opacity:0}
      }
      #pack-blade {
        position:absolute; top:20%; left:0; height:4px; width:0;
        transform:translateY(-50%);
        background:linear-gradient(90deg, transparent, #fff 40%, #FFD700 60%, #fff);
        box-shadow:0 0 14px 3px #FFD700, 0 0 26px 8px rgba(255,215,0,0.6);
        border-radius:4px; pointer-events:none; opacity:0;
      }
      #cut-flash {
        position:absolute; inset:0; background:radial-gradient(circle at center, rgba(255,255,255,0.95), transparent 65%);
        opacity:0; pointer-events:none;
      }
      .cut-flash-go { animation:cutFlash .5s ease-out forwards; }
      @keyframes cutFlash { 0%{opacity:0;transform:scale(0.4)} 30%{opacity:1} 100%{opacity:0;transform:scale(1.8)} }
      @keyframes woIn  { 0%{opacity:0;transform:scale(.4) translateY(20px)} 60%{opacity:1;transform:scale(1.12)} 100%{opacity:1;transform:scale(1)} }
      @keyframes woOut { 0%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(1.5)} }
      @keyframes woGlow { 0%,100%{filter:drop-shadow(0 0 18px rgba(255,215,0,.5))} 50%{filter:drop-shadow(0 0 34px rgba(255,215,0,.95))} }
      .wo-in  { animation:woIn .5s cubic-bezier(.34,1.56,.64,1) forwards, woGlow 1.6s ease-in-out infinite .5s; }
      .wo-out { animation:woOut .45s ease-in forwards; }
      /* Carte révélation - une seule carte centrée */
      .single-card-reveal {
        animation:cardReveal 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
      }
      @keyframes cardReveal {
        from{opacity:0;transform:scale(0.5) rotateY(90deg)}
        to{opacity:1;transform:scale(1) rotateY(0deg)}
      }
      .legend-glow {
        box-shadow:0 0 30px 10px #7a28b8, 0 0 60px 20px rgba(122,40,184,0.5) !important;
        animation:legendPulse 0.8s ease-in-out infinite alternate;
      }
      @keyframes legendPulse {
        from{box-shadow:0 0 20px 5px #7a28b8}
        to{box-shadow:0 0 50px 20px #7a28b8,0 0 80px 30px rgba(122,40,184,0.4)}
      }
      /* Récapitulatif final */
      .recap-grid {
        display:flex;flex-wrap:wrap;gap:8px;justify-content:center;
        max-width:600px;padding:16px;overflow-y:auto;max-height:70vh;
      }
      .recap-card { animation:recapAppear 0.3s ease both; }
      @keyframes recapAppear { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
      @keyframes dupPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
    </style>

    <!-- Phase 1 : booster (à découper) -->
    <div id="pack-phase" style="display:flex;flex-direction:column;align-items:center;gap:16px">
      <div style="font-size:14px;color:rgba(255,255,255,0.7)">
        ${booster.name} · ${cards.length} carte${cards.length>1?'s':''}
      </div>
      <div class="pack-visual" id="pack-visual" style="position:relative;animation:packFloat 2s ease-in-out infinite">
        <div id="pack-cut-zone" style="position:relative;width:180px;height:280px;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none">
          <div class="pack-half pack-half-bottom"><img src="${booster.img}" alt="${booster.name}" draggable="false"></div>
          <div class="pack-half pack-half-top"><img src="${booster.img}" alt="${booster.name}" draggable="false"></div>
          <div id="pack-blade"></div>
          <div id="cut-flash"></div>
        </div>
      </div>
      <div id="cut-hint" style="font-size:13px;color:rgba(255,255,255,0.6);display:flex;align-items:center;gap:6px">
        <span style="font-size:16px">👉</span> Glisse de gauche à droite pour ouvrir
      </div>
    </div>

    <!-- Phase 2 : carrousel des cartes (navigation par glissement) -->
    <div id="reveal-phase" style="display:none;flex-direction:column;align-items:center;gap:12px;width:100%;padding:8px 16px 18px">
      <div id="card-counter" style="font-size:14px;font-weight:700;color:rgba(255,255,255,0.85)"></div>
      <div id="card-viewport" style="position:relative;width:100%;max-width:300px;height:400px;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none">
        <div id="card-track" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"></div>
      </div>
      <div id="card-dots" style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;max-width:260px"></div>
      <div id="card-tap-hint" style="font-size:12px;color:rgba(255,255,255,0.45)">‹ glisse pour naviguer ›</div>
      <div id="reveal-btns" style="display:none;flex-direction:row;gap:10px;width:100%;max-width:400px;margin-top:4px">
        <button class="btn btn-primary" id="reveal-collection" style="flex:1">Voir ma collection</button>
        <button class="btn btn-ghost" id="reveal-more" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Boosters</button>
      </div>
    </div>

    <!-- (Phase 3 fusionnée dans le carrousel) -->
    <div id="recap-phase" style="display:none"></div>

    <!-- Overlay WALKOUT (drapeau → club → carte) -->
    <div id="walkout-overlay" style="display:none;position:fixed;inset:0;z-index:3000;align-items:center;justify-content:center;background:radial-gradient(circle at center, rgba(20,20,40,0.85), rgba(0,0,0,0.97))">
      <div id="walkout-stage" style="display:flex;align-items:center;justify-content:center;width:240px;height:240px"></div>
    </div>

    <!-- Canvas pour feu d'artifice -->
    <canvas id="fireworks-canvas" style="position:fixed;inset:0;pointer-events:none;z-index:3001"></canvas>
  `

  document.body.appendChild(overlay)

  // ── Phase 1 : DÉCOUPE par glissement gauche → droite ──
  let cutDone = false
  const zone  = document.getElementById('pack-cut-zone')
  const blade = document.getElementById('pack-blade')
  let dragging = false

  const clientX = (e) => (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX)

  function onDown(e) {
    if (cutDone) return
    dragging = true
    blade.style.opacity = '1'
    onMove(e)
  }
  function onMove(e) {
    if (!dragging || cutDone) return
    const r = zone.getBoundingClientRect()
    const x = clientX(e) - r.left
    const prog = Math.max(0, Math.min(1, x / r.width))
    blade.style.width = (prog * r.width) + 'px'
    if (prog >= 0.82) triggerCut()
  }
  function onUp() {
    if (cutDone) return
    dragging = false
    // Pas allé assez loin → la lame se rétracte
    blade.style.transition = 'width .2s ease, opacity .2s ease'
    blade.style.width = '0'
    blade.style.opacity = '0'
    setTimeout(() => { if (!cutDone) blade.style.transition = '' }, 220)
  }

  function triggerCut() {
    if (cutDone) return
    cutDone = true
    dragging = false
    blade.style.width = '100%'
    blade.style.opacity = '1'
    document.getElementById('cut-flash')?.classList.add('cut-flash-go')
    if (navigator.vibrate) navigator.vibrate([30, 20, 50])
    const hint = document.getElementById('cut-hint')
    if (hint) hint.style.opacity = '0'
    // Les deux moitiés se séparent
    zone.classList.add('pack-cut')
    setTimeout(() => {
      blade.style.opacity = '0'
      document.getElementById('pack-phase').style.display = 'none'
      startCardReveal(0)
    }, 620)
  }

  zone.addEventListener('pointerdown', onDown)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  // Fallback tactile (anciens navigateurs sans pointer events)
  zone.addEventListener('touchstart', onDown, { passive:true })
  window.addEventListener('touchmove', onMove, { passive:true })
  window.addEventListener('touchend', onUp)

  // ── Phase 2 : carrousel des cartes (glissement latéral) ──
  let currentIdx = 0
  let walkoutPlaying = false
  const seen = new Set()

  function startCardReveal(idx) {
    currentIdx = idx
    document.getElementById('reveal-phase').style.display = 'flex'
    renderDots()
    showCard(idx, 0)
    bindSwipe()
  }

  function renderDots() {
    const dots = document.getElementById('card-dots')
    if (!dots) return
    dots.innerHTML = cards.map((_, i) =>
      `<div class="card-dot" data-i="${i}" style="width:8px;height:8px;border-radius:50%;background:${i===currentIdx?'#FFD700':'rgba(255,255,255,0.3)'};transition:background .2s;cursor:pointer"></div>`
    ).join('')
    dots.querySelectorAll('.card-dot').forEach(d =>
      d.addEventListener('click', () => goTo(parseInt(d.dataset.i)))
    )
  }

  function showCard(idx, dir) {
    const card    = cards[idx]
    const counter = document.getElementById('card-counter')
    const track   = document.getElementById('card-track')
    if (counter) counter.textContent = `Carte ${idx+1} / ${cards.length}`
    // Boutons visibles uniquement sur la dernière carte
    const revealBtns = document.getElementById('reveal-btns')
    if (revealBtns) revealBtns.style.display = idx === cards.length - 1 ? 'flex' : 'none'

    const isLegend = card.card_type === 'player' && card.player?.rarity === 'legende'
    const firstSeen = !seen.has(idx)
    seen.add(idx)

    // Note principale (poste affiché) pour décider du walkout
    let mainNote = 0
    if (card.card_type === 'player' && card.player) {
      const p = card.player, j = p.job || 'ATT'
      mainNote = Number(j==='GK'?p.note_g : j==='DEF'?p.note_d : j==='MIL'?p.note_m : p.note_a) || 0
    }

    const paint = (withFireworks) => {
      track.innerHTML = `
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${isLegend?'filter:drop-shadow(0 0 20px #7a28b8)':''}">
          <div style="transform:scale(1.25);transform-origin:center">${buildCardFace(card)}</div>
          ${card.isDuplicate ? `<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>` : ''}
        </div>`
      const wrap = document.getElementById('current-card-wrap')
      if (dir !== 0) {
        wrap.style.transition = 'none'
        wrap.style.transform = `translateX(${dir>0?100:-100}%)`
        requestAnimationFrame(() => {
          wrap.style.transition = 'transform .28s cubic-bezier(.25,1,.5,1)'
          wrap.style.transform = 'translateX(0)'
        })
      } else {
        wrap.animate([{opacity:0, transform:'scale(.7)'},{opacity:1, transform:'scale(1)'}], {duration:300, easing:'cubic-bezier(.34,1.56,.64,1)'})
      }
      if (withFireworks || isLegend) launchFireworks(); else stopFireworks()
      renderDots()
    }

    // WALKOUT (style FIFA) : drapeau → club → carte + feu d'artifice
    if (firstSeen && mainNote > 6 && card.card_type === 'player' && card.player) {
      playWalkout(card, () => paint(true))
    } else {
      paint(false)
    }
  }

  function playWalkout(card, onDone) {
    walkoutPlaying = true
    const p = card.player
    const flagUrl  = `https://flagsapi.com/${p.country_code}/flat/64.png`
    const clubLogo = p.clubs?.logo_url
    const ov    = document.getElementById('walkout-overlay')
    const stage = document.getElementById('walkout-stage')
    if (!ov || !stage) { walkoutPlaying = false; onDone(); return }
    ov.style.display = 'flex'
    const fadeOut = () => { const el = stage.firstElementChild; if (el){ el.classList.remove('wo-in'); el.classList.add('wo-out') } }

    // 1) Drapeau (2s)
    stage.innerHTML = `<img class="wo-in" src="${flagUrl}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`
    if (navigator.vibrate) navigator.vibrate(30)
    setTimeout(fadeOut, 2000)

    // 2) Logo du club (2s)
    setTimeout(() => {
      stage.innerHTML = clubLogo
        ? `<img class="wo-in" src="${clubLogo}" style="max-height:160px;max-width:210px;object-fit:contain">`
        : `<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${(p.clubs?.encoded_name||'CLUB')}</div>`
      if (navigator.vibrate) navigator.vibrate(30)
    }, 2450)
    setTimeout(fadeOut, 4450)

    // 3) La carte + feu d'artifice
    setTimeout(() => {
      ov.style.display = 'none'
      stage.innerHTML = ''
      walkoutPlaying = false
      if (navigator.vibrate) navigator.vibrate([40, 30, 80])
      onDone()
    }, 4900)
  }

  function goTo(idx) {
    if (walkoutPlaying) return
    if (idx < 0 || idx >= cards.length || idx === currentIdx) return
    const dir = idx > currentIdx ? 1 : -1
    currentIdx = idx
    showCard(idx, dir)
  }
  function next() { goTo(currentIdx + 1) }
  function prev() { goTo(currentIdx - 1) }

  function bindSwipe() {
    const vp = document.getElementById('card-viewport')
    if (!vp || vp._swipeBound) return
    vp._swipeBound = true
    let startX = 0, startY = 0, dx = 0, active = false
    const cx = (e) => e.touches ? e.touches[0].clientX : e.clientX
    const cy = (e) => e.touches ? e.touches[0].clientY : e.clientY
    const down = (e) => { active = true; startX = cx(e); startY = cy(e); dx = 0 }
    const move = (e) => {
      if (!active) return
      dx = cx(e) - startX
      const dy = cy(e) - startY
      if (Math.abs(dx) < Math.abs(dy)) return // scroll vertical : on ignore
      const wrap = document.getElementById('current-card-wrap')
      if (wrap) { wrap.style.transition = 'none'; wrap.style.transform = `translateX(${dx*0.6}px) rotate(${dx*0.02}deg)` }
    }
    const up = () => {
      if (!active) return
      active = false
      const wrap = document.getElementById('current-card-wrap')
      const TH = 55
      if (dx <= -TH && currentIdx < cards.length-1) { next() }
      else if (dx >= TH && currentIdx > 0) { prev() }
      else if (wrap) { wrap.style.transition = 'transform .2s ease'; wrap.style.transform = 'translateX(0)' }
    }
    vp.addEventListener('pointerdown', down)
    vp.addEventListener('pointermove', move)
    vp.addEventListener('pointerup', up)
    vp.addEventListener('pointercancel', up)
    vp.addEventListener('touchstart', down, {passive:true})
    vp.addEventListener('touchmove', move, {passive:true})
    vp.addEventListener('touchend', up)
    // Tap sur la moitié droite/gauche pour naviguer aussi
    vp.addEventListener('click', (e) => {
      if (Math.abs(dx) > 8) return
      const r = vp.getBoundingClientRect()
      if (e.clientX - r.left > r.width/2) next(); else prev()
    })
  }

  // ── Feu d'artifice ────────────────────────────────────
  let fwInterval = null

  function launchFireworks() {
    const canvas = document.getElementById('fireworks-canvas')
    if (!canvas) return
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    const particles = []

    function spawnBurst() {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 0.6
      const colors = ['#7a28b8','#ff4081','#D4A017','#00e676','#fff','#e040fb','#40c4ff']
      const color  = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < 60; i++) {
        const angle = (Math.PI * 2 / 60) * i
        const speed = 2 + Math.random() * 5
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: 2 + Math.random() * 3,
        })
      }
    }

    spawnBurst()
    fwInterval = setInterval(spawnBurst, 600)

    function animate() {
      if (!document.getElementById('fireworks-canvas')) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x  += p.vx
        p.y  += p.vy + 0.08   // gravité légère
        p.vy *= 0.98
        p.alpha -= 0.018
        if (p.alpha <= 0) { particles.splice(i, 1); continue }
        ctx.globalAlpha = p.alpha
        ctx.fillStyle   = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      if (fwInterval !== null || particles.length > 0) requestAnimationFrame(animate)
    }
    animate()
  }

  function stopFireworks() {
    if (fwInterval !== null) { clearInterval(fwInterval); fwInterval = null }
    const canvas = document.getElementById('fireworks-canvas')
    if (canvas) {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  // ── Boutons fin ───────────────────────────────────────
  if (onClose) {
    // Mode onboarding : un seul bouton "Continuer" qui enchaîne le booster suivant
    const btnRow = document.getElementById('reveal-btns')
    if (btnRow) {
      btnRow.innerHTML = `<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>`
    }
    document.getElementById('reveal-next')?.addEventListener('click', () => {
      stopFireworks(); overlay.remove(); onClose()
    })
  } else {
    document.getElementById('reveal-collection').addEventListener('click', () => {
      stopFireworks(); overlay.remove(); navigate('collection')
    })
    document.getElementById('reveal-more').addEventListener('click', () => {
      stopFireworks(); overlay.remove(); navigate('boosters')
    })
  }
}


function buildCardFace(card) {
  if (card.card_type === 'player' && card.player) {
    // Même design que la collection / le reste de l'app (cadre rareté, étoile
    // principale + secondaire, portrait, footer drapeau/pays/club).
    return renderCollectionCard(card, '')
  }

  if (card.card_type === 'game_changer') {
    const def  = card._gcDef
    const isUltra = def?.gc_type === 'ultra_game_changer'
    const BG   = { purple:'linear-gradient(160deg,#4a0a8a,#7a28b8)', light_blue:'linear-gradient(160deg,#006080,#00bcd4)' }
    const BORD = { purple:'#b06ce0', light_blue:'#00d4ef' }
    const bg   = BG[def?.color]   || BG.purple
    const bord = BORD[def?.color] || BORD.purple
    const name   = def?.name   || card.gc_type || 'Game Changer'
    const effect = def?.effect || GC_DEFS[card.gc_type]?.desc || ''
    const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
    const fallback = GC_DEFS[card.gc_type]?.icon || '⚡'
    return `<div style="width:170px;height:240px;background:${bg};border-radius:14px;border:3px solid ${bord};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${bord}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${name.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${name}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${isUltra?'💎 ULTRA GAME CHANGER':'⚡ GAME CHANGER'}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${imgUrl
          ? `<img src="${imgUrl}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`
          : `<span style="font-size:56px">${fallback}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${effect.slice(0,55)}</div>
      </div>
    </div>`
  }

  if (card.card_type === 'formation') {
    return `<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${card.formation}</div>
    </div>`
  }

  if (card.card_type === 'stadium') {
    const def = card._stadiumDef
    const name  = def?.name  || 'Stade'
    const label = def?.club?.encoded_name || def?.country_code || '—'
    const imgUrl = def?.image_url
      ? `${import.meta.env.BASE_URL}icons/${def.image_url}`
      : (def?.club?.logo_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null))
    return `<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${name.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${name}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${imgUrl ? `<img src="${imgUrl}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">` : '<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${label}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`
  }
  return '<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'
}

// ── Popup probabilités d'obtention ───────────────────────
function showBoosterOdds(booster) {
  // Si le booster a des taux DB configurés, les afficher
  if (booster?.rates?.length) {
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px'
    const RARITY_COLORS = { normal:'#ccc', pepite:'#D4A017', pépite:'#D4A017', papyte:'#909090', legende:'#7a28b8', légende:'#7a28b8' }
    const TYPE_LABELS = { player:'Joueur', formation:'Formation', game_changer:'Game Changer', game_helper:'Game Helper' }
    overlay.innerHTML = `
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${booster.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${booster.rates.map(r => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${TYPE_LABELS[r.card_type]||r.card_type}</span>
            ${r.rarity ? `<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${RARITY_COLORS[r.rarity]||'#eee'};color:#fff;font-size:10px;font-weight:700">${r.rarity}</span>`:''}
            ${r.note_min||r.note_max ? `<span style="margin-left:4px;font-size:11px;color:#888">note ${r.note_min||''}–${r.note_max||''}</span>`:''}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(r.percentage).toFixed(1)}%</span>
        </div>`).join('')}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`
    document.body.appendChild(overlay)
    overlay.addEventListener('click', e => { if (e.target===overlay) overlay.remove() })
    document.getElementById('odds-close')?.addEventListener('click', () => overlay.remove())
    return
  }
  // Sinon : popup probabilités hardcodées (fallback)
  showHardcodedOdds()
}

function showHardcodedOdds() {
  const overlay = document.createElement('div')
  overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
    align-items:center;justify-content:center;z-index:4000;padding:16px`
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:20px;max-width:340px;width:100%;
      box-shadow:0 8px 40px rgba(0,0,0,0.3)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3 style="font-size:16px;font-weight:700;margin:0">📦 Chances d'obtention</h3>
        <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer;color:#666">✕</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">

        <div style="display:flex;align-items:center;justify-content:space-between;
          padding:10px 14px;border-radius:10px;background:#f5f5f5">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:14px;height:14px;border-radius:50%;background:#ccc;flex-shrink:0"></div>
            <div>
              <div style="font-weight:600;font-size:13px">Normal (note 1–5)</div>
              <div style="font-size:11px;color:#888">Carte commune</div>
            </div>
          </div>
          <div style="font-size:18px;font-weight:900;color:#333">90%</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;
          padding:10px 14px;border-radius:10px;background:#f0f8ff">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:14px;height:14px;border-radius:50%;background:#4a90d9;flex-shrink:0"></div>
            <div>
              <div style="font-weight:600;font-size:13px">Normal (note 6–10)</div>
              <div style="font-size:11px;color:#888">Carte commune haute</div>
            </div>
          </div>
          <div style="font-size:18px;font-weight:900;color:#4a90d9">8%</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;
          padding:10px 14px;border-radius:10px;background:#fff8e1">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:14px;height:14px;border-radius:50%;background:#D4A017;flex-shrink:0"></div>
            <div>
              <div style="font-weight:600;font-size:13px">Pépite / Papyte</div>
              <div style="font-size:11px;color:#888">Carte rare</div>
            </div>
          </div>
          <div style="font-size:18px;font-weight:900;color:#D4A017">1.5%</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;
          padding:10px 14px;border-radius:10px;background:#f5eeff">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:14px;height:14px;border-radius:50%;background:#7a28b8;flex-shrink:0"></div>
            <div>
              <div style="font-weight:600;font-size:13px">Légende</div>
              <div style="font-size:11px;color:#888">Carte ultra-rare</div>
            </div>
          </div>
          <div style="font-size:18px;font-weight:900;color:#7a28b8">0.5%</div>
        </div>

      </div>
      <div style="margin-top:14px;padding:10px;background:#f9f9f9;border-radius:8px;font-size:11px;color:#888;text-align:center">
        Les probabilités s'appliquent à chaque carte individuellement.<br>
        Le 1er booster contient toujours un Gardien.
      </div>
    </div>
  `
  document.body.appendChild(overlay)
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  document.getElementById('odds-close').addEventListener('click', () => overlay.remove())
}

// ── Overlay pub 5s ───────────────────────────────────────

function showAd() {
  return new Promise(resolve => {
    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `
    overlay.innerHTML = `
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `
    document.body.appendChild(overlay)

    let remaining = 5
    const interval = setInterval(() => {
      remaining--
      const cd = document.getElementById('mw-ad-cd')
      if (cd) cd.textContent = remaining
      if (remaining <= 0) {
        clearInterval(interval)
        overlay.remove()
        resolve(true)
      }
    }, 1000)
  })
}


function shuffle(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  return arr
}

// ── Onboarding : ouverture des boosters de démarrage offerts ──────────────
// Lit users.pending_boosters (file de boosters non ouverts) et les fait ouvrir
// un par un avec l'animation FIFA standard. Marque onboarding_done à la fin.
export async function renderStarterOnboarding(container, { state, navigate, toast, refreshProfile }) {
  // Recharger le profil pour avoir la file à jour
  const { data: prof } = await supabase.from('users').select('*').eq('id', state.user.id).single()
  if (prof) state.profile = prof

  let queue = Array.isArray(state.profile?.pending_boosters) ? [...state.profile.pending_boosters] : []

  // Rien à ouvrir → aller à l'accueil
  if (!queue.length) {
    await supabase.from('users').update({ onboarding_done: true }).eq('id', state.user.id)
    navigate('home'); return
  }

  // Charger la config "Booster (new player)" pour calquer ses taux de drop
  let newPlayerBooster = null
  try {
    const all = await loadActiveBoosters()
    const found = all.find(b => (b.name||'').toLowerCase().includes('new player'))
    if (found) newPlayerBooster = dbToUI(found)
  } catch(e) {
    console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut', e)
  }

  const total = queue.length
  let index = 0

  // Écran d'intro
  container.innerHTML = `
  <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
    <div style="max-width:420px;text-align:center;color:#fff">
      <div style="font-size:56px;margin-bottom:10px">🎁</div>
      <h2 style="font-size:24px;font-weight:900;margin-bottom:8px">Bienvenue ${state.profile.pseudo} !</h2>
      <p style="font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;margin-bottom:8px">
        Pour démarrer ton aventure, voici tes cadeaux :
      </p>
      <div style="font-size:14px;color:#FFD700;font-weight:700;line-height:1.8;margin-bottom:24px">
        ⚽ 4 boosters de 5 joueurs<br>
        ⚡ 1 booster Game Changer<br>
        📋 1 booster Formation
      </div>
      <p style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:24px">
        Ouvre-les un par un pour découvrir tes cartes !
      </p>
      <button class="btn btn-primary" id="onboard-start" style="width:100%;font-size:16px;padding:14px">
        Ouvrir mon 1er booster 🎉
      </button>
    </div>
  </div>`

  const persistQueue = async () => {
    await supabase.from('users').update({ pending_boosters: queue }).eq('id', state.user.id)
  }

  async function openNext() {
    if (index >= total || !queue.length) {
      // Terminé
      await supabase.from('users')
        .update({ pending_boosters: [], onboarding_done: true })
        .eq('id', state.user.id)
      if (refreshProfile) await refreshProfile()
      toast('Tous tes boosters sont ouverts ! Bon jeu 🎮', 'success', 4000)
      navigate('home')
      return
    }

    const spec = queue[0]
    // Recharger le profil (first_booster_opened à jour pour la garantie GK)
    const { data: p } = await supabase.from('users').select('*').eq('id', state.user.id).single()
    if (p) state.profile = p

    let newCards = []
    try {
      if (spec.type === 'formation') {
        newCards = await openFormationBooster(state.profile, 0)
      } else if (spec.type === 'game_changer') {
        newCards = await openGCBooster(state.profile, spec.count || 3, 0)
      } else {
        // Booster Joueurs : se baser sur "Booster (new player)" + ses taux de drop
        if (newPlayerBooster && newPlayerBooster.rates?.length) {
          const cfg = { ...newPlayerBooster, cost: 0, cardCount: spec.count || newPlayerBooster.cardCount || 5 }
          newCards = await openMixedBooster(state.profile, cfg)
          // Garantie GK sur le 1er booster joueurs : si aucun GK tiré, en forcer un
          if (spec.guaranteeGK && !state.profile.first_booster_opened) {
            const hasGK = newCards.some(c => c.player && c.player.job === 'GK')
            if (!hasGK) await ensureGKInBooster(state.profile, newCards)
            await supabase.from('users').update({ first_booster_opened: true }).eq('id', state.profile.id)
          }
        } else {
          // Fallback : ancien tirage par défaut
          newCards = await openPlayersBooster(state.profile, spec.count || 5, 0)
        }
      }
    } catch (err) {
      toast(err.message || 'Erreur ouverture booster', 'error')
      return
    }

    // Retirer ce booster de la file et persister
    queue.shift()
    index++
    await persistQueue()

    // Booster "fictif" pour l'animation (nom + visuel)
    const fakeBooster = spec.type === 'formation'
      ? { name: 'Booster Formation', type: 'formation', img: `${import.meta.env.BASE_URL}icons/booster-formation.png` }
      : spec.type === 'game_changer'
      ? { name: 'Booster Game Changer', type: 'game_changer', img: `${import.meta.env.BASE_URL}icons/booster-gamechanger.png` }
      : { name: `Booster Joueurs (${index}/${total})`, type: 'player', img: (newPlayerBooster?.img) || `${import.meta.env.BASE_URL}icons/booster-players.png` }

    // Lancer l'animation, puis enchaîner au booster suivant
    showBoosterAnimation(newCards, fakeBooster, navigate, () => { openNext() })
  }

  document.getElementById('onboard-start')?.addEventListener('click', () => openNext())
}

// Garantit qu'au moins un GK figure dans le booster : remplace la 1ère carte par un GK.
async function ensureGKInBooster(profile, newCards) {
  try {
    const { data: gks } = await supabase.from('players')
      .select('id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)')
      .eq('is_active', true).eq('job', 'GK')
    if (!gks?.length) return
    const gk = gks[Math.floor(Math.random()*gks.length)]
    // Remplacer la 1ère carte joueur tirée par ce GK (en DB aussi)
    const replaceIdx = newCards.findIndex(c => c.player)
    if (replaceIdx === -1) return
    const oldCard = newCards[replaceIdx]
    await supabase.from('cards').update({ player_id: gk.id }).eq('id', oldCard.id)
    newCards[replaceIdx] = { ...oldCard, player_id: gk.id, player: gk }
  } catch(e) { console.warn('[Onboarding] ensureGK échec', e) }
}
