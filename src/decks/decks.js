import { supabase } from '../lib/supabase.js'
import { renderPlayerCard } from '../components/player-card.js'
import { FORMATION_LINKS, FORMATION_POSITIONS, computeLinks, linkColor, getActiveLinks } from '../match/formation-links.js'

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

function getPortrait(p) {
  const url = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_SUPABASE_URL : ''
  if (!url || !p?.skin || !p?.hair) return null
  const key = p.hair === 'chauve' ? `${p.skin}-chauve-rase` : `${p.skin}-${p.hair}-${p.hair_length}`
  return `${url}/storage/v1/object/public/assets/tetes/${key}.png`
}

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

export async function renderDecks(container, ctx) {
  const { state, navigate, toast } = ctx
  container.innerHTML = '<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'

  const { data: decks } = await supabase
    .from('decks').select('id,name,formation_card_id')
    .eq('owner_id', state.profile.id).order('created_at', { ascending: false })

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
            <div style="font-weight:700;font-size:15px;flex:1">${d.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${d.id}" data-name="${d.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${d.id}" data-name="${d.name}">🗑️</button>
            </div>
          </div>`).join('')
        : '<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`

  document.getElementById('new-deck-btn').addEventListener('click', async () => {
    const name = prompt('Nom du deck :', `Deck ${(decks?.length||0)+1}`)
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
      const newName = prompt('Nouveau nom :', btn.dataset.name)
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
      if (!confirm(`Supprimer le deck "${btn.dataset.name}" ? Cette action est irréversible.`)) return
      await supabase.from('deck_cards').delete().eq('deck_id', btn.dataset.delete)
      const { error } = await supabase.from('decks').delete().eq('id', btn.dataset.delete)
      if (error) { toast(error.message, 'error'); return }
      toast('Deck supprimé.', 'success')
      renderDecks(container, ctx)
    })
  })
}

// ── Deck Builder ──────────────────────────────────────────
async function openDeckBuilder(deckId, container, ctx) {
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
    .from('deck_cards').select('card_id, position, is_starter, slot_order').eq('deck_id', deckId)

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
    slots: {},    // position → cardId (titulaires)
    subs: [],     // [ cardId, cardId, ... ] max 5
    playerCards, formationCards, stadiumCards, stadDefMap, availableFormations,
  }

  ;(deckSlots||[]).forEach(dc => {
    if (dc.is_starter) builder.slots[dc.position] = dc.card_id
    else if (!builder.subs.includes(dc.card_id)) builder.subs.push(dc.card_id)
  })

  renderBuilder(container, builder, ctx)
}

function renderBuilder(container, builder, ctx) {
  const { navigate } = ctx
  const struct    = FORMATIONS[builder.formation]
  const positions = buildPositions(builder.formation)
  const filled    = positions.filter(p => builder.slots[p]).length

  // Formations disponibles uniquement (Petit 1)
  const formationOptions = builder.availableFormations.length > 0
    ? builder.availableFormations
    : Object.keys(FORMATIONS) // fallback si aucune carte formation

  // Stade sélectionné pour bonus +10
  const _selStadCard = builder.stadiumCards?.find(c => c.id === builder.stadiumCardId)
  const _stadDef = _selStadCard ? (builder.stadDefMap?.[_selStadCard.stadium_id] || null) : null

  // Calcul des remplaçants avec données joueurs
  const subPlayers = builder.subs.map(id => builder.playerCards.find(c => c.id === id)).filter(Boolean)
  const allUsed    = [...Object.values(builder.slots), ...builder.subs]

  container.innerHTML = `
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${builder.name}</h2>
        <p style="font-size:11px;margin:0">${filled}/11 · ${builder.subs.length}/5 rempl.</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${builder.subs.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${subPlayers.map(card => {
              const p = { ...card.player, _evolution_bonus: card.evolution_bonus || 0 }
              return `<div style="position:relative;flex-shrink:0;overflow:visible">
                ${renderPlayerCard({ ...p, _evolution_bonus: p._evolution_bonus||0 }, { width: 60, showStad: true, stadDef: _stadDef })}
                <button data-remove-sub="${card.id}"
                  style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`
            }).join('')}
            ${builder.subs.length < 5 ? `<div id="add-sub-btn" style="width:60px;height:77px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>` : ''}
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
            <div id="formation-pc-btn" style="cursor:pointer;width:100px;height:50px;border-radius:8px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center;margin:0 auto">
              <span style="font-size:18px;font-weight:900;color:#fff">${builder.formation}</span>
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${_selStadCard ? (() => {
                const def = builder.stadDefMap[_selStadCard.stadium_id]
                const logo = def?.club?.logo_url || null
                return `<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${logo ? `<img src="${logo}" style="width:48px;height:48px;object-fit:contain">` : `<span style="font-size:36px">🏟️</span>`}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${(def?.name||'Stade').slice(0,14)}</span>
                </div>`
              })() : `<div style="width:100px;height:130px;border:2px dashed rgba(255,165,0,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
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
        <div style="display:flex;gap:10px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${builder.subs.length}/5)</div>
            <div style="display:flex;gap:4px;align-items:center;flex-wrap:nowrap;overflow-x:auto" id="subs-list">
              ${subPlayers.map(card => {
                const p = { ...card.player, _evolution_bonus: card.evolution_bonus || 0 }
                return `<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${renderPlayerCard({ ...p, _evolution_bonus: p._evolution_bonus||0 }, { width: 44, showStad: true, stadDef: _stadDef })}
                  <button data-remove-sub="${card.id}"
                    style="position:absolute;top:-5px;right:-5px;width:15px;height:15px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`
              }).join('')}
              ${builder.subs.length < 5 ? `<div id="add-sub-btn" style="width:28px;height:36px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>` : ''}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>
            <div id="formation-mobile-btn" style="cursor:pointer;width:50px;height:65px;border-radius:6px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center">
              <span style="font-size:11px;font-weight:900;color:#fff;text-align:center">${builder.formation}</span>
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${_selStadCard ? (() => {
                const def = builder.stadDefMap[_selStadCard.stadium_id]
                const logo = def?.club?.logo_url || null
                return `<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${logo ? `<img src="${logo}" style="width:26px;height:26px;object-fit:contain">` : `<span style="font-size:18px">🏟️</span>`}
                  <span style="font-size:14px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${(def?.name||'Stade').slice(0,10)}</span>
                </div>`
              })() : `<div style="width:50px;height:65px;border:2px dashed rgba(255,165,0,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                <span style="font-size:18px">🏟️</span>
                <span style="font-size:8px;color:rgba(255,255,255,0.4)">+</span>
              </div>`}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body" style="padding-bottom:20px">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${filled < 11 ? 'disabled' : ''}>
        ${filled < 11 ? `Placez encore ${11-filled} joueur(s)` : '💾 Enregistrer le deck'}
      </button>
    </div>
  </div>`

  // Activer le bon layout AVANT renderDeckField
  const isDesktop = window.innerWidth >= 900
  const pcLayout     = container.querySelector('.deck-pc-layout')
  const mobileLayout = container.querySelector('.deck-mobile-layout')
  if (pcLayout)     pcLayout.style.display     = isDesktop ? 'block' : 'none'
  if (mobileLayout) mobileLayout.style.display = isDesktop ? 'none'  : 'block'

  renderDeckField(container, builder, positions, ctx)

  container.querySelectorAll('#builder-back').forEach(el => el.addEventListener('click', () => navigate('decks')))


  // Formation mobile et PC : même modal
  const openFormationModal = () => {
    const { openModal, closeModal } = ctx
    const bodyHtml = `<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${formationOptions.map(f =>
        `<div data-forma="${f}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${f===builder.formation?'#1A6B3C':'#f0f0f0'};color:${f===builder.formation?'#fff':'#111'};font-weight:900;font-size:16px;border:2px solid ${f===builder.formation?'#1A6B3C':'#ddd'}">${f}</div>`
      ).join('')}
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

  container.querySelectorAll('#save-deck').forEach(el => el.addEventListener('click', () => saveDeck(builder, ctx)))

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
  for (const pos of positions) {
    const cardId = builder.slots[pos]
    const card   = cardId ? builder.playerCards.find(c => c.id === cardId) : null
    if (card?.player) {
      slots[pos] = { ...card.player, _evolution_bonus: card.evolution_bonus || 0, face: card.player.face || null }
    } else {
      slots[pos] = null
    }
  }

  // Terrain HTML : cartes positionnées en absolu sur un terrain de 320x320
  // Taille responsive
  const isDesktopRDF = window.innerWidth >= 900
  // PC : terrain dans la colonne droite (largeur - 140px stade)
  const availW = isDesktopRDF ? window.innerWidth - 280 : window.innerWidth - 20
  const W      = isDesktopRDF ? Math.min(availW, 860) : availW
  const H      = isDesktopRDF ? Math.round(W * 0.82)  : Math.round(W * 0.85)
  const CARD_W = isDesktopRDF ? 84 : 44  // 70 * 1.2 = 84

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
  const CARD_H = Math.round(CARD_W * 657/507)
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
      const hasStad = stadDef && (
        (stadDef.club_id && String(p.club_id) === String(stadDef.club_id)) ||
        (stadDef.country_code && p.country_code === stadDef.country_code)
      )
      const cardHtml = renderPlayerCard(
        { ...p, _evolution_bonus: p._evolution_bonus||0 },
        { width: CARD_W, showStad: true, stadDef, role }
      )
      const stadIcon = hasStad ? `<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>` : ''
      cardsHtml += `<div style="position:absolute;left:${left}px;top:${top}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${pos}">
        <div style="position:relative">${stadIcon}${cardHtml}</div>
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
}


// ── Sélecteur de stade ───────────────────────────────────
function openStadiumSelector(builder, container, ctx) {
  const { openModal, closeModal } = ctx
  const cards = builder.stadiumCards || []

  openModal('🏟️ Choisir un stade',
    `<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${!builder.stadiumCardId?'border-color:#E87722':''}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${cards.map(c => {
        const def = builder.stadDefMap[c.stadium_id]
        const logo = def?.club?.logo_url || null
        const imgUrl = def?.image_url ? (import.meta.env.BASE_URL + 'icons/' + def.image_url) : null
        const sel = builder.stadiumCardId === c.id
        const flagUrl = def?.country_code && !logo ? `https://flagsapi.com/${def.country_code.slice(0,2).toUpperCase()}/flat/64.png` : null
        // Nom : "Stade" sur la 1re ligne, suite sur la 2e
        const fullName = def?.name || 'Stade'
        const nameParts = fullName.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i)
        const nameLine1 = nameParts ? nameParts[1].trim() : fullName.slice(0,8)
        const nameLine2 = nameParts?.[2]?.trim() || ''
        return `<div class="stad-choice" data-stad-id="${c.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${sel?'#4fc3f7':'#444'};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${imgUrl ? `<img src="${imgUrl}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">` : ''}
            ${logo ? `<img src="${logo}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">` : flagUrl ? `<img src="${flagUrl}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">` : `<span style="font-size:24px;position:relative;z-index:1">🏟️</span>`}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${sel?'#4fc3f7':'#ccc'}">${nameLine1}</div>
              ${nameLine2 ? `<div style="font-size:8px;font-weight:700;color:${sel?'#4fc3f7':'#aaa'}">${nameLine2}</div>` : ''}
            </div>
          </div>
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
function openPlayerSelector(position, builder, container, ctx) {
  const { openModal, closeModal } = ctx
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

  eligible.sort((a, b) => {
    const evoA = a.evolution_bonus||0, evoB = b.evolution_bonus||0
    const nA = (role==='GK'?a.player.note_g : role==='DEF'?a.player.note_d : role==='MIL'?a.player.note_m : a.player.note_a) + (role===a.player.job||role===a.player.job2?evoA:0)
    const nB = (role==='GK'?b.player.note_g : role==='DEF'?b.player.note_d : role==='MIL'?b.player.note_m : b.player.note_a) + (role===b.player.job||role===b.player.job2?evoB:0)
    return nB - nA
  })

  // Petit 2 : afficher photo, nom prénom, club, pays, note
  openModal(`Choisir ${role} — ${position}`,
    `<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${builder.slots[position] ? `
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>` : ''}
      ${eligible.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">` + eligible.map(c => {
        const p = { ...c.player, _evolution_bonus: c.evolution_bonus||0 }
        return `<div class="player-option" data-card-id="${c.id}" style="cursor:pointer">
          ${renderPlayerCard(p, { width: 100, showStad: true, stadDef: _stadDef, role })}
        </div>`
      }).join('') + '</div>' : '<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,
    `<button class="btn btn-ghost" id="close-selector">Fermer</button>`
  )

  document.getElementById('close-selector')?.addEventListener('click', closeModal)

  document.getElementById('remove-player')?.addEventListener('click', () => {
    delete builder.slots[position]
    closeModal()
    renderBuilder(container, builder, ctx)
  })

  document.querySelectorAll('.player-option').forEach(el => {
    el.addEventListener('click', () => {
      builder.slots[position] = el.dataset.cardId
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
          ${renderPlayerCard(p, { width: 100, showStad: true, stadDef: _selStadDef })}
        </div>`
      }).join('') + '</div>' : '<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
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
async function saveDeck(builder, ctx) {
  const { state, toast, navigate } = ctx

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
  builder.subs.forEach((cardId, idx) => {
    inserts.push({ deck_id: builder.deckId, card_id: cardId, position: `SUB${idx+1}`, is_starter: false, slot_order: 100+idx })
  })

  if (inserts.length > 0) {
    const { error } = await supabase.from('deck_cards').insert(inserts)
    if (error) { toast(error.message, 'error'); return }
  }

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
