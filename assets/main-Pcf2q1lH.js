import{s as z,F as xt,b as Ne,c as ei,l as $e,d as vi}from"./formation-links-Bt44rMnM.js";function qt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await z.auth.signInWithPassword({email:n,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await z.auth.signUp({email:n,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function wi(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var I;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((I=document.getElementById("setup-club"))==null?void 0:I.value)||"MW",m=u.trim().split(" ").filter(Boolean),x=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),r&&(r.textContent=x,r.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await z.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await z.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),m=document.getElementById("step3-finish");u.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:x}=await z.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(x)throw x;await $i(t.user.id),await d(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){u.textContent=x.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function $i(e){const{data:t}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const u=Rt([...d]).slice(0,3);o.push(...u)}else o=Rt([...i]).slice(0,4);o.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await z.from("cards").insert(s),await z.from("users").update({first_booster_opened:!0}).eq("id",e)}function Rt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const _i="2026.06.22-2158";async function Nt(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;d&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${d.club_color1};border:2px solid ${d.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${d.pseudo}</h3>
          <div class="level">Niveau ${d.level} · ${d.club_name}</div>
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
        ${d.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${_i}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){ki(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await z.auth.signOut(),window.location.reload()}))}function ki(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(d=>`
            <div class="action-card" data-mode="${d.mode}" style="cursor:pointer">
              <div class="icon">${d.icon}</div>
              <div class="label">${d.label}</div>
              <div class="sub">${d.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const me={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function re(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ot=["ATT","MIL","DEF","GK"];function ti(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Ot.indexOf(s._line),r=Ot.indexOf(a._line),u=Math.abs(o-r)===1;(s._line===a._line&&c||l&&u)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function yt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=ti(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function ht(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),n=ti(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function bt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function ii(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const d=[...n].sort((a,l)=>{const c=t==="attack"?re(a,"ATT"):a._line==="GK"?re(a,"GK"):re(a,"DEF");return(t==="attack"?re(l,"ATT"):l._line==="GK"?re(l,"GK"):re(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Ei(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const oi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Je={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},He=["GK","DEF","MIL","ATT"],Ti=["Tous","GK","DEF","MIL","ATT"],Ii={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},vt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ni(e){return null}function Ge(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function lt(e,t=""){var u,m;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=Je[n],s=oi[i.rarity]||"#ccc",a=Ge(i,n),l=i.job2?Ge(i,i.job2):null,c=i.job2?Je[i.job2]:null,o=ni(),r=vt[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${d}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${d}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
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
        ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=i.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Pt(e){const t=e.job||"ATT",i=Ge(e,t),n=vt[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${n}</div>
      </div>
    </div>
  </div>`}async function Ai(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await z.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await z.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(f=>f.card_type==="player"&&f.player),r=(l||[]).filter(f=>f.card_type==="game_changer"),u=(l||[]).filter(f=>f.card_type==="formation"),{data:m}=await z.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(m||[]).forEach(f=>{x[f.name]=f});const I=Object.keys(xt),p=Object.keys(me),v={};o.forEach(f=>{const g=f.player.id;v[g]=(v[g]||0)+1}),new Set(Object.keys(v).map(f=>String(f)));const C=new Set(u.map(f=>f.formation)),_=new Set(r.map(f=>f.gc_type));let L="player",w="Tous",S="",A=!1;function F(){return[...o].sort((f,g)=>{const y=He.indexOf(f.player.job),h=He.indexOf(g.player.job);return y!==h?y-h:(f.player.surname_encoded||"").localeCompare(g.player.surname_encoded||"")})}function q(){return[...c||[]].sort((f,g)=>{const y=He.indexOf(f.job),h=He.indexOf(g.job);return y!==h?y-h:(f.surname_encoded||"").localeCompare(g.surname_encoded||"")})}function P(){return F().filter(f=>{const g=f.player,y=w==="Tous"||g.job===w,h=!S||`${g.firstname} ${g.surname_encoded}`.toLowerCase().includes(S);return y&&h})}function k(){return q().filter(f=>{const g=w==="Tous"||f.job===w,y=!S||`${f.firstname} ${f.surname_encoded}`.toLowerCase().includes(S);return g&&y})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${L==="player"?"var(--green)":"transparent"};
        color:${L==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${L==="formation"?"var(--green)":"transparent"};
        color:${L==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${L==="gc"?"var(--green)":"transparent"};
        color:${L==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function G(){const f=document.getElementById("col-filters");f&&(L==="player"?(f.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${S}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Ti.map(g=>`
            <button class="filter-btn" data-job="${g}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${g===w?"var(--green)":"var(--gray-200)"};
                background:${g===w?"var(--green)":"#fff"};
                color:${g===w?"#fff":"var(--gray-600)"}">
              ${g}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${A?"var(--yellow)":"var(--gray-200)"};
              background:${A?"var(--yellow)":"#fff"};
              color:${A?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${A?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",g=>{S=g.target.value.toLowerCase(),M()}),e.querySelectorAll(".filter-btn").forEach(g=>{g.addEventListener("click",()=>{w=g.dataset.job,G(),M()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{A=!A,G(),M()})):(f.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${A?"var(--yellow)":"var(--gray-200)"};
              background:${A?"var(--yellow)":"#fff"};
              color:${A?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${A?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{A=!A,G(),M()})))}function M(){const f=document.getElementById("col-grid");f&&(L==="player"?W(f):L==="formation"?se(f):b(f))}function O(f,g,y,h,E){E=E||"#7a28b8";const $=document.getElementById("col-grid"),T=document.getElementById("col-big");if(!$||!T)return;var B=0;function j(){T.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+g(f[B])+"</div>";var R=T.querySelector("[data-card-id],[data-form-id],[data-gc-id]");R&&R.addEventListener("click",function(){h(f[B])}),requestAnimationFrame(function(){var N=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!N||!T)){var V=T.clientHeight-8,X=T.clientWidth-24,Y=N.offsetHeight,Q=N.offsetWidth;if(Y>0&&Q>0&&V>40){var K=Math.min(V/Y,X/Q,1);N.style.transform="scale("+K.toFixed(3)+")",N.style.transformOrigin="top center"}}}),$.innerHTML=f.map(function(N,V){return'<div class="col-mini-item" data-idx="'+V+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(V===B?E:"transparent")+';transition:border-color .15s;overflow:hidden">'+y(N,V===B)+"</div>"}).join(""),$.querySelectorAll(".col-mini-item").forEach(function(N){N.addEventListener("click",function(){B=Number(N.dataset.idx),j(),N.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}j()}function D(f){var g=.54,y=Math.round(140*g),h=Math.round(310*g),E;if(!f||f._fake){var $=f?f.player:null;if(!$)return"";E=Pt($)}else E=lt(f,"");return'<div style="width:'+y+"px;height:"+h+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+g+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+E+"</div></div>"}function U(f,g,y){g=g||100,y=y||140;var h=Ne[f]||{},E={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},$=Math.max(3,Math.round(g*.06)),T=Object.entries(h).map(function(j){var R=j[0],N=j[1],V=R.replace(/\d+$/,""),X=E[V]||"#888",Y=Math.round(N.x*g),Q=Math.round(N.y*y);return'<circle cx="'+Y+'" cy="'+Q+'" r="'+$+'" fill="'+X+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),B=Math.max(1,Math.round(g/50));return'<svg viewBox="0 0 '+g+" "+y+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+g+'" height="'+y+'" fill="#1A6B3C"/><rect x="'+Math.round(g*.2)+'" y="'+Math.round(y*.02)+'" width="'+Math.round(g*.6)+'" height="'+Math.round(y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+B+'"/><line x1="0" y1="'+Math.round(y*.5)+'" x2="'+g+'" y2="'+Math.round(y*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+B+'"/><ellipse cx="'+Math.round(g*.5)+'" cy="'+Math.round(y*.5)+'" rx="'+Math.round(g*.18)+'" ry="'+Math.round(y*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+B+'"/><rect x="'+Math.round(g*.2)+'" y="'+Math.round(y*.82)+'" width="'+Math.round(g*.6)+'" height="'+Math.round(y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+B+'"/>'+T+"</svg>"}function J(f,g,y){var h=y>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+y+"</div>":"",E=g?'data-form-id="'+g.id+'"':"",$=f.length>7?14:f.length>5?16:19,T=!!g;return"<div "+E+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(T?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(T?"":"filter:grayscale(1);opacity:0.5")+'">'+h+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(T?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+$+"px;font-weight:900;color:"+(T?"#1A6B3C":"#aaa")+';line-height:1">'+f+'</div></div><div style="flex:1;overflow:hidden;background:'+(T?"#1A6B3C":"#ccc")+'">'+U(f,140,220)+"</div></div>"}function te(f,g){var y=.54,h=Math.round(140*y),E=Math.round(305*y),$=Math.round(E*.22),T=E-$,B=f.length>7?5:7,j=U(f,h,T),R=g?"1.5px solid #2a7a40":"1px solid #ddd",N=g?"":"filter:grayscale(1);opacity:0.45;",V=g?"#1A6B3C":"#bbb",X="#fff";return'<div style="width:'+h+"px;height:"+E+"px;border-radius:6px;border:"+R+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+N+'"><div style="height:'+$+"px;background:"+V+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+B+"px;font-weight:900;color:"+X+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(h-4)+'px">'+f+'</span></div><div style="height:'+T+'px;overflow:hidden;flex-shrink:0">'+j+"</div></div>"}function W(f){if(A){const g=k();if(!g.length){f.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const y=g.map(h=>o.find(E=>E.player.id===h.id)||{_fake:!0,player:h,id:"fake-"+h.id});O(y,h=>h._fake?Pt(h.player):lt(h,""),h=>h._fake?D({player:h.player,id:"x",_fake:!0}):D(h),h=>{h._fake||Ht(h,o,v,t)},"#1A6B3C")}else{const g=P();if(!g.length){f.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const y={},h=[];g.forEach(E=>{y[E.player.id]||(y[E.player.id]=!0,h.push(E))}),O(h,E=>{const $=v[E.player.id]||1,T=$>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${$}</div>`:"",j=o.filter(R=>R.player.id===E.player.id&&R.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return lt(E,T+j)},E=>D(E),E=>Ht(E,o,v,t),"#1A6B3C")}}function se(f){const g=A?I:[...C];if(!g.length){f.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const y=g.map(h=>({formation:h,card:u.find(E=>E.formation===h)||null,owned:C.has(h)}));O(y,({formation:h,card:E,owned:$})=>J(h,$?E:null,$?u.filter(T=>T.formation===h).length:0),({formation:h,owned:E})=>te(h,E),({card:h,owned:E})=>{E&&h&&Mi(h,u,t,s)},"#1A6B3C")}function b(f){const g=Object.keys(x),y=A?g.length?g:p:[..._];if(!y.length){f.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const h=y.map(E=>({type:E,gc:me[E]||{icon:"⚡",desc:""},def:x[E]||null,owned:_.has(E),card:r.find($=>$.gc_type===E)||null}));O(h,({type:E,gc:$,def:T,owned:B,card:j})=>{const R=B?r.filter(le=>le.gc_type===E).length:0,N=R>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${R}</div>`:"",V=(T==null?void 0:T.gc_type)==="ultra_game_changer",X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Y={purple:"#b06ce0",light_blue:"#00d4ef"},Q=X[T==null?void 0:T.color]||X.purple,K=Y[T==null?void 0:T.color]||Y.purple,ee=(T==null?void 0:T.effect)||$.desc||"",ie=T!=null&&T.image_url?`/manager-wars/icons/${T.image_url}`:null;return B&&j?`<div data-gc-id="${j.id}" data-gc-type="${E}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${K};background:${Q};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${K}66;cursor:pointer">
          ${N}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${E.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${V?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ie?`<img src="${ie}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${$.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${ee.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${E}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${$.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:E,gc:$,def:T,owned:B})=>B?(()=>{const j=Math.round(75.60000000000001),R=Math.round(310*.54),N=Math.round(R*.65),V=Math.round(R*.18),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Y={purple:"#9b59b6",light_blue:"#00bcd4"},Q=X[T==null?void 0:T.color]||X.purple,K=Y[T==null?void 0:T.color]||Y.purple,ee=T!=null&&T.image_url?`/manager-wars/icons/${T.image_url}`:null;return`<div style="width:${j}px;height:${R}px;border-radius:8px;background:${Q};border:1px solid ${K};display:flex;flex-direction:column;overflow:hidden"><div style="height:${V}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${j-6}px">${E}</span></div><div style="height:${N}px;display:flex;align-items:center;justify-content:center">${ee?`<img src="${ee}" style="max-width:${j-8}px;max-height:${N-4}px;object-fit:contain">`:`<span style="font-size:24px">${$.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((T==null?void 0:T.effect)||$.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const j=Math.round(75.60000000000001),R=Math.round(310*.54);return`<div style="width:${j}px;height:${R}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${$.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${E}</span></div>`})(),({type:E,owned:$,def:T})=>{$&&Li(E,T,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(f=>{f.addEventListener("click",()=>{L=f.dataset.tab,w="Tous",S="",A=!1,e.querySelectorAll(".col-tab-btn").forEach(g=>{const y=g.dataset.tab===L;g.style.borderBottomColor=y?"var(--green)":"transparent",g.style.color=y?"var(--green)":"var(--gray-600)"}),G(),M()})}),G(),M()}function Li(e,t,i){const n=me[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const je=1e3;function Mi(e,t,i,n){var p,v,C;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const _=Ne[o]||{},L=xt[o]||[],w=290,S=360,A=20;function F(P){const k=_[P];return k?{x:k.x*w,y:k.y*S}:null}let q=`<svg width="${w}" height="${S}" viewBox="0 0 ${w} ${S}" xmlns="http://www.w3.org/2000/svg">`;for(const[P,k]of L){const G=F(P),M=F(k);!G||!M||(q+=`<line x1="${G.x}" y1="${G.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const P of Object.keys(_)){const k=F(P);if(!k)continue;const G=P.replace(/\d+/,""),M=r[G]||"#555";q+=`<circle cx="${k.x}" cy="${k.y}" r="${A}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,q+=`<text x="${k.x}" y="${k.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${G}</text>`}return q+="</svg>",q}const m=t.filter(_=>_.formation===o),x=m.length,I=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${je.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${x-1} carte${x-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${x<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${I?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${je}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${je.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=m.find(w=>!w.is_for_sale)||m[0];if(!_){s("Aucune carte à vendre","error");return}const{error:L}=await z.from("cards").delete().eq("id",_.id);if(L){s(L.message,"error");return}await z.from("users").update({credits:(d.profile.credits||0)+je}).eq("id",d.profile.id),await c(),s(`+${je.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(v=document.getElementById("market-sell-form-btn"))==null||v.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){s("Prix invalide","error");return}await z.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",e.id),await z.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:_}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(C=document.getElementById("cancel-sell-form-btn"))==null||C.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function Ht(e,t,i,n){var q,P,k,G,M,O;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=n,r=e.player,u=t.filter(D=>D.player.id===r.id),m=u.length,x=Ii[r.rarity]||1e3,I=r.rarity!=="legende",p=ni(),v=Ge(r,r.job),C=r.job2?Ge(r,r.job2):null,_=Je[r.job]||"#1A6B3C",L=r.job2?Je[r.job2]:null,w=oi[r.rarity]||"#ccc",S=vt[r.country_code]||r.country_code||"",{data:A}=await z.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),F=A&&A.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${A.map(D=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${D.club_name} <span style="color:var(--gray-600)">(${D.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${D.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${D.source==="booster"?"Booster":D.price?D.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${w};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${_}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${_}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${v}</text>
            </svg>
            ${C!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${L}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${S}</div>
            ${(q=r.clubs)!=null&&q.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((P=r.clubs)==null?void 0:P.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${w}">${r.rarity.toUpperCase()}</div>
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
          <div style="font-weight:700;font-size:18px">×${m}</div>
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${x.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${I&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(k=document.getElementById("close-detail"))==null||k.addEventListener("click",l),(G=document.getElementById("direct-sell-btn"))==null||G.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${x.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const D=u.find(J=>!J.is_for_sale)||u[0];if(!D){s("Aucune carte à vendre","error");return}const{error:U}=await z.from("cards").delete().eq("id",D.id);if(U){s(U.message,"error");return}await z.from("users").update({credits:(d.profile.credits||0)+x}).eq("id",d.profile.id),await o(),s(`+${x.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(M=document.getElementById("market-sell-btn"))==null||M.addEventListener("click",async()=>{const D=parseInt(document.getElementById("sell-price").value);if(!D||D<1){s("Prix invalide","error");return}await z.from("cards").update({is_for_sale:!0,sale_price:D}).eq("id",e.id),await z.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:D}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(O=document.getElementById("cancel-sell-btn"))==null||O.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const Ie={},Qe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ve={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ot(e){const t=typeof import.meta<"u"?Ie==null?void 0:Ie.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ri(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ai(e){var i;const t=(Ie==null?void 0:Ie.VITE_SUPABASE_URL)||"";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null:null}function zi(e,t=44,i=58){var x;const n=e?ot(e):null,d=e?ai(e):null,s=ri(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=ve[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),m=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(x=e==null?void 0:e.clubs)!=null&&x.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function dt(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await z.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Ut(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Ut(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await z.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),dt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await z.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await z.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),dt(e,t)})})}async function Ut(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("*").eq("id",e).single(),{data:a}=await z.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(x=>x.card_type==="player"&&x.player),c=(a||[]).filter(x=>x.card_type==="formation"),o=c.map(x=>x.formation).filter(Boolean),{data:r}=await z.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const m={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(r||[]).forEach(x=>{x.is_starter?m.slots[x.position]=x.card_id:m.subs.includes(x.card_id)||m.subs.push(x.card_id)}),Me(t,m,i)}function Me(e,t,i){var c;const{navigate:n}=i;Qe[t.formation];const d=Kt(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Qe),l=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(o=>`<option value="${o}" ${o===t.formation?"selected":""}>${o}</option>`).join("")}
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
        ${l.map(o=>{const r=o.player;return`<div style="position:relative;flex-shrink:0">
            ${zi(r,44,58)}
            <button data-remove-sub="${o.id}"
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
  </div>`,Si(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=Kt(t.formation),u={};r.forEach(m=>{t.slots[m]&&(u[m]=t.slots[m])}),t.slots=u,Me(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Bi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),Me(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{ji(t,e,i)})}function Si(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const s=Ne[t.formation]||{},a=ei(t.formation)||[],l={};for(const C of i){const _=t.slots[C],L=_?t.playerCards.find(w=>w.id===_):null;l[C]=L?L.player:null}const c=300,o=300,r=48,u=64,m=13,x=16,I=38;function p(C){const _=s[C];return _?{x:_.x*c,y:_.y*o}:null}let v="";for(const[C,_]of a){const L=p(C),w=p(_);if(!L||!w)continue;const S=l[C]?{...l[C],club_id:l[C].club_id,country_code:l[C].country_code,rarity:l[C].rarity}:null,A=l[_]?{...l[_],club_id:l[_].club_id,country_code:l[_].country_code,rarity:l[_].rarity}:null,F=$e(S,A);F==="#ff3333"||F==="#cc2222"?v+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(v+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${F}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,v+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const _=p(C);if(!_)continue;const L=l[C],w=C.replace(/\d+/,""),S=ve[w]||"#555",A=(_.x-r/2).toFixed(1),F=(_.y-u/2).toFixed(1),q={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[L==null?void 0:L.rarity]||"#aaa";if(L){const P=ot(L),k=ai(L),G=ri(L.country_code),M=Number(w==="GK"?L.note_g:w==="DEF"?L.note_d:w==="MIL"?L.note_m:L.note_a)||0,O=u-m-x;v+=`<defs><clipPath id="dcp-${C}"><rect x="${A}" y="${(_.y-u/2+m).toFixed(1)}" width="${r}" height="${O}"/></clipPath></defs>`,v+=`<rect x="${A}" y="${F}" width="${r}" height="${u}" rx="5" fill="${S}"/>`,P&&(v+=`<image href="${P}" x="${A}" y="${(_.y-u/2+m).toFixed(1)}" width="${r}" height="${O}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${A}" y="${F}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,v+=`<text x="${_.x.toFixed(1)}" y="${(_.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(L.surname_encoded||"").slice(0,9)}</text>`;const D=(_.y+u/2-x).toFixed(1);v+=`<rect x="${A}" y="${D}" width="${r}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,G&&(v+=`<image href="${G}" x="${(_.x-21).toFixed(1)}" y="${(_.y+u/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),v+=`<text x="${_.x.toFixed(1)}" y="${(_.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${M}</text>`,k&&(v+=`<image href="${k}" x="${(_.x+r/2-14).toFixed(1)}" y="${(_.y+u/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),v+=`<rect x="${A}" y="${F}" width="${r}" height="${u}" rx="5" fill="none" stroke="${q}" stroke-width="2"/>`}else v+=`<rect x="${A}" y="${F}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,v+=`<text x="${_.x.toFixed(1)}" y="${_.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,v+=`<text x="${_.x.toFixed(1)}" y="${(_.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${w}</text>`;v+=`<rect x="${A}" y="${F}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-I} ${-I} ${c+I*2} ${o+I*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${v}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>Ci(C.dataset.pos,t,e,n))})}function Ci(e,t,i,n){var m,x,I;const{openModal:d,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(p=>p.id===l):null;(m=c==null?void 0:c.player)==null||m.id;const o=new Set;Object.entries(t.slots).forEach(([p,v])=>{var _;if(p===e||!v)return;const C=t.playerCards.find(L=>L.id===v);(_=C==null?void 0:C.player)!=null&&_.id&&o.add(C.player.id)}),t.subs.forEach(p=>{var C;const v=t.playerCards.find(_=>_.id===p);(C=v==null?void 0:v.player)!=null&&C.id&&o.add(v.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const v=p.player;return!(v.job===a||v.job2===a)||o.has(v.id)||r.has(v.id)?!1:(r.add(v.id),!0)});u.sort((p,v)=>{const C=a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a;return(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)-C}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var w,S;const v=p.player,C=a==="GK"?v.note_g:a==="DEF"?v.note_d:a==="MIL"?v.note_m:v.note_a,_=ot(v),L={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[v.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ve[a]}">
            ${_?`<img src="${_}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ve[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${v.firstname} ${v.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${v.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${v.country_code}">
              ${(w=v.clubs)!=null&&w.logo_url?`<img src="${v.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((S=v.clubs)==null?void 0:S.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${v.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ve[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${L};flex-shrink:0">
            ${C}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",s),(I=document.getElementById("remove-player"))==null||I.addEventListener("click",()=>{delete t.slots[e],s(),Me(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),Me(i,t,n)})})}function ji(e,t,i){var c;const{openModal:n,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(m=>m.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(m=>m.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var r,u,m;return s.has((r=o.player)==null?void 0:r.id)||a.has((u=o.player)==null?void 0:u.id)?!1:(a.add((m=o.player)==null?void 0:m.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var x;const r=o.player,u=ot(r),m=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ve[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((x=r.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ve[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),Me(t,e,i)})})}async function Bi(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await z.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await z.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await z.from("deck_cards").insert(l);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Kt(e){const t=Qe[e]||Qe["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Fi(){const{data:e}=await z.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await z.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function Di(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const si=()=>Object.keys(Ne),Gi=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ct={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function qi(e){return null}const Vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ni={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Yt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Oi(e){var r,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Vt[i],d=Ri[t.rarity]||"#ccc",s=Yt(t,i),a=t.job2?Yt(t,t.job2):null,l=t.job2?Vt[t.job2]:null,c=qi(),o=Ni[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${d};cursor:pointer;flex-shrink:0;position:relative">
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
        ${c?`<img src="${c}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Pi(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Hi(e,{state:t,navigate:i,toast:n}){var a;const d=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Fi()).map(Pi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Gi.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(l=>{const c=l.cost===0||d>=l.cost;return`<div class="booster-card ${c?"":"disabled"}" data-booster="${l.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Ui(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(r=>r.id===l.dataset.boosterId);Zi(o)})})}async function Ui(e,{state:t,toast:i,navigate:n,container:d}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await io()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await z.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Wt(t.profile,e);else{const u=e.type||"player";u==="player"?c=await Yi(t.profile,e.cardCount,e.cost):u==="game_changer"?c=await Wi(t.profile,e.cardCount,e.cost):u==="formation"?c=await Xi(t.profile,e.cost):c=await Wt(t.profile,e)}c.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:o}=await z.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),Ji(c,e,n)}function Ki(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Te(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Vi(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Te(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Te(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Te(n)>=6),i.length||(i=e.filter(n=>Te(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Te(n)>=1&&Te(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Wt(e,t){if(t.cost>0){const{error:n}=await z.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const d=Di(t.rates);if(d){if(d.card_type==="player"){const s=m=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[m]||m,a=d.rarity?s(d.rarity):null;let l=z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(m=>{const x=Math.max(Number(m.note_g)||0,Number(m.note_d)||0,Number(m.note_m)||0,Number(m.note_a)||0);return(!d.note_min||x>=d.note_min)&&(!d.note_max||x<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:u}=await z.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(i.push({...u,player:r}),z.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await z.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await z.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=si(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function Yi(e,t,i){if(i>0){const{error:o}=await z.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(o=>o.job==="GK"),s=n.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const r=o===0&&a?d:o===0?s:n,u=Ki(),m=Vi(r,u);m&&l.push(m)}a&&await z.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await z.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{z.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,r)=>({...c[r],player:o}))}async function Wi(e,t,i){const{error:n}=await z.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await z.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(ct).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await z.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const u=d==null?void 0:d.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Xi(e,t){const{error:i}=await z.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=si(),d=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function Ji(e,t,i){var G;if(!e||e.length===0){const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",M.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(M),(G=M.querySelector("#anim-close-err"))==null||G.addEventListener("click",()=>M.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=M=>M.touches&&M.touches[0]?M.touches[0].clientX:M.clientX;function o(M){d||(l=!0,a.style.opacity="1",r(M))}function r(M){if(!l||d)return;const O=s.getBoundingClientRect(),D=c(M)-O.left,U=Math.max(0,Math.min(1,D/O.width));a.style.width=U*O.width+"px",U>=.82&&m()}function u(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function m(){var O;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(O=document.getElementById("cut-flash"))==null||O.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const M=document.getElementById("cut-hint");M&&(M.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",v(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let x=0,I=!1;const p=new Set;function v(M){x=M,document.getElementById("reveal-phase").style.display="flex",C(),_(M,0),F()}function C(){const M=document.getElementById("card-dots");M&&(M.innerHTML=e.map((O,D)=>`<div class="card-dot" data-i="${D}" style="width:8px;height:8px;border-radius:50%;background:${D===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),M.querySelectorAll(".card-dot").forEach(O=>O.addEventListener("click",()=>w(parseInt(O.dataset.i)))))}function _(M,O){var f;const D=e[M],U=document.getElementById("card-counter"),J=document.getElementById("card-track");U&&(U.textContent=`Carte ${M+1} / ${e.length}`);const te=D.card_type==="player"&&((f=D.player)==null?void 0:f.rarity)==="legende",W=!p.has(M);p.add(M);let se=0;if(D.card_type==="player"&&D.player){const g=D.player,y=g.job||"ATT";se=Number(y==="GK"?g.note_g:y==="DEF"?g.note_d:y==="MIL"?g.note_m:g.note_a)||0}const b=g=>{J.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${te?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${Qi(D)}</div>
          ${D.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const y=document.getElementById("current-card-wrap");O!==0?(y.style.transition="none",y.style.transform=`translateX(${O>0?100:-100}%)`,requestAnimationFrame(()=>{y.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",y.style.transform="translateX(0)"})):y.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),g||te?P():k(),C()};W&&se>6&&D.card_type==="player"&&D.player?L(D,()=>b(!0)):b(!1)}function L(M,O){var b;I=!0;const D=M.player,U=`https://flagsapi.com/${D.country_code}/flat/64.png`,J=(b=D.clubs)==null?void 0:b.logo_url,te=document.getElementById("walkout-overlay"),W=document.getElementById("walkout-stage");if(!te||!W){I=!1,O();return}te.style.display="flex";const se=()=>{const f=W.firstElementChild;f&&(f.classList.remove("wo-in"),f.classList.add("wo-out"))};W.innerHTML=`<img class="wo-in" src="${U}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(se,2e3),setTimeout(()=>{var f;W.innerHTML=J?`<img class="wo-in" src="${J}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((f=D.clubs)==null?void 0:f.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(se,4450),setTimeout(()=>{te.style.display="none",W.innerHTML="",I=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),O()},4900)}function w(M){if(I||M<0||M>=e.length||M===x)return;const O=M>x?1:-1;x=M,_(M,O)}function S(){w(x+1)}function A(){w(x-1)}function F(){const M=document.getElementById("card-viewport");if(!M||M._swipeBound)return;M._swipeBound=!0;let O=0,D=0,U=0,J=!1;const te=g=>g.touches?g.touches[0].clientX:g.clientX,W=g=>g.touches?g.touches[0].clientY:g.clientY,se=g=>{J=!0,O=te(g),D=W(g),U=0},b=g=>{if(!J)return;U=te(g)-O;const y=W(g)-D;if(Math.abs(U)<Math.abs(y))return;const h=document.getElementById("current-card-wrap");h&&(h.style.transition="none",h.style.transform=`translateX(${U*.6}px) rotate(${U*.02}deg)`)},f=()=>{if(!J)return;J=!1;const g=document.getElementById("current-card-wrap"),y=55;U<=-y&&x<e.length-1?S():U>=y&&x>0?A():g&&(g.style.transition="transform .2s ease",g.style.transform="translateX(0)")};M.addEventListener("pointerdown",se),M.addEventListener("pointermove",b),M.addEventListener("pointerup",f),M.addEventListener("pointercancel",f),M.addEventListener("touchstart",se,{passive:!0}),M.addEventListener("touchmove",b,{passive:!0}),M.addEventListener("touchend",f),M.addEventListener("click",g=>{if(Math.abs(U)>8)return;const y=M.getBoundingClientRect();g.clientX-y.left>y.width/2?S():A()})}let q=null;function P(){const M=document.getElementById("fireworks-canvas");if(!M)return;M.width=window.innerWidth,M.height=window.innerHeight;const O=M.getContext("2d"),D=[];function U(){const te=Math.random()*M.width,W=Math.random()*M.height*.6,se=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],b=se[Math.floor(Math.random()*se.length)];for(let f=0;f<60;f++){const g=Math.PI*2/60*f,y=2+Math.random()*5;D.push({x:te,y:W,vx:Math.cos(g)*y,vy:Math.sin(g)*y,alpha:1,color:b,size:2+Math.random()*3})}}U(),q=setInterval(U,600);function J(){if(document.getElementById("fireworks-canvas")){O.clearRect(0,0,M.width,M.height);for(let te=D.length-1;te>=0;te--){const W=D[te];if(W.x+=W.vx,W.y+=W.vy+.08,W.vy*=.98,W.alpha-=.018,W.alpha<=0){D.splice(te,1);continue}O.globalAlpha=W.alpha,O.fillStyle=W.color,O.beginPath(),O.arc(W.x,W.y,W.size,0,Math.PI*2),O.fill()}O.globalAlpha=1,(q!==null||D.length>0)&&requestAnimationFrame(J)}}J()}function k(){q!==null&&(clearInterval(q),q=null);const M=document.getElementById("fireworks-canvas");M&&M.getContext("2d").clearRect(0,0,M.width,M.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{k(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{k(),n.remove(),i("boosters")})}function Qi(e){var t,i;if(e.card_type==="player"&&e.player)return Oi(e);if(e.card_type==="game_changer"){const n=e._gcDef,d=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,c=a[n==null?void 0:n.color]||a.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=ct[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,m=((i=ct[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${d?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Zi(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${d[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}eo()}function eo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const to="simulation",li="VOTRE_ZONE_ID";function io(){switch(to){case"propellerads":return oo();case"adsense":return no();default:return wt()}}function wt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function oo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(wt());window.propeller.push({zone_id:li,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function no(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(wt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:li,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Ae={},ze={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Se={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function we(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function fe(e){const t=typeof import.meta<"u"?Ae==null?void 0:Ae.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pt(e,t){var n,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ze(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function di(){const e=Math.random()*100;return e<10?3:e<30?2:1}function et(e,t){const i=ze[t]||ze["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=Ze(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let r=s.findIndex(u=>u.job===a);if(r===-1&&(r=s.findIndex(u=>u.job2===a)),r===-1&&(r=0),s[r]){const u={...s[r],_line:a};l.push(u),s.splice(r,1)}}const c=Ze(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}function be(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,i){const d=new Set,s=t.filter(r=>{const u=r.gc_type||r.id;return d.has(u)?!1:(d.add(u),!0)});let a=[];function l(r,u){const m=r._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},I={purple:"#9b59b6",light_blue:"#00bcd4"},p=x[m==null?void 0:m.color]||x.purple,v=I[m==null?void 0:m.color]||I.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":v};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/manager-wars/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var u,m,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${s.map(I=>{const p=a.find(v=>v.gc_type===I.gc_type);return l(I,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(I=>{I.addEventListener("click",()=>{const p=I.dataset.id,v=s.find(_=>_.id===p);if(!v)return;const C=a.findIndex(_=>_.gc_type===v.gc_type);C>-1?a.splice(C,1):a.length<3&&a.push(v),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&c(a)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>c([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function ro(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){we(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(r=>r.id),{data:l}=await z.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var _,L,w,S,A;const r=s[c],u=(l||[]).filter(F=>F.deck_id===r.id),m=u.filter(F=>{var q;return F.is_starter&&((q=F.card)==null?void 0:q.player)}).map(F=>pt(F.card,F.position)),x=u.find(F=>{var q;return((q=F.card)==null?void 0:q.card_type)==="formation"}),I=r.formation||((_=x==null?void 0:x.card)==null?void 0:_.formation)||"4-4-2",p=m.length>=11?et(m,I):null,v=m.length>=11;be(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${I} · ${m.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Re(p,I,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((F,q)=>`<div style="width:7px;height:7px;border-radius:50%;background:${q===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const q=e.querySelector(".deck-preview-wrap svg");q&&(q.removeAttribute("width"),q.removeAttribute("height"),q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(L=document.getElementById("prev-deck"))==null||L.addEventListener("click",()=>{c>0&&(c--,o())}),(w=document.getElementById("next-deck"))==null||w.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(S=document.getElementById("validate-deck"))==null||S.addEventListener("click",()=>{v&&t.navigate("match",{matchMode:i,deckId:r.id})}),(A=document.getElementById("cancel-deck-select"))==null||A.addEventListener("click",()=>{xe(e),d("home")});const C=document.getElementById("deck-swipe-zone");if(C){let F=0,q=0;C.addEventListener("touchstart",P=>{F=P.touches[0].clientX,q=P.touches[0].clientY},{passive:!0}),C.addEventListener("touchend",P=>{const k=P.changedTouches[0].clientX-F,G=P.changedTouches[0].clientY-q;Math.abs(k)<40||Math.abs(k)<Math.abs(G)||(k<0&&c<s.length-1?(c++,o()):k>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function pi(e){const t=(Ae==null?void 0:Ae.VITE_SUPABASE_URL)||"";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null:null}function ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:fe(e),d=pi(e),s=e._line||e.job||"MIL",a=Se[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(re(e,s))||0)+(e.boost||0),o=ui(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),m=i-Math.round(i*.19)-Math.round(i*.25),x=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ut(e==null?void 0:e.country_code)?`<img src="${ut(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Fe(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(d+=ye(s,40,52),a<n.length-1){const l=$e(s,n[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ut(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ui(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function qe(e,t,i,n,d=310,s=310,a=[]){const l=Ne[t]||{},c=ei(t)||xt[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const L of r)(e[L]||[]).forEach((S,A)=>{o[`${L}${A+1}`]=S});function u(L){const w=l[L];return w?{x:w.x*d,y:w.y*s}:null}let m="";for(const[L,w]of c){const S=u(L),A=u(w);if(!S||!A)continue;const F=o[L],q=o[w],P=$e(F,q);P==="#00ff88"||P==="#FFD700"?(m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}"
        stroke="${P}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}"
        stroke="${P}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}"
        stroke="${P}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,I=64,p=13,v=16,C={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[L,w]of Object.entries(o)){const S=u(L);if(!S||!w)continue;const A=L.replace(/[0-9]/g,""),F=Se[A]||"#555",q=a.includes(w.cardId),P=i==="attack"&&(["MIL","ATT"].includes(A)||q)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(A)&&!w.used,k=n.includes(w.cardId);let G;i==="attack"?G=q?Math.max(1,Number(w.note_a)||0):A==="MIL"?Number(w.note_m)||0:Number(w.note_a)||0:i==="defense"?G=A==="GK"?Number(w.note_g)||0:A==="MIL"?Number(w.note_m)||0:Number(w.note_d)||0:G=Number(A==="GK"?w.note_g:A==="DEF"?w.note_d:A==="MIL"?w.note_m:w.note_a)||0,G=G+(w.boost||0);const M=(S.x-x/2).toFixed(1),O=(S.y-I/2).toFixed(1),D=w.used?.25:1,U=C[w==null?void 0:w.rarity]||C.normal,J=k?"#ff3030":U,te=k?3:(w==null?void 0:w.rarity)==="légende"||(w==null?void 0:w.rarity)==="pépite"?2.5:2,W=I-p-v;m+=`<defs><clipPath id="cp-${L}"><rect x="${M}" y="${(S.y-I/2+p).toFixed(1)}" width="${x}" height="${W}"/></clipPath></defs>`,m+=`<rect x="${M}" y="${O}" width="${x}" height="${I}" rx="5" fill="${F}" opacity="${D}"/>`;const se=fe(w);se&&!w.used&&(m+=`<image href="${se}" x="${M}" y="${(S.y-I/2+p).toFixed(1)}" width="${x}" height="${W}" clip-path="url(#cp-${L})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${M}" y="${O}" width="${x}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${S.x.toFixed(1)}" y="${(S.y-I/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(w.name||"").slice(0,9)}</text>`;const b=(S.y+I/2-v).toFixed(1);if(m+=`<rect x="${M}" y="${b}" width="${x}" height="${v}" fill="rgba(255,255,255,0.92)"/>`,w.used)m+=`<text x="${S.x.toFixed(1)}" y="${(S.y+I/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const f=ut(w.country_code);f?m+=`<image href="${f}" x="${(S.x-20).toFixed(1)}" y="${(S.y+I/2-v+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(S.x-13).toFixed(1)}" y="${(S.y+I/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ui(w.country_code)}</text>`,m+=`<text x="${S.x.toFixed(1)}" y="${(S.y+I/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${G}</text>`;const g=pi(w);g?m+=`<image href="${g}" x="${(S.x+x/2-14).toFixed(1)}" y="${(S.y+I/2-v+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:w.clubName&&(m+=`<text x="${(S.x+14).toFixed(1)}" y="${(S.y+I/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(w.clubName||"").slice(0,3).toUpperCase()}</text>`),w.boost&&(m+=`<rect x="${(S.x+x/2-12).toFixed(1)}" y="${(S.y-I/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(S.x+x/2-5).toFixed(1)}" y="${(S.y-I/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${w.boost}</text>`)}m+=`<rect x="${M}" y="${O}" width="${x}" height="${I}" rx="5" fill="${k?"rgba(255,255,255,0.12)":"none"}" stroke="${J}" stroke-width="${te}" opacity="${D}"/>`,P&&(m+=`<rect x="${M}" y="${O}" width="${x}" height="${I}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${w.cardId}" data-role="${A}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${d+_*2} ${s+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function Re(e,t,i,n,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${qe(e,t,i,n,d,s,a)}
  </div>`}function Ue(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function fi(e,t,i,n){var S;const{state:d,navigate:s,toast:a}=t;be(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return ro(e,t,i);const c=l.deckId;let o,r,u,m;try{const A=await Promise.all([z.from("decks").select("formation,name").eq("id",c).single(),z.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=A[0].data,u=A[0].error,r=A[1].data,m=A[1].error}catch(A){console.error("[Match] Exception chargement deck:",A),we(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||m){console.error("[Match] Erreur Supabase:",u||m),we(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const x=(r||[]).filter(A=>{var F;return A.is_starter&&((F=A.card)==null?void 0:F.player)}).map(A=>pt(A.card,A.position)),I=(r||[]).filter(A=>{var F;return!A.is_starter&&((F=A.card)==null?void 0:F.player)}).map(A=>pt(A.card,A.position));if(x.length<11){we(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>s("decks"));return}const p=(r||[]).find(A=>{var F;return((F=A.card)==null?void 0:F.card_type)==="formation"}),v=(o==null?void 0:o.formation)||((S=p==null?void 0:p.card)==null?void 0:S.formation)||"4-4-2",{data:C,error:_}=await z.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:L}=await z.from("gc_definitions").select("*").eq("is_active",!0),w=(C||[]).map(A=>({...A,_gcDef:(L==null?void 0:L.find(F=>F.name===A.gc_type||F.id===A.gc_definition_id))||null}));n({deckId:c,formation:v,starters:x,subsRaw:I,gcCardsEnriched:w,gcDefs:L||[]})}async function ao(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await fi(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:m})=>{try{const x=et(o,c),I=await so(c,s),p=async v=>{try{const{data:C,error:_}=await z.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(_){console.error("[MatchIA] Erreur création match:",_),we(e,"⚠️","Impossible de créer le match ("+_.message+").","Retour",()=>t.navigate("home"));return}const L={gcDefs:m||[],matchId:C==null?void 0:C.id,mode:a,difficulty:s,formation:c,homeTeam:x,aiTeam:I,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};co(e,L,t)}catch(C){console.error("[MatchIA] Exception launchMatch:",C),we(e,"⚠️","Erreur au lancement du match : "+C.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}ci(e,u,p)}catch(x){console.error("[MatchIA] Exception setup:",x),we(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function so(e,t){var a,l;const{data:i}=await z.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return lo(e);const n=ze[e]||ze["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(I=>I.job===c),r=s.filter(I=>I.job!==c),u=[...o,...r],m=[];for(let I=0;I<n[c];I++){const p=u[I]||s[I];p&&m.push({cardId:"ai-"+p.id+"-"+I,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((a=p.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=p.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const x=Ze(m.length);m.forEach((I,p)=>{I._col=x[p]}),d[c]=m}return d}function lo(e){const t=ze[e]||ze["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=Ze(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function co(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${qe(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>po(e,t,i),5e3)}function po(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(p){return p.reduce((v,C)=>v+re(C,"MIL"),0)}function a(p){let v=0;for(let C=0;C<p.length-1;C++){const _=$e(p[C],p[C+1]);_==="#00ff88"?v+=2:_==="#FFD700"&&(v+=1)}return v}const l=s(n)+a(n),c=s(d)+a(d),o=l>=c;function r(p,v,C,_){return`<div id="duel-row-${_}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${v}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((L,w)=>{const S=w<p.length-1?$e(L,p[w+1]):null,A=!S||S==="#ff3333"||S==="#cc2222",F=S==="#00ff88"?"+2":S==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${_}" data-idx="${w}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${ye({...L,note:re(L,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${w<p.length-1?`<div class="duel-link duel-link-${_}" data-idx="${w}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${A?"rgba(255,255,255,0.12)":S};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${A?"none":`0 0 8px ${S}`}">
            ${F?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${S}">${F}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${_}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(p)} + ${a(p)} liens = <b style="color:#fff">${s(p)+a(p)}</b>
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

    ${r(d,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const p=(v,C)=>e.querySelectorAll(v).forEach((_,L)=>{setTimeout(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"},C+L*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((v,C)=>{setTimeout(()=>{v.style.opacity="1"},C*70)}),900),setTimeout(()=>{const v=e.querySelector("#vs-label");v&&(v.style.opacity="1",v.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(C=>C.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",c,800)},1500)};function m(p,v,C){const _=document.getElementById(p);if(!_)return;const L=performance.now(),w=S=>{const A=Math.min(1,(S-L)/C);_.textContent=Math.round(v*(1-Math.pow(1-A,3))),A<1?requestAnimationFrame(w):_.textContent=v};requestAnimationFrame(w)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const x=o?di():null;o&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:re(p,"MIL"),portrait:fe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:re(p,"MIL"),portrait:fe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const I=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ae(e,t,i),t.attacker==="ai"&&setTimeout(()=>ft(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),v=document.getElementById("score-ai"),C=document.getElementById(o?"duel-row-home":"duel-row-ai"),_=document.getElementById(o?"duel-row-ai":"duel-row-home"),L=o?p:v,w=o?v:p;L&&(L.style.fontSize="80px",L.style.color=o?"#FFD700":"#ff6b6b",L.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),w&&(w.style.opacity="0.25"),setTimeout(()=>{C&&(C.style.transformOrigin="center",C.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",C.style.zIndex="5"),setTimeout(()=>{var A;const S=document.getElementById("duel-shock");if(S){const F=(A=_||C)==null?void 0:A.getBoundingClientRect(),q=e.querySelector(".match-screen").getBoundingClientRect();F&&(S.style.top=F.top-q.top+F.height/2+"px"),S.style.animation="shockwave .5s ease-out forwards"}_&&(_.style.transformOrigin="center",_.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var A;const S=document.getElementById("duel-finale");S&&(S.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${x}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,S.style.transition="opacity .45s ease",S.style.opacity="1",S.style.pointerEvents="auto",(A=document.getElementById("start-match-btn"))==null||A.addEventListener("click",I))},600)},700)},2800)}function uo(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>Ue(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>Ue(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${Ue(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${Ue(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ae(e,t,i){var _,L,w,S,A,F,q,P;const n=t.selected.map(k=>k.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(k=>!d.includes(k.cardId));Object.values(t.homeTeam).flat().filter(k=>k.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs;const l=!["GK","DEF","MIL","ATT"].some(k=>(t.aiTeam[k]||[]).some(G=>!G.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(k=>!k.used),o=t.phase==="attack"&&l&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(k=>!k.used).map(k=>k.cardId):[];t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",m=t.phase==="defense",x=t.phase==="finished",I=t.gcCards.filter(k=>!t.usedGc.includes(k.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const G=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Fe((G.players||[]).map(M=>({...M,used:!1})),"#ff6b6b",G.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const G=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Fe((G.players||[]).map(M=>({...M,used:!1})),"#00ff88",G.total)}
          </div>`}const k=t.log[t.log.length-1];return k?'<div style="padding:2px 4px">'+uo(k)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const k=window.innerWidth>=700,G=(b,f,g)=>{var Y,Q;const y=(t.gcDefs||[]).find(K=>K.name===b.gc_type),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",E={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",$=(y==null?void 0:y.name)||b.gc_type,T=(y==null?void 0:y.effect)||((Y=me[b.gc_type])==null?void 0:Y.desc)||"",B=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,j=((Q=me[b.gc_type])==null?void 0:Q.icon)||"⚡",R=Math.round(g*.22),N=Math.round(g*.22),V=g-R-N,X=$.length>12?7:9;return`<div class="gc-mini" data-gc-id="${b.id}" data-gc-type="${b.gc_type}"
          style="box-sizing:border-box;width:${f}px;height:${g}px;border-radius:10px;border:2px solid ${E};background:${h};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${R}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${X}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${f-6}px">${$}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${V}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${B?`<img src="${B}" style="max-width:${f-10}px;max-height:${V-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(V*.55)}px">${j}</span>`}
          </div>
          <div style="height:${N}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${T.slice(0,38)}</span>
          </div>
        </div>`},M=(b,f)=>{var g;return`<div id="boost-card"
          style="box-sizing:border-box;width:${b}px;height:${f}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(f*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(f*.2)}px">⚡</div>
            <div style="font-size:${Math.round(f*.09)}px;color:#000;font-weight:900">+${(g=t.boostCard)==null?void 0:g.value}</div>
          </div>`},O=(b,f)=>f?M(110,150):G(b,110,150),D=(b,f)=>f?M(68,95):G(b,68,95),U=k?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",J=x?`<button id="btn-results" style="${U};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${U};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-action" style="${U};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:m?`<button id="btn-action" style="${U};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${U};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,te=u||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",W=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${k?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(b=>`<div class="sub-btn-col" data-sub-id="${b.cardId}" style="cursor:pointer;flex-shrink:0">${ye(b,44,58)}</div>`).join("")}
      </div>`,se=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Re(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return k?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${W}
          ${se}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${I.map(b=>O(b,!1)).join("")}
              ${p?O(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${J}${te}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${W}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Re(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${I.map(b=>D(b,!1)).join("")}
            ${p?D(null,!0):""}
          </div>
          <div>${J}${te}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(k=>{var G,M,O;if(k.type==="duel"){const D=k.isGoal,U=k.homeScored?"#FFD700":D?"#ff6b6b":"rgba(255,255,255,0.3)",J=k.homeScored?"⚽ BUT !":D?"⚽ BUT IA !":(G=k.homePlayers)!=null&&G.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${D?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${U};margin-bottom:4px">
                <div style="font-size:9px;color:${U};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${J}</div>
                ${(M=k.homePlayers)!=null&&M.length?`<div style="margin-bottom:3px">${Fe(k.homePlayers,"rgba(255,255,255,0.7)",k.homeTotal)}</div>`:""}
                ${(O=k.aiPlayers)!=null&&O.length?`<div style="opacity:0.7">${Fe(k.aiPlayers,"#ff6b6b",k.aiTotal)}</div>`:""}
              </div>`}return k.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${k.outPlayer?ye({...k.outPlayer,used:!0,_line:k.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${k.inPlayer?ye({...k.inPlayer,_line:k.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:k.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${k.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${k.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function v(){const k=e.querySelector(".match-screen");if(!k)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);k.style.bottom="auto",k.style.height=G+"px",k.style.minHeight=G+"px",k.style.maxHeight=G+"px",k.style.overflow="hidden";const M=e.querySelector("#mobile-action-bar"),O=e.querySelector("#mobile-play-area");M&&O&&(O.style.paddingBottom=M.offsetHeight+"px")}if(v(),setTimeout(v,120),setTimeout(v,400),setTimeout(v,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",v),window.visualViewport.addEventListener("scroll",v)),window.addEventListener("resize",v)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const k=e.querySelector(".terrain-wrapper svg");k&&(k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let k=!1,G=30;const M=()=>document.getElementById("match-timer"),O=()=>{const D=M();if(!D)return;const U=String(Math.floor(G/60)).padStart(2,"0"),J=String(G%60).padStart(2,"0");D.textContent=` ${U}:${J}`,D.style.color=k?"#ff2222":"#ff9500",D.style.fontWeight="900"};O(),t._timerInt=setInterval(()=>{if(G--,G<0)if(!k)k=!0,G=15,O();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",D.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(D),setTimeout(()=>{D.remove(),De(e,t,i)},2500)}else O()},1e3)}(_=document.getElementById("match-quit"))==null||_.addEventListener("click",()=>{xe(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,De(e,t,i))}),(L=document.getElementById("view-ai"))==null||L.addEventListener("click",()=>$o(t,i)),(w=document.getElementById("toggle-history"))==null||w.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.add("open")}),(S=document.getElementById("close-history"))==null||S.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.remove("open")}),(A=document.getElementById("btn-action"))==null||A.addEventListener("click",()=>{t.selected.length!==0&&(u?go(e,t,i):m&&mo(e,t,i))}),(F=document.getElementById("btn-results"))==null||F.addEventListener("click",()=>De(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(k=>{k.addEventListener("click",()=>fo(k,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(k=>{k.addEventListener("click",()=>ho(k.dataset.gcId,k.dataset.gcType,e,t,i))}),(q=document.getElementById("boost-card"))==null||q.addEventListener("click",()=>wo(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(k=>{k.addEventListener("click",()=>Xt(e,t,i,k.dataset.subId))}),(P=document.getElementById("sub-btn-main"))==null||P.addEventListener("click",()=>Xt(e,t,i))}function fo(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}ae(i,t,n)}function $t(e,t,i){e.matchId&&z.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function go(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),$t(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=yt(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ae(e,t,i),setTimeout(()=>xo(e,t,i),1200)}function mo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),$t(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=ht(n,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=bt(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:fe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:fe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ae(e,t,i),tt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Le(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Le(e,t,i,"home-attack")}function ft(e,t,i){$t(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=ii(n,"attack",t.difficulty);if(!d.length){Ve(e,t,i);return}const s=yt(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:fe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,ae(e,t,i),tt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Le(e,t,i,"home-attack")});return}t.phase="defense",ae(e,t,i)}function xo(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=ii(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(x=>({name:x.name,note:re(x,x._line||x.job),portrait:fe(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,ae(e,t,i),tt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{Le(e,t,i,"ai-attack")});return}const a=d.length>0?ht(d,t.modifiers.ai).total:0;d.forEach(u=>{u.used=!0});const l=bt(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:fe(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:fe(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,ae(e,t,i),tt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{Le(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,Le(e,t,i,"ai-attack")}function Le(e,t,i,n){if(t.round++,gi(t)){De(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ve(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ve(e,t,i);return}setTimeout(()=>ft(e,t,i),100);return}t.phase="attack",ae(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ve(e,t,i);return}t.phase="ai-attack",ae(e,t,i),setTimeout(()=>ft(e,t,i),800)}}function gi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Ve(e,t,i){gi(t)?De(e,t,i):(t.phase="attack",ae(e,t,i))}function yo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=fe(e),s=fe(t),a=Se[e.job]||"#555",l=Se[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",u),setTimeout(u,2e3)}function Be(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Xt(e,t,i,n=null){if(t.phase!=="attack"){Be("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Be(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(u=>u.used),s=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!d.length){Be("Aucun joueur utilisé à remplacer");return}if(!s.length){Be("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(u=>u.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var C,_,L,w,S,A;const u=d[a],m=s[l],x=Math.min(130,Math.round((window.innerWidth-90)/2)),I=Math.round(x*1.35),p=F=>`background:rgba(255,255,255,0.12);border:none;color:${F?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${F?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${m?ye({...m,used:!1,boost:0},x,I):"<div>—</div>"}</div>
        <button id="in-down" style="${p(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?ye({...u,used:!1,boost:0},x,I):"<div>—</div>"}</div>
        <button id="out-down" style="${p(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=o.querySelector("#sub-close"))==null||C.addEventListener("click",()=>o.remove()),(_=o.querySelector("#out-up"))==null||_.addEventListener("click",()=>{a>0&&(a--,r())}),(L=o.querySelector("#out-down"))==null||L.addEventListener("click",()=>{a<d.length-1&&(a++,r())}),(w=o.querySelector("#in-up"))==null||w.addEventListener("click",()=>{l>0&&(l--,r())}),(S=o.querySelector("#in-down"))==null||S.addEventListener("click",()=>{l<s.length-1&&(l++,r())});const v=(F,q,P,k)=>{const G=o.querySelector("#"+F);if(!G)return;let M=0;G.addEventListener("touchstart",O=>{M=O.touches[0].clientY},{passive:!0}),G.addEventListener("touchend",O=>{const D=O.changedTouches[0].clientY-M;if(Math.abs(D)<30)return;const U=q();D<0&&U<k-1?(P(U+1),r()):D>0&&U>0&&(P(U-1),r())},{passive:!0})};v("in-panel",()=>l,F=>l=F,s.length),v("out-panel",()=>a,F=>a=F,d.length),(A=o.querySelector("#sub-confirm"))==null||A.addEventListener("click",F=>{if(F.preventDefault(),F.stopPropagation(),c)return;c=!0;const q=d[a],P=s[l];if(!q||!P)return;let k=null,G=-1;for(const[O,D]of Object.entries(t.homeTeam)){const U=(D||[]).findIndex(J=>J.cardId===q.cardId);if(U!==-1){k=O,G=U;break}}if(G===-1||!k){Be("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const M={...P,_line:k,_col:q._col||0,used:!1,boost:0};t.homeTeam[k].splice(G,1,M),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(P.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:q.name,firstname:q.firstname,note:re(q,k),portrait:fe(q),job:q.job,country_code:q.country_code,rarity:q.rarity,clubName:q.clubName,clubLogo:q.clubLogo},inPlayer:{name:P.name,firstname:P.firstname,note:re(P,k),portrait:fe(P),job:P.job,country_code:P.country_code,rarity:P.rarity,clubName:P.clubName,clubLogo:P.clubLogo},text:`🔄 ${P.firstname} ${P.name} remplace ${q.firstname} ${q.name}`}),o.remove(),yo(q,P,()=>ae(e,t,i))})}document.body.appendChild(o),r()}function ho(e,t,i,n,d){var I,p;const s=(n.gcDefs||[]).find(v=>v.name===t),a=me[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,m=a.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(x),(I=x.querySelector("#gc-back"))==null||I.addEventListener("click",()=>x.remove()),(p=x.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{x.remove(),vo(e,t,i,n,d)})}function Ke(e,t,i,n,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const m=u._line||u.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",I=re(u,m)+(u.boost||0),p=l.find(v=>v.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${I}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const m=u.dataset.cid,x=e.find(p=>p.cardId===m);if(!x)return;const I=l.findIndex(p=>p.cardId===m);I>-1?l.splice(I,1):l.length<t&&l.push(x),c()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const bo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(Ke(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(c=>{const o=(n.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),ae(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ae(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,a)=>{const l=n==="home"?d.homeTeam:d.aiTeam,c=n==="ai"?"adverse":"allié",o=Object.entries(l).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,u])=>u.filter(m=>!m.used).map(m=>({...m,_line:r})));return o.length?(Ke(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,r=>{r.forEach(u=>{const x=((n==="home"?d.homeTeam:d.aiTeam)[u._line]||[]).find(I=>I.cardId===u.cardId);x&&(x.boost=(x.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),ae(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),ae(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const a=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:o})));return c.length?(Ke(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,o=>{o.forEach(r=>{const m=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(x=>x.cardId===r.cardId);m&&(m.used=!0,n.log.push({text:`❌ ${m.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ae(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ae(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(Ke(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),ae(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ae(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function vo(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=bo[a.effect_type];c?c(a.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,u)=>re(u,"ATT")-re(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}z.from("cards").delete().eq("id",e).then(()=>{}),l&&ae(i,n,d)}function wo(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Se[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${re(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ae(e,t,i)})})}function tt(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
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
    ${t} – ${i}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(o=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Se[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function De(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=Ei(t.mode,a);t.matchId&&await z.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?c.wins=(n.profile.wins||0)+1:s?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await z.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),xe(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),xe(e),i.navigate("match",{matchMode:t.mode})})}function $o(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${qe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function _o(e,t){await fi(e,t,"random",({deckId:i,formation:n,starters:d,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const c=o=>ko(e,t,i,n,d,s,o,l||[]);if(!a.length){c([]);return}ci(e,a,c)})}async function ko(e,t,i,n,d,s,a=[],l=[]){var _;const{state:c,navigate:o,toast:r}=t;let u=!1,m=null;be(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const x=async(L=!0)=>{u=!0,m&&(z.removeChannel(m),m=null),L&&await z.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(_=document.getElementById("mm-cancel"))==null||_.addEventListener("click",async()=>{try{await x(!0)}catch{}xe(e),o("home")});const I=async(L,w,S)=>{if(u)return;u=!0,m&&(z.removeChannel(m),m=null);const A=document.getElementById("mm-status");A&&(A.textContent="Adversaire trouvé !"),await new Promise(F=>setTimeout(F,600)),e.isConnected&&Eo(e,t,L,S,a,l)},{data:p,error:v}=await z.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(v||!(p!=null&&p.success)){r("Erreur de matchmaking","error"),xe(e),o("home");return}if(p.matched){I(p.match_id,p.opponent_id,!1);return}const C=document.getElementById("mm-status");C&&(C.textContent="En attente d'un autre joueur..."),m=z.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},L=>{const w=L.new;w.status==="matched"&&w.match_id&&I(w.match_id,w.matched_with,!0)}).subscribe()}async function Eo(e,t,i,n,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",u=(d||[]).map(b=>b.id),m=(d||[]).map(b=>({id:b.id,gc_type:b.gc_type,_gcDef:b._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await z.from("matches").select("*").eq("id",i).single();if(!x){c("Match introuvable","error"),l("home");return}async function I(){const[{data:b},{data:f},{data:g},{data:y}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),h=j=>({cardId:j.card_id,position:j.position,id:j.id,firstname:j.firstname,name:j.surname_encoded,country_code:j.country_code,club_id:j.club_id,job:j.job,job2:j.job2,note_g:Number(j.note_g)||0,note_d:Number(j.note_d)||0,note_m:Number(j.note_m)||0,note_a:Number(j.note_a)||0,rarity:j.rarity,skin:j.skin,hair:j.hair,hair_length:j.hair_length,clubName:j.club_encoded_name||null,clubLogo:j.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),E=((b==null?void 0:b.starters)||[]).map(j=>h(j)),$=((f==null?void 0:f.starters)||[]).map(j=>h(j)),T=(b==null?void 0:b.formation)||"4-4-2",B=(f==null?void 0:f.formation)||"4-4-2";return{p1Team:et(E,T),p2Team:et($,B),p1Subs:((b==null?void 0:b.subs)||[]).map(j=>h(j)),p2Subs:((f==null?void 0:f.subs)||[]).map(j=>h(j)),p1Formation:T,p2Formation:B,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?m:[],gcCardsFull_p2:n?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,lastActionAt:new Date().toISOString()}}let p=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!p)if(n){p=await I();const{data:b}=await z.from("matches").select("game_state").eq("id",i).single();!(b!=null&&b.game_state)||!Object.keys(b.game_state).length?await z.from("matches").update({game_state:p,turn_user_id:x.home_id}).eq("id",i):p=b.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let b=0;b<30&&!p;b++){await new Promise(g=>setTimeout(g,400));const{data:f}=await z.from("matches").select("game_state").eq("id",i).single();f!=null&&f.game_state&&Object.keys(f.game_state).length&&(p=f.game_state)}if(!p){c("Erreur de synchronisation","error"),l("home");return}p.gc_p2=u,p.gcCardsFull_p2=m,await z.from("matches").update({game_state:p}).eq("id",i)}let v=!1;function C(b){var y,h;try{z.removeChannel(_)}catch{}const f=b.winner_id===a.profile.id;(y=g.remove)==null||y.call(g);const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:64px">${f?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${f?"#FFD700":"#ff6b6b"}">${f?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px">${p[o+"Name"]} ${p[o+"Score"]} – ${p[r+"Score"]} ${p[r+"Name"]}</div>
      ${b.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${f?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(g),(h=g.querySelector("#pvp-end-home"))==null||h.addEventListener("click",()=>{g.remove(),xe(e),l("home")})}const _=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},b=>{const f=b.new;try{if(f.status==="finished"||f.forfeit){if(v)return;v=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),f.game_state&&(p=f.game_state),C(f);return}f.game_state&&(p=f.game_state,q())}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function L(b){Object.assign(p,b),p.lastActionAt=new Date().toISOString();const{error:f}=await z.from("matches").update({game_state:p}).eq("id",i);f&&c("Erreur de synchronisation","error");try{q()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function w(){if(v)return;v=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null);const b=n?x.away_id:x.home_id;try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:b}).eq("id",i)}catch{}try{z.removeChannel(_)}catch{}xe(e),l("home")}const S={BOOST_STAT:({value:b=1,count:f=1,roles:g=[]},y,h)=>{const E=y[o+"Team"],$=Object.entries(E).filter(([T])=>!g.length||g.includes(T)).flatMap(([T,B])=>B.filter(j=>!j.used).map(j=>({...j,_line:T})));if(!$.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(y);return}A($,f,`Choisir ${f} joueur(s) à booster (+${b})`,T=>{T.forEach(B=>{const j=(E[B._line]||[]).find(R=>R.cardId===B.cardId);j&&(j.boost=(j.boost||0)+b,y.log.push({text:`⚡ +${b} sur ${j.name}`,type:"info"}))}),y[o+"Team"]=E,h(y)})},DEBUFF_STAT:({value:b=1,count:f=1,roles:g=[],target:y="ai"},h,E)=>{const $=y==="home"?o:r,T=h[$+"Team"],B=y==="home"?"allié":"adverse",j=Object.entries(T).filter(([R])=>!g.length||g.includes(R)).flatMap(([R,N])=>N.filter(V=>!V.used).map(V=>({...V,_line:R})));if(!j.length){h.log.push({text:`🎯 Aucun joueur ${B}`,type:"info"}),E(h);return}A(j,f,`Choisir ${f} joueur(s) ${B}(s) (-${b})`,R=>{R.forEach(N=>{const V=(T[N._line]||[]).find(X=>X.cardId===N.cardId);V&&(V.boost=(V.boost||0)-b,h.log.push({text:`🎯 -${b} sur ${V.name}`,type:"info"}))}),h[$+"Team"]=T,E(h)})},GRAY_PLAYER:({count:b=1,roles:f=[],target:g="ai"},y,h)=>{const E=g==="home"?o:r,$=y[E+"Team"],T=g==="home"?"allié":"adverse",B=Object.entries($).filter(([j])=>!f.length||f.includes(j)).flatMap(([j,R])=>R.filter(N=>!N.used).map(N=>({...N,_line:j})));if(!B.length){y.log.push({text:`❌ Aucun joueur ${T}`,type:"info"}),h(y);return}A(B,b,`Choisir ${b} joueur(s) ${T}(s) à exclure`,j=>{j.forEach(R=>{const N=($[R._line]||[]).find(V=>V.cardId===R.cardId);N&&(N.used=!0,y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[E+"Team"]=$,h(y)})},REVIVE_PLAYER:({count:b=1,roles:f=[]},g,y)=>{const h=g[o+"Team"],E=Object.entries(h).filter(([$])=>!f.length||f.includes($)).flatMap(([$,T])=>T.filter(B=>B.used).map(B=>({...B,_line:$})));if(!E.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(g);return}A(E,b,`Choisir ${b} joueur(s) à ressusciter`,$=>{$.forEach(T=>{const B=(h[T._line]||[]).find(j=>j.cardId===T.cardId);B&&(B.used=!1,g.log.push({text:`💫 ${B.name} ressuscité !`,type:"info"}))}),g[o+"Team"]=h,y(g)})},REMOVE_GOAL:({},b,f)=>{const g=r+"Score";b[g]>0?(b[g]--,b.log.push({text:"🚫 Dernier but annulé !",type:"info"})):b.log.push({text:"🚫 Aucun but à annuler",type:"info"}),f(b)},ADD_GOAL_DRAW:({},b,f)=>{b[o+"Score"]===b[r+"Score"]?(b[o+"Score"]++,b.log.push({text:"🎯 But bonus !",type:"info"})):b.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),f(b)},ADD_SUB:({value:b=1},f,g)=>{f.maxSubs=(f.maxSubs||3)+b,f.log.push({text:`🔄 +${b} remplacement(s)`,type:"info"}),g(f)},CUSTOM:({},b,f)=>f(b)};function A(b,f,g,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let E=[];function $(){var B,j;const T=b.map(R=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[R._line]||"#555",V=re(R,R._line)+(R.boost||0),Y=E.find(K=>K.cardId===R.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Q=R.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${R.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Y};background:${N};overflow:hidden;cursor:pointer;${Q}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${R.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${V}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${R._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${E.length}/${f}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${T}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${E.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${E.length}/${f})
          </button>
        </div>`,(B=h.querySelector("#pp-close"))==null||B.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(R=>{R.addEventListener("click",()=>{const N=R.dataset.cid,V=b.find(Y=>Y.cardId===N),X=E.findIndex(Y=>Y.cardId===N);V&&(X>-1?E.splice(X,1):E.length<f&&E.push(V),$())})}),(j=h.querySelector("#pp-confirm"))==null||j.addEventListener("click",()=>{h.remove(),y(E)})}$(),document.body.appendChild(h)}async function F(b,f){const y=(p["gcCardsFull_"+o]||[]).find(T=>T.id===b),h=(y==null?void 0:y._gcDef)||(p.gcDefs||[]).find(T=>{var B;return T.name===f||((B=T.name)==null?void 0:B.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),E=[...p["usedGc_"+o]||[],b];if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const T=S[h.effect_type];if(T){const B={...p};T(h.effect_params||{},B,async j=>{j["usedGc_"+o]=E,await L(j)});return}}const $={...p};switch(f){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const T=r+"Score";$[T]>0&&($[T]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+o]=E,await L($)}function q(){var Lt,Mt,zt,St,Ct,jt;if(p.phase==="reveal")return P();if(p.phase==="midfield")return k();if(p.phase==="finished")return se();const b=p[o+"Team"],f=p[r+"Team"],g=p[o+"Score"],y=p[r+"Score"],h=p[o+"Name"],E=p[r+"Name"],$=p.phase===o+"-attack",T=p.phase===o+"-defense",B=!$&&!T,j=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],R=j.map(H=>H.cardId),N=window.innerWidth>=700,V=p[o+"Subs"]||[],X=p["usedSubIds_"+o]||[],Y=V.filter(H=>!X.includes(H.cardId)),Q=p["gcCardsFull_"+o]||[],K=p["usedGc_"+o]||[],ee=Q.filter(H=>!K.includes(H.id)),ie=p.boostOwner===o&&!p.boostUsed,le=!["GK","DEF","MIL","ATT"].some(H=>(f[H]||[]).some(Z=>!Z.used)),ue=[...b.MIL||[],...b.ATT||[]].filter(H=>!H.used),de=$&&le&&ue.length===0?[...b.GK||[],...b.DEF||[]].filter(H=>!H.used).map(H=>H.cardId):[];function ce(H,Z,pe){var Dt,Gt;const oe=H._gcDef,Ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[oe==null?void 0:oe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",at={purple:"#b06ce0",light_blue:"#00d4ef"}[oe==null?void 0:oe.color]||"#b06ce0",he=(oe==null?void 0:oe.name)||H.gc_type,Pe=(oe==null?void 0:oe.effect)||((Dt=me[H.gc_type])==null?void 0:Dt.desc)||"",Ee=oe!=null&&oe.image_url?`/manager-wars/icons/${oe.image_url}`:null,bi=((Gt=me[H.gc_type])==null?void 0:Gt.icon)||"⚡",Bt=Math.round(pe*.22),Ft=Math.round(pe*.22),st=pe-Bt-Ft;return`<div class="pvp-gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}" style="box-sizing:border-box;width:${Z}px;height:${pe}px;border-radius:10px;border:2px solid ${at};background:${Ce};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${he.length>12?7:9}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${he}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${st}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Ee?`<img src="${Ee}" style="max-width:${Z-10}px;max-height:${st-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(st*.55)}px">${bi}</span>`}
        </div>
        <div style="height:${Ft}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Pe.slice(0,38)}</span>
        </div>
      </div>`}function ge(H,Z){return`<div id="pvp-boost-card" style="box-sizing:border-box;width:${H}px;height:${Z}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
        <div style="font-size:${N?22:18}px">⚡</div>
        <div style="font-size:${N?11:9}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const _e=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${N?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Y.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Y.map(H=>`<div class="pvp-sub-btn" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${ye(H,N?60:44,N?78:58)}</div>`).join("")}
    </div>`,Et=$?"attack":T?"defense":"idle",yi=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${Re(b,p[o+"Formation"],Et,R,300,300,de)}
      </div>
    </div>`,rt=N?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Tt=$?`<button id="pvp-action" style="${rt};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${j.length===0&&de.length===0&&ue.length===0||j.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:T?`<button id="pvp-action" style="${rt};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${j.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${rt};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${E}</div>`,It=$||T?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${j.length}/3 sélectionné(s)</div>`:"",Oe=(p.log||[]).slice(-1)[0],hi=T&&((Lt=p.pendingAttack)!=null&&Lt.players)?`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${E} ATTAQUE</div>
          ${Fe(p.pendingAttack.players.map(H=>({...H,used:!1})),"#ff6b6b",p.pendingAttack.total)}
        </div>`:Oe?`<div style="padding:7px 10px;border-left:3px solid ${Oe.type==="goal"?"#FFD700":Oe.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"};font-size:12px;color:#fff">${Oe.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>',At=`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${h} <span style="color:#FFD700;font-size:18px">${g}</span> – <span style="color:#FFD700;font-size:18px">${y}</span> ${E}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${B?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${B?`⏳ Tour de ${E}`:$?"⚔️ À vous d'attaquer !":"🛡️ À vous de défendre !"}
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${hi}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;be(e),e.style.overflow="hidden",N?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${At}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${_e}
          ${yi}
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${ee.map(H=>ce(H,110,150)).join("")}
              ${ie?ge(110,150):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${Tt}${It}</div>
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${At}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${_e}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Re(b,p[o+"Formation"],Et,R,300,300,de)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ee.map(H=>ce(H,68,95)).join("")}
            ${ie?ge(68,95):""}
          </div>
          <div>${Tt}${It}</div>
        </div>
      </div>`;function ke(){const H=e.querySelector(".match-screen");if(!H)return;const Z=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);H.style.height=Z+"px",H.style.minHeight=Z+"px",H.style.maxHeight=Z+"px",H.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),oe=e.querySelector("#mobile-play-area");pe&&oe&&(oe.style.paddingBottom=pe.offsetHeight+"px")}if(ke(),setTimeout(ke,120),setTimeout(ke,400),p._vvBound||(p._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",ke),window.visualViewport.addEventListener("scroll",ke)),window.addEventListener("resize",ke)),function(){const Z=e.querySelector(".terrain-wrapper svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("viewBox","-26 -26 352 352"),Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(H=>{H.addEventListener("click",()=>{if(!$&&!T)return;const Z=H.dataset.cardId,pe=H.dataset.role,Ce=(p[o+"Team"][pe]||[]).find(Ee=>Ee.cardId===Z);if(!Ce||Ce.used)return;const at=de.includes(Z);if($&&!["MIL","ATT"].includes(pe)&&!at)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const he=p["selected_"+o],Pe=he.findIndex(Ee=>Ee.cardId===Z);Pe>-1?he.splice(Pe,1):he.length<3&&he.push({...Ce,_role:pe}),q()})}),e.querySelectorAll(".pvp-sub-btn").forEach(H=>{H.addEventListener("click",()=>{if(!$){c("Remplacement uniquement avant une attaque","warning");return}const Z=H.dataset.subId;O(Z)})}),e.querySelectorAll(".pvp-gc-mini").forEach(H=>{H.addEventListener("click",()=>G(H.dataset.gcId,H.dataset.gcType))}),(Mt=e.querySelector("#pvp-boost-card"))==null||Mt.addEventListener("click",()=>M()),(zt=e.querySelector("#pvp-action"))==null||zt.addEventListener("click",()=>{$?J():T&&te()}),(St=e.querySelector("#pvp-quit"))==null||St.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&w()}),(Ct=e.querySelector("#pvp-view-opp"))==null||Ct.addEventListener("click",()=>D()),(jt=e.querySelector("#pvp-toggle-history"))==null||jt.addEventListener("click",()=>U()),p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),($||T)&&!v){let H=30,Z=!1;const pe=()=>document.getElementById("pvp-timer"),oe=()=>{pe()&&(pe().textContent=H+"s",pe().style.color=Z?"#ff4444":"#fff")};oe(),p._timerInt=setInterval(()=>{H--,H<0?Z?(clearInterval(p._timerInt),p._timerInt=null,w()):(Z=!0,H=15,oe()):oe()},1e3)}}function P(){be(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${qe(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await L({phase:"midfield"})},5e3)}function k(){const b=p[o+"Team"].MIL||[],f=p[r+"Team"].MIL||[];function g(K){return K.reduce((ee,ie)=>ee+re(ie,"MIL"),0)}function y(K){let ee=0;for(let ie=0;ie<K.length-1;ie++){const le=$e(K[ie],K[ie+1]);le==="#00ff88"?ee+=2:le==="#FFD700"&&(ee+=1)}return ee}const h=g(b)+y(b),E=g(f)+y(f),$=h>=E;function T(K,ee,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ee}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((le,ue)=>{const de=ue<K.length-1?$e(le,K[ue+1]):null,ce=!de||de==="#ff3333"||de==="#cc2222",ge=de==="#00ff88"?"+2":de==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${ye({...le,note:re(le,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<K.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ce?"rgba(255,255,255,0.12)":de};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ce?"none":`0 0 8px ${de}`}">
              ${ge?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${de}">${ge}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(K)} + ${y(K)} liens = <b style="color:#fff">${g(K)+y(K)}</b>
        </div>
      </div>`}be(e),e.innerHTML=`
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
      ${T(b,p[o+"Name"],"me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${T(f,p[r+"Name"],"opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(K,ee)=>e.querySelectorAll(K).forEach((ie,le)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},ee+le*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,ee)=>setTimeout(()=>{K.style.opacity="1"},ee*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ee=>ee.style.opacity="1")},1250);function j(K,ee,ie){const le=document.getElementById(K);if(!le)return;const ue=performance.now(),de=ce=>{const ge=Math.min(1,(ce-ue)/ie);le.textContent=Math.round(ee*(1-Math.pow(1-ge,3))),ge<1?requestAnimationFrame(de):le.textContent=ee};requestAnimationFrame(de)}setTimeout(()=>{j("pvp-score-me",h,800),j("pvp-score-opp",E,800)},1500);const R=p.p1Team.MIL||[],N=p.p2Team.MIL||[],V=g(R)+y(R),X=g(N)+y(N),Y=V>=X?"p1":"p2";let Q=p.boostValue;Q==null&&(Q=di(),p.boostValue=Q,p.boostOwner=Y,p.boostUsed=!1),setTimeout(()=>{const K=e.querySelector(`#duel-row-${$?"me":"opp"}`),ee=e.querySelector(`#duel-row-${$?"opp":"me"}`),ie=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),ue=$?ie:le,de=$?le:ie;ue&&(ue.style.fontSize="80px",ue.style.color=$?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+($?",duelGlow 1.5s ease infinite .5s":"")),de&&(de.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const ce=document.getElementById("duel-shock");ce&&(ce.style.animation="shockwave .5s ease-out forwards"),ee&&(ee.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ge;const ce=document.getElementById("pvp-duel-finale");ce&&(ce.innerHTML=`
            <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">
              ${$?`⚽ ${p[o+"Name"]}<br>gagne le milieu et attaque !`:`😔 ${p[r+"Name"]}<br>gagne l'engagement et attaque !`}
            </div>
            ${$&&p.boostOwner===o?`
            <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)">
              <div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
              <div style="font-size:46px;line-height:1">⚡</div>
              <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${Q}</div>
              <div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
            </div>`:""}
            <button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
              ▶ Commencer le match
            </button>`,ce.style.transition="opacity .45s ease",ce.style.opacity="1",ce.style.pointerEvents="auto",(ge=document.getElementById("pvp-start-match"))==null||ge.addEventListener("click",async()=>{if(o!=="p1")return;const _e=Y;await L({phase:_e+"-attack",attacker:_e,round:1,boostValue:Q,boostUsed:!1,boostOwner:_e})}))},600)},700)},2800)}function G(b,f){var V,X,Y,Q;const y=(p["gcCardsFull_"+o]||[]).find(K=>K.id===b),h=y==null?void 0:y._gcDef,E={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",T=(h==null?void 0:h.name)||f,B=(h==null?void 0:h.effect)||((V=me[f])==null?void 0:V.desc)||"Carte spéciale.",j=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,R=((X=me[f])==null?void 0:X.icon)||"⚡",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",N.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${$};background:${E};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${$}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${j?`<img src="${j}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${R}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${B}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(N),(Y=N.querySelector("#pvp-gc-back"))==null||Y.addEventListener("click",()=>N.remove()),(Q=N.querySelector("#pvp-gc-use"))==null||Q.addEventListener("click",()=>{N.remove(),F(b,f)})}function M(){var y;const b=p[o+"Team"],f=Object.entries(b).flatMap(([h,E])=>(E||[]).filter($=>!$.used).map($=>({...$,_line:h})));if(!f.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${f.map(h=>{const E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",$=re(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${E};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${$}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(y=g.querySelector("#bp-close"))==null||y.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const E=h.dataset.cid,$=f.find(B=>B.cardId===E);if(!$)return;const T=(b[$._line]||[]).find(B=>B.cardId===E);T&&(T.boost=(T.boost||0)+p.boostValue),g.remove(),await L({[o+"Team"]:b,boostUsed:!0})})})}function O(b){var T;const f=p[o+"Subs"]||[],g=p["usedSubIds_"+o]||[],y=f.find(B=>B.cardId===b);if(!y)return;const h=p[o+"Team"],E=Object.entries(h).flatMap(([B,j])=>(j||[]).filter(R=>!R.used&&R.job===y.job).map(R=>({...R,_line:B})));if(!E.length){c("Aucun joueur compatible à remplacer","error");return}const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",$.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">Remplacer par ${y.firstname} ${y.name}</div>
        <button id="sp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(B=>{const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",R=re(B,B._line)+(B.boost||0);return`<div class="sp-item" data-cid="${B.cardId}" data-role="${B._line}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${j};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111">${B.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild($),(T=$.querySelector("#sp-close"))==null||T.addEventListener("click",()=>$.remove()),$.querySelectorAll(".sp-item").forEach(B=>{B.addEventListener("click",async()=>{const j=B.dataset.cid,R=B.dataset.role,N=(h[R]||[]).find(Y=>Y.cardId===j);if(!N)return;N.used=!0;const V={...y,_line:R,position:N.position};(h[R]=h[R]||[]).push(V);const X=[...g,b];$.remove(),await L({[o+"Team"]:h,["usedSubIds_"+o]:X})})})}function D(){var f;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",b.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${qe(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(b),(f=b.querySelector("#pvp-opp-close"))==null||f.addEventListener("click",()=>b.remove())}function U(){var g;const b=p.log||[],f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",f.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${b.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...b].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(f),(g=f.querySelector("#pvp-hist-close"))==null||g.addEventListener("click",()=>f.remove())}async function J(){const b=p[o+"Team"],f=!["GK","DEF","MIL","ATT"].some(E=>(p[r+"Team"][E]||[]).some($=>!$.used)),g=(p["selected_"+o]||[]).map(E=>{const $=(b[E._role]||[]).find(B=>B.cardId===E.cardId)||E,T=f&&["GK","DEF"].includes(E._role);return{...$,_line:E._role,...T?{note_a:Math.max(1,Number($.note_a)||0)}:{}}});if(!g.length)return;const y=yt(g,p.modifiers[o]||{});g.forEach(E=>{const $=(b[E._role]||[]).find(T=>T.cardId===E.cardId);$&&($.used=!0)});const h=[...p.log||[]];if(h.push({type:"attack",text:`⚔️ ${p[o+"Name"]} attaque (${y.total})`,players:g,total:y.total,side:o}),f){p[o+"Score"]++,h.push({type:"goal",text:"⚽ BUT ! L'adversaire n'a plus de joueurs."});const E=(p.round||0)+1,$=o==="p1"?"p2":"p1",T=W({...p,[o+"Team"]:b});await L({[o+"Team"]:b,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:T?"finished":$+"-attack",attacker:$,round:E,log:h}),T&&await z.from("matches").update({status:"finished"}).eq("id",i);return}await L({[o+"Team"]:b,pendingAttack:{...y,players:g,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:r+"-defense",log:h})}async function te(){const b=p[o+"Team"],f=(p["selected_"+o]||[]).map(Y=>({...(b[Y._role]||[]).find(K=>K.cardId===Y.cardId)||Y,_line:Y._role})),g=ht(f,p.modifiers[o]||{});f.forEach(Y=>{const Q=(b[Y._role]||[]).find(K=>K.cardId===Y.cardId);Q&&(Q.used=!0)});const y=bt(p.pendingAttack.total,g.total,p.modifiers[o]||{}),h=p.pendingAttack.side,E=y==="attack"||(y==null?void 0:y.goal),$=h==="p1"?"p2":"p1",T=(p.round||0)+1,B={...p,[o+"Team"]:b};E&&(B[h+"Score"]=(p[h+"Score"]||0)+1);const j=[...p.log||[]];j.push({type:"defense",text:`🛡️ ${p[o+"Name"]} défend (${g.total})`}),j.push({type:E?"goal":"stop",text:E?`⚽ BUT de ${p[h+"Name"]} ! (${p.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${g.total})`});const R=W(B),N=[...B[$+"Team"].MIL||[],...B[$+"Team"].ATT||[]].filter(Y=>!Y.used),V=[...B[$+"Team"].GK||[],...B[$+"Team"].DEF||[],...B[$+"Team"].MIL||[]].filter(Y=>!Y.used);let X=$+"-attack";!N.length&&!V.length?X="finished":!N.length&&V.length&&(X=$+"-attack"),await L({...B,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:R?"finished":X,attacker:$,round:T,log:j}),R&&await z.from("matches").update({status:"finished"}).eq("id",i)}function W(b){const f=["MIL","ATT","GK","DEF"].some(y=>(b.p1Team[y]||[]).some(h=>!h.used)),g=["MIL","ATT","GK","DEF"].some(y=>(b.p2Team[y]||[]).some(h=>!h.used));return!f&&!g}function se(){var h;const b=p[o+"Score"],f=p[r+"Score"],g=b>f,y=b===f;be(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${b} - ${f}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{z.removeChannel(_)}catch{}xe(e),l("home")})}q()}const To={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Io(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await _t(e,t)}async function _t(e,t){const{state:i,toast:n}=t,{data:d}=await z.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await z.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(d||[]).filter(o=>o.seller_id!==i.profile.id),l=s||[];l.filter(o=>o.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function c(o){const r=document.getElementById("mkt-content"),u=o==="buy"?a:l;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const m=o==="mine"?[...u].sort((x,I)=>x.status!==I.status?x.status==="active"?-1:1:new Date(I.listed_at)-new Date(x.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(x=>{var L,w,S,A;const I=(L=x.card)==null?void 0:L.player;if(!I)return"";const p=I.job==="GK"?I.note_g:I.job==="DEF"?I.note_d:I.job==="MIL"?I.note_m:I.note_a,v=To[I.rarity],C=(i.profile.credits||0)>=x.price,_=x.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Mo(I.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${v};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${I.firstname} ${I.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${I.country_code} · ${((w=I.clubs)==null?void 0:w.encoded_name)||"—"} · ${I.rarity} · ${I.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((S=x.seller)==null?void 0:S.pseudo)||"—"}</div>`:_?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((A=x.buyer)==null?void 0:A.pseudo)||"—"} · ${x.sold_at?new Date(x.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(x.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${x.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${x.id}" ${C?"":"disabled"} style="margin-top:4px">${C?"Acheter":"Trop cher"}</button>`:_?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${x.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(x=>{x.addEventListener("click",()=>Ao(x.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(x=>{x.addEventListener("click",()=>Lo(x.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function Ao(e,t,i,n){var u;const{state:d,toast:s}=n,a=t.find(m=>m.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(u=a.card)==null?void 0:u.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:m,error:x}=await z.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(x)throw new Error(x.message);if(!(m!=null&&m.success))throw new Error((m==null?void 0:m.error)||"Achat impossible");d.profile.credits=c-l;const I=document.querySelector("[data-credits]")||document.querySelector(".credits-display");I&&(I.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),_t(i,n)}catch(m){s("❌ "+m.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function Lo(e,t,i){const{toast:n}=i,{data:d}=await z.from("market_listings").select("card_id").eq("id",e).single();await z.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),_t(t,i)}function Mo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function zo(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await z.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${d&&d.length>0?d.map((s,a)=>`
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
  `}async function So(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===d.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const m=r.winner_id===d.id,x=r.home_score===r.away_score&&r.status==="finished",I=r.status!=="finished"?"…":x?"N":m?"V":"D",p=r.status!=="finished"||x?"#888":m?"#1A6B3C":"#c0392b";let v=a[r.mode]||r.mode;r.away_id===null&&!v.startsWith("IA")&&(v="IA");const _=r.home_id===d.id?r.away:r.home;let L;r.away_id===null?L=v:_?L=`${_.club_name||_.pseudo} (${_.pseudo})`:L="Adversaire";let w="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(w=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const S=new Date(r.created_at),A=S.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+S.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),F=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${L}${w}</div>
        <div style="font-size:11px;color:var(--gray-600)">${v} · ${A}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${F}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${I}</span>
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
          ${c.map(o).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(o).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const ne={user:null,profile:null,page:"home",params:{}};function Ye(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Co(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function gt(){document.getElementById("modal-overlay").classList.add("hidden")}async function We(){if(!ne.user)return;const{data:e}=await z.from("users").select("*").eq("id",ne.user.id).single();e&&(ne.profile=e)}const kt="mw_theme";function it(){return localStorage.getItem(kt)||"light"}function jo(e){var t;localStorage.setItem(kt,e),mt(e),(t=ne.profile)!=null&&t.id&&z.from("users").update({theme:e}).eq("id",ne.profile.id).then(()=>{})}function mt(e){document.documentElement.setAttribute("data-theme",e)}function Xe(e,t={}){ne.page=e,ne.params=t,mi()}async function mi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===ne.page)});const t=document.getElementById("nav-credits");t&&ne.profile&&(t.textContent=`💰 ${(ne.profile.credits||0).toLocaleString("fr")}`);const i={state:ne,navigate:Xe,toast:Ye,openModal:Co,closeModal:gt,refreshProfile:We};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ne.page){case"home":await Nt(e,i);break;case"collection":await Ai(e,i);break;case"decks":await dt(e,i);break;case"boosters":await Hi(e,i);break;case"match":{(ne.params&&ne.params.matchMode||"vs_ai_easy")==="random"?await _o(e,i):await ao(e,i);break}case"market":await Io(e,i);break;case"rankings":await zo(e,i);break;case"matches":await So(e,i);break;default:await Nt(e,i)}}function Bo(){const e=document.getElementById("app"),t=ne.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),Xe(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Xe("home")),document.getElementById("nav-credits").addEventListener("click",()=>Xe("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=it()==="dark"?"light":"dark";jo(d),Jt(d)}),Jt(it())}function Jt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Fo(){mt(it()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&gt()}),document.getElementById("modal-close").addEventListener("click",gt);const{data:{session:e}}=await z.auth.getSession();if(!e){Zt(),qt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ye});return}ne.user=e.user,await We(),Zt();try{const{data:t}=await z.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),vi(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!ne.profile){wi(document.getElementById("app"),{state:ne,navigate:async()=>{await We(),Qt()},toast:Ye,refreshProfile:We});return}ne.profile.theme&&ne.profile.theme!==it()&&(localStorage.setItem(kt,ne.profile.theme),mt(ne.profile.theme)),Qt(),z.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(ne.user=null,ne.profile=null,document.getElementById("app").innerHTML="",qt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ye}))})}function Do(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function nt(){const e=document.getElementById("app");e&&(e.style.height=Do()+"px")}window.addEventListener("resize",nt);window.addEventListener("orientationchange",()=>setTimeout(nt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",nt);function Qt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",nt(),Bo(),mi()}function Zt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function xi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Fo().catch(e=>{console.error("Échec du démarrage:",e),xi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&xi("Le serveur met trop de temps à répondre.")},12e3);
