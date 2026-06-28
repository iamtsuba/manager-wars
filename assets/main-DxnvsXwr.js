import{s as A,l as Ze,j as Ii,F as oi,h as Mt,i as Zi,k as en,b as tn}from"./formation-links-CEzN0rcz.js";function xi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,d=document.getElementById("login-error");if(d.textContent="",!a||!p){d.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:l}=await A.auth.signInWithPassword({email:a,password:p});if(s.textContent="Se connecter",s.disabled=!1,l){d.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,d=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!p||!d){s.textContent="Remplissez tous les champs.";return}if(p.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==d){s.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await A.auth.signUp({email:a,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,c){s.textContent=c.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function nn(e,{state:t,navigate:n,toast:a,refreshProfile:p}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function l(){var $;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),f=(($=document.getElementById("setup-club"))==null?void 0:$.value)||"MW",m=f.trim().split(" ").filter(Boolean),g=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=s,i.style.borderColor=d),r&&(r.textContent=g,r.style.color=d)}document.getElementById("color1").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch1").style.background=d,l()}),document.getElementById("color2").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch2").style.background=s,l()});function c(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await A.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await A.from("users").select("id").eq("club_name",i).maybeSingle();if(f){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:g}=await A.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:d,club_color2:s,credits:1e4});if(g)throw g;await on(t.user.id),await p(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function on(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await A.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const It="#1A6B3C",Lt="#cc2222",rn="#D4A017",yi="#888";async function an(e,t){const{state:n,toast:a}=t;e.innerHTML=`
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
    </div>`,await Li(n,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>dn(n,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>zi(n,a,null,t))}async function Li(e,t,n={}){const{navigate:a}=n,p=e.user.id,{data:d,error:s}=await A.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${p},addressee_id.eq.${p}`),{count:l}=await A.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",p).eq("status","pending"),c=document.getElementById("pending-badge");c&&(l>0?(c.style.display="flex",c.textContent=l):c.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(s){console.error("[Friends] Erreur:",s),i.innerHTML=`<div style="color:${Lt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const r=(d||[]).map(g=>g.requester_id===p?g.addressee_id:g.requester_id);let f={};if(r.length){const{data:g}=await A.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(g||[]).forEach($=>{f[$.id]=$})}const m=(d||[]).map(g=>({friendshipId:g.id,friend:f[g.requester_id===p?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!m.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:g,friend:$})=>sn($,g)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>ln(e,g.dataset.stats,g.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",()=>{const $=g.dataset.friendId,o=g.dataset.friendName;console.log("[Friends] clic match",{fid:$,fname:o,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:$,friendName:o}):t("Erreur navigation","error")})})}function sn(e,t){const n=e.club_name||e.pseudo||"?",a=e.pseudo||"",p=(a||n).slice(0,2).toUpperCase(),d=e.club_color2||It,s=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,c=l&&Date.now()-l.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${rn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function dn(e,t){const n=ri();n.innerHTML=`
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
    ${ai()}`,document.body.appendChild(n);const a=n.querySelector("#friend-pseudo-input"),p=n.querySelector("#add-friend-error"),d=()=>n.remove();a.focus(),n.querySelector("#add-cancel").addEventListener("click",d),n.addEventListener("click",s=>{s.target===n&&d()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await A.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await A.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(c){const r=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=r;return}const{error:i}=await A.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}d(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function zi(e,t,n=null,a={}){const p=e.user.id,{data:d}=await A.from("friendships").select("id, requester_id").eq("addressee_id",p).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(m=>m.requester_id);let l={};if(s.length){const{data:m}=await A.from("users").select("id, pseudo, club_name").in("id",s);(m||[]).forEach(g=>{l[g.id]=g})}const c=(d||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),i=ri(),r=c||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(m=>{var g,$,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=m.requester)==null?void 0:g.club_name)||(($=m.requester)==null?void 0:$.pseudo)||"?"}
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
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",m=>{m.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:g}=await A.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Li(e,t,a),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await A.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function ln(e,t,n){const a=e.user.id,[p,d]=[a,t].sort(),s=a===p,{data:l}=await A.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",d).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},r=s?i.wins_p1||0:i.wins_p2||0,f=s?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,g=s?i.goals_p1||0:i.goals_p2||0,$=s?i.goals_p2||0:i.goals_p1||0,o=s?i.gc_used_p1||0:i.gc_used_p2||0,_=s?i.gc_used_p2||0:i.gc_used_p1||0,M=i.matches_total||0,L=(H,C,j,G=It,oe=Lt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${G}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${H}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${oe}">${j}</div>
    </div>`,B=ri();B.innerHTML=`
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
        ${L("Victoires",r,f)}
        ${L("Nuls",m,m,yi,yi)}
        ${L("Défaites",f,r)}
        ${L("Buts marqués",g,$)}
        ${L("Buts encaissés",$,g,Lt,It)}
        ${L("GC utilisés ⚡",o,_,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${M} match${M>1?"s":""} joué${M>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(B),B.querySelector("#stats-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",H=>{H.target===B&&B.remove()})}function ri(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ai(){return`
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
    </style>`}async function cn({player1Id:e,player2Id:t,score1:n,score2:a,gc1:p,gc2:d}){const[s,l]=[e,t].sort(),c=e!==s,i=c?a:n,r=c?n:a,f=c?d:p,m=c?p:d,g=i>r?1:0,$=r>i?1:0,o=i===r?1:0,{data:_}=await A.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",l).single();_?await A.from("friend_match_stats").update({wins_p1:_.wins_p1+g,wins_p2:_.wins_p2+$,draws:_.draws+o,goals_p1:_.goals_p1+i,goals_p2:_.goals_p2+r,gc_used_p1:_.gc_used_p1+f,gc_used_p2:_.gc_used_p2+m,matches_total:_.matches_total+1}).eq("player1_id",s).eq("player2_id",l):await A.from("friend_match_stats").insert({player1_id:s,player2_id:l,wins_p1:g,wins_p2:$,draws:o,goals_p1:i,goals_p2:r,gc_used_p1:f,gc_used_p2:m,matches_total:1})}const Ge={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function _e(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const hi=["ATT","MIL","DEF","GK"];function Mi(e){let t=0;const n=e.length;for(let a=0;a<n;a++)for(let p=a+1;p<n;p++){const d=e[a],s=e[p];if(!d||!s)continue;const l=d._col!=null&&s._col!=null&&d._col===s._col,c=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,i=hi.indexOf(d._line||d.job),r=hi.indexOf(s._line||s.job),f=Math.abs(i-r)===1;if(!((d._line||d.job)===(s._line||s.job)&&c||l&&f))continue;const $=d.country_code&&s.country_code&&d.country_code===s.country_code,o=d.club_id&&s.club_id&&d.club_id===s.club_id;$&&o?t+=2:($||o)&&(t+=1)}return t}function Pt(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;return d+(Number(l==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=Mi(e);let p=n+a;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:n,links:a,total:Math.max(0,p)}}function Ot(e,t={}){const n=e.reduce((d,s)=>{const l=s._line||s.job;let c=0;return l==="GK"?c=Number(s.note_g)||0:l==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0,d+c+(s.boost||0)},0),a=Mi(e);let p=n+a;return t.stolenNote&&(p-=t.stolenNote),{base:n,links:a,total:Math.max(0,p)}}function Ht(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Si(e,t,n="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const p=[...a].sort((s,l)=>{const c=t==="attack"?_e(s,"ATT"):s._line==="GK"?_e(s,"GK"):_e(s,"DEF");return(t==="attack"?_e(l,"ATT"):l._line==="GK"?_e(l,"GK"):_e(l,"DEF"))-c});let d=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(d,p.length,3))}function pn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ut={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,n,a,p){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",p)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Xt(e,t){var a,p;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((a=n.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((p=n.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function si(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ft(e,t){const n=pt[t]||pt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===s).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:s})),c=ot(l.length);l.forEach((i,r)=>{i._col=c[r]}),a[s]=l}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[s];i++){let r=d.findIndex(f=>f.job===s);if(r===-1&&(r=d.findIndex(f=>f.job2===s)),r===-1&&(r=0),d[r]){const f={...d[r],_line:s};l.push(f),d.splice(r,1)}}const c=ot(l.length);l.forEach((i,r)=>{i._col=c[r]}),a[s]=l}return a}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Oe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function di(e,t,n){const p=new Set,d=t.filter(r=>{const f=r.gc_type||r.id;return p.has(f)?!1:(p.add(f),!0)});let s=[];function l(r,f){const m=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},$={purple:"#9b59b6",light_blue:"#00bcd4"},o=g[m==null?void 0:m.color]||g.purple,_=$[m==null?void 0:m.color]||$.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":_};background:${o};
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(r)};function i(){var f,m,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${d.map($=>{const o=s.find(_=>_.gc_type===$.gc_type);return l($,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach($=>{$.addEventListener("click",()=>{const o=$.dataset.id,_=d.find(L=>L.id===o);if(!_)return;const M=s.findIndex(L=>L.gc_type===_.gc_type);M>-1?s.splice(M,1):s.length<3&&s.push(_),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{r&&c(s)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>c([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{s.length&&(s=[],i())})}i()}function un(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function fn(e,t,n){const{state:a,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await A.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const s=d.map(r=>r.id),{data:l}=await A.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let c=0;function i(){var L,B,H,C,j;const r=d[c],f=(l||[]).filter(G=>G.deck_id===r.id),m=f.filter(G=>{var oe;return G.is_starter&&((oe=G.card)==null?void 0:oe.player)}).map(G=>Xt(G.card,G.position)),g=f.find(G=>{var oe;return((oe=G.card)==null?void 0:oe.card_type)==="formation"}),$=r.formation||((L=g==null?void 0:g.card)==null?void 0:L.formation)||"4-4-2",o=m.length>=11?ft(m,$):null,_=m.length>=11;Xe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${un(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${$} · ${m.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===d.length-1?"0.1":"0.3"});color:${c===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(o,$,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((G,oe)=>`<div style="width:7px;height:7px;border-radius:50%;background:${oe===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${_?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${_?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${_?"pointer":"default"}">
          ${_?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const oe=e.querySelector(".deck-preview-wrap svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(B=document.getElementById("prev-deck"))==null||B.addEventListener("click",()=>{c>0&&(c--,i())}),(H=document.getElementById("next-deck"))==null||H.addEventListener("click",()=>{c<d.length-1&&(c++,i())}),(C=document.getElementById("validate-deck"))==null||C.addEventListener("click",()=>{if(!_)return;const G=t.state.params||{};t.navigate("match",{...G,matchMode:G.matchMode||n,deckId:r.id})}),(j=document.getElementById("cancel-deck-select"))==null||j.addEventListener("click",()=>{Oe(e),p("home")});const M=document.getElementById("deck-swipe-zone");if(M){let G=0,oe=0;M.addEventListener("touchstart",ce=>{G=ce.touches[0].clientX,oe=ce.touches[0].clientY},{passive:!0}),M.addEventListener("touchend",ce=>{const te=ce.changedTouches[0].clientX-G,z=ce.changedTouches[0].clientY-oe;Math.abs(te)<40||Math.abs(te)<Math.abs(z)||(te<0&&c<d.length-1?(c++,i()):te>0&&c>0&&(c--,i()))},{passive:!0})}}i()}function Ci(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),p=Ci(e),d=e._line||e.job||"MIL",s=ut[d]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(_e(e,d))||0)+(e.boost||0),i=ji(e==null?void 0:e.country_code),r=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Jt(e==null?void 0:e.country_code)?`<img src="${Jt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(p+=Ve(d,40,52),s<a.length-1){const l=Ze(d,a[s+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),p+="</div>",p}function Jt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ji(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,a,p=310,d=310,s=[]){var B;const l=Mt[t]||{},c=Ii(t)||oi[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const H of r)(e[H]||[]).forEach((j,G)=>{i[`${H}${G+1}`]=j});function f(H){const C=l[H];return C?{x:C.x*p,y:C.y*d}:null}let m="";for(const[H,C]of c){const j=f(H),G=f(C);if(!j||!G)continue;const oe=i[H],ce=i[C],te=Ze(oe,ce);te==="#00ff88"||te==="#FFD700"?(m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${te}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${te}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${te}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,$=64,o=13,_=16,M={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[H,C]of Object.entries(i)){const j=f(H);if(!j||!C)continue;const G=H.replace(/[0-9]/g,""),oe=ut[G]||"#555",ce=s.includes(C.cardId),te=n==="attack"&&(["MIL","ATT"].includes(G)||ce)&&!C.used||n==="defense"&&["GK","DEF","MIL"].includes(G)&&!C.used,z=a.includes(C.cardId);let V;n==="attack"?V=ce?Math.max(1,Number(C.note_a)||0):G==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:n==="defense"?V=G==="GK"?Number(C.note_g)||0:G==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:V=Number(G==="GK"?C.note_g:G==="DEF"?C.note_d:G==="MIL"?C.note_m:C.note_a)||0,V=V+(C.boost||0);const Z=(j.x-g/2).toFixed(1),F=(j.y-$/2).toFixed(1),J=M[C==null?void 0:C.rarity]||M.normal;if(C.used){const R=typeof import.meta<"u"&&"/manager-wars/"||"/",U=`${typeof window<"u"&&((B=window.location)==null?void 0:B.origin)||""}${R}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${Z}" y="${F}" width="${g}" height="${$}" rx="5" fill="#161616"/>`,m+=`<image href="${U}" xlink:href="${U}" x="${Z}" y="${F}" width="${g}" height="${$}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${Z}" y="${F}" width="${g}" height="${$}" rx="5" fill="none" stroke="${J}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${Z}" y="${F}" width="${g}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${G}" style="cursor:pointer"/>`;continue}const ae=z?.45:1,pe=z?"#FFD700":J,he=z?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,xe=$-o-_;m+=`<defs><clipPath id="cp-${H}"><rect x="${Z}" y="${(j.y-$/2+o).toFixed(1)}" width="${g}" height="${xe}"/></clipPath></defs>`,m+=`<rect x="${Z}" y="${F}" width="${g}" height="${$}" rx="5" fill="${oe}" opacity="${ae}"/>`;const ge=ze(C);ge&&(m+=`<image href="${ge}" xlink:href="${ge}" x="${Z}" y="${(j.y-$/2+o).toFixed(1)}" width="${g}" height="${xe}" clip-path="url(#cp-${H})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${Z}" y="${F}" width="${g}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y-$/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const N=(j.y+$/2-_).toFixed(1);m+=`<rect x="${Z}" y="${N}" width="${g}" height="${_}" fill="rgba(255,255,255,0.92)"/>`;{const R=Jt(C.country_code);R?m+=`<image href="${R}" xlink:href="${R}" x="${(j.x-20).toFixed(1)}" y="${(j.y+$/2-_+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(j.x-13).toFixed(1)}" y="${(j.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ji(C.country_code)}</text>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${V}</text>`;const Y=Ci(C);Y?m+=`<image href="${Y}" xlink:href="${Y}" x="${(j.x+g/2-14).toFixed(1)}" y="${(j.y+$/2-_+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(m+=`<text x="${(j.x+14).toFixed(1)}" y="${(j.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.boost&&(m+=`<rect x="${(j.x+g/2-12).toFixed(1)}" y="${(j.y-$/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(j.x+g/2-5).toFixed(1)}" y="${(j.y-$/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${C.boost}</text>`)}m+=`<rect x="${Z}" y="${F}" width="${g}" height="${$}" rx="5" fill="${z?"rgba(255,255,255,0.12)":"none"}" stroke="${pe}" stroke-width="${he}" opacity="${ae}"/>`,te&&(m+=`<rect x="${Z}" y="${F}" width="${g}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${z?"selected":""}" data-card-id="${C.cardId}" data-role="${G}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${p+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
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
  </div>`}async function li(e,t,n,a){var C;const{state:p,navigate:d,toast:s}=t;Xe(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return fn(e,t,n);const c=l.deckId;let i,r,f,m;try{const j=await Promise.all([A.from("decks").select("formation,name").eq("id",c).single(),A.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);i=j[0].data,f=j[0].error,r=j[1].data,m=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const g=(r||[]).filter(j=>{var G;return j.is_starter&&((G=j.card)==null?void 0:G.player)}).map(j=>Xt(j.card,j.position)),$=(r||[]).filter(j=>{var G;return!j.is_starter&&((G=j.card)==null?void 0:G.player)}).map(j=>Xt(j.card,j.position));if(g.length<11){rt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>d("decks"));return}const o=(r||[]).find(j=>{var G;return((G=j.card)==null?void 0:G.card_type)==="formation"}),_=(i==null?void 0:i.formation)||((C=o==null?void 0:o.card)==null?void 0:C.formation)||"4-4-2",{data:M,error:L}=await A.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:B}=await A.from("gc_definitions").select("*").eq("is_active",!0),H=(M||[]).map(j=>({...j,_gcDef:(B==null?void 0:B.find(G=>G.name===j.gc_type||G.id===j.gc_definition_id))||null}));a({deckId:c,formation:_,starters:g,subsRaw:$,gcCardsEnriched:H,gcDefs:B||[]})}async function gn(e,t){var n,a;try{const p=(a=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:a.id;try{(A.getChannels?A.getChannels():[]).forEach(s=>{const l=s.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&A.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}p&&await A.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}await li(e,t,"random",({deckId:p,formation:d,starters:s,subsRaw:l,gcCardsEnriched:c,gcDefs:i})=>{const r=f=>mn(e,t,p,d,s,l,f,i||[]);if(!c.length){r([]);return}di(e,c,r)})}async function mn(e,t,n,a,p,d,s=[],l=[]){var L;const{state:c,navigate:i,toast:r}=t;let f=!1,m=null;Xe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(B=!0)=>{f=!0,m&&(A.removeChannel(m),m=null),B&&await A.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(L=document.getElementById("mm-cancel"))==null||L.addEventListener("click",async()=>{try{await g(!0)}catch{}Oe(e),i("home")});const $=async(B,H,C)=>{if(f)return;f=!0,m&&(A.removeChannel(m),m=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(G=>setTimeout(G,600)),e.isConnected&&Bi(e,t,B,C,s,l)},{data:o,error:_}=await A.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:n});if(_||!(o!=null&&o.success)){r("Erreur de matchmaking","error"),Oe(e),i("home");return}if(o.matched){$(o.match_id,o.opponent_id,!1);return}const M=document.getElementById("mm-status");M&&(M.textContent="En attente d'un autre joueur..."),m=A.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},B=>{const H=B.new;H.status==="matched"&&H.match_id&&$(H.match_id,H.matched_with,!0)}).subscribe()}async function xn(e,t,n){const{state:a,navigate:p,toast:d}=t;try{(A.getChannels?A.getChannels():[]).forEach(i=>{const r=i.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&A.removeChannel(i)})}catch{}const{data:s}=await A.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!s){d("Match introuvable","error"),p("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),p("home");return}const l=s.home_id===a.profile.id;Bi(e,t,n,l,[],[])}async function Bi(e,t,n,a,p=[],d=[]){const{state:s,navigate:l,toast:c}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(T=>T.id),m=(p||[]).map(T=>({id:T.id,gc_type:T.gc_type,_gcDef:T._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await A.from("matches").select("*").eq("id",n).single();if(!g){c("Match introuvable","error"),l("home");return}async function $(){const[{data:T},{data:u},{data:x},{data:h}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),y=k=>({cardId:k.card_id,position:k.position,id:k.id,firstname:k.firstname,name:k.surname_encoded,country_code:k.country_code,club_id:k.club_id,job:k.job,job2:k.job2,note_g:Number(k.note_g)||0,note_d:Number(k.note_d)||0,note_m:Number(k.note_m)||0,note_a:Number(k.note_a)||0,rarity:k.rarity,skin:k.skin,hair:k.hair,hair_length:k.hair_length,clubName:k.club_encoded_name||null,clubLogo:k.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((T==null?void 0:T.starters)||[]).map(k=>y(k)),v=((u==null?void 0:u.starters)||[]).map(k=>y(k)),w=(T==null?void 0:T.formation)||"4-4-2",I=(u==null?void 0:u.formation)||"4-4-2";return{p1Team:ft(b,w),p2Team:ft(v,I),p1Subs:((T==null?void 0:T.subs)||[]).map(k=>y(k)),p2Subs:((u==null?void 0:u.subs)||[]).map(k=>y(k)),p1Formation:w,p2Formation:I,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!o)if(a){o=await $();const{data:T}=await A.from("matches").select("game_state").eq("id",n).single();!(T!=null&&T.game_state)||!Object.keys(T.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:g.home_id}).eq("id",n):o=T.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let T=0;T<30&&!o;T++){await new Promise(x=>setTimeout(x,400));const{data:u}=await A.from("matches").select("game_state").eq("id",n).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(o=u.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await A.from("matches").update({game_state:o}).eq("id",n)}let _=!1,M=null,L=!1;const B=new Set,H=new Set;function C(T){var k,E;try{A.removeChannel(j)}catch{}const u=o[i+"Score"]||0,x=o[r+"Score"]||0;let h,y;T.winner_id?(h=T.winner_id===s.profile.id,y=!1):T.forfeit?(h=u>x,y=!1):(y=u===x,h=u>x),(k=document.getElementById("pvp-end-overlay"))==null||k.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":h?"🏆":"😞",w=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${w}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${u} – ${x} ${o[r+"Name"]}</div>
      ${T.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(E=b.querySelector("#pvp-end-home"))==null||E.addEventListener("click",()=>{b.remove(),Oe(e),l("home")})}const j=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},T=>{const u=T.new;try{if(u.status==="finished"||u.forfeit){if(_)return;_=!0,M&&(clearInterval(M),M=null),u.game_state&&(o=u.game_state),C(u);return}if(u.game_state){const x=o;o=u.game_state;const h=o._lastGC;if(h&&h.seq&&!H.has(h.seq)&&(H.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>F());return}const y=x[i+"Score"]||0,b=x[r+"Score"]||0,v=o[i+"Score"]||0,w=o[r+"Score"]||0,I=v>y,k=w>b;if((I||k)&&!B.has(o.round)){B.add(o.round);const E=[...o.log||[]].reverse().find(D=>D.isGoal),S=((E==null?void 0:E.homePlayers)||[]).map(D=>({name:D.name,note:D.note,portrait:D.portrait,job:D.job}));he(S,v,w,I,()=>F());return}F()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function G(T){Object.assign(o,T),o.lastActionAt=new Date().toISOString();const{error:u}=await A.from("matches").update({game_state:o}).eq("id",n);u&&c("Erreur de synchronisation","error");try{F()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function oe(){if(_)return;_=!0,M&&(clearInterval(M),M=null);const T=a?g.away_id:g.home_id,u=a?"p2":"p1",x=a?"p1":"p2",h={...o,[u+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:T,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{A.removeChannel(j)}catch{}setTimeout(()=>{Oe(e),l("home")},800)}const ce={BOOST_STAT:({value:T=1,count:u=1,roles:x=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!x.length||x.includes(w)).flatMap(([w,I])=>I.filter(k=>!k.used).map(k=>({...k,_line:w})));if(!v.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}te(v,u,`Choisir ${u} joueur(s) à booster (+${T})`,w=>{w.forEach(I=>{const k=(b[I._line]||[]).find(E=>E.cardId===I.cardId);k&&(k.boost=(k.boost||0)+T,h.log.push({text:`⚡ +${T} sur ${k.name}`,type:"info"}))}),h[i+"Team"]=b,y(h)})},DEBUFF_STAT:({value:T=1,count:u=1,roles:x=[],target:h="ai"},y,b)=>{const v=h==="home"?i:r,w=y[v+"Team"],I=h==="home"?"allié":"adverse",k=Object.entries(w).filter(([E])=>!x.length||x.includes(E)).flatMap(([E,S])=>S.filter(D=>!D.used).map(D=>({...D,_line:E})));if(!k.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),b(y);return}te(k,u,`Choisir ${u} joueur(s) ${I}(s) (-${T})`,E=>{E.forEach(S=>{const D=(w[S._line]||[]).find(W=>W.cardId===S.cardId);D&&(D.boost=(D.boost||0)-T,y.log.push({text:`🎯 -${T} sur ${D.name}`,type:"info"}))}),y[v+"Team"]=w,b(y)})},GRAY_PLAYER:({count:T=1,roles:u=[],target:x="ai"},h,y)=>{const b=x==="home"?i:r,v=h[b+"Team"],w=x==="home"?"allié":"adverse",I=Object.entries(v).filter(([k])=>!u.length||u.includes(k)).flatMap(([k,E])=>E.filter(S=>!S.used).map(S=>({...S,_line:k})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${w}`,type:"info"}),y(h);return}te(I,T,`Choisir ${T} joueur(s) ${w}(s) à exclure`,k=>{k.forEach(E=>{const S=(v[E._line]||[]).find(D=>D.cardId===E.cardId);S&&(S.used=!0,h.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),h[b+"Team"]=v,y(h)})},REVIVE_PLAYER:({count:T=1,roles:u=[]},x,h)=>{const y=x[i+"Team"],b=Object.entries(y).filter(([v])=>!u.length||u.includes(v)).flatMap(([v,w])=>w.filter(I=>I.used).map(I=>({...I,_line:v})));if(!b.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(x);return}te(b,T,`Choisir ${T} joueur(s) à ressusciter`,v=>{v.forEach(w=>{const I=(y[w._line]||[]).find(k=>k.cardId===w.cardId);I&&(I.used=!1,x.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),x[i+"Team"]=y,h(x)})},REMOVE_GOAL:({},T,u)=>{const x=r+"Score";T[x]>0?(T[x]--,T.log.push({text:"🚫 Dernier but annulé !",type:"info"})):T.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(T)},ADD_GOAL_DRAW:({},T,u)=>{T[i+"Score"]===T[r+"Score"]?(T[i+"Score"]++,T.log.push({text:"🎯 But bonus !",type:"info"})):T.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(T)},ADD_SUB:({value:T=1},u,x)=>{u.maxSubs=(u.maxSubs||3)+T,u.log.push({text:`🔄 +${T} remplacement(s)`,type:"info"}),x(u)},CUSTOM:({},T,u)=>u(T)};function te(T,u,x,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function v(){var I,k;const w=T.map(E=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[E._line]||"#555",D=_e(E,E._line)+(E.boost||0),le=b.find(P=>P.cardId===E.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Q=E.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${E.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${le};background:${S};overflow:hidden;cursor:pointer;${Q}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${E.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${D}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${E._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
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
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(E=>{E.addEventListener("click",()=>{const S=E.dataset.cid,D=T.find(le=>le.cardId===S),W=b.findIndex(le=>le.cardId===S);D&&(W>-1?b.splice(W,1):b.length<u&&b.push(D),v())})}),(k=y.querySelector("#pp-confirm"))==null||k.addEventListener("click",()=>{y.remove(),h(b)})}v(),document.body.appendChild(y)}async function z(T,u){const h=(o["gcCardsFull_"+i]||[]).find(w=>w.id===T),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(w=>{var I;return w.name===u||((I=w.name)==null?void 0:I.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b=[...o["usedGc_"+i]||[],T],v={type:u,by:i,seq:(o._gcAnimSeq||0)+1};H.add(v.seq),xe(u,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=ce[y.effect_type];if(I){const k={...o};I(y.effect_params||{},k,async E=>{E["usedGc_"+i]=b,E._lastGC=v,E._gcAnimSeq=v.seq,await G(E)});return}}const w={...o};switch(u){case"Remplacement+":w.maxSubs=(w.maxSubs||3)+1,w.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=r+"Score";w[I]>0&&(w[I]--,w.log.push({text:"🚫 But annulé",type:"info"}));break}}w["usedGc_"+i]=b,w._lastGC=v,w._gcAnimSeq=v.seq,await G(w)})}function V(T,u){const x="usedCardIds_"+T,h=new Set(o[x]||[]);u.forEach(y=>h.add(y)),o[x]=[...h]}function Z(){for(const T of["p1","p2"]){const u=new Set(o["usedCardIds_"+T]||[]),x=o[T+"Team"];if(x)for(const h of["GK","DEF","MIL","ATT"])(x[h]||[]).forEach(y=>{y.used=u.has(y.cardId)})}}function F(){var Be,Qe,mt,xt,yt,ht;if(o.phase==="reveal")return J();if(o.phase==="midfield")return pe();if(o.phase==="finished")return He();const T=o[i+"Team"],u=o[r+"Team"];Z();const x=o[i+"Score"],h=o[r+"Score"],y=o[i+"Name"],b=o[r+"Name"],v=o.phase===i+"-attack",w=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],k=I.map(X=>X.cardId),E=window.innerWidth>=700,S=o[i+"Subs"]||[],D=o["usedSubIds_"+i]||[],W=S.filter(X=>!D.includes(X.cardId)),le=o["gcCardsFull_"+i]||[],Q=o["usedGc_"+i]||[],P=le.filter(X=>!Q.includes(X.id)),K=o.boostOwner===i&&!o.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(X=>(u[X]||[]).some(q=>!q.used)),de=[...T.MIL||[],...T.ATT||[]].filter(X=>!X.used),ue=v&&ee&&de.length===0?[...T.GK||[],...T.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function fe(X,q,re){var jt,wt;const se=X._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",We=(se==null?void 0:se.name)||X.gc_type,Je=(se==null?void 0:se.effect)||((jt=Ge[X.gc_type])==null?void 0:jt.desc)||"",et=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,St=((wt=Ge[X.gc_type])==null?void 0:wt.icon)||"⚡",Ct=Math.round(re*.22),bt=Math.round(re*.22),lt=re-Ct-bt,vt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${q}px;height:${re}px;border-radius:10px;border:2px solid ${Ye};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${vt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${q-6}px">${We}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${q-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${St}</span>`}
        </div>
        <div style="height:${bt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function me(X,q){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${q}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(q*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(q*.2)}px">⚡</div>
        <div style="font-size:${Math.round(q*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const be=(X,q)=>q?me(130,175):fe(X,130,175),Se=(X,q)=>q?me(68,95):fe(X,68,95),Re=E?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Fe=v?Ae(i)?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Re};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:w?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,Ie=v&&!Ae(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${E?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(X,E?76:44,E?100:58)}</div>`).join("")}
    </div>`,je=v?"attack":w?"defense":"idle",De=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(T,o[i+"Formation"],je,k,300,300,ue)}
      </div>
    </div>`;function Pe(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const q=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(X.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.homePlayers||[]).map(re=>nt(re)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${q?20:14}px;font-weight:900;color:${q?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${X.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${q?14:20}px;font-weight:900;color:${q?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${X.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.aiPlayers||[]).map(re=>nt(re)).join("")}
            </div>
          </div>
          ${X.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${X.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ue=(()=>{var q,re;if(w&&((q=o.pendingAttack)!=null&&q.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${b} ATTAQUE — Défendez !</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(v&&((re=o.pendingAttack)!=null&&re.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",se.total)}
        </div>`}const X=(o.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Pe(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ue}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;Xe(e),e.style.overflow="hidden",E?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Le}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${De}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Fe}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${P.map(X=>be(X,!1)).join("")}
            ${K?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(T,o[i+"Formation"],je,k,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${P.map(X=>Se(X,!1)).join("")}
            ${K?Se(null,!0):""}
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
          <div>${Fe}${Ie}</div>
        </div>
      </div>`;function Ce(){const X=e.querySelector(".match-screen");if(!X)return;const q=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=q+"px",X.style.minHeight=q+"px",X.style.maxHeight=q+"px",X.style.overflow="hidden";const re=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");re&&se&&(se.style.paddingBottom=re.offsetHeight+"px")}if(Ce(),setTimeout(Ce,120),setTimeout(Ce,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ce),window.visualViewport.addEventListener("scroll",Ce)),window.addEventListener("resize",Ce)),function(){const q=e.querySelector(".terrain-wrapper svg");q&&(q.removeAttribute("width"),q.removeAttribute("height"),q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",q.setAttribute("viewBox","-26 -26 352 352"),q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!v&&!w)return;const q=X.dataset.cardId,re=X.dataset.role,se=(T[re]||[]).find(Je=>Je.cardId===q);if(!se||se.used)return;const ye=ue.includes(q);if(v&&!["MIL","ATT"].includes(re)&&!ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Je=>Je.cardId===q);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...se,_role:re}),F()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>R(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>R())}),(Be=e.querySelector("#pvp-sub-open"))==null||Be.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>ge(X.dataset.gcId,X.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>N()),(mt=e.querySelector("#pvp-action"))==null||mt.addEventListener("click",X=>{v?X.currentTarget.dataset.pass==="1"||!Ae(i)?ne():ie():w&&ke()}),(xt=e.querySelector("#pvp-quit"))==null||xt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(yt=e.querySelector("#pvp-view-opp"))==null||yt.addEventListener("click",()=>U()),(ht=e.querySelector("#pvp-toggle-history"))==null||ht.addEventListener("click",()=>O()),M&&(clearInterval(M),M=null),(v||w)&&!_){let X=30,q=!1;const re=()=>document.getElementById("pvp-timer"),se=()=>{re()&&(re().textContent=X+"s",re().style.color=q?"#ff4444":"#fff")};se(),M=setInterval(()=>{X--,X<0?q?(clearInterval(M),M=null,v&&!Ae(i)?ne():oe()):(q=!0,X=15,se()):se()},1e3)}}function J(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await G({phase:"midfield"})},5e3)}let ae=!1;function pe(){if(ae)return;const T=o[i+"Team"].MIL||[],u=o[r+"Team"].MIL||[];function x(P){return P.reduce((K,ee)=>K+_e(ee,"MIL"),0)}function h(P){let K=0;for(let ee=0;ee<P.length-1;ee++){const de=Ze(P[ee],P[ee+1]);de==="#00ff88"?K+=2:de==="#FFD700"&&(K+=1)}return K}const y=x(T)+h(T),b=x(u)+h(u),v=y>=b;function w(P,K,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${K}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${P.map((de,ue)=>{const fe=ue<P.length-1?Ze(de,P[ue+1]):null,me=!fe||fe==="#ff3333"||fe==="#cc2222",be=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...de,note:_e(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<P.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${fe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(P)} + ${h(P)} liens = <b style="color:#fff">${x(P)+h(P)}</b>
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
      ${w(T,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${w(u,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(P,K)=>e.querySelectorAll(P).forEach((ee,de)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},K+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((P,K)=>setTimeout(()=>{P.style.opacity="1"},K*70)),900),setTimeout(()=>{const P=e.querySelector("#pvp-vs");P&&(P.style.opacity="1",P.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(K=>K.style.opacity="1")},1250);function k(P,K,ee){const de=document.getElementById(P);if(!de)return;const ue=performance.now(),fe=me=>{const be=Math.min(1,(me-ue)/ee);de.textContent=Math.round(K*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):de.textContent=K};requestAnimationFrame(fe)}setTimeout(()=>{k("pvp-score-me",y,800),k("pvp-score-opp",b,800)},1500);const E=o.p1Team.MIL||[],S=o.p2Team.MIL||[],D=x(E)+h(E),W=x(S)+h(S),le=D>=W?"p1":"p2";let Q=o.boostValue;Q==null&&(Q=si(),o.boostValue=Q,o.boostOwner=le,o.boostUsed=!1),ae=!0,setTimeout(()=>{const P=e.querySelector("#duel-row-"+(v?"me":"opp")),K=e.querySelector("#duel-row-"+(v?"opp":"me")),ee=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),ue=v?ee:de,fe=v?de:ee;ue&&(ue.style.fontSize="80px",ue.style.color=v?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{P&&(P.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",P.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),K&&(K.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Re;const me=document.getElementById("pvp-duel-finale");if(!me)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Q+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Se,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Re=document.getElementById("pvp-start-match"))==null||Re.addEventListener("click",async()=>{const Fe=le;await G({phase:Fe+"-attack",attacker:Fe,round:1,boostValue:Q,boostUsed:!1,boostOwner:Fe})})},600)},700)},2800)}function he(T,u,x,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(E,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
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
        ${u} – ${x}
      </div>
      ${T!=null&&T.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${T.map(E=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${w[E.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${E.portrait?`<img src="${E.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(E.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let I=!1;const k=()=>{I||(I=!0,b.remove(),setTimeout(()=>y(),50))};b.addEventListener("click",k),setTimeout(k,3500)}function xe(T,u,x){var Q,P;const h=(o.gcDefs||[]).find(K=>{var ee;return K.name===T||((ee=K.name)==null?void 0:ee.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",v=(h==null?void 0:h.name)||T,w=(h==null?void 0:h.effect)||((Q=Ge[T])==null?void 0:Q.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,k=((P=Ge[T])==null?void 0:P.icon)||"⚡",S=u===i?"Vous":o[u+"Name"]||"Adversaire",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",D.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${b}66}50%{box-shadow:0 0 60px ${b}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${b};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${b};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${v.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${v}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${k}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(D);let W=!1;const le=()=>{W||(W=!0,D.remove(),setTimeout(()=>x&&x(),50))};D.addEventListener("click",le),setTimeout(le,3e3)}function ge(T,u){var D,W,le,Q;const h=(o["gcCardsFull_"+i]||[]).find(P=>P.id===T),y=h==null?void 0:h._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((D=Ge[u])==null?void 0:D.desc)||"Carte spéciale.",k=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,E=((W=Ge[u])==null?void 0:W.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${E}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(le=S.querySelector("#pvp-gc-back"))==null||le.addEventListener("click",()=>S.remove()),(Q=S.querySelector("#pvp-gc-use"))==null||Q.addEventListener("click",()=>{S.remove(),z(T,u)})}function N(){var h;const T=o[i+"Team"],u=Object.entries(T).flatMap(([y,b])=>(b||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!u.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(y=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=_e(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#bp-close"))==null||h.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const b=y.dataset.cid,v=u.find(I=>I.cardId===b);if(!v)return;const w=(T[v._line]||[]).find(I=>I.cardId===b);w&&(w.boost=(w.boost||0)+o.boostValue),x.remove(),await G({[i+"Team"]:T,boostUsed:!0})})})}function R(T=null){var W,le;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const x=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){c(`Maximum ${y} remplacements atteint`,"warning");return}const b=Object.entries(x).flatMap(([Q,P])=>(P||[]).filter(K=>K.used).map(K=>({...K,_line:Q}))),v=(o[i+"Subs"]||[]).filter(Q=>!h.includes(Q.cardId));if(!b.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){c("Aucun remplaçant disponible","warning");return}let w=Math.max(0,b.findIndex(Q=>Q.cardId===T));const I=((W=b[w])==null?void 0:W._line)||((le=b[w])==null?void 0:le.job);let k=Math.max(0,v.findIndex(Q=>Q.job===I)),E=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function D(){var fe,me,be,Se,Re,Fe;const Q=b[w],P=v[k],K=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(K*1.35),de=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${P?Ve({...P,used:!1,boost:0},K,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${de(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(w===0)}" ${w===0?"disabled":""}>▲</button>
          <div>${Q?Ve({...Q,used:!1,boost:0},K,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(w>=b.length-1)}" ${w>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${w+1}/${b.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=S.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>S.remove()),(me=S.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{w>0&&(w--,D())}),(be=S.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{w<b.length-1&&(w++,D())}),(Se=S.querySelector("#pin-up"))==null||Se.addEventListener("click",()=>{k>0&&(k--,D())}),(Re=S.querySelector("#pin-down"))==null||Re.addEventListener("click",()=>{k<v.length-1&&(k++,D())});const ue=(Ie,Le,je,De)=>{const Pe=S.querySelector("#"+Ie);if(!Pe)return;let Ue=0;Pe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Pe.addEventListener("touchend",Ke=>{const Ce=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Ce)<30)return;const Be=Le();Ce<0&&Be<De-1?(je(Be+1),D()):Ce>0&&Be>0&&(je(Be-1),D())},{passive:!0})};ue("pin-panel",()=>k,Ie=>k=Ie,v.length),ue("pout-panel",()=>w,Ie=>w=Ie,b.length),(Fe=S.querySelector("#psub-confirm"))==null||Fe.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),E)return;E=!0;const Le=b[w],je=v[k];if(!Le||!je)return;const De=Le._line,Pe=(x[De]||[]).findIndex(Ce=>Ce.cardId===Le.cardId);if(Pe===-1){c("Erreur : joueur introuvable","error"),S.remove();return}const Ue={...je,_line:De,position:Le.position,used:!1,boost:0};x[De].splice(Pe,1,Ue);const Ke=[...h,je.cardId];S.remove(),Y(Le,je,async()=>{await G({[i+"Team"]:x,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(S),D()}function Y(T,u,x){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(I,k,E)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${k};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${E}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${k};position:relative;overflow:hidden;margin:0 auto">
        ${ze(I)?`<img src="${ze(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${b(u,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${b(T,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const w=()=>{v||(v=!0,y.remove(),setTimeout(()=>x(),50))};y.addEventListener("click",w),setTimeout(w,2200)}function U(){var u;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",T.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(T),(u=T.querySelector("#pvp-opp-close"))==null||u.addEventListener("click",()=>T.remove())}function O(){var x;const T=o.log||[],u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",u.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${T.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...T].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>u.remove())}async function ne(){if(o.phase!==i+"-attack")return;const T=i==="p1"?"p2":"p1",u=(o.round||0)+1,x=[...o.log||[]];x.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Te(o),y=Ae(T),b=h||!y?"finished":T+"-attack";await G({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:b,attacker:T,round:u,log:x}),b==="finished"&&await Ne(o)}async function ie(){const T=o[i+"Team"],u=!["GK","DEF","MIL","ATT"].some(b=>(o[r+"Team"][b]||[]).some(v=>!v.used)),x=(o["selected_"+i]||[]).map(b=>{const v=(T[b._role]||[]).find(D=>D.cardId===b.cardId)||b,w=u&&["GK","DEF"].includes(b._role),I=T[b._role]||[],k=I.findIndex(D=>D.cardId===b.cardId),E=ot(I.length),S=k>=0?E[k]:v._col??1;return{...v,_line:b._role,_col:S,...w?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!x.length)return;const h=Pt(x,o.modifiers[i]||{});V(i,x.map(b=>b.cardId)),x.forEach(b=>{const v=(T[b._role]||[]).find(w=>w.cardId===b.cardId);v&&(v.used=!0)}),o["selected_"+i]=[],F();const y=[...o.log||[]];if(u){const b=(o[i+"Score"]||0)+1,v=x.map(S=>({name:S.name,note:_e(S,S._line||"ATT"),portrait:ze(S),job:S.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:h.total,aiTotal:0});const w=(o.round||0)+1,I=i==="p1"?"p2":"p1",k={...o,[i+"Team"]:T,[i+"Score"]:b},E=Te(k);B.add(w),he(v,b,o[r+"Score"]||0,!0,async()=>{await G({[i+"Team"]:T,[i+"Score"]:b,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:E?"finished":I+"-attack",attacker:I,round:w,log:y}),E&&await Ne({...o,[i+"Score"]:b})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await G({[i+"Team"]:T,[r+"Team"]:o[r+"Team"],pendingAttack:{...h,players:x,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:y})}async function ke(){const T=o[i+"Team"],u=(o["selected_"+i]||[]).map(Q=>{const P=(T[Q._role]||[]).find(fe=>fe.cardId===Q.cardId)||Q,K=T[Q._role]||[],ee=K.findIndex(fe=>fe.cardId===Q.cardId),de=ot(K.length),ue=ee>=0?de[ee]:P._col??1;return{...P,_line:Q._role,_col:ue}}),x=Ot(u,o.modifiers[i]||{});V(i,u.map(Q=>Q.cardId)),u.forEach(Q=>{const P=(T[Q._role]||[]).find(K=>K.cardId===Q.cardId);P&&(P.used=!0)}),o["selected_"+i]=[],F();const h=Ht(o.pendingAttack.total,x.total,o.modifiers[i]||{}),y=o.pendingAttack.side,b=h==="attack"||(h==null?void 0:h.goal),v=y==="p1"?"p2":"p1",w=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(Q=>({name:Q.name,note:_e(Q,Q._line||"ATT"),portrait:ze(Q),job:Q.job})),k=[...o.log||[]];k.push({type:"duel",isGoal:b,homeScored:b&&y===i,text:b?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${x.total})`,homePlayers:I,aiPlayers:u.map(Q=>({name:Q.name,note:_e(Q,Q._line||"DEF"),portrait:ze(Q),job:Q.job})),homeTotal:o.pendingAttack.total,aiTotal:x.total});const E=b?(o[y+"Score"]||0)+1:o[y+"Score"]||0,S={...o,[i+"Team"]:T,[y+"Score"]:E},D=Te(S),W=D?"finished":v+"-attack",le=async()=>{await G({[i+"Team"]:T,[r+"Team"]:o[r+"Team"],[y+"Score"]:E,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:v,round:w,log:k}),(W==="finished"||D)&&await Ne({...o,[y+"Score"]:E})};if(b){const Q=y===i,P=Q?E:o[i+"Score"]||0,K=Q?o[r+"Score"]||0:E;B.add(w),he(I,P,K,Q,le)}else await le()}function Ee(T){return["MIL","ATT"].some(u=>(T[u]||[]).some(x=>!x.used))}function ve(T){return["GK","DEF","MIL","ATT"].some(u=>(T[u]||[]).some(x=>!x.used))}function $e(T){return ve(T)&&!Ee(T)}function Ae(T){const u=o[T+"Team"],x=o[(T==="p1"?"p2":"p1")+"Team"];return!!(Ee(u)||!ve(x)&&$e(u))}function Te(T){const u=["MIL","ATT"].some(k=>(T.p1Team[k]||[]).some(E=>!E.used)),x=["MIL","ATT"].some(k=>(T.p2Team[k]||[]).some(E=>!E.used)),h=ve(T.p1Team),y=ve(T.p2Team);return!u&&!(!y&&h)&&(!x&&!(!h&&y))}function qe(T){const u=T.p1Score||0,x=T.p2Score||0;return u===x?null:u>x?g.home_id:g.away_id}async function Ne(T){try{await A.from("matches").update({status:"finished",winner_id:qe(T),home_score:T.p1Score||0,away_score:T.p2Score||0}).eq("id",n)}catch(u){console.error("[PvP] finishMatch:",u)}}function He(){var y;const T=o[i+"Score"],u=o[r+"Score"],x=T>u,h=T===u;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${T} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{A.removeChannel(j)}catch{}Oe(e),l("home")})}F()}const yn="2026.06.28-2243";async function bi(e,{state:t,navigate:n,toast:a}){var d,s;const p=t.profile;p&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${yn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),n(l.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>n("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){wn(n);return}if(c==="match-random"){n("match",{matchMode:"random"});return}if(c==="match-friend"){n("friends");return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await A.auth.signOut(),window.location.reload()}),qi(t,a),vn(t,a,n),Fi(t,a,n))}async function Fi(e,t,n){const a=document.getElementById("ongoing-match-banner");if(!a)return;const p=e.profile.id,{data:d}=await A.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${p},away_id.eq.${p}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(c=>c.home_id===p?c.away_id:c.home_id).filter(Boolean);let l={};if(s.length){const{data:c}=await A.from("users").select("id, pseudo, club_name").in("id",s);(c||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}a.innerHTML=d.map(c=>{const i=c.home_id===p?c.away_id:c.home_id,r=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${c.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${c.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${c.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",()=>{const i=document.getElementById("page-content")||document.getElementById("app");xn(i,{state:e,navigate:n,toast:t},c.dataset.resume)})}),a.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{bn(async()=>{await hn(c.dataset.abandon,c.dataset.opp,p),t("Match abandonné (défaite 3-0)","info"),Fi(e,t,n)})})})}async function hn(e,t,n){const{data:a}=await A.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const p=a.home_id===n,d=p?0:3,s=p?3:0,l=a.game_state||{};l.p1Score=d,l.p2Score=s,l.phase="finished",l.forfeit=!0,await A.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:l}).eq("id",e)}function bn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function vn(e,t,n){var l,c,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:p}=await A.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){a.innerHTML="";return}const d=((l=p.inviter)==null?void 0:l.club_name)||((c=p.inviter)==null?void 0:c.pseudo)||"?",s=p.inviter_id;a.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",n("match",{matchMode:"friend",friendId:s,friendName:d})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await A.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),a.innerHTML="",t("Invitation refusée","info")})}async function qi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:a,error:p}=await A.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(a!=null&&a.length)){n.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(c=>{var i;return((i=c.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=d>2?` +${d-2}`:"";n.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{zi(e,t,()=>qi(e,t))})}function wn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const a=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",a),n.addEventListener("click",p=>{p.target===n&&a()}),n.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{a(),e("match",{matchMode:p.dataset.mode})})})}const Di={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Bt=["GK","DEF","MIL","ATT"],_n=["Tous","GK","DEF","MIL","ATT"],$n={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},ci={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Gi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function zt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,m;const n=e.player;if(!n)return"";const a=n.job||"ATT",p=At[a],d=Di[n.rarity]||"#ccc",s=zt(n,a),l=n.job2?zt(n,n.job2):null,c=n.job2?At[n.job2]:null,i=Gi(n),r=ci[n.country_code]||n.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${s}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(f=n.clubs)!=null&&f.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=n.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function vi(e){const t=e.job||"ATT",n=zt(e,t),a=ci[e.country_code]||e.country_code||"";return`
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
  </div>`}async function kn(e,t){const{state:n,navigate:a,toast:p,openModal:d,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await A.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(N=>N.card_type==="player"&&N.player),r=(l||[]).filter(N=>N.card_type==="game_changer"),f=(l||[]).filter(N=>N.card_type==="formation"),{data:m}=await A.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(m||[]).forEach(N=>{g[N.name]=N});const $=Object.keys(oi),o=Object.keys(Ge),_={};i.forEach(N=>{const R=N.player.id;_[R]=(_[R]||0)+1}),new Set(Object.keys(_).map(N=>String(N)));const M=new Set(f.map(N=>N.formation)),L=new Set(r.map(N=>N.gc_type));let B="player",H="Tous",C="",j=!1;function G(){return[...i].sort((N,R)=>{const Y=Bt.indexOf(N.player.job),U=Bt.indexOf(R.player.job);return Y!==U?Y-U:(N.player.surname_encoded||"").localeCompare(R.player.surname_encoded||"")})}function oe(){return[...c||[]].sort((N,R)=>{const Y=Bt.indexOf(N.job),U=Bt.indexOf(R.job);return Y!==U?Y-U:(N.surname_encoded||"").localeCompare(R.surname_encoded||"")})}function ce(){return G().filter(N=>{const R=N.player,Y=H==="Tous"||R.job===H,U=!C||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(C);return Y&&U})}function te(){return oe().filter(N=>{const R=H==="Tous"||N.job===H,Y=!C||`${N.firstname} ${N.surname_encoded}`.toLowerCase().includes(C);return R&&Y})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="player"?"var(--green)":"transparent"};
        color:${B==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="formation"?"var(--green)":"transparent"};
        color:${B==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="gc"?"var(--green)":"transparent"};
        color:${B==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function z(){const N=document.getElementById("col-filters");N&&(B==="player"?(N.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${C}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${_n.map(R=>`
            <button class="filter-btn" data-job="${R}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${R===H?"var(--green)":"var(--gray-200)"};
                background:${R===H?"var(--green)":"#fff"};
                color:${R===H?"#fff":"var(--gray-600)"}">
              ${R}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",R=>{C=R.target.value.toLowerCase(),V()}),e.querySelectorAll(".filter-btn").forEach(R=>{R.addEventListener("click",()=>{H=R.dataset.job,z(),V()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,z(),V()})):(N.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,z(),V()})))}function V(){const N=document.getElementById("col-grid");N&&(B==="player"?he(N):B==="formation"?xe(N):ge(N))}function Z(N,R,Y,U,O){O=O||"#7a28b8";const ne=document.getElementById("col-grid"),ie=document.getElementById("col-big");if(!ne||!ie)return;var ke=0;function Ee(){ie.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+R(N[ke])+"</div>";var ve=ie.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ve&&ve.addEventListener("click",function(){U(N[ke])}),requestAnimationFrame(function(){var $e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!$e||!ie)){var Ae=ie.clientHeight-8,Te=ie.clientWidth-24,qe=$e.offsetHeight,Ne=$e.offsetWidth;if(qe>0&&Ne>0&&Ae>40){var He=Math.min(Ae/qe,Te/Ne,1);$e.style.transform="scale("+He.toFixed(3)+")",$e.style.transformOrigin="top center"}}}),ne.innerHTML=N.map(function($e,Ae){return'<div class="col-mini-item" data-idx="'+Ae+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(Ae===ke?O:"transparent")+';transition:border-color .15s;overflow:hidden">'+Y($e,Ae===ke)+"</div>"}).join(""),ne.querySelectorAll(".col-mini-item").forEach(function($e){$e.addEventListener("click",function(){ke=Number($e.dataset.idx),Ee(),$e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ee()}function F(N){var R=.54,Y=Math.round(140*R),U=Math.round(310*R),O;if(!N||N._fake){var ne=N?N.player:null;if(!ne)return"";O=vi(ne)}else O=Vt(N,"");return'<div style="width:'+Y+"px;height:"+U+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+R+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+O+"</div></div>"}function J(N,R,Y){R=R||100,Y=Y||140;var U=Mt[N]||{},O={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ne=Math.max(3,Math.round(R*.06)),ie=Object.entries(U).map(function(Ee){var ve=Ee[0],$e=Ee[1],Ae=ve.replace(/\d+$/,""),Te=O[Ae]||"#888",qe=Math.round($e.x*R),Ne=Math.round($e.y*Y);return'<circle cx="'+qe+'" cy="'+Ne+'" r="'+ne+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ke=Math.max(1,Math.round(R/50));return'<svg viewBox="0 0 '+R+" "+Y+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+R+'" height="'+Y+'" fill="#1A6B3C"/><rect x="'+Math.round(R*.2)+'" y="'+Math.round(Y*.02)+'" width="'+Math.round(R*.6)+'" height="'+Math.round(Y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ke+'"/><line x1="0" y1="'+Math.round(Y*.5)+'" x2="'+R+'" y2="'+Math.round(Y*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ke+'"/><ellipse cx="'+Math.round(R*.5)+'" cy="'+Math.round(Y*.5)+'" rx="'+Math.round(R*.18)+'" ry="'+Math.round(Y*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ke+'"/><rect x="'+Math.round(R*.2)+'" y="'+Math.round(Y*.82)+'" width="'+Math.round(R*.6)+'" height="'+Math.round(Y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ke+'"/>'+ie+"</svg>"}function ae(N,R,Y){var U=Y>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+Y+"</div>":"",O=R?'data-form-id="'+R.id+'"':"",ne=N.length>7?14:N.length>5?16:19,ie=!!R;return"<div "+O+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ie?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ie?"":"filter:grayscale(1);opacity:0.5")+'">'+U+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ie?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ne+"px;font-weight:900;color:"+(ie?"#1A6B3C":"#aaa")+';line-height:1">'+N+'</div></div><div style="flex:1;overflow:hidden;background:'+(ie?"#1A6B3C":"#ccc")+'">'+J(N,140,220)+"</div></div>"}function pe(N,R){var Y=.54,U=Math.round(140*Y),O=Math.round(305*Y),ne=Math.round(O*.22),ie=O-ne,ke=N.length>7?5:7,Ee=J(N,U,ie),ve=R?"1.5px solid #2a7a40":"1px solid #ddd",$e=R?"":"filter:grayscale(1);opacity:0.45;",Ae=R?"#1A6B3C":"#bbb",Te="#fff";return'<div style="width:'+U+"px;height:"+O+"px;border-radius:6px;border:"+ve+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+$e+'"><div style="height:'+ne+"px;background:"+Ae+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ke+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(U-4)+'px">'+N+'</span></div><div style="height:'+ie+'px;overflow:hidden;flex-shrink:0">'+Ee+"</div></div>"}function he(N){if(j){const R=te();if(!R.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const Y=R.map(U=>i.find(O=>O.player.id===U.id)||{_fake:!0,player:U,id:"fake-"+U.id});Z(Y,U=>U._fake?vi(U.player):Vt(U,""),U=>U._fake?F({player:U.player,id:"x",_fake:!0}):F(U),U=>{U._fake||wi(U,i,_,t)},"#1A6B3C")}else{const R=ce();if(!R.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const Y={},U=[];R.forEach(O=>{Y[O.player.id]||(Y[O.player.id]=!0,U.push(O))}),Z(U,O=>{const ne=_[O.player.id]||1,ie=ne>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ne}</div>`:"",Ee=i.filter(ve=>ve.player.id===O.player.id&&ve.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(O,ie+Ee)},O=>F(O),O=>wi(O,i,_,t),"#1A6B3C")}}function xe(N){const R=j?$:[...M];if(!R.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const Y=R.map(U=>({formation:U,card:f.find(O=>O.formation===U)||null,owned:M.has(U)}));Z(Y,({formation:U,card:O,owned:ne})=>ae(U,ne?O:null,ne?f.filter(ie=>ie.formation===U).length:0),({formation:U,owned:O})=>pe(U,O),({card:U,owned:O})=>{O&&U&&An(U,f,t,d)},"#1A6B3C")}function ge(N){const R=Object.keys(g),Y=j?R.length?R:o:[...L];if(!Y.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const U=Y.map(O=>({type:O,gc:Ge[O]||{icon:"⚡",desc:""},def:g[O]||null,owned:L.has(O),card:r.find(ne=>ne.gc_type===O)||null}));Z(U,({type:O,gc:ne,def:ie,owned:ke,card:Ee})=>{const ve=ke?r.filter(x=>x.gc_type===O).length:0,$e=ve>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ve}</div>`:"",Ae=(ie==null?void 0:ie.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#b06ce0",light_blue:"#00d4ef"},Ne=Te[ie==null?void 0:ie.color]||Te.purple,He=qe[ie==null?void 0:ie.color]||qe.purple,T=(ie==null?void 0:ie.effect)||ne.desc||"",u=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return ke&&Ee?`<div data-gc-id="${Ee.id}" data-gc-type="${O}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${He};background:${Ne};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${He}66;cursor:pointer">
          ${$e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${O.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${O}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ae?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${u?`<img src="${u}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ne.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${T.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${O}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ne.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:O,gc:ne,def:ie,owned:ke})=>ke?(()=>{const Ee=Math.round(75.60000000000001),ve=Math.round(310*.54),$e=Math.round(ve*.65),Ae=Math.round(ve*.18),Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#9b59b6",light_blue:"#00bcd4"},Ne=Te[ie==null?void 0:ie.color]||Te.purple,He=qe[ie==null?void 0:ie.color]||qe.purple,T=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return`<div style="width:${Ee}px;height:${ve}px;border-radius:8px;background:${Ne};border:1px solid ${He};display:flex;flex-direction:column;overflow:hidden"><div style="height:${Ae}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ee-6}px">${O}</span></div><div style="height:${$e}px;display:flex;align-items:center;justify-content:center">${T?`<img src="${T}" style="max-width:${Ee-8}px;max-height:${$e-4}px;object-fit:contain">`:`<span style="font-size:24px">${ne.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((ie==null?void 0:ie.effect)||ne.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const Ee=Math.round(75.60000000000001),ve=Math.round(310*.54);return`<div style="width:${Ee}px;height:${ve}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ne.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${O}</span></div>`})(),({type:O,owned:ne,def:ie})=>{ne&&En(O,ie,d)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(N=>{N.addEventListener("click",()=>{B=N.dataset.tab,H="Tous",C="",j=!1,e.querySelectorAll(".col-tab-btn").forEach(R=>{const Y=R.dataset.tab===B;R.style.borderBottomColor=Y?"var(--green)":"transparent",R.style.color=Y?"var(--green)":"var(--gray-600)"}),z(),V()})}),z(),V()}function En(e,t,n){const a=Ge[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[t==null?void 0:t.color]||d.purple,c=s[t==null?void 0:t.color]||s.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _t=1e3;function An(e,t,n,a){var o,_,M;const{state:p,toast:d,closeModal:s,navigate:l,refreshProfile:c}=n,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const L=Mt[i]||{},B=oi[i]||[],H=290,C=360,j=20;function G(ce){const te=L[ce];return te?{x:te.x*H,y:te.y*C}:null}let oe=`<svg width="${H}" height="${C}" viewBox="0 0 ${H} ${C}" xmlns="http://www.w3.org/2000/svg">`;for(const[ce,te]of B){const z=G(ce),V=G(te);!z||!V||(oe+=`<line x1="${z.x}" y1="${z.y}" x2="${V.x}" y2="${V.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ce of Object.keys(L)){const te=G(ce);if(!te)continue;const z=ce.replace(/\d+/,""),V=r[z]||"#555";oe+=`<circle cx="${te.x}" cy="${te.y}" r="${j}" fill="${V}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,oe+=`<text x="${te.x}" y="${te.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return oe+="</svg>",oe}const m=t.filter(L=>L.formation===i),g=m.length,$=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${$?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(o=document.getElementById("direct-sell-form-btn"))==null||o.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${_t.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const L=m.find(H=>!H.is_for_sale)||m[0];if(!L){d("Aucune carte à vendre","error");return}const{error:B}=await A.from("cards").delete().eq("id",L.id);if(B){d(B.message,"error");return}await A.from("users").update({credits:(p.profile.credits||0)+_t}).eq("id",p.profile.id),await c(),d(`+${_t.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(_=document.getElementById("market-sell-form-btn"))==null||_.addEventListener("click",async()=>{const L=parseInt(document.getElementById("sell-price-form").value);if(!L||L<1){d("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:L}).eq("id",e.id),await A.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:L}),d("Carte mise en vente sur le marché !","success"),s(),l("collection")}),(M=document.getElementById("cancel-sell-form-btn"))==null||M.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),l("collection")})}async function wi(e,t,n,a){var ae,pe,he,xe,ge,N,R,Y,U;const{state:p,toast:d,openModal:s,closeModal:l,navigate:c,refreshProfile:i}=a,r=e.player,f=t.filter(O=>O.player.id===r.id),m=f.length,g=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0),$=r.rarity||"normal",{data:o}=await A.from("sell_price_configs").select("*").eq("rarity",$).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1),_=((ae=o==null?void 0:o[0])==null?void 0:ae.price)??$n[$]??1e3,M=r.rarity!=="legende",L=Gi(r),B=zt(r,r.job),H=r.job2?zt(r,r.job2):null,C=At[r.job]||"#1A6B3C",j=r.job2?At[r.job2]:null,G=Di[r.rarity]||"#ccc",oe=ci[r.country_code]||r.country_code||"",ce=f.map(O=>O.id);let te={};if(ce.length){const{data:O}=await A.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ce).order("transferred_at",{ascending:!0});(O||[]).forEach(ne=>{te[ne.card_id]||(te[ne.card_id]=[]),te[ne.card_id].push(ne)})}const z=O=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${O.club_name} <span style="color:var(--gray-600)">(${O.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${O.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${O.source==="booster"?"Booster":O.price?O.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,V=ce.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${m>1?`(${m} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${f.map((O,ne)=>{const ie=te[O.id]||[];return ie.length?`
            <div>
              ${m>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${ne+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${ie.map(z).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";s(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${G};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${C}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${C}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>
            </svg>
            ${H!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${j}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${H}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${oe}</div>
            ${(pe=r.clubs)!=null&&pe.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((he=r.clubs)==null?void 0:he.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${G}">${r.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${r.job}${r.job2?" / "+r.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([O,ne])=>{const ie=At[O],ke=Number(ne)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${ie}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ke}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${O}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${V}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div>
            <div style="font-size:12px;color:var(--gray-600)">Prix unitaire</div>
            <div style="font-size:18px;font-weight:900;color:var(--yellow)">${_.toLocaleString("fr")} cr.</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <button id="qty-minus" style="width:30px;height:30px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:900">−</button>
            <span id="qty-val" style="font-size:18px;font-weight:900;min-width:20px;text-align:center">1</span>
            <button id="qty-plus" style="width:30px;height:30px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:900">+</button>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:12px;color:var(--gray-600)">Total : <span id="qty-total" style="font-weight:900;color:#D4A017">${_.toLocaleString("fr")} cr.</span></div>
          <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
            Vendre
          </button>
        </div>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${M&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",l);let Z=1;const F=f.filter(O=>!O.is_for_sale).length,J=()=>{document.getElementById("qty-val").textContent=Z,document.getElementById("qty-total").textContent=(Z*_).toLocaleString("fr")+" cr.",document.getElementById("qty-minus").disabled=Z<=1,document.getElementById("qty-plus").disabled=Z>=F};(ge=document.getElementById("qty-minus"))==null||ge.addEventListener("click",()=>{Z>1&&(Z--,J())}),(N=document.getElementById("qty-plus"))==null||N.addEventListener("click",()=>{Z<F&&(Z++,J())}),J(),(R=document.getElementById("direct-sell-btn"))==null||R.addEventListener("click",async()=>{const O=Z*_;if(!confirm(`Vendre ${Z} carte${Z>1?"s":""} ${r.surname_encoded} pour ${O.toLocaleString("fr")} crédits ? Action irréversible.`))return;const ne=f.filter(ve=>!ve.is_for_sale).slice(0,Z);if(!ne.length){d("Aucune carte disponible à vendre","error");return}const ie=ne.map(ve=>ve.id),{error:ke}=await A.from("cards").delete().in("id",ie);if(ke){d(ke.message,"error");return}await A.from("users").update({credits:(p.profile.credits||0)+O}).eq("id",p.profile.id),await i();const Ee=document.getElementById("nav-credits");Ee&&(Ee.textContent=`💰 ${(p.profile.credits||0).toLocaleString("fr")}`),d(`+${O.toLocaleString("fr")} crédits ! ${ne.length} carte${ne.length>1?"s":""} vendue${ne.length>1?"s":""}.`,"success"),l(),c("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{const O=parseInt(document.getElementById("sell-price").value);if(!O||O<1){d("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:O}).eq("id",e.id),await A.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:O}),d("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(U=document.getElementById("cancel-sell-btn"))==null||U.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),l(),c("collection")})}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},at={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ut(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Ni(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ri(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Tn(e,t=44,n=58){var g;const a=e?Ut(e):null,p=e?Ri(e):null,d=Ni(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",l=at[s]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(n*.19),f=Math.round(n*.25),m=n-r-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qt(e,t){const{state:n,navigate:a,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await A.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:l,error:c}=await A.from("decks").insert({owner_id:n.profile.id,name:s}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),_i(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>_i(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",s.dataset.name);if(!l||l===s.dataset.name)return;const{error:c}=await A.from("decks").update({name:l}).eq("id",s.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Qt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await A.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:l}=await A.from("decks").delete().eq("id",s.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Qt(e,t)})})}async function _i(e,t,n){const{state:a,toast:p}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await A.from("decks").select("*").eq("id",e).single(),{data:s}=await A.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(s||[]).filter(g=>g.card_type==="player"&&g.player),c=(s||[]).filter(g=>g.card_type==="formation"),i=c.map(g=>g.formation).filter(Boolean),{data:r}=await A.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=d.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:d.name,formation:f,formationCardId:d.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:i};(r||[]).forEach(g=>{g.is_starter?m.slots[g.position]=g.card_id:m.subs.includes(g.card_id)||m.subs.push(g.card_id)}),gt(t,m,n)}function gt(e,t,n){var c;const{navigate:a}=n;Gt[t.formation];const p=$i(t.formation),d=p.filter(i=>t.slots[i]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Gt),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${Tn(r,44,58)}
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
  </div>`,In(e,t,p,n),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=$i(t.formation),f={};r.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,gt(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Mn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),gt(e,t,n)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{zn(t,e,n)})}function In(e,t,n,a){const p=e.querySelector("#deck-field");if(!p)return;const d=Mt[t.formation]||{},s=Ii(t.formation)||[],l={};for(const M of n){const L=t.slots[M],B=L?t.playerCards.find(H=>H.id===L):null;l[M]=B?B.player:null}const c=300,i=300,r=48,f=64,m=13,g=16,$=38;function o(M){const L=d[M];return L?{x:L.x*c,y:L.y*i}:null}let _="";for(const[M,L]of s){const B=o(M),H=o(L);if(!B||!H)continue;const C=l[M]?{...l[M],club_id:l[M].club_id,country_code:l[M].country_code,rarity:l[M].rarity}:null,j=l[L]?{...l[L],club_id:l[L].club_id,country_code:l[L].country_code,rarity:l[L].rarity}:null,G=Ze(C,j);G==="#ff3333"||G==="#cc2222"?_+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(_+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${G}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,_+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const M of n){const L=o(M);if(!L)continue;const B=l[M],H=M.replace(/\d+/,""),C=at[H]||"#555",j=(L.x-r/2).toFixed(1),G=(L.y-f/2).toFixed(1),oe={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[B==null?void 0:B.rarity]||"#aaa";if(B){const ce=Ut(B),te=Ri(B),z=Ni(B.country_code),V=Number(H==="GK"?B.note_g:H==="DEF"?B.note_d:H==="MIL"?B.note_m:B.note_a)||0,Z=f-m-g;_+=`<defs><clipPath id="dcp-${M}"><rect x="${j}" y="${(L.y-f/2+m).toFixed(1)}" width="${r}" height="${Z}"/></clipPath></defs>`,_+=`<rect x="${j}" y="${G}" width="${r}" height="${f}" rx="5" fill="${C}"/>`,ce&&(_+=`<image href="${ce}" x="${j}" y="${(L.y-f/2+m).toFixed(1)}" width="${r}" height="${Z}" clip-path="url(#dcp-${M})" preserveAspectRatio="xMidYMin slice"/>`),_+=`<rect x="${j}" y="${G}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,_+=`<text x="${L.x.toFixed(1)}" y="${(L.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(B.surname_encoded||"").slice(0,9)}</text>`;const F=(L.y+f/2-g).toFixed(1);_+=`<rect x="${j}" y="${F}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,z&&(_+=`<image href="${z}" x="${(L.x-21).toFixed(1)}" y="${(L.y+f/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),_+=`<text x="${L.x.toFixed(1)}" y="${(L.y+f/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${V}</text>`,te&&(_+=`<image href="${te}" x="${(L.x+r/2-14).toFixed(1)}" y="${(L.y+f/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),_+=`<rect x="${j}" y="${G}" width="${r}" height="${f}" rx="5" fill="none" stroke="${oe}" stroke-width="2"/>`}else _+=`<rect x="${j}" y="${G}" width="${r}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,_+=`<text x="${L.x.toFixed(1)}" y="${L.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,_+=`<text x="${L.x.toFixed(1)}" y="${(L.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${H}</text>`;_+=`<rect x="${j}" y="${G}" width="${r}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${M}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-$} ${-$} ${c+$*2} ${i+$*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${_}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(M=>{M.addEventListener("click",()=>Ln(M.dataset.pos,t,e,a))})}function Ln(e,t,n,a){var m,g,$;const{openModal:p,closeModal:d}=a,s=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(o=>o.id===l):null;(m=c==null?void 0:c.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,_])=>{var L;if(o===e||!_)return;const M=t.playerCards.find(B=>B.id===_);(L=M==null?void 0:M.player)!=null&&L.id&&i.add(M.player.id)}),t.subs.forEach(o=>{var M;const _=t.playerCards.find(L=>L.id===o);(M=_==null?void 0:_.player)!=null&&M.id&&i.add(_.player.id)});const r=new Set,f=t.playerCards.filter(o=>{const _=o.player;return!(_.job===s||_.job2===s)||i.has(_.id)||r.has(_.id)?!1:(r.add(_.id),!0)});f.sort((o,_)=>{const M=s==="GK"?o.player.note_g:s==="DEF"?o.player.note_d:s==="MIL"?o.player.note_m:o.player.note_a;return(s==="GK"?_.player.note_g:s==="DEF"?_.player.note_d:s==="MIL"?_.player.note_m:_.player.note_a)-M}),p(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var H,C;const _=o.player,M=s==="GK"?_.note_g:s==="DEF"?_.note_d:s==="MIL"?_.note_m:_.note_a,L=Ut(_),B={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[_.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${at[s]}">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${at[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${_.firstname} ${_.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${_.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${_.country_code}">
              ${(H=_.clubs)!=null&&H.logo_url?`<img src="${_.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((C=_.clubs)==null?void 0:C.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${_.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${at[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${B};flex-shrink:0">
            ${M}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",d),($=document.getElementById("remove-player"))==null||$.addEventListener("click",()=>{delete t.slots[e],d(),gt(n,t,a)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,d(),gt(n,t,a)})})}function zn(e,t,n){var c;const{openModal:a,closeModal:p}=n,d=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)}),e.subs.forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&d.add(r.player.id)});const s=new Set,l=e.playerCards.filter(i=>{var r,f,m;return d.has((r=i.player)==null?void 0:r.id)||s.has((f=i.player)==null?void 0:f.id)?!1:(s.add((m=i.player)==null?void 0:m.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var g;const r=i.player,f=Ut(r),m=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${at[r.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((g=r.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${at[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),gt(t,e,n)})})}async function Mn(e,t){const{state:n,toast:a,navigate:p}=t,d=e.formationCards.find(c=>c.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await A.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await A.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,i)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:c}=await A.from("deck_cards").insert(l);if(c){a(c.message,"error");return}}a("Deck enregistré ✅","success"),p("decks")}function $i(e){const t=Gt[e]||Gt["4-4-2"],n=["GK1"];for(let a=1;a<=t.DEF;a++)n.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)n.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)n.push(`ATT${a}`);return n}async function Pi(){const{data:e}=await A.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await A.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(a=>a.booster_id===n.id)}))}function Sn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,p)=>a+Number(p.percentage),0);let n=Math.random()*t;for(const a of e)if(n-=Number(a.percentage),n<=0)return a;return e[e.length-1]}const Oi=()=>Object.keys(Mt),Cn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Zt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function jn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const ki={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Bn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Fn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ei(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function qn(e){var r,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",a=ki[n],p=Bn[t.rarity]||"#ccc",d=Ei(t,n),s=t.job2?Ei(t,t.job2):null,l=t.job2?ki[t.job2]:null,c=jn(t),i=Fn[t.country_code]||t.country_code||"";return`
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
  </div>`}function Hi(e){var p;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const n=((p=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:p[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Dn(e,{state:t,navigate:n,toast:a}){var s;const p=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await Pi()).map(Hi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}d.length||(d=Cn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=d.find(i=>i.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Gn(c,{state:t,toast:a,navigate:n,container:e})}catch(i){a(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const i=d.find(r=>r.id===l.dataset.boosterId);On(i)})})}async function Gn(e,{state:t,toast:n,navigate:a,container:p}){var r;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await Kn()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await A.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((d||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await ei(t.profile,e);else{const f=e.type||"player";f==="player"?c=await Ui(t.profile,e.cardCount,e.cost):f==="game_changer"?c=await Ki(t.profile,e.cardCount,e.cost):f==="formation"?c=await Vi(t.profile,e.cost):c=await ei(t.profile,e)}c.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=s.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await A.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Yi(c,e,a)}function Nn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Rn(e,t){let n;switch(t){case"legende":n=e.filter(a=>a.rarity==="legende"),n.length||(n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),n.length||(n=e.filter(a=>tt(a)>=6));break;case"special":n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),n.length||(n=e.filter(a=>tt(a)>=6));break;case"normal_high":n=e.filter(a=>a.rarity==="normal"&&tt(a)>=6),n.length||(n=e.filter(a=>tt(a)>=6));break;default:n=e.filter(a=>a.rarity==="normal"&&tt(a)>=1&&tt(a)<=5),n.length||(n=e.filter(a=>a.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ei(e,t){if(t.cost>0){const{error:l}=await A.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await A.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),d=new Set,s=[];for(let l=0;l<(t.cardCount||5);l++){const c=Sn(t.rates);if(c){if(c.card_type==="player"){const i=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,r=c.rarity?i(c.rarity):null;let f=A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(f=f.eq("rarity",r));const{data:m}=await f;let g=m||[];if((c.note_min||c.note_max)&&(g=g.filter(L=>{const B=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!c.note_min||B>=c.note_min)&&(!c.note_max||B<=c.note_max)})),g.length||(c.note_min||c.note_max?(g=m||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):g=m||[]),!g.length)continue;let $=g.filter(L=>!d.has(L.id));$.length||($=g);const o=$[Math.floor(Math.random()*$.length)];d.add(o.id);const _=a.has(o.id),{data:M}=await A.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();M&&(s.push({...M,player:o,isDuplicate:_}),A.rpc("record_transfer",{p_card_id:M.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:i}=await A.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=r[Math.floor(Math.random()*r.length)].name,{data:g}=await A.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();g&&s.push(g)}else if(c.card_type==="formation"){const i=Oi(),r=i[Math.floor(Math.random()*i.length)],f=p.has(r),{data:m}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();m!=null&&m[0]&&s.push({...m[0],isDuplicate:f})}}}return s}async function Ui(e,t,n){if(n>0){const{error:i}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:a}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=a.filter(i=>i.job==="GK"),d=a.filter(i=>i.job!=="GK"),s=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&s?p:i===0?d:a,f=Nn(),m=Rn(r,f);m&&l.push(m)}s&&await A.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await A.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(c||[]).forEach((i,r)=>{A.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...c[r],player:i}))}async function Ki(e,t,n){const{error:a}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(a)throw a;const{data:p}=await A.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=p!=null&&p.length?p:Object.keys(Zt).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await A.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const f=p==null?void 0:p.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:f||null}})}async function Vi(e,t){const{error:n}=await A.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:a}=await A.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((a||[]).map(r=>r.formation)),d=Oi(),s=d[Math.floor(Math.random()*d.length)],l=p.has(s),{data:c,error:i}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(c||[]).map(r=>({...r,isDuplicate:l}))}function Yi(e,t,n,a=null){var V,Z;if(!e||e.length===0){const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",F.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(F),(V=F.querySelector("#anim-close-err"))==null||V.addEventListener("click",()=>F.remove());return}e=[...e].sort((F,J)=>{const ae=F.player?tt(F.player):-1;return(J.player?tt(J.player):-1)-ae});const p=document.createElement("div");p.id="booster-anim-overlay",p.innerHTML=`
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
  `,document.body.appendChild(p);let d=!1;const s=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let c=!1;const i=F=>F.touches&&F.touches[0]?F.touches[0].clientX:F.clientX;function r(F){d||(c=!0,l.style.opacity="1",f(F))}function f(F){if(!c||d)return;const J=s.getBoundingClientRect(),ae=i(F)-J.left,pe=Math.max(0,Math.min(1,ae/J.width));l.style.width=pe*J.width+"px",pe>=.82&&g()}function m(){d||(c=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{d||(l.style.transition="")},220))}function g(){var J;if(d)return;d=!0,c=!1,l.style.width="100%",l.style.opacity="1",(J=document.getElementById("cut-flash"))==null||J.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const F=document.getElementById("cut-hint");F&&(F.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",M(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let $=0,o=!1;const _=new Set;function M(F){$=F,document.getElementById("reveal-phase").style.display="flex",L(),B(F,0),oe()}function L(){const F=document.getElementById("card-dots");F&&(F.innerHTML=e.map((J,ae)=>`<div class="card-dot" data-i="${ae}" style="width:8px;height:8px;border-radius:50%;background:${ae===$?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),F.querySelectorAll(".card-dot").forEach(J=>J.addEventListener("click",()=>C(parseInt(J.dataset.i)))))}function B(F,J){var U;const ae=e[F],pe=document.getElementById("card-counter"),he=document.getElementById("card-track");pe&&(pe.textContent=`Carte ${F+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=F===e.length-1?"flex":"none");const ge=ae.card_type==="player"&&((U=ae.player)==null?void 0:U.rarity)==="legende",N=!_.has(F);_.add(F);let R=0;if(ae.card_type==="player"&&ae.player){const O=ae.player,ne=O.job||"ATT";R=Number(ne==="GK"?O.note_g:ne==="DEF"?O.note_d:ne==="MIL"?O.note_m:O.note_a)||0}const Y=O=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ge?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Pn(ae)}</div>
          ${ae.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ne=document.getElementById("current-card-wrap");J!==0?(ne.style.transition="none",ne.style.transform=`translateX(${J>0?100:-100}%)`,requestAnimationFrame(()=>{ne.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ne.style.transform="translateX(0)"})):ne.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),O||ge?te():z(),L()};N&&R>6&&ae.card_type==="player"&&ae.player?H(ae,()=>Y(!0)):Y(!1)}function H(F,J){var R;o=!0;const ae=F.player,pe=`https://flagsapi.com/${ae.country_code}/flat/64.png`,he=(R=ae.clubs)==null?void 0:R.logo_url,xe=document.getElementById("walkout-overlay"),ge=document.getElementById("walkout-stage");if(!xe||!ge){o=!1,J();return}xe.style.display="flex";const N=()=>{const Y=ge.firstElementChild;Y&&(Y.classList.remove("wo-in"),Y.classList.add("wo-out"))};ge.innerHTML=`<img class="wo-in" src="${pe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(N,2e3),setTimeout(()=>{var Y;ge.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Y=ae.clubs)==null?void 0:Y.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(N,4450),setTimeout(()=>{xe.style.display="none",ge.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),J()},4900)}function C(F){if(o||F<0||F>=e.length||F===$)return;const J=F>$?1:-1;$=F,B(F,J)}function j(){C($+1)}function G(){C($-1)}function oe(){const F=document.getElementById("card-viewport");if(!F||F._swipeBound)return;F._swipeBound=!0;let J=0,ae=0,pe=0,he=!1;const xe=U=>U.touches?U.touches[0].clientX:U.clientX,ge=U=>U.touches?U.touches[0].clientY:U.clientY,N=U=>{he=!0,J=xe(U),ae=ge(U),pe=0},R=U=>{if(!he)return;pe=xe(U)-J;const O=ge(U)-ae;if(Math.abs(pe)<Math.abs(O))return;const ne=document.getElementById("current-card-wrap");ne&&(ne.style.transition="none",ne.style.transform=`translateX(${pe*.6}px) rotate(${pe*.02}deg)`)},Y=()=>{if(!he)return;he=!1;const U=document.getElementById("current-card-wrap"),O=55;pe<=-O&&$<e.length-1?j():pe>=O&&$>0?G():U&&(U.style.transition="transform .2s ease",U.style.transform="translateX(0)")};F.addEventListener("pointerdown",N),F.addEventListener("pointermove",R),F.addEventListener("pointerup",Y),F.addEventListener("pointercancel",Y),F.addEventListener("touchstart",N,{passive:!0}),F.addEventListener("touchmove",R,{passive:!0}),F.addEventListener("touchend",Y),F.addEventListener("click",U=>{if(Math.abs(pe)>8)return;const O=F.getBoundingClientRect();U.clientX-O.left>O.width/2?j():G()})}let ce=null;function te(){const F=document.getElementById("fireworks-canvas");if(!F)return;F.width=window.innerWidth,F.height=window.innerHeight;const J=F.getContext("2d"),ae=[];function pe(){const xe=Math.random()*F.width,ge=Math.random()*F.height*.6,N=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],R=N[Math.floor(Math.random()*N.length)];for(let Y=0;Y<60;Y++){const U=Math.PI*2/60*Y,O=2+Math.random()*5;ae.push({x:xe,y:ge,vx:Math.cos(U)*O,vy:Math.sin(U)*O,alpha:1,color:R,size:2+Math.random()*3})}}pe(),ce=setInterval(pe,600);function he(){if(document.getElementById("fireworks-canvas")){J.clearRect(0,0,F.width,F.height);for(let xe=ae.length-1;xe>=0;xe--){const ge=ae[xe];if(ge.x+=ge.vx,ge.y+=ge.vy+.08,ge.vy*=.98,ge.alpha-=.018,ge.alpha<=0){ae.splice(xe,1);continue}J.globalAlpha=ge.alpha,J.fillStyle=ge.color,J.beginPath(),J.arc(ge.x,ge.y,ge.size,0,Math.PI*2),J.fill()}J.globalAlpha=1,(ce!==null||ae.length>0)&&requestAnimationFrame(he)}}he()}function z(){ce!==null&&(clearInterval(ce),ce=null);const F=document.getElementById("fireworks-canvas");F&&F.getContext("2d").clearRect(0,0,F.width,F.height)}if(a){const F=document.getElementById("reveal-btns");F&&(F.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(Z=document.getElementById("reveal-next"))==null||Z.addEventListener("click",()=>{z(),p.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{z(),p.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{z(),p.remove(),n("boosters")})}function Pn(e){var t,n;if(e.card_type==="player"&&e.player)return qn(e);if(e.card_type==="game_changer"){const a=e._gcDef,p=(a==null?void 0:a.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[a==null?void 0:a.color]||d.purple,c=s[a==null?void 0:a.color]||s.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=Zt[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,m=((n=Zt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function On(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>a.remove());return}Hn()}function Hn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Un="simulation",Wi="VOTRE_ZONE_ID";function Kn(){switch(Un){case"propellerads":return Vn();case"adsense":return Yn();default:return pi()}}function pi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{n--;const p=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");p&&(p.textContent=n),d&&(d.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(a),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Vn(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(pi());window.propeller.push({zone_id:Wi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Yn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(pi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Wi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function Wn(e,{state:t,navigate:n,toast:a,refreshProfile:p}){var m,g;const{data:d}=await A.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await A.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Pi()).find(_=>(_.name||"").toLowerCase().includes("new player"));o&&(l=Hi(o))}catch($){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',$)}const c=s.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await A.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function f(){var L;if(i>=c||!s.length){await A.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const $=s[0],{data:o}=await A.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let _=[];try{if($.type==="formation")_=await Vi(t.profile,0);else if($.type==="game_changer")_=await Ki(t.profile,$.count||3,0);else if(l&&((L=l.rates)!=null&&L.length)){const B={...l,cost:0,cardCount:$.count||l.cardCount||5};_=await ei(t.profile,B),$.guaranteeGK&&!t.profile.first_booster_opened&&(_.some(C=>C.player&&C.player.job==="GK")||await Xn(t.profile,_),await A.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else _=await Ui(t.profile,$.count||5,0)}catch(B){a(B.message||"Erreur ouverture booster","error");return}s.shift(),i++,await r();const M=$.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:$.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${c})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Yi(_,M,n,()=>{f()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>f())}async function Xn(e,t){try{const{data:n}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const a=n[Math.floor(Math.random()*n.length)],p=t.findIndex(s=>s.player);if(p===-1)return;const d=t[p];await A.from("cards").update({player_id:a.id}).eq("id",d.id),t[p]={...d,player_id:a.id,player:a}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}async function Jn(e,t){const{state:n}=t,p=(n.params||{}).matchMode||"vs_ai_easy",d=p.replace("vs_ai_",""),s=p;await li(e,t,p,async({deckId:l,formation:c,starters:i,subsRaw:r,gcCardsEnriched:f,gcDefs:m})=>{try{const g=ft(i,c),$=await Qn(c,d),o=async _=>{try{const{data:M,error:L}=await A.from("matches").insert({home_id:n.profile.id,away_id:null,mode:s,home_deck_id:l,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),rt(e,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>t.navigate("home"));return}const B={gcDefs:m||[],matchId:M==null?void 0:M.id,mode:s,difficulty:d,formation:c,homeTeam:g,aiTeam:$,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:_,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};eo(e,B,t)}catch(M){console.error("[MatchIA] Exception launchMatch:",M),rt(e,"⚠️","Erreur au lancement du match : "+M.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}di(e,f,o)}catch(g){console.error("[MatchIA] Exception setup:",g),rt(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function Qn(e,t){var s,l;const{data:n}=await A.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return Zn(e);const a=pt[e]||pt["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},d=[...n];for(const c of["GK","DEF","MIL","ATT"]){const i=d.filter($=>$.job===c),r=d.filter($=>$.job!==c),f=[...i,...r],m=[];for(let $=0;$<a[c];$++){const o=f[$]||d[$];o&&m.push({cardId:"ai-"+o.id+"-"+$,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((s=o.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const g=ot(m.length);m.forEach(($,o)=>{$._col=g[o]}),p[c]=m}return p}function Zn(e){const t=pt[e]||pt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<t[d];c++){const i=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:a[p%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?i:2,note_d:d==="DEF"?i:2,note_m:d==="MIL"?i:2,note_a:d==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:d}),p++}const l=ot(s.length);s.forEach((c,i)=>{c._col=l[i]}),n[d]=s}return n}function eo(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>to(e,t,n),5e3)}function to(e,t,n){const a=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function d(o){return o.reduce((_,M)=>_+_e(M,"MIL"),0)}function s(o){let _=0;for(let M=0;M<o.length-1;M++){const L=Ze(o[M],o[M+1]);L==="#00ff88"?_+=2:L==="#FFD700"&&(_+=1)}return _}const l=d(a)+s(a),c=d(p)+s(p),i=l>=c;function r(o,_,M,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${_}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((B,H)=>{const C=H<o.length-1?Ze(B,o[H+1]):null,j=!C||C==="#ff3333"||C==="#cc2222",G=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${H}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...B,note:_e(B,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${H<o.length-1?`<div class="duel-link duel-link-${L}" data-idx="${H}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${j?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${j?"none":`0 0 8px ${C}`}">
            ${G?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${C}">${G}</span>`:""}
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

    ${r(p,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=(_,M)=>e.querySelectorAll(_).forEach((L,B)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},M+B*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((_,M)=>{setTimeout(()=>{_.style.opacity="1"},M*70)}),900),setTimeout(()=>{const _=e.querySelector("#vs-label");_&&(_.style.opacity="1",_.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(M=>M.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",c,800)},1500)};function m(o,_,M){const L=document.getElementById(o);if(!L)return;const B=performance.now(),H=C=>{const j=Math.min(1,(C-B)/M);L.textContent=Math.round(_*(1-Math.pow(1-j,3))),j<1?requestAnimationFrame(H):L.textContent=_};requestAnimationFrame(H)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const g=i?si():null;i&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(o=>({name:o.name,note:_e(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:p.map(o=>({name:o.name,note:_e(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const $=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Me(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),_=document.getElementById("score-ai"),M=document.getElementById(i?"duel-row-home":"duel-row-ai"),L=document.getElementById(i?"duel-row-ai":"duel-row-home"),B=i?o:_,H=i?_:o;B&&(B.style.fontSize="80px",B.style.color=i?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),H&&(H.style.opacity="0.25"),setTimeout(()=>{M&&(M.style.transformOrigin="center",M.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",M.style.zIndex="5"),setTimeout(()=>{var j;const C=document.getElementById("duel-shock");if(C){const G=(j=L||M)==null?void 0:j.getBoundingClientRect(),oe=e.querySelector(".match-screen").getBoundingClientRect();G&&(C.style.top=G.top-oe.top+G.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var j;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
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
          </button>`,C.style.transition="opacity .45s ease",C.style.opacity="1",C.style.pointerEvents="auto",(j=document.getElementById("start-match-btn"))==null||j.addEventListener("click",$))},600)},700)},2800)}function io(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Me(e,t,n){var B,H,C,j,G,oe,ce,te;const a=t.selected.map(z=>z.cardId),p=t.usedSubIds||[],d=t.homeSubs.filter(z=>!p.includes(z.cardId)),l=Object.values(t.homeTeam).flat().filter(z=>z.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(z=>(t.aiTeam[z]||[]).some(V=>!V.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(z=>!z.used),r=t.phase==="attack"&&c&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(z=>!z.used).map(z=>z.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",g=t.phase==="defense",$=t.phase==="finished",o=t.gcCards.filter(z=>!t.usedGc.includes(z.id)),_=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((V.players||[]).map(Z=>({...Z,used:!1})),"#ff6b6b",V.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const V=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((V.players||[]).map(Z=>({...Z,used:!1})),"#00ff88",V.total)}
          </div>`}const z=t.log[t.log.length-1];return z?'<div style="padding:2px 4px">'+io(z)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const z=window.innerWidth>=700,V=(N,R,Y)=>{var Ne,He;const U=(t.gcDefs||[]).find(T=>T.name===N.gc_type),O={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[U==null?void 0:U.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ne={purple:"#b06ce0",light_blue:"#00d4ef"}[U==null?void 0:U.color]||"#b06ce0",ie=(U==null?void 0:U.name)||N.gc_type,ke=(U==null?void 0:U.effect)||((Ne=Ge[N.gc_type])==null?void 0:Ne.desc)||"",Ee=U!=null&&U.image_url?`/manager-wars/icons/${U.image_url}`:null,ve=((He=Ge[N.gc_type])==null?void 0:He.icon)||"⚡",$e=Math.round(Y*.22),Ae=Math.round(Y*.22),Te=Y-$e-Ae,qe=ie.length>12?7:9;return`<div class="gc-mini" data-gc-id="${N.id}" data-gc-type="${N.gc_type}"
          style="box-sizing:border-box;width:${R}px;height:${Y}px;border-radius:10px;border:2px solid ${ne};background:${O};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${$e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${qe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${R-6}px">${ie}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Te}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ee?`<img src="${Ee}" style="max-width:${R-10}px;max-height:${Te-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Te*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${Ae}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ke.slice(0,38)}</span>
          </div>
        </div>`},Z=(N,R)=>{var Y;return`<div id="boost-card"
          style="box-sizing:border-box;width:${N}px;height:${R}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(R*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(R*.2)}px">⚡</div>
            <div style="font-size:${Math.round(R*.09)}px;color:#000;font-weight:900">+${(Y=t.boostCard)==null?void 0:Y.value}</div>
          </div>`},F=(N,R)=>R?Z(130,175):V(N,130,175),J=(N,R)=>R?Z(68,95):V(N,68,95),ae=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pe=$?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=m||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(N=>`<div class="sub-btn-col" data-sub-id="${N.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(N,76,100)}</div>`).join("")}
      </div>`,ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${dt(t.homeTeam,t.formation,t.phase,a,300,300,r)}
        </div>
      </div>`;return z?`
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
            ${o.map(N=>F(N,!1)).join("")}
            ${_?F(null,!0):""}
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
            ${o.map(N=>J(N,!1)).join("")}
            ${_?J(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(z=>{var V,Z,F;if(z.type==="duel"){const J=z.isGoal,ae=z.homeScored?"#FFD700":J?"#ff6b6b":"rgba(255,255,255,0.3)",pe=z.homeScored?"⚽ BUT !":J?"⚽ BUT IA !":(V=z.homePlayers)!=null&&V.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${J?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
                <div style="font-size:9px;color:${ae};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${pe}</div>
                ${(Z=z.homePlayers)!=null&&Z.length?`<div style="margin-bottom:3px">${it(z.homePlayers,"rgba(255,255,255,0.7)",z.homeTotal)}</div>`:""}
                ${(F=z.aiPlayers)!=null&&F.length?`<div style="opacity:0.7">${it(z.aiPlayers,"#ff6b6b",z.aiTotal)}</div>`:""}
              </div>`}return z.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${z.outPlayer?Ve({...z.outPlayer,used:!0,_line:z.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${z.inPlayer?Ve({...z.inPlayer,_line:z.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:z.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${z.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${z.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function M(){const z=e.querySelector(".match-screen");if(!z)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);z.style.bottom="auto",z.style.height=V+"px",z.style.minHeight=V+"px",z.style.maxHeight=V+"px",z.style.overflow="hidden";const Z=e.querySelector("#mobile-action-bar"),F=e.querySelector("#mobile-play-area");Z&&F&&(F.style.paddingBottom=Z.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const z=e.querySelector(".terrain-wrapper svg");z&&(z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let z=!1,V=30;const Z=()=>document.getElementById("match-timer"),F=()=>{const J=Z();if(!J)return;const ae=String(Math.floor(V/60)).padStart(2,"0"),pe=String(V%60).padStart(2,"0");J.textContent=` ${ae}:${pe}`,J.style.color=z?"#ff2222":"#ff9500",J.style.fontWeight="900"};F(),t._timerInt=setInterval(()=>{if(V--,V<0)if(!z)z=!0,V=15,F();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",J.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(J),setTimeout(()=>{J.remove(),Tt(e,t,n)},2500)}else F()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{Oe(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Tt(e,t,n))}),(H=document.getElementById("view-ai"))==null||H.addEventListener("click",()=>fo(t,n)),(C=document.getElementById("toggle-history"))==null||C.addEventListener("click",()=>{var z;(z=document.getElementById("match-history-panel"))==null||z.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var z;(z=document.getElementById("match-history-panel"))==null||z.classList.remove("open")}),(G=document.getElementById("btn-action"))==null||G.addEventListener("click",()=>{t.selected.length!==0&&(m?oo(e,t,n):g&&ro(e,t,n))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>Tt(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(z=>{z.addEventListener("click",()=>no(z,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(z=>{z.addEventListener("click",()=>Yt(e,t,n,null,z.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(z=>{z.addEventListener("click",()=>lo(z.dataset.gcId,z.dataset.gcType,e,t,n))}),(ce=document.getElementById("boost-card"))==null||ce.addEventListener("click",()=>uo(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(z=>{z.addEventListener("click",()=>Yt(e,t,n,z.dataset.subId))}),(te=document.getElementById("sub-btn-main"))==null||te.addEventListener("click",()=>Yt(e,t,n))}function no(e,t,n,a){const p=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(l=>l.cardId===p);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[d]||[]).find(c=>c.cardId===p);l&&t.selected.push({...l,_role:d,_line:d})}Me(n,t,a)}function ui(e,t,n){e.matchId&&A.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function oo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(l=>!l.used)),p=t.selected.map(s=>{const l=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,c=a&&["GK","DEF"].includes(s._role);return{...l,_line:s._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),d=Pt(p,t.modifiers.home);t.pendingAttack={...d,players:[...p],side:"home"},t.selected.forEach(s=>{const l=(t.homeTeam[s._role]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Me(e,t,n),setTimeout(()=>ao(e,t,n),1200)}function ro(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Ot(a,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!0)});const d=Ht(t.pendingAttack.total,p.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ze(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:ze(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Me(e,t,n),Nt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ct(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Si(a,"attack",t.difficulty);if(!p.length){qt(e,t,n);return}const d=Pt(p,t.modifiers.ai);t.pendingAttack={...d,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),c=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ze(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Me(e,t,n),Nt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}t.phase="defense",Me(e,t,n)}function ao(e,t,n){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Si(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(g=>({name:g.name,note:_e(g,g._line||g.job),portrait:ze(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Nt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}const s=p.length>0?Ot(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Ht(t.pendingAttack.total,s,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Nt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}else c.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,ct(e,t,n,"ai-attack")}function ct(e,t,n,a){if(t.round++,Xi(t)){Tt(e,t,n);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){qt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){qt(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",Me(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){qt(e,t,n);return}t.phase="ai-attack",Me(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function Xi(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(p=>!p.used)),n=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(p=>!p.used));return!t&&!n}function qt(e,t,n){Xi(t)?Tt(e,t,n):(t.phase="attack",Me(e,t,n))}function so(e,t,n){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=ze(e),d=ze(t),s=ut[e.job]||"#555",l=ut[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
  `,document.body.appendChild(a);let r=!1;const f=()=>{r||(r=!0,a.remove(),n())};a.addEventListener("click",f),setTimeout(f,2e3)}function $t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,a=null,p=null){var g,$;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([o,_])=>(_||[]).filter(M=>M.used).map(M=>({...M,_line:M._line||o}))),s=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!d.length){$t("Aucun joueur utilisé à remplacer");return}if(!s.length){$t("Aucun remplaçant disponible");return}let l=Math.max(0,d.findIndex(o=>o.cardId===p));const c=((g=d[l])==null?void 0:g._line)||(($=d[l])==null?void 0:$.job);let i=a?Math.max(0,s.findIndex(o=>o.cardId===a)):Math.max(0,s.findIndex(o=>o.job===c)),r=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var C,j,G,oe,ce,te;const o=d[l],_=s[i],M=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(M*1.35),B=z=>`background:rgba(255,255,255,0.12);border:none;color:${z?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${z?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${B(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${_?Ve({..._,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="in-down" style="${B(i>=s.length-1)}" ${i>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${B(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="out-down" style="${B(l>=d.length-1)}" ${l>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=f.querySelector("#sub-close"))==null||C.addEventListener("click",()=>f.remove()),(j=f.querySelector("#out-up"))==null||j.addEventListener("click",()=>{l>0&&(l--,m())}),(G=f.querySelector("#out-down"))==null||G.addEventListener("click",()=>{l<d.length-1&&(l++,m())}),(oe=f.querySelector("#in-up"))==null||oe.addEventListener("click",()=>{i>0&&(i--,m())}),(ce=f.querySelector("#in-down"))==null||ce.addEventListener("click",()=>{i<s.length-1&&(i++,m())});const H=(z,V,Z,F)=>{const J=f.querySelector("#"+z);if(!J)return;let ae=0;J.addEventListener("touchstart",pe=>{ae=pe.touches[0].clientY},{passive:!0}),J.addEventListener("touchend",pe=>{const he=pe.changedTouches[0].clientY-ae;if(Math.abs(he)<30)return;const xe=V();he<0&&xe<F-1?(Z(xe+1),m()):he>0&&xe>0&&(Z(xe-1),m())},{passive:!0})};H("in-panel",()=>i,z=>i=z,s.length),H("out-panel",()=>l,z=>l=z,d.length),(te=f.querySelector("#sub-confirm"))==null||te.addEventListener("click",z=>{if(z.preventDefault(),z.stopPropagation(),r)return;r=!0;const V=d[l],Z=s[i];if(!V||!Z)return;let F=null,J=-1;for(const[pe,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ge=>ge.cardId===V.cardId);if(xe!==-1){F=pe,J=xe;break}}if(J===-1||!F){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const ae={...Z,_line:F,_col:V._col||0,used:!1,boost:0};t.homeTeam[F].splice(J,1,ae),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Z.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:V.name,firstname:V.firstname,note:_e(V,F),portrait:ze(V),job:V.job,country_code:V.country_code,rarity:V.rarity,clubName:V.clubName,clubLogo:V.clubLogo},inPlayer:{name:Z.name,firstname:Z.firstname,note:_e(Z,F),portrait:ze(Z),job:Z.job,country_code:Z.country_code,rarity:Z.rarity,clubName:Z.clubName,clubLogo:Z.clubLogo},text:`🔄 ${Z.firstname} ${Z.name} remplace ${V.firstname} ${V.name}`}),f.remove(),so(V,Z,()=>Me(e,t,n))})}document.body.appendChild(f),m()}function lo(e,t,n,a,p){var $,o;const d=(a.gcDefs||[]).find(_=>_.name===t),s=Ge[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",i=(d==null?void 0:d.name)||t,r=(d==null?void 0:d.effect)||s.desc,f=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,m=s.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
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
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),($=g.querySelector("#gc-back"))==null||$.addEventListener("click",()=>g.remove()),(o=g.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{g.remove(),po(e,t,n,a,p)})}function Ft(e,t,n,a,p,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var i,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",$=_e(f,m)+(f.boost||0),o=l.find(_=>_.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${$}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=s.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,g=e.find(o=>o.cardId===m);if(!g)return;const $=l.findIndex(o=>o.cardId===m);$>-1?l.splice($,1):l.length<t&&l.push(g),c()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),d(l)})}c(),document.body.appendChild(s)}const co={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},a,p,d)=>{const s=Object.entries(a.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,c])=>c.filter(i=>!i.used).map(i=>({...i,_line:l})));return s.length?(Ft(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,a,l=>{l.forEach(c=>{const i=(a.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Me(p,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Me(p,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:a="ai"},p,d,s)=>{const l=a==="home"?p.homeTeam:p.aiTeam,c=a==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!n.length||n.includes(r)).flatMap(([r,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:r})));return i.length?(Ft(i,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,d,p,r=>{r.forEach(f=>{const g=((a==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find($=>$.cardId===f.cardId);g&&(g.boost=(g.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${g.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Me(d,p,s)}),!0):(p.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Me(d,p,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},a,p,d)=>{const s=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(f=>!f.used).map(f=>({...f,_line:i})));return c.length?(Ft(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,a,i=>{i.forEach(r=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);m&&(m.used=!0,a.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Me(p,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Me(p,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,a,p)=>{const d=Object.entries(n.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,l])=>l.filter(c=>c.used).map(c=>({...c,_line:s})));return d.length?(Ft(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!1,n.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Me(a,n,p)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Me(a,n,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function po(e,t,n,a,p){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(c=>c.name===t)||d.find(c=>{var i;return((i=c.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const c=co[s.effect_type];c?c(s.effect_params||{},a,n,p)||(l=!0):(p.toast(`Effet "${s.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(f=>f.used).map(f=>({...f,_line:i})));c.length?(c[0].used=!1,a.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(c.length){const i=c.sort((r,f)=>_e(f,"ATT")-_e(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}A.from("cards").delete().eq("id",e).then(()=>{}),l&&Me(n,a,p)}function uo(e,t,n){const a=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!a.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ut[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${_e(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const d=p.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),Me(e,t,n)})})}function Nt(e,t,n,a,p){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(i,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${ut[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let l=!1;const c=()=>{l||(l=!0,d.remove(),setTimeout(()=>p(),50))};d.addEventListener("click",c),setTimeout(c,3500)}async function Tt(e,t,n){var r,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=n,p=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=p?"victoire":d?"nul":"defaite",l=pn(t.mode,s);t.matchId&&await A.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};p?c.wins=(a.profile.wins||0)+1:d?c.draws=(a.profile.draws||0)+1:c.losses=(a.profile.losses||0)+1,await A.from("users").update(c).eq("id",a.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),Oe(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),Oe(e),n.navigate("match",{matchMode:t.mode})})}function fo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function go(e,t,n,a){var p,d;try{const s=(d=(p=t==null?void 0:t.state)==null?void 0:p.profile)==null?void 0:d.id;try{(A.getChannels?A.getChannels():[]).forEach(c=>{const i=c.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&A.removeChannel(c)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}s&&(await A.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await A.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await li(e,t,"random",({deckId:s,formation:l,starters:c,subsRaw:i,gcCardsEnriched:r,gcDefs:f})=>{const m=g=>mo(e,t,s,l,c,i,g,f||[],n,a);if(!r.length){m([]);return}di(e,r,m)})}async function mo(e,t,n,a,p,d,s=[],l=[],c,i){var ce;const{state:r,navigate:f,toast:m}=t,g=r.profile.id;let $=!1,o=null;Xe(e);try{await A.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await A.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const _=(te,z,V,Z)=>{var F;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${z?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${z?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${z?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${z?"#22c55e":"#aaa"}">${z?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!z&&te?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(F=document.getElementById("lobby-cancel"))==null||F.addEventListener("click",async()=>{$=!0,o&&(A.removeChannel(o),o=null),V&&await A.from("friend_match_invites").update({status:"declined"}).eq("id",V),Oe(e),f("home")})},M=async(te,z)=>{$=!0,o&&(A.removeChannel(o),o=null),await new Promise(V=>setTimeout(V,600)),e.isConnected&&xo(e,t,te,z,s,l)},{data:L}=await A.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${g},invitee_id.eq.${c}),and(inviter_id.eq.${c},invitee_id.eq.${g})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let B,H;if(L&&L.inviter_id===c)H=!1,B=L.id,await A.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",B);else{H=!0;const{data:te,error:z}=await A.from("friend_match_invites").insert({inviter_id:g,invitee_id:c,friend_id:c,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(z||!te){m("Erreur création invitation","error"),Oe(e),f("home");return}B=te.id}if(_(!0,!H,B),!H){const te={home_id:c,away_id:g,home_deck_id:L.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},z=await A.from("matches").insert(te).select().single(),V=z.data;if(!V){m("Erreur création match: "+(((ce=z.error)==null?void 0:ce.message)||""),"error"),Oe(e),f("home");return}await A.from("friend_match_invites").update({match_id:V.id,status:"matched"}).eq("id",B),M(V.id,!1);return}let C=!1;const j=te=>{$||C||(te.status==="matched"&&te.match_id?(C=!0,clearInterval(G),clearInterval(oe),M(te.match_id,!0)):te.status==="declined"?(clearInterval(G),clearInterval(oe),m(`${i} a décliné l'invitation`,"warning"),Oe(e),f("home")):te.invitee_ready&&_(!0,!0,B))},G=setInterval(()=>{if($){clearInterval(G);return}A.from("matchmaking_queue").delete().eq("user_id",g).then(()=>{},()=>{})},3e3),oe=setInterval(async()=>{if($||C){clearInterval(oe);return}const{data:te}=await A.from("friend_match_invites").select("*").eq("id",B).maybeSingle();te&&j(te)},1200);o=A.channel("friend-invite-"+B).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${B}`},te=>j(te.new)).subscribe()}async function xo(e,t,n,a,p=[],d=[]){const{state:s,navigate:l,toast:c}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(u=>u.id),m=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await A.from("matches").select("*").eq("id",n).single();if(!g){c("Match introuvable","error"),l("home");return}async function $(){const[{data:u},{data:x},{data:h},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),b=E=>({cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:Number(E.note_g)||0,note_d:Number(E.note_d)||0,note_m:Number(E.note_m)||0,note_a:Number(E.note_a)||0,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map(E=>b(E)),w=((x==null?void 0:x.starters)||[]).map(E=>b(E)),I=(u==null?void 0:u.formation)||"4-4-2",k=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:ft(v,I),p2Team:ft(w,k),p1Subs:((u==null?void 0:u.subs)||[]).map(E=>b(E)),p2Subs:((x==null?void 0:x.subs)||[]).map(E=>b(E)),p1Formation:I,p2Formation:k,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let o=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!o)if(a){o=await $();const{data:u}=await A.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:g.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:x}=await A.from("matches").select("game_state").eq("id",n).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(o=x.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await A.from("matches").update({game_state:o}).eq("id",n)}let _=!1,M=!1,L=null,B=!1;const H=new Set,C=new Set;function j(u){var E,S;try{A.removeChannel(G)}catch{}const x=o[i+"Score"]||0,h=o[r+"Score"]||0;if(!M){const D=o.p1Score||0,W=o.p2Score||0,le=(o.usedGc_p1||[]).length,Q=(o.usedGc_p2||[]).length,P=u.winner_id||(D>W?g.home_id:W>D?g.away_id:null);(P?s.profile.id===P:s.profile.id<(a?g.away_id:g.home_id))&&(M=!0,cn({player1Id:g.home_id,player2Id:g.away_id,score1:D,score2:W,gc1:le,gc2:Q}).catch(ee=>console.warn("[FriendMatch] updateStats:",ee)))}let y,b;u.winner_id?(y=u.winner_id===s.profile.id,b=!1):u.forfeit?(y=x>h,b=!1):(b=x===h,y=x>h),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":y?"🏆":"😞",I=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",k=b?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${k}">${I}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${x} – ${h} ${o[r+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(S=v.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{v.remove(),Oe(e),l("home")})}const G=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const x=u.new;try{if(x.status==="finished"||x.forfeit){if(_)return;_=!0,L&&(clearInterval(L),L=null),x.game_state&&(o=x.game_state),j(x);return}if(x.game_state){const h=o;o=x.game_state;const y=o._lastGC;if(y&&y.seq&&!C.has(y.seq)&&(C.add(y.seq),y.by!==i)){ge(y.type,y.by,()=>J());return}const b=h[i+"Score"]||0,v=h[r+"Score"]||0,w=o[i+"Score"]||0,I=o[r+"Score"]||0,k=w>b,E=I>v;if((k||E)&&!H.has(o.round)){H.add(o.round);const S=[...o.log||[]].reverse().find(W=>W.isGoal),D=((S==null?void 0:S.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(D,w,I,k,()=>J());return}J()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function oe(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:x}=await A.from("matches").update({game_state:o}).eq("id",n);x&&c("Erreur de synchronisation","error");try{J()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function ce(){if(_)return;_=!0,L&&(clearInterval(L),L=null);const u=a?g.away_id:g.home_id,x=a?"p2":"p1",h=a?"p1":"p2",y={...o,[x+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{A.removeChannel(G)}catch{}setTimeout(()=>{Oe(e),l("home")},800)}const te={BOOST_STAT:({value:u=1,count:x=1,roles:h=[]},y,b)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([I])=>!h.length||h.includes(I)).flatMap(([I,k])=>k.filter(E=>!E.used).map(E=>({...E,_line:I})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}z(w,x,`Choisir ${x} joueur(s) à booster (+${u})`,I=>{I.forEach(k=>{const E=(v[k._line]||[]).find(S=>S.cardId===k.cardId);E&&(E.boost=(E.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${E.name}`,type:"info"}))}),y[i+"Team"]=v,b(y)})},DEBUFF_STAT:({value:u=1,count:x=1,roles:h=[],target:y="ai"},b,v)=>{const w=y==="home"?i:r,I=b[w+"Team"],k=y==="home"?"allié":"adverse",E=Object.entries(I).filter(([S])=>!h.length||h.includes(S)).flatMap(([S,D])=>D.filter(W=>!W.used).map(W=>({...W,_line:S})));if(!E.length){b.log.push({text:`🎯 Aucun joueur ${k}`,type:"info"}),v(b);return}z(E,x,`Choisir ${x} joueur(s) ${k}(s) (-${u})`,S=>{S.forEach(D=>{const W=(I[D._line]||[]).find(le=>le.cardId===D.cardId);W&&(W.boost=(W.boost||0)-u,b.log.push({text:`🎯 -${u} sur ${W.name}`,type:"info"}))}),b[w+"Team"]=I,v(b)})},GRAY_PLAYER:({count:u=1,roles:x=[],target:h="ai"},y,b)=>{const v=h==="home"?i:r,w=y[v+"Team"],I=h==="home"?"allié":"adverse",k=Object.entries(w).filter(([E])=>!x.length||x.includes(E)).flatMap(([E,S])=>S.filter(D=>!D.used).map(D=>({...D,_line:E})));if(!k.length){y.log.push({text:`❌ Aucun joueur ${I}`,type:"info"}),b(y);return}z(k,u,`Choisir ${u} joueur(s) ${I}(s) à exclure`,E=>{E.forEach(S=>{const D=(w[S._line]||[]).find(W=>W.cardId===S.cardId);D&&(D.used=!0,y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,b(y)})},REVIVE_PLAYER:({count:u=1,roles:x=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!x.length||x.includes(w)).flatMap(([w,I])=>I.filter(k=>k.used).map(k=>({...k,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}z(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(I=>{const k=(b[I._line]||[]).find(E=>E.cardId===I.cardId);k&&(k.used=!1,h.log.push({text:`💫 ${k.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=b,y(h)})},REMOVE_GOAL:({},u,x)=>{const h=r+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(u)},ADD_GOAL_DRAW:({},u,x)=>{u[i+"Score"]===u[r+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(u)},ADD_SUB:({value:u=1},x,h)=>{x.maxSubs=(x.maxSubs||3)+u,x.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(x)},CUSTOM:({},u,x)=>x(u)};function z(u,x,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var k,E;const I=u.map(S=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",W=_e(S,S._line)+(S.boost||0),Q=v.find(K=>K.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",P=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Q};background:${D};overflow:hidden;cursor:pointer;${P}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${x}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${I}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${x})
          </button>
        </div>`,(k=b.querySelector("#pp-close"))==null||k.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const D=S.dataset.cid,W=u.find(Q=>Q.cardId===D),le=v.findIndex(Q=>Q.cardId===D);W&&(le>-1?v.splice(le,1):v.length<x&&v.push(W),w())})}),(E=b.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{b.remove(),y(v)})}w(),document.body.appendChild(b)}async function V(u,x){const y=(o["gcCardsFull_"+i]||[]).find(I=>I.id===u),b=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(I=>{var k;return I.name===x||((k=I.name)==null?void 0:k.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:x,by:i,seq:(o._gcAnimSeq||0)+1};C.add(w.seq),ge(x,i,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const k=te[b.effect_type];if(k){const E={...o};k(b.effect_params||{},E,async S=>{S["usedGc_"+i]=v,S._lastGC=w,S._gcAnimSeq=w.seq,await oe(S)});return}}const I={...o};switch(x){case"Remplacement+":I.maxSubs=(I.maxSubs||3)+1,I.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const k=r+"Score";I[k]>0&&(I[k]--,I.log.push({text:"🚫 But annulé",type:"info"}));break}}I["usedGc_"+i]=v,I._lastGC=w,I._gcAnimSeq=w.seq,await oe(I)})}function Z(u,x){const h="usedCardIds_"+u,y=new Set(o[h]||[]);x.forEach(b=>y.add(b)),o[h]=[...y]}function F(){for(const u of["p1","p2"]){const x=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(b=>{b.used=x.has(b.cardId)})}}function J(){var Qe,mt,xt,yt,ht,X;if(o.phase==="reveal")return ae();if(o.phase==="midfield")return he();if(o.phase==="finished")return T();const u=o[i+"Team"],x=o[r+"Team"];F();const h=o[i+"Score"],y=o[r+"Score"],b=o[i+"Name"],v=o[r+"Name"],w=o.phase===i+"-attack",I=o.phase===i+"-defense",k=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],E=k.map(q=>q.cardId),S=window.innerWidth>=700,D=o[i+"Subs"]||[],W=o["usedSubIds_"+i]||[],le=D.filter(q=>!W.includes(q.cardId)),Q=o["gcCardsFull_"+i]||[],P=o["usedGc_"+i]||[],K=Q.filter(q=>!P.includes(q.id)),ee=o.boostOwner===i&&!o.boostUsed,de=!["GK","DEF","MIL","ATT"].some(q=>(x[q]||[]).some(re=>!re.used)),ue=[...u.MIL||[],...u.ATT||[]].filter(q=>!q.used),fe=w&&de&&ue.length===0?[...u.GK||[],...u.DEF||[]].filter(q=>!q.used).map(q=>q.cardId):[];function me(q,re,se){var wt,mi;const ye=q._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Je=(ye==null?void 0:ye.name)||q.gc_type,et=(ye==null?void 0:ye.effect)||((wt=Ge[q.gc_type])==null?void 0:wt.desc)||"",St=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,Ct=((mi=Ge[q.gc_type])==null?void 0:mi.icon)||"⚡",bt=Math.round(se*.22),lt=Math.round(se*.22),vt=se-bt-lt,jt=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${q.id}" data-gc-type="${q.gc_type}"
        style="box-sizing:border-box;width:${re}px;height:${se}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${jt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${re-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${St?`<img src="${St}" style="max-width:${re-10}px;max-height:${vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(vt*.55)}px">${Ct}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(q,re){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${q}px;height:${re}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(re*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(re*.2)}px">⚡</div>
        <div style="font-size:${Math.round(re*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Se=(q,re)=>re?be(130,175):me(q,130,175),Re=(q,re)=>re?be(68,95):me(q,68,95),Fe=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=w?Te(i)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${k.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:I?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${k.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Le=w&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||I?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${k.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(q=>`<div class="pvp-sub-btn" data-sub-id="${q.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(q,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,De=w?"attack":I?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(u,o[i+"Formation"],De,E,300,300,fe)}
      </div>
    </div>`;function Ue(q){if(q.type==="duel"&&(q.homeTotal!=null||q.aiTotal!=null)){const re=(q.homeTotal||0)>=(q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(q.homePlayers||[]).map(se=>nt(se)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${re?20:14}px;font-weight:900;color:${re?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${re?14:20}px;font-weight:900;color:${re?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(q.aiPlayers||[]).map(se=>nt(se)).join("")}
            </div>
          </div>
          ${q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${q.type==="goal"?700:400};padding:3px 2px">${q.text||""}</div>`}const Ke=(()=>{var re,se;if(I&&((re=o.pendingAttack)!=null&&re.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(w&&((se=o.pendingAttack)!=null&&se.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",ye.total)}
        </div>`}const q=(o.log||[]).slice(-1)[0];return q?'<div style="padding:2px 4px">'+Ue(q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ce=`
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
      </button>`;Xe(e),e.style.overflow="hidden",S?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ce}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ie}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${K.map(q=>Se(q,!1)).join("")}
            ${ee?Se(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ce}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(u,o[i+"Formation"],De,E,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${K.map(q=>Re(q,!1)).join("")}
            ${ee?Re(null,!0):""}
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
      </div>`;function Be(){const q=e.querySelector(".match-screen");if(!q)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);q.style.height=re+"px",q.style.minHeight=re+"px",q.style.maxHeight=re+"px",q.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),B||(B=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(q=>{q.addEventListener("click",()=>{if(!w&&!I)return;const re=q.dataset.cardId,se=q.dataset.role,ye=(u[se]||[]).find(et=>et.cardId===re);if(!ye||ye.used)return;const Ye=fe.includes(re);if(w&&!["MIL","ATT"].includes(se)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Je=We.findIndex(et=>et.cardId===re);Je>-1?We.splice(Je,1):We.length<3&&We.push({...ye,_role:se}),J()})}),e.querySelectorAll(".match-used-hit").forEach(q=>{q.addEventListener("click",()=>Y(q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(q=>{q.addEventListener("click",()=>Y())}),(Qe=e.querySelector("#pvp-sub-open"))==null||Qe.addEventListener("click",()=>Y()),e.querySelectorAll(".pvp-gc-mini").forEach(q=>{q.addEventListener("click",()=>N(q.dataset.gcId,q.dataset.gcType))}),(mt=e.querySelector("#pvp-boost-card"))==null||mt.addEventListener("click",()=>R()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",q=>{w?q.currentTarget.dataset.pass==="1"||!Te(i)?ie():ke():I&&Ee()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ce()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>O()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>ne()),L&&(clearInterval(L),L=null),(w||I)&&!_){let q=30,re=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=q+"s",se().style.color=re?"#ff4444":"#fff")};ye(),L=setInterval(()=>{q--,q<0?re?(clearInterval(L),L=null,w&&!Te(i)?ie():ce()):(re=!0,q=15,ye()):ye()},1e3)}}function ae(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await oe({phase:"midfield"})},5e3)}let pe=!1;function he(){if(pe)return;const u=o[i+"Team"].MIL||[],x=o[r+"Team"].MIL||[];function h(K){return K.reduce((ee,de)=>ee+_e(de,"MIL"),0)}function y(K){let ee=0;for(let de=0;de<K.length-1;de++){const ue=Ze(K[de],K[de+1]);ue==="#00ff88"?ee+=2:ue==="#FFD700"&&(ee+=1)}return ee}const b=h(u)+y(u),v=h(x)+y(x),w=b>=v;function I(K,ee,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ee}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((ue,fe)=>{const me=fe<K.length-1?Ze(ue,K[fe+1]):null,be=!me||me==="#ff3333"||me==="#cc2222",Se=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ue,note:_e(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<K.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${me}`}">
              ${Se?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${Se}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${de}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(K)} + ${y(K)} liens = <b style="color:#fff">${h(K)+y(K)}</b>
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
      ${I(x,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const k=(K,ee)=>e.querySelectorAll(K).forEach((de,ue)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},ee+ue*90)});k(".duel-card-me",150),k(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,ee)=>setTimeout(()=>{K.style.opacity="1"},ee*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ee=>ee.style.opacity="1")},1250);function E(K,ee,de){const ue=document.getElementById(K);if(!ue)return;const fe=performance.now(),me=be=>{const Se=Math.min(1,(be-fe)/de);ue.textContent=Math.round(ee*(1-Math.pow(1-Se,3))),Se<1?requestAnimationFrame(me):ue.textContent=ee};requestAnimationFrame(me)}setTimeout(()=>{E("pvp-score-me",b,800),E("pvp-score-opp",v,800)},1500);const S=o.p1Team.MIL||[],D=o.p2Team.MIL||[],W=h(S)+y(S),le=h(D)+y(D),Q=W>=le?"p1":"p2";let P=o.boostValue;P==null&&(P=si(),o.boostValue=P,o.boostOwner=Q,o.boostUsed=!1),pe=!0,setTimeout(()=>{const K=e.querySelector("#duel-row-"+(w?"me":"opp")),ee=e.querySelector("#duel-row-"+(w?"opp":"me")),de=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),fe=w?de:ue,me=w?ue:de;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),ee&&(ee.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const Se=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+P+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Se+Re,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Ie=Q;await oe({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:P,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function xe(u,x,h,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(S,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${x} – ${h}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${I[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let k=!1;const E=()=>{k||(k=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",E),setTimeout(E,3500)}function ge(u,x,h){var P,K;const y=(o.gcDefs||[]).find(ee=>{var de;return ee.name===u||((de=ee.name)==null?void 0:de.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((P=Ge[u])==null?void 0:P.desc)||"",k=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,E=((K=Ge[u])==null?void 0:K.icon)||"⚡",D=x===i?"Vous":o[x+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let le=!1;const Q=()=>{le||(le=!0,W.remove(),setTimeout(()=>h&&h(),50))};W.addEventListener("click",Q),setTimeout(Q,3e3)}function N(u,x){var W,le,Q,P;const y=(o["gcCardsFull_"+i]||[]).find(K=>K.id===u),b=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",I=(b==null?void 0:b.name)||x,k=(b==null?void 0:b.effect)||((W=Ge[x])==null?void 0:W.desc)||"Carte spéciale.",E=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,S=((le=Ge[x])==null?void 0:le.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${I.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${I}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(D),(Q=D.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>D.remove()),(P=D.querySelector("#pvp-gc-use"))==null||P.addEventListener("click",()=>{D.remove(),V(u,x)})}function R(){var y;const u=o[i+"Team"],x=Object.entries(u).flatMap(([b,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!x.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(b=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=_e(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const v=b.dataset.cid,w=x.find(k=>k.cardId===v);if(!w)return;const I=(u[w._line]||[]).find(k=>k.cardId===v);I&&(I.boost=(I.boost||0)+o.boostValue),h.remove(),await oe({[i+"Team"]:u,boostUsed:!0})})})}function Y(u=null){var le,Q;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],b=o.maxSubs||3;if(y.length>=b){c(`Maximum ${b} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([P,K])=>(K||[]).filter(ee=>ee.used).map(ee=>({...ee,_line:P}))),w=(o[i+"Subs"]||[]).filter(P=>!y.includes(P.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let I=Math.max(0,v.findIndex(P=>P.cardId===u));const k=((le=v[I])==null?void 0:le._line)||((Q=v[I])==null?void 0:Q.job);let E=Math.max(0,w.findIndex(P=>P.job===k)),S=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,be,Se,Re,Fe,Ie;const P=v[I],K=w[E],ee=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(ee*1.35),ue=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${K?Ve({...K,used:!1,boost:0},ee,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${P?Ve({...P,used:!1,boost:0},ee,de):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(I>=v.length-1)}" ${I>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=D.querySelector("#psub-close"))==null||me.addEventListener("click",()=>D.remove()),(be=D.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{I>0&&(I--,W())}),(Se=D.querySelector("#pout-down"))==null||Se.addEventListener("click",()=>{I<v.length-1&&(I++,W())}),(Re=D.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{E>0&&(E--,W())}),(Fe=D.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{E<w.length-1&&(E++,W())});const fe=(Le,je,De,Pe)=>{const Ue=D.querySelector("#"+Le);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",Ce=>{Ke=Ce.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ce=>{const Be=Ce.changedTouches[0].clientY-Ke;if(Math.abs(Be)<30)return;const Qe=je();Be<0&&Qe<Pe-1?(De(Qe+1),W()):Be>0&&Qe>0&&(De(Qe-1),W())},{passive:!0})};fe("pin-panel",()=>E,Le=>E=Le,w.length),fe("pout-panel",()=>I,Le=>I=Le,v.length),(Ie=D.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),S)return;S=!0;const je=v[I],De=w[E];if(!je||!De)return;const Pe=je._line,Ue=(h[Pe]||[]).findIndex(Be=>Be.cardId===je.cardId);if(Ue===-1){c("Erreur : joueur introuvable","error"),D.remove();return}const Ke={...De,_line:Pe,position:je.position,used:!1,boost:0};h[Pe].splice(Ue,1,Ke);const Ce=[...y,De.cardId];D.remove(),U(je,De,async()=>{await oe({[i+"Team"]:h,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ce})})})}document.body.appendChild(D),W()}function U(u,x,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(k,E,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[k.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${ze(k)?`<img src="${ze(k)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(k.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const I=()=>{w||(w=!0,b.remove(),setTimeout(()=>h(),50))};b.addEventListener("click",I),setTimeout(I,2200)}function O(){var x;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(x=u.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>u.remove())}function ne(){var h;const u=o.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function ie(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",x=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=qe(o),b=Te(u),v=y||!b?"finished":u+"-attack";await oe({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:x,log:h}),v==="finished"&&await He(o)}async function ke(){const u=o[i+"Team"],x=!["GK","DEF","MIL","ATT"].some(v=>(o[r+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(W=>W.cardId===v.cardId)||v,I=x&&["GK","DEF"].includes(v._role),k=u[v._role]||[],E=k.findIndex(W=>W.cardId===v.cardId),S=ot(k.length),D=E>=0?S[E]:w._col??1;return{...w,_line:v._role,_col:D,...I?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Pt(h,o.modifiers[i]||{});Z(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(u[v._role]||[]).find(I=>I.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],J();const b=[...o.log||[]];if(x){const v=(o[i+"Score"]||0)+1,w=h.map(D=>({name:D.name,note:_e(D,D._line||"ATT"),portrait:ze(D),job:D.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const I=(o.round||0)+1,k=i==="p1"?"p2":"p1",E={...o,[i+"Team"]:u,[i+"Score"]:v},S=qe(E);H.add(I),xe(w,v,o[r+"Score"]||0,!0,async()=>{await oe({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:S?"finished":k+"-attack",attacker:k,round:I,log:b}),S&&await He({...o,[i+"Score"]:v})});return}b.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await oe({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:b})}async function Ee(){const u=o[i+"Team"],x=(o["selected_"+i]||[]).map(P=>{const K=(u[P._role]||[]).find(me=>me.cardId===P.cardId)||P,ee=u[P._role]||[],de=ee.findIndex(me=>me.cardId===P.cardId),ue=ot(ee.length),fe=de>=0?ue[de]:K._col??1;return{...K,_line:P._role,_col:fe}}),h=Ot(x,o.modifiers[i]||{});Z(i,x.map(P=>P.cardId)),x.forEach(P=>{const K=(u[P._role]||[]).find(ee=>ee.cardId===P.cardId);K&&(K.used=!0)}),o["selected_"+i]=[],J();const y=Ht(o.pendingAttack.total,h.total,o.modifiers[i]||{}),b=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=b==="p1"?"p2":"p1",I=(o.round||0)+1,k=(o.pendingAttack.players||[]).map(P=>({name:P.name,note:_e(P,P._line||"ATT"),portrait:ze(P),job:P.job})),E=[...o.log||[]];E.push({type:"duel",isGoal:v,homeScored:v&&b===i,text:v?`⚽ BUT de ${o[b+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:k,aiPlayers:x.map(P=>({name:P.name,note:_e(P,P._line||"DEF"),portrait:ze(P),job:P.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const S=v?(o[b+"Score"]||0)+1:o[b+"Score"]||0,D={...o,[i+"Team"]:u,[b+"Score"]:S},W=qe(D),le=W?"finished":w+"-attack",Q=async()=>{await oe({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],[b+"Score"]:S,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:le,attacker:w,round:I,log:E}),(le==="finished"||W)&&await He({...o,[b+"Score"]:S})};if(v){const P=b===i,K=P?S:o[i+"Score"]||0,ee=P?o[r+"Score"]||0:S;H.add(I),xe(k,K,ee,P,Q)}else await Q()}function ve(u){return["MIL","ATT"].some(x=>(u[x]||[]).some(h=>!h.used))}function $e(u){return["GK","DEF","MIL","ATT"].some(x=>(u[x]||[]).some(h=>!h.used))}function Ae(u){return $e(u)&&!ve(u)}function Te(u){const x=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!(ve(x)||!$e(h)&&Ae(x))}function qe(u){const x=["MIL","ATT"].some(E=>(u.p1Team[E]||[]).some(S=>!S.used)),h=["MIL","ATT"].some(E=>(u.p2Team[E]||[]).some(S=>!S.used)),y=$e(u.p1Team),b=$e(u.p2Team);return!x&&!(!b&&y)&&(!h&&!(!y&&b))}function Ne(u){const x=u.p1Score||0,h=u.p2Score||0;return x===h?null:x>h?g.home_id:g.away_id}async function He(u){try{await A.from("matches").update({status:"finished",winner_id:Ne(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(x){console.error("[PvP] finishMatch:",x)}}function T(){var b;const u=o[i+"Score"],x=o[r+"Score"],h=u>x,y=u===x;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{A.removeChannel(G)}catch{}Oe(e),l("home")})}J()}const yo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function ho(e,t){const{state:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:a}=t,{data:p}=await A.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:d}=await A.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
      </div>`;return}const m=i==="mine"?[...f].sort((g,$)=>g.status!==$.status?g.status==="active"?-1:1:new Date($.listed_at)-new Date(g.listed_at)):f;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(g=>{var B,H,C,j;const $=(B=g.card)==null?void 0:B.player;if(!$)return"";const o=$.job==="GK"?$.note_g:$.job==="DEF"?$.note_d:$.job==="MIL"?$.note_m:$.note_a,_=yo[$.rarity],M=(n.profile.credits||0)>=g.price,L=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${L?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${_o($.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${_};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${$.firstname} ${$.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${$.country_code} · ${((H=$.clubs)==null?void 0:H.encoded_name)||"—"} · ${$.rarity} · ${$.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((C=g.seller)==null?void 0:C.pseudo)||"—"}</div>`:L?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((j=g.buyer)==null?void 0:j.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${M?"":"disabled"} style="margin-top:4px">${M?"Acheter":"Trop cher"}</button>`:L?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>bo(g.dataset.buy,f,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>wo(g.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const f=r===i;r.style.background=f?"var(--green)":"#fff",r.style.color=f?"#fff":"var(--gray-600)",r.style.borderColor=f?"var(--green)":"var(--gray-200)"}),c(i.dataset.tab)})})}async function bo(e,t,n,a){var g;const{state:p,toast:d,refreshProfile:s}=a,l=t.find($=>$.id===e);if(!l)return;const c=l.price,i=p.profile.credits||0,r=(g=l.card)==null?void 0:g.player;if(i<c){d("Crédits insuffisants","error");return}if(!await vo(r,c))return;const m=document.querySelector(`[data-buy="${e}"]`);m&&(m.disabled=!0,m.textContent="⏳");try{const{data:$,error:o}=await A.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(o)throw new Error(o.message);if(!($!=null&&$.success))throw new Error(($==null?void 0:$.error)||"Achat impossible");p.profile.credits=i-c;const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(i-c).toLocaleString("fr")}`),d(`✅ ${r==null?void 0:r.surname_encoded} ajouté à ta collection !`,"success"),fi(n,a)}catch($){d("❌ "+$.message,"error"),m&&(m.disabled=!1,m.textContent="Acheter")}}function vo(e,t){return new Promise(n=>{const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
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
      </div>`,document.body.appendChild(a);const p=d=>{a.remove(),n(d)};a.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),a.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),a.addEventListener("click",d=>{d.target===a&&p(!1)})})}async function wo(e,t,n){const{toast:a}=n,{data:p}=await A.from("market_listings").select("card_id").eq("id",e).single();await A.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),a("Annonce retirée","success"),fi(t,n)}function _o(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function $o(e,{state:t,navigate:n,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await A.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function ko(e,{state:t,navigate:n,toast:a}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await A.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(d||[]).filter(r=>r.status==="finished"),c=(d||[]).filter(r=>r.status==="in_progress");function i(r){const f=r.home_id===p.id;f?r.home_score:r.away_score,f?r.away_score:r.home_score;const m=r.winner_id===p.id,g=r.home_score===r.away_score&&r.status==="finished",$=r.status!=="finished"?"…":g?"N":m?"V":"D",o=r.status!=="finished"||g?"#888":m?"#1A6B3C":"#c0392b";let _=s[r.mode]||r.mode;r.away_id===null&&!_.startsWith("IA")&&(_="IA");const L=r.home_id===p.id?r.away:r.home;let B;r.away_id===null?B=_:L?B=`${L.club_name||L.pseudo} (${L.pseudo})`:B="Adversaire";let H="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(H=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(r.created_at),j=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),G=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${B}${H}</div>
        <div style="font-size:11px;color:var(--gray-600)">${_} · ${j}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${G}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${$}</span>
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
  </div>`}Zi(tn);const we={user:null,profile:null,page:"home",params:{}};function kt(e,t="info",n=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},n))}function Eo(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function Et(){if(!we.user)return;const{data:e}=await A.from("users").select("*").eq("id",we.user.id).single();e&&(we.profile=e)}const gi="mw_theme";function Rt(){return localStorage.getItem(gi)||"light"}function Ao(e){var t;localStorage.setItem(gi,e),ni(e),(t=we.profile)!=null&&t.id&&A.from("users").update({theme:e}).eq("id",we.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Dt(e,t={}){we.page=e,we.params=t,Ji()}async function Ji(){var a,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===we.page)});const t=document.getElementById("nav-credits");t&&we.profile&&(t.textContent=`💰 ${(we.profile.credits||0).toLocaleString("fr")}`);const n={state:we,navigate:Dt,toast:kt,openModal:Eo,closeModal:ii,refreshProfile:Et};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',we.page){case"home":await bi(e,n);break;case"collection":await kn(e,n);break;case"decks":await Qt(e,n);break;case"boosters":await Dn(e,n);break;case"match":{const d=we.params&&we.params.matchMode||"vs_ai_easy";d==="random"?await gn(e,n):d==="friend"?await go(e,n,(a=we.params)==null?void 0:a.friendId,(p=we.params)==null?void 0:p.friendName):await Jn(e,n);break}case"market":await ho(e,n);break;case"rankings":await $o(e,n);break;case"matches":await ko(e,n);break;case"friends":await an(e,n);break;default:await bi(e,n)}}function To(){const e=document.getElementById("app"),t=we.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",p=>{p.preventDefault(),Dt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Rt()==="dark"?"light":"dark";Ao(p),Ai(p)}),Ai(Rt())}function Ai(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Io(){ni(Rt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await A.auth.getSession();if(!e){Ti(),xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt});return}we.user=e.user,await Et(),Ti();try{const{data:n}=await A.from("formation_links_overrides").select("formation, links"),a={};(n||[]).forEach(p=>{a[p.formation]=p.links}),en(a)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!we.profile){nn(document.getElementById("app"),{state:we,navigate:async()=>{await Et(),Wt()},toast:kt,refreshProfile:Et});return}const t=Array.isArray(we.profile.pending_boosters)?we.profile.pending_boosters:[];if(!we.profile.onboarding_done&&t.length>0){Wn(document.getElementById("app"),{state:we,navigate:()=>Wt(),toast:kt,refreshProfile:Et});return}we.profile.theme&&we.profile.theme!==Rt()&&(localStorage.setItem(gi,we.profile.theme),ni(we.profile.theme)),Wt(),A.auth.onAuthStateChange(async(n,a)=>{n==="SIGNED_OUT"&&(we.user=null,we.profile=null,document.getElementById("app").innerHTML="",xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt}))})}function Lo(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=Lo()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Wt(){const e=()=>{var n;(n=we.user)!=null&&n.id&&A.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",we.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),To(),Ji()}function Ti(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Qi(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}Io().catch(e=>{console.error("Échec du démarrage:",e),Qi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Qi("Le serveur met trop de temps à répondre.")},12e3);
