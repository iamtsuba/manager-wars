import{s as A,F as ui,h as Ft,j as Ri,l as it,i as vn,k as wn,b as _n}from"./formation-links-DJC25wD7.js";function _i(e,{navigate:t,toast:o}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,l=document.getElementById("login-error");if(l.textContent="",!a||!c){l.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:s}=await A.auth.signInWithPassword({email:a,password:c});if(d.textContent="Se connecter",d.disabled=!1,s){l.textContent=s.message.includes("Invalid")?"Email ou mot de passe incorrect.":s.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,l=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!a||!c||!l){d.textContent="Remplissez tous les champs.";return}if(c.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==l){d.textContent="Les mots de passe ne correspondent pas.";return}const s=document.getElementById("reg-btn");s.textContent="Création…",s.disabled=!0;const{error:u}=await A.auth.signUp({email:a,password:c});if(s.textContent="Créer mon compte",s.disabled=!1,u){d.textContent=u.message;return}o("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function $n(e,{state:t,navigate:o,toast:a,refreshProfile:c}){let l="#1A6B3C",d="#D4A017";e.innerHTML=`
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
  `;function s(){var C;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),y=((C=document.getElementById("setup-club"))==null?void 0:C.value)||"MW",_=y.trim().split(" ").filter(Boolean),v=_.length>=2?(_[0][0]+_[1][0]).toUpperCase():y.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=l),r&&(r.textContent=v,r.style.color=l)}document.getElementById("color1").addEventListener("input",i=>{l=i.target.value,document.getElementById("swatch1").style.background=l,s()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,s()});function u(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:y}=await A.from("users").select("id").eq("pseudo",i).maybeSingle();if(y){r.textContent="Ce pseudo est déjà pris.";return}u(2)}),document.getElementById("step2-back").addEventListener("click",()=>u(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:y}=await A.from("users").select("id").eq("club_name",i).maybeSingle();if(y){r.textContent="Ce nom de club est déjà pris.";return}u(3)}),document.getElementById("step3-back").addEventListener("click",()=>u(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),y=document.getElementById("step3-error"),_=document.getElementById("step3-finish");y.textContent="",_.disabled=!0,_.textContent="Création en cours…";try{const{error:v}=await A.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:l,club_color2:d,credits:1e4});if(v)throw v;await kn(t.user.id),await c(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(v){y.textContent=v.message,_.disabled=!1,_.textContent="🚀 Créer mon profil !"}})}async function kn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await A.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(o){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",o)}}const En="modulepreload",Tn=function(e){return"/manager-wars/"+e},$i={},Oi=function(t,o,a){let c=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),s=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));c=Promise.allSettled(o.map(u=>{if(u=Tn(u),u in $i)return;$i[u]=!0;const i=u.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${r}`))return;const y=document.createElement("link");if(y.rel=i?"stylesheet":En,i||(y.as="script"),y.crossOrigin="",y.href=u,s&&y.setAttribute("nonce",s),document.head.appendChild(y),i)return new Promise((_,v)=>{y.addEventListener("load",_),y.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(d){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=d,window.dispatchEvent(s),!s.defaultPrevented)throw d}return c.then(d=>{for(const s of d||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},Mt="#1A6B3C",jt="#cc2222",An="#D4A017",ki="#888";async function zn(e,t){const{state:o,toast:a}=t;e.innerHTML=`
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
    </div>`,await Hi(o,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>In(o,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ui(o,a,null,t))}async function Hi(e,t,o={}){const{navigate:a}=o,c=e.user.id,{data:l,error:d}=await A.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:s}=await A.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),u=document.getElementById("pending-badge");u&&(s>0?(u.style.display="flex",u.textContent=s):u.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(d){console.error("[Friends] Erreur:",d),i.innerHTML=`<div style="color:${jt};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const r=(l||[]).map(v=>v.requester_id===c?v.addressee_id:v.requester_id);let y={};if(r.length){const{data:v}=await A.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(v||[]).forEach(C=>{y[C.id]=C})}const _=(l||[]).map(v=>({friendshipId:v.id,friend:y[v.requester_id===c?v.addressee_id:v.requester_id]||{pseudo:"?"}}));if(!_.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${_.length} ami${_.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${_.map(({friendshipId:v,friend:C})=>Sn(C,v)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(v=>{v.addEventListener("click",()=>Ln(e,v.dataset.stats,v.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(v=>{v.addEventListener("click",()=>{const C=v.dataset.friendId,n=v.dataset.friendName;console.log("[Friends] clic match",{fid:C,fname:n,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:C,friendName:n}):t("Erreur navigation","error")})})}function Sn(e,t){const o=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||o).slice(0,2).toUpperCase(),l=e.club_color2||Mt,d=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,u=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${l};border:2.5px solid ${d};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${d}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${u?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${u?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${u?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${o}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${o}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${An};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function In(e,t){const o=fi();o.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${jt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${gi()}`,document.body.appendChild(o);const a=o.querySelector("#friend-pseudo-input"),c=o.querySelector("#add-friend-error"),l=()=>o.remove();a.focus(),o.querySelector("#add-cancel").addEventListener("click",l),o.addEventListener("click",d=>{d.target===o&&l()}),o.querySelector("#add-ok").addEventListener("click",async()=>{const d=a.value.trim();if(!d){c.textContent="Entre un pseudo";return}c.textContent="";const{data:s}=await A.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!s){c.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:u}=await A.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(u){const r=u.status==="accepted"?"Vous êtes déjà amis !":u.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=r;return}const{error:i}=await A.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(i){c.textContent="Erreur : "+i.message;return}l(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Ui(e,t,o=null,a={}){const c=e.user.id,{data:l}=await A.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),d=(l||[]).map(_=>_.requester_id);let s={};if(d.length){const{data:_}=await A.from("users").select("id, pseudo, club_name").in("id",d);(_||[]).forEach(v=>{s[v.id]=v})}const u=(l||[]).map(_=>({..._,requester:s[_.requester_id]||{pseudo:"?"}})),i=fi(),r=u||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(_=>{var v,C,n;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((v=_.requester)==null?void 0:v.club_name)||((C=_.requester)==null?void 0:C.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((n=_.requester)==null?void 0:n.pseudo)||""})</span>
                </div>
                <button data-accept="${_.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Mt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${_.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${jt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${gi()}`,document.body.appendChild(i);const y=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",y),i.addEventListener("click",_=>{_.target===i&&y()}),i.querySelectorAll("[data-accept]").forEach(_=>{_.addEventListener("click",async()=>{const{error:v}=await A.from("friendships").update({status:"accepted"}).eq("id",_.dataset.accept);if(v){t("Erreur : "+v.message,"error");return}_.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Hi(e,t,a),o&&o()})}),i.querySelectorAll("[data-decline]").forEach(_=>{_.addEventListener("click",async()=>{await A.from("friendships").delete().eq("id",_.dataset.decline),_.closest("div[style]").remove(),t("Demande refusée","info"),o&&o()})})}async function Ln(e,t,o){const a=e.user.id,[c,l]=[a,t].sort(),d=a===c,{data:s}=await A.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",l).single(),u=e.profile.club_name||e.profile.pseudo||"Moi",i=s||{},r=d?i.wins_p1||0:i.wins_p2||0,y=d?i.wins_p2||0:i.wins_p1||0,_=i.draws||0,v=d?i.goals_p1||0:i.goals_p2||0,C=d?i.goals_p2||0:i.goals_p1||0,n=d?i.gc_used_p1||0:i.gc_used_p2||0,E=d?i.gc_used_p2||0:i.gc_used_p1||0,S=i.matches_total||0,I=(j,q,F,H=Mt,te=jt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${H}">${q}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${j}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${te}">${F}</div>
    </div>`,M=fi();M.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${o}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o}</div>
      </div>
      ${S===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${I("Victoires",r,y)}
        ${I("Nuls",_,_,ki,ki)}
        ${I("Défaites",y,r)}
        ${I("Buts marqués",v,C)}
        ${I("Buts encaissés",C,v,jt,Mt)}
        ${I("GC utilisés ⚡",n,E,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${S} match${S>1?"s":""} joué${S>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${gi()}`,document.body.appendChild(M),M.querySelector("#stats-close").addEventListener("click",()=>M.remove()),M.addEventListener("click",j=>{j.target===M&&M.remove()})}function fi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function gi(){return`
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
        background:${Mt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Vi({player1Id:e,player2Id:t,score1:o,score2:a,gc1:c,gc2:l}){const[d,s]=[e,t].sort(),u=e!==d,i=u?a:o,r=u?o:a,y=u?l:c,_=u?c:l,v=i>r?1:0,C=r>i?1:0,n=i===r?1:0,{data:E}=await A.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single();E?await A.from("friend_match_stats").update({wins_p1:E.wins_p1+v,wins_p2:E.wins_p2+C,draws:E.draws+n,goals_p1:E.goals_p1+i,goals_p2:E.goals_p2+r,gc_used_p1:E.gc_used_p1+y,gc_used_p2:E.gc_used_p2+_,matches_total:E.matches_total+1}).eq("player1_id",d).eq("player2_id",s):await A.from("friend_match_stats").insert({player1_id:d,player2_id:s,wins_p1:v,wins_p2:C,draws:n,goals_p1:i,goals_p2:r,gc_used_p1:y,gc_used_p2:_,matches_total:1})}const Mn="2026.07.01-1156";async function Ei(e,{state:t,navigate:o,toast:a}){var l,d;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Mn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",u=>{u.preventDefault(),o(s.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>o("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>o("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.classList.add("tapped"),setTimeout(()=>s.classList.remove("tapped"),200);const u=s.dataset.action;if(u==="match-ai"){qn(o);return}if(u==="match-random"){o("match",{matchMode:"random"});return}if(u==="match-friend"){o("friends");return}if(u==="mini-league"){o("mini-league");return}if(u==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var j,q,F,H,te,le;const s=((j=window.visualViewport)==null?void 0:j.height)||window.innerHeight,u=((q=document.querySelector(".top-nav"))==null?void 0:q.offsetHeight)||56,i=((F=document.querySelector(".bottom-nav"))==null?void 0:F.offsetHeight)||60,r=((H=e.querySelector(".hero-compact"))==null?void 0:H.offsetHeight)||52,y=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const _=((le=(te=e.querySelector("#logout-btn"))==null?void 0:te.closest("div"))==null?void 0:le.offsetHeight)||44,v=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((ae,G)=>{var ie;return ae+(((ie=document.getElementById(G))==null?void 0:ie.offsetHeight)||0)},0),C=14*5,n=s-u-i-r-_-v-C,E=Math.max(80,Math.round(n*.28)),S=Math.max(160,Math.round(n*.72)),I=Math.floor((S-10)/2);y&&(y.style.minHeight=y.style.maxHeight=E+"px"),e.querySelectorAll(".play-grid .play-card").forEach(ae=>{ae.style.minHeight=ae.style.height=I+"px"});const M=Math.round(I*.55);e.querySelectorAll(".play-card .play-icon").forEach(ae=>{ae.style.height=M+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await A.auth.signOut(),window.location.reload()}),Yi(t,a),Fn(t,a,o),Ki(t,a,o))}async function Ki(e,t,o){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:l}=await A.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(l!=null&&l.length)){a.innerHTML="";return}const d=l.map(u=>u.home_id===c?u.away_id:u.home_id).filter(Boolean);let s={};if(d.length){const{data:u}=await A.from("users").select("id, pseudo, club_name").in("id",d);(u||[]).forEach(i=>{s[i.id]=i.club_name||i.pseudo})}a.innerHTML=l.map(u=>{const i=u.home_id===c?u.away_id:u.home_id,r=s[i]||"Adversaire",y=u.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${y?"🏆 Mini League":u.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${u.id}" data-mini="${y?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${u.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(u=>{u.addEventListener("click",async()=>{const i=document.getElementById("page-content")||document.getElementById("app");if(u.dataset.mini==="1"){const{data:r}=await A.from("mini_league_matches").select("id, league_id").eq("match_id",u.dataset.resume).single();r?o("match-mini-league",{mlMatchId:r.id,leagueId:r.league_id}):o("mini-league")}else{const{resumePvpMatch:r}=await Oi(async()=>{const{resumePvpMatch:y}=await Promise.resolve().then(()=>qo);return{resumePvpMatch:y}},void 0);r(i,{state:e,navigate:o,toast:t,openModal:null,closeModal:null,refreshProfile:null},u.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(u=>{u.addEventListener("click",()=>{Cn(async()=>{await jn(u.dataset.abandon,u.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Ki(e,t,o)})})})}async function jn(e,t,o){const{data:a}=await A.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===o,l=c?0:3,d=c?3:0,s=a.game_state||{};s.p1Score=l,s.p2Score=d,s.phase="finished",s.forfeit=!0,await A.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:l,away_score:d,game_state:s}).eq("id",e)}function Cn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",o=>{o.target===t&&t.remove()})}async function Fn(e,t,o){var s,u,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await A.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const l=((s=c.inviter)==null?void 0:s.club_name)||((u=c.inviter)==null?void 0:u.pseudo)||"?",d=c.inviter_id;a.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",o("match",{matchMode:"friend",friendId:d,friendName:l})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await A.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Yi(e,t){const o=document.getElementById("friend-requests-banner");if(!o)return;const{data:a,error:c}=await A.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){o.innerHTML="";return}const l=a.length,d=a.slice(0,2).map(u=>{var i;return((i=u.requester)==null?void 0:i.pseudo)||"?"}).join(", "),s=l>2?` +${l-2}`:"";o.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Ui(e,t,()=>Yi(e,t))})}function qn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2000",o.innerHTML=`
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
  `,document.body.appendChild(o);const a=()=>o.remove();document.getElementById("diff-cancel").addEventListener("click",a),o.addEventListener("click",c=>{c.target===o&&a()}),o.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function we(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ti=["ATT","MIL","DEF","GK"];function Wi(e){let t=0;const o=e.length;for(let a=0;a<o;a++)for(let c=a+1;c<o;c++){const l=e[a],d=e[c];if(!l||!d)continue;const s=l._col!=null&&d._col!=null&&l._col===d._col,u=l._col!=null&&d._col!=null&&Math.abs(l._col-d._col)===1,i=Ti.indexOf(l._line||l.job),r=Ti.indexOf(d._line||d.job),y=Math.abs(i-r)===1;if(!((l._line||l.job)===(d._line||d.job)&&u||s&&y))continue;const C=l.country_code&&d.country_code&&l.country_code===d.country_code,n=l.club_id&&d.club_id&&l.club_id===d.club_id;C&&n?t+=2:(C||n)&&(t+=1)}return t}function qt(e,t={}){const o=e.reduce((l,d)=>{const s=d._line||d.job;return l+(Number(s==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),a=Wi(e);let c=o+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:o,links:a,total:Math.max(0,c)}}function Bt(e,t={}){const o=e.reduce((l,d)=>{const s=d._line||d.job;let u=0;return s==="GK"?u=Number(d.note_g)||0:s==="MIL"?u=Number(d.note_m)||0:u=Number(d.note_d)||0,l+u+(d.boost||0)},0),a=Wi(e);let c=o+a;return t.stolenNote&&(c-=t.stolenNote),{base:o,links:a,total:Math.max(0,c)}}function Dt(e,t,o={}){return o.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ji(e,t,o="easy"){const a=e.filter(d=>!d.used);if(!a.length)return[];const c=[...a].sort((d,s)=>{const u=t==="attack"?we(d,"ATT"):d._line==="GK"?we(d,"GK"):we(d,"DEF");return(t==="attack"?we(s,"ATT"):s._line==="GK"?we(s,"GK"):we(s,"DEF"))-u});let l=o==="easy"?1+Math.floor(Math.random()*2):o==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function Bn(e,t){const o={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(o[e]||o.vs_ai_easy)[t]||0}const Xi={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function mi(e,t){const o=e.player;if(!o)return 0;const a=o.rarity;if(a!=="pepite"&&a!=="papyte")return Number(o[t])||0;const c=xi(o),l=Number(o[t])||0;if(l<=0)return 0;const d=o.note_min??1,s=o.note_max??10,i=(e.current_note??c)-c;return Math.min(s,Math.max(d,l+i))}function xi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Xt(e,t){!e||!t||await Promise.all([Ai(e,"win"),Ai(t,"loss")])}async function Ai(e,t){const{data:o}=await A.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(o!=null&&o.length))return;const a=o.filter(c=>{var l,d;return((l=c.player)==null?void 0:l.rarity)==="pepite"||((d=c.player)==null?void 0:d.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const l=Xi[c.player.rarity],d=t==="win"?l.win:l.loss,s=c.player.note_min??1,u=c.player.note_max??10,i=xi(c.player),r=c.current_note??i,y=Math.min(u,Math.max(s,r+d));return A.from("cards").update({current_note:y}).eq("id",c.id)}))}const Dn=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:Xi,currentSecondaryNote:mi,getBaseMainNote:xi,updateEvolutiveCards:Xt},Symbol.toStringTag,{value:"Module"})),Zi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},It={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Pt=["GK","DEF","MIL","ATT"],Gn=["Tous","GK","DEF","MIL","ATT"],Pn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function zi(e){const t=e.player;if(!t)return null;const o=t.rarity;return(o==="pepite"||o==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Nn(e){return e.length?e.reduce((t,o)=>zi(o)>zi(t)?o:t,e[0]):e[0]}function Qi(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const yi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function en(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Ct(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ni(e,t=""){var _,v;const o=e.player;if(!o)return"";const a=o.job||"ATT",c=It[a],l=Zi[o.rarity]||"#ccc",d=o.rarity==="pepite"||o.rarity==="papyte",s=d&&e.current_note!=null?e.current_note:Ct(o,a),u=o.job2?d?mi(e,Qi(o.job2)):Ct(o,o.job2):null,i=o.job2?It[o.job2]:null,r=en(o),y=yi[o.country_code]||o.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${l};cursor:pointer;flex-shrink:0;position:relative
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${c}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${c}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${u!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${i}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${u}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${y}</div>
        ${(_=o.clubs)!=null&&_.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((v=o.clubs)==null?void 0:v.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Si(e){const t=e.job||"ATT",o=Ct(e,t),a=yi[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Rn(e,t){const{state:o,navigate:a,toast:c,openModal:l,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:u}=await A.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(s||[]).filter(Y=>Y.card_type==="player"&&Y.player),r=(s||[]).filter(Y=>Y.card_type==="game_changer"),y=(s||[]).filter(Y=>Y.card_type==="formation"),{data:_}=await A.from("gc_definitions").select("name,gc_type,color,effect,image_url"),v={};(_||[]).forEach(Y=>{v[Y.name]=Y});const C=Object.keys(ui),n=Object.keys(Re),E={};i.forEach(Y=>{const X=Y.player.id;E[X]=(E[X]||0)+1}),new Set(Object.keys(E).map(Y=>String(Y)));const S=new Set(y.map(Y=>Y.formation)),I=new Set(r.map(Y=>Y.gc_type));let M="player",j="Tous",q="",F=!1;function H(){return[...i].sort((Y,X)=>{const P=Pt.indexOf(Y.player.job),R=Pt.indexOf(X.player.job);return P!==R?P-R:(Y.player.surname_encoded||"").localeCompare(X.player.surname_encoded||"")})}function te(){return[...u||[]].sort((Y,X)=>{const P=Pt.indexOf(Y.job),R=Pt.indexOf(X.job);return P!==R?P-R:(Y.surname_encoded||"").localeCompare(X.surname_encoded||"")})}function le(){return H().filter(Y=>{const X=Y.player,P=j==="Tous"||X.job===j,R=!q||`${X.firstname} ${X.surname_encoded}`.toLowerCase().includes(q);return P&&R})}function ae(){return te().filter(Y=>{const X=j==="Tous"||Y.job===j,P=!q||`${Y.firstname} ${Y.surname_encoded}`.toLowerCase().includes(q);return X&&P})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="player"?"var(--green)":"transparent"};
        color:${M==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="formation"?"var(--green)":"transparent"};
        color:${M==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${y.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="gc"?"var(--green)":"transparent"};
        color:${M==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function G(){const Y=document.getElementById("col-filters");Y&&(M==="player"?(Y.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${q}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Gn.map(X=>`
            <button class="filter-btn" data-job="${X}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${X===j?"var(--green)":"var(--gray-200)"};
                background:${X===j?"var(--green)":"#fff"};
                color:${X===j?"#fff":"var(--gray-600)"}">
              ${X}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${F?"var(--yellow)":"var(--gray-200)"};
              background:${F?"var(--yellow)":"#fff"};
              color:${F?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${F?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",X=>{q=X.target.value.toLowerCase(),ie()}),e.querySelectorAll(".filter-btn").forEach(X=>{X.addEventListener("click",()=>{j=X.dataset.job,G(),ie()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{F=!F,G(),ie()})):(Y.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${F?"var(--yellow)":"var(--gray-200)"};
              background:${F?"var(--yellow)":"#fff"};
              color:${F?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${F?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{F=!F,G(),ie()})))}function ie(){const Y=document.getElementById("col-grid");Y&&(M==="player"?_e(Y):M==="formation"?be(Y):xe(Y))}function pe(Y,X,P,R,Z){const ue=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!ue||!se)return;var Se=0;function Ie(){const Ce=window.innerWidth>=768,Pe=document.getElementById("col-big"),Ae=document.getElementById("col-grid");Ce&&Pe&&(Pe.style.minHeight="420px",Pe.style.flex="1 1 auto"),Ce&&Ae&&(Ae.style.height=Math.round(310*.76+16)+"px",Ae.style.flexShrink="0",Ae.style.overflowX="auto",Ae.style.overflowY="hidden",Ae.style.alignItems="center",Ae.style.padding="8px 16px"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+X(Y[Se])+"</div>";var Be=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Be&&Be.addEventListener("click",function(){R(Y[Se])}),requestAnimationFrame(function(){var Te=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Te||!se)){var Ve=se.clientHeight-8,Je=se.clientWidth-24,L=Te.offsetHeight,b=Te.offsetWidth;if(L>0&&b>0&&Ve>40){var p=Ce?2.2:1,f=Math.min(Ve/L,Je/b,p);Te.style.transform="scale("+f.toFixed(3)+")",Te.style.transformOrigin="top center"}}}),ue.innerHTML=Y.map(function(Te,Ve){var Je=Ve===Se,L="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Je?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ve+'" style="'+L+'">'+P(Te,Je)+"</div>"}).join(""),ue.querySelectorAll(".col-mini-item").forEach(function(Te){Te.addEventListener("click",function(){Se=Number(Te.dataset.idx),Ie(),Te.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ie()}function U(Y){var X=window.innerWidth>=768?.76:.54,P;if(!Y||Y._fake){var R=Y?Y.player:null;if(!R)return"";P=Si(R)}else P=ni(Y,"");return'<div style="display:inline-block;zoom:'+X+';pointer-events:none;line-height:0">'+P+"</div>"}function oe(Y,X,P){X=X||100,P=P||140;var R=Ft[Y]||{},Z={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ue=Math.max(3,Math.round(X*.06)),se=Object.entries(R).map(function(Ie){var Ce=Ie[0],Pe=Ie[1],Ae=Ce.replace(/\d+$/,""),Be=Z[Ae]||"#888",Te=Math.round(Pe.x*X),Ve=Math.round(Pe.y*P);return'<circle cx="'+Te+'" cy="'+Ve+'" r="'+ue+'" fill="'+Be+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Se=Math.max(1,Math.round(X/50));return'<svg viewBox="0 0 '+X+" "+P+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+X+'" height="'+P+'" fill="#1A6B3C"/><rect x="'+Math.round(X*.2)+'" y="'+Math.round(P*.02)+'" width="'+Math.round(X*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Se+'"/><line x1="0" y1="'+Math.round(P*.5)+'" x2="'+X+'" y2="'+Math.round(P*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Se+'"/><ellipse cx="'+Math.round(X*.5)+'" cy="'+Math.round(P*.5)+'" rx="'+Math.round(X*.18)+'" ry="'+Math.round(P*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Se+'"/><rect x="'+Math.round(X*.2)+'" y="'+Math.round(P*.82)+'" width="'+Math.round(X*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Se+'"/>'+se+"</svg>"}function ce(Y,X,P){var R=P>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+P+"</div>":"",Z=X?'data-form-id="'+X.id+'"':"",ue=Y.length>7?14:Y.length>5?16:19,se=!!X;return"<div "+Z+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(se?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(se?"":"filter:grayscale(1);opacity:0.5")+'">'+R+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(se?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ue+"px;font-weight:900;color:"+(se?"#1A6B3C":"#aaa")+';line-height:1">'+Y+'</div></div><div style="flex:1;overflow:hidden;background:'+(se?"#1A6B3C":"#ccc")+'">'+oe(Y,140,220)+"</div></div>"}function he(Y,X){var P=window.innerWidth>=768?.76:.54,R=140,Z=305,ue=Math.round(Z*.22),se=Z-ue,Se=Y.length>7?10:13,Ie=oe(Y,R,se),Ce=X?"1.5px solid #2a7a40":"1px solid #ddd",Pe=X?"":"filter:grayscale(1);opacity:0.45;",Ae=X?"#1A6B3C":"#bbb",Be="#fff";return'<div style="display:inline-block;zoom:'+P+';line-height:0;pointer-events:none"><div style="width:'+R+"px;height:"+Z+"px;border-radius:6px;border:"+Ce+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Pe+'"><div style="height:'+ue+"px;background:"+Ae+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Se+"px;font-weight:900;color:"+Be+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(R-4)+'px">'+Y+'</span></div><div style="height:'+se+'px;overflow:hidden;flex-shrink:0">'+Ie+"</div></div></div>"}function _e(Y){if(F){const X=ae();if(!X.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const P=X.map(R=>i.find(Z=>Z.player.id===R.id)||{_fake:!0,player:R,id:"fake-"+R.id});pe(P,R=>R._fake?Si(R.player):ni(R,""),R=>R._fake?U({player:R.player,id:"x",_fake:!0}):U(R),R=>{R._fake||Ii(R,i,E,t)})}else{const X=le();if(!X.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const P={};X.forEach(Z=>{const ue=Z.player.id;P[ue]||(P[ue]=[]),P[ue].push(Z)});const R=Object.values(P).map(Z=>Nn(Z));pe(R,Z=>{const ue=E[Z.player.id]||1,se=ue>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ue}</div>`:"",Ie=i.filter(Ce=>Ce.player.id===Z.player.id&&Ce.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ni(Z,se+Ie)},Z=>U(Z),Z=>Ii(Z,i,E,t))}}function be(Y){const X=F?C:[...S];if(!X.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const P=X.map(R=>({formation:R,card:y.find(Z=>Z.formation===R)||null,owned:S.has(R)}));pe(P,({formation:R,card:Z,owned:ue})=>ce(R,ue?Z:null,ue?y.filter(se=>se.formation===R).length:0),({formation:R,owned:Z})=>he(R,Z),({card:R,owned:Z})=>{Z&&R&&Hn(R,y,t,l)})}function xe(Y){const X=Object.keys(v),P=F?X.length?X:n:[...I];if(!P.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const R=P.map(Z=>({type:Z,gc:Re[Z]||{icon:"⚡",desc:""},def:v[Z]||null,owned:I.has(Z),card:r.find(ue=>ue.gc_type===Z)||null}));pe(R,({type:Z,gc:ue,def:se,owned:Se,card:Ie})=>{const Ce=Se?r.filter(p=>p.gc_type===Z).length:0,Pe=Ce>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ce}</div>`:"",Ae=(se==null?void 0:se.gc_type)==="ultra_game_changer",Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Te={purple:"#b06ce0",light_blue:"#00d4ef"},Ve=Be[se==null?void 0:se.color]||Be.purple,Je=Te[se==null?void 0:se.color]||Te.purple,L=(se==null?void 0:se.effect)||ue.desc||"",b=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null;return Se&&Ie?`<div data-gc-id="${Ie.id}" data-gc-type="${Z}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Je};background:${Ve};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Je}66;cursor:pointer">
          ${Pe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Z.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Z}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ae?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ue.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${L.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Z}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ue.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Z,gc:ue,def:se,owned:Se})=>{const Ie=window.innerWidth>=768?.76:.54,Ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Pe={purple:"#9b59b6",light_blue:"#00bcd4"},Ae=Ce[se==null?void 0:se.color]||Ce.purple,Be=Pe[se==null?void 0:se.color]||Pe.purple,Te=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null;return Se?`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ae};border:1px solid ${Be};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Z}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Te?`<img src="${Te}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ue.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((se==null?void 0:se.effect)||ue.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ue.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Z}</span></div></div>`},({type:Z,owned:ue,def:se})=>{ue&&On(Z,se,l)})}e.querySelectorAll(".col-tab-btn").forEach(Y=>{Y.addEventListener("click",()=>{M=Y.dataset.tab,j="Tous",q="",F=!1,e.querySelectorAll(".col-tab-btn").forEach(X=>{const P=X.dataset.tab===M;X.style.borderBottomColor=P?"var(--green)":"transparent",X.style.color=P?"var(--green)":"var(--gray-600)"}),G(),ie()})}),G(),ie()}function On(e,t,o){const a=Re[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[t==null?void 0:t.color]||l.purple,u=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,y=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;o("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${u};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${y?`<img src="${y}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Nt=1e3;function Hn(e,t,o,a){var C,n,E;const{state:c,toast:l,closeModal:d,navigate:s,refreshProfile:u}=o,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function y(){const S=Ft[i]||{},I=ui[i]||[],M=290,j=360,q=20;function F(te){const le=S[te];return le?{x:le.x*M,y:le.y*j}:null}let H=`<svg width="${M}" height="${j}" viewBox="0 0 ${M} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[te,le]of I){const ae=F(te),G=F(le);!ae||!G||(H+=`<line x1="${ae.x}" y1="${ae.y}" x2="${G.x}" y2="${G.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const te of Object.keys(S)){const le=F(te);if(!le)continue;const ae=te.replace(/\d+/,""),G=r[ae]||"#555";H+=`<circle cx="${le.x}" cy="${le.y}" r="${q}" fill="${G}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,H+=`<text x="${le.x}" y="${le.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ae}</text>`}return H+="</svg>",H}const _=t.filter(S=>S.formation===i);_.length;const v=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${y()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${v?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(C=document.getElementById("direct-sell-form-btn"))==null||C.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${Nt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const S=_.find(M=>!M.is_for_sale)||_[0];if(!S){l("Aucune carte à vendre","error");return}await A.from("market_listings").delete().eq("card_id",S.id),await A.from("transfer_history").delete().eq("card_id",S.id);const{error:I}=await A.from("cards").delete().eq("id",S.id);if(I){l(I.message,"error");return}await A.from("users").update({credits:(c.profile.credits||0)+Nt}).eq("id",c.profile.id),await u(),l(`+${Nt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),s("collection")}),(n=document.getElementById("market-sell-form-btn"))==null||n.addEventListener("click",async()=>{const S=parseInt(document.getElementById("sell-price-form").value);if(!S||S<1){l("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:S}).eq("id",e.id),await A.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:S}),l("Carte mise en vente sur le marché !","success"),d(),s("collection")}),(E=document.getElementById("cancel-sell-form-btn"))==null||E.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),d(),s("collection")})}async function Ii(e,t,o,a){var ce,he,_e,be,xe,Y,X;const{state:c,toast:l,openModal:d,closeModal:s,navigate:u,refreshProfile:i}=a,r=e.player,y=t.filter(P=>P.player.id===r.id),_=y.length,v=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0),C=r.rarity||"normal",{data:n}=await A.from("sell_price_configs").select("*").eq("rarity",C).lte("note_min",v).gte("note_max",v).order("note_min",{ascending:!1}).limit(1),E=((ce=n==null?void 0:n[0])==null?void 0:ce.price)??Pn[C]??1e3,S=r.rarity!=="legende",I=en(r),M=(r.rarity==="pepite"||r.rarity==="papyte")&&e.current_note!=null?e.current_note:Ct(r,r.job),j=r.rarity==="pepite"||r.rarity==="papyte",q=r.job2?j?mi(e,Qi(r.job2)):Ct(r,r.job2):null,F=It[r.job]||"#1A6B3C",H=r.job2?It[r.job2]:null,te=Zi[r.rarity]||"#ccc",le=yi[r.country_code]||r.country_code||"",ae=y.map(P=>P.id);let G={};if(ae.length){const{data:P}=await A.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ae).order("transferred_at",{ascending:!0});(P||[]).forEach(R=>{G[R.card_id]||(G[R.card_id]=[]),G[R.card_id].push(R)})}const ie=P=>{const R=P.transferred_at?new Date(P.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Z=P.source==="booster"?"Booster":P.price?P.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${P.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${P.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${P.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Z}</div>
        <div style="font-size:11px;color:var(--gray-600)">${R}</div>
      </div>
    </div>`},pe=ae.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${_>1?`(${_})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${y.map((P,R)=>{const Z=G[P.id]||[],ue=P.is_for_sale,se=Z.length?Z[Z.length-1]:null,Ie=(r.rarity==="pepite"||r.rarity==="papyte")&&P.current_note!=null?` (☆${P.current_note})`:"";return`
            <div data-card-id="${P.id}" data-card-idx="${R}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${ue?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${P.id}" ${ue?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${R+1}${Ie}${ue?" 🏷️ En vente":""}</div>
                  ${se?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${se.club_name} · ${se.source==="booster"?"Booster":se.price?se.price.toLocaleString("fr")+" cr.":"—"}
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${E.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${S?`
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
    </div>`:"";d(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${te};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${F}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${F}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${M}</text>
            </svg>
            ${q!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${H}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${I?`<img src="${I}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${le}</div>
            ${(he=r.clubs)!=null&&he.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((_e=r.clubs)==null?void 0:_e.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${te}">${r.rarity.toUpperCase()}</div>
          ${r.rarity==="pepite"||r.rarity==="papyte"?`
          <div style="margin-top:6px;background:${te}18;border-left:3px solid ${te};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${te};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([P,R])=>{const Z=It[P],ue=Number(R)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${Z}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ue}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${P}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${_}</div>
        </div>
      </div>
    </div>
    ${pe}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(be=document.getElementById("close-detail"))==null||be.addEventListener("click",s);let U=new Set;const oe=()=>{const P=U.size,R=document.getElementById("sell-action-panel");R&&(R.style.display=P>0?"block":"none",document.getElementById("sell-selected-count").textContent=P,document.getElementById("sell-direct-total").textContent=(P*E).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(P=>{P.addEventListener("change",()=>{const R=P.dataset.id;P.checked?U.add(R):U.delete(R);const Z=P.closest(".exemplaire-row");Z&&(Z.style.borderColor=P.checked?"#1A6B3C":"#eee"),oe()})}),document.querySelectorAll(".exemplaire-row").forEach(P=>{P.addEventListener("click",R=>{if(R.target.closest("button")||R.target.tagName==="INPUT")return;const Z=P.querySelector(".expl-check");Z&&!Z.disabled&&(Z.checked=!Z.checked,Z.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(P=>{P.addEventListener("click",R=>{R.stopPropagation();const Z=document.querySelector(`.expl-hist[data-hist="${P.dataset.idx}"]`);Z&&(Z.style.display=Z.style.display==="none"?"flex":"none")})}),(xe=document.getElementById("direct-sell-btn"))==null||xe.addEventListener("click",async()=>{const P=[...U];if(!P.length)return;const R=P.length*E;if(!confirm(`Vendre ${P.length} carte${P.length>1?"s":""} ${r.surname_encoded} pour ${R.toLocaleString("fr")} crédits ? Action irréversible.`))return;await A.from("market_listings").delete().in("card_id",P),await A.from("transfer_history").delete().in("card_id",P);const{error:Z}=await A.from("cards").delete().in("id",P);if(Z){l(Z.message,"error");return}await A.from("users").update({credits:(c.profile.credits||0)+R}).eq("id",c.profile.id),await i();const ue=document.getElementById("nav-credits");ue&&(ue.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l(`+${R.toLocaleString("fr")} crédits ! ${P.length} carte${P.length>1?"s":""} vendue${P.length>1?"s":""}.`,"success"),s(),u("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{var Se;const P=[...U];if(!P.length){l("Sélectionne au moins un exemplaire","warning");return}const R=parseInt((Se=document.getElementById("sell-market-price"))==null?void 0:Se.value);if(!R||R<1){l("Prix invalide","error");return}const{error:Z}=await A.from("cards").update({is_for_sale:!0,sale_price:R}).in("id",P);if(Z){l(Z.message,"error");return}const ue=P.map(Ie=>({seller_id:c.profile.id,card_id:Ie,price:R,status:"active"})),{error:se}=await A.from("market_listings").insert(ue);se&&console.warn("[Market] insert listings:",se.message),l(`${P.length} carte${P.length>1?"s":""} mise${P.length>1?"s":""} en vente à ${R.toLocaleString("fr")} cr. chacune !`,"success"),s(),u("collection")}),(X=document.getElementById("cancel-sell-btn"))==null||X.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),u("collection")})}const Yt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},bt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Zt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function tn(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function nn(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(o=e==null?void 0:e.clubs)!=null&&o.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Un(e,t=44,o=58){var v;const a=e?Zt(e):null,c=e?nn(e):null,l=tn(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",s=bt[d]||"#555",u={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(o*.19),y=Math.round(o*.25),_=o-r-y;return e?`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${u};background:${s};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${_}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${y}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${y+2}px;height:${y-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${y-4}px">🌍</span>`}
      <span style="font-size:${y-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${y-4}px;height:${y-4}px;object-fit:contain">`:(v=e==null?void 0:e.clubs)!=null&&v.encoded_name?`<span style="font-size:${Math.max(4,y-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${o}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ai(e,t){const{state:o,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("decks").select("id,name,formation_card_id").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!d)return;const{data:s,error:u}=await A.from("decks").insert({owner_id:o.profile.id,name:d}).select().single();if(u){c(u.message,"error");return}c("Deck créé !","success"),Li(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>Li(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",d.dataset.name);if(!s||s===d.dataset.name)return;const{error:u}=await A.from("decks").update({name:s}).eq("id",d.dataset.rename);if(u){c(u.message,"error");return}c("Deck renommé !","success"),ai(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await A.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:s}=await A.from("decks").delete().eq("id",d.dataset.delete);if(s){c(s.message,"error");return}c("Deck supprimé.","success"),ai(e,t)})})}async function Li(e,t,o){const{state:a,toast:c}=o;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("decks").select("*").eq("id",e).single(),{data:d}=await A.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),s=(d||[]).filter(v=>v.card_type==="player"&&v.player),u=(d||[]).filter(v=>v.card_type==="formation"),i=u.map(v=>v.formation).filter(Boolean),{data:r}=await A.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let y=l.formation||"4-4-2";i.length>0&&!i.includes(y)&&(y=i[0]);const _={deckId:e,name:l.name,formation:y,formationCardId:l.formation_card_id,slots:{},subs:[],playerCards:s,formationCards:u,availableFormations:i};(r||[]).forEach(v=>{v.is_starter?_.slots[v.position]=v.card_id:_.subs.includes(v.card_id)||_.subs.push(v.card_id)}),$t(t,_,o)}function $t(e,t,o){var u;const{navigate:a}=o;Yt[t.formation];const c=Mi(t.formation),l=c.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Yt),s=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${s.map(i=>{const r=i.player;return`<div style="position:relative;flex-shrink:0">
            ${Un(r,44,58)}
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
  </div>`,Vn(e,t,c,o),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=Mi(t.formation),y={};r.forEach(_=>{t.slots[_]&&(y[_]=t.slots[_])}),t.slots=y,$t(e,t,o)}),document.getElementById("save-deck").addEventListener("click",()=>Wn(t,o)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),$t(e,t,o)})}),(u=document.getElementById("add-sub-btn"))==null||u.addEventListener("click",()=>{Yn(t,e,o)})}function Vn(e,t,o,a){const c=e.querySelector("#deck-field");if(!c)return;const l=Ft[t.formation]||{},d=Ri(t.formation)||[],s={};for(const S of o){const I=t.slots[S],M=I?t.playerCards.find(j=>j.id===I):null;s[S]=M?M.player:null}const u=300,i=300,r=48,y=64,_=13,v=16,C=38;function n(S){const I=l[S];return I?{x:I.x*u,y:I.y*i}:null}let E="";for(const[S,I]of d){const M=n(S),j=n(I);if(!M||!j)continue;const q=s[S]?{...s[S],club_id:s[S].club_id,country_code:s[S].country_code,rarity:s[S].rarity}:null,F=s[I]?{...s[I],club_id:s[I].club_id,country_code:s[I].country_code,rarity:s[I].rarity}:null,H=it(q,F);H==="#ff3333"||H==="#cc2222"?E+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}" stroke="${H}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(E+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}" stroke="${H}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,E+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}" stroke="${H}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const S of o){const I=n(S);if(!I)continue;const M=s[S],j=S.replace(/\d+/,""),q=bt[j]||"#555",F=(I.x-r/2).toFixed(1),H=(I.y-y/2).toFixed(1),te={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[M==null?void 0:M.rarity]||"#aaa";if(M){const le=Zt(M),ae=nn(M),G=tn(M.country_code),ie=Number(j==="GK"?M.note_g:j==="DEF"?M.note_d:j==="MIL"?M.note_m:M.note_a)||0,pe=y-_-v;E+=`<defs><clipPath id="dcp-${S}"><rect x="${F}" y="${(I.y-y/2+_).toFixed(1)}" width="${r}" height="${pe}"/></clipPath></defs>`,E+=`<rect x="${F}" y="${H}" width="${r}" height="${y}" rx="5" fill="${q}"/>`,le&&(E+=`<image href="${le}" x="${F}" y="${(I.y-y/2+_).toFixed(1)}" width="${r}" height="${pe}" clip-path="url(#dcp-${S})" preserveAspectRatio="xMidYMin slice"/>`),E+=`<rect x="${F}" y="${H}" width="${r}" height="${_}" fill="rgba(255,255,255,0.93)"/>`,E+=`<text x="${I.x.toFixed(1)}" y="${(I.y-y/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(M.surname_encoded||"").slice(0,9)}</text>`;const U=(I.y+y/2-v).toFixed(1);E+=`<rect x="${F}" y="${U}" width="${r}" height="${v}" fill="rgba(255,255,255,0.93)"/>`,G&&(E+=`<image href="${G}" x="${(I.x-21).toFixed(1)}" y="${(I.y+y/2-v+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),E+=`<text x="${I.x.toFixed(1)}" y="${(I.y+y/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ie}</text>`,ae&&(E+=`<image href="${ae}" x="${(I.x+r/2-14).toFixed(1)}" y="${(I.y+y/2-v+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),E+=`<rect x="${F}" y="${H}" width="${r}" height="${y}" rx="5" fill="none" stroke="${te}" stroke-width="2"/>`}else E+=`<rect x="${F}" y="${H}" width="${r}" height="${y}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,E+=`<text x="${I.x.toFixed(1)}" y="${I.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,E+=`<text x="${I.x.toFixed(1)}" y="${(I.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${j}</text>`;E+=`<rect x="${F}" y="${H}" width="${r}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${S}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-C} ${-C} ${u+C*2} ${i+C*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${E}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(S=>{S.addEventListener("click",()=>Kn(S.dataset.pos,t,e,a))})}function Kn(e,t,o,a){var _,v,C;const{openModal:c,closeModal:l}=a,d=e.replace(/\d+/,""),s=t.slots[e],u=s?t.playerCards.find(n=>n.id===s):null;(_=u==null?void 0:u.player)==null||_.id;const i=new Set;Object.entries(t.slots).forEach(([n,E])=>{var I;if(n===e||!E)return;const S=t.playerCards.find(M=>M.id===E);(I=S==null?void 0:S.player)!=null&&I.id&&i.add(S.player.id)}),t.subs.forEach(n=>{var S;const E=t.playerCards.find(I=>I.id===n);(S=E==null?void 0:E.player)!=null&&S.id&&i.add(E.player.id)});const r=new Set,y=t.playerCards.filter(n=>{const E=n.player;return!(E.job===d||E.job2===d)||i.has(E.id)||r.has(E.id)?!1:(r.add(E.id),!0)});y.sort((n,E)=>{const S=d==="GK"?n.player.note_g:d==="DEF"?n.player.note_d:d==="MIL"?n.player.note_m:n.player.note_a;return(d==="GK"?E.player.note_g:d==="DEF"?E.player.note_d:d==="MIL"?E.player.note_m:E.player.note_a)-S}),c(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${y.length>0?y.map(n=>{var j,q;const E=n.player,S=d==="GK"?E.note_g:d==="DEF"?E.note_d:d==="MIL"?E.note_m:E.note_a,I=Zt(E),M={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[E.rarity];return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${bt[d]}">
            ${I?`<img src="${I}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${bt[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${E.firstname} ${E.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${E.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${E.country_code}">
              ${(j=E.clubs)!=null&&j.logo_url?`<img src="${E.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((q=E.clubs)==null?void 0:q.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${E.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${bt[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${M};flex-shrink:0">
            ${S}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(v=document.getElementById("close-selector"))==null||v.addEventListener("click",l),(C=document.getElementById("remove-player"))==null||C.addEventListener("click",()=>{delete t.slots[e],l(),$t(o,t,a)}),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{t.slots[e]=n.dataset.cardId,l(),$t(o,t,a)})})}function Yn(e,t,o){var u;const{openModal:a,closeModal:c}=o,l=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var y;const r=e.playerCards.find(_=>_.id===i);(y=r==null?void 0:r.player)!=null&&y.id&&l.add(r.player.id)}),e.subs.forEach(i=>{var y;const r=e.playerCards.find(_=>_.id===i);(y=r==null?void 0:r.player)!=null&&y.id&&l.add(r.player.id)});const d=new Set,s=e.playerCards.filter(i=>{var r,y,_;return l.has((r=i.player)==null?void 0:r.id)||d.has((y=i.player)==null?void 0:y.id)?!1:(d.add((_=i.player)==null?void 0:_.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(i=>{var v;const r=i.player,y=Zt(r),_=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${bt[r.job]}">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((v=r.clubs)==null?void 0:v.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${bt[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${_}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(u=document.getElementById("close-sub-selector"))==null||u.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),$t(t,e,o)})})}async function Wn(e,t){const{state:o,toast:a,navigate:c}=t,l=e.formationCards.find(u=>u.formation===e.formation),d=(l==null?void 0:l.id)||e.formationCardId;await A.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await A.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([u,i],r)=>{s.push({deck_id:e.deckId,card_id:i,position:u,is_starter:!0,slot_order:r})}),e.subs.forEach((u,i)=>{s.push({deck_id:e.deckId,card_id:u,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),s.length>0){const{error:u}=await A.from("deck_cards").insert(s);if(u){a(u.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function Mi(e){const t=Yt[e]||Yt["4-4-2"],o=["GK1"];for(let a=1;a<=t.DEF;a++)o.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)o.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)o.push(`ATT${a}`);return o}async function on(){const{data:e}=await A.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await A.from("booster_drop_rates").select("*").in("booster_id",e.map(o=>o.id)).order("sort_order");return e.map(o=>({...o,rates:(t||[]).filter(a=>a.booster_id===o.id)}))}function Jn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let o=Math.random()*t;for(const a of e)if(o-=Number(a.percentage),o<=0)return a;return e[e.length-1]}const rn=()=>Object.keys(Ft),Xn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],si={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Zn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}const ji={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Qn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},eo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ci(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function to(e){var r,y;const t=e.player;if(!t)return"";const o=t.job||"ATT",a=ji[o],c=Qn[t.rarity]||"#ccc",l=Ci(t,o),d=t.job2?Ci(t,t.job2):null,s=t.job2?ji[t.job2]:null,u=Zn(t),i=eo[t.country_code]||t.country_code||"";return`
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
        ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((y=t.clubs)==null?void 0:y.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function an(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const o=((c=Object.entries(t).sort((l,d)=>d[1]-l[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:o,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function io(e,{state:t,navigate:o,toast:a}){var d;const c=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await on()).map(an)}catch(s){console.warn("Erreur chargement boosters DB, fallback hardcodé",s)}l.length||(l=Xn.map(s=>({...s,rates:[],isPub:s.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${l.map(s=>{const u=s.cost===0||c>=s.cost;return`<div class="booster-card ${u?"":"disabled"}" data-booster="${s.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${s.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${s.img}" alt="${s.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${s.name}</div>
            <div class="desc">${s.sub}</div>
            <div class="cost">${s.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const u=l.find(i=>i.id===s.dataset.booster);if(u){s.style.opacity="0.5",s.style.pointerEvents="none";try{await no(u,{state:t,toast:a,navigate:o,container:e})}catch(i){a(i.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",u=>{u.stopPropagation();const i=l.find(r=>r.id===s.dataset.boosterId);so(i)})})}async function no(e,{state:t,toast:o,navigate:a,container:c}){var r;if(e.cost>0&&t.profile.credits<e.cost){o("Crédits insuffisants","error");return}if(e.isPub)try{await po()}catch(y){o(y.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await A.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((l||[]).filter(y=>y.card_type==="player").map(y=>y.player_id)),s=new Set((l||[]).filter(y=>y.card_type==="formation").map(y=>y.formation));let u=[];if((r=e.rates)!=null&&r.length)u=await di(t.profile,e);else{const y=e.type||"player";y==="player"?u=await sn(t.profile,e.cardCount,e.cost):y==="game_changer"?u=await dn(t.profile,e.cardCount,e.cost):y==="formation"?u=await ln(t.profile,e.cost):u=await di(t.profile,e)}u.forEach(y=>{y.card_type==="player"&&y.player?y.isDuplicate=d.has(y.player.id):y.card_type==="formation"&&(y.isDuplicate=s.has(y.formation))});const{data:i}=await A.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),cn(u,e,a)}function oo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function gt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function ro(e,t){let o;switch(t){case"legende":o=e.filter(a=>a.rarity==="legende"),o.length||(o=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),o.length||(o=e.filter(a=>gt(a)>=6));break;case"special":o=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),o.length||(o=e.filter(a=>gt(a)>=6));break;case"normal_high":o=e.filter(a=>a.rarity==="normal"&&gt(a)>=6),o.length||(o=e.filter(a=>gt(a)>=6));break;default:o=e.filter(a=>a.rarity==="normal"&&gt(a)>=1&&gt(a)<=5),o.length||(o=e.filter(a=>a.rarity==="normal"));break}return o.length||(o=e),o[Math.floor(Math.random()*o.length)]}async function di(e,t){if(t.cost>0){const{error:s}=await A.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(s)throw s}const{data:o}=await A.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((o||[]).filter(s=>s.card_type==="player").map(s=>s.player_id)),c=new Set((o||[]).filter(s=>s.card_type==="formation").map(s=>s.formation)),l=new Set,d=[];for(let s=0;s<(t.cardCount||5);s++){const u=Jn(t.rates);if(u){if(u.card_type==="player"){const i=I=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[I]||I,r=u.rarity?i(u.rarity):null;let y=A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(y=y.eq("rarity",r));const{data:_}=await y;let v=_||[];if((u.note_min||u.note_max)&&(v=v.filter(I=>{const M=Math.max(Number(I.note_g)||0,Number(I.note_d)||0,Number(I.note_m)||0,Number(I.note_a)||0);return(!u.note_min||M>=u.note_min)&&(!u.note_max||M<=u.note_max)})),v.length||(u.note_min||u.note_max?(v=_||[],console.warn("[Booster] Aucun joueur avec note",u.note_min,"-",u.note_max,"— fallback rareté uniquement")):v=_||[]),!v.length)continue;let C=v.filter(I=>!l.has(I.id));C.length||(C=v);const n=C[Math.floor(Math.random()*C.length)];l.add(n.id);const E=a.has(n.id),{data:S}=await A.from("cards").insert({owner_id:e.id,player_id:n.id,card_type:"player"}).select().single();S&&(d.push({...S,player:n,isDuplicate:E}),A.rpc("record_transfer",{p_card_id:S.id,p_player_id:n.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(u.card_type==="game_changer"){const{data:i}=await A.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],_=r[Math.floor(Math.random()*r.length)].name,{data:v}=await A.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:_}).select().single();v&&d.push(v)}else if(u.card_type==="formation"){const i=rn(),r=i[Math.floor(Math.random()*i.length)],y=c.has(r),{data:_}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();_!=null&&_[0]&&d.push({..._[0],isDuplicate:y})}}}return d}async function sn(e,t,o){if(o>0){const{error:i}=await A.from("users").update({credits:e.credits-o}).eq("id",e.id);if(i)throw i}const{data:a}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(i=>i.job==="GK"),l=a.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&c.length>0,s=[];for(let i=0;i<t;i++){const r=i===0&&d?c:i===0?l:a,y=oo(),_=ro(r,y);_&&s.push(_)}d&&await A.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:u}=await A.from("cards").insert(s.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(u||[]).forEach((i,r)=>{A.rpc("record_transfer",{p_card_id:i.id,p_player_id:s[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((i,r)=>({...u[r],player:i}))}async function dn(e,t,o){const{error:a}=await A.from("users").update({credits:e.credits-o}).eq("id",e.id);if(a)throw a;const{data:c}=await A.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(si).map(r=>({name:r,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const r=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:s,error:u}=await A.from("cards").insert(d).select();return u&&console.error("[Booster GC] Erreur insert:",u.message,u),(s||[]).map(r=>{const y=c==null?void 0:c.find(_=>_.name===r.gc_type||_.id===r.gc_definition_id);return{...r,_gcDef:y||null}})}async function ln(e,t){const{error:o}=await A.from("users").update({credits:e.credits-t}).eq("id",e.id);if(o)throw o;const{data:a}=await A.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(r=>r.formation)),l=rn(),d=l[Math.floor(Math.random()*l.length)],s=c.has(d),{data:u,error:i}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(u||[]).map(r=>({...r,isDuplicate:s}))}function cn(e,t,o,a=null){var ie,pe;if(!e||e.length===0){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",U.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(U),(ie=U.querySelector("#anim-close-err"))==null||ie.addEventListener("click",()=>U.remove());return}e=[...e].sort((U,oe)=>{const ce=U.player?gt(U.player):-1;return(oe.player?gt(oe.player):-1)-ce});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const d=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let u=!1;const i=U=>U.touches&&U.touches[0]?U.touches[0].clientX:U.clientX;function r(U){l||(u=!0,s.style.opacity="1",y(U))}function y(U){if(!u||l)return;const oe=d.getBoundingClientRect(),ce=i(U)-oe.left,he=Math.max(0,Math.min(1,ce/oe.width));s.style.width=he*oe.width+"px",he>=.82&&v()}function _(){l||(u=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{l||(s.style.transition="")},220))}function v(){var oe;if(l)return;l=!0,u=!1,s.style.width="100%",s.style.opacity="1",(oe=document.getElementById("cut-flash"))==null||oe.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const U=document.getElementById("cut-hint");U&&(U.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",S(0)},620)}d.addEventListener("pointerdown",r),window.addEventListener("pointermove",y),window.addEventListener("pointerup",_),d.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",y,{passive:!0}),window.addEventListener("touchend",_);let C=0,n=!1;const E=new Set;function S(U){C=U,document.getElementById("reveal-phase").style.display="flex",I(),M(U,0),te()}function I(){const U=document.getElementById("card-dots");U&&(U.innerHTML=e.map((oe,ce)=>`<div class="card-dot" data-i="${ce}" style="width:8px;height:8px;border-radius:50%;background:${ce===C?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),U.querySelectorAll(".card-dot").forEach(oe=>oe.addEventListener("click",()=>q(parseInt(oe.dataset.i)))))}function M(U,oe){var R;const ce=e[U],he=document.getElementById("card-counter"),_e=document.getElementById("card-track");he&&(he.textContent=`Carte ${U+1} / ${e.length}`);const be=document.getElementById("reveal-btns");be&&(be.style.display=U===e.length-1?"flex":"none");const xe=ce.card_type==="player"&&((R=ce.player)==null?void 0:R.rarity)==="legende",Y=!E.has(U);E.add(U);let X=0;if(ce.card_type==="player"&&ce.player){const Z=ce.player,ue=Z.job||"ATT";X=Number(ue==="GK"?Z.note_g:ue==="DEF"?Z.note_d:ue==="MIL"?Z.note_m:Z.note_a)||0}const P=Z=>{_e.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${xe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${ao(ce)}</div>
          ${ce.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ue=document.getElementById("current-card-wrap");oe!==0?(ue.style.transition="none",ue.style.transform=`translateX(${oe>0?100:-100}%)`,requestAnimationFrame(()=>{ue.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ue.style.transform="translateX(0)"})):ue.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Z||xe?ae():G(),I()};Y&&X>6&&ce.card_type==="player"&&ce.player?j(ce,()=>P(!0)):P(!1)}function j(U,oe){var X;n=!0;const ce=U.player,he=`https://flagsapi.com/${ce.country_code}/flat/64.png`,_e=(X=ce.clubs)==null?void 0:X.logo_url,be=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!be||!xe){n=!1,oe();return}be.style.display="flex";const Y=()=>{const P=xe.firstElementChild;P&&(P.classList.remove("wo-in"),P.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${he}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Y,2e3),setTimeout(()=>{var P;xe.innerHTML=_e?`<img class="wo-in" src="${_e}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((P=ce.clubs)==null?void 0:P.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Y,4450),setTimeout(()=>{be.style.display="none",xe.innerHTML="",n=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),oe()},4900)}function q(U){if(n||U<0||U>=e.length||U===C)return;const oe=U>C?1:-1;C=U,M(U,oe)}function F(){q(C+1)}function H(){q(C-1)}function te(){const U=document.getElementById("card-viewport");if(!U||U._swipeBound)return;U._swipeBound=!0;let oe=0,ce=0,he=0,_e=!1;const be=R=>R.touches?R.touches[0].clientX:R.clientX,xe=R=>R.touches?R.touches[0].clientY:R.clientY,Y=R=>{_e=!0,oe=be(R),ce=xe(R),he=0},X=R=>{if(!_e)return;he=be(R)-oe;const Z=xe(R)-ce;if(Math.abs(he)<Math.abs(Z))return;const ue=document.getElementById("current-card-wrap");ue&&(ue.style.transition="none",ue.style.transform=`translateX(${he*.6}px) rotate(${he*.02}deg)`)},P=()=>{if(!_e)return;_e=!1;const R=document.getElementById("current-card-wrap"),Z=55;he<=-Z&&C<e.length-1?F():he>=Z&&C>0?H():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};U.addEventListener("pointerdown",Y),U.addEventListener("pointermove",X),U.addEventListener("pointerup",P),U.addEventListener("pointercancel",P),U.addEventListener("touchstart",Y,{passive:!0}),U.addEventListener("touchmove",X,{passive:!0}),U.addEventListener("touchend",P),U.addEventListener("click",R=>{if(Math.abs(he)>8)return;const Z=U.getBoundingClientRect();R.clientX-Z.left>Z.width/2?F():H()})}let le=null;function ae(){const U=document.getElementById("fireworks-canvas");if(!U)return;U.width=window.innerWidth,U.height=window.innerHeight;const oe=U.getContext("2d"),ce=[];function he(){const be=Math.random()*U.width,xe=Math.random()*U.height*.6,Y=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],X=Y[Math.floor(Math.random()*Y.length)];for(let P=0;P<60;P++){const R=Math.PI*2/60*P,Z=2+Math.random()*5;ce.push({x:be,y:xe,vx:Math.cos(R)*Z,vy:Math.sin(R)*Z,alpha:1,color:X,size:2+Math.random()*3})}}he(),le=setInterval(he,600);function _e(){if(document.getElementById("fireworks-canvas")){oe.clearRect(0,0,U.width,U.height);for(let be=ce.length-1;be>=0;be--){const xe=ce[be];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){ce.splice(be,1);continue}oe.globalAlpha=xe.alpha,oe.fillStyle=xe.color,oe.beginPath(),oe.arc(xe.x,xe.y,xe.size,0,Math.PI*2),oe.fill()}oe.globalAlpha=1,(le!==null||ce.length>0)&&requestAnimationFrame(_e)}}_e()}function G(){le!==null&&(clearInterval(le),le=null);const U=document.getElementById("fireworks-canvas");U&&U.getContext("2d").clearRect(0,0,U.width,U.height)}if(a){const U=document.getElementById("reveal-btns");U&&(U.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(pe=document.getElementById("reveal-next"))==null||pe.addEventListener("click",()=>{G(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{G(),c.remove(),o("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{G(),c.remove(),o("boosters")})}function ao(e){var t,o;if(e.card_type==="player"&&e.player)return to(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[a==null?void 0:a.color]||l.purple,u=d[a==null?void 0:a.color]||d.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=si[e.gc_type])==null?void 0:t.desc)||"",y=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,_=((o=si[e.gc_type])==null?void 0:o.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${u};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${u}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${y?`<img src="${y}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function so(e){var t,o;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),(o=document.getElementById("odds-close"))==null||o.addEventListener("click",()=>a.remove());return}lo()}function lo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const co="simulation",pn="VOTRE_ZONE_ID";function po(){switch(co){case"propellerads":return uo();case"adsense":return fo();default:return hi()}}function hi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let o=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{o--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=o),l&&(l.textContent=o>0?`Passer (${o})`:"✓ Continuer"),o<=0&&(clearInterval(a),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function uo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(hi());window.propeller.push({zone_id:pn,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function fo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(hi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:pn,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(o){t(o)}})}async function go(e,{state:t,navigate:o,toast:a,refreshProfile:c}){var _,v;const{data:l}=await A.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let d=Array.isArray((_=t.profile)==null?void 0:_.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await A.from("users").update({onboarding_done:!0}).eq("id",t.user.id),o("home");return}let s=null;try{const n=(await on()).find(E=>(E.name||"").toLowerCase().includes("new player"));n&&(s=an(n))}catch(C){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',C)}const u=d.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await A.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function y(){var I;if(i>=u||!d.length){await A.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),o("home");return}const C=d[0],{data:n}=await A.from("users").select("*").eq("id",t.user.id).single();n&&(t.profile=n);let E=[];try{if(C.type==="formation")E=await ln(t.profile,0);else if(C.type==="game_changer")E=await dn(t.profile,C.count||3,0);else if(s&&((I=s.rates)!=null&&I.length)){const M={...s,cost:0,cardCount:C.count||s.cardCount||5};E=await di(t.profile,M),C.guaranteeGK&&!t.profile.first_booster_opened&&(E.some(q=>q.player&&q.player.job==="GK")||await mo(t.profile,E),await A.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else E=await sn(t.profile,C.count||5,0)}catch(M){a(M.message||"Erreur ouverture booster","error");return}d.shift(),i++,await r();const S=C.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:C.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${u})`,img:(s==null?void 0:s.img)||"/manager-wars/icons/booster-players.png"};cn(E,S,o,()=>{y()})}(v=document.getElementById("onboard-start"))==null||v.addEventListener("click",()=>y())}async function mo(e,t){try{const{data:o}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(o!=null&&o.length))return;const a=o[Math.floor(Math.random()*o.length)],c=t.findIndex(d=>d.player);if(c===-1)return;const l=t[c];await A.from("cards").update({player_id:a.id}).eq("id",l.id),t[c]={...l,player_id:a.id,player:a}}catch(o){console.warn("[Onboarding] ensureGK échec",o)}}const kt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Et={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function vt(e,t,o,a,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${o}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function je(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function li(e,t){var a,c;const o=e.player;return{cardId:e.id,position:t||null,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((a=o.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=o.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function rt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Qt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function mt(e,t){const o=kt[t]||kt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const s=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),u=rt(s.length);s.forEach((i,r)=>{i._col=u[r]}),a[d]=s}return a}const l=[...e];for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let i=0;i<o[d];i++){let r=l.findIndex(y=>y.job===d);if(r===-1&&(r=l.findIndex(y=>y.job2===d)),r===-1&&(r=0),l[r]){const y={...l[r],_line:d};s.push(y),l.splice(r,1)}}const u=rt(s.length);s.forEach((i,r)=>{i._col=u[r]}),a[d]=s}return a}function Ze(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ue(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ei(e,t,o){const c=new Set,l=t.filter(r=>{const y=r.gc_type||r.id;return c.has(y)?!1:(c.add(y),!0)});let d=[];function s(r,y){const _=r._gcDef,v={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},C={purple:"#9b59b6",light_blue:"#00bcd4"},n=v[_==null?void 0:_.color]||v.purple,E=C[_==null?void 0:_.color]||C.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${y?"#FFD700":E};background:${n};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${y?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${y?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((_==null?void 0:_.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(_==null?void 0:_.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${_!=null&&_.image_url?`<img src="/manager-wars/icons/${_.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((_==null?void 0:_.effect)||"").slice(0,50)}</span>
      </div>
      ${y?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const u=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",o(r)};function i(){var y,_,v;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=d.length>0;e.innerHTML=`
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
        ${l.map(C=>{const n=d.find(E=>E.gc_type===C.gc_type);return s(C,!!n)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(C=>{C.addEventListener("click",()=>{const n=C.dataset.id,E=l.find(I=>I.id===n);if(!E)return;const S=d.findIndex(I=>I.gc_type===E.gc_type);S>-1?d.splice(S,1):d.length<3&&d.push(E),i()})}),(y=e.querySelector("#gc-launch"))==null||y.addEventListener("click",()=>{r&&u(d)}),(_=e.querySelector("#gc-no-gc"))==null||_.addEventListener("click",()=>u([])),(v=e.querySelector("#gc-reset"))==null||v.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}function xo(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},o=t.matchMode||"vs_ai_easy";return o==="friend"?`Match vs ${t.friendName||"Ami"}`:o==="random"?"Match vs Random":`Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}`}async function yo(e,t,o){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){vt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const d=l.map(r=>r.id),{data:s}=await A.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let u=0;function i(){var I,M,j,q,F;const r=l[u],y=(s||[]).filter(H=>H.deck_id===r.id),_=y.filter(H=>{var te;return H.is_starter&&((te=H.card)==null?void 0:te.player)}).map(H=>li(H.card,H.position)),v=y.find(H=>{var te;return((te=H.card)==null?void 0:te.card_type)==="formation"}),C=r.formation||((I=v==null?void 0:v.card)==null?void 0:I.formation)||"4-4-2",n=_.length>=11?mt(_,C):null,E=_.length>=11;Ze(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${xo(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${u===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${u===0?"0.1":"0.3"});color:${u===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${u===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${C} · ${_.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${u===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${u===l.length-1?"0.1":"0.3"});color:${u===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${u===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${n?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(n,C,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${_.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((H,te)=>`<div style="width:7px;height:7px;border-radius:50%;background:${te===u?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const te=e.querySelector(".deck-preview-wrap svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(M=document.getElementById("prev-deck"))==null||M.addEventListener("click",()=>{u>0&&(u--,i())}),(j=document.getElementById("next-deck"))==null||j.addEventListener("click",()=>{u<l.length-1&&(u++,i())}),(q=document.getElementById("validate-deck"))==null||q.addEventListener("click",()=>{if(!E)return;const H=t.state.params||{};t.navigate("match",{...H,matchMode:H.matchMode||o,deckId:r.id})}),(F=document.getElementById("cancel-deck-select"))==null||F.addEventListener("click",()=>{Ue(e),c("home")});const S=document.getElementById("deck-swipe-zone");if(S){let H=0,te=0;S.addEventListener("touchstart",le=>{H=le.touches[0].clientX,te=le.touches[0].clientY},{passive:!0}),S.addEventListener("touchend",le=>{const ae=le.changedTouches[0].clientX-H,G=le.changedTouches[0].clientY-te;Math.abs(ae)<40||Math.abs(ae)<Math.abs(G)||(ae<0&&u<l.length-1?(u++,i()):ae>0&&u>0&&(u--,i()))},{passive:!0})}}i()}function un(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,o=58){if(!e)return`<div style="width:${t}px;height:${o}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:je(e),c=un(e),l=e._line||e.job||"MIL",d=Et[l]||"#555",s={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",u=e.note!==void 0?Number(e.note)||0:(Number(we(e,l))||0)+(e.boost||0),i=fn(e==null?void 0:e.country_code),r=Math.round(o*.19),y=Math.round(o*.25),_=o-Math.round(o*.19)-Math.round(o*.25),v=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${s};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${v}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${_}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${y}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Wt(e==null?void 0:e.country_code)?`<img src="${Wt(e.country_code)}" style="width:${y+2}px;height:${y-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${y-4}px">${i}</span>`}
      <span style="font-size:${y-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":u}</span>
      ${c?`<img src="${c}" style="width:${y-4}px;height:${y-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,y-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function tt(e,t,o){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((l,d)=>{if(c+=Ye(l,40,52),d<a.length-1){const s=it(l,a[d+1]);c+=`<div style="width:7px;height:3px;background:${s==="#ff3333"||s==="#cc2222"?"rgba(255,255,255,0.12)":s};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),o!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${o}</div>`),c+="</div>",c}function Wt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function fn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,o,a,c=310,l=310,d=[]){var M;const s=Ft[t]||{},u=Ri(t)||ui[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const j of r)(e[j]||[]).forEach((F,H)=>{i[`${j}${H+1}`]=F});function y(j){const q=s[j];return q?{x:q.x*c,y:q.y*l}:null}let _="";for(const[j,q]of u){const F=y(j),H=y(q);if(!F||!H)continue;const te=i[j],le=i[q],ae=it(te,le);ae==="#00ff88"||ae==="#FFD700"?(_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}"
        stroke="${ae}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}"
        stroke="${ae}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}"
        stroke="${ae}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const v=48,C=64,n=13,E=16,S={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[j,q]of Object.entries(i)){const F=y(j);if(!F||!q)continue;const H=j.replace(/[0-9]/g,""),te=Et[H]||"#555",le=d.includes(q.cardId),ae=o==="attack"&&(["MIL","ATT"].includes(H)||le)&&!q.used||o==="defense"&&["GK","DEF","MIL"].includes(H)&&!q.used,G=a.includes(q.cardId);let ie;o==="attack"?ie=le?Math.max(1,Number(q.note_a)||0):H==="MIL"?Number(q.note_m)||0:Number(q.note_a)||0:o==="defense"?ie=H==="GK"?Number(q.note_g)||0:H==="MIL"?Number(q.note_m)||0:Number(q.note_d)||0:ie=Number(H==="GK"?q.note_g:H==="DEF"?q.note_d:H==="MIL"?q.note_m:q.note_a)||0,ie=ie+(q.boost||0);const pe=(F.x-v/2).toFixed(1),U=(F.y-C/2).toFixed(1),oe=S[q==null?void 0:q.rarity]||S.normal;if(q.used){const X=typeof import.meta<"u"&&"/manager-wars/"||"/",R=`${typeof window<"u"&&((M=window.location)==null?void 0:M.origin)||""}${X}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");_+=`<rect x="${pe}" y="${U}" width="${v}" height="${C}" rx="5" fill="#161616"/>`,_+=`<image href="${R}" xlink:href="${R}" x="${pe}" y="${U}" width="${v}" height="${C}" preserveAspectRatio="xMidYMid slice"/>`,_+=`<rect x="${pe}" y="${U}" width="${v}" height="${C}" rx="5" fill="none" stroke="${oe}" stroke-width="2" opacity="0.7"/>`,_+=`<rect x="${pe}" y="${U}" width="${v}" height="${C}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${q.cardId}" data-role="${H}" style="cursor:pointer"/>`;continue}const ce=G?.45:1,he=G?"#FFD700":oe,_e=G?3:(q==null?void 0:q.rarity)==="legende"||(q==null?void 0:q.rarity)==="légende"||(q==null?void 0:q.rarity)==="pepite"||(q==null?void 0:q.rarity)==="pépite"?2.5:2,be=C-n-E;_+=`<defs><clipPath id="cp-${j}"><rect x="${pe}" y="${(F.y-C/2+n).toFixed(1)}" width="${v}" height="${be}"/></clipPath></defs>`,_+=`<rect x="${pe}" y="${U}" width="${v}" height="${C}" rx="5" fill="${te}" opacity="${ce}"/>`;const xe=je(q);xe&&(_+=`<image href="${xe}" xlink:href="${xe}" x="${pe}" y="${(F.y-C/2+n).toFixed(1)}" width="${v}" height="${be}" clip-path="url(#cp-${j})" preserveAspectRatio="xMidYMin slice"/>`),_+=`<rect x="${pe}" y="${U}" width="${v}" height="${n}" rx="4" fill="rgba(255,255,255,0.92)"/>`,_+=`<text x="${F.x.toFixed(1)}" y="${(F.y-C/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(q.name||"").slice(0,9)}</text>`;const Y=(F.y+C/2-E).toFixed(1);_+=`<rect x="${pe}" y="${Y}" width="${v}" height="${E}" fill="rgba(255,255,255,0.92)"/>`;{const X=Wt(q.country_code);X?_+=`<image href="${X}" xlink:href="${X}" x="${(F.x-20).toFixed(1)}" y="${(F.y+C/2-E+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:_+=`<text x="${(F.x-13).toFixed(1)}" y="${(F.y+C/2-E/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${fn(q.country_code)}</text>`,_+=`<text x="${F.x.toFixed(1)}" y="${(F.y+C/2-E/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ie}</text>`;const P=un(q);P?_+=`<image href="${P}" xlink:href="${P}" x="${(F.x+v/2-14).toFixed(1)}" y="${(F.y+C/2-E+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:q.clubName&&(_+=`<text x="${(F.x+14).toFixed(1)}" y="${(F.y+C/2-E/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(q.clubName||"").slice(0,3).toUpperCase()}</text>`),q.boost&&(_+=`<rect x="${(F.x+v/2-12).toFixed(1)}" y="${(F.y-C/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,_+=`<text x="${(F.x+v/2-5).toFixed(1)}" y="${(F.y-C/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${q.boost}</text>`)}_+=`<rect x="${pe}" y="${U}" width="${v}" height="${C}" rx="5" fill="${G?"rgba(255,255,255,0.12)":"none"}" stroke="${he}" stroke-width="${_e}" opacity="${ce}"/>`,ae&&(_+=`<rect x="${pe}" y="${U}" width="${v}" height="${C}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${G?"selected":""}" data-card-id="${q.cardId}" data-role="${H}" style="cursor:pointer"/>`)}const I=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-I} ${-I} ${c+I*2} ${l+I*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${_}
  </svg>`}function dt(e,t,o,a,c=300,l=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${st(e,t,o,a,c,l,d)}
  </div>`}function ot(e,t=!1){const o=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ti(e,t,o,a){var q;const{state:c,navigate:l,toast:d}=t;Ze(e);const s=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return yo(e,t,o);const u=s.deckId;let i,r,y,_;try{const F=await Promise.all([A.from("decks").select("formation,name").eq("id",u).single(),A.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",u).order("slot_order")]);i=F[0].data,y=F[0].error,r=F[1].data,_=F[1].error}catch(F){console.error("[Match] Exception chargement deck:",F),vt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(y||_){console.error("[Match] Erreur Supabase:",y||_),vt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const v=(r||[]).filter(F=>{var H;return F.is_starter&&((H=F.card)==null?void 0:H.player)}).map(F=>li(F.card,F.position)),C=(r||[]).filter(F=>{var H;return!F.is_starter&&((H=F.card)==null?void 0:H.player)}).map(F=>li(F.card,F.position));if(v.length<11){vt(e,"⚠️",`Deck incomplet (${v.length}/11).`,"Compléter",()=>l("decks"));return}const n=(r||[]).find(F=>{var H;return((H=F.card)==null?void 0:H.card_type)==="formation"}),E=(i==null?void 0:i.formation)||((q=n==null?void 0:n.card)==null?void 0:q.formation)||"4-4-2",{data:S,error:I}=await A.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:M}=await A.from("gc_definitions").select("*").eq("is_active",!0),j=(S||[]).map(F=>({...F,_gcDef:(M==null?void 0:M.find(H=>H.name===F.gc_type||H.id===F.gc_definition_id))||null}));a({deckId:u,formation:E,starters:v,subsRaw:C,gcCardsEnriched:j,gcDefs:M||[]})}async function ho(e,t){const{state:o}=t,c=(o.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),d=c;await ti(e,t,c,async({deckId:s,formation:u,starters:i,subsRaw:r,gcCardsEnriched:y,gcDefs:_})=>{try{const v=mt(i,u),C=await bo(u,l),n=async E=>{try{const{data:S,error:I}=await A.from("matches").insert({home_id:o.profile.id,away_id:null,mode:d,home_deck_id:s,status:"in_progress"}).select().single();if(I){console.error("[MatchIA] Erreur création match:",I),vt(e,"⚠️","Impossible de créer le match ("+I.message+").","Retour",()=>t.navigate("home"));return}const M={gcDefs:_||[],matchId:S==null?void 0:S.id,mode:d,difficulty:l,formation:u,homeTeam:v,aiTeam:C,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:E,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:o.profile.club_name||"Vous"};wo(e,M,t)}catch(S){console.error("[MatchIA] Exception launchMatch:",S),vt(e,"⚠️","Erreur au lancement du match : "+S.message,"Retour",()=>t.navigate("home"))}};if(!y.length){n([]);return}ei(e,y,n)}catch(v){console.error("[MatchIA] Exception setup:",v),vt(e,"⚠️","Erreur de préparation du match : "+v.message,"Retour",()=>t.navigate("home"))}})}async function bo(e,t){var d,s;const{data:o}=await A.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!o||o.length<11)return vo(e);const a=kt[e]||kt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...o];for(const u of["GK","DEF","MIL","ATT"]){const i=l.filter(C=>C.job===u),r=l.filter(C=>C.job!==u),y=[...i,...r],_=[];for(let C=0;C<a[u];C++){const n=y[C]||l[C];n&&_.push({cardId:"ai-"+n.id+"-"+C,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((d=n.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((s=n.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:u})}const v=rt(_.length);_.forEach((C,n)=>{C._col=v[n]}),c[u]=_}return c}function vo(e){const t=kt[e]||kt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const d=[];for(let u=0;u<t[l];u++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?i:2,note_d:l==="DEF"?i:2,note_m:l==="MIL"?i:2,note_a:l==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const s=rt(d.length);d.forEach((u,i)=>{u._col=s[i]}),o[l]=d}return o}function wo(e,t,o){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>_o(e,t,o),5e3)}function _o(e,t,o){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(n){return n.reduce((E,S)=>E+we(S,"MIL"),0)}function d(n){let E=0;for(let S=0;S<n.length-1;S++){const I=it(n[S],n[S+1]);I==="#00ff88"?E+=2:I==="#FFD700"&&(E+=1)}return E}const s=l(a)+d(a),u=l(c)+d(c),i=s>=u;function r(n,E,S,I){return`<div id="duel-row-${I}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${E}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${n.map((M,j)=>{const q=j<n.length-1?it(M,n[j+1]):null,F=!q||q==="#ff3333"||q==="#cc2222",H=q==="#00ff88"?"+2":q==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${I}" data-idx="${j}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...M,note:we(M,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${j<n.length-1?`<div class="duel-link duel-link-${I}" data-idx="${j}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${F?"rgba(255,255,255,0.12)":q};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${F?"none":`0 0 8px ${q}`}">
            ${H?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${q}">${H}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${I}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${l(n)} + ${d(n)} liens = <b style="color:#fff">${l(n)+d(n)}</b>
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
  </div>`;const y=()=>{const n=(E,S)=>e.querySelectorAll(E).forEach((I,M)=>{setTimeout(()=>{I.style.opacity="1",I.style.transform="translateY(0) scale(1)"},S+M*90)});n(".duel-card-home",150),n(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((E,S)=>{setTimeout(()=>{E.style.opacity="1"},S*70)}),900),setTimeout(()=>{const E=e.querySelector("#vs-label");E&&(E.style.opacity="1",E.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(S=>S.style.opacity="1")},1250),setTimeout(()=>{_("score-home",s,800),_("score-ai",u,800)},1500)};function _(n,E,S){const I=document.getElementById(n);if(!I)return;const M=performance.now(),j=q=>{const F=Math.min(1,(q-M)/S);I.textContent=Math.round(E*(1-Math.pow(1-F,3))),F<1?requestAnimationFrame(j):I.textContent=E};requestAnimationFrame(j)}requestAnimationFrame(y),t.attacker=i?"home":"ai";const v=i?Qt():null;i&&(t.boostCard={value:v}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(n=>({name:n.name,note:we(n,"MIL"),portrait:je(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiPlayers:c.map(n=>({name:n.name,note:we(n,"MIL"),portrait:je(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),homeTotal:s,aiTotal:u,text:`Duel milieu : ${t.clubName} ${s} – ${u} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const C=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ke(e,t,o),t.attacker==="ai"&&setTimeout(()=>ci(e,t,o),800)};setTimeout(()=>{const n=document.getElementById("score-home"),E=document.getElementById("score-ai"),S=document.getElementById(i?"duel-row-home":"duel-row-ai"),I=document.getElementById(i?"duel-row-ai":"duel-row-home"),M=i?n:E,j=i?E:n;M&&(M.style.fontSize="80px",M.style.color=i?"#FFD700":"#ff6b6b",M.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),j&&(j.style.opacity="0.25"),setTimeout(()=>{S&&(S.style.transformOrigin="center",S.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",S.style.zIndex="5"),setTimeout(()=>{var F;const q=document.getElementById("duel-shock");if(q){const H=(F=I||S)==null?void 0:F.getBoundingClientRect(),te=e.querySelector(".match-screen").getBoundingClientRect();H&&(q.style.top=H.top-te.top+H.height/2+"px"),q.style.animation="shockwave .5s ease-out forwards"}I&&(I.style.transformOrigin="center",I.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var F;const q=document.getElementById("duel-finale");q&&(q.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${v}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,q.style.transition="opacity .45s ease",q.style.opacity="1",q.style.pointerEvents="auto",(F=document.getElementById("start-match-btn"))==null||F.addEventListener("click",C))},600)},700)},2800)}function $o(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(o=>ot(o)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(o=>ot(o)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${ot(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${ot(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ke(e,t,o){var M,j,q,F,H,te,le,ae;const a=t.selected.map(G=>G.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter(G=>!c.includes(G.cardId)),s=Object.values(t.homeTeam).flat().filter(G=>G.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,u=!["GK","DEF","MIL","ATT"].some(G=>(t.aiTeam[G]||[]).some(ie=>!ie.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(G=>!G.used),r=t.phase==="attack"&&u&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];t.log[t.log.length-1];const y=t.phase==="ai-attack"||t.phase==="ai-defense",_=t.phase==="attack",v=t.phase==="defense",C=t.phase==="finished",n=t.gcCards.filter(G=>!t.usedGc.includes(G.id)),E=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${tt((ie.players||[]).map(pe=>({...pe,used:!1})),"#ff6b6b",ie.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${tt((ie.players||[]).map(pe=>({...pe,used:!1})),"#00ff88",ie.total)}
          </div>`}const G=t.log[t.log.length-1];return G?'<div style="padding:2px 4px">'+$o(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const G=window.innerWidth>=700,ie=(Y,X,P)=>{var Ve,Je;const R=(t.gcDefs||[]).find(L=>L.name===Y.gc_type),Z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[R==null?void 0:R.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ue={purple:"#b06ce0",light_blue:"#00d4ef"}[R==null?void 0:R.color]||"#b06ce0",se=(R==null?void 0:R.name)||Y.gc_type,Se=(R==null?void 0:R.effect)||((Ve=Re[Y.gc_type])==null?void 0:Ve.desc)||"",Ie=R!=null&&R.image_url?`/manager-wars/icons/${R.image_url}`:null,Ce=((Je=Re[Y.gc_type])==null?void 0:Je.icon)||"⚡",Pe=Math.round(P*.22),Ae=Math.round(P*.22),Be=P-Pe-Ae,Te=se.length>12?7:9;return`<div class="gc-mini" data-gc-id="${Y.id}" data-gc-type="${Y.gc_type}"
          style="box-sizing:border-box;width:${X}px;height:${P}px;border-radius:10px;border:2px solid ${ue};background:${Z};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Pe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Te}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${X-6}px">${se}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Be}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ie?`<img src="${Ie}" style="max-width:${X-10}px;max-height:${Be-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Be*.55)}px">${Ce}</span>`}
          </div>
          <div style="height:${Ae}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Se.slice(0,38)}</span>
          </div>
        </div>`},pe=(Y,X)=>{var P;return`<div id="boost-card"
          style="box-sizing:border-box;width:${Y}px;height:${X}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(X*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(X*.2)}px">⚡</div>
            <div style="font-size:${Math.round(X*.09)}px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`},U=(Y,X)=>X?pe(130,175):ie(Y,130,175),oe=(Y,X)=>X?pe(68,95):ie(Y,68,95),ce=G?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",he=C?`<button id="btn-results" style="${ce};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:y?`<div style="${ce};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:_?`<button id="btn-action" style="${ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:v?`<button id="btn-action" style="${ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ce};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,_e=_||v?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",be=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${G?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map(Y=>`<div class="sub-btn-col" data-sub-id="${Y.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(Y,76,100)}</div>`).join("")}
      </div>`,xe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${dt(t.homeTeam,t.formation,t.phase,a,300,300,r)}
        </div>
      </div>`;return G?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${be}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${xe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${he}${_e}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${n.map(Y=>U(Y,!1)).join("")}
            ${E?U(null,!0):""}
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
            ${n.map(Y=>oe(Y,!1)).join("")}
            ${E?oe(null,!0):""}
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
          <div>${he}${_e}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(G=>{var ie,pe,U;if(G.type==="duel"){const oe=G.isGoal,ce=G.homeScored?"#FFD700":oe?"#ff6b6b":"rgba(255,255,255,0.3)",he=G.homeScored?"⚽ BUT !":oe?"⚽ BUT IA !":(ie=G.homePlayers)!=null&&ie.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${oe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ce};margin-bottom:4px">
                <div style="font-size:9px;color:${ce};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${he}</div>
                ${(pe=G.homePlayers)!=null&&pe.length?`<div style="margin-bottom:3px">${tt(G.homePlayers,"rgba(255,255,255,0.7)",G.homeTotal)}</div>`:""}
                ${(U=G.aiPlayers)!=null&&U.length?`<div style="opacity:0.7">${tt(G.aiPlayers,"#ff6b6b",G.aiTotal)}</div>`:""}
              </div>`}return G.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${G.outPlayer?Ye({...G.outPlayer,used:!0,_line:G.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${G.inPlayer?Ye({...G.inPlayer,_line:G.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:G.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${G.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${G.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function S(){const G=e.querySelector(".match-screen");if(!G)return;const ie=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.bottom="auto",G.style.height=ie+"px",G.style.minHeight=ie+"px",G.style.maxHeight=ie+"px",G.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),U=e.querySelector("#mobile-play-area");pe&&U&&(U.style.paddingBottom=pe.offsetHeight+"px")}if(S(),setTimeout(S,120),setTimeout(S,400),setTimeout(S,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",S),window.visualViewport.addEventListener("scroll",S)),window.addEventListener("resize",S)),function(){const ie=e.querySelector(".terrain-wrapper svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("viewBox","-26 -26 352 352"),ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const G=e.querySelector(".terrain-wrapper svg");G&&(G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let G=!1,ie=30;const pe=()=>document.getElementById("match-timer"),U=()=>{const oe=pe();if(!oe)return;const ce=String(Math.floor(ie/60)).padStart(2,"0"),he=String(ie%60).padStart(2,"0");oe.textContent=` ${ce}:${he}`,oe.style.color=G?"#ff2222":"#ff9500",oe.style.fontWeight="900"};U(),t._timerInt=setInterval(()=>{if(ie--,ie<0)if(!G)G=!0,ie=15,U();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const oe=document.createElement("div");oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",oe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(oe),setTimeout(()=>{oe.remove(),Lt(e,t,o)},2500)}else U()},1e3)}(M=document.getElementById("match-quit"))==null||M.addEventListener("click",()=>{Ue(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Lt(e,t,o))}),(j=document.getElementById("view-ai"))==null||j.addEventListener("click",()=>jo(t,o)),(q=document.getElementById("toggle-history"))==null||q.addEventListener("click",()=>{var G;(G=document.getElementById("match-history-panel"))==null||G.classList.add("open")}),(F=document.getElementById("close-history"))==null||F.addEventListener("click",()=>{var G;(G=document.getElementById("match-history-panel"))==null||G.classList.remove("open")}),(H=document.getElementById("btn-action"))==null||H.addEventListener("click",()=>{t.selected.length!==0&&(_?Eo(e,t,o):v&&To(e,t,o))}),(te=document.getElementById("btn-results"))==null||te.addEventListener("click",()=>Lt(e,t,o)),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>ko(G,t,e,o))}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>oi(e,t,o,null,G.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(G=>{G.addEventListener("click",()=>So(G.dataset.gcId,G.dataset.gcType,e,t,o))}),(le=document.getElementById("boost-card"))==null||le.addEventListener("click",()=>Mo(e,t,o)),e.querySelectorAll(".sub-btn-col").forEach(G=>{G.addEventListener("click",()=>oi(e,t,o,G.dataset.subId))}),(ae=document.getElementById("sub-btn-main"))==null||ae.addEventListener("click",()=>oi(e,t,o))}function ko(e,t,o,a){const c=e.dataset.cardId,l=e.dataset.role,d=t.selected.findIndex(s=>s.cardId===c);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[l]||[]).find(u=>u.cardId===c);s&&t.selected.push({...s,_role:l,_line:l})}Ke(o,t,a)}function bi(e,t,o){e.matchId&&A.from("matches").update({last_player_id:o}).eq("id",e.matchId).then(()=>{})}function Eo(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),bi(t,o,o.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(s=>!s.used)),c=t.selected.map(d=>{const s=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,u=a&&["GK","DEF"].includes(d._role);return{...s,_line:d._role,...u?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),l=qt(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(d=>{const s=(t.homeTeam[d._role]||[]).find(u=>u.cardId===d.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ke(e,t,o),setTimeout(()=>Ao(e,t,o),1200)}function To(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),bi(t,o,o.state.profile.id);const a=t.selected.map(s=>({...(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,_line:s._role})),c=Bt(a,t.modifiers.home);t.selected.forEach(s=>{const u=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId);u&&(u.used=!0)});const l=Dt(t.pendingAttack.total,c.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:je(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),homePlayers:t.selected.map(s=>{const u=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s;return{name:u.name,note:(u._line==="GK"?Number(u.note_g)||0:u._line==="MIL"?Number(u.note_m)||0:Number(u.note_d)||0)+(u.boost||0),portrait:je(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(l.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ke(e,t,o),Jt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{_t(e,t,o,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,_t(e,t,o,"home-attack")}function ci(e,t,o){bi(t,o,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Ji(a,"attack",t.difficulty);if(!c.length){Ht(e,t,o);return}const l=qt(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),u=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!u){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:je(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Ke(e,t,o),Jt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{_t(e,t,o,"home-attack")});return}t.phase="defense",Ke(e,t,o)}function Ao(e,t,o){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Ji(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(y=>(t.aiTeam[y]||[]).filter(_=>!_.used)).length){t.homeScore++;const _={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(v=>({name:v.name,note:we(v,v._line||v.job),portrait:je(v),job:v.job,country_code:v.country_code,rarity:v.rarity,clubName:v.clubName,clubLogo:v.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(_),t.modifiers.ai={},t.pendingAttack=null,Ke(e,t,o),Jt(_.homePlayers,t.homeScore,t.aiScore,!0,()=>{_t(e,t,o,"ai-attack")});return}const d=c.length>0?Bt(c,t.modifiers.ai).total:0;c.forEach(y=>{y.used=!0});const s=Dt(t.pendingAttack.total,d,t.modifiers.ai),u={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(y=>({name:y.name,note:y._line==="MIL"?y.note_m:y.note_a,portrait:je(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),aiPlayers:c.map(y=>({name:y.name,note:y._line==="GK"?y.note_g:y._line==="MIL"?y.note_m:y.note_d,portrait:je(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(s.shielded)u.text="🛡️ Bouclier IA !",t.log.push(u);else if(s.goal){t.homeScore++,u.isGoal=!0,u.homeScored=!0,u.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Ke(e,t,o),Jt(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{_t(e,t,o,"ai-attack")});return}else u.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(u);t.modifiers.ai={},t.pendingAttack=null,_t(e,t,o,"ai-attack")}function _t(e,t,o,a){if(t.round++,gn(t)){Lt(e,t,o);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){Ht(e,t,o);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ht(e,t,o);return}setTimeout(()=>ci(e,t,o),100);return}t.phase="attack",Ke(e,t,o)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ht(e,t,o);return}t.phase="ai-attack",Ke(e,t,o),setTimeout(()=>ci(e,t,o),800)}}function gn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),o=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!o}function Ht(e,t,o){gn(t)?Lt(e,t,o):(t.phase="attack",Ke(e,t,o))}function zo(e,t,o){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=je(e),l=je(t),d=Et[e.job]||"#555",s=Et[t.job]||"#555",u=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${u}</div>
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
  `,document.body.appendChild(a);let r=!1;const y=()=>{r||(r=!0,a.remove(),o())};a.addEventListener("click",y),setTimeout(y,2e3)}function At(e,t="rgba(0,0,0,0.8)"){const o=document.createElement("div");o.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2200)}function oi(e,t,o,a=null,c=null){var v,C;if(t.phase!=="attack"){At("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){At(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([n,E])=>(E||[]).filter(S=>S.used).map(S=>({...S,_line:S._line||n}))),d=t.homeSubs.filter(n=>!t.usedSubIds.includes(n.cardId));if(!l.length){At("Aucun joueur utilisé à remplacer");return}if(!d.length){At("Aucun remplaçant disponible");return}let s=Math.max(0,l.findIndex(n=>n.cardId===c));const u=((v=l[s])==null?void 0:v._line)||((C=l[s])==null?void 0:C.job);let i=a?Math.max(0,d.findIndex(n=>n.cardId===a)):Math.max(0,d.findIndex(n=>n.job===u)),r=!1;const y=document.createElement("div");y.id="sub-overlay",y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function _(){var q,F,H,te,le,ae;const n=l[s],E=d[i],S=Math.min(130,Math.round((window.innerWidth-90)/2)),I=Math.round(S*1.35),M=G=>`background:rgba(255,255,255,0.12);border:none;color:${G?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${G?"default":"pointer"};flex-shrink:0`;y.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${M(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${E?Ye({...E,used:!1,boost:0},S,I):"<div>—</div>"}</div>
        <button id="in-down" style="${M(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${M(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${n?Ye({...n,used:!1,boost:0},S,I):"<div>—</div>"}</div>
        <button id="out-down" style="${M(s>=l.length-1)}" ${s>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(q=y.querySelector("#sub-close"))==null||q.addEventListener("click",()=>y.remove()),(F=y.querySelector("#out-up"))==null||F.addEventListener("click",()=>{s>0&&(s--,_())}),(H=y.querySelector("#out-down"))==null||H.addEventListener("click",()=>{s<l.length-1&&(s++,_())}),(te=y.querySelector("#in-up"))==null||te.addEventListener("click",()=>{i>0&&(i--,_())}),(le=y.querySelector("#in-down"))==null||le.addEventListener("click",()=>{i<d.length-1&&(i++,_())});const j=(G,ie,pe,U)=>{const oe=y.querySelector("#"+G);if(!oe)return;let ce=0;oe.addEventListener("touchstart",he=>{ce=he.touches[0].clientY},{passive:!0}),oe.addEventListener("touchend",he=>{const _e=he.changedTouches[0].clientY-ce;if(Math.abs(_e)<30)return;const be=ie();_e<0&&be<U-1?(pe(be+1),_()):_e>0&&be>0&&(pe(be-1),_())},{passive:!0})};j("in-panel",()=>i,G=>i=G,d.length),j("out-panel",()=>s,G=>s=G,l.length),(ae=y.querySelector("#sub-confirm"))==null||ae.addEventListener("click",G=>{if(G.preventDefault(),G.stopPropagation(),r)return;r=!0;const ie=l[s],pe=d[i];if(!ie||!pe)return;let U=null,oe=-1;for(const[he,_e]of Object.entries(t.homeTeam)){const be=(_e||[]).findIndex(xe=>xe.cardId===ie.cardId);if(be!==-1){U=he,oe=be;break}}if(oe===-1||!U){At("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),y.remove();return}const ce={...pe,_line:U,_col:ie._col||0,used:!1,boost:0};t.homeTeam[U].splice(oe,1,ce),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(pe.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ie.name,firstname:ie.firstname,note:we(ie,U),portrait:je(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},inPlayer:{name:pe.name,firstname:pe.firstname,note:we(pe,U),portrait:je(pe),job:pe.job,country_code:pe.country_code,rarity:pe.rarity,clubName:pe.clubName,clubLogo:pe.clubLogo},text:`🔄 ${pe.firstname} ${pe.name} remplace ${ie.firstname} ${ie.name}`}),y.remove(),zo(ie,pe,()=>Ke(e,t,o))})}document.body.appendChild(y),_()}function So(e,t,o,a,c){var C,n;const l=(a.gcDefs||[]).find(E=>E.name===t),d=Re[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",u={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",i=(l==null?void 0:l.name)||t,r=(l==null?void 0:l.effect)||d.desc,y=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,_=d.icon||"⚡",v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",v.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${u};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${u}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${y?`<img src="${y}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${_}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(v),(C=v.querySelector("#gc-back"))==null||C.addEventListener("click",()=>v.remove()),(n=v.querySelector("#gc-use"))==null||n.addEventListener("click",()=>{v.remove(),Lo(e,t,o,a,c)})}function Rt(e,t,o,a,c,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function u(){var i,r;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${o}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(y=>{const _=y._line||y.job||"MIL",v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[_]||"#555",C=we(y,_)+(y.boost||0),n=s.find(E=>E.cardId===y.cardId);return`<div class="gc-pick-item" data-cid="${y.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${n?"#FFD700":"rgba(255,255,255,0.25)"};background:${v};overflow:hidden;cursor:pointer;flex-shrink:0;${y.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${C}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${_}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(y=>{y.addEventListener("click",()=>{const _=y.dataset.cid,v=e.find(n=>n.cardId===_);if(!v)return;const C=s.findIndex(n=>n.cardId===_);C>-1?s.splice(C,1):s.length<t&&s.push(v),u()})}),(r=d.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{d.remove(),l(s)})}u(),document.body.appendChild(d)}const Io={BOOST_STAT:({value:e=1,count:t=1,roles:o=[]},a,c,l)=>{const d=Object.entries(a.homeTeam).filter(([s])=>!o.length||o.includes(s)).flatMap(([s,u])=>u.filter(i=>!i.used).map(i=>({...i,_line:s})));return d.length?(Rt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,s=>{s.forEach(u=>{const i=(a.homeTeam[u._line]||[]).find(r=>r.cardId===u.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Ke(c,a,l)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ke(c,a,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:o=[],target:a="ai"},c,l,d)=>{const s=a==="home"?c.homeTeam:c.aiTeam,u=a==="ai"?"adverse":"allié",i=Object.entries(s).filter(([r])=>!o.length||o.includes(r)).flatMap(([r,y])=>y.filter(_=>!_.used).map(_=>({..._,_line:r})));return i.length?(Rt(i,t,`Choisir ${t} joueur(s) ${u}(s) à débuffer (-${e})`,l,c,r=>{r.forEach(y=>{const v=((a==="home"?c.homeTeam:c.aiTeam)[y._line]||[]).find(C=>C.cardId===y.cardId);v&&(v.boost=(v.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${v.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Ke(l,c,d)}),!0):(c.log.push({text:`🎯 Aucun joueur ${u} disponible`,type:"info"}),Ke(l,c,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:o="ai"},a,c,l)=>{const d=o==="home"?a.homeTeam:a.aiTeam,s=o==="ai"?"adverse":"allié",u=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(y=>!y.used).map(y=>({...y,_line:i})));return u.length?(Rt(u,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,c,a,i=>{i.forEach(r=>{const _=((o==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(v=>v.cardId===r.cardId);_&&(_.used=!0,a.log.push({text:`❌ ${_.name}${o==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ke(c,a,l)}),!0):(a.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Ke(c,a,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},o,a,c)=>{const l=Object.entries(o.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,s])=>s.filter(u=>u.used).map(u=>({...u,_line:d})));return l.length?(Rt(l,e,`Choisir ${e} joueur(s) à ressusciter`,a,o,d=>{d.forEach(s=>{const u=(o.homeTeam[s._line]||[]).find(i=>i.cardId===s.cardId);u&&(u.used=!1,o.log.push({text:`💫 ${u.name} ressuscité !`,type:"info"}))}),Ke(a,o,c)}),!0):(o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ke(a,o,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Lo(e,t,o,a,c){a.usedGc.push(e);const l=a.gcDefs||[],d=l.find(u=>u.name===t)||l.find(u=>{var i;return((i=u.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const u=Io[d.effect_type];u?u(d.effect_params||{},a,o,c)||(s=!0):(c.toast(`Effet "${d.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const u=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(y=>y.used).map(y=>({...y,_line:i})));u.length?(u[0].used=!1,a.log.push({text:`💫 ${u[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const u=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(u.length){const i=u.sort((r,y)=>we(y,"ATT")-we(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}A.from("cards").delete().eq("id",e).then(()=>{}),s&&Ke(o,a,c)}function Mo(e,t,o){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){o.toast("Aucun joueur actif à booster","error");return}o.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Et[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${we(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[d]||[]).find(u=>u.cardId===l);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,o.closeModal(),Ke(e,t,o)})})}function Jt(e,t,o,a,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
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
    ${t} – ${o}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(i=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Et[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let s=!1;const u=()=>{s||(s=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",u),setTimeout(u,3500)}async function Lt(e,t,o){var r,y;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=o,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,d=c?"victoire":l?"nul":"defaite",s=Bn(t.mode,d);t.matchId&&await A.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const u={credits:(a.profile.credits||0)+s,matches_played:(a.profile.matches_played||0)+1};c?u.wins=(a.profile.wins||0)+1:l?u.draws=(a.profile.draws||0)+1:u.losses=(a.profile.losses||0)+1,await A.from("users").update(u).eq("id",a.profile.id),await o.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),Ue(e),o.navigate("home")}),(y=document.getElementById("res-replay"))==null||y.addEventListener("click",()=>{i.remove(),Ue(e),o.navigate("match",{matchMode:t.mode})})}function jo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function mn(e,t){var o,a;try{const c=(a=(o=t==null?void 0:t.state)==null?void 0:o.profile)==null?void 0:a.id;try{(A.getChannels?A.getChannels():[]).forEach(d=>{const s=d.topic||"";(s.includes("matchmaking")||s.includes("pvp-match")||s.includes("friend-invite"))&&A.removeChannel(d)})}catch(l){console.warn("[Random] cleanup canaux:",l)}c&&await A.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ti(e,t,"random",({deckId:c,formation:l,starters:d,subsRaw:s,gcCardsEnriched:u,gcDefs:i})=>{const r=y=>Co(e,t,c,l,d,s,y,i||[]);if(!u.length){r([]);return}ei(e,u,r)})}async function Co(e,t,o,a,c,l,d=[],s=[]){var I;const{state:u,navigate:i,toast:r}=t;let y=!1,_=null;Ze(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const v=async(M=!0)=>{y=!0,_&&(A.removeChannel(_),_=null),M&&await A.rpc("cancel_matchmaking",{p_user_id:u.profile.id}).catch(()=>{})};(I=document.getElementById("mm-cancel"))==null||I.addEventListener("click",async()=>{try{await v(!0)}catch{}Ue(e),i("home")});const C=async(M,j,q)=>{if(y)return;y=!0,_&&(A.removeChannel(_),_=null);const F=document.getElementById("mm-status");F&&(F.textContent="Adversaire trouvé !"),await new Promise(H=>setTimeout(H,600)),e.isConnected&&xn(e,t,M,q,d,s)},{data:n,error:E}=await A.rpc("try_matchmake",{p_user_id:u.profile.id,p_deck_id:o});if(E||!(n!=null&&n.success)){r("Erreur de matchmaking","error"),Ue(e),i("home");return}if(n.matched){C(n.match_id,n.opponent_id,!1);return}const S=document.getElementById("mm-status");S&&(S.textContent="En attente d'un autre joueur..."),_=A.channel("matchmaking-"+u.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${u.profile.id}`},M=>{const j=M.new;j.status==="matched"&&j.match_id&&C(j.match_id,j.matched_with,!0)}).subscribe()}async function Fo(e,t,o){const{state:a,navigate:c,toast:l}=t;try{(A.getChannels?A.getChannels():[]).forEach(i=>{const r=i.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&A.removeChannel(i)})}catch{}const{data:d}=await A.from("matches").select("home_id, away_id, status").eq("id",o).single();if(!d){l("Match introuvable","error"),c("home");return}if(d.status==="finished"){l("Ce match est terminé","info"),c("home");return}const s=d.home_id===a.profile.id;xn(e,t,o,s,[],[])}async function xn(e,t,o,a,c=[],l=[]){const{state:d,navigate:s,toast:u}=t,i=a?"p1":"p2",r=a?"p2":"p1",y=(c||[]).map(L=>L.id),_=(c||[]).map(L=>({id:L.id,gc_type:L.gc_type,_gcDef:L._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await A.from("matches").select("*").eq("id",o).single();if(!v){u("Match introuvable","error"),s("home");return}async function C(){const[{data:L},{data:b},{data:p},{data:f}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]),g=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),x=((L==null?void 0:L.starters)||[]).map($=>g($)),m=((b==null?void 0:b.starters)||[]).map($=>g($)),h=(L==null?void 0:L.formation)||"4-4-2",w=(b==null?void 0:b.formation)||"4-4-2";return{p1Team:mt(x,h),p2Team:mt(m,w),p1Subs:((L==null?void 0:L.subs)||[]).map($=>g($)),p2Subs:((b==null?void 0:b.subs)||[]).map($=>g($)),p1Formation:h,p2Formation:w,p1Name:(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"Joueur 1",p2Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?y:[],gc_p2:a?[]:y,gcCardsFull_p1:a?_:[],gcCardsFull_p2:a?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let n=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(!n)if(a){n=await C();const{data:L}=await A.from("matches").select("game_state").eq("id",o).single();!(L!=null&&L.game_state)||!Object.keys(L.game_state).length?await A.from("matches").update({game_state:n,turn_user_id:v.home_id}).eq("id",o):n=L.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let L=0;L<30&&!n;L++){await new Promise(p=>setTimeout(p,400));const{data:b}=await A.from("matches").select("game_state").eq("id",o).single();b!=null&&b.game_state&&Object.keys(b.game_state).length&&(n=b.game_state)}if(!n){u("Erreur de synchronisation","error"),s("home");return}n.gc_p2=y,n.gcCardsFull_p2=_,await A.from("matches").update({game_state:n}).eq("id",o)}let E=!1,S=null,I=!1;const M=new Set,j=new Set;function q(L){var $,k;try{A.removeChannel(F)}catch{}const b=n[i+"Score"]||0,p=n[r+"Score"]||0;let f,g;L.winner_id?(f=L.winner_id===d.profile.id,g=!1):L.forfeit?(f=b>p,g=!1):(g=b===p,f=b>p),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const m=g?"🤝":f?"🏆":"😞",h=g?"MATCH NUL":f?"VICTOIRE !":"DÉFAITE",w=g?"#fff":f?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${m}</div>
      <div style="font-size:26px;font-weight:900;color:${w}">${h}</div>
      <div style="font-size:18px">${n[i+"Name"]} ${b} – ${p} ${n[r+"Name"]}</div>
      ${L.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${f?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(k=x.querySelector("#pvp-end-home"))==null||k.addEventListener("click",()=>{x.remove(),Ue(e),s("home")})}const F=A.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},L=>{const b=L.new;try{if(b.status==="finished"||b.forfeit){if(E)return;E=!0,S&&(clearInterval(S),S=null),b.game_state&&(n=b.game_state),q(b);return}if(b.game_state){const p=n;n=b.game_state;const f=n._lastGC;if(f&&f.seq&&!j.has(f.seq)&&(j.add(f.seq),f.by!==i)){be(f.type,f.by,()=>U());return}const g=p[i+"Score"]||0,x=p[r+"Score"]||0,m=n[i+"Score"]||0,h=n[r+"Score"]||0,w=m>g,$=h>x;if((w||$)&&!M.has(n.round)){M.add(n.round);const k=[...n.log||[]].reverse().find(z=>z.isGoal),T=((k==null?void 0:k.homePlayers)||[]).map(z=>({name:z.name,note:z.note,portrait:z.portrait,job:z.job}));_e(T,m,h,w,()=>U());return}U()}}catch(p){console.error("[PvP] crash:",p)}}).subscribe();async function H(L){Object.assign(n,L),n.lastActionAt=new Date().toISOString();const{error:b}=await A.from("matches").update({game_state:n}).eq("id",o);b&&u("Erreur de synchronisation","error");try{U()}catch(p){console.error("[PvP] renderPvpScreen crash:",p)}}async function te(){if(E)return;E=!0,S&&(clearInterval(S),S=null);const L=a?v.away_id:v.home_id,b=a?"p2":"p1",p=a?"p1":"p2",f={...n,[b+"Score"]:3,[p+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:L,home_score:f.p1Score||0,away_score:f.p2Score||0,game_state:f}).eq("id",o)}catch{}try{A.removeChannel(F)}catch{}setTimeout(()=>{Ue(e),s("home")},800)}const le={BOOST_STAT:({value:L=1,count:b=1,roles:p=[]},f,g)=>{const x=f[i+"Team"],m=Object.entries(x).filter(([h])=>!p.length||p.includes(h)).flatMap(([h,w])=>w.filter($=>!$.used).map($=>({...$,_line:h})));if(!m.length){f.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),g(f);return}ae(m,b,`Choisir ${b} joueur(s) à booster (+${L})`,h=>{h.forEach(w=>{const $=(x[w._line]||[]).find(k=>k.cardId===w.cardId);$&&($.boost=($.boost||0)+L,f.log.push({text:`⚡ +${L} sur ${$.name}`,type:"info"}))}),f[i+"Team"]=x,g(f)})},DEBUFF_STAT:({value:L=1,count:b=1,roles:p=[],target:f="ai"},g,x)=>{const m=f==="home"?i:r,h=g[m+"Team"],w=f==="home"?"allié":"adverse",$=Object.entries(h).filter(([k])=>!p.length||p.includes(k)).flatMap(([k,T])=>T.filter(z=>!z.used).map(z=>({...z,_line:k})));if(!$.length){g.log.push({text:`🎯 Aucun joueur ${w}`,type:"info"}),x(g);return}ae($,b,`Choisir ${b} joueur(s) ${w}(s) (-${L})`,k=>{k.forEach(T=>{const z=(h[T._line]||[]).find(B=>B.cardId===T.cardId);z&&(z.boost=(z.boost||0)-L,g.log.push({text:`🎯 -${L} sur ${z.name}`,type:"info"}))}),g[m+"Team"]=h,x(g)})},GRAY_PLAYER:({count:L=1,roles:b=[],target:p="ai"},f,g)=>{const x=p==="home"?i:r,m=f[x+"Team"],h=p==="home"?"allié":"adverse",w=Object.entries(m).filter(([$])=>!b.length||b.includes($)).flatMap(([$,k])=>k.filter(T=>!T.used).map(T=>({...T,_line:$})));if(!w.length){f.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),g(f);return}ae(w,L,`Choisir ${L} joueur(s) ${h}(s) à exclure`,$=>{$.forEach(k=>{const T=(m[k._line]||[]).find(z=>z.cardId===k.cardId);T&&(T.used=!0,f.log.push({text:`❌ ${T.name} exclu !`,type:"info"}))}),f[x+"Team"]=m,g(f)})},REVIVE_PLAYER:({count:L=1,roles:b=[]},p,f)=>{const g=p[i+"Team"],x=Object.entries(g).filter(([m])=>!b.length||b.includes(m)).flatMap(([m,h])=>h.filter(w=>w.used).map(w=>({...w,_line:m})));if(!x.length){p.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),f(p);return}ae(x,L,`Choisir ${L} joueur(s) à ressusciter`,m=>{m.forEach(h=>{const w=(g[h._line]||[]).find($=>$.cardId===h.cardId);w&&(w.used=!1,p.log.push({text:`💫 ${w.name} ressuscité !`,type:"info"}))}),p[i+"Team"]=g,f(p)})},REMOVE_GOAL:({},L,b)=>{const p=r+"Score";L[p]>0?(L[p]--,L.log.push({text:"🚫 Dernier but annulé !",type:"info"})):L.log.push({text:"🚫 Aucun but à annuler",type:"info"}),b(L)},ADD_GOAL_DRAW:({},L,b)=>{L[i+"Score"]===L[r+"Score"]?(L[i+"Score"]++,L.log.push({text:"🎯 But bonus !",type:"info"})):L.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),b(L)},ADD_SUB:({value:L=1},b,p)=>{b.maxSubs=(b.maxSubs||3)+L,b.log.push({text:`🔄 +${L} remplacement(s)`,type:"info"}),p(b)},CUSTOM:({},L,b)=>b(L)};function ae(L,b,p,f){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function m(){var w,$;const h=L.map(k=>{const T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[k._line]||"#555",z=we(k,k._line)+(k.boost||0),W=x.find(O=>O.cardId===k.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=k.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${k.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${W};background:${T};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${k.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${k._line}</div>
        </div>`}).join("");g.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${p}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x.length}/${b}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${h}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${x.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${x.length}/${b})
          </button>
        </div>`,(w=g.querySelector("#pp-close"))==null||w.addEventListener("click",()=>g.remove()),g.querySelectorAll(".pp-item").forEach(k=>{k.addEventListener("click",()=>{const T=k.dataset.cid,z=L.find(W=>W.cardId===T),B=x.findIndex(W=>W.cardId===T);z&&(B>-1?x.splice(B,1):x.length<b&&x.push(z),m())})}),($=g.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{g.remove(),f(x)})}m(),document.body.appendChild(g)}async function G(L,b){const f=(n["gcCardsFull_"+i]||[]).find(h=>h.id===L),g=(f==null?void 0:f._gcDef)||(n.gcDefs||[]).find(h=>{var w;return h.name===b||((w=h.name)==null?void 0:w.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),x=[...n["usedGc_"+i]||[],L],m={type:b,by:i,seq:(n._gcAnimSeq||0)+1};j.add(m.seq),be(b,i,async()=>{if(g!=null&&g.effect_type&&g.effect_type!=="CUSTOM"){const w=le[g.effect_type];if(w){const $={...n};w(g.effect_params||{},$,async k=>{k["usedGc_"+i]=x,k._lastGC=m,k._gcAnimSeq=m.seq,await H(k)});return}}const h={...n};switch(b){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const w=r+"Score";h[w]>0&&(h[w]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+i]=x,h._lastGC=m,h._gcAnimSeq=m.seq,await H(h)})}function ie(L,b){const p="usedCardIds_"+L,f=new Set(n[p]||[]);b.forEach(g=>f.add(g)),n[p]=[...f]}function pe(){for(const L of["p1","p2"]){const b=new Set(n["usedCardIds_"+L]||[]),p=n[L+"Team"];if(p)for(const f of["GK","DEF","MIL","ATT"])(p[f]||[]).forEach(g=>{g.used=b.has(g.cardId)})}}function U(){var Le,He,et,lt,ct,pt;if(n.phase==="reveal")return oe();if(n.phase==="midfield")return he();if(n.phase==="finished")return Je();const L=n[i+"Team"],b=n[r+"Team"];pe();const p=n[i+"Score"],f=n[r+"Score"],g=n[i+"Name"],x=n[r+"Name"],m=n.phase===i+"-attack",h=n.phase===i+"-defense",w=Array.isArray(n["selected_"+i])?n["selected_"+i]:[],$=w.map(ne=>ne.cardId),k=window.innerWidth>=700,T=n[i+"Subs"]||[],z=n["usedSubIds_"+i]||[],B=T.filter(ne=>!z.includes(ne.cardId)),W=n["gcCardsFull_"+i]||[],J=n["usedGc_"+i]||[],O=W.filter(ne=>!J.includes(ne.id)),D=n.boostOwner===i&&!n.boostUsed,V=!["GK","DEF","MIL","ATT"].some(ne=>(b[ne]||[]).some(K=>!K.used)),Q=[...L.MIL||[],...L.ATT||[]].filter(ne=>!ne.used),re=m&&V&&Q.length===0?[...L.GK||[],...L.DEF||[]].filter(ne=>!ne.used).map(ne=>ne.cardId):[];function de(ne,K,N){var ft,ht;const ee=ne._gcDef,ge={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",We=(ee==null?void 0:ee.name)||ne.gc_type,Xe=(ee==null?void 0:ee.effect)||((ft=Re[ne.gc_type])==null?void 0:ft.desc)||"",Qe=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,nt=((ht=Re[ne.gc_type])==null?void 0:ht.icon)||"⚡",xt=Math.round(N*.22),yt=Math.round(N*.22),at=N-xt-yt,ut=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ne.id}" data-gc-type="${ne.gc_type}"
        style="box-sizing:border-box;width:${K}px;height:${N}px;border-radius:10px;border:2px solid ${ye};background:${ge};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${xt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ut}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${K-6}px">${We}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${at}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Qe?`<img src="${Qe}" style="max-width:${K-10}px;max-height:${at-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(at*.55)}px">${nt}</span>`}
        </div>
        <div style="height:${yt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Xe.slice(0,38)}</span>
        </div>
      </div>`}function fe(ne,K){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ne}px;height:${K}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(K*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(K*.2)}px">⚡</div>
        <div style="font-size:${Math.round(K*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const me=(ne,K)=>K?fe(130,175):de(ne,130,175),ve=(ne,K)=>K?fe(68,95):de(ne,68,95),ze=k?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",De=m?Ae(i)?`<button id="pvp-action" style="${ze};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${w.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ze};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${ze};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${w.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,ke=m&&!Ae(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':m||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${w.length}/3 sélectionné(s)</div>`:"",Ee=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${k?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${B.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':B.map(ne=>`<div class="pvp-sub-btn" data-sub-id="${ne.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ne,k?76:44,k?100:58)}</div>`).join("")}
    </div>`,$e=m?"attack":h?"defense":"idle",Fe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(L,n[i+"Formation"],$e,$,300,300,re)}
      </div>
    </div>`;function Ge(ne){if(ne.type==="duel"&&(ne.homeTotal!=null||ne.aiTotal!=null)){const K=(ne.homeTotal||0)>=(ne.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ne.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ne.homePlayers||[]).map(N=>ot(N)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${K?20:14}px;font-weight:900;color:${K?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ne.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${K?14:20}px;font-weight:900;color:${K?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ne.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ne.aiPlayers||[]).map(N=>ot(N)).join("")}
            </div>
          </div>
          ${ne.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ne.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ne.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ne.type==="goal"?700:400};padding:3px 2px">${ne.text||""}</div>`}const Oe=(()=>{var K,N;if(h&&((K=n.pendingAttack)!=null&&K.players)){const ee=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${tt((ee.players||[]).map(ge=>({...ge,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(m&&((N=n.pendingAttack)!=null&&N.players)){const ee=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((ee.players||[]).map(ge=>({...ge,used:!1})),"#00ff88",ee.total)}
        </div>`}const ne=(n.log||[]).slice(-1)[0];return ne?'<div style="padding:2px 4px">'+Ge(ne)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${p} – ${f}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Oe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;Ze(e),e.style.overflow="hidden",k?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ee}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Fe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${De}${ke}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${O.map(ne=>me(ne,!1)).join("")}
            ${D?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(L,n[i+"Formation"],$e,$,300,300,re)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(ne=>ve(ne,!1)).join("")}
            ${D?ve(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${m&&B.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${m&&B.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${m&&B.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${m&&B.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${B.length}</div>
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
          <div>${De}${ke}</div>
        </div>
      </div>`;function qe(){const ne=e.querySelector(".match-screen");if(!ne)return;const K=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ne.style.height=K+"px",ne.style.minHeight=K+"px",ne.style.maxHeight=K+"px",ne.style.overflow="hidden";const N=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");N&&ee&&(ee.style.paddingBottom=N.offsetHeight+"px")}if(qe(),setTimeout(qe,120),setTimeout(qe,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",qe),window.visualViewport.addEventListener("scroll",qe)),window.addEventListener("resize",qe)),function(){const K=e.querySelector(".terrain-wrapper svg");K&&(K.removeAttribute("width"),K.removeAttribute("height"),K.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",K.setAttribute("viewBox","-26 -26 352 352"),K.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ne=>{ne.addEventListener("click",()=>{if(!m&&!h)return;const K=ne.dataset.cardId,N=ne.dataset.role,ee=(L[N]||[]).find(Xe=>Xe.cardId===K);if(!ee||ee.used)return;const ge=re.includes(K);if(m&&!["MIL","ATT"].includes(N)&&!ge)return;Array.isArray(n["selected_"+i])||(n["selected_"+i]=[]);const ye=n["selected_"+i],We=ye.findIndex(Xe=>Xe.cardId===K);We>-1?ye.splice(We,1):ye.length<3&&ye.push({...ee,_role:N}),U()})}),e.querySelectorAll(".match-used-hit").forEach(ne=>{ne.addEventListener("click",()=>X(ne.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ne=>{ne.addEventListener("click",()=>X())}),(Le=e.querySelector("#pvp-sub-open"))==null||Le.addEventListener("click",()=>X()),e.querySelectorAll(".pvp-gc-mini").forEach(ne=>{ne.addEventListener("click",()=>xe(ne.dataset.gcId,ne.dataset.gcType))}),(He=e.querySelector("#pvp-boost-card"))==null||He.addEventListener("click",()=>Y()),(et=e.querySelector("#pvp-action"))==null||et.addEventListener("click",ne=>{m?ne.currentTarget.dataset.pass==="1"||!Ae(i)?ue():se():h&&Se()}),(lt=e.querySelector("#pvp-quit"))==null||lt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&te()}),(ct=e.querySelector("#pvp-view-opp"))==null||ct.addEventListener("click",()=>R()),(pt=e.querySelector("#pvp-toggle-history"))==null||pt.addEventListener("click",()=>Z()),S&&(clearInterval(S),S=null),(m||h)&&!E){let ne=30,K=!1;const N=()=>document.getElementById("pvp-timer"),ee=()=>{N()&&(N().textContent=ne+"s",N().style.color=K?"#ff4444":"#fff")};ee(),S=setInterval(()=>{ne--,ne<0?K?(clearInterval(S),S=null,m&&!Ae(i)?ue():te()):(K=!0,ne=15,ee()):ee()},1e3)}}function oe(){Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await H({phase:"midfield"})},5e3)}let ce=!1;function he(){if(ce)return;const L=n[i+"Team"].MIL||[],b=n[r+"Team"].MIL||[];function p(O){return O.reduce((D,V)=>D+we(V,"MIL"),0)}function f(O){let D=0;for(let V=0;V<O.length-1;V++){const Q=it(O[V],O[V+1]);Q==="#00ff88"?D+=2:Q==="#FFD700"&&(D+=1)}return D}const g=p(L)+f(L),x=p(b)+f(b),m=g>=x;function h(O,D,V){return`<div id="duel-row-${V}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${D}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((Q,re)=>{const de=re<O.length-1?it(Q,O[re+1]):null,fe=!de||de==="#ff3333"||de==="#cc2222",me=de==="#00ff88"?"+2":de==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${V}" data-idx="${re}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...Q,note:we(Q,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${re<O.length-1?`<div class="duel-link duel-link-${V}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":de};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${de}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${de}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${V}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${p(O)} + ${f(O)} liens = <b style="color:#fff">${p(O)+f(O)}</b>
        </div>
      </div>`}Ze(e),e.innerHTML=`
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
      ${h(L,n[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(b,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const w=(O,D)=>e.querySelectorAll(O).forEach((V,Q)=>{setTimeout(()=>{V.style.opacity="1",V.style.transform="translateY(0) scale(1)"},D+Q*90)});w(".duel-card-me",150),w(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,D)=>setTimeout(()=>{O.style.opacity="1"},D*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(D=>D.style.opacity="1")},1250);function $(O,D,V){const Q=document.getElementById(O);if(!Q)return;const re=performance.now(),de=fe=>{const me=Math.min(1,(fe-re)/V);Q.textContent=Math.round(D*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(de):Q.textContent=D};requestAnimationFrame(de)}setTimeout(()=>{$("pvp-score-me",g,800),$("pvp-score-opp",x,800)},1500);const k=n.p1Team.MIL||[],T=n.p2Team.MIL||[],z=p(k)+f(k),B=p(T)+f(T),W=z>=B?"p1":"p2";let J=n.boostValue;J==null&&(J=Qt(),n.boostValue=J,n.boostOwner=W,n.boostUsed=!1),ce=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(m?"me":"opp")),D=e.querySelector("#duel-row-"+(m?"opp":"me")),V=document.getElementById("pvp-score-me"),Q=document.getElementById("pvp-score-opp"),re=m?V:Q,de=m?Q:V;re&&(re.style.fontSize="80px",re.style.color=m?"#FFD700":"#ff6b6b",re.style.animation="duelPulse .5s ease"+(m?",duelGlow 1.5s ease infinite .5s":"")),de&&(de.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),D&&(D.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ze;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const me=n.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ve=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(m?"⚽ "+n[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+ve,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(ze=document.getElementById("pvp-start-match"))==null||ze.addEventListener("click",async()=>{const De=W;await H({phase:De+"-attack",attacker:De,round:1,boostValue:J,boostUsed:!1,boostOwner:De})})},600)},700)},2800)}function _e(L,b,p,f,g){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const m=Array.from({length:10},(k,T)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${T%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][T%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${m}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${f?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${b} – ${p}
      </div>
      ${L!=null&&L.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${L.map(k=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[k.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${k.portrait?`<img src="${k.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(k.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let w=!1;const $=()=>{w||(w=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",$),setTimeout($,3500)}function be(L,b,p){var J,O;const f=(n.gcDefs||[]).find(D=>{var V;return D.name===L||((V=D.name)==null?void 0:V.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),g={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",m=(f==null?void 0:f.name)||L,h=(f==null?void 0:f.effect)||((J=Re[L])==null?void 0:J.desc)||"",w=f!=null&&f.image_url?`/manager-wars/icons/${f.image_url}`:null,$=((O=Re[L])==null?void 0:O.icon)||"⚡",T=b===i?"Vous":n[b+"Name"]||"Adversaire",z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",z.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${T} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${g};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${m.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${m}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${w?`<img src="${w}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(z);let B=!1;const W=()=>{B||(B=!0,z.remove(),setTimeout(()=>p&&p(),50))};z.addEventListener("click",W),setTimeout(W,3e3)}function xe(L,b){var z,B,W,J;const f=(n["gcCardsFull_"+i]||[]).find(O=>O.id===L),g=f==null?void 0:f._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[g==null?void 0:g.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[g==null?void 0:g.color]||"#b06ce0",h=(g==null?void 0:g.name)||b,w=(g==null?void 0:g.effect)||((z=Re[b])==null?void 0:z.desc)||"Carte spéciale.",$=g!=null&&g.image_url?`/manager-wars/icons/${g.image_url}`:null,k=((B=Re[b])==null?void 0:B.icon)||"⚡",T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",T.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${m};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${m}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${k}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(T),(W=T.querySelector("#pvp-gc-back"))==null||W.addEventListener("click",()=>T.remove()),(J=T.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{T.remove(),G(L,b)})}function Y(){var f;const L=n[i+"Team"],b=Object.entries(L).flatMap(([g,x])=>(x||[]).filter(m=>!m.used).map(m=>({...m,_line:g})));if(!b.length)return;const p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",p.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${b.map(g=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g._line]||"#555",m=we(g,g._line)+(g.boost||0);return`<div class="bp-item" data-cid="${g.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${m}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(p),(f=p.querySelector("#bp-close"))==null||f.addEventListener("click",()=>p.remove()),p.querySelectorAll(".bp-item").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.cid,m=b.find(w=>w.cardId===x);if(!m)return;const h=(L[m._line]||[]).find(w=>w.cardId===x);h&&(h.boost=(h.boost||0)+n.boostValue),p.remove(),await H({[i+"Team"]:L,boostUsed:!0})})})}function X(L=null){var B,W;if(!(n.phase===i+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const p=n[i+"Team"],f=n["usedSubIds_"+i]||[],g=n.maxSubs||3;if(f.length>=g){u(`Maximum ${g} remplacements atteint`,"warning");return}const x=Object.entries(p).flatMap(([J,O])=>(O||[]).filter(D=>D.used).map(D=>({...D,_line:J}))),m=(n[i+"Subs"]||[]).filter(J=>!f.includes(J.cardId));if(!x.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!m.length){u("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(J=>J.cardId===L));const w=((B=x[h])==null?void 0:B._line)||((W=x[h])==null?void 0:W.job);let $=Math.max(0,m.findIndex(J=>J.job===w)),k=!1;const T=document.createElement("div");T.id="pvp-sub-overlay",T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function z(){var de,fe,me,ve,ze,De;const J=x[h],O=m[$],D=Math.min(130,Math.round((window.innerWidth-90)/2)),V=Math.round(D*1.35),Q=ke=>`background:rgba(255,255,255,0.12);border:none;color:${ke?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ke?"default":"pointer"};flex-shrink:0`;T.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${f.length}/${g})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${Q($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},D,V):"<div>—</div>"}</div>
          <button id="pin-down" style="${Q($>=m.length-1)}" ${$>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${m.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${Q(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${J?Ye({...J,used:!1,boost:0},D,V):"<div>—</div>"}</div>
          <button id="pout-down" style="${Q(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(de=T.querySelector("#psub-close"))==null||de.addEventListener("click",()=>T.remove()),(fe=T.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,z())}),(me=T.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{h<x.length-1&&(h++,z())}),(ve=T.querySelector("#pin-up"))==null||ve.addEventListener("click",()=>{$>0&&($--,z())}),(ze=T.querySelector("#pin-down"))==null||ze.addEventListener("click",()=>{$<m.length-1&&($++,z())});const re=(ke,Ee,$e,Fe)=>{const Ge=T.querySelector("#"+ke);if(!Ge)return;let Oe=0;Ge.addEventListener("touchstart",Ne=>{Oe=Ne.touches[0].clientY},{passive:!0}),Ge.addEventListener("touchend",Ne=>{const qe=Ne.changedTouches[0].clientY-Oe;if(Math.abs(qe)<30)return;const Le=Ee();qe<0&&Le<Fe-1?($e(Le+1),z()):qe>0&&Le>0&&($e(Le-1),z())},{passive:!0})};re("pin-panel",()=>$,ke=>$=ke,m.length),re("pout-panel",()=>h,ke=>h=ke,x.length),(De=T.querySelector("#psub-confirm"))==null||De.addEventListener("click",async ke=>{if(ke.preventDefault(),ke.stopPropagation(),k)return;k=!0;const Ee=x[h],$e=m[$];if(!Ee||!$e)return;const Fe=Ee._line,Ge=(p[Fe]||[]).findIndex(qe=>qe.cardId===Ee.cardId);if(Ge===-1){u("Erreur : joueur introuvable","error"),T.remove();return}const Oe={...$e,_line:Fe,position:Ee.position,used:!1,boost:0};p[Fe].splice(Ge,1,Oe);const Ne=[...f,$e.cardId];T.remove(),P(Ee,$e,async()=>{await H({[i+"Team"]:p,[r+"Team"]:n[r+"Team"],["usedSubIds_"+i]:Ne})})})}document.body.appendChild(T),z()}function P(L,b,p){const f={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(w,$,k)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${k}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${f[w.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${je(w)?`<img src="${je(w)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(w.name||"").slice(0,12)}</div>
    </div>`;g.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(b,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(L,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(g);let m=!1;const h=()=>{m||(m=!0,g.remove(),setTimeout(()=>p(),50))};g.addEventListener("click",h),setTimeout(h,2200)}function R(){var b;const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",L.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(L),(b=L.querySelector("#pvp-opp-close"))==null||b.addEventListener("click",()=>L.remove())}function Z(){var p;const L=n.log||[],b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",b.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${L.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...L].reverse().map(f=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${f.type==="goal"?"#FFD700":f.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${f.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(b),(p=b.querySelector("#pvp-hist-close"))==null||p.addEventListener("click",()=>b.remove())}async function ue(){if(n.phase!==i+"-attack")return;const L=i==="p1"?"p2":"p1",b=(n.round||0)+1,p=[...n.log||[]];p.push({type:"info",text:`⏭️ ${n[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const f=Be(n),g=Ae(L),x=f||!g?"finished":L+"-attack";await H({["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:x,attacker:L,round:b,log:p}),x==="finished"&&await Ve(n)}async function se(){const L=n[i+"Team"],b=!["GK","DEF","MIL","ATT"].some(x=>(n[r+"Team"][x]||[]).some(m=>!m.used)),p=(n["selected_"+i]||[]).map(x=>{const m=(L[x._role]||[]).find(z=>z.cardId===x.cardId)||x,h=b&&["GK","DEF"].includes(x._role),w=L[x._role]||[],$=w.findIndex(z=>z.cardId===x.cardId),k=rt(w.length),T=$>=0?k[$]:m._col??1;return{...m,_line:x._role,_col:T,...h?{note_a:Math.max(1,Number(m.note_a)||0)}:{}}});if(!p.length)return;const f=qt(p,n.modifiers[i]||{});ie(i,p.map(x=>x.cardId)),p.forEach(x=>{const m=(L[x._role]||[]).find(h=>h.cardId===x.cardId);m&&(m.used=!0)}),n["selected_"+i]=[],U();const g=[...n.log||[]];if(b){const x=(n[i+"Score"]||0)+1,m=p.map(T=>({name:T.name,note:we(T,T._line||"ATT"),portrait:je(T),job:T.job}));g.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:m,homeTotal:f.total,aiTotal:0});const h=(n.round||0)+1,w=i==="p1"?"p2":"p1",$={...n,[i+"Team"]:L,[i+"Score"]:x},k=Be($);M.add(h),_e(m,x,n[r+"Score"]||0,!0,async()=>{await H({[i+"Team"]:L,[i+"Score"]:x,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:k?"finished":w+"-attack",attacker:w,round:h,log:g}),k&&await Ve({...n,[i+"Score"]:x})});return}g.push({type:"pending",text:`⚔️ ${n[i+"Name"]} attaque (${f.total})`}),await H({[i+"Team"]:L,[r+"Team"]:n[r+"Team"],pendingAttack:{...f,players:p,side:i},["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},phase:r+"-defense",log:g})}async function Se(){const L=n[i+"Team"],b=(n["selected_"+i]||[]).map(J=>{const O=(L[J._role]||[]).find(de=>de.cardId===J.cardId)||J,D=L[J._role]||[],V=D.findIndex(de=>de.cardId===J.cardId),Q=rt(D.length),re=V>=0?Q[V]:O._col??1;return{...O,_line:J._role,_col:re}}),p=Bt(b,n.modifiers[i]||{});ie(i,b.map(J=>J.cardId)),b.forEach(J=>{const O=(L[J._role]||[]).find(D=>D.cardId===J.cardId);O&&(O.used=!0)}),n["selected_"+i]=[],U();const f=Dt(n.pendingAttack.total,p.total,n.modifiers[i]||{}),g=n.pendingAttack.side,x=f==="attack"||(f==null?void 0:f.goal),m=g==="p1"?"p2":"p1",h=(n.round||0)+1,w=(n.pendingAttack.players||[]).map(J=>({name:J.name,note:we(J,J._line||"ATT"),portrait:je(J),job:J.job})),$=[...n.log||[]];$.push({type:"duel",isGoal:x,homeScored:x&&g===i,text:x?`⚽ BUT de ${n[g+"Name"]} ! (${n.pendingAttack.total} vs ${p.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${p.total})`,homePlayers:w,aiPlayers:b.map(J=>({name:J.name,note:we(J,J._line||"DEF"),portrait:je(J),job:J.job})),homeTotal:n.pendingAttack.total,aiTotal:p.total});const k=x?(n[g+"Score"]||0)+1:n[g+"Score"]||0,T={...n,[i+"Team"]:L,[g+"Score"]:k},z=Be(T),B=z?"finished":m+"-attack",W=async()=>{await H({[i+"Team"]:L,[r+"Team"]:n[r+"Team"],[g+"Score"]:k,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:B,attacker:m,round:h,log:$}),(B==="finished"||z)&&await Ve({...n,[g+"Score"]:k})};if(x){const J=g===i,O=J?k:n[i+"Score"]||0,D=J?n[r+"Score"]||0:k;M.add(h),_e(w,O,D,J,W)}else await W()}function Ie(L){return["MIL","ATT"].some(b=>(L[b]||[]).some(p=>!p.used))}function Ce(L){return["GK","DEF","MIL","ATT"].some(b=>(L[b]||[]).some(p=>!p.used))}function Pe(L){return Ce(L)&&!Ie(L)}function Ae(L){const b=n[L+"Team"],p=n[(L==="p1"?"p2":"p1")+"Team"];return!!(Ie(b)||!Ce(p)&&Pe(b))}function Be(L){const b=["MIL","ATT"].some($=>(L.p1Team[$]||[]).some(k=>!k.used)),p=["MIL","ATT"].some($=>(L.p2Team[$]||[]).some(k=>!k.used)),f=Ce(L.p1Team),g=Ce(L.p2Team);return!b&&!(!g&&f)&&(!p&&!(!f&&g))}function Te(L){const b=L.p1Score||0,p=L.p2Score||0;return b===p?null:b>p?v.home_id:v.away_id}async function Ve(L){try{const b=Te(L),p=b?v.home_id===b?v.away_id:v.home_id:null;await A.from("matches").update({status:"finished",winner_id:b,home_score:L.p1Score||0,away_score:L.p2Score||0}).eq("id",o),b&&p&&Xt(b,p).catch(()=>{})}catch(b){console.error("[PvP] finishMatch:",b)}}function Je(){var g;const L=n[i+"Score"],b=n[r+"Score"],p=L>b,f=L===b;Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${p?"🏆":f?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${p?"Victoire !":f?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${L} - ${b}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(g=document.getElementById("pvp-home"))==null||g.addEventListener("click",()=>{try{A.removeChannel(F)}catch{}Ue(e),s("home")})}U()}const qo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:mn,resumePvpMatch:Fo},Symbol.toStringTag,{value:"Module"}));async function Bo(e,t,o,a){var c,l;try{const d=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(A.getChannels?A.getChannels():[]).forEach(u=>{const i=u.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&A.removeChannel(u)})}catch(s){console.warn("[FriendMatch] cleanup canaux:",s)}d&&(await A.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await A.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await ti(e,t,"random",({deckId:d,formation:s,starters:u,subsRaw:i,gcCardsEnriched:r,gcDefs:y})=>{const _=v=>Do(e,t,d,s,u,i,v,y||[],o,a);if(!r.length){_([]);return}ei(e,r,_)})}async function Do(e,t,o,a,c,l,d=[],s=[],u,i){var le;const{state:r,navigate:y,toast:_}=t,v=r.profile.id;let C=!1,n=null;Ze(e);try{await A.rpc("cancel_matchmaking",{p_user_id:v})}catch{}try{await A.from("matchmaking_queue").delete().eq("user_id",v)}catch{}const E=(ae,G,ie,pe)=>{var U;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${G?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${G?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${G?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${G?"#22c55e":"#aaa"}">${G?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!G&&ae?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(U=document.getElementById("lobby-cancel"))==null||U.addEventListener("click",async()=>{C=!0,n&&(A.removeChannel(n),n=null),ie&&await A.from("friend_match_invites").update({status:"declined"}).eq("id",ie),Ue(e),y("home")})},S=async(ae,G)=>{C=!0,n&&(A.removeChannel(n),n=null),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&Go(e,t,ae,G,d,s)},{data:I}=await A.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${v},invitee_id.eq.${u}),and(inviter_id.eq.${u},invitee_id.eq.${v})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let M,j;if(I&&I.inviter_id===u)j=!1,M=I.id,await A.from("friend_match_invites").update({invitee_deck_id:o,invitee_ready:!0,status:"accepted"}).eq("id",M);else{j=!0;const{data:ae,error:G}=await A.from("friend_match_invites").insert({inviter_id:v,invitee_id:u,friend_id:u,inviter_deck_id:o,inviter_ready:!0,status:"pending"}).select().single();if(G||!ae){_("Erreur création invitation","error"),Ue(e),y("home");return}M=ae.id}if(E(!0,!j,M),!j){const ae={home_id:u,away_id:v,home_deck_id:I.inviter_deck_id,away_deck_id:o,status:"active",mode:"friend"},G=await A.from("matches").insert(ae).select().single(),ie=G.data;if(!ie){_("Erreur création match: "+(((le=G.error)==null?void 0:le.message)||""),"error"),Ue(e),y("home");return}await A.from("friend_match_invites").update({match_id:ie.id,status:"matched"}).eq("id",M),S(ie.id,!1);return}let q=!1;const F=ae=>{C||q||(ae.status==="matched"&&ae.match_id?(q=!0,clearInterval(H),clearInterval(te),S(ae.match_id,!0)):ae.status==="declined"?(clearInterval(H),clearInterval(te),_(`${i} a décliné l'invitation`,"warning"),Ue(e),y("home")):ae.invitee_ready&&E(!0,!0,M))},H=setInterval(()=>{if(C){clearInterval(H);return}A.from("matchmaking_queue").delete().eq("user_id",v).then(()=>{},()=>{})},3e3),te=setInterval(async()=>{if(C||q){clearInterval(te);return}const{data:ae}=await A.from("friend_match_invites").select("*").eq("id",M).maybeSingle();ae&&F(ae)},1200);n=A.channel("friend-invite-"+M).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${M}`},ae=>F(ae.new)).subscribe()}async function Go(e,t,o,a,c=[],l=[]){const{state:d,navigate:s,toast:u}=t,i=a?"p1":"p2",r=a?"p2":"p1",y=(c||[]).map(b=>b.id),_=(c||[]).map(b=>({id:b.id,gc_type:b.gc_type,_gcDef:b._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await A.from("matches").select("*").eq("id",o).single();if(!v){u("Match introuvable","error"),s("home");return}async function C(){const[{data:b},{data:p},{data:f},{data:g}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]),x=k=>({cardId:k.card_id,position:k.position,id:k.id,firstname:k.firstname,name:k.surname_encoded,country_code:k.country_code,club_id:k.club_id,job:k.job,job2:k.job2,note_g:Number(k.note_g)||0,note_d:Number(k.note_d)||0,note_m:Number(k.note_m)||0,note_a:Number(k.note_a)||0,rarity:k.rarity,skin:k.skin,hair:k.hair,hair_length:k.hair_length,clubName:k.club_encoded_name||null,clubLogo:k.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((b==null?void 0:b.starters)||[]).map(k=>x(k)),h=((p==null?void 0:p.starters)||[]).map(k=>x(k)),w=(b==null?void 0:b.formation)||"4-4-2",$=(p==null?void 0:p.formation)||"4-4-2";return{p1Team:mt(m,w),p2Team:mt(h,$),p1Subs:((b==null?void 0:b.subs)||[]).map(k=>x(k)),p2Subs:((p==null?void 0:p.subs)||[]).map(k=>x(k)),p1Formation:w,p2Formation:$,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?y:[],gc_p2:a?[]:y,gcCardsFull_p1:a?_:[],gcCardsFull_p2:a?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let n=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(!n)if(a){n=await C();const{data:b}=await A.from("matches").select("game_state").eq("id",o).single();!(b!=null&&b.game_state)||!Object.keys(b.game_state).length?await A.from("matches").update({game_state:n,turn_user_id:v.home_id}).eq("id",o):n=b.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let b=0;b<60&&!n;b++){await new Promise(f=>setTimeout(f,400));const{data:p}=await A.from("matches").select("game_state").eq("id",o).single();p!=null&&p.game_state&&Object.keys(p.game_state).length&&(n=p.game_state)}if(!n){u("Erreur de synchronisation","error"),s("home");return}n.gc_p2=y,n.gcCardsFull_p2=_,await A.from("matches").update({game_state:n}).eq("id",o)}let E=!1,S=!1,I=null,M=!1;const j=new Set,q=new Set;function F(b){var k,T;try{A.removeChannel(H)}catch{}const p=n[i+"Score"]||0,f=n[r+"Score"]||0;if(!S){const z=n.p1Score||0,B=n.p2Score||0,W=(n.usedGc_p1||[]).length,J=(n.usedGc_p2||[]).length,O=b.winner_id||(z>B?v.home_id:B>z?v.away_id:null);(O?d.profile.id===O:d.profile.id<(a?v.away_id:v.home_id))&&(S=!0,Vi({player1Id:v.home_id,player2Id:v.away_id,score1:z,score2:B,gc1:W,gc2:J}).catch(V=>console.warn("[FriendMatch] updateStats:",V)))}let g,x;b.winner_id?(g=b.winner_id===d.profile.id,x=!1):b.forfeit?(g=p>f,x=!1):(x=p===f,g=p>f),(k=document.getElementById("pvp-end-overlay"))==null||k.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const h=x?"🤝":g?"🏆":"😞",w=x?"MATCH NUL":g?"VICTOIRE !":"DÉFAITE",$=x?"#fff":g?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${h}</div>
      <div style="font-size:26px;font-weight:900;color:${$}">${w}</div>
      <div style="font-size:18px">${n[i+"Name"]} ${p} – ${f} ${n[r+"Name"]}</div>
      ${b.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${g?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(T=m.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{m.remove(),Ue(e),s("home")})}const H=A.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},b=>{const p=b.new;try{if(p.status==="finished"||p.forfeit){if(E)return;E=!0,I&&(clearInterval(I),I=null),p.game_state&&(n=p.game_state),F(p);return}if(p.game_state){const f=n;n=p.game_state;const g=n._lastGC;if(g&&g.seq&&!q.has(g.seq)&&(q.add(g.seq),g.by!==i)){xe(g.type,g.by,()=>oe());return}const x=f[i+"Score"]||0,m=f[r+"Score"]||0,h=n[i+"Score"]||0,w=n[r+"Score"]||0,$=h>x,k=w>m;if(($||k)&&!j.has(n.round)){j.add(n.round);const T=[...n.log||[]].reverse().find(B=>B.isGoal),z=((T==null?void 0:T.homePlayers)||[]).map(B=>({name:B.name,note:B.note,portrait:B.portrait,job:B.job}));be(z,h,w,$,()=>oe());return}oe()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function te(b){Object.assign(n,b),n.lastActionAt=new Date().toISOString();const{error:p}=await A.from("matches").update({game_state:n}).eq("id",o);p&&u("Erreur de synchronisation","error");try{oe()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function le(){if(E)return;E=!0,I&&(clearInterval(I),I=null);const b=a?v.away_id:v.home_id,p=a?"p2":"p1",f=a?"p1":"p2",g={...n,[p+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:b,home_score:g.p1Score||0,away_score:g.p2Score||0,game_state:g}).eq("id",o)}catch{}try{A.removeChannel(H)}catch{}setTimeout(()=>{Ue(e),s("home")},800)}const ae={BOOST_STAT:({value:b=1,count:p=1,roles:f=[]},g,x)=>{const m=g[i+"Team"],h=Object.entries(m).filter(([w])=>!f.length||f.includes(w)).flatMap(([w,$])=>$.filter(k=>!k.used).map(k=>({...k,_line:w})));if(!h.length){g.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(g);return}G(h,p,`Choisir ${p} joueur(s) à booster (+${b})`,w=>{w.forEach($=>{const k=(m[$._line]||[]).find(T=>T.cardId===$.cardId);k&&(k.boost=(k.boost||0)+b,g.log.push({text:`⚡ +${b} sur ${k.name}`,type:"info"}))}),g[i+"Team"]=m,x(g)})},DEBUFF_STAT:({value:b=1,count:p=1,roles:f=[],target:g="ai"},x,m)=>{const h=g==="home"?i:r,w=x[h+"Team"],$=g==="home"?"allié":"adverse",k=Object.entries(w).filter(([T])=>!f.length||f.includes(T)).flatMap(([T,z])=>z.filter(B=>!B.used).map(B=>({...B,_line:T})));if(!k.length){x.log.push({text:`🎯 Aucun joueur ${$}`,type:"info"}),m(x);return}G(k,p,`Choisir ${p} joueur(s) ${$}(s) (-${b})`,T=>{T.forEach(z=>{const B=(w[z._line]||[]).find(W=>W.cardId===z.cardId);B&&(B.boost=(B.boost||0)-b,x.log.push({text:`🎯 -${b} sur ${B.name}`,type:"info"}))}),x[h+"Team"]=w,m(x)})},GRAY_PLAYER:({count:b=1,roles:p=[],target:f="ai"},g,x)=>{const m=f==="home"?i:r,h=g[m+"Team"],w=f==="home"?"allié":"adverse",$=Object.entries(h).filter(([k])=>!p.length||p.includes(k)).flatMap(([k,T])=>T.filter(z=>!z.used).map(z=>({...z,_line:k})));if(!$.length){g.log.push({text:`❌ Aucun joueur ${w}`,type:"info"}),x(g);return}G($,b,`Choisir ${b} joueur(s) ${w}(s) à exclure`,k=>{k.forEach(T=>{const z=(h[T._line]||[]).find(B=>B.cardId===T.cardId);z&&(z.used=!0,g.log.push({text:`❌ ${z.name} exclu !`,type:"info"}))}),g[m+"Team"]=h,x(g)})},REVIVE_PLAYER:({count:b=1,roles:p=[]},f,g)=>{const x=f[i+"Team"],m=Object.entries(x).filter(([h])=>!p.length||p.includes(h)).flatMap(([h,w])=>w.filter($=>$.used).map($=>({...$,_line:h})));if(!m.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),g(f);return}G(m,b,`Choisir ${b} joueur(s) à ressusciter`,h=>{h.forEach(w=>{const $=(x[w._line]||[]).find(k=>k.cardId===w.cardId);$&&($.used=!1,f.log.push({text:`💫 ${$.name} ressuscité !`,type:"info"}))}),f[i+"Team"]=x,g(f)})},REMOVE_GOAL:({},b,p)=>{const f=r+"Score";b[f]>0?(b[f]--,b.log.push({text:"🚫 Dernier but annulé !",type:"info"})):b.log.push({text:"🚫 Aucun but à annuler",type:"info"}),p(b)},ADD_GOAL_DRAW:({},b,p)=>{b[i+"Score"]===b[r+"Score"]?(b[i+"Score"]++,b.log.push({text:"🎯 But bonus !",type:"info"})):b.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),p(b)},ADD_SUB:({value:b=1},p,f)=>{p.maxSubs=(p.maxSubs||3)+b,p.log.push({text:`🔄 +${b} remplacement(s)`,type:"info"}),f(p)},CUSTOM:({},b,p)=>p(b)};function G(b,p,f,g){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function h(){var $,k;const w=b.map(T=>{const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",B=we(T,T._line)+(T.boost||0),J=m.find(D=>D.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${z};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${p}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${w}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${p})
          </button>
        </div>`,($=x.querySelector("#pp-close"))==null||$.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const z=T.dataset.cid,B=b.find(J=>J.cardId===z),W=m.findIndex(J=>J.cardId===z);B&&(W>-1?m.splice(W,1):m.length<p&&m.push(B),h())})}),(k=x.querySelector("#pp-confirm"))==null||k.addEventListener("click",()=>{x.remove(),g(m)})}h(),document.body.appendChild(x)}async function ie(b,p){const g=(n["gcCardsFull_"+i]||[]).find(w=>w.id===b),x=(g==null?void 0:g._gcDef)||(n.gcDefs||[]).find(w=>{var $;return w.name===p||(($=w.name)==null?void 0:$.toLowerCase().trim())===(p==null?void 0:p.toLowerCase().trim())}),m=[...n["usedGc_"+i]||[],b],h={type:p,by:i,seq:(n._gcAnimSeq||0)+1};q.add(h.seq),xe(p,i,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const $=ae[x.effect_type];if($){const k={...n};$(x.effect_params||{},k,async T=>{T["usedGc_"+i]=m,T._lastGC=h,T._gcAnimSeq=h.seq,await te(T)});return}}const w={...n};switch(p){case"Remplacement+":w.maxSubs=(w.maxSubs||3)+1,w.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const $=r+"Score";w[$]>0&&(w[$]--,w.log.push({text:"🚫 But annulé",type:"info"}));break}}w["usedGc_"+i]=m,w._lastGC=h,w._gcAnimSeq=h.seq,await te(w)})}function pe(b,p){const f="usedCardIds_"+b,g=new Set(n[f]||[]);p.forEach(x=>g.add(x)),n[f]=[...g]}function U(){for(const b of["p1","p2"]){const p=new Set(n["usedCardIds_"+b]||[]),f=n[b+"Team"];if(f)for(const g of["GK","DEF","MIL","ATT"])(f[g]||[]).forEach(x=>{x.used=p.has(x.cardId)})}}function oe(){var He,et,lt,ct,pt,ne;if(n.phase==="reveal")return ce();if(n.phase==="midfield")return _e();if(n.phase==="finished")return L();const b=n[i+"Team"],p=n[r+"Team"];U();const f=n[i+"Score"],g=n[r+"Score"],x=n[i+"Name"],m=n[r+"Name"],h=n.phase===i+"-attack",w=n.phase===i+"-defense",$=Array.isArray(n["selected_"+i])?n["selected_"+i]:[],k=$.map(K=>K.cardId),T=window.innerWidth>=700,z=n[i+"Subs"]||[],B=n["usedSubIds_"+i]||[],W=z.filter(K=>!B.includes(K.cardId)),J=n["gcCardsFull_"+i]||[],O=n["usedGc_"+i]||[],D=J.filter(K=>!O.includes(K.id)),V=n.boostOwner===i&&!n.boostUsed,Q=!["GK","DEF","MIL","ATT"].some(K=>(p[K]||[]).some(N=>!N.used)),re=[...b.MIL||[],...b.ATT||[]].filter(K=>!K.used),de=h&&Q&&re.length===0?[...b.GK||[],...b.DEF||[]].filter(K=>!K.used).map(K=>K.cardId):[];function fe(K,N,ee){var ht,Tt;const ge=K._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ge==null?void 0:ge.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ge==null?void 0:ge.color]||"#b06ce0",Xe=(ge==null?void 0:ge.name)||K.gc_type,Qe=(ge==null?void 0:ge.effect)||((ht=Re[K.gc_type])==null?void 0:ht.desc)||"",nt=ge!=null&&ge.image_url?`/manager-wars/icons/${ge.image_url}`:null,xt=((Tt=Re[K.gc_type])==null?void 0:Tt.icon)||"⚡",yt=Math.round(ee*.22),at=Math.round(ee*.22),ut=ee-yt-at,ft=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
        style="box-sizing:border-box;width:${N}px;height:${ee}px;border-radius:10px;border:2px solid ${We};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${yt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ft}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ut}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${nt?`<img src="${nt}" style="max-width:${N-10}px;max-height:${ut-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ut*.55)}px">${xt}</span>`}
        </div>
        <div style="height:${at}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Qe.slice(0,38)}</span>
        </div>
      </div>`}function me(K,N){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${K}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(N*.2)}px">⚡</div>
        <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const ve=(K,N)=>N?me(130,175):fe(K,130,175),ze=(K,N)=>N?me(68,95):fe(K,68,95),De=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ke=h?Be(i)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${$.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:w?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${$.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Ee=h&&!Be(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':h||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${$.length}/3 sélectionné(s)</div>`:"",$e=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(K=>`<div class="pvp-sub-btn" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(K,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,Fe=h?"attack":w?"defense":"idle",Ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(b,n[i+"Formation"],Fe,k,300,300,de)}
      </div>
    </div>`;function Oe(K){if(K.type==="duel"&&(K.homeTotal!=null||K.aiTotal!=null)){const N=(K.homeTotal||0)>=(K.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(K.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(K.homePlayers||[]).map(ee=>ot(ee)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${N?20:14}px;font-weight:900;color:${N?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${K.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${N?14:20}px;font-weight:900;color:${N?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${K.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(K.aiPlayers||[]).map(ee=>ot(ee)).join("")}
            </div>
          </div>
          ${K.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${K.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${K.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${K.type==="goal"?700:400};padding:3px 2px">${K.text||""}</div>`}const Ne=(()=>{var N,ee;if(w&&((N=n.pendingAttack)!=null&&N.players)){const ge=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${tt((ge.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",ge.total)}
        </div>`}if(h&&((ee=n.pendingAttack)!=null&&ee.players)){const ge=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((ge.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",ge.total)}
        </div>`}const K=(n.log||[]).slice(-1)[0];return K?'<div style="padding:2px 4px">'+Oe(K)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${f} – ${g}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ne}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;Ze(e),e.style.overflow="hidden",T?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${$e}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ke}${Ee}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${D.map(K=>ve(K,!1)).join("")}
            ${V?ve(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(b,n[i+"Formation"],Fe,k,300,300,de)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${D.map(K=>ze(K,!1)).join("")}
            ${V?ze(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${h&&W.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${h&&W.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${h&&W.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${h&&W.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${W.length}</div>
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
          <div>${ke}${Ee}</div>
        </div>
      </div>`;function Le(){const K=e.querySelector(".match-screen");if(!K)return;const N=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);K.style.height=N+"px",K.style.minHeight=N+"px",K.style.maxHeight=N+"px",K.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),ge=e.querySelector("#mobile-play-area");ee&&ge&&(ge.style.paddingBottom=ee.offsetHeight+"px")}if(Le(),setTimeout(Le,120),setTimeout(Le,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Le),window.visualViewport.addEventListener("scroll",Le)),window.addEventListener("resize",Le)),function(){const N=e.querySelector(".terrain-wrapper svg");N&&(N.removeAttribute("width"),N.removeAttribute("height"),N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",N.setAttribute("viewBox","-26 -26 352 352"),N.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(K=>{K.addEventListener("click",()=>{if(!h&&!w)return;const N=K.dataset.cardId,ee=K.dataset.role,ge=(b[ee]||[]).find(Qe=>Qe.cardId===N);if(!ge||ge.used)return;const ye=de.includes(N);if(h&&!["MIL","ATT"].includes(ee)&&!ye)return;Array.isArray(n["selected_"+i])||(n["selected_"+i]=[]);const We=n["selected_"+i],Xe=We.findIndex(Qe=>Qe.cardId===N);Xe>-1?We.splice(Xe,1):We.length<3&&We.push({...ge,_role:ee}),oe()})}),e.querySelectorAll(".match-used-hit").forEach(K=>{K.addEventListener("click",()=>P(K.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(K=>{K.addEventListener("click",()=>P())}),(He=e.querySelector("#pvp-sub-open"))==null||He.addEventListener("click",()=>P()),e.querySelectorAll(".pvp-gc-mini").forEach(K=>{K.addEventListener("click",()=>Y(K.dataset.gcId,K.dataset.gcType))}),(et=e.querySelector("#pvp-boost-card"))==null||et.addEventListener("click",()=>X()),(lt=e.querySelector("#pvp-action"))==null||lt.addEventListener("click",K=>{h?K.currentTarget.dataset.pass==="1"||!Be(i)?se():Se():w&&Ie()}),(ct=e.querySelector("#pvp-quit"))==null||ct.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&le()}),(pt=e.querySelector("#pvp-view-opp"))==null||pt.addEventListener("click",()=>Z()),(ne=e.querySelector("#pvp-toggle-history"))==null||ne.addEventListener("click",()=>ue()),I&&(clearInterval(I),I=null),(h||w)&&!E){let K=30,N=!1;const ee=()=>document.getElementById("pvp-timer"),ge=()=>{ee()&&(ee().textContent=K+"s",ee().style.color=N?"#ff4444":"#fff")};ge(),I=setInterval(()=>{K--,K<0?N?(clearInterval(I),I=null,h&&!Be(i)?se():le()):(N=!0,K=15,ge()):ge()},1e3)}}function ce(){Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await te({phase:"midfield"})},5e3)}let he=!1;function _e(){if(he)return;const b=n[i+"Team"].MIL||[],p=n[r+"Team"].MIL||[];function f(D){return D.reduce((V,Q)=>V+we(Q,"MIL"),0)}function g(D){let V=0;for(let Q=0;Q<D.length-1;Q++){const re=it(D[Q],D[Q+1]);re==="#00ff88"?V+=2:re==="#FFD700"&&(V+=1)}return V}const x=f(b)+g(b),m=f(p)+g(p),h=x>=m;function w(D,V,Q){return`<div id="duel-row-${Q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${D.map((re,de)=>{const fe=de<D.length-1?it(re,D[de+1]):null,me=!fe||fe==="#ff3333"||fe==="#cc2222",ve=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Q}" data-idx="${de}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...re,note:we(re,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${de<D.length-1?`<div class="duel-link duel-link-${Q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${fe}`}">
              ${ve?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${ve}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${f(D)} + ${g(D)} liens = <b style="color:#fff">${f(D)+g(D)}</b>
        </div>
      </div>`}Ze(e),e.innerHTML=`
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
      ${w(b,n[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${w(p,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const $=(D,V)=>e.querySelectorAll(D).forEach((Q,re)=>{setTimeout(()=>{Q.style.opacity="1",Q.style.transform="translateY(0) scale(1)"},V+re*90)});$(".duel-card-me",150),$(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((D,V)=>setTimeout(()=>{D.style.opacity="1"},V*70)),900),setTimeout(()=>{const D=e.querySelector("#pvp-vs");D&&(D.style.opacity="1",D.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function k(D,V,Q){const re=document.getElementById(D);if(!re)return;const de=performance.now(),fe=me=>{const ve=Math.min(1,(me-de)/Q);re.textContent=Math.round(V*(1-Math.pow(1-ve,3))),ve<1?requestAnimationFrame(fe):re.textContent=V};requestAnimationFrame(fe)}setTimeout(()=>{k("pvp-score-me",x,800),k("pvp-score-opp",m,800)},1500);const T=n.p1Team.MIL||[],z=n.p2Team.MIL||[],B=f(T)+g(T),W=f(z)+g(z),J=B>=W?"p1":"p2";let O=n.boostValue;O==null&&(O=Qt(),n.boostValue=O,n.boostOwner=J,n.boostUsed=!1),he=!0,setTimeout(()=>{const D=e.querySelector("#duel-row-"+(h?"me":"opp")),V=e.querySelector("#duel-row-"+(h?"opp":"me")),Q=document.getElementById("pvp-score-me"),re=document.getElementById("pvp-score-opp"),de=h?Q:re,fe=h?re:Q;de&&(de.style.fontSize="80px",de.style.color=h?"#FFD700":"#ff6b6b",de.style.animation="duelPulse .5s ease"+(h?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{D&&(D.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",D.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const me=document.getElementById("pvp-duel-finale");if(!me)return;const ve=n.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ze=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(h?"⚽ "+n[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ve+ze,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const ke=J;await te({phase:ke+"-attack",attacker:ke,round:1,boostValue:O,boostUsed:!1,boostOwner:ke})})},600)},700)},2800)}function be(b,p,f,g,x){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const h=Array.from({length:10},(T,z)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${z%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][z%8]}</div>`).join(""),w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${h}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${g?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${p} – ${f}
      </div>
      ${b!=null&&b.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${b.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${w[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let $=!1;const k=()=>{$||($=!0,m.remove(),setTimeout(()=>x(),50))};m.addEventListener("click",k),setTimeout(k,3500)}function xe(b,p,f){var O,D;const g=(n.gcDefs||[]).find(V=>{var Q;return V.name===b||((Q=V.name)==null?void 0:Q.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[g==null?void 0:g.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[g==null?void 0:g.color]||"#b06ce0",h=(g==null?void 0:g.name)||b,w=(g==null?void 0:g.effect)||((O=Re[b])==null?void 0:O.desc)||"",$=g!=null&&g.image_url?`/manager-wars/icons/${g.image_url}`:null,k=((D=Re[b])==null?void 0:D.icon)||"⚡",z=p===i?"Vous":n[p+"Name"]||"Adversaire",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",B.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${z} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${k}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(B);let W=!1;const J=()=>{W||(W=!0,B.remove(),setTimeout(()=>f&&f(),50))};B.addEventListener("click",J),setTimeout(J,3e3)}function Y(b,p){var B,W,J,O;const g=(n["gcCardsFull_"+i]||[]).find(D=>D.id===b),x=g==null?void 0:g._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",w=(x==null?void 0:x.name)||p,$=(x==null?void 0:x.effect)||((B=Re[p])==null?void 0:B.desc)||"Carte spéciale.",k=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,T=((W=Re[p])==null?void 0:W.icon)||"⚡",z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",z.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${h};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${h}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(z),(J=z.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>z.remove()),(O=z.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{z.remove(),ie(b,p)})}function X(){var g;const b=n[i+"Team"],p=Object.entries(b).flatMap(([x,m])=>(m||[]).filter(h=>!h.used).map(h=>({...h,_line:x})));if(!p.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${p.map(x=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",h=we(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${h}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(g=f.querySelector("#bp-close"))==null||g.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const m=x.dataset.cid,h=p.find($=>$.cardId===m);if(!h)return;const w=(b[h._line]||[]).find($=>$.cardId===m);w&&(w.boost=(w.boost||0)+n.boostValue),f.remove(),await te({[i+"Team"]:b,boostUsed:!0})})})}function P(b=null){var W,J;if(!(n.phase===i+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const f=n[i+"Team"],g=n["usedSubIds_"+i]||[],x=n.maxSubs||3;if(g.length>=x){u(`Maximum ${x} remplacements atteint`,"warning");return}const m=Object.entries(f).flatMap(([O,D])=>(D||[]).filter(V=>V.used).map(V=>({...V,_line:O}))),h=(n[i+"Subs"]||[]).filter(O=>!g.includes(O.cardId));if(!m.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!h.length){u("Aucun remplaçant disponible","warning");return}let w=Math.max(0,m.findIndex(O=>O.cardId===b));const $=((W=m[w])==null?void 0:W._line)||((J=m[w])==null?void 0:J.job);let k=Math.max(0,h.findIndex(O=>O.job===$)),T=!1;const z=document.createElement("div");z.id="pvp-sub-overlay",z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function B(){var fe,me,ve,ze,De,ke;const O=m[w],D=h[k],V=Math.min(130,Math.round((window.innerWidth-90)/2)),Q=Math.round(V*1.35),re=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${g.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${re(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${D?Ye({...D,used:!1,boost:0},V,Q):"<div>—</div>"}</div>
          <button id="pin-down" style="${re(k>=h.length-1)}" ${k>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${h.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${re(w===0)}" ${w===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},V,Q):"<div>—</div>"}</div>
          <button id="pout-down" style="${re(w>=m.length-1)}" ${w>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${w+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=z.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>z.remove()),(me=z.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{w>0&&(w--,B())}),(ve=z.querySelector("#pout-down"))==null||ve.addEventListener("click",()=>{w<m.length-1&&(w++,B())}),(ze=z.querySelector("#pin-up"))==null||ze.addEventListener("click",()=>{k>0&&(k--,B())}),(De=z.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{k<h.length-1&&(k++,B())});const de=(Ee,$e,Fe,Ge)=>{const Oe=z.querySelector("#"+Ee);if(!Oe)return;let Ne=0;Oe.addEventListener("touchstart",qe=>{Ne=qe.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",qe=>{const Le=qe.changedTouches[0].clientY-Ne;if(Math.abs(Le)<30)return;const He=$e();Le<0&&He<Ge-1?(Fe(He+1),B()):Le>0&&He>0&&(Fe(He-1),B())},{passive:!0})};de("pin-panel",()=>k,Ee=>k=Ee,h.length),de("pout-panel",()=>w,Ee=>w=Ee,m.length),(ke=z.querySelector("#psub-confirm"))==null||ke.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),T)return;T=!0;const $e=m[w],Fe=h[k];if(!$e||!Fe)return;const Ge=$e._line,Oe=(f[Ge]||[]).findIndex(Le=>Le.cardId===$e.cardId);if(Oe===-1){u("Erreur : joueur introuvable","error"),z.remove();return}const Ne={...Fe,_line:Ge,position:$e.position,used:!1,boost:0};f[Ge].splice(Oe,1,Ne);const qe=[...g,Fe.cardId];z.remove(),R($e,Fe,async()=>{await te({[i+"Team"]:f,[r+"Team"]:n[r+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(z),B()}function R(b,p,f){const g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=($,k,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${k};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${g[$.job]||"#555"};border:3px solid ${k};position:relative;overflow:hidden;margin:0 auto">
        ${je($)?`<img src="${je($)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${($.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(p,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(b,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let h=!1;const w=()=>{h||(h=!0,x.remove(),setTimeout(()=>f(),50))};x.addEventListener("click",w),setTimeout(w,2200)}function Z(){var p;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",b.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(b),(p=b.querySelector("#pvp-opp-close"))==null||p.addEventListener("click",()=>b.remove())}function ue(){var f;const b=n.log||[],p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",p.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${b.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...b].reverse().map(g=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${g.type==="goal"?"#FFD700":g.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${g.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(p),(f=p.querySelector("#pvp-hist-close"))==null||f.addEventListener("click",()=>p.remove())}async function se(){if(n.phase!==i+"-attack")return;const b=i==="p1"?"p2":"p1",p=(n.round||0)+1,f=[...n.log||[]];f.push({type:"info",text:`⏭️ ${n[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const g=Te(n),x=Be(b),m=g||!x?"finished":b+"-attack";await te({["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:m,attacker:b,round:p,log:f}),m==="finished"&&await Je(n)}async function Se(){const b=n[i+"Team"],p=!["GK","DEF","MIL","ATT"].some(m=>(n[r+"Team"][m]||[]).some(h=>!h.used)),f=(n["selected_"+i]||[]).map(m=>{const h=(b[m._role]||[]).find(B=>B.cardId===m.cardId)||m,w=p&&["GK","DEF"].includes(m._role),$=b[m._role]||[],k=$.findIndex(B=>B.cardId===m.cardId),T=rt($.length),z=k>=0?T[k]:h._col??1;return{...h,_line:m._role,_col:z,...w?{note_a:Math.max(1,Number(h.note_a)||0)}:{}}});if(!f.length)return;const g=qt(f,n.modifiers[i]||{});pe(i,f.map(m=>m.cardId)),f.forEach(m=>{const h=(b[m._role]||[]).find(w=>w.cardId===m.cardId);h&&(h.used=!0)}),n["selected_"+i]=[],oe();const x=[...n.log||[]];if(p){const m=(n[i+"Score"]||0)+1,h=f.map(z=>({name:z.name,note:we(z,z._line||"ATT"),portrait:je(z),job:z.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:h,homeTotal:g.total,aiTotal:0});const w=(n.round||0)+1,$=i==="p1"?"p2":"p1",k={...n,[i+"Team"]:b,[i+"Score"]:m},T=Te(k);j.add(w),be(h,m,n[r+"Score"]||0,!0,async()=>{await te({[i+"Team"]:b,[i+"Score"]:m,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:T?"finished":$+"-attack",attacker:$,round:w,log:x}),T&&await Je({...n,[i+"Score"]:m})});return}x.push({type:"pending",text:`⚔️ ${n[i+"Name"]} attaque (${g.total})`}),await te({[i+"Team"]:b,[r+"Team"]:n[r+"Team"],pendingAttack:{...g,players:f,side:i},["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},phase:r+"-defense",log:x})}async function Ie(){const b=n[i+"Team"],p=(n["selected_"+i]||[]).map(O=>{const D=(b[O._role]||[]).find(fe=>fe.cardId===O.cardId)||O,V=b[O._role]||[],Q=V.findIndex(fe=>fe.cardId===O.cardId),re=rt(V.length),de=Q>=0?re[Q]:D._col??1;return{...D,_line:O._role,_col:de}}),f=Bt(p,n.modifiers[i]||{});pe(i,p.map(O=>O.cardId)),p.forEach(O=>{const D=(b[O._role]||[]).find(V=>V.cardId===O.cardId);D&&(D.used=!0)}),n["selected_"+i]=[],oe();const g=Dt(n.pendingAttack.total,f.total,n.modifiers[i]||{}),x=n.pendingAttack.side,m=g==="attack"||(g==null?void 0:g.goal),h=x==="p1"?"p2":"p1",w=(n.round||0)+1,$=(n.pendingAttack.players||[]).map(O=>({name:O.name,note:we(O,O._line||"ATT"),portrait:je(O),job:O.job})),k=[...n.log||[]];k.push({type:"duel",isGoal:m,homeScored:m&&x===i,text:m?`⚽ BUT de ${n[x+"Name"]} ! (${n.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${f.total})`,homePlayers:$,aiPlayers:p.map(O=>({name:O.name,note:we(O,O._line||"DEF"),portrait:je(O),job:O.job})),homeTotal:n.pendingAttack.total,aiTotal:f.total});const T=m?(n[x+"Score"]||0)+1:n[x+"Score"]||0,z={...n,[i+"Team"]:b,[x+"Score"]:T},B=Te(z),W=B?"finished":h+"-attack",J=async()=>{await te({[i+"Team"]:b,[r+"Team"]:n[r+"Team"],[x+"Score"]:T,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:h,round:w,log:k}),(W==="finished"||B)&&await Je({...n,[x+"Score"]:T})};if(m){const O=x===i,D=O?T:n[i+"Score"]||0,V=O?n[r+"Score"]||0:T;j.add(w),be($,D,V,O,J)}else await J()}function Ce(b){return["MIL","ATT"].some(p=>(b[p]||[]).some(f=>!f.used))}function Pe(b){return["GK","DEF","MIL","ATT"].some(p=>(b[p]||[]).some(f=>!f.used))}function Ae(b){return Pe(b)&&!Ce(b)}function Be(b){const p=n[b+"Team"],f=n[(b==="p1"?"p2":"p1")+"Team"];return!!(Ce(p)||!Pe(f)&&Ae(p))}function Te(b){const p=["MIL","ATT"].some(k=>(b.p1Team[k]||[]).some(T=>!T.used)),f=["MIL","ATT"].some(k=>(b.p2Team[k]||[]).some(T=>!T.used)),g=Pe(b.p1Team),x=Pe(b.p2Team);return!p&&!(!x&&g)&&(!f&&!(!g&&x))}function Ve(b){const p=b.p1Score||0,f=b.p2Score||0;return p===f?null:p>f?v.home_id:v.away_id}async function Je(b){try{const p=Ve(b),f=p?v.home_id===p?v.away_id:v.home_id:null;await A.from("matches").update({status:"finished",winner_id:p,home_score:b.p1Score||0,away_score:b.p2Score||0}).eq("id",o),p&&f&&Xt(p,f).catch(()=>{})}catch(p){console.error("[PvP] finishMatch:",p)}}function L(){var x;const b=n[i+"Score"],p=n[r+"Score"],f=b>p,g=b===p;Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":g?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":g?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${b} - ${p}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{A.removeChannel(H)}catch{}Ue(e),s("home")})}oe()}const Ut="#1A6B3C",Po="#D4A017";async function No(e,t){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Vt(e,t)}async function Vt(e,t){var i;const{state:o,toast:a}=t,c=o.profile.id,{data:l}=await A.from("mini_league_members").select("league_id, mini_leagues(*)").eq("user_id",c),{data:d}=await A.from("mini_leagues").select("*, mini_league_members(count)").eq("type","public").eq("status","waiting").order("created_at",{ascending:!1}).limit(20),s=(l||[]).map(r=>r.mini_leagues).filter(Boolean),u=(d||[]).filter(r=>!s.find(y=>y.id===r.id));e.innerHTML=`
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
          ${s.map(r=>Fi(r,c,!0)).join("")}
        </div>`:""}

      ${u.length?`
        <div>
          <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Rejoindre une Mini League</div>
          ${u.map(r=>Fi(r,c,!1)).join("")}
        </div>`:""}

      ${!s.length&&!u.length?`
        <div style="text-align:center;padding:40px;color:#aaa">
          <div style="font-size:48px;margin-bottom:12px">🏆</div>
          <div style="font-size:14px">Aucune Mini League disponible.</div>
          <div style="font-size:12px;margin-top:4px">Crée la première !</div>
        </div>`:""}
    </div>
  </div>`,(i=document.getElementById("ml-create-btn"))==null||i.addEventListener("click",()=>Ro(e,t)),e.querySelectorAll("[data-league-id]").forEach(r=>{r.addEventListener("click",()=>Gt(e,t,r.dataset.leagueId))}),e.querySelectorAll("[data-join]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation(),yn(e,t,r.dataset.join,r.dataset.type)})})}function Fi(e,t,o){const a={waiting:"🟡 En attente",active:"🟢 En cours",finished:"✅ Terminée"},c=e.mode==="aller-retour"?"Aller-Retour":"Aller";return`
  <div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <div style="font-size:15px;font-weight:900">${e.name}</div>
      <span style="font-size:11px;color:#888">${a[e.status]||e.status}</span>
    </div>
    <div style="display:flex;gap:12px;font-size:12px;color:#666;margin-bottom:${!o&&e.status==="waiting"?"10":"0"}px">
      <span>🔒 ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${c}</span>
      <span>👥 max ${e.max_players}</span>
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${!o&&e.status==="waiting"?`
    <button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%">Rejoindre</button>`:""}
  </div>`}function Ro(e,t){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#ml-form-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",a=>{a.target===o&&o.remove()}),o.querySelectorAll('input[name="ml-type"]').forEach(a=>{a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})}),o.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var y,_,v,C;const{toast:a}=t,c=document.getElementById("ml-name").value.trim(),l=parseInt(document.getElementById("ml-max").value)||6,d=((y=o.querySelector('input[name="ml-type"]:checked'))==null?void 0:y.value)||"public",s=((_=o.querySelector('input[name="ml-mode"]:checked'))==null?void 0:_.value)||"aller",u=((C=(v=document.getElementById("ml-pwd"))==null?void 0:v.value)==null?void 0:C.trim())||null;if(!c){a("Le nom est obligatoire","error");return}if(d==="private"&&!u){a("Mot de passe requis","error");return}const{data:i,error:r}=await A.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:d,password:u,mode:s,max_players:l}).select().single();if(r){a("Erreur : "+r.message,"error");return}await A.from("mini_league_members").insert({league_id:i.id,user_id:t.state.profile.id}),o.remove(),a("Mini League créée !","success"),Gt(e,t,i.id)})}async function yn(e,t,o,a){const{toast:c}=t;if(a==="private"){const d=prompt("Mot de passe de la Mini League :");if(d===null)return;const{data:s}=await A.from("mini_leagues").select("password,status,max_players").eq("id",o).single();if(!s){c("Mini League introuvable","error");return}if(s.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}if(s.password!==d){c("Mot de passe incorrect","error");return}}const{error:l}=await A.from("mini_league_members").insert({league_id:o,user_id:t.state.profile.id});if(l){c("Erreur : "+l.message,"error");return}c("Tu as rejoint la Mini League !","success"),Gt(e,t,o)}async function Gt(e,t,o){var n,E,S,I,M;const{state:a,toast:c,navigate:l}=t,d=a.profile.id,[{data:s},{data:u},{data:i}]=await Promise.all([A.from("mini_leagues").select("*").eq("id",o).single(),A.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",o),A.from("mini_league_matches").select("*").eq("league_id",o).order("matchday").order("created_at")]);if(!s){c("Mini League introuvable","error"),await Vt(e,t);return}const r=(u||[]).some(j=>j.user_id===d),y=s.creator_id===d,_=(u||[]).map(j=>j.user).filter(Boolean),v=Ko(_,i||[]),C=(i||[]).filter(j=>j.matchday===s.current_day);e.innerHTML=`
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
        ${_.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||Ut};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">
              ${(j.pseudo||"?").slice(0,2).toUpperCase()}
            </div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">${j.club_name||j.pseudo}</div>
              <div style="font-size:11px;color:#999">@${j.pseudo}</div>
            </div>
            ${j.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑 Créateur</span>':""}
          </div>`).join("")}
        ${y&&_.length>=2?`
          <button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">
            🚀 Lancer la Mini League (${_.length} joueurs)
          </button>`:""}
        ${r?"":'<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre</button>'}
        ${r&&!y?'<div style="text-align:center;font-size:12px;color:#aaa;margin-top:10px">En attente du créateur pour lancer la partie...</div>':""}
        ${y?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer la Mini League</button>':""}
      </div>`:""}

      <!-- JOURNÉE EN COURS -->
      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${C.map(j=>qi(j,_,d,r)).join("")}
        ${y&&C.every(j=>j.status==="finished"||j.status==="bye")&&s.current_day<s.total_days?`
          <button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>`:""}
      </div>`:""}

      <!-- CLASSEMENT -->
      ${(s.status==="active"||s.status==="finished")&&v.length?`
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
            ${v.map((j,q)=>`
              <tr style="border-bottom:1px solid #f5f5f5;${j.userId===d?"background:#f0fdf4;":""}">
                <td style="padding:8px 4px 8px 0;font-weight:700;color:${q===0?Po:q<3?Ut:"#555"}">${q+1}</td>
                <td style="padding:8px 4px">
                  <div style="font-weight:700;font-size:12px">${j.clubName}</div>
                  <div style="font-size:10px;color:#999">@${j.pseudo}</div>
                </td>
                <td style="text-align:center;padding:8px 4px">${j.played}</td>
                <td style="text-align:center;padding:8px 4px">${j.won}</td>
                <td style="text-align:center;padding:8px 4px">${j.drawn}</td>
                <td style="text-align:center;padding:8px 4px">${j.lost}</td>
                <td style="text-align:center;padding:8px 4px">${j.goalsFor}</td>
                <td style="text-align:center;padding:8px 4px">${j.goalsAgainst}</td>
                <td style="text-align:center;padding:8px 4px;color:${j.goalDiff>=0?Ut:"#cc2222"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
                <td style="text-align:center;padding:8px 4px;font-weight:900;font-size:15px">${j.points}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`:""}

      <!-- HISTORIQUE JOURNÉES -->
      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:s.current_day-1},(j,q)=>q+1).reverse().map(j=>{const q=(i||[]).filter(F=>F.matchday===j);return`<div style="margin-bottom:10px">
            <div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${j}</div>
            ${q.map(F=>qi(F,_,d,!1,!0)).join("")}
          </div>`}).join("")}
      </div>`:""}

    </div>
  </div>`,(n=document.getElementById("ml-back"))==null||n.addEventListener("click",()=>Vt(e,t)),(E=document.getElementById("ml-start-btn"))==null||E.addEventListener("click",()=>Oo(e,t,s,_)),(S=document.getElementById("ml-next-day"))==null||S.addEventListener("click",()=>Uo(e,t,o)),(I=document.getElementById("ml-join-now"))==null||I.addEventListener("click",()=>yn(e,t,o,s.type)),(M=document.getElementById("ml-delete-btn"))==null||M.addEventListener("click",async()=>{if(!confirm(`Supprimer définitivement la Mini League "${s.name}" ? Cette action est irréversible.`))return;await A.from("mini_league_matches").delete().eq("league_id",o),await A.from("mini_league_members").delete().eq("league_id",o);const{error:j}=await A.from("mini_leagues").delete().eq("id",o);if(j){c("Erreur suppression : "+j.message,"error");return}c("Mini League supprimée","success"),Vt(e,t)}),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const q=C.find(F=>F.id===j.dataset.playMatch);q&&Vo(e,t,q,s)})})}function qi(e,t,o,a,c=!1){const l=y=>t.find(_=>_.id===y);if(e.is_bye){const y=l(e.home_id);return`<div style="padding:8px 10px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">
      🔵 ${(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"?"} est exempté(e) cette journée
    </div>`}const d=l(e.home_id),s=l(e.away_id),u=e.home_id===o||e.away_id===o,i=u&&e.status==="pending"&&a&&!c,r=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${u?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${u?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    <div style="font-size:14px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Ut:"#999"}">${r}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${i?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽ Jouer</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Oo(e,t,o,a){const{toast:c}=t,l=Ho(a.map(i=>i.id),o.mode),d=l.length,s=[];l.forEach((i,r)=>{i.forEach(y=>{s.push({league_id:o.id,matchday:r+1,home_id:y.home||y.bye,away_id:y.away||null,is_bye:!!y.bye,status:y.bye?"bye":"pending"})})});const{error:u}=await A.from("mini_league_matches").insert(s);if(u){c("Erreur génération calendrier : "+u.message,"error");return}await A.from("mini_leagues").update({status:"active",current_day:1,total_days:d}).eq("id",o.id),c("Mini League lancée ! Journée 1 commence.","success"),Gt(e,t,o.id)}function Ho(e,t){const a=e.length%2===0?[...e]:[...e,null],c=a.length,l=c-1,d=[];let s=a.slice(1);for(let u=0;u<l;u++){const i=[],r=[a[0],...s];for(let y=0;y<c/2;y++){const _=r[y],v=r[c-1-y];_===null?i.push({bye:v}):v===null?i.push({bye:_}):i.push({home:_,away:v})}d.push(i),s=[s[s.length-1],...s.slice(0,-1)]}if(t==="aller-retour"){const u=d.map(i=>i.map(r=>r.bye?r:{home:r.away,away:r.home}));return[...d,...u]}return d}async function Uo(e,t,o){const{data:a}=await A.from("mini_leagues").select("current_day,total_days").eq("id",o).single(),c=(a.current_day||0)+1,l=c>(a.total_days||0);await A.from("mini_leagues").update({current_day:l?a.total_days:c,status:l?"finished":"active"}).eq("id",o),t.toast(l?"🏆 Mini League terminée !":`Journée ${c} commencée !`,"success"),Gt(e,t,o)}async function Vo(e,t,o,a){const{navigate:c}=t;c("match-mini-league",{mlMatchId:o.id,leagueId:a.id})}function Ko(e,t){const o={};return e.forEach(a=>{o[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const c=o[a.home_id],l=o[a.away_id];!c||!l||(c.played++,l.played++,c.goalsFor+=a.home_score,c.goalsAgainst+=a.away_score,l.goalsFor+=a.away_score,l.goalsAgainst+=a.home_score,a.home_score>a.away_score?(c.won++,c.points+=3,l.lost++):a.home_score<a.away_score?(l.won++,l.points+=3,c.lost++):(c.drawn++,c.points++,l.drawn++,l.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,l.goalDiff=l.goalsFor-l.goalsAgainst)}),Object.values(o).sort((a,c)=>c.points-a.points||c.goalDiff-a.goalDiff||c.goalsFor-a.goalsFor)}async function Bi(e,t,o,a){var c,l;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:o,leagueId:a};try{const d=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(A.getChannels?A.getChannels():[]).forEach(u=>{const i=u.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&A.removeChannel(u)})}catch(s){console.warn("[FriendMatch] cleanup canaux:",s)}d&&(await A.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await A.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await ti(e,t,"random",({deckId:d,formation:s,starters:u,subsRaw:i,gcCardsEnriched:r,gcDefs:y})=>{const _=v=>Yo(e,t,d,s,u,i,v,y||[],o);if(!r.length){_([]);return}ei(e,r,_)})}async function Yo(e,t,o,a,c,l,d=[],s=[],u,i){const{state:r,navigate:y,toast:_}=t,v=r.profile.id;let C=!1,n=null;Ze(e);try{await A.rpc("cancel_matchmaking",{p_user_id:v})}catch{}try{await A.from("matchmaking_queue").delete().eq("user_id",v)}catch{}const{data:E}=await A.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",u).single();if(!E){_("Match introuvable","error"),Ue(e),y("mini-league");return}if(E.home_id!==v&&E.away_id!==v){_("Tu ne fais pas partie de ce match","error"),Ue(e),y("mini-league");return}const S=E.home_id===v,I=S?E.away:E.home,M=S?E.away_id:E.home_id,j=(F,H)=>{var te;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${E.matchday}</div>
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
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid rgba(255,255,255,0.2)">
              ⏳
            </div>
            <div style="font-size:12px;font-weight:700">${(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(te=document.getElementById("lobby-cancel"))==null||te.addEventListener("click",()=>{C=!0,clearInterval(n),Ue(e),y("mini-league")})},q=async(F,H)=>{C=!0,clearInterval(n),await new Promise(te=>setTimeout(te,600)),e.isConnected&&Wo(e,t,F,H,d,s)};if(j(),S){let F=E.match_id;if(!F){const{data:te,error:le}=await A.from("matches").insert({home_id:v,away_id:M,home_deck_id:o,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(le||!te){_("Erreur création match","error"),Ue(e),y("mini-league");return}F=te.id,await A.from("mini_league_matches").update({match_id:F,status:"playing"}).eq("id",u)}const H=F;n=setInterval(async()=>{if(C){clearInterval(n);return}const{data:te}=await A.from("matches").select("away_deck_id").eq("id",H).single();te!=null&&te.away_deck_id&&(clearInterval(n),q(H,!0))},1500)}else{let F=E.match_id;n=setInterval(async()=>{if(C){clearInterval(n);return}const{data:H}=await A.from("mini_league_matches").select("match_id").eq("id",u).single();H!=null&&H.match_id&&(clearInterval(n),F=H.match_id,await A.from("matches").update({away_deck_id:o}).eq("id",F),q(F,!1))},1500)}}async function Wo(e,t,o,a,c=[],l=[]){const{state:d,navigate:s,toast:u}=t,i=a?"p1":"p2",r=a?"p2":"p1",y=(c||[]).map(p=>p.id),_=(c||[]).map(p=>({id:p.id,gc_type:p.gc_type,_gcDef:p._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await A.from("matches").select("*").eq("id",o).single();if(!v){u("Match introuvable","error"),s("mini-league");return}async function C(){const[{data:p},{data:f},{data:g},{data:x}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]),m=T=>({cardId:T.card_id,position:T.position,id:T.id,firstname:T.firstname,name:T.surname_encoded,country_code:T.country_code,club_id:T.club_id,job:T.job,job2:T.job2,note_g:Number(T.note_g)||0,note_d:Number(T.note_d)||0,note_m:Number(T.note_m)||0,note_a:Number(T.note_a)||0,rarity:T.rarity,skin:T.skin,hair:T.hair,hair_length:T.hair_length,clubName:T.club_encoded_name||null,clubLogo:T.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),h=((p==null?void 0:p.starters)||[]).map(T=>m(T)),w=((f==null?void 0:f.starters)||[]).map(T=>m(T)),$=(p==null?void 0:p.formation)||"4-4-2",k=(f==null?void 0:f.formation)||"4-4-2";return{p1Team:mt(h,$),p2Team:mt(w,k),p1Subs:((p==null?void 0:p.subs)||[]).map(T=>m(T)),p2Subs:((f==null?void 0:f.subs)||[]).map(T=>m(T)),p1Formation:$,p2Formation:k,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?y:[],gc_p2:a?[]:y,gcCardsFull_p1:a?_:[],gcCardsFull_p2:a?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let n=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(!n)if(a){n=await C();const{data:p}=await A.from("matches").select("game_state").eq("id",o).single();!(p!=null&&p.game_state)||!Object.keys(p.game_state).length?await A.from("matches").update({game_state:n,turn_user_id:v.home_id}).eq("id",o):n=p.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let p=0;p<60&&!n;p++){await new Promise(g=>setTimeout(g,400));const{data:f}=await A.from("matches").select("game_state").eq("id",o).single();f!=null&&f.game_state&&Object.keys(f.game_state).length&&(n=f.game_state)}if(!n){u("Erreur de synchronisation","error"),s("mini-league");return}n.gc_p2=y,n.gcCardsFull_p2=_,await A.from("matches").update({game_state:n}).eq("id",o)}let E=!1,S=!1,I=!1,M=null,j=!1;const q=new Set,F=new Set;function H(p){var T,z;try{A.removeChannel(te)}catch{}const f=n[i+"Score"]||0,g=n[r+"Score"]||0;if(!I){I=!0;const B=p.winner_id||(f>g?d.profile.id:g>f?"opp":null),W=B===d.profile.id?"win":B?"loss":null;W&&Oi(()=>Promise.resolve().then(()=>Dn),void 0).then(J=>J.applyOwnEvolution(d.profile.id,W)).catch(()=>{})}if(!S){const B=n.p1Score||0,W=n.p2Score||0,J=(n.usedGc_p1||[]).length,O=(n.usedGc_p2||[]).length,D=p.winner_id||(B>W?v.home_id:W>B?v.away_id:null);(D?d.profile.id===D:d.profile.id<(a?v.away_id:v.home_id))&&(S=!0,Vi({player1Id:v.home_id,player2Id:v.away_id,score1:B,score2:W,gc1:J,gc2:O}).catch(Q=>console.warn("[FriendMatch] updateStats:",Q)))}let x,m;p.winner_id?(x=p.winner_id===d.profile.id,m=!1):p.forfeit?(x=f>g,m=!1):(m=f===g,x=f>g),(T=document.getElementById("pvp-end-overlay"))==null||T.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=m?"🤝":x?"🏆":"😞",$=m?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",k=m?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${k}">${$}</div>
      <div style="font-size:18px">${n[i+"Name"]} ${f} – ${g} ${n[r+"Name"]}</div>
      ${p.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(z=h.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{h.remove(),Ue(e),s("mini-league")})}const te=A.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},p=>{const f=p.new;try{if(f.status==="finished"||f.forfeit){if(E)return;E=!0,M&&(clearInterval(M),M=null),f.game_state&&(n=f.game_state),H(f);return}if(f.game_state){const g=n;n=f.game_state;const x=n._lastGC;if(x&&x.seq&&!F.has(x.seq)&&(F.add(x.seq),x.by!==i)){Y(x.type,x.by,()=>ce());return}const m=g[i+"Score"]||0,h=g[r+"Score"]||0,w=n[i+"Score"]||0,$=n[r+"Score"]||0,k=w>m,T=$>h;if((k||T)&&!q.has(n.round)){q.add(n.round);const z=[...n.log||[]].reverse().find(W=>W.isGoal),B=((z==null?void 0:z.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(B,w,$,k,()=>ce());return}ce()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function le(p){Object.assign(n,p),n.lastActionAt=new Date().toISOString();const{error:f}=await A.from("matches").update({game_state:n}).eq("id",o);f&&u("Erreur de synchronisation","error");try{ce()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function ae(){if(E)return;E=!0,M&&(clearInterval(M),M=null);const p=a?v.away_id:v.home_id,f=a?"p2":"p1",g=a?"p1":"p2",x={...n,[f+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:p,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",o)}catch{}try{A.removeChannel(te)}catch{}setTimeout(()=>{Ue(e),s("mini-league")},800)}const G={BOOST_STAT:({value:p=1,count:f=1,roles:g=[]},x,m)=>{const h=x[i+"Team"],w=Object.entries(h).filter(([$])=>!g.length||g.includes($)).flatMap(([$,k])=>k.filter(T=>!T.used).map(T=>({...T,_line:$})));if(!w.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),m(x);return}ie(w,f,`Choisir ${f} joueur(s) à booster (+${p})`,$=>{$.forEach(k=>{const T=(h[k._line]||[]).find(z=>z.cardId===k.cardId);T&&(T.boost=(T.boost||0)+p,x.log.push({text:`⚡ +${p} sur ${T.name}`,type:"info"}))}),x[i+"Team"]=h,m(x)})},DEBUFF_STAT:({value:p=1,count:f=1,roles:g=[],target:x="ai"},m,h)=>{const w=x==="home"?i:r,$=m[w+"Team"],k=x==="home"?"allié":"adverse",T=Object.entries($).filter(([z])=>!g.length||g.includes(z)).flatMap(([z,B])=>B.filter(W=>!W.used).map(W=>({...W,_line:z})));if(!T.length){m.log.push({text:`🎯 Aucun joueur ${k}`,type:"info"}),h(m);return}ie(T,f,`Choisir ${f} joueur(s) ${k}(s) (-${p})`,z=>{z.forEach(B=>{const W=($[B._line]||[]).find(J=>J.cardId===B.cardId);W&&(W.boost=(W.boost||0)-p,m.log.push({text:`🎯 -${p} sur ${W.name}`,type:"info"}))}),m[w+"Team"]=$,h(m)})},GRAY_PLAYER:({count:p=1,roles:f=[],target:g="ai"},x,m)=>{const h=g==="home"?i:r,w=x[h+"Team"],$=g==="home"?"allié":"adverse",k=Object.entries(w).filter(([T])=>!f.length||f.includes(T)).flatMap(([T,z])=>z.filter(B=>!B.used).map(B=>({...B,_line:T})));if(!k.length){x.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),m(x);return}ie(k,p,`Choisir ${p} joueur(s) ${$}(s) à exclure`,T=>{T.forEach(z=>{const B=(w[z._line]||[]).find(W=>W.cardId===z.cardId);B&&(B.used=!0,x.log.push({text:`❌ ${B.name} exclu !`,type:"info"}))}),x[h+"Team"]=w,m(x)})},REVIVE_PLAYER:({count:p=1,roles:f=[]},g,x)=>{const m=g[i+"Team"],h=Object.entries(m).filter(([w])=>!f.length||f.includes(w)).flatMap(([w,$])=>$.filter(k=>k.used).map(k=>({...k,_line:w})));if(!h.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(g);return}ie(h,p,`Choisir ${p} joueur(s) à ressusciter`,w=>{w.forEach($=>{const k=(m[$._line]||[]).find(T=>T.cardId===$.cardId);k&&(k.used=!1,g.log.push({text:`💫 ${k.name} ressuscité !`,type:"info"}))}),g[i+"Team"]=m,x(g)})},REMOVE_GOAL:({},p,f)=>{const g=r+"Score";p[g]>0?(p[g]--,p.log.push({text:"🚫 Dernier but annulé !",type:"info"})):p.log.push({text:"🚫 Aucun but à annuler",type:"info"}),f(p)},ADD_GOAL_DRAW:({},p,f)=>{p[i+"Score"]===p[r+"Score"]?(p[i+"Score"]++,p.log.push({text:"🎯 But bonus !",type:"info"})):p.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),f(p)},ADD_SUB:({value:p=1},f,g)=>{f.maxSubs=(f.maxSubs||3)+p,f.log.push({text:`🔄 +${p} remplacement(s)`,type:"info"}),g(f)},CUSTOM:({},p,f)=>f(p)};function ie(p,f,g,x){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function w(){var k,T;const $=p.map(z=>{const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",W=we(z,z._line)+(z.boost||0),O=h.find(V=>V.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",D=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${B};overflow:hidden;cursor:pointer;${D}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");m.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${f}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${f})
          </button>
        </div>`,(k=m.querySelector("#pp-close"))==null||k.addEventListener("click",()=>m.remove()),m.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const B=z.dataset.cid,W=p.find(O=>O.cardId===B),J=h.findIndex(O=>O.cardId===B);W&&(J>-1?h.splice(J,1):h.length<f&&h.push(W),w())})}),(T=m.querySelector("#pp-confirm"))==null||T.addEventListener("click",()=>{m.remove(),x(h)})}w(),document.body.appendChild(m)}async function pe(p,f){const x=(n["gcCardsFull_"+i]||[]).find($=>$.id===p),m=(x==null?void 0:x._gcDef)||(n.gcDefs||[]).find($=>{var k;return $.name===f||((k=$.name)==null?void 0:k.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),h=[...n["usedGc_"+i]||[],p],w={type:f,by:i,seq:(n._gcAnimSeq||0)+1};F.add(w.seq),Y(f,i,async()=>{if(m!=null&&m.effect_type&&m.effect_type!=="CUSTOM"){const k=G[m.effect_type];if(k){const T={...n};k(m.effect_params||{},T,async z=>{z["usedGc_"+i]=h,z._lastGC=w,z._gcAnimSeq=w.seq,await le(z)});return}}const $={...n};switch(f){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const k=r+"Score";$[k]>0&&($[k]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+i]=h,$._lastGC=w,$._gcAnimSeq=w.seq,await le($)})}function U(p,f){const g="usedCardIds_"+p,x=new Set(n[g]||[]);f.forEach(m=>x.add(m)),n[g]=[...x]}function oe(){for(const p of["p1","p2"]){const f=new Set(n["usedCardIds_"+p]||[]),g=n[p+"Team"];if(g)for(const x of["GK","DEF","MIL","ATT"])(g[x]||[]).forEach(m=>{m.used=f.has(m.cardId)})}}function ce(){var et,lt,ct,pt,ne,K;if(n.phase==="reveal")return he();if(n.phase==="midfield")return be();if(n.phase==="finished")return b();const p=n[i+"Team"],f=n[r+"Team"];oe();const g=n[i+"Score"],x=n[r+"Score"],m=n[i+"Name"],h=n[r+"Name"],w=n.phase===i+"-attack",$=n.phase===i+"-defense",k=Array.isArray(n["selected_"+i])?n["selected_"+i]:[],T=k.map(N=>N.cardId),z=window.innerWidth>=700,B=n[i+"Subs"]||[],W=n["usedSubIds_"+i]||[],J=B.filter(N=>!W.includes(N.cardId)),O=n["gcCardsFull_"+i]||[],D=n["usedGc_"+i]||[],V=O.filter(N=>!D.includes(N.id)),Q=n.boostOwner===i&&!n.boostUsed,re=!["GK","DEF","MIL","ATT"].some(N=>(f[N]||[]).some(ee=>!ee.used)),de=[...p.MIL||[],...p.ATT||[]].filter(N=>!N.used),fe=w&&re&&de.length===0?[...p.GK||[],...p.DEF||[]].filter(N=>!N.used).map(N=>N.cardId):[];function me(N,ee,ge){var Tt,wi;const ye=N._gcDef,We={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Xe={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Qe=(ye==null?void 0:ye.name)||N.gc_type,nt=(ye==null?void 0:ye.effect)||((Tt=Re[N.gc_type])==null?void 0:Tt.desc)||"",xt=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,yt=((wi=Re[N.gc_type])==null?void 0:wi.icon)||"⚡",at=Math.round(ge*.22),ut=Math.round(ge*.22),ft=ge-at-ut,ht=Qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${N.id}" data-gc-type="${N.gc_type}"
        style="box-sizing:border-box;width:${ee}px;height:${ge}px;border-radius:10px;border:2px solid ${Xe};background:${We};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${at}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ee-6}px">${Qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ft}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${xt?`<img src="${xt}" style="max-width:${ee-10}px;max-height:${ft-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ft*.55)}px">${yt}</span>`}
        </div>
        <div style="height:${ut}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${nt.slice(0,38)}</span>
        </div>
      </div>`}function ve(N,ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${N}px;height:${ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ee*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const ze=(N,ee)=>ee?ve(130,175):me(N,130,175),De=(N,ee)=>ee?ve(68,95):me(N,68,95),ke=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ee=w?Te(i)?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${k.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${k.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,$e=w&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${k.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${J.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':J.map(N=>`<div class="pvp-sub-btn" data-sub-id="${N.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(N,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,Ge=w?"attack":$?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(p,n[i+"Formation"],Ge,T,300,300,fe)}
      </div>
    </div>`;function Ne(N){if(N.type==="duel"&&(N.homeTotal!=null||N.aiTotal!=null)){const ee=(N.homeTotal||0)>=(N.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(N.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(N.homePlayers||[]).map(ge=>ot(ge)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ee?20:14}px;font-weight:900;color:${ee?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${N.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ee?14:20}px;font-weight:900;color:${ee?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${N.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(N.aiPlayers||[]).map(ge=>ot(ge)).join("")}
            </div>
          </div>
          ${N.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${N.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${N.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${N.type==="goal"?700:400};padding:3px 2px">${N.text||""}</div>`}const qe=(()=>{var ee,ge;if($&&((ee=n.pendingAttack)!=null&&ee.players)){const ye=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${tt((ye.players||[]).map(We=>({...We,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(w&&((ge=n.pendingAttack)!=null&&ge.players)){const ye=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((ye.players||[]).map(We=>({...We,used:!1})),"#00ff88",ye.total)}
        </div>`}const N=(n.log||[]).slice(-1)[0];return N?'<div style="padding:2px 4px">'+Ne(N)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Le=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${x}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${qe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;Ze(e),e.style.overflow="hidden",z?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Le}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ee}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${V.map(N=>ze(N,!1)).join("")}
            ${Q?ze(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Le}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(p,n[i+"Formation"],Ge,T,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${V.map(N=>De(N,!1)).join("")}
            ${Q?De(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&J.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&J.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&J.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&J.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${J.length}</div>
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
          <div>${Ee}${$e}</div>
        </div>
      </div>`;function He(){const N=e.querySelector(".match-screen");if(!N)return;const ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);N.style.height=ee+"px",N.style.minHeight=ee+"px",N.style.maxHeight=ee+"px",N.style.overflow="hidden";const ge=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");ge&&ye&&(ye.style.paddingBottom=ge.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),j||(j=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const ee=e.querySelector(".terrain-wrapper svg");ee&&(ee.removeAttribute("width"),ee.removeAttribute("height"),ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ee.setAttribute("viewBox","-26 -26 352 352"),ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(N=>{N.addEventListener("click",()=>{if(!w&&!$)return;const ee=N.dataset.cardId,ge=N.dataset.role,ye=(p[ge]||[]).find(nt=>nt.cardId===ee);if(!ye||ye.used)return;const We=fe.includes(ee);if(w&&!["MIL","ATT"].includes(ge)&&!We)return;Array.isArray(n["selected_"+i])||(n["selected_"+i]=[]);const Xe=n["selected_"+i],Qe=Xe.findIndex(nt=>nt.cardId===ee);Qe>-1?Xe.splice(Qe,1):Xe.length<3&&Xe.push({...ye,_role:ge}),ce()})}),e.querySelectorAll(".match-used-hit").forEach(N=>{N.addEventListener("click",()=>R(N.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(N=>{N.addEventListener("click",()=>R())}),(et=e.querySelector("#pvp-sub-open"))==null||et.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(N=>{N.addEventListener("click",()=>X(N.dataset.gcId,N.dataset.gcType))}),(lt=e.querySelector("#pvp-boost-card"))==null||lt.addEventListener("click",()=>P()),(ct=e.querySelector("#pvp-action"))==null||ct.addEventListener("click",N=>{w?N.currentTarget.dataset.pass==="1"||!Te(i)?Se():Ie():$&&Ce()}),(pt=e.querySelector("#pvp-quit"))==null||pt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ae()}),(ne=e.querySelector("#pvp-view-opp"))==null||ne.addEventListener("click",()=>ue()),(K=e.querySelector("#pvp-toggle-history"))==null||K.addEventListener("click",()=>se()),M&&(clearInterval(M),M=null),(w||$)&&!E){let N=30,ee=!1;const ge=()=>document.getElementById("pvp-timer"),ye=()=>{ge()&&(ge().textContent=N+"s",ge().style.color=ee?"#ff4444":"#fff")};ye(),M=setInterval(()=>{N--,N<0?ee?(clearInterval(M),M=null,w&&!Te(i)?Se():ae()):(ee=!0,N=15,ye()):ye()},1e3)}}function he(){Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await le({phase:"midfield"})},5e3)}let _e=!1;function be(){if(_e)return;const p=n[i+"Team"].MIL||[],f=n[r+"Team"].MIL||[];function g(V){return V.reduce((Q,re)=>Q+we(re,"MIL"),0)}function x(V){let Q=0;for(let re=0;re<V.length-1;re++){const de=it(V[re],V[re+1]);de==="#00ff88"?Q+=2:de==="#FFD700"&&(Q+=1)}return Q}const m=g(p)+x(p),h=g(f)+x(f),w=m>=h;function $(V,Q,re){return`<div id="duel-row-${re}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Q}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((de,fe)=>{const me=fe<V.length-1?it(de,V[fe+1]):null,ve=!me||me==="#ff3333"||me==="#cc2222",ze=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${re}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...de,note:we(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<V.length-1?`<div class="duel-link duel-link-${re}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ve?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ve?"none":`0 0 8px ${me}`}">
              ${ze?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${ze}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${re}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(V)} + ${x(V)} liens = <b style="color:#fff">${g(V)+x(V)}</b>
        </div>
      </div>`}Ze(e),e.innerHTML=`
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
      ${$(p,n[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(f,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const k=(V,Q)=>e.querySelectorAll(V).forEach((re,de)=>{setTimeout(()=>{re.style.opacity="1",re.style.transform="translateY(0) scale(1)"},Q+de*90)});k(".duel-card-me",150),k(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,Q)=>setTimeout(()=>{V.style.opacity="1"},Q*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Q=>Q.style.opacity="1")},1250);function T(V,Q,re){const de=document.getElementById(V);if(!de)return;const fe=performance.now(),me=ve=>{const ze=Math.min(1,(ve-fe)/re);de.textContent=Math.round(Q*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(me):de.textContent=Q};requestAnimationFrame(me)}setTimeout(()=>{T("pvp-score-me",m,800),T("pvp-score-opp",h,800)},1500);const z=n.p1Team.MIL||[],B=n.p2Team.MIL||[],W=g(z)+x(z),J=g(B)+x(B),O=W>=J?"p1":"p2";let D=n.boostValue;D==null&&(D=Qt(),n.boostValue=D,n.boostOwner=O,n.boostUsed=!1),_e=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(w?"me":"opp")),Q=e.querySelector("#duel-row-"+(w?"opp":"me")),re=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?re:de,me=w?de:re;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const ve=document.getElementById("duel-shock");ve&&(ve.style.animation="shockwave .5s ease-out forwards"),Q&&(Q.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ke;const ve=document.getElementById("pvp-duel-finale");if(!ve)return;const ze=n.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+D+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",De=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ve.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+n[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+De,ve.style.transition="opacity .45s ease",ve.style.opacity="1",ve.style.pointerEvents="auto",(ke=document.getElementById("pvp-start-match"))==null||ke.addEventListener("click",async()=>{const Ee=O;await le({phase:Ee+"-attack",attacker:Ee,round:1,boostValue:D,boostUsed:!1,boostOwner:Ee})})},600)},700)},2800)}function xe(p,f,g,x,m){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(z,B)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${B%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][B%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${x?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${f} – ${g}
      </div>
      ${p!=null&&p.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${p.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let k=!1;const T=()=>{k||(k=!0,h.remove(),setTimeout(()=>m(),50))};h.addEventListener("click",T),setTimeout(T,3500)}function Y(p,f,g){var D,V;const x=(n.gcDefs||[]).find(Q=>{var re;return Q.name===p||((re=Q.name)==null?void 0:re.toLowerCase().trim())===(p==null?void 0:p.toLowerCase().trim())}),m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",w=(x==null?void 0:x.name)||p,$=(x==null?void 0:x.effect)||((D=Re[p])==null?void 0:D.desc)||"",k=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,T=((V=Re[p])==null?void 0:V.icon)||"⚡",B=f===i?"Vous":n[f+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${B} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${m};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${T}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let J=!1;const O=()=>{J||(J=!0,W.remove(),setTimeout(()=>g&&g(),50))};W.addEventListener("click",O),setTimeout(O,3e3)}function X(p,f){var W,J,O,D;const x=(n["gcCardsFull_"+i]||[]).find(V=>V.id===p),m=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",$=(m==null?void 0:m.name)||f,k=(m==null?void 0:m.effect)||((W=Re[f])==null?void 0:W.desc)||"Carte spéciale.",T=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,z=((J=Re[f])==null?void 0:J.icon)||"⚡",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",B.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${T?`<img src="${T}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${z}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(B),(O=B.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>B.remove()),(D=B.querySelector("#pvp-gc-use"))==null||D.addEventListener("click",()=>{B.remove(),pe(p,f)})}function P(){var x;const p=n[i+"Team"],f=Object.entries(p).flatMap(([m,h])=>(h||[]).filter(w=>!w.used).map(w=>({...w,_line:m})));if(!f.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${f.map(m=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m._line]||"#555",w=we(m,m._line)+(m.boost||0);return`<div class="bp-item" data-cid="${m.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(x=g.querySelector("#bp-close"))==null||x.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(m=>{m.addEventListener("click",async()=>{const h=m.dataset.cid,w=f.find(k=>k.cardId===h);if(!w)return;const $=(p[w._line]||[]).find(k=>k.cardId===h);$&&($.boost=($.boost||0)+n.boostValue),g.remove(),await le({[i+"Team"]:p,boostUsed:!0})})})}function R(p=null){var J,O;if(!(n.phase===i+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const g=n[i+"Team"],x=n["usedSubIds_"+i]||[],m=n.maxSubs||3;if(x.length>=m){u(`Maximum ${m} remplacements atteint`,"warning");return}const h=Object.entries(g).flatMap(([D,V])=>(V||[]).filter(Q=>Q.used).map(Q=>({...Q,_line:D}))),w=(n[i+"Subs"]||[]).filter(D=>!x.includes(D.cardId));if(!h.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){u("Aucun remplaçant disponible","warning");return}let $=Math.max(0,h.findIndex(D=>D.cardId===p));const k=((J=h[$])==null?void 0:J._line)||((O=h[$])==null?void 0:O.job);let T=Math.max(0,w.findIndex(D=>D.job===k)),z=!1;const B=document.createElement("div");B.id="pvp-sub-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,ve,ze,De,ke,Ee;const D=h[$],V=w[T],Q=Math.min(130,Math.round((window.innerWidth-90)/2)),re=Math.round(Q*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;B.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${m})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de(T===0)}" ${T===0?"disabled":""}>▲</button>
          <div>${V?Ye({...V,used:!1,boost:0},Q,re):"<div>—</div>"}</div>
          <button id="pin-down" style="${de(T>=w.length-1)}" ${T>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${T+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${D?Ye({...D,used:!1,boost:0},Q,re):"<div>—</div>"}</div>
          <button id="pout-down" style="${de($>=h.length-1)}" ${$>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=B.querySelector("#psub-close"))==null||me.addEventListener("click",()=>B.remove()),(ve=B.querySelector("#pout-up"))==null||ve.addEventListener("click",()=>{$>0&&($--,W())}),(ze=B.querySelector("#pout-down"))==null||ze.addEventListener("click",()=>{$<h.length-1&&($++,W())}),(De=B.querySelector("#pin-up"))==null||De.addEventListener("click",()=>{T>0&&(T--,W())}),(ke=B.querySelector("#pin-down"))==null||ke.addEventListener("click",()=>{T<w.length-1&&(T++,W())});const fe=($e,Fe,Ge,Oe)=>{const Ne=B.querySelector("#"+$e);if(!Ne)return;let qe=0;Ne.addEventListener("touchstart",Le=>{qe=Le.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Le=>{const He=Le.changedTouches[0].clientY-qe;if(Math.abs(He)<30)return;const et=Fe();He<0&&et<Oe-1?(Ge(et+1),W()):He>0&&et>0&&(Ge(et-1),W())},{passive:!0})};fe("pin-panel",()=>T,$e=>T=$e,w.length),fe("pout-panel",()=>$,$e=>$=$e,h.length),(Ee=B.querySelector("#psub-confirm"))==null||Ee.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),z)return;z=!0;const Fe=h[$],Ge=w[T];if(!Fe||!Ge)return;const Oe=Fe._line,Ne=(g[Oe]||[]).findIndex(He=>He.cardId===Fe.cardId);if(Ne===-1){u("Erreur : joueur introuvable","error"),B.remove();return}const qe={...Ge,_line:Oe,position:Fe.position,used:!1,boost:0};g[Oe].splice(Ne,1,qe);const Le=[...x,Ge.cardId];B.remove(),Z(Fe,Ge,async()=>{await le({[i+"Team"]:g,[r+"Team"]:n[r+"Team"],["usedSubIds_"+i]:Le})})})}document.body.appendChild(B),W()}function Z(p,f,g){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(k,T,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${T};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[k.job]||"#555"};border:3px solid ${T};position:relative;overflow:hidden;margin:0 auto">
        ${je(k)?`<img src="${je(k)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(k.name||"").slice(0,12)}</div>
    </div>`;m.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(f,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(p,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(m);let w=!1;const $=()=>{w||(w=!0,m.remove(),setTimeout(()=>g(),50))};m.addEventListener("click",$),setTimeout($,2200)}function ue(){var f;const p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",p.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(p),(f=p.querySelector("#pvp-opp-close"))==null||f.addEventListener("click",()=>p.remove())}function se(){var x;const p=n.log||[],f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=m=>{var w,$,k;if(m.type==="duel"){const T=m.isGoal,z=m.homeScored&&i==="p1"||!m.homeScored&&T&&i==="p2",B=m.homeScored?"#FFD700":T?"#ff6b6b":"rgba(255,255,255,0.3)",W=T?z?"⚽ BUT !":"⚽ BUT adversaire !":(w=m.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${T?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${B};margin-bottom:4px">
          <div style="font-size:9px;color:${B};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${W}</div>
          ${($=m.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${tt(m.homePlayers,"rgba(255,255,255,0.7)",m.homeTotal)}</div>`:""}
          ${(k=m.aiPlayers)!=null&&k.length?`<div style="opacity:0.7">${tt(m.aiPlayers,"#ff6b6b",m.aiTotal)}</div>`:""}
        </div>`}return m.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${m.outPlayer?Ye({...m.outPlayer,used:!0,_line:m.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${m.inPlayer?Ye({...m.inPlayer,_line:m.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${m.type==="goal"?"#FFD700":m.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${m.text||""}</div>
      </div>`};f.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${p.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...p].reverse().map(g).join("")}
      </div>`,document.body.appendChild(f),(x=f.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>f.remove())}async function Se(){if(n.phase!==i+"-attack")return;const p=i==="p1"?"p2":"p1",f=(n.round||0)+1,g=[...n.log||[]];g.push({type:"info",text:`⏭️ ${n[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=Ve(n),m=Te(p),h=x||!m?"finished":p+"-attack";await le({["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:h,attacker:p,round:f,log:g}),h==="finished"&&await L(n)}async function Ie(){const p=n[i+"Team"],f=!["GK","DEF","MIL","ATT"].some(h=>(n[r+"Team"][h]||[]).some(w=>!w.used)),g=(n["selected_"+i]||[]).map(h=>{const w=(p[h._role]||[]).find(W=>W.cardId===h.cardId)||h,$=f&&["GK","DEF"].includes(h._role),k=p[h._role]||[],T=k.findIndex(W=>W.cardId===h.cardId),z=rt(k.length),B=T>=0?z[T]:w._col??1;return{...w,_line:h._role,_col:B,...$?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!g.length)return;const x=qt(g,n.modifiers[i]||{});U(i,g.map(h=>h.cardId)),g.forEach(h=>{const w=(p[h._role]||[]).find($=>$.cardId===h.cardId);w&&(w.used=!0)}),n["selected_"+i]=[],ce();const m=[...n.log||[]];if(f){const h=(n[i+"Score"]||0)+1,w=g.map(B=>({name:B.name,note:we(B,B._line||"ATT"),portrait:je(B),job:B.job}));m.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:x.total,aiTotal:0});const $=(n.round||0)+1,k=i==="p1"?"p2":"p1",T={...n,[i+"Team"]:p,[i+"Score"]:h},z=Ve(T);q.add($),xe(w,h,n[r+"Score"]||0,!0,async()=>{await le({[i+"Team"]:p,[i+"Score"]:h,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:z?"finished":k+"-attack",attacker:k,round:$,log:m}),z&&await L({...n,[i+"Score"]:h})});return}m.push({type:"pending",text:`⚔️ ${n[i+"Name"]} attaque (${x.total})`}),await le({[i+"Team"]:p,[r+"Team"]:n[r+"Team"],pendingAttack:{...x,players:g,side:i},["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},phase:r+"-defense",log:m})}async function Ce(){const p=n[i+"Team"],f=(n["selected_"+i]||[]).map(D=>{const V=(p[D._role]||[]).find(me=>me.cardId===D.cardId)||D,Q=p[D._role]||[],re=Q.findIndex(me=>me.cardId===D.cardId),de=rt(Q.length),fe=re>=0?de[re]:V._col??1;return{...V,_line:D._role,_col:fe}}),g=Bt(f,n.modifiers[i]||{});U(i,f.map(D=>D.cardId)),f.forEach(D=>{const V=(p[D._role]||[]).find(Q=>Q.cardId===D.cardId);V&&(V.used=!0)}),n["selected_"+i]=[],ce();const x=Dt(n.pendingAttack.total,g.total,n.modifiers[i]||{}),m=n.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),w=m==="p1"?"p2":"p1",$=(n.round||0)+1,k=(n.pendingAttack.players||[]).map(D=>({name:D.name,note:we(D,D._line||"ATT"),portrait:je(D),job:D.job})),T=[...n.log||[]];T.push({type:"duel",isGoal:h,homeScored:h&&m===i,text:h?`⚽ BUT de ${n[m+"Name"]} ! (${n.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${g.total})`,homePlayers:k,aiPlayers:f.map(D=>({name:D.name,note:we(D,D._line||"DEF"),portrait:je(D),job:D.job})),homeTotal:n.pendingAttack.total,aiTotal:g.total});const z=h?(n[m+"Score"]||0)+1:n[m+"Score"]||0,B={...n,[i+"Team"]:p,[m+"Score"]:z},W=Ve(B),J=W?"finished":w+"-attack",O=async()=>{await le({[i+"Team"]:p,[r+"Team"]:n[r+"Team"],[m+"Score"]:z,["selected_"+i]:[],modifiers:{...n.modifiers,[i]:{}},pendingAttack:null,phase:J,attacker:w,round:$,log:T}),(J==="finished"||W)&&await L({...n,[m+"Score"]:z})};if(h){const D=m===i,V=D?z:n[i+"Score"]||0,Q=D?n[r+"Score"]||0:z;q.add($),xe(k,V,Q,D,O)}else await O()}function Pe(p){return["MIL","ATT"].some(f=>(p[f]||[]).some(g=>!g.used))}function Ae(p){return["GK","DEF","MIL","ATT"].some(f=>(p[f]||[]).some(g=>!g.used))}function Be(p){return Ae(p)&&!Pe(p)}function Te(p){const f=n[p+"Team"],g=n[(p==="p1"?"p2":"p1")+"Team"];return!!(Pe(f)||!Ae(g)&&Be(f))}function Ve(p){const f=["MIL","ATT"].some(T=>(p.p1Team[T]||[]).some(z=>!z.used)),g=["MIL","ATT"].some(T=>(p.p2Team[T]||[]).some(z=>!z.used)),x=Ae(p.p1Team),m=Ae(p.p2Team);return!f&&!(!m&&x)&&(!g&&!(!x&&m))}function Je(p){const f=p.p1Score||0,g=p.p2Score||0;return f===g?null:f>g?v.home_id:v.away_id}async function L(p){try{const f=Je(p),g=f?v.home_id===f?v.away_id:v.home_id:null,x=p.p1Score||0,m=p.p2Score||0;await A.from("matches").update({status:"finished",winner_id:f,home_score:x,away_score:m}).eq("id",o);const{data:h}=await A.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",o).single();if(h){await A.from("mini_league_matches").update({home_score:x,away_score:m,status:"finished"}).eq("id",h.id);const{data:w}=await A.from("mini_league_matches").select("id, status").eq("league_id",h.league_id).eq("matchday",h.matchday);if((w||[]).every(k=>k.status==="finished"||k.status==="bye")){const{data:k}=await A.from("mini_leagues").select("current_day,total_days").eq("id",h.league_id).single();if(k){const T=(k.current_day||0)+1,z=T>(k.total_days||0);await A.from("mini_leagues").update({current_day:z?k.total_days:T,status:z?"finished":"active"}).eq("id",h.league_id)}}}f&&g&&Xt(f,g).catch(()=>{})}catch(f){console.error("[ML] finishMatch:",f)}}function b(){var m;const p=n[i+"Score"],f=n[r+"Score"],g=p>f,x=p===f;Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${p} - ${f}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(m=document.getElementById("pvp-home"))==null||m.addEventListener("click",()=>{try{A.removeChannel(te)}catch{}Ue(e),s("mini-league")})}ce()}const Jo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Di(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Ot(e,t){const a=t?Jo[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Gi(e){const o=Wt(e);return o?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${o}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Pi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function Xo(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await vi(e,t)}async function vi(e,t){const{state:o,toast:a}=t,{data:c}=await A.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:l}=await A.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",o.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(c||[]).filter(n=>n.seller_id!==o.profile.id),s=l||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${d.length} carte(s) en vente · ${(o.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let u="buy";const i=()=>{var n,E,S,I,M,j,q;return{name:(((n=document.getElementById("flt-name"))==null?void 0:n.value)||"").toLowerCase().trim(),club:(((E=document.getElementById("flt-club"))==null?void 0:E.value)||"").toLowerCase().trim(),country:(((S=document.getElementById("flt-country"))==null?void 0:S.value)||"").toLowerCase().trim(),job:((I=document.getElementById("flt-job"))==null?void 0:I.value)||"",rarity:((M=document.getElementById("flt-rarity"))==null?void 0:M.value)||"",note1:parseInt((j=document.getElementById("flt-note1"))==null?void 0:j.value)||0,note2:parseInt((q=document.getElementById("flt-note2"))==null?void 0:q.value)||0}};function r(n){const E=i();return n.filter(S=>{var te,le;const I=(te=S.card)==null?void 0:te.player;if(!I)return!1;const M=`${I.firstname} ${I.surname_encoded}`.toLowerCase(),j=(((le=I.clubs)==null?void 0:le.encoded_name)||"").toLowerCase(),q=(I.country_code||"").toLowerCase(),F=wt(I,I.job),H=I.job2?wt(I,I.job2):0;return!(E.name&&!M.includes(E.name)||E.club&&!j.includes(E.club)||E.country&&!q.includes(E.country)||E.job&&I.job!==E.job||E.rarity&&I.rarity!==E.rarity||E.note1&&F<E.note1||E.note2&&H<E.note2)})}function y(n){var j,q,F;const E=(j=n.card)==null?void 0:j.player;if(!E)return"";const S=wt(E,E.job),I=E.job2?wt(E,E.job2):0,M=(o.profile.credits||0)>=n.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Di(E.rarity)}
      ${Ot(S,E.job)}
      ${Ot(I,E.job2||null)}
      ${Gi(E.country_code)}
      ${Pi((q=E.clubs)==null?void 0:q.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.firstname} ${E.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((F=n.seller)==null?void 0:F.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${n.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${n.id}" ${M?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${M?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function _(n){var j,q,F;const E=(j=n.card)==null?void 0:j.player;if(!E)return"";const S=wt(E,E.job),I=E.job2?wt(E,E.job2):0,M=n.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${M?"opacity:0.7":""}">
      ${Di(E.rarity)}
      ${Ot(S,E.job)}
      ${Ot(I,E.job2||null)}
      ${Gi(E.country_code)}
      ${Pi((q=E.clubs)==null?void 0:q.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.firstname} ${E.surname_encoded}</div>
        <div style="font-size:10px;color:${M?"#22c55e":"#999"};margin-top:1px">
          ${M?`✅ Vendu à ${((F=n.buyer)==null?void 0:F.pseudo)||"—"} · ${n.sold_at?new Date(n.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(n.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${n.price.toLocaleString("fr")}</div>
        ${M?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${n.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function v(){const n=document.getElementById("mkt-content"),E=document.getElementById("mkt-filters");if(n){if(E.style.display=u==="buy"?"flex":"none",u==="buy"){const S=r(d);n.innerHTML=S.length?S.map(y).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const S=s.filter(M=>M.status==="active").sort((M,j)=>new Date(j.listed_at)-new Date(M.listed_at)),I=s.filter(M=>M.status==="sold").sort((M,j)=>new Date(j.sold_at||j.listed_at)-new Date(M.sold_at||M.listed_at));n.innerHTML=(S.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${S.length})</div>`+S.map(_).join(""):"")+(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${I.length})</div>`+I.map(_).join(""):"")+(!S.length&&!I.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}n.querySelectorAll("[data-buy]").forEach(S=>S.addEventListener("click",()=>Zo(S.dataset.buy,d,e,t))),n.querySelectorAll("[data-cancel]").forEach(S=>S.addEventListener("click",()=>er(S.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(n=>{n.addEventListener("click",()=>{u=n.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(E=>{const S=E===n;E.style.background=S?"var(--green)":"#fff",E.style.color=S?"#fff":"var(--gray-600)",E.style.borderColor=S?"var(--green)":"var(--gray-200)"}),v()})});let C;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(n=>{var E;(E=document.getElementById(n))==null||E.addEventListener("input",()=>{clearTimeout(C),C=setTimeout(v,250)})}),v()}async function Zo(e,t,o,a){const{state:c,toast:l,refreshProfile:d}=a,s=t.find(r=>r.id===e);if(!s)return;const u=s.price;if((c.profile.credits||0)<u){l("Crédits insuffisants","error");return}Qo(s,async()=>{const{error:r}=await A.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(r){l("Erreur achat : "+r.message,"error");return}await d();const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l("✅ Carte achetée !","success"),await vi(o,a)})}function Qo(e,t){var d;const o=(d=e.card)==null?void 0:d.player,a=o?`${o.firstname} ${o.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const l=s=>{c.remove(),s&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>l(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>l(!0)),c.addEventListener("click",s=>{s.target===c&&l(!1)})}async function er(e,t,o){const{toast:a}=o,{data:c}=await A.from("market_listings").select("card_id").eq("id",e).single();if(await A.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:l}=await A.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");l||await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),vi(t,o)}async function tr(e,{state:t,navigate:o,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await A.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function ir(e,{state:t,navigate:o,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(l||[]).filter(r=>r.status==="finished"),u=(l||[]).filter(r=>r.status==="in_progress");function i(r){const y=r.home_id===c.id;y?r.home_score:r.away_score,y?r.away_score:r.home_score;const _=r.winner_id===c.id,v=r.home_score===r.away_score&&r.status==="finished",C=r.status!=="finished"?"…":v?"N":_?"V":"D",n=r.status!=="finished"||v?"#888":_?"#1A6B3C":"#c0392b";let E=d[r.mode]||r.mode;r.away_id===null&&!E.startsWith("IA")&&(E="IA");const I=r.home_id===c.id?r.away:r.home;let M;r.away_id===null?M=E:I?M=`${I.club_name||I.pseudo} (${I.pseudo})`:M="Adversaire";let j="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(j=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const q=new Date(r.created_at),F=q.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+q.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),H=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${M}${j}</div>
        <div style="font-size:11px;color:var(--gray-600)">${E} · ${F}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${H}</span>
        <span style="background:${n};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${C}</span>
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
          ${u.map(i).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(i).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}vn(_n);const Me={user:null,profile:null,page:"home",params:{}};function zt(e,t="info",o=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},o))}function nr(e,t,o=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=o,document.getElementById("modal-overlay").classList.remove("hidden")}function pi(){document.getElementById("modal-overlay").classList.add("hidden")}async function St(){if(!Me.user)return;const{data:e}=await A.from("users").select("*").eq("id",Me.user.id).single();e&&(Me.profile=e)}function Kt(e,t={}){Me.page=e,Me.params=t,hn()}async function hn(){var a,c,l,d;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===Me.page)});const t=document.getElementById("nav-credits");t&&Me.profile&&(t.textContent=`💰 ${(Me.profile.credits||0).toLocaleString("fr")}`);const o={state:Me,navigate:Kt,toast:zt,openModal:nr,closeModal:pi,refreshProfile:St};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Me.page){case"home":await Ei(e,o);break;case"collection":await Rn(e,o);break;case"decks":await ai(e,o);break;case"boosters":await io(e,o);break;case"match":{const s=Me.params&&Me.params.matchMode||"vs_ai_easy";s==="random"?await mn(e,o):s==="friend"?await Bo(e,o,(a=Me.params)==null?void 0:a.friendId,(c=Me.params)==null?void 0:c.friendName):s==="mini-league"?await Bi(e,o,(l=Me.params)==null?void 0:l.mlMatchId,(d=Me.params)==null?void 0:d.leagueId):await ho(e,o);break}case"market":await Xo(e,o);break;case"rankings":await tr(e,o);break;case"matches":await ir(e,o);break;case"friends":await zn(e,o);break;case"mini-league":await No(e,o);break;case"match-mini-league":{const s=Me.params||{};await Bi(e,o,s.mlMatchId,s.leagueId);break}default:await Ei(e,o)}}function or(){var a;const e=document.getElementById("app"),t=Me.profile;if(!t)return;const o="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${o}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),Kt(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Kt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>rr())}async function rr(){const{data:e}=await A.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const o=(e||[]).map(a=>{const c=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
        ${o||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function ar(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&pi()}),document.getElementById("modal-close").addEventListener("click",pi);const{data:{session:e}}=await A.auth.getSession();if(!e){Ni(),_i(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:zt});return}Me.user=e.user,await St(),Ni();try{const{data:o}=await A.from("formation_links_overrides").select("formation, links"),a={};(o||[]).forEach(c=>{a[c.formation]=c.links}),wn(a)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!Me.profile){$n(document.getElementById("app"),{state:Me,navigate:async()=>{await St(),ri()},toast:zt,refreshProfile:St});return}const t=Array.isArray(Me.profile.pending_boosters)?Me.profile.pending_boosters:[];if(!Me.profile.onboarding_done&&t.length>0){go(document.getElementById("app"),{state:Me,navigate:()=>ri(),toast:zt,refreshProfile:St});return}ri(),A.auth.onAuthStateChange(async(o,a)=>{o==="SIGNED_OUT"&&(Me.user=null,Me.profile=null,document.getElementById("app").innerHTML="",_i(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:zt}))})}function sr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ii(){const e=document.getElementById("app");e&&(e.style.height=sr()+"px")}window.addEventListener("resize",ii);window.addEventListener("orientationchange",()=>setTimeout(ii,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ii);function ri(){const e=()=>{var o;(o=Me.user)!=null&&o.id&&A.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Me.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ii(),or(),hn()}function Ni(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function bn(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const o=document.createElement("div");o.id="boot-error",o.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",o.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(o),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}ar().catch(e=>{console.error("Échec du démarrage:",e),bn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&bn("Le serveur met trop de temps à répondre.")},12e3);
