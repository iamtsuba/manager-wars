import{s as $,F as oi,h as St,j as Mi,l as Qe,i as ln,k as cn,b as pn}from"./formation-links-CEzN0rcz.js";function mi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,d=document.getElementById("login-error");if(d.textContent="",!a||!c){d.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:l}=await $.auth.signInWithPassword({email:a,password:c});if(s.textContent="Se connecter",s.disabled=!1,l){d.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,d=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!c||!d){s.textContent="Remplissez tous les champs.";return}if(c.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==d){s.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:p}=await $.auth.signUp({email:a,password:c});if(l.textContent="Créer mon compte",l.disabled=!1,p){s.textContent=p.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function un(e,{state:t,navigate:n,toast:a,refreshProfile:c}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function l(){var z;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),f=((z=document.getElementById("setup-club"))==null?void 0:z.value)||"MW",m=f.trim().split(" ").filter(Boolean),x=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=s,i.style.borderColor=d),r&&(r.textContent=x,r.style.color=d)}document.getElementById("color1").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch1").style.background=d,l()}),document.getElementById("color2").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch2").style.background=s,l()});function p(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await $.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){r.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await $.from("users").select("id").eq("club_name",i).maybeSingle();if(f){r.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:x}=await $.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:d,club_color2:s,credits:1e4});if(x)throw x;await fn(t.user.id),await c(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){f.textContent=x.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function fn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await $.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const gn="modulepreload",mn=function(e){return"/manager-wars/"+e},xi={},xn=function(t,n,a){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.allSettled(n.map(p=>{if(p=mn(p),p in xi)return;xi[p]=!0;const i=p.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${r}`))return;const f=document.createElement("link");if(f.rel=i?"stylesheet":gn,i||(f.as="script"),f.crossOrigin="",f.href=p,l&&f.setAttribute("nonce",l),document.head.appendChild(f),i)return new Promise((m,x)=>{f.addEventListener("load",m),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function d(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return c.then(s=>{for(const l of s||[])l.status==="rejected"&&d(l.reason);return t().catch(d)})},It="#1A6B3C",Lt="#cc2222",yn="#D4A017",yi="#888";async function hn(e,t){const{state:n,toast:a}=t;e.innerHTML=`
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
    </div>`,await Ci(n,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>vn(n,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>ji(n,a,null,t))}async function Ci(e,t,n={}){const{navigate:a}=n,c=e.user.id,{data:d,error:s}=await $.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:l}=await $.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(l>0?(p.style.display="flex",p.textContent=l):p.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(s){console.error("[Friends] Erreur:",s),i.innerHTML=`<div style="color:${Lt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const r=(d||[]).map(x=>x.requester_id===c?x.addressee_id:x.requester_id);let f={};if(r.length){const{data:x}=await $.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(x||[]).forEach(z=>{f[z.id]=z})}const m=(d||[]).map(x=>({friendshipId:x.id,friend:f[x.requester_id===c?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!m.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:x,friend:z})=>bn(z,x)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>wn(e,x.dataset.stats,x.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const z=x.dataset.friendId,o=x.dataset.friendName;console.log("[Friends] clic match",{fid:z,fname:o,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:z,friendName:o}):t("Erreur navigation","error")})})}function bn(e,t){const n=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||n).slice(0,2).toUpperCase(),d=e.club_color2||It,s=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,p=l&&Date.now()-l.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${yn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function vn(e,t){const n=ri();n.innerHTML=`
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
    ${ai()}`,document.body.appendChild(n);const a=n.querySelector("#friend-pseudo-input"),c=n.querySelector("#add-friend-error"),d=()=>n.remove();a.focus(),n.querySelector("#add-cancel").addEventListener("click",d),n.addEventListener("click",s=>{s.target===n&&d()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){c.textContent="Entre un pseudo";return}c.textContent="";const{data:l}=await $.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!l){c.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await $.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(p){const r=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=r;return}const{error:i}=await $.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){c.textContent="Erreur : "+i.message;return}d(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function ji(e,t,n=null,a={}){const c=e.user.id,{data:d}=await $.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(m=>m.requester_id);let l={};if(s.length){const{data:m}=await $.from("users").select("id, pseudo, club_name").in("id",s);(m||[]).forEach(x=>{l[x.id]=x})}const p=(d||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),i=ri(),r=p||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(m=>{var x,z,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=m.requester)==null?void 0:x.club_name)||((z=m.requester)==null?void 0:z.pseudo)||"?"}
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
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",m=>{m.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:x}=await $.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ci(e,t,a),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await $.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function wn(e,t,n){const a=e.user.id,[c,d]=[a,t].sort(),s=a===c,{data:l}=await $.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",d).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},r=s?i.wins_p1||0:i.wins_p2||0,f=s?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,x=s?i.goals_p1||0:i.goals_p2||0,z=s?i.goals_p2||0:i.goals_p1||0,o=s?i.gc_used_p1||0:i.gc_used_p2||0,b=s?i.gc_used_p2||0:i.gc_used_p1||0,E=i.matches_total||0,I=(N,B,j,P=It,Q=Lt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${P}">${B}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${N}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Q}">${j}</div>
    </div>`,S=ri();S.innerHTML=`
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
        ${I("Victoires",r,f)}
        ${I("Nuls",m,m,yi,yi)}
        ${I("Défaites",f,r)}
        ${I("Buts marqués",x,z)}
        ${I("Buts encaissés",z,x,Lt,It)}
        ${I("GC utilisés ⚡",o,b,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${E} match${E>1?"s":""} joué${E>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(S),S.querySelector("#stats-close").addEventListener("click",()=>S.remove()),S.addEventListener("click",N=>{N.target===S&&S.remove()})}function ri(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ai(){return`
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
    </style>`}async function _n({player1Id:e,player2Id:t,score1:n,score2:a,gc1:c,gc2:d}){const[s,l]=[e,t].sort(),p=e!==s,i=p?a:n,r=p?n:a,f=p?d:c,m=p?c:d,x=i>r?1:0,z=r>i?1:0,o=i===r?1:0,{data:b}=await $.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",l).single();b?await $.from("friend_match_stats").update({wins_p1:b.wins_p1+x,wins_p2:b.wins_p2+z,draws:b.draws+o,goals_p1:b.goals_p1+i,goals_p2:b.goals_p2+r,gc_used_p1:b.gc_used_p1+f,gc_used_p2:b.gc_used_p2+m,matches_total:b.matches_total+1}).eq("player1_id",s).eq("player2_id",l):await $.from("friend_match_stats").insert({player1_id:s,player2_id:l,wins_p1:x,wins_p2:z,draws:o,goals_p1:i,goals_p2:r,gc_used_p1:f,gc_used_p2:m,matches_total:1})}const $n="2026.06.29-2355";async function hi(e,{state:t,navigate:n,toast:a}){var d,s;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${$n}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),n(l.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>n("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Tn(n);return}if(p==="match-random"){n("match",{matchMode:"random"});return}if(p==="match-friend"){n("friends");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var N,B,j,P,Q,de;const l=((N=window.visualViewport)==null?void 0:N.height)||window.innerHeight,p=((B=document.querySelector(".top-nav"))==null?void 0:B.offsetHeight)||56,i=((j=document.querySelector(".bottom-nav"))==null?void 0:j.offsetHeight)||60,r=((P=e.querySelector(".hero-compact"))==null?void 0:P.offsetHeight)||52,f=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const m=((de=(Q=e.querySelector("#logout-btn"))==null?void 0:Q.closest("div"))==null?void 0:de.offsetHeight)||44,x=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((ie,M)=>{var Y;return ie+(((Y=document.getElementById(M))==null?void 0:Y.offsetHeight)||0)},0),z=14*5,o=l-p-i-r-m-x-z,b=Math.max(80,Math.round(o*.28)),E=Math.max(160,Math.round(o*.72)),I=Math.floor((E-10)/2);f&&(f.style.minHeight=f.style.maxHeight=b+"px"),e.querySelectorAll(".play-grid .play-card").forEach(ie=>{ie.style.minHeight=ie.style.height=I+"px"});const S=Math.round(I*.55);e.querySelectorAll(".play-card .play-icon").forEach(ie=>{ie.style.height=S+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()}),Fi(t,a),An(t,a,n),Bi(t,a,n))}async function Bi(e,t,n){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:d}=await $.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let l={};if(s.length){const{data:p}=await $.from("users").select("id, pseudo, club_name").in("id",s);(p||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}a.innerHTML=d.map(p=>{const i=p.home_id===c?p.away_id:p.home_id,r=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${p.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const{resumePvpMatch:i}=await xn(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>To);return{resumePvpMatch:f}},void 0),r=document.getElementById("page-content")||document.getElementById("app");i(r,{state:e,navigate:n,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)})}),a.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{En(async()=>{await kn(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Bi(e,t,n)})})})}async function kn(e,t,n){const{data:a}=await $.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===n,d=c?0:3,s=c?3:0,l=a.game_state||{};l.p1Score=d,l.p2Score=s,l.phase="finished",l.forfeit=!0,await $.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:l}).eq("id",e)}function En(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function An(e,t,n){var l,p,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await $.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const d=((l=c.inviter)==null?void 0:l.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",s=c.inviter_id;a.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",n("match",{matchMode:"friend",friendId:s,friendName:d})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await $.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Fi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:a,error:c}=await $.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){n.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(p=>{var i;return((i=p.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=d>2?` +${d-2}`:"";n.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{ji(e,t,()=>Fi(e,t))})}function Tn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const a=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",a),n.addEventListener("click",c=>{c.target===n&&a()}),n.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Ne={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ve(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const bi=["ATT","MIL","DEF","GK"];function qi(e){let t=0;const n=e.length;for(let a=0;a<n;a++)for(let c=a+1;c<n;c++){const d=e[a],s=e[c];if(!d||!s)continue;const l=d._col!=null&&s._col!=null&&d._col===s._col,p=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,i=bi.indexOf(d._line||d.job),r=bi.indexOf(s._line||s.job),f=Math.abs(i-r)===1;if(!((d._line||d.job)===(s._line||s.job)&&p||l&&f))continue;const z=d.country_code&&s.country_code&&d.country_code===s.country_code,o=d.club_id&&s.club_id&&d.club_id===s.club_id;z&&o?t+=2:(z||o)&&(t+=1)}return t}function Ht(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;return d+(Number(l==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=qi(e);let c=n+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:n,links:a,total:Math.max(0,c)}}function Ut(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;let p=0;return l==="GK"?p=Number(s.note_g)||0:l==="MIL"?p=Number(s.note_m)||0:p=Number(s.note_d)||0,d+p+(s.boost||0)},0),a=qi(e);let c=n+a;return t.stolenNote&&(c-=t.stolenNote),{base:n,links:a,total:Math.max(0,c)}}function Kt(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Di(e,t,n="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const c=[...a].sort((s,l)=>{const p=t==="attack"?ve(s,"ATT"):s._line==="GK"?ve(s,"GK"):ve(s,"DEF");return(t==="attack"?ve(l,"ATT"):l._line==="GK"?ve(l,"GK"):ve(l,"DEF"))-p});let d=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(d,c.length,3))}function In(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const Ln={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Gi(e,t){const n=e.player;if(!n)return 0;const a=n.rarity;if(a!=="pepite"&&a!=="papyte")return Number(n[t])||0;const c=Ni(n),d=Number(n[t])||0;if(d<=0)return 0;const s=n.note_min??1,l=n.note_max??10,i=(e.current_note??c)-c;return Math.min(l,Math.max(s,d+i))}function Ni(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Pi(e,t){!e||!t||await Promise.all([vi(e,"win"),vi(t,"loss")])}async function vi(e,t){const{data:n}=await $.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(n!=null&&n.length))return;const a=n.filter(c=>{var d,s;return((d=c.player)==null?void 0:d.rarity)==="pepite"||((s=c.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const d=Ln[c.player.rarity],s=t==="win"?d.win:d.loss,l=c.player.note_min??1,p=c.player.note_max??10,i=Ni(c.player),r=c.current_note??i,f=Math.min(p,Math.max(l,r+s));return $.from("cards").update({current_note:f}).eq("id",c.id)}))}const Ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Bt=["GK","DEF","MIL","ATT"],zn=["Tous","GK","DEF","MIL","ATT"],Sn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function wi(e){const t=e.player;if(!t)return null;const n=t.rarity;return(n==="pepite"||n==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Mn(e){return e.length?e.reduce((t,n)=>wi(n)>wi(t)?n:t,e[0]):e[0]}function Oi(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const si={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Hi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function zt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Wt(e,t=""){var m,x;const n=e.player;if(!n)return"";const a=n.job||"ATT",c=At[a],d=Ri[n.rarity]||"#ccc",s=n.rarity==="pepite"||n.rarity==="papyte",l=s&&e.current_note!=null?e.current_note:zt(n,a),p=n.job2?s?Gi(e,Oi(n.job2)):zt(n,n.job2):null,i=n.job2?At[n.job2]:null,r=Hi(n),f=si[n.country_code]||n.country_code||"";return`
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
        ${(m=n.clubs)!=null&&m.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((x=n.clubs)==null?void 0:x.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function _i(e){const t=e.job||"ATT",n=zt(e,t),a=si[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Cn(e,t){const{state:n,navigate:a,toast:c,openModal:d,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:p}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(O=>O.card_type==="player"&&O.player),r=(l||[]).filter(O=>O.card_type==="game_changer"),f=(l||[]).filter(O=>O.card_type==="formation"),{data:m}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(m||[]).forEach(O=>{x[O.name]=O});const z=Object.keys(oi),o=Object.keys(Ne),b={};i.forEach(O=>{const U=O.player.id;b[U]=(b[U]||0)+1}),new Set(Object.keys(b).map(O=>String(O)));const E=new Set(f.map(O=>O.formation)),I=new Set(r.map(O=>O.gc_type));let S="player",N="Tous",B="",j=!1;function P(){return[...i].sort((O,U)=>{const C=Bt.indexOf(O.player.job),q=Bt.indexOf(U.player.job);return C!==q?C-q:(O.player.surname_encoded||"").localeCompare(U.player.surname_encoded||"")})}function Q(){return[...p||[]].sort((O,U)=>{const C=Bt.indexOf(O.job),q=Bt.indexOf(U.job);return C!==q?C-q:(O.surname_encoded||"").localeCompare(U.surname_encoded||"")})}function de(){return P().filter(O=>{const U=O.player,C=N==="Tous"||U.job===N,q=!B||`${U.firstname} ${U.surname_encoded}`.toLowerCase().includes(B);return C&&q})}function ie(){return Q().filter(O=>{const U=N==="Tous"||O.job===N,C=!B||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(B);return U&&C})}e.innerHTML=`
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
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${B}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${zn.map(U=>`
            <button class="filter-btn" data-job="${U}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${U===N?"var(--green)":"var(--gray-200)"};
                background:${U===N?"var(--green)":"#fff"};
                color:${U===N?"#fff":"var(--gray-600)"}">
              ${U}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",U=>{B=U.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(U=>{U.addEventListener("click",()=>{N=U.dataset.job,M(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})):(O.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})))}function Y(){const O=document.getElementById("col-grid");O&&(S==="player"?he(O):S==="formation"?xe(O):ge(O))}function ne(O,U,C,q,K){const oe=document.getElementById("col-grid"),te=document.getElementById("col-big");if(!oe||!te)return;var we=0;function _e(){const ke=window.innerWidth>=768,Se=document.getElementById("col-big"),Ee=document.getElementById("col-grid");ke&&Se&&(Se.style.minHeight="420px",Se.style.flex="1 1 auto"),ke&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),te.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+U(O[we])+"</div>";var Te=te.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){q(O[we])}),requestAnimationFrame(function(){var $e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!$e||!te)){var De=te.clientHeight-8,Re=te.clientWidth-24,k=$e.offsetHeight,u=$e.offsetWidth;if(k>0&&u>0&&De>40){var g=ke?2.2:1,h=Math.min(De/k,Re/u,g);$e.style.transform="scale("+h.toFixed(3)+")",$e.style.transformOrigin="top center"}}}),oe.innerHTML=O.map(function($e,De){var Re=De===we,k="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Re?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+De+'" style="'+k+'">'+C($e,Re)+"</div>"}).join(""),oe.querySelectorAll(".col-mini-item").forEach(function($e){$e.addEventListener("click",function(){we=Number($e.dataset.idx),_e(),$e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function D(O){var U=window.innerWidth>=768?.76:.54,C;if(!O||O._fake){var q=O?O.player:null;if(!q)return"";C=_i(q)}else C=Wt(O,"");return'<div style="display:inline-block;zoom:'+U+';pointer-events:none;line-height:0">'+C+"</div>"}function Z(O,U,C){U=U||100,C=C||140;var q=St[O]||{},K={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},oe=Math.max(3,Math.round(U*.06)),te=Object.entries(q).map(function(_e){var ke=_e[0],Se=_e[1],Ee=ke.replace(/\d+$/,""),Te=K[Ee]||"#888",$e=Math.round(Se.x*U),De=Math.round(Se.y*C);return'<circle cx="'+$e+'" cy="'+De+'" r="'+oe+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),we=Math.max(1,Math.round(U/50));return'<svg viewBox="0 0 '+U+" "+C+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+U+'" height="'+C+'" fill="#1A6B3C"/><rect x="'+Math.round(U*.2)+'" y="'+Math.round(C*.02)+'" width="'+Math.round(U*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/><line x1="0" y1="'+Math.round(C*.5)+'" x2="'+U+'" y2="'+Math.round(C*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><ellipse cx="'+Math.round(U*.5)+'" cy="'+Math.round(C*.5)+'" rx="'+Math.round(U*.18)+'" ry="'+Math.round(C*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><rect x="'+Math.round(U*.2)+'" y="'+Math.round(C*.82)+'" width="'+Math.round(U*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/>'+te+"</svg>"}function ae(O,U,C){var q=C>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+C+"</div>":"",K=U?'data-form-id="'+U.id+'"':"",oe=O.length>7?14:O.length>5?16:19,te=!!U;return"<div "+K+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(te?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(te?"":"filter:grayscale(1);opacity:0.5")+'">'+q+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(te?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+oe+"px;font-weight:900;color:"+(te?"#1A6B3C":"#aaa")+';line-height:1">'+O+'</div></div><div style="flex:1;overflow:hidden;background:'+(te?"#1A6B3C":"#ccc")+'">'+Z(O,140,220)+"</div></div>"}function pe(O,U){var C=window.innerWidth>=768?.76:.54,q=140,K=305,oe=Math.round(K*.22),te=K-oe,we=O.length>7?10:13,_e=Z(O,q,te),ke=U?"1.5px solid #2a7a40":"1px solid #ddd",Se=U?"":"filter:grayscale(1);opacity:0.45;",Ee=U?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+C+';line-height:0;pointer-events:none"><div style="width:'+q+"px;height:"+K+"px;border-radius:6px;border:"+ke+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Se+'"><div style="height:'+oe+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+we+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(q-4)+'px">'+O+'</span></div><div style="height:'+te+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function he(O){if(j){const U=ie();if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const C=U.map(q=>i.find(K=>K.player.id===q.id)||{_fake:!0,player:q,id:"fake-"+q.id});ne(C,q=>q._fake?_i(q.player):Wt(q,""),q=>q._fake?D({player:q.player,id:"x",_fake:!0}):D(q),q=>{q._fake||$i(q,i,b,t)})}else{const U=de();if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const C={};U.forEach(K=>{const oe=K.player.id;C[oe]||(C[oe]=[]),C[oe].push(K)});const q=Object.values(C).map(K=>Mn(K));ne(q,K=>{const oe=b[K.player.id]||1,te=oe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${oe}</div>`:"",_e=i.filter(ke=>ke.player.id===K.player.id&&ke.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Wt(K,te+_e)},K=>D(K),K=>$i(K,i,b,t))}}function xe(O){const U=j?z:[...E];if(!U.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const C=U.map(q=>({formation:q,card:f.find(K=>K.formation===q)||null,owned:E.has(q)}));ne(C,({formation:q,card:K,owned:oe})=>ae(q,oe?K:null,oe?f.filter(te=>te.formation===q).length:0),({formation:q,owned:K})=>pe(q,K),({card:q,owned:K})=>{K&&q&&Bn(q,f,t,d)})}function ge(O){const U=Object.keys(x),C=j?U.length?U:o:[...I];if(!C.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const q=C.map(K=>({type:K,gc:Ne[K]||{icon:"⚡",desc:""},def:x[K]||null,owned:I.has(K),card:r.find(oe=>oe.gc_type===K)||null}));ne(q,({type:K,gc:oe,def:te,owned:we,card:_e})=>{const ke=we?r.filter(g=>g.gc_type===K).length:0,Se=ke>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ke}</div>`:"",Ee=(te==null?void 0:te.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},$e={purple:"#b06ce0",light_blue:"#00d4ef"},De=Te[te==null?void 0:te.color]||Te.purple,Re=$e[te==null?void 0:te.color]||$e.purple,k=(te==null?void 0:te.effect)||oe.desc||"",u=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return we&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${K}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Re};background:${De};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Re}66;cursor:pointer">
          ${Se}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${K.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${K}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${u?`<img src="${u}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${oe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${k.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${K}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${oe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:K,gc:oe,def:te,owned:we})=>{const _e=window.innerWidth>=768?.76:.54,ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Se={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=ke[te==null?void 0:te.color]||ke.purple,Te=Se[te==null?void 0:te.color]||Se.purple,$e=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return we?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${K}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${$e?`<img src="${$e}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${oe.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((te==null?void 0:te.effect)||oe.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${oe.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${K}</span></div></div>`},({type:K,owned:oe,def:te})=>{oe&&jn(K,te,d)})}e.querySelectorAll(".col-tab-btn").forEach(O=>{O.addEventListener("click",()=>{S=O.dataset.tab,N="Tous",B="",j=!1,e.querySelectorAll(".col-tab-btn").forEach(U=>{const C=U.dataset.tab===S;U.style.borderBottomColor=C?"var(--green)":"transparent",U.style.color=C?"var(--green)":"var(--gray-600)"}),M(),Y()})}),M(),Y()}function jn(e,t,n){const a=Ne[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[t==null?void 0:t.color]||d.purple,p=s[t==null?void 0:t.color]||s.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ft=1e3;function Bn(e,t,n,a){var z,o,b;const{state:c,toast:d,closeModal:s,navigate:l,refreshProfile:p}=n,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const E=St[i]||{},I=oi[i]||[],S=290,N=360,B=20;function j(Q){const de=E[Q];return de?{x:de.x*S,y:de.y*N}:null}let P=`<svg width="${S}" height="${N}" viewBox="0 0 ${S} ${N}" xmlns="http://www.w3.org/2000/svg">`;for(const[Q,de]of I){const ie=j(Q),M=j(de);!ie||!M||(P+=`<line x1="${ie.x}" y1="${ie.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const Q of Object.keys(E)){const de=j(Q);if(!de)continue;const ie=Q.replace(/\d+/,""),M=r[ie]||"#555";P+=`<circle cx="${de.x}" cy="${de.y}" r="${B}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,P+=`<text x="${de.x}" y="${de.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>`}return P+="</svg>",P}const m=t.filter(E=>E.formation===i);m.length;const x=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${x?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(z=document.getElementById("direct-sell-form-btn"))==null||z.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${Ft.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const E=m.find(S=>!S.is_for_sale)||m[0];if(!E){d("Aucune carte à vendre","error");return}await $.from("market_listings").delete().eq("card_id",E.id),await $.from("transfer_history").delete().eq("card_id",E.id);const{error:I}=await $.from("cards").delete().eq("id",E.id);if(I){d(I.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+Ft}).eq("id",c.profile.id),await p(),d(`+${Ft.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(o=document.getElementById("market-sell-form-btn"))==null||o.addEventListener("click",async()=>{const E=parseInt(document.getElementById("sell-price-form").value);if(!E||E<1){d("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:E}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:E}),d("Carte mise en vente sur le marché !","success"),s(),l("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),l("collection")})}async function $i(e,t,n,a){var ae,pe,he,xe,ge,O,U;const{state:c,toast:d,openModal:s,closeModal:l,navigate:p,refreshProfile:i}=a,r=e.player,f=t.filter(C=>C.player.id===r.id),m=f.length,x=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0),z=r.rarity||"normal",{data:o}=await $.from("sell_price_configs").select("*").eq("rarity",z).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1),b=((ae=o==null?void 0:o[0])==null?void 0:ae.price)??Sn[z]??1e3,E=r.rarity!=="legende",I=Hi(r),S=(r.rarity==="pepite"||r.rarity==="papyte")&&e.current_note!=null?e.current_note:zt(r,r.job),N=r.rarity==="pepite"||r.rarity==="papyte",B=r.job2?N?Gi(e,Oi(r.job2)):zt(r,r.job2):null,j=At[r.job]||"#1A6B3C",P=r.job2?At[r.job2]:null,Q=Ri[r.rarity]||"#ccc",de=si[r.country_code]||r.country_code||"",ie=f.map(C=>C.id);let M={};if(ie.length){const{data:C}=await $.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ie).order("transferred_at",{ascending:!0});(C||[]).forEach(q=>{M[q.card_id]||(M[q.card_id]=[]),M[q.card_id].push(q)})}const Y=C=>{const q=C.transferred_at?new Date(C.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",K=C.source==="booster"?"Booster":C.price?C.price.toLocaleString("fr"):"—";return`
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
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${m>1?`(${m})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((C,q)=>{const K=M[C.id]||[],oe=C.is_for_sale,te=K.length?K[K.length-1]:null,_e=(r.rarity==="pepite"||r.rarity==="papyte")&&C.current_note!=null?` (☆${C.current_note})`:"";return`
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${Q};flex-shrink:0">
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
            ${B!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${P}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${I?`<img src="${I}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${de}</div>
            ${(pe=r.clubs)!=null&&pe.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((he=r.clubs)==null?void 0:he.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${Q}">${r.rarity.toUpperCase()}</div>
          ${r.rarity==="pepite"||r.rarity==="papyte"?`
          <div style="margin-top:6px;background:${Q}18;border-left:3px solid ${Q};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${Q};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([C,q])=>{const K=At[C],oe=Number(q)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
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
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${ne}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",l);let D=new Set;const Z=()=>{const C=D.size,q=document.getElementById("sell-action-panel");q&&(q.style.display=C>0?"block":"none",document.getElementById("sell-selected-count").textContent=C,document.getElementById("sell-direct-total").textContent=(C*b).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(C=>{C.addEventListener("change",()=>{const q=C.dataset.id;C.checked?D.add(q):D.delete(q);const K=C.closest(".exemplaire-row");K&&(K.style.borderColor=C.checked?"#1A6B3C":"#eee"),Z()})}),document.querySelectorAll(".exemplaire-row").forEach(C=>{C.addEventListener("click",q=>{if(q.target.closest("button")||q.target.tagName==="INPUT")return;const K=C.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(C=>{C.addEventListener("click",q=>{q.stopPropagation();const K=document.querySelector(`.expl-hist[data-hist="${C.dataset.idx}"]`);K&&(K.style.display=K.style.display==="none"?"flex":"none")})}),(ge=document.getElementById("direct-sell-btn"))==null||ge.addEventListener("click",async()=>{const C=[...D];if(!C.length)return;const q=C.length*b;if(!confirm(`Vendre ${C.length} carte${C.length>1?"s":""} ${r.surname_encoded} pour ${q.toLocaleString("fr")} crédits ? Action irréversible.`))return;await $.from("market_listings").delete().in("card_id",C),await $.from("transfer_history").delete().in("card_id",C);const{error:K}=await $.from("cards").delete().in("id",C);if(K){d(K.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+q}).eq("id",c.profile.id),await i();const oe=document.getElementById("nav-credits");oe&&(oe.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d(`+${q.toLocaleString("fr")} crédits ! ${C.length} carte${C.length>1?"s":""} vendue${C.length>1?"s":""}.`,"success"),l(),p("collection")}),(O=document.getElementById("market-sell-btn"))==null||O.addEventListener("click",async()=>{var we;const C=[...D];if(!C.length){d("Sélectionne au moins un exemplaire","warning");return}const q=parseInt((we=document.getElementById("sell-market-price"))==null?void 0:we.value);if(!q||q<1){d("Prix invalide","error");return}const{error:K}=await $.from("cards").update({is_for_sale:!0,sale_price:q}).in("id",C);if(K){d(K.message,"error");return}const oe=C.map(_e=>({seller_id:c.profile.id,card_id:_e,price:q,status:"active"})),{error:te}=await $.from("market_listings").insert(oe);te&&console.warn("[Market] insert listings:",te.message),d(`${C.length} carte${C.length>1?"s":""} mise${C.length>1?"s":""} en vente à ${q.toLocaleString("fr")} cr. chacune !`,"success"),l(),p("collection")}),(U=document.getElementById("cancel-sell-btn"))==null||U.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),l(),p("collection")})}const Pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Vt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Ui(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ki(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Fn(e,t=44,n=58){var x;const a=e?Vt(e):null,c=e?Ki(e):null,d=Ui(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",l=rt[s]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(n*.19),f=Math.round(n*.25),m=n-r-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(x=e==null?void 0:e.clubs)!=null&&x.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Zt(e,t){const{state:n,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:l,error:p}=await $.from("decks").insert({owner_id:n.profile.id,name:s}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),ki(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>ki(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",s.dataset.name);if(!l||l===s.dataset.name)return;const{error:p}=await $.from("decks").update({name:l}).eq("id",s.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),Zt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:l}=await $.from("decks").delete().eq("id",s.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),Zt(e,t)})})}async function ki(e,t,n){const{state:a,toast:c}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("decks").select("*").eq("id",e).single(),{data:s}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(s||[]).filter(x=>x.card_type==="player"&&x.player),p=(s||[]).filter(x=>x.card_type==="formation"),i=p.map(x=>x.formation).filter(Boolean),{data:r}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=d.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:d.name,formation:f,formationCardId:d.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:p,availableFormations:i};(r||[]).forEach(x=>{x.is_starter?m.slots[x.position]=x.card_id:m.subs.includes(x.card_id)||m.subs.push(x.card_id)}),ut(t,m,n)}function ut(e,t,n){var p;const{navigate:a}=n;Pt[t.formation];const c=Ei(t.formation),d=c.filter(i=>t.slots[i]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Pt),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${Fn(r,44,58)}
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
  </div>`,qn(e,t,c,n),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=Ei(t.formation),f={};r.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,ut(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Nn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),ut(e,t,n)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{Gn(t,e,n)})}function qn(e,t,n,a){const c=e.querySelector("#deck-field");if(!c)return;const d=St[t.formation]||{},s=Mi(t.formation)||[],l={};for(const E of n){const I=t.slots[E],S=I?t.playerCards.find(N=>N.id===I):null;l[E]=S?S.player:null}const p=300,i=300,r=48,f=64,m=13,x=16,z=38;function o(E){const I=d[E];return I?{x:I.x*p,y:I.y*i}:null}let b="";for(const[E,I]of s){const S=o(E),N=o(I);if(!S||!N)continue;const B=l[E]?{...l[E],club_id:l[E].club_id,country_code:l[E].country_code,rarity:l[E].rarity}:null,j=l[I]?{...l[I],club_id:l[I].club_id,country_code:l[I].country_code,rarity:l[I].rarity}:null,P=Qe(B,j);P==="#ff3333"||P==="#cc2222"?b+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${N.x.toFixed(1)}" y2="${N.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(b+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${N.x.toFixed(1)}" y2="${N.y.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,b+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${N.x.toFixed(1)}" y2="${N.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const E of n){const I=o(E);if(!I)continue;const S=l[E],N=E.replace(/\d+/,""),B=rt[N]||"#555",j=(I.x-r/2).toFixed(1),P=(I.y-f/2).toFixed(1),Q={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[S==null?void 0:S.rarity]||"#aaa";if(S){const de=Vt(S),ie=Ki(S),M=Ui(S.country_code),Y=Number(N==="GK"?S.note_g:N==="DEF"?S.note_d:N==="MIL"?S.note_m:S.note_a)||0,ne=f-m-x;b+=`<defs><clipPath id="dcp-${E}"><rect x="${j}" y="${(I.y-f/2+m).toFixed(1)}" width="${r}" height="${ne}"/></clipPath></defs>`,b+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="${B}"/>`,de&&(b+=`<image href="${de}" x="${j}" y="${(I.y-f/2+m).toFixed(1)}" width="${r}" height="${ne}" clip-path="url(#dcp-${E})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${j}" y="${P}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,b+=`<text x="${I.x.toFixed(1)}" y="${(I.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(S.surname_encoded||"").slice(0,9)}</text>`;const D=(I.y+f/2-x).toFixed(1);b+=`<rect x="${j}" y="${D}" width="${r}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,M&&(b+=`<image href="${M}" x="${(I.x-21).toFixed(1)}" y="${(I.y+f/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),b+=`<text x="${I.x.toFixed(1)}" y="${(I.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,ie&&(b+=`<image href="${ie}" x="${(I.x+r/2-14).toFixed(1)}" y="${(I.y+f/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),b+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="none" stroke="${Q}" stroke-width="2"/>`}else b+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,b+=`<text x="${I.x.toFixed(1)}" y="${I.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,b+=`<text x="${I.x.toFixed(1)}" y="${(I.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${N}</text>`;b+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${E}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-z} ${-z} ${p+z*2} ${i+z*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${b}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>Dn(E.dataset.pos,t,e,a))})}function Dn(e,t,n,a){var m,x,z;const{openModal:c,closeModal:d}=a,s=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(o=>o.id===l):null;(m=p==null?void 0:p.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,b])=>{var I;if(o===e||!b)return;const E=t.playerCards.find(S=>S.id===b);(I=E==null?void 0:E.player)!=null&&I.id&&i.add(E.player.id)}),t.subs.forEach(o=>{var E;const b=t.playerCards.find(I=>I.id===o);(E=b==null?void 0:b.player)!=null&&E.id&&i.add(b.player.id)});const r=new Set,f=t.playerCards.filter(o=>{const b=o.player;return!(b.job===s||b.job2===s)||i.has(b.id)||r.has(b.id)?!1:(r.add(b.id),!0)});f.sort((o,b)=>{const E=s==="GK"?o.player.note_g:s==="DEF"?o.player.note_d:s==="MIL"?o.player.note_m:o.player.note_a;return(s==="GK"?b.player.note_g:s==="DEF"?b.player.note_d:s==="MIL"?b.player.note_m:b.player.note_a)-E}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var N,B;const b=o.player,E=s==="GK"?b.note_g:s==="DEF"?b.note_d:s==="MIL"?b.note_m:b.note_a,I=Vt(b),S={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[b.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[s]}">
            ${I?`<img src="${I}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${rt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${b.firstname} ${b.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${b.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${b.country_code}">
              ${(N=b.clubs)!=null&&N.logo_url?`<img src="${b.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=b.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${b.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${rt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${S};flex-shrink:0">
            ${E}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",d),(z=document.getElementById("remove-player"))==null||z.addEventListener("click",()=>{delete t.slots[e],d(),ut(n,t,a)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,d(),ut(n,t,a)})})}function Gn(e,t,n){var p;const{openModal:a,closeModal:c}=n,d=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)}),e.subs.forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)});const s=new Set,l=e.playerCards.filter(i=>{var r,f,m;return d.has((r=i.player)==null?void 0:r.id)||s.has((f=i.player)==null?void 0:f.id)?!1:(s.add((m=i.player)==null?void 0:m.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var x;const r=i.player,f=Vt(r),m=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[r.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((x=r.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${rt[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),ut(t,e,n)})})}async function Nn(e,t){const{state:n,toast:a,navigate:c}=t,d=e.formationCards.find(p=>p.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:r})}),e.subs.forEach((p,i)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:p}=await $.from("deck_cards").insert(l);if(p){a(p.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function Ei(e){const t=Pt[e]||Pt["4-4-2"],n=["GK1"];for(let a=1;a<=t.DEF;a++)n.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)n.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)n.push(`ATT${a}`);return n}async function Vi(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(a=>a.booster_id===n.id)}))}function Pn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let n=Math.random()*t;for(const a of e)if(n-=Number(a.percentage),n<=0)return a;return e[e.length-1]}const Yi=()=>Object.keys(St),Rn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Qt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function On(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const Ai={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Hn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Un={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ti(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Kn(e){var r,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",a=Ai[n],c=Hn[t.rarity]||"#ccc",d=Ti(t,n),s=t.job2?Ti(t,t.job2):null,l=t.job2?Ai[t.job2]:null,p=On(t),i=Un[t.country_code]||t.country_code||"";return`
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
  </div>`}function Wi(e){var c;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const n=((c=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Vn(e,{state:t,navigate:n,toast:a}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await Vi()).map(Wi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}d.length||(d=Rn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=d.find(i=>i.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Yn(p,{state:t,toast:a,navigate:n,container:e})}catch(i){a(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const i=d.find(r=>r.id===l.dataset.boosterId);Zn(i)})})}async function Yn(e,{state:t,toast:n,navigate:a,container:c}){var r;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await to()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((d||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let p=[];if((r=e.rates)!=null&&r.length)p=await ei(t.profile,e);else{const f=e.type||"player";f==="player"?p=await Xi(t.profile,e.cardCount,e.cost):f==="game_changer"?p=await Ji(t.profile,e.cardCount,e.cost):f==="formation"?p=await Zi(t.profile,e.cost):p=await ei(t.profile,e)}p.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=s.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await $.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Qi(p,e,a)}function Wn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Xn(e,t){let n;switch(t){case"legende":n=e.filter(a=>a.rarity==="legende"),n.length||(n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),n.length||(n=e.filter(a=>tt(a)>=6));break;case"special":n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),n.length||(n=e.filter(a=>tt(a)>=6));break;case"normal_high":n=e.filter(a=>a.rarity==="normal"&&tt(a)>=6),n.length||(n=e.filter(a=>tt(a)>=6));break;default:n=e.filter(a=>a.rarity==="normal"&&tt(a)>=1&&tt(a)<=5),n.length||(n=e.filter(a=>a.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ei(e,t){if(t.cost>0){const{error:l}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await $.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),c=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),d=new Set,s=[];for(let l=0;l<(t.cardCount||5);l++){const p=Pn(t.rates);if(p){if(p.card_type==="player"){const i=I=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[I]||I,r=p.rarity?i(p.rarity):null;let f=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(f=f.eq("rarity",r));const{data:m}=await f;let x=m||[];if((p.note_min||p.note_max)&&(x=x.filter(I=>{const S=Math.max(Number(I.note_g)||0,Number(I.note_d)||0,Number(I.note_m)||0,Number(I.note_a)||0);return(!p.note_min||S>=p.note_min)&&(!p.note_max||S<=p.note_max)})),x.length||(p.note_min||p.note_max?(x=m||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):x=m||[]),!x.length)continue;let z=x.filter(I=>!d.has(I.id));z.length||(z=x);const o=z[Math.floor(Math.random()*z.length)];d.add(o.id);const b=a.has(o.id),{data:E}=await $.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();E&&(s.push({...E,player:o,isDuplicate:b}),$.rpc("record_transfer",{p_card_id:E.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:i}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=r[Math.floor(Math.random()*r.length)].name,{data:x}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();x&&s.push(x)}else if(p.card_type==="formation"){const i=Yi(),r=i[Math.floor(Math.random()*i.length)],f=c.has(r),{data:m}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();m!=null&&m[0]&&s.push({...m[0],isDuplicate:f})}}}return s}async function Xi(e,t,n){if(n>0){const{error:i}=await $.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:a}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(i=>i.job==="GK"),d=a.filter(i=>i.job!=="GK"),s=!e.first_booster_opened&&c.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&s?c:i===0?d:a,f=Wn(),m=Xn(r,f);m&&l.push(m)}s&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await $.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,r)=>{$.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...p[r],player:i}))}async function Ji(e,t,n){const{error:a}=await $.from("users").update({credits:e.credits-n}).eq("id",e.id);if(a)throw a;const{data:c}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=c!=null&&c.length?c:Object.keys(Qt).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:p}=await $.from("cards").insert(s).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(r=>{const f=c==null?void 0:c.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:f||null}})}async function Zi(e,t){const{error:n}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:a}=await $.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(r=>r.formation)),d=Yi(),s=d[Math.floor(Math.random()*d.length)],l=c.has(s),{data:p,error:i}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(p||[]).map(r=>({...r,isDuplicate:l}))}function Qi(e,t,n,a=null){var Y,ne;if(!e||e.length===0){const D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",D.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(D),(Y=D.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>D.remove());return}e=[...e].sort((D,Z)=>{const ae=D.player?tt(D.player):-1;return(Z.player?tt(Z.player):-1)-ae});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let d=!1;const s=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const i=D=>D.touches&&D.touches[0]?D.touches[0].clientX:D.clientX;function r(D){d||(p=!0,l.style.opacity="1",f(D))}function f(D){if(!p||d)return;const Z=s.getBoundingClientRect(),ae=i(D)-Z.left,pe=Math.max(0,Math.min(1,ae/Z.width));l.style.width=pe*Z.width+"px",pe>=.82&&x()}function m(){d||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{d||(l.style.transition="")},220))}function x(){var Z;if(d)return;d=!0,p=!1,l.style.width="100%",l.style.opacity="1",(Z=document.getElementById("cut-flash"))==null||Z.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const D=document.getElementById("cut-hint");D&&(D.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",E(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let z=0,o=!1;const b=new Set;function E(D){z=D,document.getElementById("reveal-phase").style.display="flex",I(),S(D,0),Q()}function I(){const D=document.getElementById("card-dots");D&&(D.innerHTML=e.map((Z,ae)=>`<div class="card-dot" data-i="${ae}" style="width:8px;height:8px;border-radius:50%;background:${ae===z?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),D.querySelectorAll(".card-dot").forEach(Z=>Z.addEventListener("click",()=>B(parseInt(Z.dataset.i)))))}function S(D,Z){var q;const ae=e[D],pe=document.getElementById("card-counter"),he=document.getElementById("card-track");pe&&(pe.textContent=`Carte ${D+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=D===e.length-1?"flex":"none");const ge=ae.card_type==="player"&&((q=ae.player)==null?void 0:q.rarity)==="legende",O=!b.has(D);b.add(D);let U=0;if(ae.card_type==="player"&&ae.player){const K=ae.player,oe=K.job||"ATT";U=Number(oe==="GK"?K.note_g:oe==="DEF"?K.note_d:oe==="MIL"?K.note_m:K.note_a)||0}const C=K=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ge?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Jn(ae)}</div>
          ${ae.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");Z!==0?(oe.style.transition="none",oe.style.transform=`translateX(${Z>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),K||ge?ie():M(),I()};O&&U>6&&ae.card_type==="player"&&ae.player?N(ae,()=>C(!0)):C(!1)}function N(D,Z){var U;o=!0;const ae=D.player,pe=`https://flagsapi.com/${ae.country_code}/flat/64.png`,he=(U=ae.clubs)==null?void 0:U.logo_url,xe=document.getElementById("walkout-overlay"),ge=document.getElementById("walkout-stage");if(!xe||!ge){o=!1,Z();return}xe.style.display="flex";const O=()=>{const C=ge.firstElementChild;C&&(C.classList.remove("wo-in"),C.classList.add("wo-out"))};ge.innerHTML=`<img class="wo-in" src="${pe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(O,2e3),setTimeout(()=>{var C;ge.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((C=ae.clubs)==null?void 0:C.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(O,4450),setTimeout(()=>{xe.style.display="none",ge.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Z()},4900)}function B(D){if(o||D<0||D>=e.length||D===z)return;const Z=D>z?1:-1;z=D,S(D,Z)}function j(){B(z+1)}function P(){B(z-1)}function Q(){const D=document.getElementById("card-viewport");if(!D||D._swipeBound)return;D._swipeBound=!0;let Z=0,ae=0,pe=0,he=!1;const xe=q=>q.touches?q.touches[0].clientX:q.clientX,ge=q=>q.touches?q.touches[0].clientY:q.clientY,O=q=>{he=!0,Z=xe(q),ae=ge(q),pe=0},U=q=>{if(!he)return;pe=xe(q)-Z;const K=ge(q)-ae;if(Math.abs(pe)<Math.abs(K))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${pe*.6}px) rotate(${pe*.02}deg)`)},C=()=>{if(!he)return;he=!1;const q=document.getElementById("current-card-wrap"),K=55;pe<=-K&&z<e.length-1?j():pe>=K&&z>0?P():q&&(q.style.transition="transform .2s ease",q.style.transform="translateX(0)")};D.addEventListener("pointerdown",O),D.addEventListener("pointermove",U),D.addEventListener("pointerup",C),D.addEventListener("pointercancel",C),D.addEventListener("touchstart",O,{passive:!0}),D.addEventListener("touchmove",U,{passive:!0}),D.addEventListener("touchend",C),D.addEventListener("click",q=>{if(Math.abs(pe)>8)return;const K=D.getBoundingClientRect();q.clientX-K.left>K.width/2?j():P()})}let de=null;function ie(){const D=document.getElementById("fireworks-canvas");if(!D)return;D.width=window.innerWidth,D.height=window.innerHeight;const Z=D.getContext("2d"),ae=[];function pe(){const xe=Math.random()*D.width,ge=Math.random()*D.height*.6,O=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],U=O[Math.floor(Math.random()*O.length)];for(let C=0;C<60;C++){const q=Math.PI*2/60*C,K=2+Math.random()*5;ae.push({x:xe,y:ge,vx:Math.cos(q)*K,vy:Math.sin(q)*K,alpha:1,color:U,size:2+Math.random()*3})}}pe(),de=setInterval(pe,600);function he(){if(document.getElementById("fireworks-canvas")){Z.clearRect(0,0,D.width,D.height);for(let xe=ae.length-1;xe>=0;xe--){const ge=ae[xe];if(ge.x+=ge.vx,ge.y+=ge.vy+.08,ge.vy*=.98,ge.alpha-=.018,ge.alpha<=0){ae.splice(xe,1);continue}Z.globalAlpha=ge.alpha,Z.fillStyle=ge.color,Z.beginPath(),Z.arc(ge.x,ge.y,ge.size,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,(de!==null||ae.length>0)&&requestAnimationFrame(he)}}he()}function M(){de!==null&&(clearInterval(de),de=null);const D=document.getElementById("fireworks-canvas");D&&D.getContext("2d").clearRect(0,0,D.width,D.height)}if(a){const D=document.getElementById("reveal-btns");D&&(D.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ne=document.getElementById("reveal-next"))==null||ne.addEventListener("click",()=>{M(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{M(),c.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{M(),c.remove(),n("boosters")})}function Jn(e){var t,n;if(e.card_type==="player"&&e.player)return Kn(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[a==null?void 0:a.color]||d.purple,p=s[a==null?void 0:a.color]||s.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=Qt[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,m=((n=Qt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Zn(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>a.remove());return}Qn()}function Qn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const eo="simulation",en="VOTRE_ZONE_ID";function to(){switch(eo){case"propellerads":return io();case"adsense":return no();default:return di()}}function di(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{n--;const c=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");c&&(c.textContent=n),d&&(d.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(a),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function io(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(di());window.propeller.push({zone_id:en,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function no(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(di());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:en,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function oo(e,{state:t,navigate:n,toast:a,refreshProfile:c}){var m,x;const{data:d}=await $.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await $.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Vi()).find(b=>(b.name||"").toLowerCase().includes("new player"));o&&(l=Wi(o))}catch(z){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',z)}const p=s.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await $.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function f(){var I;if(i>=p||!s.length){await $.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const z=s[0],{data:o}=await $.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let b=[];try{if(z.type==="formation")b=await Zi(t.profile,0);else if(z.type==="game_changer")b=await Ji(t.profile,z.count||3,0);else if(l&&((I=l.rates)!=null&&I.length)){const S={...l,cost:0,cardCount:z.count||l.cardCount||5};b=await ei(t.profile,S),z.guaranteeGK&&!t.profile.first_booster_opened&&(b.some(B=>B.player&&B.player.job==="GK")||await ro(t.profile,b),await $.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else b=await Xi(t.profile,z.count||5,0)}catch(S){a(S.message||"Erreur ouverture booster","error");return}s.shift(),i++,await r();const E=z.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:z.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${p})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Qi(b,E,n,()=>{f()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>f())}async function ro(e,t){try{const{data:n}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const a=n[Math.floor(Math.random()*n.length)],c=t.findIndex(s=>s.player);if(c===-1)return;const d=t[c];await $.from("cards").update({player_id:a.id}).eq("id",d.id),t[c]={...d,player_id:a.id,player:a}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}const ft={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},gt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e,t,n,a,c){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",c)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function ti(e,t){var a,c;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((a=n.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=n.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function li(){const e=Math.random()*100;return e<10?3:e<30?2:1}function mt(e,t){const n=ft[t]||ft["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===s).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:s})),p=ot(l.length);l.forEach((i,r)=>{i._col=p[r]}),a[s]=l}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[s];i++){let r=d.findIndex(f=>f.job===s);if(r===-1&&(r=d.findIndex(f=>f.job2===s)),r===-1&&(r=0),d[r]){const f={...d[r],_line:s};l.push(f),d.splice(r,1)}}const p=ot(l.length);l.forEach((i,r)=>{i._col=p[r]}),a[s]=l}return a}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,n){const c=new Set,d=t.filter(r=>{const f=r.gc_type||r.id;return c.has(f)?!1:(c.add(f),!0)});let s=[];function l(r,f){const m=r._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},z={purple:"#9b59b6",light_blue:"#00bcd4"},o=x[m==null?void 0:m.color]||x.purple,b=z[m==null?void 0:m.color]||z.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":b};background:${o};
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
    </div>`}const p=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(r)};function i(){var f,m,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${d.map(z=>{const o=s.find(b=>b.gc_type===z.gc_type);return l(z,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(z=>{z.addEventListener("click",()=>{const o=z.dataset.id,b=d.find(I=>I.id===o);if(!b)return;const E=s.findIndex(I=>I.gc_type===b.gc_type);E>-1?s.splice(E,1):s.length<3&&s.push(b),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{r&&p(s)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>p([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{s.length&&(s=[],i())})}i()}function ao(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function so(e,t,n){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){at(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=d.map(r=>r.id),{data:l}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let p=0;function i(){var I,S,N,B,j;const r=d[p],f=(l||[]).filter(P=>P.deck_id===r.id),m=f.filter(P=>{var Q;return P.is_starter&&((Q=P.card)==null?void 0:Q.player)}).map(P=>ti(P.card,P.position)),x=f.find(P=>{var Q;return((Q=P.card)==null?void 0:Q.card_type)==="formation"}),z=r.formation||((I=x==null?void 0:x.card)==null?void 0:I.formation)||"4-4-2",o=m.length>=11?mt(m,z):null,b=m.length>=11;Xe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${ao(t)}</div>
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
        ${d.map((P,Q)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Q===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const Q=e.querySelector(".deck-preview-wrap svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{p>0&&(p--,i())}),(N=document.getElementById("next-deck"))==null||N.addEventListener("click",()=>{p<d.length-1&&(p++,i())}),(B=document.getElementById("validate-deck"))==null||B.addEventListener("click",()=>{if(!b)return;const P=t.state.params||{};t.navigate("match",{...P,matchMode:P.matchMode||n,deckId:r.id})}),(j=document.getElementById("cancel-deck-select"))==null||j.addEventListener("click",()=>{He(e),c("home")});const E=document.getElementById("deck-swipe-zone");if(E){let P=0,Q=0;E.addEventListener("touchstart",de=>{P=de.touches[0].clientX,Q=de.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",de=>{const ie=de.changedTouches[0].clientX-P,M=de.changedTouches[0].clientY-Q;Math.abs(ie)<40||Math.abs(ie)<Math.abs(M)||(ie<0&&p<d.length-1?(p++,i()):ie>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function tn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),c=tn(e),d=e._line||e.job||"MIL",s=gt[d]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(ve(e,d))||0)+(e.boost||0),i=nn(e==null?void 0:e.country_code),r=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),x=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Rt(e==null?void 0:e.country_code)?`<img src="${Rt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(c+=Ve(d,40,52),s<a.length-1){const l=Qe(d,a[s+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),c+="</div>",c}function Rt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function nn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,a,c=310,d=310,s=[]){var S;const l=St[t]||{},p=Mi(t)||oi[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const N of r)(e[N]||[]).forEach((j,P)=>{i[`${N}${P+1}`]=j});function f(N){const B=l[N];return B?{x:B.x*c,y:B.y*d}:null}let m="";for(const[N,B]of p){const j=f(N),P=f(B);if(!j||!P)continue;const Q=i[N],de=i[B],ie=Qe(Q,de);ie==="#00ff88"||ie==="#FFD700"?(m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${ie}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${ie}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${ie}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,z=64,o=13,b=16,E={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[N,B]of Object.entries(i)){const j=f(N);if(!j||!B)continue;const P=N.replace(/[0-9]/g,""),Q=gt[P]||"#555",de=s.includes(B.cardId),ie=n==="attack"&&(["MIL","ATT"].includes(P)||de)&&!B.used||n==="defense"&&["GK","DEF","MIL"].includes(P)&&!B.used,M=a.includes(B.cardId);let Y;n==="attack"?Y=de?Math.max(1,Number(B.note_a)||0):P==="MIL"?Number(B.note_m)||0:Number(B.note_a)||0:n==="defense"?Y=P==="GK"?Number(B.note_g)||0:P==="MIL"?Number(B.note_m)||0:Number(B.note_d)||0:Y=Number(P==="GK"?B.note_g:P==="DEF"?B.note_d:P==="MIL"?B.note_m:B.note_a)||0,Y=Y+(B.boost||0);const ne=(j.x-x/2).toFixed(1),D=(j.y-z/2).toFixed(1),Z=E[B==null?void 0:B.rarity]||E.normal;if(B.used){const U=typeof import.meta<"u"&&"/manager-wars/"||"/",q=`${typeof window<"u"&&((S=window.location)==null?void 0:S.origin)||""}${U}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${ne}" y="${D}" width="${x}" height="${z}" rx="5" fill="#161616"/>`,m+=`<image href="${q}" xlink:href="${q}" x="${ne}" y="${D}" width="${x}" height="${z}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${ne}" y="${D}" width="${x}" height="${z}" rx="5" fill="none" stroke="${Z}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${ne}" y="${D}" width="${x}" height="${z}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${B.cardId}" data-role="${P}" style="cursor:pointer"/>`;continue}const ae=M?.45:1,pe=M?"#FFD700":Z,he=M?3:(B==null?void 0:B.rarity)==="legende"||(B==null?void 0:B.rarity)==="légende"||(B==null?void 0:B.rarity)==="pepite"||(B==null?void 0:B.rarity)==="pépite"?2.5:2,xe=z-o-b;m+=`<defs><clipPath id="cp-${N}"><rect x="${ne}" y="${(j.y-z/2+o).toFixed(1)}" width="${x}" height="${xe}"/></clipPath></defs>`,m+=`<rect x="${ne}" y="${D}" width="${x}" height="${z}" rx="5" fill="${Q}" opacity="${ae}"/>`;const ge=ze(B);ge&&(m+=`<image href="${ge}" xlink:href="${ge}" x="${ne}" y="${(j.y-z/2+o).toFixed(1)}" width="${x}" height="${xe}" clip-path="url(#cp-${N})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${ne}" y="${D}" width="${x}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y-z/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(B.name||"").slice(0,9)}</text>`;const O=(j.y+z/2-b).toFixed(1);m+=`<rect x="${ne}" y="${O}" width="${x}" height="${b}" fill="rgba(255,255,255,0.92)"/>`;{const U=Rt(B.country_code);U?m+=`<image href="${U}" xlink:href="${U}" x="${(j.x-20).toFixed(1)}" y="${(j.y+z/2-b+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(j.x-13).toFixed(1)}" y="${(j.y+z/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${nn(B.country_code)}</text>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y+z/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const C=tn(B);C?m+=`<image href="${C}" xlink:href="${C}" x="${(j.x+x/2-14).toFixed(1)}" y="${(j.y+z/2-b+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:B.clubName&&(m+=`<text x="${(j.x+14).toFixed(1)}" y="${(j.y+z/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(B.clubName||"").slice(0,3).toUpperCase()}</text>`),B.boost&&(m+=`<rect x="${(j.x+x/2-12).toFixed(1)}" y="${(j.y-z/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(j.x+x/2-5).toFixed(1)}" y="${(j.y-z/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${B.boost}</text>`)}m+=`<rect x="${ne}" y="${D}" width="${x}" height="${z}" rx="5" fill="${M?"rgba(255,255,255,0.12)":"none"}" stroke="${pe}" stroke-width="${he}" opacity="${ae}"/>`,ie&&(m+=`<rect x="${ne}" y="${D}" width="${x}" height="${z}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${M?"selected":""}" data-card-id="${B.cardId}" data-role="${P}" style="cursor:pointer"/>`)}const I=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-I} ${-I} ${c+I*2} ${d+I*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function pi(e,t,n,a){var B;const{state:c,navigate:d,toast:s}=t;Xe(e);const l=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return so(e,t,n);const p=l.deckId;let i,r,f,m;try{const j=await Promise.all([$.from("decks").select("formation,name").eq("id",p).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=j[0].data,f=j[0].error,r=j[1].data,m=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),at(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),at(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const x=(r||[]).filter(j=>{var P;return j.is_starter&&((P=j.card)==null?void 0:P.player)}).map(j=>ti(j.card,j.position)),z=(r||[]).filter(j=>{var P;return!j.is_starter&&((P=j.card)==null?void 0:P.player)}).map(j=>ti(j.card,j.position));if(x.length<11){at(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>d("decks"));return}const o=(r||[]).find(j=>{var P;return((P=j.card)==null?void 0:P.card_type)==="formation"}),b=(i==null?void 0:i.formation)||((B=o==null?void 0:o.card)==null?void 0:B.formation)||"4-4-2",{data:E,error:I}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:S}=await $.from("gc_definitions").select("*").eq("is_active",!0),N=(E||[]).map(j=>({...j,_gcDef:(S==null?void 0:S.find(P=>P.name===j.gc_type||P.id===j.gc_definition_id))||null}));a({deckId:p,formation:b,starters:x,subsRaw:z,gcCardsEnriched:N,gcDefs:S||[]})}async function lo(e,t){const{state:n}=t,c=(n.params||{}).matchMode||"vs_ai_easy",d=c.replace("vs_ai_",""),s=c;await pi(e,t,c,async({deckId:l,formation:p,starters:i,subsRaw:r,gcCardsEnriched:f,gcDefs:m})=>{try{const x=mt(i,p),z=await co(p,d),o=async b=>{try{const{data:E,error:I}=await $.from("matches").insert({home_id:n.profile.id,away_id:null,mode:s,home_deck_id:l,status:"in_progress"}).select().single();if(I){console.error("[MatchIA] Erreur création match:",I),at(e,"⚠️","Impossible de créer le match ("+I.message+").","Retour",()=>t.navigate("home"));return}const S={gcDefs:m||[],matchId:E==null?void 0:E.id,mode:s,difficulty:d,formation:p,homeTeam:x,aiTeam:z,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:b,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};uo(e,S,t)}catch(E){console.error("[MatchIA] Exception launchMatch:",E),at(e,"⚠️","Erreur au lancement du match : "+E.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}ci(e,f,o)}catch(x){console.error("[MatchIA] Exception setup:",x),at(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function co(e,t){var s,l;const{data:n}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return po(e);const a=ft[e]||ft["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},d=[...n];for(const p of["GK","DEF","MIL","ATT"]){const i=d.filter(z=>z.job===p),r=d.filter(z=>z.job!==p),f=[...i,...r],m=[];for(let z=0;z<a[p];z++){const o=f[z]||d[z];o&&m.push({cardId:"ai-"+o.id+"-"+z,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((s=o.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const x=ot(m.length);m.forEach((z,o)=>{z._col=x[o]}),c[p]=m}return c}function po(e){const t=ft[e]||ft["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let p=0;p<t[d];p++){const i=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?i:2,note_d:d==="DEF"?i:2,note_m:d==="MIL"?i:2,note_a:d==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:d}),c++}const l=ot(s.length);s.forEach((p,i)=>{p._col=l[i]}),n[d]=s}return n}function uo(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>fo(e,t,n),5e3)}function fo(e,t,n){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function d(o){return o.reduce((b,E)=>b+ve(E,"MIL"),0)}function s(o){let b=0;for(let E=0;E<o.length-1;E++){const I=Qe(o[E],o[E+1]);I==="#00ff88"?b+=2:I==="#FFD700"&&(b+=1)}return b}const l=d(a)+s(a),p=d(c)+s(c),i=l>=p;function r(o,b,E,I){return`<div id="duel-row-${I}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${b}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((S,N)=>{const B=N<o.length-1?Qe(S,o[N+1]):null,j=!B||B==="#ff3333"||B==="#cc2222",P=B==="#00ff88"?"+2":B==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${I}" data-idx="${N}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...S,note:ve(S,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${N<o.length-1?`<div class="duel-link duel-link-${I}" data-idx="${N}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${j?"rgba(255,255,255,0.12)":B};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${j?"none":`0 0 8px ${B}`}">
            ${P?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${B}">${P}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${I}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
  </div>`;const f=()=>{const o=(b,E)=>e.querySelectorAll(b).forEach((I,S)=>{setTimeout(()=>{I.style.opacity="1",I.style.transform="translateY(0) scale(1)"},E+S*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((b,E)=>{setTimeout(()=>{b.style.opacity="1"},E*70)}),900),setTimeout(()=>{const b=e.querySelector("#vs-label");b&&(b.style.opacity="1",b.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(E=>E.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",p,800)},1500)};function m(o,b,E){const I=document.getElementById(o);if(!I)return;const S=performance.now(),N=B=>{const j=Math.min(1,(B-S)/E);I.textContent=Math.round(b*(1-Math.pow(1-j,3))),j<1?requestAnimationFrame(N):I.textContent=b};requestAnimationFrame(N)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const x=i?li():null;i&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(o=>({name:o.name,note:ve(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:c.map(o=>({name:o.name,note:ve(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const z=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Me(e,t,n),t.attacker==="ai"&&setTimeout(()=>ii(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),b=document.getElementById("score-ai"),E=document.getElementById(i?"duel-row-home":"duel-row-ai"),I=document.getElementById(i?"duel-row-ai":"duel-row-home"),S=i?o:b,N=i?b:o;S&&(S.style.fontSize="80px",S.style.color=i?"#FFD700":"#ff6b6b",S.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),N&&(N.style.opacity="0.25"),setTimeout(()=>{E&&(E.style.transformOrigin="center",E.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",E.style.zIndex="5"),setTimeout(()=>{var j;const B=document.getElementById("duel-shock");if(B){const P=(j=I||E)==null?void 0:j.getBoundingClientRect(),Q=e.querySelector(".match-screen").getBoundingClientRect();P&&(B.style.top=P.top-Q.top+P.height/2+"px"),B.style.animation="shockwave .5s ease-out forwards"}I&&(I.style.transformOrigin="center",I.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var j;const B=document.getElementById("duel-finale");B&&(B.innerHTML=`
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
          </button>`,B.style.transition="opacity .45s ease",B.style.opacity="1",B.style.pointerEvents="auto",(j=document.getElementById("start-match-btn"))==null||j.addEventListener("click",z))},600)},700)},2800)}function go(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Me(e,t,n){var S,N,B,j,P,Q,de,ie;const a=t.selected.map(M=>M.cardId),c=t.usedSubIds||[],d=t.homeSubs.filter(M=>!c.includes(M.cardId)),l=Object.values(t.homeTeam).flat().filter(M=>M.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(M=>(t.aiTeam[M]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(M=>!M.used),r=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(M=>!M.used).map(M=>M.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",x=t.phase==="defense",z=t.phase==="finished",o=t.gcCards.filter(M=>!t.usedGc.includes(M.id)),b=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
          </div>`}const M=t.log[t.log.length-1];return M?'<div style="padding:2px 4px">'+go(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,Y=(O,U,C)=>{var De,Re;const q=(t.gcDefs||[]).find(k=>k.name===O.gc_type),K={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[q==null?void 0:q.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[q==null?void 0:q.color]||"#b06ce0",te=(q==null?void 0:q.name)||O.gc_type,we=(q==null?void 0:q.effect)||((De=Ne[O.gc_type])==null?void 0:De.desc)||"",_e=q!=null&&q.image_url?`/manager-wars/icons/${q.image_url}`:null,ke=((Re=Ne[O.gc_type])==null?void 0:Re.icon)||"⚡",Se=Math.round(C*.22),Ee=Math.round(C*.22),Te=C-Se-Ee,$e=te.length>12?7:9;return`<div class="gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
          style="box-sizing:border-box;width:${U}px;height:${C}px;border-radius:10px;border:2px solid ${oe};background:${K};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Se}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
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
          </div>`},D=(O,U)=>U?ne(130,175):Y(O,130,175),Z=(O,U)=>U?ne(68,95):Y(O,68,95),ae=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pe=z?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=m||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
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
            ${o.map(O=>D(O,!1)).join("")}
            ${b?D(null,!0):""}
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
            ${b?Z(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(M=>{var Y,ne,D;if(M.type==="duel"){const Z=M.isGoal,ae=M.homeScored?"#FFD700":Z?"#ff6b6b":"rgba(255,255,255,0.3)",pe=M.homeScored?"⚽ BUT !":Z?"⚽ BUT IA !":(Y=M.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Z?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
                <div style="font-size:9px;color:${ae};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${pe}</div>
                ${(ne=M.homePlayers)!=null&&ne.length?`<div style="margin-bottom:3px">${it(M.homePlayers,"rgba(255,255,255,0.7)",M.homeTotal)}</div>`:""}
                ${(D=M.aiPlayers)!=null&&D.length?`<div style="opacity:0.7">${it(M.aiPlayers,"#ff6b6b",M.aiTotal)}</div>`:""}
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
  </div>`;function E(){const M=e.querySelector(".match-screen");if(!M)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=Y+"px",M.style.minHeight=Y+"px",M.style.maxHeight=Y+"px",M.style.overflow="hidden";const ne=e.querySelector("#mobile-action-bar"),D=e.querySelector("#mobile-play-area");ne&&D&&(D.style.paddingBottom=ne.offsetHeight+"px")}if(E(),setTimeout(E,120),setTimeout(E,400),setTimeout(E,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",E),window.visualViewport.addEventListener("scroll",E)),window.addEventListener("resize",E)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const M=e.querySelector(".terrain-wrapper svg");M&&(M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let M=!1,Y=30;const ne=()=>document.getElementById("match-timer"),D=()=>{const Z=ne();if(!Z)return;const ae=String(Math.floor(Y/60)).padStart(2,"0"),pe=String(Y%60).padStart(2,"0");Z.textContent=` ${ae}:${pe}`,Z.style.color=M?"#ff2222":"#ff9500",Z.style.fontWeight="900"};D(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!M)M=!0,Y=15,D();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Z.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Z),setTimeout(()=>{Z.remove(),Tt(e,t,n)},2500)}else D()},1e3)}(S=document.getElementById("match-quit"))==null||S.addEventListener("click",()=>{He(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Tt(e,t,n))}),(N=document.getElementById("view-ai"))==null||N.addEventListener("click",()=>ko(t,n)),(B=document.getElementById("toggle-history"))==null||B.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(P=document.getElementById("btn-action"))==null||P.addEventListener("click",()=>{t.selected.length!==0&&(m?xo(e,t,n):x&&yo(e,t,n))}),(Q=document.getElementById("btn-results"))==null||Q.addEventListener("click",()=>Tt(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>mo(M,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Xt(e,t,n,null,M.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(M=>{M.addEventListener("click",()=>vo(M.dataset.gcId,M.dataset.gcType,e,t,n))}),(de=document.getElementById("boost-card"))==null||de.addEventListener("click",()=>$o(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Xt(e,t,n,M.dataset.subId))}),(ie=document.getElementById("sub-btn-main"))==null||ie.addEventListener("click",()=>Xt(e,t,n))}function mo(e,t,n,a){const c=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(l=>l.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[d]||[]).find(p=>p.cardId===c);l&&t.selected.push({...l,_role:d,_line:d})}Me(n,t,a)}function ui(e,t,n){e.matchId&&$.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function xo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(l=>!l.used)),c=t.selected.map(s=>{const l=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,p=a&&["GK","DEF"].includes(s._role);return{...l,_line:s._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),d=Ht(c,t.modifiers.home);t.pendingAttack={...d,players:[...c],side:"home"},t.selected.forEach(s=>{const l=(t.homeTeam[s._role]||[]).find(p=>p.cardId===s.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Me(e,t,n),setTimeout(()=>ho(e,t,n),1200)}function yo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),c=Ut(a,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!0)});const d=Kt(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ze(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:ze(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Me(e,t,n),Ot(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,n,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,pt(e,t,n,"home-attack")}function ii(e,t,n){ui(t,n,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Di(a,"attack",t.difficulty);if(!c.length){Gt(e,t,n);return}const d=Ht(c,t.modifiers.ai);t.pendingAttack={...d,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ze(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Me(e,t,n),Ot(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,n,"home-attack")});return}t.phase="defense",Me(e,t,n)}function ho(e,t,n){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Di(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(x=>({name:x.name,note:ve(x,x._line||x.job),portrait:ze(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Ot(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,n,"ai-attack")});return}const s=c.length>0?Ut(c,t.modifiers.ai).total:0;c.forEach(f=>{f.used=!0});const l=Kt(t.pendingAttack.total,s,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:c.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Ot(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,n,"ai-attack")});return}else p.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,pt(e,t,n,"ai-attack")}function pt(e,t,n,a){if(t.round++,on(t)){Tt(e,t,n);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Gt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Gt(e,t,n);return}setTimeout(()=>ii(e,t,n),100);return}t.phase="attack",Me(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Gt(e,t,n);return}t.phase="ai-attack",Me(e,t,n),setTimeout(()=>ii(e,t,n),800)}}function on(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),n=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!n}function Gt(e,t,n){on(t)?Tt(e,t,n):(t.phase="attack",Me(e,t,n))}function bo(e,t,n){const a=document.createElement("div");a.style.cssText=`
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
  `,document.body.appendChild(a);let r=!1;const f=()=>{r||(r=!0,a.remove(),n())};a.addEventListener("click",f),setTimeout(f,2e3)}function $t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Xt(e,t,n,a=null,c=null){var x,z;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([o,b])=>(b||[]).filter(E=>E.used).map(E=>({...E,_line:E._line||o}))),s=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!d.length){$t("Aucun joueur utilisé à remplacer");return}if(!s.length){$t("Aucun remplaçant disponible");return}let l=Math.max(0,d.findIndex(o=>o.cardId===c));const p=((x=d[l])==null?void 0:x._line)||((z=d[l])==null?void 0:z.job);let i=a?Math.max(0,s.findIndex(o=>o.cardId===a)):Math.max(0,s.findIndex(o=>o.job===p)),r=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var B,j,P,Q,de,ie;const o=d[l],b=s[i],E=Math.min(130,Math.round((window.innerWidth-90)/2)),I=Math.round(E*1.35),S=M=>`background:rgba(255,255,255,0.12);border:none;color:${M?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${M?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${S(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${b?Ve({...b,used:!1,boost:0},E,I):"<div>—</div>"}</div>
        <button id="in-down" style="${S(i>=s.length-1)}" ${i>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${S(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},E,I):"<div>—</div>"}</div>
        <button id="out-down" style="${S(l>=d.length-1)}" ${l>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(B=f.querySelector("#sub-close"))==null||B.addEventListener("click",()=>f.remove()),(j=f.querySelector("#out-up"))==null||j.addEventListener("click",()=>{l>0&&(l--,m())}),(P=f.querySelector("#out-down"))==null||P.addEventListener("click",()=>{l<d.length-1&&(l++,m())}),(Q=f.querySelector("#in-up"))==null||Q.addEventListener("click",()=>{i>0&&(i--,m())}),(de=f.querySelector("#in-down"))==null||de.addEventListener("click",()=>{i<s.length-1&&(i++,m())});const N=(M,Y,ne,D)=>{const Z=f.querySelector("#"+M);if(!Z)return;let ae=0;Z.addEventListener("touchstart",pe=>{ae=pe.touches[0].clientY},{passive:!0}),Z.addEventListener("touchend",pe=>{const he=pe.changedTouches[0].clientY-ae;if(Math.abs(he)<30)return;const xe=Y();he<0&&xe<D-1?(ne(xe+1),m()):he>0&&xe>0&&(ne(xe-1),m())},{passive:!0})};N("in-panel",()=>i,M=>i=M,s.length),N("out-panel",()=>l,M=>l=M,d.length),(ie=f.querySelector("#sub-confirm"))==null||ie.addEventListener("click",M=>{if(M.preventDefault(),M.stopPropagation(),r)return;r=!0;const Y=d[l],ne=s[i];if(!Y||!ne)return;let D=null,Z=-1;for(const[pe,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ge=>ge.cardId===Y.cardId);if(xe!==-1){D=pe,Z=xe;break}}if(Z===-1||!D){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const ae={...ne,_line:D,_col:Y._col||0,used:!1,boost:0};t.homeTeam[D].splice(Z,1,ae),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ne.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:ve(Y,D),portrait:ze(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:ne.name,firstname:ne.firstname,note:ve(ne,D),portrait:ze(ne),job:ne.job,country_code:ne.country_code,rarity:ne.rarity,clubName:ne.clubName,clubLogo:ne.clubLogo},text:`🔄 ${ne.firstname} ${ne.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),bo(Y,ne,()=>Me(e,t,n))})}document.body.appendChild(f),m()}function vo(e,t,n,a,c){var z,o;const d=(a.gcDefs||[]).find(b=>b.name===t),s=Ne[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",i=(d==null?void 0:d.name)||t,r=(d==null?void 0:d.effect)||s.desc,f=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,m=s.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
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
    </div>`,document.body.appendChild(x),(z=x.querySelector("#gc-back"))==null||z.addEventListener("click",()=>x.remove()),(o=x.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{x.remove(),_o(e,t,n,a,c)})}function qt(e,t,n,a,c,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var i,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",z=ve(f,m)+(f.boost||0),o=l.find(b=>b.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=s.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,x=e.find(o=>o.cardId===m);if(!x)return;const z=l.findIndex(o=>o.cardId===m);z>-1?l.splice(z,1):l.length<t&&l.push(x),p()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),d(l)})}p(),document.body.appendChild(s)}const wo={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},a,c,d)=>{const s=Object.entries(a.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:l})));return s.length?(qt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,l=>{l.forEach(p=>{const i=(a.homeTeam[p._line]||[]).find(r=>r.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Me(c,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Me(c,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:a="ai"},c,d,s)=>{const l=a==="home"?c.homeTeam:c.aiTeam,p=a==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!n.length||n.includes(r)).flatMap(([r,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:r})));return i.length?(qt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,d,c,r=>{r.forEach(f=>{const x=((a==="home"?c.homeTeam:c.aiTeam)[f._line]||[]).find(z=>z.cardId===f.cardId);x&&(x.boost=(x.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${x.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Me(d,c,s)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Me(d,c,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},a,c,d)=>{const s=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",p=Object.entries(s).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(f=>!f.used).map(f=>({...f,_line:i})));return p.length?(qt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,c,a,i=>{i.forEach(r=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(x=>x.cardId===r.cardId);m&&(m.used=!0,a.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Me(c,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Me(c,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,a,c)=>{const d=Object.entries(n.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,l])=>l.filter(p=>p.used).map(p=>({...p,_line:s})));return d.length?(qt(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,n,s=>{s.forEach(l=>{const p=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!1,n.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Me(a,n,c)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Me(a,n,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function _o(e,t,n,a,c){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(p=>p.name===t)||d.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const p=wo[s.effect_type];p?p(s.effect_params||{},a,n,c)||(l=!0):(c.toast(`Effet "${s.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(f=>f.used).map(f=>({...f,_line:i})));p.length?(p[0].used=!1,a.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((r,f)=>ve(f,"ATT")-ve(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}$.from("cards").delete().eq("id",e).then(()=>{}),l&&Me(n,a,c)}function $o(e,t,n){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${gt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ve(c,c._line||c.job)}</div>
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let l=!1;const p=()=>{l||(l=!0,d.remove(),setTimeout(()=>c(),50))};d.addEventListener("click",p),setTimeout(p,3500)}async function Tt(e,t,n){var r,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=n,c=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=c?"victoire":d?"nul":"defaite",l=In(t.mode,s);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};c?p.wins=(a.profile.wins||0)+1:d?p.draws=(a.profile.draws||0)+1:p.losses=(a.profile.losses||0)+1,await $.from("users").update(p).eq("id",a.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),He(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),He(e),n.navigate("match",{matchMode:t.mode})})}function ko(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function rn(e,t){var n,a;try{const c=(a=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:a.id;try{($.getChannels?$.getChannels():[]).forEach(s=>{const l=s.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&$.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}c&&await $.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await pi(e,t,"random",({deckId:c,formation:d,starters:s,subsRaw:l,gcCardsEnriched:p,gcDefs:i})=>{const r=f=>Eo(e,t,c,d,s,l,f,i||[]);if(!p.length){r([]);return}ci(e,p,r)})}async function Eo(e,t,n,a,c,d,s=[],l=[]){var I;const{state:p,navigate:i,toast:r}=t;let f=!1,m=null;Xe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const x=async(S=!0)=>{f=!0,m&&($.removeChannel(m),m=null),S&&await $.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(I=document.getElementById("mm-cancel"))==null||I.addEventListener("click",async()=>{try{await x(!0)}catch{}He(e),i("home")});const z=async(S,N,B)=>{if(f)return;f=!0,m&&($.removeChannel(m),m=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(P=>setTimeout(P,600)),e.isConnected&&an(e,t,S,B,s,l)},{data:o,error:b}=await $.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:n});if(b||!(o!=null&&o.success)){r("Erreur de matchmaking","error"),He(e),i("home");return}if(o.matched){z(o.match_id,o.opponent_id,!1);return}const E=document.getElementById("mm-status");E&&(E.textContent="En attente d'un autre joueur..."),m=$.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},S=>{const N=S.new;N.status==="matched"&&N.match_id&&z(N.match_id,N.matched_with,!0)}).subscribe()}async function Ao(e,t,n){const{state:a,navigate:c,toast:d}=t;try{($.getChannels?$.getChannels():[]).forEach(i=>{const r=i.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&$.removeChannel(i)})}catch{}const{data:s}=await $.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!s){d("Match introuvable","error"),c("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),c("home");return}const l=s.home_id===a.profile.id;an(e,t,n,l,[],[])}async function an(e,t,n,a,c=[],d=[]){const{state:s,navigate:l,toast:p}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(c||[]).map(k=>k.id),m=(c||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await $.from("matches").select("*").eq("id",n).single();if(!x){p("Match introuvable","error"),l("home");return}async function z(){const[{data:k},{data:u},{data:g},{data:h}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),y=A=>({cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((k==null?void 0:k.starters)||[]).map(A=>y(A)),w=((u==null?void 0:u.starters)||[]).map(A=>y(A)),_=(k==null?void 0:k.formation)||"4-4-2",L=(u==null?void 0:u.formation)||"4-4-2";return{p1Team:mt(v,_),p2Team:mt(w,L),p1Subs:((k==null?void 0:k.subs)||[]).map(A=>y(A)),p2Subs:((u==null?void 0:u.subs)||[]).map(A=>y(A)),p1Formation:_,p2Formation:L,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!o)if(a){o=await z();const{data:k}=await $.from("matches").select("game_state").eq("id",n).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await $.from("matches").update({game_state:o,turn_user_id:x.home_id}).eq("id",n):o=k.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let k=0;k<30&&!o;k++){await new Promise(g=>setTimeout(g,400));const{data:u}=await $.from("matches").select("game_state").eq("id",n).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(o=u.game_state)}if(!o){p("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await $.from("matches").update({game_state:o}).eq("id",n)}let b=!1,E=null,I=!1;const S=new Set,N=new Set;function B(k){var A,T;try{$.removeChannel(j)}catch{}const u=o[i+"Score"]||0,g=o[r+"Score"]||0;let h,y;k.winner_id?(h=k.winner_id===s.profile.id,y=!1):k.forfeit?(h=u>g,y=!1):(y=u===g,h=u>g),(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":h?"🏆":"😞",_=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",L=y?"#fff":h?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${u} – ${g} ${o[r+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(T=v.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{v.remove(),He(e),l("home")})}const j=$.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},k=>{const u=k.new;try{if(u.status==="finished"||u.forfeit){if(b)return;b=!0,E&&(clearInterval(E),E=null),u.game_state&&(o=u.game_state),B(u);return}if(u.game_state){const g=o;o=u.game_state;const h=o._lastGC;if(h&&h.seq&&!N.has(h.seq)&&(N.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>D());return}const y=g[i+"Score"]||0,v=g[r+"Score"]||0,w=o[i+"Score"]||0,_=o[r+"Score"]||0,L=w>y,A=_>v;if((L||A)&&!S.has(o.round)){S.add(o.round);const T=[...o.log||[]].reverse().find(R=>R.isGoal),F=((T==null?void 0:T.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));he(F,w,_,L,()=>D());return}D()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function P(k){Object.assign(o,k),o.lastActionAt=new Date().toISOString();const{error:u}=await $.from("matches").update({game_state:o}).eq("id",n);u&&p("Erreur de synchronisation","error");try{D()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function Q(){if(b)return;b=!0,E&&(clearInterval(E),E=null);const k=a?x.away_id:x.home_id,u=a?"p2":"p1",g=a?"p1":"p2",h={...o,[u+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:k,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{$.removeChannel(j)}catch{}setTimeout(()=>{He(e),l("home")},800)}const de={BOOST_STAT:({value:k=1,count:u=1,roles:g=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!g.length||g.includes(_)).flatMap(([_,L])=>L.filter(A=>!A.used).map(A=>({...A,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}ie(w,u,`Choisir ${u} joueur(s) à booster (+${k})`,_=>{_.forEach(L=>{const A=(v[L._line]||[]).find(T=>T.cardId===L.cardId);A&&(A.boost=(A.boost||0)+k,h.log.push({text:`⚡ +${k} sur ${A.name}`,type:"info"}))}),h[i+"Team"]=v,y(h)})},DEBUFF_STAT:({value:k=1,count:u=1,roles:g=[],target:h="ai"},y,v)=>{const w=h==="home"?i:r,_=y[w+"Team"],L=h==="home"?"allié":"adverse",A=Object.entries(_).filter(([T])=>!g.length||g.includes(T)).flatMap(([T,F])=>F.filter(R=>!R.used).map(R=>({...R,_line:T})));if(!A.length){y.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),v(y);return}ie(A,u,`Choisir ${u} joueur(s) ${L}(s) (-${k})`,T=>{T.forEach(F=>{const R=(_[F._line]||[]).find(W=>W.cardId===F.cardId);R&&(R.boost=(R.boost||0)-k,y.log.push({text:`🎯 -${k} sur ${R.name}`,type:"info"}))}),y[w+"Team"]=_,v(y)})},GRAY_PLAYER:({count:k=1,roles:u=[],target:g="ai"},h,y)=>{const v=g==="home"?i:r,w=h[v+"Team"],_=g==="home"?"allié":"adverse",L=Object.entries(w).filter(([A])=>!u.length||u.includes(A)).flatMap(([A,T])=>T.filter(F=>!F.used).map(F=>({...F,_line:A})));if(!L.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(h);return}ie(L,k,`Choisir ${k} joueur(s) ${_}(s) à exclure`,A=>{A.forEach(T=>{const F=(w[T._line]||[]).find(R=>R.cardId===T.cardId);F&&(F.used=!0,h.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),h[v+"Team"]=w,y(h)})},REVIVE_PLAYER:({count:k=1,roles:u=[]},g,h)=>{const y=g[i+"Team"],v=Object.entries(y).filter(([w])=>!u.length||u.includes(w)).flatMap(([w,_])=>_.filter(L=>L.used).map(L=>({...L,_line:w})));if(!v.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(g);return}ie(v,k,`Choisir ${k} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const L=(y[_._line]||[]).find(A=>A.cardId===_.cardId);L&&(L.used=!1,g.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),g[i+"Team"]=y,h(g)})},REMOVE_GOAL:({},k,u)=>{const g=r+"Score";k[g]>0?(k[g]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(k)},ADD_GOAL_DRAW:({},k,u)=>{k[i+"Score"]===k[r+"Score"]?(k[i+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(k)},ADD_SUB:({value:k=1},u,g)=>{u.maxSubs=(u.maxSubs||3)+k,u.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),g(u)},CUSTOM:({},k,u)=>u(k)};function ie(k,u,g,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var L,A;const _=k.map(T=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",R=ve(T,T._line)+(T.boost||0),ce=v.find(H=>H.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${F};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${u}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${u})
          </button>
        </div>`,(L=y.querySelector("#pp-close"))==null||L.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const F=T.dataset.cid,R=k.find(ce=>ce.cardId===F),W=v.findIndex(ce=>ce.cardId===F);R&&(W>-1?v.splice(W,1):v.length<u&&v.push(R),w())})}),(A=y.querySelector("#pp-confirm"))==null||A.addEventListener("click",()=>{y.remove(),h(v)})}w(),document.body.appendChild(y)}async function M(k,u){const h=(o["gcCardsFull_"+i]||[]).find(_=>_.id===k),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(_=>{var L;return _.name===u||((L=_.name)==null?void 0:L.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],k],w={type:u,by:i,seq:(o._gcAnimSeq||0)+1};N.add(w.seq),xe(u,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const L=de[y.effect_type];if(L){const A={...o};L(y.effect_params||{},A,async T=>{T["usedGc_"+i]=v,T._lastGC=w,T._gcAnimSeq=w.seq,await P(T)});return}}const _={...o};switch(u){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=r+"Score";_[L]>0&&(_[L]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await P(_)})}function Y(k,u){const g="usedCardIds_"+k,h=new Set(o[g]||[]);u.forEach(y=>h.add(y)),o[g]=[...h]}function ne(){for(const k of["p1","p2"]){const u=new Set(o["usedCardIds_"+k]||[]),g=o[k+"Team"];if(g)for(const h of["GK","DEF","MIL","ATT"])(g[h]||[]).forEach(y=>{y.used=u.has(y.cardId)})}}function D(){var Fe,Ze,xt,yt,ht,bt;if(o.phase==="reveal")return Z();if(o.phase==="midfield")return pe();if(o.phase==="finished")return Re();const k=o[i+"Team"],u=o[r+"Team"];ne();const g=o[i+"Score"],h=o[r+"Score"],y=o[i+"Name"],v=o[r+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",L=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],A=L.map(X=>X.cardId),T=window.innerWidth>=700,F=o[i+"Subs"]||[],R=o["usedSubIds_"+i]||[],W=F.filter(X=>!R.includes(X.cardId)),ce=o["gcCardsFull_"+i]||[],J=o["usedGc_"+i]||[],H=ce.filter(X=>!J.includes(X.id)),V=o.boostOwner===i&&!o.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(X=>(u[X]||[]).some(G=>!G.used)),le=[...k.MIL||[],...k.ATT||[]].filter(X=>!X.used),ue=w&&ee&&le.length===0?[...k.GK||[],...k.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function fe(X,G,re){var jt,_t;const se=X._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",We=(se==null?void 0:se.name)||X.gc_type,Je=(se==null?void 0:se.effect)||((jt=Ne[X.gc_type])==null?void 0:jt.desc)||"",et=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,Mt=((_t=Ne[X.gc_type])==null?void 0:_t.icon)||"⚡",Ct=Math.round(re*.22),vt=Math.round(re*.22),lt=re-Ct-vt,wt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${G}px;height:${re}px;border-radius:10px;border:2px solid ${Ye};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}const be=(X,G)=>G?me(130,175):fe(X,130,175),Ce=(X,G)=>G?me(68,95):fe(X,68,95),Pe=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",qe=w?Ee(i)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Ie=w&&!Ee(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(X,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,Be=w?"attack":_?"defense":"idle",Ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(k,o[i+"Formation"],Be,A,300,300,ue)}
      </div>
    </div>`;function Oe(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const G=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(X.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.homePlayers||[]).map(re=>nt(re)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${G?20:14}px;font-weight:900;color:${G?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${X.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${G?14:20}px;font-weight:900;color:${G?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${X.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.aiPlayers||[]).map(re=>nt(re)).join("")}
            </div>
          </div>
          ${X.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${X.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ue=(()=>{var G,re;if(_&&((G=o.pendingAttack)!=null&&G.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(w&&((re=o.pendingAttack)!=null&&re.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",se.total)}
        </div>`}const X=(o.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Oe(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ue}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Xe(e),e.style.overflow="hidden",T?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Le}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${qe}${Ie}
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
              ${dt(k,o[i+"Formation"],Be,A,300,300,ue)}
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
          <div>${qe}${Ie}</div>
        </div>
      </div>`;function je(){const X=e.querySelector(".match-screen");if(!X)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=G+"px",X.style.minHeight=G+"px",X.style.maxHeight=G+"px",X.style.overflow="hidden";const re=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");re&&se&&(se.style.paddingBottom=re.offsetHeight+"px")}if(je(),setTimeout(je,120),setTimeout(je,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",je),window.visualViewport.addEventListener("scroll",je)),window.addEventListener("resize",je)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!w&&!_)return;const G=X.dataset.cardId,re=X.dataset.role,se=(k[re]||[]).find(Je=>Je.cardId===G);if(!se||se.used)return;const ye=ue.includes(G);if(w&&!["MIL","ATT"].includes(re)&&!ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Je=>Je.cardId===G);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...se,_role:re}),D()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>U(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>U())}),(Fe=e.querySelector("#pvp-sub-open"))==null||Fe.addEventListener("click",()=>U()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>ge(X.dataset.gcId,X.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>O()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",X=>{w?X.currentTarget.dataset.pass==="1"||!Ee(i)?oe():te():_&&we()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Q()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>q()),(bt=e.querySelector("#pvp-toggle-history"))==null||bt.addEventListener("click",()=>K()),E&&(clearInterval(E),E=null),(w||_)&&!b){let X=30,G=!1;const re=()=>document.getElementById("pvp-timer"),se=()=>{re()&&(re().textContent=X+"s",re().style.color=G?"#ff4444":"#fff")};se(),E=setInterval(()=>{X--,X<0?G?(clearInterval(E),E=null,w&&!Ee(i)?oe():Q()):(G=!0,X=15,se()):se()},1e3)}}function Z(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await P({phase:"midfield"})},5e3)}let ae=!1;function pe(){if(ae)return;const k=o[i+"Team"].MIL||[],u=o[r+"Team"].MIL||[];function g(H){return H.reduce((V,ee)=>V+ve(ee,"MIL"),0)}function h(H){let V=0;for(let ee=0;ee<H.length-1;ee++){const le=Qe(H[ee],H[ee+1]);le==="#00ff88"?V+=2:le==="#FFD700"&&(V+=1)}return V}const y=g(k)+h(k),v=g(u)+h(u),w=y>=v;function _(H,V,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
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
    </div>`;const L=(H,V)=>e.querySelectorAll(H).forEach((ee,le)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},V+le*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,V)=>setTimeout(()=>{H.style.opacity="1"},V*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function A(H,V,ee){const le=document.getElementById(H);if(!le)return;const ue=performance.now(),fe=me=>{const be=Math.min(1,(me-ue)/ee);le.textContent=Math.round(V*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):le.textContent=V};requestAnimationFrame(fe)}setTimeout(()=>{A("pvp-score-me",y,800),A("pvp-score-opp",v,800)},1500);const T=o.p1Team.MIL||[],F=o.p2Team.MIL||[],R=g(T)+h(T),W=g(F)+h(F),ce=R>=W?"p1":"p2";let J=o.boostValue;J==null&&(J=li(),o.boostValue=J,o.boostOwner=ce,o.boostUsed=!1),ae=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),V=e.querySelector("#duel-row-"+(w?"opp":"me")),ee=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),ue=w?ee:le,fe=w?le:ee;ue&&(ue.style.fontSize="80px",ue.style.color=w?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Pe;const me=document.getElementById("pvp-duel-finale");if(!me)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ce=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Ce,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Pe=document.getElementById("pvp-start-match"))==null||Pe.addEventListener("click",async()=>{const qe=ce;await P({phase:qe+"-attack",attacker:qe,round:1,boostValue:J,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function he(k,u,g,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(T,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${k.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let L=!1;const A=()=>{L||(L=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",A),setTimeout(A,3500)}function xe(k,u,g){var J,H;const h=(o.gcDefs||[]).find(V=>{var ee;return V.name===k||((ee=V.name)==null?void 0:ee.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||k,_=(h==null?void 0:h.effect)||((J=Ne[k])==null?void 0:J.desc)||"",L=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,A=((H=Ne[k])==null?void 0:H.icon)||"⚡",F=u===i?"Vous":o[u+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
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
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${A}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let W=!1;const ce=()=>{W||(W=!0,R.remove(),setTimeout(()=>g&&g(),50))};R.addEventListener("click",ce),setTimeout(ce,3e3)}function ge(k,u){var R,W,ce,J;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===k),y=h==null?void 0:h._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||u,L=(y==null?void 0:y.effect)||((R=Ne[u])==null?void 0:R.desc)||"Carte spéciale.",A=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,T=((W=Ne[u])==null?void 0:W.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(ce=F.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>F.remove()),(J=F.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{F.remove(),M(k,u)})}function O(){var h;const k=o[i+"Team"],u=Object.entries(k).flatMap(([y,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!u.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(y=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=ve(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#bp-close"))==null||h.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const v=y.dataset.cid,w=u.find(L=>L.cardId===v);if(!w)return;const _=(k[w._line]||[]).find(L=>L.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),g.remove(),await P({[i+"Team"]:k,boostUsed:!0})})})}function U(k=null){var W,ce;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const g=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){p(`Maximum ${y} remplacements atteint`,"warning");return}const v=Object.entries(g).flatMap(([J,H])=>(H||[]).filter(V=>V.used).map(V=>({...V,_line:J}))),w=(o[i+"Subs"]||[]).filter(J=>!h.includes(J.cardId));if(!v.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(J=>J.cardId===k));const L=((W=v[_])==null?void 0:W._line)||((ce=v[_])==null?void 0:ce.job);let A=Math.max(0,w.findIndex(J=>J.job===L)),T=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var fe,me,be,Ce,Pe,qe;const J=v[_],H=w[A],V=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(V*1.35),le=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${le(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},V,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${le(A>=w.length-1)}" ${A>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${le(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${J?Ve({...J,used:!1,boost:0},V,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${le(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=F.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>F.remove()),(me=F.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{_>0&&(_--,R())}),(be=F.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{_<v.length-1&&(_++,R())}),(Ce=F.querySelector("#pin-up"))==null||Ce.addEventListener("click",()=>{A>0&&(A--,R())}),(Pe=F.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{A<w.length-1&&(A++,R())});const ue=(Ie,Le,Be,Ge)=>{const Oe=F.querySelector("#"+Ie);if(!Oe)return;let Ue=0;Oe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",Ke=>{const je=Ke.changedTouches[0].clientY-Ue;if(Math.abs(je)<30)return;const Fe=Le();je<0&&Fe<Ge-1?(Be(Fe+1),R()):je>0&&Fe>0&&(Be(Fe-1),R())},{passive:!0})};ue("pin-panel",()=>A,Ie=>A=Ie,w.length),ue("pout-panel",()=>_,Ie=>_=Ie,v.length),(qe=F.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),T)return;T=!0;const Le=v[_],Be=w[A];if(!Le||!Be)return;const Ge=Le._line,Oe=(g[Ge]||[]).findIndex(je=>je.cardId===Le.cardId);if(Oe===-1){p("Erreur : joueur introuvable","error"),F.remove();return}const Ue={...Be,_line:Ge,position:Le.position,used:!1,boost:0};g[Ge].splice(Oe,1,Ue);const Ke=[...h,Be.cardId];F.remove(),C(Le,Be,async()=>{await P({[i+"Team"]:g,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(F),R()}function C(k,u,g){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(L,A,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${A};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[L.job]||"#555"};border:3px solid ${A};position:relative;overflow:hidden;margin:0 auto">
        ${ze(L)?`<img src="${ze(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(u,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const _=()=>{w||(w=!0,y.remove(),setTimeout(()=>g(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function q(){var u;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
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
      </div>`,document.body.appendChild(u),(g=u.querySelector("#pvp-hist-close"))==null||g.addEventListener("click",()=>u.remove())}async function oe(){if(o.phase!==i+"-attack")return;const k=i==="p1"?"p2":"p1",u=(o.round||0)+1,g=[...o.log||[]];g.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Te(o),y=Ee(k),v=h||!y?"finished":k+"-attack";await P({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:k,round:u,log:g}),v==="finished"&&await De(o)}async function te(){const k=o[i+"Team"],u=!["GK","DEF","MIL","ATT"].some(v=>(o[r+"Team"][v]||[]).some(w=>!w.used)),g=(o["selected_"+i]||[]).map(v=>{const w=(k[v._role]||[]).find(R=>R.cardId===v.cardId)||v,_=u&&["GK","DEF"].includes(v._role),L=k[v._role]||[],A=L.findIndex(R=>R.cardId===v.cardId),T=ot(L.length),F=A>=0?T[A]:w._col??1;return{...w,_line:v._role,_col:F,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!g.length)return;const h=Ht(g,o.modifiers[i]||{});Y(i,g.map(v=>v.cardId)),g.forEach(v=>{const w=(k[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],D();const y=[...o.log||[]];if(u){const v=(o[i+"Score"]||0)+1,w=g.map(F=>({name:F.name,note:ve(F,F._line||"ATT"),portrait:ze(F),job:F.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(o.round||0)+1,L=i==="p1"?"p2":"p1",A={...o,[i+"Team"]:k,[i+"Score"]:v},T=Te(A);S.add(_),he(w,v,o[r+"Score"]||0,!0,async()=>{await P({[i+"Team"]:k,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:T?"finished":L+"-attack",attacker:L,round:_,log:y}),T&&await De({...o,[i+"Score"]:v})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await P({[i+"Team"]:k,[r+"Team"]:o[r+"Team"],pendingAttack:{...h,players:g,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:y})}async function we(){const k=o[i+"Team"],u=(o["selected_"+i]||[]).map(J=>{const H=(k[J._role]||[]).find(fe=>fe.cardId===J.cardId)||J,V=k[J._role]||[],ee=V.findIndex(fe=>fe.cardId===J.cardId),le=ot(V.length),ue=ee>=0?le[ee]:H._col??1;return{...H,_line:J._role,_col:ue}}),g=Ut(u,o.modifiers[i]||{});Y(i,u.map(J=>J.cardId)),u.forEach(J=>{const H=(k[J._role]||[]).find(V=>V.cardId===J.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],D();const h=Kt(o.pendingAttack.total,g.total,o.modifiers[i]||{}),y=o.pendingAttack.side,v=h==="attack"||(h==null?void 0:h.goal),w=y==="p1"?"p2":"p1",_=(o.round||0)+1,L=(o.pendingAttack.players||[]).map(J=>({name:J.name,note:ve(J,J._line||"ATT"),portrait:ze(J),job:J.job})),A=[...o.log||[]];A.push({type:"duel",isGoal:v,homeScored:v&&y===i,text:v?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${g.total})`,homePlayers:L,aiPlayers:u.map(J=>({name:J.name,note:ve(J,J._line||"DEF"),portrait:ze(J),job:J.job})),homeTotal:o.pendingAttack.total,aiTotal:g.total});const T=v?(o[y+"Score"]||0)+1:o[y+"Score"]||0,F={...o,[i+"Team"]:k,[y+"Score"]:T},R=Te(F),W=R?"finished":w+"-attack",ce=async()=>{await P({[i+"Team"]:k,[r+"Team"]:o[r+"Team"],[y+"Score"]:T,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:w,round:_,log:A}),(W==="finished"||R)&&await De({...o,[y+"Score"]:T})};if(v){const J=y===i,H=J?T:o[i+"Score"]||0,V=J?o[r+"Score"]||0:T;S.add(_),he(L,H,V,J,ce)}else await ce()}function _e(k){return["MIL","ATT"].some(u=>(k[u]||[]).some(g=>!g.used))}function ke(k){return["GK","DEF","MIL","ATT"].some(u=>(k[u]||[]).some(g=>!g.used))}function Se(k){return ke(k)&&!_e(k)}function Ee(k){const u=o[k+"Team"],g=o[(k==="p1"?"p2":"p1")+"Team"];return!!(_e(u)||!ke(g)&&Se(u))}function Te(k){const u=["MIL","ATT"].some(A=>(k.p1Team[A]||[]).some(T=>!T.used)),g=["MIL","ATT"].some(A=>(k.p2Team[A]||[]).some(T=>!T.used)),h=ke(k.p1Team),y=ke(k.p2Team);return!u&&!(!y&&h)&&(!g&&!(!h&&y))}function $e(k){const u=k.p1Score||0,g=k.p2Score||0;return u===g?null:u>g?x.home_id:x.away_id}async function De(k){try{const u=$e(k),g=u?x.home_id===u?x.away_id:x.home_id:null;await $.from("matches").update({status:"finished",winner_id:u,home_score:k.p1Score||0,away_score:k.p2Score||0}).eq("id",n),u&&g&&Pi(u,g).catch(()=>{})}catch(u){console.error("[PvP] finishMatch:",u)}}function Re(){var y;const k=o[i+"Score"],u=o[r+"Score"],g=k>u,h=k===u;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{$.removeChannel(j)}catch{}He(e),l("home")})}D()}const To=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:rn,resumePvpMatch:Ao},Symbol.toStringTag,{value:"Module"}));async function Io(e,t,n,a){var c,d;try{const s=(d=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:d.id;try{($.getChannels?$.getChannels():[]).forEach(p=>{const i=p.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&$.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}s&&(await $.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await $.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await pi(e,t,"random",({deckId:s,formation:l,starters:p,subsRaw:i,gcCardsEnriched:r,gcDefs:f})=>{const m=x=>Lo(e,t,s,l,p,i,x,f||[],n,a);if(!r.length){m([]);return}ci(e,r,m)})}async function Lo(e,t,n,a,c,d,s=[],l=[],p,i){var de;const{state:r,navigate:f,toast:m}=t,x=r.profile.id;let z=!1,o=null;Xe(e);try{await $.rpc("cancel_matchmaking",{p_user_id:x})}catch{}try{await $.from("matchmaking_queue").delete().eq("user_id",x)}catch{}const b=(ie,M,Y,ne)=>{var D;e.innerHTML=`
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
        
        ${!M&&ie?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(D=document.getElementById("lobby-cancel"))==null||D.addEventListener("click",async()=>{z=!0,o&&($.removeChannel(o),o=null),Y&&await $.from("friend_match_invites").update({status:"declined"}).eq("id",Y),He(e),f("home")})},E=async(ie,M)=>{z=!0,o&&($.removeChannel(o),o=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&zo(e,t,ie,M,s,l)},{data:I}=await $.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${x},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${x})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let S,N;if(I&&I.inviter_id===p)N=!1,S=I.id,await $.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",S);else{N=!0;const{data:ie,error:M}=await $.from("friend_match_invites").insert({inviter_id:x,invitee_id:p,friend_id:p,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(M||!ie){m("Erreur création invitation","error"),He(e),f("home");return}S=ie.id}if(b(!0,!N,S),!N){const ie={home_id:p,away_id:x,home_deck_id:I.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},M=await $.from("matches").insert(ie).select().single(),Y=M.data;if(!Y){m("Erreur création match: "+(((de=M.error)==null?void 0:de.message)||""),"error"),He(e),f("home");return}await $.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",S),E(Y.id,!1);return}let B=!1;const j=ie=>{z||B||(ie.status==="matched"&&ie.match_id?(B=!0,clearInterval(P),clearInterval(Q),E(ie.match_id,!0)):ie.status==="declined"?(clearInterval(P),clearInterval(Q),m(`${i} a décliné l'invitation`,"warning"),He(e),f("home")):ie.invitee_ready&&b(!0,!0,S))},P=setInterval(()=>{if(z){clearInterval(P);return}$.from("matchmaking_queue").delete().eq("user_id",x).then(()=>{},()=>{})},3e3),Q=setInterval(async()=>{if(z||B){clearInterval(Q);return}const{data:ie}=await $.from("friend_match_invites").select("*").eq("id",S).maybeSingle();ie&&j(ie)},1200);o=$.channel("friend-invite-"+S).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${S}`},ie=>j(ie.new)).subscribe()}async function zo(e,t,n,a,c=[],d=[]){const{state:s,navigate:l,toast:p}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(c||[]).map(u=>u.id),m=(c||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await $.from("matches").select("*").eq("id",n).single();if(!x){p("Match introuvable","error"),l("home");return}async function z(){const[{data:u},{data:g},{data:h},{data:y}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),v=T=>({cardId:T.card_id,position:T.position,id:T.id,firstname:T.firstname,name:T.surname_encoded,country_code:T.country_code,club_id:T.club_id,job:T.job,job2:T.job2,note_g:Number(T.note_g)||0,note_d:Number(T.note_d)||0,note_m:Number(T.note_m)||0,note_a:Number(T.note_a)||0,rarity:T.rarity,skin:T.skin,hair:T.hair,hair_length:T.hair_length,clubName:T.club_encoded_name||null,clubLogo:T.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),w=((u==null?void 0:u.starters)||[]).map(T=>v(T)),_=((g==null?void 0:g.starters)||[]).map(T=>v(T)),L=(u==null?void 0:u.formation)||"4-4-2",A=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:mt(w,L),p2Team:mt(_,A),p1Subs:((u==null?void 0:u.subs)||[]).map(T=>v(T)),p2Subs:((g==null?void 0:g.subs)||[]).map(T=>v(T)),p1Formation:L,p2Formation:A,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!o)if(a){o=await z();const{data:u}=await $.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await $.from("matches").update({game_state:o,turn_user_id:x.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:g}=await $.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){p("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await $.from("matches").update({game_state:o}).eq("id",n)}let b=!1,E=!1,I=null,S=!1;const N=new Set,B=new Set;function j(u){var T,F;try{$.removeChannel(P)}catch{}const g=o[i+"Score"]||0,h=o[r+"Score"]||0;if(!E){const R=o.p1Score||0,W=o.p2Score||0,ce=(o.usedGc_p1||[]).length,J=(o.usedGc_p2||[]).length,H=u.winner_id||(R>W?x.home_id:W>R?x.away_id:null);(H?s.profile.id===H:s.profile.id<(a?x.away_id:x.home_id))&&(E=!0,_n({player1Id:x.home_id,player2Id:x.away_id,score1:R,score2:W,gc1:ce,gc2:J}).catch(ee=>console.warn("[FriendMatch] updateStats:",ee)))}let y,v;u.winner_id?(y=u.winner_id===s.profile.id,v=!1):u.forfeit?(y=g>h,v=!1):(v=g===h,y=g>h),(T=document.getElementById("pvp-end-overlay"))==null||T.remove();const w=document.createElement("div");w.id="pvp-end-overlay",w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const _=v?"🤝":y?"🏆":"😞",L=v?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",A=v?"#fff":y?"#FFD700":"#ff6b6b";w.innerHTML=`
      <div style="font-size:64px">${_}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${L}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${h} ${o[r+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(w),(F=w.querySelector("#pvp-end-home"))==null||F.addEventListener("click",()=>{w.remove(),He(e),l("home")})}const P=$.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const g=u.new;try{if(g.status==="finished"||g.forfeit){if(b)return;b=!0,I&&(clearInterval(I),I=null),g.game_state&&(o=g.game_state),j(g);return}if(g.game_state){const h=o;o=g.game_state;const y=o._lastGC;if(y&&y.seq&&!B.has(y.seq)&&(B.add(y.seq),y.by!==i)){ge(y.type,y.by,()=>Z());return}const v=h[i+"Score"]||0,w=h[r+"Score"]||0,_=o[i+"Score"]||0,L=o[r+"Score"]||0,A=_>v,T=L>w;if((A||T)&&!N.has(o.round)){N.add(o.round);const F=[...o.log||[]].reverse().find(W=>W.isGoal),R=((F==null?void 0:F.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(R,_,L,A,()=>Z());return}Z()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function Q(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:g}=await $.from("matches").update({game_state:o}).eq("id",n);g&&p("Erreur de synchronisation","error");try{Z()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function de(){if(b)return;b=!0,I&&(clearInterval(I),I=null);const u=a?x.away_id:x.home_id,g=a?"p2":"p1",h=a?"p1":"p2",y={...o,[g+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{$.removeChannel(P)}catch{}setTimeout(()=>{He(e),l("home")},800)}const ie={BOOST_STAT:({value:u=1,count:g=1,roles:h=[]},y,v)=>{const w=y[i+"Team"],_=Object.entries(w).filter(([L])=>!h.length||h.includes(L)).flatMap(([L,A])=>A.filter(T=>!T.used).map(T=>({...T,_line:L})));if(!_.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(y);return}M(_,g,`Choisir ${g} joueur(s) à booster (+${u})`,L=>{L.forEach(A=>{const T=(w[A._line]||[]).find(F=>F.cardId===A.cardId);T&&(T.boost=(T.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${T.name}`,type:"info"}))}),y[i+"Team"]=w,v(y)})},DEBUFF_STAT:({value:u=1,count:g=1,roles:h=[],target:y="ai"},v,w)=>{const _=y==="home"?i:r,L=v[_+"Team"],A=y==="home"?"allié":"adverse",T=Object.entries(L).filter(([F])=>!h.length||h.includes(F)).flatMap(([F,R])=>R.filter(W=>!W.used).map(W=>({...W,_line:F})));if(!T.length){v.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),w(v);return}M(T,g,`Choisir ${g} joueur(s) ${A}(s) (-${u})`,F=>{F.forEach(R=>{const W=(L[R._line]||[]).find(ce=>ce.cardId===R.cardId);W&&(W.boost=(W.boost||0)-u,v.log.push({text:`🎯 -${u} sur ${W.name}`,type:"info"}))}),v[_+"Team"]=L,w(v)})},GRAY_PLAYER:({count:u=1,roles:g=[],target:h="ai"},y,v)=>{const w=h==="home"?i:r,_=y[w+"Team"],L=h==="home"?"allié":"adverse",A=Object.entries(_).filter(([T])=>!g.length||g.includes(T)).flatMap(([T,F])=>F.filter(R=>!R.used).map(R=>({...R,_line:T})));if(!A.length){y.log.push({text:`❌ Aucun joueur ${L}`,type:"info"}),v(y);return}M(A,u,`Choisir ${u} joueur(s) ${L}(s) à exclure`,T=>{T.forEach(F=>{const R=(_[F._line]||[]).find(W=>W.cardId===F.cardId);R&&(R.used=!0,y.log.push({text:`❌ ${R.name} exclu !`,type:"info"}))}),y[w+"Team"]=_,v(y)})},REVIVE_PLAYER:({count:u=1,roles:g=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!g.length||g.includes(_)).flatMap(([_,L])=>L.filter(A=>A.used).map(A=>({...A,_line:_})));if(!w.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}M(w,u,`Choisir ${u} joueur(s) à ressusciter`,_=>{_.forEach(L=>{const A=(v[L._line]||[]).find(T=>T.cardId===L.cardId);A&&(A.used=!1,h.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=v,y(h)})},REMOVE_GOAL:({},u,g)=>{const h=r+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(u)},ADD_GOAL_DRAW:({},u,g)=>{u[i+"Score"]===u[r+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(u)},ADD_SUB:({value:u=1},g,h)=>{g.maxSubs=(g.maxSubs||3)+u,g.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(g)},CUSTOM:({},u,g)=>g(u)};function M(u,g,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function _(){var A,T;const L=u.map(F=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[F._line]||"#555",W=ve(F,F._line)+(F.boost||0),J=w.find(V=>V.cardId===F.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=F.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${F.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${R};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${F.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${F._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${L}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${g})
          </button>
        </div>`,(A=v.querySelector("#pp-close"))==null||A.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(F=>{F.addEventListener("click",()=>{const R=F.dataset.cid,W=u.find(J=>J.cardId===R),ce=w.findIndex(J=>J.cardId===R);W&&(ce>-1?w.splice(ce,1):w.length<g&&w.push(W),_())})}),(T=v.querySelector("#pp-confirm"))==null||T.addEventListener("click",()=>{v.remove(),y(w)})}_(),document.body.appendChild(v)}async function Y(u,g){const y=(o["gcCardsFull_"+i]||[]).find(L=>L.id===u),v=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(L=>{var A;return L.name===g||((A=L.name)==null?void 0:A.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),w=[...o["usedGc_"+i]||[],u],_={type:g,by:i,seq:(o._gcAnimSeq||0)+1};B.add(_.seq),ge(g,i,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const A=ie[v.effect_type];if(A){const T={...o};A(v.effect_params||{},T,async F=>{F["usedGc_"+i]=w,F._lastGC=_,F._gcAnimSeq=_.seq,await Q(F)});return}}const L={...o};switch(g){case"Remplacement+":L.maxSubs=(L.maxSubs||3)+1,L.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=r+"Score";L[A]>0&&(L[A]--,L.log.push({text:"🚫 But annulé",type:"info"}));break}}L["usedGc_"+i]=w,L._lastGC=_,L._gcAnimSeq=_.seq,await Q(L)})}function ne(u,g){const h="usedCardIds_"+u,y=new Set(o[h]||[]);g.forEach(v=>y.add(v)),o[h]=[...y]}function D(){for(const u of["p1","p2"]){const g=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(v=>{v.used=g.has(v.cardId)})}}function Z(){var Ze,xt,yt,ht,bt,X;if(o.phase==="reveal")return ae();if(o.phase==="midfield")return he();if(o.phase==="finished")return k();const u=o[i+"Team"],g=o[r+"Team"];D();const h=o[i+"Score"],y=o[r+"Score"],v=o[i+"Name"],w=o[r+"Name"],_=o.phase===i+"-attack",L=o.phase===i+"-defense",A=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],T=A.map(G=>G.cardId),F=window.innerWidth>=700,R=o[i+"Subs"]||[],W=o["usedSubIds_"+i]||[],ce=R.filter(G=>!W.includes(G.cardId)),J=o["gcCardsFull_"+i]||[],H=o["usedGc_"+i]||[],V=J.filter(G=>!H.includes(G.id)),ee=o.boostOwner===i&&!o.boostUsed,le=!["GK","DEF","MIL","ATT"].some(G=>(g[G]||[]).some(re=>!re.used)),ue=[...u.MIL||[],...u.ATT||[]].filter(G=>!G.used),fe=_&&le&&ue.length===0?[...u.GK||[],...u.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];function me(G,re,se){var _t,gi;const ye=G._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Je=(ye==null?void 0:ye.name)||G.gc_type,et=(ye==null?void 0:ye.effect)||((_t=Ne[G.gc_type])==null?void 0:_t.desc)||"",Mt=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,Ct=((gi=Ne[G.gc_type])==null?void 0:gi.icon)||"⚡",vt=Math.round(se*.22),lt=Math.round(se*.22),wt=se-vt-lt,jt=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${G.id}" data-gc-type="${G.gc_type}"
        style="box-sizing:border-box;width:${re}px;height:${se}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${vt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${jt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${re-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${wt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Mt?`<img src="${Mt}" style="max-width:${re-10}px;max-height:${wt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(wt*.55)}px">${Ct}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(G,re){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${G}px;height:${re}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(re*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(re*.2)}px">⚡</div>
        <div style="font-size:${Math.round(re*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ce=(G,re)=>re?be(130,175):me(G,130,175),Pe=(G,re)=>re?be(68,95):me(G,68,95),qe=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=_?Te(i)?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${qe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:L?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,Le=_&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':_||L?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Be=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(G=>`<div class="pvp-sub-btn" data-sub-id="${G.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(G,F?76:44,F?100:58)}</div>`).join("")}
    </div>`,Ge=_?"attack":L?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(u,o[i+"Formation"],Ge,T,300,300,fe)}
      </div>
    </div>`;function Ue(G){if(G.type==="duel"&&(G.homeTotal!=null||G.aiTotal!=null)){const re=(G.homeTotal||0)>=(G.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(G.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.homePlayers||[]).map(se=>nt(se)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${re?20:14}px;font-weight:900;color:${re?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${G.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${re?14:20}px;font-weight:900;color:${re?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${G.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.aiPlayers||[]).map(se=>nt(se)).join("")}
            </div>
          </div>
          ${G.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${G.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${G.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${G.type==="goal"?700:400};padding:3px 2px">${G.text||""}</div>`}const Ke=(()=>{var re,se;if(L&&((re=o.pendingAttack)!=null&&re.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(_&&((se=o.pendingAttack)!=null&&se.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",ye.total)}
        </div>`}const G=(o.log||[]).slice(-1)[0];return G?'<div style="padding:2px 4px">'+Ue(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),je=`
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
      </button>`;Xe(e),e.style.overflow="hidden",F?e.innerHTML=`
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
            ${ee?Ce(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${je}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(u,o[i+"Formation"],Ge,T,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${V.map(G=>Pe(G,!1)).join("")}
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
          <div>${Ie}${Le}</div>
        </div>
      </div>`;function Fe(){const G=e.querySelector(".match-screen");if(!G)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.height=re+"px",G.style.minHeight=re+"px",G.style.maxHeight=re+"px",G.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(Fe(),setTimeout(Fe,120),setTimeout(Fe,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Fe),window.visualViewport.addEventListener("scroll",Fe)),window.addEventListener("resize",Fe)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>{if(!_&&!L)return;const re=G.dataset.cardId,se=G.dataset.role,ye=(u[se]||[]).find(et=>et.cardId===re);if(!ye||ye.used)return;const Ye=fe.includes(re);if(_&&!["MIL","ATT"].includes(se)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Je=We.findIndex(et=>et.cardId===re);Je>-1?We.splice(Je,1):We.length<3&&We.push({...ye,_role:se}),Z()})}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>C(G.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(G=>{G.addEventListener("click",()=>C())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>C()),e.querySelectorAll(".pvp-gc-mini").forEach(G=>{G.addEventListener("click",()=>O(G.dataset.gcId,G.dataset.gcType))}),(xt=e.querySelector("#pvp-boost-card"))==null||xt.addEventListener("click",()=>U()),(yt=e.querySelector("#pvp-action"))==null||yt.addEventListener("click",G=>{_?G.currentTarget.dataset.pass==="1"||!Te(i)?te():we():L&&_e()}),(ht=e.querySelector("#pvp-quit"))==null||ht.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(bt=e.querySelector("#pvp-view-opp"))==null||bt.addEventListener("click",()=>K()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>oe()),I&&(clearInterval(I),I=null),(_||L)&&!b){let G=30,re=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=G+"s",se().style.color=re?"#ff4444":"#fff")};ye(),I=setInterval(()=>{G--,G<0?re?(clearInterval(I),I=null,_&&!Te(i)?te():de()):(re=!0,G=15,ye()):ye()},1e3)}}function ae(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await Q({phase:"midfield"})},5e3)}let pe=!1;function he(){if(pe)return;const u=o[i+"Team"].MIL||[],g=o[r+"Team"].MIL||[];function h(V){return V.reduce((ee,le)=>ee+ve(le,"MIL"),0)}function y(V){let ee=0;for(let le=0;le<V.length-1;le++){const ue=Qe(V[le],V[le+1]);ue==="#00ff88"?ee+=2:ue==="#FFD700"&&(ee+=1)}return ee}const v=h(u)+y(u),w=h(g)+y(g),_=v>=w;function L(V,ee,le){return`<div id="duel-row-${le}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ee}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((ue,fe)=>{const me=fe<V.length-1?Qe(ue,V[fe+1]):null,be=!me||me==="#ff3333"||me==="#cc2222",Ce=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${le}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ue,note:ve(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<V.length-1?`<div class="duel-link duel-link-${le}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${me}`}">
              ${Ce?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${Ce}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${le}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(V)} + ${y(V)} liens = <b style="color:#fff">${h(V)+y(V)}</b>
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
      ${L(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${L(g,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(V,ee)=>e.querySelectorAll(V).forEach((le,ue)=>{setTimeout(()=>{le.style.opacity="1",le.style.transform="translateY(0) scale(1)"},ee+ue*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,ee)=>setTimeout(()=>{V.style.opacity="1"},ee*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ee=>ee.style.opacity="1")},1250);function T(V,ee,le){const ue=document.getElementById(V);if(!ue)return;const fe=performance.now(),me=be=>{const Ce=Math.min(1,(be-fe)/le);ue.textContent=Math.round(ee*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(me):ue.textContent=ee};requestAnimationFrame(me)}setTimeout(()=>{T("pvp-score-me",v,800),T("pvp-score-opp",w,800)},1500);const F=o.p1Team.MIL||[],R=o.p2Team.MIL||[],W=h(F)+y(F),ce=h(R)+y(R),J=W>=ce?"p1":"p2";let H=o.boostValue;H==null&&(H=li(),o.boostValue=H,o.boostOwner=J,o.boostUsed=!1),pe=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(_?"me":"opp")),ee=e.querySelector("#duel-row-"+(_?"opp":"me")),le=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),fe=_?le:ue,me=_?ue:le;fe&&(fe.style.fontSize="80px",fe.style.color=_?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(_?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),ee&&(ee.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var qe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const Ce=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Pe=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(_?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Pe,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(qe=document.getElementById("pvp-start-match"))==null||qe.addEventListener("click",async()=>{const Ie=J;await Q({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:H,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function xe(u,g,h,y,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const _=Array.from({length:10},(F,R)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${R%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][R%8]}</div>`).join(""),L={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
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
        ${g} – ${h}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(F=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${L[F.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${F.portrait?`<img src="${F.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(F.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let A=!1;const T=()=>{A||(A=!0,w.remove(),setTimeout(()=>v(),50))};w.addEventListener("click",T),setTimeout(T,3500)}function ge(u,g,h){var H,V;const y=(o.gcDefs||[]).find(ee=>{var le;return ee.name===u||((le=ee.name)==null?void 0:le.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||u,L=(y==null?void 0:y.effect)||((H=Ne[u])==null?void 0:H.desc)||"",A=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,T=((V=Ne[u])==null?void 0:V.icon)||"⚡",R=g===i?"Vous":o[g+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
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
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${T}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let ce=!1;const J=()=>{ce||(ce=!0,W.remove(),setTimeout(()=>h&&h(),50))};W.addEventListener("click",J),setTimeout(J,3e3)}function O(u,g){var W,ce,J,H;const y=(o["gcCardsFull_"+i]||[]).find(V=>V.id===u),v=y==null?void 0:y._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",L=(v==null?void 0:v.name)||g,A=(v==null?void 0:v.effect)||((W=Ne[g])==null?void 0:W.desc)||"Carte spéciale.",T=v!=null&&v.image_url?`/manager-wars/icons/${v.image_url}`:null,F=((ce=Ne[g])==null?void 0:ce.icon)||"⚡",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",R.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${_};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${_}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${L.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${L}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${T?`<img src="${T}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${F}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(R),(J=R.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>R.remove()),(H=R.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{R.remove(),Y(u,g)})}function U(){var y;const u=o[i+"Team"],g=Object.entries(u).flatMap(([v,w])=>(w||[]).filter(_=>!_.used).map(_=>({..._,_line:v})));if(!g.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(v=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",_=ve(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const w=v.dataset.cid,_=g.find(A=>A.cardId===w);if(!_)return;const L=(u[_._line]||[]).find(A=>A.cardId===w);L&&(L.boost=(L.boost||0)+o.boostValue),h.remove(),await Q({[i+"Team"]:u,boostUsed:!0})})})}function C(u=null){var ce,J;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],v=o.maxSubs||3;if(y.length>=v){p(`Maximum ${v} remplacements atteint`,"warning");return}const w=Object.entries(h).flatMap(([H,V])=>(V||[]).filter(ee=>ee.used).map(ee=>({...ee,_line:H}))),_=(o[i+"Subs"]||[]).filter(H=>!y.includes(H.cardId));if(!w.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!_.length){p("Aucun remplaçant disponible","warning");return}let L=Math.max(0,w.findIndex(H=>H.cardId===u));const A=((ce=w[L])==null?void 0:ce._line)||((J=w[L])==null?void 0:J.job);let T=Math.max(0,_.findIndex(H=>H.job===A)),F=!1;const R=document.createElement("div");R.id="pvp-sub-overlay",R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,be,Ce,Pe,qe,Ie;const H=w[L],V=_[T],ee=Math.min(130,Math.round((window.innerWidth-90)/2)),le=Math.round(ee*1.35),ue=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;R.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(T===0)}" ${T===0?"disabled":""}>▲</button>
          <div>${V?Ve({...V,used:!1,boost:0},ee,le):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(T>=_.length-1)}" ${T>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${T+1}/${_.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},ee,le):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(L>=w.length-1)}" ${L>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=R.querySelector("#psub-close"))==null||me.addEventListener("click",()=>R.remove()),(be=R.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{L>0&&(L--,W())}),(Ce=R.querySelector("#pout-down"))==null||Ce.addEventListener("click",()=>{L<w.length-1&&(L++,W())}),(Pe=R.querySelector("#pin-up"))==null||Pe.addEventListener("click",()=>{T>0&&(T--,W())}),(qe=R.querySelector("#pin-down"))==null||qe.addEventListener("click",()=>{T<_.length-1&&(T++,W())});const fe=(Le,Be,Ge,Oe)=>{const Ue=R.querySelector("#"+Le);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",je=>{Ke=je.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",je=>{const Fe=je.changedTouches[0].clientY-Ke;if(Math.abs(Fe)<30)return;const Ze=Be();Fe<0&&Ze<Oe-1?(Ge(Ze+1),W()):Fe>0&&Ze>0&&(Ge(Ze-1),W())},{passive:!0})};fe("pin-panel",()=>T,Le=>T=Le,_.length),fe("pout-panel",()=>L,Le=>L=Le,w.length),(Ie=R.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),F)return;F=!0;const Be=w[L],Ge=_[T];if(!Be||!Ge)return;const Oe=Be._line,Ue=(h[Oe]||[]).findIndex(Fe=>Fe.cardId===Be.cardId);if(Ue===-1){p("Erreur : joueur introuvable","error"),R.remove();return}const Ke={...Ge,_line:Oe,position:Be.position,used:!1,boost:0};h[Oe].splice(Ue,1,Ke);const je=[...y,Ge.cardId];R.remove(),q(Be,Ge,async()=>{await Q({[i+"Team"]:h,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:je})})})}document.body.appendChild(R),W()}function q(u,g,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(A,T,F)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${T};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${F}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[A.job]||"#555"};border:3px solid ${T};position:relative;overflow:hidden;margin:0 auto">
        ${ze(A)?`<img src="${ze(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let _=!1;const L=()=>{_||(_=!0,v.remove(),setTimeout(()=>h(),50))};v.addEventListener("click",L),setTimeout(L,2200)}function K(){var g;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(g=u.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>u.remove())}function oe(){var h;const u=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>g.remove())}async function te(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",g=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=$e(o),v=Te(u),w=y||!v?"finished":u+"-attack";await Q({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:w,attacker:u,round:g,log:h}),w==="finished"&&await Re(o)}async function we(){const u=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(w=>(o[r+"Team"][w]||[]).some(_=>!_.used)),h=(o["selected_"+i]||[]).map(w=>{const _=(u[w._role]||[]).find(W=>W.cardId===w.cardId)||w,L=g&&["GK","DEF"].includes(w._role),A=u[w._role]||[],T=A.findIndex(W=>W.cardId===w.cardId),F=ot(A.length),R=T>=0?F[T]:_._col??1;return{..._,_line:w._role,_col:R,...L?{note_a:Math.max(1,Number(_.note_a)||0)}:{}}});if(!h.length)return;const y=Ht(h,o.modifiers[i]||{});ne(i,h.map(w=>w.cardId)),h.forEach(w=>{const _=(u[w._role]||[]).find(L=>L.cardId===w.cardId);_&&(_.used=!0)}),o["selected_"+i]=[],Z();const v=[...o.log||[]];if(g){const w=(o[i+"Score"]||0)+1,_=h.map(R=>({name:R.name,note:ve(R,R._line||"ATT"),portrait:ze(R),job:R.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:_,homeTotal:y.total,aiTotal:0});const L=(o.round||0)+1,A=i==="p1"?"p2":"p1",T={...o,[i+"Team"]:u,[i+"Score"]:w},F=$e(T);N.add(L),xe(_,w,o[r+"Score"]||0,!0,async()=>{await Q({[i+"Team"]:u,[i+"Score"]:w,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:F?"finished":A+"-attack",attacker:A,round:L,log:v}),F&&await Re({...o,[i+"Score"]:w})});return}v.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await Q({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:v})}async function _e(){const u=o[i+"Team"],g=(o["selected_"+i]||[]).map(H=>{const V=(u[H._role]||[]).find(me=>me.cardId===H.cardId)||H,ee=u[H._role]||[],le=ee.findIndex(me=>me.cardId===H.cardId),ue=ot(ee.length),fe=le>=0?ue[le]:V._col??1;return{...V,_line:H._role,_col:fe}}),h=Ut(g,o.modifiers[i]||{});ne(i,g.map(H=>H.cardId)),g.forEach(H=>{const V=(u[H._role]||[]).find(ee=>ee.cardId===H.cardId);V&&(V.used=!0)}),o["selected_"+i]=[],Z();const y=Kt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),v=o.pendingAttack.side,w=y==="attack"||(y==null?void 0:y.goal),_=v==="p1"?"p2":"p1",L=(o.round||0)+1,A=(o.pendingAttack.players||[]).map(H=>({name:H.name,note:ve(H,H._line||"ATT"),portrait:ze(H),job:H.job})),T=[...o.log||[]];T.push({type:"duel",isGoal:w,homeScored:w&&v===i,text:w?`⚽ BUT de ${o[v+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:A,aiPlayers:g.map(H=>({name:H.name,note:ve(H,H._line||"DEF"),portrait:ze(H),job:H.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const F=w?(o[v+"Score"]||0)+1:o[v+"Score"]||0,R={...o,[i+"Team"]:u,[v+"Score"]:F},W=$e(R),ce=W?"finished":_+"-attack",J=async()=>{await Q({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],[v+"Score"]:F,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:ce,attacker:_,round:L,log:T}),(ce==="finished"||W)&&await Re({...o,[v+"Score"]:F})};if(w){const H=v===i,V=H?F:o[i+"Score"]||0,ee=H?o[r+"Score"]||0:F;N.add(L),xe(A,V,ee,H,J)}else await J()}function ke(u){return["MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function Se(u){return["GK","DEF","MIL","ATT"].some(g=>(u[g]||[]).some(h=>!h.used))}function Ee(u){return Se(u)&&!ke(u)}function Te(u){const g=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!Se(h)&&Ee(g))}function $e(u){const g=["MIL","ATT"].some(T=>(u.p1Team[T]||[]).some(F=>!F.used)),h=["MIL","ATT"].some(T=>(u.p2Team[T]||[]).some(F=>!F.used)),y=Se(u.p1Team),v=Se(u.p2Team);return!g&&!(!v&&y)&&(!h&&!(!y&&v))}function De(u){const g=u.p1Score||0,h=u.p2Score||0;return g===h?null:g>h?x.home_id:x.away_id}async function Re(u){try{const g=De(u),h=g?x.home_id===g?x.away_id:x.home_id:null;await $.from("matches").update({status:"finished",winner_id:g,home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n),g&&h&&Pi(g,h).catch(()=>{})}catch(g){console.error("[PvP] finishMatch:",g)}}function k(){var v;const u=o[i+"Score"],g=o[r+"Score"],h=u>g,y=u===g;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{$.removeChannel(P)}catch{}He(e),l("home")})}Z()}const So={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ct(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ii(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Dt(e,t){const a=t?So[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Li(e){const n=Rt(e);return n?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${n}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function zi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function Mo(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:a}=t,{data:c}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let p="buy";const i=()=>{var o,b,E,I,S,N,B;return{name:(((o=document.getElementById("flt-name"))==null?void 0:o.value)||"").toLowerCase().trim(),club:(((b=document.getElementById("flt-club"))==null?void 0:b.value)||"").toLowerCase().trim(),country:(((E=document.getElementById("flt-country"))==null?void 0:E.value)||"").toLowerCase().trim(),job:((I=document.getElementById("flt-job"))==null?void 0:I.value)||"",rarity:((S=document.getElementById("flt-rarity"))==null?void 0:S.value)||"",note1:parseInt((N=document.getElementById("flt-note1"))==null?void 0:N.value)||0,note2:parseInt((B=document.getElementById("flt-note2"))==null?void 0:B.value)||0}};function r(o){const b=i();return o.filter(E=>{var Q,de;const I=(Q=E.card)==null?void 0:Q.player;if(!I)return!1;const S=`${I.firstname} ${I.surname_encoded}`.toLowerCase(),N=(((de=I.clubs)==null?void 0:de.encoded_name)||"").toLowerCase(),B=(I.country_code||"").toLowerCase(),j=ct(I,I.job),P=I.job2?ct(I,I.job2):0;return!(b.name&&!S.includes(b.name)||b.club&&!N.includes(b.club)||b.country&&!B.includes(b.country)||b.job&&I.job!==b.job||b.rarity&&I.rarity!==b.rarity||b.note1&&j<b.note1||b.note2&&P<b.note2)})}function f(o){var N,B,j;const b=(N=o.card)==null?void 0:N.player;if(!b)return"";const E=ct(b,b.job),I=b.job2?ct(b,b.job2):0,S=(n.profile.credits||0)>=o.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Ii(b.rarity)}
      ${Dt(E,b.job)}
      ${Dt(I,b.job2||null)}
      ${Li(b.country_code)}
      ${zi((B=b.clubs)==null?void 0:B.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.firstname} ${b.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((j=o.seller)==null?void 0:j.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${o.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${o.id}" ${S?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${S?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function m(o){var N,B,j;const b=(N=o.card)==null?void 0:N.player;if(!b)return"";const E=ct(b,b.job),I=b.job2?ct(b,b.job2):0,S=o.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${S?"opacity:0.7":""}">
      ${Ii(b.rarity)}
      ${Dt(E,b.job)}
      ${Dt(I,b.job2||null)}
      ${Li(b.country_code)}
      ${zi((B=b.clubs)==null?void 0:B.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.firstname} ${b.surname_encoded}</div>
        <div style="font-size:10px;color:${S?"#22c55e":"#999"};margin-top:1px">
          ${S?`✅ Vendu à ${((j=o.buyer)==null?void 0:j.pseudo)||"—"} · ${o.sold_at?new Date(o.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(o.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${o.price.toLocaleString("fr")}</div>
        ${S?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${o.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const o=document.getElementById("mkt-content"),b=document.getElementById("mkt-filters");if(o){if(b.style.display=p==="buy"?"flex":"none",p==="buy"){const E=r(s);o.innerHTML=E.length?E.map(f).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const E=l.filter(S=>S.status==="active").sort((S,N)=>new Date(N.listed_at)-new Date(S.listed_at)),I=l.filter(S=>S.status==="sold").sort((S,N)=>new Date(N.sold_at||N.listed_at)-new Date(S.sold_at||S.listed_at));o.innerHTML=(E.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${E.length})</div>`+E.map(m).join(""):"")+(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${I.length})</div>`+I.map(m).join(""):"")+(!E.length&&!I.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}o.querySelectorAll("[data-buy]").forEach(E=>E.addEventListener("click",()=>Co(E.dataset.buy,s,e,t))),o.querySelectorAll("[data-cancel]").forEach(E=>E.addEventListener("click",()=>Bo(E.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{p=o.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(b=>{const E=b===o;b.style.background=E?"var(--green)":"#fff",b.style.color=E?"#fff":"var(--gray-600)",b.style.borderColor=E?"var(--green)":"var(--gray-200)"}),x()})});let z;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(o=>{var b;(b=document.getElementById(o))==null||b.addEventListener("input",()=>{clearTimeout(z),z=setTimeout(x,250)})}),x()}async function Co(e,t,n,a){const{state:c,toast:d,refreshProfile:s}=a,l=t.find(r=>r.id===e);if(!l)return;const p=l.price;if((c.profile.credits||0)<p){d("Crédits insuffisants","error");return}jo(l,async()=>{const{error:r}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(r){d("Erreur achat : "+r.message,"error");return}await s();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await fi(n,a)})}function jo(e,t){var s;const n=(s=e.card)==null?void 0:s.player,a=n?`${n.firstname} ${n.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const d=l=>{c.remove(),l&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),c.addEventListener("click",l=>{l.target===c&&d(!1)})}async function Bo(e,t,n){const{toast:a}=n,{data:c}=await $.from("market_listings").select("card_id").eq("id",e).single();if(await $.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:d}=await $.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");d||await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),fi(t,n)}async function Fo(e,{state:t,navigate:n,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function qo(e,{state:t,navigate:n,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(d||[]).filter(r=>r.status==="finished"),p=(d||[]).filter(r=>r.status==="in_progress");function i(r){const f=r.home_id===c.id;f?r.home_score:r.away_score,f?r.away_score:r.home_score;const m=r.winner_id===c.id,x=r.home_score===r.away_score&&r.status==="finished",z=r.status!=="finished"?"…":x?"N":m?"V":"D",o=r.status!=="finished"||x?"#888":m?"#1A6B3C":"#c0392b";let b=s[r.mode]||r.mode;r.away_id===null&&!b.startsWith("IA")&&(b="IA");const I=r.home_id===c.id?r.away:r.home;let S;r.away_id===null?S=b:I?S=`${I.club_name||I.pseudo} (${I.pseudo})`:S="Adversaire";let N="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(N=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const B=new Date(r.created_at),j=B.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+B.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),P=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${S}${N}</div>
        <div style="font-size:11px;color:var(--gray-600)">${b} · ${j}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${P}</span>
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
  </div>`}ln(pn);const Ae={user:null,profile:null,page:"home",params:{}};function kt(e,t="info",n=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},n))}function Do(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ni(){document.getElementById("modal-overlay").classList.add("hidden")}async function Et(){if(!Ae.user)return;const{data:e}=await $.from("users").select("*").eq("id",Ae.user.id).single();e&&(Ae.profile=e)}function Nt(e,t={}){Ae.page=e,Ae.params=t,sn()}async function sn(){var a,c;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===Ae.page)});const t=document.getElementById("nav-credits");t&&Ae.profile&&(t.textContent=`💰 ${(Ae.profile.credits||0).toLocaleString("fr")}`);const n={state:Ae,navigate:Nt,toast:kt,openModal:Do,closeModal:ni,refreshProfile:Et};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ae.page){case"home":await hi(e,n);break;case"collection":await Cn(e,n);break;case"decks":await Zt(e,n);break;case"boosters":await Vn(e,n);break;case"match":{const d=Ae.params&&Ae.params.matchMode||"vs_ai_easy";d==="random"?await rn(e,n):d==="friend"?await Io(e,n,(a=Ae.params)==null?void 0:a.friendId,(c=Ae.params)==null?void 0:c.friendName):await lo(e,n);break}case"market":await Mo(e,n);break;case"rankings":await Fo(e,n);break;case"matches":await qo(e,n);break;case"friends":await hn(e,n);break;default:await hi(e,n)}}function Go(){var a;const e=document.getElementById("app"),t=Ae.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",d=>{d.preventDefault(),Nt(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Nt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Nt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>No())}async function No(){const{data:e}=await $.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const n=(e||[]).map(a=>{const c=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
        ${n||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function Po(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ni()}),document.getElementById("modal-close").addEventListener("click",ni);const{data:{session:e}}=await $.auth.getSession();if(!e){Si(),mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt});return}Ae.user=e.user,await Et(),Si();try{const{data:n}=await $.from("formation_links_overrides").select("formation, links"),a={};(n||[]).forEach(c=>{a[c.formation]=c.links}),cn(a)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!Ae.profile){un(document.getElementById("app"),{state:Ae,navigate:async()=>{await Et(),Jt()},toast:kt,refreshProfile:Et});return}const t=Array.isArray(Ae.profile.pending_boosters)?Ae.profile.pending_boosters:[];if(!Ae.profile.onboarding_done&&t.length>0){oo(document.getElementById("app"),{state:Ae,navigate:()=>Jt(),toast:kt,refreshProfile:Et});return}Jt(),$.auth.onAuthStateChange(async(n,a)=>{n==="SIGNED_OUT"&&(Ae.user=null,Ae.profile=null,document.getElementById("app").innerHTML="",mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt}))})}function Ro(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Yt(){const e=document.getElementById("app");e&&(e.style.height=Ro()+"px")}window.addEventListener("resize",Yt);window.addEventListener("orientationchange",()=>setTimeout(Yt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Yt);function Jt(){const e=()=>{var n;(n=Ae.user)!=null&&n.id&&$.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ae.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Yt(),Go(),sn()}function Si(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function dn(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}Po().catch(e=>{console.error("Échec du démarrage:",e),dn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&dn("Le serveur met trop de temps à répondre.")},12e3);
