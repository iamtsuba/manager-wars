import{s as _,F as oi,h as zt,j as Mi,l as Ze,i as dn,k as ln,b as cn}from"./formation-links-CEzN0rcz.js";function xi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,d=document.getElementById("login-error");if(d.textContent="",!a||!p){d.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:l}=await _.auth.signInWithPassword({email:a,password:p});if(s.textContent="Se connecter",s.disabled=!1,l){d.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,d=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!p||!d){s.textContent="Remplissez tous les champs.";return}if(p.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==d){s.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await _.auth.signUp({email:a,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,c){s.textContent=c.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function pn(e,{state:t,navigate:n,toast:a,refreshProfile:p}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function l(){var k;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),f=((k=document.getElementById("setup-club"))==null?void 0:k.value)||"MW",x=f.trim().split(" ").filter(Boolean),g=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=s,i.style.borderColor=d),r&&(r.textContent=g,r.style.color=d)}document.getElementById("color1").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch1").style.background=d,l()}),document.getElementById("color2").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch2").style.background=s,l()});function c(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await _.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await _.from("users").select("id").eq("club_name",i).maybeSingle();if(f){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),x=document.getElementById("step3-finish");f.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:g}=await _.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:d,club_color2:s,credits:1e4});if(g)throw g;await un(t.user.id),await p(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function un(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await _.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const fn="modulepreload",gn=function(e){return"/manager-wars/"+e},yi={},mn=function(t,n,a){let p=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));p=Promise.allSettled(n.map(c=>{if(c=gn(c),c in yi)return;yi[c]=!0;const i=c.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${r}`))return;const f=document.createElement("link");if(f.rel=i?"stylesheet":fn,i||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),i)return new Promise((x,g)=>{f.addEventListener("load",x),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function d(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return p.then(s=>{for(const l of s||[])l.status==="rejected"&&d(l.reason);return t().catch(d)})},Tt="#1A6B3C",It="#cc2222",xn="#D4A017",hi="#888";async function yn(e,t){const{state:n,toast:a}=t;e.innerHTML=`
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
    </div>`,await Si(n,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>bn(n,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ci(n,a,null,t))}async function Si(e,t,n={}){const{navigate:a}=n,p=e.user.id,{data:d,error:s}=await _.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${p},addressee_id.eq.${p}`),{count:l}=await _.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",p).eq("status","pending"),c=document.getElementById("pending-badge");c&&(l>0?(c.style.display="flex",c.textContent=l):c.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(s){console.error("[Friends] Erreur:",s),i.innerHTML=`<div style="color:${It};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const r=(d||[]).map(g=>g.requester_id===p?g.addressee_id:g.requester_id);let f={};if(r.length){const{data:g}=await _.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(g||[]).forEach(k=>{f[k.id]=k})}const x=(d||[]).map(g=>({friendshipId:g.id,friend:f[g.requester_id===p?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!x.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:g,friend:k})=>hn(k,g)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>vn(e,g.dataset.stats,g.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",()=>{const k=g.dataset.friendId,o=g.dataset.friendName;console.log("[Friends] clic match",{fid:k,fname:o,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:k,friendName:o}):t("Erreur navigation","error")})})}function hn(e,t){const n=e.club_name||e.pseudo||"?",a=e.pseudo||"",p=(a||n).slice(0,2).toUpperCase(),d=e.club_color2||Tt,s=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,c=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${p}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${c?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${c?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${c?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${n}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${n}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${xn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function bn(e,t){const n=ri();n.innerHTML=`
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
    ${ai()}`,document.body.appendChild(n);const a=n.querySelector("#friend-pseudo-input"),p=n.querySelector("#add-friend-error"),d=()=>n.remove();a.focus(),n.querySelector("#add-cancel").addEventListener("click",d),n.addEventListener("click",s=>{s.target===n&&d()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await _.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await _.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(c){const r=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=r;return}const{error:i}=await _.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}d(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Ci(e,t,n=null,a={}){const p=e.user.id,{data:d}=await _.from("friendships").select("id, requester_id").eq("addressee_id",p).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(x=>x.requester_id);let l={};if(s.length){const{data:x}=await _.from("users").select("id, pseudo, club_name").in("id",s);(x||[]).forEach(g=>{l[g.id]=g})}const c=(d||[]).map(x=>({...x,requester:l[x.requester_id]||{pseudo:"?"}})),i=ri(),r=c||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(x=>{var g,k,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=x.requester)==null?void 0:g.club_name)||((k=x.requester)==null?void 0:k.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((o=x.requester)==null?void 0:o.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Tt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${It};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",x=>{x.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:g}=await _.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}x.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Si(e,t,a),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await _.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function vn(e,t,n){const a=e.user.id,[p,d]=[a,t].sort(),s=a===p,{data:l}=await _.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",d).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},r=s?i.wins_p1||0:i.wins_p2||0,f=s?i.wins_p2||0:i.wins_p1||0,x=i.draws||0,g=s?i.goals_p1||0:i.goals_p2||0,k=s?i.goals_p2||0:i.goals_p1||0,o=s?i.gc_used_p1||0:i.gc_used_p2||0,$=s?i.gc_used_p2||0:i.gc_used_p1||0,L=i.matches_total||0,z=(K,q,j,P=Tt,te=It)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${P}">${q}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${K}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${te}">${j}</div>
    </div>`,F=ri();F.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${n}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      </div>
      ${L===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${z("Victoires",r,f)}
        ${z("Nuls",x,x,hi,hi)}
        ${z("Défaites",f,r)}
        ${z("Buts marqués",g,k)}
        ${z("Buts encaissés",k,g,It,Tt)}
        ${z("GC utilisés ⚡",o,$,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${L} match${L>1?"s":""} joué${L>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(F),F.querySelector("#stats-close").addEventListener("click",()=>F.remove()),F.addEventListener("click",K=>{K.target===F&&F.remove()})}function ri(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ai(){return`
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
        background:${Tt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function wn({player1Id:e,player2Id:t,score1:n,score2:a,gc1:p,gc2:d}){const[s,l]=[e,t].sort(),c=e!==s,i=c?a:n,r=c?n:a,f=c?d:p,x=c?p:d,g=i>r?1:0,k=r>i?1:0,o=i===r?1:0,{data:$}=await _.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",l).single();$?await _.from("friend_match_stats").update({wins_p1:$.wins_p1+g,wins_p2:$.wins_p2+k,draws:$.draws+o,goals_p1:$.goals_p1+i,goals_p2:$.goals_p2+r,gc_used_p1:$.gc_used_p1+f,gc_used_p2:$.gc_used_p2+x,matches_total:$.matches_total+1}).eq("player1_id",s).eq("player2_id",l):await _.from("friend_match_stats").insert({player1_id:s,player2_id:l,wins_p1:g,wins_p2:k,draws:o,goals_p1:i,goals_p2:r,gc_used_p1:f,gc_used_p2:x,matches_total:1})}const _n="2026.06.29-1418";async function bi(e,{state:t,navigate:n,toast:a}){var d,s;const p=t.profile;p&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${_n}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),n(l.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>n("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){An(n);return}if(c==="match-random"){n("match",{matchMode:"random"});return}if(c==="match-friend"){n("friends");return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()}),Bi(t,a),En(t,a,n),ji(t,a,n))}async function ji(e,t,n){const a=document.getElementById("ongoing-match-banner");if(!a)return;const p=e.profile.id,{data:d}=await _.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${p},away_id.eq.${p}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(c=>c.home_id===p?c.away_id:c.home_id).filter(Boolean);let l={};if(s.length){const{data:c}=await _.from("users").select("id, pseudo, club_name").in("id",s);(c||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}a.innerHTML=d.map(c=>{const i=c.home_id===p?c.away_id:c.home_id,r=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${c.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${c.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${c.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",async()=>{const{resumePvpMatch:i}=await mn(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>Ao);return{resumePvpMatch:f}},void 0),r=document.getElementById("page-content")||document.getElementById("app");i(r,{state:e,navigate:n,toast:t,openModal:null,closeModal:null,refreshProfile:null},c.dataset.resume)})}),a.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{kn(async()=>{await $n(c.dataset.abandon,c.dataset.opp,p),t("Match abandonné (défaite 3-0)","info"),ji(e,t,n)})})})}async function $n(e,t,n){const{data:a}=await _.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const p=a.home_id===n,d=p?0:3,s=p?3:0,l=a.game_state||{};l.p1Score=d,l.p2Score=s,l.phase="finished",l.forfeit=!0,await _.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:l}).eq("id",e)}function kn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function En(e,t,n){var l,c,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:p}=await _.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){a.innerHTML="";return}const d=((l=p.inviter)==null?void 0:l.club_name)||((c=p.inviter)==null?void 0:c.pseudo)||"?",s=p.inviter_id;a.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",n("match",{matchMode:"friend",friendId:s,friendName:d})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await _.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),a.innerHTML="",t("Invitation refusée","info")})}async function Bi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:a,error:p}=await _.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(a!=null&&a.length)){n.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(c=>{var i;return((i=c.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=d>2?` +${d-2}`:"";n.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Ci(e,t,()=>Bi(e,t))})}function An(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const a=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",a),n.addEventListener("click",p=>{p.target===n&&a()}),n.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{a(),e("match",{matchMode:p.dataset.mode})})})}const Ne={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function we(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const vi=["ATT","MIL","DEF","GK"];function Fi(e){let t=0;const n=e.length;for(let a=0;a<n;a++)for(let p=a+1;p<n;p++){const d=e[a],s=e[p];if(!d||!s)continue;const l=d._col!=null&&s._col!=null&&d._col===s._col,c=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,i=vi.indexOf(d._line||d.job),r=vi.indexOf(s._line||s.job),f=Math.abs(i-r)===1;if(!((d._line||d.job)===(s._line||s.job)&&c||l&&f))continue;const k=d.country_code&&s.country_code&&d.country_code===s.country_code,o=d.club_id&&s.club_id&&d.club_id===s.club_id;k&&o?t+=2:(k||o)&&(t+=1)}return t}function Rt(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;return d+(Number(l==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=Fi(e);let p=n+a;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:n,links:a,total:Math.max(0,p)}}function Ot(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;let c=0;return l==="GK"?c=Number(s.note_g)||0:l==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0,d+c+(s.boost||0)},0),a=Fi(e);let p=n+a;return t.stolenNote&&(p-=t.stolenNote),{base:n,links:a,total:Math.max(0,p)}}function Ht(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function qi(e,t,n="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const p=[...a].sort((s,l)=>{const c=t==="attack"?we(s,"ATT"):s._line==="GK"?we(s,"GK"):we(s,"DEF");return(t==="attack"?we(l,"ATT"):l._line==="GK"?we(l,"GK"):we(l,"DEF"))-c});let d=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(d,p.length,3))}function Tn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const In={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Di(e,t){const n=e.player;if(!n)return 0;const a=n.rarity;if(a!=="pepite"&&a!=="papyte")return Number(n[t])||0;const p=Gi(n),d=Number(n[t])||0;if(d<=0)return 0;const s=n.note_min??1,l=n.note_max??10,i=(e.current_note??p)-p;return Math.min(l,Math.max(s,d+i))}function Gi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ni(e,t){!e||!t||await Promise.all([wi(e,"win"),wi(t,"loss")])}async function wi(e,t){const{data:n}=await _.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(n!=null&&n.length))return;const a=n.filter(p=>{var d,s;return((d=p.player)==null?void 0:d.rarity)==="pepite"||((s=p.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(p=>{const d=In[p.player.rarity],s=t==="win"?d.win:d.loss,l=p.player.note_min??1,c=p.player.note_max??10,i=Gi(p.player),r=p.current_note??i,f=Math.min(c,Math.max(l,r+s));return _.from("cards").update({current_note:f}).eq("id",p.id)}))}const Pi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Et={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},jt=["GK","DEF","MIL","ATT"],Ln=["Tous","GK","DEF","MIL","ATT"],zn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function _i(e){const t=e.player;if(!t)return null;const n=t.rarity;return(n==="pepite"||n==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Mn(e){return e.length?e.reduce((t,n)=>_i(n)>_i(t)?n:t,e[0]):e[0]}function Ri(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const si={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Oi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Lt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var x,g;const n=e.player;if(!n)return"";const a=n.job||"ATT",p=Et[a],d=Pi[n.rarity]||"#ccc",s=n.rarity==="pepite"||n.rarity==="papyte",l=s&&e.current_note!=null?e.current_note:Lt(n,a),c=n.job2?s?Di(e,Ri(n.job2)):Lt(n,n.job2):null,i=n.job2?Et[n.job2]:null,r=Oi(n),f=si[n.country_code]||n.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${p}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${p}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${c!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${i}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${c}</text>
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
        ${(x=n.clubs)!=null&&x.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=n.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function $i(e){const t=e.job||"ATT",n=Lt(e,t),a=si[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Sn(e,t){const{state:n,navigate:a,toast:p,openModal:d,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await _.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await _.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(R=>R.card_type==="player"&&R.player),r=(l||[]).filter(R=>R.card_type==="game_changer"),f=(l||[]).filter(R=>R.card_type==="formation"),{data:x}=await _.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(x||[]).forEach(R=>{g[R.name]=R});const k=Object.keys(oi),o=Object.keys(Ne),$={};i.forEach(R=>{const O=R.player.id;$[O]=($[O]||0)+1}),new Set(Object.keys($).map(R=>String(R)));const L=new Set(f.map(R=>R.formation)),z=new Set(r.map(R=>R.gc_type));let F="player",K="Tous",q="",j=!1;function P(){return[...i].sort((R,O)=>{const S=jt.indexOf(R.player.job),B=jt.indexOf(O.player.job);return S!==B?S-B:(R.player.surname_encoded||"").localeCompare(O.player.surname_encoded||"")})}function te(){return[...c||[]].sort((R,O)=>{const S=jt.indexOf(R.job),B=jt.indexOf(O.job);return S!==B?S-B:(R.surname_encoded||"").localeCompare(O.surname_encoded||"")})}function ce(){return P().filter(R=>{const O=R.player,S=K==="Tous"||O.job===K,B=!q||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(q);return S&&B})}function re(){return te().filter(R=>{const O=K==="Tous"||R.job===K,S=!q||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(q);return O&&S})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="player"?"var(--green)":"transparent"};
        color:${F==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="formation"?"var(--green)":"transparent"};
        color:${F==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="gc"?"var(--green)":"transparent"};
        color:${F==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function M(){const R=document.getElementById("col-filters");R&&(F==="player"?(R.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${q}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Ln.map(O=>`
            <button class="filter-btn" data-job="${O}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${O===K?"var(--green)":"var(--gray-200)"};
                background:${O===K?"var(--green)":"#fff"};
                color:${O===K?"#fff":"var(--gray-600)"}">
              ${O}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",O=>{q=O.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(O=>{O.addEventListener("click",()=>{K=O.dataset.job,M(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})):(R.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})))}function Y(){const R=document.getElementById("col-grid");R&&(F==="player"?he(R):F==="formation"?xe(R):ge(R))}function ne(R,O,S,B,U){const ie=document.getElementById("col-grid"),ee=document.getElementById("col-big");if(!ie||!ee)return;var ke=0;function _e(){const $e=window.innerWidth>=768,Me=document.getElementById("col-big"),Te=document.getElementById("col-grid");$e&&Me&&(Me.style.minHeight="420px",Me.style.flex="1 1 auto"),$e&&Te&&(Te.style.height="200px",Te.style.flexShrink="0",Te.style.overflowX="auto",Te.style.overflowY="hidden"),ee.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+O(R[ke])+"</div>";var Ae=ee.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Ae&&Ae.addEventListener("click",function(){B(R[ke])}),requestAnimationFrame(function(){var Ee=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Ee||!ee)){var Ce=ee.clientHeight-8,Pe=ee.clientWidth-24,E=Ee.offsetHeight,u=Ee.offsetWidth;if(E>0&&u>0&&Ce>40){var m=$e?2.2:1,h=Math.min(Ce/E,Pe/u,m);Ee.style.transform="scale("+h.toFixed(3)+")",Ee.style.transformOrigin="top center"}}}),ie.innerHTML=R.map(function(Ee,Ce){var Pe=Ce===ke?"border:2px solid rgba(255,255,255,0.9);box-shadow:0 0 8px rgba(255,255,255,0.6);border-radius:6px;":"border:2px solid transparent;border-radius:6px;";return'<div class="col-mini-item" data-idx="'+Ce+'" style="flex-shrink:0;cursor:pointer;'+Pe+'transition:border-color .15s;overflow:hidden">'+S(Ee,Ce===ke)+"</div>"}).join(""),ie.querySelectorAll(".col-mini-item").forEach(function(Ee){Ee.addEventListener("click",function(){ke=Number(Ee.dataset.idx),_e(),Ee.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function D(R){var O=.54,S=Math.round(140*O),B=Math.round(310*O),U;if(!R||R._fake){var ie=R?R.player:null;if(!ie)return"";U=$i(ie)}else U=Vt(R,"");return'<div style="width:'+S+"px;height:"+B+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+O+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+U+"</div></div>"}function Q(R,O,S){O=O||100,S=S||140;var B=zt[R]||{},U={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ie=Math.max(3,Math.round(O*.06)),ee=Object.entries(B).map(function(_e){var $e=_e[0],Me=_e[1],Te=$e.replace(/\d+$/,""),Ae=U[Te]||"#888",Ee=Math.round(Me.x*O),Ce=Math.round(Me.y*S);return'<circle cx="'+Ee+'" cy="'+Ce+'" r="'+ie+'" fill="'+Ae+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ke=Math.max(1,Math.round(O/50));return'<svg viewBox="0 0 '+O+" "+S+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+O+'" height="'+S+'" fill="#1A6B3C"/><rect x="'+Math.round(O*.2)+'" y="'+Math.round(S*.02)+'" width="'+Math.round(O*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ke+'"/><line x1="0" y1="'+Math.round(S*.5)+'" x2="'+O+'" y2="'+Math.round(S*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ke+'"/><ellipse cx="'+Math.round(O*.5)+'" cy="'+Math.round(S*.5)+'" rx="'+Math.round(O*.18)+'" ry="'+Math.round(S*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ke+'"/><rect x="'+Math.round(O*.2)+'" y="'+Math.round(S*.82)+'" width="'+Math.round(O*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ke+'"/>'+ee+"</svg>"}function ae(R,O,S){var B=S>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+S+"</div>":"",U=O?'data-form-id="'+O.id+'"':"",ie=R.length>7?14:R.length>5?16:19,ee=!!O;return"<div "+U+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ee?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ee?"":"filter:grayscale(1);opacity:0.5")+'">'+B+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ee?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ie+"px;font-weight:900;color:"+(ee?"#1A6B3C":"#aaa")+';line-height:1">'+R+'</div></div><div style="flex:1;overflow:hidden;background:'+(ee?"#1A6B3C":"#ccc")+'">'+Q(R,140,220)+"</div></div>"}function pe(R,O){var S=.54,B=Math.round(140*S),U=Math.round(305*S),ie=Math.round(U*.22),ee=U-ie,ke=R.length>7?5:7,_e=Q(R,B,ee),$e=O?"1.5px solid #2a7a40":"1px solid #ddd",Me=O?"":"filter:grayscale(1);opacity:0.45;",Te=O?"#1A6B3C":"#bbb",Ae="#fff";return'<div style="width:'+B+"px;height:"+U+"px;border-radius:6px;border:"+$e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Me+'"><div style="height:'+ie+"px;background:"+Te+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ke+"px;font-weight:900;color:"+Ae+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(B-4)+'px">'+R+'</span></div><div style="height:'+ee+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div>"}function he(R){if(j){const O=re();if(!O.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const S=O.map(B=>i.find(U=>U.player.id===B.id)||{_fake:!0,player:B,id:"fake-"+B.id});ne(S,B=>B._fake?$i(B.player):Vt(B,""),B=>B._fake?D({player:B.player,id:"x",_fake:!0}):D(B),B=>{B._fake||ki(B,i,$,t)})}else{const O=ce();if(!O.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const S={};O.forEach(U=>{const ie=U.player.id;S[ie]||(S[ie]=[]),S[ie].push(U)});const B=Object.values(S).map(U=>Mn(U));ne(B,U=>{const ie=$[U.player.id]||1,ee=ie>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ie}</div>`:"",_e=i.filter($e=>$e.player.id===U.player.id&&$e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(U,ee+_e)},U=>D(U),U=>ki(U,i,$,t))}}function xe(R){const O=j?k:[...L];if(!O.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const S=O.map(B=>({formation:B,card:f.find(U=>U.formation===B)||null,owned:L.has(B)}));ne(S,({formation:B,card:U,owned:ie})=>ae(B,ie?U:null,ie?f.filter(ee=>ee.formation===B).length:0),({formation:B,owned:U})=>pe(B,U),({card:B,owned:U})=>{U&&B&&jn(B,f,t,d)})}function ge(R){const O=Object.keys(g),S=j?O.length?O:o:[...z];if(!S.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const B=S.map(U=>({type:U,gc:Ne[U]||{icon:"⚡",desc:""},def:g[U]||null,owned:z.has(U),card:r.find(ie=>ie.gc_type===U)||null}));ne(B,({type:U,gc:ie,def:ee,owned:ke,card:_e})=>{const $e=ke?r.filter(m=>m.gc_type===U).length:0,Me=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",Te=(ee==null?void 0:ee.gc_type)==="ultra_game_changer",Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ee={purple:"#b06ce0",light_blue:"#00d4ef"},Ce=Ae[ee==null?void 0:ee.color]||Ae.purple,Pe=Ee[ee==null?void 0:ee.color]||Ee.purple,E=(ee==null?void 0:ee.effect)||ie.desc||"",u=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null;return ke&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${U}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Pe};background:${Ce};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Pe}66;cursor:pointer">
          ${Me}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${U.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${U}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Te?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${u?`<img src="${u}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ie.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${E.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${U}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ie.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:U,gc:ie,def:ee,owned:ke})=>ke?(()=>{const _e=Math.round(75.60000000000001),$e=Math.round(310*.54),Me=Math.round($e*.65),Te=Math.round($e*.18),Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ee={purple:"#9b59b6",light_blue:"#00bcd4"},Ce=Ae[ee==null?void 0:ee.color]||Ae.purple,Pe=Ee[ee==null?void 0:ee.color]||Ee.purple,E=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null;return`<div style="width:${_e}px;height:${$e}px;border-radius:8px;background:${Ce};border:1px solid ${Pe};display:flex;flex-direction:column;overflow:hidden"><div style="height:${Te}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${_e-6}px">${U}</span></div><div style="height:${Me}px;display:flex;align-items:center;justify-content:center">${E?`<img src="${E}" style="max-width:${_e-8}px;max-height:${Me-4}px;object-fit:contain">`:`<span style="font-size:24px">${ie.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((ee==null?void 0:ee.effect)||ie.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const _e=Math.round(75.60000000000001),$e=Math.round(310*.54);return`<div style="width:${_e}px;height:${$e}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ie.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${U}</span></div>`})(),({type:U,owned:ie,def:ee})=>{ie&&Cn(U,ee,d)})}e.querySelectorAll(".col-tab-btn").forEach(R=>{R.addEventListener("click",()=>{F=R.dataset.tab,K="Tous",q="",j=!1,e.querySelectorAll(".col-tab-btn").forEach(O=>{const S=O.dataset.tab===F;O.style.borderBottomColor=S?"var(--green)":"transparent",O.style.color=S?"var(--green)":"var(--gray-600)"}),M(),Y()})}),M(),Y()}function Cn(e,t,n){const a=Ne[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[t==null?void 0:t.color]||d.purple,c=s[t==null?void 0:t.color]||s.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${c};
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bt=1e3;function jn(e,t,n,a){var k,o,$;const{state:p,toast:d,closeModal:s,navigate:l,refreshProfile:c}=n,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const L=zt[i]||{},z=oi[i]||[],F=290,K=360,q=20;function j(te){const ce=L[te];return ce?{x:ce.x*F,y:ce.y*K}:null}let P=`<svg width="${F}" height="${K}" viewBox="0 0 ${F} ${K}" xmlns="http://www.w3.org/2000/svg">`;for(const[te,ce]of z){const re=j(te),M=j(ce);!re||!M||(P+=`<line x1="${re.x}" y1="${re.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const te of Object.keys(L)){const ce=j(te);if(!ce)continue;const re=te.replace(/\d+/,""),M=r[re]||"#555";P+=`<circle cx="${ce.x}" cy="${ce.y}" r="${q}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,P+=`<text x="${ce.x}" y="${ce.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return P+="</svg>",P}const x=t.filter(L=>L.formation===i);x.length;const g=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${g?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Bt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(k=document.getElementById("direct-sell-form-btn"))==null||k.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${Bt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const L=x.find(F=>!F.is_for_sale)||x[0];if(!L){d("Aucune carte à vendre","error");return}await _.from("market_listings").delete().eq("card_id",L.id),await _.from("transfer_history").delete().eq("card_id",L.id);const{error:z}=await _.from("cards").delete().eq("id",L.id);if(z){d(z.message,"error");return}await _.from("users").update({credits:(p.profile.credits||0)+Bt}).eq("id",p.profile.id),await c(),d(`+${Bt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(o=document.getElementById("market-sell-form-btn"))==null||o.addEventListener("click",async()=>{const L=parseInt(document.getElementById("sell-price-form").value);if(!L||L<1){d("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:L}).eq("id",e.id),await _.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:L}),d("Carte mise en vente sur le marché !","success"),s(),l("collection")}),($=document.getElementById("cancel-sell-form-btn"))==null||$.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),l("collection")})}async function ki(e,t,n,a){var ae,pe,he,xe,ge,R,O;const{state:p,toast:d,openModal:s,closeModal:l,navigate:c,refreshProfile:i}=a,r=e.player,f=t.filter(S=>S.player.id===r.id),x=f.length,g=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0),k=r.rarity||"normal",{data:o}=await _.from("sell_price_configs").select("*").eq("rarity",k).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1),$=((ae=o==null?void 0:o[0])==null?void 0:ae.price)??zn[k]??1e3,L=r.rarity!=="legende",z=Oi(r),F=(r.rarity==="pepite"||r.rarity==="papyte")&&e.current_note!=null?e.current_note:Lt(r,r.job),K=r.rarity==="pepite"||r.rarity==="papyte",q=r.job2?K?Di(e,Ri(r.job2)):Lt(r,r.job2):null,j=Et[r.job]||"#1A6B3C",P=r.job2?Et[r.job2]:null,te=Pi[r.rarity]||"#ccc",ce=si[r.country_code]||r.country_code||"",re=f.map(S=>S.id);let M={};if(re.length){const{data:S}=await _.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(S||[]).forEach(B=>{M[B.card_id]||(M[B.card_id]=[]),M[B.card_id].push(B)})}const Y=S=>{const B=S.transferred_at?new Date(S.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",U=S.source==="booster"?"Booster":S.price?S.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${S.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${S.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${U}</div>
        <div style="font-size:11px;color:var(--gray-600)">${B}</div>
      </div>
    </div>`},ne=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${x>1?`(${x})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((S,B)=>{const U=M[S.id]||[],ie=S.is_for_sale,ee=U.length?U[U.length-1]:null,_e=(r.rarity==="pepite"||r.rarity==="papyte")&&S.current_note!=null?` (☆${S.current_note})`:"";return`
            <div data-card-id="${S.id}" data-card-idx="${B}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${ie?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${S.id}" ${ie?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${B+1}${_e}${ie?" 🏷️ En vente":""}</div>
                  ${ee?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ee.club_name} · ${ee.source==="booster"?"Booster":ee.price?ee.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${B}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${U.length?`${U.length} club${U.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${B}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${U.map(Y).join("")}
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${$.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${L?`
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${te};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${j}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${j}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${F}</text>
            </svg>
            ${q!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${P}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${z?`<img src="${z}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${ce}</div>
            ${(pe=r.clubs)!=null&&pe.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((he=r.clubs)==null?void 0:he.encoded_name)||"").slice(0,6)}</div>`}
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
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([S,B])=>{const U=Et[S],ie=Number(B)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${U}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${S}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${x}</div>
        </div>
      </div>
    </div>
    ${ne}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",l);let D=new Set;const Q=()=>{const S=D.size,B=document.getElementById("sell-action-panel");B&&(B.style.display=S>0?"block":"none",document.getElementById("sell-selected-count").textContent=S,document.getElementById("sell-direct-total").textContent=(S*$).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(S=>{S.addEventListener("change",()=>{const B=S.dataset.id;S.checked?D.add(B):D.delete(B);const U=S.closest(".exemplaire-row");U&&(U.style.borderColor=S.checked?"#1A6B3C":"#eee"),Q()})}),document.querySelectorAll(".exemplaire-row").forEach(S=>{S.addEventListener("click",B=>{if(B.target.closest("button")||B.target.tagName==="INPUT")return;const U=S.querySelector(".expl-check");U&&!U.disabled&&(U.checked=!U.checked,U.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(S=>{S.addEventListener("click",B=>{B.stopPropagation();const U=document.querySelector(`.expl-hist[data-hist="${S.dataset.idx}"]`);U&&(U.style.display=U.style.display==="none"?"flex":"none")})}),(ge=document.getElementById("direct-sell-btn"))==null||ge.addEventListener("click",async()=>{const S=[...D];if(!S.length)return;const B=S.length*$;if(!confirm(`Vendre ${S.length} carte${S.length>1?"s":""} ${r.surname_encoded} pour ${B.toLocaleString("fr")} crédits ? Action irréversible.`))return;await _.from("market_listings").delete().in("card_id",S),await _.from("transfer_history").delete().in("card_id",S);const{error:U}=await _.from("cards").delete().in("id",S);if(U){d(U.message,"error");return}await _.from("users").update({credits:(p.profile.credits||0)+B}).eq("id",p.profile.id),await i();const ie=document.getElementById("nav-credits");ie&&(ie.textContent=`💰 ${(p.profile.credits||0).toLocaleString("fr")}`),d(`+${B.toLocaleString("fr")} crédits ! ${S.length} carte${S.length>1?"s":""} vendue${S.length>1?"s":""}.`,"success"),l(),c("collection")}),(R=document.getElementById("market-sell-btn"))==null||R.addEventListener("click",async()=>{var ke;const S=[...D];if(!S.length){d("Sélectionne au moins un exemplaire","warning");return}const B=parseInt((ke=document.getElementById("sell-market-price"))==null?void 0:ke.value);if(!B||B<1){d("Prix invalide","error");return}const{error:U}=await _.from("cards").update({is_for_sale:!0,sale_price:B}).in("id",S);if(U){d(U.message,"error");return}const ie=S.map(_e=>({seller_id:p.profile.id,card_id:_e,price:B,status:"active"})),{error:ee}=await _.from("market_listings").insert(ie);ee&&console.warn("[Market] insert listings:",ee.message),d(`${S.length} carte${S.length>1?"s":""} mise${S.length>1?"s":""} en vente à ${B.toLocaleString("fr")} cr. chacune !`,"success"),l(),c("collection")}),(O=document.getElementById("cancel-sell-btn"))==null||O.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),l(),c("collection")})}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ut(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Hi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ui(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Bn(e,t=44,n=58){var g;const a=e?Ut(e):null,p=e?Ui(e):null,d=Hi(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",l=rt[s]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(n*.19),f=Math.round(n*.25),x=n-r-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${x}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Xt(e,t){const{state:n,navigate:a,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await _.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:l,error:c}=await _.from("decks").insert({owner_id:n.profile.id,name:s}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),Ei(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Ei(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",s.dataset.name);if(!l||l===s.dataset.name)return;const{error:c}=await _.from("decks").update({name:l}).eq("id",s.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Xt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await _.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:l}=await _.from("decks").delete().eq("id",s.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Xt(e,t)})})}async function Ei(e,t,n){const{state:a,toast:p}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await _.from("decks").select("*").eq("id",e).single(),{data:s}=await _.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(s||[]).filter(g=>g.card_type==="player"&&g.player),c=(s||[]).filter(g=>g.card_type==="formation"),i=c.map(g=>g.formation).filter(Boolean),{data:r}=await _.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=d.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const x={deckId:e,name:d.name,formation:f,formationCardId:d.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:i};(r||[]).forEach(g=>{g.is_starter?x.slots[g.position]=g.card_id:x.subs.includes(g.card_id)||x.subs.push(g.card_id)}),pt(t,x,n)}function pt(e,t,n){var c;const{navigate:a}=n;Gt[t.formation];const p=Ai(t.formation),d=p.filter(i=>t.slots[i]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Gt),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${Bn(r,44,58)}
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
  </div>`,Fn(e,t,p,n),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=Ai(t.formation),f={};r.forEach(x=>{t.slots[x]&&(f[x]=t.slots[x])}),t.slots=f,pt(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Gn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),pt(e,t,n)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Dn(t,e,n)})}function Fn(e,t,n,a){const p=e.querySelector("#deck-field");if(!p)return;const d=zt[t.formation]||{},s=Mi(t.formation)||[],l={};for(const L of n){const z=t.slots[L],F=z?t.playerCards.find(K=>K.id===z):null;l[L]=F?F.player:null}const c=300,i=300,r=48,f=64,x=13,g=16,k=38;function o(L){const z=d[L];return z?{x:z.x*c,y:z.y*i}:null}let $="";for(const[L,z]of s){const F=o(L),K=o(z);if(!F||!K)continue;const q=l[L]?{...l[L],club_id:l[L].club_id,country_code:l[L].country_code,rarity:l[L].rarity}:null,j=l[z]?{...l[z],club_id:l[z].club_id,country_code:l[z].country_code,rarity:l[z].rarity}:null,P=Ze(q,j);P==="#ff3333"||P==="#cc2222"?$+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${K.x.toFixed(1)}" y2="${K.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:($+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${K.x.toFixed(1)}" y2="${K.y.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,$+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${K.x.toFixed(1)}" y2="${K.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const L of n){const z=o(L);if(!z)continue;const F=l[L],K=L.replace(/\d+/,""),q=rt[K]||"#555",j=(z.x-r/2).toFixed(1),P=(z.y-f/2).toFixed(1),te={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[F==null?void 0:F.rarity]||"#aaa";if(F){const ce=Ut(F),re=Ui(F),M=Hi(F.country_code),Y=Number(K==="GK"?F.note_g:K==="DEF"?F.note_d:K==="MIL"?F.note_m:F.note_a)||0,ne=f-x-g;$+=`<defs><clipPath id="dcp-${L}"><rect x="${j}" y="${(z.y-f/2+x).toFixed(1)}" width="${r}" height="${ne}"/></clipPath></defs>`,$+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="${q}"/>`,ce&&($+=`<image href="${ce}" x="${j}" y="${(z.y-f/2+x).toFixed(1)}" width="${r}" height="${ne}" clip-path="url(#dcp-${L})" preserveAspectRatio="xMidYMin slice"/>`),$+=`<rect x="${j}" y="${P}" width="${r}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,$+=`<text x="${z.x.toFixed(1)}" y="${(z.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(F.surname_encoded||"").slice(0,9)}</text>`;const D=(z.y+f/2-g).toFixed(1);$+=`<rect x="${j}" y="${D}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,M&&($+=`<image href="${M}" x="${(z.x-21).toFixed(1)}" y="${(z.y+f/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),$+=`<text x="${z.x.toFixed(1)}" y="${(z.y+f/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,re&&($+=`<image href="${re}" x="${(z.x+r/2-14).toFixed(1)}" y="${(z.y+f/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),$+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="none" stroke="${te}" stroke-width="2"/>`}else $+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,$+=`<text x="${z.x.toFixed(1)}" y="${z.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,$+=`<text x="${z.x.toFixed(1)}" y="${(z.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${K}</text>`;$+=`<rect x="${j}" y="${P}" width="${r}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${L}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-k} ${-k} ${c+k*2} ${i+k*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${$}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(L=>{L.addEventListener("click",()=>qn(L.dataset.pos,t,e,a))})}function qn(e,t,n,a){var x,g,k;const{openModal:p,closeModal:d}=a,s=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(o=>o.id===l):null;(x=c==null?void 0:c.player)==null||x.id;const i=new Set;Object.entries(t.slots).forEach(([o,$])=>{var z;if(o===e||!$)return;const L=t.playerCards.find(F=>F.id===$);(z=L==null?void 0:L.player)!=null&&z.id&&i.add(L.player.id)}),t.subs.forEach(o=>{var L;const $=t.playerCards.find(z=>z.id===o);(L=$==null?void 0:$.player)!=null&&L.id&&i.add($.player.id)});const r=new Set,f=t.playerCards.filter(o=>{const $=o.player;return!($.job===s||$.job2===s)||i.has($.id)||r.has($.id)?!1:(r.add($.id),!0)});f.sort((o,$)=>{const L=s==="GK"?o.player.note_g:s==="DEF"?o.player.note_d:s==="MIL"?o.player.note_m:o.player.note_a;return(s==="GK"?$.player.note_g:s==="DEF"?$.player.note_d:s==="MIL"?$.player.note_m:$.player.note_a)-L}),p(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var K,q;const $=o.player,L=s==="GK"?$.note_g:s==="DEF"?$.note_d:s==="MIL"?$.note_m:$.note_a,z=Ut($),F={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[$.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[s]}">
            ${z?`<img src="${z}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${rt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${$.firstname} ${$.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${$.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${$.country_code}">
              ${(K=$.clubs)!=null&&K.logo_url?`<img src="${$.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((q=$.clubs)==null?void 0:q.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${$.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${rt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${F};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",d),(k=document.getElementById("remove-player"))==null||k.addEventListener("click",()=>{delete t.slots[e],d(),pt(n,t,a)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,d(),pt(n,t,a)})})}function Dn(e,t,n){var c;const{openModal:a,closeModal:p}=n,d=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const r=e.playerCards.find(x=>x.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)}),e.subs.forEach(i=>{var f;const r=e.playerCards.find(x=>x.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)});const s=new Set,l=e.playerCards.filter(i=>{var r,f,x;return d.has((r=i.player)==null?void 0:r.id)||s.has((f=i.player)==null?void 0:f.id)?!1:(s.add((x=i.player)==null?void 0:x.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var g;const r=i.player,f=Ut(r),x=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[r.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((g=r.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${rt[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${x}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),pt(t,e,n)})})}async function Gn(e,t){const{state:n,toast:a,navigate:p}=t,d=e.formationCards.find(c=>c.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await _.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await _.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,i)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:c}=await _.from("deck_cards").insert(l);if(c){a(c.message,"error");return}}a("Deck enregistré ✅","success"),p("decks")}function Ai(e){const t=Gt[e]||Gt["4-4-2"],n=["GK1"];for(let a=1;a<=t.DEF;a++)n.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)n.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)n.push(`ATT${a}`);return n}async function Ki(){const{data:e}=await _.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await _.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(a=>a.booster_id===n.id)}))}function Nn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,p)=>a+Number(p.percentage),0);let n=Math.random()*t;for(const a of e)if(n-=Number(a.percentage),n<=0)return a;return e[e.length-1]}const Vi=()=>Object.keys(zt),Pn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Jt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Rn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const Ti={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},On={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Hn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ii(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Un(e){var r,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",a=Ti[n],p=On[t.rarity]||"#ccc",d=Ii(t,n),s=t.job2?Ii(t,t.job2):null,l=t.job2?Ti[t.job2]:null,c=Rn(t),i=Hn[t.country_code]||t.country_code||"";return`
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${c?`<img src="${c}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Yi(e){var p;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const n=((p=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:p[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Kn(e,{state:t,navigate:n,toast:a}){var s;const p=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await Ki()).map(Yi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}d.length||(d=Pn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${p.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(l=>{const c=l.cost===0||p>=l.cost;return`<div class="booster-card ${c?"":"disabled"}" data-booster="${l.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=d.find(i=>i.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Vn(c,{state:t,toast:a,navigate:n,container:e})}catch(i){a(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const i=d.find(r=>r.id===l.dataset.boosterId);Jn(i)})})}async function Vn(e,{state:t,toast:n,navigate:a,container:p}){var r;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await eo()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await _.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((d||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Qt(t.profile,e);else{const f=e.type||"player";f==="player"?c=await Wi(t.profile,e.cardCount,e.cost):f==="game_changer"?c=await Xi(t.profile,e.cardCount,e.cost):f==="formation"?c=await Ji(t.profile,e.cost):c=await Qt(t.profile,e)}c.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=s.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await _.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Qi(c,e,a)}function Yn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Wn(e,t){let n;switch(t){case"legende":n=e.filter(a=>a.rarity==="legende"),n.length||(n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),n.length||(n=e.filter(a=>tt(a)>=6));break;case"special":n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),n.length||(n=e.filter(a=>tt(a)>=6));break;case"normal_high":n=e.filter(a=>a.rarity==="normal"&&tt(a)>=6),n.length||(n=e.filter(a=>tt(a)>=6));break;default:n=e.filter(a=>a.rarity==="normal"&&tt(a)>=1&&tt(a)<=5),n.length||(n=e.filter(a=>a.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function Qt(e,t){if(t.cost>0){const{error:l}=await _.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await _.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),d=new Set,s=[];for(let l=0;l<(t.cardCount||5);l++){const c=Nn(t.rates);if(c){if(c.card_type==="player"){const i=z=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[z]||z,r=c.rarity?i(c.rarity):null;let f=_.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(f=f.eq("rarity",r));const{data:x}=await f;let g=x||[];if((c.note_min||c.note_max)&&(g=g.filter(z=>{const F=Math.max(Number(z.note_g)||0,Number(z.note_d)||0,Number(z.note_m)||0,Number(z.note_a)||0);return(!c.note_min||F>=c.note_min)&&(!c.note_max||F<=c.note_max)})),g.length||(c.note_min||c.note_max?(g=x||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):g=x||[]),!g.length)continue;let k=g.filter(z=>!d.has(z.id));k.length||(k=g);const o=k[Math.floor(Math.random()*k.length)];d.add(o.id);const $=a.has(o.id),{data:L}=await _.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();L&&(s.push({...L,player:o,isDuplicate:$}),_.rpc("record_transfer",{p_card_id:L.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:i}=await _.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],x=r[Math.floor(Math.random()*r.length)].name,{data:g}=await _.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:x}).select().single();g&&s.push(g)}else if(c.card_type==="formation"){const i=Vi(),r=i[Math.floor(Math.random()*i.length)],f=p.has(r),{data:x}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();x!=null&&x[0]&&s.push({...x[0],isDuplicate:f})}}}return s}async function Wi(e,t,n){if(n>0){const{error:i}=await _.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:a}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=a.filter(i=>i.job==="GK"),d=a.filter(i=>i.job!=="GK"),s=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&s?p:i===0?d:a,f=Yn(),x=Wn(r,f);x&&l.push(x)}s&&await _.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await _.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(c||[]).forEach((i,r)=>{_.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...c[r],player:i}))}async function Xi(e,t,n){const{error:a}=await _.from("users").update({credits:e.credits-n}).eq("id",e.id);if(a)throw a;const{data:p}=await _.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=p!=null&&p.length?p:Object.keys(Jt).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await _.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const f=p==null?void 0:p.find(x=>x.name===r.gc_type||x.id===r.gc_definition_id);return{...r,_gcDef:f||null}})}async function Ji(e,t){const{error:n}=await _.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:a}=await _.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((a||[]).map(r=>r.formation)),d=Vi(),s=d[Math.floor(Math.random()*d.length)],l=p.has(s),{data:c,error:i}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(c||[]).map(r=>({...r,isDuplicate:l}))}function Qi(e,t,n,a=null){var Y,ne;if(!e||e.length===0){const D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",D.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(D),(Y=D.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>D.remove());return}e=[...e].sort((D,Q)=>{const ae=D.player?tt(D.player):-1;return(Q.player?tt(Q.player):-1)-ae});const p=document.createElement("div");p.id="booster-anim-overlay",p.innerHTML=`
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
  `,document.body.appendChild(p);let d=!1;const s=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let c=!1;const i=D=>D.touches&&D.touches[0]?D.touches[0].clientX:D.clientX;function r(D){d||(c=!0,l.style.opacity="1",f(D))}function f(D){if(!c||d)return;const Q=s.getBoundingClientRect(),ae=i(D)-Q.left,pe=Math.max(0,Math.min(1,ae/Q.width));l.style.width=pe*Q.width+"px",pe>=.82&&g()}function x(){d||(c=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{d||(l.style.transition="")},220))}function g(){var Q;if(d)return;d=!0,c=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const D=document.getElementById("cut-hint");D&&(D.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",L(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",f),window.addEventListener("pointerup",x),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",x);let k=0,o=!1;const $=new Set;function L(D){k=D,document.getElementById("reveal-phase").style.display="flex",z(),F(D,0),te()}function z(){const D=document.getElementById("card-dots");D&&(D.innerHTML=e.map((Q,ae)=>`<div class="card-dot" data-i="${ae}" style="width:8px;height:8px;border-radius:50%;background:${ae===k?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),D.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>q(parseInt(Q.dataset.i)))))}function F(D,Q){var B;const ae=e[D],pe=document.getElementById("card-counter"),he=document.getElementById("card-track");pe&&(pe.textContent=`Carte ${D+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=D===e.length-1?"flex":"none");const ge=ae.card_type==="player"&&((B=ae.player)==null?void 0:B.rarity)==="legende",R=!$.has(D);$.add(D);let O=0;if(ae.card_type==="player"&&ae.player){const U=ae.player,ie=U.job||"ATT";O=Number(ie==="GK"?U.note_g:ie==="DEF"?U.note_d:ie==="MIL"?U.note_m:U.note_a)||0}const S=U=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ge?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Xn(ae)}</div>
          ${ae.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ie=document.getElementById("current-card-wrap");Q!==0?(ie.style.transition="none",ie.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{ie.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ie.style.transform="translateX(0)"})):ie.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),U||ge?re():M(),z()};R&&O>6&&ae.card_type==="player"&&ae.player?K(ae,()=>S(!0)):S(!1)}function K(D,Q){var O;o=!0;const ae=D.player,pe=`https://flagsapi.com/${ae.country_code}/flat/64.png`,he=(O=ae.clubs)==null?void 0:O.logo_url,xe=document.getElementById("walkout-overlay"),ge=document.getElementById("walkout-stage");if(!xe||!ge){o=!1,Q();return}xe.style.display="flex";const R=()=>{const S=ge.firstElementChild;S&&(S.classList.remove("wo-in"),S.classList.add("wo-out"))};ge.innerHTML=`<img class="wo-in" src="${pe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(R,2e3),setTimeout(()=>{var S;ge.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((S=ae.clubs)==null?void 0:S.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(R,4450),setTimeout(()=>{xe.style.display="none",ge.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},4900)}function q(D){if(o||D<0||D>=e.length||D===k)return;const Q=D>k?1:-1;k=D,F(D,Q)}function j(){q(k+1)}function P(){q(k-1)}function te(){const D=document.getElementById("card-viewport");if(!D||D._swipeBound)return;D._swipeBound=!0;let Q=0,ae=0,pe=0,he=!1;const xe=B=>B.touches?B.touches[0].clientX:B.clientX,ge=B=>B.touches?B.touches[0].clientY:B.clientY,R=B=>{he=!0,Q=xe(B),ae=ge(B),pe=0},O=B=>{if(!he)return;pe=xe(B)-Q;const U=ge(B)-ae;if(Math.abs(pe)<Math.abs(U))return;const ie=document.getElementById("current-card-wrap");ie&&(ie.style.transition="none",ie.style.transform=`translateX(${pe*.6}px) rotate(${pe*.02}deg)`)},S=()=>{if(!he)return;he=!1;const B=document.getElementById("current-card-wrap"),U=55;pe<=-U&&k<e.length-1?j():pe>=U&&k>0?P():B&&(B.style.transition="transform .2s ease",B.style.transform="translateX(0)")};D.addEventListener("pointerdown",R),D.addEventListener("pointermove",O),D.addEventListener("pointerup",S),D.addEventListener("pointercancel",S),D.addEventListener("touchstart",R,{passive:!0}),D.addEventListener("touchmove",O,{passive:!0}),D.addEventListener("touchend",S),D.addEventListener("click",B=>{if(Math.abs(pe)>8)return;const U=D.getBoundingClientRect();B.clientX-U.left>U.width/2?j():P()})}let ce=null;function re(){const D=document.getElementById("fireworks-canvas");if(!D)return;D.width=window.innerWidth,D.height=window.innerHeight;const Q=D.getContext("2d"),ae=[];function pe(){const xe=Math.random()*D.width,ge=Math.random()*D.height*.6,R=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],O=R[Math.floor(Math.random()*R.length)];for(let S=0;S<60;S++){const B=Math.PI*2/60*S,U=2+Math.random()*5;ae.push({x:xe,y:ge,vx:Math.cos(B)*U,vy:Math.sin(B)*U,alpha:1,color:O,size:2+Math.random()*3})}}pe(),ce=setInterval(pe,600);function he(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,D.width,D.height);for(let xe=ae.length-1;xe>=0;xe--){const ge=ae[xe];if(ge.x+=ge.vx,ge.y+=ge.vy+.08,ge.vy*=.98,ge.alpha-=.018,ge.alpha<=0){ae.splice(xe,1);continue}Q.globalAlpha=ge.alpha,Q.fillStyle=ge.color,Q.beginPath(),Q.arc(ge.x,ge.y,ge.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(ce!==null||ae.length>0)&&requestAnimationFrame(he)}}he()}function M(){ce!==null&&(clearInterval(ce),ce=null);const D=document.getElementById("fireworks-canvas");D&&D.getContext("2d").clearRect(0,0,D.width,D.height)}if(a){const D=document.getElementById("reveal-btns");D&&(D.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ne=document.getElementById("reveal-next"))==null||ne.addEventListener("click",()=>{M(),p.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{M(),p.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{M(),p.remove(),n("boosters")})}function Xn(e){var t,n;if(e.card_type==="player"&&e.player)return Un(e);if(e.card_type==="game_changer"){const a=e._gcDef,p=(a==null?void 0:a.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[a==null?void 0:a.color]||d.purple,c=s[a==null?void 0:a.color]||s.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=Jt[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,x=((n=Jt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${p?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${x}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Jn(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${d[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${p[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Zn="simulation",Zi="VOTRE_ZONE_ID";function eo(){switch(Zn){case"propellerads":return to();case"adsense":return io();default:return di()}}function di(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{n--;const p=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");p&&(p.textContent=n),d&&(d.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(a),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function to(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(di());window.propeller.push({zone_id:Zi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function io(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(di());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Zi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function no(e,{state:t,navigate:n,toast:a,refreshProfile:p}){var x,g;const{data:d}=await _.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((x=t.profile)==null?void 0:x.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await _.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Ki()).find($=>($.name||"").toLowerCase().includes("new player"));o&&(l=Yi(o))}catch(k){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',k)}const c=s.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await _.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function f(){var z;if(i>=c||!s.length){await _.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const k=s[0],{data:o}=await _.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let $=[];try{if(k.type==="formation")$=await Ji(t.profile,0);else if(k.type==="game_changer")$=await Xi(t.profile,k.count||3,0);else if(l&&((z=l.rates)!=null&&z.length)){const F={...l,cost:0,cardCount:k.count||l.cardCount||5};$=await Qt(t.profile,F),k.guaranteeGK&&!t.profile.first_booster_opened&&($.some(q=>q.player&&q.player.job==="GK")||await oo(t.profile,$),await _.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else $=await Wi(t.profile,k.count||5,0)}catch(F){a(F.message||"Erreur ouverture booster","error");return}s.shift(),i++,await r();const L=k.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:k.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${c})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Qi($,L,n,()=>{f()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>f())}async function oo(e,t){try{const{data:n}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const a=n[Math.floor(Math.random()*n.length)],p=t.findIndex(s=>s.player);if(p===-1)return;const d=t[p];await _.from("cards").update({player_id:a.id}).eq("id",d.id),t[p]={...d,player_id:a.id,player:a}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}const ut={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ft={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e,t,n,a,p){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",p)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Zt(e,t){var a,p;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((a=n.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((p=n.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function li(){const e=Math.random()*100;return e<10?3:e<30?2:1}function gt(e,t){const n=ut[t]||ut["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===s).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:s})),c=ot(l.length);l.forEach((i,r)=>{i._col=c[r]}),a[s]=l}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[s];i++){let r=d.findIndex(f=>f.job===s);if(r===-1&&(r=d.findIndex(f=>f.job2===s)),r===-1&&(r=0),d[r]){const f={...d[r],_line:s};l.push(f),d.splice(r,1)}}const c=ot(l.length);l.forEach((i,r)=>{i._col=c[r]}),a[s]=l}return a}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,n){const p=new Set,d=t.filter(r=>{const f=r.gc_type||r.id;return p.has(f)?!1:(p.add(f),!0)});let s=[];function l(r,f){const x=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},k={purple:"#9b59b6",light_blue:"#00bcd4"},o=g[x==null?void 0:x.color]||g.purple,$=k[x==null?void 0:x.color]||k.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":$};background:${o};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((x==null?void 0:x.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(x==null?void 0:x.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${x!=null&&x.image_url?`<img src="/manager-wars/icons/${x.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((x==null?void 0:x.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(r)};function i(){var f,x,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${d.map(k=>{const o=s.find($=>$.gc_type===k.gc_type);return l(k,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(k=>{k.addEventListener("click",()=>{const o=k.dataset.id,$=d.find(z=>z.id===o);if(!$)return;const L=s.findIndex(z=>z.gc_type===$.gc_type);L>-1?s.splice(L,1):s.length<3&&s.push($),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{r&&c(s)}),(x=e.querySelector("#gc-no-gc"))==null||x.addEventListener("click",()=>c([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{s.length&&(s=[],i())})}i()}function ro(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function ao(e,t,n){const{state:a,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await _.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){at(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const s=d.map(r=>r.id),{data:l}=await _.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let c=0;function i(){var z,F,K,q,j;const r=d[c],f=(l||[]).filter(P=>P.deck_id===r.id),x=f.filter(P=>{var te;return P.is_starter&&((te=P.card)==null?void 0:te.player)}).map(P=>Zt(P.card,P.position)),g=f.find(P=>{var te;return((te=P.card)==null?void 0:te.card_type)==="formation"}),k=r.formation||((z=g==null?void 0:g.card)==null?void 0:z.formation)||"4-4-2",o=x.length>=11?gt(x,k):null,$=x.length>=11;Xe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${ro(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${k} · ${x.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===d.length-1?"0.1":"0.3"});color:${c===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(o,k,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${x.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((P,te)=>`<div style="width:7px;height:7px;border-radius:50%;background:${te===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${$?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${$?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${$?"pointer":"default"}">
          ${$?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const te=e.querySelector(".deck-preview-wrap svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(F=document.getElementById("prev-deck"))==null||F.addEventListener("click",()=>{c>0&&(c--,i())}),(K=document.getElementById("next-deck"))==null||K.addEventListener("click",()=>{c<d.length-1&&(c++,i())}),(q=document.getElementById("validate-deck"))==null||q.addEventListener("click",()=>{if(!$)return;const P=t.state.params||{};t.navigate("match",{...P,matchMode:P.matchMode||n,deckId:r.id})}),(j=document.getElementById("cancel-deck-select"))==null||j.addEventListener("click",()=>{He(e),p("home")});const L=document.getElementById("deck-swipe-zone");if(L){let P=0,te=0;L.addEventListener("touchstart",ce=>{P=ce.touches[0].clientX,te=ce.touches[0].clientY},{passive:!0}),L.addEventListener("touchend",ce=>{const re=ce.changedTouches[0].clientX-P,M=ce.changedTouches[0].clientY-te;Math.abs(re)<40||Math.abs(re)<Math.abs(M)||(re<0&&c<d.length-1?(c++,i()):re>0&&c>0&&(c--,i()))},{passive:!0})}}i()}function en(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),p=en(e),d=e._line||e.job||"MIL",s=ft[d]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(we(e,d))||0)+(e.boost||0),i=tn(e==null?void 0:e.country_code),r=Math.round(n*.19),f=Math.round(n*.25),x=n-Math.round(n*.19)-Math.round(n*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${x}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ei(e==null?void 0:e.country_code)?`<img src="${ei(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(p+=Ve(d,40,52),s<a.length-1){const l=Ze(d,a[s+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),p+="</div>",p}function ei(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function tn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,a,p=310,d=310,s=[]){var F;const l=zt[t]||{},c=Mi(t)||oi[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const K of r)(e[K]||[]).forEach((j,P)=>{i[`${K}${P+1}`]=j});function f(K){const q=l[K];return q?{x:q.x*p,y:q.y*d}:null}let x="";for(const[K,q]of c){const j=f(K),P=f(q);if(!j||!P)continue;const te=i[K],ce=i[q],re=Ze(te,ce);re==="#00ff88"||re==="#FFD700"?(x+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,x+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):x+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,k=64,o=13,$=16,L={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[K,q]of Object.entries(i)){const j=f(K);if(!j||!q)continue;const P=K.replace(/[0-9]/g,""),te=ft[P]||"#555",ce=s.includes(q.cardId),re=n==="attack"&&(["MIL","ATT"].includes(P)||ce)&&!q.used||n==="defense"&&["GK","DEF","MIL"].includes(P)&&!q.used,M=a.includes(q.cardId);let Y;n==="attack"?Y=ce?Math.max(1,Number(q.note_a)||0):P==="MIL"?Number(q.note_m)||0:Number(q.note_a)||0:n==="defense"?Y=P==="GK"?Number(q.note_g)||0:P==="MIL"?Number(q.note_m)||0:Number(q.note_d)||0:Y=Number(P==="GK"?q.note_g:P==="DEF"?q.note_d:P==="MIL"?q.note_m:q.note_a)||0,Y=Y+(q.boost||0);const ne=(j.x-g/2).toFixed(1),D=(j.y-k/2).toFixed(1),Q=L[q==null?void 0:q.rarity]||L.normal;if(q.used){const O=typeof import.meta<"u"&&"/manager-wars/"||"/",B=`${typeof window<"u"&&((F=window.location)==null?void 0:F.origin)||""}${O}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");x+=`<rect x="${ne}" y="${D}" width="${g}" height="${k}" rx="5" fill="#161616"/>`,x+=`<image href="${B}" xlink:href="${B}" x="${ne}" y="${D}" width="${g}" height="${k}" preserveAspectRatio="xMidYMid slice"/>`,x+=`<rect x="${ne}" y="${D}" width="${g}" height="${k}" rx="5" fill="none" stroke="${Q}" stroke-width="2" opacity="0.7"/>`,x+=`<rect x="${ne}" y="${D}" width="${g}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${q.cardId}" data-role="${P}" style="cursor:pointer"/>`;continue}const ae=M?.45:1,pe=M?"#FFD700":Q,he=M?3:(q==null?void 0:q.rarity)==="legende"||(q==null?void 0:q.rarity)==="légende"||(q==null?void 0:q.rarity)==="pepite"||(q==null?void 0:q.rarity)==="pépite"?2.5:2,xe=k-o-$;x+=`<defs><clipPath id="cp-${K}"><rect x="${ne}" y="${(j.y-k/2+o).toFixed(1)}" width="${g}" height="${xe}"/></clipPath></defs>`,x+=`<rect x="${ne}" y="${D}" width="${g}" height="${k}" rx="5" fill="${te}" opacity="${ae}"/>`;const ge=ze(q);ge&&(x+=`<image href="${ge}" xlink:href="${ge}" x="${ne}" y="${(j.y-k/2+o).toFixed(1)}" width="${g}" height="${xe}" clip-path="url(#cp-${K})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${ne}" y="${D}" width="${g}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,x+=`<text x="${j.x.toFixed(1)}" y="${(j.y-k/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(q.name||"").slice(0,9)}</text>`;const R=(j.y+k/2-$).toFixed(1);x+=`<rect x="${ne}" y="${R}" width="${g}" height="${$}" fill="rgba(255,255,255,0.92)"/>`;{const O=ei(q.country_code);O?x+=`<image href="${O}" xlink:href="${O}" x="${(j.x-20).toFixed(1)}" y="${(j.y+k/2-$+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:x+=`<text x="${(j.x-13).toFixed(1)}" y="${(j.y+k/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${tn(q.country_code)}</text>`,x+=`<text x="${j.x.toFixed(1)}" y="${(j.y+k/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const S=en(q);S?x+=`<image href="${S}" xlink:href="${S}" x="${(j.x+g/2-14).toFixed(1)}" y="${(j.y+k/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:q.clubName&&(x+=`<text x="${(j.x+14).toFixed(1)}" y="${(j.y+k/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(q.clubName||"").slice(0,3).toUpperCase()}</text>`),q.boost&&(x+=`<rect x="${(j.x+g/2-12).toFixed(1)}" y="${(j.y-k/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,x+=`<text x="${(j.x+g/2-5).toFixed(1)}" y="${(j.y-k/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${q.boost}</text>`)}x+=`<rect x="${ne}" y="${D}" width="${g}" height="${k}" rx="5" fill="${M?"rgba(255,255,255,0.12)":"none"}" stroke="${pe}" stroke-width="${he}" opacity="${ae}"/>`,re&&(x+=`<rect x="${ne}" y="${D}" width="${g}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${M?"selected":""}" data-card-id="${q.cardId}" data-role="${P}" style="cursor:pointer"/>`)}const z=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-z} ${-z} ${p+z*2} ${d+z*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${x}
  </svg>`}function dt(e,t,n,a,p=300,d=300,s=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${st(e,t,n,a,p,d,s)}
  </div>`}function nt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function pi(e,t,n,a){var q;const{state:p,navigate:d,toast:s}=t;Xe(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return ao(e,t,n);const c=l.deckId;let i,r,f,x;try{const j=await Promise.all([_.from("decks").select("formation,name").eq("id",c).single(),_.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);i=j[0].data,f=j[0].error,r=j[1].data,x=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),at(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(f||x){console.error("[Match] Erreur Supabase:",f||x),at(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const g=(r||[]).filter(j=>{var P;return j.is_starter&&((P=j.card)==null?void 0:P.player)}).map(j=>Zt(j.card,j.position)),k=(r||[]).filter(j=>{var P;return!j.is_starter&&((P=j.card)==null?void 0:P.player)}).map(j=>Zt(j.card,j.position));if(g.length<11){at(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>d("decks"));return}const o=(r||[]).find(j=>{var P;return((P=j.card)==null?void 0:P.card_type)==="formation"}),$=(i==null?void 0:i.formation)||((q=o==null?void 0:o.card)==null?void 0:q.formation)||"4-4-2",{data:L,error:z}=await _.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:F}=await _.from("gc_definitions").select("*").eq("is_active",!0),K=(L||[]).map(j=>({...j,_gcDef:(F==null?void 0:F.find(P=>P.name===j.gc_type||P.id===j.gc_definition_id))||null}));a({deckId:c,formation:$,starters:g,subsRaw:k,gcCardsEnriched:K,gcDefs:F||[]})}async function so(e,t){const{state:n}=t,p=(n.params||{}).matchMode||"vs_ai_easy",d=p.replace("vs_ai_",""),s=p;await pi(e,t,p,async({deckId:l,formation:c,starters:i,subsRaw:r,gcCardsEnriched:f,gcDefs:x})=>{try{const g=gt(i,c),k=await lo(c,d),o=async $=>{try{const{data:L,error:z}=await _.from("matches").insert({home_id:n.profile.id,away_id:null,mode:s,home_deck_id:l,status:"in_progress"}).select().single();if(z){console.error("[MatchIA] Erreur création match:",z),at(e,"⚠️","Impossible de créer le match ("+z.message+").","Retour",()=>t.navigate("home"));return}const F={gcDefs:x||[],matchId:L==null?void 0:L.id,mode:s,difficulty:d,formation:c,homeTeam:g,aiTeam:k,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:$,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};po(e,F,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),at(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}ci(e,f,o)}catch(g){console.error("[MatchIA] Exception setup:",g),at(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function lo(e,t){var s,l;const{data:n}=await _.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return co(e);const a=ut[e]||ut["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},d=[...n];for(const c of["GK","DEF","MIL","ATT"]){const i=d.filter(k=>k.job===c),r=d.filter(k=>k.job!==c),f=[...i,...r],x=[];for(let k=0;k<a[c];k++){const o=f[k]||d[k];o&&x.push({cardId:"ai-"+o.id+"-"+k,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((s=o.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const g=ot(x.length);x.forEach((k,o)=>{k._col=g[o]}),p[c]=x}return p}function co(e){const t=ut[e]||ut["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<t[d];c++){const i=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:a[p%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?i:2,note_d:d==="DEF"?i:2,note_m:d==="MIL"?i:2,note_a:d==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:d}),p++}const l=ot(s.length);s.forEach((c,i)=>{c._col=l[i]}),n[d]=s}return n}function po(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>uo(e,t,n),5e3)}function uo(e,t,n){const a=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function d(o){return o.reduce(($,L)=>$+we(L,"MIL"),0)}function s(o){let $=0;for(let L=0;L<o.length-1;L++){const z=Ze(o[L],o[L+1]);z==="#00ff88"?$+=2:z==="#FFD700"&&($+=1)}return $}const l=d(a)+s(a),c=d(p)+s(p),i=l>=c;function r(o,$,L,z){return`<div id="duel-row-${z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${$}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((F,K)=>{const q=K<o.length-1?Ze(F,o[K+1]):null,j=!q||q==="#ff3333"||q==="#cc2222",P=q==="#00ff88"?"+2":q==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${z}" data-idx="${K}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...F,note:we(F,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${K<o.length-1?`<div class="duel-link duel-link-${z}" data-idx="${K}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${j?"rgba(255,255,255,0.12)":q};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${j?"none":`0 0 8px ${q}`}">
            ${P?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${q}">${P}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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

    ${r(p,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=($,L)=>e.querySelectorAll($).forEach((z,F)=>{setTimeout(()=>{z.style.opacity="1",z.style.transform="translateY(0) scale(1)"},L+F*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach(($,L)=>{setTimeout(()=>{$.style.opacity="1"},L*70)}),900),setTimeout(()=>{const $=e.querySelector("#vs-label");$&&($.style.opacity="1",$.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(L=>L.style.opacity="1")},1250),setTimeout(()=>{x("score-home",l,800),x("score-ai",c,800)},1500)};function x(o,$,L){const z=document.getElementById(o);if(!z)return;const F=performance.now(),K=q=>{const j=Math.min(1,(q-F)/L);z.textContent=Math.round($*(1-Math.pow(1-j,3))),j<1?requestAnimationFrame(K):z.textContent=$};requestAnimationFrame(K)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const g=i?li():null;i&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:p.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const k=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Se(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),$=document.getElementById("score-ai"),L=document.getElementById(i?"duel-row-home":"duel-row-ai"),z=document.getElementById(i?"duel-row-ai":"duel-row-home"),F=i?o:$,K=i?$:o;F&&(F.style.fontSize="80px",F.style.color=i?"#FFD700":"#ff6b6b",F.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),K&&(K.style.opacity="0.25"),setTimeout(()=>{L&&(L.style.transformOrigin="center",L.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",L.style.zIndex="5"),setTimeout(()=>{var j;const q=document.getElementById("duel-shock");if(q){const P=(j=z||L)==null?void 0:j.getBoundingClientRect(),te=e.querySelector(".match-screen").getBoundingClientRect();P&&(q.style.top=P.top-te.top+P.height/2+"px"),q.style.animation="shockwave .5s ease-out forwards"}z&&(z.style.transformOrigin="center",z.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var j;const q=document.getElementById("duel-finale");q&&(q.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,q.style.transition="opacity .45s ease",q.style.opacity="1",q.style.pointerEvents="auto",(j=document.getElementById("start-match-btn"))==null||j.addEventListener("click",k))},600)},700)},2800)}function fo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Se(e,t,n){var F,K,q,j,P,te,ce,re;const a=t.selected.map(M=>M.cardId),p=t.usedSubIds||[],d=t.homeSubs.filter(M=>!p.includes(M.cardId)),l=Object.values(t.homeTeam).flat().filter(M=>M.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(M=>(t.aiTeam[M]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(M=>!M.used),r=t.phase==="attack"&&c&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(M=>!M.used).map(M=>M.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",x=t.phase==="attack",g=t.phase==="defense",k=t.phase==="finished",o=t.gcCards.filter(M=>!t.usedGc.includes(M.id)),$=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
          </div>`}const M=t.log[t.log.length-1];return M?'<div style="padding:2px 4px">'+fo(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,Y=(R,O,S)=>{var Ce,Pe;const B=(t.gcDefs||[]).find(E=>E.name===R.gc_type),U={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[B==null?void 0:B.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ie={purple:"#b06ce0",light_blue:"#00d4ef"}[B==null?void 0:B.color]||"#b06ce0",ee=(B==null?void 0:B.name)||R.gc_type,ke=(B==null?void 0:B.effect)||((Ce=Ne[R.gc_type])==null?void 0:Ce.desc)||"",_e=B!=null&&B.image_url?`/manager-wars/icons/${B.image_url}`:null,$e=((Pe=Ne[R.gc_type])==null?void 0:Pe.icon)||"⚡",Me=Math.round(S*.22),Te=Math.round(S*.22),Ae=S-Me-Te,Ee=ee.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${O}px;height:${S}px;border-radius:10px;border:2px solid ${ie};background:${U};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Me}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ee}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${ee}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ae}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${O-10}px;max-height:${Ae-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ae*.55)}px">${$e}</span>`}
          </div>
          <div style="height:${Te}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ke.slice(0,38)}</span>
          </div>
        </div>`},ne=(R,O)=>{var S;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${O}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(O*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(O*.2)}px">⚡</div>
            <div style="font-size:${Math.round(O*.09)}px;color:#000;font-weight:900">+${(S=t.boostCard)==null?void 0:S.value}</div>
          </div>`},D=(R,O)=>O?ne(130,175):Y(R,130,175),Q=(R,O)=>O?ne(68,95):Y(R,68,95),ae=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pe=k?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:x?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=x||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(R,76,100)}</div>`).join("")}
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
            ${o.map(R=>D(R,!1)).join("")}
            ${$?D(null,!0):""}
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
            ${o.map(R=>Q(R,!1)).join("")}
            ${$?Q(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(M=>{var Y,ne,D;if(M.type==="duel"){const Q=M.isGoal,ae=M.homeScored?"#FFD700":Q?"#ff6b6b":"rgba(255,255,255,0.3)",pe=M.homeScored?"⚽ BUT !":Q?"⚽ BUT IA !":(Y=M.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
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
  </div>`;function L(){const M=e.querySelector(".match-screen");if(!M)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=Y+"px",M.style.minHeight=Y+"px",M.style.maxHeight=Y+"px",M.style.overflow="hidden";const ne=e.querySelector("#mobile-action-bar"),D=e.querySelector("#mobile-play-area");ne&&D&&(D.style.paddingBottom=ne.offsetHeight+"px")}if(L(),setTimeout(L,120),setTimeout(L,400),setTimeout(L,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",L),window.visualViewport.addEventListener("scroll",L)),window.addEventListener("resize",L)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const M=e.querySelector(".terrain-wrapper svg");M&&(M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let M=!1,Y=30;const ne=()=>document.getElementById("match-timer"),D=()=>{const Q=ne();if(!Q)return;const ae=String(Math.floor(Y/60)).padStart(2,"0"),pe=String(Y%60).padStart(2,"0");Q.textContent=` ${ae}:${pe}`,Q.style.color=M?"#ff2222":"#ff9500",Q.style.fontWeight="900"};D(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!M)M=!0,Y=15,D();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Q),setTimeout(()=>{Q.remove(),At(e,t,n)},2500)}else D()},1e3)}(F=document.getElementById("match-quit"))==null||F.addEventListener("click",()=>{He(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,At(e,t,n))}),(K=document.getElementById("view-ai"))==null||K.addEventListener("click",()=>$o(t,n)),(q=document.getElementById("toggle-history"))==null||q.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(P=document.getElementById("btn-action"))==null||P.addEventListener("click",()=>{t.selected.length!==0&&(x?mo(e,t,n):g&&xo(e,t,n))}),(te=document.getElementById("btn-results"))==null||te.addEventListener("click",()=>At(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>go(M,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Yt(e,t,n,null,M.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(M=>{M.addEventListener("click",()=>bo(M.dataset.gcId,M.dataset.gcType,e,t,n))}),(ce=document.getElementById("boost-card"))==null||ce.addEventListener("click",()=>_o(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Yt(e,t,n,M.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>Yt(e,t,n))}function go(e,t,n,a){const p=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(l=>l.cardId===p);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[d]||[]).find(c=>c.cardId===p);l&&t.selected.push({...l,_role:d,_line:d})}Se(n,t,a)}function ui(e,t,n){e.matchId&&_.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function mo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(l=>!l.used)),p=t.selected.map(s=>{const l=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,c=a&&["GK","DEF"].includes(s._role);return{...l,_line:s._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),d=Rt(p,t.modifiers.home);t.pendingAttack={...d,players:[...p],side:"home"},t.selected.forEach(s=>{const l=(t.homeTeam[s._role]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Se(e,t,n),setTimeout(()=>yo(e,t,n),1200)}function xo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Ot(a,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!0)});const d=Ht(t.pendingAttack.total,p.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ze(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:ze(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Se(e,t,n),Nt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ct(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=qi(a,"attack",t.difficulty);if(!p.length){qt(e,t,n);return}const d=Rt(p,t.modifiers.ai);t.pendingAttack={...d,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),c=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ze(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Se(e,t,n),Nt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}t.phase="defense",Se(e,t,n)}function yo(e,t,n){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=qi(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(x=>!x.used)).length){t.homeScore++;const x={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(g=>({name:g.name,note:we(g,g._line||g.job),portrait:ze(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(x),t.modifiers.ai={},t.pendingAttack=null,Se(e,t,n),Nt(x.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}const s=p.length>0?Ot(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Ht(t.pendingAttack.total,s,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,Se(e,t,n),Nt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}else c.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,ct(e,t,n,"ai-attack")}function ct(e,t,n,a){if(t.round++,nn(t)){At(e,t,n);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){qt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){qt(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",Se(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){qt(e,t,n);return}t.phase="ai-attack",Se(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function nn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(p=>!p.used)),n=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(p=>!p.used));return!t&&!n}function qt(e,t,n){nn(t)?At(e,t,n):(t.phase="attack",Se(e,t,n))}function ho(e,t,n){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=ze(e),d=ze(t),s=ft[e.job]||"#555",l=ft[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
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
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let r=!1;const f=()=>{r||(r=!0,a.remove(),n())};a.addEventListener("click",f),setTimeout(f,2e3)}function _t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,a=null,p=null){var g,k;if(t.phase!=="attack"){_t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){_t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([o,$])=>($||[]).filter(L=>L.used).map(L=>({...L,_line:L._line||o}))),s=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!d.length){_t("Aucun joueur utilisé à remplacer");return}if(!s.length){_t("Aucun remplaçant disponible");return}let l=Math.max(0,d.findIndex(o=>o.cardId===p));const c=((g=d[l])==null?void 0:g._line)||((k=d[l])==null?void 0:k.job);let i=a?Math.max(0,s.findIndex(o=>o.cardId===a)):Math.max(0,s.findIndex(o=>o.job===c)),r=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var q,j,P,te,ce,re;const o=d[l],$=s[i],L=Math.min(130,Math.round((window.innerWidth-90)/2)),z=Math.round(L*1.35),F=M=>`background:rgba(255,255,255,0.12);border:none;color:${M?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${M?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${F(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${$?Ve({...$,used:!1,boost:0},L,z):"<div>—</div>"}</div>
        <button id="in-down" style="${F(i>=s.length-1)}" ${i>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${F(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},L,z):"<div>—</div>"}</div>
        <button id="out-down" style="${F(l>=d.length-1)}" ${l>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(q=f.querySelector("#sub-close"))==null||q.addEventListener("click",()=>f.remove()),(j=f.querySelector("#out-up"))==null||j.addEventListener("click",()=>{l>0&&(l--,x())}),(P=f.querySelector("#out-down"))==null||P.addEventListener("click",()=>{l<d.length-1&&(l++,x())}),(te=f.querySelector("#in-up"))==null||te.addEventListener("click",()=>{i>0&&(i--,x())}),(ce=f.querySelector("#in-down"))==null||ce.addEventListener("click",()=>{i<s.length-1&&(i++,x())});const K=(M,Y,ne,D)=>{const Q=f.querySelector("#"+M);if(!Q)return;let ae=0;Q.addEventListener("touchstart",pe=>{ae=pe.touches[0].clientY},{passive:!0}),Q.addEventListener("touchend",pe=>{const he=pe.changedTouches[0].clientY-ae;if(Math.abs(he)<30)return;const xe=Y();he<0&&xe<D-1?(ne(xe+1),x()):he>0&&xe>0&&(ne(xe-1),x())},{passive:!0})};K("in-panel",()=>i,M=>i=M,s.length),K("out-panel",()=>l,M=>l=M,d.length),(re=f.querySelector("#sub-confirm"))==null||re.addEventListener("click",M=>{if(M.preventDefault(),M.stopPropagation(),r)return;r=!0;const Y=d[l],ne=s[i];if(!Y||!ne)return;let D=null,Q=-1;for(const[pe,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ge=>ge.cardId===Y.cardId);if(xe!==-1){D=pe,Q=xe;break}}if(Q===-1||!D){_t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const ae={...ne,_line:D,_col:Y._col||0,used:!1,boost:0};t.homeTeam[D].splice(Q,1,ae),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ne.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:we(Y,D),portrait:ze(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:ne.name,firstname:ne.firstname,note:we(ne,D),portrait:ze(ne),job:ne.job,country_code:ne.country_code,rarity:ne.rarity,clubName:ne.clubName,clubLogo:ne.clubLogo},text:`🔄 ${ne.firstname} ${ne.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),ho(Y,ne,()=>Se(e,t,n))})}document.body.appendChild(f),x()}function bo(e,t,n,a,p){var k,o;const d=(a.gcDefs||[]).find($=>$.name===t),s=Ne[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",i=(d==null?void 0:d.name)||t,r=(d==null?void 0:d.effect)||s.desc,f=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,x=s.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${x}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(k=g.querySelector("#gc-back"))==null||k.addEventListener("click",()=>g.remove()),(o=g.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{g.remove(),wo(e,t,n,a,p)})}function Ft(e,t,n,a,p,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var i,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const x=f._line||f.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x]||"#555",k=we(f,x)+(f.boost||0),o=l.find($=>$.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${x}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=s.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.cid,g=e.find(o=>o.cardId===x);if(!g)return;const k=l.findIndex(o=>o.cardId===x);k>-1?l.splice(k,1):l.length<t&&l.push(g),c()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),d(l)})}c(),document.body.appendChild(s)}const vo={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},a,p,d)=>{const s=Object.entries(a.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,c])=>c.filter(i=>!i.used).map(i=>({...i,_line:l})));return s.length?(Ft(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,a,l=>{l.forEach(c=>{const i=(a.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Se(p,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Se(p,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:a="ai"},p,d,s)=>{const l=a==="home"?p.homeTeam:p.aiTeam,c=a==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!n.length||n.includes(r)).flatMap(([r,f])=>f.filter(x=>!x.used).map(x=>({...x,_line:r})));return i.length?(Ft(i,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,d,p,r=>{r.forEach(f=>{const g=((a==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find(k=>k.cardId===f.cardId);g&&(g.boost=(g.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${g.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Se(d,p,s)}),!0):(p.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Se(d,p,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},a,p,d)=>{const s=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(f=>!f.used).map(f=>({...f,_line:i})));return c.length?(Ft(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,a,i=>{i.forEach(r=>{const x=((n==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);x&&(x.used=!0,a.log.push({text:`❌ ${x.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Se(p,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Se(p,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,a,p)=>{const d=Object.entries(n.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,l])=>l.filter(c=>c.used).map(c=>({...c,_line:s})));return d.length?(Ft(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!1,n.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Se(a,n,p)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Se(a,n,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function wo(e,t,n,a,p){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(c=>c.name===t)||d.find(c=>{var i;return((i=c.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const c=vo[s.effect_type];c?c(s.effect_params||{},a,n,p)||(l=!0):(p.toast(`Effet "${s.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(f=>f.used).map(f=>({...f,_line:i})));c.length?(c[0].used=!1,a.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(c.length){const i=c.sort((r,f)=>we(f,"ATT")-we(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}_.from("cards").delete().eq("id",e).then(()=>{}),l&&Se(n,a,p)}function _o(e,t,n){const a=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!a.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ft[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${we(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const d=p.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),Se(e,t,n)})})}function Nt(e,t,n,a,p){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(i,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${ft[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let l=!1;const c=()=>{l||(l=!0,d.remove(),setTimeout(()=>p(),50))};d.addEventListener("click",c),setTimeout(c,3500)}async function At(e,t,n){var r,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=n,p=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=p?"victoire":d?"nul":"defaite",l=Tn(t.mode,s);t.matchId&&await _.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};p?c.wins=(a.profile.wins||0)+1:d?c.draws=(a.profile.draws||0)+1:c.losses=(a.profile.losses||0)+1,await _.from("users").update(c).eq("id",a.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${p?"🏆":d?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${p?"Victoire !":d?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),He(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),He(e),n.navigate("match",{matchMode:t.mode})})}function $o(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function on(e,t){var n,a;try{const p=(a=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:a.id;try{(_.getChannels?_.getChannels():[]).forEach(s=>{const l=s.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&_.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}p&&await _.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}await pi(e,t,"random",({deckId:p,formation:d,starters:s,subsRaw:l,gcCardsEnriched:c,gcDefs:i})=>{const r=f=>ko(e,t,p,d,s,l,f,i||[]);if(!c.length){r([]);return}ci(e,c,r)})}async function ko(e,t,n,a,p,d,s=[],l=[]){var z;const{state:c,navigate:i,toast:r}=t;let f=!1,x=null;Xe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(F=!0)=>{f=!0,x&&(_.removeChannel(x),x=null),F&&await _.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(z=document.getElementById("mm-cancel"))==null||z.addEventListener("click",async()=>{try{await g(!0)}catch{}He(e),i("home")});const k=async(F,K,q)=>{if(f)return;f=!0,x&&(_.removeChannel(x),x=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(P=>setTimeout(P,600)),e.isConnected&&rn(e,t,F,q,s,l)},{data:o,error:$}=await _.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:n});if($||!(o!=null&&o.success)){r("Erreur de matchmaking","error"),He(e),i("home");return}if(o.matched){k(o.match_id,o.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),x=_.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},F=>{const K=F.new;K.status==="matched"&&K.match_id&&k(K.match_id,K.matched_with,!0)}).subscribe()}async function Eo(e,t,n){const{state:a,navigate:p,toast:d}=t;try{(_.getChannels?_.getChannels():[]).forEach(i=>{const r=i.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&_.removeChannel(i)})}catch{}const{data:s}=await _.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!s){d("Match introuvable","error"),p("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),p("home");return}const l=s.home_id===a.profile.id;rn(e,t,n,l,[],[])}async function rn(e,t,n,a,p=[],d=[]){const{state:s,navigate:l,toast:c}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(E=>E.id),x=(p||[]).map(E=>({id:E.id,gc_type:E.gc_type,_gcDef:E._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await _.from("matches").select("*").eq("id",n).single();if(!g){c("Match introuvable","error"),l("home");return}async function k(){const[{data:E},{data:u},{data:m},{data:h}]=await Promise.all([_.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),_.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),_.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),_.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),y=A=>({cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((E==null?void 0:E.starters)||[]).map(A=>y(A)),v=((u==null?void 0:u.starters)||[]).map(A=>y(A)),w=(E==null?void 0:E.formation)||"4-4-2",I=(u==null?void 0:u.formation)||"4-4-2";return{p1Team:gt(b,w),p2Team:gt(v,I),p1Subs:((E==null?void 0:E.subs)||[]).map(A=>y(A)),p2Subs:((u==null?void 0:u.subs)||[]).map(A=>y(A)),p1Formation:w,p2Formation:I,p1Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?x:[],gcCardsFull_p2:a?[]:x,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!o)if(a){o=await k();const{data:E}=await _.from("matches").select("game_state").eq("id",n).single();!(E!=null&&E.game_state)||!Object.keys(E.game_state).length?await _.from("matches").update({game_state:o,turn_user_id:g.home_id}).eq("id",n):o=E.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let E=0;E<30&&!o;E++){await new Promise(m=>setTimeout(m,400));const{data:u}=await _.from("matches").select("game_state").eq("id",n).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(o=u.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=x,await _.from("matches").update({game_state:o}).eq("id",n)}let $=!1,L=null,z=!1;const F=new Set,K=new Set;function q(E){var A,T;try{_.removeChannel(j)}catch{}const u=o[i+"Score"]||0,m=o[r+"Score"]||0;let h,y;E.winner_id?(h=E.winner_id===s.profile.id,y=!1):E.forfeit?(h=u>m,y=!1):(y=u===m,h=u>m),(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":h?"🏆":"😞",w=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${w}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${u} – ${m} ${o[r+"Name"]}</div>
      ${E.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(T=b.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{b.remove(),He(e),l("home")})}const j=_.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},E=>{const u=E.new;try{if(u.status==="finished"||u.forfeit){if($)return;$=!0,L&&(clearInterval(L),L=null),u.game_state&&(o=u.game_state),q(u);return}if(u.game_state){const m=o;o=u.game_state;const h=o._lastGC;if(h&&h.seq&&!K.has(h.seq)&&(K.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>D());return}const y=m[i+"Score"]||0,b=m[r+"Score"]||0,v=o[i+"Score"]||0,w=o[r+"Score"]||0,I=v>y,A=w>b;if((I||A)&&!F.has(o.round)){F.add(o.round);const T=[...o.log||[]].reverse().find(N=>N.isGoal),C=((T==null?void 0:T.homePlayers)||[]).map(N=>({name:N.name,note:N.note,portrait:N.portrait,job:N.job}));he(C,v,w,I,()=>D());return}D()}}catch(m){console.error("[PvP] crash:",m)}}).subscribe();async function P(E){Object.assign(o,E),o.lastActionAt=new Date().toISOString();const{error:u}=await _.from("matches").update({game_state:o}).eq("id",n);u&&c("Erreur de synchronisation","error");try{D()}catch(m){console.error("[PvP] renderPvpScreen crash:",m)}}async function te(){if($)return;$=!0,L&&(clearInterval(L),L=null);const E=a?g.away_id:g.home_id,u=a?"p2":"p1",m=a?"p1":"p2",h={...o,[u+"Score"]:3,[m+"Score"]:0,phase:"finished"};try{await _.from("matches").update({status:"finished",forfeit:!0,winner_id:E,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{_.removeChannel(j)}catch{}setTimeout(()=>{He(e),l("home")},800)}const ce={BOOST_STAT:({value:E=1,count:u=1,roles:m=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!m.length||m.includes(w)).flatMap(([w,I])=>I.filter(A=>!A.used).map(A=>({...A,_line:w})));if(!v.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}re(v,u,`Choisir ${u} joueur(s) à booster (+${E})`,w=>{w.forEach(I=>{const A=(b[I._line]||[]).find(T=>T.cardId===I.cardId);A&&(A.boost=(A.boost||0)+E,h.log.push({text:`⚡ +${E} sur ${A.name}`,type:"info"}))}),h[i+"Team"]=b,y(h)})},DEBUFF_STAT:({value:E=1,count:u=1,roles:m=[],target:h="ai"},y,b)=>{const v=h==="home"?i:r,w=y[v+"Team"],I=h==="home"?"allié":"adverse",A=Object.entries(w).filter(([T])=>!m.length||m.includes(T)).flatMap(([T,C])=>C.filter(N=>!N.used).map(N=>({...N,_line:T})));if(!A.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),b(y);return}re(A,u,`Choisir ${u} joueur(s) ${I}(s) (-${E})`,T=>{T.forEach(C=>{const N=(w[C._line]||[]).find(W=>W.cardId===C.cardId);N&&(N.boost=(N.boost||0)-E,y.log.push({text:`🎯 -${E} sur ${N.name}`,type:"info"}))}),y[v+"Team"]=w,b(y)})},GRAY_PLAYER:({count:E=1,roles:u=[],target:m="ai"},h,y)=>{const b=m==="home"?i:r,v=h[b+"Team"],w=m==="home"?"allié":"adverse",I=Object.entries(v).filter(([A])=>!u.length||u.includes(A)).flatMap(([A,T])=>T.filter(C=>!C.used).map(C=>({...C,_line:A})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${w}`,type:"info"}),y(h);return}re(I,E,`Choisir ${E} joueur(s) ${w}(s) à exclure`,A=>{A.forEach(T=>{const C=(v[T._line]||[]).find(N=>N.cardId===T.cardId);C&&(C.used=!0,h.log.push({text:`❌ ${C.name} exclu !`,type:"info"}))}),h[b+"Team"]=v,y(h)})},REVIVE_PLAYER:({count:E=1,roles:u=[]},m,h)=>{const y=m[i+"Team"],b=Object.entries(y).filter(([v])=>!u.length||u.includes(v)).flatMap(([v,w])=>w.filter(I=>I.used).map(I=>({...I,_line:v})));if(!b.length){m.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(m);return}re(b,E,`Choisir ${E} joueur(s) à ressusciter`,v=>{v.forEach(w=>{const I=(y[w._line]||[]).find(A=>A.cardId===w.cardId);I&&(I.used=!1,m.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),m[i+"Team"]=y,h(m)})},REMOVE_GOAL:({},E,u)=>{const m=r+"Score";E[m]>0?(E[m]--,E.log.push({text:"🚫 Dernier but annulé !",type:"info"})):E.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(E)},ADD_GOAL_DRAW:({},E,u)=>{E[i+"Score"]===E[r+"Score"]?(E[i+"Score"]++,E.log.push({text:"🎯 But bonus !",type:"info"})):E.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(E)},ADD_SUB:({value:E=1},u,m)=>{u.maxSubs=(u.maxSubs||3)+E,u.log.push({text:`🔄 +${E} remplacement(s)`,type:"info"}),m(u)},CUSTOM:({},E,u)=>u(E)};function re(E,u,m,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function v(){var I,A;const w=E.map(T=>{const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",N=we(T,T._line)+(T.boost||0),le=b.find(H=>H.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${le};background:${C};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${N}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${m}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b.length}/${u}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${w}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${b.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${b.length}/${u})
          </button>
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const C=T.dataset.cid,N=E.find(le=>le.cardId===C),W=b.findIndex(le=>le.cardId===C);N&&(W>-1?b.splice(W,1):b.length<u&&b.push(N),v())})}),(A=y.querySelector("#pp-confirm"))==null||A.addEventListener("click",()=>{y.remove(),h(b)})}v(),document.body.appendChild(y)}async function M(E,u){const h=(o["gcCardsFull_"+i]||[]).find(w=>w.id===E),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(w=>{var I;return w.name===u||((I=w.name)==null?void 0:I.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b=[...o["usedGc_"+i]||[],E],v={type:u,by:i,seq:(o._gcAnimSeq||0)+1};K.add(v.seq),xe(u,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=ce[y.effect_type];if(I){const A={...o};I(y.effect_params||{},A,async T=>{T["usedGc_"+i]=b,T._lastGC=v,T._gcAnimSeq=v.seq,await P(T)});return}}const w={...o};switch(u){case"Remplacement+":w.maxSubs=(w.maxSubs||3)+1,w.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=r+"Score";w[I]>0&&(w[I]--,w.log.push({text:"🚫 But annulé",type:"info"}));break}}w["usedGc_"+i]=b,w._lastGC=v,w._gcAnimSeq=v.seq,await P(w)})}function Y(E,u){const m="usedCardIds_"+E,h=new Set(o[m]||[]);u.forEach(y=>h.add(y)),o[m]=[...h]}function ne(){for(const E of["p1","p2"]){const u=new Set(o["usedCardIds_"+E]||[]),m=o[E+"Team"];if(m)for(const h of["GK","DEF","MIL","ATT"])(m[h]||[]).forEach(y=>{y.used=u.has(y.cardId)})}}function D(){var qe,Qe,mt,xt,yt,ht;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return pe();if(o.phase==="finished")return Pe();const E=o[i+"Team"],u=o[r+"Team"];ne();const m=o[i+"Score"],h=o[r+"Score"],y=o[i+"Name"],b=o[r+"Name"],v=o.phase===i+"-attack",w=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],A=I.map(X=>X.cardId),T=window.innerWidth>=700,C=o[i+"Subs"]||[],N=o["usedSubIds_"+i]||[],W=C.filter(X=>!N.includes(X.cardId)),le=o["gcCardsFull_"+i]||[],J=o["usedGc_"+i]||[],H=le.filter(X=>!J.includes(X.id)),V=o.boostOwner===i&&!o.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(X=>(u[X]||[]).some(G=>!G.used)),de=[...E.MIL||[],...E.ATT||[]].filter(X=>!X.used),ue=v&&Z&&de.length===0?[...E.GK||[],...E.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function fe(X,G,oe){var Ct,wt;const se=X._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",We=(se==null?void 0:se.name)||X.gc_type,Je=(se==null?void 0:se.effect)||((Ct=Ne[X.gc_type])==null?void 0:Ct.desc)||"",et=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,Mt=((wt=Ne[X.gc_type])==null?void 0:wt.icon)||"⚡",St=Math.round(oe*.22),bt=Math.round(oe*.22),lt=oe-St-bt,vt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${G}px;height:${oe}px;border-radius:10px;border:2px solid ${Ye};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${St}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${vt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${G-6}px">${We}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${G-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${Mt}</span>`}
        </div>
        <div style="height:${bt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function me(X,G){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${G}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(G*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(G*.2)}px">⚡</div>
        <div style="font-size:${Math.round(G*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const be=(X,G)=>G?me(130,175):fe(X,130,175),je=(X,G)=>G?me(68,95):fe(X,68,95),Re=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",De=v?Te(i)?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Re};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:w?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,Ie=v&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(X,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,Fe=v?"attack":w?"defense":"idle",Ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(E,o[i+"Formation"],Fe,A,300,300,ue)}
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
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ue=(()=>{var G,oe;if(w&&((G=o.pendingAttack)!=null&&G.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${b} ATTAQUE — Défendez !</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(v&&((oe=o.pendingAttack)!=null&&oe.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",se.total)}
        </div>`}const X=(o.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Oe(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${m} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b}</span>
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
              ${dt(E,o[i+"Formation"],Fe,A,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(X=>je(X,!1)).join("")}
            ${V?je(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&W.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&W.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&W.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&W.length>0?1:.4}">
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
      </div>`;function Be(){const X=e.querySelector(".match-screen");if(!X)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=G+"px",X.style.minHeight=G+"px",X.style.maxHeight=G+"px",X.style.overflow="hidden";const oe=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");oe&&se&&(se.style.paddingBottom=oe.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),z||(z=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!v&&!w)return;const G=X.dataset.cardId,oe=X.dataset.role,se=(E[oe]||[]).find(Je=>Je.cardId===G);if(!se||se.used)return;const ye=ue.includes(G);if(v&&!["MIL","ATT"].includes(oe)&&!ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Je=>Je.cardId===G);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...se,_role:oe}),D()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>O(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>O())}),(qe=e.querySelector("#pvp-sub-open"))==null||qe.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>ge(X.dataset.gcId,X.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>R()),(mt=e.querySelector("#pvp-action"))==null||mt.addEventListener("click",X=>{v?X.currentTarget.dataset.pass==="1"||!Te(i)?ie():ee():w&&ke()}),(xt=e.querySelector("#pvp-quit"))==null||xt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&te()}),(yt=e.querySelector("#pvp-view-opp"))==null||yt.addEventListener("click",()=>B()),(ht=e.querySelector("#pvp-toggle-history"))==null||ht.addEventListener("click",()=>U()),L&&(clearInterval(L),L=null),(v||w)&&!$){let X=30,G=!1;const oe=()=>document.getElementById("pvp-timer"),se=()=>{oe()&&(oe().textContent=X+"s",oe().style.color=G?"#ff4444":"#fff")};se(),L=setInterval(()=>{X--,X<0?G?(clearInterval(L),L=null,v&&!Te(i)?ie():te()):(G=!0,X=15,se()):se()},1e3)}}function Q(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await P({phase:"midfield"})},5e3)}let ae=!1;function pe(){if(ae)return;const E=o[i+"Team"].MIL||[],u=o[r+"Team"].MIL||[];function m(H){return H.reduce((V,Z)=>V+we(Z,"MIL"),0)}function h(H){let V=0;for(let Z=0;Z<H.length-1;Z++){const de=Ze(H[Z],H[Z+1]);de==="#00ff88"?V+=2:de==="#FFD700"&&(V+=1)}return V}const y=m(E)+h(E),b=m(u)+h(u),v=y>=b;function w(H,V,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,ue)=>{const fe=ue<H.length-1?Ze(de,H[ue+1]):null,me=!fe||fe==="#ff3333"||fe==="#cc2222",be=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Z}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...de,note:we(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<H.length-1?`<div class="duel-link duel-link-${Z}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${fe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${m(H)} + ${h(H)} liens = <b style="color:#fff">${m(H)+h(H)}</b>
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
      ${w(E,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${w(u,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,V)=>e.querySelectorAll(H).forEach((Z,de)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},V+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,V)=>setTimeout(()=>{H.style.opacity="1"},V*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function A(H,V,Z){const de=document.getElementById(H);if(!de)return;const ue=performance.now(),fe=me=>{const be=Math.min(1,(me-ue)/Z);de.textContent=Math.round(V*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):de.textContent=V};requestAnimationFrame(fe)}setTimeout(()=>{A("pvp-score-me",y,800),A("pvp-score-opp",b,800)},1500);const T=o.p1Team.MIL||[],C=o.p2Team.MIL||[],N=m(T)+h(T),W=m(C)+h(C),le=N>=W?"p1":"p2";let J=o.boostValue;J==null&&(J=li(),o.boostValue=J,o.boostOwner=le,o.boostUsed=!1),ae=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(v?"me":"opp")),V=e.querySelector("#duel-row-"+(v?"opp":"me")),Z=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),ue=v?Z:de,fe=v?de:Z;ue&&(ue.style.fontSize="80px",ue.style.color=v?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Re;const me=document.getElementById("pvp-duel-finale");if(!me)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",je=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+je,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Re=document.getElementById("pvp-start-match"))==null||Re.addEventListener("click",async()=>{const De=le;await P({phase:De+"-attack",attacker:De,round:1,boostValue:J,boostUsed:!1,boostOwner:De})})},600)},700)},2800)}function he(E,u,m,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(T,C)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${C%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][C%8]}</div>`).join(""),w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${v}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${h?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${u} – ${m}
      </div>
      ${E!=null&&E.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${E.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${w[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let I=!1;const A=()=>{I||(I=!0,b.remove(),setTimeout(()=>y(),50))};b.addEventListener("click",A),setTimeout(A,3500)}function xe(E,u,m){var J,H;const h=(o.gcDefs||[]).find(V=>{var Z;return V.name===E||((Z=V.name)==null?void 0:Z.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",v=(h==null?void 0:h.name)||E,w=(h==null?void 0:h.effect)||((J=Ne[E])==null?void 0:J.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,A=((H=Ne[E])==null?void 0:H.icon)||"⚡",C=u===i?"Vous":o[u+"Name"]||"Adversaire",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",N.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${b}66}50%{box-shadow:0 0 60px ${b}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${b};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${C} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${b};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${v.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${v}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${A}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(N);let W=!1;const le=()=>{W||(W=!0,N.remove(),setTimeout(()=>m&&m(),50))};N.addEventListener("click",le),setTimeout(le,3e3)}function ge(E,u){var N,W,le,J;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===E),y=h==null?void 0:h._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((N=Ne[u])==null?void 0:N.desc)||"Carte spéciale.",A=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,T=((W=Ne[u])==null?void 0:W.icon)||"⚡",C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",C.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(C),(le=C.querySelector("#pvp-gc-back"))==null||le.addEventListener("click",()=>C.remove()),(J=C.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{C.remove(),M(E,u)})}function R(){var h;const E=o[i+"Team"],u=Object.entries(E).flatMap(([y,b])=>(b||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!u.length)return;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",m.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(y=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=we(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(m),(h=m.querySelector("#bp-close"))==null||h.addEventListener("click",()=>m.remove()),m.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const b=y.dataset.cid,v=u.find(I=>I.cardId===b);if(!v)return;const w=(E[v._line]||[]).find(I=>I.cardId===b);w&&(w.boost=(w.boost||0)+o.boostValue),m.remove(),await P({[i+"Team"]:E,boostUsed:!0})})})}function O(E=null){var W,le;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const m=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){c(`Maximum ${y} remplacements atteint`,"warning");return}const b=Object.entries(m).flatMap(([J,H])=>(H||[]).filter(V=>V.used).map(V=>({...V,_line:J}))),v=(o[i+"Subs"]||[]).filter(J=>!h.includes(J.cardId));if(!b.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){c("Aucun remplaçant disponible","warning");return}let w=Math.max(0,b.findIndex(J=>J.cardId===E));const I=((W=b[w])==null?void 0:W._line)||((le=b[w])==null?void 0:le.job);let A=Math.max(0,v.findIndex(J=>J.job===I)),T=!1;const C=document.createElement("div");C.id="pvp-sub-overlay",C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function N(){var fe,me,be,je,Re,De;const J=b[w],H=v[A],V=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(V*1.35),de=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;C.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},V,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${de(A>=v.length-1)}" ${A>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(w===0)}" ${w===0?"disabled":""}>▲</button>
          <div>${J?Ve({...J,used:!1,boost:0},V,Z):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(w>=b.length-1)}" ${w>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${w+1}/${b.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=C.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>C.remove()),(me=C.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{w>0&&(w--,N())}),(be=C.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{w<b.length-1&&(w++,N())}),(je=C.querySelector("#pin-up"))==null||je.addEventListener("click",()=>{A>0&&(A--,N())}),(Re=C.querySelector("#pin-down"))==null||Re.addEventListener("click",()=>{A<v.length-1&&(A++,N())});const ue=(Ie,Le,Fe,Ge)=>{const Oe=C.querySelector("#"+Ie);if(!Oe)return;let Ue=0;Oe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",Ke=>{const Be=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Be)<30)return;const qe=Le();Be<0&&qe<Ge-1?(Fe(qe+1),N()):Be>0&&qe>0&&(Fe(qe-1),N())},{passive:!0})};ue("pin-panel",()=>A,Ie=>A=Ie,v.length),ue("pout-panel",()=>w,Ie=>w=Ie,b.length),(De=C.querySelector("#psub-confirm"))==null||De.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),T)return;T=!0;const Le=b[w],Fe=v[A];if(!Le||!Fe)return;const Ge=Le._line,Oe=(m[Ge]||[]).findIndex(Be=>Be.cardId===Le.cardId);if(Oe===-1){c("Erreur : joueur introuvable","error"),C.remove();return}const Ue={...Fe,_line:Ge,position:Le.position,used:!1,boost:0};m[Ge].splice(Oe,1,Ue);const Ke=[...h,Fe.cardId];C.remove(),S(Le,Fe,async()=>{await P({[i+"Team"]:m,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(C),N()}function S(E,u,m){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(I,A,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${A};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${A};position:relative;overflow:hidden;margin:0 auto">
        ${ze(I)?`<img src="${ze(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${b(u,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${b(E,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const w=()=>{v||(v=!0,y.remove(),setTimeout(()=>m(),50))};y.addEventListener("click",w),setTimeout(w,2200)}function B(){var u;const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",E.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(E),(u=E.querySelector("#pvp-opp-close"))==null||u.addEventListener("click",()=>E.remove())}function U(){var m;const E=o.log||[],u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",u.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${E.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...E].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(u),(m=u.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>u.remove())}async function ie(){if(o.phase!==i+"-attack")return;const E=i==="p1"?"p2":"p1",u=(o.round||0)+1,m=[...o.log||[]];m.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Ae(o),y=Te(E),b=h||!y?"finished":E+"-attack";await P({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:b,attacker:E,round:u,log:m}),b==="finished"&&await Ce(o)}async function ee(){const E=o[i+"Team"],u=!["GK","DEF","MIL","ATT"].some(b=>(o[r+"Team"][b]||[]).some(v=>!v.used)),m=(o["selected_"+i]||[]).map(b=>{const v=(E[b._role]||[]).find(N=>N.cardId===b.cardId)||b,w=u&&["GK","DEF"].includes(b._role),I=E[b._role]||[],A=I.findIndex(N=>N.cardId===b.cardId),T=ot(I.length),C=A>=0?T[A]:v._col??1;return{...v,_line:b._role,_col:C,...w?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!m.length)return;const h=Rt(m,o.modifiers[i]||{});Y(i,m.map(b=>b.cardId)),m.forEach(b=>{const v=(E[b._role]||[]).find(w=>w.cardId===b.cardId);v&&(v.used=!0)}),o["selected_"+i]=[],D();const y=[...o.log||[]];if(u){const b=(o[i+"Score"]||0)+1,v=m.map(C=>({name:C.name,note:we(C,C._line||"ATT"),portrait:ze(C),job:C.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:h.total,aiTotal:0});const w=(o.round||0)+1,I=i==="p1"?"p2":"p1",A={...o,[i+"Team"]:E,[i+"Score"]:b},T=Ae(A);F.add(w),he(v,b,o[r+"Score"]||0,!0,async()=>{await P({[i+"Team"]:E,[i+"Score"]:b,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:T?"finished":I+"-attack",attacker:I,round:w,log:y}),T&&await Ce({...o,[i+"Score"]:b})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await P({[i+"Team"]:E,[r+"Team"]:o[r+"Team"],pendingAttack:{...h,players:m,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:y})}async function ke(){const E=o[i+"Team"],u=(o["selected_"+i]||[]).map(J=>{const H=(E[J._role]||[]).find(fe=>fe.cardId===J.cardId)||J,V=E[J._role]||[],Z=V.findIndex(fe=>fe.cardId===J.cardId),de=ot(V.length),ue=Z>=0?de[Z]:H._col??1;return{...H,_line:J._role,_col:ue}}),m=Ot(u,o.modifiers[i]||{});Y(i,u.map(J=>J.cardId)),u.forEach(J=>{const H=(E[J._role]||[]).find(V=>V.cardId===J.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],D();const h=Ht(o.pendingAttack.total,m.total,o.modifiers[i]||{}),y=o.pendingAttack.side,b=h==="attack"||(h==null?void 0:h.goal),v=y==="p1"?"p2":"p1",w=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(J=>({name:J.name,note:we(J,J._line||"ATT"),portrait:ze(J),job:J.job})),A=[...o.log||[]];A.push({type:"duel",isGoal:b,homeScored:b&&y===i,text:b?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${m.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${m.total})`,homePlayers:I,aiPlayers:u.map(J=>({name:J.name,note:we(J,J._line||"DEF"),portrait:ze(J),job:J.job})),homeTotal:o.pendingAttack.total,aiTotal:m.total});const T=b?(o[y+"Score"]||0)+1:o[y+"Score"]||0,C={...o,[i+"Team"]:E,[y+"Score"]:T},N=Ae(C),W=N?"finished":v+"-attack",le=async()=>{await P({[i+"Team"]:E,[r+"Team"]:o[r+"Team"],[y+"Score"]:T,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:v,round:w,log:A}),(W==="finished"||N)&&await Ce({...o,[y+"Score"]:T})};if(b){const J=y===i,H=J?T:o[i+"Score"]||0,V=J?o[r+"Score"]||0:T;F.add(w),he(I,H,V,J,le)}else await le()}function _e(E){return["MIL","ATT"].some(u=>(E[u]||[]).some(m=>!m.used))}function $e(E){return["GK","DEF","MIL","ATT"].some(u=>(E[u]||[]).some(m=>!m.used))}function Me(E){return $e(E)&&!_e(E)}function Te(E){const u=o[E+"Team"],m=o[(E==="p1"?"p2":"p1")+"Team"];return!!(_e(u)||!$e(m)&&Me(u))}function Ae(E){const u=["MIL","ATT"].some(A=>(E.p1Team[A]||[]).some(T=>!T.used)),m=["MIL","ATT"].some(A=>(E.p2Team[A]||[]).some(T=>!T.used)),h=$e(E.p1Team),y=$e(E.p2Team);return!u&&!(!y&&h)&&(!m&&!(!h&&y))}function Ee(E){const u=E.p1Score||0,m=E.p2Score||0;return u===m?null:u>m?g.home_id:g.away_id}async function Ce(E){try{const u=Ee(E),m=u?g.home_id===u?g.away_id:g.home_id:null;await _.from("matches").update({status:"finished",winner_id:u,home_score:E.p1Score||0,away_score:E.p2Score||0}).eq("id",n),u&&m&&Ni(u,m).catch(()=>{})}catch(u){console.error("[PvP] finishMatch:",u)}}function Pe(){var y;const E=o[i+"Score"],u=o[r+"Score"],m=E>u,h=E===u;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${m?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${m?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${E} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{_.removeChannel(j)}catch{}He(e),l("home")})}D()}const Ao=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:on,resumePvpMatch:Eo},Symbol.toStringTag,{value:"Module"}));async function To(e,t,n,a){var p,d;try{const s=(d=(p=t==null?void 0:t.state)==null?void 0:p.profile)==null?void 0:d.id;try{(_.getChannels?_.getChannels():[]).forEach(c=>{const i=c.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&_.removeChannel(c)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}s&&(await _.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await _.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await pi(e,t,"random",({deckId:s,formation:l,starters:c,subsRaw:i,gcCardsEnriched:r,gcDefs:f})=>{const x=g=>Io(e,t,s,l,c,i,g,f||[],n,a);if(!r.length){x([]);return}ci(e,r,x)})}async function Io(e,t,n,a,p,d,s=[],l=[],c,i){var ce;const{state:r,navigate:f,toast:x}=t,g=r.profile.id;let k=!1,o=null;Xe(e);try{await _.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await _.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const $=(re,M,Y,ne)=>{var D;e.innerHTML=`
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
      </div>`,(D=document.getElementById("lobby-cancel"))==null||D.addEventListener("click",async()=>{k=!0,o&&(_.removeChannel(o),o=null),Y&&await _.from("friend_match_invites").update({status:"declined"}).eq("id",Y),He(e),f("home")})},L=async(re,M)=>{k=!0,o&&(_.removeChannel(o),o=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&Lo(e,t,re,M,s,l)},{data:z}=await _.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${g},invitee_id.eq.${c}),and(inviter_id.eq.${c},invitee_id.eq.${g})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let F,K;if(z&&z.inviter_id===c)K=!1,F=z.id,await _.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",F);else{K=!0;const{data:re,error:M}=await _.from("friend_match_invites").insert({inviter_id:g,invitee_id:c,friend_id:c,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(M||!re){x("Erreur création invitation","error"),He(e),f("home");return}F=re.id}if($(!0,!K,F),!K){const re={home_id:c,away_id:g,home_deck_id:z.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},M=await _.from("matches").insert(re).select().single(),Y=M.data;if(!Y){x("Erreur création match: "+(((ce=M.error)==null?void 0:ce.message)||""),"error"),He(e),f("home");return}await _.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",F),L(Y.id,!1);return}let q=!1;const j=re=>{k||q||(re.status==="matched"&&re.match_id?(q=!0,clearInterval(P),clearInterval(te),L(re.match_id,!0)):re.status==="declined"?(clearInterval(P),clearInterval(te),x(`${i} a décliné l'invitation`,"warning"),He(e),f("home")):re.invitee_ready&&$(!0,!0,F))},P=setInterval(()=>{if(k){clearInterval(P);return}_.from("matchmaking_queue").delete().eq("user_id",g).then(()=>{},()=>{})},3e3),te=setInterval(async()=>{if(k||q){clearInterval(te);return}const{data:re}=await _.from("friend_match_invites").select("*").eq("id",F).maybeSingle();re&&j(re)},1200);o=_.channel("friend-invite-"+F).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${F}`},re=>j(re.new)).subscribe()}async function Lo(e,t,n,a,p=[],d=[]){const{state:s,navigate:l,toast:c}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(u=>u.id),x=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await _.from("matches").select("*").eq("id",n).single();if(!g){c("Match introuvable","error"),l("home");return}async function k(){const[{data:u},{data:m},{data:h},{data:y}]=await Promise.all([_.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),_.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),_.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),_.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),b=T=>({cardId:T.card_id,position:T.position,id:T.id,firstname:T.firstname,name:T.surname_encoded,country_code:T.country_code,club_id:T.club_id,job:T.job,job2:T.job2,note_g:Number(T.note_g)||0,note_d:Number(T.note_d)||0,note_m:Number(T.note_m)||0,note_a:Number(T.note_a)||0,rarity:T.rarity,skin:T.skin,hair:T.hair,hair_length:T.hair_length,clubName:T.club_encoded_name||null,clubLogo:T.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map(T=>b(T)),w=((m==null?void 0:m.starters)||[]).map(T=>b(T)),I=(u==null?void 0:u.formation)||"4-4-2",A=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:gt(v,I),p2Team:gt(w,A),p1Subs:((u==null?void 0:u.subs)||[]).map(T=>b(T)),p2Subs:((m==null?void 0:m.subs)||[]).map(T=>b(T)),p1Formation:I,p2Formation:A,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?x:[],gcCardsFull_p2:a?[]:x,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!o)if(a){o=await k();const{data:u}=await _.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await _.from("matches").update({game_state:o,turn_user_id:g.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:m}=await _.from("matches").select("game_state").eq("id",n).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(o=m.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=x,await _.from("matches").update({game_state:o}).eq("id",n)}let $=!1,L=!1,z=null,F=!1;const K=new Set,q=new Set;function j(u){var T,C;try{_.removeChannel(P)}catch{}const m=o[i+"Score"]||0,h=o[r+"Score"]||0;if(!L){const N=o.p1Score||0,W=o.p2Score||0,le=(o.usedGc_p1||[]).length,J=(o.usedGc_p2||[]).length,H=u.winner_id||(N>W?g.home_id:W>N?g.away_id:null);(H?s.profile.id===H:s.profile.id<(a?g.away_id:g.home_id))&&(L=!0,wn({player1Id:g.home_id,player2Id:g.away_id,score1:N,score2:W,gc1:le,gc2:J}).catch(Z=>console.warn("[FriendMatch] updateStats:",Z)))}let y,b;u.winner_id?(y=u.winner_id===s.profile.id,b=!1):u.forfeit?(y=m>h,b=!1):(b=m===h,y=m>h),(T=document.getElementById("pvp-end-overlay"))==null||T.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":y?"🏆":"😞",I=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",A=b?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${I}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${m} – ${h} ${o[r+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(C=v.querySelector("#pvp-end-home"))==null||C.addEventListener("click",()=>{v.remove(),He(e),l("home")})}const P=_.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const m=u.new;try{if(m.status==="finished"||m.forfeit){if($)return;$=!0,z&&(clearInterval(z),z=null),m.game_state&&(o=m.game_state),j(m);return}if(m.game_state){const h=o;o=m.game_state;const y=o._lastGC;if(y&&y.seq&&!q.has(y.seq)&&(q.add(y.seq),y.by!==i)){ge(y.type,y.by,()=>Q());return}const b=h[i+"Score"]||0,v=h[r+"Score"]||0,w=o[i+"Score"]||0,I=o[r+"Score"]||0,A=w>b,T=I>v;if((A||T)&&!K.has(o.round)){K.add(o.round);const C=[...o.log||[]].reverse().find(W=>W.isGoal),N=((C==null?void 0:C.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(N,w,I,A,()=>Q());return}Q()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function te(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:m}=await _.from("matches").update({game_state:o}).eq("id",n);m&&c("Erreur de synchronisation","error");try{Q()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function ce(){if($)return;$=!0,z&&(clearInterval(z),z=null);const u=a?g.away_id:g.home_id,m=a?"p2":"p1",h=a?"p1":"p2",y={...o,[m+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await _.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{_.removeChannel(P)}catch{}setTimeout(()=>{He(e),l("home")},800)}const re={BOOST_STAT:({value:u=1,count:m=1,roles:h=[]},y,b)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([I])=>!h.length||h.includes(I)).flatMap(([I,A])=>A.filter(T=>!T.used).map(T=>({...T,_line:I})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}M(w,m,`Choisir ${m} joueur(s) à booster (+${u})`,I=>{I.forEach(A=>{const T=(v[A._line]||[]).find(C=>C.cardId===A.cardId);T&&(T.boost=(T.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${T.name}`,type:"info"}))}),y[i+"Team"]=v,b(y)})},DEBUFF_STAT:({value:u=1,count:m=1,roles:h=[],target:y="ai"},b,v)=>{const w=y==="home"?i:r,I=b[w+"Team"],A=y==="home"?"allié":"adverse",T=Object.entries(I).filter(([C])=>!h.length||h.includes(C)).flatMap(([C,N])=>N.filter(W=>!W.used).map(W=>({...W,_line:C})));if(!T.length){b.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),v(b);return}M(T,m,`Choisir ${m} joueur(s) ${A}(s) (-${u})`,C=>{C.forEach(N=>{const W=(I[N._line]||[]).find(le=>le.cardId===N.cardId);W&&(W.boost=(W.boost||0)-u,b.log.push({text:`🎯 -${u} sur ${W.name}`,type:"info"}))}),b[w+"Team"]=I,v(b)})},GRAY_PLAYER:({count:u=1,roles:m=[],target:h="ai"},y,b)=>{const v=h==="home"?i:r,w=y[v+"Team"],I=h==="home"?"allié":"adverse",A=Object.entries(w).filter(([T])=>!m.length||m.includes(T)).flatMap(([T,C])=>C.filter(N=>!N.used).map(N=>({...N,_line:T})));if(!A.length){y.log.push({text:`❌ Aucun joueur ${I}`,type:"info"}),b(y);return}M(A,u,`Choisir ${u} joueur(s) ${I}(s) à exclure`,T=>{T.forEach(C=>{const N=(w[C._line]||[]).find(W=>W.cardId===C.cardId);N&&(N.used=!0,y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,b(y)})},REVIVE_PLAYER:({count:u=1,roles:m=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!m.length||m.includes(w)).flatMap(([w,I])=>I.filter(A=>A.used).map(A=>({...A,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}M(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(I=>{const A=(b[I._line]||[]).find(T=>T.cardId===I.cardId);A&&(A.used=!1,h.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=b,y(h)})},REMOVE_GOAL:({},u,m)=>{const h=r+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(u)},ADD_GOAL_DRAW:({},u,m)=>{u[i+"Score"]===u[r+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(u)},ADD_SUB:({value:u=1},m,h)=>{m.maxSubs=(m.maxSubs||3)+u,m.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(m)},CUSTOM:({},u,m)=>m(u)};function M(u,m,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var A,T;const I=u.map(C=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[C._line]||"#555",W=we(C,C._line)+(C.boost||0),J=v.find(V=>V.cardId===C.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=C.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${C.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${N};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${C.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${C._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${I}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${m})
          </button>
        </div>`,(A=b.querySelector("#pp-close"))==null||A.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(C=>{C.addEventListener("click",()=>{const N=C.dataset.cid,W=u.find(J=>J.cardId===N),le=v.findIndex(J=>J.cardId===N);W&&(le>-1?v.splice(le,1):v.length<m&&v.push(W),w())})}),(T=b.querySelector("#pp-confirm"))==null||T.addEventListener("click",()=>{b.remove(),y(v)})}w(),document.body.appendChild(b)}async function Y(u,m){const y=(o["gcCardsFull_"+i]||[]).find(I=>I.id===u),b=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(I=>{var A;return I.name===m||((A=I.name)==null?void 0:A.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:m,by:i,seq:(o._gcAnimSeq||0)+1};q.add(w.seq),ge(m,i,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const A=re[b.effect_type];if(A){const T={...o};A(b.effect_params||{},T,async C=>{C["usedGc_"+i]=v,C._lastGC=w,C._gcAnimSeq=w.seq,await te(C)});return}}const I={...o};switch(m){case"Remplacement+":I.maxSubs=(I.maxSubs||3)+1,I.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=r+"Score";I[A]>0&&(I[A]--,I.log.push({text:"🚫 But annulé",type:"info"}));break}}I["usedGc_"+i]=v,I._lastGC=w,I._gcAnimSeq=w.seq,await te(I)})}function ne(u,m){const h="usedCardIds_"+u,y=new Set(o[h]||[]);m.forEach(b=>y.add(b)),o[h]=[...y]}function D(){for(const u of["p1","p2"]){const m=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(b=>{b.used=m.has(b.cardId)})}}function Q(){var Qe,mt,xt,yt,ht,X;if(o.phase==="reveal")return ae();if(o.phase==="midfield")return he();if(o.phase==="finished")return E();const u=o[i+"Team"],m=o[r+"Team"];D();const h=o[i+"Score"],y=o[r+"Score"],b=o[i+"Name"],v=o[r+"Name"],w=o.phase===i+"-attack",I=o.phase===i+"-defense",A=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],T=A.map(G=>G.cardId),C=window.innerWidth>=700,N=o[i+"Subs"]||[],W=o["usedSubIds_"+i]||[],le=N.filter(G=>!W.includes(G.cardId)),J=o["gcCardsFull_"+i]||[],H=o["usedGc_"+i]||[],V=J.filter(G=>!H.includes(G.id)),Z=o.boostOwner===i&&!o.boostUsed,de=!["GK","DEF","MIL","ATT"].some(G=>(m[G]||[]).some(oe=>!oe.used)),ue=[...u.MIL||[],...u.ATT||[]].filter(G=>!G.used),fe=w&&de&&ue.length===0?[...u.GK||[],...u.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];function me(G,oe,se){var wt,mi;const ye=G._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Je=(ye==null?void 0:ye.name)||G.gc_type,et=(ye==null?void 0:ye.effect)||((wt=Ne[G.gc_type])==null?void 0:wt.desc)||"",Mt=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,St=((mi=Ne[G.gc_type])==null?void 0:mi.icon)||"⚡",bt=Math.round(se*.22),lt=Math.round(se*.22),vt=se-bt-lt,Ct=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${G.id}" data-gc-type="${G.gc_type}"
        style="box-sizing:border-box;width:${oe}px;height:${se}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ct}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${oe-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Mt?`<img src="${Mt}" style="max-width:${oe-10}px;max-height:${vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(vt*.55)}px">${St}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(G,oe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${G}px;height:${oe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(oe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(oe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(oe*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const je=(G,oe)=>oe?be(130,175):me(G,130,175),Re=(G,oe)=>oe?be(68,95):me(G,68,95),De=C?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=w?Ae(i)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:I?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Le=w&&!Ae(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||I?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${C?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(G=>`<div class="pvp-sub-btn" data-sub-id="${G.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(G,C?76:44,C?100:58)}</div>`).join("")}
    </div>`,Ge=w?"attack":I?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(u,o[i+"Formation"],Ge,T,300,300,fe)}
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
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(w&&((se=o.pendingAttack)!=null&&se.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",ye.total)}
        </div>`}const G=(o.log||[]).slice(-1)[0];return G?'<div style="padding:2px 4px">'+Ue(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Be=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Xe(e),e.style.overflow="hidden",C?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Be}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ie}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${V.map(G=>je(G,!1)).join("")}
            ${Z?je(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Be}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(u,o[i+"Formation"],Ge,T,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${V.map(G=>Re(G,!1)).join("")}
            ${Z?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&le.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&le.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&le.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&le.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${le.length}</div>
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
      </div>`;function qe(){const G=e.querySelector(".match-screen");if(!G)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.height=oe+"px",G.style.minHeight=oe+"px",G.style.maxHeight=oe+"px",G.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(qe(),setTimeout(qe,120),setTimeout(qe,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",qe),window.visualViewport.addEventListener("scroll",qe)),window.addEventListener("resize",qe)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>{if(!w&&!I)return;const oe=G.dataset.cardId,se=G.dataset.role,ye=(u[se]||[]).find(et=>et.cardId===oe);if(!ye||ye.used)return;const Ye=fe.includes(oe);if(w&&!["MIL","ATT"].includes(se)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Je=We.findIndex(et=>et.cardId===oe);Je>-1?We.splice(Je,1):We.length<3&&We.push({...ye,_role:se}),Q()})}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>S(G.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(G=>{G.addEventListener("click",()=>S())}),(Qe=e.querySelector("#pvp-sub-open"))==null||Qe.addEventListener("click",()=>S()),e.querySelectorAll(".pvp-gc-mini").forEach(G=>{G.addEventListener("click",()=>R(G.dataset.gcId,G.dataset.gcType))}),(mt=e.querySelector("#pvp-boost-card"))==null||mt.addEventListener("click",()=>O()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",G=>{w?G.currentTarget.dataset.pass==="1"||!Ae(i)?ee():ke():I&&_e()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ce()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>U()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>ie()),z&&(clearInterval(z),z=null),(w||I)&&!$){let G=30,oe=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=G+"s",se().style.color=oe?"#ff4444":"#fff")};ye(),z=setInterval(()=>{G--,G<0?oe?(clearInterval(z),z=null,w&&!Ae(i)?ee():ce()):(oe=!0,G=15,ye()):ye()},1e3)}}function ae(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await te({phase:"midfield"})},5e3)}let pe=!1;function he(){if(pe)return;const u=o[i+"Team"].MIL||[],m=o[r+"Team"].MIL||[];function h(V){return V.reduce((Z,de)=>Z+we(de,"MIL"),0)}function y(V){let Z=0;for(let de=0;de<V.length-1;de++){const ue=Ze(V[de],V[de+1]);ue==="#00ff88"?Z+=2:ue==="#FFD700"&&(Z+=1)}return Z}const b=h(u)+y(u),v=h(m)+y(m),w=b>=v;function I(V,Z,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Z}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((ue,fe)=>{const me=fe<V.length-1?Ze(ue,V[fe+1]):null,be=!me||me==="#ff3333"||me==="#cc2222",je=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ue,note:we(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<V.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${me}`}">
              ${je?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${je}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${de}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
      ${I(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${I(m,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(V,Z)=>e.querySelectorAll(V).forEach((de,ue)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},Z+ue*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,Z)=>setTimeout(()=>{V.style.opacity="1"},Z*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Z=>Z.style.opacity="1")},1250);function T(V,Z,de){const ue=document.getElementById(V);if(!ue)return;const fe=performance.now(),me=be=>{const je=Math.min(1,(be-fe)/de);ue.textContent=Math.round(Z*(1-Math.pow(1-je,3))),je<1?requestAnimationFrame(me):ue.textContent=Z};requestAnimationFrame(me)}setTimeout(()=>{T("pvp-score-me",b,800),T("pvp-score-opp",v,800)},1500);const C=o.p1Team.MIL||[],N=o.p2Team.MIL||[],W=h(C)+y(C),le=h(N)+y(N),J=W>=le?"p1":"p2";let H=o.boostValue;H==null&&(H=li(),o.boostValue=H,o.boostOwner=J,o.boostUsed=!1),pe=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(w?"me":"opp")),Z=e.querySelector("#duel-row-"+(w?"opp":"me")),de=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),fe=w?de:ue,me=w?ue:de;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),Z&&(Z.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const be=document.getElementById("pvp-duel-finale");if(!be)return;const je=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+je+Re,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ie=J;await te({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:H,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function xe(u,m,h,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(C,N)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${N%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][N%8]}</div>`).join(""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${m} – ${h}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(C=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${I[C.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${C.portrait?`<img src="${C.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(C.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let A=!1;const T=()=>{A||(A=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",T),setTimeout(T,3500)}function ge(u,m,h){var H,V;const y=(o.gcDefs||[]).find(Z=>{var de;return Z.name===u||((de=Z.name)==null?void 0:de.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((H=Ne[u])==null?void 0:H.desc)||"",A=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,T=((V=Ne[u])==null?void 0:V.icon)||"⚡",N=m===i?"Vous":o[m+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${N} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${T}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let le=!1;const J=()=>{le||(le=!0,W.remove(),setTimeout(()=>h&&h(),50))};W.addEventListener("click",J),setTimeout(J,3e3)}function R(u,m){var W,le,J,H;const y=(o["gcCardsFull_"+i]||[]).find(V=>V.id===u),b=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",I=(b==null?void 0:b.name)||m,A=(b==null?void 0:b.effect)||((W=Ne[m])==null?void 0:W.desc)||"Carte spéciale.",T=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,C=((le=Ne[m])==null?void 0:le.icon)||"⚡",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",N.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${I.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${I}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${T?`<img src="${T}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${C}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(N),(J=N.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>N.remove()),(H=N.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{N.remove(),Y(u,m)})}function O(){var y;const u=o[i+"Team"],m=Object.entries(u).flatMap(([b,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!m.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(b=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=we(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const v=b.dataset.cid,w=m.find(A=>A.cardId===v);if(!w)return;const I=(u[w._line]||[]).find(A=>A.cardId===v);I&&(I.boost=(I.boost||0)+o.boostValue),h.remove(),await te({[i+"Team"]:u,boostUsed:!0})})})}function S(u=null){var le,J;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],b=o.maxSubs||3;if(y.length>=b){c(`Maximum ${b} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([H,V])=>(V||[]).filter(Z=>Z.used).map(Z=>({...Z,_line:H}))),w=(o[i+"Subs"]||[]).filter(H=>!y.includes(H.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let I=Math.max(0,v.findIndex(H=>H.cardId===u));const A=((le=v[I])==null?void 0:le._line)||((J=v[I])==null?void 0:J.job);let T=Math.max(0,w.findIndex(H=>H.job===A)),C=!1;const N=document.createElement("div");N.id="pvp-sub-overlay",N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,be,je,Re,De,Ie;const H=v[I],V=w[T],Z=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(Z*1.35),ue=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;N.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(T===0)}" ${T===0?"disabled":""}>▲</button>
          <div>${V?Ve({...V,used:!1,boost:0},Z,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(T>=w.length-1)}" ${T>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${T+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},Z,de):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(I>=v.length-1)}" ${I>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=N.querySelector("#psub-close"))==null||me.addEventListener("click",()=>N.remove()),(be=N.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{I>0&&(I--,W())}),(je=N.querySelector("#pout-down"))==null||je.addEventListener("click",()=>{I<v.length-1&&(I++,W())}),(Re=N.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{T>0&&(T--,W())}),(De=N.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{T<w.length-1&&(T++,W())});const fe=(Le,Fe,Ge,Oe)=>{const Ue=N.querySelector("#"+Le);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",Be=>{Ke=Be.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Be=>{const qe=Be.changedTouches[0].clientY-Ke;if(Math.abs(qe)<30)return;const Qe=Fe();qe<0&&Qe<Oe-1?(Ge(Qe+1),W()):qe>0&&Qe>0&&(Ge(Qe-1),W())},{passive:!0})};fe("pin-panel",()=>T,Le=>T=Le,w.length),fe("pout-panel",()=>I,Le=>I=Le,v.length),(Ie=N.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),C)return;C=!0;const Fe=v[I],Ge=w[T];if(!Fe||!Ge)return;const Oe=Fe._line,Ue=(h[Oe]||[]).findIndex(qe=>qe.cardId===Fe.cardId);if(Ue===-1){c("Erreur : joueur introuvable","error"),N.remove();return}const Ke={...Ge,_line:Oe,position:Fe.position,used:!1,boost:0};h[Oe].splice(Ue,1,Ke);const Be=[...y,Ge.cardId];N.remove(),B(Fe,Ge,async()=>{await te({[i+"Team"]:h,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Be})})})}document.body.appendChild(N),W()}function B(u,m,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(A,T,C)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${T};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${C}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[A.job]||"#555"};border:3px solid ${T};position:relative;overflow:hidden;margin:0 auto">
        ${ze(A)?`<img src="${ze(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const I=()=>{w||(w=!0,b.remove(),setTimeout(()=>h(),50))};b.addEventListener("click",I),setTimeout(I,2200)}function U(){var m;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(m=u.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>u.remove())}function ie(){var h;const u=o.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(m),(h=m.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>m.remove())}async function ee(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",m=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Ee(o),b=Ae(u),v=y||!b?"finished":u+"-attack";await te({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:m,log:h}),v==="finished"&&await Pe(o)}async function ke(){const u=o[i+"Team"],m=!["GK","DEF","MIL","ATT"].some(v=>(o[r+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(W=>W.cardId===v.cardId)||v,I=m&&["GK","DEF"].includes(v._role),A=u[v._role]||[],T=A.findIndex(W=>W.cardId===v.cardId),C=ot(A.length),N=T>=0?C[T]:w._col??1;return{...w,_line:v._role,_col:N,...I?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Rt(h,o.modifiers[i]||{});ne(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(u[v._role]||[]).find(I=>I.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],Q();const b=[...o.log||[]];if(m){const v=(o[i+"Score"]||0)+1,w=h.map(N=>({name:N.name,note:we(N,N._line||"ATT"),portrait:ze(N),job:N.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const I=(o.round||0)+1,A=i==="p1"?"p2":"p1",T={...o,[i+"Team"]:u,[i+"Score"]:v},C=Ee(T);K.add(I),xe(w,v,o[r+"Score"]||0,!0,async()=>{await te({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:C?"finished":A+"-attack",attacker:A,round:I,log:b}),C&&await Pe({...o,[i+"Score"]:v})});return}b.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await te({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:b})}async function _e(){const u=o[i+"Team"],m=(o["selected_"+i]||[]).map(H=>{const V=(u[H._role]||[]).find(me=>me.cardId===H.cardId)||H,Z=u[H._role]||[],de=Z.findIndex(me=>me.cardId===H.cardId),ue=ot(Z.length),fe=de>=0?ue[de]:V._col??1;return{...V,_line:H._role,_col:fe}}),h=Ot(m,o.modifiers[i]||{});ne(i,m.map(H=>H.cardId)),m.forEach(H=>{const V=(u[H._role]||[]).find(Z=>Z.cardId===H.cardId);V&&(V.used=!0)}),o["selected_"+i]=[],Q();const y=Ht(o.pendingAttack.total,h.total,o.modifiers[i]||{}),b=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=b==="p1"?"p2":"p1",I=(o.round||0)+1,A=(o.pendingAttack.players||[]).map(H=>({name:H.name,note:we(H,H._line||"ATT"),portrait:ze(H),job:H.job})),T=[...o.log||[]];T.push({type:"duel",isGoal:v,homeScored:v&&b===i,text:v?`⚽ BUT de ${o[b+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:A,aiPlayers:m.map(H=>({name:H.name,note:we(H,H._line||"DEF"),portrait:ze(H),job:H.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const C=v?(o[b+"Score"]||0)+1:o[b+"Score"]||0,N={...o,[i+"Team"]:u,[b+"Score"]:C},W=Ee(N),le=W?"finished":w+"-attack",J=async()=>{await te({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],[b+"Score"]:C,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:le,attacker:w,round:I,log:T}),(le==="finished"||W)&&await Pe({...o,[b+"Score"]:C})};if(v){const H=b===i,V=H?C:o[i+"Score"]||0,Z=H?o[r+"Score"]||0:C;K.add(I),xe(A,V,Z,H,J)}else await J()}function $e(u){return["MIL","ATT"].some(m=>(u[m]||[]).some(h=>!h.used))}function Me(u){return["GK","DEF","MIL","ATT"].some(m=>(u[m]||[]).some(h=>!h.used))}function Te(u){return Me(u)&&!$e(u)}function Ae(u){const m=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!($e(m)||!Me(h)&&Te(m))}function Ee(u){const m=["MIL","ATT"].some(T=>(u.p1Team[T]||[]).some(C=>!C.used)),h=["MIL","ATT"].some(T=>(u.p2Team[T]||[]).some(C=>!C.used)),y=Me(u.p1Team),b=Me(u.p2Team);return!m&&!(!b&&y)&&(!h&&!(!y&&b))}function Ce(u){const m=u.p1Score||0,h=u.p2Score||0;return m===h?null:m>h?g.home_id:g.away_id}async function Pe(u){try{const m=Ce(u),h=m?g.home_id===m?g.away_id:g.home_id:null;await _.from("matches").update({status:"finished",winner_id:m,home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n),m&&h&&Ni(m,h).catch(()=>{})}catch(m){console.error("[PvP] finishMatch:",m)}}function E(){var b;const u=o[i+"Score"],m=o[r+"Score"],h=u>m,y=u===m;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{_.removeChannel(P)}catch{}He(e),l("home")})}Q()}const zo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Mo(e,t){const{state:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:a}=t,{data:p}=await _.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:d}=await _.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",n.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(p||[]).filter(i=>i.seller_id!==n.profile.id),l=d||[];l.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${s.length} carte(s) en vente · Solde : ${(n.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function c(i){const r=document.getElementById("mkt-content"),f=i==="buy"?s:l;if(f.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const x=i==="mine"?[...f].sort((g,k)=>g.status!==k.status?g.status==="active"?-1:1:new Date(k.listed_at)-new Date(g.listed_at)):f;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${x.map(g=>{var F,K,q,j;const k=(F=g.card)==null?void 0:F.player;if(!k)return"";const o=k.job==="GK"?k.note_g:k.job==="DEF"?k.note_d:k.job==="MIL"?k.note_m:k.note_a,$=zo[k.rarity],L=(n.profile.credits||0)>=g.price,z=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${z?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Bo(k.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${$};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${k.firstname} ${k.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${k.country_code} · ${((K=k.clubs)==null?void 0:K.encoded_name)||"—"} · ${k.rarity} · ${k.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((q=g.seller)==null?void 0:q.pseudo)||"—"}</div>`:z?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((j=g.buyer)==null?void 0:j.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${L?"":"disabled"} style="margin-top:4px">${L?"Acheter":"Trop cher"}</button>`:z?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>So(g.dataset.buy,f,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>jo(g.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const f=r===i;r.style.background=f?"var(--green)":"#fff",r.style.color=f?"#fff":"var(--gray-600)",r.style.borderColor=f?"var(--green)":"var(--gray-200)"}),c(i.dataset.tab)})})}async function So(e,t,n,a){var g;const{state:p,toast:d,refreshProfile:s}=a,l=t.find(k=>k.id===e);if(!l)return;const c=l.price,i=p.profile.credits||0,r=(g=l.card)==null?void 0:g.player;if(i<c){d("Crédits insuffisants","error");return}if(!await Co(r,c))return;const x=document.querySelector(`[data-buy="${e}"]`);x&&(x.disabled=!0,x.textContent="⏳");try{const{data:k,error:o}=await _.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(o)throw new Error(o.message);if(!(k!=null&&k.success))throw new Error((k==null?void 0:k.error)||"Achat impossible");p.profile.credits=i-c;const $=document.getElementById("nav-credits");$&&($.textContent=`💰 ${(i-c).toLocaleString("fr")}`),d(`✅ ${r==null?void 0:r.surname_encoded} ajouté à ta collection !`,"success"),fi(n,a)}catch(k){d("❌ "+k.message,"error"),x&&(x.disabled=!1,x.textContent="Acheter")}}function Co(e,t){return new Promise(n=>{const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
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
      </div>`,document.body.appendChild(a);const p=d=>{a.remove(),n(d)};a.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),a.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),a.addEventListener("click",d=>{d.target===a&&p(!1)})})}async function jo(e,t,n){const{toast:a}=n,{data:p}=await _.from("market_listings").select("card_id").eq("id",e).single();if(await _.from("market_listings").update({status:"cancelled"}).eq("id",e),p!=null&&p.card_id){const{count:d}=await _.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",p.card_id).eq("status","active");d||await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id)}a("Annonce retirée","success"),fi(t,n)}function Bo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Fo(e,{state:t,navigate:n,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await _.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${p&&p.length>0?p.map((d,s)=>`
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
  `}async function qo(e,{state:t,navigate:n,toast:a}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await _.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(d||[]).filter(r=>r.status==="finished"),c=(d||[]).filter(r=>r.status==="in_progress");function i(r){const f=r.home_id===p.id;f?r.home_score:r.away_score,f?r.away_score:r.home_score;const x=r.winner_id===p.id,g=r.home_score===r.away_score&&r.status==="finished",k=r.status!=="finished"?"…":g?"N":x?"V":"D",o=r.status!=="finished"||g?"#888":x?"#1A6B3C":"#c0392b";let $=s[r.mode]||r.mode;r.away_id===null&&!$.startsWith("IA")&&($="IA");const z=r.home_id===p.id?r.away:r.home;let F;r.away_id===null?F=$:z?F=`${z.club_name||z.pseudo} (${z.pseudo})`:F="Adversaire";let K="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(K=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const q=new Date(r.created_at),j=q.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+q.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),P=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${F}${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${$} · ${j}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${P}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${k}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(d||[]).length} match(s)</p>
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

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}dn(cn);const ve={user:null,profile:null,page:"home",params:{}};function $t(e,t="info",n=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},n))}function Do(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function kt(){if(!ve.user)return;const{data:e}=await _.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}const gi="mw_theme";function Pt(){return localStorage.getItem(gi)||"light"}function Go(e){var t;localStorage.setItem(gi,e),ni(e),(t=ve.profile)!=null&&t.id&&_.from("users").update({theme:e}).eq("id",ve.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Dt(e,t={}){ve.page=e,ve.params=t,an()}async function an(){var a,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const n={state:ve,navigate:Dt,toast:$t,openModal:Do,closeModal:ii,refreshProfile:kt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await bi(e,n);break;case"collection":await Sn(e,n);break;case"decks":await Xt(e,n);break;case"boosters":await Kn(e,n);break;case"match":{const d=ve.params&&ve.params.matchMode||"vs_ai_easy";d==="random"?await on(e,n):d==="friend"?await To(e,n,(a=ve.params)==null?void 0:a.friendId,(p=ve.params)==null?void 0:p.friendName):await so(e,n);break}case"market":await Mo(e,n);break;case"rankings":await Fo(e,n);break;case"matches":await qo(e,n);break;case"friends":await yn(e,n);break;default:await bi(e,n)}}function No(){const e=document.getElementById("app"),t=ve.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",p=>{p.preventDefault(),Dt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Pt()==="dark"?"light":"dark";Go(p),Li(p)}),Li(Pt())}function Li(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Po(){ni(Pt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await _.auth.getSession();if(!e){zi(),xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$t});return}ve.user=e.user,await kt(),zi();try{const{data:n}=await _.from("formation_links_overrides").select("formation, links"),a={};(n||[]).forEach(p=>{a[p.formation]=p.links}),ln(a)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!ve.profile){pn(document.getElementById("app"),{state:ve,navigate:async()=>{await kt(),Wt()},toast:$t,refreshProfile:kt});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){no(document.getElementById("app"),{state:ve,navigate:()=>Wt(),toast:$t,refreshProfile:kt});return}ve.profile.theme&&ve.profile.theme!==Pt()&&(localStorage.setItem(gi,ve.profile.theme),ni(ve.profile.theme)),Wt(),_.auth.onAuthStateChange(async(n,a)=>{n==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$t}))})}function Ro(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=Ro()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Wt(){const e=()=>{var n;(n=ve.user)!=null&&n.id&&_.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),No(),an()}function zi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function sn(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}Po().catch(e=>{console.error("Échec du démarrage:",e),sn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&sn("Le serveur met trop de temps à répondre.")},12e3);
