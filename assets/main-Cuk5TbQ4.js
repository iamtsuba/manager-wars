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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!r||!p){s.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:l}=await A.auth.signInWithPassword({email:r,password:p});if(d.textContent="Se connecter",d.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!r||!p||!s){d.textContent="Remplissez tous les champs.";return}if(p.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==s){d.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await A.auth.signUp({email:r,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,c){d.textContent=c.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function nn(e,{state:t,navigate:n,toast:r,refreshProfile:p}){let s="#1A6B3C",d="#D4A017";e.innerHTML=`
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
  `;function l(){var $;const i=document.getElementById("logo-preview"),a=document.getElementById("logo-initials"),f=(($=document.getElementById("setup-club"))==null?void 0:$.value)||"MW",g=f.trim().split(" ").filter(Boolean),m=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=s),a&&(a.textContent=m,a.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,l()});function c(i){document.querySelectorAll(".setup-step").forEach(a=>a.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("step1-error");if(a.textContent="",i.length<3){a.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await A.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){a.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),a=document.getElementById("step2-error");if(a.textContent="",i.length<2){a.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await A.from("users").select("id").eq("club_name",i).maybeSingle();if(f){a.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),g=document.getElementById("step3-finish");f.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:m}=await A.from("users").insert({id:t.user.id,pseudo:i,club_name:a,club_color1:s,club_color2:d,credits:1e4});if(m)throw m;await on(t.user.id),await p(),r(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){f.textContent=m.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function on(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await A.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const It="#1A6B3C",Lt="#cc2222",rn="#D4A017",yi="#888";async function an(e,t){const{state:n,toast:r}=t;e.innerHTML=`
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
    </div>`,await Li(n,r,t),document.getElementById("btn-add-friend").addEventListener("click",()=>dn(n,r)),document.getElementById("btn-accept-friend").addEventListener("click",()=>zi(n,r,null,t))}async function Li(e,t,n={}){const{navigate:r}=n,p=e.user.id,{data:s,error:d}=await A.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${p},addressee_id.eq.${p}`),{count:l}=await A.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",p).eq("status","pending"),c=document.getElementById("pending-badge");c&&(l>0?(c.style.display="flex",c.textContent=l):c.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(d){console.error("[Friends] Erreur:",d),i.innerHTML=`<div style="color:${Lt};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const a=(s||[]).map(m=>m.requester_id===p?m.addressee_id:m.requester_id);let f={};if(a.length){const{data:m}=await A.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",a);(m||[]).forEach($=>{f[$.id]=$})}const g=(s||[]).map(m=>({friendshipId:m.id,friend:f[m.requester_id===p?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!g.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${g.length} ami${g.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${g.map(({friendshipId:m,friend:$})=>sn($,m)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>ln(e,m.dataset.stats,m.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{const $=m.dataset.friendId,o=m.dataset.friendName;console.log("[Friends] clic match",{fid:$,fname:o,hasNavigate:typeof r}),typeof r=="function"?r("match",{matchMode:"friend",friendId:$,friendName:o}):t("Erreur navigation","error")})})}function sn(e,t){const n=e.club_name||e.pseudo||"?",r=e.pseudo||"",p=(r||n).slice(0,2).toUpperCase(),s=e.club_color2||It,d=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,c=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${s};border:2.5px solid ${d};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${d}">
          ${p}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${c?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${r}</div>
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
    ${ai()}`,document.body.appendChild(n);const r=n.querySelector("#friend-pseudo-input"),p=n.querySelector("#add-friend-error"),s=()=>n.remove();r.focus(),n.querySelector("#add-cancel").addEventListener("click",s),n.addEventListener("click",d=>{d.target===n&&s()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const d=r.value.trim();if(!d){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await A.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await A.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(c){const a=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=a;return}const{error:i}=await A.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function zi(e,t,n=null,r={}){const p=e.user.id,{data:s}=await A.from("friendships").select("id, requester_id").eq("addressee_id",p).eq("status","pending").order("created_at",{ascending:!1}),d=(s||[]).map(g=>g.requester_id);let l={};if(d.length){const{data:g}=await A.from("users").select("id, pseudo, club_name").in("id",d);(g||[]).forEach(m=>{l[m.id]=m})}const c=(s||[]).map(g=>({...g,requester:l[g.requester_id]||{pseudo:"?"}})),i=ri(),a=c||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${a.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${a.map(g=>{var m,$,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=g.requester)==null?void 0:m.club_name)||(($=g.requester)==null?void 0:$.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((o=g.requester)==null?void 0:o.pseudo)||""})</span>
                </div>
                <button data-accept="${g.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${It};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${g.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",g=>{g.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(g=>{g.addEventListener("click",async()=>{const{error:m}=await A.from("friendships").update({status:"accepted"}).eq("id",g.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}g.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Li(e,t,r),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(g=>{g.addEventListener("click",async()=>{await A.from("friendships").delete().eq("id",g.dataset.decline),g.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function ln(e,t,n){const r=e.user.id,[p,s]=[r,t].sort(),d=r===p,{data:l}=await A.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",s).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},a=d?i.wins_p1||0:i.wins_p2||0,f=d?i.wins_p2||0:i.wins_p1||0,g=i.draws||0,m=d?i.goals_p1||0:i.goals_p2||0,$=d?i.goals_p2||0:i.goals_p1||0,o=d?i.gc_used_p1||0:i.gc_used_p2||0,_=d?i.gc_used_p2||0:i.gc_used_p1||0,M=i.matches_total||0,L=(P,j,C,D=It,ne=Lt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${D}">${j}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${P}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${ne}">${C}</div>
    </div>`,F=ri();F.innerHTML=`
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
        ${L("Victoires",a,f)}
        ${L("Nuls",g,g,yi,yi)}
        ${L("Défaites",f,a)}
        ${L("Buts marqués",m,$)}
        ${L("Buts encaissés",$,m,Lt,It)}
        ${L("GC utilisés ⚡",o,_,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${M} match${M>1?"s":""} joué${M>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(F),F.querySelector("#stats-close").addEventListener("click",()=>F.remove()),F.addEventListener("click",P=>{P.target===F&&F.remove()})}function ri(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ai(){return`
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
    </style>`}async function cn({player1Id:e,player2Id:t,score1:n,score2:r,gc1:p,gc2:s}){const[d,l]=[e,t].sort(),c=e!==d,i=c?r:n,a=c?n:r,f=c?s:p,g=c?p:s,m=i>a?1:0,$=a>i?1:0,o=i===a?1:0,{data:_}=await A.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",l).single();_?await A.from("friend_match_stats").update({wins_p1:_.wins_p1+m,wins_p2:_.wins_p2+$,draws:_.draws+o,goals_p1:_.goals_p1+i,goals_p2:_.goals_p2+a,gc_used_p1:_.gc_used_p1+f,gc_used_p2:_.gc_used_p2+g,matches_total:_.matches_total+1}).eq("player1_id",d).eq("player2_id",l):await A.from("friend_match_stats").insert({player1_id:d,player2_id:l,wins_p1:m,wins_p2:$,draws:o,goals_p1:i,goals_p2:a,gc_used_p1:f,gc_used_p2:g,matches_total:1})}const Ge={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function we(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const hi=["ATT","MIL","DEF","GK"];function Mi(e){let t=0;const n=e.length;for(let r=0;r<n;r++)for(let p=r+1;p<n;p++){const s=e[r],d=e[p];if(!s||!d)continue;const l=s._col!=null&&d._col!=null&&s._col===d._col,c=s._col!=null&&d._col!=null&&Math.abs(s._col-d._col)===1,i=hi.indexOf(s._line||s.job),a=hi.indexOf(d._line||d.job),f=Math.abs(i-a)===1;if(!((s._line||s.job)===(d._line||d.job)&&c||l&&f))continue;const $=s.country_code&&d.country_code&&s.country_code===d.country_code,o=s.club_id&&d.club_id&&s.club_id===d.club_id;$&&o?t+=2:($||o)&&(t+=1)}return t}function Pt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;return s+(Number(l==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),r=Mi(e);let p=n+r;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:n,links:r,total:Math.max(0,p)}}function Ot(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;let c=0;return l==="GK"?c=Number(d.note_g)||0:l==="MIL"?c=Number(d.note_m)||0:c=Number(d.note_d)||0,s+c+(d.boost||0)},0),r=Mi(e);let p=n+r;return t.stolenNote&&(p-=t.stolenNote),{base:n,links:r,total:Math.max(0,p)}}function Ht(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Si(e,t,n="easy"){const r=e.filter(d=>!d.used);if(!r.length)return[];const p=[...r].sort((d,l)=>{const c=t==="attack"?we(d,"ATT"):d._line==="GK"?we(d,"GK"):we(d,"DEF");return(t==="attack"?we(l,"ATT"):l._line==="GK"?we(l,"GK"):we(l,"DEF"))-c});let s=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(s,p.length,3))}function pn(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ut={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,n,r,p){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",p)}function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Xt(e,t){var r,p;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((r=n.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((p=n.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function si(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ft(e,t){const n=pt[t]||pt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,a)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(a.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),c=ot(l.length);l.forEach((i,a)=>{i._col=c[a]}),r[d]=l}return r}const s=[...e];for(const d of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[d];i++){let a=s.findIndex(f=>f.job===d);if(a===-1&&(a=s.findIndex(f=>f.job2===d)),a===-1&&(a=0),s[a]){const f={...s[a],_line:d};l.push(f),s.splice(a,1)}}const c=ot(l.length);l.forEach((i,a)=>{i._col=c[a]}),r[d]=l}return r}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Oe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function di(e,t,n){const p=new Set,s=t.filter(a=>{const f=a.gc_type||a.id;return p.has(f)?!1:(p.add(f),!0)});let d=[];function l(a,f){const g=a._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},$={purple:"#9b59b6",light_blue:"#00bcd4"},o=m[g==null?void 0:g.color]||m.purple,_=$[g==null?void 0:g.color]||$.purple;return`<div class="gc-select-card" data-id="${a.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":_};background:${o};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((g==null?void 0:g.name)||a.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(g==null?void 0:g.name)||a.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g!=null&&g.image_url?`<img src="/manager-wars/icons/${g.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((g==null?void 0:g.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=a=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(a)};function i(){var f,g,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const a=d.length>0;e.innerHTML=`
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach($=>{$.addEventListener("click",()=>{const o=$.dataset.id,_=s.find(L=>L.id===o);if(!_)return;const M=d.findIndex(L=>L.gc_type===_.gc_type);M>-1?d.splice(M,1):d.length<3&&d.push(_),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{a&&c(d)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>c([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}function un(e){var r;const t=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function fn(e,t,n){const{state:r,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const d=s.map(a=>a.id),{data:l}=await A.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let c=0;function i(){var L,F,P,j,C;const a=s[c],f=(l||[]).filter(D=>D.deck_id===a.id),g=f.filter(D=>{var ne;return D.is_starter&&((ne=D.card)==null?void 0:ne.player)}).map(D=>Xt(D.card,D.position)),m=f.find(D=>{var ne;return((ne=D.card)==null?void 0:ne.card_type)==="formation"}),$=a.formation||((L=m==null?void 0:m.card)==null?void 0:L.formation)||"4-4-2",o=g.length>=11?ft(g,$):null,_=g.length>=11;Xe(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${a.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${$} · ${g.length}/11 ${a.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${dt(o,$,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((D,ne)=>`<div style="width:7px;height:7px;border-radius:50%;background:${ne===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const ne=e.querySelector(".deck-preview-wrap svg");ne&&(ne.removeAttribute("width"),ne.removeAttribute("height"),ne.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ne.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(F=document.getElementById("prev-deck"))==null||F.addEventListener("click",()=>{c>0&&(c--,i())}),(P=document.getElementById("next-deck"))==null||P.addEventListener("click",()=>{c<s.length-1&&(c++,i())}),(j=document.getElementById("validate-deck"))==null||j.addEventListener("click",()=>{if(!_)return;const D=t.state.params||{};t.navigate("match",{...D,matchMode:D.matchMode||n,deckId:a.id})}),(C=document.getElementById("cancel-deck-select"))==null||C.addEventListener("click",()=>{Oe(e),p("home")});const M=document.getElementById("deck-swipe-zone");if(M){let D=0,ne=0;M.addEventListener("touchstart",ue=>{D=ue.touches[0].clientX,ne=ue.touches[0].clientY},{passive:!0}),M.addEventListener("touchend",ue=>{const te=ue.changedTouches[0].clientX-D,z=ue.changedTouches[0].clientY-ne;Math.abs(te)<40||Math.abs(te)<Math.abs(z)||(te<0&&c<s.length-1?(c++,i()):te>0&&c>0&&(c--,i()))},{passive:!0})}}i()}function Ci(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ve(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ze(e),p=Ci(e),s=e._line||e.job||"MIL",d=ut[s]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(we(e,s))||0)+(e.boost||0),i=ji(e==null?void 0:e.country_code),a=Math.round(n*.19),f=Math.round(n*.25),g=n-Math.round(n*.19)-Math.round(n*.25),m=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${m}">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Jt(e==null?void 0:e.country_code)?`<img src="${Jt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,n){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((s,d)=>{if(p+=Ve(s,40,52),d<r.length-1){const l=Ze(s,r[d+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),p+="</div>",p}function Jt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ji(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function st(e,t,n,r,p=310,s=310,d=[]){var F;const l=Mt[t]||{},c=Ii(t)||oi[t]||[],i={},a=["ATT","MIL","DEF","GK"];for(const P of a)(e[P]||[]).forEach((C,D)=>{i[`${P}${D+1}`]=C});function f(P){const j=l[P];return j?{x:j.x*p,y:j.y*s}:null}let g="";for(const[P,j]of c){const C=f(P),D=f(j);if(!C||!D)continue;const ne=i[P],ue=i[j],te=Ze(ne,ue);te==="#00ff88"||te==="#FFD700"?(g+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${te}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${te}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${te}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=48,$=64,o=13,_=16,M={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[P,j]of Object.entries(i)){const C=f(P);if(!C||!j)continue;const D=P.replace(/[0-9]/g,""),ne=ut[D]||"#555",ue=d.includes(j.cardId),te=n==="attack"&&(["MIL","ATT"].includes(D)||ue)&&!j.used||n==="defense"&&["GK","DEF","MIL"].includes(D)&&!j.used,z=r.includes(j.cardId);let K;n==="attack"?K=ue?Math.max(1,Number(j.note_a)||0):D==="MIL"?Number(j.note_m)||0:Number(j.note_a)||0:n==="defense"?K=D==="GK"?Number(j.note_g)||0:D==="MIL"?Number(j.note_m)||0:Number(j.note_d)||0:K=Number(D==="GK"?j.note_g:D==="DEF"?j.note_d:D==="MIL"?j.note_m:j.note_a)||0,K=K+(j.boost||0);const ie=(C.x-m/2).toFixed(1),B=(C.y-$/2).toFixed(1),X=M[j==null?void 0:j.rarity]||M.normal;if(j.used){const O=typeof import.meta<"u"&&"/manager-wars/"||"/",H=`${typeof window<"u"&&((F=window.location)==null?void 0:F.origin)||""}${O}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");g+=`<rect x="${ie}" y="${B}" width="${m}" height="${$}" rx="5" fill="#161616"/>`,g+=`<image href="${H}" xlink:href="${H}" x="${ie}" y="${B}" width="${m}" height="${$}" preserveAspectRatio="xMidYMid slice"/>`,g+=`<rect x="${ie}" y="${B}" width="${m}" height="${$}" rx="5" fill="none" stroke="${X}" stroke-width="2" opacity="0.7"/>`,g+=`<rect x="${ie}" y="${B}" width="${m}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${j.cardId}" data-role="${D}" style="cursor:pointer"/>`;continue}const Y=z?.45:1,de=z?"#FFD700":X,he=z?3:(j==null?void 0:j.rarity)==="legende"||(j==null?void 0:j.rarity)==="légende"||(j==null?void 0:j.rarity)==="pepite"||(j==null?void 0:j.rarity)==="pépite"?2.5:2,xe=$-o-_;g+=`<defs><clipPath id="cp-${P}"><rect x="${ie}" y="${(C.y-$/2+o).toFixed(1)}" width="${m}" height="${xe}"/></clipPath></defs>`,g+=`<rect x="${ie}" y="${B}" width="${m}" height="${$}" rx="5" fill="${ne}" opacity="${Y}"/>`;const ye=ze(j);ye&&(g+=`<image href="${ye}" xlink:href="${ye}" x="${ie}" y="${(C.y-$/2+o).toFixed(1)}" width="${m}" height="${xe}" clip-path="url(#cp-${P})" preserveAspectRatio="xMidYMin slice"/>`),g+=`<rect x="${ie}" y="${B}" width="${m}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,g+=`<text x="${C.x.toFixed(1)}" y="${(C.y-$/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.name||"").slice(0,9)}</text>`;const R=(C.y+$/2-_).toFixed(1);g+=`<rect x="${ie}" y="${R}" width="${m}" height="${_}" fill="rgba(255,255,255,0.92)"/>`;{const O=Jt(j.country_code);O?g+=`<image href="${O}" xlink:href="${O}" x="${(C.x-20).toFixed(1)}" y="${(C.y+$/2-_+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:g+=`<text x="${(C.x-13).toFixed(1)}" y="${(C.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ji(j.country_code)}</text>`,g+=`<text x="${C.x.toFixed(1)}" y="${(C.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${K}</text>`;const V=Ci(j);V?g+=`<image href="${V}" xlink:href="${V}" x="${(C.x+m/2-14).toFixed(1)}" y="${(C.y+$/2-_+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:j.clubName&&(g+=`<text x="${(C.x+14).toFixed(1)}" y="${(C.y+$/2-_/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(j.clubName||"").slice(0,3).toUpperCase()}</text>`),j.boost&&(g+=`<rect x="${(C.x+m/2-12).toFixed(1)}" y="${(C.y-$/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,g+=`<text x="${(C.x+m/2-5).toFixed(1)}" y="${(C.y-$/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${j.boost}</text>`)}g+=`<rect x="${ie}" y="${B}" width="${m}" height="${$}" rx="5" fill="${z?"rgba(255,255,255,0.12)":"none"}" stroke="${de}" stroke-width="${he}" opacity="${Y}"/>`,te&&(g+=`<rect x="${ie}" y="${B}" width="${m}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${z?"selected":""}" data-card-id="${j.cardId}" data-role="${D}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${p+L*2} ${s+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${g}
  </svg>`}function dt(e,t,n,r,p=300,s=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${st(e,t,n,r,p,s,d)}
  </div>`}function nt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function li(e,t,n,r){var j;const{state:p,navigate:s,toast:d}=t;Xe(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return fn(e,t,n);const c=l.deckId;let i,a,f,g;try{const C=await Promise.all([A.from("decks").select("formation,name").eq("id",c).single(),A.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);i=C[0].data,f=C[0].error,a=C[1].data,g=C[1].error}catch(C){console.error("[Match] Exception chargement deck:",C),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(f||g){console.error("[Match] Erreur Supabase:",f||g),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const m=(a||[]).filter(C=>{var D;return C.is_starter&&((D=C.card)==null?void 0:D.player)}).map(C=>Xt(C.card,C.position)),$=(a||[]).filter(C=>{var D;return!C.is_starter&&((D=C.card)==null?void 0:D.player)}).map(C=>Xt(C.card,C.position));if(m.length<11){rt(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>s("decks"));return}const o=(a||[]).find(C=>{var D;return((D=C.card)==null?void 0:D.card_type)==="formation"}),_=(i==null?void 0:i.formation)||((j=o==null?void 0:o.card)==null?void 0:j.formation)||"4-4-2",{data:M,error:L}=await A.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:F}=await A.from("gc_definitions").select("*").eq("is_active",!0),P=(M||[]).map(C=>({...C,_gcDef:(F==null?void 0:F.find(D=>D.name===C.gc_type||D.id===C.gc_definition_id))||null}));r({deckId:c,formation:_,starters:m,subsRaw:$,gcCardsEnriched:P,gcDefs:F||[]})}async function gn(e,t){var n,r;try{const p=(r=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:r.id;try{(A.getChannels?A.getChannels():[]).forEach(d=>{const l=d.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&A.removeChannel(d)})}catch(s){console.warn("[Random] cleanup canaux:",s)}p&&await A.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}await li(e,t,"random",({deckId:p,formation:s,starters:d,subsRaw:l,gcCardsEnriched:c,gcDefs:i})=>{const a=f=>mn(e,t,p,s,d,l,f,i||[]);if(!c.length){a([]);return}di(e,c,a)})}async function mn(e,t,n,r,p,s,d=[],l=[]){var L;const{state:c,navigate:i,toast:a}=t;let f=!1,g=null;Xe(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const m=async(F=!0)=>{f=!0,g&&(A.removeChannel(g),g=null),F&&await A.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(L=document.getElementById("mm-cancel"))==null||L.addEventListener("click",async()=>{try{await m(!0)}catch{}Oe(e),i("home")});const $=async(F,P,j)=>{if(f)return;f=!0,g&&(A.removeChannel(g),g=null);const C=document.getElementById("mm-status");C&&(C.textContent="Adversaire trouvé !"),await new Promise(D=>setTimeout(D,600)),e.isConnected&&Fi(e,t,F,j,d,l)},{data:o,error:_}=await A.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:n});if(_||!(o!=null&&o.success)){a("Erreur de matchmaking","error"),Oe(e),i("home");return}if(o.matched){$(o.match_id,o.opponent_id,!1);return}const M=document.getElementById("mm-status");M&&(M.textContent="En attente d'un autre joueur..."),g=A.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},F=>{const P=F.new;P.status==="matched"&&P.match_id&&$(P.match_id,P.matched_with,!0)}).subscribe()}async function xn(e,t,n){const{state:r,navigate:p,toast:s}=t;try{(A.getChannels?A.getChannels():[]).forEach(i=>{const a=i.topic||"";(a.includes("matchmaking")||a.includes("pvp-match")||a.includes("friend-invite"))&&A.removeChannel(i)})}catch{}const{data:d}=await A.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!d){s("Match introuvable","error"),p("home");return}if(d.status==="finished"){s("Ce match est terminé","info"),p("home");return}const l=d.home_id===r.profile.id;Fi(e,t,n,l,[],[])}async function Fi(e,t,n,r,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(p||[]).map(T=>T.id),g=(p||[]).map(T=>({id:T.id,gc_type:T.gc_type,_gcDef:T._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:m}=await A.from("matches").select("*").eq("id",n).single();if(!m){c("Match introuvable","error"),l("home");return}async function $(){const[{data:T},{data:u},{data:x},{data:h}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:m.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:m.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",m.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",m.away_id).single()]),y=k=>({cardId:k.card_id,position:k.position,id:k.id,firstname:k.firstname,name:k.surname_encoded,country_code:k.country_code,club_id:k.club_id,job:k.job,job2:k.job2,note_g:Number(k.note_g)||0,note_d:Number(k.note_d)||0,note_m:Number(k.note_m)||0,note_a:Number(k.note_a)||0,rarity:k.rarity,skin:k.skin,hair:k.hair,hair_length:k.hair_length,clubName:k.club_encoded_name||null,clubLogo:k.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((T==null?void 0:T.starters)||[]).map(k=>y(k)),v=((u==null?void 0:u.starters)||[]).map(k=>y(k)),w=(T==null?void 0:T.formation)||"4-4-2",I=(u==null?void 0:u.formation)||"4-4-2";return{p1Team:ft(b,w),p2Team:ft(v,I),p1Subs:((T==null?void 0:T.subs)||[]).map(k=>y(k)),p2Subs:((u==null?void 0:u.subs)||[]).map(k=>y(k)),p1Formation:w,p2Formation:I,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?g:[],gcCardsFull_p2:r?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=m.game_state&&Object.keys(m.game_state).length?m.game_state:null;if(!o)if(r){o=await $();const{data:T}=await A.from("matches").select("game_state").eq("id",n).single();!(T!=null&&T.game_state)||!Object.keys(T.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:m.home_id}).eq("id",n):o=T.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let T=0;T<30&&!o;T++){await new Promise(x=>setTimeout(x,400));const{data:u}=await A.from("matches").select("game_state").eq("id",n).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(o=u.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=g,await A.from("matches").update({game_state:o}).eq("id",n)}let _=!1,M=null,L=!1;const F=new Set,P=new Set;function j(T){var k,E;try{A.removeChannel(C)}catch{}const u=o[i+"Score"]||0,x=o[a+"Score"]||0;let h,y;T.winner_id?(h=T.winner_id===d.profile.id,y=!1):T.forfeit?(h=u>x,y=!1):(y=u===x,h=u>x),(k=document.getElementById("pvp-end-overlay"))==null||k.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":h?"🏆":"😞",w=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${w}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${u} – ${x} ${o[a+"Name"]}</div>
      ${T.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(E=b.querySelector("#pvp-end-home"))==null||E.addEventListener("click",()=>{b.remove(),Oe(e),l("home")})}const C=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},T=>{const u=T.new;try{if(u.status==="finished"||u.forfeit){if(_)return;_=!0,M&&(clearInterval(M),M=null),u.game_state&&(o=u.game_state),j(u);return}if(u.game_state){const x=o;o=u.game_state;const h=o._lastGC;if(h&&h.seq&&!P.has(h.seq)&&(P.add(h.seq),h.by!==i)){xe(h.type,h.by,()=>B());return}const y=x[i+"Score"]||0,b=x[a+"Score"]||0,v=o[i+"Score"]||0,w=o[a+"Score"]||0,I=v>y,k=w>b;if((I||k)&&!F.has(o.round)){F.add(o.round);const E=[...o.log||[]].reverse().find(G=>G.isGoal),S=((E==null?void 0:E.homePlayers)||[]).map(G=>({name:G.name,note:G.note,portrait:G.portrait,job:G.job}));he(S,v,w,I,()=>B());return}B()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function D(T){Object.assign(o,T),o.lastActionAt=new Date().toISOString();const{error:u}=await A.from("matches").update({game_state:o}).eq("id",n);u&&c("Erreur de synchronisation","error");try{B()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function ne(){if(_)return;_=!0,M&&(clearInterval(M),M=null);const T=r?m.away_id:m.home_id,u=r?"p2":"p1",x=r?"p1":"p2",h={...o,[u+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:T,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{A.removeChannel(C)}catch{}setTimeout(()=>{Oe(e),l("home")},800)}const ue={BOOST_STAT:({value:T=1,count:u=1,roles:x=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!x.length||x.includes(w)).flatMap(([w,I])=>I.filter(k=>!k.used).map(k=>({...k,_line:w})));if(!v.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}te(v,u,`Choisir ${u} joueur(s) à booster (+${T})`,w=>{w.forEach(I=>{const k=(b[I._line]||[]).find(E=>E.cardId===I.cardId);k&&(k.boost=(k.boost||0)+T,h.log.push({text:`⚡ +${T} sur ${k.name}`,type:"info"}))}),h[i+"Team"]=b,y(h)})},DEBUFF_STAT:({value:T=1,count:u=1,roles:x=[],target:h="ai"},y,b)=>{const v=h==="home"?i:a,w=y[v+"Team"],I=h==="home"?"allié":"adverse",k=Object.entries(w).filter(([E])=>!x.length||x.includes(E)).flatMap(([E,S])=>S.filter(G=>!G.used).map(G=>({...G,_line:E})));if(!k.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),b(y);return}te(k,u,`Choisir ${u} joueur(s) ${I}(s) (-${T})`,E=>{E.forEach(S=>{const G=(w[S._line]||[]).find(Q=>Q.cardId===S.cardId);G&&(G.boost=(G.boost||0)-T,y.log.push({text:`🎯 -${T} sur ${G.name}`,type:"info"}))}),y[v+"Team"]=w,b(y)})},GRAY_PLAYER:({count:T=1,roles:u=[],target:x="ai"},h,y)=>{const b=x==="home"?i:a,v=h[b+"Team"],w=x==="home"?"allié":"adverse",I=Object.entries(v).filter(([k])=>!u.length||u.includes(k)).flatMap(([k,E])=>E.filter(S=>!S.used).map(S=>({...S,_line:k})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${w}`,type:"info"}),y(h);return}te(I,T,`Choisir ${T} joueur(s) ${w}(s) à exclure`,k=>{k.forEach(E=>{const S=(v[E._line]||[]).find(G=>G.cardId===E.cardId);S&&(S.used=!0,h.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),h[b+"Team"]=v,y(h)})},REVIVE_PLAYER:({count:T=1,roles:u=[]},x,h)=>{const y=x[i+"Team"],b=Object.entries(y).filter(([v])=>!u.length||u.includes(v)).flatMap(([v,w])=>w.filter(I=>I.used).map(I=>({...I,_line:v})));if(!b.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(x);return}te(b,T,`Choisir ${T} joueur(s) à ressusciter`,v=>{v.forEach(w=>{const I=(y[w._line]||[]).find(k=>k.cardId===w.cardId);I&&(I.used=!1,x.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),x[i+"Team"]=y,h(x)})},REMOVE_GOAL:({},T,u)=>{const x=a+"Score";T[x]>0?(T[x]--,T.log.push({text:"🚫 Dernier but annulé !",type:"info"})):T.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(T)},ADD_GOAL_DRAW:({},T,u)=>{T[i+"Score"]===T[a+"Score"]?(T[i+"Score"]++,T.log.push({text:"🎯 But bonus !",type:"info"})):T.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(T)},ADD_SUB:({value:T=1},u,x)=>{u.maxSubs=(u.maxSubs||3)+T,u.log.push({text:`🔄 +${T} remplacement(s)`,type:"info"}),x(u)},CUSTOM:({},T,u)=>u(T)};function te(T,u,x,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function v(){var I,k;const w=T.map(E=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[E._line]||"#555",G=we(E,E._line)+(E.boost||0),le=b.find(N=>N.cardId===E.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Z=E.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${E.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${le};background:${S};overflow:hidden;cursor:pointer;${Z}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${E.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${G}</div>
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
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(E=>{E.addEventListener("click",()=>{const S=E.dataset.cid,G=T.find(le=>le.cardId===S),Q=b.findIndex(le=>le.cardId===S);G&&(Q>-1?b.splice(Q,1):b.length<u&&b.push(G),v())})}),(k=y.querySelector("#pp-confirm"))==null||k.addEventListener("click",()=>{y.remove(),h(b)})}v(),document.body.appendChild(y)}async function z(T,u){const h=(o["gcCardsFull_"+i]||[]).find(w=>w.id===T),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(w=>{var I;return w.name===u||((I=w.name)==null?void 0:I.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b=[...o["usedGc_"+i]||[],T],v={type:u,by:i,seq:(o._gcAnimSeq||0)+1};P.add(v.seq),xe(u,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=ue[y.effect_type];if(I){const k={...o};I(y.effect_params||{},k,async E=>{E["usedGc_"+i]=b,E._lastGC=v,E._gcAnimSeq=v.seq,await D(E)});return}}const w={...o};switch(u){case"Remplacement+":w.maxSubs=(w.maxSubs||3)+1,w.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";w[I]>0&&(w[I]--,w.log.push({text:"🚫 But annulé",type:"info"}));break}}w["usedGc_"+i]=b,w._lastGC=v,w._gcAnimSeq=v.seq,await D(w)})}function K(T,u){const x="usedCardIds_"+T,h=new Set(o[x]||[]);u.forEach(y=>h.add(y)),o[x]=[...h]}function ie(){for(const T of["p1","p2"]){const u=new Set(o["usedCardIds_"+T]||[]),x=o[T+"Team"];if(x)for(const h of["GK","DEF","MIL","ATT"])(x[h]||[]).forEach(y=>{y.used=u.has(y.cardId)})}}function B(){var Fe,Qe,mt,xt,yt,ht;if(o.phase==="reveal")return X();if(o.phase==="midfield")return de();if(o.phase==="finished")return He();const T=o[i+"Team"],u=o[a+"Team"];ie();const x=o[i+"Score"],h=o[a+"Score"],y=o[i+"Name"],b=o[a+"Name"],v=o.phase===i+"-attack",w=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],k=I.map(W=>W.cardId),E=window.innerWidth>=700,S=o[i+"Subs"]||[],G=o["usedSubIds_"+i]||[],Q=S.filter(W=>!G.includes(W.cardId)),le=o["gcCardsFull_"+i]||[],Z=o["usedGc_"+i]||[],N=le.filter(W=>!Z.includes(W.id)),U=o.boostOwner===i&&!o.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(W=>(u[W]||[]).some(q=>!q.used)),se=[...T.MIL||[],...T.ATT||[]].filter(W=>!W.used),ce=v&&ee&&se.length===0?[...T.GK||[],...T.DEF||[]].filter(W=>!W.used).map(W=>W.cardId):[];function pe(W,q,oe){var jt,wt;const ae=W._gcDef,me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ae==null?void 0:ae.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ae==null?void 0:ae.color]||"#b06ce0",We=(ae==null?void 0:ae.name)||W.gc_type,Je=(ae==null?void 0:ae.effect)||((jt=Ge[W.gc_type])==null?void 0:jt.desc)||"",et=ae!=null&&ae.image_url?`/manager-wars/icons/${ae.image_url}`:null,St=((wt=Ge[W.gc_type])==null?void 0:wt.icon)||"⚡",Ct=Math.round(oe*.22),bt=Math.round(oe*.22),lt=oe-Ct-bt,vt=We.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}"
        style="box-sizing:border-box;width:${q}px;height:${oe}px;border-radius:10px;border:2px solid ${Ye};background:${me};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function fe(W,q){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${W}px;height:${q}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(q*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(q*.2)}px">⚡</div>
        <div style="font-size:${Math.round(q*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const be=(W,q)=>q?fe(130,175):pe(W,130,175),Se=(W,q)=>q?fe(68,95):pe(W,68,95),Re=E?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Be=v?Ee(i)?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Re};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:w?`<button id="pvp-action" style="${Re};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,Ie=v&&!Ee(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${E?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Q.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Q.map(W=>`<div class="pvp-sub-btn" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(W,E?76:44,E?100:58)}</div>`).join("")}
    </div>`,je=v?"attack":w?"defense":"idle",De=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(T,o[i+"Formation"],je,k,300,300,ce)}
      </div>
    </div>`;function Pe(W){if(W.type==="duel"&&(W.homeTotal!=null||W.aiTotal!=null)){const q=(W.homeTotal||0)>=(W.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(W.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.homePlayers||[]).map(oe=>nt(oe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${q?20:14}px;font-weight:900;color:${q?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${W.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${q?14:20}px;font-weight:900;color:${q?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${W.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.aiPlayers||[]).map(oe=>nt(oe)).join("")}
            </div>
          </div>
          ${W.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${W.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${W.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${W.type==="goal"?700:400};padding:3px 2px">${W.text||""}</div>`}const Ue=(()=>{var q,oe;if(w&&((q=o.pendingAttack)!=null&&q.players)){const ae=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${b} ATTAQUE — Défendez !</div>
          ${it((ae.players||[]).map(me=>({...me,used:!1})),"#ff6b6b",ae.total)}
        </div>`}if(v&&((oe=o.pendingAttack)!=null&&oe.players)){const ae=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ae.players||[]).map(me=>({...me,used:!1})),"#00ff88",ae.total)}
        </div>`}const W=(o.log||[]).slice(-1)[0];return W?'<div style="padding:2px 4px">'+Pe(W)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
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
              ${Be}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${N.map(W=>be(W,!1)).join("")}
            ${U?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(T,o[i+"Formation"],je,k,300,300,ce)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${N.map(W=>Se(W,!1)).join("")}
            ${U?Se(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&Q.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&Q.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&Q.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&Q.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${Q.length}</div>
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
          <div>${Be}${Ie}</div>
        </div>
      </div>`;function Ce(){const W=e.querySelector(".match-screen");if(!W)return;const q=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);W.style.height=q+"px",W.style.minHeight=q+"px",W.style.maxHeight=q+"px",W.style.overflow="hidden";const oe=e.querySelector("#mobile-action-bar"),ae=e.querySelector("#mobile-play-area");oe&&ae&&(ae.style.paddingBottom=oe.offsetHeight+"px")}if(Ce(),setTimeout(Ce,120),setTimeout(Ce,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ce),window.visualViewport.addEventListener("scroll",Ce)),window.addEventListener("resize",Ce)),function(){const q=e.querySelector(".terrain-wrapper svg");q&&(q.removeAttribute("width"),q.removeAttribute("height"),q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",q.setAttribute("viewBox","-26 -26 352 352"),q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(W=>{W.addEventListener("click",()=>{if(!v&&!w)return;const q=W.dataset.cardId,oe=W.dataset.role,ae=(T[oe]||[]).find(Je=>Je.cardId===q);if(!ae||ae.used)return;const me=ce.includes(q);if(v&&!["MIL","ATT"].includes(oe)&&!me)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],We=Ye.findIndex(Je=>Je.cardId===q);We>-1?Ye.splice(We,1):Ye.length<3&&Ye.push({...ae,_role:oe}),B()})}),e.querySelectorAll(".match-used-hit").forEach(W=>{W.addEventListener("click",()=>O(W.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(W=>{W.addEventListener("click",()=>O())}),(Fe=e.querySelector("#pvp-sub-open"))==null||Fe.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(W=>{W.addEventListener("click",()=>ye(W.dataset.gcId,W.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>R()),(mt=e.querySelector("#pvp-action"))==null||mt.addEventListener("click",W=>{v?W.currentTarget.dataset.pass==="1"||!Ee(i)?ge():re():w&&Ae()}),(xt=e.querySelector("#pvp-quit"))==null||xt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ne()}),(yt=e.querySelector("#pvp-view-opp"))==null||yt.addEventListener("click",()=>H()),(ht=e.querySelector("#pvp-toggle-history"))==null||ht.addEventListener("click",()=>J()),M&&(clearInterval(M),M=null),(v||w)&&!_){let W=30,q=!1;const oe=()=>document.getElementById("pvp-timer"),ae=()=>{oe()&&(oe().textContent=W+"s",oe().style.color=q?"#ff4444":"#fff")};ae(),M=setInterval(()=>{W--,W<0?q?(clearInterval(M),M=null,v&&!Ee(i)?ge():ne()):(q=!0,W=15,ae()):ae()},1e3)}}function X(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await D({phase:"midfield"})},5e3)}let Y=!1;function de(){if(Y)return;const T=o[i+"Team"].MIL||[],u=o[a+"Team"].MIL||[];function x(N){return N.reduce((U,ee)=>U+we(ee,"MIL"),0)}function h(N){let U=0;for(let ee=0;ee<N.length-1;ee++){const se=Ze(N[ee],N[ee+1]);se==="#00ff88"?U+=2:se==="#FFD700"&&(U+=1)}return U}const y=x(T)+h(T),b=x(u)+h(u),v=y>=b;function w(N,U,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${U}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${N.map((se,ce)=>{const pe=ce<N.length-1?Ze(se,N[ce+1]):null,fe=!pe||pe==="#ff3333"||pe==="#cc2222",be=pe==="#00ff88"?"+2":pe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ce}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...se,note:we(se,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ce<N.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":pe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${pe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${pe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(N)} + ${h(N)} liens = <b style="color:#fff">${x(N)+h(N)}</b>
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
      ${w(u,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(N,U)=>e.querySelectorAll(N).forEach((ee,se)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},U+se*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((N,U)=>setTimeout(()=>{N.style.opacity="1"},U*70)),900),setTimeout(()=>{const N=e.querySelector("#pvp-vs");N&&(N.style.opacity="1",N.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(U=>U.style.opacity="1")},1250);function k(N,U,ee){const se=document.getElementById(N);if(!se)return;const ce=performance.now(),pe=fe=>{const be=Math.min(1,(fe-ce)/ee);se.textContent=Math.round(U*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(pe):se.textContent=U};requestAnimationFrame(pe)}setTimeout(()=>{k("pvp-score-me",y,800),k("pvp-score-opp",b,800)},1500);const E=o.p1Team.MIL||[],S=o.p2Team.MIL||[],G=x(E)+h(E),Q=x(S)+h(S),le=G>=Q?"p1":"p2";let Z=o.boostValue;Z==null&&(Z=si(),o.boostValue=Z,o.boostOwner=le,o.boostUsed=!1),Y=!0,setTimeout(()=>{const N=e.querySelector("#duel-row-"+(v?"me":"opp")),U=e.querySelector("#duel-row-"+(v?"opp":"me")),ee=document.getElementById("pvp-score-me"),se=document.getElementById("pvp-score-opp"),ce=v?ee:se,pe=v?se:ee;ce&&(ce.style.fontSize="80px",ce.style.color=v?"#FFD700":"#ff6b6b",ce.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),pe&&(pe.style.opacity="0.25"),setTimeout(()=>{N&&(N.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",N.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),U&&(U.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Re;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const be=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Z+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Se,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(Re=document.getElementById("pvp-start-match"))==null||Re.addEventListener("click",async()=>{const Be=le;await D({phase:Be+"-attack",attacker:Be,round:1,boostValue:Z,boostUsed:!1,boostOwner:Be})})},600)},700)},2800)}function he(T,u,x,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(E,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let I=!1;const k=()=>{I||(I=!0,b.remove(),setTimeout(()=>y(),50))};b.addEventListener("click",k),setTimeout(k,3500)}function xe(T,u,x){var Z,N;const h=(o.gcDefs||[]).find(U=>{var ee;return U.name===T||((ee=U.name)==null?void 0:ee.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",v=(h==null?void 0:h.name)||T,w=(h==null?void 0:h.effect)||((Z=Ge[T])==null?void 0:Z.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,k=((N=Ge[T])==null?void 0:N.icon)||"⚡",S=u===i?"Vous":o[u+"Name"]||"Adversaire",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",G.innerHTML=`
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(G);let Q=!1;const le=()=>{Q||(Q=!0,G.remove(),setTimeout(()=>x&&x(),50))};G.addEventListener("click",le),setTimeout(le,3e3)}function ye(T,u){var G,Q,le,Z;const h=(o["gcCardsFull_"+i]||[]).find(N=>N.id===T),y=h==null?void 0:h._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((G=Ge[u])==null?void 0:G.desc)||"Carte spéciale.",k=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,E=((Q=Ge[u])==null?void 0:Q.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
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
      </div>`,document.body.appendChild(S),(le=S.querySelector("#pvp-gc-back"))==null||le.addEventListener("click",()=>S.remove()),(Z=S.querySelector("#pvp-gc-use"))==null||Z.addEventListener("click",()=>{S.remove(),z(T,u)})}function R(){var h;const T=o[i+"Team"],u=Object.entries(T).flatMap(([y,b])=>(b||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!u.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(y=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=we(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#bp-close"))==null||h.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const b=y.dataset.cid,v=u.find(I=>I.cardId===b);if(!v)return;const w=(T[v._line]||[]).find(I=>I.cardId===b);w&&(w.boost=(w.boost||0)+o.boostValue),x.remove(),await D({[i+"Team"]:T,boostUsed:!0})})})}function O(T=null){var Q,le;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const x=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){c(`Maximum ${y} remplacements atteint`,"warning");return}const b=Object.entries(x).flatMap(([Z,N])=>(N||[]).filter(U=>U.used).map(U=>({...U,_line:Z}))),v=(o[i+"Subs"]||[]).filter(Z=>!h.includes(Z.cardId));if(!b.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){c("Aucun remplaçant disponible","warning");return}let w=Math.max(0,b.findIndex(Z=>Z.cardId===T));const I=((Q=b[w])==null?void 0:Q._line)||((le=b[w])==null?void 0:le.job);let k=Math.max(0,v.findIndex(Z=>Z.job===I)),E=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function G(){var pe,fe,be,Se,Re,Be;const Z=b[w],N=v[k],U=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(U*1.35),se=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${se(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${N?Ve({...N,used:!1,boost:0},U,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${se(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${se(w===0)}" ${w===0?"disabled":""}>▲</button>
          <div>${Z?Ve({...Z,used:!1,boost:0},U,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${se(w>=b.length-1)}" ${w>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${w+1}/${b.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(pe=S.querySelector("#psub-close"))==null||pe.addEventListener("click",()=>S.remove()),(fe=S.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{w>0&&(w--,G())}),(be=S.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{w<b.length-1&&(w++,G())}),(Se=S.querySelector("#pin-up"))==null||Se.addEventListener("click",()=>{k>0&&(k--,G())}),(Re=S.querySelector("#pin-down"))==null||Re.addEventListener("click",()=>{k<v.length-1&&(k++,G())});const ce=(Ie,Le,je,De)=>{const Pe=S.querySelector("#"+Ie);if(!Pe)return;let Ue=0;Pe.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Pe.addEventListener("touchend",Ke=>{const Ce=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Ce)<30)return;const Fe=Le();Ce<0&&Fe<De-1?(je(Fe+1),G()):Ce>0&&Fe>0&&(je(Fe-1),G())},{passive:!0})};ce("pin-panel",()=>k,Ie=>k=Ie,v.length),ce("pout-panel",()=>w,Ie=>w=Ie,b.length),(Be=S.querySelector("#psub-confirm"))==null||Be.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),E)return;E=!0;const Le=b[w],je=v[k];if(!Le||!je)return;const De=Le._line,Pe=(x[De]||[]).findIndex(Ce=>Ce.cardId===Le.cardId);if(Pe===-1){c("Erreur : joueur introuvable","error"),S.remove();return}const Ue={...je,_line:De,position:Le.position,used:!1,boost:0};x[De].splice(Pe,1,Ue);const Ke=[...h,je.cardId];S.remove(),V(Le,je,async()=>{await D({[i+"Team"]:x,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:Ke})})})}document.body.appendChild(S),G()}function V(T,u,x){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(I,k,E)=>`<div style="text-align:center">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const w=()=>{v||(v=!0,y.remove(),setTimeout(()=>x(),50))};y.addEventListener("click",w),setTimeout(w,2200)}function H(){var u;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",T.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(T),(u=T.querySelector("#pvp-opp-close"))==null||u.addEventListener("click",()=>T.remove())}function J(){var x;const T=o.log||[],u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",u.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${T.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...T].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>u.remove())}async function ge(){if(o.phase!==i+"-attack")return;const T=i==="p1"?"p2":"p1",u=(o.round||0)+1,x=[...o.log||[]];x.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Te(o),y=Ee(T),b=h||!y?"finished":T+"-attack";await D({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:b,attacker:T,round:u,log:x}),b==="finished"&&await Ne(o)}async function re(){const T=o[i+"Team"],u=!["GK","DEF","MIL","ATT"].some(b=>(o[a+"Team"][b]||[]).some(v=>!v.used)),x=(o["selected_"+i]||[]).map(b=>{const v=(T[b._role]||[]).find(G=>G.cardId===b.cardId)||b,w=u&&["GK","DEF"].includes(b._role),I=T[b._role]||[],k=I.findIndex(G=>G.cardId===b.cardId),E=ot(I.length),S=k>=0?E[k]:v._col??1;return{...v,_line:b._role,_col:S,...w?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!x.length)return;const h=Pt(x,o.modifiers[i]||{});K(i,x.map(b=>b.cardId)),x.forEach(b=>{const v=(T[b._role]||[]).find(w=>w.cardId===b.cardId);v&&(v.used=!0)}),o["selected_"+i]=[],B();const y=[...o.log||[]];if(u){const b=(o[i+"Score"]||0)+1,v=x.map(S=>({name:S.name,note:we(S,S._line||"ATT"),portrait:ze(S),job:S.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:h.total,aiTotal:0});const w=(o.round||0)+1,I=i==="p1"?"p2":"p1",k={...o,[i+"Team"]:T,[i+"Score"]:b},E=Te(k);F.add(w),he(v,b,o[a+"Score"]||0,!0,async()=>{await D({[i+"Team"]:T,[i+"Score"]:b,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:E?"finished":I+"-attack",attacker:I,round:w,log:y}),E&&await Ne({...o,[i+"Score"]:b})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await D({[i+"Team"]:T,[a+"Team"]:o[a+"Team"],pendingAttack:{...h,players:x,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:y})}async function Ae(){const T=o[i+"Team"],u=(o["selected_"+i]||[]).map(Z=>{const N=(T[Z._role]||[]).find(pe=>pe.cardId===Z.cardId)||Z,U=T[Z._role]||[],ee=U.findIndex(pe=>pe.cardId===Z.cardId),se=ot(U.length),ce=ee>=0?se[ee]:N._col??1;return{...N,_line:Z._role,_col:ce}}),x=Ot(u,o.modifiers[i]||{});K(i,u.map(Z=>Z.cardId)),u.forEach(Z=>{const N=(T[Z._role]||[]).find(U=>U.cardId===Z.cardId);N&&(N.used=!0)}),o["selected_"+i]=[],B();const h=Ht(o.pendingAttack.total,x.total,o.modifiers[i]||{}),y=o.pendingAttack.side,b=h==="attack"||(h==null?void 0:h.goal),v=y==="p1"?"p2":"p1",w=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(Z=>({name:Z.name,note:we(Z,Z._line||"ATT"),portrait:ze(Z),job:Z.job})),k=[...o.log||[]];k.push({type:"duel",isGoal:b,homeScored:b&&y===i,text:b?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${x.total})`,homePlayers:I,aiPlayers:u.map(Z=>({name:Z.name,note:we(Z,Z._line||"DEF"),portrait:ze(Z),job:Z.job})),homeTotal:o.pendingAttack.total,aiTotal:x.total});const E=b?(o[y+"Score"]||0)+1:o[y+"Score"]||0,S={...o,[i+"Team"]:T,[y+"Score"]:E},G=Te(S),Q=G?"finished":v+"-attack",le=async()=>{await D({[i+"Team"]:T,[a+"Team"]:o[a+"Team"],[y+"Score"]:E,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:Q,attacker:v,round:w,log:k}),(Q==="finished"||G)&&await Ne({...o,[y+"Score"]:E})};if(b){const Z=y===i,N=Z?E:o[i+"Score"]||0,U=Z?o[a+"Score"]||0:E;F.add(w),he(I,N,U,Z,le)}else await le()}function ke(T){return["MIL","ATT"].some(u=>(T[u]||[]).some(x=>!x.used))}function $e(T){return["GK","DEF","MIL","ATT"].some(u=>(T[u]||[]).some(x=>!x.used))}function _e(T){return $e(T)&&!ke(T)}function Ee(T){const u=o[T+"Team"],x=o[(T==="p1"?"p2":"p1")+"Team"];return!!(ke(u)||!$e(x)&&_e(u))}function Te(T){const u=["MIL","ATT"].some(k=>(T.p1Team[k]||[]).some(E=>!E.used)),x=["MIL","ATT"].some(k=>(T.p2Team[k]||[]).some(E=>!E.used)),h=$e(T.p1Team),y=$e(T.p2Team);return!u&&!(!y&&h)&&(!x&&!(!h&&y))}function qe(T){const u=T.p1Score||0,x=T.p2Score||0;return u===x?null:u>x?m.home_id:m.away_id}async function Ne(T){try{await A.from("matches").update({status:"finished",winner_id:qe(T),home_score:T.p1Score||0,away_score:T.p2Score||0}).eq("id",n)}catch(u){console.error("[PvP] finishMatch:",u)}}function He(){var y;const T=o[i+"Score"],u=o[a+"Score"],x=T>u,h=T===u;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${T} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{A.removeChannel(C)}catch{}Oe(e),l("home")})}B()}const yn="2026.06.28-1118";async function bi(e,{state:t,navigate:n,toast:r}){var s,d;const p=t.profile;p&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),n(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>n("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){wn(n);return}if(c==="match-random"){n("match",{matchMode:"random"});return}if(c==="match-friend"){n("friends");return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await A.auth.signOut(),window.location.reload()}),qi(t,r),vn(t,r,n),Bi(t,r,n))}async function Bi(e,t,n){const r=document.getElementById("ongoing-match-banner");if(!r)return;const p=e.profile.id,{data:s}=await A.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${p},away_id.eq.${p}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){r.innerHTML="";return}const d=s.map(c=>c.home_id===p?c.away_id:c.home_id).filter(Boolean);let l={};if(d.length){const{data:c}=await A.from("users").select("id, pseudo, club_name").in("id",d);(c||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}r.innerHTML=s.map(c=>{const i=c.home_id===p?c.away_id:c.home_id,a=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${c.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${a}</div>
        </div>
        <button data-resume="${c.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${c.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),r.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",()=>{const i=document.getElementById("page-content")||document.getElementById("app");xn(i,{state:e,navigate:n,toast:t},c.dataset.resume)})}),r.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{bn(async()=>{await hn(c.dataset.abandon,c.dataset.opp,p),t("Match abandonné (défaite 3-0)","info"),Bi(e,t,n)})})})}async function hn(e,t,n){const{data:r}=await A.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!r)return;const p=r.home_id===n,s=p?0:3,d=p?3:0,l=r.game_state||{};l.p1Score=s,l.p2Score=d,l.phase="finished",l.forfeit=!0,await A.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:d,game_state:l}).eq("id",e)}function bn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function vn(e,t,n){var l,c,i,a;const r=document.getElementById("match-invite-banner");if(!r)return;const{data:p}=await A.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){r.innerHTML="";return}const s=((l=p.inviter)==null?void 0:l.club_name)||((c=p.inviter)==null?void 0:c.pseudo)||"?",d=p.inviter_id;r.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{r.innerHTML="",n("match",{matchMode:"friend",friendId:d,friendName:s})}),(a=document.getElementById("match-inv-decline"))==null||a.addEventListener("click",async()=>{await A.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),r.innerHTML="",t("Invitation refusée","info")})}async function qi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:r,error:p}=await A.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(r!=null&&r.length)){n.innerHTML="";return}const s=r.length,d=r.slice(0,2).map(c=>{var i;return((i=c.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";n.innerHTML=`
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
  `,document.body.appendChild(n);const r=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",r),n.addEventListener("click",p=>{p.target===n&&r()}),n.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{r(),e("match",{matchMode:p.dataset.mode})})})}const Di={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Tt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ft=["GK","DEF","MIL","ATT"],_n=["Tous","GK","DEF","MIL","ATT"],$n={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},ci={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Gi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function zt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,g;const n=e.player;if(!n)return"";const r=n.job||"ATT",p=Tt[r],s=Di[n.rarity]||"#ccc",d=zt(n,r),l=n.job2?zt(n,n.job2):null,c=n.job2?Tt[n.job2]:null,i=Gi(n),a=ci[n.country_code]||n.country_code||"";return`
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
        ${(f=n.clubs)!=null&&f.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=n.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function vi(e){const t=e.job||"ATT",n=zt(e,t),r=ci[e.country_code]||e.country_code||"";return`
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
  </div>`}async function kn(e,t){const{state:n,navigate:r,toast:p,openModal:s,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await A.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(R=>R.card_type==="player"&&R.player),a=(l||[]).filter(R=>R.card_type==="game_changer"),f=(l||[]).filter(R=>R.card_type==="formation"),{data:g}=await A.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(g||[]).forEach(R=>{m[R.name]=R});const $=Object.keys(oi),o=Object.keys(Ge),_={};i.forEach(R=>{const O=R.player.id;_[O]=(_[O]||0)+1}),new Set(Object.keys(_).map(R=>String(R)));const M=new Set(f.map(R=>R.formation)),L=new Set(a.map(R=>R.gc_type));let F="player",P="Tous",j="",C=!1;function D(){return[...i].sort((R,O)=>{const V=Ft.indexOf(R.player.job),H=Ft.indexOf(O.player.job);return V!==H?V-H:(R.player.surname_encoded||"").localeCompare(O.player.surname_encoded||"")})}function ne(){return[...c||[]].sort((R,O)=>{const V=Ft.indexOf(R.job),H=Ft.indexOf(O.job);return V!==H?V-H:(R.surname_encoded||"").localeCompare(O.surname_encoded||"")})}function ue(){return D().filter(R=>{const O=R.player,V=P==="Tous"||O.job===P,H=!j||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(j);return V&&H})}function te(){return ne().filter(R=>{const O=P==="Tous"||R.job===P,V=!j||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(j);return O&&V})}e.innerHTML=`
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
  </div>`;function z(){const R=document.getElementById("col-filters");R&&(F==="player"?(R.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${j}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${_n.map(O=>`
            <button class="filter-btn" data-job="${O}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${O===P?"var(--green)":"var(--gray-200)"};
                background:${O===P?"var(--green)":"#fff"};
                color:${O===P?"#fff":"var(--gray-600)"}">
              ${O}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${C?"var(--yellow)":"var(--gray-200)"};
              background:${C?"var(--yellow)":"#fff"};
              color:${C?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${C?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",O=>{j=O.target.value.toLowerCase(),K()}),e.querySelectorAll(".filter-btn").forEach(O=>{O.addEventListener("click",()=>{P=O.dataset.job,z(),K()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{C=!C,z(),K()})):(R.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${C?"var(--yellow)":"var(--gray-200)"};
              background:${C?"var(--yellow)":"#fff"};
              color:${C?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${C?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{C=!C,z(),K()})))}function K(){const R=document.getElementById("col-grid");R&&(F==="player"?he(R):F==="formation"?xe(R):ye(R))}function ie(R,O,V,H,J){J=J||"#7a28b8";const ge=document.getElementById("col-grid"),re=document.getElementById("col-big");if(!ge||!re)return;var Ae=0;function ke(){re.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+O(R[Ae])+"</div>";var $e=re.querySelector("[data-card-id],[data-form-id],[data-gc-id]");$e&&$e.addEventListener("click",function(){H(R[Ae])}),requestAnimationFrame(function(){var _e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!_e||!re)){var Ee=re.clientHeight-8,Te=re.clientWidth-24,qe=_e.offsetHeight,Ne=_e.offsetWidth;if(qe>0&&Ne>0&&Ee>40){var He=Math.min(Ee/qe,Te/Ne,1);_e.style.transform="scale("+He.toFixed(3)+")",_e.style.transformOrigin="top center"}}}),ge.innerHTML=R.map(function(_e,Ee){return'<div class="col-mini-item" data-idx="'+Ee+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(Ee===Ae?J:"transparent")+';transition:border-color .15s;overflow:hidden">'+V(_e,Ee===Ae)+"</div>"}).join(""),ge.querySelectorAll(".col-mini-item").forEach(function(_e){_e.addEventListener("click",function(){Ae=Number(_e.dataset.idx),ke(),_e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function B(R){var O=.54,V=Math.round(140*O),H=Math.round(310*O),J;if(!R||R._fake){var ge=R?R.player:null;if(!ge)return"";J=vi(ge)}else J=Vt(R,"");return'<div style="width:'+V+"px;height:"+H+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+O+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+J+"</div></div>"}function X(R,O,V){O=O||100,V=V||140;var H=Mt[R]||{},J={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ge=Math.max(3,Math.round(O*.06)),re=Object.entries(H).map(function(ke){var $e=ke[0],_e=ke[1],Ee=$e.replace(/\d+$/,""),Te=J[Ee]||"#888",qe=Math.round(_e.x*O),Ne=Math.round(_e.y*V);return'<circle cx="'+qe+'" cy="'+Ne+'" r="'+ge+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ae=Math.max(1,Math.round(O/50));return'<svg viewBox="0 0 '+O+" "+V+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+O+'" height="'+V+'" fill="#1A6B3C"/><rect x="'+Math.round(O*.2)+'" y="'+Math.round(V*.02)+'" width="'+Math.round(O*.6)+'" height="'+Math.round(V*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/><line x1="0" y1="'+Math.round(V*.5)+'" x2="'+O+'" y2="'+Math.round(V*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><ellipse cx="'+Math.round(O*.5)+'" cy="'+Math.round(V*.5)+'" rx="'+Math.round(O*.18)+'" ry="'+Math.round(V*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><rect x="'+Math.round(O*.2)+'" y="'+Math.round(V*.82)+'" width="'+Math.round(O*.6)+'" height="'+Math.round(V*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/>'+re+"</svg>"}function Y(R,O,V){var H=V>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+V+"</div>":"",J=O?'data-form-id="'+O.id+'"':"",ge=R.length>7?14:R.length>5?16:19,re=!!O;return"<div "+J+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(re?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(re?"":"filter:grayscale(1);opacity:0.5")+'">'+H+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(re?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ge+"px;font-weight:900;color:"+(re?"#1A6B3C":"#aaa")+';line-height:1">'+R+'</div></div><div style="flex:1;overflow:hidden;background:'+(re?"#1A6B3C":"#ccc")+'">'+X(R,140,220)+"</div></div>"}function de(R,O){var V=.54,H=Math.round(140*V),J=Math.round(305*V),ge=Math.round(J*.22),re=J-ge,Ae=R.length>7?5:7,ke=X(R,H,re),$e=O?"1.5px solid #2a7a40":"1px solid #ddd",_e=O?"":"filter:grayscale(1);opacity:0.45;",Ee=O?"#1A6B3C":"#bbb",Te="#fff";return'<div style="width:'+H+"px;height:"+J+"px;border-radius:6px;border:"+$e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+_e+'"><div style="height:'+ge+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ae+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(H-4)+'px">'+R+'</span></div><div style="height:'+re+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div>"}function he(R){if(C){const O=te();if(!O.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const V=O.map(H=>i.find(J=>J.player.id===H.id)||{_fake:!0,player:H,id:"fake-"+H.id});ie(V,H=>H._fake?vi(H.player):Vt(H,""),H=>H._fake?B({player:H.player,id:"x",_fake:!0}):B(H),H=>{H._fake||wi(H,i,_,t)},"#1A6B3C")}else{const O=ue();if(!O.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const V={},H=[];O.forEach(J=>{V[J.player.id]||(V[J.player.id]=!0,H.push(J))}),ie(H,J=>{const ge=_[J.player.id]||1,re=ge>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ge}</div>`:"",ke=i.filter($e=>$e.player.id===J.player.id&&$e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(J,re+ke)},J=>B(J),J=>wi(J,i,_,t),"#1A6B3C")}}function xe(R){const O=C?$:[...M];if(!O.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const V=O.map(H=>({formation:H,card:f.find(J=>J.formation===H)||null,owned:M.has(H)}));ie(V,({formation:H,card:J,owned:ge})=>Y(H,ge?J:null,ge?f.filter(re=>re.formation===H).length:0),({formation:H,owned:J})=>de(H,J),({card:H,owned:J})=>{J&&H&&Tn(H,f,t,s)},"#1A6B3C")}function ye(R){const O=Object.keys(m),V=C?O.length?O:o:[...L];if(!V.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const H=V.map(J=>({type:J,gc:Ge[J]||{icon:"⚡",desc:""},def:m[J]||null,owned:L.has(J),card:a.find(ge=>ge.gc_type===J)||null}));ie(H,({type:J,gc:ge,def:re,owned:Ae,card:ke})=>{const $e=Ae?a.filter(x=>x.gc_type===J).length:0,_e=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",Ee=(re==null?void 0:re.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#b06ce0",light_blue:"#00d4ef"},Ne=Te[re==null?void 0:re.color]||Te.purple,He=qe[re==null?void 0:re.color]||qe.purple,T=(re==null?void 0:re.effect)||ge.desc||"",u=re!=null&&re.image_url?`/manager-wars/icons/${re.image_url}`:null;return Ae&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${J}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${He};background:${Ne};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${He}66;cursor:pointer">
          ${_e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${J.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${J}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${u?`<img src="${u}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ge.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${T.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${J}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ge.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:J,gc:ge,def:re,owned:Ae})=>Ae?(()=>{const ke=Math.round(75.60000000000001),$e=Math.round(310*.54),_e=Math.round($e*.65),Ee=Math.round($e*.18),Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#9b59b6",light_blue:"#00bcd4"},Ne=Te[re==null?void 0:re.color]||Te.purple,He=qe[re==null?void 0:re.color]||qe.purple,T=re!=null&&re.image_url?`/manager-wars/icons/${re.image_url}`:null;return`<div style="width:${ke}px;height:${$e}px;border-radius:8px;background:${Ne};border:1px solid ${He};display:flex;flex-direction:column;overflow:hidden"><div style="height:${Ee}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ke-6}px">${J}</span></div><div style="height:${_e}px;display:flex;align-items:center;justify-content:center">${T?`<img src="${T}" style="max-width:${ke-8}px;max-height:${_e-4}px;object-fit:contain">`:`<span style="font-size:24px">${ge.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((re==null?void 0:re.effect)||ge.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ke=Math.round(75.60000000000001),$e=Math.round(310*.54);return`<div style="width:${ke}px;height:${$e}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ge.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${J}</span></div>`})(),({type:J,owned:ge,def:re})=>{ge&&En(J,re,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(R=>{R.addEventListener("click",()=>{F=R.dataset.tab,P="Tous",j="",C=!1,e.querySelectorAll(".col-tab-btn").forEach(O=>{const V=O.dataset.tab===F;O.style.borderBottomColor=V?"var(--green)":"transparent",O.style.color=V?"var(--green)":"var(--gray-600)"}),z(),K()})}),z(),K()}function En(e,t,n){const r=Ge[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,a=(t==null?void 0:t.effect)||r.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _t=1e3;function Tn(e,t,n,r){var o,_,M;const{state:p,toast:s,closeModal:d,navigate:l,refreshProfile:c}=n,i=e.formation,a={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const L=Mt[i]||{},F=oi[i]||[],P=290,j=360,C=20;function D(ue){const te=L[ue];return te?{x:te.x*P,y:te.y*j}:null}let ne=`<svg width="${P}" height="${j}" viewBox="0 0 ${P} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[ue,te]of F){const z=D(ue),K=D(te);!z||!K||(ne+=`<line x1="${z.x}" y1="${z.y}" x2="${K.x}" y2="${K.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ue of Object.keys(L)){const te=D(ue);if(!te)continue;const z=ue.replace(/\d+/,""),K=a[z]||"#555";ne+=`<circle cx="${te.x}" cy="${te.y}" r="${C}" fill="${K}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,ne+=`<text x="${te.x}" y="${te.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return ne+="</svg>",ne}const g=t.filter(L=>L.formation===i),m=g.length,$=!e.is_for_sale;r(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${m<=0?"disabled":""}>
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(o=document.getElementById("direct-sell-form-btn"))==null||o.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${_t.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const L=g.find(P=>!P.is_for_sale)||g[0];if(!L){s("Aucune carte à vendre","error");return}const{error:F}=await A.from("cards").delete().eq("id",L.id);if(F){s(F.message,"error");return}await A.from("users").update({credits:(p.profile.credits||0)+_t}).eq("id",p.profile.id),await c(),s(`+${_t.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(_=document.getElementById("market-sell-form-btn"))==null||_.addEventListener("click",async()=>{const L=parseInt(document.getElementById("sell-price-form").value);if(!L||L<1){s("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:L}).eq("id",e.id),await A.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:L}),s("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(M=document.getElementById("cancel-sell-form-btn"))==null||M.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),d(),l("collection")})}async function wi(e,t,n,r){var te,z,K,ie,B,X;const{state:p,toast:s,openModal:d,closeModal:l,navigate:c,refreshProfile:i}=r,a=e.player,f=t.filter(Y=>Y.player.id===a.id),g=f.length,m=$n[a.rarity]||1e3,$=a.rarity!=="legende",o=Gi(a),_=zt(a,a.job),M=a.job2?zt(a,a.job2):null,L=Tt[a.job]||"#1A6B3C",F=a.job2?Tt[a.job2]:null,P=Di[a.rarity]||"#ccc",j=ci[a.country_code]||a.country_code||"",C=f.map(Y=>Y.id);let D={};if(C.length){const{data:Y}=await A.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",C).order("transferred_at",{ascending:!0});(Y||[]).forEach(de=>{D[de.card_id]||(D[de.card_id]=[]),D[de.card_id].push(de)})}const ne=Y=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${Y.club_name} <span style="color:var(--gray-600)">(${Y.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${Y.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Y.source==="booster"?"Booster":Y.price?Y.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,ue=C.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${g>1?`(${g} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${f.map((Y,de)=>{const he=D[Y.id]||[];return he.length?`
            <div>
              ${g>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${de+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${he.map(ne).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";d(`${a.firstname} ${a.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${P};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${a.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(a.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${L}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${L}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${_}</text>
            </svg>
            ${M!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${F}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${M}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${a.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${j}</div>
            ${(te=a.clubs)!=null&&te.logo_url?`<img src="${a.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((z=a.clubs)==null?void 0:z.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${P}">${a.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${a.job}${a.job2?" / "+a.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",a.note_g],["DEF",a.note_d],["MIL",a.note_m],["ATT",a.note_a]].map(([Y,de])=>{const he=Tt[Y],xe=Number(de)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${he}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${xe}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${Y}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${g}</div>
        </div>
      </div>
    </div>
    ${ue}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${m.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${$&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(K=document.getElementById("close-detail"))==null||K.addEventListener("click",l),(ie=document.getElementById("direct-sell-btn"))==null||ie.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${a.surname_encoded} pour ${m.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const Y=f.find(he=>!he.is_for_sale)||f[0];if(!Y){s("Aucune carte à vendre","error");return}const{error:de}=await A.from("cards").delete().eq("id",Y.id);if(de){s(de.message,"error");return}await A.from("users").update({credits:(p.profile.credits||0)+m}).eq("id",p.profile.id),await i(),s(`+${m.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(B=document.getElementById("market-sell-btn"))==null||B.addEventListener("click",async()=>{const Y=parseInt(document.getElementById("sell-price").value);if(!Y||Y<1){s("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:Y}).eq("id",e.id),await A.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:Y}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(X=document.getElementById("cancel-sell-btn"))==null||X.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},at={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ut(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Ni(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ri(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function An(e,t=44,n=58){var m;const r=e?Ut(e):null,p=e?Ri(e):null,s=Ni(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",l=at[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,a=Math.round(n*.19),f=Math.round(n*.25),g=n-a-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(m=e==null?void 0:e.clubs)!=null&&m.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qt(e,t){const{state:n,navigate:r,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!d)return;const{data:l,error:c}=await A.from("decks").insert({owner_id:n.profile.id,name:d}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),_i(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>_i(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",d.dataset.name);if(!l||l===d.dataset.name)return;const{error:c}=await A.from("decks").update({name:l}).eq("id",d.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Qt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await A.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:l}=await A.from("decks").delete().eq("id",d.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Qt(e,t)})})}async function _i(e,t,n){const{state:r,toast:p}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("*").eq("id",e).single(),{data:d}=await A.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),l=(d||[]).filter(m=>m.card_type==="player"&&m.player),c=(d||[]).filter(m=>m.card_type==="formation"),i=c.map(m=>m.formation).filter(Boolean),{data:a}=await A.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const g={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:i};(a||[]).forEach(m=>{m.is_starter?g.slots[m.position]=m.card_id:g.subs.includes(m.card_id)||g.subs.push(m.card_id)}),gt(t,g,n)}function gt(e,t,n){var c;const{navigate:r}=n;Gt[t.formation];const p=$i(t.formation),s=p.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Gt),l=t.subs.map(i=>t.playerCards.find(a=>a.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${An(a,44,58)}
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
  </div>`,In(e,t,p,n),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const a=$i(t.formation),f={};a.forEach(g=>{t.slots[g]&&(f[g]=t.slots[g])}),t.slots=f,gt(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Mn(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(a=>a!==i.dataset.removeSub),gt(e,t,n)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{zn(t,e,n)})}function In(e,t,n,r){const p=e.querySelector("#deck-field");if(!p)return;const s=Mt[t.formation]||{},d=Ii(t.formation)||[],l={};for(const M of n){const L=t.slots[M],F=L?t.playerCards.find(P=>P.id===L):null;l[M]=F?F.player:null}const c=300,i=300,a=48,f=64,g=13,m=16,$=38;function o(M){const L=s[M];return L?{x:L.x*c,y:L.y*i}:null}let _="";for(const[M,L]of d){const F=o(M),P=o(L);if(!F||!P)continue;const j=l[M]?{...l[M],club_id:l[M].club_id,country_code:l[M].country_code,rarity:l[M].rarity}:null,C=l[L]?{...l[L],club_id:l[L].club_id,country_code:l[L].country_code,rarity:l[L].rarity}:null,D=Ze(j,C);D==="#ff3333"||D==="#cc2222"?_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,_+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const M of n){const L=o(M);if(!L)continue;const F=l[M],P=M.replace(/\d+/,""),j=at[P]||"#555",C=(L.x-a/2).toFixed(1),D=(L.y-f/2).toFixed(1),ne={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[F==null?void 0:F.rarity]||"#aaa";if(F){const ue=Ut(F),te=Ri(F),z=Ni(F.country_code),K=Number(P==="GK"?F.note_g:P==="DEF"?F.note_d:P==="MIL"?F.note_m:F.note_a)||0,ie=f-g-m;_+=`<defs><clipPath id="dcp-${M}"><rect x="${C}" y="${(L.y-f/2+g).toFixed(1)}" width="${a}" height="${ie}"/></clipPath></defs>`,_+=`<rect x="${C}" y="${D}" width="${a}" height="${f}" rx="5" fill="${j}"/>`,ue&&(_+=`<image href="${ue}" x="${C}" y="${(L.y-f/2+g).toFixed(1)}" width="${a}" height="${ie}" clip-path="url(#dcp-${M})" preserveAspectRatio="xMidYMin slice"/>`),_+=`<rect x="${C}" y="${D}" width="${a}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,_+=`<text x="${L.x.toFixed(1)}" y="${(L.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(F.surname_encoded||"").slice(0,9)}</text>`;const B=(L.y+f/2-m).toFixed(1);_+=`<rect x="${C}" y="${B}" width="${a}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,z&&(_+=`<image href="${z}" x="${(L.x-21).toFixed(1)}" y="${(L.y+f/2-m+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),_+=`<text x="${L.x.toFixed(1)}" y="${(L.y+f/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${K}</text>`,te&&(_+=`<image href="${te}" x="${(L.x+a/2-14).toFixed(1)}" y="${(L.y+f/2-m+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),_+=`<rect x="${C}" y="${D}" width="${a}" height="${f}" rx="5" fill="none" stroke="${ne}" stroke-width="2"/>`}else _+=`<rect x="${C}" y="${D}" width="${a}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,_+=`<text x="${L.x.toFixed(1)}" y="${L.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,_+=`<text x="${L.x.toFixed(1)}" y="${(L.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${P}</text>`;_+=`<rect x="${C}" y="${D}" width="${a}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${M}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-$} ${-$} ${c+$*2} ${i+$*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${_}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(M=>{M.addEventListener("click",()=>Ln(M.dataset.pos,t,e,r))})}function Ln(e,t,n,r){var g,m,$;const{openModal:p,closeModal:s}=r,d=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(o=>o.id===l):null;(g=c==null?void 0:c.player)==null||g.id;const i=new Set;Object.entries(t.slots).forEach(([o,_])=>{var L;if(o===e||!_)return;const M=t.playerCards.find(F=>F.id===_);(L=M==null?void 0:M.player)!=null&&L.id&&i.add(M.player.id)}),t.subs.forEach(o=>{var M;const _=t.playerCards.find(L=>L.id===o);(M=_==null?void 0:_.player)!=null&&M.id&&i.add(_.player.id)});const a=new Set,f=t.playerCards.filter(o=>{const _=o.player;return!(_.job===d||_.job2===d)||i.has(_.id)||a.has(_.id)?!1:(a.add(_.id),!0)});f.sort((o,_)=>{const M=d==="GK"?o.player.note_g:d==="DEF"?o.player.note_d:d==="MIL"?o.player.note_m:o.player.note_a;return(d==="GK"?_.player.note_g:d==="DEF"?_.player.note_d:d==="MIL"?_.player.note_m:_.player.note_a)-M}),p(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var P,j;const _=o.player,M=d==="GK"?_.note_g:d==="DEF"?_.note_d:d==="MIL"?_.note_m:_.note_a,L=Ut(_),F={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[_.rarity];return`<div class="player-option" data-card-id="${o.id}"
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
              ${(P=_.clubs)!=null&&P.logo_url?`<img src="${_.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((j=_.clubs)==null?void 0:j.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${_.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${at[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${F};flex-shrink:0">
            ${M}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(m=document.getElementById("close-selector"))==null||m.addEventListener("click",s),($=document.getElementById("remove-player"))==null||$.addEventListener("click",()=>{delete t.slots[e],s(),gt(n,t,r)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,s(),gt(n,t,r)})})}function zn(e,t,n){var c;const{openModal:r,closeModal:p}=n,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const a=e.playerCards.find(g=>g.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)}),e.subs.forEach(i=>{var f;const a=e.playerCards.find(g=>g.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)});const d=new Set,l=e.playerCards.filter(i=>{var a,f,g;return s.has((a=i.player)==null?void 0:a.id)||d.has((f=i.player)==null?void 0:f.id)?!1:(d.add((g=i.player)==null?void 0:g.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var m;const a=i.player,f=Ut(a),g=a.job==="GK"?a.note_g:a.job==="DEF"?a.note_d:a.job==="MIL"?a.note_m:a.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${at[a.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${a.firstname} ${a.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.job} · ${a.country_code} · ${((m=a.clubs)==null?void 0:m.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${at[a.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),gt(t,e,n)})})}async function Mn(e,t){const{state:n,toast:r,navigate:p}=t,s=e.formationCards.find(c=>c.formation===e.formation),d=(s==null?void 0:s.id)||e.formationCardId;await A.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await A.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,i],a)=>{l.push({deck_id:e.deckId,card_id:i,position:c,is_starter:!0,slot_order:a})}),e.subs.forEach((c,i)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:c}=await A.from("deck_cards").insert(l);if(c){r(c.message,"error");return}}r("Deck enregistré ✅","success"),p("decks")}function $i(e){const t=Gt[e]||Gt["4-4-2"],n=["GK1"];for(let r=1;r<=t.DEF;r++)n.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)n.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)n.push(`ATT${r}`);return n}async function Pi(){const{data:e}=await A.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await A.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(r=>r.booster_id===n.id)}))}function Sn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,p)=>r+Number(p.percentage),0);let n=Math.random()*t;for(const r of e)if(n-=Number(r.percentage),n<=0)return r;return e[e.length-1]}const Oi=()=>Object.keys(Mt),Cn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Zt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function jn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const ki={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Fn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Bn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ei(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function qn(e){var a,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",r=ki[n],p=Fn[t.rarity]||"#ccc",s=Ei(t,n),d=t.job2?Ei(t,t.job2):null,l=t.job2?ki[t.job2]:null,c=jn(t),i=Bn[t.country_code]||t.country_code||"";return`
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
  </div>`}function Hi(e){var p;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const n=((p=Object.entries(t).sort((s,d)=>d[1]-s[1])[0])==null?void 0:p[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Dn(e,{state:t,navigate:n,toast:r}){var d;const p=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Pi()).map(Hi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Cn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(i=>i.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Gn(c,{state:t,toast:r,navigate:n,container:e})}catch(i){r(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const i=s.find(a=>a.id===l.dataset.boosterId);On(i)})})}async function Gn(e,{state:t,toast:n,navigate:r,container:p}){var a;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await Kn()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await A.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((s||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((s||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let c=[];if((a=e.rates)!=null&&a.length)c=await ei(t.profile,e);else{const f=e.type||"player";f==="player"?c=await Ui(t.profile,e.cardCount,e.cost):f==="game_changer"?c=await Ki(t.profile,e.cardCount,e.cost):f==="formation"?c=await Vi(t.profile,e.cost):c=await ei(t.profile,e)}c.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=d.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await A.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Yi(c,e,r)}function Nn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function tt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Rn(e,t){let n;switch(t){case"legende":n=e.filter(r=>r.rarity==="legende"),n.length||(n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),n.length||(n=e.filter(r=>tt(r)>=6));break;case"special":n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),n.length||(n=e.filter(r=>tt(r)>=6));break;case"normal_high":n=e.filter(r=>r.rarity==="normal"&&tt(r)>=6),n.length||(n=e.filter(r=>tt(r)>=6));break;default:n=e.filter(r=>r.rarity==="normal"&&tt(r)>=1&&tt(r)<=5),n.length||(n=e.filter(r=>r.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ei(e,t){if(t.cost>0){const{error:l}=await A.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await A.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),r=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),s=new Set,d=[];for(let l=0;l<(t.cardCount||5);l++){const c=Sn(t.rates);if(c){if(c.card_type==="player"){const i=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,a=c.rarity?i(c.rarity):null;let f=A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(f=f.eq("rarity",a));const{data:g}=await f;let m=g||[];if((c.note_min||c.note_max)&&(m=m.filter(L=>{const F=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!c.note_min||F>=c.note_min)&&(!c.note_max||F<=c.note_max)})),m.length||(c.note_min||c.note_max?(m=g||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):m=g||[]),!m.length)continue;let $=m.filter(L=>!s.has(L.id));$.length||($=m);const o=$[Math.floor(Math.random()*$.length)];s.add(o.id);const _=r.has(o.id),{data:M}=await A.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();M&&(d.push({...M,player:o,isDuplicate:_}),A.rpc("record_transfer",{p_card_id:M.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:i}=await A.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],g=a[Math.floor(Math.random()*a.length)].name,{data:m}=await A.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:g}).select().single();m&&d.push(m)}else if(c.card_type==="formation"){const i=Oi(),a=i[Math.floor(Math.random()*i.length)],f=p.has(a),{data:g}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();g!=null&&g[0]&&d.push({...g[0],isDuplicate:f})}}}return d}async function Ui(e,t,n){if(n>0){const{error:i}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:r}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=r.filter(i=>i.job==="GK"),s=r.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const a=i===0&&d?p:i===0?s:r,f=Nn(),g=Rn(a,f);g&&l.push(g)}d&&await A.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await A.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(c||[]).forEach((i,a)=>{A.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[a].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,a)=>({...c[a],player:i}))}async function Ki(e,t,n){const{error:r}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(r)throw r;const{data:p}=await A.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=p!=null&&p.length?p:Object.keys(Zt).map(a=>({name:a,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const a=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:a.name,gc_definition_id:a.id||null}}),{data:l,error:c}=await A.from("cards").insert(d).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(a=>{const f=p==null?void 0:p.find(g=>g.name===a.gc_type||g.id===a.gc_definition_id);return{...a,_gcDef:f||null}})}async function Vi(e,t){const{error:n}=await A.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:r}=await A.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((r||[]).map(a=>a.formation)),s=Oi(),d=s[Math.floor(Math.random()*s.length)],l=p.has(d),{data:c,error:i}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(c||[]).map(a=>({...a,isDuplicate:l}))}function Yi(e,t,n,r=null){var K,ie;if(!e||e.length===0){const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",B.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(B),(K=B.querySelector("#anim-close-err"))==null||K.addEventListener("click",()=>B.remove());return}e=[...e].sort((B,X)=>{const Y=B.player?tt(B.player):-1;return(X.player?tt(X.player):-1)-Y});const p=document.createElement("div");p.id="booster-anim-overlay",p.innerHTML=`
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
  `,document.body.appendChild(p);let s=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let c=!1;const i=B=>B.touches&&B.touches[0]?B.touches[0].clientX:B.clientX;function a(B){s||(c=!0,l.style.opacity="1",f(B))}function f(B){if(!c||s)return;const X=d.getBoundingClientRect(),Y=i(B)-X.left,de=Math.max(0,Math.min(1,Y/X.width));l.style.width=de*X.width+"px",de>=.82&&m()}function g(){s||(c=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function m(){var X;if(s)return;s=!0,c=!1,l.style.width="100%",l.style.opacity="1",(X=document.getElementById("cut-flash"))==null||X.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const B=document.getElementById("cut-hint");B&&(B.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",M(0)},620)}d.addEventListener("pointerdown",a),window.addEventListener("pointermove",f),window.addEventListener("pointerup",g),d.addEventListener("touchstart",a,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",g);let $=0,o=!1;const _=new Set;function M(B){$=B,document.getElementById("reveal-phase").style.display="flex",L(),F(B,0),ne()}function L(){const B=document.getElementById("card-dots");B&&(B.innerHTML=e.map((X,Y)=>`<div class="card-dot" data-i="${Y}" style="width:8px;height:8px;border-radius:50%;background:${Y===$?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),B.querySelectorAll(".card-dot").forEach(X=>X.addEventListener("click",()=>j(parseInt(X.dataset.i)))))}function F(B,X){var V;const Y=e[B],de=document.getElementById("card-counter"),he=document.getElementById("card-track");de&&(de.textContent=`Carte ${B+1} / ${e.length}`);const xe=Y.card_type==="player"&&((V=Y.player)==null?void 0:V.rarity)==="legende",ye=!_.has(B);_.add(B);let R=0;if(Y.card_type==="player"&&Y.player){const H=Y.player,J=H.job||"ATT";R=Number(J==="GK"?H.note_g:J==="DEF"?H.note_d:J==="MIL"?H.note_m:H.note_a)||0}const O=H=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${xe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Pn(Y)}</div>
          ${Y.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const J=document.getElementById("current-card-wrap");X!==0?(J.style.transition="none",J.style.transform=`translateX(${X>0?100:-100}%)`,requestAnimationFrame(()=>{J.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",J.style.transform="translateX(0)"})):J.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),H||xe?te():z(),L()};ye&&R>6&&Y.card_type==="player"&&Y.player?P(Y,()=>O(!0)):O(!1)}function P(B,X){var O;o=!0;const Y=B.player,de=`https://flagsapi.com/${Y.country_code}/flat/64.png`,he=(O=Y.clubs)==null?void 0:O.logo_url,xe=document.getElementById("walkout-overlay"),ye=document.getElementById("walkout-stage");if(!xe||!ye){o=!1,X();return}xe.style.display="flex";const R=()=>{const V=ye.firstElementChild;V&&(V.classList.remove("wo-in"),V.classList.add("wo-out"))};ye.innerHTML=`<img class="wo-in" src="${de}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(R,2e3),setTimeout(()=>{var V;ye.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((V=Y.clubs)==null?void 0:V.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(R,4450),setTimeout(()=>{xe.style.display="none",ye.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),X()},4900)}function j(B){if(o||B<0||B>=e.length||B===$)return;const X=B>$?1:-1;$=B,F(B,X)}function C(){j($+1)}function D(){j($-1)}function ne(){const B=document.getElementById("card-viewport");if(!B||B._swipeBound)return;B._swipeBound=!0;let X=0,Y=0,de=0,he=!1;const xe=H=>H.touches?H.touches[0].clientX:H.clientX,ye=H=>H.touches?H.touches[0].clientY:H.clientY,R=H=>{he=!0,X=xe(H),Y=ye(H),de=0},O=H=>{if(!he)return;de=xe(H)-X;const J=ye(H)-Y;if(Math.abs(de)<Math.abs(J))return;const ge=document.getElementById("current-card-wrap");ge&&(ge.style.transition="none",ge.style.transform=`translateX(${de*.6}px) rotate(${de*.02}deg)`)},V=()=>{if(!he)return;he=!1;const H=document.getElementById("current-card-wrap"),J=55;de<=-J&&$<e.length-1?C():de>=J&&$>0?D():H&&(H.style.transition="transform .2s ease",H.style.transform="translateX(0)")};B.addEventListener("pointerdown",R),B.addEventListener("pointermove",O),B.addEventListener("pointerup",V),B.addEventListener("pointercancel",V),B.addEventListener("touchstart",R,{passive:!0}),B.addEventListener("touchmove",O,{passive:!0}),B.addEventListener("touchend",V),B.addEventListener("click",H=>{if(Math.abs(de)>8)return;const J=B.getBoundingClientRect();H.clientX-J.left>J.width/2?C():D()})}let ue=null;function te(){const B=document.getElementById("fireworks-canvas");if(!B)return;B.width=window.innerWidth,B.height=window.innerHeight;const X=B.getContext("2d"),Y=[];function de(){const xe=Math.random()*B.width,ye=Math.random()*B.height*.6,R=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],O=R[Math.floor(Math.random()*R.length)];for(let V=0;V<60;V++){const H=Math.PI*2/60*V,J=2+Math.random()*5;Y.push({x:xe,y:ye,vx:Math.cos(H)*J,vy:Math.sin(H)*J,alpha:1,color:O,size:2+Math.random()*3})}}de(),ue=setInterval(de,600);function he(){if(document.getElementById("fireworks-canvas")){X.clearRect(0,0,B.width,B.height);for(let xe=Y.length-1;xe>=0;xe--){const ye=Y[xe];if(ye.x+=ye.vx,ye.y+=ye.vy+.08,ye.vy*=.98,ye.alpha-=.018,ye.alpha<=0){Y.splice(xe,1);continue}X.globalAlpha=ye.alpha,X.fillStyle=ye.color,X.beginPath(),X.arc(ye.x,ye.y,ye.size,0,Math.PI*2),X.fill()}X.globalAlpha=1,(ue!==null||Y.length>0)&&requestAnimationFrame(he)}}he()}function z(){ue!==null&&(clearInterval(ue),ue=null);const B=document.getElementById("fireworks-canvas");B&&B.getContext("2d").clearRect(0,0,B.width,B.height)}if(r){const B=document.getElementById("reveal-phase"),X=B==null?void 0:B.querySelector('div[style*="display:flex"][style*="gap:10px"]');X&&(X.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(ie=document.getElementById("reveal-next"))==null||ie.addEventListener("click",()=>{z(),p.remove(),r()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{z(),p.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{z(),p.remove(),n("boosters")})}function Pn(e){var t,n;if(e.card_type==="player"&&e.player)return qn(e);if(e.card_type==="game_changer"){const r=e._gcDef,p=(r==null?void 0:r.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[r==null?void 0:r.color]||s.purple,c=d[r==null?void 0:r.color]||d.purple,i=(r==null?void 0:r.name)||e.gc_type||"Game Changer",a=(r==null?void 0:r.effect)||((t=Zt[e.gc_type])==null?void 0:t.desc)||"",f=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,g=((n=Zt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${p?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${a.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function On(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
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
      </div>`,document.body.appendChild(r),r.addEventListener("click",d=>{d.target===r&&r.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>r.remove());return}Hn()}function Hn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{n--;const p=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");p&&(p.textContent=n),s&&(s.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(r),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Vn(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(pi());window.propeller.push({zone_id:Wi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Yn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(pi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Wi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function Wn(e,{state:t,navigate:n,toast:r,refreshProfile:p}){var g,m;const{data:s}=await A.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let d=Array.isArray((g=t.profile)==null?void 0:g.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await A.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Pi()).find(_=>(_.name||"").toLowerCase().includes("new player"));o&&(l=Hi(o))}catch($){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',$)}const c=d.length;let i=0;e.innerHTML=`
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
  </div>`;const a=async()=>{await A.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function f(){var L;if(i>=c||!d.length){await A.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),r("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const $=d[0],{data:o}=await A.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let _=[];try{if($.type==="formation")_=await Vi(t.profile,0);else if($.type==="game_changer")_=await Ki(t.profile,$.count||3,0);else if(l&&((L=l.rates)!=null&&L.length)){const F={...l,cost:0,cardCount:$.count||l.cardCount||5};_=await ei(t.profile,F),$.guaranteeGK&&!t.profile.first_booster_opened&&(_.some(j=>j.player&&j.player.job==="GK")||await Xn(t.profile,_),await A.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else _=await Ui(t.profile,$.count||5,0)}catch(F){r(F.message||"Erreur ouverture booster","error");return}d.shift(),i++,await a();const M=$.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:$.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${c})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Yi(_,M,n,()=>{f()})}(m=document.getElementById("onboard-start"))==null||m.addEventListener("click",()=>f())}async function Xn(e,t){try{const{data:n}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const r=n[Math.floor(Math.random()*n.length)],p=t.findIndex(d=>d.player);if(p===-1)return;const s=t[p];await A.from("cards").update({player_id:r.id}).eq("id",s.id),t[p]={...s,player_id:r.id,player:r}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}async function Jn(e,t){const{state:n}=t,p=(n.params||{}).matchMode||"vs_ai_easy",s=p.replace("vs_ai_",""),d=p;await li(e,t,p,async({deckId:l,formation:c,starters:i,subsRaw:a,gcCardsEnriched:f,gcDefs:g})=>{try{const m=ft(i,c),$=await Qn(c,s),o=async _=>{try{const{data:M,error:L}=await A.from("matches").insert({home_id:n.profile.id,away_id:null,mode:d,home_deck_id:l,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),rt(e,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>t.navigate("home"));return}const F={gcDefs:g||[],matchId:M==null?void 0:M.id,mode:d,difficulty:s,formation:c,homeTeam:m,aiTeam:$,homeSubs:a,subsUsed:0,maxSubs:Math.min(a.length,3),homeScore:0,aiScore:0,gcCards:_,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};eo(e,F,t)}catch(M){console.error("[MatchIA] Exception launchMatch:",M),rt(e,"⚠️","Erreur au lancement du match : "+M.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}di(e,f,o)}catch(m){console.error("[MatchIA] Exception setup:",m),rt(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function Qn(e,t){var d,l;const{data:n}=await A.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return Zn(e);const r=pt[e]||pt["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},s=[...n];for(const c of["GK","DEF","MIL","ATT"]){const i=s.filter($=>$.job===c),a=s.filter($=>$.job!==c),f=[...i,...a],g=[];for(let $=0;$<r[c];$++){const o=f[$]||s[$];o&&g.push({cardId:"ai-"+o.id+"-"+$,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((d=o.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const m=ot(g.length);g.forEach(($,o)=>{$._col=m[o]}),p[c]=g}return p}function Zn(e){const t=pt[e]||pt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let c=0;c<t[s];c++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:r[p%r.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),p++}const l=ot(d.length);d.forEach((c,i)=>{c._col=l[i]}),n[s]=d}return n}function eo(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${st(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>to(e,t,n),5e3)}function to(e,t,n){const r=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function s(o){return o.reduce((_,M)=>_+we(M,"MIL"),0)}function d(o){let _=0;for(let M=0;M<o.length-1;M++){const L=Ze(o[M],o[M+1]);L==="#00ff88"?_+=2:L==="#FFD700"&&(_+=1)}return _}const l=s(r)+d(r),c=s(p)+d(p),i=l>=c;function a(o,_,M,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${_}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((F,P)=>{const j=P<o.length-1?Ze(F,o[P+1]):null,C=!j||j==="#ff3333"||j==="#cc2222",D=j==="#00ff88"?"+2":j==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${P}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ve({...F,note:we(F,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${P<o.length-1?`<div class="duel-link duel-link-${L}" data-idx="${P}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${C?"rgba(255,255,255,0.12)":j};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${C?"none":`0 0 8px ${j}`}">
            ${D?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${j}">${D}</span>`:""}
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

    ${a(r,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${a(p,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=(_,M)=>e.querySelectorAll(_).forEach((L,F)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},M+F*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((_,M)=>{setTimeout(()=>{_.style.opacity="1"},M*70)}),900),setTimeout(()=>{const _=e.querySelector("#vs-label");_&&(_.style.opacity="1",_.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(M=>M.style.opacity="1")},1250),setTimeout(()=>{g("score-home",l,800),g("score-ai",c,800)},1500)};function g(o,_,M){const L=document.getElementById(o);if(!L)return;const F=performance.now(),P=j=>{const C=Math.min(1,(j-F)/M);L.textContent=Math.round(_*(1-Math.pow(1-C,3))),C<1?requestAnimationFrame(P):L.textContent=_};requestAnimationFrame(P)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const m=i?si():null;i&&(t.boostCard={value:m}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:p.map(o=>({name:o.name,note:we(o,"MIL"),portrait:ze(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const $=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Me(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),_=document.getElementById("score-ai"),M=document.getElementById(i?"duel-row-home":"duel-row-ai"),L=document.getElementById(i?"duel-row-ai":"duel-row-home"),F=i?o:_,P=i?_:o;F&&(F.style.fontSize="80px",F.style.color=i?"#FFD700":"#ff6b6b",F.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),P&&(P.style.opacity="0.25"),setTimeout(()=>{M&&(M.style.transformOrigin="center",M.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",M.style.zIndex="5"),setTimeout(()=>{var C;const j=document.getElementById("duel-shock");if(j){const D=(C=L||M)==null?void 0:C.getBoundingClientRect(),ne=e.querySelector(".match-screen").getBoundingClientRect();D&&(j.style.top=D.top-ne.top+D.height/2+"px"),j.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var C;const j=document.getElementById("duel-finale");j&&(j.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${m}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,j.style.transition="opacity .45s ease",j.style.opacity="1",j.style.pointerEvents="auto",(C=document.getElementById("start-match-btn"))==null||C.addEventListener("click",$))},600)},700)},2800)}function io(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Me(e,t,n){var F,P,j,C,D,ne,ue,te;const r=t.selected.map(z=>z.cardId),p=t.usedSubIds||[],s=t.homeSubs.filter(z=>!p.includes(z.cardId)),l=Object.values(t.homeTeam).flat().filter(z=>z.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(z=>(t.aiTeam[z]||[]).some(K=>!K.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(z=>!z.used),a=t.phase==="attack"&&c&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(z=>!z.used).map(z=>z.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",g=t.phase==="attack",m=t.phase==="defense",$=t.phase==="finished",o=t.gcCards.filter(z=>!t.usedGc.includes(z.id)),_=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const K=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${it((K.players||[]).map(ie=>({...ie,used:!1})),"#ff6b6b",K.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const K=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((K.players||[]).map(ie=>({...ie,used:!1})),"#00ff88",K.total)}
          </div>`}const z=t.log[t.log.length-1];return z?'<div style="padding:2px 4px">'+io(z)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const z=window.innerWidth>=700,K=(R,O,V)=>{var Ne,He;const H=(t.gcDefs||[]).find(T=>T.name===R.gc_type),J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[H==null?void 0:H.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ge={purple:"#b06ce0",light_blue:"#00d4ef"}[H==null?void 0:H.color]||"#b06ce0",re=(H==null?void 0:H.name)||R.gc_type,Ae=(H==null?void 0:H.effect)||((Ne=Ge[R.gc_type])==null?void 0:Ne.desc)||"",ke=H!=null&&H.image_url?`/manager-wars/icons/${H.image_url}`:null,$e=((He=Ge[R.gc_type])==null?void 0:He.icon)||"⚡",_e=Math.round(V*.22),Ee=Math.round(V*.22),Te=V-_e-Ee,qe=re.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${O}px;height:${V}px;border-radius:10px;border:2px solid ${ge};background:${J};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${_e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${qe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${re}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Te}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ke?`<img src="${ke}" style="max-width:${O-10}px;max-height:${Te-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Te*.55)}px">${$e}</span>`}
          </div>
          <div style="height:${Ee}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ae.slice(0,38)}</span>
          </div>
        </div>`},ie=(R,O)=>{var V;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${O}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(O*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(O*.2)}px">⚡</div>
            <div style="font-size:${Math.round(O*.09)}px;color:#000;font-weight:900">+${(V=t.boostCard)==null?void 0:V.value}</div>
          </div>`},B=(R,O)=>O?ie(130,175):K(R,130,175),X=(R,O)=>O?ie(68,95):K(R,68,95),Y=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",de=$?`<button id="btn-results" style="${Y};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${Y};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:g?`<button id="btn-action" style="${Y};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:m?`<button id="btn-action" style="${Y};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${Y};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,he=g||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",xe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(R,76,100)}</div>`).join("")}
      </div>`,ye=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${dt(t.homeTeam,t.formation,t.phase,r,300,300,a)}
        </div>
      </div>`;return z?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${xe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ye}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${de}${he}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${o.map(R=>B(R,!1)).join("")}
            ${_?B(null,!0):""}
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
            ${o.map(R=>X(R,!1)).join("")}
            ${_?X(null,!0):""}
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
          <div>${de}${he}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(z=>{var K,ie,B;if(z.type==="duel"){const X=z.isGoal,Y=z.homeScored?"#FFD700":X?"#ff6b6b":"rgba(255,255,255,0.3)",de=z.homeScored?"⚽ BUT !":X?"⚽ BUT IA !":(K=z.homePlayers)!=null&&K.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${X?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${Y};margin-bottom:4px">
                <div style="font-size:9px;color:${Y};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${de}</div>
                ${(ie=z.homePlayers)!=null&&ie.length?`<div style="margin-bottom:3px">${it(z.homePlayers,"rgba(255,255,255,0.7)",z.homeTotal)}</div>`:""}
                ${(B=z.aiPlayers)!=null&&B.length?`<div style="opacity:0.7">${it(z.aiPlayers,"#ff6b6b",z.aiTotal)}</div>`:""}
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
  </div>`;function M(){const z=e.querySelector(".match-screen");if(!z)return;const K=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);z.style.bottom="auto",z.style.height=K+"px",z.style.minHeight=K+"px",z.style.maxHeight=K+"px",z.style.overflow="hidden";const ie=e.querySelector("#mobile-action-bar"),B=e.querySelector("#mobile-play-area");ie&&B&&(B.style.paddingBottom=ie.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const K=e.querySelector(".terrain-wrapper svg");K&&(K.removeAttribute("width"),K.removeAttribute("height"),K.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",K.setAttribute("viewBox","-26 -26 352 352"),K.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const z=e.querySelector(".terrain-wrapper svg");z&&(z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let z=!1,K=30;const ie=()=>document.getElementById("match-timer"),B=()=>{const X=ie();if(!X)return;const Y=String(Math.floor(K/60)).padStart(2,"0"),de=String(K%60).padStart(2,"0");X.textContent=` ${Y}:${de}`,X.style.color=z?"#ff2222":"#ff9500",X.style.fontWeight="900"};B(),t._timerInt=setInterval(()=>{if(K--,K<0)if(!z)z=!0,K=15,B();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const X=document.createElement("div");X.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",X.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(X),setTimeout(()=>{X.remove(),At(e,t,n)},2500)}else B()},1e3)}(F=document.getElementById("match-quit"))==null||F.addEventListener("click",()=>{Oe(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,At(e,t,n))}),(P=document.getElementById("view-ai"))==null||P.addEventListener("click",()=>fo(t,n)),(j=document.getElementById("toggle-history"))==null||j.addEventListener("click",()=>{var z;(z=document.getElementById("match-history-panel"))==null||z.classList.add("open")}),(C=document.getElementById("close-history"))==null||C.addEventListener("click",()=>{var z;(z=document.getElementById("match-history-panel"))==null||z.classList.remove("open")}),(D=document.getElementById("btn-action"))==null||D.addEventListener("click",()=>{t.selected.length!==0&&(g?oo(e,t,n):m&&ro(e,t,n))}),(ne=document.getElementById("btn-results"))==null||ne.addEventListener("click",()=>At(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(z=>{z.addEventListener("click",()=>no(z,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(z=>{z.addEventListener("click",()=>Yt(e,t,n,null,z.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(z=>{z.addEventListener("click",()=>lo(z.dataset.gcId,z.dataset.gcType,e,t,n))}),(ue=document.getElementById("boost-card"))==null||ue.addEventListener("click",()=>uo(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(z=>{z.addEventListener("click",()=>Yt(e,t,n,z.dataset.subId))}),(te=document.getElementById("sub-btn-main"))==null||te.addEventListener("click",()=>Yt(e,t,n))}function no(e,t,n,r){const p=e.dataset.cardId,s=e.dataset.role,d=t.selected.findIndex(l=>l.cardId===p);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===p);l&&t.selected.push({...l,_role:s,_line:s})}Me(n,t,r)}function ui(e,t,n){e.matchId&&A.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function oo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(l=>!l.used)),p=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,c=r&&["GK","DEF"].includes(d._role);return{...l,_line:d._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Pt(p,t.modifiers.home);t.pendingAttack={...s,players:[...p],side:"home"},t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Me(e,t,n),setTimeout(()=>ao(e,t,n),1200)}function ro(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Ot(r,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!0)});const s=Ht(t.pendingAttack.total,p.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ze(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:ze(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(s.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Me(e,t,n),Nt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ct(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Si(r,"attack",t.difficulty);if(!p.length){qt(e,t,n);return}const s=Pt(p,t.modifiers.ai);t.pendingAttack={...s,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),c=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!c){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:ze(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,Me(e,t,n),Nt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ct(e,t,n,"home-attack")});return}t.phase="defense",Me(e,t,n)}function ao(e,t,n){var i,a;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Si(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(g=>!g.used)).length){t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(m=>({name:m.name,note:we(m,m._line||m.job),portrait:ze(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:((a=t.pendingAttack)==null?void 0:a.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Nt(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}const d=p.length>0?Ot(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Ht(t.pendingAttack.total,d,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:ze(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,Me(e,t,n),Nt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{ct(e,t,n,"ai-attack")});return}else c.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,ct(e,t,n,"ai-attack")}function ct(e,t,n,r){if(t.round++,Xi(t)){At(e,t,n);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){qt(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){qt(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",Me(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){qt(e,t,n);return}t.phase="ai-attack",Me(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function Xi(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(p=>!p.used)),n=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(p=>!p.used));return!t&&!n}function qt(e,t,n){Xi(t)?At(e,t,n):(t.phase="attack",Me(e,t,n))}function so(e,t,n){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=ze(e),s=ze(t),d=ut[e.job]||"#555",l=ut[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
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
  `,document.body.appendChild(r);let a=!1;const f=()=>{a||(a=!0,r.remove(),n())};r.addEventListener("click",f),setTimeout(f,2e3)}function $t(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,r=null,p=null){var m,$;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([o,_])=>(_||[]).filter(M=>M.used).map(M=>({...M,_line:M._line||o}))),d=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!s.length){$t("Aucun joueur utilisé à remplacer");return}if(!d.length){$t("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(o=>o.cardId===p));const c=((m=s[l])==null?void 0:m._line)||(($=s[l])==null?void 0:$.job);let i=r?Math.max(0,d.findIndex(o=>o.cardId===r)):Math.max(0,d.findIndex(o=>o.job===c)),a=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function g(){var j,C,D,ne,ue,te;const o=s[l],_=d[i],M=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(M*1.35),F=z=>`background:rgba(255,255,255,0.12);border:none;color:${z?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${z?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${F(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${_?Ve({..._,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="in-down" style="${F(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${F(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ve({...o,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="out-down" style="${F(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(j=f.querySelector("#sub-close"))==null||j.addEventListener("click",()=>f.remove()),(C=f.querySelector("#out-up"))==null||C.addEventListener("click",()=>{l>0&&(l--,g())}),(D=f.querySelector("#out-down"))==null||D.addEventListener("click",()=>{l<s.length-1&&(l++,g())}),(ne=f.querySelector("#in-up"))==null||ne.addEventListener("click",()=>{i>0&&(i--,g())}),(ue=f.querySelector("#in-down"))==null||ue.addEventListener("click",()=>{i<d.length-1&&(i++,g())});const P=(z,K,ie,B)=>{const X=f.querySelector("#"+z);if(!X)return;let Y=0;X.addEventListener("touchstart",de=>{Y=de.touches[0].clientY},{passive:!0}),X.addEventListener("touchend",de=>{const he=de.changedTouches[0].clientY-Y;if(Math.abs(he)<30)return;const xe=K();he<0&&xe<B-1?(ie(xe+1),g()):he>0&&xe>0&&(ie(xe-1),g())},{passive:!0})};P("in-panel",()=>i,z=>i=z,d.length),P("out-panel",()=>l,z=>l=z,s.length),(te=f.querySelector("#sub-confirm"))==null||te.addEventListener("click",z=>{if(z.preventDefault(),z.stopPropagation(),a)return;a=!0;const K=s[l],ie=d[i];if(!K||!ie)return;let B=null,X=-1;for(const[de,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(ye=>ye.cardId===K.cardId);if(xe!==-1){B=de,X=xe;break}}if(X===-1||!B){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const Y={...ie,_line:B,_col:K._col||0,used:!1,boost:0};t.homeTeam[B].splice(X,1,Y),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(ie.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:K.name,firstname:K.firstname,note:we(K,B),portrait:ze(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},inPlayer:{name:ie.name,firstname:ie.firstname,note:we(ie,B),portrait:ze(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},text:`🔄 ${ie.firstname} ${ie.name} remplace ${K.firstname} ${K.name}`}),f.remove(),so(K,ie,()=>Me(e,t,n))})}document.body.appendChild(f),g()}function lo(e,t,n,r,p){var $,o;const s=(r.gcDefs||[]).find(_=>_.name===t),d=Ge[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,a=(s==null?void 0:s.effect)||d.desc,f=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,g=d.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${g}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${a}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),($=m.querySelector("#gc-back"))==null||$.addEventListener("click",()=>m.remove()),(o=m.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{m.remove(),po(e,t,n,r,p)})}function Bt(e,t,n,r,p,s){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var i,a;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const g=f._line||f.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g]||"#555",$=we(f,g)+(f.boost||0),o=l.find(_=>_.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${m};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${$}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${g}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const g=f.dataset.cid,m=e.find(o=>o.cardId===g);if(!m)return;const $=l.findIndex(o=>o.cardId===g);$>-1?l.splice($,1):l.length<t&&l.push(m),c()})}),(a=d.querySelector("#gc-picker-confirm"))==null||a.addEventListener("click",()=>{d.remove(),s(l)})}c(),document.body.appendChild(d)}const co={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},r,p,s)=>{const d=Object.entries(r.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,c])=>c.filter(i=>!i.used).map(i=>({...i,_line:l})));return d.length?(Bt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,r,l=>{l.forEach(c=>{const i=(r.homeTeam[c._line]||[]).find(a=>a.cardId===c.cardId);i&&(i.boost=(i.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),Me(p,r,s)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Me(p,r,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:r="ai"},p,s,d)=>{const l=r==="home"?p.homeTeam:p.aiTeam,c=r==="ai"?"adverse":"allié",i=Object.entries(l).filter(([a])=>!n.length||n.includes(a)).flatMap(([a,f])=>f.filter(g=>!g.used).map(g=>({...g,_line:a})));return i.length?(Bt(i,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,p,a=>{a.forEach(f=>{const m=((r==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find($=>$.cardId===f.cardId);m&&(m.boost=(m.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${m.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),Me(s,p,d)}),!0):(p.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Me(s,p,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},r,p,s)=>{const d=n==="home"?r.homeTeam:r.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,a])=>a.filter(f=>!f.used).map(f=>({...f,_line:i})));return c.length?(Bt(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,r,i=>{i.forEach(a=>{const g=((n==="home"?r.homeTeam:r.aiTeam)[a._line]||[]).find(m=>m.cardId===a.cardId);g&&(g.used=!0,r.log.push({text:`❌ ${g.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Me(p,r,s)}),!0):(r.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Me(p,r,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,r,p)=>{const s=Object.entries(n.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,l])=>l.filter(c=>c.used).map(c=>({...c,_line:d})));return s.length?(Bt(s,e,`Choisir ${e} joueur(s) à ressusciter`,r,n,d=>{d.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!1,n.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Me(r,n,p)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Me(r,n,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function po(e,t,n,r,p){r.usedGc.push(e);const s=r.gcDefs||[],d=s.find(c=>c.name===t)||s.find(c=>{var i;return((i=c.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const c=co[d.effect_type];c?c(d.effect_params||{},r,n,p)||(l=!0):(p.toast(`Effet "${d.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(r.homeTeam).flatMap(([i,a])=>(a||[]).filter(f=>f.used).map(f=>({...f,_line:i})));c.length?(c[0].used=!1,r.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(i=>!i.used);if(c.length){const i=c.sort((a,f)=>we(f,"ATT")-we(a,"ATT"))[0];i.used=!0,r.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}A.from("cards").delete().eq("id",e).then(()=>{}),l&&Me(n,r,p)}function uo(e,t,n){const r=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!r.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ut[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${we(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const s=p.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[d]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),Me(e,t,n)})})}function Nt(e,t,n,r,p){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,a)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${ut[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>p(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function At(e,t,n){var a,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=n,p=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,d=p?"victoire":s?"nul":"defaite",l=pn(t.mode,d);t.matchId&&await A.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?r.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(r.profile.credits||0)+l,matches_played:(r.profile.matches_played||0)+1};p?c.wins=(r.profile.wins||0)+1:s?c.draws=(r.profile.draws||0)+1:c.losses=(r.profile.losses||0)+1,await A.from("users").update(c).eq("id",r.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(a=document.getElementById("res-home"))==null||a.addEventListener("click",()=>{i.remove(),Oe(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),Oe(e),n.navigate("match",{matchMode:t.mode})})}function fo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${st(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function go(e,t,n,r){var p,s;try{const d=(s=(p=t==null?void 0:t.state)==null?void 0:p.profile)==null?void 0:s.id;try{(A.getChannels?A.getChannels():[]).forEach(c=>{const i=c.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&A.removeChannel(c)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}d&&(await A.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await A.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await li(e,t,"random",({deckId:d,formation:l,starters:c,subsRaw:i,gcCardsEnriched:a,gcDefs:f})=>{const g=m=>mo(e,t,d,l,c,i,m,f||[],n,r);if(!a.length){g([]);return}di(e,a,g)})}async function mo(e,t,n,r,p,s,d=[],l=[],c,i){var ue;const{state:a,navigate:f,toast:g}=t,m=a.profile.id;let $=!1,o=null;Xe(e);try{await A.rpc("cancel_matchmaking",{p_user_id:m})}catch{}try{await A.from("matchmaking_queue").delete().eq("user_id",m)}catch{}const _=(te,z,K,ie)=>{var B;e.innerHTML=`
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
        
        ${!z&&te?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(B=document.getElementById("lobby-cancel"))==null||B.addEventListener("click",async()=>{$=!0,o&&(A.removeChannel(o),o=null),K&&await A.from("friend_match_invites").update({status:"declined"}).eq("id",K),Oe(e),f("home")})},M=async(te,z)=>{$=!0,o&&(A.removeChannel(o),o=null),await new Promise(K=>setTimeout(K,600)),e.isConnected&&xo(e,t,te,z,d,l)},{data:L}=await A.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${m},invitee_id.eq.${c}),and(inviter_id.eq.${c},invitee_id.eq.${m})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let F,P;if(L&&L.inviter_id===c)P=!1,F=L.id,await A.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",F);else{P=!0;const{data:te,error:z}=await A.from("friend_match_invites").insert({inviter_id:m,invitee_id:c,friend_id:c,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(z||!te){g("Erreur création invitation","error"),Oe(e),f("home");return}F=te.id}if(_(!0,!P,F),!P){const te={home_id:c,away_id:m,home_deck_id:L.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},z=await A.from("matches").insert(te).select().single(),K=z.data;if(!K){g("Erreur création match: "+(((ue=z.error)==null?void 0:ue.message)||""),"error"),Oe(e),f("home");return}await A.from("friend_match_invites").update({match_id:K.id,status:"matched"}).eq("id",F),M(K.id,!1);return}let j=!1;const C=te=>{$||j||(te.status==="matched"&&te.match_id?(j=!0,clearInterval(D),clearInterval(ne),M(te.match_id,!0)):te.status==="declined"?(clearInterval(D),clearInterval(ne),g(`${i} a décliné l'invitation`,"warning"),Oe(e),f("home")):te.invitee_ready&&_(!0,!0,F))},D=setInterval(()=>{if($){clearInterval(D);return}A.from("matchmaking_queue").delete().eq("user_id",m).then(()=>{},()=>{})},3e3),ne=setInterval(async()=>{if($||j){clearInterval(ne);return}const{data:te}=await A.from("friend_match_invites").select("*").eq("id",F).maybeSingle();te&&C(te)},1200);o=A.channel("friend-invite-"+F).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${F}`},te=>C(te.new)).subscribe()}async function xo(e,t,n,r,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(p||[]).map(u=>u.id),g=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:m}=await A.from("matches").select("*").eq("id",n).single();if(!m){c("Match introuvable","error"),l("home");return}async function $(){const[{data:u},{data:x},{data:h},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:m.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:m.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",m.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",m.away_id).single()]),b=E=>({cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:Number(E.note_g)||0,note_d:Number(E.note_d)||0,note_m:Number(E.note_m)||0,note_a:Number(E.note_a)||0,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map(E=>b(E)),w=((x==null?void 0:x.starters)||[]).map(E=>b(E)),I=(u==null?void 0:u.formation)||"4-4-2",k=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:ft(v,I),p2Team:ft(w,k),p1Subs:((u==null?void 0:u.subs)||[]).map(E=>b(E)),p2Subs:((x==null?void 0:x.subs)||[]).map(E=>b(E)),p1Formation:I,p2Formation:k,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?g:[],gcCardsFull_p2:r?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=m.game_state&&Object.keys(m.game_state).length?m.game_state:null;if(!o)if(r){o=await $();const{data:u}=await A.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:m.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!o;u++){await new Promise(h=>setTimeout(h,400));const{data:x}=await A.from("matches").select("game_state").eq("id",n).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(o=x.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=g,await A.from("matches").update({game_state:o}).eq("id",n)}let _=!1,M=!1,L=null,F=!1;const P=new Set,j=new Set;function C(u){var E,S;try{A.removeChannel(D)}catch{}const x=o[i+"Score"]||0,h=o[a+"Score"]||0;if(r&&!M){M=!0;const G=o.p1Score||0,Q=o.p2Score||0,le=(o.usedGc_p1||[]).length,Z=(o.usedGc_p2||[]).length;cn({player1Id:m.home_id,player2Id:m.away_id,score1:G,score2:Q,gc1:le,gc2:Z}).catch(N=>console.warn("[FriendMatch] updateStats:",N))}let y,b;u.winner_id?(y=u.winner_id===d.profile.id,b=!1):u.forfeit?(y=x>h,b=!1):(b=x===h,y=x>h),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":y?"🏆":"😞",I=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",k=b?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${k}">${I}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${x} – ${h} ${o[a+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(S=v.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{v.remove(),Oe(e),l("home")})}const D=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const x=u.new;try{if(x.status==="finished"||x.forfeit){if(_)return;_=!0,L&&(clearInterval(L),L=null),x.game_state&&(o=x.game_state),C(x);return}if(x.game_state){const h=o;o=x.game_state;const y=o._lastGC;if(y&&y.seq&&!j.has(y.seq)&&(j.add(y.seq),y.by!==i)){ye(y.type,y.by,()=>X());return}const b=h[i+"Score"]||0,v=h[a+"Score"]||0,w=o[i+"Score"]||0,I=o[a+"Score"]||0,k=w>b,E=I>v;if((k||E)&&!P.has(o.round)){P.add(o.round);const S=[...o.log||[]].reverse().find(Q=>Q.isGoal),G=((S==null?void 0:S.homePlayers)||[]).map(Q=>({name:Q.name,note:Q.note,portrait:Q.portrait,job:Q.job}));xe(G,w,I,k,()=>X());return}X()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function ne(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:x}=await A.from("matches").update({game_state:o}).eq("id",n);x&&c("Erreur de synchronisation","error");try{X()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function ue(){if(_)return;_=!0,L&&(clearInterval(L),L=null);const u=r?m.away_id:m.home_id,x=r?"p2":"p1",h=r?"p1":"p2",y={...o,[x+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{A.removeChannel(D)}catch{}setTimeout(()=>{Oe(e),l("home")},800)}const te={BOOST_STAT:({value:u=1,count:x=1,roles:h=[]},y,b)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([I])=>!h.length||h.includes(I)).flatMap(([I,k])=>k.filter(E=>!E.used).map(E=>({...E,_line:I})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}z(w,x,`Choisir ${x} joueur(s) à booster (+${u})`,I=>{I.forEach(k=>{const E=(v[k._line]||[]).find(S=>S.cardId===k.cardId);E&&(E.boost=(E.boost||0)+u,y.log.push({text:`⚡ +${u} sur ${E.name}`,type:"info"}))}),y[i+"Team"]=v,b(y)})},DEBUFF_STAT:({value:u=1,count:x=1,roles:h=[],target:y="ai"},b,v)=>{const w=y==="home"?i:a,I=b[w+"Team"],k=y==="home"?"allié":"adverse",E=Object.entries(I).filter(([S])=>!h.length||h.includes(S)).flatMap(([S,G])=>G.filter(Q=>!Q.used).map(Q=>({...Q,_line:S})));if(!E.length){b.log.push({text:`🎯 Aucun joueur ${k}`,type:"info"}),v(b);return}z(E,x,`Choisir ${x} joueur(s) ${k}(s) (-${u})`,S=>{S.forEach(G=>{const Q=(I[G._line]||[]).find(le=>le.cardId===G.cardId);Q&&(Q.boost=(Q.boost||0)-u,b.log.push({text:`🎯 -${u} sur ${Q.name}`,type:"info"}))}),b[w+"Team"]=I,v(b)})},GRAY_PLAYER:({count:u=1,roles:x=[],target:h="ai"},y,b)=>{const v=h==="home"?i:a,w=y[v+"Team"],I=h==="home"?"allié":"adverse",k=Object.entries(w).filter(([E])=>!x.length||x.includes(E)).flatMap(([E,S])=>S.filter(G=>!G.used).map(G=>({...G,_line:E})));if(!k.length){y.log.push({text:`❌ Aucun joueur ${I}`,type:"info"}),b(y);return}z(k,u,`Choisir ${u} joueur(s) ${I}(s) à exclure`,E=>{E.forEach(S=>{const G=(w[S._line]||[]).find(Q=>Q.cardId===S.cardId);G&&(G.used=!0,y.log.push({text:`❌ ${G.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,b(y)})},REVIVE_PLAYER:({count:u=1,roles:x=[]},h,y)=>{const b=h[i+"Team"],v=Object.entries(b).filter(([w])=>!x.length||x.includes(w)).flatMap(([w,I])=>I.filter(k=>k.used).map(k=>({...k,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}z(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(I=>{const k=(b[I._line]||[]).find(E=>E.cardId===I.cardId);k&&(k.used=!1,h.log.push({text:`💫 ${k.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=b,y(h)})},REMOVE_GOAL:({},u,x)=>{const h=a+"Score";u[h]>0?(u[h]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(u)},ADD_GOAL_DRAW:({},u,x)=>{u[i+"Score"]===u[a+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(u)},ADD_SUB:({value:u=1},x,h)=>{x.maxSubs=(x.maxSubs||3)+u,x.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),h(x)},CUSTOM:({},u,x)=>x(u)};function z(u,x,h,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var k,E;const I=u.map(S=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",Q=we(S,S._line)+(S.boost||0),Z=v.find(U=>U.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",N=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Z};background:${G};overflow:hidden;cursor:pointer;${N}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Q}</div>
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
        </div>`,(k=b.querySelector("#pp-close"))==null||k.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const G=S.dataset.cid,Q=u.find(Z=>Z.cardId===G),le=v.findIndex(Z=>Z.cardId===G);Q&&(le>-1?v.splice(le,1):v.length<x&&v.push(Q),w())})}),(E=b.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{b.remove(),y(v)})}w(),document.body.appendChild(b)}async function K(u,x){const y=(o["gcCardsFull_"+i]||[]).find(I=>I.id===u),b=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(I=>{var k;return I.name===x||((k=I.name)==null?void 0:k.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:x,by:i,seq:(o._gcAnimSeq||0)+1};j.add(w.seq),ye(x,i,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const k=te[b.effect_type];if(k){const E={...o};k(b.effect_params||{},E,async S=>{S["usedGc_"+i]=v,S._lastGC=w,S._gcAnimSeq=w.seq,await ne(S)});return}}const I={...o};switch(x){case"Remplacement+":I.maxSubs=(I.maxSubs||3)+1,I.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const k=a+"Score";I[k]>0&&(I[k]--,I.log.push({text:"🚫 But annulé",type:"info"}));break}}I["usedGc_"+i]=v,I._lastGC=w,I._gcAnimSeq=w.seq,await ne(I)})}function ie(u,x){const h="usedCardIds_"+u,y=new Set(o[h]||[]);x.forEach(b=>y.add(b)),o[h]=[...y]}function B(){for(const u of["p1","p2"]){const x=new Set(o["usedCardIds_"+u]||[]),h=o[u+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(b=>{b.used=x.has(b.cardId)})}}function X(){var Qe,mt,xt,yt,ht,W;if(o.phase==="reveal")return Y();if(o.phase==="midfield")return he();if(o.phase==="finished")return T();const u=o[i+"Team"],x=o[a+"Team"];B();const h=o[i+"Score"],y=o[a+"Score"],b=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",I=o.phase===i+"-defense",k=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],E=k.map(q=>q.cardId),S=window.innerWidth>=700,G=o[i+"Subs"]||[],Q=o["usedSubIds_"+i]||[],le=G.filter(q=>!Q.includes(q.cardId)),Z=o["gcCardsFull_"+i]||[],N=o["usedGc_"+i]||[],U=Z.filter(q=>!N.includes(q.id)),ee=o.boostOwner===i&&!o.boostUsed,se=!["GK","DEF","MIL","ATT"].some(q=>(x[q]||[]).some(oe=>!oe.used)),ce=[...u.MIL||[],...u.ATT||[]].filter(q=>!q.used),pe=w&&se&&ce.length===0?[...u.GK||[],...u.DEF||[]].filter(q=>!q.used).map(q=>q.cardId):[];function fe(q,oe,ae){var wt,mi;const me=q._gcDef,Ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[me==null?void 0:me.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",We={purple:"#b06ce0",light_blue:"#00d4ef"}[me==null?void 0:me.color]||"#b06ce0",Je=(me==null?void 0:me.name)||q.gc_type,et=(me==null?void 0:me.effect)||((wt=Ge[q.gc_type])==null?void 0:wt.desc)||"",St=me!=null&&me.image_url?`/manager-wars/icons/${me.image_url}`:null,Ct=((mi=Ge[q.gc_type])==null?void 0:mi.icon)||"⚡",bt=Math.round(ae*.22),lt=Math.round(ae*.22),vt=ae-bt-lt,jt=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${q.id}" data-gc-type="${q.gc_type}"
        style="box-sizing:border-box;width:${oe}px;height:${ae}px;border-radius:10px;border:2px solid ${We};background:${Ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${jt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${oe-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${St?`<img src="${St}" style="max-width:${oe-10}px;max-height:${vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(vt*.55)}px">${Ct}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function be(q,oe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${q}px;height:${oe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(oe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(oe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(oe*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Se=(q,oe)=>oe?be(130,175):fe(q,130,175),Re=(q,oe)=>oe?be(68,95):fe(q,68,95),Be=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=w?Te(i)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${k.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:I?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${k.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Le=w&&!Te(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||I?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${k.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(q=>`<div class="pvp-sub-btn" data-sub-id="${q.cardId}" style="cursor:pointer;flex-shrink:0">${Ve(q,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,De=w?"attack":I?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${dt(u,o[i+"Formation"],De,E,300,300,pe)}
      </div>
    </div>`;function Ue(q){if(q.type==="duel"&&(q.homeTotal!=null||q.aiTotal!=null)){const oe=(q.homeTotal||0)>=(q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(q.homePlayers||[]).map(ae=>nt(ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${oe?20:14}px;font-weight:900;color:${oe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${oe?14:20}px;font-weight:900;color:${oe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(q.aiPlayers||[]).map(ae=>nt(ae)).join("")}
            </div>
          </div>
          ${q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${q.type==="goal"?700:400};padding:3px 2px">${q.text||""}</div>`}const Ke=(()=>{var oe,ae;if(I&&((oe=o.pendingAttack)!=null&&oe.players)){const me=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((me.players||[]).map(Ye=>({...Ye,used:!1})),"#ff6b6b",me.total)}
        </div>`}if(w&&((ae=o.pendingAttack)!=null&&ae.players)){const me=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((me.players||[]).map(Ye=>({...Ye,used:!1})),"#00ff88",me.total)}
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
            ${U.map(q=>Se(q,!1)).join("")}
            ${ee?Se(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ce}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${dt(u,o[i+"Formation"],De,E,300,300,pe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${U.map(q=>Re(q,!1)).join("")}
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
      </div>`;function Fe(){const q=e.querySelector(".match-screen");if(!q)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);q.style.height=oe+"px",q.style.minHeight=oe+"px",q.style.maxHeight=oe+"px",q.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),me=e.querySelector("#mobile-play-area");ae&&me&&(me.style.paddingBottom=ae.offsetHeight+"px")}if(Fe(),setTimeout(Fe,120),setTimeout(Fe,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Fe),window.visualViewport.addEventListener("scroll",Fe)),window.addEventListener("resize",Fe)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(q=>{q.addEventListener("click",()=>{if(!w&&!I)return;const oe=q.dataset.cardId,ae=q.dataset.role,me=(u[ae]||[]).find(et=>et.cardId===oe);if(!me||me.used)return;const Ye=pe.includes(oe);if(w&&!["MIL","ATT"].includes(ae)&&!Ye)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const We=o["selected_"+i],Je=We.findIndex(et=>et.cardId===oe);Je>-1?We.splice(Je,1):We.length<3&&We.push({...me,_role:ae}),X()})}),e.querySelectorAll(".match-used-hit").forEach(q=>{q.addEventListener("click",()=>V(q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(q=>{q.addEventListener("click",()=>V())}),(Qe=e.querySelector("#pvp-sub-open"))==null||Qe.addEventListener("click",()=>V()),e.querySelectorAll(".pvp-gc-mini").forEach(q=>{q.addEventListener("click",()=>R(q.dataset.gcId,q.dataset.gcType))}),(mt=e.querySelector("#pvp-boost-card"))==null||mt.addEventListener("click",()=>O()),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",q=>{w?q.currentTarget.dataset.pass==="1"||!Te(i)?re():Ae():I&&ke()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ue()}),(ht=e.querySelector("#pvp-view-opp"))==null||ht.addEventListener("click",()=>J()),(W=e.querySelector("#pvp-toggle-history"))==null||W.addEventListener("click",()=>ge()),L&&(clearInterval(L),L=null),(w||I)&&!_){let q=30,oe=!1;const ae=()=>document.getElementById("pvp-timer"),me=()=>{ae()&&(ae().textContent=q+"s",ae().style.color=oe?"#ff4444":"#fff")};me(),L=setInterval(()=>{q--,q<0?oe?(clearInterval(L),L=null,w&&!Te(i)?re():ue()):(oe=!0,q=15,me()):me()},1e3)}}function Y(){Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await ne({phase:"midfield"})},5e3)}let de=!1;function he(){if(de)return;const u=o[i+"Team"].MIL||[],x=o[a+"Team"].MIL||[];function h(U){return U.reduce((ee,se)=>ee+we(se,"MIL"),0)}function y(U){let ee=0;for(let se=0;se<U.length-1;se++){const ce=Ze(U[se],U[se+1]);ce==="#00ff88"?ee+=2:ce==="#FFD700"&&(ee+=1)}return ee}const b=h(u)+y(u),v=h(x)+y(x),w=b>=v;function I(U,ee,se){return`<div id="duel-row-${se}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ee}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${U.map((ce,pe)=>{const fe=pe<U.length-1?Ze(ce,U[pe+1]):null,be=!fe||fe==="#ff3333"||fe==="#cc2222",Se=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${se}" data-idx="${pe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ve({...ce,note:we(ce,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${pe<U.length-1?`<div class="duel-link duel-link-${se}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${fe}`}">
              ${Se?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${Se}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${se}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(U)} + ${y(U)} liens = <b style="color:#fff">${h(U)+y(U)}</b>
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
      ${I(x,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const k=(U,ee)=>e.querySelectorAll(U).forEach((se,ce)=>{setTimeout(()=>{se.style.opacity="1",se.style.transform="translateY(0) scale(1)"},ee+ce*90)});k(".duel-card-me",150),k(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((U,ee)=>setTimeout(()=>{U.style.opacity="1"},ee*70)),900),setTimeout(()=>{const U=e.querySelector("#pvp-vs");U&&(U.style.opacity="1",U.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ee=>ee.style.opacity="1")},1250);function E(U,ee,se){const ce=document.getElementById(U);if(!ce)return;const pe=performance.now(),fe=be=>{const Se=Math.min(1,(be-pe)/se);ce.textContent=Math.round(ee*(1-Math.pow(1-Se,3))),Se<1?requestAnimationFrame(fe):ce.textContent=ee};requestAnimationFrame(fe)}setTimeout(()=>{E("pvp-score-me",b,800),E("pvp-score-opp",v,800)},1500);const S=o.p1Team.MIL||[],G=o.p2Team.MIL||[],Q=h(S)+y(S),le=h(G)+y(G),Z=Q>=le?"p1":"p2";let N=o.boostValue;N==null&&(N=si(),o.boostValue=N,o.boostOwner=Z,o.boostUsed=!1),de=!0,setTimeout(()=>{const U=e.querySelector("#duel-row-"+(w?"me":"opp")),ee=e.querySelector("#duel-row-"+(w?"opp":"me")),se=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),pe=w?se:ce,fe=w?ce:se;pe&&(pe.style.fontSize="80px",pe.style.color=w?"#FFD700":"#ff6b6b",pe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{U&&(U.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",U.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),ee&&(ee.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const be=document.getElementById("pvp-duel-finale");if(!be)return;const Se=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+N+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Se+Re,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const Ie=Z;await ne({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:N,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function xe(u,x,h,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(S,G)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${G%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][G%8]}</div>`).join(""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let k=!1;const E=()=>{k||(k=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",E),setTimeout(E,3500)}function ye(u,x,h){var N,U;const y=(o.gcDefs||[]).find(ee=>{var se;return ee.name===u||((se=ee.name)==null?void 0:se.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||u,I=(y==null?void 0:y.effect)||((N=Ge[u])==null?void 0:N.desc)||"",k=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,E=((U=Ge[u])==null?void 0:U.icon)||"⚡",G=x===i?"Vous":o[x+"Name"]||"Adversaire",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${G} joue une carte</div>
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Q);let le=!1;const Z=()=>{le||(le=!0,Q.remove(),setTimeout(()=>h&&h(),50))};Q.addEventListener("click",Z),setTimeout(Z,3e3)}function R(u,x){var Q,le,Z,N;const y=(o["gcCardsFull_"+i]||[]).find(U=>U.id===u),b=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",I=(b==null?void 0:b.name)||x,k=(b==null?void 0:b.effect)||((Q=Ge[x])==null?void 0:Q.desc)||"Carte spéciale.",E=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,S=((le=Ge[x])==null?void 0:le.icon)||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
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
      </div>`,document.body.appendChild(G),(Z=G.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>G.remove()),(N=G.querySelector("#pvp-gc-use"))==null||N.addEventListener("click",()=>{G.remove(),K(u,x)})}function O(){var y;const u=o[i+"Team"],x=Object.entries(u).flatMap(([b,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!x.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(b=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=we(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const v=b.dataset.cid,w=x.find(k=>k.cardId===v);if(!w)return;const I=(u[w._line]||[]).find(k=>k.cardId===v);I&&(I.boost=(I.boost||0)+o.boostValue),h.remove(),await ne({[i+"Team"]:u,boostUsed:!0})})})}function V(u=null){var le,Z;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],b=o.maxSubs||3;if(y.length>=b){c(`Maximum ${b} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([N,U])=>(U||[]).filter(ee=>ee.used).map(ee=>({...ee,_line:N}))),w=(o[i+"Subs"]||[]).filter(N=>!y.includes(N.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let I=Math.max(0,v.findIndex(N=>N.cardId===u));const k=((le=v[I])==null?void 0:le._line)||((Z=v[I])==null?void 0:Z.job);let E=Math.max(0,w.findIndex(N=>N.job===k)),S=!1;const G=document.createElement("div");G.id="pvp-sub-overlay",G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var fe,be,Se,Re,Be,Ie;const N=v[I],U=w[E],ee=Math.min(130,Math.round((window.innerWidth-90)/2)),se=Math.round(ee*1.35),ce=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;G.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ce(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${U?Ve({...U,used:!1,boost:0},ee,se):"<div>—</div>"}</div>
          <button id="pin-down" style="${ce(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ce(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${N?Ve({...N,used:!1,boost:0},ee,se):"<div>—</div>"}</div>
          <button id="pout-down" style="${ce(I>=v.length-1)}" ${I>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=G.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>G.remove()),(be=G.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{I>0&&(I--,Q())}),(Se=G.querySelector("#pout-down"))==null||Se.addEventListener("click",()=>{I<v.length-1&&(I++,Q())}),(Re=G.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{E>0&&(E--,Q())}),(Be=G.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{E<w.length-1&&(E++,Q())});const pe=(Le,je,De,Pe)=>{const Ue=G.querySelector("#"+Le);if(!Ue)return;let Ke=0;Ue.addEventListener("touchstart",Ce=>{Ke=Ce.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ce=>{const Fe=Ce.changedTouches[0].clientY-Ke;if(Math.abs(Fe)<30)return;const Qe=je();Fe<0&&Qe<Pe-1?(De(Qe+1),Q()):Fe>0&&Qe>0&&(De(Qe-1),Q())},{passive:!0})};pe("pin-panel",()=>E,Le=>E=Le,w.length),pe("pout-panel",()=>I,Le=>I=Le,v.length),(Ie=G.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),S)return;S=!0;const je=v[I],De=w[E];if(!je||!De)return;const Pe=je._line,Ue=(h[Pe]||[]).findIndex(Fe=>Fe.cardId===je.cardId);if(Ue===-1){c("Erreur : joueur introuvable","error"),G.remove();return}const Ke={...De,_line:Pe,position:je.position,used:!1,boost:0};h[Pe].splice(Ue,1,Ke);const Ce=[...y,De.cardId];G.remove(),H(je,De,async()=>{await ne({[i+"Team"]:h,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:Ce})})})}document.body.appendChild(G),Q()}function H(u,x,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(k,E,S)=>`<div style="text-align:center">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const I=()=>{w||(w=!0,b.remove(),setTimeout(()=>h(),50))};b.addEventListener("click",I),setTimeout(I,2200)}function J(){var x;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${st(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(x=u.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>u.remove())}function ge(){var h;const u=o.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function re(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",x=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=qe(o),b=Te(u),v=y||!b?"finished":u+"-attack";await ne({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:x,log:h}),v==="finished"&&await He(o)}async function Ae(){const u=o[i+"Team"],x=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(Q=>Q.cardId===v.cardId)||v,I=x&&["GK","DEF"].includes(v._role),k=u[v._role]||[],E=k.findIndex(Q=>Q.cardId===v.cardId),S=ot(k.length),G=E>=0?S[E]:w._col??1;return{...w,_line:v._role,_col:G,...I?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Pt(h,o.modifiers[i]||{});ie(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(u[v._role]||[]).find(I=>I.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],X();const b=[...o.log||[]];if(x){const v=(o[i+"Score"]||0)+1,w=h.map(G=>({name:G.name,note:we(G,G._line||"ATT"),portrait:ze(G),job:G.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const I=(o.round||0)+1,k=i==="p1"?"p2":"p1",E={...o,[i+"Team"]:u,[i+"Score"]:v},S=qe(E);P.add(I),xe(w,v,o[a+"Score"]||0,!0,async()=>{await ne({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:S?"finished":k+"-attack",attacker:k,round:I,log:b}),S&&await He({...o,[i+"Score"]:v})});return}b.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await ne({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:b})}async function ke(){const u=o[i+"Team"],x=(o["selected_"+i]||[]).map(N=>{const U=(u[N._role]||[]).find(fe=>fe.cardId===N.cardId)||N,ee=u[N._role]||[],se=ee.findIndex(fe=>fe.cardId===N.cardId),ce=ot(ee.length),pe=se>=0?ce[se]:U._col??1;return{...U,_line:N._role,_col:pe}}),h=Ot(x,o.modifiers[i]||{});ie(i,x.map(N=>N.cardId)),x.forEach(N=>{const U=(u[N._role]||[]).find(ee=>ee.cardId===N.cardId);U&&(U.used=!0)}),o["selected_"+i]=[],X();const y=Ht(o.pendingAttack.total,h.total,o.modifiers[i]||{}),b=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=b==="p1"?"p2":"p1",I=(o.round||0)+1,k=(o.pendingAttack.players||[]).map(N=>({name:N.name,note:we(N,N._line||"ATT"),portrait:ze(N),job:N.job})),E=[...o.log||[]];E.push({type:"duel",isGoal:v,homeScored:v&&b===i,text:v?`⚽ BUT de ${o[b+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:k,aiPlayers:x.map(N=>({name:N.name,note:we(N,N._line||"DEF"),portrait:ze(N),job:N.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const S=v?(o[b+"Score"]||0)+1:o[b+"Score"]||0,G={...o,[i+"Team"]:u,[b+"Score"]:S},Q=qe(G),le=Q?"finished":w+"-attack",Z=async()=>{await ne({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],[b+"Score"]:S,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:le,attacker:w,round:I,log:E}),(le==="finished"||Q)&&await He({...o,[b+"Score"]:S})};if(v){const N=b===i,U=N?S:o[i+"Score"]||0,ee=N?o[a+"Score"]||0:S;P.add(I),xe(k,U,ee,N,Z)}else await Z()}function $e(u){return["MIL","ATT"].some(x=>(u[x]||[]).some(h=>!h.used))}function _e(u){return["GK","DEF","MIL","ATT"].some(x=>(u[x]||[]).some(h=>!h.used))}function Ee(u){return _e(u)&&!$e(u)}function Te(u){const x=o[u+"Team"],h=o[(u==="p1"?"p2":"p1")+"Team"];return!!($e(x)||!_e(h)&&Ee(x))}function qe(u){const x=["MIL","ATT"].some(E=>(u.p1Team[E]||[]).some(S=>!S.used)),h=["MIL","ATT"].some(E=>(u.p2Team[E]||[]).some(S=>!S.used)),y=_e(u.p1Team),b=_e(u.p2Team);return!x&&!(!b&&y)&&(!h&&!(!y&&b))}function Ne(u){const x=u.p1Score||0,h=u.p2Score||0;return x===h?null:x>h?m.home_id:m.away_id}async function He(u){try{await A.from("matches").update({status:"finished",winner_id:Ne(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(x){console.error("[PvP] finishMatch:",x)}}function T(){var b;const u=o[i+"Score"],x=o[a+"Score"],h=u>x,y=u===x;Xe(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{A.removeChannel(D)}catch{}Oe(e),l("home")})}X()}const yo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function ho(e,t){const{state:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:r}=t,{data:p}=await A.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
      </div>`;return}const g=i==="mine"?[...f].sort((m,$)=>m.status!==$.status?m.status==="active"?-1:1:new Date($.listed_at)-new Date(m.listed_at)):f;a.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(m=>{var F,P,j,C;const $=(F=m.card)==null?void 0:F.player;if(!$)return"";const o=$.job==="GK"?$.note_g:$.job==="DEF"?$.note_d:$.job==="MIL"?$.note_m:$.note_a,_=yo[$.rarity],M=(n.profile.credits||0)>=m.price,L=m.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${L?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${_o($.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${_};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${$.firstname} ${$.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${$.country_code} · ${((P=$.clubs)==null?void 0:P.encoded_name)||"—"} · ${$.rarity} · ${$.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((j=m.seller)==null?void 0:j.pseudo)||"—"}</div>`:L?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((C=m.buyer)==null?void 0:C.pseudo)||"—"} · ${m.sold_at?new Date(m.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(m.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${m.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${m.id}" ${M?"":"disabled"} style="margin-top:4px">${M?"Acheter":"Trop cher"}</button>`:L?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${m.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,a.querySelectorAll("[data-buy]").forEach(m=>{m.addEventListener("click",()=>bo(m.dataset.buy,f,e,t))}),a.querySelectorAll("[data-cancel]").forEach(m=>{m.addEventListener("click",()=>wo(m.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(a=>{const f=a===i;a.style.background=f?"var(--green)":"#fff",a.style.color=f?"#fff":"var(--gray-600)",a.style.borderColor=f?"var(--green)":"var(--gray-200)"}),c(i.dataset.tab)})})}async function bo(e,t,n,r){var m;const{state:p,toast:s,refreshProfile:d}=r,l=t.find($=>$.id===e);if(!l)return;const c=l.price,i=p.profile.credits||0,a=(m=l.card)==null?void 0:m.player;if(i<c){s("Crédits insuffisants","error");return}if(!await vo(a,c))return;const g=document.querySelector(`[data-buy="${e}"]`);g&&(g.disabled=!0,g.textContent="⏳");try{const{data:$,error:o}=await A.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(o)throw new Error(o.message);if(!($!=null&&$.success))throw new Error(($==null?void 0:$.error)||"Achat impossible");p.profile.credits=i-c;const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(i-c).toLocaleString("fr")}`),s(`✅ ${a==null?void 0:a.surname_encoded} ajouté à ta collection !`,"success"),fi(n,r)}catch($){s("❌ "+$.message,"error"),g&&(g.disabled=!1,g.textContent="Acheter")}}function vo(e,t){return new Promise(n=>{const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
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
      </div>`,document.body.appendChild(r);const p=s=>{r.remove(),n(s)};r.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),r.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),r.addEventListener("click",s=>{s.target===r&&p(!1)})})}async function wo(e,t,n){const{toast:r}=n,{data:p}=await A.from("market_listings").select("card_id").eq("id",e).single();await A.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),r("Annonce retirée","success"),fi(t,n)}function _o(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function $o(e,{state:t,navigate:n,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await A.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function ko(e,{state:t,navigate:n,toast:r}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(a=>a.status==="finished"),c=(s||[]).filter(a=>a.status==="in_progress");function i(a){const f=a.home_id===p.id;f?a.home_score:a.away_score,f?a.away_score:a.home_score;const g=a.winner_id===p.id,m=a.home_score===a.away_score&&a.status==="finished",$=a.status!=="finished"?"…":m?"N":g?"V":"D",o=a.status!=="finished"||m?"#888":g?"#1A6B3C":"#c0392b";let _=d[a.mode]||a.mode;a.away_id===null&&!_.startsWith("IA")&&(_="IA");const L=a.home_id===p.id?a.away:a.home;let F;a.away_id===null?F=_:L?F=`${L.club_name||L.pseudo} (${L.pseudo})`:F="Adversaire";let P="";a.status==="in_progress"&&Date.now()-new Date(a.created_at).getTime()>3600*1e3&&(P=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const j=new Date(a.created_at),C=j.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+j.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=a.status==="finished"?`${a.home_score} - ${a.away_score}`:`${a.home_score||0} - ${a.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${F}${P}</div>
        <div style="font-size:11px;color:var(--gray-600)">${_} · ${C}${a.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
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
  </div>`}Zi(tn);const ve={user:null,profile:null,page:"home",params:{}};function kt(e,t="info",n=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},n))}function Eo(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function Et(){if(!ve.user)return;const{data:e}=await A.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}const gi="mw_theme";function Rt(){return localStorage.getItem(gi)||"light"}function To(e){var t;localStorage.setItem(gi,e),ni(e),(t=ve.profile)!=null&&t.id&&A.from("users").update({theme:e}).eq("id",ve.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Dt(e,t={}){ve.page=e,ve.params=t,Ji()}async function Ji(){var r,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const n={state:ve,navigate:Dt,toast:kt,openModal:Eo,closeModal:ii,refreshProfile:Et};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await bi(e,n);break;case"collection":await kn(e,n);break;case"decks":await Qt(e,n);break;case"boosters":await Dn(e,n);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await gn(e,n):s==="friend"?await go(e,n,(r=ve.params)==null?void 0:r.friendId,(p=ve.params)==null?void 0:p.friendName):await Jn(e,n);break}case"market":await ho(e,n);break;case"rankings":await $o(e,n);break;case"matches":await ko(e,n);break;case"friends":await an(e,n);break;default:await bi(e,n)}}function Ao(){const e=document.getElementById("app"),t=ve.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",p=>{p.preventDefault(),Dt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Rt()==="dark"?"light":"dark";To(p),Ti(p)}),Ti(Rt())}function Ti(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Io(){ni(Rt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await A.auth.getSession();if(!e){Ai(),xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt});return}ve.user=e.user,await Et(),Ai();try{const{data:n}=await A.from("formation_links_overrides").select("formation, links"),r={};(n||[]).forEach(p=>{r[p.formation]=p.links}),en(r)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!ve.profile){nn(document.getElementById("app"),{state:ve,navigate:async()=>{await Et(),Wt()},toast:kt,refreshProfile:Et});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){Wn(document.getElementById("app"),{state:ve,navigate:()=>Wt(),toast:kt,refreshProfile:Et});return}ve.profile.theme&&ve.profile.theme!==Rt()&&(localStorage.setItem(gi,ve.profile.theme),ni(ve.profile.theme)),Wt(),A.auth.onAuthStateChange(async(n,r)=>{n==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",xi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:kt}))})}function Lo(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=Lo()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Wt(){const e=()=>{var n;(n=ve.user)!=null&&n.id&&A.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),Ao(),Ji()}function Ai(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Qi(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}Io().catch(e=>{console.error("Échec du démarrage:",e),Qi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Qi("Le serveur met trop de temps à répondre.")},12e3);
