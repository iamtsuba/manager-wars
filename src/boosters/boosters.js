import { supabase } from '../lib/supabase.js'
import { syncV2Credits, ensureV2Chrome } from '../home/home2.js'
import { isFeatureEnabled, showFeatureDisabledPopup } from '../lib/featureFlags.js'
import { renderPlayerCard } from '../components/player-card.js'
import { FORMATION_POSITIONS } from '../match/formation-links.js'
import { loadActiveBoosters, drawCard, rollDropRate, recordBoosterClaim } from './booster-engine.js'
import { playSound } from '../lib/sound.js'
import { getPortrait } from '../lib/portrait.js'
import { renderGCCard, renderStadiumCard, renderFormationCard } from '../components/special-cards.js'
import { showTutorial, STEPS as TUTORIAL_FALLBACK_STEPS } from '../tutorial/tutorial.js'

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

// ── Rendu de carte joueur ────────────────────────────────
function renderCollectionCard(card) {
  const p = card.player
  if (!p) return ''
  const evo = card.evolution_bonus || 0
  return renderPlayerCard({ ...p, _evolution_bonus: evo }, { width: 140, context: 'boosters' })
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

// ── Réclamation d'une récompense en attente (crédits / carte / booster) ──
// Réutilise les VRAIES fonctions d'ouverture de booster (pas de réimplémentation)
export async function claimPendingReward(reward, profile, toast, refreshProfile) {
  if (reward.reward_type === 'credits') {
    const newCredits = (profile.credits || 0) + (reward.credits_amount || 0)
    const { error } = await supabase.from('users').update({ credits: newCredits }).eq('id', profile.id)
    if (error) throw error
    profile.credits = newCredits
    if (refreshProfile) await refreshProfile()
    return { type: 'credits', amount: reward.credits_amount }
  }

  if (reward.reward_type === 'card') {
    const { data: player } = await supabase.from('players').select('firstname, surname_real, rarity').eq('id', reward.player_id).single()
    const { error } = await supabase.from('cards').insert({ owner_id: profile.id, player_id: reward.player_id, card_type: 'player' })
    if (error) throw error
    return { type: 'card', player }
  }

  if (reward.reward_type === 'booster') {
    const { data: cfg } = await supabase.from('booster_configs').select('*').eq('id', reward.booster_config_id).single()
    const { data: rates } = await supabase.from('booster_drop_rates').select('*').eq('booster_id', reward.booster_config_id)
    if (!cfg) throw new Error('Booster introuvable (peut-être supprimé depuis).')

    const b = dbToUI({ ...cfg, rates })
    let newCards = []
    if (b.type === 'formation') newCards = await openFormationBooster(profile, 0)
    else if (b.type === 'game_changer') newCards = await openGCBooster(profile, b.cardCount, 0)
    else if (b.type === 'player') newCards = await openPlayersBooster(profile, b.cardCount, 0)
    else newCards = await openMixedBooster(profile, { ...b, cost: 0 })

    return { type: 'booster', name: cfg.name, cards: newCards, boosterUI: b }
  }

  throw new Error('Type de récompense inconnu.')
}

export async function renderBoosters(container, { state, navigate, toast }) {
  ensureV2Chrome(navigate, state.profile, 'boosters', import.meta.env.BASE_URL + 'icons/', toast)
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
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
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
      const hideLoader = showBoosterLoader()
      try {
        await openBooster(booster, { state, toast, navigate, container })
      } catch(err) {
        toast(err.message, 'error')
        el.style.opacity = ''; el.style.pointerEvents = ''
      } finally {
        hideLoader()
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

// Popup de chargement affiché pendant la préparation du booster (tirage +
// insertion des cartes en base). Malgré l'optimisation des requêtes, l'appel
// réseau reste incompressible sur une connexion lente : ce feedback évite
// à l'utilisateur de penser que le bouton n'a pas répondu.
function showBoosterLoader() {
  const ov = document.createElement('div')
  ov.id = 'booster-loader-overlay'
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(10,22,40,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3500;gap:16px;color:#fff'
  ov.innerHTML = `
    <style>
      @keyframes boosterSpin { to { transform:rotate(360deg) } }
      .booster-spinner { width:48px;height:48px;border:4px solid rgba(255,255,255,0.2);border-top-color:#D4A017;border-radius:50%;animation:boosterSpin .8s linear infinite }
    </style>
    <div class="booster-spinner"></div>
    <div style="font-size:16px;font-weight:800">🎁 Booster en cours de préparation…</div>`
  document.body.appendChild(ov)
  return () => ov.remove()
}

async function openBooster(booster, { state, toast, navigate, container }) {
  if (booster.cost > 0 && state.profile.credits < booster.cost) {
    toast('Crédits insuffisants', 'error'); return
  }

  // Vérification du quota AU MOMENT DE L'OUVERTURE (pas seulement à la
  // construction de la liste boutique). Jusqu'ici, un booster à quota
  // n'était filtré que dans loadActiveBoosters() ; le bouton "Ouvrir un
  // autre booster" (écran de fin) rappelle openBooster() directement, sans
  // repasser par cette liste, ce qui permettait de dépasser le quota
  // (observé : 6 ouvertures pour une limite de 3).
  if (booster._boosterId) {
    const maxPerUser = booster._raw?.max_per_user ?? null
    if (maxPerUser != null) {
      const { count } = await supabase
        .from('booster_claims')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', state.user.id)
        .eq('booster_id', booster._boosterId)
      if ((count || 0) >= maxPerUser) {
        toast(`Quota atteint pour ce booster (${maxPerUser} max.)`, 'error')
        return
      }
    }
  }

  if (booster.isPub) {
    if (!(await isFeatureEnabled('pub_mode'))) { showFeatureDisabledPopup(); return }
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

  // Journaliser l'ouverture (pour Admin > Managers > onglet Boosters)
  logBoosterOpening(state.profile.id, booster, newCards)

  // Lancer l'animation FIFA (reopenCtx permet de rouvrir un booster
  // identique directement depuis l'écran de fin)
  showBoosterAnimation(newCards, booster, navigate, null, { state, toast, container })
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
    profile.credits -= booster.cost
    syncV2Credits(profile.credits)
  }
  const allowDup = booster.allow_duplicates !== false  // true par défaut

  // ── Préchargement UNIQUE de chaque table nécessaire ────────────────────
  // Avant cette réécriture, chaque carte tirée déclenchait sa propre requête
  // réseau (players/gc_definitions/stadium_definitions) PUIS son propre
  // insert individuel dans `cards` — jusqu'à ~20 allers-retours séquentiels
  // pour un booster de 10 cartes (d'où les 10-15 secondes observées). On
  // charge maintenant chaque ressource une seule fois, on tire tout en
  // mémoire, et on insère toutes les cartes en un seul appel groupé.
  const rates = booster.rates || []
  const needsPlayers = rates.some(r => r.card_type === 'player')
  const needsGC      = rates.some(r => r.card_type === 'game_changer')
  const needsStadium = rates.some(r => r.card_type === 'stadium')

  let ownedCards = []
  const { data: oc1, error: ocErr } = await supabase.from('cards')
    .select('player_id, card_type, formation, stadium_id, gc_type').eq('owner_id', profile.id)
  if (ocErr) {
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

  const [allPlayersRes, gcPoolRes, stadPoolRes] = await Promise.all([
    needsPlayers
      ? supabase.from('players')
          .select('id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)')
          .eq('is_active', true)
      : Promise.resolve({ data: [] }),
    needsGC
      ? supabase.from('gc_definitions').select('id,name,color,effect,image_url,gc_type').eq('is_active',true).eq('gc_type','game_changer')
      : Promise.resolve({ data: [] }),
    needsStadium
      ? supabase.from('stadium_definitions').select('id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)')
      : Promise.resolve({ data: [] }),
  ])
  const allPlayers = allPlayersRes.data || []
  const gcPoolAll  = (gcPoolRes.data?.length ? gcPoolRes.data
    : [{name:'Ressusciter'},{name:'Double attaque'},{name:'Bouclier'},{name:'Vol de note'},{name:'Gel'}])
  const stadPoolAll = stadPoolRes.data || []

  const normRarity = (r) => ({ 'légende':'legende', 'pépite':'pepite', 'pépites':'pepite' }[r] || r)
  const drawnThisBooster = new Set()  // joueurs déjà tirés dans CE booster
  const toInsert = []   // toutes les cartes à insérer, en une seule fois à la fin
  const meta = []        // infos annexes par carte insérée (player/def/isDuplicate), même ordre que toInsert

  for (let i = 0; i < (booster.cardCount||5); i++) {
    const rate = rollDropRate(rates)
    if (!rate) continue

    if (rate.card_type === 'player') {
      const wantedRarity = rate.rarity ? normRarity(rate.rarity) : null
      let pool = wantedRarity ? allPlayers.filter(p => p.rarity === wantedRarity) : allPlayers
      if (rate.note_min || rate.note_max) {
        const withNote = pool.filter(p => {
          const best = Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0)
          return (!rate.note_min || best >= rate.note_min) && (!rate.note_max || best <= rate.note_max)
        })
        // Contrainte note trop stricte pour ce pool -> repli sur la rareté seule (jamais toute la DB au hasard)
        pool = withNote.length ? withNote : pool
      }
      if (!pool.length) continue

      let pickPool = pool.filter(p => !drawnThisBooster.has(p.id))
      if (!allowDup) {
        pickPool = pickPool.filter(p => !ownedPlayerIds.has(p.id))
        if (!pickPool.length) continue
      } else if (!pickPool.length) {
        pickPool = pool
      }
      const player = pickPool[Math.floor(Math.random()*pickPool.length)]
      drawnThisBooster.add(player.id)
      toInsert.push({ owner_id:profile.id, player_id:player.id, card_type:'player' })
      meta.push({ kind:'player', player, isDuplicate: ownedPlayerIds.has(player.id) })

    } else if (rate.card_type === 'game_changer') {
      const gcFiltered = !allowDup ? gcPoolAll.filter(g => !ownedGCTypes.has(g.name)) : gcPoolAll
      if (!allowDup && !gcFiltered.length) continue
      const gcPick = gcFiltered[Math.floor(Math.random()*gcFiltered.length)]
      toInsert.push({ owner_id:profile.id, card_type:'game_changer', gc_type: gcPick.name, gc_definition_id: gcPick.id || null })
      meta.push({ kind:'gc', gcDef: gcPick })

    } else if (rate.card_type === 'formation') {
      const formations = ALL_FORMATIONS()
      const formPool = !allowDup ? formations.filter(f => !ownedFormations.has(f)) : formations
      if (!allowDup && !formPool.length) continue
      const formation = formPool[Math.floor(Math.random()*formPool.length)]
      toInsert.push({ owner_id:profile.id, card_type:'formation', formation })
      meta.push({ kind:'formation', isDuplicate: ownedFormations.has(formation) })

    } else if (rate.card_type === 'stadium') {
      if (!stadPoolAll.length) { console.warn('[Booster] Aucun stade en DB'); continue }
      const stadPool = !allowDup ? stadPoolAll.filter(s => !ownedStadiumIds.has(s.id)) : stadPoolAll
      if (!allowDup && !stadPool.length) continue
      const stadDef = stadPool[Math.floor(Math.random()*stadPool.length)]
      toInsert.push({ owner_id:profile.id, card_type:'stadium', stadium_id: stadDef.id })
      meta.push({ kind:'stadium', stadDef })
    }
  }

  if (!toInsert.length) return []

  // Un seul insert groupé pour toutes les cartes du booster (au lieu d'un
  // insert par carte). L'ordre de retour de Supabase suit l'ordre d'insertion.
  const { data: created, error: insErr } = await supabase.from('cards').insert(toInsert).select()
  if (insErr || !created?.length) { console.error('[Booster] insert cartes:', insErr?.message); return [] }

  const results = created.map((card, i) => {
    const m = meta[i]
    if (m.kind === 'player')    { return { ...card, player: m.player, isDuplicate: m.isDuplicate } }
    if (m.kind === 'gc')        { return { ...card, _gcDef: m.gcDef } }
    if (m.kind === 'formation') { return { ...card, isDuplicate: m.isDuplicate } }
    if (m.kind === 'stadium')   { return { ...card, rarity:'normal', _stadiumDef: m.stadDef } }
    return card
  })

  // Transferts : fire-and-forget (non bloquant), uniquement pour les joueurs
  results.forEach((r, i) => {
    if (meta[i].kind !== 'player') return
    supabase.rpc('record_transfer', {
      p_card_id: r.id, p_player_id: meta[i].player.id,
      p_club_name: profile.club_name || profile.pseudo,
      p_manager_name: profile.pseudo,
      p_source: 'booster', p_price: null
    }).then(()=>{}).catch(()=>{})
  })

  return results
}

async function openPlayersBooster(profile, count, cost) {
  if (cost > 0) {
    const { error } = await supabase.from('users')
      .update({ credits: profile.credits - cost }).eq('id', profile.id)
    if (error) throw error
    profile.credits -= cost
    syncV2Credits(profile.credits)
  }

  const { data: players } = await supabase
    .from('players')
    .select('id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)')
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
  profile.credits -= cost
  syncV2Credits(profile.credits)

  // Charger les GC actifs depuis la DB (ou fallback hardcodé)
  const { data: dbGC } = await supabase.from('gc_definitions')
    .select('id,name,gc_type,color,effect,image_url').eq('is_active', true)
  const pool = dbGC?.length ? dbGC : Object.keys(GC_DEFS).map(name => ({ name, gc_type:'game_changer' }))

  const picks = Array.from({ length: count }, () => pool[Math.floor(Math.random() * pool.length)])
  const inserts = picks.map(pick => ({
    owner_id:         profile.id,
    card_type:        'game_changer',
    gc_type:          pick.name,                // nom = identifiant de l'effet
    gc_definition_id: pick.id || null,          // référence DB si dispo
  }))
  const { data: created, error: gcErr } = await supabase.from('cards').insert(inserts).select()
  if (gcErr) console.error('[Booster GC] Erreur insert:', gcErr.message, gcErr)
  // Attacher directement la définition RÉELLEMENT piochée (pool), pas une
  // re-recherche dans dbGC qui peut être vide si le fallback a été utilisé
  // — c'était le bug : image/description jamais affichées côté révélation.
  const withDefs = (created||[]).map((card, i) => ({ ...card, _gcDef: picks[i] || null }))
  return withDefs
}

async function openFormationBooster(profile, cost) {
  const { error } = await supabase.from('users')
    .update({ credits: profile.credits - cost }).eq('id', profile.id)
  if (error) throw error
  profile.credits -= cost
  syncV2Credits(profile.credits)

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

// ── Booster Stade DB (taux configurés en admin) ────────────
async function openStadiumBooster(profile, cost) {
  if (cost > 0) {
    const { error } = await supabase.from('users')
      .update({ credits: profile.credits - cost }).eq('id', profile.id)
    if (error) throw error
    profile.credits -= cost
    syncV2Credits(profile.credits)
  }

  // Détecter doublon (stade déjà possédé)
  const { data: ownedS } = await supabase.from('cards')
    .select('stadium_id').eq('owner_id', profile.id).eq('card_type', 'stadium')
  const ownedStadiums = new Set((ownedS||[]).map(c => c.stadium_id).filter(Boolean))

  const { data: allStadiums } = await supabase.from('stadium_definitions').select('*')
  if (!allStadiums?.length) throw new Error('Aucun stade configuré en base.')

  const chosen = allStadiums[Math.floor(Math.random() * allStadiums.length)]
  const isDup = ownedStadiums.has(chosen.id)
  const { data: created, error: insertErr } = await supabase.from('cards')
    .insert({ owner_id: profile.id, card_type: 'stadium', stadium_id: chosen.id }).select()
  if (insertErr) console.error('[Booster Stade] Erreur insert:', insertErr.message, insertErr)
  return (created || []).map(c => ({ ...c, isDuplicate: isDup, _stadiumDef: chosen }))
}

// ── Animation FIFA ─────────────────────────────────────────
// Phase 1 : booster qui tremble et s'ouvre
// Phase 2 : les cartes apparaissent une par une avec flip

// Journalise l'ouverture d'un booster (aucune trace n'existait auparavant :
// ni le nombre d'ouvertures, ni leur contenu). Best-effort : une erreur ici
// ne doit jamais empêcher le joueur de voir ses cartes.
async function logBoosterOpening(userId, booster, cards) {
  try {
    const snapshot = (cards || []).map(c => ({
      card_type: c.card_type,
      name: c.card_type === 'player'
        ? [c.player?.firstname, c.player?.surname_real].filter(Boolean).join(' ')
        : (c._stadiumDef?.name || c._gcDef?.name || c.formation || c.gc_type || null),
      rarity: c.player?.rarity || null,
      note: c.current_note ?? null,
      is_duplicate: !!c.isDuplicate,
    }))
    await supabase.from('booster_openings').insert({
      user_id: userId,
      booster_name: booster?.name || null,
      booster_type: booster?.type || null,
      cards: snapshot,
      nb_cards: snapshot.length,
    })
  } catch (e) {
    console.warn('[Booster] journalisation ignorée:', e?.message)
  }
}

// reopenCtx = { state, toast, container } : uniquement fourni depuis la
// boutique, pour permettre de racheter/rouvrir le MÊME booster directement
// depuis l'écran de fin, sans repasser par la boutique.
export function showBoosterAnimation(cards, booster, navigate, onClose = null, reopenCtx = null) {
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
      <div id="reveal-btns" style="display:none;flex-direction:column;gap:10px;width:100%;max-width:400px;margin-top:4px">
        <button class="btn btn-primary" id="reveal-reopen" style="width:100%"></button>
        <div style="display:flex;flex-direction:row;gap:10px">
          <button class="btn btn-ghost" id="reveal-collection" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Voir ma collection</button>
          <button class="btn btn-ghost" id="reveal-shop" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">🏪 Boutique</button>
        </div>
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

    // Note principale (poste affiché) pour décider du walkout — inclut evolution_bonus
    let mainNote = 0
    if (card.card_type === 'player' && card.player) {
      const p = card.player, j = p.job || 'ATT'
      const baseNote = Number(j==='GK'?p.note_g : j==='DEF'?p.note_d : j==='MIL'?p.note_m : p.note_a) || 0
      mainNote = baseNote + (card.evolution_bonus || 0)
    }

    const paint = (withFireworks) => {
      track.innerHTML = `
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${isLegend?'filter:drop-shadow(0 0 20px #7a28b8)':''}">
          <div style="transform:scale(1.25);transform-origin:center">${buildCardFace(card)}</div>
          ${card.isDuplicate ? `<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>` : ''}
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
    if (firstSeen && card.player?.rarity === 'legende' && card.card_type === 'player' && card.player) {
      playWalkout(card, () => paint(true))
    } else {
      paint(false)
    }
  }

  function playWalkout(card, onDone) {
    walkoutPlaying = true
    const p        = card.player
    const flagUrl  = `https://flagsapi.com/${p.country_code}/flat/64.png`
    const clubLogo = p.clubs?.logo_url
    const faceUrl  = getPortrait(p)
    const job      = p.job || 'ATT'
    const noteVal  = Number(job==='GK'?p.note_g:job==='DEF'?p.note_d:job==='MIL'?p.note_m:p.note_a) || 0
    const evo      = card.evolution_bonus || 0
    const mainNote = noteVal + evo
    const isLeg    = p.rarity === 'legende'
    const isHot    = mainNote >= 18

    const ov    = document.getElementById('walkout-overlay')
    const stage = document.getElementById('walkout-stage')
    if (!ov || !stage) { walkoutPlaying = false; onDone(); return }

    // Musique Légende
    let audio = null
    if (isLeg) {
      audio = playSound(import.meta.env.BASE_URL + 'sounds/Legendary.mp3', 0.8)
    }

    ov.style.display = 'flex'
    const fadeOut = () => {
      const el = stage.firstElementChild
      if (el) { el.classList.remove('wo-in'); el.classList.add('wo-out') }
    }

    const STEP = 1800  // durée par étape en ms
    const GAP  = 400   // pause entre étapes

    // 1) Drapeau
    stage.innerHTML = `<img class="wo-in" src="${flagUrl}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`
    if (navigator.vibrate) navigator.vibrate(30)
    setTimeout(fadeOut, STEP)

    // 2) Logo du club
    setTimeout(() => {
      stage.innerHTML = clubLogo
        ? `<img class="wo-in" src="${clubLogo}" style="max-height:160px;max-width:210px;object-fit:contain">`
        : `<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${(p.clubs?.encoded_name||'CLUB')}</div>`
      if (navigator.vibrate) navigator.vibrate(30)
    }, STEP + GAP)
    setTimeout(fadeOut, STEP*2 + GAP)

    // 3) Face / portrait
    setTimeout(() => {
      stage.innerHTML = faceUrl
        ? `<img class="wo-in" src="${faceUrl}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`
        : `<div class="wo-in" style="font-size:80px">👤</div>`
      if (navigator.vibrate) navigator.vibrate(30)
    }, (STEP + GAP)*2)
    setTimeout(fadeOut, (STEP + GAP)*2 + STEP)

    // 4) Note principale
    const JOB_ACCENT_WO = { GK:'#c0c0c0', DEF:'#e03030', MIL:'#D4A017', ATT:'#3fbf5f' }
    const noteColor = isHot ? '#FFD700' : (JOB_ACCENT_WO[job] || '#fff')
    setTimeout(() => {
      stage.innerHTML = `<div class="wo-in" style="
        font-size:${isHot ? '120px' : '90px'};font-weight:900;color:${noteColor};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${noteColor}, 0 0 60px ${noteColor};
        ${isHot ? 'animation:woGlow 0.8s ease-in-out infinite;' : ''}">
        ${mainNote}
      </div>`
      if (isHot && navigator.vibrate) navigator.vibrate([50, 30, 100, 30, 200])
    }, (STEP + GAP)*3)
    setTimeout(fadeOut, (STEP + GAP)*3 + STEP)

    // 5) Carte complète + feu d'artifice
    setTimeout(() => {
      ov.style.display = 'none'
      stage.innerHTML = ''
      walkoutPlaying = false
      if (audio && !isLeg) audio.pause()
      if (navigator.vibrate) navigator.vibrate([40, 30, 80])
      onDone()
    }, (STEP + GAP)*4)
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
      btnRow.style.flexDirection = 'row'
      btnRow.innerHTML = `<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>`
    }
    document.getElementById('reveal-next')?.addEventListener('click', () => {
      stopFireworks(); overlay.remove(); onClose()
    })
  } else {
    const reopenBtn = document.getElementById('reveal-reopen')
    const cost = booster.cost || 0
    const currentCredits = Number(reopenCtx?.state?.profile?.credits) || 0
    const canAfford = !cost || currentCredits >= cost

    if (reopenBtn) {
      if (reopenCtx) {
        reopenBtn.textContent = `🎁 Ouvrir un autre booster${cost ? ` (${cost.toLocaleString('fr')} cr.)` : ''}`
        const disable = (reason) => {
          reopenBtn.disabled = true
          reopenBtn.style.opacity = '0.45'; reopenBtn.style.cursor = 'not-allowed'
          if (reason) reopenBtn.title = reason
        }
        if (!canAfford) disable('Crédits insuffisants')

        // Vérifie aussi le quota AVANT d'afficher le bouton comme cliquable
        // (le clic re-vérifie de toute façon côté serveur dans openBooster,
        // mais autant éviter d'afficher un bouton actif qui échouera à coup sûr)
        const maxPerUser = booster._raw?.max_per_user ?? null
        if (canAfford && maxPerUser != null && reopenCtx?.state?.user?.id) {
          supabase.from('booster_claims')
            .select('id', { count: 'exact', head: true })
            .eq('user_id', reopenCtx.state.user.id)
            .eq('booster_id', booster._boosterId)
            .then(({ count }) => {
              if ((count || 0) >= maxPerUser) disable(`Quota atteint (${maxPerUser} max.)`)
            })
        }

        reopenBtn.addEventListener('click', () => {
          if (reopenBtn.disabled) return
          stopFireworks(); overlay.remove()
          const hideLoader = showBoosterLoader()
          openBooster(booster, { state: reopenCtx.state, toast: reopenCtx.toast, navigate, container: reopenCtx.container })
            .finally(hideLoader)
        })
      } else {
        // Pas de contexte (ne devrait pas arriver hors onboarding) : repli sur la boutique
        reopenBtn.textContent = '🎁 Ouvrir un autre booster'
        reopenBtn.addEventListener('click', () => { stopFireworks(); overlay.remove(); navigate('boosters') })
      }
    }

    document.getElementById('reveal-collection').addEventListener('click', () => {
      stopFireworks(); overlay.remove(); navigate('collection')
    })
    document.getElementById('reveal-shop').addEventListener('click', () => {
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
    const name   = def?.name   || card.gc_type || 'Game Changer'
    const effect = def?.effect || GC_DEFS[card.gc_type]?.desc || ''
    const imgUrl = def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null
    const fallback = GC_DEFS[card.gc_type]?.icon || '⚡'
    return renderGCCard(name, imgUrl, fallback, effect, { width: 170 })
  }

  if (card.card_type === 'formation') {
    return renderFormationCard(card.formation, FORMATION_POSITIONS[card.formation], { width: 160 })
  }

  if (card.card_type === 'stadium') {
    const def = card._stadiumDef
    const name  = def?.name  || 'Stade'
    const label = def?.club?.encoded_name || def?.country_code || '—'
    const imgUrl = def?.image_url
      ? `${import.meta.env.BASE_URL}icons/${def.image_url}`
      : (def?.club?.logo_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null))
    const desc = `${label}<br>+10 ⭐ joueurs alliés`
    return renderStadiumCard(name, imgUrl, desc, { width: 170 })
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
      position:fixed;inset:0;background:rgba(0,0,0,0.92);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px;
    `
    overlay.innerHTML = `
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:60vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Ton booster arrive dans <span id="mw-ad-cd">5</span>s…</div>
    `
    document.body.appendChild(overlay)

    // Déclenche le rendu de la pub AdSense
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) { console.warn('[AdSense]', e) }

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
  let batchRemaining = 0   // combien d'items encore à ouvrir avant de revenir à la liste

  // Regroupement pour l'affichage : les 4 boosters Joueurs comptent comme
  // UNE ligne (retour Thomas : "un bouton par booster à ouvrir" — les 4
  // identiques n'ont pas besoin de 4 boutons séparés), les 3 autres types
  // restent chacun leur propre ligne.
  const REWARD_GROUPS = [
    { type: 'player',       label: '4 Boosters Joueurs',  icon: `${import.meta.env.BASE_URL}icons/booster-players.png` },
    { type: 'stadium',      label: 'Booster Stade',        icon: `${import.meta.env.BASE_URL}icons/booster-stade.png` },
    { type: 'formation',    label: 'Booster Formation',    icon: `${import.meta.env.BASE_URL}icons/booster-formation.png` },
    { type: 'game_changer', label: 'Booster Game Changer', icon: `${import.meta.env.BASE_URL}icons/booster-gamechanger.png` },
  ]

  async function fetchTutorialSteps() {
    const { data: rpcData, error: rpcErr } = await supabase.rpc('get_tutorial_steps')
    if (!rpcErr && rpcData?.length > 0) return rpcData.map(s => ({ emoji: s.emoji, title: s.title, color: s.color, content: s.content, image_url: s.image_url || null }))
    const { data: directData } = await supabase.from('tutorial_steps').select('*').eq('is_active', true).order('step_order')
    if (directData?.length > 0) return directData.map(s => ({ emoji: s.emoji, title: s.title, color: s.color, content: s.content, image_url: s.image_url || null }))
    return null   // showTutorial retombe sur ses étapes locales par défaut si null n'est pas géré ; on gère ce cas à l'appel
  }

  function renderRewardsList() {
    const tutoDone = !!state.profile.tutorial_done
    const remaining = REWARD_GROUPS.filter(g => queue.some(q => q.type === g.type))
    const doneCount = REWARD_GROUPS.length - remaining.length

    container.innerHTML = `
    <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
      <div style="max-width:440px;width:100%;background:rgba(0,0,0,0.35);border:1px solid rgba(255,215,0,0.35);border-radius:16px;padding:20px;color:#fff">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:2px">
          <span style="font-size:26px">🎁</span>
          <h2 style="font-size:19px;font-weight:900;margin:0">Tes récompenses</h2>
        </div>
        <p style="font-size:12.5px;color:rgba(255,255,255,0.55);margin:0 0 16px">
          ${remaining.length} récompense${remaining.length>1?'s':''} à récupérer${!tutoDone ? ' — termine le tutoriel pour les débloquer' : ''}
        </p>

        <div id="reward-row-tuto" style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;
          background:rgba(255,255,255,0.06);margin-bottom:10px">
          <div style="width:44px;height:44px;border-radius:10px;background:rgba(255,215,0,0.15);display:flex;align-items:center;justify-content:center;font-size:22px">🎓</div>
          <div style="flex:1">
            <div style="font-weight:800;font-size:14px">Tutoriel</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.5)">${tutoDone ? 'Terminé ✅' : 'À faire pour débloquer tes boosters'}</div>
          </div>
          <button class="btn btn-sm" id="btn-do-tutorial" style="background:${tutoDone?'rgba(255,255,255,0.12)':'#1A6B3C'};color:#fff;border:none;font-weight:700;white-space:nowrap">
            ${tutoDone ? 'Revoir' : 'Faire le tutoriel'}
          </button>
        </div>

        ${remaining.map(g => `
        <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;
          background:rgba(255,255,255,0.06);margin-bottom:10px;opacity:${tutoDone?'1':'0.45'}">
          <img src="${g.icon}" style="width:44px;height:44px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1">
            <div style="font-weight:800;font-size:14px">${g.label}</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.5)">${tutoDone ? 'Prêt à ouvrir' : 'Verrouillé'}</div>
          </div>
          <button class="btn btn-sm reward-open-btn" data-type="${g.type}" ${tutoDone?'':'disabled'}
            style="background:${tutoDone?'#1A6B3C':'rgba(255,255,255,0.1)'};color:#fff;border:none;font-weight:700;
            cursor:${tutoDone?'pointer':'not-allowed'};white-space:nowrap">
            ${tutoDone ? 'Ouvrir 🎉' : '🔒'}
          </button>
        </div>`).join('')}

        ${doneCount > 0 ? `<div style="font-size:11px;color:rgba(255,255,255,0.4);text-align:center;margin-top:4px">${doneCount} déjà récupérée${doneCount>1?'s':''} ✅</div>` : ''}
      </div>
    </div>`

    document.getElementById('btn-do-tutorial')?.addEventListener('click', async () => {
      const steps = await fetchTutorialSteps()
      showTutorial(state.profile, steps || TUTORIAL_FALLBACK_STEPS, async () => {
        await supabase.from('users').update({ tutorial_done: true }).eq('id', state.user.id)
        if (refreshProfile) await refreshProfile()
        const { data: p } = await supabase.from('users').select('*').eq('id', state.user.id).single()
        if (p) state.profile = p
        renderRewardsList()
      })
    })

    container.querySelectorAll('.reward-open-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return
        const type = btn.dataset.type
        batchRemaining = queue.filter(q => q.type === type).length
        openNext()
      })
    })
  }

  renderRewardsList()

  const persistQueue = async () => {
    await supabase.from('users').update({ pending_boosters: queue }).eq('id', state.user.id)
  }

  async function openNext() {
    if (!queue.length) {
      // Terminé : plus rien à ouvrir
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
      } else if (spec.type === 'stadium') {
        newCards = await openStadiumBooster(state.profile, 0)
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
      : spec.type === 'stadium'
      ? { name: 'Booster Stade', type: 'stadium', img: `${import.meta.env.BASE_URL}icons/booster-stade.png` }
      : { name: `Booster Joueurs (${index}/${total})`, type: 'player', img: (newPlayerBooster?.img) || `${import.meta.env.BASE_URL}icons/booster-players.png` }

    // Journaliser aussi les boosters de bienvenue (onboarding)
    logBoosterOpening(state.profile.id, fakeBooster, newCards)

    batchRemaining--

    // Enchaîne automatiquement seulement DANS la limite du lot demandé
    // (ex. les 4 boosters Joueurs cliqués ensemble) ; une fois le lot
    // terminé, retour à la liste plutôt que d'ouvrir aussi les autres
    // catégories sans y avoir été invité.
    showBoosterAnimation(newCards, fakeBooster, navigate, () => {
      if (batchRemaining > 0 && queue.length) openNext()
      else if (queue.length) renderRewardsList()
      else openNext()   // file vide -> déclenche le flux "Terminé" ci-dessus
    })
  }
}

// Garantit qu'au moins un GK figure dans le booster : remplace la 1ère carte par un GK.
async function ensureGKInBooster(profile, newCards) {
  try {
    const { data: gks } = await supabase.from('players')
      .select('id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)')
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
