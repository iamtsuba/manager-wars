import{s as $,F as si,h as Mt,j as qi,l as Qe,i as mn,k as xn,b as yn}from"./formation-links-DJC25wD7.js";function hi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,l=document.getElementById("login-error");if(l.textContent="",!r||!c){l.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:s}=await $.auth.signInWithPassword({email:r,password:c});if(d.textContent="Se connecter",d.disabled=!1,s){l.textContent=s.message.includes("Invalid")?"Email ou mot de passe incorrect.":s.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,l=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!r||!c||!l){d.textContent="Remplissez tous les champs.";return}if(c.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==l){d.textContent="Les mots de passe ne correspondent pas.";return}const s=document.getElementById("reg-btn");s.textContent="Création…",s.disabled=!0;const{error:p}=await $.auth.signUp({email:r,password:c});if(s.textContent="Créer mon compte",s.disabled=!1,p){d.textContent=p.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function hn(e,{state:t,navigate:n,toast:r,refreshProfile:c}){let l="#1A6B3C",d="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${d};border-color:${l}">
          <span id="logo-initials" style="color:${l}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${l};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${l}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function s(){var M;const i=document.getElementById("logo-preview"),a=document.getElementById("logo-initials"),u=((M=document.getElementById("setup-club"))==null?void 0:M.value)||"MW",g=u.trim().split(" ").filter(Boolean),x=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():u.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=l),a&&(a.textContent=x,a.style.color=l)}document.getElementById("color1").addEventListener("input",i=>{l=i.target.value,document.getElementById("swatch1").style.background=l,s()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,s()});function p(i){document.querySelectorAll(".setup-step").forEach(a=>a.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("step1-error");if(a.textContent="",i.length<3){a.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await $.from("users").select("id").eq("pseudo",i).maybeSingle();if(u){a.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),a=document.getElementById("step2-error");if(a.textContent="",i.length<2){a.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await $.from("users").select("id").eq("club_name",i).maybeSingle();if(u){a.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),g=document.getElementById("step3-finish");u.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:x}=await $.from("users").insert({id:t.user.id,pseudo:i,club_name:a,club_color1:l,club_color2:d,credits:1e4});if(x)throw x;await bn(t.user.id),await c(),r(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){u.textContent=x.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function bn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await $.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const vn="modulepreload",wn=function(e){return"/manager-wars/"+e},bi={},_n=function(t,n,r){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),s=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));c=Promise.allSettled(n.map(p=>{if(p=wn(p),p in bi)return;bi[p]=!0;const i=p.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":vn,i||(u.as="script"),u.crossOrigin="",u.href=p,s&&u.setAttribute("nonce",s),document.head.appendChild(u),i)return new Promise((g,x)=>{u.addEventListener("load",g),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(d){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=d,window.dispatchEvent(s),!s.defaultPrevented)throw d}return c.then(d=>{for(const s of d||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},Lt="#1A6B3C",It="#cc2222",$n="#D4A017",vi="#888";async function kn(e,t){const{state:n,toast:r}=t;e.innerHTML=`
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
    </div>`,await Di(n,r,t),document.getElementById("btn-add-friend").addEventListener("click",()=>An(n,r)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Gi(n,r,null,t))}async function Di(e,t,n={}){const{navigate:r}=n,c=e.user.id,{data:l,error:d}=await $.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:s}=await $.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(s>0?(p.style.display="flex",p.textContent=s):p.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(d){console.error("[Friends] Erreur:",d),i.innerHTML=`<div style="color:${It};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const a=(l||[]).map(x=>x.requester_id===c?x.addressee_id:x.requester_id);let u={};if(a.length){const{data:x}=await $.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",a);(x||[]).forEach(M=>{u[M.id]=M})}const g=(l||[]).map(x=>({friendshipId:x.id,friend:u[x.requester_id===c?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!g.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${g.length} ami${g.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${g.map(({friendshipId:x,friend:M})=>En(M,x)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>Tn(e,x.dataset.stats,x.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const M=x.dataset.friendId,o=x.dataset.friendName;console.log("[Friends] clic match",{fid:M,fname:o,hasNavigate:typeof r}),typeof r=="function"?r("match",{matchMode:"friend",friendId:M,friendName:o}):t("Erreur navigation","error")})})}function En(e,t){const n=e.club_name||e.pseudo||"?",r=e.pseudo||"",c=(r||n).slice(0,2).toUpperCase(),l=e.club_color2||Lt,d=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,p=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${l};border:2.5px solid ${d};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${d}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${r}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${n}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${n}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${$n};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function An(e,t){const n=di();n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${It};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${li()}`,document.body.appendChild(n);const r=n.querySelector("#friend-pseudo-input"),c=n.querySelector("#add-friend-error"),l=()=>n.remove();r.focus(),n.querySelector("#add-cancel").addEventListener("click",l),n.addEventListener("click",d=>{d.target===n&&l()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const d=r.value.trim();if(!d){c.textContent="Entre un pseudo";return}c.textContent="";const{data:s}=await $.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!s){c.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await $.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(p){const a=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=a;return}const{error:i}=await $.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(i){c.textContent="Erreur : "+i.message;return}l(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Gi(e,t,n=null,r={}){const c=e.user.id,{data:l}=await $.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),d=(l||[]).map(g=>g.requester_id);let s={};if(d.length){const{data:g}=await $.from("users").select("id, pseudo, club_name").in("id",d);(g||[]).forEach(x=>{s[x.id]=x})}const p=(l||[]).map(g=>({...g,requester:s[g.requester_id]||{pseudo:"?"}})),i=di(),a=p||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${a.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${a.map(g=>{var x,M,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=g.requester)==null?void 0:x.club_name)||((M=g.requester)==null?void 0:M.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((o=g.requester)==null?void 0:o.pseudo)||""})</span>
                </div>
                <button data-accept="${g.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${g.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${It};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(i);const u=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",u),i.addEventListener("click",g=>{g.target===i&&u()}),i.querySelectorAll("[data-accept]").forEach(g=>{g.addEventListener("click",async()=>{const{error:x}=await $.from("friendships").update({status:"accepted"}).eq("id",g.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}g.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Di(e,t,r),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(g=>{g.addEventListener("click",async()=>{await $.from("friendships").delete().eq("id",g.dataset.decline),g.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function Tn(e,t,n){const r=e.user.id,[c,l]=[r,t].sort(),d=r===c,{data:s}=await $.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",l).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",i=s||{},a=d?i.wins_p1||0:i.wins_p2||0,u=d?i.wins_p2||0:i.wins_p1||0,g=i.draws||0,x=d?i.goals_p1||0:i.goals_p2||0,M=d?i.goals_p2||0:i.goals_p1||0,o=d?i.gc_used_p1||0:i.gc_used_p2||0,b=d?i.gc_used_p2||0:i.gc_used_p1||0,E=i.matches_total||0,T=(D,S,B,P=Lt,Q=It)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${P}">${S}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${D}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Q}">${B}</div>
    </div>`,k=di();k.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${n}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      </div>
      ${E===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${T("Victoires",a,u)}
        ${T("Nuls",g,g,vi,vi)}
        ${T("Défaites",u,a)}
        ${T("Buts marqués",x,M)}
        ${T("Buts encaissés",M,x,It,Lt)}
        ${T("GC utilisés ⚡",o,b,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${E} match${E>1?"s":""} joué${E>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(k),k.querySelector("#stats-close").addEventListener("click",()=>k.remove()),k.addEventListener("click",D=>{D.target===k&&k.remove()})}function di(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function li(){return`
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
    </style>`}async function Ln({player1Id:e,player2Id:t,score1:n,score2:r,gc1:c,gc2:l}){const[d,s]=[e,t].sort(),p=e!==d,i=p?r:n,a=p?n:r,u=p?l:c,g=p?c:l,x=i>a?1:0,M=a>i?1:0,o=i===a?1:0,{data:b}=await $.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single();b?await $.from("friend_match_stats").update({wins_p1:b.wins_p1+x,wins_p2:b.wins_p2+M,draws:b.draws+o,goals_p1:b.goals_p1+i,goals_p2:b.goals_p2+a,gc_used_p1:b.gc_used_p1+u,gc_used_p2:b.gc_used_p2+g,matches_total:b.matches_total+1}).eq("player1_id",d).eq("player2_id",s):await $.from("friend_match_stats").insert({player1_id:d,player2_id:s,wins_p1:x,wins_p2:M,draws:o,goals_p1:i,goals_p2:a,gc_used_p1:u,gc_used_p2:g,matches_total:1})}const In="2026.07.01-0035";async function wi(e,{state:t,navigate:n,toast:r}){var l,d;const c=t.profile;c&&(e.innerHTML=`
  <style>
    @media (min-width: 768px) {
      .home-page-body {
        max-width: 700px !important;
        height: 100%;
        box-sizing: border-box;
        display: flex !important;
        flex-direction: column;
        gap: 10px !important;
        overflow: hidden;
      }
      /* Hero : taille fixe */
      .home-page-body .hero-compact { flex-shrink: 0; }
      /* Bannières dynamiques : taille fixe */
      #friend-requests-banner, #match-invite-banner, #ongoing-match-banner { flex-shrink: 0; }
      /* Ranked : hauteur fixe */
      .home-page-body .ranked-banner { flex-shrink: 0; min-height: 130px; max-height: 130px; }
      /* Grille 2x2 : prend tout l'espace restant */
      .home-page-body .play-grid {
        flex: 1 1 0;
        min-height: 0;
        grid-template-rows: 1fr 1fr;
      }
      .home-page-body .play-card { min-height: unset; height: 100%; }
      /* Boutons bas : taille fixe */
      .home-page-body > div:last-child { flex-shrink: 0; }
    }
  </style>
  <div class="page" style="height:100%;overflow-y:auto">
    <div class="page-body home-page-body">

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
        <div class="play-badge-group"><img src="/manager-wars/icons/badge-ranked.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay"></div>
      </div>

      <!-- Jeu : 4 tuiles -->
      <div class="play-grid">
        <div class="play-card" data-action="match-ai">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-ai.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="match-random">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-random.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="match-friend">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-vs.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="mini-league">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-league.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay"></div>
        </div>
      </div>

            <!-- Logout -->
      <div style="text-align:center;padding:4px 0 8px;display:flex;flex-direction:column;gap:6px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600);padding:4px 14px;font-size:12px">Déconnexion</button>
        ${c.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${In}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",p=>{p.preventDefault(),n(s.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>n("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.classList.add("tapped"),setTimeout(()=>s.classList.remove("tapped"),200);const p=s.dataset.action;if(p==="match-ai"){jn(n);return}if(p==="match-random"){n("match",{matchMode:"random"});return}if(p==="match-friend"){n("friends");return}if(p==="mini-league"){n("mini-league");return}if(p==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}r("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var D,S,B,P,Q,de;const s=((D=window.visualViewport)==null?void 0:D.height)||window.innerHeight,p=((S=document.querySelector(".top-nav"))==null?void 0:S.offsetHeight)||56,i=((B=document.querySelector(".bottom-nav"))==null?void 0:B.offsetHeight)||60,a=((P=e.querySelector(".hero-compact"))==null?void 0:P.offsetHeight)||52,u=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const g=((de=(Q=e.querySelector("#logout-btn"))==null?void 0:Q.closest("div"))==null?void 0:de.offsetHeight)||44,x=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((ie,j)=>{var Y;return ie+(((Y=document.getElementById(j))==null?void 0:Y.offsetHeight)||0)},0),M=14*5,o=s-p-i-a-g-x-M,b=Math.max(80,Math.round(o*.28)),E=Math.max(160,Math.round(o*.72)),T=Math.floor((E-10)/2);u&&(u.style.minHeight=u.style.maxHeight=b+"px"),e.querySelectorAll(".play-grid .play-card").forEach(ie=>{ie.style.minHeight=ie.style.height=T+"px"});const k=Math.round(T*.55);e.querySelectorAll(".play-card .play-icon").forEach(ie=>{ie.style.height=k+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()}),Pi(t,r),Sn(t,r,n),Ni(t,r,n))}async function Ni(e,t,n){const r=document.getElementById("ongoing-match-banner");if(!r)return;const c=e.profile.id,{data:l}=await $.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(l!=null&&l.length)){r.innerHTML="";return}const d=l.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let s={};if(d.length){const{data:p}=await $.from("users").select("id, pseudo, club_name").in("id",d);(p||[]).forEach(i=>{s[i.id]=i.club_name||i.pseudo})}r.innerHTML=l.map(p=>{const i=p.home_id===c?p.away_id:p.home_id,a=s[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${a}</div>
        </div>
        <button data-resume="${p.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),r.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const{resumePvpMatch:i}=await _n(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>jo);return{resumePvpMatch:u}},void 0),a=document.getElementById("page-content")||document.getElementById("app");i(a,{state:e,navigate:n,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)})}),r.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{Mn(async()=>{await zn(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Ni(e,t,n)})})})}async function zn(e,t,n){const{data:r}=await $.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!r)return;const c=r.home_id===n,l=c?0:3,d=c?3:0,s=r.game_state||{};s.p1Score=l,s.p2Score=d,s.phase="finished",s.forfeit=!0,await $.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:l,away_score:d,game_state:s}).eq("id",e)}function Mn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function Sn(e,t,n){var s,p,i,a;const r=document.getElementById("match-invite-banner");if(!r)return;const{data:c}=await $.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){r.innerHTML="";return}const l=((s=c.inviter)==null?void 0:s.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",d=c.inviter_id;r.innerHTML=`
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
        <div style="font-size:13px;font-weight:900">${l} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{r.innerHTML="",n("match",{matchMode:"friend",friendId:d,friendName:l})}),(a=document.getElementById("match-inv-decline"))==null||a.addEventListener("click",async()=>{await $.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),r.innerHTML="",t("Invitation refusée","info")})}async function Pi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:r,error:c}=await $.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(r!=null&&r.length)){n.innerHTML="";return}const l=r.length,d=r.slice(0,2).map(p=>{var i;return((i=p.requester)==null?void 0:i.pseudo)||"?"}).join(", "),s=l>2?` +${l-2}`:"";n.innerHTML=`
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
          ${l} demande${l>1?"s":""} d'ami${l>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${d}${s}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Gi(e,t,()=>Pi(e,t))})}function jn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const r=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",r),n.addEventListener("click",c=>{c.target===n&&r()}),n.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{r(),e("match",{matchMode:c.dataset.mode})})})}const Ne={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ve(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const _i=["ATT","MIL","DEF","GK"];function Ri(e){let t=0;const n=e.length;for(let r=0;r<n;r++)for(let c=r+1;c<n;c++){const l=e[r],d=e[c];if(!l||!d)continue;const s=l._col!=null&&d._col!=null&&l._col===d._col,p=l._col!=null&&d._col!=null&&Math.abs(l._col-d._col)===1,i=_i.indexOf(l._line||l.job),a=_i.indexOf(d._line||d.job),u=Math.abs(i-a)===1;if(!((l._line||l.job)===(d._line||d.job)&&p||s&&u))continue;const M=l.country_code&&d.country_code&&l.country_code===d.country_code,o=l.club_id&&d.club_id&&l.club_id===d.club_id;M&&o?t+=2:(M||o)&&(t+=1)}return t}function Kt(e,t={}){const n=e.reduce((l,d)=>{const s=d._line||d.job;return l+(Number(s==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),r=Ri(e);let c=n+r;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:n,links:r,total:Math.max(0,c)}}function Vt(e,t={}){const n=e.reduce((l,d)=>{const s=d._line||d.job;let p=0;return s==="GK"?p=Number(d.note_g)||0:s==="MIL"?p=Number(d.note_m)||0:p=Number(d.note_d)||0,l+p+(d.boost||0)},0),r=Ri(e);let c=n+r;return t.stolenNote&&(c-=t.stolenNote),{base:n,links:r,total:Math.max(0,c)}}function Yt(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Oi(e,t,n="easy"){const r=e.filter(d=>!d.used);if(!r.length)return[];const c=[...r].sort((d,s)=>{const p=t==="attack"?ve(d,"ATT"):d._line==="GK"?ve(d,"GK"):ve(d,"DEF");return(t==="attack"?ve(s,"ATT"):s._line==="GK"?ve(s,"GK"):ve(s,"DEF"))-p});let l=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function Cn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const Bn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Hi(e,t){const n=e.player;if(!n)return 0;const r=n.rarity;if(r!=="pepite"&&r!=="papyte")return Number(n[t])||0;const c=Ui(n),l=Number(n[t])||0;if(l<=0)return 0;const d=n.note_min??1,s=n.note_max??10,i=(e.current_note??c)-c;return Math.min(s,Math.max(d,l+i))}function Ui(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ki(e,t){!e||!t||await Promise.all([$i(e,"win"),$i(t,"loss")])}async function $i(e,t){const{data:n}=await $.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(n!=null&&n.length))return;const r=n.filter(c=>{var l,d;return((l=c.player)==null?void 0:l.rarity)==="pepite"||((d=c.player)==null?void 0:d.rarity)==="papyte"});r.length&&await Promise.all(r.map(c=>{const l=Bn[c.player.rarity],d=t==="win"?l.win:l.loss,s=c.player.note_min??1,p=c.player.note_max??10,i=Ui(c.player),a=c.current_note??i,u=Math.min(p,Math.max(s,a+d));return $.from("cards").update({current_note:u}).eq("id",c.id)}))}const Vi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ft=["GK","DEF","MIL","ATT"],Fn=["Tous","GK","DEF","MIL","ATT"],qn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function ki(e){const t=e.player;if(!t)return null;const n=t.rarity;return(n==="pepite"||n==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Dn(e){return e.length?e.reduce((t,n)=>ki(n)>ki(t)?n:t,e[0]):e[0]}function Yi(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const ci={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Wi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function zt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Xt(e,t=""){var g,x;const n=e.player;if(!n)return"";const r=n.job||"ATT",c=At[r],l=Vi[n.rarity]||"#ccc",d=n.rarity==="pepite"||n.rarity==="papyte",s=d&&e.current_note!=null?e.current_note:zt(n,r),p=n.job2?d?Hi(e,Yi(n.job2)):zt(n,n.job2):null,i=n.job2?At[n.job2]:null,a=Wi(n),u=ci[n.country_code]||n.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${l};cursor:pointer;flex-shrink:0;position:relative
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
            fill="white" font-family="Arial Black,Arial">${s}</text>
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
        ${a?`<img src="${a}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${u}</div>
        ${(g=n.clubs)!=null&&g.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((x=n.clubs)==null?void 0:x.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ei(e){const t=e.job||"ATT",n=zt(e,t),r=ci[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Gn(e,t){const{state:n,navigate:r,toast:c,openModal:l,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:p}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(s||[]).filter(O=>O.card_type==="player"&&O.player),a=(s||[]).filter(O=>O.card_type==="game_changer"),u=(s||[]).filter(O=>O.card_type==="formation"),{data:g}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(O=>{x[O.name]=O});const M=Object.keys(si),o=Object.keys(Ne),b={};i.forEach(O=>{const U=O.player.id;b[U]=(b[U]||0)+1}),new Set(Object.keys(b).map(O=>String(O)));const E=new Set(u.map(O=>O.formation)),T=new Set(a.map(O=>O.gc_type));let k="player",D="Tous",S="",B=!1;function P(){return[...i].sort((O,U)=>{const C=Ft.indexOf(O.player.job),q=Ft.indexOf(U.player.job);return C!==q?C-q:(O.player.surname_encoded||"").localeCompare(U.player.surname_encoded||"")})}function Q(){return[...p||[]].sort((O,U)=>{const C=Ft.indexOf(O.job),q=Ft.indexOf(U.job);return C!==q?C-q:(O.surname_encoded||"").localeCompare(U.surname_encoded||"")})}function de(){return P().filter(O=>{const U=O.player,C=D==="Tous"||U.job===D,q=!S||`${U.firstname} ${U.surname_encoded}`.toLowerCase().includes(S);return C&&q})}function ie(){return Q().filter(O=>{const U=D==="Tous"||O.job===D,C=!S||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(S);return U&&C})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${k==="player"?"var(--green)":"transparent"};
        color:${k==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${k==="formation"?"var(--green)":"transparent"};
        color:${k==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${k==="gc"?"var(--green)":"transparent"};
        color:${k==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function j(){const O=document.getElementById("col-filters");O&&(k==="player"?(O.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${S}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Fn.map(U=>`
            <button class="filter-btn" data-job="${U}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${U===D?"var(--green)":"var(--gray-200)"};
                background:${U===D?"var(--green)":"#fff"};
                color:${U===D?"#fff":"var(--gray-600)"}">
              ${U}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${B?"var(--yellow)":"var(--gray-200)"};
              background:${B?"var(--yellow)":"#fff"};
              color:${B?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${B?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",U=>{S=U.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(U=>{U.addEventListener("click",()=>{D=U.dataset.job,j(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{B=!B,j(),Y()})):(O.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${B?"var(--yellow)":"var(--gray-200)"};
              background:${B?"var(--yellow)":"#fff"};
              color:${B?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${B?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{B=!B,j(),Y()})))}function Y(){const O=document.getElementById("col-grid");O&&(k==="player"?he(O):k==="formation"?xe(O):ge(O))}function ne(O,U,C,q,K){const oe=document.getElementById("col-grid"),te=document.getElementById("col-big");if(!oe||!te)return;var we=0;function _e(){const ke=window.innerWidth>=768,Me=document.getElementById("col-big"),Ee=document.getElementById("col-grid");ke&&Me&&(Me.style.minHeight="420px",Me.style.flex="1 1 auto"),ke&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),te.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+U(O[we])+"</div>";var Te=te.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){q(O[we])}),requestAnimationFrame(function(){var $e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!$e||!te)){var De=te.clientHeight-8,Re=te.clientWidth-24,A=$e.offsetHeight,f=$e.offsetWidth;if(A>0&&f>0&&De>40){var m=ke?2.2:1,h=Math.min(De/A,Re/f,m);$e.style.transform="scale("+h.toFixed(3)+")",$e.style.transformOrigin="top center"}}}),oe.innerHTML=O.map(function($e,De){var Re=De===we,A="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Re?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+De+'" style="'+A+'">'+C($e,Re)+"</div>"}).join(""),oe.querySelectorAll(".col-mini-item").forEach(function($e){$e.addEventListener("click",function(){we=Number($e.dataset.idx),_e(),$e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function G(O){var U=window.innerWidth>=768?.76:.54,C;if(!O||O._fake){var q=O?O.player:null;if(!q)return"";C=Ei(q)}else C=Xt(O,"");return'<div style="display:inline-block;zoom:'+U+';pointer-events:none;line-height:0">'+C+"</div>"}function Z(O,U,C){U=U||100,C=C||140;var q=Mt[O]||{},K={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},oe=Math.max(3,Math.round(U*.06)),te=Object.entries(q).map(function(_e){var ke=_e[0],Me=_e[1],Ee=ke.replace(/\d+$/,""),Te=K[Ee]||"#888",$e=Math.round(Me.x*U),De=Math.round(Me.y*C);return'<circle cx="'+$e+'" cy="'+De+'" r="'+oe+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),we=Math.max(1,Math.round(U/50));return'<svg viewBox="0 0 '+U+" "+C+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+U+'" height="'+C+'" fill="#1A6B3C"/><rect x="'+Math.round(U*.2)+'" y="'+Math.round(C*.02)+'" width="'+Math.round(U*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/><line x1="0" y1="'+Math.round(C*.5)+'" x2="'+U+'" y2="'+Math.round(C*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><ellipse cx="'+Math.round(U*.5)+'" cy="'+Math.round(C*.5)+'" rx="'+Math.round(U*.18)+'" ry="'+Math.round(C*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><rect x="'+Math.round(U*.2)+'" y="'+Math.round(C*.82)+'" width="'+Math.round(U*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/>'+te+"</svg>"}function ae(O,U,C){var q=C>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+C+"</div>":"",K=U?'data-form-id="'+U.id+'"':"",oe=O.length>7?14:O.length>5?16:19,te=!!U;return"<div "+K+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(te?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(te?"":"filter:grayscale(1);opacity:0.5")+'">'+q+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(te?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+oe+"px;font-weight:900;color:"+(te?"#1A6B3C":"#aaa")+';line-height:1">'+O+'</div></div><div style="flex:1;overflow:hidden;background:'+(te?"#1A6B3C":"#ccc")+'">'+Z(O,140,220)+"</div></div>"}function pe(O,U){var C=window.innerWidth>=768?.76:.54,q=140,K=305,oe=Math.round(K*.22),te=K-oe,we=O.length>7?10:13,_e=Z(O,q,te),ke=U?"1.5px solid #2a7a40":"1px solid #ddd",Me=U?"":"filter:grayscale(1);opacity:0.45;",Ee=U?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+C+';line-height:0;pointer-events:none"><div style="width:'+q+"px;height:"+K+"px;border-radius:6px;border:"+ke+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Me+'"><div style="height:'+oe+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+we+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(q-4)+'px">'+O+'</span></div><div style="height:'+te+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function he(O){if(B){const U=ie();if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const C=U.map(q=>i.find(K=>K.player.id===q.id)||{_fake:!0,player:q,id:"fake-"+q.id});ne(C,q=>q._fake?Ei(q.player):Xt(q,""),q=>q._fake?G({player:q.player,id:"x",_fake:!0}):G(q),q=>{q._fake||Ai(q,i,b,t)})}else{const U=de();if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const C={};U.forEach(K=>{const oe=K.player.id;C[oe]||(C[oe]=[]),C[oe].push(K)});const q=Object.values(C).map(K=>Dn(K));ne(q,K=>{const oe=b[K.player.id]||1,te=oe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${oe}</div>`:"",_e=i.filter(ke=>ke.player.id===K.player.id&&ke.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Xt(K,te+_e)},K=>G(K),K=>Ai(K,i,b,t))}}function xe(O){const U=B?M:[...E];if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const C=U.map(q=>({formation:q,card:u.find(K=>K.formation===q)||null,owned:E.has(q)}));ne(C,({formation:q,card:K,owned:oe})=>ae(q,oe?K:null,oe?u.filter(te=>te.formation===q).length:0),({formation:q,owned:K})=>pe(q,K),({card:q,owned:K})=>{K&&q&&Pn(q,u,t,l)})}function ge(O){const U=Object.keys(x),C=B?U.length?U:o:[...T];if(!C.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const q=C.map(K=>({type:K,gc:Ne[K]||{icon:"⚡",desc:""},def:x[K]||null,owned:T.has(K),card:a.find(oe=>oe.gc_type===K)||null}));ne(q,({type:K,gc:oe,def:te,owned:we,card:_e})=>{const ke=we?a.filter(m=>m.gc_type===K).length:0,Me=ke>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ke}</div>`:"",Ee=(te==null?void 0:te.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},$e={purple:"#b06ce0",light_blue:"#00d4ef"},De=Te[te==null?void 0:te.color]||Te.purple,Re=$e[te==null?void 0:te.color]||$e.purple,A=(te==null?void 0:te.effect)||oe.desc||"",f=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return we&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${K}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Re};background:${De};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Re}66;cursor:pointer">
          ${Me}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${K.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${K}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${f?`<img src="${f}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${oe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${A.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${K}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${oe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:K,gc:oe,def:te,owned:we})=>{const _e=window.innerWidth>=768?.76:.54,ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Me={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=ke[te==null?void 0:te.color]||ke.purple,Te=Me[te==null?void 0:te.color]||Me.purple,$e=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return we?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${K}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${$e?`<img src="${$e}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${oe.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((te==null?void 0:te.effect)||oe.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${oe.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${K}</span></div></div>`},({type:K,owned:oe,def:te})=>{oe&&Nn(K,te,l)})}e.querySelectorAll(".col-tab-btn").forEach(O=>{O.addEventListener("click",()=>{k=O.dataset.tab,D="Tous",S="",B=!1,e.querySelectorAll(".col-tab-btn").forEach(U=>{const C=U.dataset.tab===k;U.style.borderBottomColor=C?"var(--green)":"transparent",U.style.color=C?"var(--green)":"var(--gray-600)"}),j(),Y()})}),j(),Y()}function Nn(e,t,n){const r=Ne[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[t==null?void 0:t.color]||l.purple,p=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,a=(t==null?void 0:t.effect)||r.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${r.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${a}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const qt=1e3;function Pn(e,t,n,r){var M,o,b;const{state:c,toast:l,closeModal:d,navigate:s,refreshProfile:p}=n,i=e.formation,a={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const E=Mt[i]||{},T=si[i]||[],k=290,D=360,S=20;function B(Q){const de=E[Q];return de?{x:de.x*k,y:de.y*D}:null}let P=`<svg width="${k}" height="${D}" viewBox="0 0 ${k} ${D}" xmlns="http://www.w3.org/2000/svg">`;for(const[Q,de]of T){const ie=B(Q),j=B(de);!ie||!j||(P+=`<line x1="${ie.x}" y1="${ie.y}" x2="${j.x}" y2="${j.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const Q of Object.keys(E)){const de=B(Q);if(!de)continue;const ie=Q.replace(/\d+/,""),j=a[ie]||"#555";P+=`<circle cx="${de.x}" cy="${de.y}" r="${S}" fill="${j}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,P+=`<text x="${de.x}" y="${de.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>`}return P+="</svg>",P}const g=t.filter(E=>E.formation===i);g.length;const x=!e.is_for_sale;r(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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

    <!-- Marché (optionnel) -->
    ${x?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${qt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(M=document.getElementById("direct-sell-form-btn"))==null||M.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${qt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const E=g.find(k=>!k.is_for_sale)||g[0];if(!E){l("Aucune carte à vendre","error");return}await $.from("market_listings").delete().eq("card_id",E.id),await $.from("transfer_history").delete().eq("card_id",E.id);const{error:T}=await $.from("cards").delete().eq("id",E.id);if(T){l(T.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+qt}).eq("id",c.profile.id),await p(),l(`+${qt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),s("collection")}),(o=document.getElementById("market-sell-form-btn"))==null||o.addEventListener("click",async()=>{const E=parseInt(document.getElementById("sell-price-form").value);if(!E||E<1){l("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:E}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:E}),l("Carte mise en vente sur le marché !","success"),d(),s("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),d(),s("collection")})}async function Ai(e,t,n,r){var ae,pe,he,xe,ge,O,U;const{state:c,toast:l,openModal:d,closeModal:s,navigate:p,refreshProfile:i}=r,a=e.player,u=t.filter(C=>C.player.id===a.id),g=u.length,x=Math.max(Number(a.note_g)||0,Number(a.note_d)||0,Number(a.note_m)||0,Number(a.note_a)||0),M=a.rarity||"normal",{data:o}=await $.from("sell_price_configs").select("*").eq("rarity",M).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1),b=((ae=o==null?void 0:o[0])==null?void 0:ae.price)??qn[M]??1e3,E=a.rarity!=="legende",T=Wi(a),k=(a.rarity==="pepite"||a.rarity==="papyte")&&e.current_note!=null?e.current_note:zt(a,a.job),D=a.rarity==="pepite"||a.rarity==="papyte",S=a.job2?D?Hi(e,Yi(a.job2)):zt(a,a.job2):null,B=At[a.job]||"#1A6B3C",P=a.job2?At[a.job2]:null,Q=Vi[a.rarity]||"#ccc",de=ci[a.country_code]||a.country_code||"",ie=u.map(C=>C.id);let j={};if(ie.length){const{data:C}=await $.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ie).order("transferred_at",{ascending:!0});(C||[]).forEach(q=>{j[q.card_id]||(j[q.card_id]=[]),j[q.card_id].push(q)})}const Y=C=>{const q=C.transferred_at?new Date(C.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",K=C.source==="booster"?"Booster":C.price?C.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${C.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${C.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${q}</div>
      </div>
    </div>`},ne=ie.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${g>1?`(${g})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((C,q)=>{const K=j[C.id]||[],oe=C.is_for_sale,te=K.length?K[K.length-1]:null,_e=(a.rarity==="pepite"||a.rarity==="papyte")&&C.current_note!=null?` (☆${C.current_note})`:"";return`
            <div data-card-id="${C.id}" data-card-idx="${q}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${oe?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${C.id}" ${oe?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${q+1}${_e}${oe?" 🏷️ En vente":""}</div>
                  ${te?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${te.club_name} · ${te.source==="booster"?"Booster":te.price?te.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${q}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${K.length?`${K.length} club${K.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${q}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${b.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${E?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${a.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";d(`${a.firstname} ${a.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${Q};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${a.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(a.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${B}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${B}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${k}</text>
            </svg>
            ${S!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${P}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${S}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${T?`<img src="${T}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${a.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${de}</div>
            ${(pe=a.clubs)!=null&&pe.logo_url?`<img src="${a.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((he=a.clubs)==null?void 0:he.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${Q}">${a.rarity.toUpperCase()}</div>
          ${a.rarity==="pepite"||a.rarity==="papyte"?`
          <div style="margin-top:6px;background:${Q}18;border-left:3px solid ${Q};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${Q};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${a.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(a.rarity==="pepite"?a.note_min:a.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${a.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${a.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${a.job}${a.job2?" / "+a.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",a.note_g],["DEF",a.note_d],["MIL",a.note_m],["ATT",a.note_a]].map(([C,q])=>{const K=At[C],oe=Number(q)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${K}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${oe}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${C}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${g}</div>
        </div>
      </div>
    </div>
    ${ne}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",s);let G=new Set;const Z=()=>{const C=G.size,q=document.getElementById("sell-action-panel");q&&(q.style.display=C>0?"block":"none",document.getElementById("sell-selected-count").textContent=C,document.getElementById("sell-direct-total").textContent=(C*b).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(C=>{C.addEventListener("change",()=>{const q=C.dataset.id;C.checked?G.add(q):G.delete(q);const K=C.closest(".exemplaire-row");K&&(K.style.borderColor=C.checked?"#1A6B3C":"#eee"),Z()})}),document.querySelectorAll(".exemplaire-row").forEach(C=>{C.addEventListener("click",q=>{if(q.target.closest("button")||q.target.tagName==="INPUT")return;const K=C.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(C=>{C.addEventListener("click",q=>{q.stopPropagation();const K=document.querySelector(`.expl-hist[data-hist="${C.dataset.idx}"]`);K&&(K.style.display=K.style.display==="none"?"flex":"none")})}),(ge=document.getElementById("direct-sell-btn"))==null||ge.addEventListener("click",async()=>{const C=[...G];if(!C.length)return;const q=C.length*b;if(!confirm(`Vendre ${C.length} carte${C.length>1?"s":""} ${a.surname_encoded} pour ${q.toLocaleString("fr")} crédits ? Action irréversible.`))return;await $.from("market_listings").delete().in("card_id",C),await $.from("transfer_history").delete().in("card_id",C);const{error:K}=await $.from("cards").delete().in("id",C);if(K){l(K.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+q}).eq("id",c.profile.id),await i();const oe=document.getElementById("nav-credits");oe&&(oe.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l(`+${q.toLocaleString("fr")} crédits ! ${C.length} carte${C.length>1?"s":""} vendue${C.length>1?"s":""}.`,"success"),s(),p("collection")}),(O=document.getElementById("market-sell-btn"))==null||O.addEventListener("click",async()=>{var we;const C=[...G];if(!C.length){l("Sélectionne au moins un exemplaire","warning");return}const q=parseInt((we=document.getElementById("sell-market-price"))==null?void 0:we.value);if(!q||q<1){l("Prix invalide","error");return}const{error:K}=await $.from("cards").update({is_for_sale:!0,sale_price:q}).in("id",C);if(K){l(K.message,"error");return}const oe=C.map(_e=>({seller_id:c.profile.id,card_id:_e,price:q,status:"active"})),{error:te}=await $.from("market_listings").insert(oe);te&&console.warn("[Market] insert listings:",te.message),l(`${C.length} carte${C.length>1?"s":""} mise${C.length>1?"s":""} en vente à ${q.toLocaleString("fr")} cr. chacune !`,"success"),s(),p("collection")}),(U=document.getElementById("cancel-sell-btn"))==null||U.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),p("collection")})}const Ot={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Wt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Ji(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Xi(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Rn(e,t=44,n=58){var x;const r=e?Wt(e):null,c=e?Xi(e):null,l=Ji(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",s=rt[d]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,a=Math.round(n*.19),u=Math.round(n*.25),g=n-a-u;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${p};background:${s};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(x=e==null?void 0:e.clubs)!=null&&x.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ei(e,t){const{state:n,navigate:r,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(l==null?void 0:l.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(l==null?void 0:l.length)>0?l.map(d=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!d)return;const{data:s,error:p}=await $.from("decks").insert({owner_id:n.profile.id,name:d}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),Ti(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>Ti(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",d.dataset.name);if(!s||s===d.dataset.name)return;const{error:p}=await $.from("decks").update({name:s}).eq("id",d.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),ei(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:s}=await $.from("decks").delete().eq("id",d.dataset.delete);if(s){c(s.message,"error");return}c("Deck supprimé.","success"),ei(e,t)})})}async function Ti(e,t,n){const{state:r,toast:c}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("decks").select("*").eq("id",e).single(),{data:d}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),s=(d||[]).filter(x=>x.card_type==="player"&&x.player),p=(d||[]).filter(x=>x.card_type==="formation"),i=p.map(x=>x.formation).filter(Boolean),{data:a}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=l.formation||"4-4-2";i.length>0&&!i.includes(u)&&(u=i[0]);const g={deckId:e,name:l.name,formation:u,formationCardId:l.formation_card_id,slots:{},subs:[],playerCards:s,formationCards:p,availableFormations:i};(a||[]).forEach(x=>{x.is_starter?g.slots[x.position]=x.card_id:g.subs.includes(x.card_id)||g.subs.push(x.card_id)}),ut(t,g,n)}function ut(e,t,n){var p;const{navigate:r}=n;Ot[t.formation];const c=Li(t.formation),l=c.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Ot),s=t.subs.map(i=>t.playerCards.find(a=>a.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${l}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
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
        ${s.map(i=>{const a=i.player;return`<div style="position:relative;flex-shrink:0">
            ${Rn(a,44,58)}
            <button data-remove-sub="${i.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${l<11?"disabled":""}>
        ${l<11?`Placez encore ${11-l} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,On(e,t,c,n),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const a=Li(t.formation),u={};a.forEach(g=>{t.slots[g]&&(u[g]=t.slots[g])}),t.slots=u,ut(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Kn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(a=>a!==i.dataset.removeSub),ut(e,t,n)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{Un(t,e,n)})}function On(e,t,n,r){const c=e.querySelector("#deck-field");if(!c)return;const l=Mt[t.formation]||{},d=qi(t.formation)||[],s={};for(const E of n){const T=t.slots[E],k=T?t.playerCards.find(D=>D.id===T):null;s[E]=k?k.player:null}const p=300,i=300,a=48,u=64,g=13,x=16,M=38;function o(E){const T=l[E];return T?{x:T.x*p,y:T.y*i}:null}let b="";for(const[E,T]of d){const k=o(E),D=o(T);if(!k||!D)continue;const S=s[E]?{...s[E],club_id:s[E].club_id,country_code:s[E].country_code,rarity:s[E].rarity}:null,B=s[T]?{...s[T],club_id:s[T].club_id,country_code:s[T].country_code,rarity:s[T].rarity}:null,P=Qe(S,B);P==="#ff3333"||P==="#cc2222"?b+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(b+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,b+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const E of n){const T=o(E);if(!T)continue;const k=s[E],D=E.replace(/\d+/,""),S=rt[D]||"#555",B=(T.x-a/2).toFixed(1),P=(T.y-u/2).toFixed(1),Q={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[k==null?void 0:k.rarity]||"#aaa";if(k){const de=Wt(k),ie=Xi(k),j=Ji(k.country_code),Y=Number(D==="GK"?k.note_g:D==="DEF"?k.note_d:D==="MIL"?k.note_m:k.note_a)||0,ne=u-g-x;b+=`<defs><clipPath id="dcp-${E}"><rect x="${B}" y="${(T.y-u/2+g).toFixed(1)}" width="${a}" height="${ne}"/></clipPath></defs>`,b+=`<rect x="${B}" y="${P}" width="${a}" height="${u}" rx="5" fill="${S}"/>`,de&&(b+=`<image href="${de}" x="${B}" y="${(T.y-u/2+g).toFixed(1)}" width="${a}" height="${ne}" clip-path="url(#dcp-${E})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${B}" y="${P}" width="${a}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,b+=`<text x="${T.x.toFixed(1)}" y="${(T.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(k.surname_encoded||"").slice(0,9)}</text>`;const G=(T.y+u/2-x).toFixed(1);b+=`<rect x="${B}" y="${G}" width="${a}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,j&&(b+=`<image href="${j}" x="${(T.x-21).toFixed(1)}" y="${(T.y+u/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),b+=`<text x="${T.x.toFixed(1)}" y="${(T.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,ie&&(b+=`<image href="${ie}" x="${(T.x+a/2-14).toFixed(1)}" y="${(T.y+u/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),b+=`<rect x="${B}" y="${P}" width="${a}" height="${u}" rx="5" fill="none" stroke="${Q}" stroke-width="2"/>`}else b+=`<rect x="${B}" y="${P}" width="${a}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,b+=`<text x="${T.x.toFixed(1)}" y="${T.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,b+=`<text x="${T.x.toFixed(1)}" y="${(T.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${D}</text>`;b+=`<rect x="${B}" y="${P}" width="${a}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${E}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-M} ${-M} ${p+M*2} ${i+M*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${b}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>Hn(E.dataset.pos,t,e,r))})}function Hn(e,t,n,r){var g,x,M;const{openModal:c,closeModal:l}=r,d=e.replace(/\d+/,""),s=t.slots[e],p=s?t.playerCards.find(o=>o.id===s):null;(g=p==null?void 0:p.player)==null||g.id;const i=new Set;Object.entries(t.slots).forEach(([o,b])=>{var T;if(o===e||!b)return;const E=t.playerCards.find(k=>k.id===b);(T=E==null?void 0:E.player)!=null&&T.id&&i.add(E.player.id)}),t.subs.forEach(o=>{var E;const b=t.playerCards.find(T=>T.id===o);(E=b==null?void 0:b.player)!=null&&E.id&&i.add(b.player.id)});const a=new Set,u=t.playerCards.filter(o=>{const b=o.player;return!(b.job===d||b.job2===d)||i.has(b.id)||a.has(b.id)?!1:(a.add(b.id),!0)});u.sort((o,b)=>{const E=d==="GK"?o.player.note_g:d==="DEF"?o.player.note_d:d==="MIL"?o.player.note_m:o.player.note_a;return(d==="GK"?b.player.note_g:d==="DEF"?b.player.note_d:d==="MIL"?b.player.note_m:b.player.note_a)-E}),c(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(o=>{var D,S;const b=o.player,E=d==="GK"?b.note_g:d==="DEF"?b.note_d:d==="MIL"?b.note_m:b.note_a,T=Wt(b),k={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[b.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[d]}">
            ${T?`<img src="${T}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${rt[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${b.firstname} ${b.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${b.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${b.country_code}">
              ${(D=b.clubs)!=null&&D.logo_url?`<img src="${b.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((S=b.clubs)==null?void 0:S.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${b.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${rt[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${k};flex-shrink:0">
            ${E}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",l),(M=document.getElementById("remove-player"))==null||M.addEventListener("click",()=>{delete t.slots[e],l(),ut(n,t,r)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,l(),ut(n,t,r)})})}function Un(e,t,n){var p;const{openModal:r,closeModal:c}=n,l=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var u;const a=e.playerCards.find(g=>g.id===i);(u=a==null?void 0:a.player)!=null&&u.id&&l.add(a.player.id)}),e.subs.forEach(i=>{var u;const a=e.playerCards.find(g=>g.id===i);(u=a==null?void 0:a.player)!=null&&u.id&&l.add(a.player.id)});const d=new Set,s=e.playerCards.filter(i=>{var a,u,g;return l.has((a=i.player)==null?void 0:a.id)||d.has((u=i.player)==null?void 0:u.id)?!1:(d.add((g=i.player)==null?void 0:g.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(i=>{var x;const a=i.player,u=Wt(a),g=a.job==="GK"?a.note_g:a.job==="DEF"?a.note_d:a.job==="MIL"?a.note_m:a.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[a.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${a.firstname} ${a.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.job} · ${a.country_code} · ${((x=a.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${rt[a.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),ut(t,e,n)})})}async function Kn(e,t){const{state:n,toast:r,navigate:c}=t,l=e.formationCards.find(p=>p.formation===e.formation),d=(l==null?void 0:l.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([p,i],a)=>{s.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:a})}),e.subs.forEach((p,i)=>{s.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),s.length>0){const{error:p}=await $.from("deck_cards").insert(s);if(p){r(p.message,"error");return}}r("Deck enregistré ✅","success"),c("decks")}function Li(e){const t=Ot[e]||Ot["4-4-2"],n=["GK1"];for(let r=1;r<=t.DEF;r++)n.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)n.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)n.push(`ATT${r}`);return n}async function Zi(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(r=>r.booster_id===n.id)}))}function Vn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,c)=>r+Number(c.percentage),0);let n=Math.random()*t;for(const r of e)if(n-=Number(r.percentage),n<=0)return r;return e[e.length-1]}const Qi=()=>Object.keys(Mt),Yn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Wn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const Ii={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Jn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Xn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function zi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Zn(e){var a,u;const t=e.player;if(!t)return"";const n=t.job||"ATT",r=Ii[n],c=Jn[t.rarity]||"#ccc",l=zi(t,n),d=t.job2?zi(t,t.job2):null,s=t.job2?Ii[t.job2]:null,p=Wn(t),i=Xn[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${r}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${r}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${s}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(a=t.clubs)!=null&&a.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function en(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const n=((c=Object.entries(t).sort((l,d)=>d[1]-l[1])[0])==null?void 0:c[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Qn(e,{state:t,navigate:n,toast:r}){var d;const c=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await Zi()).map(en)}catch(s){console.warn("Erreur chargement boosters DB, fallback hardcodé",s)}l.length||(l=Yn.map(s=>({...s,rates:[],isPub:s.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${l.map(s=>{const p=s.cost===0||c>=s.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${s.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${s.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${s.img}" alt="${s.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${s.name}</div>
            <div class="desc">${s.sub}</div>
            <div class="cost">${s.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const p=l.find(i=>i.id===s.dataset.booster);if(p){s.style.opacity="0.5",s.style.pointerEvents="none";try{await eo(p,{state:t,toast:r,navigate:n,container:e})}catch(i){r(i.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",p=>{p.stopPropagation();const i=l.find(a=>a.id===s.dataset.boosterId);oo(i)})})}async function eo(e,{state:t,toast:n,navigate:r,container:c}){var a;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await so()}catch(u){n(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((l||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),s=new Set((l||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let p=[];if((a=e.rates)!=null&&a.length)p=await ii(t.profile,e);else{const u=e.type||"player";u==="player"?p=await tn(t.profile,e.cardCount,e.cost):u==="game_changer"?p=await nn(t.profile,e.cardCount,e.cost):u==="formation"?p=await on(t.profile,e.cost):p=await ii(t.profile,e)}p.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=d.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=s.has(u.formation))});const{data:i}=await $.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),rn(p,e,r)}function to(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function io(e,t){let n;switch(t){case"legende":n=e.filter(r=>r.rarity==="legende"),n.length||(n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),n.length||(n=e.filter(r=>tt(r)>=6));break;case"special":n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),n.length||(n=e.filter(r=>tt(r)>=6));break;case"normal_high":n=e.filter(r=>r.rarity==="normal"&&tt(r)>=6),n.length||(n=e.filter(r=>tt(r)>=6));break;default:n=e.filter(r=>r.rarity==="normal"&&tt(r)>=1&&tt(r)<=5),n.length||(n=e.filter(r=>r.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ii(e,t){if(t.cost>0){const{error:s}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(s)throw s}const{data:n}=await $.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),r=new Set((n||[]).filter(s=>s.card_type==="player").map(s=>s.player_id)),c=new Set((n||[]).filter(s=>s.card_type==="formation").map(s=>s.formation)),l=new Set,d=[];for(let s=0;s<(t.cardCount||5);s++){const p=Vn(t.rates);if(p){if(p.card_type==="player"){const i=T=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[T]||T,a=p.rarity?i(p.rarity):null;let u=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(u=u.eq("rarity",a));const{data:g}=await u;let x=g||[];if((p.note_min||p.note_max)&&(x=x.filter(T=>{const k=Math.max(Number(T.note_g)||0,Number(T.note_d)||0,Number(T.note_m)||0,Number(T.note_a)||0);return(!p.note_min||k>=p.note_min)&&(!p.note_max||k<=p.note_max)})),x.length||(p.note_min||p.note_max?(x=g||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):x=g||[]),!x.length)continue;let M=x.filter(T=>!l.has(T.id));M.length||(M=x);const o=M[Math.floor(Math.random()*M.length)];l.add(o.id);const b=r.has(o.id),{data:E}=await $.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();E&&(d.push({...E,player:o,isDuplicate:b}),$.rpc("record_transfer",{p_card_id:E.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:i}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],g=a[Math.floor(Math.random()*a.length)].name,{data:x}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:g}).select().single();x&&d.push(x)}else if(p.card_type==="formation"){const i=Qi(),a=i[Math.floor(Math.random()*i.length)],u=c.has(a),{data:g}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();g!=null&&g[0]&&d.push({...g[0],isDuplicate:u})}}}return d}async function tn(e,t,n){if(n>0){const{error:i}=await $.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:r}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=r.filter(i=>i.job==="GK"),l=r.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&c.length>0,s=[];for(let i=0;i<t;i++){const a=i===0&&d?c:i===0?l:r,u=to(),g=io(a,u);g&&s.push(g)}d&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await $.from("cards").insert(s.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,a)=>{$.rpc("record_transfer",{p_card_id:i.id,p_player_id:s[a].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((i,a)=>({...p[a],player:i}))}async function nn(e,t,n){const{error:r}=await $.from("users").update({credits:e.credits-n}).eq("id",e.id);if(r)throw r;const{data:c}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(ti).map(a=>({name:a,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const a=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:a.name,gc_definition_id:a.id||null}}),{data:s,error:p}=await $.from("cards").insert(d).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(s||[]).map(a=>{const u=c==null?void 0:c.find(g=>g.name===a.gc_type||g.id===a.gc_definition_id);return{...a,_gcDef:u||null}})}async function on(e,t){const{error:n}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:r}=await $.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((r||[]).map(a=>a.formation)),l=Qi(),d=l[Math.floor(Math.random()*l.length)],s=c.has(d),{data:p,error:i}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(p||[]).map(a=>({...a,isDuplicate:s}))}function rn(e,t,n,r=null){var Y,ne;if(!e||e.length===0){const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",G.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(G),(Y=G.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>G.remove());return}e=[...e].sort((G,Z)=>{const ae=G.player?tt(G.player):-1;return(Z.player?tt(Z.player):-1)-ae});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const d=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let p=!1;const i=G=>G.touches&&G.touches[0]?G.touches[0].clientX:G.clientX;function a(G){l||(p=!0,s.style.opacity="1",u(G))}function u(G){if(!p||l)return;const Z=d.getBoundingClientRect(),ae=i(G)-Z.left,pe=Math.max(0,Math.min(1,ae/Z.width));s.style.width=pe*Z.width+"px",pe>=.82&&x()}function g(){l||(p=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{l||(s.style.transition="")},220))}function x(){var Z;if(l)return;l=!0,p=!1,s.style.width="100%",s.style.opacity="1",(Z=document.getElementById("cut-flash"))==null||Z.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const G=document.getElementById("cut-hint");G&&(G.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",E(0)},620)}d.addEventListener("pointerdown",a),window.addEventListener("pointermove",u),window.addEventListener("pointerup",g),d.addEventListener("touchstart",a,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",g);let M=0,o=!1;const b=new Set;function E(G){M=G,document.getElementById("reveal-phase").style.display="flex",T(),k(G,0),Q()}function T(){const G=document.getElementById("card-dots");G&&(G.innerHTML=e.map((Z,ae)=>`<div class="card-dot" data-i="${ae}" style="width:8px;height:8px;border-radius:50%;background:${ae===M?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),G.querySelectorAll(".card-dot").forEach(Z=>Z.addEventListener("click",()=>S(parseInt(Z.dataset.i)))))}function k(G,Z){var q;const ae=e[G],pe=document.getElementById("card-counter"),he=document.getElementById("card-track");pe&&(pe.textContent=`Carte ${G+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=G===e.length-1?"flex":"none");const ge=ae.card_type==="player"&&((q=ae.player)==null?void 0:q.rarity)==="legende",O=!b.has(G);b.add(G);let U=0;if(ae.card_type==="player"&&ae.player){const K=ae.player,oe=K.job||"ATT";U=Number(oe==="GK"?K.note_g:oe==="DEF"?K.note_d:oe==="MIL"?K.note_m:K.note_a)||0}const C=K=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ge?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${no(ae)}</div>
          ${ae.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");Z!==0?(oe.style.transition="none",oe.style.transform=`translateX(${Z>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),K||ge?ie():j(),T()};O&&U>6&&ae.card_type==="player"&&ae.player?D(ae,()=>C(!0)):C(!1)}function D(G,Z){var U;o=!0;const ae=G.player,pe=`https://flagsapi.com/${ae.country_code}/flat/64.png`,he=(U=ae.clubs)==null?void 0:U.logo_url,xe=document.getElementById("walkout-overlay"),ge=document.getElementById("walkout-stage");if(!xe||!ge){o=!1,Z();return}xe.style.display="flex";const O=()=>{const C=ge.firstElementChild;C&&(C.classList.remove("wo-in"),C.classList.add("wo-out"))};ge.innerHTML=`<img class="wo-in" src="${pe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(O,2e3),setTimeout(()=>{var C;ge.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((C=ae.clubs)==null?void 0:C.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(O,4450),setTimeout(()=>{xe.style.display="none",ge.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Z()},4900)}function S(G){if(o||G<0||G>=e.length||G===M)return;const Z=G>M?1:-1;M=G,k(G,Z)}function B(){S(M+1)}function P(){S(M-1)}function Q(){const G=document.getElementById("card-viewport");if(!G||G._swipeBound)return;G._swipeBound=!0;let Z=0,ae=0,pe=0,he=!1;const xe=q=>q.touches?q.touches[0].clientX:q.clientX,ge=q=>q.touches?q.touches[0].clientY:q.clientY,O=q=>{he=!0,Z=xe(q),ae=ge(q),pe=0},U=q=>{if(!he)return;pe=xe(q)-Z;const K=ge(q)-ae;if(Math.abs(pe)<Math.abs(K))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${pe*.6}px) rotate(${pe*.02}deg)`)},C=()=>{if(!he)return;he=!1;const q=document.getElementById("current-card-wrap"),K=55;pe<=-K&&M<e.length-1?B():pe>=K&&M>0?P():q&&(q.style.transition="transform .2s ease",q.style.transform="translateX(0)")};G.addEventListener("pointerdown",O),G.addEventListener("pointermove",U),G.addEventListener("pointerup",C),G.addEventListener("pointercancel",C),G.addEventListener("touchstart",O,{passive:!0}),G.addEventListener("touchmove",U,{passive:!0}),G.addEventListener("touchend",C),G.addEventListener("click",q=>{if(Math.abs(pe)>8)return;const K=G.getBoundingClientRect();q.clientX-K.left>K.width/2?B():P()})}let de=null;function ie(){const G=document.getElementById("fireworks-canvas");if(!G)return;G.width=window.innerWidth,G.height=window.innerHeight;const Z=G.getContext("2d"),ae=[];function pe(){const xe=Math.random()*G.width,ge=Math.random()*G.height*.6,O=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],U=O[Math.floor(Math.random()*O.length)];for(let C=0;C<60;C++){const q=Math.PI*2/60*C,K=2+Math.random()*5;ae.push({x:xe,y:ge,vx:Math.cos(q)*K,vy:Math.sin(q)*K,alpha:1,color:U,size:2+Math.random()*3})}}pe(),de=setInterval(pe,600);function he(){if(document.getElementById("fireworks-canvas")){Z.clearRect(0,0,G.width,G.height);for(let xe=ae.length-1;xe>=0;xe--){const ge=ae[xe];if(ge.x+=ge.vx,ge.y+=ge.vy+.08,ge.vy*=.98,ge.alpha-=.018,ge.alpha<=0){ae.splice(xe,1);continue}Z.globalAlpha=ge.alpha,Z.fillStyle=ge.color,Z.beginPath(),Z.arc(ge.x,ge.y,ge.size,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,(de!==null||ae.length>0)&&requestAnimationFrame(he)}}he()}function j(){de!==null&&(clearInterval(de),de=null);const G=document.getElementById("fireworks-canvas");G&&G.getContext("2d").clearRect(0,0,G.width,G.height)}if(r){const G=document.getElementById("reveal-btns");G&&(G.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ne=document.getElementById("reveal-next"))==null||ne.addEventListener("click",()=>{j(),c.remove(),r()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{j(),c.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{j(),c.remove(),n("boosters")})}function no(e){var t,n;if(e.card_type==="player"&&e.player)return Zn(e);if(e.card_type==="game_changer"){const r=e._gcDef,c=(r==null?void 0:r.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[r==null?void 0:r.color]||l.purple,p=d[r==null?void 0:r.color]||d.purple,i=(r==null?void 0:r.name)||e.gc_type||"Game Changer",a=(r==null?void 0:r.effect)||((t=ti[e.gc_type])==null?void 0:t.desc)||"",u=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,g=((n=ti[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${a.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function oo(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(d=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${l[d.card_type]||d.card_type}</span>
            ${d.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[d.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${d.rarity}</span>`:""}
            ${d.note_min||d.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${d.note_min||""}–${d.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(d.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(r),r.addEventListener("click",d=>{d.target===r&&r.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>r.remove());return}ro()}function ro(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const ao="simulation",an="VOTRE_ZONE_ID";function so(){switch(ao){case"propellerads":return lo();case"adsense":return co();default:return pi()}}function pi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{n--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=n),l&&(l.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(r),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function lo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(pi());window.propeller.push({zone_id:an,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function co(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(pi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:an,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function po(e,{state:t,navigate:n,toast:r,refreshProfile:c}){var g,x;const{data:l}=await $.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let d=Array.isArray((g=t.profile)==null?void 0:g.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await $.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let s=null;try{const o=(await Zi()).find(b=>(b.name||"").toLowerCase().includes("new player"));o&&(s=en(o))}catch(M){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',M)}const p=d.length;let i=0;e.innerHTML=`
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
  </div>`;const a=async()=>{await $.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function u(){var T;if(i>=p||!d.length){await $.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),r("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const M=d[0],{data:o}=await $.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let b=[];try{if(M.type==="formation")b=await on(t.profile,0);else if(M.type==="game_changer")b=await nn(t.profile,M.count||3,0);else if(s&&((T=s.rates)!=null&&T.length)){const k={...s,cost:0,cardCount:M.count||s.cardCount||5};b=await ii(t.profile,k),M.guaranteeGK&&!t.profile.first_booster_opened&&(b.some(S=>S.player&&S.player.job==="GK")||await uo(t.profile,b),await $.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else b=await tn(t.profile,M.count||5,0)}catch(k){r(k.message||"Erreur ouverture booster","error");return}d.shift(),i++,await a();const E=M.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:M.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${p})`,img:(s==null?void 0:s.img)||"/manager-wars/icons/booster-players.png"};rn(b,E,n,()=>{u()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>u())}async function uo(e,t){try{const{data:n}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const r=n[Math.floor(Math.random()*n.length)],c=t.findIndex(d=>d.player);if(c===-1)return;const l=t[c];await $.from("cards").update({player_id:r.id}).eq("id",l.id),t[c]={...l,player_id:r.id,player:r}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}const ft={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},gt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e,t,n,r,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function ni(e,t){var r,c;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((r=n.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((c=n.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ui(){const e=Math.random()*100;return e<10?3:e<30?2:1}function mt(e,t){const n=ft[t]||ft["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const s=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,a)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(a.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),p=ot(s.length);s.forEach((i,a)=>{i._col=p[a]}),r[d]=s}return r}const l=[...e];for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let i=0;i<n[d];i++){let a=l.findIndex(u=>u.job===d);if(a===-1&&(a=l.findIndex(u=>u.job2===d)),a===-1&&(a=0),l[a]){const u={...l[a],_line:d};s.push(u),l.splice(a,1)}}const p=ot(s.length);s.forEach((i,a)=>{i._col=p[a]}),r[d]=s}return r}function Je(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function fi(e,t,n){const c=new Set,l=t.filter(a=>{const u=a.gc_type||a.id;return c.has(u)?!1:(c.add(u),!0)});let d=[];function s(a,u){const g=a._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},M={purple:"#9b59b6",light_blue:"#00bcd4"},o=x[g==null?void 0:g.color]||x.purple,b=M[g==null?void 0:g.color]||M.purple;return`<div class="gc-select-card" data-id="${a.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":b};background:${o};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((g==null?void 0:g.name)||a.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(g==null?void 0:g.name)||a.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g!=null&&g.image_url?`<img src="/manager-wars/icons/${g.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((g==null?void 0:g.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=a=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(a)};function i(){var u,g,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const a=d.length>0;e.innerHTML=`
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
        ${l.map(M=>{const o=d.find(b=>b.gc_type===M.gc_type);return s(M,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(M=>{M.addEventListener("click",()=>{const o=M.dataset.id,b=l.find(T=>T.id===o);if(!b)return;const E=d.findIndex(T=>T.gc_type===b.gc_type);E>-1?d.splice(E,1):d.length<3&&d.push(b),i()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{a&&p(d)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>p([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}function fo(e){var r;const t=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function go(e,t,n){const{state:r,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){at(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const d=l.map(a=>a.id),{data:s}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let p=0;function i(){var T,k,D,S,B;const a=l[p],u=(s||[]).filter(P=>P.deck_id===a.id),g=u.filter(P=>{var Q;return P.is_starter&&((Q=P.card)==null?void 0:Q.player)}).map(P=>ni(P.card,P.position)),x=u.find(P=>{var Q;return((Q=P.card)==null?void 0:Q.card_type)==="formation"}),M=a.formation||((T=x==null?void 0:x.card)==null?void 0:T.formation)||"4-4-2",o=g.length>=11?mt(g,M):null,b=g.length>=11;Je(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${fo(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${a.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${M} · ${g.length}/11 ${a.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===l.length-1?"0.1":"0.3"});color:${p===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(o,M,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((P,Q)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Q===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${b?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${b?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${b?"pointer":"default"}">
          ${b?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Q=e.querySelector(".deck-preview-wrap svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(k=document.getElementById("prev-deck"))==null||k.addEventListener("click",()=>{p>0&&(p--,i())}),(D=document.getElementById("next-deck"))==null||D.addEventListener("click",()=>{p<l.length-1&&(p++,i())}),(S=document.getElementById("validate-deck"))==null||S.addEventListener("click",()=>{if(!b)return;const P=t.state.params||{};t.navigate("match",{...P,matchMode:P.matchMode||n,deckId:a.id})}),(B=document.getElementById("cancel-deck-select"))==null||B.addEventListener("click",()=>{He(e),c("home")});const E=document.getElementById("deck-swipe-zone");if(E){let P=0,Q=0;E.addEventListener("touchstart",de=>{P=de.touches[0].clientX,Q=de.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",de=>{const ie=de.changedTouches[0].clientX-P,j=de.changedTouches[0].clientY-Q;Math.abs(ie)<40||Math.abs(ie)<Math.abs(j)||(ie<0&&p<l.length-1?(p++,i()):ie>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),c=sn(e),l=e._line||e.job||"MIL",d=gt[l]||"#555",s={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(ve(e,l))||0)+(e.boost||0),i=dn(e==null?void 0:e.country_code),a=Math.round(n*.19),u=Math.round(n*.25),g=n-Math.round(n*.19)-Math.round(n*.25),x=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${s};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ht(e==null?void 0:e.country_code)?`<img src="${Ht(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${i}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((l,d)=>{if(c+=Ve(l,40,52),d<r.length-1){const s=Qe(l,r[d+1]);c+=`<div style="width:7px;height:3px;background:${s==="#ff3333"||s==="#cc2222"?"rgba(255,255,255,0.12)":s};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),c+="</div>",c}function Ht(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function dn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,r,c=310,l=310,d=[]){var k;const s=Mt[t]||{},p=qi(t)||si[t]||[],i={},a=["ATT","MIL","DEF","GK"];for(const D of a)(e[D]||[]).forEach((B,P)=>{i[`${D}${P+1}`]=B});function u(D){const S=s[D];return S?{x:S.x*c,y:S.y*l}:null}let g="";for(const[D,S]of p){const B=u(D),P=u(S);if(!B||!P)continue;const Q=i[D],de=i[S],ie=Qe(Q,de);ie==="#00ff88"||ie==="#FFD700"?(g+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${ie}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${ie}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${ie}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,M=64,o=13,b=16,E={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[D,S]of Object.entries(i)){const B=u(D);if(!B||!S)continue;const P=D.replace(/[0-9]/g,""),Q=gt[P]||"#555",de=d.includes(S.cardId),ie=n==="attack"&&(["MIL","ATT"].includes(P)||de)&&!S.used||n==="defense"&&["GK","DEF","MIL"].includes(P)&&!S.used,j=r.includes(S.cardId);let Y;n==="attack"?Y=de?Math.max(1,Number(S.note_a)||0):P==="MIL"?Number(S.note_m)||0:Number(S.note_a)||0:n==="defense"?Y=P==="GK"?Number(S.note_g)||0:P==="MIL"?Number(S.note_m)||0:Number(S.note_d)||0:Y=Number(P==="GK"?S.note_g:P==="DEF"?S.note_d:P==="MIL"?S.note_m:S.note_a)||0,Y=Y+(S.boost||0);const ne=(B.x-x/2).toFixed(1),G=(B.y-M/2).toFixed(1),Z=E[S==null?void 0:S.rarity]||E.normal;if(S.used){const U=typeof import.meta<"u"&&"/manager-wars/"||"/",q=`${typeof window<"u"&&((k=window.location)==null?void 0:k.origin)||""}${U}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");g+=`<rect x="${ne}" y="${G}" width="${x}" height="${M}" rx="5" fill="#161616"/>`,g+=`<image href="${q}" xlink:href="${q}" x="${ne}" y="${G}" width="${x}" height="${M}" preserveAspectRatio="xMidYMid slice"/>`,g+=`<rect x="${ne}" y="${G}" width="${x}" height="${M}" rx="5" fill="none" stroke="${Z}" stroke-width="2" opacity="0.7"/>`,g+=`<rect x="${ne}" y="${G}" width="${x}" height="${M}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${S.cardId}" data-role="${P}" style="cursor:pointer"/>`;continue}const ae=j?.45:1,pe=j?"#FFD700":Z,he=j?3:(S==null?void 0:S.rarity)==="legende"||(S==null?void 0:S.rarity)==="légende"||(S==null?void 0:S.rarity)==="pepite"||(S==null?void 0:S.rarity)==="pépite"?2.5:2,xe=M-o-b;g+=`<defs><clipPath id="cp-${D}"><rect x="${ne}" y="${(B.y-M/2+o).toFixed(1)}" width="${x}" height="${xe}"/></clipPath></defs>`,g+=`<rect x="${ne}" y="${G}" width="${x}" height="${M}" rx="5" fill="${Q}" opacity="${ae}"/>`;const ge=ze(S);ge&&(g+=`<image href="${ge}" xlink:href="${ge}" x="${ne}" y="${(B.y-M/2+o).toFixed(1)}" width="${x}" height="${xe}" clip-path="url(#cp-${D})" preserveAspectRatio="xMidYMin slice"/>`),g+=`<rect x="${ne}" y="${G}" width="${x}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,g+=`<text x="${B.x.toFixed(1)}" y="${(B.y-M/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(S.name||"").slice(0,9)}</text>`;const O=(B.y+M/2-b).toFixed(1);g+=`<rect x="${ne}" y="${O}" width="${x}" height="${b}" fill="rgba(255,255,255,0.92)"/>`;{const U=Ht(S.country_code);U?g+=`<image href="${U}" xlink:href="${U}" x="${(B.x-20).toFixed(1)}" y="${(B.y+M/2-b+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:g+=`<text x="${(B.x-13).toFixed(1)}" y="${(B.y+M/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${dn(S.country_code)}</text>`,g+=`<text x="${B.x.toFixed(1)}" y="${(B.y+M/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const C=sn(S);C?g+=`<image href="${C}" xlink:href="${C}" x="${(B.x+x/2-14).toFixed(1)}" y="${(B.y+M/2-b+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:S.clubName&&(g+=`<text x="${(B.x+14).toFixed(1)}" y="${(B.y+M/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(S.clubName||"").slice(0,3).toUpperCase()}</text>`),S.boost&&(g+=`<rect x="${(B.x+x/2-12).toFixed(1)}" y="${(B.y-M/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,g+=`<text x="${(B.x+x/2-5).toFixed(1)}" y="${(B.y-M/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${S.boost}</text>`)}g+=`<rect x="${ne}" y="${G}" width="${x}" height="${M}" rx="5" fill="${j?"rgba(255,255,255,0.12)":"none"}" stroke="${pe}" stroke-width="${he}" opacity="${ae}"/>`,ie&&(g+=`<rect x="${ne}" y="${G}" width="${x}" height="${M}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${j?"selected":""}" data-card-id="${S.cardId}" data-role="${P}" style="cursor:pointer"/>`)}const T=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-T} ${-T} ${c+T*2} ${l+T*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${g}
  </svg>`}function dt(e,t,n,r,c=300,l=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${st(e,t,n,r,c,l,d)}
  </div>`}function nt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function gi(e,t,n,r){var S;const{state:c,navigate:l,toast:d}=t;Je(e);const s=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return go(e,t,n);const p=s.deckId;let i,a,u,g;try{const B=await Promise.all([$.from("decks").select("formation,name").eq("id",p).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=B[0].data,u=B[0].error,a=B[1].data,g=B[1].error}catch(B){console.error("[Match] Exception chargement deck:",B),at(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(u||g){console.error("[Match] Erreur Supabase:",u||g),at(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const x=(a||[]).filter(B=>{var P;return B.is_starter&&((P=B.card)==null?void 0:P.player)}).map(B=>ni(B.card,B.position)),M=(a||[]).filter(B=>{var P;return!B.is_starter&&((P=B.card)==null?void 0:P.player)}).map(B=>ni(B.card,B.position));if(x.length<11){at(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>l("decks"));return}const o=(a||[]).find(B=>{var P;return((P=B.card)==null?void 0:P.card_type)==="formation"}),b=(i==null?void 0:i.formation)||((S=o==null?void 0:o.card)==null?void 0:S.formation)||"4-4-2",{data:E,error:T}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:k}=await $.from("gc_definitions").select("*").eq("is_active",!0),D=(E||[]).map(B=>({...B,_gcDef:(k==null?void 0:k.find(P=>P.name===B.gc_type||P.id===B.gc_definition_id))||null}));r({deckId:p,formation:b,starters:x,subsRaw:M,gcCardsEnriched:D,gcDefs:k||[]})}async function mo(e,t){const{state:n}=t,c=(n.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),d=c;await gi(e,t,c,async({deckId:s,formation:p,starters:i,subsRaw:a,gcCardsEnriched:u,gcDefs:g})=>{try{const x=mt(i,p),M=await xo(p,l),o=async b=>{try{const{data:E,error:T}=await $.from("matches").insert({home_id:n.profile.id,away_id:null,mode:d,home_deck_id:s,status:"in_progress"}).select().single();if(T){console.error("[MatchIA] Erreur création match:",T),at(e,"⚠️","Impossible de créer le match ("+T.message+").","Retour",()=>t.navigate("home"));return}const k={gcDefs:g||[],matchId:E==null?void 0:E.id,mode:d,difficulty:l,formation:p,homeTeam:x,aiTeam:M,homeSubs:a,subsUsed:0,maxSubs:Math.min(a.length,3),homeScore:0,aiScore:0,gcCards:b,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};ho(e,k,t)}catch(E){console.error("[MatchIA] Exception launchMatch:",E),at(e,"⚠️","Erreur au lancement du match : "+E.message,"Retour",()=>t.navigate("home"))}};if(!u.length){o([]);return}fi(e,u,o)}catch(x){console.error("[MatchIA] Exception setup:",x),at(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function xo(e,t){var d,s;const{data:n}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return yo(e);const r=ft[e]||ft["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...n];for(const p of["GK","DEF","MIL","ATT"]){const i=l.filter(M=>M.job===p),a=l.filter(M=>M.job!==p),u=[...i,...a],g=[];for(let M=0;M<r[p];M++){const o=u[M]||l[M];o&&g.push({cardId:"ai-"+o.id+"-"+M,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((d=o.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((s=o.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:p})}const x=ot(g.length);g.forEach((M,o)=>{M._col=x[o]}),c[p]=g}return c}function yo(e){const t=ft[e]||ft["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const d=[];for(let p=0;p<t[l];p++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:r[c%r.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?i:2,note_d:l==="DEF"?i:2,note_m:l==="MIL"?i:2,note_a:l==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const s=ot(d.length);d.forEach((p,i)=>{p._col=s[i]}),n[l]=d}return n}function ho(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>bo(e,t,n),5e3)}function bo(e,t,n){const r=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(o){return o.reduce((b,E)=>b+ve(E,"MIL"),0)}function d(o){let b=0;for(let E=0;E<o.length-1;E++){const T=Qe(o[E],o[E+1]);T==="#00ff88"?b+=2:T==="#FFD700"&&(b+=1)}return b}const s=l(r)+d(r),p=l(c)+d(c),i=s>=p;function a(o,b,E,T){return`<div id="duel-row-${T}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${b}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((k,D)=>{const S=D<o.length-1?Qe(k,o[D+1]):null,B=!S||S==="#ff3333"||S==="#cc2222",P=S==="#00ff88"?"+2":S==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${T}" data-idx="${D}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...k,note:ve(k,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${D<o.length-1?`<div class="duel-link duel-link-${T}" data-idx="${D}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${B?"rgba(255,255,255,0.12)":S};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${B?"none":`0 0 8px ${S}`}">
            ${P?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${S}">${P}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${T}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${l(o)} + ${d(o)} liens = <b style="color:#fff">${l(o)+d(o)}</b>
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

    ${a(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const o=(b,E)=>e.querySelectorAll(b).forEach((T,k)=>{setTimeout(()=>{T.style.opacity="1",T.style.transform="translateY(0) scale(1)"},E+k*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((b,E)=>{setTimeout(()=>{b.style.opacity="1"},E*70)}),900),setTimeout(()=>{const b=e.querySelector("#vs-label");b&&(b.style.opacity="1",b.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(E=>E.style.opacity="1")},1250),setTimeout(()=>{g("score-home",s,800),g("score-ai",p,800)},1500)};function g(o,b,E){const T=document.getElementById(o);if(!T)return;const k=performance.now(),D=S=>{const B=Math.min(1,(S-k)/E);T.textContent=Math.round(b*(1-Math.pow(1-B,3))),B<1?requestAnimationFrame(D):T.textContent=b};requestAnimationFrame(D)}requestAnimationFrame(u),t.attacker=i?"home":"ai";const x=i?ui():null;i&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(o=>({name:o.name,note:ve(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:c.map(o=>({name:o.name,note:ve(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:s,aiTotal:p,text:`Duel milieu : ${t.clubName} ${s} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const M=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Se(e,t,n),t.attacker==="ai"&&setTimeout(()=>oi(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),b=document.getElementById("score-ai"),E=document.getElementById(i?"duel-row-home":"duel-row-ai"),T=document.getElementById(i?"duel-row-ai":"duel-row-home"),k=i?o:b,D=i?b:o;k&&(k.style.fontSize="80px",k.style.color=i?"#FFD700":"#ff6b6b",k.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),D&&(D.style.opacity="0.25"),setTimeout(()=>{E&&(E.style.transformOrigin="center",E.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",E.style.zIndex="5"),setTimeout(()=>{var B;const S=document.getElementById("duel-shock");if(S){const P=(B=T||E)==null?void 0:B.getBoundingClientRect(),Q=e.querySelector(".match-screen").getBoundingClientRect();P&&(S.style.top=P.top-Q.top+P.height/2+"px"),S.style.animation="shockwave .5s ease-out forwards"}T&&(T.style.transformOrigin="center",T.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var B;const S=document.getElementById("duel-finale");S&&(S.innerHTML=`
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
          </button>`,S.style.transition="opacity .45s ease",S.style.opacity="1",S.style.pointerEvents="auto",(B=document.getElementById("start-match-btn"))==null||B.addEventListener("click",M))},600)},700)},2800)}function vo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Se(e,t,n){var k,D,S,B,P,Q,de,ie;const r=t.selected.map(j=>j.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter(j=>!c.includes(j.cardId)),s=Object.values(t.homeTeam).flat().filter(j=>j.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(j=>(t.aiTeam[j]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(j=>!j.used),a=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(j=>!j.used).map(j=>j.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",g=t.phase==="attack",x=t.phase==="defense",M=t.phase==="finished",o=t.gcCards.filter(j=>!t.usedGc.includes(j.id)),b=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((Y.players||[]).map(ne=>({...ne,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((Y.players||[]).map(ne=>({...ne,used:!1})),"#00ff88",Y.total)}
          </div>`}const j=t.log[t.log.length-1];return j?'<div style="padding:2px 4px">'+vo(j)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const j=window.innerWidth>=700,Y=(O,U,C)=>{var De,Re;const q=(t.gcDefs||[]).find(A=>A.name===O.gc_type),K={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[q==null?void 0:q.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[q==null?void 0:q.color]||"#b06ce0",te=(q==null?void 0:q.name)||O.gc_type,we=(q==null?void 0:q.effect)||((De=Ne[O.gc_type])==null?void 0:De.desc)||"",_e=q!=null&&q.image_url?`/manager-wars/icons/${q.image_url}`:null,ke=((Re=Ne[O.gc_type])==null?void 0:Re.icon)||"⚡",Me=Math.round(C*.22),Ee=Math.round(C*.22),Te=C-Me-Ee,$e=te.length>12?7:9;return`<div class="gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
          style="box-sizing:border-box;width:${U}px;height:${C}px;border-radius:10px;border:2px solid ${oe};background:${K};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Me}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${$e}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${U-6}px">${te}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Te}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${U-10}px;max-height:${Te-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Te*.55)}px">${ke}</span>`}
          </div>
          <div style="height:${Ee}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${we.slice(0,38)}</span>
          </div>
        </div>`},ne=(O,U)=>{var C;return`<div id="boost-card"
          style="box-sizing:border-box;width:${O}px;height:${U}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(U*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(U*.2)}px">⚡</div>
            <div style="font-size:${Math.round(U*.09)}px;color:#000;font-weight:900">+${(C=t.boostCard)==null?void 0:C.value}</div>
          </div>`},G=(O,U)=>U?ne(130,175):Y(O,130,175),Z=(O,U)=>U?ne(68,95):Y(O,68,95),ae=j?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pe=M?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:g?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=g||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${j?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map(O=>`<div class="sub-btn-col" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(O,76,100)}</div>`).join("")}
      </div>`,ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${dt(t.homeTeam,t.formation,t.phase,r,300,300,a)}
        </div>
      </div>`;return j?`
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
            ${o.map(O=>G(O,!1)).join("")}
            ${b?G(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(t.homeTeam,t.formation,t.phase,r,300,300,a)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${o.map(O=>Z(O,!1)).join("")}
            ${b?Z(null,!0):""}
            <div id="sub-btn-main" style="cursor:${s?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${s?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${s?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${s?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${l.length}</div>
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(j=>{var Y,ne,G;if(j.type==="duel"){const Z=j.isGoal,ae=j.homeScored?"#FFD700":Z?"#ff6b6b":"rgba(255,255,255,0.3)",pe=j.homeScored?"⚽ BUT !":Z?"⚽ BUT IA !":(Y=j.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Z?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
                <div style="font-size:9px;color:${ae};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${pe}</div>
                ${(ne=j.homePlayers)!=null&&ne.length?`<div style="margin-bottom:3px">${it(j.homePlayers,"rgba(255,255,255,0.7)",j.homeTotal)}</div>`:""}
                ${(G=j.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${it(j.aiPlayers,"#ff6b6b",j.aiTotal)}</div>`:""}
              </div>`}return j.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${j.outPlayer?Ve({...j.outPlayer,used:!0,_line:j.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${j.inPlayer?Ve({...j.inPlayer,_line:j.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:j.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${j.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${j.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function E(){const j=e.querySelector(".match-screen");if(!j)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);j.style.bottom="auto",j.style.height=Y+"px",j.style.minHeight=Y+"px",j.style.maxHeight=Y+"px",j.style.overflow="hidden";const ne=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");ne&&G&&(G.style.paddingBottom=ne.offsetHeight+"px")}if(E(),setTimeout(E,120),setTimeout(E,400),setTimeout(E,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",E),window.visualViewport.addEventListener("scroll",E)),window.addEventListener("resize",E)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const j=e.querySelector(".terrain-wrapper svg");j&&(j.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let j=!1,Y=30;const ne=()=>document.getElementById("match-timer"),G=()=>{const Z=ne();if(!Z)return;const ae=String(Math.floor(Y/60)).padStart(2,"0"),pe=String(Y%60).padStart(2,"0");Z.textContent=` ${ae}:${pe}`,Z.style.color=j?"#ff2222":"#ff9500",Z.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!j)j=!0,Y=15,G();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Z.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Z),setTimeout(()=>{Z.remove(),Tt(e,t,n)},2500)}else G()},1e3)}(k=document.getElementById("match-quit"))==null||k.addEventListener("click",()=>{He(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Tt(e,t,n))}),(D=document.getElementById("view-ai"))==null||D.addEventListener("click",()=>zo(t,n)),(S=document.getElementById("toggle-history"))==null||S.addEventListener("click",()=>{var j;(j=document.getElementById("match-history-panel"))==null||j.classList.add("open")}),(B=document.getElementById("close-history"))==null||B.addEventListener("click",()=>{var j;(j=document.getElementById("match-history-panel"))==null||j.classList.remove("open")}),(P=document.getElementById("btn-action"))==null||P.addEventListener("click",()=>{t.selected.length!==0&&(g?_o(e,t,n):x&&$o(e,t,n))}),(Q=document.getElementById("btn-results"))==null||Q.addEventListener("click",()=>Tt(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(j=>{j.addEventListener("click",()=>wo(j,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(j=>{j.addEventListener("click",()=>Zt(e,t,n,null,j.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(j=>{j.addEventListener("click",()=>Ao(j.dataset.gcId,j.dataset.gcType,e,t,n))}),(de=document.getElementById("boost-card"))==null||de.addEventListener("click",()=>Io(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(j=>{j.addEventListener("click",()=>Zt(e,t,n,j.dataset.subId))}),(ie=document.getElementById("sub-btn-main"))==null||ie.addEventListener("click",()=>Zt(e,t,n))}function wo(e,t,n,r){const c=e.dataset.cardId,l=e.dataset.role,d=t.selected.findIndex(s=>s.cardId===c);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[l]||[]).find(p=>p.cardId===c);s&&t.selected.push({...s,_role:l,_line:l})}Se(n,t,r)}function mi(e,t,n){e.matchId&&$.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function _o(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),mi(t,n,n.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(s=>!s.used)),c=t.selected.map(d=>{const s=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,p=r&&["GK","DEF"].includes(d._role);return{...s,_line:d._role,...p?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),l=Kt(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(d=>{const s=(t.homeTeam[d._role]||[]).find(p=>p.cardId===d.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Se(e,t,n),setTimeout(()=>ko(e,t,n),1200)}function $o(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),mi(t,n,n.state.profile.id);const r=t.selected.map(s=>({...(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,_line:s._role})),c=Vt(r,t.modifiers.home);t.selected.forEach(s=>{const p=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId);p&&(p.used=!0)});const l=Yt(t.pendingAttack.total,c.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:ze(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),homePlayers:t.selected.map(s=>{const p=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:ze(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(l.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Se(e,t,n),Ut(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,n,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,pt(e,t,n,"home-attack")}function oi(e,t,n){mi(t,n,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Oi(r,"attack",t.difficulty);if(!c.length){Nt(e,t,n);return}const l=Kt(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:ze(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Se(e,t,n),Ut(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,n,"home-attack")});return}t.phase="defense",Se(e,t,n)}function ko(e,t,n){var i,a;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Oi(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(g=>!g.used)).length){t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(x=>({name:x.name,note:ve(x,x._line||x.job),portrait:ze(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((a=t.pendingAttack)==null?void 0:a.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,Se(e,t,n),Ut(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,n,"ai-attack")});return}const d=c.length>0?Vt(c,t.modifiers.ai).total:0;c.forEach(u=>{u.used=!0});const s=Yt(t.pendingAttack.total,d,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:ze(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:c.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:ze(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(s.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(s.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Se(e,t,n),Ut(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,n,"ai-attack")});return}else p.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,pt(e,t,n,"ai-attack")}function pt(e,t,n,r){if(t.round++,ln(t)){Tt(e,t,n);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){Nt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Nt(e,t,n);return}setTimeout(()=>oi(e,t,n),100);return}t.phase="attack",Se(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Nt(e,t,n);return}t.phase="ai-attack",Se(e,t,n),setTimeout(()=>oi(e,t,n),800)}}function ln(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(c=>!c.used)),n=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(c=>!c.used));return!t&&!n}function Nt(e,t,n){ln(t)?Tt(e,t,n):(t.phase="attack",Se(e,t,n))}function Eo(e,t,n){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=ze(e),l=ze(t),d=gt[e.job]||"#555",s=gt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${c?`<img src="${c}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${p}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(r);let a=!1;const u=()=>{a||(a=!0,r.remove(),n())};r.addEventListener("click",u),setTimeout(u,2e3)}function $t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Zt(e,t,n,r=null,c=null){var x,M;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([o,b])=>(b||[]).filter(E=>E.used).map(E=>({...E,_line:E._line||o}))),d=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!l.length){$t("Aucun joueur utilisé à remplacer");return}if(!d.length){$t("Aucun remplaçant disponible");return}let s=Math.max(0,l.findIndex(o=>o.cardId===c));const p=((x=l[s])==null?void 0:x._line)||((M=l[s])==null?void 0:M.job);let i=r?Math.max(0,d.findIndex(o=>o.cardId===r)):Math.max(0,d.findIndex(o=>o.job===p)),a=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function g(){var S,B,P,Q,de,ie;const o=l[s],b=d[i],E=Math.min(130,Math.round((window.innerWidth-90)/2)),T=Math.round(E*1.35),k=j=>`background:rgba(255,255,255,0.12);border:none;color:${j?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${j?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${k(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${b?Ve({...b,used:!1,boost:0},E,T):"<div>—</div>"}</div>
        <button id="in-down" style="${k(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${k(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},E,T):"<div>—</div>"}</div>
        <button id="out-down" style="${k(s>=l.length-1)}" ${s>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(S=u.querySelector("#sub-close"))==null||S.addEventListener("click",()=>u.remove()),(B=u.querySelector("#out-up"))==null||B.addEventListener("click",()=>{s>0&&(s--,g())}),(P=u.querySelector("#out-down"))==null||P.addEventListener("click",()=>{s<l.length-1&&(s++,g())}),(Q=u.querySelector("#in-up"))==null||Q.addEventListener("click",()=>{i>0&&(i--,g())}),(de=u.querySelector("#in-down"))==null||de.addEventListener("click",()=>{i<d.length-1&&(i++,g())});const D=(j,Y,ne,G)=>{const Z=u.querySelector("#"+j);if(!Z)return;let ae=0;Z.addEventListener("touchstart",pe=>{ae=pe.touches[0].clientY},{passive:!0}),Z.addEventListener("touchend",pe=>{const he=pe.changedTouches[0].clientY-ae;if(Math.abs(he)<30)return;const xe=Y();he<0&&xe<G-1?(ne(xe+1),g()):he>0&&xe>0&&(ne(xe-1),g())},{passive:!0})};D("in-panel",()=>i,j=>i=j,d.length),D("out-panel",()=>s,j=>s=j,l.length),(ie=u.querySelector("#sub-confirm"))==null||ie.addEventListener("click",j=>{if(j.preventDefault(),j.stopPropagation(),a)return;a=!0;const Y=l[s],ne=d[i];if(!Y||!ne)return;let G=null,Z=-1;for(const[pe,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ge=>ge.cardId===Y.cardId);if(xe!==-1){G=pe,Z=xe;break}}if(Z===-1||!G){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const ae={...ne,_line:G,_col:Y._col||0,used:!1,boost:0};t.homeTeam[G].splice(Z,1,ae),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ne.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:ve(Y,G),portrait:ze(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:ne.name,firstname:ne.firstname,note:ve(ne,G),portrait:ze(ne),job:ne.job,country_code:ne.country_code,rarity:ne.rarity,clubName:ne.clubName,clubLogo:ne.clubLogo},text:`🔄 ${ne.firstname} ${ne.name} remplace ${Y.firstname} ${Y.name}`}),u.remove(),Eo(Y,ne,()=>Se(e,t,n))})}document.body.appendChild(u),g()}function Ao(e,t,n,r,c){var M,o;const l=(r.gcDefs||[]).find(b=>b.name===t),d=Ne[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",i=(l==null?void 0:l.name)||t,a=(l==null?void 0:l.effect)||d.desc,u=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,g=d.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${g}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${a}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(x),(M=x.querySelector("#gc-back"))==null||M.addEventListener("click",()=>x.remove()),(o=x.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{x.remove(),Lo(e,t,n,r,c)})}function Dt(e,t,n,r,c,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function p(){var i,a;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const g=u._line||u.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g]||"#555",M=ve(u,g)+(u.boost||0),o=s.find(b=>b.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${g}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.cid,x=e.find(o=>o.cardId===g);if(!x)return;const M=s.findIndex(o=>o.cardId===g);M>-1?s.splice(M,1):s.length<t&&s.push(x),p()})}),(a=d.querySelector("#gc-picker-confirm"))==null||a.addEventListener("click",()=>{d.remove(),l(s)})}p(),document.body.appendChild(d)}const To={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},r,c,l)=>{const d=Object.entries(r.homeTeam).filter(([s])=>!n.length||n.includes(s)).flatMap(([s,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:s})));return d.length?(Dt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,r,s=>{s.forEach(p=>{const i=(r.homeTeam[p._line]||[]).find(a=>a.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Se(c,r,l)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Se(c,r,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:r="ai"},c,l,d)=>{const s=r==="home"?c.homeTeam:c.aiTeam,p=r==="ai"?"adverse":"allié",i=Object.entries(s).filter(([a])=>!n.length||n.includes(a)).flatMap(([a,u])=>u.filter(g=>!g.used).map(g=>({...g,_line:a})));return i.length?(Dt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,l,c,a=>{a.forEach(u=>{const x=((r==="home"?c.homeTeam:c.aiTeam)[u._line]||[]).find(M=>M.cardId===u.cardId);x&&(x.boost=(x.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${x.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),Se(l,c,d)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Se(l,c,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},r,c,l)=>{const d=n==="home"?r.homeTeam:r.aiTeam,s=n==="ai"?"adverse":"allié",p=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,a])=>a.filter(u=>!u.used).map(u=>({...u,_line:i})));return p.length?(Dt(p,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,c,r,i=>{i.forEach(a=>{const g=((n==="home"?r.homeTeam:r.aiTeam)[a._line]||[]).find(x=>x.cardId===a.cardId);g&&(g.used=!0,r.log.push({text:`❌ ${g.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Se(c,r,l)}),!0):(r.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Se(c,r,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,r,c)=>{const l=Object.entries(n.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,s])=>s.filter(p=>p.used).map(p=>({...p,_line:d})));return l.length?(Dt(l,e,`Choisir ${e} joueur(s) à ressusciter`,r,n,d=>{d.forEach(s=>{const p=(n.homeTeam[s._line]||[]).find(i=>i.cardId===s.cardId);p&&(p.used=!1,n.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Se(r,n,c)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Se(r,n,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Lo(e,t,n,r,c){r.usedGc.push(e);const l=r.gcDefs||[],d=l.find(p=>p.name===t)||l.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const p=To[d.effect_type];p?p(d.effect_params||{},r,n,c)||(s=!0):(c.toast(`Effet "${d.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(r.homeTeam).flatMap(([i,a])=>(a||[]).filter(u=>u.used).map(u=>({...u,_line:i})));p.length?(p[0].used=!1,r.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((a,u)=>ve(u,"ATT")-ve(a,"ATT"))[0];i.used=!0,r.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}$.from("cards").delete().eq("id",e).then(()=>{}),s&&Se(n,r,c)}function Io(e,t,n){const r=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!r.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${gt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ve(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[d]||[]).find(p=>p.cardId===l);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),Se(e,t,n)})})}function Ut(e,t,n,r,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,a)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${a%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][a%8]}
    </div>`).join("");l.innerHTML=`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${gt[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let s=!1;const p=()=>{s||(s=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",p),setTimeout(p,3500)}async function Tt(e,t,n){var a,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=n,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,d=c?"victoire":l?"nul":"defaite",s=Cn(t.mode,d);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?r.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(r.profile.credits||0)+s,matches_played:(r.profile.matches_played||0)+1};c?p.wins=(r.profile.wins||0)+1:l?p.draws=(r.profile.draws||0)+1:p.losses=(r.profile.losses||0)+1,await $.from("users").update(p).eq("id",r.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":l?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":l?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(a=document.getElementById("res-home"))==null||a.addEventListener("click",()=>{i.remove(),He(e),n.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{i.remove(),He(e),n.navigate("match",{matchMode:t.mode})})}function zo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function cn(e,t){var n,r;try{const c=(r=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:r.id;try{($.getChannels?$.getChannels():[]).forEach(d=>{const s=d.topic||"";(s.includes("matchmaking")||s.includes("pvp-match")||s.includes("friend-invite"))&&$.removeChannel(d)})}catch(l){console.warn("[Random] cleanup canaux:",l)}c&&await $.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await gi(e,t,"random",({deckId:c,formation:l,starters:d,subsRaw:s,gcCardsEnriched:p,gcDefs:i})=>{const a=u=>Mo(e,t,c,l,d,s,u,i||[]);if(!p.length){a([]);return}fi(e,p,a)})}async function Mo(e,t,n,r,c,l,d=[],s=[]){var T;const{state:p,navigate:i,toast:a}=t;let u=!1,g=null;Je(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const x=async(k=!0)=>{u=!0,g&&($.removeChannel(g),g=null),k&&await $.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(T=document.getElementById("mm-cancel"))==null||T.addEventListener("click",async()=>{try{await x(!0)}catch{}He(e),i("home")});const M=async(k,D,S)=>{if(u)return;u=!0,g&&($.removeChannel(g),g=null);const B=document.getElementById("mm-status");B&&(B.textContent="Adversaire trouvé !"),await new Promise(P=>setTimeout(P,600)),e.isConnected&&pn(e,t,k,S,d,s)},{data:o,error:b}=await $.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:n});if(b||!(o!=null&&o.success)){a("Erreur de matchmaking","error"),He(e),i("home");return}if(o.matched){M(o.match_id,o.opponent_id,!1);return}const E=document.getElementById("mm-status");E&&(E.textContent="En attente d'un autre joueur..."),g=$.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},k=>{const D=k.new;D.status==="matched"&&D.match_id&&M(D.match_id,D.matched_with,!0)}).subscribe()}async function So(e,t,n){const{state:r,navigate:c,toast:l}=t;try{($.getChannels?$.getChannels():[]).forEach(i=>{const a=i.topic||"";(a.includes("matchmaking")||a.includes("pvp-match")||a.includes("friend-invite"))&&$.removeChannel(i)})}catch{}const{data:d}=await $.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!d){l("Match introuvable","error"),c("home");return}if(d.status==="finished"){l("Ce match est terminé","info"),c("home");return}const s=d.home_id===r.profile.id;pn(e,t,n,s,[],[])}async function pn(e,t,n,r,c=[],l=[]){const{state:d,navigate:s,toast:p}=t,i=r?"p1":"p2",a=r?"p2":"p1",u=(c||[]).map(A=>A.id),g=(c||[]).map(A=>({id:A.id,gc_type:A.gc_type,_gcDef:A._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await $.from("matches").select("*").eq("id",n).single();if(!x){p("Match introuvable","error"),s("home");return}async function M(){const[{data:A},{data:f},{data:m},{data:h}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),y=L=>({cardId:L.card_id,position:L.position,id:L.id,firstname:L.firstname,name:L.surname_encoded,country_code:L.country_code,club_id:L.club_id,job:L.job,job2:L.job2,note_g:Number(L.note_g)||0,note_d:Number(L.note_d)||0,note_m:Number(L.note_m)||0,note_a:Number(L.note_a)||0,rarity:L.rarity,skin:L.skin,hair:L.hair,hair_length:L.hair_length,clubName:L.club_encoded_name||null,clubLogo:L.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((A==null?void 0:A.starters)||[]).map(L=>y(L)),w=((f==null?void 0:f.starters)||[]).map(L=>y(L)),_=(A==null?void 0:A.formation)||"4-4-2",z=(f==null?void 0:f.formation)||"4-4-2";return{p1Team:mt(v,_),p2Team:mt(w,z),p1Subs:((A==null?void 0:A.subs)||[]).map(L=>y(L)),p2Subs:((f==null?void 0:f.subs)||[]).map(L=>y(L)),p1Formation:_,p2Formation:z,p1Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?u:[],gc_p2:r?[]:u,gcCardsFull_p1:r?g:[],gcCardsFull_p2:r?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let o=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!o)if(r){o=await M();const{data:A}=await $.from("matches").select("game_state").eq("id",n).single();!(A!=null&&A.game_state)||!Object.keys(A.game_state).length?await $.from("matches").update({game_state:o,turn_user_id:x.home_id}).eq("id",n):o=A.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let A=0;A<30&&!o;A++){await new Promise(m=>setTimeout(m,400));const{data:f}=await $.from("matches").select("game_state").eq("id",n).single();f!=null&&f.game_state&&Object.keys(f.game_state).length&&(o=f.game_state)}if(!o){p("Erreur de synchronisation","error"),s("home");return}o.gc_p2=u,o.gcCardsFull_p2=g,await $.from("matches").update({game_state:o}).eq("id",n)}let b=!1,E=null,T=!1;const k=new Set,D=new Set;function S(A){var L,I;try{$.removeChannel(B)}catch{}const f=o[i+"Score"]||0,m=o[a+"Score"]||0;let h,y;A.winner_id?(h=A.winner_id===d.profile.id,y=!1):A.forfeit?(h=f>m,y=!1):(y=f===m,h=f>m),(L=document.getElementById("pvp-end-overlay"))==null||L.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":h?"🏆":"😞",_=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",z=y?"#fff":h?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${f} – ${m} ${o[a+"Name"]}</div>
      ${A.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(I=v.querySelector("#pvp-end-home"))==null||I.addEventListener("click",()=>{v.remove(),He(e),s("home")})}const B=$.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},A=>{const f=A.new;try{if(f.status==="finished"||f.forfeit){if(b)return;b=!0,E&&(clearInterval(E),E=null),f.game_state&&(o=f.game_state),S(f);return}if(f.game_state){const m=o;o=f.game_state;const h=o._lastGC;if(h&&h.seq&&!D.has(h.seq)&&(D.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>G());return}const y=m[i+"Score"]||0,v=m[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,z=w>y,L=_>v;if((z||L)&&!k.has(o.round)){k.add(o.round);const I=[...o.log||[]].reverse().find(R=>R.isGoal),F=((I==null?void 0:I.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));he(F,w,_,z,()=>G());return}G()}}catch(m){console.error("[PvP] crash:",m)}}).subscribe();async function P(A){Object.assign(o,A),o.lastActionAt=new Date().toISOString();const{error:f}=await $.from("matches").update({game_state:o}).eq("id",n);f&&p("Erreur de synchronisation","error");try{G()}catch(m){console.error("[PvP] renderPvpScreen crash:",m)}}async function Q(){if(b)return;b=!0,E&&(clearInterval(E),E=null);const A=r?x.away_id:x.home_id,f=r?"p2":"p1",m=r?"p1":"p2",h={...o,[f+"Score"]:3,[m+"Score"]:0,phase:"finished"};try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:A,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{$.removeChannel(B)}catch{}setTimeout(()=>{He(e),s("home")},800)}const de={BOOST_STAT:({value:A=1,count:f=1,roles:m=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!m.length||m.includes(_)).flatMap(([_,z])=>z.filter(L=>!L.used).map(L=>({...L,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}ie(w,f,`Choisir ${f} joueur(s) à booster (+${A})`,_=>{_.forEach(z=>{const L=(v[z._line]||[]).find(I=>I.cardId===z.cardId);L&&(L.boost=(L.boost||0)+A,h.log.push({text:`⚡ +${A} sur ${L.name}`,type:"info"}))}),h[i+"Team"]=v,y(h)})},DEBUFF_STAT:({value:A=1,count:f=1,roles:m=[],target:h="ai"},y,v)=>{const w=h==="home"?i:a,_=y[w+"Team"],z=h==="home"?"allié":"adverse",L=Object.entries(_).filter(([I])=>!m.length||m.includes(I)).flatMap(([I,F])=>F.filter(R=>!R.used).map(R=>({...R,_line:I})));if(!L.length){y.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),v(y);return}ie(L,f,`Choisir ${f} joueur(s) ${z}(s) (-${A})`,I=>{I.forEach(F=>{const R=(_[F._line]||[]).find(W=>W.cardId===F.cardId);R&&(R.boost=(R.boost||0)-A,y.log.push({text:`🎯 -${A} sur ${R.name}`,type:"info"}))}),y[w+"Team"]=_,v(y)})},GRAY_PLAYER:({count:A=1,roles:f=[],target:m="ai"},h,y)=>{const v=m==="home"?i:a,w=h[v+"Team"],_=m==="home"?"allié":"adverse",z=Object.entries(w).filter(([L])=>!f.length||f.includes(L)).flatMap(([L,I])=>I.filter(F=>!F.used).map(F=>({...F,_line:L})));if(!z.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(h);return}ie(z,A,`Choisir ${A} joueur(s) ${_}(s) à exclure`,L=>{L.forEach(I=>{const F=(w[I._line]||[]).find(R=>R.cardId===I.cardId);F&&(F.used=!0,h.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),h[v+"Team"]=w,y(h)})},REVIVE_PLAYER:({count:A=1,roles:f=[]},m,h)=>{const y=m[i+"Team"],v=Object.entries(y).filter(([w])=>!f.length||f.includes(w)).flatMap(([w,_])=>_.filter(z=>z.used).map(z=>({...z,_line:w})));if(!v.length){m.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(m);return}ie(v,A,`Choisir ${A} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const z=(y[_._line]||[]).find(L=>L.cardId===_.cardId);z&&(z.used=!1,m.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),m[i+"Team"]=y,h(m)})},REMOVE_GOAL:({},A,f)=>{const m=a+"Score";A[m]>0?(A[m]--,A.log.push({text:"🚫 Dernier but annulé !",type:"info"})):A.log.push({text:"🚫 Aucun but à annuler",type:"info"}),f(A)},ADD_GOAL_DRAW:({},A,f)=>{A[i+"Score"]===A[a+"Score"]?(A[i+"Score"]++,A.log.push({text:"🎯 But bonus !",type:"info"})):A.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),f(A)},ADD_SUB:({value:A=1},f,m)=>{f.maxSubs=(f.maxSubs||3)+A,f.log.push({text:`🔄 +${A} remplacement(s)`,type:"info"}),m(f)},CUSTOM:({},A,f)=>f(A)};function ie(A,f,m,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var z,L;const _=A.map(I=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",R=ve(I,I._line)+(I.boost||0),ce=v.find(H=>H.cardId===I.cardId)?"#FFD700":"rgba(255,255,255,0.25)",X=I.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${F};overflow:hidden;cursor:pointer;${X}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${I._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${m}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${f}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${f})
          </button>
        </div>`,(z=y.querySelector("#pp-close"))==null||z.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(I=>{I.addEventListener("click",()=>{const F=I.dataset.cid,R=A.find(ce=>ce.cardId===F),W=v.findIndex(ce=>ce.cardId===F);R&&(W>-1?v.splice(W,1):v.length<f&&v.push(R),w())})}),(L=y.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{y.remove(),h(v)})}w(),document.body.appendChild(y)}async function j(A,f){const h=(o["gcCardsFull_"+i]||[]).find(_=>_.id===A),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(_=>{var z;return _.name===f||((z=_.name)==null?void 0:z.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],A],w={type:f,by:i,seq:(o._gcAnimSeq||0)+1};D.add(w.seq),xe(f,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const z=de[y.effect_type];if(z){const L={...o};z(y.effect_params||{},L,async I=>{I["usedGc_"+i]=v,I._lastGC=w,I._gcAnimSeq=w.seq,await P(I)});return}}const _={...o};switch(f){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=a+"Score";_[z]>0&&(_[z]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await P(_)})}function Y(A,f){const m="usedCardIds_"+A,h=new Set(o[m]||[]);f.forEach(y=>h.add(y)),o[m]=[...h]}function ne(){for(const A of["p1","p2"]){const f=new Set(o["usedCardIds_"+A]||[]),m=o[A+"Team"];if(m)for(const h of["GK","DEF","MIL","ATT"])(m[h]||[]).forEach(y=>{y.used=f.has(y.cardId)})}}function G(){var Fe,Ze,xt,yt,ht,bt;if(o.phase==="reveal")return Z();if(o.phase==="midfield")return pe();if(o.phase==="finished")return Re();const A=o[i+"Team"],f=o[a+"Team"];ne();const m=o[i+"Score"],h=o[a+"Score"],y=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",z=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],L=z.map(J=>J.cardId),I=window.innerWidth>=700,F=o[i+"Subs"]||[],R=o["usedSubIds_"+i]||[],W=F.filter(J=>!R.includes(J.cardId)),ce=o["gcCardsFull_"+i]||[],X=o["usedGc_"+i]||[],H=ce.filter(J=>!X.includes(J.id)),V=o.boostOwner===i&&!o.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(J=>(f[J]||[]).some(N=>!N.used)),le=[...A.MIL||[],...A.ATT||[]].filter(J=>!J.used),ue=w&&ee&&le.length===0?[...A.GK||[],...A.DEF||[]].filter(J=>!J.used).map(J=>J.cardId):[];function fe(J,N,re){var Bt,_t;const se=J._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",We=(se==null?void 0:se.name)||J.gc_type,Xe=(se==null?void 0:se.effect)||((Bt=Ne[J.gc_type])==null?void 0:Bt.desc)||"",et=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,jt=((_t=Ne[J.gc_type])==null?void 0:_t.icon)||"⚡",Ct=Math.round(re*.22),vt=Math.round(re*.22),lt=re-Ct-vt,wt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}"
        style="box-sizing:border-box;width:${N}px;height:${re}px;border-radius:10px;border:2px solid ${Ye};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${wt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${We}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${N-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${jt}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Xe.slice(0,38)}</span>
        </div>
      </div>`}function me(J,N){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${J}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(N*.2)}px">⚡</div>
        <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const be=(J,N)=>N?me(130,175):fe(J,130,175),je=(J,N)=>N?me(68,95):fe(J,68,95),Pe=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",qe=w?Ee(i)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Le=w&&!Ee(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",Ie=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(J,I?76:44,I?100:58)}</div>`).join("")}
    </div>`,Be=w?"attack":_?"defense":"idle",Ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(A,o[i+"Formation"],Be,L,300,300,ue)}
      </div>
    </div>`;function Oe(J){if(J.type==="duel"&&(J.homeTotal!=null||J.aiTotal!=null)){const N=(J.homeTotal||0)>=(J.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(J.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(J.homePlayers||[]).map(re=>nt(re)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${N?20:14}px;font-weight:900;color:${N?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${J.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${N?14:20}px;font-weight:900;color:${N?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${J.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(J.aiPlayers||[]).map(re=>nt(re)).join("")}
            </div>
          </div>
          ${J.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${J.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${J.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${J.type==="goal"?700:400};padding:3px 2px">${J.text||""}</div>`}const Ue=(()=>{var N,re;if(_&&((N=o.pendingAttack)!=null&&N.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(w&&((re=o.pendingAttack)!=null&&re.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",se.total)}
        </div>`}const J=(o.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+Oe(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${m} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ue}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Je(e),e.style.overflow="hidden",I?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ie}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${qe}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(J=>be(J,!1)).join("")}
            ${V?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(A,o[i+"Formation"],Be,L,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(J=>je(J,!1)).join("")}
            ${V?je(null,!0):""}
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
          <div>${qe}${Le}</div>
        </div>
      </div>`;function Ce(){const J=e.querySelector(".match-screen");if(!J)return;const N=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=N+"px",J.style.minHeight=N+"px",J.style.maxHeight=N+"px",J.style.overflow="hidden";const re=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");re&&se&&(se.style.paddingBottom=re.offsetHeight+"px")}if(Ce(),setTimeout(Ce,120),setTimeout(Ce,400),T||(T=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ce),window.visualViewport.addEventListener("scroll",Ce)),window.addEventListener("resize",Ce)),function(){const N=e.querySelector(".terrain-wrapper svg");N&&(N.removeAttribute("width"),N.removeAttribute("height"),N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",N.setAttribute("viewBox","-26 -26 352 352"),N.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!w&&!_)return;const N=J.dataset.cardId,re=J.dataset.role,se=(A[re]||[]).find(Xe=>Xe.cardId===N);if(!se||se.used)return;const ye=ue.includes(N);if(w&&!["MIL","ATT"].includes(re)&&!ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Xe=>Xe.cardId===N);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...se,_role:re}),G()})}),e.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>U(J.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>U())}),(Fe=e.querySelector("#pvp-sub-open"))==null||Fe.addEventListener("click",()=>U()),e.querySelectorAll(".pvp-gc-mini").forEach(J=>{J.addEventListener("click",()=>ge(J.dataset.gcId,J.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>O()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",J=>{w?J.currentTarget.dataset.pass==="1"||!Ee(i)?oe():te():_&&we()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Q()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>q()),(bt=e.querySelector("#pvp-toggle-history"))==null||bt.addEventListener("click",()=>K()),E&&(clearInterval(E),E=null),(w||_)&&!b){let J=30,N=!1;const re=()=>document.getElementById("pvp-timer"),se=()=>{re()&&(re().textContent=J+"s",re().style.color=N?"#ff4444":"#fff")};se(),E=setInterval(()=>{J--,J<0?N?(clearInterval(E),E=null,w&&!Ee(i)?oe():Q()):(N=!0,J=15,se()):se()},1e3)}}function Z(){Je(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await P({phase:"midfield"})},5e3)}let ae=!1;function pe(){if(ae)return;const A=o[i+"Team"].MIL||[],f=o[a+"Team"].MIL||[];function m(H){return H.reduce((V,ee)=>V+ve(ee,"MIL"),0)}function h(H){let V=0;for(let ee=0;ee<H.length-1;ee++){const le=Qe(H[ee],H[ee+1]);le==="#00ff88"?V+=2:le==="#FFD700"&&(V+=1)}return V}const y=m(A)+h(A),v=m(f)+h(f),w=y>=v;function _(H,V,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((le,ue)=>{const fe=ue<H.length-1?Qe(le,H[ue+1]):null,me=!fe||fe==="#ff3333"||fe==="#cc2222",be=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...le,note:ve(le,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<H.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${fe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${m(H)} + ${h(H)} liens = <b style="color:#fff">${m(H)+h(H)}</b>
        </div>
      </div>`}Je(e),e.innerHTML=`
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
      ${_(A,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(f,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(H,V)=>e.querySelectorAll(H).forEach((ee,le)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},V+le*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,V)=>setTimeout(()=>{H.style.opacity="1"},V*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function L(H,V,ee){const le=document.getElementById(H);if(!le)return;const ue=performance.now(),fe=me=>{const be=Math.min(1,(me-ue)/ee);le.textContent=Math.round(V*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):le.textContent=V};requestAnimationFrame(fe)}setTimeout(()=>{L("pvp-score-me",y,800),L("pvp-score-opp",v,800)},1500);const I=o.p1Team.MIL||[],F=o.p2Team.MIL||[],R=m(I)+h(I),W=m(F)+h(F),ce=R>=W?"p1":"p2";let X=o.boostValue;X==null&&(X=ui(),o.boostValue=X,o.boostOwner=ce,o.boostUsed=!1),ae=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),V=e.querySelector("#duel-row-"+(w?"opp":"me")),ee=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),ue=w?ee:le,fe=w?le:ee;ue&&(ue.style.fontSize="80px",ue.style.color=w?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Pe;const me=document.getElementById("pvp-duel-finale");if(!me)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+X+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",je=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+je,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Pe=document.getElementById("pvp-start-match"))==null||Pe.addEventListener("click",async()=>{const qe=ce;await P({phase:qe+"-attack",attacker:qe,round:1,boostValue:X,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function he(A,f,m,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(I,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${f} – ${m}
      </div>
      ${A!=null&&A.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${A.map(I=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[I.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${I.portrait?`<img src="${I.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(I.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const L=()=>{z||(z=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",L),setTimeout(L,3500)}function xe(A,f,m){var X,H;const h=(o.gcDefs||[]).find(V=>{var ee;return V.name===A||((ee=V.name)==null?void 0:ee.toLowerCase().trim())===(A==null?void 0:A.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||A,_=(h==null?void 0:h.effect)||((X=Ne[A])==null?void 0:X.desc)||"",z=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,L=((H=Ne[A])==null?void 0:H.icon)||"⚡",F=f===i?"Vous":o[f+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let W=!1;const ce=()=>{W||(W=!0,R.remove(),setTimeout(()=>m&&m(),50))};R.addEventListener("click",ce),setTimeout(ce,3e3)}function ge(A,f){var R,W,ce,X;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===A),y=h==null?void 0:h._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||f,z=(y==null?void 0:y.effect)||((R=Ne[f])==null?void 0:R.desc)||"Carte spéciale.",L=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,I=((W=Ne[f])==null?void 0:W.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${I}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(ce=F.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>F.remove()),(X=F.querySelector("#pvp-gc-use"))==null||X.addEventListener("click",()=>{F.remove(),j(A,f)})}function O(){var h;const A=o[i+"Team"],f=Object.entries(A).flatMap(([y,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!f.length)return;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",m.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${f.map(y=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=ve(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(m),(h=m.querySelector("#bp-close"))==null||h.addEventListener("click",()=>m.remove()),m.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const v=y.dataset.cid,w=f.find(z=>z.cardId===v);if(!w)return;const _=(A[w._line]||[]).find(z=>z.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),m.remove(),await P({[i+"Team"]:A,boostUsed:!0})})})}function U(A=null){var W,ce;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const m=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){p(`Maximum ${y} remplacements atteint`,"warning");return}const v=Object.entries(m).flatMap(([X,H])=>(H||[]).filter(V=>V.used).map(V=>({...V,_line:X}))),w=(o[i+"Subs"]||[]).filter(X=>!h.includes(X.cardId));if(!v.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(X=>X.cardId===A));const z=((W=v[_])==null?void 0:W._line)||((ce=v[_])==null?void 0:ce.job);let L=Math.max(0,w.findIndex(X=>X.job===z)),I=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var fe,me,be,je,Pe,qe;const X=v[_],H=w[L],V=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(V*1.35),le=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${le(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},V,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${le(L>=w.length-1)}" ${L>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${le(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${X?Ve({...X,used:!1,boost:0},V,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${le(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=F.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>F.remove()),(me=F.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{_>0&&(_--,R())}),(be=F.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{_<v.length-1&&(_++,R())}),(je=F.querySelector("#pin-up"))==null||je.addEventListener("click",()=>{L>0&&(L--,R())}),(Pe=F.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{L<w.length-1&&(L++,R())});const ue=(Le,Ie,Be,Ge)=>{const Oe=F.querySelector("#"+Le);if(!Oe)return;let Ue=0;Oe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",Ke=>{const Ce=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Ce)<30)return;const Fe=Ie();Ce<0&&Fe<Ge-1?(Be(Fe+1),R()):Ce>0&&Fe>0&&(Be(Fe-1),R())},{passive:!0})};ue("pin-panel",()=>L,Le=>L=Le,w.length),ue("pout-panel",()=>_,Le=>_=Le,v.length),(qe=F.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),I)return;I=!0;const Ie=v[_],Be=w[L];if(!Ie||!Be)return;const Ge=Ie._line,Oe=(m[Ge]||[]).findIndex(Ce=>Ce.cardId===Ie.cardId);if(Oe===-1){p("Erreur : joueur introuvable","error"),F.remove();return}const Ue={...Be,_line:Ge,position:Ie.position,used:!1,boost:0};m[Ge].splice(Oe,1,Ue);const Ke=[...h,Be.cardId];F.remove(),C(Ie,Be,async()=>{await P({[i+"Team"]:m,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(F),R()}function C(A,f,m){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(z,L,I)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${I}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[z.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${ze(z)?`<img src="${ze(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(f,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(A,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const _=()=>{w||(w=!0,y.remove(),setTimeout(()=>m(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function q(){var f;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",A.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(A),(f=A.querySelector("#pvp-opp-close"))==null||f.addEventListener("click",()=>A.remove())}function K(){var m;const A=o.log||[],f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",f.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${A.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...A].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(f),(m=f.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>f.remove())}async function oe(){if(o.phase!==i+"-attack")return;const A=i==="p1"?"p2":"p1",f=(o.round||0)+1,m=[...o.log||[]];m.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Te(o),y=Ee(A),v=h||!y?"finished":A+"-attack";await P({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:A,round:f,log:m}),v==="finished"&&await De(o)}async function te(){const A=o[i+"Team"],f=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),m=(o["selected_"+i]||[]).map(v=>{const w=(A[v._role]||[]).find(R=>R.cardId===v.cardId)||v,_=f&&["GK","DEF"].includes(v._role),z=A[v._role]||[],L=z.findIndex(R=>R.cardId===v.cardId),I=ot(z.length),F=L>=0?I[L]:w._col??1;return{...w,_line:v._role,_col:F,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!m.length)return;const h=Kt(m,o.modifiers[i]||{});Y(i,m.map(v=>v.cardId)),m.forEach(v=>{const w=(A[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],G();const y=[...o.log||[]];if(f){const v=(o[i+"Score"]||0)+1,w=m.map(F=>({name:F.name,note:ve(F,F._line||"ATT"),portrait:ze(F),job:F.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(o.round||0)+1,z=i==="p1"?"p2":"p1",L={...o,[i+"Team"]:A,[i+"Score"]:v},I=Te(L);k.add(_),he(w,v,o[a+"Score"]||0,!0,async()=>{await P({[i+"Team"]:A,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:I?"finished":z+"-attack",attacker:z,round:_,log:y}),I&&await De({...o,[i+"Score"]:v})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await P({[i+"Team"]:A,[a+"Team"]:o[a+"Team"],pendingAttack:{...h,players:m,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:y})}async function we(){const A=o[i+"Team"],f=(o["selected_"+i]||[]).map(X=>{const H=(A[X._role]||[]).find(fe=>fe.cardId===X.cardId)||X,V=A[X._role]||[],ee=V.findIndex(fe=>fe.cardId===X.cardId),le=ot(V.length),ue=ee>=0?le[ee]:H._col??1;return{...H,_line:X._role,_col:ue}}),m=Vt(f,o.modifiers[i]||{});Y(i,f.map(X=>X.cardId)),f.forEach(X=>{const H=(A[X._role]||[]).find(V=>V.cardId===X.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],G();const h=Yt(o.pendingAttack.total,m.total,o.modifiers[i]||{}),y=o.pendingAttack.side,v=h==="attack"||(h==null?void 0:h.goal),w=y==="p1"?"p2":"p1",_=(o.round||0)+1,z=(o.pendingAttack.players||[]).map(X=>({name:X.name,note:ve(X,X._line||"ATT"),portrait:ze(X),job:X.job})),L=[...o.log||[]];L.push({type:"duel",isGoal:v,homeScored:v&&y===i,text:v?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${m.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${m.total})`,homePlayers:z,aiPlayers:f.map(X=>({name:X.name,note:ve(X,X._line||"DEF"),portrait:ze(X),job:X.job})),homeTotal:o.pendingAttack.total,aiTotal:m.total});const I=v?(o[y+"Score"]||0)+1:o[y+"Score"]||0,F={...o,[i+"Team"]:A,[y+"Score"]:I},R=Te(F),W=R?"finished":w+"-attack",ce=async()=>{await P({[i+"Team"]:A,[a+"Team"]:o[a+"Team"],[y+"Score"]:I,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:w,round:_,log:L}),(W==="finished"||R)&&await De({...o,[y+"Score"]:I})};if(v){const X=y===i,H=X?I:o[i+"Score"]||0,V=X?o[a+"Score"]||0:I;k.add(_),he(z,H,V,X,ce)}else await ce()}function _e(A){return["MIL","ATT"].some(f=>(A[f]||[]).some(m=>!m.used))}function ke(A){return["GK","DEF","MIL","ATT"].some(f=>(A[f]||[]).some(m=>!m.used))}function Me(A){return ke(A)&&!_e(A)}function Ee(A){const f=o[A+"Team"],m=o[(A==="p1"?"p2":"p1")+"Team"];return!!(_e(f)||!ke(m)&&Me(f))}function Te(A){const f=["MIL","ATT"].some(L=>(A.p1Team[L]||[]).some(I=>!I.used)),m=["MIL","ATT"].some(L=>(A.p2Team[L]||[]).some(I=>!I.used)),h=ke(A.p1Team),y=ke(A.p2Team);return!f&&!(!y&&h)&&(!m&&!(!h&&y))}function $e(A){const f=A.p1Score||0,m=A.p2Score||0;return f===m?null:f>m?x.home_id:x.away_id}async function De(A){try{const f=$e(A),m=f?x.home_id===f?x.away_id:x.home_id:null;await $.from("matches").update({status:"finished",winner_id:f,home_score:A.p1Score||0,away_score:A.p2Score||0}).eq("id",n),f&&m&&Ki(f,m).catch(()=>{})}catch(f){console.error("[PvP] finishMatch:",f)}}function Re(){var y;const A=o[i+"Score"],f=o[a+"Score"],m=A>f,h=A===f;Je(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${m?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${m?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${A} - ${f}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{$.removeChannel(B)}catch{}He(e),s("home")})}G()}const jo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:cn,resumePvpMatch:So},Symbol.toStringTag,{value:"Module"}));async function Co(e,t,n,r){var c,l;try{const d=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{($.getChannels?$.getChannels():[]).forEach(p=>{const i=p.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&$.removeChannel(p)})}catch(s){console.warn("[FriendMatch] cleanup canaux:",s)}d&&(await $.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await $.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await gi(e,t,"random",({deckId:d,formation:s,starters:p,subsRaw:i,gcCardsEnriched:a,gcDefs:u})=>{const g=x=>Bo(e,t,d,s,p,i,x,u||[],n,r);if(!a.length){g([]);return}fi(e,a,g)})}async function Bo(e,t,n,r,c,l,d=[],s=[],p,i){var de;const{state:a,navigate:u,toast:g}=t,x=a.profile.id;let M=!1,o=null;Je(e);try{await $.rpc("cancel_matchmaking",{p_user_id:x})}catch{}try{await $.from("matchmaking_queue").delete().eq("user_id",x)}catch{}const b=(ie,j,Y,ne)=>{var G;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${j?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${j?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${j?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${j?"#22c55e":"#aaa"}">${j?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!j&&ie?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(G=document.getElementById("lobby-cancel"))==null||G.addEventListener("click",async()=>{M=!0,o&&($.removeChannel(o),o=null),Y&&await $.from("friend_match_invites").update({status:"declined"}).eq("id",Y),He(e),u("home")})},E=async(ie,j)=>{M=!0,o&&($.removeChannel(o),o=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&Fo(e,t,ie,j,d,s)},{data:T}=await $.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${x},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${x})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let k,D;if(T&&T.inviter_id===p)D=!1,k=T.id,await $.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",k);else{D=!0;const{data:ie,error:j}=await $.from("friend_match_invites").insert({inviter_id:x,invitee_id:p,friend_id:p,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(j||!ie){g("Erreur création invitation","error"),He(e),u("home");return}k=ie.id}if(b(!0,!D,k),!D){const ie={home_id:p,away_id:x,home_deck_id:T.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},j=await $.from("matches").insert(ie).select().single(),Y=j.data;if(!Y){g("Erreur création match: "+(((de=j.error)==null?void 0:de.message)||""),"error"),He(e),u("home");return}await $.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",k),E(Y.id,!1);return}let S=!1;const B=ie=>{M||S||(ie.status==="matched"&&ie.match_id?(S=!0,clearInterval(P),clearInterval(Q),E(ie.match_id,!0)):ie.status==="declined"?(clearInterval(P),clearInterval(Q),g(`${i} a décliné l'invitation`,"warning"),He(e),u("home")):ie.invitee_ready&&b(!0,!0,k))},P=setInterval(()=>{if(M){clearInterval(P);return}$.from("matchmaking_queue").delete().eq("user_id",x).then(()=>{},()=>{})},3e3),Q=setInterval(async()=>{if(M||S){clearInterval(Q);return}const{data:ie}=await $.from("friend_match_invites").select("*").eq("id",k).maybeSingle();ie&&B(ie)},1200);o=$.channel("friend-invite-"+k).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${k}`},ie=>B(ie.new)).subscribe()}async function Fo(e,t,n,r,c=[],l=[]){const{state:d,navigate:s,toast:p}=t,i=r?"p1":"p2",a=r?"p2":"p1",u=(c||[]).map(f=>f.id),g=(c||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await $.from("matches").select("*").eq("id",n).single();if(!x){p("Match introuvable","error"),s("home");return}async function M(){const[{data:f},{data:m},{data:h},{data:y}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),v=I=>({cardId:I.card_id,position:I.position,id:I.id,firstname:I.firstname,name:I.surname_encoded,country_code:I.country_code,club_id:I.club_id,job:I.job,job2:I.job2,note_g:Number(I.note_g)||0,note_d:Number(I.note_d)||0,note_m:Number(I.note_m)||0,note_a:Number(I.note_a)||0,rarity:I.rarity,skin:I.skin,hair:I.hair,hair_length:I.hair_length,clubName:I.club_encoded_name||null,clubLogo:I.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),w=((f==null?void 0:f.starters)||[]).map(I=>v(I)),_=((m==null?void 0:m.starters)||[]).map(I=>v(I)),z=(f==null?void 0:f.formation)||"4-4-2",L=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:mt(w,z),p2Team:mt(_,L),p1Subs:((f==null?void 0:f.subs)||[]).map(I=>v(I)),p2Subs:((m==null?void 0:m.subs)||[]).map(I=>v(I)),p1Formation:z,p2Formation:L,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?u:[],gc_p2:r?[]:u,gcCardsFull_p1:r?g:[],gcCardsFull_p2:r?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let o=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!o)if(r){o=await M();const{data:f}=await $.from("matches").select("game_state").eq("id",n).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await $.from("matches").update({game_state:o,turn_user_id:x.home_id}).eq("id",n):o=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!o;f++){await new Promise(h=>setTimeout(h,400));const{data:m}=await $.from("matches").select("game_state").eq("id",n).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(o=m.game_state)}if(!o){p("Erreur de synchronisation","error"),s("home");return}o.gc_p2=u,o.gcCardsFull_p2=g,await $.from("matches").update({game_state:o}).eq("id",n)}let b=!1,E=!1,T=null,k=!1;const D=new Set,S=new Set;function B(f){var I,F;try{$.removeChannel(P)}catch{}const m=o[i+"Score"]||0,h=o[a+"Score"]||0;if(!E){const R=o.p1Score||0,W=o.p2Score||0,ce=(o.usedGc_p1||[]).length,X=(o.usedGc_p2||[]).length,H=f.winner_id||(R>W?x.home_id:W>R?x.away_id:null);(H?d.profile.id===H:d.profile.id<(r?x.away_id:x.home_id))&&(E=!0,Ln({player1Id:x.home_id,player2Id:x.away_id,score1:R,score2:W,gc1:ce,gc2:X}).catch(ee=>console.warn("[FriendMatch] updateStats:",ee)))}let y,v;f.winner_id?(y=f.winner_id===d.profile.id,v=!1):f.forfeit?(y=m>h,v=!1):(v=m===h,y=m>h),(I=document.getElementById("pvp-end-overlay"))==null||I.remove();const w=document.createElement("div");w.id="pvp-end-overlay",w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const _=v?"🤝":y?"🏆":"😞",z=v?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",L=v?"#fff":y?"#FFD700":"#ff6b6b";w.innerHTML=`
      <div style="font-size:64px">${_}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${z}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${m} – ${h} ${o[a+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(w),(F=w.querySelector("#pvp-end-home"))==null||F.addEventListener("click",()=>{w.remove(),He(e),s("home")})}const P=$.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},f=>{const m=f.new;try{if(m.status==="finished"||m.forfeit){if(b)return;b=!0,T&&(clearInterval(T),T=null),m.game_state&&(o=m.game_state),B(m);return}if(m.game_state){const h=o;o=m.game_state;const y=o._lastGC;if(y&&y.seq&&!S.has(y.seq)&&(S.add(y.seq),y.by!==i)){ge(y.type,y.by,()=>Z());return}const v=h[i+"Score"]||0,w=h[a+"Score"]||0,_=o[i+"Score"]||0,z=o[a+"Score"]||0,L=_>v,I=z>w;if((L||I)&&!D.has(o.round)){D.add(o.round);const F=[...o.log||[]].reverse().find(W=>W.isGoal),R=((F==null?void 0:F.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(R,_,z,L,()=>Z());return}Z()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function Q(f){Object.assign(o,f),o.lastActionAt=new Date().toISOString();const{error:m}=await $.from("matches").update({game_state:o}).eq("id",n);m&&p("Erreur de synchronisation","error");try{Z()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function de(){if(b)return;b=!0,T&&(clearInterval(T),T=null);const f=r?x.away_id:x.home_id,m=r?"p2":"p1",h=r?"p1":"p2",y={...o,[m+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{$.removeChannel(P)}catch{}setTimeout(()=>{He(e),s("home")},800)}const ie={BOOST_STAT:({value:f=1,count:m=1,roles:h=[]},y,v)=>{const w=y[i+"Team"],_=Object.entries(w).filter(([z])=>!h.length||h.includes(z)).flatMap(([z,L])=>L.filter(I=>!I.used).map(I=>({...I,_line:z})));if(!_.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(y);return}j(_,m,`Choisir ${m} joueur(s) à booster (+${f})`,z=>{z.forEach(L=>{const I=(w[L._line]||[]).find(F=>F.cardId===L.cardId);I&&(I.boost=(I.boost||0)+f,y.log.push({text:`⚡ +${f} sur ${I.name}`,type:"info"}))}),y[i+"Team"]=w,v(y)})},DEBUFF_STAT:({value:f=1,count:m=1,roles:h=[],target:y="ai"},v,w)=>{const _=y==="home"?i:a,z=v[_+"Team"],L=y==="home"?"allié":"adverse",I=Object.entries(z).filter(([F])=>!h.length||h.includes(F)).flatMap(([F,R])=>R.filter(W=>!W.used).map(W=>({...W,_line:F})));if(!I.length){v.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),w(v);return}j(I,m,`Choisir ${m} joueur(s) ${L}(s) (-${f})`,F=>{F.forEach(R=>{const W=(z[R._line]||[]).find(ce=>ce.cardId===R.cardId);W&&(W.boost=(W.boost||0)-f,v.log.push({text:`🎯 -${f} sur ${W.name}`,type:"info"}))}),v[_+"Team"]=z,w(v)})},GRAY_PLAYER:({count:f=1,roles:m=[],target:h="ai"},y,v)=>{const w=h==="home"?i:a,_=y[w+"Team"],z=h==="home"?"allié":"adverse",L=Object.entries(_).filter(([I])=>!m.length||m.includes(I)).flatMap(([I,F])=>F.filter(R=>!R.used).map(R=>({...R,_line:I})));if(!L.length){y.log.push({text:`❌ Aucun joueur ${z}`,type:"info"}),v(y);return}j(L,f,`Choisir ${f} joueur(s) ${z}(s) à exclure`,I=>{I.forEach(F=>{const R=(_[F._line]||[]).find(W=>W.cardId===F.cardId);R&&(R.used=!0,y.log.push({text:`❌ ${R.name} exclu !`,type:"info"}))}),y[w+"Team"]=_,v(y)})},REVIVE_PLAYER:({count:f=1,roles:m=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!m.length||m.includes(_)).flatMap(([_,z])=>z.filter(L=>L.used).map(L=>({...L,_line:_})));if(!w.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}j(w,f,`Choisir ${f} joueur(s) à ressusciter`,_=>{_.forEach(z=>{const L=(v[z._line]||[]).find(I=>I.cardId===z.cardId);L&&(L.used=!1,h.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=v,y(h)})},REMOVE_GOAL:({},f,m)=>{const h=a+"Score";f[h]>0?(f[h]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(f)},ADD_GOAL_DRAW:({},f,m)=>{f[i+"Score"]===f[a+"Score"]?(f[i+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(f)},ADD_SUB:({value:f=1},m,h)=>{m.maxSubs=(m.maxSubs||3)+f,m.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),h(m)},CUSTOM:({},f,m)=>m(f)};function j(f,m,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function _(){var L,I;const z=f.map(F=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[F._line]||"#555",W=ve(F,F._line)+(F.boost||0),X=w.find(V=>V.cardId===F.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=F.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${F.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${X};background:${R};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${F.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${F._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${z}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${m})
          </button>
        </div>`,(L=v.querySelector("#pp-close"))==null||L.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(F=>{F.addEventListener("click",()=>{const R=F.dataset.cid,W=f.find(X=>X.cardId===R),ce=w.findIndex(X=>X.cardId===R);W&&(ce>-1?w.splice(ce,1):w.length<m&&w.push(W),_())})}),(I=v.querySelector("#pp-confirm"))==null||I.addEventListener("click",()=>{v.remove(),y(w)})}_(),document.body.appendChild(v)}async function Y(f,m){const y=(o["gcCardsFull_"+i]||[]).find(z=>z.id===f),v=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(z=>{var L;return z.name===m||((L=z.name)==null?void 0:L.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),w=[...o["usedGc_"+i]||[],f],_={type:m,by:i,seq:(o._gcAnimSeq||0)+1};S.add(_.seq),ge(m,i,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const L=ie[v.effect_type];if(L){const I={...o};L(v.effect_params||{},I,async F=>{F["usedGc_"+i]=w,F._lastGC=_,F._gcAnimSeq=_.seq,await Q(F)});return}}const z={...o};switch(m){case"Remplacement+":z.maxSubs=(z.maxSubs||3)+1,z.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=a+"Score";z[L]>0&&(z[L]--,z.log.push({text:"🚫 But annulé",type:"info"}));break}}z["usedGc_"+i]=w,z._lastGC=_,z._gcAnimSeq=_.seq,await Q(z)})}function ne(f,m){const h="usedCardIds_"+f,y=new Set(o[h]||[]);m.forEach(v=>y.add(v)),o[h]=[...y]}function G(){for(const f of["p1","p2"]){const m=new Set(o["usedCardIds_"+f]||[]),h=o[f+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(v=>{v.used=m.has(v.cardId)})}}function Z(){var Ze,xt,yt,ht,bt,J;if(o.phase==="reveal")return ae();if(o.phase==="midfield")return he();if(o.phase==="finished")return A();const f=o[i+"Team"],m=o[a+"Team"];G();const h=o[i+"Score"],y=o[a+"Score"],v=o[i+"Name"],w=o[a+"Name"],_=o.phase===i+"-attack",z=o.phase===i+"-defense",L=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],I=L.map(N=>N.cardId),F=window.innerWidth>=700,R=o[i+"Subs"]||[],W=o["usedSubIds_"+i]||[],ce=R.filter(N=>!W.includes(N.cardId)),X=o["gcCardsFull_"+i]||[],H=o["usedGc_"+i]||[],V=X.filter(N=>!H.includes(N.id)),ee=o.boostOwner===i&&!o.boostUsed,le=!["GK","DEF","MIL","ATT"].some(N=>(m[N]||[]).some(re=>!re.used)),ue=[...f.MIL||[],...f.ATT||[]].filter(N=>!N.used),fe=_&&le&&ue.length===0?[...f.GK||[],...f.DEF||[]].filter(N=>!N.used).map(N=>N.cardId):[];function me(N,re,se){var _t,yi;const ye=N._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Xe=(ye==null?void 0:ye.name)||N.gc_type,et=(ye==null?void 0:ye.effect)||((_t=Ne[N.gc_type])==null?void 0:_t.desc)||"",jt=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,Ct=((yi=Ne[N.gc_type])==null?void 0:yi.icon)||"⚡",vt=Math.round(se*.22),lt=Math.round(se*.22),wt=se-vt-lt,Bt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${N.id}" data-gc-type="${N.gc_type}"
        style="box-sizing:border-box;width:${re}px;height:${se}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${vt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Bt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${re-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${wt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${jt?`<img src="${jt}" style="max-width:${re-10}px;max-height:${wt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(wt*.55)}px">${Ct}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(N,re){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${N}px;height:${re}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(re*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(re*.2)}px">⚡</div>
        <div style="font-size:${Math.round(re*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const je=(N,re)=>re?be(130,175):me(N,130,175),Pe=(N,re)=>re?be(68,95):me(N,68,95),qe=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Le=_?Te(i)?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${qe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:z?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,Ie=_&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':_||z?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Be=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(N=>`<div class="pvp-sub-btn" data-sub-id="${N.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(N,F?76:44,F?100:58)}</div>`).join("")}
    </div>`,Ge=_?"attack":z?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(f,o[i+"Formation"],Ge,I,300,300,fe)}
      </div>
    </div>`;function Ue(N){if(N.type==="duel"&&(N.homeTotal!=null||N.aiTotal!=null)){const re=(N.homeTotal||0)>=(N.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(N.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(N.homePlayers||[]).map(se=>nt(se)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${re?20:14}px;font-weight:900;color:${re?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${N.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${re?14:20}px;font-weight:900;color:${re?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${N.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(N.aiPlayers||[]).map(se=>nt(se)).join("")}
            </div>
          </div>
          ${N.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${N.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${N.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${N.type==="goal"?700:400};padding:3px 2px">${N.text||""}</div>`}const Ke=(()=>{var re,se;if(z&&((re=o.pendingAttack)!=null&&re.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(_&&((se=o.pendingAttack)!=null&&se.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",ye.total)}
        </div>`}const N=(o.log||[]).slice(-1)[0];return N?'<div style="padding:2px 4px">'+Ue(N)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ce=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Je(e),e.style.overflow="hidden",F?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ce}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Be}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Le}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${V.map(N=>je(N,!1)).join("")}
            ${ee?je(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ce}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(f,o[i+"Formation"],Ge,I,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${V.map(N=>Pe(N,!1)).join("")}
            ${ee?Pe(null,!0):""}
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
          <div>${Le}${Ie}</div>
        </div>
      </div>`;function Fe(){const N=e.querySelector(".match-screen");if(!N)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);N.style.height=re+"px",N.style.minHeight=re+"px",N.style.maxHeight=re+"px",N.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(Fe(),setTimeout(Fe,120),setTimeout(Fe,400),k||(k=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Fe),window.visualViewport.addEventListener("scroll",Fe)),window.addEventListener("resize",Fe)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(N=>{N.addEventListener("click",()=>{if(!_&&!z)return;const re=N.dataset.cardId,se=N.dataset.role,ye=(f[se]||[]).find(et=>et.cardId===re);if(!ye||ye.used)return;const Ye=fe.includes(re);if(_&&!["MIL","ATT"].includes(se)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Xe=We.findIndex(et=>et.cardId===re);Xe>-1?We.splice(Xe,1):We.length<3&&We.push({...ye,_role:se}),Z()})}),e.querySelectorAll(".match-used-hit").forEach(N=>{N.addEventListener("click",()=>C(N.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(N=>{N.addEventListener("click",()=>C())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>C()),e.querySelectorAll(".pvp-gc-mini").forEach(N=>{N.addEventListener("click",()=>O(N.dataset.gcId,N.dataset.gcType))}),(xt=e.querySelector("#pvp-boost-card"))==null||xt.addEventListener("click",()=>U()),(yt=e.querySelector("#pvp-action"))==null||yt.addEventListener("click",N=>{_?N.currentTarget.dataset.pass==="1"||!Te(i)?te():we():z&&_e()}),(ht=e.querySelector("#pvp-quit"))==null||ht.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(bt=e.querySelector("#pvp-view-opp"))==null||bt.addEventListener("click",()=>K()),(J=e.querySelector("#pvp-toggle-history"))==null||J.addEventListener("click",()=>oe()),T&&(clearInterval(T),T=null),(_||z)&&!b){let N=30,re=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=N+"s",se().style.color=re?"#ff4444":"#fff")};ye(),T=setInterval(()=>{N--,N<0?re?(clearInterval(T),T=null,_&&!Te(i)?te():de()):(re=!0,N=15,ye()):ye()},1e3)}}function ae(){Je(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await Q({phase:"midfield"})},5e3)}let pe=!1;function he(){if(pe)return;const f=o[i+"Team"].MIL||[],m=o[a+"Team"].MIL||[];function h(V){return V.reduce((ee,le)=>ee+ve(le,"MIL"),0)}function y(V){let ee=0;for(let le=0;le<V.length-1;le++){const ue=Qe(V[le],V[le+1]);ue==="#00ff88"?ee+=2:ue==="#FFD700"&&(ee+=1)}return ee}const v=h(f)+y(f),w=h(m)+y(m),_=v>=w;function z(V,ee,le){return`<div id="duel-row-${le}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ee}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((ue,fe)=>{const me=fe<V.length-1?Qe(ue,V[fe+1]):null,be=!me||me==="#ff3333"||me==="#cc2222",je=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${le}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ue,note:ve(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<V.length-1?`<div class="duel-link duel-link-${le}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${me}`}">
              ${je?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${je}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${le}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(V)} + ${y(V)} liens = <b style="color:#fff">${h(V)+y(V)}</b>
        </div>
      </div>`}Je(e),e.innerHTML=`
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
      ${z(f,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${z(m,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(V,ee)=>e.querySelectorAll(V).forEach((le,ue)=>{setTimeout(()=>{le.style.opacity="1",le.style.transform="translateY(0) scale(1)"},ee+ue*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,ee)=>setTimeout(()=>{V.style.opacity="1"},ee*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ee=>ee.style.opacity="1")},1250);function I(V,ee,le){const ue=document.getElementById(V);if(!ue)return;const fe=performance.now(),me=be=>{const je=Math.min(1,(be-fe)/le);ue.textContent=Math.round(ee*(1-Math.pow(1-je,3))),je<1?requestAnimationFrame(me):ue.textContent=ee};requestAnimationFrame(me)}setTimeout(()=>{I("pvp-score-me",v,800),I("pvp-score-opp",w,800)},1500);const F=o.p1Team.MIL||[],R=o.p2Team.MIL||[],W=h(F)+y(F),ce=h(R)+y(R),X=W>=ce?"p1":"p2";let H=o.boostValue;H==null&&(H=ui(),o.boostValue=H,o.boostOwner=X,o.boostUsed=!1),pe=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(_?"me":"opp")),ee=e.querySelector("#duel-row-"+(_?"opp":"me")),le=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),fe=_?le:ue,me=_?ue:le;fe&&(fe.style.fontSize="80px",fe.style.color=_?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(_?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),ee&&(ee.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var qe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const je=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Pe=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(_?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+je+Pe,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(qe=document.getElementById("pvp-start-match"))==null||qe.addEventListener("click",async()=>{const Le=X;await Q({phase:Le+"-attack",attacker:Le,round:1,boostValue:H,boostUsed:!1,boostOwner:Le})})},600)},700)},2800)}function xe(f,m,h,y,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const _=Array.from({length:10},(F,R)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${R%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][R%8]}</div>`).join(""),z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${_}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${m} – ${h}
      </div>
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(F=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${z[F.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${F.portrait?`<img src="${F.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(F.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let L=!1;const I=()=>{L||(L=!0,w.remove(),setTimeout(()=>v(),50))};w.addEventListener("click",I),setTimeout(I,3500)}function ge(f,m,h){var H,V;const y=(o.gcDefs||[]).find(ee=>{var le;return ee.name===f||((le=ee.name)==null?void 0:le.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||f,z=(y==null?void 0:y.effect)||((H=Ne[f])==null?void 0:H.desc)||"",L=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,I=((V=Ne[f])==null?void 0:V.icon)||"⚡",R=m===i?"Vous":o[m+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${R} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${I}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let ce=!1;const X=()=>{ce||(ce=!0,W.remove(),setTimeout(()=>h&&h(),50))};W.addEventListener("click",X),setTimeout(X,3e3)}function O(f,m){var W,ce,X,H;const y=(o["gcCardsFull_"+i]||[]).find(V=>V.id===f),v=y==null?void 0:y._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",z=(v==null?void 0:v.name)||m,L=(v==null?void 0:v.effect)||((W=Ne[m])==null?void 0:W.desc)||"Carte spéciale.",I=v!=null&&v.image_url?`/manager-wars/icons/${v.image_url}`:null,F=((ce=Ne[m])==null?void 0:ce.icon)||"⚡",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",R.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${_};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${_}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${F}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(R),(X=R.querySelector("#pvp-gc-back"))==null||X.addEventListener("click",()=>R.remove()),(H=R.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{R.remove(),Y(f,m)})}function U(){var y;const f=o[i+"Team"],m=Object.entries(f).flatMap(([v,w])=>(w||[]).filter(_=>!_.used).map(_=>({..._,_line:v})));if(!m.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(v=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",_=ve(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const w=v.dataset.cid,_=m.find(L=>L.cardId===w);if(!_)return;const z=(f[_._line]||[]).find(L=>L.cardId===w);z&&(z.boost=(z.boost||0)+o.boostValue),h.remove(),await Q({[i+"Team"]:f,boostUsed:!0})})})}function C(f=null){var ce,X;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],v=o.maxSubs||3;if(y.length>=v){p(`Maximum ${v} remplacements atteint`,"warning");return}const w=Object.entries(h).flatMap(([H,V])=>(V||[]).filter(ee=>ee.used).map(ee=>({...ee,_line:H}))),_=(o[i+"Subs"]||[]).filter(H=>!y.includes(H.cardId));if(!w.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!_.length){p("Aucun remplaçant disponible","warning");return}let z=Math.max(0,w.findIndex(H=>H.cardId===f));const L=((ce=w[z])==null?void 0:ce._line)||((X=w[z])==null?void 0:X.job);let I=Math.max(0,_.findIndex(H=>H.job===L)),F=!1;const R=document.createElement("div");R.id="pvp-sub-overlay",R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,be,je,Pe,qe,Le;const H=w[z],V=_[I],ee=Math.min(130,Math.round((window.innerWidth-90)/2)),le=Math.round(ee*1.35),ue=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;R.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${V?Ve({...V,used:!1,boost:0},ee,le):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(I>=_.length-1)}" ${I>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${_.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(z===0)}" ${z===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},ee,le):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(z>=w.length-1)}" ${z>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${z+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=R.querySelector("#psub-close"))==null||me.addEventListener("click",()=>R.remove()),(be=R.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{z>0&&(z--,W())}),(je=R.querySelector("#pout-down"))==null||je.addEventListener("click",()=>{z<w.length-1&&(z++,W())}),(Pe=R.querySelector("#pin-up"))==null||Pe.addEventListener("click",()=>{I>0&&(I--,W())}),(qe=R.querySelector("#pin-down"))==null||qe.addEventListener("click",()=>{I<_.length-1&&(I++,W())});const fe=(Ie,Be,Ge,Oe)=>{const Ue=R.querySelector("#"+Ie);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",Ce=>{Ke=Ce.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ce=>{const Fe=Ce.changedTouches[0].clientY-Ke;if(Math.abs(Fe)<30)return;const Ze=Be();Fe<0&&Ze<Oe-1?(Ge(Ze+1),W()):Fe>0&&Ze>0&&(Ge(Ze-1),W())},{passive:!0})};fe("pin-panel",()=>I,Ie=>I=Ie,_.length),fe("pout-panel",()=>z,Ie=>z=Ie,w.length),(Le=R.querySelector("#psub-confirm"))==null||Le.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),F)return;F=!0;const Be=w[z],Ge=_[I];if(!Be||!Ge)return;const Oe=Be._line,Ue=(h[Oe]||[]).findIndex(Fe=>Fe.cardId===Be.cardId);if(Ue===-1){p("Erreur : joueur introuvable","error"),R.remove();return}const Ke={...Ge,_line:Oe,position:Be.position,used:!1,boost:0};h[Oe].splice(Ue,1,Ke);const Ce=[...y,Ge.cardId];R.remove(),q(Be,Ge,async()=>{await Q({[i+"Team"]:h,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:Ce})})})}document.body.appendChild(R),W()}function q(f,m,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(L,I,F)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${I};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${F}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[L.job]||"#555"};border:3px solid ${I};position:relative;overflow:hidden;margin:0 auto">
        ${ze(L)?`<img src="${ze(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let _=!1;const z=()=>{_||(_=!0,v.remove(),setTimeout(()=>h(),50))};v.addEventListener("click",z),setTimeout(z,2200)}function K(){var m;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(m=f.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>f.remove())}function oe(){var h;const f=o.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(m),(h=m.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>m.remove())}async function te(){if(o.phase!==i+"-attack")return;const f=i==="p1"?"p2":"p1",m=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=$e(o),v=Te(f),w=y||!v?"finished":f+"-attack";await Q({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:w,attacker:f,round:m,log:h}),w==="finished"&&await Re(o)}async function we(){const f=o[i+"Team"],m=!["GK","DEF","MIL","ATT"].some(w=>(o[a+"Team"][w]||[]).some(_=>!_.used)),h=(o["selected_"+i]||[]).map(w=>{const _=(f[w._role]||[]).find(W=>W.cardId===w.cardId)||w,z=m&&["GK","DEF"].includes(w._role),L=f[w._role]||[],I=L.findIndex(W=>W.cardId===w.cardId),F=ot(L.length),R=I>=0?F[I]:_._col??1;return{..._,_line:w._role,_col:R,...z?{note_a:Math.max(1,Number(_.note_a)||0)}:{}}});if(!h.length)return;const y=Kt(h,o.modifiers[i]||{});ne(i,h.map(w=>w.cardId)),h.forEach(w=>{const _=(f[w._role]||[]).find(z=>z.cardId===w.cardId);_&&(_.used=!0)}),o["selected_"+i]=[],Z();const v=[...o.log||[]];if(m){const w=(o[i+"Score"]||0)+1,_=h.map(R=>({name:R.name,note:ve(R,R._line||"ATT"),portrait:ze(R),job:R.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:_,homeTotal:y.total,aiTotal:0});const z=(o.round||0)+1,L=i==="p1"?"p2":"p1",I={...o,[i+"Team"]:f,[i+"Score"]:w},F=$e(I);D.add(z),xe(_,w,o[a+"Score"]||0,!0,async()=>{await Q({[i+"Team"]:f,[i+"Score"]:w,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:F?"finished":L+"-attack",attacker:L,round:z,log:v}),F&&await Re({...o,[i+"Score"]:w})});return}v.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await Q({[i+"Team"]:f,[a+"Team"]:o[a+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:v})}async function _e(){const f=o[i+"Team"],m=(o["selected_"+i]||[]).map(H=>{const V=(f[H._role]||[]).find(me=>me.cardId===H.cardId)||H,ee=f[H._role]||[],le=ee.findIndex(me=>me.cardId===H.cardId),ue=ot(ee.length),fe=le>=0?ue[le]:V._col??1;return{...V,_line:H._role,_col:fe}}),h=Vt(m,o.modifiers[i]||{});ne(i,m.map(H=>H.cardId)),m.forEach(H=>{const V=(f[H._role]||[]).find(ee=>ee.cardId===H.cardId);V&&(V.used=!0)}),o["selected_"+i]=[],Z();const y=Yt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),v=o.pendingAttack.side,w=y==="attack"||(y==null?void 0:y.goal),_=v==="p1"?"p2":"p1",z=(o.round||0)+1,L=(o.pendingAttack.players||[]).map(H=>({name:H.name,note:ve(H,H._line||"ATT"),portrait:ze(H),job:H.job})),I=[...o.log||[]];I.push({type:"duel",isGoal:w,homeScored:w&&v===i,text:w?`⚽ BUT de ${o[v+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:L,aiPlayers:m.map(H=>({name:H.name,note:ve(H,H._line||"DEF"),portrait:ze(H),job:H.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const F=w?(o[v+"Score"]||0)+1:o[v+"Score"]||0,R={...o,[i+"Team"]:f,[v+"Score"]:F},W=$e(R),ce=W?"finished":_+"-attack",X=async()=>{await Q({[i+"Team"]:f,[a+"Team"]:o[a+"Team"],[v+"Score"]:F,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:ce,attacker:_,round:z,log:I}),(ce==="finished"||W)&&await Re({...o,[v+"Score"]:F})};if(w){const H=v===i,V=H?F:o[i+"Score"]||0,ee=H?o[a+"Score"]||0:F;D.add(z),xe(L,V,ee,H,X)}else await X()}function ke(f){return["MIL","ATT"].some(m=>(f[m]||[]).some(h=>!h.used))}function Me(f){return["GK","DEF","MIL","ATT"].some(m=>(f[m]||[]).some(h=>!h.used))}function Ee(f){return Me(f)&&!ke(f)}function Te(f){const m=o[f+"Team"],h=o[(f==="p1"?"p2":"p1")+"Team"];return!!(ke(m)||!Me(h)&&Ee(m))}function $e(f){const m=["MIL","ATT"].some(I=>(f.p1Team[I]||[]).some(F=>!F.used)),h=["MIL","ATT"].some(I=>(f.p2Team[I]||[]).some(F=>!F.used)),y=Me(f.p1Team),v=Me(f.p2Team);return!m&&!(!v&&y)&&(!h&&!(!y&&v))}function De(f){const m=f.p1Score||0,h=f.p2Score||0;return m===h?null:m>h?x.home_id:x.away_id}async function Re(f){try{const m=De(f),h=m?x.home_id===m?x.away_id:x.home_id:null;await $.from("matches").update({status:"finished",winner_id:m,home_score:f.p1Score||0,away_score:f.p2Score||0}).eq("id",n),m&&h&&Ki(m,h).catch(()=>{})}catch(m){console.error("[PvP] finishMatch:",m)}}function A(){var v;const f=o[i+"Score"],m=o[a+"Score"],h=f>m,y=f===m;Je(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{$.removeChannel(P)}catch{}He(e),s("home")})}Z()}const Pt="#1A6B3C",qo="#D4A017";async function Do(e,t){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await ri(e,t)}async function ri(e,t){var i;const{state:n,toast:r}=t,c=n.profile.id,{data:l}=await $.from("mini_league_members").select("league_id, mini_leagues(*)").eq("user_id",c),{data:d}=await $.from("mini_leagues").select("*, mini_league_members(count)").eq("type","public").eq("status","waiting").order("created_at",{ascending:!1}).limit(20),s=(l||[]).map(a=>a.mini_leagues).filter(Boolean),p=(d||[]).filter(a=>!s.find(u=>u.id===a.id));e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>

    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">
      ${s.length?`
        <div>
          <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Mes Mini Leagues</div>
          ${s.map(a=>Mi(a,c,!0)).join("")}
        </div>`:""}

      ${p.length?`
        <div>
          <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Rejoindre une Mini League</div>
          ${p.map(a=>Mi(a,c,!1)).join("")}
        </div>`:""}

      ${!s.length&&!p.length?`
        <div style="text-align:center;padding:40px;color:#aaa">
          <div style="font-size:48px;margin-bottom:12px">🏆</div>
          <div style="font-size:14px">Aucune Mini League disponible.</div>
          <div style="font-size:12px;margin-top:4px">Crée la première !</div>
        </div>`:""}
    </div>
  </div>`,(i=document.getElementById("ml-create-btn"))==null||i.addEventListener("click",()=>Go(e,t)),e.querySelectorAll("[data-league-id]").forEach(a=>{a.addEventListener("click",()=>St(e,t,a.dataset.leagueId))}),e.querySelectorAll("[data-join]").forEach(a=>{a.addEventListener("click",u=>{u.stopPropagation(),un(e,t,a.dataset.join,a.dataset.type)})})}function Mi(e,t,n){const r={waiting:"🟡 En attente",active:"🟢 En cours",finished:"✅ Terminée"},c=e.mode==="aller-retour"?"Aller-Retour":"Aller";return`
  <div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <div style="font-size:15px;font-weight:900">${e.name}</div>
      <span style="font-size:11px;color:#888">${r[e.status]||e.status}</span>
    </div>
    <div style="display:flex;gap:12px;font-size:12px;color:#666;margin-bottom:${!n&&e.status==="waiting"?"10":"0"}px">
      <span>🔒 ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${c}</span>
      <span>👥 max ${e.max_players}</span>
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${!n&&e.status==="waiting"?`
    <button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%">Rejoindre</button>`:""}
  </div>`}function Go(e,t){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",n.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
      <div style="padding:16px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:17px;font-weight:900">🏆 Créer une Mini League</div>
        <button id="ml-form-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:14px">
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOM *</label>
          <input id="ml-name" placeholder="Ex: Ligue des Champions" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOMBRE DE JOUEURS MAX</label>
          <input id="ml-max" type="number" min="3" max="8" value="6" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">TYPE</label>
          <div style="display:flex;gap:8px">
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-type" value="public" checked> Publique
            </label>
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-type" value="private"> Privée (MDP)
            </label>
          </div>
        </div>
        <div id="ml-pwd-block" style="display:none">
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MOT DE PASSE</label>
          <input id="ml-pwd" type="password" placeholder="Mot de passe..." style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MODE</label>
          <div style="display:flex;gap:8px">
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-mode" value="aller" checked> Aller
            </label>
            <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer">
              <input type="radio" name="ml-mode" value="aller-retour"> Aller-Retour
            </label>
          </div>
        </div>
        <button id="ml-create-confirm" class="btn btn-primary" style="width:100%;padding:12px;font-size:15px">🚀 Créer la Mini League</button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#ml-form-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",r=>{r.target===n&&n.remove()}),n.querySelectorAll('input[name="ml-type"]').forEach(r=>{r.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=r.value==="private"?"block":"none"})}),n.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var u,g,x,M;const{toast:r}=t,c=document.getElementById("ml-name").value.trim(),l=parseInt(document.getElementById("ml-max").value)||6,d=((u=n.querySelector('input[name="ml-type"]:checked'))==null?void 0:u.value)||"public",s=((g=n.querySelector('input[name="ml-mode"]:checked'))==null?void 0:g.value)||"aller",p=((M=(x=document.getElementById("ml-pwd"))==null?void 0:x.value)==null?void 0:M.trim())||null;if(!c){r("Le nom est obligatoire","error");return}if(d==="private"&&!p){r("Mot de passe requis","error");return}const{data:i,error:a}=await $.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:d,password:p,mode:s,max_players:l}).select().single();if(a){r("Erreur : "+a.message,"error");return}await $.from("mini_league_members").insert({league_id:i.id,user_id:t.state.profile.id}),n.remove(),r("Mini League créée !","success"),St(e,t,i.id)})}async function un(e,t,n,r){const{toast:c}=t;if(r==="private"){const d=prompt("Mot de passe de la Mini League :");if(d===null)return;const{data:s}=await $.from("mini_leagues").select("password,status,max_players").eq("id",n).single();if(!s){c("Mini League introuvable","error");return}if(s.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}if(s.password!==d){c("Mot de passe incorrect","error");return}}const{error:l}=await $.from("mini_league_members").insert({league_id:n,user_id:t.state.profile.id});if(l){c("Erreur : "+l.message,"error");return}c("Tu as rejoint la Mini League !","success"),St(e,t,n)}async function St(e,t,n){var o,b,E,T;const{state:r,toast:c,navigate:l}=t,d=r.profile.id,[{data:s},{data:p},{data:i}]=await Promise.all([$.from("mini_leagues").select("*").eq("id",n).single(),$.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",n),$.from("mini_league_matches").select("*").eq("league_id",n).order("matchday").order("created_at")]);if(!s){c("Mini League introuvable","error"),await ri(e,t);return}const a=(p||[]).some(k=>k.user_id===d),u=s.creator_id===d,g=(p||[]).map(k=>k.user).filter(Boolean),x=Ho(g,i||[]),M=(i||[]).filter(k=>k.matchday===s.current_day);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;padding:0">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${s.name}</div>
        <div style="font-size:11px;color:#888">${s.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${s.max_players} joueurs · ${s.type==="private"?"🔒 Privée":"🌐 Publique"}</div>
      </div>
      <span style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:12px;background:${s.status==="active"?"#d1fae5":s.status==="finished"?"#f3e8ff":"#fef9c3"};color:${s.status==="active"?"#166534":s.status==="finished"?"#6b21a8":"#854d0e"}">
        ${s.status==="waiting"?"En attente":s.status==="active"?`J${s.current_day}/${s.total_days}`:"Terminée"}
      </span>
    </div>

    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      <!-- LOBBY (en attente) -->
      ${s.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:12px">👥 Joueurs (${g.length}/${s.max_players})</div>
        ${g.map(k=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${k.club_color2||Pt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${k.club_color1||"#fff"}">
              ${(k.pseudo||"?").slice(0,2).toUpperCase()}
            </div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">${k.club_name||k.pseudo}</div>
              <div style="font-size:11px;color:#999">@${k.pseudo}</div>
            </div>
            ${k.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑 Créateur</span>':""}
          </div>`).join("")}
        ${u&&g.length>=2?`
          <button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">
            🚀 Lancer la Mini League (${g.length} joueurs)
          </button>`:""}
        ${a?"":'<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre</button>'}
        ${a&&!u?'<div style="text-align:center;font-size:12px;color:#aaa;margin-top:10px">En attente du créateur pour lancer la partie...</div>':""}
      </div>`:""}

      <!-- JOURNÉE EN COURS -->
      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${M.map(k=>Si(k,g,d,a)).join("")}
        ${u&&M.every(k=>k.status==="finished"||k.status==="bye")&&s.current_day<s.total_days?`
          <button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>`:""}
      </div>`:""}

      <!-- CLASSEMENT -->
      ${(s.status==="active"||s.status==="finished")&&x.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
              <th style="text-align:left;padding:6px 0">#</th>
              <th style="text-align:left;padding:6px 0">Club</th>
              <th style="text-align:center;padding:6px 4px">J</th>
              <th style="text-align:center;padding:6px 4px">G</th>
              <th style="text-align:center;padding:6px 4px">N</th>
              <th style="text-align:center;padding:6px 4px">P</th>
              <th style="text-align:center;padding:6px 4px">BP</th>
              <th style="text-align:center;padding:6px 4px">BC</th>
              <th style="text-align:center;padding:6px 4px">DB</th>
              <th style="text-align:center;padding:6px 4px;font-weight:900">PTS</th>
            </tr>
          </thead>
          <tbody>
            ${x.map((k,D)=>`
              <tr style="border-bottom:1px solid #f5f5f5;${k.userId===d?"background:#f0fdf4;":""}">
                <td style="padding:8px 4px 8px 0;font-weight:700;color:${D===0?qo:D<3?Pt:"#555"}">${D+1}</td>
                <td style="padding:8px 4px">
                  <div style="font-weight:700;font-size:12px">${k.clubName}</div>
                  <div style="font-size:10px;color:#999">@${k.pseudo}</div>
                </td>
                <td style="text-align:center;padding:8px 4px">${k.played}</td>
                <td style="text-align:center;padding:8px 4px">${k.won}</td>
                <td style="text-align:center;padding:8px 4px">${k.drawn}</td>
                <td style="text-align:center;padding:8px 4px">${k.lost}</td>
                <td style="text-align:center;padding:8px 4px">${k.goalsFor}</td>
                <td style="text-align:center;padding:8px 4px">${k.goalsAgainst}</td>
                <td style="text-align:center;padding:8px 4px;color:${k.goalDiff>=0?Pt:"#cc2222"}">${k.goalDiff>=0?"+":""}${k.goalDiff}</td>
                <td style="text-align:center;padding:8px 4px;font-weight:900;font-size:15px">${k.points}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`:""}

      <!-- HISTORIQUE JOURNÉES -->
      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:s.current_day-1},(k,D)=>D+1).reverse().map(k=>{const D=(i||[]).filter(S=>S.matchday===k);return`<div style="margin-bottom:10px">
            <div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${k}</div>
            ${D.map(S=>Si(S,g,d,!1,!0)).join("")}
          </div>`}).join("")}
      </div>`:""}

    </div>
  </div>`,(o=document.getElementById("ml-back"))==null||o.addEventListener("click",()=>ri(e,t)),(b=document.getElementById("ml-start-btn"))==null||b.addEventListener("click",()=>No(e,t,s,g)),(E=document.getElementById("ml-next-day"))==null||E.addEventListener("click",()=>Ro(e,t,n)),(T=document.getElementById("ml-join-now"))==null||T.addEventListener("click",()=>un(e,t,n,s.type)),e.querySelectorAll("[data-play-match]").forEach(k=>{k.addEventListener("click",()=>{const D=M.find(S=>S.id===k.dataset.playMatch);D&&Oo(e,t,D,s)})})}function Si(e,t,n,r,c=!1){const l=u=>t.find(g=>g.id===u);if(e.is_bye){const u=l(e.home_id);return`<div style="padding:8px 10px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">
      🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} est exempté(e) cette journée
    </div>`}const d=l(e.home_id),s=l(e.away_id),p=e.home_id===n||e.away_id===n,i=p&&e.status==="pending"&&r&&!c,a=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    <div style="font-size:14px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Pt:"#999"}">${a}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${i?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽ Jouer</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function No(e,t,n,r){const{toast:c}=t,l=Po(r.map(i=>i.id),n.mode),d=l.length,s=[];l.forEach((i,a)=>{i.forEach(u=>{s.push({league_id:n.id,matchday:a+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})})});const{error:p}=await $.from("mini_league_matches").insert(s);if(p){c("Erreur génération calendrier : "+p.message,"error");return}await $.from("mini_leagues").update({status:"active",current_day:1,total_days:d}).eq("id",n.id),c("Mini League lancée ! Journée 1 commence.","success"),St(e,t,n.id)}function Po(e,t){const r=e.length%2===0?[...e]:[...e,null],c=r.length,l=c-1,d=[];let s=r.slice(1);for(let p=0;p<l;p++){const i=[],a=[r[0],...s];for(let u=0;u<c/2;u++){const g=a[u],x=a[c-1-u];g===null?i.push({bye:x}):x===null?i.push({bye:g}):i.push({home:g,away:x})}d.push(i),s=[s[s.length-1],...s.slice(0,-1)]}if(t==="aller-retour"){const p=d.map(i=>i.map(a=>a.bye?a:{home:a.away,away:a.home}));return[...d,...p]}return d}async function Ro(e,t,n){const{data:r}=await $.from("mini_leagues").select("current_day,total_days").eq("id",n).single(),c=(r.current_day||0)+1,l=c>(r.total_days||0);await $.from("mini_leagues").update({current_day:l?r.total_days:c,status:l?"finished":"active"}).eq("id",n),t.toast(l?"🏆 Mini League terminée !":`Journée ${c} commencée !`,"success"),St(e,t,n)}async function Oo(e,t,n,r){const{navigate:c,toast:l}=t;await $.from("mini_league_matches").update({status:"playing"}).eq("id",n.id),c("match",{matchMode:"random",miniLeagueMatchId:n.id,miniLeagueId:r.id,leagueContainer:e,leagueCtx:t})}function Ho(e,t){const n={};return e.forEach(r=>{n[r.id]={userId:r.id,pseudo:r.pseudo,clubName:r.club_name||r.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(r=>r.status==="finished"&&!r.is_bye&&r.home_score!=null).forEach(r=>{const c=n[r.home_id],l=n[r.away_id];!c||!l||(c.played++,l.played++,c.goalsFor+=r.home_score,c.goalsAgainst+=r.away_score,l.goalsFor+=r.away_score,l.goalsAgainst+=r.home_score,r.home_score>r.away_score?(c.won++,c.points+=3,l.lost++):r.home_score<r.away_score?(l.won++,l.points+=3,c.lost++):(c.drawn++,c.points++,l.drawn++,l.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,l.goalDiff=l.goalsFor-l.goalsAgainst)}),Object.values(n).sort((r,c)=>c.points-r.points||c.goalDiff-r.goalDiff||c.goalsFor-r.goalsFor)}const Uo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ct(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ji(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Gt(e,t){const r=t?Uo[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${r};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Ci(e){const n=Ht(e);return n?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${n}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Bi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function Ko(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await xi(e,t)}async function xi(e,t){const{state:n,toast:r}=t,{data:c}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:l}=await $.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",n.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(c||[]).filter(o=>o.seller_id!==n.profile.id),s=l||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${d.length} carte(s) en vente · ${(n.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${s.length})</button>
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
      <select id="flt-rarity" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:#fff">
        <option value="">Toutes raretés</option>
        <option value="normal">Normal</option>
        <option value="pepite">Pépite</option>
        <option value="papyte">Papyte</option>
        <option value="legende">Légende</option>
      </select>
      <input id="flt-note1"   placeholder="★ Note min"    type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-note2"   placeholder="☆ Note 2 min" type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
    </div>

    <div id="mkt-content" style="padding:10px 16px;display:flex;flex-direction:column;gap:8px"></div>
  </div>`;let p="buy";const i=()=>{var o,b,E,T,k,D,S;return{name:(((o=document.getElementById("flt-name"))==null?void 0:o.value)||"").toLowerCase().trim(),club:(((b=document.getElementById("flt-club"))==null?void 0:b.value)||"").toLowerCase().trim(),country:(((E=document.getElementById("flt-country"))==null?void 0:E.value)||"").toLowerCase().trim(),job:((T=document.getElementById("flt-job"))==null?void 0:T.value)||"",rarity:((k=document.getElementById("flt-rarity"))==null?void 0:k.value)||"",note1:parseInt((D=document.getElementById("flt-note1"))==null?void 0:D.value)||0,note2:parseInt((S=document.getElementById("flt-note2"))==null?void 0:S.value)||0}};function a(o){const b=i();return o.filter(E=>{var Q,de;const T=(Q=E.card)==null?void 0:Q.player;if(!T)return!1;const k=`${T.firstname} ${T.surname_encoded}`.toLowerCase(),D=(((de=T.clubs)==null?void 0:de.encoded_name)||"").toLowerCase(),S=(T.country_code||"").toLowerCase(),B=ct(T,T.job),P=T.job2?ct(T,T.job2):0;return!(b.name&&!k.includes(b.name)||b.club&&!D.includes(b.club)||b.country&&!S.includes(b.country)||b.job&&T.job!==b.job||b.rarity&&T.rarity!==b.rarity||b.note1&&B<b.note1||b.note2&&P<b.note2)})}function u(o){var D,S,B;const b=(D=o.card)==null?void 0:D.player;if(!b)return"";const E=ct(b,b.job),T=b.job2?ct(b,b.job2):0,k=(n.profile.credits||0)>=o.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${ji(b.rarity)}
      ${Gt(E,b.job)}
      ${Gt(T,b.job2||null)}
      ${Ci(b.country_code)}
      ${Bi((S=b.clubs)==null?void 0:S.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.firstname} ${b.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((B=o.seller)==null?void 0:B.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${o.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${o.id}" ${k?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${k?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function g(o){var D,S,B;const b=(D=o.card)==null?void 0:D.player;if(!b)return"";const E=ct(b,b.job),T=b.job2?ct(b,b.job2):0,k=o.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${k?"opacity:0.7":""}">
      ${ji(b.rarity)}
      ${Gt(E,b.job)}
      ${Gt(T,b.job2||null)}
      ${Ci(b.country_code)}
      ${Bi((S=b.clubs)==null?void 0:S.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.firstname} ${b.surname_encoded}</div>
        <div style="font-size:10px;color:${k?"#22c55e":"#999"};margin-top:1px">
          ${k?`✅ Vendu à ${((B=o.buyer)==null?void 0:B.pseudo)||"—"} · ${o.sold_at?new Date(o.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(o.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${o.price.toLocaleString("fr")}</div>
        ${k?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${o.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const o=document.getElementById("mkt-content"),b=document.getElementById("mkt-filters");if(o){if(b.style.display=p==="buy"?"flex":"none",p==="buy"){const E=a(d);o.innerHTML=E.length?E.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const E=s.filter(k=>k.status==="active").sort((k,D)=>new Date(D.listed_at)-new Date(k.listed_at)),T=s.filter(k=>k.status==="sold").sort((k,D)=>new Date(D.sold_at||D.listed_at)-new Date(k.sold_at||k.listed_at));o.innerHTML=(E.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${E.length})</div>`+E.map(g).join(""):"")+(T.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${T.length})</div>`+T.map(g).join(""):"")+(!E.length&&!T.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}o.querySelectorAll("[data-buy]").forEach(E=>E.addEventListener("click",()=>Vo(E.dataset.buy,d,e,t))),o.querySelectorAll("[data-cancel]").forEach(E=>E.addEventListener("click",()=>Wo(E.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{p=o.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(b=>{const E=b===o;b.style.background=E?"var(--green)":"#fff",b.style.color=E?"#fff":"var(--gray-600)",b.style.borderColor=E?"var(--green)":"var(--gray-200)"}),x()})});let M;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(o=>{var b;(b=document.getElementById(o))==null||b.addEventListener("input",()=>{clearTimeout(M),M=setTimeout(x,250)})}),x()}async function Vo(e,t,n,r){const{state:c,toast:l,refreshProfile:d}=r,s=t.find(a=>a.id===e);if(!s)return;const p=s.price;if((c.profile.credits||0)<p){l("Crédits insuffisants","error");return}Yo(s,async()=>{const{error:a}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(a){l("Erreur achat : "+a.message,"error");return}await d();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l("✅ Carte achetée !","success"),await xi(n,r)})}function Yo(e,t){var d;const n=(d=e.card)==null?void 0:d.player,r=n?`${n.firstname} ${n.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${r} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const l=s=>{c.remove(),s&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>l(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>l(!0)),c.addEventListener("click",s=>{s.target===c&&l(!1)})}async function Wo(e,t,n){const{toast:r}=n,{data:c}=await $.from("market_listings").select("card_id").eq("id",e).single();if(await $.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:l}=await $.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");l||await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}r("Annonce retirée","success"),xi(t,n)}async function Jo(e,{state:t,navigate:n,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((l,d)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${l.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${d+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${l.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${l.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${l.trophies_top1} 🥈${l.trophies_top2} 🥉${l.trophies_top3}</div>
              <div style="color:var(--gray-600)">${l.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function Xo(e,{state:t,navigate:n,toast:r}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(l||[]).filter(a=>a.status==="finished"),p=(l||[]).filter(a=>a.status==="in_progress");function i(a){const u=a.home_id===c.id;u?a.home_score:a.away_score,u?a.away_score:a.home_score;const g=a.winner_id===c.id,x=a.home_score===a.away_score&&a.status==="finished",M=a.status!=="finished"?"…":x?"N":g?"V":"D",o=a.status!=="finished"||x?"#888":g?"#1A6B3C":"#c0392b";let b=d[a.mode]||a.mode;a.away_id===null&&!b.startsWith("IA")&&(b="IA");const T=a.home_id===c.id?a.away:a.home;let k;a.away_id===null?k=b:T?k=`${T.club_name||T.pseudo} (${T.pseudo})`:k="Adversaire";let D="";a.status==="in_progress"&&Date.now()-new Date(a.created_at).getTime()>3600*1e3&&(D=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const S=new Date(a.created_at),B=S.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+S.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),P=a.status==="finished"?`${a.home_score} - ${a.away_score}`:`${a.home_score||0} - ${a.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${k}${D}</div>
        <div style="font-size:11px;color:var(--gray-600)">${b} · ${B}${a.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${P}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${M}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(l||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(i).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(i).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}mn(yn);const Ae={user:null,profile:null,page:"home",params:{}};function kt(e,t="info",n=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},n))}function Zo(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ai(){document.getElementById("modal-overlay").classList.add("hidden")}async function Et(){if(!Ae.user)return;const{data:e}=await $.from("users").select("*").eq("id",Ae.user.id).single();e&&(Ae.profile=e)}function Rt(e,t={}){Ae.page=e,Ae.params=t,fn()}async function fn(){var r,c;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===Ae.page)});const t=document.getElementById("nav-credits");t&&Ae.profile&&(t.textContent=`💰 ${(Ae.profile.credits||0).toLocaleString("fr")}`);const n={state:Ae,navigate:Rt,toast:kt,openModal:Zo,closeModal:ai,refreshProfile:Et};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ae.page){case"home":await wi(e,n);break;case"collection":await Gn(e,n);break;case"decks":await ei(e,n);break;case"boosters":await Qn(e,n);break;case"match":{const l=Ae.params&&Ae.params.matchMode||"vs_ai_easy";l==="random"?await cn(e,n):l==="friend"?await Co(e,n,(r=Ae.params)==null?void 0:r.friendId,(c=Ae.params)==null?void 0:c.friendName):await mo(e,n);break}case"market":await Ko(e,n);break;case"rankings":await Jo(e,n);break;case"matches":await Xo(e,n);break;case"friends":await kn(e,n);break;case"mini-league":await Do(e,n);break;default:await wi(e,n)}}function Qo(){var r;const e=document.getElementById("app"),t=Ae.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${n}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(t.credits||0).toLocaleString("fr")}</div>
        <button id="journal-btn" title="Journal des mises à jour" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          📰
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),Rt(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Rt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Rt("boosters")),(r=document.getElementById("journal-btn"))==null||r.addEventListener("click",()=>er())}async function er(){const{data:e}=await $.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const n=(e||[]).map(r=>{const c=new Date(r.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${r.image_url?`<img src="${r.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${c}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${r.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${r.description}</div>
    </div>`}).join("");t.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${n||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()})}async function tr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ai()}),document.getElementById("modal-close").addEventListener("click",ai);const{data:{session:e}}=await $.auth.getSession();if(!e){Fi(),hi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt});return}Ae.user=e.user,await Et(),Fi();try{const{data:n}=await $.from("formation_links_overrides").select("formation, links"),r={};(n||[]).forEach(c=>{r[c.formation]=c.links}),xn(r)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!Ae.profile){hn(document.getElementById("app"),{state:Ae,navigate:async()=>{await Et(),Qt()},toast:kt,refreshProfile:Et});return}const t=Array.isArray(Ae.profile.pending_boosters)?Ae.profile.pending_boosters:[];if(!Ae.profile.onboarding_done&&t.length>0){po(document.getElementById("app"),{state:Ae,navigate:()=>Qt(),toast:kt,refreshProfile:Et});return}Qt(),$.auth.onAuthStateChange(async(n,r)=>{n==="SIGNED_OUT"&&(Ae.user=null,Ae.profile=null,document.getElementById("app").innerHTML="",hi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt}))})}function ir(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Jt(){const e=document.getElementById("app");e&&(e.style.height=ir()+"px")}window.addEventListener("resize",Jt);window.addEventListener("orientationchange",()=>setTimeout(Jt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Jt);function Qt(){const e=()=>{var n;(n=Ae.user)!=null&&n.id&&$.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ae.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Jt(),Qo(),fn()}function Fi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function gn(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}tr().catch(e=>{console.error("Échec du démarrage:",e),gn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&gn("Le serveur met trop de temps à répondre.")},12e3);
