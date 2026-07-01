import { supabase } from '../lib/supabase.js'

const GREEN  = '#1A6B3C'
const YELLOW = '#D4A017'

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
    .from('mini_league_members').select('league_id').eq('user_id', uid)
  const myLeagueIds = (myMemberships||[]).map(m => m.league_id)

  const { data: publicWaiting } = await supabase
    .from('mini_leagues').select('*, mini_league_members(count)')
    .eq('type','public').eq('status','waiting').eq('is_archived',false)
    .order('created_at', { ascending: false }).limit(30)

  const myLeaguesQuery = myLeagueIds.length
    ? await supabase.from('mini_leagues').select('*, mini_league_members(count)').in('id', myLeagueIds).order('created_at', { ascending: false })
    : { data: [] }
  const myLeagues = myLeaguesQuery.data||[]

  const myWaiting  = myLeagues.filter(l => l.status==='waiting' && !l.is_archived)
  const myActive   = myLeagues.filter(l => l.status==='active'  && !l.is_archived)
  const myArchived = myLeagues.filter(l => l.is_archived || l.status==='finished')
  const otherPublic = (publicWaiting||[]).filter(l => !myLeagueIds.includes(l.id))

  const tabs = [
    { key:'waiting', label:'🟡 En attente', count: myWaiting.length + otherPublic.length },
    { key:'active',  label:'🟢 En cours',   count: myActive.length },
    { key:'archived',label:'📁 Archivées',  count: myArchived.length },
  ]

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${tabs.map(t => `<button class="ml-tab" data-tab="${t.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${activeTab===t.key?GREEN:'transparent'};background:none;font-size:12px;font-weight:${activeTab===t.key?'900':'600'};color:${activeTab===t.key?GREEN:'#888'};cursor:pointer">${t.label}${t.count?` (${t.count})`:''}</button>`).join('')}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${activeTab==='waiting' ? renderWaitingTab(myWaiting, otherPublic, uid)
        : activeTab==='active' ? renderActiveTab(myActive, uid)
        : renderArchivedTab(myArchived, uid)}
    </div>
  </div>`

  document.getElementById('ml-create-btn')?.addEventListener('click', () => showCreateForm(container, ctx))
  container.querySelectorAll('.ml-tab').forEach(btn => btn.addEventListener('click', () => showLeagueList(container, ctx, btn.dataset.tab)))
  container.querySelectorAll('[data-league-id]').forEach(card => card.addEventListener('click', () => openLeague(container, ctx, card.dataset.leagueId)))
  container.querySelectorAll('[data-join]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); joinLeague(container, ctx, btn.dataset.join, btn.dataset.type) }))
  container.querySelectorAll('[data-delete]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); deleteLeague(container, ctx, btn.dataset.delete, btn.dataset.name, activeTab) }))
}

function leagueCard(l, uid, showJoin=false) {
  const isCreator = l.creator_id === uid
  const pot = l.pot || 0
  const cnt = l.mini_league_members?.[0]?.count || 0
  return `<div data-league-id="${l.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${l.name}</div>
      ${isCreator?`<button data-delete="${l.id}" data-name="${l.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:''}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${showJoin?'10px':'0'}">
      <span>${l.type==='private'?'🔒':'🌐'} ${l.type==='private'?'Privée':'Publique'}</span>
      <span>⚽ ${l.mode==='aller-retour'?'A-R':'Aller'}</span>
      <span>👥 ${cnt}/${l.max_players}</span>
      <span>💰 ${(l.entry_fee||100).toLocaleString('fr')} cr.</span>
      ${pot>0?`<span style="color:${YELLOW};font-weight:700">🏆 ${pot.toLocaleString('fr')} cr.</span>`:''}
      ${l.current_day>0?`<span>📅 J${l.current_day}/${l.total_days}</span>`:''}
    </div>
    ${showJoin?`<button data-join="${l.id}" data-type="${l.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(l.entry_fee||100).toLocaleString('fr')} cr.)</button>`:''}
  </div>`
}

function renderWaitingTab(myWaiting, otherPublic, uid) {
  const parts = []
  if (myWaiting.length) { parts.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'); parts.push(...myWaiting.map(l=>leagueCard(l,uid,false))) }
  if (otherPublic.length) { parts.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'); parts.push(...otherPublic.map(l=>leagueCard(l,uid,true))) }
  return parts.length ? parts.join('') : '<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'
}
function renderActiveTab(l,uid) { return l.length ? l.map(x=>leagueCard(x,uid)).join('') : '<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>' }
function renderArchivedTab(l,uid) { return l.length ? l.map(x=>leagueCard(x,uid)).join('') : '<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>' }

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
  ov.addEventListener('click', e => { if(e.target===ov) ov.remove() })
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

async function joinLeague(container, ctx, leagueId, type) {
  const { toast, state } = ctx
  const uid = state.profile.id

  // Charger la league pour connaître la mise et vérifier les places
  const { data: league } = await supabase.from('mini_leagues')
    .select('password,status,entry_fee,pot,max_players').eq('id', leagueId).single()
  if (!league) { toast('Mini League introuvable', 'error'); return }
  if (league.status !== 'waiting') { toast('Cette Mini League a déjà démarré', 'warning'); return }

  // Vérifier le nombre de joueurs actuel
  const { count: currentCount } = await supabase.from('mini_league_members')
    .select('id', { count: 'exact', head: true }).eq('league_id', leagueId)
  if (currentCount >= league.max_players) { toast('La Mini League est complète', 'warning'); return }

  // Mot de passe si privée
  if (type === 'private') {
    const pwd = prompt('Mot de passe :')
    if (pwd === null) return
    if (league.password !== pwd) { toast('Mot de passe incorrect', 'error'); return }
  }

  // Vérifier les crédits du joueur
  const fee = league.entry_fee || 100
  const { data: me } = await supabase.from('users').select('credits').eq('id', uid).single()
  if ((me?.credits || 0) < fee) {
    toast(`Crédits insuffisants. Il te faut ${fee.toLocaleString('fr')} cr. (tu as ${(me?.credits||0).toLocaleString('fr')} cr.)`, 'error')
    return
  }

  // Prélever les crédits et mettre à jour le pot
  await supabase.from('users').update({ credits: (me.credits) - fee }).eq('id', uid)
  await supabase.from('mini_leagues').update({ pot: (league.pot || 0) + fee }).eq('id', leagueId)

  const { error } = await supabase.from('mini_league_members').insert({ league_id: leagueId, user_id: uid })
  if (error) {
    // Rollback : rembourser les crédits si l'insert échoue
    await supabase.from('users').update({ credits: me.credits }).eq('id', uid)
    await supabase.from('mini_leagues').update({ pot: league.pot || 0 }).eq('id', leagueId)
    toast('Erreur : ' + error.message, 'error'); return
  }

  // Mettre à jour les crédits locaux
  if (state.profile) state.profile.credits = (me.credits) - fee
  const credEl = document.getElementById('nav-credits')
  if (credEl) credEl.textContent = `💰 ${((state.profile.credits)||0).toLocaleString('fr')}`

  toast(`✅ Inscrit ! ${fee.toLocaleString('fr')} cr. déduits · Pot : ${((league.pot||0)+fee).toLocaleString('fr')} cr.`, 'success')
  openLeague(container, ctx, leagueId)
}

async function leaveLeague(container, ctx, leagueId, fee) {
  const { toast, state } = ctx
  const uid = state.profile.id
  if (!confirm(`Te désinscrire et récupérer ${fee.toLocaleString('fr')} crédits ?`)) return

  // Récupérer pot actuel
  const { data: league } = await supabase.from('mini_leagues').select('pot,status').eq('id', leagueId).single()
  if (!league || league.status !== 'waiting') { toast('Impossible de se désinscrire (league déjà lancée)', 'error'); return }

  // Rembourser les crédits
  const { data: me } = await supabase.from('users').select('credits').eq('id', uid).single()
  await supabase.from('users').update({ credits: (me?.credits || 0) + fee }).eq('id', uid)
  await supabase.from('mini_leagues').update({ pot: Math.max(0, (league.pot || 0) - fee) }).eq('id', leagueId)
  await supabase.from('mini_league_members').delete().eq('league_id', leagueId).eq('user_id', uid)

  if (state.profile) state.profile.credits = (me?.credits || 0) + fee
  const credEl = document.getElementById('nav-credits')
  if (credEl) credEl.textContent = `💰 ${(state.profile.credits||0).toLocaleString('fr')}`

  toast(`↩️ Désinscrit · ${fee.toLocaleString('fr')} cr. remboursés`, 'success')
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

async function openLeague(container, ctx, leagueId) {
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

  container.innerHTML = `
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${league.name}</div>
        <div style="font-size:11px;color:#888">${league.mode==='aller-retour'?'Aller-Retour':'Aller'} · max ${league.max_players} · 💰 ${fee} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${league.status==='active'?'#d1fae5':league.status==='finished'?'#f3e8ff':'#fef9c3'};color:${league.status==='active'?'#166534':league.status==='finished'?'#6b21a8':'#854d0e'}">
          ${league.status==='waiting'?'En attente':league.status==='active'?`J${league.current_day}/${league.total_days}`:'Terminée'}
        </div>
        ${pot>0?`<div style="font-size:12px;font-weight:900;color:${YELLOW};margin-top:4px">🏆 ${pot.toLocaleString('fr')} cr.</div>`:''}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${league.status==='waiting'?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${memberList.length}/${league.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${fee} cr./joueur → Pot estimé : ${(fee*memberList.length).toLocaleString('fr')} cr. (🥇${Math.floor(fee*memberList.length*.7).toLocaleString('fr')} · 🥈${Math.floor(fee*memberList.length*.2).toLocaleString('fr')} · 🥉${Math.floor(fee*memberList.length*.1).toLocaleString('fr')})</div>
        ${memberList.map(u=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${u.club_color2||GREEN};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${u.club_color1||'#fff'}">${(u.pseudo||'?').slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${u.club_name||u.pseudo}</div><div style="font-size:11px;color:#999">@${u.pseudo}</div></div>
            ${u.id===league.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':''}
          </div>`).join('')}
        ${isCreator&&memberList.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${fee} cr. × ${memberList.length})</button>`:''}
        ${isCreator?`<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>`:''}
        ${!isMember?`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${fee} cr.)</button>`:''}
        ${isMember&&!isCreator?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${fee.toLocaleString('fr')} cr.</button>
        `:''}
      </div>`:''}

      ${league.status==='active'?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${league.current_day} / ${league.total_days}</div>
        ${todayMatches.map(m=>matchRowHTML(m,memberList,uid,isMember)).join('')}
        ${isCreator&&allTodayDone&&!isLastDay?`<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>`:''}
        ${isCreator&&allTodayDone&&isLastDay?`<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>`:''}
      </div>`:''}

      ${(league.status==='active'||league.status==='finished')&&standings.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${pot>0&&league.status==='finished'?`<th style="text-align:right;padding:5px 0;color:${YELLOW}">💰</th>`:''}
          </tr></thead>
          <tbody>${standings.map((s,i)=>{
            const prize=(pot>0&&league.status==='finished')?(i===0?Math.floor(pot*.7):i===1?Math.floor(pot*.2):i===2?Math.floor(pot*.1):0):0
            return `<tr style="border-bottom:1px solid #f5f5f5;${s.userId===uid?'background:#f0fdf4;':''}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${i===0?YELLOW:i<3?GREEN:'#555'}">${['🥇','🥈','🥉'][i]||i+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${s.clubName}</div><div style="font-size:10px;color:#999">@${s.pseudo}</div></td>
              <td style="text-align:center">${s.played}</td><td style="text-align:center">${s.won}-${s.drawn}-${s.lost}</td>
              <td style="text-align:center;color:${s.goalDiff>=0?GREEN:'#cc2222'}">${s.goalDiff>=0?'+':''}${s.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${s.points}</td>
              ${pot>0&&league.status==='finished'?`<td style="text-align:right;font-weight:700;color:${YELLOW}">${prize?prize.toLocaleString('fr')+' cr.':'—'}</td>`:''}
            </tr>`}).join('')}</tbody>
        </table>
      </div>`:''}

      ${league.status!=='waiting'&&league.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,league.status==='active'?league.current_day-1:league.current_day)},(_,i)=>i+1).reverse().map(day=>{
          const dayM=(mlMatches||[]).filter(m=>m.matchday===day)
          return `<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${day}</div>${dayM.map(m=>matchRowHTML(m,memberList,uid,false,true)).join('')}</div>`
        }).join('')}
      </div>`:''}

      ${isCreator&&!league.is_archived&&league.status!=='waiting'?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:''}

    </div>
  </div>`

  const backTab=league.status==='waiting'?'waiting':league.status==='active'?'active':'archived'
  document.getElementById('ml-back')?.addEventListener('click', ()=>showLeagueList(container,ctx,backTab))
  document.getElementById('ml-start-btn')?.addEventListener('click', ()=>startLeague(container,ctx,league,memberList))
  document.getElementById('ml-next-day')?.addEventListener('click', ()=>nextMatchday(container,ctx,leagueId))
  document.getElementById('ml-finish-btn')?.addEventListener('click', ()=>finishLeague(container,ctx,leagueId,pot,standings,memberList))
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
}

function matchRowHTML(m, members, uid, isMember, readonly=false) {
  const getUser=id=>members.find(u=>u.id===id)
  if(m.is_bye){const e=getUser(m.home_id);return `<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${e?.club_name||e?.pseudo||'?'} exempté(e)</div>`}
  const home=getUser(m.home_id),away=getUser(m.away_id)
  const isMyMatch=m.home_id===uid||m.away_id===uid
  const canPlay=isMyMatch&&m.status==='pending'&&isMember&&!readonly
  const score=m.status==='finished'?`${m.home_score} - ${m.away_score}`:'vs'
  return `<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${isMyMatch?'#f0fdf4':'#f9f9f9'};margin-bottom:6px;border:1px solid ${isMyMatch?'#86efac':'#f0f0f0'}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${home?.club_name||home?.pseudo||'?'}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${m.status==='finished'?GREEN:'#999'}">${score}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${away?.club_name||away?.pseudo||'?'}</div>
    ${canPlay?`<button data-play-match="${m.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:''}
    ${m.status==='finished'?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':''}
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
  if(next>(l.total_days||0)){await finishLeague(container,ctx,leagueId,l.pot||0,null,null);return}
  await supabase.from('mini_leagues').update({current_day:next}).eq('id',leagueId)
  ctx.toast(`Journée ${next} commencée !`,'success'); openLeague(container,ctx,leagueId)
}

async function finishLeague(container, ctx, leagueId, pot, standingsIn, memberListIn) {
  const {toast,state}=ctx
  let standings=standingsIn, memberList=memberListIn
  if(!standings){
    const {data:ml}=await supabase.from('mini_league_matches').select('*').eq('league_id',leagueId)
    const {data:mem}=await supabase.from('mini_league_members').select('*, user:users(id,pseudo,club_name)').eq('league_id',leagueId)
    memberList=(mem||[]).map(m=>m.user).filter(Boolean)
    standings=computeStandings(memberList,ml||[])
  }
  const prizes=[Math.floor(pot*.7),Math.floor(pot*.2),Math.floor(pot*.1)]
  const {data:users}=await supabase.from('users').select('id,credits').in('id',memberList.map(u=>u.id))
  await Promise.all(standings.slice(0,3).map((s,i)=>{
    if(!prizes[i]) return Promise.resolve()
    const u=(users||[]).find(x=>x.id===s.userId); if(!u) return Promise.resolve()
    return supabase.from('users').update({credits:(u.credits||0)+prizes[i]}).eq('id',s.userId)
  }))
  await supabase.from('mini_leagues').update({status:'finished'}).eq('id',leagueId)
  const myPos=standings.findIndex(s=>s.userId===state.profile.id)
  if(myPos>=0&&myPos<3&&prizes[myPos]){
    state.profile.credits=(state.profile.credits||0)+prizes[myPos]
    toast(`🏆 Terminée ! Tu remportes ${prizes[myPos].toLocaleString('fr')} cr. !`,'success')
  } else toast('🏆 Mini League terminée !','success')
  openLeague(container,ctx,leagueId)
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
