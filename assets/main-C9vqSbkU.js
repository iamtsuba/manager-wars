import{s as $,F as it,b as Ce,c as Gt,l as ge,d as di}from"./formation-links-Bt44rMnM.js";function kt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),s.classList.add("active"),document.getElementById("tab-login").style.display=s.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=s.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const s=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!s||!c){o.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:d}=await $.auth.signInWithPassword({email:s,password:c});if(a.textContent="Se connecter",a.disabled=!1,d){o.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",s=>{s.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const s=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!s||!c||!o){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==o){a.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:l}=await $.auth.signUp({email:s,password:c});if(d.textContent="Créer mon compte",d.disabled=!1,l){a.textContent=l.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=s})}function li(e,{state:t,navigate:i,toast:s,refreshProfile:c}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${o}">
          <span id="logo-initials" style="color:${o}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${o};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${o}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function d(){var y;const n=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),p=((y=document.getElementById("setup-club"))==null?void 0:y.value)||"MW",g=p.trim().split(" ").filter(Boolean),f=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():p.slice(0,2).toUpperCase();n&&(n.style.background=a,n.style.borderColor=o),r&&(r.textContent=f,r.style.color=o)}document.getElementById("color1").addEventListener("input",n=>{o=n.target.value,document.getElementById("swatch1").style.background=o,d()}),document.getElementById("color2").addEventListener("input",n=>{a=n.target.value,document.getElementById("swatch2").style.background=a,d()});function l(n){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",n.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await $.from("users").select("id").eq("pseudo",n).maybeSingle();if(p){r.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",n.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await $.from("users").select("id").eq("club_name",n).maybeSingle();if(p){r.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),g=document.getElementById("step3-finish");p.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:f}=await $.from("users").insert({id:t.user.id,pseudo:n,club_name:r,club_color1:o,club_color2:a,credits:1e4});if(f)throw f;await ci(t.user.id),await c(),s(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){p.textContent=f.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function ci(e){const{data:t}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,s=i.filter(l=>l.job==="GK"),c=i.filter(l=>l.job!=="GK"),o=[];for(let l=0;l<5;l++){let n=[];if(l===0&&s.length>0){const r=s[Math.floor(Math.random()*s.length)];n.push(r);const p=Et([...c]).slice(0,3);n.push(...p)}else n=Et([...i]).slice(0,4);n.forEach(r=>{o.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(l=>{o.push({owner_id:e,card_type:"game_changer",gc_type:l})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),o.length>0&&await $.from("cards").insert(o),await $.from("users").update({first_booster_opened:!0}).eq("id",e)}function Et(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const pi="2026.06.21-2102";async function At(e,{state:t,navigate:i,toast:s}){var o,a;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${pi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",l=>{l.preventDefault(),i(d.dataset.nav)})}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const l=d.dataset.action;if(l==="match-ai"){ui(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}s("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()}))}function ui(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",c=>{c.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{s(),e("match",{matchMode:c.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function te(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const It=["ATT","MIL","DEF","GK"];function Rt(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let c=s+1;c<i;c++){const o=e[s],a=e[c];if(!o||!a)continue;const d=o._col!==void 0&&a._col!==void 0&&o._col===a._col,l=o._col!==void 0&&a._col!==void 0&&Math.abs(o._col-a._col)===1,n=It.indexOf(o._line),r=It.indexOf(a._line),p=Math.abs(n-r)===1;(o._line===a._line&&l||d&&p)&&(o.country_code&&a.country_code&&o.country_code===a.country_code&&t++,o.club_id&&a.club_id&&o.club_id===a.club_id&&t++)}return t}function ot(e,t={}){const i=e.reduce((o,a)=>{const d=a._line||a.job;return o+(Number(d==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),s=Rt(e);let c=i+s;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function nt(e,t={}){const i=e.reduce((o,a)=>{const d=a._line||a.job;let l=0;return d==="GK"?l=Number(a.note_g)||0:d==="MIL"?l=Number(a.note_m)||0:l=Number(a.note_d)||0,o+l+(a.boost||0)},0),s=Rt(e);let c=i+s;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function rt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function qt(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const c=[...s].sort((a,d)=>{const l=t==="attack"?te(a,"ATT"):a._line==="GK"?te(a,"GK"):te(a,"DEF");return(t==="attack"?te(d,"ATT"):d._line==="GK"?te(d,"GK"):te(d,"DEF"))-l});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(o,c.length,3))}function fi(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Nt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},qe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Be=["GK","DEF","MIL","ATT"],gi=["Tous","GK","DEF","MIL","ATT"],xi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},at={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Pt(e){return null}function Te(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ye(e,t=""){var p,g;const i=e.player;if(!i)return"";const s=i.job||"ATT",c=qe[s],o=Nt[i.rarity]||"#ccc",a=Te(i,s),d=i.job2?Te(i,i.job2):null,l=i.job2?qe[i.job2]:null,n=Pt(),r=at[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${o};cursor:pointer;flex-shrink:0;position:relative
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
            fill="white" font-family="Arial Black,Arial">${a}</text>
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
        ${n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=i.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Tt(e){const t=e.job||"ATT",i=Te(e,t),s=at[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${s}</div>
      </div>
    </div>
  </div>`}async function mi(e,t){const{state:i,navigate:s,toast:c,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(d||[]).filter(_=>_.card_type==="player"&&_.player),r=(d||[]).filter(_=>_.card_type==="game_changer"),p=(d||[]).filter(_=>_.card_type==="formation"),{data:g}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(g||[]).forEach(_=>{f[_.name]=_});const y=Object.keys(it),u=Object.keys(de),h={};n.forEach(_=>{const b=_.player.id;h[b]=(h[b]||0)+1}),new Set(Object.keys(h).map(_=>String(_)));const L=new Set(p.map(_=>_.formation)),v=new Set(r.map(_=>_.gc_type));let x="player",k="Tous",B="",m=!1;function A(){return[...n].sort((_,b)=>{const C=Be.indexOf(_.player.job),E=Be.indexOf(b.player.job);return C!==E?C-E:(_.player.surname_encoded||"").localeCompare(b.player.surname_encoded||"")})}function M(){return[...l||[]].sort((_,b)=>{const C=Be.indexOf(_.job),E=Be.indexOf(b.job);return C!==E?C-E:(_.surname_encoded||"").localeCompare(b.surname_encoded||"")})}function N(){return A().filter(_=>{const b=_.player,C=k==="Tous"||b.job===k,E=!B||`${b.firstname} ${b.surname_encoded}`.toLowerCase().includes(B);return C&&E})}function R(){return M().filter(_=>{const b=k==="Tous"||_.job===k,C=!B||`${_.firstname} ${_.surname_encoded}`.toLowerCase().includes(B);return b&&C})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="player"?"var(--green)":"transparent"};
        color:${x==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="formation"?"var(--green)":"transparent"};
        color:${x==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="gc"?"var(--green)":"transparent"};
        color:${x==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function P(){const _=document.getElementById("col-filters");_&&(x==="player"?(_.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${B}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${gi.map(b=>`
            <button class="filter-btn" data-job="${b}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${b===k?"var(--green)":"var(--gray-200)"};
                background:${b===k?"var(--green)":"#fff"};
                color:${b===k?"#fff":"var(--gray-600)"}">
              ${b}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${m?"var(--yellow)":"var(--gray-200)"};
              background:${m?"var(--yellow)":"#fff"};
              color:${m?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${m?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",b=>{B=b.target.value.toLowerCase(),V()}),e.querySelectorAll(".filter-btn").forEach(b=>{b.addEventListener("click",()=>{k=b.dataset.job,P(),V()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{m=!m,P(),V()})):(_.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${m?"var(--yellow)":"var(--gray-200)"};
              background:${m?"var(--yellow)":"#fff"};
              color:${m?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${m?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{m=!m,P(),V()})))}function V(){const _=document.getElementById("col-grid");_&&(x==="player"?F(_):x==="formation"?G(_):D(_))}function Z(_,b,C,E,w){w=w||"#7a28b8";const S=document.getElementById("col-grid"),T=document.getElementById("col-big");if(!S||!T)return;var q=0;function j(){T.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+b(_[q])+"</div>";var H=T.querySelector("[data-card-id],[data-form-id],[data-gc-id]");H&&H.addEventListener("click",function(){E(_[q])}),requestAnimationFrame(function(){var U=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!U||!T)){var W=T.clientHeight-8,ie=T.clientWidth-24,re=U.offsetHeight,ae=U.offsetWidth;if(re>0&&ae>0&&W>40){var se=Math.min(W/re,ie/ae,1);U.style.transform="scale("+se.toFixed(3)+")",U.style.transformOrigin="top center"}}}),S.innerHTML=_.map(function(U,W){return'<div class="col-mini-item" data-idx="'+W+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(W===q?w:"transparent")+';transition:border-color .15s;overflow:hidden">'+C(U,W===q)+"</div>"}).join(""),S.querySelectorAll(".col-mini-item").forEach(function(U){U.addEventListener("click",function(){q=Number(U.dataset.idx),j(),U.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}j()}function K(_){var b=.54,C=Math.round(140*b),E=Math.round(310*b),w;if(!_||_._fake){var S=_?_.player:null;if(!S)return"";w=Tt(S)}else w=Ye(_,"");return'<div style="width:'+C+"px;height:"+E+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+b+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+w+"</div></div>"}function ee(_,b,C){b=b||100,C=C||140;var E=Ce[_]||{},w={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},S=Math.max(3,Math.round(b*.06)),T=Object.entries(E).map(function(j){var H=j[0],U=j[1],W=H.replace(/\d+$/,""),ie=w[W]||"#888",re=Math.round(U.x*b),ae=Math.round(U.y*C);return'<circle cx="'+re+'" cy="'+ae+'" r="'+S+'" fill="'+ie+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),q=Math.max(1,Math.round(b/50));return'<svg viewBox="0 0 '+b+" "+C+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+b+'" height="'+C+'" fill="#1A6B3C"/><rect x="'+Math.round(b*.2)+'" y="'+Math.round(C*.02)+'" width="'+Math.round(b*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+q+'"/><line x1="0" y1="'+Math.round(C*.5)+'" x2="'+b+'" y2="'+Math.round(C*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+q+'"/><ellipse cx="'+Math.round(b*.5)+'" cy="'+Math.round(C*.5)+'" rx="'+Math.round(b*.18)+'" ry="'+Math.round(C*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+q+'"/><rect x="'+Math.round(b*.2)+'" y="'+Math.round(C*.82)+'" width="'+Math.round(b*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+q+'"/>'+T+"</svg>"}function I(_,b,C){var E=C>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+C+"</div>":"",w=b?'data-form-id="'+b.id+'"':"",S=_.length>7?14:_.length>5?16:19,T=!!b;return"<div "+w+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(T?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(T?"":"filter:grayscale(1);opacity:0.5")+'">'+E+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(T?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+S+"px;font-weight:900;color:"+(T?"#1A6B3C":"#aaa")+';line-height:1">'+_+'</div></div><div style="flex:1;overflow:hidden;background:'+(T?"#1A6B3C":"#ccc")+'">'+ee(_,140,220)+"</div></div>"}function z(_,b){var C=.54,E=Math.round(140*C),w=Math.round(305*C),S=Math.round(w*.22),T=w-S,q=_.length>7?5:7,j=ee(_,E,T),H=b?"1.5px solid #2a7a40":"1px solid #ddd",U=b?"":"filter:grayscale(1);opacity:0.45;",W=b?"#1A6B3C":"#bbb",ie="#fff";return'<div style="width:'+E+"px;height:"+w+"px;border-radius:6px;border:"+H+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+U+'"><div style="height:'+S+"px;background:"+W+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+q+"px;font-weight:900;color:"+ie+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(E-4)+'px">'+_+'</span></div><div style="height:'+T+'px;overflow:hidden;flex-shrink:0">'+j+"</div></div>"}function F(_){if(m){const b=R();if(!b.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const C=b.map(E=>n.find(w=>w.player.id===E.id)||{_fake:!0,player:E,id:"fake-"+E.id});Z(C,E=>E._fake?Tt(E.player):Ye(E,""),E=>E._fake?K({player:E.player,id:"x",_fake:!0}):K(E),E=>{E._fake||Lt(E,n,h,t)},"#1A6B3C")}else{const b=N();if(!b.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const C={},E=[];b.forEach(w=>{C[w.player.id]||(C[w.player.id]=!0,E.push(w))}),Z(E,w=>{const S=h[w.player.id]||1,T=S>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${S}</div>`:"",j=n.filter(H=>H.player.id===w.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ye(w,T+j)},w=>K(w),w=>Lt(w,n,h,t),"#1A6B3C")}}function G(_){const b=m?y:[...L];if(!b.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const C=b.map(E=>({formation:E,card:p.find(w=>w.formation===E)||null,owned:L.has(E)}));Z(C,({formation:E,card:w,owned:S})=>I(E,S?w:null,S?p.filter(T=>T.formation===E).length:0),({formation:E,owned:w})=>z(E,w),({card:E,owned:w})=>{w&&E&&hi(E,p,t,o)},"#1A6B3C")}function D(_){const b=Object.keys(f),C=m?b.length?b:u:[...v];if(!C.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const E=C.map(w=>({type:w,gc:de[w]||{icon:"⚡",desc:""},def:f[w]||null,owned:v.has(w),card:r.find(S=>S.gc_type===w)||null}));Z(E,({type:w,gc:S,def:T,owned:q,card:j})=>{const H=q?r.filter(Se=>Se.gc_type===w).length:0,U=H>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${H}</div>`:"",W=(T==null?void 0:T.gc_type)==="ultra_game_changer",ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#b06ce0",light_blue:"#00d4ef"},ae=ie[T==null?void 0:T.color]||ie.purple,se=re[T==null?void 0:T.color]||re.purple,xe=(T==null?void 0:T.effect)||S.desc||"",me=T!=null&&T.image_url?`/manager-wars/icons/${T.image_url}`:null;return q&&j?`<div data-gc-id="${j.id}" data-gc-type="${w}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${U}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${w.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${W?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${me?`<img src="${me}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${S.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${xe.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${w}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${S.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:w,gc:S,def:T,owned:q})=>q?(()=>{const j=Math.round(75.60000000000001),H=Math.round(310*.54),U=Math.round(H*.65),W=Math.round(H*.18),ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#9b59b6",light_blue:"#00bcd4"},ae=ie[T==null?void 0:T.color]||ie.purple,se=re[T==null?void 0:T.color]||re.purple,xe=T!=null&&T.image_url?`/manager-wars/icons/${T.image_url}`:null;return`<div style="width:${j}px;height:${H}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${W}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${j-6}px">${w}</span></div><div style="height:${U}px;display:flex;align-items:center;justify-content:center">${xe?`<img src="${xe}" style="max-width:${j-8}px;max-height:${U-4}px;object-fit:contain">`:`<span style="font-size:24px">${S.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((T==null?void 0:T.effect)||S.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const j=Math.round(75.60000000000001),H=Math.round(310*.54);return`<div style="width:${j}px;height:${H}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${S.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${w}</span></div>`})(),({type:w,owned:S,def:T})=>{S&&yi(w,T,o)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(_=>{_.addEventListener("click",()=>{x=_.dataset.tab,k="Tous",B="",m=!1,e.querySelectorAll(".col-tab-btn").forEach(b=>{const C=b.dataset.tab===x;b.style.borderBottomColor=C?"var(--green)":"transparent",b.style.color=C?"var(--green)":"var(--gray-600)"}),P(),V()})}),P(),V()}function yi(e,t,i){const s=de[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},d=o[t==null?void 0:t.color]||o.purple,l=a[t==null?void 0:t.color]||a.purple,n=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||s.desc,p=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${n}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${s.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ee=1e3;function hi(e,t,i,s){var u,h,L;const{state:c,toast:o,closeModal:a,navigate:d,refreshProfile:l}=i,n=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const v=Ce[n]||{},x=it[n]||[],k=290,B=360,m=20;function A(N){const R=v[N];return R?{x:R.x*k,y:R.y*B}:null}let M=`<svg width="${k}" height="${B}" viewBox="0 0 ${k} ${B}" xmlns="http://www.w3.org/2000/svg">`;for(const[N,R]of x){const P=A(N),V=A(R);!P||!V||(M+=`<line x1="${P.x}" y1="${P.y}" x2="${V.x}" y2="${V.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const N of Object.keys(v)){const R=A(N);if(!R)continue;const P=N.replace(/\d+/,""),V=r[P]||"#555";M+=`<circle cx="${R.x}" cy="${R.y}" r="${m}" fill="${V}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${R.x}" y="${R.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${P}</text>`}return M+="</svg>",M}const g=t.filter(v=>v.formation===n),f=g.length,y=!e.is_for_sale;s(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${p()}
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
    ${y?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(u=document.getElementById("direct-sell-form-btn"))==null||u.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=g.find(k=>!k.is_for_sale)||g[0];if(!v){o("Aucune carte à vendre","error");return}const{error:x}=await $.from("cards").delete().eq("id",v.id);if(x){o(x.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+Ee}).eq("id",c.profile.id),await l(),o(`+${Ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){o("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:v}),o("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(L=document.getElementById("cancel-sell-form-btn"))==null||L.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),d("collection")})}async function Lt(e,t,i,s){var M,N,R,P,V,Z;const{state:c,toast:o,openModal:a,closeModal:d,navigate:l,refreshProfile:n}=s,r=e.player,p=t.filter(K=>K.player.id===r.id),g=p.length,f=xi[r.rarity]||1e3,y=r.rarity!=="legende",u=Pt(),h=Te(r,r.job),L=r.job2?Te(r,r.job2):null,v=qe[r.job]||"#1A6B3C",x=r.job2?qe[r.job2]:null,k=Nt[r.rarity]||"#ccc",B=at[r.country_code]||r.country_code||"",{data:m}=await $.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),A=m&&m.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${m.map(K=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${K.club_name} <span style="color:var(--gray-600)">(${K.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${k};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${v}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${v}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${L!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${x}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${L}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${B}</div>
            ${(M=r.clubs)!=null&&M.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((N=r.clubs)==null?void 0:N.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${k}">${r.rarity.toUpperCase()}</div>
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
    ${A}

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
    ${y&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(R=document.getElementById("close-detail"))==null||R.addEventListener("click",d),(P=document.getElementById("direct-sell-btn"))==null||P.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const K=p.find(I=>!I.is_for_sale)||p[0];if(!K){o("Aucune carte à vendre","error");return}const{error:ee}=await $.from("cards").delete().eq("id",K.id);if(ee){o(ee.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+f}).eq("id",c.profile.id),await n(),o(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(V=document.getElementById("market-sell-btn"))==null||V.addEventListener("click",async()=>{const K=parseInt(document.getElementById("sell-price").value);if(!K||K<1){o("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:K}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:K}),o("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(Z=document.getElementById("cancel-sell-btn"))==null||Z.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),d(),l("collection")})}const ve={},Ne={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},pe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ue(e){const t=typeof import.meta<"u"?ve==null?void 0:ve.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ot(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ht(e){var i;const t=(ve==null?void 0:ve.VITE_SUPABASE_URL)||"";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null:null}function vi(e,t=44,i=58){var f;const s=e?Ue(e):null,c=e?Ht(e):null,o=Ot(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",d=pe[a]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),p=Math.round(i*.25),g=i-r-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function We(e,t){const{state:i,navigate:s,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:d,error:l}=await $.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){c(l.message,"error");return}c("Deck créé !","success"),Mt(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Mt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",a.dataset.name);if(!d||d===a.dataset.name)return;const{error:l}=await $.from("decks").update({name:d}).eq("id",a.dataset.rename);if(l){c(l.message,"error");return}c("Deck renommé !","success"),We(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:d}=await $.from("decks").delete().eq("id",a.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),We(e,t)})})}async function Mt(e,t,i){const{state:s,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("decks").select("*").eq("id",e).single(),{data:a}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),d=(a||[]).filter(f=>f.card_type==="player"&&f.player),l=(a||[]).filter(f=>f.card_type==="formation"),n=l.map(f=>f.formation).filter(Boolean),{data:r}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";n.length>0&&!n.includes(p)&&(p=n[0]);const g={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:l,availableFormations:n};(r||[]).forEach(f=>{f.is_starter?g.slots[f.position]=f.card_id:g.subs.includes(f.card_id)||g.subs.push(f.card_id)}),_e(t,g,i)}function _e(e,t,i){var l;const{navigate:s}=i;Ne[t.formation];const c=zt(t.formation),o=c.filter(n=>t.slots[n]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Ne),d=t.subs.map(n=>t.playerCards.find(r=>r.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${o}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${a.map(n=>`<option value="${n}" ${n===t.formation?"selected":""}>${n}</option>`).join("")}
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
        ${d.map(n=>{const r=n.player;return`<div style="position:relative;flex-shrink:0">
            ${vi(r,44,58)}
            <button data-remove-sub="${n.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${o<11?"disabled":""}>
        ${o<11?`Placez encore ${11-o} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,bi(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const r=zt(t.formation),p={};r.forEach(g=>{t.slots[g]&&(p[g]=t.slots[g])}),t.slots=p,_e(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>$i(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==n.dataset.removeSub),_e(e,t,i)})}),(l=document.getElementById("add-sub-btn"))==null||l.addEventListener("click",()=>{_i(t,e,i)})}function bi(e,t,i,s){const c=e.querySelector("#deck-field");if(!c)return;const o=Ce[t.formation]||{},a=Gt(t.formation)||[],d={};for(const L of i){const v=t.slots[L],x=v?t.playerCards.find(k=>k.id===v):null;d[L]=x?x.player:null}const l=300,n=300,r=48,p=64,g=13,f=16,y=38;function u(L){const v=o[L];return v?{x:v.x*l,y:v.y*n}:null}let h="";for(const[L,v]of a){const x=u(L),k=u(v);if(!x||!k)continue;const B=d[L]?{...d[L],club_id:d[L].club_id,country_code:d[L].country_code,rarity:d[L].rarity}:null,m=d[v]?{...d[v],club_id:d[v].club_id,country_code:d[v].country_code,rarity:d[v].rarity}:null,A=ge(B,m);A==="#ff3333"||A==="#cc2222"?h+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${A}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${A}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${A}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const L of i){const v=u(L);if(!v)continue;const x=d[L],k=L.replace(/\d+/,""),B=pe[k]||"#555",m=(v.x-r/2).toFixed(1),A=(v.y-p/2).toFixed(1),M={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[x==null?void 0:x.rarity]||"#aaa";if(x){const N=Ue(x),R=Ht(x),P=Ot(x.country_code),V=Number(k==="GK"?x.note_g:k==="DEF"?x.note_d:k==="MIL"?x.note_m:x.note_a)||0,Z=p-g-f;h+=`<defs><clipPath id="dcp-${L}"><rect x="${m}" y="${(v.y-p/2+g).toFixed(1)}" width="${r}" height="${Z}"/></clipPath></defs>`,h+=`<rect x="${m}" y="${A}" width="${r}" height="${p}" rx="5" fill="${B}"/>`,N&&(h+=`<image href="${N}" x="${m}" y="${(v.y-p/2+g).toFixed(1)}" width="${r}" height="${Z}" clip-path="url(#dcp-${L})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${m}" y="${A}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${v.x.toFixed(1)}" y="${(v.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.surname_encoded||"").slice(0,9)}</text>`;const K=(v.y+p/2-f).toFixed(1);h+=`<rect x="${m}" y="${K}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,P&&(h+=`<image href="${P}" x="${(v.x-21).toFixed(1)}" y="${(v.y+p/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${v.x.toFixed(1)}" y="${(v.y+p/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${V}</text>`,R&&(h+=`<image href="${R}" x="${(v.x+r/2-14).toFixed(1)}" y="${(v.y+p/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${m}" y="${A}" width="${r}" height="${p}" rx="5" fill="none" stroke="${M}" stroke-width="2"/>`}else h+=`<rect x="${m}" y="${A}" width="${r}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${v.x.toFixed(1)}" y="${v.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${v.x.toFixed(1)}" y="${(v.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${k}</text>`;h+=`<rect x="${m}" y="${A}" width="${r}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${L}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-y} ${-y} ${l+y*2} ${n+y*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(L=>{L.addEventListener("click",()=>wi(L.dataset.pos,t,e,s))})}function wi(e,t,i,s){var g,f,y;const{openModal:c,closeModal:o}=s,a=e.replace(/\d+/,""),d=t.slots[e],l=d?t.playerCards.find(u=>u.id===d):null;(g=l==null?void 0:l.player)==null||g.id;const n=new Set;Object.entries(t.slots).forEach(([u,h])=>{var v;if(u===e||!h)return;const L=t.playerCards.find(x=>x.id===h);(v=L==null?void 0:L.player)!=null&&v.id&&n.add(L.player.id)}),t.subs.forEach(u=>{var L;const h=t.playerCards.find(v=>v.id===u);(L=h==null?void 0:h.player)!=null&&L.id&&n.add(h.player.id)});const r=new Set,p=t.playerCards.filter(u=>{const h=u.player;return!(h.job===a||h.job2===a)||n.has(h.id)||r.has(h.id)?!1:(r.add(h.id),!0)});p.sort((u,h)=>{const L=a==="GK"?u.player.note_g:a==="DEF"?u.player.note_d:a==="MIL"?u.player.note_m:u.player.note_a;return(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)-L}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(u=>{var k,B;const h=u.player,L=a==="GK"?h.note_g:a==="DEF"?h.note_d:a==="MIL"?h.note_m:h.note_a,v=Ue(h),x={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${u.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${pe[a]}">
            ${v?`<img src="${v}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${pe[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(k=h.clubs)!=null&&k.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=h.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${pe[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${x};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",o),(y=document.getElementById("remove-player"))==null||y.addEventListener("click",()=>{delete t.slots[e],o(),_e(i,t,s)}),document.querySelectorAll(".player-option").forEach(u=>{u.addEventListener("click",()=>{t.slots[e]=u.dataset.cardId,o(),_e(i,t,s)})})}function _i(e,t,i){var l;const{openModal:s,closeModal:c}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var p;const r=e.playerCards.find(g=>g.id===n);(p=r==null?void 0:r.player)!=null&&p.id&&o.add(r.player.id)}),e.subs.forEach(n=>{var p;const r=e.playerCards.find(g=>g.id===n);(p=r==null?void 0:r.player)!=null&&p.id&&o.add(r.player.id)});const a=new Set,d=e.playerCards.filter(n=>{var r,p,g;return o.has((r=n.player)==null?void 0:r.id)||a.has((p=n.player)==null?void 0:p.id)?!1:(a.add((g=n.player)==null?void 0:g.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(n=>{var f;const r=n.player,p=Ue(r),g=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${pe[r.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((f=r.clubs)==null?void 0:f.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${pe[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(l=document.getElementById("close-sub-selector"))==null||l.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),c(),_e(t,e,i)})})}async function $i(e,t){const{state:i,toast:s,navigate:c}=t,o=e.formationCards.find(l=>l.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([l,n],r)=>{d.push({deck_id:e.deckId,card_id:n,position:l,is_starter:!0,slot_order:r})}),e.subs.forEach((l,n)=>{d.push({deck_id:e.deckId,card_id:l,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),d.length>0){const{error:l}=await $.from("deck_cards").insert(d);if(l){s(l.message,"error");return}}s("Deck enregistré ✅","success"),c("decks")}function zt(e){const t=Ne[e]||Ne["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}const ki="modulepreload",Ei=function(e){return"/manager-wars/"+e},Ct={},Ai=function(t,i,s){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=Promise.allSettled(i.map(l=>{if(l=Ei(l),l in Ct)return;Ct[l]=!0;const n=l.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":ki,n||(p.as="script"),p.crossOrigin="",p.href=l,d&&p.setAttribute("nonce",d),document.head.appendChild(p),n)return new Promise((g,f)=>{p.addEventListener("load",g),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return c.then(a=>{for(const d of a||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};async function Ut(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function Ii(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,c)=>s+Number(c.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const Ti=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:Ut,rollDropRate:Ii},Symbol.toStringTag,{value:"Module"})),Kt=()=>Object.keys(Ce),Li=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Mi(e){return null}const zi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ci={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function Si(e){var c;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((c=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:c[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function ji(e,{state:t,navigate:i,toast:s}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Ut()).map(Si)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}o.length||(o=Li.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(d=>{const l=d.cost===0||c>=d.cost;return`<div class="booster-card ${l?"":"disabled"}" data-booster="${d.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const l=o.find(n=>n.id===d.dataset.booster);if(l){d.style.opacity="0.5",d.style.pointerEvents="none";try{await Bi(l,{state:t,toast:s,navigate:i,container:e})}catch(n){s(n.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",l=>{l.stopPropagation();const n=o.find(r=>r.id===d.dataset.boosterId);Oi(n)})})}async function Bi(e,{state:t,toast:i,navigate:s,container:c}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Ki()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),d=new Set((o||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let l=[];const n=e.type||"player";n==="player"?l=await Ri(t.profile,e.cardCount,e.cost):n==="game_changer"?l=await qi(t.profile,e.cardCount,e.cost):n==="formation"?l=await Ni(t.profile,e.cost):l=await Gi(t.profile,e),l.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=a.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=d.has(p.formation))});const{data:r}=await $.from("users").select("*").eq("id",t.profile.id).single();r&&(t.profile=r),Pi(l,e,s)}function Fi(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function he(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Di(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>he(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>he(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&he(s)>=6),i.length||(i=e.filter(s=>he(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&he(s)>=1&&he(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Gi(e,t){if(t.cost>0){const{error:c}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:i}=await Ai(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Ti);return{rollDropRate:c}},void 0),s=[];for(let c=0;c<(t.cardCount||5);c++){const o=i(t.rates);if(o){if(o.card_type==="player"){let a=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(a=a.eq("rarity",o.rarity));const{data:d}=await a;let l=d||[];if((o.note_min||o.note_max)&&(l=l.filter(p=>{const g=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!o.note_min||g>=o.note_min)&&(!o.note_max||g<=o.note_max)})),l.length||(o.note_min||o.note_max?(l=d||[],console.warn("[Booster] Aucun joueur avec note",o.note_min,"-",o.note_max,"— fallback rareté uniquement")):l=d||[]),!l.length)continue;const n=l[Math.floor(Math.random()*l.length)],{data:r}=await $.from("cards").insert({owner_id:e.id,player_id:n.id,card_type:"player"}).select().single();r&&(s.push({...r,player:n}),$.rpc("record_transfer",{p_card_id:r.id,p_player_id:n.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(o.card_type==="game_changer"){const{data:a}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),d=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],n=d[Math.floor(Math.random()*d.length)].name,{data:r}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:n}).select().single();r&&s.push(r)}else if(o.card_type==="formation"){const a=Kt(),d=a[Math.floor(Math.random()*a.length)],{data:l}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();l!=null&&l[0]&&s.push(l[0])}}}return s}async function Ri(e,t,i){if(i>0){const{error:n}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:s}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=s.filter(n=>n.job==="GK"),o=s.filter(n=>n.job!=="GK"),a=!e.first_booster_opened&&c.length>0,d=[];for(let n=0;n<t;n++){const r=n===0&&a?c:n===0?o:s,p=Fi(),g=Di(r,p);g&&d.push(g)}a&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await $.from("cards").insert(d.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(l||[]).forEach((n,r)=>{$.rpc("record_transfer",{p_card_id:n.id,p_player_id:d[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((n,r)=>({...l[r],player:n}))}async function qi(e,t,i){const{error:s}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:c}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=c!=null&&c.length?c:Object.keys(Je).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:d,error:l}=await $.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(d||[]).map(r=>{const p=c==null?void 0:c.find(g=>g.name===r.gc_type||g.id===r.gc_definition_id);return{...r,_gcDef:p||null}})}async function Ni(e,t){const{error:i}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const s=Kt(),c=s[Math.floor(Math.random()*s.length)],{data:o,error:a}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),o||[]}function Pi(e,t,i){var g;if(!e||e.length===0){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(g=f.querySelector("#anim-close-err"))==null||g.addEventListener("click",()=>f.remove());return}const s=document.createElement("div");s.id="booster-anim-overlay",s.innerHTML=`
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
      .pack-visual.shaking { animation:packShake 0.4s ease-in-out; }
      @keyframes packShake {
        0%,100%{transform:rotate(0)} 20%{transform:rotate(-8deg) scale(1.05)}
        40%{transform:rotate(8deg) scale(1.08)} 60%{transform:rotate(-5deg)}
        80%{transform:rotate(5deg)}
      }
      .pack-open { animation:packOpen 0.6s ease-out forwards !important; }
      @keyframes packOpen {
        0%{transform:scale(1);opacity:1} 50%{transform:scale(1.3) rotate(5deg);opacity:.8}
        100%{transform:scale(0) rotate(20deg);opacity:0}
      }
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

    <!-- Phase 1 : booster -->
    <div id="pack-phase" style="display:flex;flex-direction:column;align-items:center;gap:16px">
      <div style="font-size:14px;color:rgba(255,255,255,0.7)">
        ${t.name} · ${e.length} carte${e.length>1?"s":""}
      </div>
      <div class="pack-visual" id="pack-visual"><img src="${t.img}" alt="${t.name}"></div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Appuie pour ouvrir</div>
    </div>

    <!-- Phase 2 : révélation une par une -->
    <div id="reveal-phase" style="display:none;flex-direction:column;align-items:center;gap:16px;width:100%;padding:0 20px">
      <div id="card-counter" style="font-size:13px;color:rgba(255,255,255,0.5)"></div>
      <div id="single-card-slot" style="position:relative"></div>
      <div id="card-tap-hint" style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">Appuie pour continuer →</div>
    </div>

    <!-- Phase 3 : récapitulatif -->
    <div id="recap-phase" style="display:none;flex-direction:column;align-items:center;gap:0;width:100%">
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin:12px 0 4px">
        ${e.length} carte${e.length>1?"s obtenues":"obtenue"} !
      </div>
      <div class="recap-grid" id="recap-grid"></div>
      <div style="display:flex;gap:10px;padding:0 16px 20px;width:100%;max-width:400px">
        <button class="btn btn-primary" id="reveal-collection" style="flex:1">Voir ma collection</button>
        <button class="btn btn-ghost" id="reveal-more" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Boosters</button>
      </div>
    </div>

    <!-- Canvas pour feu d'artifice -->
    <canvas id="fireworks-canvas" style="position:fixed;inset:0;pointer-events:none;z-index:3001"></canvas>
  `,document.body.appendChild(s);let c=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(c)return;c=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let o=0;function a(f){o=f;const y=document.getElementById("reveal-phase");y.style.display="flex",d(f)}function d(f){var m;const y=e[f],u=document.getElementById("card-counter"),h=document.getElementById("single-card-slot"),L=document.getElementById("card-tap-hint");u&&(u.textContent=`Carte ${f+1} / ${e.length}`),L&&(L.textContent=f<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const v=St(y),x=y.card_type==="player"&&((m=y.player)==null?void 0:m.rarity)==="legende";h.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${x?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${v}
        ${y.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,x&&r();const k=document.getElementById("current-card-wrap");let B=!1;k.addEventListener("click",()=>{if(B)return;B=!0;const A=f+1;A<e.length?(k.style.transition="all 0.25s ease",k.style.transform="translateX(-120%) rotate(-15deg)",k.style.opacity="0",setTimeout(()=>d(A),250)):l()})}function l(){p(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const y=document.getElementById("recap-grid");y.innerHTML=e.map((u,h)=>`
      <div class="recap-card" style="--i:${h};animation-delay:${h*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${St(u)}
        ${u.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let n=null;function r(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const y=f.getContext("2d"),u=[];function h(){const v=Math.random()*f.width,x=Math.random()*f.height*.6,k=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],B=k[Math.floor(Math.random()*k.length)];for(let m=0;m<60;m++){const A=Math.PI*2/60*m,M=2+Math.random()*5;u.push({x:v,y:x,vx:Math.cos(A)*M,vy:Math.sin(A)*M,alpha:1,color:B,size:2+Math.random()*3})}}h(),n=setInterval(h,600);function L(){if(document.getElementById("fireworks-canvas")){y.clearRect(0,0,f.width,f.height);for(let v=u.length-1;v>=0;v--){const x=u[v];if(x.x+=x.vx,x.y+=x.vy+.08,x.vy*=.98,x.alpha-=.018,x.alpha<=0){u.splice(v,1);continue}y.globalAlpha=x.alpha,y.fillStyle=x.color,y.beginPath(),y.arc(x.x,x.y,x.size,0,Math.PI*2),y.fill()}y.globalAlpha=1,(n!==null||u.length>0)&&requestAnimationFrame(L)}}L()}function p(){n!==null&&(clearInterval(n),n=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),s.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),s.remove(),i("boosters")})}function St(e){var t,i,s,c;if(e.card_type==="player"&&e.player){const o=e.player,a=o.job||"ATT",d=zi[a]||"#1A6B3C",l=Ci[o.rarity]||"#ccc",n=a==="GK"?o.note_g:a==="DEF"?o.note_d:a==="MIL"?o.note_m:o.note_a,r=Mi(),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${l};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${o.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(o.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${d}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${d}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${n||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${p}</div>
        ${(t=o.clubs)!=null&&t.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},n=d[o==null?void 0:o.color]||d.purple,r=l[o==null?void 0:o.color]||l.purple,p=(o==null?void 0:o.name)||e.gc_type||"Game Changer",g=(o==null?void 0:o.effect)||((s=Je[e.gc_type])==null?void 0:s.desc)||"",f=o!=null&&o.image_url?`/manager-wars/icons/${o.image_url}`:null,y=((c=Je[e.gc_type])==null?void 0:c.icon)||"⚡";return`<div style="width:170px;height:240px;background:${n};border-radius:14px;border:3px solid ${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${r}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${p.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${y}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${g.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Oi(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}Hi()}function Hi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Ui="simulation",Vt="VOTRE_ZONE_ID";function Ki(){switch(Ui){case"propellerads":return Vi();case"adsense":return Yi();default:return st()}}function st(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");c&&(c.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Vi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(st());window.propeller.push({zone_id:Vt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Yi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(st());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Vt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const be={},$e={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ke={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ue(e,t,i,s,c){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",c)}function oe(e){const t=typeof import.meta<"u"?be==null?void 0:be.VITE_SUPABASE_URL:"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xe(e,t){var s,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Pe(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Yt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Oe(e,t){const i=$e[t]||$e["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const d=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===a).sort((n,r)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:a})),l=Pe(d.length);d.forEach((n,r)=>{n._col=l[r]}),s[a]=d}return s}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const d=[];for(let n=0;n<i[a];n++){let r=o.findIndex(p=>p.job===a);if(r===-1&&(r=o.findIndex(p=>p.job2===a)),r===-1&&(r=0),o[r]){const p={...o[r],_line:a};d.push(p),o.splice(r,1)}}const l=Pe(d.length);d.forEach((n,r)=>{n._col=l[r]}),s[a]=d}return s}function Wt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function le(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Jt(e,t,i){const c=new Set,o=t.filter(r=>{const p=r.gc_type||r.id;return c.has(p)?!1:(c.add(p),!0)});let a=[];function d(r,p){const g=r._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},y={purple:"#9b59b6",light_blue:"#00bcd4"},u=f[g==null?void 0:g.color]||f.purple,h=y[g==null?void 0:g.color]||y.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${p?"#FFD700":h};background:${u};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${p?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${p?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((g==null?void 0:g.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(g==null?void 0:g.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g!=null&&g.image_url?`<img src="/manager-wars/icons/${g.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((g==null?void 0:g.effect)||"").slice(0,50)}</span>
      </div>
      ${p?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function n(){var p,g,f;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${o.map(y=>{const u=a.find(h=>h.gc_type===y.gc_type);return d(y,!!u)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.id,h=o.find(v=>v.id===u);if(!h)return;const L=a.findIndex(v=>v.gc_type===h.gc_type);L>-1?a.splice(L,1):a.length<3&&a.push(h),n()})}),(p=e.querySelector("#gc-launch"))==null||p.addEventListener("click",()=>{r&&l(a)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>l([])),(f=e.querySelector("#gc-reset"))==null||f.addEventListener("click",()=>{a.length&&(a=[],n())})}n()}async function Wi(e,t,i){const{state:s,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){ue(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=o.map(r=>r.id),{data:d}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let l=0;function n(){var v,x,k,B,m;const r=o[l],p=(d||[]).filter(A=>A.deck_id===r.id),g=p.filter(A=>{var M;return A.is_starter&&((M=A.card)==null?void 0:M.player)}).map(A=>Xe(A.card,A.position)),f=p.find(A=>{var M;return((M=A.card)==null?void 0:M.card_type)==="formation"}),y=r.formation||((v=f==null?void 0:f.card)==null?void 0:v.formation)||"4-4-2",u=g.length>=11?Oe(g,y):null,h=g.length>=11;Wt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${y} · ${g.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===o.length-1?"0.1":"0.3"});color:${l===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Me(u,y,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((A,M)=>`<div style="width:7px;height:7px;border-radius:50%;background:${M===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const M=e.querySelector(".deck-preview-wrap svg");M&&(M.removeAttribute("width"),M.removeAttribute("height"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",M.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(x=document.getElementById("prev-deck"))==null||x.addEventListener("click",()=>{l>0&&(l--,n())}),(k=document.getElementById("next-deck"))==null||k.addEventListener("click",()=>{l<o.length-1&&(l++,n())}),(B=document.getElementById("validate-deck"))==null||B.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:r.id})}),(m=document.getElementById("cancel-deck-select"))==null||m.addEventListener("click",()=>{le(e),c("home")});const L=document.getElementById("deck-swipe-zone");if(L){let A=0,M=0;L.addEventListener("touchstart",N=>{A=N.touches[0].clientX,M=N.touches[0].clientY},{passive:!0}),L.addEventListener("touchend",N=>{const R=N.changedTouches[0].clientX-A,P=N.changedTouches[0].clientY-M;Math.abs(R)<40||Math.abs(R)<Math.abs(P)||(R<0&&l<o.length-1?(l++,n()):R>0&&l>0&&(l--,n()))},{passive:!0})}}n()}function Xt(e){const t=(be==null?void 0:be.VITE_SUPABASE_URL)||"";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:t?`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null:null}function fe(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:oe(e),c=Xt(e),o=e._line||e.job||"MIL",a=ke[o]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=e.note!==void 0?Number(e.note)||0:(Number(te(e,o))||0)+(e.boost||0),n=Zt(e==null?void 0:e.country_code),r=Math.round(i*.19),p=Math.round(i*.25),g=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ze(e==null?void 0:e.country_code)?`<img src="${Ze(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${n}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":l}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Ie(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((o,a)=>{if(c+=fe(o,40,52),a<s.length-1){const d=ge(o,s[a+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Ze(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Zt(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Le(e,t,i,s,c=310,o=310){const a=Ce[t]||{},d=Gt(t)||it[t]||[],l={},n=["ATT","MIL","DEF","GK"];for(const v of n)(e[v]||[]).forEach((k,B)=>{l[`${v}${B+1}`]=k});function r(v){const x=a[v];return x?{x:x.x*c,y:x.y*o}:null}let p="";for(const[v,x]of d){const k=r(v),B=r(x);if(!k||!B)continue;const m=l[v],A=l[x],M=ge(m,A);M==="#00ff88"||M==="#FFD700"?(p+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${M}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${M}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${M}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,f=64,y=13,u=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[v,x]of Object.entries(l)){const k=r(v);if(!k||!x)continue;const B=v.replace(/[0-9]/g,""),m=ke[B]||"#555",A=i==="attack"&&["MIL","ATT"].includes(B)&&!x.used||i==="defense"&&["GK","DEF","MIL"].includes(B)&&!x.used,M=s.includes(x.cardId);let N;i==="attack"?N=B==="MIL"?Number(x.note_m)||0:Number(x.note_a)||0:i==="defense"?N=B==="GK"?Number(x.note_g)||0:B==="MIL"?Number(x.note_m)||0:Number(x.note_d)||0:N=Number(B==="GK"?x.note_g:B==="DEF"?x.note_d:B==="MIL"?x.note_m:x.note_a)||0,N=N+(x.boost||0);const R=(k.x-g/2).toFixed(1),P=(k.y-f/2).toFixed(1),V=x.used?.25:1,Z=h[x==null?void 0:x.rarity]||h.normal,K=M?"#ff3030":Z,ee=M?3:(x==null?void 0:x.rarity)==="légende"||(x==null?void 0:x.rarity)==="pépite"?2.5:2,I=f-y-u;p+=`<defs><clipPath id="cp-${v}"><rect x="${R}" y="${(k.y-f/2+y).toFixed(1)}" width="${g}" height="${I}"/></clipPath></defs>`,p+=`<rect x="${R}" y="${P}" width="${g}" height="${f}" rx="5" fill="${m}" opacity="${V}"/>`;const z=oe(x);z&&!x.used&&(p+=`<image href="${z}" x="${R}" y="${(k.y-f/2+y).toFixed(1)}" width="${g}" height="${I}" clip-path="url(#cp-${v})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${R}" y="${P}" width="${g}" height="${y}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${k.x.toFixed(1)}" y="${(k.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.name||"").slice(0,9)}</text>`;const F=(k.y+f/2-u).toFixed(1);if(p+=`<rect x="${R}" y="${F}" width="${g}" height="${u}" fill="rgba(255,255,255,0.92)"/>`,x.used)p+=`<text x="${k.x.toFixed(1)}" y="${(k.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const G=Ze(x.country_code);G?p+=`<image href="${G}" x="${(k.x-20).toFixed(1)}" y="${(k.y+f/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(k.x-13).toFixed(1)}" y="${(k.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Zt(x.country_code)}</text>`,p+=`<text x="${k.x.toFixed(1)}" y="${(k.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${N}</text>`;const D=Xt(x);D?p+=`<image href="${D}" x="${(k.x+g/2-14).toFixed(1)}" y="${(k.y+f/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:x.clubName&&(p+=`<text x="${(k.x+14).toFixed(1)}" y="${(k.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(x.clubName||"").slice(0,3).toUpperCase()}</text>`),x.boost&&(p+=`<rect x="${(k.x+g/2-12).toFixed(1)}" y="${(k.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(k.x+g/2-5).toFixed(1)}" y="${(k.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${x.boost}</text>`)}p+=`<rect x="${R}" y="${P}" width="${g}" height="${f}" rx="5" fill="${M?"rgba(255,255,255,0.12)":"none"}" stroke="${K}" stroke-width="${ee}" opacity="${V}"/>`,A&&(p+=`<rect x="${R}" y="${P}" width="${g}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${M?"selected":""}" data-card-id="${x.cardId}" data-role="${B}" style="cursor:pointer"/>`)}const L=38;return`<svg viewBox="${-L} ${-L} ${c+L*2} ${o+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function Me(e,t,i,s,c=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Le(e,t,i,s,c,o)}
  </div>`}function Fe(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Qt(e,t,i,s){var B;const{state:c,navigate:o,toast:a}=t;Wt(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Wi(e,t,i);const l=d.deckId;let n,r,p,g;try{const m=await Promise.all([$.from("decks").select("formation,name").eq("id",l).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);n=m[0].data,p=m[0].error,r=m[1].data,g=m[1].error}catch(m){console.error("[Match] Exception chargement deck:",m),ue(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(p||g){console.error("[Match] Erreur Supabase:",p||g),ue(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const f=(r||[]).filter(m=>{var A;return m.is_starter&&((A=m.card)==null?void 0:A.player)}).map(m=>Xe(m.card,m.position)),y=(r||[]).filter(m=>{var A;return!m.is_starter&&((A=m.card)==null?void 0:A.player)}).map(m=>Xe(m.card,m.position));if(f.length<11){ue(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>o("decks"));return}const u=(r||[]).find(m=>{var A;return((A=m.card)==null?void 0:A.card_type)==="formation"}),h=(n==null?void 0:n.formation)||((B=u==null?void 0:u.card)==null?void 0:B.formation)||"4-4-2",{data:L,error:v}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:x}=await $.from("gc_definitions").select("*").eq("is_active",!0),k=(L||[]).map(m=>({...m,_gcDef:(x==null?void 0:x.find(A=>A.name===m.gc_type||A.id===m.gc_definition_id))||null}));s({deckId:l,formation:h,starters:f,subsRaw:y,gcCardsEnriched:k,gcDefs:x||[]})}async function Ji(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",o=c.replace("vs_ai_",""),a=c;await Qt(e,t,c,async({deckId:d,formation:l,starters:n,subsRaw:r,gcCardsEnriched:p,gcDefs:g})=>{try{const f=Oe(n,l),y=await Xi(l,o),u=async h=>{try{const{data:L,error:v}=await $.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:d,status:"in_progress"}).select().single();if(v){console.error("[MatchIA] Erreur création match:",v),ue(e,"⚠️","Impossible de créer le match ("+v.message+").","Retour",()=>t.navigate("home"));return}const x={gcDefs:g||[],matchId:L==null?void 0:L.id,mode:a,difficulty:o,formation:l,homeTeam:f,aiTeam:y,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Qi(e,x,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),ue(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!p.length){u([]);return}Jt(e,p,u)}catch(f){console.error("[MatchIA] Exception setup:",f),ue(e,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>t.navigate("home"))}})}async function Xi(e,t){var a,d;const{data:i}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Zi(e);const s=$e[e]||$e["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const l of["GK","DEF","MIL","ATT"]){const n=o.filter(y=>y.job===l),r=o.filter(y=>y.job!==l),p=[...n,...r],g=[];for(let y=0;y<s[l];y++){const u=p[y]||o[y];u&&g.push({cardId:"ai-"+u.id+"-"+y,id:u.id,firstname:u.firstname,name:u.surname_encoded,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,clubName:((a=u.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((d=u.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:l})}const f=Pe(g.length);g.forEach((y,u)=>{y._col=f[u]}),c[l]=g}return c}function Zi(e){const t=$e[e]||$e["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[o];l++){const n=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:s[c%s.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?n:2,note_d:o==="DEF"?n:2,note_m:o==="MIL"?n:2,note_a:o==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:o}),c++}const d=Pe(a.length);a.forEach((l,n)=>{l._col=d[n]}),i[o]=a}return i}function Qi(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Le(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>eo(e,t,i),5e3)}function eo(e,t,i){const s=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function o(p){return p.reduce((g,f)=>g+te(f,"MIL"),0)}function a(p){let g=0;for(let f=0;f<p.length-1;f++){const y=ge(p[f],p[f+1]);y==="#00ff88"?g+=2:y==="#FFD700"&&(g+=1)}return g}const d=o(s)+a(s),l=o(c)+a(c),n=d>=l;function r(p,g,f){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${g}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((y,u)=>{const h=oe(y),L=u<p.length-1?ge(y,p[u+1]):null,v=L&&L!=="#ff3333"&&L!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${f};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${h?`<img src="${h}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${te(y,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${y.name}</div>
          </div>
          ${L?`<div style="width:14px;height:4px;border-radius:2px;background:${L};flex-shrink:0;opacity:${v?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${o(p)} + ${a(p)} liens = <b style="color:#fff">${o(p)+a(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${r(s,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${d}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${l}</div>
    </div>

    ${r(c,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),g=document.getElementById("score-ai"),f=document.getElementById("midfield-result");if(p&&g&&(n?(p.style.fontSize="80px",p.style.color="#FFD700",g.style.opacity="0.25"):(g.style.fontSize="80px",g.style.color="#ff6b6b",p.style.opacity="0.25")),f){const y=Yt();f.style.opacity="1",n&&t.clubName,f.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${n?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${n?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${y}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,n&&(t.boostCard={value:y})}t.attacker=n?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(y=>({name:y.name,note:te(y,"MIL"),portrait:oe(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),aiPlayers:c.map(y=>({name:y.name,note:te(y,"MIL"),portrait:oe(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:d,aiTotal:l,text:`Duel milieu : ${t.clubName} ${d} – ${l} IA → ${n?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var u,h;const y=(u=t.boostCard)==null?void 0:u.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:40px;height:100%;min-height:100%;gap:16px;padding-left:24px;padding-right:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${n?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${n?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${y&&n?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${y}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(h=document.getElementById("start-match-btn"))==null||h.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ne(e,t,i),t.attacker==="ai"&&setTimeout(()=>Qe(e,t,i),800)})},100)},5e3)}function to(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ne(e,t,i){var y,u,h,L,v,x,k,B;const s=t.selected.map(m=>m.cardId),c=t.usedSubIds||[],o=t.homeSubs.filter(m=>!c.includes(m.cardId));Object.values(t.homeTeam).flat().filter(m=>m.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",l=t.phase==="attack",n=t.phase==="defense",r=t.phase==="finished",p=t.gcCards.filter(m=>!t.usedGc.includes(m.id)),g=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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

  <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">

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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const A=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Ie((A.players||[]).map(M=>({...M,used:!1})),"#ff6b6b",A.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const A=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Ie((A.players||[]).map(M=>({...M,used:!1})),"#00ff88",A.total)}
          </div>`}const m=t.log[t.log.length-1];return m?'<div style="padding:2px 4px">'+to(m)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const m=window.innerWidth>=700,A=(I,z,F)=>{var H,U;const G=(t.gcDefs||[]).find(W=>W.name===I.gc_type),D={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[G==null?void 0:G.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[G==null?void 0:G.color]||"#b06ce0",b=(G==null?void 0:G.name)||I.gc_type,C=(G==null?void 0:G.effect)||((H=de[I.gc_type])==null?void 0:H.desc)||"",E=G!=null&&G.image_url?`/manager-wars/icons/${G.image_url}`:null,w=((U=de[I.gc_type])==null?void 0:U.icon)||"⚡",S=Math.round(F*.22),T=Math.round(F*.22),q=F-S-T,j=b.length>12?7:9;return`<div class="gc-mini" data-gc-id="${I.id}" data-gc-type="${I.gc_type}"
          style="box-sizing:border-box;width:${z}px;height:${F}px;border-radius:10px;border:2px solid ${_};background:${D};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${S}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${j}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${z-6}px">${b}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${q}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${E?`<img src="${E}" style="max-width:${z-10}px;max-height:${q-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(q*.55)}px">${w}</span>`}
          </div>
          <div style="height:${T}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${C.slice(0,38)}</span>
          </div>
        </div>`},M=(I,z)=>{var F;return`<div id="boost-card"
          style="box-sizing:border-box;width:${I}px;height:${z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(z*.09)}px;color:#000;font-weight:900">+${(F=t.boostCard)==null?void 0:F.value}</div>
          </div>`},N=(I,z)=>z?M(110,150):A(I,110,150),R=(I,z)=>z?M(68,95):A(I,68,95),P=m?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",V=r?`<button id="btn-results" style="${P};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${P};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:l?`<button id="btn-action" style="${P};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:n?`<button id="btn-action" style="${P};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${P};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Z=l||n?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",K=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${m?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(I=>`<div class="sub-btn-col" data-sub-id="${I.cardId}" style="cursor:pointer;flex-shrink:0">${fe(I,44,58)}</div>`).join("")}
      </div>`,ee=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Me(t.homeTeam,t.formation,t.phase,s,300,300)}
        </div>
      </div>`;return m?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${K}
          ${ee}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${p.map(I=>N(I,!1)).join("")}
            ${g?N(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${V}${Z}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${K}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Me(t.homeTeam,t.formation,t.phase,s,300,300)}
            </div>
          </div>
        </div>
        <!-- Zone bas mobile : GC en ligne scrollable AU-DESSUS, bouton pleine largeur EN DESSOUS -->
        <div style="flex-shrink:0;background:rgba(0,0,0,0.35);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${p.map(I=>R(I,!1)).join("")}
            ${g?R(null,!0):""}
          </div>
          <div>${V}${Z}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(m=>{var A,M,N;if(m.type==="duel"){const R=m.isGoal,P=m.homeScored?"#FFD700":R?"#ff6b6b":"rgba(255,255,255,0.3)",V=m.homeScored?"⚽ BUT !":R?"⚽ BUT IA !":(A=m.homePlayers)!=null&&A.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${R?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${P};margin-bottom:4px">
                <div style="font-size:9px;color:${P};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${V}</div>
                ${(M=m.homePlayers)!=null&&M.length?`<div style="margin-bottom:3px">${Ie(m.homePlayers,"rgba(255,255,255,0.7)",m.homeTotal)}</div>`:""}
                ${(N=m.aiPlayers)!=null&&N.length?`<div style="opacity:0.7">${Ie(m.aiPlayers,"#ff6b6b",m.aiTotal)}</div>`:""}
              </div>`}return m.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${m.outPlayer?fe({...m.outPlayer,used:!0,_line:m.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${m.inPlayer?fe({...m.inPlayer,_line:m.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:m.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${m.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${m.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const A=e.querySelector(".match-screen");if(A){const M=e.clientHeight;M>50&&(A.style.height=M+"px",A.style.maxHeight=M+"px"),A.style.overflow="hidden"}}(),function(){const A=e.querySelector(".terrain-wrapper svg");A&&(A.removeAttribute("width"),A.removeAttribute("height"),A.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",A.setAttribute("viewBox","-26 -26 352 352"),A.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const m=e.querySelector(".terrain-wrapper svg");m&&(m.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let m=!1,A=30;const M=()=>document.getElementById("match-timer"),N=()=>{const R=M();if(!R)return;const P=String(Math.floor(A/60)).padStart(2,"0"),V=String(A%60).padStart(2,"0");R.textContent=` ${P}:${V}`,R.style.color=m?"#ff2222":"#ff9500",R.style.fontWeight="900"};N(),t._timerInt=setInterval(()=>{if(A--,A<0)if(!m)m=!0,A=15,N();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(R),setTimeout(()=>{R.remove(),we(e,t,i)},2500)}else N()},1e3)}(y=document.getElementById("match-quit"))==null||y.addEventListener("click",()=>{le(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,we(e,t,i))}),(u=document.getElementById("view-ai"))==null||u.addEventListener("click",()=>po(t,i)),(h=document.getElementById("toggle-history"))==null||h.addEventListener("click",()=>{var m;(m=document.getElementById("match-history-panel"))==null||m.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var m;(m=document.getElementById("match-history-panel"))==null||m.classList.remove("open")}),(v=document.getElementById("btn-action"))==null||v.addEventListener("click",()=>{t.selected.length!==0&&(l?oo(e,t,i):n&&no(e,t,i))}),(x=document.getElementById("btn-results"))==null||x.addEventListener("click",()=>we(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(m=>{m.addEventListener("click",()=>io(m,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(m=>{m.addEventListener("click",()=>so(m.dataset.gcId,m.dataset.gcType,e,t,i))}),(k=document.getElementById("boost-card"))==null||k.addEventListener("click",()=>co(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(m=>{m.addEventListener("click",()=>jt(e,t,i,m.dataset.subId))}),(B=document.getElementById("sub-btn-main"))==null||B.addEventListener("click",()=>jt(e,t,i))}function io(e,t,i,s){const c=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(d=>d.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[o]||[]).find(l=>l.cardId===c);d&&t.selected.push({...d,_role:o,_line:o})}ne(i,t,s)}function dt(e,t,i){e.matchId&&$.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function oo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),dt(t,i,i.state.profile.id);const s=t.selected.map(o=>({...o,_line:o._role})),c=ot(s,t.modifiers.home);t.pendingAttack={...c,players:[...t.selected],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ne(e,t,i),setTimeout(()=>ro(e,t,i),1200)}function no(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),dt(t,i,i.state.profile.id);const s=t.selected.map(d=>({...d,_line:d._role})),c=nt(s,t.modifiers.home);t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId);l&&(l.used=!0)});const o=rt(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:oe(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d;return{name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:oe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(o.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ne(e,t,i),lt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ze(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,i,"home-attack")}function Qe(e,t,i){dt(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=qt(s,"attack",t.difficulty);if(!c.length){ti(e,t,i);return}const o=ot(c,t.modifiers.ai);t.pendingAttack={...o,players:c,side:"ai"},c.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${c.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),l=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!l){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:oe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,ne(e,t,i),lt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ze(e,t,i,"home-attack")});return}t.phase="defense",ne(e,t,i)}function ro(e,t,i){const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=qt(s,"defense",t.difficulty),o=c.length>0?nt(c,t.modifiers.ai).total:0;c.forEach(l=>{l.used=!0});const a=rt(t.pendingAttack.total,o,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:oe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:c.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:oe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(a.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,ne(e,t,i),lt(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{ze(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,ze(e,t,i,"ai-attack")}function ze(e,t,i,s){if(t.round++,ei(t)){we(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){we(e,t,i);return}t.phase="ai-attack",ne(e,t,i),setTimeout(()=>Qe(e,t,i),800);return}t.phase="attack",ne(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){ti(e,t,i);return}t.phase="ai-attack",ne(e,t,i),setTimeout(()=>Qe(e,t,i),800)}}function ei(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(c=>!c.used));return!t&&!i}function ti(e,t,i){ei(t)?we(e,t,i):(t.phase="attack",ne(e,t,i))}function ao(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=oe(e),o=oe(t),a=ke[e.job]||"#555",d=ke[t.job]||"#555",l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(s);let r=!1;const p=()=>{r||(r=!0,s.remove(),i())};s.addEventListener("click",p),setTimeout(p,2e3)}function Ae(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function jt(e,t,i,s=null){if(t.phase!=="attack"){Ae("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ae(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(p=>p.used),o=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!c.length){Ae("Aucun joueur utilisé à remplacer");return}if(!o.length){Ae("Aucun remplaçant disponible");return}let a=0,d=Math.max(0,o.findIndex(p=>p.cardId===s)),l=!1;const n=document.createElement("div");n.id="sub-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var L,v,x,k,B,m;const p=c[a],g=o[d],f=Math.min(130,Math.round((window.innerWidth-90)/2)),y=Math.round(f*1.35),u=A=>`background:rgba(255,255,255,0.12);border:none;color:${A?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${A?"default":"pointer"};flex-shrink:0`;n.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${u(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${g?fe({...g,used:!1,boost:0},f,y):"<div>—</div>"}</div>
        <button id="in-down" style="${u(d>=o.length-1)}" ${d>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${u(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${p?fe({...p,used:!1,boost:0},f,y):"<div>—</div>"}</div>
        <button id="out-down" style="${u(a>=c.length-1)}" ${a>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(L=n.querySelector("#sub-close"))==null||L.addEventListener("click",()=>n.remove()),(v=n.querySelector("#out-up"))==null||v.addEventListener("click",()=>{a>0&&(a--,r())}),(x=n.querySelector("#out-down"))==null||x.addEventListener("click",()=>{a<c.length-1&&(a++,r())}),(k=n.querySelector("#in-up"))==null||k.addEventListener("click",()=>{d>0&&(d--,r())}),(B=n.querySelector("#in-down"))==null||B.addEventListener("click",()=>{d<o.length-1&&(d++,r())});const h=(A,M,N,R)=>{const P=n.querySelector("#"+A);if(!P)return;let V=0;P.addEventListener("touchstart",Z=>{V=Z.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",Z=>{const K=Z.changedTouches[0].clientY-V;if(Math.abs(K)<30)return;const ee=M();K<0&&ee<R-1?(N(ee+1),r()):K>0&&ee>0&&(N(ee-1),r())},{passive:!0})};h("in-panel",()=>d,A=>d=A,o.length),h("out-panel",()=>a,A=>a=A,c.length),(m=n.querySelector("#sub-confirm"))==null||m.addEventListener("click",A=>{if(A.preventDefault(),A.stopPropagation(),l)return;l=!0;const M=c[a],N=o[d];if(!M||!N)return;let R=null,P=-1;for(const[Z,K]of Object.entries(t.homeTeam)){const ee=(K||[]).findIndex(I=>I.cardId===M.cardId);if(ee!==-1){R=Z,P=ee;break}}if(P===-1||!R){Ae("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),n.remove();return}const V={...N,_line:R,_col:M._col||0,used:!1,boost:0};t.homeTeam[R].splice(P,1,V),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(N.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:M.name,firstname:M.firstname,note:te(M,R),portrait:oe(M),job:M.job,country_code:M.country_code,rarity:M.rarity,clubName:M.clubName,clubLogo:M.clubLogo},inPlayer:{name:N.name,firstname:N.firstname,note:te(N,R),portrait:oe(N),job:N.job,country_code:N.country_code,rarity:N.rarity,clubName:N.clubName,clubLogo:N.clubLogo},text:`🔄 ${N.firstname} ${N.name} remplace ${M.firstname} ${M.name}`}),n.remove(),ao(M,N,()=>ne(e,t,i))})}document.body.appendChild(n),r()}function so(e,t,i,s,c){var y,u;const o=(s.gcDefs||[]).find(h=>h.name===t),a=de[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",n=(o==null?void 0:o.name)||t,r=(o==null?void 0:o.effect)||a.desc,p=o!=null&&o.image_url?`/manager-wars/icons/${o.image_url}`:null,g=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${g}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(y=f.querySelector("#gc-back"))==null||y.addEventListener("click",()=>f.remove()),(u=f.querySelector("#gc-use"))==null||u.addEventListener("click",()=>{f.remove(),lo(e,t,i,s,c)})}function lo(e,t,i,s,c){if(s.usedGc.includes(e))return;s.usedGc.push(e);const o=(s.gcDefs||[]).find(d=>d.name===t);let a=!1;if(o!=null&&o.effect_type&&o.effect_type!=="CUSTOM"){const d=GC_ENGINE[o.effect_type];d?d(o.effect_params||{},s,i,c)||(a=!0):(c.toast(`Effet "${o.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(s.homeTeam).flatMap(([l,n])=>(n||[]).filter(r=>r.used).map(r=>({...r,_line:l})));d.length?(d[0].used=!1,s.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(l=>!l.used);if(d.length){const l=d.sort((n,r)=>te(r,"ATT")-te(n,"ATT"))[0];l.used=!0,s.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}$.from("cards").delete().eq("id",e).then(()=>{}),a&&ne(i,s,c)}function co(e,t,i){const s=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${s.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ke[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${te(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const o=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[a]||[]).find(l=>l.cardId===o);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ne(e,t,i)})})}function lt(e,t,i,s,c){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(n,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");o.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${a}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${s?"BUT !":"BUT IA !"}
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
    ${e.map(n=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${ke[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let d=!1;const l=()=>{d||(d=!0,o.remove(),setTimeout(()=>c(),50))};o.addEventListener("click",l),setTimeout(l,3500)}async function we(e,t,i){var r,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,c=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=c?"victoire":o?"nul":"defaite",d=fi(t.mode,a);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?s.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(s.profile.credits||0)+d,matches_played:(s.profile.matches_played||0)+1};c?l.wins=(s.profile.wins||0)+1:o?l.draws=(s.profile.draws||0)+1:l.losses=(s.profile.losses||0)+1,await $.from("users").update(l).eq("id",s.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(n),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{n.remove(),le(e),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{n.remove(),le(e),i.navigate("match",{matchMode:t.mode})})}function po(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Le(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function uo(e,t){const{state:i}=t;await Qt(e,t,"random",({deckId:c,formation:o,starters:a,subsRaw:d,gcCardsEnriched:l,gcDefs:n})=>{const r=p=>{fo(e,t,c,o,a,d,p,n||[])};if(!l.length){r([]);return}Jt(e,l,r)})}async function fo(e,t,i,s,c,o,a=[],d=[]){var v;const{state:l,navigate:n,toast:r}=t;let p=!1,g=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const f=()=>document.getElementById("mm-status"),y=async(x=!0)=>{p=!0,g&&($.removeChannel(g),g=null),x&&await $.rpc("cancel_matchmaking",{p_user_id:l.profile.id}).catch(()=>{})};(v=document.getElementById("mm-cancel"))==null||v.addEventListener("click",async()=>{try{await y(!0)}catch(x){console.warn("[Matchmaking] cleanup error:",x)}le(e),n("home")});const u=async(x,k,B)=>{p||(p=!0,g&&($.removeChannel(g),g=null),f()&&(f().textContent="Adversaire trouvé !"),await new Promise(m=>setTimeout(m,600)),e.isConnected!==!1&&go(e,t,x,B,a,d))},{data:h,error:L}=await $.rpc("try_matchmake",{p_user_id:l.profile.id,p_deck_id:i});if(L||!(h!=null&&h.success)){r("Erreur de matchmaking","error"),le(e),n("home");return}if(h.matched){u(h.match_id,h.opponent_id,!1);return}f()&&(f().textContent="En attente d'un autre joueur..."),g=$.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},x=>{const k=x.new;k.status==="matched"&&k.match_id&&u(k.match_id,k.matched_with,!0)}).subscribe()}async function go(e,t,i,s,c=[],o=[]){const{state:a,navigate:d,toast:l}=t,n=s?"p1":"p2",r=s?"p2":"p1",p=(c||[]).map(I=>I.id),g=(c||[]).map(I=>({id:I.id,gc_type:I.gc_type,_gcDef:I._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:f}=await $.from("matches").select("*").eq("id",i).single();if(!f){l("Match introuvable","error"),d("home");return}async function y(){const[{data:I,error:z},{data:F,error:G},{data:D},{data:_}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:f.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:f.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",f.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",f.away_id).single()]);z&&console.error("[PvP] get_deck_for_match p1 error:",z),G&&console.error("[PvP] get_deck_for_match p2 error:",G);function b(j,H){return{cardId:j.card_id,position:H||j.position,id:j.id,firstname:j.firstname,name:j.surname_encoded,country_code:j.country_code,club_id:j.club_id,job:j.job,job2:j.job2,note_g:Number(j.note_g)||0,note_d:Number(j.note_d)||0,note_m:Number(j.note_m)||0,note_a:Number(j.note_a)||0,rarity:j.rarity,skin:j.skin,hair:j.hair,hair_length:j.hair_length,clubName:j.club_encoded_name||null,clubLogo:j.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const C=((I==null?void 0:I.starters)||[]).map(j=>b(j,j.position)),E=((F==null?void 0:F.starters)||[]).map(j=>b(j,j.position)),w=((I==null?void 0:I.subs)||[]).map(j=>b(j,j.position)),S=((F==null?void 0:F.subs)||[]).map(j=>b(j,j.position)),T=(I==null?void 0:I.formation)||"4-4-2",q=(F==null?void 0:F.formation)||"4-4-2";return console.log("[PvP] p1Formation:",T,"p1 starters:",C.length,"positions:",C.map(j=>j.position)),console.log("[PvP] p2Formation:",q,"p2 starters:",E.length,"positions:",E.map(j=>j.position)),{p1Team:Oe(C,T),p2Team:Oe(E,q),p1Subs:w,p2Subs:S,p1Formation:T,p2Formation:q,p1Name:(D==null?void 0:D.club_name)||(D==null?void 0:D.pseudo)||"Joueur 1",p2Name:(_==null?void 0:_.club_name)||(_==null?void 0:_.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?p:[],gc_p2:s?[]:p,gcCardsFull_p1:s?g:[],gcCardsFull_p2:s?[]:g,gcReady_p1:!0,gcReady_p2:!0,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let u=f.game_state&&Object.keys(f.game_state).length?f.game_state:null;if(!u)if(s){u=await y();const{data:I}=await $.from("matches").select("game_state").eq("id",i).single();!(I!=null&&I.game_state)||!Object.keys(I.game_state).length?await $.from("matches").update({game_state:u,turn_user_id:f.home_id}).eq("id",i):u=I.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let I=0;I<30&&!u;I++){await new Promise(F=>setTimeout(F,400));const{data:z}=await $.from("matches").select("game_state").eq("id",i).single();z!=null&&z.game_state&&Object.keys(z.game_state).length&&(u=z.game_state)}if(!u){l("Erreur de synchronisation","error"),d("home");return}u.gc_p2=p,u.gcCardsFull_p2=g,await $.from("matches").update({game_state:u}).eq("id",i)}let h=!1;function L(I){var C;try{$.removeChannel(v)}catch{}const z=a.profile.id,F=I.winner_id===z,G=!!I.forfeit,D=u[n+"Score"]??0,_=u[r+"Score"]??0,b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",b.innerHTML=`
      <div style="font-size:64px">${F?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${F?"#FFD700":"#ff6b6b"}">${F?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px;color:#fff">${u[n+"Name"]} ${D} – ${_} ${u[r+"Name"]}</div>
      ${G?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${F?"L'adversaire a quitté la partie":"Match perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(C=b.querySelector("#pvp-end-home"))==null||C.addEventListener("click",()=>{b.remove(),le(e),d("home")})}const v=$.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},I=>{const z=I.new;try{if(z.status==="finished"||z.forfeit){if(h)return;h=!0,u._timerInt&&(clearInterval(u._timerInt),u._timerInt=null),z.game_state&&(u=z.game_state),L(z);return}z.game_state&&(u=z.game_state,B())}catch(F){console.error("[PvP] Realtime render crash:",F,"gameState:",u)}}).subscribe();async function x(I){Object.assign(u,I),u.lastActionAt=new Date().toISOString();const{error:z}=await $.from("matches").update({game_state:u}).eq("id",i);z&&(console.error("[PvP] pushState DB error:",z.message,z),l("Erreur de synchronisation : "+z.message,"error"));try{B()}catch(F){console.error("[PvP] renderPvpScreen crash après pushState:",F),l("Erreur d'affichage : "+F.message,"error")}}async function k(){if(h)return;h=!0,u._timerInt&&(clearInterval(u._timerInt),u._timerInt=null);const I=s?f.away_id:f.home_id;try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:I}).eq("id",i)}catch(z){console.warn("[PvP] forfeit DB error:",z)}try{$.removeChannel(v)}catch{}le(e),d("home")}function B(){var gt,xt,mt,yt,ht;const I=u[n+"Team"];u[r+"Team"];const z=u[n+"Score"],F=u[r+"Score"],G=u[n+"Name"],D=u[r+"Name"];if(u.phase==="gc-select")return m();if(u.phase==="reveal")return A();if(u.phase==="midfield")return M();if(u.phase==="finished")return Z();const _=u.phase===n+"-attack",b=u.phase===n+"-defense",C=u.phase===r+"-attack"||u.phase===r+"-defense",E=Array.isArray(u["selected_"+n])?u["selected_"+n]:[],w=E.map(O=>O.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const S=window.innerWidth>=700,T=u[n+"Subs"]||[],q=u["usedSubIds_"+n]||[],j=T.filter(O=>!q.includes(O.cardId)),H=u["gcCardsFull_"+n]||[],U=u["usedGc_"+n]||[],W=H.filter(O=>!U.includes(O.id)),ie=u.boostOwner===n&&!u.boostUsed,re=(O,J,Q)=>{var _t,$t;const Y=O._gcDef,ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Y==null?void 0:Y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",je={purple:"#b06ce0",light_blue:"#00d4ef"}[Y==null?void 0:Y.color]||"#b06ce0",ye=(Y==null?void 0:Y.name)||O.gc_type,ri=(Y==null?void 0:Y.effect)||((_t=de[O.gc_type])==null?void 0:_t.desc)||"",vt=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null,ai=(($t=de[O.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(Q*.22),wt=Math.round(Q*.22),Ve=Q-bt-wt,si=ye.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="width:${J}px;height:${Q}px;border-radius:10px;border:2px solid ${je};background:${ce};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${si}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${J-6}px">${ye}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Ve}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${vt?`<img src="${vt}" style="max-width:${J-10}px;max-height:${Ve-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ve*.55)}px">${ai}</span>`}
        </div>
        <div style="height:${wt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ri.slice(0,38)}</span>
        </div>
      </div>`},ae=(O,J)=>`<div id="pvp-boost-card" style="width:${O}px;height:${J}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${S?22:18}px">⚡</div>
      <div style="font-size:${S?11:9}px;color:#000;font-weight:900">+${u.boostValue}</div>
    </div>`,se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${j.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':j.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${fe(O,S?60:44,S?78:58)}</div>`).join("")}
    </div>`,xe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${Me(I,u[n+"Formation"],_?"attack":b?"defense":"idle",w,300,300)}
      </div>
    </div>`,me=S?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Se=_?`<button id="pvp-action" style="${me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:b?`<button id="pvp-action" style="${me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${me};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${D}</div>`,ut=_||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",oi=(()=>{const O=u.pendingAttack;if(b&&O&&Array.isArray(O.players))return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${D} ATTAQUE — Défendez !</div>
          ${Ie(O.players.map(ce=>({...ce,used:!1})),"#ff6b6b",O.total)}
        </div>`;const J=Array.isArray(u.log)?u.log:[],Q=J[J.length-1];return Q?`<div style="padding:7px 10px;border-left:3px solid ${Q.type==="goal"?"#FFD700":Q.type==="stop"?"#00ff88":Q.type==="attack"?"#ff6b6b":"rgba(255,255,255,0.6)"};font-size:12px;color:#fff">${Q.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),ni=(Array.isArray(u.log)?u.log:[]).length,ft=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${G} <span style="color:#FFD700;font-size:18px">${z}</span> – <span style="color:#FFD700;font-size:18px">${F}</span> ${D}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${C?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${C?`⏳ Tour de ${D}`:_?"⚔️ À vous d'attaquer !":b?"🛡️ À vous de défendre !":""}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${oi}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${ni})
      </button>`;if(S)e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ft}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          ${xe}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${Se}${ut}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${ie?ae(110,90):""}
            ${W.map(O=>re(O,110,150)).join("")}
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
            ${W.map(J=>re(J,68,95)).join("")}
            ${ie?ae(68,95):""}
          </div>
          <div>${Se}${ut}</div>
        </div>
      </div>`;const O=e.querySelector(".terrain-wrapper");O&&(O.innerHTML=Me(I,u[n+"Formation"],_?"attack":b?"defense":"idle",w,300,300))}if(e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!_&&!b)return;const J=O.dataset.cardId,Q=O.dataset.role,Y=(I[Q]||[]).find(ye=>ye.cardId===J);if(!Y||Y.used)return;Array.isArray(u["selected_"+n])||(u["selected_"+n]=[]);const ce=u["selected_"+n],je=ce.findIndex(ye=>ye.cardId===J);je>-1?ce.splice(je,1):ce.length<3&&ce.push({...Y,_role:Q}),B()})}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>{N()}),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>{V(O.dataset.gcId,O.dataset.gcType)})}),(xt=e.querySelector("#pvp-action"))==null||xt.addEventListener("click",()=>{_?K():b&&ee()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&k()}),(yt=e.querySelector("#pvp-view-opp"))==null||yt.addEventListener("click",()=>{P()}),(ht=e.querySelector("#pvp-toggle-history"))==null||ht.addEventListener("click",()=>{R()}),function(){const J=e.querySelector(".terrain-wrapper svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("viewBox","-26 -26 352 352"),J.setAttribute("preserveAspectRatio","xMidYMid meet"));const Q=e.querySelector(".match-screen");if(Q){const Y=e.clientHeight;Y>50&&(Q.style.height=Y+"px",Q.style.maxHeight=Y+"px",Q.style.overflow="hidden")}}(),u._timerInt&&(clearInterval(u._timerInt),u._timerInt=null),(_||b)&&!h){let O=30,J=!1;const Q=()=>document.getElementById("pvp-timer"),Y=()=>{Q()&&(Q().textContent=O+"s",Q().style.color=J?"#ff4444":"#fff")};Y(),u._timerInt=setInterval(()=>{O--,O<0?J?(clearInterval(u._timerInt),u._timerInt=null,k()):(J=!0,O=15,Y()):Y()},1e3)}}function m(){var b;const I=u["gcReady_"+n],z=u["gcReady_"+r];Array.isArray(u["gc_"+n])||(u["gc_"+n]=[]);let F=u["gc_"+n];const G=3;function D(C,E){const w=C._gcDef,S={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},T={purple:"#9b59b6",light_blue:"#00bcd4"},q=S[w==null?void 0:w.color]||S.purple,j=T[w==null?void 0:w.color]||T.purple;return`<div class="pvp-gc-card" data-id="${C.id}"
        style="width:100px;border-radius:10px;border:3px solid ${E?"#FFD700":j};background:${q};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${E?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${E?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((w==null?void 0:w.name)||C.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(w==null?void 0:w.name)||C.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${w!=null&&w.image_url?`<img src="/manager-wars/icons/${w.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((w==null?void 0:w.effect)||"").slice(0,50)}</span>
        </div>
        ${E?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${G}</b> cartes · ${F.length}/${G}
        </div>
      </div>
      ${I?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${z?"Adversaire aussi.":`En attente de ${u[r+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${F.length?`⚡ Valider (${F.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,I)return;const _=n==="p1"?f.home_id:f.away_id;$.from("cards").select("id,gc_type").eq("owner_id",_).eq("card_type","game_changer").then(async({data:C})=>{const{data:E}=await $.from("gc_definitions").select("*").eq("is_active",!0),w=new Set,S=(C||[]).filter(q=>w.has(q.gc_type)?!1:(w.add(q.gc_type),!0)).map(q=>({...q,_gcDef:(E==null?void 0:E.find(j=>j.name===q.gc_type))||null})),T=document.getElementById("pvp-gc-grid");if(T){if(!S.length){T.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}T.innerHTML=S.map(q=>D(q,F.includes(q.id))).join(""),T.querySelectorAll(".pvp-gc-card").forEach(q=>{q.addEventListener("click",()=>{const j=q.dataset.id,H=F.indexOf(j);H>-1?F.splice(H,1):F.length<G&&F.push(j),B()})})}}),(b=e.querySelector("#pvp-gc-validate"))==null||b.addEventListener("click",async()=>{const C=n==="p1"?f.home_id:f.away_id,{data:E}=await $.from("cards").select("id,gc_type").eq("owner_id",C).eq("card_type","game_changer").in("id",F),{data:w}=await $.from("gc_definitions").select("*").eq("is_active",!0),S=(E||[]).map(T=>({...T,_gcDef:(w==null?void 0:w.find(q=>q.name===T.gc_type))||null}));await x({["gcReady_"+n]:!0,["gcCardsFull_"+n]:S}),u["gcReady_"+r]&&await x({phase:"reveal"})})}function A(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Le(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,n==="p1"&&setTimeout(async()=>{await x({phase:"midfield"})},5e3)}function M(){const I=u[n+"Team"].MIL||[],z=u[r+"Team"].MIL||[];function F(E){return E.reduce((w,S)=>w+te(S,"MIL"),0)}function G(E){let w=0;for(let S=0;S<E.length-1;S++){const T=ge(E[S],E[S+1]);T==="#00ff88"?w+=2:T==="#FFD700"&&(w+=1)}return w}const D=F(I)+G(I),_=F(z)+G(z),b=D>=_;function C(E,w,S){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${w}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${E.map((T,q)=>{const j=oe(T),H=q<E.length-1?ge(T,E[q+1]):null,U=H&&H!=="#ff3333"&&H!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${S};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${j?`<img src="${j}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${te(T,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${T.name}</div>
            </div>
            ${H?`<div style="width:14px;height:4px;border-radius:2px;background:${H};flex-shrink:0;opacity:${U?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${F(E)} + ${G(E)} liens = <b style="color:#fff">${F(E)+G(E)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${C(I,u[n+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${D}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${_}</div>
      </div>

      ${C(z,u[r+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const E=document.getElementById("pvp-score-me"),w=document.getElementById("pvp-score-opp"),S=document.getElementById("pvp-midfield-result");E&&w&&(b?(E.style.fontSize="80px",E.style.color="#FFD700",w.style.opacity="0.25"):(w.style.fontSize="80px",w.style.color="#ff6b6b",E.style.opacity="0.25"));const T=u.p1Team.MIL||[],q=u.p2Team.MIL||[],j=F(T)+G(T),H=F(q)+G(q),U=j>=H?"p1":"p2";u[U+"Name"];let W=u.boostValue;W==null&&(W=Yt(),u.boostValue=W,u.boostOwner=U,u.boostUsed=!1),S&&(S.style.opacity="1",S.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${b?`${u[n+"Name"]} gagne le milieu de terrain et attaque !`:`${u[r+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${b?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${W}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(n!=="p1")return;const ie=U;await x({phase:ie+"-attack",attacker:ie,round:1,boostValue:u.boostValue,boostUsed:!1,boostOwner:ie})},1800)},600)}function N(){var G;const I=u[n+"Team"],z=Object.entries(I).flatMap(([D,_])=>(_||[]).filter(b=>!b.used).map(b=>({...b,_line:D})));if(!z.length)return;const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",F.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${z.map(D=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[D._line]||"#555",b=te(D,D._line)+(D.boost||0);return`<div class="boost-pick-item" data-cid="${D.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${D.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${b}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(F),(G=F.querySelector("#boost-picker-close"))==null||G.addEventListener("click",()=>F.remove()),F.querySelectorAll(".boost-pick-item").forEach(D=>{D.addEventListener("click",async()=>{const _=D.dataset.cid,b=z.find(w=>w.cardId===_);if(!b)return;const C=u[n+"Team"],E=(C[b._line]||[]).find(w=>w.cardId===_);E&&(E.boost=(E.boost||0)+u.boostValue),F.remove(),await x({[n+"Team"]:C,boostUsed:!0})})})}function R(){var F;const I=Array.isArray(u.log)?u.log:[],z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",z.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${I.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...I].reverse().map(G=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${G.type==="goal"?"#FFD700":G.type==="defense"?"#00ff88":"rgba(255,255,255,0.5)"}">
                <div style="font-size:12px;color:#fff">${G.text||""}</div>
              </div>`).join("")}
      </div>`,document.body.appendChild(z),(F=z.querySelector("#pvp-hist-close"))==null||F.addEventListener("click",()=>z.remove())}function P(){var z;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",I.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Le(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(I),(z=I.querySelector("#pvp-view-opp-close"))==null||z.addEventListener("click",()=>I.remove())}function V(I,z){var j,H;const G=(u["gcCardsFull_"+n]||[]).find(U=>U.id===I),D=G==null?void 0:G._gcDef,_=de[z]||{icon:"⚡",desc:"Carte spéciale."},b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[D==null?void 0:D.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",C={purple:"#b06ce0",light_blue:"#00d4ef"}[D==null?void 0:D.color]||"#b06ce0",E=(D==null?void 0:D.name)||z,w=(D==null?void 0:D.effect)||_.desc,S=D!=null&&D.image_url?`/manager-wars/icons/${D.image_url}`:null,T=_.icon||"⚡",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",q.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${C};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${C}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(q),(j=q.querySelector("#pvp-gc-back"))==null||j.addEventListener("click",()=>q.remove()),(H=q.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",async()=>{q.remove();const U=u["usedGc_"+n]||[];U.push(I),await x({["usedGc_"+n]:U})})}function Z(){var D;const I=u[n+"Score"],z=u[r+"Score"],F=I>z,G=I===z;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${F?"🏆":G?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${F?"Victoire !":G?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${I} - ${z}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(D=document.getElementById("pvp-home"))==null||D.addEventListener("click",()=>{$.removeChannel(v),le(e),d("home")})}async function K(){const I=(u["selected_"+n]||[]).map(G=>({...G,_line:G._role}));if(!I.length)return;const z=ot(I,u.modifiers[n]||{});I.forEach(G=>{const D=(u[n+"Team"][G._role]||[]).find(_=>_.cardId===G.cardId);D&&(D.used=!0)});const F=Array.isArray(u.log)?u.log:[];F.push({type:"attack",text:`⚔️ ${u[n+"Name"]} attaque (${z.total})`,players:I,total:z.total,side:n}),await x({pendingAttack:{...z,players:I,side:n},["selected_"+n]:[],modifiers:{...u.modifiers,[n]:{}},phase:r+"-defense",log:F})}async function ee(){const I=(u["selected_"+n]||[]).map(S=>({...S,_line:S._role})),z=nt(I,u.modifiers[n]||{});I.forEach(S=>{const T=(u[n+"Team"][S._role]||[]).find(q=>q.cardId===S.cardId);T&&(T.used=!0)});const F=rt(u.pendingAttack.total,z.total,u.modifiers[n]||{}),G=u.pendingAttack.side,D=F==="attack",_=u[G+"Score"]+(D?1:0),b=G==="p1"?"p2":"p1",C=(u.round||0)+1,E=C>10,w=Array.isArray(u.log)?u.log:[];w.push({type:"defense",text:`🛡️ ${u[n+"Name"]} défend (${z.total})`,players:I,total:z.total,side:n}),w.push({type:D?"goal":"stop",text:D?`⚽ BUT de ${u[G+"Name"]} ! (${u.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${z.total})`}),await x({[G+"Score"]:_,["selected_"+n]:[],modifiers:{...u.modifiers,[n]:{}},pendingAttack:null,phase:E?"finished":b+"-attack",attacker:b,round:C,log:w}),E&&await $.from("matches").update({status:"finished"}).eq("id",i)}B()}const xo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function mo(e,t){const{state:i,toast:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await ct(e,t)}async function ct(e,t){const{state:i,toast:s}=t,{data:c}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:o}=await $.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(n=>n.seller_id!==i.profile.id),d=o||[];d.filter(n=>n.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${d.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function l(n){const r=document.getElementById("mkt-content"),p=n==="buy"?a:d;if(p.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${n==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const g=n==="mine"?[...p].sort((f,y)=>f.status!==y.status?f.status==="active"?-1:1:new Date(y.listed_at)-new Date(f.listed_at)):p;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(f=>{var x,k,B,m;const y=(x=f.card)==null?void 0:x.player;if(!y)return"";const u=y.job==="GK"?y.note_g:y.job==="DEF"?y.note_d:y.job==="MIL"?y.note_m:y.note_a,h=xo[y.rarity],L=(i.profile.credits||0)>=f.price,v=f.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${v?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${vo(y.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${h};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${y.firstname} ${y.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${y.country_code} · ${((k=y.clubs)==null?void 0:k.encoded_name)||"—"} · ${y.rarity} · ${y.job}</div>
            ${n==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((B=f.seller)==null?void 0:B.pseudo)||"—"}</div>`:v?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((m=f.buyer)==null?void 0:m.pseudo)||"—"} · ${f.sold_at?new Date(f.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(f.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${n==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${L?"":"disabled"} style="margin-top:4px">${L?"Acheter":"Trop cher"}</button>`:v?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>yo(f.dataset.buy,p,e,t))}),r.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>ho(f.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const p=r===n;r.style.background=p?"var(--green)":"#fff",r.style.color=p?"#fff":"var(--gray-600)",r.style.borderColor=p?"var(--green)":"var(--gray-200)"}),l(n.dataset.tab)})})}async function yo(e,t,i,s){var p;const{state:c,toast:o}=s,a=t.find(g=>g.id===e);if(!a)return;const d=a.price,l=c.profile.credits||0,n=(p=a.card)==null?void 0:p.player;if(l<d){o("Crédits insuffisants","error");return}if(!confirm(`Acheter ${n==null?void 0:n.firstname} ${n==null?void 0:n.surname_encoded} pour ${d.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:g,error:f}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(f)throw new Error(f.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");c.profile.credits=l-d;const y=document.querySelector("[data-credits]")||document.querySelector(".credits-display");y&&(y.textContent=(l-d).toLocaleString("fr")+" cr."),o(`✅ ${n==null?void 0:n.surname_encoded} ajouté à ta collection !`,"success"),ct(i,s)}catch(g){o("❌ "+g.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function ho(e,t,i){const{toast:s}=i,{data:c}=await $.from("market_listings").select("card_id").eq("id",e).single();await $.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),s("Annonce retirée","success"),ct(t,i)}function vo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function bo(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((o,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${o.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${a+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${o.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${o.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${o.trophies_top1} 🥈${o.trophies_top2} 🥉${o.trophies_top3}</div>
              <div style="color:var(--gray-600)">${o.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function wo(e,{state:t,navigate:i,toast:s}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(o||[]).filter(r=>r.status==="finished"),l=(o||[]).filter(r=>r.status==="in_progress");function n(r){const p=r.home_id===c.id;p?r.home_score:r.away_score,p?r.away_score:r.home_score;const g=r.winner_id===c.id,f=r.home_score===r.away_score&&r.status==="finished",y=r.status!=="finished"?"…":f?"N":g?"V":"D",u=r.status!=="finished"||f?"#888":g?"#1A6B3C":"#c0392b";let h=a[r.mode]||r.mode;r.away_id===null&&!h.startsWith("IA")&&(h="IA");const v=r.home_id===c.id?r.away:r.home;let x;r.away_id===null?x=h:v?x=`${v.club_name||v.pseudo} (${v.pseudo})`:x="Adversaire";let k="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const B=new Date(r.created_at),m=B.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+B.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),A=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${x}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${m}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${A}</span>
        <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${y}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${l.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${l.map(n).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(n).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const X={user:null,profile:null,page:"home",params:{}};function De(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function _o(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function et(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ge(){if(!X.user)return;const{data:e}=await $.from("users").select("*").eq("id",X.user.id).single();e&&(X.profile=e)}const pt="mw_theme";function He(){return localStorage.getItem(pt)||"light"}function $o(e){var t;localStorage.setItem(pt,e),tt(e),(t=X.profile)!=null&&t.id&&$.from("users").update({theme:e}).eq("id",X.profile.id).then(()=>{})}function tt(e){document.documentElement.setAttribute("data-theme",e)}function Re(e,t={}){X.page=e,X.params=t,ii()}async function ii(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===X.page)});const t=document.getElementById("nav-credits");t&&X.profile&&(t.textContent=`💰 ${(X.profile.credits||0).toLocaleString("fr")}`);const i={state:X,navigate:Re,toast:De,openModal:_o,closeModal:et,refreshProfile:Ge};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',X.page){case"home":await At(e,i);break;case"collection":await mi(e,i);break;case"decks":await We(e,i);break;case"boosters":await ji(e,i);break;case"match":{(X.params&&X.params.matchMode||"vs_ai_easy")==="random"?await uo(e,i):await Ji(e,i);break}case"market":await mo(e,i);break;case"rankings":await bo(e,i);break;case"matches":await wo(e,i);break;default:await At(e,i)}}function ko(){const e=document.getElementById("app"),t=X.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(s=>{s.addEventListener("click",c=>{c.preventDefault(),Re(s.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Re("home")),document.getElementById("nav-credits").addEventListener("click",()=>Re("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=He()==="dark"?"light":"dark";$o(c),Bt(c)}),Bt(He())}function Bt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Eo(){tt(He()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&et()}),document.getElementById("modal-close").addEventListener("click",et);const{data:{session:e}}=await $.auth.getSession();if(!e){Dt(),kt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:De});return}X.user=e.user,await Ge(),Dt();try{const{data:t}=await $.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(s=>{i[s.formation]=s.links}),di(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!X.profile){li(document.getElementById("app"),{state:X,navigate:async()=>{await Ge(),Ft()},toast:De,refreshProfile:Ge});return}X.profile.theme&&X.profile.theme!==He()&&(localStorage.setItem(pt,X.profile.theme),tt(X.profile.theme)),Ft(),$.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(X.user=null,X.profile=null,document.getElementById("app").innerHTML="",kt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:De}))})}function Ke(){const e=document.getElementById("app");e&&(e.style.height=window.innerHeight+"px")}window.addEventListener("resize",Ke);window.addEventListener("orientationchange",()=>setTimeout(Ke,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ke);function Ft(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ke(),ko(),ii()}function Dt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Eo();
