import{s as A,F as ui,h as qt,j as Oi,l as at,i as _n,k as $n,b as kn}from"./formation-links-DJC25wD7.js";function $i(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,l=document.getElementById("login-error");if(l.textContent="",!a||!c){l.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:s}=await A.auth.signInWithPassword({email:a,password:c});if(d.textContent="Se connecter",d.disabled=!1,s){l.textContent=s.message.includes("Invalid")?"Email ou mot de passe incorrect.":s.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,l=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!a||!c||!l){d.textContent="Remplissez tous les champs.";return}if(c.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==l){d.textContent="Les mots de passe ne correspondent pas.";return}const s=document.getElementById("reg-btn");s.textContent="Création…",s.disabled=!0;const{error:p}=await A.auth.signUp({email:a,password:c});if(s.textContent="Créer mon compte",s.disabled=!1,p){d.textContent=p.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function En(e,{state:t,navigate:i,toast:a,refreshProfile:c}){let l="#1A6B3C",d="#D4A017";e.innerHTML=`
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
  `;function s(){var L;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),g=((L=document.getElementById("setup-club"))==null?void 0:L.value)||"MW",_=g.trim().split(" ").filter(Boolean),$=_.length>=2?(_[0][0]+_[1][0]).toUpperCase():g.slice(0,2).toUpperCase();n&&(n.style.background=d,n.style.borderColor=l),o&&(o.textContent=$,o.style.color=l)}document.getElementById("color1").addEventListener("input",n=>{l=n.target.value,document.getElementById("swatch1").style.background=l,s()}),document.getElementById("color2").addEventListener("input",n=>{d=n.target.value,document.getElementById("swatch2").style.background=d,s()});function p(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:g}=await A.from("users").select("id").eq("pseudo",n).maybeSingle();if(g){o.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:g}=await A.from("users").select("id").eq("club_name",n).maybeSingle();if(g){o.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),g=document.getElementById("step3-error"),_=document.getElementById("step3-finish");g.textContent="",_.disabled=!0,_.textContent="Création en cours…";try{const{error:$}=await A.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:l,club_color2:d,credits:1e4});if($)throw $;await Tn(t.user.id),await c(),a(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch($){g.textContent=$.message,_.disabled=!1,_.textContent="🚀 Créer mon profil !"}})}async function Tn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await A.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const An="modulepreload",zn=function(e){return"/manager-wars/"+e},ki={},Hi=function(t,i,a){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),s=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));c=Promise.allSettled(i.map(p=>{if(p=zn(p),p in ki)return;ki[p]=!0;const n=p.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${o}`))return;const g=document.createElement("link");if(g.rel=n?"stylesheet":An,n||(g.as="script"),g.crossOrigin="",g.href=p,s&&g.setAttribute("nonce",s),document.head.appendChild(g),n)return new Promise((_,$)=>{g.addEventListener("load",_),g.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(d){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=d,window.dispatchEvent(s),!s.defaultPrevented)throw d}return c.then(d=>{for(const s of d||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},jt="#1A6B3C",Ct="#cc2222",Sn="#D4A017",Ei="#888";async function In(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Ui(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Mn(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Vi(i,a,null,t))}async function Ui(e,t,i={}){const{navigate:a}=i,c=e.user.id,{data:l,error:d}=await A.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:s}=await A.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(s>0?(p.style.display="flex",p.textContent=s):p.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(d){console.error("[Friends] Erreur:",d),n.innerHTML=`<div style="color:${Ct};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const o=(l||[]).map($=>$.requester_id===c?$.addressee_id:$.requester_id);let g={};if(o.length){const{data:$}=await A.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);($||[]).forEach(L=>{g[L.id]=L})}const _=(l||[]).map($=>({friendshipId:$.id,friend:g[$.requester_id===c?$.addressee_id:$.requester_id]||{pseudo:"?"}}));if(!_.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${_.length} ami${_.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${_.map(({friendshipId:$,friend:L})=>Ln(L,$)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach($=>{$.addEventListener("click",()=>jn(e,$.dataset.stats,$.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach($=>{$.addEventListener("click",()=>{const L=$.dataset.friendId,r=$.dataset.friendName;console.log("[Friends] clic match",{fid:L,fname:r,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:L,friendName:r}):t("Erreur navigation","error")})})}function Ln(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||i).slice(0,2).toUpperCase(),l=e.club_color2||jt,d=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,p=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${l};border:2.5px solid ${d};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${d}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Sn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Mn(e,t){const i=fi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Ct};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${gi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),l=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",l),i.addEventListener("click",d=>{d.target===i&&l()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const d=a.value.trim();if(!d){c.textContent="Entre un pseudo";return}c.textContent="";const{data:s}=await A.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!s){c.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await A.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(p){const o=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=o;return}const{error:n}=await A.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(n){c.textContent="Erreur : "+n.message;return}l(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Vi(e,t,i=null,a={}){const c=e.user.id,{data:l}=await A.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),d=(l||[]).map(_=>_.requester_id);let s={};if(d.length){const{data:_}=await A.from("users").select("id, pseudo, club_name").in("id",d);(_||[]).forEach($=>{s[$.id]=$})}const p=(l||[]).map(_=>({..._,requester:s[_.requester_id]||{pseudo:"?"}})),n=fi(),o=p||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(_=>{var $,L,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${(($=_.requester)==null?void 0:$.club_name)||((L=_.requester)==null?void 0:L.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=_.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${_.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${jt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${_.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ct};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${gi()}`,document.body.appendChild(n);const g=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",g),n.addEventListener("click",_=>{_.target===n&&g()}),n.querySelectorAll("[data-accept]").forEach(_=>{_.addEventListener("click",async()=>{const{error:$}=await A.from("friendships").update({status:"accepted"}).eq("id",_.dataset.accept);if($){t("Erreur : "+$.message,"error");return}_.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ui(e,t,a),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(_=>{_.addEventListener("click",async()=>{await A.from("friendships").delete().eq("id",_.dataset.decline),_.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function jn(e,t,i){const a=e.user.id,[c,l]=[a,t].sort(),d=a===c,{data:s}=await A.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",l).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",n=s||{},o=d?n.wins_p1||0:n.wins_p2||0,g=d?n.wins_p2||0:n.wins_p1||0,_=n.draws||0,$=d?n.goals_p1||0:n.goals_p2||0,L=d?n.goals_p2||0:n.goals_p1||0,r=d?n.gc_used_p1||0:n.gc_used_p2||0,f=d?n.gc_used_p2||0:n.gc_used_p1||0,I=n.matches_total||0,M=(C,D,q,O=jt,te=Ct)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${O}">${D}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${C}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${te}">${q}</div>
    </div>`,B=fi();B.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${I===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${M("Victoires",o,g)}
        ${M("Nuls",_,_,Ei,Ei)}
        ${M("Défaites",g,o)}
        ${M("Buts marqués",$,L)}
        ${M("Buts encaissés",L,$,Ct,jt)}
        ${M("GC utilisés ⚡",r,f,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${I} match${I>1?"s":""} joué${I>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${gi()}`,document.body.appendChild(B),B.querySelector("#stats-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",C=>{C.target===B&&B.remove()})}function fi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function gi(){return`
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
        background:${jt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Ki({player1Id:e,player2Id:t,score1:i,score2:a,gc1:c,gc2:l}){const[d,s]=[e,t].sort(),p=e!==d,n=p?a:i,o=p?i:a,g=p?l:c,_=p?c:l,$=n>o?1:0,L=o>n?1:0,r=n===o?1:0,{data:f}=await A.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single();f?await A.from("friend_match_stats").update({wins_p1:f.wins_p1+$,wins_p2:f.wins_p2+L,draws:f.draws+r,goals_p1:f.goals_p1+n,goals_p2:f.goals_p2+o,gc_used_p1:f.gc_used_p1+g,gc_used_p2:f.gc_used_p2+_,matches_total:f.matches_total+1}).eq("player1_id",d).eq("player2_id",s):await A.from("friend_match_stats").insert({player1_id:d,player2_id:s,wins_p1:$,wins_p2:L,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:g,gc_used_p2:_,matches_total:1})}const Cn="2026.07.01-1425";async function Ti(e,{state:t,navigate:i,toast:a}){var l,d;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Cn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",p=>{p.preventDefault(),i(s.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>i("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.classList.add("tapped"),setTimeout(()=>s.classList.remove("tapped"),200);const p=s.dataset.action;if(p==="match-ai"){Dn(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}if(p==="mini-league"){i("mini-league");return}if(p==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var C,D,q,O,te,ue;const s=((C=window.visualViewport)==null?void 0:C.height)||window.innerHeight,p=((D=document.querySelector(".top-nav"))==null?void 0:D.offsetHeight)||56,n=((q=document.querySelector(".bottom-nav"))==null?void 0:q.offsetHeight)||60,o=((O=e.querySelector(".hero-compact"))==null?void 0:O.offsetHeight)||52,g=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const _=((ue=(te=e.querySelector("#logout-btn"))==null?void 0:te.closest("div"))==null?void 0:ue.offsetHeight)||44,$=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((re,P)=>{var ie;return re+(((ie=document.getElementById(P))==null?void 0:ie.offsetHeight)||0)},0),L=14*5,r=s-p-n-o-_-$-L,f=Math.max(80,Math.round(r*.28)),I=Math.max(160,Math.round(r*.72)),M=Math.floor((I-10)/2);g&&(g.style.minHeight=g.style.maxHeight=f+"px"),e.querySelectorAll(".play-grid .play-card").forEach(re=>{re.style.minHeight=re.style.height=M+"px"});const B=Math.round(M*.55);e.querySelectorAll(".play-card .play-icon").forEach(re=>{re.style.height=B+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await A.auth.signOut(),window.location.reload()}),Wi(t,a),Bn(t,a,i),Yi(t,a,i))}async function Yi(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:l}=await A.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(l!=null&&l.length)){a.innerHTML="";return}const d=l.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let s={};if(d.length){const{data:p}=await A.from("users").select("id, pseudo, club_name").in("id",d);(p||[]).forEach(n=>{s[n.id]=n.club_name||n.pseudo})}a.innerHTML=l.map(p=>{const n=p.home_id===c?p.away_id:p.home_id,o=s[n]||"Adversaire",g=p.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${g?"🏆 Mini League":p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${p.id}" data-mini="${g?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(p.dataset.mini==="1"){const{data:o}=await A.from("mini_league_matches").select("id, league_id").eq("match_id",p.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await Hi(async()=>{const{resumePvpMatch:g}=await Promise.resolve().then(()=>Do);return{resumePvpMatch:g}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{qn(async()=>{await Fn(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Yi(e,t,i)})})})}async function Fn(e,t,i){const{data:a}=await A.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===i,l=c?0:3,d=c?3:0,s=a.game_state||{};s.p1Score=l,s.p2Score=d,s.phase="finished",s.forfeit=!0,await A.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:l,away_score:d,game_state:s}).eq("id",e)}function qn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Bn(e,t,i){var s,p,n,o;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await A.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const l=((s=c.inviter)==null?void 0:s.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",d=c.inviter_id;a.innerHTML=`
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
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:d,friendName:l})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await A.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Wi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:c}=await A.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){i.innerHTML="";return}const l=a.length,d=a.slice(0,2).map(p=>{var n;return((n=p.requester)==null?void 0:n.pseudo)||"?"}).join(", "),s=l>2?` +${l-2}`:"";i.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Vi(e,t,()=>Wi(e,t))})}function Dn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Ve={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ke(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ai=["ATT","MIL","DEF","GK"];function Ji(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let c=a+1;c<i;c++){const l=e[a],d=e[c];if(!l||!d)continue;const s=l._col!=null&&d._col!=null&&l._col===d._col,p=l._col!=null&&d._col!=null&&Math.abs(l._col-d._col)===1,n=Ai.indexOf(l._line||l.job),o=Ai.indexOf(d._line||d.job),g=Math.abs(n-o)===1;if(!((l._line||l.job)===(d._line||d.job)&&p||s&&g))continue;const L=l.country_code&&d.country_code&&l.country_code===d.country_code,r=l.club_id&&d.club_id&&l.club_id===d.club_id;L&&r?t+=2:(L||r)&&(t+=1)}return t}function Bt(e,t={}){const i=e.reduce((l,d)=>{const s=d._line||d.job;return l+(Number(s==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),a=Ji(e);let c=i+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Dt(e,t={}){const i=e.reduce((l,d)=>{const s=d._line||d.job;let p=0;return s==="GK"?p=Number(d.note_g)||0:s==="MIL"?p=Number(d.note_m)||0:p=Number(d.note_d)||0,l+p+(d.boost||0)},0),a=Ji(e);let c=i+a;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Gt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Xi(e,t,i="easy"){const a=e.filter(d=>!d.used);if(!a.length)return[];const c=[...a].sort((d,s)=>{const p=t==="attack"?ke(d,"ATT"):d._line==="GK"?ke(d,"GK"):ke(d,"DEF");return(t==="attack"?ke(s,"ATT"):s._line==="GK"?ke(s,"GK"):ke(s,"DEF"))-p});let l=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function Gn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Zi={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function mi(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const c=xi(i),l=Number(i[t])||0;if(l<=0)return 0;const d=i.note_min??1,s=i.note_max??10,n=(e.current_note??c)-c;return Math.min(s,Math.max(d,l+n))}function xi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Xt(e,t){!e||!t||await Promise.all([zi(e,"win"),zi(t,"loss")])}async function zi(e,t){const{data:i}=await A.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(c=>{var l,d;return((l=c.player)==null?void 0:l.rarity)==="pepite"||((d=c.player)==null?void 0:d.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const l=Zi[c.player.rarity],d=t==="win"?l.win:l.loss,s=c.player.note_min??1,p=c.player.note_max??10,n=xi(c.player),o=c.current_note??n,g=Math.min(p,Math.max(s,o+d));return A.from("cards").update({current_note:g}).eq("id",c.id)}))}const Pn=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:Zi,currentSecondaryNote:mi,getBaseMainNote:xi,updateEvolutiveCards:Xt},Symbol.toStringTag,{value:"Module"})),Qi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Lt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Pt=["GK","DEF","MIL","ATT"],Nn=["Tous","GK","DEF","MIL","ATT"],Rn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Si(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function On(e){return e.length?e.reduce((t,i)=>Si(i)>Si(t)?i:t,e[0]):e[0]}function en(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const yi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function tn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ft(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ni(e,t=""){var _,$;const i=e.player;if(!i)return"";const a=i.job||"ATT",c=Lt[a],l=Qi[i.rarity]||"#ccc",d=i.rarity==="pepite"||i.rarity==="papyte",s=d&&e.current_note!=null?e.current_note:Ft(i,a),p=i.job2?d?mi(e,en(i.job2)):Ft(i,i.job2):null,n=i.job2?Lt[i.job2]:null,o=tn(i),g=yi[i.country_code]||i.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${p!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${n}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${p}</text>
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
        ${(_=i.clubs)!=null&&_.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${((($=i.clubs)==null?void 0:$.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ii(e){const t=e.job||"ATT",i=Ft(e,t),a=yi[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Hn(e,t){const{state:i,navigate:a,toast:c,openModal:l,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await A.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(s||[]).filter(W=>W.card_type==="player"&&W.player),o=(s||[]).filter(W=>W.card_type==="game_changer"),g=(s||[]).filter(W=>W.card_type==="formation"),{data:_}=await A.from("gc_definitions").select("name,gc_type,color,effect,image_url"),$={};(_||[]).forEach(W=>{$[W.name]=W});const L=Object.keys(ui),r=Object.keys(Ve),f={};n.forEach(W=>{const X=W.player.id;f[X]=(f[X]||0)+1}),new Set(Object.keys(f).map(W=>String(W)));const I=new Set(g.map(W=>W.formation)),M=new Set(o.map(W=>W.gc_type));let B="player",C="Tous",D="",q=!1;function O(){return[...n].sort((W,X)=>{const N=Pt.indexOf(W.player.job),R=Pt.indexOf(X.player.job);return N!==R?N-R:(W.player.surname_encoded||"").localeCompare(X.player.surname_encoded||"")})}function te(){return[...p||[]].sort((W,X)=>{const N=Pt.indexOf(W.job),R=Pt.indexOf(X.job);return N!==R?N-R:(W.surname_encoded||"").localeCompare(X.surname_encoded||"")})}function ue(){return O().filter(W=>{const X=W.player,N=C==="Tous"||X.job===C,R=!D||`${X.firstname} ${X.surname_encoded}`.toLowerCase().includes(D);return N&&R})}function re(){return te().filter(W=>{const X=C==="Tous"||W.job===C,N=!D||`${W.firstname} ${W.surname_encoded}`.toLowerCase().includes(D);return X&&N})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="player"?"var(--green)":"transparent"};
        color:${B==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="formation"?"var(--green)":"transparent"};
        color:${B==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="gc"?"var(--green)":"transparent"};
        color:${B==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function P(){const W=document.getElementById("col-filters");W&&(B==="player"?(W.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${D}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Nn.map(X=>`
            <button class="filter-btn" data-job="${X}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${X===C?"var(--green)":"var(--gray-200)"};
                background:${X===C?"var(--green)":"#fff"};
                color:${X===C?"#fff":"var(--gray-600)"}">
              ${X}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--gray-200)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",X=>{D=X.target.value.toLowerCase(),ie()}),e.querySelectorAll(".filter-btn").forEach(X=>{X.addEventListener("click",()=>{C=X.dataset.job,P(),ie()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,P(),ie()})):(W.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--gray-200)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,P(),ie()})))}function ie(){const W=document.getElementById("col-grid");W&&(B==="player"?Te(W):B==="formation"?ve(W):he(W))}function le(W,X,N,R,Z){const pe=document.getElementById("col-grid"),de=document.getElementById("col-big");if(!pe||!de)return;var je=0;function Ie(){const Pe=window.innerWidth>=768,Oe=document.getElementById("col-big"),Ce=document.getElementById("col-grid");Pe&&Oe&&(Oe.style.minHeight="420px",Oe.style.flex="1 1 auto"),Pe&&Ce&&(Ce.style.height=Math.round(310*.76+16)+"px",Ce.style.flexShrink="0",Ce.style.overflowX="auto",Ce.style.overflowY="hidden",Ce.style.alignItems="center",Ce.style.padding="8px 16px"),de.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+X(W[je])+"</div>";var Le=de.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Le&&Le.addEventListener("click",function(){R(W[je])}),requestAnimationFrame(function(){var Fe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Fe||!de)){var Ue=de.clientHeight-8,Je=de.clientWidth-24,j=Fe.offsetHeight,b=Fe.offsetWidth;if(j>0&&b>0&&Ue>40){var k=Pe?2.2:1,E=Math.min(Ue/j,Je/b,k);Fe.style.transform="scale("+E.toFixed(3)+")",Fe.style.transformOrigin="top center"}}}),pe.innerHTML=W.map(function(Fe,Ue){var Je=Ue===je,j="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Je?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ue+'" style="'+j+'">'+N(Fe,Je)+"</div>"}).join(""),pe.querySelectorAll(".col-mini-item").forEach(function(Fe){Fe.addEventListener("click",function(){je=Number(Fe.dataset.idx),Ie(),Fe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ie()}function U(W){var X=window.innerWidth>=768?.76:.54,N;if(!W||W._fake){var R=W?W.player:null;if(!R)return"";N=Ii(R)}else N=ni(W,"");return'<div style="display:inline-block;zoom:'+X+';pointer-events:none;line-height:0">'+N+"</div>"}function ae(W,X,N){X=X||100,N=N||140;var R=qt[W]||{},Z={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},pe=Math.max(3,Math.round(X*.06)),de=Object.entries(R).map(function(Ie){var Pe=Ie[0],Oe=Ie[1],Ce=Pe.replace(/\d+$/,""),Le=Z[Ce]||"#888",Fe=Math.round(Oe.x*X),Ue=Math.round(Oe.y*N);return'<circle cx="'+Fe+'" cy="'+Ue+'" r="'+pe+'" fill="'+Le+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),je=Math.max(1,Math.round(X/50));return'<svg viewBox="0 0 '+X+" "+N+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+X+'" height="'+N+'" fill="#1A6B3C"/><rect x="'+Math.round(X*.2)+'" y="'+Math.round(N*.02)+'" width="'+Math.round(X*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+je+'"/><line x1="0" y1="'+Math.round(N*.5)+'" x2="'+X+'" y2="'+Math.round(N*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+je+'"/><ellipse cx="'+Math.round(X*.5)+'" cy="'+Math.round(N*.5)+'" rx="'+Math.round(X*.18)+'" ry="'+Math.round(N*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+je+'"/><rect x="'+Math.round(X*.2)+'" y="'+Math.round(N*.82)+'" width="'+Math.round(X*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+je+'"/>'+de+"</svg>"}function fe(W,X,N){var R=N>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+N+"</div>":"",Z=X?'data-form-id="'+X.id+'"':"",pe=W.length>7?14:W.length>5?16:19,de=!!X;return"<div "+Z+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(de?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(de?"":"filter:grayscale(1);opacity:0.5")+'">'+R+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(de?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+pe+"px;font-weight:900;color:"+(de?"#1A6B3C":"#aaa")+';line-height:1">'+W+'</div></div><div style="flex:1;overflow:hidden;background:'+(de?"#1A6B3C":"#ccc")+'">'+ae(W,140,220)+"</div></div>"}function ye(W,X){var N=window.innerWidth>=768?.76:.54,R=140,Z=305,pe=Math.round(Z*.22),de=Z-pe,je=W.length>7?10:13,Ie=ae(W,R,de),Pe=X?"1.5px solid #2a7a40":"1px solid #ddd",Oe=X?"":"filter:grayscale(1);opacity:0.45;",Ce=X?"#1A6B3C":"#bbb",Le="#fff";return'<div style="display:inline-block;zoom:'+N+';line-height:0;pointer-events:none"><div style="width:'+R+"px;height:"+Z+"px;border-radius:6px;border:"+Pe+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Oe+'"><div style="height:'+pe+"px;background:"+Ce+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+je+"px;font-weight:900;color:"+Le+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(R-4)+'px">'+W+'</span></div><div style="height:'+de+'px;overflow:hidden;flex-shrink:0">'+Ie+"</div></div></div>"}function Te(W){if(q){const X=re();if(!X.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const N=X.map(R=>n.find(Z=>Z.player.id===R.id)||{_fake:!0,player:R,id:"fake-"+R.id});le(N,R=>R._fake?Ii(R.player):ni(R,""),R=>R._fake?U({player:R.player,id:"x",_fake:!0}):U(R),R=>{R._fake||Li(R,n,f,t)})}else{const X=ue();if(!X.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const N={};X.forEach(Z=>{const pe=Z.player.id;N[pe]||(N[pe]=[]),N[pe].push(Z)});const R=Object.values(N).map(Z=>On(Z));le(R,Z=>{const pe=f[Z.player.id]||1,de=pe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${pe}</div>`:"",Ie=n.filter(Pe=>Pe.player.id===Z.player.id&&Pe.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ni(Z,de+Ie)},Z=>U(Z),Z=>Li(Z,n,f,t))}}function ve(W){const X=q?L:[...I];if(!X.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const N=X.map(R=>({formation:R,card:g.find(Z=>Z.formation===R)||null,owned:I.has(R)}));le(N,({formation:R,card:Z,owned:pe})=>fe(R,pe?Z:null,pe?g.filter(de=>de.formation===R).length:0),({formation:R,owned:Z})=>ye(R,Z),({card:R,owned:Z})=>{Z&&R&&Vn(R,g,t,l)})}function he(W){const X=Object.keys($),N=q?X.length?X:r:[...M];if(!N.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const R=N.map(Z=>({type:Z,gc:Ve[Z]||{icon:"⚡",desc:""},def:$[Z]||null,owned:M.has(Z),card:o.find(pe=>pe.gc_type===Z)||null}));le(R,({type:Z,gc:pe,def:de,owned:je,card:Ie})=>{const Pe=je?o.filter(k=>k.gc_type===Z).length:0,Oe=Pe>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Pe}</div>`:"",Ce=(de==null?void 0:de.gc_type)==="ultra_game_changer",Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Fe={purple:"#b06ce0",light_blue:"#00d4ef"},Ue=Le[de==null?void 0:de.color]||Le.purple,Je=Fe[de==null?void 0:de.color]||Fe.purple,j=(de==null?void 0:de.effect)||pe.desc||"",b=de!=null&&de.image_url?`/manager-wars/icons/${de.image_url}`:null;return je&&Ie?`<div data-gc-id="${Ie.id}" data-gc-type="${Z}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Je};background:${Ue};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Je}66;cursor:pointer">
          ${Oe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Z.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Z}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ce?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${pe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${j.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Z}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${pe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Z,gc:pe,def:de,owned:je})=>{const Ie=window.innerWidth>=768?.76:.54,Pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Oe={purple:"#9b59b6",light_blue:"#00bcd4"},Ce=Pe[de==null?void 0:de.color]||Pe.purple,Le=Oe[de==null?void 0:de.color]||Oe.purple,Fe=de!=null&&de.image_url?`/manager-wars/icons/${de.image_url}`:null;return je?`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ce};border:1px solid ${Le};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Z}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Fe?`<img src="${Fe}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${pe.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((de==null?void 0:de.effect)||pe.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${pe.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Z}</span></div></div>`},({type:Z,owned:pe,def:de})=>{pe&&Un(Z,de,l)})}e.querySelectorAll(".col-tab-btn").forEach(W=>{W.addEventListener("click",()=>{B=W.dataset.tab,C="Tous",D="",q=!1,e.querySelectorAll(".col-tab-btn").forEach(X=>{const N=X.dataset.tab===B;X.style.borderBottomColor=N?"var(--green)":"transparent",X.style.color=N?"var(--green)":"var(--gray-600)"}),P(),ie()})}),P(),ie()}function Un(e,t,i){const a=Ve[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[t==null?void 0:t.color]||l.purple,p=d[t==null?void 0:t.color]||d.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||a.desc,g=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${p};
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Nt=1e3;function Vn(e,t,i,a){var L,r,f;const{state:c,toast:l,closeModal:d,navigate:s,refreshProfile:p}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function g(){const I=qt[n]||{},M=ui[n]||[],B=290,C=360,D=20;function q(te){const ue=I[te];return ue?{x:ue.x*B,y:ue.y*C}:null}let O=`<svg width="${B}" height="${C}" viewBox="0 0 ${B} ${C}" xmlns="http://www.w3.org/2000/svg">`;for(const[te,ue]of M){const re=q(te),P=q(ue);!re||!P||(O+=`<line x1="${re.x}" y1="${re.y}" x2="${P.x}" y2="${P.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const te of Object.keys(I)){const ue=q(te);if(!ue)continue;const re=te.replace(/\d+/,""),P=o[re]||"#555";O+=`<circle cx="${ue.x}" cy="${ue.y}" r="${D}" fill="${P}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,O+=`<text x="${ue.x}" y="${ue.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return O+="</svg>",O}const _=t.filter(I=>I.formation===n);_.length;const $=!e.is_for_sale;a(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Nt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(L=document.getElementById("direct-sell-form-btn"))==null||L.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Nt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const I=_.find(B=>!B.is_for_sale)||_[0];if(!I){l("Aucune carte à vendre","error");return}await A.from("market_listings").delete().eq("card_id",I.id),await A.from("transfer_history").delete().eq("card_id",I.id);const{error:M}=await A.from("cards").delete().eq("id",I.id);if(M){l(M.message,"error");return}await A.from("users").update({credits:(c.profile.credits||0)+Nt}).eq("id",c.profile.id),await p(),l(`+${Nt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),s("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const I=parseInt(document.getElementById("sell-price-form").value);if(!I||I<1){l("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:I}).eq("id",e.id),await A.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:I}),l("Carte mise en vente sur le marché !","success"),d(),s("collection")}),(f=document.getElementById("cancel-sell-form-btn"))==null||f.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),d(),s("collection")})}async function Li(e,t,i,a){var fe,ye,Te,ve,he,W,X;const{state:c,toast:l,openModal:d,closeModal:s,navigate:p,refreshProfile:n}=a,o=e.player,g=t.filter(N=>N.player.id===o.id),_=g.length,$=Math.max(Number(o.note_g)||0,Number(o.note_d)||0,Number(o.note_m)||0,Number(o.note_a)||0),L=o.rarity||"normal",{data:r}=await A.from("sell_price_configs").select("*").eq("rarity",L).lte("note_min",$).gte("note_max",$).order("note_min",{ascending:!1}).limit(1),f=((fe=r==null?void 0:r[0])==null?void 0:fe.price)??Rn[L]??1e3,I=o.rarity!=="legende",M=tn(o),B=(o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:Ft(o,o.job),C=o.rarity==="pepite"||o.rarity==="papyte",D=o.job2?C?mi(e,en(o.job2)):Ft(o,o.job2):null,q=Lt[o.job]||"#1A6B3C",O=o.job2?Lt[o.job2]:null,te=Qi[o.rarity]||"#ccc",ue=yi[o.country_code]||o.country_code||"",re=g.map(N=>N.id);let P={};if(re.length){const{data:N}=await A.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(N||[]).forEach(R=>{P[R.card_id]||(P[R.card_id]=[]),P[R.card_id].push(R)})}const ie=N=>{const R=N.transferred_at?new Date(N.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Z=N.source==="booster"?"Booster":N.price?N.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${N.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${N.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${N.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Z}</div>
        <div style="font-size:11px;color:var(--gray-600)">${R}</div>
      </div>
    </div>`},le=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${_>1?`(${_})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${g.map((N,R)=>{const Z=P[N.id]||[],pe=N.is_for_sale,de=Z.length?Z[Z.length-1]:null,Ie=(o.rarity==="pepite"||o.rarity==="papyte")&&N.current_note!=null?` (☆${N.current_note})`:"";return`
            <div data-card-id="${N.id}" data-card-idx="${R}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${pe?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${N.id}" ${pe?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${R+1}${Ie}${pe?" 🏷️ En vente":""}</div>
                  ${de?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${de.club_name} · ${de.source==="booster"?"Booster":de.price?de.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${R}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${Z.length?`${Z.length} club${Z.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${R}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${Z.map(ie).join("")}
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${f.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${I?`
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
    </div>`:"";d(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${te};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${q}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${q}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>
            </svg>
            ${D!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${O}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${D}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${ue}</div>
            ${(ye=o.clubs)!=null&&ye.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Te=o.clubs)==null?void 0:Te.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${te}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${te}18;border-left:3px solid ${te};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${te};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([N,R])=>{const Z=Lt[N],pe=Number(R)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${Z}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${pe}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${N}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${_}</div>
        </div>
      </div>
    </div>
    ${le}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ve=document.getElementById("close-detail"))==null||ve.addEventListener("click",s);let U=new Set;const ae=()=>{const N=U.size,R=document.getElementById("sell-action-panel");R&&(R.style.display=N>0?"block":"none",document.getElementById("sell-selected-count").textContent=N,document.getElementById("sell-direct-total").textContent=(N*f).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(N=>{N.addEventListener("change",()=>{const R=N.dataset.id;N.checked?U.add(R):U.delete(R);const Z=N.closest(".exemplaire-row");Z&&(Z.style.borderColor=N.checked?"#1A6B3C":"#eee"),ae()})}),document.querySelectorAll(".exemplaire-row").forEach(N=>{N.addEventListener("click",R=>{if(R.target.closest("button")||R.target.tagName==="INPUT")return;const Z=N.querySelector(".expl-check");Z&&!Z.disabled&&(Z.checked=!Z.checked,Z.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(N=>{N.addEventListener("click",R=>{R.stopPropagation();const Z=document.querySelector(`.expl-hist[data-hist="${N.dataset.idx}"]`);Z&&(Z.style.display=Z.style.display==="none"?"flex":"none")})}),(he=document.getElementById("direct-sell-btn"))==null||he.addEventListener("click",async()=>{const N=[...U];if(!N.length)return;const R=N.length*f;if(!confirm(`Vendre ${N.length} carte${N.length>1?"s":""} ${o.surname_encoded} pour ${R.toLocaleString("fr")} crédits ? Action irréversible.`))return;await A.from("market_listings").delete().in("card_id",N),await A.from("transfer_history").delete().in("card_id",N);const{error:Z}=await A.from("cards").delete().in("id",N);if(Z){l(Z.message,"error");return}await A.from("users").update({credits:(c.profile.credits||0)+R}).eq("id",c.profile.id),await n();const pe=document.getElementById("nav-credits");pe&&(pe.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l(`+${R.toLocaleString("fr")} crédits ! ${N.length} carte${N.length>1?"s":""} vendue${N.length>1?"s":""}.`,"success"),s(),p("collection")}),(W=document.getElementById("market-sell-btn"))==null||W.addEventListener("click",async()=>{var je;const N=[...U];if(!N.length){l("Sélectionne au moins un exemplaire","warning");return}const R=parseInt((je=document.getElementById("sell-market-price"))==null?void 0:je.value);if(!R||R<1){l("Prix invalide","error");return}const{error:Z}=await A.from("cards").update({is_for_sale:!0,sale_price:R}).in("id",N);if(Z){l(Z.message,"error");return}const pe=N.map(Ie=>({seller_id:c.profile.id,card_id:Ie,price:R,status:"active"})),{error:de}=await A.from("market_listings").insert(pe);de&&console.warn("[Market] insert listings:",de.message),l(`${N.length} carte${N.length>1?"s":""} mise${N.length>1?"s":""} en vente à ${R.toLocaleString("fr")} cr. chacune !`,"success"),s(),p("collection")}),(X=document.getElementById("cancel-sell-btn"))==null||X.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),p("collection")})}const Yt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},bt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Zt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function nn(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function on(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Kn(e,t=44,i=58){var $;const a=e?Zt(e):null,c=e?on(e):null,l=nn(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",s=bt[d]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,o=Math.round(i*.19),g=Math.round(i*.25),_=i-o-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${s};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${_}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:($=e==null?void 0:e.clubs)!=null&&$.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ai(e,t){const{state:i,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!d)return;const{data:s,error:p}=await A.from("decks").insert({owner_id:i.profile.id,name:d}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),Mi(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>Mi(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",d.dataset.name);if(!s||s===d.dataset.name)return;const{error:p}=await A.from("decks").update({name:s}).eq("id",d.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),ai(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await A.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:s}=await A.from("decks").delete().eq("id",d.dataset.delete);if(s){c(s.message,"error");return}c("Deck supprimé.","success"),ai(e,t)})})}async function Mi(e,t,i){const{state:a,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("decks").select("*").eq("id",e).single(),{data:d}=await A.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),s=(d||[]).filter($=>$.card_type==="player"&&$.player),p=(d||[]).filter($=>$.card_type==="formation"),n=p.map($=>$.formation).filter(Boolean),{data:o}=await A.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let g=l.formation||"4-4-2";n.length>0&&!n.includes(g)&&(g=n[0]);const _={deckId:e,name:l.name,formation:g,formationCardId:l.formation_card_id,slots:{},subs:[],playerCards:s,formationCards:p,availableFormations:n};(o||[]).forEach($=>{$.is_starter?_.slots[$.position]=$.card_id:_.subs.includes($.card_id)||_.subs.push($.card_id)}),kt(t,_,i)}function kt(e,t,i){var p;const{navigate:a}=i;Yt[t.formation];const c=ji(t.formation),l=c.filter(n=>t.slots[n]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Yt),s=t.subs.map(n=>t.playerCards.find(o=>o.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${d.map(n=>`<option value="${n}" ${n===t.formation?"selected":""}>${n}</option>`).join("")}
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
        ${s.map(n=>{const o=n.player;return`<div style="position:relative;flex-shrink:0">
            ${Kn(o,44,58)}
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
  </div>`,Yn(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const o=ji(t.formation),g={};o.forEach(_=>{t.slots[_]&&(g[_]=t.slots[_])}),t.slots=g,kt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Xn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(o=>o!==n.dataset.removeSub),kt(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{Jn(t,e,i)})}function Yn(e,t,i,a){const c=e.querySelector("#deck-field");if(!c)return;const l=qt[t.formation]||{},d=Oi(t.formation)||[],s={};for(const I of i){const M=t.slots[I],B=M?t.playerCards.find(C=>C.id===M):null;s[I]=B?B.player:null}const p=300,n=300,o=48,g=64,_=13,$=16,L=38;function r(I){const M=l[I];return M?{x:M.x*p,y:M.y*n}:null}let f="";for(const[I,M]of d){const B=r(I),C=r(M);if(!B||!C)continue;const D=s[I]?{...s[I],club_id:s[I].club_id,country_code:s[I].country_code,rarity:s[I].rarity}:null,q=s[M]?{...s[M],club_id:s[M].club_id,country_code:s[M].country_code,rarity:s[M].rarity}:null,O=at(D,q);O==="#ff3333"||O==="#cc2222"?f+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}" stroke="${O}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(f+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}" stroke="${O}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,f+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}" stroke="${O}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const I of i){const M=r(I);if(!M)continue;const B=s[I],C=I.replace(/\d+/,""),D=bt[C]||"#555",q=(M.x-o/2).toFixed(1),O=(M.y-g/2).toFixed(1),te={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[B==null?void 0:B.rarity]||"#aaa";if(B){const ue=Zt(B),re=on(B),P=nn(B.country_code),ie=Number(C==="GK"?B.note_g:C==="DEF"?B.note_d:C==="MIL"?B.note_m:B.note_a)||0,le=g-_-$;f+=`<defs><clipPath id="dcp-${I}"><rect x="${q}" y="${(M.y-g/2+_).toFixed(1)}" width="${o}" height="${le}"/></clipPath></defs>`,f+=`<rect x="${q}" y="${O}" width="${o}" height="${g}" rx="5" fill="${D}"/>`,ue&&(f+=`<image href="${ue}" x="${q}" y="${(M.y-g/2+_).toFixed(1)}" width="${o}" height="${le}" clip-path="url(#dcp-${I})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${q}" y="${O}" width="${o}" height="${_}" fill="rgba(255,255,255,0.93)"/>`,f+=`<text x="${M.x.toFixed(1)}" y="${(M.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(B.surname_encoded||"").slice(0,9)}</text>`;const U=(M.y+g/2-$).toFixed(1);f+=`<rect x="${q}" y="${U}" width="${o}" height="${$}" fill="rgba(255,255,255,0.93)"/>`,P&&(f+=`<image href="${P}" x="${(M.x-21).toFixed(1)}" y="${(M.y+g/2-$+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),f+=`<text x="${M.x.toFixed(1)}" y="${(M.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ie}</text>`,re&&(f+=`<image href="${re}" x="${(M.x+o/2-14).toFixed(1)}" y="${(M.y+g/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),f+=`<rect x="${q}" y="${O}" width="${o}" height="${g}" rx="5" fill="none" stroke="${te}" stroke-width="2"/>`}else f+=`<rect x="${q}" y="${O}" width="${o}" height="${g}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,f+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,f+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${C}</text>`;f+=`<rect x="${q}" y="${O}" width="${o}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${I}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-L} ${-L} ${p+L*2} ${n+L*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${f}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(I=>{I.addEventListener("click",()=>Wn(I.dataset.pos,t,e,a))})}function Wn(e,t,i,a){var _,$,L;const{openModal:c,closeModal:l}=a,d=e.replace(/\d+/,""),s=t.slots[e],p=s?t.playerCards.find(r=>r.id===s):null;(_=p==null?void 0:p.player)==null||_.id;const n=new Set;Object.entries(t.slots).forEach(([r,f])=>{var M;if(r===e||!f)return;const I=t.playerCards.find(B=>B.id===f);(M=I==null?void 0:I.player)!=null&&M.id&&n.add(I.player.id)}),t.subs.forEach(r=>{var I;const f=t.playerCards.find(M=>M.id===r);(I=f==null?void 0:f.player)!=null&&I.id&&n.add(f.player.id)});const o=new Set,g=t.playerCards.filter(r=>{const f=r.player;return!(f.job===d||f.job2===d)||n.has(f.id)||o.has(f.id)?!1:(o.add(f.id),!0)});g.sort((r,f)=>{const I=d==="GK"?r.player.note_g:d==="DEF"?r.player.note_d:d==="MIL"?r.player.note_m:r.player.note_a;return(d==="GK"?f.player.note_g:d==="DEF"?f.player.note_d:d==="MIL"?f.player.note_m:f.player.note_a)-I}),c(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?g.map(r=>{var C,D;const f=r.player,I=d==="GK"?f.note_g:d==="DEF"?f.note_d:d==="MIL"?f.note_m:f.note_a,M=Zt(f),B={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[f.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${bt[d]}">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${bt[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${f.firstname} ${f.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${f.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${f.country_code}">
              ${(C=f.clubs)!=null&&C.logo_url?`<img src="${f.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((D=f.clubs)==null?void 0:D.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${f.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${bt[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${B};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),($=document.getElementById("close-selector"))==null||$.addEventListener("click",l),(L=document.getElementById("remove-player"))==null||L.addEventListener("click",()=>{delete t.slots[e],l(),kt(i,t,a)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,l(),kt(i,t,a)})})}function Jn(e,t,i){var p;const{openModal:a,closeModal:c}=i,l=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var g;const o=e.playerCards.find(_=>_.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&l.add(o.player.id)}),e.subs.forEach(n=>{var g;const o=e.playerCards.find(_=>_.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&l.add(o.player.id)});const d=new Set,s=e.playerCards.filter(n=>{var o,g,_;return l.has((o=n.player)==null?void 0:o.id)||d.has((g=n.player)==null?void 0:g.id)?!1:(d.add((_=n.player)==null?void 0:_.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(n=>{var $;const o=n.player,g=Zt(o),_=o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${bt[o.job]}">
            ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${(($=o.clubs)==null?void 0:$.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${bt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${_}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),c(),kt(t,e,i)})})}async function Xn(e,t){const{state:i,toast:a,navigate:c}=t,l=e.formationCards.find(p=>p.formation===e.formation),d=(l==null?void 0:l.id)||e.formationCardId;await A.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await A.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([p,n],o)=>{s.push({deck_id:e.deckId,card_id:n,position:p,is_starter:!0,slot_order:o})}),e.subs.forEach((p,n)=>{s.push({deck_id:e.deckId,card_id:p,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),s.length>0){const{error:p}=await A.from("deck_cards").insert(s);if(p){a(p.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function ji(e){const t=Yt[e]||Yt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function rn(){const{data:e}=await A.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await A.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function Zn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const an=()=>Object.keys(qt),Qn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],si={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function eo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Ci={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},to={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},io={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Fi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function no(e){var o,g;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Ci[i],c=to[t.rarity]||"#ccc",l=Fi(t,i),d=t.job2?Fi(t,t.job2):null,s=t.job2?Ci[t.job2]:null,p=eo(t),n=io[t.country_code]||t.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=t.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function sn(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const i=((c=Object.entries(t).sort((l,d)=>d[1]-l[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function oo(e,{state:t,navigate:i,toast:a}){var d;const c=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await rn()).map(sn)}catch(s){console.warn("Erreur chargement boosters DB, fallback hardcodé",s)}l.length||(l=Qn.map(s=>({...s,rates:[],isPub:s.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const p=l.find(n=>n.id===s.dataset.booster);if(p){s.style.opacity="0.5",s.style.pointerEvents="none";try{await ro(p,{state:t,toast:a,navigate:i,container:e})}catch(n){a(n.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",p=>{p.stopPropagation();const n=l.find(o=>o.id===s.dataset.boosterId);co(n)})})}async function ro(e,{state:t,toast:i,navigate:a,container:c}){var o;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await fo()}catch(g){i(g.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await A.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((l||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set((l||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let p=[];if((o=e.rates)!=null&&o.length)p=await di(t.profile,e);else{const g=e.type||"player";g==="player"?p=await dn(t.profile,e.cardCount,e.cost):g==="game_changer"?p=await ln(t.profile,e.cardCount,e.cost):g==="formation"?p=await cn(t.profile,e.cost):p=await di(t.profile,e)}p.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=d.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=s.has(g.formation))});const{data:n}=await A.from("users").select("*").eq("id",t.profile.id).single();n&&(t.profile=n),pn(p,e,a)}function ao(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function so(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function di(e,t){if(t.cost>0){const{error:s}=await A.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(s)throw s}const{data:i}=await A.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((i||[]).filter(s=>s.card_type==="player").map(s=>s.player_id)),c=new Set((i||[]).filter(s=>s.card_type==="formation").map(s=>s.formation)),l=new Set,d=[];for(let s=0;s<(t.cardCount||5);s++){const p=Zn(t.rates);if(p){if(p.card_type==="player"){const n=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,o=p.rarity?n(p.rarity):null;let g=A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o&&(g=g.eq("rarity",o));const{data:_}=await g;let $=_||[];if((p.note_min||p.note_max)&&($=$.filter(M=>{const B=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!p.note_min||B>=p.note_min)&&(!p.note_max||B<=p.note_max)})),$.length||(p.note_min||p.note_max?($=_||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):$=_||[]),!$.length)continue;let L=$.filter(M=>!l.has(M.id));L.length||(L=$);const r=L[Math.floor(Math.random()*L.length)];l.add(r.id);const f=a.has(r.id),{data:I}=await A.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();I&&(d.push({...I,player:r,isDuplicate:f}),A.rpc("record_transfer",{p_card_id:I.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:n}=await A.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),o=n!=null&&n.length?n:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],_=o[Math.floor(Math.random()*o.length)].name,{data:$}=await A.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:_}).select().single();$&&d.push($)}else if(p.card_type==="formation"){const n=an(),o=n[Math.floor(Math.random()*n.length)],g=c.has(o),{data:_}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:o}).select();_!=null&&_[0]&&d.push({..._[0],isDuplicate:g})}}}return d}async function dn(e,t,i){if(i>0){const{error:n}=await A.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:a}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(n=>n.job==="GK"),l=a.filter(n=>n.job!=="GK"),d=!e.first_booster_opened&&c.length>0,s=[];for(let n=0;n<t;n++){const o=n===0&&d?c:n===0?l:a,g=ao(),_=so(o,g);_&&s.push(_)}d&&await A.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await A.from("cards").insert(s.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(p||[]).forEach((n,o)=>{A.rpc("record_transfer",{p_card_id:n.id,p_player_id:s[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((n,o)=>({...p[o],player:n}))}async function ln(e,t,i){const{error:a}=await A.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:c}=await A.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(si).map(o=>({name:o,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const o=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:s,error:p}=await A.from("cards").insert(d).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(s||[]).map(o=>{const g=c==null?void 0:c.find(_=>_.name===o.gc_type||_.id===o.gc_definition_id);return{...o,_gcDef:g||null}})}async function cn(e,t){const{error:i}=await A.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await A.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(o=>o.formation)),l=an(),d=l[Math.floor(Math.random()*l.length)],s=c.has(d),{data:p,error:n}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(p||[]).map(o=>({...o,isDuplicate:s}))}function pn(e,t,i,a=null){var ie,le;if(!e||e.length===0){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",U.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(U),(ie=U.querySelector("#anim-close-err"))==null||ie.addEventListener("click",()=>U.remove());return}e=[...e].sort((U,ae)=>{const fe=U.player?mt(U.player):-1;return(ae.player?mt(ae.player):-1)-fe});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const d=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let p=!1;const n=U=>U.touches&&U.touches[0]?U.touches[0].clientX:U.clientX;function o(U){l||(p=!0,s.style.opacity="1",g(U))}function g(U){if(!p||l)return;const ae=d.getBoundingClientRect(),fe=n(U)-ae.left,ye=Math.max(0,Math.min(1,fe/ae.width));s.style.width=ye*ae.width+"px",ye>=.82&&$()}function _(){l||(p=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{l||(s.style.transition="")},220))}function $(){var ae;if(l)return;l=!0,p=!1,s.style.width="100%",s.style.opacity="1",(ae=document.getElementById("cut-flash"))==null||ae.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const U=document.getElementById("cut-hint");U&&(U.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",I(0)},620)}d.addEventListener("pointerdown",o),window.addEventListener("pointermove",g),window.addEventListener("pointerup",_),d.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",_);let L=0,r=!1;const f=new Set;function I(U){L=U,document.getElementById("reveal-phase").style.display="flex",M(),B(U,0),te()}function M(){const U=document.getElementById("card-dots");U&&(U.innerHTML=e.map((ae,fe)=>`<div class="card-dot" data-i="${fe}" style="width:8px;height:8px;border-radius:50%;background:${fe===L?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),U.querySelectorAll(".card-dot").forEach(ae=>ae.addEventListener("click",()=>D(parseInt(ae.dataset.i)))))}function B(U,ae){var R;const fe=e[U],ye=document.getElementById("card-counter"),Te=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${U+1} / ${e.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=U===e.length-1?"flex":"none");const he=fe.card_type==="player"&&((R=fe.player)==null?void 0:R.rarity)==="legende",W=!f.has(U);f.add(U);let X=0;if(fe.card_type==="player"&&fe.player){const Z=fe.player,pe=Z.job||"ATT";X=Number(pe==="GK"?Z.note_g:pe==="DEF"?Z.note_d:pe==="MIL"?Z.note_m:Z.note_a)||0}const N=Z=>{Te.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${he?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${lo(fe)}</div>
          ${fe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const pe=document.getElementById("current-card-wrap");ae!==0?(pe.style.transition="none",pe.style.transform=`translateX(${ae>0?100:-100}%)`,requestAnimationFrame(()=>{pe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",pe.style.transform="translateX(0)"})):pe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Z||he?re():P(),M()};W&&X>6&&fe.card_type==="player"&&fe.player?C(fe,()=>N(!0)):N(!1)}function C(U,ae){var X;r=!0;const fe=U.player,ye=`https://flagsapi.com/${fe.country_code}/flat/64.png`,Te=(X=fe.clubs)==null?void 0:X.logo_url,ve=document.getElementById("walkout-overlay"),he=document.getElementById("walkout-stage");if(!ve||!he){r=!1,ae();return}ve.style.display="flex";const W=()=>{const N=he.firstElementChild;N&&(N.classList.remove("wo-in"),N.classList.add("wo-out"))};he.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(W,2e3),setTimeout(()=>{var N;he.innerHTML=Te?`<img class="wo-in" src="${Te}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((N=fe.clubs)==null?void 0:N.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(W,4450),setTimeout(()=>{ve.style.display="none",he.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),ae()},4900)}function D(U){if(r||U<0||U>=e.length||U===L)return;const ae=U>L?1:-1;L=U,B(U,ae)}function q(){D(L+1)}function O(){D(L-1)}function te(){const U=document.getElementById("card-viewport");if(!U||U._swipeBound)return;U._swipeBound=!0;let ae=0,fe=0,ye=0,Te=!1;const ve=R=>R.touches?R.touches[0].clientX:R.clientX,he=R=>R.touches?R.touches[0].clientY:R.clientY,W=R=>{Te=!0,ae=ve(R),fe=he(R),ye=0},X=R=>{if(!Te)return;ye=ve(R)-ae;const Z=he(R)-fe;if(Math.abs(ye)<Math.abs(Z))return;const pe=document.getElementById("current-card-wrap");pe&&(pe.style.transition="none",pe.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},N=()=>{if(!Te)return;Te=!1;const R=document.getElementById("current-card-wrap"),Z=55;ye<=-Z&&L<e.length-1?q():ye>=Z&&L>0?O():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};U.addEventListener("pointerdown",W),U.addEventListener("pointermove",X),U.addEventListener("pointerup",N),U.addEventListener("pointercancel",N),U.addEventListener("touchstart",W,{passive:!0}),U.addEventListener("touchmove",X,{passive:!0}),U.addEventListener("touchend",N),U.addEventListener("click",R=>{if(Math.abs(ye)>8)return;const Z=U.getBoundingClientRect();R.clientX-Z.left>Z.width/2?q():O()})}let ue=null;function re(){const U=document.getElementById("fireworks-canvas");if(!U)return;U.width=window.innerWidth,U.height=window.innerHeight;const ae=U.getContext("2d"),fe=[];function ye(){const ve=Math.random()*U.width,he=Math.random()*U.height*.6,W=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],X=W[Math.floor(Math.random()*W.length)];for(let N=0;N<60;N++){const R=Math.PI*2/60*N,Z=2+Math.random()*5;fe.push({x:ve,y:he,vx:Math.cos(R)*Z,vy:Math.sin(R)*Z,alpha:1,color:X,size:2+Math.random()*3})}}ye(),ue=setInterval(ye,600);function Te(){if(document.getElementById("fireworks-canvas")){ae.clearRect(0,0,U.width,U.height);for(let ve=fe.length-1;ve>=0;ve--){const he=fe[ve];if(he.x+=he.vx,he.y+=he.vy+.08,he.vy*=.98,he.alpha-=.018,he.alpha<=0){fe.splice(ve,1);continue}ae.globalAlpha=he.alpha,ae.fillStyle=he.color,ae.beginPath(),ae.arc(he.x,he.y,he.size,0,Math.PI*2),ae.fill()}ae.globalAlpha=1,(ue!==null||fe.length>0)&&requestAnimationFrame(Te)}}Te()}function P(){ue!==null&&(clearInterval(ue),ue=null);const U=document.getElementById("fireworks-canvas");U&&U.getContext("2d").clearRect(0,0,U.width,U.height)}if(a){const U=document.getElementById("reveal-btns");U&&(U.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(le=document.getElementById("reveal-next"))==null||le.addEventListener("click",()=>{P(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{P(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{P(),c.remove(),i("boosters")})}function lo(e){var t,i;if(e.card_type==="player"&&e.player)return no(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[a==null?void 0:a.color]||l.purple,p=d[a==null?void 0:a.color]||d.purple,n=(a==null?void 0:a.name)||e.gc_type||"Game Changer",o=(a==null?void 0:a.effect)||((t=si[e.gc_type])==null?void 0:t.desc)||"",g=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,_=((i=si[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${n.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${o.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function co(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}po()}function po(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const uo="simulation",un="VOTRE_ZONE_ID";function fo(){switch(uo){case"propellerads":return go();case"adsense":return mo();default:return hi()}}function hi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=i),l&&(l.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function go(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(hi());window.propeller.push({zone_id:un,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function mo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(hi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:un,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function xo(e,{state:t,navigate:i,toast:a,refreshProfile:c}){var _,$;const{data:l}=await A.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let d=Array.isArray((_=t.profile)==null?void 0:_.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await A.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const r=(await rn()).find(f=>(f.name||"").toLowerCase().includes("new player"));r&&(s=sn(r))}catch(L){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',L)}const p=d.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await A.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function g(){var M;if(n>=p||!d.length){await A.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const L=d[0],{data:r}=await A.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let f=[];try{if(L.type==="formation")f=await cn(t.profile,0);else if(L.type==="game_changer")f=await ln(t.profile,L.count||3,0);else if(s&&((M=s.rates)!=null&&M.length)){const B={...s,cost:0,cardCount:L.count||s.cardCount||5};f=await di(t.profile,B),L.guaranteeGK&&!t.profile.first_booster_opened&&(f.some(D=>D.player&&D.player.job==="GK")||await yo(t.profile,f),await A.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else f=await dn(t.profile,L.count||5,0)}catch(B){a(B.message||"Erreur ouverture booster","error");return}d.shift(),n++,await o();const I=L.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:L.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${p})`,img:(s==null?void 0:s.img)||"/manager-wars/icons/booster-players.png"};pn(f,I,i,()=>{g()})}($=document.getElementById("onboard-start"))==null||$.addEventListener("click",()=>g())}async function yo(e,t){try{const{data:i}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],c=t.findIndex(d=>d.player);if(c===-1)return;const l=t[c];await A.from("cards").update({player_id:a.id}).eq("id",l.id),t[c]={...l,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Et={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Tt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function vt(e,t,i,a,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function Ge(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function li(e,t){var a,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Qt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function xt(e,t){const i=Et[t]||Et["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const s=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===d).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:d})),p=lt(s.length);s.forEach((n,o)=>{n._col=p[o]}),a[d]=s}return a}const l=[...e];for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let n=0;n<i[d];n++){let o=l.findIndex(g=>g.job===d);if(o===-1&&(o=l.findIndex(g=>g.job2===d)),o===-1&&(o=0),l[o]){const g={...l[o],_line:d};s.push(g),l.splice(o,1)}}const p=lt(s.length);s.forEach((n,o)=>{n._col=p[o]}),a[d]=s}return a}function Qe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ke(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ei(e,t,i){const c=new Set,l=t.filter(o=>{const g=o.gc_type||o.id;return c.has(g)?!1:(c.add(g),!0)});let d=[];function s(o,g){const _=o._gcDef,$={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},L={purple:"#9b59b6",light_blue:"#00bcd4"},r=$[_==null?void 0:_.color]||$.purple,f=L[_==null?void 0:_.color]||L.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${g?"#FFD700":f};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${g?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${g?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((_==null?void 0:_.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(_==null?void 0:_.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${_!=null&&_.image_url?`<img src="/manager-wars/icons/${_.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((_==null?void 0:_.effect)||"").slice(0,50)}</span>
      </div>
      ${g?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function n(){var g,_,$;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=d.length>0;e.innerHTML=`
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
        ${l.map(L=>{const r=d.find(f=>f.gc_type===L.gc_type);return s(L,!!r)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${o?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${o?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${o?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${o?"pointer":"default"};box-shadow:${o?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(L=>{L.addEventListener("click",()=>{const r=L.dataset.id,f=l.find(M=>M.id===r);if(!f)return;const I=d.findIndex(M=>M.gc_type===f.gc_type);I>-1?d.splice(I,1):d.length<3&&d.push(f),n()})}),(g=e.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>{o&&p(d)}),(_=e.querySelector("#gc-no-gc"))==null||_.addEventListener("click",()=>p([])),($=e.querySelector("#gc-reset"))==null||$.addEventListener("click",()=>{d.length&&(d=[],n())})}n()}function ho(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function bo(e,t,i){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){vt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const d=l.map(o=>o.id),{data:s}=await A.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let p=0;function n(){var M,B,C,D,q;const o=l[p],g=(s||[]).filter(O=>O.deck_id===o.id),_=g.filter(O=>{var te;return O.is_starter&&((te=O.card)==null?void 0:te.player)}).map(O=>li(O.card,O.position)),$=g.find(O=>{var te;return((te=O.card)==null?void 0:te.card_type)==="formation"}),L=o.formation||((M=$==null?void 0:$.card)==null?void 0:M.formation)||"4-4-2",r=_.length>=11?xt(_,L):null,f=_.length>=11;Qe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${ho(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${o.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${L} · ${_.length}/11 ${o.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===l.length-1?"0.1":"0.3"});color:${p===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${r?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ut(r,L,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${_.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((O,te)=>`<div style="width:7px;height:7px;border-radius:50%;background:${te===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${f?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${f?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${f?"pointer":"default"}">
          ${f?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const te=e.querySelector(".deck-preview-wrap svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(B=document.getElementById("prev-deck"))==null||B.addEventListener("click",()=>{p>0&&(p--,n())}),(C=document.getElementById("next-deck"))==null||C.addEventListener("click",()=>{p<l.length-1&&(p++,n())}),(D=document.getElementById("validate-deck"))==null||D.addEventListener("click",()=>{if(!f)return;const O=t.state.params||{};t.navigate("match",{...O,matchMode:O.matchMode||i,deckId:o.id})}),(q=document.getElementById("cancel-deck-select"))==null||q.addEventListener("click",()=>{Ke(e),c("home")});const I=document.getElementById("deck-swipe-zone");if(I){let O=0,te=0;I.addEventListener("touchstart",ue=>{O=ue.touches[0].clientX,te=ue.touches[0].clientY},{passive:!0}),I.addEventListener("touchend",ue=>{const re=ue.changedTouches[0].clientX-O,P=ue.changedTouches[0].clientY-te;Math.abs(re)<40||Math.abs(re)<Math.abs(P)||(re<0&&p<l.length-1?(p++,n()):re>0&&p>0&&(p--,n()))},{passive:!0})}}n()}function fn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function We(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ge(e),c=fn(e),l=e._line||e.job||"MIL",d=Tt[l]||"#555",s={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(ke(e,l))||0)+(e.boost||0),n=gn(e==null?void 0:e.country_code),o=Math.round(i*.19),g=Math.round(i*.25),_=i-Math.round(i*.19)-Math.round(i*.25),$=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${s};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${$}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${_}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Wt(e==null?void 0:e.country_code)?`<img src="${Wt(e.country_code)}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">${n}</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function nt(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((l,d)=>{if(c+=We(l,40,52),d<a.length-1){const s=at(l,a[d+1]);c+=`<div style="width:7px;height:3px;background:${s==="#ff3333"||s==="#cc2222"?"rgba(255,255,255,0.12)":s};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Wt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function gn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function pt(e,t,i,a,c=310,l=310,d=[]){var B;const s=qt[t]||{},p=Oi(t)||ui[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const C of o)(e[C]||[]).forEach((q,O)=>{n[`${C}${O+1}`]=q});function g(C){const D=s[C];return D?{x:D.x*c,y:D.y*l}:null}let _="";for(const[C,D]of p){const q=g(C),O=g(D);if(!q||!O)continue;const te=n[C],ue=n[D],re=at(te,ue);re==="#00ff88"||re==="#FFD700"?(_+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,_+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):_+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const $=48,L=64,r=13,f=16,I={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[C,D]of Object.entries(n)){const q=g(C);if(!q||!D)continue;const O=C.replace(/[0-9]/g,""),te=Tt[O]||"#555",ue=d.includes(D.cardId),re=i==="attack"&&(["MIL","ATT"].includes(O)||ue)&&!D.used||i==="defense"&&["GK","DEF","MIL"].includes(O)&&!D.used,P=a.includes(D.cardId);let ie;i==="attack"?ie=ue?Math.max(1,Number(D.note_a)||0):O==="MIL"?Number(D.note_m)||0:Number(D.note_a)||0:i==="defense"?ie=O==="GK"?Number(D.note_g)||0:O==="MIL"?Number(D.note_m)||0:Number(D.note_d)||0:ie=Number(O==="GK"?D.note_g:O==="DEF"?D.note_d:O==="MIL"?D.note_m:D.note_a)||0,ie=ie+(D.boost||0);const le=(q.x-$/2).toFixed(1),U=(q.y-L/2).toFixed(1),ae=I[D==null?void 0:D.rarity]||I.normal;if(D.used){const X=typeof import.meta<"u"&&"/manager-wars/"||"/",R=`${typeof window<"u"&&((B=window.location)==null?void 0:B.origin)||""}${X}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");_+=`<rect x="${le}" y="${U}" width="${$}" height="${L}" rx="5" fill="#161616"/>`,_+=`<image href="${R}" xlink:href="${R}" x="${le}" y="${U}" width="${$}" height="${L}" preserveAspectRatio="xMidYMid slice"/>`,_+=`<rect x="${le}" y="${U}" width="${$}" height="${L}" rx="5" fill="none" stroke="${ae}" stroke-width="2" opacity="0.7"/>`,_+=`<rect x="${le}" y="${U}" width="${$}" height="${L}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${D.cardId}" data-role="${O}" style="cursor:pointer"/>`;continue}const fe=P?.45:1,ye=P?"#FFD700":ae,Te=P?3:(D==null?void 0:D.rarity)==="legende"||(D==null?void 0:D.rarity)==="légende"||(D==null?void 0:D.rarity)==="pepite"||(D==null?void 0:D.rarity)==="pépite"?2.5:2,ve=L-r-f;_+=`<defs><clipPath id="cp-${C}"><rect x="${le}" y="${(q.y-L/2+r).toFixed(1)}" width="${$}" height="${ve}"/></clipPath></defs>`,_+=`<rect x="${le}" y="${U}" width="${$}" height="${L}" rx="5" fill="${te}" opacity="${fe}"/>`;const he=Ge(D);he&&(_+=`<image href="${he}" xlink:href="${he}" x="${le}" y="${(q.y-L/2+r).toFixed(1)}" width="${$}" height="${ve}" clip-path="url(#cp-${C})" preserveAspectRatio="xMidYMin slice"/>`),_+=`<rect x="${le}" y="${U}" width="${$}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,_+=`<text x="${q.x.toFixed(1)}" y="${(q.y-L/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(D.name||"").slice(0,9)}</text>`;const W=(q.y+L/2-f).toFixed(1);_+=`<rect x="${le}" y="${W}" width="${$}" height="${f}" fill="rgba(255,255,255,0.92)"/>`;{const X=Wt(D.country_code);X?_+=`<image href="${X}" xlink:href="${X}" x="${(q.x-20).toFixed(1)}" y="${(q.y+L/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:_+=`<text x="${(q.x-13).toFixed(1)}" y="${(q.y+L/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${gn(D.country_code)}</text>`,_+=`<text x="${q.x.toFixed(1)}" y="${(q.y+L/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ie}</text>`;const N=fn(D);N?_+=`<image href="${N}" xlink:href="${N}" x="${(q.x+$/2-14).toFixed(1)}" y="${(q.y+L/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:D.clubName&&(_+=`<text x="${(q.x+14).toFixed(1)}" y="${(q.y+L/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(D.clubName||"").slice(0,3).toUpperCase()}</text>`),D.boost&&(_+=`<rect x="${(q.x+$/2-12).toFixed(1)}" y="${(q.y-L/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,_+=`<text x="${(q.x+$/2-5).toFixed(1)}" y="${(q.y-L/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${D.boost}</text>`)}_+=`<rect x="${le}" y="${U}" width="${$}" height="${L}" rx="5" fill="${P?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${Te}" opacity="${fe}"/>`,re&&(_+=`<rect x="${le}" y="${U}" width="${$}" height="${L}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${P?"selected":""}" data-card-id="${D.cardId}" data-role="${O}" style="cursor:pointer"/>`)}const M=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-M} ${-M} ${c+M*2} ${l+M*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${_}
  </svg>`}function ut(e,t,i,a,c=300,l=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${pt(e,t,i,a,c,l,d)}
  </div>`}function dt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ti(e,t,i,a){var D;const{state:c,navigate:l,toast:d}=t;Qe(e);const s=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return bo(e,t,i);const p=s.deckId;let n,o,g,_;try{const q=await Promise.all([A.from("decks").select("formation,name").eq("id",p).single(),A.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);n=q[0].data,g=q[0].error,o=q[1].data,_=q[1].error}catch(q){console.error("[Match] Exception chargement deck:",q),vt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(g||_){console.error("[Match] Erreur Supabase:",g||_),vt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const $=(o||[]).filter(q=>{var O;return q.is_starter&&((O=q.card)==null?void 0:O.player)}).map(q=>li(q.card,q.position)),L=(o||[]).filter(q=>{var O;return!q.is_starter&&((O=q.card)==null?void 0:O.player)}).map(q=>li(q.card,q.position));if($.length<11){vt(e,"⚠️",`Deck incomplet (${$.length}/11).`,"Compléter",()=>l("decks"));return}const r=(o||[]).find(q=>{var O;return((O=q.card)==null?void 0:O.card_type)==="formation"}),f=(n==null?void 0:n.formation)||((D=r==null?void 0:r.card)==null?void 0:D.formation)||"4-4-2",{data:I,error:M}=await A.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:B}=await A.from("gc_definitions").select("*").eq("is_active",!0),C=(I||[]).map(q=>({...q,_gcDef:(B==null?void 0:B.find(O=>O.name===q.gc_type||O.id===q.gc_definition_id))||null}));a({deckId:p,formation:f,starters:$,subsRaw:L,gcCardsEnriched:C,gcDefs:B||[]})}async function vo(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),d=c;await ti(e,t,c,async({deckId:s,formation:p,starters:n,subsRaw:o,gcCardsEnriched:g,gcDefs:_})=>{try{const $=xt(n,p),L=await wo(p,l),r=async f=>{try{const{data:I,error:M}=await A.from("matches").insert({home_id:i.profile.id,away_id:null,mode:d,home_deck_id:s,status:"in_progress"}).select().single();if(M){console.error("[MatchIA] Erreur création match:",M),vt(e,"⚠️","Impossible de créer le match ("+M.message+").","Retour",()=>t.navigate("home"));return}const B={gcDefs:_||[],matchId:I==null?void 0:I.id,mode:d,difficulty:l,formation:p,homeTeam:$,aiTeam:L,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:f,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};$o(e,B,t)}catch(I){console.error("[MatchIA] Exception launchMatch:",I),vt(e,"⚠️","Erreur au lancement du match : "+I.message,"Retour",()=>t.navigate("home"))}};if(!g.length){r([]);return}ei(e,g,r)}catch($){console.error("[MatchIA] Exception setup:",$),vt(e,"⚠️","Erreur de préparation du match : "+$.message,"Retour",()=>t.navigate("home"))}})}async function wo(e,t){var d,s;const{data:i}=await A.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return _o(e);const a=Et[e]||Et["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...i];for(const p of["GK","DEF","MIL","ATT"]){const n=l.filter(L=>L.job===p),o=l.filter(L=>L.job!==p),g=[...n,...o],_=[];for(let L=0;L<a[p];L++){const r=g[L]||l[L];r&&_.push({cardId:"ai-"+r.id+"-"+L,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((d=r.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((s=r.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:p})}const $=lt(_.length);_.forEach((L,r)=>{L._col=$[r]}),c[p]=_}return c}function _o(e){const t=Et[e]||Et["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const d=[];for(let p=0;p<t[l];p++){const n=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?n:2,note_d:l==="DEF"?n:2,note_m:l==="MIL"?n:2,note_a:l==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const s=lt(d.length);d.forEach((p,n)=>{p._col=s[n]}),i[l]=d}return i}function $o(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${pt(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>ko(e,t,i),5e3)}function ko(e,t,i){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(r){return r.reduce((f,I)=>f+ke(I,"MIL"),0)}function d(r){let f=0;for(let I=0;I<r.length-1;I++){const M=at(r[I],r[I+1]);M==="#00ff88"?f+=2:M==="#FFD700"&&(f+=1)}return f}const s=l(a)+d(a),p=l(c)+d(c),n=s>=p;function o(r,f,I,M){return`<div id="duel-row-${M}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((B,C)=>{const D=C<r.length-1?at(B,r[C+1]):null,q=!D||D==="#ff3333"||D==="#cc2222",O=D==="#00ff88"?"+2":D==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${M}" data-idx="${C}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${We({...B,note:ke(B,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${C<r.length-1?`<div class="duel-link duel-link-${M}" data-idx="${C}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${q?"rgba(255,255,255,0.12)":D};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${q?"none":`0 0 8px ${D}`}">
            ${O?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${D}">${O}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${M}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${l(r)} + ${d(r)} liens = <b style="color:#fff">${l(r)+d(r)}</b>
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
  </div>`;const g=()=>{const r=(f,I)=>e.querySelectorAll(f).forEach((M,B)=>{setTimeout(()=>{M.style.opacity="1",M.style.transform="translateY(0) scale(1)"},I+B*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((f,I)=>{setTimeout(()=>{f.style.opacity="1"},I*70)}),900),setTimeout(()=>{const f=e.querySelector("#vs-label");f&&(f.style.opacity="1",f.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{_("score-home",s,800),_("score-ai",p,800)},1500)};function _(r,f,I){const M=document.getElementById(r);if(!M)return;const B=performance.now(),C=D=>{const q=Math.min(1,(D-B)/I);M.textContent=Math.round(f*(1-Math.pow(1-q,3))),q<1?requestAnimationFrame(C):M.textContent=f};requestAnimationFrame(C)}requestAnimationFrame(g),t.attacker=n?"home":"ai";const $=n?Qt():null;n&&(t.boostCard={value:$}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(r=>({name:r.name,note:ke(r,"MIL"),portrait:Ge(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:ke(r,"MIL"),portrait:Ge(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:s,aiTotal:p,text:`Duel milieu : ${t.clubName} ${s} – ${p} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const L=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ci(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),f=document.getElementById("score-ai"),I=document.getElementById(n?"duel-row-home":"duel-row-ai"),M=document.getElementById(n?"duel-row-ai":"duel-row-home"),B=n?r:f,C=n?f:r;B&&(B.style.fontSize="80px",B.style.color=n?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),C&&(C.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var q;const D=document.getElementById("duel-shock");if(D){const O=(q=M||I)==null?void 0:q.getBoundingClientRect(),te=e.querySelector(".match-screen").getBoundingClientRect();O&&(D.style.top=O.top-te.top+O.height/2+"px"),D.style.animation="shockwave .5s ease-out forwards"}M&&(M.style.transformOrigin="center",M.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var q;const D=document.getElementById("duel-finale");D&&(D.innerHTML=`
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
          </button>`,D.style.transition="opacity .45s ease",D.style.opacity="1",D.style.pointerEvents="auto",(q=document.getElementById("start-match-btn"))==null||q.addEventListener("click",L))},600)},700)},2800)}function Eo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var B,C,D,q,O,te,ue,re;const a=t.selected.map(P=>P.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter(P=>!c.includes(P.cardId)),s=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(ie=>!ie.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),o=t.phase==="attack"&&p&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const g=t.phase==="ai-attack"||t.phase==="ai-defense",_=t.phase==="attack",$=t.phase==="defense",L=t.phase==="finished",r=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),f=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${nt((ie.players||[]).map(le=>({...le,used:!1})),"#ff6b6b",ie.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${nt((ie.players||[]).map(le=>({...le,used:!1})),"#00ff88",ie.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Eo(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,ie=(W,X,N)=>{var Ue,Je;const R=(t.gcDefs||[]).find(j=>j.name===W.gc_type),Z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[R==null?void 0:R.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",pe={purple:"#b06ce0",light_blue:"#00d4ef"}[R==null?void 0:R.color]||"#b06ce0",de=(R==null?void 0:R.name)||W.gc_type,je=(R==null?void 0:R.effect)||((Ue=Ve[W.gc_type])==null?void 0:Ue.desc)||"",Ie=R!=null&&R.image_url?`/manager-wars/icons/${R.image_url}`:null,Pe=((Je=Ve[W.gc_type])==null?void 0:Je.icon)||"⚡",Oe=Math.round(N*.22),Ce=Math.round(N*.22),Le=N-Oe-Ce,Fe=de.length>12?7:9;return`<div class="gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}"
          style="box-sizing:border-box;width:${X}px;height:${N}px;border-radius:10px;border:2px solid ${pe};background:${Z};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Oe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Fe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${X-6}px">${de}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Le}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ie?`<img src="${Ie}" style="max-width:${X-10}px;max-height:${Le-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Le*.55)}px">${Pe}</span>`}
          </div>
          <div style="height:${Ce}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${je.slice(0,38)}</span>
          </div>
        </div>`},le=(W,X)=>{var N;return`<div id="boost-card"
          style="box-sizing:border-box;width:${W}px;height:${X}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(X*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(X*.2)}px">⚡</div>
            <div style="font-size:${Math.round(X*.09)}px;color:#000;font-weight:900">+${(N=t.boostCard)==null?void 0:N.value}</div>
          </div>`},U=(W,X)=>X?le(130,175):ie(W,130,175),ae=(W,X)=>X?le(68,95):ie(W,68,95),fe=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=L?`<button id="btn-results" style="${fe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:g?`<div style="${fe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:_?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:$?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${fe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Te=_||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map(W=>`<div class="sub-btn-col" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${We(W,76,100)}</div>`).join("")}
      </div>`,he=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ut(t.homeTeam,t.formation,t.phase,a,300,300,o)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${ve}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${he}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${Te}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map(W=>U(W,!1)).join("")}
            ${f?U(null,!0):""}
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
            ${r.map(W=>ae(W,!1)).join("")}
            ${f?ae(null,!0):""}
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
          <div>${ye}${Te}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var ie,le,U;if(P.type==="duel"){const ae=P.isGoal,fe=P.homeScored?"#FFD700":ae?"#ff6b6b":"rgba(255,255,255,0.3)",ye=P.homeScored?"⚽ BUT !":ae?"⚽ BUT IA !":(ie=P.homePlayers)!=null&&ie.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ae?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${fe};margin-bottom:4px">
                <div style="font-size:9px;color:${fe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(le=P.homePlayers)!=null&&le.length?`<div style="margin-bottom:3px">${nt(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(U=P.aiPlayers)!=null&&U.length?`<div style="opacity:0.7">${nt(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
              </div>`}return P.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${P.outPlayer?We({...P.outPlayer,used:!0,_line:P.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${P.inPlayer?We({...P.inPlayer,_line:P.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:P.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${P.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${P.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function I(){const P=e.querySelector(".match-screen");if(!P)return;const ie=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=ie+"px",P.style.minHeight=ie+"px",P.style.maxHeight=ie+"px",P.style.overflow="hidden";const le=e.querySelector("#mobile-action-bar"),U=e.querySelector("#mobile-play-area");le&&U&&(U.style.paddingBottom=le.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const ie=e.querySelector(".terrain-wrapper svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("viewBox","-26 -26 352 352"),ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,ie=30;const le=()=>document.getElementById("match-timer"),U=()=>{const ae=le();if(!ae)return;const fe=String(Math.floor(ie/60)).padStart(2,"0"),ye=String(ie%60).padStart(2,"0");ae.textContent=` ${fe}:${ye}`,ae.style.color=P?"#ff2222":"#ff9500",ae.style.fontWeight="900"};U(),t._timerInt=setInterval(()=>{if(ie--,ie<0)if(!P)P=!0,ie=15,U();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ae=document.createElement("div");ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ae.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ae),setTimeout(()=>{ae.remove(),Mt(e,t,i)},2500)}else U()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{Ke(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Mt(e,t,i))}),(C=document.getElementById("view-ai"))==null||C.addEventListener("click",()=>Fo(t,i)),(D=document.getElementById("toggle-history"))==null||D.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(q=document.getElementById("close-history"))==null||q.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(O=document.getElementById("btn-action"))==null||O.addEventListener("click",()=>{t.selected.length!==0&&(_?Ao(e,t,i):$&&zo(e,t,i))}),(te=document.getElementById("btn-results"))==null||te.addEventListener("click",()=>Mt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>To(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>oi(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Lo(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(ue=document.getElementById("boost-card"))==null||ue.addEventListener("click",()=>Co(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>oi(e,t,i,P.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>oi(e,t,i))}function To(e,t,i,a){const c=e.dataset.cardId,l=e.dataset.role,d=t.selected.findIndex(s=>s.cardId===c);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[l]||[]).find(p=>p.cardId===c);s&&t.selected.push({...s,_role:l,_line:l})}Ye(i,t,a)}function bi(e,t,i){e.matchId&&A.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ao(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),bi(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(s=>!s.used)),c=t.selected.map(d=>{const s=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d,p=a&&["GK","DEF"].includes(d._role);return{...s,_line:d._role,...p?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),l=Bt(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(d=>{const s=(t.homeTeam[d._role]||[]).find(p=>p.cardId===d.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>So(e,t,i),1200)}function zo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),bi(t,i,i.state.profile.id);const a=t.selected.map(s=>({...(t.homeTeam[s._role]||[]).find(n=>n.cardId===s.cardId)||s,_line:s._role})),c=Dt(a,t.modifiers.home);t.selected.forEach(s=>{const p=(t.homeTeam[s._role]||[]).find(n=>n.cardId===s.cardId);p&&(p.used=!0)});const l=Gt(t.pendingAttack.total,c.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:Ge(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),homePlayers:t.selected.map(s=>{const p=(t.homeTeam[s._role]||[]).find(n=>n.cardId===s.cardId)||s;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Ge(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(l.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),Jt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{$t(e,t,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,$t(e,t,i,"home-attack")}function ci(e,t,i){bi(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Xi(a,"attack",t.difficulty);if(!c.length){Ht(e,t,i);return}const l=Bt(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),p=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!p){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Ge(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Ye(e,t,i),Jt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{$t(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function So(e,t,i){var n,o;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Xi(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(g=>(t.aiTeam[g]||[]).filter(_=>!_.used)).length){t.homeScore++;const _={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map($=>({name:$.name,note:ke($,$._line||$.job),portrait:Ge($),job:$.job,country_code:$.country_code,rarity:$.rarity,clubName:$.clubName,clubLogo:$.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(_),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),Jt(_.homePlayers,t.homeScore,t.aiScore,!0,()=>{$t(e,t,i,"ai-attack")});return}const d=c.length>0?Dt(c,t.modifiers.ai).total:0;c.forEach(g=>{g.used=!0});const s=Gt(t.pendingAttack.total,d,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(g=>({name:g.name,note:g._line==="MIL"?g.note_m:g.note_a,portrait:Ge(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:c.map(g=>({name:g.name,note:g._line==="GK"?g.note_g:g._line==="MIL"?g.note_m:g.note_d,portrait:Ge(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(s.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(s.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),Jt(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{$t(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,$t(e,t,i,"ai-attack")}function $t(e,t,i,a){if(t.round++,mn(t)){Mt(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){Ht(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ht(e,t,i);return}setTimeout(()=>ci(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ht(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ci(e,t,i),800)}}function mn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!i}function Ht(e,t,i){mn(t)?Mt(e,t,i):(t.phase="attack",Ye(e,t,i))}function Io(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Ge(e),l=Ge(t),d=Tt[e.job]||"#555",s=Tt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let o=!1;const g=()=>{o||(o=!0,a.remove(),i())};a.addEventListener("click",g),setTimeout(g,2e3)}function zt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function oi(e,t,i,a=null,c=null){var $,L;if(t.phase!=="attack"){zt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){zt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([r,f])=>(f||[]).filter(I=>I.used).map(I=>({...I,_line:I._line||r}))),d=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!l.length){zt("Aucun joueur utilisé à remplacer");return}if(!d.length){zt("Aucun remplaçant disponible");return}let s=Math.max(0,l.findIndex(r=>r.cardId===c));const p=(($=l[s])==null?void 0:$._line)||((L=l[s])==null?void 0:L.job);let n=a?Math.max(0,d.findIndex(r=>r.cardId===a)):Math.max(0,d.findIndex(r=>r.job===p)),o=!1;const g=document.createElement("div");g.id="sub-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function _(){var D,q,O,te,ue,re;const r=l[s],f=d[n],I=Math.min(130,Math.round((window.innerWidth-90)/2)),M=Math.round(I*1.35),B=P=>`background:rgba(255,255,255,0.12);border:none;color:${P?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${P?"default":"pointer"};flex-shrink:0`;g.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${B(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${f?We({...f,used:!1,boost:0},I,M):"<div>—</div>"}</div>
        <button id="in-down" style="${B(n>=d.length-1)}" ${n>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${B(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${r?We({...r,used:!1,boost:0},I,M):"<div>—</div>"}</div>
        <button id="out-down" style="${B(s>=l.length-1)}" ${s>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(D=g.querySelector("#sub-close"))==null||D.addEventListener("click",()=>g.remove()),(q=g.querySelector("#out-up"))==null||q.addEventListener("click",()=>{s>0&&(s--,_())}),(O=g.querySelector("#out-down"))==null||O.addEventListener("click",()=>{s<l.length-1&&(s++,_())}),(te=g.querySelector("#in-up"))==null||te.addEventListener("click",()=>{n>0&&(n--,_())}),(ue=g.querySelector("#in-down"))==null||ue.addEventListener("click",()=>{n<d.length-1&&(n++,_())});const C=(P,ie,le,U)=>{const ae=g.querySelector("#"+P);if(!ae)return;let fe=0;ae.addEventListener("touchstart",ye=>{fe=ye.touches[0].clientY},{passive:!0}),ae.addEventListener("touchend",ye=>{const Te=ye.changedTouches[0].clientY-fe;if(Math.abs(Te)<30)return;const ve=ie();Te<0&&ve<U-1?(le(ve+1),_()):Te>0&&ve>0&&(le(ve-1),_())},{passive:!0})};C("in-panel",()=>n,P=>n=P,d.length),C("out-panel",()=>s,P=>s=P,l.length),(re=g.querySelector("#sub-confirm"))==null||re.addEventListener("click",P=>{if(P.preventDefault(),P.stopPropagation(),o)return;o=!0;const ie=l[s],le=d[n];if(!ie||!le)return;let U=null,ae=-1;for(const[ye,Te]of Object.entries(t.homeTeam)){const ve=(Te||[]).findIndex(he=>he.cardId===ie.cardId);if(ve!==-1){U=ye,ae=ve;break}}if(ae===-1||!U){zt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),g.remove();return}const fe={...le,_line:U,_col:ie._col||0,used:!1,boost:0};t.homeTeam[U].splice(ae,1,fe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(le.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ie.name,firstname:ie.firstname,note:ke(ie,U),portrait:Ge(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},inPlayer:{name:le.name,firstname:le.firstname,note:ke(le,U),portrait:Ge(le),job:le.job,country_code:le.country_code,rarity:le.rarity,clubName:le.clubName,clubLogo:le.clubLogo},text:`🔄 ${le.firstname} ${le.name} remplace ${ie.firstname} ${ie.name}`}),g.remove(),Io(ie,le,()=>Ye(e,t,i))})}document.body.appendChild(g),_()}function Lo(e,t,i,a,c){var L,r;const l=(a.gcDefs||[]).find(f=>f.name===t),d=Ve[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",n=(l==null?void 0:l.name)||t,o=(l==null?void 0:l.effect)||d.desc,g=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,_=d.icon||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${_}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild($),(L=$.querySelector("#gc-back"))==null||L.addEventListener("click",()=>$.remove()),(r=$.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{$.remove(),jo(e,t,i,a,c)})}function Rt(e,t,i,a,c,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function p(){var n,o;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(g=>{const _=g._line||g.job||"MIL",$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[_]||"#555",L=ke(g,_)+(g.boost||0),r=s.find(f=>f.cardId===g.cardId);return`<div class="gc-pick-item" data-cid="${g.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${$};overflow:hidden;cursor:pointer;flex-shrink:0;${g.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${L}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${_}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(n=d.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(g=>{g.addEventListener("click",()=>{const _=g.dataset.cid,$=e.find(r=>r.cardId===_);if(!$)return;const L=s.findIndex(r=>r.cardId===_);L>-1?s.splice(L,1):s.length<t&&s.push($),p()})}),(o=d.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{d.remove(),l(s)})}p(),document.body.appendChild(d)}const Mo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,c,l)=>{const d=Object.entries(a.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,p])=>p.filter(n=>!n.used).map(n=>({...n,_line:s})));return d.length?(Rt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,s=>{s.forEach(p=>{const n=(a.homeTeam[p._line]||[]).find(o=>o.cardId===p.cardId);n&&(n.boost=(n.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Ye(c,a,l)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(c,a,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},c,l,d)=>{const s=a==="home"?c.homeTeam:c.aiTeam,p=a==="ai"?"adverse":"allié",n=Object.entries(s).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,g])=>g.filter(_=>!_.used).map(_=>({..._,_line:o})));return n.length?(Rt(n,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,l,c,o=>{o.forEach(g=>{const $=((a==="home"?c.homeTeam:c.aiTeam)[g._line]||[]).find(L=>L.cardId===g.cardId);$&&($.boost=($.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${$.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Ye(l,c,d)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Ye(l,c,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,c,l)=>{const d=i==="home"?a.homeTeam:a.aiTeam,s=i==="ai"?"adverse":"allié",p=Object.entries(d).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(g=>!g.used).map(g=>({...g,_line:n})));return p.length?(Rt(p,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,c,a,n=>{n.forEach(o=>{const _=((i==="home"?a.homeTeam:a.aiTeam)[o._line]||[]).find($=>$.cardId===o.cardId);_&&(_.used=!0,a.log.push({text:`❌ ${_.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(c,a,l)}),!0):(a.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Ye(c,a,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,c)=>{const l=Object.entries(i.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,s])=>s.filter(p=>p.used).map(p=>({...p,_line:d})));return l.length?(Rt(l,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,d=>{d.forEach(s=>{const p=(i.homeTeam[s._line]||[]).find(n=>n.cardId===s.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Ye(a,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(a,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function jo(e,t,i,a,c){a.usedGc.push(e);const l=a.gcDefs||[],d=l.find(p=>p.name===t)||l.find(p=>{var n;return((n=p.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const p=Mo[d.effect_type];p?p(d.effect_params||{},a,i,c)||(s=!0):(c.toast(`Effet "${d.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(a.homeTeam).flatMap(([n,o])=>(o||[]).filter(g=>g.used).map(g=>({...g,_line:n})));p.length?(p[0].used=!1,a.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(n=>!n.used);if(p.length){const n=p.sort((o,g)=>ke(g,"ATT")-ke(o,"ATT"))[0];n.used=!0,a.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}A.from("cards").delete().eq("id",e).then(()=>{}),s&&Ye(i,a,c)}function Co(e,t,i){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Tt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ke(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[d]||[]).find(p=>p.cardId===l);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function Jt(e,t,i,a,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(n,o)=>`
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
  <div style="position:absolute;inset:0;pointer-events:none">${d}</div>
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Tt[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let s=!1;const p=()=>{s||(s=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",p),setTimeout(p,3500)}async function Mt(e,t,i){var o,g;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,d=c?"victoire":l?"nul":"defaite",s=Gn(t.mode,d);t.matchId&&await A.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(a.profile.credits||0)+s,matches_played:(a.profile.matches_played||0)+1};c?p.wins=(a.profile.wins||0)+1:l?p.draws=(a.profile.draws||0)+1:p.losses=(a.profile.losses||0)+1,await A.from("users").update(p).eq("id",a.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),Ke(e),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{n.remove(),Ke(e),i.navigate("match",{matchMode:t.mode})})}function Fo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${pt(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function xn(e,t){var i,a;try{const c=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(A.getChannels?A.getChannels():[]).forEach(d=>{const s=d.topic||"";(s.includes("matchmaking")||s.includes("pvp-match")||s.includes("friend-invite"))&&A.removeChannel(d)})}catch(l){console.warn("[Random] cleanup canaux:",l)}c&&await A.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ti(e,t,"random",({deckId:c,formation:l,starters:d,subsRaw:s,gcCardsEnriched:p,gcDefs:n})=>{const o=g=>qo(e,t,c,l,d,s,g,n||[]);if(!p.length){o([]);return}ei(e,p,o)})}async function qo(e,t,i,a,c,l,d=[],s=[]){var M;const{state:p,navigate:n,toast:o}=t;let g=!1,_=null;Qe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const $=async(B=!0)=>{g=!0,_&&(A.removeChannel(_),_=null),B&&await A.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(M=document.getElementById("mm-cancel"))==null||M.addEventListener("click",async()=>{try{await $(!0)}catch{}Ke(e),n("home")});const L=async(B,C,D)=>{if(g)return;g=!0,_&&(A.removeChannel(_),_=null);const q=document.getElementById("mm-status");q&&(q.textContent="Adversaire trouvé !"),await new Promise(O=>setTimeout(O,600)),e.isConnected&&yn(e,t,B,D,d,s)},{data:r,error:f}=await A.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:i});if(f||!(r!=null&&r.success)){o("Erreur de matchmaking","error"),Ke(e),n("home");return}if(r.matched){L(r.match_id,r.opponent_id,!1);return}const I=document.getElementById("mm-status");I&&(I.textContent="En attente d'un autre joueur..."),_=A.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},B=>{const C=B.new;C.status==="matched"&&C.match_id&&L(C.match_id,C.matched_with,!0)}).subscribe()}async function Bo(e,t,i){const{state:a,navigate:c,toast:l}=t;try{(A.getChannels?A.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&A.removeChannel(n)})}catch{}const{data:d}=await A.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!d){l("Match introuvable","error"),c("home");return}if(d.status==="finished"){l("Ce match est terminé","info"),c("home");return}const s=d.home_id===a.profile.id;yn(e,t,i,s,[],[])}async function yn(e,t,i,a,c=[],l=[]){const{state:d,navigate:s,toast:p}=t,n=a?"p1":"p2",o=a?"p2":"p1",g=(c||[]).map(j=>j.id),_=(c||[]).map(j=>({id:j.id,gc_type:j.gc_type,_gcDef:j._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:$}=await A.from("matches").select("*").eq("id",i).single();if(!$){p("Match introuvable","error"),s("home");return}async function L(){const[{data:j},{data:b},{data:k},{data:E}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:$.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:$.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",$.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",$.away_id).single()]),u=v=>({cardId:v.card_id,position:v.position,id:v.id,firstname:v.firstname,name:v.surname_encoded,country_code:v.country_code,club_id:v.club_id,job:v.job,job2:v.job2,note_g:Number(v.note_g)||0,note_d:Number(v.note_d)||0,note_m:Number(v.note_m)||0,note_a:Number(v.note_a)||0,rarity:v.rarity,skin:v.skin,hair:v.hair,hair_length:v.hair_length,clubName:v.club_encoded_name||null,clubLogo:v.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((j==null?void 0:j.starters)||[]).map(v=>u(v)),x=((b==null?void 0:b.starters)||[]).map(v=>u(v)),y=(j==null?void 0:j.formation)||"4-4-2",h=(b==null?void 0:b.formation)||"4-4-2";return{p1Team:xt(m,y),p2Team:xt(x,h),p1Subs:((j==null?void 0:j.subs)||[]).map(v=>u(v)),p2Subs:((b==null?void 0:b.subs)||[]).map(v=>u(v)),p1Formation:y,p2Formation:h,p1Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 1",p2Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?g:[],gc_p2:a?[]:g,gcCardsFull_p1:a?_:[],gcCardsFull_p2:a?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=$.game_state&&Object.keys($.game_state).length?$.game_state:null;if(!r)if(a){r=await L();const{data:j}=await A.from("matches").select("game_state").eq("id",i).single();!(j!=null&&j.game_state)||!Object.keys(j.game_state).length?await A.from("matches").update({game_state:r,turn_user_id:$.home_id}).eq("id",i):r=j.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let j=0;j<30&&!r;j++){await new Promise(k=>setTimeout(k,400));const{data:b}=await A.from("matches").select("game_state").eq("id",i).single();b!=null&&b.game_state&&Object.keys(b.game_state).length&&(r=b.game_state)}if(!r){p("Erreur de synchronisation","error"),s("home");return}r.gc_p2=g,r.gcCardsFull_p2=_,await A.from("matches").update({game_state:r}).eq("id",i)}let f=!1,I=null,M=!1;const B=new Set,C=new Set;function D(j){var v,w;try{A.removeChannel(q)}catch{}const b=r[n+"Score"]||0,k=r[o+"Score"]||0;let E,u;j.winner_id?(E=j.winner_id===d.profile.id,u=!1):j.forfeit?(E=b>k,u=!1):(u=b===k,E=b>k),(v=document.getElementById("pvp-end-overlay"))==null||v.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=u?"🤝":E?"🏆":"😞",y=u?"MATCH NUL":E?"VICTOIRE !":"DÉFAITE",h=u?"#fff":E?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${h}">${y}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${b} – ${k} ${r[o+"Name"]}</div>
      ${j.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${E?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(w=m.querySelector("#pvp-end-home"))==null||w.addEventListener("click",()=>{m.remove(),Ke(e),s("home")})}const q=A.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},j=>{const b=j.new;try{if(b.status==="finished"||b.forfeit){if(f)return;f=!0,I&&(clearInterval(I),I=null),b.game_state&&(r=b.game_state),D(b);return}if(b.game_state){const k=r;r=b.game_state;const E=r._lastGC;if(E&&E.seq&&!C.has(E.seq)&&(C.add(E.seq),E.by!==n)){ve(E.type,E.by,()=>U());return}const u=k[n+"Score"]||0,m=k[o+"Score"]||0,x=r[n+"Score"]||0,y=r[o+"Score"]||0,h=x>u,v=y>m;if((h||v)&&!B.has(r.round)){B.add(r.round);const w=[...r.log||[]].reverse().find(z=>z.isGoal),T=((w==null?void 0:w.homePlayers)||[]).map(z=>({name:z.name,note:z.note,portrait:z.portrait,job:z.job}));Te(T,x,y,h,()=>U());return}U()}}catch(k){console.error("[PvP] crash:",k)}}).subscribe();async function O(j){Object.assign(r,j),r.lastActionAt=new Date().toISOString();const{error:b}=await A.from("matches").update({game_state:r}).eq("id",i);b&&p("Erreur de synchronisation","error");try{U()}catch(k){console.error("[PvP] renderPvpScreen crash:",k)}}async function te(){if(f)return;f=!0,I&&(clearInterval(I),I=null);const j=a?$.away_id:$.home_id,b=a?"p2":"p1",k=a?"p1":"p2",E={...r,[b+"Score"]:3,[k+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:j,home_score:E.p1Score||0,away_score:E.p2Score||0,game_state:E}).eq("id",i)}catch{}try{A.removeChannel(q)}catch{}setTimeout(()=>{Ke(e),s("home")},800)}const ue={BOOST_STAT:({value:j=1,count:b=1,roles:k=[]},E,u)=>{const m=E[n+"Team"],x=Object.entries(m).filter(([y])=>!k.length||k.includes(y)).flatMap(([y,h])=>h.filter(v=>!v.used).map(v=>({...v,_line:y})));if(!x.length){E.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),u(E);return}re(x,b,`Choisir ${b} joueur(s) à booster (+${j})`,y=>{y.forEach(h=>{const v=(m[h._line]||[]).find(w=>w.cardId===h.cardId);v&&(v.boost=(v.boost||0)+j,E.log.push({text:`⚡ +${j} sur ${v.name}`,type:"info"}))}),E[n+"Team"]=m,u(E)})},DEBUFF_STAT:({value:j=1,count:b=1,roles:k=[],target:E="ai"},u,m)=>{const x=E==="home"?n:o,y=u[x+"Team"],h=E==="home"?"allié":"adverse",v=Object.entries(y).filter(([w])=>!k.length||k.includes(w)).flatMap(([w,T])=>T.filter(z=>!z.used).map(z=>({...z,_line:w})));if(!v.length){u.log.push({text:`🎯 Aucun joueur ${h}`,type:"info"}),m(u);return}re(v,b,`Choisir ${b} joueur(s) ${h}(s) (-${j})`,w=>{w.forEach(T=>{const z=(y[T._line]||[]).find(S=>S.cardId===T.cardId);z&&(z.boost=(z.boost||0)-j,u.log.push({text:`🎯 -${j} sur ${z.name}`,type:"info"}))}),u[x+"Team"]=y,m(u)})},GRAY_PLAYER:({count:j=1,roles:b=[],target:k="ai"},E,u)=>{const m=k==="home"?n:o,x=E[m+"Team"],y=k==="home"?"allié":"adverse",h=Object.entries(x).filter(([v])=>!b.length||b.includes(v)).flatMap(([v,w])=>w.filter(T=>!T.used).map(T=>({...T,_line:v})));if(!h.length){E.log.push({text:`❌ Aucun joueur ${y}`,type:"info"}),u(E);return}re(h,j,`Choisir ${j} joueur(s) ${y}(s) à exclure`,v=>{v.forEach(w=>{const T=(x[w._line]||[]).find(z=>z.cardId===w.cardId);T&&(T.used=!0,E.log.push({text:`❌ ${T.name} exclu !`,type:"info"}))}),E[m+"Team"]=x,u(E)})},REVIVE_PLAYER:({count:j=1,roles:b=[]},k,E)=>{const u=k[n+"Team"],m=Object.entries(u).filter(([x])=>!b.length||b.includes(x)).flatMap(([x,y])=>y.filter(h=>h.used).map(h=>({...h,_line:x})));if(!m.length){k.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),E(k);return}re(m,j,`Choisir ${j} joueur(s) à ressusciter`,x=>{x.forEach(y=>{const h=(u[y._line]||[]).find(v=>v.cardId===y.cardId);h&&(h.used=!1,k.log.push({text:`💫 ${h.name} ressuscité !`,type:"info"}))}),k[n+"Team"]=u,E(k)})},REMOVE_GOAL:({},j,b)=>{const k=o+"Score";j[k]>0?(j[k]--,j.log.push({text:"🚫 Dernier but annulé !",type:"info"})):j.log.push({text:"🚫 Aucun but à annuler",type:"info"}),b(j)},ADD_GOAL_DRAW:({},j,b)=>{j[n+"Score"]===j[o+"Score"]?(j[n+"Score"]++,j.log.push({text:"🎯 But bonus !",type:"info"})):j.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),b(j)},ADD_SUB:({value:j=1},b,k)=>{b.maxSubs=(b.maxSubs||3)+j,b.log.push({text:`🔄 +${j} remplacement(s)`,type:"info"}),k(b)},CUSTOM:({},j,b)=>b(j)};function re(j,b,k,E){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var h,v;const y=j.map(w=>{const T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",z=ke(w,w._line)+(w.boost||0),H=m.find(F=>F.cardId===w.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=w.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${H};background:${T};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${w._line}</div>
        </div>`}).join("");u.innerHTML=`
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
        </div>`,(h=u.querySelector("#pp-close"))==null||h.addEventListener("click",()=>u.remove()),u.querySelectorAll(".pp-item").forEach(w=>{w.addEventListener("click",()=>{const T=w.dataset.cid,z=j.find(H=>H.cardId===T),S=m.findIndex(H=>H.cardId===T);z&&(S>-1?m.splice(S,1):m.length<b&&m.push(z),x())})}),(v=u.querySelector("#pp-confirm"))==null||v.addEventListener("click",()=>{u.remove(),E(m)})}x(),document.body.appendChild(u)}async function P(j,b){const E=(r["gcCardsFull_"+n]||[]).find(y=>y.id===j),u=(E==null?void 0:E._gcDef)||(r.gcDefs||[]).find(y=>{var h;return y.name===b||((h=y.name)==null?void 0:h.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),m=[...r["usedGc_"+n]||[],j],x={type:b,by:n,seq:(r._gcAnimSeq||0)+1};C.add(x.seq),ve(b,n,async()=>{if(u!=null&&u.effect_type&&u.effect_type!=="CUSTOM"){const h=ue[u.effect_type];if(h){const v={...r};h(u.effect_params||{},v,async w=>{w["usedGc_"+n]=m,w._lastGC=x,w._gcAnimSeq=x.seq,await O(w)});return}}const y={...r};switch(b){case"Remplacement+":y.maxSubs=(y.maxSubs||3)+1,y.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const h=o+"Score";y[h]>0&&(y[h]--,y.log.push({text:"🚫 But annulé",type:"info"}));break}}y["usedGc_"+n]=m,y._lastGC=x,y._gcAnimSeq=x.seq,await O(y)})}function ie(j,b){const k="usedCardIds_"+j,E=new Set(r[k]||[]);b.forEach(u=>E.add(u)),r[k]=[...E]}function le(){for(const j of["p1","p2"]){const b=new Set(r["usedCardIds_"+j]||[]),k=r[j+"Team"];if(k)for(const E of["GK","DEF","MIL","ATT"])(k[E]||[]).forEach(u=>{u.used=b.has(u.cardId)})}}function U(){var Be,Ze,tt,Xe,it,ft;if(r.phase==="reveal")return ae();if(r.phase==="midfield")return ye();if(r.phase==="finished")return Je();const j=r[n+"Team"],b=r[o+"Team"];le();const k=r[n+"Score"],E=r[o+"Score"],u=r[n+"Name"],m=r[o+"Name"],x=r.phase===n+"-attack",y=r.phase===n+"-defense",h=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],v=h.map(oe=>oe.cardId),w=window.innerWidth>=700,T=r[n+"Subs"]||[],z=r["usedSubIds_"+n]||[],S=T.filter(oe=>!z.includes(oe.cardId)),H=r["gcCardsFull_"+n]||[],G=r["usedGc_"+n]||[],F=H.filter(oe=>!G.includes(oe.id)),V=r.boostOwner===n&&!r.boostUsed,Q=!["GK","DEF","MIL","ATT"].some(oe=>(b[oe]||[]).some(K=>!K.used)),J=[...j.MIL||[],...j.ATT||[]].filter(oe=>!oe.used),ee=x&&Q&&J.length===0?[...j.GK||[],...j.DEF||[]].filter(oe=>!oe.used).map(oe=>oe.cardId):[];function ne(oe,K,ce){var ht,gt;const ge=oe._gcDef,Y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ge==null?void 0:ge.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",xe={purple:"#b06ce0",light_blue:"#00d4ef"}[ge==null?void 0:ge.color]||"#b06ce0",Ae=(ge==null?void 0:ge.name)||oe.gc_type,be=(ge==null?void 0:ge.effect)||((ht=Ve[oe.gc_type])==null?void 0:ht.desc)||"",et=ge!=null&&ge.image_url?`/manager-wars/icons/${ge.image_url}`:null,ot=((gt=Ve[oe.gc_type])==null?void 0:gt.icon)||"⚡",st=Math.round(ce*.22),rt=Math.round(ce*.22),ct=ce-st-rt,yt=Ae.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${oe.id}" data-gc-type="${oe.gc_type}"
        style="box-sizing:border-box;width:${K}px;height:${ce}px;border-radius:10px;border:2px solid ${xe};background:${Y};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${st}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${yt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${K-6}px">${Ae}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${K-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${ot}</span>`}
        </div>
        <div style="height:${rt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${be.slice(0,38)}</span>
        </div>
      </div>`}function se(oe,K){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${oe}px;height:${K}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(K*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(K*.2)}px">⚡</div>
        <div style="font-size:${Math.round(K*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const me=(oe,K)=>K?se(130,175):ne(oe,130,175),we=(oe,K)=>K?se(68,95):ne(oe,68,95),_e=w?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",$e=x?Ce(n)?`<button id="pvp-action" style="${_e};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${h.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${_e};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:y?`<button id="pvp-action" style="${_e};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${h.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Ee=x&&!Ce(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${h.length}/3 sélectionné(s)</div>`:"",ze=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${w?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${S.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':S.map(oe=>`<div class="pvp-sub-btn" data-sub-id="${oe.cardId}" style="cursor:pointer;flex-shrink:0">${We(oe,w?76:44,w?100:58)}</div>`).join("")}
    </div>`,Me=x?"attack":y?"defense":"idle",Ne=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ut(j,r[n+"Formation"],Me,v,300,300,ee)}
      </div>
    </div>`;function Se(oe){if(oe.type==="duel"&&(oe.homeTotal!=null||oe.aiTotal!=null)){const K=(oe.homeTotal||0)>=(oe.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(oe.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(oe.homePlayers||[]).map(ce=>dt(ce)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${K?20:14}px;font-weight:900;color:${K?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${oe.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${K?14:20}px;font-weight:900;color:${K?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${oe.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(oe.aiPlayers||[]).map(ce=>dt(ce)).join("")}
            </div>
          </div>
          ${oe.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${oe.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${oe.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${oe.type==="goal"?700:400};padding:3px 2px">${oe.text||""}</div>`}const He=(()=>{var K,ce;if(y&&((K=r.pendingAttack)!=null&&K.players)){const ge=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${nt((ge.players||[]).map(Y=>({...Y,used:!1})),"#ff6b6b",ge.total)}
        </div>`}if(x&&((ce=r.pendingAttack)!=null&&ce.players)){const ge=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((ge.players||[]).map(Y=>({...Y,used:!1})),"#00ff88",ge.total)}
        </div>`}const oe=(r.log||[]).slice(-1)[0];return oe?'<div style="padding:2px 4px">'+Se(oe)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Re=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${k} – ${E}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;Qe(e),e.style.overflow="hidden",w?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${ze}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ne}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${$e}${Ee}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${F.map(oe=>me(oe,!1)).join("")}
            ${V?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(j,r[n+"Formation"],Me,v,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${F.map(oe=>we(oe,!1)).join("")}
            ${V?we(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${x&&S.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${x&&S.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${x&&S.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${x&&S.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${S.length}</div>
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
      </div>`;function qe(){const oe=e.querySelector(".match-screen");if(!oe)return;const K=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);oe.style.height=K+"px",oe.style.minHeight=K+"px",oe.style.maxHeight=K+"px",oe.style.overflow="hidden";const ce=e.querySelector("#mobile-action-bar"),ge=e.querySelector("#mobile-play-area");ce&&ge&&(ge.style.paddingBottom=ce.offsetHeight+"px")}if(qe(),setTimeout(qe,120),setTimeout(qe,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",qe),window.visualViewport.addEventListener("scroll",qe)),window.addEventListener("resize",qe)),function(){const K=e.querySelector(".terrain-wrapper svg");K&&(K.removeAttribute("width"),K.removeAttribute("height"),K.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",K.setAttribute("viewBox","-26 -26 352 352"),K.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(oe=>{oe.addEventListener("click",()=>{if(!x&&!y)return;const K=oe.dataset.cardId,ce=oe.dataset.role,ge=(j[ce]||[]).find(be=>be.cardId===K);if(!ge||ge.used)return;const Y=ee.includes(K);if(x&&!["MIL","ATT"].includes(ce)&&!Y)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const xe=r["selected_"+n],Ae=xe.findIndex(be=>be.cardId===K);Ae>-1?xe.splice(Ae,1):xe.length<3&&xe.push({...ge,_role:ce}),U()})}),e.querySelectorAll(".match-used-hit").forEach(oe=>{oe.addEventListener("click",()=>X(oe.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(oe=>{oe.addEventListener("click",()=>X())}),(Be=e.querySelector("#pvp-sub-open"))==null||Be.addEventListener("click",()=>X()),e.querySelectorAll(".pvp-gc-mini").forEach(oe=>{oe.addEventListener("click",()=>he(oe.dataset.gcId,oe.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>W()),(tt=e.querySelector("#pvp-action"))==null||tt.addEventListener("click",oe=>{x?oe.currentTarget.dataset.pass==="1"||!Ce(n)?pe():de():y&&je()}),(Xe=e.querySelector("#pvp-quit"))==null||Xe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&te()}),(it=e.querySelector("#pvp-view-opp"))==null||it.addEventListener("click",()=>R()),(ft=e.querySelector("#pvp-toggle-history"))==null||ft.addEventListener("click",()=>Z()),I&&(clearInterval(I),I=null),(x||y)&&!f){let oe=30,K=!1;const ce=()=>document.getElementById("pvp-timer"),ge=()=>{ce()&&(ce().textContent=oe+"s",ce().style.color=K?"#ff4444":"#fff")};ge(),I=setInterval(()=>{oe--,oe<0?K?(clearInterval(I),I=null,x&&!Ce(n)?pe():te()):(K=!0,oe=15,ge()):ge()},1e3)}}function ae(){Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await O({phase:"midfield"})},5e3)}let fe=!1;function ye(){if(fe)return;const j=r[n+"Team"].MIL||[],b=r[o+"Team"].MIL||[];function k(F){return F.reduce((V,Q)=>V+ke(Q,"MIL"),0)}function E(F){let V=0;for(let Q=0;Q<F.length-1;Q++){const J=at(F[Q],F[Q+1]);J==="#00ff88"?V+=2:J==="#FFD700"&&(V+=1)}return V}const u=k(j)+E(j),m=k(b)+E(b),x=u>=m;function y(F,V,Q){return`<div id="duel-row-${Q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${F.map((J,ee)=>{const ne=ee<F.length-1?at(J,F[ee+1]):null,se=!ne||ne==="#ff3333"||ne==="#cc2222",me=ne==="#00ff88"?"+2":ne==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Q}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...J,note:ke(J,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<F.length-1?`<div class="duel-link duel-link-${Q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${se?"rgba(255,255,255,0.12)":ne};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${se?"none":`0 0 8px ${ne}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ne}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${k(F)} + ${E(F)} liens = <b style="color:#fff">${k(F)+E(F)}</b>
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
    </div>`;const h=(F,V)=>e.querySelectorAll(F).forEach((Q,J)=>{setTimeout(()=>{Q.style.opacity="1",Q.style.transform="translateY(0) scale(1)"},V+J*90)});h(".duel-card-me",150),h(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((F,V)=>setTimeout(()=>{F.style.opacity="1"},V*70)),900),setTimeout(()=>{const F=e.querySelector("#pvp-vs");F&&(F.style.opacity="1",F.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function v(F,V,Q){const J=document.getElementById(F);if(!J)return;const ee=performance.now(),ne=se=>{const me=Math.min(1,(se-ee)/Q);J.textContent=Math.round(V*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ne):J.textContent=V};requestAnimationFrame(ne)}setTimeout(()=>{v("pvp-score-me",u,800),v("pvp-score-opp",m,800)},1500);const w=r.p1Team.MIL||[],T=r.p2Team.MIL||[],z=k(w)+E(w),S=k(T)+E(T),H=z>=S?"p1":"p2";let G=r.boostValue;G==null&&(G=Qt(),r.boostValue=G,r.boostOwner=H,r.boostUsed=!1),fe=!0,setTimeout(()=>{const F=e.querySelector("#duel-row-"+(x?"me":"opp")),V=e.querySelector("#duel-row-"+(x?"opp":"me")),Q=document.getElementById("pvp-score-me"),J=document.getElementById("pvp-score-opp"),ee=x?Q:J,ne=x?J:Q;ee&&(ee.style.fontSize="80px",ee.style.color=x?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),ne&&(ne.style.opacity="0.25"),setTimeout(()=>{F&&(F.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",F.style.zIndex="5"),setTimeout(()=>{const se=document.getElementById("duel-shock");se&&(se.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var _e;const se=document.getElementById("pvp-duel-finale");if(!se)return;const me=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",we=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;se.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+we,se.style.transition="opacity .45s ease",se.style.opacity="1",se.style.pointerEvents="auto",(_e=document.getElementById("pvp-start-match"))==null||_e.addEventListener("click",async()=>{const $e=H;await O({phase:$e+"-attack",attacker:$e,round:1,boostValue:G,boostUsed:!1,boostOwner:$e})})},600)},700)},2800)}function Te(j,b,k,E,u){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(w,T)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${T%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][T%8]}</div>`).join(""),y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${x}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${E?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${b} – ${k}
      </div>
      ${j!=null&&j.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${j.map(w=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${y[w.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${w.portrait?`<img src="${w.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(w.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let h=!1;const v=()=>{h||(h=!0,m.remove(),setTimeout(()=>u(),50))};m.addEventListener("click",v),setTimeout(v,3500)}function ve(j,b,k){var G,F;const E=(r.gcDefs||[]).find(V=>{var Q;return V.name===j||((Q=V.name)==null?void 0:Q.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),u={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",x=(E==null?void 0:E.name)||j,y=(E==null?void 0:E.effect)||((G=Ve[j])==null?void 0:G.desc)||"",h=E!=null&&E.image_url?`/manager-wars/icons/${E.image_url}`:null,v=((F=Ve[j])==null?void 0:F.icon)||"⚡",T=b===n?"Vous":r[b+"Name"]||"Adversaire",z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",z.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${T} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${u};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(z);let S=!1;const H=()=>{S||(S=!0,z.remove(),setTimeout(()=>k&&k(),50))};z.addEventListener("click",H),setTimeout(H,3e3)}function he(j,b){var z,S,H,G;const E=(r["gcCardsFull_"+n]||[]).find(F=>F.id===j),u=E==null?void 0:E._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[u==null?void 0:u.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[u==null?void 0:u.color]||"#b06ce0",y=(u==null?void 0:u.name)||b,h=(u==null?void 0:u.effect)||((z=Ve[b])==null?void 0:z.desc)||"Carte spéciale.",v=u!=null&&u.image_url?`/manager-wars/icons/${u.image_url}`:null,w=((S=Ve[b])==null?void 0:S.icon)||"⚡",T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",T.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${w}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(T),(H=T.querySelector("#pvp-gc-back"))==null||H.addEventListener("click",()=>T.remove()),(G=T.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{T.remove(),P(j,b)})}function W(){var E;const j=r[n+"Team"],b=Object.entries(j).flatMap(([u,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:u})));if(!b.length)return;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",k.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${b.map(u=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u._line]||"#555",x=ke(u,u._line)+(u.boost||0);return`<div class="bp-item" data-cid="${u.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(k),(E=k.querySelector("#bp-close"))==null||E.addEventListener("click",()=>k.remove()),k.querySelectorAll(".bp-item").forEach(u=>{u.addEventListener("click",async()=>{const m=u.dataset.cid,x=b.find(h=>h.cardId===m);if(!x)return;const y=(j[x._line]||[]).find(h=>h.cardId===m);y&&(y.boost=(y.boost||0)+r.boostValue),k.remove(),await O({[n+"Team"]:j,boostUsed:!0})})})}function X(j=null){var S,H;if(!(r.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const k=r[n+"Team"],E=r["usedSubIds_"+n]||[],u=r.maxSubs||3;if(E.length>=u){p(`Maximum ${u} remplacements atteint`,"warning");return}const m=Object.entries(k).flatMap(([G,F])=>(F||[]).filter(V=>V.used).map(V=>({...V,_line:G}))),x=(r[n+"Subs"]||[]).filter(G=>!E.includes(G.cardId));if(!m.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){p("Aucun remplaçant disponible","warning");return}let y=Math.max(0,m.findIndex(G=>G.cardId===j));const h=((S=m[y])==null?void 0:S._line)||((H=m[y])==null?void 0:H.job);let v=Math.max(0,x.findIndex(G=>G.job===h)),w=!1;const T=document.createElement("div");T.id="pvp-sub-overlay",T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function z(){var ne,se,me,we,_e,$e;const G=m[y],F=x[v],V=Math.min(130,Math.round((window.innerWidth-90)/2)),Q=Math.round(V*1.35),J=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;T.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${E.length}/${u})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${J(v===0)}" ${v===0?"disabled":""}>▲</button>
          <div>${F?We({...F,used:!1,boost:0},V,Q):"<div>—</div>"}</div>
          <button id="pin-down" style="${J(v>=x.length-1)}" ${v>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${v+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${J(y===0)}" ${y===0?"disabled":""}>▲</button>
          <div>${G?We({...G,used:!1,boost:0},V,Q):"<div>—</div>"}</div>
          <button id="pout-down" style="${J(y>=m.length-1)}" ${y>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${y+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ne=T.querySelector("#psub-close"))==null||ne.addEventListener("click",()=>T.remove()),(se=T.querySelector("#pout-up"))==null||se.addEventListener("click",()=>{y>0&&(y--,z())}),(me=T.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{y<m.length-1&&(y++,z())}),(we=T.querySelector("#pin-up"))==null||we.addEventListener("click",()=>{v>0&&(v--,z())}),(_e=T.querySelector("#pin-down"))==null||_e.addEventListener("click",()=>{v<x.length-1&&(v++,z())});const ee=(Ee,ze,Me,Ne)=>{const Se=T.querySelector("#"+Ee);if(!Se)return;let He=0;Se.addEventListener("touchstart",Re=>{He=Re.touches[0].clientY},{passive:!0}),Se.addEventListener("touchend",Re=>{const qe=Re.changedTouches[0].clientY-He;if(Math.abs(qe)<30)return;const Be=ze();qe<0&&Be<Ne-1?(Me(Be+1),z()):qe>0&&Be>0&&(Me(Be-1),z())},{passive:!0})};ee("pin-panel",()=>v,Ee=>v=Ee,x.length),ee("pout-panel",()=>y,Ee=>y=Ee,m.length),($e=T.querySelector("#psub-confirm"))==null||$e.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),w)return;w=!0;const ze=m[y],Me=x[v];if(!ze||!Me)return;const Ne=ze._line,Se=(k[Ne]||[]).findIndex(qe=>qe.cardId===ze.cardId);if(Se===-1){p("Erreur : joueur introuvable","error"),T.remove();return}const He={...Me,_line:Ne,position:ze.position,used:!1,boost:0};k[Ne].splice(Se,1,He);const Re=[...E,Me.cardId];T.remove(),N(ze,Me,async()=>{await O({[n+"Team"]:k,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Re})})})}document.body.appendChild(T),z()}function N(j,b,k){const E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(h,v,w)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${v};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${w}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${E[h.job]||"#555"};border:3px solid ${v};position:relative;overflow:hidden;margin:0 auto">
        ${Ge(h)?`<img src="${Ge(h)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(h.name||"").slice(0,12)}</div>
    </div>`;u.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(b,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(j,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(u);let x=!1;const y=()=>{x||(x=!0,u.remove(),setTimeout(()=>k(),50))};u.addEventListener("click",y),setTimeout(y,2200)}function R(){var b;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",j.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(j),(b=j.querySelector("#pvp-opp-close"))==null||b.addEventListener("click",()=>j.remove())}function Z(){var k;const j=r.log||[],b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",b.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${j.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...j].reverse().map(E=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${E.type==="goal"?"#FFD700":E.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${E.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(b),(k=b.querySelector("#pvp-hist-close"))==null||k.addEventListener("click",()=>b.remove())}async function pe(){if(r.phase!==n+"-attack")return;const j=n==="p1"?"p2":"p1",b=(r.round||0)+1,k=[...r.log||[]];k.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const E=Le(r),u=Ce(j),m=E||!u?"finished":j+"-attack";await O({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:m,attacker:j,round:b,log:k}),m==="finished"&&await Ue(r)}async function de(){const j=r[n+"Team"],b=!["GK","DEF","MIL","ATT"].some(m=>(r[o+"Team"][m]||[]).some(x=>!x.used)),k=(r["selected_"+n]||[]).map(m=>{const x=(j[m._role]||[]).find(z=>z.cardId===m.cardId)||m,y=b&&["GK","DEF"].includes(m._role),h=j[m._role]||[],v=h.findIndex(z=>z.cardId===m.cardId),w=lt(h.length),T=v>=0?w[v]:x._col??1;return{...x,_line:m._role,_col:T,...y?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!k.length)return;const E=Bt(k,r.modifiers[n]||{});ie(n,k.map(m=>m.cardId)),k.forEach(m=>{const x=(j[m._role]||[]).find(y=>y.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+n]=[],U();const u=[...r.log||[]];if(b){const m=(r[n+"Score"]||0)+1,x=k.map(T=>({name:T.name,note:ke(T,T._line||"ATT"),portrait:Ge(T),job:T.job}));u.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:E.total,aiTotal:0});const y=(r.round||0)+1,h=n==="p1"?"p2":"p1",v={...r,[n+"Team"]:j,[n+"Score"]:m},w=Le(v);B.add(y),Te(x,m,r[o+"Score"]||0,!0,async()=>{await O({[n+"Team"]:j,[n+"Score"]:m,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:w?"finished":h+"-attack",attacker:h,round:y,log:u}),w&&await Ue({...r,[n+"Score"]:m})});return}u.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${E.total})`}),await O({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],pendingAttack:{...E,players:k,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:u})}async function je(){const j=r[n+"Team"],b=(r["selected_"+n]||[]).map(G=>{const F=(j[G._role]||[]).find(ne=>ne.cardId===G.cardId)||G,V=j[G._role]||[],Q=V.findIndex(ne=>ne.cardId===G.cardId),J=lt(V.length),ee=Q>=0?J[Q]:F._col??1;return{...F,_line:G._role,_col:ee}}),k=Dt(b,r.modifiers[n]||{});ie(n,b.map(G=>G.cardId)),b.forEach(G=>{const F=(j[G._role]||[]).find(V=>V.cardId===G.cardId);F&&(F.used=!0)}),r["selected_"+n]=[],U();const E=Gt(r.pendingAttack.total,k.total,r.modifiers[n]||{}),u=r.pendingAttack.side,m=E==="attack"||(E==null?void 0:E.goal),x=u==="p1"?"p2":"p1",y=(r.round||0)+1,h=(r.pendingAttack.players||[]).map(G=>({name:G.name,note:ke(G,G._line||"ATT"),portrait:Ge(G),job:G.job})),v=[...r.log||[]];v.push({type:"duel",isGoal:m,homeScored:m&&u===n,text:m?`⚽ BUT de ${r[u+"Name"]} ! (${r.pendingAttack.total} vs ${k.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${k.total})`,homePlayers:h,aiPlayers:b.map(G=>({name:G.name,note:ke(G,G._line||"DEF"),portrait:Ge(G),job:G.job})),homeTotal:r.pendingAttack.total,aiTotal:k.total});const w=m?(r[u+"Score"]||0)+1:r[u+"Score"]||0,T={...r,[n+"Team"]:j,[u+"Score"]:w},z=Le(T),S=z?"finished":x+"-attack",H=async()=>{await O({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],[u+"Score"]:w,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:S,attacker:x,round:y,log:v}),(S==="finished"||z)&&await Ue({...r,[u+"Score"]:w})};if(m){const G=u===n,F=G?w:r[n+"Score"]||0,V=G?r[o+"Score"]||0:w;B.add(y),Te(h,F,V,G,H)}else await H()}function Ie(j){return["MIL","ATT"].some(b=>(j[b]||[]).some(k=>!k.used))}function Pe(j){return["GK","DEF","MIL","ATT"].some(b=>(j[b]||[]).some(k=>!k.used))}function Oe(j){return Pe(j)&&!Ie(j)}function Ce(j){const b=r[j+"Team"],k=r[(j==="p1"?"p2":"p1")+"Team"];return!!(Ie(b)||!Pe(k)&&Oe(b))}function Le(j){const b=["MIL","ATT"].some(v=>(j.p1Team[v]||[]).some(w=>!w.used)),k=["MIL","ATT"].some(v=>(j.p2Team[v]||[]).some(w=>!w.used)),E=Pe(j.p1Team),u=Pe(j.p2Team);return!b&&!(!u&&E)&&(!k&&!(!E&&u))}function Fe(j){const b=j.p1Score||0,k=j.p2Score||0;return b===k?null:b>k?$.home_id:$.away_id}async function Ue(j){try{const b=Fe(j),k=b?$.home_id===b?$.away_id:$.home_id:null;await A.from("matches").update({status:"finished",winner_id:b,home_score:j.p1Score||0,away_score:j.p2Score||0}).eq("id",i),b&&k&&Xt(b,k).catch(()=>{})}catch(b){console.error("[PvP] finishMatch:",b)}}function Je(){var u;const j=r[n+"Score"],b=r[o+"Score"],k=j>b,E=j===b;Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${k?"🏆":E?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${k?"Victoire !":E?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${j} - ${b}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(u=document.getElementById("pvp-home"))==null||u.addEventListener("click",()=>{try{A.removeChannel(q)}catch{}Ke(e),s("home")})}U()}const Do=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:xn,resumePvpMatch:Bo},Symbol.toStringTag,{value:"Module"}));async function Go(e,t,i,a){var c,l;try{const d=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(A.getChannels?A.getChannels():[]).forEach(p=>{const n=p.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&A.removeChannel(p)})}catch(s){console.warn("[FriendMatch] cleanup canaux:",s)}d&&(await A.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await A.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await ti(e,t,"random",({deckId:d,formation:s,starters:p,subsRaw:n,gcCardsEnriched:o,gcDefs:g})=>{const _=$=>Po(e,t,d,s,p,n,$,g||[],i,a);if(!o.length){_([]);return}ei(e,o,_)})}async function Po(e,t,i,a,c,l,d=[],s=[],p,n){var ue;const{state:o,navigate:g,toast:_}=t,$=o.profile.id;let L=!1,r=null;Qe(e);try{await A.rpc("cancel_matchmaking",{p_user_id:$})}catch{}try{await A.from("matchmaking_queue").delete().eq("user_id",$)}catch{}const f=(re,P,ie,le)=>{var U;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${P?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${P?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${P?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${n}</div>
            <div style="font-size:11px;color:${P?"#22c55e":"#aaa"}">${P?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!P&&re?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(U=document.getElementById("lobby-cancel"))==null||U.addEventListener("click",async()=>{L=!0,r&&(A.removeChannel(r),r=null),ie&&await A.from("friend_match_invites").update({status:"declined"}).eq("id",ie),Ke(e),g("home")})},I=async(re,P)=>{L=!0,r&&(A.removeChannel(r),r=null),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&No(e,t,re,P,d,s)},{data:M}=await A.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${$},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${$})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let B,C;if(M&&M.inviter_id===p)C=!1,B=M.id,await A.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",B);else{C=!0;const{data:re,error:P}=await A.from("friend_match_invites").insert({inviter_id:$,invitee_id:p,friend_id:p,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(P||!re){_("Erreur création invitation","error"),Ke(e),g("home");return}B=re.id}if(f(!0,!C,B),!C){const re={home_id:p,away_id:$,home_deck_id:M.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},P=await A.from("matches").insert(re).select().single(),ie=P.data;if(!ie){_("Erreur création match: "+(((ue=P.error)==null?void 0:ue.message)||""),"error"),Ke(e),g("home");return}await A.from("friend_match_invites").update({match_id:ie.id,status:"matched"}).eq("id",B),I(ie.id,!1);return}let D=!1;const q=re=>{L||D||(re.status==="matched"&&re.match_id?(D=!0,clearInterval(O),clearInterval(te),I(re.match_id,!0)):re.status==="declined"?(clearInterval(O),clearInterval(te),_(`${n} a décliné l'invitation`,"warning"),Ke(e),g("home")):re.invitee_ready&&f(!0,!0,B))},O=setInterval(()=>{if(L){clearInterval(O);return}A.from("matchmaking_queue").delete().eq("user_id",$).then(()=>{},()=>{})},3e3),te=setInterval(async()=>{if(L||D){clearInterval(te);return}const{data:re}=await A.from("friend_match_invites").select("*").eq("id",B).maybeSingle();re&&q(re)},1200);r=A.channel("friend-invite-"+B).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${B}`},re=>q(re.new)).subscribe()}async function No(e,t,i,a,c=[],l=[]){const{state:d,navigate:s,toast:p}=t,n=a?"p1":"p2",o=a?"p2":"p1",g=(c||[]).map(b=>b.id),_=(c||[]).map(b=>({id:b.id,gc_type:b.gc_type,_gcDef:b._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:$}=await A.from("matches").select("*").eq("id",i).single();if(!$){p("Match introuvable","error"),s("home");return}async function L(){const[{data:b},{data:k},{data:E},{data:u}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:$.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:$.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",$.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",$.away_id).single()]),m=w=>({cardId:w.card_id,position:w.position,id:w.id,firstname:w.firstname,name:w.surname_encoded,country_code:w.country_code,club_id:w.club_id,job:w.job,job2:w.job2,note_g:Number(w.note_g)||0,note_d:Number(w.note_d)||0,note_m:Number(w.note_m)||0,note_a:Number(w.note_a)||0,rarity:w.rarity,skin:w.skin,hair:w.hair,hair_length:w.hair_length,clubName:w.club_encoded_name||null,clubLogo:w.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),x=((b==null?void 0:b.starters)||[]).map(w=>m(w)),y=((k==null?void 0:k.starters)||[]).map(w=>m(w)),h=(b==null?void 0:b.formation)||"4-4-2",v=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:xt(x,h),p2Team:xt(y,v),p1Subs:((b==null?void 0:b.subs)||[]).map(w=>m(w)),p2Subs:((k==null?void 0:k.subs)||[]).map(w=>m(w)),p1Formation:h,p2Formation:v,p1Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 1",p2Name:(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?g:[],gc_p2:a?[]:g,gcCardsFull_p1:a?_:[],gcCardsFull_p2:a?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=$.game_state&&Object.keys($.game_state).length?$.game_state:null;if(!r)if(a){r=await L();const{data:b}=await A.from("matches").select("game_state").eq("id",i).single();!(b!=null&&b.game_state)||!Object.keys(b.game_state).length?await A.from("matches").update({game_state:r,turn_user_id:$.home_id}).eq("id",i):r=b.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let b=0;b<60&&!r;b++){await new Promise(E=>setTimeout(E,400));const{data:k}=await A.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(r=k.game_state)}if(!r){p("Erreur de synchronisation","error"),s("home");return}r.gc_p2=g,r.gcCardsFull_p2=_,await A.from("matches").update({game_state:r}).eq("id",i)}let f=!1,I=!1,M=null,B=!1;const C=new Set,D=new Set;function q(b){var w,T;try{A.removeChannel(O)}catch{}const k=r[n+"Score"]||0,E=r[o+"Score"]||0;if(!I){const z=r.p1Score||0,S=r.p2Score||0,H=(r.usedGc_p1||[]).length,G=(r.usedGc_p2||[]).length,F=b.winner_id||(z>S?$.home_id:S>z?$.away_id:null);(F?d.profile.id===F:d.profile.id<(a?$.away_id:$.home_id))&&(I=!0,Ki({player1Id:$.home_id,player2Id:$.away_id,score1:z,score2:S,gc1:H,gc2:G}).catch(Q=>console.warn("[FriendMatch] updateStats:",Q)))}let u,m;b.winner_id?(u=b.winner_id===d.profile.id,m=!1):b.forfeit?(u=k>E,m=!1):(m=k===E,u=k>E),(w=document.getElementById("pvp-end-overlay"))==null||w.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=m?"🤝":u?"🏆":"😞",h=m?"MATCH NUL":u?"VICTOIRE !":"DÉFAITE",v=m?"#fff":u?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${k} – ${E} ${r[o+"Name"]}</div>
      ${b.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${u?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(T=x.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{x.remove(),Ke(e),s("home")})}const O=A.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},b=>{const k=b.new;try{if(k.status==="finished"||k.forfeit){if(f)return;f=!0,M&&(clearInterval(M),M=null),k.game_state&&(r=k.game_state),q(k);return}if(k.game_state){const E=r;r=k.game_state;const u=r._lastGC;if(u&&u.seq&&!D.has(u.seq)&&(D.add(u.seq),u.by!==n)){he(u.type,u.by,()=>ae());return}const m=E[n+"Score"]||0,x=E[o+"Score"]||0,y=r[n+"Score"]||0,h=r[o+"Score"]||0,v=y>m,w=h>x;if((v||w)&&!C.has(r.round)){C.add(r.round);const T=[...r.log||[]].reverse().find(S=>S.isGoal),z=((T==null?void 0:T.homePlayers)||[]).map(S=>({name:S.name,note:S.note,portrait:S.portrait,job:S.job}));ve(z,y,h,v,()=>ae());return}ae()}}catch(E){console.error("[PvP] crash:",E)}}).subscribe();async function te(b){Object.assign(r,b),r.lastActionAt=new Date().toISOString();const{error:k}=await A.from("matches").update({game_state:r}).eq("id",i);k&&p("Erreur de synchronisation","error");try{ae()}catch(E){console.error("[PvP] renderPvpScreen crash:",E)}}async function ue(){if(f)return;f=!0,M&&(clearInterval(M),M=null);const b=a?$.away_id:$.home_id,k=a?"p2":"p1",E=a?"p1":"p2",u={...r,[k+"Score"]:3,[E+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:b,home_score:u.p1Score||0,away_score:u.p2Score||0,game_state:u}).eq("id",i)}catch{}try{A.removeChannel(O)}catch{}setTimeout(()=>{Ke(e),s("home")},800)}const re={BOOST_STAT:({value:b=1,count:k=1,roles:E=[]},u,m)=>{const x=u[n+"Team"],y=Object.entries(x).filter(([h])=>!E.length||E.includes(h)).flatMap(([h,v])=>v.filter(w=>!w.used).map(w=>({...w,_line:h})));if(!y.length){u.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),m(u);return}P(y,k,`Choisir ${k} joueur(s) à booster (+${b})`,h=>{h.forEach(v=>{const w=(x[v._line]||[]).find(T=>T.cardId===v.cardId);w&&(w.boost=(w.boost||0)+b,u.log.push({text:`⚡ +${b} sur ${w.name}`,type:"info"}))}),u[n+"Team"]=x,m(u)})},DEBUFF_STAT:({value:b=1,count:k=1,roles:E=[],target:u="ai"},m,x)=>{const y=u==="home"?n:o,h=m[y+"Team"],v=u==="home"?"allié":"adverse",w=Object.entries(h).filter(([T])=>!E.length||E.includes(T)).flatMap(([T,z])=>z.filter(S=>!S.used).map(S=>({...S,_line:T})));if(!w.length){m.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(m);return}P(w,k,`Choisir ${k} joueur(s) ${v}(s) (-${b})`,T=>{T.forEach(z=>{const S=(h[z._line]||[]).find(H=>H.cardId===z.cardId);S&&(S.boost=(S.boost||0)-b,m.log.push({text:`🎯 -${b} sur ${S.name}`,type:"info"}))}),m[y+"Team"]=h,x(m)})},GRAY_PLAYER:({count:b=1,roles:k=[],target:E="ai"},u,m)=>{const x=E==="home"?n:o,y=u[x+"Team"],h=E==="home"?"allié":"adverse",v=Object.entries(y).filter(([w])=>!k.length||k.includes(w)).flatMap(([w,T])=>T.filter(z=>!z.used).map(z=>({...z,_line:w})));if(!v.length){u.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),m(u);return}P(v,b,`Choisir ${b} joueur(s) ${h}(s) à exclure`,w=>{w.forEach(T=>{const z=(y[T._line]||[]).find(S=>S.cardId===T.cardId);z&&(z.used=!0,u.log.push({text:`❌ ${z.name} exclu !`,type:"info"}))}),u[x+"Team"]=y,m(u)})},REVIVE_PLAYER:({count:b=1,roles:k=[]},E,u)=>{const m=E[n+"Team"],x=Object.entries(m).filter(([y])=>!k.length||k.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){E.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),u(E);return}P(x,b,`Choisir ${b} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(m[h._line]||[]).find(w=>w.cardId===h.cardId);v&&(v.used=!1,E.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),E[n+"Team"]=m,u(E)})},REMOVE_GOAL:({},b,k)=>{const E=o+"Score";b[E]>0?(b[E]--,b.log.push({text:"🚫 Dernier but annulé !",type:"info"})):b.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(b)},ADD_GOAL_DRAW:({},b,k)=>{b[n+"Score"]===b[o+"Score"]?(b[n+"Score"]++,b.log.push({text:"🎯 But bonus !",type:"info"})):b.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(b)},ADD_SUB:({value:b=1},k,E)=>{k.maxSubs=(k.maxSubs||3)+b,k.log.push({text:`🔄 +${b} remplacement(s)`,type:"info"}),E(k)},CUSTOM:({},b,k)=>k(b)};function P(b,k,E,u){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,w;const h=b.map(T=>{const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",S=ke(T,T._line)+(T.boost||0),G=x.find(V=>V.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",F=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${G};background:${z};overflow:hidden;cursor:pointer;${F}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");m.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${E}</div>
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
        </div>`,(v=m.querySelector("#pp-close"))==null||v.addEventListener("click",()=>m.remove()),m.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const z=T.dataset.cid,S=b.find(G=>G.cardId===z),H=x.findIndex(G=>G.cardId===z);S&&(H>-1?x.splice(H,1):x.length<k&&x.push(S),y())})}),(w=m.querySelector("#pp-confirm"))==null||w.addEventListener("click",()=>{m.remove(),u(x)})}y(),document.body.appendChild(m)}async function ie(b,k){const u=(r["gcCardsFull_"+n]||[]).find(h=>h.id===b),m=(u==null?void 0:u._gcDef)||(r.gcDefs||[]).find(h=>{var v;return h.name===k||((v=h.name)==null?void 0:v.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),x=[...r["usedGc_"+n]||[],b],y={type:k,by:n,seq:(r._gcAnimSeq||0)+1};D.add(y.seq),he(k,n,async()=>{if(m!=null&&m.effect_type&&m.effect_type!=="CUSTOM"){const v=re[m.effect_type];if(v){const w={...r};v(m.effect_params||{},w,async T=>{T["usedGc_"+n]=x,T._lastGC=y,T._gcAnimSeq=y.seq,await te(T)});return}}const h={...r};switch(k){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=o+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+n]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await te(h)})}function le(b,k){const E="usedCardIds_"+b,u=new Set(r[E]||[]);k.forEach(m=>u.add(m)),r[E]=[...u]}function U(){for(const b of["p1","p2"]){const k=new Set(r["usedCardIds_"+b]||[]),E=r[b+"Team"];if(E)for(const u of["GK","DEF","MIL","ATT"])(E[u]||[]).forEach(m=>{m.used=k.has(m.cardId)})}}function ae(){var Ze,tt,Xe,it,ft,oe;if(r.phase==="reveal")return fe();if(r.phase==="midfield")return Te();if(r.phase==="finished")return j();const b=r[n+"Team"],k=r[o+"Team"];U();const E=r[n+"Score"],u=r[o+"Score"],m=r[n+"Name"],x=r[o+"Name"],y=r.phase===n+"-attack",h=r.phase===n+"-defense",v=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],w=v.map(K=>K.cardId),T=window.innerWidth>=700,z=r[n+"Subs"]||[],S=r["usedSubIds_"+n]||[],H=z.filter(K=>!S.includes(K.cardId)),G=r["gcCardsFull_"+n]||[],F=r["usedGc_"+n]||[],V=G.filter(K=>!F.includes(K.id)),Q=r.boostOwner===n&&!r.boostUsed,J=!["GK","DEF","MIL","ATT"].some(K=>(k[K]||[]).some(ce=>!ce.used)),ee=[...b.MIL||[],...b.ATT||[]].filter(K=>!K.used),ne=y&&J&&ee.length===0?[...b.GK||[],...b.DEF||[]].filter(K=>!K.used).map(K=>K.cardId):[];function se(K,ce,ge){var gt,wt;const Y=K._gcDef,xe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Y==null?void 0:Y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ae={purple:"#b06ce0",light_blue:"#00d4ef"}[Y==null?void 0:Y.color]||"#b06ce0",be=(Y==null?void 0:Y.name)||K.gc_type,et=(Y==null?void 0:Y.effect)||((gt=Ve[K.gc_type])==null?void 0:gt.desc)||"",ot=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null,st=((wt=Ve[K.gc_type])==null?void 0:wt.icon)||"⚡",rt=Math.round(ge*.22),ct=Math.round(ge*.22),yt=ge-rt-ct,ht=be.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
        style="box-sizing:border-box;width:${ce}px;height:${ge}px;border-radius:10px;border:2px solid ${Ae};background:${xe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function me(K,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${K}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const we=(K,ce)=>ce?me(130,175):se(K,130,175),_e=(K,ce)=>ce?me(68,95):se(K,68,95),$e=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ee=y?Le(n)?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${$e};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,ze=y&&!Le(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':y||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${H.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':H.map(K=>`<div class="pvp-sub-btn" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${We(K,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,Ne=y?"attack":h?"defense":"idle",Se=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ut(b,r[n+"Formation"],Ne,w,300,300,ne)}
      </div>
    </div>`;function He(K){if(K.type==="duel"&&(K.homeTotal!=null||K.aiTotal!=null)){const ce=(K.homeTotal||0)>=(K.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(K.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(K.homePlayers||[]).map(ge=>dt(ge)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ce?20:14}px;font-weight:900;color:${ce?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${K.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ce?14:20}px;font-weight:900;color:${ce?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${K.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(K.aiPlayers||[]).map(ge=>dt(ge)).join("")}
            </div>
          </div>
          ${K.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${K.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${K.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${K.type==="goal"?700:400};padding:3px 2px">${K.text||""}</div>`}const Re=(()=>{var ce,ge;if(h&&((ce=r.pendingAttack)!=null&&ce.players)){const Y=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${nt((Y.players||[]).map(xe=>({...xe,used:!1})),"#ff6b6b",Y.total)}
        </div>`}if(y&&((ge=r.pendingAttack)!=null&&ge.players)){const Y=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((Y.players||[]).map(xe=>({...xe,used:!1})),"#00ff88",Y.total)}
        </div>`}const K=(r.log||[]).slice(-1)[0];return K?'<div style="padding:2px 4px">'+He(K)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${E} – ${u}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Re}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;Qe(e),e.style.overflow="hidden",T?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Se}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ee}${ze}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${V.map(K=>we(K,!1)).join("")}
            ${Q?we(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(b,r[n+"Formation"],Ne,w,300,300,ne)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${V.map(K=>_e(K,!1)).join("")}
            ${Q?_e(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${y&&H.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${y&&H.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${y&&H.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${y&&H.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${H.length}</div>
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
          <div>${Ee}${ze}</div>
        </div>
      </div>`;function Be(){const K=e.querySelector(".match-screen");if(!K)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);K.style.height=ce+"px",K.style.minHeight=ce+"px",K.style.maxHeight=ce+"px",K.style.overflow="hidden";const ge=e.querySelector("#mobile-action-bar"),Y=e.querySelector("#mobile-play-area");ge&&Y&&(Y.style.paddingBottom=ge.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),B||(B=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(K=>{K.addEventListener("click",()=>{if(!y&&!h)return;const ce=K.dataset.cardId,ge=K.dataset.role,Y=(b[ge]||[]).find(et=>et.cardId===ce);if(!Y||Y.used)return;const xe=ne.includes(ce);if(y&&!["MIL","ATT"].includes(ge)&&!xe)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const Ae=r["selected_"+n],be=Ae.findIndex(et=>et.cardId===ce);be>-1?Ae.splice(be,1):Ae.length<3&&Ae.push({...Y,_role:ge}),ae()})}),e.querySelectorAll(".match-used-hit").forEach(K=>{K.addEventListener("click",()=>N(K.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(K=>{K.addEventListener("click",()=>N())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(K=>{K.addEventListener("click",()=>W(K.dataset.gcId,K.dataset.gcType))}),(tt=e.querySelector("#pvp-boost-card"))==null||tt.addEventListener("click",()=>X()),(Xe=e.querySelector("#pvp-action"))==null||Xe.addEventListener("click",K=>{y?K.currentTarget.dataset.pass==="1"||!Le(n)?de():je():h&&Ie()}),(it=e.querySelector("#pvp-quit"))==null||it.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ue()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>Z()),(oe=e.querySelector("#pvp-toggle-history"))==null||oe.addEventListener("click",()=>pe()),M&&(clearInterval(M),M=null),(y||h)&&!f){let K=30,ce=!1;const ge=()=>document.getElementById("pvp-timer"),Y=()=>{ge()&&(ge().textContent=K+"s",ge().style.color=ce?"#ff4444":"#fff")};Y(),M=setInterval(()=>{K--,K<0?ce?(clearInterval(M),M=null,y&&!Le(n)?de():ue()):(ce=!0,K=15,Y()):Y()},1e3)}}function fe(){Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await te({phase:"midfield"})},5e3)}let ye=!1;function Te(){if(ye)return;const b=r[n+"Team"].MIL||[],k=r[o+"Team"].MIL||[];function E(V){return V.reduce((Q,J)=>Q+ke(J,"MIL"),0)}function u(V){let Q=0;for(let J=0;J<V.length-1;J++){const ee=at(V[J],V[J+1]);ee==="#00ff88"?Q+=2:ee==="#FFD700"&&(Q+=1)}return Q}const m=E(b)+u(b),x=E(k)+u(k),y=m>=x;function h(V,Q,J){return`<div id="duel-row-${J}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Q}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((ee,ne)=>{const se=ne<V.length-1?at(ee,V[ne+1]):null,me=!se||se==="#ff3333"||se==="#cc2222",we=se==="#00ff88"?"+2":se==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${J}" data-idx="${ne}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ee,note:ke(ee,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ne<V.length-1?`<div class="duel-link duel-link-${J}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":se};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${se}`}">
              ${we?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${se}">${we}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${J}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${E(V)} + ${u(V)} liens = <b style="color:#fff">${E(V)+u(V)}</b>
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
    </div>`;const v=(V,Q)=>e.querySelectorAll(V).forEach((J,ee)=>{setTimeout(()=>{J.style.opacity="1",J.style.transform="translateY(0) scale(1)"},Q+ee*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,Q)=>setTimeout(()=>{V.style.opacity="1"},Q*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Q=>Q.style.opacity="1")},1250);function w(V,Q,J){const ee=document.getElementById(V);if(!ee)return;const ne=performance.now(),se=me=>{const we=Math.min(1,(me-ne)/J);ee.textContent=Math.round(Q*(1-Math.pow(1-we,3))),we<1?requestAnimationFrame(se):ee.textContent=Q};requestAnimationFrame(se)}setTimeout(()=>{w("pvp-score-me",m,800),w("pvp-score-opp",x,800)},1500);const T=r.p1Team.MIL||[],z=r.p2Team.MIL||[],S=E(T)+u(T),H=E(z)+u(z),G=S>=H?"p1":"p2";let F=r.boostValue;F==null&&(F=Qt(),r.boostValue=F,r.boostOwner=G,r.boostUsed=!1),ye=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(y?"me":"opp")),Q=e.querySelector("#duel-row-"+(y?"opp":"me")),J=document.getElementById("pvp-score-me"),ee=document.getElementById("pvp-score-opp"),ne=y?J:ee,se=y?ee:J;ne&&(ne.style.fontSize="80px",ne.style.color=y?"#FFD700":"#ff6b6b",ne.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),se&&(se.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),Q&&(Q.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var $e;const me=document.getElementById("pvp-duel-finale");if(!me)return;const we=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+F+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",_e=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+we+_e,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",($e=document.getElementById("pvp-start-match"))==null||$e.addEventListener("click",async()=>{const Ee=G;await te({phase:Ee+"-attack",attacker:Ee,round:1,boostValue:F,boostUsed:!1,boostOwner:Ee})})},600)},700)},2800)}function ve(b,k,E,u,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(T,z)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${z%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][z%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${y}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${u?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${k} – ${E}
      </div>
      ${b!=null&&b.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${b.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const w=()=>{v||(v=!0,x.remove(),setTimeout(()=>m(),50))};x.addEventListener("click",w),setTimeout(w,3500)}function he(b,k,E){var F,V;const u=(r.gcDefs||[]).find(Q=>{var J;return Q.name===b||((J=Q.name)==null?void 0:J.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[u==null?void 0:u.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[u==null?void 0:u.color]||"#b06ce0",y=(u==null?void 0:u.name)||b,h=(u==null?void 0:u.effect)||((F=Ve[b])==null?void 0:F.desc)||"",v=u!=null&&u.image_url?`/manager-wars/icons/${u.image_url}`:null,w=((V=Ve[b])==null?void 0:V.icon)||"⚡",z=k===n?"Vous":r[k+"Name"]||"Adversaire",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",S.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${z} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${w}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(S);let H=!1;const G=()=>{H||(H=!0,S.remove(),setTimeout(()=>E&&E(),50))};S.addEventListener("click",G),setTimeout(G,3e3)}function W(b,k){var S,H,G,F;const u=(r["gcCardsFull_"+n]||[]).find(V=>V.id===b),m=u==null?void 0:u._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",h=(m==null?void 0:m.name)||k,v=(m==null?void 0:m.effect)||((S=Ve[k])==null?void 0:S.desc)||"Carte spéciale.",w=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,T=((H=Ve[k])==null?void 0:H.icon)||"⚡",z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",z.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${y}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${w?`<img src="${w}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${v}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(z),(G=z.querySelector("#pvp-gc-back"))==null||G.addEventListener("click",()=>z.remove()),(F=z.querySelector("#pvp-gc-use"))==null||F.addEventListener("click",()=>{z.remove(),ie(b,k)})}function X(){var u;const b=r[n+"Team"],k=Object.entries(b).flatMap(([m,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:m})));if(!k.length)return;const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",E.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(m=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m._line]||"#555",y=ke(m,m._line)+(m.boost||0);return`<div class="bp-item" data-cid="${m.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(E),(u=E.querySelector("#bp-close"))==null||u.addEventListener("click",()=>E.remove()),E.querySelectorAll(".bp-item").forEach(m=>{m.addEventListener("click",async()=>{const x=m.dataset.cid,y=k.find(v=>v.cardId===x);if(!y)return;const h=(b[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+r.boostValue),E.remove(),await te({[n+"Team"]:b,boostUsed:!0})})})}function N(b=null){var H,G;if(!(r.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const E=r[n+"Team"],u=r["usedSubIds_"+n]||[],m=r.maxSubs||3;if(u.length>=m){p(`Maximum ${m} remplacements atteint`,"warning");return}const x=Object.entries(E).flatMap(([F,V])=>(V||[]).filter(Q=>Q.used).map(Q=>({...Q,_line:F}))),y=(r[n+"Subs"]||[]).filter(F=>!u.includes(F.cardId));if(!x.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){p("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(F=>F.cardId===b));const v=((H=x[h])==null?void 0:H._line)||((G=x[h])==null?void 0:G.job);let w=Math.max(0,y.findIndex(F=>F.job===v)),T=!1;const z=document.createElement("div");z.id="pvp-sub-overlay",z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function S(){var se,me,we,_e,$e,Ee;const F=x[h],V=y[w],Q=Math.min(130,Math.round((window.innerWidth-90)/2)),J=Math.round(Q*1.35),ee=ze=>`background:rgba(255,255,255,0.12);border:none;color:${ze?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ze?"default":"pointer"};flex-shrink:0`;z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${u.length}/${m})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ee(w===0)}" ${w===0?"disabled":""}>▲</button>
          <div>${V?We({...V,used:!1,boost:0},Q,J):"<div>—</div>"}</div>
          <button id="pin-down" style="${ee(w>=y.length-1)}" ${w>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${w+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ee(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${F?We({...F,used:!1,boost:0},Q,J):"<div>—</div>"}</div>
          <button id="pout-down" style="${ee(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(se=z.querySelector("#psub-close"))==null||se.addEventListener("click",()=>z.remove()),(me=z.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{h>0&&(h--,S())}),(we=z.querySelector("#pout-down"))==null||we.addEventListener("click",()=>{h<x.length-1&&(h++,S())}),(_e=z.querySelector("#pin-up"))==null||_e.addEventListener("click",()=>{w>0&&(w--,S())}),($e=z.querySelector("#pin-down"))==null||$e.addEventListener("click",()=>{w<y.length-1&&(w++,S())});const ne=(ze,Me,Ne,Se)=>{const He=z.querySelector("#"+ze);if(!He)return;let Re=0;He.addEventListener("touchstart",qe=>{Re=qe.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",qe=>{const Be=qe.changedTouches[0].clientY-Re;if(Math.abs(Be)<30)return;const Ze=Me();Be<0&&Ze<Se-1?(Ne(Ze+1),S()):Be>0&&Ze>0&&(Ne(Ze-1),S())},{passive:!0})};ne("pin-panel",()=>w,ze=>w=ze,y.length),ne("pout-panel",()=>h,ze=>h=ze,x.length),(Ee=z.querySelector("#psub-confirm"))==null||Ee.addEventListener("click",async ze=>{if(ze.preventDefault(),ze.stopPropagation(),T)return;T=!0;const Me=x[h],Ne=y[w];if(!Me||!Ne)return;const Se=Me._line,He=(E[Se]||[]).findIndex(Be=>Be.cardId===Me.cardId);if(He===-1){p("Erreur : joueur introuvable","error"),z.remove();return}const Re={...Ne,_line:Se,position:Me.position,used:!1,boost:0};E[Se].splice(He,1,Re);const qe=[...u,Ne.cardId];z.remove(),R(Me,Ne,async()=>{await te({[n+"Team"]:E,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:qe})})})}document.body.appendChild(z),S()}function R(b,k,E){const u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,w,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${w};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${u[v.job]||"#555"};border:3px solid ${w};position:relative;overflow:hidden;margin:0 auto">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(m);let y=!1;const h=()=>{y||(y=!0,m.remove(),setTimeout(()=>E(),50))};m.addEventListener("click",h),setTimeout(h,2200)}function Z(){var k;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",b.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pt(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(b),(k=b.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>b.remove())}function pe(){var E;const b=r.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",k.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${b.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...b].reverse().map(u=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${u.type==="goal"?"#FFD700":u.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${u.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(k),(E=k.querySelector("#pvp-hist-close"))==null||E.addEventListener("click",()=>k.remove())}async function de(){if(r.phase!==n+"-attack")return;const b=n==="p1"?"p2":"p1",k=(r.round||0)+1,E=[...r.log||[]];E.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const u=Fe(r),m=Le(b),x=u||!m?"finished":b+"-attack";await te({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:x,attacker:b,round:k,log:E}),x==="finished"&&await Je(r)}async function je(){const b=r[n+"Team"],k=!["GK","DEF","MIL","ATT"].some(x=>(r[o+"Team"][x]||[]).some(y=>!y.used)),E=(r["selected_"+n]||[]).map(x=>{const y=(b[x._role]||[]).find(S=>S.cardId===x.cardId)||x,h=k&&["GK","DEF"].includes(x._role),v=b[x._role]||[],w=v.findIndex(S=>S.cardId===x.cardId),T=lt(v.length),z=w>=0?T[w]:y._col??1;return{...y,_line:x._role,_col:z,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!E.length)return;const u=Bt(E,r.modifiers[n]||{});le(n,E.map(x=>x.cardId)),E.forEach(x=>{const y=(b[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),r["selected_"+n]=[],ae();const m=[...r.log||[]];if(k){const x=(r[n+"Score"]||0)+1,y=E.map(z=>({name:z.name,note:ke(z,z._line||"ATT"),portrait:Ge(z),job:z.job}));m.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:u.total,aiTotal:0});const h=(r.round||0)+1,v=n==="p1"?"p2":"p1",w={...r,[n+"Team"]:b,[n+"Score"]:x},T=Fe(w);C.add(h),ve(y,x,r[o+"Score"]||0,!0,async()=>{await te({[n+"Team"]:b,[n+"Score"]:x,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:T?"finished":v+"-attack",attacker:v,round:h,log:m}),T&&await Je({...r,[n+"Score"]:x})});return}m.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${u.total})`}),await te({[n+"Team"]:b,[o+"Team"]:r[o+"Team"],pendingAttack:{...u,players:E,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:m})}async function Ie(){const b=r[n+"Team"],k=(r["selected_"+n]||[]).map(F=>{const V=(b[F._role]||[]).find(se=>se.cardId===F.cardId)||F,Q=b[F._role]||[],J=Q.findIndex(se=>se.cardId===F.cardId),ee=lt(Q.length),ne=J>=0?ee[J]:V._col??1;return{...V,_line:F._role,_col:ne}}),E=Dt(k,r.modifiers[n]||{});le(n,k.map(F=>F.cardId)),k.forEach(F=>{const V=(b[F._role]||[]).find(Q=>Q.cardId===F.cardId);V&&(V.used=!0)}),r["selected_"+n]=[],ae();const u=Gt(r.pendingAttack.total,E.total,r.modifiers[n]||{}),m=r.pendingAttack.side,x=u==="attack"||(u==null?void 0:u.goal),y=m==="p1"?"p2":"p1",h=(r.round||0)+1,v=(r.pendingAttack.players||[]).map(F=>({name:F.name,note:ke(F,F._line||"ATT"),portrait:Ge(F),job:F.job})),w=[...r.log||[]];w.push({type:"duel",isGoal:x,homeScored:x&&m===n,text:x?`⚽ BUT de ${r[m+"Name"]} ! (${r.pendingAttack.total} vs ${E.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${E.total})`,homePlayers:v,aiPlayers:k.map(F=>({name:F.name,note:ke(F,F._line||"DEF"),portrait:Ge(F),job:F.job})),homeTotal:r.pendingAttack.total,aiTotal:E.total});const T=x?(r[m+"Score"]||0)+1:r[m+"Score"]||0,z={...r,[n+"Team"]:b,[m+"Score"]:T},S=Fe(z),H=S?"finished":y+"-attack",G=async()=>{await te({[n+"Team"]:b,[o+"Team"]:r[o+"Team"],[m+"Score"]:T,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:H,attacker:y,round:h,log:w}),(H==="finished"||S)&&await Je({...r,[m+"Score"]:T})};if(x){const F=m===n,V=F?T:r[n+"Score"]||0,Q=F?r[o+"Score"]||0:T;C.add(h),ve(v,V,Q,F,G)}else await G()}function Pe(b){return["MIL","ATT"].some(k=>(b[k]||[]).some(E=>!E.used))}function Oe(b){return["GK","DEF","MIL","ATT"].some(k=>(b[k]||[]).some(E=>!E.used))}function Ce(b){return Oe(b)&&!Pe(b)}function Le(b){const k=r[b+"Team"],E=r[(b==="p1"?"p2":"p1")+"Team"];return!!(Pe(k)||!Oe(E)&&Ce(k))}function Fe(b){const k=["MIL","ATT"].some(w=>(b.p1Team[w]||[]).some(T=>!T.used)),E=["MIL","ATT"].some(w=>(b.p2Team[w]||[]).some(T=>!T.used)),u=Oe(b.p1Team),m=Oe(b.p2Team);return!k&&!(!m&&u)&&(!E&&!(!u&&m))}function Ue(b){const k=b.p1Score||0,E=b.p2Score||0;return k===E?null:k>E?$.home_id:$.away_id}async function Je(b){try{const k=Ue(b),E=k?$.home_id===k?$.away_id:$.home_id:null;await A.from("matches").update({status:"finished",winner_id:k,home_score:b.p1Score||0,away_score:b.p2Score||0}).eq("id",i),k&&E&&Xt(k,E).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function j(){var m;const b=r[n+"Score"],k=r[o+"Score"],E=b>k,u=b===k;Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${E?"🏆":u?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${E?"Victoire !":u?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${b} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(m=document.getElementById("pvp-home"))==null||m.addEventListener("click",()=>{try{A.removeChannel(O)}catch{}Ke(e),s("home")})}ae()}const Ut="#1A6B3C",Ro="#D4A017";async function Oo(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;i?(t.state.params.openLeagueId=null,await At(e,t,i)):await Vt(e,t)}async function Vt(e,t){var n;const{state:i,toast:a}=t,c=i.profile.id,{data:l}=await A.from("mini_league_members").select("league_id, mini_leagues(*)").eq("user_id",c),{data:d}=await A.from("mini_leagues").select("*, mini_league_members(count)").eq("type","public").eq("status","waiting").order("created_at",{ascending:!1}).limit(20),s=(l||[]).map(o=>o.mini_leagues).filter(Boolean),p=(d||[]).filter(o=>!s.find(g=>g.id===o.id));e.innerHTML=`
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
          ${s.map(o=>qi(o,c,!0)).join("")}
        </div>`:""}

      ${p.length?`
        <div>
          <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Rejoindre une Mini League</div>
          ${p.map(o=>qi(o,c,!1)).join("")}
        </div>`:""}

      ${!s.length&&!p.length?`
        <div style="text-align:center;padding:40px;color:#aaa">
          <div style="font-size:48px;margin-bottom:12px">🏆</div>
          <div style="font-size:14px">Aucune Mini League disponible.</div>
          <div style="font-size:12px;margin-top:4px">Crée la première !</div>
        </div>`:""}
    </div>
  </div>`,(n=document.getElementById("ml-create-btn"))==null||n.addEventListener("click",()=>Ho(e,t)),e.querySelectorAll("[data-league-id]").forEach(o=>{o.addEventListener("click",()=>At(e,t,o.dataset.leagueId))}),e.querySelectorAll("[data-join]").forEach(o=>{o.addEventListener("click",g=>{g.stopPropagation(),hn(e,t,o.dataset.join,o.dataset.type)})})}function qi(e,t,i){const a={waiting:"🟡 En attente",active:"🟢 En cours",finished:"✅ Terminée"},c=e.mode==="aller-retour"?"Aller-Retour":"Aller";return`
  <div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <div style="font-size:15px;font-weight:900">${e.name}</div>
      <span style="font-size:11px;color:#888">${a[e.status]||e.status}</span>
    </div>
    <div style="display:flex;gap:12px;font-size:12px;color:#666;margin-bottom:${!i&&e.status==="waiting"?"10":"0"}px">
      <span>🔒 ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${c}</span>
      <span>👥 max ${e.max_players}</span>
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${!i&&e.status==="waiting"?`
    <button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%">Rejoindre</button>`:""}
  </div>`}function Ho(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>{a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})}),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,_,$,L;const{toast:a}=t,c=document.getElementById("ml-name").value.trim(),l=parseInt(document.getElementById("ml-max").value)||6,d=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",s=((_=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:_.value)||"aller",p=((L=($=document.getElementById("ml-pwd"))==null?void 0:$.value)==null?void 0:L.trim())||null;if(!c){a("Le nom est obligatoire","error");return}if(d==="private"&&!p){a("Mot de passe requis","error");return}const{data:n,error:o}=await A.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:d,password:p,mode:s,max_players:l}).select().single();if(o){a("Erreur : "+o.message,"error");return}await A.from("mini_league_members").insert({league_id:n.id,user_id:t.state.profile.id}),i.remove(),a("Mini League créée !","success"),At(e,t,n.id)})}async function hn(e,t,i,a){const{toast:c}=t;if(a==="private"){const d=prompt("Mot de passe de la Mini League :");if(d===null)return;const{data:s}=await A.from("mini_leagues").select("password,status,max_players").eq("id",i).single();if(!s){c("Mini League introuvable","error");return}if(s.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}if(s.password!==d){c("Mot de passe incorrect","error");return}}const{error:l}=await A.from("mini_league_members").insert({league_id:i,user_id:t.state.profile.id});if(l){c("Erreur : "+l.message,"error");return}c("Tu as rejoint la Mini League !","success"),At(e,t,i)}async function At(e,t,i){var r,f,I,M,B;const{state:a,toast:c,navigate:l}=t,d=a.profile.id,[{data:s},{data:p},{data:n}]=await Promise.all([A.from("mini_leagues").select("*").eq("id",i).single(),A.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),A.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){c("Mini League introuvable","error"),await Vt(e,t);return}const o=(p||[]).some(C=>C.user_id===d),g=s.creator_id===d,_=(p||[]).map(C=>C.user).filter(Boolean),$=Wo(_,n||[]),L=(n||[]).filter(C=>C.matchday===s.current_day);e.innerHTML=`
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
        <div style="font-size:14px;font-weight:900;margin-bottom:12px">👥 Joueurs (${_.length}/${s.max_players})</div>
        ${_.map(C=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${C.club_color2||Ut};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${C.club_color1||"#fff"}">
              ${(C.pseudo||"?").slice(0,2).toUpperCase()}
            </div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">${C.club_name||C.pseudo}</div>
              <div style="font-size:11px;color:#999">@${C.pseudo}</div>
            </div>
            ${C.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑 Créateur</span>':""}
          </div>`).join("")}
        ${g&&_.length>=2?`
          <button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">
            🚀 Lancer la Mini League (${_.length} joueurs)
          </button>`:""}
        ${o?"":'<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre</button>'}
        ${o&&!g?'<div style="text-align:center;font-size:12px;color:#aaa;margin-top:10px">En attente du créateur pour lancer la partie...</div>':""}
        ${g?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer la Mini League</button>':""}
      </div>`:""}

      <!-- JOURNÉE EN COURS -->
      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${L.map(C=>Bi(C,_,d,o)).join("")}
        ${g&&L.every(C=>C.status==="finished"||C.status==="bye")&&s.current_day<s.total_days?`
          <button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>`:""}
      </div>`:""}

      <!-- CLASSEMENT -->
      ${(s.status==="active"||s.status==="finished")&&$.length?`
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
            ${$.map((C,D)=>`
              <tr style="border-bottom:1px solid #f5f5f5;${C.userId===d?"background:#f0fdf4;":""}">
                <td style="padding:8px 4px 8px 0;font-weight:700;color:${D===0?Ro:D<3?Ut:"#555"}">${D+1}</td>
                <td style="padding:8px 4px">
                  <div style="font-weight:700;font-size:12px">${C.clubName}</div>
                  <div style="font-size:10px;color:#999">@${C.pseudo}</div>
                </td>
                <td style="text-align:center;padding:8px 4px">${C.played}</td>
                <td style="text-align:center;padding:8px 4px">${C.won}</td>
                <td style="text-align:center;padding:8px 4px">${C.drawn}</td>
                <td style="text-align:center;padding:8px 4px">${C.lost}</td>
                <td style="text-align:center;padding:8px 4px">${C.goalsFor}</td>
                <td style="text-align:center;padding:8px 4px">${C.goalsAgainst}</td>
                <td style="text-align:center;padding:8px 4px;color:${C.goalDiff>=0?Ut:"#cc2222"}">${C.goalDiff>=0?"+":""}${C.goalDiff}</td>
                <td style="text-align:center;padding:8px 4px;font-weight:900;font-size:15px">${C.points}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`:""}

      <!-- HISTORIQUE JOURNÉES -->
      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:s.current_day-1},(C,D)=>D+1).reverse().map(C=>{const D=(n||[]).filter(q=>q.matchday===C);return`<div style="margin-bottom:10px">
            <div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${C}</div>
            ${D.map(q=>Bi(q,_,d,!1,!0)).join("")}
          </div>`}).join("")}
      </div>`:""}

    </div>
  </div>`,(r=document.getElementById("ml-back"))==null||r.addEventListener("click",()=>Vt(e,t)),(f=document.getElementById("ml-start-btn"))==null||f.addEventListener("click",()=>Uo(e,t,s,_)),(I=document.getElementById("ml-next-day"))==null||I.addEventListener("click",()=>Ko(e,t,i)),(M=document.getElementById("ml-join-now"))==null||M.addEventListener("click",()=>hn(e,t,i,s.type)),(B=document.getElementById("ml-delete-btn"))==null||B.addEventListener("click",async()=>{if(!confirm(`Supprimer définitivement la Mini League "${s.name}" ? Cette action est irréversible.`))return;await A.from("mini_league_matches").delete().eq("league_id",i),await A.from("mini_league_members").delete().eq("league_id",i);const{error:C}=await A.from("mini_leagues").delete().eq("id",i);if(C){c("Erreur suppression : "+C.message,"error");return}c("Mini League supprimée","success"),Vt(e,t)}),e.querySelectorAll("[data-play-match]").forEach(C=>{C.addEventListener("click",()=>{const D=L.find(q=>q.id===C.dataset.playMatch);D&&Yo(e,t,D,s)})})}function Bi(e,t,i,a,c=!1){const l=g=>t.find(_=>_.id===g);if(e.is_bye){const g=l(e.home_id);return`<div style="padding:8px 10px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">
      🔵 ${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"} est exempté(e) cette journée
    </div>`}const d=l(e.home_id),s=l(e.away_id),p=e.home_id===i||e.away_id===i,n=p&&e.status==="pending"&&a&&!c,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    <div style="font-size:14px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Ut:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽ Jouer</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Uo(e,t,i,a){const{toast:c}=t,l=Vo(a.map(n=>n.id),i.mode),d=l.length,s=[];l.forEach((n,o)=>{n.forEach(g=>{s.push({league_id:i.id,matchday:o+1,home_id:g.home||g.bye,away_id:g.away||null,is_bye:!!g.bye,status:g.bye?"bye":"pending"})})});const{error:p}=await A.from("mini_league_matches").insert(s);if(p){c("Erreur génération calendrier : "+p.message,"error");return}await A.from("mini_leagues").update({status:"active",current_day:1,total_days:d}).eq("id",i.id),c("Mini League lancée ! Journée 1 commence.","success"),At(e,t,i.id)}function Vo(e,t){const a=e.length%2===0?[...e]:[...e,null],c=a.length,l=c-1,d=[];let s=a.slice(1);for(let p=0;p<l;p++){const n=[],o=[a[0],...s];for(let g=0;g<c/2;g++){const _=o[g],$=o[c-1-g];_===null?n.push({bye:$}):$===null?n.push({bye:_}):n.push({home:_,away:$})}d.push(n),s=[s[s.length-1],...s.slice(0,-1)]}if(t==="aller-retour"){const p=d.map(n=>n.map(o=>o.bye?o:{home:o.away,away:o.home}));return[...d,...p]}return d}async function Ko(e,t,i){const{data:a}=await A.from("mini_leagues").select("current_day,total_days").eq("id",i).single(),c=(a.current_day||0)+1,l=c>(a.total_days||0);await A.from("mini_leagues").update({current_day:l?a.total_days:c,status:l?"finished":"active"}).eq("id",i),t.toast(l?"🏆 Mini League terminée !":`Journée ${c} commencée !`,"success"),At(e,t,i)}async function Yo(e,t,i,a){const{navigate:c}=t;c("match-mini-league",{mlMatchId:i.id,leagueId:a.id})}function Wo(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const c=i[a.home_id],l=i[a.away_id];!c||!l||(c.played++,l.played++,c.goalsFor+=a.home_score,c.goalsAgainst+=a.away_score,l.goalsFor+=a.away_score,l.goalsAgainst+=a.home_score,a.home_score>a.away_score?(c.won++,c.points+=3,l.lost++):a.home_score<a.away_score?(l.won++,l.points+=3,c.lost++):(c.drawn++,c.points++,l.drawn++,l.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,l.goalDiff=l.goalsFor-l.goalsAgainst)}),Object.values(i).sort((a,c)=>c.points-a.points||c.goalDiff-a.goalDiff||c.goalsFor-a.goalsFor)}async function Di(e,t,i,a){var c,l;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const d=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(A.getChannels?A.getChannels():[]).forEach(p=>{const n=p.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&A.removeChannel(p)})}catch(s){console.warn("[FriendMatch] cleanup canaux:",s)}d&&(await A.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await A.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await ti(e,t,"random",({deckId:d,formation:s,starters:p,subsRaw:n,gcCardsEnriched:o,gcDefs:g})=>{const _=$=>Jo(e,t,d,s,p,n,$,g||[],i);if(!o.length){_([]);return}ei(e,o,_)})}async function Jo(e,t,i,a,c,l,d=[],s=[],p,n){const{state:o,navigate:g,toast:_}=t,$=o.profile.id;let L=!1,r=null;Qe(e);try{await A.rpc("cancel_matchmaking",{p_user_id:$})}catch{}try{await A.from("matchmaking_queue").delete().eq("user_id",$)}catch{}const{data:f}=await A.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",p).single();if(!f){_("Match introuvable","error"),Ke(e),g("mini-league");return}if(f.home_id!==$&&f.away_id!==$){_("Tu ne fais pas partie de ce match","error"),Ke(e),g("mini-league");return}const I=f.home_id===$,M=I?f.away:f.home,B=I?f.away_id:f.home_id,C=(q,O)=>{var te;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${f.matchday}</div>
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
      </div>`,(te=document.getElementById("lobby-cancel"))==null||te.addEventListener("click",()=>{L=!0,clearInterval(r),Ke(e),g("mini-league")})},D=async(q,O)=>{L=!0,clearInterval(r),await new Promise(te=>setTimeout(te,600)),e.isConnected&&Xo(e,t,q,O,d,s)};if(C(),I){let q=f.match_id;if(!q){const{data:te,error:ue}=await A.from("matches").insert({home_id:$,away_id:B,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(ue||!te){_("Erreur création match","error"),Ke(e),g("mini-league");return}q=te.id,await A.from("mini_league_matches").update({match_id:q,status:"playing"}).eq("id",p)}const O=q;r=setInterval(async()=>{if(L){clearInterval(r);return}const{data:te}=await A.from("matches").select("away_deck_id").eq("id",O).single();te!=null&&te.away_deck_id&&(clearInterval(r),D(O,!0))},1500)}else{let q=f.match_id;r=setInterval(async()=>{if(L){clearInterval(r);return}const{data:O}=await A.from("mini_league_matches").select("match_id").eq("id",p).single();O!=null&&O.match_id&&(clearInterval(r),q=O.match_id,await A.from("matches").update({away_deck_id:i}).eq("id",q),D(q,!1))},1500)}}async function Xo(e,t,i,a,c=[],l=[]){var E;const{state:d,navigate:s,toast:p}=t,n=((E=d.params)==null?void 0:E.leagueId)||null,o=a?"p1":"p2",g=a?"p2":"p1",_=(c||[]).map(u=>u.id),$=(c||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:L}=await A.from("matches").select("*").eq("id",i).single();if(!L){p("Match introuvable","error"),s("mini-league");return}async function r(){const[{data:u},{data:m},{data:x},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:L.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:L.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",L.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",L.away_id).single()]),h=S=>({cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map(S=>h(S)),w=((m==null?void 0:m.starters)||[]).map(S=>h(S)),T=(u==null?void 0:u.formation)||"4-4-2",z=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:xt(v,T),p2Team:xt(w,z),p1Subs:((u==null?void 0:u.subs)||[]).map(S=>h(S)),p2Subs:((m==null?void 0:m.subs)||[]).map(S=>h(S)),p1Formation:T,p2Formation:z,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?_:[],gc_p2:a?[]:_,gcCardsFull_p1:a?$:[],gcCardsFull_p2:a?[]:$,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let f=L.game_state&&Object.keys(L.game_state).length?L.game_state:null;if(!f)if(a){f=await r();const{data:u}=await A.from("matches").select("game_state").eq("id",i).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await A.from("matches").update({game_state:f,turn_user_id:L.home_id}).eq("id",i):f=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!f;u++){await new Promise(x=>setTimeout(x,400));const{data:m}=await A.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(f=m.game_state)}if(!f){p("Erreur de synchronisation","error"),s("mini-league");return}f.gc_p2=_,f.gcCardsFull_p2=$,await A.from("matches").update({game_state:f}).eq("id",i)}let I=!1,M=!1,B=!1,C=null,D=!1;const q=new Set,O=new Set;function te(u){var S,H;try{A.removeChannel(ue)}catch{}const m=f[o+"Score"]||0,x=f[g+"Score"]||0;if(!B){B=!0;const G=u.winner_id||(m>x?d.profile.id:x>m?"opp":null),F=G===d.profile.id?"win":G?"loss":null;F&&Hi(()=>Promise.resolve().then(()=>Pn),void 0).then(V=>V.applyOwnEvolution(d.profile.id,F)).catch(()=>{})}if(!M){const G=f.p1Score||0,F=f.p2Score||0,V=(f.usedGc_p1||[]).length,Q=(f.usedGc_p2||[]).length,J=u.winner_id||(G>F?L.home_id:F>G?L.away_id:null);(J?d.profile.id===J:d.profile.id<(a?L.away_id:L.home_id))&&(M=!0,Ki({player1Id:L.home_id,player2Id:L.away_id,score1:G,score2:F,gc1:V,gc2:Q}).catch(ne=>console.warn("[FriendMatch] updateStats:",ne)))}let y,h;u.winner_id?(y=u.winner_id===d.profile.id,h=!1):u.forfeit?(y=m>x,h=!1):(h=m===x,y=m>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=h?"🤝":y?"🏆":"😞",T=h?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",z=h?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${T}</div>
      <div style="font-size:18px">${f[o+"Name"]} ${m} – ${x} ${f[g+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(v),(H=v.querySelector("#pvp-end-home"))==null||H.addEventListener("click",()=>{v.remove(),Ke(e),n?s("mini-league",{openLeagueId:n}):s("mini-league")})}const ue=A.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},u=>{const m=u.new;try{if(m.status==="finished"||m.forfeit){if(I)return;I=!0,C&&(clearInterval(C),C=null),m.game_state&&(f=m.game_state),te(m);return}if(m.game_state){const x=f;f=m.game_state;const y=f._lastGC;if(y&&y.seq&&!O.has(y.seq)&&(O.add(y.seq),y.by!==o)){X(y.type,y.by,()=>ye());return}const h=x[o+"Score"]||0,v=x[g+"Score"]||0,w=f[o+"Score"]||0,T=f[g+"Score"]||0,z=w>h,S=T>v;if((z||S)&&!q.has(f.round)){q.add(f.round);const H=[...f.log||[]].reverse().find(F=>F.isGoal),G=((H==null?void 0:H.homePlayers)||[]).map(F=>({name:F.name,note:F.note,portrait:F.portrait,job:F.job}));W(G,w,T,z,()=>ye());return}ye()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function re(u){Object.assign(f,u),f.lastActionAt=new Date().toISOString();const{error:m}=await A.from("matches").update({game_state:f}).eq("id",i);m&&p("Erreur de synchronisation","error");try{ye()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function P(){if(I)return;I=!0,C&&(clearInterval(C),C=null);const u=a?L.away_id:L.home_id,m=a?"p2":"p1",x=a?"p1":"p2",y={...f,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{A.removeChannel(ue)}catch{}setTimeout(()=>{Ke(e),s("mini-league")},800)}const ie={BOOST_STAT:({value:u=1,count:m=1,roles:x=[]},y,h)=>{const v=y[o+"Team"],w=Object.entries(v).filter(([T])=>!x.length||x.includes(T)).flatMap(([T,z])=>z.filter(S=>!S.used).map(S=>({...S,_line:T})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(y);return}le(w,m,`Choisir ${m} joueur(s) à booster (+${u})`,T=>{T.forEach(z=>{const S=(v[z._line]||[]).find(H=>H.cardId===z.cardId);S&&(S.boost=(S.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${S.name}`,type:"info"}))}),y[o+"Team"]=v,h(y)})},DEBUFF_STAT:({value:u=1,count:m=1,roles:x=[],target:y="ai"},h,v)=>{const w=y==="home"?o:g,T=h[w+"Team"],z=y==="home"?"allié":"adverse",S=Object.entries(T).filter(([H])=>!x.length||x.includes(H)).flatMap(([H,G])=>G.filter(F=>!F.used).map(F=>({...F,_line:H})));if(!S.length){h.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),v(h);return}le(S,m,`Choisir ${m} joueur(s) ${z}(s) (-${u})`,H=>{H.forEach(G=>{const F=(T[G._line]||[]).find(V=>V.cardId===G.cardId);F&&(F.boost=(F.boost||0)-u,h.log.push({text:`🎯 -${u} sur ${F.name}`,type:"info"}))}),h[w+"Team"]=T,v(h)})},GRAY_PLAYER:({count:u=1,roles:m=[],target:x="ai"},y,h)=>{const v=x==="home"?o:g,w=y[v+"Team"],T=x==="home"?"allié":"adverse",z=Object.entries(w).filter(([S])=>!m.length||m.includes(S)).flatMap(([S,H])=>H.filter(G=>!G.used).map(G=>({...G,_line:S})));if(!z.length){y.log.push({text:`❌ Aucun joueur ${T}`,type:"info"}),h(y);return}le(z,u,`Choisir ${u} joueur(s) ${T}(s) à exclure`,S=>{S.forEach(H=>{const G=(w[H._line]||[]).find(F=>F.cardId===H.cardId);G&&(G.used=!0,y.log.push({text:`❌ ${G.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,h(y)})},REVIVE_PLAYER:({count:u=1,roles:m=[]},x,y)=>{const h=x[o+"Team"],v=Object.entries(h).filter(([w])=>!m.length||m.includes(w)).flatMap(([w,T])=>T.filter(z=>z.used).map(z=>({...z,_line:w})));if(!v.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(x);return}le(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(T=>{const z=(h[T._line]||[]).find(S=>S.cardId===T.cardId);z&&(z.used=!1,x.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=h,y(x)})},REMOVE_GOAL:({},u,m)=>{const x=g+"Score";u[x]>0?(u[x]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(u)},ADD_GOAL_DRAW:({},u,m)=>{u[o+"Score"]===u[g+"Score"]?(u[o+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(u)},ADD_SUB:({value:u=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+u,m.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},u,m)=>m(u)};function le(u,m,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var z,S;const T=u.map(H=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[H._line]||"#555",F=ke(H,H._line)+(H.boost||0),Q=v.find(ee=>ee.cardId===H.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=H.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${H.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Q};background:${G};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${H.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${H._line}</div>
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
        </div>`,(z=h.querySelector("#pp-close"))==null||z.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(H=>{H.addEventListener("click",()=>{const G=H.dataset.cid,F=u.find(Q=>Q.cardId===G),V=v.findIndex(Q=>Q.cardId===G);F&&(V>-1?v.splice(V,1):v.length<m&&v.push(F),w())})}),(S=h.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{h.remove(),y(v)})}w(),document.body.appendChild(h)}async function U(u,m){const y=(f["gcCardsFull_"+o]||[]).find(T=>T.id===u),h=(y==null?void 0:y._gcDef)||(f.gcDefs||[]).find(T=>{var z;return T.name===m||((z=T.name)==null?void 0:z.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),v=[...f["usedGc_"+o]||[],u],w={type:m,by:o,seq:(f._gcAnimSeq||0)+1};O.add(w.seq),X(m,o,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const z=ie[h.effect_type];if(z){const S={...f};z(h.effect_params||{},S,async H=>{H["usedGc_"+o]=v,H._lastGC=w,H._gcAnimSeq=w.seq,await re(H)});return}}const T={...f};switch(m){case"Remplacement+":T.maxSubs=(T.maxSubs||3)+1,T.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=g+"Score";T[z]>0&&(T[z]--,T.log.push({text:"🚫 But annulé",type:"info"}));break}}T["usedGc_"+o]=v,T._lastGC=w,T._gcAnimSeq=w.seq,await re(T)})}function ae(u,m){const x="usedCardIds_"+u,y=new Set(f[x]||[]);m.forEach(h=>y.add(h)),f[x]=[...y]}function fe(){for(const u of["p1","p2"]){const m=new Set(f["usedCardIds_"+u]||[]),x=f[u+"Team"];if(x)for(const y of["GK","DEF","MIL","ATT"])(x[y]||[]).forEach(h=>{h.used=m.has(h.cardId)})}}function ye(){var it,ft,oe,K,ce,ge;if(f.phase==="reveal")return Te();if(f.phase==="midfield")return he();if(f.phase==="finished")return k();const u=f[o+"Team"],m=f[g+"Team"];fe();const x=f[o+"Score"],y=f[g+"Score"],h=f[o+"Name"],v=f[g+"Name"],w=f.phase===o+"-attack",T=f.phase===o+"-defense",z=Array.isArray(f["selected_"+o])?f["selected_"+o]:[],S=z.map(Y=>Y.cardId),H=window.innerWidth>=700,G=f[o+"Subs"]||[],F=f["usedSubIds_"+o]||[],V=G.filter(Y=>!F.includes(Y.cardId)),Q=f["gcCardsFull_"+o]||[],J=f["usedGc_"+o]||[],ee=Q.filter(Y=>!J.includes(Y.id)),ne=f.boostOwner===o&&!f.boostUsed,se=!["GK","DEF","MIL","ATT"].some(Y=>(m[Y]||[]).some(xe=>!xe.used)),me=[...u.MIL||[],...u.ATT||[]].filter(Y=>!Y.used),we=w&&se&&me.length===0?[...u.GK||[],...u.DEF||[]].filter(Y=>!Y.used).map(Y=>Y.cardId):[];function _e(Y,xe,Ae){var wi,_i;const be=Y._gcDef,et={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[be==null?void 0:be.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ot={purple:"#b06ce0",light_blue:"#00d4ef"}[be==null?void 0:be.color]||"#b06ce0",st=(be==null?void 0:be.name)||Y.gc_type,rt=(be==null?void 0:be.effect)||((wi=Ve[Y.gc_type])==null?void 0:wi.desc)||"",ct=be!=null&&be.image_url?`/manager-wars/icons/${be.image_url}`:null,yt=((_i=Ve[Y.gc_type])==null?void 0:_i.icon)||"⚡",ht=Math.round(Ae*.22),gt=Math.round(Ae*.22),wt=Ae-ht-gt,wn=st.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Y.id}" data-gc-type="${Y.gc_type}"
        style="box-sizing:border-box;width:${xe}px;height:${Ae}px;border-radius:10px;border:2px solid ${ot};background:${et};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ht}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${wn}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${xe-6}px">${st}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${wt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${xe-10}px;max-height:${wt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(wt*.55)}px">${yt}</span>`}
        </div>
        <div style="height:${gt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${rt.slice(0,38)}</span>
        </div>
      </div>`}function $e(Y,xe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Y}px;height:${xe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(xe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(xe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(xe*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const Ee=(Y,xe)=>xe?$e(130,175):_e(Y,130,175),ze=(Y,xe)=>xe?$e(68,95):_e(Y,68,95),Me=H?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ne=w?Ue(o)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:T?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Se=w&&!Ue(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||T?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",He=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${H?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${V.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':V.map(Y=>`<div class="pvp-sub-btn" data-sub-id="${Y.cardId}" style="cursor:pointer;flex-shrink:0">${We(Y,H?76:44,H?100:58)}</div>`).join("")}
    </div>`,Re=w?"attack":T?"defense":"idle",qe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ut(u,f[o+"Formation"],Re,S,300,300,we)}
      </div>
    </div>`;function Be(Y){if(Y.type==="duel"&&(Y.homeTotal!=null||Y.aiTotal!=null)){const xe=(Y.homeTotal||0)>=(Y.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Y.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Y.homePlayers||[]).map(Ae=>dt(Ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${xe?20:14}px;font-weight:900;color:${xe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Y.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${xe?14:20}px;font-weight:900;color:${xe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Y.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Y.aiPlayers||[]).map(Ae=>dt(Ae)).join("")}
            </div>
          </div>
          ${Y.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Y.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Y.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Y.type==="goal"?700:400};padding:3px 2px">${Y.text||""}</div>`}const Ze=(()=>{var xe,Ae;if(T&&((xe=f.pendingAttack)!=null&&xe.players)){const be=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${nt((be.players||[]).map(et=>({...et,used:!1})),"#ff6b6b",be.total)}
        </div>`}if(w&&((Ae=f.pendingAttack)!=null&&Ae.players)){const be=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((be.players||[]).map(et=>({...et,used:!1})),"#00ff88",be.total)}
        </div>`}const Y=(f.log||[]).slice(-1)[0];return Y?'<div style="padding:2px 4px">'+Be(Y)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),tt=`
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
        ▼ Historique (${(f.log||[]).length})
      </button>`;Qe(e),e.style.overflow="hidden",H?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${He}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${qe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ne}${Se}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ee.map(Y=>Ee(Y,!1)).join("")}
            ${ne?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ut(u,f[o+"Formation"],Re,S,300,300,we)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ee.map(Y=>ze(Y,!1)).join("")}
            ${ne?ze(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&V.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&V.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&V.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&V.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${V.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(f["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(f["usedSubIds_"+o]||[]).length}/${f.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ne}${Se}</div>
        </div>
      </div>`;function Xe(){const Y=e.querySelector(".match-screen");if(!Y)return;const xe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Y.style.height=xe+"px",Y.style.minHeight=xe+"px",Y.style.maxHeight=xe+"px",Y.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),be=e.querySelector("#mobile-play-area");Ae&&be&&(be.style.paddingBottom=Ae.offsetHeight+"px")}if(Xe(),setTimeout(Xe,120),setTimeout(Xe,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Xe),window.visualViewport.addEventListener("scroll",Xe)),window.addEventListener("resize",Xe)),function(){const xe=e.querySelector(".terrain-wrapper svg");xe&&(xe.removeAttribute("width"),xe.removeAttribute("height"),xe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",xe.setAttribute("viewBox","-26 -26 352 352"),xe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Y=>{Y.addEventListener("click",()=>{if(!w&&!T)return;const xe=Y.dataset.cardId,Ae=Y.dataset.role,be=(u[Ae]||[]).find(rt=>rt.cardId===xe);if(!be||be.used)return;const et=we.includes(xe);if(w&&!["MIL","ATT"].includes(Ae)&&!et)return;Array.isArray(f["selected_"+o])||(f["selected_"+o]=[]);const ot=f["selected_"+o],st=ot.findIndex(rt=>rt.cardId===xe);st>-1?ot.splice(st,1):ot.length<3&&ot.push({...be,_role:Ae}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(Y=>{Y.addEventListener("click",()=>Z(Y.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Y=>{Y.addEventListener("click",()=>Z())}),(it=e.querySelector("#pvp-sub-open"))==null||it.addEventListener("click",()=>Z()),e.querySelectorAll(".pvp-gc-mini").forEach(Y=>{Y.addEventListener("click",()=>N(Y.dataset.gcId,Y.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(oe=e.querySelector("#pvp-action"))==null||oe.addEventListener("click",Y=>{w?Y.currentTarget.dataset.pass==="1"||!Ue(o)?Ie():Pe():T&&Oe()}),(K=e.querySelector("#pvp-quit"))==null||K.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&P()}),(ce=e.querySelector("#pvp-view-opp"))==null||ce.addEventListener("click",()=>de()),(ge=e.querySelector("#pvp-toggle-history"))==null||ge.addEventListener("click",()=>je()),C&&(clearInterval(C),C=null),(w||T)&&!I){let Y=30,xe=!1;const Ae=()=>document.getElementById("pvp-timer"),be=()=>{Ae()&&(Ae().textContent=Y+"s",Ae().style.color=xe?"#ff4444":"#fff")};be(),C=setInterval(()=>{Y--,Y<0?xe?(clearInterval(C),C=null,w&&!Ue(o)?Ie():P()):(xe=!0,Y=15,be()):be()},1e3)}}function Te(){Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${f[g+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${pt(f[g+"Team"],f[g+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await re({phase:"midfield"})},5e3)}let ve=!1;function he(){if(ve)return;const u=f[o+"Team"].MIL||[],m=f[g+"Team"].MIL||[];function x(ee){return ee.reduce((ne,se)=>ne+ke(se,"MIL"),0)}function y(ee){let ne=0;for(let se=0;se<ee.length-1;se++){const me=at(ee[se],ee[se+1]);me==="#00ff88"?ne+=2:me==="#FFD700"&&(ne+=1)}return ne}const h=x(u)+y(u),v=x(m)+y(m),w=h>=v;function T(ee,ne,se){return`<div id="duel-row-${se}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ee.map((me,we)=>{const _e=we<ee.length-1?at(me,ee[we+1]):null,$e=!_e||_e==="#ff3333"||_e==="#cc2222",Ee=_e==="#00ff88"?"+2":_e==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${se}" data-idx="${we}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...me,note:ke(me,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${we<ee.length-1?`<div class="duel-link duel-link-${se}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${$e?"rgba(255,255,255,0.12)":_e};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${$e?"none":`0 0 8px ${_e}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${_e}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${se}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(ee)} + ${y(ee)} liens = <b style="color:#fff">${x(ee)+y(ee)}</b>
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
      ${T(u,f[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${T(m,f[g+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(ee,ne)=>e.querySelectorAll(ee).forEach((se,me)=>{setTimeout(()=>{se.style.opacity="1",se.style.transform="translateY(0) scale(1)"},ne+me*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ee,ne)=>setTimeout(()=>{ee.style.opacity="1"},ne*70)),900),setTimeout(()=>{const ee=e.querySelector("#pvp-vs");ee&&(ee.style.opacity="1",ee.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function S(ee,ne,se){const me=document.getElementById(ee);if(!me)return;const we=performance.now(),_e=$e=>{const Ee=Math.min(1,($e-we)/se);me.textContent=Math.round(ne*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(_e):me.textContent=ne};requestAnimationFrame(_e)}setTimeout(()=>{S("pvp-score-me",h,800),S("pvp-score-opp",v,800)},1500);const H=f.p1Team.MIL||[],G=f.p2Team.MIL||[],F=x(H)+y(H),V=x(G)+y(G),Q=F>=V?"p1":"p2";let J=f.boostValue;J==null&&(J=Qt(),f.boostValue=J,f.boostOwner=Q,f.boostUsed=!1),ve=!0,setTimeout(()=>{const ee=e.querySelector("#duel-row-"+(w?"me":"opp")),ne=e.querySelector("#duel-row-"+(w?"opp":"me")),se=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),we=w?se:me,_e=w?me:se;we&&(we.style.fontSize="80px",we.style.color=w?"#FFD700":"#ff6b6b",we.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),_e&&(_e.style.opacity="0.25"),setTimeout(()=>{ee&&(ee.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ee.style.zIndex="5"),setTimeout(()=>{const $e=document.getElementById("duel-shock");$e&&($e.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const $e=document.getElementById("pvp-duel-finale");if(!$e)return;const Ee=f.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ze=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;$e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+f[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[g+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+ze,$e.style.transition="opacity .45s ease",$e.style.opacity="1",$e.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const Ne=Q;await re({phase:Ne+"-attack",attacker:Ne,round:1,boostValue:J,boostUsed:!1,boostOwner:Ne})})},600)},700)},2800)}function W(u,m,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(H,G)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${G%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][G%8]}</div>`).join(""),T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${m} – ${x}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(H=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${T[H.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${H.portrait?`<img src="${H.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(H.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const S=()=>{z||(z=!0,v.remove(),setTimeout(()=>h(),50))};v.addEventListener("click",S),setTimeout(S,3500)}function X(u,m,x){var J,ee;const y=(f.gcDefs||[]).find(ne=>{var se;return ne.name===u||((se=ne.name)==null?void 0:se.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,T=(y==null?void 0:y.effect)||((J=Ve[u])==null?void 0:J.desc)||"",z=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,S=((ee=Ve[u])==null?void 0:ee.icon)||"⚡",G=m===o?"Vous":f[m+"Name"]||"Adversaire",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",F.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${G} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${T}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(F);let V=!1;const Q=()=>{V||(V=!0,F.remove(),setTimeout(()=>x&&x(),50))};F.addEventListener("click",Q),setTimeout(Q,3e3)}function N(u,m){var F,V,Q,J;const y=(f["gcCardsFull_"+o]||[]).find(ee=>ee.id===u),h=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",T=(h==null?void 0:h.name)||m,z=(h==null?void 0:h.effect)||((F=Ve[m])==null?void 0:F.desc)||"Carte spéciale.",S=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,H=((V=Ve[m])==null?void 0:V.icon)||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${H}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(G),(Q=G.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>G.remove()),(J=G.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{G.remove(),U(u,m)})}function R(){var y;const u=f[o+"Team"],m=Object.entries(u).flatMap(([h,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:h})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(h=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",w=ke(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(y=x.querySelector("#bp-close"))==null||y.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const v=h.dataset.cid,w=m.find(z=>z.cardId===v);if(!w)return;const T=(u[w._line]||[]).find(z=>z.cardId===v);T&&(T.boost=(T.boost||0)+f.boostValue),x.remove(),await re({[o+"Team"]:u,boostUsed:!0})})})}function Z(u=null){var V,Q;if(!(f.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const x=f[o+"Team"],y=f["usedSubIds_"+o]||[],h=f.maxSubs||3;if(y.length>=h){p(`Maximum ${h} remplacements atteint`,"warning");return}const v=Object.entries(x).flatMap(([J,ee])=>(ee||[]).filter(ne=>ne.used).map(ne=>({...ne,_line:J}))),w=(f[o+"Subs"]||[]).filter(J=>!y.includes(J.cardId));if(!v.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let T=Math.max(0,v.findIndex(J=>J.cardId===u));const z=((V=v[T])==null?void 0:V._line)||((Q=v[T])==null?void 0:Q.job);let S=Math.max(0,w.findIndex(J=>J.job===z)),H=!1;const G=document.createElement("div");G.id="pvp-sub-overlay",G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function F(){var _e,$e,Ee,ze,Me,Ne;const J=v[T],ee=w[S],ne=Math.min(130,Math.round((window.innerWidth-90)/2)),se=Math.round(ne*1.35),me=Se=>`background:rgba(255,255,255,0.12);border:none;color:${Se?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Se?"default":"pointer"};flex-shrink:0`;G.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${ee?We({...ee,used:!1,boost:0},ne,se):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(S>=w.length-1)}" ${S>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me(T===0)}" ${T===0?"disabled":""}>▲</button>
          <div>${J?We({...J,used:!1,boost:0},ne,se):"<div>—</div>"}</div>
          <button id="pout-down" style="${me(T>=v.length-1)}" ${T>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${T+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(_e=G.querySelector("#psub-close"))==null||_e.addEventListener("click",()=>G.remove()),($e=G.querySelector("#pout-up"))==null||$e.addEventListener("click",()=>{T>0&&(T--,F())}),(Ee=G.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{T<v.length-1&&(T++,F())}),(ze=G.querySelector("#pin-up"))==null||ze.addEventListener("click",()=>{S>0&&(S--,F())}),(Me=G.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{S<w.length-1&&(S++,F())});const we=(Se,He,Re,qe)=>{const Be=G.querySelector("#"+Se);if(!Be)return;let Ze=0;Be.addEventListener("touchstart",tt=>{Ze=tt.touches[0].clientY},{passive:!0}),Be.addEventListener("touchend",tt=>{const Xe=tt.changedTouches[0].clientY-Ze;if(Math.abs(Xe)<30)return;const it=He();Xe<0&&it<qe-1?(Re(it+1),F()):Xe>0&&it>0&&(Re(it-1),F())},{passive:!0})};we("pin-panel",()=>S,Se=>S=Se,w.length),we("pout-panel",()=>T,Se=>T=Se,v.length),(Ne=G.querySelector("#psub-confirm"))==null||Ne.addEventListener("click",async Se=>{if(Se.preventDefault(),Se.stopPropagation(),H)return;H=!0;const He=v[T],Re=w[S];if(!He||!Re)return;const qe=He._line,Be=(x[qe]||[]).findIndex(Xe=>Xe.cardId===He.cardId);if(Be===-1){p("Erreur : joueur introuvable","error"),G.remove();return}const Ze={...Re,_line:qe,position:He.position,used:!1,boost:0};x[qe].splice(Be,1,Ze);const tt=[...y,Re.cardId];G.remove(),pe(He,Re,async()=>{await re({[o+"Team"]:x,[g+"Team"]:f[g+"Team"],["usedSubIds_"+o]:tt})})})}document.body.appendChild(G),F()}function pe(u,m,x){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(z,S,H)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${H}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[z.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Ge(z)?`<img src="${Ge(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let w=!1;const T=()=>{w||(w=!0,h.remove(),setTimeout(()=>x(),50))};h.addEventListener("click",T),setTimeout(T,2200)}function de(){var m;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[g+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pt(f[g+"Team"],f[g+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(m=u.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>u.remove())}function je(){var y;const u=f.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=h=>{var w,T,z;if(h.type==="duel"){const S=h.isGoal,H=h.homeScored&&o==="p1"||!h.homeScored&&S&&o==="p2",G=h.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",F=S?H?"⚽ BUT !":"⚽ BUT adversaire !":(w=h.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${G};margin-bottom:4px">
          <div style="font-size:9px;color:${G};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${F}</div>
          ${(T=h.homePlayers)!=null&&T.length?`<div style="margin-bottom:3px">${nt(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
          ${(z=h.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${nt(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
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
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(x).join("")}
      </div>`,document.body.appendChild(m),(y=m.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>m.remove())}async function Ie(){if(f.phase!==o+"-attack")return;const u=o==="p1"?"p2":"p1",m=(f.round||0)+1,x=[...f.log||[]];x.push({type:"info",text:`⏭️ ${f[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Je(f),h=Ue(u),v=y||!h?"finished":u+"-attack";await re({["selected_"+o]:[],modifiers:{...f.modifiers,[o]:{}},pendingAttack:null,phase:v,attacker:u,round:m,log:x}),v==="finished"&&await b(f)}async function Pe(){const u=f[o+"Team"],m=!["GK","DEF","MIL","ATT"].some(v=>(f[g+"Team"][v]||[]).some(w=>!w.used)),x=(f["selected_"+o]||[]).map(v=>{const w=(u[v._role]||[]).find(F=>F.cardId===v.cardId)||v,T=m&&["GK","DEF"].includes(v._role),z=u[v._role]||[],S=z.findIndex(F=>F.cardId===v.cardId),H=lt(z.length),G=S>=0?H[S]:w._col??1;return{...w,_line:v._role,_col:G,...T?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!x.length)return;const y=Bt(x,f.modifiers[o]||{});ae(o,x.map(v=>v.cardId)),x.forEach(v=>{const w=(u[v._role]||[]).find(T=>T.cardId===v.cardId);w&&(w.used=!0)}),f["selected_"+o]=[],ye();const h=[...f.log||[]];if(m){const v=(f[o+"Score"]||0)+1,w=x.map(G=>({name:G.name,note:ke(G,G._line||"ATT"),portrait:Ge(G),job:G.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const T=(f.round||0)+1,z=o==="p1"?"p2":"p1",S={...f,[o+"Team"]:u,[o+"Score"]:v},H=Je(S);q.add(T),W(w,v,f[g+"Score"]||0,!0,async()=>{await re({[o+"Team"]:u,[o+"Score"]:v,["selected_"+o]:[],modifiers:{...f.modifiers,[o]:{}},pendingAttack:null,phase:H?"finished":z+"-attack",attacker:z,round:T,log:h}),H&&await b({...f,[o+"Score"]:v})});return}h.push({type:"pending",text:`⚔️ ${f[o+"Name"]} attaque (${y.total})`}),await re({[o+"Team"]:u,[g+"Team"]:f[g+"Team"],pendingAttack:{...y,players:x,side:o},["selected_"+o]:[],modifiers:{...f.modifiers,[o]:{}},phase:g+"-defense",log:h})}async function Oe(){const u=f[o+"Team"],m=(f["selected_"+o]||[]).map(J=>{const ee=(u[J._role]||[]).find(_e=>_e.cardId===J.cardId)||J,ne=u[J._role]||[],se=ne.findIndex(_e=>_e.cardId===J.cardId),me=lt(ne.length),we=se>=0?me[se]:ee._col??1;return{...ee,_line:J._role,_col:we}}),x=Dt(m,f.modifiers[o]||{});ae(o,m.map(J=>J.cardId)),m.forEach(J=>{const ee=(u[J._role]||[]).find(ne=>ne.cardId===J.cardId);ee&&(ee.used=!0)}),f["selected_"+o]=[],ye();const y=Gt(f.pendingAttack.total,x.total,f.modifiers[o]||{}),h=f.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=h==="p1"?"p2":"p1",T=(f.round||0)+1,z=(f.pendingAttack.players||[]).map(J=>({name:J.name,note:ke(J,J._line||"ATT"),portrait:Ge(J),job:J.job})),S=[...f.log||[]];S.push({type:"duel",isGoal:v,homeScored:v&&h===o,text:v?`⚽ BUT de ${f[h+"Name"]} ! (${f.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${x.total})`,homePlayers:z,aiPlayers:m.map(J=>({name:J.name,note:ke(J,J._line||"DEF"),portrait:Ge(J),job:J.job})),homeTotal:f.pendingAttack.total,aiTotal:x.total});const H=v?(f[h+"Score"]||0)+1:f[h+"Score"]||0,G={...f,[o+"Team"]:u,[h+"Score"]:H},F=Je(G),V=F?"finished":w+"-attack",Q=async()=>{await re({[o+"Team"]:u,[g+"Team"]:f[g+"Team"],[h+"Score"]:H,["selected_"+o]:[],modifiers:{...f.modifiers,[o]:{}},pendingAttack:null,phase:V,attacker:w,round:T,log:S}),(V==="finished"||F)&&await b({...f,[h+"Score"]:H})};if(v){const J=h===o,ee=J?H:f[o+"Score"]||0,ne=J?f[g+"Score"]||0:H;q.add(T),W(z,ee,ne,J,Q)}else await Q()}function Ce(u){return["MIL","ATT"].some(m=>(u[m]||[]).some(x=>!x.used))}function Le(u){return["GK","DEF","MIL","ATT"].some(m=>(u[m]||[]).some(x=>!x.used))}function Fe(u){return Le(u)&&!Ce(u)}function Ue(u){const m=f[u+"Team"],x=f[(u==="p1"?"p2":"p1")+"Team"];return!!(Ce(m)||!Le(x)&&Fe(m))}function Je(u){const m=["MIL","ATT"].some(S=>(u.p1Team[S]||[]).some(H=>!H.used)),x=["MIL","ATT"].some(S=>(u.p2Team[S]||[]).some(H=>!H.used)),y=Le(u.p1Team),h=Le(u.p2Team);return!m&&!(!h&&y)&&(!x&&!(!y&&h))}function j(u){const m=u.p1Score||0,x=u.p2Score||0;return m===x?null:m>x?L.home_id:L.away_id}async function b(u){try{const m=j(u),x=m?L.home_id===m?L.away_id:L.home_id:null,y=u.p1Score||0,h=u.p2Score||0;await A.from("matches").update({status:"finished",winner_id:m,home_score:y,away_score:h}).eq("id",i);const{data:v}=await A.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(v){await A.from("mini_league_matches").update({home_score:y,away_score:h,status:"finished"}).eq("id",v.id);const{data:w}=await A.from("mini_league_matches").select("id, status").eq("league_id",v.league_id).eq("matchday",v.matchday);if((w||[]).every(z=>z.status==="finished"||z.status==="bye")){const{data:z}=await A.from("mini_leagues").select("current_day,total_days").eq("id",v.league_id).single();if(z){const S=(z.current_day||0)+1,H=S>(z.total_days||0);await A.from("mini_leagues").update({current_day:H?z.total_days:S,status:H?"finished":"active"}).eq("id",v.league_id)}}}m&&x&&Xt(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function k(){var h;const u=f[o+"Score"],m=f[g+"Score"],x=u>m,y=u===m;Qe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{A.removeChannel(ue)}catch{}Ke(e),s("mini-league",n?{openLeagueId:n}:{})})}ye()}const Zo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function _t(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Gi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Ot(e,t){const a=t?Zo[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Pi(e){const i=Wt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ni(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function Qo(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await vi(e,t)}async function vi(e,t){const{state:i,toast:a}=t,{data:c}=await A.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:l}=await A.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(c||[]).filter(r=>r.seller_id!==i.profile.id),s=l||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${d.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let p="buy";const n=()=>{var r,f,I,M,B,C,D;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((f=document.getElementById("flt-club"))==null?void 0:f.value)||"").toLowerCase().trim(),country:(((I=document.getElementById("flt-country"))==null?void 0:I.value)||"").toLowerCase().trim(),job:((M=document.getElementById("flt-job"))==null?void 0:M.value)||"",rarity:((B=document.getElementById("flt-rarity"))==null?void 0:B.value)||"",note1:parseInt((C=document.getElementById("flt-note1"))==null?void 0:C.value)||0,note2:parseInt((D=document.getElementById("flt-note2"))==null?void 0:D.value)||0}};function o(r){const f=n();return r.filter(I=>{var te,ue;const M=(te=I.card)==null?void 0:te.player;if(!M)return!1;const B=`${M.firstname} ${M.surname_encoded}`.toLowerCase(),C=(((ue=M.clubs)==null?void 0:ue.encoded_name)||"").toLowerCase(),D=(M.country_code||"").toLowerCase(),q=_t(M,M.job),O=M.job2?_t(M,M.job2):0;return!(f.name&&!B.includes(f.name)||f.club&&!C.includes(f.club)||f.country&&!D.includes(f.country)||f.job&&M.job!==f.job||f.rarity&&M.rarity!==f.rarity||f.note1&&q<f.note1||f.note2&&O<f.note2)})}function g(r){var C,D,q;const f=(C=r.card)==null?void 0:C.player;if(!f)return"";const I=_t(f,f.job),M=f.job2?_t(f,f.job2):0,B=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Gi(f.rarity)}
      ${Ot(I,f.job)}
      ${Ot(M,f.job2||null)}
      ${Pi(f.country_code)}
      ${Ni((D=f.clubs)==null?void 0:D.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.firstname} ${f.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((q=r.seller)==null?void 0:q.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${B?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${B?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function _(r){var C,D,q;const f=(C=r.card)==null?void 0:C.player;if(!f)return"";const I=_t(f,f.job),M=f.job2?_t(f,f.job2):0,B=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${B?"opacity:0.7":""}">
      ${Gi(f.rarity)}
      ${Ot(I,f.job)}
      ${Ot(M,f.job2||null)}
      ${Pi(f.country_code)}
      ${Ni((D=f.clubs)==null?void 0:D.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.firstname} ${f.surname_encoded}</div>
        <div style="font-size:10px;color:${B?"#22c55e":"#999"};margin-top:1px">
          ${B?`✅ Vendu à ${((q=r.buyer)==null?void 0:q.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${B?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function $(){const r=document.getElementById("mkt-content"),f=document.getElementById("mkt-filters");if(r){if(f.style.display=p==="buy"?"flex":"none",p==="buy"){const I=o(d);r.innerHTML=I.length?I.map(g).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const I=s.filter(B=>B.status==="active").sort((B,C)=>new Date(C.listed_at)-new Date(B.listed_at)),M=s.filter(B=>B.status==="sold").sort((B,C)=>new Date(C.sold_at||C.listed_at)-new Date(B.sold_at||B.listed_at));r.innerHTML=(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${I.length})</div>`+I.map(_).join(""):"")+(M.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${M.length})</div>`+M.map(_).join(""):"")+(!I.length&&!M.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(I=>I.addEventListener("click",()=>er(I.dataset.buy,d,e,t))),r.querySelectorAll("[data-cancel]").forEach(I=>I.addEventListener("click",()=>ir(I.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{p=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(f=>{const I=f===r;f.style.background=I?"var(--green)":"#fff",f.style.color=I?"#fff":"var(--gray-600)",f.style.borderColor=I?"var(--green)":"var(--gray-200)"}),$()})});let L;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var f;(f=document.getElementById(r))==null||f.addEventListener("input",()=>{clearTimeout(L),L=setTimeout($,250)})}),$()}async function er(e,t,i,a){const{state:c,toast:l,refreshProfile:d}=a,s=t.find(o=>o.id===e);if(!s)return;const p=s.price;if((c.profile.credits||0)<p){l("Crédits insuffisants","error");return}tr(s,async()=>{const{error:o}=await A.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(o){l("Erreur achat : "+o.message,"error");return}await d();const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l("✅ Carte achetée !","success"),await vi(i,a)})}function tr(e,t){var d;const i=(d=e.card)==null?void 0:d.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const l=s=>{c.remove(),s&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>l(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>l(!0)),c.addEventListener("click",s=>{s.target===c&&l(!1)})}async function ir(e,t,i){const{toast:a}=i,{data:c}=await A.from("market_listings").select("card_id").eq("id",e).single();if(await A.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:l}=await A.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");l||await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),vi(t,i)}async function nr(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await A.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function or(e,{state:t,navigate:i,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(l||[]).filter(o=>o.status==="finished"),p=(l||[]).filter(o=>o.status==="in_progress");function n(o){const g=o.home_id===c.id;g?o.home_score:o.away_score,g?o.away_score:o.home_score;const _=o.winner_id===c.id,$=o.home_score===o.away_score&&o.status==="finished",L=o.status!=="finished"?"…":$?"N":_?"V":"D",r=o.status!=="finished"||$?"#888":_?"#1A6B3C":"#c0392b";let f=d[o.mode]||o.mode;o.away_id===null&&!f.startsWith("IA")&&(f="IA");const M=o.home_id===c.id?o.away:o.home;let B;o.away_id===null?B=f:M?B=`${M.club_name||M.pseudo} (${M.pseudo})`:B="Adversaire";let C="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(C=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const D=new Date(o.created_at),q=D.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+D.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),O=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${B}${C}</div>
        <div style="font-size:11px;color:var(--gray-600)">${f} · ${q}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${O}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${L}</span>
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
          ${p.map(n).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(n).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}_n(kn);const De={user:null,profile:null,page:"home",params:{}};function St(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function rr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function pi(){document.getElementById("modal-overlay").classList.add("hidden")}async function It(){if(!De.user)return;const{data:e}=await A.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Kt(e,t={}){De.page=e,De.params=t,bn()}async function bn(){var a,c,l,d;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Kt,toast:St,openModal:rr,closeModal:pi,refreshProfile:It};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await Ti(e,i);break;case"collection":await Hn(e,i);break;case"decks":await ai(e,i);break;case"boosters":await oo(e,i);break;case"match":{const s=De.params&&De.params.matchMode||"vs_ai_easy";s==="random"?await xn(e,i):s==="friend"?await Go(e,i,(a=De.params)==null?void 0:a.friendId,(c=De.params)==null?void 0:c.friendName):s==="mini-league"?await Di(e,i,(l=De.params)==null?void 0:l.mlMatchId,(d=De.params)==null?void 0:d.leagueId):await vo(e,i);break}case"market":await Qo(e,i);break;case"rankings":await nr(e,i);break;case"matches":await or(e,i);break;case"friends":await In(e,i);break;case"mini-league":await Oo(e,i);break;case"match-mini-league":{const s=De.params||{};await Di(e,i,s.mlMatchId,s.leagueId);break}default:await Ti(e,i)}}function ar(){var a;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),Kt(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Kt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>sr())}async function sr(){const{data:e}=await A.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const c=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function dr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&pi()}),document.getElementById("modal-close").addEventListener("click",pi);const{data:{session:e}}=await A.auth.getSession();if(!e){Ri(),$i(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:St});return}De.user=e.user,await It(),Ri();try{const{data:i}=await A.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(c=>{a[c.formation]=c.links}),$n(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){En(document.getElementById("app"),{state:De,navigate:async()=>{await It(),ri()},toast:St,refreshProfile:It});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){xo(document.getElementById("app"),{state:De,navigate:()=>ri(),toast:St,refreshProfile:It});return}ri(),A.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",$i(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:St}))})}function lr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ii(){const e=document.getElementById("app");e&&(e.style.height=lr()+"px")}window.addEventListener("resize",ii);window.addEventListener("orientationchange",()=>setTimeout(ii,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ii);function ri(){const e=()=>{var i;(i=De.user)!=null&&i.id&&A.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ii(),ar(),bn()}function Ri(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function vn(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}dr().catch(e=>{console.error("Échec du démarrage:",e),vn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&vn("Le serveur met trop de temps à répondre.")},12e3);
