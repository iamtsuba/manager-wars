import{s as k,l as Ze,j as Ii,F as oi,h as zt,i as Zi,k as en,b as tn}from"./formation-links-CEzN0rcz.js";function xi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!a||!p){s.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:l}=await k.auth.signInWithPassword({email:a,password:p});if(d.textContent="Se connecter",d.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!a||!p||!s){d.textContent="Remplissez tous les champs.";return}if(p.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==s){d.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await k.auth.signUp({email:a,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,c){d.textContent=c.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function nn(e,{state:t,navigate:n,toast:a,refreshProfile:p}){let s="#1A6B3C",d="#D4A017";e.innerHTML=`
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
  `;function l(){var $;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),f=(($=document.getElementById("setup-club"))==null?void 0:$.value)||"MW",m=f.trim().split(" ").filter(Boolean),g=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=s),r&&(r.textContent=g,r.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,l()});function c(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await k.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await k.from("users").select("id").eq("club_name",i).maybeSingle();if(f){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:g}=await k.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:s,club_color2:d,credits:1e4});if(g)throw g;await on(t.user.id),await p(),a(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function on(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await k.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const Tt="#1A6B3C",It="#cc2222",rn="#D4A017",yi="#888";async function an(e,t){const{state:n,toast:a}=t;e.innerHTML=`
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
    </div>`,await Li(n,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>dn(n,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>zi(n,a,null,t))}async function Li(e,t,n={}){const{navigate:a}=n,p=e.user.id,{data:s,error:d}=await k.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${p},addressee_id.eq.${p}`),{count:l}=await k.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",p).eq("status","pending"),c=document.getElementById("pending-badge");c&&(l>0?(c.style.display="flex",c.textContent=l):c.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(d){console.error("[Friends] Erreur:",d),i.innerHTML=`<div style="color:${It};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const r=(s||[]).map(g=>g.requester_id===p?g.addressee_id:g.requester_id);let f={};if(r.length){const{data:g}=await k.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(g||[]).forEach($=>{f[$.id]=$})}const m=(s||[]).map(g=>({friendshipId:g.id,friend:f[g.requester_id===p?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!m.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:g,friend:$})=>sn($,g)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>ln(e,g.dataset.stats,g.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",()=>{const $=g.dataset.friendId,o=g.dataset.friendName;console.log("[Friends] clic match",{fid:$,fname:o,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:$,friendName:o}):t("Erreur navigation","error")})})}function sn(e,t){const n=e.club_name||e.pseudo||"?",a=e.pseudo||"",p=(a||n).slice(0,2).toUpperCase(),s=e.club_color2||Tt,d=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,c=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${s};border:2.5px solid ${d};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${d}">
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
      <div id="add-friend-error" style="color:${It};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${ai()}`,document.body.appendChild(n);const a=n.querySelector("#friend-pseudo-input"),p=n.querySelector("#add-friend-error"),s=()=>n.remove();a.focus(),n.querySelector("#add-cancel").addEventListener("click",s),n.addEventListener("click",d=>{d.target===n&&s()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const d=a.value.trim();if(!d){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await k.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await k.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(c){const r=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=r;return}const{error:i}=await k.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function zi(e,t,n=null,a={}){const p=e.user.id,{data:s}=await k.from("friendships").select("id, requester_id").eq("addressee_id",p).eq("status","pending").order("created_at",{ascending:!1}),d=(s||[]).map(m=>m.requester_id);let l={};if(d.length){const{data:m}=await k.from("users").select("id, pseudo, club_name").in("id",d);(m||[]).forEach(g=>{l[g.id]=g})}const c=(s||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),i=ri(),r=c||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(m=>{var g,$,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=m.requester)==null?void 0:g.club_name)||(($=m.requester)==null?void 0:$.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((o=m.requester)==null?void 0:o.pseudo)||""})</span>
                </div>
                <button data-accept="${m.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Tt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${m.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${It};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",m=>{m.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:g}=await k.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Li(e,t,a),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await k.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function ln(e,t,n){const a=e.user.id,[p,s]=[a,t].sort(),d=a===p,{data:l}=await k.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",s).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},r=d?i.wins_p1||0:i.wins_p2||0,f=d?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,g=d?i.goals_p1||0:i.goals_p2||0,$=d?i.goals_p2||0:i.goals_p1||0,o=d?i.gc_used_p1||0:i.gc_used_p2||0,_=d?i.gc_used_p2||0:i.gc_used_p1||0,z=i.matches_total||0,L=(K,q,j,R=Tt,ie=It)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${R}">${q}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${K}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${ie}">${j}</div>
    </div>`,F=ri();F.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${n}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      </div>
      ${z===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${L("Victoires",r,f)}
        ${L("Nuls",m,m,yi,yi)}
        ${L("Défaites",f,r)}
        ${L("Buts marqués",g,$)}
        ${L("Buts encaissés",$,g,It,Tt)}
        ${L("GC utilisés ⚡",o,_,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
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
    </style>`}async function cn({player1Id:e,player2Id:t,score1:n,score2:a,gc1:p,gc2:s}){const[d,l]=[e,t].sort(),c=e!==d,i=c?a:n,r=c?n:a,f=c?s:p,m=c?p:s,g=i>r?1:0,$=r>i?1:0,o=i===r?1:0,{data:_}=await k.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",l).single();_?await k.from("friend_match_stats").update({wins_p1:_.wins_p1+g,wins_p2:_.wins_p2+$,draws:_.draws+o,goals_p1:_.goals_p1+i,goals_p2:_.goals_p2+r,gc_used_p1:_.gc_used_p1+f,gc_used_p2:_.gc_used_p2+m,matches_total:_.matches_total+1}).eq("player1_id",d).eq("player2_id",l):await k.from("friend_match_stats").insert({player1_id:d,player2_id:l,wins_p1:g,wins_p2:$,draws:o,goals_p1:i,goals_p2:r,gc_used_p1:f,gc_used_p2:m,matches_total:1})}const Ge={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function we(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const hi=["ATT","MIL","DEF","GK"];function Mi(e){let t=0;const n=e.length;for(let a=0;a<n;a++)for(let p=a+1;p<n;p++){const s=e[a],d=e[p];if(!s||!d)continue;const l=s._col!=null&&d._col!=null&&s._col===d._col,c=s._col!=null&&d._col!=null&&Math.abs(s._col-d._col)===1,i=hi.indexOf(s._line||s.job),r=hi.indexOf(d._line||d.job),f=Math.abs(i-r)===1;if(!((s._line||s.job)===(d._line||d.job)&&c||l&&f))continue;const $=s.country_code&&d.country_code&&s.country_code===d.country_code,o=s.club_id&&d.club_id&&s.club_id===d.club_id;$&&o?t+=2:($||o)&&(t+=1)}return t}function Pt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;return s+(Number(l==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),a=Mi(e);let p=n+a;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:n,links:a,total:Math.max(0,p)}}function Ot(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;let c=0;return l==="GK"?c=Number(d.note_g)||0:l==="MIL"?c=Number(d.note_m)||0:c=Number(d.note_d)||0,s+c+(d.boost||0)},0),a=Mi(e);let p=n+a;return t.stolenNote&&(p-=t.stolenNote),{base:n,links:a,total:Math.max(0,p)}}function Ht(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Si(e,t,n="easy"){const a=e.filter(d=>!d.used);if(!a.length)return[];const p=[...a].sort((d,l)=>{const c=t==="attack"?we(d,"ATT"):d._line==="GK"?we(d,"GK"):we(d,"DEF");return(t==="attack"?we(l,"ATT"):l._line==="GK"?we(l,"GK"):we(l,"DEF"))-c});let s=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(s,p.length,3))}function pn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ut={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,n,a,p){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",p)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Xt(e,t){var a,p;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((a=n.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((p=n.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function si(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ft(e,t){const n=pt[t]||pt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),c=ot(l.length);l.forEach((i,r)=>{i._col=c[r]}),a[d]=l}return a}const s=[...e];for(const d of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[d];i++){let r=s.findIndex(f=>f.job===d);if(r===-1&&(r=s.findIndex(f=>f.job2===d)),r===-1&&(r=0),s[r]){const f={...s[r],_line:d};l.push(f),s.splice(r,1)}}const c=ot(l.length);l.forEach((i,r)=>{i._col=c[r]}),a[d]=l}return a}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Oe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function di(e,t,n){const p=new Set,s=t.filter(r=>{const f=r.gc_type||r.id;return p.has(f)?!1:(p.add(f),!0)});let d=[];function l(r,f){const m=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},$={purple:"#9b59b6",light_blue:"#00bcd4"},o=g[m==null?void 0:m.color]||g.purple,_=$[m==null?void 0:m.color]||$.purple;return`<div class="gc-select-card" data-id="${r.id}"
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(r)};function i(){var f,m,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=d.length>0;e.innerHTML=`
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
        ${s.map($=>{const o=d.find(_=>_.gc_type===$.gc_type);return l($,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach($=>{$.addEventListener("click",()=>{const o=$.dataset.id,_=s.find(L=>L.id===o);if(!_)return;const z=d.findIndex(L=>L.gc_type===_.gc_type);z>-1?d.splice(z,1):d.length<3&&d.push(_),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{r&&c(d)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>c([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}function un(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function fn(e,t,n){const{state:a,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const d=s.map(r=>r.id),{data:l}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let c=0;function i(){var L,F,K,q,j;const r=s[c],f=(l||[]).filter(R=>R.deck_id===r.id),m=f.filter(R=>{var ie;return R.is_starter&&((ie=R.card)==null?void 0:ie.player)}).map(R=>Xt(R.card,R.position)),g=f.find(R=>{var ie;return((ie=R.card)==null?void 0:ie.card_type)==="formation"}),$=r.formation||((L=g==null?void 0:g.card)==null?void 0:L.formation)||"4-4-2",o=m.length>=11?ft(m,$):null,_=m.length>=11;Xe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(o,$,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((R,ie)=>`<div style="width:7px;height:7px;border-radius:50%;background:${ie===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const ie=e.querySelector(".deck-preview-wrap svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(F=document.getElementById("prev-deck"))==null||F.addEventListener("click",()=>{c>0&&(c--,i())}),(K=document.getElementById("next-deck"))==null||K.addEventListener("click",()=>{c<s.length-1&&(c++,i())}),(q=document.getElementById("validate-deck"))==null||q.addEventListener("click",()=>{if(!_)return;const R=t.state.params||{};t.navigate("match",{...R,matchMode:R.matchMode||n,deckId:r.id})}),(j=document.getElementById("cancel-deck-select"))==null||j.addEventListener("click",()=>{Oe(e),p("home")});const z=document.getElementById("deck-swipe-zone");if(z){let R=0,ie=0;z.addEventListener("touchstart",ce=>{R=ce.touches[0].clientX,ie=ce.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",ce=>{const ne=ce.changedTouches[0].clientX-R,M=ce.changedTouches[0].clientY-ie;Math.abs(ne)<40||Math.abs(ne)<Math.abs(M)||(ne<0&&c<s.length-1?(c++,i()):ne>0&&c>0&&(c--,i()))},{passive:!0})}}i()}function Ci(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),p=Ci(e),s=e._line||e.job||"MIL",d=ut[s]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(we(e,s))||0)+(e.boost||0),i=ji(e==null?void 0:e.country_code),r=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Jt(e==null?void 0:e.country_code)?`<img src="${Jt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((s,d)=>{if(p+=Ve(s,40,52),d<a.length-1){const l=Ze(s,a[d+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),p+="</div>",p}function Jt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ji(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,a,p=310,s=310,d=[]){var F;const l=zt[t]||{},c=Ii(t)||oi[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const K of r)(e[K]||[]).forEach((j,R)=>{i[`${K}${R+1}`]=j});function f(K){const q=l[K];return q?{x:q.x*p,y:q.y*s}:null}let m="";for(const[K,q]of c){const j=f(K),R=f(q);if(!j||!R)continue;const ie=i[K],ce=i[q],ne=Ze(ie,ce);ne==="#00ff88"||ne==="#FFD700"?(m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${R.x.toFixed(1)}" y2="${R.y.toFixed(1)}"
        stroke="${ne}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${R.x.toFixed(1)}" y2="${R.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${R.x.toFixed(1)}" y2="${R.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,$=64,o=13,_=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[K,q]of Object.entries(i)){const j=f(K);if(!j||!q)continue;const R=K.replace(/[0-9]/g,""),ie=ut[R]||"#555",ce=d.includes(q.cardId),ne=n==="attack"&&(["MIL","ATT"].includes(R)||ce)&&!q.used||n==="defense"&&["GK","DEF","MIL"].includes(R)&&!q.used,M=a.includes(q.cardId);let Y;n==="attack"?Y=ce?Math.max(1,Number(q.note_a)||0):R==="MIL"?Number(q.note_m)||0:Number(q.note_a)||0:n==="defense"?Y=R==="GK"?Number(q.note_g)||0:R==="MIL"?Number(q.note_m)||0:Number(q.note_d)||0:Y=Number(R==="GK"?q.note_g:R==="DEF"?q.note_d:R==="MIL"?q.note_m:q.note_a)||0,Y=Y+(q.boost||0);const ee=(j.x-g/2).toFixed(1),D=(j.y-$/2).toFixed(1),Q=z[q==null?void 0:q.rarity]||z.normal;if(q.used){const O=typeof import.meta<"u"&&"/manager-wars/"||"/",B=`${typeof window<"u"&&((F=window.location)==null?void 0:F.origin)||""}${O}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${ee}" y="${D}" width="${g}" height="${$}" rx="5" fill="#161616"/>`,m+=`<image href="${B}" xlink:href="${B}" x="${ee}" y="${D}" width="${g}" height="${$}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${ee}" y="${D}" width="${g}" height="${$}" rx="5" fill="none" stroke="${Q}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${ee}" y="${D}" width="${g}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${q.cardId}" data-role="${R}" style="cursor:pointer"/>`;continue}const ae=M?.45:1,pe=M?"#FFD700":Q,he=M?3:(q==null?void 0:q.rarity)==="legende"||(q==null?void 0:q.rarity)==="légende"||(q==null?void 0:q.rarity)==="pepite"||(q==null?void 0:q.rarity)==="pépite"?2.5:2,xe=$-o-_;m+=`<defs><clipPath id="cp-${K}"><rect x="${ee}" y="${(j.y-$/2+o).toFixed(1)}" width="${g}" height="${xe}"/></clipPath></defs>`,m+=`<rect x="${ee}" y="${D}" width="${g}" height="${$}" rx="5" fill="${ie}" opacity="${ae}"/>`;const ge=ze(q);ge&&(m+=`<image href="${ge}" xlink:href="${ge}" x="${ee}" y="${(j.y-$/2+o).toFixed(1)}" width="${g}" height="${xe}" clip-path="url(#cp-${K})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${ee}" y="${D}" width="${g}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y-$/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(q.name||"").slice(0,9)}</text>`;const P=(j.y+$/2-_).toFixed(1);m+=`<rect x="${ee}" y="${P}" width="${g}" height="${_}" fill="rgba(255,255,255,0.92)"/>`;{const O=Jt(q.country_code);O?m+=`<image href="${O}" xlink:href="${O}" x="${(j.x-20).toFixed(1)}" y="${(j.y+$/2-_+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(j.x-13).toFixed(1)}" y="${(j.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ji(q.country_code)}</text>`,m+=`<text x="${j.x.toFixed(1)}" y="${(j.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const S=Ci(q);S?m+=`<image href="${S}" xlink:href="${S}" x="${(j.x+g/2-14).toFixed(1)}" y="${(j.y+$/2-_+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:q.clubName&&(m+=`<text x="${(j.x+14).toFixed(1)}" y="${(j.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(q.clubName||"").slice(0,3).toUpperCase()}</text>`),q.boost&&(m+=`<rect x="${(j.x+g/2-12).toFixed(1)}" y="${(j.y-$/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(j.x+g/2-5).toFixed(1)}" y="${(j.y-$/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${q.boost}</text>`)}m+=`<rect x="${ee}" y="${D}" width="${g}" height="${$}" rx="5" fill="${M?"rgba(255,255,255,0.12)":"none"}" stroke="${pe}" stroke-width="${he}" opacity="${ae}"/>`,ne&&(m+=`<rect x="${ee}" y="${D}" width="${g}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${M?"selected":""}" data-card-id="${q.cardId}" data-role="${R}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${p+L*2} ${s+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function dt(e,t,n,a,p=300,s=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${st(e,t,n,a,p,s,d)}
  </div>`}function nt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function li(e,t,n,a){var q;const{state:p,navigate:s,toast:d}=t;Xe(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return fn(e,t,n);const c=l.deckId;let i,r,f,m;try{const j=await Promise.all([k.from("decks").select("formation,name").eq("id",c).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);i=j[0].data,f=j[0].error,r=j[1].data,m=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const g=(r||[]).filter(j=>{var R;return j.is_starter&&((R=j.card)==null?void 0:R.player)}).map(j=>Xt(j.card,j.position)),$=(r||[]).filter(j=>{var R;return!j.is_starter&&((R=j.card)==null?void 0:R.player)}).map(j=>Xt(j.card,j.position));if(g.length<11){rt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>s("decks"));return}const o=(r||[]).find(j=>{var R;return((R=j.card)==null?void 0:R.card_type)==="formation"}),_=(i==null?void 0:i.formation)||((q=o==null?void 0:o.card)==null?void 0:q.formation)||"4-4-2",{data:z,error:L}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:F}=await k.from("gc_definitions").select("*").eq("is_active",!0),K=(z||[]).map(j=>({...j,_gcDef:(F==null?void 0:F.find(R=>R.name===j.gc_type||R.id===j.gc_definition_id))||null}));a({deckId:c,formation:_,starters:g,subsRaw:$,gcCardsEnriched:K,gcDefs:F||[]})}async function gn(e,t){var n,a;try{const p=(a=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:a.id;try{(k.getChannels?k.getChannels():[]).forEach(d=>{const l=d.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&k.removeChannel(d)})}catch(s){console.warn("[Random] cleanup canaux:",s)}p&&await k.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}await li(e,t,"random",({deckId:p,formation:s,starters:d,subsRaw:l,gcCardsEnriched:c,gcDefs:i})=>{const r=f=>mn(e,t,p,s,d,l,f,i||[]);if(!c.length){r([]);return}di(e,c,r)})}async function mn(e,t,n,a,p,s,d=[],l=[]){var L;const{state:c,navigate:i,toast:r}=t;let f=!1,m=null;Xe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(F=!0)=>{f=!0,m&&(k.removeChannel(m),m=null),F&&await k.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(L=document.getElementById("mm-cancel"))==null||L.addEventListener("click",async()=>{try{await g(!0)}catch{}Oe(e),i("home")});const $=async(F,K,q)=>{if(f)return;f=!0,m&&(k.removeChannel(m),m=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(R=>setTimeout(R,600)),e.isConnected&&Bi(e,t,F,q,d,l)},{data:o,error:_}=await k.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:n});if(_||!(o!=null&&o.success)){r("Erreur de matchmaking","error"),Oe(e),i("home");return}if(o.matched){$(o.match_id,o.opponent_id,!1);return}const z=document.getElementById("mm-status");z&&(z.textContent="En attente d'un autre joueur..."),m=k.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},F=>{const K=F.new;K.status==="matched"&&K.match_id&&$(K.match_id,K.matched_with,!0)}).subscribe()}async function xn(e,t,n){const{state:a,navigate:p,toast:s}=t;try{(k.getChannels?k.getChannels():[]).forEach(i=>{const r=i.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&k.removeChannel(i)})}catch{}const{data:d}=await k.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!d){s("Match introuvable","error"),p("home");return}if(d.status==="finished"){s("Ce match est terminé","info"),p("home");return}const l=d.home_id===a.profile.id;Bi(e,t,n,l,[],[])}async function Bi(e,t,n,a,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(T=>T.id),m=(p||[]).map(T=>({id:T.id,gc_type:T.gc_type,_gcDef:T._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await k.from("matches").select("*").eq("id",n).single();if(!g){c("Match introuvable","error"),l("home");return}async function $(){const[{data:T},{data:u},{data:x},{data:h}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),y=E=>({cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:Number(E.note_g)||0,note_d:Number(E.note_d)||0,note_m:Number(E.note_m)||0,note_a:Number(E.note_a)||0,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((T==null?void 0:T.starters)||[]).map(E=>y(E)),v=((u==null?void 0:u.starters)||[]).map(E=>y(E)),w=(T==null?void 0:T.formation)||"4-4-2",I=(u==null?void 0:u.formation)||"4-4-2";return{p1Team:ft(b,w),p2Team:ft(v,I),p1Subs:((T==null?void 0:T.subs)||[]).map(E=>y(E)),p2Subs:((u==null?void 0:u.subs)||[]).map(E=>y(E)),p1Formation:w,p2Formation:I,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!o)if(a){o=await $();const{data:T}=await k.from("matches").select("game_state").eq("id",n).single();!(T!=null&&T.game_state)||!Object.keys(T.game_state).length?await k.from("matches").update({game_state:o,turn_user_id:g.home_id}).eq("id",n):o=T.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let T=0;T<30&&!o;T++){await new Promise(x=>setTimeout(x,400));const{data:u}=await k.from("matches").select("game_state").eq("id",n).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(o=u.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await k.from("matches").update({game_state:o}).eq("id",n)}let _=!1,z=null,L=!1;const F=new Set,K=new Set;function q(T){var E,A;try{k.removeChannel(j)}catch{}const u=o[i+"Score"]||0,x=o[r+"Score"]||0;let h,y;T.winner_id?(h=T.winner_id===d.profile.id,y=!1):T.forfeit?(h=u>x,y=!1):(y=u===x,h=u>x),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":h?"🏆":"😞",w=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${w}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${u} – ${x} ${o[r+"Name"]}</div>
      ${T.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(A=b.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{b.remove(),Oe(e),l("home")})}const j=k.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},T=>{const u=T.new;try{if(u.status==="finished"||u.forfeit){if(_)return;_=!0,z&&(clearInterval(z),z=null),u.game_state&&(o=u.game_state),q(u);return}if(u.game_state){const x=o;o=u.game_state;const h=o._lastGC;if(h&&h.seq&&!K.has(h.seq)&&(K.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>D());return}const y=x[i+"Score"]||0,b=x[r+"Score"]||0,v=o[i+"Score"]||0,w=o[r+"Score"]||0,I=v>y,E=w>b;if((I||E)&&!F.has(o.round)){F.add(o.round);const A=[...o.log||[]].reverse().find(N=>N.isGoal),C=((A==null?void 0:A.homePlayers)||[]).map(N=>({name:N.name,note:N.note,portrait:N.portrait,job:N.job}));he(C,v,w,I,()=>D());return}D()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function R(T){Object.assign(o,T),o.lastActionAt=new Date().toISOString();const{error:u}=await k.from("matches").update({game_state:o}).eq("id",n);u&&c("Erreur de synchronisation","error");try{D()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function ie(){if(_)return;_=!0,z&&(clearInterval(z),z=null);const T=a?g.away_id:g.home_id,u=a?"p2":"p1",x=a?"p1":"p2",h={...o,[u+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:T,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{k.removeChannel(j)}catch{}setTimeout(()=>{Oe(e),l("home")},800)}const ce={BOOST_STAT:({value:T=1,count:u=1,roles:x=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!x.length||x.includes(w)).flatMap(([w,I])=>I.filter(E=>!E.used).map(E=>({...E,_line:w})));if(!v.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}ne(v,u,`Choisir ${u} joueur(s) à booster (+${T})`,w=>{w.forEach(I=>{const E=(b[I._line]||[]).find(A=>A.cardId===I.cardId);E&&(E.boost=(E.boost||0)+T,h.log.push({text:`⚡ +${T} sur ${E.name}`,type:"info"}))}),h[i+"Team"]=b,y(h)})},DEBUFF_STAT:({value:T=1,count:u=1,roles:x=[],target:h="ai"},y,b)=>{const v=h==="home"?i:r,w=y[v+"Team"],I=h==="home"?"allié":"adverse",E=Object.entries(w).filter(([A])=>!x.length||x.includes(A)).flatMap(([A,C])=>C.filter(N=>!N.used).map(N=>({...N,_line:A})));if(!E.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),b(y);return}ne(E,u,`Choisir ${u} joueur(s) ${I}(s) (-${T})`,A=>{A.forEach(C=>{const N=(w[C._line]||[]).find(W=>W.cardId===C.cardId);N&&(N.boost=(N.boost||0)-T,y.log.push({text:`🎯 -${T} sur ${N.name}`,type:"info"}))}),y[v+"Team"]=w,b(y)})},GRAY_PLAYER:({count:T=1,roles:u=[],target:x="ai"},h,y)=>{const b=x==="home"?i:r,v=h[b+"Team"],w=x==="home"?"allié":"adverse",I=Object.entries(v).filter(([E])=>!u.length||u.includes(E)).flatMap(([E,A])=>A.filter(C=>!C.used).map(C=>({...C,_line:E})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${w}`,type:"info"}),y(h);return}ne(I,T,`Choisir ${T} joueur(s) ${w}(s) à exclure`,E=>{E.forEach(A=>{const C=(v[A._line]||[]).find(N=>N.cardId===A.cardId);C&&(C.used=!0,h.log.push({text:`❌ ${C.name} exclu !`,type:"info"}))}),h[b+"Team"]=v,y(h)})},REVIVE_PLAYER:({count:T=1,roles:u=[]},x,h)=>{const y=x[i+"Team"],b=Object.entries(y).filter(([v])=>!u.length||u.includes(v)).flatMap(([v,w])=>w.filter(I=>I.used).map(I=>({...I,_line:v})));if(!b.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(x);return}ne(b,T,`Choisir ${T} joueur(s) à ressusciter`,v=>{v.forEach(w=>{const I=(y[w._line]||[]).find(E=>E.cardId===w.cardId);I&&(I.used=!1,x.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),x[i+"Team"]=y,h(x)})},REMOVE_GOAL:({},T,u)=>{const x=r+"Score";T[x]>0?(T[x]--,T.log.push({text:"🚫 Dernier but annulé !",type:"info"})):T.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(T)},ADD_GOAL_DRAW:({},T,u)=>{T[i+"Score"]===T[r+"Score"]?(T[i+"Score"]++,T.log.push({text:"🎯 But bonus !",type:"info"})):T.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(T)},ADD_SUB:({value:T=1},u,x)=>{u.maxSubs=(u.maxSubs||3)+T,u.log.push({text:`🔄 +${T} remplacement(s)`,type:"info"}),x(u)},CUSTOM:({},T,u)=>u(T)};function ne(T,u,x,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function v(){var I,E;const w=T.map(A=>{const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",N=we(A,A._line)+(A.boost||0),le=b.find(H=>H.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${le};background:${C};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${N}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
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
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const C=A.dataset.cid,N=T.find(le=>le.cardId===C),W=b.findIndex(le=>le.cardId===C);N&&(W>-1?b.splice(W,1):b.length<u&&b.push(N),v())})}),(E=y.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{y.remove(),h(b)})}v(),document.body.appendChild(y)}async function M(T,u){const h=(o["gcCardsFull_"+i]||[]).find(w=>w.id===T),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(w=>{var I;return w.name===u||((I=w.name)==null?void 0:I.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b=[...o["usedGc_"+i]||[],T],v={type:u,by:i,seq:(o._gcAnimSeq||0)+1};K.add(v.seq),xe(u,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=ce[y.effect_type];if(I){const E={...o};I(y.effect_params||{},E,async A=>{A["usedGc_"+i]=b,A._lastGC=v,A._gcAnimSeq=v.seq,await R(A)});return}}const w={...o};switch(u){case"Remplacement+":w.maxSubs=(w.maxSubs||3)+1,w.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=r+"Score";w[I]>0&&(w[I]--,w.log.push({text:"🚫 But annulé",type:"info"}));break}}w["usedGc_"+i]=b,w._lastGC=v,w._gcAnimSeq=v.seq,await R(w)})}function Y(T,u){const x="usedCardIds_"+T,h=new Set(o[x]||[]);u.forEach(y=>h.add(y)),o[x]=[...h]}function ee(){for(const T of["p1","p2"]){const u=new Set(o["usedCardIds_"+T]||[]),x=o[T+"Team"];if(x)for(const h of["GK","DEF","MIL","ATT"])(x[h]||[]).forEach(y=>{y.used=u.has(y.cardId)})}}function D(){var Be,Qe,mt,xt,yt,ht;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return pe();if(o.phase==="finished")return He();const T=o[i+"Team"],u=o[r+"Team"];ee();const x=o[i+"Score"],h=o[r+"Score"],y=o[i+"Name"],b=o[r+"Name"],v=o.phase===i+"-attack",w=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],E=I.map(X=>X.cardId),A=window.innerWidth>=700,C=o[i+"Subs"]||[],N=o["usedSubIds_"+i]||[],W=C.filter(X=>!N.includes(X.cardId)),le=o["gcCardsFull_"+i]||[],J=o["usedGc_"+i]||[],H=le.filter(X=>!J.includes(X.id)),V=o.boostOwner===i&&!o.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(X=>(u[X]||[]).some(G=>!G.used)),de=[...T.MIL||[],...T.ATT||[]].filter(X=>!X.used),ue=v&&Z&&de.length===0?[...T.GK||[],...T.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function fe(X,G,re){var Ct,wt;const se=X._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",We=(se==null?void 0:se.name)||X.gc_type,Je=(se==null?void 0:se.effect)||((Ct=Ge[X.gc_type])==null?void 0:Ct.desc)||"",et=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,Mt=((wt=Ge[X.gc_type])==null?void 0:wt.icon)||"⚡",St=Math.round(re*.22),bt=Math.round(re*.22),lt=re-St-bt,vt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${G}px;height:${re}px;border-radius:10px;border:2px solid ${Ye};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}const be=(X,G)=>G?me(130,175):fe(X,130,175),Se=(X,G)=>G?me(68,95):fe(X,68,95),Re=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Fe=v?Ee(i)?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Re};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:w?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,Ie=v&&!Ee(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(X,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,je=v?"attack":w?"defense":"idle",De=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(T,o[i+"Formation"],je,E,300,300,ue)}
      </div>
    </div>`;function Pe(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const G=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
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
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ue=(()=>{var G,re;if(w&&((G=o.pendingAttack)!=null&&G.players)){const se=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
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
      </button>`;Xe(e),e.style.overflow="hidden",A?e.innerHTML=`
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
              ${dt(T,o[i+"Formation"],je,E,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(X=>Se(X,!1)).join("")}
            ${V?Se(null,!0):""}
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
      </div>`;function Ce(){const X=e.querySelector(".match-screen");if(!X)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=G+"px",X.style.minHeight=G+"px",X.style.maxHeight=G+"px",X.style.overflow="hidden";const re=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");re&&se&&(se.style.paddingBottom=re.offsetHeight+"px")}if(Ce(),setTimeout(Ce,120),setTimeout(Ce,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ce),window.visualViewport.addEventListener("scroll",Ce)),window.addEventListener("resize",Ce)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!v&&!w)return;const G=X.dataset.cardId,re=X.dataset.role,se=(T[re]||[]).find(Je=>Je.cardId===G);if(!se||se.used)return;const ye=ue.includes(G);if(v&&!["MIL","ATT"].includes(re)&&!ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Je=>Je.cardId===G);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...se,_role:re}),D()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>O(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>O())}),(Be=e.querySelector("#pvp-sub-open"))==null||Be.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>ge(X.dataset.gcId,X.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>P()),(mt=e.querySelector("#pvp-action"))==null||mt.addEventListener("click",X=>{v?X.currentTarget.dataset.pass==="1"||!Ee(i)?oe():te():w&&Te()}),(xt=e.querySelector("#pvp-quit"))==null||xt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ie()}),(yt=e.querySelector("#pvp-view-opp"))==null||yt.addEventListener("click",()=>B()),(ht=e.querySelector("#pvp-toggle-history"))==null||ht.addEventListener("click",()=>U()),z&&(clearInterval(z),z=null),(v||w)&&!_){let X=30,G=!1;const re=()=>document.getElementById("pvp-timer"),se=()=>{re()&&(re().textContent=X+"s",re().style.color=G?"#ff4444":"#fff")};se(),z=setInterval(()=>{X--,X<0?G?(clearInterval(z),z=null,v&&!Ee(i)?oe():ie()):(G=!0,X=15,se()):se()},1e3)}}function Q(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await R({phase:"midfield"})},5e3)}let ae=!1;function pe(){if(ae)return;const T=o[i+"Team"].MIL||[],u=o[r+"Team"].MIL||[];function x(H){return H.reduce((V,Z)=>V+we(Z,"MIL"),0)}function h(H){let V=0;for(let Z=0;Z<H.length-1;Z++){const de=Ze(H[Z],H[Z+1]);de==="#00ff88"?V+=2:de==="#FFD700"&&(V+=1)}return V}const y=x(T)+h(T),b=x(u)+h(u),v=y>=b;function w(H,V,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
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
          Score: ${x(H)} + ${h(H)} liens = <b style="color:#fff">${x(H)+h(H)}</b>
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
    </div>`;const I=(H,V)=>e.querySelectorAll(H).forEach((Z,de)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},V+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,V)=>setTimeout(()=>{H.style.opacity="1"},V*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function E(H,V,Z){const de=document.getElementById(H);if(!de)return;const ue=performance.now(),fe=me=>{const be=Math.min(1,(me-ue)/Z);de.textContent=Math.round(V*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):de.textContent=V};requestAnimationFrame(fe)}setTimeout(()=>{E("pvp-score-me",y,800),E("pvp-score-opp",b,800)},1500);const A=o.p1Team.MIL||[],C=o.p2Team.MIL||[],N=x(A)+h(A),W=x(C)+h(C),le=N>=W?"p1":"p2";let J=o.boostValue;J==null&&(J=si(),o.boostValue=J,o.boostOwner=le,o.boostUsed=!1),ae=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(v?"me":"opp")),V=e.querySelector("#duel-row-"+(v?"opp":"me")),Z=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),ue=v?Z:de,fe=v?de:Z;ue&&(ue.style.fontSize="80px",ue.style.color=v?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Re;const me=document.getElementById("pvp-duel-finale");if(!me)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Se,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Re=document.getElementById("pvp-start-match"))==null||Re.addEventListener("click",async()=>{const Fe=le;await R({phase:Fe+"-attack",attacker:Fe,round:1,boostValue:J,boostUsed:!1,boostOwner:Fe})})},600)},700)},2800)}function he(T,u,x,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(A,C)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${C%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][C%8]}</div>`).join(""),w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
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
        ${T.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${w[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let I=!1;const E=()=>{I||(I=!0,b.remove(),setTimeout(()=>y(),50))};b.addEventListener("click",E),setTimeout(E,3500)}function xe(T,u,x){var J,H;const h=(o.gcDefs||[]).find(V=>{var Z;return V.name===T||((Z=V.name)==null?void 0:Z.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",v=(h==null?void 0:h.name)||T,w=(h==null?void 0:h.effect)||((J=Ge[T])==null?void 0:J.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,E=((H=Ge[T])==null?void 0:H.icon)||"⚡",C=u===i?"Vous":o[u+"Name"]||"Adversaire",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",N.innerHTML=`
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
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(N);let W=!1;const le=()=>{W||(W=!0,N.remove(),setTimeout(()=>x&&x(),50))};N.addEventListener("click",le),setTimeout(le,3e3)}function ge(T,u){var N,W,le,J;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===T),y=h==null?void 0:h._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((N=Ge[u])==null?void 0:N.desc)||"Carte spéciale.",E=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,A=((W=Ge[u])==null?void 0:W.icon)||"⚡",C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",C.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
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
      </div>`,document.body.appendChild(C),(le=C.querySelector("#pvp-gc-back"))==null||le.addEventListener("click",()=>C.remove()),(J=C.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{C.remove(),M(T,u)})}function P(){var h;const T=o[i+"Team"],u=Object.entries(T).flatMap(([y,b])=>(b||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!u.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(y=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=we(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#bp-close"))==null||h.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const b=y.dataset.cid,v=u.find(I=>I.cardId===b);if(!v)return;const w=(T[v._line]||[]).find(I=>I.cardId===b);w&&(w.boost=(w.boost||0)+o.boostValue),x.remove(),await R({[i+"Team"]:T,boostUsed:!0})})})}function O(T=null){var W,le;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const x=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){c(`Maximum ${y} remplacements atteint`,"warning");return}const b=Object.entries(x).flatMap(([J,H])=>(H||[]).filter(V=>V.used).map(V=>({...V,_line:J}))),v=(o[i+"Subs"]||[]).filter(J=>!h.includes(J.cardId));if(!b.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){c("Aucun remplaçant disponible","warning");return}let w=Math.max(0,b.findIndex(J=>J.cardId===T));const I=((W=b[w])==null?void 0:W._line)||((le=b[w])==null?void 0:le.job);let E=Math.max(0,v.findIndex(J=>J.job===I)),A=!1;const C=document.createElement("div");C.id="pvp-sub-overlay",C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function N(){var fe,me,be,Se,Re,Fe;const J=b[w],H=v[E],V=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(V*1.35),de=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;C.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${H?Ve({...H,used:!1,boost:0},V,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${de(E>=v.length-1)}" ${E>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${v.length}</div>
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
      </div>`,(fe=C.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>C.remove()),(me=C.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{w>0&&(w--,N())}),(be=C.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{w<b.length-1&&(w++,N())}),(Se=C.querySelector("#pin-up"))==null||Se.addEventListener("click",()=>{E>0&&(E--,N())}),(Re=C.querySelector("#pin-down"))==null||Re.addEventListener("click",()=>{E<v.length-1&&(E++,N())});const ue=(Ie,Le,je,De)=>{const Pe=C.querySelector("#"+Ie);if(!Pe)return;let Ue=0;Pe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Pe.addEventListener("touchend",Ke=>{const Ce=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Ce)<30)return;const Be=Le();Ce<0&&Be<De-1?(je(Be+1),N()):Ce>0&&Be>0&&(je(Be-1),N())},{passive:!0})};ue("pin-panel",()=>E,Ie=>E=Ie,v.length),ue("pout-panel",()=>w,Ie=>w=Ie,b.length),(Fe=C.querySelector("#psub-confirm"))==null||Fe.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),A)return;A=!0;const Le=b[w],je=v[E];if(!Le||!je)return;const De=Le._line,Pe=(x[De]||[]).findIndex(Ce=>Ce.cardId===Le.cardId);if(Pe===-1){c("Erreur : joueur introuvable","error"),C.remove();return}const Ue={...je,_line:De,position:Le.position,used:!1,boost:0};x[De].splice(Pe,1,Ue);const Ke=[...h,je.cardId];C.remove(),S(Le,je,async()=>{await R({[i+"Team"]:x,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(C),N()}function S(T,u,x){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(I,E,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const w=()=>{v||(v=!0,y.remove(),setTimeout(()=>x(),50))};y.addEventListener("click",w),setTimeout(w,2200)}function B(){var u;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",T.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(T),(u=T.querySelector("#pvp-opp-close"))==null||u.addEventListener("click",()=>T.remove())}function U(){var x;const T=o.log||[],u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",u.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${T.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...T].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>u.remove())}async function oe(){if(o.phase!==i+"-attack")return;const T=i==="p1"?"p2":"p1",u=(o.round||0)+1,x=[...o.log||[]];x.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Ae(o),y=Ee(T),b=h||!y?"finished":T+"-attack";await R({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:b,attacker:T,round:u,log:x}),b==="finished"&&await Ne(o)}async function te(){const T=o[i+"Team"],u=!["GK","DEF","MIL","ATT"].some(b=>(o[r+"Team"][b]||[]).some(v=>!v.used)),x=(o["selected_"+i]||[]).map(b=>{const v=(T[b._role]||[]).find(N=>N.cardId===b.cardId)||b,w=u&&["GK","DEF"].includes(b._role),I=T[b._role]||[],E=I.findIndex(N=>N.cardId===b.cardId),A=ot(I.length),C=E>=0?A[E]:v._col??1;return{...v,_line:b._role,_col:C,...w?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!x.length)return;const h=Pt(x,o.modifiers[i]||{});Y(i,x.map(b=>b.cardId)),x.forEach(b=>{const v=(T[b._role]||[]).find(w=>w.cardId===b.cardId);v&&(v.used=!0)}),o["selected_"+i]=[],D();const y=[...o.log||[]];if(u){const b=(o[i+"Score"]||0)+1,v=x.map(C=>({name:C.name,note:we(C,C._line||"ATT"),portrait:ze(C),job:C.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:h.total,aiTotal:0});const w=(o.round||0)+1,I=i==="p1"?"p2":"p1",E={...o,[i+"Team"]:T,[i+"Score"]:b},A=Ae(E);F.add(w),he(v,b,o[r+"Score"]||0,!0,async()=>{await R({[i+"Team"]:T,[i+"Score"]:b,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:A?"finished":I+"-attack",attacker:I,round:w,log:y}),A&&await Ne({...o,[i+"Score"]:b})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await R({[i+"Team"]:T,[r+"Team"]:o[r+"Team"],pendingAttack:{...h,players:x,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:y})}async function Te(){const T=o[i+"Team"],u=(o["selected_"+i]||[]).map(J=>{const H=(T[J._role]||[]).find(fe=>fe.cardId===J.cardId)||J,V=T[J._role]||[],Z=V.findIndex(fe=>fe.cardId===J.cardId),de=ot(V.length),ue=Z>=0?de[Z]:H._col??1;return{...H,_line:J._role,_col:ue}}),x=Ot(u,o.modifiers[i]||{});Y(i,u.map(J=>J.cardId)),u.forEach(J=>{const H=(T[J._role]||[]).find(V=>V.cardId===J.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],D();const h=Ht(o.pendingAttack.total,x.total,o.modifiers[i]||{}),y=o.pendingAttack.side,b=h==="attack"||(h==null?void 0:h.goal),v=y==="p1"?"p2":"p1",w=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(J=>({name:J.name,note:we(J,J._line||"ATT"),portrait:ze(J),job:J.job})),E=[...o.log||[]];E.push({type:"duel",isGoal:b,homeScored:b&&y===i,text:b?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${x.total})`,homePlayers:I,aiPlayers:u.map(J=>({name:J.name,note:we(J,J._line||"DEF"),portrait:ze(J),job:J.job})),homeTotal:o.pendingAttack.total,aiTotal:x.total});const A=b?(o[y+"Score"]||0)+1:o[y+"Score"]||0,C={...o,[i+"Team"]:T,[y+"Score"]:A},N=Ae(C),W=N?"finished":v+"-attack",le=async()=>{await R({[i+"Team"]:T,[r+"Team"]:o[r+"Team"],[y+"Score"]:A,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:W,attacker:v,round:w,log:E}),(W==="finished"||N)&&await Ne({...o,[y+"Score"]:A})};if(b){const J=y===i,H=J?A:o[i+"Score"]||0,V=J?o[r+"Score"]||0:A;F.add(w),he(I,H,V,J,le)}else await le()}function ke(T){return["MIL","ATT"].some(u=>(T[u]||[]).some(x=>!x.used))}function $e(T){return["GK","DEF","MIL","ATT"].some(u=>(T[u]||[]).some(x=>!x.used))}function _e(T){return $e(T)&&!ke(T)}function Ee(T){const u=o[T+"Team"],x=o[(T==="p1"?"p2":"p1")+"Team"];return!!(ke(u)||!$e(x)&&_e(u))}function Ae(T){const u=["MIL","ATT"].some(E=>(T.p1Team[E]||[]).some(A=>!A.used)),x=["MIL","ATT"].some(E=>(T.p2Team[E]||[]).some(A=>!A.used)),h=$e(T.p1Team),y=$e(T.p2Team);return!u&&!(!y&&h)&&(!x&&!(!h&&y))}function qe(T){const u=T.p1Score||0,x=T.p2Score||0;return u===x?null:u>x?g.home_id:g.away_id}async function Ne(T){try{await k.from("matches").update({status:"finished",winner_id:qe(T),home_score:T.p1Score||0,away_score:T.p2Score||0}).eq("id",n)}catch(u){console.error("[PvP] finishMatch:",u)}}function He(){var y;const T=o[i+"Score"],u=o[r+"Score"],x=T>u,h=T===u;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${T} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{k.removeChannel(j)}catch{}Oe(e),l("home")})}D()}const yn="2026.06.28-2252";async function bi(e,{state:t,navigate:n,toast:a}){var s,d;const p=t.profile;p&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),n(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>n("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){wn(n);return}if(c==="match-random"){n("match",{matchMode:"random"});return}if(c==="match-friend"){n("friends");return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()}),qi(t,a),vn(t,a,n),Fi(t,a,n))}async function Fi(e,t,n){const a=document.getElementById("ongoing-match-banner");if(!a)return;const p=e.profile.id,{data:s}=await k.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${p},away_id.eq.${p}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){a.innerHTML="";return}const d=s.map(c=>c.home_id===p?c.away_id:c.home_id).filter(Boolean);let l={};if(d.length){const{data:c}=await k.from("users").select("id, pseudo, club_name").in("id",d);(c||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}a.innerHTML=s.map(c=>{const i=c.home_id===p?c.away_id:c.home_id,r=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${c.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${c.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${c.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",()=>{const i=document.getElementById("page-content")||document.getElementById("app");xn(i,{state:e,navigate:n,toast:t},c.dataset.resume)})}),a.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{bn(async()=>{await hn(c.dataset.abandon,c.dataset.opp,p),t("Match abandonné (défaite 3-0)","info"),Fi(e,t,n)})})})}async function hn(e,t,n){const{data:a}=await k.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const p=a.home_id===n,s=p?0:3,d=p?3:0,l=a.game_state||{};l.p1Score=s,l.p2Score=d,l.phase="finished",l.forfeit=!0,await k.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:d,game_state:l}).eq("id",e)}function bn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function vn(e,t,n){var l,c,i,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:p}=await k.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){a.innerHTML="";return}const s=((l=p.inviter)==null?void 0:l.club_name)||((c=p.inviter)==null?void 0:c.pseudo)||"?",d=p.inviter_id;a.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{a.innerHTML="",n("match",{matchMode:"friend",friendId:d,friendName:s})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await k.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),a.innerHTML="",t("Invitation refusée","info")})}async function qi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:a,error:p}=await k.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(a!=null&&a.length)){n.innerHTML="";return}const s=a.length,d=a.slice(0,2).map(c=>{var i;return((i=c.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";n.innerHTML=`
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
  `,document.body.appendChild(n);const a=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",a),n.addEventListener("click",p=>{p.target===n&&a()}),n.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{a(),e("match",{matchMode:p.dataset.mode})})})}const Di={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Et={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},jt=["GK","DEF","MIL","ATT"],_n=["Tous","GK","DEF","MIL","ATT"],$n={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},ci={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Gi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Lt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,m;const n=e.player;if(!n)return"";const a=n.job||"ATT",p=Et[a],s=Di[n.rarity]||"#ccc",d=Lt(n,a),l=n.job2?Lt(n,n.job2):null,c=n.job2?Et[n.job2]:null,i=Gi(n),r=ci[n.country_code]||n.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(f=n.clubs)!=null&&f.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=n.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function vi(e){const t=e.job||"ATT",n=Lt(e,t),a=ci[e.country_code]||e.country_code||"";return`
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
  </div>`}async function kn(e,t){const{state:n,navigate:a,toast:p,openModal:s,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(P=>P.card_type==="player"&&P.player),r=(l||[]).filter(P=>P.card_type==="game_changer"),f=(l||[]).filter(P=>P.card_type==="formation"),{data:m}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(m||[]).forEach(P=>{g[P.name]=P});const $=Object.keys(oi),o=Object.keys(Ge),_={};i.forEach(P=>{const O=P.player.id;_[O]=(_[O]||0)+1}),new Set(Object.keys(_).map(P=>String(P)));const z=new Set(f.map(P=>P.formation)),L=new Set(r.map(P=>P.gc_type));let F="player",K="Tous",q="",j=!1;function R(){return[...i].sort((P,O)=>{const S=jt.indexOf(P.player.job),B=jt.indexOf(O.player.job);return S!==B?S-B:(P.player.surname_encoded||"").localeCompare(O.player.surname_encoded||"")})}function ie(){return[...c||[]].sort((P,O)=>{const S=jt.indexOf(P.job),B=jt.indexOf(O.job);return S!==B?S-B:(P.surname_encoded||"").localeCompare(O.surname_encoded||"")})}function ce(){return R().filter(P=>{const O=P.player,S=K==="Tous"||O.job===K,B=!q||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(q);return S&&B})}function ne(){return ie().filter(P=>{const O=K==="Tous"||P.job===K,S=!q||`${P.firstname} ${P.surname_encoded}`.toLowerCase().includes(q);return O&&S})}e.innerHTML=`
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
  </div>`;function M(){const P=document.getElementById("col-filters");P&&(F==="player"?(P.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${q}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${_n.map(O=>`
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
        </div>`,document.getElementById("col-search").addEventListener("input",O=>{q=O.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(O=>{O.addEventListener("click",()=>{K=O.dataset.job,M(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})):(P.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,M(),Y()})))}function Y(){const P=document.getElementById("col-grid");P&&(F==="player"?he(P):F==="formation"?xe(P):ge(P))}function ee(P,O,S,B,U){U=U||"#7a28b8";const oe=document.getElementById("col-grid"),te=document.getElementById("col-big");if(!oe||!te)return;var Te=0;function ke(){te.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+O(P[Te])+"</div>";var $e=te.querySelector("[data-card-id],[data-form-id],[data-gc-id]");$e&&$e.addEventListener("click",function(){B(P[Te])}),requestAnimationFrame(function(){var _e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!_e||!te)){var Ee=te.clientHeight-8,Ae=te.clientWidth-24,qe=_e.offsetHeight,Ne=_e.offsetWidth;if(qe>0&&Ne>0&&Ee>40){var He=Math.min(Ee/qe,Ae/Ne,1);_e.style.transform="scale("+He.toFixed(3)+")",_e.style.transformOrigin="top center"}}}),oe.innerHTML=P.map(function(_e,Ee){return'<div class="col-mini-item" data-idx="'+Ee+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(Ee===Te?U:"transparent")+';transition:border-color .15s;overflow:hidden">'+S(_e,Ee===Te)+"</div>"}).join(""),oe.querySelectorAll(".col-mini-item").forEach(function(_e){_e.addEventListener("click",function(){Te=Number(_e.dataset.idx),ke(),_e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function D(P){var O=.54,S=Math.round(140*O),B=Math.round(310*O),U;if(!P||P._fake){var oe=P?P.player:null;if(!oe)return"";U=vi(oe)}else U=Vt(P,"");return'<div style="width:'+S+"px;height:"+B+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+O+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+U+"</div></div>"}function Q(P,O,S){O=O||100,S=S||140;var B=zt[P]||{},U={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},oe=Math.max(3,Math.round(O*.06)),te=Object.entries(B).map(function(ke){var $e=ke[0],_e=ke[1],Ee=$e.replace(/\d+$/,""),Ae=U[Ee]||"#888",qe=Math.round(_e.x*O),Ne=Math.round(_e.y*S);return'<circle cx="'+qe+'" cy="'+Ne+'" r="'+oe+'" fill="'+Ae+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Te=Math.max(1,Math.round(O/50));return'<svg viewBox="0 0 '+O+" "+S+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+O+'" height="'+S+'" fill="#1A6B3C"/><rect x="'+Math.round(O*.2)+'" y="'+Math.round(S*.02)+'" width="'+Math.round(O*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Te+'"/><line x1="0" y1="'+Math.round(S*.5)+'" x2="'+O+'" y2="'+Math.round(S*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Te+'"/><ellipse cx="'+Math.round(O*.5)+'" cy="'+Math.round(S*.5)+'" rx="'+Math.round(O*.18)+'" ry="'+Math.round(S*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Te+'"/><rect x="'+Math.round(O*.2)+'" y="'+Math.round(S*.82)+'" width="'+Math.round(O*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Te+'"/>'+te+"</svg>"}function ae(P,O,S){var B=S>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+S+"</div>":"",U=O?'data-form-id="'+O.id+'"':"",oe=P.length>7?14:P.length>5?16:19,te=!!O;return"<div "+U+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(te?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(te?"":"filter:grayscale(1);opacity:0.5")+'">'+B+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(te?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+oe+"px;font-weight:900;color:"+(te?"#1A6B3C":"#aaa")+';line-height:1">'+P+'</div></div><div style="flex:1;overflow:hidden;background:'+(te?"#1A6B3C":"#ccc")+'">'+Q(P,140,220)+"</div></div>"}function pe(P,O){var S=.54,B=Math.round(140*S),U=Math.round(305*S),oe=Math.round(U*.22),te=U-oe,Te=P.length>7?5:7,ke=Q(P,B,te),$e=O?"1.5px solid #2a7a40":"1px solid #ddd",_e=O?"":"filter:grayscale(1);opacity:0.45;",Ee=O?"#1A6B3C":"#bbb",Ae="#fff";return'<div style="width:'+B+"px;height:"+U+"px;border-radius:6px;border:"+$e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+_e+'"><div style="height:'+oe+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Te+"px;font-weight:900;color:"+Ae+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(B-4)+'px">'+P+'</span></div><div style="height:'+te+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div>"}function he(P){if(j){const O=ne();if(!O.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const S=O.map(B=>i.find(U=>U.player.id===B.id)||{_fake:!0,player:B,id:"fake-"+B.id});ee(S,B=>B._fake?vi(B.player):Vt(B,""),B=>B._fake?D({player:B.player,id:"x",_fake:!0}):D(B),B=>{B._fake||wi(B,i,_,t)},"#1A6B3C")}else{const O=ce();if(!O.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const S={},B=[];O.forEach(U=>{S[U.player.id]||(S[U.player.id]=!0,B.push(U))}),ee(B,U=>{const oe=_[U.player.id]||1,te=oe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${oe}</div>`:"",ke=i.filter($e=>$e.player.id===U.player.id&&$e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(U,te+ke)},U=>D(U),U=>wi(U,i,_,t),"#1A6B3C")}}function xe(P){const O=j?$:[...z];if(!O.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const S=O.map(B=>({formation:B,card:f.find(U=>U.formation===B)||null,owned:z.has(B)}));ee(S,({formation:B,card:U,owned:oe})=>ae(B,oe?U:null,oe?f.filter(te=>te.formation===B).length:0),({formation:B,owned:U})=>pe(B,U),({card:B,owned:U})=>{U&&B&&An(B,f,t,s)},"#1A6B3C")}function ge(P){const O=Object.keys(g),S=j?O.length?O:o:[...L];if(!S.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const B=S.map(U=>({type:U,gc:Ge[U]||{icon:"⚡",desc:""},def:g[U]||null,owned:L.has(U),card:r.find(oe=>oe.gc_type===U)||null}));ee(B,({type:U,gc:oe,def:te,owned:Te,card:ke})=>{const $e=Te?r.filter(x=>x.gc_type===U).length:0,_e=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",Ee=(te==null?void 0:te.gc_type)==="ultra_game_changer",Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#b06ce0",light_blue:"#00d4ef"},Ne=Ae[te==null?void 0:te.color]||Ae.purple,He=qe[te==null?void 0:te.color]||qe.purple,T=(te==null?void 0:te.effect)||oe.desc||"",u=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return Te&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${U}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${He};background:${Ne};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${He}66;cursor:pointer">
          ${_e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${U.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${U}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${u?`<img src="${u}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${oe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${T.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${U}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${oe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:U,gc:oe,def:te,owned:Te})=>Te?(()=>{const ke=Math.round(75.60000000000001),$e=Math.round(310*.54),_e=Math.round($e*.65),Ee=Math.round($e*.18),Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#9b59b6",light_blue:"#00bcd4"},Ne=Ae[te==null?void 0:te.color]||Ae.purple,He=qe[te==null?void 0:te.color]||qe.purple,T=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null;return`<div style="width:${ke}px;height:${$e}px;border-radius:8px;background:${Ne};border:1px solid ${He};display:flex;flex-direction:column;overflow:hidden"><div style="height:${Ee}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ke-6}px">${U}</span></div><div style="height:${_e}px;display:flex;align-items:center;justify-content:center">${T?`<img src="${T}" style="max-width:${ke-8}px;max-height:${_e-4}px;object-fit:contain">`:`<span style="font-size:24px">${oe.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((te==null?void 0:te.effect)||oe.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ke=Math.round(75.60000000000001),$e=Math.round(310*.54);return`<div style="width:${ke}px;height:${$e}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${oe.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${U}</span></div>`})(),({type:U,owned:oe,def:te})=>{oe&&En(U,te,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(P=>{P.addEventListener("click",()=>{F=P.dataset.tab,K="Tous",q="",j=!1,e.querySelectorAll(".col-tab-btn").forEach(O=>{const S=O.dataset.tab===F;O.style.borderBottomColor=S?"var(--green)":"transparent",O.style.color=S?"var(--green)":"var(--gray-600)"}),M(),Y()})}),M(),Y()}function En(e,t,n){const a=Ge[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bt=1e3;function An(e,t,n,a){var $,o,_;const{state:p,toast:s,closeModal:d,navigate:l,refreshProfile:c}=n,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const z=zt[i]||{},L=oi[i]||[],F=290,K=360,q=20;function j(ie){const ce=z[ie];return ce?{x:ce.x*F,y:ce.y*K}:null}let R=`<svg width="${F}" height="${K}" viewBox="0 0 ${F} ${K}" xmlns="http://www.w3.org/2000/svg">`;for(const[ie,ce]of L){const ne=j(ie),M=j(ce);!ne||!M||(R+=`<line x1="${ne.x}" y1="${ne.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ie of Object.keys(z)){const ce=j(ie);if(!ce)continue;const ne=ie.replace(/\d+/,""),M=r[ne]||"#555";R+=`<circle cx="${ce.x}" cy="${ce.y}" r="${q}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,R+=`<text x="${ce.x}" y="${ce.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return R+="</svg>",R}const m=t.filter(z=>z.formation===i);m.length;const g=!e.is_for_sale;a(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),($=document.getElementById("direct-sell-form-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${Bt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const z=m.find(F=>!F.is_for_sale)||m[0];if(!z){s("Aucune carte à vendre","error");return}const{error:L}=await k.from("cards").delete().eq("id",z.id);if(L){s(L.message,"error");return}await k.from("users").update({credits:(p.profile.credits||0)+Bt}).eq("id",p.profile.id),await c(),s(`+${Bt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(o=document.getElementById("market-sell-form-btn"))==null||o.addEventListener("click",async()=>{const z=parseInt(document.getElementById("sell-price-form").value);if(!z||z<1){s("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:z}).eq("id",e.id),await k.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:z}),s("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(_=document.getElementById("cancel-sell-form-btn"))==null||_.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),d(),l("collection")})}async function wi(e,t,n,a){var Q,ae,pe,he,xe,ge,P,O;const{state:p,toast:s,openModal:d,closeModal:l,navigate:c,refreshProfile:i}=a,r=e.player,f=t.filter(S=>S.player.id===r.id),m=f.length,g=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0),$=r.rarity||"normal",{data:o}=await k.from("sell_price_configs").select("*").eq("rarity",$).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1),_=((Q=o==null?void 0:o[0])==null?void 0:Q.price)??$n[$]??1e3,z=r.rarity!=="legende",L=Gi(r),F=Lt(r,r.job),K=r.job2?Lt(r,r.job2):null,q=Et[r.job]||"#1A6B3C",j=r.job2?Et[r.job2]:null,R=Di[r.rarity]||"#ccc",ie=ci[r.country_code]||r.country_code||"",ce=f.map(S=>S.id);let ne={};if(ce.length){const{data:S}=await k.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ce).order("transferred_at",{ascending:!0});(S||[]).forEach(B=>{ne[B.card_id]||(ne[B.card_id]=[]),ne[B.card_id].push(B)})}const M=S=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${S.club_name} <span style="color:var(--gray-600)">(${S.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${S.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${S.source==="booster"?"Booster":S.price?S.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,Y=ce.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${m>1?`(${m})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((S,B)=>{const U=ne[S.id]||[],oe=S.is_for_sale,te=U.length?U[U.length-1]:null;return`
            <div data-card-id="${S.id}" data-card-idx="${B}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${oe?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${S.id}" ${oe?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${B+1}${oe?" 🏷️ En vente":""}</div>
                  ${te?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${te.club_name} · ${te.source==="booster"?"Booster":te.price?te.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${B}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${U.length?`${U.length} club${U.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${B}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${U.map(M).join("")}
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${_.toLocaleString("fr")} cr.</div>
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${R};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${q}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${q}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${F}</text>
            </svg>
            ${K!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${j}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${K}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${ie}</div>
            ${(ae=r.clubs)!=null&&ae.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((pe=r.clubs)==null?void 0:pe.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${R}">${r.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${r.job}${r.job2?" / "+r.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([S,B])=>{const U=Et[S],oe=Number(B)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${U}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${oe}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${S}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${Y}

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
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(he=document.getElementById("close-detail"))==null||he.addEventListener("click",l);let ee=new Set;const D=()=>{const S=ee.size,B=document.getElementById("sell-action-panel");B&&(B.style.display=S>0?"block":"none",document.getElementById("sell-selected-count").textContent=S,document.getElementById("sell-direct-total").textContent=(S*_).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(S=>{S.addEventListener("change",()=>{const B=S.dataset.id;S.checked?ee.add(B):ee.delete(B);const U=S.closest(".exemplaire-row");U&&(U.style.borderColor=S.checked?"#1A6B3C":"#eee"),D()})}),document.querySelectorAll(".exemplaire-row").forEach(S=>{S.addEventListener("click",B=>{if(B.target.closest("button")||B.target.tagName==="INPUT")return;const U=S.querySelector(".expl-check");U&&!U.disabled&&(U.checked=!U.checked,U.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(S=>{S.addEventListener("click",B=>{B.stopPropagation();const U=document.querySelector(`.expl-hist[data-hist="${S.dataset.idx}"]`);U&&(U.style.display=U.style.display==="none"?"flex":"none")})}),(xe=document.getElementById("direct-sell-btn"))==null||xe.addEventListener("click",async()=>{const S=[...ee];if(!S.length)return;const B=S.length*_;if(!confirm(`Vendre ${S.length} carte${S.length>1?"s":""} ${r.surname_encoded} pour ${B.toLocaleString("fr")} crédits ? Action irréversible.`))return;const{error:U}=await k.from("cards").delete().in("id",S);if(U){s(U.message,"error");return}await k.from("users").update({credits:(p.profile.credits||0)+B}).eq("id",p.profile.id),await i();const oe=document.getElementById("nav-credits");oe&&(oe.textContent=`💰 ${(p.profile.credits||0).toLocaleString("fr")}`),s(`+${B.toLocaleString("fr")} crédits ! ${S.length} carte${S.length>1?"s":""} vendue${S.length>1?"s":""}.`,"success"),l(),c("collection")}),(ge=document.getElementById("market-sell-btn"))==null||ge.addEventListener("click",async()=>{var oe;const S=[...ee];if(!S.length){s("Sélectionne au moins un exemplaire","warning");return}const B=parseInt((oe=document.getElementById("sell-market-price"))==null?void 0:oe.value);if(!B||B<1){s("Prix invalide","error");return}const{error:U}=await k.from("cards").update({is_for_sale:!0,sale_price:B}).in("id",S);if(U){s(U.message,"error");return}s(`${S.length} carte${S.length>1?"s":""} mise${S.length>1?"s":""} en vente à ${B.toLocaleString("fr")} cr. chacune !`,"success"),l(),c("collection")}),(P=document.getElementById("market-sell-btn"))==null||P.addEventListener("click",async()=>{const S=parseInt(document.getElementById("sell-price").value);if(!S||S<1){s("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:S}).eq("id",e.id),await k.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:S}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(O=document.getElementById("cancel-sell-btn"))==null||O.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},at={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ut(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Ni(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ri(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Tn(e,t=44,n=58){var g;const a=e?Ut(e):null,p=e?Ri(e):null,s=Ni(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",l=at[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(n*.19),f=Math.round(n*.25),m=n-r-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qt(e,t){const{state:n,navigate:a,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!d)return;const{data:l,error:c}=await k.from("decks").insert({owner_id:n.profile.id,name:d}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),_i(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>_i(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",d.dataset.name);if(!l||l===d.dataset.name)return;const{error:c}=await k.from("decks").update({name:l}).eq("id",d.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Qt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:l}=await k.from("decks").delete().eq("id",d.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Qt(e,t)})})}async function _i(e,t,n){const{state:a,toast:p}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await k.from("decks").select("*").eq("id",e).single(),{data:d}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(d||[]).filter(g=>g.card_type==="player"&&g.player),c=(d||[]).filter(g=>g.card_type==="formation"),i=c.map(g=>g.formation).filter(Boolean),{data:r}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:i};(r||[]).forEach(g=>{g.is_starter?m.slots[g.position]=g.card_id:m.subs.includes(g.card_id)||m.subs.push(g.card_id)}),gt(t,m,n)}function gt(e,t,n){var c;const{navigate:a}=n;Gt[t.formation];const p=$i(t.formation),s=p.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Gt),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
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
            ${Tn(r,44,58)}
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
  </div>`,In(e,t,p,n),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=$i(t.formation),f={};r.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,gt(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Mn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),gt(e,t,n)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{zn(t,e,n)})}function In(e,t,n,a){const p=e.querySelector("#deck-field");if(!p)return;const s=zt[t.formation]||{},d=Ii(t.formation)||[],l={};for(const z of n){const L=t.slots[z],F=L?t.playerCards.find(K=>K.id===L):null;l[z]=F?F.player:null}const c=300,i=300,r=48,f=64,m=13,g=16,$=38;function o(z){const L=s[z];return L?{x:L.x*c,y:L.y*i}:null}let _="";for(const[z,L]of d){const F=o(z),K=o(L);if(!F||!K)continue;const q=l[z]?{...l[z],club_id:l[z].club_id,country_code:l[z].country_code,rarity:l[z].rarity}:null,j=l[L]?{...l[L],club_id:l[L].club_id,country_code:l[L].country_code,rarity:l[L].rarity}:null,R=Ze(q,j);R==="#ff3333"||R==="#cc2222"?_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${K.x.toFixed(1)}" y2="${K.y.toFixed(1)}" stroke="${R}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${K.x.toFixed(1)}" y2="${K.y.toFixed(1)}" stroke="${R}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${K.x.toFixed(1)}" y2="${K.y.toFixed(1)}" stroke="${R}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const z of n){const L=o(z);if(!L)continue;const F=l[z],K=z.replace(/\d+/,""),q=at[K]||"#555",j=(L.x-r/2).toFixed(1),R=(L.y-f/2).toFixed(1),ie={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[F==null?void 0:F.rarity]||"#aaa";if(F){const ce=Ut(F),ne=Ri(F),M=Ni(F.country_code),Y=Number(K==="GK"?F.note_g:K==="DEF"?F.note_d:K==="MIL"?F.note_m:F.note_a)||0,ee=f-m-g;_+=`<defs><clipPath id="dcp-${z}"><rect x="${j}" y="${(L.y-f/2+m).toFixed(1)}" width="${r}" height="${ee}"/></clipPath></defs>`,_+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="${q}"/>`,ce&&(_+=`<image href="${ce}" x="${j}" y="${(L.y-f/2+m).toFixed(1)}" width="${r}" height="${ee}" clip-path="url(#dcp-${z})" preserveAspectRatio="xMidYMin slice"/>`),_+=`<rect x="${j}" y="${R}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,_+=`<text x="${L.x.toFixed(1)}" y="${(L.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(F.surname_encoded||"").slice(0,9)}</text>`;const D=(L.y+f/2-g).toFixed(1);_+=`<rect x="${j}" y="${D}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,M&&(_+=`<image href="${M}" x="${(L.x-21).toFixed(1)}" y="${(L.y+f/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),_+=`<text x="${L.x.toFixed(1)}" y="${(L.y+f/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,ne&&(_+=`<image href="${ne}" x="${(L.x+r/2-14).toFixed(1)}" y="${(L.y+f/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),_+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="none" stroke="${ie}" stroke-width="2"/>`}else _+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,_+=`<text x="${L.x.toFixed(1)}" y="${L.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,_+=`<text x="${L.x.toFixed(1)}" y="${(L.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${K}</text>`;_+=`<rect x="${j}" y="${R}" width="${r}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${z}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-$} ${-$} ${c+$*2} ${i+$*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${_}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>Ln(z.dataset.pos,t,e,a))})}function Ln(e,t,n,a){var m,g,$;const{openModal:p,closeModal:s}=a,d=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(o=>o.id===l):null;(m=c==null?void 0:c.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,_])=>{var L;if(o===e||!_)return;const z=t.playerCards.find(F=>F.id===_);(L=z==null?void 0:z.player)!=null&&L.id&&i.add(z.player.id)}),t.subs.forEach(o=>{var z;const _=t.playerCards.find(L=>L.id===o);(z=_==null?void 0:_.player)!=null&&z.id&&i.add(_.player.id)});const r=new Set,f=t.playerCards.filter(o=>{const _=o.player;return!(_.job===d||_.job2===d)||i.has(_.id)||r.has(_.id)?!1:(r.add(_.id),!0)});f.sort((o,_)=>{const z=d==="GK"?o.player.note_g:d==="DEF"?o.player.note_d:d==="MIL"?o.player.note_m:o.player.note_a;return(d==="GK"?_.player.note_g:d==="DEF"?_.player.note_d:d==="MIL"?_.player.note_m:_.player.note_a)-z}),p(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var K,q;const _=o.player,z=d==="GK"?_.note_g:d==="DEF"?_.note_d:d==="MIL"?_.note_m:_.note_a,L=Ut(_),F={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[_.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${at[d]}">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${at[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${_.firstname} ${_.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${_.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${_.country_code}">
              ${(K=_.clubs)!=null&&K.logo_url?`<img src="${_.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((q=_.clubs)==null?void 0:q.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${_.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${at[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${F};flex-shrink:0">
            ${z}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",s),($=document.getElementById("remove-player"))==null||$.addEventListener("click",()=>{delete t.slots[e],s(),gt(n,t,a)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,s(),gt(n,t,a)})})}function zn(e,t,n){var c;const{openModal:a,closeModal:p}=n,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&s.add(r.player.id)}),e.subs.forEach(i=>{var f;const r=e.playerCards.find(m=>m.id===i);(f=r==null?void 0:r.player)!=null&&f.id&&s.add(r.player.id)});const d=new Set,l=e.playerCards.filter(i=>{var r,f,m;return s.has((r=i.player)==null?void 0:r.id)||d.has((f=i.player)==null?void 0:f.id)?!1:(d.add((m=i.player)==null?void 0:m.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),gt(t,e,n)})})}async function Mn(e,t){const{state:n,toast:a,navigate:p}=t,s=e.formationCards.find(c=>c.formation===e.formation),d=(s==null?void 0:s.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,i)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:c}=await k.from("deck_cards").insert(l);if(c){a(c.message,"error");return}}a("Deck enregistré ✅","success"),p("decks")}function $i(e){const t=Gt[e]||Gt["4-4-2"],n=["GK1"];for(let a=1;a<=t.DEF;a++)n.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)n.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)n.push(`ATT${a}`);return n}async function Pi(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(a=>a.booster_id===n.id)}))}function Sn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,p)=>a+Number(p.percentage),0);let n=Math.random()*t;for(const a of e)if(n-=Number(a.percentage),n<=0)return a;return e[e.length-1]}const Oi=()=>Object.keys(zt),Cn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Zt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function jn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const ki={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Bn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Fn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ei(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function qn(e){var r,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",a=ki[n],p=Bn[t.rarity]||"#ccc",s=Ei(t,n),d=t.job2?Ei(t,t.job2):null,l=t.job2?ki[t.job2]:null,c=jn(t),i=Fn[t.country_code]||t.country_code||"";return`
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
        ${c?`<img src="${c}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Hi(e){var p;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const n=((p=Object.entries(t).sort((s,d)=>d[1]-s[1])[0])==null?void 0:p[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Dn(e,{state:t,navigate:n,toast:a}){var d;const p=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Pi()).map(Hi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Cn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(i=>i.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Gn(c,{state:t,toast:a,navigate:n,container:e})}catch(i){a(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const i=s.find(r=>r.id===l.dataset.boosterId);On(i)})})}async function Gn(e,{state:t,toast:n,navigate:a,container:p}){var r;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await Kn()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((s||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((s||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await ei(t.profile,e);else{const f=e.type||"player";f==="player"?c=await Ui(t.profile,e.cardCount,e.cost):f==="game_changer"?c=await Ki(t.profile,e.cardCount,e.cost):f==="formation"?c=await Vi(t.profile,e.cost):c=await ei(t.profile,e)}c.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=d.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await k.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Yi(c,e,a)}function Nn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Rn(e,t){let n;switch(t){case"legende":n=e.filter(a=>a.rarity==="legende"),n.length||(n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),n.length||(n=e.filter(a=>tt(a)>=6));break;case"special":n=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),n.length||(n=e.filter(a=>tt(a)>=6));break;case"normal_high":n=e.filter(a=>a.rarity==="normal"&&tt(a)>=6),n.length||(n=e.filter(a=>tt(a)>=6));break;default:n=e.filter(a=>a.rarity==="normal"&&tt(a)>=1&&tt(a)<=5),n.length||(n=e.filter(a=>a.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ei(e,t){if(t.cost>0){const{error:l}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await k.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),s=new Set,d=[];for(let l=0;l<(t.cardCount||5);l++){const c=Sn(t.rates);if(c){if(c.card_type==="player"){const i=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,r=c.rarity?i(c.rarity):null;let f=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(f=f.eq("rarity",r));const{data:m}=await f;let g=m||[];if((c.note_min||c.note_max)&&(g=g.filter(L=>{const F=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!c.note_min||F>=c.note_min)&&(!c.note_max||F<=c.note_max)})),g.length||(c.note_min||c.note_max?(g=m||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):g=m||[]),!g.length)continue;let $=g.filter(L=>!s.has(L.id));$.length||($=g);const o=$[Math.floor(Math.random()*$.length)];s.add(o.id);const _=a.has(o.id),{data:z}=await k.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();z&&(d.push({...z,player:o,isDuplicate:_}),k.rpc("record_transfer",{p_card_id:z.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:i}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=r[Math.floor(Math.random()*r.length)].name,{data:g}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();g&&d.push(g)}else if(c.card_type==="formation"){const i=Oi(),r=i[Math.floor(Math.random()*i.length)],f=p.has(r),{data:m}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();m!=null&&m[0]&&d.push({...m[0],isDuplicate:f})}}}return d}async function Ui(e,t,n){if(n>0){const{error:i}=await k.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:a}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=a.filter(i=>i.job==="GK"),s=a.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&d?p:i===0?s:a,f=Nn(),m=Rn(r,f);m&&l.push(m)}d&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await k.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(c||[]).forEach((i,r)=>{k.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...c[r],player:i}))}async function Ki(e,t,n){const{error:a}=await k.from("users").update({credits:e.credits-n}).eq("id",e.id);if(a)throw a;const{data:p}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=p!=null&&p.length?p:Object.keys(Zt).map(r=>({name:r,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await k.from("cards").insert(d).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const f=p==null?void 0:p.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:f||null}})}async function Vi(e,t){const{error:n}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:a}=await k.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((a||[]).map(r=>r.formation)),s=Oi(),d=s[Math.floor(Math.random()*s.length)],l=p.has(d),{data:c,error:i}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(c||[]).map(r=>({...r,isDuplicate:l}))}function Yi(e,t,n,a=null){var Y,ee;if(!e||e.length===0){const D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",D.innerHTML=`
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
  `,document.body.appendChild(p);let s=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let c=!1;const i=D=>D.touches&&D.touches[0]?D.touches[0].clientX:D.clientX;function r(D){s||(c=!0,l.style.opacity="1",f(D))}function f(D){if(!c||s)return;const Q=d.getBoundingClientRect(),ae=i(D)-Q.left,pe=Math.max(0,Math.min(1,ae/Q.width));l.style.width=pe*Q.width+"px",pe>=.82&&g()}function m(){s||(c=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function g(){var Q;if(s)return;s=!0,c=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const D=document.getElementById("cut-hint");D&&(D.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}d.addEventListener("pointerdown",r),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),d.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let $=0,o=!1;const _=new Set;function z(D){$=D,document.getElementById("reveal-phase").style.display="flex",L(),F(D,0),ie()}function L(){const D=document.getElementById("card-dots");D&&(D.innerHTML=e.map((Q,ae)=>`<div class="card-dot" data-i="${ae}" style="width:8px;height:8px;border-radius:50%;background:${ae===$?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),D.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>q(parseInt(Q.dataset.i)))))}function F(D,Q){var B;const ae=e[D],pe=document.getElementById("card-counter"),he=document.getElementById("card-track");pe&&(pe.textContent=`Carte ${D+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=D===e.length-1?"flex":"none");const ge=ae.card_type==="player"&&((B=ae.player)==null?void 0:B.rarity)==="legende",P=!_.has(D);_.add(D);let O=0;if(ae.card_type==="player"&&ae.player){const U=ae.player,oe=U.job||"ATT";O=Number(oe==="GK"?U.note_g:oe==="DEF"?U.note_d:oe==="MIL"?U.note_m:U.note_a)||0}const S=U=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ge?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Pn(ae)}</div>
          ${ae.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");Q!==0?(oe.style.transition="none",oe.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),U||ge?ne():M(),L()};P&&O>6&&ae.card_type==="player"&&ae.player?K(ae,()=>S(!0)):S(!1)}function K(D,Q){var O;o=!0;const ae=D.player,pe=`https://flagsapi.com/${ae.country_code}/flat/64.png`,he=(O=ae.clubs)==null?void 0:O.logo_url,xe=document.getElementById("walkout-overlay"),ge=document.getElementById("walkout-stage");if(!xe||!ge){o=!1,Q();return}xe.style.display="flex";const P=()=>{const S=ge.firstElementChild;S&&(S.classList.remove("wo-in"),S.classList.add("wo-out"))};ge.innerHTML=`<img class="wo-in" src="${pe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(P,2e3),setTimeout(()=>{var S;ge.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((S=ae.clubs)==null?void 0:S.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(P,4450),setTimeout(()=>{xe.style.display="none",ge.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},4900)}function q(D){if(o||D<0||D>=e.length||D===$)return;const Q=D>$?1:-1;$=D,F(D,Q)}function j(){q($+1)}function R(){q($-1)}function ie(){const D=document.getElementById("card-viewport");if(!D||D._swipeBound)return;D._swipeBound=!0;let Q=0,ae=0,pe=0,he=!1;const xe=B=>B.touches?B.touches[0].clientX:B.clientX,ge=B=>B.touches?B.touches[0].clientY:B.clientY,P=B=>{he=!0,Q=xe(B),ae=ge(B),pe=0},O=B=>{if(!he)return;pe=xe(B)-Q;const U=ge(B)-ae;if(Math.abs(pe)<Math.abs(U))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${pe*.6}px) rotate(${pe*.02}deg)`)},S=()=>{if(!he)return;he=!1;const B=document.getElementById("current-card-wrap"),U=55;pe<=-U&&$<e.length-1?j():pe>=U&&$>0?R():B&&(B.style.transition="transform .2s ease",B.style.transform="translateX(0)")};D.addEventListener("pointerdown",P),D.addEventListener("pointermove",O),D.addEventListener("pointerup",S),D.addEventListener("pointercancel",S),D.addEventListener("touchstart",P,{passive:!0}),D.addEventListener("touchmove",O,{passive:!0}),D.addEventListener("touchend",S),D.addEventListener("click",B=>{if(Math.abs(pe)>8)return;const U=D.getBoundingClientRect();B.clientX-U.left>U.width/2?j():R()})}let ce=null;function ne(){const D=document.getElementById("fireworks-canvas");if(!D)return;D.width=window.innerWidth,D.height=window.innerHeight;const Q=D.getContext("2d"),ae=[];function pe(){const xe=Math.random()*D.width,ge=Math.random()*D.height*.6,P=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],O=P[Math.floor(Math.random()*P.length)];for(let S=0;S<60;S++){const B=Math.PI*2/60*S,U=2+Math.random()*5;ae.push({x:xe,y:ge,vx:Math.cos(B)*U,vy:Math.sin(B)*U,alpha:1,color:O,size:2+Math.random()*3})}}pe(),ce=setInterval(pe,600);function he(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,D.width,D.height);for(let xe=ae.length-1;xe>=0;xe--){const ge=ae[xe];if(ge.x+=ge.vx,ge.y+=ge.vy+.08,ge.vy*=.98,ge.alpha-=.018,ge.alpha<=0){ae.splice(xe,1);continue}Q.globalAlpha=ge.alpha,Q.fillStyle=ge.color,Q.beginPath(),Q.arc(ge.x,ge.y,ge.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(ce!==null||ae.length>0)&&requestAnimationFrame(he)}}he()}function M(){ce!==null&&(clearInterval(ce),ce=null);const D=document.getElementById("fireworks-canvas");D&&D.getContext("2d").clearRect(0,0,D.width,D.height)}if(a){const D=document.getElementById("reveal-btns");D&&(D.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ee=document.getElementById("reveal-next"))==null||ee.addEventListener("click",()=>{M(),p.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{M(),p.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{M(),p.remove(),n("boosters")})}function Pn(e){var t,n;if(e.card_type==="player"&&e.player)return qn(e);if(e.card_type==="game_changer"){const a=e._gcDef,p=(a==null?void 0:a.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[a==null?void 0:a.color]||s.purple,c=d[a==null?void 0:a.color]||d.purple,i=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=Zt[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,m=((n=Zt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function On(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>a.remove());return}Hn()}function Hn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{n--;const p=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");p&&(p.textContent=n),s&&(s.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(a),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Vn(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(pi());window.propeller.push({zone_id:Wi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Yn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(pi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Wi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function Wn(e,{state:t,navigate:n,toast:a,refreshProfile:p}){var m,g;const{data:s}=await k.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let d=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await k.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Pi()).find(_=>(_.name||"").toLowerCase().includes("new player"));o&&(l=Hi(o))}catch($){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',$)}const c=d.length;let i=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await k.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function f(){var L;if(i>=c||!d.length){await k.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const $=d[0],{data:o}=await k.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let _=[];try{if($.type==="formation")_=await Vi(t.profile,0);else if($.type==="game_changer")_=await Ki(t.profile,$.count||3,0);else if(l&&((L=l.rates)!=null&&L.length)){const F={...l,cost:0,cardCount:$.count||l.cardCount||5};_=await ei(t.profile,F),$.guaranteeGK&&!t.profile.first_booster_opened&&(_.some(q=>q.player&&q.player.job==="GK")||await Xn(t.profile,_),await k.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else _=await Ui(t.profile,$.count||5,0)}catch(F){a(F.message||"Erreur ouverture booster","error");return}d.shift(),i++,await r();const z=$.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:$.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${c})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Yi(_,z,n,()=>{f()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>f())}async function Xn(e,t){try{const{data:n}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const a=n[Math.floor(Math.random()*n.length)],p=t.findIndex(d=>d.player);if(p===-1)return;const s=t[p];await k.from("cards").update({player_id:a.id}).eq("id",s.id),t[p]={...s,player_id:a.id,player:a}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}async function Jn(e,t){const{state:n}=t,p=(n.params||{}).matchMode||"vs_ai_easy",s=p.replace("vs_ai_",""),d=p;await li(e,t,p,async({deckId:l,formation:c,starters:i,subsRaw:r,gcCardsEnriched:f,gcDefs:m})=>{try{const g=ft(i,c),$=await Qn(c,s),o=async _=>{try{const{data:z,error:L}=await k.from("matches").insert({home_id:n.profile.id,away_id:null,mode:d,home_deck_id:l,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),rt(e,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>t.navigate("home"));return}const F={gcDefs:m||[],matchId:z==null?void 0:z.id,mode:d,difficulty:s,formation:c,homeTeam:g,aiTeam:$,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:_,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};eo(e,F,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),rt(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}di(e,f,o)}catch(g){console.error("[MatchIA] Exception setup:",g),rt(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function Qn(e,t){var d,l;const{data:n}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return Zn(e);const a=pt[e]||pt["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},s=[...n];for(const c of["GK","DEF","MIL","ATT"]){const i=s.filter($=>$.job===c),r=s.filter($=>$.job!==c),f=[...i,...r],m=[];for(let $=0;$<a[c];$++){const o=f[$]||s[$];o&&m.push({cardId:"ai-"+o.id+"-"+$,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((d=o.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const g=ot(m.length);m.forEach(($,o)=>{$._col=g[o]}),p[c]=m}return p}function Zn(e){const t=pt[e]||pt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let c=0;c<t[s];c++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:a[p%a.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),p++}const l=ot(d.length);d.forEach((c,i)=>{c._col=l[i]}),n[s]=d}return n}function eo(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>to(e,t,n),5e3)}function to(e,t,n){const a=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function s(o){return o.reduce((_,z)=>_+we(z,"MIL"),0)}function d(o){let _=0;for(let z=0;z<o.length-1;z++){const L=Ze(o[z],o[z+1]);L==="#00ff88"?_+=2:L==="#FFD700"&&(_+=1)}return _}const l=s(a)+d(a),c=s(p)+d(p),i=l>=c;function r(o,_,z,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${_}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((F,K)=>{const q=K<o.length-1?Ze(F,o[K+1]):null,j=!q||q==="#ff3333"||q==="#cc2222",R=q==="#00ff88"?"+2":q==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${K}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...F,note:we(F,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${K<o.length-1?`<div class="duel-link duel-link-${L}" data-idx="${K}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${j?"rgba(255,255,255,0.12)":q};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${j?"none":`0 0 8px ${q}`}">
            ${R?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${q}">${R}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${L}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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

    ${r(a,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${r(p,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=(_,z)=>e.querySelectorAll(_).forEach((L,F)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},z+F*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((_,z)=>{setTimeout(()=>{_.style.opacity="1"},z*70)}),900),setTimeout(()=>{const _=e.querySelector("#vs-label");_&&(_.style.opacity="1",_.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",c,800)},1500)};function m(o,_,z){const L=document.getElementById(o);if(!L)return;const F=performance.now(),K=q=>{const j=Math.min(1,(q-F)/z);L.textContent=Math.round(_*(1-Math.pow(1-j,3))),j<1?requestAnimationFrame(K):L.textContent=_};requestAnimationFrame(K)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const g=i?si():null;i&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:p.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const $=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Me(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),_=document.getElementById("score-ai"),z=document.getElementById(i?"duel-row-home":"duel-row-ai"),L=document.getElementById(i?"duel-row-ai":"duel-row-home"),F=i?o:_,K=i?_:o;F&&(F.style.fontSize="80px",F.style.color=i?"#FFD700":"#ff6b6b",F.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),K&&(K.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var j;const q=document.getElementById("duel-shock");if(q){const R=(j=L||z)==null?void 0:j.getBoundingClientRect(),ie=e.querySelector(".match-screen").getBoundingClientRect();R&&(q.style.top=R.top-ie.top+R.height/2+"px"),q.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var j;const q=document.getElementById("duel-finale");q&&(q.innerHTML=`
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
          </button>`,q.style.transition="opacity .45s ease",q.style.opacity="1",q.style.pointerEvents="auto",(j=document.getElementById("start-match-btn"))==null||j.addEventListener("click",$))},600)},700)},2800)}function io(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Me(e,t,n){var F,K,q,j,R,ie,ce,ne;const a=t.selected.map(M=>M.cardId),p=t.usedSubIds||[],s=t.homeSubs.filter(M=>!p.includes(M.cardId)),l=Object.values(t.homeTeam).flat().filter(M=>M.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(M=>(t.aiTeam[M]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(M=>!M.used),r=t.phase==="attack"&&c&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(M=>!M.used).map(M=>M.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",g=t.phase==="defense",$=t.phase==="finished",o=t.gcCards.filter(M=>!t.usedGc.includes(M.id)),_=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((Y.players||[]).map(ee=>({...ee,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((Y.players||[]).map(ee=>({...ee,used:!1})),"#00ff88",Y.total)}
          </div>`}const M=t.log[t.log.length-1];return M?'<div style="padding:2px 4px">'+io(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,Y=(P,O,S)=>{var Ne,He;const B=(t.gcDefs||[]).find(T=>T.name===P.gc_type),U={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[B==null?void 0:B.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[B==null?void 0:B.color]||"#b06ce0",te=(B==null?void 0:B.name)||P.gc_type,Te=(B==null?void 0:B.effect)||((Ne=Ge[P.gc_type])==null?void 0:Ne.desc)||"",ke=B!=null&&B.image_url?`/manager-wars/icons/${B.image_url}`:null,$e=((He=Ge[P.gc_type])==null?void 0:He.icon)||"⚡",_e=Math.round(S*.22),Ee=Math.round(S*.22),Ae=S-_e-Ee,qe=te.length>12?7:9;return`<div class="gc-mini" data-gc-id="${P.id}" data-gc-type="${P.gc_type}"
          style="box-sizing:border-box;width:${O}px;height:${S}px;border-radius:10px;border:2px solid ${oe};background:${U};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${_e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${qe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${te}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ae}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ke?`<img src="${ke}" style="max-width:${O-10}px;max-height:${Ae-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ae*.55)}px">${$e}</span>`}
          </div>
          <div style="height:${Ee}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Te.slice(0,38)}</span>
          </div>
        </div>`},ee=(P,O)=>{var S;return`<div id="boost-card"
          style="box-sizing:border-box;width:${P}px;height:${O}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(O*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(O*.2)}px">⚡</div>
            <div style="font-size:${Math.round(O*.09)}px;color:#000;font-weight:900">+${(S=t.boostCard)==null?void 0:S.value}</div>
          </div>`},D=(P,O)=>O?ee(130,175):Y(P,130,175),Q=(P,O)=>O?ee(68,95):Y(P,68,95),ae=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pe=$?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=m||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(P=>`<div class="sub-btn-col" data-sub-id="${P.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(P,76,100)}</div>`).join("")}
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
            ${o.map(P=>D(P,!1)).join("")}
            ${_?D(null,!0):""}
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
            ${o.map(P=>Q(P,!1)).join("")}
            ${_?Q(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(M=>{var Y,ee,D;if(M.type==="duel"){const Q=M.isGoal,ae=M.homeScored?"#FFD700":Q?"#ff6b6b":"rgba(255,255,255,0.3)",pe=M.homeScored?"⚽ BUT !":Q?"⚽ BUT IA !":(Y=M.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
                <div style="font-size:9px;color:${ae};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${pe}</div>
                ${(ee=M.homePlayers)!=null&&ee.length?`<div style="margin-bottom:3px">${it(M.homePlayers,"rgba(255,255,255,0.7)",M.homeTotal)}</div>`:""}
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
  </div>`;function z(){const M=e.querySelector(".match-screen");if(!M)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=Y+"px",M.style.minHeight=Y+"px",M.style.maxHeight=Y+"px",M.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),D=e.querySelector("#mobile-play-area");ee&&D&&(D.style.paddingBottom=ee.offsetHeight+"px")}if(z(),setTimeout(z,120),setTimeout(z,400),setTimeout(z,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",z),window.visualViewport.addEventListener("scroll",z)),window.addEventListener("resize",z)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const M=e.querySelector(".terrain-wrapper svg");M&&(M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let M=!1,Y=30;const ee=()=>document.getElementById("match-timer"),D=()=>{const Q=ee();if(!Q)return;const ae=String(Math.floor(Y/60)).padStart(2,"0"),pe=String(Y%60).padStart(2,"0");Q.textContent=` ${ae}:${pe}`,Q.style.color=M?"#ff2222":"#ff9500",Q.style.fontWeight="900"};D(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!M)M=!0,Y=15,D();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Q),setTimeout(()=>{Q.remove(),At(e,t,n)},2500)}else D()},1e3)}(F=document.getElementById("match-quit"))==null||F.addEventListener("click",()=>{Oe(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,At(e,t,n))}),(K=document.getElementById("view-ai"))==null||K.addEventListener("click",()=>fo(t,n)),(q=document.getElementById("toggle-history"))==null||q.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(R=document.getElementById("btn-action"))==null||R.addEventListener("click",()=>{t.selected.length!==0&&(m?oo(e,t,n):g&&ro(e,t,n))}),(ie=document.getElementById("btn-results"))==null||ie.addEventListener("click",()=>At(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>no(M,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Yt(e,t,n,null,M.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(M=>{M.addEventListener("click",()=>lo(M.dataset.gcId,M.dataset.gcType,e,t,n))}),(ce=document.getElementById("boost-card"))==null||ce.addEventListener("click",()=>uo(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Yt(e,t,n,M.dataset.subId))}),(ne=document.getElementById("sub-btn-main"))==null||ne.addEventListener("click",()=>Yt(e,t,n))}function no(e,t,n,a){const p=e.dataset.cardId,s=e.dataset.role,d=t.selected.findIndex(l=>l.cardId===p);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===p);l&&t.selected.push({...l,_role:s,_line:s})}Me(n,t,a)}function ui(e,t,n){e.matchId&&k.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function oo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(l=>!l.used)),p=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,c=a&&["GK","DEF"].includes(d._role);return{...l,_line:d._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Pt(p,t.modifiers.home);t.pendingAttack={...s,players:[...p],side:"home"},t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Me(e,t,n),setTimeout(()=>ao(e,t,n),1200)}function ro(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const a=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Ot(a,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!0)});const s=Ht(t.pendingAttack.total,p.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ze(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:ze(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(s.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Me(e,t,n),Nt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ct(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Si(a,"attack",t.difficulty);if(!p.length){qt(e,t,n);return}const s=Pt(p,t.modifiers.ai);t.pendingAttack={...s,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),c=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!c){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ze(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Me(e,t,n),Nt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}t.phase="defense",Me(e,t,n)}function ao(e,t,n){var i,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Si(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(g=>({name:g.name,note:we(g,g._line||g.job),portrait:ze(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Nt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}const d=p.length>0?Ot(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Ht(t.pendingAttack.total,d,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Nt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}else c.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,ct(e,t,n,"ai-attack")}function ct(e,t,n,a){if(t.round++,Xi(t)){At(e,t,n);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){qt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){qt(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",Me(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){qt(e,t,n);return}t.phase="ai-attack",Me(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function Xi(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(p=>!p.used)),n=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(p=>!p.used));return!t&&!n}function qt(e,t,n){Xi(t)?At(e,t,n):(t.phase="attack",Me(e,t,n))}function so(e,t,n){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=ze(e),s=ze(t),d=ut[e.job]||"#555",l=ut[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
  `,document.body.appendChild(a);let r=!1;const f=()=>{r||(r=!0,a.remove(),n())};a.addEventListener("click",f),setTimeout(f,2e3)}function _t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,a=null,p=null){var g,$;if(t.phase!=="attack"){_t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){_t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([o,_])=>(_||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||o}))),d=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!s.length){_t("Aucun joueur utilisé à remplacer");return}if(!d.length){_t("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(o=>o.cardId===p));const c=((g=s[l])==null?void 0:g._line)||(($=s[l])==null?void 0:$.job);let i=a?Math.max(0,d.findIndex(o=>o.cardId===a)):Math.max(0,d.findIndex(o=>o.job===c)),r=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var q,j,R,ie,ce,ne;const o=s[l],_=d[i],z=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(z*1.35),F=M=>`background:rgba(255,255,255,0.12);border:none;color:${M?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${M?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${F(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${_?Ve({..._,used:!1,boost:0},z,L):"<div>—</div>"}</div>
        <button id="in-down" style="${F(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${F(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},z,L):"<div>—</div>"}</div>
        <button id="out-down" style="${F(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(q=f.querySelector("#sub-close"))==null||q.addEventListener("click",()=>f.remove()),(j=f.querySelector("#out-up"))==null||j.addEventListener("click",()=>{l>0&&(l--,m())}),(R=f.querySelector("#out-down"))==null||R.addEventListener("click",()=>{l<s.length-1&&(l++,m())}),(ie=f.querySelector("#in-up"))==null||ie.addEventListener("click",()=>{i>0&&(i--,m())}),(ce=f.querySelector("#in-down"))==null||ce.addEventListener("click",()=>{i<d.length-1&&(i++,m())});const K=(M,Y,ee,D)=>{const Q=f.querySelector("#"+M);if(!Q)return;let ae=0;Q.addEventListener("touchstart",pe=>{ae=pe.touches[0].clientY},{passive:!0}),Q.addEventListener("touchend",pe=>{const he=pe.changedTouches[0].clientY-ae;if(Math.abs(he)<30)return;const xe=Y();he<0&&xe<D-1?(ee(xe+1),m()):he>0&&xe>0&&(ee(xe-1),m())},{passive:!0})};K("in-panel",()=>i,M=>i=M,d.length),K("out-panel",()=>l,M=>l=M,s.length),(ne=f.querySelector("#sub-confirm"))==null||ne.addEventListener("click",M=>{if(M.preventDefault(),M.stopPropagation(),r)return;r=!0;const Y=s[l],ee=d[i];if(!Y||!ee)return;let D=null,Q=-1;for(const[pe,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ge=>ge.cardId===Y.cardId);if(xe!==-1){D=pe,Q=xe;break}}if(Q===-1||!D){_t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const ae={...ee,_line:D,_col:Y._col||0,used:!1,boost:0};t.homeTeam[D].splice(Q,1,ae),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ee.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:we(Y,D),portrait:ze(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:ee.name,firstname:ee.firstname,note:we(ee,D),portrait:ze(ee),job:ee.job,country_code:ee.country_code,rarity:ee.rarity,clubName:ee.clubName,clubLogo:ee.clubLogo},text:`🔄 ${ee.firstname} ${ee.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),so(Y,ee,()=>Me(e,t,n))})}document.body.appendChild(f),m()}function lo(e,t,n,a,p){var $,o;const s=(a.gcDefs||[]).find(_=>_.name===t),d=Ge[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||d.desc,f=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,m=d.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
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
    </div>`,document.body.appendChild(g),($=g.querySelector("#gc-back"))==null||$.addEventListener("click",()=>g.remove()),(o=g.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{g.remove(),po(e,t,n,a,p)})}function Ft(e,t,n,a,p,s){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var i,r;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",$=we(f,m)+(f.boost||0),o=l.find(_=>_.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
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
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,g=e.find(o=>o.cardId===m);if(!g)return;const $=l.findIndex(o=>o.cardId===m);$>-1?l.splice($,1):l.length<t&&l.push(g),c()})}),(r=d.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{d.remove(),s(l)})}c(),document.body.appendChild(d)}const co={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},a,p,s)=>{const d=Object.entries(a.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,c])=>c.filter(i=>!i.used).map(i=>({...i,_line:l})));return d.length?(Ft(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,a,l=>{l.forEach(c=>{const i=(a.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);i&&(i.boost=(i.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Me(p,a,s)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Me(p,a,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:a="ai"},p,s,d)=>{const l=a==="home"?p.homeTeam:p.aiTeam,c=a==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!n.length||n.includes(r)).flatMap(([r,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:r})));return i.length?(Ft(i,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,p,r=>{r.forEach(f=>{const g=((a==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find($=>$.cardId===f.cardId);g&&(g.boost=(g.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${g.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Me(s,p,d)}),!0):(p.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Me(s,p,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},a,p,s)=>{const d=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(f=>!f.used).map(f=>({...f,_line:i})));return c.length?(Ft(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,a,i=>{i.forEach(r=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);m&&(m.used=!0,a.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Me(p,a,s)}),!0):(a.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Me(p,a,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,a,p)=>{const s=Object.entries(n.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,l])=>l.filter(c=>c.used).map(c=>({...c,_line:d})));return s.length?(Ft(s,e,`Choisir ${e} joueur(s) à ressusciter`,a,n,d=>{d.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!1,n.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Me(a,n,p)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Me(a,n,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function po(e,t,n,a,p){a.usedGc.push(e);const s=a.gcDefs||[],d=s.find(c=>c.name===t)||s.find(c=>{var i;return((i=c.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const c=co[d.effect_type];c?c(d.effect_params||{},a,n,p)||(l=!0):(p.toast(`Effet "${d.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(a.homeTeam).flatMap(([i,r])=>(r||[]).filter(f=>f.used).map(f=>({...f,_line:i})));c.length?(c[0].used=!1,a.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(i=>!i.used);if(c.length){const i=c.sort((r,f)=>we(f,"ATT")-we(r,"ATT"))[0];i.used=!0,a.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}k.from("cards").delete().eq("id",e).then(()=>{}),l&&Me(n,a,p)}function uo(e,t,n){const a=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!a.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ut[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${we(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const s=p.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[d]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),Me(e,t,n)})})}function Nt(e,t,n,a,p){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,r)=>`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>p(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function At(e,t,n){var r,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=n,p=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,d=p?"victoire":s?"nul":"defaite",l=pn(t.mode,d);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};p?c.wins=(a.profile.wins||0)+1:s?c.draws=(a.profile.draws||0)+1:c.losses=(a.profile.losses||0)+1,await k.from("users").update(c).eq("id",a.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),Oe(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),Oe(e),n.navigate("match",{matchMode:t.mode})})}function fo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function go(e,t,n,a){var p,s;try{const d=(s=(p=t==null?void 0:t.state)==null?void 0:p.profile)==null?void 0:s.id;try{(k.getChannels?k.getChannels():[]).forEach(c=>{const i=c.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&k.removeChannel(c)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}d&&(await k.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await k.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await li(e,t,"random",({deckId:d,formation:l,starters:c,subsRaw:i,gcCardsEnriched:r,gcDefs:f})=>{const m=g=>mo(e,t,d,l,c,i,g,f||[],n,a);if(!r.length){m([]);return}di(e,r,m)})}async function mo(e,t,n,a,p,s,d=[],l=[],c,i){var ce;const{state:r,navigate:f,toast:m}=t,g=r.profile.id;let $=!1,o=null;Xe(e);try{await k.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await k.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const _=(ne,M,Y,ee)=>{var D;e.innerHTML=`
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
        
        ${!M&&ne?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(D=document.getElementById("lobby-cancel"))==null||D.addEventListener("click",async()=>{$=!0,o&&(k.removeChannel(o),o=null),Y&&await k.from("friend_match_invites").update({status:"declined"}).eq("id",Y),Oe(e),f("home")})},z=async(ne,M)=>{$=!0,o&&(k.removeChannel(o),o=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&xo(e,t,ne,M,d,l)},{data:L}=await k.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${g},invitee_id.eq.${c}),and(inviter_id.eq.${c},invitee_id.eq.${g})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let F,K;if(L&&L.inviter_id===c)K=!1,F=L.id,await k.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",F);else{K=!0;const{data:ne,error:M}=await k.from("friend_match_invites").insert({inviter_id:g,invitee_id:c,friend_id:c,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(M||!ne){m("Erreur création invitation","error"),Oe(e),f("home");return}F=ne.id}if(_(!0,!K,F),!K){const ne={home_id:c,away_id:g,home_deck_id:L.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},M=await k.from("matches").insert(ne).select().single(),Y=M.data;if(!Y){m("Erreur création match: "+(((ce=M.error)==null?void 0:ce.message)||""),"error"),Oe(e),f("home");return}await k.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",F),z(Y.id,!1);return}let q=!1;const j=ne=>{$||q||(ne.status==="matched"&&ne.match_id?(q=!0,clearInterval(R),clearInterval(ie),z(ne.match_id,!0)):ne.status==="declined"?(clearInterval(R),clearInterval(ie),m(`${i} a décliné l'invitation`,"warning"),Oe(e),f("home")):ne.invitee_ready&&_(!0,!0,F))},R=setInterval(()=>{if($){clearInterval(R);return}k.from("matchmaking_queue").delete().eq("user_id",g).then(()=>{},()=>{})},3e3),ie=setInterval(async()=>{if($||q){clearInterval(ie);return}const{data:ne}=await k.from("friend_match_invites").select("*").eq("id",F).maybeSingle();ne&&j(ne)},1200);o=k.channel("friend-invite-"+F).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${F}`},ne=>j(ne.new)).subscribe()}async function xo(e,t,n,a,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=a?"p1":"p2",r=a?"p2":"p1",f=(p||[]).map(u=>u.id),m=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await k.from("matches").select("*").eq("id",n).single();if(!g){c("Match introuvable","error"),l("home");return}async function $(){const[{data:u},{data:x},{data:h},{data:y}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),b=A=>({cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map(A=>b(A)),w=((x==null?void 0:x.starters)||[]).map(A=>b(A)),I=(u==null?void 0:u.formation)||"4-4-2",E=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:ft(v,I),p2Team:ft(w,E),p1Subs:((u==null?void 0:u.subs)||[]).map(A=>b(A)),p2Subs:((x==null?void 0:x.subs)||[]).map(A=>b(A)),p1Formation:I,p2Formation:E,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?m:[],gcCardsFull_p2:a?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!o)if(a){o=await $();const{data:u}=await k.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await k.from("matches").update({game_state:o,turn_user_id:g.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:x}=await k.from("matches").select("game_state").eq("id",n).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(o=x.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await k.from("matches").update({game_state:o}).eq("id",n)}let _=!1,z=!1,L=null,F=!1;const K=new Set,q=new Set;function j(u){var A,C;try{k.removeChannel(R)}catch{}const x=o[i+"Score"]||0,h=o[r+"Score"]||0;if(!z){const N=o.p1Score||0,W=o.p2Score||0,le=(o.usedGc_p1||[]).length,J=(o.usedGc_p2||[]).length,H=u.winner_id||(N>W?g.home_id:W>N?g.away_id:null);(H?d.profile.id===H:d.profile.id<(a?g.away_id:g.home_id))&&(z=!0,cn({player1Id:g.home_id,player2Id:g.away_id,score1:N,score2:W,gc1:le,gc2:J}).catch(Z=>console.warn("[FriendMatch] updateStats:",Z)))}let y,b;u.winner_id?(y=u.winner_id===d.profile.id,b=!1):u.forfeit?(y=x>h,b=!1):(b=x===h,y=x>h),(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":y?"🏆":"😞",I=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",E=b?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${E}">${I}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${x} – ${h} ${o[r+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(C=v.querySelector("#pvp-end-home"))==null||C.addEventListener("click",()=>{v.remove(),Oe(e),l("home")})}const R=k.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const x=u.new;try{if(x.status==="finished"||x.forfeit){if(_)return;_=!0,L&&(clearInterval(L),L=null),x.game_state&&(o=x.game_state),j(x);return}if(x.game_state){const h=o;o=x.game_state;const y=o._lastGC;if(y&&y.seq&&!q.has(y.seq)&&(q.add(y.seq),y.by!==i)){ge(y.type,y.by,()=>Q());return}const b=h[i+"Score"]||0,v=h[r+"Score"]||0,w=o[i+"Score"]||0,I=o[r+"Score"]||0,E=w>b,A=I>v;if((E||A)&&!K.has(o.round)){K.add(o.round);const C=[...o.log||[]].reverse().find(W=>W.isGoal),N=((C==null?void 0:C.homePlayers)||[]).map(W=>({name:W.name,note:W.note,portrait:W.portrait,job:W.job}));xe(N,w,I,E,()=>Q());return}Q()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function ie(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:x}=await k.from("matches").update({game_state:o}).eq("id",n);x&&c("Erreur de synchronisation","error");try{Q()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function ce(){if(_)return;_=!0,L&&(clearInterval(L),L=null);const u=a?g.away_id:g.home_id,x=a?"p2":"p1",h=a?"p1":"p2",y={...o,[x+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{k.removeChannel(R)}catch{}setTimeout(()=>{Oe(e),l("home")},800)}const ne={BOOST_STAT:({value:u=1,count:x=1,roles:h=[]},y,b)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([I])=>!h.length||h.includes(I)).flatMap(([I,E])=>E.filter(A=>!A.used).map(A=>({...A,_line:I})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}M(w,x,`Choisir ${x} joueur(s) à booster (+${u})`,I=>{I.forEach(E=>{const A=(v[E._line]||[]).find(C=>C.cardId===E.cardId);A&&(A.boost=(A.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${A.name}`,type:"info"}))}),y[i+"Team"]=v,b(y)})},DEBUFF_STAT:({value:u=1,count:x=1,roles:h=[],target:y="ai"},b,v)=>{const w=y==="home"?i:r,I=b[w+"Team"],E=y==="home"?"allié":"adverse",A=Object.entries(I).filter(([C])=>!h.length||h.includes(C)).flatMap(([C,N])=>N.filter(W=>!W.used).map(W=>({...W,_line:C})));if(!A.length){b.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),v(b);return}M(A,x,`Choisir ${x} joueur(s) ${E}(s) (-${u})`,C=>{C.forEach(N=>{const W=(I[N._line]||[]).find(le=>le.cardId===N.cardId);W&&(W.boost=(W.boost||0)-u,b.log.push({text:`🎯 -${u} sur ${W.name}`,type:"info"}))}),b[w+"Team"]=I,v(b)})},GRAY_PLAYER:({count:u=1,roles:x=[],target:h="ai"},y,b)=>{const v=h==="home"?i:r,w=y[v+"Team"],I=h==="home"?"allié":"adverse",E=Object.entries(w).filter(([A])=>!x.length||x.includes(A)).flatMap(([A,C])=>C.filter(N=>!N.used).map(N=>({...N,_line:A})));if(!E.length){y.log.push({text:`❌ Aucun joueur ${I}`,type:"info"}),b(y);return}M(E,u,`Choisir ${u} joueur(s) ${I}(s) à exclure`,A=>{A.forEach(C=>{const N=(w[C._line]||[]).find(W=>W.cardId===C.cardId);N&&(N.used=!0,y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,b(y)})},REVIVE_PLAYER:({count:u=1,roles:x=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!x.length||x.includes(w)).flatMap(([w,I])=>I.filter(E=>E.used).map(E=>({...E,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}M(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(I=>{const E=(b[I._line]||[]).find(A=>A.cardId===I.cardId);E&&(E.used=!1,h.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=b,y(h)})},REMOVE_GOAL:({},u,x)=>{const h=r+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(u)},ADD_GOAL_DRAW:({},u,x)=>{u[i+"Score"]===u[r+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(u)},ADD_SUB:({value:u=1},x,h)=>{x.maxSubs=(x.maxSubs||3)+u,x.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(x)},CUSTOM:({},u,x)=>x(u)};function M(u,x,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var E,A;const I=u.map(C=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[C._line]||"#555",W=we(C,C._line)+(C.boost||0),J=v.find(V=>V.cardId===C.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=C.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${C.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${N};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${C.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${W}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${C._line}</div>
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
        </div>`,(E=b.querySelector("#pp-close"))==null||E.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(C=>{C.addEventListener("click",()=>{const N=C.dataset.cid,W=u.find(J=>J.cardId===N),le=v.findIndex(J=>J.cardId===N);W&&(le>-1?v.splice(le,1):v.length<x&&v.push(W),w())})}),(A=b.querySelector("#pp-confirm"))==null||A.addEventListener("click",()=>{b.remove(),y(v)})}w(),document.body.appendChild(b)}async function Y(u,x){const y=(o["gcCardsFull_"+i]||[]).find(I=>I.id===u),b=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(I=>{var E;return I.name===x||((E=I.name)==null?void 0:E.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:x,by:i,seq:(o._gcAnimSeq||0)+1};q.add(w.seq),ge(x,i,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const E=ne[b.effect_type];if(E){const A={...o};E(b.effect_params||{},A,async C=>{C["usedGc_"+i]=v,C._lastGC=w,C._gcAnimSeq=w.seq,await ie(C)});return}}const I={...o};switch(x){case"Remplacement+":I.maxSubs=(I.maxSubs||3)+1,I.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=r+"Score";I[E]>0&&(I[E]--,I.log.push({text:"🚫 But annulé",type:"info"}));break}}I["usedGc_"+i]=v,I._lastGC=w,I._gcAnimSeq=w.seq,await ie(I)})}function ee(u,x){const h="usedCardIds_"+u,y=new Set(o[h]||[]);x.forEach(b=>y.add(b)),o[h]=[...y]}function D(){for(const u of["p1","p2"]){const x=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(b=>{b.used=x.has(b.cardId)})}}function Q(){var Qe,mt,xt,yt,ht,X;if(o.phase==="reveal")return ae();if(o.phase==="midfield")return he();if(o.phase==="finished")return T();const u=o[i+"Team"],x=o[r+"Team"];D();const h=o[i+"Score"],y=o[r+"Score"],b=o[i+"Name"],v=o[r+"Name"],w=o.phase===i+"-attack",I=o.phase===i+"-defense",E=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],A=E.map(G=>G.cardId),C=window.innerWidth>=700,N=o[i+"Subs"]||[],W=o["usedSubIds_"+i]||[],le=N.filter(G=>!W.includes(G.cardId)),J=o["gcCardsFull_"+i]||[],H=o["usedGc_"+i]||[],V=J.filter(G=>!H.includes(G.id)),Z=o.boostOwner===i&&!o.boostUsed,de=!["GK","DEF","MIL","ATT"].some(G=>(x[G]||[]).some(re=>!re.used)),ue=[...u.MIL||[],...u.ATT||[]].filter(G=>!G.used),fe=w&&de&&ue.length===0?[...u.GK||[],...u.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];function me(G,re,se){var wt,mi;const ye=G._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Je=(ye==null?void 0:ye.name)||G.gc_type,et=(ye==null?void 0:ye.effect)||((wt=Ge[G.gc_type])==null?void 0:wt.desc)||"",Mt=ye!=null&&ye.image_url?`/manager-wars/icons/${ye.image_url}`:null,St=((mi=Ge[G.gc_type])==null?void 0:mi.icon)||"⚡",bt=Math.round(se*.22),lt=Math.round(se*.22),vt=se-bt-lt,Ct=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${G.id}" data-gc-type="${G.gc_type}"
        style="box-sizing:border-box;width:${re}px;height:${se}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ct}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${re-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Mt?`<img src="${Mt}" style="max-width:${re-10}px;max-height:${vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(vt*.55)}px">${St}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(G,re){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${G}px;height:${re}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(re*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(re*.2)}px">⚡</div>
        <div style="font-size:${Math.round(re*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Se=(G,re)=>re?be(130,175):me(G,130,175),Re=(G,re)=>re?be(68,95):me(G,68,95),Fe=C?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=w?Ae(i)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:I?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Le=w&&!Ae(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||I?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${C?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(G=>`<div class="pvp-sub-btn" data-sub-id="${G.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(G,C?76:44,C?100:58)}</div>`).join("")}
    </div>`,De=w?"attack":I?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(u,o[i+"Formation"],De,A,300,300,fe)}
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
        </div>`}return`<div style="font-size:11px;color:${G.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${G.type==="goal"?700:400};padding:3px 2px">${G.text||""}</div>`}const Ke=(()=>{var re,se;if(I&&((re=o.pendingAttack)!=null&&re.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(w&&((se=o.pendingAttack)!=null&&se.players)){const ye=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",ye.total)}
        </div>`}const G=(o.log||[]).slice(-1)[0];return G?'<div style="padding:2px 4px">'+Ue(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ce=`
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
            ${V.map(G=>Se(G,!1)).join("")}
            ${Z?Se(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ce}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(u,o[i+"Formation"],De,A,300,300,fe)}
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
      </div>`;function Be(){const G=e.querySelector(".match-screen");if(!G)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.height=re+"px",G.style.minHeight=re+"px",G.style.maxHeight=re+"px",G.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>{if(!w&&!I)return;const re=G.dataset.cardId,se=G.dataset.role,ye=(u[se]||[]).find(et=>et.cardId===re);if(!ye||ye.used)return;const Ye=fe.includes(re);if(w&&!["MIL","ATT"].includes(se)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Je=We.findIndex(et=>et.cardId===re);Je>-1?We.splice(Je,1):We.length<3&&We.push({...ye,_role:se}),Q()})}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>S(G.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(G=>{G.addEventListener("click",()=>S())}),(Qe=e.querySelector("#pvp-sub-open"))==null||Qe.addEventListener("click",()=>S()),e.querySelectorAll(".pvp-gc-mini").forEach(G=>{G.addEventListener("click",()=>P(G.dataset.gcId,G.dataset.gcType))}),(mt=e.querySelector("#pvp-boost-card"))==null||mt.addEventListener("click",()=>O()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",G=>{w?G.currentTarget.dataset.pass==="1"||!Ae(i)?te():Te():I&&ke()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ce()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>U()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>oe()),L&&(clearInterval(L),L=null),(w||I)&&!_){let G=30,re=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=G+"s",se().style.color=re?"#ff4444":"#fff")};ye(),L=setInterval(()=>{G--,G<0?re?(clearInterval(L),L=null,w&&!Ae(i)?te():ce()):(re=!0,G=15,ye()):ye()},1e3)}}function ae(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await ie({phase:"midfield"})},5e3)}let pe=!1;function he(){if(pe)return;const u=o[i+"Team"].MIL||[],x=o[r+"Team"].MIL||[];function h(V){return V.reduce((Z,de)=>Z+we(de,"MIL"),0)}function y(V){let Z=0;for(let de=0;de<V.length-1;de++){const ue=Ze(V[de],V[de+1]);ue==="#00ff88"?Z+=2:ue==="#FFD700"&&(Z+=1)}return Z}const b=h(u)+y(u),v=h(x)+y(x),w=b>=v;function I(V,Z,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Z}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${V.map((ue,fe)=>{const me=fe<V.length-1?Ze(ue,V[fe+1]):null,be=!me||me==="#ff3333"||me==="#cc2222",Se=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ue,note:we(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<V.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${me}`}">
              ${Se?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${Se}</span>`:""}
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
      ${I(x,o[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(V,Z)=>e.querySelectorAll(V).forEach((de,ue)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},Z+ue*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((V,Z)=>setTimeout(()=>{V.style.opacity="1"},Z*70)),900),setTimeout(()=>{const V=e.querySelector("#pvp-vs");V&&(V.style.opacity="1",V.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Z=>Z.style.opacity="1")},1250);function A(V,Z,de){const ue=document.getElementById(V);if(!ue)return;const fe=performance.now(),me=be=>{const Se=Math.min(1,(be-fe)/de);ue.textContent=Math.round(Z*(1-Math.pow(1-Se,3))),Se<1?requestAnimationFrame(me):ue.textContent=Z};requestAnimationFrame(me)}setTimeout(()=>{A("pvp-score-me",b,800),A("pvp-score-opp",v,800)},1500);const C=o.p1Team.MIL||[],N=o.p2Team.MIL||[],W=h(C)+y(C),le=h(N)+y(N),J=W>=le?"p1":"p2";let H=o.boostValue;H==null&&(H=si(),o.boostValue=H,o.boostOwner=J,o.boostUsed=!1),pe=!0,setTimeout(()=>{const V=e.querySelector("#duel-row-"+(w?"me":"opp")),Z=e.querySelector("#duel-row-"+(w?"opp":"me")),de=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),fe=w?de:ue,me=w?ue:de;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{V&&(V.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",V.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),Z&&(Z.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const Se=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Se+Re,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Ie=J;await ie({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:H,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function xe(u,x,h,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(C,N)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${N%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][N%8]}</div>`).join(""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${u.map(C=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${I[C.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${C.portrait?`<img src="${C.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(C.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let E=!1;const A=()=>{E||(E=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",A),setTimeout(A,3500)}function ge(u,x,h){var H,V;const y=(o.gcDefs||[]).find(Z=>{var de;return Z.name===u||((de=Z.name)==null?void 0:de.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((H=Ge[u])==null?void 0:H.desc)||"",E=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,A=((V=Ge[u])==null?void 0:V.icon)||"⚡",N=x===i?"Vous":o[x+"Name"]||"Adversaire",W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",W.innerHTML=`
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
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${A}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(W);let le=!1;const J=()=>{le||(le=!0,W.remove(),setTimeout(()=>h&&h(),50))};W.addEventListener("click",J),setTimeout(J,3e3)}function P(u,x){var W,le,J,H;const y=(o["gcCardsFull_"+i]||[]).find(V=>V.id===u),b=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",I=(b==null?void 0:b.name)||x,E=(b==null?void 0:b.effect)||((W=Ge[x])==null?void 0:W.desc)||"Carte spéciale.",A=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,C=((le=Ge[x])==null?void 0:le.icon)||"⚡",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",N.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${I.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${I}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${C}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(N),(J=N.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>N.remove()),(H=N.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{N.remove(),Y(u,x)})}function O(){var y;const u=o[i+"Team"],x=Object.entries(u).flatMap(([b,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!x.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(b=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=we(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const v=b.dataset.cid,w=x.find(E=>E.cardId===v);if(!w)return;const I=(u[w._line]||[]).find(E=>E.cardId===v);I&&(I.boost=(I.boost||0)+o.boostValue),h.remove(),await ie({[i+"Team"]:u,boostUsed:!0})})})}function S(u=null){var le,J;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],b=o.maxSubs||3;if(y.length>=b){c(`Maximum ${b} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([H,V])=>(V||[]).filter(Z=>Z.used).map(Z=>({...Z,_line:H}))),w=(o[i+"Subs"]||[]).filter(H=>!y.includes(H.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let I=Math.max(0,v.findIndex(H=>H.cardId===u));const E=((le=v[I])==null?void 0:le._line)||((J=v[I])==null?void 0:J.job);let A=Math.max(0,w.findIndex(H=>H.job===E)),C=!1;const N=document.createElement("div");N.id="pvp-sub-overlay",N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function W(){var me,be,Se,Re,Fe,Ie;const H=v[I],V=w[A],Z=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(Z*1.35),ue=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;N.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${V?Ve({...V,used:!1,boost:0},Z,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(A>=w.length-1)}" ${A>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${w.length}</div>
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
      </div>`,(me=N.querySelector("#psub-close"))==null||me.addEventListener("click",()=>N.remove()),(be=N.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{I>0&&(I--,W())}),(Se=N.querySelector("#pout-down"))==null||Se.addEventListener("click",()=>{I<v.length-1&&(I++,W())}),(Re=N.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{A>0&&(A--,W())}),(Fe=N.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{A<w.length-1&&(A++,W())});const fe=(Le,je,De,Pe)=>{const Ue=N.querySelector("#"+Le);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",Ce=>{Ke=Ce.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ce=>{const Be=Ce.changedTouches[0].clientY-Ke;if(Math.abs(Be)<30)return;const Qe=je();Be<0&&Qe<Pe-1?(De(Qe+1),W()):Be>0&&Qe>0&&(De(Qe-1),W())},{passive:!0})};fe("pin-panel",()=>A,Le=>A=Le,w.length),fe("pout-panel",()=>I,Le=>I=Le,v.length),(Ie=N.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),C)return;C=!0;const je=v[I],De=w[A];if(!je||!De)return;const Pe=je._line,Ue=(h[Pe]||[]).findIndex(Be=>Be.cardId===je.cardId);if(Ue===-1){c("Erreur : joueur introuvable","error"),N.remove();return}const Ke={...De,_line:Pe,position:je.position,used:!1,boost:0};h[Pe].splice(Ue,1,Ke);const Ce=[...y,De.cardId];N.remove(),B(je,De,async()=>{await ie({[i+"Team"]:h,[r+"Team"]:o[r+"Team"],["usedSubIds_"+i]:Ce})})})}document.body.appendChild(N),W()}function B(u,x,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(E,A,C)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${A};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${C}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[E.job]||"#555"};border:3px solid ${A};position:relative;overflow:hidden;margin:0 auto">
        ${ze(E)?`<img src="${ze(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const I=()=>{w||(w=!0,b.remove(),setTimeout(()=>h(),50))};b.addEventListener("click",I),setTimeout(I,2200)}function U(){var x;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[r+"Team"],o[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(x=u.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>u.remove())}function oe(){var h;const u=o.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function te(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",x=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=qe(o),b=Ae(u),v=y||!b?"finished":u+"-attack";await ie({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:x,log:h}),v==="finished"&&await He(o)}async function Te(){const u=o[i+"Team"],x=!["GK","DEF","MIL","ATT"].some(v=>(o[r+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(W=>W.cardId===v.cardId)||v,I=x&&["GK","DEF"].includes(v._role),E=u[v._role]||[],A=E.findIndex(W=>W.cardId===v.cardId),C=ot(E.length),N=A>=0?C[A]:w._col??1;return{...w,_line:v._role,_col:N,...I?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Pt(h,o.modifiers[i]||{});ee(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(u[v._role]||[]).find(I=>I.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],Q();const b=[...o.log||[]];if(x){const v=(o[i+"Score"]||0)+1,w=h.map(N=>({name:N.name,note:we(N,N._line||"ATT"),portrait:ze(N),job:N.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const I=(o.round||0)+1,E=i==="p1"?"p2":"p1",A={...o,[i+"Team"]:u,[i+"Score"]:v},C=qe(A);K.add(I),xe(w,v,o[r+"Score"]||0,!0,async()=>{await ie({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:C?"finished":E+"-attack",attacker:E,round:I,log:b}),C&&await He({...o,[i+"Score"]:v})});return}b.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await ie({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:r+"-defense",log:b})}async function ke(){const u=o[i+"Team"],x=(o["selected_"+i]||[]).map(H=>{const V=(u[H._role]||[]).find(me=>me.cardId===H.cardId)||H,Z=u[H._role]||[],de=Z.findIndex(me=>me.cardId===H.cardId),ue=ot(Z.length),fe=de>=0?ue[de]:V._col??1;return{...V,_line:H._role,_col:fe}}),h=Ot(x,o.modifiers[i]||{});ee(i,x.map(H=>H.cardId)),x.forEach(H=>{const V=(u[H._role]||[]).find(Z=>Z.cardId===H.cardId);V&&(V.used=!0)}),o["selected_"+i]=[],Q();const y=Ht(o.pendingAttack.total,h.total,o.modifiers[i]||{}),b=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=b==="p1"?"p2":"p1",I=(o.round||0)+1,E=(o.pendingAttack.players||[]).map(H=>({name:H.name,note:we(H,H._line||"ATT"),portrait:ze(H),job:H.job})),A=[...o.log||[]];A.push({type:"duel",isGoal:v,homeScored:v&&b===i,text:v?`⚽ BUT de ${o[b+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:E,aiPlayers:x.map(H=>({name:H.name,note:we(H,H._line||"DEF"),portrait:ze(H),job:H.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const C=v?(o[b+"Score"]||0)+1:o[b+"Score"]||0,N={...o,[i+"Team"]:u,[b+"Score"]:C},W=qe(N),le=W?"finished":w+"-attack",J=async()=>{await ie({[i+"Team"]:u,[r+"Team"]:o[r+"Team"],[b+"Score"]:C,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:le,attacker:w,round:I,log:A}),(le==="finished"||W)&&await He({...o,[b+"Score"]:C})};if(v){const H=b===i,V=H?C:o[i+"Score"]||0,Z=H?o[r+"Score"]||0:C;K.add(I),xe(E,V,Z,H,J)}else await J()}function $e(u){return["MIL","ATT"].some(x=>(u[x]||[]).some(h=>!h.used))}function _e(u){return["GK","DEF","MIL","ATT"].some(x=>(u[x]||[]).some(h=>!h.used))}function Ee(u){return _e(u)&&!$e(u)}function Ae(u){const x=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!($e(x)||!_e(h)&&Ee(x))}function qe(u){const x=["MIL","ATT"].some(A=>(u.p1Team[A]||[]).some(C=>!C.used)),h=["MIL","ATT"].some(A=>(u.p2Team[A]||[]).some(C=>!C.used)),y=_e(u.p1Team),b=_e(u.p2Team);return!x&&!(!b&&y)&&(!h&&!(!y&&b))}function Ne(u){const x=u.p1Score||0,h=u.p2Score||0;return x===h?null:x>h?g.home_id:g.away_id}async function He(u){try{await k.from("matches").update({status:"finished",winner_id:Ne(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(x){console.error("[PvP] finishMatch:",x)}}function T(){var b;const u=o[i+"Score"],x=o[r+"Score"],h=u>x,y=u===x;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{k.removeChannel(R)}catch{}Oe(e),l("home")})}Q()}const yo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function ho(e,t){const{state:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:a}=t,{data:p}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  `;function c(i){const r=document.getElementById("mkt-content"),f=i==="buy"?d:l;if(f.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const m=i==="mine"?[...f].sort((g,$)=>g.status!==$.status?g.status==="active"?-1:1:new Date($.listed_at)-new Date(g.listed_at)):f;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(g=>{var F,K,q,j;const $=(F=g.card)==null?void 0:F.player;if(!$)return"";const o=$.job==="GK"?$.note_g:$.job==="DEF"?$.note_d:$.job==="MIL"?$.note_m:$.note_a,_=yo[$.rarity],z=(n.profile.credits||0)>=g.price,L=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${L?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${_o($.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${_};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${$.firstname} ${$.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${$.country_code} · ${((K=$.clubs)==null?void 0:K.encoded_name)||"—"} · ${$.rarity} · ${$.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((q=g.seller)==null?void 0:q.pseudo)||"—"}</div>`:L?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((j=g.buyer)==null?void 0:j.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${z?"":"disabled"} style="margin-top:4px">${z?"Acheter":"Trop cher"}</button>`:L?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>bo(g.dataset.buy,f,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>wo(g.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const f=r===i;r.style.background=f?"var(--green)":"#fff",r.style.color=f?"#fff":"var(--gray-600)",r.style.borderColor=f?"var(--green)":"var(--gray-200)"}),c(i.dataset.tab)})})}async function bo(e,t,n,a){var g;const{state:p,toast:s,refreshProfile:d}=a,l=t.find($=>$.id===e);if(!l)return;const c=l.price,i=p.profile.credits||0,r=(g=l.card)==null?void 0:g.player;if(i<c){s("Crédits insuffisants","error");return}if(!await vo(r,c))return;const m=document.querySelector(`[data-buy="${e}"]`);m&&(m.disabled=!0,m.textContent="⏳");try{const{data:$,error:o}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(o)throw new Error(o.message);if(!($!=null&&$.success))throw new Error(($==null?void 0:$.error)||"Achat impossible");p.profile.credits=i-c;const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(i-c).toLocaleString("fr")}`),s(`✅ ${r==null?void 0:r.surname_encoded} ajouté à ta collection !`,"success"),fi(n,a)}catch($){s("❌ "+$.message,"error"),m&&(m.disabled=!1,m.textContent="Acheter")}}function vo(e,t){return new Promise(n=>{const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
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
      </div>`,document.body.appendChild(a);const p=s=>{a.remove(),n(s)};a.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),a.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),a.addEventListener("click",s=>{s.target===a&&p(!1)})})}async function wo(e,t,n){const{toast:a}=n,{data:p}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),a("Annonce retirée","success"),fi(t,n)}function _o(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function $o(e,{state:t,navigate:n,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function ko(e,{state:t,navigate:n,toast:a}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await k.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function i(r){const f=r.home_id===p.id;f?r.home_score:r.away_score,f?r.away_score:r.home_score;const m=r.winner_id===p.id,g=r.home_score===r.away_score&&r.status==="finished",$=r.status!=="finished"?"…":g?"N":m?"V":"D",o=r.status!=="finished"||g?"#888":m?"#1A6B3C":"#c0392b";let _=d[r.mode]||r.mode;r.away_id===null&&!_.startsWith("IA")&&(_="IA");const L=r.home_id===p.id?r.away:r.home;let F;r.away_id===null?F=_:L?F=`${L.club_name||L.pseudo} (${L.pseudo})`:F="Adversaire";let K="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(K=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const q=new Date(r.created_at),j=q.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+q.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),R=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${F}${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${_} · ${j}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${R}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${$}</span>
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
  </div>`}Zi(tn);const ve={user:null,profile:null,page:"home",params:{}};function $t(e,t="info",n=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},n))}function Eo(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function kt(){if(!ve.user)return;const{data:e}=await k.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}const gi="mw_theme";function Rt(){return localStorage.getItem(gi)||"light"}function Ao(e){var t;localStorage.setItem(gi,e),ni(e),(t=ve.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",ve.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Dt(e,t={}){ve.page=e,ve.params=t,Ji()}async function Ji(){var a,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const n={state:ve,navigate:Dt,toast:$t,openModal:Eo,closeModal:ii,refreshProfile:kt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await bi(e,n);break;case"collection":await kn(e,n);break;case"decks":await Qt(e,n);break;case"boosters":await Dn(e,n);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await gn(e,n):s==="friend"?await go(e,n,(a=ve.params)==null?void 0:a.friendId,(p=ve.params)==null?void 0:p.friendName):await Jn(e,n);break}case"market":await ho(e,n);break;case"rankings":await $o(e,n);break;case"matches":await ko(e,n);break;case"friends":await an(e,n);break;default:await bi(e,n)}}function To(){const e=document.getElementById("app"),t=ve.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",p=>{p.preventDefault(),Dt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Rt()==="dark"?"light":"dark";Ao(p),Ai(p)}),Ai(Rt())}function Ai(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Io(){ni(Rt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await k.auth.getSession();if(!e){Ti(),xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$t});return}ve.user=e.user,await kt(),Ti();try{const{data:n}=await k.from("formation_links_overrides").select("formation, links"),a={};(n||[]).forEach(p=>{a[p.formation]=p.links}),en(a)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!ve.profile){nn(document.getElementById("app"),{state:ve,navigate:async()=>{await kt(),Wt()},toast:$t,refreshProfile:kt});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){Wn(document.getElementById("app"),{state:ve,navigate:()=>Wt(),toast:$t,refreshProfile:kt});return}ve.profile.theme&&ve.profile.theme!==Rt()&&(localStorage.setItem(gi,ve.profile.theme),ni(ve.profile.theme)),Wt(),k.auth.onAuthStateChange(async(n,a)=>{n==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$t}))})}function Lo(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=Lo()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Wt(){const e=()=>{var n;(n=ve.user)!=null&&n.id&&k.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),To(),Ji()}function Ti(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Qi(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}Io().catch(e=>{console.error("Échec du démarrage:",e),Qi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Qi("Le serveur met trop de temps à répondre.")},12e3);
