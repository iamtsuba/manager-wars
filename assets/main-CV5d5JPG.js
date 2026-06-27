import{s as A,F as oi,h as St,j as Ai,l as Qe,i as Xi,k as Ji,b as Qi}from"./formation-links-CEzN0rcz.js";function mi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!r||!p){s.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:l}=await A.auth.signInWithPassword({email:r,password:p});if(d.textContent="Se connecter",d.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!r||!p||!s){d.textContent="Remplissez tous les champs.";return}if(p.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==s){d.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await A.auth.signUp({email:r,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,c){d.textContent=c.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function Zi(e,{state:t,navigate:n,toast:r,refreshProfile:p}){let s="#1A6B3C",d="#D4A017";e.innerHTML=`
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
  `;function l(){var E;const i=document.getElementById("logo-preview"),a=document.getElementById("logo-initials"),f=((E=document.getElementById("setup-club"))==null?void 0:E.value)||"MW",m=f.trim().split(" ").filter(Boolean),b=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=s),a&&(a.textContent=b,a.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,l()});function c(i){document.querySelectorAll(".setup-step").forEach(a=>a.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("step1-error");if(a.textContent="",i.length<3){a.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await A.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){a.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),a=document.getElementById("step2-error");if(a.textContent="",i.length<2){a.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await A.from("users").select("id").eq("club_name",i).maybeSingle();if(f){a.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:b}=await A.from("users").insert({id:t.user.id,pseudo:i,club_name:a,club_color1:s,club_color2:d,credits:1e4});if(b)throw b;await en(t.user.id),await p(),r(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(b){f.textContent=b.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function en(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await A.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const Lt="#1A6B3C",zt="#cc2222",tn="#D4A017",xi="#888";async function nn(e,t){const{state:n,toast:r}=t;e.innerHTML=`
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
    </div>`,await Ii(n,r,t),document.getElementById("btn-add-friend").addEventListener("click",()=>rn(n,r)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Li(n,r))}async function Ii(e,t,n={}){const r=e.user.id,{data:p,error:s}=await A.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await A.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(s){console.error("[Friends] Erreur:",s),c.innerHTML=`<div style="color:${zt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const i=(p||[]).map(m=>m.requester_id===r?m.addressee_id:m.requester_id);let a={};if(i.length){const{data:m}=await A.from("users").select("id, pseudo, club_name, last_seen_at").in("id",i);(m||[]).forEach(b=>{a[b.id]=b})}const f=(p||[]).map(m=>({friendshipId:m.id,friend:a[m.requester_id===r?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!f.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${f.length} ami${f.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${f.map(({friendshipId:m,friend:b})=>on(b,m)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>an(e,m.dataset.stats,m.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{navigate("match",{matchMode:"friend",friendId:m.dataset.friendId,friendName:m.dataset.friendName})})})}function on(e,t){const n=e.club_name||e.pseudo||"?",r=(e.pseudo||"?").slice(0,2).toUpperCase(),p=e.last_seen_at?new Date(e.last_seen_at):null,s=p&&Date.now()-p.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <!-- Avatar + point de présence -->
      <div style="position:relative;width:42px;height:42px;flex-shrink:0">
        <div style="width:42px;height:42px;border-radius:50%;background:${Lt};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff">
          ${r}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${s?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px;flex-shrink:0"></div>`}
      </div>
      <!-- Infos -->
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:${s?"#22c55e":"#999"};font-weight:600">${s?"En ligne":"Hors ligne"}</div>
      </div>
      <!-- Boutons -->
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${n}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${n}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid ${tn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function rn(e,t){const n=ri();n.innerHTML=`
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
    ${ai()}`,document.body.appendChild(n);const r=n.querySelector("#friend-pseudo-input"),p=n.querySelector("#add-friend-error"),s=()=>n.remove();r.focus(),n.querySelector("#add-cancel").addEventListener("click",s),n.addEventListener("click",d=>{d.target===n&&s()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const d=r.value.trim();if(!d){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await A.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await A.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(c){const a=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=a;return}const{error:i}=await A.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Li(e,t,n=null){const r=e.user.id,{data:p}=await A.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),s=(p||[]).map(f=>f.requester_id);let d={};if(s.length){const{data:f}=await A.from("users").select("id, pseudo, club_name").in("id",s);(f||[]).forEach(m=>{d[m.id]=m})}const l=(p||[]).map(f=>({...f,requester:d[f.requester_id]||{pseudo:"?"}})),c=ri(),i=l||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${i.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${i.map(f=>{var m,b,E;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=f.requester)==null?void 0:m.club_name)||((b=f.requester)==null?void 0:b.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((E=f.requester)==null?void 0:E.pseudo)||""})</span>
                </div>
                <button data-accept="${f.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${f.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${zt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(c);const a=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",a),c.addEventListener("click",f=>{f.target===c&&a()}),c.querySelectorAll("[data-accept]").forEach(f=>{f.addEventListener("click",async()=>{const{error:m}=await A.from("friendships").update({status:"accepted"}).eq("id",f.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}f.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ii(e),n&&n()})}),c.querySelectorAll("[data-decline]").forEach(f=>{f.addEventListener("click",async()=>{await A.from("friendships").delete().eq("id",f.dataset.decline),f.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function an(e,t,n){const r=e.user.id,[p,s]=[r,t].sort(),d=r===p,{data:l}=await A.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",s).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},a=d?i.wins_p1||0:i.wins_p2||0,f=d?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,b=d?i.goals_p1||0:i.goals_p2||0,E=d?i.goals_p2||0:i.goals_p1||0,o=d?i.gc_used_p1||0:i.gc_used_p2||0,k=d?i.gc_used_p2||0:i.gc_used_p1||0,M=i.matches_total||0,S=(O,C,z,q=Lt,oe=zt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${q}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${O}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${oe}">${z}</div>
    </div>`,j=ri();j.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${n}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      </div>
      ${M===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${S("Victoires",a,f)}
        ${S("Nuls",m,m,xi,xi)}
        ${S("Défaites",f,a)}
        ${S("Buts marqués",b,E)}
        ${S("Buts encaissés",E,b,zt,Lt)}
        ${S("GC utilisés ⚡",o,k,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${M} match${M>1?"s":""} joué${M>1?"s":""}</div>`}
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
    </style>`}const sn="2026.06.27-1637";async function yi(e,{state:t,navigate:n,toast:r}){var s,d;const p=t.profile;p&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>
      <!-- Invitations de match ami en attente -->
      <div id="match-invite-banner"></div>
      <!-- Invitation match ami en attente -->
      <div id="friend-lobby-banner"></div>

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
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),n(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>n("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){cn(n);return}if(c==="match-random"){n("match",{matchMode:"random"});return}if(c==="match-friend"){n("friends");return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await A.auth.signOut(),window.location.reload()}),zi(t,r),dn(t,r,n),ln(t,r,n))}async function dn(e,t,n){var l,c,i,a;const r=document.getElementById("match-invite-banner");if(!r)return;const{data:p}=await A.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){r.innerHTML="";return}const s=((l=p.inviter)==null?void 0:l.club_name)||((c=p.inviter)==null?void 0:c.pseudo)||"?",d=p.inviter_id;r.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{r.innerHTML="",n("match",{matchMode:"friend",friendId:d,friendName:s})}),(a=document.getElementById("match-inv-decline"))==null||a.addEventListener("click",async()=>{await A.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),r.innerHTML="",t("Invitation refusée","info")})}async function zi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:r,error:p}=await A.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(r!=null&&r.length)){n.innerHTML="";return}const s=r.length,d=r.slice(0,2).map(c=>{var i;return((i=c.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";n.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Li(e,t,()=>zi(e,t))})}async function ln(e,t,n){var c,i;const r=document.getElementById("friend-lobby-banner");if(!r)return;const{data:p}=await A.from("friend_match_lobbies").select("id, inviter_id, created_at").eq("invitee_id",e.user.id).eq("status","waiting").order("created_at",{ascending:!1}).limit(1);if(!(p!=null&&p.length)){r.innerHTML="";return}const s=p[0],{data:d}=await A.from("users").select("pseudo, club_name").eq("id",s.inviter_id).single(),l=(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"Un ami";r.innerHTML=`
    <div id="friend-lobby-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1a0a2e,#3d1a6e);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 14px rgba(100,50,200,0.45);
      animation:friendReqPulse 2s ease-in-out infinite;
    ">
      <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${l} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Rejoindre le salon d'attente</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button id="lobby-accept" style="padding:8px 14px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-weight:900;font-size:13px;cursor:pointer">Rejoindre</button>
        <button id="lobby-decline" style="padding:8px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:13px;cursor:pointer">✕</button>
      </div>
    </div>`,(c=document.getElementById("lobby-accept"))==null||c.addEventListener("click",()=>{r.innerHTML="",n("match",{matchMode:"friend",friendId:s.inviter_id,lobbyId:s.id})}),(i=document.getElementById("lobby-decline"))==null||i.addEventListener("click",async()=>{await A.from("friend_match_lobbies").update({status:"cancelled"}).eq("id",s.id),r.innerHTML="",t("Invitation refusée","info")})}function cn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const r=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",r),n.addEventListener("click",p=>{p.target===n&&r()}),n.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{r(),e("match",{matchMode:p.dataset.mode})})})}const Be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function be(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const hi=["ATT","MIL","DEF","GK"];function Mi(e){let t=0;const n=e.length;for(let r=0;r<n;r++)for(let p=r+1;p<n;p++){const s=e[r],d=e[p];if(!s||!d)continue;const l=s._col!=null&&d._col!=null&&s._col===d._col,c=s._col!=null&&d._col!=null&&Math.abs(s._col-d._col)===1,i=hi.indexOf(s._line||s.job),a=hi.indexOf(d._line||d.job),f=Math.abs(i-a)===1;if(!((s._line||s.job)===(d._line||d.job)&&c||l&&f))continue;const E=s.country_code&&d.country_code&&s.country_code===d.country_code,o=s.club_id&&d.club_id&&s.club_id===d.club_id;E&&o?t+=2:(E||o)&&(t+=1)}return t}function Nt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;return s+(Number(l==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),r=Mi(e);let p=n+r;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:n,links:r,total:Math.max(0,p)}}function Rt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;let c=0;return l==="GK"?c=Number(d.note_g)||0:l==="MIL"?c=Number(d.note_m)||0:c=Number(d.note_d)||0,s+c+(d.boost||0)},0),r=Mi(e);let p=n+r;return t.stolenNote&&(p-=t.stolenNote),{base:n,links:r,total:Math.max(0,p)}}function Pt(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Si(e,t,n="easy"){const r=e.filter(d=>!d.used);if(!r.length)return[];const p=[...r].sort((d,l)=>{const c=t==="attack"?be(d,"ATT"):d._line==="GK"?be(d,"GK"):be(d,"DEF");return(t==="attack"?be(l,"ATT"):l._line==="GK"?be(l,"GK"):be(l,"DEF"))-c});let s=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(s,p.length,3))}function pn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const Ci={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ct=["GK","DEF","MIL","ATT"],un=["Tous","GK","DEF","MIL","ATT"],fn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},si={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ji(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Mt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,m;const n=e.player;if(!n)return"";const r=n.job||"ATT",p=At[r],s=Ci[n.rarity]||"#ccc",d=Mt(n,r),l=n.job2?Mt(n,n.job2):null,c=n.job2?At[n.job2]:null,i=ji(n),a=si[n.country_code]||n.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${e.id}">
    ${t}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
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
            fill="${c}" stroke="white" stroke-width="1.5"/>
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
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${a}</div>
        ${(f=n.clubs)!=null&&f.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=n.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function bi(e){const t=e.job||"ATT",n=Mt(e,t),r=si[e.country_code]||e.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${n}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${r}</div>
      </div>
    </div>
  </div>`}async function gn(e,t){const{state:n,navigate:r,toast:p,openModal:s,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await A.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(R=>R.card_type==="player"&&R.player),a=(l||[]).filter(R=>R.card_type==="game_changer"),f=(l||[]).filter(R=>R.card_type==="formation"),{data:m}=await A.from("gc_definitions").select("name,gc_type,color,effect,image_url"),b={};(m||[]).forEach(R=>{b[R.name]=R});const E=Object.keys(oi),o=Object.keys(Be),k={};i.forEach(R=>{const N=R.player.id;k[N]=(k[N]||0)+1}),new Set(Object.keys(k).map(R=>String(R)));const M=new Set(f.map(R=>R.formation)),S=new Set(a.map(R=>R.gc_type));let j="player",O="Tous",C="",z=!1;function q(){return[...i].sort((R,N)=>{const W=Ct.indexOf(R.player.job),P=Ct.indexOf(N.player.job);return W!==P?W-P:(R.player.surname_encoded||"").localeCompare(N.player.surname_encoded||"")})}function oe(){return[...c||[]].sort((R,N)=>{const W=Ct.indexOf(R.job),P=Ct.indexOf(N.job);return W!==P?W-P:(R.surname_encoded||"").localeCompare(N.surname_encoded||"")})}function pe(){return q().filter(R=>{const N=R.player,W=O==="Tous"||N.job===O,P=!C||`${N.firstname} ${N.surname_encoded}`.toLowerCase().includes(C);return W&&P})}function ae(){return oe().filter(R=>{const N=O==="Tous"||R.job===O,W=!C||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(C);return N&&W})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${a.length})</div>
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
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${C}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${un.map(N=>`
            <button class="filter-btn" data-job="${N}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${N===O?"var(--green)":"var(--gray-200)"};
                background:${N===O?"var(--green)":"#fff"};
                color:${N===O?"#fff":"var(--gray-600)"}">
              ${N}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${z?"var(--yellow)":"var(--gray-200)"};
              background:${z?"var(--yellow)":"#fff"};
              color:${z?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${z?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",N=>{C=N.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(N=>{N.addEventListener("click",()=>{O=N.dataset.job,B(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{z=!z,B(),Y()})):(R.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${z?"var(--yellow)":"var(--gray-200)"};
              background:${z?"var(--yellow)":"#fff"};
              color:${z?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${z?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{z=!z,B(),Y()})))}function Y(){const R=document.getElementById("col-grid");R&&(j==="player"?ge(R):j==="formation"?me(R):xe(R))}function ee(R,N,W,P,X){X=X||"#7a28b8";const ue=document.getElementById("col-grid"),te=document.getElementById("col-big");if(!ue||!te)return;var Ae=0;function ke(){te.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+N(R[Ae])+"</div>";var ve=te.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ve&&ve.addEventListener("click",function(){P(R[Ae])}),requestAnimationFrame(function(){var _e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!_e||!te)){var we=te.clientHeight-8,Le=te.clientWidth-24,Ge=_e.offsetHeight,Se=_e.offsetWidth;if(Ge>0&&Se>0&&we>40){var Ke=Math.min(we/Ge,Le/Se,1);_e.style.transform="scale("+Ke.toFixed(3)+")",_e.style.transformOrigin="top center"}}}),ue.innerHTML=R.map(function(_e,we){return'<div class="col-mini-item" data-idx="'+we+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(we===Ae?X:"transparent")+';transition:border-color .15s;overflow:hidden">'+W(_e,we===Ae)+"</div>"}).join(""),ue.querySelectorAll(".col-mini-item").forEach(function(_e){_e.addEventListener("click",function(){Ae=Number(_e.dataset.idx),ke(),_e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function F(R){var N=.54,W=Math.round(140*N),P=Math.round(310*N),X;if(!R||R._fake){var ue=R?R.player:null;if(!ue)return"";X=bi(ue)}else X=Vt(R,"");return'<div style="width:'+W+"px;height:"+P+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+N+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+X+"</div></div>"}function Q(R,N,W){N=N||100,W=W||140;var P=St[R]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ue=Math.max(3,Math.round(N*.06)),te=Object.entries(P).map(function(ke){var ve=ke[0],_e=ke[1],we=ve.replace(/\d+$/,""),Le=X[we]||"#888",Ge=Math.round(_e.x*N),Se=Math.round(_e.y*W);return'<circle cx="'+Ge+'" cy="'+Se+'" r="'+ue+'" fill="'+Le+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ae=Math.max(1,Math.round(N/50));return'<svg viewBox="0 0 '+N+" "+W+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+N+'" height="'+W+'" fill="#1A6B3C"/><rect x="'+Math.round(N*.2)+'" y="'+Math.round(W*.02)+'" width="'+Math.round(N*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/><line x1="0" y1="'+Math.round(W*.5)+'" x2="'+N+'" y2="'+Math.round(W*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><ellipse cx="'+Math.round(N*.5)+'" cy="'+Math.round(W*.5)+'" rx="'+Math.round(N*.18)+'" ry="'+Math.round(W*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><rect x="'+Math.round(N*.2)+'" y="'+Math.round(W*.82)+'" width="'+Math.round(N*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/>'+te+"</svg>"}function K(R,N,W){var P=W>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+W+"</div>":"",X=N?'data-form-id="'+N.id+'"':"",ue=R.length>7?14:R.length>5?16:19,te=!!N;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(te?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(te?"":"filter:grayscale(1);opacity:0.5")+'">'+P+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(te?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ue+"px;font-weight:900;color:"+(te?"#1A6B3C":"#aaa")+';line-height:1">'+R+'</div></div><div style="flex:1;overflow:hidden;background:'+(te?"#1A6B3C":"#ccc")+'">'+Q(R,140,220)+"</div></div>"}function re(R,N){var W=.54,P=Math.round(140*W),X=Math.round(305*W),ue=Math.round(X*.22),te=X-ue,Ae=R.length>7?5:7,ke=Q(R,P,te),ve=N?"1.5px solid #2a7a40":"1px solid #ddd",_e=N?"":"filter:grayscale(1);opacity:0.45;",we=N?"#1A6B3C":"#bbb",Le="#fff";return'<div style="width:'+P+"px;height:"+X+"px;border-radius:6px;border:"+ve+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+_e+'"><div style="height:'+ue+"px;background:"+we+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ae+"px;font-weight:900;color:"+Le+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(P-4)+'px">'+R+'</span></div><div style="height:'+te+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div>"}function ge(R){if(z){const N=ae();if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const W=N.map(P=>i.find(X=>X.player.id===P.id)||{_fake:!0,player:P,id:"fake-"+P.id});ee(W,P=>P._fake?bi(P.player):Vt(P,""),P=>P._fake?F({player:P.player,id:"x",_fake:!0}):F(P),P=>{P._fake||vi(P,i,k,t)},"#1A6B3C")}else{const N=pe();if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const W={},P=[];N.forEach(X=>{W[X.player.id]||(W[X.player.id]=!0,P.push(X))}),ee(P,X=>{const ue=k[X.player.id]||1,te=ue>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ue}</div>`:"",ke=i.filter(ve=>ve.player.id===X.player.id&&ve.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(X,te+ke)},X=>F(X),X=>vi(X,i,k,t),"#1A6B3C")}}function me(R){const N=z?E:[...M];if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const W=N.map(P=>({formation:P,card:f.find(X=>X.formation===P)||null,owned:M.has(P)}));ee(W,({formation:P,card:X,owned:ue})=>K(P,ue?X:null,ue?f.filter(te=>te.formation===P).length:0),({formation:P,owned:X})=>re(P,X),({card:P,owned:X})=>{X&&P&&xn(P,f,t,s)},"#1A6B3C")}function xe(R){const N=Object.keys(b),W=z?N.length?N:o:[...S];if(!W.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const P=W.map(X=>({type:X,gc:Be[X]||{icon:"⚡",desc:""},def:b[X]||null,owned:S.has(X),card:a.find(ue=>ue.gc_type===X)||null}));ee(P,({type:X,gc:ue,def:te,owned:Ae,card:ke})=>{const ve=Ae?a.filter(h=>h.gc_type===X).length:0,_e=ve>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ve}</div>`:"",we=(te==null?void 0:te.gc_type)==="ultra_game_changer",Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ge={purple:"#b06ce0",light_blue:"#00d4ef"},Se=Le[te==null?void 0:te.color]||Le.purple,Ke=Ge[te==null?void 0:te.color]||Ge.purple,u=(te==null?void 0:te.effect)||ue.desc||"",g=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return Ae&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ke};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ke}66;cursor:pointer">
          ${_e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${we?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${g?`<img src="${g}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ue.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${u.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ue.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:ue,def:te,owned:Ae})=>Ae?(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54),_e=Math.round(ve*.65),we=Math.round(ve*.18),Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ge={purple:"#9b59b6",light_blue:"#00bcd4"},Se=Le[te==null?void 0:te.color]||Le.purple,Ke=Ge[te==null?void 0:te.color]||Ge.purple,u=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:${Se};border:1px solid ${Ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:${we}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ke-6}px">${X}</span></div><div style="height:${_e}px;display:flex;align-items:center;justify-content:center">${u?`<img src="${u}" style="max-width:${ke-8}px;max-height:${_e-4}px;object-fit:contain">`:`<span style="font-size:24px">${ue.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((te==null?void 0:te.effect)||ue.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54);return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ue.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${X}</span></div>`})(),({type:X,owned:ue,def:te})=>{ue&&mn(X,te,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(R=>{R.addEventListener("click",()=>{j=R.dataset.tab,O="Tous",C="",z=!1,e.querySelectorAll(".col-tab-btn").forEach(N=>{const W=N.dataset.tab===j;N.style.borderBottomColor=W?"var(--green)":"transparent",N.style.color=W?"var(--green)":"var(--gray-600)"}),B(),Y()})}),B(),Y()}function mn(e,t,n){const r=Be[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,a=(t==null?void 0:t.effect)||r.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${p?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${r.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${a}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _t=1e3;function xn(e,t,n,r){var o,k,M;const{state:p,toast:s,closeModal:d,navigate:l,refreshProfile:c}=n,i=e.formation,a={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const S=St[i]||{},j=oi[i]||[],O=290,C=360,z=20;function q(pe){const ae=S[pe];return ae?{x:ae.x*O,y:ae.y*C}:null}let oe=`<svg width="${O}" height="${C}" viewBox="0 0 ${O} ${C}" xmlns="http://www.w3.org/2000/svg">`;for(const[pe,ae]of j){const B=q(pe),Y=q(ae);!B||!Y||(oe+=`<line x1="${B.x}" y1="${B.y}" x2="${Y.x}" y2="${Y.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const pe of Object.keys(S)){const ae=q(pe);if(!ae)continue;const B=pe.replace(/\d+/,""),Y=a[B]||"#555";oe+=`<circle cx="${ae.x}" cy="${ae.y}" r="${z}" fill="${Y}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,oe+=`<text x="${ae.x}" y="${ae.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>`}return oe+="</svg>",oe}const m=t.filter(S=>S.formation===i),b=m.length,E=!e.is_for_sale;r(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${b-1} carte${b-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${b<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(o=document.getElementById("direct-sell-form-btn"))==null||o.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${_t.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const S=m.find(O=>!O.is_for_sale)||m[0];if(!S){s("Aucune carte à vendre","error");return}const{error:j}=await A.from("cards").delete().eq("id",S.id);if(j){s(j.message,"error");return}await A.from("users").update({credits:(p.profile.credits||0)+_t}).eq("id",p.profile.id),await c(),s(`+${_t.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(k=document.getElementById("market-sell-form-btn"))==null||k.addEventListener("click",async()=>{const S=parseInt(document.getElementById("sell-price-form").value);if(!S||S<1){s("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:S}).eq("id",e.id),await A.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:S}),s("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(M=document.getElementById("cancel-sell-form-btn"))==null||M.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),d(),l("collection")})}async function vi(e,t,n,r){var ae,B,Y,ee,F,Q;const{state:p,toast:s,openModal:d,closeModal:l,navigate:c,refreshProfile:i}=r,a=e.player,f=t.filter(K=>K.player.id===a.id),m=f.length,b=fn[a.rarity]||1e3,E=a.rarity!=="legende",o=ji(a),k=Mt(a,a.job),M=a.job2?Mt(a,a.job2):null,S=At[a.job]||"#1A6B3C",j=a.job2?At[a.job2]:null,O=Ci[a.rarity]||"#ccc",C=si[a.country_code]||a.country_code||"",z=f.map(K=>K.id);let q={};if(z.length){const{data:K}=await A.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",z).order("transferred_at",{ascending:!0});(K||[]).forEach(re=>{q[re.card_id]||(q[re.card_id]=[]),q[re.card_id].push(re)})}const oe=K=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${K.club_name} <span style="color:var(--gray-600)">(${K.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,pe=z.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${m>1?`(${m} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${f.map((K,re)=>{const ge=q[K.id]||[];return ge.length?`
            <div>
              ${m>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${re+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${ge.map(oe).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";d(`${a.firstname} ${a.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${O};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${a.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(a.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${S}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${S}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${k}</text>
            </svg>
            ${M!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${j}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${M}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${a.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${C}</div>
            ${(ae=a.clubs)!=null&&ae.logo_url?`<img src="${a.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((B=a.clubs)==null?void 0:B.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${O}">${a.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${a.job}${a.job2?" / "+a.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",a.note_g],["DEF",a.note_d],["MIL",a.note_m],["ATT",a.note_a]].map(([K,re])=>{const ge=At[K],me=Number(re)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
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
    ${pe}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${b.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E&&!e.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${a.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Y=document.getElementById("close-detail"))==null||Y.addEventListener("click",l),(ee=document.getElementById("direct-sell-btn"))==null||ee.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${a.surname_encoded} pour ${b.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const K=f.find(ge=>!ge.is_for_sale)||f[0];if(!K){s("Aucune carte à vendre","error");return}const{error:re}=await A.from("cards").delete().eq("id",K.id);if(re){s(re.message,"error");return}await A.from("users").update({credits:(p.profile.credits||0)+b}).eq("id",p.profile.id),await i(),s(`+${b.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(F=document.getElementById("market-sell-btn"))==null||F.addEventListener("click",async()=>{const K=parseInt(document.getElementById("sell-price").value);if(!K||K<1){s("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:K}).eq("id",e.id),await A.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:K}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(Q=document.getElementById("cancel-sell-btn"))==null||Q.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const Dt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ot={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ot(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Fi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Bi(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function yn(e,t=44,n=58){var b;const r=e?Ot(e):null,p=e?Bi(e):null,s=Fi(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",l=ot[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,a=Math.round(n*.19),f=Math.round(n*.25),m=n-a-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(b=e==null?void 0:e.clubs)!=null&&b.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Xt(e,t){const{state:n,navigate:r,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!d)return;const{data:l,error:c}=await A.from("decks").insert({owner_id:n.profile.id,name:d}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),wi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>wi(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",d.dataset.name);if(!l||l===d.dataset.name)return;const{error:c}=await A.from("decks").update({name:l}).eq("id",d.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Xt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await A.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:l}=await A.from("decks").delete().eq("id",d.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Xt(e,t)})})}async function wi(e,t,n){const{state:r,toast:p}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("*").eq("id",e).single(),{data:d}=await A.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),l=(d||[]).filter(b=>b.card_type==="player"&&b.player),c=(d||[]).filter(b=>b.card_type==="formation"),i=c.map(b=>b.formation).filter(Boolean),{data:a}=await A.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:i};(a||[]).forEach(b=>{b.is_starter?m.slots[b.position]=b.card_id:m.subs.includes(b.card_id)||m.subs.push(b.card_id)}),lt(t,m,n)}function lt(e,t,n){var c;const{navigate:r}=n;Dt[t.formation];const p=$i(t.formation),s=p.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Dt),l=t.subs.map(i=>t.playerCards.find(a=>a.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${l.map(i=>{const a=i.player;return`<div style="position:relative;flex-shrink:0">
            ${yn(a,44,58)}
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
  </div>`,hn(e,t,p,n),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const a=$i(t.formation),f={};a.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,lt(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>wn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(a=>a!==i.dataset.removeSub),lt(e,t,n)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{vn(t,e,n)})}function hn(e,t,n,r){const p=e.querySelector("#deck-field");if(!p)return;const s=St[t.formation]||{},d=Ai(t.formation)||[],l={};for(const M of n){const S=t.slots[M],j=S?t.playerCards.find(O=>O.id===S):null;l[M]=j?j.player:null}const c=300,i=300,a=48,f=64,m=13,b=16,E=38;function o(M){const S=s[M];return S?{x:S.x*c,y:S.y*i}:null}let k="";for(const[M,S]of d){const j=o(M),O=o(S);if(!j||!O)continue;const C=l[M]?{...l[M],club_id:l[M].club_id,country_code:l[M].country_code,rarity:l[M].rarity}:null,z=l[S]?{...l[S],club_id:l[S].club_id,country_code:l[S].country_code,rarity:l[S].rarity}:null,q=Qe(C,z);q==="#ff3333"||q==="#cc2222"?k+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${q}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(k+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${q}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,k+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${q}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const M of n){const S=o(M);if(!S)continue;const j=l[M],O=M.replace(/\d+/,""),C=ot[O]||"#555",z=(S.x-a/2).toFixed(1),q=(S.y-f/2).toFixed(1),oe={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[j==null?void 0:j.rarity]||"#aaa";if(j){const pe=Ot(j),ae=Bi(j),B=Fi(j.country_code),Y=Number(O==="GK"?j.note_g:O==="DEF"?j.note_d:O==="MIL"?j.note_m:j.note_a)||0,ee=f-m-b;k+=`<defs><clipPath id="dcp-${M}"><rect x="${z}" y="${(S.y-f/2+m).toFixed(1)}" width="${a}" height="${ee}"/></clipPath></defs>`,k+=`<rect x="${z}" y="${q}" width="${a}" height="${f}" rx="5" fill="${C}"/>`,pe&&(k+=`<image href="${pe}" x="${z}" y="${(S.y-f/2+m).toFixed(1)}" width="${a}" height="${ee}" clip-path="url(#dcp-${M})" preserveAspectRatio="xMidYMin slice"/>`),k+=`<rect x="${z}" y="${q}" width="${a}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,k+=`<text x="${S.x.toFixed(1)}" y="${(S.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.surname_encoded||"").slice(0,9)}</text>`;const F=(S.y+f/2-b).toFixed(1);k+=`<rect x="${z}" y="${F}" width="${a}" height="${b}" fill="rgba(255,255,255,0.93)"/>`,B&&(k+=`<image href="${B}" x="${(S.x-21).toFixed(1)}" y="${(S.y+f/2-b+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),k+=`<text x="${S.x.toFixed(1)}" y="${(S.y+f/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,ae&&(k+=`<image href="${ae}" x="${(S.x+a/2-14).toFixed(1)}" y="${(S.y+f/2-b+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),k+=`<rect x="${z}" y="${q}" width="${a}" height="${f}" rx="5" fill="none" stroke="${oe}" stroke-width="2"/>`}else k+=`<rect x="${z}" y="${q}" width="${a}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,k+=`<text x="${S.x.toFixed(1)}" y="${S.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,k+=`<text x="${S.x.toFixed(1)}" y="${(S.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${O}</text>`;k+=`<rect x="${z}" y="${q}" width="${a}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${M}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-E} ${-E} ${c+E*2} ${i+E*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${k}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(M=>{M.addEventListener("click",()=>bn(M.dataset.pos,t,e,r))})}function bn(e,t,n,r){var m,b,E;const{openModal:p,closeModal:s}=r,d=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(o=>o.id===l):null;(m=c==null?void 0:c.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,k])=>{var S;if(o===e||!k)return;const M=t.playerCards.find(j=>j.id===k);(S=M==null?void 0:M.player)!=null&&S.id&&i.add(M.player.id)}),t.subs.forEach(o=>{var M;const k=t.playerCards.find(S=>S.id===o);(M=k==null?void 0:k.player)!=null&&M.id&&i.add(k.player.id)});const a=new Set,f=t.playerCards.filter(o=>{const k=o.player;return!(k.job===d||k.job2===d)||i.has(k.id)||a.has(k.id)?!1:(a.add(k.id),!0)});f.sort((o,k)=>{const M=d==="GK"?o.player.note_g:d==="DEF"?o.player.note_d:d==="MIL"?o.player.note_m:o.player.note_a;return(d==="GK"?k.player.note_g:d==="DEF"?k.player.note_d:d==="MIL"?k.player.note_m:k.player.note_a)-M}),p(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var O,C;const k=o.player,M=d==="GK"?k.note_g:d==="DEF"?k.note_d:d==="MIL"?k.note_m:k.note_a,S=Ot(k),j={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[k.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ot[d]}">
            ${S?`<img src="${S}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ot[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${k.firstname} ${k.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${k.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${k.country_code}">
              ${(O=k.clubs)!=null&&O.logo_url?`<img src="${k.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((C=k.clubs)==null?void 0:C.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${k.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ot[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${j};flex-shrink:0">
            ${M}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",s),(E=document.getElementById("remove-player"))==null||E.addEventListener("click",()=>{delete t.slots[e],s(),lt(n,t,r)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,s(),lt(n,t,r)})})}function vn(e,t,n){var c;const{openModal:r,closeModal:p}=n,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const a=e.playerCards.find(m=>m.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)}),e.subs.forEach(i=>{var f;const a=e.playerCards.find(m=>m.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)});const d=new Set,l=e.playerCards.filter(i=>{var a,f,m;return s.has((a=i.player)==null?void 0:a.id)||d.has((f=i.player)==null?void 0:f.id)?!1:(d.add((m=i.player)==null?void 0:m.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var b;const a=i.player,f=Ot(a),m=a.job==="GK"?a.note_g:a.job==="DEF"?a.note_d:a.job==="MIL"?a.note_m:a.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ot[a.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${a.firstname} ${a.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.job} · ${a.country_code} · ${((b=a.clubs)==null?void 0:b.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ot[a.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),lt(t,e,n)})})}async function wn(e,t){const{state:n,toast:r,navigate:p}=t,s=e.formationCards.find(c=>c.formation===e.formation),d=(s==null?void 0:s.id)||e.formationCardId;await A.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await A.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,i],a)=>{l.push({deck_id:e.deckId,card_id:i,position:c,is_starter:!0,slot_order:a})}),e.subs.forEach((c,i)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:c}=await A.from("deck_cards").insert(l);if(c){r(c.message,"error");return}}r("Deck enregistré ✅","success"),p("decks")}function $i(e){const t=Dt[e]||Dt["4-4-2"],n=["GK1"];for(let r=1;r<=t.DEF;r++)n.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)n.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)n.push(`ATT${r}`);return n}async function Di(){const{data:e}=await A.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await A.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(r=>r.booster_id===n.id)}))}function $n(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,p)=>r+Number(p.percentage),0);let n=Math.random()*t;for(const r of e)if(n-=Number(r.percentage),n<=0)return r;return e[e.length-1]}const qi=()=>Object.keys(St),_n=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Jt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function kn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const _i={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},En={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Tn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ki(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function An(e){var a,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",r=_i[n],p=En[t.rarity]||"#ccc",s=ki(t,n),d=t.job2?ki(t,t.job2):null,l=t.job2?_i[t.job2]:null,c=kn(t),i=Tn[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${p};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${r}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${r}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${c?`<img src="${c}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(a=t.clubs)!=null&&a.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Gi(e){var p;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const n=((p=Object.entries(t).sort((s,d)=>d[1]-s[1])[0])==null?void 0:p[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function In(e,{state:t,navigate:n,toast:r}){var d;const p=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Di()).map(Gi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=_n.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${p.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(l=>{const c=l.cost===0||p>=l.cost;return`<div class="booster-card ${c?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
            ${c?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(i=>i.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Ln(c,{state:t,toast:r,navigate:n,container:e})}catch(i){r(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const i=s.find(a=>a.id===l.dataset.boosterId);Cn(i)})})}async function Ln(e,{state:t,toast:n,navigate:r,container:p}){var a;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await Bn()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await A.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((s||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((s||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let c=[];if((a=e.rates)!=null&&a.length)c=await Qt(t.profile,e);else{const f=e.type||"player";f==="player"?c=await Ni(t.profile,e.cardCount,e.cost):f==="game_changer"?c=await Ri(t.profile,e.cardCount,e.cost):f==="formation"?c=await Pi(t.profile,e.cost):c=await Qt(t.profile,e)}c.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=d.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await A.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Oi(c,e,r)}function zn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Mn(e,t){let n;switch(t){case"legende":n=e.filter(r=>r.rarity==="legende"),n.length||(n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),n.length||(n=e.filter(r=>Ze(r)>=6));break;case"special":n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),n.length||(n=e.filter(r=>Ze(r)>=6));break;case"normal_high":n=e.filter(r=>r.rarity==="normal"&&Ze(r)>=6),n.length||(n=e.filter(r=>Ze(r)>=6));break;default:n=e.filter(r=>r.rarity==="normal"&&Ze(r)>=1&&Ze(r)<=5),n.length||(n=e.filter(r=>r.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function Qt(e,t){if(t.cost>0){const{error:l}=await A.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await A.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),r=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),s=new Set,d=[];for(let l=0;l<(t.cardCount||5);l++){const c=$n(t.rates);if(c){if(c.card_type==="player"){const i=S=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[S]||S,a=c.rarity?i(c.rarity):null;let f=A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(f=f.eq("rarity",a));const{data:m}=await f;let b=m||[];if((c.note_min||c.note_max)&&(b=b.filter(S=>{const j=Math.max(Number(S.note_g)||0,Number(S.note_d)||0,Number(S.note_m)||0,Number(S.note_a)||0);return(!c.note_min||j>=c.note_min)&&(!c.note_max||j<=c.note_max)})),b.length||(c.note_min||c.note_max?(b=m||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):b=m||[]),!b.length)continue;let E=b.filter(S=>!s.has(S.id));E.length||(E=b);const o=E[Math.floor(Math.random()*E.length)];s.add(o.id);const k=r.has(o.id),{data:M}=await A.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();M&&(d.push({...M,player:o,isDuplicate:k}),A.rpc("record_transfer",{p_card_id:M.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:i}=await A.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=a[Math.floor(Math.random()*a.length)].name,{data:b}=await A.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();b&&d.push(b)}else if(c.card_type==="formation"){const i=qi(),a=i[Math.floor(Math.random()*i.length)],f=p.has(a),{data:m}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();m!=null&&m[0]&&d.push({...m[0],isDuplicate:f})}}}return d}async function Ni(e,t,n){if(n>0){const{error:i}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:r}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=r.filter(i=>i.job==="GK"),s=r.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const a=i===0&&d?p:i===0?s:r,f=zn(),m=Mn(a,f);m&&l.push(m)}d&&await A.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await A.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(c||[]).forEach((i,a)=>{A.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[a].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,a)=>({...c[a],player:i}))}async function Ri(e,t,n){const{error:r}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(r)throw r;const{data:p}=await A.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=p!=null&&p.length?p:Object.keys(Jt).map(a=>({name:a,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const a=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:a.name,gc_definition_id:a.id||null}}),{data:l,error:c}=await A.from("cards").insert(d).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(a=>{const f=p==null?void 0:p.find(m=>m.name===a.gc_type||m.id===a.gc_definition_id);return{...a,_gcDef:f||null}})}async function Pi(e,t){const{error:n}=await A.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:r}=await A.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((r||[]).map(a=>a.formation)),s=qi(),d=s[Math.floor(Math.random()*s.length)],l=p.has(d),{data:c,error:i}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(c||[]).map(a=>({...a,isDuplicate:l}))}function Oi(e,t,n,r=null){var Y,ee;if(!e||e.length===0){const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",F.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(F),(Y=F.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>F.remove());return}e=[...e].sort((F,Q)=>{const K=F.player?Ze(F.player):-1;return(Q.player?Ze(Q.player):-1)-K});const p=document.createElement("div");p.id="booster-anim-overlay",p.innerHTML=`
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
  `,document.body.appendChild(p);let s=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let c=!1;const i=F=>F.touches&&F.touches[0]?F.touches[0].clientX:F.clientX;function a(F){s||(c=!0,l.style.opacity="1",f(F))}function f(F){if(!c||s)return;const Q=d.getBoundingClientRect(),K=i(F)-Q.left,re=Math.max(0,Math.min(1,K/Q.width));l.style.width=re*Q.width+"px",re>=.82&&b()}function m(){s||(c=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function b(){var Q;if(s)return;s=!0,c=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const F=document.getElementById("cut-hint");F&&(F.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",M(0)},620)}d.addEventListener("pointerdown",a),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),d.addEventListener("touchstart",a,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let E=0,o=!1;const k=new Set;function M(F){E=F,document.getElementById("reveal-phase").style.display="flex",S(),j(F,0),oe()}function S(){const F=document.getElementById("card-dots");F&&(F.innerHTML=e.map((Q,K)=>`<div class="card-dot" data-i="${K}" style="width:8px;height:8px;border-radius:50%;background:${K===E?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),F.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>C(parseInt(Q.dataset.i)))))}function j(F,Q){var W;const K=e[F],re=document.getElementById("card-counter"),ge=document.getElementById("card-track");re&&(re.textContent=`Carte ${F+1} / ${e.length}`);const me=K.card_type==="player"&&((W=K.player)==null?void 0:W.rarity)==="legende",xe=!k.has(F);k.add(F);let R=0;if(K.card_type==="player"&&K.player){const P=K.player,X=P.job||"ATT";R=Number(X==="GK"?P.note_g:X==="DEF"?P.note_d:X==="MIL"?P.note_m:P.note_a)||0}const N=P=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${me?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Sn(K)}</div>
          ${K.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const X=document.getElementById("current-card-wrap");Q!==0?(X.style.transition="none",X.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{X.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",X.style.transform="translateX(0)"})):X.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),P||me?ae():B(),S()};xe&&R>6&&K.card_type==="player"&&K.player?O(K,()=>N(!0)):N(!1)}function O(F,Q){var N;o=!0;const K=F.player,re=`https://flagsapi.com/${K.country_code}/flat/64.png`,ge=(N=K.clubs)==null?void 0:N.logo_url,me=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!me||!xe){o=!1,Q();return}me.style.display="flex";const R=()=>{const W=xe.firstElementChild;W&&(W.classList.remove("wo-in"),W.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(R,2e3),setTimeout(()=>{var W;xe.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((W=K.clubs)==null?void 0:W.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(R,4450),setTimeout(()=>{me.style.display="none",xe.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},4900)}function C(F){if(o||F<0||F>=e.length||F===E)return;const Q=F>E?1:-1;E=F,j(F,Q)}function z(){C(E+1)}function q(){C(E-1)}function oe(){const F=document.getElementById("card-viewport");if(!F||F._swipeBound)return;F._swipeBound=!0;let Q=0,K=0,re=0,ge=!1;const me=P=>P.touches?P.touches[0].clientX:P.clientX,xe=P=>P.touches?P.touches[0].clientY:P.clientY,R=P=>{ge=!0,Q=me(P),K=xe(P),re=0},N=P=>{if(!ge)return;re=me(P)-Q;const X=xe(P)-K;if(Math.abs(re)<Math.abs(X))return;const ue=document.getElementById("current-card-wrap");ue&&(ue.style.transition="none",ue.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},W=()=>{if(!ge)return;ge=!1;const P=document.getElementById("current-card-wrap"),X=55;re<=-X&&E<e.length-1?z():re>=X&&E>0?q():P&&(P.style.transition="transform .2s ease",P.style.transform="translateX(0)")};F.addEventListener("pointerdown",R),F.addEventListener("pointermove",N),F.addEventListener("pointerup",W),F.addEventListener("pointercancel",W),F.addEventListener("touchstart",R,{passive:!0}),F.addEventListener("touchmove",N,{passive:!0}),F.addEventListener("touchend",W),F.addEventListener("click",P=>{if(Math.abs(re)>8)return;const X=F.getBoundingClientRect();P.clientX-X.left>X.width/2?z():q()})}let pe=null;function ae(){const F=document.getElementById("fireworks-canvas");if(!F)return;F.width=window.innerWidth,F.height=window.innerHeight;const Q=F.getContext("2d"),K=[];function re(){const me=Math.random()*F.width,xe=Math.random()*F.height*.6,R=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],N=R[Math.floor(Math.random()*R.length)];for(let W=0;W<60;W++){const P=Math.PI*2/60*W,X=2+Math.random()*5;K.push({x:me,y:xe,vx:Math.cos(P)*X,vy:Math.sin(P)*X,alpha:1,color:N,size:2+Math.random()*3})}}re(),pe=setInterval(re,600);function ge(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,F.width,F.height);for(let me=K.length-1;me>=0;me--){const xe=K[me];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){K.splice(me,1);continue}Q.globalAlpha=xe.alpha,Q.fillStyle=xe.color,Q.beginPath(),Q.arc(xe.x,xe.y,xe.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(pe!==null||K.length>0)&&requestAnimationFrame(ge)}}ge()}function B(){pe!==null&&(clearInterval(pe),pe=null);const F=document.getElementById("fireworks-canvas");F&&F.getContext("2d").clearRect(0,0,F.width,F.height)}if(r){const F=document.getElementById("reveal-phase"),Q=F==null?void 0:F.querySelector('div[style*="display:flex"][style*="gap:10px"]');Q&&(Q.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ee=document.getElementById("reveal-next"))==null||ee.addEventListener("click",()=>{B(),p.remove(),r()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{B(),p.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{B(),p.remove(),n("boosters")})}function Sn(e){var t,n;if(e.card_type==="player"&&e.player)return An(e);if(e.card_type==="game_changer"){const r=e._gcDef,p=(r==null?void 0:r.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[r==null?void 0:r.color]||s.purple,c=d[r==null?void 0:r.color]||d.purple,i=(r==null?void 0:r.name)||e.gc_type||"Game Changer",a=(r==null?void 0:r.effect)||((t=Jt[e.gc_type])==null?void 0:t.desc)||"",f=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,m=((n=Jt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${a.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Cn(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
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
      </div>`,document.body.appendChild(r),r.addEventListener("click",d=>{d.target===r&&r.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>r.remove());return}jn()}function jn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Fn="simulation",Hi="VOTRE_ZONE_ID";function Bn(){switch(Fn){case"propellerads":return Dn();case"adsense":return qn();default:return di()}}function di(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{n--;const p=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");p&&(p.textContent=n),s&&(s.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(r),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Dn(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(di());window.propeller.push({zone_id:Hi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function qn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(di());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Hi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function Gn(e,{state:t,navigate:n,toast:r,refreshProfile:p}){var m,b;const{data:s}=await A.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let d=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await A.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Di()).find(k=>(k.name||"").toLowerCase().includes("new player"));o&&(l=Gi(o))}catch(E){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',E)}const c=d.length;let i=0;e.innerHTML=`
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
  </div>`;const a=async()=>{await A.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function f(){var S;if(i>=c||!d.length){await A.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),r("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const E=d[0],{data:o}=await A.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let k=[];try{if(E.type==="formation")k=await Pi(t.profile,0);else if(E.type==="game_changer")k=await Ri(t.profile,E.count||3,0);else if(l&&((S=l.rates)!=null&&S.length)){const j={...l,cost:0,cardCount:E.count||l.cardCount||5};k=await Qt(t.profile,j),E.guaranteeGK&&!t.profile.first_booster_opened&&(k.some(C=>C.player&&C.player.job==="GK")||await Nn(t.profile,k),await A.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else k=await Ni(t.profile,E.count||5,0)}catch(j){r(j.message||"Erreur ouverture booster","error");return}d.shift(),i++,await a();const M=E.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:E.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${c})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Oi(k,M,n,()=>{f()})}(b=document.getElementById("onboard-start"))==null||b.addEventListener("click",()=>f())}async function Nn(e,t){try{const{data:n}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const r=n[Math.floor(Math.random()*n.length)],p=t.findIndex(d=>d.player);if(p===-1)return;const s=t[p];await A.from("cards").update({player_id:r.id}).eq("id",s.id),t[p]={...s,player_id:r.id,player:r}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}const ct={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},pt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,n,r,p){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",p)}function Ie(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Zt(e,t){var r,p;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((r=n.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((p=n.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function it(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function li(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ut(e,t){const n=ct[t]||ct["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,a)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(a.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),c=it(l.length);l.forEach((i,a)=>{i._col=c[a]}),r[d]=l}return r}const s=[...e];for(const d of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[d];i++){let a=s.findIndex(f=>f.job===d);if(a===-1&&(a=s.findIndex(f=>f.job2===d)),a===-1&&(a=0),s[a]){const f={...s[a],_line:d};l.push(f),s.splice(a,1)}}const c=it(l.length);l.forEach((i,a)=>{i._col=c[a]}),r[d]=l}return r}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ne(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,n){const p=new Set,s=t.filter(a=>{const f=a.gc_type||a.id;return p.has(f)?!1:(p.add(f),!0)});let d=[];function l(a,f){const m=a._gcDef,b={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},E={purple:"#9b59b6",light_blue:"#00bcd4"},o=b[m==null?void 0:m.color]||b.purple,k=E[m==null?void 0:m.color]||E.purple;return`<div class="gc-select-card" data-id="${a.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":k};background:${o};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||a.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||a.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/manager-wars/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=a=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(a)};function i(){var f,m,b;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const a=d.length>0;e.innerHTML=`
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
        ${s.map(E=>{const o=d.find(k=>k.gc_type===E.gc_type);return l(E,!!o)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${a?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${a?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${a?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${a?"pointer":"default"};box-shadow:${a?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(E=>{E.addEventListener("click",()=>{const o=E.dataset.id,k=s.find(S=>S.id===o);if(!k)return;const M=d.findIndex(S=>S.gc_type===k.gc_type);M>-1?d.splice(M,1):d.length<3&&d.push(k),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{a&&c(d)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>c([])),(b=e.querySelector("#gc-reset"))==null||b.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}async function Rn(e,t,n){const{state:r,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const d=s.map(a=>a.id),{data:l}=await A.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let c=0;function i(){var S,j,O,C,z;const a=s[c],f=(l||[]).filter(q=>q.deck_id===a.id),m=f.filter(q=>{var oe;return q.is_starter&&((oe=q.card)==null?void 0:oe.player)}).map(q=>Zt(q.card,q.position)),b=f.find(q=>{var oe;return((oe=q.card)==null?void 0:oe.card_type)==="formation"}),E=a.formation||((S=b==null?void 0:b.card)==null?void 0:S.formation)||"4-4-2",o=m.length>=11?ut(m,E):null,k=m.length>=11;We(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${a.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${E} · ${m.length}/11 ${a.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${st(o,E,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((q,oe)=>`<div style="width:7px;height:7px;border-radius:50%;background:${oe===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${k?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${k?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${k?"pointer":"default"}">
          ${k?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const oe=e.querySelector(".deck-preview-wrap svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(j=document.getElementById("prev-deck"))==null||j.addEventListener("click",()=>{c>0&&(c--,i())}),(O=document.getElementById("next-deck"))==null||O.addEventListener("click",()=>{c<s.length-1&&(c++,i())}),(C=document.getElementById("validate-deck"))==null||C.addEventListener("click",()=>{k&&t.navigate("match",{matchMode:n,deckId:a.id})}),(z=document.getElementById("cancel-deck-select"))==null||z.addEventListener("click",()=>{Ne(e),p("home")});const M=document.getElementById("deck-swipe-zone");if(M){let q=0,oe=0;M.addEventListener("touchstart",pe=>{q=pe.touches[0].clientX,oe=pe.touches[0].clientY},{passive:!0}),M.addEventListener("touchend",pe=>{const ae=pe.changedTouches[0].clientX-q,B=pe.changedTouches[0].clientY-oe;Math.abs(ae)<40||Math.abs(ae)<Math.abs(B)||(ae<0&&c<s.length-1?(c++,i()):ae>0&&c>0&&(c--,i()))},{passive:!0})}}i()}function Ui(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ue(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ie(e),p=Ui(e),s=e._line||e.job||"MIL",d=pt[s]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(be(e,s))||0)+(e.boost||0),i=Ki(e==null?void 0:e.country_code),a=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),b=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${b}">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ei(e==null?void 0:e.country_code)?`<img src="${ei(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,n){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((s,d)=>{if(p+=Ue(s,40,52),d<r.length-1){const l=Qe(s,r[d+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),p+="</div>",p}function ei(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ki(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function at(e,t,n,r,p=310,s=310,d=[]){var j;const l=St[t]||{},c=Ai(t)||oi[t]||[],i={},a=["ATT","MIL","DEF","GK"];for(const O of a)(e[O]||[]).forEach((z,q)=>{i[`${O}${q+1}`]=z});function f(O){const C=l[O];return C?{x:C.x*p,y:C.y*s}:null}let m="";for(const[O,C]of c){const z=f(O),q=f(C);if(!z||!q)continue;const oe=i[O],pe=i[C],ae=Qe(oe,pe);ae==="#00ff88"||ae==="#FFD700"?(m+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${ae}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${ae}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${ae}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const b=48,E=64,o=13,k=16,M={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[O,C]of Object.entries(i)){const z=f(O);if(!z||!C)continue;const q=O.replace(/[0-9]/g,""),oe=pt[q]||"#555",pe=d.includes(C.cardId),ae=n==="attack"&&(["MIL","ATT"].includes(q)||pe)&&!C.used||n==="defense"&&["GK","DEF","MIL"].includes(q)&&!C.used,B=r.includes(C.cardId);let Y;n==="attack"?Y=pe?Math.max(1,Number(C.note_a)||0):q==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:n==="defense"?Y=q==="GK"?Number(C.note_g)||0:q==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:Y=Number(q==="GK"?C.note_g:q==="DEF"?C.note_d:q==="MIL"?C.note_m:C.note_a)||0,Y=Y+(C.boost||0);const ee=(z.x-b/2).toFixed(1),F=(z.y-E/2).toFixed(1),Q=M[C==null?void 0:C.rarity]||M.normal;if(C.used){const N=typeof import.meta<"u"&&"/manager-wars/"||"/",P=`${typeof window<"u"&&((j=window.location)==null?void 0:j.origin)||""}${N}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${ee}" y="${F}" width="${b}" height="${E}" rx="5" fill="#161616"/>`,m+=`<image href="${P}" xlink:href="${P}" x="${ee}" y="${F}" width="${b}" height="${E}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${ee}" y="${F}" width="${b}" height="${E}" rx="5" fill="none" stroke="${Q}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${ee}" y="${F}" width="${b}" height="${E}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${q}" style="cursor:pointer"/>`;continue}const K=B?.45:1,re=B?"#FFD700":Q,ge=B?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,me=E-o-k;m+=`<defs><clipPath id="cp-${O}"><rect x="${ee}" y="${(z.y-E/2+o).toFixed(1)}" width="${b}" height="${me}"/></clipPath></defs>`,m+=`<rect x="${ee}" y="${F}" width="${b}" height="${E}" rx="5" fill="${oe}" opacity="${K}"/>`;const xe=Ie(C);xe&&(m+=`<image href="${xe}" xlink:href="${xe}" x="${ee}" y="${(z.y-E/2+o).toFixed(1)}" width="${b}" height="${me}" clip-path="url(#cp-${O})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${ee}" y="${F}" width="${b}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${z.x.toFixed(1)}" y="${(z.y-E/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const R=(z.y+E/2-k).toFixed(1);m+=`<rect x="${ee}" y="${R}" width="${b}" height="${k}" fill="rgba(255,255,255,0.92)"/>`;{const N=ei(C.country_code);N?m+=`<image href="${N}" xlink:href="${N}" x="${(z.x-20).toFixed(1)}" y="${(z.y+E/2-k+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(z.x-13).toFixed(1)}" y="${(z.y+E/2-k/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Ki(C.country_code)}</text>`,m+=`<text x="${z.x.toFixed(1)}" y="${(z.y+E/2-k/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const W=Ui(C);W?m+=`<image href="${W}" xlink:href="${W}" x="${(z.x+b/2-14).toFixed(1)}" y="${(z.y+E/2-k+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(m+=`<text x="${(z.x+14).toFixed(1)}" y="${(z.y+E/2-k/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.boost&&(m+=`<rect x="${(z.x+b/2-12).toFixed(1)}" y="${(z.y-E/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(z.x+b/2-5).toFixed(1)}" y="${(z.y-E/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${C.boost}</text>`)}m+=`<rect x="${ee}" y="${F}" width="${b}" height="${E}" rx="5" fill="${B?"rgba(255,255,255,0.12)":"none"}" stroke="${re}" stroke-width="${ge}" opacity="${K}"/>`,ae&&(m+=`<rect x="${ee}" y="${F}" width="${b}" height="${E}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${B?"selected":""}" data-card-id="${C.cardId}" data-role="${q}" style="cursor:pointer"/>`)}const S=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-S} ${-S} ${p+S*2} ${s+S*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function st(e,t,n,r,p=300,s=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${at(e,t,n,r,p,s,d)}
  </div>`}function tt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function pi(e,t,n,r){var C;const{state:p,navigate:s,toast:d}=t;We(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Rn(e,t,n);const c=l.deckId;let i,a,f,m;try{const z=await Promise.all([A.from("decks").select("formation,name").eq("id",c).single(),A.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);i=z[0].data,f=z[0].error,a=z[1].data,m=z[1].error}catch(z){console.error("[Match] Exception chargement deck:",z),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const b=(a||[]).filter(z=>{var q;return z.is_starter&&((q=z.card)==null?void 0:q.player)}).map(z=>Zt(z.card,z.position)),E=(a||[]).filter(z=>{var q;return!z.is_starter&&((q=z.card)==null?void 0:q.player)}).map(z=>Zt(z.card,z.position));if(b.length<11){rt(e,"⚠️",`Deck incomplet (${b.length}/11).`,"Compléter",()=>s("decks"));return}const o=(a||[]).find(z=>{var q;return((q=z.card)==null?void 0:q.card_type)==="formation"}),k=(i==null?void 0:i.formation)||((C=o==null?void 0:o.card)==null?void 0:C.formation)||"4-4-2",{data:M,error:S}=await A.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:j}=await A.from("gc_definitions").select("*").eq("is_active",!0),O=(M||[]).map(z=>({...z,_gcDef:(j==null?void 0:j.find(q=>q.name===z.gc_type||q.id===z.gc_definition_id))||null}));r({deckId:c,formation:k,starters:b,subsRaw:E,gcCardsEnriched:O,gcDefs:j||[]})}async function Pn(e,t){const{state:n}=t,p=(n.params||{}).matchMode||"vs_ai_easy",s=p.replace("vs_ai_",""),d=p;await pi(e,t,p,async({deckId:l,formation:c,starters:i,subsRaw:a,gcCardsEnriched:f,gcDefs:m})=>{try{const b=ut(i,c),E=await On(c,s),o=async k=>{try{const{data:M,error:S}=await A.from("matches").insert({home_id:n.profile.id,away_id:null,mode:d,home_deck_id:l,status:"in_progress"}).select().single();if(S){console.error("[MatchIA] Erreur création match:",S),rt(e,"⚠️","Impossible de créer le match ("+S.message+").","Retour",()=>t.navigate("home"));return}const j={gcDefs:m||[],matchId:M==null?void 0:M.id,mode:d,difficulty:s,formation:c,homeTeam:b,aiTeam:E,homeSubs:a,subsUsed:0,maxSubs:Math.min(a.length,3),homeScore:0,aiScore:0,gcCards:k,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};Un(e,j,t)}catch(M){console.error("[MatchIA] Exception launchMatch:",M),rt(e,"⚠️","Erreur au lancement du match : "+M.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}ci(e,f,o)}catch(b){console.error("[MatchIA] Exception setup:",b),rt(e,"⚠️","Erreur de préparation du match : "+b.message,"Retour",()=>t.navigate("home"))}})}async function On(e,t){var d,l;const{data:n}=await A.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return Hn(e);const r=ct[e]||ct["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},s=[...n];for(const c of["GK","DEF","MIL","ATT"]){const i=s.filter(E=>E.job===c),a=s.filter(E=>E.job!==c),f=[...i,...a],m=[];for(let E=0;E<r[c];E++){const o=f[E]||s[E];o&&m.push({cardId:"ai-"+o.id+"-"+E,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((d=o.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const b=it(m.length);m.forEach((E,o)=>{E._col=b[o]}),p[c]=m}return p}function Hn(e){const t=ct[e]||ct["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let c=0;c<t[s];c++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:r[p%r.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),p++}const l=it(d.length);d.forEach((c,i)=>{c._col=l[i]}),n[s]=d}return n}function Un(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${at(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Kn(e,t,n),5e3)}function Kn(e,t,n){const r=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function s(o){return o.reduce((k,M)=>k+be(M,"MIL"),0)}function d(o){let k=0;for(let M=0;M<o.length-1;M++){const S=Qe(o[M],o[M+1]);S==="#00ff88"?k+=2:S==="#FFD700"&&(k+=1)}return k}const l=s(r)+d(r),c=s(p)+d(p),i=l>=c;function a(o,k,M,S){return`<div id="duel-row-${S}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${k}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((j,O)=>{const C=O<o.length-1?Qe(j,o[O+1]):null,z=!C||C==="#ff3333"||C==="#cc2222",q=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${S}" data-idx="${O}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ue({...j,note:be(j,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${O<o.length-1?`<div class="duel-link duel-link-${S}" data-idx="${O}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${z?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${z?"none":`0 0 8px ${C}`}">
            ${q?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${C}">${q}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${S}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(o)} + ${d(o)} liens = <b style="color:#fff">${s(o)+d(o)}</b>
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

    ${a(r,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${a(p,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=(k,M)=>e.querySelectorAll(k).forEach((S,j)=>{setTimeout(()=>{S.style.opacity="1",S.style.transform="translateY(0) scale(1)"},M+j*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((k,M)=>{setTimeout(()=>{k.style.opacity="1"},M*70)}),900),setTimeout(()=>{const k=e.querySelector("#vs-label");k&&(k.style.opacity="1",k.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(M=>M.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",c,800)},1500)};function m(o,k,M){const S=document.getElementById(o);if(!S)return;const j=performance.now(),O=C=>{const z=Math.min(1,(C-j)/M);S.textContent=Math.round(k*(1-Math.pow(1-z,3))),z<1?requestAnimationFrame(O):S.textContent=k};requestAnimationFrame(O)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const b=i?li():null;i&&(t.boostCard={value:b}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(o=>({name:o.name,note:be(o,"MIL"),portrait:Ie(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:p.map(o=>({name:o.name,note:be(o,"MIL"),portrait:Ie(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const E=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ze(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),k=document.getElementById("score-ai"),M=document.getElementById(i?"duel-row-home":"duel-row-ai"),S=document.getElementById(i?"duel-row-ai":"duel-row-home"),j=i?o:k,O=i?k:o;j&&(j.style.fontSize="80px",j.style.color=i?"#FFD700":"#ff6b6b",j.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),O&&(O.style.opacity="0.25"),setTimeout(()=>{M&&(M.style.transformOrigin="center",M.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",M.style.zIndex="5"),setTimeout(()=>{var z;const C=document.getElementById("duel-shock");if(C){const q=(z=S||M)==null?void 0:z.getBoundingClientRect(),oe=e.querySelector(".match-screen").getBoundingClientRect();q&&(C.style.top=q.top-oe.top+q.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}S&&(S.style.transformOrigin="center",S.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var z;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${b}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,C.style.transition="opacity .45s ease",C.style.opacity="1",C.style.pointerEvents="auto",(z=document.getElementById("start-match-btn"))==null||z.addEventListener("click",E))},600)},700)},2800)}function Vn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(n=>tt(n)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(n=>tt(n)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${tt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${tt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ze(e,t,n){var j,O,C,z,q,oe,pe,ae;const r=t.selected.map(B=>B.cardId),p=t.usedSubIds||[],s=t.homeSubs.filter(B=>!p.includes(B.cardId)),l=Object.values(t.homeTeam).flat().filter(B=>B.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(B=>(t.aiTeam[B]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(B=>!B.used),a=t.phase==="attack"&&c&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(B=>!B.used).map(B=>B.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",b=t.phase==="defense",E=t.phase==="finished",o=t.gcCards.filter(B=>!t.usedGc.includes(B.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${et((Y.players||[]).map(ee=>({...ee,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((Y.players||[]).map(ee=>({...ee,used:!1})),"#00ff88",Y.total)}
          </div>`}const B=t.log[t.log.length-1];return B?'<div style="padding:2px 4px">'+Vn(B)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const B=window.innerWidth>=700,Y=(R,N,W)=>{var Se,Ke;const P=(t.gcDefs||[]).find(u=>u.name===R.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[P==null?void 0:P.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ue={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",te=(P==null?void 0:P.name)||R.gc_type,Ae=(P==null?void 0:P.effect)||((Se=Be[R.gc_type])==null?void 0:Se.desc)||"",ke=P!=null&&P.image_url?`/manager-wars/icons/${P.image_url}`:null,ve=((Ke=Be[R.gc_type])==null?void 0:Ke.icon)||"⚡",_e=Math.round(W*.22),we=Math.round(W*.22),Le=W-_e-we,Ge=te.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${N}px;height:${W}px;border-radius:10px;border:2px solid ${ue};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${_e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ge}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${te}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Le}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ke?`<img src="${ke}" style="max-width:${N-10}px;max-height:${Le-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Le*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${we}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ae.slice(0,38)}</span>
          </div>
        </div>`},ee=(R,N)=>{var W;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(N*.2)}px">⚡</div>
            <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${(W=t.boostCard)==null?void 0:W.value}</div>
          </div>`},F=(R,N)=>N?ee(130,175):Y(R,130,175),Q=(R,N)=>N?ee(68,95):Y(R,68,95),K=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",re=E?`<button id="btn-results" style="${K};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${K};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${K};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ge=m||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(R,76,100)}</div>`).join("")}
      </div>`,xe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${st(t.homeTeam,t.formation,t.phase,r,300,300,a)}
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
            ${o.map(R=>F(R,!1)).join("")}
            ${k?F(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(t.homeTeam,t.formation,t.phase,r,300,300,a)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${o.map(R=>Q(R,!1)).join("")}
            ${k?Q(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(B=>{var Y,ee,F;if(B.type==="duel"){const Q=B.isGoal,K=B.homeScored?"#FFD700":Q?"#ff6b6b":"rgba(255,255,255,0.3)",re=B.homeScored?"⚽ BUT !":Q?"⚽ BUT IA !":(Y=B.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${K};margin-bottom:4px">
                <div style="font-size:9px;color:${K};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${re}</div>
                ${(ee=B.homePlayers)!=null&&ee.length?`<div style="margin-bottom:3px">${et(B.homePlayers,"rgba(255,255,255,0.7)",B.homeTotal)}</div>`:""}
                ${(F=B.aiPlayers)!=null&&F.length?`<div style="opacity:0.7">${et(B.aiPlayers,"#ff6b6b",B.aiTotal)}</div>`:""}
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
  </div>`;function M(){const B=e.querySelector(".match-screen");if(!B)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);B.style.bottom="auto",B.style.height=Y+"px",B.style.minHeight=Y+"px",B.style.maxHeight=Y+"px",B.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),F=e.querySelector("#mobile-play-area");ee&&F&&(F.style.paddingBottom=ee.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const B=e.querySelector(".terrain-wrapper svg");B&&(B.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let B=!1,Y=30;const ee=()=>document.getElementById("match-timer"),F=()=>{const Q=ee();if(!Q)return;const K=String(Math.floor(Y/60)).padStart(2,"0"),re=String(Y%60).padStart(2,"0");Q.textContent=` ${K}:${re}`,Q.style.color=B?"#ff2222":"#ff9500",Q.style.fontWeight="900"};F(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!B)B=!0,Y=15,F();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Q),setTimeout(()=>{Q.remove(),It(e,t,n)},2500)}else F()},1e3)}(j=document.getElementById("match-quit"))==null||j.addEventListener("click",()=>{Ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,It(e,t,n))}),(O=document.getElementById("view-ai"))==null||O.addEventListener("click",()=>no(t,n)),(C=document.getElementById("toggle-history"))==null||C.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.add("open")}),(z=document.getElementById("close-history"))==null||z.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.remove("open")}),(q=document.getElementById("btn-action"))==null||q.addEventListener("click",()=>{t.selected.length!==0&&(m?Wn(e,t,n):b&&Xn(e,t,n))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>It(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(B=>{B.addEventListener("click",()=>Yn(B,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(B=>{B.addEventListener("click",()=>Yt(e,t,n,null,B.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(B=>{B.addEventListener("click",()=>Zn(B.dataset.gcId,B.dataset.gcType,e,t,n))}),(pe=document.getElementById("boost-card"))==null||pe.addEventListener("click",()=>io(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(B=>{B.addEventListener("click",()=>Yt(e,t,n,B.dataset.subId))}),(ae=document.getElementById("sub-btn-main"))==null||ae.addEventListener("click",()=>Yt(e,t,n))}function Yn(e,t,n,r){const p=e.dataset.cardId,s=e.dataset.role,d=t.selected.findIndex(l=>l.cardId===p);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===p);l&&t.selected.push({...l,_role:s,_line:s})}ze(n,t,r)}function ui(e,t,n){e.matchId&&A.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function Wn(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(l=>!l.used)),p=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,c=r&&["GK","DEF"].includes(d._role);return{...l,_line:d._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Nt(p,t.modifiers.home);t.pendingAttack={...s,players:[...p],side:"home"},t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ze(e,t,n),setTimeout(()=>Jn(e,t,n),1200)}function Xn(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Rt(r,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!0)});const s=Pt(t.pendingAttack.total,p.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Ie(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:Ie(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(s.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,n),qt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,n,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,dt(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Si(r,"attack",t.difficulty);if(!p.length){Ft(e,t,n);return}const s=Nt(p,t.modifiers.ai);t.pendingAttack={...s,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),c=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!c){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:Ie(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,ze(e,t,n),qt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,n,"home-attack")});return}t.phase="defense",ze(e,t,n)}function Jn(e,t,n){var i,a;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Si(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(b=>({name:b.name,note:be(b,b._line||b.job),portrait:Ie(b),job:b.job,country_code:b.country_code,rarity:b.rarity,clubName:b.clubName,clubLogo:b.clubLogo})),homeTotal:((a=t.pendingAttack)==null?void 0:a.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,n),qt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,n,"ai-attack")});return}const d=p.length>0?Rt(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Pt(t.pendingAttack.total,d,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,n),qt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,n,"ai-attack")});return}else c.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,dt(e,t,n,"ai-attack")}function dt(e,t,n,r){if(t.round++,Vi(t)){It(e,t,n);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ft(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ft(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",ze(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ft(e,t,n);return}t.phase="ai-attack",ze(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function Vi(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(p=>!p.used)),n=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(p=>!p.used));return!t&&!n}function Ft(e,t,n){Vi(t)?It(e,t,n):(t.phase="attack",ze(e,t,n))}function Qn(e,t,n){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=Ie(e),s=Ie(t),d=pt[e.job]||"#555",l=pt[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${c}</div>
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
  `,document.body.appendChild(r);let a=!1;const f=()=>{a||(a=!0,r.remove(),n())};r.addEventListener("click",f),setTimeout(f,2e3)}function kt(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,r=null,p=null){var b,E;if(t.phase!=="attack"){kt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){kt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([o,k])=>(k||[]).filter(M=>M.used).map(M=>({...M,_line:M._line||o}))),d=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!s.length){kt("Aucun joueur utilisé à remplacer");return}if(!d.length){kt("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(o=>o.cardId===p));const c=((b=s[l])==null?void 0:b._line)||((E=s[l])==null?void 0:E.job);let i=r?Math.max(0,d.findIndex(o=>o.cardId===r)):Math.max(0,d.findIndex(o=>o.job===c)),a=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var C,z,q,oe,pe,ae;const o=s[l],k=d[i],M=Math.min(130,Math.round((window.innerWidth-90)/2)),S=Math.round(M*1.35),j=B=>`background:rgba(255,255,255,0.12);border:none;color:${B?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${B?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${j(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${k?Ue({...k,used:!1,boost:0},M,S):"<div>—</div>"}</div>
        <button id="in-down" style="${j(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${j(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ue({...o,used:!1,boost:0},M,S):"<div>—</div>"}</div>
        <button id="out-down" style="${j(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=f.querySelector("#sub-close"))==null||C.addEventListener("click",()=>f.remove()),(z=f.querySelector("#out-up"))==null||z.addEventListener("click",()=>{l>0&&(l--,m())}),(q=f.querySelector("#out-down"))==null||q.addEventListener("click",()=>{l<s.length-1&&(l++,m())}),(oe=f.querySelector("#in-up"))==null||oe.addEventListener("click",()=>{i>0&&(i--,m())}),(pe=f.querySelector("#in-down"))==null||pe.addEventListener("click",()=>{i<d.length-1&&(i++,m())});const O=(B,Y,ee,F)=>{const Q=f.querySelector("#"+B);if(!Q)return;let K=0;Q.addEventListener("touchstart",re=>{K=re.touches[0].clientY},{passive:!0}),Q.addEventListener("touchend",re=>{const ge=re.changedTouches[0].clientY-K;if(Math.abs(ge)<30)return;const me=Y();ge<0&&me<F-1?(ee(me+1),m()):ge>0&&me>0&&(ee(me-1),m())},{passive:!0})};O("in-panel",()=>i,B=>i=B,d.length),O("out-panel",()=>l,B=>l=B,s.length),(ae=f.querySelector("#sub-confirm"))==null||ae.addEventListener("click",B=>{if(B.preventDefault(),B.stopPropagation(),a)return;a=!0;const Y=s[l],ee=d[i];if(!Y||!ee)return;let F=null,Q=-1;for(const[re,ge]of Object.entries(t.homeTeam)){const me=(ge||[]).findIndex(xe=>xe.cardId===Y.cardId);if(me!==-1){F=re,Q=me;break}}if(Q===-1||!F){kt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const K={...ee,_line:F,_col:Y._col||0,used:!1,boost:0};t.homeTeam[F].splice(Q,1,K),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ee.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:be(Y,F),portrait:Ie(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:ee.name,firstname:ee.firstname,note:be(ee,F),portrait:Ie(ee),job:ee.job,country_code:ee.country_code,rarity:ee.rarity,clubName:ee.clubName,clubLogo:ee.clubLogo},text:`🔄 ${ee.firstname} ${ee.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),Qn(Y,ee,()=>ze(e,t,n))})}document.body.appendChild(f),m()}function Zn(e,t,n,r,p){var E,o;const s=(r.gcDefs||[]).find(k=>k.name===t),d=Be[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,a=(s==null?void 0:s.effect)||d.desc,f=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,m=d.icon||"⚡",b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",b.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${a}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(b),(E=b.querySelector("#gc-back"))==null||E.addEventListener("click",()=>b.remove()),(o=b.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{b.remove(),to(e,t,n,r,p)})}function jt(e,t,n,r,p,s){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var i,a;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",E=be(f,m)+(f.boost||0),o=l.find(k=>k.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${b};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${E}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,b=e.find(o=>o.cardId===m);if(!b)return;const E=l.findIndex(o=>o.cardId===m);E>-1?l.splice(E,1):l.length<t&&l.push(b),c()})}),(a=d.querySelector("#gc-picker-confirm"))==null||a.addEventListener("click",()=>{d.remove(),s(l)})}c(),document.body.appendChild(d)}const eo={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},r,p,s)=>{const d=Object.entries(r.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,c])=>c.filter(i=>!i.used).map(i=>({...i,_line:l})));return d.length?(jt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,r,l=>{l.forEach(c=>{const i=(r.homeTeam[c._line]||[]).find(a=>a.cardId===c.cardId);i&&(i.boost=(i.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),ze(p,r,s)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(p,r,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:r="ai"},p,s,d)=>{const l=r==="home"?p.homeTeam:p.aiTeam,c=r==="ai"?"adverse":"allié",i=Object.entries(l).filter(([a])=>!n.length||n.includes(a)).flatMap(([a,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:a})));return i.length?(jt(i,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,p,a=>{a.forEach(f=>{const b=((r==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find(E=>E.cardId===f.cardId);b&&(b.boost=(b.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${b.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),ze(s,p,d)}),!0):(p.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),ze(s,p,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},r,p,s)=>{const d=n==="home"?r.homeTeam:r.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,a])=>a.filter(f=>!f.used).map(f=>({...f,_line:i})));return c.length?(jt(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,r,i=>{i.forEach(a=>{const m=((n==="home"?r.homeTeam:r.aiTeam)[a._line]||[]).find(b=>b.cardId===a.cardId);m&&(m.used=!0,r.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(p,r,s)}),!0):(r.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ze(p,r,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,r,p)=>{const s=Object.entries(n.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,l])=>l.filter(c=>c.used).map(c=>({...c,_line:d})));return s.length?(jt(s,e,`Choisir ${e} joueur(s) à ressusciter`,r,n,d=>{d.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!1,n.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),ze(r,n,p)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(r,n,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function to(e,t,n,r,p){r.usedGc.push(e);const s=r.gcDefs||[],d=s.find(c=>c.name===t)||s.find(c=>{var i;return((i=c.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const c=eo[d.effect_type];c?c(d.effect_params||{},r,n,p)||(l=!0):(p.toast(`Effet "${d.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(r.homeTeam).flatMap(([i,a])=>(a||[]).filter(f=>f.used).map(f=>({...f,_line:i})));c.length?(c[0].used=!1,r.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(i=>!i.used);if(c.length){const i=c.sort((a,f)=>be(f,"ATT")-be(a,"ATT"))[0];i.used=!0,r.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}A.from("cards").delete().eq("id",e).then(()=>{}),l&&ze(n,r,p)}function io(e,t,n){const r=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!r.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${pt[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${be(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const s=p.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[d]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),ze(e,t,n)})})}function qt(e,t,n,r,p){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,a)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${a%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][a%8]}
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
    ${r?"BUT !":"BUT IA !"}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${t} – ${n}
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>p(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function It(e,t,n){var a,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=n,p=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,d=p?"victoire":s?"nul":"defaite",l=pn(t.mode,d);t.matchId&&await A.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?r.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(r.profile.credits||0)+l,matches_played:(r.profile.matches_played||0)+1};p?c.wins=(r.profile.wins||0)+1:s?c.draws=(r.profile.draws||0)+1:c.losses=(r.profile.losses||0)+1,await A.from("users").update(c).eq("id",r.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(a=document.getElementById("res-home"))==null||a.addEventListener("click",()=>{i.remove(),Ne(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),Ne(e),n.navigate("match",{matchMode:t.mode})})}function no(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${at(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function oo(e,t){await pi(e,t,"random",({deckId:n,formation:r,starters:p,subsRaw:s,gcCardsEnriched:d,gcDefs:l})=>{const c=i=>ro(e,t,n,r,p,s,i,l||[]);if(!d.length){c([]);return}ci(e,d,c)})}async function ro(e,t,n,r,p,s,d=[],l=[]){var S;const{state:c,navigate:i,toast:a}=t;let f=!1,m=null;We(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const b=async(j=!0)=>{f=!0,m&&(A.removeChannel(m),m=null),j&&await A.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(S=document.getElementById("mm-cancel"))==null||S.addEventListener("click",async()=>{try{await b(!0)}catch{}Ne(e),i("home")});const E=async(j,O,C)=>{if(f)return;f=!0,m&&(A.removeChannel(m),m=null);const z=document.getElementById("mm-status");z&&(z.textContent="Adversaire trouvé !"),await new Promise(q=>setTimeout(q,600)),e.isConnected&&ao(e,t,j,C,d,l)},{data:o,error:k}=await A.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:n});if(k||!(o!=null&&o.success)){a("Erreur de matchmaking","error"),Ne(e),i("home");return}if(o.matched){E(o.match_id,o.opponent_id,!1);return}const M=document.getElementById("mm-status");M&&(M.textContent="En attente d'un autre joueur..."),m=A.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},j=>{const O=j.new;O.status==="matched"&&O.match_id&&E(O.match_id,O.matched_with,!0)}).subscribe()}async function ao(e,t,n,r,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(p||[]).map(u=>u.id),m=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:b}=await A.from("matches").select("*").eq("id",n).single();if(!b){c("Match introuvable","error"),l("home");return}async function E(){const[{data:u},{data:g},{data:h},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:b.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:b.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",b.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",b.away_id).single()]),x=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map($=>x($)),w=((g==null?void 0:g.starters)||[]).map($=>x($)),_=(u==null?void 0:u.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:ut(v,_),p2Team:ut(w,I),p1Subs:((u==null?void 0:u.subs)||[]).map($=>x($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>x($)),p1Formation:_,p2Formation:I,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?m:[],gcCardsFull_p2:r?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=b.game_state&&Object.keys(b.game_state).length?b.game_state:null;if(!o)if(r){o=await E();const{data:u}=await A.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:b.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<30&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:g}=await A.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await A.from("matches").update({game_state:o}).eq("id",n)}let k=!1,M=null,S=!1;const j=new Set,O=new Set;function C(u){var $,L;try{A.removeChannel(z)}catch{}const g=o[i+"Score"]||0,h=o[a+"Score"]||0;let y,x;u.winner_id?(y=u.winner_id===d.profile.id,x=!1):u.forfeit?(y=g>h,x=!1):(x=g===h,y=g>h),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=x?"🤝":y?"🏆":"😞",_=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",I=x?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${h} ${o[a+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ne(e),l("home")})}const z=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const g=u.new;try{if(g.status==="finished"||g.forfeit){if(k)return;k=!0,M&&(clearInterval(M),M=null),g.game_state&&(o=g.game_state),C(g);return}if(g.game_state){const h=o;o=g.game_state;const y=o._lastGC;if(y&&y.seq&&!O.has(y.seq)&&(O.add(y.seq),y.by!==i)){me(y.type,y.by,()=>F());return}const x=h[i+"Score"]||0,v=h[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,I=w>x,$=_>v;if((I||$)&&!j.has(o.round)){j.add(o.round);const L=[...o.log||[]].reverse().find(U=>U.isGoal),D=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(D,w,_,I,()=>F());return}F()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function q(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:g}=await A.from("matches").update({game_state:o}).eq("id",n);g&&c("Erreur de synchronisation","error");try{F()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function oe(){if(k)return;k=!0,M&&(clearInterval(M),M=null);const u=r?b.away_id:b.home_id,g=r?"p2":"p1",h=r?"p1":"p2",y={...o,[g+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{A.removeChannel(z)}catch{}setTimeout(()=>{Ne(e),l("home")},800)}const pe={BOOST_STAT:({value:u=1,count:g=1,roles:h=[]},y,x)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([_])=>!h.length||h.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}ae(w,g,`Choisir ${g} joueur(s) à booster (+${u})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${$.name}`,type:"info"}))}),y[i+"Team"]=v,x(y)})},DEBUFF_STAT:({value:u=1,count:g=1,roles:h=[],target:y="ai"},x,v)=>{const w=y==="home"?i:a,_=x[w+"Team"],I=y==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!h.length||h.includes(L)).flatMap(([L,D])=>D.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){x.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(x);return}ae($,g,`Choisir ${g} joueur(s) ${I}(s) (-${u})`,L=>{L.forEach(D=>{const U=(_[D._line]||[]).find(ne=>ne.cardId===D.cardId);U&&(U.boost=(U.boost||0)-u,x.log.push({text:`🎯 -${u} sur ${U.name}`,type:"info"}))}),x[w+"Team"]=_,v(x)})},GRAY_PLAYER:({count:u=1,roles:g=[],target:h="ai"},y,x)=>{const v=h==="home"?i:a,w=y[v+"Team"],_=h==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(D=>!D.used).map(D=>({...D,_line:$})));if(!I.length){y.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),x(y);return}ae(I,u,`Choisir ${u} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const D=(w[L._line]||[]).find(U=>U.cardId===L.cardId);D&&(D.used=!0,y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,x(y)})},REVIVE_PLAYER:({count:u=1,roles:g=[]},h,y)=>{const x=h[i+"Team"],v=Object.entries(x).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}ae(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(x[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,h.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=x,y(h)})},REMOVE_GOAL:({},u,g)=>{const h=a+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(u)},ADD_GOAL_DRAW:({},u,g)=>{u[i+"Score"]===u[a+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(u)},ADD_SUB:({value:u=1},g,h)=>{g.maxSubs=(g.maxSubs||3)+u,g.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(g)},CUSTOM:({},u,g)=>g(u)};function ae(u,g,h,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=u.map(L=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),le=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${le};background:${D};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
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
        </div>`,(I=x.querySelector("#pp-close"))==null||I.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const D=L.dataset.cid,U=u.find(le=>le.cardId===D),ne=v.findIndex(le=>le.cardId===D);U&&(ne>-1?v.splice(ne,1):v.length<g&&v.push(U),w())})}),($=x.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{x.remove(),y(v)})}w(),document.body.appendChild(x)}async function B(u,g){const y=(o["gcCardsFull_"+i]||[]).find(_=>_.id===u),x=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:g,by:i,seq:(o._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const I=pe[x.effect_type];if(I){const $={...o};I(x.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await q(L)});return}}const _={...o};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await q(_)})}function Y(u,g){const h="usedCardIds_"+u,y=new Set(o[h]||[]);g.forEach(x=>y.add(x)),o[h]=[...y]}function ee(){for(const u of["p1","p2"]){const g=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(x=>{x.used=g.has(x.cardId)})}}function F(){var Oe,ft,gt,mt,xt,yt;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return re();if(o.phase==="finished")return Ke();const u=o[i+"Team"],g=o[a+"Team"];ee();const h=o[i+"Score"],y=o[a+"Score"],x=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],$=I.map(T=>T.cardId),L=window.innerWidth>=700,D=o[i+"Subs"]||[],U=o["usedSubIds_"+i]||[],ne=D.filter(T=>!U.includes(T.cardId)),le=o["gcCardsFull_"+i]||[],G=o["usedGc_"+i]||[],H=le.filter(T=>!G.includes(T.id)),J=o.boostOwner===i&&!o.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(T=>(g[T]||[]).some(V=>!V.used)),se=[...u.MIL||[],...u.ATT||[]].filter(T=>!T.used),fe=w&&ie&&se.length===0?[...u.GK||[],...u.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];function de(T,V,ce){var wt,$t;const Z=T._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Z==null?void 0:Z.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[Z==null?void 0:Z.color]||"#b06ce0",Xe=(Z==null?void 0:Z.name)||T.gc_type,Je=(Z==null?void 0:Z.effect)||((wt=Be[T.gc_type])==null?void 0:wt.desc)||"",ht=Z!=null&&Z.image_url?`/manager-wars/icons/${Z.image_url}`:null,Ut=(($t=Be[T.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(ce*.22),vt=Math.round(ce*.22),nt=ce-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
        style="box-sizing:border-box;width:${V}px;height:${ce}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function ye(T,V){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${T}px;height:${V}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(V*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(V*.2)}px">⚡</div>
        <div style="font-size:${Math.round(V*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ee=(T,V)=>V?ye(130,175):de(T,130,175),Re=(T,V)=>V?ye(68,95):de(T,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ne.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ne.map(T=>`<div class="pvp-sub-btn" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(T,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function De(T){if(T.type==="duel"&&(T.homeTotal!=null||T.aiTotal!=null)){const V=(T.homeTotal||0)>=(T.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(T.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.homePlayers||[]).map(ce=>tt(ce)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${V?20:14}px;font-weight:900;color:${V?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${T.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${V?14:20}px;font-weight:900;color:${V?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${T.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.aiPlayers||[]).map(ce=>tt(ce)).join("")}
            </div>
          </div>
          ${T.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${T.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${T.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${T.type==="goal"?700:400};padding:3px 2px">${T.text||""}</div>`}const Ve=(()=>{var V,ce;if(_&&((V=o.pendingAttack)!=null&&V.players)){const Z=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((Z.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",Z.total)}
        </div>`}if(w&&((ce=o.pendingAttack)!=null&&ce.players)){const Z=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((Z.players||[]).map(He=>({...He,used:!1})),"#00ff88",Z.total)}
        </div>`}const T=(o.log||[]).slice(-1)[0];return T?'<div style="padding:2px 4px">'+De(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
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
            ${H.map(T=>Ee(T,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(T=>Re(T,!1)).join("")}
            ${J?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&ne.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&ne.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&ne.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&ne.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ne.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(o["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(o["usedSubIds_"+i]||[]).length}/${o.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${$e}</div>
        </div>
      </div>`;function Te(){const T=e.querySelector(".match-screen");if(!T)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.height=V+"px",T.style.minHeight=V+"px",T.style.maxHeight=V+"px",T.style.overflow="hidden";const ce=e.querySelector("#mobile-action-bar"),Z=e.querySelector("#mobile-play-area");ce&&Z&&(Z.style.paddingBottom=ce.offsetHeight+"px")}if(Te(),setTimeout(Te,120),setTimeout(Te,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Te),window.visualViewport.addEventListener("scroll",Te)),window.addEventListener("resize",Te)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>{if(!w&&!_)return;const V=T.dataset.cardId,ce=T.dataset.role,Z=(u[ce]||[]).find(Je=>Je.cardId===V);if(!Z||Z.used)return;const He=fe.includes(V);if(w&&!["MIL","ATT"].includes(ce)&&!He)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===V);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...Z,_role:ce}),F()})}),e.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>N(T.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(T=>{T.addEventListener("click",()=>N())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(T=>{T.addEventListener("click",()=>xe(T.dataset.gcId,T.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",T=>{w?T.currentTarget.dataset.pass==="1"||!we(i)?ue():te():_&&Ae()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),M&&(clearInterval(M),M=null),(w||_)&&!k){let T=30,V=!1;const ce=()=>document.getElementById("pvp-timer"),Z=()=>{ce()&&(ce().textContent=T+"s",ce().style.color=V?"#ff4444":"#fff")};Z(),M=setInterval(()=>{T--,T<0?V?(clearInterval(M),M=null,w&&!we(i)?ue():oe()):(V=!0,T=15,Z()):Z()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await q({phase:"midfield"})},5e3)}let K=!1;function re(){if(K)return;const u=o[i+"Team"].MIL||[],g=o[a+"Team"].MIL||[];function h(H){return H.reduce((J,ie)=>J+be(ie,"MIL"),0)}function y(H){let J=0;for(let ie=0;ie<H.length-1;ie++){const se=Qe(H[ie],H[ie+1]);se==="#00ff88"?J+=2:se==="#FFD700"&&(J+=1)}return J}const x=h(u)+y(u),v=h(g)+y(g),w=x>=v;function _(H,J,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((se,fe)=>{const de=fe<H.length-1?Qe(se,H[fe+1]):null,ye=!de||de==="#ff3333"||de==="#cc2222",Ee=de==="#00ff88"?"+2":de==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...se,note:be(se,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":de};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${de}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${de}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(H)} + ${y(H)} liens = <b style="color:#fff">${h(H)+y(H)}</b>
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
      ${_(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((ie,se)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},J+se*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,ie){const se=document.getElementById(H);if(!se)return;const fe=performance.now(),de=ye=>{const Ee=Math.min(1,(ye-fe)/ie);se.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(de):se.textContent=J};requestAnimationFrame(de)}setTimeout(()=>{$("pvp-score-me",x,800),$("pvp-score-opp",v,800)},1500);const L=o.p1Team.MIL||[],D=o.p2Team.MIL||[],U=h(L)+y(L),ne=h(D)+y(D),le=U>=ne?"p1":"p2";let G=o.boostValue;G==null&&(G=li(),o.boostValue=G,o.boostOwner=le,o.boostUsed=!1),K=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),ie=document.getElementById("pvp-score-me"),se=document.getElementById("pvp-score-opp"),fe=w?ie:se,de=w?se:ie;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),de&&(de.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=le;await q({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(u,g,h,y,x){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${h}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(u,g,h){var G,H;const y=(o.gcDefs||[]).find(J=>{var ie;return J.name===u||((ie=J.name)==null?void 0:ie.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,_=(y==null?void 0:y.effect)||((G=Be[u])==null?void 0:G.desc)||"",I=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,$=((H=Be[u])==null?void 0:H.icon)||"⚡",D=g===i?"Vous":o[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let ne=!1;const le=()=>{ne||(ne=!0,U.remove(),setTimeout(()=>h&&h(),50))};U.addEventListener("click",le),setTimeout(le,3e3)}function xe(u,g){var U,ne,le,G;const y=(o["gcCardsFull_"+i]||[]).find(H=>H.id===u),x=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||g,I=(x==null?void 0:x.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,L=((ne=Be[g])==null?void 0:ne.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
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
      </div>`,document.body.appendChild(D),(le=D.querySelector("#pvp-gc-back"))==null||le.addEventListener("click",()=>D.remove()),(G=D.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{D.remove(),B(u,g)})}function R(){var y;const u=o[i+"Team"],g=Object.entries(u).flatMap(([x,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:x})));if(!g.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(x=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",w=be(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const v=x.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(u[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),h.remove(),await q({[i+"Team"]:u,boostUsed:!0})})})}function N(u=null){var ne,le;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],x=o.maxSubs||3;if(y.length>=x){c(`Maximum ${x} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(o[i+"Subs"]||[]).filter(G=>!y.includes(G.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===u));const I=((ne=v[_])==null?void 0:ne._line)||((le=v[_])==null?void 0:le.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var de,ye,Ee,Re,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(J*1.35),se=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${se($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${se($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${se(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${se(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(de=D.querySelector("#psub-close"))==null||de.addEventListener("click",()=>D.remove()),(ye=D.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=D.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Re=D.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=D.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const De=D.querySelector("#"+$e);if(!De)return;let Ve=0;De.addEventListener("touchstart",qe=>{Ve=qe.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",qe=>{const Te=qe.changedTouches[0].clientY-Ve;if(Math.abs(Te)<30)return;const Oe=Fe();Te<0&&Oe<Pe-1?(Me(Oe+1),U()):Te>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=D.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,De=(h[Pe]||[]).findIndex(Te=>Te.cardId===Fe.cardId);if(De===-1){c("Erreur : joueur introuvable","error"),D.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};h[Pe].splice(De,1,Ve);const qe=[...y,Me.cardId];D.remove(),W(Fe,Me,async()=>{await q({[i+"Team"]:h,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(D),U()}function W(u,g,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let w=!1;const _=()=>{w||(w=!0,x.remove(),setTimeout(()=>h(),50))};x.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(g=u.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>u.remove())}function X(){var h;const u=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>g.remove())}async function ue(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",g=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Le(o),x=we(u),v=y||!x?"finished":u+"-attack";await q({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:g,log:h}),v==="finished"&&await Se(o)}async function te(){const u=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=u[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),D=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:D,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Nt(h,o.modifiers[i]||{});Y(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(u[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],F();const x=[...o.log||[]];if(g){const v=(o[i+"Score"]||0)+1,w=h.map(D=>({name:D.name,note:be(D,D._line||"ATT"),portrait:Ie(D),job:D.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",$={...o,[i+"Team"]:u,[i+"Score"]:v},L=Le($);j.add(_),ge(w,v,o[a+"Score"]||0,!0,async()=>{await q({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:x}),L&&await Se({...o,[i+"Score"]:v})});return}x.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await q({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:x})}async function Ae(){const u=o[i+"Team"],g=(o["selected_"+i]||[]).map(G=>{const H=(u[G._role]||[]).find(de=>de.cardId===G.cardId)||G,J=u[G._role]||[],ie=J.findIndex(de=>de.cardId===G.cardId),se=it(J.length),fe=ie>=0?se[ie]:H._col??1;return{...H,_line:G._role,_col:fe}}),h=Rt(g,o.modifiers[i]||{});Y(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(u[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],F();const y=Pt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),x=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=x==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...o.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&x===i,text:v?`⚽ BUT de ${o[x+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const L=v?(o[x+"Score"]||0)+1:o[x+"Score"]||0,D={...o,[i+"Team"]:u,[x+"Score"]:L},U=Le(D),ne=U?"finished":w+"-attack",le=async()=>{await q({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],[x+"Score"]:L,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:ne,attacker:w,round:_,log:$}),(ne==="finished"||U)&&await Se({...o,[x+"Score"]:L})};if(v){const G=x===i,H=G?L:o[i+"Score"]||0,J=G?o[a+"Score"]||0:L;j.add(_),ge(I,H,J,G,le)}else await le()}function ke(u){return["MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function ve(u){return["GK","DEF","MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function _e(u){return ve(u)&&!ke(u)}function we(u){const g=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(h)&&_e(g))}function Le(u){const g=["MIL","ATT"].some($=>(u.p1Team[$]||[]).some(L=>!L.used)),h=["MIL","ATT"].some($=>(u.p2Team[$]||[]).some(L=>!L.used)),y=ve(u.p1Team),x=ve(u.p2Team);return!g&&!(!x&&y)&&(!h&&!(!y&&x))}function Ge(u){const g=u.p1Score||0,h=u.p2Score||0;return g===h?null:g>h?b.home_id:b.away_id}async function Se(u){try{await A.from("matches").update({status:"finished",winner_id:Ge(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var x;const u=o[i+"Score"],g=o[a+"Score"],h=u>g,y=u===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{A.removeChannel(z)}catch{}Ne(e),l("home")})}F()}async function so(e,t,n,r){await pi(e,t,"random",({deckId:p,formation:s,starters:d,subsRaw:l,gcCardsEnriched:c,gcDefs:i})=>{const a=f=>lo(e,t,p,s,d,l,f,i||[],n,r);if(!c.length){a([]);return}ci(e,c,a)})}async function lo(e,t,n,r,p,s,d=[],l=[],c,i){const{state:a,navigate:f,toast:m}=t,b=a.profile.id;let E=!1,o=null;We(e);const k=(C,z,q,oe)=>{var pe;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${i}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${a.profile.club_name||a.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:${z?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${z?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${z?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${z?"#22c55e":"#aaa"}">${z?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!z&&C?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(pe=document.getElementById("lobby-cancel"))==null||pe.addEventListener("click",async()=>{E=!0,o&&(A.removeChannel(o),o=null),q&&await A.from("friend_match_invites").update({status:"declined"}).eq("id",q),Ne(e),f("home")})},M=async(C,z)=>{E=!0,o&&(A.removeChannel(o),o=null),await new Promise(q=>setTimeout(q,600)),e.isConnected&&co(e,t,C,z,d,l)},{data:S}=await A.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${b},invitee_id.eq.${c}),and(inviter_id.eq.${c},invitee_id.eq.${b})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let j,O;if(S&&S.inviter_id===c)O=!1,j=S.id,await A.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",j);else{O=!0;const{data:C,error:z}=await A.from("friend_match_invites").insert({inviter_id:b,invitee_id:c,friend_id:c,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(z||!C){m("Erreur création invitation","error"),Ne(e),f("home");return}j=C.id}if(k(!0,!O,j),!O){const{data:C}=await A.from("matches").insert({home_id:c,away_id:b,home_deck_id:S.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"}).select().single();if(!C){m("Erreur création match","error"),Ne(e),f("home");return}await A.from("friend_match_invites").update({match_id:C.id,status:"matched"}).eq("id",j),M(C.id,!1);return}o=A.channel("friend-invite-"+j).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${j}`},async C=>{if(E)return;const z=C.new;z.status==="matched"&&z.match_id?M(z.match_id,!0):z.status==="declined"?(m(`${i} a décliné l'invitation`,"warning"),Ne(e),f("home")):z.invitee_ready&&k(!0,!0,j)}).subscribe()}async function co(e,t,n,r,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(p||[]).map(u=>u.id),m=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:b}=await A.from("matches").select("*").eq("id",n).single();if(!b){c("Match introuvable","error"),l("home");return}async function E(){const[{data:u},{data:g},{data:h},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:b.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:b.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",b.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",b.away_id).single()]),x=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map($=>x($)),w=((g==null?void 0:g.starters)||[]).map($=>x($)),_=(u==null?void 0:u.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:ut(v,_),p2Team:ut(w,I),p1Subs:((u==null?void 0:u.subs)||[]).map($=>x($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>x($)),p1Formation:_,p2Formation:I,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?m:[],gcCardsFull_p2:r?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=b.game_state&&Object.keys(b.game_state).length?b.game_state:null;if(!o)if(r){o=await E();const{data:u}=await A.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:b.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<30&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:g}=await A.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await A.from("matches").update({game_state:o}).eq("id",n)}let k=!1,M=null,S=!1;const j=new Set,O=new Set;function C(u){var $,L;try{A.removeChannel(z)}catch{}const g=o[i+"Score"]||0,h=o[a+"Score"]||0;let y,x;u.winner_id?(y=u.winner_id===d.profile.id,x=!1):u.forfeit?(y=g>h,x=!1):(x=g===h,y=g>h),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=x?"🤝":y?"🏆":"😞",_=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",I=x?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${h} ${o[a+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ne(e),l("home")})}const z=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const g=u.new;try{if(g.status==="finished"||g.forfeit){if(k)return;k=!0,M&&(clearInterval(M),M=null),g.game_state&&(o=g.game_state),C(g);return}if(g.game_state){const h=o;o=g.game_state;const y=o._lastGC;if(y&&y.seq&&!O.has(y.seq)&&(O.add(y.seq),y.by!==i)){me(y.type,y.by,()=>F());return}const x=h[i+"Score"]||0,v=h[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,I=w>x,$=_>v;if((I||$)&&!j.has(o.round)){j.add(o.round);const L=[...o.log||[]].reverse().find(U=>U.isGoal),D=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(D,w,_,I,()=>F());return}F()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function q(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:g}=await A.from("matches").update({game_state:o}).eq("id",n);g&&c("Erreur de synchronisation","error");try{F()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function oe(){if(k)return;k=!0,M&&(clearInterval(M),M=null);const u=r?b.away_id:b.home_id,g=r?"p2":"p1",h=r?"p1":"p2",y={...o,[g+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{A.removeChannel(z)}catch{}setTimeout(()=>{Ne(e),l("home")},800)}const pe={BOOST_STAT:({value:u=1,count:g=1,roles:h=[]},y,x)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([_])=>!h.length||h.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}ae(w,g,`Choisir ${g} joueur(s) à booster (+${u})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${$.name}`,type:"info"}))}),y[i+"Team"]=v,x(y)})},DEBUFF_STAT:({value:u=1,count:g=1,roles:h=[],target:y="ai"},x,v)=>{const w=y==="home"?i:a,_=x[w+"Team"],I=y==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!h.length||h.includes(L)).flatMap(([L,D])=>D.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){x.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(x);return}ae($,g,`Choisir ${g} joueur(s) ${I}(s) (-${u})`,L=>{L.forEach(D=>{const U=(_[D._line]||[]).find(ne=>ne.cardId===D.cardId);U&&(U.boost=(U.boost||0)-u,x.log.push({text:`🎯 -${u} sur ${U.name}`,type:"info"}))}),x[w+"Team"]=_,v(x)})},GRAY_PLAYER:({count:u=1,roles:g=[],target:h="ai"},y,x)=>{const v=h==="home"?i:a,w=y[v+"Team"],_=h==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(D=>!D.used).map(D=>({...D,_line:$})));if(!I.length){y.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),x(y);return}ae(I,u,`Choisir ${u} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const D=(w[L._line]||[]).find(U=>U.cardId===L.cardId);D&&(D.used=!0,y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,x(y)})},REVIVE_PLAYER:({count:u=1,roles:g=[]},h,y)=>{const x=h[i+"Team"],v=Object.entries(x).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}ae(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(x[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,h.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=x,y(h)})},REMOVE_GOAL:({},u,g)=>{const h=a+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(u)},ADD_GOAL_DRAW:({},u,g)=>{u[i+"Score"]===u[a+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(u)},ADD_SUB:({value:u=1},g,h)=>{g.maxSubs=(g.maxSubs||3)+u,g.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(g)},CUSTOM:({},u,g)=>g(u)};function ae(u,g,h,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=u.map(L=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),le=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${le};background:${D};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
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
        </div>`,(I=x.querySelector("#pp-close"))==null||I.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const D=L.dataset.cid,U=u.find(le=>le.cardId===D),ne=v.findIndex(le=>le.cardId===D);U&&(ne>-1?v.splice(ne,1):v.length<g&&v.push(U),w())})}),($=x.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{x.remove(),y(v)})}w(),document.body.appendChild(x)}async function B(u,g){const y=(o["gcCardsFull_"+i]||[]).find(_=>_.id===u),x=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:g,by:i,seq:(o._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const I=pe[x.effect_type];if(I){const $={...o};I(x.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await q(L)});return}}const _={...o};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await q(_)})}function Y(u,g){const h="usedCardIds_"+u,y=new Set(o[h]||[]);g.forEach(x=>y.add(x)),o[h]=[...y]}function ee(){for(const u of["p1","p2"]){const g=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(x=>{x.used=g.has(x.cardId)})}}function F(){var Oe,ft,gt,mt,xt,yt;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return re();if(o.phase==="finished")return Ke();const u=o[i+"Team"],g=o[a+"Team"];ee();const h=o[i+"Score"],y=o[a+"Score"],x=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],$=I.map(T=>T.cardId),L=window.innerWidth>=700,D=o[i+"Subs"]||[],U=o["usedSubIds_"+i]||[],ne=D.filter(T=>!U.includes(T.cardId)),le=o["gcCardsFull_"+i]||[],G=o["usedGc_"+i]||[],H=le.filter(T=>!G.includes(T.id)),J=o.boostOwner===i&&!o.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(T=>(g[T]||[]).some(V=>!V.used)),se=[...u.MIL||[],...u.ATT||[]].filter(T=>!T.used),fe=w&&ie&&se.length===0?[...u.GK||[],...u.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];function de(T,V,ce){var wt,$t;const Z=T._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Z==null?void 0:Z.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[Z==null?void 0:Z.color]||"#b06ce0",Xe=(Z==null?void 0:Z.name)||T.gc_type,Je=(Z==null?void 0:Z.effect)||((wt=Be[T.gc_type])==null?void 0:wt.desc)||"",ht=Z!=null&&Z.image_url?`/manager-wars/icons/${Z.image_url}`:null,Ut=(($t=Be[T.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(ce*.22),vt=Math.round(ce*.22),nt=ce-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
        style="box-sizing:border-box;width:${V}px;height:${ce}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function ye(T,V){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${T}px;height:${V}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(V*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(V*.2)}px">⚡</div>
        <div style="font-size:${Math.round(V*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ee=(T,V)=>V?ye(130,175):de(T,130,175),Re=(T,V)=>V?ye(68,95):de(T,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ne.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ne.map(T=>`<div class="pvp-sub-btn" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(T,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function De(T){if(T.type==="duel"&&(T.homeTotal!=null||T.aiTotal!=null)){const V=(T.homeTotal||0)>=(T.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(T.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.homePlayers||[]).map(ce=>tt(ce)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${V?20:14}px;font-weight:900;color:${V?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${T.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${V?14:20}px;font-weight:900;color:${V?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${T.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.aiPlayers||[]).map(ce=>tt(ce)).join("")}
            </div>
          </div>
          ${T.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${T.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${T.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${T.type==="goal"?700:400};padding:3px 2px">${T.text||""}</div>`}const Ve=(()=>{var V,ce;if(_&&((V=o.pendingAttack)!=null&&V.players)){const Z=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((Z.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",Z.total)}
        </div>`}if(w&&((ce=o.pendingAttack)!=null&&ce.players)){const Z=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((Z.players||[]).map(He=>({...He,used:!1})),"#00ff88",Z.total)}
        </div>`}const T=(o.log||[]).slice(-1)[0];return T?'<div style="padding:2px 4px">'+De(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
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
            ${H.map(T=>Ee(T,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(T=>Re(T,!1)).join("")}
            ${J?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&ne.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&ne.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&ne.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&ne.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ne.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(o["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(o["usedSubIds_"+i]||[]).length}/${o.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${$e}</div>
        </div>
      </div>`;function Te(){const T=e.querySelector(".match-screen");if(!T)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.height=V+"px",T.style.minHeight=V+"px",T.style.maxHeight=V+"px",T.style.overflow="hidden";const ce=e.querySelector("#mobile-action-bar"),Z=e.querySelector("#mobile-play-area");ce&&Z&&(Z.style.paddingBottom=ce.offsetHeight+"px")}if(Te(),setTimeout(Te,120),setTimeout(Te,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Te),window.visualViewport.addEventListener("scroll",Te)),window.addEventListener("resize",Te)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>{if(!w&&!_)return;const V=T.dataset.cardId,ce=T.dataset.role,Z=(u[ce]||[]).find(Je=>Je.cardId===V);if(!Z||Z.used)return;const He=fe.includes(V);if(w&&!["MIL","ATT"].includes(ce)&&!He)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===V);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...Z,_role:ce}),F()})}),e.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>N(T.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(T=>{T.addEventListener("click",()=>N())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(T=>{T.addEventListener("click",()=>xe(T.dataset.gcId,T.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",T=>{w?T.currentTarget.dataset.pass==="1"||!we(i)?ue():te():_&&Ae()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),M&&(clearInterval(M),M=null),(w||_)&&!k){let T=30,V=!1;const ce=()=>document.getElementById("pvp-timer"),Z=()=>{ce()&&(ce().textContent=T+"s",ce().style.color=V?"#ff4444":"#fff")};Z(),M=setInterval(()=>{T--,T<0?V?(clearInterval(M),M=null,w&&!we(i)?ue():oe()):(V=!0,T=15,Z()):Z()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await q({phase:"midfield"})},5e3)}let K=!1;function re(){if(K)return;const u=o[i+"Team"].MIL||[],g=o[a+"Team"].MIL||[];function h(H){return H.reduce((J,ie)=>J+be(ie,"MIL"),0)}function y(H){let J=0;for(let ie=0;ie<H.length-1;ie++){const se=Qe(H[ie],H[ie+1]);se==="#00ff88"?J+=2:se==="#FFD700"&&(J+=1)}return J}const x=h(u)+y(u),v=h(g)+y(g),w=x>=v;function _(H,J,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((se,fe)=>{const de=fe<H.length-1?Qe(se,H[fe+1]):null,ye=!de||de==="#ff3333"||de==="#cc2222",Ee=de==="#00ff88"?"+2":de==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...se,note:be(se,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":de};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${de}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${de}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(H)} + ${y(H)} liens = <b style="color:#fff">${h(H)+y(H)}</b>
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
      ${_(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((ie,se)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},J+se*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,ie){const se=document.getElementById(H);if(!se)return;const fe=performance.now(),de=ye=>{const Ee=Math.min(1,(ye-fe)/ie);se.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(de):se.textContent=J};requestAnimationFrame(de)}setTimeout(()=>{$("pvp-score-me",x,800),$("pvp-score-opp",v,800)},1500);const L=o.p1Team.MIL||[],D=o.p2Team.MIL||[],U=h(L)+y(L),ne=h(D)+y(D),le=U>=ne?"p1":"p2";let G=o.boostValue;G==null&&(G=li(),o.boostValue=G,o.boostOwner=le,o.boostUsed=!1),K=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),ie=document.getElementById("pvp-score-me"),se=document.getElementById("pvp-score-opp"),fe=w?ie:se,de=w?se:ie;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),de&&(de.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=le;await q({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(u,g,h,y,x){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${h}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(u,g,h){var G,H;const y=(o.gcDefs||[]).find(J=>{var ie;return J.name===u||((ie=J.name)==null?void 0:ie.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,_=(y==null?void 0:y.effect)||((G=Be[u])==null?void 0:G.desc)||"",I=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,$=((H=Be[u])==null?void 0:H.icon)||"⚡",D=g===i?"Vous":o[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let ne=!1;const le=()=>{ne||(ne=!0,U.remove(),setTimeout(()=>h&&h(),50))};U.addEventListener("click",le),setTimeout(le,3e3)}function xe(u,g){var U,ne,le,G;const y=(o["gcCardsFull_"+i]||[]).find(H=>H.id===u),x=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||g,I=(x==null?void 0:x.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,L=((ne=Be[g])==null?void 0:ne.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
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
      </div>`,document.body.appendChild(D),(le=D.querySelector("#pvp-gc-back"))==null||le.addEventListener("click",()=>D.remove()),(G=D.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{D.remove(),B(u,g)})}function R(){var y;const u=o[i+"Team"],g=Object.entries(u).flatMap(([x,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:x})));if(!g.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(x=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",w=be(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const v=x.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(u[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),h.remove(),await q({[i+"Team"]:u,boostUsed:!0})})})}function N(u=null){var ne,le;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],x=o.maxSubs||3;if(y.length>=x){c(`Maximum ${x} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(o[i+"Subs"]||[]).filter(G=>!y.includes(G.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===u));const I=((ne=v[_])==null?void 0:ne._line)||((le=v[_])==null?void 0:le.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var de,ye,Ee,Re,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(J*1.35),se=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${se($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${se($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${se(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${se(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(de=D.querySelector("#psub-close"))==null||de.addEventListener("click",()=>D.remove()),(ye=D.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=D.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Re=D.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=D.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const De=D.querySelector("#"+$e);if(!De)return;let Ve=0;De.addEventListener("touchstart",qe=>{Ve=qe.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",qe=>{const Te=qe.changedTouches[0].clientY-Ve;if(Math.abs(Te)<30)return;const Oe=Fe();Te<0&&Oe<Pe-1?(Me(Oe+1),U()):Te>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=D.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,De=(h[Pe]||[]).findIndex(Te=>Te.cardId===Fe.cardId);if(De===-1){c("Erreur : joueur introuvable","error"),D.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};h[Pe].splice(De,1,Ve);const qe=[...y,Me.cardId];D.remove(),W(Fe,Me,async()=>{await q({[i+"Team"]:h,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(D),U()}function W(u,g,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let w=!1;const _=()=>{w||(w=!0,x.remove(),setTimeout(()=>h(),50))};x.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(g=u.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>u.remove())}function X(){var h;const u=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>g.remove())}async function ue(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",g=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Le(o),x=we(u),v=y||!x?"finished":u+"-attack";await q({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:g,log:h}),v==="finished"&&await Se(o)}async function te(){const u=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=u[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),D=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:D,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Nt(h,o.modifiers[i]||{});Y(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(u[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],F();const x=[...o.log||[]];if(g){const v=(o[i+"Score"]||0)+1,w=h.map(D=>({name:D.name,note:be(D,D._line||"ATT"),portrait:Ie(D),job:D.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",$={...o,[i+"Team"]:u,[i+"Score"]:v},L=Le($);j.add(_),ge(w,v,o[a+"Score"]||0,!0,async()=>{await q({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:x}),L&&await Se({...o,[i+"Score"]:v})});return}x.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await q({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:x})}async function Ae(){const u=o[i+"Team"],g=(o["selected_"+i]||[]).map(G=>{const H=(u[G._role]||[]).find(de=>de.cardId===G.cardId)||G,J=u[G._role]||[],ie=J.findIndex(de=>de.cardId===G.cardId),se=it(J.length),fe=ie>=0?se[ie]:H._col??1;return{...H,_line:G._role,_col:fe}}),h=Rt(g,o.modifiers[i]||{});Y(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(u[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],F();const y=Pt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),x=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=x==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...o.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&x===i,text:v?`⚽ BUT de ${o[x+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const L=v?(o[x+"Score"]||0)+1:o[x+"Score"]||0,D={...o,[i+"Team"]:u,[x+"Score"]:L},U=Le(D),ne=U?"finished":w+"-attack",le=async()=>{await q({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],[x+"Score"]:L,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:ne,attacker:w,round:_,log:$}),(ne==="finished"||U)&&await Se({...o,[x+"Score"]:L})};if(v){const G=x===i,H=G?L:o[i+"Score"]||0,J=G?o[a+"Score"]||0:L;j.add(_),ge(I,H,J,G,le)}else await le()}function ke(u){return["MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function ve(u){return["GK","DEF","MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function _e(u){return ve(u)&&!ke(u)}function we(u){const g=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(h)&&_e(g))}function Le(u){const g=["MIL","ATT"].some($=>(u.p1Team[$]||[]).some(L=>!L.used)),h=["MIL","ATT"].some($=>(u.p2Team[$]||[]).some(L=>!L.used)),y=ve(u.p1Team),x=ve(u.p2Team);return!g&&!(!x&&y)&&(!h&&!(!y&&x))}function Ge(u){const g=u.p1Score||0,h=u.p2Score||0;return g===h?null:g>h?b.home_id:b.away_id}async function Se(u){try{await A.from("matches").update({status:"finished",winner_id:Ge(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var x;const u=o[i+"Score"],g=o[a+"Score"],h=u>g,y=u===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{A.removeChannel(z)}catch{}Ne(e),l("home")})}F()}const po={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function uo(e,t){const{state:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:r}=t,{data:p}=await A.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await A.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",n.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(p||[]).filter(i=>i.seller_id!==n.profile.id),l=s||[];l.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${d.length} carte(s) en vente · Solde : ${(n.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function c(i){const a=document.getElementById("mkt-content"),f=i==="buy"?d:l;if(f.length===0){a.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const m=i==="mine"?[...f].sort((b,E)=>b.status!==E.status?b.status==="active"?-1:1:new Date(E.listed_at)-new Date(b.listed_at)):f;a.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(b=>{var j,O,C,z;const E=(j=b.card)==null?void 0:j.player;if(!E)return"";const o=E.job==="GK"?E.note_g:E.job==="DEF"?E.note_d:E.job==="MIL"?E.note_m:E.note_a,k=po[E.rarity],M=(n.profile.credits||0)>=b.price,S=b.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${xo(E.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${k};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${E.firstname} ${E.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${E.country_code} · ${((O=E.clubs)==null?void 0:O.encoded_name)||"—"} · ${E.rarity} · ${E.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((C=b.seller)==null?void 0:C.pseudo)||"—"}</div>`:S?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((z=b.buyer)==null?void 0:z.pseudo)||"—"} · ${b.sold_at?new Date(b.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(b.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${b.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${b.id}" ${M?"":"disabled"} style="margin-top:4px">${M?"Acheter":"Trop cher"}</button>`:S?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${b.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,a.querySelectorAll("[data-buy]").forEach(b=>{b.addEventListener("click",()=>fo(b.dataset.buy,f,e,t))}),a.querySelectorAll("[data-cancel]").forEach(b=>{b.addEventListener("click",()=>mo(b.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(a=>{const f=a===i;a.style.background=f?"var(--green)":"#fff",a.style.color=f?"#fff":"var(--gray-600)",a.style.borderColor=f?"var(--green)":"var(--gray-200)"}),c(i.dataset.tab)})})}async function fo(e,t,n,r){var b;const{state:p,toast:s,refreshProfile:d}=r,l=t.find(E=>E.id===e);if(!l)return;const c=l.price,i=p.profile.credits||0,a=(b=l.card)==null?void 0:b.player;if(i<c){s("Crédits insuffisants","error");return}if(!await go(a,c))return;const m=document.querySelector(`[data-buy="${e}"]`);m&&(m.disabled=!0,m.textContent="⏳");try{const{data:E,error:o}=await A.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(o)throw new Error(o.message);if(!(E!=null&&E.success))throw new Error((E==null?void 0:E.error)||"Achat impossible");p.profile.credits=i-c;const k=document.getElementById("nav-credits");k&&(k.textContent=`💰 ${(i-c).toLocaleString("fr")}`),s(`✅ ${a==null?void 0:a.surname_encoded} ajouté à ta collection !`,"success"),fi(n,r)}catch(E){s("❌ "+E.message,"error"),m&&(m.disabled=!1,m.textContent="Acheter")}}function go(e,t){return new Promise(n=>{const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
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
      </div>`,document.body.appendChild(r);const p=s=>{r.remove(),n(s)};r.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),r.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),r.addEventListener("click",s=>{s.target===r&&p(!1)})})}async function mo(e,t,n){const{toast:r}=n,{data:p}=await A.from("market_listings").select("card_id").eq("id",e).single();await A.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),r("Annonce retirée","success"),fi(t,n)}function xo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function yo(e,{state:t,navigate:n,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await A.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function ho(e,{state:t,navigate:n,toast:r}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(a=>a.status==="finished"),c=(s||[]).filter(a=>a.status==="in_progress");function i(a){const f=a.home_id===p.id;f?a.home_score:a.away_score,f?a.away_score:a.home_score;const m=a.winner_id===p.id,b=a.home_score===a.away_score&&a.status==="finished",E=a.status!=="finished"?"…":b?"N":m?"V":"D",o=a.status!=="finished"||b?"#888":m?"#1A6B3C":"#c0392b";let k=d[a.mode]||a.mode;a.away_id===null&&!k.startsWith("IA")&&(k="IA");const S=a.home_id===p.id?a.away:a.home;let j;a.away_id===null?j=k:S?j=`${S.club_name||S.pseudo} (${S.pseudo})`:j="Adversaire";let O="";a.status==="in_progress"&&Date.now()-new Date(a.created_at).getTime()>3600*1e3&&(O=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(a.created_at),z=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),q=a.status==="finished"?`${a.home_score} - ${a.away_score}`:`${a.home_score||0} - ${a.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${j}${O}</div>
        <div style="font-size:11px;color:var(--gray-600)">${k} · ${z}${a.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${q}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${E}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${c.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${c.map(i).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(i).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Xi(Qi);const he={user:null,profile:null,page:"home",params:{}};function Et(e,t="info",n=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},n))}function bo(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function Tt(){if(!he.user)return;const{data:e}=await A.from("users").select("*").eq("id",he.user.id).single();e&&(he.profile=e)}const gi="mw_theme";function Gt(){return localStorage.getItem(gi)||"light"}function vo(e){var t;localStorage.setItem(gi,e),ni(e),(t=he.profile)!=null&&t.id&&A.from("users").update({theme:e}).eq("id",he.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Bt(e,t={}){he.page=e,he.params=t,Yi()}async function Yi(){var r,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===he.page)});const t=document.getElementById("nav-credits");t&&he.profile&&(t.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const n={state:he,navigate:Bt,toast:Et,openModal:bo,closeModal:ii,refreshProfile:Tt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await yi(e,n);break;case"collection":await gn(e,n);break;case"decks":await Xt(e,n);break;case"boosters":await In(e,n);break;case"match":{const s=he.params&&he.params.matchMode||"vs_ai_easy";s==="random"?await oo(e,n):s==="friend"?await so(e,n,(r=he.params)==null?void 0:r.friendId,(p=he.params)==null?void 0:p.friendName):await Pn(e,n);break}case"market":await uo(e,n);break;case"rankings":await yo(e,n);break;case"matches":await ho(e,n);break;case"friends":await nn(e,n);break;default:await yi(e,n)}}function wo(){const e=document.getElementById("app"),t=he.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${n}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
          <img src="${n}nav-home.png" alt="" class="nav-icon">
          <img src="${n}nav-home-txt.png" alt="Accueil" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="collection">
        <div class="nav-icon-wrap">
          <img src="${n}nav-collection.png" alt="" class="nav-icon">
          <img src="${n}nav-collection-txt.png" alt="Cartes" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="decks">
        <div class="nav-icon-wrap">
          <img src="${n}nav-decks.png" alt="" class="nav-icon">
          <img src="${n}nav-deck-txt.png" alt="Decks" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="boosters">
        <div class="nav-icon-wrap">
          <img src="${n}nav-boosters.png" alt="" class="nav-icon">
          <img src="${n}nav-boosters-txt.png" alt="Boosters" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="market">
        <div class="nav-icon-wrap">
          <img src="${n}nav-market.png" alt="" class="nav-icon">
          <img src="${n}nav-market-txt.png" alt="Marché" class="nav-label">
        </div>
      </a>
    </nav>
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",p=>{p.preventDefault(),Bt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Bt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Bt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Gt()==="dark"?"light":"dark";vo(p),Ei(p)}),Ei(Gt())}function Ei(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function $o(){ni(Gt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await A.auth.getSession();if(!e){Ti(),mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et});return}he.user=e.user,await Tt(),Ti();try{const{data:n}=await A.from("formation_links_overrides").select("formation, links"),r={};(n||[]).forEach(p=>{r[p.formation]=p.links}),Ji(r)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!he.profile){Zi(document.getElementById("app"),{state:he,navigate:async()=>{await Tt(),Wt()},toast:Et,refreshProfile:Tt});return}const t=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&t.length>0){Gn(document.getElementById("app"),{state:he,navigate:()=>Wt(),toast:Et,refreshProfile:Tt});return}he.profile.theme&&he.profile.theme!==Gt()&&(localStorage.setItem(gi,he.profile.theme),ni(he.profile.theme)),Wt(),A.auth.onAuthStateChange(async(n,r)=>{n==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et}))})}function _o(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ht(){const e=document.getElementById("app");e&&(e.style.height=_o()+"px")}window.addEventListener("resize",Ht);window.addEventListener("orientationchange",()=>setTimeout(Ht,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ht);function Wt(){const e=()=>{var n;(n=he.user)!=null&&n.id&&A.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Ht(),wo(),Yi()}function Ti(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Wi(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}$o().catch(e=>{console.error("Échec du démarrage:",e),Wi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Wi("Le serveur met trop de temps à répondre.")},12e3);
