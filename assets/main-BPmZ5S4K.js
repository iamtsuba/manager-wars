import{s as E,l as Qe,j as Ti,F as oi,h as St,i as Qi,k as Zi,b as en}from"./formation-links-CEzN0rcz.js";function mi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!r||!p){s.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:l}=await E.auth.signInWithPassword({email:r,password:p});if(d.textContent="Se connecter",d.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!r||!p||!s){d.textContent="Remplissez tous les champs.";return}if(p.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==s){d.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await E.auth.signUp({email:r,password:p});if(l.textContent="Créer mon compte",l.disabled=!1,c){d.textContent=c.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function tn(e,{state:t,navigate:n,toast:r,refreshProfile:p}){let s="#1A6B3C",d="#D4A017";e.innerHTML=`
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
  `;function l(){var k;const i=document.getElementById("logo-preview"),a=document.getElementById("logo-initials"),f=((k=document.getElementById("setup-club"))==null?void 0:k.value)||"MW",m=f.trim().split(" ").filter(Boolean),x=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=s),a&&(a.textContent=x,a.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,l()});function c(i){document.querySelectorAll(".setup-step").forEach(a=>a.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("step1-error");if(a.textContent="",i.length<3){a.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await E.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){a.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),a=document.getElementById("step2-error");if(a.textContent="",i.length<2){a.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await E.from("users").select("id").eq("club_name",i).maybeSingle();if(f){a.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:x}=await E.from("users").insert({id:t.user.id,pseudo:i,club_name:a,club_color1:s,club_color2:d,credits:1e4});if(x)throw x;await nn(t.user.id),await p(),r(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){f.textContent=x.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function nn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const Lt="#1A6B3C",zt="#cc2222",on="#D4A017",xi="#888";async function rn(e,t){const{state:n,toast:r}=t;e.innerHTML=`
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
    </div>`,await Ii(n,r,t),document.getElementById("btn-add-friend").addEventListener("click",()=>sn(n,r)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Li(n,r,null,t))}async function Ii(e,t,n={}){const{navigate:r}=n,p=e.user.id,{data:s,error:d}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${p},addressee_id.eq.${p}`),{count:l}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",p).eq("status","pending"),c=document.getElementById("pending-badge");c&&(l>0?(c.style.display="flex",c.textContent=l):c.style.display="none");const i=document.getElementById("friends-list");if(!i)return;if(d){console.error("[Friends] Erreur:",d),i.innerHTML=`<div style="color:${zt};text-align:center;padding:16px">Erreur chargement : ${d.message}</div>`;return}const a=(s||[]).map(x=>x.requester_id===p?x.addressee_id:x.requester_id);let f={};if(a.length){const{data:x}=await E.from("users").select("id, pseudo, club_name, last_seen_at").in("id",a);(x||[]).forEach(k=>{f[k.id]=k})}const m=(s||[]).map(x=>({friendshipId:x.id,friend:f[x.requester_id===p?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!m.length){i.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}i.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:x,friend:k})=>an(k,x)).join("")}
    </div>`,i.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>dn(e,x.dataset.stats,x.dataset.friendName))}),i.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const k=x.dataset.friendId,o=x.dataset.friendName;console.log("[Friends] clic match",{fid:k,fname:o,hasNavigate:typeof r}),typeof r=="function"?r("match",{matchMode:"friend",friendId:k,friendName:o}):t("Erreur navigation","error")})})}function an(e,t){const n=e.club_name||e.pseudo||"?",r=(e.pseudo||"?").slice(0,2).toUpperCase(),p=e.last_seen_at?new Date(e.last_seen_at):null,s=p&&Date.now()-p.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <!-- Avatar + point de présence -->
      <div style="position:relative;width:42px;height:42px;flex-shrink:0">
        <div style="width:42px;height:42px;border-radius:50%;background:${Lt};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff">
          ${r}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${s?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px;flex-shrink:0"></div>`}
      </div>
      <!-- Infos -->
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:${s?"#22c55e":"#999"};font-weight:600">${s?"En ligne":"Hors ligne"}</div>
      </div>
      <!-- Boutons -->
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${n}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${n}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid ${on};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function sn(e,t){const n=ri();n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${zt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${ai()}`,document.body.appendChild(n);const r=n.querySelector("#friend-pseudo-input"),p=n.querySelector("#add-friend-error"),s=()=>n.remove();r.focus(),n.querySelector("#add-cancel").addEventListener("click",s),n.addEventListener("click",d=>{d.target===n&&s()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const d=r.value.trim();if(!d){p.textContent="Entre un pseudo";return}p.textContent="";const{data:l}=await E.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!l){p.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){p.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(c){const a=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";p.textContent=a;return}const{error:i}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){p.textContent="Erreur : "+i.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Li(e,t,n=null,r={}){const p=e.user.id,{data:s}=await E.from("friendships").select("id, requester_id").eq("addressee_id",p).eq("status","pending").order("created_at",{ascending:!1}),d=(s||[]).map(m=>m.requester_id);let l={};if(d.length){const{data:m}=await E.from("users").select("id, pseudo, club_name").in("id",d);(m||[]).forEach(x=>{l[x.id]=x})}const c=(s||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),i=ri(),a=c||[];i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${a.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${a.map(m=>{var x,k,o;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=m.requester)==null?void 0:x.club_name)||((k=m.requester)==null?void 0:k.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((o=m.requester)==null?void 0:o.pseudo)||""})</span>
                </div>
                <button data-accept="${m.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${m.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${zt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(i);const f=()=>i.remove();i.querySelector("#pending-close").addEventListener("click",f),i.addEventListener("click",m=>{m.target===i&&f()}),i.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:x}=await E.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ii(e,t,r),n&&n()})}),i.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function dn(e,t,n){const r=e.user.id,[p,s]=[r,t].sort(),d=r===p,{data:l}=await E.from("friend_match_stats").select("*").eq("player1_id",p).eq("player2_id",s).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},a=d?i.wins_p1||0:i.wins_p2||0,f=d?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,x=d?i.goals_p1||0:i.goals_p2||0,k=d?i.goals_p2||0:i.goals_p1||0,o=d?i.gc_used_p1||0:i.gc_used_p2||0,A=d?i.gc_used_p2||0:i.gc_used_p1||0,z=i.matches_total||0,M=(O,j,S,D=Lt,Z=zt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${D}">${j}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${O}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Z}">${S}</div>
    </div>`,C=ri();C.innerHTML=`
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
        ${M("Victoires",a,f)}
        ${M("Nuls",m,m,xi,xi)}
        ${M("Défaites",f,a)}
        ${M("Buts marqués",x,k)}
        ${M("Buts encaissés",k,x,zt,Lt)}
        ${M("GC utilisés ⚡",o,A,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ai()}`,document.body.appendChild(C),C.querySelector("#stats-close").addEventListener("click",()=>C.remove()),C.addEventListener("click",O=>{O.target===C&&C.remove()})}function ri(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ai(){return`
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
    </style>`}const Be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function be(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const yi=["ATT","MIL","DEF","GK"];function zi(e){let t=0;const n=e.length;for(let r=0;r<n;r++)for(let p=r+1;p<n;p++){const s=e[r],d=e[p];if(!s||!d)continue;const l=s._col!=null&&d._col!=null&&s._col===d._col,c=s._col!=null&&d._col!=null&&Math.abs(s._col-d._col)===1,i=yi.indexOf(s._line||s.job),a=yi.indexOf(d._line||d.job),f=Math.abs(i-a)===1;if(!((s._line||s.job)===(d._line||d.job)&&c||l&&f))continue;const k=s.country_code&&d.country_code&&s.country_code===d.country_code,o=s.club_id&&d.club_id&&s.club_id===d.club_id;k&&o?t+=2:(k||o)&&(t+=1)}return t}function Nt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;return s+(Number(l==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),r=zi(e);let p=n+r;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:n,links:r,total:Math.max(0,p)}}function Rt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;let c=0;return l==="GK"?c=Number(d.note_g)||0:l==="MIL"?c=Number(d.note_m)||0:c=Number(d.note_d)||0,s+c+(d.boost||0)},0),r=zi(e);let p=n+r;return t.stolenNote&&(p-=t.stolenNote),{base:n,links:r,total:Math.max(0,p)}}function Pt(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Mi(e,t,n="easy"){const r=e.filter(d=>!d.used);if(!r.length)return[];const p=[...r].sort((d,l)=>{const c=t==="attack"?be(d,"ATT"):d._line==="GK"?be(d,"GK"):be(d,"DEF");return(t==="attack"?be(l,"ATT"):l._line==="GK"?be(l,"GK"):be(l,"DEF"))-c});let s=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(s,p.length,3))}function ln(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const lt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ct={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ot(e,t,n,r,p){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",p)}function Ie(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Xt(e,t){var r,p;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((r=n.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((p=n.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function it(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function si(){const e=Math.random()*100;return e<10?3:e<30?2:1}function pt(e,t){const n=lt[t]||lt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,a)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(a.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),c=it(l.length);l.forEach((i,a)=>{i._col=c[a]}),r[d]=l}return r}const s=[...e];for(const d of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[d];i++){let a=s.findIndex(f=>f.job===d);if(a===-1&&(a=s.findIndex(f=>f.job2===d)),a===-1&&(a=0),s[a]){const f={...s[a],_line:d};l.push(f),s.splice(a,1)}}const c=it(l.length);l.forEach((i,a)=>{i._col=c[a]}),r[d]=l}return r}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ne(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function di(e,t,n){const p=new Set,s=t.filter(a=>{const f=a.gc_type||a.id;return p.has(f)?!1:(p.add(f),!0)});let d=[];function l(a,f){const m=a._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},k={purple:"#9b59b6",light_blue:"#00bcd4"},o=x[m==null?void 0:m.color]||x.purple,A=k[m==null?void 0:m.color]||k.purple;return`<div class="gc-select-card" data-id="${a.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":A};background:${o};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||a.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||a.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/manager-wars/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=a=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(a)};function i(){var f,m,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const a=d.length>0;e.innerHTML=`
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
        ${s.map(k=>{const o=d.find(A=>A.gc_type===k.gc_type);return l(k,!!o)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(k=>{k.addEventListener("click",()=>{const o=k.dataset.id,A=s.find(M=>M.id===o);if(!A)return;const z=d.findIndex(M=>M.gc_type===A.gc_type);z>-1?d.splice(z,1):d.length<3&&d.push(A),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{a&&c(d)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>c([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}function cn(e){var r;const t=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},n=t.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${t.friendName||"Ami"}`:n==="random"?"Match vs Random":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function pn(e,t,n){const{state:r,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await E.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){ot(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const d=s.map(a=>a.id),{data:l}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let c=0;function i(){var M,C,O,j,S;const a=s[c],f=(l||[]).filter(D=>D.deck_id===a.id),m=f.filter(D=>{var Z;return D.is_starter&&((Z=D.card)==null?void 0:Z.player)}).map(D=>Xt(D.card,D.position)),x=f.find(D=>{var Z;return((Z=D.card)==null?void 0:Z.card_type)==="formation"}),k=a.formation||((M=x==null?void 0:x.card)==null?void 0:M.formation)||"4-4-2",o=m.length>=11?pt(m,k):null,A=m.length>=11;We(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${cn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${a.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${k} · ${m.length}/11 ${a.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${st(o,k,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((D,Z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Z===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${A?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${A?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${A?"pointer":"default"}">
          ${A?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Z=e.querySelector(".deck-preview-wrap svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(C=document.getElementById("prev-deck"))==null||C.addEventListener("click",()=>{c>0&&(c--,i())}),(O=document.getElementById("next-deck"))==null||O.addEventListener("click",()=>{c<s.length-1&&(c++,i())}),(j=document.getElementById("validate-deck"))==null||j.addEventListener("click",()=>{if(!A)return;const D=t.state.params||{};t.navigate("match",{...D,matchMode:D.matchMode||n,deckId:a.id})}),(S=document.getElementById("cancel-deck-select"))==null||S.addEventListener("click",()=>{Ne(e),p("home")});const z=document.getElementById("deck-swipe-zone");if(z){let D=0,Z=0;z.addEventListener("touchstart",se=>{D=se.touches[0].clientX,Z=se.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",se=>{const ae=se.changedTouches[0].clientX-D,F=se.changedTouches[0].clientY-Z;Math.abs(ae)<40||Math.abs(ae)<Math.abs(F)||(ae<0&&c<s.length-1?(c++,i()):ae>0&&c>0&&(c--,i()))},{passive:!0})}}i()}function Si(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ue(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ie(e),p=Si(e),s=e._line||e.job||"MIL",d=ct[s]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(be(e,s))||0)+(e.boost||0),i=Ci(e==null?void 0:e.country_code),a=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),x=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Jt(e==null?void 0:e.country_code)?`<img src="${Jt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,n){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((s,d)=>{if(p+=Ue(s,40,52),d<r.length-1){const l=Qe(s,r[d+1]);p+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),p+="</div>",p}function Jt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ci(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function at(e,t,n,r,p=310,s=310,d=[]){var C;const l=St[t]||{},c=Ti(t)||oi[t]||[],i={},a=["ATT","MIL","DEF","GK"];for(const O of a)(e[O]||[]).forEach((S,D)=>{i[`${O}${D+1}`]=S});function f(O){const j=l[O];return j?{x:j.x*p,y:j.y*s}:null}let m="";for(const[O,j]of c){const S=f(O),D=f(j);if(!S||!D)continue;const Z=i[O],se=i[j],ae=Qe(Z,se);ae==="#00ff88"||ae==="#FFD700"?(m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${ae}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${ae}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${ae}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,k=64,o=13,A=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[O,j]of Object.entries(i)){const S=f(O);if(!S||!j)continue;const D=O.replace(/[0-9]/g,""),Z=ct[D]||"#555",se=d.includes(j.cardId),ae=n==="attack"&&(["MIL","ATT"].includes(D)||se)&&!j.used||n==="defense"&&["GK","DEF","MIL"].includes(D)&&!j.used,F=r.includes(j.cardId);let Y;n==="attack"?Y=se?Math.max(1,Number(j.note_a)||0):D==="MIL"?Number(j.note_m)||0:Number(j.note_a)||0:n==="defense"?Y=D==="GK"?Number(j.note_g)||0:D==="MIL"?Number(j.note_m)||0:Number(j.note_d)||0:Y=Number(D==="GK"?j.note_g:D==="DEF"?j.note_d:D==="MIL"?j.note_m:j.note_a)||0,Y=Y+(j.boost||0);const te=(S.x-x/2).toFixed(1),B=(S.y-k/2).toFixed(1),Q=z[j==null?void 0:j.rarity]||z.normal;if(j.used){const N=typeof import.meta<"u"&&"/manager-wars/"||"/",P=`${typeof window<"u"&&((C=window.location)==null?void 0:C.origin)||""}${N}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${te}" y="${B}" width="${x}" height="${k}" rx="5" fill="#161616"/>`,m+=`<image href="${P}" xlink:href="${P}" x="${te}" y="${B}" width="${x}" height="${k}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${te}" y="${B}" width="${x}" height="${k}" rx="5" fill="none" stroke="${Q}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${te}" y="${B}" width="${x}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${j.cardId}" data-role="${D}" style="cursor:pointer"/>`;continue}const K=F?.45:1,re=F?"#FFD700":Q,ge=F?3:(j==null?void 0:j.rarity)==="legende"||(j==null?void 0:j.rarity)==="légende"||(j==null?void 0:j.rarity)==="pepite"||(j==null?void 0:j.rarity)==="pépite"?2.5:2,me=k-o-A;m+=`<defs><clipPath id="cp-${O}"><rect x="${te}" y="${(S.y-k/2+o).toFixed(1)}" width="${x}" height="${me}"/></clipPath></defs>`,m+=`<rect x="${te}" y="${B}" width="${x}" height="${k}" rx="5" fill="${Z}" opacity="${K}"/>`;const xe=Ie(j);xe&&(m+=`<image href="${xe}" xlink:href="${xe}" x="${te}" y="${(S.y-k/2+o).toFixed(1)}" width="${x}" height="${me}" clip-path="url(#cp-${O})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${te}" y="${B}" width="${x}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${S.x.toFixed(1)}" y="${(S.y-k/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.name||"").slice(0,9)}</text>`;const R=(S.y+k/2-A).toFixed(1);m+=`<rect x="${te}" y="${R}" width="${x}" height="${A}" fill="rgba(255,255,255,0.92)"/>`;{const N=Jt(j.country_code);N?m+=`<image href="${N}" xlink:href="${N}" x="${(S.x-20).toFixed(1)}" y="${(S.y+k/2-A+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(S.x-13).toFixed(1)}" y="${(S.y+k/2-A/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Ci(j.country_code)}</text>`,m+=`<text x="${S.x.toFixed(1)}" y="${(S.y+k/2-A/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const W=Si(j);W?m+=`<image href="${W}" xlink:href="${W}" x="${(S.x+x/2-14).toFixed(1)}" y="${(S.y+k/2-A+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:j.clubName&&(m+=`<text x="${(S.x+14).toFixed(1)}" y="${(S.y+k/2-A/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(j.clubName||"").slice(0,3).toUpperCase()}</text>`),j.boost&&(m+=`<rect x="${(S.x+x/2-12).toFixed(1)}" y="${(S.y-k/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(S.x+x/2-5).toFixed(1)}" y="${(S.y-k/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${j.boost}</text>`)}m+=`<rect x="${te}" y="${B}" width="${x}" height="${k}" rx="5" fill="${F?"rgba(255,255,255,0.12)":"none"}" stroke="${re}" stroke-width="${ge}" opacity="${K}"/>`,ae&&(m+=`<rect x="${te}" y="${B}" width="${x}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${F?"selected":""}" data-card-id="${j.cardId}" data-role="${D}" style="cursor:pointer"/>`)}const M=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-M} ${-M} ${p+M*2} ${s+M*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function st(e,t,n,r,p=300,s=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${at(e,t,n,r,p,s,d)}
  </div>`}function tt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function li(e,t,n,r){var j;const{state:p,navigate:s,toast:d}=t;We(e);const l=p.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return pn(e,t,n);const c=l.deckId;let i,a,f,m;try{const S=await Promise.all([E.from("decks").select("formation,name").eq("id",c).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);i=S[0].data,f=S[0].error,a=S[1].data,m=S[1].error}catch(S){console.error("[Match] Exception chargement deck:",S),ot(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),ot(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const x=(a||[]).filter(S=>{var D;return S.is_starter&&((D=S.card)==null?void 0:D.player)}).map(S=>Xt(S.card,S.position)),k=(a||[]).filter(S=>{var D;return!S.is_starter&&((D=S.card)==null?void 0:D.player)}).map(S=>Xt(S.card,S.position));if(x.length<11){ot(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>s("decks"));return}const o=(a||[]).find(S=>{var D;return((D=S.card)==null?void 0:D.card_type)==="formation"}),A=(i==null?void 0:i.formation)||((j=o==null?void 0:o.card)==null?void 0:j.formation)||"4-4-2",{data:z,error:M}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",p.profile.id).eq("card_type","game_changer"),{data:C}=await E.from("gc_definitions").select("*").eq("is_active",!0),O=(z||[]).map(S=>({...S,_gcDef:(C==null?void 0:C.find(D=>D.name===S.gc_type||D.id===S.gc_definition_id))||null}));r({deckId:c,formation:A,starters:x,subsRaw:k,gcCardsEnriched:O,gcDefs:C||[]})}async function un(e,t){var n,r;try{const p=(r=(n=t==null?void 0:t.state)==null?void 0:n.profile)==null?void 0:r.id;try{(E.getChannels?E.getChannels():[]).forEach(d=>{const l=d.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&E.removeChannel(d)})}catch(s){console.warn("[Random] cleanup canaux:",s)}p&&await E.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}await li(e,t,"random",({deckId:p,formation:s,starters:d,subsRaw:l,gcCardsEnriched:c,gcDefs:i})=>{const a=f=>fn(e,t,p,s,d,l,f,i||[]);if(!c.length){a([]);return}di(e,c,a)})}async function fn(e,t,n,r,p,s,d=[],l=[]){var M;const{state:c,navigate:i,toast:a}=t;let f=!1,m=null;We(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const x=async(C=!0)=>{f=!0,m&&(E.removeChannel(m),m=null),C&&await E.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(M=document.getElementById("mm-cancel"))==null||M.addEventListener("click",async()=>{try{await x(!0)}catch{}Ne(e),i("home")});const k=async(C,O,j)=>{if(f)return;f=!0,m&&(E.removeChannel(m),m=null);const S=document.getElementById("mm-status");S&&(S.textContent="Adversaire trouvé !"),await new Promise(D=>setTimeout(D,600)),e.isConnected&&ji(e,t,C,j,d,l)},{data:o,error:A}=await E.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:n});if(A||!(o!=null&&o.success)){a("Erreur de matchmaking","error"),Ne(e),i("home");return}if(o.matched){k(o.match_id,o.opponent_id,!1);return}const z=document.getElementById("mm-status");z&&(z.textContent="En attente d'un autre joueur..."),m=E.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},C=>{const O=C.new;O.status==="matched"&&O.match_id&&k(O.match_id,O.matched_with,!0)}).subscribe()}async function gn(e,t,n){const{state:r,navigate:p,toast:s}=t;try{(E.getChannels?E.getChannels():[]).forEach(i=>{const a=i.topic||"";(a.includes("matchmaking")||a.includes("pvp-match")||a.includes("friend-invite"))&&E.removeChannel(i)})}catch{}const{data:d}=await E.from("matches").select("home_id, away_id, status").eq("id",n).single();if(!d){s("Match introuvable","error"),p("home");return}if(d.status==="finished"){s("Ce match est terminé","info"),p("home");return}const l=d.home_id===r.profile.id;ji(e,t,n,l,[],[])}async function ji(e,t,n,r,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(p||[]).map(u=>u.id),m=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await E.from("matches").select("*").eq("id",n).single();if(!x){c("Match introuvable","error"),l("home");return}async function k(){const[{data:u},{data:g},{data:b},{data:h}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),y=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map($=>y($)),w=((g==null?void 0:g.starters)||[]).map($=>y($)),_=(u==null?void 0:u.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:pt(v,_),p2Team:pt(w,I),p1Subs:((u==null?void 0:u.subs)||[]).map($=>y($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:I,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?m:[],gcCardsFull_p2:r?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!o)if(r){o=await k();const{data:u}=await E.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await E.from("matches").update({game_state:o,turn_user_id:x.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<30&&!o;u++){await new Promise(b=>setTimeout(b,400));const{data:g}=await E.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await E.from("matches").update({game_state:o}).eq("id",n)}let A=!1,z=null,M=!1;const C=new Set,O=new Set;function j(u){var $,L;try{E.removeChannel(S)}catch{}const g=o[i+"Score"]||0,b=o[a+"Score"]||0;let h,y;u.winner_id?(h=u.winner_id===d.profile.id,y=!1):u.forfeit?(h=g>b,y=!1):(y=g===b,h=g>b),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":h?"🏆":"😞",_=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${b} ${o[a+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ne(e),l("home")})}const S=E.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const g=u.new;try{if(g.status==="finished"||g.forfeit){if(A)return;A=!0,z&&(clearInterval(z),z=null),g.game_state&&(o=g.game_state),j(g);return}if(g.game_state){const b=o;o=g.game_state;const h=o._lastGC;if(h&&h.seq&&!O.has(h.seq)&&(O.add(h.seq),h.by!==i)){me(h.type,h.by,()=>B());return}const y=b[i+"Score"]||0,v=b[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,I=w>y,$=_>v;if((I||$)&&!C.has(o.round)){C.add(o.round);const L=[...o.log||[]].reverse().find(U=>U.isGoal),q=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(q,w,_,I,()=>B());return}B()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function D(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:g}=await E.from("matches").update({game_state:o}).eq("id",n);g&&c("Erreur de synchronisation","error");try{B()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function Z(){if(A)return;A=!0,z&&(clearInterval(z),z=null);const u=r?x.away_id:x.home_id,g=r?"p2":"p1",b=r?"p1":"p2",h={...o,[g+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{E.removeChannel(S)}catch{}setTimeout(()=>{Ne(e),l("home")},800)}const se={BOOST_STAT:({value:u=1,count:g=1,roles:b=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!b.length||b.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}ae(w,g,`Choisir ${g} joueur(s) à booster (+${u})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+u,h.log.push({text:`⚡ +${u} sur ${$.name}`,type:"info"}))}),h[i+"Team"]=v,y(h)})},DEBUFF_STAT:({value:u=1,count:g=1,roles:b=[],target:h="ai"},y,v)=>{const w=h==="home"?i:a,_=y[w+"Team"],I=h==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!b.length||b.includes(L)).flatMap(([L,q])=>q.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(y);return}ae($,g,`Choisir ${g} joueur(s) ${I}(s) (-${u})`,L=>{L.forEach(q=>{const U=(_[q._line]||[]).find(oe=>oe.cardId===q.cardId);U&&(U.boost=(U.boost||0)-u,y.log.push({text:`🎯 -${u} sur ${U.name}`,type:"info"}))}),y[w+"Team"]=_,v(y)})},GRAY_PLAYER:({count:u=1,roles:g=[],target:b="ai"},h,y)=>{const v=b==="home"?i:a,w=h[v+"Team"],_=b==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(q=>!q.used).map(q=>({...q,_line:$})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(h);return}ae(I,u,`Choisir ${u} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const q=(w[L._line]||[]).find(U=>U.cardId===L.cardId);q&&(q.used=!0,h.log.push({text:`❌ ${q.name} exclu !`,type:"info"}))}),h[v+"Team"]=w,y(h)})},REVIVE_PLAYER:({count:u=1,roles:g=[]},b,h)=>{const y=b[i+"Team"],v=Object.entries(y).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(b);return}ae(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(y[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,b.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),b[i+"Team"]=y,h(b)})},REMOVE_GOAL:({},u,g)=>{const b=a+"Score";u[b]>0?(u[b]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(u)},ADD_GOAL_DRAW:({},u,g)=>{u[i+"Score"]===u[a+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(u)},ADD_SUB:({value:u=1},g,b)=>{g.maxSubs=(g.maxSubs||3)+u,g.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),b(g)},CUSTOM:({},u,g)=>g(u)};function ae(u,g,b,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=u.map(L=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),ce=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${q};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${g})
          </button>
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const q=L.dataset.cid,U=u.find(ce=>ce.cardId===q),oe=v.findIndex(ce=>ce.cardId===q);U&&(oe>-1?v.splice(oe,1):v.length<g&&v.push(U),w())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),h(v)})}w(),document.body.appendChild(y)}async function F(u,g){const h=(o["gcCardsFull_"+i]||[]).find(_=>_.id===u),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:g,by:i,seq:(o._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=se[y.effect_type];if(I){const $={...o};I(y.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await D(L)});return}}const _={...o};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await D(_)})}function Y(u,g){const b="usedCardIds_"+u,h=new Set(o[b]||[]);g.forEach(y=>h.add(y)),o[b]=[...h]}function te(){for(const u of["p1","p2"]){const g=new Set(o["usedCardIds_"+u]||[]),b=o[u+"Team"];if(b)for(const h of["GK","DEF","MIL","ATT"])(b[h]||[]).forEach(y=>{y.used=g.has(y.cardId)})}}function B(){var Oe,ft,gt,mt,xt,yt;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return re();if(o.phase==="finished")return Ke();const u=o[i+"Team"],g=o[a+"Team"];te();const b=o[i+"Score"],h=o[a+"Score"],y=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],$=I.map(T=>T.cardId),L=window.innerWidth>=700,q=o[i+"Subs"]||[],U=o["usedSubIds_"+i]||[],oe=q.filter(T=>!U.includes(T.cardId)),ce=o["gcCardsFull_"+i]||[],G=o["usedGc_"+i]||[],H=ce.filter(T=>!G.includes(T.id)),J=o.boostOwner===i&&!o.boostUsed,ne=!["GK","DEF","MIL","ATT"].some(T=>(g[T]||[]).some(V=>!V.used)),de=[...u.MIL||[],...u.ATT||[]].filter(T=>!T.used),fe=w&&ne&&de.length===0?[...u.GK||[],...u.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];function le(T,V,pe){var wt,$t;const ee=T._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",Xe=(ee==null?void 0:ee.name)||T.gc_type,Je=(ee==null?void 0:ee.effect)||((wt=Be[T.gc_type])==null?void 0:wt.desc)||"",ht=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,Ut=(($t=Be[T.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(pe*.22),vt=Math.round(pe*.22),nt=pe-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
        style="box-sizing:border-box;width:${V}px;height:${pe}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${V-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${nt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${V-10}px;max-height:${nt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(nt*.55)}px">${Ut}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function ye(T,V){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${T}px;height:${V}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(V*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(V*.2)}px">⚡</div>
        <div style="font-size:${Math.round(V*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ee=(T,V)=>V?ye(130,175):le(T,130,175),Re=(T,V)=>V?ye(68,95):le(T,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${oe.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':oe.map(T=>`<div class="pvp-sub-btn" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(T,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function De(T){if(T.type==="duel"&&(T.homeTotal!=null||T.aiTotal!=null)){const V=(T.homeTotal||0)>=(T.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(T.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.homePlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${V?20:14}px;font-weight:900;color:${V?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${T.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${V?14:20}px;font-weight:900;color:${V?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${T.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.aiPlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
          </div>
          ${T.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${T.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${T.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${T.type==="goal"?700:400};padding:3px 2px">${T.text||""}</div>`}const Ve=(()=>{var V,pe;if(_&&((V=o.pendingAttack)!=null&&V.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(w&&((pe=o.pendingAttack)!=null&&pe.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#00ff88",ee.total)}
        </div>`}const T=(o.log||[]).slice(-1)[0];return T?'<div style="padding:2px 4px">'+De(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;We(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(T=>Ee(T,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(T=>Re(T,!1)).join("")}
            ${J?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&oe.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&oe.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&oe.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&oe.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${oe.length}</div>
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
          <div>${je}${$e}</div>
        </div>
      </div>`;function Ae(){const T=e.querySelector(".match-screen");if(!T)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.height=V+"px",T.style.minHeight=V+"px",T.style.maxHeight=V+"px",T.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");pe&&ee&&(ee.style.paddingBottom=pe.offsetHeight+"px")}if(Ae(),setTimeout(Ae,120),setTimeout(Ae,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ae),window.visualViewport.addEventListener("scroll",Ae)),window.addEventListener("resize",Ae)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>{if(!w&&!_)return;const V=T.dataset.cardId,pe=T.dataset.role,ee=(u[pe]||[]).find(Je=>Je.cardId===V);if(!ee||ee.used)return;const He=fe.includes(V);if(w&&!["MIL","ATT"].includes(pe)&&!He)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===V);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...ee,_role:pe}),B()})}),e.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>N(T.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(T=>{T.addEventListener("click",()=>N())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(T=>{T.addEventListener("click",()=>xe(T.dataset.gcId,T.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",T=>{w?T.currentTarget.dataset.pass==="1"||!we(i)?ue():ie():_&&Te()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),z&&(clearInterval(z),z=null),(w||_)&&!A){let T=30,V=!1;const pe=()=>document.getElementById("pvp-timer"),ee=()=>{pe()&&(pe().textContent=T+"s",pe().style.color=V?"#ff4444":"#fff")};ee(),z=setInterval(()=>{T--,T<0?V?(clearInterval(z),z=null,w&&!we(i)?ue():Z()):(V=!0,T=15,ee()):ee()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await D({phase:"midfield"})},5e3)}let K=!1;function re(){if(K)return;const u=o[i+"Team"].MIL||[],g=o[a+"Team"].MIL||[];function b(H){return H.reduce((J,ne)=>J+be(ne,"MIL"),0)}function h(H){let J=0;for(let ne=0;ne<H.length-1;ne++){const de=Qe(H[ne],H[ne+1]);de==="#00ff88"?J+=2:de==="#FFD700"&&(J+=1)}return J}const y=b(u)+h(u),v=b(g)+h(g),w=y>=v;function _(H,J,ne){return`<div id="duel-row-${ne}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,fe)=>{const le=fe<H.length-1?Qe(de,H[fe+1]):null,ye=!le||le==="#ff3333"||le==="#cc2222",Ee=le==="#00ff88"?"+2":le==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ne}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...de,note:be(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${ne}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":le};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${le}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${le}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ne}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(H)} + ${h(H)} liens = <b style="color:#fff">${b(H)+h(H)}</b>
        </div>
      </div>`}We(e),e.innerHTML=`
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
      ${_(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((ne,de)=>{setTimeout(()=>{ne.style.opacity="1",ne.style.transform="translateY(0) scale(1)"},J+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,ne){const de=document.getElementById(H);if(!de)return;const fe=performance.now(),le=ye=>{const Ee=Math.min(1,(ye-fe)/ne);de.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(le):de.textContent=J};requestAnimationFrame(le)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",v,800)},1500);const L=o.p1Team.MIL||[],q=o.p2Team.MIL||[],U=b(L)+h(L),oe=b(q)+h(q),ce=U>=oe?"p1":"p2";let G=o.boostValue;G==null&&(G=si(),o.boostValue=G,o.boostOwner=ce,o.boostUsed=!1),K=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),ne=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?ne:de,le=w?de:ne;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),le&&(le.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=ce;await D({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(u,g,b,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,q)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${q%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][q%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${g} – ${b}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(u,g,b){var G,H;const h=(o.gcDefs||[]).find(J=>{var ne;return J.name===u||((ne=J.name)==null?void 0:ne.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||u,_=(h==null?void 0:h.effect)||((G=Be[u])==null?void 0:G.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,$=((H=Be[u])==null?void 0:H.icon)||"⚡",q=g===i?"Vous":o[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${q} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let oe=!1;const ce=()=>{oe||(oe=!0,U.remove(),setTimeout(()=>b&&b(),50))};U.addEventListener("click",ce),setTimeout(ce,3e3)}function xe(u,g){var U,oe,ce,G;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===u),y=h==null?void 0:h._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||g,I=(y==null?void 0:y.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,L=((oe=Be[g])==null?void 0:oe.icon)||"⚡",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",q.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(q),(ce=q.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>q.remove()),(G=q.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{q.remove(),F(u,g)})}function R(){var h;const u=o[i+"Team"],g=Object.entries(u).flatMap(([y,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!g.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(y=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=be(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#bp-close"))==null||h.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const v=y.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(u[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),b.remove(),await D({[i+"Team"]:u,boostUsed:!0})})})}function N(u=null){var oe,ce;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const b=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){c(`Maximum ${y} remplacements atteint`,"warning");return}const v=Object.entries(b).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(o[i+"Subs"]||[]).filter(G=>!h.includes(G.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===u));const I=((oe=v[_])==null?void 0:oe._line)||((ce=v[_])==null?void 0:ce.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const q=document.createElement("div");q.id="pvp-sub-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var le,ye,Ee,Re,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),ne=Math.round(J*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;q.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pin-down" style="${de($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(le=q.querySelector("#psub-close"))==null||le.addEventListener("click",()=>q.remove()),(ye=q.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=q.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Re=q.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=q.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const De=q.querySelector("#"+$e);if(!De)return;let Ve=0;De.addEventListener("touchstart",qe=>{Ve=qe.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",qe=>{const Ae=qe.changedTouches[0].clientY-Ve;if(Math.abs(Ae)<30)return;const Oe=Fe();Ae<0&&Oe<Pe-1?(Me(Oe+1),U()):Ae>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=q.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,De=(b[Pe]||[]).findIndex(Ae=>Ae.cardId===Fe.cardId);if(De===-1){c("Erreur : joueur introuvable","error"),q.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};b[Pe].splice(De,1,Ve);const qe=[...h,Me.cardId];q.remove(),W(Fe,Me,async()=>{await D({[i+"Team"]:b,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(q),U()}function W(u,g,b){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const _=()=>{w||(w=!0,y.remove(),setTimeout(()=>b(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(g=u.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>u.remove())}function X(){var b;const u=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(b=g.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>g.remove())}async function ue(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",g=(o.round||0)+1,b=[...o.log||[]];b.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Le(o),y=we(u),v=h||!y?"finished":u+"-attack";await D({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:g,log:b}),v==="finished"&&await Se(o)}async function ie(){const u=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),b=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=u[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),q=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:q,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!b.length)return;const h=Nt(b,o.modifiers[i]||{});Y(i,b.map(v=>v.cardId)),b.forEach(v=>{const w=(u[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],B();const y=[...o.log||[]];if(g){const v=(o[i+"Score"]||0)+1,w=b.map(q=>({name:q.name,note:be(q,q._line||"ATT"),portrait:Ie(q),job:q.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",$={...o,[i+"Team"]:u,[i+"Score"]:v},L=Le($);C.add(_),ge(w,v,o[a+"Score"]||0,!0,async()=>{await D({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:y}),L&&await Se({...o,[i+"Score"]:v})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await D({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],pendingAttack:{...h,players:b,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:y})}async function Te(){const u=o[i+"Team"],g=(o["selected_"+i]||[]).map(G=>{const H=(u[G._role]||[]).find(le=>le.cardId===G.cardId)||G,J=u[G._role]||[],ne=J.findIndex(le=>le.cardId===G.cardId),de=it(J.length),fe=ne>=0?de[ne]:H._col??1;return{...H,_line:G._role,_col:fe}}),b=Rt(g,o.modifiers[i]||{});Y(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(u[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],B();const h=Pt(o.pendingAttack.total,b.total,o.modifiers[i]||{}),y=o.pendingAttack.side,v=h==="attack"||(h==null?void 0:h.goal),w=y==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...o.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&y===i,text:v?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${b.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:o.pendingAttack.total,aiTotal:b.total});const L=v?(o[y+"Score"]||0)+1:o[y+"Score"]||0,q={...o,[i+"Team"]:u,[y+"Score"]:L},U=Le(q),oe=U?"finished":w+"-attack",ce=async()=>{await D({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],[y+"Score"]:L,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:oe,attacker:w,round:_,log:$}),(oe==="finished"||U)&&await Se({...o,[y+"Score"]:L})};if(v){const G=y===i,H=G?L:o[i+"Score"]||0,J=G?o[a+"Score"]||0:L;C.add(_),ge(I,H,J,G,ce)}else await ce()}function ke(u){return["MIL","ATT"].some(g=>(u[g]||[]).some(b=>!b.used))}function ve(u){return["GK","DEF","MIL","ATT"].some(g=>(u[g]||[]).some(b=>!b.used))}function _e(u){return ve(u)&&!ke(u)}function we(u){const g=o[u+"Team"],b=o[(u==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(b)&&_e(g))}function Le(u){const g=["MIL","ATT"].some($=>(u.p1Team[$]||[]).some(L=>!L.used)),b=["MIL","ATT"].some($=>(u.p2Team[$]||[]).some(L=>!L.used)),h=ve(u.p1Team),y=ve(u.p2Team);return!g&&!(!y&&h)&&(!b&&!(!h&&y))}function Ge(u){const g=u.p1Score||0,b=u.p2Score||0;return g===b?null:g>b?x.home_id:x.away_id}async function Se(u){try{await E.from("matches").update({status:"finished",winner_id:Ge(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var y;const u=o[i+"Score"],g=o[a+"Score"],b=u>g,h=u===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{E.removeChannel(S)}catch{}Ne(e),l("home")})}B()}const mn="2026.06.27-2316";async function hi(e,{state:t,navigate:n,toast:r}){var s,d;const p=t.profile;p&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${mn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),n(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>n("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){bn(n);return}if(c==="match-random"){n("match",{matchMode:"random"});return}if(c==="match-friend"){n("friends");return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),Bi(t,r),hn(t,r,n),Fi(t,r,n))}async function Fi(e,t,n){const r=document.getElementById("ongoing-match-banner");if(!r)return;const p=e.profile.id,{data:s}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${p},away_id.eq.${p}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){r.innerHTML="";return}const d=s.map(c=>c.home_id===p?c.away_id:c.home_id).filter(Boolean);let l={};if(d.length){const{data:c}=await E.from("users").select("id, pseudo, club_name").in("id",d);(c||[]).forEach(i=>{l[i.id]=i.club_name||i.pseudo})}r.innerHTML=s.map(c=>{const i=c.home_id===p?c.away_id:c.home_id,a=l[i]||"Adversaire";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${c.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${a}</div>
        </div>
        <button data-resume="${c.id}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${c.id}" data-opp="${i}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),r.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",()=>{const i=document.getElementById("page-content")||document.getElementById("app");gn(i,{state:e,navigate:n,toast:t},c.dataset.resume)})}),r.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{yn(async()=>{await xn(c.dataset.abandon,c.dataset.opp,p),t("Match abandonné (défaite 3-0)","info"),Fi(e,t,n)})})})}async function xn(e,t,n){const{data:r}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!r)return;const p=r.home_id===n,s=p?0:3,d=p?3:0,l=r.game_state||{};l.p1Score=s,l.p2Score=d,l.phase="finished",l.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:d,game_state:l}).eq("id",e)}function yn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function hn(e,t,n){var l,c,i,a;const r=document.getElementById("match-invite-banner");if(!r)return;const{data:p}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){r.innerHTML="";return}const s=((l=p.inviter)==null?void 0:l.club_name)||((c=p.inviter)==null?void 0:c.pseudo)||"?",d=p.inviter_id;r.innerHTML=`
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
    </div>`,(i=document.getElementById("match-inv-accept"))==null||i.addEventListener("click",()=>{r.innerHTML="",n("match",{matchMode:"friend",friendId:d,friendName:s})}),(a=document.getElementById("match-inv-decline"))==null||a.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",p.id),r.innerHTML="",t("Invitation refusée","info")})}async function Bi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:r,error:p}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(p||!(r!=null&&r.length)){n.innerHTML="";return}const s=r.length,d=r.slice(0,2).map(c=>{var i;return((i=c.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";n.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Li(e,t,()=>Bi(e,t))})}function bn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
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
  `,document.body.appendChild(n);const r=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",r),n.addEventListener("click",p=>{p.target===n&&r()}),n.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{r(),e("match",{matchMode:p.dataset.mode})})})}const Di={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Tt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ct=["GK","DEF","MIL","ATT"],vn=["Tous","GK","DEF","MIL","ATT"],wn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},ci={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function qi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Mt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,m;const n=e.player;if(!n)return"";const r=n.job||"ATT",p=Tt[r],s=Di[n.rarity]||"#ccc",d=Mt(n,r),l=n.job2?Mt(n,n.job2):null,c=n.job2?Tt[n.job2]:null,i=qi(n),a=ci[n.country_code]||n.country_code||"";return`
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
        ${(f=n.clubs)!=null&&f.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=n.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function bi(e){const t=e.job||"ATT",n=Mt(e,t),r=ci[e.country_code]||e.country_code||"";return`
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
  </div>`}async function $n(e,t){const{state:n,navigate:r,toast:p,openModal:s,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(R=>R.card_type==="player"&&R.player),a=(l||[]).filter(R=>R.card_type==="game_changer"),f=(l||[]).filter(R=>R.card_type==="formation"),{data:m}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(m||[]).forEach(R=>{x[R.name]=R});const k=Object.keys(oi),o=Object.keys(Be),A={};i.forEach(R=>{const N=R.player.id;A[N]=(A[N]||0)+1}),new Set(Object.keys(A).map(R=>String(R)));const z=new Set(f.map(R=>R.formation)),M=new Set(a.map(R=>R.gc_type));let C="player",O="Tous",j="",S=!1;function D(){return[...i].sort((R,N)=>{const W=Ct.indexOf(R.player.job),P=Ct.indexOf(N.player.job);return W!==P?W-P:(R.player.surname_encoded||"").localeCompare(N.player.surname_encoded||"")})}function Z(){return[...c||[]].sort((R,N)=>{const W=Ct.indexOf(R.job),P=Ct.indexOf(N.job);return W!==P?W-P:(R.surname_encoded||"").localeCompare(N.surname_encoded||"")})}function se(){return D().filter(R=>{const N=R.player,W=O==="Tous"||N.job===O,P=!j||`${N.firstname} ${N.surname_encoded}`.toLowerCase().includes(j);return W&&P})}function ae(){return Z().filter(R=>{const N=O==="Tous"||R.job===O,W=!j||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(j);return N&&W})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="player"?"var(--green)":"transparent"};
        color:${C==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="formation"?"var(--green)":"transparent"};
        color:${C==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="gc"?"var(--green)":"transparent"};
        color:${C==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function F(){const R=document.getElementById("col-filters");R&&(C==="player"?(R.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${j}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${vn.map(N=>`
            <button class="filter-btn" data-job="${N}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${N===O?"var(--green)":"var(--gray-200)"};
                background:${N===O?"var(--green)":"#fff"};
                color:${N===O?"#fff":"var(--gray-600)"}">
              ${N}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${S?"var(--yellow)":"var(--gray-200)"};
              background:${S?"var(--yellow)":"#fff"};
              color:${S?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${S?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",N=>{j=N.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(N=>{N.addEventListener("click",()=>{O=N.dataset.job,F(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{S=!S,F(),Y()})):(R.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${S?"var(--yellow)":"var(--gray-200)"};
              background:${S?"var(--yellow)":"#fff"};
              color:${S?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${S?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{S=!S,F(),Y()})))}function Y(){const R=document.getElementById("col-grid");R&&(C==="player"?ge(R):C==="formation"?me(R):xe(R))}function te(R,N,W,P,X){X=X||"#7a28b8";const ue=document.getElementById("col-grid"),ie=document.getElementById("col-big");if(!ue||!ie)return;var Te=0;function ke(){ie.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+N(R[Te])+"</div>";var ve=ie.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ve&&ve.addEventListener("click",function(){P(R[Te])}),requestAnimationFrame(function(){var _e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!_e||!ie)){var we=ie.clientHeight-8,Le=ie.clientWidth-24,Ge=_e.offsetHeight,Se=_e.offsetWidth;if(Ge>0&&Se>0&&we>40){var Ke=Math.min(we/Ge,Le/Se,1);_e.style.transform="scale("+Ke.toFixed(3)+")",_e.style.transformOrigin="top center"}}}),ue.innerHTML=R.map(function(_e,we){return'<div class="col-mini-item" data-idx="'+we+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(we===Te?X:"transparent")+';transition:border-color .15s;overflow:hidden">'+W(_e,we===Te)+"</div>"}).join(""),ue.querySelectorAll(".col-mini-item").forEach(function(_e){_e.addEventListener("click",function(){Te=Number(_e.dataset.idx),ke(),_e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function B(R){var N=.54,W=Math.round(140*N),P=Math.round(310*N),X;if(!R||R._fake){var ue=R?R.player:null;if(!ue)return"";X=bi(ue)}else X=Vt(R,"");return'<div style="width:'+W+"px;height:"+P+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+N+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+X+"</div></div>"}function Q(R,N,W){N=N||100,W=W||140;var P=St[R]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ue=Math.max(3,Math.round(N*.06)),ie=Object.entries(P).map(function(ke){var ve=ke[0],_e=ke[1],we=ve.replace(/\d+$/,""),Le=X[we]||"#888",Ge=Math.round(_e.x*N),Se=Math.round(_e.y*W);return'<circle cx="'+Ge+'" cy="'+Se+'" r="'+ue+'" fill="'+Le+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Te=Math.max(1,Math.round(N/50));return'<svg viewBox="0 0 '+N+" "+W+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+N+'" height="'+W+'" fill="#1A6B3C"/><rect x="'+Math.round(N*.2)+'" y="'+Math.round(W*.02)+'" width="'+Math.round(N*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Te+'"/><line x1="0" y1="'+Math.round(W*.5)+'" x2="'+N+'" y2="'+Math.round(W*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Te+'"/><ellipse cx="'+Math.round(N*.5)+'" cy="'+Math.round(W*.5)+'" rx="'+Math.round(N*.18)+'" ry="'+Math.round(W*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Te+'"/><rect x="'+Math.round(N*.2)+'" y="'+Math.round(W*.82)+'" width="'+Math.round(N*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Te+'"/>'+ie+"</svg>"}function K(R,N,W){var P=W>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+W+"</div>":"",X=N?'data-form-id="'+N.id+'"':"",ue=R.length>7?14:R.length>5?16:19,ie=!!N;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ie?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ie?"":"filter:grayscale(1);opacity:0.5")+'">'+P+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ie?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ue+"px;font-weight:900;color:"+(ie?"#1A6B3C":"#aaa")+';line-height:1">'+R+'</div></div><div style="flex:1;overflow:hidden;background:'+(ie?"#1A6B3C":"#ccc")+'">'+Q(R,140,220)+"</div></div>"}function re(R,N){var W=.54,P=Math.round(140*W),X=Math.round(305*W),ue=Math.round(X*.22),ie=X-ue,Te=R.length>7?5:7,ke=Q(R,P,ie),ve=N?"1.5px solid #2a7a40":"1px solid #ddd",_e=N?"":"filter:grayscale(1);opacity:0.45;",we=N?"#1A6B3C":"#bbb",Le="#fff";return'<div style="width:'+P+"px;height:"+X+"px;border-radius:6px;border:"+ve+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+_e+'"><div style="height:'+ue+"px;background:"+we+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Te+"px;font-weight:900;color:"+Le+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(P-4)+'px">'+R+'</span></div><div style="height:'+ie+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div>"}function ge(R){if(S){const N=ae();if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const W=N.map(P=>i.find(X=>X.player.id===P.id)||{_fake:!0,player:P,id:"fake-"+P.id});te(W,P=>P._fake?bi(P.player):Vt(P,""),P=>P._fake?B({player:P.player,id:"x",_fake:!0}):B(P),P=>{P._fake||vi(P,i,A,t)},"#1A6B3C")}else{const N=se();if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const W={},P=[];N.forEach(X=>{W[X.player.id]||(W[X.player.id]=!0,P.push(X))}),te(P,X=>{const ue=A[X.player.id]||1,ie=ue>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ue}</div>`:"",ke=i.filter(ve=>ve.player.id===X.player.id&&ve.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(X,ie+ke)},X=>B(X),X=>vi(X,i,A,t),"#1A6B3C")}}function me(R){const N=S?k:[...z];if(!N.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const W=N.map(P=>({formation:P,card:f.find(X=>X.formation===P)||null,owned:z.has(P)}));te(W,({formation:P,card:X,owned:ue})=>K(P,ue?X:null,ue?f.filter(ie=>ie.formation===P).length:0),({formation:P,owned:X})=>re(P,X),({card:P,owned:X})=>{X&&P&&kn(P,f,t,s)},"#1A6B3C")}function xe(R){const N=Object.keys(x),W=S?N.length?N:o:[...M];if(!W.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const P=W.map(X=>({type:X,gc:Be[X]||{icon:"⚡",desc:""},def:x[X]||null,owned:M.has(X),card:a.find(ue=>ue.gc_type===X)||null}));te(P,({type:X,gc:ue,def:ie,owned:Te,card:ke})=>{const ve=Te?a.filter(b=>b.gc_type===X).length:0,_e=ve>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ve}</div>`:"",we=(ie==null?void 0:ie.gc_type)==="ultra_game_changer",Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ge={purple:"#b06ce0",light_blue:"#00d4ef"},Se=Le[ie==null?void 0:ie.color]||Le.purple,Ke=Ge[ie==null?void 0:ie.color]||Ge.purple,u=(ie==null?void 0:ie.effect)||ue.desc||"",g=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return Te&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ke};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ke}66;cursor:pointer">
          ${_e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${we?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${g?`<img src="${g}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ue.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${u.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ue.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:ue,def:ie,owned:Te})=>Te?(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54),_e=Math.round(ve*.65),we=Math.round(ve*.18),Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ge={purple:"#9b59b6",light_blue:"#00bcd4"},Se=Le[ie==null?void 0:ie.color]||Le.purple,Ke=Ge[ie==null?void 0:ie.color]||Ge.purple,u=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:${Se};border:1px solid ${Ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:${we}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ke-6}px">${X}</span></div><div style="height:${_e}px;display:flex;align-items:center;justify-content:center">${u?`<img src="${u}" style="max-width:${ke-8}px;max-height:${_e-4}px;object-fit:contain">`:`<span style="font-size:24px">${ue.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((ie==null?void 0:ie.effect)||ue.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54);return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ue.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${X}</span></div>`})(),({type:X,owned:ue,def:ie})=>{ue&&_n(X,ie,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(R=>{R.addEventListener("click",()=>{C=R.dataset.tab,O="Tous",j="",S=!1,e.querySelectorAll(".col-tab-btn").forEach(N=>{const W=N.dataset.tab===C;N.style.borderBottomColor=W?"var(--green)":"transparent",N.style.color=W?"var(--green)":"var(--gray-600)"}),F(),Y()})}),F(),Y()}function _n(e,t,n){const r=Be[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,a=(t==null?void 0:t.effect)||r.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _t=1e3;function kn(e,t,n,r){var o,A,z;const{state:p,toast:s,closeModal:d,navigate:l,refreshProfile:c}=n,i=e.formation,a={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const M=St[i]||{},C=oi[i]||[],O=290,j=360,S=20;function D(se){const ae=M[se];return ae?{x:ae.x*O,y:ae.y*j}:null}let Z=`<svg width="${O}" height="${j}" viewBox="0 0 ${O} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[se,ae]of C){const F=D(se),Y=D(ae);!F||!Y||(Z+=`<line x1="${F.x}" y1="${F.y}" x2="${Y.x}" y2="${Y.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const se of Object.keys(M)){const ae=D(se);if(!ae)continue;const F=se.replace(/\d+/,""),Y=a[F]||"#555";Z+=`<circle cx="${ae.x}" cy="${ae.y}" r="${S}" fill="${Y}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,Z+=`<text x="${ae.x}" y="${ae.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${F}</text>`}return Z+="</svg>",Z}const m=t.filter(M=>M.formation===i),x=m.length,k=!e.is_for_sale;r(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${x-1} carte${x-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${x<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${k?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(o=document.getElementById("direct-sell-form-btn"))==null||o.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${_t.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const M=m.find(O=>!O.is_for_sale)||m[0];if(!M){s("Aucune carte à vendre","error");return}const{error:C}=await E.from("cards").delete().eq("id",M.id);if(C){s(C.message,"error");return}await E.from("users").update({credits:(p.profile.credits||0)+_t}).eq("id",p.profile.id),await c(),s(`+${_t.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(A=document.getElementById("market-sell-form-btn"))==null||A.addEventListener("click",async()=>{const M=parseInt(document.getElementById("sell-price-form").value);if(!M||M<1){s("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:M}).eq("id",e.id),await E.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:M}),s("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(z=document.getElementById("cancel-sell-form-btn"))==null||z.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),d(),l("collection")})}async function vi(e,t,n,r){var ae,F,Y,te,B,Q;const{state:p,toast:s,openModal:d,closeModal:l,navigate:c,refreshProfile:i}=r,a=e.player,f=t.filter(K=>K.player.id===a.id),m=f.length,x=wn[a.rarity]||1e3,k=a.rarity!=="legende",o=qi(a),A=Mt(a,a.job),z=a.job2?Mt(a,a.job2):null,M=Tt[a.job]||"#1A6B3C",C=a.job2?Tt[a.job2]:null,O=Di[a.rarity]||"#ccc",j=ci[a.country_code]||a.country_code||"",S=f.map(K=>K.id);let D={};if(S.length){const{data:K}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",S).order("transferred_at",{ascending:!0});(K||[]).forEach(re=>{D[re.card_id]||(D[re.card_id]=[]),D[re.card_id].push(re)})}const Z=K=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${K.club_name} <span style="color:var(--gray-600)">(${K.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,se=S.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${m>1?`(${m} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${f.map((K,re)=>{const ge=D[K.id]||[];return ge.length?`
            <div>
              ${m>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${re+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${ge.map(Z).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";d(`${a.firstname} ${a.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${O};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${a.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(a.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${M}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${M}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${A}</text>
            </svg>
            ${z!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${C}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${a.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${j}</div>
            ${(ae=a.clubs)!=null&&ae.logo_url?`<img src="${a.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((F=a.clubs)==null?void 0:F.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${O}">${a.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${a.job}${a.job2?" / "+a.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",a.note_g],["DEF",a.note_d],["MIL",a.note_m],["ATT",a.note_a]].map(([K,re])=>{const ge=Tt[K],me=Number(re)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${ge}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${me}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${K}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${se}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${x.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${k&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Y=document.getElementById("close-detail"))==null||Y.addEventListener("click",l),(te=document.getElementById("direct-sell-btn"))==null||te.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${a.surname_encoded} pour ${x.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const K=f.find(ge=>!ge.is_for_sale)||f[0];if(!K){s("Aucune carte à vendre","error");return}const{error:re}=await E.from("cards").delete().eq("id",K.id);if(re){s(re.message,"error");return}await E.from("users").update({credits:(p.profile.credits||0)+x}).eq("id",p.profile.id),await i(),s(`+${x.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(B=document.getElementById("market-sell-btn"))==null||B.addEventListener("click",async()=>{const K=parseInt(document.getElementById("sell-price").value);if(!K||K<1){s("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:K}).eq("id",e.id),await E.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:K}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(Q=document.getElementById("cancel-sell-btn"))==null||Q.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const Dt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ot(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Gi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ni(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function En(e,t=44,n=58){var x;const r=e?Ot(e):null,p=e?Ni(e):null,s=Gi(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",l=rt[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,a=Math.round(n*.19),f=Math.round(n*.25),m=n-a-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${p?`<img src="${p}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(x=e==null?void 0:e.clubs)!=null&&x.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qt(e,t){const{state:n,navigate:r,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!d)return;const{data:l,error:c}=await E.from("decks").insert({owner_id:n.profile.id,name:d}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),wi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>wi(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",d.dataset.name);if(!l||l===d.dataset.name)return;const{error:c}=await E.from("decks").update({name:l}).eq("id",d.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Qt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:l}=await E.from("decks").delete().eq("id",d.dataset.delete);if(l){p(l.message,"error");return}p("Deck supprimé.","success"),Qt(e,t)})})}async function wi(e,t,n){const{state:r,toast:p}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await E.from("decks").select("*").eq("id",e).single(),{data:d}=await E.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),l=(d||[]).filter(x=>x.card_type==="player"&&x.player),c=(d||[]).filter(x=>x.card_type==="formation"),i=c.map(x=>x.formation).filter(Boolean),{data:a}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:i};(a||[]).forEach(x=>{x.is_starter?m.slots[x.position]=x.card_id:m.subs.includes(x.card_id)||m.subs.push(x.card_id)}),ut(t,m,n)}function ut(e,t,n){var c;const{navigate:r}=n;Dt[t.formation];const p=$i(t.formation),s=p.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Dt),l=t.subs.map(i=>t.playerCards.find(a=>a.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${En(a,44,58)}
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
  </div>`,An(e,t,p,n),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const a=$i(t.formation),f={};a.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,ut(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>Ln(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(a=>a!==i.dataset.removeSub),ut(e,t,n)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{In(t,e,n)})}function An(e,t,n,r){const p=e.querySelector("#deck-field");if(!p)return;const s=St[t.formation]||{},d=Ti(t.formation)||[],l={};for(const z of n){const M=t.slots[z],C=M?t.playerCards.find(O=>O.id===M):null;l[z]=C?C.player:null}const c=300,i=300,a=48,f=64,m=13,x=16,k=38;function o(z){const M=s[z];return M?{x:M.x*c,y:M.y*i}:null}let A="";for(const[z,M]of d){const C=o(z),O=o(M);if(!C||!O)continue;const j=l[z]?{...l[z],club_id:l[z].club_id,country_code:l[z].country_code,rarity:l[z].rarity}:null,S=l[M]?{...l[M],club_id:l[M].club_id,country_code:l[M].country_code,rarity:l[M].rarity}:null,D=Qe(j,S);D==="#ff3333"||D==="#cc2222"?A+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(A+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,A+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const z of n){const M=o(z);if(!M)continue;const C=l[z],O=z.replace(/\d+/,""),j=rt[O]||"#555",S=(M.x-a/2).toFixed(1),D=(M.y-f/2).toFixed(1),Z={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[C==null?void 0:C.rarity]||"#aaa";if(C){const se=Ot(C),ae=Ni(C),F=Gi(C.country_code),Y=Number(O==="GK"?C.note_g:O==="DEF"?C.note_d:O==="MIL"?C.note_m:C.note_a)||0,te=f-m-x;A+=`<defs><clipPath id="dcp-${z}"><rect x="${S}" y="${(M.y-f/2+m).toFixed(1)}" width="${a}" height="${te}"/></clipPath></defs>`,A+=`<rect x="${S}" y="${D}" width="${a}" height="${f}" rx="5" fill="${j}"/>`,se&&(A+=`<image href="${se}" x="${S}" y="${(M.y-f/2+m).toFixed(1)}" width="${a}" height="${te}" clip-path="url(#dcp-${z})" preserveAspectRatio="xMidYMin slice"/>`),A+=`<rect x="${S}" y="${D}" width="${a}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,A+=`<text x="${M.x.toFixed(1)}" y="${(M.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.surname_encoded||"").slice(0,9)}</text>`;const B=(M.y+f/2-x).toFixed(1);A+=`<rect x="${S}" y="${B}" width="${a}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,F&&(A+=`<image href="${F}" x="${(M.x-21).toFixed(1)}" y="${(M.y+f/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),A+=`<text x="${M.x.toFixed(1)}" y="${(M.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,ae&&(A+=`<image href="${ae}" x="${(M.x+a/2-14).toFixed(1)}" y="${(M.y+f/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),A+=`<rect x="${S}" y="${D}" width="${a}" height="${f}" rx="5" fill="none" stroke="${Z}" stroke-width="2"/>`}else A+=`<rect x="${S}" y="${D}" width="${a}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,A+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,A+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${O}</text>`;A+=`<rect x="${S}" y="${D}" width="${a}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${z}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-k} ${-k} ${c+k*2} ${i+k*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${A}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>Tn(z.dataset.pos,t,e,r))})}function Tn(e,t,n,r){var m,x,k;const{openModal:p,closeModal:s}=r,d=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(o=>o.id===l):null;(m=c==null?void 0:c.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,A])=>{var M;if(o===e||!A)return;const z=t.playerCards.find(C=>C.id===A);(M=z==null?void 0:z.player)!=null&&M.id&&i.add(z.player.id)}),t.subs.forEach(o=>{var z;const A=t.playerCards.find(M=>M.id===o);(z=A==null?void 0:A.player)!=null&&z.id&&i.add(A.player.id)});const a=new Set,f=t.playerCards.filter(o=>{const A=o.player;return!(A.job===d||A.job2===d)||i.has(A.id)||a.has(A.id)?!1:(a.add(A.id),!0)});f.sort((o,A)=>{const z=d==="GK"?o.player.note_g:d==="DEF"?o.player.note_d:d==="MIL"?o.player.note_m:o.player.note_a;return(d==="GK"?A.player.note_g:d==="DEF"?A.player.note_d:d==="MIL"?A.player.note_m:A.player.note_a)-z}),p(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var O,j;const A=o.player,z=d==="GK"?A.note_g:d==="DEF"?A.note_d:d==="MIL"?A.note_m:A.note_a,M=Ot(A),C={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[A.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[d]}">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${rt[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${A.firstname} ${A.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${A.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${A.country_code}">
              ${(O=A.clubs)!=null&&O.logo_url?`<img src="${A.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((j=A.clubs)==null?void 0:j.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${A.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${rt[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${C};flex-shrink:0">
            ${z}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",s),(k=document.getElementById("remove-player"))==null||k.addEventListener("click",()=>{delete t.slots[e],s(),ut(n,t,r)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,s(),ut(n,t,r)})})}function In(e,t,n){var c;const{openModal:r,closeModal:p}=n,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const a=e.playerCards.find(m=>m.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)}),e.subs.forEach(i=>{var f;const a=e.playerCards.find(m=>m.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)});const d=new Set,l=e.playerCards.filter(i=>{var a,f,m;return s.has((a=i.player)==null?void 0:a.id)||d.has((f=i.player)==null?void 0:f.id)?!1:(d.add((m=i.player)==null?void 0:m.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var x;const a=i.player,f=Ot(a),m=a.job==="GK"?a.note_g:a.job==="DEF"?a.note_d:a.job==="MIL"?a.note_m:a.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[a.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${a.firstname} ${a.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.job} · ${a.country_code} · ${((x=a.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${rt[a.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),p(),ut(t,e,n)})})}async function Ln(e,t){const{state:n,toast:r,navigate:p}=t,s=e.formationCards.find(c=>c.formation===e.formation),d=(s==null?void 0:s.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,i],a)=>{l.push({deck_id:e.deckId,card_id:i,position:c,is_starter:!0,slot_order:a})}),e.subs.forEach((c,i)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:c}=await E.from("deck_cards").insert(l);if(c){r(c.message,"error");return}}r("Deck enregistré ✅","success"),p("decks")}function $i(e){const t=Dt[e]||Dt["4-4-2"],n=["GK1"];for(let r=1;r<=t.DEF;r++)n.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)n.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)n.push(`ATT${r}`);return n}async function Ri(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(r=>r.booster_id===n.id)}))}function zn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,p)=>r+Number(p.percentage),0);let n=Math.random()*t;for(const r of e)if(n-=Number(r.percentage),n<=0)return r;return e[e.length-1]}const Pi=()=>Object.keys(St),Mn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Zt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const _i={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Cn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},jn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ki(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Fn(e){var a,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",r=_i[n],p=Cn[t.rarity]||"#ccc",s=ki(t,n),d=t.job2?ki(t,t.job2):null,l=t.job2?_i[t.job2]:null,c=Sn(t),i=jn[t.country_code]||t.country_code||"";return`
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
  </div>`}function Oi(e){var p;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const n=((p=Object.entries(t).sort((s,d)=>d[1]-s[1])[0])==null?void 0:p[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Bn(e,{state:t,navigate:n,toast:r}){var d;const p=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Ri()).map(Oi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Mn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(i=>i.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Dn(c,{state:t,toast:r,navigate:n,container:e})}catch(i){r(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const i=s.find(a=>a.id===l.dataset.boosterId);Rn(i)})})}async function Dn(e,{state:t,toast:n,navigate:r,container:p}){var a;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await Hn()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((s||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((s||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let c=[];if((a=e.rates)!=null&&a.length)c=await ei(t.profile,e);else{const f=e.type||"player";f==="player"?c=await Hi(t.profile,e.cardCount,e.cost):f==="game_changer"?c=await Ui(t.profile,e.cardCount,e.cost):f==="formation"?c=await Ki(t.profile,e.cost):c=await ei(t.profile,e)}c.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=d.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await E.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Vi(c,e,r)}function qn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Gn(e,t){let n;switch(t){case"legende":n=e.filter(r=>r.rarity==="legende"),n.length||(n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),n.length||(n=e.filter(r=>Ze(r)>=6));break;case"special":n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),n.length||(n=e.filter(r=>Ze(r)>=6));break;case"normal_high":n=e.filter(r=>r.rarity==="normal"&&Ze(r)>=6),n.length||(n=e.filter(r=>Ze(r)>=6));break;default:n=e.filter(r=>r.rarity==="normal"&&Ze(r)>=1&&Ze(r)<=5),n.length||(n=e.filter(r=>r.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ei(e,t){if(t.cost>0){const{error:l}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await E.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),r=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),p=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),s=new Set,d=[];for(let l=0;l<(t.cardCount||5);l++){const c=zn(t.rates);if(c){if(c.card_type==="player"){const i=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,a=c.rarity?i(c.rarity):null;let f=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(f=f.eq("rarity",a));const{data:m}=await f;let x=m||[];if((c.note_min||c.note_max)&&(x=x.filter(M=>{const C=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!c.note_min||C>=c.note_min)&&(!c.note_max||C<=c.note_max)})),x.length||(c.note_min||c.note_max?(x=m||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):x=m||[]),!x.length)continue;let k=x.filter(M=>!s.has(M.id));k.length||(k=x);const o=k[Math.floor(Math.random()*k.length)];s.add(o.id);const A=r.has(o.id),{data:z}=await E.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();z&&(d.push({...z,player:o,isDuplicate:A}),E.rpc("record_transfer",{p_card_id:z.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:i}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=a[Math.floor(Math.random()*a.length)].name,{data:x}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();x&&d.push(x)}else if(c.card_type==="formation"){const i=Pi(),a=i[Math.floor(Math.random()*i.length)],f=p.has(a),{data:m}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();m!=null&&m[0]&&d.push({...m[0],isDuplicate:f})}}}return d}async function Hi(e,t,n){if(n>0){const{error:i}=await E.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:r}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=r.filter(i=>i.job==="GK"),s=r.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&p.length>0,l=[];for(let i=0;i<t;i++){const a=i===0&&d?p:i===0?s:r,f=qn(),m=Gn(a,f);m&&l.push(m)}d&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await E.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(c||[]).forEach((i,a)=>{E.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[a].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,a)=>({...c[a],player:i}))}async function Ui(e,t,n){const{error:r}=await E.from("users").update({credits:e.credits-n}).eq("id",e.id);if(r)throw r;const{data:p}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=p!=null&&p.length?p:Object.keys(Zt).map(a=>({name:a,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const a=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:a.name,gc_definition_id:a.id||null}}),{data:l,error:c}=await E.from("cards").insert(d).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(a=>{const f=p==null?void 0:p.find(m=>m.name===a.gc_type||m.id===a.gc_definition_id);return{...a,_gcDef:f||null}})}async function Ki(e,t){const{error:n}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:r}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),p=new Set((r||[]).map(a=>a.formation)),s=Pi(),d=s[Math.floor(Math.random()*s.length)],l=p.has(d),{data:c,error:i}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(c||[]).map(a=>({...a,isDuplicate:l}))}function Vi(e,t,n,r=null){var Y,te;if(!e||e.length===0){const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",B.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(B),(Y=B.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>B.remove());return}e=[...e].sort((B,Q)=>{const K=B.player?Ze(B.player):-1;return(Q.player?Ze(Q.player):-1)-K});const p=document.createElement("div");p.id="booster-anim-overlay",p.innerHTML=`
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
  `,document.body.appendChild(p);let s=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let c=!1;const i=B=>B.touches&&B.touches[0]?B.touches[0].clientX:B.clientX;function a(B){s||(c=!0,l.style.opacity="1",f(B))}function f(B){if(!c||s)return;const Q=d.getBoundingClientRect(),K=i(B)-Q.left,re=Math.max(0,Math.min(1,K/Q.width));l.style.width=re*Q.width+"px",re>=.82&&x()}function m(){s||(c=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function x(){var Q;if(s)return;s=!0,c=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const B=document.getElementById("cut-hint");B&&(B.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}d.addEventListener("pointerdown",a),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),d.addEventListener("touchstart",a,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let k=0,o=!1;const A=new Set;function z(B){k=B,document.getElementById("reveal-phase").style.display="flex",M(),C(B,0),Z()}function M(){const B=document.getElementById("card-dots");B&&(B.innerHTML=e.map((Q,K)=>`<div class="card-dot" data-i="${K}" style="width:8px;height:8px;border-radius:50%;background:${K===k?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),B.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>j(parseInt(Q.dataset.i)))))}function C(B,Q){var W;const K=e[B],re=document.getElementById("card-counter"),ge=document.getElementById("card-track");re&&(re.textContent=`Carte ${B+1} / ${e.length}`);const me=K.card_type==="player"&&((W=K.player)==null?void 0:W.rarity)==="legende",xe=!A.has(B);A.add(B);let R=0;if(K.card_type==="player"&&K.player){const P=K.player,X=P.job||"ATT";R=Number(X==="GK"?P.note_g:X==="DEF"?P.note_d:X==="MIL"?P.note_m:P.note_a)||0}const N=P=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${me?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Nn(K)}</div>
          ${K.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const X=document.getElementById("current-card-wrap");Q!==0?(X.style.transition="none",X.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{X.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",X.style.transform="translateX(0)"})):X.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),P||me?ae():F(),M()};xe&&R>6&&K.card_type==="player"&&K.player?O(K,()=>N(!0)):N(!1)}function O(B,Q){var N;o=!0;const K=B.player,re=`https://flagsapi.com/${K.country_code}/flat/64.png`,ge=(N=K.clubs)==null?void 0:N.logo_url,me=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!me||!xe){o=!1,Q();return}me.style.display="flex";const R=()=>{const W=xe.firstElementChild;W&&(W.classList.remove("wo-in"),W.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(R,2e3),setTimeout(()=>{var W;xe.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((W=K.clubs)==null?void 0:W.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(R,4450),setTimeout(()=>{me.style.display="none",xe.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},4900)}function j(B){if(o||B<0||B>=e.length||B===k)return;const Q=B>k?1:-1;k=B,C(B,Q)}function S(){j(k+1)}function D(){j(k-1)}function Z(){const B=document.getElementById("card-viewport");if(!B||B._swipeBound)return;B._swipeBound=!0;let Q=0,K=0,re=0,ge=!1;const me=P=>P.touches?P.touches[0].clientX:P.clientX,xe=P=>P.touches?P.touches[0].clientY:P.clientY,R=P=>{ge=!0,Q=me(P),K=xe(P),re=0},N=P=>{if(!ge)return;re=me(P)-Q;const X=xe(P)-K;if(Math.abs(re)<Math.abs(X))return;const ue=document.getElementById("current-card-wrap");ue&&(ue.style.transition="none",ue.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},W=()=>{if(!ge)return;ge=!1;const P=document.getElementById("current-card-wrap"),X=55;re<=-X&&k<e.length-1?S():re>=X&&k>0?D():P&&(P.style.transition="transform .2s ease",P.style.transform="translateX(0)")};B.addEventListener("pointerdown",R),B.addEventListener("pointermove",N),B.addEventListener("pointerup",W),B.addEventListener("pointercancel",W),B.addEventListener("touchstart",R,{passive:!0}),B.addEventListener("touchmove",N,{passive:!0}),B.addEventListener("touchend",W),B.addEventListener("click",P=>{if(Math.abs(re)>8)return;const X=B.getBoundingClientRect();P.clientX-X.left>X.width/2?S():D()})}let se=null;function ae(){const B=document.getElementById("fireworks-canvas");if(!B)return;B.width=window.innerWidth,B.height=window.innerHeight;const Q=B.getContext("2d"),K=[];function re(){const me=Math.random()*B.width,xe=Math.random()*B.height*.6,R=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],N=R[Math.floor(Math.random()*R.length)];for(let W=0;W<60;W++){const P=Math.PI*2/60*W,X=2+Math.random()*5;K.push({x:me,y:xe,vx:Math.cos(P)*X,vy:Math.sin(P)*X,alpha:1,color:N,size:2+Math.random()*3})}}re(),se=setInterval(re,600);function ge(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,B.width,B.height);for(let me=K.length-1;me>=0;me--){const xe=K[me];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){K.splice(me,1);continue}Q.globalAlpha=xe.alpha,Q.fillStyle=xe.color,Q.beginPath(),Q.arc(xe.x,xe.y,xe.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(se!==null||K.length>0)&&requestAnimationFrame(ge)}}ge()}function F(){se!==null&&(clearInterval(se),se=null);const B=document.getElementById("fireworks-canvas");B&&B.getContext("2d").clearRect(0,0,B.width,B.height)}if(r){const B=document.getElementById("reveal-phase"),Q=B==null?void 0:B.querySelector('div[style*="display:flex"][style*="gap:10px"]');Q&&(Q.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(te=document.getElementById("reveal-next"))==null||te.addEventListener("click",()=>{F(),p.remove(),r()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{F(),p.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{F(),p.remove(),n("boosters")})}function Nn(e){var t,n;if(e.card_type==="player"&&e.player)return Fn(e);if(e.card_type==="game_changer"){const r=e._gcDef,p=(r==null?void 0:r.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[r==null?void 0:r.color]||s.purple,c=d[r==null?void 0:r.color]||d.purple,i=(r==null?void 0:r.name)||e.gc_type||"Game Changer",a=(r==null?void 0:r.effect)||((t=Zt[e.gc_type])==null?void 0:t.desc)||"",f=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,m=((n=Zt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${a.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Rn(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
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
      </div>`,document.body.appendChild(r),r.addEventListener("click",d=>{d.target===r&&r.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>r.remove());return}Pn()}function Pn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const On="simulation",Yi="VOTRE_ZONE_ID";function Hn(){switch(On){case"propellerads":return Un();case"adsense":return Kn();default:return pi()}}function pi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{n--;const p=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");p&&(p.textContent=n),s&&(s.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(r),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Un(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(pi());window.propeller.push({zone_id:Yi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Kn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(pi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Yi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function Vn(e,{state:t,navigate:n,toast:r,refreshProfile:p}){var m,x;const{data:s}=await E.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let d=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Ri()).find(A=>(A.name||"").toLowerCase().includes("new player"));o&&(l=Oi(o))}catch(k){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',k)}const c=d.length;let i=0;e.innerHTML=`
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
  </div>`;const a=async()=>{await E.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function f(){var M;if(i>=c||!d.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),p&&await p(),r("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const k=d[0],{data:o}=await E.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let A=[];try{if(k.type==="formation")A=await Ki(t.profile,0);else if(k.type==="game_changer")A=await Ui(t.profile,k.count||3,0);else if(l&&((M=l.rates)!=null&&M.length)){const C={...l,cost:0,cardCount:k.count||l.cardCount||5};A=await ei(t.profile,C),k.guaranteeGK&&!t.profile.first_booster_opened&&(A.some(j=>j.player&&j.player.job==="GK")||await Yn(t.profile,A),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else A=await Hi(t.profile,k.count||5,0)}catch(C){r(C.message||"Erreur ouverture booster","error");return}d.shift(),i++,await a();const z=k.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:k.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${c})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Vi(A,z,n,()=>{f()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>f())}async function Yn(e,t){try{const{data:n}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const r=n[Math.floor(Math.random()*n.length)],p=t.findIndex(d=>d.player);if(p===-1)return;const s=t[p];await E.from("cards").update({player_id:r.id}).eq("id",s.id),t[p]={...s,player_id:r.id,player:r}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}async function Wn(e,t){const{state:n}=t,p=(n.params||{}).matchMode||"vs_ai_easy",s=p.replace("vs_ai_",""),d=p;await li(e,t,p,async({deckId:l,formation:c,starters:i,subsRaw:a,gcCardsEnriched:f,gcDefs:m})=>{try{const x=pt(i,c),k=await Xn(c,s),o=async A=>{try{const{data:z,error:M}=await E.from("matches").insert({home_id:n.profile.id,away_id:null,mode:d,home_deck_id:l,status:"in_progress"}).select().single();if(M){console.error("[MatchIA] Erreur création match:",M),ot(e,"⚠️","Impossible de créer le match ("+M.message+").","Retour",()=>t.navigate("home"));return}const C={gcDefs:m||[],matchId:z==null?void 0:z.id,mode:d,difficulty:s,formation:c,homeTeam:x,aiTeam:k,homeSubs:a,subsUsed:0,maxSubs:Math.min(a.length,3),homeScore:0,aiScore:0,gcCards:A,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};Qn(e,C,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),ot(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}di(e,f,o)}catch(x){console.error("[MatchIA] Exception setup:",x),ot(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function Xn(e,t){var d,l;const{data:n}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return Jn(e);const r=lt[e]||lt["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},s=[...n];for(const c of["GK","DEF","MIL","ATT"]){const i=s.filter(k=>k.job===c),a=s.filter(k=>k.job!==c),f=[...i,...a],m=[];for(let k=0;k<r[c];k++){const o=f[k]||s[k];o&&m.push({cardId:"ai-"+o.id+"-"+k,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((d=o.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const x=it(m.length);m.forEach((k,o)=>{k._col=x[o]}),p[c]=m}return p}function Jn(e){const t=lt[e]||lt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let c=0;c<t[s];c++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:r[p%r.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),p++}const l=it(d.length);d.forEach((c,i)=>{c._col=l[i]}),n[s]=d}return n}function Qn(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${at(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Zn(e,t,n),5e3)}function Zn(e,t,n){const r=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function s(o){return o.reduce((A,z)=>A+be(z,"MIL"),0)}function d(o){let A=0;for(let z=0;z<o.length-1;z++){const M=Qe(o[z],o[z+1]);M==="#00ff88"?A+=2:M==="#FFD700"&&(A+=1)}return A}const l=s(r)+d(r),c=s(p)+d(p),i=l>=c;function a(o,A,z,M){return`<div id="duel-row-${M}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${A}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((C,O)=>{const j=O<o.length-1?Qe(C,o[O+1]):null,S=!j||j==="#ff3333"||j==="#cc2222",D=j==="#00ff88"?"+2":j==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${M}" data-idx="${O}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ue({...C,note:be(C,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${O<o.length-1?`<div class="duel-link duel-link-${M}" data-idx="${O}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${S?"rgba(255,255,255,0.12)":j};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${S?"none":`0 0 8px ${j}`}">
            ${D?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${j}">${D}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${M}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
  </div>`;const f=()=>{const o=(A,z)=>e.querySelectorAll(A).forEach((M,C)=>{setTimeout(()=>{M.style.opacity="1",M.style.transform="translateY(0) scale(1)"},z+C*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((A,z)=>{setTimeout(()=>{A.style.opacity="1"},z*70)}),900),setTimeout(()=>{const A=e.querySelector("#vs-label");A&&(A.style.opacity="1",A.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",c,800)},1500)};function m(o,A,z){const M=document.getElementById(o);if(!M)return;const C=performance.now(),O=j=>{const S=Math.min(1,(j-C)/z);M.textContent=Math.round(A*(1-Math.pow(1-S,3))),S<1?requestAnimationFrame(O):M.textContent=A};requestAnimationFrame(O)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const x=i?si():null;i&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(o=>({name:o.name,note:be(o,"MIL"),portrait:Ie(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:p.map(o=>({name:o.name,note:be(o,"MIL"),portrait:Ie(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const k=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ze(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),A=document.getElementById("score-ai"),z=document.getElementById(i?"duel-row-home":"duel-row-ai"),M=document.getElementById(i?"duel-row-ai":"duel-row-home"),C=i?o:A,O=i?A:o;C&&(C.style.fontSize="80px",C.style.color=i?"#FFD700":"#ff6b6b",C.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),O&&(O.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var S;const j=document.getElementById("duel-shock");if(j){const D=(S=M||z)==null?void 0:S.getBoundingClientRect(),Z=e.querySelector(".match-screen").getBoundingClientRect();D&&(j.style.top=D.top-Z.top+D.height/2+"px"),j.style.animation="shockwave .5s ease-out forwards"}M&&(M.style.transformOrigin="center",M.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var S;const j=document.getElementById("duel-finale");j&&(j.innerHTML=`
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
          </button>`,j.style.transition="opacity .45s ease",j.style.opacity="1",j.style.pointerEvents="auto",(S=document.getElementById("start-match-btn"))==null||S.addEventListener("click",k))},600)},700)},2800)}function eo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(n=>tt(n)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(n=>tt(n)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${tt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${tt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ze(e,t,n){var C,O,j,S,D,Z,se,ae;const r=t.selected.map(F=>F.cardId),p=t.usedSubIds||[],s=t.homeSubs.filter(F=>!p.includes(F.cardId)),l=Object.values(t.homeTeam).flat().filter(F=>F.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(F=>(t.aiTeam[F]||[]).some(Y=>!Y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(F=>!F.used),a=t.phase==="attack"&&c&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(F=>!F.used).map(F=>F.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",x=t.phase==="defense",k=t.phase==="finished",o=t.gcCards.filter(F=>!t.usedGc.includes(F.id)),A=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${et((Y.players||[]).map(te=>({...te,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((Y.players||[]).map(te=>({...te,used:!1})),"#00ff88",Y.total)}
          </div>`}const F=t.log[t.log.length-1];return F?'<div style="padding:2px 4px">'+eo(F)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const F=window.innerWidth>=700,Y=(R,N,W)=>{var Se,Ke;const P=(t.gcDefs||[]).find(u=>u.name===R.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[P==null?void 0:P.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ue={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",ie=(P==null?void 0:P.name)||R.gc_type,Te=(P==null?void 0:P.effect)||((Se=Be[R.gc_type])==null?void 0:Se.desc)||"",ke=P!=null&&P.image_url?`/manager-wars/icons/${P.image_url}`:null,ve=((Ke=Be[R.gc_type])==null?void 0:Ke.icon)||"⚡",_e=Math.round(W*.22),we=Math.round(W*.22),Le=W-_e-we,Ge=ie.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${N}px;height:${W}px;border-radius:10px;border:2px solid ${ue};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${_e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ge}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${ie}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Le}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ke?`<img src="${ke}" style="max-width:${N-10}px;max-height:${Le-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Le*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${we}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Te.slice(0,38)}</span>
          </div>
        </div>`},te=(R,N)=>{var W;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(N*.2)}px">⚡</div>
            <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${(W=t.boostCard)==null?void 0:W.value}</div>
          </div>`},B=(R,N)=>N?te(130,175):Y(R,130,175),Q=(R,N)=>N?te(68,95):Y(R,68,95),K=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",re=k?`<button id="btn-results" style="${K};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${K};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${K};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ge=m||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(R,76,100)}</div>`).join("")}
      </div>`,xe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${st(t.homeTeam,t.formation,t.phase,r,300,300,a)}
        </div>
      </div>`;return F?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${xe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${re}${ge}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${o.map(R=>B(R,!1)).join("")}
            ${A?B(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(t.homeTeam,t.formation,t.phase,r,300,300,a)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${o.map(R=>Q(R,!1)).join("")}
            ${A?Q(null,!0):""}
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
          <div>${re}${ge}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(F=>{var Y,te,B;if(F.type==="duel"){const Q=F.isGoal,K=F.homeScored?"#FFD700":Q?"#ff6b6b":"rgba(255,255,255,0.3)",re=F.homeScored?"⚽ BUT !":Q?"⚽ BUT IA !":(Y=F.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${K};margin-bottom:4px">
                <div style="font-size:9px;color:${K};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${re}</div>
                ${(te=F.homePlayers)!=null&&te.length?`<div style="margin-bottom:3px">${et(F.homePlayers,"rgba(255,255,255,0.7)",F.homeTotal)}</div>`:""}
                ${(B=F.aiPlayers)!=null&&B.length?`<div style="opacity:0.7">${et(F.aiPlayers,"#ff6b6b",F.aiTotal)}</div>`:""}
              </div>`}return F.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${F.outPlayer?Ue({...F.outPlayer,used:!0,_line:F.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${F.inPlayer?Ue({...F.inPlayer,_line:F.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:F.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${F.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${F.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function z(){const F=e.querySelector(".match-screen");if(!F)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);F.style.bottom="auto",F.style.height=Y+"px",F.style.minHeight=Y+"px",F.style.maxHeight=Y+"px",F.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),B=e.querySelector("#mobile-play-area");te&&B&&(B.style.paddingBottom=te.offsetHeight+"px")}if(z(),setTimeout(z,120),setTimeout(z,400),setTimeout(z,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",z),window.visualViewport.addEventListener("scroll",z)),window.addEventListener("resize",z)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const F=e.querySelector(".terrain-wrapper svg");F&&(F.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let F=!1,Y=30;const te=()=>document.getElementById("match-timer"),B=()=>{const Q=te();if(!Q)return;const K=String(Math.floor(Y/60)).padStart(2,"0"),re=String(Y%60).padStart(2,"0");Q.textContent=` ${K}:${re}`,Q.style.color=F?"#ff2222":"#ff9500",Q.style.fontWeight="900"};B(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!F)F=!0,Y=15,B();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Q),setTimeout(()=>{Q.remove(),It(e,t,n)},2500)}else B()},1e3)}(C=document.getElementById("match-quit"))==null||C.addEventListener("click",()=>{Ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,It(e,t,n))}),(O=document.getElementById("view-ai"))==null||O.addEventListener("click",()=>po(t,n)),(j=document.getElementById("toggle-history"))==null||j.addEventListener("click",()=>{var F;(F=document.getElementById("match-history-panel"))==null||F.classList.add("open")}),(S=document.getElementById("close-history"))==null||S.addEventListener("click",()=>{var F;(F=document.getElementById("match-history-panel"))==null||F.classList.remove("open")}),(D=document.getElementById("btn-action"))==null||D.addEventListener("click",()=>{t.selected.length!==0&&(m?io(e,t,n):x&&no(e,t,n))}),(Z=document.getElementById("btn-results"))==null||Z.addEventListener("click",()=>It(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(F=>{F.addEventListener("click",()=>to(F,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(F=>{F.addEventListener("click",()=>Yt(e,t,n,null,F.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(F=>{F.addEventListener("click",()=>ao(F.dataset.gcId,F.dataset.gcType,e,t,n))}),(se=document.getElementById("boost-card"))==null||se.addEventListener("click",()=>co(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(F=>{F.addEventListener("click",()=>Yt(e,t,n,F.dataset.subId))}),(ae=document.getElementById("sub-btn-main"))==null||ae.addEventListener("click",()=>Yt(e,t,n))}function to(e,t,n,r){const p=e.dataset.cardId,s=e.dataset.role,d=t.selected.findIndex(l=>l.cardId===p);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===p);l&&t.selected.push({...l,_role:s,_line:s})}ze(n,t,r)}function ui(e,t,n){e.matchId&&E.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function io(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(l=>!l.used)),p=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,c=r&&["GK","DEF"].includes(d._role);return{...l,_line:d._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Nt(p,t.modifiers.home);t.pendingAttack={...s,players:[...p],side:"home"},t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ze(e,t,n),setTimeout(()=>oo(e,t,n),1200)}function no(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),p=Rt(r,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!0)});const s=Pt(t.pendingAttack.total,p.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Ie(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:Ie(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(s.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,n),qt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,n,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,dt(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Mi(r,"attack",t.difficulty);if(!p.length){Ft(e,t,n);return}const s=Nt(p,t.modifiers.ai);t.pendingAttack={...s,players:p,side:"ai"},p.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${p.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),c=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!c){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:Ie(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,ze(e,t,n),qt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,n,"home-attack")});return}t.phase="defense",ze(e,t,n)}function oo(e,t,n){var i,a;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Mi(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(x=>({name:x.name,note:be(x,x._line||x.job),portrait:Ie(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((a=t.pendingAttack)==null?void 0:a.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,n),qt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,n,"ai-attack")});return}const d=p.length>0?Rt(p,t.modifiers.ai).total:0;p.forEach(f=>{f.used=!0});const l=Pt(t.pendingAttack.total,d,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:p.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,n),qt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,n,"ai-attack")});return}else c.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,dt(e,t,n,"ai-attack")}function dt(e,t,n,r){if(t.round++,Wi(t)){It(e,t,n);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ft(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ft(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",ze(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ft(e,t,n);return}t.phase="ai-attack",ze(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function Wi(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(p=>!p.used)),n=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(p=>!p.used));return!t&&!n}function Ft(e,t,n){Wi(t)?It(e,t,n):(t.phase="attack",ze(e,t,n))}function ro(e,t,n){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=Ie(e),s=Ie(t),d=ct[e.job]||"#555",l=ct[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
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
  `,document.body.appendChild(r);let a=!1;const f=()=>{a||(a=!0,r.remove(),n())};r.addEventListener("click",f),setTimeout(f,2e3)}function kt(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,r=null,p=null){var x,k;if(t.phase!=="attack"){kt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){kt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([o,A])=>(A||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||o}))),d=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!s.length){kt("Aucun joueur utilisé à remplacer");return}if(!d.length){kt("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(o=>o.cardId===p));const c=((x=s[l])==null?void 0:x._line)||((k=s[l])==null?void 0:k.job);let i=r?Math.max(0,d.findIndex(o=>o.cardId===r)):Math.max(0,d.findIndex(o=>o.job===c)),a=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var j,S,D,Z,se,ae;const o=s[l],A=d[i],z=Math.min(130,Math.round((window.innerWidth-90)/2)),M=Math.round(z*1.35),C=F=>`background:rgba(255,255,255,0.12);border:none;color:${F?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${F?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${C(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${A?Ue({...A,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="in-down" style="${C(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${C(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ue({...o,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="out-down" style="${C(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(j=f.querySelector("#sub-close"))==null||j.addEventListener("click",()=>f.remove()),(S=f.querySelector("#out-up"))==null||S.addEventListener("click",()=>{l>0&&(l--,m())}),(D=f.querySelector("#out-down"))==null||D.addEventListener("click",()=>{l<s.length-1&&(l++,m())}),(Z=f.querySelector("#in-up"))==null||Z.addEventListener("click",()=>{i>0&&(i--,m())}),(se=f.querySelector("#in-down"))==null||se.addEventListener("click",()=>{i<d.length-1&&(i++,m())});const O=(F,Y,te,B)=>{const Q=f.querySelector("#"+F);if(!Q)return;let K=0;Q.addEventListener("touchstart",re=>{K=re.touches[0].clientY},{passive:!0}),Q.addEventListener("touchend",re=>{const ge=re.changedTouches[0].clientY-K;if(Math.abs(ge)<30)return;const me=Y();ge<0&&me<B-1?(te(me+1),m()):ge>0&&me>0&&(te(me-1),m())},{passive:!0})};O("in-panel",()=>i,F=>i=F,d.length),O("out-panel",()=>l,F=>l=F,s.length),(ae=f.querySelector("#sub-confirm"))==null||ae.addEventListener("click",F=>{if(F.preventDefault(),F.stopPropagation(),a)return;a=!0;const Y=s[l],te=d[i];if(!Y||!te)return;let B=null,Q=-1;for(const[re,ge]of Object.entries(t.homeTeam)){const me=(ge||[]).findIndex(xe=>xe.cardId===Y.cardId);if(me!==-1){B=re,Q=me;break}}if(Q===-1||!B){kt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const K={...te,_line:B,_col:Y._col||0,used:!1,boost:0};t.homeTeam[B].splice(Q,1,K),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(te.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:be(Y,B),portrait:Ie(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:te.name,firstname:te.firstname,note:be(te,B),portrait:Ie(te),job:te.job,country_code:te.country_code,rarity:te.rarity,clubName:te.clubName,clubLogo:te.clubLogo},text:`🔄 ${te.firstname} ${te.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),ro(Y,te,()=>ze(e,t,n))})}document.body.appendChild(f),m()}function ao(e,t,n,r,p){var k,o;const s=(r.gcDefs||[]).find(A=>A.name===t),d=Be[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,a=(s==null?void 0:s.effect)||d.desc,f=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,m=d.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
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
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${a}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(x),(k=x.querySelector("#gc-back"))==null||k.addEventListener("click",()=>x.remove()),(o=x.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{x.remove(),lo(e,t,n,r,p)})}function jt(e,t,n,r,p,s){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var i,a;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",k=be(f,m)+(f.boost||0),o=l.find(A=>A.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,x=e.find(o=>o.cardId===m);if(!x)return;const k=l.findIndex(o=>o.cardId===m);k>-1?l.splice(k,1):l.length<t&&l.push(x),c()})}),(a=d.querySelector("#gc-picker-confirm"))==null||a.addEventListener("click",()=>{d.remove(),s(l)})}c(),document.body.appendChild(d)}const so={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},r,p,s)=>{const d=Object.entries(r.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,c])=>c.filter(i=>!i.used).map(i=>({...i,_line:l})));return d.length?(jt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,p,r,l=>{l.forEach(c=>{const i=(r.homeTeam[c._line]||[]).find(a=>a.cardId===c.cardId);i&&(i.boost=(i.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),ze(p,r,s)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(p,r,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:r="ai"},p,s,d)=>{const l=r==="home"?p.homeTeam:p.aiTeam,c=r==="ai"?"adverse":"allié",i=Object.entries(l).filter(([a])=>!n.length||n.includes(a)).flatMap(([a,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:a})));return i.length?(jt(i,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,p,a=>{a.forEach(f=>{const x=((r==="home"?p.homeTeam:p.aiTeam)[f._line]||[]).find(k=>k.cardId===f.cardId);x&&(x.boost=(x.boost||0)-e,p.log.push({text:`🎯 -${e} sur ${x.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),ze(s,p,d)}),!0):(p.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),ze(s,p,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},r,p,s)=>{const d=n==="home"?r.homeTeam:r.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,a])=>a.filter(f=>!f.used).map(f=>({...f,_line:i})));return c.length?(jt(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,p,r,i=>{i.forEach(a=>{const m=((n==="home"?r.homeTeam:r.aiTeam)[a._line]||[]).find(x=>x.cardId===a.cardId);m&&(m.used=!0,r.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(p,r,s)}),!0):(r.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ze(p,r,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,r,p)=>{const s=Object.entries(n.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,l])=>l.filter(c=>c.used).map(c=>({...c,_line:d})));return s.length?(jt(s,e,`Choisir ${e} joueur(s) à ressusciter`,r,n,d=>{d.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);c&&(c.used=!1,n.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),ze(r,n,p)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(r,n,p),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function lo(e,t,n,r,p){r.usedGc.push(e);const s=r.gcDefs||[],d=s.find(c=>c.name===t)||s.find(c=>{var i;return((i=c.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const c=so[d.effect_type];c?c(d.effect_params||{},r,n,p)||(l=!0):(p.toast(`Effet "${d.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(r.homeTeam).flatMap(([i,a])=>(a||[]).filter(f=>f.used).map(f=>({...f,_line:i})));c.length?(c[0].used=!1,r.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(i=>!i.used);if(c.length){const i=c.sort((a,f)=>be(f,"ATT")-be(a,"ATT"))[0];i.used=!0,r.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}E.from("cards").delete().eq("id",e).then(()=>{}),l&&ze(n,r,p)}function co(e,t,n){const r=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!r.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ct[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${be(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const s=p.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[d]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),ze(e,t,n)})})}function qt(e,t,n,r,p){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,a)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${ct[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>p(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function It(e,t,n){var a,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=n,p=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,d=p?"victoire":s?"nul":"defaite",l=ln(t.mode,d);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?r.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(r.profile.credits||0)+l,matches_played:(r.profile.matches_played||0)+1};p?c.wins=(r.profile.wins||0)+1:s?c.draws=(r.profile.draws||0)+1:c.losses=(r.profile.losses||0)+1,await E.from("users").update(c).eq("id",r.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(a=document.getElementById("res-home"))==null||a.addEventListener("click",()=>{i.remove(),Ne(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),Ne(e),n.navigate("match",{matchMode:t.mode})})}function po(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${at(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function uo(e,t,n,r){var p,s;try{const d=(s=(p=t==null?void 0:t.state)==null?void 0:p.profile)==null?void 0:s.id;try{(E.getChannels?E.getChannels():[]).forEach(c=>{const i=c.topic||"";(i.includes("matchmaking")||i.includes("pvp-match"))&&E.removeChannel(c)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}d&&(await E.rpc("cancel_matchmaking",{p_user_id:d}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",d).then(()=>{},()=>{}))}catch{}await li(e,t,"random",({deckId:d,formation:l,starters:c,subsRaw:i,gcCardsEnriched:a,gcDefs:f})=>{const m=x=>fo(e,t,d,l,c,i,x,f||[],n,r);if(!a.length){m([]);return}di(e,a,m)})}async function fo(e,t,n,r,p,s,d=[],l=[],c,i){var S;const{state:a,navigate:f,toast:m}=t,x=a.profile.id;let k=!1,o=null;We(e);try{await E.rpc("cancel_matchmaking",{p_user_id:x})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",x)}catch{}const A=(D,Z,se,ae)=>{var F;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${Z?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${Z?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${Z?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${i}</div>
            <div style="font-size:11px;color:${Z?"#22c55e":"#aaa"}">${Z?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!Z&&D?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(F=document.getElementById("lobby-cancel"))==null||F.addEventListener("click",async()=>{k=!0,o&&(E.removeChannel(o),o=null),se&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",se),Ne(e),f("home")})},z=async(D,Z)=>{k=!0,o&&(E.removeChannel(o),o=null),await new Promise(se=>setTimeout(se,600)),e.isConnected&&go(e,t,D,Z,d,l)},{data:M}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${x},invitee_id.eq.${c}),and(inviter_id.eq.${c},invitee_id.eq.${x})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let C,O;if(M&&M.inviter_id===c)O=!1,C=M.id,await E.from("friend_match_invites").update({invitee_deck_id:n,invitee_ready:!0,status:"accepted"}).eq("id",C);else{O=!0;const{data:D,error:Z}=await E.from("friend_match_invites").insert({inviter_id:x,invitee_id:c,friend_id:c,inviter_deck_id:n,inviter_ready:!0,status:"pending"}).select().single();if(Z||!D){m("Erreur création invitation","error"),Ne(e),f("home");return}C=D.id}if(A(!0,!O,C),!O){const D={home_id:c,away_id:x,home_deck_id:M.inviter_deck_id,away_deck_id:n,status:"active",mode:"friend"},Z=await E.from("matches").insert(D).select().single(),se=Z.data;if(!se){m("Erreur création match: "+(((S=Z.error)==null?void 0:S.message)||""),"error"),Ne(e),f("home");return}await E.from("friend_match_invites").update({match_id:se.id,status:"matched"}).eq("id",C),z(se.id,!1);return}const j=setInterval(()=>{if(k){clearInterval(j);return}E.from("matchmaking_queue").delete().eq("user_id",x).then(()=>{},()=>{})},3e3);o=E.channel("friend-invite-"+C).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${C}`},async D=>{if(k)return;const Z=D.new;Z.status==="matched"&&Z.match_id?(clearInterval(j),z(Z.match_id,!0)):Z.status==="declined"?(clearInterval(j),m(`${i} a décliné l'invitation`,"warning"),Ne(e),f("home")):Z.invitee_ready&&A(!0,!0,C)}).subscribe()}async function go(e,t,n,r,p=[],s=[]){const{state:d,navigate:l,toast:c}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(p||[]).map(u=>u.id),m=(p||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await E.from("matches").select("*").eq("id",n).single();if(!x){c("Match introuvable","error"),l("home");return}async function k(){const[{data:u},{data:g},{data:b},{data:h}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),y=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((u==null?void 0:u.starters)||[]).map($=>y($)),w=((g==null?void 0:g.starters)||[]).map($=>y($)),_=(u==null?void 0:u.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:pt(v,_),p2Team:pt(w,I),p1Subs:((u==null?void 0:u.subs)||[]).map($=>y($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:I,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?m:[],gcCardsFull_p2:r?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!o)if(r){o=await k();const{data:u}=await E.from("matches").select("game_state").eq("id",n).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await E.from("matches").update({game_state:o,turn_user_id:x.home_id}).eq("id",n):o=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<30&&!o;u++){await new Promise(b=>setTimeout(b,400));const{data:g}=await E.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){c("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await E.from("matches").update({game_state:o}).eq("id",n)}let A=!1,z=null,M=!1;const C=new Set,O=new Set;function j(u){var $,L;try{E.removeChannel(S)}catch{}const g=o[i+"Score"]||0,b=o[a+"Score"]||0;let h,y;u.winner_id?(h=u.winner_id===d.profile.id,y=!1):u.forfeit?(h=g>b,y=!1):(y=g===b,h=g>b),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":h?"🏆":"😞",_=y?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=y?"#fff":h?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${b} ${o[a+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ne(e),l("home")})}const S=E.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},u=>{const g=u.new;try{if(g.status==="finished"||g.forfeit){if(A)return;A=!0,z&&(clearInterval(z),z=null),g.game_state&&(o=g.game_state),j(g);return}if(g.game_state){const b=o;o=g.game_state;const h=o._lastGC;if(h&&h.seq&&!O.has(h.seq)&&(O.add(h.seq),h.by!==i)){me(h.type,h.by,()=>B());return}const y=b[i+"Score"]||0,v=b[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,I=w>y,$=_>v;if((I||$)&&!C.has(o.round)){C.add(o.round);const L=[...o.log||[]].reverse().find(U=>U.isGoal),q=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(q,w,_,I,()=>B());return}B()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function D(u){Object.assign(o,u),o.lastActionAt=new Date().toISOString();const{error:g}=await E.from("matches").update({game_state:o}).eq("id",n);g&&c("Erreur de synchronisation","error");try{B()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function Z(){if(A)return;A=!0,z&&(clearInterval(z),z=null);const u=r?x.away_id:x.home_id,g=r?"p2":"p1",b=r?"p1":"p2",h={...o,[g+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",n)}catch{}try{E.removeChannel(S)}catch{}setTimeout(()=>{Ne(e),l("home")},800)}const se={BOOST_STAT:({value:u=1,count:g=1,roles:b=[]},h,y)=>{const v=h[i+"Team"],w=Object.entries(v).filter(([_])=>!b.length||b.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(h);return}ae(w,g,`Choisir ${g} joueur(s) à booster (+${u})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+u,h.log.push({text:`⚡ +${u} sur ${$.name}`,type:"info"}))}),h[i+"Team"]=v,y(h)})},DEBUFF_STAT:({value:u=1,count:g=1,roles:b=[],target:h="ai"},y,v)=>{const w=h==="home"?i:a,_=y[w+"Team"],I=h==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!b.length||b.includes(L)).flatMap(([L,q])=>q.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(y);return}ae($,g,`Choisir ${g} joueur(s) ${I}(s) (-${u})`,L=>{L.forEach(q=>{const U=(_[q._line]||[]).find(oe=>oe.cardId===q.cardId);U&&(U.boost=(U.boost||0)-u,y.log.push({text:`🎯 -${u} sur ${U.name}`,type:"info"}))}),y[w+"Team"]=_,v(y)})},GRAY_PLAYER:({count:u=1,roles:g=[],target:b="ai"},h,y)=>{const v=b==="home"?i:a,w=h[v+"Team"],_=b==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(q=>!q.used).map(q=>({...q,_line:$})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(h);return}ae(I,u,`Choisir ${u} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const q=(w[L._line]||[]).find(U=>U.cardId===L.cardId);q&&(q.used=!0,h.log.push({text:`❌ ${q.name} exclu !`,type:"info"}))}),h[v+"Team"]=w,y(h)})},REVIVE_PLAYER:({count:u=1,roles:g=[]},b,h)=>{const y=b[i+"Team"],v=Object.entries(y).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(b);return}ae(v,u,`Choisir ${u} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(y[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,b.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),b[i+"Team"]=y,h(b)})},REMOVE_GOAL:({},u,g)=>{const b=a+"Score";u[b]>0?(u[b]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(u)},ADD_GOAL_DRAW:({},u,g)=>{u[i+"Score"]===u[a+"Score"]?(u[i+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(u)},ADD_SUB:({value:u=1},g,b)=>{g.maxSubs=(g.maxSubs||3)+u,g.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),b(g)},CUSTOM:({},u,g)=>g(u)};function ae(u,g,b,h){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=u.map(L=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),ce=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${q};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${g})
          </button>
        </div>`,(I=y.querySelector("#pp-close"))==null||I.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const q=L.dataset.cid,U=u.find(ce=>ce.cardId===q),oe=v.findIndex(ce=>ce.cardId===q);U&&(oe>-1?v.splice(oe,1):v.length<g&&v.push(U),w())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),h(v)})}w(),document.body.appendChild(y)}async function F(u,g){const h=(o["gcCardsFull_"+i]||[]).find(_=>_.id===u),y=(h==null?void 0:h._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],u],w={type:g,by:i,seq:(o._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const I=se[y.effect_type];if(I){const $={...o};I(y.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await D(L)});return}}const _={...o};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await D(_)})}function Y(u,g){const b="usedCardIds_"+u,h=new Set(o[b]||[]);g.forEach(y=>h.add(y)),o[b]=[...h]}function te(){for(const u of["p1","p2"]){const g=new Set(o["usedCardIds_"+u]||[]),b=o[u+"Team"];if(b)for(const h of["GK","DEF","MIL","ATT"])(b[h]||[]).forEach(y=>{y.used=g.has(y.cardId)})}}function B(){var Oe,ft,gt,mt,xt,yt;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return re();if(o.phase==="finished")return Ke();const u=o[i+"Team"],g=o[a+"Team"];te();const b=o[i+"Score"],h=o[a+"Score"],y=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],$=I.map(T=>T.cardId),L=window.innerWidth>=700,q=o[i+"Subs"]||[],U=o["usedSubIds_"+i]||[],oe=q.filter(T=>!U.includes(T.cardId)),ce=o["gcCardsFull_"+i]||[],G=o["usedGc_"+i]||[],H=ce.filter(T=>!G.includes(T.id)),J=o.boostOwner===i&&!o.boostUsed,ne=!["GK","DEF","MIL","ATT"].some(T=>(g[T]||[]).some(V=>!V.used)),de=[...u.MIL||[],...u.ATT||[]].filter(T=>!T.used),fe=w&&ne&&de.length===0?[...u.GK||[],...u.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];function le(T,V,pe){var wt,$t;const ee=T._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",Xe=(ee==null?void 0:ee.name)||T.gc_type,Je=(ee==null?void 0:ee.effect)||((wt=Be[T.gc_type])==null?void 0:wt.desc)||"",ht=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,Ut=(($t=Be[T.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(pe*.22),vt=Math.round(pe*.22),nt=pe-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
        style="box-sizing:border-box;width:${V}px;height:${pe}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${V-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${nt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${V-10}px;max-height:${nt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(nt*.55)}px">${Ut}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function ye(T,V){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${T}px;height:${V}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(V*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(V*.2)}px">⚡</div>
        <div style="font-size:${Math.round(V*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ee=(T,V)=>V?ye(130,175):le(T,130,175),Re=(T,V)=>V?ye(68,95):le(T,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${oe.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':oe.map(T=>`<div class="pvp-sub-btn" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(T,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function De(T){if(T.type==="duel"&&(T.homeTotal!=null||T.aiTotal!=null)){const V=(T.homeTotal||0)>=(T.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(T.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.homePlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${V?20:14}px;font-weight:900;color:${V?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${T.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${V?14:20}px;font-weight:900;color:${V?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${T.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.aiPlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
          </div>
          ${T.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${T.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${T.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${T.type==="goal"?700:400};padding:3px 2px">${T.text||""}</div>`}const Ve=(()=>{var V,pe;if(_&&((V=o.pendingAttack)!=null&&V.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(w&&((pe=o.pendingAttack)!=null&&pe.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#00ff88",ee.total)}
        </div>`}const T=(o.log||[]).slice(-1)[0];return T?'<div style="padding:2px 4px">'+De(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;We(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(T=>Ee(T,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${qe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(u,o[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(T=>Re(T,!1)).join("")}
            ${J?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&oe.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&oe.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&oe.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&oe.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${oe.length}</div>
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
          <div>${je}${$e}</div>
        </div>
      </div>`;function Ae(){const T=e.querySelector(".match-screen");if(!T)return;const V=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.height=V+"px",T.style.minHeight=V+"px",T.style.maxHeight=V+"px",T.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");pe&&ee&&(ee.style.paddingBottom=pe.offsetHeight+"px")}if(Ae(),setTimeout(Ae,120),setTimeout(Ae,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ae),window.visualViewport.addEventListener("scroll",Ae)),window.addEventListener("resize",Ae)),function(){const V=e.querySelector(".terrain-wrapper svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("viewBox","-26 -26 352 352"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>{if(!w&&!_)return;const V=T.dataset.cardId,pe=T.dataset.role,ee=(u[pe]||[]).find(Je=>Je.cardId===V);if(!ee||ee.used)return;const He=fe.includes(V);if(w&&!["MIL","ATT"].includes(pe)&&!He)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===V);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...ee,_role:pe}),B()})}),e.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>N(T.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(T=>{T.addEventListener("click",()=>N())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>N()),e.querySelectorAll(".pvp-gc-mini").forEach(T=>{T.addEventListener("click",()=>xe(T.dataset.gcId,T.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",T=>{w?T.currentTarget.dataset.pass==="1"||!we(i)?ue():ie():_&&Te()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),z&&(clearInterval(z),z=null),(w||_)&&!A){let T=30,V=!1;const pe=()=>document.getElementById("pvp-timer"),ee=()=>{pe()&&(pe().textContent=T+"s",pe().style.color=V?"#ff4444":"#fff")};ee(),z=setInterval(()=>{T--,T<0?V?(clearInterval(z),z=null,w&&!we(i)?ue():Z()):(V=!0,T=15,ee()):ee()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await D({phase:"midfield"})},5e3)}let K=!1;function re(){if(K)return;const u=o[i+"Team"].MIL||[],g=o[a+"Team"].MIL||[];function b(H){return H.reduce((J,ne)=>J+be(ne,"MIL"),0)}function h(H){let J=0;for(let ne=0;ne<H.length-1;ne++){const de=Qe(H[ne],H[ne+1]);de==="#00ff88"?J+=2:de==="#FFD700"&&(J+=1)}return J}const y=b(u)+h(u),v=b(g)+h(g),w=y>=v;function _(H,J,ne){return`<div id="duel-row-${ne}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,fe)=>{const le=fe<H.length-1?Qe(de,H[fe+1]):null,ye=!le||le==="#ff3333"||le==="#cc2222",Ee=le==="#00ff88"?"+2":le==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ne}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...de,note:be(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${ne}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":le};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${le}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${le}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ne}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(H)} + ${h(H)} liens = <b style="color:#fff">${b(H)+h(H)}</b>
        </div>
      </div>`}We(e),e.innerHTML=`
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
      ${_(u,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((ne,de)=>{setTimeout(()=>{ne.style.opacity="1",ne.style.transform="translateY(0) scale(1)"},J+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,ne){const de=document.getElementById(H);if(!de)return;const fe=performance.now(),le=ye=>{const Ee=Math.min(1,(ye-fe)/ne);de.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(le):de.textContent=J};requestAnimationFrame(le)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",v,800)},1500);const L=o.p1Team.MIL||[],q=o.p2Team.MIL||[],U=b(L)+h(L),oe=b(q)+h(q),ce=U>=oe?"p1":"p2";let G=o.boostValue;G==null&&(G=si(),o.boostValue=G,o.boostOwner=ce,o.boostUsed=!1),K=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),ne=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?ne:de,le=w?de:ne;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),le&&(le.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=ce;await D({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(u,g,b,h,y){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,q)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${q%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][q%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${g} – ${b}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(u,g,b){var G,H;const h=(o.gcDefs||[]).find(J=>{var ne;return J.name===u||((ne=J.name)==null?void 0:ne.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",w=(h==null?void 0:h.name)||u,_=(h==null?void 0:h.effect)||((G=Be[u])==null?void 0:G.desc)||"",I=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,$=((H=Be[u])==null?void 0:H.icon)||"⚡",q=g===i?"Vous":o[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${q} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let oe=!1;const ce=()=>{oe||(oe=!0,U.remove(),setTimeout(()=>b&&b(),50))};U.addEventListener("click",ce),setTimeout(ce,3e3)}function xe(u,g){var U,oe,ce,G;const h=(o["gcCardsFull_"+i]||[]).find(H=>H.id===u),y=h==null?void 0:h._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||g,I=(y==null?void 0:y.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,L=((oe=Be[g])==null?void 0:oe.icon)||"⚡",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",q.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(q),(ce=q.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>q.remove()),(G=q.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{q.remove(),F(u,g)})}function R(){var h;const u=o[i+"Team"],g=Object.entries(u).flatMap(([y,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!g.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(y=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=be(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#bp-close"))==null||h.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const v=y.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(u[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),b.remove(),await D({[i+"Team"]:u,boostUsed:!0})})})}function N(u=null){var oe,ce;if(!(o.phase===i+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const b=o[i+"Team"],h=o["usedSubIds_"+i]||[],y=o.maxSubs||3;if(h.length>=y){c(`Maximum ${y} remplacements atteint`,"warning");return}const v=Object.entries(b).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(o[i+"Subs"]||[]).filter(G=>!h.includes(G.cardId));if(!v.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){c("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===u));const I=((oe=v[_])==null?void 0:oe._line)||((ce=v[_])==null?void 0:ce.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const q=document.createElement("div");q.id="pvp-sub-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var le,ye,Ee,Re,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),ne=Math.round(J*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;q.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pin-down" style="${de($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,ne):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(le=q.querySelector("#psub-close"))==null||le.addEventListener("click",()=>q.remove()),(ye=q.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=q.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Re=q.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=q.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const De=q.querySelector("#"+$e);if(!De)return;let Ve=0;De.addEventListener("touchstart",qe=>{Ve=qe.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",qe=>{const Ae=qe.changedTouches[0].clientY-Ve;if(Math.abs(Ae)<30)return;const Oe=Fe();Ae<0&&Oe<Pe-1?(Me(Oe+1),U()):Ae>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=q.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,De=(b[Pe]||[]).findIndex(Ae=>Ae.cardId===Fe.cardId);if(De===-1){c("Erreur : joueur introuvable","error"),q.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};b[Pe].splice(De,1,Ve);const qe=[...h,Me.cardId];q.remove(),W(Fe,Me,async()=>{await D({[i+"Team"]:b,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:qe})})})}document.body.appendChild(q),U()}function W(u,g,b){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const _=()=>{w||(w=!0,y.remove(),setTimeout(()=>b(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(g=u.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>u.remove())}function X(){var b;const u=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(b=g.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>g.remove())}async function ue(){if(o.phase!==i+"-attack")return;const u=i==="p1"?"p2":"p1",g=(o.round||0)+1,b=[...o.log||[]];b.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Le(o),y=we(u),v=h||!y?"finished":u+"-attack";await D({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:u,round:g,log:b}),v==="finished"&&await Se(o)}async function ie(){const u=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),b=(o["selected_"+i]||[]).map(v=>{const w=(u[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=u[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),q=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:q,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!b.length)return;const h=Nt(b,o.modifiers[i]||{});Y(i,b.map(v=>v.cardId)),b.forEach(v=>{const w=(u[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],B();const y=[...o.log||[]];if(g){const v=(o[i+"Score"]||0)+1,w=b.map(q=>({name:q.name,note:be(q,q._line||"ATT"),portrait:Ie(q),job:q.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:h.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",$={...o,[i+"Team"]:u,[i+"Score"]:v},L=Le($);C.add(_),ge(w,v,o[a+"Score"]||0,!0,async()=>{await D({[i+"Team"]:u,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:y}),L&&await Se({...o,[i+"Score"]:v})});return}y.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${h.total})`}),await D({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],pendingAttack:{...h,players:b,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:y})}async function Te(){const u=o[i+"Team"],g=(o["selected_"+i]||[]).map(G=>{const H=(u[G._role]||[]).find(le=>le.cardId===G.cardId)||G,J=u[G._role]||[],ne=J.findIndex(le=>le.cardId===G.cardId),de=it(J.length),fe=ne>=0?de[ne]:H._col??1;return{...H,_line:G._role,_col:fe}}),b=Rt(g,o.modifiers[i]||{});Y(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(u[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],B();const h=Pt(o.pendingAttack.total,b.total,o.modifiers[i]||{}),y=o.pendingAttack.side,v=h==="attack"||(h==null?void 0:h.goal),w=y==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...o.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&y===i,text:v?`⚽ BUT de ${o[y+"Name"]} ! (${o.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${b.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:o.pendingAttack.total,aiTotal:b.total});const L=v?(o[y+"Score"]||0)+1:o[y+"Score"]||0,q={...o,[i+"Team"]:u,[y+"Score"]:L},U=Le(q),oe=U?"finished":w+"-attack",ce=async()=>{await D({[i+"Team"]:u,[a+"Team"]:o[a+"Team"],[y+"Score"]:L,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:oe,attacker:w,round:_,log:$}),(oe==="finished"||U)&&await Se({...o,[y+"Score"]:L})};if(v){const G=y===i,H=G?L:o[i+"Score"]||0,J=G?o[a+"Score"]||0:L;C.add(_),ge(I,H,J,G,ce)}else await ce()}function ke(u){return["MIL","ATT"].some(g=>(u[g]||[]).some(b=>!b.used))}function ve(u){return["GK","DEF","MIL","ATT"].some(g=>(u[g]||[]).some(b=>!b.used))}function _e(u){return ve(u)&&!ke(u)}function we(u){const g=o[u+"Team"],b=o[(u==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(b)&&_e(g))}function Le(u){const g=["MIL","ATT"].some($=>(u.p1Team[$]||[]).some(L=>!L.used)),b=["MIL","ATT"].some($=>(u.p2Team[$]||[]).some(L=>!L.used)),h=ve(u.p1Team),y=ve(u.p2Team);return!g&&!(!y&&h)&&(!b&&!(!h&&y))}function Ge(u){const g=u.p1Score||0,b=u.p2Score||0;return g===b?null:g>b?x.home_id:x.away_id}async function Se(u){try{await E.from("matches").update({status:"finished",winner_id:Ge(u),home_score:u.p1Score||0,away_score:u.p2Score||0}).eq("id",n)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var y;const u=o[i+"Score"],g=o[a+"Score"],b=u>g,h=u===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{E.removeChannel(S)}catch{}Ne(e),l("home")})}B()}const mo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function xo(e,t){const{state:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:r}=t,{data:p}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
      </div>`;return}const m=i==="mine"?[...f].sort((x,k)=>x.status!==k.status?x.status==="active"?-1:1:new Date(k.listed_at)-new Date(x.listed_at)):f;a.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(x=>{var C,O,j,S;const k=(C=x.card)==null?void 0:C.player;if(!k)return"";const o=k.job==="GK"?k.note_g:k.job==="DEF"?k.note_d:k.job==="MIL"?k.note_m:k.note_a,A=mo[k.rarity],z=(n.profile.credits||0)>=x.price,M=x.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${M?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${vo(k.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${A};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${k.firstname} ${k.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${k.country_code} · ${((O=k.clubs)==null?void 0:O.encoded_name)||"—"} · ${k.rarity} · ${k.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((j=x.seller)==null?void 0:j.pseudo)||"—"}</div>`:M?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((S=x.buyer)==null?void 0:S.pseudo)||"—"} · ${x.sold_at?new Date(x.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(x.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${x.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${x.id}" ${z?"":"disabled"} style="margin-top:4px">${z?"Acheter":"Trop cher"}</button>`:M?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${x.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,a.querySelectorAll("[data-buy]").forEach(x=>{x.addEventListener("click",()=>yo(x.dataset.buy,f,e,t))}),a.querySelectorAll("[data-cancel]").forEach(x=>{x.addEventListener("click",()=>bo(x.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(a=>{const f=a===i;a.style.background=f?"var(--green)":"#fff",a.style.color=f?"#fff":"var(--gray-600)",a.style.borderColor=f?"var(--green)":"var(--gray-200)"}),c(i.dataset.tab)})})}async function yo(e,t,n,r){var x;const{state:p,toast:s,refreshProfile:d}=r,l=t.find(k=>k.id===e);if(!l)return;const c=l.price,i=p.profile.credits||0,a=(x=l.card)==null?void 0:x.player;if(i<c){s("Crédits insuffisants","error");return}if(!await ho(a,c))return;const m=document.querySelector(`[data-buy="${e}"]`);m&&(m.disabled=!0,m.textContent="⏳");try{const{data:k,error:o}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(o)throw new Error(o.message);if(!(k!=null&&k.success))throw new Error((k==null?void 0:k.error)||"Achat impossible");p.profile.credits=i-c;const A=document.getElementById("nav-credits");A&&(A.textContent=`💰 ${(i-c).toLocaleString("fr")}`),s(`✅ ${a==null?void 0:a.surname_encoded} ajouté à ta collection !`,"success"),fi(n,r)}catch(k){s("❌ "+k.message,"error"),m&&(m.disabled=!1,m.textContent="Acheter")}}function ho(e,t){return new Promise(n=>{const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
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
      </div>`,document.body.appendChild(r);const p=s=>{r.remove(),n(s)};r.querySelector("#buy-ok").addEventListener("click",()=>p(!0)),r.querySelector("#buy-cancel").addEventListener("click",()=>p(!1)),r.addEventListener("click",s=>{s.target===r&&p(!1)})})}async function bo(e,t,n){const{toast:r}=n,{data:p}=await E.from("market_listings").select("card_id").eq("id",e).single();await E.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),r("Annonce retirée","success"),fi(t,n)}function vo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function wo(e,{state:t,navigate:n,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function $o(e,{state:t,navigate:n,toast:r}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(a=>a.status==="finished"),c=(s||[]).filter(a=>a.status==="in_progress");function i(a){const f=a.home_id===p.id;f?a.home_score:a.away_score,f?a.away_score:a.home_score;const m=a.winner_id===p.id,x=a.home_score===a.away_score&&a.status==="finished",k=a.status!=="finished"?"…":x?"N":m?"V":"D",o=a.status!=="finished"||x?"#888":m?"#1A6B3C":"#c0392b";let A=d[a.mode]||a.mode;a.away_id===null&&!A.startsWith("IA")&&(A="IA");const M=a.home_id===p.id?a.away:a.home;let C;a.away_id===null?C=A:M?C=`${M.club_name||M.pseudo} (${M.pseudo})`:C="Adversaire";let O="";a.status==="in_progress"&&Date.now()-new Date(a.created_at).getTime()>3600*1e3&&(O=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const j=new Date(a.created_at),S=j.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+j.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=a.status==="finished"?`${a.home_score} - ${a.away_score}`:`${a.home_score||0} - ${a.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${C}${O}</div>
        <div style="font-size:11px;color:var(--gray-600)">${A} · ${S}${a.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${k}</span>
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
  </div>`}Qi(en);const he={user:null,profile:null,page:"home",params:{}};function Et(e,t="info",n=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},n))}function _o(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function At(){if(!he.user)return;const{data:e}=await E.from("users").select("*").eq("id",he.user.id).single();e&&(he.profile=e)}const gi="mw_theme";function Gt(){return localStorage.getItem(gi)||"light"}function ko(e){var t;localStorage.setItem(gi,e),ni(e),(t=he.profile)!=null&&t.id&&E.from("users").update({theme:e}).eq("id",he.profile.id).then(()=>{})}function ni(e){document.documentElement.setAttribute("data-theme",e)}function Bt(e,t={}){he.page=e,he.params=t,Xi()}async function Xi(){var r,p;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===he.page)});const t=document.getElementById("nav-credits");t&&he.profile&&(t.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const n={state:he,navigate:Bt,toast:Et,openModal:_o,closeModal:ii,refreshProfile:At};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await hi(e,n);break;case"collection":await $n(e,n);break;case"decks":await Qt(e,n);break;case"boosters":await Bn(e,n);break;case"match":{const s=he.params&&he.params.matchMode||"vs_ai_easy";s==="random"?await un(e,n):s==="friend"?await uo(e,n,(r=he.params)==null?void 0:r.friendId,(p=he.params)==null?void 0:p.friendName):await Wn(e,n);break}case"market":await xo(e,n);break;case"rankings":await wo(e,n);break;case"matches":await $o(e,n);break;case"friends":await rn(e,n);break;default:await hi(e,n)}}function Eo(){const e=document.getElementById("app"),t=he.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",p=>{p.preventDefault(),Bt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Bt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Bt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Gt()==="dark"?"light":"dark";ko(p),Ei(p)}),Ei(Gt())}function Ei(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Ao(){ni(Gt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await E.auth.getSession();if(!e){Ai(),mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et});return}he.user=e.user,await At(),Ai();try{const{data:n}=await E.from("formation_links_overrides").select("formation, links"),r={};(n||[]).forEach(p=>{r[p.formation]=p.links}),Zi(r)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!he.profile){tn(document.getElementById("app"),{state:he,navigate:async()=>{await At(),Wt()},toast:Et,refreshProfile:At});return}const t=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&t.length>0){Vn(document.getElementById("app"),{state:he,navigate:()=>Wt(),toast:Et,refreshProfile:At});return}he.profile.theme&&he.profile.theme!==Gt()&&(localStorage.setItem(gi,he.profile.theme),ni(he.profile.theme)),Wt(),E.auth.onAuthStateChange(async(n,r)=>{n==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et}))})}function To(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ht(){const e=document.getElementById("app");e&&(e.style.height=To()+"px")}window.addEventListener("resize",Ht);window.addEventListener("orientationchange",()=>setTimeout(Ht,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ht);function Wt(){const e=()=>{var n;(n=he.user)!=null&&n.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Ht(),Eo(),Xi()}function Ai(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Ji(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}Ao().catch(e=>{console.error("Échec du démarrage:",e),Ji()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Ji("Le serveur met trop de temps à répondre.")},12e3);
