import{s as E,F as mi,h as Gt,j as Ui,l as at,i as An,k as Tn,b as Sn}from"./formation-links-DJC25wD7.js";function Ai(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,l=document.getElementById("login-error");if(l.textContent="",!a||!c){l.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:d}=await E.auth.signInWithPassword({email:a,password:c});if(s.textContent="Se connecter",s.disabled=!1,d){l.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,l=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!c||!l){s.textContent="Remplissez tous les champs.";return}if(c.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==l){s.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:u}=await E.auth.signUp({email:a,password:c});if(d.textContent="Créer mon compte",d.disabled=!1,u){s.textContent=u.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function Ln(e,{state:t,navigate:i,toast:a,refreshProfile:c}){let l="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${l}">
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
  `;function d(){var L;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),g=((L=document.getElementById("setup-club"))==null?void 0:L.value)||"MW",w=g.trim().split(" ").filter(Boolean),$=w.length>=2?(w[0][0]+w[1][0]).toUpperCase():g.slice(0,2).toUpperCase();n&&(n.style.background=s,n.style.borderColor=l),o&&(o.textContent=$,o.style.color=l)}document.getElementById("color1").addEventListener("input",n=>{l=n.target.value,document.getElementById("swatch1").style.background=l,d()}),document.getElementById("color2").addEventListener("input",n=>{s=n.target.value,document.getElementById("swatch2").style.background=s,d()});function u(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:g}=await E.from("users").select("id").eq("pseudo",n).maybeSingle();if(g){o.textContent="Ce pseudo est déjà pris.";return}u(2)}),document.getElementById("step2-back").addEventListener("click",()=>u(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:g}=await E.from("users").select("id").eq("club_name",n).maybeSingle();if(g){o.textContent="Ce nom de club est déjà pris.";return}u(3)}),document.getElementById("step3-back").addEventListener("click",()=>u(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),g=document.getElementById("step3-error"),w=document.getElementById("step3-finish");g.textContent="",w.disabled=!0,w.textContent="Création en cours…";try{const{error:$}=await E.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:l,club_color2:s,credits:1e4});if($)throw $;await zn(t.user.id),await c(),a(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch($){g.textContent=$.message,w.disabled=!1,w.textContent="🚀 Créer mon profil !"}})}async function zn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const In="modulepreload",Mn=function(e){return"/manager-wars/"+e},Ti={},Vi=function(t,i,a){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.allSettled(i.map(u=>{if(u=Mn(u),u in Ti)return;Ti[u]=!0;const n=u.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${o}`))return;const g=document.createElement("link");if(g.rel=n?"stylesheet":In,n||(g.as="script"),g.crossOrigin="",g.href=u,d&&g.setAttribute("nonce",d),document.head.appendChild(g),n)return new Promise((w,$)=>{g.addEventListener("load",w),g.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return c.then(s=>{for(const d of s||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})},Ft="#1A6B3C",Bt="#cc2222",jn="#D4A017",Si="#888";async function Cn(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Ki(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Fn(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Yi(i,a,null,t))}async function Ki(e,t,i={}){const{navigate:a}=i,c=e.user.id,{data:l,error:s}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:d}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),u=document.getElementById("pending-badge");u&&(d>0?(u.style.display="flex",u.textContent=d):u.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(s){console.error("[Friends] Erreur:",s),n.innerHTML=`<div style="color:${Bt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const o=(l||[]).map($=>$.requester_id===c?$.addressee_id:$.requester_id);let g={};if(o.length){const{data:$}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);($||[]).forEach(L=>{g[L.id]=L})}const w=(l||[]).map($=>({friendshipId:$.id,friend:g[$.requester_id===c?$.addressee_id:$.requester_id]||{pseudo:"?"}}));if(!w.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${w.length} ami${w.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${w.map(({friendshipId:$,friend:L})=>qn(L,$)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach($=>{$.addEventListener("click",()=>Bn(e,$.dataset.stats,$.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach($=>{$.addEventListener("click",()=>{const L=$.dataset.friendId,r=$.dataset.friendName;console.log("[Friends] clic match",{fid:L,fname:r,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:L,friendName:r}):t("Erreur navigation","error")})})}function qn(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||i).slice(0,2).toUpperCase(),l=e.club_color2||Ft,s=e.club_color1||"#ffffff",d=e.last_seen_at?new Date(e.last_seen_at):null,u=d&&Date.now()-d.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${l};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${u?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${u?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${u?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${jn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Fn(e,t){const i=xi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Bt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${yi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),l=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",l),i.addEventListener("click",s=>{s.target===i&&l()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){c.textContent="Entre un pseudo";return}c.textContent="";const{data:d}=await E.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!d){c.textContent="Utilisateur introuvable";return}if(d.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:u}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${e.user.id})`).single();if(u){const o=u.status==="accepted"?"Vous êtes déjà amis !":u.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=o;return}const{error:n}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:d.id,status:"pending"});if(n){c.textContent="Erreur : "+n.message;return}l(),t(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function Yi(e,t,i=null,a={}){const c=e.user.id,{data:l}=await E.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),s=(l||[]).map(w=>w.requester_id);let d={};if(s.length){const{data:w}=await E.from("users").select("id, pseudo, club_name").in("id",s);(w||[]).forEach($=>{d[$.id]=$})}const u=(l||[]).map(w=>({...w,requester:d[w.requester_id]||{pseudo:"?"}})),n=xi(),o=u||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(w=>{var $,L,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${(($=w.requester)==null?void 0:$.club_name)||((L=w.requester)==null?void 0:L.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=w.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${w.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ft};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${w.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Bt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${yi()}`,document.body.appendChild(n);const g=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",g),n.addEventListener("click",w=>{w.target===n&&g()}),n.querySelectorAll("[data-accept]").forEach(w=>{w.addEventListener("click",async()=>{const{error:$}=await E.from("friendships").update({status:"accepted"}).eq("id",w.dataset.accept);if($){t("Erreur : "+$.message,"error");return}w.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ki(e,t,a),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(w=>{w.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",w.dataset.decline),w.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Bn(e,t,i){const a=e.user.id,[c,l]=[a,t].sort(),s=a===c,{data:d}=await E.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",l).single(),u=e.profile.club_name||e.profile.pseudo||"Moi",n=d||{},o=s?n.wins_p1||0:n.wins_p2||0,g=s?n.wins_p2||0:n.wins_p1||0,w=n.draws||0,$=s?n.goals_p1||0:n.goals_p2||0,L=s?n.goals_p2||0:n.goals_p1||0,r=s?n.gc_used_p1||0:n.gc_used_p2||0,p=s?n.gc_used_p2||0:n.gc_used_p1||0,z=n.matches_total||0,M=(O,G,q,H=Ft,ie=Bt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${H}">${G}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${O}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${ie}">${q}</div>
    </div>`,F=xi();F.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${z===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${M("Victoires",o,g)}
        ${M("Nuls",w,w,Si,Si)}
        ${M("Défaites",g,o)}
        ${M("Buts marqués",$,L)}
        ${M("Buts encaissés",L,$,Bt,Ft)}
        ${M("GC utilisés ⚡",r,p,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${yi()}`,document.body.appendChild(F),F.querySelector("#stats-close").addEventListener("click",()=>F.remove()),F.addEventListener("click",O=>{O.target===F&&F.remove()})}function xi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function yi(){return`
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
        background:${Ft};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Wi({player1Id:e,player2Id:t,score1:i,score2:a,gc1:c,gc2:l}){const[s,d]=[e,t].sort(),u=e!==s,n=u?a:i,o=u?i:a,g=u?l:c,w=u?c:l,$=n>o?1:0,L=o>n?1:0,r=n===o?1:0,{data:p}=await E.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",d).single();p?await E.from("friend_match_stats").update({wins_p1:p.wins_p1+$,wins_p2:p.wins_p2+L,draws:p.draws+r,goals_p1:p.goals_p1+n,goals_p2:p.goals_p2+o,gc_used_p1:p.gc_used_p1+g,gc_used_p2:p.gc_used_p2+w,matches_total:p.matches_total+1}).eq("player1_id",s).eq("player2_id",d):await E.from("friend_match_stats").insert({player1_id:s,player2_id:d,wins_p1:$,wins_p2:L,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:g,gc_used_p2:w,matches_total:1})}const Dn="2026.07.01-2306";async function Li(e,{state:t,navigate:i,toast:a}){var l,s;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Dn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",u=>{u.preventDefault(),i(d.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const u=d.dataset.action;if(u==="match-ai"){Rn(i);return}if(u==="match-random"){i("match",{matchMode:"random"});return}if(u==="match-friend"){i("friends");return}if(u==="mini-league"){i("mini-league");return}if(u==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var O,G,q,H,ie,ue;const d=((O=window.visualViewport)==null?void 0:O.height)||window.innerHeight,u=((G=document.querySelector(".top-nav"))==null?void 0:G.offsetHeight)||56,n=((q=document.querySelector(".bottom-nav"))==null?void 0:q.offsetHeight)||60,o=((H=e.querySelector(".hero-compact"))==null?void 0:H.offsetHeight)||52,g=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const w=((ue=(ie=e.querySelector("#logout-btn"))==null?void 0:ie.closest("div"))==null?void 0:ue.offsetHeight)||44,$=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((re,B)=>{var V;return re+(((V=document.getElementById(B))==null?void 0:V.offsetHeight)||0)},0),L=14*5,r=d-u-n-o-w-$-L,p=Math.max(80,Math.round(r*.28)),z=Math.max(160,Math.round(r*.72)),M=Math.floor((z-10)/2);g&&(g.style.minHeight=g.style.maxHeight=p+"px"),e.querySelectorAll(".play-grid .play-card").forEach(re=>{re.style.minHeight=re.style.height=M+"px"});const F=Math.round(M*.55);e.querySelectorAll(".play-card .play-icon").forEach(re=>{re.style.height=F+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),Xi(t,a),Nn(t,a,i),Ji(t,a,i))}async function Ji(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:l}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(l!=null&&l.length)){a.innerHTML="";return}const s=l.map(u=>u.home_id===c?u.away_id:u.home_id).filter(Boolean);let d={};if(s.length){const{data:u}=await E.from("users").select("id, pseudo, club_name").in("id",s);(u||[]).forEach(n=>{d[n.id]=n.club_name||n.pseudo})}a.innerHTML=l.map(u=>{const n=u.home_id===c?u.away_id:u.home_id,o=d[n]||"Adversaire",g=u.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${g?"🏆 Mini League":u.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${u.id}" data-mini="${g?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${u.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(u=>{u.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(u.dataset.mini==="1"){const{data:o}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",u.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await Vi(async()=>{const{resumePvpMatch:g}=await Promise.resolve().then(()=>Ro);return{resumePvpMatch:g}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},u.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(u=>{u.addEventListener("click",()=>{Pn(async()=>{await Gn(u.dataset.abandon,u.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Ji(e,t,i)})})})}async function Gn(e,t,i){const{data:a}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===i,l=c?0:3,s=c?3:0,d=a.game_state||{};d.p1Score=l,d.p2Score=s,d.phase="finished",d.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:l,away_score:s,game_state:d}).eq("id",e)}function Pn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Nn(e,t,i){var d,u,n,o;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const l=((d=c.inviter)==null?void 0:d.club_name)||((u=c.inviter)==null?void 0:u.pseudo)||"?",s=c.inviter_id;a.innerHTML=`
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
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:s,friendName:l})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Xi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:c}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){i.innerHTML="";return}const l=a.length,s=a.slice(0,2).map(u=>{var n;return((n=u.requester)==null?void 0:n.pseudo)||"?"}).join(", "),d=l>2?` +${l-2}`:"";i.innerHTML=`
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
          ${s}${d}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Yi(e,t,()=>Xi(e,t))})}function Rn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Ve={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ke(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const zi=["ATT","MIL","DEF","GK"];function Zi(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let c=a+1;c<i;c++){const l=e[a],s=e[c];if(!l||!s)continue;const d=l._col!=null&&s._col!=null&&l._col===s._col,u=l._col!=null&&s._col!=null&&Math.abs(l._col-s._col)===1,n=zi.indexOf(l._line||l.job),o=zi.indexOf(s._line||s.job),g=Math.abs(n-o)===1;if(!((l._line||l.job)===(s._line||s.job)&&u||d&&g))continue;const L=l.country_code&&s.country_code&&l.country_code===s.country_code,r=l.club_id&&s.club_id&&l.club_id===s.club_id;L&&r?t+=2:(L||r)&&(t+=1)}return t}function Pt(e,t={}){const i=e.reduce((l,s)=>{const d=s._line||s.job;return l+(Number(d==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=Zi(e);let c=i+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Nt(e,t={}){const i=e.reduce((l,s)=>{const d=s._line||s.job;let u=0;return d==="GK"?u=Number(s.note_g)||0:d==="MIL"?u=Number(s.note_m)||0:u=Number(s.note_d)||0,l+u+(s.boost||0)},0),a=Zi(e);let c=i+a;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Rt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Qi(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const c=[...a].sort((s,d)=>{const u=t==="attack"?ke(s,"ATT"):s._line==="GK"?ke(s,"GK"):ke(s,"DEF");return(t==="attack"?ke(d,"ATT"):d._line==="GK"?ke(d,"GK"):ke(d,"DEF"))-u});let l=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function On(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const en={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function hi(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const c=bi(i),l=Number(i[t])||0;if(l<=0)return 0;const s=i.note_min??1,d=i.note_max??10,n=(e.current_note??c)-c;return Math.min(d,Math.max(s,l+n))}function bi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Qt(e,t){!e||!t||await Promise.all([Ii(e,"win"),Ii(t,"loss")])}async function Ii(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(c=>{var l,s;return((l=c.player)==null?void 0:l.rarity)==="pepite"||((s=c.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const l=en[c.player.rarity],s=t==="win"?l.win:l.loss,d=c.player.note_min??1,u=c.player.note_max??10,n=bi(c.player),o=c.current_note??n,g=Math.min(u,Math.max(d,o+s));return E.from("cards").update({current_note:g}).eq("id",c.id)}))}const Hn=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:en,currentSecondaryNote:hi,getBaseMainNote:bi,updateEvolutiveCards:Qt},Symbol.toStringTag,{value:"Module"})),tn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ct={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ot=["GK","DEF","MIL","ATT"],Un=["Tous","GK","DEF","MIL","ATT"],Vn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Mi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Kn(e){return e.length?e.reduce((t,i)=>Mi(i)>Mi(t)?i:t,e[0]):e[0]}function nn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const vi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function on(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Dt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ri(e,t=""){var w,$;const i=e.player;if(!i)return"";const a=i.job||"ATT",c=Ct[a],l=tn[i.rarity]||"#ccc",s=i.rarity==="pepite"||i.rarity==="papyte",d=s&&e.current_note!=null?e.current_note:Dt(i,a),u=i.job2?s?hi(e,nn(i.job2)):Dt(i,i.job2):null,n=i.job2?Ct[i.job2]:null,o=on(i),g=vi[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${l};cursor:pointer;flex-shrink:0;position:relative
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
            fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${u!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${n}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${u}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${g}</div>
        ${(w=i.clubs)!=null&&w.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${((($=i.clubs)==null?void 0:$.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ji(e){const t=e.job||"ATT",i=Dt(e,t),a=vi[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${a}</div>
      </div>
    </div>
  </div>`}async function Yn(e,t){const{state:i,navigate:a,toast:c,openModal:l,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:u}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(d||[]).filter(J=>J.card_type==="player"&&J.player),o=(d||[]).filter(J=>J.card_type==="game_changer"),g=(d||[]).filter(J=>J.card_type==="formation"),{data:w}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),$={};(w||[]).forEach(J=>{$[J.name]=J});const L=Object.keys(mi),r=Object.keys(Ve),p={};n.forEach(J=>{const Z=J.player.id;p[Z]=(p[Z]||0)+1}),new Set(Object.keys(p).map(J=>String(J)));const z=new Set(g.map(J=>J.formation)),M=new Set(o.map(J=>J.gc_type));let F="player",O="Tous",G="",q=!1;function H(){return[...n].sort((J,Z)=>{const P=Ot.indexOf(J.player.job),R=Ot.indexOf(Z.player.job);return P!==R?P-R:(J.player.surname_encoded||"").localeCompare(Z.player.surname_encoded||"")})}function ie(){return[...u||[]].sort((J,Z)=>{const P=Ot.indexOf(J.job),R=Ot.indexOf(Z.job);return P!==R?P-R:(J.surname_encoded||"").localeCompare(Z.surname_encoded||"")})}function ue(){return H().filter(J=>{const Z=J.player,P=O==="Tous"||Z.job===O,R=!G||`${Z.firstname} ${Z.surname_encoded}`.toLowerCase().includes(G);return P&&R})}function re(){return ie().filter(J=>{const Z=O==="Tous"||J.job===O,P=!G||`${J.firstname} ${J.surname_encoded}`.toLowerCase().includes(G);return Z&&P})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="player"?"var(--green)":"transparent"};
        color:${F==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="formation"?"var(--green)":"transparent"};
        color:${F==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="gc"?"var(--green)":"transparent"};
        color:${F==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function B(){const J=document.getElementById("col-filters");J&&(F==="player"?(J.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Un.map(Z=>`
            <button class="filter-btn" data-job="${Z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Z===O?"var(--green)":"var(--gray-200)"};
                background:${Z===O?"var(--green)":"#fff"};
                color:${Z===O?"#fff":"var(--gray-600)"}">
              ${Z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--gray-200)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Z=>{G=Z.target.value.toLowerCase(),V()}),e.querySelectorAll(".filter-btn").forEach(Z=>{Z.addEventListener("click",()=>{O=Z.dataset.job,B(),V()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,B(),V()})):(J.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--gray-200)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,B(),V()})))}function V(){const J=document.getElementById("col-grid");J&&(F==="player"?Ae(J):F==="formation"?ve(J):he(J))}function ae(J,Z,P,R,Q){const pe=document.getElementById("col-grid"),le=document.getElementById("col-big");if(!pe||!le)return;var je=0;function ze(){const Pe=window.innerWidth>=768,Oe=document.getElementById("col-big"),Ce=document.getElementById("col-grid");Pe&&Oe&&(Oe.style.minHeight="420px",Oe.style.flex="1 1 auto"),Pe&&Ce&&(Ce.style.height=Math.round(310*.76+16)+"px",Ce.style.flexShrink="0",Ce.style.overflowX="auto",Ce.style.overflowY="hidden",Ce.style.alignItems="center",Ce.style.padding="8px 16px"),le.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+Z(J[je])+"</div>";var Ie=le.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Ie&&Ie.addEventListener("click",function(){R(J[je])}),requestAnimationFrame(function(){var qe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!qe||!le)){var Ue=le.clientHeight-8,Je=le.clientWidth-24,j=qe.offsetHeight,b=qe.offsetWidth;if(j>0&&b>0&&Ue>40){var k=Pe?2.2:1,A=Math.min(Ue/j,Je/b,k);qe.style.transform="scale("+A.toFixed(3)+")",qe.style.transformOrigin="top center"}}}),pe.innerHTML=J.map(function(qe,Ue){var Je=Ue===je,j="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Je?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ue+'" style="'+j+'">'+P(qe,Je)+"</div>"}).join(""),pe.querySelectorAll(".col-mini-item").forEach(function(qe){qe.addEventListener("click",function(){je=Number(qe.dataset.idx),ze(),qe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ze()}function N(J){var Z=window.innerWidth>=768?.76:.54,P;if(!J||J._fake){var R=J?J.player:null;if(!R)return"";P=ji(R)}else P=ri(J,"");return'<div style="display:inline-block;zoom:'+Z+';pointer-events:none;line-height:0">'+P+"</div>"}function se(J,Z,P){Z=Z||100,P=P||140;var R=Gt[J]||{},Q={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},pe=Math.max(3,Math.round(Z*.06)),le=Object.entries(R).map(function(ze){var Pe=ze[0],Oe=ze[1],Ce=Pe.replace(/\d+$/,""),Ie=Q[Ce]||"#888",qe=Math.round(Oe.x*Z),Ue=Math.round(Oe.y*P);return'<circle cx="'+qe+'" cy="'+Ue+'" r="'+pe+'" fill="'+Ie+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),je=Math.max(1,Math.round(Z/50));return'<svg viewBox="0 0 '+Z+" "+P+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+Z+'" height="'+P+'" fill="#1A6B3C"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(P*.02)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+je+'"/><line x1="0" y1="'+Math.round(P*.5)+'" x2="'+Z+'" y2="'+Math.round(P*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+je+'"/><ellipse cx="'+Math.round(Z*.5)+'" cy="'+Math.round(P*.5)+'" rx="'+Math.round(Z*.18)+'" ry="'+Math.round(P*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+je+'"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(P*.82)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+je+'"/>'+le+"</svg>"}function fe(J,Z,P){var R=P>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+P+"</div>":"",Q=Z?'data-form-id="'+Z.id+'"':"",pe=J.length>7?14:J.length>5?16:19,le=!!Z;return"<div "+Q+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(le?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(le?"":"filter:grayscale(1);opacity:0.5")+'">'+R+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(le?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+pe+"px;font-weight:900;color:"+(le?"#1A6B3C":"#aaa")+';line-height:1">'+J+'</div></div><div style="flex:1;overflow:hidden;background:'+(le?"#1A6B3C":"#ccc")+'">'+se(J,140,220)+"</div></div>"}function ye(J,Z){var P=window.innerWidth>=768?.76:.54,R=140,Q=305,pe=Math.round(Q*.22),le=Q-pe,je=J.length>7?10:13,ze=se(J,R,le),Pe=Z?"1.5px solid #2a7a40":"1px solid #ddd",Oe=Z?"":"filter:grayscale(1);opacity:0.45;",Ce=Z?"#1A6B3C":"#bbb",Ie="#fff";return'<div style="display:inline-block;zoom:'+P+';line-height:0;pointer-events:none"><div style="width:'+R+"px;height:"+Q+"px;border-radius:6px;border:"+Pe+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Oe+'"><div style="height:'+pe+"px;background:"+Ce+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+je+"px;font-weight:900;color:"+Ie+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(R-4)+'px">'+J+'</span></div><div style="height:'+le+'px;overflow:hidden;flex-shrink:0">'+ze+"</div></div></div>"}function Ae(J){if(q){const Z=re();if(!Z.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const P=Z.map(R=>n.find(Q=>Q.player.id===R.id)||{_fake:!0,player:R,id:"fake-"+R.id});ae(P,R=>R._fake?ji(R.player):ri(R,""),R=>R._fake?N({player:R.player,id:"x",_fake:!0}):N(R),R=>{R._fake||Ci(R,n,p,t)})}else{const Z=ue();if(!Z.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const P={};Z.forEach(Q=>{const pe=Q.player.id;P[pe]||(P[pe]=[]),P[pe].push(Q)});const R=Object.values(P).map(Q=>Kn(Q));ae(R,Q=>{const pe=p[Q.player.id]||1,le=pe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${pe}</div>`:"",ze=n.filter(Pe=>Pe.player.id===Q.player.id&&Pe.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ri(Q,le+ze)},Q=>N(Q),Q=>Ci(Q,n,p,t))}}function ve(J){const Z=q?L:[...z];if(!Z.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const P=Z.map(R=>({formation:R,card:g.find(Q=>Q.formation===R)||null,owned:z.has(R)}));ae(P,({formation:R,card:Q,owned:pe})=>fe(R,pe?Q:null,pe?g.filter(le=>le.formation===R).length:0),({formation:R,owned:Q})=>ye(R,Q),({card:R,owned:Q})=>{Q&&R&&Jn(R,g,t,l)})}function he(J){const Z=Object.keys($),P=q?Z.length?Z:r:[...M];if(!P.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const R=P.map(Q=>({type:Q,gc:Ve[Q]||{icon:"⚡",desc:""},def:$[Q]||null,owned:M.has(Q),card:o.find(pe=>pe.gc_type===Q)||null}));ae(R,({type:Q,gc:pe,def:le,owned:je,card:ze})=>{const Pe=je?o.filter(k=>k.gc_type===Q).length:0,Oe=Pe>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Pe}</div>`:"",Ce=(le==null?void 0:le.gc_type)==="ultra_game_changer",Ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#b06ce0",light_blue:"#00d4ef"},Ue=Ie[le==null?void 0:le.color]||Ie.purple,Je=qe[le==null?void 0:le.color]||qe.purple,j=(le==null?void 0:le.effect)||pe.desc||"",b=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null;return je&&ze?`<div data-gc-id="${ze.id}" data-gc-type="${Q}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Je};background:${Ue};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Je}66;cursor:pointer">
          ${Oe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Q.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Q}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ce?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${pe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${j.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Q}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${pe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Q,gc:pe,def:le,owned:je})=>{const ze=window.innerWidth>=768?.76:.54,Pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Oe={purple:"#9b59b6",light_blue:"#00bcd4"},Ce=Pe[le==null?void 0:le.color]||Pe.purple,Ie=Oe[le==null?void 0:le.color]||Oe.purple,qe=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null;return je?`<div style="display:inline-block;zoom:${ze};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ce};border:1px solid ${Ie};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Q}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${qe?`<img src="${qe}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${pe.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((le==null?void 0:le.effect)||pe.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${ze};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${pe.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Q}</span></div></div>`},({type:Q,owned:pe,def:le})=>{pe&&Wn(Q,le,l)})}e.querySelectorAll(".col-tab-btn").forEach(J=>{J.addEventListener("click",()=>{F=J.dataset.tab,O="Tous",G="",q=!1,e.querySelectorAll(".col-tab-btn").forEach(Z=>{const P=Z.dataset.tab===F;Z.style.borderBottomColor=P?"var(--green)":"transparent",Z.style.color=P?"var(--green)":"var(--gray-600)"}),B(),V()})}),B(),V()}function Wn(e,t,i){const a=Ve[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[t==null?void 0:t.color]||l.purple,u=s[t==null?void 0:t.color]||s.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||a.desc,g=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${u};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${n}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ht=1e3;function Jn(e,t,i,a){var L,r,p;const{state:c,toast:l,closeModal:s,navigate:d,refreshProfile:u}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function g(){const z=Gt[n]||{},M=mi[n]||[],F=290,O=360,G=20;function q(ie){const ue=z[ie];return ue?{x:ue.x*F,y:ue.y*O}:null}let H=`<svg width="${F}" height="${O}" viewBox="0 0 ${F} ${O}" xmlns="http://www.w3.org/2000/svg">`;for(const[ie,ue]of M){const re=q(ie),B=q(ue);!re||!B||(H+=`<line x1="${re.x}" y1="${re.y}" x2="${B.x}" y2="${B.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ie of Object.keys(z)){const ue=q(ie);if(!ue)continue;const re=ie.replace(/\d+/,""),B=o[re]||"#555";H+=`<circle cx="${ue.x}" cy="${ue.y}" r="${G}" fill="${B}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,H+=`<text x="${ue.x}" y="${ue.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return H+="</svg>",H}const w=t.filter(z=>z.formation===n);w.length;const $=!e.is_for_sale;a(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${g()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${$?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ht}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(L=document.getElementById("direct-sell-form-btn"))==null||L.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Ht.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const z=w.find(F=>!F.is_for_sale)||w[0];if(!z){l("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",z.id),await E.from("transfer_history").delete().eq("card_id",z.id);const{error:M}=await E.from("cards").delete().eq("id",z.id);if(M){l(M.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+Ht}).eq("id",c.profile.id),await u(),l(`+${Ht.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),d("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const z=parseInt(document.getElementById("sell-price-form").value);if(!z||z<1){l("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:z}).eq("id",e.id),await E.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:z}),l("Carte mise en vente sur le marché !","success"),s(),d("collection")}),(p=document.getElementById("cancel-sell-form-btn"))==null||p.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),d("collection")})}async function Ci(e,t,i,a){var fe,ye,Ae,ve,he,J,Z;const{state:c,toast:l,openModal:s,closeModal:d,navigate:u,refreshProfile:n}=a,o=e.player,g=t.filter(P=>P.player.id===o.id),w=g.length,$=Math.max(Number(o.note_g)||0,Number(o.note_d)||0,Number(o.note_m)||0,Number(o.note_a)||0),L=o.rarity||"normal",{data:r}=await E.from("sell_price_configs").select("*").eq("rarity",L).lte("note_min",$).gte("note_max",$).order("note_min",{ascending:!1}).limit(1),p=((fe=r==null?void 0:r[0])==null?void 0:fe.price)??Vn[L]??1e3,z=o.rarity!=="legende",M=on(o),F=(o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:Dt(o,o.job),O=o.rarity==="pepite"||o.rarity==="papyte",G=o.job2?O?hi(e,nn(o.job2)):Dt(o,o.job2):null,q=Ct[o.job]||"#1A6B3C",H=o.job2?Ct[o.job2]:null,ie=tn[o.rarity]||"#ccc",ue=vi[o.country_code]||o.country_code||"",re=g.map(P=>P.id);let B={};if(re.length){const{data:P}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(P||[]).forEach(R=>{B[R.card_id]||(B[R.card_id]=[]),B[R.card_id].push(R)})}const V=P=>{const R=P.transferred_at?new Date(P.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Q=P.source==="booster"?"Booster":P.price?P.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${P.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${P.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${P.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Q}</div>
        <div style="font-size:11px;color:var(--gray-600)">${R}</div>
      </div>
    </div>`},ae=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${w>1?`(${w})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${g.map((P,R)=>{const Q=B[P.id]||[],pe=P.is_for_sale,le=Q.length?Q[Q.length-1]:null,ze=(o.rarity==="pepite"||o.rarity==="papyte")&&P.current_note!=null?` (☆${P.current_note})`:"";return`
            <div data-card-id="${P.id}" data-card-idx="${R}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${pe?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${P.id}" ${pe?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${R+1}${ze}${pe?" 🏷️ En vente":""}</div>
                  ${le?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${le.club_name} · ${le.source==="booster"?"Booster":le.price?le.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${R}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${Q.length?`${Q.length} club${Q.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${R}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${Q.map(V).join("")}
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${p.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${z?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${o.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";s(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${ie};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${q}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${q}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${F}</text>
            </svg>
            ${G!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${H}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${G}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${ue}</div>
            ${(ye=o.clubs)!=null&&ye.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ae=o.clubs)==null?void 0:Ae.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${ie}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${ie}18;border-left:3px solid ${ie};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${ie};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${o.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(o.rarity==="pepite"?o.note_min:o.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${o.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${o.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${o.job}${o.job2?" / "+o.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([P,R])=>{const Q=Ct[P],pe=Number(R)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${Q}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${pe}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${P}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${w}</div>
        </div>
      </div>
    </div>
    ${ae}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ve=document.getElementById("close-detail"))==null||ve.addEventListener("click",d);let N=new Set;const se=()=>{const P=N.size,R=document.getElementById("sell-action-panel");R&&(R.style.display=P>0?"block":"none",document.getElementById("sell-selected-count").textContent=P,document.getElementById("sell-direct-total").textContent=(P*p).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(P=>{P.addEventListener("change",()=>{const R=P.dataset.id;P.checked?N.add(R):N.delete(R);const Q=P.closest(".exemplaire-row");Q&&(Q.style.borderColor=P.checked?"#1A6B3C":"#eee"),se()})}),document.querySelectorAll(".exemplaire-row").forEach(P=>{P.addEventListener("click",R=>{if(R.target.closest("button")||R.target.tagName==="INPUT")return;const Q=P.querySelector(".expl-check");Q&&!Q.disabled&&(Q.checked=!Q.checked,Q.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(P=>{P.addEventListener("click",R=>{R.stopPropagation();const Q=document.querySelector(`.expl-hist[data-hist="${P.dataset.idx}"]`);Q&&(Q.style.display=Q.style.display==="none"?"flex":"none")})}),(he=document.getElementById("direct-sell-btn"))==null||he.addEventListener("click",async()=>{const P=[...N];if(!P.length)return;const R=P.length*p;if(!confirm(`Vendre ${P.length} carte${P.length>1?"s":""} ${o.surname_encoded} pour ${R.toLocaleString("fr")} crédits ? Action irréversible.`))return;await E.from("market_listings").delete().in("card_id",P),await E.from("transfer_history").delete().in("card_id",P);const{error:Q}=await E.from("cards").delete().in("id",P);if(Q){l(Q.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+R}).eq("id",c.profile.id),await n();const pe=document.getElementById("nav-credits");pe&&(pe.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l(`+${R.toLocaleString("fr")} crédits ! ${P.length} carte${P.length>1?"s":""} vendue${P.length>1?"s":""}.`,"success"),d(),u("collection")}),(J=document.getElementById("market-sell-btn"))==null||J.addEventListener("click",async()=>{var je;const P=[...N];if(!P.length){l("Sélectionne au moins un exemplaire","warning");return}const R=parseInt((je=document.getElementById("sell-market-price"))==null?void 0:je.value);if(!R||R<1){l("Prix invalide","error");return}const{error:Q}=await E.from("cards").update({is_for_sale:!0,sale_price:R}).in("id",P);if(Q){l(Q.message,"error");return}const pe=P.map(ze=>({seller_id:c.profile.id,card_id:ze,price:R,status:"active"})),{error:le}=await E.from("market_listings").insert(pe);le&&console.warn("[Market] insert listings:",le.message),l(`${P.length} carte${P.length>1?"s":""} mise${P.length>1?"s":""} en vente à ${R.toLocaleString("fr")} cr. chacune !`,"success"),d(),u("collection")}),(Z=document.getElementById("cancel-sell-btn"))==null||Z.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),d(),u("collection")})}const Wt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},bt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ei(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function rn(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function an(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Xn(e,t=44,i=58){var $;const a=e?ei(e):null,c=e?an(e):null,l=rn(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",d=bt[s]||"#555",u={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,o=Math.round(i*.19),g=Math.round(i*.25),w=i-o-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${u};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${w}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:($=e==null?void 0:e.clubs)!=null&&$.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function di(e,t){const{state:i,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(l==null?void 0:l.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(l==null?void 0:l.length)>0?l.map(s=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!s)return;const{data:d,error:u}=await E.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(u){c(u.message,"error");return}c("Deck créé !","success"),qi(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>qi(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",s.dataset.name);if(!d||d===s.dataset.name)return;const{error:u}=await E.from("decks").update({name:d}).eq("id",s.dataset.rename);if(u){c(u.message,"error");return}c("Deck renommé !","success"),di(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:d}=await E.from("decks").delete().eq("id",s.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),di(e,t)})})}async function qi(e,t,i){const{state:a,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("decks").select("*").eq("id",e).single(),{data:s}=await E.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),d=(s||[]).filter($=>$.card_type==="player"&&$.player),u=(s||[]).filter($=>$.card_type==="formation"),n=u.map($=>$.formation).filter(Boolean),{data:o}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let g=l.formation||"4-4-2";n.length>0&&!n.includes(g)&&(g=n[0]);const w={deckId:e,name:l.name,formation:g,formationCardId:l.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:u,availableFormations:n};(o||[]).forEach($=>{$.is_starter?w.slots[$.position]=$.card_id:w.subs.includes($.card_id)||w.subs.push($.card_id)}),Tt(t,w,i)}function Tt(e,t,i){var u;const{navigate:a}=i;Wt[t.formation];const c=Fi(t.formation),l=c.filter(n=>t.slots[n]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Wt),d=t.subs.map(n=>t.playerCards.find(o=>o.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${s.map(n=>`<option value="${n}" ${n===t.formation?"selected":""}>${n}</option>`).join("")}
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
        ${d.map(n=>{const o=n.player;return`<div style="position:relative;flex-shrink:0">
            ${Xn(o,44,58)}
            <button data-remove-sub="${n.id}"
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
  </div>`,Zn(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const o=Fi(t.formation),g={};o.forEach(w=>{t.slots[w]&&(g[w]=t.slots[w])}),t.slots=g,Tt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>to(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(o=>o!==n.dataset.removeSub),Tt(e,t,i)})}),(u=document.getElementById("add-sub-btn"))==null||u.addEventListener("click",()=>{eo(t,e,i)})}function Zn(e,t,i,a){const c=e.querySelector("#deck-field");if(!c)return;const l=Gt[t.formation]||{},s=Ui(t.formation)||[],d={};for(const z of i){const M=t.slots[z],F=M?t.playerCards.find(O=>O.id===M):null;d[z]=F?F.player:null}const u=300,n=300,o=48,g=64,w=13,$=16,L=38;function r(z){const M=l[z];return M?{x:M.x*u,y:M.y*n}:null}let p="";for(const[z,M]of s){const F=r(z),O=r(M);if(!F||!O)continue;const G=d[z]?{...d[z],club_id:d[z].club_id,country_code:d[z].country_code,rarity:d[z].rarity}:null,q=d[M]?{...d[M],club_id:d[M].club_id,country_code:d[M].country_code,rarity:d[M].rarity}:null,H=at(G,q);H==="#ff3333"||H==="#cc2222"?p+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${H}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(p+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${H}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,p+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${H}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const z of i){const M=r(z);if(!M)continue;const F=d[z],O=z.replace(/\d+/,""),G=bt[O]||"#555",q=(M.x-o/2).toFixed(1),H=(M.y-g/2).toFixed(1),ie={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[F==null?void 0:F.rarity]||"#aaa";if(F){const ue=ei(F),re=an(F),B=rn(F.country_code),V=Number(O==="GK"?F.note_g:O==="DEF"?F.note_d:O==="MIL"?F.note_m:F.note_a)||0,ae=g-w-$;p+=`<defs><clipPath id="dcp-${z}"><rect x="${q}" y="${(M.y-g/2+w).toFixed(1)}" width="${o}" height="${ae}"/></clipPath></defs>`,p+=`<rect x="${q}" y="${H}" width="${o}" height="${g}" rx="5" fill="${G}"/>`,ue&&(p+=`<image href="${ue}" x="${q}" y="${(M.y-g/2+w).toFixed(1)}" width="${o}" height="${ae}" clip-path="url(#dcp-${z})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${q}" y="${H}" width="${o}" height="${w}" fill="rgba(255,255,255,0.93)"/>`,p+=`<text x="${M.x.toFixed(1)}" y="${(M.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(F.surname_encoded||"").slice(0,9)}</text>`;const N=(M.y+g/2-$).toFixed(1);p+=`<rect x="${q}" y="${N}" width="${o}" height="${$}" fill="rgba(255,255,255,0.93)"/>`,B&&(p+=`<image href="${B}" x="${(M.x-21).toFixed(1)}" y="${(M.y+g/2-$+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),p+=`<text x="${M.x.toFixed(1)}" y="${(M.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${V}</text>`,re&&(p+=`<image href="${re}" x="${(M.x+o/2-14).toFixed(1)}" y="${(M.y+g/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),p+=`<rect x="${q}" y="${H}" width="${o}" height="${g}" rx="5" fill="none" stroke="${ie}" stroke-width="2"/>`}else p+=`<rect x="${q}" y="${H}" width="${o}" height="${g}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,p+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,p+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${O}</text>`;p+=`<rect x="${q}" y="${H}" width="${o}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${z}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-L} ${-L} ${u+L*2} ${n+L*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${p}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>Qn(z.dataset.pos,t,e,a))})}function Qn(e,t,i,a){var w,$,L;const{openModal:c,closeModal:l}=a,s=e.replace(/\d+/,""),d=t.slots[e],u=d?t.playerCards.find(r=>r.id===d):null;(w=u==null?void 0:u.player)==null||w.id;const n=new Set;Object.entries(t.slots).forEach(([r,p])=>{var M;if(r===e||!p)return;const z=t.playerCards.find(F=>F.id===p);(M=z==null?void 0:z.player)!=null&&M.id&&n.add(z.player.id)}),t.subs.forEach(r=>{var z;const p=t.playerCards.find(M=>M.id===r);(z=p==null?void 0:p.player)!=null&&z.id&&n.add(p.player.id)});const o=new Set,g=t.playerCards.filter(r=>{const p=r.player;return!(p.job===s||p.job2===s)||n.has(p.id)||o.has(p.id)?!1:(o.add(p.id),!0)});g.sort((r,p)=>{const z=s==="GK"?r.player.note_g:s==="DEF"?r.player.note_d:s==="MIL"?r.player.note_m:r.player.note_a;return(s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a)-z}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?g.map(r=>{var O,G;const p=r.player,z=s==="GK"?p.note_g:s==="DEF"?p.note_d:s==="MIL"?p.note_m:p.note_a,M=ei(p),F={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[p.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${bt[s]}">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${bt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${p.firstname} ${p.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${p.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${p.country_code}">
              ${(O=p.clubs)!=null&&O.logo_url?`<img src="${p.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((G=p.clubs)==null?void 0:G.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${p.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${bt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${F};flex-shrink:0">
            ${z}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),($=document.getElementById("close-selector"))==null||$.addEventListener("click",l),(L=document.getElementById("remove-player"))==null||L.addEventListener("click",()=>{delete t.slots[e],l(),Tt(i,t,a)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,l(),Tt(i,t,a)})})}function eo(e,t,i){var u;const{openModal:a,closeModal:c}=i,l=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var g;const o=e.playerCards.find(w=>w.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&l.add(o.player.id)}),e.subs.forEach(n=>{var g;const o=e.playerCards.find(w=>w.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&l.add(o.player.id)});const s=new Set,d=e.playerCards.filter(n=>{var o,g,w;return l.has((o=n.player)==null?void 0:o.id)||s.has((g=n.player)==null?void 0:g.id)?!1:(s.add((w=n.player)==null?void 0:w.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(n=>{var $;const o=n.player,g=ei(o),w=o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${bt[o.job]}">
            ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${(($=o.clubs)==null?void 0:$.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${bt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${w}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(u=document.getElementById("close-sub-selector"))==null||u.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),c(),Tt(t,e,i)})})}async function to(e,t){const{state:i,toast:a,navigate:c}=t,l=e.formationCards.find(u=>u.formation===e.formation),s=(l==null?void 0:l.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([u,n],o)=>{d.push({deck_id:e.deckId,card_id:n,position:u,is_starter:!0,slot_order:o})}),e.subs.forEach((u,n)=>{d.push({deck_id:e.deckId,card_id:u,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),d.length>0){const{error:u}=await E.from("deck_cards").insert(d);if(u){a(u.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function Fi(e){const t=Wt[e]||Wt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function sn(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function io(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const dn=()=>Object.keys(Gt),no=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],li={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function oo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Bi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ro={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ao={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Di(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function so(e){var o,g;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Bi[i],c=ro[t.rarity]||"#ccc",l=Di(t,i),s=t.job2?Di(t,t.job2):null,d=t.job2?Bi[t.job2]:null,u=oo(t),n=ao[t.country_code]||t.country_code||"";return`
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${d}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=t.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ln(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const i=((c=Object.entries(t).sort((l,s)=>s[1]-l[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function lo(e,{state:t,navigate:i,toast:a}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await sn()).map(ln)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}l.length||(l=no.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${l.map(d=>{const u=d.cost===0||c>=d.cost;return`<div class="booster-card ${u?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const u=l.find(n=>n.id===d.dataset.booster);if(u){d.style.opacity="0.5",d.style.pointerEvents="none";try{await co(u,{state:t,toast:a,navigate:i,container:e})}catch(n){a(n.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation();const n=l.find(o=>o.id===d.dataset.boosterId);go(n)})})}async function co(e,{state:t,toast:i,navigate:a,container:c}){var o;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await yo()}catch(g){i(g.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((l||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set((l||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let u=[];if((o=e.rates)!=null&&o.length)u=await ci(t.profile,e);else{const g=e.type||"player";g==="player"?u=await cn(t.profile,e.cardCount,e.cost):g==="game_changer"?u=await pn(t.profile,e.cardCount,e.cost):g==="formation"?u=await un(t.profile,e.cost):u=await ci(t.profile,e)}u.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=s.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=d.has(g.formation))});const{data:n}=await E.from("users").select("*").eq("id",t.profile.id).single();n&&(t.profile=n),fn(u,e,a)}function po(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function uo(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ci(e,t){if(t.cost>0){const{error:d}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{data:i}=await E.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((i||[]).filter(d=>d.card_type==="player").map(d=>d.player_id)),c=new Set((i||[]).filter(d=>d.card_type==="formation").map(d=>d.formation)),l=new Set,s=[];for(let d=0;d<(t.cardCount||5);d++){const u=io(t.rates);if(u){if(u.card_type==="player"){const n=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,o=u.rarity?n(u.rarity):null;let g=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o&&(g=g.eq("rarity",o));const{data:w}=await g;let $=w||[];if((u.note_min||u.note_max)&&($=$.filter(M=>{const F=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!u.note_min||F>=u.note_min)&&(!u.note_max||F<=u.note_max)})),$.length||(u.note_min||u.note_max?($=w||[],console.warn("[Booster] Aucun joueur avec note",u.note_min,"-",u.note_max,"— fallback rareté uniquement")):$=w||[]),!$.length)continue;let L=$.filter(M=>!l.has(M.id));L.length||(L=$);const r=L[Math.floor(Math.random()*L.length)];l.add(r.id);const p=a.has(r.id),{data:z}=await E.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();z&&(s.push({...z,player:r,isDuplicate:p}),E.rpc("record_transfer",{p_card_id:z.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(u.card_type==="game_changer"){const{data:n}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),o=n!=null&&n.length?n:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],w=o[Math.floor(Math.random()*o.length)].name,{data:$}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:w}).select().single();$&&s.push($)}else if(u.card_type==="formation"){const n=dn(),o=n[Math.floor(Math.random()*n.length)],g=c.has(o),{data:w}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:o}).select();w!=null&&w[0]&&s.push({...w[0],isDuplicate:g})}}}return s}async function cn(e,t,i){if(i>0){const{error:n}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:a}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(n=>n.job==="GK"),l=a.filter(n=>n.job!=="GK"),s=!e.first_booster_opened&&c.length>0,d=[];for(let n=0;n<t;n++){const o=n===0&&s?c:n===0?l:a,g=po(),w=uo(o,g);w&&d.push(w)}s&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:u}=await E.from("cards").insert(d.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(u||[]).forEach((n,o)=>{E.rpc("record_transfer",{p_card_id:n.id,p_player_id:d[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((n,o)=>({...u[o],player:n}))}async function pn(e,t,i){const{error:a}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:c}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(li).map(o=>({name:o,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const o=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:d,error:u}=await E.from("cards").insert(s).select();return u&&console.error("[Booster GC] Erreur insert:",u.message,u),(d||[]).map(o=>{const g=c==null?void 0:c.find(w=>w.name===o.gc_type||w.id===o.gc_definition_id);return{...o,_gcDef:g||null}})}async function un(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(o=>o.formation)),l=dn(),s=l[Math.floor(Math.random()*l.length)],d=c.has(s),{data:u,error:n}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(u||[]).map(o=>({...o,isDuplicate:d}))}function fn(e,t,i,a=null){var V,ae;if(!e||e.length===0){const N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",N.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(N),(V=N.querySelector("#anim-close-err"))==null||V.addEventListener("click",()=>N.remove());return}e=[...e].sort((N,se)=>{const fe=N.player?mt(N.player):-1;return(se.player?mt(se.player):-1)-fe});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const s=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let u=!1;const n=N=>N.touches&&N.touches[0]?N.touches[0].clientX:N.clientX;function o(N){l||(u=!0,d.style.opacity="1",g(N))}function g(N){if(!u||l)return;const se=s.getBoundingClientRect(),fe=n(N)-se.left,ye=Math.max(0,Math.min(1,fe/se.width));d.style.width=ye*se.width+"px",ye>=.82&&$()}function w(){l||(u=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{l||(d.style.transition="")},220))}function $(){var se;if(l)return;l=!0,u=!1,d.style.width="100%",d.style.opacity="1",(se=document.getElementById("cut-flash"))==null||se.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const N=document.getElementById("cut-hint");N&&(N.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",g),window.addEventListener("pointerup",w),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",w);let L=0,r=!1;const p=new Set;function z(N){L=N,document.getElementById("reveal-phase").style.display="flex",M(),F(N,0),ie()}function M(){const N=document.getElementById("card-dots");N&&(N.innerHTML=e.map((se,fe)=>`<div class="card-dot" data-i="${fe}" style="width:8px;height:8px;border-radius:50%;background:${fe===L?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),N.querySelectorAll(".card-dot").forEach(se=>se.addEventListener("click",()=>G(parseInt(se.dataset.i)))))}function F(N,se){var R;const fe=e[N],ye=document.getElementById("card-counter"),Ae=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${N+1} / ${e.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=N===e.length-1?"flex":"none");const he=fe.card_type==="player"&&((R=fe.player)==null?void 0:R.rarity)==="legende",J=!p.has(N);p.add(N);let Z=0;if(fe.card_type==="player"&&fe.player){const Q=fe.player,pe=Q.job||"ATT";Z=Number(pe==="GK"?Q.note_g:pe==="DEF"?Q.note_d:pe==="MIL"?Q.note_m:Q.note_a)||0}const P=Q=>{Ae.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${he?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${fo(fe)}</div>
          ${fe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const pe=document.getElementById("current-card-wrap");se!==0?(pe.style.transition="none",pe.style.transform=`translateX(${se>0?100:-100}%)`,requestAnimationFrame(()=>{pe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",pe.style.transform="translateX(0)"})):pe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Q||he?re():B(),M()};J&&Z>6&&fe.card_type==="player"&&fe.player?O(fe,()=>P(!0)):P(!1)}function O(N,se){var Z;r=!0;const fe=N.player,ye=`https://flagsapi.com/${fe.country_code}/flat/64.png`,Ae=(Z=fe.clubs)==null?void 0:Z.logo_url,ve=document.getElementById("walkout-overlay"),he=document.getElementById("walkout-stage");if(!ve||!he){r=!1,se();return}ve.style.display="flex";const J=()=>{const P=he.firstElementChild;P&&(P.classList.remove("wo-in"),P.classList.add("wo-out"))};he.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(J,2e3),setTimeout(()=>{var P;he.innerHTML=Ae?`<img class="wo-in" src="${Ae}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((P=fe.clubs)==null?void 0:P.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(J,4450),setTimeout(()=>{ve.style.display="none",he.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),se()},4900)}function G(N){if(r||N<0||N>=e.length||N===L)return;const se=N>L?1:-1;L=N,F(N,se)}function q(){G(L+1)}function H(){G(L-1)}function ie(){const N=document.getElementById("card-viewport");if(!N||N._swipeBound)return;N._swipeBound=!0;let se=0,fe=0,ye=0,Ae=!1;const ve=R=>R.touches?R.touches[0].clientX:R.clientX,he=R=>R.touches?R.touches[0].clientY:R.clientY,J=R=>{Ae=!0,se=ve(R),fe=he(R),ye=0},Z=R=>{if(!Ae)return;ye=ve(R)-se;const Q=he(R)-fe;if(Math.abs(ye)<Math.abs(Q))return;const pe=document.getElementById("current-card-wrap");pe&&(pe.style.transition="none",pe.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},P=()=>{if(!Ae)return;Ae=!1;const R=document.getElementById("current-card-wrap"),Q=55;ye<=-Q&&L<e.length-1?q():ye>=Q&&L>0?H():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};N.addEventListener("pointerdown",J),N.addEventListener("pointermove",Z),N.addEventListener("pointerup",P),N.addEventListener("pointercancel",P),N.addEventListener("touchstart",J,{passive:!0}),N.addEventListener("touchmove",Z,{passive:!0}),N.addEventListener("touchend",P),N.addEventListener("click",R=>{if(Math.abs(ye)>8)return;const Q=N.getBoundingClientRect();R.clientX-Q.left>Q.width/2?q():H()})}let ue=null;function re(){const N=document.getElementById("fireworks-canvas");if(!N)return;N.width=window.innerWidth,N.height=window.innerHeight;const se=N.getContext("2d"),fe=[];function ye(){const ve=Math.random()*N.width,he=Math.random()*N.height*.6,J=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Z=J[Math.floor(Math.random()*J.length)];for(let P=0;P<60;P++){const R=Math.PI*2/60*P,Q=2+Math.random()*5;fe.push({x:ve,y:he,vx:Math.cos(R)*Q,vy:Math.sin(R)*Q,alpha:1,color:Z,size:2+Math.random()*3})}}ye(),ue=setInterval(ye,600);function Ae(){if(document.getElementById("fireworks-canvas")){se.clearRect(0,0,N.width,N.height);for(let ve=fe.length-1;ve>=0;ve--){const he=fe[ve];if(he.x+=he.vx,he.y+=he.vy+.08,he.vy*=.98,he.alpha-=.018,he.alpha<=0){fe.splice(ve,1);continue}se.globalAlpha=he.alpha,se.fillStyle=he.color,se.beginPath(),se.arc(he.x,he.y,he.size,0,Math.PI*2),se.fill()}se.globalAlpha=1,(ue!==null||fe.length>0)&&requestAnimationFrame(Ae)}}Ae()}function B(){ue!==null&&(clearInterval(ue),ue=null);const N=document.getElementById("fireworks-canvas");N&&N.getContext("2d").clearRect(0,0,N.width,N.height)}if(a){const N=document.getElementById("reveal-btns");N&&(N.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ae=document.getElementById("reveal-next"))==null||ae.addEventListener("click",()=>{B(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{B(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{B(),c.remove(),i("boosters")})}function fo(e){var t,i;if(e.card_type==="player"&&e.player)return so(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[a==null?void 0:a.color]||l.purple,u=s[a==null?void 0:a.color]||s.purple,n=(a==null?void 0:a.name)||e.gc_type||"Game Changer",o=(a==null?void 0:a.effect)||((t=li[e.gc_type])==null?void 0:t.desc)||"",g=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,w=((i=li[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${u};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${u}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${n.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${w}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${o.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function go(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${l[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}mo()}function mo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const xo="simulation",gn="VOTRE_ZONE_ID";function yo(){switch(xo){case"propellerads":return ho();case"adsense":return bo();default:return wi()}}function wi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=i),l&&(l.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ho(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(wi());window.propeller.push({zone_id:gn,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function bo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(wi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:gn,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function vo(e,{state:t,navigate:i,toast:a,refreshProfile:c}){var w,$;const{data:l}=await E.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let s=Array.isArray((w=t.profile)==null?void 0:w.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let d=null;try{const r=(await sn()).find(p=>(p.name||"").toLowerCase().includes("new player"));r&&(d=ln(r))}catch(L){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',L)}const u=s.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await E.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function g(){var M;if(n>=u||!s.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const L=s[0],{data:r}=await E.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let p=[];try{if(L.type==="formation")p=await un(t.profile,0);else if(L.type==="game_changer")p=await pn(t.profile,L.count||3,0);else if(d&&((M=d.rates)!=null&&M.length)){const F={...d,cost:0,cardCount:L.count||d.cardCount||5};p=await ci(t.profile,F),L.guaranteeGK&&!t.profile.first_booster_opened&&(p.some(G=>G.player&&G.player.job==="GK")||await wo(t.profile,p),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else p=await cn(t.profile,L.count||5,0)}catch(F){a(F.message||"Erreur ouverture booster","error");return}s.shift(),n++,await o();const z=L.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:L.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${u})`,img:(d==null?void 0:d.img)||"/manager-wars/icons/booster-players.png"};fn(p,z,i,()=>{g()})}($=document.getElementById("onboard-start"))==null||$.addEventListener("click",()=>g())}async function wo(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],c=t.findIndex(s=>s.player);if(c===-1)return;const l=t[c];await E.from("cards").update({player_id:a.id}).eq("id",l.id),t[c]={...l,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const St={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Lt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function vt(e,t,i,a,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function Ge(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pi(e,t){var a,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ti(){const e=Math.random()*100;return e<10?3:e<30?2:1}function xt(e,t){const i=St[t]||St["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const d=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===s).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:s})),u=lt(d.length);d.forEach((n,o)=>{n._col=u[o]}),a[s]=d}return a}const l=[...e];for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let n=0;n<i[s];n++){let o=l.findIndex(g=>g.job===s);if(o===-1&&(o=l.findIndex(g=>g.job2===s)),o===-1&&(o=0),l[o]){const g={...l[o],_line:s};d.push(g),l.splice(o,1)}}const u=lt(d.length);d.forEach((n,o)=>{n._col=u[o]}),a[s]=d}return a}function Qe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ke(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ii(e,t,i){const c=new Set,l=t.filter(o=>{const g=o.gc_type||o.id;return c.has(g)?!1:(c.add(g),!0)});let s=[];function d(o,g){const w=o._gcDef,$={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},L={purple:"#9b59b6",light_blue:"#00bcd4"},r=$[w==null?void 0:w.color]||$.purple,p=L[w==null?void 0:w.color]||L.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${g?"#FFD700":p};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${g?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${g?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((w==null?void 0:w.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(w==null?void 0:w.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${w!=null&&w.image_url?`<img src="/manager-wars/icons/${w.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((w==null?void 0:w.effect)||"").slice(0,50)}</span>
      </div>
      ${g?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const u=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function n(){var g,w,$;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=s.length>0;e.innerHTML=`
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
        ${l.map(L=>{const r=s.find(p=>p.gc_type===L.gc_type);return d(L,!!r)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${o?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${o?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${o?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${o?"pointer":"default"};box-shadow:${o?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(L=>{L.addEventListener("click",()=>{const r=L.dataset.id,p=l.find(M=>M.id===r);if(!p)return;const z=s.findIndex(M=>M.gc_type===p.gc_type);z>-1?s.splice(z,1):s.length<3&&s.push(p),n()})}),(g=e.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>{o&&u(s)}),(w=e.querySelector("#gc-no-gc"))==null||w.addEventListener("click",()=>u([])),($=e.querySelector("#gc-reset"))==null||$.addEventListener("click",()=>{s.length&&(s=[],n())})}n()}function _o(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function $o(e,t,i){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){vt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=l.map(o=>o.id),{data:d}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let u=0;function n(){var M,F,O,G,q;const o=l[u],g=(d||[]).filter(H=>H.deck_id===o.id),w=g.filter(H=>{var ie;return H.is_starter&&((ie=H.card)==null?void 0:ie.player)}).map(H=>pi(H.card,H.position)),$=g.find(H=>{var ie;return((ie=H.card)==null?void 0:ie.card_type)==="formation"}),L=o.formation||((M=$==null?void 0:$.card)==null?void 0:M.formation)||"4-4-2",r=w.length>=11?xt(w,L):null,p=w.length>=11;Qe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${_o(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${u===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${u===0?"0.1":"0.3"});color:${u===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${u===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${o.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${L} · ${w.length}/11 ${o.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${u===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${u===l.length-1?"0.1":"0.3"});color:${u===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${u===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${r?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ut(r,L,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${w.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((H,ie)=>`<div style="width:7px;height:7px;border-radius:50%;background:${ie===u?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${p?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${p?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${p?"pointer":"default"}">
          ${p?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const ie=e.querySelector(".deck-preview-wrap svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(F=document.getElementById("prev-deck"))==null||F.addEventListener("click",()=>{u>0&&(u--,n())}),(O=document.getElementById("next-deck"))==null||O.addEventListener("click",()=>{u<l.length-1&&(u++,n())}),(G=document.getElementById("validate-deck"))==null||G.addEventListener("click",()=>{if(!p)return;const H=t.state.params||{};t.navigate("match",{...H,matchMode:H.matchMode||i,deckId:o.id})}),(q=document.getElementById("cancel-deck-select"))==null||q.addEventListener("click",()=>{Ke(e),c("home")});const z=document.getElementById("deck-swipe-zone");if(z){let H=0,ie=0;z.addEventListener("touchstart",ue=>{H=ue.touches[0].clientX,ie=ue.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",ue=>{const re=ue.changedTouches[0].clientX-H,B=ue.changedTouches[0].clientY-ie;Math.abs(re)<40||Math.abs(re)<Math.abs(B)||(re<0&&u<l.length-1?(u++,n()):re>0&&u>0&&(u--,n()))},{passive:!0})}}n()}function mn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function We(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ge(e),c=mn(e),l=e._line||e.job||"MIL",s=Lt[l]||"#555",d={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",u=e.note!==void 0?Number(e.note)||0:(Number(ke(e,l))||0)+(e.boost||0),n=xn(e==null?void 0:e.country_code),o=Math.round(i*.19),g=Math.round(i*.25),w=i-Math.round(i*.19)-Math.round(i*.25),$=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${$}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${w}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Jt(e==null?void 0:e.country_code)?`<img src="${Jt(e.country_code)}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">${n}</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":u}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function nt(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((l,s)=>{if(c+=We(l,40,52),s<a.length-1){const d=at(l,a[s+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Jt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function xn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function pt(e,t,i,a,c=310,l=310,s=[]){var F;const d=Gt[t]||{},u=Ui(t)||mi[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const O of o)(e[O]||[]).forEach((q,H)=>{n[`${O}${H+1}`]=q});function g(O){const G=d[O];return G?{x:G.x*c,y:G.y*l}:null}let w="";for(const[O,G]of u){const q=g(O),H=g(G);if(!q||!H)continue;const ie=n[O],ue=n[G],re=at(ie,ue);re==="#00ff88"||re==="#FFD700"?(w+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,w+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):w+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const $=48,L=64,r=13,p=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[O,G]of Object.entries(n)){const q=g(O);if(!q||!G)continue;const H=O.replace(/[0-9]/g,""),ie=Lt[H]||"#555",ue=s.includes(G.cardId),re=i==="attack"&&(["MIL","ATT"].includes(H)||ue)&&!G.used||i==="defense"&&["GK","DEF","MIL"].includes(H)&&!G.used,B=a.includes(G.cardId);let V;i==="attack"?V=ue?Math.max(1,Number(G.note_a)||0):H==="MIL"?Number(G.note_m)||0:Number(G.note_a)||0:i==="defense"?V=H==="GK"?Number(G.note_g)||0:H==="MIL"?Number(G.note_m)||0:Number(G.note_d)||0:V=Number(H==="GK"?G.note_g:H==="DEF"?G.note_d:H==="MIL"?G.note_m:G.note_a)||0,V=V+(G.boost||0);const ae=(q.x-$/2).toFixed(1),N=(q.y-L/2).toFixed(1),se=z[G==null?void 0:G.rarity]||z.normal;if(G.used){const Z=typeof import.meta<"u"&&"/manager-wars/"||"/",R=`${typeof window<"u"&&((F=window.location)==null?void 0:F.origin)||""}${Z}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");w+=`<rect x="${ae}" y="${N}" width="${$}" height="${L}" rx="5" fill="#161616"/>`,w+=`<image href="${R}" xlink:href="${R}" x="${ae}" y="${N}" width="${$}" height="${L}" preserveAspectRatio="xMidYMid slice"/>`,w+=`<rect x="${ae}" y="${N}" width="${$}" height="${L}" rx="5" fill="none" stroke="${se}" stroke-width="2" opacity="0.7"/>`,w+=`<rect x="${ae}" y="${N}" width="${$}" height="${L}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${G.cardId}" data-role="${H}" style="cursor:pointer"/>`;continue}const fe=B?.45:1,ye=B?"#FFD700":se,Ae=B?3:(G==null?void 0:G.rarity)==="legende"||(G==null?void 0:G.rarity)==="légende"||(G==null?void 0:G.rarity)==="pepite"||(G==null?void 0:G.rarity)==="pépite"?2.5:2,ve=L-r-p;w+=`<defs><clipPath id="cp-${O}"><rect x="${ae}" y="${(q.y-L/2+r).toFixed(1)}" width="${$}" height="${ve}"/></clipPath></defs>`,w+=`<rect x="${ae}" y="${N}" width="${$}" height="${L}" rx="5" fill="${ie}" opacity="${fe}"/>`;const he=Ge(G);he&&(w+=`<image href="${he}" xlink:href="${he}" x="${ae}" y="${(q.y-L/2+r).toFixed(1)}" width="${$}" height="${ve}" clip-path="url(#cp-${O})" preserveAspectRatio="xMidYMin slice"/>`),w+=`<rect x="${ae}" y="${N}" width="${$}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,w+=`<text x="${q.x.toFixed(1)}" y="${(q.y-L/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(G.name||"").slice(0,9)}</text>`;const J=(q.y+L/2-p).toFixed(1);w+=`<rect x="${ae}" y="${J}" width="${$}" height="${p}" fill="rgba(255,255,255,0.92)"/>`;{const Z=Jt(G.country_code);Z?w+=`<image href="${Z}" xlink:href="${Z}" x="${(q.x-20).toFixed(1)}" y="${(q.y+L/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:w+=`<text x="${(q.x-13).toFixed(1)}" y="${(q.y+L/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${xn(G.country_code)}</text>`,w+=`<text x="${q.x.toFixed(1)}" y="${(q.y+L/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${V}</text>`;const P=mn(G);P?w+=`<image href="${P}" xlink:href="${P}" x="${(q.x+$/2-14).toFixed(1)}" y="${(q.y+L/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:G.clubName&&(w+=`<text x="${(q.x+14).toFixed(1)}" y="${(q.y+L/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(G.clubName||"").slice(0,3).toUpperCase()}</text>`),G.boost&&(w+=`<rect x="${(q.x+$/2-12).toFixed(1)}" y="${(q.y-L/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,w+=`<text x="${(q.x+$/2-5).toFixed(1)}" y="${(q.y-L/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${G.boost}</text>`)}w+=`<rect x="${ae}" y="${N}" width="${$}" height="${L}" rx="5" fill="${B?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${Ae}" opacity="${fe}"/>`,re&&(w+=`<rect x="${ae}" y="${N}" width="${$}" height="${L}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${B?"selected":""}" data-card-id="${G.cardId}" data-role="${H}" style="cursor:pointer"/>`)}const M=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-M} ${-M} ${c+M*2} ${l+M*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${w}
  </svg>`}function ut(e,t,i,a,c=300,l=300,s=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${pt(e,t,i,a,c,l,s)}
  </div>`}function dt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ni(e,t,i,a){var G;const{state:c,navigate:l,toast:s}=t;Qe(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return $o(e,t,i);const u=d.deckId;let n,o,g,w;try{const q=await Promise.all([E.from("decks").select("formation,name").eq("id",u).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",u).order("slot_order")]);n=q[0].data,g=q[0].error,o=q[1].data,w=q[1].error}catch(q){console.error("[Match] Exception chargement deck:",q),vt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(g||w){console.error("[Match] Erreur Supabase:",g||w),vt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const $=(o||[]).filter(q=>{var H;return q.is_starter&&((H=q.card)==null?void 0:H.player)}).map(q=>pi(q.card,q.position)),L=(o||[]).filter(q=>{var H;return!q.is_starter&&((H=q.card)==null?void 0:H.player)}).map(q=>pi(q.card,q.position));if($.length<11){vt(e,"⚠️",`Deck incomplet (${$.length}/11).`,"Compléter",()=>l("decks"));return}const r=(o||[]).find(q=>{var H;return((H=q.card)==null?void 0:H.card_type)==="formation"}),p=(n==null?void 0:n.formation)||((G=r==null?void 0:r.card)==null?void 0:G.formation)||"4-4-2",{data:z,error:M}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:F}=await E.from("gc_definitions").select("*").eq("is_active",!0),O=(z||[]).map(q=>({...q,_gcDef:(F==null?void 0:F.find(H=>H.name===q.gc_type||H.id===q.gc_definition_id))||null}));a({deckId:u,formation:p,starters:$,subsRaw:L,gcCardsEnriched:O,gcDefs:F||[]})}async function ko(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),s=c;await ni(e,t,c,async({deckId:d,formation:u,starters:n,subsRaw:o,gcCardsEnriched:g,gcDefs:w})=>{try{const $=xt(n,u),L=await Eo(u,l),r=async p=>{try{const{data:z,error:M}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:d,status:"in_progress"}).select().single();if(M){console.error("[MatchIA] Erreur création match:",M),vt(e,"⚠️","Impossible de créer le match ("+M.message+").","Retour",()=>t.navigate("home"));return}const F={gcDefs:w||[],matchId:z==null?void 0:z.id,mode:s,difficulty:l,formation:u,homeTeam:$,aiTeam:L,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:p,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};To(e,F,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),vt(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!g.length){r([]);return}ii(e,g,r)}catch($){console.error("[MatchIA] Exception setup:",$),vt(e,"⚠️","Erreur de préparation du match : "+$.message,"Retour",()=>t.navigate("home"))}})}async function Eo(e,t){var s,d;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Ao(e);const a=St[e]||St["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...i];for(const u of["GK","DEF","MIL","ATT"]){const n=l.filter(L=>L.job===u),o=l.filter(L=>L.job!==u),g=[...n,...o],w=[];for(let L=0;L<a[u];L++){const r=g[L]||l[L];r&&w.push({cardId:"ai-"+r.id+"-"+L,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((s=r.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((d=r.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:u})}const $=lt(w.length);w.forEach((L,r)=>{L._col=$[r]}),c[u]=w}return c}function Ao(e){const t=St[e]||St["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const s=[];for(let u=0;u<t[l];u++){const n=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?n:2,note_d:l==="DEF"?n:2,note_m:l==="MIL"?n:2,note_a:l==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const d=lt(s.length);s.forEach((u,n)=>{u._col=d[n]}),i[l]=s}return i}function To(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${pt(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>So(e,t,i),5e3)}function So(e,t,i){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(r){return r.reduce((p,z)=>p+ke(z,"MIL"),0)}function s(r){let p=0;for(let z=0;z<r.length-1;z++){const M=at(r[z],r[z+1]);M==="#00ff88"?p+=2:M==="#FFD700"&&(p+=1)}return p}const d=l(a)+s(a),u=l(c)+s(c),n=d>=u;function o(r,p,z,M){return`<div id="duel-row-${M}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((F,O)=>{const G=O<r.length-1?at(F,r[O+1]):null,q=!G||G==="#ff3333"||G==="#cc2222",H=G==="#00ff88"?"+2":G==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${M}" data-idx="${O}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${We({...F,note:ke(F,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${O<r.length-1?`<div class="duel-link duel-link-${M}" data-idx="${O}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${q?"rgba(255,255,255,0.12)":G};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${q?"none":`0 0 8px ${G}`}">
            ${H?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${G}">${H}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${M}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${l(r)} + ${s(r)} liens = <b style="color:#fff">${l(r)+s(r)}</b>
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

    ${o(a,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${o(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const g=()=>{const r=(p,z)=>e.querySelectorAll(p).forEach((M,F)=>{setTimeout(()=>{M.style.opacity="1",M.style.transform="translateY(0) scale(1)"},z+F*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,z)=>{setTimeout(()=>{p.style.opacity="1"},z*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{w("score-home",d,800),w("score-ai",u,800)},1500)};function w(r,p,z){const M=document.getElementById(r);if(!M)return;const F=performance.now(),O=G=>{const q=Math.min(1,(G-F)/z);M.textContent=Math.round(p*(1-Math.pow(1-q,3))),q<1?requestAnimationFrame(O):M.textContent=p};requestAnimationFrame(O)}requestAnimationFrame(g),t.attacker=n?"home":"ai";const $=n?ti():null;n&&(t.boostCard={value:$}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(r=>({name:r.name,note:ke(r,"MIL"),portrait:Ge(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:ke(r,"MIL"),portrait:Ge(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:d,aiTotal:u,text:`Duel milieu : ${t.clubName} ${d} – ${u} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const L=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ui(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),p=document.getElementById("score-ai"),z=document.getElementById(n?"duel-row-home":"duel-row-ai"),M=document.getElementById(n?"duel-row-ai":"duel-row-home"),F=n?r:p,O=n?p:r;F&&(F.style.fontSize="80px",F.style.color=n?"#FFD700":"#ff6b6b",F.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),O&&(O.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var q;const G=document.getElementById("duel-shock");if(G){const H=(q=M||z)==null?void 0:q.getBoundingClientRect(),ie=e.querySelector(".match-screen").getBoundingClientRect();H&&(G.style.top=H.top-ie.top+H.height/2+"px"),G.style.animation="shockwave .5s ease-out forwards"}M&&(M.style.transformOrigin="center",M.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var q;const G=document.getElementById("duel-finale");G&&(G.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${n?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${n?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${$}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,G.style.transition="opacity .45s ease",G.style.opacity="1",G.style.pointerEvents="auto",(q=document.getElementById("start-match-btn"))==null||q.addEventListener("click",L))},600)},700)},2800)}function Lo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>dt(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>dt(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${dt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${dt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var F,O,G,q,H,ie,ue,re;const a=t.selected.map(B=>B.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter(B=>!c.includes(B.cardId)),d=Object.values(t.homeTeam).flat().filter(B=>B.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,u=!["GK","DEF","MIL","ATT"].some(B=>(t.aiTeam[B]||[]).some(V=>!V.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(B=>!B.used),o=t.phase==="attack"&&u&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(B=>!B.used).map(B=>B.cardId):[];t.log[t.log.length-1];const g=t.phase==="ai-attack"||t.phase==="ai-defense",w=t.phase==="attack",$=t.phase==="defense",L=t.phase==="finished",r=t.gcCards.filter(B=>!t.usedGc.includes(B.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const V=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${nt((V.players||[]).map(ae=>({...ae,used:!1})),"#ff6b6b",V.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const V=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${nt((V.players||[]).map(ae=>({...ae,used:!1})),"#00ff88",V.total)}
          </div>`}const B=t.log[t.log.length-1];return B?'<div style="padding:2px 4px">'+Lo(B)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const B=window.innerWidth>=700,V=(J,Z,P)=>{var Ue,Je;const R=(t.gcDefs||[]).find(j=>j.name===J.gc_type),Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[R==null?void 0:R.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",pe={purple:"#b06ce0",light_blue:"#00d4ef"}[R==null?void 0:R.color]||"#b06ce0",le=(R==null?void 0:R.name)||J.gc_type,je=(R==null?void 0:R.effect)||((Ue=Ve[J.gc_type])==null?void 0:Ue.desc)||"",ze=R!=null&&R.image_url?`/manager-wars/icons/${R.image_url}`:null,Pe=((Je=Ve[J.gc_type])==null?void 0:Je.icon)||"⚡",Oe=Math.round(P*.22),Ce=Math.round(P*.22),Ie=P-Oe-Ce,qe=le.length>12?7:9;return`<div class="gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}"
          style="box-sizing:border-box;width:${Z}px;height:${P}px;border-radius:10px;border:2px solid ${pe};background:${Q};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Oe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${qe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${le}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ie}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ze?`<img src="${ze}" style="max-width:${Z-10}px;max-height:${Ie-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ie*.55)}px">${Pe}</span>`}
          </div>
          <div style="height:${Ce}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${je.slice(0,38)}</span>
          </div>
        </div>`},ae=(J,Z)=>{var P;return`<div id="boost-card"
          style="box-sizing:border-box;width:${J}px;height:${Z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Z*.09)}px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`},N=(J,Z)=>Z?ae(130,175):V(J,130,175),se=(J,Z)=>Z?ae(68,95):V(J,68,95),fe=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=L?`<button id="btn-results" style="${fe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:g?`<div style="${fe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:w?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:$?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${fe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Ae=w||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map(J=>`<div class="sub-btn-col" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${We(J,76,100)}</div>`).join("")}
      </div>`,he=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ut(t.homeTeam,t.formation,t.phase,a,300,300,o)}
        </div>
      </div>`;return B?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${ve}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${he}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${Ae}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map(J=>N(J,!1)).join("")}
            ${p?N(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(t.homeTeam,t.formation,t.phase,a,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${r.map(J=>se(J,!1)).join("")}
            ${p?se(null,!0):""}
            <div id="sub-btn-main" style="cursor:${d?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${d?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${d?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${d?1:.4}">
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
          <div>${ye}${Ae}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(B=>{var V,ae,N;if(B.type==="duel"){const se=B.isGoal,fe=B.homeScored?"#FFD700":se?"#ff6b6b":"rgba(255,255,255,0.3)",ye=B.homeScored?"⚽ BUT !":se?"⚽ BUT IA !":(V=B.homePlayers)!=null&&V.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${se?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${fe};margin-bottom:4px">
                <div style="font-size:9px;color:${fe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(ae=B.homePlayers)!=null&&ae.length?`<div style="margin-bottom:3px">${nt(B.homePlayers,"rgba(255,255,255,0.7)",B.homeTotal)}</div>`:""}
                ${(N=B.aiPlayers)!=null&&N.length?`<div style="opacity:0.7">${nt(B.aiPlayers,"#ff6b6b",B.aiTotal)}</div>`:""}
              </div>`}return B.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${B.outPlayer?We({...B.outPlayer,used:!0,_line:B.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${B.inPlayer?We({...B.inPlayer,_line:B.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:B.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${B.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${B.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function z(){const B=e.querySelector(".match-screen");if(!B)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);B.style.bottom="auto",B.style.height=V+"px",B.style.minHeight=V+"px",B.style.maxHeight=V+"px",B.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),N=e.querySelector("#mobile-play-area");ae&&N&&(N.style.paddingBottom=ae.offsetHeight+"px")}if(z(),setTimeout(z,120),setTimeout(z,400),setTimeout(z,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",z),window.visualViewport.addEventListener("scroll",z)),window.addEventListener("resize",z)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const B=e.querySelector(".terrain-wrapper svg");B&&(B.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let B=!1,V=30;const ae=()=>document.getElementById("match-timer"),N=()=>{const se=ae();if(!se)return;const fe=String(Math.floor(V/60)).padStart(2,"0"),ye=String(V%60).padStart(2,"0");se.textContent=` ${fe}:${ye}`,se.style.color=B?"#ff2222":"#ff9500",se.style.fontWeight="900"};N(),t._timerInt=setInterval(()=>{if(V--,V<0)if(!B)B=!0,V=15,N();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const se=document.createElement("div");se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",se.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(se),setTimeout(()=>{se.remove(),qt(e,t,i)},2500)}else N()},1e3)}(F=document.getElementById("match-quit"))==null||F.addEventListener("click",()=>{Ke(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,qt(e,t,i))}),(O=document.getElementById("view-ai"))==null||O.addEventListener("click",()=>Go(t,i)),(G=document.getElementById("toggle-history"))==null||G.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.add("open")}),(q=document.getElementById("close-history"))==null||q.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.remove("open")}),(H=document.getElementById("btn-action"))==null||H.addEventListener("click",()=>{t.selected.length!==0&&(w?Io(e,t,i):$&&Mo(e,t,i))}),(ie=document.getElementById("btn-results"))==null||ie.addEventListener("click",()=>qt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(B=>{B.addEventListener("click",()=>zo(B,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(B=>{B.addEventListener("click",()=>ai(e,t,i,null,B.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(B=>{B.addEventListener("click",()=>qo(B.dataset.gcId,B.dataset.gcType,e,t,i))}),(ue=document.getElementById("boost-card"))==null||ue.addEventListener("click",()=>Do(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(B=>{B.addEventListener("click",()=>ai(e,t,i,B.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>ai(e,t,i))}function zo(e,t,i,a){const c=e.dataset.cardId,l=e.dataset.role,s=t.selected.findIndex(d=>d.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[l]||[]).find(u=>u.cardId===c);d&&t.selected.push({...d,_role:l,_line:l})}Ye(i,t,a)}function _i(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Io(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),_i(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(d=>!d.used)),c=t.selected.map(s=>{const d=(t.homeTeam[s._role]||[]).find(n=>n.cardId===s.cardId)||s,u=a&&["GK","DEF"].includes(s._role);return{...d,_line:s._role,...u?{note_a:Math.max(1,Number(d.note_a)||0)}:{}}}),l=Pt(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(s=>{const d=(t.homeTeam[s._role]||[]).find(u=>u.cardId===s.cardId);d&&(d.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>jo(e,t,i),1200)}function Mo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),_i(t,i,i.state.profile.id);const a=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d,_line:d._role})),c=Nt(a,t.modifiers.home);t.selected.forEach(d=>{const u=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId);u&&(u.used=!0)});const l=Rt(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:Ge(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const u=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d;return{name:u.name,note:(u._line==="GK"?Number(u.note_g)||0:u._line==="MIL"?Number(u.note_m)||0:Number(u.note_d)||0)+(u.boost||0),portrait:Ge(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(l.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),Xt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Et(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Et(e,t,i,"home-attack")}function ui(e,t,i){_i(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Qi(a,"attack",t.difficulty);if(!c.length){Kt(e,t,i);return}const l=Pt(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),u=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!u){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Ge(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Ye(e,t,i),Xt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Et(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function jo(e,t,i){var n,o;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Qi(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(g=>(t.aiTeam[g]||[]).filter(w=>!w.used)).length){t.homeScore++;const w={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map($=>({name:$.name,note:ke($,$._line||$.job),portrait:Ge($),job:$.job,country_code:$.country_code,rarity:$.rarity,clubName:$.clubName,clubLogo:$.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(w),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),Xt(w.homePlayers,t.homeScore,t.aiScore,!0,()=>{Et(e,t,i,"ai-attack")});return}const s=c.length>0?Nt(c,t.modifiers.ai).total:0;c.forEach(g=>{g.used=!0});const d=Rt(t.pendingAttack.total,s,t.modifiers.ai),u={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(g=>({name:g.name,note:g._line==="MIL"?g.note_m:g.note_a,portrait:Ge(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:c.map(g=>({name:g.name,note:g._line==="GK"?g.note_g:g._line==="MIL"?g.note_m:g.note_d,portrait:Ge(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(d.shielded)u.text="🛡️ Bouclier IA !",t.log.push(u);else if(d.goal){t.homeScore++,u.isGoal=!0,u.homeScored=!0,u.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),Xt(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{Et(e,t,i,"ai-attack")});return}else u.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(u);t.modifiers.ai={},t.pendingAttack=null,Et(e,t,i,"ai-attack")}function Et(e,t,i,a){if(t.round++,yn(t)){qt(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used).length){Kt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Kt(e,t,i);return}setTimeout(()=>ui(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Kt(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ui(e,t,i),800)}}function yn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!i}function Kt(e,t,i){yn(t)?qt(e,t,i):(t.phase="attack",Ye(e,t,i))}function Co(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Ge(e),l=Ge(t),s=Lt[e.job]||"#555",d=Lt[t.job]||"#555",u=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${u}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let o=!1;const g=()=>{o||(o=!0,a.remove(),i())};a.addEventListener("click",g),setTimeout(g,2e3)}function zt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ai(e,t,i,a=null,c=null){var $,L;if(t.phase!=="attack"){zt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){zt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([r,p])=>(p||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||r}))),s=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!l.length){zt("Aucun joueur utilisé à remplacer");return}if(!s.length){zt("Aucun remplaçant disponible");return}let d=Math.max(0,l.findIndex(r=>r.cardId===c));const u=(($=l[d])==null?void 0:$._line)||((L=l[d])==null?void 0:L.job);let n=a?Math.max(0,s.findIndex(r=>r.cardId===a)):Math.max(0,s.findIndex(r=>r.job===u)),o=!1;const g=document.createElement("div");g.id="sub-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function w(){var G,q,H,ie,ue,re;const r=l[d],p=s[n],z=Math.min(130,Math.round((window.innerWidth-90)/2)),M=Math.round(z*1.35),F=B=>`background:rgba(255,255,255,0.12);border:none;color:${B?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${B?"default":"pointer"};flex-shrink:0`;g.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${F(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${p?We({...p,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="in-down" style="${F(n>=s.length-1)}" ${n>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${F(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${r?We({...r,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="out-down" style="${F(d>=l.length-1)}" ${d>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(G=g.querySelector("#sub-close"))==null||G.addEventListener("click",()=>g.remove()),(q=g.querySelector("#out-up"))==null||q.addEventListener("click",()=>{d>0&&(d--,w())}),(H=g.querySelector("#out-down"))==null||H.addEventListener("click",()=>{d<l.length-1&&(d++,w())}),(ie=g.querySelector("#in-up"))==null||ie.addEventListener("click",()=>{n>0&&(n--,w())}),(ue=g.querySelector("#in-down"))==null||ue.addEventListener("click",()=>{n<s.length-1&&(n++,w())});const O=(B,V,ae,N)=>{const se=g.querySelector("#"+B);if(!se)return;let fe=0;se.addEventListener("touchstart",ye=>{fe=ye.touches[0].clientY},{passive:!0}),se.addEventListener("touchend",ye=>{const Ae=ye.changedTouches[0].clientY-fe;if(Math.abs(Ae)<30)return;const ve=V();Ae<0&&ve<N-1?(ae(ve+1),w()):Ae>0&&ve>0&&(ae(ve-1),w())},{passive:!0})};O("in-panel",()=>n,B=>n=B,s.length),O("out-panel",()=>d,B=>d=B,l.length),(re=g.querySelector("#sub-confirm"))==null||re.addEventListener("click",B=>{if(B.preventDefault(),B.stopPropagation(),o)return;o=!0;const V=l[d],ae=s[n];if(!V||!ae)return;let N=null,se=-1;for(const[ye,Ae]of Object.entries(t.homeTeam)){const ve=(Ae||[]).findIndex(he=>he.cardId===V.cardId);if(ve!==-1){N=ye,se=ve;break}}if(se===-1||!N){zt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),g.remove();return}const fe={...ae,_line:N,_col:V._col||0,used:!1,boost:0};t.homeTeam[N].splice(se,1,fe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ae.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:V.name,firstname:V.firstname,note:ke(V,N),portrait:Ge(V),job:V.job,country_code:V.country_code,rarity:V.rarity,clubName:V.clubName,clubLogo:V.clubLogo},inPlayer:{name:ae.name,firstname:ae.firstname,note:ke(ae,N),portrait:Ge(ae),job:ae.job,country_code:ae.country_code,rarity:ae.rarity,clubName:ae.clubName,clubLogo:ae.clubLogo},text:`🔄 ${ae.firstname} ${ae.name} remplace ${V.firstname} ${V.name}`}),g.remove(),Co(V,ae,()=>Ye(e,t,i))})}document.body.appendChild(g),w()}function qo(e,t,i,a,c){var L,r;const l=(a.gcDefs||[]).find(p=>p.name===t),s=Ve[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",u={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",n=(l==null?void 0:l.name)||t,o=(l==null?void 0:l.effect)||s.desc,g=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,w=s.icon||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${u};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${u}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${w}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild($),(L=$.querySelector("#gc-back"))==null||L.addEventListener("click",()=>$.remove()),(r=$.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{$.remove(),Bo(e,t,i,a,c)})}function Ut(e,t,i,a,c,l){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function u(){var n,o;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(g=>{const w=g._line||g.job||"MIL",$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w]||"#555",L=ke(g,w)+(g.boost||0),r=d.find(p=>p.cardId===g.cardId);return`<div class="gc-pick-item" data-cid="${g.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${$};overflow:hidden;cursor:pointer;flex-shrink:0;${g.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${L}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${w}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${t})
      </button>
    </div>`,(n=s.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.cid,$=e.find(r=>r.cardId===w);if(!$)return;const L=d.findIndex(r=>r.cardId===w);L>-1?d.splice(L,1):d.length<t&&d.push($),u()})}),(o=s.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{s.remove(),l(d)})}u(),document.body.appendChild(s)}const Fo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,c,l)=>{const s=Object.entries(a.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,u])=>u.filter(n=>!n.used).map(n=>({...n,_line:d})));return s.length?(Ut(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,d=>{d.forEach(u=>{const n=(a.homeTeam[u._line]||[]).find(o=>o.cardId===u.cardId);n&&(n.boost=(n.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Ye(c,a,l)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(c,a,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},c,l,s)=>{const d=a==="home"?c.homeTeam:c.aiTeam,u=a==="ai"?"adverse":"allié",n=Object.entries(d).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,g])=>g.filter(w=>!w.used).map(w=>({...w,_line:o})));return n.length?(Ut(n,t,`Choisir ${t} joueur(s) ${u}(s) à débuffer (-${e})`,l,c,o=>{o.forEach(g=>{const $=((a==="home"?c.homeTeam:c.aiTeam)[g._line]||[]).find(L=>L.cardId===g.cardId);$&&($.boost=($.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${$.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Ye(l,c,s)}),!0):(c.log.push({text:`🎯 Aucun joueur ${u} disponible`,type:"info"}),Ye(l,c,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,c,l)=>{const s=i==="home"?a.homeTeam:a.aiTeam,d=i==="ai"?"adverse":"allié",u=Object.entries(s).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(g=>!g.used).map(g=>({...g,_line:n})));return u.length?(Ut(u,e,`Choisir ${e} joueur(s) ${d}(s) à exclure`,c,a,n=>{n.forEach(o=>{const w=((i==="home"?a.homeTeam:a.aiTeam)[o._line]||[]).find($=>$.cardId===o.cardId);w&&(w.used=!0,a.log.push({text:`❌ ${w.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(c,a,l)}),!0):(a.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ye(c,a,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,c)=>{const l=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,d])=>d.filter(u=>u.used).map(u=>({...u,_line:s})));return l.length?(Ut(l,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,s=>{s.forEach(d=>{const u=(i.homeTeam[d._line]||[]).find(n=>n.cardId===d.cardId);u&&(u.used=!1,i.log.push({text:`💫 ${u.name} ressuscité !`,type:"info"}))}),Ye(a,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(a,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Bo(e,t,i,a,c){a.usedGc.push(e);const l=a.gcDefs||[],s=l.find(u=>u.name===t)||l.find(u=>{var n;return((n=u.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let d=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const u=Fo[s.effect_type];u?u(s.effect_params||{},a,i,c)||(d=!0):(c.toast(`Effet "${s.effect_type}" non implémenté`,"error"),d=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const u=Object.entries(a.homeTeam).flatMap(([n,o])=>(o||[]).filter(g=>g.used).map(g=>({...g,_line:n})));u.length?(u[0].used=!1,a.log.push({text:`💫 ${u[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const u=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(n=>!n.used);if(u.length){const n=u.sort((o,g)=>ke(g,"ATT")-ke(o,"ATT"))[0];n.used=!0,a.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}E.from("cards").delete().eq("id",e).then(()=>{}),d&&Ye(i,a,c)}function Do(e,t,i){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Lt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ke(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[s]||[]).find(u=>u.cardId===l);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function Xt(e,t,i,a,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(n,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
    </div>`).join("");l.innerHTML=`
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
    ${t} – ${i}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(n=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Lt[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let d=!1;const u=()=>{d||(d=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",u),setTimeout(u,3500)}async function qt(e,t,i){var o,g;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,s=c?"victoire":l?"nul":"defaite",d=On(t.mode,s);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const u={credits:(a.profile.credits||0)+d,matches_played:(a.profile.matches_played||0)+1};c?u.wins=(a.profile.wins||0)+1:l?u.draws=(a.profile.draws||0)+1:u.losses=(a.profile.losses||0)+1,await E.from("users").update(u).eq("id",a.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":l?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":l?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),Ke(e),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{n.remove(),Ke(e),i.navigate("match",{matchMode:t.mode})})}function Go(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${pt(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function hn(e,t){var i,a;try{const c=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(E.getChannels?E.getChannels():[]).forEach(s=>{const d=s.topic||"";(d.includes("matchmaking")||d.includes("pvp-match")||d.includes("friend-invite"))&&E.removeChannel(s)})}catch(l){console.warn("[Random] cleanup canaux:",l)}c&&await E.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ni(e,t,"random",({deckId:c,formation:l,starters:s,subsRaw:d,gcCardsEnriched:u,gcDefs:n})=>{const o=g=>Po(e,t,c,l,s,d,g,n||[]);if(!u.length){o([]);return}ii(e,u,o)})}async function Po(e,t,i,a,c,l,s=[],d=[]){var M;const{state:u,navigate:n,toast:o}=t;let g=!1,w=null;Qe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const $=async(F=!0)=>{g=!0,w&&(E.removeChannel(w),w=null),F&&await E.rpc("cancel_matchmaking",{p_user_id:u.profile.id}).catch(()=>{})};(M=document.getElementById("mm-cancel"))==null||M.addEventListener("click",async()=>{try{await $(!0)}catch{}Ke(e),n("home")});const L=async(F,O,G)=>{if(g)return;g=!0,w&&(E.removeChannel(w),w=null);const q=document.getElementById("mm-status");q&&(q.textContent="Adversaire trouvé !"),await new Promise(H=>setTimeout(H,600)),e.isConnected&&bn(e,t,F,G,s,d)},{data:r,error:p}=await E.rpc("try_matchmake",{p_user_id:u.profile.id,p_deck_id:i});if(p||!(r!=null&&r.success)){o("Erreur de matchmaking","error"),Ke(e),n("home");return}if(r.matched){L(r.match_id,r.opponent_id,!1);return}const z=document.getElementById("mm-status");z&&(z.textContent="En attente d'un autre joueur..."),w=E.channel("matchmaking-"+u.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${u.profile.id}`},F=>{const O=F.new;O.status==="matched"&&O.match_id&&L(O.match_id,O.matched_with,!0)}).subscribe()}async function No(e,t,i){const{state:a,navigate:c,toast:l}=t;try{(E.getChannels?E.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&E.removeChannel(n)})}catch{}const{data:s}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!s){l("Match introuvable","error"),c("home");return}if(s.status==="finished"){l("Ce match est terminé","info"),c("home");return}const d=s.home_id===a.profile.id;bn(e,t,i,d,[],[])}async function bn(e,t,i,a,c=[],l=[]){const{state:s,navigate:d,toast:u}=t,n=a?"p1":"p2",o=a?"p2":"p1",g=(c||[]).map(j=>j.id),w=(c||[]).map(j=>({id:j.id,gc_type:j.gc_type,_gcDef:j._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:$}=await E.from("matches").select("*").eq("id",i).single();if(!$){u("Match introuvable","error"),d("home");return}async function L(){const[{data:j},{data:b},{data:k},{data:A}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:$.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:$.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",$.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",$.away_id).single()]),f=v=>({cardId:v.card_id,position:v.position,id:v.id,firstname:v.firstname,name:v.surname_encoded,country_code:v.country_code,club_id:v.club_id,job:v.job,job2:v.job2,note_g:Number(v.note_g)||0,note_d:Number(v.note_d)||0,note_m:Number(v.note_m)||0,note_a:Number(v.note_a)||0,rarity:v.rarity,skin:v.skin,hair:v.hair,hair_length:v.hair_length,clubName:v.club_encoded_name||null,clubLogo:v.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((j==null?void 0:j.starters)||[]).map(v=>f(v)),x=((b==null?void 0:b.starters)||[]).map(v=>f(v)),y=(j==null?void 0:j.formation)||"4-4-2",h=(b==null?void 0:b.formation)||"4-4-2";return{p1Team:xt(m,y),p2Team:xt(x,h),p1Subs:((j==null?void 0:j.subs)||[]).map(v=>f(v)),p2Subs:((b==null?void 0:b.subs)||[]).map(v=>f(v)),p1Formation:y,p2Formation:h,p1Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 1",p2Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?g:[],gc_p2:a?[]:g,gcCardsFull_p1:a?w:[],gcCardsFull_p2:a?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=$.game_state&&Object.keys($.game_state).length?$.game_state:null;if(!r)if(a){r=await L();const{data:j}=await E.from("matches").select("game_state").eq("id",i).single();!(j!=null&&j.game_state)||!Object.keys(j.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:$.home_id}).eq("id",i):r=j.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let j=0;j<30&&!r;j++){await new Promise(k=>setTimeout(k,400));const{data:b}=await E.from("matches").select("game_state").eq("id",i).single();b!=null&&b.game_state&&Object.keys(b.game_state).length&&(r=b.game_state)}if(!r){u("Erreur de synchronisation","error"),d("home");return}r.gc_p2=g,r.gcCardsFull_p2=w,await E.from("matches").update({game_state:r}).eq("id",i)}let p=!1,z=null,M=!1;const F=new Set,O=new Set;function G(j){var v,_;try{E.removeChannel(q)}catch{}const b=r[n+"Score"]||0,k=r[o+"Score"]||0;let A,f;j.winner_id?(A=j.winner_id===s.profile.id,f=!1):j.forfeit?(A=b>k,f=!1):(f=b===k,A=b>k),(v=document.getElementById("pvp-end-overlay"))==null||v.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=f?"🤝":A?"🏆":"😞",y=f?"MATCH NUL":A?"VICTOIRE !":"DÉFAITE",h=f?"#fff":A?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${h}">${y}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${b} – ${k} ${r[o+"Name"]}</div>
      ${j.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${A?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(_=m.querySelector("#pvp-end-home"))==null||_.addEventListener("click",()=>{m.remove(),Ke(e),d("home")})}const q=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},j=>{const b=j.new;try{if(b.status==="finished"||b.forfeit){if(p)return;p=!0,z&&(clearInterval(z),z=null),b.game_state&&(r=b.game_state),G(b);return}if(b.game_state){const k=r;r=b.game_state;const A=r._lastGC;if(A&&A.seq&&!O.has(A.seq)&&(O.add(A.seq),A.by!==n)){ve(A.type,A.by,()=>N());return}const f=k[n+"Score"]||0,m=k[o+"Score"]||0,x=r[n+"Score"]||0,y=r[o+"Score"]||0,h=x>f,v=y>m;if((h||v)&&!F.has(r.round)){F.add(r.round);const _=[...r.log||[]].reverse().find(S=>S.isGoal),T=((_==null?void 0:_.homePlayers)||[]).map(S=>({name:S.name,note:S.note,portrait:S.portrait,job:S.job}));Ae(T,x,y,h,()=>N());return}N()}}catch(k){console.error("[PvP] crash:",k)}}).subscribe();async function H(j){Object.assign(r,j),r.lastActionAt=new Date().toISOString();const{error:b}=await E.from("matches").update({game_state:r}).eq("id",i);b&&u("Erreur de synchronisation","error");try{N()}catch(k){console.error("[PvP] renderPvpScreen crash:",k)}}async function ie(){if(p)return;p=!0,z&&(clearInterval(z),z=null);const j=a?$.away_id:$.home_id,b=a?"p2":"p1",k=a?"p1":"p2",A={...r,[b+"Score"]:3,[k+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:j,home_score:A.p1Score||0,away_score:A.p2Score||0,game_state:A}).eq("id",i)}catch{}try{E.removeChannel(q)}catch{}setTimeout(()=>{Ke(e),d("home")},800)}const ue={BOOST_STAT:({value:j=1,count:b=1,roles:k=[]},A,f)=>{const m=A[n+"Team"],x=Object.entries(m).filter(([y])=>!k.length||k.includes(y)).flatMap(([y,h])=>h.filter(v=>!v.used).map(v=>({...v,_line:y})));if(!x.length){A.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),f(A);return}re(x,b,`Choisir ${b} joueur(s) à booster (+${j})`,y=>{y.forEach(h=>{const v=(m[h._line]||[]).find(_=>_.cardId===h.cardId);v&&(v.boost=(v.boost||0)+j,A.log.push({text:`⚡ +${j} sur ${v.name}`,type:"info"}))}),A[n+"Team"]=m,f(A)})},DEBUFF_STAT:({value:j=1,count:b=1,roles:k=[],target:A="ai"},f,m)=>{const x=A==="home"?n:o,y=f[x+"Team"],h=A==="home"?"allié":"adverse",v=Object.entries(y).filter(([_])=>!k.length||k.includes(_)).flatMap(([_,T])=>T.filter(S=>!S.used).map(S=>({...S,_line:_})));if(!v.length){f.log.push({text:`🎯 Aucun joueur ${h}`,type:"info"}),m(f);return}re(v,b,`Choisir ${b} joueur(s) ${h}(s) (-${j})`,_=>{_.forEach(T=>{const S=(y[T._line]||[]).find(I=>I.cardId===T.cardId);S&&(S.boost=(S.boost||0)-j,f.log.push({text:`🎯 -${j} sur ${S.name}`,type:"info"}))}),f[x+"Team"]=y,m(f)})},GRAY_PLAYER:({count:j=1,roles:b=[],target:k="ai"},A,f)=>{const m=k==="home"?n:o,x=A[m+"Team"],y=k==="home"?"allié":"adverse",h=Object.entries(x).filter(([v])=>!b.length||b.includes(v)).flatMap(([v,_])=>_.filter(T=>!T.used).map(T=>({...T,_line:v})));if(!h.length){A.log.push({text:`❌ Aucun joueur ${y}`,type:"info"}),f(A);return}re(h,j,`Choisir ${j} joueur(s) ${y}(s) à exclure`,v=>{v.forEach(_=>{const T=(x[_._line]||[]).find(S=>S.cardId===_.cardId);T&&(T.used=!0,A.log.push({text:`❌ ${T.name} exclu !`,type:"info"}))}),A[m+"Team"]=x,f(A)})},REVIVE_PLAYER:({count:j=1,roles:b=[]},k,A)=>{const f=k[n+"Team"],m=Object.entries(f).filter(([x])=>!b.length||b.includes(x)).flatMap(([x,y])=>y.filter(h=>h.used).map(h=>({...h,_line:x})));if(!m.length){k.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),A(k);return}re(m,j,`Choisir ${j} joueur(s) à ressusciter`,x=>{x.forEach(y=>{const h=(f[y._line]||[]).find(v=>v.cardId===y.cardId);h&&(h.used=!1,k.log.push({text:`💫 ${h.name} ressuscité !`,type:"info"}))}),k[n+"Team"]=f,A(k)})},REMOVE_GOAL:({},j,b)=>{const k=o+"Score";j[k]>0?(j[k]--,j.log.push({text:"🚫 Dernier but annulé !",type:"info"})):j.log.push({text:"🚫 Aucun but à annuler",type:"info"}),b(j)},ADD_GOAL_DRAW:({},j,b)=>{j[n+"Score"]===j[o+"Score"]?(j[n+"Score"]++,j.log.push({text:"🎯 But bonus !",type:"info"})):j.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),b(j)},ADD_SUB:({value:j=1},b,k)=>{b.maxSubs=(b.maxSubs||3)+j,b.log.push({text:`🔄 +${j} remplacement(s)`,type:"info"}),k(b)},CUSTOM:({},j,b)=>b(j)};function re(j,b,k,A){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var h,v;const y=j.map(_=>{const T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[_._line]||"#555",S=ke(_,_._line)+(_.boost||0),U=m.find(C=>C.cardId===_.cardId)?"#FFD700":"rgba(255,255,255,0.25)",D=_.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${_.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${U};background:${T};overflow:hidden;cursor:pointer;${D}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${_.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${_._line}</div>
        </div>`}).join("");f.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${k}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${b}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${y}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${b})
          </button>
        </div>`,(h=f.querySelector("#pp-close"))==null||h.addEventListener("click",()=>f.remove()),f.querySelectorAll(".pp-item").forEach(_=>{_.addEventListener("click",()=>{const T=_.dataset.cid,S=j.find(U=>U.cardId===T),I=m.findIndex(U=>U.cardId===T);S&&(I>-1?m.splice(I,1):m.length<b&&m.push(S),x())})}),(v=f.querySelector("#pp-confirm"))==null||v.addEventListener("click",()=>{f.remove(),A(m)})}x(),document.body.appendChild(f)}async function B(j,b){const A=(r["gcCardsFull_"+n]||[]).find(y=>y.id===j),f=(A==null?void 0:A._gcDef)||(r.gcDefs||[]).find(y=>{var h;return y.name===b||((h=y.name)==null?void 0:h.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),m=[...r["usedGc_"+n]||[],j],x={type:b,by:n,seq:(r._gcAnimSeq||0)+1};O.add(x.seq),ve(b,n,async()=>{if(f!=null&&f.effect_type&&f.effect_type!=="CUSTOM"){const h=ue[f.effect_type];if(h){const v={...r};h(f.effect_params||{},v,async _=>{_["usedGc_"+n]=m,_._lastGC=x,_._gcAnimSeq=x.seq,await H(_)});return}}const y={...r};switch(b){case"Remplacement+":y.maxSubs=(y.maxSubs||3)+1,y.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const h=o+"Score";y[h]>0&&(y[h]--,y.log.push({text:"🚫 But annulé",type:"info"}));break}}y["usedGc_"+n]=m,y._lastGC=x,y._gcAnimSeq=x.seq,await H(y)})}function V(j,b){const k="usedCardIds_"+j,A=new Set(r[k]||[]);b.forEach(f=>A.add(f)),r[k]=[...A]}function ae(){for(const j of["p1","p2"]){const b=new Set(r["usedCardIds_"+j]||[]),k=r[j+"Team"];if(k)for(const A of["GK","DEF","MIL","ATT"])(k[A]||[]).forEach(f=>{f.used=b.has(f.cardId)})}}function N(){var Be,Ze,tt,Xe,it,ft;if(r.phase==="reveal")return se();if(r.phase==="midfield")return ye();if(r.phase==="finished")return Je();const j=r[n+"Team"],b=r[o+"Team"];ae();const k=r[n+"Score"],A=r[o+"Score"],f=r[n+"Name"],m=r[o+"Name"],x=r.phase===n+"-attack",y=r.phase===n+"-defense",h=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],v=h.map(oe=>oe.cardId),_=window.innerWidth>=700,T=r[n+"Subs"]||[],S=r["usedSubIds_"+n]||[],I=T.filter(oe=>!S.includes(oe.cardId)),U=r["gcCardsFull_"+n]||[],D=r["usedGc_"+n]||[],C=U.filter(oe=>!D.includes(oe.id)),K=r.boostOwner===n&&!r.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(oe=>(b[oe]||[]).some(Y=>!Y.used)),X=[...j.MIL||[],...j.ATT||[]].filter(oe=>!oe.used),te=x&&ee&&X.length===0?[...j.GK||[],...j.DEF||[]].filter(oe=>!oe.used).map(oe=>oe.cardId):[];function ne(oe,Y,ce){var ht,gt;const ge=oe._gcDef,W={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ge==null?void 0:ge.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",xe={purple:"#b06ce0",light_blue:"#00d4ef"}[ge==null?void 0:ge.color]||"#b06ce0",Te=(ge==null?void 0:ge.name)||oe.gc_type,be=(ge==null?void 0:ge.effect)||((ht=Ve[oe.gc_type])==null?void 0:ht.desc)||"",et=ge!=null&&ge.image_url?`/manager-wars/icons/${ge.image_url}`:null,ot=((gt=Ve[oe.gc_type])==null?void 0:gt.icon)||"⚡",st=Math.round(ce*.22),rt=Math.round(ce*.22),ct=ce-st-rt,yt=Te.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${oe.id}" data-gc-type="${oe.gc_type}"
        style="box-sizing:border-box;width:${Y}px;height:${ce}px;border-radius:10px;border:2px solid ${xe};background:${W};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${st}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${yt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Y-6}px">${Te}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${Y-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${ot}</span>`}
        </div>
        <div style="height:${rt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${be.slice(0,38)}</span>
        </div>
      </div>`}function de(oe,Y){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${oe}px;height:${Y}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Y*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Y*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Y*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const me=(oe,Y)=>Y?de(130,175):ne(oe,130,175),we=(oe,Y)=>Y?de(68,95):ne(oe,68,95),_e=_?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",$e=x?Ce(n)?`<button id="pvp-action" style="${_e};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${h.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${_e};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:y?`<button id="pvp-action" style="${_e};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${h.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Ee=x&&!Ce(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${h.length}/3 sélectionné(s)</div>`:"",Se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${I.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':I.map(oe=>`<div class="pvp-sub-btn" data-sub-id="${oe.cardId}" style="cursor:pointer;flex-shrink:0">${We(oe,_?76:44,_?100:58)}</div>`).join("")}
    </div>`,Me=x?"attack":y?"defense":"idle",Ne=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ut(j,r[n+"Formation"],Me,v,300,300,te)}
      </div>
    </div>`;function Le(oe){if(oe.type==="duel"&&(oe.homeTotal!=null||oe.aiTotal!=null)){const Y=(oe.homeTotal||0)>=(oe.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(oe.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(oe.homePlayers||[]).map(ce=>dt(ce)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Y?20:14}px;font-weight:900;color:${Y?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${oe.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Y?14:20}px;font-weight:900;color:${Y?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${oe.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(oe.aiPlayers||[]).map(ce=>dt(ce)).join("")}
            </div>
          </div>
          ${oe.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${oe.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${oe.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${oe.type==="goal"?700:400};padding:3px 2px">${oe.text||""}</div>`}const He=(()=>{var Y,ce;if(y&&((Y=r.pendingAttack)!=null&&Y.players)){const ge=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${nt((ge.players||[]).map(W=>({...W,used:!1})),"#ff6b6b",ge.total)}
        </div>`}if(x&&((ce=r.pendingAttack)!=null&&ce.players)){const ge=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((ge.players||[]).map(W=>({...W,used:!1})),"#00ff88",ge.total)}
        </div>`}const oe=(r.log||[]).slice(-1)[0];return oe?'<div style="padding:2px 4px">'+Le(oe)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Re=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${k} – ${A}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;Qe(e),e.style.overflow="hidden",_?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Se}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ne}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${$e}${Ee}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${C.map(oe=>me(oe,!1)).join("")}
            ${K?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(j,r[n+"Formation"],Me,v,300,300,te)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${C.map(oe=>we(oe,!1)).join("")}
            ${K?we(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${x&&I.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${x&&I.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${x&&I.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${x&&I.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${I.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+n]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${$e}${Ee}</div>
        </div>
      </div>`;function Fe(){const oe=e.querySelector(".match-screen");if(!oe)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);oe.style.height=Y+"px",oe.style.minHeight=Y+"px",oe.style.maxHeight=Y+"px",oe.style.overflow="hidden";const ce=e.querySelector("#mobile-action-bar"),ge=e.querySelector("#mobile-play-area");ce&&ge&&(ge.style.paddingBottom=ce.offsetHeight+"px")}if(Fe(),setTimeout(Fe,120),setTimeout(Fe,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Fe),window.visualViewport.addEventListener("scroll",Fe)),window.addEventListener("resize",Fe)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(oe=>{oe.addEventListener("click",()=>{if(!x&&!y)return;const Y=oe.dataset.cardId,ce=oe.dataset.role,ge=(j[ce]||[]).find(be=>be.cardId===Y);if(!ge||ge.used)return;const W=te.includes(Y);if(x&&!["MIL","ATT"].includes(ce)&&!W)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const xe=r["selected_"+n],Te=xe.findIndex(be=>be.cardId===Y);Te>-1?xe.splice(Te,1):xe.length<3&&xe.push({...ge,_role:ce}),N()})}),e.querySelectorAll(".match-used-hit").forEach(oe=>{oe.addEventListener("click",()=>Z(oe.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(oe=>{oe.addEventListener("click",()=>Z())}),(Be=e.querySelector("#pvp-sub-open"))==null||Be.addEventListener("click",()=>Z()),e.querySelectorAll(".pvp-gc-mini").forEach(oe=>{oe.addEventListener("click",()=>he(oe.dataset.gcId,oe.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>J()),(tt=e.querySelector("#pvp-action"))==null||tt.addEventListener("click",oe=>{x?oe.currentTarget.dataset.pass==="1"||!Ce(n)?pe():le():y&&je()}),(Xe=e.querySelector("#pvp-quit"))==null||Xe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ie()}),(it=e.querySelector("#pvp-view-opp"))==null||it.addEventListener("click",()=>R()),(ft=e.querySelector("#pvp-toggle-history"))==null||ft.addEventListener("click",()=>Q()),z&&(clearInterval(z),z=null),(x||y)&&!p){let oe=30,Y=!1;const ce=()=>document.getElementById("pvp-timer"),ge=()=>{ce()&&(ce().textContent=oe+"s",ce().style.color=Y?"#ff4444":"#fff")};ge(),z=setInterval(()=>{oe--,oe<0?Y?(clearInterval(z),z=null,x&&!Ce(n)?pe():ie()):(Y=!0,oe=15,ge()):ge()},1e3)}}function se(){Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await H({phase:"midfield"})},5e3)}let fe=!1;function ye(){if(fe)return;const j=r[n+"Team"].MIL||[],b=r[o+"Team"].MIL||[];function k(C){return C.reduce((K,ee)=>K+ke(ee,"MIL"),0)}function A(C){let K=0;for(let ee=0;ee<C.length-1;ee++){const X=at(C[ee],C[ee+1]);X==="#00ff88"?K+=2:X==="#FFD700"&&(K+=1)}return K}const f=k(j)+A(j),m=k(b)+A(b),x=f>=m;function y(C,K,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${K}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${C.map((X,te)=>{const ne=te<C.length-1?at(X,C[te+1]):null,de=!ne||ne==="#ff3333"||ne==="#cc2222",me=ne==="#00ff88"?"+2":ne==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${te}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...X,note:ke(X,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${te<C.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${de?"rgba(255,255,255,0.12)":ne};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${de?"none":`0 0 8px ${ne}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ne}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${k(C)} + ${A(C)} liens = <b style="color:#fff">${k(C)+A(C)}</b>
        </div>
      </div>`}Qe(e),e.innerHTML=`
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
      ${y(j,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${y(b,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const h=(C,K)=>e.querySelectorAll(C).forEach((ee,X)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},K+X*90)});h(".duel-card-me",150),h(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((C,K)=>setTimeout(()=>{C.style.opacity="1"},K*70)),900),setTimeout(()=>{const C=e.querySelector("#pvp-vs");C&&(C.style.opacity="1",C.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(K=>K.style.opacity="1")},1250);function v(C,K,ee){const X=document.getElementById(C);if(!X)return;const te=performance.now(),ne=de=>{const me=Math.min(1,(de-te)/ee);X.textContent=Math.round(K*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ne):X.textContent=K};requestAnimationFrame(ne)}setTimeout(()=>{v("pvp-score-me",f,800),v("pvp-score-opp",m,800)},1500);const _=r.p1Team.MIL||[],T=r.p2Team.MIL||[],S=k(_)+A(_),I=k(T)+A(T),U=S>=I?"p1":"p2";let D=r.boostValue;D==null&&(D=ti(),r.boostValue=D,r.boostOwner=U,r.boostUsed=!1),fe=!0,setTimeout(()=>{const C=e.querySelector("#duel-row-"+(x?"me":"opp")),K=e.querySelector("#duel-row-"+(x?"opp":"me")),ee=document.getElementById("pvp-score-me"),X=document.getElementById("pvp-score-opp"),te=x?ee:X,ne=x?X:ee;te&&(te.style.fontSize="80px",te.style.color=x?"#FFD700":"#ff6b6b",te.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),ne&&(ne.style.opacity="0.25"),setTimeout(()=>{C&&(C.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",C.style.zIndex="5"),setTimeout(()=>{const de=document.getElementById("duel-shock");de&&(de.style.animation="shockwave .5s ease-out forwards"),K&&(K.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var _e;const de=document.getElementById("pvp-duel-finale");if(!de)return;const me=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+D+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",we=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;de.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+we,de.style.transition="opacity .45s ease",de.style.opacity="1",de.style.pointerEvents="auto",(_e=document.getElementById("pvp-start-match"))==null||_e.addEventListener("click",async()=>{const $e=U;await H({phase:$e+"-attack",attacker:$e,round:1,boostValue:D,boostUsed:!1,boostOwner:$e})})},600)},700)},2800)}function Ae(j,b,k,A,f){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(_,T)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${T%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][T%8]}</div>`).join(""),y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${x}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${A?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${b} – ${k}
      </div>
      ${j!=null&&j.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${j.map(_=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${y[_.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${_.portrait?`<img src="${_.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(_.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let h=!1;const v=()=>{h||(h=!0,m.remove(),setTimeout(()=>f(),50))};m.addEventListener("click",v),setTimeout(v,3500)}function ve(j,b,k){var D,C;const A=(r.gcDefs||[]).find(K=>{var ee;return K.name===j||((ee=K.name)==null?void 0:ee.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),f={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[A==null?void 0:A.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[A==null?void 0:A.color]||"#b06ce0",x=(A==null?void 0:A.name)||j,y=(A==null?void 0:A.effect)||((D=Ve[j])==null?void 0:D.desc)||"",h=A!=null&&A.image_url?`/manager-wars/icons/${A.image_url}`:null,v=((C=Ve[j])==null?void 0:C.icon)||"⚡",T=b===n?"Vous":r[b+"Name"]||"Adversaire",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",S.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${T} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${f};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${x.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${h?`<img src="${h}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${v}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${y}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(S);let I=!1;const U=()=>{I||(I=!0,S.remove(),setTimeout(()=>k&&k(),50))};S.addEventListener("click",U),setTimeout(U,3e3)}function he(j,b){var S,I,U,D;const A=(r["gcCardsFull_"+n]||[]).find(C=>C.id===j),f=A==null?void 0:A._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",y=(f==null?void 0:f.name)||b,h=(f==null?void 0:f.effect)||((S=Ve[b])==null?void 0:S.desc)||"Carte spéciale.",v=f!=null&&f.image_url?`/manager-wars/icons/${f.image_url}`:null,_=((I=Ve[b])==null?void 0:I.icon)||"⚡",T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",T.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${_}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(T),(U=T.querySelector("#pvp-gc-back"))==null||U.addEventListener("click",()=>T.remove()),(D=T.querySelector("#pvp-gc-use"))==null||D.addEventListener("click",()=>{T.remove(),B(j,b)})}function J(){var A;const j=r[n+"Team"],b=Object.entries(j).flatMap(([f,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:f})));if(!b.length)return;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",k.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${b.map(f=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f._line]||"#555",x=ke(f,f._line)+(f.boost||0);return`<div class="bp-item" data-cid="${f.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(k),(A=k.querySelector("#bp-close"))==null||A.addEventListener("click",()=>k.remove()),k.querySelectorAll(".bp-item").forEach(f=>{f.addEventListener("click",async()=>{const m=f.dataset.cid,x=b.find(h=>h.cardId===m);if(!x)return;const y=(j[x._line]||[]).find(h=>h.cardId===m);y&&(y.boost=(y.boost||0)+r.boostValue),k.remove(),await H({[n+"Team"]:j,boostUsed:!0})})})}function Z(j=null){var I,U;if(!(r.phase===n+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const k=r[n+"Team"],A=r["usedSubIds_"+n]||[],f=r.maxSubs||3;if(A.length>=f){u(`Maximum ${f} remplacements atteint`,"warning");return}const m=Object.entries(k).flatMap(([D,C])=>(C||[]).filter(K=>K.used).map(K=>({...K,_line:D}))),x=(r[n+"Subs"]||[]).filter(D=>!A.includes(D.cardId));if(!m.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){u("Aucun remplaçant disponible","warning");return}let y=Math.max(0,m.findIndex(D=>D.cardId===j));const h=((I=m[y])==null?void 0:I._line)||((U=m[y])==null?void 0:U.job);let v=Math.max(0,x.findIndex(D=>D.job===h)),_=!1;const T=document.createElement("div");T.id="pvp-sub-overlay",T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function S(){var ne,de,me,we,_e,$e;const D=m[y],C=x[v],K=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(K*1.35),X=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;T.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${A.length}/${f})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${X(v===0)}" ${v===0?"disabled":""}>▲</button>
          <div>${C?We({...C,used:!1,boost:0},K,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${X(v>=x.length-1)}" ${v>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${v+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${X(y===0)}" ${y===0?"disabled":""}>▲</button>
          <div>${D?We({...D,used:!1,boost:0},K,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${X(y>=m.length-1)}" ${y>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${y+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ne=T.querySelector("#psub-close"))==null||ne.addEventListener("click",()=>T.remove()),(de=T.querySelector("#pout-up"))==null||de.addEventListener("click",()=>{y>0&&(y--,S())}),(me=T.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{y<m.length-1&&(y++,S())}),(we=T.querySelector("#pin-up"))==null||we.addEventListener("click",()=>{v>0&&(v--,S())}),(_e=T.querySelector("#pin-down"))==null||_e.addEventListener("click",()=>{v<x.length-1&&(v++,S())});const te=(Ee,Se,Me,Ne)=>{const Le=T.querySelector("#"+Ee);if(!Le)return;let He=0;Le.addEventListener("touchstart",Re=>{He=Re.touches[0].clientY},{passive:!0}),Le.addEventListener("touchend",Re=>{const Fe=Re.changedTouches[0].clientY-He;if(Math.abs(Fe)<30)return;const Be=Se();Fe<0&&Be<Ne-1?(Me(Be+1),S()):Fe>0&&Be>0&&(Me(Be-1),S())},{passive:!0})};te("pin-panel",()=>v,Ee=>v=Ee,x.length),te("pout-panel",()=>y,Ee=>y=Ee,m.length),($e=T.querySelector("#psub-confirm"))==null||$e.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),_)return;_=!0;const Se=m[y],Me=x[v];if(!Se||!Me)return;const Ne=Se._line,Le=(k[Ne]||[]).findIndex(Fe=>Fe.cardId===Se.cardId);if(Le===-1){u("Erreur : joueur introuvable","error"),T.remove();return}const He={...Me,_line:Ne,position:Se.position,used:!1,boost:0};k[Ne].splice(Le,1,He);const Re=[...A,Me.cardId];T.remove(),P(Se,Me,async()=>{await H({[n+"Team"]:k,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Re})})})}document.body.appendChild(T),S()}function P(j,b,k){const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(h,v,_)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${v};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${_}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${A[h.job]||"#555"};border:3px solid ${v};position:relative;overflow:hidden;margin:0 auto">
        ${Ge(h)?`<img src="${Ge(h)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(h.name||"").slice(0,12)}</div>
    </div>`;f.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(b,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(j,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(f);let x=!1;const y=()=>{x||(x=!0,f.remove(),setTimeout(()=>k(),50))};f.addEventListener("click",y),setTimeout(y,2200)}function R(){var b;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",j.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(j),(b=j.querySelector("#pvp-opp-close"))==null||b.addEventListener("click",()=>j.remove())}function Q(){var k;const j=r.log||[],b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",b.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${j.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...j].reverse().map(A=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${A.type==="goal"?"#FFD700":A.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${A.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(b),(k=b.querySelector("#pvp-hist-close"))==null||k.addEventListener("click",()=>b.remove())}async function pe(){if(r.phase!==n+"-attack")return;const j=n==="p1"?"p2":"p1",b=(r.round||0)+1,k=[...r.log||[]];k.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const A=Ie(r),f=Ce(j),m=A||!f?"finished":j+"-attack";await H({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:m,attacker:j,round:b,log:k}),m==="finished"&&await Ue(r)}async function le(){const j=r[n+"Team"],b=!["GK","DEF","MIL","ATT"].some(m=>(r[o+"Team"][m]||[]).some(x=>!x.used)),k=(r["selected_"+n]||[]).map(m=>{const x=(j[m._role]||[]).find(S=>S.cardId===m.cardId)||m,y=b&&["GK","DEF"].includes(m._role),h=j[m._role]||[],v=h.findIndex(S=>S.cardId===m.cardId),_=lt(h.length),T=v>=0?_[v]:x._col??1;return{...x,_line:m._role,_col:T,...y?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!k.length)return;const A=Pt(k,r.modifiers[n]||{});V(n,k.map(m=>m.cardId)),k.forEach(m=>{const x=(j[m._role]||[]).find(y=>y.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+n]=[],N();const f=[...r.log||[]];if(b){const m=(r[n+"Score"]||0)+1,x=k.map(T=>({name:T.name,note:ke(T,T._line||"ATT"),portrait:Ge(T),job:T.job}));f.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:A.total,aiTotal:0});const y=(r.round||0)+1,h=n==="p1"?"p2":"p1",v={...r,[n+"Team"]:j,[n+"Score"]:m},_=Ie(v);F.add(y),Ae(x,m,r[o+"Score"]||0,!0,async()=>{await H({[n+"Team"]:j,[n+"Score"]:m,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:_?"finished":h+"-attack",attacker:h,round:y,log:f}),_&&await Ue({...r,[n+"Score"]:m})});return}f.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${A.total})`}),await H({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],pendingAttack:{...A,players:k,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:f})}async function je(){const j=r[n+"Team"],b=(r["selected_"+n]||[]).map(D=>{const C=(j[D._role]||[]).find(ne=>ne.cardId===D.cardId)||D,K=j[D._role]||[],ee=K.findIndex(ne=>ne.cardId===D.cardId),X=lt(K.length),te=ee>=0?X[ee]:C._col??1;return{...C,_line:D._role,_col:te}}),k=Nt(b,r.modifiers[n]||{});V(n,b.map(D=>D.cardId)),b.forEach(D=>{const C=(j[D._role]||[]).find(K=>K.cardId===D.cardId);C&&(C.used=!0)}),r["selected_"+n]=[],N();const A=Rt(r.pendingAttack.total,k.total,r.modifiers[n]||{}),f=r.pendingAttack.side,m=A==="attack"||(A==null?void 0:A.goal),x=f==="p1"?"p2":"p1",y=(r.round||0)+1,h=(r.pendingAttack.players||[]).map(D=>({name:D.name,note:ke(D,D._line||"ATT"),portrait:Ge(D),job:D.job})),v=[...r.log||[]];v.push({type:"duel",isGoal:m,homeScored:m&&f===n,text:m?`⚽ BUT de ${r[f+"Name"]} ! (${r.pendingAttack.total} vs ${k.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${k.total})`,homePlayers:h,aiPlayers:b.map(D=>({name:D.name,note:ke(D,D._line||"DEF"),portrait:Ge(D),job:D.job})),homeTotal:r.pendingAttack.total,aiTotal:k.total});const _=m?(r[f+"Score"]||0)+1:r[f+"Score"]||0,T={...r,[n+"Team"]:j,[f+"Score"]:_},S=Ie(T),I=S?"finished":x+"-attack",U=async()=>{await H({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],[f+"Score"]:_,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:I,attacker:x,round:y,log:v}),(I==="finished"||S)&&await Ue({...r,[f+"Score"]:_})};if(m){const D=f===n,C=D?_:r[n+"Score"]||0,K=D?r[o+"Score"]||0:_;F.add(y),Ae(h,C,K,D,U)}else await U()}function ze(j){return["MIL","ATT"].some(b=>(j[b]||[]).some(k=>!k.used))}function Pe(j){return["GK","DEF","MIL","ATT"].some(b=>(j[b]||[]).some(k=>!k.used))}function Oe(j){return Pe(j)&&!ze(j)}function Ce(j){const b=r[j+"Team"],k=r[(j==="p1"?"p2":"p1")+"Team"];return!!(ze(b)||!Pe(k)&&Oe(b))}function Ie(j){const b=["MIL","ATT"].some(v=>(j.p1Team[v]||[]).some(_=>!_.used)),k=["MIL","ATT"].some(v=>(j.p2Team[v]||[]).some(_=>!_.used)),A=Pe(j.p1Team),f=Pe(j.p2Team);return!b&&!(!f&&A)&&(!k&&!(!A&&f))}function qe(j){const b=j.p1Score||0,k=j.p2Score||0;return b===k?null:b>k?$.home_id:$.away_id}async function Ue(j){try{const b=qe(j),k=b?$.home_id===b?$.away_id:$.home_id:null;await E.from("matches").update({status:"finished",winner_id:b,home_score:j.p1Score||0,away_score:j.p2Score||0}).eq("id",i),b&&k&&Qt(b,k).catch(()=>{})}catch(b){console.error("[PvP] finishMatch:",b)}}function Je(){var f;const j=r[n+"Score"],b=r[o+"Score"],k=j>b,A=j===b;Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${k?"🏆":A?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${k?"Victoire !":A?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${j} - ${b}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(f=document.getElementById("pvp-home"))==null||f.addEventListener("click",()=>{try{E.removeChannel(q)}catch{}Ke(e),d("home")})}N()}const Ro=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:hn,resumePvpMatch:No},Symbol.toStringTag,{value:"Module"}));async function Oo(e,t,i,a){var c,l;try{const s=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(E.getChannels?E.getChannels():[]).forEach(u=>{const n=u.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&E.removeChannel(u)})}catch(d){console.warn("[FriendMatch] cleanup canaux:",d)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:s,formation:d,starters:u,subsRaw:n,gcCardsEnriched:o,gcDefs:g})=>{const w=$=>Ho(e,t,s,d,u,n,$,g||[],i,a);if(!o.length){w([]);return}ii(e,o,w)})}async function Ho(e,t,i,a,c,l,s=[],d=[],u,n){var ue;const{state:o,navigate:g,toast:w}=t,$=o.profile.id;let L=!1,r=null;Qe(e);try{await E.rpc("cancel_matchmaking",{p_user_id:$})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",$)}catch{}const p=(re,B,V,ae)=>{var N;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${n}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${o.profile.club_name||o.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:${B?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${B?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${B?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${n}</div>
            <div style="font-size:11px;color:${B?"#22c55e":"#aaa"}">${B?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!B&&re?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(N=document.getElementById("lobby-cancel"))==null||N.addEventListener("click",async()=>{L=!0,r&&(E.removeChannel(r),r=null),V&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",V),Ke(e),g("home")})},z=async(re,B)=>{L=!0,r&&(E.removeChannel(r),r=null),await new Promise(V=>setTimeout(V,600)),e.isConnected&&Uo(e,t,re,B,s,d)},{data:M}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${$},invitee_id.eq.${u}),and(inviter_id.eq.${u},invitee_id.eq.${$})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let F,O;if(M&&M.inviter_id===u)O=!1,F=M.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",F);else{O=!0;const{data:re,error:B}=await E.from("friend_match_invites").insert({inviter_id:$,invitee_id:u,friend_id:u,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(B||!re){w("Erreur création invitation","error"),Ke(e),g("home");return}F=re.id}if(p(!0,!O,F),!O){const re={home_id:u,away_id:$,home_deck_id:M.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},B=await E.from("matches").insert(re).select().single(),V=B.data;if(!V){w("Erreur création match: "+(((ue=B.error)==null?void 0:ue.message)||""),"error"),Ke(e),g("home");return}await E.from("friend_match_invites").update({match_id:V.id,status:"matched"}).eq("id",F),z(V.id,!1);return}let G=!1;const q=re=>{L||G||(re.status==="matched"&&re.match_id?(G=!0,clearInterval(H),clearInterval(ie),z(re.match_id,!0)):re.status==="declined"?(clearInterval(H),clearInterval(ie),w(`${n} a décliné l'invitation`,"warning"),Ke(e),g("home")):re.invitee_ready&&p(!0,!0,F))},H=setInterval(()=>{if(L){clearInterval(H);return}E.from("matchmaking_queue").delete().eq("user_id",$).then(()=>{},()=>{})},3e3),ie=setInterval(async()=>{if(L||G){clearInterval(ie);return}const{data:re}=await E.from("friend_match_invites").select("*").eq("id",F).maybeSingle();re&&q(re)},1200);r=E.channel("friend-invite-"+F).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${F}`},re=>q(re.new)).subscribe()}async function Uo(e,t,i,a,c=[],l=[]){const{state:s,navigate:d,toast:u}=t,n=a?"p1":"p2",o=a?"p2":"p1",g=(c||[]).map(b=>b.id),w=(c||[]).map(b=>({id:b.id,gc_type:b.gc_type,_gcDef:b._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:$}=await E.from("matches").select("*").eq("id",i).single();if(!$){u("Match introuvable","error"),d("home");return}async function L(){const[{data:b},{data:k},{data:A},{data:f}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:$.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:$.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",$.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",$.away_id).single()]),m=_=>({cardId:_.card_id,position:_.position,id:_.id,firstname:_.firstname,name:_.surname_encoded,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,clubName:_.club_encoded_name||null,clubLogo:_.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),x=((b==null?void 0:b.starters)||[]).map(_=>m(_)),y=((k==null?void 0:k.starters)||[]).map(_=>m(_)),h=(b==null?void 0:b.formation)||"4-4-2",v=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:xt(x,h),p2Team:xt(y,v),p1Subs:((b==null?void 0:b.subs)||[]).map(_=>m(_)),p2Subs:((k==null?void 0:k.subs)||[]).map(_=>m(_)),p1Formation:h,p2Formation:v,p1Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 1",p2Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?g:[],gc_p2:a?[]:g,gcCardsFull_p1:a?w:[],gcCardsFull_p2:a?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=$.game_state&&Object.keys($.game_state).length?$.game_state:null;if(!r)if(a){r=await L();const{data:b}=await E.from("matches").select("game_state").eq("id",i).single();!(b!=null&&b.game_state)||!Object.keys(b.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:$.home_id}).eq("id",i):r=b.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let b=0;b<60&&!r;b++){await new Promise(A=>setTimeout(A,400));const{data:k}=await E.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(r=k.game_state)}if(!r){u("Erreur de synchronisation","error"),d("home");return}r.gc_p2=g,r.gcCardsFull_p2=w,await E.from("matches").update({game_state:r}).eq("id",i)}let p=!1,z=!1,M=null,F=!1;const O=new Set,G=new Set;function q(b){var _,T;try{E.removeChannel(H)}catch{}const k=r[n+"Score"]||0,A=r[o+"Score"]||0;if(!z){const S=r.p1Score||0,I=r.p2Score||0,U=(r.usedGc_p1||[]).length,D=(r.usedGc_p2||[]).length,C=b.winner_id||(S>I?$.home_id:I>S?$.away_id:null);(C?s.profile.id===C:s.profile.id<(a?$.away_id:$.home_id))&&(z=!0,Wi({player1Id:$.home_id,player2Id:$.away_id,score1:S,score2:I,gc1:U,gc2:D}).catch(ee=>console.warn("[FriendMatch] updateStats:",ee)))}let f,m;b.winner_id?(f=b.winner_id===s.profile.id,m=!1):b.forfeit?(f=k>A,m=!1):(m=k===A,f=k>A),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=m?"🤝":f?"🏆":"😞",h=m?"MATCH NUL":f?"VICTOIRE !":"DÉFAITE",v=m?"#fff":f?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${k} – ${A} ${r[o+"Name"]}</div>
      ${b.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${f?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(T=x.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{x.remove(),Ke(e),d("home")})}const H=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},b=>{const k=b.new;try{if(k.status==="finished"||k.forfeit){if(p)return;p=!0,M&&(clearInterval(M),M=null),k.game_state&&(r=k.game_state),q(k);return}if(k.game_state){const A=r;r=k.game_state;const f=r._lastGC;if(f&&f.seq&&!G.has(f.seq)&&(G.add(f.seq),f.by!==n)){he(f.type,f.by,()=>se());return}const m=A[n+"Score"]||0,x=A[o+"Score"]||0,y=r[n+"Score"]||0,h=r[o+"Score"]||0,v=y>m,_=h>x;if((v||_)&&!O.has(r.round)){O.add(r.round);const T=[...r.log||[]].reverse().find(I=>I.isGoal),S=((T==null?void 0:T.homePlayers)||[]).map(I=>({name:I.name,note:I.note,portrait:I.portrait,job:I.job}));ve(S,y,h,v,()=>se());return}se()}}catch(A){console.error("[PvP] crash:",A)}}).subscribe();async function ie(b){Object.assign(r,b),r.lastActionAt=new Date().toISOString();const{error:k}=await E.from("matches").update({game_state:r}).eq("id",i);k&&u("Erreur de synchronisation","error");try{se()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function ue(){if(p)return;p=!0,M&&(clearInterval(M),M=null);const b=a?$.away_id:$.home_id,k=a?"p2":"p1",A=a?"p1":"p2",f={...r,[k+"Score"]:3,[A+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:b,home_score:f.p1Score||0,away_score:f.p2Score||0,game_state:f}).eq("id",i)}catch{}try{E.removeChannel(H)}catch{}setTimeout(()=>{Ke(e),d("home")},800)}const re={BOOST_STAT:({value:b=1,count:k=1,roles:A=[]},f,m)=>{const x=f[n+"Team"],y=Object.entries(x).filter(([h])=>!A.length||A.includes(h)).flatMap(([h,v])=>v.filter(_=>!_.used).map(_=>({..._,_line:h})));if(!y.length){f.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),m(f);return}B(y,k,`Choisir ${k} joueur(s) à booster (+${b})`,h=>{h.forEach(v=>{const _=(x[v._line]||[]).find(T=>T.cardId===v.cardId);_&&(_.boost=(_.boost||0)+b,f.log.push({text:`⚡ +${b} sur ${_.name}`,type:"info"}))}),f[n+"Team"]=x,m(f)})},DEBUFF_STAT:({value:b=1,count:k=1,roles:A=[],target:f="ai"},m,x)=>{const y=f==="home"?n:o,h=m[y+"Team"],v=f==="home"?"allié":"adverse",_=Object.entries(h).filter(([T])=>!A.length||A.includes(T)).flatMap(([T,S])=>S.filter(I=>!I.used).map(I=>({...I,_line:T})));if(!_.length){m.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(m);return}B(_,k,`Choisir ${k} joueur(s) ${v}(s) (-${b})`,T=>{T.forEach(S=>{const I=(h[S._line]||[]).find(U=>U.cardId===S.cardId);I&&(I.boost=(I.boost||0)-b,m.log.push({text:`🎯 -${b} sur ${I.name}`,type:"info"}))}),m[y+"Team"]=h,x(m)})},GRAY_PLAYER:({count:b=1,roles:k=[],target:A="ai"},f,m)=>{const x=A==="home"?n:o,y=f[x+"Team"],h=A==="home"?"allié":"adverse",v=Object.entries(y).filter(([_])=>!k.length||k.includes(_)).flatMap(([_,T])=>T.filter(S=>!S.used).map(S=>({...S,_line:_})));if(!v.length){f.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),m(f);return}B(v,b,`Choisir ${b} joueur(s) ${h}(s) à exclure`,_=>{_.forEach(T=>{const S=(y[T._line]||[]).find(I=>I.cardId===T.cardId);S&&(S.used=!0,f.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),f[x+"Team"]=y,m(f)})},REVIVE_PLAYER:({count:b=1,roles:k=[]},A,f)=>{const m=A[n+"Team"],x=Object.entries(m).filter(([y])=>!k.length||k.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),f(A);return}B(x,b,`Choisir ${b} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(m[h._line]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!1,A.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),A[n+"Team"]=m,f(A)})},REMOVE_GOAL:({},b,k)=>{const A=o+"Score";b[A]>0?(b[A]--,b.log.push({text:"🚫 Dernier but annulé !",type:"info"})):b.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(b)},ADD_GOAL_DRAW:({},b,k)=>{b[n+"Score"]===b[o+"Score"]?(b[n+"Score"]++,b.log.push({text:"🎯 But bonus !",type:"info"})):b.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(b)},ADD_SUB:({value:b=1},k,A)=>{k.maxSubs=(k.maxSubs||3)+b,k.log.push({text:`🔄 +${b} remplacement(s)`,type:"info"}),A(k)},CUSTOM:({},b,k)=>k(b)};function B(b,k,A,f){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,_;const h=b.map(T=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",I=ke(T,T._line)+(T.boost||0),D=x.find(K=>K.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",C=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${D};background:${S};overflow:hidden;cursor:pointer;${C}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${I}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");m.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x.length}/${k}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${h}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${x.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${x.length}/${k})
          </button>
        </div>`,(v=m.querySelector("#pp-close"))==null||v.addEventListener("click",()=>m.remove()),m.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const S=T.dataset.cid,I=b.find(D=>D.cardId===S),U=x.findIndex(D=>D.cardId===S);I&&(U>-1?x.splice(U,1):x.length<k&&x.push(I),y())})}),(_=m.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{m.remove(),f(x)})}y(),document.body.appendChild(m)}async function V(b,k){const f=(r["gcCardsFull_"+n]||[]).find(h=>h.id===b),m=(f==null?void 0:f._gcDef)||(r.gcDefs||[]).find(h=>{var v;return h.name===k||((v=h.name)==null?void 0:v.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),x=[...r["usedGc_"+n]||[],b],y={type:k,by:n,seq:(r._gcAnimSeq||0)+1};G.add(y.seq),he(k,n,async()=>{if(m!=null&&m.effect_type&&m.effect_type!=="CUSTOM"){const v=re[m.effect_type];if(v){const _={...r};v(m.effect_params||{},_,async T=>{T["usedGc_"+n]=x,T._lastGC=y,T._gcAnimSeq=y.seq,await ie(T)});return}}const h={...r};switch(k){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=o+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+n]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await ie(h)})}function ae(b,k){const A="usedCardIds_"+b,f=new Set(r[A]||[]);k.forEach(m=>f.add(m)),r[A]=[...f]}function N(){for(const b of["p1","p2"]){const k=new Set(r["usedCardIds_"+b]||[]),A=r[b+"Team"];if(A)for(const f of["GK","DEF","MIL","ATT"])(A[f]||[]).forEach(m=>{m.used=k.has(m.cardId)})}}function se(){var Ze,tt,Xe,it,ft,oe;if(r.phase==="reveal")return fe();if(r.phase==="midfield")return Ae();if(r.phase==="finished")return j();const b=r[n+"Team"],k=r[o+"Team"];N();const A=r[n+"Score"],f=r[o+"Score"],m=r[n+"Name"],x=r[o+"Name"],y=r.phase===n+"-attack",h=r.phase===n+"-defense",v=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],_=v.map(Y=>Y.cardId),T=window.innerWidth>=700,S=r[n+"Subs"]||[],I=r["usedSubIds_"+n]||[],U=S.filter(Y=>!I.includes(Y.cardId)),D=r["gcCardsFull_"+n]||[],C=r["usedGc_"+n]||[],K=D.filter(Y=>!C.includes(Y.id)),ee=r.boostOwner===n&&!r.boostUsed,X=!["GK","DEF","MIL","ATT"].some(Y=>(k[Y]||[]).some(ce=>!ce.used)),te=[...b.MIL||[],...b.ATT||[]].filter(Y=>!Y.used),ne=y&&X&&te.length===0?[...b.GK||[],...b.DEF||[]].filter(Y=>!Y.used).map(Y=>Y.cardId):[];function de(Y,ce,ge){var gt,$t;const W=Y._gcDef,xe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[W==null?void 0:W.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[W==null?void 0:W.color]||"#b06ce0",be=(W==null?void 0:W.name)||Y.gc_type,et=(W==null?void 0:W.effect)||((gt=Ve[Y.gc_type])==null?void 0:gt.desc)||"",ot=W!=null&&W.image_url?`/manager-wars/icons/${W.image_url}`:null,st=(($t=Ve[Y.gc_type])==null?void 0:$t.icon)||"⚡",rt=Math.round(ge*.22),ct=Math.round(ge*.22),yt=ge-rt-ct,ht=be.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Y.id}" data-gc-type="${Y.gc_type}"
        style="box-sizing:border-box;width:${ce}px;height:${ge}px;border-radius:10px;border:2px solid ${Te};background:${xe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ce-6}px">${be}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${yt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ot?`<img src="${ot}" style="max-width:${ce-10}px;max-height:${yt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(yt*.55)}px">${st}</span>`}
        </div>
        <div style="height:${ct}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function me(Y,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Y}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const we=(Y,ce)=>ce?me(130,175):de(Y,130,175),_e=(Y,ce)=>ce?me(68,95):de(Y,68,95),$e=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ee=y?Ie(n)?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${$e};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,Se=y&&!Ie(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':y||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${U.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':U.map(Y=>`<div class="pvp-sub-btn" data-sub-id="${Y.cardId}" style="cursor:pointer;flex-shrink:0">${We(Y,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,Ne=y?"attack":h?"defense":"idle",Le=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ut(b,r[n+"Formation"],Ne,_,300,300,ne)}
      </div>
    </div>`;function He(Y){if(Y.type==="duel"&&(Y.homeTotal!=null||Y.aiTotal!=null)){const ce=(Y.homeTotal||0)>=(Y.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Y.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Y.homePlayers||[]).map(ge=>dt(ge)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ce?20:14}px;font-weight:900;color:${ce?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Y.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ce?14:20}px;font-weight:900;color:${ce?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Y.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Y.aiPlayers||[]).map(ge=>dt(ge)).join("")}
            </div>
          </div>
          ${Y.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Y.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Y.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Y.type==="goal"?700:400};padding:3px 2px">${Y.text||""}</div>`}const Re=(()=>{var ce,ge;if(h&&((ce=r.pendingAttack)!=null&&ce.players)){const W=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${nt((W.players||[]).map(xe=>({...xe,used:!1})),"#ff6b6b",W.total)}
        </div>`}if(y&&((ge=r.pendingAttack)!=null&&ge.players)){const W=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((W.players||[]).map(xe=>({...xe,used:!1})),"#00ff88",W.total)}
        </div>`}const Y=(r.log||[]).slice(-1)[0];return Y?'<div style="padding:2px 4px">'+He(Y)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Fe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${f}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Re}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;Qe(e),e.style.overflow="hidden",T?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Fe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Le}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ee}${Se}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${K.map(Y=>we(Y,!1)).join("")}
            ${ee?we(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Fe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(b,r[n+"Formation"],Ne,_,300,300,ne)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${K.map(Y=>_e(Y,!1)).join("")}
            ${ee?_e(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${y&&U.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${y&&U.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${y&&U.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${y&&U.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${U.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+n]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ee}${Se}</div>
        </div>
      </div>`;function Be(){const Y=e.querySelector(".match-screen");if(!Y)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Y.style.height=ce+"px",Y.style.minHeight=ce+"px",Y.style.maxHeight=ce+"px",Y.style.overflow="hidden";const ge=e.querySelector("#mobile-action-bar"),W=e.querySelector("#mobile-play-area");ge&&W&&(W.style.paddingBottom=ge.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Y=>{Y.addEventListener("click",()=>{if(!y&&!h)return;const ce=Y.dataset.cardId,ge=Y.dataset.role,W=(b[ge]||[]).find(et=>et.cardId===ce);if(!W||W.used)return;const xe=ne.includes(ce);if(y&&!["MIL","ATT"].includes(ge)&&!xe)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const Te=r["selected_"+n],be=Te.findIndex(et=>et.cardId===ce);be>-1?Te.splice(be,1):Te.length<3&&Te.push({...W,_role:ge}),se()})}),e.querySelectorAll(".match-used-hit").forEach(Y=>{Y.addEventListener("click",()=>P(Y.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Y=>{Y.addEventListener("click",()=>P())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>P()),e.querySelectorAll(".pvp-gc-mini").forEach(Y=>{Y.addEventListener("click",()=>J(Y.dataset.gcId,Y.dataset.gcType))}),(tt=e.querySelector("#pvp-boost-card"))==null||tt.addEventListener("click",()=>Z()),(Xe=e.querySelector("#pvp-action"))==null||Xe.addEventListener("click",Y=>{y?Y.currentTarget.dataset.pass==="1"||!Ie(n)?le():je():h&&ze()}),(it=e.querySelector("#pvp-quit"))==null||it.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ue()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>Q()),(oe=e.querySelector("#pvp-toggle-history"))==null||oe.addEventListener("click",()=>pe()),M&&(clearInterval(M),M=null),(y||h)&&!p){let Y=30,ce=!1;const ge=()=>document.getElementById("pvp-timer"),W=()=>{ge()&&(ge().textContent=Y+"s",ge().style.color=ce?"#ff4444":"#fff")};W(),M=setInterval(()=>{Y--,Y<0?ce?(clearInterval(M),M=null,y&&!Ie(n)?le():ue()):(ce=!0,Y=15,W()):W()},1e3)}}function fe(){Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await ie({phase:"midfield"})},5e3)}let ye=!1;function Ae(){if(ye)return;const b=r[n+"Team"].MIL||[],k=r[o+"Team"].MIL||[];function A(K){return K.reduce((ee,X)=>ee+ke(X,"MIL"),0)}function f(K){let ee=0;for(let X=0;X<K.length-1;X++){const te=at(K[X],K[X+1]);te==="#00ff88"?ee+=2:te==="#FFD700"&&(ee+=1)}return ee}const m=A(b)+f(b),x=A(k)+f(k),y=m>=x;function h(K,ee,X){return`<div id="duel-row-${X}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ee}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((te,ne)=>{const de=ne<K.length-1?at(te,K[ne+1]):null,me=!de||de==="#ff3333"||de==="#cc2222",we=de==="#00ff88"?"+2":de==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${X}" data-idx="${ne}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...te,note:ke(te,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ne<K.length-1?`<div class="duel-link duel-link-${X}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":de};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${de}`}">
              ${we?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${de}">${we}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${X}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${A(K)} + ${f(K)} liens = <b style="color:#fff">${A(K)+f(K)}</b>
        </div>
      </div>`}Qe(e),e.innerHTML=`
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
      ${h(b,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(k,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const v=(K,ee)=>e.querySelectorAll(K).forEach((X,te)=>{setTimeout(()=>{X.style.opacity="1",X.style.transform="translateY(0) scale(1)"},ee+te*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,ee)=>setTimeout(()=>{K.style.opacity="1"},ee*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ee=>ee.style.opacity="1")},1250);function _(K,ee,X){const te=document.getElementById(K);if(!te)return;const ne=performance.now(),de=me=>{const we=Math.min(1,(me-ne)/X);te.textContent=Math.round(ee*(1-Math.pow(1-we,3))),we<1?requestAnimationFrame(de):te.textContent=ee};requestAnimationFrame(de)}setTimeout(()=>{_("pvp-score-me",m,800),_("pvp-score-opp",x,800)},1500);const T=r.p1Team.MIL||[],S=r.p2Team.MIL||[],I=A(T)+f(T),U=A(S)+f(S),D=I>=U?"p1":"p2";let C=r.boostValue;C==null&&(C=ti(),r.boostValue=C,r.boostOwner=D,r.boostUsed=!1),ye=!0,setTimeout(()=>{const K=e.querySelector("#duel-row-"+(y?"me":"opp")),ee=e.querySelector("#duel-row-"+(y?"opp":"me")),X=document.getElementById("pvp-score-me"),te=document.getElementById("pvp-score-opp"),ne=y?X:te,de=y?te:X;ne&&(ne.style.fontSize="80px",ne.style.color=y?"#FFD700":"#ff6b6b",ne.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),de&&(de.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),ee&&(ee.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var $e;const me=document.getElementById("pvp-duel-finale");if(!me)return;const we=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+C+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",_e=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+we+_e,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",($e=document.getElementById("pvp-start-match"))==null||$e.addEventListener("click",async()=>{const Ee=D;await ie({phase:Ee+"-attack",attacker:Ee,round:1,boostValue:C,boostUsed:!1,boostOwner:Ee})})},600)},700)},2800)}function ve(b,k,A,f,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(T,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${y}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${f?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${k} – ${A}
      </div>
      ${b!=null&&b.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${b.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const _=()=>{v||(v=!0,x.remove(),setTimeout(()=>m(),50))};x.addEventListener("click",_),setTimeout(_,3500)}function he(b,k,A){var C,K;const f=(r.gcDefs||[]).find(ee=>{var X;return ee.name===b||((X=ee.name)==null?void 0:X.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",y=(f==null?void 0:f.name)||b,h=(f==null?void 0:f.effect)||((C=Ve[b])==null?void 0:C.desc)||"",v=f!=null&&f.image_url?`/manager-wars/icons/${f.image_url}`:null,_=((K=Ve[b])==null?void 0:K.icon)||"⚡",S=k===n?"Vous":r[k+"Name"]||"Adversaire",I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",I.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${_}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(I);let U=!1;const D=()=>{U||(U=!0,I.remove(),setTimeout(()=>A&&A(),50))};I.addEventListener("click",D),setTimeout(D,3e3)}function J(b,k){var I,U,D,C;const f=(r["gcCardsFull_"+n]||[]).find(K=>K.id===b),m=f==null?void 0:f._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",h=(m==null?void 0:m.name)||k,v=(m==null?void 0:m.effect)||((I=Ve[k])==null?void 0:I.desc)||"Carte spéciale.",_=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,T=((U=Ve[k])==null?void 0:U.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${y}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_?`<img src="${_}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${v}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(D=S.querySelector("#pvp-gc-back"))==null||D.addEventListener("click",()=>S.remove()),(C=S.querySelector("#pvp-gc-use"))==null||C.addEventListener("click",()=>{S.remove(),V(b,k)})}function Z(){var f;const b=r[n+"Team"],k=Object.entries(b).flatMap(([m,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:m})));if(!k.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(m=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m._line]||"#555",y=ke(m,m._line)+(m.boost||0);return`<div class="bp-item" data-cid="${m.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(f=A.querySelector("#bp-close"))==null||f.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(m=>{m.addEventListener("click",async()=>{const x=m.dataset.cid,y=k.find(v=>v.cardId===x);if(!y)return;const h=(b[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+r.boostValue),A.remove(),await ie({[n+"Team"]:b,boostUsed:!0})})})}function P(b=null){var U,D;if(!(r.phase===n+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const A=r[n+"Team"],f=r["usedSubIds_"+n]||[],m=r.maxSubs||3;if(f.length>=m){u(`Maximum ${m} remplacements atteint`,"warning");return}const x=Object.entries(A).flatMap(([C,K])=>(K||[]).filter(ee=>ee.used).map(ee=>({...ee,_line:C}))),y=(r[n+"Subs"]||[]).filter(C=>!f.includes(C.cardId));if(!x.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){u("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(C=>C.cardId===b));const v=((U=x[h])==null?void 0:U._line)||((D=x[h])==null?void 0:D.job);let _=Math.max(0,y.findIndex(C=>C.job===v)),T=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function I(){var de,me,we,_e,$e,Ee;const C=x[h],K=y[_],ee=Math.min(130,Math.round((window.innerWidth-90)/2)),X=Math.round(ee*1.35),te=Se=>`background:rgba(255,255,255,0.12);border:none;color:${Se?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Se?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${f.length}/${m})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${K?We({...K,used:!1,boost:0},ee,X):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(_>=y.length-1)}" ${_>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${C?We({...C,used:!1,boost:0},ee,X):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(de=S.querySelector("#psub-close"))==null||de.addEventListener("click",()=>S.remove()),(me=S.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{h>0&&(h--,I())}),(we=S.querySelector("#pout-down"))==null||we.addEventListener("click",()=>{h<x.length-1&&(h++,I())}),(_e=S.querySelector("#pin-up"))==null||_e.addEventListener("click",()=>{_>0&&(_--,I())}),($e=S.querySelector("#pin-down"))==null||$e.addEventListener("click",()=>{_<y.length-1&&(_++,I())});const ne=(Se,Me,Ne,Le)=>{const He=S.querySelector("#"+Se);if(!He)return;let Re=0;He.addEventListener("touchstart",Fe=>{Re=Fe.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",Fe=>{const Be=Fe.changedTouches[0].clientY-Re;if(Math.abs(Be)<30)return;const Ze=Me();Be<0&&Ze<Le-1?(Ne(Ze+1),I()):Be>0&&Ze>0&&(Ne(Ze-1),I())},{passive:!0})};ne("pin-panel",()=>_,Se=>_=Se,y.length),ne("pout-panel",()=>h,Se=>h=Se,x.length),(Ee=S.querySelector("#psub-confirm"))==null||Ee.addEventListener("click",async Se=>{if(Se.preventDefault(),Se.stopPropagation(),T)return;T=!0;const Me=x[h],Ne=y[_];if(!Me||!Ne)return;const Le=Me._line,He=(A[Le]||[]).findIndex(Be=>Be.cardId===Me.cardId);if(He===-1){u("Erreur : joueur introuvable","error"),S.remove();return}const Re={...Ne,_line:Le,position:Me.position,used:!1,boost:0};A[Le].splice(He,1,Re);const Fe=[...f,Ne.cardId];S.remove(),R(Me,Ne,async()=>{await ie({[n+"Team"]:A,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Fe})})})}document.body.appendChild(S),I()}function R(b,k,A){const f={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,_,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${f[v.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Ge(v)?`<img src="${Ge(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;m.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(b,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(m);let y=!1;const h=()=>{y||(y=!0,m.remove(),setTimeout(()=>A(),50))};m.addEventListener("click",h),setTimeout(h,2200)}function Q(){var k;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",b.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(b),(k=b.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>b.remove())}function pe(){var A;const b=r.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",k.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${b.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...b].reverse().map(f=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${f.type==="goal"?"#FFD700":f.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${f.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(k),(A=k.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>k.remove())}async function le(){if(r.phase!==n+"-attack")return;const b=n==="p1"?"p2":"p1",k=(r.round||0)+1,A=[...r.log||[]];A.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const f=qe(r),m=Ie(b),x=f||!m?"finished":b+"-attack";await ie({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:x,attacker:b,round:k,log:A}),x==="finished"&&await Je(r)}async function je(){const b=r[n+"Team"],k=!["GK","DEF","MIL","ATT"].some(x=>(r[o+"Team"][x]||[]).some(y=>!y.used)),A=(r["selected_"+n]||[]).map(x=>{const y=(b[x._role]||[]).find(I=>I.cardId===x.cardId)||x,h=k&&["GK","DEF"].includes(x._role),v=b[x._role]||[],_=v.findIndex(I=>I.cardId===x.cardId),T=lt(v.length),S=_>=0?T[_]:y._col??1;return{...y,_line:x._role,_col:S,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!A.length)return;const f=Pt(A,r.modifiers[n]||{});ae(n,A.map(x=>x.cardId)),A.forEach(x=>{const y=(b[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),r["selected_"+n]=[],se();const m=[...r.log||[]];if(k){const x=(r[n+"Score"]||0)+1,y=A.map(S=>({name:S.name,note:ke(S,S._line||"ATT"),portrait:Ge(S),job:S.job}));m.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:f.total,aiTotal:0});const h=(r.round||0)+1,v=n==="p1"?"p2":"p1",_={...r,[n+"Team"]:b,[n+"Score"]:x},T=qe(_);O.add(h),ve(y,x,r[o+"Score"]||0,!0,async()=>{await ie({[n+"Team"]:b,[n+"Score"]:x,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:T?"finished":v+"-attack",attacker:v,round:h,log:m}),T&&await Je({...r,[n+"Score"]:x})});return}m.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${f.total})`}),await ie({[n+"Team"]:b,[o+"Team"]:r[o+"Team"],pendingAttack:{...f,players:A,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:m})}async function ze(){const b=r[n+"Team"],k=(r["selected_"+n]||[]).map(C=>{const K=(b[C._role]||[]).find(de=>de.cardId===C.cardId)||C,ee=b[C._role]||[],X=ee.findIndex(de=>de.cardId===C.cardId),te=lt(ee.length),ne=X>=0?te[X]:K._col??1;return{...K,_line:C._role,_col:ne}}),A=Nt(k,r.modifiers[n]||{});ae(n,k.map(C=>C.cardId)),k.forEach(C=>{const K=(b[C._role]||[]).find(ee=>ee.cardId===C.cardId);K&&(K.used=!0)}),r["selected_"+n]=[],se();const f=Rt(r.pendingAttack.total,A.total,r.modifiers[n]||{}),m=r.pendingAttack.side,x=f==="attack"||(f==null?void 0:f.goal),y=m==="p1"?"p2":"p1",h=(r.round||0)+1,v=(r.pendingAttack.players||[]).map(C=>({name:C.name,note:ke(C,C._line||"ATT"),portrait:Ge(C),job:C.job})),_=[...r.log||[]];_.push({type:"duel",isGoal:x,homeScored:x&&m===n,text:x?`⚽ BUT de ${r[m+"Name"]} ! (${r.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${A.total})`,homePlayers:v,aiPlayers:k.map(C=>({name:C.name,note:ke(C,C._line||"DEF"),portrait:Ge(C),job:C.job})),homeTotal:r.pendingAttack.total,aiTotal:A.total});const T=x?(r[m+"Score"]||0)+1:r[m+"Score"]||0,S={...r,[n+"Team"]:b,[m+"Score"]:T},I=qe(S),U=I?"finished":y+"-attack",D=async()=>{await ie({[n+"Team"]:b,[o+"Team"]:r[o+"Team"],[m+"Score"]:T,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:U,attacker:y,round:h,log:_}),(U==="finished"||I)&&await Je({...r,[m+"Score"]:T})};if(x){const C=m===n,K=C?T:r[n+"Score"]||0,ee=C?r[o+"Score"]||0:T;O.add(h),ve(v,K,ee,C,D)}else await D()}function Pe(b){return["MIL","ATT"].some(k=>(b[k]||[]).some(A=>!A.used))}function Oe(b){return["GK","DEF","MIL","ATT"].some(k=>(b[k]||[]).some(A=>!A.used))}function Ce(b){return Oe(b)&&!Pe(b)}function Ie(b){const k=r[b+"Team"],A=r[(b==="p1"?"p2":"p1")+"Team"];return!!(Pe(k)||!Oe(A)&&Ce(k))}function qe(b){const k=["MIL","ATT"].some(_=>(b.p1Team[_]||[]).some(T=>!T.used)),A=["MIL","ATT"].some(_=>(b.p2Team[_]||[]).some(T=>!T.used)),f=Oe(b.p1Team),m=Oe(b.p2Team);return!k&&!(!m&&f)&&(!A&&!(!f&&m))}function Ue(b){const k=b.p1Score||0,A=b.p2Score||0;return k===A?null:k>A?$.home_id:$.away_id}async function Je(b){try{const k=Ue(b),A=k?$.home_id===k?$.away_id:$.home_id:null;await E.from("matches").update({status:"finished",winner_id:k,home_score:b.p1Score||0,away_score:b.p2Score||0}).eq("id",i),k&&A&&Qt(k,A).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function j(){var m;const b=r[n+"Score"],k=r[o+"Score"],A=b>k,f=b===k;Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":f?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":f?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${b} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(m=document.getElementById("pvp-home"))==null||m.addEventListener("click",()=>{try{E.removeChannel(H)}catch{}Ke(e),d("home")})}se()}const At="#1A6B3C",It="#D4A017";async function Vo(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;if(i){t.state.params.openLeagueId=null,await _t(e,t,i);return}await wt(e,t)}async function wt(e,t,i="waiting"){var r;const{state:a}=t,c=a.profile.id,{data:l}=await E.from("mini_league_members").select("league_id").eq("user_id",c),s=(l||[]).map(p=>p.league_id),{data:d}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("type","public").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),n=(s.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",s).order("created_at",{ascending:!1}):{data:[]}).data||[],o=n.filter(p=>p.status==="waiting"&&!p.is_archived),g=n.filter(p=>p.status==="active"&&!p.is_archived),w=n.filter(p=>p.is_archived||p.status==="finished"),$=(d||[]).filter(p=>!s.includes(p.id)),L=[{key:"waiting",label:"🟡 En attente",count:o.length+$.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:w.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${L.map(p=>`<button class="ml-tab" data-tab="${p.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===p.key?At:"transparent"};background:none;font-size:12px;font-weight:${i===p.key?"900":"600"};color:${i===p.key?At:"#888"};cursor:pointer">${p.label}${p.count?` (${p.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Ko(o,$,c):i==="active"?Yo(g,c):Wo(w,c)}
    </div>
  </div>`,(r=document.getElementById("ml-create-btn"))==null||r.addEventListener("click",()=>Jo(e,t)),e.querySelectorAll(".ml-tab").forEach(p=>p.addEventListener("click",()=>wt(e,t,p.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(p=>p.addEventListener("click",()=>_t(e,t,p.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",z=>{z.stopPropagation(),vn(e,t,p.dataset.join,p.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(p=>p.addEventListener("click",z=>{z.stopPropagation(),fi(e,t,p.dataset.delete,p.dataset.name,i)}))}function Zt(e,t,i=!1){var s,d;const a=e.creator_id===t,c=e.pot||0,l=((d=(s=e.mini_league_members)==null?void 0:s[0])==null?void 0:d.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${a?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${l}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${c>0?`<span style="color:${It};font-weight:700">🏆 ${c.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Ko(e,t,i){const a=[];return e.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),a.push(...e.map(c=>Zt(c,i,!1)))),t.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),a.push(...t.map(c=>Zt(c,i,!0)))),a.length?a.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Yo(e,t){return e.length?e.map(i=>Zt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Wo(e,t){return e.length?e.map(i=>Zt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Jo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var L,r,p,z;const{toast:a}=t,c=document.getElementById("ml-name").value.trim(),l=parseInt(document.getElementById("ml-max").value)||6,s=parseInt(document.getElementById("ml-fee").value)||500,d=((L=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:L.value)||"public",u=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",n=((z=(p=document.getElementById("ml-pwd"))==null?void 0:p.value)==null?void 0:z.trim())||null;if(!c){a("Le nom est obligatoire","error");return}if(s<100){a("Mise minimum : 100 crédits","error");return}if(d==="private"&&!n){a("Mot de passe requis","error");return}const{data:o,error:g}=await E.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:d,password:n,mode:u,max_players:l,entry_fee:s}).select().single();if(g){a("Erreur : "+g.message,"error");return}const{data:w}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((w==null?void 0:w.credits)||0)<s){await E.from("mini_leagues").delete().eq("id",o.id),a(`Crédits insuffisants pour la mise (${s.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:w.credits-s}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:s}).eq("id",o.id),await E.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=w.credits-s);const $=document.getElementById("nav-credits");$&&($.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),a(`Mini League créée ! ${s.toLocaleString("fr")} cr. déduits.`,"success"),_t(e,t,o.id)})}async function vn(e,t,i,a){const{toast:c,state:l}=t,s=l.profile.id,{data:d}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!d){c("Mini League introuvable","error");return}if(d.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}const{count:u}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(u>=d.max_players){c("La Mini League est complète","warning");return}if(a==="private"){const r=prompt("Mot de passe :");if(r===null)return;if(d.password!==r){c("Mot de passe incorrect","error");return}}const n=d.entry_fee||100,{data:o}=await E.from("users").select("credits").eq("id",s).single();if(((o==null?void 0:o.credits)||0)<n){c(`Crédits insuffisants — il te faut ${n.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:g}=await E.from("mini_league_members").insert({league_id:i,user_id:s});if(g){c("Erreur inscription : "+g.message,"error");return}const{error:w}=await E.from("users").update({credits:o.credits-n}).eq("id",s),{error:$}=await E.from("mini_leagues").update({pot:(d.pot||0)+n}).eq("id",i);(w||$)&&console.error("Erreur post-inscription:",w,$),l.profile&&(l.profile.credits=o.credits-n);const L=document.getElementById("nav-credits");L&&(L.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),c(`✅ Inscrit ! −${n.toLocaleString("fr")} cr. · Pot : ${((d.pot||0)+n).toLocaleString("fr")} cr.`,"success"),_t(e,t,i)}async function Xo(e,t,i,a){const{toast:c,state:l}=t,s=l.profile.id;if(!confirm(`Te désinscrire et récupérer ${a.toLocaleString("fr")} cr. ?`))return;const{data:d}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!d||d.status!=="waiting"){c("Impossible — la league a déjà démarré","error");return}const{data:u}=await E.from("users").select("credits").eq("id",s).single();await E.from("mini_leagues").update({pot:Math.max(0,(d.pot||0)-a)}).eq("id",i),await E.from("users").update({credits:((u==null?void 0:u.credits)||0)+a}).eq("id",s),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",s),l.profile&&(l.profile.credits=((u==null?void 0:u.credits)||0)+a);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),c(`↩️ Désinscrit · +${a.toLocaleString("fr")} cr. remboursés`,"success"),wt(e,t,"waiting")}async function fi(e,t,i,a,c){const{toast:l}=t;if(!confirm(`Supprimer définitivement "${a}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:s}=await E.from("mini_leagues").delete().eq("id",i);if(s){l("Erreur suppression ("+s.message+")","error");return}l("Mini League supprimée avec succès","success"),wt(e,t,c)}async function Zo(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),wt(e,t,"archived")}async function _t(e,t,i){var F,O,G,q,H,ie,ue,re,B;const{state:a,toast:c}=t,l=a.profile.id,[{data:s},{data:d},{data:u}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){c("Introuvable","error"),await wt(e,t);return}const n=(d||[]).some(V=>V.user_id===l),o=s.creator_id===l,g=(d||[]).map(V=>V.user).filter(Boolean),w=_n(g,u||[]),$=(u||[]).filter(V=>V.matchday===s.current_day),L=s.pot||0,r=s.entry_fee||100,p=$.length>0&&$.every(V=>V.status==="finished"||V.status==="bye"),z=s.current_day>=s.total_days;e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${s.name}</div>
        <div style="font-size:11px;color:#888">${s.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${s.max_players} · 💰 ${r} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${s.status==="active"?"#d1fae5":s.status==="finished"?"#f3e8ff":"#fef9c3"};color:${s.status==="active"?"#166534":s.status==="finished"?"#6b21a8":"#854d0e"}">
          ${s.status==="waiting"?"En attente":s.status==="active"?`J${s.current_day}/${s.total_days}`:"Terminée"}
        </div>
        ${L>0?`<div style="font-size:12px;font-weight:900;color:${It};margin-top:4px">🏆 ${L.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${s.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${g.length}/${s.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*g.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*g.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*g.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*g.length*.1).toLocaleString("fr")})</div>
        ${g.map(V=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${V.club_color2||At};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${V.club_color1||"#fff"}">${(V.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${V.club_name||V.pseudo}</div><div style="font-size:11px;color:#999">@${V.pseudo}</div></div>
            ${V.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&g.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${g.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${n?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${n&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${$.map(V=>Gi(V,g,l,n)).join("")}
        ${o&&p&&!z?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&p&&z?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(s.status==="active"||s.status==="finished")&&w.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${L>0&&s.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${It}">💰</th>`:""}
          </tr></thead>
          <tbody>${w.map((V,ae)=>{const N=L>0&&s.status==="finished"?ae===0?Math.floor(L*.7):ae===1?Math.floor(L*.2):ae===2?Math.floor(L*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${V.userId===l?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${ae===0?It:ae<3?At:"#555"}">${["🥇","🥈","🥉"][ae]||ae+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${V.clubName}</div><div style="font-size:10px;color:#999">@${V.pseudo}</div></td>
              <td style="text-align:center">${V.played}</td><td style="text-align:center">${V.won}-${V.drawn}-${V.lost}</td>
              <td style="text-align:center;color:${V.goalDiff>=0?At:"#cc2222"}">${V.goalDiff>=0?"+":""}${V.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${V.points}</td>
              ${L>0&&s.status==="finished"?`<td style="text-align:right;font-weight:700;color:${It}">${N?N.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,s.status==="active"?s.current_day-1:s.current_day)},(V,ae)=>ae+1).reverse().map(V=>{const ae=(u||[]).filter(N=>N.matchday===V);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${V}</div>${ae.map(N=>Gi(N,g,l,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!s.is_archived&&s.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const M=s.status==="waiting"?"waiting":s.status==="active"?"active":"archived";(F=document.getElementById("ml-back"))==null||F.addEventListener("click",()=>wt(e,t,M)),(O=document.getElementById("ml-start-btn"))==null||O.addEventListener("click",()=>Qo(e,t,s,g)),(G=document.getElementById("ml-next-day"))==null||G.addEventListener("click",()=>er(e,t,i)),(q=document.getElementById("ml-finish-btn"))==null||q.addEventListener("click",()=>wn(e,t,i,L,w,g)),(H=document.getElementById("ml-join-now"))==null||H.addEventListener("click",()=>vn(e,t,i,s.type)),(ie=document.getElementById("ml-leave-btn"))==null||ie.addEventListener("click",()=>Xo(e,t,i,r)),(ue=document.getElementById("ml-delete-btn"))==null||ue.addEventListener("click",()=>fi(e,t,i,s.name,"waiting")),(re=document.getElementById("ml-delete-now"))==null||re.addEventListener("click",()=>fi(e,t,i,s.name,M)),(B=document.getElementById("ml-archive-btn"))==null||B.addEventListener("click",()=>Zo(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(V=>{V.addEventListener("click",()=>{const ae=$.find(N=>N.id===V.dataset.playMatch);ae&&t.navigate("match-mini-league",{mlMatchId:ae.id,leagueId:i})})})}function Gi(e,t,i,a,c=!1){const l=g=>t.find(w=>w.id===g);if(e.is_bye){const g=l(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"} exempté(e)</div>`}const s=l(e.home_id),d=l(e.away_id),u=e.home_id===i||e.away_id===i,n=u&&e.status==="pending"&&a&&!c,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${u?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${u?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?At:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Qo(e,t,i,a){const{toast:c,state:l}=t,s=tr(a.map(n=>n.id),i.mode),d=[];s.forEach((n,o)=>n.forEach(g=>d.push({league_id:i.id,matchday:o+1,home_id:g.home||g.bye,away_id:g.away||null,is_bye:!!g.bye,status:g.bye?"bye":"pending"})));const{error:u}=await E.from("mini_league_matches").insert(d);if(u){c("Erreur calendrier : "+u.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:s.length}).eq("id",i.id),c(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),_t(e,t,i.id)}async function er(e,t,i){const{data:a}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),c=(a.current_day||0)+1;if(c>(a.total_days||0)){await wn(e,t,i,a.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:c}).eq("id",i),t.toast(`Journée ${c} commencée !`,"success"),_t(e,t,i)}async function wn(e,t,i,a,c,l){const{toast:s,state:d}=t;let u=c,n=l;if(!u){const{data:$}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:L}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);n=(L||[]).map(r=>r.user).filter(Boolean),u=_n(n,$||[])}const o=[Math.floor(a*.7),Math.floor(a*.2),Math.floor(a*.1)],{data:g}=await E.from("users").select("id,credits").in("id",n.map($=>$.id));await Promise.all(u.slice(0,3).map(($,L)=>{if(!o[L])return Promise.resolve();const r=(g||[]).find(p=>p.id===$.userId);return r?E.from("users").update({credits:(r.credits||0)+o[L]}).eq("id",$.userId):Promise.resolve()})),await E.from("mini_leagues").update({status:"finished"}).eq("id",i);const w=u.findIndex($=>$.userId===d.profile.id);w>=0&&w<3&&o[w]?(d.profile.credits=(d.profile.credits||0)+o[w],s(`🏆 Terminée ! Tu remportes ${o[w].toLocaleString("fr")} cr. !`,"success")):s("🏆 Mini League terminée !","success"),_t(e,t,i)}function tr(e,t){const a=e.length%2===0?[...e]:[...e,null],c=a.length;let l=a.slice(1);const s=[];for(let d=0;d<c-1;d++){const u=[],n=[a[0],...l];for(let o=0;o<c/2;o++){const g=n[o],w=n[c-1-o];g===null?u.push({bye:w}):w===null?u.push({bye:g}):u.push({home:g,away:w})}s.push(u),l=[l[l.length-1],...l.slice(0,-1)]}return t==="aller-retour"?[...s,...s.map(d=>d.map(u=>u.bye?u:{home:u.away,away:u.home}))]:s}function _n(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const c=i[a.home_id],l=i[a.away_id];!c||!l||(c.played++,l.played++,c.goalsFor+=a.home_score,c.goalsAgainst+=a.away_score,l.goalsFor+=a.away_score,l.goalsAgainst+=a.home_score,a.home_score>a.away_score?(c.won++,c.points+=3,l.lost++):a.home_score<a.away_score?(l.won++,l.points+=3,c.lost++):(c.drawn++,c.points++,l.drawn++,l.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,l.goalDiff=l.goalsFor-l.goalsAgainst)}),Object.values(i).sort((a,c)=>c.points-a.points||c.goalDiff-a.goalDiff||c.goalsFor-a.goalsFor)}async function Pi(e,t,i,a){var c,l;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const s=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(E.getChannels?E.getChannels():[]).forEach(u=>{const n=u.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&E.removeChannel(u)})}catch(d){console.warn("[FriendMatch] cleanup canaux:",d)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:s,formation:d,starters:u,subsRaw:n,gcCardsEnriched:o,gcDefs:g})=>{const w=$=>ir(e,t,s,d,u,n,$,g||[],i);if(!o.length){w([]);return}ii(e,o,w)})}async function ir(e,t,i,a,c,l,s=[],d=[],u,n){const{state:o,navigate:g,toast:w}=t,$=o.profile.id;let L=!1,r=null;Qe(e);try{await E.rpc("cancel_matchmaking",{p_user_id:$})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",$)}catch{}const{data:p}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",u).single();if(!p){w("Match introuvable","error"),Ke(e),g("mini-league");return}if(p.home_id!==$&&p.away_id!==$){w("Tu ne fais pas partie de ce match","error"),Ke(e),g("mini-league");return}const z=p.home_id===$,M=z?p.away:p.home,F=z?p.away_id:p.home_id,O=(q,H)=>{var ie;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${p.matchday}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${o.profile.club_name||o.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid rgba(255,255,255,0.2)">
              ⏳
            </div>
            <div style="font-size:12px;font-weight:700">${(M==null?void 0:M.club_name)||(M==null?void 0:M.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(ie=document.getElementById("lobby-cancel"))==null||ie.addEventListener("click",()=>{L=!0,clearInterval(r),Ke(e),g("mini-league")})},G=async(q,H)=>{L=!0,clearInterval(r),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&nr(e,t,q,H,s,d)};if(O(),z){let q=p.match_id;if(!q){const{data:ie,error:ue}=await E.from("matches").insert({home_id:$,away_id:F,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(ue||!ie){w("Erreur création match","error"),Ke(e),g("mini-league");return}q=ie.id,await E.from("mini_league_matches").update({match_id:q,status:"playing"}).eq("id",u)}const H=q;r=setInterval(async()=>{if(L){clearInterval(r);return}const{data:ie}=await E.from("matches").select("away_deck_id").eq("id",H).single();ie!=null&&ie.away_deck_id&&(clearInterval(r),G(H,!0))},1500)}else{let q=p.match_id;r=setInterval(async()=>{if(L){clearInterval(r);return}const{data:H}=await E.from("mini_league_matches").select("match_id").eq("id",u).single();H!=null&&H.match_id&&(clearInterval(r),q=H.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",q),G(q,!1))},1500)}}async function nr(e,t,i,a,c=[],l=[]){var A;const{state:s,navigate:d,toast:u}=t,n=((A=s.params)==null?void 0:A.leagueId)||null,o=a?"p1":"p2",g=a?"p2":"p1",w=(c||[]).map(f=>f.id),$=(c||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:L}=await E.from("matches").select("*").eq("id",i).single();if(!L){u("Match introuvable","error"),d("mini-league");return}async function r(){const[{data:f},{data:m},{data:x},{data:y}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:L.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:L.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",L.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",L.away_id).single()]),h=I=>({cardId:I.card_id,position:I.position,id:I.id,firstname:I.firstname,name:I.surname_encoded,country_code:I.country_code,club_id:I.club_id,job:I.job,job2:I.job2,note_g:Number(I.note_g)||0,note_d:Number(I.note_d)||0,note_m:Number(I.note_m)||0,note_a:Number(I.note_a)||0,rarity:I.rarity,skin:I.skin,hair:I.hair,hair_length:I.hair_length,clubName:I.club_encoded_name||null,clubLogo:I.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((f==null?void 0:f.starters)||[]).map(I=>h(I)),_=((m==null?void 0:m.starters)||[]).map(I=>h(I)),T=(f==null?void 0:f.formation)||"4-4-2",S=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:xt(v,T),p2Team:xt(_,S),p1Subs:((f==null?void 0:f.subs)||[]).map(I=>h(I)),p2Subs:((m==null?void 0:m.subs)||[]).map(I=>h(I)),p1Formation:T,p2Formation:S,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?w:[],gc_p2:a?[]:w,gcCardsFull_p1:a?$:[],gcCardsFull_p2:a?[]:$,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let p=L.game_state&&Object.keys(L.game_state).length?L.game_state:null;if(!p)if(a){p=await r();const{data:f}=await E.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await E.from("matches").update({game_state:p,turn_user_id:L.home_id}).eq("id",i):p=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!p;f++){await new Promise(x=>setTimeout(x,400));const{data:m}=await E.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(p=m.game_state)}if(!p){u("Erreur de synchronisation","error"),d("mini-league");return}p.gc_p2=w,p.gcCardsFull_p2=$,await E.from("matches").update({game_state:p}).eq("id",i)}let z=!1,M=!1,F=!1,O=null,G=!1;const q=new Set,H=new Set;function ie(f){var I,U;try{E.removeChannel(ue)}catch{}const m=p[o+"Score"]||0,x=p[g+"Score"]||0;if(!F){F=!0;const D=f.winner_id||(m>x?s.profile.id:x>m?"opp":null),C=D===s.profile.id?"win":D?"loss":null;C&&Vi(()=>Promise.resolve().then(()=>Hn),void 0).then(K=>K.applyOwnEvolution(s.profile.id,C)).catch(()=>{})}if(!M){const D=p.p1Score||0,C=p.p2Score||0,K=(p.usedGc_p1||[]).length,ee=(p.usedGc_p2||[]).length,X=f.winner_id||(D>C?L.home_id:C>D?L.away_id:null);(X?s.profile.id===X:s.profile.id<(a?L.away_id:L.home_id))&&(M=!0,Wi({player1Id:L.home_id,player2Id:L.away_id,score1:D,score2:C,gc1:K,gc2:ee}).catch(ne=>console.warn("[FriendMatch] updateStats:",ne)))}let y,h;f.winner_id?(y=f.winner_id===s.profile.id,h=!1):f.forfeit?(y=m>x,h=!1):(h=m===x,y=m>x),(I=document.getElementById("pvp-end-overlay"))==null||I.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const _=h?"🤝":y?"🏆":"😞",T=h?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",S=h?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${_}</div>
      <div style="font-size:26px;font-weight:900;color:${S}">${T}</div>
      <div style="font-size:18px">${p[o+"Name"]} ${m} – ${x} ${p[g+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(v),(U=v.querySelector("#pvp-end-home"))==null||U.addEventListener("click",()=>{v.remove(),Ke(e),n?d("mini-league",{openLeagueId:n}):d("mini-league")})}const ue=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const m=f.new;try{if(m.status==="finished"||m.forfeit){if(z)return;z=!0,O&&(clearInterval(O),O=null),m.game_state&&(p=m.game_state),ie(m);return}if(m.game_state){const x=p;p=m.game_state;const y=p._lastGC;if(y&&y.seq&&!H.has(y.seq)&&(H.add(y.seq),y.by!==o)){Z(y.type,y.by,()=>ye());return}const h=x[o+"Score"]||0,v=x[g+"Score"]||0,_=p[o+"Score"]||0,T=p[g+"Score"]||0,S=_>h,I=T>v;if((S||I)&&!q.has(p.round)){q.add(p.round);const U=[...p.log||[]].reverse().find(C=>C.isGoal),D=((U==null?void 0:U.homePlayers)||[]).map(C=>({name:C.name,note:C.note,portrait:C.portrait,job:C.job}));J(D,_,T,S,()=>ye());return}ye()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function re(f){Object.assign(p,f),p.lastActionAt=new Date().toISOString();const{error:m}=await E.from("matches").update({game_state:p}).eq("id",i);m&&u("Erreur de synchronisation","error");try{ye()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function B(){if(z)return;z=!0,O&&(clearInterval(O),O=null);const f=a?L.away_id:L.home_id,m=a?"p2":"p1",x=a?"p1":"p2",y={...p,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{E.removeChannel(ue)}catch{}setTimeout(()=>{Ke(e),d("mini-league")},800)}const V={BOOST_STAT:({value:f=1,count:m=1,roles:x=[]},y,h)=>{const v=y[o+"Team"],_=Object.entries(v).filter(([T])=>!x.length||x.includes(T)).flatMap(([T,S])=>S.filter(I=>!I.used).map(I=>({...I,_line:T})));if(!_.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(y);return}ae(_,m,`Choisir ${m} joueur(s) à booster (+${f})`,T=>{T.forEach(S=>{const I=(v[S._line]||[]).find(U=>U.cardId===S.cardId);I&&(I.boost=(I.boost||0)+f,y.log.push({text:`⚡ +${f} sur ${I.name}`,type:"info"}))}),y[o+"Team"]=v,h(y)})},DEBUFF_STAT:({value:f=1,count:m=1,roles:x=[],target:y="ai"},h,v)=>{const _=y==="home"?o:g,T=h[_+"Team"],S=y==="home"?"allié":"adverse",I=Object.entries(T).filter(([U])=>!x.length||x.includes(U)).flatMap(([U,D])=>D.filter(C=>!C.used).map(C=>({...C,_line:U})));if(!I.length){h.log.push({text:`🎯 Aucun joueur ${S}`,type:"info"}),v(h);return}ae(I,m,`Choisir ${m} joueur(s) ${S}(s) (-${f})`,U=>{U.forEach(D=>{const C=(T[D._line]||[]).find(K=>K.cardId===D.cardId);C&&(C.boost=(C.boost||0)-f,h.log.push({text:`🎯 -${f} sur ${C.name}`,type:"info"}))}),h[_+"Team"]=T,v(h)})},GRAY_PLAYER:({count:f=1,roles:m=[],target:x="ai"},y,h)=>{const v=x==="home"?o:g,_=y[v+"Team"],T=x==="home"?"allié":"adverse",S=Object.entries(_).filter(([I])=>!m.length||m.includes(I)).flatMap(([I,U])=>U.filter(D=>!D.used).map(D=>({...D,_line:I})));if(!S.length){y.log.push({text:`❌ Aucun joueur ${T}`,type:"info"}),h(y);return}ae(S,f,`Choisir ${f} joueur(s) ${T}(s) à exclure`,I=>{I.forEach(U=>{const D=(_[U._line]||[]).find(C=>C.cardId===U.cardId);D&&(D.used=!0,y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[v+"Team"]=_,h(y)})},REVIVE_PLAYER:({count:f=1,roles:m=[]},x,y)=>{const h=x[o+"Team"],v=Object.entries(h).filter(([_])=>!m.length||m.includes(_)).flatMap(([_,T])=>T.filter(S=>S.used).map(S=>({...S,_line:_})));if(!v.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(x);return}ae(v,f,`Choisir ${f} joueur(s) à ressusciter`,_=>{_.forEach(T=>{const S=(h[T._line]||[]).find(I=>I.cardId===T.cardId);S&&(S.used=!1,x.log.push({text:`💫 ${S.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=h,y(x)})},REMOVE_GOAL:({},f,m)=>{const x=g+"Score";f[x]>0?(f[x]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(f)},ADD_GOAL_DRAW:({},f,m)=>{f[o+"Score"]===f[g+"Score"]?(f[o+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(f)},ADD_SUB:({value:f=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+f,m.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},f,m)=>m(f)};function ae(f,m,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function _(){var S,I;const T=f.map(U=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[U._line]||"#555",C=ke(U,U._line)+(U.boost||0),ee=v.find(te=>te.cardId===U.cardId)?"#FFD700":"rgba(255,255,255,0.25)",X=U.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${U.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ee};background:${D};overflow:hidden;cursor:pointer;${X}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${U.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${C}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${U._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${T}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${m})
          </button>
        </div>`,(S=h.querySelector("#pp-close"))==null||S.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(U=>{U.addEventListener("click",()=>{const D=U.dataset.cid,C=f.find(ee=>ee.cardId===D),K=v.findIndex(ee=>ee.cardId===D);C&&(K>-1?v.splice(K,1):v.length<m&&v.push(C),_())})}),(I=h.querySelector("#pp-confirm"))==null||I.addEventListener("click",()=>{h.remove(),y(v)})}_(),document.body.appendChild(h)}async function N(f,m){const y=(p["gcCardsFull_"+o]||[]).find(T=>T.id===f),h=(y==null?void 0:y._gcDef)||(p.gcDefs||[]).find(T=>{var S;return T.name===m||((S=T.name)==null?void 0:S.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),v=[...p["usedGc_"+o]||[],f],_={type:m,by:o,seq:(p._gcAnimSeq||0)+1};H.add(_.seq),Z(m,o,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const S=V[h.effect_type];if(S){const I={...p};S(h.effect_params||{},I,async U=>{U["usedGc_"+o]=v,U._lastGC=_,U._gcAnimSeq=_.seq,await re(U)});return}}const T={...p};switch(m){case"Remplacement+":T.maxSubs=(T.maxSubs||3)+1,T.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const S=g+"Score";T[S]>0&&(T[S]--,T.log.push({text:"🚫 But annulé",type:"info"}));break}}T["usedGc_"+o]=v,T._lastGC=_,T._gcAnimSeq=_.seq,await re(T)})}function se(f,m){const x="usedCardIds_"+f,y=new Set(p[x]||[]);m.forEach(h=>y.add(h)),p[x]=[...y]}function fe(){for(const f of["p1","p2"]){const m=new Set(p["usedCardIds_"+f]||[]),x=p[f+"Team"];if(x)for(const y of["GK","DEF","MIL","ATT"])(x[y]||[]).forEach(h=>{h.used=m.has(h.cardId)})}}function ye(){var it,ft,oe,Y,ce,ge;if(p.phase==="reveal")return Ae();if(p.phase==="midfield")return he();if(p.phase==="finished")return k();const f=p[o+"Team"],m=p[g+"Team"];fe();const x=p[o+"Score"],y=p[g+"Score"],h=p[o+"Name"],v=p[g+"Name"],_=p.phase===o+"-attack",T=p.phase===o+"-defense",S=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],I=S.map(W=>W.cardId),U=window.innerWidth>=700,D=p[o+"Subs"]||[],C=p["usedSubIds_"+o]||[],K=D.filter(W=>!C.includes(W.cardId)),ee=p["gcCardsFull_"+o]||[],X=p["usedGc_"+o]||[],te=ee.filter(W=>!X.includes(W.id)),ne=p.boostOwner===o&&!p.boostUsed,de=!["GK","DEF","MIL","ATT"].some(W=>(m[W]||[]).some(xe=>!xe.used)),me=[...f.MIL||[],...f.ATT||[]].filter(W=>!W.used),we=_&&de&&me.length===0?[...f.GK||[],...f.DEF||[]].filter(W=>!W.used).map(W=>W.cardId):[];function _e(W,xe,Te){var ki,Ei;const be=W._gcDef,et={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[be==null?void 0:be.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ot={purple:"#b06ce0",light_blue:"#00d4ef"}[be==null?void 0:be.color]||"#b06ce0",st=(be==null?void 0:be.name)||W.gc_type,rt=(be==null?void 0:be.effect)||((ki=Ve[W.gc_type])==null?void 0:ki.desc)||"",ct=be!=null&&be.image_url?`/manager-wars/icons/${be.image_url}`:null,yt=((Ei=Ve[W.gc_type])==null?void 0:Ei.icon)||"⚡",ht=Math.round(Te*.22),gt=Math.round(Te*.22),$t=Te-ht-gt,En=st.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}"
        style="box-sizing:border-box;width:${xe}px;height:${Te}px;border-radius:10px;border:2px solid ${ot};background:${et};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ht}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${En}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${xe-6}px">${st}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${$t}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${xe-10}px;max-height:${$t-6}px;object-fit:contain">`:`<span style="font-size:${Math.round($t*.55)}px">${yt}</span>`}
        </div>
        <div style="height:${gt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${rt.slice(0,38)}</span>
        </div>
      </div>`}function $e(W,xe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${W}px;height:${xe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(xe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(xe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(xe*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Ee=(W,xe)=>xe?$e(130,175):_e(W,130,175),Se=(W,xe)=>xe?$e(68,95):_e(W,68,95),Me=U?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ne=_?Ue(o)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${S.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:T?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${S.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Le=_&&!Ue(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':_||T?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${S.length}/3 sélectionné(s)</div>`:"",He=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${U?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${K.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':K.map(W=>`<div class="pvp-sub-btn" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${We(W,U?76:44,U?100:58)}</div>`).join("")}
    </div>`,Re=_?"attack":T?"defense":"idle",Fe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ut(f,p[o+"Formation"],Re,I,300,300,we)}
      </div>
    </div>`;function Be(W){if(W.type==="duel"&&(W.homeTotal!=null||W.aiTotal!=null)){const xe=(W.homeTotal||0)>=(W.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(W.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.homePlayers||[]).map(Te=>dt(Te)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${xe?20:14}px;font-weight:900;color:${xe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${W.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${xe?14:20}px;font-weight:900;color:${xe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${W.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.aiPlayers||[]).map(Te=>dt(Te)).join("")}
            </div>
          </div>
          ${W.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${W.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${W.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${W.type==="goal"?700:400};padding:3px 2px">${W.text||""}</div>`}const Ze=(()=>{var xe,Te;if(T&&((xe=p.pendingAttack)!=null&&xe.players)){const be=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${nt((be.players||[]).map(et=>({...et,used:!1})),"#ff6b6b",be.total)}
        </div>`}if(_&&((Te=p.pendingAttack)!=null&&Te.players)){const be=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((be.players||[]).map(et=>({...et,used:!1})),"#00ff88",be.total)}
        </div>`}const W=(p.log||[]).slice(-1)[0];return W?'<div style="padding:2px 4px">'+Be(W)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),tt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ze}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;Qe(e),e.style.overflow="hidden",U?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${He}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Fe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ne}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${te.map(W=>Ee(W,!1)).join("")}
            ${ne?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(f,p[o+"Formation"],Re,I,300,300,we)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${te.map(W=>Se(W,!1)).join("")}
            ${ne?Se(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${_&&K.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${_&&K.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${_&&K.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${_&&K.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${K.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+o]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ne}${Le}</div>
        </div>
      </div>`;function Xe(){const W=e.querySelector(".match-screen");if(!W)return;const xe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);W.style.height=xe+"px",W.style.minHeight=xe+"px",W.style.maxHeight=xe+"px",W.style.overflow="hidden";const Te=e.querySelector("#mobile-action-bar"),be=e.querySelector("#mobile-play-area");Te&&be&&(be.style.paddingBottom=Te.offsetHeight+"px")}if(Xe(),setTimeout(Xe,120),setTimeout(Xe,400),G||(G=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Xe),window.visualViewport.addEventListener("scroll",Xe)),window.addEventListener("resize",Xe)),function(){const xe=e.querySelector(".terrain-wrapper svg");xe&&(xe.removeAttribute("width"),xe.removeAttribute("height"),xe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",xe.setAttribute("viewBox","-26 -26 352 352"),xe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(W=>{W.addEventListener("click",()=>{if(!_&&!T)return;const xe=W.dataset.cardId,Te=W.dataset.role,be=(f[Te]||[]).find(rt=>rt.cardId===xe);if(!be||be.used)return;const et=we.includes(xe);if(_&&!["MIL","ATT"].includes(Te)&&!et)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const ot=p["selected_"+o],st=ot.findIndex(rt=>rt.cardId===xe);st>-1?ot.splice(st,1):ot.length<3&&ot.push({...be,_role:Te}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(W=>{W.addEventListener("click",()=>Q(W.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(W=>{W.addEventListener("click",()=>Q())}),(it=e.querySelector("#pvp-sub-open"))==null||it.addEventListener("click",()=>Q()),e.querySelectorAll(".pvp-gc-mini").forEach(W=>{W.addEventListener("click",()=>P(W.dataset.gcId,W.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(oe=e.querySelector("#pvp-action"))==null||oe.addEventListener("click",W=>{_?W.currentTarget.dataset.pass==="1"||!Ue(o)?ze():Pe():T&&Oe()}),(Y=e.querySelector("#pvp-quit"))==null||Y.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&B()}),(ce=e.querySelector("#pvp-view-opp"))==null||ce.addEventListener("click",()=>le()),(ge=e.querySelector("#pvp-toggle-history"))==null||ge.addEventListener("click",()=>je()),O&&(clearInterval(O),O=null),(_||T)&&!z){let W=30,xe=!1;const Te=()=>document.getElementById("pvp-timer"),be=()=>{Te()&&(Te().textContent=W+"s",Te().style.color=xe?"#ff4444":"#fff")};be(),O=setInterval(()=>{W--,W<0?xe?(clearInterval(O),O=null,_&&!Ue(o)?ze():B()):(xe=!0,W=15,be()):be()},1e3)}}function Ae(){Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[g+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${pt(p[g+"Team"],p[g+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await re({phase:"midfield"})},5e3)}let ve=!1;function he(){if(ve)return;const f=p[o+"Team"].MIL||[],m=p[g+"Team"].MIL||[];function x(te){return te.reduce((ne,de)=>ne+ke(de,"MIL"),0)}function y(te){let ne=0;for(let de=0;de<te.length-1;de++){const me=at(te[de],te[de+1]);me==="#00ff88"?ne+=2:me==="#FFD700"&&(ne+=1)}return ne}const h=x(f)+y(f),v=x(m)+y(m),_=h>=v;function T(te,ne,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${te.map((me,we)=>{const _e=we<te.length-1?at(me,te[we+1]):null,$e=!_e||_e==="#ff3333"||_e==="#cc2222",Ee=_e==="#00ff88"?"+2":_e==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${we}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...me,note:ke(me,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${we<te.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${$e?"rgba(255,255,255,0.12)":_e};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${$e?"none":`0 0 8px ${_e}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${_e}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${de}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(te)} + ${y(te)} liens = <b style="color:#fff">${x(te)+y(te)}</b>
        </div>
      </div>`}Qe(e),e.innerHTML=`
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
      ${T(f,p[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${T(m,p[g+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const S=(te,ne)=>e.querySelectorAll(te).forEach((de,me)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},ne+me*90)});S(".duel-card-me",150),S(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((te,ne)=>setTimeout(()=>{te.style.opacity="1"},ne*70)),900),setTimeout(()=>{const te=e.querySelector("#pvp-vs");te&&(te.style.opacity="1",te.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function I(te,ne,de){const me=document.getElementById(te);if(!me)return;const we=performance.now(),_e=$e=>{const Ee=Math.min(1,($e-we)/de);me.textContent=Math.round(ne*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(_e):me.textContent=ne};requestAnimationFrame(_e)}setTimeout(()=>{I("pvp-score-me",h,800),I("pvp-score-opp",v,800)},1500);const U=p.p1Team.MIL||[],D=p.p2Team.MIL||[],C=x(U)+y(U),K=x(D)+y(D),ee=C>=K?"p1":"p2";let X=p.boostValue;X==null&&(X=ti(),p.boostValue=X,p.boostOwner=ee,p.boostUsed=!1),ve=!0,setTimeout(()=>{const te=e.querySelector("#duel-row-"+(_?"me":"opp")),ne=e.querySelector("#duel-row-"+(_?"opp":"me")),de=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),we=_?de:me,_e=_?me:de;we&&(we.style.fontSize="80px",we.style.color=_?"#FFD700":"#ff6b6b",we.style.animation="duelPulse .5s ease"+(_?",duelGlow 1.5s ease infinite .5s":"")),_e&&(_e.style.opacity="0.25"),setTimeout(()=>{te&&(te.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",te.style.zIndex="5"),setTimeout(()=>{const $e=document.getElementById("duel-shock");$e&&($e.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const $e=document.getElementById("pvp-duel-finale");if(!$e)return;const Ee=p.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+X+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;$e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(_?"⚽ "+p[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[g+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Se,$e.style.transition="opacity .45s ease",$e.style.opacity="1",$e.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const Ne=ee;await re({phase:Ne+"-attack",attacker:Ne,round:1,boostValue:X,boostUsed:!1,boostOwner:Ne})})},600)},700)},2800)}function J(f,m,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const _=Array.from({length:10},(U,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${m} – ${x}
      </div>
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(U=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${T[U.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${U.portrait?`<img src="${U.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(U.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let S=!1;const I=()=>{S||(S=!0,v.remove(),setTimeout(()=>h(),50))};v.addEventListener("click",I),setTimeout(I,3500)}function Z(f,m,x){var X,te;const y=(p.gcDefs||[]).find(ne=>{var de;return ne.name===f||((de=ne.name)==null?void 0:de.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||f,T=(y==null?void 0:y.effect)||((X=Ve[f])==null?void 0:X.desc)||"",S=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,I=((te=Ve[f])==null?void 0:te.icon)||"⚡",D=m===o?"Vous":p[m+"Name"]||"Adversaire",C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",C.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${I}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${T}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(C);let K=!1;const ee=()=>{K||(K=!0,C.remove(),setTimeout(()=>x&&x(),50))};C.addEventListener("click",ee),setTimeout(ee,3e3)}function P(f,m){var C,K,ee,X;const y=(p["gcCardsFull_"+o]||[]).find(te=>te.id===f),h=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",T=(h==null?void 0:h.name)||m,S=(h==null?void 0:h.effect)||((C=Ve[m])==null?void 0:C.desc)||"Carte spéciale.",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,U=((K=Ve[m])==null?void 0:K.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${_};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${_}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${U}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(D),(ee=D.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>D.remove()),(X=D.querySelector("#pvp-gc-use"))==null||X.addEventListener("click",()=>{D.remove(),N(f,m)})}function R(){var y;const f=p[o+"Team"],m=Object.entries(f).flatMap(([h,v])=>(v||[]).filter(_=>!_.used).map(_=>({..._,_line:h})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(h=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",_=ke(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(y=x.querySelector("#bp-close"))==null||y.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const v=h.dataset.cid,_=m.find(S=>S.cardId===v);if(!_)return;const T=(f[_._line]||[]).find(S=>S.cardId===v);T&&(T.boost=(T.boost||0)+p.boostValue),x.remove(),await re({[o+"Team"]:f,boostUsed:!0})})})}function Q(f=null){var K,ee;if(!(p.phase===o+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const x=p[o+"Team"],y=p["usedSubIds_"+o]||[],h=p.maxSubs||3;if(y.length>=h){u(`Maximum ${h} remplacements atteint`,"warning");return}const v=Object.entries(x).flatMap(([X,te])=>(te||[]).filter(ne=>ne.used).map(ne=>({...ne,_line:X}))),_=(p[o+"Subs"]||[]).filter(X=>!y.includes(X.cardId));if(!v.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!_.length){u("Aucun remplaçant disponible","warning");return}let T=Math.max(0,v.findIndex(X=>X.cardId===f));const S=((K=v[T])==null?void 0:K._line)||((ee=v[T])==null?void 0:ee.job);let I=Math.max(0,_.findIndex(X=>X.job===S)),U=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function C(){var _e,$e,Ee,Se,Me,Ne;const X=v[T],te=_[I],ne=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(ne*1.35),me=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${te?We({...te,used:!1,boost:0},ne,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(I>=_.length-1)}" ${I>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${_.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me(T===0)}" ${T===0?"disabled":""}>▲</button>
          <div>${X?We({...X,used:!1,boost:0},ne,de):"<div>—</div>"}</div>
          <button id="pout-down" style="${me(T>=v.length-1)}" ${T>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${T+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(_e=D.querySelector("#psub-close"))==null||_e.addEventListener("click",()=>D.remove()),($e=D.querySelector("#pout-up"))==null||$e.addEventListener("click",()=>{T>0&&(T--,C())}),(Ee=D.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{T<v.length-1&&(T++,C())}),(Se=D.querySelector("#pin-up"))==null||Se.addEventListener("click",()=>{I>0&&(I--,C())}),(Me=D.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{I<_.length-1&&(I++,C())});const we=(Le,He,Re,Fe)=>{const Be=D.querySelector("#"+Le);if(!Be)return;let Ze=0;Be.addEventListener("touchstart",tt=>{Ze=tt.touches[0].clientY},{passive:!0}),Be.addEventListener("touchend",tt=>{const Xe=tt.changedTouches[0].clientY-Ze;if(Math.abs(Xe)<30)return;const it=He();Xe<0&&it<Fe-1?(Re(it+1),C()):Xe>0&&it>0&&(Re(it-1),C())},{passive:!0})};we("pin-panel",()=>I,Le=>I=Le,_.length),we("pout-panel",()=>T,Le=>T=Le,v.length),(Ne=D.querySelector("#psub-confirm"))==null||Ne.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),U)return;U=!0;const He=v[T],Re=_[I];if(!He||!Re)return;const Fe=He._line,Be=(x[Fe]||[]).findIndex(Xe=>Xe.cardId===He.cardId);if(Be===-1){u("Erreur : joueur introuvable","error"),D.remove();return}const Ze={...Re,_line:Fe,position:He.position,used:!1,boost:0};x[Fe].splice(Be,1,Ze);const tt=[...y,Re.cardId];D.remove(),pe(He,Re,async()=>{await re({[o+"Team"]:x,[g+"Team"]:p[g+"Team"],["usedSubIds_"+o]:tt})})})}document.body.appendChild(D),C()}function pe(f,m,x){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(S,I,U)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${I};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${U}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[S.job]||"#555"};border:3px solid ${I};position:relative;overflow:hidden;margin:0 auto">
        ${Ge(S)?`<img src="${Ge(S)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(S.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let _=!1;const T=()=>{_||(_=!0,h.remove(),setTimeout(()=>x(),50))};h.addEventListener("click",T),setTimeout(T,2200)}function le(){var m;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[g+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pt(p[g+"Team"],p[g+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(m=f.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>f.remove())}function je(){var y;const f=p.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=h=>{var _,T,S;if(h.type==="duel"){const I=h.isGoal,U=h.homeScored&&o==="p1"||!h.homeScored&&I&&o==="p2",D=h.homeScored?"#FFD700":I?"#ff6b6b":"rgba(255,255,255,0.3)",C=I?U?"⚽ BUT !":"⚽ BUT adversaire !":(_=h.homePlayers)!=null&&_.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${I?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${D};margin-bottom:4px">
          <div style="font-size:9px;color:${D};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
          ${(T=h.homePlayers)!=null&&T.length?`<div style="margin-bottom:3px">${nt(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
          ${(S=h.aiPlayers)!=null&&S.length?`<div style="opacity:0.7">${nt(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
        </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${h.outPlayer?We({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${h.inPlayer?We({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${h.text||""}</div>
      </div>`};m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(x).join("")}
      </div>`,document.body.appendChild(m),(y=m.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>m.remove())}async function ze(){if(p.phase!==o+"-attack")return;const f=o==="p1"?"p2":"p1",m=(p.round||0)+1,x=[...p.log||[]];x.push({type:"info",text:`⏭️ ${p[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Je(p),h=Ue(f),v=y||!h?"finished":f+"-attack";await re({["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:v,attacker:f,round:m,log:x}),v==="finished"&&await b(p)}async function Pe(){const f=p[o+"Team"],m=!["GK","DEF","MIL","ATT"].some(v=>(p[g+"Team"][v]||[]).some(_=>!_.used)),x=(p["selected_"+o]||[]).map(v=>{const _=(f[v._role]||[]).find(C=>C.cardId===v.cardId)||v,T=m&&["GK","DEF"].includes(v._role),S=f[v._role]||[],I=S.findIndex(C=>C.cardId===v.cardId),U=lt(S.length),D=I>=0?U[I]:_._col??1;return{..._,_line:v._role,_col:D,...T?{note_a:Math.max(1,Number(_.note_a)||0)}:{}}});if(!x.length)return;const y=Pt(x,p.modifiers[o]||{});se(o,x.map(v=>v.cardId)),x.forEach(v=>{const _=(f[v._role]||[]).find(T=>T.cardId===v.cardId);_&&(_.used=!0)}),p["selected_"+o]=[],ye();const h=[...p.log||[]];if(m){const v=(p[o+"Score"]||0)+1,_=x.map(D=>({name:D.name,note:ke(D,D._line||"ATT"),portrait:Ge(D),job:D.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:_,homeTotal:y.total,aiTotal:0});const T=(p.round||0)+1,S=o==="p1"?"p2":"p1",I={...p,[o+"Team"]:f,[o+"Score"]:v},U=Je(I);q.add(T),J(_,v,p[g+"Score"]||0,!0,async()=>{await re({[o+"Team"]:f,[o+"Score"]:v,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:U?"finished":S+"-attack",attacker:S,round:T,log:h}),U&&await b({...p,[o+"Score"]:v})});return}h.push({type:"pending",text:`⚔️ ${p[o+"Name"]} attaque (${y.total})`}),await re({[o+"Team"]:f,[g+"Team"]:p[g+"Team"],pendingAttack:{...y,players:x,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:g+"-defense",log:h})}async function Oe(){const f=p[o+"Team"],m=(p["selected_"+o]||[]).map(X=>{const te=(f[X._role]||[]).find(_e=>_e.cardId===X.cardId)||X,ne=f[X._role]||[],de=ne.findIndex(_e=>_e.cardId===X.cardId),me=lt(ne.length),we=de>=0?me[de]:te._col??1;return{...te,_line:X._role,_col:we}}),x=Nt(m,p.modifiers[o]||{});se(o,m.map(X=>X.cardId)),m.forEach(X=>{const te=(f[X._role]||[]).find(ne=>ne.cardId===X.cardId);te&&(te.used=!0)}),p["selected_"+o]=[],ye();const y=Rt(p.pendingAttack.total,x.total,p.modifiers[o]||{}),h=p.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),_=h==="p1"?"p2":"p1",T=(p.round||0)+1,S=(p.pendingAttack.players||[]).map(X=>({name:X.name,note:ke(X,X._line||"ATT"),portrait:Ge(X),job:X.job})),I=[...p.log||[]];I.push({type:"duel",isGoal:v,homeScored:v&&h===o,text:v?`⚽ BUT de ${p[h+"Name"]} ! (${p.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${x.total})`,homePlayers:S,aiPlayers:m.map(X=>({name:X.name,note:ke(X,X._line||"DEF"),portrait:Ge(X),job:X.job})),homeTotal:p.pendingAttack.total,aiTotal:x.total});const U=v?(p[h+"Score"]||0)+1:p[h+"Score"]||0,D={...p,[o+"Team"]:f,[h+"Score"]:U},C=Je(D),K=C?"finished":_+"-attack",ee=async()=>{await re({[o+"Team"]:f,[g+"Team"]:p[g+"Team"],[h+"Score"]:U,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:K,attacker:_,round:T,log:I}),(K==="finished"||C)&&await b({...p,[h+"Score"]:U})};if(v){const X=h===o,te=X?U:p[o+"Score"]||0,ne=X?p[g+"Score"]||0:U;q.add(T),J(S,te,ne,X,ee)}else await ee()}function Ce(f){return["MIL","ATT"].some(m=>(f[m]||[]).some(x=>!x.used))}function Ie(f){return["GK","DEF","MIL","ATT"].some(m=>(f[m]||[]).some(x=>!x.used))}function qe(f){return Ie(f)&&!Ce(f)}function Ue(f){const m=p[f+"Team"],x=p[(f==="p1"?"p2":"p1")+"Team"];return!!(Ce(m)||!Ie(x)&&qe(m))}function Je(f){const m=["MIL","ATT"].some(I=>(f.p1Team[I]||[]).some(U=>!U.used)),x=["MIL","ATT"].some(I=>(f.p2Team[I]||[]).some(U=>!U.used)),y=Ie(f.p1Team),h=Ie(f.p2Team);return!m&&!(!h&&y)&&(!x&&!(!y&&h))}function j(f){const m=f.p1Score||0,x=f.p2Score||0;return m===x?null:m>x?L.home_id:L.away_id}async function b(f){try{const m=j(f),x=m?L.home_id===m?L.away_id:L.home_id:null,y=f.p1Score||0,h=f.p2Score||0;await E.from("matches").update({status:"finished",winner_id:m,home_score:y,away_score:h}).eq("id",i);const{data:v}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(v){await E.from("mini_league_matches").update({home_score:y,away_score:h,status:"finished"}).eq("id",v.id);const{data:_}=await E.from("mini_league_matches").select("id, status").eq("league_id",v.league_id).eq("matchday",v.matchday);if((_||[]).every(S=>S.status==="finished"||S.status==="bye")){const{data:S}=await E.from("mini_leagues").select("current_day,total_days").eq("id",v.league_id).single();if(S){const I=(S.current_day||0)+1,U=I>(S.total_days||0);await E.from("mini_leagues").update({current_day:U?S.total_days:I,status:U?"finished":"active"}).eq("id",v.league_id)}}}m&&x&&Qt(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function k(){var h;const f=p[o+"Score"],m=p[g+"Score"],x=f>m,y=f===m;Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{E.removeChannel(ue)}catch{}Ke(e),d("mini-league",n?{openLeagueId:n}:{})})}ye()}const or={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function kt(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ni(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Vt(e,t){const a=t?or[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Ri(e){const i=Jt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Oi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function rr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await $i(e,t)}async function $i(e,t){const{state:i,toast:a}=t,{data:c}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:l}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(c||[]).filter(r=>r.seller_id!==i.profile.id),d=l||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${s.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${d.length})</button>
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
  </div>`;let u="buy";const n=()=>{var r,p,z,M,F,O,G;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((p=document.getElementById("flt-club"))==null?void 0:p.value)||"").toLowerCase().trim(),country:(((z=document.getElementById("flt-country"))==null?void 0:z.value)||"").toLowerCase().trim(),job:((M=document.getElementById("flt-job"))==null?void 0:M.value)||"",rarity:((F=document.getElementById("flt-rarity"))==null?void 0:F.value)||"",note1:parseInt((O=document.getElementById("flt-note1"))==null?void 0:O.value)||0,note2:parseInt((G=document.getElementById("flt-note2"))==null?void 0:G.value)||0}};function o(r){const p=n();return r.filter(z=>{var ie,ue;const M=(ie=z.card)==null?void 0:ie.player;if(!M)return!1;const F=`${M.firstname} ${M.surname_encoded}`.toLowerCase(),O=(((ue=M.clubs)==null?void 0:ue.encoded_name)||"").toLowerCase(),G=(M.country_code||"").toLowerCase(),q=kt(M,M.job),H=M.job2?kt(M,M.job2):0;return!(p.name&&!F.includes(p.name)||p.club&&!O.includes(p.club)||p.country&&!G.includes(p.country)||p.job&&M.job!==p.job||p.rarity&&M.rarity!==p.rarity||p.note1&&q<p.note1||p.note2&&H<p.note2)})}function g(r){var O,G,q;const p=(O=r.card)==null?void 0:O.player;if(!p)return"";const z=kt(p,p.job),M=p.job2?kt(p,p.job2):0,F=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Ni(p.rarity)}
      ${Vt(z,p.job)}
      ${Vt(M,p.job2||null)}
      ${Ri(p.country_code)}
      ${Oi((G=p.clubs)==null?void 0:G.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((q=r.seller)==null?void 0:q.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${F?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${F?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function w(r){var O,G,q;const p=(O=r.card)==null?void 0:O.player;if(!p)return"";const z=kt(p,p.job),M=p.job2?kt(p,p.job2):0,F=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${F?"opacity:0.7":""}">
      ${Ni(p.rarity)}
      ${Vt(z,p.job)}
      ${Vt(M,p.job2||null)}
      ${Ri(p.country_code)}
      ${Oi((G=p.clubs)==null?void 0:G.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:${F?"#22c55e":"#999"};margin-top:1px">
          ${F?`✅ Vendu à ${((q=r.buyer)==null?void 0:q.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${F?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function $(){const r=document.getElementById("mkt-content"),p=document.getElementById("mkt-filters");if(r){if(p.style.display=u==="buy"?"flex":"none",u==="buy"){const z=o(s);r.innerHTML=z.length?z.map(g).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const z=d.filter(F=>F.status==="active").sort((F,O)=>new Date(O.listed_at)-new Date(F.listed_at)),M=d.filter(F=>F.status==="sold").sort((F,O)=>new Date(O.sold_at||O.listed_at)-new Date(F.sold_at||F.listed_at));r.innerHTML=(z.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${z.length})</div>`+z.map(w).join(""):"")+(M.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${M.length})</div>`+M.map(w).join(""):"")+(!z.length&&!M.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(z=>z.addEventListener("click",()=>ar(z.dataset.buy,s,e,t))),r.querySelectorAll("[data-cancel]").forEach(z=>z.addEventListener("click",()=>dr(z.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{u=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(p=>{const z=p===r;p.style.background=z?"var(--green)":"#fff",p.style.color=z?"#fff":"var(--gray-600)",p.style.borderColor=z?"var(--green)":"var(--gray-200)"}),$()})});let L;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var p;(p=document.getElementById(r))==null||p.addEventListener("input",()=>{clearTimeout(L),L=setTimeout($,250)})}),$()}async function ar(e,t,i,a){const{state:c,toast:l,refreshProfile:s}=a,d=t.find(o=>o.id===e);if(!d)return;const u=d.price;if((c.profile.credits||0)<u){l("Crédits insuffisants","error");return}sr(d,async()=>{const{error:o}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(o){l("Erreur achat : "+o.message,"error");return}await s();const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l("✅ Carte achetée !","success"),await $i(i,a)})}function sr(e,t){var s;const i=(s=e.card)==null?void 0:s.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const l=d=>{c.remove(),d&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>l(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>l(!0)),c.addEventListener("click",d=>{d.target===c&&l(!1)})}async function dr(e,t,i){const{toast:a}=i,{data:c}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:l}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");l||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),$i(t,i)}async function lr(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((l,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${l.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
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
  `}async function cr(e,{state:t,navigate:i,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(l||[]).filter(o=>o.status==="finished"),u=(l||[]).filter(o=>o.status==="in_progress");function n(o){const g=o.home_id===c.id;g?o.home_score:o.away_score,g?o.away_score:o.home_score;const w=o.winner_id===c.id,$=o.home_score===o.away_score&&o.status==="finished",L=o.status!=="finished"?"…":$?"N":w?"V":"D",r=o.status!=="finished"||$?"#888":w?"#1A6B3C":"#c0392b";let p=s[o.mode]||o.mode;o.away_id===null&&!p.startsWith("IA")&&(p="IA");const M=o.home_id===c.id?o.away:o.home;let F;o.away_id===null?F=p:M?F=`${M.club_name||M.pseudo} (${M.pseudo})`:F="Adversaire";let O="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(O=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const G=new Date(o.created_at),q=G.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+G.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),H=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${F}${O}</div>
        <div style="font-size:11px;color:var(--gray-600)">${p} · ${q}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${H}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${L}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(l||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${u.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${u.map(n).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(n).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}An(Sn);const De={user:null,profile:null,page:"home",params:{}};function Mt(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function pr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function gi(){document.getElementById("modal-overlay").classList.add("hidden")}async function jt(){if(!De.user)return;const{data:e}=await E.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Yt(e,t={}){De.page=e,De.params=t,$n()}async function $n(){var a,c,l,s;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Yt,toast:Mt,openModal:pr,closeModal:gi,refreshProfile:jt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await Li(e,i);break;case"collection":await Yn(e,i);break;case"decks":await di(e,i);break;case"boosters":await lo(e,i);break;case"match":{const d=De.params&&De.params.matchMode||"vs_ai_easy";d==="random"?await hn(e,i):d==="friend"?await Oo(e,i,(a=De.params)==null?void 0:a.friendId,(c=De.params)==null?void 0:c.friendName):d==="mini-league"?await Pi(e,i,(l=De.params)==null?void 0:l.mlMatchId,(s=De.params)==null?void 0:s.leagueId):await ko(e,i);break}case"market":await rr(e,i);break;case"rankings":await lr(e,i);break;case"matches":await cr(e,i);break;case"friends":await Cn(e,i);break;case"mini-league":await Vo(e,i);break;case"match-mini-league":{const d=De.params||{};await Pi(e,i,d.mlMatchId,d.leagueId);break}default:await Li(e,i)}}function ur(){var a;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),Yt(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Yt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Yt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>fr())}async function fr(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const c=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${a.image_url?`<img src="${a.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${c}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${a.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${a.description}</div>
    </div>`}).join("");t.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${i||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function gr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&gi()}),document.getElementById("modal-close").addEventListener("click",gi);const{data:{session:e}}=await E.auth.getSession();if(!e){Hi(),Ai(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Mt});return}De.user=e.user,await jt(),Hi();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(c=>{a[c.formation]=c.links}),Tn(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){Ln(document.getElementById("app"),{state:De,navigate:async()=>{await jt(),si()},toast:Mt,refreshProfile:jt});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){vo(document.getElementById("app"),{state:De,navigate:()=>si(),toast:Mt,refreshProfile:jt});return}si(),E.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",Ai(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Mt}))})}function mr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function oi(){const e=document.getElementById("app");e&&(e.style.height=mr()+"px")}window.addEventListener("resize",oi);window.addEventListener("orientationchange",()=>setTimeout(oi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",oi);function si(){const e=()=>{var i;(i=De.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",oi(),ur(),$n()}function Hi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function kn(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}gr().catch(e=>{console.error("Échec du démarrage:",e),kn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&kn("Le serveur met trop de temps à répondre.")},12e3);
