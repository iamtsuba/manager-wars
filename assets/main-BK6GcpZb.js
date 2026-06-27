import{s as L,F as Rt,h as ht,j as yi,l as Je,i as Oi,k as Pi,b as Hi}from"./formation-links-CEzN0rcz.js";function ai(e,{navigate:t,toast:o}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,l=document.getElementById("login-error");if(l.textContent="",!r||!c){l.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:s}=await L.auth.signInWithPassword({email:r,password:c});if(a.textContent="Se connecter",a.disabled=!1,s){l.textContent=s.message.includes("Invalid")?"Email ou mot de passe incorrect.":s.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,l=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!r||!c||!l){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==l){a.textContent="Les mots de passe ne correspondent pas.";return}const s=document.getElementById("reg-btn");s.textContent="Création…",s.disabled=!0;const{error:p}=await L.auth.signUp({email:r,password:c});if(s.textContent="Créer mon compte",s.disabled=!1,p){a.textContent=p.message;return}o("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function Ui(e,{state:t,navigate:o,toast:r,refreshProfile:c}){let l="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${l}">
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
  `;function s(){var y;const i=document.getElementById("logo-preview"),n=document.getElementById("logo-initials"),u=((y=document.getElementById("setup-club"))==null?void 0:y.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();i&&(i.style.background=a,i.style.borderColor=l),n&&(n.textContent=g,n.style.color=l)}document.getElementById("color1").addEventListener("input",i=>{l=i.target.value,document.getElementById("swatch1").style.background=l,s()}),document.getElementById("color2").addEventListener("input",i=>{a=i.target.value,document.getElementById("swatch2").style.background=a,s()});function p(i){document.querySelectorAll(".setup-step").forEach(n=>n.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("step1-error");if(n.textContent="",i.length<3){n.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await L.from("users").select("id").eq("pseudo",i).maybeSingle();if(u){n.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),n=document.getElementById("step2-error");if(n.textContent="",i.length<2){n.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await L.from("users").select("id").eq("club_name",i).maybeSingle();if(u){n.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await L.from("users").insert({id:t.user.id,pseudo:i,club_name:n,club_color1:l,club_color2:a,credits:1e4});if(g)throw g;await Ki(t.user.id),await c(),r(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Ki(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await L.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(o){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",o)}}const Vi="2026.06.27-0810";async function si(e,{state:t,navigate:o,toast:r}){var l,a;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Vi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",p=>{p.preventDefault(),o(s.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>o("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>o("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.classList.add("tapped"),setTimeout(()=>s.classList.remove("tapped"),200);const p=s.dataset.action;if(p==="match-ai"){Yi(o);return}if(p==="match-random"){o("match",{matchMode:"random"});return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await L.auth.signOut(),window.location.reload()}))}function Yi(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2000",o.innerHTML=`
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
  `,document.body.appendChild(o);const r=()=>o.remove();document.getElementById("diff-cancel").addEventListener("click",r),o.addEventListener("click",c=>{c.target===o&&r()}),o.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{r(),e("match",{matchMode:c.dataset.mode})})})}const Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function me(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const li=["ATT","MIL","DEF","GK"];function hi(e){let t=0;const o=e.length;for(let r=0;r<o;r++)for(let c=r+1;c<o;c++){const l=e[r],a=e[c];if(!l||!a)continue;const s=l._col!=null&&a._col!=null&&l._col===a._col,p=l._col!=null&&a._col!=null&&Math.abs(l._col-a._col)===1,i=li.indexOf(l._line||l.job),n=li.indexOf(a._line||a.job),u=Math.abs(i-n)===1;if(!((l._line||l.job)===(a._line||a.job)&&p||s&&u))continue;const y=l.country_code&&a.country_code&&l.country_code===a.country_code,d=l.club_id&&a.club_id&&l.club_id===a.club_id;y&&d?t+=2:(y||d)&&(t+=1)}return t}function Ot(e,t={}){const o=e.reduce((l,a)=>{const s=a._line||a.job;return l+(Number(s==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),r=hi(e);let c=o+r;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:o,links:r,total:Math.max(0,c)}}function Pt(e,t={}){const o=e.reduce((l,a)=>{const s=a._line||a.job;let p=0;return s==="GK"?p=Number(a.note_g)||0:s==="MIL"?p=Number(a.note_m)||0:p=Number(a.note_d)||0,l+p+(a.boost||0)},0),r=hi(e);let c=o+r;return t.stolenNote&&(c-=t.stolenNote),{base:o,links:r,total:Math.max(0,c)}}function Ht(e,t,o={}){return o.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function bi(e,t,o="easy"){const r=e.filter(a=>!a.used);if(!r.length)return[];const c=[...r].sort((a,s)=>{const p=t==="attack"?me(a,"ATT"):a._line==="GK"?me(a,"GK"):me(a,"DEF");return(t==="attack"?me(s,"ATT"):s._line==="GK"?me(s,"GK"):me(s,"DEF"))-p});let l=o==="easy"?1+Math.floor(Math.random()*2):o==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function Wi(e,t){const o={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(o[e]||o.vs_ai_easy)[t]||0}const vi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ft={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},bt=["GK","DEF","MIL","ATT"],Xi=["Tous","GK","DEF","MIL","ATT"],Ji={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ut={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function wi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function mt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Mt(e,t=""){var u,f;const o=e.player;if(!o)return"";const r=o.job||"ATT",c=ft[r],l=vi[o.rarity]||"#ccc",a=mt(o,r),s=o.job2?mt(o,o.job2):null,p=o.job2?ft[o.job2]:null,i=wi(o),n=Ut[o.country_code]||o.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${p}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(u=o.clubs)!=null&&u.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=o.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function di(e){const t=e.job||"ATT",o=mt(e,t),r=Ut[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${r}</div>
      </div>
    </div>
  </div>`}async function Qi(e,t){const{state:o,navigate:r,toast:c,openModal:l,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await L.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:p}=await L.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(s||[]).filter(z=>z.card_type==="player"&&z.player),n=(s||[]).filter(z=>z.card_type==="game_changer"),u=(s||[]).filter(z=>z.card_type==="formation"),{data:f}=await L.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(f||[]).forEach(z=>{g[z.name]=z});const y=Object.keys(Rt),d=Object.keys(Ce),x={};i.forEach(z=>{const S=z.player.id;x[S]=(x[S]||0)+1}),new Set(Object.keys(x).map(z=>String(z)));const v=new Set(u.map(z=>z.formation)),b=new Set(n.map(z=>z.gc_type));let I="player",q="Tous",k="",w=!1;function F(){return[...i].sort((z,S)=>{const N=bt.indexOf(z.player.job),C=bt.indexOf(S.player.job);return N!==C?N-C:(z.player.surname_encoded||"").localeCompare(S.player.surname_encoded||"")})}function Z(){return[...p||[]].sort((z,S)=>{const N=bt.indexOf(z.job),C=bt.indexOf(S.job);return N!==C?N-C:(z.surname_encoded||"").localeCompare(S.surname_encoded||"")})}function ne(){return F().filter(z=>{const S=z.player,N=q==="Tous"||S.job===q,C=!k||`${S.firstname} ${S.surname_encoded}`.toLowerCase().includes(k);return N&&C})}function ee(){return Z().filter(z=>{const S=q==="Tous"||z.job===q,N=!k||`${z.firstname} ${z.surname_encoded}`.toLowerCase().includes(k);return S&&N})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="player"?"var(--green)":"transparent"};
        color:${I==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="formation"?"var(--green)":"transparent"};
        color:${I==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="gc"?"var(--green)":"transparent"};
        color:${I==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function $(){const z=document.getElementById("col-filters");z&&(I==="player"?(z.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${k}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Xi.map(S=>`
            <button class="filter-btn" data-job="${S}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${S===q?"var(--green)":"var(--gray-200)"};
                background:${S===q?"var(--green)":"#fff"};
                color:${S===q?"#fff":"var(--gray-600)"}">
              ${S}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${w?"var(--yellow)":"var(--gray-200)"};
              background:${w?"var(--yellow)":"#fff"};
              color:${w?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${w?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",S=>{k=S.target.value.toLowerCase(),j()}),e.querySelectorAll(".filter-btn").forEach(S=>{S.addEventListener("click",()=>{q=S.dataset.job,$(),j()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{w=!w,$(),j()})):(z.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${w?"var(--yellow)":"var(--gray-200)"};
              background:${w?"var(--yellow)":"#fff"};
              color:${w?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${w?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{w=!w,$(),j()})))}function j(){const z=document.getElementById("col-grid");z&&(I==="player"?ce(z):I==="formation"?se(z):ae(z))}function K(z,S,N,C,R){R=R||"#7a28b8";const ie=document.getElementById("col-grid"),Y=document.getElementById("col-big");if(!ie||!Y)return;var ve=0;function xe(){Y.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+S(z[ve])+"</div>";var ge=Y.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ge&&ge.addEventListener("click",function(){C(z[ve])}),requestAnimationFrame(function(){var fe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!fe||!Y)){var be=Y.clientHeight-8,Ee=Y.clientWidth-24,Le=fe.offsetHeight,Ie=fe.offsetWidth;if(Le>0&&Ie>0&&be>40){var je=Math.min(be/Le,Ee/Ie,1);fe.style.transform="scale("+je.toFixed(3)+")",fe.style.transformOrigin="top center"}}}),ie.innerHTML=z.map(function(fe,be){return'<div class="col-mini-item" data-idx="'+be+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(be===ve?R:"transparent")+';transition:border-color .15s;overflow:hidden">'+N(fe,be===ve)+"</div>"}).join(""),ie.querySelectorAll(".col-mini-item").forEach(function(fe){fe.addEventListener("click",function(){ve=Number(fe.dataset.idx),xe(),fe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}xe()}function _(z){var S=.54,N=Math.round(140*S),C=Math.round(310*S),R;if(!z||z._fake){var ie=z?z.player:null;if(!ie)return"";R=di(ie)}else R=Mt(z,"");return'<div style="width:'+N+"px;height:"+C+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+S+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+R+"</div></div>"}function U(z,S,N){S=S||100,N=N||140;var C=ht[z]||{},R={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ie=Math.max(3,Math.round(S*.06)),Y=Object.entries(C).map(function(xe){var ge=xe[0],fe=xe[1],be=ge.replace(/\d+$/,""),Ee=R[be]||"#888",Le=Math.round(fe.x*S),Ie=Math.round(fe.y*N);return'<circle cx="'+Le+'" cy="'+Ie+'" r="'+ie+'" fill="'+Ee+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(S/50));return'<svg viewBox="0 0 '+S+" "+N+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+S+'" height="'+N+'" fill="#1A6B3C"/><rect x="'+Math.round(S*.2)+'" y="'+Math.round(N*.02)+'" width="'+Math.round(S*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(N*.5)+'" x2="'+S+'" y2="'+Math.round(N*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(S*.5)+'" cy="'+Math.round(N*.5)+'" rx="'+Math.round(S*.18)+'" ry="'+Math.round(N*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(S*.2)+'" y="'+Math.round(N*.82)+'" width="'+Math.round(S*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+Y+"</svg>"}function W(z,S,N){var C=N>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+N+"</div>":"",R=S?'data-form-id="'+S.id+'"':"",ie=z.length>7?14:z.length>5?16:19,Y=!!S;return"<div "+R+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(Y?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(Y?"":"filter:grayscale(1);opacity:0.5")+'">'+C+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(Y?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ie+"px;font-weight:900;color:"+(Y?"#1A6B3C":"#aaa")+';line-height:1">'+z+'</div></div><div style="flex:1;overflow:hidden;background:'+(Y?"#1A6B3C":"#ccc")+'">'+U(z,140,220)+"</div></div>"}function re(z,S){var N=.54,C=Math.round(140*N),R=Math.round(305*N),ie=Math.round(R*.22),Y=R-ie,ve=z.length>7?5:7,xe=U(z,C,Y),ge=S?"1.5px solid #2a7a40":"1px solid #ddd",fe=S?"":"filter:grayscale(1);opacity:0.45;",be=S?"#1A6B3C":"#bbb",Ee="#fff";return'<div style="width:'+C+"px;height:"+R+"px;border-radius:6px;border:"+ge+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+fe+'"><div style="height:'+ie+"px;background:"+be+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+Ee+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(C-4)+'px">'+z+'</span></div><div style="height:'+Y+'px;overflow:hidden;flex-shrink:0">'+xe+"</div></div>"}function ce(z){if(w){const S=ee();if(!S.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const N=S.map(C=>i.find(R=>R.player.id===C.id)||{_fake:!0,player:C,id:"fake-"+C.id});K(N,C=>C._fake?di(C.player):Mt(C,""),C=>C._fake?_({player:C.player,id:"x",_fake:!0}):_(C),C=>{C._fake||ci(C,i,x,t)},"#1A6B3C")}else{const S=ne();if(!S.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const N={},C=[];S.forEach(R=>{N[R.player.id]||(N[R.player.id]=!0,C.push(R))}),K(C,R=>{const ie=x[R.player.id]||1,Y=ie>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ie}</div>`:"",xe=i.filter(ge=>ge.player.id===R.player.id&&ge.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Mt(R,Y+xe)},R=>_(R),R=>ci(R,i,x,t),"#1A6B3C")}}function se(z){const S=w?y:[...v];if(!S.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const N=S.map(C=>({formation:C,card:u.find(R=>R.formation===C)||null,owned:v.has(C)}));K(N,({formation:C,card:R,owned:ie})=>W(C,ie?R:null,ie?u.filter(Y=>Y.formation===C).length:0),({formation:C,owned:R})=>re(C,R),({card:C,owned:R})=>{R&&C&&eo(C,u,t,l)},"#1A6B3C")}function ae(z){const S=Object.keys(g),N=w?S.length?S:d:[...b];if(!N.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const C=N.map(R=>({type:R,gc:Ce[R]||{icon:"⚡",desc:""},def:g[R]||null,owned:b.has(R),card:n.find(ie=>ie.gc_type===R)||null}));K(C,({type:R,gc:ie,def:Y,owned:ve,card:xe})=>{const ge=ve?n.filter(T=>T.gc_type===R).length:0,fe=ge>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ge}</div>`:"",be=(Y==null?void 0:Y.gc_type)==="ultra_game_changer",Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#b06ce0",light_blue:"#00d4ef"},Ie=Ee[Y==null?void 0:Y.color]||Ee.purple,je=Le[Y==null?void 0:Y.color]||Le.purple,m=(Y==null?void 0:Y.effect)||ie.desc||"",h=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null;return ve&&xe?`<div data-gc-id="${xe.id}" data-gc-type="${R}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${je};background:${Ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${je}66;cursor:pointer">
          ${fe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${R.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${R}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${be?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${h?`<img src="${h}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ie.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${m.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${R}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ie.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:R,gc:ie,def:Y,owned:ve})=>ve?(()=>{const xe=Math.round(75.60000000000001),ge=Math.round(310*.54),fe=Math.round(ge*.65),be=Math.round(ge*.18),Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#9b59b6",light_blue:"#00bcd4"},Ie=Ee[Y==null?void 0:Y.color]||Ee.purple,je=Le[Y==null?void 0:Y.color]||Le.purple,m=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null;return`<div style="width:${xe}px;height:${ge}px;border-radius:8px;background:${Ie};border:1px solid ${je};display:flex;flex-direction:column;overflow:hidden"><div style="height:${be}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${xe-6}px">${R}</span></div><div style="height:${fe}px;display:flex;align-items:center;justify-content:center">${m?`<img src="${m}" style="max-width:${xe-8}px;max-height:${fe-4}px;object-fit:contain">`:`<span style="font-size:24px">${ie.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((Y==null?void 0:Y.effect)||ie.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const xe=Math.round(75.60000000000001),ge=Math.round(310*.54);return`<div style="width:${xe}px;height:${ge}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ie.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${R}</span></div>`})(),({type:R,owned:ie,def:Y})=>{ie&&Zi(R,Y,l)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(z=>{z.addEventListener("click",()=>{I=z.dataset.tab,q="Tous",k="",w=!1,e.querySelectorAll(".col-tab-btn").forEach(S=>{const N=S.dataset.tab===I;S.style.borderBottomColor=N?"var(--green)":"transparent",S.style.color=N?"var(--green)":"var(--gray-600)"}),$(),j()})}),$(),j()}function Zi(e,t,o){const r=Ce[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[t==null?void 0:t.color]||l.purple,p=a[t==null?void 0:t.color]||a.purple,i=(t==null?void 0:t.name)||e,n=(t==null?void 0:t.effect)||r.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;o("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${r.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${n}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const dt=1e3;function eo(e,t,o,r){var d,x,v;const{state:c,toast:l,closeModal:a,navigate:s,refreshProfile:p}=o,i=e.formation,n={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const b=ht[i]||{},I=Rt[i]||[],q=290,k=360,w=20;function F(ne){const ee=b[ne];return ee?{x:ee.x*q,y:ee.y*k}:null}let Z=`<svg width="${q}" height="${k}" viewBox="0 0 ${q} ${k}" xmlns="http://www.w3.org/2000/svg">`;for(const[ne,ee]of I){const $=F(ne),j=F(ee);!$||!j||(Z+=`<line x1="${$.x}" y1="${$.y}" x2="${j.x}" y2="${j.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ne of Object.keys(b)){const ee=F(ne);if(!ee)continue;const $=ne.replace(/\d+/,""),j=n[$]||"#555";Z+=`<circle cx="${ee.x}" cy="${ee.y}" r="${w}" fill="${j}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,Z+=`<text x="${ee.x}" y="${ee.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${$}</text>`}return Z+="</svg>",Z}const f=t.filter(b=>b.formation===i),g=f.length,y=!e.is_for_sale;r(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${y?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(d=document.getElementById("direct-sell-form-btn"))==null||d.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${dt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=f.find(q=>!q.is_for_sale)||f[0];if(!b){l("Aucune carte à vendre","error");return}const{error:I}=await L.from("cards").delete().eq("id",b.id);if(I){l(I.message,"error");return}await L.from("users").update({credits:(c.profile.credits||0)+dt}).eq("id",c.profile.id),await p(),l(`+${dt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(x=document.getElementById("market-sell-form-btn"))==null||x.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){l("Prix invalide","error");return}await L.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await L.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:b}),l("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(v=document.getElementById("cancel-sell-form-btn"))==null||v.addEventListener("click",async()=>{await L.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await L.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),a(),s("collection")})}async function ci(e,t,o,r){var w,F,Z,ne,ee,$;const{state:c,toast:l,openModal:a,closeModal:s,navigate:p,refreshProfile:i}=r,n=e.player,u=t.filter(j=>j.player.id===n.id),f=u.length,g=Ji[n.rarity]||1e3,y=n.rarity!=="legende",d=wi(n);mt(n,n.job),n.job2&&mt(n,n.job2),ft[n.job],n.job2&&ft[n.job2];const x=vi[n.rarity]||"#ccc",v=Ut[n.country_code]||n.country_code||"",b=u.map(j=>j.id);let I={};if(b.length){const{data:j}=await L.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",b).order("transferred_at",{ascending:!0});(j||[]).forEach(K=>{I[K.card_id]||(I[K.card_id]=[]),I[K.card_id].push(K)})}const q=j=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${j.club_name} <span style="color:var(--gray-600)">(${j.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${j.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${j.source==="booster"?"Booster":j.price?j.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,k=b.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${f>1?`(${f} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${u.map((j,K)=>{const _=I[j.id]||[];return _.length?`
            <div>
              ${f>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${K+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${_.map(q).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";a(`${n.firstname} ${n.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${x};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;align-items:center;justify-content:center">
            <div style="position:absolute;top:26px;width:100%;height:28px;background:rgba(0,0,0,0.06)"></div>
            <div style="position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:2px">
              ${[["GK",n.note_g],["DEF",n.note_d],["MIL",n.note_m],["ATT",n.note_a]].map(([j,K])=>{const _=ft[j],U=Number(K)||0;return`<svg width="34" height="33" viewBox="0 0 34 33" style="display:block">
                  <polygon points="17,2 21,12 32,12 23,19 26,30 17,23 8,30 11,19 2,12 13,12" fill="${_}" stroke="white" stroke-width="1.5"/>
                  <text x="17" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="white" font-family="Arial Black,Arial">${U}</text>
                </svg>`}).join("")}
            </div>
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${v}</div>
            ${(w=n.clubs)!=null&&w.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((F=n.clubs)==null?void 0:F.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${x}">${n.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${n.job}${n.job2?" / "+n.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${n.note_g||0}</b></span>
            <span>DEF <b>${n.note_d||0}</b></span>
            <span>MIL <b>${n.note_m||0}</b></span>
            <span>ATT <b>${n.note_a||0}</b></span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${k}

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
    ${y&&!e.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${n.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Z=document.getElementById("close-detail"))==null||Z.addEventListener("click",s),(ne=document.getElementById("direct-sell-btn"))==null||ne.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${n.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const j=u.find(_=>!_.is_for_sale)||u[0];if(!j){l("Aucune carte à vendre","error");return}const{error:K}=await L.from("cards").delete().eq("id",j.id);if(K){l(K.message,"error");return}await L.from("users").update({credits:(c.profile.credits||0)+g}).eq("id",c.profile.id),await i(),l(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),p("collection")}),(ee=document.getElementById("market-sell-btn"))==null||ee.addEventListener("click",async()=>{const j=parseInt(document.getElementById("sell-price").value);if(!j||j<1){l("Prix invalide","error");return}await L.from("cards").update({is_for_sale:!0,sale_price:j}).eq("id",e.id),await L.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:j}),l("Carte mise en vente sur le marché !","success"),s(),p("collection")}),($=document.getElementById("cancel-sell-btn"))==null||$.addEventListener("click",async()=>{await L.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await L.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),p("collection")})}const _t={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},We={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function $i(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _i(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(o=e==null?void 0:e.clubs)!=null&&o.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function to(e,t=44,o=58){var g;const r=e?Tt(e):null,c=e?_i(e):null,l=$i(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",s=We[a]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,n=Math.round(o*.19),u=Math.round(o*.25),f=o-n-u;return e?`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${p};background:${s};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${o}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Ct(e,t){const{state:o,navigate:r,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await L.from("decks").select("id,name,formation_card_id").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(l==null?void 0:l.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(l==null?void 0:l.length)>0?l.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!a)return;const{data:s,error:p}=await L.from("decks").insert({owner_id:o.profile.id,name:a}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),pi(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>pi(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:p}=await L.from("decks").update({name:s}).eq("id",a.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),Ct(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await L.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await L.from("decks").delete().eq("id",a.dataset.delete);if(s){c(s.message,"error");return}c("Deck supprimé.","success"),Ct(e,t)})})}async function pi(e,t,o){const{state:r,toast:c}=o;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await L.from("decks").select("*").eq("id",e).single(),{data:a}=await L.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),s=(a||[]).filter(g=>g.card_type==="player"&&g.player),p=(a||[]).filter(g=>g.card_type==="formation"),i=p.map(g=>g.formation).filter(Boolean),{data:n}=await L.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=l.formation||"4-4-2";i.length>0&&!i.includes(u)&&(u=i[0]);const f={deckId:e,name:l.name,formation:u,formationCardId:l.formation_card_id,slots:{},subs:[],playerCards:s,formationCards:p,availableFormations:i};(n||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),ot(t,f,o)}function ot(e,t,o){var p;const{navigate:r}=o;_t[t.formation];const c=ui(t.formation),l=c.filter(i=>t.slots[i]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(_t),s=t.subs.map(i=>t.playerCards.find(n=>n.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
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
        ${s.map(i=>{const n=i.player;return`<div style="position:relative;flex-shrink:0">
            ${to(n,44,58)}
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
  </div>`,io(e,t,c,o),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const n=ui(t.formation),u={};n.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,ot(e,t,o)}),document.getElementById("save-deck").addEventListener("click",()=>ro(t,o)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(n=>n!==i.dataset.removeSub),ot(e,t,o)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{no(t,e,o)})}function io(e,t,o,r){const c=e.querySelector("#deck-field");if(!c)return;const l=ht[t.formation]||{},a=yi(t.formation)||[],s={};for(const v of o){const b=t.slots[v],I=b?t.playerCards.find(q=>q.id===b):null;s[v]=I?I.player:null}const p=300,i=300,n=48,u=64,f=13,g=16,y=38;function d(v){const b=l[v];return b?{x:b.x*p,y:b.y*i}:null}let x="";for(const[v,b]of a){const I=d(v),q=d(b);if(!I||!q)continue;const k=s[v]?{...s[v],club_id:s[v].club_id,country_code:s[v].country_code,rarity:s[v].rarity}:null,w=s[b]?{...s[b],club_id:s[b].club_id,country_code:s[b].country_code,rarity:s[b].rarity}:null,F=Je(k,w);F==="#ff3333"||F==="#cc2222"?x+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(x+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}" stroke="${F}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,x+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const v of o){const b=d(v);if(!b)continue;const I=s[v],q=v.replace(/\d+/,""),k=We[q]||"#555",w=(b.x-n/2).toFixed(1),F=(b.y-u/2).toFixed(1),Z={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[I==null?void 0:I.rarity]||"#aaa";if(I){const ne=Tt(I),ee=_i(I),$=$i(I.country_code),j=Number(q==="GK"?I.note_g:q==="DEF"?I.note_d:q==="MIL"?I.note_m:I.note_a)||0,K=u-f-g;x+=`<defs><clipPath id="dcp-${v}"><rect x="${w}" y="${(b.y-u/2+f).toFixed(1)}" width="${n}" height="${K}"/></clipPath></defs>`,x+=`<rect x="${w}" y="${F}" width="${n}" height="${u}" rx="5" fill="${k}"/>`,ne&&(x+=`<image href="${ne}" x="${w}" y="${(b.y-u/2+f).toFixed(1)}" width="${n}" height="${K}" clip-path="url(#dcp-${v})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${w}" y="${F}" width="${n}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,x+=`<text x="${b.x.toFixed(1)}" y="${(b.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(I.surname_encoded||"").slice(0,9)}</text>`;const _=(b.y+u/2-g).toFixed(1);x+=`<rect x="${w}" y="${_}" width="${n}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,$&&(x+=`<image href="${$}" x="${(b.x-21).toFixed(1)}" y="${(b.y+u/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),x+=`<text x="${b.x.toFixed(1)}" y="${(b.y+u/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${j}</text>`,ee&&(x+=`<image href="${ee}" x="${(b.x+n/2-14).toFixed(1)}" y="${(b.y+u/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),x+=`<rect x="${w}" y="${F}" width="${n}" height="${u}" rx="5" fill="none" stroke="${Z}" stroke-width="2"/>`}else x+=`<rect x="${w}" y="${F}" width="${n}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,x+=`<text x="${b.x.toFixed(1)}" y="${b.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,x+=`<text x="${b.x.toFixed(1)}" y="${(b.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${q}</text>`;x+=`<rect x="${w}" y="${F}" width="${n}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${v}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-y} ${-y} ${p+y*2} ${i+y*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${x}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(v=>{v.addEventListener("click",()=>oo(v.dataset.pos,t,e,r))})}function oo(e,t,o,r){var f,g,y;const{openModal:c,closeModal:l}=r,a=e.replace(/\d+/,""),s=t.slots[e],p=s?t.playerCards.find(d=>d.id===s):null;(f=p==null?void 0:p.player)==null||f.id;const i=new Set;Object.entries(t.slots).forEach(([d,x])=>{var b;if(d===e||!x)return;const v=t.playerCards.find(I=>I.id===x);(b=v==null?void 0:v.player)!=null&&b.id&&i.add(v.player.id)}),t.subs.forEach(d=>{var v;const x=t.playerCards.find(b=>b.id===d);(v=x==null?void 0:x.player)!=null&&v.id&&i.add(x.player.id)});const n=new Set,u=t.playerCards.filter(d=>{const x=d.player;return!(x.job===a||x.job2===a)||i.has(x.id)||n.has(x.id)?!1:(n.add(x.id),!0)});u.sort((d,x)=>{const v=a==="GK"?d.player.note_g:a==="DEF"?d.player.note_d:a==="MIL"?d.player.note_m:d.player.note_a;return(a==="GK"?x.player.note_g:a==="DEF"?x.player.note_d:a==="MIL"?x.player.note_m:x.player.note_a)-v}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(d=>{var q,k;const x=d.player,v=a==="GK"?x.note_g:a==="DEF"?x.note_d:a==="MIL"?x.note_m:x.note_a,b=Tt(x),I={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[x.rarity];return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${We[a]}">
            ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${We[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${x.firstname} ${x.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${x.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${x.country_code}">
              ${(q=x.clubs)!=null&&q.logo_url?`<img src="${x.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((k=x.clubs)==null?void 0:k.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${x.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${We[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${I};flex-shrink:0">
            ${v}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",l),(y=document.getElementById("remove-player"))==null||y.addEventListener("click",()=>{delete t.slots[e],l(),ot(o,t,r)}),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{t.slots[e]=d.dataset.cardId,l(),ot(o,t,r)})})}function no(e,t,o){var p;const{openModal:r,closeModal:c}=o,l=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var u;const n=e.playerCards.find(f=>f.id===i);(u=n==null?void 0:n.player)!=null&&u.id&&l.add(n.player.id)}),e.subs.forEach(i=>{var u;const n=e.playerCards.find(f=>f.id===i);(u=n==null?void 0:n.player)!=null&&u.id&&l.add(n.player.id)});const a=new Set,s=e.playerCards.filter(i=>{var n,u,f;return l.has((n=i.player)==null?void 0:n.id)||a.has((u=i.player)==null?void 0:u.id)?!1:(a.add((f=i.player)==null?void 0:f.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(i=>{var g;const n=i.player,u=Tt(n),f=n.job==="GK"?n.note_g:n.job==="DEF"?n.note_d:n.job==="MIL"?n.note_m:n.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${We[n.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${n.firstname} ${n.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${n.job} · ${n.country_code} · ${((g=n.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${We[n.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),ot(t,e,o)})})}async function ro(e,t){const{state:o,toast:r,navigate:c}=t,l=e.formationCards.find(p=>p.formation===e.formation),a=(l==null?void 0:l.id)||e.formationCardId;await L.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await L.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([p,i],n)=>{s.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:n})}),e.subs.forEach((p,i)=>{s.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),s.length>0){const{error:p}=await L.from("deck_cards").insert(s);if(p){r(p.message,"error");return}}r("Deck enregistré ✅","success"),c("decks")}function ui(e){const t=_t[e]||_t["4-4-2"],o=["GK1"];for(let r=1;r<=t.DEF;r++)o.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)o.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)o.push(`ATT${r}`);return o}async function ki(){const{data:e}=await L.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await L.from("booster_drop_rates").select("*").in("booster_id",e.map(o=>o.id)).order("sort_order");return e.map(o=>({...o,rates:(t||[]).filter(r=>r.booster_id===o.id)}))}function ao(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,c)=>r+Number(c.percentage),0);let o=Math.random()*t;for(const r of e)if(o-=Number(r.percentage),o<=0)return r;return e[e.length-1]}const Ei=()=>Object.keys(ht),so=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],jt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function lo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}const fi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},co={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},po={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function gi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function uo(e){var n,u;const t=e.player;if(!t)return"";const o=t.job||"ATT",r=fi[o],c=co[t.rarity]||"#ccc",l=gi(t,o),a=t.job2?gi(t,t.job2):null,s=t.job2?fi[t.job2]:null,p=lo(t),i=po[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${r}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${r}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        ${a!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${s}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(n=t.clubs)!=null&&n.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ai(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const o=((c=Object.entries(t).sort((l,a)=>a[1]-l[1])[0])==null?void 0:c[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:o,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function fo(e,{state:t,navigate:o,toast:r}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await ki()).map(Ai)}catch(s){console.warn("Erreur chargement boosters DB, fallback hardcodé",s)}l.length||(l=so.map(s=>({...s,rates:[],isPub:s.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const p=l.find(i=>i.id===s.dataset.booster);if(p){s.style.opacity="0.5",s.style.pointerEvents="none";try{await go(p,{state:t,toast:r,navigate:o,container:e})}catch(i){r(i.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",p=>{p.stopPropagation();const i=l.find(n=>n.id===s.dataset.boosterId);ho(i)})})}async function go(e,{state:t,toast:o,navigate:r,container:c}){var n;if(e.cost>0&&t.profile.credits<e.cost){o("Crédits insuffisants","error");return}if(e.isPub)try{await wo()}catch(u){o(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await L.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((l||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),s=new Set((l||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let p=[];if((n=e.rates)!=null&&n.length)p=await Bt(t.profile,e);else{const u=e.type||"player";u==="player"?p=await Ti(t.profile,e.cardCount,e.cost):u==="game_changer"?p=await Ii(t.profile,e.cardCount,e.cost):u==="formation"?p=await Li(t.profile,e.cost):p=await Bt(t.profile,e)}p.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=s.has(u.formation))});const{data:i}=await L.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Mi(p,e,r)}function mo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Pe(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function xo(e,t){let o;switch(t){case"legende":o=e.filter(r=>r.rarity==="legende"),o.length||(o=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),o.length||(o=e.filter(r=>Pe(r)>=6));break;case"special":o=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),o.length||(o=e.filter(r=>Pe(r)>=6));break;case"normal_high":o=e.filter(r=>r.rarity==="normal"&&Pe(r)>=6),o.length||(o=e.filter(r=>Pe(r)>=6));break;default:o=e.filter(r=>r.rarity==="normal"&&Pe(r)>=1&&Pe(r)<=5),o.length||(o=e.filter(r=>r.rarity==="normal"));break}return o.length||(o=e),o[Math.floor(Math.random()*o.length)]}async function Bt(e,t){if(t.cost>0){const{error:s}=await L.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(s)throw s}const{data:o}=await L.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),r=new Set((o||[]).filter(s=>s.card_type==="player").map(s=>s.player_id)),c=new Set((o||[]).filter(s=>s.card_type==="formation").map(s=>s.formation)),l=new Set,a=[];for(let s=0;s<(t.cardCount||5);s++){const p=ao(t.rates);if(p){if(p.card_type==="player"){const i=b=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[b]||b,n=p.rarity?i(p.rarity):null;let u=L.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n&&(u=u.eq("rarity",n));const{data:f}=await u;let g=f||[];if((p.note_min||p.note_max)&&(g=g.filter(b=>{const I=Math.max(Number(b.note_g)||0,Number(b.note_d)||0,Number(b.note_m)||0,Number(b.note_a)||0);return(!p.note_min||I>=p.note_min)&&(!p.note_max||I<=p.note_max)})),g.length||(p.note_min||p.note_max?(g=f||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):g=f||[]),!g.length)continue;let y=g.filter(b=>!l.has(b.id));y.length||(y=g);const d=y[Math.floor(Math.random()*y.length)];l.add(d.id);const x=r.has(d.id),{data:v}=await L.from("cards").insert({owner_id:e.id,player_id:d.id,card_type:"player"}).select().single();v&&(a.push({...v,player:d,isDuplicate:x}),L.rpc("record_transfer",{p_card_id:v.id,p_player_id:d.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:i}=await L.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),n=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],f=n[Math.floor(Math.random()*n.length)].name,{data:g}=await L.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:f}).select().single();g&&a.push(g)}else if(p.card_type==="formation"){const i=Ei(),n=i[Math.floor(Math.random()*i.length)],u=c.has(n),{data:f}=await L.from("cards").insert({owner_id:e.id,card_type:"formation",formation:n}).select();f!=null&&f[0]&&a.push({...f[0],isDuplicate:u})}}}return a}async function Ti(e,t,o){if(o>0){const{error:i}=await L.from("users").update({credits:e.credits-o}).eq("id",e.id);if(i)throw i}const{data:r}=await L.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=r.filter(i=>i.job==="GK"),l=r.filter(i=>i.job!=="GK"),a=!e.first_booster_opened&&c.length>0,s=[];for(let i=0;i<t;i++){const n=i===0&&a?c:i===0?l:r,u=mo(),f=xo(n,u);f&&s.push(f)}a&&await L.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await L.from("cards").insert(s.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,n)=>{L.rpc("record_transfer",{p_card_id:i.id,p_player_id:s[n].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((i,n)=>({...p[n],player:i}))}async function Ii(e,t,o){const{error:r}=await L.from("users").update({credits:e.credits-o}).eq("id",e.id);if(r)throw r;const{data:c}=await L.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(jt).map(n=>({name:n,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const n=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:n.name,gc_definition_id:n.id||null}}),{data:s,error:p}=await L.from("cards").insert(a).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(s||[]).map(n=>{const u=c==null?void 0:c.find(f=>f.name===n.gc_type||f.id===n.gc_definition_id);return{...n,_gcDef:u||null}})}async function Li(e,t){const{error:o}=await L.from("users").update({credits:e.credits-t}).eq("id",e.id);if(o)throw o;const{data:r}=await L.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((r||[]).map(n=>n.formation)),l=Ei(),a=l[Math.floor(Math.random()*l.length)],s=c.has(a),{data:p,error:i}=await L.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(p||[]).map(n=>({...n,isDuplicate:s}))}function Mi(e,t,o,r=null){var j,K;if(!e||e.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(j=_.querySelector("#anim-close-err"))==null||j.addEventListener("click",()=>_.remove());return}e=[...e].sort((_,U)=>{const W=_.player?Pe(_.player):-1;return(U.player?Pe(U.player):-1)-W});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let p=!1;const i=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function n(_){l||(p=!0,s.style.opacity="1",u(_))}function u(_){if(!p||l)return;const U=a.getBoundingClientRect(),W=i(_)-U.left,re=Math.max(0,Math.min(1,W/U.width));s.style.width=re*U.width+"px",re>=.82&&g()}function f(){l||(p=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{l||(s.style.transition="")},220))}function g(){var U;if(l)return;l=!0,p=!1,s.style.width="100%",s.style.opacity="1",(U=document.getElementById("cut-flash"))==null||U.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",v(0)},620)}a.addEventListener("pointerdown",n),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),a.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let y=0,d=!1;const x=new Set;function v(_){y=_,document.getElementById("reveal-phase").style.display="flex",b(),I(_,0),Z()}function b(){const _=document.getElementById("card-dots");_&&(_.innerHTML=e.map((U,W)=>`<div class="card-dot" data-i="${W}" style="width:8px;height:8px;border-radius:50%;background:${W===y?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(U=>U.addEventListener("click",()=>k(parseInt(U.dataset.i)))))}function I(_,U){var N;const W=e[_],re=document.getElementById("card-counter"),ce=document.getElementById("card-track");re&&(re.textContent=`Carte ${_+1} / ${e.length}`);const se=W.card_type==="player"&&((N=W.player)==null?void 0:N.rarity)==="legende",ae=!x.has(_);x.add(_);let z=0;if(W.card_type==="player"&&W.player){const C=W.player,R=C.job||"ATT";z=Number(R==="GK"?C.note_g:R==="DEF"?C.note_d:R==="MIL"?C.note_m:C.note_a)||0}const S=C=>{ce.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${se?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${yo(W)}</div>
          ${W.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const R=document.getElementById("current-card-wrap");U!==0?(R.style.transition="none",R.style.transform=`translateX(${U>0?100:-100}%)`,requestAnimationFrame(()=>{R.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",R.style.transform="translateX(0)"})):R.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),C||se?ee():$(),b()};ae&&z>6&&W.card_type==="player"&&W.player?q(W,()=>S(!0)):S(!1)}function q(_,U){var S;d=!0;const W=_.player,re=`https://flagsapi.com/${W.country_code}/flat/64.png`,ce=(S=W.clubs)==null?void 0:S.logo_url,se=document.getElementById("walkout-overlay"),ae=document.getElementById("walkout-stage");if(!se||!ae){d=!1,U();return}se.style.display="flex";const z=()=>{const N=ae.firstElementChild;N&&(N.classList.remove("wo-in"),N.classList.add("wo-out"))};ae.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(z,2e3),setTimeout(()=>{var N;ae.innerHTML=ce?`<img class="wo-in" src="${ce}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((N=W.clubs)==null?void 0:N.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(z,4450),setTimeout(()=>{se.style.display="none",ae.innerHTML="",d=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),U()},4900)}function k(_){if(d||_<0||_>=e.length||_===y)return;const U=_>y?1:-1;y=_,I(_,U)}function w(){k(y+1)}function F(){k(y-1)}function Z(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let U=0,W=0,re=0,ce=!1;const se=C=>C.touches?C.touches[0].clientX:C.clientX,ae=C=>C.touches?C.touches[0].clientY:C.clientY,z=C=>{ce=!0,U=se(C),W=ae(C),re=0},S=C=>{if(!ce)return;re=se(C)-U;const R=ae(C)-W;if(Math.abs(re)<Math.abs(R))return;const ie=document.getElementById("current-card-wrap");ie&&(ie.style.transition="none",ie.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},N=()=>{if(!ce)return;ce=!1;const C=document.getElementById("current-card-wrap"),R=55;re<=-R&&y<e.length-1?w():re>=R&&y>0?F():C&&(C.style.transition="transform .2s ease",C.style.transform="translateX(0)")};_.addEventListener("pointerdown",z),_.addEventListener("pointermove",S),_.addEventListener("pointerup",N),_.addEventListener("pointercancel",N),_.addEventListener("touchstart",z,{passive:!0}),_.addEventListener("touchmove",S,{passive:!0}),_.addEventListener("touchend",N),_.addEventListener("click",C=>{if(Math.abs(re)>8)return;const R=_.getBoundingClientRect();C.clientX-R.left>R.width/2?w():F()})}let ne=null;function ee(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const U=_.getContext("2d"),W=[];function re(){const se=Math.random()*_.width,ae=Math.random()*_.height*.6,z=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],S=z[Math.floor(Math.random()*z.length)];for(let N=0;N<60;N++){const C=Math.PI*2/60*N,R=2+Math.random()*5;W.push({x:se,y:ae,vx:Math.cos(C)*R,vy:Math.sin(C)*R,alpha:1,color:S,size:2+Math.random()*3})}}re(),ne=setInterval(re,600);function ce(){if(document.getElementById("fireworks-canvas")){U.clearRect(0,0,_.width,_.height);for(let se=W.length-1;se>=0;se--){const ae=W[se];if(ae.x+=ae.vx,ae.y+=ae.vy+.08,ae.vy*=.98,ae.alpha-=.018,ae.alpha<=0){W.splice(se,1);continue}U.globalAlpha=ae.alpha,U.fillStyle=ae.color,U.beginPath(),U.arc(ae.x,ae.y,ae.size,0,Math.PI*2),U.fill()}U.globalAlpha=1,(ne!==null||W.length>0)&&requestAnimationFrame(ce)}}ce()}function $(){ne!==null&&(clearInterval(ne),ne=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(r){const _=document.getElementById("reveal-phase"),U=_==null?void 0:_.querySelector('div[style*="display:flex"][style*="gap:10px"]');U&&(U.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(K=document.getElementById("reveal-next"))==null||K.addEventListener("click",()=>{$(),c.remove(),r()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{$(),c.remove(),o("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{$(),c.remove(),o("boosters")})}function yo(e){var t,o;if(e.card_type==="player"&&e.player)return uo(e);if(e.card_type==="game_changer"){const r=e._gcDef,c=(r==null?void 0:r.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[r==null?void 0:r.color]||l.purple,p=a[r==null?void 0:r.color]||a.purple,i=(r==null?void 0:r.name)||e.gc_type||"Game Changer",n=(r==null?void 0:r.effect)||((t=jt[e.gc_type])==null?void 0:t.desc)||"",u=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,f=((o=jt[e.gc_type])==null?void 0:o.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
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
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${n.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ho(e){var t,o;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${l[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(r),r.addEventListener("click",a=>{a.target===r&&r.remove()}),(o=document.getElementById("odds-close"))==null||o.addEventListener("click",()=>r.remove());return}bo()}function bo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const vo="simulation",zi="VOTRE_ZONE_ID";function wo(){switch(vo){case"propellerads":return $o();case"adsense":return _o();default:return Kt()}}function Kt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let o=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{o--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=o),l&&(l.textContent=o>0?`Passer (${o})`:"✓ Continuer"),o<=0&&(clearInterval(r),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function $o(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Kt());window.propeller.push({zone_id:zi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function _o(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Kt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:zi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(o){t(o)}})}async function ko(e,{state:t,navigate:o,toast:r,refreshProfile:c}){var f,g;const{data:l}=await L.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let a=Array.isArray((f=t.profile)==null?void 0:f.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await L.from("users").update({onboarding_done:!0}).eq("id",t.user.id),o("home");return}let s=null;try{const d=(await ki()).find(x=>(x.name||"").toLowerCase().includes("new player"));d&&(s=Ai(d))}catch(y){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',y)}const p=a.length;let i=0;e.innerHTML=`
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
  </div>`;const n=async()=>{await L.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function u(){var b;if(i>=p||!a.length){await L.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),r("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),o("home");return}const y=a[0],{data:d}=await L.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let x=[];try{if(y.type==="formation")x=await Li(t.profile,0);else if(y.type==="game_changer")x=await Ii(t.profile,y.count||3,0);else if(s&&((b=s.rates)!=null&&b.length)){const I={...s,cost:0,cardCount:y.count||s.cardCount||5};x=await Bt(t.profile,I),y.guaranteeGK&&!t.profile.first_booster_opened&&(x.some(k=>k.player&&k.player.job==="GK")||await Eo(t.profile,x),await L.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else x=await Ti(t.profile,y.count||5,0)}catch(I){r(I.message||"Erreur ouverture booster","error");return}a.shift(),i++,await n();const v=y.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:y.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${p})`,img:(s==null?void 0:s.img)||"/manager-wars/icons/booster-players.png"};Mi(x,v,o,()=>{u()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>u())}async function Eo(e,t){try{const{data:o}=await L.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(o!=null&&o.length))return;const r=o[Math.floor(Math.random()*o.length)],c=t.findIndex(a=>a.player);if(c===-1)return;const l=t[c];await L.from("cards").update({player_id:r.id}).eq("id",l.id),t[c]={...l,player_id:r.id,player:r}}catch(o){console.warn("[Onboarding] ensureGK échec",o)}}const nt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Xe(e,t,o,r,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${o}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function Te(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Ft(e,t){var r,c;const o=e.player;return{cardId:e.id,position:t||null,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((r=o.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((c=o.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function at(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Si(){const e=Math.random()*100;return e<10?3:e<30?2:1}function kt(e,t){const o=nt[t]||nt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===a).sort((i,n)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(n.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:a})),p=at(s.length);s.forEach((i,n)=>{i._col=p[n]}),r[a]=s}return r}const l=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let i=0;i<o[a];i++){let n=l.findIndex(u=>u.job===a);if(n===-1&&(n=l.findIndex(u=>u.job2===a)),n===-1&&(n=0),l[n]){const u={...l[n],_line:a};s.push(u),l.splice(n,1)}}const p=at(s.length);s.forEach((i,n)=>{i._col=p[n]}),r[a]=s}return r}function Ye(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ne(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Ci(e,t,o){const c=new Set,l=t.filter(n=>{const u=n.gc_type||n.id;return c.has(u)?!1:(c.add(u),!0)});let a=[];function s(n,u){const f=n._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},y={purple:"#9b59b6",light_blue:"#00bcd4"},d=g[f==null?void 0:f.color]||g.purple,x=y[f==null?void 0:f.color]||y.purple;return`<div class="gc-select-card" data-id="${n.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${d};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||n.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||n.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=n=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",o(n)};function i(){var u,f,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const n=a.length>0;e.innerHTML=`
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
        ${l.map(y=>{const d=a.find(x=>x.gc_type===y.gc_type);return s(y,!!d)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${n?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${n?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${n?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${n?"pointer":"default"};box-shadow:${n?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(y=>{y.addEventListener("click",()=>{const d=y.dataset.id,x=l.find(b=>b.id===d);if(!x)return;const v=a.findIndex(b=>b.gc_type===x.gc_type);v>-1?a.splice(v,1):a.length<3&&a.push(x),i()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{n&&p(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>p([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],i())})}i()}async function Ao(e,t,o){const{state:r,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await L.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){Xe(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=l.map(n=>n.id),{data:s}=await L.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let p=0;function i(){var b,I,q,k,w;const n=l[p],u=(s||[]).filter(F=>F.deck_id===n.id),f=u.filter(F=>{var Z;return F.is_starter&&((Z=F.card)==null?void 0:Z.player)}).map(F=>Ft(F.card,F.position)),g=u.find(F=>{var Z;return((Z=F.card)==null?void 0:Z.card_type)==="formation"}),y=n.formation||((b=g==null?void 0:g.card)==null?void 0:b.formation)||"4-4-2",d=f.length>=11?kt(f,y):null,x=f.length>=11;Ye(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${n.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${y} · ${f.length}/11 ${n.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===l.length-1?"0.1":"0.3"});color:${p===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${d?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${yt(d,y,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((F,Z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Z===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const Z=e.querySelector(".deck-preview-wrap svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(I=document.getElementById("prev-deck"))==null||I.addEventListener("click",()=>{p>0&&(p--,i())}),(q=document.getElementById("next-deck"))==null||q.addEventListener("click",()=>{p<l.length-1&&(p++,i())}),(k=document.getElementById("validate-deck"))==null||k.addEventListener("click",()=>{x&&t.navigate("match",{matchMode:o,deckId:n.id})}),(w=document.getElementById("cancel-deck-select"))==null||w.addEventListener("click",()=>{Ne(e),c("home")});const v=document.getElementById("deck-swipe-zone");if(v){let F=0,Z=0;v.addEventListener("touchstart",ne=>{F=ne.touches[0].clientX,Z=ne.touches[0].clientY},{passive:!0}),v.addEventListener("touchend",ne=>{const ee=ne.changedTouches[0].clientX-F,$=ne.changedTouches[0].clientY-Z;Math.abs(ee)<40||Math.abs(ee)<Math.abs($)||(ee<0&&p<l.length-1?(p++,i()):ee>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function ji(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Be(e,t=44,o=58){if(!e)return`<div style="width:${t}px;height:${o}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Te(e),c=ji(e),l=e._line||e.job||"MIL",a=rt[l]||"#555",s={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(me(e,l))||0)+(e.boost||0),i=Bi(e==null?void 0:e.country_code),n=Math.round(o*.19),u=Math.round(o*.25),f=o-Math.round(o*.19)-Math.round(o*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${s};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Dt(e==null?void 0:e.country_code)?`<img src="${Dt(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${i}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,o){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((l,a)=>{if(c+=Be(l,40,52),a<r.length-1){const s=Je(l,r[a+1]);c+=`<div style="width:7px;height:3px;background:${s==="#ff3333"||s==="#cc2222"?"rgba(255,255,255,0.12)":s};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),o!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${o}</div>`),c+="</div>",c}function Dt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Bi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function xt(e,t,o,r,c=310,l=310,a=[]){var I;const s=ht[t]||{},p=yi(t)||Rt[t]||[],i={},n=["ATT","MIL","DEF","GK"];for(const q of n)(e[q]||[]).forEach((w,F)=>{i[`${q}${F+1}`]=w});function u(q){const k=s[q];return k?{x:k.x*c,y:k.y*l}:null}let f="";for(const[q,k]of p){const w=u(q),F=u(k);if(!w||!F)continue;const Z=i[q],ne=i[k],ee=Je(Z,ne);ee==="#00ff88"||ee==="#FFD700"?(f+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${ee}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${ee}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${ee}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,y=64,d=13,x=16,v={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[q,k]of Object.entries(i)){const w=u(q);if(!w||!k)continue;const F=q.replace(/[0-9]/g,""),Z=rt[F]||"#555",ne=a.includes(k.cardId),ee=o==="attack"&&(["MIL","ATT"].includes(F)||ne)&&!k.used||o==="defense"&&["GK","DEF","MIL"].includes(F)&&!k.used,$=r.includes(k.cardId);let j;o==="attack"?j=ne?Math.max(1,Number(k.note_a)||0):F==="MIL"?Number(k.note_m)||0:Number(k.note_a)||0:o==="defense"?j=F==="GK"?Number(k.note_g)||0:F==="MIL"?Number(k.note_m)||0:Number(k.note_d)||0:j=Number(F==="GK"?k.note_g:F==="DEF"?k.note_d:F==="MIL"?k.note_m:k.note_a)||0,j=j+(k.boost||0);const K=(w.x-g/2).toFixed(1),_=(w.y-y/2).toFixed(1),U=v[k==null?void 0:k.rarity]||v.normal;if(k.used){const S=typeof import.meta<"u"&&"/manager-wars/"||"/",C=`${typeof window<"u"&&((I=window.location)==null?void 0:I.origin)||""}${S}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");f+=`<rect x="${K}" y="${_}" width="${g}" height="${y}" rx="5" fill="#161616"/>`,f+=`<image href="${C}" xlink:href="${C}" x="${K}" y="${_}" width="${g}" height="${y}" preserveAspectRatio="xMidYMid slice"/>`,f+=`<rect x="${K}" y="${_}" width="${g}" height="${y}" rx="5" fill="none" stroke="${U}" stroke-width="2" opacity="0.7"/>`,f+=`<rect x="${K}" y="${_}" width="${g}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${k.cardId}" data-role="${F}" style="cursor:pointer"/>`;continue}const W=$?.45:1,re=$?"#FFD700":U,ce=$?3:(k==null?void 0:k.rarity)==="legende"||(k==null?void 0:k.rarity)==="légende"||(k==null?void 0:k.rarity)==="pepite"||(k==null?void 0:k.rarity)==="pépite"?2.5:2,se=y-d-x;f+=`<defs><clipPath id="cp-${q}"><rect x="${K}" y="${(w.y-y/2+d).toFixed(1)}" width="${g}" height="${se}"/></clipPath></defs>`,f+=`<rect x="${K}" y="${_}" width="${g}" height="${y}" rx="5" fill="${Z}" opacity="${W}"/>`;const ae=Te(k);ae&&(f+=`<image href="${ae}" xlink:href="${ae}" x="${K}" y="${(w.y-y/2+d).toFixed(1)}" width="${g}" height="${se}" clip-path="url(#cp-${q})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${K}" y="${_}" width="${g}" height="${d}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${w.x.toFixed(1)}" y="${(w.y-y/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(k.name||"").slice(0,9)}</text>`;const z=(w.y+y/2-x).toFixed(1);f+=`<rect x="${K}" y="${z}" width="${g}" height="${x}" fill="rgba(255,255,255,0.92)"/>`;{const S=Dt(k.country_code);S?f+=`<image href="${S}" xlink:href="${S}" x="${(w.x-20).toFixed(1)}" y="${(w.y+y/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(w.x-13).toFixed(1)}" y="${(w.y+y/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Bi(k.country_code)}</text>`,f+=`<text x="${w.x.toFixed(1)}" y="${(w.y+y/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${j}</text>`;const N=ji(k);N?f+=`<image href="${N}" xlink:href="${N}" x="${(w.x+g/2-14).toFixed(1)}" y="${(w.y+y/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:k.clubName&&(f+=`<text x="${(w.x+14).toFixed(1)}" y="${(w.y+y/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(k.clubName||"").slice(0,3).toUpperCase()}</text>`),k.boost&&(f+=`<rect x="${(w.x+g/2-12).toFixed(1)}" y="${(w.y-y/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(w.x+g/2-5).toFixed(1)}" y="${(w.y-y/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${k.boost}</text>`)}f+=`<rect x="${K}" y="${_}" width="${g}" height="${y}" rx="5" fill="${$?"rgba(255,255,255,0.12)":"none"}" stroke="${re}" stroke-width="${ce}" opacity="${W}"/>`,ee&&(f+=`<rect x="${K}" y="${_}" width="${g}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${k.cardId}" data-role="${F}" style="cursor:pointer"/>`)}const b=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-b} ${-b} ${c+b*2} ${l+b*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function yt(e,t,o,r,c=300,l=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${xt(e,t,o,r,c,l,a)}
  </div>`}function tt(e,t=!1){const o=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Fi(e,t,o,r){var k;const{state:c,navigate:l,toast:a}=t;Ye(e);const s=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Ao(e,t,o);const p=s.deckId;let i,n,u,f;try{const w=await Promise.all([L.from("decks").select("formation,name").eq("id",p).single(),L.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=w[0].data,u=w[0].error,n=w[1].data,f=w[1].error}catch(w){console.error("[Match] Exception chargement deck:",w),Xe(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),Xe(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const g=(n||[]).filter(w=>{var F;return w.is_starter&&((F=w.card)==null?void 0:F.player)}).map(w=>Ft(w.card,w.position)),y=(n||[]).filter(w=>{var F;return!w.is_starter&&((F=w.card)==null?void 0:F.player)}).map(w=>Ft(w.card,w.position));if(g.length<11){Xe(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>l("decks"));return}const d=(n||[]).find(w=>{var F;return((F=w.card)==null?void 0:F.card_type)==="formation"}),x=(i==null?void 0:i.formation)||((k=d==null?void 0:d.card)==null?void 0:k.formation)||"4-4-2",{data:v,error:b}=await L.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:I}=await L.from("gc_definitions").select("*").eq("is_active",!0),q=(v||[]).map(w=>({...w,_gcDef:(I==null?void 0:I.find(F=>F.name===w.gc_type||F.id===w.gc_definition_id))||null}));r({deckId:p,formation:x,starters:g,subsRaw:y,gcCardsEnriched:q,gcDefs:I||[]})}async function To(e,t){const{state:o}=t,c=(o.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),a=c;await Fi(e,t,c,async({deckId:s,formation:p,starters:i,subsRaw:n,gcCardsEnriched:u,gcDefs:f})=>{try{const g=kt(i,p),y=await Io(p,l),d=async x=>{try{const{data:v,error:b}=await L.from("matches").insert({home_id:o.profile.id,away_id:null,mode:a,home_deck_id:s,status:"in_progress"}).select().single();if(b){console.error("[MatchIA] Erreur création match:",b),Xe(e,"⚠️","Impossible de créer le match ("+b.message+").","Retour",()=>t.navigate("home"));return}const I={gcDefs:f||[],matchId:v==null?void 0:v.id,mode:a,difficulty:l,formation:p,homeTeam:g,aiTeam:y,homeSubs:n,subsUsed:0,maxSubs:Math.min(n.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:o.profile.club_name||"Vous"};Mo(e,I,t)}catch(v){console.error("[MatchIA] Exception launchMatch:",v),Xe(e,"⚠️","Erreur au lancement du match : "+v.message,"Retour",()=>t.navigate("home"))}};if(!u.length){d([]);return}Ci(e,u,d)}catch(g){console.error("[MatchIA] Exception setup:",g),Xe(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function Io(e,t){var a,s;const{data:o}=await L.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!o||o.length<11)return Lo(e);const r=nt[e]||nt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...o];for(const p of["GK","DEF","MIL","ATT"]){const i=l.filter(y=>y.job===p),n=l.filter(y=>y.job!==p),u=[...i,...n],f=[];for(let y=0;y<r[p];y++){const d=u[y]||l[y];d&&f.push({cardId:"ai-"+d.id+"-"+y,id:d.id,firstname:d.firstname,name:d.surname_encoded,country_code:d.country_code,club_id:d.club_id,job:d.job,job2:d.job2,note_g:Number(d.note_g)||0,note_d:Number(d.note_d)||0,note_m:Number(d.note_m)||0,note_a:Number(d.note_a)||0,rarity:d.rarity,skin:d.skin,hair:d.hair,hair_length:d.hair_length,clubName:((a=d.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((s=d.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:p})}const g=at(f.length);f.forEach((y,d)=>{y._col=g[d]}),c[p]=f}return c}function Lo(e){const t=nt[e]||nt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const a=[];for(let p=0;p<t[l];p++){const i=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:r[c%r.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?i:2,note_d:l==="DEF"?i:2,note_m:l==="MIL"?i:2,note_a:l==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const s=at(a.length);a.forEach((p,i)=>{p._col=s[i]}),o[l]=a}return o}function Mo(e,t,o){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${xt(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>zo(e,t,o),5e3)}function zo(e,t,o){const r=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(d){return d.reduce((x,v)=>x+me(v,"MIL"),0)}function a(d){let x=0;for(let v=0;v<d.length-1;v++){const b=Je(d[v],d[v+1]);b==="#00ff88"?x+=2:b==="#FFD700"&&(x+=1)}return x}const s=l(r)+a(r),p=l(c)+a(c),i=s>=p;function n(d,x,v,b){return`<div id="duel-row-${b}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${x}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${d.map((I,q)=>{const k=q<d.length-1?Je(I,d[q+1]):null,w=!k||k==="#ff3333"||k==="#cc2222",F=k==="#00ff88"?"+2":k==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${b}" data-idx="${q}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Be({...I,note:me(I,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${q<d.length-1?`<div class="duel-link duel-link-${b}" data-idx="${q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${w?"rgba(255,255,255,0.12)":k};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${w?"none":`0 0 8px ${k}`}">
            ${F?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${k}">${F}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${b}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${l(d)} + ${a(d)} liens = <b style="color:#fff">${l(d)+a(d)}</b>
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

    ${n(r,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${n(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const d=(x,v)=>e.querySelectorAll(x).forEach((b,I)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},v+I*90)});d(".duel-card-home",150),d(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((x,v)=>{setTimeout(()=>{x.style.opacity="1"},v*70)}),900),setTimeout(()=>{const x=e.querySelector("#vs-label");x&&(x.style.opacity="1",x.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(v=>v.style.opacity="1")},1250),setTimeout(()=>{f("score-home",s,800),f("score-ai",p,800)},1500)};function f(d,x,v){const b=document.getElementById(d);if(!b)return;const I=performance.now(),q=k=>{const w=Math.min(1,(k-I)/v);b.textContent=Math.round(x*(1-Math.pow(1-w,3))),w<1?requestAnimationFrame(q):b.textContent=x};requestAnimationFrame(q)}requestAnimationFrame(u),t.attacker=i?"home":"ai";const g=i?Si():null;i&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(d=>({name:d.name,note:me(d,"MIL"),portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),aiPlayers:c.map(d=>({name:d.name,note:me(d,"MIL"),portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homeTotal:s,aiTotal:p,text:`Duel milieu : ${t.clubName} ${s} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const y=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",_e(e,t,o),t.attacker==="ai"&&setTimeout(()=>Gt(e,t,o),800)};setTimeout(()=>{const d=document.getElementById("score-home"),x=document.getElementById("score-ai"),v=document.getElementById(i?"duel-row-home":"duel-row-ai"),b=document.getElementById(i?"duel-row-ai":"duel-row-home"),I=i?d:x,q=i?x:d;I&&(I.style.fontSize="80px",I.style.color=i?"#FFD700":"#ff6b6b",I.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),q&&(q.style.opacity="0.25"),setTimeout(()=>{v&&(v.style.transformOrigin="center",v.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",v.style.zIndex="5"),setTimeout(()=>{var w;const k=document.getElementById("duel-shock");if(k){const F=(w=b||v)==null?void 0:w.getBoundingClientRect(),Z=e.querySelector(".match-screen").getBoundingClientRect();F&&(k.style.top=F.top-Z.top+F.height/2+"px"),k.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var w;const k=document.getElementById("duel-finale");k&&(k.innerHTML=`
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
          </button>`,k.style.transition="opacity .45s ease",k.style.opacity="1",k.style.pointerEvents="auto",(w=document.getElementById("start-match-btn"))==null||w.addEventListener("click",y))},600)},700)},2800)}function So(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function _e(e,t,o){var I,q,k,w,F,Z,ne,ee;const r=t.selected.map($=>$.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter($=>!c.includes($.cardId)),s=Object.values(t.homeTeam).flat().filter($=>$.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some($=>(t.aiTeam[$]||[]).some(j=>!j.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter($=>!$.used),n=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter($=>!$.used).map($=>$.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",g=t.phase==="defense",y=t.phase==="finished",d=t.gcCards.filter($=>!t.usedGc.includes($.id)),x=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const j=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${et((j.players||[]).map(K=>({...K,used:!1})),"#ff6b6b",j.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const j=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((j.players||[]).map(K=>({...K,used:!1})),"#00ff88",j.total)}
          </div>`}const $=t.log[t.log.length-1];return $?'<div style="padding:2px 4px">'+So($)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const $=window.innerWidth>=700,j=(z,S,N)=>{var Ie,je;const C=(t.gcDefs||[]).find(m=>m.name===z.gc_type),R={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[C==null?void 0:C.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ie={purple:"#b06ce0",light_blue:"#00d4ef"}[C==null?void 0:C.color]||"#b06ce0",Y=(C==null?void 0:C.name)||z.gc_type,ve=(C==null?void 0:C.effect)||((Ie=Ce[z.gc_type])==null?void 0:Ie.desc)||"",xe=C!=null&&C.image_url?`/manager-wars/icons/${C.image_url}`:null,ge=((je=Ce[z.gc_type])==null?void 0:je.icon)||"⚡",fe=Math.round(N*.22),be=Math.round(N*.22),Ee=N-fe-be,Le=Y.length>12?7:9;return`<div class="gc-mini" data-gc-id="${z.id}" data-gc-type="${z.gc_type}"
          style="box-sizing:border-box;width:${S}px;height:${N}px;border-radius:10px;border:2px solid ${ie};background:${R};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${fe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Le}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${S-6}px">${Y}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ee}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:${S-10}px;max-height:${Ee-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ee*.55)}px">${ge}</span>`}
          </div>
          <div style="height:${be}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},K=(z,S)=>{var N;return`<div id="boost-card"
          style="box-sizing:border-box;width:${z}px;height:${S}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(S*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(S*.2)}px">⚡</div>
            <div style="font-size:${Math.round(S*.09)}px;color:#000;font-weight:900">+${(N=t.boostCard)==null?void 0:N.value}</div>
          </div>`},_=(z,S)=>S?K(130,175):j(z,130,175),U=(z,S)=>S?K(68,95):j(z,68,95),W=$?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",re=y?`<button id="btn-results" style="${W};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${W};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-action" style="${W};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${W};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${W};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ce=f||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${$?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map(z=>`<div class="sub-btn-col" data-sub-id="${z.cardId}" style="cursor:pointer;flex-shrink:0">${Be(z,76,100)}</div>`).join("")}
      </div>`,ae=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${yt(t.homeTeam,t.formation,t.phase,r,300,300,n)}
        </div>
      </div>`;return $?`
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
            ${d.map(z=>_(z,!1)).join("")}
            ${x?_(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${yt(t.homeTeam,t.formation,t.phase,r,300,300,n)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${d.map(z=>U(z,!1)).join("")}
            ${x?U(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map($=>{var j,K,_;if($.type==="duel"){const U=$.isGoal,W=$.homeScored?"#FFD700":U?"#ff6b6b":"rgba(255,255,255,0.3)",re=$.homeScored?"⚽ BUT !":U?"⚽ BUT IA !":(j=$.homePlayers)!=null&&j.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${U?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${W};margin-bottom:4px">
                <div style="font-size:9px;color:${W};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${re}</div>
                ${(K=$.homePlayers)!=null&&K.length?`<div style="margin-bottom:3px">${et($.homePlayers,"rgba(255,255,255,0.7)",$.homeTotal)}</div>`:""}
                ${(_=$.aiPlayers)!=null&&_.length?`<div style="opacity:0.7">${et($.aiPlayers,"#ff6b6b",$.aiTotal)}</div>`:""}
              </div>`}return $.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${$.outPlayer?Be({...$.outPlayer,used:!0,_line:$.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${$.inPlayer?Be({...$.inPlayer,_line:$.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:$.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${$.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${$.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function v(){const $=e.querySelector(".match-screen");if(!$)return;const j=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);$.style.bottom="auto",$.style.height=j+"px",$.style.minHeight=j+"px",$.style.maxHeight=j+"px",$.style.overflow="hidden";const K=e.querySelector("#mobile-action-bar"),_=e.querySelector("#mobile-play-area");K&&_&&(_.style.paddingBottom=K.offsetHeight+"px")}if(v(),setTimeout(v,120),setTimeout(v,400),setTimeout(v,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",v),window.visualViewport.addEventListener("scroll",v)),window.addEventListener("resize",v)),function(){const j=e.querySelector(".terrain-wrapper svg");j&&(j.removeAttribute("width"),j.removeAttribute("height"),j.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",j.setAttribute("viewBox","-26 -26 352 352"),j.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const $=e.querySelector(".terrain-wrapper svg");$&&($.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let $=!1,j=30;const K=()=>document.getElementById("match-timer"),_=()=>{const U=K();if(!U)return;const W=String(Math.floor(j/60)).padStart(2,"0"),re=String(j%60).padStart(2,"0");U.textContent=` ${W}:${re}`,U.style.color=$?"#ff2222":"#ff9500",U.style.fontWeight="900"};_(),t._timerInt=setInterval(()=>{if(j--,j<0)if(!$)$=!0,j=15,_();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",U.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(U),setTimeout(()=>{U.remove(),gt(e,t,o)},2500)}else _()},1e3)}(I=document.getElementById("match-quit"))==null||I.addEventListener("click",()=>{Ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,gt(e,t,o))}),(q=document.getElementById("view-ai"))==null||q.addEventListener("click",()=>Oo(t,o)),(k=document.getElementById("toggle-history"))==null||k.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.add("open")}),(w=document.getElementById("close-history"))==null||w.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.remove("open")}),(F=document.getElementById("btn-action"))==null||F.addEventListener("click",()=>{t.selected.length!==0&&(f?jo(e,t,o):g&&Bo(e,t,o))}),(Z=document.getElementById("btn-results"))==null||Z.addEventListener("click",()=>gt(e,t,o)),e.querySelectorAll(".match-slot-hit").forEach($=>{$.addEventListener("click",()=>Co($,t,e,o))}),e.querySelectorAll(".match-used-hit").forEach($=>{$.addEventListener("click",()=>zt(e,t,o,null,$.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach($=>{$.addEventListener("click",()=>Go($.dataset.gcId,$.dataset.gcType,e,t,o))}),(ne=document.getElementById("boost-card"))==null||ne.addEventListener("click",()=>Ro(e,t,o)),e.querySelectorAll(".sub-btn-col").forEach($=>{$.addEventListener("click",()=>zt(e,t,o,$.dataset.subId))}),(ee=document.getElementById("sub-btn-main"))==null||ee.addEventListener("click",()=>zt(e,t,o))}function Co(e,t,o,r){const c=e.dataset.cardId,l=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[l]||[]).find(p=>p.cardId===c);s&&t.selected.push({...s,_role:l,_line:l})}_e(o,t,r)}function Vt(e,t,o){e.matchId&&L.from("matches").update({last_player_id:o}).eq("id",e.matchId).then(()=>{})}function jo(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Vt(t,o,o.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(s=>!s.used)),c=t.selected.map(a=>{const s=(t.homeTeam[a._role]||[]).find(i=>i.cardId===a.cardId)||a,p=r&&["GK","DEF"].includes(a._role);return{...s,_line:a._role,...p?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),l=Ot(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(a=>{const s=(t.homeTeam[a._role]||[]).find(p=>p.cardId===a.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",_e(e,t,o),setTimeout(()=>Fo(e,t,o),1200)}function Bo(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Vt(t,o,o.state.profile.id);const r=t.selected.map(s=>({...(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s,_line:s._role})),c=Pt(r,t.modifiers.home);t.selected.forEach(s=>{const p=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId);p&&(p.used=!0)});const l=Ht(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:Te(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),homePlayers:t.selected.map(s=>{const p=(t.homeTeam[s._role]||[]).find(i=>i.cardId===s.cardId)||s;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Te(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(l.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,_e(e,t,o),Et(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,o,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,it(e,t,o,"home-attack")}function Gt(e,t,o){Vt(t,o,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=bi(r,"attack",t.difficulty);if(!c.length){wt(e,t,o);return}const l=Ot(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:Te(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,_e(e,t,o),Et(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,o,"home-attack")});return}t.phase="defense",_e(e,t,o)}function Fo(e,t,o){var i,n;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=bi(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(g=>({name:g.name,note:me(g,g._line||g.job),portrait:Te(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((n=t.pendingAttack)==null?void 0:n.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,o),Et(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,o,"ai-attack")});return}const a=c.length>0?Pt(c,t.modifiers.ai).total:0;c.forEach(u=>{u.used=!0});const s=Ht(t.pendingAttack.total,a,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:c.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(s.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,o),Et(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,o,"ai-attack")});return}else p.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,it(e,t,o,"ai-attack")}function it(e,t,o,r){if(t.round++,Di(t)){gt(e,t,o);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){wt(e,t,o);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){wt(e,t,o);return}setTimeout(()=>Gt(e,t,o),100);return}t.phase="attack",_e(e,t,o)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){wt(e,t,o);return}t.phase="ai-attack",_e(e,t,o),setTimeout(()=>Gt(e,t,o),800)}}function Di(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(c=>!c.used)),o=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(c=>!c.used));return!t&&!o}function wt(e,t,o){Di(t)?gt(e,t,o):(t.phase="attack",_e(e,t,o))}function Do(e,t,o){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Te(e),l=Te(t),a=rt[e.job]||"#555",s=rt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(r);let n=!1;const u=()=>{n||(n=!0,r.remove(),o())};r.addEventListener("click",u),setTimeout(u,2e3)}function ct(e,t="rgba(0,0,0,0.8)"){const o=document.createElement("div");o.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2200)}function zt(e,t,o,r=null,c=null){var g,y;if(t.phase!=="attack"){ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([d,x])=>(x||[]).filter(v=>v.used).map(v=>({...v,_line:v._line||d}))),a=t.homeSubs.filter(d=>!t.usedSubIds.includes(d.cardId));if(!l.length){ct("Aucun joueur utilisé à remplacer");return}if(!a.length){ct("Aucun remplaçant disponible");return}let s=Math.max(0,l.findIndex(d=>d.cardId===c));const p=((g=l[s])==null?void 0:g._line)||((y=l[s])==null?void 0:y.job);let i=r?Math.max(0,a.findIndex(d=>d.cardId===r)):Math.max(0,a.findIndex(d=>d.job===p)),n=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var k,w,F,Z,ne,ee;const d=l[s],x=a[i],v=Math.min(130,Math.round((window.innerWidth-90)/2)),b=Math.round(v*1.35),I=$=>`background:rgba(255,255,255,0.12);border:none;color:${$?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${I(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${x?Be({...x,used:!1,boost:0},v,b):"<div>—</div>"}</div>
        <button id="in-down" style="${I(i>=a.length-1)}" ${i>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${I(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${d?Be({...d,used:!1,boost:0},v,b):"<div>—</div>"}</div>
        <button id="out-down" style="${I(s>=l.length-1)}" ${s>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(k=u.querySelector("#sub-close"))==null||k.addEventListener("click",()=>u.remove()),(w=u.querySelector("#out-up"))==null||w.addEventListener("click",()=>{s>0&&(s--,f())}),(F=u.querySelector("#out-down"))==null||F.addEventListener("click",()=>{s<l.length-1&&(s++,f())}),(Z=u.querySelector("#in-up"))==null||Z.addEventListener("click",()=>{i>0&&(i--,f())}),(ne=u.querySelector("#in-down"))==null||ne.addEventListener("click",()=>{i<a.length-1&&(i++,f())});const q=($,j,K,_)=>{const U=u.querySelector("#"+$);if(!U)return;let W=0;U.addEventListener("touchstart",re=>{W=re.touches[0].clientY},{passive:!0}),U.addEventListener("touchend",re=>{const ce=re.changedTouches[0].clientY-W;if(Math.abs(ce)<30)return;const se=j();ce<0&&se<_-1?(K(se+1),f()):ce>0&&se>0&&(K(se-1),f())},{passive:!0})};q("in-panel",()=>i,$=>i=$,a.length),q("out-panel",()=>s,$=>s=$,l.length),(ee=u.querySelector("#sub-confirm"))==null||ee.addEventListener("click",$=>{if($.preventDefault(),$.stopPropagation(),n)return;n=!0;const j=l[s],K=a[i];if(!j||!K)return;let _=null,U=-1;for(const[re,ce]of Object.entries(t.homeTeam)){const se=(ce||[]).findIndex(ae=>ae.cardId===j.cardId);if(se!==-1){_=re,U=se;break}}if(U===-1||!_){ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const W={...K,_line:_,_col:j._col||0,used:!1,boost:0};t.homeTeam[_].splice(U,1,W),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(K.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:j.name,firstname:j.firstname,note:me(j,_),portrait:Te(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},inPlayer:{name:K.name,firstname:K.firstname,note:me(K,_),portrait:Te(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},text:`🔄 ${K.firstname} ${K.name} remplace ${j.firstname} ${j.name}`}),u.remove(),Do(j,K,()=>_e(e,t,o))})}document.body.appendChild(u),f()}function Go(e,t,o,r,c){var y,d;const l=(r.gcDefs||[]).find(x=>x.name===t),a=Ce[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",i=(l==null?void 0:l.name)||t,n=(l==null?void 0:l.effect)||a.desc,u=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,f=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${n}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(y=g.querySelector("#gc-back"))==null||y.addEventListener("click",()=>g.remove()),(d=g.querySelector("#gc-use"))==null||d.addEventListener("click",()=>{g.remove(),No(e,t,o,r,c)})}function vt(e,t,o,r,c,l){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function p(){var i,n;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${o}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",y=me(u,f)+(u.boost||0),d=s.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${d?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(i=a.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,g=e.find(d=>d.cardId===f);if(!g)return;const y=s.findIndex(d=>d.cardId===f);y>-1?s.splice(y,1):s.length<t&&s.push(g),p()})}),(n=a.querySelector("#gc-picker-confirm"))==null||n.addEventListener("click",()=>{a.remove(),l(s)})}p(),document.body.appendChild(a)}const qo={BOOST_STAT:({value:e=1,count:t=1,roles:o=[]},r,c,l)=>{const a=Object.entries(r.homeTeam).filter(([s])=>!o.length||o.includes(s)).flatMap(([s,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:s})));return a.length?(vt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,r,s=>{s.forEach(p=>{const i=(r.homeTeam[p._line]||[]).find(n=>n.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),_e(c,r,l)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_e(c,r,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:o=[],target:r="ai"},c,l,a)=>{const s=r==="home"?c.homeTeam:c.aiTeam,p=r==="ai"?"adverse":"allié",i=Object.entries(s).filter(([n])=>!o.length||o.includes(n)).flatMap(([n,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:n})));return i.length?(vt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,l,c,n=>{n.forEach(u=>{const g=((r==="home"?c.homeTeam:c.aiTeam)[u._line]||[]).find(y=>y.cardId===u.cardId);g&&(g.boost=(g.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${g.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),_e(l,c,a)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),_e(l,c,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:o="ai"},r,c,l)=>{const a=o==="home"?r.homeTeam:r.aiTeam,s=o==="ai"?"adverse":"allié",p=Object.entries(a).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,n])=>n.filter(u=>!u.used).map(u=>({...u,_line:i})));return p.length?(vt(p,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,c,r,i=>{i.forEach(n=>{const f=((o==="home"?r.homeTeam:r.aiTeam)[n._line]||[]).find(g=>g.cardId===n.cardId);f&&(f.used=!0,r.log.push({text:`❌ ${f.name}${o==="ai"?" (IA)":""} exclu !`,type:"info"}))}),_e(c,r,l)}),!0):(r.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),_e(c,r,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},o,r,c)=>{const l=Object.entries(o.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(p=>p.used).map(p=>({...p,_line:a})));return l.length?(vt(l,e,`Choisir ${e} joueur(s) à ressusciter`,r,o,a=>{a.forEach(s=>{const p=(o.homeTeam[s._line]||[]).find(i=>i.cardId===s.cardId);p&&(p.used=!1,o.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),_e(r,o,c)}),!0):(o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),_e(r,o,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function No(e,t,o,r,c){r.usedGc.push(e);const l=r.gcDefs||[],a=l.find(p=>p.name===t)||l.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const p=qo[a.effect_type];p?p(a.effect_params||{},r,o,c)||(s=!0):(c.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(r.homeTeam).flatMap(([i,n])=>(n||[]).filter(u=>u.used).map(u=>({...u,_line:i})));p.length?(p[0].used=!1,r.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((n,u)=>me(u,"ATT")-me(n,"ATT"))[0];i.used=!0,r.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}L.from("cards").delete().eq("id",e).then(()=>{}),s&&_e(o,r,c)}function Ro(e,t,o){const r=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!r.length){o.toast("Aucun joueur actif à booster","error");return}o.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${rt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${me(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(p=>p.cardId===l);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,o.closeModal(),_e(e,t,o)})})}function Et(e,t,o,r,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(i,n)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${n%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][n%8]}
    </div>`).join("");l.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${a}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${r?"BUT !":"BUT IA !"}
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let s=!1;const p=()=>{s||(s=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",p),setTimeout(p,3500)}async function gt(e,t,o){var n,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=o,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,a=c?"victoire":l?"nul":"defaite",s=Wi(t.mode,a);t.matchId&&await L.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?r.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(r.profile.credits||0)+s,matches_played:(r.profile.matches_played||0)+1};c?p.wins=(r.profile.wins||0)+1:l?p.draws=(r.profile.draws||0)+1:p.losses=(r.profile.losses||0)+1,await L.from("users").update(p).eq("id",r.profile.id),await o.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),(n=document.getElementById("res-home"))==null||n.addEventListener("click",()=>{i.remove(),Ne(e),o.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{i.remove(),Ne(e),o.navigate("match",{matchMode:t.mode})})}function Oo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${xt(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Po(e,t){await Fi(e,t,"random",({deckId:o,formation:r,starters:c,subsRaw:l,gcCardsEnriched:a,gcDefs:s})=>{const p=i=>Ho(e,t,o,r,c,l,i,s||[]);if(!a.length){p([]);return}Ci(e,a,p)})}async function Ho(e,t,o,r,c,l,a=[],s=[]){var b;const{state:p,navigate:i,toast:n}=t;let u=!1,f=null;Ye(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(I=!0)=>{u=!0,f&&(L.removeChannel(f),f=null),I&&await L.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(b=document.getElementById("mm-cancel"))==null||b.addEventListener("click",async()=>{try{await g(!0)}catch{}Ne(e),i("home")});const y=async(I,q,k)=>{if(u)return;u=!0,f&&(L.removeChannel(f),f=null);const w=document.getElementById("mm-status");w&&(w.textContent="Adversaire trouvé !"),await new Promise(F=>setTimeout(F,600)),e.isConnected&&Uo(e,t,I,k,a,s)},{data:d,error:x}=await L.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:o});if(x||!(d!=null&&d.success)){n("Erreur de matchmaking","error"),Ne(e),i("home");return}if(d.matched){y(d.match_id,d.opponent_id,!1);return}const v=document.getElementById("mm-status");v&&(v.textContent="En attente d'un autre joueur..."),f=L.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},I=>{const q=I.new;q.status==="matched"&&q.match_id&&y(q.match_id,q.matched_with,!0)}).subscribe()}async function Uo(e,t,o,r,c=[],l=[]){const{state:a,navigate:s,toast:p}=t,i=r?"p1":"p2",n=r?"p2":"p1",u=(c||[]).map(m=>m.id),f=(c||[]).map(m=>({id:m.id,gc_type:m.gc_type,_gcDef:m._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await L.from("matches").select("*").eq("id",o).single();if(!g){p("Match introuvable","error"),s("home");return}async function y(){const[{data:m},{data:h},{data:T},{data:A}]=await Promise.all([L.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),L.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),L.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),L.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),E=D=>({cardId:D.card_id,position:D.position,id:D.id,firstname:D.firstname,name:D.surname_encoded,country_code:D.country_code,club_id:D.club_id,job:D.job,job2:D.job2,note_g:Number(D.note_g)||0,note_d:Number(D.note_d)||0,note_m:Number(D.note_m)||0,note_a:Number(D.note_a)||0,rarity:D.rarity,skin:D.skin,hair:D.hair,hair_length:D.hair_length,clubName:D.club_encoded_name||null,clubLogo:D.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),M=((m==null?void 0:m.starters)||[]).map(D=>E(D)),B=((h==null?void 0:h.starters)||[]).map(D=>E(D)),G=(m==null?void 0:m.formation)||"4-4-2",P=(h==null?void 0:h.formation)||"4-4-2";return{p1Team:kt(M,G),p2Team:kt(B,P),p1Subs:((m==null?void 0:m.subs)||[]).map(D=>E(D)),p2Subs:((h==null?void 0:h.subs)||[]).map(D=>E(D)),p1Formation:G,p2Formation:P,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?u:[],gc_p2:r?[]:u,gcCardsFull_p1:r?f:[],gcCardsFull_p2:r?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let d=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!d)if(r){d=await y();const{data:m}=await L.from("matches").select("game_state").eq("id",o).single();!(m!=null&&m.game_state)||!Object.keys(m.game_state).length?await L.from("matches").update({game_state:d,turn_user_id:g.home_id}).eq("id",o):d=m.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let m=0;m<30&&!d;m++){await new Promise(T=>setTimeout(T,400));const{data:h}=await L.from("matches").select("game_state").eq("id",o).single();h!=null&&h.game_state&&Object.keys(h.game_state).length&&(d=h.game_state)}if(!d){p("Erreur de synchronisation","error"),s("home");return}d.gc_p2=u,d.gcCardsFull_p2=f,await L.from("matches").update({game_state:d}).eq("id",o)}let x=!1,v=null,b=!1;const I=new Set,q=new Set;function k(m){var D,H;try{L.removeChannel(w)}catch{}const h=d[i+"Score"]||0,T=d[n+"Score"]||0;let A,E;m.winner_id?(A=m.winner_id===a.profile.id,E=!1):m.forfeit?(A=h>T,E=!1):(E=h===T,A=h>T),(D=document.getElementById("pvp-end-overlay"))==null||D.remove();const M=document.createElement("div");M.id="pvp-end-overlay",M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const B=E?"🤝":A?"🏆":"😞",G=E?"MATCH NUL":A?"VICTOIRE !":"DÉFAITE",P=E?"#fff":A?"#FFD700":"#ff6b6b";M.innerHTML=`
      <div style="font-size:64px">${B}</div>
      <div style="font-size:26px;font-weight:900;color:${P}">${G}</div>
      <div style="font-size:18px">${d[i+"Name"]} ${h} – ${T} ${d[n+"Name"]}</div>
      ${m.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${A?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(M),(H=M.querySelector("#pvp-end-home"))==null||H.addEventListener("click",()=>{M.remove(),Ne(e),s("home")})}const w=L.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},m=>{const h=m.new;try{if(h.status==="finished"||h.forfeit){if(x)return;x=!0,v&&(clearInterval(v),v=null),h.game_state&&(d=h.game_state),k(h);return}if(h.game_state){const T=d;d=h.game_state;const A=d._lastGC;if(A&&A.seq&&!q.has(A.seq)&&(q.add(A.seq),A.by!==i)){se(A.type,A.by,()=>_());return}const E=T[i+"Score"]||0,M=T[n+"Score"]||0,B=d[i+"Score"]||0,G=d[n+"Score"]||0,P=B>E,D=G>M;if((P||D)&&!I.has(d.round)){I.add(d.round);const H=[...d.log||[]].reverse().find(Q=>Q.isGoal),V=((H==null?void 0:H.homePlayers)||[]).map(Q=>({name:Q.name,note:Q.note,portrait:Q.portrait,job:Q.job}));ce(V,B,G,P,()=>_());return}_()}}catch(T){console.error("[PvP] crash:",T)}}).subscribe();async function F(m){Object.assign(d,m),d.lastActionAt=new Date().toISOString();const{error:h}=await L.from("matches").update({game_state:d}).eq("id",o);h&&p("Erreur de synchronisation","error");try{_()}catch(T){console.error("[PvP] renderPvpScreen crash:",T)}}async function Z(){if(x)return;x=!0,v&&(clearInterval(v),v=null);const m=r?g.away_id:g.home_id,h=r?"p2":"p1",T=r?"p1":"p2",A={...d,[h+"Score"]:3,[T+"Score"]:0,phase:"finished"};try{await L.from("matches").update({status:"finished",forfeit:!0,winner_id:m,home_score:A.p1Score||0,away_score:A.p2Score||0,game_state:A}).eq("id",o)}catch{}try{L.removeChannel(w)}catch{}setTimeout(()=>{Ne(e),s("home")},800)}const ne={BOOST_STAT:({value:m=1,count:h=1,roles:T=[]},A,E)=>{const M=A[i+"Team"],B=Object.entries(M).filter(([G])=>!T.length||T.includes(G)).flatMap(([G,P])=>P.filter(D=>!D.used).map(D=>({...D,_line:G})));if(!B.length){A.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),E(A);return}ee(B,h,`Choisir ${h} joueur(s) à booster (+${m})`,G=>{G.forEach(P=>{const D=(M[P._line]||[]).find(H=>H.cardId===P.cardId);D&&(D.boost=(D.boost||0)+m,A.log.push({text:`⚡ +${m} sur ${D.name}`,type:"info"}))}),A[i+"Team"]=M,E(A)})},DEBUFF_STAT:({value:m=1,count:h=1,roles:T=[],target:A="ai"},E,M)=>{const B=A==="home"?i:n,G=E[B+"Team"],P=A==="home"?"allié":"adverse",D=Object.entries(G).filter(([H])=>!T.length||T.includes(H)).flatMap(([H,V])=>V.filter(Q=>!Q.used).map(Q=>({...Q,_line:H})));if(!D.length){E.log.push({text:`🎯 Aucun joueur ${P}`,type:"info"}),M(E);return}ee(D,h,`Choisir ${h} joueur(s) ${P}(s) (-${m})`,H=>{H.forEach(V=>{const Q=(G[V._line]||[]).find(ue=>ue.cardId===V.cardId);Q&&(Q.boost=(Q.boost||0)-m,E.log.push({text:`🎯 -${m} sur ${Q.name}`,type:"info"}))}),E[B+"Team"]=G,M(E)})},GRAY_PLAYER:({count:m=1,roles:h=[],target:T="ai"},A,E)=>{const M=T==="home"?i:n,B=A[M+"Team"],G=T==="home"?"allié":"adverse",P=Object.entries(B).filter(([D])=>!h.length||h.includes(D)).flatMap(([D,H])=>H.filter(V=>!V.used).map(V=>({...V,_line:D})));if(!P.length){A.log.push({text:`❌ Aucun joueur ${G}`,type:"info"}),E(A);return}ee(P,m,`Choisir ${m} joueur(s) ${G}(s) à exclure`,D=>{D.forEach(H=>{const V=(B[H._line]||[]).find(Q=>Q.cardId===H.cardId);V&&(V.used=!0,A.log.push({text:`❌ ${V.name} exclu !`,type:"info"}))}),A[M+"Team"]=B,E(A)})},REVIVE_PLAYER:({count:m=1,roles:h=[]},T,A)=>{const E=T[i+"Team"],M=Object.entries(E).filter(([B])=>!h.length||h.includes(B)).flatMap(([B,G])=>G.filter(P=>P.used).map(P=>({...P,_line:B})));if(!M.length){T.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),A(T);return}ee(M,m,`Choisir ${m} joueur(s) à ressusciter`,B=>{B.forEach(G=>{const P=(E[G._line]||[]).find(D=>D.cardId===G.cardId);P&&(P.used=!1,T.log.push({text:`💫 ${P.name} ressuscité !`,type:"info"}))}),T[i+"Team"]=E,A(T)})},REMOVE_GOAL:({},m,h)=>{const T=n+"Score";m[T]>0?(m[T]--,m.log.push({text:"🚫 Dernier but annulé !",type:"info"})):m.log.push({text:"🚫 Aucun but à annuler",type:"info"}),h(m)},ADD_GOAL_DRAW:({},m,h)=>{m[i+"Score"]===m[n+"Score"]?(m[i+"Score"]++,m.log.push({text:"🎯 But bonus !",type:"info"})):m.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),h(m)},ADD_SUB:({value:m=1},h,T)=>{h.maxSubs=(h.maxSubs||3)+m,h.log.push({text:`🔄 +${m} remplacement(s)`,type:"info"}),T(h)},CUSTOM:({},m,h)=>h(m)};function ee(m,h,T,A){const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let M=[];function B(){var P,D;const G=m.map(H=>{const V={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[H._line]||"#555",Q=me(H,H._line)+(H.boost||0),we=M.find(J=>J.cardId===H.cardId)?"#FFD700":"rgba(255,255,255,0.25)",X=H.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${H.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${we};background:${V};overflow:hidden;cursor:pointer;${X}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${H.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${H._line}</div>
        </div>`}).join("");E.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${T}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${M.length}/${h}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${G}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${M.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${M.length}/${h})
          </button>
        </div>`,(P=E.querySelector("#pp-close"))==null||P.addEventListener("click",()=>E.remove()),E.querySelectorAll(".pp-item").forEach(H=>{H.addEventListener("click",()=>{const V=H.dataset.cid,Q=m.find(we=>we.cardId===V),ue=M.findIndex(we=>we.cardId===V);Q&&(ue>-1?M.splice(ue,1):M.length<h&&M.push(Q),B())})}),(D=E.querySelector("#pp-confirm"))==null||D.addEventListener("click",()=>{E.remove(),A(M)})}B(),document.body.appendChild(E)}async function $(m,h){const A=(d["gcCardsFull_"+i]||[]).find(G=>G.id===m),E=(A==null?void 0:A._gcDef)||(d.gcDefs||[]).find(G=>{var P;return G.name===h||((P=G.name)==null?void 0:P.toLowerCase().trim())===(h==null?void 0:h.toLowerCase().trim())}),M=[...d["usedGc_"+i]||[],m],B={type:h,by:i,seq:(d._gcAnimSeq||0)+1};q.add(B.seq),se(h,i,async()=>{if(E!=null&&E.effect_type&&E.effect_type!=="CUSTOM"){const P=ne[E.effect_type];if(P){const D={...d};P(E.effect_params||{},D,async H=>{H["usedGc_"+i]=M,H._lastGC=B,H._gcAnimSeq=B.seq,await F(H)});return}}const G={...d};switch(h){case"Remplacement+":G.maxSubs=(G.maxSubs||3)+1,G.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const P=n+"Score";G[P]>0&&(G[P]--,G.log.push({text:"🚫 But annulé",type:"info"}));break}}G["usedGc_"+i]=M,G._lastGC=B,G._gcAnimSeq=B.seq,await F(G)})}function j(m,h){const T="usedCardIds_"+m,A=new Set(d[T]||[]);h.forEach(E=>A.add(E)),d[T]=[...A]}function K(){for(const m of["p1","p2"]){const h=new Set(d["usedCardIds_"+m]||[]),T=d[m+"Team"];if(T)for(const A of["GK","DEF","MIL","ATT"])(T[A]||[]).forEach(E=>{E.used=h.has(E.cardId)})}}function _(){var Ke,Xt,Jt,Qt,Zt,ei;if(d.phase==="reveal")return U();if(d.phase==="midfield")return re();if(d.phase==="finished")return je();const m=d[i+"Team"],h=d[n+"Team"];K();const T=d[i+"Score"],A=d[n+"Score"],E=d[i+"Name"],M=d[n+"Name"],B=d.phase===i+"-attack",G=d.phase===i+"-defense",P=Array.isArray(d["selected_"+i])?d["selected_"+i]:[],D=P.map(O=>O.cardId),H=window.innerWidth>=700,V=d[i+"Subs"]||[],Q=d["usedSubIds_"+i]||[],ue=V.filter(O=>!Q.includes(O.cardId)),we=d["gcCardsFull_"+i]||[],X=d["usedGc_"+i]||[],J=we.filter(O=>!X.includes(O.id)),oe=d.boostOwner===i&&!d.boostUsed,de=!["GK","DEF","MIL","ATT"].some(O=>(h[O]||[]).some(te=>!te.used)),ye=[...m.MIL||[],...m.ATT||[]].filter(O=>!O.used),ke=B&&de&&ye.length===0?[...m.GK||[],...m.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function he(O,te,$e){var ni,ri;const le=O._gcDef,Ve={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ze={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",st=(le==null?void 0:le.name)||O.gc_type,lt=(le==null?void 0:le.effect)||((ni=Ce[O.gc_type])==null?void 0:ni.desc)||"",ti=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null,Ni=((ri=Ce[O.gc_type])==null?void 0:ri.icon)||"⚡",ii=Math.round($e*.22),oi=Math.round($e*.22),Lt=$e-ii-oi,Ri=st.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${te}px;height:${$e}px;border-radius:10px;border:2px solid ${Ze};background:${Ve};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ii}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ri}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${te-6}px">${st}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ti?`<img src="${ti}" style="max-width:${te-10}px;max-height:${Lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Lt*.55)}px">${Ni}</span>`}
        </div>
        <div style="height:${oi}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${lt.slice(0,38)}</span>
        </div>
      </div>`}function Ae(O,te){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${te}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(te*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(te*.2)}px">⚡</div>
        <div style="font-size:${Math.round(te*.09)}px;color:#000;font-weight:900">+${d.boostValue}</div>
      </div>`}const ze=(O,te)=>te?Ae(130,175):he(O,130,175),He=(O,te)=>te?Ae(68,95):he(O,68,95),De=H?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ge=B?be(i)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${P.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:G?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${P.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${M}</div>`,Me=B&&!be(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||G?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${P.length}/3 sélectionné(s)</div>`:"",qe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${H?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ue.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ue.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Be(O,H?76:44,H?100:58)}</div>`).join("")}
    </div>`,Fe=B?"attack":G?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${yt(m,d[i+"Formation"],Fe,D,300,300,ke)}
      </div>
    </div>`;function Re(O){if(O.type==="duel"&&(O.homeTotal!=null||O.aiTotal!=null)){const te=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
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
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const Qe=(()=>{var te,$e;if(G&&((te=d.pendingAttack)!=null&&te.players)){const le=d.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${M} ATTAQUE — Défendez !</div>
          ${et((le.players||[]).map(Ve=>({...Ve,used:!1})),"#ff6b6b",le.total)}
        </div>`}if(B&&(($e=d.pendingAttack)!=null&&$e.players)){const le=d.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((le.players||[]).map(Ve=>({...Ve,used:!1})),"#00ff88",le.total)}
        </div>`}const O=(d.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+Re(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Oe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${T} – ${A}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${M}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Qe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(d.log||[]).length})
      </button>`;Ye(e),e.style.overflow="hidden",H?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${qe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
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
              ${yt(m,d[i+"Formation"],Fe,D,300,300,ke)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${J.map(O=>He(O,!1)).join("")}
            ${oe?He(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&ue.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&ue.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&ue.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&ue.length>0?1:.4}">
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
      </div>`;function Se(){const O=e.querySelector(".match-screen");if(!O)return;const te=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=te+"px",O.style.minHeight=te+"px",O.style.maxHeight=te+"px",O.style.overflow="hidden";const $e=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");$e&&le&&(le.style.paddingBottom=$e.offsetHeight+"px")}if(Se(),setTimeout(Se,120),setTimeout(Se,400),b||(b=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Se),window.visualViewport.addEventListener("scroll",Se)),window.addEventListener("resize",Se)),function(){const te=e.querySelector(".terrain-wrapper svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("viewBox","-26 -26 352 352"),te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!B&&!G)return;const te=O.dataset.cardId,$e=O.dataset.role,le=(m[$e]||[]).find(lt=>lt.cardId===te);if(!le||le.used)return;const Ve=ke.includes(te);if(B&&!["MIL","ATT"].includes($e)&&!Ve)return;Array.isArray(d["selected_"+i])||(d["selected_"+i]=[]);const Ze=d["selected_"+i],st=Ze.findIndex(lt=>lt.cardId===te);st>-1?Ze.splice(st,1):Ze.length<3&&Ze.push({...le,_role:$e}),_()})}),e.querySelectorAll(".match-used-hit").forEach(O=>{O.addEventListener("click",()=>S(O.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>S())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>S()),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>ae(O.dataset.gcId,O.dataset.gcType))}),(Xt=e.querySelector("#pvp-boost-card"))==null||Xt.addEventListener("click",()=>z()),(Jt=e.querySelector("#pvp-action"))==null||Jt.addEventListener("click",O=>{B?O.currentTarget.dataset.pass==="1"||!be(i)?ie():Y():G&&ve()}),(Qt=e.querySelector("#pvp-quit"))==null||Qt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(Zt=e.querySelector("#pvp-view-opp"))==null||Zt.addEventListener("click",()=>C()),(ei=e.querySelector("#pvp-toggle-history"))==null||ei.addEventListener("click",()=>R()),v&&(clearInterval(v),v=null),(B||G)&&!x){let O=30,te=!1;const $e=()=>document.getElementById("pvp-timer"),le=()=>{$e()&&($e().textContent=O+"s",$e().style.color=te?"#ff4444":"#fff")};le(),v=setInterval(()=>{O--,O<0?te?(clearInterval(v),v=null,B&&!be(i)?ie():Z()):(te=!0,O=15,le()):le()},1e3)}}function U(){Ye(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${d[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${xt(d[n+"Team"],d[n+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await F({phase:"midfield"})},5e3)}let W=!1;function re(){if(W)return;const m=d[i+"Team"].MIL||[],h=d[n+"Team"].MIL||[];function T(J){return J.reduce((oe,de)=>oe+me(de,"MIL"),0)}function A(J){let oe=0;for(let de=0;de<J.length-1;de++){const ye=Je(J[de],J[de+1]);ye==="#00ff88"?oe+=2:ye==="#FFD700"&&(oe+=1)}return oe}const E=T(m)+A(m),M=T(h)+A(h),B=E>=M;function G(J,oe,de){return`<div id="duel-row-${de}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${oe}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${J.map((ye,ke)=>{const he=ke<J.length-1?Je(ye,J[ke+1]):null,Ae=!he||he==="#ff3333"||he==="#cc2222",ze=he==="#00ff88"?"+2":he==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${de}" data-idx="${ke}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Be({...ye,note:me(ye,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ke<J.length-1?`<div class="duel-link duel-link-${de}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ae?"rgba(255,255,255,0.12)":he};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ae?"none":`0 0 8px ${he}`}">
              ${ze?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${he}">${ze}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${de}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${T(J)} + ${A(J)} liens = <b style="color:#fff">${T(J)+A(J)}</b>
        </div>
      </div>`}Ye(e),e.innerHTML=`
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
      ${G(m,d[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${G(h,d[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(J,oe)=>e.querySelectorAll(J).forEach((de,ye)=>{setTimeout(()=>{de.style.opacity="1",de.style.transform="translateY(0) scale(1)"},oe+ye*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((J,oe)=>setTimeout(()=>{J.style.opacity="1"},oe*70)),900),setTimeout(()=>{const J=e.querySelector("#pvp-vs");J&&(J.style.opacity="1",J.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(oe=>oe.style.opacity="1")},1250);function D(J,oe,de){const ye=document.getElementById(J);if(!ye)return;const ke=performance.now(),he=Ae=>{const ze=Math.min(1,(Ae-ke)/de);ye.textContent=Math.round(oe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(he):ye.textContent=oe};requestAnimationFrame(he)}setTimeout(()=>{D("pvp-score-me",E,800),D("pvp-score-opp",M,800)},1500);const H=d.p1Team.MIL||[],V=d.p2Team.MIL||[],Q=T(H)+A(H),ue=T(V)+A(V),we=Q>=ue?"p1":"p2";let X=d.boostValue;X==null&&(X=Si(),d.boostValue=X,d.boostOwner=we,d.boostUsed=!1),W=!0,setTimeout(()=>{const J=e.querySelector("#duel-row-"+(B?"me":"opp")),oe=e.querySelector("#duel-row-"+(B?"opp":"me")),de=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),ke=B?de:ye,he=B?ye:de;ke&&(ke.style.fontSize="80px",ke.style.color=B?"#FFD700":"#ff6b6b",ke.style.animation="duelPulse .5s ease"+(B?",duelGlow 1.5s ease infinite .5s":"")),he&&(he.style.opacity="0.25"),setTimeout(()=>{J&&(J.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",J.style.zIndex="5"),setTimeout(()=>{const Ae=document.getElementById("duel-shock");Ae&&(Ae.style.animation="shockwave .5s ease-out forwards"),oe&&(oe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const Ae=document.getElementById("pvp-duel-finale");if(!Ae)return;const ze=d.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+X+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",He=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(B?"⚽ "+d[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+d[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+He,Ae.style.transition="opacity .45s ease",Ae.style.opacity="1",Ae.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ge=we;await F({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:X,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function ce(m,h,T,A,E){const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const B=Array.from({length:10},(H,V)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${V%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][V%8]}</div>`).join(""),G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};M.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${B}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${A?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${h} – ${T}
      </div>
      ${m!=null&&m.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${m.map(H=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${G[H.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${H.portrait?`<img src="${H.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(H.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(M);let P=!1;const D=()=>{P||(P=!0,M.remove(),setTimeout(()=>E(),50))};M.addEventListener("click",D),setTimeout(D,3500)}function se(m,h,T){var X,J;const A=(d.gcDefs||[]).find(oe=>{var de;return oe.name===m||((de=oe.name)==null?void 0:de.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),E={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[A==null?void 0:A.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",M={purple:"#b06ce0",light_blue:"#00d4ef"}[A==null?void 0:A.color]||"#b06ce0",B=(A==null?void 0:A.name)||m,G=(A==null?void 0:A.effect)||((X=Ce[m])==null?void 0:X.desc)||"",P=A!=null&&A.image_url?`/manager-wars/icons/${A.image_url}`:null,D=((J=Ce[m])==null?void 0:J.icon)||"⚡",V=h===i?"Vous":d[h+"Name"]||"Adversaire",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${M}66}50%{box-shadow:0 0 60px ${M}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${M};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${V} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${M};background:${E};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${P?`<img src="${P}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${D}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${G}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Q);let ue=!1;const we=()=>{ue||(ue=!0,Q.remove(),setTimeout(()=>T&&T(),50))};Q.addEventListener("click",we),setTimeout(we,3e3)}function ae(m,h){var Q,ue,we,X;const A=(d["gcCardsFull_"+i]||[]).find(J=>J.id===m),E=A==null?void 0:A._gcDef,M={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",G=(E==null?void 0:E.name)||h,P=(E==null?void 0:E.effect)||((Q=Ce[h])==null?void 0:Q.desc)||"Carte spéciale.",D=E!=null&&E.image_url?`/manager-wars/icons/${E.image_url}`:null,H=((ue=Ce[h])==null?void 0:ue.icon)||"⚡",V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",V.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${M};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${G.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${G}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${D?`<img src="${D}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${H}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(V),(we=V.querySelector("#pvp-gc-back"))==null||we.addEventListener("click",()=>V.remove()),(X=V.querySelector("#pvp-gc-use"))==null||X.addEventListener("click",()=>{V.remove(),$(m,h)})}function z(){var A;const m=d[i+"Team"],h=Object.entries(m).flatMap(([E,M])=>(M||[]).filter(B=>!B.used).map(B=>({...B,_line:E})));if(!h.length)return;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",T.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${d.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${h.map(E=>{const M={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[E._line]||"#555",B=me(E,E._line)+(E.boost||0);return`<div class="bp-item" data-cid="${E.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${M};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${E.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(T),(A=T.querySelector("#bp-close"))==null||A.addEventListener("click",()=>T.remove()),T.querySelectorAll(".bp-item").forEach(E=>{E.addEventListener("click",async()=>{const M=E.dataset.cid,B=h.find(P=>P.cardId===M);if(!B)return;const G=(m[B._line]||[]).find(P=>P.cardId===M);G&&(G.boost=(G.boost||0)+d.boostValue),T.remove(),await F({[i+"Team"]:m,boostUsed:!0})})})}function S(m=null){var ue,we;if(!(d.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const T=d[i+"Team"],A=d["usedSubIds_"+i]||[],E=d.maxSubs||3;if(A.length>=E){p(`Maximum ${E} remplacements atteint`,"warning");return}const M=Object.entries(T).flatMap(([X,J])=>(J||[]).filter(oe=>oe.used).map(oe=>({...oe,_line:X}))),B=(d[i+"Subs"]||[]).filter(X=>!A.includes(X.cardId));if(!M.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){p("Aucun remplaçant disponible","warning");return}let G=Math.max(0,M.findIndex(X=>X.cardId===m));const P=((ue=M[G])==null?void 0:ue._line)||((we=M[G])==null?void 0:we.job);let D=Math.max(0,B.findIndex(X=>X.job===P)),H=!1;const V=document.createElement("div");V.id="pvp-sub-overlay",V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var he,Ae,ze,He,De,Ge;const X=M[G],J=B[D],oe=Math.min(130,Math.round((window.innerWidth-90)/2)),de=Math.round(oe*1.35),ye=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;V.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${A.length}/${E})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ye(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${J?Be({...J,used:!1,boost:0},oe,de):"<div>—</div>"}</div>
          <button id="pin-down" style="${ye(D>=B.length-1)}" ${D>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ye(G===0)}" ${G===0?"disabled":""}>▲</button>
          <div>${X?Be({...X,used:!1,boost:0},oe,de):"<div>—</div>"}</div>
          <button id="pout-down" style="${ye(G>=M.length-1)}" ${G>=M.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${G+1}/${M.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(he=V.querySelector("#psub-close"))==null||he.addEventListener("click",()=>V.remove()),(Ae=V.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{G>0&&(G--,Q())}),(ze=V.querySelector("#pout-down"))==null||ze.addEventListener("click",()=>{G<M.length-1&&(G++,Q())}),(He=V.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{D>0&&(D--,Q())}),(De=V.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{D<B.length-1&&(D++,Q())});const ke=(Me,qe,Fe,Ue)=>{const Re=V.querySelector("#"+Me);if(!Re)return;let Qe=0;Re.addEventListener("touchstart",Oe=>{Qe=Oe.touches[0].clientY},{passive:!0}),Re.addEventListener("touchend",Oe=>{const Se=Oe.changedTouches[0].clientY-Qe;if(Math.abs(Se)<30)return;const Ke=qe();Se<0&&Ke<Ue-1?(Fe(Ke+1),Q()):Se>0&&Ke>0&&(Fe(Ke-1),Q())},{passive:!0})};ke("pin-panel",()=>D,Me=>D=Me,B.length),ke("pout-panel",()=>G,Me=>G=Me,M.length),(Ge=V.querySelector("#psub-confirm"))==null||Ge.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),H)return;H=!0;const qe=M[G],Fe=B[D];if(!qe||!Fe)return;const Ue=qe._line,Re=(T[Ue]||[]).findIndex(Se=>Se.cardId===qe.cardId);if(Re===-1){p("Erreur : joueur introuvable","error"),V.remove();return}const Qe={...Fe,_line:Ue,position:qe.position,used:!1,boost:0};T[Ue].splice(Re,1,Qe);const Oe=[...A,Fe.cardId];V.remove(),N(qe,Fe,async()=>{await F({[i+"Team"]:T,[n+"Team"]:d[n+"Team"],["usedSubIds_"+i]:Oe})})})}document.body.appendChild(V),Q()}function N(m,h,T){const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const M=(P,D,H)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${D};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${H}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${A[P.job]||"#555"};border:3px solid ${D};position:relative;overflow:hidden;margin:0 auto">
        ${Te(P)?`<img src="${Te(P)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(P.name||"").slice(0,12)}</div>
    </div>`;E.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${M(h,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${M(m,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(E);let B=!1;const G=()=>{B||(B=!0,E.remove(),setTimeout(()=>T(),50))};E.addEventListener("click",G),setTimeout(G,2200)}function C(){var h;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",m.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${d[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${xt(d[n+"Team"],d[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(m),(h=m.querySelector("#pvp-opp-close"))==null||h.addEventListener("click",()=>m.remove())}function R(){var T;const m=d.log||[],h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",h.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${m.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...m].reverse().map(A=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${A.type==="goal"?"#FFD700":A.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${A.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(h),(T=h.querySelector("#pvp-hist-close"))==null||T.addEventListener("click",()=>h.remove())}async function ie(){if(d.phase!==i+"-attack")return;const m=i==="p1"?"p2":"p1",h=(d.round||0)+1,T=[...d.log||[]];T.push({type:"info",text:`⏭️ ${d[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const A=Ee(d),E=be(m),M=A||!E?"finished":m+"-attack";await F({["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:M,attacker:m,round:h,log:T}),M==="finished"&&await Ie(d)}async function Y(){const m=d[i+"Team"],h=!["GK","DEF","MIL","ATT"].some(M=>(d[n+"Team"][M]||[]).some(B=>!B.used)),T=(d["selected_"+i]||[]).map(M=>{const B=(m[M._role]||[]).find(Q=>Q.cardId===M.cardId)||M,G=h&&["GK","DEF"].includes(M._role),P=m[M._role]||[],D=P.findIndex(Q=>Q.cardId===M.cardId),H=at(P.length),V=D>=0?H[D]:B._col??1;return{...B,_line:M._role,_col:V,...G?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!T.length)return;const A=Ot(T,d.modifiers[i]||{});j(i,T.map(M=>M.cardId)),T.forEach(M=>{const B=(m[M._role]||[]).find(G=>G.cardId===M.cardId);B&&(B.used=!0)}),d["selected_"+i]=[],_();const E=[...d.log||[]];if(h){const M=(d[i+"Score"]||0)+1,B=T.map(V=>({name:V.name,note:me(V,V._line||"ATT"),portrait:Te(V),job:V.job}));E.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:A.total,aiTotal:0});const G=(d.round||0)+1,P=i==="p1"?"p2":"p1",D={...d,[i+"Team"]:m,[i+"Score"]:M},H=Ee(D);I.add(G),ce(B,M,d[n+"Score"]||0,!0,async()=>{await F({[i+"Team"]:m,[i+"Score"]:M,["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:H?"finished":P+"-attack",attacker:P,round:G,log:E}),H&&await Ie({...d,[i+"Score"]:M})});return}E.push({type:"pending",text:`⚔️ ${d[i+"Name"]} attaque (${A.total})`}),await F({[i+"Team"]:m,[n+"Team"]:d[n+"Team"],pendingAttack:{...A,players:T,side:i},["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},phase:n+"-defense",log:E})}async function ve(){const m=d[i+"Team"],h=(d["selected_"+i]||[]).map(X=>{const J=(m[X._role]||[]).find(he=>he.cardId===X.cardId)||X,oe=m[X._role]||[],de=oe.findIndex(he=>he.cardId===X.cardId),ye=at(oe.length),ke=de>=0?ye[de]:J._col??1;return{...J,_line:X._role,_col:ke}}),T=Pt(h,d.modifiers[i]||{});j(i,h.map(X=>X.cardId)),h.forEach(X=>{const J=(m[X._role]||[]).find(oe=>oe.cardId===X.cardId);J&&(J.used=!0)}),d["selected_"+i]=[],_();const A=Ht(d.pendingAttack.total,T.total,d.modifiers[i]||{}),E=d.pendingAttack.side,M=A==="attack"||(A==null?void 0:A.goal),B=E==="p1"?"p2":"p1",G=(d.round||0)+1,P=(d.pendingAttack.players||[]).map(X=>({name:X.name,note:me(X,X._line||"ATT"),portrait:Te(X),job:X.job})),D=[...d.log||[]];D.push({type:"duel",isGoal:M,homeScored:M&&E===i,text:M?`⚽ BUT de ${d[E+"Name"]} ! (${d.pendingAttack.total} vs ${T.total})`:`✋ Attaque stoppée (${d.pendingAttack.total} vs ${T.total})`,homePlayers:P,aiPlayers:h.map(X=>({name:X.name,note:me(X,X._line||"DEF"),portrait:Te(X),job:X.job})),homeTotal:d.pendingAttack.total,aiTotal:T.total});const H=M?(d[E+"Score"]||0)+1:d[E+"Score"]||0,V={...d,[i+"Team"]:m,[E+"Score"]:H},Q=Ee(V),ue=Q?"finished":B+"-attack",we=async()=>{await F({[i+"Team"]:m,[n+"Team"]:d[n+"Team"],[E+"Score"]:H,["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:ue,attacker:B,round:G,log:D}),(ue==="finished"||Q)&&await Ie({...d,[E+"Score"]:H})};if(M){const X=E===i,J=X?H:d[i+"Score"]||0,oe=X?d[n+"Score"]||0:H;I.add(G),ce(P,J,oe,X,we)}else await we()}function xe(m){return["MIL","ATT"].some(h=>(m[h]||[]).some(T=>!T.used))}function ge(m){return["GK","DEF","MIL","ATT"].some(h=>(m[h]||[]).some(T=>!T.used))}function fe(m){return ge(m)&&!xe(m)}function be(m){const h=d[m+"Team"],T=d[(m==="p1"?"p2":"p1")+"Team"];return!!(xe(h)||!ge(T)&&fe(h))}function Ee(m){const h=["MIL","ATT"].some(D=>(m.p1Team[D]||[]).some(H=>!H.used)),T=["MIL","ATT"].some(D=>(m.p2Team[D]||[]).some(H=>!H.used)),A=ge(m.p1Team),E=ge(m.p2Team);return!h&&!(!E&&A)&&(!T&&!(!A&&E))}function Le(m){const h=m.p1Score||0,T=m.p2Score||0;return h===T?null:h>T?g.home_id:g.away_id}async function Ie(m){try{await L.from("matches").update({status:"finished",winner_id:Le(m),home_score:m.p1Score||0,away_score:m.p2Score||0}).eq("id",o)}catch(h){console.error("[PvP] finishMatch:",h)}}function je(){var E;const m=d[i+"Score"],h=d[n+"Score"],T=m>h,A=m===h;Ye(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${T?"🏆":A?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${T?"Victoire !":A?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${m} - ${h}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(E=document.getElementById("pvp-home"))==null||E.addEventListener("click",()=>{try{L.removeChannel(w)}catch{}Ne(e),s("home")})}_()}const Ko={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Vo(e,t){const{state:o,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Yt(e,t)}async function Yt(e,t){const{state:o,toast:r}=t,{data:c}=await L.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:l}=await L.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",o.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(i=>i.seller_id!==o.profile.id),s=l||[];s.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(o.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${s.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function p(i){const n=document.getElementById("mkt-content"),u=i==="buy"?a:s;if(u.length===0){n.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=i==="mine"?[...u].sort((g,y)=>g.status!==y.status?g.status==="active"?-1:1:new Date(y.listed_at)-new Date(g.listed_at)):u;n.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(g=>{var I,q,k,w;const y=(I=g.card)==null?void 0:I.player;if(!y)return"";const d=y.job==="GK"?y.note_g:y.job==="DEF"?y.note_d:y.job==="MIL"?y.note_m:y.note_a,x=Ko[y.rarity],v=(o.profile.credits||0)>=g.price,b=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${b?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Xo(y.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${d}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${y.firstname} ${y.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${y.country_code} · ${((q=y.clubs)==null?void 0:q.encoded_name)||"—"} · ${y.rarity} · ${y.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((k=g.seller)==null?void 0:k.pseudo)||"—"}</div>`:b?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((w=g.buyer)==null?void 0:w.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${v?"":"disabled"} style="margin-top:4px">${v?"Acheter":"Trop cher"}</button>`:b?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,n.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>Yo(g.dataset.buy,u,e,t))}),n.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>Wo(g.dataset.cancel,e,t))})}p("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(n=>{const u=n===i;n.style.background=u?"var(--green)":"#fff",n.style.color=u?"#fff":"var(--gray-600)",n.style.borderColor=u?"var(--green)":"var(--gray-200)"}),p(i.dataset.tab)})})}async function Yo(e,t,o,r){var u,f;const{state:c,toast:l}=r,a=t.find(g=>g.id===e);if(!a)return;const s=a.price,p=c.profile.credits||0,i=(u=a.card)==null?void 0:u.player;if(p<s){l("Crédits insuffisants","error");return}if(!confirm(`Acheter ${i==null?void 0:i.firstname} ${i==null?void 0:i.surname_encoded} pour ${s.toLocaleString("fr")} crédits ?`))return;const n=document.querySelector(`[data-buy="${e}"]`);n&&(n.disabled=!0,n.textContent="⏳");try{const{data:g,error:y}=await L.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(y)throw new Error(y.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");if(a.card_id||(f=a.card)!=null&&f.id){const x=a.card_id||a.card.id;L.rpc("record_transfer",{p_card_id:x,p_player_id:(i==null?void 0:i.id)||null,p_club_name:c.profile.club_name||c.profile.pseudo,p_manager_name:c.profile.pseudo,p_source:"market",p_price:s}).then(()=>{}).catch(()=>{})}c.profile.credits=p-s;const d=document.querySelector("[data-credits]")||document.querySelector(".credits-display");d&&(d.textContent=(p-s).toLocaleString("fr")+" cr."),l(`✅ ${i==null?void 0:i.surname_encoded} ajouté à ta collection !`,"success"),Yt(o,r)}catch(g){l("❌ "+g.message,"error"),n&&(n.disabled=!1,n.textContent="Acheter")}}async function Wo(e,t,o){const{toast:r}=o,{data:c}=await L.from("market_listings").select("card_id").eq("id",e).single();await L.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await L.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),r("Annonce retirée","success"),Yt(t,o)}function Xo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Jo(e,{state:t,navigate:o,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await L.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((l,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${l.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${a+1}</div>
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
  `}async function Qo(e,{state:t,navigate:o,toast:r}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await L.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(l||[]).filter(n=>n.status==="finished"),p=(l||[]).filter(n=>n.status==="in_progress");function i(n){const u=n.home_id===c.id;u?n.home_score:n.away_score,u?n.away_score:n.home_score;const f=n.winner_id===c.id,g=n.home_score===n.away_score&&n.status==="finished",y=n.status!=="finished"?"…":g?"N":f?"V":"D",d=n.status!=="finished"||g?"#888":f?"#1A6B3C":"#c0392b";let x=a[n.mode]||n.mode;n.away_id===null&&!x.startsWith("IA")&&(x="IA");const b=n.home_id===c.id?n.away:n.home;let I;n.away_id===null?I=x:b?I=`${b.club_name||b.pseudo} (${b.pseudo})`:I="Adversaire";let q="";n.status==="in_progress"&&Date.now()-new Date(n.created_at).getTime()>3600*1e3&&(q=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const k=new Date(n.created_at),w=k.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+k.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),F=n.status==="finished"?`${n.home_score} - ${n.away_score}`:`${n.home_score||0} - ${n.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${I}${q}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${w}${n.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${F}</span>
        <span style="background:${d};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${y}</span>
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
          ${p.map(i).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(i).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Oi(Hi);const pe={user:null,profile:null,page:"home",params:{}};function pt(e,t="info",o=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},o))}function Zo(e,t,o=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=o,document.getElementById("modal-overlay").classList.remove("hidden")}function qt(){document.getElementById("modal-overlay").classList.add("hidden")}async function ut(){if(!pe.user)return;const{data:e}=await L.from("users").select("*").eq("id",pe.user.id).single();e&&(pe.profile=e)}const Wt="mw_theme";function At(){return localStorage.getItem(Wt)||"light"}function en(e){var t;localStorage.setItem(Wt,e),Nt(e),(t=pe.profile)!=null&&t.id&&L.from("users").update({theme:e}).eq("id",pe.profile.id).then(()=>{})}function Nt(e){document.documentElement.setAttribute("data-theme",e)}function $t(e,t={}){pe.page=e,pe.params=t,Gi()}async function Gi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(r=>{r.classList.toggle("active",r.dataset.page===pe.page)});const t=document.getElementById("nav-credits");t&&pe.profile&&(t.textContent=`💰 ${(pe.profile.credits||0).toLocaleString("fr")}`);const o={state:pe,navigate:$t,toast:pt,openModal:Zo,closeModal:qt,refreshProfile:ut};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',pe.page){case"home":await si(e,o);break;case"collection":await Qi(e,o);break;case"decks":await Ct(e,o);break;case"boosters":await fo(e,o);break;case"match":{(pe.params&&pe.params.matchMode||"vs_ai_easy")==="random"?await Po(e,o):await To(e,o);break}case"market":await Vo(e,o);break;case"rankings":await Jo(e,o);break;case"matches":await Qo(e,o);break;default:await si(e,o)}}function tn(){const e=document.getElementById("app"),t=pe.profile;if(!t)return;const o="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),$t(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>$t("home")),document.getElementById("nav-credits").addEventListener("click",()=>$t("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=At()==="dark"?"light":"dark";en(c),mi(c)}),mi(At())}function mi(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function on(){Nt(At()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&qt()}),document.getElementById("modal-close").addEventListener("click",qt);const{data:{session:e}}=await L.auth.getSession();if(!e){xi(),ai(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt});return}pe.user=e.user,await ut(),xi();try{const{data:o}=await L.from("formation_links_overrides").select("formation, links"),r={};(o||[]).forEach(c=>{r[c.formation]=c.links}),Pi(r)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!pe.profile){Ui(document.getElementById("app"),{state:pe,navigate:async()=>{await ut(),St()},toast:pt,refreshProfile:ut});return}const t=Array.isArray(pe.profile.pending_boosters)?pe.profile.pending_boosters:[];if(!pe.profile.onboarding_done&&t.length>0){ko(document.getElementById("app"),{state:pe,navigate:()=>St(),toast:pt,refreshProfile:ut});return}pe.profile.theme&&pe.profile.theme!==At()&&(localStorage.setItem(Wt,pe.profile.theme),Nt(pe.profile.theme)),St(),L.auth.onAuthStateChange(async(o,r)=>{o==="SIGNED_OUT"&&(pe.user=null,pe.profile=null,document.getElementById("app").innerHTML="",ai(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt}))})}function nn(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function It(){const e=document.getElementById("app");e&&(e.style.height=nn()+"px")}window.addEventListener("resize",It);window.addEventListener("orientationchange",()=>setTimeout(It,150));window.visualViewport&&window.visualViewport.addEventListener("resize",It);function St(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",It(),tn(),Gi()}function xi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function qi(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const o=document.createElement("div");o.id="boot-error",o.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",o.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(o),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}on().catch(e=>{console.error("Échec du démarrage:",e),qi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&qi("Le serveur met trop de temps à répondre.")},12e3);
