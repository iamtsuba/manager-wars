import{s as $,F as ai,h as St,j as Fi,l as Qe,i as fn,k as gn,b as mn}from"./formation-links-CEzN0rcz.js";function hi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,d=document.getElementById("login-error");if(d.textContent="",!a||!c){d.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:l}=await $.auth.signInWithPassword({email:a,password:c});if(s.textContent="Se connecter",s.disabled=!1,l){d.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,d=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!c||!d){s.textContent="Remplissez tous les champs.";return}if(c.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==d){s.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:p}=await $.auth.signUp({email:a,password:c});if(l.textContent="Créer mon compte",l.disabled=!1,p){s.textContent=p.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function xn(e,{state:t,navigate:n,toast:a,refreshProfile:c}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${d}">
          <span id="logo-initials" style="color:${d}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${d};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${d}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var z;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),f=((z=document.getElementById("setup-club"))==null?void 0:z.value)||"MW",m=f.trim().split(" ").filter(Boolean),y=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=s,i.style.borderColor=d),r&&(r.textContent=y,r.style.color=d)}document.getElementById("color1").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch1").style.background=d,l()}),document.getElementById("color2").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch2").style.background=s,l()});function p(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await $.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){r.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await $.from("users").select("id").eq("club_name",i).maybeSingle();if(f){r.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:y}=await $.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:d,club_color2:s,credits:1e4});if(y)throw y;await yn(t.user.id),await c(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){f.textContent=y.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function yn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await $.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const hn="modulepreload",bn=function(e){return"/manager-wars/"+e},bi={},vn=function(t,n,a){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.allSettled(n.map(p=>{if(p=bn(p),p in bi)return;bi[p]=!0;const i=p.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${r}`))return;const f=document.createElement("link");if(f.rel=i?"stylesheet":hn,i||(f.as="script"),f.crossOrigin="",f.href=p,l&&f.setAttribute("nonce",l),document.head.appendChild(f),i)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})}))}function d(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return c.then(s=>{for(const l of s||[])l.status==="rejected"&&d(l.reason);return t().catch(d)})},It="#1A6B3C",Lt="#cc2222",wn="#D4A017",vi="#888";async function _n(e,t){const{state:n,toast:a}=t;e.innerHTML=`
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
    </div>`,await Di(n,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>kn(n,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>qi(n,a,null,t))}async function Di(e,t,n={}){const{navigate:a}=n,c=e.user.id,{data:d,error:s}=await $.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:l}=await $.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(l>0?(p.style.display="flex",p.textContent=l):p.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(s){console.error("[Friends] Erreur:",s),i.innerHTML=`<div style="color:${Lt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const r=(d||[]).map(y=>y.requester_id===c?y.addressee_id:y.requester_id);let f={};if(r.length){const{data:y}=await $.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(y||[]).forEach(z=>{f[z.id]=z})}const m=(d||[]).map(y=>({friendshipId:y.id,friend:f[y.requester_id===c?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!m.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:y,friend:z})=>$n(z,y)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>En(e,y.dataset.stats,y.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",()=>{const z=y.dataset.friendId,o=y.dataset.friendName;console.log("[Friends] clic match",{fid:z,fname:o,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:z,friendName:o}):t("Erreur navigation","error")})})}function $n(e,t){const n=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||n).slice(0,2).toUpperCase(),d=e.club_color2||It,s=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,p=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${n}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${n}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${wn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function kn(e,t){const n=si();n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Lt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${di()}`,document.body.appendChild(n);const a=n.querySelector("#friend-pseudo-input"),c=n.querySelector("#add-friend-error"),d=()=>n.remove();a.focus(),n.querySelector("#add-cancel").addEventListener("click",d),n.addEventListener("click",s=>{s.target===n&&d()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){c.textContent="Entre un pseudo";return}c.textContent="";const{data:l}=await $.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!l){c.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await $.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(p){const r=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=r;return}const{error:i}=await $.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){c.textContent="Erreur : "+i.message;return}d(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function qi(e,t,n=null,a={}){const c=e.user.id,{data:d}=await $.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(m=>m.requester_id);let l={};if(s.length){const{data:m}=await $.from("users").select("id, pseudo, club_name").in("id",s);(m||[]).forEach(y=>{l[y.id]=y})}const p=(d||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),i=si(),r=p||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(m=>{var y,z,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=m.requester)==null?void 0:y.club_name)||((z=m.requester)==null?void 0:z.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((o=m.requester)==null?void 0:o.pseudo)||""})</span>
                </div>
                <button data-accept="${m.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${It};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${m.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${di()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",m=>{m.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:y}=await $.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(y){t("Erreur : "+y.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Di(e,t,a),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await $.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function En(e,t,n){const a=e.user.id,[c,d]=[a,t].sort(),s=a===c,{data:l}=await $.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",d).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},r=s?i.wins_p1||0:i.wins_p2||0,f=s?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,y=s?i.goals_p1||0:i.goals_p2||0,z=s?i.goals_p2||0:i.goals_p1||0,o=s?i.gc_used_p1||0:i.gc_used_p2||0,v=s?i.gc_used_p2||0:i.gc_used_p1||0,T=i.matches_total||0,L=(P,F,j,R=It,ee=Lt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${R}">${F}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${P}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${ee}">${j}</div>
    </div>`,S=si();S.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${n}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      </div>
      ${T===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${L("Victoires",r,f)}
        ${L("Nuls",m,m,vi,vi)}
        ${L("Défaites",f,r)}
        ${L("Buts marqués",y,z)}
        ${L("Buts encaissés",z,y,Lt,It)}
        ${L("GC utilisés ⚡",o,v,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${T} match${T>1?"s":""} joué${T>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${di()}`,document.body.appendChild(S),S.querySelector("#stats-close").addEventListener("click",()=>S.remove()),S.addEventListener("click",P=>{P.target===S&&S.remove()})}function si(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function di(){return`
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
        background:${It};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function An({player1Id:e,player2Id:t,score1:n,score2:a,gc1:c,gc2:d}){const[s,l]=[e,t].sort(),p=e!==s,i=p?a:n,r=p?n:a,f=p?d:c,m=p?c:d,y=i>r?1:0,z=r>i?1:0,o=i===r?1:0,{data:v}=await $.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",l).single();v?await $.from("friend_match_stats").update({wins_p1:v.wins_p1+y,wins_p2:v.wins_p2+z,draws:v.draws+o,goals_p1:v.goals_p1+i,goals_p2:v.goals_p2+r,gc_used_p1:v.gc_used_p1+f,gc_used_p2:v.gc_used_p2+m,matches_total:v.matches_total+1}).eq("player1_id",s).eq("player2_id",l):await $.from("friend_match_stats").insert({player1_id:s,player2_id:l,wins_p1:y,wins_p2:z,draws:o,goals_p1:i,goals_p2:r,gc_used_p1:f,gc_used_p2:m,matches_total:1})}const Tn="2026.06.29-1513";async function wi(e,{state:t,navigate:n,toast:a}){var d,s;const c=t.profile;c&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>
      <!-- Invitations de match ami en attente -->
      <div id="match-invite-banner"></div>
      <!-- Match(s) en cours à reprendre -->
      <div id="ongoing-match-banner"></div>
      <!-- Invitation match ami en attente -->

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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Tn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),n(l.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>n("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Sn(n);return}if(p==="match-random"){n("match",{matchMode:"random"});return}if(p==="match-friend"){n("friends");return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()}),Ni(t,a),zn(t,a,n),Gi(t,a,n))}async function Gi(e,t,n){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:d}=await $.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let l={};if(s.length){const{data:p}=await $.from("users").select("id, pseudo, club_name").in("id",s);(p||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}a.innerHTML=d.map(p=>{const i=p.home_id===c?p.away_id:p.home_id,r=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${p.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const{resumePvpMatch:i}=await vn(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>So);return{resumePvpMatch:f}},void 0),r=document.getElementById("page-content")||document.getElementById("app");i(r,{state:e,navigate:n,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)})}),a.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{Ln(async()=>{await In(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Gi(e,t,n)})})})}async function In(e,t,n){const{data:a}=await $.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===n,d=c?0:3,s=c?3:0,l=a.game_state||{};l.p1Score=d,l.p2Score=s,l.phase="finished",l.forfeit=!0,await $.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:l}).eq("id",e)}function Ln(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function zn(e,t,n){var l,p,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await $.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const d=((l=c.inviter)==null?void 0:l.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",s=c.inviter_id;a.innerHTML=`
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
        <div style="font-size:13px;font-weight:900">${d} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",n("match",{matchMode:"friend",friendId:s,friendName:d})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await $.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Ni(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:a,error:c}=await $.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){n.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(p=>{var i;return((i=p.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=d>2?` +${d-2}`:"";n.innerHTML=`
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
          ${d} demande${d>1?"s":""} d'ami${d>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${s}${l}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{qi(e,t,()=>Ni(e,t))})}function Sn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const a=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",a),n.addEventListener("click",c=>{c.target===n&&a()}),n.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Ne={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function we(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const _i=["ATT","MIL","DEF","GK"];function Pi(e){let t=0;const n=e.length;for(let a=0;a<n;a++)for(let c=a+1;c<n;c++){const d=e[a],s=e[c];if(!d||!s)continue;const l=d._col!=null&&s._col!=null&&d._col===s._col,p=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,i=_i.indexOf(d._line||d.job),r=_i.indexOf(s._line||s.job),f=Math.abs(i-r)===1;if(!((d._line||d.job)===(s._line||s.job)&&p||l&&f))continue;const z=d.country_code&&s.country_code&&d.country_code===s.country_code,o=d.club_id&&s.club_id&&d.club_id===s.club_id;z&&o?t+=2:(z||o)&&(t+=1)}return t}function Ut(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;return d+(Number(l==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=Pi(e);let c=n+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:n,links:a,total:Math.max(0,c)}}function Kt(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;let p=0;return l==="GK"?p=Number(s.note_g)||0:l==="MIL"?p=Number(s.note_m)||0:p=Number(s.note_d)||0,d+p+(s.boost||0)},0),a=Pi(e);let c=n+a;return t.stolenNote&&(c-=t.stolenNote),{base:n,links:a,total:Math.max(0,c)}}function Vt(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ri(e,t,n="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const c=[...a].sort((s,l)=>{const p=t==="attack"?we(s,"ATT"):s._line==="GK"?we(s,"GK"):we(s,"DEF");return(t==="attack"?we(l,"ATT"):l._line==="GK"?we(l,"GK"):we(l,"DEF"))-p});let d=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(d,c.length,3))}function Mn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const Cn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Oi(e,t){const n=e.player;if(!n)return 0;const a=n.rarity;if(a!=="pepite"&&a!=="papyte")return Number(n[t])||0;const c=Hi(n),d=Number(n[t])||0;if(d<=0)return 0;const s=n.note_min??1,l=n.note_max??10,i=(e.current_note??c)-c;return Math.min(l,Math.max(s,d+i))}function Hi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ui(e,t){!e||!t||await Promise.all([$i(e,"win"),$i(t,"loss")])}async function $i(e,t){const{data:n}=await $.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(n!=null&&n.length))return;const a=n.filter(c=>{var d,s;return((d=c.player)==null?void 0:d.rarity)==="pepite"||((s=c.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const d=Cn[c.player.rarity],s=t==="win"?d.win:d.loss,l=c.player.note_min??1,p=c.player.note_max??10,i=Hi(c.player),r=c.current_note??i,f=Math.min(p,Math.max(l,r+s));return $.from("cards").update({current_note:f}).eq("id",c.id)}))}const Ki={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Bt=["GK","DEF","MIL","ATT"],jn=["Tous","GK","DEF","MIL","ATT"],Bn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function ki(e){const t=e.player;if(!t)return null;const n=t.rarity;return(n==="pepite"||n==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Fn(e){return e.length?e.reduce((t,n)=>ki(n)>ki(t)?n:t,e[0]):e[0]}function Vi(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const li={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Yi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function zt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Xt(e,t=""){var m,y;const n=e.player;if(!n)return"";const a=n.job||"ATT",c=At[a],d=Ki[n.rarity]||"#ccc",s=n.rarity==="pepite"||n.rarity==="papyte",l=s&&e.current_note!=null?e.current_note:zt(n,a),p=n.job2?s?Oi(e,Vi(n.job2)):zt(n,n.job2):null,i=n.job2?At[n.job2]:null,r=Yi(n),f=li[n.country_code]||n.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${d};cursor:pointer;flex-shrink:0;position:relative
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${c}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${c}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${p!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${i}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${p}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${f}</div>
        ${(m=n.clubs)!=null&&m.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((y=n.clubs)==null?void 0:y.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ei(e){const t=e.job||"ATT",n=zt(e,t),a=li[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${a}</div>
      </div>
    </div>
  </div>`}async function Dn(e,t){const{state:n,navigate:a,toast:c,openModal:d,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:p}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(O=>O.card_type==="player"&&O.player),r=(l||[]).filter(O=>O.card_type==="game_changer"),f=(l||[]).filter(O=>O.card_type==="formation"),{data:m}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),y={};(m||[]).forEach(O=>{y[O.name]=O});const z=Object.keys(ai),o=Object.keys(Ne),v={};i.forEach(O=>{const U=O.player.id;v[U]=(v[U]||0)+1}),new Set(Object.keys(v).map(O=>String(O)));const T=new Set(f.map(O=>O.formation)),L=new Set(r.map(O=>O.gc_type));let S="player",P="Tous",F="",j=!1;function R(){return[...i].sort((O,U)=>{const C=Bt.indexOf(O.player.job),D=Bt.indexOf(U.player.job);return C!==D?C-D:(O.player.surname_encoded||"").localeCompare(U.player.surname_encoded||"")})}function ee(){return[...p||[]].sort((O,U)=>{const C=Bt.indexOf(O.job),D=Bt.indexOf(U.job);return C!==D?C-D:(O.surname_encoded||"").localeCompare(U.surname_encoded||"")})}function le(){return R().filter(O=>{const U=O.player,C=P==="Tous"||U.job===P,D=!F||`${U.firstname} ${U.surname_encoded}`.toLowerCase().includes(F);return C&&D})}function re(){return ee().filter(O=>{const U=P==="Tous"||O.job===P,C=!F||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(F);return U&&C})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="player"?"var(--green)":"transparent"};
        color:${S==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="formation"?"var(--green)":"transparent"};
        color:${S==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="gc"?"var(--green)":"transparent"};
        color:${S==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function M(){const O=document.getElementById("col-filters");O&&(S==="player"?(O.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${F}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${jn.map(U=>`
            <button class="filter-btn" data-job="${U}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${U===P?"var(--green)":"var(--gray-200)"};
                background:${U===P?"var(--green)":"#fff"};
                color:${U===P?"#fff":"var(--gray-600)"}">
              ${U}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",U=>{F=U.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(U=>{U.addEventListener("click",()=>{P=U.dataset.job,M(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})):(O.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})))}function Y(){const O=document.getElementById("col-grid");O&&(S==="player"?he(O):S==="formation"?xe(O):ge(O))}function ie(O,U,C,D,K){const ne=document.getElementById("col-grid"),te=document.getElementById("col-big");if(!ne||!te)return;var _e=0;function $e(){const Ee=window.innerWidth>=768,Se=document.getElementById("col-big"),Ae=document.getElementById("col-grid");Ee&&Se&&(Se.style.minHeight="420px",Se.style.flex="1 1 auto"),Ee&&Ae&&(Ae.style.height=Math.round(310*.76+16)+"px",Ae.style.flexShrink="0",Ae.style.overflowX="auto",Ae.style.overflowY="hidden",Ae.style.alignItems="center",Ae.style.padding="8px 16px"),te.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+U(O[_e])+"</div>";var Te=te.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){D(O[_e])}),requestAnimationFrame(function(){var ke=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ke||!te)){var qe=te.clientHeight-8,Re=te.clientWidth-24,k=ke.offsetHeight,u=ke.offsetWidth;if(k>0&&u>0&&qe>40){var g=Ee?2.2:1,h=Math.min(qe/k,Re/u,g);ke.style.transform="scale("+h.toFixed(3)+")",ke.style.transformOrigin="top center"}}}),ne.innerHTML=O.map(function(ke,qe){var Re=qe===_e,k="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Re?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+qe+'" style="'+k+'">'+C(ke,Re)+"</div>"}).join(""),ne.querySelectorAll(".col-mini-item").forEach(function(ke){ke.addEventListener("click",function(){_e=Number(ke.dataset.idx),$e(),ke.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}$e()}function q(O){var U=window.innerWidth>=768?.76:.54,C;if(!O||O._fake){var D=O?O.player:null;if(!D)return"";C=Ei(D)}else C=Xt(O,"");return'<div style="display:inline-block;zoom:'+U+';pointer-events:none;line-height:0">'+C+"</div>"}function Z(O,U,C){U=U||100,C=C||140;var D=St[O]||{},K={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ne=Math.max(3,Math.round(U*.06)),te=Object.entries(D).map(function($e){var Ee=$e[0],Se=$e[1],Ae=Ee.replace(/\d+$/,""),Te=K[Ae]||"#888",ke=Math.round(Se.x*U),qe=Math.round(Se.y*C);return'<circle cx="'+ke+'" cy="'+qe+'" r="'+ne+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),_e=Math.max(1,Math.round(U/50));return'<svg viewBox="0 0 '+U+" "+C+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+U+'" height="'+C+'" fill="#1A6B3C"/><rect x="'+Math.round(U*.2)+'" y="'+Math.round(C*.02)+'" width="'+Math.round(U*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+_e+'"/><line x1="0" y1="'+Math.round(C*.5)+'" x2="'+U+'" y2="'+Math.round(C*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+_e+'"/><ellipse cx="'+Math.round(U*.5)+'" cy="'+Math.round(C*.5)+'" rx="'+Math.round(U*.18)+'" ry="'+Math.round(C*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+_e+'"/><rect x="'+Math.round(U*.2)+'" y="'+Math.round(C*.82)+'" width="'+Math.round(U*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+_e+'"/>'+te+"</svg>"}function ae(O,U,C){var D=C>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+C+"</div>":"",K=U?'data-form-id="'+U.id+'"':"",ne=O.length>7?14:O.length>5?16:19,te=!!U;return"<div "+K+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(te?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(te?"":"filter:grayscale(1);opacity:0.5")+'">'+D+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(te?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ne+"px;font-weight:900;color:"+(te?"#1A6B3C":"#aaa")+';line-height:1">'+O+'</div></div><div style="flex:1;overflow:hidden;background:'+(te?"#1A6B3C":"#ccc")+'">'+Z(O,140,220)+"</div></div>"}function pe(O,U){var C=window.innerWidth>=768?.76:.54,D=140,K=305,ne=Math.round(K*.22),te=K-ne,_e=O.length>7?10:13,$e=Z(O,D,te),Ee=U?"1.5px solid #2a7a40":"1px solid #ddd",Se=U?"":"filter:grayscale(1);opacity:0.45;",Ae=U?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+C+';line-height:0;pointer-events:none"><div style="width:'+D+"px;height:"+K+"px;border-radius:6px;border:"+Ee+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Se+'"><div style="height:'+ne+"px;background:"+Ae+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+_e+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(D-4)+'px">'+O+'</span></div><div style="height:'+te+'px;overflow:hidden;flex-shrink:0">'+$e+"</div></div></div>"}function he(O){if(j){const U=re();if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const C=U.map(D=>i.find(K=>K.player.id===D.id)||{_fake:!0,player:D,id:"fake-"+D.id});ie(C,D=>D._fake?Ei(D.player):Xt(D,""),D=>D._fake?q({player:D.player,id:"x",_fake:!0}):q(D),D=>{D._fake||Ai(D,i,v,t)})}else{const U=le();if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const C={};U.forEach(K=>{const ne=K.player.id;C[ne]||(C[ne]=[]),C[ne].push(K)});const D=Object.values(C).map(K=>Fn(K));ie(D,K=>{const ne=v[K.player.id]||1,te=ne>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ne}</div>`:"",$e=i.filter(Ee=>Ee.player.id===K.player.id&&Ee.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Xt(K,te+$e)},K=>q(K),K=>Ai(K,i,v,t))}}function xe(O){const U=j?z:[...T];if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const C=U.map(D=>({formation:D,card:f.find(K=>K.formation===D)||null,owned:T.has(D)}));ie(C,({formation:D,card:K,owned:ne})=>ae(D,ne?K:null,ne?f.filter(te=>te.formation===D).length:0),({formation:D,owned:K})=>pe(D,K),({card:D,owned:K})=>{K&&D&&Gn(D,f,t,d)})}function ge(O){const U=Object.keys(y),C=j?U.length?U:o:[...L];if(!C.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const D=C.map(K=>({type:K,gc:Ne[K]||{icon:"⚡",desc:""},def:y[K]||null,owned:L.has(K),card:r.find(ne=>ne.gc_type===K)||null}));ie(D,({type:K,gc:ne,def:te,owned:_e,card:$e})=>{const Ee=_e?r.filter(g=>g.gc_type===K).length:0,Se=Ee>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ee}</div>`:"",Ae=(te==null?void 0:te.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ke={purple:"#b06ce0",light_blue:"#00d4ef"},qe=Te[te==null?void 0:te.color]||Te.purple,Re=ke[te==null?void 0:te.color]||ke.purple,k=(te==null?void 0:te.effect)||ne.desc||"",u=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return _e&&$e?`<div data-gc-id="${$e.id}" data-gc-type="${K}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Re};background:${qe};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Re}66;cursor:pointer">
          ${Se}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${K.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${K}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ae?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${u?`<img src="${u}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ne.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${k.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${K}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ne.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:K,gc:ne,def:te,owned:_e})=>{const $e=window.innerWidth>=768?.76:.54,Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Se={purple:"#9b59b6",light_blue:"#00bcd4"},Ae=Ee[te==null?void 0:te.color]||Ee.purple,Te=Se[te==null?void 0:te.color]||Se.purple,ke=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return _e?`<div style="display:inline-block;zoom:${$e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ae};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${K}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ke?`<img src="${ke}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ne.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((te==null?void 0:te.effect)||ne.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${$e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ne.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${K}</span></div></div>`},({type:K,owned:ne,def:te})=>{ne&&qn(K,te,d)})}e.querySelectorAll(".col-tab-btn").forEach(O=>{O.addEventListener("click",()=>{S=O.dataset.tab,P="Tous",F="",j=!1,e.querySelectorAll(".col-tab-btn").forEach(U=>{const C=U.dataset.tab===S;U.style.borderBottomColor=C?"var(--green)":"transparent",U.style.color=C?"var(--green)":"var(--gray-600)"}),M(),Y()})}),M(),Y()}function qn(e,t,n){const a=Ne[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[t==null?void 0:t.color]||d.purple,p=s[t==null?void 0:t.color]||s.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ft=1e3;function Gn(e,t,n,a){var z,o,v;const{state:c,toast:d,closeModal:s,navigate:l,refreshProfile:p}=n,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const T=St[i]||{},L=ai[i]||[],S=290,P=360,F=20;function j(ee){const le=T[ee];return le?{x:le.x*S,y:le.y*P}:null}let R=`<svg width="${S}" height="${P}" viewBox="0 0 ${S} ${P}" xmlns="http://www.w3.org/2000/svg">`;for(const[ee,le]of L){const re=j(ee),M=j(le);!re||!M||(R+=`<line x1="${re.x}" y1="${re.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ee of Object.keys(T)){const le=j(ee);if(!le)continue;const re=ee.replace(/\d+/,""),M=r[re]||"#555";R+=`<circle cx="${le.x}" cy="${le.y}" r="${F}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,R+=`<text x="${le.x}" y="${le.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return R+="</svg>",R}const m=t.filter(T=>T.formation===i);m.length;const y=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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

    <!-- Marché (optionnel) -->
    ${y?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ft}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(z=document.getElementById("direct-sell-form-btn"))==null||z.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${Ft.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const T=m.find(S=>!S.is_for_sale)||m[0];if(!T){d("Aucune carte à vendre","error");return}await $.from("market_listings").delete().eq("card_id",T.id),await $.from("transfer_history").delete().eq("card_id",T.id);const{error:L}=await $.from("cards").delete().eq("id",T.id);if(L){d(L.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+Ft}).eq("id",c.profile.id),await p(),d(`+${Ft.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(o=document.getElementById("market-sell-form-btn"))==null||o.addEventListener("click",async()=>{const T=parseInt(document.getElementById("sell-price-form").value);if(!T||T<1){d("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:T}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:T}),d("Carte mise en vente sur le marché !","success"),s(),l("collection")}),(v=document.getElementById("cancel-sell-form-btn"))==null||v.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),l("collection")})}async function Ai(e,t,n,a){var ae,pe,he,xe,ge,O,U;const{state:c,toast:d,openModal:s,closeModal:l,navigate:p,refreshProfile:i}=a,r=e.player,f=t.filter(C=>C.player.id===r.id),m=f.length,y=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0),z=r.rarity||"normal",{data:o}=await $.from("sell_price_configs").select("*").eq("rarity",z).lte("note_min",y).gte("note_max",y).order("note_min",{ascending:!1}).limit(1),v=((ae=o==null?void 0:o[0])==null?void 0:ae.price)??Bn[z]??1e3,T=r.rarity!=="legende",L=Yi(r),S=(r.rarity==="pepite"||r.rarity==="papyte")&&e.current_note!=null?e.current_note:zt(r,r.job),P=r.rarity==="pepite"||r.rarity==="papyte",F=r.job2?P?Oi(e,Vi(r.job2)):zt(r,r.job2):null,j=At[r.job]||"#1A6B3C",R=r.job2?At[r.job2]:null,ee=Ki[r.rarity]||"#ccc",le=li[r.country_code]||r.country_code||"",re=f.map(C=>C.id);let M={};if(re.length){const{data:C}=await $.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(C||[]).forEach(D=>{M[D.card_id]||(M[D.card_id]=[]),M[D.card_id].push(D)})}const Y=C=>{const D=C.transferred_at?new Date(C.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",K=C.source==="booster"?"Booster":C.price?C.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${C.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${C.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${D}</div>
      </div>
    </div>`},ie=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${m>1?`(${m})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((C,D)=>{const K=M[C.id]||[],ne=C.is_for_sale,te=K.length?K[K.length-1]:null,$e=(r.rarity==="pepite"||r.rarity==="papyte")&&C.current_note!=null?` (☆${C.current_note})`:"";return`
            <div data-card-id="${C.id}" data-card-idx="${D}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${ne?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${C.id}" ${ne?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${D+1}${$e}${ne?" 🏷️ En vente":""}</div>
                  ${te?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${te.club_name} · ${te.source==="booster"?"Booster":te.price?te.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${D}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${K.length?`${K.length} club${K.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${D}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${K.map(Y).join("")}
              </div>
            </div>`}).join("")}
      </div>

      <!-- Panneau d'action (visible quand au moins 1 sélectionné) -->
      <div id="sell-action-panel" style="display:none;margin-top:12px;background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px">
        <div style="font-size:13px;font-weight:900;color:#1A6B3C;margin-bottom:10px">
          <span id="sell-selected-count">0</span> exemplaire(s) sélectionné(s)
        </div>

        <!-- Vente directe -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div>
            <div style="font-size:11px;color:#555">Vente directe</div>
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${v.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${T?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${r.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";s(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${ee};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${j}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${j}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${S}</text>
            </svg>
            ${F!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${R}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${F}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${le}</div>
            ${(pe=r.clubs)!=null&&pe.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((he=r.clubs)==null?void 0:he.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${ee}">${r.rarity.toUpperCase()}</div>
          ${r.rarity==="pepite"||r.rarity==="papyte"?`
          <div style="margin-top:6px;background:${ee}18;border-left:3px solid ${ee};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${ee};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${r.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(r.rarity==="pepite"?r.note_min:r.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${r.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${r.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${r.job}${r.job2?" / "+r.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([C,D])=>{const K=At[C],ne=Number(D)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${K}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${C}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${ie}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",l);let q=new Set;const Z=()=>{const C=q.size,D=document.getElementById("sell-action-panel");D&&(D.style.display=C>0?"block":"none",document.getElementById("sell-selected-count").textContent=C,document.getElementById("sell-direct-total").textContent=(C*v).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(C=>{C.addEventListener("change",()=>{const D=C.dataset.id;C.checked?q.add(D):q.delete(D);const K=C.closest(".exemplaire-row");K&&(K.style.borderColor=C.checked?"#1A6B3C":"#eee"),Z()})}),document.querySelectorAll(".exemplaire-row").forEach(C=>{C.addEventListener("click",D=>{if(D.target.closest("button")||D.target.tagName==="INPUT")return;const K=C.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(C=>{C.addEventListener("click",D=>{D.stopPropagation();const K=document.querySelector(`.expl-hist[data-hist="${C.dataset.idx}"]`);K&&(K.style.display=K.style.display==="none"?"flex":"none")})}),(ge=document.getElementById("direct-sell-btn"))==null||ge.addEventListener("click",async()=>{const C=[...q];if(!C.length)return;const D=C.length*v;if(!confirm(`Vendre ${C.length} carte${C.length>1?"s":""} ${r.surname_encoded} pour ${D.toLocaleString("fr")} crédits ? Action irréversible.`))return;await $.from("market_listings").delete().in("card_id",C),await $.from("transfer_history").delete().in("card_id",C);const{error:K}=await $.from("cards").delete().in("id",C);if(K){d(K.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+D}).eq("id",c.profile.id),await i();const ne=document.getElementById("nav-credits");ne&&(ne.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d(`+${D.toLocaleString("fr")} crédits ! ${C.length} carte${C.length>1?"s":""} vendue${C.length>1?"s":""}.`,"success"),l(),p("collection")}),(O=document.getElementById("market-sell-btn"))==null||O.addEventListener("click",async()=>{var _e;const C=[...q];if(!C.length){d("Sélectionne au moins un exemplaire","warning");return}const D=parseInt((_e=document.getElementById("sell-market-price"))==null?void 0:_e.value);if(!D||D<1){d("Prix invalide","error");return}const{error:K}=await $.from("cards").update({is_for_sale:!0,sale_price:D}).in("id",C);if(K){d(K.message,"error");return}const ne=C.map($e=>({seller_id:c.profile.id,card_id:$e,price:D,status:"active"})),{error:te}=await $.from("market_listings").insert(ne);te&&console.warn("[Market] insert listings:",te.message),d(`${C.length} carte${C.length>1?"s":""} mise${C.length>1?"s":""} en vente à ${D.toLocaleString("fr")} cr. chacune !`,"success"),l(),p("collection")}),(U=document.getElementById("cancel-sell-btn"))==null||U.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),l(),p("collection")})}const Pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Yt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Wi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Xi(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Nn(e,t=44,n=58){var y;const a=e?Yt(e):null,c=e?Xi(e):null,d=Wi(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",l=rt[s]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(n*.19),f=Math.round(n*.25),m=n-r-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(y=e==null?void 0:e.clubs)!=null&&y.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qt(e,t){const{state:n,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(d==null?void 0:d.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(d==null?void 0:d.length)>0?d.map(s=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:l,error:p}=await $.from("decks").insert({owner_id:n.profile.id,name:s}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),Ti(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Ti(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",s.dataset.name);if(!l||l===s.dataset.name)return;const{error:p}=await $.from("decks").update({name:l}).eq("id",s.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),Qt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:l}=await $.from("decks").delete().eq("id",s.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),Qt(e,t)})})}async function Ti(e,t,n){const{state:a,toast:c}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("decks").select("*").eq("id",e).single(),{data:s}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(s||[]).filter(y=>y.card_type==="player"&&y.player),p=(s||[]).filter(y=>y.card_type==="formation"),i=p.map(y=>y.formation).filter(Boolean),{data:r}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=d.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:d.name,formation:f,formationCardId:d.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:p,availableFormations:i};(r||[]).forEach(y=>{y.is_starter?m.slots[y.position]=y.card_id:m.subs.includes(y.card_id)||m.subs.push(y.card_id)}),ut(t,m,n)}function ut(e,t,n){var p;const{navigate:a}=n;Pt[t.formation];const c=Ii(t.formation),d=c.filter(i=>t.slots[i]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Pt),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${d}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${s.map(i=>`<option value="${i}" ${i===t.formation?"selected":""}>${i}</option>`).join("")}
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
            ${Nn(r,44,58)}
            <button data-remove-sub="${i.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${d<11?"disabled":""}>
        ${d<11?`Placez encore ${11-d} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,Pn(e,t,c,n),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=Ii(t.formation),f={};r.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,ut(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Hn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),ut(e,t,n)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{On(t,e,n)})}function Pn(e,t,n,a){const c=e.querySelector("#deck-field");if(!c)return;const d=St[t.formation]||{},s=Fi(t.formation)||[],l={};for(const T of n){const L=t.slots[T],S=L?t.playerCards.find(P=>P.id===L):null;l[T]=S?S.player:null}const p=300,i=300,r=48,f=64,m=13,y=16,z=38;function o(T){const L=d[T];return L?{x:L.x*p,y:L.y*i}:null}let v="";for(const[T,L]of s){const S=o(T),P=o(L);if(!S||!P)continue;const F=l[T]?{...l[T],club_id:l[T].club_id,country_code:l[T].country_code,rarity:l[T].rarity}:null,j=l[L]?{...l[L],club_id:l[L].club_id,country_code:l[L].country_code,rarity:l[L].rarity}:null,R=Qe(F,j);R==="#ff3333"||R==="#cc2222"?v+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${R}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(v+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${R}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,v+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${R}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const T of n){const L=o(T);if(!L)continue;const S=l[T],P=T.replace(/\d+/,""),F=rt[P]||"#555",j=(L.x-r/2).toFixed(1),R=(L.y-f/2).toFixed(1),ee={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[S==null?void 0:S.rarity]||"#aaa";if(S){const le=Yt(S),re=Xi(S),M=Wi(S.country_code),Y=Number(P==="GK"?S.note_g:P==="DEF"?S.note_d:P==="MIL"?S.note_m:S.note_a)||0,ie=f-m-y;v+=`<defs><clipPath id="dcp-${T}"><rect x="${j}" y="${(L.y-f/2+m).toFixed(1)}" width="${r}" height="${ie}"/></clipPath></defs>`,v+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="${F}"/>`,le&&(v+=`<image href="${le}" x="${j}" y="${(L.y-f/2+m).toFixed(1)}" width="${r}" height="${ie}" clip-path="url(#dcp-${T})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${j}" y="${R}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,v+=`<text x="${L.x.toFixed(1)}" y="${(L.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(S.surname_encoded||"").slice(0,9)}</text>`;const q=(L.y+f/2-y).toFixed(1);v+=`<rect x="${j}" y="${q}" width="${r}" height="${y}" fill="rgba(255,255,255,0.93)"/>`,M&&(v+=`<image href="${M}" x="${(L.x-21).toFixed(1)}" y="${(L.y+f/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),v+=`<text x="${L.x.toFixed(1)}" y="${(L.y+f/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,re&&(v+=`<image href="${re}" x="${(L.x+r/2-14).toFixed(1)}" y="${(L.y+f/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),v+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="none" stroke="${ee}" stroke-width="2"/>`}else v+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,v+=`<text x="${L.x.toFixed(1)}" y="${L.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,v+=`<text x="${L.x.toFixed(1)}" y="${(L.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${P}</text>`;v+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${T}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-z} ${-z} ${p+z*2} ${i+z*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${v}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(T=>{T.addEventListener("click",()=>Rn(T.dataset.pos,t,e,a))})}function Rn(e,t,n,a){var m,y,z;const{openModal:c,closeModal:d}=a,s=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(o=>o.id===l):null;(m=p==null?void 0:p.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,v])=>{var L;if(o===e||!v)return;const T=t.playerCards.find(S=>S.id===v);(L=T==null?void 0:T.player)!=null&&L.id&&i.add(T.player.id)}),t.subs.forEach(o=>{var T;const v=t.playerCards.find(L=>L.id===o);(T=v==null?void 0:v.player)!=null&&T.id&&i.add(v.player.id)});const r=new Set,f=t.playerCards.filter(o=>{const v=o.player;return!(v.job===s||v.job2===s)||i.has(v.id)||r.has(v.id)?!1:(r.add(v.id),!0)});f.sort((o,v)=>{const T=s==="GK"?o.player.note_g:s==="DEF"?o.player.note_d:s==="MIL"?o.player.note_m:o.player.note_a;return(s==="GK"?v.player.note_g:s==="DEF"?v.player.note_d:s==="MIL"?v.player.note_m:v.player.note_a)-T}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var P,F;const v=o.player,T=s==="GK"?v.note_g:s==="DEF"?v.note_d:s==="MIL"?v.note_m:v.note_a,L=Yt(v),S={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[v.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[s]}">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${rt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${v.firstname} ${v.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${v.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${v.country_code}">
              ${(P=v.clubs)!=null&&P.logo_url?`<img src="${v.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((F=v.clubs)==null?void 0:F.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${v.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${rt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${S};flex-shrink:0">
            ${T}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",d),(z=document.getElementById("remove-player"))==null||z.addEventListener("click",()=>{delete t.slots[e],d(),ut(n,t,a)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,d(),ut(n,t,a)})})}function On(e,t,n){var p;const{openModal:a,closeModal:c}=n,d=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)}),e.subs.forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)});const s=new Set,l=e.playerCards.filter(i=>{var r,f,m;return d.has((r=i.player)==null?void 0:r.id)||s.has((f=i.player)==null?void 0:f.id)?!1:(s.add((m=i.player)==null?void 0:m.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var y;const r=i.player,f=Yt(r),m=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[r.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((y=r.clubs)==null?void 0:y.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${rt[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),ut(t,e,n)})})}async function Hn(e,t){const{state:n,toast:a,navigate:c}=t,d=e.formationCards.find(p=>p.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:r})}),e.subs.forEach((p,i)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:p}=await $.from("deck_cards").insert(l);if(p){a(p.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function Ii(e){const t=Pt[e]||Pt["4-4-2"],n=["GK1"];for(let a=1;a<=t.DEF;a++)n.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)n.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)n.push(`ATT${a}`);return n}async function Ji(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(a=>a.booster_id===n.id)}))}function Un(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let n=Math.random()*t;for(const a of e)if(n-=Number(a.percentage),n<=0)return a;return e[e.length-1]}const Zi=()=>Object.keys(St),Kn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ei={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Vn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const Li={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Yn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Wn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function zi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Xn(e){var r,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",a=Li[n],c=Yn[t.rarity]||"#ccc",d=zi(t,n),s=t.job2?zi(t,t.job2):null,l=t.job2?Li[t.job2]:null,p=Vn(t),i=Wn[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${a}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${a}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Qi(e){var c;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const n=((c=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Jn(e,{state:t,navigate:n,toast:a}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await Ji()).map(Qi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}d.length||(d=Kn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(l=>{const p=l.cost===0||c>=l.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=d.find(i=>i.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Zn(p,{state:t,toast:a,navigate:n,container:e})}catch(i){a(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const i=d.find(r=>r.id===l.dataset.boosterId);io(i)})})}async function Zn(e,{state:t,toast:n,navigate:a,container:c}){var r;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await ro()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((d||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let p=[];if((r=e.rates)!=null&&r.length)p=await ti(t.profile,e);else{const f=e.type||"player";f==="player"?p=await en(t.profile,e.cardCount,e.cost):f==="game_changer"?p=await tn(t.profile,e.cardCount,e.cost):f==="formation"?p=await nn(t.profile,e.cost):p=await ti(t.profile,e)}p.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=s.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await $.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),on(p,e,a)}function Qn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function eo(e,t){let n;switch(t){case"legende":n=e.filter(a=>a.rarity==="legende"),n.length||(n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),n.length||(n=e.filter(a=>tt(a)>=6));break;case"special":n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),n.length||(n=e.filter(a=>tt(a)>=6));break;case"normal_high":n=e.filter(a=>a.rarity==="normal"&&tt(a)>=6),n.length||(n=e.filter(a=>tt(a)>=6));break;default:n=e.filter(a=>a.rarity==="normal"&&tt(a)>=1&&tt(a)<=5),n.length||(n=e.filter(a=>a.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ti(e,t){if(t.cost>0){const{error:l}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await $.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),c=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),d=new Set,s=[];for(let l=0;l<(t.cardCount||5);l++){const p=Un(t.rates);if(p){if(p.card_type==="player"){const i=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,r=p.rarity?i(p.rarity):null;let f=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(f=f.eq("rarity",r));const{data:m}=await f;let y=m||[];if((p.note_min||p.note_max)&&(y=y.filter(L=>{const S=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!p.note_min||S>=p.note_min)&&(!p.note_max||S<=p.note_max)})),y.length||(p.note_min||p.note_max?(y=m||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):y=m||[]),!y.length)continue;let z=y.filter(L=>!d.has(L.id));z.length||(z=y);const o=z[Math.floor(Math.random()*z.length)];d.add(o.id);const v=a.has(o.id),{data:T}=await $.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();T&&(s.push({...T,player:o,isDuplicate:v}),$.rpc("record_transfer",{p_card_id:T.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:i}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=r[Math.floor(Math.random()*r.length)].name,{data:y}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();y&&s.push(y)}else if(p.card_type==="formation"){const i=Zi(),r=i[Math.floor(Math.random()*i.length)],f=c.has(r),{data:m}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();m!=null&&m[0]&&s.push({...m[0],isDuplicate:f})}}}return s}async function en(e,t,n){if(n>0){const{error:i}=await $.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:a}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(i=>i.job==="GK"),d=a.filter(i=>i.job!=="GK"),s=!e.first_booster_opened&&c.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&s?c:i===0?d:a,f=Qn(),m=eo(r,f);m&&l.push(m)}s&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await $.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,r)=>{$.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...p[r],player:i}))}async function tn(e,t,n){const{error:a}=await $.from("users").update({credits:e.credits-n}).eq("id",e.id);if(a)throw a;const{data:c}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=c!=null&&c.length?c:Object.keys(ei).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:p}=await $.from("cards").insert(s).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(r=>{const f=c==null?void 0:c.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:f||null}})}async function nn(e,t){const{error:n}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:a}=await $.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(r=>r.formation)),d=Zi(),s=d[Math.floor(Math.random()*d.length)],l=c.has(s),{data:p,error:i}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(p||[]).map(r=>({...r,isDuplicate:l}))}function on(e,t,n,a=null){var Y,ie;if(!e||e.length===0){const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",q.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(q),(Y=q.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>q.remove());return}e=[...e].sort((q,Z)=>{const ae=q.player?tt(q.player):-1;return(Z.player?tt(Z.player):-1)-ae});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let d=!1;const s=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const i=q=>q.touches&&q.touches[0]?q.touches[0].clientX:q.clientX;function r(q){d||(p=!0,l.style.opacity="1",f(q))}function f(q){if(!p||d)return;const Z=s.getBoundingClientRect(),ae=i(q)-Z.left,pe=Math.max(0,Math.min(1,ae/Z.width));l.style.width=pe*Z.width+"px",pe>=.82&&y()}function m(){d||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{d||(l.style.transition="")},220))}function y(){var Z;if(d)return;d=!0,p=!1,l.style.width="100%",l.style.opacity="1",(Z=document.getElementById("cut-flash"))==null||Z.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const q=document.getElementById("cut-hint");q&&(q.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",T(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let z=0,o=!1;const v=new Set;function T(q){z=q,document.getElementById("reveal-phase").style.display="flex",L(),S(q,0),ee()}function L(){const q=document.getElementById("card-dots");q&&(q.innerHTML=e.map((Z,ae)=>`<div class="card-dot" data-i="${ae}" style="width:8px;height:8px;border-radius:50%;background:${ae===z?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),q.querySelectorAll(".card-dot").forEach(Z=>Z.addEventListener("click",()=>F(parseInt(Z.dataset.i)))))}function S(q,Z){var D;const ae=e[q],pe=document.getElementById("card-counter"),he=document.getElementById("card-track");pe&&(pe.textContent=`Carte ${q+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=q===e.length-1?"flex":"none");const ge=ae.card_type==="player"&&((D=ae.player)==null?void 0:D.rarity)==="legende",O=!v.has(q);v.add(q);let U=0;if(ae.card_type==="player"&&ae.player){const K=ae.player,ne=K.job||"ATT";U=Number(ne==="GK"?K.note_g:ne==="DEF"?K.note_d:ne==="MIL"?K.note_m:K.note_a)||0}const C=K=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ge?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${to(ae)}</div>
          ${ae.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ne=document.getElementById("current-card-wrap");Z!==0?(ne.style.transition="none",ne.style.transform=`translateX(${Z>0?100:-100}%)`,requestAnimationFrame(()=>{ne.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ne.style.transform="translateX(0)"})):ne.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),K||ge?re():M(),L()};O&&U>6&&ae.card_type==="player"&&ae.player?P(ae,()=>C(!0)):C(!1)}function P(q,Z){var U;o=!0;const ae=q.player,pe=`https://flagsapi.com/${ae.country_code}/flat/64.png`,he=(U=ae.clubs)==null?void 0:U.logo_url,xe=document.getElementById("walkout-overlay"),ge=document.getElementById("walkout-stage");if(!xe||!ge){o=!1,Z();return}xe.style.display="flex";const O=()=>{const C=ge.firstElementChild;C&&(C.classList.remove("wo-in"),C.classList.add("wo-out"))};ge.innerHTML=`<img class="wo-in" src="${pe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(O,2e3),setTimeout(()=>{var C;ge.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((C=ae.clubs)==null?void 0:C.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(O,4450),setTimeout(()=>{xe.style.display="none",ge.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Z()},4900)}function F(q){if(o||q<0||q>=e.length||q===z)return;const Z=q>z?1:-1;z=q,S(q,Z)}function j(){F(z+1)}function R(){F(z-1)}function ee(){const q=document.getElementById("card-viewport");if(!q||q._swipeBound)return;q._swipeBound=!0;let Z=0,ae=0,pe=0,he=!1;const xe=D=>D.touches?D.touches[0].clientX:D.clientX,ge=D=>D.touches?D.touches[0].clientY:D.clientY,O=D=>{he=!0,Z=xe(D),ae=ge(D),pe=0},U=D=>{if(!he)return;pe=xe(D)-Z;const K=ge(D)-ae;if(Math.abs(pe)<Math.abs(K))return;const ne=document.getElementById("current-card-wrap");ne&&(ne.style.transition="none",ne.style.transform=`translateX(${pe*.6}px) rotate(${pe*.02}deg)`)},C=()=>{if(!he)return;he=!1;const D=document.getElementById("current-card-wrap"),K=55;pe<=-K&&z<e.length-1?j():pe>=K&&z>0?R():D&&(D.style.transition="transform .2s ease",D.style.transform="translateX(0)")};q.addEventListener("pointerdown",O),q.addEventListener("pointermove",U),q.addEventListener("pointerup",C),q.addEventListener("pointercancel",C),q.addEventListener("touchstart",O,{passive:!0}),q.addEventListener("touchmove",U,{passive:!0}),q.addEventListener("touchend",C),q.addEventListener("click",D=>{if(Math.abs(pe)>8)return;const K=q.getBoundingClientRect();D.clientX-K.left>K.width/2?j():R()})}let le=null;function re(){const q=document.getElementById("fireworks-canvas");if(!q)return;q.width=window.innerWidth,q.height=window.innerHeight;const Z=q.getContext("2d"),ae=[];function pe(){const xe=Math.random()*q.width,ge=Math.random()*q.height*.6,O=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],U=O[Math.floor(Math.random()*O.length)];for(let C=0;C<60;C++){const D=Math.PI*2/60*C,K=2+Math.random()*5;ae.push({x:xe,y:ge,vx:Math.cos(D)*K,vy:Math.sin(D)*K,alpha:1,color:U,size:2+Math.random()*3})}}pe(),le=setInterval(pe,600);function he(){if(document.getElementById("fireworks-canvas")){Z.clearRect(0,0,q.width,q.height);for(let xe=ae.length-1;xe>=0;xe--){const ge=ae[xe];if(ge.x+=ge.vx,ge.y+=ge.vy+.08,ge.vy*=.98,ge.alpha-=.018,ge.alpha<=0){ae.splice(xe,1);continue}Z.globalAlpha=ge.alpha,Z.fillStyle=ge.color,Z.beginPath(),Z.arc(ge.x,ge.y,ge.size,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,(le!==null||ae.length>0)&&requestAnimationFrame(he)}}he()}function M(){le!==null&&(clearInterval(le),le=null);const q=document.getElementById("fireworks-canvas");q&&q.getContext("2d").clearRect(0,0,q.width,q.height)}if(a){const q=document.getElementById("reveal-btns");q&&(q.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ie=document.getElementById("reveal-next"))==null||ie.addEventListener("click",()=>{M(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{M(),c.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{M(),c.remove(),n("boosters")})}function to(e){var t,n;if(e.card_type==="player"&&e.player)return Xn(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[a==null?void 0:a.color]||d.purple,p=s[a==null?void 0:a.color]||s.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=ei[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,m=((n=ei[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function io(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${d[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>a.remove());return}no()}function no(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const oo="simulation",rn="VOTRE_ZONE_ID";function ro(){switch(oo){case"propellerads":return ao();case"adsense":return so();default:return ci()}}function ci(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{n--;const c=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");c&&(c.textContent=n),d&&(d.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(a),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ao(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(ci());window.propeller.push({zone_id:rn,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function so(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(ci());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:rn,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function lo(e,{state:t,navigate:n,toast:a,refreshProfile:c}){var m,y;const{data:d}=await $.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await $.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Ji()).find(v=>(v.name||"").toLowerCase().includes("new player"));o&&(l=Qi(o))}catch(z){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',z)}const p=s.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await $.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function f(){var L;if(i>=p||!s.length){await $.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const z=s[0],{data:o}=await $.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let v=[];try{if(z.type==="formation")v=await nn(t.profile,0);else if(z.type==="game_changer")v=await tn(t.profile,z.count||3,0);else if(l&&((L=l.rates)!=null&&L.length)){const S={...l,cost:0,cardCount:z.count||l.cardCount||5};v=await ti(t.profile,S),z.guaranteeGK&&!t.profile.first_booster_opened&&(v.some(F=>F.player&&F.player.job==="GK")||await co(t.profile,v),await $.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else v=await en(t.profile,z.count||5,0)}catch(S){a(S.message||"Erreur ouverture booster","error");return}s.shift(),i++,await r();const T=z.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:z.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${p})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};on(v,T,n,()=>{f()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>f())}async function co(e,t){try{const{data:n}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const a=n[Math.floor(Math.random()*n.length)],c=t.findIndex(s=>s.player);if(c===-1)return;const d=t[c];await $.from("cards").update({player_id:a.id}).eq("id",d.id),t[c]={...d,player_id:a.id,player:a}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}const ft={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},gt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e,t,n,a,c){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",c)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function ii(e,t){var a,c;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((a=n.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=n.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function pi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function mt(e,t){const n=ft[t]||ft["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===s).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:s})),p=ot(l.length);l.forEach((i,r)=>{i._col=p[r]}),a[s]=l}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[s];i++){let r=d.findIndex(f=>f.job===s);if(r===-1&&(r=d.findIndex(f=>f.job2===s)),r===-1&&(r=0),d[r]){const f={...d[r],_line:s};l.push(f),d.splice(r,1)}}const p=ot(l.length);l.forEach((i,r)=>{i._col=p[r]}),a[s]=l}return a}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ui(e,t,n){const c=new Set,d=t.filter(r=>{const f=r.gc_type||r.id;return c.has(f)?!1:(c.add(f),!0)});let s=[];function l(r,f){const m=r._gcDef,y={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},z={purple:"#9b59b6",light_blue:"#00bcd4"},o=y[m==null?void 0:m.color]||y.purple,v=z[m==null?void 0:m.color]||z.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":v};background:${o};
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
    </div>`}const p=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(r)};function i(){var f,m,y;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${d.map(z=>{const o=s.find(v=>v.gc_type===z.gc_type);return l(z,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(z=>{z.addEventListener("click",()=>{const o=z.dataset.id,v=d.find(L=>L.id===o);if(!v)return;const T=s.findIndex(L=>L.gc_type===v.gc_type);T>-1?s.splice(T,1):s.length<3&&s.push(v),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{r&&p(s)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>p([])),(y=e.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{s.length&&(s=[],i())})}i()}function po(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function uo(e,t,n){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){at(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=d.map(r=>r.id),{data:l}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let p=0;function i(){var L,S,P,F,j;const r=d[p],f=(l||[]).filter(R=>R.deck_id===r.id),m=f.filter(R=>{var ee;return R.is_starter&&((ee=R.card)==null?void 0:ee.player)}).map(R=>ii(R.card,R.position)),y=f.find(R=>{var ee;return((ee=R.card)==null?void 0:ee.card_type)==="formation"}),z=r.formation||((L=y==null?void 0:y.card)==null?void 0:L.formation)||"4-4-2",o=m.length>=11?mt(m,z):null,v=m.length>=11;Xe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${po(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${z} · ${m.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===d.length-1?"0.1":"0.3"});color:${p===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(o,z,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((R,ee)=>`<div style="width:7px;height:7px;border-radius:50%;background:${ee===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const ee=e.querySelector(".deck-preview-wrap svg");ee&&(ee.removeAttribute("width"),ee.removeAttribute("height"),ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{p>0&&(p--,i())}),(P=document.getElementById("next-deck"))==null||P.addEventListener("click",()=>{p<d.length-1&&(p++,i())}),(F=document.getElementById("validate-deck"))==null||F.addEventListener("click",()=>{if(!v)return;const R=t.state.params||{};t.navigate("match",{...R,matchMode:R.matchMode||n,deckId:r.id})}),(j=document.getElementById("cancel-deck-select"))==null||j.addEventListener("click",()=>{He(e),c("home")});const T=document.getElementById("deck-swipe-zone");if(T){let R=0,ee=0;T.addEventListener("touchstart",le=>{R=le.touches[0].clientX,ee=le.touches[0].clientY},{passive:!0}),T.addEventListener("touchend",le=>{const re=le.changedTouches[0].clientX-R,M=le.changedTouches[0].clientY-ee;Math.abs(re)<40||Math.abs(re)<Math.abs(M)||(re<0&&p<d.length-1?(p++,i()):re>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function an(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),c=an(e),d=e._line||e.job||"MIL",s=gt[d]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(we(e,d))||0)+(e.boost||0),i=sn(e==null?void 0:e.country_code),r=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),y=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${y}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Rt(e==null?void 0:e.country_code)?`<img src="${Rt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(c+=Ve(d,40,52),s<a.length-1){const l=Qe(d,a[s+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),c+="</div>",c}function Rt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function sn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,a,c=310,d=310,s=[]){var S;const l=St[t]||{},p=Fi(t)||ai[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const P of r)(e[P]||[]).forEach((j,R)=>{i[`${P}${R+1}`]=j});function f(P){const F=l[P];return F?{x:F.x*c,y:F.y*d}:null}let m="";for(const[P,F]of p){const j=f(P),R=f(F);if(!j||!R)continue;const ee=i[P],le=i[F],re=Qe(ee,le);re==="#00ff88"||re==="#FFD700"?(m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${R.x.toFixed(1)}" y2="${R.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${R.x.toFixed(1)}" y2="${R.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${R.x.toFixed(1)}" y2="${R.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const y=48,z=64,o=13,v=16,T={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[P,F]of Object.entries(i)){const j=f(P);if(!j||!F)continue;const R=P.replace(/[0-9]/g,""),ee=gt[R]||"#555",le=s.includes(F.cardId),re=n==="attack"&&(["MIL","ATT"].includes(R)||le)&&!F.used||n==="defense"&&["GK","DEF","MIL"].includes(R)&&!F.used,M=a.includes(F.cardId);let Y;n==="attack"?Y=le?Math.max(1,Number(F.note_a)||0):R==="MIL"?Number(F.note_m)||0:Number(F.note_a)||0:n==="defense"?Y=R==="GK"?Number(F.note_g)||0:R==="MIL"?Number(F.note_m)||0:Number(F.note_d)||0:Y=Number(R==="GK"?F.note_g:R==="DEF"?F.note_d:R==="MIL"?F.note_m:F.note_a)||0,Y=Y+(F.boost||0);const ie=(j.x-y/2).toFixed(1),q=(j.y-z/2).toFixed(1),Z=T[F==null?void 0:F.rarity]||T.normal;if(F.used){const U=typeof import.meta<"u"&&"/manager-wars/"||"/",D=`${typeof window<"u"&&((S=window.location)==null?void 0:S.origin)||""}${U}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${ie}" y="${q}" width="${y}" height="${z}" rx="5" fill="#161616"/>`,m+=`<image href="${D}" xlink:href="${D}" x="${ie}" y="${q}" width="${y}" height="${z}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${ie}" y="${q}" width="${y}" height="${z}" rx="5" fill="none" stroke="${Z}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${ie}" y="${q}" width="${y}" height="${z}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${F.cardId}" data-role="${R}" style="cursor:pointer"/>`;continue}const ae=M?.45:1,pe=M?"#FFD700":Z,he=M?3:(F==null?void 0:F.rarity)==="legende"||(F==null?void 0:F.rarity)==="légende"||(F==null?void 0:F.rarity)==="pepite"||(F==null?void 0:F.rarity)==="pépite"?2.5:2,xe=z-o-v;m+=`<defs><clipPath id="cp-${P}"><rect x="${ie}" y="${(j.y-z/2+o).toFixed(1)}" width="${y}" height="${xe}"/></clipPath></defs>`,m+=`<rect x="${ie}" y="${q}" width="${y}" height="${z}" rx="5" fill="${ee}" opacity="${ae}"/>`;const ge=ze(F);ge&&(m+=`<image href="${ge}" xlink:href="${ge}" x="${ie}" y="${(j.y-z/2+o).toFixed(1)}" width="${y}" height="${xe}" clip-path="url(#cp-${P})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${ie}" y="${q}" width="${y}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y-z/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(F.name||"").slice(0,9)}</text>`;const O=(j.y+z/2-v).toFixed(1);m+=`<rect x="${ie}" y="${O}" width="${y}" height="${v}" fill="rgba(255,255,255,0.92)"/>`;{const U=Rt(F.country_code);U?m+=`<image href="${U}" xlink:href="${U}" x="${(j.x-20).toFixed(1)}" y="${(j.y+z/2-v+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(j.x-13).toFixed(1)}" y="${(j.y+z/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${sn(F.country_code)}</text>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y+z/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const C=an(F);C?m+=`<image href="${C}" xlink:href="${C}" x="${(j.x+y/2-14).toFixed(1)}" y="${(j.y+z/2-v+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:F.clubName&&(m+=`<text x="${(j.x+14).toFixed(1)}" y="${(j.y+z/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(F.clubName||"").slice(0,3).toUpperCase()}</text>`),F.boost&&(m+=`<rect x="${(j.x+y/2-12).toFixed(1)}" y="${(j.y-z/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(j.x+y/2-5).toFixed(1)}" y="${(j.y-z/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${F.boost}</text>`)}m+=`<rect x="${ie}" y="${q}" width="${y}" height="${z}" rx="5" fill="${M?"rgba(255,255,255,0.12)":"none"}" stroke="${pe}" stroke-width="${he}" opacity="${ae}"/>`,re&&(m+=`<rect x="${ie}" y="${q}" width="${y}" height="${z}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${M?"selected":""}" data-card-id="${F.cardId}" data-role="${R}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${c+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function dt(e,t,n,a,c=300,d=300,s=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${st(e,t,n,a,c,d,s)}
  </div>`}function nt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function fi(e,t,n,a){var F;const{state:c,navigate:d,toast:s}=t;Xe(e);const l=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return uo(e,t,n);const p=l.deckId;let i,r,f,m;try{const j=await Promise.all([$.from("decks").select("formation,name").eq("id",p).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=j[0].data,f=j[0].error,r=j[1].data,m=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),at(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),at(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const y=(r||[]).filter(j=>{var R;return j.is_starter&&((R=j.card)==null?void 0:R.player)}).map(j=>ii(j.card,j.position)),z=(r||[]).filter(j=>{var R;return!j.is_starter&&((R=j.card)==null?void 0:R.player)}).map(j=>ii(j.card,j.position));if(y.length<11){at(e,"⚠️",`Deck incomplet (${y.length}/11).`,"Compléter",()=>d("decks"));return}const o=(r||[]).find(j=>{var R;return((R=j.card)==null?void 0:R.card_type)==="formation"}),v=(i==null?void 0:i.formation)||((F=o==null?void 0:o.card)==null?void 0:F.formation)||"4-4-2",{data:T,error:L}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:S}=await $.from("gc_definitions").select("*").eq("is_active",!0),P=(T||[]).map(j=>({...j,_gcDef:(S==null?void 0:S.find(R=>R.name===j.gc_type||R.id===j.gc_definition_id))||null}));a({deckId:p,formation:v,starters:y,subsRaw:z,gcCardsEnriched:P,gcDefs:S||[]})}async function fo(e,t){const{state:n}=t,c=(n.params||{}).matchMode||"vs_ai_easy",d=c.replace("vs_ai_",""),s=c;await fi(e,t,c,async({deckId:l,formation:p,starters:i,subsRaw:r,gcCardsEnriched:f,gcDefs:m})=>{try{const y=mt(i,p),z=await go(p,d),o=async v=>{try{const{data:T,error:L}=await $.from("matches").insert({home_id:n.profile.id,away_id:null,mode:s,home_deck_id:l,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),at(e,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>t.navigate("home"));return}const S={gcDefs:m||[],matchId:T==null?void 0:T.id,mode:s,difficulty:d,formation:p,homeTeam:y,aiTeam:z,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};xo(e,S,t)}catch(T){console.error("[MatchIA] Exception launchMatch:",T),at(e,"⚠️","Erreur au lancement du match : "+T.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}ui(e,f,o)}catch(y){console.error("[MatchIA] Exception setup:",y),at(e,"⚠️","Erreur de préparation du match : "+y.message,"Retour",()=>t.navigate("home"))}})}async function go(e,t){var s,l;const{data:n}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return mo(e);const a=ft[e]||ft["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},d=[...n];for(const p of["GK","DEF","MIL","ATT"]){const i=d.filter(z=>z.job===p),r=d.filter(z=>z.job!==p),f=[...i,...r],m=[];for(let z=0;z<a[p];z++){const o=f[z]||d[z];o&&m.push({cardId:"ai-"+o.id+"-"+z,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((s=o.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const y=ot(m.length);m.forEach((z,o)=>{z._col=y[o]}),c[p]=m}return c}function mo(e){const t=ft[e]||ft["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let p=0;p<t[d];p++){const i=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?i:2,note_d:d==="DEF"?i:2,note_m:d==="MIL"?i:2,note_a:d==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:d}),c++}const l=ot(s.length);s.forEach((p,i)=>{p._col=l[i]}),n[d]=s}return n}function xo(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>yo(e,t,n),5e3)}function yo(e,t,n){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function d(o){return o.reduce((v,T)=>v+we(T,"MIL"),0)}function s(o){let v=0;for(let T=0;T<o.length-1;T++){const L=Qe(o[T],o[T+1]);L==="#00ff88"?v+=2:L==="#FFD700"&&(v+=1)}return v}const l=d(a)+s(a),p=d(c)+s(c),i=l>=p;function r(o,v,T,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${v}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((S,P)=>{const F=P<o.length-1?Qe(S,o[P+1]):null,j=!F||F==="#ff3333"||F==="#cc2222",R=F==="#00ff88"?"+2":F==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${P}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...S,note:we(S,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${P<o.length-1?`<div class="duel-link duel-link-${L}" data-idx="${P}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${j?"rgba(255,255,255,0.12)":F};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${j?"none":`0 0 8px ${F}`}">
            ${R?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${F}">${R}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${L}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${d(o)} + ${s(o)} liens = <b style="color:#fff">${d(o)+s(o)}</b>
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

    ${r(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=(v,T)=>e.querySelectorAll(v).forEach((L,S)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},T+S*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((v,T)=>{setTimeout(()=>{v.style.opacity="1"},T*70)}),900),setTimeout(()=>{const v=e.querySelector("#vs-label");v&&(v.style.opacity="1",v.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(T=>T.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",p,800)},1500)};function m(o,v,T){const L=document.getElementById(o);if(!L)return;const S=performance.now(),P=F=>{const j=Math.min(1,(F-S)/T);L.textContent=Math.round(v*(1-Math.pow(1-j,3))),j<1?requestAnimationFrame(P):L.textContent=v};requestAnimationFrame(P)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const y=i?pi():null;i&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:c.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const z=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Me(e,t,n),t.attacker==="ai"&&setTimeout(()=>ni(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),v=document.getElementById("score-ai"),T=document.getElementById(i?"duel-row-home":"duel-row-ai"),L=document.getElementById(i?"duel-row-ai":"duel-row-home"),S=i?o:v,P=i?v:o;S&&(S.style.fontSize="80px",S.style.color=i?"#FFD700":"#ff6b6b",S.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),P&&(P.style.opacity="0.25"),setTimeout(()=>{T&&(T.style.transformOrigin="center",T.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",T.style.zIndex="5"),setTimeout(()=>{var j;const F=document.getElementById("duel-shock");if(F){const R=(j=L||T)==null?void 0:j.getBoundingClientRect(),ee=e.querySelector(".match-screen").getBoundingClientRect();R&&(F.style.top=R.top-ee.top+R.height/2+"px"),F.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var j;const F=document.getElementById("duel-finale");F&&(F.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${y}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,F.style.transition="opacity .45s ease",F.style.opacity="1",F.style.pointerEvents="auto",(j=document.getElementById("start-match-btn"))==null||j.addEventListener("click",z))},600)},700)},2800)}function ho(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(n=>nt(n)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(n=>nt(n)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${nt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${nt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Me(e,t,n){var S,P,F,j,R,ee,le,re;const a=t.selected.map(M=>M.cardId),c=t.usedSubIds||[],d=t.homeSubs.filter(M=>!c.includes(M.cardId)),l=Object.values(t.homeTeam).flat().filter(M=>M.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(M=>(t.aiTeam[M]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(M=>!M.used),r=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(M=>!M.used).map(M=>M.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",y=t.phase==="defense",z=t.phase==="finished",o=t.gcCards.filter(M=>!t.usedGc.includes(M.id)),v=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((Y.players||[]).map(ie=>({...ie,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((Y.players||[]).map(ie=>({...ie,used:!1})),"#00ff88",Y.total)}
          </div>`}const M=t.log[t.log.length-1];return M?'<div style="padding:2px 4px">'+ho(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,Y=(O,U,C)=>{var qe,Re;const D=(t.gcDefs||[]).find(k=>k.name===O.gc_type),K={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[D==null?void 0:D.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ne={purple:"#b06ce0",light_blue:"#00d4ef"}[D==null?void 0:D.color]||"#b06ce0",te=(D==null?void 0:D.name)||O.gc_type,_e=(D==null?void 0:D.effect)||((qe=Ne[O.gc_type])==null?void 0:qe.desc)||"",$e=D!=null&&D.image_url?`/manager-wars/icons/${D.image_url}`:null,Ee=((Re=Ne[O.gc_type])==null?void 0:Re.icon)||"⚡",Se=Math.round(C*.22),Ae=Math.round(C*.22),Te=C-Se-Ae,ke=te.length>12?7:9;return`<div class="gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
          style="box-sizing:border-box;width:${U}px;height:${C}px;border-radius:10px;border:2px solid ${ne};background:${K};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Se}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${ke}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${U-6}px">${te}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Te}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${$e?`<img src="${$e}" style="max-width:${U-10}px;max-height:${Te-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Te*.55)}px">${Ee}</span>`}
          </div>
          <div style="height:${Ae}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${_e.slice(0,38)}</span>
          </div>
        </div>`},ie=(O,U)=>{var C;return`<div id="boost-card"
          style="box-sizing:border-box;width:${O}px;height:${U}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(U*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(U*.2)}px">⚡</div>
            <div style="font-size:${Math.round(U*.09)}px;color:#000;font-weight:900">+${(C=t.boostCard)==null?void 0:C.value}</div>
          </div>`},q=(O,U)=>U?ie(130,175):Y(O,130,175),Z=(O,U)=>U?ie(68,95):Y(O,68,95),ae=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pe=z?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=m||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(O=>`<div class="sub-btn-col" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(O,76,100)}</div>`).join("")}
      </div>`,ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${dt(t.homeTeam,t.formation,t.phase,a,300,300,r)}
        </div>
      </div>`;return M?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${xe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pe}${he}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${o.map(O=>q(O,!1)).join("")}
            ${v?q(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(t.homeTeam,t.formation,t.phase,a,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${o.map(O=>Z(O,!1)).join("")}
            ${v?Z(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${d.length}</div>
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
          <div>${pe}${he}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(M=>{var Y,ie,q;if(M.type==="duel"){const Z=M.isGoal,ae=M.homeScored?"#FFD700":Z?"#ff6b6b":"rgba(255,255,255,0.3)",pe=M.homeScored?"⚽ BUT !":Z?"⚽ BUT IA !":(Y=M.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Z?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
                <div style="font-size:9px;color:${ae};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${pe}</div>
                ${(ie=M.homePlayers)!=null&&ie.length?`<div style="margin-bottom:3px">${it(M.homePlayers,"rgba(255,255,255,0.7)",M.homeTotal)}</div>`:""}
                ${(q=M.aiPlayers)!=null&&q.length?`<div style="opacity:0.7">${it(M.aiPlayers,"#ff6b6b",M.aiTotal)}</div>`:""}
              </div>`}return M.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${M.outPlayer?Ve({...M.outPlayer,used:!0,_line:M.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${M.inPlayer?Ve({...M.inPlayer,_line:M.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:M.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${M.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${M.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function T(){const M=e.querySelector(".match-screen");if(!M)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=Y+"px",M.style.minHeight=Y+"px",M.style.maxHeight=Y+"px",M.style.overflow="hidden";const ie=e.querySelector("#mobile-action-bar"),q=e.querySelector("#mobile-play-area");ie&&q&&(q.style.paddingBottom=ie.offsetHeight+"px")}if(T(),setTimeout(T,120),setTimeout(T,400),setTimeout(T,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",T),window.visualViewport.addEventListener("scroll",T)),window.addEventListener("resize",T)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const M=e.querySelector(".terrain-wrapper svg");M&&(M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let M=!1,Y=30;const ie=()=>document.getElementById("match-timer"),q=()=>{const Z=ie();if(!Z)return;const ae=String(Math.floor(Y/60)).padStart(2,"0"),pe=String(Y%60).padStart(2,"0");Z.textContent=` ${ae}:${pe}`,Z.style.color=M?"#ff2222":"#ff9500",Z.style.fontWeight="900"};q(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!M)M=!0,Y=15,q();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Z.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Z),setTimeout(()=>{Z.remove(),Tt(e,t,n)},2500)}else q()},1e3)}(S=document.getElementById("match-quit"))==null||S.addEventListener("click",()=>{He(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Tt(e,t,n))}),(P=document.getElementById("view-ai"))==null||P.addEventListener("click",()=>Io(t,n)),(F=document.getElementById("toggle-history"))==null||F.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(R=document.getElementById("btn-action"))==null||R.addEventListener("click",()=>{t.selected.length!==0&&(m?vo(e,t,n):y&&wo(e,t,n))}),(ee=document.getElementById("btn-results"))==null||ee.addEventListener("click",()=>Tt(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>bo(M,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Jt(e,t,n,null,M.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(M=>{M.addEventListener("click",()=>ko(M.dataset.gcId,M.dataset.gcType,e,t,n))}),(le=document.getElementById("boost-card"))==null||le.addEventListener("click",()=>To(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Jt(e,t,n,M.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>Jt(e,t,n))}function bo(e,t,n,a){const c=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(l=>l.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[d]||[]).find(p=>p.cardId===c);l&&t.selected.push({...l,_role:d,_line:d})}Me(n,t,a)}function gi(e,t,n){e.matchId&&$.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function vo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,n,n.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(l=>!l.used)),c=t.selected.map(s=>{const l=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,p=a&&["GK","DEF"].includes(s._role);return{...l,_line:s._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),d=Ut(c,t.modifiers.home);t.pendingAttack={...d,players:[...c],side:"home"},t.selected.forEach(s=>{const l=(t.homeTeam[s._role]||[]).find(p=>p.cardId===s.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Me(e,t,n),setTimeout(()=>_o(e,t,n),1200)}function wo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,n,n.state.profile.id);const a=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),c=Kt(a,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!0)});const d=Vt(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ze(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:ze(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Me(e,t,n),Ot(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,n,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,pt(e,t,n,"home-attack")}function ni(e,t,n){gi(t,n,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Ri(a,"attack",t.difficulty);if(!c.length){Gt(e,t,n);return}const d=Ut(c,t.modifiers.ai);t.pendingAttack={...d,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ze(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Me(e,t,n),Ot(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,n,"home-attack")});return}t.phase="defense",Me(e,t,n)}function _o(e,t,n){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Ri(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(y=>({name:y.name,note:we(y,y._line||y.job),portrait:ze(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Ot(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,n,"ai-attack")});return}const s=c.length>0?Kt(c,t.modifiers.ai).total:0;c.forEach(f=>{f.used=!0});const l=Vt(t.pendingAttack.total,s,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:c.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Ot(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,n,"ai-attack")});return}else p.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,pt(e,t,n,"ai-attack")}function pt(e,t,n,a){if(t.round++,dn(t)){Tt(e,t,n);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Gt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Gt(e,t,n);return}setTimeout(()=>ni(e,t,n),100);return}t.phase="attack",Me(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Gt(e,t,n);return}t.phase="ai-attack",Me(e,t,n),setTimeout(()=>ni(e,t,n),800)}}function dn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),n=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!n}function Gt(e,t,n){dn(t)?Tt(e,t,n):(t.phase="attack",Me(e,t,n))}function $o(e,t,n){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=ze(e),d=ze(t),s=gt[e.job]||"#555",l=gt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let r=!1;const f=()=>{r||(r=!0,a.remove(),n())};a.addEventListener("click",f),setTimeout(f,2e3)}function $t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Jt(e,t,n,a=null,c=null){var y,z;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([o,v])=>(v||[]).filter(T=>T.used).map(T=>({...T,_line:T._line||o}))),s=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!d.length){$t("Aucun joueur utilisé à remplacer");return}if(!s.length){$t("Aucun remplaçant disponible");return}let l=Math.max(0,d.findIndex(o=>o.cardId===c));const p=((y=d[l])==null?void 0:y._line)||((z=d[l])==null?void 0:z.job);let i=a?Math.max(0,s.findIndex(o=>o.cardId===a)):Math.max(0,s.findIndex(o=>o.job===p)),r=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var F,j,R,ee,le,re;const o=d[l],v=s[i],T=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(T*1.35),S=M=>`background:rgba(255,255,255,0.12);border:none;color:${M?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${M?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${S(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${v?Ve({...v,used:!1,boost:0},T,L):"<div>—</div>"}</div>
        <button id="in-down" style="${S(i>=s.length-1)}" ${i>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${S(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},T,L):"<div>—</div>"}</div>
        <button id="out-down" style="${S(l>=d.length-1)}" ${l>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(F=f.querySelector("#sub-close"))==null||F.addEventListener("click",()=>f.remove()),(j=f.querySelector("#out-up"))==null||j.addEventListener("click",()=>{l>0&&(l--,m())}),(R=f.querySelector("#out-down"))==null||R.addEventListener("click",()=>{l<d.length-1&&(l++,m())}),(ee=f.querySelector("#in-up"))==null||ee.addEventListener("click",()=>{i>0&&(i--,m())}),(le=f.querySelector("#in-down"))==null||le.addEventListener("click",()=>{i<s.length-1&&(i++,m())});const P=(M,Y,ie,q)=>{const Z=f.querySelector("#"+M);if(!Z)return;let ae=0;Z.addEventListener("touchstart",pe=>{ae=pe.touches[0].clientY},{passive:!0}),Z.addEventListener("touchend",pe=>{const he=pe.changedTouches[0].clientY-ae;if(Math.abs(he)<30)return;const xe=Y();he<0&&xe<q-1?(ie(xe+1),m()):he>0&&xe>0&&(ie(xe-1),m())},{passive:!0})};P("in-panel",()=>i,M=>i=M,s.length),P("out-panel",()=>l,M=>l=M,d.length),(re=f.querySelector("#sub-confirm"))==null||re.addEventListener("click",M=>{if(M.preventDefault(),M.stopPropagation(),r)return;r=!0;const Y=d[l],ie=s[i];if(!Y||!ie)return;let q=null,Z=-1;for(const[pe,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ge=>ge.cardId===Y.cardId);if(xe!==-1){q=pe,Z=xe;break}}if(Z===-1||!q){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const ae={...ie,_line:q,_col:Y._col||0,used:!1,boost:0};t.homeTeam[q].splice(Z,1,ae),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ie.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:we(Y,q),portrait:ze(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:ie.name,firstname:ie.firstname,note:we(ie,q),portrait:ze(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},text:`🔄 ${ie.firstname} ${ie.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),$o(Y,ie,()=>Me(e,t,n))})}document.body.appendChild(f),m()}function ko(e,t,n,a,c){var z,o;const d=(a.gcDefs||[]).find(v=>v.name===t),s=Ne[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",i=(d==null?void 0:d.name)||t,r=(d==null?void 0:d.effect)||s.desc,f=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,m=s.icon||"⚡",y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",y.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
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
    </div>`,document.body.appendChild(y),(z=y.querySelector("#gc-back"))==null||z.addEventListener("click",()=>y.remove()),(o=y.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{y.remove(),Ao(e,t,n,a,c)})}function Dt(e,t,n,a,c,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var i,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",z=we(f,m)+(f.boost||0),o=l.find(v=>v.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${y};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=s.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,y=e.find(o=>o.cardId===m);if(!y)return;const z=l.findIndex(o=>o.cardId===m);z>-1?l.splice(z,1):l.length<t&&l.push(y),p()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),d(l)})}p(),document.body.appendChild(s)}const Eo={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},a,c,d)=>{const s=Object.entries(a.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:l})));return s.length?(Dt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,l=>{l.forEach(p=>{const i=(a.homeTeam[p._line]||[]).find(r=>r.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Me(c,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Me(c,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:a="ai"},c,d,s)=>{const l=a==="home"?c.homeTeam:c.aiTeam,p=a==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!n.length||n.includes(r)).flatMap(([r,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:r})));return i.length?(Dt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,d,c,r=>{r.forEach(f=>{const y=((a==="home"?c.homeTeam:c.aiTeam)[f._line]||[]).find(z=>z.cardId===f.cardId);y&&(y.boost=(y.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${y.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Me(d,c,s)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Me(d,c,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},a,c,d)=>{const s=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",p=Object.entries(s).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(f=>!f.used).map(f=>({...f,_line:i})));return p.length?(Dt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,c,a,i=>{i.forEach(r=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(y=>y.cardId===r.cardId);m&&(m.used=!0,a.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Me(c,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Me(c,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,a,c)=>{const d=Object.entries(n.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,l])=>l.filter(p=>p.used).map(p=>({...p,_line:s})));return d.length?(Dt(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,n,s=>{s.forEach(l=>{const p=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!1,n.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Me(a,n,c)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Me(a,n,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Ao(e,t,n,a,c){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(p=>p.name===t)||d.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const p=Eo[s.effect_type];p?p(s.effect_params||{},a,n,c)||(l=!0):(c.toast(`Effet "${s.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(f=>f.used).map(f=>({...f,_line:i})));p.length?(p[0].used=!1,a.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((r,f)=>we(f,"ATT")-we(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}$.from("cards").delete().eq("id",e).then(()=>{}),l&&Me(n,a,c)}function To(e,t,n){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${gt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${we(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[s]||[]).find(p=>p.cardId===d);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),Me(e,t,n)})})}function Ot(e,t,n,a,c){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(i,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");d.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${s}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${a?"BUT !":"BUT IA !"}
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
      <div style="width:50px;height:50px;border-radius:50%;background:${gt[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let l=!1;const p=()=>{l||(l=!0,d.remove(),setTimeout(()=>c(),50))};d.addEventListener("click",p),setTimeout(p,3500)}async function Tt(e,t,n){var r,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=n,c=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=c?"victoire":d?"nul":"defaite",l=Mn(t.mode,s);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};c?p.wins=(a.profile.wins||0)+1:d?p.draws=(a.profile.draws||0)+1:p.losses=(a.profile.losses||0)+1,await $.from("users").update(p).eq("id",a.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":d?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":d?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),He(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),He(e),n.navigate("match",{matchMode:t.mode})})}function Io(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function ln(e,t){var n,a;try{const c=(a=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:a.id;try{($.getChannels?$.getChannels():[]).forEach(s=>{const l=s.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&$.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}c&&await $.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await fi(e,t,"random",({deckId:c,formation:d,starters:s,subsRaw:l,gcCardsEnriched:p,gcDefs:i})=>{const r=f=>Lo(e,t,c,d,s,l,f,i||[]);if(!p.length){r([]);return}ui(e,p,r)})}async function Lo(e,t,n,a,c,d,s=[],l=[]){var L;const{state:p,navigate:i,toast:r}=t;let f=!1,m=null;Xe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const y=async(S=!0)=>{f=!0,m&&($.removeChannel(m),m=null),S&&await $.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(L=document.getElementById("mm-cancel"))==null||L.addEventListener("click",async()=>{try{await y(!0)}catch{}He(e),i("home")});const z=async(S,P,F)=>{if(f)return;f=!0,m&&($.removeChannel(m),m=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(R=>setTimeout(R,600)),e.isConnected&&cn(e,t,S,F,s,l)},{data:o,error:v}=await $.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:n});if(v||!(o!=null&&o.success)){r("Erreur de matchmaking","error"),He(e),i("home");return}if(o.matched){z(o.match_id,o.opponent_id,!1);return}const T=document.getElementById("mm-status");T&&(T.textContent="En attente d'un autre joueur..."),m=$.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},S=>{const P=S.new;P.status==="matched"&&P.match_id&&z(P.match_id,P.matched_with,!0)}).subscribe()}async function zo(e,t,n){const{state:a,navigate:c,toast:d}=t;try{($.getChannels?$.getChannels():[]).forEach(i=>{const r=i.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&$.removeChannel(i)})}catch{}const{data:s}=await $.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!s){d("Match introuvable","error"),c("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),c("home");return}const l=s.home_id===a.profile.id;cn(e,t,n,l,[],[])}async function cn(e,t,n,a,c=[],d=[]){const{state:s,navigate:l,toast:p}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(c||[]).map(k=>k.id),m=(c||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await $.from("matches").select("*").eq("id",n).single();if(!y){p("Match introuvable","error"),l("home");return}async function z(){const[{data:k},{data:u},{data:g},{data:h}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),x=E=>({cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:Number(E.note_g)||0,note_d:Number(E.note_d)||0,note_m:Number(E.note_m)||0,note_a:Number(E.note_a)||0,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((k==null?void 0:k.starters)||[]).map(E=>x(E)),w=((u==null?void 0:u.starters)||[]).map(E=>x(E)),_=(k==null?void 0:k.formation)||"4-4-2",I=(u==null?void 0:u.formation)||"4-4-2";return{p1Team:mt(b,_),p2Team:mt(w,I),p1Subs:((k==null?void 0:k.subs)||[]).map(E=>x(E)),p2Subs:((u==null?void 0:u.subs)||[]).map(E=>x(E)),p1Formation:_,p2Formation:I,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!o)if(a){o=await z();const{data:k}=await $.from("matches").select("game_state").eq("id",n).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await $.from("matches").update({game_state:o,turn_user_id:y.home_id}).eq("id",n):o=k.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let k=0;k<30&&!o;k++){await new Promise(g=>setTimeout(g,400));const{data:u}=await $.from("matches").select("game_state").eq("id",n).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(o=u.game_state)}if(!o){p("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await $.from("matches").update({game_state:o}).eq("id",n)}let v=!1,T=null,L=!1;const S=new Set,P=new Set;function F(k){var E,A;try{$.removeChannel(j)}catch{}const u=o[i+"Score"]||0,g=o[r+"Score"]||0;let h,x;k.winner_id?(h=k.winner_id===s.profile.id,x=!1):k.forfeit?(h=u>g,x=!1):(x=u===g,h=u>g),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=x?"🤝":h?"🏆":"😞",_=x?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=x?"#fff":h?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${u} – ${g} ${o[r+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(A=b.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{b.remove(),He(e),l("home")})}const j=$.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},k=>{const u=k.new;try{if(u.status==="finished"||u.forfeit){if(v)return;v=!0,T&&(clearInterval(T),T=null),u.game_state&&(o=u.game_state),F(u);return}if(u.game_state){const g=o;o=u.game_state;const h=o._lastGC;if(h&&h.seq&&!P.has(h.seq)&&(P.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>q());return}const x=g[i+"Score"]||0,b=g[r+"Score"]||0,w=o[i+"Score"]||0,_=o[r+"Score"]||0,I=w>x,E=_>b;if((I||E)&&!S.has(o.round)){S.add(o.round);const A=[...o.log||[]].reverse().find(N=>N.isGoal),B=((A==null?void 0:A.homePlayers)||[]).map(N=>({name:N.name,note:N.note,portrait:N.portrait,job:N.job}));he(B,w,_,I,()=>q());return}q()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function R(k){Object.assign(o,k),o.lastActionAt=new Date().toISOString();const{error:u}=await $.from("matches").update({game_state:o}).eq("id",n);u&&p("Erreur de synchronisation","error");try{q()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function ee(){if(v)return;v=!0,T&&(clearInterval(T),T=null);const k=a?y.away_id:y.home_id,u=a?"p2":"p1",g=a?"p1":"p2",h={...o,[u+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:k,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{$.removeChannel(j)}catch{}setTimeout(()=>{He(e),l("home")},800)}const le={BOOST_STAT:({value:k=1,count:u=1,roles:g=[]},h,x)=>{const b=h[i+"Team"],w=Object.entries(b).filter(([_])=>!g.length||g.includes(_)).flatMap(([_,I])=>I.filter(E=>!E.used).map(E=>({...E,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(h);return}re(w,u,`Choisir ${u} joueur(s) à booster (+${k})`,_=>{_.forEach(I=>{const E=(b[I._line]||[]).find(A=>A.cardId===I.cardId);E&&(E.boost=(E.boost||0)+k,h.log.push({text:`⚡ +${k} sur ${E.name}`,type:"info"}))}),h[i+"Team"]=b,x(h)})},DEBUFF_STAT:({value:k=1,count:u=1,roles:g=[],target:h="ai"},x,b)=>{const w=h==="home"?i:r,_=x[w+"Team"],I=h==="home"?"allié":"adverse",E=Object.entries(_).filter(([A])=>!g.length||g.includes(A)).flatMap(([A,B])=>B.filter(N=>!N.used).map(N=>({...N,_line:A})));if(!E.length){x.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),b(x);return}re(E,u,`Choisir ${u} joueur(s) ${I}(s) (-${k})`,A=>{A.forEach(B=>{const N=(_[B._line]||[]).find(W=>W.cardId===B.cardId);N&&(N.boost=(N.boost||0)-k,x.log.push({text:`🎯 -${k} sur ${N.name}`,type:"info"}))}),x[w+"Team"]=_,b(x)})},GRAY_PLAYER:({count:k=1,roles:u=[],target:g="ai"},h,x)=>{const b=g==="home"?i:r,w=h[b+"Team"],_=g==="home"?"allié":"adverse",I=Object.entries(w).filter(([E])=>!u.length||u.includes(E)).flatMap(([E,A])=>A.filter(B=>!B.used).map(B=>({...B,_line:E})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),x(h);return}re(I,k,`Choisir ${k} joueur(s) ${_}(s) à exclure`,E=>{E.forEach(A=>{const B=(w[A._line]||[]).find(N=>N.cardId===A.cardId);B&&(B.used=!0,h.log.push({text:`❌ ${B.name} exclu !`,type:"info"}))}),h[b+"Team"]=w,x(h)})},REVIVE_PLAYER:({count:k=1,roles:u=[]},g,h)=>{const x=g[i+"Team"],b=Object.entries(x).filter(([w])=>!u.length||u.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!b.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(g);return}re(b,k,`Choisir ${k} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(x[_._line]||[]).find(E=>E.cardId===_.cardId);I&&(I.used=!1,g.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),g[i+"Team"]=x,h(g)})},REMOVE_GOAL:({},k,u)=>{const g=r+"Score";k[g]>0?(k[g]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(k)},ADD_GOAL_DRAW:({},k,u)=>{k[i+"Score"]===k[r+"Score"]?(k[i+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(k)},ADD_SUB:({value:k=1},u,g)=>{u.maxSubs=(u.maxSubs||3)+k,u.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),g(u)},CUSTOM:({},k,u)=>u(k)};function re(k,u,g,h){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function w(){var I,E;const _=k.map(A=>{const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",N=we(A,A._line)+(A.boost||0),ce=b.find(H=>H.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${B};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${N}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b.length}/${u}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${b.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${b.length}/${u})
          </button>
        </div>`,(I=x.querySelector("#pp-close"))==null||I.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const B=A.dataset.cid,N=k.find(ce=>ce.cardId===B),W=b.findIndex(ce=>ce.cardId===B);N&&(W>-1?b.splice(W,1):b.length<u&&b.push(N),w())})}),(E=x.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{x.remove(),h(b)})}w(),document.body.appendChild(x)}async function M(k,u){const h=(o["gcCardsFull_"+i]||[]).find(_=>_.id===k),x=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===u||((I=_.name)==null?void 0:I.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b=[...o["usedGc_"+i]||[],k],w={type:u,by:i,seq:(o._gcAnimSeq||0)+1};P.add(w.seq),xe(u,i,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const I=le[x.effect_type];if(I){const E={...o};I(x.effect_params||{},E,async A=>{A["usedGc_"+i]=b,A._lastGC=w,A._gcAnimSeq=w.seq,await R(A)});return}}const _={...o};switch(u){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=r+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=b,_._lastGC=w,_._gcAnimSeq=w.seq,await R(_)})}function Y(k,u){const g="usedCardIds_"+k,h=new Set(o[g]||[]);u.forEach(x=>h.add(x)),o[g]=[...h]}function ie(){for(const k of["p1","p2"]){const u=new Set(o["usedCardIds_"+k]||[]),g=o[k+"Team"];if(g)for(const h of["GK","DEF","MIL","ATT"])(g[h]||[]).forEach(x=>{x.used=u.has(x.cardId)})}}function q(){var Fe,Ze,xt,yt,ht,bt;if(o.phase==="reveal")return Z();if(o.phase==="midfield")return pe();if(o.phase==="finished")return Re();const k=o[i+"Team"],u=o[r+"Team"];ie();const g=o[i+"Score"],h=o[r+"Score"],x=o[i+"Name"],b=o[r+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],E=I.map(X=>X.cardId),A=window.innerWidth>=700,B=o[i+"Subs"]||[],N=o["usedSubIds_"+i]||[],W=B.filter(X=>!N.includes(X.cardId)),ce=o["gcCardsFull_"+i]||[],J=o["usedGc_"+i]||[],H=ce.filter(X=>!J.includes(X.id)),V=o.boostOwner===i&&!o.boostUsed,Q=!["GK","DEF","MIL","ATT"].some(X=>(u[X]||[]).some(G=>!G.used)),de=[...k.MIL||[],...k.ATT||[]].filter(X=>!X.used),ue=w&&Q&&de.length===0?[...k.GK||[],...k.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function fe(X,G,oe){var jt,_t;const se=X._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",We=(se==null?void 0:se.name)||X.gc_type,Je=(se==null?void 0:se.effect)||((jt=Ne[X.gc_type])==null?void 0:jt.desc)||"",et=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,Mt=((_t=Ne[X.gc_type])==null?void 0:_t.icon)||"⚡",Ct=Math.round(oe*.22),vt=Math.round(oe*.22),lt=oe-Ct-vt,wt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${G}px;height:${oe}px;border-radius:10px;border:2px solid ${Ye};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${wt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${G-6}px">${We}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${G-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${Mt}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function me(X,G){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${G}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(G*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(G*.2)}px">⚡</div>
        <div style="font-size:${Math.round(G*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const be=(X,G)=>G?me(130,175):fe(X,130,175),Ce=(X,G)=>G?me(68,95):fe(X,68,95),Pe=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",De=w?Ae(i)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,Ie=w&&!Ae(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(X,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,Be=w?"attack":_?"defense":"idle",Ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(k,o[i+"Formation"],Be,E,300,300,ue)}
      </div>
    </div>`;function Oe(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const G=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(X.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.homePlayers||[]).map(oe=>nt(oe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${G?20:14}px;font-weight:900;color:${G?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${X.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${G?14:20}px;font-weight:900;color:${G?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${X.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.aiPlayers||[]).map(oe=>nt(oe)).join("")}
            </div>
          </div>
          ${X.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${X.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ue=(()=>{var G,oe;if(_&&((G=o.pendingAttack)!=null&&G.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${b} ATTAQUE — Défendez !</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(w&&((oe=o.pendingAttack)!=null&&oe.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",se.total)}
        </div>`}const X=(o.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Oe(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ue}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Xe(e),e.style.overflow="hidden",A?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Le}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${De}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(X=>be(X,!1)).join("")}
            ${V?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(k,o[i+"Formation"],Be,E,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(X=>Ce(X,!1)).join("")}
            ${V?Ce(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&W.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&W.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&W.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&W.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${W.length}</div>
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
          <div>${De}${Ie}</div>
        </div>
      </div>`;function je(){const X=e.querySelector(".match-screen");if(!X)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=G+"px",X.style.minHeight=G+"px",X.style.maxHeight=G+"px",X.style.overflow="hidden";const oe=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");oe&&se&&(se.style.paddingBottom=oe.offsetHeight+"px")}if(je(),setTimeout(je,120),setTimeout(je,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",je),window.visualViewport.addEventListener("scroll",je)),window.addEventListener("resize",je)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!w&&!_)return;const G=X.dataset.cardId,oe=X.dataset.role,se=(k[oe]||[]).find(Je=>Je.cardId===G);if(!se||se.used)return;const ye=ue.includes(G);if(w&&!["MIL","ATT"].includes(oe)&&!ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Je=>Je.cardId===G);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...se,_role:oe}),q()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>U(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>U())}),(Fe=e.querySelector("#pvp-sub-open"))==null||Fe.addEventListener("click",()=>U()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>ge(X.dataset.gcId,X.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>O()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",X=>{w?X.currentTarget.dataset.pass==="1"||!Ae(i)?ne():te():_&&_e()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ee()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>D()),(bt=e.querySelector("#pvp-toggle-history"))==null||bt.addEventListener("click",()=>K()),T&&(clearInterval(T),T=null),(w||_)&&!v){let X=30,G=!1;const oe=()=>document.getElementById("pvp-timer"),se=()=>{oe()&&(oe().textContent=X+"s",oe().style.color=G?"#ff4444":"#fff")};se(),T=setInterval(()=>{X--,X<0?G?(clearInterval(T),T=null,w&&!Ae(i)?ne():ee()):(G=!0,X=15,se()):se()},1e3)}}function Z(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await R({phase:"midfield"})},5e3)}let ae=!1;function pe(){if(ae)return;const k=o[i+"Team"].MIL||[],u=o[r+"Team"].MIL||[];function g(H){return H.reduce((V,Q)=>V+we(Q,"MIL"),0)}function h(H){let V=0;for(let Q=0;Q<H.length-1;Q++){const de=Qe(H[Q],H[Q+1]);de==="#00ff88"?V+=2:de==="#FFD700"&&(V+=1)}return V}const x=g(k)+h(k),b=g(u)+h(u),w=x>=b;function _(H,V,Q){return`<div id="duel-row-${Q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,ue)=>{const fe=ue<H.length-1?Qe(de,H[ue+1]):null,me=!fe||fe==="#ff3333"||fe==="#cc2222",be=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Q}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...de,note:we(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<H.length-1?`<div class="duel-link duel-link-${Q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${fe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(H)} + ${h(H)} liens = <b style="color:#fff">${g(H)+h(H)}</b>
        </div>
      </div>`}Xe(e),e.innerHTML=`
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
      ${_(k,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(u,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,V)=>e.querySelectorAll(H).forEach((Q,de)=>{setTimeout(()=>{Q.style.opacity="1",Q.style.transform="translateY(0) scale(1)"},V+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,V)=>setTimeout(()=>{H.style.opacity="1"},V*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function E(H,V,Q){const de=document.getElementById(H);if(!de)return;const ue=performance.now(),fe=me=>{const be=Math.min(1,(me-ue)/Q);de.textContent=Math.round(V*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):de.textContent=V};requestAnimationFrame(fe)}setTimeout(()=>{E("pvp-score-me",x,800),E("pvp-score-opp",b,800)},1500);const A=o.p1Team.MIL||[],B=o.p2Team.MIL||[],N=g(A)+h(A),W=g(B)+h(B),ce=N>=W?"p1":"p2";let J=o.boostValue;J==null&&(J=pi(),o.boostValue=J,o.boostOwner=ce,o.boostUsed=!1),ae=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),V=e.querySelector("#duel-row-"+(w?"opp":"me")),Q=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),ue=w?Q:de,fe=w?de:Q;ue&&(ue.style.fontSize="80px",ue.style.color=w?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Pe;const me=document.getElementById("pvp-duel-finale");if(!me)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ce=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Ce,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Pe=document.getElementById("pvp-start-match"))==null||Pe.addEventListener("click",async()=>{const De=ce;await R({phase:De+"-attack",attacker:De,round:1,boostValue:J,boostUsed:!1,boostOwner:De})})},600)},700)},2800)}function he(k,u,g,h,x){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(A,B)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${B%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][B%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
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
        ${u} – ${g}
      </div>
      ${k!=null&&k.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${k.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let I=!1;const E=()=>{I||(I=!0,b.remove(),setTimeout(()=>x(),50))};b.addEventListener("click",E),setTimeout(E,3500)}function xe(k,u,g){var J,H;const h=(o.gcDefs||[]).find(V=>{var Q;return V.name===k||((Q=V.name)==null?void 0:Q.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||k,_=(h==null?void 0:h.effect)||((J=Ne[k])==null?void 0:J.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,E=((H=Ne[k])==null?void 0:H.icon)||"⚡",B=u===i?"Vous":o[u+"Name"]||"Adversaire",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",N.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${b}66}50%{box-shadow:0 0 60px ${b}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${b};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${B} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${b};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(N);let W=!1;const ce=()=>{W||(W=!0,N.remove(),setTimeout(()=>g&&g(),50))};N.addEventListener("click",ce),setTimeout(ce,3e3)}function ge(k,u){var N,W,ce,J;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===k),x=h==null?void 0:h._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||u,I=(x==null?void 0:x.effect)||((N=Ne[u])==null?void 0:N.desc)||"Carte spéciale.",E=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,A=((W=Ne[u])==null?void 0:W.icon)||"⚡",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",B.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(B),(ce=B.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>B.remove()),(J=B.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{B.remove(),M(k,u)})}function O(){var h;const k=o[i+"Team"],u=Object.entries(k).flatMap(([x,b])=>(b||[]).filter(w=>!w.used).map(w=>({...w,_line:x})));if(!u.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(x=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",w=we(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#bp-close"))==null||h.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const b=x.dataset.cid,w=u.find(I=>I.cardId===b);if(!w)return;const _=(k[w._line]||[]).find(I=>I.cardId===b);_&&(_.boost=(_.boost||0)+o.boostValue),g.remove(),await R({[i+"Team"]:k,boostUsed:!0})})})}function U(k=null){var W,ce;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const g=o[i+"Team"],h=o["usedSubIds_"+i]||[],x=o.maxSubs||3;if(h.length>=x){p(`Maximum ${x} remplacements atteint`,"warning");return}const b=Object.entries(g).flatMap(([J,H])=>(H||[]).filter(V=>V.used).map(V=>({...V,_line:J}))),w=(o[i+"Subs"]||[]).filter(J=>!h.includes(J.cardId));if(!b.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,b.findIndex(J=>J.cardId===k));const I=((W=b[_])==null?void 0:W._line)||((ce=b[_])==null?void 0:ce.job);let E=Math.max(0,w.findIndex(J=>J.job===I)),A=!1;const B=document.createElement("div");B.id="pvp-sub-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function N(){var fe,me,be,Ce,Pe,De;const J=b[_],H=w[E],V=Math.min(130,Math.round((window.innerWidth-90)/2)),Q=Math.round(V*1.35),de=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;B.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},V,Q):"<div>—</div>"}</div>
          <button id="pin-down" style="${de(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${J?Ve({...J,used:!1,boost:0},V,Q):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=b.length-1)}" ${_>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${b.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=B.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>B.remove()),(me=B.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{_>0&&(_--,N())}),(be=B.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{_<b.length-1&&(_++,N())}),(Ce=B.querySelector("#pin-up"))==null||Ce.addEventListener("click",()=>{E>0&&(E--,N())}),(Pe=B.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{E<w.length-1&&(E++,N())});const ue=(Ie,Le,Be,Ge)=>{const Oe=B.querySelector("#"+Ie);if(!Oe)return;let Ue=0;Oe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",Ke=>{const je=Ke.changedTouches[0].clientY-Ue;if(Math.abs(je)<30)return;const Fe=Le();je<0&&Fe<Ge-1?(Be(Fe+1),N()):je>0&&Fe>0&&(Be(Fe-1),N())},{passive:!0})};ue("pin-panel",()=>E,Ie=>E=Ie,w.length),ue("pout-panel",()=>_,Ie=>_=Ie,b.length),(De=B.querySelector("#psub-confirm"))==null||De.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),A)return;A=!0;const Le=b[_],Be=w[E];if(!Le||!Be)return;const Ge=Le._line,Oe=(g[Ge]||[]).findIndex(je=>je.cardId===Le.cardId);if(Oe===-1){p("Erreur : joueur introuvable","error"),B.remove();return}const Ue={...Be,_line:Ge,position:Le.position,used:!1,boost:0};g[Ge].splice(Oe,1,Ue);const Ke=[...h,Be.cardId];B.remove(),C(Le,Be,async()=>{await R({[i+"Team"]:g,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(B),N()}function C(k,u,g){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(I,E,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${ze(I)?`<img src="${ze(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${b(u,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${b(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let w=!1;const _=()=>{w||(w=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",_),setTimeout(_,2200)}function D(){var u;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(u=k.querySelector("#pvp-opp-close"))==null||u.addEventListener("click",()=>k.remove())}function K(){var g;const k=o.log||[],u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",u.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(u),(g=u.querySelector("#pvp-hist-close"))==null||g.addEventListener("click",()=>u.remove())}async function ne(){if(o.phase!==i+"-attack")return;const k=i==="p1"?"p2":"p1",u=(o.round||0)+1,g=[...o.log||[]];g.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Te(o),x=Ae(k),b=h||!x?"finished":k+"-attack";await R({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:b,attacker:k,round:u,log:g}),b==="finished"&&await qe(o)}async function te(){const k=o[i+"Team"],u=!["GK","DEF","MIL","ATT"].some(b=>(o[r+"Team"][b]||[]).some(w=>!w.used)),g=(o["selected_"+i]||[]).map(b=>{const w=(k[b._role]||[]).find(N=>N.cardId===b.cardId)||b,_=u&&["GK","DEF"].includes(b._role),I=k[b._role]||[],E=I.findIndex(N=>N.cardId===b.cardId),A=ot(I.length),B=E>=0?A[E]:w._col??1;return{...w,_line:b._role,_col:B,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!g.length)return;const h=Ut(g,o.modifiers[i]||{});Y(i,g.map(b=>b.cardId)),g.forEach(b=>{const w=(k[b._role]||[]).find(_=>_.cardId===b.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],q();const x=[...o.log||[]];if(u){const b=(o[i+"Score"]||0)+1,w=g.map(B=>({name:B.name,note:we(B,B._line||"ATT"),portrait:ze(B),job:B.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",E={...o,[i+"Team"]:k,[i+"Score"]:b},A=Te(E);S.add(_),he(w,b,o[r+"Score"]||0,!0,async()=>{await R({[i+"Team"]:k,[i+"Score"]:b,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:A?"finished":I+"-attack",attacker:I,round:_,log:x}),A&&await qe({...o,[i+"Score"]:b})});return}x.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await R({[i+"Team"]:k,[r+"Team"]:o[r+"Team"],pendingAttack:{...h,players:g,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:x})}async function _e(){const k=o[i+"Team"],u=(o["selected_"+i]||[]).map(J=>{const H=(k[J._role]||[]).find(fe=>fe.cardId===J.cardId)||J,V=k[J._role]||[],Q=V.findIndex(fe=>fe.cardId===J.cardId),de=ot(V.length),ue=Q>=0?de[Q]:H._col??1;return{...H,_line:J._role,_col:ue}}),g=Kt(u,o.modifiers[i]||{});Y(i,u.map(J=>J.cardId)),u.forEach(J=>{const H=(k[J._role]||[]).find(V=>V.cardId===J.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],q();const h=Vt(o.pendingAttack.total,g.total,o.modifiers[i]||{}),x=o.pendingAttack.side,b=h==="attack"||(h==null?void 0:h.goal),w=x==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(J=>({name:J.name,note:we(J,J._line||"ATT"),portrait:ze(J),job:J.job})),E=[...o.log||[]];E.push({type:"duel",isGoal:b,homeScored:b&&x===i,text:b?`⚽ BUT de ${o[x+"Name"]} ! (${o.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${g.total})`,homePlayers:I,aiPlayers:u.map(J=>({name:J.name,note:we(J,J._line||"DEF"),portrait:ze(J),job:J.job})),homeTotal:o.pendingAttack.total,aiTotal:g.total});const A=b?(o[x+"Score"]||0)+1:o[x+"Score"]||0,B={...o,[i+"Team"]:k,[x+"Score"]:A},N=Te(B),W=N?"finished":w+"-attack",ce=async()=>{await R({[i+"Team"]:k,[r+"Team"]:o[r+"Team"],[x+"Score"]:A,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:w,round:_,log:E}),(W==="finished"||N)&&await qe({...o,[x+"Score"]:A})};if(b){const J=x===i,H=J?A:o[i+"Score"]||0,V=J?o[r+"Score"]||0:A;S.add(_),he(I,H,V,J,ce)}else await ce()}function $e(k){return["MIL","ATT"].some(u=>(k[u]||[]).some(g=>!g.used))}function Ee(k){return["GK","DEF","MIL","ATT"].some(u=>(k[u]||[]).some(g=>!g.used))}function Se(k){return Ee(k)&&!$e(k)}function Ae(k){const u=o[k+"Team"],g=o[(k==="p1"?"p2":"p1")+"Team"];return!!($e(u)||!Ee(g)&&Se(u))}function Te(k){const u=["MIL","ATT"].some(E=>(k.p1Team[E]||[]).some(A=>!A.used)),g=["MIL","ATT"].some(E=>(k.p2Team[E]||[]).some(A=>!A.used)),h=Ee(k.p1Team),x=Ee(k.p2Team);return!u&&!(!x&&h)&&(!g&&!(!h&&x))}function ke(k){const u=k.p1Score||0,g=k.p2Score||0;return u===g?null:u>g?y.home_id:y.away_id}async function qe(k){try{const u=ke(k),g=u?y.home_id===u?y.away_id:y.home_id:null;await $.from("matches").update({status:"finished",winner_id:u,home_score:k.p1Score||0,away_score:k.p2Score||0}).eq("id",n),u&&g&&Ui(u,g).catch(()=>{})}catch(u){console.error("[PvP] finishMatch:",u)}}function Re(){var x;const k=o[i+"Score"],u=o[r+"Score"],g=k>u,h=k===u;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{$.removeChannel(j)}catch{}He(e),l("home")})}q()}const So=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ln,resumePvpMatch:zo},Symbol.toStringTag,{value:"Module"}));async function Mo(e,t,n,a){var c,d;try{const s=(d=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:d.id;try{($.getChannels?$.getChannels():[]).forEach(p=>{const i=p.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&$.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}s&&(await $.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await $.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await fi(e,t,"random",({deckId:s,formation:l,starters:p,subsRaw:i,gcCardsEnriched:r,gcDefs:f})=>{const m=y=>Co(e,t,s,l,p,i,y,f||[],n,a);if(!r.length){m([]);return}ui(e,r,m)})}async function Co(e,t,n,a,c,d,s=[],l=[],p,i){var le;const{state:r,navigate:f,toast:m}=t,y=r.profile.id;let z=!1,o=null;Xe(e);try{await $.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await $.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const v=(re,M,Y,ie)=>{var q;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${M?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${M?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${M?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${M?"#22c55e":"#aaa"}">${M?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!M&&re?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(q=document.getElementById("lobby-cancel"))==null||q.addEventListener("click",async()=>{z=!0,o&&($.removeChannel(o),o=null),Y&&await $.from("friend_match_invites").update({status:"declined"}).eq("id",Y),He(e),f("home")})},T=async(re,M)=>{z=!0,o&&($.removeChannel(o),o=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&jo(e,t,re,M,s,l)},{data:L}=await $.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${y},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${y})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let S,P;if(L&&L.inviter_id===p)P=!1,S=L.id,await $.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",S);else{P=!0;const{data:re,error:M}=await $.from("friend_match_invites").insert({inviter_id:y,invitee_id:p,friend_id:p,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(M||!re){m("Erreur création invitation","error"),He(e),f("home");return}S=re.id}if(v(!0,!P,S),!P){const re={home_id:p,away_id:y,home_deck_id:L.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},M=await $.from("matches").insert(re).select().single(),Y=M.data;if(!Y){m("Erreur création match: "+(((le=M.error)==null?void 0:le.message)||""),"error"),He(e),f("home");return}await $.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",S),T(Y.id,!1);return}let F=!1;const j=re=>{z||F||(re.status==="matched"&&re.match_id?(F=!0,clearInterval(R),clearInterval(ee),T(re.match_id,!0)):re.status==="declined"?(clearInterval(R),clearInterval(ee),m(`${i} a décliné l'invitation`,"warning"),He(e),f("home")):re.invitee_ready&&v(!0,!0,S))},R=setInterval(()=>{if(z){clearInterval(R);return}$.from("matchmaking_queue").delete().eq("user_id",y).then(()=>{},()=>{})},3e3),ee=setInterval(async()=>{if(z||F){clearInterval(ee);return}const{data:re}=await $.from("friend_match_invites").select("*").eq("id",S).maybeSingle();re&&j(re)},1200);o=$.channel("friend-invite-"+S).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${S}`},re=>j(re.new)).subscribe()}async function jo(e,t,n,a,c=[],d=[]){const{state:s,navigate:l,toast:p}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(c||[]).map(u=>u.id),m=(c||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await $.from("matches").select("*").eq("id",n).single();if(!y){p("Match introuvable","error"),l("home");return}async function z(){const[{data:u},{data:g},{data:h},{data:x}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),b=A=>({cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),w=((u==null?void 0:u.starters)||[]).map(A=>b(A)),_=((g==null?void 0:g.starters)||[]).map(A=>b(A)),I=(u==null?void 0:u.formation)||"4-4-2",E=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:mt(w,I),p2Team:mt(_,E),p1Subs:((u==null?void 0:u.subs)||[]).map(A=>b(A)),p2Subs:((g==null?void 0:g.subs)||[]).map(A=>b(A)),p1Formation:I,p2Formation:E,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!o)if(a){o=await z();const{data:u}=await $.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await $.from("matches").update({game_state:o,turn_user_id:y.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:g}=await $.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){p("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await $.from("matches").update({game_state:o}).eq("id",n)}let v=!1,T=!1,L=null,S=!1;const P=new Set,F=new Set;function j(u){var A,B;try{$.removeChannel(R)}catch{}const g=o[i+"Score"]||0,h=o[r+"Score"]||0;if(!T){const N=o.p1Score||0,W=o.p2Score||0,ce=(o.usedGc_p1||[]).length,J=(o.usedGc_p2||[]).length,H=u.winner_id||(N>W?y.home_id:W>N?y.away_id:null);(H?s.profile.id===H:s.profile.id<(a?y.away_id:y.home_id))&&(T=!0,An({player1Id:y.home_id,player2Id:y.away_id,score1:N,score2:W,gc1:ce,gc2:J}).catch(Q=>console.warn("[FriendMatch] updateStats:",Q)))}let x,b;u.winner_id?(x=u.winner_id===s.profile.id,b=!1):u.forfeit?(x=g>h,b=!1):(b=g===h,x=g>h),(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const w=document.createElement("div");w.id="pvp-end-overlay",w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const _=b?"🤝":x?"🏆":"😞",I=b?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",E=b?"#fff":x?"#FFD700":"#ff6b6b";w.innerHTML=`
      <div style="font-size:64px">${_}</div>
      <div style="font-size:26px;font-weight:900;color:${E}">${I}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${h} ${o[r+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(w),(B=w.querySelector("#pvp-end-home"))==null||B.addEventListener("click",()=>{w.remove(),He(e),l("home")})}const R=$.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const g=u.new;try{if(g.status==="finished"||g.forfeit){if(v)return;v=!0,L&&(clearInterval(L),L=null),g.game_state&&(o=g.game_state),j(g);return}if(g.game_state){const h=o;o=g.game_state;const x=o._lastGC;if(x&&x.seq&&!F.has(x.seq)&&(F.add(x.seq),x.by!==i)){ge(x.type,x.by,()=>Z());return}const b=h[i+"Score"]||0,w=h[r+"Score"]||0,_=o[i+"Score"]||0,I=o[r+"Score"]||0,E=_>b,A=I>w;if((E||A)&&!P.has(o.round)){P.add(o.round);const B=[...o.log||[]].reverse().find(W=>W.isGoal),N=((B==null?void 0:B.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(N,_,I,E,()=>Z());return}Z()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function ee(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:g}=await $.from("matches").update({game_state:o}).eq("id",n);g&&p("Erreur de synchronisation","error");try{Z()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function le(){if(v)return;v=!0,L&&(clearInterval(L),L=null);const u=a?y.away_id:y.home_id,g=a?"p2":"p1",h=a?"p1":"p2",x={...o,[g+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",n)}catch{}try{$.removeChannel(R)}catch{}setTimeout(()=>{He(e),l("home")},800)}const re={BOOST_STAT:({value:u=1,count:g=1,roles:h=[]},x,b)=>{const w=x[i+"Team"],_=Object.entries(w).filter(([I])=>!h.length||h.includes(I)).flatMap(([I,E])=>E.filter(A=>!A.used).map(A=>({...A,_line:I})));if(!_.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(x);return}M(_,g,`Choisir ${g} joueur(s) à booster (+${u})`,I=>{I.forEach(E=>{const A=(w[E._line]||[]).find(B=>B.cardId===E.cardId);A&&(A.boost=(A.boost||0)+u,x.log.push({text:`⚡ +${u} sur ${A.name}`,type:"info"}))}),x[i+"Team"]=w,b(x)})},DEBUFF_STAT:({value:u=1,count:g=1,roles:h=[],target:x="ai"},b,w)=>{const _=x==="home"?i:r,I=b[_+"Team"],E=x==="home"?"allié":"adverse",A=Object.entries(I).filter(([B])=>!h.length||h.includes(B)).flatMap(([B,N])=>N.filter(W=>!W.used).map(W=>({...W,_line:B})));if(!A.length){b.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),w(b);return}M(A,g,`Choisir ${g} joueur(s) ${E}(s) (-${u})`,B=>{B.forEach(N=>{const W=(I[N._line]||[]).find(ce=>ce.cardId===N.cardId);W&&(W.boost=(W.boost||0)-u,b.log.push({text:`🎯 -${u} sur ${W.name}`,type:"info"}))}),b[_+"Team"]=I,w(b)})},GRAY_PLAYER:({count:u=1,roles:g=[],target:h="ai"},x,b)=>{const w=h==="home"?i:r,_=x[w+"Team"],I=h==="home"?"allié":"adverse",E=Object.entries(_).filter(([A])=>!g.length||g.includes(A)).flatMap(([A,B])=>B.filter(N=>!N.used).map(N=>({...N,_line:A})));if(!E.length){x.log.push({text:`❌ Aucun joueur ${I}`,type:"info"}),b(x);return}M(E,u,`Choisir ${u} joueur(s) ${I}(s) à exclure`,A=>{A.forEach(B=>{const N=(_[B._line]||[]).find(W=>W.cardId===B.cardId);N&&(N.used=!0,x.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),x[w+"Team"]=_,b(x)})},REVIVE_PLAYER:({count:u=1,roles:g=[]},h,x)=>{const b=h[i+"Team"],w=Object.entries(b).filter(([_])=>!g.length||g.includes(_)).flatMap(([_,I])=>I.filter(E=>E.used).map(E=>({...E,_line:_})));if(!w.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(h);return}M(w,u,`Choisir ${u} joueur(s) à ressusciter`,_=>{_.forEach(I=>{const E=(b[I._line]||[]).find(A=>A.cardId===I.cardId);E&&(E.used=!1,h.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=b,x(h)})},REMOVE_GOAL:({},u,g)=>{const h=r+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(u)},ADD_GOAL_DRAW:({},u,g)=>{u[i+"Score"]===u[r+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(u)},ADD_SUB:({value:u=1},g,h)=>{g.maxSubs=(g.maxSubs||3)+u,g.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(g)},CUSTOM:({},u,g)=>g(u)};function M(u,g,h,x){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function _(){var E,A;const I=u.map(B=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",W=we(B,B._line)+(B.boost||0),J=w.find(V=>V.cardId===B.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=B.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${B.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${N};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${B.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${B._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${I}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${g})
          </button>
        </div>`,(E=b.querySelector("#pp-close"))==null||E.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(B=>{B.addEventListener("click",()=>{const N=B.dataset.cid,W=u.find(J=>J.cardId===N),ce=w.findIndex(J=>J.cardId===N);W&&(ce>-1?w.splice(ce,1):w.length<g&&w.push(W),_())})}),(A=b.querySelector("#pp-confirm"))==null||A.addEventListener("click",()=>{b.remove(),x(w)})}_(),document.body.appendChild(b)}async function Y(u,g){const x=(o["gcCardsFull_"+i]||[]).find(I=>I.id===u),b=(x==null?void 0:x._gcDef)||(o.gcDefs||[]).find(I=>{var E;return I.name===g||((E=I.name)==null?void 0:E.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),w=[...o["usedGc_"+i]||[],u],_={type:g,by:i,seq:(o._gcAnimSeq||0)+1};F.add(_.seq),ge(g,i,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const E=re[b.effect_type];if(E){const A={...o};E(b.effect_params||{},A,async B=>{B["usedGc_"+i]=w,B._lastGC=_,B._gcAnimSeq=_.seq,await ee(B)});return}}const I={...o};switch(g){case"Remplacement+":I.maxSubs=(I.maxSubs||3)+1,I.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=r+"Score";I[E]>0&&(I[E]--,I.log.push({text:"🚫 But annulé",type:"info"}));break}}I["usedGc_"+i]=w,I._lastGC=_,I._gcAnimSeq=_.seq,await ee(I)})}function ie(u,g){const h="usedCardIds_"+u,x=new Set(o[h]||[]);g.forEach(b=>x.add(b)),o[h]=[...x]}function q(){for(const u of["p1","p2"]){const g=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const x of["GK","DEF","MIL","ATT"])(h[x]||[]).forEach(b=>{b.used=g.has(b.cardId)})}}function Z(){var Ze,xt,yt,ht,bt,X;if(o.phase==="reveal")return ae();if(o.phase==="midfield")return he();if(o.phase==="finished")return k();const u=o[i+"Team"],g=o[r+"Team"];q();const h=o[i+"Score"],x=o[r+"Score"],b=o[i+"Name"],w=o[r+"Name"],_=o.phase===i+"-attack",I=o.phase===i+"-defense",E=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],A=E.map(G=>G.cardId),B=window.innerWidth>=700,N=o[i+"Subs"]||[],W=o["usedSubIds_"+i]||[],ce=N.filter(G=>!W.includes(G.cardId)),J=o["gcCardsFull_"+i]||[],H=o["usedGc_"+i]||[],V=J.filter(G=>!H.includes(G.id)),Q=o.boostOwner===i&&!o.boostUsed,de=!["GK","DEF","MIL","ATT"].some(G=>(g[G]||[]).some(oe=>!oe.used)),ue=[...u.MIL||[],...u.ATT||[]].filter(G=>!G.used),fe=_&&de&&ue.length===0?[...u.GK||[],...u.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];function me(G,oe,se){var _t,yi;const ye=G._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Je=(ye==null?void 0:ye.name)||G.gc_type,et=(ye==null?void 0:ye.effect)||((_t=Ne[G.gc_type])==null?void 0:_t.desc)||"",Mt=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,Ct=((yi=Ne[G.gc_type])==null?void 0:yi.icon)||"⚡",vt=Math.round(se*.22),lt=Math.round(se*.22),wt=se-vt-lt,jt=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${G.id}" data-gc-type="${G.gc_type}"
        style="box-sizing:border-box;width:${oe}px;height:${se}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${vt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${jt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${oe-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${wt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Mt?`<img src="${Mt}" style="max-width:${oe-10}px;max-height:${wt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(wt*.55)}px">${Ct}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(G,oe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${G}px;height:${oe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(oe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(oe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(oe*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ce=(G,oe)=>oe?be(130,175):me(G,130,175),Pe=(G,oe)=>oe?be(68,95):me(G,68,95),De=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=_?Te(i)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:I?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,Le=_&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':_||I?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Be=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(G=>`<div class="pvp-sub-btn" data-sub-id="${G.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(G,B?76:44,B?100:58)}</div>`).join("")}
    </div>`,Ge=_?"attack":I?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(u,o[i+"Formation"],Ge,A,300,300,fe)}
      </div>
    </div>`;function Ue(G){if(G.type==="duel"&&(G.homeTotal!=null||G.aiTotal!=null)){const oe=(G.homeTotal||0)>=(G.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(G.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.homePlayers||[]).map(se=>nt(se)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${oe?20:14}px;font-weight:900;color:${oe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${G.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${oe?14:20}px;font-weight:900;color:${oe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${G.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.aiPlayers||[]).map(se=>nt(se)).join("")}
            </div>
          </div>
          ${G.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${G.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${G.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${G.type==="goal"?700:400};padding:3px 2px">${G.text||""}</div>`}const Ke=(()=>{var oe,se;if(I&&((oe=o.pendingAttack)!=null&&oe.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(_&&((se=o.pendingAttack)!=null&&se.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",ye.total)}
        </div>`}const G=(o.log||[]).slice(-1)[0];return G?'<div style="padding:2px 4px">'+Ue(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),je=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${x}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Xe(e),e.style.overflow="hidden",B?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${je}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Be}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ie}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${V.map(G=>Ce(G,!1)).join("")}
            ${Q?Ce(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${je}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(u,o[i+"Formation"],Ge,A,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${V.map(G=>Pe(G,!1)).join("")}
            ${Q?Pe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${_&&ce.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${_&&ce.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${_&&ce.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${_&&ce.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ce.length}</div>
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
          <div>${Ie}${Le}</div>
        </div>
      </div>`;function Fe(){const G=e.querySelector(".match-screen");if(!G)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.height=oe+"px",G.style.minHeight=oe+"px",G.style.maxHeight=oe+"px",G.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(Fe(),setTimeout(Fe,120),setTimeout(Fe,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Fe),window.visualViewport.addEventListener("scroll",Fe)),window.addEventListener("resize",Fe)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>{if(!_&&!I)return;const oe=G.dataset.cardId,se=G.dataset.role,ye=(u[se]||[]).find(et=>et.cardId===oe);if(!ye||ye.used)return;const Ye=fe.includes(oe);if(_&&!["MIL","ATT"].includes(se)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Je=We.findIndex(et=>et.cardId===oe);Je>-1?We.splice(Je,1):We.length<3&&We.push({...ye,_role:se}),Z()})}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>C(G.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(G=>{G.addEventListener("click",()=>C())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>C()),e.querySelectorAll(".pvp-gc-mini").forEach(G=>{G.addEventListener("click",()=>O(G.dataset.gcId,G.dataset.gcType))}),(xt=e.querySelector("#pvp-boost-card"))==null||xt.addEventListener("click",()=>U()),(yt=e.querySelector("#pvp-action"))==null||yt.addEventListener("click",G=>{_?G.currentTarget.dataset.pass==="1"||!Te(i)?te():_e():I&&$e()}),(ht=e.querySelector("#pvp-quit"))==null||ht.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&le()}),(bt=e.querySelector("#pvp-view-opp"))==null||bt.addEventListener("click",()=>K()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>ne()),L&&(clearInterval(L),L=null),(_||I)&&!v){let G=30,oe=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=G+"s",se().style.color=oe?"#ff4444":"#fff")};ye(),L=setInterval(()=>{G--,G<0?oe?(clearInterval(L),L=null,_&&!Te(i)?te():le()):(oe=!0,G=15,ye()):ye()},1e3)}}function ae(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await ee({phase:"midfield"})},5e3)}let pe=!1;function he(){if(pe)return;const u=o[i+"Team"].MIL||[],g=o[r+"Team"].MIL||[];function h(V){return V.reduce((Q,de)=>Q+we(de,"MIL"),0)}function x(V){let Q=0;for(let de=0;de<V.length-1;de++){const ue=Qe(V[de],V[de+1]);ue==="#00ff88"?Q+=2:ue==="#FFD700"&&(Q+=1)}return Q}const b=h(u)+x(u),w=h(g)+x(g),_=b>=w;function I(V,Q,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Q}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((ue,fe)=>{const me=fe<V.length-1?Qe(ue,V[fe+1]):null,be=!me||me==="#ff3333"||me==="#cc2222",Ce=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ue,note:we(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<V.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${me}`}">
              ${Ce?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${Ce}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${de}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(V)} + ${x(V)} liens = <b style="color:#fff">${h(V)+x(V)}</b>
        </div>
      </div>`}Xe(e),e.innerHTML=`
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
      ${I(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${I(g,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(V,Q)=>e.querySelectorAll(V).forEach((de,ue)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},Q+ue*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,Q)=>setTimeout(()=>{V.style.opacity="1"},Q*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Q=>Q.style.opacity="1")},1250);function A(V,Q,de){const ue=document.getElementById(V);if(!ue)return;const fe=performance.now(),me=be=>{const Ce=Math.min(1,(be-fe)/de);ue.textContent=Math.round(Q*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(me):ue.textContent=Q};requestAnimationFrame(me)}setTimeout(()=>{A("pvp-score-me",b,800),A("pvp-score-opp",w,800)},1500);const B=o.p1Team.MIL||[],N=o.p2Team.MIL||[],W=h(B)+x(B),ce=h(N)+x(N),J=W>=ce?"p1":"p2";let H=o.boostValue;H==null&&(H=pi(),o.boostValue=H,o.boostOwner=J,o.boostUsed=!1),pe=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(_?"me":"opp")),Q=e.querySelector("#duel-row-"+(_?"opp":"me")),de=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),fe=_?de:ue,me=_?ue:de;fe&&(fe.style.fontSize="80px",fe.style.color=_?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(_?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),Q&&(Q.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const be=document.getElementById("pvp-duel-finale");if(!be)return;const Ce=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Pe=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(_?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Pe,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ie=J;await ee({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:H,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function xe(u,g,h,x,b){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const _=Array.from({length:10},(B,N)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${N%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][N%8]}</div>`).join(""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${_}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${x?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${h}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(B=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${I[B.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${B.portrait?`<img src="${B.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(B.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let E=!1;const A=()=>{E||(E=!0,w.remove(),setTimeout(()=>b(),50))};w.addEventListener("click",A),setTimeout(A,3500)}function ge(u,g,h){var H,V;const x=(o.gcDefs||[]).find(Q=>{var de;return Q.name===u||((de=Q.name)==null?void 0:de.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||u,I=(x==null?void 0:x.effect)||((H=Ne[u])==null?void 0:H.desc)||"",E=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,A=((V=Ne[u])==null?void 0:V.icon)||"⚡",N=g===i?"Vous":o[g+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${N} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${A}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let ce=!1;const J=()=>{ce||(ce=!0,W.remove(),setTimeout(()=>h&&h(),50))};W.addEventListener("click",J),setTimeout(J,3e3)}function O(u,g){var W,ce,J,H;const x=(o["gcCardsFull_"+i]||[]).find(V=>V.id===u),b=x==null?void 0:x._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",I=(b==null?void 0:b.name)||g,E=(b==null?void 0:b.effect)||((W=Ne[g])==null?void 0:W.desc)||"Carte spéciale.",A=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,B=((ce=Ne[g])==null?void 0:ce.icon)||"⚡",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",N.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${_};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${_}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${I.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${I}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${B}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(N),(J=N.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>N.remove()),(H=N.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{N.remove(),Y(u,g)})}function U(){var x;const u=o[i+"Team"],g=Object.entries(u).flatMap(([b,w])=>(w||[]).filter(_=>!_.used).map(_=>({..._,_line:b})));if(!g.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(b=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",_=we(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(x=h.querySelector("#bp-close"))==null||x.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const w=b.dataset.cid,_=g.find(E=>E.cardId===w);if(!_)return;const I=(u[_._line]||[]).find(E=>E.cardId===w);I&&(I.boost=(I.boost||0)+o.boostValue),h.remove(),await ee({[i+"Team"]:u,boostUsed:!0})})})}function C(u=null){var ce,J;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],x=o["usedSubIds_"+i]||[],b=o.maxSubs||3;if(x.length>=b){p(`Maximum ${b} remplacements atteint`,"warning");return}const w=Object.entries(h).flatMap(([H,V])=>(V||[]).filter(Q=>Q.used).map(Q=>({...Q,_line:H}))),_=(o[i+"Subs"]||[]).filter(H=>!x.includes(H.cardId));if(!w.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!_.length){p("Aucun remplaçant disponible","warning");return}let I=Math.max(0,w.findIndex(H=>H.cardId===u));const E=((ce=w[I])==null?void 0:ce._line)||((J=w[I])==null?void 0:J.job);let A=Math.max(0,_.findIndex(H=>H.job===E)),B=!1;const N=document.createElement("div");N.id="pvp-sub-overlay",N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,be,Ce,Pe,De,Ie;const H=w[I],V=_[A],Q=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(Q*1.35),ue=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;N.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${V?Ve({...V,used:!1,boost:0},Q,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(A>=_.length-1)}" ${A>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${_.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},Q,de):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(I>=w.length-1)}" ${I>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=N.querySelector("#psub-close"))==null||me.addEventListener("click",()=>N.remove()),(be=N.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{I>0&&(I--,W())}),(Ce=N.querySelector("#pout-down"))==null||Ce.addEventListener("click",()=>{I<w.length-1&&(I++,W())}),(Pe=N.querySelector("#pin-up"))==null||Pe.addEventListener("click",()=>{A>0&&(A--,W())}),(De=N.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{A<_.length-1&&(A++,W())});const fe=(Le,Be,Ge,Oe)=>{const Ue=N.querySelector("#"+Le);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",je=>{Ke=je.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",je=>{const Fe=je.changedTouches[0].clientY-Ke;if(Math.abs(Fe)<30)return;const Ze=Be();Fe<0&&Ze<Oe-1?(Ge(Ze+1),W()):Fe>0&&Ze>0&&(Ge(Ze-1),W())},{passive:!0})};fe("pin-panel",()=>A,Le=>A=Le,_.length),fe("pout-panel",()=>I,Le=>I=Le,w.length),(Ie=N.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),B)return;B=!0;const Be=w[I],Ge=_[A];if(!Be||!Ge)return;const Oe=Be._line,Ue=(h[Oe]||[]).findIndex(Fe=>Fe.cardId===Be.cardId);if(Ue===-1){p("Erreur : joueur introuvable","error"),N.remove();return}const Ke={...Ge,_line:Oe,position:Be.position,used:!1,boost:0};h[Oe].splice(Ue,1,Ke);const je=[...x,Ge.cardId];N.remove(),D(Be,Ge,async()=>{await ee({[i+"Team"]:h,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:je})})})}document.body.appendChild(N),W()}function D(u,g,h){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(E,A,B)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${A};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${B}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[E.job]||"#555"};border:3px solid ${A};position:relative;overflow:hidden;margin:0 auto">
        ${ze(E)?`<img src="${ze(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let _=!1;const I=()=>{_||(_=!0,b.remove(),setTimeout(()=>h(),50))};b.addEventListener("click",I),setTimeout(I,2200)}function K(){var g;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(g=u.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>u.remove())}function ne(){var h;const u=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(x=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${x.type==="goal"?"#FFD700":x.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${x.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>g.remove())}async function te(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",g=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=ke(o),b=Te(u),w=x||!b?"finished":u+"-attack";await ee({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:w,attacker:u,round:g,log:h}),w==="finished"&&await Re(o)}async function _e(){const u=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(w=>(o[r+"Team"][w]||[]).some(_=>!_.used)),h=(o["selected_"+i]||[]).map(w=>{const _=(u[w._role]||[]).find(W=>W.cardId===w.cardId)||w,I=g&&["GK","DEF"].includes(w._role),E=u[w._role]||[],A=E.findIndex(W=>W.cardId===w.cardId),B=ot(E.length),N=A>=0?B[A]:_._col??1;return{..._,_line:w._role,_col:N,...I?{note_a:Math.max(1,Number(_.note_a)||0)}:{}}});if(!h.length)return;const x=Ut(h,o.modifiers[i]||{});ie(i,h.map(w=>w.cardId)),h.forEach(w=>{const _=(u[w._role]||[]).find(I=>I.cardId===w.cardId);_&&(_.used=!0)}),o["selected_"+i]=[],Z();const b=[...o.log||[]];if(g){const w=(o[i+"Score"]||0)+1,_=h.map(N=>({name:N.name,note:we(N,N._line||"ATT"),portrait:ze(N),job:N.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:_,homeTotal:x.total,aiTotal:0});const I=(o.round||0)+1,E=i==="p1"?"p2":"p1",A={...o,[i+"Team"]:u,[i+"Score"]:w},B=ke(A);P.add(I),xe(_,w,o[r+"Score"]||0,!0,async()=>{await ee({[i+"Team"]:u,[i+"Score"]:w,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:B?"finished":E+"-attack",attacker:E,round:I,log:b}),B&&await Re({...o,[i+"Score"]:w})});return}b.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${x.total})`}),await ee({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],pendingAttack:{...x,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:b})}async function $e(){const u=o[i+"Team"],g=(o["selected_"+i]||[]).map(H=>{const V=(u[H._role]||[]).find(me=>me.cardId===H.cardId)||H,Q=u[H._role]||[],de=Q.findIndex(me=>me.cardId===H.cardId),ue=ot(Q.length),fe=de>=0?ue[de]:V._col??1;return{...V,_line:H._role,_col:fe}}),h=Kt(g,o.modifiers[i]||{});ie(i,g.map(H=>H.cardId)),g.forEach(H=>{const V=(u[H._role]||[]).find(Q=>Q.cardId===H.cardId);V&&(V.used=!0)}),o["selected_"+i]=[],Z();const x=Vt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),b=o.pendingAttack.side,w=x==="attack"||(x==null?void 0:x.goal),_=b==="p1"?"p2":"p1",I=(o.round||0)+1,E=(o.pendingAttack.players||[]).map(H=>({name:H.name,note:we(H,H._line||"ATT"),portrait:ze(H),job:H.job})),A=[...o.log||[]];A.push({type:"duel",isGoal:w,homeScored:w&&b===i,text:w?`⚽ BUT de ${o[b+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:E,aiPlayers:g.map(H=>({name:H.name,note:we(H,H._line||"DEF"),portrait:ze(H),job:H.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const B=w?(o[b+"Score"]||0)+1:o[b+"Score"]||0,N={...o,[i+"Team"]:u,[b+"Score"]:B},W=ke(N),ce=W?"finished":_+"-attack",J=async()=>{await ee({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],[b+"Score"]:B,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:ce,attacker:_,round:I,log:A}),(ce==="finished"||W)&&await Re({...o,[b+"Score"]:B})};if(w){const H=b===i,V=H?B:o[i+"Score"]||0,Q=H?o[r+"Score"]||0:B;P.add(I),xe(E,V,Q,H,J)}else await J()}function Ee(u){return["MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function Se(u){return["GK","DEF","MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function Ae(u){return Se(u)&&!Ee(u)}function Te(u){const g=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!(Ee(g)||!Se(h)&&Ae(g))}function ke(u){const g=["MIL","ATT"].some(A=>(u.p1Team[A]||[]).some(B=>!B.used)),h=["MIL","ATT"].some(A=>(u.p2Team[A]||[]).some(B=>!B.used)),x=Se(u.p1Team),b=Se(u.p2Team);return!g&&!(!b&&x)&&(!h&&!(!x&&b))}function qe(u){const g=u.p1Score||0,h=u.p2Score||0;return g===h?null:g>h?y.home_id:y.away_id}async function Re(u){try{const g=qe(u),h=g?y.home_id===g?y.away_id:y.home_id:null;await $.from("matches").update({status:"finished",winner_id:g,home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n),g&&h&&Ui(g,h).catch(()=>{})}catch(g){console.error("[PvP] finishMatch:",g)}}function k(){var b;const u=o[i+"Score"],g=o[r+"Score"],h=u>g,x=u===g;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{$.removeChannel(R)}catch{}He(e),l("home")})}Z()}const Bo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ct(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Si(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function qt(e,t){const a=t?Bo[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Mi(e){const n=Rt(e);return n?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${n}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ci(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function Fo(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await mi(e,t)}async function mi(e,t){const{state:n,toast:a}=t,{data:c}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await $.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",n.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(c||[]).filter(o=>o.seller_id!==n.profile.id),l=d||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${s.length} carte(s) en vente · ${(n.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:#f9f9f9;border-bottom:1px solid var(--gray-200);display:flex;flex-wrap:wrap;gap:8px">
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <select id="flt-job" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:#fff">
        <option value="">Tous postes</option>
        <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
      </select>
      <input id="flt-note1"   placeholder="★ Note min"    type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-note2"   placeholder="☆ Note 2 min" type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
    </div>

    <div id="mkt-content" style="padding:10px 16px;display:flex;flex-direction:column;gap:8px"></div>
  </div>`;let p="buy";const i=()=>{var o,v,T,L,S,P;return{name:(((o=document.getElementById("flt-name"))==null?void 0:o.value)||"").toLowerCase().trim(),club:(((v=document.getElementById("flt-club"))==null?void 0:v.value)||"").toLowerCase().trim(),country:(((T=document.getElementById("flt-country"))==null?void 0:T.value)||"").toLowerCase().trim(),job:((L=document.getElementById("flt-job"))==null?void 0:L.value)||"",note1:parseInt((S=document.getElementById("flt-note1"))==null?void 0:S.value)||0,note2:parseInt((P=document.getElementById("flt-note2"))==null?void 0:P.value)||0}};function r(o){const v=i();return o.filter(T=>{var ee,le;const L=(ee=T.card)==null?void 0:ee.player;if(!L)return!1;const S=`${L.firstname} ${L.surname_encoded}`.toLowerCase(),P=(((le=L.clubs)==null?void 0:le.encoded_name)||"").toLowerCase(),F=(L.country_code||"").toLowerCase(),j=ct(L,L.job),R=L.job2?ct(L,L.job2):0;return!(v.name&&!S.includes(v.name)||v.club&&!P.includes(v.club)||v.country&&!F.includes(v.country)||v.job&&L.job!==v.job||v.note1&&j<v.note1||v.note2&&R<v.note2)})}function f(o){var P,F,j;const v=(P=o.card)==null?void 0:P.player;if(!v)return"";const T=ct(v,v.job),L=v.job2?ct(v,v.job2):0,S=(n.profile.credits||0)>=o.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Si(v.rarity)}
      ${qt(T,v.job)}
      ${qt(L,v.job2||null)}
      ${Mi(v.country_code)}
      ${Ci((F=v.clubs)==null?void 0:F.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.firstname} ${v.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((j=o.seller)==null?void 0:j.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${o.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${o.id}" ${S?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${S?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function m(o){var P,F,j;const v=(P=o.card)==null?void 0:P.player;if(!v)return"";const T=ct(v,v.job),L=v.job2?ct(v,v.job2):0,S=o.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${S?"opacity:0.7":""}">
      ${Si(v.rarity)}
      ${qt(T,v.job)}
      ${qt(L,v.job2||null)}
      ${Mi(v.country_code)}
      ${Ci((F=v.clubs)==null?void 0:F.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.firstname} ${v.surname_encoded}</div>
        <div style="font-size:10px;color:${S?"#22c55e":"#999"};margin-top:1px">
          ${S?`✅ Vendu à ${((j=o.buyer)==null?void 0:j.pseudo)||"—"} · ${o.sold_at?new Date(o.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(o.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${o.price.toLocaleString("fr")}</div>
        ${S?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${o.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function y(){const o=document.getElementById("mkt-content"),v=document.getElementById("mkt-filters");if(o){if(v.style.display=p==="buy"?"flex":"none",p==="buy"){const T=r(s);o.innerHTML=T.length?T.map(f).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const T=l.filter(S=>S.status==="active").sort((S,P)=>new Date(P.listed_at)-new Date(S.listed_at)),L=l.filter(S=>S.status==="sold").sort((S,P)=>new Date(P.sold_at||P.listed_at)-new Date(S.sold_at||S.listed_at));o.innerHTML=(T.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${T.length})</div>`+T.map(m).join(""):"")+(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${L.length})</div>`+L.map(m).join(""):"")+(!T.length&&!L.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}o.querySelectorAll("[data-buy]").forEach(T=>T.addEventListener("click",()=>Do(T.dataset.buy,s,e,t))),o.querySelectorAll("[data-cancel]").forEach(T=>T.addEventListener("click",()=>Go(T.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{p=o.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(v=>{const T=v===o;v.style.background=T?"var(--green)":"#fff",v.style.color=T?"#fff":"var(--gray-600)",v.style.borderColor=T?"var(--green)":"var(--gray-200)"}),y()})});let z;["flt-name","flt-club","flt-country","flt-job","flt-note1","flt-note2"].forEach(o=>{var v;(v=document.getElementById(o))==null||v.addEventListener("input",()=>{clearTimeout(z),z=setTimeout(y,250)})}),y()}async function Do(e,t,n,a){const{state:c,toast:d,refreshProfile:s}=a,l=t.find(r=>r.id===e);if(!l)return;const p=l.price;if((c.profile.credits||0)<p){d("Crédits insuffisants","error");return}qo(l,async()=>{const{error:r}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(r){d("Erreur achat : "+r.message,"error");return}await s();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await mi(n,a)})}function qo(e,t){var s;const n=(s=e.card)==null?void 0:s.player,a=n?`${n.firstname} ${n.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const d=l=>{c.remove(),l&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),c.addEventListener("click",l=>{l.target===c&&d(!1)})}async function Go(e,t,n){const{toast:a}=n,{data:c}=await $.from("market_listings").select("card_id").eq("id",e).single();if(await $.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:d}=await $.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");d||await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),mi(t,n)}async function No(e,{state:t,navigate:n,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((d,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${d.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${d.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${d.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${d.trophies_top1} 🥈${d.trophies_top2} 🥉${d.trophies_top3}</div>
              <div style="color:var(--gray-600)">${d.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function Po(e,{state:t,navigate:n,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(d||[]).filter(r=>r.status==="finished"),p=(d||[]).filter(r=>r.status==="in_progress");function i(r){const f=r.home_id===c.id;f?r.home_score:r.away_score,f?r.away_score:r.home_score;const m=r.winner_id===c.id,y=r.home_score===r.away_score&&r.status==="finished",z=r.status!=="finished"?"…":y?"N":m?"V":"D",o=r.status!=="finished"||y?"#888":m?"#1A6B3C":"#c0392b";let v=s[r.mode]||r.mode;r.away_id===null&&!v.startsWith("IA")&&(v="IA");const L=r.home_id===c.id?r.away:r.home;let S;r.away_id===null?S=v:L?S=`${L.club_name||L.pseudo} (${L.pseudo})`:S="Adversaire";let P="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(P=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const F=new Date(r.created_at),j=F.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+F.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),R=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${S}${P}</div>
        <div style="font-size:11px;color:var(--gray-600)">${v} · ${j}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${R}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${z}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(d||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(i).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(i).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}fn(mn);const ve={user:null,profile:null,page:"home",params:{}};function kt(e,t="info",n=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},n))}function Ro(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function oi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Et(){if(!ve.user)return;const{data:e}=await $.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}const xi="mw_theme";function Ht(){return localStorage.getItem(xi)||"light"}function Oo(e){var t;localStorage.setItem(xi,e),ri(e),(t=ve.profile)!=null&&t.id&&$.from("users").update({theme:e}).eq("id",ve.profile.id).then(()=>{})}function ri(e){document.documentElement.setAttribute("data-theme",e)}function Nt(e,t={}){ve.page=e,ve.params=t,pn()}async function pn(){var a,c;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const n={state:ve,navigate:Nt,toast:kt,openModal:Ro,closeModal:oi,refreshProfile:Et};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await wi(e,n);break;case"collection":await Dn(e,n);break;case"decks":await Qt(e,n);break;case"boosters":await Jn(e,n);break;case"match":{const d=ve.params&&ve.params.matchMode||"vs_ai_easy";d==="random"?await ln(e,n):d==="friend"?await Mo(e,n,(a=ve.params)==null?void 0:a.friendId,(c=ve.params)==null?void 0:c.friendName):await fo(e,n);break}case"market":await Fo(e,n);break;case"rankings":await No(e,n);break;case"matches":await Po(e,n);break;case"friends":await _n(e,n);break;default:await wi(e,n)}}function Ho(){const e=document.getElementById("app"),t=ve.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",c=>{c.preventDefault(),Nt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Nt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Nt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Ht()==="dark"?"light":"dark";Oo(c),ji(c)}),ji(Ht())}function ji(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Uo(){ri(Ht()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&oi()}),document.getElementById("modal-close").addEventListener("click",oi);const{data:{session:e}}=await $.auth.getSession();if(!e){Bi(),hi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt});return}ve.user=e.user,await Et(),Bi();try{const{data:n}=await $.from("formation_links_overrides").select("formation, links"),a={};(n||[]).forEach(c=>{a[c.formation]=c.links}),gn(a)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!ve.profile){xn(document.getElementById("app"),{state:ve,navigate:async()=>{await Et(),Zt()},toast:kt,refreshProfile:Et});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){lo(document.getElementById("app"),{state:ve,navigate:()=>Zt(),toast:kt,refreshProfile:Et});return}ve.profile.theme&&ve.profile.theme!==Ht()&&(localStorage.setItem(xi,ve.profile.theme),ri(ve.profile.theme)),Zt(),$.auth.onAuthStateChange(async(n,a)=>{n==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",hi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt}))})}function Ko(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Wt(){const e=document.getElementById("app");e&&(e.style.height=Ko()+"px")}window.addEventListener("resize",Wt);window.addEventListener("orientationchange",()=>setTimeout(Wt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Wt);function Zt(){const e=()=>{var n;(n=ve.user)!=null&&n.id&&$.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Wt(),Ho(),pn()}function Bi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function un(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}Uo().catch(e=>{console.error("Échec du démarrage:",e),un()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&un("Le serveur met trop de temps à répondre.")},12e3);
