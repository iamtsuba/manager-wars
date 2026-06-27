import{s as k,F as Ot,h as vt,j as $i,l as Je,i as Xi,k as Ji,b as Qi}from"./formation-links-CEzN0rcz.js";function ci(e,{navigate:t,toast:i}){e.innerHTML=`
  <div class="auth-screen" style="animation:fadeIn 0.4s ease">
    <div class="auth-box">
      <div class="logo">⚽</div>
      <h1>Manager Wars</h1>
      <p class="subtitle">Le jeu de cartes football stratégique</p>

      <div class="auth-tabs">
        <div class="auth-tab active" data-tab="login">Connexion</div>
        <div class="auth-tab" data-tab="register">Inscription</div>
      </div>

      <!-- Login -->
      <div id="tab-login">
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="login-email" placeholder="manager@example.com" autocomplete="email">
        </div>
        <div class="form-group">
          <label>Mot de passe</label>
          <input type="password" id="login-password" placeholder="••••••••" autocomplete="current-password">
        </div>
        <div id="login-error" class="form-error"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" id="login-btn">
          Se connecter
        </button>
      </div>

      <!-- Register -->
      <div id="tab-register" style="display:none">
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="reg-email" placeholder="manager@example.com" autocomplete="email">
        </div>
        <div class="form-group">
          <label>Mot de passe (min. 6 caractères)</label>
          <input type="password" id="reg-password" placeholder="••••••••" autocomplete="new-password">
        </div>
        <div class="form-group">
          <label>Confirmer le mot de passe</label>
          <input type="password" id="reg-confirm" placeholder="••••••••" autocomplete="new-password">
        </div>
        <div id="reg-error" class="form-error"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" id="reg-btn">
          Créer mon compte
        </button>
        <p style="font-size:11px;color:var(--gray-600);text-align:center;margin-top:10px">
          Un compte = un Manager. Gratuit, sans CB.
        </p>
      </div>
    </div>
  </div>

  <style>
    @keyframes fadeIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:none } }
  </style>
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,a=document.getElementById("login-error");if(a.textContent="",!n||!c){a.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:d}=await k.auth.signInWithPassword({email:n,password:c});if(s.textContent="Se connecter",s.disabled=!1,d){a.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,a=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!n||!c||!a){s.textContent="Remplissez tous les champs.";return}if(c.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==a){s.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:p}=await k.auth.signUp({email:n,password:c});if(d.textContent="Créer mon compte",d.disabled=!1,p){s.textContent=p.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function Zi(e,{state:t,navigate:i,toast:n,refreshProfile:c}){let a="#1A6B3C",s="#D4A017";e.innerHTML=`
  <div class="setup-screen">
    <div class="setup-box">
      <div style="text-align:center;margin-bottom:8px">
        <div style="font-size:36px">⚽</div>
        <h2 style="font-weight:900;font-size:20px">Création de ton profil</h2>
        <p style="font-size:13px;color:var(--gray-600)">Étape <span id="step-num">1</span> sur 3</p>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width:33%"></div></div>

      <!-- Étape 1 : Pseudo -->
      <div class="setup-step active" id="step-1">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:12px">Choisis ton pseudo</h3>
        <p style="font-size:13px;color:var(--gray-600);margin-bottom:16px">Ce nom sera affiché à tous les autres Managers.</p>
        <div class="form-group">
          <label>Pseudo unique</label>
          <input type="text" id="setup-pseudo" placeholder="Ex: BallonDor29" maxlength="20">
          <div style="font-size:11px;color:var(--gray-600);margin-top:4px">Entre 3 et 20 caractères</div>
        </div>
        <div id="step1-error" class="form-error"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:12px" id="step1-next">Suivant →</button>
      </div>

      <!-- Étape 2 : Club -->
      <div class="setup-step" id="step-2">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:12px">Crée ton club</h3>
        <p style="font-size:13px;color:var(--gray-600);margin-bottom:16px">Le nom de ton équipe, unique dans tout le jeu.</p>
        <div class="form-group">
          <label>Nom du club</label>
          <input type="text" id="setup-club" placeholder="Ex: Les Invincibles" maxlength="30">
        </div>
        <div id="step2-error" class="form-error"></div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn btn-ghost" id="step2-back" style="flex:1">← Retour</button>
          <button class="btn btn-primary" id="step2-next" style="flex:2">Suivant →</button>
        </div>
      </div>

      <!-- Étape 3 : Logo couleurs -->
      <div class="setup-step" id="step-3">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:4px">Design ton logo</h3>
        <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px">Choisis les couleurs de ton club.</p>

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${a}">
          <span id="logo-initials" style="color:${a}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${a};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${a}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch2" style="background:${s};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${s}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
        </div>

        <div id="step3-error" class="form-error" style="margin-top:8px"></div>
        <div style="display:flex;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="step3-back" style="flex:1">← Retour</button>
          <button class="btn btn-primary" id="step3-finish" style="flex:2">🚀 Créer mon profil !</button>
        </div>
      </div>
    </div>
  </div>
  `;function d(){var y;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((y=document.getElementById("setup-club"))==null?void 0:y.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=a),r&&(r.textContent=g,r.style.color=a)}document.getElementById("color1").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch1").style.background=a,d()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,d()});function p(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await k.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await k.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await k.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:a,club_color2:s,credits:1e4});if(g)throw g;await eo(t.user.id),await c(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function eo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await k.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const mt="#1A6B3C",xt="#cc2222",to="#D4A017",pi="#888";async function io(e,t){const{state:i,toast:n}=t;e.innerHTML=`
    <div style="padding:16px;max-width:640px;margin:0 auto">
      <h2 style="font-size:20px;font-weight:900;margin-bottom:16px">👥 Amis</h2>

      <!-- Actions -->
      <div style="display:flex;gap:10px;margin-bottom:20px">
        <button id="btn-add-friend" class="btn btn-primary" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
          ➕ Ajouter un ami
        </button>
        <button id="btn-accept-friend" class="btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:#fff;border:1.5px solid var(--green,#1A6B3C);color:var(--green,#1A6B3C);font-weight:700">
          ✅ Accepter un ami
          <span id="pending-badge" style="display:none;background:#cc2222;color:#fff;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center"></span>
        </button>
      </div>

      <!-- Liste amis -->
      <div id="friends-list">
        <div style="text-align:center;color:#aaa;padding:32px">Chargement…</div>
      </div>
    </div>`,await _i(i,n),document.getElementById("btn-add-friend").addEventListener("click",()=>no(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>ki(i,n))}async function _i(e,t){const i=e.user.id,{data:n,error:c}=await k.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${i},addressee_id.eq.${i}`),{count:a}=await k.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",i).eq("status","pending"),s=document.getElementById("pending-badge");s&&(a>0?(s.style.display="flex",s.textContent=a):s.style.display="none");const d=document.getElementById("friends-list");if(!d)return;if(c){console.error("[Friends] Erreur:",c),d.innerHTML=`<div style="color:${xt};text-align:center;padding:16px">Erreur chargement : ${c.message}</div>`;return}const p=(n||[]).map(u=>u.requester_id===i?u.addressee_id:u.requester_id);let o={};if(p.length){const{data:u}=await k.from("users").select("id, pseudo, club_name, last_seen_at").in("id",p);(u||[]).forEach(f=>{o[f.id]=f})}const r=(n||[]).map(u=>({friendshipId:u.id,friend:o[u.requester_id===i?u.addressee_id:u.requester_id]||{pseudo:"?"}}));if(!r.length){d.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}d.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${r.length} ami${r.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${r.map(({friendshipId:u,friend:f})=>oo(f,u)).join("")}
    </div>`,d.querySelectorAll("[data-stats]").forEach(u=>{u.addEventListener("click",()=>ro(e,u.dataset.stats,u.dataset.friendName))}),d.querySelectorAll("[data-match]").forEach(u=>{u.addEventListener("click",()=>t("⚽ Match ami — Bientôt disponible !","info"))})}function oo(e,t){const i=e.club_name||e.pseudo||"?",n=(e.pseudo||"?").slice(0,2).toUpperCase(),c=e.last_seen_at?new Date(e.last_seen_at):null,a=c&&Date.now()-c.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <!-- Avatar + point de présence -->
      <div style="position:relative;width:42px;height:42px;flex-shrink:0">
        <div style="width:42px;height:42px;border-radius:50%;background:${mt};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff">
          ${n}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${a?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px;flex-shrink:0"></div>`}
      </div>
      <!-- Infos -->
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:${a?"#22c55e":"#999"};font-weight:600">${a?"En ligne":"Hors ligne"}</div>
      </div>
      <!-- Boutons -->
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid ${to};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function no(e,t){const i=Ht();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${xt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ut()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),a=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",a),i.addEventListener("click",s=>{s.target===i&&a()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=n.value.trim();if(!s){c.textContent="Entre un pseudo";return}c.textContent="";const{data:d}=await k.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!d){c.textContent="Utilisateur introuvable";return}if(d.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await k.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${e.user.id})`).single();if(p){const r=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=r;return}const{error:o}=await k.from("friendships").insert({requester_id:e.user.id,addressee_id:d.id,status:"pending"});if(o){c.textContent="Erreur : "+o.message;return}a(),t(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function ki(e,t,i=null){const n=e.user.id,{data:c}=await k.from("friendships").select("id, requester_id").eq("addressee_id",n).eq("status","pending").order("created_at",{ascending:!1}),a=(c||[]).map(u=>u.requester_id);let s={};if(a.length){const{data:u}=await k.from("users").select("id, pseudo, club_name").in("id",a);(u||[]).forEach(f=>{s[f.id]=f})}const d=(c||[]).map(u=>({...u,requester:s[u.requester_id]||{pseudo:"?"}})),p=Ht(),o=d||[];p.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(u=>{var f,g,y;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((f=u.requester)==null?void 0:f.club_name)||((g=u.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((y=u.requester)==null?void 0:y.pseudo)||""})</span>
                </div>
                <button data-accept="${u.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${mt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${u.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${xt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ut()}`,document.body.appendChild(p);const r=()=>p.remove();p.querySelector("#pending-close").addEventListener("click",r),p.addEventListener("click",u=>{u.target===p&&r()}),p.querySelectorAll("[data-accept]").forEach(u=>{u.addEventListener("click",async()=>{const{error:f}=await k.from("friendships").update({status:"accepted"}).eq("id",u.dataset.accept);if(f){t("Erreur : "+f.message,"error");return}u.closest("div[style]").remove(),t("✅ Ami accepté !","success"),_i(e,t),i&&i()})}),p.querySelectorAll("[data-decline]").forEach(u=>{u.addEventListener("click",async()=>{await k.from("friendships").delete().eq("id",u.dataset.decline),u.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function ro(e,t,i){const n=e.user.id,[c,a]=[n,t].sort(),s=n===c,{data:d}=await k.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",a).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",o=d||{},r=s?o.wins_p1||0:o.wins_p2||0,u=s?o.wins_p2||0:o.wins_p1||0,f=o.draws||0,g=s?o.goals_p1||0:o.goals_p2||0,y=s?o.goals_p2||0:o.goals_p1||0,l=s?o.gc_used_p1||0:o.gc_used_p2||0,x=s?o.gc_used_p2||0:o.gc_used_p1||0,v=o.matches_total||0,h=(D,_,w,S=mt,ee=xt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${S}">${_}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${D}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${ee}">${w}</div>
    </div>`,I=Ht();I.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${v===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${h("Victoires",r,u)}
        ${h("Nuls",f,f,pi,pi)}
        ${h("Défaites",u,r)}
        ${h("Buts marqués",g,y)}
        ${h("Buts encaissés",y,g,xt,mt)}
        ${h("GC utilisés ⚡",l,x,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${v} match${v>1?"s":""} joué${v>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Ut()}`,document.body.appendChild(I),I.querySelector("#stats-close").addEventListener("click",()=>I.remove()),I.addEventListener("click",D=>{D.target===I&&I.remove()})}function Ht(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Ut(){return`
    <style>
      .popup-box {
        background:#fff;border-radius:18px;padding:24px;
        width:100%;max-width:420px;
        box-shadow:0 8px 40px rgba(0,0,0,0.25);
        max-height:85vh;overflow-y:auto;
      }
      .popup-title {
        font-size:18px;font-weight:900;margin-bottom:14px;
      }
      .popup-btn-ok {
        flex:1;padding:12px;border-radius:10px;border:none;
        background:${mt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const ao="2026.06.27-1542";async function ui(e,{state:t,navigate:i,toast:n}){var a,s;const c=t.profile;c&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${c.club_color1};border:2px solid ${c.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${c.pseudo}</h3>
          <div class="level">Niveau ${c.level} · ${c.club_name}</div>
        </div>
        <button class="nav-rankings-btn" id="nav-matches" title="Mes matchs" style="margin-left:auto">
          <img src="/manager-wars/icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:22px'}))">
        </button>
      </div>

      <!-- Ranked (bouton) -->
      <div class="ranked-banner play-card" data-action="ranked">
        <img src="/manager-wars/icons/badge-ranked.png" alt="" class="play-icon">
        <img src="/manager-wars/icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay">
      </div>

      <!-- Jeu : 4 tuiles -->
      <div class="play-grid">
        <div class="play-card" data-action="match-ai">
          <img src="/manager-wars/icons/badge-ai.png" alt="" class="play-icon">
          <img src="/manager-wars/icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay">
        </div>
        <div class="play-card" data-action="match-random">
          <img src="/manager-wars/icons/badge-random.png" alt="" class="play-icon">
          <img src="/manager-wars/icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay">
        </div>
        <div class="play-card" data-action="match-friend">
          <img src="/manager-wars/icons/badge-vs.png" alt="" class="play-icon">
          <img src="/manager-wars/icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay">
        </div>
        <div class="play-card" data-action="mini-league">
          <img src="/manager-wars/icons/badge-league.png" alt="" class="play-icon">
          <img src="/manager-wars/icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay">
        </div>
      </div>

            <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${c.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${ao}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",p=>{p.preventDefault(),i(d.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const p=d.dataset.action;if(p==="match-ai"){so(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()}),Ei(t,n))}async function Ei(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:c}=await k.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(n!=null&&n.length)){i.innerHTML="";return}const a=n.length,s=n.slice(0,2).map(p=>{var o;return((o=p.requester)==null?void 0:o.pseudo)||"?"}).join(", "),d=a>2?` +${a-2}`:"";i.innerHTML=`
    <div id="friend-req-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1A6B3C,#2a9d5c);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(26,107,60,0.35);
      animation:friendReqPulse 2.5s ease-in-out infinite;
    ">
      <style>
        @keyframes friendReqPulse {
          0%,100% { box-shadow:0 3px 12px rgba(26,107,60,0.35) }
          50% { box-shadow:0 3px 22px rgba(26,107,60,0.65) }
        }
      </style>
      <div style="background:rgba(255,255,255,0.25);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">
          ${a} demande${a>1?"s":""} d'ami${a>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${s}${d}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{ki(e,t,()=>Ei(e,t))})}function so(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(c=>`
            <div class="action-card" data-mode="${c.mode}" style="cursor:pointer">
              <div class="icon">${c.icon}</div>
              <div class="label">${c.label}</div>
              <div class="sub">${c.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",c=>{c.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{n(),e("match",{matchMode:c.dataset.mode})})})}const Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function me(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const fi=["ATT","MIL","DEF","GK"];function Ai(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let c=n+1;c<i;c++){const a=e[n],s=e[c];if(!a||!s)continue;const d=a._col!=null&&s._col!=null&&a._col===s._col,p=a._col!=null&&s._col!=null&&Math.abs(a._col-s._col)===1,o=fi.indexOf(a._line||a.job),r=fi.indexOf(s._line||s.job),u=Math.abs(o-r)===1;if(!((a._line||a.job)===(s._line||s.job)&&p||d&&u))continue;const y=a.country_code&&s.country_code&&a.country_code===s.country_code,l=a.club_id&&s.club_id&&a.club_id===s.club_id;y&&l?t+=2:(y||l)&&(t+=1)}return t}function Kt(e,t={}){const i=e.reduce((a,s)=>{const d=s._line||s.job;return a+(Number(d==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),n=Ai(e);let c=i+n;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:n,total:Math.max(0,c)}}function Vt(e,t={}){const i=e.reduce((a,s)=>{const d=s._line||s.job;let p=0;return d==="GK"?p=Number(s.note_g)||0:d==="MIL"?p=Number(s.note_m)||0:p=Number(s.note_d)||0,a+p+(s.boost||0)},0),n=Ai(e);let c=i+n;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:n,total:Math.max(0,c)}}function Yt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ti(e,t,i="easy"){const n=e.filter(s=>!s.used);if(!n.length)return[];const c=[...n].sort((s,d)=>{const p=t==="attack"?me(s,"ATT"):s._line==="GK"?me(s,"GK"):me(s,"DEF");return(t==="attack"?me(d,"ATT"):d._line==="GK"?me(d,"GK"):me(d,"DEF"))-p});let a=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(a,c.length,3))}function lo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Ii={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ft={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},wt=["GK","DEF","MIL","ATT"],co=["Tous","GK","DEF","MIL","ATT"],po={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Wt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Li(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function yt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function St(e,t=""){var u,f;const i=e.player;if(!i)return"";const n=i.job||"ATT",c=ft[n],a=Ii[i.rarity]||"#ccc",s=yt(i,n),d=i.job2?yt(i,i.job2):null,p=i.job2?ft[i.job2]:null,o=Li(i),r=Wt[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${a};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${e.id}">
    ${t}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${i.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(i.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${c}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${c}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${p}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function gi(e){const t=e.job||"ATT",i=yt(e,t),n=Wt[e.country_code]||e.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:#ccc;flex-shrink:0;position:relative;filter:grayscale(1);opacity:0.45
  ">
    <div style="background:#e8e8e8;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#888">${e.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#444;font-family:Arial Black,Arial;line-height:1.1">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#e8e8e8;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:#999"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="#999" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${i}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${n}</div>
      </div>
    </div>
  </div>`}async function uo(e,t){const{state:i,navigate:n,toast:c,openModal:a,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(d||[]).filter(M=>M.card_type==="player"&&M.player),r=(d||[]).filter(M=>M.card_type==="game_changer"),u=(d||[]).filter(M=>M.card_type==="formation"),{data:f}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(f||[]).forEach(M=>{g[M.name]=M});const y=Object.keys(Ot),l=Object.keys(Ce),x={};o.forEach(M=>{const C=M.player.id;x[C]=(x[C]||0)+1}),new Set(Object.keys(x).map(M=>String(M)));const v=new Set(u.map(M=>M.formation)),h=new Set(r.map(M=>M.gc_type));let I="player",D="Tous",_="",w=!1;function S(){return[...o].sort((M,C)=>{const N=wt.indexOf(M.player.job),j=wt.indexOf(C.player.job);return N!==j?N-j:(M.player.surname_encoded||"").localeCompare(C.player.surname_encoded||"")})}function ee(){return[...p||[]].sort((M,C)=>{const N=wt.indexOf(M.job),j=wt.indexOf(C.job);return N!==j?N-j:(M.surname_encoded||"").localeCompare(C.surname_encoded||"")})}function re(){return S().filter(M=>{const C=M.player,N=D==="Tous"||C.job===D,j=!_||`${C.firstname} ${C.surname_encoded}`.toLowerCase().includes(_);return N&&j})}function te(){return ee().filter(M=>{const C=D==="Tous"||M.job===D,N=!_||`${M.firstname} ${M.surname_encoded}`.toLowerCase().includes(_);return C&&N})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="player"?"var(--green)":"transparent"};
        color:${I==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="formation"?"var(--green)":"transparent"};
        color:${I==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="gc"?"var(--green)":"transparent"};
        color:${I==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${r.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function $(){const M=document.getElementById("col-filters");M&&(I==="player"?(M.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${_}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${co.map(C=>`
            <button class="filter-btn" data-job="${C}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${C===D?"var(--green)":"var(--gray-200)"};
                background:${C===D?"var(--green)":"#fff"};
                color:${C===D?"#fff":"var(--gray-600)"}">
              ${C}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${w?"var(--yellow)":"var(--gray-200)"};
              background:${w?"var(--yellow)":"#fff"};
              color:${w?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${w?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",C=>{_=C.target.value.toLowerCase(),R()}),e.querySelectorAll(".filter-btn").forEach(C=>{C.addEventListener("click",()=>{D=C.dataset.job,$(),R()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{w=!w,$(),R()})):(M.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${w?"var(--yellow)":"var(--gray-200)"};
              background:${w?"var(--yellow)":"#fff"};
              color:${w?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${w?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{w=!w,$(),R()})))}function R(){const M=document.getElementById("col-grid");M&&(I==="player"?se(M):I==="formation"?de(M):ae(M))}function Y(M,C,N,j,P){P=P||"#7a28b8";const oe=document.getElementById("col-grid"),W=document.getElementById("col-big");if(!oe||!W)return;var ve=0;function xe(){W.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+C(M[ve])+"</div>";var ge=W.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ge&&ge.addEventListener("click",function(){j(M[ve])}),requestAnimationFrame(function(){var fe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!fe||!W)){var be=W.clientHeight-8,Ee=W.clientWidth-24,Le=fe.offsetHeight,Ie=fe.offsetWidth;if(Le>0&&Ie>0&&be>40){var je=Math.min(be/Le,Ee/Ie,1);fe.style.transform="scale("+je.toFixed(3)+")",fe.style.transformOrigin="top center"}}}),oe.innerHTML=M.map(function(fe,be){return'<div class="col-mini-item" data-idx="'+be+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(be===ve?P:"transparent")+';transition:border-color .15s;overflow:hidden">'+N(fe,be===ve)+"</div>"}).join(""),oe.querySelectorAll(".col-mini-item").forEach(function(fe){fe.addEventListener("click",function(){ve=Number(fe.dataset.idx),xe(),fe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}xe()}function A(M){var C=.54,N=Math.round(140*C),j=Math.round(310*C),P;if(!M||M._fake){var oe=M?M.player:null;if(!oe)return"";P=gi(oe)}else P=St(M,"");return'<div style="width:'+N+"px;height:"+j+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+C+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+P+"</div></div>"}function K(M,C,N){C=C||100,N=N||140;var j=vt[M]||{},P={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},oe=Math.max(3,Math.round(C*.06)),W=Object.entries(j).map(function(xe){var ge=xe[0],fe=xe[1],be=ge.replace(/\d+$/,""),Ee=P[be]||"#888",Le=Math.round(fe.x*C),Ie=Math.round(fe.y*N);return'<circle cx="'+Le+'" cy="'+Ie+'" r="'+oe+'" fill="'+Ee+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(C/50));return'<svg viewBox="0 0 '+C+" "+N+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+C+'" height="'+N+'" fill="#1A6B3C"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(N*.02)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(N*.5)+'" x2="'+C+'" y2="'+Math.round(N*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(C*.5)+'" cy="'+Math.round(N*.5)+'" rx="'+Math.round(C*.18)+'" ry="'+Math.round(N*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(N*.82)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+W+"</svg>"}function G(M,C,N){var j=N>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+N+"</div>":"",P=C?'data-form-id="'+C.id+'"':"",oe=M.length>7?14:M.length>5?16:19,W=!!C;return"<div "+P+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(W?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(W?"":"filter:grayscale(1);opacity:0.5")+'">'+j+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(W?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+oe+"px;font-weight:900;color:"+(W?"#1A6B3C":"#aaa")+';line-height:1">'+M+'</div></div><div style="flex:1;overflow:hidden;background:'+(W?"#1A6B3C":"#ccc")+'">'+K(M,140,220)+"</div></div>"}function J(M,C){var N=.54,j=Math.round(140*N),P=Math.round(305*N),oe=Math.round(P*.22),W=P-oe,ve=M.length>7?5:7,xe=K(M,j,W),ge=C?"1.5px solid #2a7a40":"1px solid #ddd",fe=C?"":"filter:grayscale(1);opacity:0.45;",be=C?"#1A6B3C":"#bbb",Ee="#fff";return'<div style="width:'+j+"px;height:"+P+"px;border-radius:6px;border:"+ge+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+fe+'"><div style="height:'+oe+"px;background:"+be+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+Ee+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(j-4)+'px">'+M+'</span></div><div style="height:'+W+'px;overflow:hidden;flex-shrink:0">'+xe+"</div></div>"}function se(M){if(w){const C=te();if(!C.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const N=C.map(j=>o.find(P=>P.player.id===j.id)||{_fake:!0,player:j,id:"fake-"+j.id});Y(N,j=>j._fake?gi(j.player):St(j,""),j=>j._fake?A({player:j.player,id:"x",_fake:!0}):A(j),j=>{j._fake||mi(j,o,x,t)},"#1A6B3C")}else{const C=re();if(!C.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const N={},j=[];C.forEach(P=>{N[P.player.id]||(N[P.player.id]=!0,j.push(P))}),Y(j,P=>{const oe=x[P.player.id]||1,W=oe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${oe}</div>`:"",xe=o.filter(ge=>ge.player.id===P.player.id&&ge.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return St(P,W+xe)},P=>A(P),P=>mi(P,o,x,t),"#1A6B3C")}}function de(M){const C=w?y:[...v];if(!C.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const N=C.map(j=>({formation:j,card:u.find(P=>P.formation===j)||null,owned:v.has(j)}));Y(N,({formation:j,card:P,owned:oe})=>G(j,oe?P:null,oe?u.filter(W=>W.formation===j).length:0),({formation:j,owned:P})=>J(j,P),({card:j,owned:P})=>{P&&j&&go(j,u,t,a)},"#1A6B3C")}function ae(M){const C=Object.keys(g),N=w?C.length?C:l:[...h];if(!N.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const j=N.map(P=>({type:P,gc:Ce[P]||{icon:"⚡",desc:""},def:g[P]||null,owned:h.has(P),card:r.find(oe=>oe.gc_type===P)||null}));Y(j,({type:P,gc:oe,def:W,owned:ve,card:xe})=>{const ge=ve?r.filter(L=>L.gc_type===P).length:0,fe=ge>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ge}</div>`:"",be=(W==null?void 0:W.gc_type)==="ultra_game_changer",Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#b06ce0",light_blue:"#00d4ef"},Ie=Ee[W==null?void 0:W.color]||Ee.purple,je=Le[W==null?void 0:W.color]||Le.purple,m=(W==null?void 0:W.effect)||oe.desc||"",b=W!=null&&W.image_url?`/manager-wars/icons/${W.image_url}`:null;return ve&&xe?`<div data-gc-id="${xe.id}" data-gc-type="${P}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${je};background:${Ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${je}66;cursor:pointer">
          ${fe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${P.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${P}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${be?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${oe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${m.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${P}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${oe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:P,gc:oe,def:W,owned:ve})=>ve?(()=>{const xe=Math.round(75.60000000000001),ge=Math.round(310*.54),fe=Math.round(ge*.65),be=Math.round(ge*.18),Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#9b59b6",light_blue:"#00bcd4"},Ie=Ee[W==null?void 0:W.color]||Ee.purple,je=Le[W==null?void 0:W.color]||Le.purple,m=W!=null&&W.image_url?`/manager-wars/icons/${W.image_url}`:null;return`<div style="width:${xe}px;height:${ge}px;border-radius:8px;background:${Ie};border:1px solid ${je};display:flex;flex-direction:column;overflow:hidden"><div style="height:${be}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${xe-6}px">${P}</span></div><div style="height:${fe}px;display:flex;align-items:center;justify-content:center">${m?`<img src="${m}" style="max-width:${xe-8}px;max-height:${fe-4}px;object-fit:contain">`:`<span style="font-size:24px">${oe.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((W==null?void 0:W.effect)||oe.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const xe=Math.round(75.60000000000001),ge=Math.round(310*.54);return`<div style="width:${xe}px;height:${ge}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${oe.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${P}</span></div>`})(),({type:P,owned:oe,def:W})=>{oe&&fo(P,W,a)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(M=>{M.addEventListener("click",()=>{I=M.dataset.tab,D="Tous",_="",w=!1,e.querySelectorAll(".col-tab-btn").forEach(C=>{const N=C.dataset.tab===I;C.style.borderBottomColor=N?"var(--green)":"transparent",C.style.color=N?"var(--green)":"var(--gray-600)"}),$(),R()})}),$(),R()}function fo(e,t,i){const n=Ce[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=a[t==null?void 0:t.color]||a.purple,p=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const lt=1e3;function go(e,t,i,n){var l,x,v;const{state:c,toast:a,closeModal:s,navigate:d,refreshProfile:p}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const h=vt[o]||{},I=Ot[o]||[],D=290,_=360,w=20;function S(re){const te=h[re];return te?{x:te.x*D,y:te.y*_}:null}let ee=`<svg width="${D}" height="${_}" viewBox="0 0 ${D} ${_}" xmlns="http://www.w3.org/2000/svg">`;for(const[re,te]of I){const $=S(re),R=S(te);!$||!R||(ee+=`<line x1="${$.x}" y1="${$.y}" x2="${R.x}" y2="${R.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const re of Object.keys(h)){const te=S(re);if(!te)continue;const $=re.replace(/\d+/,""),R=r[$]||"#555";ee+=`<circle cx="${te.x}" cy="${te.y}" r="${w}" fill="${R}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,ee+=`<text x="${te.x}" y="${te.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${$}</text>`}return ee+="</svg>",ee}const f=t.filter(h=>h.formation===o),g=f.length,y=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${u()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe carte Formation</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${lt.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${y?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${lt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(l=document.getElementById("direct-sell-form-btn"))==null||l.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${lt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const h=f.find(D=>!D.is_for_sale)||f[0];if(!h){a("Aucune carte à vendre","error");return}const{error:I}=await k.from("cards").delete().eq("id",h.id);if(I){a(I.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+lt}).eq("id",c.profile.id),await p(),a(`+${lt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),d("collection")}),(x=document.getElementById("market-sell-form-btn"))==null||x.addEventListener("click",async()=>{const h=parseInt(document.getElementById("sell-price-form").value);if(!h||h<1){a("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:h}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:h}),a("Carte mise en vente sur le marché !","success"),s(),d("collection")}),(v=document.getElementById("cancel-sell-form-btn"))==null||v.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),s(),d("collection")})}async function mi(e,t,i,n){var te,$,R,Y,A,K;const{state:c,toast:a,openModal:s,closeModal:d,navigate:p,refreshProfile:o}=n,r=e.player,u=t.filter(G=>G.player.id===r.id),f=u.length,g=po[r.rarity]||1e3,y=r.rarity!=="legende",l=Li(r),x=yt(r,r.job),v=r.job2?yt(r,r.job2):null,h=ft[r.job]||"#1A6B3C",I=r.job2?ft[r.job2]:null,D=Ii[r.rarity]||"#ccc",_=Wt[r.country_code]||r.country_code||"",w=u.map(G=>G.id);let S={};if(w.length){const{data:G}=await k.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",w).order("transferred_at",{ascending:!0});(G||[]).forEach(J=>{S[J.card_id]||(S[J.card_id]=[]),S[J.card_id].push(J)})}const ee=G=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${G.club_name} <span style="color:var(--gray-600)">(${G.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${G.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${G.source==="booster"?"Booster":G.price?G.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,re=w.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${f>1?`(${f} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${u.map((G,J)=>{const se=S[G.id]||[];return se.length?`
            <div>
              ${f>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${J+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${se.map(ee).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";s(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${D};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${h}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${h}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${x}</text>
            </svg>
            ${v!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${I}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${v}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${_}</div>
            ${(te=r.clubs)!=null&&te.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${((($=r.clubs)==null?void 0:$.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${D}">${r.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${r.job}${r.job2?" / "+r.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([G,J])=>{const se=ft[G],de=Number(J)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${se}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${de}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${G}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${re}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${g.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${y&&!e.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${r.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(R=document.getElementById("close-detail"))==null||R.addEventListener("click",d),(Y=document.getElementById("direct-sell-btn"))==null||Y.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const G=u.find(se=>!se.is_for_sale)||u[0];if(!G){a("Aucune carte à vendre","error");return}const{error:J}=await k.from("cards").delete().eq("id",G.id);if(J){a(J.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+g}).eq("id",c.profile.id),await o(),a(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),p("collection")}),(A=document.getElementById("market-sell-btn"))==null||A.addEventListener("click",async()=>{const G=parseInt(document.getElementById("sell-price").value);if(!G||G<1){a("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:G}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:G}),a("Carte mise en vente sur le marché !","success"),d(),p("collection")}),(K=document.getElementById("cancel-sell-btn"))==null||K.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),d(),p("collection")})}const Et={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},We={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Lt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function zi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Mi(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function mo(e,t=44,i=58){var g;const n=e?Lt(e):null,c=e?Mi(e):null,a=zi(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",d=We[s]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),f=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${a?`<img src="${a}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Bt(e,t){const{state:i,navigate:n,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(a==null?void 0:a.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(a==null?void 0:a.length)>0?a.map(s=>`
          <div class="card-panel" data-open-deck="${s.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${s.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${s.id}" data-name="${s.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${s.id}" data-name="${s.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((a==null?void 0:a.length)||0)+1}`);if(!s)return;const{data:d,error:p}=await k.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),xi(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>xi(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",s.dataset.name);if(!d||d===s.dataset.name)return;const{error:p}=await k.from("decks").update({name:d}).eq("id",s.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),Bt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:d}=await k.from("decks").delete().eq("id",s.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),Bt(e,t)})})}async function xi(e,t,i){const{state:n,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await k.from("decks").select("*").eq("id",e).single(),{data:s}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),d=(s||[]).filter(g=>g.card_type==="player"&&g.player),p=(s||[]).filter(g=>g.card_type==="formation"),o=p.map(g=>g.formation).filter(Boolean),{data:r}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=a.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const f={deckId:e,name:a.name,formation:u,formationCardId:a.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:p,availableFormations:o};(r||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),ot(t,f,i)}function ot(e,t,i){var p;const{navigate:n}=i;Et[t.formation];const c=yi(t.formation),a=c.filter(o=>t.slots[o]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Et),d=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${a}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${s.map(o=>`<option value="${o}" ${o===t.formation?"selected":""}>${o}</option>`).join("")}
      </select>
    </div>

    <!-- Terrain -->
    <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);padding:0;position:relative">
      <div id="deck-field"></div>
    </div>

    <!-- Remplaçants → mini cartes -->
    <div style="padding:10px 12px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
      <div style="font-size:11px;font-weight:700;margin-bottom:8px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${t.subs.length}/5)</div>
      <div style="display:flex;gap:8px;align-items:flex-end;overflow-x:auto;padding-bottom:4px" id="subs-list">
        ${d.map(o=>{const r=o.player;return`<div style="position:relative;flex-shrink:0">
            ${mo(r,44,58)}
            <button data-remove-sub="${o.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${a<11?"disabled":""}>
        ${a<11?`Placez encore ${11-a} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,xo(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=yi(t.formation),u={};r.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,ot(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>bo(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),ot(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{ho(t,e,i)})}function xo(e,t,i,n){const c=e.querySelector("#deck-field");if(!c)return;const a=vt[t.formation]||{},s=$i(t.formation)||[],d={};for(const v of i){const h=t.slots[v],I=h?t.playerCards.find(D=>D.id===h):null;d[v]=I?I.player:null}const p=300,o=300,r=48,u=64,f=13,g=16,y=38;function l(v){const h=a[v];return h?{x:h.x*p,y:h.y*o}:null}let x="";for(const[v,h]of s){const I=l(v),D=l(h);if(!I||!D)continue;const _=d[v]?{...d[v],club_id:d[v].club_id,country_code:d[v].country_code,rarity:d[v].rarity}:null,w=d[h]?{...d[h],club_id:d[h].club_id,country_code:d[h].country_code,rarity:d[h].rarity}:null,S=Je(_,w);S==="#ff3333"||S==="#cc2222"?x+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${S}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(x+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${S}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,x+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${S}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const v of i){const h=l(v);if(!h)continue;const I=d[v],D=v.replace(/\d+/,""),_=We[D]||"#555",w=(h.x-r/2).toFixed(1),S=(h.y-u/2).toFixed(1),ee={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[I==null?void 0:I.rarity]||"#aaa";if(I){const re=Lt(I),te=Mi(I),$=zi(I.country_code),R=Number(D==="GK"?I.note_g:D==="DEF"?I.note_d:D==="MIL"?I.note_m:I.note_a)||0,Y=u-f-g;x+=`<defs><clipPath id="dcp-${v}"><rect x="${w}" y="${(h.y-u/2+f).toFixed(1)}" width="${r}" height="${Y}"/></clipPath></defs>`,x+=`<rect x="${w}" y="${S}" width="${r}" height="${u}" rx="5" fill="${_}"/>`,re&&(x+=`<image href="${re}" x="${w}" y="${(h.y-u/2+f).toFixed(1)}" width="${r}" height="${Y}" clip-path="url(#dcp-${v})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${w}" y="${S}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,x+=`<text x="${h.x.toFixed(1)}" y="${(h.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(I.surname_encoded||"").slice(0,9)}</text>`;const A=(h.y+u/2-g).toFixed(1);x+=`<rect x="${w}" y="${A}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,$&&(x+=`<image href="${$}" x="${(h.x-21).toFixed(1)}" y="${(h.y+u/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),x+=`<text x="${h.x.toFixed(1)}" y="${(h.y+u/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${R}</text>`,te&&(x+=`<image href="${te}" x="${(h.x+r/2-14).toFixed(1)}" y="${(h.y+u/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),x+=`<rect x="${w}" y="${S}" width="${r}" height="${u}" rx="5" fill="none" stroke="${ee}" stroke-width="2"/>`}else x+=`<rect x="${w}" y="${S}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,x+=`<text x="${h.x.toFixed(1)}" y="${h.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,x+=`<text x="${h.x.toFixed(1)}" y="${(h.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${D}</text>`;x+=`<rect x="${w}" y="${S}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${v}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-y} ${-y} ${p+y*2} ${o+y*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${x}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(v=>{v.addEventListener("click",()=>yo(v.dataset.pos,t,e,n))})}function yo(e,t,i,n){var f,g,y;const{openModal:c,closeModal:a}=n,s=e.replace(/\d+/,""),d=t.slots[e],p=d?t.playerCards.find(l=>l.id===d):null;(f=p==null?void 0:p.player)==null||f.id;const o=new Set;Object.entries(t.slots).forEach(([l,x])=>{var h;if(l===e||!x)return;const v=t.playerCards.find(I=>I.id===x);(h=v==null?void 0:v.player)!=null&&h.id&&o.add(v.player.id)}),t.subs.forEach(l=>{var v;const x=t.playerCards.find(h=>h.id===l);(v=x==null?void 0:x.player)!=null&&v.id&&o.add(x.player.id)});const r=new Set,u=t.playerCards.filter(l=>{const x=l.player;return!(x.job===s||x.job2===s)||o.has(x.id)||r.has(x.id)?!1:(r.add(x.id),!0)});u.sort((l,x)=>{const v=s==="GK"?l.player.note_g:s==="DEF"?l.player.note_d:s==="MIL"?l.player.note_m:l.player.note_a;return(s==="GK"?x.player.note_g:s==="DEF"?x.player.note_d:s==="MIL"?x.player.note_m:x.player.note_a)-v}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(l=>{var D,_;const x=l.player,v=s==="GK"?x.note_g:s==="DEF"?x.note_d:s==="MIL"?x.note_m:x.note_a,h=Lt(x),I={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[x.rarity];return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${We[s]}">
            ${h?`<img src="${h}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${We[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${x.firstname} ${x.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${x.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${x.country_code}">
              ${(D=x.clubs)!=null&&D.logo_url?`<img src="${x.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((_=x.clubs)==null?void 0:_.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${x.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${We[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${I};flex-shrink:0">
            ${v}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",a),(y=document.getElementById("remove-player"))==null||y.addEventListener("click",()=>{delete t.slots[e],a(),ot(i,t,n)}),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{t.slots[e]=l.dataset.cardId,a(),ot(i,t,n)})})}function ho(e,t,i){var p;const{openModal:n,closeModal:c}=i,a=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&a.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&a.add(r.player.id)});const s=new Set,d=e.playerCards.filter(o=>{var r,u,f;return a.has((r=o.player)==null?void 0:r.id)||s.has((u=o.player)==null?void 0:u.id)?!1:(s.add((f=o.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(o=>{var g;const r=o.player,u=Lt(r),f=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${We[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((g=r.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${We[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),c(),ot(t,e,i)})})}async function bo(e,t){const{state:i,toast:n,navigate:c}=t,a=e.formationCards.find(p=>p.formation===e.formation),s=(a==null?void 0:a.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([p,o],r)=>{d.push({deck_id:e.deckId,card_id:o,position:p,is_starter:!0,slot_order:r})}),e.subs.forEach((p,o)=>{d.push({deck_id:e.deckId,card_id:p,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),d.length>0){const{error:p}=await k.from("deck_cards").insert(d);if(p){n(p.message,"error");return}}n("Deck enregistré ✅","success"),c("decks")}function yi(e){const t=Et[e]||Et["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Si(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function vo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,c)=>n+Number(c.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Ci=()=>Object.keys(vt),wo=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ft={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function $o(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const hi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},_o={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ko={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function bi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Eo(e){var r,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=hi[i],c=_o[t.rarity]||"#ccc",a=bi(t,i),s=t.job2?bi(t,t.job2):null,d=t.job2?hi[t.job2]:null,p=$o(t),o=ko[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${n}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${n}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${d}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ji(e){var c;const t={};(e.rates||[]).forEach(a=>{t[a.card_type]=(t[a.card_type]||0)+Number(a.percentage||0)});const i=((c=Object.entries(t).sort((a,s)=>s[1]-a[1])[0])==null?void 0:c[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Ao(e,{state:t,navigate:i,toast:n}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let a=[];try{a=(await Si()).map(ji)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}a.length||(a=wo.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${a.map(d=>{const p=d.cost===0||c>=d.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const p=a.find(o=>o.id===d.dataset.booster);if(p){d.style.opacity="0.5",d.style.pointerEvents="none";try{await To(p,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",p=>{p.stopPropagation();const o=a.find(r=>r.id===d.dataset.boosterId);Mo(o)})})}async function To(e,{state:t,toast:i,navigate:n,container:c}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await jo()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:a}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((a||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),d=new Set((a||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let p=[];if((r=e.rates)!=null&&r.length)p=await Dt(t.profile,e);else{const u=e.type||"player";u==="player"?p=await Bi(t.profile,e.cardCount,e.cost):u==="game_changer"?p=await Fi(t.profile,e.cardCount,e.cost):u==="formation"?p=await Di(t.profile,e.cost):p=await Dt(t.profile,e)}p.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=s.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=d.has(u.formation))});const{data:o}=await k.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),qi(p,e,n)}function Io(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Oe(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Lo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Oe(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Oe(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Oe(n)>=6),i.length||(i=e.filter(n=>Oe(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Oe(n)>=1&&Oe(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Dt(e,t){if(t.cost>0){const{error:d}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{data:i}=await k.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),n=new Set((i||[]).filter(d=>d.card_type==="player").map(d=>d.player_id)),c=new Set((i||[]).filter(d=>d.card_type==="formation").map(d=>d.formation)),a=new Set,s=[];for(let d=0;d<(t.cardCount||5);d++){const p=vo(t.rates);if(p){if(p.card_type==="player"){const o=h=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[h]||h,r=p.rarity?o(p.rarity):null;let u=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(u=u.eq("rarity",r));const{data:f}=await u;let g=f||[];if((p.note_min||p.note_max)&&(g=g.filter(h=>{const I=Math.max(Number(h.note_g)||0,Number(h.note_d)||0,Number(h.note_m)||0,Number(h.note_a)||0);return(!p.note_min||I>=p.note_min)&&(!p.note_max||I<=p.note_max)})),g.length||(p.note_min||p.note_max?(g=f||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):g=f||[]),!g.length)continue;let y=g.filter(h=>!a.has(h.id));y.length||(y=g);const l=y[Math.floor(Math.random()*y.length)];a.add(l.id);const x=n.has(l.id),{data:v}=await k.from("cards").insert({owner_id:e.id,player_id:l.id,card_type:"player"}).select().single();v&&(s.push({...v,player:l,isDuplicate:x}),k.rpc("record_transfer",{p_card_id:v.id,p_player_id:l.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:o}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=o!=null&&o.length?o:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],f=r[Math.floor(Math.random()*r.length)].name,{data:g}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:f}).select().single();g&&s.push(g)}else if(p.card_type==="formation"){const o=Ci(),r=o[Math.floor(Math.random()*o.length)],u=c.has(r),{data:f}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();f!=null&&f[0]&&s.push({...f[0],isDuplicate:u})}}}return s}async function Bi(e,t,i){if(i>0){const{error:o}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=n.filter(o=>o.job==="GK"),a=n.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&c.length>0,d=[];for(let o=0;o<t;o++){const r=o===0&&s?c:o===0?a:n,u=Io(),f=Lo(r,u);f&&d.push(f)}s&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await k.from("cards").insert(d.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(p||[]).forEach((o,r)=>{k.rpc("record_transfer",{p_card_id:o.id,p_player_id:d[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((o,r)=>({...p[r],player:o}))}async function Fi(e,t,i){const{error:n}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:c}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),a=c!=null&&c.length?c:Object.keys(Ft).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=a[Math.floor(Math.random()*a.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:d,error:p}=await k.from("cards").insert(s).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(d||[]).map(r=>{const u=c==null?void 0:c.find(f=>f.name===r.gc_type||f.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Di(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await k.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((n||[]).map(r=>r.formation)),a=Ci(),s=a[Math.floor(Math.random()*a.length)],d=c.has(s),{data:p,error:o}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return o&&console.error("[Booster Formation] Erreur insert:",o.message,o),(p||[]).map(r=>({...r,isDuplicate:d}))}function qi(e,t,i,n=null){var R,Y;if(!e||e.length===0){const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",A.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(A),(R=A.querySelector("#anim-close-err"))==null||R.addEventListener("click",()=>A.remove());return}e=[...e].sort((A,K)=>{const G=A.player?Oe(A.player):-1;return(K.player?Oe(K.player):-1)-G});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
        ${t.name} · ${e.length} carte${e.length>1?"s":""}
      </div>
      <div class="pack-visual" id="pack-visual" style="position:relative;animation:packFloat 2s ease-in-out infinite">
        <div id="pack-cut-zone" style="position:relative;width:180px;height:280px;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none">
          <div class="pack-half pack-half-bottom"><img src="${t.img}" alt="${t.name}" draggable="false"></div>
          <div class="pack-half pack-half-top"><img src="${t.img}" alt="${t.name}" draggable="false"></div>
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
      <div style="display:flex;gap:10px;width:100%;max-width:400px;margin-top:4px">
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
  `,document.body.appendChild(c);let a=!1;const s=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let p=!1;const o=A=>A.touches&&A.touches[0]?A.touches[0].clientX:A.clientX;function r(A){a||(p=!0,d.style.opacity="1",u(A))}function u(A){if(!p||a)return;const K=s.getBoundingClientRect(),G=o(A)-K.left,J=Math.max(0,Math.min(1,G/K.width));d.style.width=J*K.width+"px",J>=.82&&g()}function f(){a||(p=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{a||(d.style.transition="")},220))}function g(){var K;if(a)return;a=!0,p=!1,d.style.width="100%",d.style.opacity="1",(K=document.getElementById("cut-flash"))==null||K.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const A=document.getElementById("cut-hint");A&&(A.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",v(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let y=0,l=!1;const x=new Set;function v(A){y=A,document.getElementById("reveal-phase").style.display="flex",h(),I(A,0),ee()}function h(){const A=document.getElementById("card-dots");A&&(A.innerHTML=e.map((K,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===y?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),A.querySelectorAll(".card-dot").forEach(K=>K.addEventListener("click",()=>_(parseInt(K.dataset.i)))))}function I(A,K){var N;const G=e[A],J=document.getElementById("card-counter"),se=document.getElementById("card-track");J&&(J.textContent=`Carte ${A+1} / ${e.length}`);const de=G.card_type==="player"&&((N=G.player)==null?void 0:N.rarity)==="legende",ae=!x.has(A);x.add(A);let M=0;if(G.card_type==="player"&&G.player){const j=G.player,P=j.job||"ATT";M=Number(P==="GK"?j.note_g:P==="DEF"?j.note_d:P==="MIL"?j.note_m:j.note_a)||0}const C=j=>{se.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${de?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${zo(G)}</div>
          ${G.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const P=document.getElementById("current-card-wrap");K!==0?(P.style.transition="none",P.style.transform=`translateX(${K>0?100:-100}%)`,requestAnimationFrame(()=>{P.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",P.style.transform="translateX(0)"})):P.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),j||de?te():$(),h()};ae&&M>6&&G.card_type==="player"&&G.player?D(G,()=>C(!0)):C(!1)}function D(A,K){var C;l=!0;const G=A.player,J=`https://flagsapi.com/${G.country_code}/flat/64.png`,se=(C=G.clubs)==null?void 0:C.logo_url,de=document.getElementById("walkout-overlay"),ae=document.getElementById("walkout-stage");if(!de||!ae){l=!1,K();return}de.style.display="flex";const M=()=>{const N=ae.firstElementChild;N&&(N.classList.remove("wo-in"),N.classList.add("wo-out"))};ae.innerHTML=`<img class="wo-in" src="${J}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(M,2e3),setTimeout(()=>{var N;ae.innerHTML=se?`<img class="wo-in" src="${se}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((N=G.clubs)==null?void 0:N.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(M,4450),setTimeout(()=>{de.style.display="none",ae.innerHTML="",l=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),K()},4900)}function _(A){if(l||A<0||A>=e.length||A===y)return;const K=A>y?1:-1;y=A,I(A,K)}function w(){_(y+1)}function S(){_(y-1)}function ee(){const A=document.getElementById("card-viewport");if(!A||A._swipeBound)return;A._swipeBound=!0;let K=0,G=0,J=0,se=!1;const de=j=>j.touches?j.touches[0].clientX:j.clientX,ae=j=>j.touches?j.touches[0].clientY:j.clientY,M=j=>{se=!0,K=de(j),G=ae(j),J=0},C=j=>{if(!se)return;J=de(j)-K;const P=ae(j)-G;if(Math.abs(J)<Math.abs(P))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${J*.6}px) rotate(${J*.02}deg)`)},N=()=>{if(!se)return;se=!1;const j=document.getElementById("current-card-wrap"),P=55;J<=-P&&y<e.length-1?w():J>=P&&y>0?S():j&&(j.style.transition="transform .2s ease",j.style.transform="translateX(0)")};A.addEventListener("pointerdown",M),A.addEventListener("pointermove",C),A.addEventListener("pointerup",N),A.addEventListener("pointercancel",N),A.addEventListener("touchstart",M,{passive:!0}),A.addEventListener("touchmove",C,{passive:!0}),A.addEventListener("touchend",N),A.addEventListener("click",j=>{if(Math.abs(J)>8)return;const P=A.getBoundingClientRect();j.clientX-P.left>P.width/2?w():S()})}let re=null;function te(){const A=document.getElementById("fireworks-canvas");if(!A)return;A.width=window.innerWidth,A.height=window.innerHeight;const K=A.getContext("2d"),G=[];function J(){const de=Math.random()*A.width,ae=Math.random()*A.height*.6,M=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],C=M[Math.floor(Math.random()*M.length)];for(let N=0;N<60;N++){const j=Math.PI*2/60*N,P=2+Math.random()*5;G.push({x:de,y:ae,vx:Math.cos(j)*P,vy:Math.sin(j)*P,alpha:1,color:C,size:2+Math.random()*3})}}J(),re=setInterval(J,600);function se(){if(document.getElementById("fireworks-canvas")){K.clearRect(0,0,A.width,A.height);for(let de=G.length-1;de>=0;de--){const ae=G[de];if(ae.x+=ae.vx,ae.y+=ae.vy+.08,ae.vy*=.98,ae.alpha-=.018,ae.alpha<=0){G.splice(de,1);continue}K.globalAlpha=ae.alpha,K.fillStyle=ae.color,K.beginPath(),K.arc(ae.x,ae.y,ae.size,0,Math.PI*2),K.fill()}K.globalAlpha=1,(re!==null||G.length>0)&&requestAnimationFrame(se)}}se()}function $(){re!==null&&(clearInterval(re),re=null);const A=document.getElementById("fireworks-canvas");A&&A.getContext("2d").clearRect(0,0,A.width,A.height)}if(n){const A=document.getElementById("reveal-phase"),K=A==null?void 0:A.querySelector('div[style*="display:flex"][style*="gap:10px"]');K&&(K.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(Y=document.getElementById("reveal-next"))==null||Y.addEventListener("click",()=>{$(),c.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{$(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{$(),c.remove(),i("boosters")})}function zo(e){var t,i;if(e.card_type==="player"&&e.player)return Eo(e);if(e.card_type==="game_changer"){const n=e._gcDef,c=(n==null?void 0:n.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=a[n==null?void 0:n.color]||a.purple,p=s[n==null?void 0:n.color]||s.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=Ft[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=((i=Ft[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${f}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Mo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},a={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${a[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",s=>{s.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}So()}function So(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
    align-items:center;justify-content:center;z-index:4000;padding:16px`,e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Co="simulation",Gi="VOTRE_ZONE_ID";function jo(){switch(Co){case"propellerads":return Bo();case"adsense":return Fo();default:return Xt()}}function Xt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),a=document.getElementById("ad-skip");c&&(c.textContent=i),a&&(a.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),a&&(a.disabled=!1,a.style.cssText=a.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),a==null||a.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Bo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Xt());window.propeller.push({zone_id:Gi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Fo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Xt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Gi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function Do(e,{state:t,navigate:i,toast:n,refreshProfile:c}){var f,g;const{data:a}=await k.from("users").select("*").eq("id",t.user.id).single();a&&(t.profile=a);let s=Array.isArray((f=t.profile)==null?void 0:f.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await k.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let d=null;try{const l=(await Si()).find(x=>(x.name||"").toLowerCase().includes("new player"));l&&(d=ji(l))}catch(y){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',y)}const p=s.length;let o=0;e.innerHTML=`
  <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
    <div style="max-width:420px;text-align:center;color:#fff">
      <div style="font-size:56px;margin-bottom:10px">🎁</div>
      <h2 style="font-size:24px;font-weight:900;margin-bottom:8px">Bienvenue ${t.profile.pseudo} !</h2>
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
  </div>`;const r=async()=>{await k.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function u(){var h;if(o>=p||!s.length){await k.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const y=s[0],{data:l}=await k.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let x=[];try{if(y.type==="formation")x=await Di(t.profile,0);else if(y.type==="game_changer")x=await Fi(t.profile,y.count||3,0);else if(d&&((h=d.rates)!=null&&h.length)){const I={...d,cost:0,cardCount:y.count||d.cardCount||5};x=await Dt(t.profile,I),y.guaranteeGK&&!t.profile.first_booster_opened&&(x.some(_=>_.player&&_.player.job==="GK")||await qo(t.profile,x),await k.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else x=await Bi(t.profile,y.count||5,0)}catch(I){n(I.message||"Erreur ouverture booster","error");return}s.shift(),o++,await r();const v=y.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:y.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${o}/${p})`,img:(d==null?void 0:d.img)||"/manager-wars/icons/booster-players.png"};qi(x,v,i,()=>{u()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>u())}async function qo(e,t){try{const{data:i}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],c=t.findIndex(s=>s.player);if(c===-1)return;const a=t[c];await k.from("cards").update({player_id:n.id}).eq("id",a.id),t[c]={...a,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const nt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Xe(e,t,i,n,c){var a;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(a=document.getElementById("msg-btn"))==null||a.addEventListener("click",c)}function Te(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function qt(e,t){var n,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function at(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Ri(){const e=Math.random()*100;return e<10?3:e<30?2:1}function At(e,t){const i=nt[t]||nt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const d=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),p=at(d.length);d.forEach((o,r)=>{o._col=p[r]}),n[s]=d}return n}const a=[...e];for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let o=0;o<i[s];o++){let r=a.findIndex(u=>u.job===s);if(r===-1&&(r=a.findIndex(u=>u.job2===s)),r===-1&&(r=0),a[r]){const u={...a[r],_line:s};d.push(u),a.splice(r,1)}}const p=at(d.length);d.forEach((o,r)=>{o._col=p[r]}),n[s]=d}return n}function Ye(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Re(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Ni(e,t,i){const c=new Set,a=t.filter(r=>{const u=r.gc_type||r.id;return c.has(u)?!1:(c.add(u),!0)});let s=[];function d(r,u){const f=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},y={purple:"#9b59b6",light_blue:"#00bcd4"},l=g[f==null?void 0:f.color]||g.purple,x=y[f==null?void 0:f.color]||y.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${l};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var u,f,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${s.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${a.map(y=>{const l=s.find(x=>x.gc_type===y.gc_type);return d(y,!!l)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${r?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${r?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${r?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${r?"pointer":"default"};box-shadow:${r?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${s.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${s.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${s.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${s.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(y=>{y.addEventListener("click",()=>{const l=y.dataset.id,x=a.find(h=>h.id===l);if(!x)return;const v=s.findIndex(h=>h.gc_type===x.gc_type);v>-1?s.splice(v,1):s.length<3&&s.push(x),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&p(s)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>p([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}async function Go(e,t,i){const{state:n,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!a||a.length===0){Xe(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=a.map(r=>r.id),{data:d}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let p=0;function o(){var h,I,D,_,w;const r=a[p],u=(d||[]).filter(S=>S.deck_id===r.id),f=u.filter(S=>{var ee;return S.is_starter&&((ee=S.card)==null?void 0:ee.player)}).map(S=>qt(S.card,S.position)),g=u.find(S=>{var ee;return((ee=S.card)==null?void 0:ee.card_type)==="formation"}),y=r.formation||((h=g==null?void 0:g.card)==null?void 0:h.formation)||"4-4-2",l=f.length>=11?At(f,y):null,x=f.length>=11;Ye(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${y} · ${f.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===a.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===a.length-1?"0.1":"0.3"});color:${p===a.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===a.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${l?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${bt(l,y,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${a.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${a.map((S,ee)=>`<div style="width:7px;height:7px;border-radius:50%;background:${ee===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${x?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${x?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${x?"pointer":"default"}">
          ${x?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const ee=e.querySelector(".deck-preview-wrap svg");ee&&(ee.removeAttribute("width"),ee.removeAttribute("height"),ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(I=document.getElementById("prev-deck"))==null||I.addEventListener("click",()=>{p>0&&(p--,o())}),(D=document.getElementById("next-deck"))==null||D.addEventListener("click",()=>{p<a.length-1&&(p++,o())}),(_=document.getElementById("validate-deck"))==null||_.addEventListener("click",()=>{x&&t.navigate("match",{matchMode:i,deckId:r.id})}),(w=document.getElementById("cancel-deck-select"))==null||w.addEventListener("click",()=>{Re(e),c("home")});const v=document.getElementById("deck-swipe-zone");if(v){let S=0,ee=0;v.addEventListener("touchstart",re=>{S=re.touches[0].clientX,ee=re.touches[0].clientY},{passive:!0}),v.addEventListener("touchend",re=>{const te=re.changedTouches[0].clientX-S,$=re.changedTouches[0].clientY-ee;Math.abs(te)<40||Math.abs(te)<Math.abs($)||(te<0&&p<a.length-1?(p++,o()):te>0&&p>0&&(p--,o()))},{passive:!0})}}o()}function Pi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Be(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Te(e),c=Pi(e),a=e._line||e.job||"MIL",s=rt[a]||"#555",d={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(me(e,a))||0)+(e.boost||0),o=Oi(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Gt(e==null?void 0:e.country_code)?`<img src="${Gt(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((a,s)=>{if(c+=Be(a,40,52),s<n.length-1){const d=Je(a,n[s+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Gt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Oi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ht(e,t,i,n,c=310,a=310,s=[]){var I;const d=vt[t]||{},p=$i(t)||Ot[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const D of r)(e[D]||[]).forEach((w,S)=>{o[`${D}${S+1}`]=w});function u(D){const _=d[D];return _?{x:_.x*c,y:_.y*a}:null}let f="";for(const[D,_]of p){const w=u(D),S=u(_);if(!w||!S)continue;const ee=o[D],re=o[_],te=Je(ee,re);te==="#00ff88"||te==="#FFD700"?(f+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${S.x.toFixed(1)}" y2="${S.y.toFixed(1)}"
        stroke="${te}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${S.x.toFixed(1)}" y2="${S.y.toFixed(1)}"
        stroke="${te}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${S.x.toFixed(1)}" y2="${S.y.toFixed(1)}"
        stroke="${te}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,y=64,l=13,x=16,v={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[D,_]of Object.entries(o)){const w=u(D);if(!w||!_)continue;const S=D.replace(/[0-9]/g,""),ee=rt[S]||"#555",re=s.includes(_.cardId),te=i==="attack"&&(["MIL","ATT"].includes(S)||re)&&!_.used||i==="defense"&&["GK","DEF","MIL"].includes(S)&&!_.used,$=n.includes(_.cardId);let R;i==="attack"?R=re?Math.max(1,Number(_.note_a)||0):S==="MIL"?Number(_.note_m)||0:Number(_.note_a)||0:i==="defense"?R=S==="GK"?Number(_.note_g)||0:S==="MIL"?Number(_.note_m)||0:Number(_.note_d)||0:R=Number(S==="GK"?_.note_g:S==="DEF"?_.note_d:S==="MIL"?_.note_m:_.note_a)||0,R=R+(_.boost||0);const Y=(w.x-g/2).toFixed(1),A=(w.y-y/2).toFixed(1),K=v[_==null?void 0:_.rarity]||v.normal;if(_.used){const C=typeof import.meta<"u"&&"/manager-wars/"||"/",j=`${typeof window<"u"&&((I=window.location)==null?void 0:I.origin)||""}${C}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");f+=`<rect x="${Y}" y="${A}" width="${g}" height="${y}" rx="5" fill="#161616"/>`,f+=`<image href="${j}" xlink:href="${j}" x="${Y}" y="${A}" width="${g}" height="${y}" preserveAspectRatio="xMidYMid slice"/>`,f+=`<rect x="${Y}" y="${A}" width="${g}" height="${y}" rx="5" fill="none" stroke="${K}" stroke-width="2" opacity="0.7"/>`,f+=`<rect x="${Y}" y="${A}" width="${g}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${_.cardId}" data-role="${S}" style="cursor:pointer"/>`;continue}const G=$?.45:1,J=$?"#FFD700":K,se=$?3:(_==null?void 0:_.rarity)==="legende"||(_==null?void 0:_.rarity)==="légende"||(_==null?void 0:_.rarity)==="pepite"||(_==null?void 0:_.rarity)==="pépite"?2.5:2,de=y-l-x;f+=`<defs><clipPath id="cp-${D}"><rect x="${Y}" y="${(w.y-y/2+l).toFixed(1)}" width="${g}" height="${de}"/></clipPath></defs>`,f+=`<rect x="${Y}" y="${A}" width="${g}" height="${y}" rx="5" fill="${ee}" opacity="${G}"/>`;const ae=Te(_);ae&&(f+=`<image href="${ae}" xlink:href="${ae}" x="${Y}" y="${(w.y-y/2+l).toFixed(1)}" width="${g}" height="${de}" clip-path="url(#cp-${D})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${Y}" y="${A}" width="${g}" height="${l}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${w.x.toFixed(1)}" y="${(w.y-y/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(_.name||"").slice(0,9)}</text>`;const M=(w.y+y/2-x).toFixed(1);f+=`<rect x="${Y}" y="${M}" width="${g}" height="${x}" fill="rgba(255,255,255,0.92)"/>`;{const C=Gt(_.country_code);C?f+=`<image href="${C}" xlink:href="${C}" x="${(w.x-20).toFixed(1)}" y="${(w.y+y/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(w.x-13).toFixed(1)}" y="${(w.y+y/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Oi(_.country_code)}</text>`,f+=`<text x="${w.x.toFixed(1)}" y="${(w.y+y/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${R}</text>`;const N=Pi(_);N?f+=`<image href="${N}" xlink:href="${N}" x="${(w.x+g/2-14).toFixed(1)}" y="${(w.y+y/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:_.clubName&&(f+=`<text x="${(w.x+14).toFixed(1)}" y="${(w.y+y/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(_.clubName||"").slice(0,3).toUpperCase()}</text>`),_.boost&&(f+=`<rect x="${(w.x+g/2-12).toFixed(1)}" y="${(w.y-y/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(w.x+g/2-5).toFixed(1)}" y="${(w.y-y/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${_.boost}</text>`)}f+=`<rect x="${Y}" y="${A}" width="${g}" height="${y}" rx="5" fill="${$?"rgba(255,255,255,0.12)":"none"}" stroke="${J}" stroke-width="${se}" opacity="${G}"/>`,te&&(f+=`<rect x="${Y}" y="${A}" width="${g}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${_.cardId}" data-role="${S}" style="cursor:pointer"/>`)}const h=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-h} ${-h} ${c+h*2} ${a+h*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function bt(e,t,i,n,c=300,a=300,s=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ht(e,t,i,n,c,a,s)}
  </div>`}function tt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Hi(e,t,i,n){var _;const{state:c,navigate:a,toast:s}=t;Ye(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Go(e,t,i);const p=d.deckId;let o,r,u,f;try{const w=await Promise.all([k.from("decks").select("formation,name").eq("id",p).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);o=w[0].data,u=w[0].error,r=w[1].data,f=w[1].error}catch(w){console.error("[Match] Exception chargement deck:",w),Xe(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>a("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),Xe(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>a("home"));return}const g=(r||[]).filter(w=>{var S;return w.is_starter&&((S=w.card)==null?void 0:S.player)}).map(w=>qt(w.card,w.position)),y=(r||[]).filter(w=>{var S;return!w.is_starter&&((S=w.card)==null?void 0:S.player)}).map(w=>qt(w.card,w.position));if(g.length<11){Xe(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>a("decks"));return}const l=(r||[]).find(w=>{var S;return((S=w.card)==null?void 0:S.card_type)==="formation"}),x=(o==null?void 0:o.formation)||((_=l==null?void 0:l.card)==null?void 0:_.formation)||"4-4-2",{data:v,error:h}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:I}=await k.from("gc_definitions").select("*").eq("is_active",!0),D=(v||[]).map(w=>({...w,_gcDef:(I==null?void 0:I.find(S=>S.name===w.gc_type||S.id===w.gc_definition_id))||null}));n({deckId:p,formation:x,starters:g,subsRaw:y,gcCardsEnriched:D,gcDefs:I||[]})}async function Ro(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",a=c.replace("vs_ai_",""),s=c;await Hi(e,t,c,async({deckId:d,formation:p,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:f})=>{try{const g=At(o,p),y=await No(p,a),l=async x=>{try{const{data:v,error:h}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:d,status:"in_progress"}).select().single();if(h){console.error("[MatchIA] Erreur création match:",h),Xe(e,"⚠️","Impossible de créer le match ("+h.message+").","Retour",()=>t.navigate("home"));return}const I={gcDefs:f||[],matchId:v==null?void 0:v.id,mode:s,difficulty:a,formation:p,homeTeam:g,aiTeam:y,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Oo(e,I,t)}catch(v){console.error("[MatchIA] Exception launchMatch:",v),Xe(e,"⚠️","Erreur au lancement du match : "+v.message,"Retour",()=>t.navigate("home"))}};if(!u.length){l([]);return}Ni(e,u,l)}catch(g){console.error("[MatchIA] Exception setup:",g),Xe(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function No(e,t){var s,d;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Po(e);const n=nt[e]||nt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},a=[...i];for(const p of["GK","DEF","MIL","ATT"]){const o=a.filter(y=>y.job===p),r=a.filter(y=>y.job!==p),u=[...o,...r],f=[];for(let y=0;y<n[p];y++){const l=u[y]||a[y];l&&f.push({cardId:"ai-"+l.id+"-"+y,id:l.id,firstname:l.firstname,name:l.surname_encoded,country_code:l.country_code,club_id:l.club_id,job:l.job,job2:l.job2,note_g:Number(l.note_g)||0,note_d:Number(l.note_d)||0,note_m:Number(l.note_m)||0,note_a:Number(l.note_a)||0,rarity:l.rarity,skin:l.skin,hair:l.hair,hair_length:l.hair_length,clubName:((s=l.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((d=l.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:p})}const g=at(f.length);f.forEach((y,l)=>{y._col=g[l]}),c[p]=f}return c}function Po(e){const t=nt[e]||nt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let p=0;p<t[a];p++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:n[c%n.length],country_code:"XX",club_id:null,job:a,job2:null,note_g:a==="GK"?o:2,note_d:a==="DEF"?o:2,note_m:a==="MIL"?o:2,note_a:a==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:a}),c++}const d=at(s.length);s.forEach((p,o)=>{p._col=d[o]}),i[a]=s}return i}function Oo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ht(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Ho(e,t,i),5e3)}function Ho(e,t,i){const n=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function a(l){return l.reduce((x,v)=>x+me(v,"MIL"),0)}function s(l){let x=0;for(let v=0;v<l.length-1;v++){const h=Je(l[v],l[v+1]);h==="#00ff88"?x+=2:h==="#FFD700"&&(x+=1)}return x}const d=a(n)+s(n),p=a(c)+s(c),o=d>=p;function r(l,x,v,h){return`<div id="duel-row-${h}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${x}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${l.map((I,D)=>{const _=D<l.length-1?Je(I,l[D+1]):null,w=!_||_==="#ff3333"||_==="#cc2222",S=_==="#00ff88"?"+2":_==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${h}" data-idx="${D}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Be({...I,note:me(I,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${D<l.length-1?`<div class="duel-link duel-link-${h}" data-idx="${D}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${w?"rgba(255,255,255,0.12)":_};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${w?"none":`0 0 8px ${_}`}">
            ${S?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${_}">${S}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${h}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${a(l)} + ${s(l)} liens = <b style="color:#fff">${a(l)+s(l)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <style>
      @keyframes duelPulse { 0%{transform:scale(1)} 50%{transform:scale(1.18)} 100%{transform:scale(1)} }
      @keyframes duelGlow { 0%,100%{text-shadow:0 0 12px rgba(255,215,0,0.6)} 50%{text-shadow:0 0 28px rgba(255,215,0,0.95)} }
      @keyframes vsFlash { 0%{opacity:0;transform:scale(2)} 60%{opacity:1;transform:scale(0.9)} 100%{opacity:1;transform:scale(1)} }
      @keyframes winnerSlam { 0%{transform:scale(1)} 35%{transform:translateY(-14px) scale(1.05)} 70%{transform:translateY(10px) scale(1.12,0.92)} 100%{transform:translateY(0) scale(1)} }
      @keyframes crushSquash { 0%{transform:scaleY(1);opacity:1} 55%{transform:scaleY(0.1) translateY(8px);opacity:.5} 100%{transform:scaleY(0);opacity:0} }
      @keyframes shockwave { 0%{transform:translateX(-50%) scale(0.2);opacity:.9} 100%{transform:translateX(-50%) scale(2.4);opacity:0} }
      @keyframes boostFlipIn { 0%{transform:perspective(600px) rotateY(90deg) scale(0.6);opacity:0} 60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1} 100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    </style>
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${r(n,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${r(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const l=(x,v)=>e.querySelectorAll(x).forEach((h,I)=>{setTimeout(()=>{h.style.opacity="1",h.style.transform="translateY(0) scale(1)"},v+I*90)});l(".duel-card-home",150),l(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((x,v)=>{setTimeout(()=>{x.style.opacity="1"},v*70)}),900),setTimeout(()=>{const x=e.querySelector("#vs-label");x&&(x.style.opacity="1",x.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(v=>v.style.opacity="1")},1250),setTimeout(()=>{f("score-home",d,800),f("score-ai",p,800)},1500)};function f(l,x,v){const h=document.getElementById(l);if(!h)return;const I=performance.now(),D=_=>{const w=Math.min(1,(_-I)/v);h.textContent=Math.round(x*(1-Math.pow(1-w,3))),w<1?requestAnimationFrame(D):h.textContent=x};requestAnimationFrame(D)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const g=o?Ri():null;o&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(l=>({name:l.name,note:me(l,"MIL"),portrait:Te(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:c.map(l=>({name:l.name,note:me(l,"MIL"),portrait:Te(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:d,aiTotal:p,text:`Duel milieu : ${t.clubName} ${d} – ${p} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const y=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",_e(e,t,i),t.attacker==="ai"&&setTimeout(()=>Rt(e,t,i),800)};setTimeout(()=>{const l=document.getElementById("score-home"),x=document.getElementById("score-ai"),v=document.getElementById(o?"duel-row-home":"duel-row-ai"),h=document.getElementById(o?"duel-row-ai":"duel-row-home"),I=o?l:x,D=o?x:l;I&&(I.style.fontSize="80px",I.style.color=o?"#FFD700":"#ff6b6b",I.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),D&&(D.style.opacity="0.25"),setTimeout(()=>{v&&(v.style.transformOrigin="center",v.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",v.style.zIndex="5"),setTimeout(()=>{var w;const _=document.getElementById("duel-shock");if(_){const S=(w=h||v)==null?void 0:w.getBoundingClientRect(),ee=e.querySelector(".match-screen").getBoundingClientRect();S&&(_.style.top=S.top-ee.top+S.height/2+"px"),_.style.animation="shockwave .5s ease-out forwards"}h&&(h.style.transformOrigin="center",h.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var w;const _=document.getElementById("duel-finale");_&&(_.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,_.style.transition="opacity .45s ease",_.style.opacity="1",_.style.pointerEvents="auto",(w=document.getElementById("start-match-btn"))==null||w.addEventListener("click",y))},600)},700)},2800)}function Uo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>tt(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>tt(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${tt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${tt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function _e(e,t,i){var I,D,_,w,S,ee,re,te;const n=t.selected.map($=>$.cardId),c=t.usedSubIds||[],a=t.homeSubs.filter($=>!c.includes($.cardId)),d=Object.values(t.homeTeam).flat().filter($=>$.used).length>0&&a.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some($=>(t.aiTeam[$]||[]).some(R=>!R.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter($=>!$.used),r=t.phase==="attack"&&p&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter($=>!$.used).map($=>$.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",g=t.phase==="defense",y=t.phase==="finished",l=t.gcCards.filter($=>!t.usedGc.includes($.id)),x=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
  <style>
    @keyframes subSlideOut { from{transform:translateX(0);opacity:1} to{transform:translateX(-120%);opacity:0} }
    @keyframes subSlideIn  { from{transform:translateX(120%);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes subFadeIn   { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
    .sub-anim-out { animation: subSlideOut 0.45s ease forwards; }
    .sub-anim-in  { animation: subSlideIn 0.45s ease 0.35s forwards; opacity:0; }
    #match-history-panel {
      position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:500;
      display:flex;flex-direction:column;
      transform:translateY(100%);transition:transform 0.3s ease;
    }
    #match-history-panel.open { transform:translateY(0); }
  </style>

  <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">

    <!-- SCORE BAR -->
    <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
      <button id="match-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${t.homeScore} – ${t.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">IA (${t.difficulty.toUpperCase()})</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const R=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${et((R.players||[]).map(Y=>({...Y,used:!1})),"#ff6b6b",R.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const R=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((R.players||[]).map(Y=>({...Y,used:!1})),"#00ff88",R.total)}
          </div>`}const $=t.log[t.log.length-1];return $?'<div style="padding:2px 4px">'+Uo($)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const $=window.innerWidth>=700,R=(M,C,N)=>{var Ie,je;const j=(t.gcDefs||[]).find(m=>m.name===M.gc_type),P={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[j==null?void 0:j.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[j==null?void 0:j.color]||"#b06ce0",W=(j==null?void 0:j.name)||M.gc_type,ve=(j==null?void 0:j.effect)||((Ie=Ce[M.gc_type])==null?void 0:Ie.desc)||"",xe=j!=null&&j.image_url?`/manager-wars/icons/${j.image_url}`:null,ge=((je=Ce[M.gc_type])==null?void 0:je.icon)||"⚡",fe=Math.round(N*.22),be=Math.round(N*.22),Ee=N-fe-be,Le=W.length>12?7:9;return`<div class="gc-mini" data-gc-id="${M.id}" data-gc-type="${M.gc_type}"
          style="box-sizing:border-box;width:${C}px;height:${N}px;border-radius:10px;border:2px solid ${oe};background:${P};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${fe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Le}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${C-6}px">${W}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ee}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:${C-10}px;max-height:${Ee-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ee*.55)}px">${ge}</span>`}
          </div>
          <div style="height:${be}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},Y=(M,C)=>{var N;return`<div id="boost-card"
          style="box-sizing:border-box;width:${M}px;height:${C}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(C*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(C*.2)}px">⚡</div>
            <div style="font-size:${Math.round(C*.09)}px;color:#000;font-weight:900">+${(N=t.boostCard)==null?void 0:N.value}</div>
          </div>`},A=(M,C)=>C?Y(130,175):R(M,130,175),K=(M,C)=>C?Y(68,95):R(M,68,95),G=$?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",J=y?`<button id="btn-results" style="${G};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${G};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-action" style="${G};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${G};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${G};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,se=f||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",de=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${$?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${a.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':a.map(M=>`<div class="sub-btn-col" data-sub-id="${M.cardId}" style="cursor:pointer;flex-shrink:0">${Be(M,76,100)}</div>`).join("")}
      </div>`,ae=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${bt(t.homeTeam,t.formation,t.phase,n,300,300,r)}
        </div>
      </div>`;return $?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${de}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ae}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${J}${se}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${l.map(M=>A(M,!1)).join("")}
            ${x?A(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${bt(t.homeTeam,t.formation,t.phase,n,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${l.map(M=>K(M,!1)).join("")}
            ${x?K(null,!0):""}
            <div id="sub-btn-main" style="cursor:${d?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${d?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${d?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${d?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${a.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${t.subsUsed}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${t.subsUsed}/${t.maxSubs} rempl.</div>
            </div>
          </div>
          <div>${J}${se}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map($=>{var R,Y,A;if($.type==="duel"){const K=$.isGoal,G=$.homeScored?"#FFD700":K?"#ff6b6b":"rgba(255,255,255,0.3)",J=$.homeScored?"⚽ BUT !":K?"⚽ BUT IA !":(R=$.homePlayers)!=null&&R.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${K?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${G};margin-bottom:4px">
                <div style="font-size:9px;color:${G};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${J}</div>
                ${(Y=$.homePlayers)!=null&&Y.length?`<div style="margin-bottom:3px">${et($.homePlayers,"rgba(255,255,255,0.7)",$.homeTotal)}</div>`:""}
                ${(A=$.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${et($.aiPlayers,"#ff6b6b",$.aiTotal)}</div>`:""}
              </div>`}return $.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${$.outPlayer?Be({...$.outPlayer,used:!0,_line:$.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${$.inPlayer?Be({...$.inPlayer,_line:$.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:$.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${$.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${$.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function v(){const $=e.querySelector(".match-screen");if(!$)return;const R=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);$.style.bottom="auto",$.style.height=R+"px",$.style.minHeight=R+"px",$.style.maxHeight=R+"px",$.style.overflow="hidden";const Y=e.querySelector("#mobile-action-bar"),A=e.querySelector("#mobile-play-area");Y&&A&&(A.style.paddingBottom=Y.offsetHeight+"px")}if(v(),setTimeout(v,120),setTimeout(v,400),setTimeout(v,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",v),window.visualViewport.addEventListener("scroll",v)),window.addEventListener("resize",v)),function(){const R=e.querySelector(".terrain-wrapper svg");R&&(R.removeAttribute("width"),R.removeAttribute("height"),R.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",R.setAttribute("viewBox","-26 -26 352 352"),R.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const $=e.querySelector(".terrain-wrapper svg");$&&($.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let $=!1,R=30;const Y=()=>document.getElementById("match-timer"),A=()=>{const K=Y();if(!K)return;const G=String(Math.floor(R/60)).padStart(2,"0"),J=String(R%60).padStart(2,"0");K.textContent=` ${G}:${J}`,K.style.color=$?"#ff2222":"#ff9500",K.style.fontWeight="900"};A(),t._timerInt=setInterval(()=>{if(R--,R<0)if(!$)$=!0,R=15,A();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",K.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(K),setTimeout(()=>{K.remove(),gt(e,t,i)},2500)}else A()},1e3)}(I=document.getElementById("match-quit"))==null||I.addEventListener("click",()=>{Re(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,gt(e,t,i))}),(D=document.getElementById("view-ai"))==null||D.addEventListener("click",()=>tn(t,i)),(_=document.getElementById("toggle-history"))==null||_.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.add("open")}),(w=document.getElementById("close-history"))==null||w.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.remove("open")}),(S=document.getElementById("btn-action"))==null||S.addEventListener("click",()=>{t.selected.length!==0&&(f?Vo(e,t,i):g&&Yo(e,t,i))}),(ee=document.getElementById("btn-results"))==null||ee.addEventListener("click",()=>gt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach($=>{$.addEventListener("click",()=>Ko($,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach($=>{$.addEventListener("click",()=>Ct(e,t,i,null,$.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach($=>{$.addEventListener("click",()=>Jo($.dataset.gcId,$.dataset.gcType,e,t,i))}),(re=document.getElementById("boost-card"))==null||re.addEventListener("click",()=>en(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach($=>{$.addEventListener("click",()=>Ct(e,t,i,$.dataset.subId))}),(te=document.getElementById("sub-btn-main"))==null||te.addEventListener("click",()=>Ct(e,t,i))}function Ko(e,t,i,n){const c=e.dataset.cardId,a=e.dataset.role,s=t.selected.findIndex(d=>d.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[a]||[]).find(p=>p.cardId===c);d&&t.selected.push({...d,_role:a,_line:a})}_e(i,t,n)}function Jt(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Vo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Jt(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(d=>!d.used)),c=t.selected.map(s=>{const d=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId)||s,p=n&&["GK","DEF"].includes(s._role);return{...d,_line:s._role,...p?{note_a:Math.max(1,Number(d.note_a)||0)}:{}}}),a=Kt(c,t.modifiers.home);t.pendingAttack={...a,players:[...c],side:"home"},t.selected.forEach(s=>{const d=(t.homeTeam[s._role]||[]).find(p=>p.cardId===s.cardId);d&&(d.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",_e(e,t,i),setTimeout(()=>Wo(e,t,i),1200)}function Yo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Jt(t,i,i.state.profile.id);const n=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d,_line:d._role})),c=Vt(n,t.modifiers.home);t.selected.forEach(d=>{const p=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId);p&&(p.used=!0)});const a=Yt(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const p=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Te(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,_e(e,t,i),Tt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,it(e,t,i,"home-attack")}function Rt(e,t,i){Jt(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Ti(n,"attack",t.difficulty);if(!c.length){_t(e,t,i);return}const a=Kt(c,t.modifiers.ai);t.pendingAttack={...a,players:c,side:"ai"},c.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${c.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),p=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!p){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:Te(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,_e(e,t,i),Tt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,i,"home-attack")});return}t.phase="defense",_e(e,t,i)}function Wo(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Ti(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(g=>({name:g.name,note:me(g,g._line||g.job),portrait:Te(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,i),Tt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,i,"ai-attack")});return}const s=c.length>0?Vt(c,t.modifiers.ai).total:0;c.forEach(u=>{u.used=!0});const d=Yt(t.pendingAttack.total,s,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:c.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(d.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(d.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,i),Tt(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,it(e,t,i,"ai-attack")}function it(e,t,i,n){if(t.round++,Ui(t)){gt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(a=>!a.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used).length){_t(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){_t(e,t,i);return}setTimeout(()=>Rt(e,t,i),100);return}t.phase="attack",_e(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(a=>!a.used).length){_t(e,t,i);return}t.phase="ai-attack",_e(e,t,i),setTimeout(()=>Rt(e,t,i),800)}}function Ui(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(c=>!c.used));return!t&&!i}function _t(e,t,i){Ui(t)?gt(e,t,i):(t.phase="attack",_e(e,t,i))}function Xo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Te(e),a=Te(t),s=rt[e.job]||"#555",d=rt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${c?`<img src="${c}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${p}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${a?`<img src="${a}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",u),setTimeout(u,2e3)}function ct(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Ct(e,t,i,n=null,c=null){var g,y;if(t.phase!=="attack"){ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const a=Object.entries(t.homeTeam).flatMap(([l,x])=>(x||[]).filter(v=>v.used).map(v=>({...v,_line:v._line||l}))),s=t.homeSubs.filter(l=>!t.usedSubIds.includes(l.cardId));if(!a.length){ct("Aucun joueur utilisé à remplacer");return}if(!s.length){ct("Aucun remplaçant disponible");return}let d=Math.max(0,a.findIndex(l=>l.cardId===c));const p=((g=a[d])==null?void 0:g._line)||((y=a[d])==null?void 0:y.job);let o=n?Math.max(0,s.findIndex(l=>l.cardId===n)):Math.max(0,s.findIndex(l=>l.job===p)),r=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var _,w,S,ee,re,te;const l=a[d],x=s[o],v=Math.min(130,Math.round((window.innerWidth-90)/2)),h=Math.round(v*1.35),I=$=>`background:rgba(255,255,255,0.12);border:none;color:${$?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${I(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${x?Be({...x,used:!1,boost:0},v,h):"<div>—</div>"}</div>
        <button id="in-down" style="${I(o>=s.length-1)}" ${o>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${I(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${l?Be({...l,used:!1,boost:0},v,h):"<div>—</div>"}</div>
        <button id="out-down" style="${I(d>=a.length-1)}" ${d>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${a.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(_=u.querySelector("#sub-close"))==null||_.addEventListener("click",()=>u.remove()),(w=u.querySelector("#out-up"))==null||w.addEventListener("click",()=>{d>0&&(d--,f())}),(S=u.querySelector("#out-down"))==null||S.addEventListener("click",()=>{d<a.length-1&&(d++,f())}),(ee=u.querySelector("#in-up"))==null||ee.addEventListener("click",()=>{o>0&&(o--,f())}),(re=u.querySelector("#in-down"))==null||re.addEventListener("click",()=>{o<s.length-1&&(o++,f())});const D=($,R,Y,A)=>{const K=u.querySelector("#"+$);if(!K)return;let G=0;K.addEventListener("touchstart",J=>{G=J.touches[0].clientY},{passive:!0}),K.addEventListener("touchend",J=>{const se=J.changedTouches[0].clientY-G;if(Math.abs(se)<30)return;const de=R();se<0&&de<A-1?(Y(de+1),f()):se>0&&de>0&&(Y(de-1),f())},{passive:!0})};D("in-panel",()=>o,$=>o=$,s.length),D("out-panel",()=>d,$=>d=$,a.length),(te=u.querySelector("#sub-confirm"))==null||te.addEventListener("click",$=>{if($.preventDefault(),$.stopPropagation(),r)return;r=!0;const R=a[d],Y=s[o];if(!R||!Y)return;let A=null,K=-1;for(const[J,se]of Object.entries(t.homeTeam)){const de=(se||[]).findIndex(ae=>ae.cardId===R.cardId);if(de!==-1){A=J,K=de;break}}if(K===-1||!A){ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const G={...Y,_line:A,_col:R._col||0,used:!1,boost:0};t.homeTeam[A].splice(K,1,G),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Y.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:R.name,firstname:R.firstname,note:me(R,A),portrait:Te(R),job:R.job,country_code:R.country_code,rarity:R.rarity,clubName:R.clubName,clubLogo:R.clubLogo},inPlayer:{name:Y.name,firstname:Y.firstname,note:me(Y,A),portrait:Te(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},text:`🔄 ${Y.firstname} ${Y.name} remplace ${R.firstname} ${R.name}`}),u.remove(),Xo(R,Y,()=>_e(e,t,i))})}document.body.appendChild(u),f()}function Jo(e,t,i,n,c){var y,l;const a=(n.gcDefs||[]).find(x=>x.name===t),s=Ce[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[a==null?void 0:a.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[a==null?void 0:a.color]||"#b06ce0",o=(a==null?void 0:a.name)||t,r=(a==null?void 0:a.effect)||s.desc,u=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,f=s.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(y=g.querySelector("#gc-back"))==null||y.addEventListener("click",()=>g.remove()),(l=g.querySelector("#gc-use"))==null||l.addEventListener("click",()=>{g.remove(),Zo(e,t,i,n,c)})}function $t(e,t,i,n,c,a){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function p(){var o,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",y=me(u,f)+(u.boost||0),l=d.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${l?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${t})
      </button>
    </div>`,(o=s.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,g=e.find(l=>l.cardId===f);if(!g)return;const y=d.findIndex(l=>l.cardId===f);y>-1?d.splice(y,1):d.length<t&&d.push(g),p()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),a(d)})}p(),document.body.appendChild(s)}const Qo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,c,a)=>{const s=Object.entries(n.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,p])=>p.filter(o=>!o.used).map(o=>({...o,_line:d})));return s.length?($t(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,n,d=>{d.forEach(p=>{const o=(n.homeTeam[p._line]||[]).find(r=>r.cardId===p.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),_e(c,n,a)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_e(c,n,a),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},c,a,s)=>{const d=n==="home"?c.homeTeam:c.aiTeam,p=n==="ai"?"adverse":"allié",o=Object.entries(d).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:r})));return o.length?($t(o,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,a,c,r=>{r.forEach(u=>{const g=((n==="home"?c.homeTeam:c.aiTeam)[u._line]||[]).find(y=>y.cardId===u.cardId);g&&(g.boost=(g.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),_e(a,c,s)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),_e(a,c,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,c,a)=>{const s=i==="home"?n.homeTeam:n.aiTeam,d=i==="ai"?"adverse":"allié",p=Object.entries(s).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:o})));return p.length?($t(p,e,`Choisir ${e} joueur(s) ${d}(s) à exclure`,c,n,o=>{o.forEach(r=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),_e(c,n,a)}),!0):(n.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),_e(c,n,a),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,c)=>{const a=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,d])=>d.filter(p=>p.used).map(p=>({...p,_line:s})));return a.length?($t(a,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,s=>{s.forEach(d=>{const p=(i.homeTeam[d._line]||[]).find(o=>o.cardId===d.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),_e(n,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),_e(n,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Zo(e,t,i,n,c){n.usedGc.push(e);const a=n.gcDefs||[],s=a.find(p=>p.name===t)||a.find(p=>{var o;return((o=p.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let d=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const p=Qo[s.effect_type];p?p(s.effect_params||{},n,i,c)||(d=!0):(c.toast(`Effet "${s.effect_type}" non implémenté`,"error"),d=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:o})));p.length?(p[0].used=!1,n.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(p.length){const o=p.sort((r,u)=>me(u,"ATT")-me(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}k.from("cards").delete().eq("id",e).then(()=>{}),d&&_e(i,n,c)}function en(e,t,i){const n=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${rt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${me(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const a=c.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[s]||[]).find(p=>p.cardId===a);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),_e(e,t,i)})})}function Tt(e,t,i,n,c){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");a.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${s}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${n?"BUT !":"BUT IA !"}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${t} – ${i}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(o=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${rt[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(a);let d=!1;const p=()=>{d||(d=!0,a.remove(),setTimeout(()=>c(),50))};a.addEventListener("click",p),setTimeout(p,3500)}async function gt(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,c=t.homeScore>t.aiScore,a=t.homeScore===t.aiScore,s=c?"victoire":a?"nul":"defaite",d=lo(t.mode,s);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?n.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(n.profile.credits||0)+d,matches_played:(n.profile.matches_played||0)+1};c?p.wins=(n.profile.wins||0)+1:a?p.draws=(n.profile.draws||0)+1:p.losses=(n.profile.losses||0)+1,await k.from("users").update(p).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":a?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":a?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),Re(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),Re(e),i.navigate("match",{matchMode:t.mode})})}function tn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ht(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function on(e,t){await Hi(e,t,"random",({deckId:i,formation:n,starters:c,subsRaw:a,gcCardsEnriched:s,gcDefs:d})=>{const p=o=>nn(e,t,i,n,c,a,o,d||[]);if(!s.length){p([]);return}Ni(e,s,p)})}async function nn(e,t,i,n,c,a,s=[],d=[]){var h;const{state:p,navigate:o,toast:r}=t;let u=!1,f=null;Ye(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(I=!0)=>{u=!0,f&&(k.removeChannel(f),f=null),I&&await k.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(h=document.getElementById("mm-cancel"))==null||h.addEventListener("click",async()=>{try{await g(!0)}catch{}Re(e),o("home")});const y=async(I,D,_)=>{if(u)return;u=!0,f&&(k.removeChannel(f),f=null);const w=document.getElementById("mm-status");w&&(w.textContent="Adversaire trouvé !"),await new Promise(S=>setTimeout(S,600)),e.isConnected&&rn(e,t,I,_,s,d)},{data:l,error:x}=await k.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:i});if(x||!(l!=null&&l.success)){r("Erreur de matchmaking","error"),Re(e),o("home");return}if(l.matched){y(l.match_id,l.opponent_id,!1);return}const v=document.getElementById("mm-status");v&&(v.textContent="En attente d'un autre joueur..."),f=k.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},I=>{const D=I.new;D.status==="matched"&&D.match_id&&y(D.match_id,D.matched_with,!0)}).subscribe()}async function rn(e,t,i,n,c=[],a=[]){const{state:s,navigate:d,toast:p}=t,o=n?"p1":"p2",r=n?"p2":"p1",u=(c||[]).map(m=>m.id),f=(c||[]).map(m=>({id:m.id,gc_type:m.gc_type,_gcDef:m._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await k.from("matches").select("*").eq("id",i).single();if(!g){p("Match introuvable","error"),d("home");return}async function y(){const[{data:m},{data:b},{data:L},{data:T}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),E=F=>({cardId:F.card_id,position:F.position,id:F.id,firstname:F.firstname,name:F.surname_encoded,country_code:F.country_code,club_id:F.club_id,job:F.job,job2:F.job2,note_g:Number(F.note_g)||0,note_d:Number(F.note_d)||0,note_m:Number(F.note_m)||0,note_a:Number(F.note_a)||0,rarity:F.rarity,skin:F.skin,hair:F.hair,hair_length:F.hair_length,clubName:F.club_encoded_name||null,clubLogo:F.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),z=((m==null?void 0:m.starters)||[]).map(F=>E(F)),B=((b==null?void 0:b.starters)||[]).map(F=>E(F)),q=(m==null?void 0:m.formation)||"4-4-2",H=(b==null?void 0:b.formation)||"4-4-2";return{p1Team:At(z,q),p2Team:At(B,H),p1Subs:((m==null?void 0:m.subs)||[]).map(F=>E(F)),p2Subs:((b==null?void 0:b.subs)||[]).map(F=>E(F)),p1Formation:q,p2Formation:H,p1Name:(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"Joueur 1",p2Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let l=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!l)if(n){l=await y();const{data:m}=await k.from("matches").select("game_state").eq("id",i).single();!(m!=null&&m.game_state)||!Object.keys(m.game_state).length?await k.from("matches").update({game_state:l,turn_user_id:g.home_id}).eq("id",i):l=m.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let m=0;m<30&&!l;m++){await new Promise(L=>setTimeout(L,400));const{data:b}=await k.from("matches").select("game_state").eq("id",i).single();b!=null&&b.game_state&&Object.keys(b.game_state).length&&(l=b.game_state)}if(!l){p("Erreur de synchronisation","error"),d("home");return}l.gc_p2=u,l.gcCardsFull_p2=f,await k.from("matches").update({game_state:l}).eq("id",i)}let x=!1,v=null,h=!1;const I=new Set,D=new Set;function _(m){var F,U;try{k.removeChannel(w)}catch{}const b=l[o+"Score"]||0,L=l[r+"Score"]||0;let T,E;m.winner_id?(T=m.winner_id===s.profile.id,E=!1):m.forfeit?(T=b>L,E=!1):(E=b===L,T=b>L),(F=document.getElementById("pvp-end-overlay"))==null||F.remove();const z=document.createElement("div");z.id="pvp-end-overlay",z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const B=E?"🤝":T?"🏆":"😞",q=E?"MATCH NUL":T?"VICTOIRE !":"DÉFAITE",H=E?"#fff":T?"#FFD700":"#ff6b6b";z.innerHTML=`
      <div style="font-size:64px">${B}</div>
      <div style="font-size:26px;font-weight:900;color:${H}">${q}</div>
      <div style="font-size:18px">${l[o+"Name"]} ${b} – ${L} ${l[r+"Name"]}</div>
      ${m.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${T?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(z),(U=z.querySelector("#pvp-end-home"))==null||U.addEventListener("click",()=>{z.remove(),Re(e),d("home")})}const w=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},m=>{const b=m.new;try{if(b.status==="finished"||b.forfeit){if(x)return;x=!0,v&&(clearInterval(v),v=null),b.game_state&&(l=b.game_state),_(b);return}if(b.game_state){const L=l;l=b.game_state;const T=l._lastGC;if(T&&T.seq&&!D.has(T.seq)&&(D.add(T.seq),T.by!==o)){de(T.type,T.by,()=>A());return}const E=L[o+"Score"]||0,z=L[r+"Score"]||0,B=l[o+"Score"]||0,q=l[r+"Score"]||0,H=B>E,F=q>z;if((H||F)&&!I.has(l.round)){I.add(l.round);const U=[...l.log||[]].reverse().find(Z=>Z.isGoal),V=((U==null?void 0:U.homePlayers)||[]).map(Z=>({name:Z.name,note:Z.note,portrait:Z.portrait,job:Z.job}));se(V,B,q,H,()=>A());return}A()}}catch(L){console.error("[PvP] crash:",L)}}).subscribe();async function S(m){Object.assign(l,m),l.lastActionAt=new Date().toISOString();const{error:b}=await k.from("matches").update({game_state:l}).eq("id",i);b&&p("Erreur de synchronisation","error");try{A()}catch(L){console.error("[PvP] renderPvpScreen crash:",L)}}async function ee(){if(x)return;x=!0,v&&(clearInterval(v),v=null);const m=n?g.away_id:g.home_id,b=n?"p2":"p1",L=n?"p1":"p2",T={...l,[b+"Score"]:3,[L+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:m,home_score:T.p1Score||0,away_score:T.p2Score||0,game_state:T}).eq("id",i)}catch{}try{k.removeChannel(w)}catch{}setTimeout(()=>{Re(e),d("home")},800)}const re={BOOST_STAT:({value:m=1,count:b=1,roles:L=[]},T,E)=>{const z=T[o+"Team"],B=Object.entries(z).filter(([q])=>!L.length||L.includes(q)).flatMap(([q,H])=>H.filter(F=>!F.used).map(F=>({...F,_line:q})));if(!B.length){T.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),E(T);return}te(B,b,`Choisir ${b} joueur(s) à booster (+${m})`,q=>{q.forEach(H=>{const F=(z[H._line]||[]).find(U=>U.cardId===H.cardId);F&&(F.boost=(F.boost||0)+m,T.log.push({text:`⚡ +${m} sur ${F.name}`,type:"info"}))}),T[o+"Team"]=z,E(T)})},DEBUFF_STAT:({value:m=1,count:b=1,roles:L=[],target:T="ai"},E,z)=>{const B=T==="home"?o:r,q=E[B+"Team"],H=T==="home"?"allié":"adverse",F=Object.entries(q).filter(([U])=>!L.length||L.includes(U)).flatMap(([U,V])=>V.filter(Z=>!Z.used).map(Z=>({...Z,_line:U})));if(!F.length){E.log.push({text:`🎯 Aucun joueur ${H}`,type:"info"}),z(E);return}te(F,b,`Choisir ${b} joueur(s) ${H}(s) (-${m})`,U=>{U.forEach(V=>{const Z=(q[V._line]||[]).find(ue=>ue.cardId===V.cardId);Z&&(Z.boost=(Z.boost||0)-m,E.log.push({text:`🎯 -${m} sur ${Z.name}`,type:"info"}))}),E[B+"Team"]=q,z(E)})},GRAY_PLAYER:({count:m=1,roles:b=[],target:L="ai"},T,E)=>{const z=L==="home"?o:r,B=T[z+"Team"],q=L==="home"?"allié":"adverse",H=Object.entries(B).filter(([F])=>!b.length||b.includes(F)).flatMap(([F,U])=>U.filter(V=>!V.used).map(V=>({...V,_line:F})));if(!H.length){T.log.push({text:`❌ Aucun joueur ${q}`,type:"info"}),E(T);return}te(H,m,`Choisir ${m} joueur(s) ${q}(s) à exclure`,F=>{F.forEach(U=>{const V=(B[U._line]||[]).find(Z=>Z.cardId===U.cardId);V&&(V.used=!0,T.log.push({text:`❌ ${V.name} exclu !`,type:"info"}))}),T[z+"Team"]=B,E(T)})},REVIVE_PLAYER:({count:m=1,roles:b=[]},L,T)=>{const E=L[o+"Team"],z=Object.entries(E).filter(([B])=>!b.length||b.includes(B)).flatMap(([B,q])=>q.filter(H=>H.used).map(H=>({...H,_line:B})));if(!z.length){L.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),T(L);return}te(z,m,`Choisir ${m} joueur(s) à ressusciter`,B=>{B.forEach(q=>{const H=(E[q._line]||[]).find(F=>F.cardId===q.cardId);H&&(H.used=!1,L.log.push({text:`💫 ${H.name} ressuscité !`,type:"info"}))}),L[o+"Team"]=E,T(L)})},REMOVE_GOAL:({},m,b)=>{const L=r+"Score";m[L]>0?(m[L]--,m.log.push({text:"🚫 Dernier but annulé !",type:"info"})):m.log.push({text:"🚫 Aucun but à annuler",type:"info"}),b(m)},ADD_GOAL_DRAW:({},m,b)=>{m[o+"Score"]===m[r+"Score"]?(m[o+"Score"]++,m.log.push({text:"🎯 But bonus !",type:"info"})):m.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),b(m)},ADD_SUB:({value:m=1},b,L)=>{b.maxSubs=(b.maxSubs||3)+m,b.log.push({text:`🔄 +${m} remplacement(s)`,type:"info"}),L(b)},CUSTOM:({},m,b)=>b(m)};function te(m,b,L,T){const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let z=[];function B(){var H,F;const q=m.map(U=>{const V={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[U._line]||"#555",Z=me(U,U._line)+(U.boost||0),we=z.find(Q=>Q.cardId===U.cardId)?"#FFD700":"rgba(255,255,255,0.25)",X=U.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${U.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${we};background:${V};overflow:hidden;cursor:pointer;${X}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${U.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${U._line}</div>
        </div>`}).join("");E.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${L}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${z.length}/${b}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${q}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${z.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${z.length}/${b})
          </button>
        </div>`,(H=E.querySelector("#pp-close"))==null||H.addEventListener("click",()=>E.remove()),E.querySelectorAll(".pp-item").forEach(U=>{U.addEventListener("click",()=>{const V=U.dataset.cid,Z=m.find(we=>we.cardId===V),ue=z.findIndex(we=>we.cardId===V);Z&&(ue>-1?z.splice(ue,1):z.length<b&&z.push(Z),B())})}),(F=E.querySelector("#pp-confirm"))==null||F.addEventListener("click",()=>{E.remove(),T(z)})}B(),document.body.appendChild(E)}async function $(m,b){const T=(l["gcCardsFull_"+o]||[]).find(q=>q.id===m),E=(T==null?void 0:T._gcDef)||(l.gcDefs||[]).find(q=>{var H;return q.name===b||((H=q.name)==null?void 0:H.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),z=[...l["usedGc_"+o]||[],m],B={type:b,by:o,seq:(l._gcAnimSeq||0)+1};D.add(B.seq),de(b,o,async()=>{if(E!=null&&E.effect_type&&E.effect_type!=="CUSTOM"){const H=re[E.effect_type];if(H){const F={...l};H(E.effect_params||{},F,async U=>{U["usedGc_"+o]=z,U._lastGC=B,U._gcAnimSeq=B.seq,await S(U)});return}}const q={...l};switch(b){case"Remplacement+":q.maxSubs=(q.maxSubs||3)+1,q.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const H=r+"Score";q[H]>0&&(q[H]--,q.log.push({text:"🚫 But annulé",type:"info"}));break}}q["usedGc_"+o]=z,q._lastGC=B,q._gcAnimSeq=B.seq,await S(q)})}function R(m,b){const L="usedCardIds_"+m,T=new Set(l[L]||[]);b.forEach(E=>T.add(E)),l[L]=[...T]}function Y(){for(const m of["p1","p2"]){const b=new Set(l["usedCardIds_"+m]||[]),L=l[m+"Team"];if(L)for(const T of["GK","DEF","MIL","ATT"])(L[T]||[]).forEach(E=>{E.used=b.has(E.cardId)})}}function A(){var Ke,ei,ti,ii,oi,ni;if(l.phase==="reveal")return K();if(l.phase==="midfield")return J();if(l.phase==="finished")return je();const m=l[o+"Team"],b=l[r+"Team"];Y();const L=l[o+"Score"],T=l[r+"Score"],E=l[o+"Name"],z=l[r+"Name"],B=l.phase===o+"-attack",q=l.phase===o+"-defense",H=Array.isArray(l["selected_"+o])?l["selected_"+o]:[],F=H.map(O=>O.cardId),U=window.innerWidth>=700,V=l[o+"Subs"]||[],Z=l["usedSubIds_"+o]||[],ue=V.filter(O=>!Z.includes(O.cardId)),we=l["gcCardsFull_"+o]||[],X=l["usedGc_"+o]||[],Q=we.filter(O=>!X.includes(O.id)),ne=l.boostOwner===o&&!l.boostUsed,ce=!["GK","DEF","MIL","ATT"].some(O=>(b[O]||[]).some(ie=>!ie.used)),ye=[...m.MIL||[],...m.ATT||[]].filter(O=>!O.used),ke=B&&ce&&ye.length===0?[...m.GK||[],...m.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function he(O,ie,$e){var di,li;const le=O._gcDef,Ve={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ze={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",st=(le==null?void 0:le.name)||O.gc_type,dt=(le==null?void 0:le.effect)||((di=Ce[O.gc_type])==null?void 0:di.desc)||"",ri=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null,Yi=((li=Ce[O.gc_type])==null?void 0:li.icon)||"⚡",ai=Math.round($e*.22),si=Math.round($e*.22),Mt=$e-ai-si,Wi=st.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${ie}px;height:${$e}px;border-radius:10px;border:2px solid ${Ze};background:${Ve};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ai}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Wi}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ie-6}px">${st}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ri?`<img src="${ri}" style="max-width:${ie-10}px;max-height:${Mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Mt*.55)}px">${Yi}</span>`}
        </div>
        <div style="height:${si}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${dt.slice(0,38)}</span>
        </div>
      </div>`}function Ae(O,ie){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${ie}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ie*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ie*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ie*.09)}px;color:#000;font-weight:900">+${l.boostValue}</div>
      </div>`}const Me=(O,ie)=>ie?Ae(130,175):he(O,130,175),He=(O,ie)=>ie?Ae(68,95):he(O,68,95),De=U?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",qe=B?be(o)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${H.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:q?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${H.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${z}</div>`,ze=B&&!be(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||q?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${H.length}/3 sélectionné(s)</div>`:"",Ge=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${U?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ue.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ue.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Be(O,U?76:44,U?100:58)}</div>`).join("")}
    </div>`,Fe=B?"attack":q?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${bt(m,l[o+"Formation"],Fe,F,300,300,ke)}
      </div>
    </div>`;function Ne(O){if(O.type==="duel"&&(O.homeTotal!=null||O.aiTotal!=null)){const ie=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(O.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.homePlayers||[]).map($e=>tt($e)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ie?20:14}px;font-weight:900;color:${ie?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${O.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ie?14:20}px;font-weight:900;color:${ie?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${O.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.aiPlayers||[]).map($e=>tt($e)).join("")}
            </div>
          </div>
          ${O.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${O.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const Qe=(()=>{var ie,$e;if(q&&((ie=l.pendingAttack)!=null&&ie.players)){const le=l.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${z} ATTAQUE — Défendez !</div>
          ${et((le.players||[]).map(Ve=>({...Ve,used:!1})),"#ff6b6b",le.total)}
        </div>`}if(B&&(($e=l.pendingAttack)!=null&&$e.players)){const le=l.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((le.players||[]).map(Ve=>({...Ve,used:!1})),"#00ff88",le.total)}
        </div>`}const O=(l.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+Ne(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Pe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${L} – ${T}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${z}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Qe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(l.log||[]).length})
      </button>`;Ye(e),e.style.overflow="hidden",U?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Pe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ge}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${qe}${ze}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Q.map(O=>Me(O,!1)).join("")}
            ${ne?Me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Pe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${bt(m,l[o+"Formation"],Fe,F,300,300,ke)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Q.map(O=>He(O,!1)).join("")}
            ${ne?He(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&ue.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&ue.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&ue.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&ue.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ue.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(l["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(l["usedSubIds_"+o]||[]).length}/${l.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${qe}${ze}</div>
        </div>
      </div>`;function Se(){const O=e.querySelector(".match-screen");if(!O)return;const ie=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=ie+"px",O.style.minHeight=ie+"px",O.style.maxHeight=ie+"px",O.style.overflow="hidden";const $e=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");$e&&le&&(le.style.paddingBottom=$e.offsetHeight+"px")}if(Se(),setTimeout(Se,120),setTimeout(Se,400),h||(h=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Se),window.visualViewport.addEventListener("scroll",Se)),window.addEventListener("resize",Se)),function(){const ie=e.querySelector(".terrain-wrapper svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("viewBox","-26 -26 352 352"),ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!B&&!q)return;const ie=O.dataset.cardId,$e=O.dataset.role,le=(m[$e]||[]).find(dt=>dt.cardId===ie);if(!le||le.used)return;const Ve=ke.includes(ie);if(B&&!["MIL","ATT"].includes($e)&&!Ve)return;Array.isArray(l["selected_"+o])||(l["selected_"+o]=[]);const Ze=l["selected_"+o],st=Ze.findIndex(dt=>dt.cardId===ie);st>-1?Ze.splice(st,1):Ze.length<3&&Ze.push({...le,_role:$e}),A()})}),e.querySelectorAll(".match-used-hit").forEach(O=>{O.addEventListener("click",()=>C(O.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>C())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>C()),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>ae(O.dataset.gcId,O.dataset.gcType))}),(ei=e.querySelector("#pvp-boost-card"))==null||ei.addEventListener("click",()=>M()),(ti=e.querySelector("#pvp-action"))==null||ti.addEventListener("click",O=>{B?O.currentTarget.dataset.pass==="1"||!be(o)?oe():W():q&&ve()}),(ii=e.querySelector("#pvp-quit"))==null||ii.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ee()}),(oi=e.querySelector("#pvp-view-opp"))==null||oi.addEventListener("click",()=>j()),(ni=e.querySelector("#pvp-toggle-history"))==null||ni.addEventListener("click",()=>P()),v&&(clearInterval(v),v=null),(B||q)&&!x){let O=30,ie=!1;const $e=()=>document.getElementById("pvp-timer"),le=()=>{$e()&&($e().textContent=O+"s",$e().style.color=ie?"#ff4444":"#fff")};le(),v=setInterval(()=>{O--,O<0?ie?(clearInterval(v),v=null,B&&!be(o)?oe():ee()):(ie=!0,O=15,le()):le()},1e3)}}function K(){Ye(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${l[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ht(l[r+"Team"],l[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await S({phase:"midfield"})},5e3)}let G=!1;function J(){if(G)return;const m=l[o+"Team"].MIL||[],b=l[r+"Team"].MIL||[];function L(Q){return Q.reduce((ne,ce)=>ne+me(ce,"MIL"),0)}function T(Q){let ne=0;for(let ce=0;ce<Q.length-1;ce++){const ye=Je(Q[ce],Q[ce+1]);ye==="#00ff88"?ne+=2:ye==="#FFD700"&&(ne+=1)}return ne}const E=L(m)+T(m),z=L(b)+T(b),B=E>=z;function q(Q,ne,ce){return`<div id="duel-row-${ce}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Q.map((ye,ke)=>{const he=ke<Q.length-1?Je(ye,Q[ke+1]):null,Ae=!he||he==="#ff3333"||he==="#cc2222",Me=he==="#00ff88"?"+2":he==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ce}" data-idx="${ke}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Be({...ye,note:me(ye,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ke<Q.length-1?`<div class="duel-link duel-link-${ce}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ae?"rgba(255,255,255,0.12)":he};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ae?"none":`0 0 8px ${he}`}">
              ${Me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${he}">${Me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ce}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${L(Q)} + ${T(Q)} liens = <b style="color:#fff">${L(Q)+T(Q)}</b>
        </div>
      </div>`}Ye(e),e.innerHTML=`
    <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <style>
        @keyframes duelPulse{0%{transform:scale(1)}50%{transform:scale(1.18)}100%{transform:scale(1)}}
        @keyframes duelGlow{0%,100%{text-shadow:0 0 12px rgba(255,215,0,.6)}50%{text-shadow:0 0 28px rgba(255,215,0,.95)}}
        @keyframes vsFlash{0%{opacity:0;transform:scale(2)}60%{opacity:1;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}
        @keyframes winnerSlam{0%{transform:scale(1)}35%{transform:translateY(-14px) scale(1.05)}70%{transform:translateY(10px) scale(1.12,.92)}100%{transform:translateY(0) scale(1)}}
        @keyframes crushSquash{0%{transform:scaleY(1);opacity:1}55%{transform:scaleY(.1) translateY(8px);opacity:.5}100%{transform:scaleY(0);opacity:0}}
        @keyframes shockwave{0%{transform:translateX(-50%) scale(.2);opacity:.9}100%{transform:translateX(-50%) scale(2.4);opacity:0}}
        @keyframes boostFlipIn{0%{transform:perspective(600px) rotateY(90deg) scale(.6);opacity:0}60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>
      ${q(m,l[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${q(b,l[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const H=(Q,ne)=>e.querySelectorAll(Q).forEach((ce,ye)=>{setTimeout(()=>{ce.style.opacity="1",ce.style.transform="translateY(0) scale(1)"},ne+ye*90)});H(".duel-card-me",150),H(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Q,ne)=>setTimeout(()=>{Q.style.opacity="1"},ne*70)),900),setTimeout(()=>{const Q=e.querySelector("#pvp-vs");Q&&(Q.style.opacity="1",Q.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function F(Q,ne,ce){const ye=document.getElementById(Q);if(!ye)return;const ke=performance.now(),he=Ae=>{const Me=Math.min(1,(Ae-ke)/ce);ye.textContent=Math.round(ne*(1-Math.pow(1-Me,3))),Me<1?requestAnimationFrame(he):ye.textContent=ne};requestAnimationFrame(he)}setTimeout(()=>{F("pvp-score-me",E,800),F("pvp-score-opp",z,800)},1500);const U=l.p1Team.MIL||[],V=l.p2Team.MIL||[],Z=L(U)+T(U),ue=L(V)+T(V),we=Z>=ue?"p1":"p2";let X=l.boostValue;X==null&&(X=Ri(),l.boostValue=X,l.boostOwner=we,l.boostUsed=!1),G=!0,setTimeout(()=>{const Q=e.querySelector("#duel-row-"+(B?"me":"opp")),ne=e.querySelector("#duel-row-"+(B?"opp":"me")),ce=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),ke=B?ce:ye,he=B?ye:ce;ke&&(ke.style.fontSize="80px",ke.style.color=B?"#FFD700":"#ff6b6b",ke.style.animation="duelPulse .5s ease"+(B?",duelGlow 1.5s ease infinite .5s":"")),he&&(he.style.opacity="0.25"),setTimeout(()=>{Q&&(Q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Q.style.zIndex="5"),setTimeout(()=>{const Ae=document.getElementById("duel-shock");Ae&&(Ae.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const Ae=document.getElementById("pvp-duel-finale");if(!Ae)return;const Me=l.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+X+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",He=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(B?"⚽ "+l[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+l[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Me+He,Ae.style.transition="opacity .45s ease",Ae.style.opacity="1",Ae.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const qe=we;await S({phase:qe+"-attack",attacker:qe,round:1,boostValue:X,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function se(m,b,L,T,E){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const B=Array.from({length:10},(U,V)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${V%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][V%8]}</div>`).join(""),q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};z.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${B}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${T?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${b} – ${L}
      </div>
      ${m!=null&&m.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${m.map(U=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${q[U.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${U.portrait?`<img src="${U.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(U.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(z);let H=!1;const F=()=>{H||(H=!0,z.remove(),setTimeout(()=>E(),50))};z.addEventListener("click",F),setTimeout(F,3500)}function de(m,b,L){var X,Q;const T=(l.gcDefs||[]).find(ne=>{var ce;return ne.name===m||((ce=ne.name)==null?void 0:ce.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),E={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",B=(T==null?void 0:T.name)||m,q=(T==null?void 0:T.effect)||((X=Ce[m])==null?void 0:X.desc)||"",H=T!=null&&T.image_url?`/manager-wars/icons/${T.image_url}`:null,F=((Q=Ce[m])==null?void 0:Q.icon)||"⚡",V=b===o?"Vous":l[b+"Name"]||"Adversaire",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Z.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${z}66}50%{box-shadow:0 0 60px ${z}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${z};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${V} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${z};background:${E};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${H?`<img src="${H}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${F}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${q}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Z);let ue=!1;const we=()=>{ue||(ue=!0,Z.remove(),setTimeout(()=>L&&L(),50))};Z.addEventListener("click",we),setTimeout(we,3e3)}function ae(m,b){var Z,ue,we,X;const T=(l["gcCardsFull_"+o]||[]).find(Q=>Q.id===m),E=T==null?void 0:T._gcDef,z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",q=(E==null?void 0:E.name)||b,H=(E==null?void 0:E.effect)||((Z=Ce[b])==null?void 0:Z.desc)||"Carte spéciale.",F=E!=null&&E.image_url?`/manager-wars/icons/${E.image_url}`:null,U=((ue=Ce[b])==null?void 0:ue.icon)||"⚡",V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",V.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${z};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${F?`<img src="${F}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${U}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${H}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(V),(we=V.querySelector("#pvp-gc-back"))==null||we.addEventListener("click",()=>V.remove()),(X=V.querySelector("#pvp-gc-use"))==null||X.addEventListener("click",()=>{V.remove(),$(m,b)})}function M(){var T;const m=l[o+"Team"],b=Object.entries(m).flatMap(([E,z])=>(z||[]).filter(B=>!B.used).map(B=>({...B,_line:E})));if(!b.length)return;const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",L.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${l.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${b.map(E=>{const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[E._line]||"#555",B=me(E,E._line)+(E.boost||0);return`<div class="bp-item" data-cid="${E.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${z};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${E.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(L),(T=L.querySelector("#bp-close"))==null||T.addEventListener("click",()=>L.remove()),L.querySelectorAll(".bp-item").forEach(E=>{E.addEventListener("click",async()=>{const z=E.dataset.cid,B=b.find(H=>H.cardId===z);if(!B)return;const q=(m[B._line]||[]).find(H=>H.cardId===z);q&&(q.boost=(q.boost||0)+l.boostValue),L.remove(),await S({[o+"Team"]:m,boostUsed:!0})})})}function C(m=null){var ue,we;if(!(l.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const L=l[o+"Team"],T=l["usedSubIds_"+o]||[],E=l.maxSubs||3;if(T.length>=E){p(`Maximum ${E} remplacements atteint`,"warning");return}const z=Object.entries(L).flatMap(([X,Q])=>(Q||[]).filter(ne=>ne.used).map(ne=>({...ne,_line:X}))),B=(l[o+"Subs"]||[]).filter(X=>!T.includes(X.cardId));if(!z.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){p("Aucun remplaçant disponible","warning");return}let q=Math.max(0,z.findIndex(X=>X.cardId===m));const H=((ue=z[q])==null?void 0:ue._line)||((we=z[q])==null?void 0:we.job);let F=Math.max(0,B.findIndex(X=>X.job===H)),U=!1;const V=document.createElement("div");V.id="pvp-sub-overlay",V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Z(){var he,Ae,Me,He,De,qe;const X=z[q],Q=B[F],ne=Math.min(130,Math.round((window.innerWidth-90)/2)),ce=Math.round(ne*1.35),ye=ze=>`background:rgba(255,255,255,0.12);border:none;color:${ze?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ze?"default":"pointer"};flex-shrink:0`;V.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${T.length}/${E})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ye(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${Q?Be({...Q,used:!1,boost:0},ne,ce):"<div>—</div>"}</div>
          <button id="pin-down" style="${ye(F>=B.length-1)}" ${F>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ye(q===0)}" ${q===0?"disabled":""}>▲</button>
          <div>${X?Be({...X,used:!1,boost:0},ne,ce):"<div>—</div>"}</div>
          <button id="pout-down" style="${ye(q>=z.length-1)}" ${q>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${q+1}/${z.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(he=V.querySelector("#psub-close"))==null||he.addEventListener("click",()=>V.remove()),(Ae=V.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{q>0&&(q--,Z())}),(Me=V.querySelector("#pout-down"))==null||Me.addEventListener("click",()=>{q<z.length-1&&(q++,Z())}),(He=V.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{F>0&&(F--,Z())}),(De=V.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{F<B.length-1&&(F++,Z())});const ke=(ze,Ge,Fe,Ue)=>{const Ne=V.querySelector("#"+ze);if(!Ne)return;let Qe=0;Ne.addEventListener("touchstart",Pe=>{Qe=Pe.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Pe=>{const Se=Pe.changedTouches[0].clientY-Qe;if(Math.abs(Se)<30)return;const Ke=Ge();Se<0&&Ke<Ue-1?(Fe(Ke+1),Z()):Se>0&&Ke>0&&(Fe(Ke-1),Z())},{passive:!0})};ke("pin-panel",()=>F,ze=>F=ze,B.length),ke("pout-panel",()=>q,ze=>q=ze,z.length),(qe=V.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async ze=>{if(ze.preventDefault(),ze.stopPropagation(),U)return;U=!0;const Ge=z[q],Fe=B[F];if(!Ge||!Fe)return;const Ue=Ge._line,Ne=(L[Ue]||[]).findIndex(Se=>Se.cardId===Ge.cardId);if(Ne===-1){p("Erreur : joueur introuvable","error"),V.remove();return}const Qe={...Fe,_line:Ue,position:Ge.position,used:!1,boost:0};L[Ue].splice(Ne,1,Qe);const Pe=[...T,Fe.cardId];V.remove(),N(Ge,Fe,async()=>{await S({[o+"Team"]:L,[r+"Team"]:l[r+"Team"],["usedSubIds_"+o]:Pe})})})}document.body.appendChild(V),Z()}function N(m,b,L){const T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const z=(H,F,U)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${F};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${U}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${T[H.job]||"#555"};border:3px solid ${F};position:relative;overflow:hidden;margin:0 auto">
        ${Te(H)?`<img src="${Te(H)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(H.name||"").slice(0,12)}</div>
    </div>`;E.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${z(b,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${z(m,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(E);let B=!1;const q=()=>{B||(B=!0,E.remove(),setTimeout(()=>L(),50))};E.addEventListener("click",q),setTimeout(q,2200)}function j(){var b;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",m.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${l[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ht(l[r+"Team"],l[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(m),(b=m.querySelector("#pvp-opp-close"))==null||b.addEventListener("click",()=>m.remove())}function P(){var L;const m=l.log||[],b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",b.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${m.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...m].reverse().map(T=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${T.type==="goal"?"#FFD700":T.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${T.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(b),(L=b.querySelector("#pvp-hist-close"))==null||L.addEventListener("click",()=>b.remove())}async function oe(){if(l.phase!==o+"-attack")return;const m=o==="p1"?"p2":"p1",b=(l.round||0)+1,L=[...l.log||[]];L.push({type:"info",text:`⏭️ ${l[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const T=Ee(l),E=be(m),z=T||!E?"finished":m+"-attack";await S({["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},pendingAttack:null,phase:z,attacker:m,round:b,log:L}),z==="finished"&&await Ie(l)}async function W(){const m=l[o+"Team"],b=!["GK","DEF","MIL","ATT"].some(z=>(l[r+"Team"][z]||[]).some(B=>!B.used)),L=(l["selected_"+o]||[]).map(z=>{const B=(m[z._role]||[]).find(Z=>Z.cardId===z.cardId)||z,q=b&&["GK","DEF"].includes(z._role),H=m[z._role]||[],F=H.findIndex(Z=>Z.cardId===z.cardId),U=at(H.length),V=F>=0?U[F]:B._col??1;return{...B,_line:z._role,_col:V,...q?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!L.length)return;const T=Kt(L,l.modifiers[o]||{});R(o,L.map(z=>z.cardId)),L.forEach(z=>{const B=(m[z._role]||[]).find(q=>q.cardId===z.cardId);B&&(B.used=!0)}),l["selected_"+o]=[],A();const E=[...l.log||[]];if(b){const z=(l[o+"Score"]||0)+1,B=L.map(V=>({name:V.name,note:me(V,V._line||"ATT"),portrait:Te(V),job:V.job}));E.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:T.total,aiTotal:0});const q=(l.round||0)+1,H=o==="p1"?"p2":"p1",F={...l,[o+"Team"]:m,[o+"Score"]:z},U=Ee(F);I.add(q),se(B,z,l[r+"Score"]||0,!0,async()=>{await S({[o+"Team"]:m,[o+"Score"]:z,["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},pendingAttack:null,phase:U?"finished":H+"-attack",attacker:H,round:q,log:E}),U&&await Ie({...l,[o+"Score"]:z})});return}E.push({type:"pending",text:`⚔️ ${l[o+"Name"]} attaque (${T.total})`}),await S({[o+"Team"]:m,[r+"Team"]:l[r+"Team"],pendingAttack:{...T,players:L,side:o},["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},phase:r+"-defense",log:E})}async function ve(){const m=l[o+"Team"],b=(l["selected_"+o]||[]).map(X=>{const Q=(m[X._role]||[]).find(he=>he.cardId===X.cardId)||X,ne=m[X._role]||[],ce=ne.findIndex(he=>he.cardId===X.cardId),ye=at(ne.length),ke=ce>=0?ye[ce]:Q._col??1;return{...Q,_line:X._role,_col:ke}}),L=Vt(b,l.modifiers[o]||{});R(o,b.map(X=>X.cardId)),b.forEach(X=>{const Q=(m[X._role]||[]).find(ne=>ne.cardId===X.cardId);Q&&(Q.used=!0)}),l["selected_"+o]=[],A();const T=Yt(l.pendingAttack.total,L.total,l.modifiers[o]||{}),E=l.pendingAttack.side,z=T==="attack"||(T==null?void 0:T.goal),B=E==="p1"?"p2":"p1",q=(l.round||0)+1,H=(l.pendingAttack.players||[]).map(X=>({name:X.name,note:me(X,X._line||"ATT"),portrait:Te(X),job:X.job})),F=[...l.log||[]];F.push({type:"duel",isGoal:z,homeScored:z&&E===o,text:z?`⚽ BUT de ${l[E+"Name"]} ! (${l.pendingAttack.total} vs ${L.total})`:`✋ Attaque stoppée (${l.pendingAttack.total} vs ${L.total})`,homePlayers:H,aiPlayers:b.map(X=>({name:X.name,note:me(X,X._line||"DEF"),portrait:Te(X),job:X.job})),homeTotal:l.pendingAttack.total,aiTotal:L.total});const U=z?(l[E+"Score"]||0)+1:l[E+"Score"]||0,V={...l,[o+"Team"]:m,[E+"Score"]:U},Z=Ee(V),ue=Z?"finished":B+"-attack",we=async()=>{await S({[o+"Team"]:m,[r+"Team"]:l[r+"Team"],[E+"Score"]:U,["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},pendingAttack:null,phase:ue,attacker:B,round:q,log:F}),(ue==="finished"||Z)&&await Ie({...l,[E+"Score"]:U})};if(z){const X=E===o,Q=X?U:l[o+"Score"]||0,ne=X?l[r+"Score"]||0:U;I.add(q),se(H,Q,ne,X,we)}else await we()}function xe(m){return["MIL","ATT"].some(b=>(m[b]||[]).some(L=>!L.used))}function ge(m){return["GK","DEF","MIL","ATT"].some(b=>(m[b]||[]).some(L=>!L.used))}function fe(m){return ge(m)&&!xe(m)}function be(m){const b=l[m+"Team"],L=l[(m==="p1"?"p2":"p1")+"Team"];return!!(xe(b)||!ge(L)&&fe(b))}function Ee(m){const b=["MIL","ATT"].some(F=>(m.p1Team[F]||[]).some(U=>!U.used)),L=["MIL","ATT"].some(F=>(m.p2Team[F]||[]).some(U=>!U.used)),T=ge(m.p1Team),E=ge(m.p2Team);return!b&&!(!E&&T)&&(!L&&!(!T&&E))}function Le(m){const b=m.p1Score||0,L=m.p2Score||0;return b===L?null:b>L?g.home_id:g.away_id}async function Ie(m){try{await k.from("matches").update({status:"finished",winner_id:Le(m),home_score:m.p1Score||0,away_score:m.p2Score||0}).eq("id",i)}catch(b){console.error("[PvP] finishMatch:",b)}}function je(){var E;const m=l[o+"Score"],b=l[r+"Score"],L=m>b,T=m===b;Ye(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${L?"🏆":T?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${L?"Victoire !":T?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${m} - ${b}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(E=document.getElementById("pvp-home"))==null||E.addEventListener("click",()=>{try{k.removeChannel(w)}catch{}Re(e),d("home")})}A()}const an={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function sn(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Qt(e,t)}async function Qt(e,t){const{state:i,toast:n}=t,{data:c}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:a}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(c||[]).filter(o=>o.seller_id!==i.profile.id),d=a||[];d.filter(o=>o.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${s.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${d.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function p(o){const r=document.getElementById("mkt-content"),u=o==="buy"?s:d;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=o==="mine"?[...u].sort((g,y)=>g.status!==y.status?g.status==="active"?-1:1:new Date(y.listed_at)-new Date(g.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(g=>{var I,D,_,w;const y=(I=g.card)==null?void 0:I.player;if(!y)return"";const l=y.job==="GK"?y.note_g:y.job==="DEF"?y.note_d:y.job==="MIL"?y.note_m:y.note_a,x=an[y.rarity],v=(i.profile.credits||0)>=g.price,h=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${h?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${pn(y.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${l}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${y.firstname} ${y.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${y.country_code} · ${((D=y.clubs)==null?void 0:D.encoded_name)||"—"} · ${y.rarity} · ${y.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((_=g.seller)==null?void 0:_.pseudo)||"—"}</div>`:h?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((w=g.buyer)==null?void 0:w.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${v?"":"disabled"} style="margin-top:4px">${v?"Acheter":"Trop cher"}</button>`:h?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>dn(g.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>cn(g.dataset.cancel,e,t))})}p("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),p(o.dataset.tab)})})}async function dn(e,t,i,n){var g;const{state:c,toast:a,refreshProfile:s}=n,d=t.find(y=>y.id===e);if(!d)return;const p=d.price,o=c.profile.credits||0,r=(g=d.card)==null?void 0:g.player;if(o<p){a("Crédits insuffisants","error");return}if(!await ln(r,p))return;const f=document.querySelector(`[data-buy="${e}"]`);f&&(f.disabled=!0,f.textContent="⏳");try{const{data:y,error:l}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(l)throw new Error(l.message);if(!(y!=null&&y.success))throw new Error((y==null?void 0:y.error)||"Achat impossible");c.profile.credits=o-p;const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(o-p).toLocaleString("fr")}`),a(`✅ ${r==null?void 0:r.surname_encoded} ajouté à ta collection !`,"success"),Qt(i,n)}catch(y){a("❌ "+y.message,"error"),f&&(f.disabled=!1,f.textContent="Acheter")}}function ln(e,t){return new Promise(i=>{const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;max-width:360px;width:100%;box-shadow:0 8px 40px rgba(0,0,0,0.25)">
        <div style="font-size:18px;font-weight:900;margin-bottom:6px">Confirmer l'achat</div>
        <div style="font-size:14px;color:#555;margin-bottom:16px;line-height:1.5">
          Acheter <b>${(e==null?void 0:e.firstname)||""} ${(e==null?void 0:e.surname_encoded)||""}</b><br>
          pour <span style="color:#c47a00;font-weight:900;font-size:16px">${t.toLocaleString("fr")} crédits</span> ?
        </div>
        <div style="display:flex;gap:10px">
          <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#1A6B3C,#2a9d5c);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Acheter ✅</button>
        </div>
      </div>`,document.body.appendChild(n);const c=a=>{n.remove(),i(a)};n.querySelector("#buy-ok").addEventListener("click",()=>c(!0)),n.querySelector("#buy-cancel").addEventListener("click",()=>c(!1)),n.addEventListener("click",a=>{a.target===n&&c(!1)})})}async function cn(e,t,i){const{toast:n}=i,{data:c}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),n("Annonce retirée","success"),Qt(t,i)}function pn(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function un(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((a,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${a.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${a.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${a.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${a.trophies_top1} 🥈${a.trophies_top2} 🥉${a.trophies_top3}</div>
              <div style="color:var(--gray-600)">${a.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function fn(e,{state:t,navigate:i,toast:n}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await k.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(a||[]).filter(r=>r.status==="finished"),p=(a||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===c.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const f=r.winner_id===c.id,g=r.home_score===r.away_score&&r.status==="finished",y=r.status!=="finished"?"…":g?"N":f?"V":"D",l=r.status!=="finished"||g?"#888":f?"#1A6B3C":"#c0392b";let x=s[r.mode]||r.mode;r.away_id===null&&!x.startsWith("IA")&&(x="IA");const h=r.home_id===c.id?r.away:r.home;let I;r.away_id===null?I=x:h?I=`${h.club_name||h.pseudo} (${h.pseudo})`:I="Adversaire";let D="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(D=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const _=new Date(r.created_at),w=_.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+_.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),S=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${I}${D}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${w}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${S}</span>
        <span style="background:${l};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${y}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(a||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(o).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(o).join("")}
        </div>`:""}

      ${(a||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Xi(Qi);const pe={user:null,profile:null,page:"home",params:{}};function pt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function gn(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Nt(){document.getElementById("modal-overlay").classList.add("hidden")}async function ut(){if(!pe.user)return;const{data:e}=await k.from("users").select("*").eq("id",pe.user.id).single();e&&(pe.profile=e)}const Zt="mw_theme";function It(){return localStorage.getItem(Zt)||"light"}function mn(e){var t;localStorage.setItem(Zt,e),Pt(e),(t=pe.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",pe.profile.id).then(()=>{})}function Pt(e){document.documentElement.setAttribute("data-theme",e)}function kt(e,t={}){pe.page=e,pe.params=t,Ki()}async function Ki(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===pe.page)});const t=document.getElementById("nav-credits");t&&pe.profile&&(t.textContent=`💰 ${(pe.profile.credits||0).toLocaleString("fr")}`);const i={state:pe,navigate:kt,toast:pt,openModal:gn,closeModal:Nt,refreshProfile:ut};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',pe.page){case"home":await ui(e,i);break;case"collection":await uo(e,i);break;case"decks":await Bt(e,i);break;case"boosters":await Ao(e,i);break;case"match":{(pe.params&&pe.params.matchMode||"vs_ai_easy")==="random"?await on(e,i):await Ro(e,i);break}case"market":await sn(e,i);break;case"rankings":await un(e,i);break;case"matches":await fn(e,i);break;case"friends":await io(e,i);break;default:await ui(e,i)}}function xn(){const e=document.getElementById("app"),t=pe.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(t.credits||0).toLocaleString("fr")}</div>
        <button id="theme-toggle" class="theme-toggle-btn" title="Changer le thème">
          <span id="theme-icon"></span>
        </button>
      </div>
    </nav>

    <main id="page-content" class="page"></main>

    <nav class="bottom-nav">
      <a href="#" data-page="home" class="active">
        <div class="nav-icon-wrap">
          <img src="${i}nav-home.png" alt="" class="nav-icon">
          <img src="${i}nav-home-txt.png" alt="Accueil" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="collection">
        <div class="nav-icon-wrap">
          <img src="${i}nav-collection.png" alt="" class="nav-icon">
          <img src="${i}nav-collection-txt.png" alt="Cartes" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="decks">
        <div class="nav-icon-wrap">
          <img src="${i}nav-decks.png" alt="" class="nav-icon">
          <img src="${i}nav-deck-txt.png" alt="Decks" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="boosters">
        <div class="nav-icon-wrap">
          <img src="${i}nav-boosters.png" alt="" class="nav-icon">
          <img src="${i}nav-boosters-txt.png" alt="Boosters" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="market">
        <div class="nav-icon-wrap">
          <img src="${i}nav-market.png" alt="" class="nav-icon">
          <img src="${i}nav-market-txt.png" alt="Marché" class="nav-label">
        </div>
      </a>
    </nav>
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",c=>{c.preventDefault(),kt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>kt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=It()==="dark"?"light":"dark";mn(c),vi(c)}),vi(It())}function vi(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function yn(){Pt(It()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Nt()}),document.getElementById("modal-close").addEventListener("click",Nt);const{data:{session:e}}=await k.auth.getSession();if(!e){wi(),ci(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt});return}pe.user=e.user,await ut(),wi();try{const{data:i}=await k.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(c=>{n[c.formation]=c.links}),Ji(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!pe.profile){Zi(document.getElementById("app"),{state:pe,navigate:async()=>{await ut(),jt()},toast:pt,refreshProfile:ut});return}const t=Array.isArray(pe.profile.pending_boosters)?pe.profile.pending_boosters:[];if(!pe.profile.onboarding_done&&t.length>0){Do(document.getElementById("app"),{state:pe,navigate:()=>jt(),toast:pt,refreshProfile:ut});return}pe.profile.theme&&pe.profile.theme!==It()&&(localStorage.setItem(Zt,pe.profile.theme),Pt(pe.profile.theme)),jt(),k.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(pe.user=null,pe.profile=null,document.getElementById("app").innerHTML="",ci(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt}))})}function hn(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function zt(){const e=document.getElementById("app");e&&(e.style.height=hn()+"px")}window.addEventListener("resize",zt);window.addEventListener("orientationchange",()=>setTimeout(zt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",zt);function jt(){const e=()=>{var i;(i=pe.user)!=null&&i.id&&k.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",pe.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",zt(),xn(),Ki()}function wi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Vi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}yn().catch(e=>{console.error("Échec du démarrage:",e),Vi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Vi("Le serveur met trop de temps à répondre.")},12e3);
