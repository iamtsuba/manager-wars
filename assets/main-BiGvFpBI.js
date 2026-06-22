import{s as I,F as rt,b as Ce,c as Nt,l as ge,d as ci}from"./formation-links-Bt44rMnM.js";function At(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await I.auth.signInWithPassword({email:n,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await I.auth.signUp({email:n,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function pi(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var w;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((w=document.getElementById("setup-club"))==null?void 0:w.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),r&&(r.textContent=g,r.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await I.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await I.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await I.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(g)throw g;await ui(t.user.id),await d(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function ui(e){const{data:t}=await I.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const u=It([...d]).slice(0,3);o.push(...u)}else o=It([...i]).slice(0,4);o.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await I.from("cards").insert(s),await I.from("users").update({first_booster_opened:!0}).eq("id",e)}function It(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const fi="2026.06.22-2135";async function Tt(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${fi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){gi(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await I.auth.signOut(),window.location.reload()}))}function gi(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const le={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ie(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Lt=["ATT","MIL","DEF","GK"];function Ot(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Lt.indexOf(s._line),r=Lt.indexOf(a._line),u=Math.abs(o-r)===1;(s._line===a._line&&c||l&&u)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function at(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=Ot(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function st(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),n=Ot(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function lt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Pt(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const d=[...n].sort((a,l)=>{const c=t==="attack"?ie(a,"ATT"):a._line==="GK"?ie(a,"GK"):ie(a,"DEF");return(t==="attack"?ie(l,"ATT"):l._line==="GK"?ie(l,"GK"):ie(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function mi(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Ht={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Oe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Be=["GK","DEF","MIL","ATT"],xi=["Tous","GK","DEF","MIL","ATT"],yi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},dt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ut(e){return null}function Le(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Je(e,t=""){var u,f;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=Oe[n],s=Ht[i.rarity]||"#ccc",a=Le(i,n),l=i.job2?Le(i,i.job2):null,c=i.job2?Oe[i.job2]:null,o=Ut(),r=dt[i.country_code]||i.country_code||"";return`
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
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Mt(e){const t=e.job||"ATT",i=Le(e,t),n=dt[e.country_code]||e.country_code||"";return`
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
  </div>`}async function hi(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await I.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await I.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(y=>y.card_type==="player"&&y.player),r=(l||[]).filter(y=>y.card_type==="game_changer"),u=(l||[]).filter(y=>y.card_type==="formation"),{data:f}=await I.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(f||[]).forEach(y=>{g[y.name]=y});const w=Object.keys(rt),p=Object.keys(le),x={};o.forEach(y=>{const m=y.player.id;x[m]=(x[m]||0)+1}),new Set(Object.keys(x).map(y=>String(y)));const z=new Set(u.map(y=>y.formation)),v=new Set(r.map(y=>y.gc_type));let _="player",h="Tous",L="",E=!1;function D(){return[...o].sort((y,m)=>{const $=Be.indexOf(y.player.job),T=Be.indexOf(m.player.job);return $!==T?$-T:(y.player.surname_encoded||"").localeCompare(m.player.surname_encoded||"")})}function N(){return[...c||[]].sort((y,m)=>{const $=Be.indexOf(y.job),T=Be.indexOf(m.job);return $!==T?$-T:(y.surname_encoded||"").localeCompare(m.surname_encoded||"")})}function U(){return D().filter(y=>{const m=y.player,$=h==="Tous"||m.job===h,T=!L||`${m.firstname} ${m.surname_encoded}`.toLowerCase().includes(L);return $&&T})}function b(){return N().filter(y=>{const m=h==="Tous"||y.job===h,$=!L||`${y.firstname} ${y.surname_encoded}`.toLowerCase().includes(L);return m&&$})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${_==="player"?"var(--green)":"transparent"};
        color:${_==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${_==="formation"?"var(--green)":"transparent"};
        color:${_==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${_==="gc"?"var(--green)":"transparent"};
        color:${_==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function q(){const y=document.getElementById("col-filters");y&&(_==="player"?(y.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${L}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${xi.map(m=>`
            <button class="filter-btn" data-job="${m}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${m===h?"var(--green)":"var(--gray-200)"};
                background:${m===h?"var(--green)":"#fff"};
                color:${m===h?"#fff":"var(--gray-600)"}">
              ${m}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${E?"var(--yellow)":"var(--gray-200)"};
              background:${E?"var(--yellow)":"#fff"};
              color:${E?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${E?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",m=>{L=m.target.value.toLowerCase(),k()}),e.querySelectorAll(".filter-btn").forEach(m=>{m.addEventListener("click",()=>{h=m.dataset.job,q(),k()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{E=!E,q(),k()})):(y.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${E?"var(--yellow)":"var(--gray-200)"};
              background:${E?"var(--yellow)":"#fff"};
              color:${E?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${E?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{E=!E,q(),k()})))}function k(){const y=document.getElementById("col-grid");y&&(_==="player"?C(y):_==="formation"?P(y):S(y))}function O(y,m,$,T,A){A=A||"#7a28b8";const G=document.getElementById("col-grid"),j=document.getElementById("col-big");if(!G||!j)return;var H=0;function R(){j.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+m(y[H])+"</div>";var Y=j.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Y&&Y.addEventListener("click",function(){T(y[H])}),requestAnimationFrame(function(){var W=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!W||!j)){var J=j.clientHeight-8,oe=j.clientWidth-24,ne=W.offsetHeight,ae=W.offsetWidth;if(ne>0&&ae>0&&J>40){var se=Math.min(J/ne,oe/ae,1);W.style.transform="scale("+se.toFixed(3)+")",W.style.transformOrigin="top center"}}}),G.innerHTML=y.map(function(W,J){return'<div class="col-mini-item" data-idx="'+J+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(J===H?A:"transparent")+';transition:border-color .15s;overflow:hidden">'+$(W,J===H)+"</div>"}).join(""),G.querySelectorAll(".col-mini-item").forEach(function(W){W.addEventListener("click",function(){H=Number(W.dataset.idx),R(),W.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}R()}function F(y){var m=.54,$=Math.round(140*m),T=Math.round(310*m),A;if(!y||y._fake){var G=y?y.player:null;if(!G)return"";A=Mt(G)}else A=Je(y,"");return'<div style="width:'+$+"px;height:"+T+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+m+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+A+"</div></div>"}function K(y,m,$){m=m||100,$=$||140;var T=Ce[y]||{},A={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},G=Math.max(3,Math.round(m*.06)),j=Object.entries(T).map(function(R){var Y=R[0],W=R[1],J=Y.replace(/\d+$/,""),oe=A[J]||"#888",ne=Math.round(W.x*m),ae=Math.round(W.y*$);return'<circle cx="'+ne+'" cy="'+ae+'" r="'+G+'" fill="'+oe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),H=Math.max(1,Math.round(m/50));return'<svg viewBox="0 0 '+m+" "+$+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+m+'" height="'+$+'" fill="#1A6B3C"/><rect x="'+Math.round(m*.2)+'" y="'+Math.round($*.02)+'" width="'+Math.round(m*.6)+'" height="'+Math.round($*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+H+'"/><line x1="0" y1="'+Math.round($*.5)+'" x2="'+m+'" y2="'+Math.round($*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+H+'"/><ellipse cx="'+Math.round(m*.5)+'" cy="'+Math.round($*.5)+'" rx="'+Math.round(m*.18)+'" ry="'+Math.round($*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+H+'"/><rect x="'+Math.round(m*.2)+'" y="'+Math.round($*.82)+'" width="'+Math.round(m*.6)+'" height="'+Math.round($*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+H+'"/>'+j+"</svg>"}function M(y,m,$){var T=$>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+$+"</div>":"",A=m?'data-form-id="'+m.id+'"':"",G=y.length>7?14:y.length>5?16:19,j=!!m;return"<div "+A+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(j?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(j?"":"filter:grayscale(1);opacity:0.5")+'">'+T+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(j?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+G+"px;font-weight:900;color:"+(j?"#1A6B3C":"#aaa")+';line-height:1">'+y+'</div></div><div style="flex:1;overflow:hidden;background:'+(j?"#1A6B3C":"#ccc")+'">'+K(y,140,220)+"</div></div>"}function B(y,m){var $=.54,T=Math.round(140*$),A=Math.round(305*$),G=Math.round(A*.22),j=A-G,H=y.length>7?5:7,R=K(y,T,j),Y=m?"1.5px solid #2a7a40":"1px solid #ddd",W=m?"":"filter:grayscale(1);opacity:0.45;",J=m?"#1A6B3C":"#bbb",oe="#fff";return'<div style="width:'+T+"px;height:"+A+"px;border-radius:6px;border:"+Y+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+W+'"><div style="height:'+G+"px;background:"+J+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+H+"px;font-weight:900;color:"+oe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(T-4)+'px">'+y+'</span></div><div style="height:'+j+'px;overflow:hidden;flex-shrink:0">'+R+"</div></div>"}function C(y){if(E){const m=b();if(!m.length){y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const $=m.map(T=>o.find(A=>A.player.id===T.id)||{_fake:!0,player:T,id:"fake-"+T.id});O($,T=>T._fake?Mt(T.player):Je(T,""),T=>T._fake?F({player:T.player,id:"x",_fake:!0}):F(T),T=>{T._fake||zt(T,o,x,t)},"#1A6B3C")}else{const m=U();if(!m.length){y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const $={},T=[];m.forEach(A=>{$[A.player.id]||($[A.player.id]=!0,T.push(A))}),O(T,A=>{const G=x[A.player.id]||1,j=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",R=o.filter(Y=>Y.player.id===A.player.id&&Y.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Je(A,j+R)},A=>F(A),A=>zt(A,o,x,t),"#1A6B3C")}}function P(y){const m=E?w:[...z];if(!m.length){y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const $=m.map(T=>({formation:T,card:u.find(A=>A.formation===T)||null,owned:z.has(T)}));O($,({formation:T,card:A,owned:G})=>M(T,G?A:null,G?u.filter(j=>j.formation===T).length:0),({formation:T,owned:A})=>B(T,A),({card:T,owned:A})=>{A&&T&&bi(T,u,t,s)},"#1A6B3C")}function S(y){const m=Object.keys(g),$=E?m.length?m:p:[...v];if(!$.length){y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const T=$.map(A=>({type:A,gc:le[A]||{icon:"⚡",desc:""},def:g[A]||null,owned:v.has(A),card:r.find(G=>G.gc_type===A)||null}));O(T,({type:A,gc:G,def:j,owned:H,card:R})=>{const Y=H?r.filter(Se=>Se.gc_type===A).length:0,W=Y>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Y}</div>`:"",J=(j==null?void 0:j.gc_type)==="ultra_game_changer",oe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ne={purple:"#b06ce0",light_blue:"#00d4ef"},ae=oe[j==null?void 0:j.color]||oe.purple,se=ne[j==null?void 0:j.color]||ne.purple,me=(j==null?void 0:j.effect)||G.desc||"",xe=j!=null&&j.image_url?`/manager-wars/icons/${j.image_url}`:null;return H&&R?`<div data-gc-id="${R.id}" data-gc-type="${A}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${W}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${A.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${A}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${J?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${G.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${me.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${A}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${G.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:A,gc:G,def:j,owned:H})=>H?(()=>{const R=Math.round(75.60000000000001),Y=Math.round(310*.54),W=Math.round(Y*.65),J=Math.round(Y*.18),oe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ne={purple:"#9b59b6",light_blue:"#00bcd4"},ae=oe[j==null?void 0:j.color]||oe.purple,se=ne[j==null?void 0:j.color]||ne.purple,me=j!=null&&j.image_url?`/manager-wars/icons/${j.image_url}`:null;return`<div style="width:${R}px;height:${Y}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${J}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${R-6}px">${A}</span></div><div style="height:${W}px;display:flex;align-items:center;justify-content:center">${me?`<img src="${me}" style="max-width:${R-8}px;max-height:${W-4}px;object-fit:contain">`:`<span style="font-size:24px">${G.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((j==null?void 0:j.effect)||G.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const R=Math.round(75.60000000000001),Y=Math.round(310*.54);return`<div style="width:${R}px;height:${Y}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${G.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${A}</span></div>`})(),({type:A,owned:G,def:j})=>{G&&vi(A,j,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(y=>{y.addEventListener("click",()=>{_=y.dataset.tab,h="Tous",L="",E=!1,e.querySelectorAll(".col-tab-btn").forEach(m=>{const $=m.dataset.tab===_;m.style.borderBottomColor=$?"var(--green)":"transparent",m.style.color=$?"var(--green)":"var(--gray-600)"}),q(),k()})}),q(),k()}function vi(e,t,i){const n=le[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ee=1e3;function bi(e,t,i,n){var p,x,z;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const v=Ce[o]||{},_=rt[o]||[],h=290,L=360,E=20;function D(U){const b=v[U];return b?{x:b.x*h,y:b.y*L}:null}let N=`<svg width="${h}" height="${L}" viewBox="0 0 ${h} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[U,b]of _){const q=D(U),k=D(b);!q||!k||(N+=`<line x1="${q.x}" y1="${q.y}" x2="${k.x}" y2="${k.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const U of Object.keys(v)){const b=D(U);if(!b)continue;const q=U.replace(/\d+/,""),k=r[q]||"#555";N+=`<circle cx="${b.x}" cy="${b.y}" r="${E}" fill="${k}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,N+=`<text x="${b.x}" y="${b.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>`}return N+="</svg>",N}const f=t.filter(v=>v.formation===o),g=f.length,w=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Ee.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${w?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ee}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=f.find(h=>!h.is_for_sale)||f[0];if(!v){s("Aucune carte à vendre","error");return}const{error:_}=await I.from("cards").delete().eq("id",v.id);if(_){s(_.message,"error");return}await I.from("users").update({credits:(d.profile.credits||0)+Ee}).eq("id",d.profile.id),await c(),s(`+${Ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(x=document.getElementById("market-sell-form-btn"))==null||x.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){s("Prix invalide","error");return}await I.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",e.id),await I.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:v}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(z=document.getElementById("cancel-sell-form-btn"))==null||z.addEventListener("click",async()=>{await I.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await I.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function zt(e,t,i,n){var N,U,b,q,k,O;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=n,r=e.player,u=t.filter(F=>F.player.id===r.id),f=u.length,g=yi[r.rarity]||1e3,w=r.rarity!=="legende",p=Ut(),x=Le(r,r.job),z=r.job2?Le(r,r.job2):null,v=Oe[r.job]||"#1A6B3C",_=r.job2?Oe[r.job2]:null,h=Ht[r.rarity]||"#ccc",L=dt[r.country_code]||r.country_code||"",{data:E}=await I.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),D=E&&E.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${E.map(F=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${F.club_name} <span style="color:var(--gray-600)">(${F.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${F.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${F.source==="booster"?"Booster":F.price?F.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${h};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${v}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${v}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${x}</text>
            </svg>
            ${z!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${_}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${L}</div>
            ${(N=r.clubs)!=null&&N.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((U=r.clubs)==null?void 0:U.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${h}">${r.rarity.toUpperCase()}</div>
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
    ${D}

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
    ${w&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(b=document.getElementById("close-detail"))==null||b.addEventListener("click",l),(q=document.getElementById("direct-sell-btn"))==null||q.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const F=u.find(M=>!M.is_for_sale)||u[0];if(!F){s("Aucune carte à vendre","error");return}const{error:K}=await I.from("cards").delete().eq("id",F.id);if(K){s(K.message,"error");return}await I.from("users").update({credits:(d.profile.credits||0)+g}).eq("id",d.profile.id),await o(),s(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(k=document.getElementById("market-sell-btn"))==null||k.addEventListener("click",async()=>{const F=parseInt(document.getElementById("sell-price").value);if(!F||F<1){s("Prix invalide","error");return}await I.from("cards").update({is_for_sale:!0,sale_price:F}).eq("id",e.id),await I.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:F}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(O=document.getElementById("cancel-sell-btn"))==null||O.addEventListener("click",async()=>{await I.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await I.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const ve={},Pe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ue={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ye(e){const t=typeof import.meta<"u"?ve==null?void 0:ve.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Kt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Vt(e){var i;const t=(ve==null?void 0:ve.VITE_SUPABASE_URL)||"";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null:null}function wi(e,t=44,i=58){var g;const n=e?Ye(e):null,d=e?Vt(e):null,s=Kt(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=ue[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),f=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qe(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await I.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await I.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Ct(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Ct(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await I.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),Qe(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await I.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await I.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),Qe(e,t)})})}async function Ct(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await I.from("decks").select("*").eq("id",e).single(),{data:a}=await I.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(g=>g.card_type==="player"&&g.player),c=(a||[]).filter(g=>g.card_type==="formation"),o=c.map(g=>g.formation).filter(Boolean),{data:r}=await I.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const f={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(r||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),_e(t,f,i)}function _e(e,t,i){var c;const{navigate:n}=i;Pe[t.formation];const d=St(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Pe),l=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${wi(r,44,58)}
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
  </div>`,_i(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=St(t.formation),u={};r.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,_e(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Ei(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),_e(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{ki(t,e,i)})}function _i(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const s=Ce[t.formation]||{},a=Nt(t.formation)||[],l={};for(const z of i){const v=t.slots[z],_=v?t.playerCards.find(h=>h.id===v):null;l[z]=_?_.player:null}const c=300,o=300,r=48,u=64,f=13,g=16,w=38;function p(z){const v=s[z];return v?{x:v.x*c,y:v.y*o}:null}let x="";for(const[z,v]of a){const _=p(z),h=p(v);if(!_||!h)continue;const L=l[z]?{...l[z],club_id:l[z].club_id,country_code:l[z].country_code,rarity:l[z].rarity}:null,E=l[v]?{...l[v],club_id:l[v].club_id,country_code:l[v].country_code,rarity:l[v].rarity}:null,D=ge(L,E);D==="#ff3333"||D==="#cc2222"?x+=`<line x1="${_.x.toFixed(1)}" y1="${_.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(x+=`<line x1="${_.x.toFixed(1)}" y1="${_.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,x+=`<line x1="${_.x.toFixed(1)}" y1="${_.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const z of i){const v=p(z);if(!v)continue;const _=l[z],h=z.replace(/\d+/,""),L=ue[h]||"#555",E=(v.x-r/2).toFixed(1),D=(v.y-u/2).toFixed(1),N={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[_==null?void 0:_.rarity]||"#aaa";if(_){const U=Ye(_),b=Vt(_),q=Kt(_.country_code),k=Number(h==="GK"?_.note_g:h==="DEF"?_.note_d:h==="MIL"?_.note_m:_.note_a)||0,O=u-f-g;x+=`<defs><clipPath id="dcp-${z}"><rect x="${E}" y="${(v.y-u/2+f).toFixed(1)}" width="${r}" height="${O}"/></clipPath></defs>`,x+=`<rect x="${E}" y="${D}" width="${r}" height="${u}" rx="5" fill="${L}"/>`,U&&(x+=`<image href="${U}" x="${E}" y="${(v.y-u/2+f).toFixed(1)}" width="${r}" height="${O}" clip-path="url(#dcp-${z})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${E}" y="${D}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,x+=`<text x="${v.x.toFixed(1)}" y="${(v.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(_.surname_encoded||"").slice(0,9)}</text>`;const F=(v.y+u/2-g).toFixed(1);x+=`<rect x="${E}" y="${F}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,q&&(x+=`<image href="${q}" x="${(v.x-21).toFixed(1)}" y="${(v.y+u/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),x+=`<text x="${v.x.toFixed(1)}" y="${(v.y+u/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${k}</text>`,b&&(x+=`<image href="${b}" x="${(v.x+r/2-14).toFixed(1)}" y="${(v.y+u/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),x+=`<rect x="${E}" y="${D}" width="${r}" height="${u}" rx="5" fill="none" stroke="${N}" stroke-width="2"/>`}else x+=`<rect x="${E}" y="${D}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,x+=`<text x="${v.x.toFixed(1)}" y="${v.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,x+=`<text x="${v.x.toFixed(1)}" y="${(v.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${h}</text>`;x+=`<rect x="${E}" y="${D}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${z}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-w} ${-w} ${c+w*2} ${o+w*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${x}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>$i(z.dataset.pos,t,e,n))})}function $i(e,t,i,n){var f,g,w;const{openModal:d,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(p=>p.id===l):null;(f=c==null?void 0:c.player)==null||f.id;const o=new Set;Object.entries(t.slots).forEach(([p,x])=>{var v;if(p===e||!x)return;const z=t.playerCards.find(_=>_.id===x);(v=z==null?void 0:z.player)!=null&&v.id&&o.add(z.player.id)}),t.subs.forEach(p=>{var z;const x=t.playerCards.find(v=>v.id===p);(z=x==null?void 0:x.player)!=null&&z.id&&o.add(x.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const x=p.player;return!(x.job===a||x.job2===a)||o.has(x.id)||r.has(x.id)?!1:(r.add(x.id),!0)});u.sort((p,x)=>{const z=a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a;return(a==="GK"?x.player.note_g:a==="DEF"?x.player.note_d:a==="MIL"?x.player.note_m:x.player.note_a)-z}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var h,L;const x=p.player,z=a==="GK"?x.note_g:a==="DEF"?x.note_d:a==="MIL"?x.note_m:x.note_a,v=Ye(x),_={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[x.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[a]}">
            ${v?`<img src="${v}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ue[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${x.firstname} ${x.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${x.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${x.country_code}">
              ${(h=x.clubs)!=null&&h.logo_url?`<img src="${x.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((L=x.clubs)==null?void 0:L.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${x.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ue[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${_};flex-shrink:0">
            ${z}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",s),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],s(),_e(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),_e(i,t,n)})})}function ki(e,t,i){var c;const{openModal:n,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var r,u,f;return s.has((r=o.player)==null?void 0:r.id)||a.has((u=o.player)==null?void 0:u.id)?!1:(a.add((f=o.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var g;const r=o.player,u=Ye(r),f=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((g=r.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ue[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),_e(t,e,i)})})}async function Ei(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await I.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await I.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await I.from("deck_cards").insert(l);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function St(e){const t=Pe[e]||Pe["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Ai(){const{data:e}=await I.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await I.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function Ii(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Yt=()=>Object.keys(Ce),Ti=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ze={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Li(e){return null}const jt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Mi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},zi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Bt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ci(e){var r,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=jt[i],d=Mi[t.rarity]||"#ccc",s=Bt(t,i),a=t.job2?Bt(t,t.job2):null,l=t.job2?jt[t.job2]:null,c=Li(),o=zi[t.country_code]||t.country_code||"";return`
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
  </div>`}function Si(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function ji(e,{state:t,navigate:i,toast:n}){var a;const d=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Ai()).map(Si)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Ti.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Bi(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(r=>r.id===l.dataset.boosterId);Pi(o)})})}async function Bi(e,{state:t,toast:i,navigate:n,container:d}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Ki()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await I.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Ft(t.profile,e);else{const u=e.type||"player";u==="player"?c=await Gi(t.profile,e.cardCount,e.cost):u==="game_changer"?c=await Ri(t.profile,e.cardCount,e.cost):u==="formation"?c=await qi(t.profile,e.cost):c=await Ft(t.profile,e)}c.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:o}=await I.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),Ni(c,e,n)}function Fi(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function he(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Di(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>he(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>he(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&he(n)>=6),i.length||(i=e.filter(n=>he(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&he(n)>=1&&he(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Ft(e,t){if(t.cost>0){const{error:n}=await I.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const d=Ii(t.rates);if(d){if(d.card_type==="player"){const s=f=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[f]||f,a=d.rarity?s(d.rarity):null;let l=I.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(f=>{const g=Math.max(Number(f.note_g)||0,Number(f.note_d)||0,Number(f.note_m)||0,Number(f.note_a)||0);return(!d.note_min||g>=d.note_min)&&(!d.note_max||g<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:u}=await I.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(i.push({...u,player:r}),I.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await I.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await I.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=Yt(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await I.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function Gi(e,t,i){if(i>0){const{error:o}=await I.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await I.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(o=>o.job==="GK"),s=n.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const r=o===0&&a?d:o===0?s:n,u=Fi(),f=Di(r,u);f&&l.push(f)}a&&await I.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await I.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{I.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,r)=>({...c[r],player:o}))}async function Ri(e,t,i){const{error:n}=await I.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await I.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(Ze).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await I.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const u=d==null?void 0:d.find(f=>f.name===r.gc_type||f.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function qi(e,t){const{error:i}=await I.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=Yt(),d=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await I.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function Ni(e,t,i){var q;if(!e||e.length===0){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",k.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(k),(q=k.querySelector("#anim-close-err"))==null||q.addEventListener("click",()=>k.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=k=>k.touches&&k.touches[0]?k.touches[0].clientX:k.clientX;function o(k){d||(l=!0,a.style.opacity="1",r(k))}function r(k){if(!l||d)return;const O=s.getBoundingClientRect(),F=c(k)-O.left,K=Math.max(0,Math.min(1,F/O.width));a.style.width=K*O.width+"px",K>=.82&&f()}function u(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function f(){var O;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(O=document.getElementById("cut-flash"))==null||O.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const k=document.getElementById("cut-hint");k&&(k.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",x(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let g=0,w=!1;const p=new Set;function x(k){g=k,document.getElementById("reveal-phase").style.display="flex",z(),v(k,0),D()}function z(){const k=document.getElementById("card-dots");k&&(k.innerHTML=e.map((O,F)=>`<div class="card-dot" data-i="${F}" style="width:8px;height:8px;border-radius:50%;background:${F===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),k.querySelectorAll(".card-dot").forEach(O=>O.addEventListener("click",()=>h(parseInt(O.dataset.i)))))}function v(k,O){var y;const F=e[k],K=document.getElementById("card-counter"),M=document.getElementById("card-track");K&&(K.textContent=`Carte ${k+1} / ${e.length}`);const B=F.card_type==="player"&&((y=F.player)==null?void 0:y.rarity)==="legende",C=!p.has(k);p.add(k);let P=0;if(F.card_type==="player"&&F.player){const m=F.player,$=m.job||"ATT";P=Number($==="GK"?m.note_g:$==="DEF"?m.note_d:$==="MIL"?m.note_m:m.note_a)||0}const S=m=>{M.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${B?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${Oi(F)}</div>
          ${F.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const $=document.getElementById("current-card-wrap");O!==0?($.style.transition="none",$.style.transform=`translateX(${O>0?100:-100}%)`,requestAnimationFrame(()=>{$.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",$.style.transform="translateX(0)"})):$.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),m||B?U():b(),z()};C&&P>6&&F.card_type==="player"&&F.player?_(F,()=>S(!0)):S(!1)}function _(k,O){var S;w=!0;const F=k.player,K=`https://flagsapi.com/${F.country_code}/flat/64.png`,M=(S=F.clubs)==null?void 0:S.logo_url,B=document.getElementById("walkout-overlay"),C=document.getElementById("walkout-stage");if(!B||!C){w=!1,O();return}B.style.display="flex";const P=()=>{const y=C.firstElementChild;y&&(y.classList.remove("wo-in"),y.classList.add("wo-out"))};C.innerHTML=`<img class="wo-in" src="${K}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(P,2e3),setTimeout(()=>{var y;C.innerHTML=M?`<img class="wo-in" src="${M}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((y=F.clubs)==null?void 0:y.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(P,4450),setTimeout(()=>{B.style.display="none",C.innerHTML="",w=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),O()},4900)}function h(k){if(w||k<0||k>=e.length||k===g)return;const O=k>g?1:-1;g=k,v(k,O)}function L(){h(g+1)}function E(){h(g-1)}function D(){const k=document.getElementById("card-viewport");if(!k||k._swipeBound)return;k._swipeBound=!0;let O=0,F=0,K=0,M=!1;const B=m=>m.touches?m.touches[0].clientX:m.clientX,C=m=>m.touches?m.touches[0].clientY:m.clientY,P=m=>{M=!0,O=B(m),F=C(m),K=0},S=m=>{if(!M)return;K=B(m)-O;const $=C(m)-F;if(Math.abs(K)<Math.abs($))return;const T=document.getElementById("current-card-wrap");T&&(T.style.transition="none",T.style.transform=`translateX(${K*.6}px) rotate(${K*.02}deg)`)},y=()=>{if(!M)return;M=!1;const m=document.getElementById("current-card-wrap"),$=55;K<=-$&&g<e.length-1?L():K>=$&&g>0?E():m&&(m.style.transition="transform .2s ease",m.style.transform="translateX(0)")};k.addEventListener("pointerdown",P),k.addEventListener("pointermove",S),k.addEventListener("pointerup",y),k.addEventListener("pointercancel",y),k.addEventListener("touchstart",P,{passive:!0}),k.addEventListener("touchmove",S,{passive:!0}),k.addEventListener("touchend",y),k.addEventListener("click",m=>{if(Math.abs(K)>8)return;const $=k.getBoundingClientRect();m.clientX-$.left>$.width/2?L():E()})}let N=null;function U(){const k=document.getElementById("fireworks-canvas");if(!k)return;k.width=window.innerWidth,k.height=window.innerHeight;const O=k.getContext("2d"),F=[];function K(){const B=Math.random()*k.width,C=Math.random()*k.height*.6,P=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],S=P[Math.floor(Math.random()*P.length)];for(let y=0;y<60;y++){const m=Math.PI*2/60*y,$=2+Math.random()*5;F.push({x:B,y:C,vx:Math.cos(m)*$,vy:Math.sin(m)*$,alpha:1,color:S,size:2+Math.random()*3})}}K(),N=setInterval(K,600);function M(){if(document.getElementById("fireworks-canvas")){O.clearRect(0,0,k.width,k.height);for(let B=F.length-1;B>=0;B--){const C=F[B];if(C.x+=C.vx,C.y+=C.vy+.08,C.vy*=.98,C.alpha-=.018,C.alpha<=0){F.splice(B,1);continue}O.globalAlpha=C.alpha,O.fillStyle=C.color,O.beginPath(),O.arc(C.x,C.y,C.size,0,Math.PI*2),O.fill()}O.globalAlpha=1,(N!==null||F.length>0)&&requestAnimationFrame(M)}}M()}function b(){N!==null&&(clearInterval(N),N=null);const k=document.getElementById("fireworks-canvas");k&&k.getContext("2d").clearRect(0,0,k.width,k.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{b(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{b(),n.remove(),i("boosters")})}function Oi(e){var t,i;if(e.card_type==="player"&&e.player)return Ci(e);if(e.card_type==="game_changer"){const n=e._gcDef,d=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,c=a[n==null?void 0:n.color]||a.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=Ze[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=((i=Ze[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${d?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Pi(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Hi()}function Hi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Ui="simulation",Wt="VOTRE_ZONE_ID";function Ki(){switch(Ui){case"propellerads":return Vi();case"adsense":return Yi();default:return ct()}}function ct(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Vi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(ct());window.propeller.push({zone_id:Wt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Yi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(ct());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Wt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const be={},$e={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ke={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function fe(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function re(e){const t=typeof import.meta<"u"?be==null?void 0:be.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function et(e,t){var n,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function He(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Xt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Ue(e,t){const i=$e[t]||$e["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=He(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let r=s.findIndex(u=>u.job===a);if(r===-1&&(r=s.findIndex(u=>u.job2===a)),r===-1&&(r=0),s[r]){const u={...s[r],_line:a};l.push(u),s.splice(r,1)}}const c=He(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}function Jt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function de(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Qt(e,t,i){const d=new Set,s=t.filter(r=>{const u=r.gc_type||r.id;return d.has(u)?!1:(d.add(u),!0)});let a=[];function l(r,u){const f=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},w={purple:"#9b59b6",light_blue:"#00bcd4"},p=g[f==null?void 0:f.color]||g.purple,x=w[f==null?void 0:f.color]||w.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${p};
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var u,f,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${s.map(w=>{const p=a.find(x=>x.gc_type===w.gc_type);return l(w,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(w=>{w.addEventListener("click",()=>{const p=w.dataset.id,x=s.find(v=>v.id===p);if(!x)return;const z=a.findIndex(v=>v.gc_type===x.gc_type);z>-1?a.splice(z,1):a.length<3&&a.push(x),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&c(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>c([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function Wi(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await I.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){fe(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(r=>r.id),{data:l}=await I.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var v,_,h,L,E;const r=s[c],u=(l||[]).filter(D=>D.deck_id===r.id),f=u.filter(D=>{var N;return D.is_starter&&((N=D.card)==null?void 0:N.player)}).map(D=>et(D.card,D.position)),g=u.find(D=>{var N;return((N=D.card)==null?void 0:N.card_type)==="formation"}),w=r.formation||((v=g==null?void 0:g.card)==null?void 0:v.formation)||"4-4-2",p=f.length>=11?Ue(f,w):null,x=f.length>=11;Jt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${w} · ${f.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ze(p,w,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((D,N)=>`<div style="width:7px;height:7px;border-radius:50%;background:${N===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const N=e.querySelector(".deck-preview-wrap svg");N&&(N.removeAttribute("width"),N.removeAttribute("height"),N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",N.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(_=document.getElementById("prev-deck"))==null||_.addEventListener("click",()=>{c>0&&(c--,o())}),(h=document.getElementById("next-deck"))==null||h.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(L=document.getElementById("validate-deck"))==null||L.addEventListener("click",()=>{x&&t.navigate("match",{matchMode:i,deckId:r.id})}),(E=document.getElementById("cancel-deck-select"))==null||E.addEventListener("click",()=>{de(e),d("home")});const z=document.getElementById("deck-swipe-zone");if(z){let D=0,N=0;z.addEventListener("touchstart",U=>{D=U.touches[0].clientX,N=U.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",U=>{const b=U.changedTouches[0].clientX-D,q=U.changedTouches[0].clientY-N;Math.abs(b)<40||Math.abs(b)<Math.abs(q)||(b<0&&c<s.length-1?(c++,o()):b>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function Zt(e){const t=(be==null?void 0:be.VITE_SUPABASE_URL)||"";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null:null}function pe(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:re(e),d=Zt(e),s=e._line||e.job||"MIL",a=ke[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(ie(e,s))||0)+(e.boost||0),o=ei(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${tt(e==null?void 0:e.country_code)?`<img src="${tt(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Ie(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(d+=pe(s,40,52),a<n.length-1){const l=ge(s,n[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function tt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ei(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Me(e,t,i,n,d=310,s=310,a=[]){const l=Ce[t]||{},c=Nt(t)||rt[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const _ of r)(e[_]||[]).forEach((L,E)=>{o[`${_}${E+1}`]=L});function u(_){const h=l[_];return h?{x:h.x*d,y:h.y*s}:null}let f="";for(const[_,h]of c){const L=u(_),E=u(h);if(!L||!E)continue;const D=o[_],N=o[h],U=ge(D,N);U==="#00ff88"||U==="#FFD700"?(f+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${U}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${U}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${U}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,w=64,p=13,x=16,z={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[_,h]of Object.entries(o)){const L=u(_);if(!L||!h)continue;const E=_.replace(/[0-9]/g,""),D=ke[E]||"#555",N=a.includes(h.cardId),U=i==="attack"&&(["MIL","ATT"].includes(E)||N)&&!h.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!h.used,b=n.includes(h.cardId);let q;i==="attack"?q=N?Math.max(1,Number(h.note_a)||0):E==="MIL"?Number(h.note_m)||0:Number(h.note_a)||0:i==="defense"?q=E==="GK"?Number(h.note_g)||0:E==="MIL"?Number(h.note_m)||0:Number(h.note_d)||0:q=Number(E==="GK"?h.note_g:E==="DEF"?h.note_d:E==="MIL"?h.note_m:h.note_a)||0,q=q+(h.boost||0);const k=(L.x-g/2).toFixed(1),O=(L.y-w/2).toFixed(1),F=h.used?.25:1,K=z[h==null?void 0:h.rarity]||z.normal,M=b?"#ff3030":K,B=b?3:(h==null?void 0:h.rarity)==="légende"||(h==null?void 0:h.rarity)==="pépite"?2.5:2,C=w-p-x;f+=`<defs><clipPath id="cp-${_}"><rect x="${k}" y="${(L.y-w/2+p).toFixed(1)}" width="${g}" height="${C}"/></clipPath></defs>`,f+=`<rect x="${k}" y="${O}" width="${g}" height="${w}" rx="5" fill="${D}" opacity="${F}"/>`;const P=re(h);P&&!h.used&&(f+=`<image href="${P}" x="${k}" y="${(L.y-w/2+p).toFixed(1)}" width="${g}" height="${C}" clip-path="url(#cp-${_})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${k}" y="${O}" width="${g}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${L.x.toFixed(1)}" y="${(L.y-w/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(h.name||"").slice(0,9)}</text>`;const S=(L.y+w/2-x).toFixed(1);if(f+=`<rect x="${k}" y="${S}" width="${g}" height="${x}" fill="rgba(255,255,255,0.92)"/>`,h.used)f+=`<text x="${L.x.toFixed(1)}" y="${(L.y+w/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const y=tt(h.country_code);y?f+=`<image href="${y}" x="${(L.x-20).toFixed(1)}" y="${(L.y+w/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(L.x-13).toFixed(1)}" y="${(L.y+w/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ei(h.country_code)}</text>`,f+=`<text x="${L.x.toFixed(1)}" y="${(L.y+w/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${q}</text>`;const m=Zt(h);m?f+=`<image href="${m}" x="${(L.x+g/2-14).toFixed(1)}" y="${(L.y+w/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:h.clubName&&(f+=`<text x="${(L.x+14).toFixed(1)}" y="${(L.y+w/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(h.clubName||"").slice(0,3).toUpperCase()}</text>`),h.boost&&(f+=`<rect x="${(L.x+g/2-12).toFixed(1)}" y="${(L.y-w/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(L.x+g/2-5).toFixed(1)}" y="${(L.y-w/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${h.boost}</text>`)}f+=`<rect x="${k}" y="${O}" width="${g}" height="${w}" rx="5" fill="${b?"rgba(255,255,255,0.12)":"none"}" stroke="${M}" stroke-width="${B}" opacity="${F}"/>`,U&&(f+=`<rect x="${k}" y="${O}" width="${g}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${b?"selected":""}" data-card-id="${h.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const v=38;return`<svg viewBox="${-v} ${-v} ${d+v*2} ${s+v*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function ze(e,t,i,n,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Me(e,t,i,n,d,s,a)}
  </div>`}function Fe(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ti(e,t,i,n){var L;const{state:d,navigate:s,toast:a}=t;Jt(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Wi(e,t,i);const c=l.deckId;let o,r,u,f;try{const E=await Promise.all([I.from("decks").select("formation,name").eq("id",c).single(),I.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=E[0].data,u=E[0].error,r=E[1].data,f=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),fe(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),fe(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const g=(r||[]).filter(E=>{var D;return E.is_starter&&((D=E.card)==null?void 0:D.player)}).map(E=>et(E.card,E.position)),w=(r||[]).filter(E=>{var D;return!E.is_starter&&((D=E.card)==null?void 0:D.player)}).map(E=>et(E.card,E.position));if(g.length<11){fe(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>s("decks"));return}const p=(r||[]).find(E=>{var D;return((D=E.card)==null?void 0:D.card_type)==="formation"}),x=(o==null?void 0:o.formation)||((L=p==null?void 0:p.card)==null?void 0:L.formation)||"4-4-2",{data:z,error:v}=await I.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:_}=await I.from("gc_definitions").select("*").eq("is_active",!0),h=(z||[]).map(E=>({...E,_gcDef:(_==null?void 0:_.find(D=>D.name===E.gc_type||D.id===E.gc_definition_id))||null}));n({deckId:c,formation:x,starters:g,subsRaw:w,gcCardsEnriched:h,gcDefs:_||[]})}async function Xi(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await ti(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:f})=>{try{const g=Ue(o,c),w=await Ji(c,s),p=async x=>{try{const{data:z,error:v}=await I.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(v){console.error("[MatchIA] Erreur création match:",v),fe(e,"⚠️","Impossible de créer le match ("+v.message+").","Retour",()=>t.navigate("home"));return}const _={gcDefs:f||[],matchId:z==null?void 0:z.id,mode:a,difficulty:s,formation:c,homeTeam:g,aiTeam:w,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Zi(e,_,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),fe(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}Qt(e,u,p)}catch(g){console.error("[MatchIA] Exception setup:",g),fe(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function Ji(e,t){var a,l;const{data:i}=await I.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Qi(e);const n=$e[e]||$e["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(w=>w.job===c),r=s.filter(w=>w.job!==c),u=[...o,...r],f=[];for(let w=0;w<n[c];w++){const p=u[w]||s[w];p&&f.push({cardId:"ai-"+p.id+"-"+w,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((a=p.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=p.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const g=He(f.length);f.forEach((w,p)=>{w._col=g[p]}),d[c]=f}return d}function Qi(e){const t=$e[e]||$e["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=He(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function Zi(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Me(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>eo(e,t,i),5e3)}function eo(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(p){return p.reduce((x,z)=>x+ie(z,"MIL"),0)}function a(p){let x=0;for(let z=0;z<p.length-1;z++){const v=ge(p[z],p[z+1]);v==="#00ff88"?x+=2:v==="#FFD700"&&(x+=1)}return x}const l=s(n)+a(n),c=s(d)+a(d),o=l>=c;function r(p,x,z,v){return`<div id="duel-row-${v}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${x}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((_,h)=>{const L=h<p.length-1?ge(_,p[h+1]):null,E=!L||L==="#ff3333"||L==="#cc2222",D=L==="#00ff88"?"+2":L==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${v}" data-idx="${h}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${pe({..._,note:ie(_,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${h<p.length-1?`<div class="duel-link duel-link-${v}" data-idx="${h}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${E?"rgba(255,255,255,0.12)":L};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${E?"none":`0 0 8px ${L}`}">
            ${D?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${L}">${D}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${v}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
  </div>`;const u=()=>{const p=(x,z)=>e.querySelectorAll(x).forEach((v,_)=>{setTimeout(()=>{v.style.opacity="1",v.style.transform="translateY(0) scale(1)"},z+_*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((x,z)=>{setTimeout(()=>{x.style.opacity="1"},z*70)}),900),setTimeout(()=>{const x=e.querySelector("#vs-label");x&&(x.style.opacity="1",x.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{f("score-home",l,800),f("score-ai",c,800)},1500)};function f(p,x,z){const v=document.getElementById(p);if(!v)return;const _=performance.now(),h=L=>{const E=Math.min(1,(L-_)/z);v.textContent=Math.round(x*(1-Math.pow(1-E,3))),E<1?requestAnimationFrame(h):v.textContent=x};requestAnimationFrame(h)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const g=o?Xt():null;o&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:re(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:re(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const w=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",te(e,t,i),t.attacker==="ai"&&setTimeout(()=>it(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),x=document.getElementById("score-ai"),z=document.getElementById(o?"duel-row-home":"duel-row-ai"),v=document.getElementById(o?"duel-row-ai":"duel-row-home"),_=o?p:x,h=o?x:p;_&&(_.style.fontSize="80px",_.style.color=o?"#FFD700":"#ff6b6b",_.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var E;const L=document.getElementById("duel-shock");if(L){const D=(E=v||z)==null?void 0:E.getBoundingClientRect(),N=e.querySelector(".match-screen").getBoundingClientRect();D&&(L.style.top=D.top-N.top+D.height/2+"px"),L.style.animation="shockwave .5s ease-out forwards"}v&&(v.style.transformOrigin="center",v.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var E;const L=document.getElementById("duel-finale");L&&(L.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,L.style.transition="opacity .45s ease",L.style.opacity="1",L.style.pointerEvents="auto",(E=document.getElementById("start-match-btn"))==null||E.addEventListener("click",w))},600)},700)},2800)}function to(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>Fe(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>Fe(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${Fe(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${Fe(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function te(e,t,i){var v,_,h,L,E,D,N,U;const n=t.selected.map(b=>b.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(b=>!d.includes(b.cardId));Object.values(t.homeTeam).flat().filter(b=>b.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs;const l=!["GK","DEF","MIL","ATT"].some(b=>(t.aiTeam[b]||[]).some(q=>!q.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(b=>!b.used),o=t.phase==="attack"&&l&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(b=>!b.used).map(b=>b.cardId):[];t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",f=t.phase==="defense",g=t.phase==="finished",w=t.gcCards.filter(b=>!t.usedGc.includes(b.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const q=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Ie((q.players||[]).map(k=>({...k,used:!1})),"#ff6b6b",q.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const q=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Ie((q.players||[]).map(k=>({...k,used:!1})),"#00ff88",q.total)}
          </div>`}const b=t.log[t.log.length-1];return b?'<div style="padding:2px 4px">'+to(b)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const b=window.innerWidth>=700,q=(S,y,m)=>{var ne,ae;const $=(t.gcDefs||[]).find(se=>se.name===S.gc_type),T={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$==null?void 0:$.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",A={purple:"#b06ce0",light_blue:"#00d4ef"}[$==null?void 0:$.color]||"#b06ce0",G=($==null?void 0:$.name)||S.gc_type,j=($==null?void 0:$.effect)||((ne=le[S.gc_type])==null?void 0:ne.desc)||"",H=$!=null&&$.image_url?`/manager-wars/icons/${$.image_url}`:null,R=((ae=le[S.gc_type])==null?void 0:ae.icon)||"⚡",Y=Math.round(m*.22),W=Math.round(m*.22),J=m-Y-W,oe=G.length>12?7:9;return`<div class="gc-mini" data-gc-id="${S.id}" data-gc-type="${S.gc_type}"
          style="box-sizing:border-box;width:${y}px;height:${m}px;border-radius:10px;border:2px solid ${A};background:${T};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Y}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${oe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${y-6}px">${G}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${J}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${H?`<img src="${H}" style="max-width:${y-10}px;max-height:${J-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(J*.55)}px">${R}</span>`}
          </div>
          <div style="height:${W}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${j.slice(0,38)}</span>
          </div>
        </div>`},k=(S,y)=>{var m;return`<div id="boost-card"
          style="box-sizing:border-box;width:${S}px;height:${y}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(y*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(y*.2)}px">⚡</div>
            <div style="font-size:${Math.round(y*.09)}px;color:#000;font-weight:900">+${(m=t.boostCard)==null?void 0:m.value}</div>
          </div>`},O=(S,y)=>y?k(110,150):q(S,110,150),F=(S,y)=>y?k(68,95):q(S,68,95),K=b?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",M=g?`<button id="btn-results" style="${K};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${K};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:f?`<button id="btn-action" style="${K};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${K};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,B=u||f?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",C=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${b?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(S=>`<div class="sub-btn-col" data-sub-id="${S.cardId}" style="cursor:pointer;flex-shrink:0">${pe(S,44,58)}</div>`).join("")}
      </div>`,P=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${ze(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return b?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${C}
          ${P}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${w.map(S=>O(S,!1)).join("")}
              ${p?O(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${M}${B}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${C}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ze(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${w.map(S=>F(S,!1)).join("")}
            ${p?F(null,!0):""}
          </div>
          <div>${M}${B}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(b=>{var q,k,O;if(b.type==="duel"){const F=b.isGoal,K=b.homeScored?"#FFD700":F?"#ff6b6b":"rgba(255,255,255,0.3)",M=b.homeScored?"⚽ BUT !":F?"⚽ BUT IA !":(q=b.homePlayers)!=null&&q.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${F?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${K};margin-bottom:4px">
                <div style="font-size:9px;color:${K};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
                ${(k=b.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${Ie(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
                ${(O=b.aiPlayers)!=null&&O.length?`<div style="opacity:0.7">${Ie(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
              </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${b.outPlayer?pe({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${b.inPlayer?pe({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:b.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${b.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${b.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function x(){const b=e.querySelector(".match-screen");if(!b)return;const q=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);b.style.bottom="auto",b.style.height=q+"px",b.style.minHeight=q+"px",b.style.maxHeight=q+"px",b.style.overflow="hidden";const k=e.querySelector("#mobile-action-bar"),O=e.querySelector("#mobile-play-area");k&&O&&(O.style.paddingBottom=k.offsetHeight+"px")}if(x(),setTimeout(x,120),setTimeout(x,400),setTimeout(x,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",x),window.visualViewport.addEventListener("scroll",x)),window.addEventListener("resize",x)),function(){const q=e.querySelector(".terrain-wrapper svg");q&&(q.removeAttribute("width"),q.removeAttribute("height"),q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",q.setAttribute("viewBox","-26 -26 352 352"),q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const b=e.querySelector(".terrain-wrapper svg");b&&(b.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let b=!1,q=30;const k=()=>document.getElementById("match-timer"),O=()=>{const F=k();if(!F)return;const K=String(Math.floor(q/60)).padStart(2,"0"),M=String(q%60).padStart(2,"0");F.textContent=` ${K}:${M}`,F.style.color=b?"#ff2222":"#ff9500",F.style.fontWeight="900"};O(),t._timerInt=setInterval(()=>{if(q--,q<0)if(!b)b=!0,q=15,O();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",F.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(F),setTimeout(()=>{F.remove(),Te(e,t,i)},2500)}else O()},1e3)}(v=document.getElementById("match-quit"))==null||v.addEventListener("click",()=>{de(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Te(e,t,i))}),(_=document.getElementById("view-ai"))==null||_.addEventListener("click",()=>uo(t,i)),(h=document.getElementById("toggle-history"))==null||h.addEventListener("click",()=>{var b;(b=document.getElementById("match-history-panel"))==null||b.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var b;(b=document.getElementById("match-history-panel"))==null||b.classList.remove("open")}),(E=document.getElementById("btn-action"))==null||E.addEventListener("click",()=>{t.selected.length!==0&&(u?oo(e,t,i):f&&no(e,t,i))}),(D=document.getElementById("btn-results"))==null||D.addEventListener("click",()=>Te(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(b=>{b.addEventListener("click",()=>io(b,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(b=>{b.addEventListener("click",()=>so(b.dataset.gcId,b.dataset.gcType,e,t,i))}),(N=document.getElementById("boost-card"))==null||N.addEventListener("click",()=>po(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(b=>{b.addEventListener("click",()=>Dt(e,t,i,b.dataset.subId))}),(U=document.getElementById("sub-btn-main"))==null||U.addEventListener("click",()=>Dt(e,t,i))}function io(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}te(i,t,n)}function pt(e,t,i){e.matchId&&I.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function oo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),pt(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=at(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",te(e,t,i),setTimeout(()=>ro(e,t,i),1200)}function no(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),pt(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=st(n,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=lt(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:re(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:re(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,te(e,t,i),Ke(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{we(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,we(e,t,i,"home-attack")}function it(e,t,i){pt(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=Pt(n,"attack",t.difficulty);if(!d.length){Ge(e,t,i);return}const s=at(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:re(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,te(e,t,i),Ke(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{we(e,t,i,"home-attack")});return}t.phase="defense",te(e,t,i)}function ro(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=Pt(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(g=>({name:g.name,note:ie(g,g._line||g.job),portrait:re(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,te(e,t,i),Ke(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{we(e,t,i,"ai-attack")});return}const a=d.length>0?st(d,t.modifiers.ai).total:0;d.forEach(u=>{u.used=!0});const l=lt(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:re(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:re(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,te(e,t,i),Ke(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{we(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,we(e,t,i,"ai-attack")}function we(e,t,i,n){if(t.round++,ii(t)){Te(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ge(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ge(e,t,i);return}setTimeout(()=>it(e,t,i),100);return}t.phase="attack",te(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ge(e,t,i);return}t.phase="ai-attack",te(e,t,i),setTimeout(()=>it(e,t,i),800)}}function ii(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Ge(e,t,i){ii(t)?Te(e,t,i):(t.phase="attack",te(e,t,i))}function ao(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=re(e),s=re(t),a=ke[e.job]||"#555",l=ke[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",u),setTimeout(u,2e3)}function Ae(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Dt(e,t,i,n=null){if(t.phase!=="attack"){Ae("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ae(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(u=>u.used),s=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!d.length){Ae("Aucun joueur utilisé à remplacer");return}if(!s.length){Ae("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(u=>u.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var z,v,_,h,L,E;const u=d[a],f=s[l],g=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(g*1.35),p=D=>`background:rgba(255,255,255,0.12);border:none;color:${D?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${D?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${f?pe({...f,used:!1,boost:0},g,w):"<div>—</div>"}</div>
        <button id="in-down" style="${p(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?pe({...u,used:!1,boost:0},g,w):"<div>—</div>"}</div>
        <button id="out-down" style="${p(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(z=o.querySelector("#sub-close"))==null||z.addEventListener("click",()=>o.remove()),(v=o.querySelector("#out-up"))==null||v.addEventListener("click",()=>{a>0&&(a--,r())}),(_=o.querySelector("#out-down"))==null||_.addEventListener("click",()=>{a<d.length-1&&(a++,r())}),(h=o.querySelector("#in-up"))==null||h.addEventListener("click",()=>{l>0&&(l--,r())}),(L=o.querySelector("#in-down"))==null||L.addEventListener("click",()=>{l<s.length-1&&(l++,r())});const x=(D,N,U,b)=>{const q=o.querySelector("#"+D);if(!q)return;let k=0;q.addEventListener("touchstart",O=>{k=O.touches[0].clientY},{passive:!0}),q.addEventListener("touchend",O=>{const F=O.changedTouches[0].clientY-k;if(Math.abs(F)<30)return;const K=N();F<0&&K<b-1?(U(K+1),r()):F>0&&K>0&&(U(K-1),r())},{passive:!0})};x("in-panel",()=>l,D=>l=D,s.length),x("out-panel",()=>a,D=>a=D,d.length),(E=o.querySelector("#sub-confirm"))==null||E.addEventListener("click",D=>{if(D.preventDefault(),D.stopPropagation(),c)return;c=!0;const N=d[a],U=s[l];if(!N||!U)return;let b=null,q=-1;for(const[O,F]of Object.entries(t.homeTeam)){const K=(F||[]).findIndex(M=>M.cardId===N.cardId);if(K!==-1){b=O,q=K;break}}if(q===-1||!b){Ae("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const k={...U,_line:b,_col:N._col||0,used:!1,boost:0};t.homeTeam[b].splice(q,1,k),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(U.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:N.name,firstname:N.firstname,note:ie(N,b),portrait:re(N),job:N.job,country_code:N.country_code,rarity:N.rarity,clubName:N.clubName,clubLogo:N.clubLogo},inPlayer:{name:U.name,firstname:U.firstname,note:ie(U,b),portrait:re(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},text:`🔄 ${U.firstname} ${U.name} remplace ${N.firstname} ${N.name}`}),o.remove(),ao(N,U,()=>te(e,t,i))})}document.body.appendChild(o),r()}function so(e,t,i,n,d){var w,p;const s=(n.gcDefs||[]).find(x=>x.name===t),a=le[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,f=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
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
    </div>`,document.body.appendChild(g),(w=g.querySelector("#gc-back"))==null||w.addEventListener("click",()=>g.remove()),(p=g.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{g.remove(),co(e,t,i,n,d)})}function De(e,t,i,n,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",w=ie(u,f)+(u.boost||0),p=l.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,g=e.find(p=>p.cardId===f);if(!g)return;const w=l.findIndex(p=>p.cardId===f);w>-1?l.splice(w,1):l.length<t&&l.push(g),c()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const lo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(De(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(c=>{const o=(n.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),te(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),te(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,a)=>{const l=n==="home"?d.homeTeam:d.aiTeam,c=n==="ai"?"adverse":"allié",o=Object.entries(l).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:r})));return o.length?(De(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,r=>{r.forEach(u=>{const g=((n==="home"?d.homeTeam:d.aiTeam)[u._line]||[]).find(w=>w.cardId===u.cardId);g&&(g.boost=(g.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),te(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),te(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const a=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:o})));return c.length?(De(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,o=>{o.forEach(r=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),te(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),te(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(De(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),te(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),te(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function co(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=lo[a.effect_type];c?c(a.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,u)=>ie(u,"ATT")-ie(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}I.from("cards").delete().eq("id",e).then(()=>{}),l&&te(i,n,d)}function po(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ke[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ie(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),te(e,t,i)})})}function Ke(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${ke[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function Te(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=mi(t.mode,a);t.matchId&&await I.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?c.wins=(n.profile.wins||0)+1:s?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await I.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),de(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),de(e),i.navigate("match",{matchMode:t.mode})})}function uo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Me(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function fo(e,t){const{state:i}=t;await ti(e,t,"random",({deckId:d,formation:s,starters:a,subsRaw:l,gcCardsEnriched:c,gcDefs:o})=>{const r=u=>{go(e,t,d,s,a,l,u,o||[])};if(!c.length){r([]);return}Qt(e,c,r)})}async function go(e,t,i,n,d,s,a=[],l=[]){var v;const{state:c,navigate:o,toast:r}=t;let u=!1,f=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=()=>document.getElementById("mm-status"),w=async(_=!0)=>{u=!0,f&&(I.removeChannel(f),f=null),_&&await I.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(v=document.getElementById("mm-cancel"))==null||v.addEventListener("click",async()=>{try{await w(!0)}catch(_){console.warn("[Matchmaking] cleanup error:",_)}de(e),o("home")});const p=async(_,h,L)=>{u||(u=!0,f&&(I.removeChannel(f),f=null),g()&&(g().textContent="Adversaire trouvé !"),await new Promise(E=>setTimeout(E,600)),e.isConnected!==!1&&mo(e,t,_,L,a,l))},{data:x,error:z}=await I.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(z||!(x!=null&&x.success)){r("Erreur de matchmaking","error"),de(e),o("home");return}if(x.matched){p(x.match_id,x.opponent_id,!1);return}g()&&(g().textContent="En attente d'un autre joueur..."),f=I.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},_=>{const h=_.new;h.status==="matched"&&h.match_id&&p(h.match_id,h.matched_with,!0)}).subscribe()}async function mo(e,t,i,n,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",u=(d||[]).map(M=>M.id),f=(d||[]).map(M=>({id:M.id,gc_type:M.gc_type,_gcDef:M._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:g}=await I.from("matches").select("*").eq("id",i).single();if(!g){c("Match introuvable","error"),l("home");return}async function w(){const[{data:M,error:B},{data:C,error:P},{data:S},{data:y}]=await Promise.all([I.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),I.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),I.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),I.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]);B&&console.error("[PvP] get_deck_for_match p1 error:",B),P&&console.error("[PvP] get_deck_for_match p2 error:",P);function m(R,Y){return{cardId:R.card_id,position:Y||R.position,id:R.id,firstname:R.firstname,name:R.surname_encoded,country_code:R.country_code,club_id:R.club_id,job:R.job,job2:R.job2,note_g:Number(R.note_g)||0,note_d:Number(R.note_d)||0,note_m:Number(R.note_m)||0,note_a:Number(R.note_a)||0,rarity:R.rarity,skin:R.skin,hair:R.hair,hair_length:R.hair_length,clubName:R.club_encoded_name||null,clubLogo:R.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const $=((M==null?void 0:M.starters)||[]).map(R=>m(R,R.position)),T=((C==null?void 0:C.starters)||[]).map(R=>m(R,R.position)),A=((M==null?void 0:M.subs)||[]).map(R=>m(R,R.position)),G=((C==null?void 0:C.subs)||[]).map(R=>m(R,R.position)),j=(M==null?void 0:M.formation)||"4-4-2",H=(C==null?void 0:C.formation)||"4-4-2";return console.log("[PvP] p1Formation:",j,"p1 starters:",$.length,"positions:",$.map(R=>R.position)),console.log("[PvP] p2Formation:",H,"p2 starters:",T.length,"positions:",T.map(R=>R.position)),{p1Team:Ue($,j),p2Team:Ue(T,H),p1Subs:A,p2Subs:G,p1Formation:j,p2Formation:H,p1Name:(S==null?void 0:S.club_name)||(S==null?void 0:S.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,gcReady_p1:!0,gcReady_p2:!0,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let p=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!p)if(n){p=await w();const{data:M}=await I.from("matches").select("game_state").eq("id",i).single();!(M!=null&&M.game_state)||!Object.keys(M.game_state).length?await I.from("matches").update({game_state:p,turn_user_id:g.home_id}).eq("id",i):p=M.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let M=0;M<30&&!p;M++){await new Promise(C=>setTimeout(C,400));const{data:B}=await I.from("matches").select("game_state").eq("id",i).single();B!=null&&B.game_state&&Object.keys(B.game_state).length&&(p=B.game_state)}if(!p){c("Erreur de synchronisation","error"),l("home");return}p.gc_p2=u,p.gcCardsFull_p2=f,await I.from("matches").update({game_state:p}).eq("id",i)}let x=!1;function z(M){var $;try{I.removeChannel(v)}catch{}const B=a.profile.id,C=M.winner_id===B,P=!!M.forfeit,S=p[o+"Score"]??0,y=p[r+"Score"]??0,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:64px">${C?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${C?"#FFD700":"#ff6b6b"}">${C?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px;color:#fff">${p[o+"Name"]} ${S} – ${y} ${p[r+"Name"]}</div>
      ${P?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${C?"L'adversaire a quitté la partie":"Match perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),($=m.querySelector("#pvp-end-home"))==null||$.addEventListener("click",()=>{m.remove(),de(e),l("home")})}const v=I.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},M=>{const B=M.new;try{if(B.status==="finished"||B.forfeit){if(x)return;x=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),B.game_state&&(p=B.game_state),z(B);return}B.game_state&&(p=B.game_state,L())}catch(C){console.error("[PvP] Realtime render crash:",C,"gameState:",p)}}).subscribe();async function _(M){Object.assign(p,M),p.lastActionAt=new Date().toISOString();const{error:B}=await I.from("matches").update({game_state:p}).eq("id",i);B&&(console.error("[PvP] pushState DB error:",B.message,B),c("Erreur de synchronisation : "+B.message,"error"));try{L()}catch(C){console.error("[PvP] renderPvpScreen crash après pushState:",C),c("Erreur d'affichage : "+C.message,"error")}}async function h(){if(x)return;x=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null);const M=n?g.away_id:g.home_id;try{await I.from("matches").update({status:"finished",forfeit:!0,winner_id:M}).eq("id",i)}catch(B){console.warn("[PvP] forfeit DB error:",B)}try{I.removeChannel(v)}catch{}de(e),l("home")}function L(){var xt,yt,ht,vt,bt;const M=p[o+"Team"];p[r+"Team"];const B=p[o+"Score"],C=p[r+"Score"],P=p[o+"Name"],S=p[r+"Name"];if(p.phase==="gc-select")return E();if(p.phase==="reveal")return D();if(p.phase==="midfield")return N();if(p.phase==="finished")return O();const y=p.phase===o+"-attack",m=p.phase===o+"-defense",$=p.phase===r+"-attack"||p.phase===r+"-defense",T=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],A=T.map(V=>V.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const G=window.innerWidth>=700,j=p[o+"Subs"]||[],H=p["usedSubIds_"+o]||[],R=j.filter(V=>!H.includes(V.cardId)),Y=p["gcCardsFull_"+o]||[],W=p["usedGc_"+o]||[],J=Y.filter(V=>!W.includes(V.id)),oe=p.boostOwner===o&&!p.boostUsed,ne=(V,Q,ee)=>{var kt,Et;const X=V._gcDef,ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[X==null?void 0:X.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",je={purple:"#b06ce0",light_blue:"#00d4ef"}[X==null?void 0:X.color]||"#b06ce0",ye=(X==null?void 0:X.name)||V.gc_type,si=(X==null?void 0:X.effect)||((kt=le[V.gc_type])==null?void 0:kt.desc)||"",wt=X!=null&&X.image_url?`/manager-wars/icons/${X.image_url}`:null,li=((Et=le[V.gc_type])==null?void 0:Et.icon)||"⚡",_t=Math.round(ee*.22),$t=Math.round(ee*.22),Xe=ee-_t-$t,di=ye.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${V.id}" data-gc-type="${V.gc_type}"
        style="width:${Q}px;height:${ee}px;border-radius:10px;border:2px solid ${je};background:${ce};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${di}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Q-6}px">${ye}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Xe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${wt?`<img src="${wt}" style="max-width:${Q-10}px;max-height:${Xe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Xe*.55)}px">${li}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${si.slice(0,38)}</span>
        </div>
      </div>`},ae=(V,Q)=>`<div id="pvp-boost-card" style="width:${V}px;height:${Q}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${G?22:18}px">⚡</div>
      <div style="font-size:${G?11:9}px;color:#000;font-weight:900">+${p.boostValue}</div>
    </div>`,se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${G?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${R.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':R.map(V=>`<div class="pvp-sub-btn" data-sub-id="${V.cardId}" style="cursor:pointer;flex-shrink:0">${pe(V,G?60:44,G?78:58)}</div>`).join("")}
    </div>`,me=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${ze(M,p[o+"Formation"],y?"attack":m?"defense":"idle",A,300,300)}
      </div>
    </div>`,xe=G?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Se=y?`<button id="pvp-action" style="${xe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${T.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:m?`<button id="pvp-action" style="${xe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${T.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${xe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${S}</div>`,gt=y||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${T.length}/3 sélectionné(s)</div>`:"",ri=(()=>{const V=p.pendingAttack;if(m&&V&&Array.isArray(V.players))return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${S} ATTAQUE — Défendez !</div>
          ${Ie(V.players.map(ce=>({...ce,used:!1})),"#ff6b6b",V.total)}
        </div>`;const Q=Array.isArray(p.log)?p.log:[],ee=Q[Q.length-1];return ee?`<div style="padding:7px 10px;border-left:3px solid ${ee.type==="goal"?"#FFD700":ee.type==="stop"?"#00ff88":ee.type==="attack"?"#ff6b6b":"rgba(255,255,255,0.6)"};font-size:12px;color:#fff">${ee.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),ai=(Array.isArray(p.log)?p.log:[]).length,mt=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${P} <span style="color:#FFD700;font-size:18px">${B}</span> – <span style="color:#FFD700;font-size:18px">${C}</span> ${S}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${$?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${$?`⏳ Tour de ${S}`:y?"⚔️ À vous d'attaquer !":m?"🛡️ À vous de défendre !":""}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${ri}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${ai})
      </button>`;if(G)e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${mt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          ${me}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${Se}${gt}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${oe?ae(110,90):""}
            ${J.map(V=>ne(V,110,150)).join("")}
          </div>
        </div>
      </div>`;else{e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${mt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden"></div>
          </div>
        </div>
        <!-- ZONE BAS : cartes GC en ligne + bouton pleine largeur (comme vs IA) -->
        <div style="flex-shrink:0;background:rgba(0,0,0,0.35);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${J.map(Q=>ne(Q,68,95)).join("")}
            ${oe?ae(68,95):""}
          </div>
          <div>${Se}${gt}</div>
        </div>
      </div>`;const V=e.querySelector(".terrain-wrapper");V&&(V.innerHTML=ze(M,p[o+"Formation"],y?"attack":m?"defense":"idle",A,300,300))}if(e.querySelectorAll(".match-slot-hit").forEach(V=>{V.addEventListener("click",()=>{if(!y&&!m)return;const Q=V.dataset.cardId,ee=V.dataset.role,X=(M[ee]||[]).find(ye=>ye.cardId===Q);if(!X||X.used)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const ce=p["selected_"+o],je=ce.findIndex(ye=>ye.cardId===Q);je>-1?ce.splice(je,1):ce.length<3&&ce.push({...X,_role:ee}),L()})}),(xt=e.querySelector("#pvp-boost-card"))==null||xt.addEventListener("click",()=>{U()}),e.querySelectorAll(".pvp-gc-mini").forEach(V=>{V.addEventListener("click",()=>{k(V.dataset.gcId,V.dataset.gcType)})}),(yt=e.querySelector("#pvp-action"))==null||yt.addEventListener("click",()=>{y?F():m&&K()}),(ht=e.querySelector("#pvp-quit"))==null||ht.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&h()}),(vt=e.querySelector("#pvp-view-opp"))==null||vt.addEventListener("click",()=>{q()}),(bt=e.querySelector("#pvp-toggle-history"))==null||bt.addEventListener("click",()=>{b()}),function(){const Q=e.querySelector(".terrain-wrapper svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("viewBox","-26 -26 352 352"),Q.setAttribute("preserveAspectRatio","xMidYMid meet"));const ee=e.querySelector(".match-screen");if(ee){const X=e.clientHeight;X>50&&(ee.style.height=X+"px",ee.style.maxHeight=X+"px",ee.style.overflow="hidden")}}(),p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),(y||m)&&!x){let V=30,Q=!1;const ee=()=>document.getElementById("pvp-timer"),X=()=>{ee()&&(ee().textContent=V+"s",ee().style.color=Q?"#ff4444":"#fff")};X(),p._timerInt=setInterval(()=>{V--,V<0?Q?(clearInterval(p._timerInt),p._timerInt=null,h()):(Q=!0,V=15,X()):X()},1e3)}}function E(){var m;const M=p["gcReady_"+o],B=p["gcReady_"+r];Array.isArray(p["gc_"+o])||(p["gc_"+o]=[]);let C=p["gc_"+o];const P=3;function S($,T){const A=$._gcDef,G={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},j={purple:"#9b59b6",light_blue:"#00bcd4"},H=G[A==null?void 0:A.color]||G.purple,R=j[A==null?void 0:A.color]||j.purple;return`<div class="pvp-gc-card" data-id="${$.id}"
        style="width:100px;border-radius:10px;border:3px solid ${T?"#FFD700":R};background:${H};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${T?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${T?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((A==null?void 0:A.name)||$.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(A==null?void 0:A.name)||$.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${A!=null&&A.image_url?`<img src="/manager-wars/icons/${A.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((A==null?void 0:A.effect)||"").slice(0,50)}</span>
        </div>
        ${T?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${P}</b> cartes · ${C.length}/${P}
        </div>
      </div>
      ${M?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${B?"Adversaire aussi.":`En attente de ${p[r+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${C.length?`⚡ Valider (${C.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,M)return;const y=o==="p1"?g.home_id:g.away_id;I.from("cards").select("id,gc_type").eq("owner_id",y).eq("card_type","game_changer").then(async({data:$})=>{const{data:T}=await I.from("gc_definitions").select("*").eq("is_active",!0),A=new Set,G=($||[]).filter(H=>A.has(H.gc_type)?!1:(A.add(H.gc_type),!0)).map(H=>({...H,_gcDef:(T==null?void 0:T.find(R=>R.name===H.gc_type))||null})),j=document.getElementById("pvp-gc-grid");if(j){if(!G.length){j.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}j.innerHTML=G.map(H=>S(H,C.includes(H.id))).join(""),j.querySelectorAll(".pvp-gc-card").forEach(H=>{H.addEventListener("click",()=>{const R=H.dataset.id,Y=C.indexOf(R);Y>-1?C.splice(Y,1):C.length<P&&C.push(R),L()})})}}),(m=e.querySelector("#pvp-gc-validate"))==null||m.addEventListener("click",async()=>{const $=o==="p1"?g.home_id:g.away_id,{data:T}=await I.from("cards").select("id,gc_type").eq("owner_id",$).eq("card_type","game_changer").in("id",C),{data:A}=await I.from("gc_definitions").select("*").eq("is_active",!0),G=(T||[]).map(j=>({...j,_gcDef:(A==null?void 0:A.find(H=>H.name===j.gc_type))||null}));await _({["gcReady_"+o]:!0,["gcCardsFull_"+o]:G}),p["gcReady_"+r]&&await _({phase:"reveal"})})}function D(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Me(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,o==="p1"&&setTimeout(async()=>{await _({phase:"midfield"})},5e3)}function N(){const M=p[o+"Team"].MIL||[],B=p[r+"Team"].MIL||[];function C(T){return T.reduce((A,G)=>A+ie(G,"MIL"),0)}function P(T){let A=0;for(let G=0;G<T.length-1;G++){const j=ge(T[G],T[G+1]);j==="#00ff88"?A+=2:j==="#FFD700"&&(A+=1)}return A}const S=C(M)+P(M),y=C(B)+P(B),m=S>=y;function $(T,A,G){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${A}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${T.map((j,H)=>{const R=re(j),Y=H<T.length-1?ge(j,T[H+1]):null,W=Y&&Y!=="#ff3333"&&Y!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${G};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${R?`<img src="${R}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${ie(j,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${j.name}</div>
            </div>
            ${Y?`<div style="width:14px;height:4px;border-radius:2px;background:${Y};flex-shrink:0;opacity:${W?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${C(T)} + ${P(T)} liens = <b style="color:#fff">${C(T)+P(T)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${$(M,p[o+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${S}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${y}</div>
      </div>

      ${$(B,p[r+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const T=document.getElementById("pvp-score-me"),A=document.getElementById("pvp-score-opp"),G=document.getElementById("pvp-midfield-result");T&&A&&(m?(T.style.fontSize="80px",T.style.color="#FFD700",A.style.opacity="0.25"):(A.style.fontSize="80px",A.style.color="#ff6b6b",T.style.opacity="0.25"));const j=p.p1Team.MIL||[],H=p.p2Team.MIL||[],R=C(j)+P(j),Y=C(H)+P(H),W=R>=Y?"p1":"p2";p[W+"Name"];let J=p.boostValue;J==null&&(J=Xt(),p.boostValue=J,p.boostOwner=W,p.boostUsed=!1),G&&(G.style.opacity="1",G.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${m?`${p[o+"Name"]} gagne le milieu de terrain et attaque !`:`${p[r+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${m?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${J}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(o!=="p1")return;const oe=W;await _({phase:oe+"-attack",attacker:oe,round:1,boostValue:p.boostValue,boostUsed:!1,boostOwner:oe})},1800)},600)}function U(){var P;const M=p[o+"Team"],B=Object.entries(M).flatMap(([S,y])=>(y||[]).filter(m=>!m.used).map(m=>({...m,_line:S})));if(!B.length)return;const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",C.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${B.map(S=>{const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",m=ie(S,S._line)+(S.boost||0);return`<div class="boost-pick-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${y};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${m}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(C),(P=C.querySelector("#boost-picker-close"))==null||P.addEventListener("click",()=>C.remove()),C.querySelectorAll(".boost-pick-item").forEach(S=>{S.addEventListener("click",async()=>{const y=S.dataset.cid,m=B.find(A=>A.cardId===y);if(!m)return;const $=p[o+"Team"],T=($[m._line]||[]).find(A=>A.cardId===y);T&&(T.boost=(T.boost||0)+p.boostValue),C.remove(),await _({[o+"Team"]:$,boostUsed:!0})})})}function b(){var C;const M=Array.isArray(p.log)?p.log:[],B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",B.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${M.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...M].reverse().map(P=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${P.type==="goal"?"#FFD700":P.type==="defense"?"#00ff88":"rgba(255,255,255,0.5)"}">
                <div style="font-size:12px;color:#fff">${P.text||""}</div>
              </div>`).join("")}
      </div>`,document.body.appendChild(B),(C=B.querySelector("#pvp-hist-close"))==null||C.addEventListener("click",()=>B.remove())}function q(){var B;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",M.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Me(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(M),(B=M.querySelector("#pvp-view-opp-close"))==null||B.addEventListener("click",()=>M.remove())}function k(M,B){var R,Y;const P=(p["gcCardsFull_"+o]||[]).find(W=>W.id===M),S=P==null?void 0:P._gcDef,y=le[B]||{icon:"⚡",desc:"Carte spéciale."},m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",T=(S==null?void 0:S.name)||B,A=(S==null?void 0:S.effect)||y.desc,G=S!=null&&S.image_url?`/manager-wars/icons/${S.image_url}`:null,j=y.icon||"⚡",H=document.createElement("div");H.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",H.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${$};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${$}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${G?`<img src="${G}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${j}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(H),(R=H.querySelector("#pvp-gc-back"))==null||R.addEventListener("click",()=>H.remove()),(Y=H.querySelector("#pvp-gc-use"))==null||Y.addEventListener("click",async()=>{H.remove();const W=p["usedGc_"+o]||[];W.push(M),await _({["usedGc_"+o]:W})})}function O(){var S;const M=p[o+"Score"],B=p[r+"Score"],C=M>B,P=M===B;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${C?"🏆":P?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${C?"Victoire !":P?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${M} - ${B}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(S=document.getElementById("pvp-home"))==null||S.addEventListener("click",()=>{I.removeChannel(v),de(e),l("home")})}async function F(){const M=(p["selected_"+o]||[]).map(P=>({...(p[o+"Team"][P._role]||[]).find(y=>y.cardId===P.cardId)||P,_line:P._role}));if(!M.length)return;const B=at(M,p.modifiers[o]||{});M.forEach(P=>{const S=(p[o+"Team"][P._role]||[]).find(y=>y.cardId===P.cardId);S&&(S.used=!0)});const C=Array.isArray(p.log)?p.log:[];C.push({type:"attack",text:`⚔️ ${p[o+"Name"]} attaque (${B.total})`,players:M,total:B.total,side:o}),await _({pendingAttack:{...B,players:M,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:r+"-defense",log:C})}async function K(){const M=(p["selected_"+o]||[]).map(G=>({...(p[o+"Team"][G._role]||[]).find(H=>H.cardId===G.cardId)||G,_line:G._role})),B=st(M,p.modifiers[o]||{});M.forEach(G=>{const j=(p[o+"Team"][G._role]||[]).find(H=>H.cardId===G.cardId);j&&(j.used=!0)});const C=lt(p.pendingAttack.total,B.total,p.modifiers[o]||{}),P=p.pendingAttack.side,S=C==="attack",y=p[P+"Score"]+(S?1:0),m=P==="p1"?"p2":"p1",$=(p.round||0)+1,T=$>10,A=Array.isArray(p.log)?p.log:[];A.push({type:"defense",text:`🛡️ ${p[o+"Name"]} défend (${B.total})`,players:M,total:B.total,side:o}),A.push({type:S?"goal":"stop",text:S?`⚽ BUT de ${p[P+"Name"]} ! (${p.pendingAttack.total} vs ${B.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${B.total})`}),await _({[P+"Score"]:y,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:T?"finished":m+"-attack",attacker:m,round:$,log:A}),T&&await I.from("matches").update({status:"finished"}).eq("id",i)}L()}const xo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function yo(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await ut(e,t)}async function ut(e,t){const{state:i,toast:n}=t,{data:d}=await I.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await I.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
      </div>`;return}const f=o==="mine"?[...u].sort((g,w)=>g.status!==w.status?g.status==="active"?-1:1:new Date(w.listed_at)-new Date(g.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(g=>{var _,h,L,E;const w=(_=g.card)==null?void 0:_.player;if(!w)return"";const p=w.job==="GK"?w.note_g:w.job==="DEF"?w.note_d:w.job==="MIL"?w.note_m:w.note_a,x=xo[w.rarity],z=(i.profile.credits||0)>=g.price,v=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${v?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${bo(w.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${w.firstname} ${w.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${w.country_code} · ${((h=w.clubs)==null?void 0:h.encoded_name)||"—"} · ${w.rarity} · ${w.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((L=g.seller)==null?void 0:L.pseudo)||"—"}</div>`:v?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((E=g.buyer)==null?void 0:E.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${z?"":"disabled"} style="margin-top:4px">${z?"Acheter":"Trop cher"}</button>`:v?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>ho(g.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>vo(g.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function ho(e,t,i,n){var u;const{state:d,toast:s}=n,a=t.find(f=>f.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(u=a.card)==null?void 0:u.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:f,error:g}=await I.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(g)throw new Error(g.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");d.profile.credits=c-l;const w=document.querySelector("[data-credits]")||document.querySelector(".credits-display");w&&(w.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),ut(i,n)}catch(f){s("❌ "+f.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function vo(e,t,i){const{toast:n}=i,{data:d}=await I.from("market_listings").select("card_id").eq("id",e).single();await I.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await I.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),ut(t,i)}function bo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function wo(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await I.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function _o(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await I.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===d.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const f=r.winner_id===d.id,g=r.home_score===r.away_score&&r.status==="finished",w=r.status!=="finished"?"…":g?"N":f?"V":"D",p=r.status!=="finished"||g?"#888":f?"#1A6B3C":"#c0392b";let x=a[r.mode]||r.mode;r.away_id===null&&!x.startsWith("IA")&&(x="IA");const v=r.home_id===d.id?r.away:r.home;let _;r.away_id===null?_=x:v?_=`${v.club_name||v.pseudo} (${v.pseudo})`:_="Adversaire";let h="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(h=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const L=new Date(r.created_at),E=L.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+L.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${_}${h}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${E}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${w}</span>
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
  </div>`}const Z={user:null,profile:null,page:"home",params:{}};function Re(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function $o(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ot(){document.getElementById("modal-overlay").classList.add("hidden")}async function qe(){if(!Z.user)return;const{data:e}=await I.from("users").select("*").eq("id",Z.user.id).single();e&&(Z.profile=e)}const ft="mw_theme";function Ve(){return localStorage.getItem(ft)||"light"}function ko(e){var t;localStorage.setItem(ft,e),nt(e),(t=Z.profile)!=null&&t.id&&I.from("users").update({theme:e}).eq("id",Z.profile.id).then(()=>{})}function nt(e){document.documentElement.setAttribute("data-theme",e)}function Ne(e,t={}){Z.page=e,Z.params=t,oi()}async function oi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===Z.page)});const t=document.getElementById("nav-credits");t&&Z.profile&&(t.textContent=`💰 ${(Z.profile.credits||0).toLocaleString("fr")}`);const i={state:Z,navigate:Ne,toast:Re,openModal:$o,closeModal:ot,refreshProfile:qe};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Z.page){case"home":await Tt(e,i);break;case"collection":await hi(e,i);break;case"decks":await Qe(e,i);break;case"boosters":await ji(e,i);break;case"match":{(Z.params&&Z.params.matchMode||"vs_ai_easy")==="random"?await fo(e,i):await Xi(e,i);break}case"market":await yo(e,i);break;case"rankings":await wo(e,i);break;case"matches":await _o(e,i);break;default:await Tt(e,i)}}function Eo(){const e=document.getElementById("app"),t=Z.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),Ne(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ne("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ne("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=Ve()==="dark"?"light":"dark";ko(d),Gt(d)}),Gt(Ve())}function Gt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Ao(){nt(Ve()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ot()}),document.getElementById("modal-close").addEventListener("click",ot);const{data:{session:e}}=await I.auth.getSession();if(!e){qt(),At(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Re});return}Z.user=e.user,await qe(),qt();try{const{data:t}=await I.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),ci(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!Z.profile){pi(document.getElementById("app"),{state:Z,navigate:async()=>{await qe(),Rt()},toast:Re,refreshProfile:qe});return}Z.profile.theme&&Z.profile.theme!==Ve()&&(localStorage.setItem(ft,Z.profile.theme),nt(Z.profile.theme)),Rt(),I.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(Z.user=null,Z.profile=null,document.getElementById("app").innerHTML="",At(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Re}))})}function Io(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function We(){const e=document.getElementById("app");e&&(e.style.height=Io()+"px")}window.addEventListener("resize",We);window.addEventListener("orientationchange",()=>setTimeout(We,150));window.visualViewport&&window.visualViewport.addEventListener("resize",We);function Rt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",We(),Eo(),oi()}function qt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function ni(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Ao().catch(e=>{console.error("Échec du démarrage:",e),ni()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&ni("Le serveur met trop de temps à répondre.")},12e3);
