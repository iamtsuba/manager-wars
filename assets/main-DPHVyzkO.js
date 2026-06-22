import{s as k,F as it,b as Ce,c as Dt,l as ge,d as si}from"./formation-links-Bt44rMnM.js";function kt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!a||!c){n.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:d}=await k.auth.signInWithPassword({email:a,password:c});if(s.textContent="Se connecter",s.disabled=!1,d){n.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!c||!n){s.textContent="Remplissez tous les champs.";return}if(c.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==n){s.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:l}=await k.auth.signUp({email:a,password:c});if(d.textContent="Créer mon compte",d.disabled=!1,l){s.textContent=l.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function di(e,{state:t,navigate:i,toast:a,refreshProfile:c}){let n="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${n}">
          <span id="logo-initials" style="color:${n}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${n};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${n}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function d(){var C;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((C=document.getElementById("setup-club"))==null?void 0:C.value)||"MW",g=u.trim().split(" ").filter(Boolean),f=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=n),r&&(r.textContent=f,r.style.color=n)}document.getElementById("color1").addEventListener("input",o=>{n=o.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,d()});function l(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await k.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await k.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),g=document.getElementById("step3-finish");u.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:f}=await k.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:n,club_color2:s,credits:1e4});if(f)throw f;await li(t.user.id),await c(),a(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){u.textContent=f.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function li(e){const{data:t}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,a=i.filter(l=>l.job==="GK"),c=i.filter(l=>l.job!=="GK"),n=[];for(let l=0;l<5;l++){let o=[];if(l===0&&a.length>0){const r=a[Math.floor(Math.random()*a.length)];o.push(r);const u=Et([...c]).slice(0,3);o.push(...u)}else o=Et([...i]).slice(0,4);o.forEach(r=>{n.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(l=>{n.push({owner_id:e,card_type:"game_changer",gc_type:l})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),n.length>0&&await k.from("cards").insert(n),await k.from("users").update({first_booster_opened:!0}).eq("id",e)}function Et(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const ci="2026.06.22-0834";async function It(e,{state:t,navigate:i,toast:a}){var n,s;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${ci}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",l=>{l.preventDefault(),i(d.dataset.nav)})}),(n=document.getElementById("nav-rankings"))==null||n.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const l=d.dataset.action;if(l==="match-ai"){pi(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()}))}function pi(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ie(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const At=["ATT","MIL","DEF","GK"];function qt(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let c=a+1;c<i;c++){const n=e[a],s=e[c];if(!n||!s)continue;const d=n._col!==void 0&&s._col!==void 0&&n._col===s._col,l=n._col!==void 0&&s._col!==void 0&&Math.abs(n._col-s._col)===1,o=At.indexOf(n._line),r=At.indexOf(s._line),u=Math.abs(o-r)===1;(n._line===s._line&&l||d&&u)&&(n.country_code&&s.country_code&&n.country_code===s.country_code&&t++,n.club_id&&s.club_id&&n.club_id===s.club_id&&t++)}return t}function ot(e,t={}){const i=e.reduce((n,s)=>{const d=s._line||s.job;return n+(Number(d==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=qt(e);let c=i+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function nt(e,t={}){const i=e.reduce((n,s)=>{const d=s._line||s.job;let l=0;return d==="GK"?l=Number(s.note_g)||0:d==="MIL"?l=Number(s.note_m)||0:l=Number(s.note_d)||0,n+l+(s.boost||0)},0),a=qt(e);let c=i+a;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function rt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Gt(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const c=[...a].sort((s,d)=>{const l=t==="attack"?ie(s,"ATT"):s._line==="GK"?ie(s,"GK"):ie(s,"DEF");return(t==="attack"?ie(d,"ATT"):d._line==="GK"?ie(d,"GK"):ie(d,"DEF"))-l});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(n,c.length,3))}function ui(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Rt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ne={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Be=["GK","DEF","MIL","ATT"],fi=["Tous","GK","DEF","MIL","ATT"],gi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},at={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Nt(e){return null}function Te(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function De(e,t=""){var u,g;const i=e.player;if(!i)return"";const a=i.job||"ATT",c=Ne[a],n=Rt[i.rarity]||"#ccc",s=Te(i,a),d=i.job2?Te(i,i.job2):null,l=i.job2?Ne[i.job2]:null,o=Nt(),r=at[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${n};cursor:pointer;flex-shrink:0;position:relative
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${c}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${c}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${d}</text>
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
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=i.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Tt(e){const t=e.job||"ATT",i=Te(e,t),a=at[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${a}</div>
      </div>
    </div>
  </div>`}async function mi(e,t){const{state:i,navigate:a,toast:c,openModal:n,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(d||[]).filter(v=>v.card_type==="player"&&v.player),r=(d||[]).filter(v=>v.card_type==="game_changer"),u=(d||[]).filter(v=>v.card_type==="formation"),{data:g}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(g||[]).forEach(v=>{f[v.name]=v});const C=Object.keys(it),p=Object.keys(de),x={};o.forEach(v=>{const w=v.player.id;x[w]=(x[w]||0)+1}),new Set(Object.keys(x).map(v=>String(v)));const A=new Set(u.map(v=>v.formation)),h=new Set(r.map(v=>v.gc_type));let m="player",_="Tous",j="",M=!1;function y(){return[...o].sort((v,w)=>{const D=Be.indexOf(v.player.job),T=Be.indexOf(w.player.job);return D!==T?D-T:(v.player.surname_encoded||"").localeCompare(w.player.surname_encoded||"")})}function z(){return[...l||[]].sort((v,w)=>{const D=Be.indexOf(v.job),T=Be.indexOf(w.job);return D!==T?D-T:(v.surname_encoded||"").localeCompare(w.surname_encoded||"")})}function R(){return y().filter(v=>{const w=v.player,D=_==="Tous"||w.job===_,T=!j||`${w.firstname} ${w.surname_encoded}`.toLowerCase().includes(j);return D&&T})}function b(){return z().filter(v=>{const w=_==="Tous"||v.job===_,D=!j||`${v.firstname} ${v.surname_encoded}`.toLowerCase().includes(j);return w&&D})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="player"?"var(--green)":"transparent"};
        color:${m==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="formation"?"var(--green)":"transparent"};
        color:${m==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="gc"?"var(--green)":"transparent"};
        color:${m==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function F(){const v=document.getElementById("col-filters");v&&(m==="player"?(v.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${j}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${fi.map(w=>`
            <button class="filter-btn" data-job="${w}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${w===_?"var(--green)":"var(--gray-200)"};
                background:${w===_?"var(--green)":"#fff"};
                color:${w===_?"#fff":"var(--gray-600)"}">
              ${w}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${M?"var(--yellow)":"var(--gray-200)"};
              background:${M?"var(--yellow)":"#fff"};
              color:${M?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${M?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",w=>{j=w.target.value.toLowerCase(),O()}),e.querySelectorAll(".filter-btn").forEach(w=>{w.addEventListener("click",()=>{_=w.dataset.job,F(),O()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{M=!M,F(),O()})):(v.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${M?"var(--yellow)":"var(--gray-200)"};
              background:${M?"var(--yellow)":"#fff"};
              color:${M?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${M?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{M=!M,F(),O()})))}function O(){const v=document.getElementById("col-grid");v&&(m==="player"?B(v):m==="formation"?N(v):E(v))}function H(v,w,D,T,$){$=$||"#7a28b8";const G=document.getElementById("col-grid"),S=document.getElementById("col-big");if(!G||!S)return;var P=0;function q(){S.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+w(v[P])+"</div>";var V=S.querySelector("[data-card-id],[data-form-id],[data-gc-id]");V&&V.addEventListener("click",function(){T(v[P])}),requestAnimationFrame(function(){var Y=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Y||!S)){var J=S.clientHeight-8,te=S.clientWidth-24,re=Y.offsetHeight,ae=Y.offsetWidth;if(re>0&&ae>0&&J>40){var se=Math.min(J/re,te/ae,1);Y.style.transform="scale("+se.toFixed(3)+")",Y.style.transformOrigin="top center"}}}),G.innerHTML=v.map(function(Y,J){return'<div class="col-mini-item" data-idx="'+J+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(J===P?$:"transparent")+';transition:border-color .15s;overflow:hidden">'+D(Y,J===P)+"</div>"}).join(""),G.querySelectorAll(".col-mini-item").forEach(function(Y){Y.addEventListener("click",function(){P=Number(Y.dataset.idx),q(),Y.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}q()}function U(v){var w=.54,D=Math.round(140*w),T=Math.round(310*w),$;if(!v||v._fake){var G=v?v.player:null;if(!G)return"";$=Tt(G)}else $=De(v,"");return'<div style="width:'+D+"px;height:"+T+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+w+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+$+"</div></div>"}function W(v,w,D){w=w||100,D=D||140;var T=Ce[v]||{},$={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},G=Math.max(3,Math.round(w*.06)),S=Object.entries(T).map(function(q){var V=q[0],Y=q[1],J=V.replace(/\d+$/,""),te=$[J]||"#888",re=Math.round(Y.x*w),ae=Math.round(Y.y*D);return'<circle cx="'+re+'" cy="'+ae+'" r="'+G+'" fill="'+te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),P=Math.max(1,Math.round(w/50));return'<svg viewBox="0 0 '+w+" "+D+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+w+'" height="'+D+'" fill="#1A6B3C"/><rect x="'+Math.round(w*.2)+'" y="'+Math.round(D*.02)+'" width="'+Math.round(w*.6)+'" height="'+Math.round(D*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+P+'"/><line x1="0" y1="'+Math.round(D*.5)+'" x2="'+w+'" y2="'+Math.round(D*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+P+'"/><ellipse cx="'+Math.round(w*.5)+'" cy="'+Math.round(D*.5)+'" rx="'+Math.round(w*.18)+'" ry="'+Math.round(D*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+P+'"/><rect x="'+Math.round(w*.2)+'" y="'+Math.round(D*.82)+'" width="'+Math.round(w*.6)+'" height="'+Math.round(D*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+P+'"/>'+S+"</svg>"}function I(v,w,D){var T=D>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+D+"</div>":"",$=w?'data-form-id="'+w.id+'"':"",G=v.length>7?14:v.length>5?16:19,S=!!w;return"<div "+$+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(S?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(S?"":"filter:grayscale(1);opacity:0.5")+'">'+T+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(S?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+G+"px;font-weight:900;color:"+(S?"#1A6B3C":"#aaa")+';line-height:1">'+v+'</div></div><div style="flex:1;overflow:hidden;background:'+(S?"#1A6B3C":"#ccc")+'">'+W(v,140,220)+"</div></div>"}function L(v,w){var D=.54,T=Math.round(140*D),$=Math.round(305*D),G=Math.round($*.22),S=$-G,P=v.length>7?5:7,q=W(v,T,S),V=w?"1.5px solid #2a7a40":"1px solid #ddd",Y=w?"":"filter:grayscale(1);opacity:0.45;",J=w?"#1A6B3C":"#bbb",te="#fff";return'<div style="width:'+T+"px;height:"+$+"px;border-radius:6px;border:"+V+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Y+'"><div style="height:'+G+"px;background:"+J+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+P+"px;font-weight:900;color:"+te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(T-4)+'px">'+v+'</span></div><div style="height:'+S+'px;overflow:hidden;flex-shrink:0">'+q+"</div></div>"}function B(v){if(M){const w=b();if(!w.length){v.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const D=w.map(T=>o.find($=>$.player.id===T.id)||{_fake:!0,player:T,id:"fake-"+T.id});H(D,T=>T._fake?Tt(T.player):De(T,""),T=>T._fake?U({player:T.player,id:"x",_fake:!0}):U(T),T=>{T._fake||Lt(T,o,x,t)},"#1A6B3C")}else{const w=R();if(!w.length){v.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const D={},T=[];w.forEach($=>{D[$.player.id]||(D[$.player.id]=!0,T.push($))}),H(T,$=>{const G=x[$.player.id]||1,S=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",q=o.filter(V=>V.player.id===$.player.id&&V.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return De($,S+q)},$=>U($),$=>Lt($,o,x,t),"#1A6B3C")}}function N(v){const w=M?C:[...A];if(!w.length){v.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const D=w.map(T=>({formation:T,card:u.find($=>$.formation===T)||null,owned:A.has(T)}));H(D,({formation:T,card:$,owned:G})=>I(T,G?$:null,G?u.filter(S=>S.formation===T).length:0),({formation:T,owned:$})=>L(T,$),({card:T,owned:$})=>{$&&T&&xi(T,u,t,n)},"#1A6B3C")}function E(v){const w=Object.keys(f),D=M?w.length?w:p:[...h];if(!D.length){v.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const T=D.map($=>({type:$,gc:de[$]||{icon:"⚡",desc:""},def:f[$]||null,owned:h.has($),card:r.find(G=>G.gc_type===$)||null}));H(T,({type:$,gc:G,def:S,owned:P,card:q})=>{const V=P?r.filter(Se=>Se.gc_type===$).length:0,Y=V>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${V}</div>`:"",J=(S==null?void 0:S.gc_type)==="ultra_game_changer",te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#b06ce0",light_blue:"#00d4ef"},ae=te[S==null?void 0:S.color]||te.purple,se=re[S==null?void 0:S.color]||re.purple,me=(S==null?void 0:S.effect)||G.desc||"",ye=S!=null&&S.image_url?`/manager-wars/icons/${S.image_url}`:null;return P&&q?`<div data-gc-id="${q.id}" data-gc-type="${$}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${Y}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${$.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${J?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ye?`<img src="${ye}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${G.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${me.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${$}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${G.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:$,gc:G,def:S,owned:P})=>P?(()=>{const q=Math.round(75.60000000000001),V=Math.round(310*.54),Y=Math.round(V*.65),J=Math.round(V*.18),te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#9b59b6",light_blue:"#00bcd4"},ae=te[S==null?void 0:S.color]||te.purple,se=re[S==null?void 0:S.color]||re.purple,me=S!=null&&S.image_url?`/manager-wars/icons/${S.image_url}`:null;return`<div style="width:${q}px;height:${V}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${J}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${q-6}px">${$}</span></div><div style="height:${Y}px;display:flex;align-items:center;justify-content:center">${me?`<img src="${me}" style="max-width:${q-8}px;max-height:${Y-4}px;object-fit:contain">`:`<span style="font-size:24px">${G.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((S==null?void 0:S.effect)||G.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const q=Math.round(75.60000000000001),V=Math.round(310*.54);return`<div style="width:${q}px;height:${V}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${G.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${$}</span></div>`})(),({type:$,owned:G,def:S})=>{G&&yi($,S,n)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(v=>{v.addEventListener("click",()=>{m=v.dataset.tab,_="Tous",j="",M=!1,e.querySelectorAll(".col-tab-btn").forEach(w=>{const D=w.dataset.tab===m;w.style.borderBottomColor=D?"var(--green)":"transparent",w.style.color=D?"var(--green)":"var(--gray-600)"}),F(),O()})}),F(),O()}function yi(e,t,i){const a=de[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=n[t==null?void 0:t.color]||n.purple,l=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ee=1e3;function xi(e,t,i,a){var p,x,A;const{state:c,toast:n,closeModal:s,navigate:d,refreshProfile:l}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const h=Ce[o]||{},m=it[o]||[],_=290,j=360,M=20;function y(R){const b=h[R];return b?{x:b.x*_,y:b.y*j}:null}let z=`<svg width="${_}" height="${j}" viewBox="0 0 ${_} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[R,b]of m){const F=y(R),O=y(b);!F||!O||(z+=`<line x1="${F.x}" y1="${F.y}" x2="${O.x}" y2="${O.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const R of Object.keys(h)){const b=y(R);if(!b)continue;const F=R.replace(/\d+/,""),O=r[F]||"#555";z+=`<circle cx="${b.x}" cy="${b.y}" r="${M}" fill="${O}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,z+=`<text x="${b.x}" y="${b.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${F}</text>`}return z+="</svg>",z}const g=t.filter(h=>h.formation===o),f=g.length,C=!e.is_for_sale;a(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${C?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const h=g.find(_=>!_.is_for_sale)||g[0];if(!h){n("Aucune carte à vendre","error");return}const{error:m}=await k.from("cards").delete().eq("id",h.id);if(m){n(m.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+Ee}).eq("id",c.profile.id),await l(),n(`+${Ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),d("collection")}),(x=document.getElementById("market-sell-form-btn"))==null||x.addEventListener("click",async()=>{const h=parseInt(document.getElementById("sell-price-form").value);if(!h||h<1){n("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:h}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:h}),n("Carte mise en vente sur le marché !","success"),s(),d("collection")}),(A=document.getElementById("cancel-sell-form-btn"))==null||A.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),s(),d("collection")})}async function Lt(e,t,i,a){var z,R,b,F,O,H;const{state:c,toast:n,openModal:s,closeModal:d,navigate:l,refreshProfile:o}=a,r=e.player,u=t.filter(U=>U.player.id===r.id),g=u.length,f=gi[r.rarity]||1e3,C=r.rarity!=="legende",p=Nt(),x=Te(r,r.job),A=r.job2?Te(r,r.job2):null,h=Ne[r.job]||"#1A6B3C",m=r.job2?Ne[r.job2]:null,_=Rt[r.rarity]||"#ccc",j=at[r.country_code]||r.country_code||"",{data:M}=await k.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),y=M&&M.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${M.map(U=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${U.club_name} <span style="color:var(--gray-600)">(${U.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";s(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${_};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${h}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${h}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${x}</text>
            </svg>
            ${A!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${m}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${A}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${j}</div>
            ${(z=r.clubs)!=null&&z.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((R=r.clubs)==null?void 0:R.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${_}">${r.rarity.toUpperCase()}</div>
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
          <div style="font-weight:700;font-size:18px">×${g}</div>
        </div>
      </div>
    </div>
    ${y}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${f.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${C&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(b=document.getElementById("close-detail"))==null||b.addEventListener("click",d),(F=document.getElementById("direct-sell-btn"))==null||F.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const U=u.find(I=>!I.is_for_sale)||u[0];if(!U){n("Aucune carte à vendre","error");return}const{error:W}=await k.from("cards").delete().eq("id",U.id);if(W){n(W.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+f}).eq("id",c.profile.id),await o(),n(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(O=document.getElementById("market-sell-btn"))==null||O.addEventListener("click",async()=>{const U=parseInt(document.getElementById("sell-price").value);if(!U||U<1){n("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:U}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:U}),n("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(H=document.getElementById("cancel-sell-btn"))==null||H.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),d(),l("collection")})}const ve={},Pe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ue={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ke(e){const t=typeof import.meta<"u"?ve==null?void 0:ve.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Pt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ot(e){var i;const t=(ve==null?void 0:ve.VITE_SUPABASE_URL)||"";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null:null}function hi(e,t=44,i=58){var f;const a=e?Ke(e):null,c=e?Ot(e):null,n=Pt(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",d=ue[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),g=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${n?`<img src="${n}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function We(e,t){const{state:i,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(s=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!s)return;const{data:d,error:l}=await k.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(l){c(l.message,"error");return}c("Deck créé !","success"),Mt(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Mt(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",s.dataset.name);if(!d||d===s.dataset.name)return;const{error:l}=await k.from("decks").update({name:d}).eq("id",s.dataset.rename);if(l){c(l.message,"error");return}c("Deck renommé !","success"),We(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:d}=await k.from("decks").delete().eq("id",s.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),We(e,t)})})}async function Mt(e,t,i){const{state:a,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("*").eq("id",e).single(),{data:s}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),d=(s||[]).filter(f=>f.card_type==="player"&&f.player),l=(s||[]).filter(f=>f.card_type==="formation"),o=l.map(f=>f.formation).filter(Boolean),{data:r}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=n.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const g={deckId:e,name:n.name,formation:u,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:l,availableFormations:o};(r||[]).forEach(f=>{f.is_starter?g.slots[f.position]=f.card_id:g.subs.includes(f.card_id)||g.subs.push(f.card_id)}),_e(t,g,i)}function _e(e,t,i){var l;const{navigate:a}=i;Pe[t.formation];const c=zt(t.formation),n=c.filter(o=>t.slots[o]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Pe),d=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${n}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${s.map(o=>`<option value="${o}" ${o===t.formation?"selected":""}>${o}</option>`).join("")}
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
        ${d.map(o=>{const r=o.player;return`<div style="position:relative;flex-shrink:0">
            ${hi(r,44,58)}
            <button data-remove-sub="${o.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${n<11?"disabled":""}>
        ${n<11?`Placez encore ${11-n} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,vi(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=zt(t.formation),u={};r.forEach(g=>{t.slots[g]&&(u[g]=t.slots[g])}),t.slots=u,_e(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>_i(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),_e(e,t,i)})}),(l=document.getElementById("add-sub-btn"))==null||l.addEventListener("click",()=>{wi(t,e,i)})}function vi(e,t,i,a){const c=e.querySelector("#deck-field");if(!c)return;const n=Ce[t.formation]||{},s=Dt(t.formation)||[],d={};for(const A of i){const h=t.slots[A],m=h?t.playerCards.find(_=>_.id===h):null;d[A]=m?m.player:null}const l=300,o=300,r=48,u=64,g=13,f=16,C=38;function p(A){const h=n[A];return h?{x:h.x*l,y:h.y*o}:null}let x="";for(const[A,h]of s){const m=p(A),_=p(h);if(!m||!_)continue;const j=d[A]?{...d[A],club_id:d[A].club_id,country_code:d[A].country_code,rarity:d[A].rarity}:null,M=d[h]?{...d[h],club_id:d[h].club_id,country_code:d[h].country_code,rarity:d[h].rarity}:null,y=ge(j,M);y==="#ff3333"||y==="#cc2222"?x+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${_.x.toFixed(1)}" y2="${_.y.toFixed(1)}" stroke="${y}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(x+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${_.x.toFixed(1)}" y2="${_.y.toFixed(1)}" stroke="${y}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,x+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${_.x.toFixed(1)}" y2="${_.y.toFixed(1)}" stroke="${y}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const A of i){const h=p(A);if(!h)continue;const m=d[A],_=A.replace(/\d+/,""),j=ue[_]||"#555",M=(h.x-r/2).toFixed(1),y=(h.y-u/2).toFixed(1),z={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[m==null?void 0:m.rarity]||"#aaa";if(m){const R=Ke(m),b=Ot(m),F=Pt(m.country_code),O=Number(_==="GK"?m.note_g:_==="DEF"?m.note_d:_==="MIL"?m.note_m:m.note_a)||0,H=u-g-f;x+=`<defs><clipPath id="dcp-${A}"><rect x="${M}" y="${(h.y-u/2+g).toFixed(1)}" width="${r}" height="${H}"/></clipPath></defs>`,x+=`<rect x="${M}" y="${y}" width="${r}" height="${u}" rx="5" fill="${j}"/>`,R&&(x+=`<image href="${R}" x="${M}" y="${(h.y-u/2+g).toFixed(1)}" width="${r}" height="${H}" clip-path="url(#dcp-${A})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${M}" y="${y}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,x+=`<text x="${h.x.toFixed(1)}" y="${(h.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.surname_encoded||"").slice(0,9)}</text>`;const U=(h.y+u/2-f).toFixed(1);x+=`<rect x="${M}" y="${U}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,F&&(x+=`<image href="${F}" x="${(h.x-21).toFixed(1)}" y="${(h.y+u/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),x+=`<text x="${h.x.toFixed(1)}" y="${(h.y+u/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${O}</text>`,b&&(x+=`<image href="${b}" x="${(h.x+r/2-14).toFixed(1)}" y="${(h.y+u/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),x+=`<rect x="${M}" y="${y}" width="${r}" height="${u}" rx="5" fill="none" stroke="${z}" stroke-width="2"/>`}else x+=`<rect x="${M}" y="${y}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,x+=`<text x="${h.x.toFixed(1)}" y="${h.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,x+=`<text x="${h.x.toFixed(1)}" y="${(h.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${_}</text>`;x+=`<rect x="${M}" y="${y}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${A}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-C} ${-C} ${l+C*2} ${o+C*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${x}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(A=>{A.addEventListener("click",()=>bi(A.dataset.pos,t,e,a))})}function bi(e,t,i,a){var g,f,C;const{openModal:c,closeModal:n}=a,s=e.replace(/\d+/,""),d=t.slots[e],l=d?t.playerCards.find(p=>p.id===d):null;(g=l==null?void 0:l.player)==null||g.id;const o=new Set;Object.entries(t.slots).forEach(([p,x])=>{var h;if(p===e||!x)return;const A=t.playerCards.find(m=>m.id===x);(h=A==null?void 0:A.player)!=null&&h.id&&o.add(A.player.id)}),t.subs.forEach(p=>{var A;const x=t.playerCards.find(h=>h.id===p);(A=x==null?void 0:x.player)!=null&&A.id&&o.add(x.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const x=p.player;return!(x.job===s||x.job2===s)||o.has(x.id)||r.has(x.id)?!1:(r.add(x.id),!0)});u.sort((p,x)=>{const A=s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a;return(s==="GK"?x.player.note_g:s==="DEF"?x.player.note_d:s==="MIL"?x.player.note_m:x.player.note_a)-A}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var _,j;const x=p.player,A=s==="GK"?x.note_g:s==="DEF"?x.note_d:s==="MIL"?x.note_m:x.note_a,h=Ke(x),m={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[x.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[s]}">
            ${h?`<img src="${h}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ue[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${x.firstname} ${x.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${x.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${x.country_code}">
              ${(_=x.clubs)!=null&&_.logo_url?`<img src="${x.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((j=x.clubs)==null?void 0:j.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${x.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ue[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${m};flex-shrink:0">
            ${A}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",n),(C=document.getElementById("remove-player"))==null||C.addEventListener("click",()=>{delete t.slots[e],n(),_e(i,t,a)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,n(),_e(i,t,a)})})}function wi(e,t,i){var l;const{openModal:a,closeModal:c}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(g=>g.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&n.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(g=>g.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&n.add(r.player.id)});const s=new Set,d=e.playerCards.filter(o=>{var r,u,g;return n.has((r=o.player)==null?void 0:r.id)||s.has((u=o.player)==null?void 0:u.id)?!1:(s.add((g=o.player)==null?void 0:g.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(o=>{var f;const r=o.player,u=Ke(r),g=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((f=r.clubs)==null?void 0:f.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ue[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(l=document.getElementById("close-sub-selector"))==null||l.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),c(),_e(t,e,i)})})}async function _i(e,t){const{state:i,toast:a,navigate:c}=t,n=e.formationCards.find(l=>l.formation===e.formation),s=(n==null?void 0:n.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([l,o],r)=>{d.push({deck_id:e.deckId,card_id:o,position:l,is_starter:!0,slot_order:r})}),e.subs.forEach((l,o)=>{d.push({deck_id:e.deckId,card_id:l,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),d.length>0){const{error:l}=await k.from("deck_cards").insert(d);if(l){a(l.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function zt(e){const t=Pe[e]||Pe["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}const $i="modulepreload",ki=function(e){return"/manager-wars/"+e},Ct={},Ei=function(t,i,a){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.allSettled(i.map(l=>{if(l=ki(l),l in Ct)return;Ct[l]=!0;const o=l.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":$i,o||(u.as="script"),u.crossOrigin="",u.href=l,d&&u.setAttribute("nonce",d),document.head.appendChild(u),o)return new Promise((g,f)=>{u.addEventListener("load",g),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return c.then(s=>{for(const d of s||[])d.status==="rejected"&&n(d.reason);return t().catch(n)})};async function Ht(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function Ii(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const Ai=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:Ht,rollDropRate:Ii},Symbol.toStringTag,{value:"Module"})),Ut=()=>Object.keys(Ce),Ti=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Xe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Li(e){var c;const t={};(e.rates||[]).forEach(n=>{t[n.card_type]=(t[n.card_type]||0)+Number(n.percentage||0)});const i=((c=Object.entries(t).sort((n,s)=>s[1]-n[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Mi(e,{state:t,navigate:i,toast:a}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Ht()).map(Li)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}n.length||(n=Ti.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(d=>{const l=d.cost===0||c>=d.cost;return`<div class="booster-card ${l?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
            ${l?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const l=n.find(o=>o.id===d.dataset.booster);if(l){d.style.opacity="0.5",d.style.pointerEvents="none";try{await zi(l,{state:t,toast:a,navigate:i,container:e})}catch(o){a(o.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",l=>{l.stopPropagation();const o=n.find(r=>r.id===d.dataset.boosterId);Ri(o)})})}async function zi(e,{state:t,toast:i,navigate:a,container:c}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Oi()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:n}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((n||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),d=new Set((n||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let l=[];const o=e.type||"player";o==="player"?l=await Bi(t.profile,e.cardCount,e.cost):o==="game_changer"?l=await Fi(t.profile,e.cardCount,e.cost):o==="formation"?l=await Di(t.profile,e.cost):l=await ji(t.profile,e),l.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=s.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=d.has(u.formation))});const{data:r}=await k.from("users").select("*").eq("id",t.profile.id).single();r&&(t.profile=r),qi(l,e,a)}function Ci(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function he(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Si(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>he(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>he(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&he(a)>=6),i.length||(i=e.filter(a=>he(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&he(a)>=1&&he(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ji(e,t){if(t.cost>0){const{error:c}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:i}=await Ei(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Ai);return{rollDropRate:c}},void 0),a=[];for(let c=0;c<(t.cardCount||5);c++){const n=i(t.rates);if(n){if(n.card_type==="player"){let s=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n.rarity&&(s=s.eq("rarity",n.rarity));const{data:d}=await s;let l=d||[];if((n.note_min||n.note_max)&&(l=l.filter(u=>{const g=Math.max(Number(u.note_g)||0,Number(u.note_d)||0,Number(u.note_m)||0,Number(u.note_a)||0);return(!n.note_min||g>=n.note_min)&&(!n.note_max||g<=n.note_max)})),l.length||(n.note_min||n.note_max?(l=d||[],console.warn("[Booster] Aucun joueur avec note",n.note_min,"-",n.note_max,"— fallback rareté uniquement")):l=d||[]),!l.length)continue;const o=l[Math.floor(Math.random()*l.length)],{data:r}=await k.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();r&&(a.push({...r,player:o}),k.rpc("record_transfer",{p_card_id:r.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(n.card_type==="game_changer"){const{data:s}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),d=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],o=d[Math.floor(Math.random()*d.length)].name,{data:r}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:o}).select().single();r&&a.push(r)}else if(n.card_type==="formation"){const s=Ut(),d=s[Math.floor(Math.random()*s.length)],{data:l}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();l!=null&&l[0]&&a.push(l[0])}}}return a}async function Bi(e,t,i){if(i>0){const{error:o}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:a}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(o=>o.job==="GK"),n=a.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&c.length>0,d=[];for(let o=0;o<t;o++){const r=o===0&&s?c:o===0?n:a,u=Ci(),g=Si(r,u);g&&d.push(g)}s&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await k.from("cards").insert(d.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(l||[]).forEach((o,r)=>{k.rpc("record_transfer",{p_card_id:o.id,p_player_id:d[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((o,r)=>({...l[r],player:o}))}async function Fi(e,t,i){const{error:a}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:c}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=c!=null&&c.length?c:Object.keys(Xe).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=n[Math.floor(Math.random()*n.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:d,error:l}=await k.from("cards").insert(s).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(d||[]).map(r=>{const u=c==null?void 0:c.find(g=>g.name===r.gc_type||g.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Di(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const a=Ut(),c=a[Math.floor(Math.random()*a.length)],{data:n,error:s}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),n||[]}function qi(e,t,i){var R;if(!e||e.length===0){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",b.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(b),(R=b.querySelector("#anim-close-err"))==null||R.addEventListener("click",()=>b.remove());return}const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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

    <!-- Canvas pour feu d'artifice -->
    <canvas id="fireworks-canvas" style="position:fixed;inset:0;pointer-events:none;z-index:3001"></canvas>
  `,document.body.appendChild(a);let c=!1;const n=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const l=b=>b.touches&&b.touches[0]?b.touches[0].clientX:b.clientX;function o(b){c||(d=!0,s.style.opacity="1",r(b))}function r(b){if(!d||c)return;const F=n.getBoundingClientRect(),O=l(b)-F.left,H=Math.max(0,Math.min(1,O/F.width));s.style.width=H*F.width+"px",H>=.82&&g()}function u(){c||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{c||(s.style.transition="")},220))}function g(){var F;if(c)return;c=!0,d=!1,s.style.width="100%",s.style.opacity="1",(F=document.getElementById("cut-flash"))==null||F.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const b=document.getElementById("cut-hint");b&&(b.style.opacity="0"),n.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",p(0)},620)}n.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),n.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let f=0;const C=new Set;function p(b){f=b,document.getElementById("reveal-phase").style.display="flex",x(),A(b,0),j()}function x(){const b=document.getElementById("card-dots");b&&(b.innerHTML=e.map((F,O)=>`<div class="card-dot" data-i="${O}" style="width:8px;height:8px;border-radius:50%;background:${O===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),b.querySelectorAll(".card-dot").forEach(F=>F.addEventListener("click",()=>h(parseInt(F.dataset.i)))))}function A(b,F){var B;const O=e[b],H=document.getElementById("card-counter"),U=document.getElementById("card-track");H&&(H.textContent=`Carte ${b+1} / ${e.length}`);const W=O.card_type==="player"&&((B=O.player)==null?void 0:B.rarity)==="legende",I=!C.has(b);C.add(b),U.innerHTML=`
      <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${W?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        <div style="transform:scale(1.3);transform-origin:center">${Gi(O)}</div>
        ${O.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`;const L=document.getElementById("current-card-wrap");F!==0?(L.style.transition="none",L.style.transform=`translateX(${F>0?100:-100}%)`,requestAnimationFrame(()=>{L.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",L.style.transform="translateX(0)"})):I&&L.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),W?y():z(),x()}function h(b){if(b<0||b>=e.length||b===f)return;const F=b>f?1:-1;f=b,A(b,F)}function m(){h(f+1)}function _(){h(f-1)}function j(){const b=document.getElementById("card-viewport");if(!b||b._swipeBound)return;b._swipeBound=!0;let F=0,O=0,H=0,U=!1;const W=E=>E.touches?E.touches[0].clientX:E.clientX,I=E=>E.touches?E.touches[0].clientY:E.clientY,L=E=>{U=!0,F=W(E),O=I(E),H=0},B=E=>{if(!U)return;H=W(E)-F;const v=I(E)-O;if(Math.abs(H)<Math.abs(v))return;const w=document.getElementById("current-card-wrap");w&&(w.style.transition="none",w.style.transform=`translateX(${H*.6}px) rotate(${H*.02}deg)`)},N=()=>{if(!U)return;U=!1;const E=document.getElementById("current-card-wrap"),v=55;H<=-v&&f<e.length-1?m():H>=v&&f>0?_():E&&(E.style.transition="transform .2s ease",E.style.transform="translateX(0)")};b.addEventListener("pointerdown",L),b.addEventListener("pointermove",B),b.addEventListener("pointerup",N),b.addEventListener("pointercancel",N),b.addEventListener("touchstart",L,{passive:!0}),b.addEventListener("touchmove",B,{passive:!0}),b.addEventListener("touchend",N),b.addEventListener("click",E=>{if(Math.abs(H)>8)return;const v=b.getBoundingClientRect();E.clientX-v.left>v.width/2?m():_()})}let M=null;function y(){const b=document.getElementById("fireworks-canvas");if(!b)return;b.width=window.innerWidth,b.height=window.innerHeight;const F=b.getContext("2d"),O=[];function H(){const W=Math.random()*b.width,I=Math.random()*b.height*.6,L=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],B=L[Math.floor(Math.random()*L.length)];for(let N=0;N<60;N++){const E=Math.PI*2/60*N,v=2+Math.random()*5;O.push({x:W,y:I,vx:Math.cos(E)*v,vy:Math.sin(E)*v,alpha:1,color:B,size:2+Math.random()*3})}}H(),M=setInterval(H,600);function U(){if(document.getElementById("fireworks-canvas")){F.clearRect(0,0,b.width,b.height);for(let W=O.length-1;W>=0;W--){const I=O[W];if(I.x+=I.vx,I.y+=I.vy+.08,I.vy*=.98,I.alpha-=.018,I.alpha<=0){O.splice(W,1);continue}F.globalAlpha=I.alpha,F.fillStyle=I.color,F.beginPath(),F.arc(I.x,I.y,I.size,0,Math.PI*2),F.fill()}F.globalAlpha=1,(M!==null||O.length>0)&&requestAnimationFrame(U)}}U()}function z(){M!==null&&(clearInterval(M),M=null);const b=document.getElementById("fireworks-canvas");b&&b.getContext("2d").clearRect(0,0,b.width,b.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{z(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{z(),a.remove(),i("boosters")})}function Gi(e){var t,i;if(e.card_type==="player"&&e.player)return De(e,"");if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=n[a==null?void 0:a.color]||n.purple,l=s[a==null?void 0:a.color]||s.purple,o=(a==null?void 0:a.name)||e.gc_type||"Game Changer",r=(a==null?void 0:a.effect)||((t=Xe[e.gc_type])==null?void 0:t.desc)||"",u=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,g=((i=Xe[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${l}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Ri(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${n[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}Ni()}function Ni(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Pi="simulation",Kt="VOTRE_ZONE_ID";function Oi(){switch(Pi){case"propellerads":return Hi();case"adsense":return Ui();default:return st()}}function st(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),n=document.getElementById("ad-skip");c&&(c.textContent=i),n&&(n.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),n&&(n.disabled=!1,n.style.cssText=n.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),n==null||n.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Hi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(st());window.propeller.push({zone_id:Kt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Ui(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(st());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Kt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const be={},$e={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ke={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function fe(e,t,i,a,c){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",c)}function ne(e){const t=typeof import.meta<"u"?be==null?void 0:be.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Je(e,t){var a,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Oe(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Vt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function He(e,t){const i=$e[t]||$e["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const d=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),l=Oe(d.length);d.forEach((o,r)=>{o._col=l[r]}),a[s]=d}return a}const n=[...e];for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let o=0;o<i[s];o++){let r=n.findIndex(u=>u.job===s);if(r===-1&&(r=n.findIndex(u=>u.job2===s)),r===-1&&(r=0),n[r]){const u={...n[r],_line:s};d.push(u),n.splice(r,1)}}const l=Oe(d.length);d.forEach((o,r)=>{o._col=l[r]}),a[s]=d}return a}function Yt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function le(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Wt(e,t,i){const c=new Set,n=t.filter(r=>{const u=r.gc_type||r.id;return c.has(u)?!1:(c.add(u),!0)});let s=[];function d(r,u){const g=r._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},C={purple:"#9b59b6",light_blue:"#00bcd4"},p=f[g==null?void 0:g.color]||f.purple,x=C[g==null?void 0:g.color]||C.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((g==null?void 0:g.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(g==null?void 0:g.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g!=null&&g.image_url?`<img src="/manager-wars/icons/${g.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((g==null?void 0:g.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var u,g,f;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${n.map(C=>{const p=s.find(x=>x.gc_type===C.gc_type);return d(C,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(C=>{C.addEventListener("click",()=>{const p=C.dataset.id,x=n.find(h=>h.id===p);if(!x)return;const A=s.findIndex(h=>h.gc_type===x.gc_type);A>-1?s.splice(A,1):s.length<3&&s.push(x),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&l(s)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>l([])),(f=e.querySelector("#gc-reset"))==null||f.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}async function Ki(e,t,i){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){fe(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=n.map(r=>r.id),{data:d}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let l=0;function o(){var h,m,_,j,M;const r=n[l],u=(d||[]).filter(y=>y.deck_id===r.id),g=u.filter(y=>{var z;return y.is_starter&&((z=y.card)==null?void 0:z.player)}).map(y=>Je(y.card,y.position)),f=u.find(y=>{var z;return((z=y.card)==null?void 0:z.card_type)==="formation"}),C=r.formation||((h=f==null?void 0:f.card)==null?void 0:h.formation)||"4-4-2",p=g.length>=11?He(g,C):null,x=g.length>=11;Yt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${C} · ${g.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===n.length-1?"0.1":"0.3"});color:${l===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Me(p,C,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((y,z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${z===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const z=e.querySelector(".deck-preview-wrap svg");z&&(z.removeAttribute("width"),z.removeAttribute("height"),z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(m=document.getElementById("prev-deck"))==null||m.addEventListener("click",()=>{l>0&&(l--,o())}),(_=document.getElementById("next-deck"))==null||_.addEventListener("click",()=>{l<n.length-1&&(l++,o())}),(j=document.getElementById("validate-deck"))==null||j.addEventListener("click",()=>{x&&t.navigate("match",{matchMode:i,deckId:r.id})}),(M=document.getElementById("cancel-deck-select"))==null||M.addEventListener("click",()=>{le(e),c("home")});const A=document.getElementById("deck-swipe-zone");if(A){let y=0,z=0;A.addEventListener("touchstart",R=>{y=R.touches[0].clientX,z=R.touches[0].clientY},{passive:!0}),A.addEventListener("touchend",R=>{const b=R.changedTouches[0].clientX-y,F=R.changedTouches[0].clientY-z;Math.abs(b)<40||Math.abs(b)<Math.abs(F)||(b<0&&l<n.length-1?(l++,o()):b>0&&l>0&&(l--,o()))},{passive:!0})}}o()}function Xt(e){const t=(be==null?void 0:be.VITE_SUPABASE_URL)||"";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null:null}function pe(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ne(e),c=Xt(e),n=e._line||e.job||"MIL",s=ke[n]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=e.note!==void 0?Number(e.note)||0:(Number(ie(e,n))||0)+(e.boost||0),o=Jt(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),g=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ze(e==null?void 0:e.country_code)?`<img src="${Ze(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":l}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Ae(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((n,s)=>{if(c+=pe(n,40,52),s<a.length-1){const d=ge(n,a[s+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Ze(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Jt(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Le(e,t,i,a,c=310,n=310){const s=Ce[t]||{},d=Dt(t)||it[t]||[],l={},o=["ATT","MIL","DEF","GK"];for(const h of o)(e[h]||[]).forEach((_,j)=>{l[`${h}${j+1}`]=_});function r(h){const m=s[h];return m?{x:m.x*c,y:m.y*n}:null}let u="";for(const[h,m]of d){const _=r(h),j=r(m);if(!_||!j)continue;const M=l[h],y=l[m],z=ge(M,y);z==="#00ff88"||z==="#FFD700"?(u+=`<line x1="${_.x.toFixed(1)}" y1="${_.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${z}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,u+=`<line x1="${_.x.toFixed(1)}" y1="${_.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${z}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):u+=`<line x1="${_.x.toFixed(1)}" y1="${_.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${z}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,f=64,C=13,p=16,x={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[h,m]of Object.entries(l)){const _=r(h);if(!_||!m)continue;const j=h.replace(/[0-9]/g,""),M=ke[j]||"#555",y=i==="attack"&&["MIL","ATT"].includes(j)&&!m.used||i==="defense"&&["GK","DEF","MIL"].includes(j)&&!m.used,z=a.includes(m.cardId);let R;i==="attack"?R=j==="MIL"?Number(m.note_m)||0:Number(m.note_a)||0:i==="defense"?R=j==="GK"?Number(m.note_g)||0:j==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0:R=Number(j==="GK"?m.note_g:j==="DEF"?m.note_d:j==="MIL"?m.note_m:m.note_a)||0,R=R+(m.boost||0);const b=(_.x-g/2).toFixed(1),F=(_.y-f/2).toFixed(1),O=m.used?.25:1,H=x[m==null?void 0:m.rarity]||x.normal,U=z?"#ff3030":H,W=z?3:(m==null?void 0:m.rarity)==="légende"||(m==null?void 0:m.rarity)==="pépite"?2.5:2,I=f-C-p;u+=`<defs><clipPath id="cp-${h}"><rect x="${b}" y="${(_.y-f/2+C).toFixed(1)}" width="${g}" height="${I}"/></clipPath></defs>`,u+=`<rect x="${b}" y="${F}" width="${g}" height="${f}" rx="5" fill="${M}" opacity="${O}"/>`;const L=ne(m);L&&!m.used&&(u+=`<image href="${L}" x="${b}" y="${(_.y-f/2+C).toFixed(1)}" width="${g}" height="${I}" clip-path="url(#cp-${h})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${b}" y="${F}" width="${g}" height="${C}" rx="4" fill="rgba(255,255,255,0.92)"/>`,u+=`<text x="${_.x.toFixed(1)}" y="${(_.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.name||"").slice(0,9)}</text>`;const B=(_.y+f/2-p).toFixed(1);if(u+=`<rect x="${b}" y="${B}" width="${g}" height="${p}" fill="rgba(255,255,255,0.92)"/>`,m.used)u+=`<text x="${_.x.toFixed(1)}" y="${(_.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const N=Ze(m.country_code);N?u+=`<image href="${N}" x="${(_.x-20).toFixed(1)}" y="${(_.y+f/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:u+=`<text x="${(_.x-13).toFixed(1)}" y="${(_.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Jt(m.country_code)}</text>`,u+=`<text x="${_.x.toFixed(1)}" y="${(_.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${R}</text>`;const E=Xt(m);E?u+=`<image href="${E}" x="${(_.x+g/2-14).toFixed(1)}" y="${(_.y+f/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:m.clubName&&(u+=`<text x="${(_.x+14).toFixed(1)}" y="${(_.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(m.clubName||"").slice(0,3).toUpperCase()}</text>`),m.boost&&(u+=`<rect x="${(_.x+g/2-12).toFixed(1)}" y="${(_.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,u+=`<text x="${(_.x+g/2-5).toFixed(1)}" y="${(_.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${m.boost}</text>`)}u+=`<rect x="${b}" y="${F}" width="${g}" height="${f}" rx="5" fill="${z?"rgba(255,255,255,0.12)":"none"}" stroke="${U}" stroke-width="${W}" opacity="${O}"/>`,y&&(u+=`<rect x="${b}" y="${F}" width="${g}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${z?"selected":""}" data-card-id="${m.cardId}" data-role="${j}" style="cursor:pointer"/>`)}const A=38;return`<svg viewBox="${-A} ${-A} ${c+A*2} ${n+A*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${u}
  </svg>`}function Me(e,t,i,a,c=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Le(e,t,i,a,c,n)}
  </div>`}function Fe(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Zt(e,t,i,a){var j;const{state:c,navigate:n,toast:s}=t;Yt(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Ki(e,t,i);const l=d.deckId;let o,r,u,g;try{const M=await Promise.all([k.from("decks").select("formation,name").eq("id",l).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);o=M[0].data,u=M[0].error,r=M[1].data,g=M[1].error}catch(M){console.error("[Match] Exception chargement deck:",M),fe(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>n("home"));return}if(u||g){console.error("[Match] Erreur Supabase:",u||g),fe(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>n("home"));return}const f=(r||[]).filter(M=>{var y;return M.is_starter&&((y=M.card)==null?void 0:y.player)}).map(M=>Je(M.card,M.position)),C=(r||[]).filter(M=>{var y;return!M.is_starter&&((y=M.card)==null?void 0:y.player)}).map(M=>Je(M.card,M.position));if(f.length<11){fe(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>n("decks"));return}const p=(r||[]).find(M=>{var y;return((y=M.card)==null?void 0:y.card_type)==="formation"}),x=(o==null?void 0:o.formation)||((j=p==null?void 0:p.card)==null?void 0:j.formation)||"4-4-2",{data:A,error:h}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:m}=await k.from("gc_definitions").select("*").eq("is_active",!0),_=(A||[]).map(M=>({...M,_gcDef:(m==null?void 0:m.find(y=>y.name===M.gc_type||y.id===M.gc_definition_id))||null}));a({deckId:l,formation:x,starters:f,subsRaw:C,gcCardsEnriched:_,gcDefs:m||[]})}async function Vi(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",n=c.replace("vs_ai_",""),s=c;await Zt(e,t,c,async({deckId:d,formation:l,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:g})=>{try{const f=He(o,l),C=await Yi(l,n),p=async x=>{try{const{data:A,error:h}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:d,status:"in_progress"}).select().single();if(h){console.error("[MatchIA] Erreur création match:",h),fe(e,"⚠️","Impossible de créer le match ("+h.message+").","Retour",()=>t.navigate("home"));return}const m={gcDefs:g||[],matchId:A==null?void 0:A.id,mode:s,difficulty:n,formation:l,homeTeam:f,aiTeam:C,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Xi(e,m,t)}catch(A){console.error("[MatchIA] Exception launchMatch:",A),fe(e,"⚠️","Erreur au lancement du match : "+A.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}Wt(e,u,p)}catch(f){console.error("[MatchIA] Exception setup:",f),fe(e,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>t.navigate("home"))}})}async function Yi(e,t){var s,d;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Wi(e);const a=$e[e]||$e["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const l of["GK","DEF","MIL","ATT"]){const o=n.filter(C=>C.job===l),r=n.filter(C=>C.job!==l),u=[...o,...r],g=[];for(let C=0;C<a[l];C++){const p=u[C]||n[C];p&&g.push({cardId:"ai-"+p.id+"-"+C,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((s=p.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((d=p.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:l})}const f=Oe(g.length);g.forEach((C,p)=>{C._col=f[p]}),c[l]=g}return c}function Wi(e){const t=$e[e]||$e["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const n of["GK","DEF","MIL","ATT"]){const s=[];for(let l=0;l<t[n];l++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?o:2,note_d:n==="DEF"?o:2,note_m:n==="MIL"?o:2,note_a:n==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:n}),c++}const d=Oe(s.length);s.forEach((l,o)=>{l._col=d[o]}),i[n]=s}return i}function Xi(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Le(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Ji(e,t,i),5e3)}function Ji(e,t,i){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function n(p){return p.reduce((x,A)=>x+ie(A,"MIL"),0)}function s(p){let x=0;for(let A=0;A<p.length-1;A++){const h=ge(p[A],p[A+1]);h==="#00ff88"?x+=2:h==="#FFD700"&&(x+=1)}return x}const d=n(a)+s(a),l=n(c)+s(c),o=d>=l;function r(p,x,A,h){return`<div id="duel-row-${h}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${x}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((m,_)=>{const j=_<p.length-1?ge(m,p[_+1]):null,M=!j||j==="#ff3333"||j==="#cc2222",y=j==="#00ff88"?"+2":j==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${h}" data-idx="${_}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${pe({...m,note:ie(m,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${_<p.length-1?`<div class="duel-link duel-link-${h}" data-idx="${_}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${M?"rgba(255,255,255,0.12)":j};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${M?"none":`0 0 8px ${j}`}">
            ${y?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${j}">${y}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${h}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${n(p)} + ${s(p)} liens = <b style="color:#fff">${n(p)+s(p)}</b>
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
  </div>`;const u=()=>{const p=(x,A)=>e.querySelectorAll(x).forEach((h,m)=>{setTimeout(()=>{h.style.opacity="1",h.style.transform="translateY(0) scale(1)"},A+m*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((x,A)=>{setTimeout(()=>{x.style.opacity="1"},A*70)}),900),setTimeout(()=>{const x=e.querySelector("#vs-label");x&&(x.style.opacity="1",x.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(A=>A.style.opacity="1")},1250),setTimeout(()=>{g("score-home",d,800),g("score-ai",l,800)},1500)};function g(p,x,A){const h=document.getElementById(p);if(!h)return;const m=performance.now(),_=j=>{const M=Math.min(1,(j-m)/A);h.textContent=Math.round(x*(1-Math.pow(1-M,3))),M<1?requestAnimationFrame(_):h.textContent=x};requestAnimationFrame(_)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const f=o?Vt():null;o&&(t.boostCard={value:f}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:ne(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:c.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:ne(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:d,aiTotal:l,text:`Duel milieu : ${t.clubName} ${d} – ${l} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const C=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",oe(e,t,i),t.attacker==="ai"&&setTimeout(()=>Qe(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),x=document.getElementById("score-ai"),A=document.getElementById(o?"duel-row-home":"duel-row-ai"),h=document.getElementById(o?"duel-row-ai":"duel-row-home"),m=o?p:x,_=o?x:p;m&&(m.style.fontSize="80px",m.style.color=o?"#FFD700":"#ff6b6b",m.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),_&&(_.style.opacity="0.25"),setTimeout(()=>{A&&(A.style.transformOrigin="center",A.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",A.style.zIndex="5"),setTimeout(()=>{var M;const j=document.getElementById("duel-shock");if(j){const y=(M=h||A)==null?void 0:M.getBoundingClientRect(),z=e.querySelector(".match-screen").getBoundingClientRect();y&&(j.style.top=y.top-z.top+y.height/2+"px"),j.style.animation="shockwave .5s ease-out forwards"}h&&(h.style.transformOrigin="center",h.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var M;const j=document.getElementById("duel-finale");j&&(j.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${f}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,j.style.transition="opacity .45s ease",j.style.opacity="1",j.style.pointerEvents="auto",(M=document.getElementById("start-match-btn"))==null||M.addEventListener("click",C))},600)},700)},2800)}function Zi(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function oe(e,t,i){var p,x,A,h,m,_,j,M;const a=t.selected.map(y=>y.cardId),c=t.usedSubIds||[],n=t.homeSubs.filter(y=>!c.includes(y.cardId));Object.values(t.homeTeam).flat().filter(y=>y.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",l=t.phase==="attack",o=t.phase==="defense",r=t.phase==="finished",u=t.gcCards.filter(y=>!t.usedGc.includes(y.id)),g=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const z=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Ae((z.players||[]).map(R=>({...R,used:!1})),"#ff6b6b",z.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const z=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Ae((z.players||[]).map(R=>({...R,used:!1})),"#00ff88",z.total)}
          </div>`}const y=t.log[t.log.length-1];return y?'<div style="padding:2px 4px">'+Zi(y)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const y=window.innerWidth>=700,z=(L,B,N)=>{var Y,J;const E=(t.gcDefs||[]).find(te=>te.name===L.gc_type),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",D=(E==null?void 0:E.name)||L.gc_type,T=(E==null?void 0:E.effect)||((Y=de[L.gc_type])==null?void 0:Y.desc)||"",$=E!=null&&E.image_url?`/manager-wars/icons/${E.image_url}`:null,G=((J=de[L.gc_type])==null?void 0:J.icon)||"⚡",S=Math.round(N*.22),P=Math.round(N*.22),q=N-S-P,V=D.length>12?7:9;return`<div class="gc-mini" data-gc-id="${L.id}" data-gc-type="${L.gc_type}"
          style="box-sizing:border-box;width:${B}px;height:${N}px;border-radius:10px;border:2px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${S}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${V}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${B-6}px">${D}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${q}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${$?`<img src="${$}" style="max-width:${B-10}px;max-height:${q-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(q*.55)}px">${G}</span>`}
          </div>
          <div style="height:${P}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${T.slice(0,38)}</span>
          </div>
        </div>`},R=(L,B)=>{var N;return`<div id="boost-card"
          style="box-sizing:border-box;width:${L}px;height:${B}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(B*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(B*.2)}px">⚡</div>
            <div style="font-size:${Math.round(B*.09)}px;color:#000;font-weight:900">+${(N=t.boostCard)==null?void 0:N.value}</div>
          </div>`},b=(L,B)=>B?R(110,150):z(L,110,150),F=(L,B)=>B?R(68,95):z(L,68,95),O=y?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",H=r?`<button id="btn-results" style="${O};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${O};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:l?`<button id="btn-action" style="${O};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:o?`<button id="btn-action" style="${O};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${O};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,U=l||o?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",W=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${y?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(L=>`<div class="sub-btn-col" data-sub-id="${L.cardId}" style="cursor:pointer;flex-shrink:0">${pe(L,44,58)}</div>`).join("")}
      </div>`,I=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Me(t.homeTeam,t.formation,t.phase,a,300,300)}
        </div>
      </div>`;return y?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${W}
          ${I}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${u.map(L=>b(L,!1)).join("")}
              ${g?b(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${H}${U}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${W}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Me(t.homeTeam,t.formation,t.phase,a,300,300)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${u.map(L=>F(L,!1)).join("")}
            ${g?F(null,!0):""}
          </div>
          <div>${H}${U}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(y=>{var z,R,b;if(y.type==="duel"){const F=y.isGoal,O=y.homeScored?"#FFD700":F?"#ff6b6b":"rgba(255,255,255,0.3)",H=y.homeScored?"⚽ BUT !":F?"⚽ BUT IA !":(z=y.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${F?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${O};margin-bottom:4px">
                <div style="font-size:9px;color:${O};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${H}</div>
                ${(R=y.homePlayers)!=null&&R.length?`<div style="margin-bottom:3px">${Ae(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
                ${(b=y.aiPlayers)!=null&&b.length?`<div style="opacity:0.7">${Ae(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
              </div>`}return y.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${y.outPlayer?pe({...y.outPlayer,used:!0,_line:y.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${y.inPlayer?pe({...y.inPlayer,_line:y.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:y.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${y.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${y.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function f(){const y=e.querySelector(".match-screen");if(!y)return;const z=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);y.style.bottom="auto",y.style.height=z+"px",y.style.minHeight=z+"px",y.style.maxHeight=z+"px",y.style.overflow="hidden";const R=e.querySelector("#mobile-action-bar"),b=e.querySelector("#mobile-play-area");R&&b&&(b.style.paddingBottom=R.offsetHeight+"px")}if(f(),setTimeout(f,120),setTimeout(f,400),setTimeout(f,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",f),window.visualViewport.addEventListener("scroll",f)),window.addEventListener("resize",f)),function(){const z=e.querySelector(".terrain-wrapper svg");z&&(z.removeAttribute("width"),z.removeAttribute("height"),z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",z.setAttribute("viewBox","-26 -26 352 352"),z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const y=e.querySelector(".terrain-wrapper svg");y&&(y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let y=!1,z=30;const R=()=>document.getElementById("match-timer"),b=()=>{const F=R();if(!F)return;const O=String(Math.floor(z/60)).padStart(2,"0"),H=String(z%60).padStart(2,"0");F.textContent=` ${O}:${H}`,F.style.color=y?"#ff2222":"#ff9500",F.style.fontWeight="900"};b(),t._timerInt=setInterval(()=>{if(z--,z<0)if(!y)y=!0,z=15,b();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",F.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(F),setTimeout(()=>{F.remove(),we(e,t,i)},2500)}else b()},1e3)}(p=document.getElementById("match-quit"))==null||p.addEventListener("click",()=>{le(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,we(e,t,i))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>so(t,i)),(A=document.getElementById("toggle-history"))==null||A.addEventListener("click",()=>{var y;(y=document.getElementById("match-history-panel"))==null||y.classList.add("open")}),(h=document.getElementById("close-history"))==null||h.addEventListener("click",()=>{var y;(y=document.getElementById("match-history-panel"))==null||y.classList.remove("open")}),(m=document.getElementById("btn-action"))==null||m.addEventListener("click",()=>{t.selected.length!==0&&(l?eo(e,t,i):o&&to(e,t,i))}),(_=document.getElementById("btn-results"))==null||_.addEventListener("click",()=>we(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(y=>{y.addEventListener("click",()=>Qi(y,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(y=>{y.addEventListener("click",()=>no(y.dataset.gcId,y.dataset.gcType,e,t,i))}),(j=document.getElementById("boost-card"))==null||j.addEventListener("click",()=>ao(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(y=>{y.addEventListener("click",()=>St(e,t,i,y.dataset.subId))}),(M=document.getElementById("sub-btn-main"))==null||M.addEventListener("click",()=>St(e,t,i))}function Qi(e,t,i,a){const c=e.dataset.cardId,n=e.dataset.role,s=t.selected.findIndex(d=>d.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[n]||[]).find(l=>l.cardId===c);d&&t.selected.push({...d,_role:n,_line:n})}oe(i,t,a)}function dt(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function eo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),dt(t,i,i.state.profile.id);const a=t.selected.map(n=>({...(t.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId)||n,_line:n._role})),c=ot(a,t.modifiers.home);t.pendingAttack={...c,players:[...a],side:"home"},t.selected.forEach(n=>{const s=(t.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",oe(e,t,i),setTimeout(()=>io(e,t,i),1200)}function to(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),dt(t,i,i.state.profile.id);const a=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d,_line:d._role})),c=nt(a,t.modifiers.home);t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId);l&&(l.used=!0)});const n=rt(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:ne(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d;return{name:l.name,note:(l._line==="GK"?Number(l.note_g)||0:l._line==="MIL"?Number(l.note_m)||0:Number(l.note_d)||0)+(l.boost||0),portrait:ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(n.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,oe(e,t,i),lt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ze(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,i,"home-attack")}function Qe(e,t,i){dt(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Gt(a,"attack",t.difficulty);if(!c.length){ei(e,t,i);return}const n=ot(c,t.modifiers.ai);t.pendingAttack={...n,players:c,side:"ai"},c.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${c.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),l=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!l){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ne(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,oe(e,t,i),lt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ze(e,t,i,"home-attack")});return}t.phase="defense",oe(e,t,i)}function io(e,t,i){const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Gt(a,"defense",t.difficulty),n=c.length>0?nt(c,t.modifiers.ai).total:0;c.forEach(l=>{l.used=!0});const s=rt(t.pendingAttack.total,n,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:c.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,oe(e,t,i),lt(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{ze(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,ze(e,t,i,"ai-attack")}function ze(e,t,i,a){if(t.round++,Qt(t)){we(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){we(e,t,i);return}t.phase="ai-attack",oe(e,t,i),setTimeout(()=>Qe(e,t,i),800);return}t.phase="attack",oe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){ei(e,t,i);return}t.phase="ai-attack",oe(e,t,i),setTimeout(()=>Qe(e,t,i),800)}}function Qt(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!i}function ei(e,t,i){Qt(t)?we(e,t,i):(t.phase="attack",oe(e,t,i))}function oo(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=ne(e),n=ne(t),s=ke[e.job]||"#555",d=ke[t.job]||"#555",l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let r=!1;const u=()=>{r||(r=!0,a.remove(),i())};a.addEventListener("click",u),setTimeout(u,2e3)}function Ie(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function St(e,t,i,a=null){if(t.phase!=="attack"){Ie("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ie(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(u=>u.used),n=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!c.length){Ie("Aucun joueur utilisé à remplacer");return}if(!n.length){Ie("Aucun remplaçant disponible");return}let s=0,d=Math.max(0,n.findIndex(u=>u.cardId===a)),l=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var A,h,m,_,j,M;const u=c[s],g=n[d],f=Math.min(130,Math.round((window.innerWidth-90)/2)),C=Math.round(f*1.35),p=y=>`background:rgba(255,255,255,0.12);border:none;color:${y?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${y?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${g?pe({...g,used:!1,boost:0},f,C):"<div>—</div>"}</div>
        <button id="in-down" style="${p(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${u?pe({...u,used:!1,boost:0},f,C):"<div>—</div>"}</div>
        <button id="out-down" style="${p(s>=c.length-1)}" ${s>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(A=o.querySelector("#sub-close"))==null||A.addEventListener("click",()=>o.remove()),(h=o.querySelector("#out-up"))==null||h.addEventListener("click",()=>{s>0&&(s--,r())}),(m=o.querySelector("#out-down"))==null||m.addEventListener("click",()=>{s<c.length-1&&(s++,r())}),(_=o.querySelector("#in-up"))==null||_.addEventListener("click",()=>{d>0&&(d--,r())}),(j=o.querySelector("#in-down"))==null||j.addEventListener("click",()=>{d<n.length-1&&(d++,r())});const x=(y,z,R,b)=>{const F=o.querySelector("#"+y);if(!F)return;let O=0;F.addEventListener("touchstart",H=>{O=H.touches[0].clientY},{passive:!0}),F.addEventListener("touchend",H=>{const U=H.changedTouches[0].clientY-O;if(Math.abs(U)<30)return;const W=z();U<0&&W<b-1?(R(W+1),r()):U>0&&W>0&&(R(W-1),r())},{passive:!0})};x("in-panel",()=>d,y=>d=y,n.length),x("out-panel",()=>s,y=>s=y,c.length),(M=o.querySelector("#sub-confirm"))==null||M.addEventListener("click",y=>{if(y.preventDefault(),y.stopPropagation(),l)return;l=!0;const z=c[s],R=n[d];if(!z||!R)return;let b=null,F=-1;for(const[H,U]of Object.entries(t.homeTeam)){const W=(U||[]).findIndex(I=>I.cardId===z.cardId);if(W!==-1){b=H,F=W;break}}if(F===-1||!b){Ie("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const O={...R,_line:b,_col:z._col||0,used:!1,boost:0};t.homeTeam[b].splice(F,1,O),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(R.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:z.name,firstname:z.firstname,note:ie(z,b),portrait:ne(z),job:z.job,country_code:z.country_code,rarity:z.rarity,clubName:z.clubName,clubLogo:z.clubLogo},inPlayer:{name:R.name,firstname:R.firstname,note:ie(R,b),portrait:ne(R),job:R.job,country_code:R.country_code,rarity:R.rarity,clubName:R.clubName,clubLogo:R.clubLogo},text:`🔄 ${R.firstname} ${R.name} remplace ${z.firstname} ${z.name}`}),o.remove(),oo(z,R,()=>oe(e,t,i))})}document.body.appendChild(o),r()}function no(e,t,i,a,c){var C,p;const n=(a.gcDefs||[]).find(x=>x.name===t),s=de[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[n==null?void 0:n.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[n==null?void 0:n.color]||"#b06ce0",o=(n==null?void 0:n.name)||t,r=(n==null?void 0:n.effect)||s.desc,u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=s.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${g}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(C=f.querySelector("#gc-back"))==null||C.addEventListener("click",()=>f.remove()),(p=f.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{f.remove(),ro(e,t,i,a,c)})}function ro(e,t,i,a,c){if(a.usedGc.includes(e))return;a.usedGc.push(e);const n=(a.gcDefs||[]).find(d=>d.name===t);let s=!1;if(n!=null&&n.effect_type&&n.effect_type!=="CUSTOM"){const d=GC_ENGINE[n.effect_type];d?d(n.effect_params||{},a,i,c)||(s=!0):(c.toast(`Effet "${n.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(a.homeTeam).flatMap(([l,o])=>(o||[]).filter(r=>r.used).map(r=>({...r,_line:l})));d.length?(d[0].used=!1,a.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(l=>!l.used);if(d.length){const l=d.sort((o,r)=>ie(r,"ATT")-ie(o,"ATT"))[0];l.used=!0,a.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}k.from("cards").delete().eq("id",e).then(()=>{}),s&&oe(i,a,c)}function ao(e,t,i){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ke[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ie(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const n=c.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[s]||[]).find(l=>l.cardId===n);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),oe(e,t,i)})})}function lt(e,t,i,a,c){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");n.innerHTML=`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let d=!1;const l=()=>{d||(d=!0,n.remove(),setTimeout(()=>c(),50))};n.addEventListener("click",l),setTimeout(l,3500)}async function we(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,c=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,s=c?"victoire":n?"nul":"defaite",d=ui(t.mode,s);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(a.profile.credits||0)+d,matches_played:(a.profile.matches_played||0)+1};c?l.wins=(a.profile.wins||0)+1:n?l.draws=(a.profile.draws||0)+1:l.losses=(a.profile.losses||0)+1,await k.from("users").update(l).eq("id",a.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),le(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),le(e),i.navigate("match",{matchMode:t.mode})})}function so(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Le(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function lo(e,t){const{state:i}=t;await Zt(e,t,"random",({deckId:c,formation:n,starters:s,subsRaw:d,gcCardsEnriched:l,gcDefs:o})=>{const r=u=>{co(e,t,c,n,s,d,u,o||[])};if(!l.length){r([]);return}Wt(e,l,r)})}async function co(e,t,i,a,c,n,s=[],d=[]){var h;const{state:l,navigate:o,toast:r}=t;let u=!1,g=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const f=()=>document.getElementById("mm-status"),C=async(m=!0)=>{u=!0,g&&(k.removeChannel(g),g=null),m&&await k.rpc("cancel_matchmaking",{p_user_id:l.profile.id}).catch(()=>{})};(h=document.getElementById("mm-cancel"))==null||h.addEventListener("click",async()=>{try{await C(!0)}catch(m){console.warn("[Matchmaking] cleanup error:",m)}le(e),o("home")});const p=async(m,_,j)=>{u||(u=!0,g&&(k.removeChannel(g),g=null),f()&&(f().textContent="Adversaire trouvé !"),await new Promise(M=>setTimeout(M,600)),e.isConnected!==!1&&po(e,t,m,j,s,d))},{data:x,error:A}=await k.rpc("try_matchmake",{p_user_id:l.profile.id,p_deck_id:i});if(A||!(x!=null&&x.success)){r("Erreur de matchmaking","error"),le(e),o("home");return}if(x.matched){p(x.match_id,x.opponent_id,!1);return}f()&&(f().textContent="En attente d'un autre joueur..."),g=k.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},m=>{const _=m.new;_.status==="matched"&&_.match_id&&p(_.match_id,_.matched_with,!0)}).subscribe()}async function po(e,t,i,a,c=[],n=[]){const{state:s,navigate:d,toast:l}=t,o=a?"p1":"p2",r=a?"p2":"p1",u=(c||[]).map(I=>I.id),g=(c||[]).map(I=>({id:I.id,gc_type:I.gc_type,_gcDef:I._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:f}=await k.from("matches").select("*").eq("id",i).single();if(!f){l("Match introuvable","error"),d("home");return}async function C(){const[{data:I,error:L},{data:B,error:N},{data:E},{data:v}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:f.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:f.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",f.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",f.away_id).single()]);L&&console.error("[PvP] get_deck_for_match p1 error:",L),N&&console.error("[PvP] get_deck_for_match p2 error:",N);function w(q,V){return{cardId:q.card_id,position:V||q.position,id:q.id,firstname:q.firstname,name:q.surname_encoded,country_code:q.country_code,club_id:q.club_id,job:q.job,job2:q.job2,note_g:Number(q.note_g)||0,note_d:Number(q.note_d)||0,note_m:Number(q.note_m)||0,note_a:Number(q.note_a)||0,rarity:q.rarity,skin:q.skin,hair:q.hair,hair_length:q.hair_length,clubName:q.club_encoded_name||null,clubLogo:q.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const D=((I==null?void 0:I.starters)||[]).map(q=>w(q,q.position)),T=((B==null?void 0:B.starters)||[]).map(q=>w(q,q.position)),$=((I==null?void 0:I.subs)||[]).map(q=>w(q,q.position)),G=((B==null?void 0:B.subs)||[]).map(q=>w(q,q.position)),S=(I==null?void 0:I.formation)||"4-4-2",P=(B==null?void 0:B.formation)||"4-4-2";return console.log("[PvP] p1Formation:",S,"p1 starters:",D.length,"positions:",D.map(q=>q.position)),console.log("[PvP] p2Formation:",P,"p2 starters:",T.length,"positions:",T.map(q=>q.position)),{p1Team:He(D,S),p2Team:He(T,P),p1Subs:$,p2Subs:G,p1Formation:S,p2Formation:P,p1Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 1",p2Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?u:[],gc_p2:a?[]:u,gcCardsFull_p1:a?g:[],gcCardsFull_p2:a?[]:g,gcReady_p1:!0,gcReady_p2:!0,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let p=f.game_state&&Object.keys(f.game_state).length?f.game_state:null;if(!p)if(a){p=await C();const{data:I}=await k.from("matches").select("game_state").eq("id",i).single();!(I!=null&&I.game_state)||!Object.keys(I.game_state).length?await k.from("matches").update({game_state:p,turn_user_id:f.home_id}).eq("id",i):p=I.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let I=0;I<30&&!p;I++){await new Promise(B=>setTimeout(B,400));const{data:L}=await k.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(p=L.game_state)}if(!p){l("Erreur de synchronisation","error"),d("home");return}p.gc_p2=u,p.gcCardsFull_p2=g,await k.from("matches").update({game_state:p}).eq("id",i)}let x=!1;function A(I){var D;try{k.removeChannel(h)}catch{}const L=s.profile.id,B=I.winner_id===L,N=!!I.forfeit,E=p[o+"Score"]??0,v=p[r+"Score"]??0,w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",w.innerHTML=`
      <div style="font-size:64px">${B?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${B?"#FFD700":"#ff6b6b"}">${B?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px;color:#fff">${p[o+"Name"]} ${E} – ${v} ${p[r+"Name"]}</div>
      ${N?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${B?"L'adversaire a quitté la partie":"Match perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(w),(D=w.querySelector("#pvp-end-home"))==null||D.addEventListener("click",()=>{w.remove(),le(e),d("home")})}const h=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},I=>{const L=I.new;try{if(L.status==="finished"||L.forfeit){if(x)return;x=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),L.game_state&&(p=L.game_state),A(L);return}L.game_state&&(p=L.game_state,j())}catch(B){console.error("[PvP] Realtime render crash:",B,"gameState:",p)}}).subscribe();async function m(I){Object.assign(p,I),p.lastActionAt=new Date().toISOString();const{error:L}=await k.from("matches").update({game_state:p}).eq("id",i);L&&(console.error("[PvP] pushState DB error:",L.message,L),l("Erreur de synchronisation : "+L.message,"error"));try{j()}catch(B){console.error("[PvP] renderPvpScreen crash après pushState:",B),l("Erreur d'affichage : "+B.message,"error")}}async function _(){if(x)return;x=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null);const I=a?f.away_id:f.home_id;try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:I}).eq("id",i)}catch(L){console.warn("[PvP] forfeit DB error:",L)}try{k.removeChannel(h)}catch{}le(e),d("home")}function j(){var gt,mt,yt,xt,ht;const I=p[o+"Team"];p[r+"Team"];const L=p[o+"Score"],B=p[r+"Score"],N=p[o+"Name"],E=p[r+"Name"];if(p.phase==="gc-select")return M();if(p.phase==="reveal")return y();if(p.phase==="midfield")return z();if(p.phase==="finished")return H();const v=p.phase===o+"-attack",w=p.phase===o+"-defense",D=p.phase===r+"-attack"||p.phase===r+"-defense",T=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],$=T.map(K=>K.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const G=window.innerWidth>=700,S=p[o+"Subs"]||[],P=p["usedSubIds_"+o]||[],q=S.filter(K=>!P.includes(K.cardId)),V=p["gcCardsFull_"+o]||[],Y=p["usedGc_"+o]||[],J=V.filter(K=>!Y.includes(K.id)),te=p.boostOwner===o&&!p.boostUsed,re=(K,Z,ee)=>{var _t,$t;const X=K._gcDef,ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[X==null?void 0:X.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",je={purple:"#b06ce0",light_blue:"#00d4ef"}[X==null?void 0:X.color]||"#b06ce0",xe=(X==null?void 0:X.name)||K.gc_type,ni=(X==null?void 0:X.effect)||((_t=de[K.gc_type])==null?void 0:_t.desc)||"",vt=X!=null&&X.image_url?`/manager-wars/icons/${X.image_url}`:null,ri=(($t=de[K.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(ee*.22),wt=Math.round(ee*.22),Ye=ee-bt-wt,ai=xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
        style="width:${Z}px;height:${ee}px;border-radius:10px;border:2px solid ${je};background:${ce};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ai}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Ye}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${vt?`<img src="${vt}" style="max-width:${Z-10}px;max-height:${Ye-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ye*.55)}px">${ri}</span>`}
        </div>
        <div style="height:${wt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ni.slice(0,38)}</span>
        </div>
      </div>`},ae=(K,Z)=>`<div id="pvp-boost-card" style="width:${K}px;height:${Z}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${G?22:18}px">⚡</div>
      <div style="font-size:${G?11:9}px;color:#000;font-weight:900">+${p.boostValue}</div>
    </div>`,se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${G?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${q.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':q.map(K=>`<div class="pvp-sub-btn" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${pe(K,G?60:44,G?78:58)}</div>`).join("")}
    </div>`,me=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${Me(I,p[o+"Formation"],v?"attack":w?"defense":"idle",$,300,300)}
      </div>
    </div>`,ye=G?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Se=v?`<button id="pvp-action" style="${ye};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${T.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:w?`<button id="pvp-action" style="${ye};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${T.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${ye};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${E}</div>`,ut=v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${T.length}/3 sélectionné(s)</div>`:"",ii=(()=>{const K=p.pendingAttack;if(w&&K&&Array.isArray(K.players))return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${E} ATTAQUE — Défendez !</div>
          ${Ae(K.players.map(ce=>({...ce,used:!1})),"#ff6b6b",K.total)}
        </div>`;const Z=Array.isArray(p.log)?p.log:[],ee=Z[Z.length-1];return ee?`<div style="padding:7px 10px;border-left:3px solid ${ee.type==="goal"?"#FFD700":ee.type==="stop"?"#00ff88":ee.type==="attack"?"#ff6b6b":"rgba(255,255,255,0.6)"};font-size:12px;color:#fff">${ee.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),oi=(Array.isArray(p.log)?p.log:[]).length,ft=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${N} <span style="color:#FFD700;font-size:18px">${L}</span> – <span style="color:#FFD700;font-size:18px">${B}</span> ${E}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${D?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${D?`⏳ Tour de ${E}`:v?"⚔️ À vous d'attaquer !":w?"🛡️ À vous de défendre !":""}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${ii}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${oi})
      </button>`;if(G)e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ft}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          ${me}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${Se}${ut}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${te?ae(110,90):""}
            ${J.map(K=>re(K,110,150)).join("")}
          </div>
        </div>
      </div>`;else{e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ft}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden"></div>
          </div>
        </div>
        <!-- ZONE BAS : cartes GC en ligne + bouton pleine largeur (comme vs IA) -->
        <div style="flex-shrink:0;background:rgba(0,0,0,0.35);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${J.map(Z=>re(Z,68,95)).join("")}
            ${te?ae(68,95):""}
          </div>
          <div>${Se}${ut}</div>
        </div>
      </div>`;const K=e.querySelector(".terrain-wrapper");K&&(K.innerHTML=Me(I,p[o+"Formation"],v?"attack":w?"defense":"idle",$,300,300))}if(e.querySelectorAll(".match-slot-hit").forEach(K=>{K.addEventListener("click",()=>{if(!v&&!w)return;const Z=K.dataset.cardId,ee=K.dataset.role,X=(I[ee]||[]).find(xe=>xe.cardId===Z);if(!X||X.used)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const ce=p["selected_"+o],je=ce.findIndex(xe=>xe.cardId===Z);je>-1?ce.splice(je,1):ce.length<3&&ce.push({...X,_role:ee}),j()})}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>{R()}),e.querySelectorAll(".pvp-gc-mini").forEach(K=>{K.addEventListener("click",()=>{O(K.dataset.gcId,K.dataset.gcType)})}),(mt=e.querySelector("#pvp-action"))==null||mt.addEventListener("click",()=>{v?U():w&&W()}),(yt=e.querySelector("#pvp-quit"))==null||yt.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&_()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>{F()}),(ht=e.querySelector("#pvp-toggle-history"))==null||ht.addEventListener("click",()=>{b()}),function(){const Z=e.querySelector(".terrain-wrapper svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("viewBox","-26 -26 352 352"),Z.setAttribute("preserveAspectRatio","xMidYMid meet"));const ee=e.querySelector(".match-screen");if(ee){const X=e.clientHeight;X>50&&(ee.style.height=X+"px",ee.style.maxHeight=X+"px",ee.style.overflow="hidden")}}(),p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),(v||w)&&!x){let K=30,Z=!1;const ee=()=>document.getElementById("pvp-timer"),X=()=>{ee()&&(ee().textContent=K+"s",ee().style.color=Z?"#ff4444":"#fff")};X(),p._timerInt=setInterval(()=>{K--,K<0?Z?(clearInterval(p._timerInt),p._timerInt=null,_()):(Z=!0,K=15,X()):X()},1e3)}}function M(){var w;const I=p["gcReady_"+o],L=p["gcReady_"+r];Array.isArray(p["gc_"+o])||(p["gc_"+o]=[]);let B=p["gc_"+o];const N=3;function E(D,T){const $=D._gcDef,G={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},S={purple:"#9b59b6",light_blue:"#00bcd4"},P=G[$==null?void 0:$.color]||G.purple,q=S[$==null?void 0:$.color]||S.purple;return`<div class="pvp-gc-card" data-id="${D.id}"
        style="width:100px;border-radius:10px;border:3px solid ${T?"#FFD700":q};background:${P};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${T?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${T?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${(($==null?void 0:$.name)||D.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${($==null?void 0:$.name)||D.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${$!=null&&$.image_url?`<img src="/manager-wars/icons/${$.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${(($==null?void 0:$.effect)||"").slice(0,50)}</span>
        </div>
        ${T?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${N}</b> cartes · ${B.length}/${N}
        </div>
      </div>
      ${I?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${L?"Adversaire aussi.":`En attente de ${p[r+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${B.length?`⚡ Valider (${B.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,I)return;const v=o==="p1"?f.home_id:f.away_id;k.from("cards").select("id,gc_type").eq("owner_id",v).eq("card_type","game_changer").then(async({data:D})=>{const{data:T}=await k.from("gc_definitions").select("*").eq("is_active",!0),$=new Set,G=(D||[]).filter(P=>$.has(P.gc_type)?!1:($.add(P.gc_type),!0)).map(P=>({...P,_gcDef:(T==null?void 0:T.find(q=>q.name===P.gc_type))||null})),S=document.getElementById("pvp-gc-grid");if(S){if(!G.length){S.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}S.innerHTML=G.map(P=>E(P,B.includes(P.id))).join(""),S.querySelectorAll(".pvp-gc-card").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.id,V=B.indexOf(q);V>-1?B.splice(V,1):B.length<N&&B.push(q),j()})})}}),(w=e.querySelector("#pvp-gc-validate"))==null||w.addEventListener("click",async()=>{const D=o==="p1"?f.home_id:f.away_id,{data:T}=await k.from("cards").select("id,gc_type").eq("owner_id",D).eq("card_type","game_changer").in("id",B),{data:$}=await k.from("gc_definitions").select("*").eq("is_active",!0),G=(T||[]).map(S=>({...S,_gcDef:($==null?void 0:$.find(P=>P.name===S.gc_type))||null}));await m({["gcReady_"+o]:!0,["gcCardsFull_"+o]:G}),p["gcReady_"+r]&&await m({phase:"reveal"})})}function y(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Le(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,o==="p1"&&setTimeout(async()=>{await m({phase:"midfield"})},5e3)}function z(){const I=p[o+"Team"].MIL||[],L=p[r+"Team"].MIL||[];function B(T){return T.reduce(($,G)=>$+ie(G,"MIL"),0)}function N(T){let $=0;for(let G=0;G<T.length-1;G++){const S=ge(T[G],T[G+1]);S==="#00ff88"?$+=2:S==="#FFD700"&&($+=1)}return $}const E=B(I)+N(I),v=B(L)+N(L),w=E>=v;function D(T,$,G){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${$}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${T.map((S,P)=>{const q=ne(S),V=P<T.length-1?ge(S,T[P+1]):null,Y=V&&V!=="#ff3333"&&V!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${G};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${q?`<img src="${q}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${ie(S,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${S.name}</div>
            </div>
            ${V?`<div style="width:14px;height:4px;border-radius:2px;background:${V};flex-shrink:0;opacity:${Y?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${B(T)} + ${N(T)} liens = <b style="color:#fff">${B(T)+N(T)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${D(I,p[o+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${E}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${v}</div>
      </div>

      ${D(L,p[r+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const T=document.getElementById("pvp-score-me"),$=document.getElementById("pvp-score-opp"),G=document.getElementById("pvp-midfield-result");T&&$&&(w?(T.style.fontSize="80px",T.style.color="#FFD700",$.style.opacity="0.25"):($.style.fontSize="80px",$.style.color="#ff6b6b",T.style.opacity="0.25"));const S=p.p1Team.MIL||[],P=p.p2Team.MIL||[],q=B(S)+N(S),V=B(P)+N(P),Y=q>=V?"p1":"p2";p[Y+"Name"];let J=p.boostValue;J==null&&(J=Vt(),p.boostValue=J,p.boostOwner=Y,p.boostUsed=!1),G&&(G.style.opacity="1",G.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${w?`${p[o+"Name"]} gagne le milieu de terrain et attaque !`:`${p[r+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${w?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${J}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(o!=="p1")return;const te=Y;await m({phase:te+"-attack",attacker:te,round:1,boostValue:p.boostValue,boostUsed:!1,boostOwner:te})},1800)},600)}function R(){var N;const I=p[o+"Team"],L=Object.entries(I).flatMap(([E,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:E})));if(!L.length)return;const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",B.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(E=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[E._line]||"#555",w=ie(E,E._line)+(E.boost||0);return`<div class="boost-pick-item" data-cid="${E.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${E.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(B),(N=B.querySelector("#boost-picker-close"))==null||N.addEventListener("click",()=>B.remove()),B.querySelectorAll(".boost-pick-item").forEach(E=>{E.addEventListener("click",async()=>{const v=E.dataset.cid,w=L.find($=>$.cardId===v);if(!w)return;const D=p[o+"Team"],T=(D[w._line]||[]).find($=>$.cardId===v);T&&(T.boost=(T.boost||0)+p.boostValue),B.remove(),await m({[o+"Team"]:D,boostUsed:!0})})})}function b(){var B;const I=Array.isArray(p.log)?p.log:[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${I.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...I].reverse().map(N=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${N.type==="goal"?"#FFD700":N.type==="defense"?"#00ff88":"rgba(255,255,255,0.5)"}">
                <div style="font-size:12px;color:#fff">${N.text||""}</div>
              </div>`).join("")}
      </div>`,document.body.appendChild(L),(B=L.querySelector("#pvp-hist-close"))==null||B.addEventListener("click",()=>L.remove())}function F(){var L;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",I.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Le(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(I),(L=I.querySelector("#pvp-view-opp-close"))==null||L.addEventListener("click",()=>I.remove())}function O(I,L){var q,V;const N=(p["gcCardsFull_"+o]||[]).find(Y=>Y.id===I),E=N==null?void 0:N._gcDef,v=de[L]||{icon:"⚡",desc:"Carte spéciale."},w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",D={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",T=(E==null?void 0:E.name)||L,$=(E==null?void 0:E.effect)||v.desc,G=E!=null&&E.image_url?`/manager-wars/icons/${E.image_url}`:null,S=v.icon||"⚡",P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",P.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${D};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${D}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${G?`<img src="${G}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(P),(q=P.querySelector("#pvp-gc-back"))==null||q.addEventListener("click",()=>P.remove()),(V=P.querySelector("#pvp-gc-use"))==null||V.addEventListener("click",async()=>{P.remove();const Y=p["usedGc_"+o]||[];Y.push(I),await m({["usedGc_"+o]:Y})})}function H(){var E;const I=p[o+"Score"],L=p[r+"Score"],B=I>L,N=I===L;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${B?"🏆":N?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${B?"Victoire !":N?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${I} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(E=document.getElementById("pvp-home"))==null||E.addEventListener("click",()=>{k.removeChannel(h),le(e),d("home")})}async function U(){const I=(p["selected_"+o]||[]).map(N=>({...(p[o+"Team"][N._role]||[]).find(v=>v.cardId===N.cardId)||N,_line:N._role}));if(!I.length)return;const L=ot(I,p.modifiers[o]||{});I.forEach(N=>{const E=(p[o+"Team"][N._role]||[]).find(v=>v.cardId===N.cardId);E&&(E.used=!0)});const B=Array.isArray(p.log)?p.log:[];B.push({type:"attack",text:`⚔️ ${p[o+"Name"]} attaque (${L.total})`,players:I,total:L.total,side:o}),await m({pendingAttack:{...L,players:I,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:r+"-defense",log:B})}async function W(){const I=(p["selected_"+o]||[]).map(G=>({...(p[o+"Team"][G._role]||[]).find(P=>P.cardId===G.cardId)||G,_line:G._role})),L=nt(I,p.modifiers[o]||{});I.forEach(G=>{const S=(p[o+"Team"][G._role]||[]).find(P=>P.cardId===G.cardId);S&&(S.used=!0)});const B=rt(p.pendingAttack.total,L.total,p.modifiers[o]||{}),N=p.pendingAttack.side,E=B==="attack",v=p[N+"Score"]+(E?1:0),w=N==="p1"?"p2":"p1",D=(p.round||0)+1,T=D>10,$=Array.isArray(p.log)?p.log:[];$.push({type:"defense",text:`🛡️ ${p[o+"Name"]} défend (${L.total})`,players:I,total:L.total,side:o}),$.push({type:E?"goal":"stop",text:E?`⚽ BUT de ${p[N+"Name"]} ! (${p.pendingAttack.total} vs ${L.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${L.total})`}),await m({[N+"Score"]:v,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:T?"finished":w+"-attack",attacker:w,round:D,log:$}),T&&await k.from("matches").update({status:"finished"}).eq("id",i)}j()}const uo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function fo(e,t){const{state:i,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await ct(e,t)}async function ct(e,t){const{state:i,toast:a}=t,{data:c}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:n}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(c||[]).filter(o=>o.seller_id!==i.profile.id),d=n||[];d.filter(o=>o.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${s.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${d.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function l(o){const r=document.getElementById("mkt-content"),u=o==="buy"?s:d;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const g=o==="mine"?[...u].sort((f,C)=>f.status!==C.status?f.status==="active"?-1:1:new Date(C.listed_at)-new Date(f.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(f=>{var m,_,j,M;const C=(m=f.card)==null?void 0:m.player;if(!C)return"";const p=C.job==="GK"?C.note_g:C.job==="DEF"?C.note_d:C.job==="MIL"?C.note_m:C.note_a,x=uo[C.rarity],A=(i.profile.credits||0)>=f.price,h=f.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${h?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${yo(C.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${C.firstname} ${C.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${C.country_code} · ${((_=C.clubs)==null?void 0:_.encoded_name)||"—"} · ${C.rarity} · ${C.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((j=f.seller)==null?void 0:j.pseudo)||"—"}</div>`:h?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((M=f.buyer)==null?void 0:M.pseudo)||"—"} · ${f.sold_at?new Date(f.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(f.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${A?"":"disabled"} style="margin-top:4px">${A?"Acheter":"Trop cher"}</button>`:h?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>go(f.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>mo(f.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),l(o.dataset.tab)})})}async function go(e,t,i,a){var u;const{state:c,toast:n}=a,s=t.find(g=>g.id===e);if(!s)return;const d=s.price,l=c.profile.credits||0,o=(u=s.card)==null?void 0:u.player;if(l<d){n("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${d.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:g,error:f}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(f)throw new Error(f.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");c.profile.credits=l-d;const C=document.querySelector("[data-credits]")||document.querySelector(".credits-display");C&&(C.textContent=(l-d).toLocaleString("fr")+" cr."),n(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),ct(i,a)}catch(g){n("❌ "+g.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function mo(e,t,i){const{toast:a}=i,{data:c}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),a("Annonce retirée","success"),ct(t,i)}function yo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function xo(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((n,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${n.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${n.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${n.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${n.trophies_top1} 🥈${n.trophies_top2} 🥉${n.trophies_top3}</div>
              <div style="color:var(--gray-600)">${n.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function ho(e,{state:t,navigate:i,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(n||[]).filter(r=>r.status==="finished"),l=(n||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===c.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const g=r.winner_id===c.id,f=r.home_score===r.away_score&&r.status==="finished",C=r.status!=="finished"?"…":f?"N":g?"V":"D",p=r.status!=="finished"||f?"#888":g?"#1A6B3C":"#c0392b";let x=s[r.mode]||r.mode;r.away_id===null&&!x.startsWith("IA")&&(x="IA");const h=r.home_id===c.id?r.away:r.home;let m;r.away_id===null?m=x:h?m=`${h.club_name||h.pseudo} (${h.pseudo})`:m="Adversaire";let _="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(_=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const j=new Date(r.created_at),M=j.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+j.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),y=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${m}${_}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${M}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${y}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${C}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(n||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${l.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${l.map(o).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(o).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const Q={user:null,profile:null,page:"home",params:{}};function qe(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function vo(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function et(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ge(){if(!Q.user)return;const{data:e}=await k.from("users").select("*").eq("id",Q.user.id).single();e&&(Q.profile=e)}const pt="mw_theme";function Ue(){return localStorage.getItem(pt)||"light"}function bo(e){var t;localStorage.setItem(pt,e),tt(e),(t=Q.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",Q.profile.id).then(()=>{})}function tt(e){document.documentElement.setAttribute("data-theme",e)}function Re(e,t={}){Q.page=e,Q.params=t,ti()}async function ti(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(a=>{a.classList.toggle("active",a.dataset.page===Q.page)});const t=document.getElementById("nav-credits");t&&Q.profile&&(t.textContent=`💰 ${(Q.profile.credits||0).toLocaleString("fr")}`);const i={state:Q,navigate:Re,toast:qe,openModal:vo,closeModal:et,refreshProfile:Ge};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Q.page){case"home":await It(e,i);break;case"collection":await mi(e,i);break;case"decks":await We(e,i);break;case"boosters":await Mi(e,i);break;case"match":{(Q.params&&Q.params.matchMode||"vs_ai_easy")==="random"?await lo(e,i):await Vi(e,i);break}case"market":await fo(e,i);break;case"rankings":await xo(e,i);break;case"matches":await ho(e,i);break;default:await It(e,i)}}function wo(){const e=document.getElementById("app"),t=Q.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",c=>{c.preventDefault(),Re(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Re("home")),document.getElementById("nav-credits").addEventListener("click",()=>Re("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Ue()==="dark"?"light":"dark";bo(c),jt(c)}),jt(Ue())}function jt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function _o(){tt(Ue()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&et()}),document.getElementById("modal-close").addEventListener("click",et);const{data:{session:e}}=await k.auth.getSession();if(!e){Ft(),kt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:qe});return}Q.user=e.user,await Ge(),Ft();try{const{data:t}=await k.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(a=>{i[a.formation]=a.links}),si(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!Q.profile){di(document.getElementById("app"),{state:Q,navigate:async()=>{await Ge(),Bt()},toast:qe,refreshProfile:Ge});return}Q.profile.theme&&Q.profile.theme!==Ue()&&(localStorage.setItem(pt,Q.profile.theme),tt(Q.profile.theme)),Bt(),k.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(Q.user=null,Q.profile=null,document.getElementById("app").innerHTML="",kt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:qe}))})}function $o(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ve(){const e=document.getElementById("app");e&&(e.style.height=$o()+"px")}window.addEventListener("resize",Ve);window.addEventListener("orientationchange",()=>setTimeout(Ve,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ve);function Bt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ve(),wo(),ti()}function Ft(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}_o();
