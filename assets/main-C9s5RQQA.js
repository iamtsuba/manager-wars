import{s as T,F as oi,h as St,j as Ai,l as Qe,i as Xi,k as Ji,b as Qi}from"./formation-links-CEzN0rcz.js";function mi(e,{navigate:t,toast:o}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!a||!p){s.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:l}=await T.auth.signInWithPassword({email:a,password:p});if(d.textContent="Se connecter",d.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!a||!p||!s){d.textContent="Remplissez tous les champs.";return}if(p.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==s){d.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:u}=await T.auth.signUp({email:a,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,u){d.textContent=u.message;return}o("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function Zi(e,{state:t,navigate:o,toast:a,refreshProfile:p}){let s="#1A6B3C",d="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${d};border-color:${s}">
          <span id="logo-initials" style="color:${s}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${s};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${s}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch2" style="background:${d};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${d}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var k;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),f=((k=document.getElementById("setup-club"))==null?void 0:k.value)||"MW",m=f.trim().split(" ").filter(Boolean),x=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=s),r&&(r.textContent=x,r.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,l()});function u(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await T.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){r.textContent="Ce pseudo est déjà pris.";return}u(2)}),document.getElementById("step2-back").addEventListener("click",()=>u(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await T.from("users").select("id").eq("club_name",i).maybeSingle();if(f){r.textContent="Ce nom de club est déjà pris.";return}u(3)}),document.getElementById("step3-back").addEventListener("click",()=>u(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:x}=await T.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:s,club_color2:d,credits:1e4});if(x)throw x;await en(t.user.id),await p(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){f.textContent=x.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function en(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await T.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(o){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",o)}}const Lt="#1A6B3C",zt="#cc2222",tn="#D4A017",xi="#888";async function nn(e,t){const{state:o,toast:a}=t;e.innerHTML=`
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
    </div>`,await Ii(o,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>rn(o,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Li(o,a,null,t))}async function Ii(e,t,o={}){const{navigate:a}=o,p=e.user.id,{data:s,error:d}=await T.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${p},addressee_id.eq.${p}`),{count:l}=await T.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",p).eq("status","pending"),u=document.getElementById("pending-badge");u&&(l>0?(u.style.display="flex",u.textContent=l):u.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(d){console.error("[Friends] Erreur:",d),i.innerHTML=`<div style="color:${zt};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const r=(s||[]).map(x=>x.requester_id===p?x.addressee_id:x.requester_id);let f={};if(r.length){const{data:x}=await T.from("users").select("id, pseudo, club_name, last_seen_at").in("id",r);(x||[]).forEach(k=>{f[k.id]=k})}const m=(s||[]).map(x=>({friendshipId:x.id,friend:f[x.requester_id===p?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!m.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:x,friend:k})=>on(k,x)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>an(e,x.dataset.stats,x.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const k=x.dataset.friendId,n=x.dataset.friendName;console.log("[Friends] clic match",{fid:k,fname:n,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:k,friendName:n}):t("Erreur navigation","error")})})}function on(e,t){const o=e.club_name||e.pseudo||"?",a=(e.pseudo||"?").slice(0,2).toUpperCase(),p=e.last_seen_at?new Date(e.last_seen_at):null,s=p&&Date.now()-p.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <!-- Avatar + point de présence -->
      <div style="position:relative;width:42px;height:42px;flex-shrink:0">
        <div style="width:42px;height:42px;border-radius:50%;background:${Lt};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff">
          ${a}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${s?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px;flex-shrink:0"></div>`}
      </div>
      <!-- Infos -->
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o}</div>
        <div style="font-size:11px;color:${s?"#22c55e":"#999"};font-weight:600">${s?"En ligne":"Hors ligne"}</div>
      </div>
      <!-- Boutons -->
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${o}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${o}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid ${tn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function rn(e,t){const o=ri();o.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${zt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${ai()}`,document.body.appendChild(o);const a=o.querySelector("#friend-pseudo-input"),p=o.querySelector("#add-friend-error"),s=()=>o.remove();a.focus(),o.querySelector("#add-cancel").addEventListener("click",s),o.addEventListener("click",d=>{d.target===o&&s()}),o.querySelector("#add-ok").addEventListener("click",async()=>{const d=a.value.trim();if(!d){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await T.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:u}=await T.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(u){const r=u.status==="accepted"?"Vous êtes déjà amis !":u.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=r;return}const{error:i}=await T.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Li(e,t,o=null,a={}){const p=e.user.id,{data:s}=await T.from("friendships").select("id, requester_id").eq("addressee_id",p).eq("status","pending").order("created_at",{ascending:!1}),d=(s||[]).map(m=>m.requester_id);let l={};if(d.length){const{data:m}=await T.from("users").select("id, pseudo, club_name").in("id",d);(m||[]).forEach(x=>{l[x.id]=x})}const u=(s||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),i=ri(),r=u||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(m=>{var x,k,n;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=m.requester)==null?void 0:x.club_name)||((k=m.requester)==null?void 0:k.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((n=m.requester)==null?void 0:n.pseudo)||""})</span>
                </div>
                <button data-accept="${m.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${m.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${zt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",m=>{m.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:x}=await T.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ii(e,t,a),o&&o()})}),i.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await T.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),o&&o()})})}async function an(e,t,o){const a=e.user.id,[p,s]=[a,t].sort(),d=a===p,{data:l}=await T.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",s).single(),u=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},r=d?i.wins_p1||0:i.wins_p2||0,f=d?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,x=d?i.goals_p1||0:i.goals_p2||0,k=d?i.goals_p2||0:i.goals_p1||0,n=d?i.gc_used_p1||0:i.gc_used_p2||0,E=d?i.gc_used_p2||0:i.gc_used_p1||0,z=i.matches_total||0,M=(O,F,S,C=Lt,Z=zt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${C}">${F}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${O}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Z}">${S}</div>
    </div>`,j=ri();j.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${o}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o}</div>
      </div>
      ${z===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${M("Victoires",r,f)}
        ${M("Nuls",m,m,xi,xi)}
        ${M("Défaites",f,r)}
        ${M("Buts marqués",x,k)}
        ${M("Buts encaissés",k,x,zt,Lt)}
        ${M("GC utilisés ⚡",n,E,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(j),j.querySelector("#stats-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",O=>{O.target===j&&j.remove()})}function ri(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ai(){return`
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
        background:${Lt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const sn="2026.06.27-2256";async function yi(e,{state:t,navigate:o,toast:a}){var s,d;const p=t.profile;p&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>
      <!-- Invitations de match ami en attente -->
      <div id="match-invite-banner"></div>
      <!-- Invitation match ami en attente -->

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${p.club_color1};border:2px solid ${p.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${p.pseudo}</h3>
          <div class="level">Niveau ${p.level} · ${p.club_name}</div>
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
        ${p.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${sn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",u=>{u.preventDefault(),o(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>o("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>o("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const u=l.dataset.action;if(u==="match-ai"){ln(o);return}if(u==="match-random"){o("match",{matchMode:"random"});return}if(u==="match-friend"){o("friends");return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await T.auth.signOut(),window.location.reload()}),zi(t,a),dn(t,a,o))}async function dn(e,t,o){var l,u,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:p}=await T.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){a.innerHTML="";return}const s=((l=p.inviter)==null?void 0:l.club_name)||((u=p.inviter)==null?void 0:u.pseudo)||"?",d=p.inviter_id;a.innerHTML=`
    <div id="match-invite-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1a0a2e,#4a0a8a);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(74,10,138,0.4);
      animation:matchInvPulse 2s ease-in-out infinite;
    ">
      <style>@keyframes matchInvPulse{0%,100%{box-shadow:0 3px 12px rgba(74,10,138,0.4)}50%{box-shadow:0 3px 24px rgba(74,10,138,0.8)}}</style>
      <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:900">${s} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",o("match",{matchMode:"friend",friendId:d,friendName:s})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await T.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),a.innerHTML="",t("Invitation refusée","info")})}async function zi(e,t){const o=document.getElementById("friend-requests-banner");if(!o)return;const{data:a,error:p}=await T.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(a!=null&&a.length)){o.innerHTML="";return}const s=a.length,d=a.slice(0,2).map(u=>{var i;return((i=u.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";o.innerHTML=`
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
          ${s} demande${s>1?"s":""} d'ami${s>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${d}${l}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Li(e,t,()=>zi(e,t))})}function ln(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2000",o.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(p=>`
            <div class="action-card" data-mode="${p.mode}" style="cursor:pointer">
              <div class="icon">${p.icon}</div>
              <div class="label">${p.label}</div>
              <div class="sub">${p.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(o);const a=()=>o.remove();document.getElementById("diff-cancel").addEventListener("click",a),o.addEventListener("click",p=>{p.target===o&&a()}),o.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{a(),e("match",{matchMode:p.dataset.mode})})})}const Be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function be(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const hi=["ATT","MIL","DEF","GK"];function Mi(e){let t=0;const o=e.length;for(let a=0;a<o;a++)for(let p=a+1;p<o;p++){const s=e[a],d=e[p];if(!s||!d)continue;const l=s._col!=null&&d._col!=null&&s._col===d._col,u=s._col!=null&&d._col!=null&&Math.abs(s._col-d._col)===1,i=hi.indexOf(s._line||s.job),r=hi.indexOf(d._line||d.job),f=Math.abs(i-r)===1;if(!((s._line||s.job)===(d._line||d.job)&&u||l&&f))continue;const k=s.country_code&&d.country_code&&s.country_code===d.country_code,n=s.club_id&&d.club_id&&s.club_id===d.club_id;k&&n?t+=2:(k||n)&&(t+=1)}return t}function Nt(e,t={}){const o=e.reduce((s,d)=>{const l=d._line||d.job;return s+(Number(l==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),a=Mi(e);let p=o+a;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:o,links:a,total:Math.max(0,p)}}function Rt(e,t={}){const o=e.reduce((s,d)=>{const l=d._line||d.job;let u=0;return l==="GK"?u=Number(d.note_g)||0:l==="MIL"?u=Number(d.note_m)||0:u=Number(d.note_d)||0,s+u+(d.boost||0)},0),a=Mi(e);let p=o+a;return t.stolenNote&&(p-=t.stolenNote),{base:o,links:a,total:Math.max(0,p)}}function Pt(e,t,o={}){return o.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Si(e,t,o="easy"){const a=e.filter(d=>!d.used);if(!a.length)return[];const p=[...a].sort((d,l)=>{const u=t==="attack"?be(d,"ATT"):d._line==="GK"?be(d,"GK"):be(d,"DEF");return(t==="attack"?be(l,"ATT"):l._line==="GK"?be(l,"GK"):be(l,"DEF"))-u});let s=o==="easy"?1+Math.floor(Math.random()*2):o==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(s,p.length,3))}function cn(e,t){const o={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(o[e]||o.vs_ai_easy)[t]||0}const Ci={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ct=["GK","DEF","MIL","ATT"],pn=["Tous","GK","DEF","MIL","ATT"],un={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},si={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ji(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Mt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,m;const o=e.player;if(!o)return"";const a=o.job||"ATT",p=At[a],s=Ci[o.rarity]||"#ccc",d=Mt(o,a),l=o.job2?Mt(o,o.job2):null,u=o.job2?At[o.job2]:null,i=ji(o),r=si[o.country_code]||o.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${e.id}">
    ${t}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${p}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${p}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${l!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${u}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${i?`<img src="${i}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(f=o.clubs)!=null&&f.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=o.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function bi(e){const t=e.job||"ATT",o=Mt(e,t),a=si[e.country_code]||e.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${o}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${a}</div>
      </div>
    </div>
  </div>`}async function fn(e,t){const{state:o,navigate:a,toast:p,openModal:s,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:u}=await T.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(R=>R.card_type==="player"&&R.player),r=(l||[]).filter(R=>R.card_type==="game_changer"),f=(l||[]).filter(R=>R.card_type==="formation"),{data:m}=await T.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(m||[]).forEach(R=>{x[R.name]=R});const k=Object.keys(oi),n=Object.keys(Be),E={};i.forEach(R=>{const N=R.player.id;E[N]=(E[N]||0)+1}),new Set(Object.keys(E).map(R=>String(R)));const z=new Set(f.map(R=>R.formation)),M=new Set(r.map(R=>R.gc_type));let j="player",O="Tous",F="",S=!1;function C(){return[...i].sort((R,N)=>{const W=Ct.indexOf(R.player.job),P=Ct.indexOf(N.player.job);return W!==P?W-P:(R.player.surname_encoded||"").localeCompare(N.player.surname_encoded||"")})}function Z(){return[...u||[]].sort((R,N)=>{const W=Ct.indexOf(R.job),P=Ct.indexOf(N.job);return W!==P?W-P:(R.surname_encoded||"").localeCompare(N.surname_encoded||"")})}function ae(){return C().filter(R=>{const N=R.player,W=O==="Tous"||N.job===O,P=!F||`${N.firstname} ${N.surname_encoded}`.toLowerCase().includes(F);return W&&P})}function se(){return Z().filter(R=>{const N=O==="Tous"||R.job===O,W=!F||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(F);return N&&W})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="player"?"var(--green)":"transparent"};
        color:${j==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="formation"?"var(--green)":"transparent"};
        color:${j==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="gc"?"var(--green)":"transparent"};
        color:${j==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function B(){const R=document.getElementById("col-filters");R&&(j==="player"?(R.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${F}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${pn.map(N=>`
            <button class="filter-btn" data-job="${N}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${N===O?"var(--green)":"var(--gray-200)"};
                background:${N===O?"var(--green)":"#fff"};
                color:${N===O?"#fff":"var(--gray-600)"}">
              ${N}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${S?"var(--yellow)":"var(--gray-200)"};
              background:${S?"var(--yellow)":"#fff"};
              color:${S?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${S?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",N=>{F=N.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(N=>{N.addEventListener("click",()=>{O=N.dataset.job,B(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{S=!S,B(),Y()})):(R.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${S?"var(--yellow)":"var(--gray-200)"};
              background:${S?"var(--yellow)":"#fff"};
              color:${S?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${S?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{S=!S,B(),Y()})))}function Y(){const R=document.getElementById("col-grid");R&&(j==="player"?ge(R):j==="formation"?me(R):xe(R))}function te(R,N,W,P,X){X=X||"#7a28b8";const ue=document.getElementById("col-grid"),ie=document.getElementById("col-big");if(!ue||!ie)return;var Ae=0;function ke(){ie.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+N(R[Ae])+"</div>";var ve=ie.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ve&&ve.addEventListener("click",function(){P(R[Ae])}),requestAnimationFrame(function(){var _e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!_e||!ie)){var we=ie.clientHeight-8,Le=ie.clientWidth-24,Ge=_e.offsetHeight,Se=_e.offsetWidth;if(Ge>0&&Se>0&&we>40){var Ke=Math.min(we/Ge,Le/Se,1);_e.style.transform="scale("+Ke.toFixed(3)+")",_e.style.transformOrigin="top center"}}}),ue.innerHTML=R.map(function(_e,we){return'<div class="col-mini-item" data-idx="'+we+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(we===Ae?X:"transparent")+';transition:border-color .15s;overflow:hidden">'+W(_e,we===Ae)+"</div>"}).join(""),ue.querySelectorAll(".col-mini-item").forEach(function(_e){_e.addEventListener("click",function(){Ae=Number(_e.dataset.idx),ke(),_e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function D(R){var N=.54,W=Math.round(140*N),P=Math.round(310*N),X;if(!R||R._fake){var ue=R?R.player:null;if(!ue)return"";X=bi(ue)}else X=Vt(R,"");return'<div style="width:'+W+"px;height:"+P+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+N+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+X+"</div></div>"}function Q(R,N,W){N=N||100,W=W||140;var P=St[R]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ue=Math.max(3,Math.round(N*.06)),ie=Object.entries(P).map(function(ke){var ve=ke[0],_e=ke[1],we=ve.replace(/\d+$/,""),Le=X[we]||"#888",Ge=Math.round(_e.x*N),Se=Math.round(_e.y*W);return'<circle cx="'+Ge+'" cy="'+Se+'" r="'+ue+'" fill="'+Le+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ae=Math.max(1,Math.round(N/50));return'<svg viewBox="0 0 '+N+" "+W+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+N+'" height="'+W+'" fill="#1A6B3C"/><rect x="'+Math.round(N*.2)+'" y="'+Math.round(W*.02)+'" width="'+Math.round(N*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/><line x1="0" y1="'+Math.round(W*.5)+'" x2="'+N+'" y2="'+Math.round(W*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><ellipse cx="'+Math.round(N*.5)+'" cy="'+Math.round(W*.5)+'" rx="'+Math.round(N*.18)+'" ry="'+Math.round(W*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><rect x="'+Math.round(N*.2)+'" y="'+Math.round(W*.82)+'" width="'+Math.round(N*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/>'+ie+"</svg>"}function K(R,N,W){var P=W>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+W+"</div>":"",X=N?'data-form-id="'+N.id+'"':"",ue=R.length>7?14:R.length>5?16:19,ie=!!N;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ie?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ie?"":"filter:grayscale(1);opacity:0.5")+'">'+P+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ie?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ue+"px;font-weight:900;color:"+(ie?"#1A6B3C":"#aaa")+';line-height:1">'+R+'</div></div><div style="flex:1;overflow:hidden;background:'+(ie?"#1A6B3C":"#ccc")+'">'+Q(R,140,220)+"</div></div>"}function re(R,N){var W=.54,P=Math.round(140*W),X=Math.round(305*W),ue=Math.round(X*.22),ie=X-ue,Ae=R.length>7?5:7,ke=Q(R,P,ie),ve=N?"1.5px solid #2a7a40":"1px solid #ddd",_e=N?"":"filter:grayscale(1);opacity:0.45;",we=N?"#1A6B3C":"#bbb",Le="#fff";return'<div style="width:'+P+"px;height:"+X+"px;border-radius:6px;border:"+ve+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+_e+'"><div style="height:'+ue+"px;background:"+we+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ae+"px;font-weight:900;color:"+Le+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(P-4)+'px">'+R+'</span></div><div style="height:'+ie+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div>"}function ge(R){if(S){const N=se();if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const W=N.map(P=>i.find(X=>X.player.id===P.id)||{_fake:!0,player:P,id:"fake-"+P.id});te(W,P=>P._fake?bi(P.player):Vt(P,""),P=>P._fake?D({player:P.player,id:"x",_fake:!0}):D(P),P=>{P._fake||vi(P,i,E,t)},"#1A6B3C")}else{const N=ae();if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const W={},P=[];N.forEach(X=>{W[X.player.id]||(W[X.player.id]=!0,P.push(X))}),te(P,X=>{const ue=E[X.player.id]||1,ie=ue>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ue}</div>`:"",ke=i.filter(ve=>ve.player.id===X.player.id&&ve.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(X,ie+ke)},X=>D(X),X=>vi(X,i,E,t),"#1A6B3C")}}function me(R){const N=S?k:[...z];if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const W=N.map(P=>({formation:P,card:f.find(X=>X.formation===P)||null,owned:z.has(P)}));te(W,({formation:P,card:X,owned:ue})=>K(P,ue?X:null,ue?f.filter(ie=>ie.formation===P).length:0),({formation:P,owned:X})=>re(P,X),({card:P,owned:X})=>{X&&P&&mn(P,f,t,s)},"#1A6B3C")}function xe(R){const N=Object.keys(x),W=S?N.length?N:n:[...M];if(!W.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const P=W.map(X=>({type:X,gc:Be[X]||{icon:"⚡",desc:""},def:x[X]||null,owned:M.has(X),card:r.find(ue=>ue.gc_type===X)||null}));te(P,({type:X,gc:ue,def:ie,owned:Ae,card:ke})=>{const ve=Ae?r.filter(b=>b.gc_type===X).length:0,_e=ve>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ve}</div>`:"",we=(ie==null?void 0:ie.gc_type)==="ultra_game_changer",Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ge={purple:"#b06ce0",light_blue:"#00d4ef"},Se=Le[ie==null?void 0:ie.color]||Le.purple,Ke=Ge[ie==null?void 0:ie.color]||Ge.purple,c=(ie==null?void 0:ie.effect)||ue.desc||"",g=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return Ae&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ke};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ke}66;cursor:pointer">
          ${_e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${we?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${g?`<img src="${g}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ue.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${c.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ue.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:ue,def:ie,owned:Ae})=>Ae?(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54),_e=Math.round(ve*.65),we=Math.round(ve*.18),Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ge={purple:"#9b59b6",light_blue:"#00bcd4"},Se=Le[ie==null?void 0:ie.color]||Le.purple,Ke=Ge[ie==null?void 0:ie.color]||Ge.purple,c=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:${Se};border:1px solid ${Ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:${we}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ke-6}px">${X}</span></div><div style="height:${_e}px;display:flex;align-items:center;justify-content:center">${c?`<img src="${c}" style="max-width:${ke-8}px;max-height:${_e-4}px;object-fit:contain">`:`<span style="font-size:24px">${ue.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((ie==null?void 0:ie.effect)||ue.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54);return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ue.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${X}</span></div>`})(),({type:X,owned:ue,def:ie})=>{ue&&gn(X,ie,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(R=>{R.addEventListener("click",()=>{j=R.dataset.tab,O="Tous",F="",S=!1,e.querySelectorAll(".col-tab-btn").forEach(N=>{const W=N.dataset.tab===j;N.style.borderBottomColor=W?"var(--green)":"transparent",N.style.color=W?"var(--green)":"var(--gray-600)"}),B(),Y()})}),B(),Y()}function gn(e,t,o){const a=Be[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,u=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;o("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${u};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${p?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _t=1e3;function mn(e,t,o,a){var n,E,z;const{state:p,toast:s,closeModal:d,navigate:l,refreshProfile:u}=o,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const M=St[i]||{},j=oi[i]||[],O=290,F=360,S=20;function C(ae){const se=M[ae];return se?{x:se.x*O,y:se.y*F}:null}let Z=`<svg width="${O}" height="${F}" viewBox="0 0 ${O} ${F}" xmlns="http://www.w3.org/2000/svg">`;for(const[ae,se]of j){const B=C(ae),Y=C(se);!B||!Y||(Z+=`<line x1="${B.x}" y1="${B.y}" x2="${Y.x}" y2="${Y.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ae of Object.keys(M)){const se=C(ae);if(!se)continue;const B=ae.replace(/\d+/,""),Y=r[B]||"#555";Z+=`<circle cx="${se.x}" cy="${se.y}" r="${S}" fill="${Y}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,Z+=`<text x="${se.x}" y="${se.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>`}return Z+="</svg>",Z}const m=t.filter(M=>M.formation===i),x=m.length,k=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${f()}
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${_t.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${x-1} carte${x-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${x<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${k?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${_t}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(n=document.getElementById("direct-sell-form-btn"))==null||n.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${_t.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const M=m.find(O=>!O.is_for_sale)||m[0];if(!M){s("Aucune carte à vendre","error");return}const{error:j}=await T.from("cards").delete().eq("id",M.id);if(j){s(j.message,"error");return}await T.from("users").update({credits:(p.profile.credits||0)+_t}).eq("id",p.profile.id),await u(),s(`+${_t.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(E=document.getElementById("market-sell-form-btn"))==null||E.addEventListener("click",async()=>{const M=parseInt(document.getElementById("sell-price-form").value);if(!M||M<1){s("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:M}).eq("id",e.id),await T.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:M}),s("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(z=document.getElementById("cancel-sell-form-btn"))==null||z.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),d(),l("collection")})}async function vi(e,t,o,a){var se,B,Y,te,D,Q;const{state:p,toast:s,openModal:d,closeModal:l,navigate:u,refreshProfile:i}=a,r=e.player,f=t.filter(K=>K.player.id===r.id),m=f.length,x=un[r.rarity]||1e3,k=r.rarity!=="legende",n=ji(r),E=Mt(r,r.job),z=r.job2?Mt(r,r.job2):null,M=At[r.job]||"#1A6B3C",j=r.job2?At[r.job2]:null,O=Ci[r.rarity]||"#ccc",F=si[r.country_code]||r.country_code||"",S=f.map(K=>K.id);let C={};if(S.length){const{data:K}=await T.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",S).order("transferred_at",{ascending:!0});(K||[]).forEach(re=>{C[re.card_id]||(C[re.card_id]=[]),C[re.card_id].push(re)})}const Z=K=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${K.club_name} <span style="color:var(--gray-600)">(${K.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,ae=S.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${m>1?`(${m} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${f.map((K,re)=>{const ge=C[K.id]||[];return ge.length?`
            <div>
              ${m>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${re+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${ge.map(Z).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";d(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${O};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${M}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${M}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${E}</text>
            </svg>
            ${z!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${j}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${F}</div>
            ${(se=r.clubs)!=null&&se.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((B=r.clubs)==null?void 0:B.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${O}">${r.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${r.job}${r.job2?" / "+r.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([K,re])=>{const ge=At[K],me=Number(re)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${ge}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${me}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${K}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${ae}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${x.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${k&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Y=document.getElementById("close-detail"))==null||Y.addEventListener("click",l),(te=document.getElementById("direct-sell-btn"))==null||te.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${x.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const K=f.find(ge=>!ge.is_for_sale)||f[0];if(!K){s("Aucune carte à vendre","error");return}const{error:re}=await T.from("cards").delete().eq("id",K.id);if(re){s(re.message,"error");return}await T.from("users").update({credits:(p.profile.credits||0)+x}).eq("id",p.profile.id),await i(),s(`+${x.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),u("collection")}),(D=document.getElementById("market-sell-btn"))==null||D.addEventListener("click",async()=>{const K=parseInt(document.getElementById("sell-price").value);if(!K||K<1){s("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:K}).eq("id",e.id),await T.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:K}),s("Carte mise en vente sur le marché !","success"),l(),u("collection")}),(Q=document.getElementById("cancel-sell-btn"))==null||Q.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),u("collection")})}const Dt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ot={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ot(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Fi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Bi(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(o=e==null?void 0:e.clubs)!=null&&o.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function xn(e,t=44,o=58){var x;const a=e?Ot(e):null,p=e?Bi(e):null,s=Fi(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",l=ot[d]||"#555",u={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(o*.19),f=Math.round(o*.25),m=o-r-f;return e?`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${u};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(x=e==null?void 0:e.clubs)!=null&&x.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${o}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Xt(e,t){const{state:o,navigate:a,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("id,name,formation_card_id").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(s==null?void 0:s.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(s==null?void 0:s.length)>0?s.map(d=>`
          <div class="card-panel" data-open-deck="${d.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${d.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${d.id}" data-name="${d.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${d.id}" data-name="${d.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!d)return;const{data:l,error:u}=await T.from("decks").insert({owner_id:o.profile.id,name:d}).select().single();if(u){p(u.message,"error");return}p("Deck créé !","success"),wi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>wi(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",d.dataset.name);if(!l||l===d.dataset.name)return;const{error:u}=await T.from("decks").update({name:l}).eq("id",d.dataset.rename);if(u){p(u.message,"error");return}p("Deck renommé !","success"),Xt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await T.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:l}=await T.from("decks").delete().eq("id",d.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Xt(e,t)})})}async function wi(e,t,o){const{state:a,toast:p}=o;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("*").eq("id",e).single(),{data:d}=await T.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(d||[]).filter(x=>x.card_type==="player"&&x.player),u=(d||[]).filter(x=>x.card_type==="formation"),i=u.map(x=>x.formation).filter(Boolean),{data:r}=await T.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:u,availableFormations:i};(r||[]).forEach(x=>{x.is_starter?m.slots[x.position]=x.card_id:m.subs.includes(x.card_id)||m.subs.push(x.card_id)}),lt(t,m,o)}function lt(e,t,o){var u;const{navigate:a}=o;Dt[t.formation];const p=$i(t.formation),s=p.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Dt),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${s}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${d.map(i=>`<option value="${i}" ${i===t.formation?"selected":""}>${i}</option>`).join("")}
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
        ${l.map(i=>{const r=i.player;return`<div style="position:relative;flex-shrink:0">
            ${xn(r,44,58)}
            <button data-remove-sub="${i.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${s<11?"disabled":""}>
        ${s<11?`Placez encore ${11-s} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,yn(e,t,p,o),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=$i(t.formation),f={};r.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,lt(e,t,o)}),document.getElementById("save-deck").addEventListener("click",()=>vn(t,o)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),lt(e,t,o)})}),(u=document.getElementById("add-sub-btn"))==null||u.addEventListener("click",()=>{bn(t,e,o)})}function yn(e,t,o,a){const p=e.querySelector("#deck-field");if(!p)return;const s=St[t.formation]||{},d=Ai(t.formation)||[],l={};for(const z of o){const M=t.slots[z],j=M?t.playerCards.find(O=>O.id===M):null;l[z]=j?j.player:null}const u=300,i=300,r=48,f=64,m=13,x=16,k=38;function n(z){const M=s[z];return M?{x:M.x*u,y:M.y*i}:null}let E="";for(const[z,M]of d){const j=n(z),O=n(M);if(!j||!O)continue;const F=l[z]?{...l[z],club_id:l[z].club_id,country_code:l[z].country_code,rarity:l[z].rarity}:null,S=l[M]?{...l[M],club_id:l[M].club_id,country_code:l[M].country_code,rarity:l[M].rarity}:null,C=Qe(F,S);C==="#ff3333"||C==="#cc2222"?E+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${C}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(E+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${C}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,E+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${C}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const z of o){const M=n(z);if(!M)continue;const j=l[z],O=z.replace(/\d+/,""),F=ot[O]||"#555",S=(M.x-r/2).toFixed(1),C=(M.y-f/2).toFixed(1),Z={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[j==null?void 0:j.rarity]||"#aaa";if(j){const ae=Ot(j),se=Bi(j),B=Fi(j.country_code),Y=Number(O==="GK"?j.note_g:O==="DEF"?j.note_d:O==="MIL"?j.note_m:j.note_a)||0,te=f-m-x;E+=`<defs><clipPath id="dcp-${z}"><rect x="${S}" y="${(M.y-f/2+m).toFixed(1)}" width="${r}" height="${te}"/></clipPath></defs>`,E+=`<rect x="${S}" y="${C}" width="${r}" height="${f}" rx="5" fill="${F}"/>`,ae&&(E+=`<image href="${ae}" x="${S}" y="${(M.y-f/2+m).toFixed(1)}" width="${r}" height="${te}" clip-path="url(#dcp-${z})" preserveAspectRatio="xMidYMin slice"/>`),E+=`<rect x="${S}" y="${C}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,E+=`<text x="${M.x.toFixed(1)}" y="${(M.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.surname_encoded||"").slice(0,9)}</text>`;const D=(M.y+f/2-x).toFixed(1);E+=`<rect x="${S}" y="${D}" width="${r}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,B&&(E+=`<image href="${B}" x="${(M.x-21).toFixed(1)}" y="${(M.y+f/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),E+=`<text x="${M.x.toFixed(1)}" y="${(M.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,se&&(E+=`<image href="${se}" x="${(M.x+r/2-14).toFixed(1)}" y="${(M.y+f/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),E+=`<rect x="${S}" y="${C}" width="${r}" height="${f}" rx="5" fill="none" stroke="${Z}" stroke-width="2"/>`}else E+=`<rect x="${S}" y="${C}" width="${r}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,E+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,E+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${O}</text>`;E+=`<rect x="${S}" y="${C}" width="${r}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${z}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-k} ${-k} ${u+k*2} ${i+k*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${E}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>hn(z.dataset.pos,t,e,a))})}function hn(e,t,o,a){var m,x,k;const{openModal:p,closeModal:s}=a,d=e.replace(/\d+/,""),l=t.slots[e],u=l?t.playerCards.find(n=>n.id===l):null;(m=u==null?void 0:u.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([n,E])=>{var M;if(n===e||!E)return;const z=t.playerCards.find(j=>j.id===E);(M=z==null?void 0:z.player)!=null&&M.id&&i.add(z.player.id)}),t.subs.forEach(n=>{var z;const E=t.playerCards.find(M=>M.id===n);(z=E==null?void 0:E.player)!=null&&z.id&&i.add(E.player.id)});const r=new Set,f=t.playerCards.filter(n=>{const E=n.player;return!(E.job===d||E.job2===d)||i.has(E.id)||r.has(E.id)?!1:(r.add(E.id),!0)});f.sort((n,E)=>{const z=d==="GK"?n.player.note_g:d==="DEF"?n.player.note_d:d==="MIL"?n.player.note_m:n.player.note_a;return(d==="GK"?E.player.note_g:d==="DEF"?E.player.note_d:d==="MIL"?E.player.note_m:E.player.note_a)-z}),p(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(n=>{var O,F;const E=n.player,z=d==="GK"?E.note_g:d==="DEF"?E.note_d:d==="MIL"?E.note_m:E.note_a,M=Ot(E),j={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[E.rarity];return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ot[d]}">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ot[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${E.firstname} ${E.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${E.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${E.country_code}">
              ${(O=E.clubs)!=null&&O.logo_url?`<img src="${E.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((F=E.clubs)==null?void 0:F.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${E.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ot[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${j};flex-shrink:0">
            ${z}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",s),(k=document.getElementById("remove-player"))==null||k.addEventListener("click",()=>{delete t.slots[e],s(),lt(o,t,a)}),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{t.slots[e]=n.dataset.cardId,s(),lt(o,t,a)})})}function bn(e,t,o){var u;const{openModal:a,closeModal:p}=o,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&s.add(r.player.id)}),e.subs.forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&s.add(r.player.id)});const d=new Set,l=e.playerCards.filter(i=>{var r,f,m;return s.has((r=i.player)==null?void 0:r.id)||d.has((f=i.player)==null?void 0:f.id)?!1:(d.add((m=i.player)==null?void 0:m.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var x;const r=i.player,f=Ot(r),m=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ot[r.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((x=r.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ot[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(u=document.getElementById("close-sub-selector"))==null||u.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),lt(t,e,o)})})}async function vn(e,t){const{state:o,toast:a,navigate:p}=t,s=e.formationCards.find(u=>u.formation===e.formation),d=(s==null?void 0:s.id)||e.formationCardId;await T.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await T.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([u,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:u,is_starter:!0,slot_order:r})}),e.subs.forEach((u,i)=>{l.push({deck_id:e.deckId,card_id:u,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:u}=await T.from("deck_cards").insert(l);if(u){a(u.message,"error");return}}a("Deck enregistré ✅","success"),p("decks")}function $i(e){const t=Dt[e]||Dt["4-4-2"],o=["GK1"];for(let a=1;a<=t.DEF;a++)o.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)o.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)o.push(`ATT${a}`);return o}async function Di(){const{data:e}=await T.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await T.from("booster_drop_rates").select("*").in("booster_id",e.map(o=>o.id)).order("sort_order");return e.map(o=>({...o,rates:(t||[]).filter(a=>a.booster_id===o.id)}))}function wn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,p)=>a+Number(p.percentage),0);let o=Math.random()*t;for(const a of e)if(o-=Number(a.percentage),o<=0)return a;return e[e.length-1]}const qi=()=>Object.keys(St),$n=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Jt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function _n(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}const _i={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},kn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},En={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ki(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Tn(e){var r,f;const t=e.player;if(!t)return"";const o=t.job||"ATT",a=_i[o],p=kn[t.rarity]||"#ccc",s=ki(t,o),d=t.job2?ki(t,t.job2):null,l=t.job2?_i[t.job2]:null,u=_n(t),i=En[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${p};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${a}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${a}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Gi(e){var p;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const o=((p=Object.entries(t).sort((s,d)=>d[1]-s[1])[0])==null?void 0:p[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:o,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function An(e,{state:t,navigate:o,toast:a}){var d;const p=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Di()).map(Gi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=$n.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${p.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(l=>{const u=l.cost===0||p>=l.cost;return`<div class="booster-card ${u?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
            ${u?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const u=s.find(i=>i.id===l.dataset.booster);if(u){l.style.opacity="0.5",l.style.pointerEvents="none";try{await In(u,{state:t,toast:a,navigate:o,container:e})}catch(i){a(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation();const i=s.find(r=>r.id===l.dataset.boosterId);Sn(i)})})}async function In(e,{state:t,toast:o,navigate:a,container:p}){var r;if(e.cost>0&&t.profile.credits<e.cost){o("Crédits insuffisants","error");return}if(e.isPub)try{await Fn()}catch(f){o(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await T.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((s||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((s||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let u=[];if((r=e.rates)!=null&&r.length)u=await Qt(t.profile,e);else{const f=e.type||"player";f==="player"?u=await Ni(t.profile,e.cardCount,e.cost):f==="game_changer"?u=await Ri(t.profile,e.cardCount,e.cost):f==="formation"?u=await Pi(t.profile,e.cost):u=await Qt(t.profile,e)}u.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=d.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await T.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Oi(u,e,a)}function Ln(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function zn(e,t){let o;switch(t){case"legende":o=e.filter(a=>a.rarity==="legende"),o.length||(o=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),o.length||(o=e.filter(a=>Ze(a)>=6));break;case"special":o=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),o.length||(o=e.filter(a=>Ze(a)>=6));break;case"normal_high":o=e.filter(a=>a.rarity==="normal"&&Ze(a)>=6),o.length||(o=e.filter(a=>Ze(a)>=6));break;default:o=e.filter(a=>a.rarity==="normal"&&Ze(a)>=1&&Ze(a)<=5),o.length||(o=e.filter(a=>a.rarity==="normal"));break}return o.length||(o=e),o[Math.floor(Math.random()*o.length)]}async function Qt(e,t){if(t.cost>0){const{error:l}=await T.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:o}=await T.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((o||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((o||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),s=new Set,d=[];for(let l=0;l<(t.cardCount||5);l++){const u=wn(t.rates);if(u){if(u.card_type==="player"){const i=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,r=u.rarity?i(u.rarity):null;let f=T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(f=f.eq("rarity",r));const{data:m}=await f;let x=m||[];if((u.note_min||u.note_max)&&(x=x.filter(M=>{const j=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!u.note_min||j>=u.note_min)&&(!u.note_max||j<=u.note_max)})),x.length||(u.note_min||u.note_max?(x=m||[],console.warn("[Booster] Aucun joueur avec note",u.note_min,"-",u.note_max,"— fallback rareté uniquement")):x=m||[]),!x.length)continue;let k=x.filter(M=>!s.has(M.id));k.length||(k=x);const n=k[Math.floor(Math.random()*k.length)];s.add(n.id);const E=a.has(n.id),{data:z}=await T.from("cards").insert({owner_id:e.id,player_id:n.id,card_type:"player"}).select().single();z&&(d.push({...z,player:n,isDuplicate:E}),T.rpc("record_transfer",{p_card_id:z.id,p_player_id:n.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(u.card_type==="game_changer"){const{data:i}=await T.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=r[Math.floor(Math.random()*r.length)].name,{data:x}=await T.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();x&&d.push(x)}else if(u.card_type==="formation"){const i=qi(),r=i[Math.floor(Math.random()*i.length)],f=p.has(r),{data:m}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();m!=null&&m[0]&&d.push({...m[0],isDuplicate:f})}}}return d}async function Ni(e,t,o){if(o>0){const{error:i}=await T.from("users").update({credits:e.credits-o}).eq("id",e.id);if(i)throw i}const{data:a}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=a.filter(i=>i.job==="GK"),s=a.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&d?p:i===0?s:a,f=Ln(),m=zn(r,f);m&&l.push(m)}d&&await T.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:u}=await T.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(u||[]).forEach((i,r)=>{T.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...u[r],player:i}))}async function Ri(e,t,o){const{error:a}=await T.from("users").update({credits:e.credits-o}).eq("id",e.id);if(a)throw a;const{data:p}=await T.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=p!=null&&p.length?p:Object.keys(Jt).map(r=>({name:r,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:u}=await T.from("cards").insert(d).select();return u&&console.error("[Booster GC] Erreur insert:",u.message,u),(l||[]).map(r=>{const f=p==null?void 0:p.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:f||null}})}async function Pi(e,t){const{error:o}=await T.from("users").update({credits:e.credits-t}).eq("id",e.id);if(o)throw o;const{data:a}=await T.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((a||[]).map(r=>r.formation)),s=qi(),d=s[Math.floor(Math.random()*s.length)],l=p.has(d),{data:u,error:i}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(u||[]).map(r=>({...r,isDuplicate:l}))}function Oi(e,t,o,a=null){var Y,te;if(!e||e.length===0){const D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",D.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(D),(Y=D.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>D.remove());return}e=[...e].sort((D,Q)=>{const K=D.player?Ze(D.player):-1;return(Q.player?Ze(Q.player):-1)-K});const p=document.createElement("div");p.id="booster-anim-overlay",p.innerHTML=`
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
  `,document.body.appendChild(p);let s=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let u=!1;const i=D=>D.touches&&D.touches[0]?D.touches[0].clientX:D.clientX;function r(D){s||(u=!0,l.style.opacity="1",f(D))}function f(D){if(!u||s)return;const Q=d.getBoundingClientRect(),K=i(D)-Q.left,re=Math.max(0,Math.min(1,K/Q.width));l.style.width=re*Q.width+"px",re>=.82&&x()}function m(){s||(u=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function x(){var Q;if(s)return;s=!0,u=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const D=document.getElementById("cut-hint");D&&(D.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}d.addEventListener("pointerdown",r),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),d.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let k=0,n=!1;const E=new Set;function z(D){k=D,document.getElementById("reveal-phase").style.display="flex",M(),j(D,0),Z()}function M(){const D=document.getElementById("card-dots");D&&(D.innerHTML=e.map((Q,K)=>`<div class="card-dot" data-i="${K}" style="width:8px;height:8px;border-radius:50%;background:${K===k?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),D.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>F(parseInt(Q.dataset.i)))))}function j(D,Q){var W;const K=e[D],re=document.getElementById("card-counter"),ge=document.getElementById("card-track");re&&(re.textContent=`Carte ${D+1} / ${e.length}`);const me=K.card_type==="player"&&((W=K.player)==null?void 0:W.rarity)==="legende",xe=!E.has(D);E.add(D);let R=0;if(K.card_type==="player"&&K.player){const P=K.player,X=P.job||"ATT";R=Number(X==="GK"?P.note_g:X==="DEF"?P.note_d:X==="MIL"?P.note_m:P.note_a)||0}const N=P=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${me?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Mn(K)}</div>
          ${K.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const X=document.getElementById("current-card-wrap");Q!==0?(X.style.transition="none",X.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{X.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",X.style.transform="translateX(0)"})):X.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),P||me?se():B(),M()};xe&&R>6&&K.card_type==="player"&&K.player?O(K,()=>N(!0)):N(!1)}function O(D,Q){var N;n=!0;const K=D.player,re=`https://flagsapi.com/${K.country_code}/flat/64.png`,ge=(N=K.clubs)==null?void 0:N.logo_url,me=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!me||!xe){n=!1,Q();return}me.style.display="flex";const R=()=>{const W=xe.firstElementChild;W&&(W.classList.remove("wo-in"),W.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(R,2e3),setTimeout(()=>{var W;xe.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((W=K.clubs)==null?void 0:W.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(R,4450),setTimeout(()=>{me.style.display="none",xe.innerHTML="",n=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},4900)}function F(D){if(n||D<0||D>=e.length||D===k)return;const Q=D>k?1:-1;k=D,j(D,Q)}function S(){F(k+1)}function C(){F(k-1)}function Z(){const D=document.getElementById("card-viewport");if(!D||D._swipeBound)return;D._swipeBound=!0;let Q=0,K=0,re=0,ge=!1;const me=P=>P.touches?P.touches[0].clientX:P.clientX,xe=P=>P.touches?P.touches[0].clientY:P.clientY,R=P=>{ge=!0,Q=me(P),K=xe(P),re=0},N=P=>{if(!ge)return;re=me(P)-Q;const X=xe(P)-K;if(Math.abs(re)<Math.abs(X))return;const ue=document.getElementById("current-card-wrap");ue&&(ue.style.transition="none",ue.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},W=()=>{if(!ge)return;ge=!1;const P=document.getElementById("current-card-wrap"),X=55;re<=-X&&k<e.length-1?S():re>=X&&k>0?C():P&&(P.style.transition="transform .2s ease",P.style.transform="translateX(0)")};D.addEventListener("pointerdown",R),D.addEventListener("pointermove",N),D.addEventListener("pointerup",W),D.addEventListener("pointercancel",W),D.addEventListener("touchstart",R,{passive:!0}),D.addEventListener("touchmove",N,{passive:!0}),D.addEventListener("touchend",W),D.addEventListener("click",P=>{if(Math.abs(re)>8)return;const X=D.getBoundingClientRect();P.clientX-X.left>X.width/2?S():C()})}let ae=null;function se(){const D=document.getElementById("fireworks-canvas");if(!D)return;D.width=window.innerWidth,D.height=window.innerHeight;const Q=D.getContext("2d"),K=[];function re(){const me=Math.random()*D.width,xe=Math.random()*D.height*.6,R=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],N=R[Math.floor(Math.random()*R.length)];for(let W=0;W<60;W++){const P=Math.PI*2/60*W,X=2+Math.random()*5;K.push({x:me,y:xe,vx:Math.cos(P)*X,vy:Math.sin(P)*X,alpha:1,color:N,size:2+Math.random()*3})}}re(),ae=setInterval(re,600);function ge(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,D.width,D.height);for(let me=K.length-1;me>=0;me--){const xe=K[me];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){K.splice(me,1);continue}Q.globalAlpha=xe.alpha,Q.fillStyle=xe.color,Q.beginPath(),Q.arc(xe.x,xe.y,xe.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(ae!==null||K.length>0)&&requestAnimationFrame(ge)}}ge()}function B(){ae!==null&&(clearInterval(ae),ae=null);const D=document.getElementById("fireworks-canvas");D&&D.getContext("2d").clearRect(0,0,D.width,D.height)}if(a){const D=document.getElementById("reveal-phase"),Q=D==null?void 0:D.querySelector('div[style*="display:flex"][style*="gap:10px"]');Q&&(Q.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(te=document.getElementById("reveal-next"))==null||te.addEventListener("click",()=>{B(),p.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{B(),p.remove(),o("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{B(),p.remove(),o("boosters")})}function Mn(e){var t,o;if(e.card_type==="player"&&e.player)return Tn(e);if(e.card_type==="game_changer"){const a=e._gcDef,p=(a==null?void 0:a.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[a==null?void 0:a.color]||s.purple,u=d[a==null?void 0:a.color]||d.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=Jt[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,m=((o=Jt[e.gc_type])==null?void 0:o.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${u};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${u}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${p?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Sn(e){var t,o;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(d=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[d.card_type]||d.card_type}</span>
            ${d.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${p[d.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${d.rarity}</span>`:""}
            ${d.note_min||d.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${d.note_min||""}–${d.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(d.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),(o=document.getElementById("odds-close"))==null||o.addEventListener("click",()=>a.remove());return}Cn()}function Cn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const jn="simulation",Hi="VOTRE_ZONE_ID";function Fn(){switch(jn){case"propellerads":return Bn();case"adsense":return Dn();default:return di()}}function di(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let o=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{o--;const p=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");p&&(p.textContent=o),s&&(s.textContent=o>0?`Passer (${o})`:"✓ Continuer"),o<=0&&(clearInterval(a),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Bn(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(di());window.propeller.push({zone_id:Hi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Dn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(di());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Hi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(o){t(o)}})}async function qn(e,{state:t,navigate:o,toast:a,refreshProfile:p}){var m,x;const{data:s}=await T.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let d=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await T.from("users").update({onboarding_done:!0}).eq("id",t.user.id),o("home");return}let l=null;try{const n=(await Di()).find(E=>(E.name||"").toLowerCase().includes("new player"));n&&(l=Gi(n))}catch(k){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',k)}const u=d.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await T.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function f(){var M;if(i>=u||!d.length){await T.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),o("home");return}const k=d[0],{data:n}=await T.from("users").select("*").eq("id",t.user.id).single();n&&(t.profile=n);let E=[];try{if(k.type==="formation")E=await Pi(t.profile,0);else if(k.type==="game_changer")E=await Ri(t.profile,k.count||3,0);else if(l&&((M=l.rates)!=null&&M.length)){const j={...l,cost:0,cardCount:k.count||l.cardCount||5};E=await Qt(t.profile,j),k.guaranteeGK&&!t.profile.first_booster_opened&&(E.some(F=>F.player&&F.player.job==="GK")||await Gn(t.profile,E),await T.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else E=await Ni(t.profile,k.count||5,0)}catch(j){a(j.message||"Erreur ouverture booster","error");return}d.shift(),i++,await r();const z=k.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:k.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${u})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Oi(E,z,o,()=>{f()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>f())}async function Gn(e,t){try{const{data:o}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(o!=null&&o.length))return;const a=o[Math.floor(Math.random()*o.length)],p=t.findIndex(d=>d.player);if(p===-1)return;const s=t[p];await T.from("cards").update({player_id:a.id}).eq("id",s.id),t[p]={...s,player_id:a.id,player:a}}catch(o){console.warn("[Onboarding] ensureGK échec",o)}}const ct={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},pt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,o,a,p){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${o}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",p)}function Ie(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Zt(e,t){var a,p;const o=e.player;return{cardId:e.id,position:t||null,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((a=o.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((p=o.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function it(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function li(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ut(e,t){const o=ct[t]||ct["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),u=it(l.length);l.forEach((i,r)=>{i._col=u[r]}),a[d]=l}return a}const s=[...e];for(const d of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<o[d];i++){let r=s.findIndex(f=>f.job===d);if(r===-1&&(r=s.findIndex(f=>f.job2===d)),r===-1&&(r=0),s[r]){const f={...s[r],_line:d};l.push(f),s.splice(r,1)}}const u=it(l.length);l.forEach((i,r)=>{i._col=u[r]}),a[d]=l}return a}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ne(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,o){const p=new Set,s=t.filter(r=>{const f=r.gc_type||r.id;return p.has(f)?!1:(p.add(f),!0)});let d=[];function l(r,f){const m=r._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},k={purple:"#9b59b6",light_blue:"#00bcd4"},n=x[m==null?void 0:m.color]||x.purple,E=k[m==null?void 0:m.color]||k.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":E};background:${n};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/manager-wars/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const u=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",o(r)};function i(){var f,m,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=d.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${d.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${s.map(k=>{const n=d.find(E=>E.gc_type===k.gc_type);return l(k,!!n)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${r?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${r?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${r?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${r?"pointer":"default"};box-shadow:${r?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${d.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${d.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${d.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${d.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(k=>{k.addEventListener("click",()=>{const n=k.dataset.id,E=s.find(M=>M.id===n);if(!E)return;const z=d.findIndex(M=>M.gc_type===E.gc_type);z>-1?d.splice(z,1):d.length<3&&d.push(E),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{r&&u(d)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>u([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}function Nn(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},o=t.matchMode||"vs_ai_easy";return o==="friend"?`Match vs ${t.friendName||"Ami"}`:o==="random"?"Match vs Random":`Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}`}async function Rn(e,t,o){const{state:a,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const d=s.map(r=>r.id),{data:l}=await T.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let u=0;function i(){var M,j,O,F,S;const r=s[u],f=(l||[]).filter(C=>C.deck_id===r.id),m=f.filter(C=>{var Z;return C.is_starter&&((Z=C.card)==null?void 0:Z.player)}).map(C=>Zt(C.card,C.position)),x=f.find(C=>{var Z;return((Z=C.card)==null?void 0:Z.card_type)==="formation"}),k=r.formation||((M=x==null?void 0:x.card)==null?void 0:M.formation)||"4-4-2",n=m.length>=11?ut(m,k):null,E=m.length>=11;We(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Nn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${u===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${u===0?"0.1":"0.3"});color:${u===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${u===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${k} · ${m.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${u===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${u===s.length-1?"0.1":"0.3"});color:${u===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${u===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${n?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${st(n,k,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((C,Z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Z===u?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${E?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${E?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${E?"pointer":"default"}">
          ${E?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Z=e.querySelector(".deck-preview-wrap svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(j=document.getElementById("prev-deck"))==null||j.addEventListener("click",()=>{u>0&&(u--,i())}),(O=document.getElementById("next-deck"))==null||O.addEventListener("click",()=>{u<s.length-1&&(u++,i())}),(F=document.getElementById("validate-deck"))==null||F.addEventListener("click",()=>{if(!E)return;const C=t.state.params||{};t.navigate("match",{...C,matchMode:C.matchMode||o,deckId:r.id})}),(S=document.getElementById("cancel-deck-select"))==null||S.addEventListener("click",()=>{Ne(e),p("home")});const z=document.getElementById("deck-swipe-zone");if(z){let C=0,Z=0;z.addEventListener("touchstart",ae=>{C=ae.touches[0].clientX,Z=ae.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",ae=>{const se=ae.changedTouches[0].clientX-C,B=ae.changedTouches[0].clientY-Z;Math.abs(se)<40||Math.abs(se)<Math.abs(B)||(se<0&&u<s.length-1?(u++,i()):se>0&&u>0&&(u--,i()))},{passive:!0})}}i()}function Ui(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ue(e,t=44,o=58){if(!e)return`<div style="width:${t}px;height:${o}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ie(e),p=Ui(e),s=e._line||e.job||"MIL",d=pt[s]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",u=e.note!==void 0?Number(e.note)||0:(Number(be(e,s))||0)+(e.boost||0),i=Ki(e==null?void 0:e.country_code),r=Math.round(o*.19),f=Math.round(o*.25),m=o-Math.round(o*.19)-Math.round(o*.25),x=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ei(e==null?void 0:e.country_code)?`<img src="${ei(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":u}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,o){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((s,d)=>{if(p+=Ue(s,40,52),d<a.length-1){const l=Qe(s,a[d+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),o!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${o}</div>`),p+="</div>",p}function ei(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ki(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function at(e,t,o,a,p=310,s=310,d=[]){var j;const l=St[t]||{},u=Ai(t)||oi[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const O of r)(e[O]||[]).forEach((S,C)=>{i[`${O}${C+1}`]=S});function f(O){const F=l[O];return F?{x:F.x*p,y:F.y*s}:null}let m="";for(const[O,F]of u){const S=f(O),C=f(F);if(!S||!C)continue;const Z=i[O],ae=i[F],se=Qe(Z,ae);se==="#00ff88"||se==="#FFD700"?(m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${se}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${se}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${se}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,k=64,n=13,E=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[O,F]of Object.entries(i)){const S=f(O);if(!S||!F)continue;const C=O.replace(/[0-9]/g,""),Z=pt[C]||"#555",ae=d.includes(F.cardId),se=o==="attack"&&(["MIL","ATT"].includes(C)||ae)&&!F.used||o==="defense"&&["GK","DEF","MIL"].includes(C)&&!F.used,B=a.includes(F.cardId);let Y;o==="attack"?Y=ae?Math.max(1,Number(F.note_a)||0):C==="MIL"?Number(F.note_m)||0:Number(F.note_a)||0:o==="defense"?Y=C==="GK"?Number(F.note_g)||0:C==="MIL"?Number(F.note_m)||0:Number(F.note_d)||0:Y=Number(C==="GK"?F.note_g:C==="DEF"?F.note_d:C==="MIL"?F.note_m:F.note_a)||0,Y=Y+(F.boost||0);const te=(S.x-x/2).toFixed(1),D=(S.y-k/2).toFixed(1),Q=z[F==null?void 0:F.rarity]||z.normal;if(F.used){const N=typeof import.meta<"u"&&"/manager-wars/"||"/",P=`${typeof window<"u"&&((j=window.location)==null?void 0:j.origin)||""}${N}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${te}" y="${D}" width="${x}" height="${k}" rx="5" fill="#161616"/>`,m+=`<image href="${P}" xlink:href="${P}" x="${te}" y="${D}" width="${x}" height="${k}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${te}" y="${D}" width="${x}" height="${k}" rx="5" fill="none" stroke="${Q}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${te}" y="${D}" width="${x}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${F.cardId}" data-role="${C}" style="cursor:pointer"/>`;continue}const K=B?.45:1,re=B?"#FFD700":Q,ge=B?3:(F==null?void 0:F.rarity)==="legende"||(F==null?void 0:F.rarity)==="légende"||(F==null?void 0:F.rarity)==="pepite"||(F==null?void 0:F.rarity)==="pépite"?2.5:2,me=k-n-E;m+=`<defs><clipPath id="cp-${O}"><rect x="${te}" y="${(S.y-k/2+n).toFixed(1)}" width="${x}" height="${me}"/></clipPath></defs>`,m+=`<rect x="${te}" y="${D}" width="${x}" height="${k}" rx="5" fill="${Z}" opacity="${K}"/>`;const xe=Ie(F);xe&&(m+=`<image href="${xe}" xlink:href="${xe}" x="${te}" y="${(S.y-k/2+n).toFixed(1)}" width="${x}" height="${me}" clip-path="url(#cp-${O})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${te}" y="${D}" width="${x}" height="${n}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${S.x.toFixed(1)}" y="${(S.y-k/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(F.name||"").slice(0,9)}</text>`;const R=(S.y+k/2-E).toFixed(1);m+=`<rect x="${te}" y="${R}" width="${x}" height="${E}" fill="rgba(255,255,255,0.92)"/>`;{const N=ei(F.country_code);N?m+=`<image href="${N}" xlink:href="${N}" x="${(S.x-20).toFixed(1)}" y="${(S.y+k/2-E+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(S.x-13).toFixed(1)}" y="${(S.y+k/2-E/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Ki(F.country_code)}</text>`,m+=`<text x="${S.x.toFixed(1)}" y="${(S.y+k/2-E/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const W=Ui(F);W?m+=`<image href="${W}" xlink:href="${W}" x="${(S.x+x/2-14).toFixed(1)}" y="${(S.y+k/2-E+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:F.clubName&&(m+=`<text x="${(S.x+14).toFixed(1)}" y="${(S.y+k/2-E/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(F.clubName||"").slice(0,3).toUpperCase()}</text>`),F.boost&&(m+=`<rect x="${(S.x+x/2-12).toFixed(1)}" y="${(S.y-k/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(S.x+x/2-5).toFixed(1)}" y="${(S.y-k/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${F.boost}</text>`)}m+=`<rect x="${te}" y="${D}" width="${x}" height="${k}" rx="5" fill="${B?"rgba(255,255,255,0.12)":"none"}" stroke="${re}" stroke-width="${ge}" opacity="${K}"/>`,se&&(m+=`<rect x="${te}" y="${D}" width="${x}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${B?"selected":""}" data-card-id="${F.cardId}" data-role="${C}" style="cursor:pointer"/>`)}const M=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-M} ${-M} ${p+M*2} ${s+M*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function st(e,t,o,a,p=300,s=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${at(e,t,o,a,p,s,d)}
  </div>`}function tt(e,t=!1){const o=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function pi(e,t,o,a){var F;const{state:p,navigate:s,toast:d}=t;We(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Rn(e,t,o);const u=l.deckId;let i,r,f,m;try{const S=await Promise.all([T.from("decks").select("formation,name").eq("id",u).single(),T.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",u).order("slot_order")]);i=S[0].data,f=S[0].error,r=S[1].data,m=S[1].error}catch(S){console.error("[Match] Exception chargement deck:",S),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const x=(r||[]).filter(S=>{var C;return S.is_starter&&((C=S.card)==null?void 0:C.player)}).map(S=>Zt(S.card,S.position)),k=(r||[]).filter(S=>{var C;return!S.is_starter&&((C=S.card)==null?void 0:C.player)}).map(S=>Zt(S.card,S.position));if(x.length<11){rt(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>s("decks"));return}const n=(r||[]).find(S=>{var C;return((C=S.card)==null?void 0:C.card_type)==="formation"}),E=(i==null?void 0:i.formation)||((F=n==null?void 0:n.card)==null?void 0:F.formation)||"4-4-2",{data:z,error:M}=await T.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:j}=await T.from("gc_definitions").select("*").eq("is_active",!0),O=(z||[]).map(S=>({...S,_gcDef:(j==null?void 0:j.find(C=>C.name===S.gc_type||C.id===S.gc_definition_id))||null}));a({deckId:u,formation:E,starters:x,subsRaw:k,gcCardsEnriched:O,gcDefs:j||[]})}async function Pn(e,t){const{state:o}=t,p=(o.params||{}).matchMode||"vs_ai_easy",s=p.replace("vs_ai_",""),d=p;await pi(e,t,p,async({deckId:l,formation:u,starters:i,subsRaw:r,gcCardsEnriched:f,gcDefs:m})=>{try{const x=ut(i,u),k=await On(u,s),n=async E=>{try{const{data:z,error:M}=await T.from("matches").insert({home_id:o.profile.id,away_id:null,mode:d,home_deck_id:l,status:"in_progress"}).select().single();if(M){console.error("[MatchIA] Erreur création match:",M),rt(e,"⚠️","Impossible de créer le match ("+M.message+").","Retour",()=>t.navigate("home"));return}const j={gcDefs:m||[],matchId:z==null?void 0:z.id,mode:d,difficulty:s,formation:u,homeTeam:x,aiTeam:k,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:E,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:o.profile.club_name||"Vous"};Un(e,j,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),rt(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!f.length){n([]);return}ci(e,f,n)}catch(x){console.error("[MatchIA] Exception setup:",x),rt(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function On(e,t){var d,l;const{data:o}=await T.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!o||o.length<11)return Hn(e);const a=ct[e]||ct["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},s=[...o];for(const u of["GK","DEF","MIL","ATT"]){const i=s.filter(k=>k.job===u),r=s.filter(k=>k.job!==u),f=[...i,...r],m=[];for(let k=0;k<a[u];k++){const n=f[k]||s[k];n&&m.push({cardId:"ai-"+n.id+"-"+k,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((d=n.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((l=n.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:u})}const x=it(m.length);m.forEach((k,n)=>{k._col=x[n]}),p[u]=m}return p}function Hn(e){const t=ct[e]||ct["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let u=0;u<t[s];u++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:a[p%a.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),p++}const l=it(d.length);d.forEach((u,i)=>{u._col=l[i]}),o[s]=d}return o}function Un(e,t,o){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${at(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Kn(e,t,o),5e3)}function Kn(e,t,o){const a=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function s(n){return n.reduce((E,z)=>E+be(z,"MIL"),0)}function d(n){let E=0;for(let z=0;z<n.length-1;z++){const M=Qe(n[z],n[z+1]);M==="#00ff88"?E+=2:M==="#FFD700"&&(E+=1)}return E}const l=s(a)+d(a),u=s(p)+d(p),i=l>=u;function r(n,E,z,M){return`<div id="duel-row-${M}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${E}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${n.map((j,O)=>{const F=O<n.length-1?Qe(j,n[O+1]):null,S=!F||F==="#ff3333"||F==="#cc2222",C=F==="#00ff88"?"+2":F==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${M}" data-idx="${O}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ue({...j,note:be(j,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${O<n.length-1?`<div class="duel-link duel-link-${M}" data-idx="${O}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${S?"rgba(255,255,255,0.12)":F};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${S?"none":`0 0 8px ${F}`}">
            ${C?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${F}">${C}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${M}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(n)} + ${d(n)} liens = <b style="color:#fff">${s(n)+d(n)}</b>
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

    ${r(a,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${r(p,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const n=(E,z)=>e.querySelectorAll(E).forEach((M,j)=>{setTimeout(()=>{M.style.opacity="1",M.style.transform="translateY(0) scale(1)"},z+j*90)});n(".duel-card-home",150),n(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((E,z)=>{setTimeout(()=>{E.style.opacity="1"},z*70)}),900),setTimeout(()=>{const E=e.querySelector("#vs-label");E&&(E.style.opacity="1",E.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",u,800)},1500)};function m(n,E,z){const M=document.getElementById(n);if(!M)return;const j=performance.now(),O=F=>{const S=Math.min(1,(F-j)/z);M.textContent=Math.round(E*(1-Math.pow(1-S,3))),S<1?requestAnimationFrame(O):M.textContent=E};requestAnimationFrame(O)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const x=i?li():null;i&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(n=>({name:n.name,note:be(n,"MIL"),portrait:Ie(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiPlayers:p.map(n=>({name:n.name,note:be(n,"MIL"),portrait:Ie(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),homeTotal:l,aiTotal:u,text:`Duel milieu : ${t.clubName} ${l} – ${u} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const k=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ze(e,t,o),t.attacker==="ai"&&setTimeout(()=>ti(e,t,o),800)};setTimeout(()=>{const n=document.getElementById("score-home"),E=document.getElementById("score-ai"),z=document.getElementById(i?"duel-row-home":"duel-row-ai"),M=document.getElementById(i?"duel-row-ai":"duel-row-home"),j=i?n:E,O=i?E:n;j&&(j.style.fontSize="80px",j.style.color=i?"#FFD700":"#ff6b6b",j.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),O&&(O.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var S;const F=document.getElementById("duel-shock");if(F){const C=(S=M||z)==null?void 0:S.getBoundingClientRect(),Z=e.querySelector(".match-screen").getBoundingClientRect();C&&(F.style.top=C.top-Z.top+C.height/2+"px"),F.style.animation="shockwave .5s ease-out forwards"}M&&(M.style.transformOrigin="center",M.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var S;const F=document.getElementById("duel-finale");F&&(F.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${x}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,F.style.transition="opacity .45s ease",F.style.opacity="1",F.style.pointerEvents="auto",(S=document.getElementById("start-match-btn"))==null||S.addEventListener("click",k))},600)},700)},2800)}function Vn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(o=>tt(o)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(o=>tt(o)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${tt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${tt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ze(e,t,o){var j,O,F,S,C,Z,ae,se;const a=t.selected.map(B=>B.cardId),p=t.usedSubIds||[],s=t.homeSubs.filter(B=>!p.includes(B.cardId)),l=Object.values(t.homeTeam).flat().filter(B=>B.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,u=!["GK","DEF","MIL","ATT"].some(B=>(t.aiTeam[B]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(B=>!B.used),r=t.phase==="attack"&&u&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(B=>!B.used).map(B=>B.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",x=t.phase==="defense",k=t.phase==="finished",n=t.gcCards.filter(B=>!t.usedGc.includes(B.id)),E=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${et((Y.players||[]).map(te=>({...te,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((Y.players||[]).map(te=>({...te,used:!1})),"#00ff88",Y.total)}
          </div>`}const B=t.log[t.log.length-1];return B?'<div style="padding:2px 4px">'+Vn(B)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const B=window.innerWidth>=700,Y=(R,N,W)=>{var Se,Ke;const P=(t.gcDefs||[]).find(c=>c.name===R.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[P==null?void 0:P.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ue={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",ie=(P==null?void 0:P.name)||R.gc_type,Ae=(P==null?void 0:P.effect)||((Se=Be[R.gc_type])==null?void 0:Se.desc)||"",ke=P!=null&&P.image_url?`/manager-wars/icons/${P.image_url}`:null,ve=((Ke=Be[R.gc_type])==null?void 0:Ke.icon)||"⚡",_e=Math.round(W*.22),we=Math.round(W*.22),Le=W-_e-we,Ge=ie.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${N}px;height:${W}px;border-radius:10px;border:2px solid ${ue};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${_e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ge}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${ie}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Le}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ke?`<img src="${ke}" style="max-width:${N-10}px;max-height:${Le-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Le*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${we}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ae.slice(0,38)}</span>
          </div>
        </div>`},te=(R,N)=>{var W;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(N*.2)}px">⚡</div>
            <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${(W=t.boostCard)==null?void 0:W.value}</div>
          </div>`},D=(R,N)=>N?te(130,175):Y(R,130,175),Q=(R,N)=>N?te(68,95):Y(R,68,95),K=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",re=k?`<button id="btn-results" style="${K};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${K};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${K};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ge=m||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(R,76,100)}</div>`).join("")}
      </div>`,xe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${st(t.homeTeam,t.formation,t.phase,a,300,300,r)}
        </div>
      </div>`;return B?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${xe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${re}${ge}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${n.map(R=>D(R,!1)).join("")}
            ${E?D(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(t.homeTeam,t.formation,t.phase,a,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${n.map(R=>Q(R,!1)).join("")}
            ${E?Q(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${s.length}</div>
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
          <div>${re}${ge}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(B=>{var Y,te,D;if(B.type==="duel"){const Q=B.isGoal,K=B.homeScored?"#FFD700":Q?"#ff6b6b":"rgba(255,255,255,0.3)",re=B.homeScored?"⚽ BUT !":Q?"⚽ BUT IA !":(Y=B.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${K};margin-bottom:4px">
                <div style="font-size:9px;color:${K};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${re}</div>
                ${(te=B.homePlayers)!=null&&te.length?`<div style="margin-bottom:3px">${et(B.homePlayers,"rgba(255,255,255,0.7)",B.homeTotal)}</div>`:""}
                ${(D=B.aiPlayers)!=null&&D.length?`<div style="opacity:0.7">${et(B.aiPlayers,"#ff6b6b",B.aiTotal)}</div>`:""}
              </div>`}return B.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${B.outPlayer?Ue({...B.outPlayer,used:!0,_line:B.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${B.inPlayer?Ue({...B.inPlayer,_line:B.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:B.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${B.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${B.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function z(){const B=e.querySelector(".match-screen");if(!B)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);B.style.bottom="auto",B.style.height=Y+"px",B.style.minHeight=Y+"px",B.style.maxHeight=Y+"px",B.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),D=e.querySelector("#mobile-play-area");te&&D&&(D.style.paddingBottom=te.offsetHeight+"px")}if(z(),setTimeout(z,120),setTimeout(z,400),setTimeout(z,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",z),window.visualViewport.addEventListener("scroll",z)),window.addEventListener("resize",z)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const B=e.querySelector(".terrain-wrapper svg");B&&(B.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let B=!1,Y=30;const te=()=>document.getElementById("match-timer"),D=()=>{const Q=te();if(!Q)return;const K=String(Math.floor(Y/60)).padStart(2,"0"),re=String(Y%60).padStart(2,"0");Q.textContent=` ${K}:${re}`,Q.style.color=B?"#ff2222":"#ff9500",Q.style.fontWeight="900"};D(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!B)B=!0,Y=15,D();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Q),setTimeout(()=>{Q.remove(),It(e,t,o)},2500)}else D()},1e3)}(j=document.getElementById("match-quit"))==null||j.addEventListener("click",()=>{Ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,It(e,t,o))}),(O=document.getElementById("view-ai"))==null||O.addEventListener("click",()=>no(t,o)),(F=document.getElementById("toggle-history"))==null||F.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.add("open")}),(S=document.getElementById("close-history"))==null||S.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.remove("open")}),(C=document.getElementById("btn-action"))==null||C.addEventListener("click",()=>{t.selected.length!==0&&(m?Wn(e,t,o):x&&Xn(e,t,o))}),(Z=document.getElementById("btn-results"))==null||Z.addEventListener("click",()=>It(e,t,o)),e.querySelectorAll(".match-slot-hit").forEach(B=>{B.addEventListener("click",()=>Yn(B,t,e,o))}),e.querySelectorAll(".match-used-hit").forEach(B=>{B.addEventListener("click",()=>Yt(e,t,o,null,B.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(B=>{B.addEventListener("click",()=>Zn(B.dataset.gcId,B.dataset.gcType,e,t,o))}),(ae=document.getElementById("boost-card"))==null||ae.addEventListener("click",()=>io(e,t,o)),e.querySelectorAll(".sub-btn-col").forEach(B=>{B.addEventListener("click",()=>Yt(e,t,o,B.dataset.subId))}),(se=document.getElementById("sub-btn-main"))==null||se.addEventListener("click",()=>Yt(e,t,o))}function Yn(e,t,o,a){const p=e.dataset.cardId,s=e.dataset.role,d=t.selected.findIndex(l=>l.cardId===p);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(u=>u.cardId===p);l&&t.selected.push({...l,_role:s,_line:s})}ze(o,t,a)}function ui(e,t,o){e.matchId&&T.from("matches").update({last_player_id:o}).eq("id",e.matchId).then(()=>{})}function Wn(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,o,o.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(l=>!l.used)),p=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,u=a&&["GK","DEF"].includes(d._role);return{...l,_line:d._role,...u?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Nt(p,t.modifiers.home);t.pendingAttack={...s,players:[...p],side:"home"},t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(u=>u.cardId===d.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ze(e,t,o),setTimeout(()=>Jn(e,t,o),1200)}function Xn(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,o,o.state.profile.id);const a=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Rt(a,t.modifiers.home);t.selected.forEach(l=>{const u=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);u&&(u.used=!0)});const s=Pt(t.pendingAttack.total,p.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Ie(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const u=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:u.name,note:(u._line==="GK"?Number(u.note_g)||0:u._line==="MIL"?Number(u.note_m)||0:Number(u.note_d)||0)+(u.boost||0),portrait:Ie(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(s.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,o),qt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,o,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,dt(e,t,o,"home-attack")}function ti(e,t,o){ui(t,o,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Si(a,"attack",t.difficulty);if(!p.length){Ft(e,t,o);return}const s=Nt(p,t.modifiers.ai);t.pendingAttack={...s,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),u=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!u){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:Ie(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,ze(e,t,o),qt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,o,"home-attack")});return}t.phase="defense",ze(e,t,o)}function Jn(e,t,o){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Si(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(x=>({name:x.name,note:be(x,x._line||x.job),portrait:Ie(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,o),qt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,o,"ai-attack")});return}const d=p.length>0?Rt(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Pt(t.pendingAttack.total,d,t.modifiers.ai),u={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(l.shielded)u.text="🛡️ Bouclier IA !",t.log.push(u);else if(l.goal){t.homeScore++,u.isGoal=!0,u.homeScored=!0,u.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,o),qt(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,o,"ai-attack")});return}else u.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(u);t.modifiers.ai={},t.pendingAttack=null,dt(e,t,o,"ai-attack")}function dt(e,t,o,a){if(t.round++,Vi(t)){It(e,t,o);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ft(e,t,o);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ft(e,t,o);return}setTimeout(()=>ti(e,t,o),100);return}t.phase="attack",ze(e,t,o)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ft(e,t,o);return}t.phase="ai-attack",ze(e,t,o),setTimeout(()=>ti(e,t,o),800)}}function Vi(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(p=>!p.used)),o=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(p=>!p.used));return!t&&!o}function Ft(e,t,o){Vi(t)?It(e,t,o):(t.phase="attack",ze(e,t,o))}function Qn(e,t,o){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=Ie(e),s=Ie(t),d=pt[e.job]||"#555",l=pt[t.job]||"#555",u=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${p?`<img src="${p}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${u}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let r=!1;const f=()=>{r||(r=!0,a.remove(),o())};a.addEventListener("click",f),setTimeout(f,2e3)}function kt(e,t="rgba(0,0,0,0.8)"){const o=document.createElement("div");o.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2200)}function Yt(e,t,o,a=null,p=null){var x,k;if(t.phase!=="attack"){kt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){kt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([n,E])=>(E||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||n}))),d=t.homeSubs.filter(n=>!t.usedSubIds.includes(n.cardId));if(!s.length){kt("Aucun joueur utilisé à remplacer");return}if(!d.length){kt("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(n=>n.cardId===p));const u=((x=s[l])==null?void 0:x._line)||((k=s[l])==null?void 0:k.job);let i=a?Math.max(0,d.findIndex(n=>n.cardId===a)):Math.max(0,d.findIndex(n=>n.job===u)),r=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var F,S,C,Z,ae,se;const n=s[l],E=d[i],z=Math.min(130,Math.round((window.innerWidth-90)/2)),M=Math.round(z*1.35),j=B=>`background:rgba(255,255,255,0.12);border:none;color:${B?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${B?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${j(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${E?Ue({...E,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="in-down" style="${j(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${j(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${n?Ue({...n,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="out-down" style="${j(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(F=f.querySelector("#sub-close"))==null||F.addEventListener("click",()=>f.remove()),(S=f.querySelector("#out-up"))==null||S.addEventListener("click",()=>{l>0&&(l--,m())}),(C=f.querySelector("#out-down"))==null||C.addEventListener("click",()=>{l<s.length-1&&(l++,m())}),(Z=f.querySelector("#in-up"))==null||Z.addEventListener("click",()=>{i>0&&(i--,m())}),(ae=f.querySelector("#in-down"))==null||ae.addEventListener("click",()=>{i<d.length-1&&(i++,m())});const O=(B,Y,te,D)=>{const Q=f.querySelector("#"+B);if(!Q)return;let K=0;Q.addEventListener("touchstart",re=>{K=re.touches[0].clientY},{passive:!0}),Q.addEventListener("touchend",re=>{const ge=re.changedTouches[0].clientY-K;if(Math.abs(ge)<30)return;const me=Y();ge<0&&me<D-1?(te(me+1),m()):ge>0&&me>0&&(te(me-1),m())},{passive:!0})};O("in-panel",()=>i,B=>i=B,d.length),O("out-panel",()=>l,B=>l=B,s.length),(se=f.querySelector("#sub-confirm"))==null||se.addEventListener("click",B=>{if(B.preventDefault(),B.stopPropagation(),r)return;r=!0;const Y=s[l],te=d[i];if(!Y||!te)return;let D=null,Q=-1;for(const[re,ge]of Object.entries(t.homeTeam)){const me=(ge||[]).findIndex(xe=>xe.cardId===Y.cardId);if(me!==-1){D=re,Q=me;break}}if(Q===-1||!D){kt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const K={...te,_line:D,_col:Y._col||0,used:!1,boost:0};t.homeTeam[D].splice(Q,1,K),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(te.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:be(Y,D),portrait:Ie(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:te.name,firstname:te.firstname,note:be(te,D),portrait:Ie(te),job:te.job,country_code:te.country_code,rarity:te.rarity,clubName:te.clubName,clubLogo:te.clubLogo},text:`🔄 ${te.firstname} ${te.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),Qn(Y,te,()=>ze(e,t,o))})}document.body.appendChild(f),m()}function Zn(e,t,o,a,p){var k,n;const s=(a.gcDefs||[]).find(E=>E.name===t),d=Be[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",u={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||d.desc,f=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,m=d.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${u};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${u}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(x),(k=x.querySelector("#gc-back"))==null||k.addEventListener("click",()=>x.remove()),(n=x.querySelector("#gc-use"))==null||n.addEventListener("click",()=>{x.remove(),to(e,t,o,a,p)})}function jt(e,t,o,a,p,s){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function u(){var i,r;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${o}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",k=be(f,m)+(f.boost||0),n=l.find(E=>E.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${n?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,x=e.find(n=>n.cardId===m);if(!x)return;const k=l.findIndex(n=>n.cardId===m);k>-1?l.splice(k,1):l.length<t&&l.push(x),u()})}),(r=d.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{d.remove(),s(l)})}u(),document.body.appendChild(d)}const eo={BOOST_STAT:({value:e=1,count:t=1,roles:o=[]},a,p,s)=>{const d=Object.entries(a.homeTeam).filter(([l])=>!o.length||o.includes(l)).flatMap(([l,u])=>u.filter(i=>!i.used).map(i=>({...i,_line:l})));return d.length?(jt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,a,l=>{l.forEach(u=>{const i=(a.homeTeam[u._line]||[]).find(r=>r.cardId===u.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),ze(p,a,s)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(p,a,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:o=[],target:a="ai"},p,s,d)=>{const l=a==="home"?p.homeTeam:p.aiTeam,u=a==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!o.length||o.includes(r)).flatMap(([r,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:r})));return i.length?(jt(i,t,`Choisir ${t} joueur(s) ${u}(s) à débuffer (-${e})`,s,p,r=>{r.forEach(f=>{const x=((a==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find(k=>k.cardId===f.cardId);x&&(x.boost=(x.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${x.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),ze(s,p,d)}),!0):(p.log.push({text:`🎯 Aucun joueur ${u} disponible`,type:"info"}),ze(s,p,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:o="ai"},a,p,s)=>{const d=o==="home"?a.homeTeam:a.aiTeam,l=o==="ai"?"adverse":"allié",u=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(f=>!f.used).map(f=>({...f,_line:i})));return u.length?(jt(u,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,a,i=>{i.forEach(r=>{const m=((o==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(x=>x.cardId===r.cardId);m&&(m.used=!0,a.log.push({text:`❌ ${m.name}${o==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(p,a,s)}),!0):(a.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ze(p,a,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},o,a,p)=>{const s=Object.entries(o.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,l])=>l.filter(u=>u.used).map(u=>({...u,_line:d})));return s.length?(jt(s,e,`Choisir ${e} joueur(s) à ressusciter`,a,o,d=>{d.forEach(l=>{const u=(o.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);u&&(u.used=!1,o.log.push({text:`💫 ${u.name} ressuscité !`,type:"info"}))}),ze(a,o,p)}),!0):(o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(a,o,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function to(e,t,o,a,p){a.usedGc.push(e);const s=a.gcDefs||[],d=s.find(u=>u.name===t)||s.find(u=>{var i;return((i=u.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const u=eo[d.effect_type];u?u(d.effect_params||{},a,o,p)||(l=!0):(p.toast(`Effet "${d.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const u=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(f=>f.used).map(f=>({...f,_line:i})));u.length?(u[0].used=!1,a.log.push({text:`💫 ${u[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const u=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(u.length){const i=u.sort((r,f)=>be(f,"ATT")-be(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}T.from("cards").delete().eq("id",e).then(()=>{}),l&&ze(o,a,p)}function io(e,t,o){const a=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!a.length){o.toast("Aucun joueur actif à booster","error");return}o.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${pt[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${be(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const s=p.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[d]||[]).find(u=>u.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,o.closeModal(),ze(e,t,o)})})}function qt(e,t,o,a,p){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");s.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${d}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${a?"BUT !":"BUT IA !"}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${t} – ${o}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(i=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${pt[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const u=()=>{l||(l=!0,s.remove(),setTimeout(()=>p(),50))};s.addEventListener("click",u),setTimeout(u,3500)}async function It(e,t,o){var r,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=o,p=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,d=p?"victoire":s?"nul":"defaite",l=cn(t.mode,d);t.matchId&&await T.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const u={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};p?u.wins=(a.profile.wins||0)+1:s?u.draws=(a.profile.draws||0)+1:u.losses=(a.profile.losses||0)+1,await T.from("users").update(u).eq("id",a.profile.id),await o.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${p?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${p?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),Ne(e),o.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),Ne(e),o.navigate("match",{matchMode:t.mode})})}function no(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${at(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function oo(e,t){await pi(e,t,"random",({deckId:o,formation:a,starters:p,subsRaw:s,gcCardsEnriched:d,gcDefs:l})=>{const u=i=>ro(e,t,o,a,p,s,i,l||[]);if(!d.length){u([]);return}ci(e,d,u)})}async function ro(e,t,o,a,p,s,d=[],l=[]){var M;const{state:u,navigate:i,toast:r}=t;let f=!1,m=null;We(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const x=async(j=!0)=>{f=!0,m&&(T.removeChannel(m),m=null),j&&await T.rpc("cancel_matchmaking",{p_user_id:u.profile.id}).catch(()=>{})};(M=document.getElementById("mm-cancel"))==null||M.addEventListener("click",async()=>{try{await x(!0)}catch{}Ne(e),i("home")});const k=async(j,O,F)=>{if(f)return;f=!0,m&&(T.removeChannel(m),m=null);const S=document.getElementById("mm-status");S&&(S.textContent="Adversaire trouvé !"),await new Promise(C=>setTimeout(C,600)),e.isConnected&&ao(e,t,j,F,d,l)},{data:n,error:E}=await T.rpc("try_matchmake",{p_user_id:u.profile.id,p_deck_id:o});if(E||!(n!=null&&n.success)){r("Erreur de matchmaking","error"),Ne(e),i("home");return}if(n.matched){k(n.match_id,n.opponent_id,!1);return}const z=document.getElementById("mm-status");z&&(z.textContent="En attente d'un autre joueur..."),m=T.channel("matchmaking-"+u.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${u.profile.id}`},j=>{const O=j.new;O.status==="matched"&&O.match_id&&k(O.match_id,O.matched_with,!0)}).subscribe()}async function ao(e,t,o,a,p=[],s=[]){const{state:d,navigate:l,toast:u}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(c=>c.id),m=(p||[]).map(c=>({id:c.id,gc_type:c.gc_type,_gcDef:c._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await T.from("matches").select("*").eq("id",o).single();if(!x){u("Match introuvable","error"),l("home");return}async function k(){const[{data:c},{data:g},{data:b},{data:h}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),y=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((c==null?void 0:c.starters)||[]).map($=>y($)),w=((g==null?void 0:g.starters)||[]).map($=>y($)),_=(c==null?void 0:c.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:ut(v,_),p2Team:ut(w,I),p1Subs:((c==null?void 0:c.subs)||[]).map($=>y($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:I,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let n=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!n)if(a){n=await k();const{data:c}=await T.from("matches").select("game_state").eq("id",o).single();!(c!=null&&c.game_state)||!Object.keys(c.game_state).length?await T.from("matches").update({game_state:n,turn_user_id:x.home_id}).eq("id",o):n=c.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let c=0;c<30&&!n;c++){await new Promise(b=>setTimeout(b,400));const{data:g}=await T.from("matches").select("game_state").eq("id",o).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(n=g.game_state)}if(!n){u("Erreur de synchronisation","error"),l("home");return}n.gc_p2=f,n.gcCardsFull_p2=m,await T.from("matches").update({game_state:n}).eq("id",o)}let E=!1,z=null,M=!1;const j=new Set,O=new Set;function F(c){var $,L;try{T.removeChannel(S)}catch{}const g=n[i+"Score"]||0,b=n[r+"Score"]||0;let h,y;c.winner_id?(h=c.winner_id===d.profile.id,y=!1):c.forfeit?(h=g>b,y=!1):(y=g===b,h=g>b),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":h?"🏆":"😞",_=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${n[i+"Name"]} ${g} – ${b} ${n[r+"Name"]}</div>
      ${c.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ne(e),l("home")})}const S=T.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},c=>{const g=c.new;try{if(g.status==="finished"||g.forfeit){if(E)return;E=!0,z&&(clearInterval(z),z=null),g.game_state&&(n=g.game_state),F(g);return}if(g.game_state){const b=n;n=g.game_state;const h=n._lastGC;if(h&&h.seq&&!O.has(h.seq)&&(O.add(h.seq),h.by!==i)){me(h.type,h.by,()=>D());return}const y=b[i+"Score"]||0,v=b[r+"Score"]||0,w=n[i+"Score"]||0,_=n[r+"Score"]||0,I=w>y,$=_>v;if((I||$)&&!j.has(n.round)){j.add(n.round);const L=[...n.log||[]].reverse().find(U=>U.isGoal),q=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(q,w,_,I,()=>D());return}D()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function C(c){Object.assign(n,c),n.lastActionAt=new Date().toISOString();const{error:g}=await T.from("matches").update({game_state:n}).eq("id",o);g&&u("Erreur de synchronisation","error");try{D()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function Z(){if(E)return;E=!0,z&&(clearInterval(z),z=null);const c=a?x.away_id:x.home_id,g=a?"p2":"p1",b=a?"p1":"p2",h={...n,[g+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:c,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",o)}catch{}try{T.removeChannel(S)}catch{}setTimeout(()=>{Ne(e),l("home")},800)}const ae={BOOST_STAT:({value:c=1,count:g=1,roles:b=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!b.length||b.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}se(w,g,`Choisir ${g} joueur(s) à booster (+${c})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+c,h.log.push({text:`⚡ +${c} sur ${$.name}`,type:"info"}))}),h[i+"Team"]=v,y(h)})},DEBUFF_STAT:({value:c=1,count:g=1,roles:b=[],target:h="ai"},y,v)=>{const w=h==="home"?i:r,_=y[w+"Team"],I=h==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!b.length||b.includes(L)).flatMap(([L,q])=>q.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(y);return}se($,g,`Choisir ${g} joueur(s) ${I}(s) (-${c})`,L=>{L.forEach(q=>{const U=(_[q._line]||[]).find(oe=>oe.cardId===q.cardId);U&&(U.boost=(U.boost||0)-c,y.log.push({text:`🎯 -${c} sur ${U.name}`,type:"info"}))}),y[w+"Team"]=_,v(y)})},GRAY_PLAYER:({count:c=1,roles:g=[],target:b="ai"},h,y)=>{const v=b==="home"?i:r,w=h[v+"Team"],_=b==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(q=>!q.used).map(q=>({...q,_line:$})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(h);return}se(I,c,`Choisir ${c} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const q=(w[L._line]||[]).find(U=>U.cardId===L.cardId);q&&(q.used=!0,h.log.push({text:`❌ ${q.name} exclu !`,type:"info"}))}),h[v+"Team"]=w,y(h)})},REVIVE_PLAYER:({count:c=1,roles:g=[]},b,h)=>{const y=b[i+"Team"],v=Object.entries(y).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(b);return}se(v,c,`Choisir ${c} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(y[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,b.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),b[i+"Team"]=y,h(b)})},REMOVE_GOAL:({},c,g)=>{const b=r+"Score";c[b]>0?(c[b]--,c.log.push({text:"🚫 Dernier but annulé !",type:"info"})):c.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(c)},ADD_GOAL_DRAW:({},c,g)=>{c[i+"Score"]===c[r+"Score"]?(c[i+"Score"]++,c.log.push({text:"🎯 But bonus !",type:"info"})):c.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(c)},ADD_SUB:({value:c=1},g,b)=>{g.maxSubs=(g.maxSubs||3)+c,g.log.push({text:`🔄 +${c} remplacement(s)`,type:"info"}),b(g)},CUSTOM:({},c,g)=>g(c)};function se(c,g,b,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=c.map(L=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),ce=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${q};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${g})
          </button>
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const q=L.dataset.cid,U=c.find(ce=>ce.cardId===q),oe=v.findIndex(ce=>ce.cardId===q);U&&(oe>-1?v.splice(oe,1):v.length<g&&v.push(U),w())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),h(v)})}w(),document.body.appendChild(y)}async function B(c,g){const h=(n["gcCardsFull_"+i]||[]).find(_=>_.id===c),y=(h==null?void 0:h._gcDef)||(n.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...n["usedGc_"+i]||[],c],w={type:g,by:i,seq:(n._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=ae[y.effect_type];if(I){const $={...n};I(y.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await C(L)});return}}const _={...n};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=r+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await C(_)})}function Y(c,g){const b="usedCardIds_"+c,h=new Set(n[b]||[]);g.forEach(y=>h.add(y)),n[b]=[...h]}function te(){for(const c of["p1","p2"]){const g=new Set(n["usedCardIds_"+c]||[]),b=n[c+"Team"];if(b)for(const h of["GK","DEF","MIL","ATT"])(b[h]||[]).forEach(y=>{y.used=g.has(y.cardId)})}}function D(){var Oe,ft,gt,mt,xt,yt;if(n.phase==="reveal")return Q();if(n.phase==="midfield")return re();if(n.phase==="finished")return Ke();const c=n[i+"Team"],g=n[r+"Team"];te();const b=n[i+"Score"],h=n[r+"Score"],y=n[i+"Name"],v=n[r+"Name"],w=n.phase===i+"-attack",_=n.phase===i+"-defense",I=Array.isArray(n["selected_"+i])?n["selected_"+i]:[],$=I.map(A=>A.cardId),L=window.innerWidth>=700,q=n[i+"Subs"]||[],U=n["usedSubIds_"+i]||[],oe=q.filter(A=>!U.includes(A.cardId)),ce=n["gcCardsFull_"+i]||[],G=n["usedGc_"+i]||[],H=ce.filter(A=>!G.includes(A.id)),J=n.boostOwner===i&&!n.boostUsed,ne=!["GK","DEF","MIL","ATT"].some(A=>(g[A]||[]).some(V=>!V.used)),de=[...c.MIL||[],...c.ATT||[]].filter(A=>!A.used),fe=w&&ne&&de.length===0?[...c.GK||[],...c.DEF||[]].filter(A=>!A.used).map(A=>A.cardId):[];function le(A,V,pe){var wt,$t;const ee=A._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",Xe=(ee==null?void 0:ee.name)||A.gc_type,Je=(ee==null?void 0:ee.effect)||((wt=Be[A.gc_type])==null?void 0:wt.desc)||"",ht=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,Ut=(($t=Be[A.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(pe*.22),vt=Math.round(pe*.22),nt=pe-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${A.id}" data-gc-type="${A.gc_type}"
        style="box-sizing:border-box;width:${V}px;height:${pe}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${V-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${nt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${V-10}px;max-height:${nt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(nt*.55)}px">${Ut}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function ye(A,V){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${A}px;height:${V}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(V*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(V*.2)}px">⚡</div>
        <div style="font-size:${Math.round(V*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const Ee=(A,V)=>V?ye(130,175):le(A,130,175),Re=(A,V)=>V?ye(68,95):le(A,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${oe.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':oe.map(A=>`<div class="pvp-sub-btn" data-sub-id="${A.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(A,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(c,n[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function De(A){if(A.type==="duel"&&(A.homeTotal!=null||A.aiTotal!=null)){const V=(A.homeTotal||0)>=(A.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(A.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(A.homePlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${V?20:14}px;font-weight:900;color:${V?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${A.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${V?14:20}px;font-weight:900;color:${V?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${A.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(A.aiPlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
          </div>
          ${A.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${A.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${A.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${A.type==="goal"?700:400};padding:3px 2px">${A.text||""}</div>`}const Ve=(()=>{var V,pe;if(_&&((V=n.pendingAttack)!=null&&V.players)){const ee=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(w&&((pe=n.pendingAttack)!=null&&pe.players)){const ee=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#00ff88",ee.total)}
        </div>`}const A=(n.log||[]).slice(-1)[0];return A?'<div style="padding:2px 4px">'+De(A)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;We(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(A=>Ee(A,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(c,n[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(A=>Re(A,!1)).join("")}
            ${J?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&oe.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&oe.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&oe.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&oe.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${oe.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(n["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(n["usedSubIds_"+i]||[]).length}/${n.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${$e}</div>
        </div>
      </div>`;function Te(){const A=e.querySelector(".match-screen");if(!A)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);A.style.height=V+"px",A.style.minHeight=V+"px",A.style.maxHeight=V+"px",A.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");pe&&ee&&(ee.style.paddingBottom=pe.offsetHeight+"px")}if(Te(),setTimeout(Te,120),setTimeout(Te,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Te),window.visualViewport.addEventListener("scroll",Te)),window.addEventListener("resize",Te)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(A=>{A.addEventListener("click",()=>{if(!w&&!_)return;const V=A.dataset.cardId,pe=A.dataset.role,ee=(c[pe]||[]).find(Je=>Je.cardId===V);if(!ee||ee.used)return;const He=fe.includes(V);if(w&&!["MIL","ATT"].includes(pe)&&!He)return;Array.isArray(n["selected_"+i])||(n["selected_"+i]=[]);const Ye=n["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===V);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...ee,_role:pe}),D()})}),e.querySelectorAll(".match-used-hit").forEach(A=>{A.addEventListener("click",()=>N(A.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(A=>{A.addEventListener("click",()=>N())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(A=>{A.addEventListener("click",()=>xe(A.dataset.gcId,A.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",A=>{w?A.currentTarget.dataset.pass==="1"||!we(i)?ue():ie():_&&Ae()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),z&&(clearInterval(z),z=null),(w||_)&&!E){let A=30,V=!1;const pe=()=>document.getElementById("pvp-timer"),ee=()=>{pe()&&(pe().textContent=A+"s",pe().style.color=V?"#ff4444":"#fff")};ee(),z=setInterval(()=>{A--,A<0?V?(clearInterval(z),z=null,w&&!we(i)?ue():Z()):(V=!0,A=15,ee()):ee()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await C({phase:"midfield"})},5e3)}let K=!1;function re(){if(K)return;const c=n[i+"Team"].MIL||[],g=n[r+"Team"].MIL||[];function b(H){return H.reduce((J,ne)=>J+be(ne,"MIL"),0)}function h(H){let J=0;for(let ne=0;ne<H.length-1;ne++){const de=Qe(H[ne],H[ne+1]);de==="#00ff88"?J+=2:de==="#FFD700"&&(J+=1)}return J}const y=b(c)+h(c),v=b(g)+h(g),w=y>=v;function _(H,J,ne){return`<div id="duel-row-${ne}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,fe)=>{const le=fe<H.length-1?Qe(de,H[fe+1]):null,ye=!le||le==="#ff3333"||le==="#cc2222",Ee=le==="#00ff88"?"+2":le==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ne}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...de,note:be(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${ne}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":le};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${le}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${le}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ne}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(H)} + ${h(H)} liens = <b style="color:#fff">${b(H)+h(H)}</b>
        </div>
      </div>`}We(e),e.innerHTML=`
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
      ${_(c,n[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((ne,de)=>{setTimeout(()=>{ne.style.opacity="1",ne.style.transform="translateY(0) scale(1)"},J+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,ne){const de=document.getElementById(H);if(!de)return;const fe=performance.now(),le=ye=>{const Ee=Math.min(1,(ye-fe)/ne);de.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(le):de.textContent=J};requestAnimationFrame(le)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",v,800)},1500);const L=n.p1Team.MIL||[],q=n.p2Team.MIL||[],U=b(L)+h(L),oe=b(q)+h(q),ce=U>=oe?"p1":"p2";let G=n.boostValue;G==null&&(G=li(),n.boostValue=G,n.boostOwner=ce,n.boostUsed=!1),K=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),ne=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?ne:de,le=w?de:ne;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),le&&(le.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=n.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+n[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=ce;await C({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(c,g,b,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,q)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${q%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][q%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${h?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${b}
      </div>
      ${c!=null&&c.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${c.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(c,g,b){var G,H;const h=(n.gcDefs||[]).find(J=>{var ne;return J.name===c||((ne=J.name)==null?void 0:ne.toLowerCase().trim())===(c==null?void 0:c.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||c,_=(h==null?void 0:h.effect)||((G=Be[c])==null?void 0:G.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,$=((H=Be[c])==null?void 0:H.icon)||"⚡",q=g===i?"Vous":n[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${q} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let oe=!1;const ce=()=>{oe||(oe=!0,U.remove(),setTimeout(()=>b&&b(),50))};U.addEventListener("click",ce),setTimeout(ce,3e3)}function xe(c,g){var U,oe,ce,G;const h=(n["gcCardsFull_"+i]||[]).find(H=>H.id===c),y=h==null?void 0:h._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||g,I=(y==null?void 0:y.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,L=((oe=Be[g])==null?void 0:oe.icon)||"⚡",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",q.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(q),(ce=q.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>q.remove()),(G=q.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{q.remove(),B(c,g)})}function R(){var h;const c=n[i+"Team"],g=Object.entries(c).flatMap(([y,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!g.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(y=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=be(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#bp-close"))==null||h.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const v=y.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(c[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+n.boostValue),b.remove(),await C({[i+"Team"]:c,boostUsed:!0})})})}function N(c=null){var oe,ce;if(!(n.phase===i+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const b=n[i+"Team"],h=n["usedSubIds_"+i]||[],y=n.maxSubs||3;if(h.length>=y){u(`Maximum ${y} remplacements atteint`,"warning");return}const v=Object.entries(b).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(n[i+"Subs"]||[]).filter(G=>!h.includes(G.cardId));if(!v.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){u("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===c));const I=((oe=v[_])==null?void 0:oe._line)||((ce=v[_])==null?void 0:ce.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const q=document.createElement("div");q.id="pvp-sub-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var le,ye,Ee,Re,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),ne=Math.round(J*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;q.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pin-down" style="${de($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(le=q.querySelector("#psub-close"))==null||le.addEventListener("click",()=>q.remove()),(ye=q.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=q.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Re=q.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=q.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const De=q.querySelector("#"+$e);if(!De)return;let Ve=0;De.addEventListener("touchstart",qe=>{Ve=qe.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",qe=>{const Te=qe.changedTouches[0].clientY-Ve;if(Math.abs(Te)<30)return;const Oe=Fe();Te<0&&Oe<Pe-1?(Me(Oe+1),U()):Te>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=q.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,De=(b[Pe]||[]).findIndex(Te=>Te.cardId===Fe.cardId);if(De===-1){u("Erreur : joueur introuvable","error"),q.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};b[Pe].splice(De,1,Ve);const qe=[...h,Me.cardId];q.remove(),W(Fe,Me,async()=>{await C({[i+"Team"]:b,[r+"Team"]:n[r+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(q),U()}function W(c,g,b){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(c,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const _=()=>{w||(w=!0,y.remove(),setTimeout(()=>b(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",c.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(c),(g=c.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>c.remove())}function X(){var b;const c=n.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${c.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...c].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(b=g.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>g.remove())}async function ue(){if(n.phase!==i+"-attack")return;const c=i==="p1"?"p2":"p1",g=(n.round||0)+1,b=[...n.log||[]];b.push({type:"info",text:`⏭️ ${n[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Le(n),y=we(c),v=h||!y?"finished":c+"-attack";await C({["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:c,round:g,log:b}),v==="finished"&&await Se(n)}async function ie(){const c=n[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(n[r+"Team"][v]||[]).some(w=>!w.used)),b=(n["selected_"+i]||[]).map(v=>{const w=(c[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=c[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),q=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:q,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!b.length)return;const h=Nt(b,n.modifiers[i]||{});Y(i,b.map(v=>v.cardId)),b.forEach(v=>{const w=(c[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),n["selected_"+i]=[],D();const y=[...n.log||[]];if(g){const v=(n[i+"Score"]||0)+1,w=b.map(q=>({name:q.name,note:be(q,q._line||"ATT"),portrait:Ie(q),job:q.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(n.round||0)+1,I=i==="p1"?"p2":"p1",$={...n,[i+"Team"]:c,[i+"Score"]:v},L=Le($);j.add(_),ge(w,v,n[r+"Score"]||0,!0,async()=>{await C({[i+"Team"]:c,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:y}),L&&await Se({...n,[i+"Score"]:v})});return}y.push({type:"pending",text:`⚔️ ${n[i+"Name"]} attaque (${h.total})`}),await C({[i+"Team"]:c,[r+"Team"]:n[r+"Team"],pendingAttack:{...h,players:b,side:i},["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},phase:r+"-defense",log:y})}async function Ae(){const c=n[i+"Team"],g=(n["selected_"+i]||[]).map(G=>{const H=(c[G._role]||[]).find(le=>le.cardId===G.cardId)||G,J=c[G._role]||[],ne=J.findIndex(le=>le.cardId===G.cardId),de=it(J.length),fe=ne>=0?de[ne]:H._col??1;return{...H,_line:G._role,_col:fe}}),b=Rt(g,n.modifiers[i]||{});Y(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(c[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),n["selected_"+i]=[],D();const h=Pt(n.pendingAttack.total,b.total,n.modifiers[i]||{}),y=n.pendingAttack.side,v=h==="attack"||(h==null?void 0:h.goal),w=y==="p1"?"p2":"p1",_=(n.round||0)+1,I=(n.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...n.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&y===i,text:v?`⚽ BUT de ${n[y+"Name"]} ! (${n.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${b.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:n.pendingAttack.total,aiTotal:b.total});const L=v?(n[y+"Score"]||0)+1:n[y+"Score"]||0,q={...n,[i+"Team"]:c,[y+"Score"]:L},U=Le(q),oe=U?"finished":w+"-attack",ce=async()=>{await C({[i+"Team"]:c,[r+"Team"]:n[r+"Team"],[y+"Score"]:L,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:oe,attacker:w,round:_,log:$}),(oe==="finished"||U)&&await Se({...n,[y+"Score"]:L})};if(v){const G=y===i,H=G?L:n[i+"Score"]||0,J=G?n[r+"Score"]||0:L;j.add(_),ge(I,H,J,G,ce)}else await ce()}function ke(c){return["MIL","ATT"].some(g=>(c[g]||[]).some(b=>!b.used))}function ve(c){return["GK","DEF","MIL","ATT"].some(g=>(c[g]||[]).some(b=>!b.used))}function _e(c){return ve(c)&&!ke(c)}function we(c){const g=n[c+"Team"],b=n[(c==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(b)&&_e(g))}function Le(c){const g=["MIL","ATT"].some($=>(c.p1Team[$]||[]).some(L=>!L.used)),b=["MIL","ATT"].some($=>(c.p2Team[$]||[]).some(L=>!L.used)),h=ve(c.p1Team),y=ve(c.p2Team);return!g&&!(!y&&h)&&(!b&&!(!h&&y))}function Ge(c){const g=c.p1Score||0,b=c.p2Score||0;return g===b?null:g>b?x.home_id:x.away_id}async function Se(c){try{await T.from("matches").update({status:"finished",winner_id:Ge(c),home_score:c.p1Score||0,away_score:c.p2Score||0}).eq("id",o)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var y;const c=n[i+"Score"],g=n[r+"Score"],b=c>g,h=c===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${c} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{T.removeChannel(S)}catch{}Ne(e),l("home")})}D()}async function so(e,t,o,a){var p,s;try{const d=(s=(p=t==null?void 0:t.state)==null?void 0:p.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(u=>{const i=u.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&T.removeChannel(u)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}d&&(await T.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await pi(e,t,"random",({deckId:d,formation:l,starters:u,subsRaw:i,gcCardsEnriched:r,gcDefs:f})=>{const m=x=>lo(e,t,d,l,u,i,x,f||[],o,a);if(!r.length){m([]);return}ci(e,r,m)})}async function lo(e,t,o,a,p,s,d=[],l=[],u,i){var S;const{state:r,navigate:f,toast:m}=t,x=r.profile.id;let k=!1,n=null;We(e);try{await T.rpc("cancel_matchmaking",{p_user_id:x})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",x)}catch{}const E=(C,Z,ae,se)=>{var B;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${i}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${r.profile.club_name||r.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:${Z?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${Z?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${Z?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${Z?"#22c55e":"#aaa"}">${Z?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!Z&&C?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(B=document.getElementById("lobby-cancel"))==null||B.addEventListener("click",async()=>{k=!0,n&&(T.removeChannel(n),n=null),ae&&await T.from("friend_match_invites").update({status:"declined"}).eq("id",ae),Ne(e),f("home")})},z=async(C,Z)=>{k=!0,n&&(T.removeChannel(n),n=null),await new Promise(ae=>setTimeout(ae,600)),e.isConnected&&co(e,t,C,Z,d,l)},{data:M}=await T.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${x},invitee_id.eq.${u}),and(inviter_id.eq.${u},invitee_id.eq.${x})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let j,O;if(M&&M.inviter_id===u)O=!1,j=M.id,await T.from("friend_match_invites").update({invitee_deck_id:o,invitee_ready:!0,status:"accepted"}).eq("id",j);else{O=!0;const{data:C,error:Z}=await T.from("friend_match_invites").insert({inviter_id:x,invitee_id:u,friend_id:u,inviter_deck_id:o,inviter_ready:!0,status:"pending"}).select().single();if(Z||!C){m("Erreur création invitation","error"),Ne(e),f("home");return}j=C.id}if(E(!0,!O,j),!O){let C=null;const Z={home_id:u,away_id:x,home_deck_id:M.inviter_deck_id,away_deck_id:o,status:"active"};let ae=await T.from("matches").insert({...Z,mode:"friend"}).select().single();if(ae.error&&(console.warn("[FriendMatch] insert avec mode échoué, retry sans mode:",ae.error.message),ae=await T.from("matches").insert(Z).select().single()),C=ae.data,!C){m("Erreur création match: "+(((S=ae.error)==null?void 0:S.message)||""),"error"),Ne(e),f("home");return}await T.from("friend_match_invites").update({match_id:C.id,status:"matched"}).eq("id",j),z(C.id,!1);return}const F=setInterval(()=>{if(k){clearInterval(F);return}T.from("matchmaking_queue").delete().eq("user_id",x).then(()=>{},()=>{})},3e3);n=T.channel("friend-invite-"+j).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${j}`},async C=>{if(k)return;const Z=C.new;Z.status==="matched"&&Z.match_id?(clearInterval(F),z(Z.match_id,!0)):Z.status==="declined"?(clearInterval(F),m(`${i} a décliné l'invitation`,"warning"),Ne(e),f("home")):Z.invitee_ready&&E(!0,!0,j)}).subscribe()}async function co(e,t,o,a,p=[],s=[]){const{state:d,navigate:l,toast:u}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(c=>c.id),m=(p||[]).map(c=>({id:c.id,gc_type:c.gc_type,_gcDef:c._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await T.from("matches").select("*").eq("id",o).single();if(!x){u("Match introuvable","error"),l("home");return}async function k(){const[{data:c},{data:g},{data:b},{data:h}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),y=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((c==null?void 0:c.starters)||[]).map($=>y($)),w=((g==null?void 0:g.starters)||[]).map($=>y($)),_=(c==null?void 0:c.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:ut(v,_),p2Team:ut(w,I),p1Subs:((c==null?void 0:c.subs)||[]).map($=>y($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:I,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let n=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!n)if(a){n=await k();const{data:c}=await T.from("matches").select("game_state").eq("id",o).single();!(c!=null&&c.game_state)||!Object.keys(c.game_state).length?await T.from("matches").update({game_state:n,turn_user_id:x.home_id}).eq("id",o):n=c.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let c=0;c<30&&!n;c++){await new Promise(b=>setTimeout(b,400));const{data:g}=await T.from("matches").select("game_state").eq("id",o).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(n=g.game_state)}if(!n){u("Erreur de synchronisation","error"),l("home");return}n.gc_p2=f,n.gcCardsFull_p2=m,await T.from("matches").update({game_state:n}).eq("id",o)}let E=!1,z=null,M=!1;const j=new Set,O=new Set;function F(c){var $,L;try{T.removeChannel(S)}catch{}const g=n[i+"Score"]||0,b=n[r+"Score"]||0;let h,y;c.winner_id?(h=c.winner_id===d.profile.id,y=!1):c.forfeit?(h=g>b,y=!1):(y=g===b,h=g>b),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":h?"🏆":"😞",_=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${n[i+"Name"]} ${g} – ${b} ${n[r+"Name"]}</div>
      ${c.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ne(e),l("home")})}const S=T.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},c=>{const g=c.new;try{if(g.status==="finished"||g.forfeit){if(E)return;E=!0,z&&(clearInterval(z),z=null),g.game_state&&(n=g.game_state),F(g);return}if(g.game_state){const b=n;n=g.game_state;const h=n._lastGC;if(h&&h.seq&&!O.has(h.seq)&&(O.add(h.seq),h.by!==i)){me(h.type,h.by,()=>D());return}const y=b[i+"Score"]||0,v=b[r+"Score"]||0,w=n[i+"Score"]||0,_=n[r+"Score"]||0,I=w>y,$=_>v;if((I||$)&&!j.has(n.round)){j.add(n.round);const L=[...n.log||[]].reverse().find(U=>U.isGoal),q=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(q,w,_,I,()=>D());return}D()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function C(c){Object.assign(n,c),n.lastActionAt=new Date().toISOString();const{error:g}=await T.from("matches").update({game_state:n}).eq("id",o);g&&u("Erreur de synchronisation","error");try{D()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function Z(){if(E)return;E=!0,z&&(clearInterval(z),z=null);const c=a?x.away_id:x.home_id,g=a?"p2":"p1",b=a?"p1":"p2",h={...n,[g+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:c,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",o)}catch{}try{T.removeChannel(S)}catch{}setTimeout(()=>{Ne(e),l("home")},800)}const ae={BOOST_STAT:({value:c=1,count:g=1,roles:b=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!b.length||b.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}se(w,g,`Choisir ${g} joueur(s) à booster (+${c})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+c,h.log.push({text:`⚡ +${c} sur ${$.name}`,type:"info"}))}),h[i+"Team"]=v,y(h)})},DEBUFF_STAT:({value:c=1,count:g=1,roles:b=[],target:h="ai"},y,v)=>{const w=h==="home"?i:r,_=y[w+"Team"],I=h==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!b.length||b.includes(L)).flatMap(([L,q])=>q.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(y);return}se($,g,`Choisir ${g} joueur(s) ${I}(s) (-${c})`,L=>{L.forEach(q=>{const U=(_[q._line]||[]).find(oe=>oe.cardId===q.cardId);U&&(U.boost=(U.boost||0)-c,y.log.push({text:`🎯 -${c} sur ${U.name}`,type:"info"}))}),y[w+"Team"]=_,v(y)})},GRAY_PLAYER:({count:c=1,roles:g=[],target:b="ai"},h,y)=>{const v=b==="home"?i:r,w=h[v+"Team"],_=b==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(q=>!q.used).map(q=>({...q,_line:$})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(h);return}se(I,c,`Choisir ${c} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const q=(w[L._line]||[]).find(U=>U.cardId===L.cardId);q&&(q.used=!0,h.log.push({text:`❌ ${q.name} exclu !`,type:"info"}))}),h[v+"Team"]=w,y(h)})},REVIVE_PLAYER:({count:c=1,roles:g=[]},b,h)=>{const y=b[i+"Team"],v=Object.entries(y).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(b);return}se(v,c,`Choisir ${c} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(y[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,b.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),b[i+"Team"]=y,h(b)})},REMOVE_GOAL:({},c,g)=>{const b=r+"Score";c[b]>0?(c[b]--,c.log.push({text:"🚫 Dernier but annulé !",type:"info"})):c.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(c)},ADD_GOAL_DRAW:({},c,g)=>{c[i+"Score"]===c[r+"Score"]?(c[i+"Score"]++,c.log.push({text:"🎯 But bonus !",type:"info"})):c.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(c)},ADD_SUB:({value:c=1},g,b)=>{g.maxSubs=(g.maxSubs||3)+c,g.log.push({text:`🔄 +${c} remplacement(s)`,type:"info"}),b(g)},CUSTOM:({},c,g)=>g(c)};function se(c,g,b,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=c.map(L=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),ce=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${q};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${g})
          </button>
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const q=L.dataset.cid,U=c.find(ce=>ce.cardId===q),oe=v.findIndex(ce=>ce.cardId===q);U&&(oe>-1?v.splice(oe,1):v.length<g&&v.push(U),w())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),h(v)})}w(),document.body.appendChild(y)}async function B(c,g){const h=(n["gcCardsFull_"+i]||[]).find(_=>_.id===c),y=(h==null?void 0:h._gcDef)||(n.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...n["usedGc_"+i]||[],c],w={type:g,by:i,seq:(n._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=ae[y.effect_type];if(I){const $={...n};I(y.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await C(L)});return}}const _={...n};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=r+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await C(_)})}function Y(c,g){const b="usedCardIds_"+c,h=new Set(n[b]||[]);g.forEach(y=>h.add(y)),n[b]=[...h]}function te(){for(const c of["p1","p2"]){const g=new Set(n["usedCardIds_"+c]||[]),b=n[c+"Team"];if(b)for(const h of["GK","DEF","MIL","ATT"])(b[h]||[]).forEach(y=>{y.used=g.has(y.cardId)})}}function D(){var Oe,ft,gt,mt,xt,yt;if(n.phase==="reveal")return Q();if(n.phase==="midfield")return re();if(n.phase==="finished")return Ke();const c=n[i+"Team"],g=n[r+"Team"];te();const b=n[i+"Score"],h=n[r+"Score"],y=n[i+"Name"],v=n[r+"Name"],w=n.phase===i+"-attack",_=n.phase===i+"-defense",I=Array.isArray(n["selected_"+i])?n["selected_"+i]:[],$=I.map(A=>A.cardId),L=window.innerWidth>=700,q=n[i+"Subs"]||[],U=n["usedSubIds_"+i]||[],oe=q.filter(A=>!U.includes(A.cardId)),ce=n["gcCardsFull_"+i]||[],G=n["usedGc_"+i]||[],H=ce.filter(A=>!G.includes(A.id)),J=n.boostOwner===i&&!n.boostUsed,ne=!["GK","DEF","MIL","ATT"].some(A=>(g[A]||[]).some(V=>!V.used)),de=[...c.MIL||[],...c.ATT||[]].filter(A=>!A.used),fe=w&&ne&&de.length===0?[...c.GK||[],...c.DEF||[]].filter(A=>!A.used).map(A=>A.cardId):[];function le(A,V,pe){var wt,$t;const ee=A._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",Xe=(ee==null?void 0:ee.name)||A.gc_type,Je=(ee==null?void 0:ee.effect)||((wt=Be[A.gc_type])==null?void 0:wt.desc)||"",ht=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,Ut=(($t=Be[A.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(pe*.22),vt=Math.round(pe*.22),nt=pe-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${A.id}" data-gc-type="${A.gc_type}"
        style="box-sizing:border-box;width:${V}px;height:${pe}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${V-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${nt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${V-10}px;max-height:${nt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(nt*.55)}px">${Ut}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function ye(A,V){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${A}px;height:${V}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(V*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(V*.2)}px">⚡</div>
        <div style="font-size:${Math.round(V*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const Ee=(A,V)=>V?ye(130,175):le(A,130,175),Re=(A,V)=>V?ye(68,95):le(A,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${oe.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':oe.map(A=>`<div class="pvp-sub-btn" data-sub-id="${A.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(A,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(c,n[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function De(A){if(A.type==="duel"&&(A.homeTotal!=null||A.aiTotal!=null)){const V=(A.homeTotal||0)>=(A.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(A.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(A.homePlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${V?20:14}px;font-weight:900;color:${V?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${A.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${V?14:20}px;font-weight:900;color:${V?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${A.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(A.aiPlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
          </div>
          ${A.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${A.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${A.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${A.type==="goal"?700:400};padding:3px 2px">${A.text||""}</div>`}const Ve=(()=>{var V,pe;if(_&&((V=n.pendingAttack)!=null&&V.players)){const ee=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(w&&((pe=n.pendingAttack)!=null&&pe.players)){const ee=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#00ff88",ee.total)}
        </div>`}const A=(n.log||[]).slice(-1)[0];return A?'<div style="padding:2px 4px">'+De(A)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;We(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(A=>Ee(A,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(c,n[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(A=>Re(A,!1)).join("")}
            ${J?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&oe.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&oe.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&oe.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&oe.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${oe.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(n["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(n["usedSubIds_"+i]||[]).length}/${n.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${$e}</div>
        </div>
      </div>`;function Te(){const A=e.querySelector(".match-screen");if(!A)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);A.style.height=V+"px",A.style.minHeight=V+"px",A.style.maxHeight=V+"px",A.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");pe&&ee&&(ee.style.paddingBottom=pe.offsetHeight+"px")}if(Te(),setTimeout(Te,120),setTimeout(Te,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Te),window.visualViewport.addEventListener("scroll",Te)),window.addEventListener("resize",Te)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(A=>{A.addEventListener("click",()=>{if(!w&&!_)return;const V=A.dataset.cardId,pe=A.dataset.role,ee=(c[pe]||[]).find(Je=>Je.cardId===V);if(!ee||ee.used)return;const He=fe.includes(V);if(w&&!["MIL","ATT"].includes(pe)&&!He)return;Array.isArray(n["selected_"+i])||(n["selected_"+i]=[]);const Ye=n["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===V);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...ee,_role:pe}),D()})}),e.querySelectorAll(".match-used-hit").forEach(A=>{A.addEventListener("click",()=>N(A.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(A=>{A.addEventListener("click",()=>N())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(A=>{A.addEventListener("click",()=>xe(A.dataset.gcId,A.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",A=>{w?A.currentTarget.dataset.pass==="1"||!we(i)?ue():ie():_&&Ae()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),z&&(clearInterval(z),z=null),(w||_)&&!E){let A=30,V=!1;const pe=()=>document.getElementById("pvp-timer"),ee=()=>{pe()&&(pe().textContent=A+"s",pe().style.color=V?"#ff4444":"#fff")};ee(),z=setInterval(()=>{A--,A<0?V?(clearInterval(z),z=null,w&&!we(i)?ue():Z()):(V=!0,A=15,ee()):ee()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await C({phase:"midfield"})},5e3)}let K=!1;function re(){if(K)return;const c=n[i+"Team"].MIL||[],g=n[r+"Team"].MIL||[];function b(H){return H.reduce((J,ne)=>J+be(ne,"MIL"),0)}function h(H){let J=0;for(let ne=0;ne<H.length-1;ne++){const de=Qe(H[ne],H[ne+1]);de==="#00ff88"?J+=2:de==="#FFD700"&&(J+=1)}return J}const y=b(c)+h(c),v=b(g)+h(g),w=y>=v;function _(H,J,ne){return`<div id="duel-row-${ne}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,fe)=>{const le=fe<H.length-1?Qe(de,H[fe+1]):null,ye=!le||le==="#ff3333"||le==="#cc2222",Ee=le==="#00ff88"?"+2":le==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ne}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...de,note:be(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${ne}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":le};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${le}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${le}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ne}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(H)} + ${h(H)} liens = <b style="color:#fff">${b(H)+h(H)}</b>
        </div>
      </div>`}We(e),e.innerHTML=`
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
      ${_(c,n[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((ne,de)=>{setTimeout(()=>{ne.style.opacity="1",ne.style.transform="translateY(0) scale(1)"},J+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,ne){const de=document.getElementById(H);if(!de)return;const fe=performance.now(),le=ye=>{const Ee=Math.min(1,(ye-fe)/ne);de.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(le):de.textContent=J};requestAnimationFrame(le)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",v,800)},1500);const L=n.p1Team.MIL||[],q=n.p2Team.MIL||[],U=b(L)+h(L),oe=b(q)+h(q),ce=U>=oe?"p1":"p2";let G=n.boostValue;G==null&&(G=li(),n.boostValue=G,n.boostOwner=ce,n.boostUsed=!1),K=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),ne=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?ne:de,le=w?de:ne;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),le&&(le.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=n.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+n[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=ce;await C({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(c,g,b,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,q)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${q%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][q%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${h?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${b}
      </div>
      ${c!=null&&c.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${c.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(c,g,b){var G,H;const h=(n.gcDefs||[]).find(J=>{var ne;return J.name===c||((ne=J.name)==null?void 0:ne.toLowerCase().trim())===(c==null?void 0:c.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||c,_=(h==null?void 0:h.effect)||((G=Be[c])==null?void 0:G.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,$=((H=Be[c])==null?void 0:H.icon)||"⚡",q=g===i?"Vous":n[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${q} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let oe=!1;const ce=()=>{oe||(oe=!0,U.remove(),setTimeout(()=>b&&b(),50))};U.addEventListener("click",ce),setTimeout(ce,3e3)}function xe(c,g){var U,oe,ce,G;const h=(n["gcCardsFull_"+i]||[]).find(H=>H.id===c),y=h==null?void 0:h._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||g,I=(y==null?void 0:y.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,L=((oe=Be[g])==null?void 0:oe.icon)||"⚡",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",q.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(q),(ce=q.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>q.remove()),(G=q.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{q.remove(),B(c,g)})}function R(){var h;const c=n[i+"Team"],g=Object.entries(c).flatMap(([y,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!g.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(y=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=be(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#bp-close"))==null||h.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const v=y.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(c[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+n.boostValue),b.remove(),await C({[i+"Team"]:c,boostUsed:!0})})})}function N(c=null){var oe,ce;if(!(n.phase===i+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const b=n[i+"Team"],h=n["usedSubIds_"+i]||[],y=n.maxSubs||3;if(h.length>=y){u(`Maximum ${y} remplacements atteint`,"warning");return}const v=Object.entries(b).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(n[i+"Subs"]||[]).filter(G=>!h.includes(G.cardId));if(!v.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){u("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===c));const I=((oe=v[_])==null?void 0:oe._line)||((ce=v[_])==null?void 0:ce.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const q=document.createElement("div");q.id="pvp-sub-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var le,ye,Ee,Re,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),ne=Math.round(J*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;q.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pin-down" style="${de($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(le=q.querySelector("#psub-close"))==null||le.addEventListener("click",()=>q.remove()),(ye=q.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=q.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Re=q.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=q.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const De=q.querySelector("#"+$e);if(!De)return;let Ve=0;De.addEventListener("touchstart",qe=>{Ve=qe.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",qe=>{const Te=qe.changedTouches[0].clientY-Ve;if(Math.abs(Te)<30)return;const Oe=Fe();Te<0&&Oe<Pe-1?(Me(Oe+1),U()):Te>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=q.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,De=(b[Pe]||[]).findIndex(Te=>Te.cardId===Fe.cardId);if(De===-1){u("Erreur : joueur introuvable","error"),q.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};b[Pe].splice(De,1,Ve);const qe=[...h,Me.cardId];q.remove(),W(Fe,Me,async()=>{await C({[i+"Team"]:b,[r+"Team"]:n[r+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(q),U()}function W(c,g,b){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(c,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const _=()=>{w||(w=!0,y.remove(),setTimeout(()=>b(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",c.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(c),(g=c.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>c.remove())}function X(){var b;const c=n.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${c.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...c].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(b=g.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>g.remove())}async function ue(){if(n.phase!==i+"-attack")return;const c=i==="p1"?"p2":"p1",g=(n.round||0)+1,b=[...n.log||[]];b.push({type:"info",text:`⏭️ ${n[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Le(n),y=we(c),v=h||!y?"finished":c+"-attack";await C({["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:c,round:g,log:b}),v==="finished"&&await Se(n)}async function ie(){const c=n[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(n[r+"Team"][v]||[]).some(w=>!w.used)),b=(n["selected_"+i]||[]).map(v=>{const w=(c[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=c[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),q=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:q,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!b.length)return;const h=Nt(b,n.modifiers[i]||{});Y(i,b.map(v=>v.cardId)),b.forEach(v=>{const w=(c[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),n["selected_"+i]=[],D();const y=[...n.log||[]];if(g){const v=(n[i+"Score"]||0)+1,w=b.map(q=>({name:q.name,note:be(q,q._line||"ATT"),portrait:Ie(q),job:q.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(n.round||0)+1,I=i==="p1"?"p2":"p1",$={...n,[i+"Team"]:c,[i+"Score"]:v},L=Le($);j.add(_),ge(w,v,n[r+"Score"]||0,!0,async()=>{await C({[i+"Team"]:c,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:y}),L&&await Se({...n,[i+"Score"]:v})});return}y.push({type:"pending",text:`⚔️ ${n[i+"Name"]} attaque (${h.total})`}),await C({[i+"Team"]:c,[r+"Team"]:n[r+"Team"],pendingAttack:{...h,players:b,side:i},["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},phase:r+"-defense",log:y})}async function Ae(){const c=n[i+"Team"],g=(n["selected_"+i]||[]).map(G=>{const H=(c[G._role]||[]).find(le=>le.cardId===G.cardId)||G,J=c[G._role]||[],ne=J.findIndex(le=>le.cardId===G.cardId),de=it(J.length),fe=ne>=0?de[ne]:H._col??1;return{...H,_line:G._role,_col:fe}}),b=Rt(g,n.modifiers[i]||{});Y(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(c[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),n["selected_"+i]=[],D();const h=Pt(n.pendingAttack.total,b.total,n.modifiers[i]||{}),y=n.pendingAttack.side,v=h==="attack"||(h==null?void 0:h.goal),w=y==="p1"?"p2":"p1",_=(n.round||0)+1,I=(n.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...n.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&y===i,text:v?`⚽ BUT de ${n[y+"Name"]} ! (${n.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${b.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:n.pendingAttack.total,aiTotal:b.total});const L=v?(n[y+"Score"]||0)+1:n[y+"Score"]||0,q={...n,[i+"Team"]:c,[y+"Score"]:L},U=Le(q),oe=U?"finished":w+"-attack",ce=async()=>{await C({[i+"Team"]:c,[r+"Team"]:n[r+"Team"],[y+"Score"]:L,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:oe,attacker:w,round:_,log:$}),(oe==="finished"||U)&&await Se({...n,[y+"Score"]:L})};if(v){const G=y===i,H=G?L:n[i+"Score"]||0,J=G?n[r+"Score"]||0:L;j.add(_),ge(I,H,J,G,ce)}else await ce()}function ke(c){return["MIL","ATT"].some(g=>(c[g]||[]).some(b=>!b.used))}function ve(c){return["GK","DEF","MIL","ATT"].some(g=>(c[g]||[]).some(b=>!b.used))}function _e(c){return ve(c)&&!ke(c)}function we(c){const g=n[c+"Team"],b=n[(c==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(b)&&_e(g))}function Le(c){const g=["MIL","ATT"].some($=>(c.p1Team[$]||[]).some(L=>!L.used)),b=["MIL","ATT"].some($=>(c.p2Team[$]||[]).some(L=>!L.used)),h=ve(c.p1Team),y=ve(c.p2Team);return!g&&!(!y&&h)&&(!b&&!(!h&&y))}function Ge(c){const g=c.p1Score||0,b=c.p2Score||0;return g===b?null:g>b?x.home_id:x.away_id}async function Se(c){try{await T.from("matches").update({status:"finished",winner_id:Ge(c),home_score:c.p1Score||0,away_score:c.p2Score||0}).eq("id",o)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var y;const c=n[i+"Score"],g=n[r+"Score"],b=c>g,h=c===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${c} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{T.removeChannel(S)}catch{}Ne(e),l("home")})}D()}const po={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function uo(e,t){const{state:o,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:o,toast:a}=t,{data:p}=await T.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await T.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",o.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(p||[]).filter(i=>i.seller_id!==o.profile.id),l=s||[];l.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${d.length} carte(s) en vente · Solde : ${(o.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function u(i){const r=document.getElementById("mkt-content"),f=i==="buy"?d:l;if(f.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const m=i==="mine"?[...f].sort((x,k)=>x.status!==k.status?x.status==="active"?-1:1:new Date(k.listed_at)-new Date(x.listed_at)):f;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(x=>{var j,O,F,S;const k=(j=x.card)==null?void 0:j.player;if(!k)return"";const n=k.job==="GK"?k.note_g:k.job==="DEF"?k.note_d:k.job==="MIL"?k.note_m:k.note_a,E=po[k.rarity],z=(o.profile.credits||0)>=x.price,M=x.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${M?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${xo(k.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${E};flex-shrink:0">${n}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${k.firstname} ${k.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${k.country_code} · ${((O=k.clubs)==null?void 0:O.encoded_name)||"—"} · ${k.rarity} · ${k.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((F=x.seller)==null?void 0:F.pseudo)||"—"}</div>`:M?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((S=x.buyer)==null?void 0:S.pseudo)||"—"} · ${x.sold_at?new Date(x.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(x.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${x.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${x.id}" ${z?"":"disabled"} style="margin-top:4px">${z?"Acheter":"Trop cher"}</button>`:M?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${x.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(x=>{x.addEventListener("click",()=>fo(x.dataset.buy,f,e,t))}),r.querySelectorAll("[data-cancel]").forEach(x=>{x.addEventListener("click",()=>mo(x.dataset.cancel,e,t))})}u("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const f=r===i;r.style.background=f?"var(--green)":"#fff",r.style.color=f?"#fff":"var(--gray-600)",r.style.borderColor=f?"var(--green)":"var(--gray-200)"}),u(i.dataset.tab)})})}async function fo(e,t,o,a){var x;const{state:p,toast:s,refreshProfile:d}=a,l=t.find(k=>k.id===e);if(!l)return;const u=l.price,i=p.profile.credits||0,r=(x=l.card)==null?void 0:x.player;if(i<u){s("Crédits insuffisants","error");return}if(!await go(r,u))return;const m=document.querySelector(`[data-buy="${e}"]`);m&&(m.disabled=!0,m.textContent="⏳");try{const{data:k,error:n}=await T.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(n)throw new Error(n.message);if(!(k!=null&&k.success))throw new Error((k==null?void 0:k.error)||"Achat impossible");p.profile.credits=i-u;const E=document.getElementById("nav-credits");E&&(E.textContent=`💰 ${(i-u).toLocaleString("fr")}`),s(`✅ ${r==null?void 0:r.surname_encoded} ajouté à ta collection !`,"success"),fi(o,a)}catch(k){s("❌ "+k.message,"error"),m&&(m.disabled=!1,m.textContent="Acheter")}}function go(e,t){return new Promise(o=>{const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
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
      </div>`,document.body.appendChild(a);const p=s=>{a.remove(),o(s)};a.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),a.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),a.addEventListener("click",s=>{s.target===a&&p(!1)})})}async function mo(e,t,o){const{toast:a}=o,{data:p}=await T.from("market_listings").select("card_id").eq("id",e).single();await T.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),a("Annonce retirée","success"),fi(t,o)}function xo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function yo(e,{state:t,navigate:o,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await T.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${p&&p.length>0?p.map((s,d)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${s.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${d+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${s.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${s.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${s.trophies_top1} 🥈${s.trophies_top2} 🥉${s.trophies_top3}</div>
              <div style="color:var(--gray-600)">${s.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function ho(e,{state:t,navigate:o,toast:a}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),u=(s||[]).filter(r=>r.status==="in_progress");function i(r){const f=r.home_id===p.id;f?r.home_score:r.away_score,f?r.away_score:r.home_score;const m=r.winner_id===p.id,x=r.home_score===r.away_score&&r.status==="finished",k=r.status!=="finished"?"…":x?"N":m?"V":"D",n=r.status!=="finished"||x?"#888":m?"#1A6B3C":"#c0392b";let E=d[r.mode]||r.mode;r.away_id===null&&!E.startsWith("IA")&&(E="IA");const M=r.home_id===p.id?r.away:r.home;let j;r.away_id===null?j=E:M?j=`${M.club_name||M.pseudo} (${M.pseudo})`:j="Adversaire";let O="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(O=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const F=new Date(r.created_at),S=F.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+F.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),C=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${j}${O}</div>
        <div style="font-size:11px;color:var(--gray-600)">${E} · ${S}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${C}</span>
        <span style="background:${n};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${k}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${u.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${u.map(i).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(i).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Xi(Qi);const he={user:null,profile:null,page:"home",params:{}};function Et(e,t="info",o=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},o))}function bo(e,t,o=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=o,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function Tt(){if(!he.user)return;const{data:e}=await T.from("users").select("*").eq("id",he.user.id).single();e&&(he.profile=e)}const gi="mw_theme";function Gt(){return localStorage.getItem(gi)||"light"}function vo(e){var t;localStorage.setItem(gi,e),ni(e),(t=he.profile)!=null&&t.id&&T.from("users").update({theme:e}).eq("id",he.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Bt(e,t={}){he.page=e,he.params=t,Yi()}async function Yi(){var a,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===he.page)});const t=document.getElementById("nav-credits");t&&he.profile&&(t.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const o={state:he,navigate:Bt,toast:Et,openModal:bo,closeModal:ii,refreshProfile:Tt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await yi(e,o);break;case"collection":await fn(e,o);break;case"decks":await Xt(e,o);break;case"boosters":await An(e,o);break;case"match":{const s=he.params&&he.params.matchMode||"vs_ai_easy";s==="random"?await oo(e,o):s==="friend"?await so(e,o,(a=he.params)==null?void 0:a.friendId,(p=he.params)==null?void 0:p.friendName):await Pn(e,o);break}case"market":await uo(e,o);break;case"rankings":await yo(e,o);break;case"matches":await ho(e,o);break;case"friends":await nn(e,o);break;default:await yi(e,o)}}function wo(){const e=document.getElementById("app"),t=he.profile;if(!t)return;const o="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${o}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
          <img src="${o}nav-home.png" alt="" class="nav-icon">
          <img src="${o}nav-home-txt.png" alt="Accueil" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="collection">
        <div class="nav-icon-wrap">
          <img src="${o}nav-collection.png" alt="" class="nav-icon">
          <img src="${o}nav-collection-txt.png" alt="Cartes" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="decks">
        <div class="nav-icon-wrap">
          <img src="${o}nav-decks.png" alt="" class="nav-icon">
          <img src="${o}nav-deck-txt.png" alt="Decks" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="boosters">
        <div class="nav-icon-wrap">
          <img src="${o}nav-boosters.png" alt="" class="nav-icon">
          <img src="${o}nav-boosters-txt.png" alt="Boosters" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="market">
        <div class="nav-icon-wrap">
          <img src="${o}nav-market.png" alt="" class="nav-icon">
          <img src="${o}nav-market-txt.png" alt="Marché" class="nav-label">
        </div>
      </a>
    </nav>
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",p=>{p.preventDefault(),Bt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Bt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Bt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Gt()==="dark"?"light":"dark";vo(p),Ei(p)}),Ei(Gt())}function Ei(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function $o(){ni(Gt()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await T.auth.getSession();if(!e){Ti(),mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et});return}he.user=e.user,await Tt(),Ti();try{const{data:o}=await T.from("formation_links_overrides").select("formation, links"),a={};(o||[]).forEach(p=>{a[p.formation]=p.links}),Ji(a)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!he.profile){Zi(document.getElementById("app"),{state:he,navigate:async()=>{await Tt(),Wt()},toast:Et,refreshProfile:Tt});return}const t=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&t.length>0){qn(document.getElementById("app"),{state:he,navigate:()=>Wt(),toast:Et,refreshProfile:Tt});return}he.profile.theme&&he.profile.theme!==Gt()&&(localStorage.setItem(gi,he.profile.theme),ni(he.profile.theme)),Wt(),T.auth.onAuthStateChange(async(o,a)=>{o==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et}))})}function _o(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ht(){const e=document.getElementById("app");e&&(e.style.height=_o()+"px")}window.addEventListener("resize",Ht);window.addEventListener("orientationchange",()=>setTimeout(Ht,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ht);function Wt(){const e=()=>{var o;(o=he.user)!=null&&o.id&&T.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Ht(),wo(),Yi()}function Ti(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Wi(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const o=document.createElement("div");o.id="boot-error",o.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",o.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(o),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}$o().catch(e=>{console.error("Échec du démarrage:",e),Wi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Wi("Le serveur met trop de temps à répondre.")},12e3);
