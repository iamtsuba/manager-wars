import { supabase } from '../lib/supabase.js'
import { renderPlayerCard } from '../components/player-card.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, computeLinks, linkColor, getActiveLinks, computeSafeCardWidth } from '../match/formation-links.js'
import { renderStadiumCard, renderFormationCard } from '../components/special-cards.js'
import { getPortrait } from '../lib/portrait.js'
import { ensureV2Chrome } from '../home/home2.js'
import { buildBestDeck } from './auto-deck.js'

// ── Modales in-app (remplacent prompt()/confirm() natifs du navigateur) ──
function showPromptModal(title, defaultValue = '') {
  return new Promise(resolve => {
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'
    overlay.style.zIndex = '2100'
    overlay.innerHTML = `<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${title}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(defaultValue||'').replace(/"/g,'&quot;')}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`
    document.body.appendChild(overlay)
    const input = overlay.querySelector('#pm-input')
    input.focus(); input.select()
    const finish = (val) => { overlay.remove(); resolve(val) }
    overlay.querySelector('#pm-ok').addEventListener('click', () => finish(input.value.trim() || null))
    overlay.querySelector('#pm-cancel').addEventListener('click', () => finish(null))
    overlay.querySelector('#pm-cancel2').addEventListener('click', () => finish(null))
    overlay.addEventListener('click', e => { if (e.target === overlay) finish(null) })
    input.addEventListener('keydown', e => { if (e.key === 'Enter') finish(input.value.trim() || null); if (e.key === 'Escape') finish(null) })
  })
}

function showConfirmModal(message, danger = false) {
  return new Promise(resolve => {
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'
    overlay.style.zIndex = '2100'
    overlay.innerHTML = `<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${message}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${danger?'':'btn-primary'}" id="cm-ok" style="${danger?'background:var(--red,#c0392b);color:#fff;border:none':''}">Confirmer</button>
        </div>
      </div>
    </div>`
    document.body.appendChild(overlay)
    const finish = (val) => { overlay.remove(); resolve(val) }
    overlay.querySelector('#cm-ok').addEventListener('click', () => finish(true))
    overlay.querySelector('#cm-cancel').addEventListener('click', () => finish(false))
    overlay.addEventListener('click', e => { if (e.target === overlay) finish(false) })
  })
}

const FORMATIONS = {
  '4-3-3 (3)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '5-3-2':     { GK:1, DEF:5, MIL:3, ATT:2 },
  '4-3-3 (4)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-2-1':   { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3 (2)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3':     { GK:1, DEF:4, MIL:3, ATT:3 },
  '4-3-3 (5)': { GK:1, DEF:4, MIL:3, ATT:3 },
  '5-2-2-1':   { GK:1, DEF:5, MIL:2, ATT:3 },
  '4-3-1-2':   { GK:1, DEF:4, MIL:4, ATT:2 },
  '5-2-1-2':   { GK:1, DEF:5, MIL:3, ATT:2 },
  '4-5-1 (2)': { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-5-1':     { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-4-2':     { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-4-2 (2)': { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-4-1-1':   { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-1-2-1-2':     { GK:1, DEF:4, MIL:4, ATT:2 },
  '3-4-1-2':       { GK:1, DEF:3, MIL:5, ATT:2 },
  '3-4-2-1':       { GK:1, DEF:3, MIL:4, ATT:3 },
  '3-5-2':         { GK:1, DEF:3, MIL:5, ATT:2 },
  '4-1-4-1':       { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-2-2-2':       { GK:1, DEF:4, MIL:4, ATT:2 },
  '4-2-3-1':       { GK:1, DEF:4, MIL:5, ATT:1 },
  '4-2-3-1 (2)':   { GK:1, DEF:4, MIL:5, ATT:1 },
  '3-4-3':         { GK:1, DEF:3, MIL:4, ATT:3 },
  '4-1-2-1-2 (2)': { GK:1, DEF:4, MIL:4, ATT:2 },
}
const JOB_COLORS = { GK:'#111', DEF:'#bb2020', MIL:'#D4A017', ATT:'#1A6B3C' }


function flagImgUrl(code) {
  if (!code || code.length < 2) return null
  return `https://flagsapi.com/${code.slice(0,2).toUpperCase()}/flat/64.png`
}
function getClubLogo(p) {
  const url = import.meta?.env?.VITE_SUPABASE_URL || ''
  if (!p?.clubs?.logo_url) return null
  if (p.clubs.logo_url.startsWith('http')) return p.clubs.logo_url
  return url ? `${url}/storage/v1/object/public/assets/clubs/${p.clubs.logo_url}` : null
}
function renderMiniCardHTML(p, w=44, h=58) {
  const portrait = p ? getPortrait(p) : null
  const logoUrl  = p ? getClubLogo(p) : null
  const flag     = flagImgUrl(p?.country_code)
  const role     = p?.job || 'MIL'
  const jobColor = JOB_COLORS[role] || '#555'
  const rarityBorder = { normal:'#aaa', pepite:'#D4A017', pépite:'#D4A017', papyte:'#222', legende:'#7a28b8', légende:'#7a28b8' }[p?.rarity] || '#aaa'
  const GLOW_C = { legende:'#7a28b8', pepite:'#D4A017', pépite:'#D4A017', papyte:'#909090' }
  const glowMini = GLOW_C[p?.rarity] ? `filter:drop-shadow(0 0 4px ${GLOW_C[p.rarity]}) drop-shadow(0 0 10px ${GLOW_C[p.rarity]});` : ''
  const evo57 = p?._evolution_bonus ?? p?.evolution_bonus ?? 0
  const noteBase57 = Number(role==='GK'?p?.note_g:role==='DEF'?p?.note_d:role==='MIL'?p?.note_m:p?.note_a)||0
  const note = noteBase57 + (role===p?.job||role===p?.job2 ? evo57 : 0)
  const nameH = Math.round(h*0.19), botH = Math.round(h*0.25), portH = h-nameH-botH
  if (!p) return `<div style="width:${w}px;height:${h}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`
  return `<div style="width:${w}px;height:${h}px;border-radius:5px;border:2px solid ${rarityBorder};background:${jobColor};position:relative;overflow:hidden;flex-shrink:0;${glowMini}">
    <div style="position:absolute;top:0;left:0;right:0;height:${nameH}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(w/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${w-4}px">${(p?.surname_real||'').slice(0,9)}</span>
    </div>
    ${portrait?`<img src="${portrait}" style="position:absolute;top:${nameH}px;left:0;width:${w}px;height:${portH}px;object-fit:cover;object-position:top center">`:''}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${botH}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${flag?`<img src="${flag}" style="width:${botH+2}px;height:${botH-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${botH-4}px">🌍</span>`}
      <span style="font-size:${botH-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${note}</span>
      ${logoUrl?`<img src="${logoUrl}" style="width:${botH-4}px;height:${botH-4}px;object-fit:contain">`:(p?.clubs?.encoded_name?`<span style="font-size:${Math.max(4,botH-8)}px;font-weight:700;color:#333">${(p.clubs.encoded_name||'').slice(0,3).toUpperCase()}</span>`:`<span></span>`)}
    </div>
  </div>`
}

function isLandscapeMobile() {
  return window.matchMedia('(max-height: 500px) and (orientation: landscape)').matches
}

export async function renderDecks(container, ctx) {
  const { state, navigate, toast } = ctx
  ensureV2Chrome(navigate, state.profile, 'decks', import.meta.env.BASE_URL + 'icons/', toast)
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: decks } = await supabase
    .from('decks').select('id,name,formation,stadium_card_id')
    .eq('owner_id', state.profile.id).order('created_at', { ascending: false })

  // Récupère l'image du stade lié à chaque deck (via la carte stade -> sa définition)
  const stadiumCardIds = [...new Set((decks||[]).map(d => d.stadium_card_id).filter(Boolean))]
  let stadiumImgByCardId = {}
  if (stadiumCardIds.length) {
    const { data: stadCards } = await supabase
      .from('cards').select('id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))')
      .in('id', stadiumCardIds)
    ;(stadCards||[]).forEach(c => {
      const def = c.stadium_definitions
      const img = def?.club?.logo_url
        || (def?.image_url ? `${import.meta.env.BASE_URL}icons/${def.image_url}` : null)
        || (def?.country_code ? `https://flagsapi.com/${def.country_code}/flat/64.png` : null)
      stadiumImgByCardId[c.id] = img
    })
  }

  container.innerHTML = `
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${decks?.length || 0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${decks?.length > 0 ? decks.map(d => `
          <div class="card-panel" data-open-deck="${d.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
              ${stadiumImgByCardId[d.stadium_card_id]
                ? `<img src="${stadiumImgByCardId[d.stadium_card_id]}" style="width:32px;height:32px;object-fit:contain;border-radius:6px;flex-shrink:0;background:rgba(255,255,255,0.06)">`
                : `<div style="width:32px;height:32px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:16px;opacity:.4">🏟️</div>`
              }
              <div style="min-width:0">
                <div style="font-weight:700;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name}</div>
                <div style="font-size:11px;color:var(--tile-fg-dim)">${d.formation || '—'}</div>
              </div>
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${d.id}" data-name="${d.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${d.id}" data-name="${d.name}">🗑️</button>
            </div>
          </div>`).join('')
        : '<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`

  document.getElementById('new-deck-btn').addEventListener('click', async () => {
    const name = await showPromptModal('Nom du deck', `Deck ${(decks?.length||0)+1}`)
    if (!name) return
    const { data, error } = await supabase.from('decks')
      .insert({ owner_id: state.profile.id, name })
      .select().single()
    if (error) { toast(error.message, 'error'); return }
    toast('Deck créé !', 'success')
    openDeckBuilder(data.id, container, ctx)
  })

  // Clic sur la carte → ouvre le builder
  container.querySelectorAll('[data-open-deck]').forEach(el => {
    el.addEventListener('click', () => openDeckBuilder(el.dataset.openDeck, container, ctx))
  })

  // Renommer
  container.querySelectorAll('[data-rename]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const newName = await showPromptModal('Nouveau nom', btn.dataset.name)
      if (!newName || newName === btn.dataset.name) return
      const { error } = await supabase.from('decks').update({ name: newName }).eq('id', btn.dataset.rename)
      if (error) { toast(error.message, 'error'); return }
      toast('Deck renommé !', 'success')
      renderDecks(container, ctx)
    })
  })

  // Supprimer
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!await showConfirmModal(`Supprimer le deck "${btn.dataset.name}" ? Cette action est irréversible.`, true)) return
      await supabase.from('deck_cards').delete().eq('deck_id', btn.dataset.delete)
      const { error } = await supabase.from('decks').delete().eq('id', btn.dataset.delete)
      if (error) { toast(error.message, 'error'); return }
      toast('Deck supprimé.', 'success')
      renderDecks(container, ctx)
    })
  })
}

// ── Deck Builder ──────────────────────────────────────────
export async function openDeckBuilder(deckId, container, ctx) {
  const { state, toast } = ctx
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: deck } = await supabase.from('decks').select('*').eq('id', deckId).single()

  // Query séparée pour éviter qu'une erreur stade casse toutes les cartes
  const { data: cards } = await supabase
    .from('cards')
    .select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`)
    .eq('owner_id', state.profile.id)

  const { data: stadiumCards2 } = await supabase
    .from('cards')
    .select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`)
    .eq('owner_id', state.profile.id)
    .eq('card_type', 'stadium')

  const playerCards    = (cards||[]).filter(c => c.card_type === 'player' && c.player)
  const formationCards = (cards||[]).filter(c => c.card_type === 'formation')
  const stadiumCards   = (stadiumCards2||[]).filter(c => c.card_type === 'stadium')

  // Construire stadDefMap depuis les cartes déjà jointes
  const stadIds = [...new Set(stadiumCards.map(c=>c.stadium_id).filter(Boolean))]
  let stadDefMap = {}
  stadiumCards.forEach(c => { if (c.stadium_def && c.stadium_id) stadDefMap[c.stadium_id] = c.stadium_def })
  // Compléter si des defs manquent
  if (stadIds.length && Object.keys(stadDefMap).length < stadIds.length) {
    const { data: stadDefs } = await supabase
      .from('stadium_definitions')
      .select('id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)')
      .in('id', stadIds)
    ;(stadDefs||[]).forEach(d => { stadDefMap[d.id] = d })
  }

  // Formations disponibles dans la collection
  const availableFormations = formationCards.map(c => c.formation).filter(Boolean)

  const { data: deckSlots } = await supabase
    .from('deck_cards').select('card_id, position, is_starter, slot_order, wanted_player_id').eq('deck_id', deckId)

  // Formation par défaut : utiliser une disponible ou la première dispo
  let defaultFormation = deck.formation || '4-4-2'
  if (availableFormations.length > 0 && !availableFormations.includes(defaultFormation)) {
    defaultFormation = availableFormations[0]
  }

  const builder = {
    deckId, name: deck.name,
    formation: defaultFormation,
    formationCardId: deck.formation_card_id,
    stadiumCardId: deck.stadium_card_id || null,
    slots: {},    // position → cardId (titulaires possédés)
    wanted: {},   // position → player_id (titulaires NON possédés, "à acheter")
    subs: [],     // [ cardId, cardId, ... ] max 5
    playerCards, formationCards, stadiumCards, stadDefMap, availableFormations,
    _playersCache: {},   // player_id → données joueur (pour l'affichage des cartes grisées)
  }

  ;(deckSlots||[]).forEach(dc => {
    if (dc.wanted_player_id) {
      if (dc.is_starter) builder.wanted[dc.position] = dc.wanted_player_id
      return
    }
    if (dc.is_starter) builder.slots[dc.position] = dc.card_id
    else if (!builder.subs.includes(dc.card_id)) builder.subs.push(dc.card_id)
  })

  // Précharger les infos des joueurs "désirés" pour pouvoir afficher leur
  // carte grisée sur le terrain sans attendre l'ouverture du sélecteur.
  const wantedIds = [...new Set(Object.values(builder.wanted))]
  if (wantedIds.length) {
    const { data: wantedPlayers } = await supabase
      .from('players')
      .select('id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)')
      .in('id', wantedIds)
    ;(wantedPlayers||[]).forEach(p => { builder._playersCache[p.id] = p })
  }

  renderBuilder(container, builder, ctx, true)
}

function renderBuilder(container, builder, ctx, isInitialRender = false) {
  const { navigate } = ctx
  if (!isInitialRender) scheduleAutosave(builder, ctx)
  const struct    = FORMATIONS[builder.formation]
  const positions = buildPositions(builder.formation)
  // Un slot "désiré" (joueur non possédé, carte grisée) compte comme occupé
  // pour permettre l'enregistrement du deck — il reste toutefois signalé
  // comme incomplet tant qu'il n'a pas été résolu par un achat.
  const filled      = positions.filter(p => builder.slots[p] || builder.wanted[p]).length
  const wantedCount = positions.filter(p => builder.wanted[p]).length

  // Formations disponibles uniquement (Petit 1)
  const formationOptions = builder.availableFormations.length > 0
    ? builder.availableFormations
    : Object.keys(FORMATIONS) // fallback si aucune carte formation

  // Stade sélectionné pour bonus +10
  const _selStadCard = builder.stadiumCards?.find(c => c.id === builder.stadiumCardId)
  const _stadDef = _selStadCard ? (builder.stadDefMap?.[_selStadCard.stadium_id] || null) : null

  // Calcul des remplaçants avec données joueurs
  const subPlayers = builder.subs.map(id => builder.playerCards.find(c => c.id === id)).filter(Boolean)
  // Purge les références obsolètes (carte vendue/supprimée depuis) pour que le compteur et le bouton "+" restent cohérents
  if (subPlayers.length !== builder.subs.length) {
    builder.subs = subPlayers.map(c => c.id)
  }
  const allUsed    = [...Object.values(builder.slots), ...builder.subs]
  const isLandscapeTpl = window.innerWidth < 900 && isLandscapeMobile()

  container.innerHTML = `
  <style>
    .no-scrollbar::-webkit-scrollbar{display:none}

    /* ══ Paysage mobile : remplaçants à gauche, terrain au milieu,
       formation + stade + boutons empilés à droite. On utilise
       "display:contents" en cascade pour faire remonter les sections
       imbriquées (remplaçants/formation/stade) comme enfants directs
       de la grille de #deck-builder-outer, sans toucher au DOM ni au
       calcul JS du terrain. ══ */
    @media (max-height: 500px) and (orientation: landscape) {
      #deck-builder-outer {
        display: grid !important;
        grid-template-columns: 110px 1fr 90px;
        grid-template-rows: auto 1fr 1fr auto;
        height: 100% !important; overflow: hidden !important;
      }
      #deck-builder-outer > .page-header { grid-column: 1 / 4 !important; grid-row: 1 !important; }

      /* Remonte : deck-mobile-layout → bottom-bar wrapper → row flex */
      .deck-mobile-layout { display: contents !important; }
      .deck-mobile-layout > div:nth-child(2) { display: contents !important; }
      .deck-mobile-layout > div:nth-child(2) > div { display: contents !important; }

      /* Terrain (1er enfant de deck-mobile-layout) : colonne du milieu, pleine hauteur */
      .deck-mobile-layout > div:first-child {
        grid-column: 2 !important; grid-row: 2 / 5 !important;
        display: flex !important; align-items: center !important; justify-content: center !important;
        height: 100% !important; min-height: 0 !important;
      }

      /* Remplaçants (1re section promue) : colonne gauche, pleine hauteur, scroll vertical */
      .deck-mobile-layout > div:nth-child(2) > div > div:nth-child(1) {
        grid-column: 1 !important; grid-row: 2 / 5 !important;
        height: 100% !important; overflow-y: auto !important; overflow-x: hidden !important;
        box-sizing: border-box !important; padding: 4px !important; scrollbar-width: none !important;
      }
      .deck-mobile-layout > div:nth-child(2) > div > div:nth-child(1)::-webkit-scrollbar { display: none; }
      .deck-mobile-layout > div:nth-child(2) > div > div:nth-child(1) #subs-list {
        display: grid !important; grid-template-columns: repeat(2, 1fr) !important;
        overflow-x: hidden !important; overflow-y: visible !important;
        justify-items: center !important; gap: 6px !important;
      }

      /* Formation (2e section promue) : colonne droite, ligne 2 */
      .deck-mobile-layout > div:nth-child(2) > div > div:nth-child(2) {
        grid-column: 3 !important; grid-row: 2 !important;
      }

      /* Stade (3e section promue) : colonne droite, ligne 3 */
      .deck-mobile-layout > div:nth-child(2) > div > div:nth-child(3) {
        grid-column: 3 !important; grid-row: 3 !important;
      }

      /* Boutons (Auto Deck + Enregistrer) : colonne droite, ligne 4, empilés,
         même largeur que la carte Stade (70px, cf. stadW plus haut) */
      #deck-builder-outer > .page-body {
        grid-column: 3 !important; grid-row: 4 !important;
        display: flex !important; flex-direction: column !important; align-items: center !important; gap: 5px !important;
        padding: 4px !important; box-sizing: border-box !important;
      }
      #deck-builder-outer > .page-body .auto-deck-btn,
      #deck-builder-outer > .page-body #save-deck {
        font-size: 9px !important; padding: 6px 2px !important; margin: 0 !important;
        width: 70px !important; max-width: 70px !important; box-sizing: border-box !important;
      }
      #deck-builder-outer > .page-body .autosave-indicator { display: none !important; }
    }
  </style>
  <div id="deck-builder-outer" style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${builder.name}</h2>
        <p style="font-size:11px;margin:0">${filled}/11 · ${subPlayers.length}/5 rempl.${wantedCount ? ` · <span style="color:#D4A017;font-weight:700">⚠️ ${wantedCount} à acheter</span>` : ''}</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${subPlayers.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${subPlayers.map(card => {
              const p = { ...card.player, _evolution_bonus: card.evolution_bonus || 0 }
              return `<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${renderPlayerCard({ ...p, _evolution_bonus: p._evolution_bonus||0 }, { width: 90, showStad: true, stadDef: _stadDef, context: 'formation' })}
                <button data-remove-sub="${card.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`
            }).join('')}
            ${subPlayers.length < 5 ? `<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>` : ''}
          </div>
        </div>

        <!-- Terrain PC (colonne centrale) -->
        <div style="flex:1;background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden;height:700px">
          <div id="deck-field-pc" style="margin-top:50px"></div>
        </div>

        <!-- Formation + Stade (colonne droite) -->
        <div style="width:130px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 8px;gap:12px;border-left:1px solid rgba(255,255,255,0.1)">
          <!-- Formation -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Formation</div>
            <div id="formation-pc-btn" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${renderFormationCard(builder.formation, FORMATION_POSITIONS[builder.formation], { width: 100 })}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${_selStadCard ? (() => {
                const def = builder.stadDefMap[_selStadCard.stadium_id]
                const logo = def?.club?.logo_url || def?.image_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null)
                return renderStadiumCard(def?.name || 'Stade', logo, '+10 ⭐', { width: 100 })
              })() : `<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
          <style>
            @keyframes autoDeckGlow {
              0%,100% { box-shadow:0 0 6px rgba(212,160,23,.65), 0 0 14px rgba(212,160,23,.4) }
              50%     { box-shadow:0 0 12px rgba(212,160,23,1), 0 0 26px rgba(212,160,23,.7) }
            }
            .auto-deck-btn {
              width:100%; margin-top:8px; cursor:pointer;
              background:linear-gradient(135deg,#f6d365,#D4A017 45%,#f0c040);
              color:#1a1a1a; border:1px solid #ffe9a8; border-radius:10px;
              font-weight:900; font-size:13px; padding:10px 8px;
              animation:autoDeckGlow 1.8s ease-in-out infinite;
            }
            .auto-deck-btn:hover  { filter:brightness(1.08) }
            .auto-deck-btn:disabled { opacity:.5; cursor:not-allowed; animation:none }
          </style>
          <button class="auto-deck-btn" id="auto-deck-pc">✨ Deck Automatique</button>
          <!-- Enregistrer (PC uniquement — plus haut, évite le scroll derrière le grand terrain) -->
          <button class="btn btn-primary" id="save-deck-pc" style="width:100%;margin-top:8px" ${filled < 11 ? 'disabled' : ''}>
            ${filled < 11 ? `Placez encore ${11-filled}` : '💾 Enregistrer'}
          </button>
          <div class="autosave-indicator" style="text-align:center;font-size:11px;color:var(--tile-fg-dim);margin-top:6px;opacity:0;transition:opacity .3s"></div>
        </div>

      </div>
    </div>

    <!-- ── LAYOUT MOBILE ─────────────────────────────────── -->
    <div class="deck-mobile-layout" style="display:none">
      <!-- Terrain mobile -->
      <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden">
        <div id="deck-field-mobile" style="margin-top:30px"></div>
      </div>

      <!-- Remplaçants + Stade mobile -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex;gap:6px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${subPlayers.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${subPlayers.map(card => {
                const p = { ...card.player, _evolution_bonus: card.evolution_bonus || 0 }
                return `<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${renderPlayerCard({ ...p, _evolution_bonus: p._evolution_bonus||0 }, { width: 44, showStad: true, stadDef: _stadDef, context: 'formation' })}
                  <button data-remove-sub="${card.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`
              }).join('')}
              ${subPlayers.length < 5 ? `<div id="add-sub-btn" style="width:44px;height:57px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>` : ''}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            ${!isLandscapeTpl ? `<div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>` : ''}
            <div id="formation-mobile-btn" style="cursor:pointer;${isLandscapeTpl ? 'margin:0 auto;width:fit-content' : 'width:44px;height:57px;border-radius:6px;background:#1A6B3C;border:2px solid #2ecc71;display:flex;align-items:center;justify-content:center'}">
              ${isLandscapeTpl
                ? renderFormationCard(builder.formation, FORMATION_POSITIONS[builder.formation], { width: 70 })
                : `<span style="font-size:8px;font-weight:900;color:#fff;text-align:center;line-height:1.1">${builder.formation}</span>`}
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            ${!isLandscapeTpl ? `<div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>` : ''}
            <div id="add-stad-btn" style="cursor:pointer;${isLandscapeTpl ? 'margin:0 auto;width:fit-content' : ''}">
              ${(() => {
                const stadW = isLandscapeTpl ? 70 : 44
                return _selStadCard ? (() => {
                  const def = builder.stadDefMap[_selStadCard.stadium_id]
                  const logo = def?.club?.logo_url || def?.image_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null)
                  return renderStadiumCard(def?.name || 'Stade', logo, '+10⭐', { width: stadW })
                })() : `<div style="width:${stadW}px;height:${Math.round(stadW*1.3)}px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
                  <span style="font-size:13px">🏟️</span>
                  <span style="font-size:7px;color:rgba(255,255,255,0.4)">+</span>
                </div>`
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body" style="padding:12px 16px calc(80px + env(safe-area-inset-bottom, 0px))">
      <button class="auto-deck-btn" id="auto-deck-mobile" style="margin-bottom:8px;margin-top:0" title="Deck Automatique">${isLandscapeTpl ? '✨' : '✨ Deck Automatique'}</button>
      <button class="btn btn-primary" id="save-deck" style="width:100%" title="Enregistrer le deck" ${filled < 11 ? 'disabled' : ''}>
        ${isLandscapeTpl
          ? (filled < 11 ? `${11-filled}` : '💾')
          : (filled < 11 ? `Placez encore ${11-filled} joueur(s)` : '💾 Enregistrer le deck')}
      </button>
      <div class="autosave-indicator" style="text-align:center;font-size:11px;color:var(--tile-fg-dim);margin-top:6px;opacity:0;transition:opacity .3s"></div>
    </div>
  </div>`

  // Activer le bon layout AVANT renderDeckField
  const isDesktop = window.innerWidth >= 900
  const pcLayout     = container.querySelector('.deck-pc-layout')
  const mobileLayout = container.querySelector('.deck-mobile-layout')
  if (pcLayout)     pcLayout.style.display     = isDesktop ? 'block' : 'none'
  if (mobileLayout) mobileLayout.style.display = isDesktop ? 'none'  : 'block'
  // Le bouton "Enregistrer" partagé (en bas) fait doublon sur PC avec celui de la barre latérale
  container.querySelectorAll('#save-deck').forEach(el => { const pb = el.closest('.page-body'); if (pb) pb.style.display = isDesktop ? 'none' : 'block' })

  renderDeckField(container, builder, positions, ctx)

  // Re-render complet au basculement paysage/portrait (mesures de terrain
  // différentes). Listener remplacé à chaque appel pour éviter l'accumulation.
  if (window._deckOrientationHandler) window.removeEventListener('resize', window._deckOrientationHandler)
  let _deckWasLandscape = isLandscapeMobile()
  window._deckOrientationHandler = () => {
    const nowLandscape = isLandscapeMobile()
    if (nowLandscape !== _deckWasLandscape) {
      _deckWasLandscape = nowLandscape
      renderBuilder(container, builder, ctx, true)
    }
  }
  window.addEventListener('resize', window._deckOrientationHandler)

  container.querySelectorAll('#builder-back').forEach(el => el.addEventListener('click', () => navigate('decks')))


  // Formation mobile et PC : même modal
  const openFormationModal = () => {
    const { openModal, closeModal } = ctx
    const uniqueFormations = [...new Set(formationOptions)]
    const bodyHtml = `<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${uniqueFormations.map(f => {
        const selected = f === builder.formation
        return `<div data-forma="${f}" style="cursor:pointer;border-radius:10px;${selected?'box-shadow:0 0 0 3px #1A6B3C':''}">
          ${renderFormationCard(f, FORMATION_POSITIONS[f], { width: 90 })}
        </div>`
      }).join('')}
    </div>`
    openModal('⚽ Choisir une formation', bodyHtml)
    // Attacher les listeners directement sur les éléments rendus
    document.querySelectorAll('#modal-body [data-forma]').forEach(el => {
      el.addEventListener('click', () => {
        builder.formation = el.dataset.forma
        // Nettoyer les slots incompatibles avec la nouvelle formation
        const newPos = buildPositions(builder.formation)
        const clean = {}
        newPos.forEach(p => { if (builder.slots[p]) clean[p] = builder.slots[p] })
        builder.slots = clean
        closeModal()
        renderBuilder(container, builder, ctx)
      })
    })
  }
  container.querySelectorAll('#formation-mobile-btn, #formation-pc-btn').forEach(el => el.addEventListener('click', openFormationModal))




  // Stade PC et mobile
  container.querySelectorAll('#add-stad-btn-pc, #add-stad-btn').forEach(el => el.addEventListener('click', () => openStadiumSelector(builder, container, ctx)))

  container.querySelectorAll('#save-deck, #save-deck-pc').forEach(el => el.addEventListener('click', () => saveDeck(builder, ctx)))

  // ── Deck Automatique ──
  // Popup de chargement pendant le calcul du Deck Automatique. Le calcul
  // lui-même est synchrone (recherche locale sur toutes les formations ×
  // stades possédés) et peut bloquer un instant le thread principal sur une
  // grosse collection : le popup est peint AVANT que ça démarre (via le
  // setTimeout ci-dessous, qui laisse le navigateur rafraîchir l'affichage).
  function showDeckAutoLoader() {
    const ov = document.createElement('div')
    ov.id = 'deck-auto-loader-overlay'
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(10,30,20,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3500;gap:16px;color:#fff'
    ov.innerHTML = `
      <style>
        @keyframes deckAutoSpin { to { transform:rotate(360deg) } }
        .deck-auto-spinner { width:48px;height:48px;border:4px solid rgba(255,255,255,0.2);border-top-color:#D4A017;border-radius:50%;animation:deckAutoSpin .8s linear infinite }
      </style>
      <div class="deck-auto-spinner"></div>
      <div style="font-size:16px;font-weight:800">✨ Deck en cours de préparation…</div>`
    document.body.appendChild(ov)
    return () => ov.remove()
  }

  container.querySelectorAll('#auto-deck-pc, #auto-deck-mobile').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (builder.playerCards.length < 11) {
        ctx.toast(`Il faut au moins 11 joueurs (tu en as ${builder.playerCards.length})`, 'error')
        return
      }
      btn.disabled = true
      const hideLoader = showDeckAutoLoader()
      // Laisse le navigateur peindre le popup avant le calcul, qui est
      // synchrone et peut bloquer brièvement le thread principal.
      await new Promise(r => setTimeout(r, 30))

      const best = buildBestDeck({
        playerCards:         builder.playerCards,
        availableFormations: builder.availableFormations,
        stadiumCards:        builder.stadiumCards,
        stadDefMap:          builder.stadDefMap,
      })

      btn.disabled = false
      hideLoader()

      if (!best) { ctx.toast('Impossible de composer une équipe complète', 'error'); return }

      builder.formation      = best.formation
      builder.slots          = best.slots
      builder.wanted         = {}   // Deck Automatique n'utilise que des cartes possédées
      builder.subs           = best.subs
      builder.stadiumCardId  = best.stadiumCardId
      // La carte Formation correspondante (si possédée) est recalculée à la
      // sauvegarde : on ne force pas formationCardId ici.

      renderBuilder(container, builder, ctx)
      ctx.toast(`✨ Deck optimisé : ${best.formation} · score ${best.score}`, 'success')
    })
  })

  // Retirer un remplaçant
  container.querySelectorAll('[data-remove-sub]').forEach(btn => {
    btn.addEventListener('click', () => {
      builder.subs = builder.subs.filter(id => id !== btn.dataset.removeSub)
      renderBuilder(container, builder, ctx)
    })
  })

  // Ajouter un remplaçant
  container.querySelectorAll('#add-sub-btn').forEach(el => el.addEventListener('click', () => openSubSelector(builder, container, ctx)))
}

function renderDeckField(container, builder, positions, ctx) {
  const isDesktopField = window.innerWidth >= 900
  const field = container.querySelector(isDesktopField ? '#deck-field-pc' : '#deck-field-mobile')
  if (!field) return

  // Calculer le stade sélectionné pour le bonus +10
  const selectedStadCard = builder.stadiumCards?.find(c => c.id === builder.stadiumCardId)
  const stadDef = selectedStadCard ? (builder.stadDefMap?.[selectedStadCard.stadium_id] || null) : null

  const FPOS   = FORMATION_POSITIONS[builder.formation] || {}
  const FLINKS = getActiveLinks(builder.formation) || []

  // Slots par position — on attache evolution_bonus au player pour y accéder dans le rendu
  const slots = {}
  const wantedPos = new Set()   // positions affichées grisées (joueur non possédé)
  for (const pos of positions) {
    const cardId = builder.slots[pos]
    const card   = cardId ? builder.playerCards.find(c => c.id === cardId) : null
    if (card?.player) {
      slots[pos] = { ...card.player, _evolution_bonus: card.evolution_bonus || 0, face: card.player.face || null }
    } else if (builder.wanted?.[pos] && builder._playersCache?.[builder.wanted[pos]]) {
      slots[pos] = { ...builder._playersCache[builder.wanted[pos]], _evolution_bonus: 0 }
      wantedPos.add(pos)
    } else {
      slots[pos] = null
    }
  }

  // Terrain HTML : cartes positionnées en absolu sur un terrain de 320x320
  // Taille responsive
  const isDesktopRDF = window.innerWidth >= 900
  const landscapeRDF = !isDesktopRDF && isLandscapeMobile()

  let W, H
  if (isDesktopRDF) {
    // PC : terrain dans la colonne droite (largeur - 140px stade)
    const availW = window.innerWidth - 280
    W = Math.min(availW, 860)
    H = Math.round(W * 0.82)
  } else if (landscapeRDF) {
    // Paysage mobile : le terrain occupe une boîte (CSS flex-row lui donne
    // une vraie largeur ET hauteur) — on mesure le réel espace disponible
    // au lieu de supposer une largeur plein écran (qui donnerait une
    // hauteur H = W*0.85 bien plus grande que l'écran, d'où le débordement).
    // On réserve aussi les 30px de margin-top du terrain (#deck-field-mobile)
    // pour que marge + H ne dépasse jamais la boîte réelle (sinon la ligne
    // du bas — ou du haut si la marge est retirée — se fait tronquer).
    const FIELD_MARGIN_TOP = 30
    const box    = field.parentElement
    const boxW   = box?.clientWidth  || (window.innerWidth - 170)
    const boxH   = Math.max(80, (box?.clientHeight || 260) - FIELD_MARGIN_TOP)
    W = boxW
    H = Math.round(W * 0.85)
    if (H > boxH) { H = boxH; W = Math.round(H / 0.85) }
  } else {
    W = window.innerWidth - 20
    H = Math.round(W * 0.85)
  }
  const CARD_W = isDesktopRDF ? 84 : computeSafeCardWidth(builder.formation, W, H)
  // 84 en PC ; en mobile : la plus grande taille possible SANS chevauchement
  // pour la formation active (49-64px selon la densité, contre 49px fixe
  // auparavant sur toutes les formations).

  // SVG des liens uniquement
  let linkSvg = ''
  for (const [posA, posB] of FLINKS) {
    const fA = FPOS[posA], fB = FPOS[posB]; if (!fA||!fB) continue
    const ax = fA.x*W, ay = Math.round(0.03*H + fA.y*0.85*H), bx = fB.x*W, by = Math.round(0.03*H + fB.y*0.85*H)
    const pA = slots[posA], pB = slots[posB]
    const lc = linkColor(pA, pB)
    const noLink = lc === '#ff3333' || lc === '#cc2222'
    if (!noLink) {
      linkSvg += `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${lc}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`
      linkSvg += `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${lc}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`
    } else {
      linkSvg += `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${lc}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`
    }
  }

  // Cartes HTML
  let cardsHtml = ''
  const CARD_H = isDesktopRDF ? Math.round(CARD_W * 574/372) : CARD_W  // PC : ratio du gabarit 574/372 ; mobile : carré (compactSquare)
  for (const pos of positions) {
    const fp = FPOS[pos]; if (!fp) continue
    const p = slots[pos]
    const cx = fp.x * W
    // Compression Y : remap [0,1] → [0.03, 0.88] pour tout rentrer dans le viewport
    const cyRaw = fp.y * H
    const cy = Math.round(0.03 * H + fp.y * (0.85 * H))
    const left = Math.round(cx - CARD_W/2)
    const top  = Math.round(cy - CARD_H/2)

    if (p) {
      const role = pos.replace(/\d+/, '')
      const isWanted = wantedPos.has(pos)
      const hasStad = !isWanted && stadDef && (
        (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
        (stadDef.country_code && p.country_code === stadDef.country_code)
      )
      const cardHtml = renderPlayerCard(
        { ...p, _evolution_bonus: p._evolution_bonus||0 },
        { width: CARD_W, showStad: true, stadDef, role, compactSquare: !isDesktopRDF, context: 'formation' }
      )
      const stadLogo = hasStad ? (stadDef.club?.logo_url || stadDef.image_url || null) : null
      const badgeSize = Math.round(CARD_W * (isDesktopRDF ? 0.578 : 0.34)) // PC : +70% (demande explicite)
      const stadBadge = ''
      // Joueur non possédé : carte grisée + bouton "Mercato" qui filtre
      // directement sur ce joueur (nom + club + pays).
      const marketBtn = isWanted ? `<button class="wanted-market-btn" data-wanted-pos="${pos}"
          data-player-name="${(p.surname_real||'').replace(/"/g,'&quot;')}"
          data-player-club="${(p.clubs?.encoded_name||'').replace(/"/g,'&quot;')}"
          data-player-country="${p.country_code||''}"
          style="position:absolute;left:50%;bottom:${Math.round(CARD_H*0.03)}px;transform:translateX(-50%);z-index:3;
          white-space:nowrap;background:linear-gradient(135deg,#f6d365,#D4A017);color:#1a1a1a;border:none;
          border-radius:999px;font-size:${Math.max(8,Math.round(CARD_W*0.09))}px;font-weight:900;
          padding:3px 8px;cursor:pointer">🛒 Mercato</button>` : ''
      cardsHtml += `<div style="position:absolute;left:${left}px;top:${top}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${pos}">
        <div style="position:relative;${isWanted?'filter:grayscale(1) brightness(.65)':''}">${cardHtml}${stadBadge}</div>
        ${marketBtn}
      </div>`
    } else {
      const role = pos.replace(/\d+/, '')
      cardsHtml += `<div style="position:absolute;left:${left}px;top:${top}px;width:${CARD_W}px;height:${CARD_H}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${pos}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${role}</span>
      </div>`
    }
  }

  field.innerHTML = `
    <div style="position:relative;width:${W}px;height:${H}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${W} ${H}">${linkSvg}</svg>
      ${cardsHtml}
    </div>`

  field.querySelectorAll('.deck-slot-hit').forEach(el => {
    el.addEventListener('click', () => openPlayerSelector(el.dataset.pos, builder, container, ctx))
  })
  field.querySelectorAll('.wanted-market-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      ctx.navigate('market', {
        search:  btn.dataset.playerName,
        club:    btn.dataset.playerClub,
        country: btn.dataset.playerCountry,
      })
    })
  })
}


// ── Sélecteur de stade ───────────────────────────────────
function openStadiumSelector(builder, container, ctx) {
  const { openModal, closeModal } = ctx
  // Une seule carte par stade unique, même si plusieurs exemplaires sont possédés
  const seenStadiums = new Set()
  const cards = (builder.stadiumCards || []).filter(c => {
    const key = c.stadium_id || c.id
    if (seenStadiums.has(key)) return false
    seenStadiums.add(key); return true
  })

  openModal('🏟️ Choisir un stade',
    `<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${!builder.stadiumCardId?'border-color:#E87722':''}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${cards.map(c => {
        const def = builder.stadDefMap[c.stadium_id]
        const logo = def?.club?.logo_url || def?.image_url || (def?.country_code ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null)
        const sel = builder.stadiumCardId === c.id
        const cardHtml = renderStadiumCard(def?.name || 'Stade', logo, '+10⭐', { width: 90 })
        return `<div class="stad-choice" data-stad-id="${c.id}" style="cursor:pointer;position:relative;border-radius:8px;${sel?'box-shadow:0 0 0 3px #4fc3f7':''}">
          ${cardHtml}
        </div>`
      }).join('')}
    </div>`
  )

  document.getElementById('stad-none')?.addEventListener('click', () => {
    builder.stadiumCardId = null
    closeModal()
    renderBuilder(container, builder, ctx)
  })
  document.querySelectorAll('.stad-choice').forEach(el => {
    el.addEventListener('click', () => {
      builder.stadiumCardId = el.dataset.stadId
      closeModal()
      renderBuilder(container, builder, ctx)
    })
  })
}

// ── Sélecteur de stade ───────────────────────────────────

// ── Sélecteur de joueur (Petit 2 + 3) ────────────────────
async function openPlayerSelector(position, builder, container, ctx) {
  const { openModal, closeModal, navigate } = ctx
  const role = position.replace(/\d+/, '')
  const _selStadCardP = builder.stadiumCards?.find(c => c.id === builder.stadiumCardId)
  const _stadDef = _selStadCardP ? (builder.stadDefMap?.[_selStadCardP.stadium_id] || null) : null

  // Exclure les joueurs déjà placés (par player_id pour éviter les doublons)
  const currentCardId = builder.slots[position]
  const currentCard = currentCardId ? builder.playerCards.find(c => c.id === currentCardId) : null
  const currentPlayerId = currentCard?.player?.id

  // Player IDs déjà utilisés ailleurs (titulaires + remplaçants), sauf le slot courant
  const usedPlayerIds = new Set()
  Object.entries(builder.slots).forEach(([pos, id]) => {
    if (pos === position || !id) return
    const c = builder.playerCards.find(c => c.id === id)
    if (c?.player?.id) usedPlayerIds.add(c.player.id)
  })
  builder.subs.forEach(id => {
    const c = builder.playerCards.find(c => c.id === id)
    if (c?.player?.id) usedPlayerIds.add(c.player.id)
  })
  Object.entries(builder.wanted || {}).forEach(([pos, playerId]) => {
    if (pos === position || !playerId) return
    usedPlayerIds.add(playerId)
  })

  // Dédupliquer par player_id (garder une seule carte par joueur dans la liste)
  const seenPlayerIds = new Set()
  const eligible = builder.playerCards.filter(c => {
    const p = c.player
    if (!(p.job === role || p.job2 === role)) return false
    if (usedPlayerIds.has(p.id)) return false
    if (seenPlayerIds.has(p.id)) return false
    seenPlayerIds.add(p.id)
    return true
  })

  // ── Tri CONTEXTUEL : on ne classe plus sur la seule note, mais sur le gain
  // réel qu'apporterait le joueur À CE POSTE : note + liens avec les joueurs
  // déjà placés autour + bonus du stade équipé. Un joueur un peu moins bien
  // noté mais qui crée deux liens verts remonte donc devant.
  const _links = getActiveLinks(builder.formation) || FORMATION_LINKS[builder.formation] || []
  // Voisins de ce poste effectivement occupés
  const _neighbours = _links
    .filter(([a, b]) => a === position || b === position)
    .map(([a, b]) => (a === position ? b : a))
    .map(pos => builder.playerCards.find(c => c.id === builder.slots[pos])?.player)
    .filter(Boolean)

  function fitScore(c) {
    const p   = c.player
    const evo = c.evolution_bonus || 0
    const note = (role==='GK'?p.note_g : role==='DEF'?p.note_d : role==='MIL'?p.note_m : p.note_a)
               + ((role === p.job || role === p.job2) ? evo : 0)
    let bonus = 0
    for (const nb of _neighbours) {
      const lc = linkColor(p, nb)
      if (lc === '#00ff88') bonus += 10
      else if (lc === '#FFD700') bonus += 5
    }
    if (_stadDef) {
      const sameClub    = _stadDef.club_id     && String(p.club_id)      === String(_stadDef.club_id)
      const sameCountry = _stadDef.country_code && String(p.country_code) === String(_stadDef.country_code)
      if (sameClub || sameCountry) bonus += 10
    }
    return { total: note + bonus, note, bonus }
  }

  const _fit = new Map()
  eligible.forEach(c => _fit.set(c.id, fitScore(c)))
  eligible.sort((a, b) => {
    const d = _fit.get(b.id).total - _fit.get(a.id).total
    return d !== 0 ? d : _fit.get(b.id).note - _fit.get(a.id).note
  })

  // ── Onglet "Top 10 idéal" : meilleurs joueurs pour ce poste parmi TOUT le
  // catalogue, possédés ou non. Le catalogue complet n'est chargé qu'à la
  // première ouverture puis mis en cache sur le builder.
  if (!builder._allPlayers) {
    const { data } = await supabase
      .from('players')
      .select('id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)')
      .eq('is_active', true)
    builder._allPlayers = data || []
    if (!builder._playersCache) builder._playersCache = {}
    builder._allPlayers.forEach(p => { builder._playersCache[p.id] = p })
  }
  const ownedPlayerIdsAll = new Set(builder.playerCards.map(c => c.player?.id).filter(Boolean))

  const topTen = builder._allPlayers
    .filter(p => (p.job === role || p.job2 === role) && !usedPlayerIds.has(p.id))
    .map(p => {
      const note = (role==='GK'?p.note_g : role==='DEF'?p.note_d : role==='MIL'?p.note_m : p.note_a) || 0
      let bonus = 0
      for (const nb of _neighbours) {
        const lc = linkColor(p, nb)
        if (lc === '#00ff88') bonus += 10
        else if (lc === '#FFD700') bonus += 5
      }
      if (_stadDef) {
        const sameClub    = _stadDef.club_id     && String(p.club_id)      === String(_stadDef.club_id)
        const sameCountry = _stadDef.country_code && String(p.country_code) === String(_stadDef.country_code)
        if (sameClub || sameCountry) bonus += 10
      }
      return { p, total: note + bonus, note, bonus, owned: ownedPlayerIdsAll.has(p.id) }
    })
    .sort((a, b) => b.total - a.total || b.note - a.note)
    .slice(0, 10)

  const topTenHtml = topTen.length ? `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">` + topTen.map(t => {
    const pc = { ...t.p, _evolution_bonus: 0 }
    const badge = t.bonus > 0
      ? `<div style="position:absolute;top:2px;left:2px;z-index:6;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px">+${t.bonus}</div>`
      : ''
    // Possédé -> clic assigne directement la carte. Non possédé -> clic
    // ajoute le joueur en "désiré" (carte grisée sur le terrain + bouton
    // Mercato affiché là-bas, cf. renderDeckField).
    const ownedCard = t.owned ? builder.playerCards.find(c => c.player?.id === t.p.id) : null
    const wantedTag = !t.owned ? `title="Ajouter au deck (non possédé, à acheter)"` : ''
    return `<div style="position:relative">
      ${badge}
      <div class="${t.owned ? 'player-option' : 'wanted-option'}"
        ${ownedCard ? `data-card-id="${ownedCard.id}"` : `data-wanted-player-id="${t.p.id}"`}
        ${wantedTag}
        style="cursor:pointer;${t.owned?'':'filter:grayscale(1) brightness(.6)'}">
        ${renderPlayerCard(pc, { width: 100, showStad: true, stadDef: _stadDef, role, compactSquare: typeof window!=='undefined' && window.innerWidth<900, context: 'selector' })}
        ${!t.owned ? `<div style="position:absolute;left:50%;bottom:4px;transform:translateX(-50%);z-index:7;white-space:nowrap;
          background:rgba(0,0,0,0.65);color:#fff;border-radius:999px;font-size:8.5px;font-weight:700;padding:2px 7px">+ Ajouter (à acheter)</div>` : ''}
      </div>
    </div>`
  }).join('') + '</div>' : '<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.</div>'

  // Petit 2 : afficher photo, nom prénom, club, pays, note
  openModal(`Choisir ${role} — ${position}`,
    `<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${(builder.slots[position] || builder.wanted[position]) ? `
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>` : ''}
      <div style="display:flex;gap:6px;border-bottom:1px solid var(--tile-border);padding-bottom:8px;margin-bottom:4px">
        <button type="button" class="sel-tab" data-tab="mine" style="flex:1;padding:7px;border-radius:8px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:12.5px;font-weight:700;cursor:pointer">🎴 Mes cartes (${eligible.length})</button>
        <button type="button" class="sel-tab" data-tab="top" style="flex:1;padding:7px;border-radius:8px;border:1.5px solid #ccc;background:#e8e8e8;color:#555;font-size:12.5px;font-weight:700;cursor:pointer">🏆 Top 10 idéal</button>
      </div>
      <div class="sel-pane" data-pane="top" style="display:none">${topTenHtml}</div>
      <div class="sel-pane" data-pane="mine">
      ${eligible.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">` + eligible.map(c => {
        const p = { ...c.player, _evolution_bonus: c.evolution_bonus||0 }
        const fit = _fit.get(c.id)
        const badge = fit && fit.bonus > 0
          ? `<div style="position:absolute;top:2px;left:2px;z-index:5;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px" title="Bonus liens + stade à ce poste">+${fit.bonus}</div>`
          : ''
        return `<div class="player-option" data-card-id="${c.id}" style="cursor:pointer;position:relative">
          ${badge}
          ${renderPlayerCard(p, { width: 100, showStad: true, stadDef: _stadDef, role, compactSquare: typeof window!=='undefined' && window.innerWidth<900, context: 'selector' })}
        </div>`
      }).join('') + '</div>' : '<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
      </div>
    </div>`,
    `<button class="btn btn-ghost" id="close-selector">Fermer</button>`
  )

  document.getElementById('close-selector')?.addEventListener('click', closeModal)

  // Bascule entre "Mes cartes" et "Top 10 idéal"
  document.querySelectorAll('.sel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sel-tab').forEach(t => {
        const on = t === tab
        t.style.background  = on ? 'var(--green)' : '#e8e8e8'
        t.style.borderColor = on ? 'var(--green)' : '#ccc'
        t.style.color       = on ? '#fff' : '#555'
      })
      document.querySelectorAll('.sel-pane').forEach(pane => {
        pane.style.display = pane.dataset.pane === tab.dataset.tab ? 'block' : 'none'
      })
    })
  })

  // Joueur non possédé : l'ajouter au deck en "désiré" (carte grisée sur le
  // terrain, avec un bouton Mercato affiché là-bas — cf. renderDeckField).
  document.querySelectorAll('.wanted-option').forEach(el => {
    el.addEventListener('click', () => {
      builder.wanted[position] = el.dataset.wantedPlayerId
      delete builder.slots[position]
      // Le joueur "désiré" doit être disponible pour l'affichage grisé,
      // même si le catalogue complet n'a pas encore été mis en cache ailleurs.
      const p = builder._allPlayers?.find(pl => pl.id === el.dataset.wantedPlayerId)
      if (p) builder._playersCache[p.id] = p
      closeModal()
      renderBuilder(container, builder, ctx)
    })
  })

  document.getElementById('remove-player')?.addEventListener('click', () => {
    delete builder.slots[position]
    delete builder.wanted[position]
    closeModal()
    renderBuilder(container, builder, ctx)
  })

  document.querySelectorAll('.player-option').forEach(el => {
    el.addEventListener('click', () => {
      builder.slots[position] = el.dataset.cardId
      delete builder.wanted[position]
      closeModal()
      renderBuilder(container, builder, ctx)
    })
  })
}

// ── Sélecteur remplaçant ──────────────────────────────────
function openSubSelector(builder, container, ctx) {
  const { openModal, closeModal } = ctx
  const _selStadCard2 = builder.stadiumCards?.find(c => c.id === builder.stadiumCardId)
  const _selStadDef = _selStadCard2 ? (builder.stadDefMap?.[_selStadCard2.stadium_id] || null) : null
  // Exclure par player_id (unicité stricte)
  const usedPlayerIds = new Set()
  Object.keys(builder.slots).forEach(pos => {
    const cardId = builder.slots[pos]
    if (!cardId) return
    const c = builder.playerCards.find(c => c.id === cardId)
    if (c?.player?.id) usedPlayerIds.add(c.player.id)
  })
  builder.subs.forEach(cardId => {
    const c = builder.playerCards.find(c => c.id === cardId)
    if (c?.player?.id) usedPlayerIds.add(c.player.id)
  })

  // Dédupliquer par player_id
  const seenSubIds = new Set()
  const available = builder.playerCards.filter(c => {
    if (usedPlayerIds.has(c.player?.id)) return false
    if (seenSubIds.has(c.player?.id)) return false
    seenSubIds.add(c.player?.id)
    return true
  })

  openModal('Ajouter un remplaçant',
    `<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${available.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">` + available.map(c => {
        const p = { ...c.player, _evolution_bonus: c.evolution_bonus||0 }
        return `<div class="player-option" data-card-id="${c.id}" style="cursor:pointer">
          ${renderPlayerCard(p, { width: 100, showStad: true, stadDef: _selStadDef, compactSquare: typeof window!=='undefined' && window.innerWidth<900, context: 'selector' })}
        </div>`
      }).join('') + '</div>' : '<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,
    `<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>`
  )

  document.getElementById('close-sub-selector')?.addEventListener('click', closeModal)
  document.querySelectorAll('.player-option').forEach(el => {
    el.addEventListener('click', () => {
      builder.subs.push(el.dataset.cardId)
      closeModal()
      renderBuilder(container, builder, ctx)
    })
  })
}

// ── Sauvegarde ────────────────────────────────────────────
async function persistDeck(builder) {
  const matchingFormation = builder.formationCards.find(c => c.formation === builder.formation)
  const formationCardId   = matchingFormation?.id || builder.formationCardId

  await supabase.from('decks').update({
    formation: builder.formation,
    formation_card_id: formationCardId || null,
    stadium_card_id: builder.stadiumCardId || null
  }).eq('id', builder.deckId)

  await supabase.from('deck_cards').delete().eq('deck_id', builder.deckId)

  const inserts = []
  Object.entries(builder.slots).forEach(([pos, cardId], idx) => {
    inserts.push({ deck_id: builder.deckId, card_id: cardId, position: pos, is_starter: true, slot_order: idx })
  })
  // Slots "désirés" : joueur non possédé, pas encore de carte -> wanted_player_id
  Object.entries(builder.wanted || {}).forEach(([pos, playerId], idx) => {
    inserts.push({ deck_id: builder.deckId, card_id: null, wanted_player_id: playerId, position: pos, is_starter: true, slot_order: 1000+idx })
  })
  builder.subs.forEach((cardId, idx) => {
    inserts.push({ deck_id: builder.deckId, card_id: cardId, position: `SUB${idx+1}`, is_starter: false, slot_order: 100+idx })
  })

  if (inserts.length > 0) {
    return await supabase.from('deck_cards').insert(inserts)
  }
  return { error: null }
}

// Auto-enregistrement en arrière-plan, débounce pour éviter d'écrire à chaque
// micro-changement (attend une courte pause dans les modifications)
let _autosaveTimer = null
function scheduleAutosave(builder, ctx) {
  const { toast } = ctx
  clearTimeout(_autosaveTimer)
  const indicators = document.querySelectorAll('.autosave-indicator')
  indicators.forEach(el => { el.textContent = '⏳ Enregistrement...'; el.style.opacity = '1'; el.style.color = '' })
  _autosaveTimer = setTimeout(async () => {
    const { error } = await persistDeck(builder)
    const inds = document.querySelectorAll('.autosave-indicator')
    if (error) {
      inds.forEach(el => { el.textContent = '⚠️ Erreur d\'enregistrement'; el.style.color = '#ff6b6b' })
      toast(error.message, 'error')
      return
    }
    inds.forEach(el => {
      el.textContent = '✅ Enregistré'
      el.style.color = ''
      setTimeout(() => { el.style.opacity = '0' }, 1500)
    })
  }, 600)
}

async function saveDeck(builder, ctx) {
  const { toast, navigate } = ctx
  clearTimeout(_autosaveTimer)
  const { error } = await persistDeck(builder)
  if (error) { toast(error.message, 'error'); return }
  toast('Deck enregistré ✅', 'success')
  navigate('decks')
}

function buildPositions(formation) {
  const struct = FORMATIONS[formation] || FORMATIONS['4-4-2']
  const positions = ['GK1']
  for (let i = 1; i <= struct.DEF; i++) positions.push(`DEF${i}`)
  for (let i = 1; i <= struct.MIL; i++) positions.push(`MIL${i}`)
  for (let i = 1; i <= struct.ATT; i++) positions.push(`ATT${i}`)
  return positions
}

