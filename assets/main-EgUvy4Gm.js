import{s as L,F as Rt,h as yt,j as yi,l as Xe,i as qi,k as Ri,b as Ni}from"./formation-links-CEzN0rcz.js";function ri(e,{navigate:t,toast:o}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!c){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await L.auth.signInWithPassword({email:n,password:c});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!c||!s){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:p}=await L.auth.signUp({email:n,password:c});if(l.textContent="Créer mon compte",l.disabled=!1,p){a.textContent=p.message;return}o("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function Oi(e,{state:t,navigate:o,toast:n,refreshProfile:c}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${s}">
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
            <div class="color-swatch" id="swatch2" style="background:${a};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${a}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var b;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((b=document.getElementById("setup-club"))==null?void 0:b.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();i&&(i.style.background=a,i.style.borderColor=s),r&&(r.textContent=g,r.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{a=i.target.value,document.getElementById("swatch2").style.background=a,l()});function p(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await L.from("users").select("id").eq("pseudo",i).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await L.from("users").select("id").eq("club_name",i).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await L.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(g)throw g;await Pi(t.user.id),await c(),n(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Pi(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"formation",count:1}];try{await L.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(o){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",o)}}const Hi="2026.06.26-2312";async function ai(e,{state:t,navigate:o,toast:n}){var s,a;const c=t.profile;c&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

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
        ${c.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Hi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),o(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>o("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>o("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Ui(o);return}if(p==="match-random"){o("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await L.auth.signOut(),window.location.reload()}))}function Ui(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2000",o.innerHTML=`
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
  `,document.body.appendChild(o);const n=()=>o.remove();document.getElementById("diff-cancel").addEventListener("click",n),o.addEventListener("click",c=>{c.target===o&&n()}),o.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{n(),e("match",{matchMode:c.dataset.mode})})})}const Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function me(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const si=["ATT","MIL","DEF","GK"];function hi(e){let t=0;const o=e.length;for(let n=0;n<o;n++)for(let c=n+1;c<o;c++){const s=e[n],a=e[c];if(!s||!a)continue;const l=s._col!=null&&a._col!=null&&s._col===a._col,p=s._col!=null&&a._col!=null&&Math.abs(s._col-a._col)===1,i=si.indexOf(s._line||s.job),r=si.indexOf(a._line||a.job),u=Math.abs(i-r)===1;if(!((s._line||s.job)===(a._line||a.job)&&p||l&&u))continue;const b=s.country_code&&a.country_code&&s.country_code===a.country_code,d=s.club_id&&a.club_id&&s.club_id===a.club_id;b&&d?t+=2:(b||d)&&(t+=1)}return t}function Nt(e,t={}){const o=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=hi(e);let c=o+n;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:o,links:n,total:Math.max(0,c)}}function Ot(e,t={}){const o=e.reduce((s,a)=>{const l=a._line||a.job;let p=0;return l==="GK"?p=Number(a.note_g)||0:l==="MIL"?p=Number(a.note_m)||0:p=Number(a.note_d)||0,s+p+(a.boost||0)},0),n=hi(e);let c=o+n;return t.stolenNote&&(c-=t.stolenNote),{base:o,links:n,total:Math.max(0,c)}}function Pt(e,t,o={}){return o.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function bi(e,t,o="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const c=[...n].sort((a,l)=>{const p=t==="attack"?me(a,"ATT"):a._line==="GK"?me(a,"GK"):me(a,"DEF");return(t==="attack"?me(l,"ATT"):l._line==="GK"?me(l,"GK"):me(l,"DEF"))-p});let s=o==="easy"?1+Math.floor(Math.random()*2):o==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(s,c.length,3))}function Ki(e,t){const o={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(o[e]||o.vs_ai_easy)[t]||0}const vi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},$t={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ht=["GK","DEF","MIL","ATT"],Vi=["Tous","GK","DEF","MIL","ATT"],Yi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ht={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function wi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function gt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Mt(e,t=""){var u,f;const o=e.player;if(!o)return"";const n=o.job||"ATT",c=$t[n],s=vi[o.rarity]||"#ccc",a=gt(o,n),l=o.job2?gt(o,o.job2):null,p=o.job2?$t[o.job2]:null,i=wi(o),r=Ht[o.country_code]||o.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
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
            fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${l!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${p}" stroke="white" stroke-width="1.5"/>
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
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(u=o.clubs)!=null&&u.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=o.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function li(e){const t=e.job||"ATT",o=gt(e,t),n=Ht[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${n}</div>
      </div>
    </div>
  </div>`}async function Wi(e,t){const{state:o,navigate:n,toast:c,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await L.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:p}=await L.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(M=>M.card_type==="player"&&M.player),r=(l||[]).filter(M=>M.card_type==="game_changer"),u=(l||[]).filter(M=>M.card_type==="formation"),{data:f}=await L.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(f||[]).forEach(M=>{g[M.name]=M});const b=Object.keys(Rt),d=Object.keys(Ce),x={};i.forEach(M=>{const z=M.player.id;x[z]=(x[z]||0)+1}),new Set(Object.keys(x).map(M=>String(M)));const $=new Set(u.map(M=>M.formation)),E=new Set(r.map(M=>M.gc_type));let C="player",G="Tous",T="",v=!1;function F(){return[...i].sort((M,z)=>{const R=ht.indexOf(M.player.job),S=ht.indexOf(z.player.job);return R!==S?R-S:(M.player.surname_encoded||"").localeCompare(z.player.surname_encoded||"")})}function Z(){return[...p||[]].sort((M,z)=>{const R=ht.indexOf(M.job),S=ht.indexOf(z.job);return R!==S?R-S:(M.surname_encoded||"").localeCompare(z.surname_encoded||"")})}function ne(){return F().filter(M=>{const z=M.player,R=G==="Tous"||z.job===G,S=!T||`${z.firstname} ${z.surname_encoded}`.toLowerCase().includes(T);return R&&S})}function ee(){return Z().filter(M=>{const z=G==="Tous"||M.job===G,R=!T||`${M.firstname} ${M.surname_encoded}`.toLowerCase().includes(T);return z&&R})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="gc"?"var(--green)":"transparent"};
        color:${C==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function w(){const M=document.getElementById("col-filters");M&&(C==="player"?(M.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${T}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Vi.map(z=>`
            <button class="filter-btn" data-job="${z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${z===G?"var(--green)":"var(--gray-200)"};
                background:${z===G?"var(--green)":"#fff"};
                color:${z===G?"#fff":"var(--gray-600)"}">
              ${z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${v?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",z=>{T=z.target.value.toLowerCase(),q()}),e.querySelectorAll(".filter-btn").forEach(z=>{z.addEventListener("click",()=>{G=z.dataset.job,w(),q()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,w(),q()})):(M.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${v?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,w(),q()})))}function q(){const M=document.getElementById("col-grid");M&&(C==="player"?ce(M):C==="formation"?se(M):ae(M))}function V(M,z,R,S,N){N=N||"#7a28b8";const ie=document.getElementById("col-grid"),Y=document.getElementById("col-big");if(!ie||!Y)return;var ve=0;function xe(){Y.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+z(M[ve])+"</div>";var ge=Y.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ge&&ge.addEventListener("click",function(){S(M[ve])}),requestAnimationFrame(function(){var fe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!fe||!Y)){var be=Y.clientHeight-8,Ee=Y.clientWidth-24,Le=fe.offsetHeight,Ie=fe.offsetWidth;if(Le>0&&Ie>0&&be>40){var je=Math.min(be/Le,Ee/Ie,1);fe.style.transform="scale("+je.toFixed(3)+")",fe.style.transformOrigin="top center"}}}),ie.innerHTML=M.map(function(fe,be){return'<div class="col-mini-item" data-idx="'+be+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(be===ve?N:"transparent")+';transition:border-color .15s;overflow:hidden">'+R(fe,be===ve)+"</div>"}).join(""),ie.querySelectorAll(".col-mini-item").forEach(function(fe){fe.addEventListener("click",function(){ve=Number(fe.dataset.idx),xe(),fe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}xe()}function h(M){var z=.54,R=Math.round(140*z),S=Math.round(310*z),N;if(!M||M._fake){var ie=M?M.player:null;if(!ie)return"";N=li(ie)}else N=Mt(M,"");return'<div style="width:'+R+"px;height:"+S+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+z+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+N+"</div></div>"}function U(M,z,R){z=z||100,R=R||140;var S=yt[M]||{},N={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ie=Math.max(3,Math.round(z*.06)),Y=Object.entries(S).map(function(xe){var ge=xe[0],fe=xe[1],be=ge.replace(/\d+$/,""),Ee=N[be]||"#888",Le=Math.round(fe.x*z),Ie=Math.round(fe.y*R);return'<circle cx="'+Le+'" cy="'+Ie+'" r="'+ie+'" fill="'+Ee+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(z/50));return'<svg viewBox="0 0 '+z+" "+R+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+z+'" height="'+R+'" fill="#1A6B3C"/><rect x="'+Math.round(z*.2)+'" y="'+Math.round(R*.02)+'" width="'+Math.round(z*.6)+'" height="'+Math.round(R*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(R*.5)+'" x2="'+z+'" y2="'+Math.round(R*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(z*.5)+'" cy="'+Math.round(R*.5)+'" rx="'+Math.round(z*.18)+'" ry="'+Math.round(R*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(z*.2)+'" y="'+Math.round(R*.82)+'" width="'+Math.round(z*.6)+'" height="'+Math.round(R*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+Y+"</svg>"}function W(M,z,R){var S=R>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+R+"</div>":"",N=z?'data-form-id="'+z.id+'"':"",ie=M.length>7?14:M.length>5?16:19,Y=!!z;return"<div "+N+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(Y?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(Y?"":"filter:grayscale(1);opacity:0.5")+'">'+S+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(Y?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ie+"px;font-weight:900;color:"+(Y?"#1A6B3C":"#aaa")+';line-height:1">'+M+'</div></div><div style="flex:1;overflow:hidden;background:'+(Y?"#1A6B3C":"#ccc")+'">'+U(M,140,220)+"</div></div>"}function re(M,z){var R=.54,S=Math.round(140*R),N=Math.round(305*R),ie=Math.round(N*.22),Y=N-ie,ve=M.length>7?5:7,xe=U(M,S,Y),ge=z?"1.5px solid #2a7a40":"1px solid #ddd",fe=z?"":"filter:grayscale(1);opacity:0.45;",be=z?"#1A6B3C":"#bbb",Ee="#fff";return'<div style="width:'+S+"px;height:"+N+"px;border-radius:6px;border:"+ge+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+fe+'"><div style="height:'+ie+"px;background:"+be+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+Ee+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(S-4)+'px">'+M+'</span></div><div style="height:'+Y+'px;overflow:hidden;flex-shrink:0">'+xe+"</div></div>"}function ce(M){if(v){const z=ee();if(!z.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const R=z.map(S=>i.find(N=>N.player.id===S.id)||{_fake:!0,player:S,id:"fake-"+S.id});V(R,S=>S._fake?li(S.player):Mt(S,""),S=>S._fake?h({player:S.player,id:"x",_fake:!0}):h(S),S=>{S._fake||di(S,i,x,t)},"#1A6B3C")}else{const z=ne();if(!z.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const R={},S=[];z.forEach(N=>{R[N.player.id]||(R[N.player.id]=!0,S.push(N))}),V(S,N=>{const ie=x[N.player.id]||1,Y=ie>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ie}</div>`:"",xe=i.filter(ge=>ge.player.id===N.player.id&&ge.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Mt(N,Y+xe)},N=>h(N),N=>di(N,i,x,t),"#1A6B3C")}}function se(M){const z=v?b:[...$];if(!z.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const R=z.map(S=>({formation:S,card:u.find(N=>N.formation===S)||null,owned:$.has(S)}));V(R,({formation:S,card:N,owned:ie})=>W(S,ie?N:null,ie?u.filter(Y=>Y.formation===S).length:0),({formation:S,owned:N})=>re(S,N),({card:S,owned:N})=>{N&&S&&Ji(S,u,t,s)},"#1A6B3C")}function ae(M){const z=Object.keys(g),R=v?z.length?z:d:[...E];if(!R.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const S=R.map(N=>({type:N,gc:Ce[N]||{icon:"⚡",desc:""},def:g[N]||null,owned:E.has(N),card:r.find(ie=>ie.gc_type===N)||null}));V(S,({type:N,gc:ie,def:Y,owned:ve,card:xe})=>{const ge=ve?r.filter(A=>A.gc_type===N).length:0,fe=ge>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ge}</div>`:"",be=(Y==null?void 0:Y.gc_type)==="ultra_game_changer",Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#b06ce0",light_blue:"#00d4ef"},Ie=Ee[Y==null?void 0:Y.color]||Ee.purple,je=Le[Y==null?void 0:Y.color]||Le.purple,m=(Y==null?void 0:Y.effect)||ie.desc||"",y=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null;return ve&&xe?`<div data-gc-id="${xe.id}" data-gc-type="${N}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${je};background:${Ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${je}66;cursor:pointer">
          ${fe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${N.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${N}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${be?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${y?`<img src="${y}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ie.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${m.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${N}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ie.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:N,gc:ie,def:Y,owned:ve})=>ve?(()=>{const xe=Math.round(75.60000000000001),ge=Math.round(310*.54),fe=Math.round(ge*.65),be=Math.round(ge*.18),Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#9b59b6",light_blue:"#00bcd4"},Ie=Ee[Y==null?void 0:Y.color]||Ee.purple,je=Le[Y==null?void 0:Y.color]||Le.purple,m=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null;return`<div style="width:${xe}px;height:${ge}px;border-radius:8px;background:${Ie};border:1px solid ${je};display:flex;flex-direction:column;overflow:hidden"><div style="height:${be}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${xe-6}px">${N}</span></div><div style="height:${fe}px;display:flex;align-items:center;justify-content:center">${m?`<img src="${m}" style="max-width:${xe-8}px;max-height:${fe-4}px;object-fit:contain">`:`<span style="font-size:24px">${ie.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((Y==null?void 0:Y.effect)||ie.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const xe=Math.round(75.60000000000001),ge=Math.round(310*.54);return`<div style="width:${xe}px;height:${ge}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ie.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${N}</span></div>`})(),({type:N,owned:ie,def:Y})=>{ie&&Xi(N,Y,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(M=>{M.addEventListener("click",()=>{C=M.dataset.tab,G="Tous",T="",v=!1,e.querySelectorAll(".col-tab-btn").forEach(z=>{const R=z.dataset.tab===C;z.style.borderBottomColor=R?"var(--green)":"transparent",z.style.color=R?"var(--green)":"var(--gray-600)"}),w(),q()})}),w(),q()}function Xi(e,t,o){const n=Ce[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,p=a[t==null?void 0:t.color]||a.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;o("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const dt=1e3;function Ji(e,t,o,n){var d,x,$;const{state:c,toast:s,closeModal:a,navigate:l,refreshProfile:p}=o,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const E=yt[i]||{},C=Rt[i]||[],G=290,T=360,v=20;function F(ne){const ee=E[ne];return ee?{x:ee.x*G,y:ee.y*T}:null}let Z=`<svg width="${G}" height="${T}" viewBox="0 0 ${G} ${T}" xmlns="http://www.w3.org/2000/svg">`;for(const[ne,ee]of C){const w=F(ne),q=F(ee);!w||!q||(Z+=`<line x1="${w.x}" y1="${w.y}" x2="${q.x}" y2="${q.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ne of Object.keys(E)){const ee=F(ne);if(!ee)continue;const w=ne.replace(/\d+/,""),q=r[w]||"#555";Z+=`<circle cx="${ee.x}" cy="${ee.y}" r="${v}" fill="${q}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,Z+=`<text x="${ee.x}" y="${ee.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${w}</text>`}return Z+="</svg>",Z}const f=t.filter(E=>E.formation===i),g=f.length,b=!e.is_for_sale;n(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe carte Formation</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${dt.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${b?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${dt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(d=document.getElementById("direct-sell-form-btn"))==null||d.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${dt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const E=f.find(G=>!G.is_for_sale)||f[0];if(!E){s("Aucune carte à vendre","error");return}const{error:C}=await L.from("cards").delete().eq("id",E.id);if(C){s(C.message,"error");return}await L.from("users").update({credits:(c.profile.credits||0)+dt}).eq("id",c.profile.id),await p(),s(`+${dt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(x=document.getElementById("market-sell-form-btn"))==null||x.addEventListener("click",async()=>{const E=parseInt(document.getElementById("sell-price-form").value);if(!E||E<1){s("Prix invalide","error");return}await L.from("cards").update({is_for_sale:!0,sale_price:E}).eq("id",e.id),await L.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:E}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),($=document.getElementById("cancel-sell-form-btn"))==null||$.addEventListener("click",async()=>{await L.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await L.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function di(e,t,o,n){var Z,ne,ee,w,q,V;const{state:c,toast:s,openModal:a,closeModal:l,navigate:p,refreshProfile:i}=n,r=e.player,u=t.filter(h=>h.player.id===r.id),f=u.length,g=Yi[r.rarity]||1e3,b=r.rarity!=="legende",d=wi(r),x=gt(r,r.job),$=r.job2?gt(r,r.job2):null,E=$t[r.job]||"#1A6B3C",C=r.job2?$t[r.job2]:null,G=vi[r.rarity]||"#ccc",T=Ht[r.country_code]||r.country_code||"",{data:v}=await L.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),F=v&&v.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${v.map(h=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${h.club_name} <span style="color:var(--gray-600)">(${h.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${h.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${h.source==="booster"?"Booster":h.price?h.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${G};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${E}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${E}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${x}</text>
            </svg>
            ${$!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${C}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${$}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${T}</div>
            ${(Z=r.clubs)!=null&&Z.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((ne=r.clubs)==null?void 0:ne.encoded_name)||"").slice(0,6)}</div>`}
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
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${r.note_g||0}</b></span>
            <span>DEF <b>${r.note_d||0}</b></span>
            <span>MIL <b>${r.note_m||0}</b></span>
            <span>ATT <b>${r.note_a||0}</b></span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${F}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${g.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${b&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ee=document.getElementById("close-detail"))==null||ee.addEventListener("click",l),(w=document.getElementById("direct-sell-btn"))==null||w.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const h=u.find(W=>!W.is_for_sale)||u[0];if(!h){s("Aucune carte à vendre","error");return}const{error:U}=await L.from("cards").delete().eq("id",h.id);if(U){s(U.message,"error");return}await L.from("users").update({credits:(c.profile.credits||0)+g}).eq("id",c.profile.id),await i(),s(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),p("collection")}),(q=document.getElementById("market-sell-btn"))==null||q.addEventListener("click",async()=>{const h=parseInt(document.getElementById("sell-price").value);if(!h||h<1){s("Prix invalide","error");return}await L.from("cards").update({is_for_sale:!0,sale_price:h}).eq("id",e.id),await L.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:h}),s("Carte mise en vente sur le marché !","success"),l(),p("collection")}),(V=document.getElementById("cancel-sell-btn"))==null||V.addEventListener("click",async()=>{await L.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await L.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),p("collection")})}const _t={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ye={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function $i(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _i(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(o=e==null?void 0:e.clubs)!=null&&o.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Qi(e,t=44,o=58){var g;const n=e?Tt(e):null,c=e?_i(e):null,s=$i(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=Ye[a]||"#555",p={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(o*.19),u=Math.round(o*.25),f=o-r-u;return e?`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${o}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Ct(e,t){const{state:o,navigate:n,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await L.from("decks").select("id,name,formation_card_id").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(s==null?void 0:s.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(s==null?void 0:s.length)>0?s.map(a=>`
          <div class="card-panel" data-open-deck="${a.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${a.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${a.id}" data-name="${a.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${a.id}" data-name="${a.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:p}=await L.from("decks").insert({owner_id:o.profile.id,name:a}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),ci(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>ci(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:p}=await L.from("decks").update({name:l}).eq("id",a.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),Ct(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await L.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await L.from("decks").delete().eq("id",a.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),Ct(e,t)})})}async function ci(e,t,o){const{state:n,toast:c}=o;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await L.from("decks").select("*").eq("id",e).single(),{data:a}=await L.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(g=>g.card_type==="player"&&g.player),p=(a||[]).filter(g=>g.card_type==="formation"),i=p.map(g=>g.formation).filter(Boolean),{data:r}=await L.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";i.length>0&&!i.includes(u)&&(u=i[0]);const f={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:p,availableFormations:i};(r||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),ot(t,f,o)}function ot(e,t,o){var p;const{navigate:n}=o;_t[t.formation];const c=pi(t.formation),s=c.filter(i=>t.slots[i]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(_t),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(i=>`<option value="${i}" ${i===t.formation?"selected":""}>${i}</option>`).join("")}
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
            ${Qi(r,44,58)}
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
  </div>`,Zi(e,t,c,o),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=pi(t.formation),u={};r.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,ot(e,t,o)}),document.getElementById("save-deck").addEventListener("click",()=>io(t,o)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),ot(e,t,o)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{to(t,e,o)})}function Zi(e,t,o,n){const c=e.querySelector("#deck-field");if(!c)return;const s=yt[t.formation]||{},a=yi(t.formation)||[],l={};for(const $ of o){const E=t.slots[$],C=E?t.playerCards.find(G=>G.id===E):null;l[$]=C?C.player:null}const p=300,i=300,r=48,u=64,f=13,g=16,b=38;function d($){const E=s[$];return E?{x:E.x*p,y:E.y*i}:null}let x="";for(const[$,E]of a){const C=d($),G=d(E);if(!C||!G)continue;const T=l[$]?{...l[$],club_id:l[$].club_id,country_code:l[$].country_code,rarity:l[$].rarity}:null,v=l[E]?{...l[E],club_id:l[E].club_id,country_code:l[E].country_code,rarity:l[E].rarity}:null,F=Xe(T,v);F==="#ff3333"||F==="#cc2222"?x+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(x+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}" stroke="${F}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,x+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const $ of o){const E=d($);if(!E)continue;const C=l[$],G=$.replace(/\d+/,""),T=Ye[G]||"#555",v=(E.x-r/2).toFixed(1),F=(E.y-u/2).toFixed(1),Z={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[C==null?void 0:C.rarity]||"#aaa";if(C){const ne=Tt(C),ee=_i(C),w=$i(C.country_code),q=Number(G==="GK"?C.note_g:G==="DEF"?C.note_d:G==="MIL"?C.note_m:C.note_a)||0,V=u-f-g;x+=`<defs><clipPath id="dcp-${$}"><rect x="${v}" y="${(E.y-u/2+f).toFixed(1)}" width="${r}" height="${V}"/></clipPath></defs>`,x+=`<rect x="${v}" y="${F}" width="${r}" height="${u}" rx="5" fill="${T}"/>`,ne&&(x+=`<image href="${ne}" x="${v}" y="${(E.y-u/2+f).toFixed(1)}" width="${r}" height="${V}" clip-path="url(#dcp-${$})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${v}" y="${F}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,x+=`<text x="${E.x.toFixed(1)}" y="${(E.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.surname_encoded||"").slice(0,9)}</text>`;const h=(E.y+u/2-g).toFixed(1);x+=`<rect x="${v}" y="${h}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,w&&(x+=`<image href="${w}" x="${(E.x-21).toFixed(1)}" y="${(E.y+u/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),x+=`<text x="${E.x.toFixed(1)}" y="${(E.y+u/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${q}</text>`,ee&&(x+=`<image href="${ee}" x="${(E.x+r/2-14).toFixed(1)}" y="${(E.y+u/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),x+=`<rect x="${v}" y="${F}" width="${r}" height="${u}" rx="5" fill="none" stroke="${Z}" stroke-width="2"/>`}else x+=`<rect x="${v}" y="${F}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,x+=`<text x="${E.x.toFixed(1)}" y="${E.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,x+=`<text x="${E.x.toFixed(1)}" y="${(E.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${G}</text>`;x+=`<rect x="${v}" y="${F}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${$}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-b} ${-b} ${p+b*2} ${i+b*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${x}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach($=>{$.addEventListener("click",()=>eo($.dataset.pos,t,e,n))})}function eo(e,t,o,n){var f,g,b;const{openModal:c,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(d=>d.id===l):null;(f=p==null?void 0:p.player)==null||f.id;const i=new Set;Object.entries(t.slots).forEach(([d,x])=>{var E;if(d===e||!x)return;const $=t.playerCards.find(C=>C.id===x);(E=$==null?void 0:$.player)!=null&&E.id&&i.add($.player.id)}),t.subs.forEach(d=>{var $;const x=t.playerCards.find(E=>E.id===d);($=x==null?void 0:x.player)!=null&&$.id&&i.add(x.player.id)});const r=new Set,u=t.playerCards.filter(d=>{const x=d.player;return!(x.job===a||x.job2===a)||i.has(x.id)||r.has(x.id)?!1:(r.add(x.id),!0)});u.sort((d,x)=>{const $=a==="GK"?d.player.note_g:a==="DEF"?d.player.note_d:a==="MIL"?d.player.note_m:d.player.note_a;return(a==="GK"?x.player.note_g:a==="DEF"?x.player.note_d:a==="MIL"?x.player.note_m:x.player.note_a)-$}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(d=>{var G,T;const x=d.player,$=a==="GK"?x.note_g:a==="DEF"?x.note_d:a==="MIL"?x.note_m:x.note_a,E=Tt(x),C={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[x.rarity];return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Ye[a]}">
            ${E?`<img src="${E}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Ye[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${x.firstname} ${x.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${x.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${x.country_code}">
              ${(G=x.clubs)!=null&&G.logo_url?`<img src="${x.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((T=x.clubs)==null?void 0:T.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${x.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Ye[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${C};flex-shrink:0">
            ${$}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",s),(b=document.getElementById("remove-player"))==null||b.addEventListener("click",()=>{delete t.slots[e],s(),ot(o,t,n)}),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{t.slots[e]=d.dataset.cardId,s(),ot(o,t,n)})})}function to(e,t,o){var p;const{openModal:n,closeModal:c}=o,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var u;const r=e.playerCards.find(f=>f.id===i);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)}),e.subs.forEach(i=>{var u;const r=e.playerCards.find(f=>f.id===i);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(i=>{var r,u,f;return s.has((r=i.player)==null?void 0:r.id)||a.has((u=i.player)==null?void 0:u.id)?!1:(a.add((f=i.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var g;const r=i.player,u=Tt(r),f=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Ye[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((g=r.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Ye[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),ot(t,e,o)})})}async function io(e,t){const{state:o,toast:n,navigate:c}=t,s=e.formationCards.find(p=>p.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await L.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await L.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:r})}),e.subs.forEach((p,i)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:p}=await L.from("deck_cards").insert(l);if(p){n(p.message,"error");return}}n("Deck enregistré ✅","success"),c("decks")}function pi(e){const t=_t[e]||_t["4-4-2"],o=["GK1"];for(let n=1;n<=t.DEF;n++)o.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)o.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)o.push(`ATT${n}`);return o}async function oo(){const{data:e}=await L.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await L.from("booster_drop_rates").select("*").in("booster_id",e.map(o=>o.id)).order("sort_order");return e.map(o=>({...o,rates:(t||[]).filter(n=>n.booster_id===o.id)}))}function no(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,c)=>n+Number(c.percentage),0);let o=Math.random()*t;for(const n of e)if(o-=Number(n.percentage),o<=0)return n;return e[e.length-1]}const ki=()=>Object.keys(yt),ro=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],jt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ao(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}const ui={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},so={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},lo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function fi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function co(e){var r,u;const t=e.player;if(!t)return"";const o=t.job||"ATT",n=ui[o],c=so[t.rarity]||"#ccc",s=fi(t,o),a=t.job2?fi(t,t.job2):null,l=t.job2?ui[t.job2]:null,p=ao(t),i=lo[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${n}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${n}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        ${a!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function po(e){var c;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const o=((c=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:c[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:o,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function uo(e,{state:t,navigate:o,toast:n}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await oo()).map(po)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=ro.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(l=>{const p=l.cost===0||c>=l.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${l.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=s.find(i=>i.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await fo(p,{state:t,toast:n,navigate:o,container:e})}catch(i){n(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const i=s.find(r=>r.id===l.dataset.boosterId);ho(i)})})}async function fo(e,{state:t,toast:o,navigate:n,container:c}){var r;if(e.cost>0&&t.profile.credits<e.cost){o("Crédits insuffisants","error");return}if(e.isPub)try{await wo()}catch(u){o(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await L.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let p=[];if((r=e.rates)!=null&&r.length)p=await gi(t.profile,e);else{const u=e.type||"player";u==="player"?p=await Ei(t.profile,e.cardCount,e.cost):u==="game_changer"?p=await xo(t.profile,e.cardCount,e.cost):u==="formation"?p=await Ai(t.profile,e.cost):p=await gi(t.profile,e)}p.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:i}=await L.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Ti(p,e,n)}function go(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function mo(e,t){let o;switch(t){case"legende":o=e.filter(n=>n.rarity==="legende"),o.length||(o=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),o.length||(o=e.filter(n=>Ze(n)>=6));break;case"special":o=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),o.length||(o=e.filter(n=>Ze(n)>=6));break;case"normal_high":o=e.filter(n=>n.rarity==="normal"&&Ze(n)>=6),o.length||(o=e.filter(n=>Ze(n)>=6));break;default:o=e.filter(n=>n.rarity==="normal"&&Ze(n)>=1&&Ze(n)<=5),o.length||(o=e.filter(n=>n.rarity==="normal"));break}return o.length||(o=e),o[Math.floor(Math.random()*o.length)]}async function gi(e,t){if(t.cost>0){const{error:n}=await L.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const o=[];for(let n=0;n<(t.cardCount||5);n++){const c=no(t.rates);if(c){if(c.card_type==="player"){const s=f=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[f]||f,a=c.rarity?s(c.rarity):null;let l=L.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:p}=await l;let i=p||[];if((c.note_min||c.note_max)&&(i=i.filter(f=>{const g=Math.max(Number(f.note_g)||0,Number(f.note_d)||0,Number(f.note_m)||0,Number(f.note_a)||0);return(!c.note_min||g>=c.note_min)&&(!c.note_max||g<=c.note_max)})),i.length||(c.note_min||c.note_max?(i=p||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):i=p||[]),!i.length)continue;const r=i[Math.floor(Math.random()*i.length)],{data:u}=await L.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(o.push({...u,player:r}),L.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:s}=await L.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],p=a[Math.floor(Math.random()*a.length)].name,{data:i}=await L.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:p}).select().single();i&&o.push(i)}else if(c.card_type==="formation"){const s=ki(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await L.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&o.push(l[0])}}}return o}async function Ei(e,t,o){if(o>0){const{error:i}=await L.from("users").update({credits:e.credits-o}).eq("id",e.id);if(i)throw i}const{data:n}=await L.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=n.filter(i=>i.job==="GK"),s=n.filter(i=>i.job!=="GK"),a=!e.first_booster_opened&&c.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&a?c:i===0?s:n,u=go(),f=mo(r,u);f&&l.push(f)}a&&await L.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await L.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,r)=>{L.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...p[r],player:i}))}async function xo(e,t,o){const{error:n}=await L.from("users").update({credits:e.credits-o}).eq("id",e.id);if(n)throw n;const{data:c}=await L.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=c!=null&&c.length?c:Object.keys(jt).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:p}=await L.from("cards").insert(a).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(r=>{const u=c==null?void 0:c.find(f=>f.name===r.gc_type||f.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Ai(e,t){const{error:o}=await L.from("users").update({credits:e.credits-t}).eq("id",e.id);if(o)throw o;const n=ki(),c=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await L.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function Ti(e,t,o,n=null){var q,V;if(!e||e.length===0){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",h.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(h),(q=h.querySelector("#anim-close-err"))==null||q.addEventListener("click",()=>h.remove());return}const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
      <div id="card-viewport" style="position:relative;width:100%;max-width:300px;height:340px;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none">
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
  `,document.body.appendChild(c);let s=!1;const a=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const i=h=>h.touches&&h.touches[0]?h.touches[0].clientX:h.clientX;function r(h){s||(p=!0,l.style.opacity="1",u(h))}function u(h){if(!p||s)return;const U=a.getBoundingClientRect(),W=i(h)-U.left,re=Math.max(0,Math.min(1,W/U.width));l.style.width=re*U.width+"px",re>=.82&&g()}function f(){s||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function g(){var U;if(s)return;s=!0,p=!1,l.style.width="100%",l.style.opacity="1",(U=document.getElementById("cut-flash"))==null||U.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const h=document.getElementById("cut-hint");h&&(h.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",$(0)},620)}a.addEventListener("pointerdown",r),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),a.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let b=0,d=!1;const x=new Set;function $(h){b=h,document.getElementById("reveal-phase").style.display="flex",E(),C(h,0),Z()}function E(){const h=document.getElementById("card-dots");h&&(h.innerHTML=e.map((U,W)=>`<div class="card-dot" data-i="${W}" style="width:8px;height:8px;border-radius:50%;background:${W===b?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),h.querySelectorAll(".card-dot").forEach(U=>U.addEventListener("click",()=>T(parseInt(U.dataset.i)))))}function C(h,U){var R;const W=e[h],re=document.getElementById("card-counter"),ce=document.getElementById("card-track");re&&(re.textContent=`Carte ${h+1} / ${e.length}`);const se=W.card_type==="player"&&((R=W.player)==null?void 0:R.rarity)==="legende",ae=!x.has(h);x.add(h);let M=0;if(W.card_type==="player"&&W.player){const S=W.player,N=S.job||"ATT";M=Number(N==="GK"?S.note_g:N==="DEF"?S.note_d:N==="MIL"?S.note_m:S.note_a)||0}const z=S=>{ce.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${se?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${yo(W)}</div>
          ${W.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const N=document.getElementById("current-card-wrap");U!==0?(N.style.transition="none",N.style.transform=`translateX(${U>0?100:-100}%)`,requestAnimationFrame(()=>{N.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",N.style.transform="translateX(0)"})):N.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),S||se?ee():w(),E()};ae&&M>6&&W.card_type==="player"&&W.player?G(W,()=>z(!0)):z(!1)}function G(h,U){var z;d=!0;const W=h.player,re=`https://flagsapi.com/${W.country_code}/flat/64.png`,ce=(z=W.clubs)==null?void 0:z.logo_url,se=document.getElementById("walkout-overlay"),ae=document.getElementById("walkout-stage");if(!se||!ae){d=!1,U();return}se.style.display="flex";const M=()=>{const R=ae.firstElementChild;R&&(R.classList.remove("wo-in"),R.classList.add("wo-out"))};ae.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(M,2e3),setTimeout(()=>{var R;ae.innerHTML=ce?`<img class="wo-in" src="${ce}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((R=W.clubs)==null?void 0:R.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(M,4450),setTimeout(()=>{se.style.display="none",ae.innerHTML="",d=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),U()},4900)}function T(h){if(d||h<0||h>=e.length||h===b)return;const U=h>b?1:-1;b=h,C(h,U)}function v(){T(b+1)}function F(){T(b-1)}function Z(){const h=document.getElementById("card-viewport");if(!h||h._swipeBound)return;h._swipeBound=!0;let U=0,W=0,re=0,ce=!1;const se=S=>S.touches?S.touches[0].clientX:S.clientX,ae=S=>S.touches?S.touches[0].clientY:S.clientY,M=S=>{ce=!0,U=se(S),W=ae(S),re=0},z=S=>{if(!ce)return;re=se(S)-U;const N=ae(S)-W;if(Math.abs(re)<Math.abs(N))return;const ie=document.getElementById("current-card-wrap");ie&&(ie.style.transition="none",ie.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},R=()=>{if(!ce)return;ce=!1;const S=document.getElementById("current-card-wrap"),N=55;re<=-N&&b<e.length-1?v():re>=N&&b>0?F():S&&(S.style.transition="transform .2s ease",S.style.transform="translateX(0)")};h.addEventListener("pointerdown",M),h.addEventListener("pointermove",z),h.addEventListener("pointerup",R),h.addEventListener("pointercancel",R),h.addEventListener("touchstart",M,{passive:!0}),h.addEventListener("touchmove",z,{passive:!0}),h.addEventListener("touchend",R),h.addEventListener("click",S=>{if(Math.abs(re)>8)return;const N=h.getBoundingClientRect();S.clientX-N.left>N.width/2?v():F()})}let ne=null;function ee(){const h=document.getElementById("fireworks-canvas");if(!h)return;h.width=window.innerWidth,h.height=window.innerHeight;const U=h.getContext("2d"),W=[];function re(){const se=Math.random()*h.width,ae=Math.random()*h.height*.6,M=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],z=M[Math.floor(Math.random()*M.length)];for(let R=0;R<60;R++){const S=Math.PI*2/60*R,N=2+Math.random()*5;W.push({x:se,y:ae,vx:Math.cos(S)*N,vy:Math.sin(S)*N,alpha:1,color:z,size:2+Math.random()*3})}}re(),ne=setInterval(re,600);function ce(){if(document.getElementById("fireworks-canvas")){U.clearRect(0,0,h.width,h.height);for(let se=W.length-1;se>=0;se--){const ae=W[se];if(ae.x+=ae.vx,ae.y+=ae.vy+.08,ae.vy*=.98,ae.alpha-=.018,ae.alpha<=0){W.splice(se,1);continue}U.globalAlpha=ae.alpha,U.fillStyle=ae.color,U.beginPath(),U.arc(ae.x,ae.y,ae.size,0,Math.PI*2),U.fill()}U.globalAlpha=1,(ne!==null||W.length>0)&&requestAnimationFrame(ce)}}ce()}function w(){ne!==null&&(clearInterval(ne),ne=null);const h=document.getElementById("fireworks-canvas");h&&h.getContext("2d").clearRect(0,0,h.width,h.height)}if(n){const h=document.getElementById("reveal-phase"),U=h==null?void 0:h.querySelector('div[style*="display:flex"][style*="gap:10px"]');U&&(U.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(V=document.getElementById("reveal-next"))==null||V.addEventListener("click",()=>{w(),c.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{w(),c.remove(),o("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{w(),c.remove(),o("boosters")})}function yo(e){var t,o;if(e.card_type==="player"&&e.player)return co(e);if(e.card_type==="game_changer"){const n=e._gcDef,c=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,p=a[n==null?void 0:n.color]||a.purple,i=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=jt[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=((o=jt[e.gc_type])==null?void 0:o.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${f}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ho(e){var t,o;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(o=document.getElementById("odds-close"))==null||o.addEventListener("click",()=>n.remove());return}bo()}function bo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const vo="simulation",Ii="VOTRE_ZONE_ID";function wo(){switch(vo){case"propellerads":return $o();case"adsense":return _o();default:return Ut()}}function Ut(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let o=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{o--;const c=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");c&&(c.textContent=o),s&&(s.textContent=o>0?`Passer (${o})`:"✓ Continuer"),o<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function $o(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ut());window.propeller.push({zone_id:Ii,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function _o(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ut());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Ii,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(o){t(o)}})}async function ko(e,{state:t,navigate:o,toast:n,refreshProfile:c}){var u,f;const{data:s}=await L.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let a=Array.isArray((u=t.profile)==null?void 0:u.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await L.from("users").update({onboarding_done:!0}).eq("id",t.user.id),o("home");return}const l=a.length;let p=0;e.innerHTML=`
  <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
    <div style="max-width:420px;text-align:center;color:#fff">
      <div style="font-size:56px;margin-bottom:10px">🎁</div>
      <h2 style="font-size:24px;font-weight:900;margin-bottom:8px">Bienvenue ${t.profile.pseudo} !</h2>
      <p style="font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;margin-bottom:8px">
        Pour démarrer ton aventure, voici tes cadeaux :
      </p>
      <div style="font-size:14px;color:#FFD700;font-weight:700;line-height:1.8;margin-bottom:24px">
        ⚽ 4 boosters de 5 joueurs<br>
        📋 1 booster Formation
      </div>
      <p style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:24px">
        Ouvre-les un par un pour découvrir tes cartes !
      </p>
      <button class="btn btn-primary" id="onboard-start" style="width:100%;font-size:16px;padding:14px">
        Ouvrir mon 1er booster 🎉
      </button>
    </div>
  </div>`;const i=async()=>{await L.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function r(){if(p>=l||!a.length){await L.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),o("home");return}const g=a[0],{data:b}=await L.from("users").select("*").eq("id",t.user.id).single();b&&(t.profile=b);let d=[];try{g.type==="formation"?d=await Ai(t.profile,0):d=await Ei(t.profile,g.count||5,0)}catch($){n($.message||"Erreur ouverture booster","error");return}a.shift(),p++,await i();const x=g.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:{name:`Booster Joueurs (${p}/${l})`,img:"/manager-wars/icons/booster-players.png"};Ti(d,x,o,()=>{r()})}(f=document.getElementById("onboard-start"))==null||f.addEventListener("click",()=>r())}const nt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function We(e,t,o,n,c){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${o}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",c)}function Te(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Bt(e,t){var n,c;const o=e.player;return{cardId:e.id,position:t||null,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((n=o.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((c=o.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function at(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Li(){const e=Math.random()*100;return e<10?3:e<30?2:1}function kt(e,t){const o=nt[t]||nt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===a).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:a})),p=at(l.length);l.forEach((i,r)=>{i._col=p[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<o[a];i++){let r=s.findIndex(u=>u.job===a);if(r===-1&&(r=s.findIndex(u=>u.job2===a)),r===-1&&(r=0),s[r]){const u={...s[r],_line:a};l.push(u),s.splice(r,1)}}const p=at(l.length);l.forEach((i,r)=>{i._col=p[r]}),n[a]=l}return n}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Re(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Mi(e,t,o){const c=new Set,s=t.filter(r=>{const u=r.gc_type||r.id;return c.has(u)?!1:(c.add(u),!0)});let a=[];function l(r,u){const f=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},b={purple:"#9b59b6",light_blue:"#00bcd4"},d=g[f==null?void 0:f.color]||g.purple,x=b[f==null?void 0:f.color]||b.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${d};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",o(r)};function i(){var u,f,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${a.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${s.map(b=>{const d=a.find(x=>x.gc_type===b.gc_type);return l(b,!!d)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${r?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${r?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${r?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${r?"pointer":"default"};box-shadow:${r?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${a.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${a.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${a.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${a.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(b=>{b.addEventListener("click",()=>{const d=b.dataset.id,x=s.find(E=>E.id===d);if(!x)return;const $=a.findIndex(E=>E.gc_type===x.gc_type);$>-1?a.splice($,1):a.length<3&&a.push(x),i()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&p(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>p([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],i())})}i()}async function Eo(e,t,o){const{state:n,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await L.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){We(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=s.map(r=>r.id),{data:l}=await L.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let p=0;function i(){var E,C,G,T,v;const r=s[p],u=(l||[]).filter(F=>F.deck_id===r.id),f=u.filter(F=>{var Z;return F.is_starter&&((Z=F.card)==null?void 0:Z.player)}).map(F=>Bt(F.card,F.position)),g=u.find(F=>{var Z;return((Z=F.card)==null?void 0:Z.card_type)==="formation"}),b=r.formation||((E=g==null?void 0:g.card)==null?void 0:E.formation)||"4-4-2",d=f.length>=11?kt(f,b):null,x=f.length>=11;Ve(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${b} · ${f.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===s.length-1?"0.1":"0.3"});color:${p===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${d?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${xt(d,b,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((F,Z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Z===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${x?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${x?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${x?"pointer":"default"}">
          ${x?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Z=e.querySelector(".deck-preview-wrap svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(C=document.getElementById("prev-deck"))==null||C.addEventListener("click",()=>{p>0&&(p--,i())}),(G=document.getElementById("next-deck"))==null||G.addEventListener("click",()=>{p<s.length-1&&(p++,i())}),(T=document.getElementById("validate-deck"))==null||T.addEventListener("click",()=>{x&&t.navigate("match",{matchMode:o,deckId:r.id})}),(v=document.getElementById("cancel-deck-select"))==null||v.addEventListener("click",()=>{Re(e),c("home")});const $=document.getElementById("deck-swipe-zone");if($){let F=0,Z=0;$.addEventListener("touchstart",ne=>{F=ne.touches[0].clientX,Z=ne.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",ne=>{const ee=ne.changedTouches[0].clientX-F,w=ne.changedTouches[0].clientY-Z;Math.abs(ee)<40||Math.abs(ee)<Math.abs(w)||(ee<0&&p<s.length-1?(p++,i()):ee>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function zi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Be(e,t=44,o=58){if(!e)return`<div style="width:${t}px;height:${o}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Te(e),c=zi(e),s=e._line||e.job||"MIL",a=rt[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(me(e,s))||0)+(e.boost||0),i=Si(e==null?void 0:e.country_code),r=Math.round(o*.19),u=Math.round(o*.25),f=o-Math.round(o*.19)-Math.round(o*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ft(e==null?void 0:e.country_code)?`<img src="${Ft(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${i}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,o){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(c+=Be(s,40,52),a<n.length-1){const l=Xe(s,n[a+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),o!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${o}</div>`),c+="</div>",c}function Ft(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Si(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function mt(e,t,o,n,c=310,s=310,a=[]){var C;const l=yt[t]||{},p=yi(t)||Rt[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const G of r)(e[G]||[]).forEach((v,F)=>{i[`${G}${F+1}`]=v});function u(G){const T=l[G];return T?{x:T.x*c,y:T.y*s}:null}let f="";for(const[G,T]of p){const v=u(G),F=u(T);if(!v||!F)continue;const Z=i[G],ne=i[T],ee=Xe(Z,ne);ee==="#00ff88"||ee==="#FFD700"?(f+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${ee}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${ee}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${ee}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,b=64,d=13,x=16,$={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[G,T]of Object.entries(i)){const v=u(G);if(!v||!T)continue;const F=G.replace(/[0-9]/g,""),Z=rt[F]||"#555",ne=a.includes(T.cardId),ee=o==="attack"&&(["MIL","ATT"].includes(F)||ne)&&!T.used||o==="defense"&&["GK","DEF","MIL"].includes(F)&&!T.used,w=n.includes(T.cardId);let q;o==="attack"?q=ne?Math.max(1,Number(T.note_a)||0):F==="MIL"?Number(T.note_m)||0:Number(T.note_a)||0:o==="defense"?q=F==="GK"?Number(T.note_g)||0:F==="MIL"?Number(T.note_m)||0:Number(T.note_d)||0:q=Number(F==="GK"?T.note_g:F==="DEF"?T.note_d:F==="MIL"?T.note_m:T.note_a)||0,q=q+(T.boost||0);const V=(v.x-g/2).toFixed(1),h=(v.y-b/2).toFixed(1),U=$[T==null?void 0:T.rarity]||$.normal;if(T.used){const z=typeof import.meta<"u"&&"/manager-wars/"||"/",S=`${typeof window<"u"&&((C=window.location)==null?void 0:C.origin)||""}${z}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");f+=`<rect x="${V}" y="${h}" width="${g}" height="${b}" rx="5" fill="#161616"/>`,f+=`<image href="${S}" xlink:href="${S}" x="${V}" y="${h}" width="${g}" height="${b}" preserveAspectRatio="xMidYMid slice"/>`,f+=`<rect x="${V}" y="${h}" width="${g}" height="${b}" rx="5" fill="none" stroke="${U}" stroke-width="2" opacity="0.7"/>`,f+=`<rect x="${V}" y="${h}" width="${g}" height="${b}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${T.cardId}" data-role="${F}" style="cursor:pointer"/>`;continue}const W=w?.45:1,re=w?"#FFD700":U,ce=w?3:(T==null?void 0:T.rarity)==="légende"||(T==null?void 0:T.rarity)==="pépite"?2.5:2,se=b-d-x;f+=`<defs><clipPath id="cp-${G}"><rect x="${V}" y="${(v.y-b/2+d).toFixed(1)}" width="${g}" height="${se}"/></clipPath></defs>`,f+=`<rect x="${V}" y="${h}" width="${g}" height="${b}" rx="5" fill="${Z}" opacity="${W}"/>`;const ae=Te(T);ae&&(f+=`<image href="${ae}" xlink:href="${ae}" x="${V}" y="${(v.y-b/2+d).toFixed(1)}" width="${g}" height="${se}" clip-path="url(#cp-${G})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${V}" y="${h}" width="${g}" height="${d}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${v.x.toFixed(1)}" y="${(v.y-b/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(T.name||"").slice(0,9)}</text>`;const M=(v.y+b/2-x).toFixed(1);f+=`<rect x="${V}" y="${M}" width="${g}" height="${x}" fill="rgba(255,255,255,0.92)"/>`;{const z=Ft(T.country_code);z?f+=`<image href="${z}" xlink:href="${z}" x="${(v.x-20).toFixed(1)}" y="${(v.y+b/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(v.x-13).toFixed(1)}" y="${(v.y+b/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Si(T.country_code)}</text>`,f+=`<text x="${v.x.toFixed(1)}" y="${(v.y+b/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${q}</text>`;const R=zi(T);R?f+=`<image href="${R}" xlink:href="${R}" x="${(v.x+g/2-14).toFixed(1)}" y="${(v.y+b/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:T.clubName&&(f+=`<text x="${(v.x+14).toFixed(1)}" y="${(v.y+b/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(T.clubName||"").slice(0,3).toUpperCase()}</text>`),T.boost&&(f+=`<rect x="${(v.x+g/2-12).toFixed(1)}" y="${(v.y-b/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(v.x+g/2-5).toFixed(1)}" y="${(v.y-b/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${T.boost}</text>`)}f+=`<rect x="${V}" y="${h}" width="${g}" height="${b}" rx="5" fill="${w?"rgba(255,255,255,0.12)":"none"}" stroke="${re}" stroke-width="${ce}" opacity="${W}"/>`,ee&&(f+=`<rect x="${V}" y="${h}" width="${g}" height="${b}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${w?"selected":""}" data-card-id="${T.cardId}" data-role="${F}" style="cursor:pointer"/>`)}const E=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-E} ${-E} ${c+E*2} ${s+E*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function xt(e,t,o,n,c=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${mt(e,t,o,n,c,s,a)}
  </div>`}function tt(e,t=!1){const o=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Ci(e,t,o,n){var T;const{state:c,navigate:s,toast:a}=t;Ve(e);const l=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Eo(e,t,o);const p=l.deckId;let i,r,u,f;try{const v=await Promise.all([L.from("decks").select("formation,name").eq("id",p).single(),L.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=v[0].data,u=v[0].error,r=v[1].data,f=v[1].error}catch(v){console.error("[Match] Exception chargement deck:",v),We(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),We(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const g=(r||[]).filter(v=>{var F;return v.is_starter&&((F=v.card)==null?void 0:F.player)}).map(v=>Bt(v.card,v.position)),b=(r||[]).filter(v=>{var F;return!v.is_starter&&((F=v.card)==null?void 0:F.player)}).map(v=>Bt(v.card,v.position));if(g.length<11){We(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>s("decks"));return}const d=(r||[]).find(v=>{var F;return((F=v.card)==null?void 0:F.card_type)==="formation"}),x=(i==null?void 0:i.formation)||((T=d==null?void 0:d.card)==null?void 0:T.formation)||"4-4-2",{data:$,error:E}=await L.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:C}=await L.from("gc_definitions").select("*").eq("is_active",!0),G=($||[]).map(v=>({...v,_gcDef:(C==null?void 0:C.find(F=>F.name===v.gc_type||F.id===v.gc_definition_id))||null}));n({deckId:p,formation:x,starters:g,subsRaw:b,gcCardsEnriched:G,gcDefs:C||[]})}async function Ao(e,t){const{state:o}=t,c=(o.params||{}).matchMode||"vs_ai_easy",s=c.replace("vs_ai_",""),a=c;await Ci(e,t,c,async({deckId:l,formation:p,starters:i,subsRaw:r,gcCardsEnriched:u,gcDefs:f})=>{try{const g=kt(i,p),b=await To(p,s),d=async x=>{try{const{data:$,error:E}=await L.from("matches").insert({home_id:o.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(E){console.error("[MatchIA] Erreur création match:",E),We(e,"⚠️","Impossible de créer le match ("+E.message+").","Retour",()=>t.navigate("home"));return}const C={gcDefs:f||[],matchId:$==null?void 0:$.id,mode:a,difficulty:s,formation:p,homeTeam:g,aiTeam:b,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:o.profile.club_name||"Vous"};Lo(e,C,t)}catch($){console.error("[MatchIA] Exception launchMatch:",$),We(e,"⚠️","Erreur au lancement du match : "+$.message,"Retour",()=>t.navigate("home"))}};if(!u.length){d([]);return}Mi(e,u,d)}catch(g){console.error("[MatchIA] Exception setup:",g),We(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function To(e,t){var a,l;const{data:o}=await L.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!o||o.length<11)return Io(e);const n=nt[e]||nt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},s=[...o];for(const p of["GK","DEF","MIL","ATT"]){const i=s.filter(b=>b.job===p),r=s.filter(b=>b.job!==p),u=[...i,...r],f=[];for(let b=0;b<n[p];b++){const d=u[b]||s[b];d&&f.push({cardId:"ai-"+d.id+"-"+b,id:d.id,firstname:d.firstname,name:d.surname_encoded,country_code:d.country_code,club_id:d.club_id,job:d.job,job2:d.job2,note_g:Number(d.note_g)||0,note_d:Number(d.note_d)||0,note_m:Number(d.note_m)||0,note_a:Number(d.note_a)||0,rarity:d.rarity,skin:d.skin,hair:d.hair,hair_length:d.hair_length,clubName:((a=d.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=d.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const g=at(f.length);f.forEach((b,d)=>{b._col=g[d]}),c[p]=f}return c}function Io(e){const t=nt[e]||nt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let p=0;p<t[s];p++){const i=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:n[c%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),c++}const l=at(a.length);a.forEach((p,i)=>{p._col=l[i]}),o[s]=a}return o}function Lo(e,t,o){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${mt(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Mo(e,t,o),5e3)}function Mo(e,t,o){const n=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function s(d){return d.reduce((x,$)=>x+me($,"MIL"),0)}function a(d){let x=0;for(let $=0;$<d.length-1;$++){const E=Xe(d[$],d[$+1]);E==="#00ff88"?x+=2:E==="#FFD700"&&(x+=1)}return x}const l=s(n)+a(n),p=s(c)+a(c),i=l>=p;function r(d,x,$,E){return`<div id="duel-row-${E}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${x}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${d.map((C,G)=>{const T=G<d.length-1?Xe(C,d[G+1]):null,v=!T||T==="#ff3333"||T==="#cc2222",F=T==="#00ff88"?"+2":T==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${E}" data-idx="${G}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Be({...C,note:me(C,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${G<d.length-1?`<div class="duel-link duel-link-${E}" data-idx="${G}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${v?"rgba(255,255,255,0.12)":T};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${v?"none":`0 0 8px ${T}`}">
            ${F?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${T}">${F}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${E}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(d)} + ${a(d)} liens = <b style="color:#fff">${s(d)+a(d)}</b>
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

    ${r(n,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${r(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const d=(x,$)=>e.querySelectorAll(x).forEach((E,C)=>{setTimeout(()=>{E.style.opacity="1",E.style.transform="translateY(0) scale(1)"},$+C*90)});d(".duel-card-home",150),d(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((x,$)=>{setTimeout(()=>{x.style.opacity="1"},$*70)}),900),setTimeout(()=>{const x=e.querySelector("#vs-label");x&&(x.style.opacity="1",x.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach($=>$.style.opacity="1")},1250),setTimeout(()=>{f("score-home",l,800),f("score-ai",p,800)},1500)};function f(d,x,$){const E=document.getElementById(d);if(!E)return;const C=performance.now(),G=T=>{const v=Math.min(1,(T-C)/$);E.textContent=Math.round(x*(1-Math.pow(1-v,3))),v<1?requestAnimationFrame(G):E.textContent=x};requestAnimationFrame(G)}requestAnimationFrame(u),t.attacker=i?"home":"ai";const g=i?Li():null;i&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(d=>({name:d.name,note:me(d,"MIL"),portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),aiPlayers:c.map(d=>({name:d.name,note:me(d,"MIL"),portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const b=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",_e(e,t,o),t.attacker==="ai"&&setTimeout(()=>Dt(e,t,o),800)};setTimeout(()=>{const d=document.getElementById("score-home"),x=document.getElementById("score-ai"),$=document.getElementById(i?"duel-row-home":"duel-row-ai"),E=document.getElementById(i?"duel-row-ai":"duel-row-home"),C=i?d:x,G=i?x:d;C&&(C.style.fontSize="80px",C.style.color=i?"#FFD700":"#ff6b6b",C.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),G&&(G.style.opacity="0.25"),setTimeout(()=>{$&&($.style.transformOrigin="center",$.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",$.style.zIndex="5"),setTimeout(()=>{var v;const T=document.getElementById("duel-shock");if(T){const F=(v=E||$)==null?void 0:v.getBoundingClientRect(),Z=e.querySelector(".match-screen").getBoundingClientRect();F&&(T.style.top=F.top-Z.top+F.height/2+"px"),T.style.animation="shockwave .5s ease-out forwards"}E&&(E.style.transformOrigin="center",E.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var v;const T=document.getElementById("duel-finale");T&&(T.innerHTML=`
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
          </button>`,T.style.transition="opacity .45s ease",T.style.opacity="1",T.style.pointerEvents="auto",(v=document.getElementById("start-match-btn"))==null||v.addEventListener("click",b))},600)},700)},2800)}function zo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(o=>tt(o)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(o=>tt(o)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${tt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${tt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function _e(e,t,o){var C,G,T,v,F,Z,ne,ee;const n=t.selected.map(w=>w.cardId),c=t.usedSubIds||[],s=t.homeSubs.filter(w=>!c.includes(w.cardId)),l=Object.values(t.homeTeam).flat().filter(w=>w.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(w=>(t.aiTeam[w]||[]).some(q=>!q.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(w=>!w.used),r=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(w=>!w.used).map(w=>w.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",g=t.phase==="defense",b=t.phase==="finished",d=t.gcCards.filter(w=>!t.usedGc.includes(w.id)),x=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const q=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${et((q.players||[]).map(V=>({...V,used:!1})),"#ff6b6b",q.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const q=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((q.players||[]).map(V=>({...V,used:!1})),"#00ff88",q.total)}
          </div>`}const w=t.log[t.log.length-1];return w?'<div style="padding:2px 4px">'+zo(w)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const w=window.innerWidth>=700,q=(M,z,R)=>{var Ie,je;const S=(t.gcDefs||[]).find(m=>m.name===M.gc_type),N={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ie={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",Y=(S==null?void 0:S.name)||M.gc_type,ve=(S==null?void 0:S.effect)||((Ie=Ce[M.gc_type])==null?void 0:Ie.desc)||"",xe=S!=null&&S.image_url?`/manager-wars/icons/${S.image_url}`:null,ge=((je=Ce[M.gc_type])==null?void 0:je.icon)||"⚡",fe=Math.round(R*.22),be=Math.round(R*.22),Ee=R-fe-be,Le=Y.length>12?7:9;return`<div class="gc-mini" data-gc-id="${M.id}" data-gc-type="${M.gc_type}"
          style="box-sizing:border-box;width:${z}px;height:${R}px;border-radius:10px;border:2px solid ${ie};background:${N};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${fe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Le}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${z-6}px">${Y}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ee}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:${z-10}px;max-height:${Ee-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ee*.55)}px">${ge}</span>`}
          </div>
          <div style="height:${be}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},V=(M,z)=>{var R;return`<div id="boost-card"
          style="box-sizing:border-box;width:${M}px;height:${z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(z*.09)}px;color:#000;font-weight:900">+${(R=t.boostCard)==null?void 0:R.value}</div>
          </div>`},h=(M,z)=>z?V(130,175):q(M,130,175),U=(M,z)=>z?V(68,95):q(M,68,95),W=w?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",re=b?`<button id="btn-results" style="${W};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${W};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-action" style="${W};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${W};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${W};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ce=f||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${w?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(M=>`<div class="sub-btn-col" data-sub-id="${M.cardId}" style="cursor:pointer;flex-shrink:0">${Be(M,76,100)}</div>`).join("")}
      </div>`,ae=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${xt(t.homeTeam,t.formation,t.phase,n,300,300,r)}
        </div>
      </div>`;return w?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ae}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${re}${ce}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${d.map(M=>h(M,!1)).join("")}
            ${x?h(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${xt(t.homeTeam,t.formation,t.phase,n,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${d.map(M=>U(M,!1)).join("")}
            ${x?U(null,!0):""}
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
          <div>${re}${ce}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(w=>{var q,V,h;if(w.type==="duel"){const U=w.isGoal,W=w.homeScored?"#FFD700":U?"#ff6b6b":"rgba(255,255,255,0.3)",re=w.homeScored?"⚽ BUT !":U?"⚽ BUT IA !":(q=w.homePlayers)!=null&&q.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${U?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${W};margin-bottom:4px">
                <div style="font-size:9px;color:${W};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${re}</div>
                ${(V=w.homePlayers)!=null&&V.length?`<div style="margin-bottom:3px">${et(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
                ${(h=w.aiPlayers)!=null&&h.length?`<div style="opacity:0.7">${et(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
              </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${w.outPlayer?Be({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${w.inPlayer?Be({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:w.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${w.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${w.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function $(){const w=e.querySelector(".match-screen");if(!w)return;const q=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);w.style.bottom="auto",w.style.height=q+"px",w.style.minHeight=q+"px",w.style.maxHeight=q+"px",w.style.overflow="hidden";const V=e.querySelector("#mobile-action-bar"),h=e.querySelector("#mobile-play-area");V&&h&&(h.style.paddingBottom=V.offsetHeight+"px")}if($(),setTimeout($,120),setTimeout($,400),setTimeout($,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",$),window.visualViewport.addEventListener("scroll",$)),window.addEventListener("resize",$)),function(){const q=e.querySelector(".terrain-wrapper svg");q&&(q.removeAttribute("width"),q.removeAttribute("height"),q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",q.setAttribute("viewBox","-26 -26 352 352"),q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const w=e.querySelector(".terrain-wrapper svg");w&&(w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let w=!1,q=30;const V=()=>document.getElementById("match-timer"),h=()=>{const U=V();if(!U)return;const W=String(Math.floor(q/60)).padStart(2,"0"),re=String(q%60).padStart(2,"0");U.textContent=` ${W}:${re}`,U.style.color=w?"#ff2222":"#ff9500",U.style.fontWeight="900"};h(),t._timerInt=setInterval(()=>{if(q--,q<0)if(!w)w=!0,q=15,h();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",U.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(U),setTimeout(()=>{U.remove(),ft(e,t,o)},2500)}else h()},1e3)}(C=document.getElementById("match-quit"))==null||C.addEventListener("click",()=>{Re(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ft(e,t,o))}),(G=document.getElementById("view-ai"))==null||G.addEventListener("click",()=>No(t,o)),(T=document.getElementById("toggle-history"))==null||T.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.add("open")}),(v=document.getElementById("close-history"))==null||v.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.remove("open")}),(F=document.getElementById("btn-action"))==null||F.addEventListener("click",()=>{t.selected.length!==0&&(f?Co(e,t,o):g&&jo(e,t,o))}),(Z=document.getElementById("btn-results"))==null||Z.addEventListener("click",()=>ft(e,t,o)),e.querySelectorAll(".match-slot-hit").forEach(w=>{w.addEventListener("click",()=>So(w,t,e,o))}),e.querySelectorAll(".match-used-hit").forEach(w=>{w.addEventListener("click",()=>zt(e,t,o,null,w.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(w=>{w.addEventListener("click",()=>Do(w.dataset.gcId,w.dataset.gcType,e,t,o))}),(ne=document.getElementById("boost-card"))==null||ne.addEventListener("click",()=>Ro(e,t,o)),e.querySelectorAll(".sub-btn-col").forEach(w=>{w.addEventListener("click",()=>zt(e,t,o,w.dataset.subId))}),(ee=document.getElementById("sub-btn-main"))==null||ee.addEventListener("click",()=>zt(e,t,o))}function So(e,t,o,n){const c=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(p=>p.cardId===c);l&&t.selected.push({...l,_role:s,_line:s})}_e(o,t,n)}function Kt(e,t,o){e.matchId&&L.from("matches").update({last_player_id:o}).eq("id",e.matchId).then(()=>{})}function Co(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Kt(t,o,o.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),c=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(i=>i.cardId===a.cardId)||a,p=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Nt(c,t.modifiers.home);t.pendingAttack={...s,players:[...c],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(p=>p.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",_e(e,t,o),setTimeout(()=>Bo(e,t,o),1200)}function jo(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Kt(t,o,o.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),c=Ot(n,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!0)});const s=Pt(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Te(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Te(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,_e(e,t,o),Et(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,o,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,it(e,t,o,"home-attack")}function Dt(e,t,o){Kt(t,o,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=bi(n,"attack",t.difficulty);if(!c.length){vt(e,t,o);return}const s=Nt(c,t.modifiers.ai);t.pendingAttack={...s,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:Te(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,_e(e,t,o),Et(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,o,"home-attack")});return}t.phase="defense",_e(e,t,o)}function Bo(e,t,o){var i,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=bi(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(g=>({name:g.name,note:me(g,g._line||g.job),portrait:Te(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,o),Et(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,o,"ai-attack")});return}const a=c.length>0?Ot(c,t.modifiers.ai).total:0;c.forEach(u=>{u.used=!0});const l=Pt(t.pendingAttack.total,a,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:c.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,o),Et(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,o,"ai-attack")});return}else p.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,it(e,t,o,"ai-attack")}function it(e,t,o,n){if(t.round++,ji(t)){ft(e,t,o);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){vt(e,t,o);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){vt(e,t,o);return}setTimeout(()=>Dt(e,t,o),100);return}t.phase="attack",_e(e,t,o)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){vt(e,t,o);return}t.phase="ai-attack",_e(e,t,o),setTimeout(()=>Dt(e,t,o),800)}}function ji(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(c=>!c.used)),o=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(c=>!c.used));return!t&&!o}function vt(e,t,o){ji(t)?ft(e,t,o):(t.phase="attack",_e(e,t,o))}function Fo(e,t,o){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Te(e),s=Te(t),a=rt[e.job]||"#555",l=rt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
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
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),o())};n.addEventListener("click",u),setTimeout(u,2e3)}function ct(e,t="rgba(0,0,0,0.8)"){const o=document.createElement("div");o.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2200)}function zt(e,t,o,n=null,c=null){var g,b;if(t.phase!=="attack"){ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([d,x])=>(x||[]).filter($=>$.used).map($=>({...$,_line:$._line||d}))),a=t.homeSubs.filter(d=>!t.usedSubIds.includes(d.cardId));if(!s.length){ct("Aucun joueur utilisé à remplacer");return}if(!a.length){ct("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(d=>d.cardId===c));const p=((g=s[l])==null?void 0:g._line)||((b=s[l])==null?void 0:b.job);let i=n?Math.max(0,a.findIndex(d=>d.cardId===n)):Math.max(0,a.findIndex(d=>d.job===p)),r=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var T,v,F,Z,ne,ee;const d=s[l],x=a[i],$=Math.min(130,Math.round((window.innerWidth-90)/2)),E=Math.round($*1.35),C=w=>`background:rgba(255,255,255,0.12);border:none;color:${w?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${w?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${C(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${x?Be({...x,used:!1,boost:0},$,E):"<div>—</div>"}</div>
        <button id="in-down" style="${C(i>=a.length-1)}" ${i>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${C(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${d?Be({...d,used:!1,boost:0},$,E):"<div>—</div>"}</div>
        <button id="out-down" style="${C(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(T=u.querySelector("#sub-close"))==null||T.addEventListener("click",()=>u.remove()),(v=u.querySelector("#out-up"))==null||v.addEventListener("click",()=>{l>0&&(l--,f())}),(F=u.querySelector("#out-down"))==null||F.addEventListener("click",()=>{l<s.length-1&&(l++,f())}),(Z=u.querySelector("#in-up"))==null||Z.addEventListener("click",()=>{i>0&&(i--,f())}),(ne=u.querySelector("#in-down"))==null||ne.addEventListener("click",()=>{i<a.length-1&&(i++,f())});const G=(w,q,V,h)=>{const U=u.querySelector("#"+w);if(!U)return;let W=0;U.addEventListener("touchstart",re=>{W=re.touches[0].clientY},{passive:!0}),U.addEventListener("touchend",re=>{const ce=re.changedTouches[0].clientY-W;if(Math.abs(ce)<30)return;const se=q();ce<0&&se<h-1?(V(se+1),f()):ce>0&&se>0&&(V(se-1),f())},{passive:!0})};G("in-panel",()=>i,w=>i=w,a.length),G("out-panel",()=>l,w=>l=w,s.length),(ee=u.querySelector("#sub-confirm"))==null||ee.addEventListener("click",w=>{if(w.preventDefault(),w.stopPropagation(),r)return;r=!0;const q=s[l],V=a[i];if(!q||!V)return;let h=null,U=-1;for(const[re,ce]of Object.entries(t.homeTeam)){const se=(ce||[]).findIndex(ae=>ae.cardId===q.cardId);if(se!==-1){h=re,U=se;break}}if(U===-1||!h){ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const W={...V,_line:h,_col:q._col||0,used:!1,boost:0};t.homeTeam[h].splice(U,1,W),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(V.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:q.name,firstname:q.firstname,note:me(q,h),portrait:Te(q),job:q.job,country_code:q.country_code,rarity:q.rarity,clubName:q.clubName,clubLogo:q.clubLogo},inPlayer:{name:V.name,firstname:V.firstname,note:me(V,h),portrait:Te(V),job:V.job,country_code:V.country_code,rarity:V.rarity,clubName:V.clubName,clubLogo:V.clubLogo},text:`🔄 ${V.firstname} ${V.name} remplace ${q.firstname} ${q.name}`}),u.remove(),Fo(q,V,()=>_e(e,t,o))})}document.body.appendChild(u),f()}function Do(e,t,o,n,c){var b,d;const s=(n.gcDefs||[]).find(x=>x.name===t),a=Ce[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,f=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(b=g.querySelector("#gc-back"))==null||b.addEventListener("click",()=>g.remove()),(d=g.querySelector("#gc-use"))==null||d.addEventListener("click",()=>{g.remove(),qo(e,t,o,n,c)})}function bt(e,t,o,n,c,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var i,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${o}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",b=me(u,f)+(u.boost||0),d=l.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${d?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${b}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=a.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,g=e.find(d=>d.cardId===f);if(!g)return;const b=l.findIndex(d=>d.cardId===f);b>-1?l.splice(b,1):l.length<t&&l.push(g),p()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}p(),document.body.appendChild(a)}const Go={BOOST_STAT:({value:e=1,count:t=1,roles:o=[]},n,c,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!o.length||o.includes(l)).flatMap(([l,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:l})));return a.length?(bt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,n,l=>{l.forEach(p=>{const i=(n.homeTeam[p._line]||[]).find(r=>r.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),_e(c,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_e(c,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:o=[],target:n="ai"},c,s,a)=>{const l=n==="home"?c.homeTeam:c.aiTeam,p=n==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!o.length||o.includes(r)).flatMap(([r,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:r})));return i.length?(bt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,s,c,r=>{r.forEach(u=>{const g=((n==="home"?c.homeTeam:c.aiTeam)[u._line]||[]).find(b=>b.cardId===u.cardId);g&&(g.boost=(g.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),_e(s,c,a)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),_e(s,c,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:o="ai"},n,c,s)=>{const a=o==="home"?n.homeTeam:n.aiTeam,l=o==="ai"?"adverse":"allié",p=Object.entries(a).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:i})));return p.length?(bt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,c,n,i=>{i.forEach(r=>{const f=((o==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${o==="ai"?" (IA)":""} exclu !`,type:"info"}))}),_e(c,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),_e(c,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},o,n,c)=>{const s=Object.entries(o.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(p=>p.used).map(p=>({...p,_line:a})));return s.length?(bt(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,o,a=>{a.forEach(l=>{const p=(o.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!1,o.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),_e(n,o,c)}),!0):(o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),_e(n,o,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function qo(e,t,o,n,c){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(p=>p.name===t)||s.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const p=Go[a.effect_type];p?p(a.effect_params||{},n,o,c)||(l=!0):(c.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(n.homeTeam).flatMap(([i,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:i})));p.length?(p[0].used=!1,n.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((r,u)=>me(u,"ATT")-me(r,"ATT"))[0];i.used=!0,n.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}L.from("cards").delete().eq("id",e).then(()=>{}),l&&_e(o,n,c)}function Ro(e,t,o){const n=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!n.length){o.toast("Aucun joueur actif à booster","error");return}o.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${rt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${me(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const s=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(p=>p.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,o.closeModal(),_e(e,t,o)})})}function Et(e,t,o,n,c){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(i,r)=>`
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
  <div style="position:absolute;inset:0;pointer-events:none">${a}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${n?"BUT !":"BUT IA !"}
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
      <div style="width:50px;height:50px;border-radius:50%;background:${rt[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const p=()=>{l||(l=!0,s.remove(),setTimeout(()=>c(),50))};s.addEventListener("click",p),setTimeout(p,3500)}async function ft(e,t,o){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=o,c=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=c?"victoire":s?"nul":"defaite",l=Ki(t.mode,a);t.matchId&&await L.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};c?p.wins=(n.profile.wins||0)+1:s?p.draws=(n.profile.draws||0)+1:p.losses=(n.profile.losses||0)+1,await L.from("users").update(p).eq("id",n.profile.id),await o.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),Re(e),o.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{i.remove(),Re(e),o.navigate("match",{matchMode:t.mode})})}function No(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${mt(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Oo(e,t){await Ci(e,t,"random",({deckId:o,formation:n,starters:c,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const p=i=>Po(e,t,o,n,c,s,i,l||[]);if(!a.length){p([]);return}Mi(e,a,p)})}async function Po(e,t,o,n,c,s,a=[],l=[]){var E;const{state:p,navigate:i,toast:r}=t;let u=!1,f=null;Ve(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(C=!0)=>{u=!0,f&&(L.removeChannel(f),f=null),C&&await L.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(E=document.getElementById("mm-cancel"))==null||E.addEventListener("click",async()=>{try{await g(!0)}catch{}Re(e),i("home")});const b=async(C,G,T)=>{if(u)return;u=!0,f&&(L.removeChannel(f),f=null);const v=document.getElementById("mm-status");v&&(v.textContent="Adversaire trouvé !"),await new Promise(F=>setTimeout(F,600)),e.isConnected&&Ho(e,t,C,T,a,l)},{data:d,error:x}=await L.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:o});if(x||!(d!=null&&d.success)){r("Erreur de matchmaking","error"),Re(e),i("home");return}if(d.matched){b(d.match_id,d.opponent_id,!1);return}const $=document.getElementById("mm-status");$&&($.textContent="En attente d'un autre joueur..."),f=L.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},C=>{const G=C.new;G.status==="matched"&&G.match_id&&b(G.match_id,G.matched_with,!0)}).subscribe()}async function Ho(e,t,o,n,c=[],s=[]){const{state:a,navigate:l,toast:p}=t,i=n?"p1":"p2",r=n?"p2":"p1",u=(c||[]).map(m=>m.id),f=(c||[]).map(m=>({id:m.id,gc_type:m.gc_type,_gcDef:m._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await L.from("matches").select("*").eq("id",o).single();if(!g){p("Match introuvable","error"),l("home");return}async function b(){const[{data:m},{data:y},{data:A},{data:k}]=await Promise.all([L.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),L.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),L.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),L.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),_=B=>({cardId:B.card_id,position:B.position,id:B.id,firstname:B.firstname,name:B.surname_encoded,country_code:B.country_code,club_id:B.club_id,job:B.job,job2:B.job2,note_g:Number(B.note_g)||0,note_d:Number(B.note_d)||0,note_m:Number(B.note_m)||0,note_a:Number(B.note_a)||0,rarity:B.rarity,skin:B.skin,hair:B.hair,hair_length:B.hair_length,clubName:B.club_encoded_name||null,clubLogo:B.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),I=((m==null?void 0:m.starters)||[]).map(B=>_(B)),j=((y==null?void 0:y.starters)||[]).map(B=>_(B)),D=(m==null?void 0:m.formation)||"4-4-2",P=(y==null?void 0:y.formation)||"4-4-2";return{p1Team:kt(I,D),p2Team:kt(j,P),p1Subs:((m==null?void 0:m.subs)||[]).map(B=>_(B)),p2Subs:((y==null?void 0:y.subs)||[]).map(B=>_(B)),p1Formation:D,p2Formation:P,p1Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let d=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!d)if(n){d=await b();const{data:m}=await L.from("matches").select("game_state").eq("id",o).single();!(m!=null&&m.game_state)||!Object.keys(m.game_state).length?await L.from("matches").update({game_state:d,turn_user_id:g.home_id}).eq("id",o):d=m.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let m=0;m<30&&!d;m++){await new Promise(A=>setTimeout(A,400));const{data:y}=await L.from("matches").select("game_state").eq("id",o).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(d=y.game_state)}if(!d){p("Erreur de synchronisation","error"),l("home");return}d.gc_p2=u,d.gcCardsFull_p2=f,await L.from("matches").update({game_state:d}).eq("id",o)}let x=!1,$=null,E=!1;const C=new Set,G=new Set;function T(m){var B,H;try{L.removeChannel(v)}catch{}const y=d[i+"Score"]||0,A=d[r+"Score"]||0;let k,_;m.winner_id?(k=m.winner_id===a.profile.id,_=!1):m.forfeit?(k=y>A,_=!1):(_=y===A,k=y>A),(B=document.getElementById("pvp-end-overlay"))==null||B.remove();const I=document.createElement("div");I.id="pvp-end-overlay",I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const j=_?"🤝":k?"🏆":"😞",D=_?"MATCH NUL":k?"VICTOIRE !":"DÉFAITE",P=_?"#fff":k?"#FFD700":"#ff6b6b";I.innerHTML=`
      <div style="font-size:64px">${j}</div>
      <div style="font-size:26px;font-weight:900;color:${P}">${D}</div>
      <div style="font-size:18px">${d[i+"Name"]} ${y} – ${A} ${d[r+"Name"]}</div>
      ${m.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${k?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(I),(H=I.querySelector("#pvp-end-home"))==null||H.addEventListener("click",()=>{I.remove(),Re(e),l("home")})}const v=L.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},m=>{const y=m.new;try{if(y.status==="finished"||y.forfeit){if(x)return;x=!0,$&&(clearInterval($),$=null),y.game_state&&(d=y.game_state),T(y);return}if(y.game_state){const A=d;d=y.game_state;const k=d._lastGC;if(k&&k.seq&&!G.has(k.seq)&&(G.add(k.seq),k.by!==i)){se(k.type,k.by,()=>h());return}const _=A[i+"Score"]||0,I=A[r+"Score"]||0,j=d[i+"Score"]||0,D=d[r+"Score"]||0,P=j>_,B=D>I;if((P||B)&&!C.has(d.round)){C.add(d.round);const H=[...d.log||[]].reverse().find(Q=>Q.isGoal),K=((H==null?void 0:H.homePlayers)||[]).map(Q=>({name:Q.name,note:Q.note,portrait:Q.portrait,job:Q.job}));ce(K,j,D,P,()=>h());return}h()}}catch(A){console.error("[PvP] crash:",A)}}).subscribe();async function F(m){Object.assign(d,m),d.lastActionAt=new Date().toISOString();const{error:y}=await L.from("matches").update({game_state:d}).eq("id",o);y&&p("Erreur de synchronisation","error");try{h()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function Z(){if(x)return;x=!0,$&&(clearInterval($),$=null);const m=n?g.away_id:g.home_id,y=n?"p2":"p1",A=n?"p1":"p2",k={...d,[y+"Score"]:3,[A+"Score"]:0,phase:"finished"};try{await L.from("matches").update({status:"finished",forfeit:!0,winner_id:m,home_score:k.p1Score||0,away_score:k.p2Score||0,game_state:k}).eq("id",o)}catch{}try{L.removeChannel(v)}catch{}setTimeout(()=>{Re(e),l("home")},800)}const ne={BOOST_STAT:({value:m=1,count:y=1,roles:A=[]},k,_)=>{const I=k[i+"Team"],j=Object.entries(I).filter(([D])=>!A.length||A.includes(D)).flatMap(([D,P])=>P.filter(B=>!B.used).map(B=>({...B,_line:D})));if(!j.length){k.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_(k);return}ee(j,y,`Choisir ${y} joueur(s) à booster (+${m})`,D=>{D.forEach(P=>{const B=(I[P._line]||[]).find(H=>H.cardId===P.cardId);B&&(B.boost=(B.boost||0)+m,k.log.push({text:`⚡ +${m} sur ${B.name}`,type:"info"}))}),k[i+"Team"]=I,_(k)})},DEBUFF_STAT:({value:m=1,count:y=1,roles:A=[],target:k="ai"},_,I)=>{const j=k==="home"?i:r,D=_[j+"Team"],P=k==="home"?"allié":"adverse",B=Object.entries(D).filter(([H])=>!A.length||A.includes(H)).flatMap(([H,K])=>K.filter(Q=>!Q.used).map(Q=>({...Q,_line:H})));if(!B.length){_.log.push({text:`🎯 Aucun joueur ${P}`,type:"info"}),I(_);return}ee(B,y,`Choisir ${y} joueur(s) ${P}(s) (-${m})`,H=>{H.forEach(K=>{const Q=(D[K._line]||[]).find(ue=>ue.cardId===K.cardId);Q&&(Q.boost=(Q.boost||0)-m,_.log.push({text:`🎯 -${m} sur ${Q.name}`,type:"info"}))}),_[j+"Team"]=D,I(_)})},GRAY_PLAYER:({count:m=1,roles:y=[],target:A="ai"},k,_)=>{const I=A==="home"?i:r,j=k[I+"Team"],D=A==="home"?"allié":"adverse",P=Object.entries(j).filter(([B])=>!y.length||y.includes(B)).flatMap(([B,H])=>H.filter(K=>!K.used).map(K=>({...K,_line:B})));if(!P.length){k.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),_(k);return}ee(P,m,`Choisir ${m} joueur(s) ${D}(s) à exclure`,B=>{B.forEach(H=>{const K=(j[H._line]||[]).find(Q=>Q.cardId===H.cardId);K&&(K.used=!0,k.log.push({text:`❌ ${K.name} exclu !`,type:"info"}))}),k[I+"Team"]=j,_(k)})},REVIVE_PLAYER:({count:m=1,roles:y=[]},A,k)=>{const _=A[i+"Team"],I=Object.entries(_).filter(([j])=>!y.length||y.includes(j)).flatMap(([j,D])=>D.filter(P=>P.used).map(P=>({...P,_line:j})));if(!I.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),k(A);return}ee(I,m,`Choisir ${m} joueur(s) à ressusciter`,j=>{j.forEach(D=>{const P=(_[D._line]||[]).find(B=>B.cardId===D.cardId);P&&(P.used=!1,A.log.push({text:`💫 ${P.name} ressuscité !`,type:"info"}))}),A[i+"Team"]=_,k(A)})},REMOVE_GOAL:({},m,y)=>{const A=r+"Score";m[A]>0?(m[A]--,m.log.push({text:"🚫 Dernier but annulé !",type:"info"})):m.log.push({text:"🚫 Aucun but à annuler",type:"info"}),y(m)},ADD_GOAL_DRAW:({},m,y)=>{m[i+"Score"]===m[r+"Score"]?(m[i+"Score"]++,m.log.push({text:"🎯 But bonus !",type:"info"})):m.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),y(m)},ADD_SUB:({value:m=1},y,A)=>{y.maxSubs=(y.maxSubs||3)+m,y.log.push({text:`🔄 +${m} remplacement(s)`,type:"info"}),A(y)},CUSTOM:({},m,y)=>y(m)};function ee(m,y,A,k){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let I=[];function j(){var P,B;const D=m.map(H=>{const K={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[H._line]||"#555",Q=me(H,H._line)+(H.boost||0),we=I.find(J=>J.cardId===H.cardId)?"#FFD700":"rgba(255,255,255,0.25)",X=H.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${H.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${we};background:${K};overflow:hidden;cursor:pointer;${X}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${H.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${H._line}</div>
        </div>`}).join("");_.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${I.length}/${y}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${I.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${I.length}/${y})
          </button>
        </div>`,(P=_.querySelector("#pp-close"))==null||P.addEventListener("click",()=>_.remove()),_.querySelectorAll(".pp-item").forEach(H=>{H.addEventListener("click",()=>{const K=H.dataset.cid,Q=m.find(we=>we.cardId===K),ue=I.findIndex(we=>we.cardId===K);Q&&(ue>-1?I.splice(ue,1):I.length<y&&I.push(Q),j())})}),(B=_.querySelector("#pp-confirm"))==null||B.addEventListener("click",()=>{_.remove(),k(I)})}j(),document.body.appendChild(_)}async function w(m,y){const k=(d["gcCardsFull_"+i]||[]).find(D=>D.id===m),_=(k==null?void 0:k._gcDef)||(d.gcDefs||[]).find(D=>{var P;return D.name===y||((P=D.name)==null?void 0:P.toLowerCase().trim())===(y==null?void 0:y.toLowerCase().trim())}),I=[...d["usedGc_"+i]||[],m],j={type:y,by:i,seq:(d._gcAnimSeq||0)+1};G.add(j.seq),se(y,i,async()=>{if(_!=null&&_.effect_type&&_.effect_type!=="CUSTOM"){const P=ne[_.effect_type];if(P){const B={...d};P(_.effect_params||{},B,async H=>{H["usedGc_"+i]=I,H._lastGC=j,H._gcAnimSeq=j.seq,await F(H)});return}}const D={...d};switch(y){case"Remplacement+":D.maxSubs=(D.maxSubs||3)+1,D.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const P=r+"Score";D[P]>0&&(D[P]--,D.log.push({text:"🚫 But annulé",type:"info"}));break}}D["usedGc_"+i]=I,D._lastGC=j,D._gcAnimSeq=j.seq,await F(D)})}function q(m,y){const A="usedCardIds_"+m,k=new Set(d[A]||[]);y.forEach(_=>k.add(_)),d[A]=[...k]}function V(){for(const m of["p1","p2"]){const y=new Set(d["usedCardIds_"+m]||[]),A=d[m+"Team"];if(A)for(const k of["GK","DEF","MIL","ATT"])(A[k]||[]).forEach(_=>{_.used=y.has(_.cardId)})}}function h(){var Ue,Wt,Xt,Jt,Qt,Zt;if(d.phase==="reveal")return U();if(d.phase==="midfield")return re();if(d.phase==="finished")return je();const m=d[i+"Team"],y=d[r+"Team"];V();const A=d[i+"Score"],k=d[r+"Score"],_=d[i+"Name"],I=d[r+"Name"],j=d.phase===i+"-attack",D=d.phase===i+"-defense",P=Array.isArray(d["selected_"+i])?d["selected_"+i]:[],B=P.map(O=>O.cardId),H=window.innerWidth>=700,K=d[i+"Subs"]||[],Q=d["usedSubIds_"+i]||[],ue=K.filter(O=>!Q.includes(O.cardId)),we=d["gcCardsFull_"+i]||[],X=d["usedGc_"+i]||[],J=we.filter(O=>!X.includes(O.id)),oe=d.boostOwner===i&&!d.boostUsed,de=!["GK","DEF","MIL","ATT"].some(O=>(y[O]||[]).some(te=>!te.used)),ye=[...m.MIL||[],...m.ATT||[]].filter(O=>!O.used),ke=j&&de&&ye.length===0?[...m.GK||[],...m.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function he(O,te,$e){var oi,ni;const le=O._gcDef,Ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",st=(le==null?void 0:le.name)||O.gc_type,lt=(le==null?void 0:le.effect)||((oi=Ce[O.gc_type])==null?void 0:oi.desc)||"",ei=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null,Di=((ni=Ce[O.gc_type])==null?void 0:ni.icon)||"⚡",ti=Math.round($e*.22),ii=Math.round($e*.22),Lt=$e-ti-ii,Gi=st.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${te}px;height:${$e}px;border-radius:10px;border:2px solid ${Qe};background:${Ke};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ti}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Gi}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${te-6}px">${st}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ei?`<img src="${ei}" style="max-width:${te-10}px;max-height:${Lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Lt*.55)}px">${Di}</span>`}
        </div>
        <div style="height:${ii}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${lt.slice(0,38)}</span>
        </div>
      </div>`}function Ae(O,te){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${te}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(te*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(te*.2)}px">⚡</div>
        <div style="font-size:${Math.round(te*.09)}px;color:#000;font-weight:900">+${d.boostValue}</div>
      </div>`}const ze=(O,te)=>te?Ae(130,175):he(O,130,175),Pe=(O,te)=>te?Ae(68,95):he(O,68,95),De=H?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ge=j?be(i)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${P.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${P.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${I}</div>`,Me=j&&!be(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':j||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${P.length}/3 sélectionné(s)</div>`:"",qe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${H?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ue.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ue.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Be(O,H?76:44,H?100:58)}</div>`).join("")}
    </div>`,Fe=j?"attack":D?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${xt(m,d[i+"Formation"],Fe,B,300,300,ke)}
      </div>
    </div>`;function Ne(O){if(O.type==="duel"&&(O.homeTotal!=null||O.aiTotal!=null)){const te=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(O.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.homePlayers||[]).map($e=>tt($e)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${te?20:14}px;font-weight:900;color:${te?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${O.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${te?14:20}px;font-weight:900;color:${te?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${O.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.aiPlayers||[]).map($e=>tt($e)).join("")}
            </div>
          </div>
          ${O.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${O.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const Je=(()=>{var te,$e;if(D&&((te=d.pendingAttack)!=null&&te.players)){const le=d.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${I} ATTAQUE — Défendez !</div>
          ${et((le.players||[]).map(Ke=>({...Ke,used:!1})),"#ff6b6b",le.total)}
        </div>`}if(j&&(($e=d.pendingAttack)!=null&&$e.players)){const le=d.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((le.players||[]).map(Ke=>({...Ke,used:!1})),"#00ff88",le.total)}
        </div>`}const O=(d.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+Ne(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Oe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${k}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${I}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(d.log||[]).length})
      </button>`;Ve(e),e.style.overflow="hidden",H?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${qe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ge}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${J.map(O=>ze(O,!1)).join("")}
            ${oe?ze(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${xt(m,d[i+"Formation"],Fe,B,300,300,ke)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${J.map(O=>Pe(O,!1)).join("")}
            ${oe?Pe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${j&&ue.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${j&&ue.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${j&&ue.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${j&&ue.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ue.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(d["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(d["usedSubIds_"+i]||[]).length}/${d.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ge}${Me}</div>
        </div>
      </div>`;function Se(){const O=e.querySelector(".match-screen");if(!O)return;const te=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=te+"px",O.style.minHeight=te+"px",O.style.maxHeight=te+"px",O.style.overflow="hidden";const $e=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");$e&&le&&(le.style.paddingBottom=$e.offsetHeight+"px")}if(Se(),setTimeout(Se,120),setTimeout(Se,400),E||(E=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Se),window.visualViewport.addEventListener("scroll",Se)),window.addEventListener("resize",Se)),function(){const te=e.querySelector(".terrain-wrapper svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("viewBox","-26 -26 352 352"),te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!j&&!D)return;const te=O.dataset.cardId,$e=O.dataset.role,le=(m[$e]||[]).find(lt=>lt.cardId===te);if(!le||le.used)return;const Ke=ke.includes(te);if(j&&!["MIL","ATT"].includes($e)&&!Ke)return;Array.isArray(d["selected_"+i])||(d["selected_"+i]=[]);const Qe=d["selected_"+i],st=Qe.findIndex(lt=>lt.cardId===te);st>-1?Qe.splice(st,1):Qe.length<3&&Qe.push({...le,_role:$e}),h()})}),e.querySelectorAll(".match-used-hit").forEach(O=>{O.addEventListener("click",()=>z(O.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>z())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>z()),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>ae(O.dataset.gcId,O.dataset.gcType))}),(Wt=e.querySelector("#pvp-boost-card"))==null||Wt.addEventListener("click",()=>M()),(Xt=e.querySelector("#pvp-action"))==null||Xt.addEventListener("click",O=>{j?O.currentTarget.dataset.pass==="1"||!be(i)?ie():Y():D&&ve()}),(Jt=e.querySelector("#pvp-quit"))==null||Jt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(Qt=e.querySelector("#pvp-view-opp"))==null||Qt.addEventListener("click",()=>S()),(Zt=e.querySelector("#pvp-toggle-history"))==null||Zt.addEventListener("click",()=>N()),$&&(clearInterval($),$=null),(j||D)&&!x){let O=30,te=!1;const $e=()=>document.getElementById("pvp-timer"),le=()=>{$e()&&($e().textContent=O+"s",$e().style.color=te?"#ff4444":"#fff")};le(),$=setInterval(()=>{O--,O<0?te?(clearInterval($),$=null,j&&!be(i)?ie():Z()):(te=!0,O=15,le()):le()},1e3)}}function U(){Ve(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${d[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${mt(d[r+"Team"],d[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await F({phase:"midfield"})},5e3)}let W=!1;function re(){if(W)return;const m=d[i+"Team"].MIL||[],y=d[r+"Team"].MIL||[];function A(J){return J.reduce((oe,de)=>oe+me(de,"MIL"),0)}function k(J){let oe=0;for(let de=0;de<J.length-1;de++){const ye=Xe(J[de],J[de+1]);ye==="#00ff88"?oe+=2:ye==="#FFD700"&&(oe+=1)}return oe}const _=A(m)+k(m),I=A(y)+k(y),j=_>=I;function D(J,oe,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${oe}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${J.map((ye,ke)=>{const he=ke<J.length-1?Xe(ye,J[ke+1]):null,Ae=!he||he==="#ff3333"||he==="#cc2222",ze=he==="#00ff88"?"+2":he==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${ke}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Be({...ye,note:me(ye,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ke<J.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ae?"rgba(255,255,255,0.12)":he};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ae?"none":`0 0 8px ${he}`}">
              ${ze?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${he}">${ze}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${de}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${A(J)} + ${k(J)} liens = <b style="color:#fff">${A(J)+k(J)}</b>
        </div>
      </div>`}Ve(e),e.innerHTML=`
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
      ${D(m,d[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${D(y,d[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(J,oe)=>e.querySelectorAll(J).forEach((de,ye)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},oe+ye*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((J,oe)=>setTimeout(()=>{J.style.opacity="1"},oe*70)),900),setTimeout(()=>{const J=e.querySelector("#pvp-vs");J&&(J.style.opacity="1",J.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(oe=>oe.style.opacity="1")},1250);function B(J,oe,de){const ye=document.getElementById(J);if(!ye)return;const ke=performance.now(),he=Ae=>{const ze=Math.min(1,(Ae-ke)/de);ye.textContent=Math.round(oe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(he):ye.textContent=oe};requestAnimationFrame(he)}setTimeout(()=>{B("pvp-score-me",_,800),B("pvp-score-opp",I,800)},1500);const H=d.p1Team.MIL||[],K=d.p2Team.MIL||[],Q=A(H)+k(H),ue=A(K)+k(K),we=Q>=ue?"p1":"p2";let X=d.boostValue;X==null&&(X=Li(),d.boostValue=X,d.boostOwner=we,d.boostUsed=!1),W=!0,setTimeout(()=>{const J=e.querySelector("#duel-row-"+(j?"me":"opp")),oe=e.querySelector("#duel-row-"+(j?"opp":"me")),de=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),ke=j?de:ye,he=j?ye:de;ke&&(ke.style.fontSize="80px",ke.style.color=j?"#FFD700":"#ff6b6b",ke.style.animation="duelPulse .5s ease"+(j?",duelGlow 1.5s ease infinite .5s":"")),he&&(he.style.opacity="0.25"),setTimeout(()=>{J&&(J.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",J.style.zIndex="5"),setTimeout(()=>{const Ae=document.getElementById("duel-shock");Ae&&(Ae.style.animation="shockwave .5s ease-out forwards"),oe&&(oe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const Ae=document.getElementById("pvp-duel-finale");if(!Ae)return;const ze=d.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+X+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Pe=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(j?"⚽ "+d[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+d[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Pe,Ae.style.transition="opacity .45s ease",Ae.style.opacity="1",Ae.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ge=we;await F({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:X,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function ce(m,y,A,k,_){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const j=Array.from({length:10},(H,K)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${K%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][K%8]}</div>`).join(""),D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};I.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${j}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${k?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${y} – ${A}
      </div>
      ${m!=null&&m.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${m.map(H=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${D[H.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${H.portrait?`<img src="${H.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(H.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(I);let P=!1;const B=()=>{P||(P=!0,I.remove(),setTimeout(()=>_(),50))};I.addEventListener("click",B),setTimeout(B,3500)}function se(m,y,A){var X,J;const k=(d.gcDefs||[]).find(oe=>{var de;return oe.name===m||((de=oe.name)==null?void 0:de.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[k==null?void 0:k.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",I={purple:"#b06ce0",light_blue:"#00d4ef"}[k==null?void 0:k.color]||"#b06ce0",j=(k==null?void 0:k.name)||m,D=(k==null?void 0:k.effect)||((X=Ce[m])==null?void 0:X.desc)||"",P=k!=null&&k.image_url?`/manager-wars/icons/${k.image_url}`:null,B=((J=Ce[m])==null?void 0:J.icon)||"⚡",K=y===i?"Vous":d[y+"Name"]||"Adversaire",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${I}66}50%{box-shadow:0 0 60px ${I}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${I};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${K} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${I};background:${_};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${j.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${j}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${P?`<img src="${P}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${B}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${D}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Q);let ue=!1;const we=()=>{ue||(ue=!0,Q.remove(),setTimeout(()=>A&&A(),50))};Q.addEventListener("click",we),setTimeout(we,3e3)}function ae(m,y){var Q,ue,we,X;const k=(d["gcCardsFull_"+i]||[]).find(J=>J.id===m),_=k==null?void 0:k._gcDef,I={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_==null?void 0:_.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",j={purple:"#b06ce0",light_blue:"#00d4ef"}[_==null?void 0:_.color]||"#b06ce0",D=(_==null?void 0:_.name)||y,P=(_==null?void 0:_.effect)||((Q=Ce[y])==null?void 0:Q.desc)||"Carte spéciale.",B=_!=null&&_.image_url?`/manager-wars/icons/${_.image_url}`:null,H=((ue=Ce[y])==null?void 0:ue.icon)||"⚡",K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",K.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${j};background:${I};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${j}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${D.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${D}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${B?`<img src="${B}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${H}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(K),(we=K.querySelector("#pvp-gc-back"))==null||we.addEventListener("click",()=>K.remove()),(X=K.querySelector("#pvp-gc-use"))==null||X.addEventListener("click",()=>{K.remove(),w(m,y)})}function M(){var k;const m=d[i+"Team"],y=Object.entries(m).flatMap(([_,I])=>(I||[]).filter(j=>!j.used).map(j=>({...j,_line:_})));if(!y.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${d.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(_=>{const I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[_._line]||"#555",j=me(_,_._line)+(_.boost||0);return`<div class="bp-item" data-cid="${_.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${I};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${_.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${j}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(k=A.querySelector("#bp-close"))==null||k.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(_=>{_.addEventListener("click",async()=>{const I=_.dataset.cid,j=y.find(P=>P.cardId===I);if(!j)return;const D=(m[j._line]||[]).find(P=>P.cardId===I);D&&(D.boost=(D.boost||0)+d.boostValue),A.remove(),await F({[i+"Team"]:m,boostUsed:!0})})})}function z(m=null){var ue,we;if(!(d.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const A=d[i+"Team"],k=d["usedSubIds_"+i]||[],_=d.maxSubs||3;if(k.length>=_){p(`Maximum ${_} remplacements atteint`,"warning");return}const I=Object.entries(A).flatMap(([X,J])=>(J||[]).filter(oe=>oe.used).map(oe=>({...oe,_line:X}))),j=(d[i+"Subs"]||[]).filter(X=>!k.includes(X.cardId));if(!I.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!j.length){p("Aucun remplaçant disponible","warning");return}let D=Math.max(0,I.findIndex(X=>X.cardId===m));const P=((ue=I[D])==null?void 0:ue._line)||((we=I[D])==null?void 0:we.job);let B=Math.max(0,j.findIndex(X=>X.job===P)),H=!1;const K=document.createElement("div");K.id="pvp-sub-overlay",K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var he,Ae,ze,Pe,De,Ge;const X=I[D],J=j[B],oe=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(oe*1.35),ye=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;K.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${k.length}/${_})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ye(B===0)}" ${B===0?"disabled":""}>▲</button>
          <div>${J?Be({...J,used:!1,boost:0},oe,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${ye(B>=j.length-1)}" ${B>=j.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${B+1}/${j.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ye(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${X?Be({...X,used:!1,boost:0},oe,de):"<div>—</div>"}</div>
          <button id="pout-down" style="${ye(D>=I.length-1)}" ${D>=I.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${I.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(he=K.querySelector("#psub-close"))==null||he.addEventListener("click",()=>K.remove()),(Ae=K.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{D>0&&(D--,Q())}),(ze=K.querySelector("#pout-down"))==null||ze.addEventListener("click",()=>{D<I.length-1&&(D++,Q())}),(Pe=K.querySelector("#pin-up"))==null||Pe.addEventListener("click",()=>{B>0&&(B--,Q())}),(De=K.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{B<j.length-1&&(B++,Q())});const ke=(Me,qe,Fe,He)=>{const Ne=K.querySelector("#"+Me);if(!Ne)return;let Je=0;Ne.addEventListener("touchstart",Oe=>{Je=Oe.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Oe=>{const Se=Oe.changedTouches[0].clientY-Je;if(Math.abs(Se)<30)return;const Ue=qe();Se<0&&Ue<He-1?(Fe(Ue+1),Q()):Se>0&&Ue>0&&(Fe(Ue-1),Q())},{passive:!0})};ke("pin-panel",()=>B,Me=>B=Me,j.length),ke("pout-panel",()=>D,Me=>D=Me,I.length),(Ge=K.querySelector("#psub-confirm"))==null||Ge.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),H)return;H=!0;const qe=I[D],Fe=j[B];if(!qe||!Fe)return;const He=qe._line,Ne=(A[He]||[]).findIndex(Se=>Se.cardId===qe.cardId);if(Ne===-1){p("Erreur : joueur introuvable","error"),K.remove();return}const Je={...Fe,_line:He,position:qe.position,used:!1,boost:0};A[He].splice(Ne,1,Je);const Oe=[...k,Fe.cardId];K.remove(),R(qe,Fe,async()=>{await F({[i+"Team"]:A,[r+"Team"]:d[r+"Team"],["usedSubIds_"+i]:Oe})})})}document.body.appendChild(K),Q()}function R(m,y,A){const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},_=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const I=(P,B,H)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${B};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${H}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${k[P.job]||"#555"};border:3px solid ${B};position:relative;overflow:hidden;margin:0 auto">
        ${Te(P)?`<img src="${Te(P)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(P.name||"").slice(0,12)}</div>
    </div>`;_.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${I(y,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${I(m,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(_);let j=!1;const D=()=>{j||(j=!0,_.remove(),setTimeout(()=>A(),50))};_.addEventListener("click",D),setTimeout(D,2200)}function S(){var y;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",m.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${d[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${mt(d[r+"Team"],d[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(m),(y=m.querySelector("#pvp-opp-close"))==null||y.addEventListener("click",()=>m.remove())}function N(){var A;const m=d.log||[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",y.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${m.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...m].reverse().map(k=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${k.type==="goal"?"#FFD700":k.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${k.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(y),(A=y.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>y.remove())}async function ie(){if(d.phase!==i+"-attack")return;const m=i==="p1"?"p2":"p1",y=(d.round||0)+1,A=[...d.log||[]];A.push({type:"info",text:`⏭️ ${d[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const k=Ee(d),_=be(m),I=k||!_?"finished":m+"-attack";await F({["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:I,attacker:m,round:y,log:A}),I==="finished"&&await Ie(d)}async function Y(){const m=d[i+"Team"],y=!["GK","DEF","MIL","ATT"].some(I=>(d[r+"Team"][I]||[]).some(j=>!j.used)),A=(d["selected_"+i]||[]).map(I=>{const j=(m[I._role]||[]).find(Q=>Q.cardId===I.cardId)||I,D=y&&["GK","DEF"].includes(I._role),P=m[I._role]||[],B=P.findIndex(Q=>Q.cardId===I.cardId),H=at(P.length),K=B>=0?H[B]:j._col??1;return{...j,_line:I._role,_col:K,...D?{note_a:Math.max(1,Number(j.note_a)||0)}:{}}});if(!A.length)return;const k=Nt(A,d.modifiers[i]||{});q(i,A.map(I=>I.cardId)),A.forEach(I=>{const j=(m[I._role]||[]).find(D=>D.cardId===I.cardId);j&&(j.used=!0)}),d["selected_"+i]=[],h();const _=[...d.log||[]];if(y){const I=(d[i+"Score"]||0)+1,j=A.map(K=>({name:K.name,note:me(K,K._line||"ATT"),portrait:Te(K),job:K.job}));_.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:j,homeTotal:k.total,aiTotal:0});const D=(d.round||0)+1,P=i==="p1"?"p2":"p1",B={...d,[i+"Team"]:m,[i+"Score"]:I},H=Ee(B);C.add(D),ce(j,I,d[r+"Score"]||0,!0,async()=>{await F({[i+"Team"]:m,[i+"Score"]:I,["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:H?"finished":P+"-attack",attacker:P,round:D,log:_}),H&&await Ie({...d,[i+"Score"]:I})});return}_.push({type:"pending",text:`⚔️ ${d[i+"Name"]} attaque (${k.total})`}),await F({[i+"Team"]:m,[r+"Team"]:d[r+"Team"],pendingAttack:{...k,players:A,side:i},["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},phase:r+"-defense",log:_})}async function ve(){const m=d[i+"Team"],y=(d["selected_"+i]||[]).map(X=>{const J=(m[X._role]||[]).find(he=>he.cardId===X.cardId)||X,oe=m[X._role]||[],de=oe.findIndex(he=>he.cardId===X.cardId),ye=at(oe.length),ke=de>=0?ye[de]:J._col??1;return{...J,_line:X._role,_col:ke}}),A=Ot(y,d.modifiers[i]||{});q(i,y.map(X=>X.cardId)),y.forEach(X=>{const J=(m[X._role]||[]).find(oe=>oe.cardId===X.cardId);J&&(J.used=!0)}),d["selected_"+i]=[],h();const k=Pt(d.pendingAttack.total,A.total,d.modifiers[i]||{}),_=d.pendingAttack.side,I=k==="attack"||(k==null?void 0:k.goal),j=_==="p1"?"p2":"p1",D=(d.round||0)+1,P=(d.pendingAttack.players||[]).map(X=>({name:X.name,note:me(X,X._line||"ATT"),portrait:Te(X),job:X.job})),B=[...d.log||[]];B.push({type:"duel",isGoal:I,homeScored:I&&_===i,text:I?`⚽ BUT de ${d[_+"Name"]} ! (${d.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${d.pendingAttack.total} vs ${A.total})`,homePlayers:P,aiPlayers:y.map(X=>({name:X.name,note:me(X,X._line||"DEF"),portrait:Te(X),job:X.job})),homeTotal:d.pendingAttack.total,aiTotal:A.total});const H=I?(d[_+"Score"]||0)+1:d[_+"Score"]||0,K={...d,[i+"Team"]:m,[_+"Score"]:H},Q=Ee(K),ue=Q?"finished":j+"-attack",we=async()=>{await F({[i+"Team"]:m,[r+"Team"]:d[r+"Team"],[_+"Score"]:H,["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:ue,attacker:j,round:D,log:B}),(ue==="finished"||Q)&&await Ie({...d,[_+"Score"]:H})};if(I){const X=_===i,J=X?H:d[i+"Score"]||0,oe=X?d[r+"Score"]||0:H;C.add(D),ce(P,J,oe,X,we)}else await we()}function xe(m){return["MIL","ATT"].some(y=>(m[y]||[]).some(A=>!A.used))}function ge(m){return["GK","DEF","MIL","ATT"].some(y=>(m[y]||[]).some(A=>!A.used))}function fe(m){return ge(m)&&!xe(m)}function be(m){const y=d[m+"Team"],A=d[(m==="p1"?"p2":"p1")+"Team"];return!!(xe(y)||!ge(A)&&fe(y))}function Ee(m){const y=["MIL","ATT"].some(B=>(m.p1Team[B]||[]).some(H=>!H.used)),A=["MIL","ATT"].some(B=>(m.p2Team[B]||[]).some(H=>!H.used)),k=ge(m.p1Team),_=ge(m.p2Team);return!y&&!(!_&&k)&&(!A&&!(!k&&_))}function Le(m){const y=m.p1Score||0,A=m.p2Score||0;return y===A?null:y>A?g.home_id:g.away_id}async function Ie(m){try{await L.from("matches").update({status:"finished",winner_id:Le(m),home_score:m.p1Score||0,away_score:m.p2Score||0}).eq("id",o)}catch(y){console.error("[PvP] finishMatch:",y)}}function je(){var _;const m=d[i+"Score"],y=d[r+"Score"],A=m>y,k=m===y;Ve(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":k?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":k?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${m} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(_=document.getElementById("pvp-home"))==null||_.addEventListener("click",()=>{try{L.removeChannel(v)}catch{}Re(e),l("home")})}h()}const Uo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ko(e,t){const{state:o,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Vt(e,t)}async function Vt(e,t){const{state:o,toast:n}=t,{data:c}=await L.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await L.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",o.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(i=>i.seller_id!==o.profile.id),l=s||[];l.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(o.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function p(i){const r=document.getElementById("mkt-content"),u=i==="buy"?a:l;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=i==="mine"?[...u].sort((g,b)=>g.status!==b.status?g.status==="active"?-1:1:new Date(b.listed_at)-new Date(g.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(g=>{var C,G,T,v;const b=(C=g.card)==null?void 0:C.player;if(!b)return"";const d=b.job==="GK"?b.note_g:b.job==="DEF"?b.note_d:b.job==="MIL"?b.note_m:b.note_a,x=Uo[b.rarity],$=(o.profile.credits||0)>=g.price,E=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${E?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Wo(b.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${d}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${b.firstname} ${b.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${b.country_code} · ${((G=b.clubs)==null?void 0:G.encoded_name)||"—"} · ${b.rarity} · ${b.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((T=g.seller)==null?void 0:T.pseudo)||"—"}</div>`:E?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((v=g.buyer)==null?void 0:v.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${$?"":"disabled"} style="margin-top:4px">${$?"Acheter":"Trop cher"}</button>`:E?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>Vo(g.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>Yo(g.dataset.cancel,e,t))})}p("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===i;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),p(i.dataset.tab)})})}async function Vo(e,t,o,n){var u;const{state:c,toast:s}=n,a=t.find(f=>f.id===e);if(!a)return;const l=a.price,p=c.profile.credits||0,i=(u=a.card)==null?void 0:u.player;if(p<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${i==null?void 0:i.firstname} ${i==null?void 0:i.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:f,error:g}=await L.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(g)throw new Error(g.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");c.profile.credits=p-l;const b=document.querySelector("[data-credits]")||document.querySelector(".credits-display");b&&(b.textContent=(p-l).toLocaleString("fr")+" cr."),s(`✅ ${i==null?void 0:i.surname_encoded} ajouté à ta collection !`,"success"),Vt(o,n)}catch(f){s("❌ "+f.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function Yo(e,t,o){const{toast:n}=o,{data:c}=await L.from("market_listings").select("card_id").eq("id",e).single();await L.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await L.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),n("Annonce retirée","success"),Vt(t,o)}function Wo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Xo(e,{state:t,navigate:o,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await L.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((s,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${s.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${a+1}</div>
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
  `}async function Jo(e,{state:t,navigate:o,toast:n}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await L.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),p=(s||[]).filter(r=>r.status==="in_progress");function i(r){const u=r.home_id===c.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const f=r.winner_id===c.id,g=r.home_score===r.away_score&&r.status==="finished",b=r.status!=="finished"?"…":g?"N":f?"V":"D",d=r.status!=="finished"||g?"#888":f?"#1A6B3C":"#c0392b";let x=a[r.mode]||r.mode;r.away_id===null&&!x.startsWith("IA")&&(x="IA");const E=r.home_id===c.id?r.away:r.home;let C;r.away_id===null?C=x:E?C=`${E.club_name||E.pseudo} (${E.pseudo})`:C="Adversaire";let G="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(G=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const T=new Date(r.created_at),v=T.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+T.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),F=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${C}${G}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${v}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${F}</span>
        <span style="background:${d};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${b}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
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

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}qi(Ni);const pe={user:null,profile:null,page:"home",params:{}};function pt(e,t="info",o=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},o))}function Qo(e,t,o=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=o,document.getElementById("modal-overlay").classList.remove("hidden")}function Gt(){document.getElementById("modal-overlay").classList.add("hidden")}async function ut(){if(!pe.user)return;const{data:e}=await L.from("users").select("*").eq("id",pe.user.id).single();e&&(pe.profile=e)}const Yt="mw_theme";function At(){return localStorage.getItem(Yt)||"light"}function Zo(e){var t;localStorage.setItem(Yt,e),qt(e),(t=pe.profile)!=null&&t.id&&L.from("users").update({theme:e}).eq("id",pe.profile.id).then(()=>{})}function qt(e){document.documentElement.setAttribute("data-theme",e)}function wt(e,t={}){pe.page=e,pe.params=t,Bi()}async function Bi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===pe.page)});const t=document.getElementById("nav-credits");t&&pe.profile&&(t.textContent=`💰 ${(pe.profile.credits||0).toLocaleString("fr")}`);const o={state:pe,navigate:wt,toast:pt,openModal:Qo,closeModal:Gt,refreshProfile:ut};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',pe.page){case"home":await ai(e,o);break;case"collection":await Wi(e,o);break;case"decks":await Ct(e,o);break;case"boosters":await uo(e,o);break;case"match":{(pe.params&&pe.params.matchMode||"vs_ai_easy")==="random"?await Oo(e,o):await Ao(e,o);break}case"market":await Ko(e,o);break;case"rankings":await Xo(e,o);break;case"matches":await Jo(e,o);break;default:await ai(e,o)}}function en(){const e=document.getElementById("app"),t=pe.profile;if(!t)return;const o="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${o}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",c=>{c.preventDefault(),wt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>wt("home")),document.getElementById("nav-credits").addEventListener("click",()=>wt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=At()==="dark"?"light":"dark";Zo(c),mi(c)}),mi(At())}function mi(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function tn(){qt(At()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Gt()}),document.getElementById("modal-close").addEventListener("click",Gt);const{data:{session:e}}=await L.auth.getSession();if(!e){xi(),ri(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt});return}pe.user=e.user,await ut(),xi();try{const{data:o}=await L.from("formation_links_overrides").select("formation, links"),n={};(o||[]).forEach(c=>{n[c.formation]=c.links}),Ri(n)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!pe.profile){Oi(document.getElementById("app"),{state:pe,navigate:async()=>{await ut(),St()},toast:pt,refreshProfile:ut});return}const t=Array.isArray(pe.profile.pending_boosters)?pe.profile.pending_boosters:[];if(!pe.profile.onboarding_done&&t.length>0){ko(document.getElementById("app"),{state:pe,navigate:()=>St(),toast:pt,refreshProfile:ut});return}pe.profile.theme&&pe.profile.theme!==At()&&(localStorage.setItem(Yt,pe.profile.theme),qt(pe.profile.theme)),St(),L.auth.onAuthStateChange(async(o,n)=>{o==="SIGNED_OUT"&&(pe.user=null,pe.profile=null,document.getElementById("app").innerHTML="",ri(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt}))})}function on(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function It(){const e=document.getElementById("app");e&&(e.style.height=on()+"px")}window.addEventListener("resize",It);window.addEventListener("orientationchange",()=>setTimeout(It,150));window.visualViewport&&window.visualViewport.addEventListener("resize",It);function St(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",It(),en(),Bi()}function xi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Fi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const o=document.createElement("div");o.id="boot-error",o.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",o.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(o),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}tn().catch(e=>{console.error("Échec du démarrage:",e),Fi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Fi("Le serveur met trop de temps à répondre.")},12e3);
