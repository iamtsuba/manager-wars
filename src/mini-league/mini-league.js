import { supabase } from '../lib/supabase.js'

const GREEN  = '#1A6B3C'
const YELLOW = '#D4A017'
// Palette sombre cohérente avec le reste de l'app (var(--page-bg) etc.) —
// évite le contraste brutal blanc/vert du design précédent.
const PANEL   = 'rgba(255,255,255,0.045)'
const BORDER  = 'rgba(255,255,255,0.09)'
const DIVIDER = 'rgba(255,255,255,0.08)'
const TXT     = '#f3f5f2'
const TXT_DIM = 'rgba(243,245,242,0.62)'
const TXT_FAINT = 'rgba(243,245,242,0.4)'

export async function renderMiniLeague(container, ctx) {
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>'
  const openId = ctx.state.params?.openLeagueId
  if (openId) { ctx.state.params.openLeagueId = null; await openLeague(container, ctx, openId); return }
  await showLeagueList(container, ctx)
}

async function showLeagueList(container, ctx, activeTab = 'waiting') {
  const { state } = ctx
  const uid = state.profile.id

  const { data: myMemberships } = await supabase
    .from('mini_league_members').select('league_id, prize_amount, prize_claimed').eq('user_id', uid)
  const myLeagueIds = (myMemberships||[]).map(m => m.league_id)
  const myPrizeMap = {}
  ;(myMemberships||[]).forEach(m => { myPrizeMap[m.league_id] = { amount: m.prize_amount, claimed: m.prize_claimed } })

  const { data: publicWaiting, error: pwErr } = await supabase
    .from('mini_leagues').select('*, mini_league_members(count)')
    .eq('status','waiting').eq('is_archived',false)
    .order('created_at', { ascending: false }).limit(30)

  // Fallback si colonne is_archived absente (migration v2 non exécutée)
  const waitingLeagues = pwErr
    ? ((await supabase.from('mini_leagues').select('*, mini_league_members(count)').eq('status','waiting').order('created_at',{ascending:false}).limit(30)).data || [])
    : (publicWaiting || [])

  const myLeaguesQuery = myLeagueIds.length
    ? await supabase.from('mini_leagues').select('*, mini_league_members(count)').in('id', myLeagueIds).order('created_at', { ascending: false })
    : { data: [] }
  const myLeagues = myLeaguesQuery.data||[]

  const myWaiting  = myLeagues.filter(l => l.status==='waiting' && !l.is_archived)
  const myActive   = myLeagues.filter(l => l.status==='active'  && !l.is_archived)
  const archivedCandidates = myLeagues.filter(l => l.is_archived || l.status==='finished')

  // "Archivées" = uniquement les leagues où j'ai RÉELLEMENT joué au moins un
  // match (pas seulement rejointes) — cas rare d'un membre systématiquement
  // exempté (bye) qui n'aurait jamais réellement affronté personne.
  let myArchived = archivedCandidates
  if (archivedCandidates.length) {
    const { data: playedRows } = await supabase
      .from('mini_league_matches')
      .select('league_id')
      .in('league_id', archivedCandidates.map(l=>l.id))
      .or(`home_id.eq.${uid},away_id.eq.${uid}`)
      .not('status', 'eq', 'bye')
    const playedLeagueIds = new Set((playedRows||[]).map(r=>r.league_id))
    myArchived = archivedCandidates.filter(l => playedLeagueIds.has(l.id))
  }

  const otherPublic = waitingLeagues.filter(l => !myLeagueIds.includes(l.id))

  const tabs = [
    { key:'waiting', label:'🟡 En attente', count: myWaiting.length + otherPublic.length },
    { key:'active',  label:'🟢 En cours',   count: myActive.length },
    { key:'archived',label:'📁 Archivées',  count: myArchived.length },
  ]

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${DIVIDER};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${TXT}">🏆 Mini League</div>
        <div style="font-size:12px;color:${TXT_DIM}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${BORDER};border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${TXT}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${DIVIDER}">
      ${tabs.map(t => `<button class="ml-tab" data-tab="${t.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${activeTab===t.key?GREEN:'transparent'};background:none;font-size:12px;font-weight:${activeTab===t.key?'900':'600'};color:${activeTab===t.key?'#4ade80':TXT_FAINT};cursor:pointer">${t.label}${t.count?` (${t.count})`:''}</button>`).join('')}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${activeTab==='waiting' ? renderWaitingTab(myWaiting, otherPublic, uid)
        : activeTab==='active' ? renderActiveTab(myActive, uid)
        : renderArchivedTab(myArchived, uid, myPrizeMap)}
    </div>
  </div>`

  document.getElementById('ml-create-btn')?.addEventListener('click', () => showCreateForm(container, ctx))
  document.getElementById('ml-refresh-list')?.addEventListener('click', () => showLeagueList(container, ctx, activeTab))
  container.querySelectorAll('.ml-tab').forEach(btn => btn.addEventListener('click', () => showLeagueList(container, ctx, btn.dataset.tab)))
  container.querySelectorAll('[data-league-id]').forEach(card => card.addEventListener('click', () => openLeague(container, ctx, card.dataset.leagueId)))
  container.querySelectorAll('[data-join]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); joinLeague(container, ctx, btn.dataset.join, btn.dataset.type) }))
  container.querySelectorAll('[data-delete]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); deleteLeague(container, ctx, btn.dataset.delete, btn.dataset.name, activeTab) }))
  container.querySelectorAll('[data-claim-league]').forEach(btn => btn.addEventListener('click', async e => {
    e.stopPropagation()
    btn.disabled = true; btn.textContent = '...'
    const { data: res, error } = await supabase.rpc('claim_mini_league_prize', {
      p_league_id: btn.dataset.claimLeague, p_user_id: state.profile.id
    })
    if (error || !res?.success) {
      ctx.toast(res?.error || 'Erreur lors de la récupération', 'error')
      showLeagueList(container, ctx, activeTab)
      return
    }
    if (!res.already_claimed) {
      state.profile.credits = (state.profile.credits||0) + res.prize
      const credEl = document.getElementById('nav-credits')
      if (credEl) credEl.textContent = `💰 ${state.profile.credits.toLocaleString('fr')}`
      ctx.toast(`💰 +${res.prize.toLocaleString('fr')} cr. ajoutés !`, 'success')
    }
    showLeagueList(container, ctx, activeTab)
  }))
}

function leagueCard(l, uid, showJoin=false, prize=null) {
  const isCreator = l.creator_id === uid
  const pot = l.pot || 0
  const cnt = l.mini_league_members?.[0]?.count || 0
  const hasUnclaimed = prize && prize.amount > 0 && !prize.claimed
  return `<div data-league-id="${l.id}" style="background:${PANEL};border:1px solid ${hasUnclaimed?'rgba(212,160,23,0.5)':BORDER};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${TXT}">${l.name}</div>
      ${isCreator?`<button data-delete="${l.id}" data-name="${l.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:''}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${TXT_DIM};margin-bottom:${(showJoin||hasUnclaimed)?'10px':'0'}">
      <span>${l.type==='private'?'🔒':'🌐'} ${l.type==='private'?'Privée':'Publique'}</span>
      <span>⚽ ${l.mode==='aller-retour'?'A-R':'Aller'}</span>
      <span>👥 ${cnt}/${l.max_players}</span>
      <span>💰 ${(l.entry_fee||100).toLocaleString('fr')} cr.</span>
      ${pot>0?`<span style="color:${YELLOW};font-weight:700">🏆 ${pot.toLocaleString('fr')} cr.</span>`:''}
      ${l.current_day>0?`<span>📅 J${l.current_day}/${l.total_days}</span>`:''}
    </div>
    ${showJoin?`<button data-join="${l.id}" data-type="${l.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(l.entry_fee||100).toLocaleString('fr')} cr.)</button>`:''}
    ${hasUnclaimed?`<button data-claim-league="${l.id}" class="btn btn-sm" style="width:100%;background:${YELLOW};color:#141000;font-weight:900;border:none">💰 Récupérer ${prize.amount.toLocaleString('fr')} cr.</button>`:''}
  </div>`
}

function renderWaitingTab(myWaiting, otherPublic, uid) {
  const parts = []
  if (myWaiting.length) { parts.push(`<div style="font-size:11px;font-weight:700;color:${TXT_FAINT};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`); parts.push(...myWaiting.map(l=>leagueCard(l,uid,false))) }
  if (otherPublic.length) { parts.push(`<div style="font-size:11px;font-weight:700;color:${TXT_FAINT};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`); parts.push(...otherPublic.map(l=>leagueCard(l,uid,true))) }
  return parts.length ? parts.join('') : `<div style="text-align:center;padding:40px;color:${TXT_FAINT}">🏆<br>Aucune mini league.<br>Crée la première !</div>`
}
function renderActiveTab(l,uid) { return l.length ? l.map(x=>leagueCard(x,uid)).join('') : `<div style="text-align:center;padding:40px;color:${TXT_FAINT}">Aucune mini league en cours.</div>` }
function renderArchivedTab(l,uid,prizeMap={}) { return l.length ? l.map(x=>leagueCard(x,uid,false,prizeMap[x.id])).join('') : `<div style="text-align:center;padding:40px;color:${TXT_FAINT}">Aucune mini league archivée.</div>` }

function showCreateForm(container, ctx) {
  const ov = document.createElement('div')
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px'
  ov.innerHTML = `<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
    <div style="padding:16px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:17px;font-weight:900">🏆 Créer une Mini League</div>
      <button id="ml-form-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="padding:20px;display:flex;flex-direction:column;gap:14px">
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOM *</label>
        <input id="ml-name" placeholder="Ex: Ligue des Champions" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px"></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">JOUEURS MAX (3-8)</label>
        <input id="ml-max" type="number" min="3" max="8" value="6" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px"></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MISE PAR JOUEUR (min. 100 cr.)</label>
        <input id="ml-fee" type="number" min="100" step="100" value="500" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        <div style="font-size:11px;color:#888;margin-top:4px">🥇 70% · 🥈 20% · 🥉 10% du pot</div></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">TYPE</label>
        <div style="display:flex;gap:8px">
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-type" value="public" checked> Publique</label>
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-type" value="private"> Privée (MDP)</label>
        </div></div>
      <div id="ml-pwd-block" style="display:none"><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MOT DE PASSE</label>
        <input id="ml-pwd" type="password" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px"></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MODE</label>
        <div style="display:flex;gap:8px">
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-mode" value="aller" checked> Aller</label>
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-mode" value="aller-retour"> Aller-Retour</label>
        </div></div>
      <button id="ml-create-confirm" class="btn btn-primary" style="width:100%;padding:12px;font-size:15px">🚀 Créer</button>
    </div></div>`
  document.body.appendChild(ov)
  ov.querySelector('#ml-form-close').addEventListener('click', () => ov.remove())

  ov.querySelectorAll('input[name="ml-type"]').forEach(r => r.addEventListener('change', () => { document.getElementById('ml-pwd-block').style.display = r.value==='private'?'block':'none' }))
  ov.querySelector('#ml-create-confirm').addEventListener('click', async () => {
    const { toast } = ctx
    const name=document.getElementById('ml-name').value.trim()
    const maxP=parseInt(document.getElementById('ml-max').value)||6
    const fee=parseInt(document.getElementById('ml-fee').value)||500
    const type=ov.querySelector('input[name="ml-type"]:checked')?.value||'public'
    const mode=ov.querySelector('input[name="ml-mode"]:checked')?.value||'aller'
    const pwd=document.getElementById('ml-pwd')?.value?.trim()||null
    if(!name){toast('Le nom est obligatoire','error');return}
    if(fee<100){toast('Mise minimum : 100 crédits','error');return}
    if(type==='private'&&!pwd){toast('Mot de passe requis','error');return}
    const {data:league,error}=await supabase.from('mini_leagues').insert({name,creator_id:ctx.state.profile.id,type,password:pwd,mode,max_players:maxP,entry_fee:fee}).select().single()
    if(error){toast('Erreur : '+error.message,'error');return}
    // Vérifier les crédits du créateur
    const {data:me}=await supabase.from('users').select('credits').eq('id',ctx.state.profile.id).single()
    if((me?.credits||0)<fee){
      await supabase.from('mini_leagues').delete().eq('id',league.id)
      toast(`Crédits insuffisants pour la mise (${fee.toLocaleString('fr')} cr.)`, 'error'); return
    }
    // Prélever la mise du créateur + initialiser le pot
    await supabase.from('users').update({credits:(me.credits)-fee}).eq('id',ctx.state.profile.id)
    await supabase.from('mini_leagues').update({pot:fee}).eq('id',league.id)
    await supabase.from('mini_league_members').insert({league_id:league.id,user_id:ctx.state.profile.id})
    if(ctx.state.profile) ctx.state.profile.credits=(me.credits)-fee
    const credEl=document.getElementById('nav-credits')
    if(credEl) credEl.textContent=`💰 ${(ctx.state.profile.credits||0).toLocaleString('fr')}`
    ov.remove(); toast(`Mini League créée ! ${fee.toLocaleString('fr')} cr. déduits.`,'success'); openLeague(container,ctx,league.id)
  })
}

function askPassword() {
  return new Promise(resolve => {
    const ov = document.createElement('div')
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px'
    ov.innerHTML = `
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`
    document.body.appendChild(ov)
    const input = ov.querySelector('#ml-pwd-input')
    const close = val => { ov.remove(); resolve(val) }
    setTimeout(() => input?.focus(), 80)
    ov.querySelector('#pwd-cancel').addEventListener('click', () => close(null))
    ov.querySelector('#pwd-ok').addEventListener('click', () => close(input.value.trim()))
    input.addEventListener('keydown', e => { if (e.key === 'Enter') close(input.value.trim()) })

  })
}

async function joinLeague(container, ctx, leagueId, type) {
  const { toast, state } = ctx
  const uid = state.profile.id

  let pwd = null
  if (type === 'private') {
    pwd = await askPassword()
    if (pwd === null) return
  }

  const { data: res, error } = await supabase.rpc('join_mini_league', {
    p_league_id: leagueId, p_user_id: uid, p_password: pwd
  })

  if (error || !res?.success) {
    console.error('[MiniLeague] join_mini_league:', error || res)
    toast(res?.error || 'Erreur lors de l\'inscription', 'error')
    return
  }

  if (typeof ctx.refreshProfile === 'function') {
    await ctx.refreshProfile()
  } else {
    const { data: me } = await supabase.from('users').select('credits').eq('id', uid).single()
    if (state.profile && me) state.profile.credits = me.credits
  }
  // refreshProfile ne met à jour que state.profile en mémoire — le DOM
  // #nav-credits n'est rafraîchi que par renderPage(), jamais appelée ici
  // puisque openLeague() est appelé directement (pas via ctx.navigate()).
  const credEl = document.getElementById('nav-credits')
  if (credEl) credEl.textContent = `💰 ${(state.profile?.credits||0).toLocaleString('fr')}`

  toast(`✅ Inscrit ! Pot mis à jour.`, 'success')
  openLeague(container, ctx, leagueId)
}

async function leaveLeague(container, ctx, leagueId, fee) {
  const { toast, state } = ctx
  const uid = state.profile.id

  const ok = await new Promise(resolve => {
    const ov = document.createElement('div')
    ov.className = 'modal-overlay'; ov.style.zIndex = '2100'
    ov.innerHTML = `<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${fee.toLocaleString('fr')} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`
    document.body.appendChild(ov)
    ov.querySelector('#lv-ok').onclick = () => { ov.remove(); resolve(true) }
    ov.querySelector('#lv-cancel').onclick = () => { ov.remove(); resolve(false) }

  })
  if (!ok) return

  const { data: res, error } = await supabase.rpc('leave_mini_league', {
    p_league_id: leagueId, p_user_id: uid
  })

  if (error || !res?.success) {
    toast(res?.error || 'Erreur lors de la désinscription', 'error'); return
  }

  // Rafraîchir les crédits affichés
  const refund = res.refund || fee
  if (state.profile) state.profile.credits = (state.profile.credits||0) + refund
  const credEl = document.getElementById('nav-credits')
  if (credEl) credEl.textContent = `💰 ${(state.profile.credits||0).toLocaleString('fr')}`

  toast(`↩️ Désinscrit · +${refund.toLocaleString('fr')} cr. remboursés`, 'success')
  showLeagueList(container, ctx, 'waiting')
}


async function deleteLeague(container, ctx, leagueId, name, tab) {
  const {toast}=ctx
  if(!confirm(`Supprimer définitivement "${name}" et tous ses matchs/membres ? Action irréversible.`)) return
  // Supprimer dans l'ordre FK (au cas où CASCADE ne suffit pas côté RLS)
  await supabase.from('mini_league_matches').delete().eq('league_id',leagueId)
  await supabase.from('mini_league_members').delete().eq('league_id',leagueId)
  const {error}=await supabase.from('mini_leagues').delete().eq('id',leagueId)
  if(error){toast('Erreur suppression ('+error.message+')','error');return}
  toast('Mini League supprimée avec succès','success')
  showLeagueList(container,ctx,tab)
}

async function archiveLeague(container, ctx, leagueId) {
  await supabase.from('mini_leagues').update({is_archived:true}).eq('id',leagueId)
  ctx.toast('Mini League archivée','success'); showLeagueList(container,ctx,'archived')
}

export async function openLeague(container, ctx, leagueId) {
  const {state,toast}=ctx; const uid=state.profile.id
  const [{data:league},{data:members},{data:mlMatches}] = await Promise.all([
    supabase.from('mini_leagues').select('*').eq('id',leagueId).single(),
    supabase.from('mini_league_members').select('*, user:users(id,pseudo,club_name,club_color1,club_color2)').eq('league_id',leagueId),
    supabase.from('mini_league_matches').select('*').eq('league_id',leagueId).order('matchday').order('created_at')
  ])
  if(!league){toast('Introuvable','error');await showLeagueList(container,ctx);return}
  const isMember=(members||[]).some(m=>m.user_id===uid)
  const isCreator=league.creator_id===uid
  const memberList=(members||[]).map(m=>m.user).filter(Boolean)
  const standings=computeStandings(memberList,mlMatches||[])
  const todayMatches=(mlMatches||[]).filter(m=>m.matchday===league.current_day)
  const pot=league.pot||0; const fee=league.entry_fee||100
  const allTodayDone = todayMatches.length>0 && todayMatches.every(m=>m.status==='finished'||m.status==='bye')
  const isLastDay = league.current_day>=league.total_days

  // Trouver mon membership avec prize
  const myMembership = (members||[]).find(m=>m.user_id===uid)

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${DIVIDER};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${TXT}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${BORDER};border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${TXT};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${TXT}">${league.name}</div>
        <div style="font-size:11px;color:${TXT_DIM}">${league.mode==='aller-retour'?'Aller-Retour':'Aller'} · max ${league.max_players} · 💰 ${fee} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${league.status==='active'?'rgba(74,222,128,0.16)':league.status==='finished'?'rgba(168,85,247,0.16)':'rgba(212,160,23,0.16)'};color:${league.status==='active'?'#4ade80':league.status==='finished'?'#c084fc':'#eab308'}">
          ${league.status==='waiting'?'En attente':league.status==='active'?`J${league.current_day}/${league.total_days}`:'Terminée'}
        </div>
        ${pot>0?`<div style="font-size:12px;font-weight:900;color:${YELLOW};margin-top:4px">🏆 ${pot.toLocaleString('fr')} cr.</div>`:''}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${league.status==='waiting'?`
      <div style="background:${PANEL};border:1px solid ${BORDER};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${TXT}">👥 Joueurs (${memberList.length}/${league.max_players})</div>
        <div style="font-size:12px;color:${TXT_DIM};margin-bottom:10px">💰 ${fee} cr./joueur → Pot estimé : ${(fee*memberList.length).toLocaleString('fr')} cr. (🥇${Math.floor(fee*memberList.length*.7).toLocaleString('fr')} · 🥈${Math.floor(fee*memberList.length*.2).toLocaleString('fr')} · 🥉${Math.floor(fee*memberList.length*.1).toLocaleString('fr')})</div>
        ${memberList.map(u=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${DIVIDER}">
            <div style="width:36px;height:36px;border-radius:50%;background:${u.club_color2||GREEN};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${u.club_color1||'#fff'}">${(u.pseudo||'?').slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${TXT}">${u.club_name||u.pseudo}</div><div style="font-size:11px;color:${TXT_FAINT}">@${u.pseudo}</div></div>
            ${u.id===league.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':''}
          </div>`).join('')}
        ${isCreator&&memberList.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${fee} cr. × ${memberList.length})</button>`:''}
        ${isCreator?`<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>`:''}
        ${!isMember?`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${fee} cr.)</button>`:''}
        ${isMember&&!isCreator?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${fee.toLocaleString('fr')} cr.</button>
        `:''}
      </div>`:''}

      ${league.status==='active'?`
      <div style="background:${PANEL};border:1px solid ${BORDER};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${TXT}">📅 Journée ${league.current_day} / ${league.total_days}</div>
        ${todayMatches.map(m=>matchRowHTML(m,memberList,uid,isMember)).join('')}
        ${isCreator&&allTodayDone&&!isLastDay?`<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>`:''}
      </div>`:''}

      ${(league.status==='active'||league.status==='finished')&&standings.length?`
      <div style="background:${PANEL};border:1px solid ${BORDER};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${TXT}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${TXT_FAINT};text-transform:uppercase;border-bottom:2px solid ${DIVIDER}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${pot>0&&league.status==='finished'?`<th style="text-align:right;padding:5px 0;color:${YELLOW}">💰</th>`:''}
          </tr></thead>
          <tbody>${standings.map((s,i)=>{
            const prize=(pot>0&&league.status==='finished')?(i===0?Math.floor(pot*.7):i===1?Math.floor(pot*.2):i===2?Math.floor(pot*.1):0):0
            return `<tr style="border-bottom:1px solid ${DIVIDER};${s.userId===uid?'background:rgba(74,222,128,0.08);':''}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${i===0?YELLOW:i<3?'#4ade80':TXT_DIM}">${['🥇','🥈','🥉'][i]||i+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${TXT}">${s.clubName}</div><div style="font-size:10px;color:${TXT_FAINT}">@${s.pseudo}</div></td>
              <td style="text-align:center;color:${TXT_DIM}">${s.played}</td><td style="text-align:center;color:${TXT_DIM}">${s.won}-${s.drawn}-${s.lost}</td>
              <td style="text-align:center;color:${s.goalDiff>=0?'#4ade80':'#ff6b6b'}">${s.goalDiff>=0?'+':''}${s.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${TXT}">${s.points}</td>
              ${pot>0&&league.status==='finished'?`<td style="text-align:right;font-weight:700;color:${YELLOW}">${prize?prize.toLocaleString('fr')+' cr.':'—'}</td>`:''}
            </tr>`}).join('')}</tbody>
        </table>
      </div>`:''}

      ${league.status!=='waiting'&&league.current_day>1?`
      <div style="background:${PANEL};border:1px solid ${BORDER};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${TXT}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,league.status==='active'?league.current_day-1:league.current_day)},(_,i)=>i+1).reverse().map(day=>{
          const dayM=(mlMatches||[]).filter(m=>m.matchday===day)
          return `<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${TXT_FAINT};margin-bottom:6px">Journée ${day}</div>${dayM.map(m=>matchRowHTML(m,memberList,uid,false,true)).join('')}</div>`
        }).join('')}
      </div>`:''}

      ${isCreator&&!league.is_archived&&league.status!=='waiting'?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${TXT_DIM}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:''}

    </div>
  </div>`

  const backTab=league.status==='waiting'?'waiting':league.status==='active'?'active':'archived'
  document.getElementById('ml-back')?.addEventListener('click', ()=>showLeagueList(container,ctx,backTab))
  document.getElementById('ml-refresh')?.addEventListener('click', async (e) => {
    const btn = e.currentTarget
    btn.style.opacity = '0.5'
    await openLeague(container, ctx, leagueId)
  })
  document.getElementById('ml-start-btn')?.addEventListener('click', ()=>startLeague(container,ctx,league,memberList))
  document.getElementById('ml-next-day')?.addEventListener('click', ()=>nextMatchday(container,ctx,leagueId))
  document.getElementById('ml-join-now')?.addEventListener('click', ()=>joinLeague(container,ctx,leagueId,league.type))
  document.getElementById('ml-leave-btn')?.addEventListener('click', ()=>leaveLeague(container,ctx,leagueId,fee))
  document.getElementById('ml-delete-btn')?.addEventListener('click', ()=>deleteLeague(container,ctx,leagueId,league.name,'waiting'))
  document.getElementById('ml-delete-now')?.addEventListener('click', ()=>deleteLeague(container,ctx,leagueId,league.name,backTab))
  document.getElementById('ml-archive-btn')?.addEventListener('click', ()=>archiveLeague(container,ctx,leagueId))
  container.querySelectorAll('[data-play-match]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const m=todayMatches.find(x=>x.id===btn.dataset.playMatch)
      if(m) ctx.navigate('match-mini-league',{mlMatchId:m.id,leagueId})
    })
  })

  // Popup prize : league terminée + joueur dans le top 3 + pas déjà réclamé
  if(league.status==='finished' && myMembership) {
    const myPos=standings.findIndex(s=>s.userId===uid)
    if(myPos>=0 && myPos<3 && myMembership.prize_amount>0 && !myMembership.prize_claimed) {
      setTimeout(()=>showPrizePopup(container,ctx,league,myMembership,myPos), 400)
    }
  }
}

function matchRowHTML(m, members, uid, isMember, readonly=false) {
  const getUser=id=>members.find(u=>u.id===id)
  if(m.is_bye){const e=getUser(m.home_id);return `<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${TXT_DIM};text-align:center">🔵 ${e?.club_name||e?.pseudo||'?'} exempté(e)</div>`}
  const home=getUser(m.home_id),away=getUser(m.away_id)
  const isMyMatch=m.home_id===uid||m.away_id===uid
  const canPlay=isMyMatch&&m.status==='pending'&&isMember&&!readonly
  const score=m.status==='finished'?`${m.home_score} - ${m.away_score}`:'vs'
  return `<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${isMyMatch?'rgba(26,107,60,0.16)':'rgba(255,255,255,0.03)'};margin-bottom:6px;border:1px solid ${isMyMatch?'rgba(74,222,128,0.35)':DIVIDER}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${TXT};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${home?.club_name||home?.pseudo||'?'}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${m.status==='finished'?'#4ade80':TXT_FAINT}">${score}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${TXT};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${away?.club_name||away?.pseudo||'?'}</div>
    ${canPlay?`<button data-play-match="${m.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:''}
    ${m.status==='finished'?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':''}
  </div>`
}

async function startLeague(container, ctx, league, members) {
  const {toast,state}=ctx
  // Les crédits ont déjà été prélevés à l'inscription — le pot est déjà constitué
  const schedule=generateSchedule(members.map(m=>m.id),league.mode)
  const rows=[]
  schedule.forEach((day,di)=>day.forEach(match=>rows.push({
    league_id:league.id, matchday:di+1,
    home_id:match.home||match.bye, away_id:match.away||null,
    is_bye:!!match.bye, status:match.bye?'bye':'pending'
  })))
  const {error}=await supabase.from('mini_league_matches').insert(rows)
  if(error){toast('Erreur calendrier : '+error.message,'error');return}
  await supabase.from('mini_leagues').update({status:'active',current_day:1,total_days:schedule.length}).eq('id',league.id)
  toast(`🚀 Lancée ! Pot : ${(league.pot||0).toLocaleString('fr')} cr.`,'success')
  openLeague(container,ctx,league.id)
}

async function nextMatchday(container, ctx, leagueId) {
  const {data:l}=await supabase.from('mini_leagues').select('current_day,total_days,pot').eq('id',leagueId).single()
  const next=(l.current_day||0)+1
  if(next>(l.total_days||0)){ openLeague(container,ctx,leagueId); return }
  await supabase.from('mini_leagues').update({current_day:next}).eq('id',leagueId)
  ctx.toast(`Journée ${next} commencée !`,'success'); openLeague(container,ctx,leagueId)
}

// Popup de réclamation des crédits pour le top 3
async function showPrizePopup(container, ctx, league, myMembership, myPos) {
  const {state, toast} = ctx
  const prizes=[Math.floor((league.pot||0)*.7),Math.floor((league.pot||0)*.2),Math.floor((league.pot||0)*.1)]
  const medal = ['🥇','🥈','🥉'][myPos]
  const prize = myMembership.prize_amount || prizes[myPos] || 0
  const already = myMembership.prize_claimed

  const ov = document.createElement('div')
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px'
  ov.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${medal}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${myPos===0?'Champion !':myPos===1?'Vice-champion !':'3ème place !'}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${league.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${YELLOW};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${already?'Déjà récupéré':'Tes gains'}</div>
        <div style="font-size:32px;font-weight:900;color:${YELLOW}">${prize.toLocaleString('fr')} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${myPos===0?'70%':myPos===1?'20%':'10%'} du pot de ${(league.pot||0).toLocaleString('fr')} cr.</div>
      </div>
      ${already
        ? `<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>`
        : `<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${YELLOW};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${prize.toLocaleString('fr')} cr.</button>`
      }
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`

  document.body.appendChild(ov)
  ov.querySelector('#prize-close')?.addEventListener('click',()=>ov.remove())


  ov.querySelector('#claim-prize-btn')?.addEventListener('click', async(e)=>{
    const btn = e.currentTarget
    btn.disabled = true
    btn.textContent = '...'
    const { data: res, error } = await supabase.rpc('claim_mini_league_prize', {
      p_league_id: league.id, p_user_id: state.profile.id
    })
    if (error || !res?.success) {
      console.error('[MiniLeague] claim_mini_league_prize:', error || res)
      toast(res?.error || 'Erreur lors de la récupération', 'error')
      btn.disabled = false
      btn.textContent = `💰 Récupérer ${prize.toLocaleString('fr')} cr.`
      return
    }
    if (res.already_claimed) {
      toast('Déjà récupéré précédemment', 'info')
    } else {
      const newCredits = (state.profile.credits||0) + res.prize
      if(state.profile) state.profile.credits = newCredits
      const credEl=document.getElementById('nav-credits')
      if(credEl) credEl.textContent=`💰 ${newCredits.toLocaleString('fr')}`
      toast(`💰 +${res.prize.toLocaleString('fr')} cr. ajoutés à ton solde !`,'success')
    }
    ov.remove()
    openLeague(container,ctx,league.id)
  })
}

function generateSchedule(teamIds, mode) {
  const n=teamIds.length; const teams=n%2===0?[...teamIds]:[...teamIds,null]; const N=teams.length
  let circle=teams.slice(1); const days=[]
  for(let r=0;r<N-1;r++){
    const day=[],rotated=[teams[0],...circle]
    for(let i=0;i<N/2;i++){const h=rotated[i],a=rotated[N-1-i];if(h===null)day.push({bye:a});else if(a===null)day.push({bye:h});else day.push({home:h,away:a})}
    days.push(day); circle=[circle[circle.length-1],...circle.slice(0,-1)]
  }
  return mode==='aller-retour'?[...days,...days.map(d=>d.map(m=>m.bye?m:{home:m.away,away:m.home}))]:days
}

function computeStandings(members, matches) {
  const stats={}
  members.forEach(u=>{stats[u.id]={userId:u.id,pseudo:u.pseudo,clubName:u.club_name||u.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}})
  matches.filter(m=>m.status==='finished'&&!m.is_bye&&m.home_score!=null).forEach(m=>{
    const h=stats[m.home_id],a=stats[m.away_id]; if(!h||!a) return
    h.played++;a.played++;h.goalsFor+=m.home_score;h.goalsAgainst+=m.away_score;a.goalsFor+=m.away_score;a.goalsAgainst+=m.home_score
    if(m.home_score>m.away_score){h.won++;h.points+=3;a.lost++}else if(m.home_score<m.away_score){a.won++;a.points+=3;h.lost++}else{h.drawn++;h.points++;a.drawn++;a.points++}
    h.goalDiff=h.goalsFor-h.goalsAgainst;a.goalDiff=a.goalsFor-a.goalsAgainst
  })
  return Object.values(stats).sort((a,b)=>b.points-a.points||b.goalDiff-a.goalDiff||b.goalsFor-a.goalsFor)
}
