import{s as $,F as tt,b as Me,c as Gt,l as ge,d as si}from"./formation-links-CDBKB_z4.js";function $t(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(l=>l.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),l=document.getElementById("login-password").value,a=document.getElementById("login-error");if(a.textContent="",!n||!l){a.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:d}=await $.auth.signInWithPassword({email:n,password:l});if(s.textContent="Se connecter",s.disabled=!1,d){a.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),l=document.getElementById("reg-password").value,a=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!n||!l||!a){s.textContent="Remplissez tous les champs.";return}if(l.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(l!==a){s.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:c}=await $.auth.signUp({email:n,password:l});if(d.textContent="Créer mon compte",d.disabled=!1,c){s.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function li(e,{state:t,navigate:i,toast:n,refreshProfile:l}){let a="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${a}">
          <span id="logo-initials" style="color:${a}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${a};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${a}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function d(){var j;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((j=document.getElementById("setup-club"))==null?void 0:j.value)||"MW",g=u.trim().split(" ").filter(Boolean),f=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=a),r&&(r.textContent=f,r.style.color=a)}document.getElementById("color1").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch1").style.background=a,d()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,d()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await $.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await $.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),g=document.getElementById("step3-finish");u.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:f}=await $.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:a,club_color2:s,credits:1e4});if(f)throw f;await di(t.user.id),await l(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){u.textContent=f.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function di(e){const{data:t}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),l=i.filter(c=>c.job!=="GK"),a=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const u=kt([...l]).slice(0,3);o.push(...u)}else o=kt([...i]).slice(0,4);o.forEach(r=>{a.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{a.push({owner_id:e,card_type:"game_changer",gc_type:c})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];a.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),a.length>0&&await $.from("cards").insert(a),await $.from("users").update({first_booster_opened:!0}).eq("id",e)}function kt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const ci="2026.06.22-2030";async function Et(e,{state:t,navigate:i,toast:n}){var a,s;const l=t.profile;l&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${l.club_color1};border:2px solid ${l.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${l.pseudo}</h3>
          <div class="level">Niveau ${l.level} · ${l.club_name}</div>
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
        ${l.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${ci}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",c=>{c.preventDefault(),i(d.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const c=d.dataset.action;if(c==="match-ai"){pi(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()}))}function pi(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(l=>`
            <div class="action-card" data-mode="${l.mode}" style="cursor:pointer">
              <div class="icon">${l.icon}</div>
              <div class="label">${l.label}</div>
              <div class="sub">${l.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",l=>{l.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{n(),e("match",{matchMode:l.dataset.mode})})})}const le={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ie(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const At=["ATT","MIL","DEF","GK"];function qt(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let l=n+1;l<i;l++){const a=e[n],s=e[l];if(!a||!s)continue;const d=a._col!==void 0&&s._col!==void 0&&a._col===s._col,c=a._col!==void 0&&s._col!==void 0&&Math.abs(a._col-s._col)===1,o=At.indexOf(a._line),r=At.indexOf(s._line),u=Math.abs(o-r)===1;(a._line===s._line&&c||d&&u)&&(a.country_code&&s.country_code&&a.country_code===s.country_code&&t++,a.club_id&&s.club_id&&a.club_id===s.club_id&&t++)}return t}function it(e,t={}){const i=e.reduce((a,s)=>{const d=s._line||s.job;return a+(Number(d==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),n=qt(e);let l=i+n;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:n,total:Math.max(0,l)}}function ot(e,t={}){const i=e.reduce((a,s)=>{const d=s._line||s.job;let c=0;return d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0,a+c+(s.boost||0)},0),n=qt(e);let l=i+n;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:n,total:Math.max(0,l)}}function nt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Rt(e,t,i="easy"){const n=e.filter(s=>!s.used);if(!n.length)return[];const l=[...n].sort((s,d)=>{const c=t==="attack"?ie(s,"ATT"):s._line==="GK"?ie(s,"GK"):ie(s,"DEF");return(t==="attack"?ie(d,"ATT"):d._line==="GK"?ie(d,"GK"):ie(d,"DEF"))-c});let a=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(a,l.length,3))}function ui(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Nt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},qe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},je=["GK","DEF","MIL","ATT"],fi=["Tous","GK","DEF","MIL","ATT"],gi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},rt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ot(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ae(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ve(e,t=""){var u,g;const i=e.player;if(!i)return"";const n=i.job||"ATT",l=qe[n],a=Nt[i.rarity]||"#ccc",s=Ae(i,n),d=i.job2?Ae(i,i.job2):null,c=i.job2?qe[i.job2]:null,o=Ot(i),r=rt[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${a};cursor:pointer;flex-shrink:0;position:relative
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${l}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${l}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${c}" stroke="white" stroke-width="1.5"/>
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
  </div>`}function It(e){const t=e.job||"ATT",i=Ae(e,t),n=rt[e.country_code]||e.country_code||"";return`
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
  </div>`}async function mi(e,t){const{state:i,navigate:n,toast:l,openModal:a,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(d||[]).filter(b=>b.card_type==="player"&&b.player),r=(d||[]).filter(b=>b.card_type==="game_changer"),u=(d||[]).filter(b=>b.card_type==="formation"),{data:g}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(g||[]).forEach(b=>{f[b.name]=b});const j=Object.keys(tt),p=Object.keys(le),h={};o.forEach(b=>{const x=b.player.id;h[x]=(h[x]||0)+1}),new Set(Object.keys(h).map(b=>String(b)));const T=new Set(u.map(b=>b.formation)),v=new Set(r.map(b=>b.gc_type));let m="player",w="Tous",B="",C=!1;function y(){return[...o].sort((b,x)=>{const L=je.indexOf(b.player.job),k=je.indexOf(x.player.job);return L!==k?L-k:(b.player.surname_encoded||"").localeCompare(x.player.surname_encoded||"")})}function M(){return[...c||[]].sort((b,x)=>{const L=je.indexOf(b.job),k=je.indexOf(x.job);return L!==k?L-k:(b.surname_encoded||"").localeCompare(x.surname_encoded||"")})}function R(){return y().filter(b=>{const x=b.player,L=w==="Tous"||x.job===w,k=!B||`${x.firstname} ${x.surname_encoded}`.toLowerCase().includes(B);return L&&k})}function P(){return M().filter(b=>{const x=w==="Tous"||b.job===w,L=!B||`${b.firstname} ${b.surname_encoded}`.toLowerCase().includes(B);return x&&L})}e.innerHTML=`
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
  </div>`;function U(){const b=document.getElementById("col-filters");b&&(m==="player"?(b.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${B}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${fi.map(x=>`
            <button class="filter-btn" data-job="${x}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${x===w?"var(--green)":"var(--gray-200)"};
                background:${x===w?"var(--green)":"#fff"};
                color:${x===w?"#fff":"var(--gray-600)"}">
              ${x}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${C?"var(--yellow)":"var(--gray-200)"};
              background:${C?"var(--yellow)":"#fff"};
              color:${C?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${C?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",x=>{B=x.target.value.toLowerCase(),A()}),e.querySelectorAll(".filter-btn").forEach(x=>{x.addEventListener("click",()=>{w=x.dataset.job,U(),A()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{C=!C,U(),A()})):(b.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${C?"var(--yellow)":"var(--gray-200)"};
              background:${C?"var(--yellow)":"#fff"};
              color:${C?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${C?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{C=!C,U(),A()})))}function A(){const b=document.getElementById("col-grid");b&&(m==="player"?I(b):m==="formation"?q(b):S(b))}function H(b,x,L,k,_){_=_||"#7a28b8";const G=document.getElementById("col-grid"),F=document.getElementById("col-big");if(!G||!F)return;var O=0;function D(){F.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+x(b[O])+"</div>";var Y=F.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Y&&Y.addEventListener("click",function(){k(b[O])}),requestAnimationFrame(function(){var W=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!W||!F)){var J=F.clientHeight-8,te=F.clientWidth-24,ne=W.offsetHeight,ae=W.offsetWidth;if(ne>0&&ae>0&&J>40){var se=Math.min(J/ne,te/ae,1);W.style.transform="scale("+se.toFixed(3)+")",W.style.transformOrigin="top center"}}}),G.innerHTML=b.map(function(W,J){return'<div class="col-mini-item" data-idx="'+J+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(J===O?_:"transparent")+';transition:border-color .15s;overflow:hidden">'+L(W,J===O)+"</div>"}).join(""),G.querySelectorAll(".col-mini-item").forEach(function(W){W.addEventListener("click",function(){O=Number(W.dataset.idx),D(),W.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}D()}function N(b){var x=.54,L=Math.round(140*x),k=Math.round(310*x),_;if(!b||b._fake){var G=b?b.player:null;if(!G)return"";_=It(G)}else _=Ve(b,"");return'<div style="width:'+L+"px;height:"+k+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+x+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+_+"</div></div>"}function V(b,x,L){x=x||100,L=L||140;var k=Me[b]||{},_={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},G=Math.max(3,Math.round(x*.06)),F=Object.entries(k).map(function(D){var Y=D[0],W=D[1],J=Y.replace(/\d+$/,""),te=_[J]||"#888",ne=Math.round(W.x*x),ae=Math.round(W.y*L);return'<circle cx="'+ne+'" cy="'+ae+'" r="'+G+'" fill="'+te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),O=Math.max(1,Math.round(x/50));return'<svg viewBox="0 0 '+x+" "+L+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+x+'" height="'+L+'" fill="#1A6B3C"/><rect x="'+Math.round(x*.2)+'" y="'+Math.round(L*.02)+'" width="'+Math.round(x*.6)+'" height="'+Math.round(L*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+O+'"/><line x1="0" y1="'+Math.round(L*.5)+'" x2="'+x+'" y2="'+Math.round(L*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+O+'"/><ellipse cx="'+Math.round(x*.5)+'" cy="'+Math.round(L*.5)+'" rx="'+Math.round(x*.18)+'" ry="'+Math.round(L*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+O+'"/><rect x="'+Math.round(x*.2)+'" y="'+Math.round(L*.82)+'" width="'+Math.round(x*.6)+'" height="'+Math.round(L*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+O+'"/>'+F+"</svg>"}function z(b,x,L){var k=L>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+L+"</div>":"",_=x?'data-form-id="'+x.id+'"':"",G=b.length>7?14:b.length>5?16:19,F=!!x;return"<div "+_+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(F?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(F?"":"filter:grayscale(1);opacity:0.5")+'">'+k+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(F?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+G+"px;font-weight:900;color:"+(F?"#1A6B3C":"#aaa")+';line-height:1">'+b+'</div></div><div style="flex:1;overflow:hidden;background:'+(F?"#1A6B3C":"#ccc")+'">'+V(b,140,220)+"</div></div>"}function E(b,x){var L=.54,k=Math.round(140*L),_=Math.round(305*L),G=Math.round(_*.22),F=_-G,O=b.length>7?5:7,D=V(b,k,F),Y=x?"1.5px solid #2a7a40":"1px solid #ddd",W=x?"":"filter:grayscale(1);opacity:0.45;",J=x?"#1A6B3C":"#bbb",te="#fff";return'<div style="width:'+k+"px;height:"+_+"px;border-radius:6px;border:"+Y+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+W+'"><div style="height:'+G+"px;background:"+J+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+O+"px;font-weight:900;color:"+te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(k-4)+'px">'+b+'</span></div><div style="height:'+F+'px;overflow:hidden;flex-shrink:0">'+D+"</div></div>"}function I(b){if(C){const x=P();if(!x.length){b.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const L=x.map(k=>o.find(_=>_.player.id===k.id)||{_fake:!0,player:k,id:"fake-"+k.id});H(L,k=>k._fake?It(k.player):Ve(k,""),k=>k._fake?N({player:k.player,id:"x",_fake:!0}):N(k),k=>{k._fake||Tt(k,o,h,t)},"#1A6B3C")}else{const x=R();if(!x.length){b.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const L={},k=[];x.forEach(_=>{L[_.player.id]||(L[_.player.id]=!0,k.push(_))}),H(k,_=>{const G=h[_.player.id]||1,F=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",D=o.filter(Y=>Y.player.id===_.player.id&&Y.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ve(_,F+D)},_=>N(_),_=>Tt(_,o,h,t),"#1A6B3C")}}function q(b){const x=C?j:[...T];if(!x.length){b.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const L=x.map(k=>({formation:k,card:u.find(_=>_.formation===k)||null,owned:T.has(k)}));H(L,({formation:k,card:_,owned:G})=>z(k,G?_:null,G?u.filter(F=>F.formation===k).length:0),({formation:k,owned:_})=>E(k,_),({card:k,owned:_})=>{_&&k&&yi(k,u,t,a)},"#1A6B3C")}function S(b){const x=Object.keys(f),L=C?x.length?x:p:[...v];if(!L.length){b.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const k=L.map(_=>({type:_,gc:le[_]||{icon:"⚡",desc:""},def:f[_]||null,owned:v.has(_),card:r.find(G=>G.gc_type===_)||null}));H(k,({type:_,gc:G,def:F,owned:O,card:D})=>{const Y=O?r.filter(ze=>ze.gc_type===_).length:0,W=Y>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Y}</div>`:"",J=(F==null?void 0:F.gc_type)==="ultra_game_changer",te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ne={purple:"#b06ce0",light_blue:"#00d4ef"},ae=te[F==null?void 0:F.color]||te.purple,se=ne[F==null?void 0:F.color]||ne.purple,me=(F==null?void 0:F.effect)||G.desc||"",xe=F!=null&&F.image_url?`/manager-wars/icons/${F.image_url}`:null;return O&&D?`<div data-gc-id="${D.id}" data-gc-type="${_}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${W}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${_.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${J?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${G.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${me.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${_}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${G.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:_,gc:G,def:F,owned:O})=>O?(()=>{const D=Math.round(75.60000000000001),Y=Math.round(310*.54),W=Math.round(Y*.65),J=Math.round(Y*.18),te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ne={purple:"#9b59b6",light_blue:"#00bcd4"},ae=te[F==null?void 0:F.color]||te.purple,se=ne[F==null?void 0:F.color]||ne.purple,me=F!=null&&F.image_url?`/manager-wars/icons/${F.image_url}`:null;return`<div style="width:${D}px;height:${Y}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${J}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${D-6}px">${_}</span></div><div style="height:${W}px;display:flex;align-items:center;justify-content:center">${me?`<img src="${me}" style="max-width:${D-8}px;max-height:${W-4}px;object-fit:contain">`:`<span style="font-size:24px">${G.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((F==null?void 0:F.effect)||G.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const D=Math.round(75.60000000000001),Y=Math.round(310*.54);return`<div style="width:${D}px;height:${Y}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${G.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${_}</span></div>`})(),({type:_,owned:G,def:F})=>{G&&xi(_,F,a)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(b=>{b.addEventListener("click",()=>{m=b.dataset.tab,w="Tous",B="",C=!1,e.querySelectorAll(".col-tab-btn").forEach(x=>{const L=x.dataset.tab===m;x.style.borderBottomColor=L?"var(--green)":"transparent",x.style.color=L?"var(--green)":"var(--gray-600)"}),U(),A()})}),U(),A()}function xi(e,t,i){const n=le[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=a[t==null?void 0:t.color]||a.purple,c=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${l?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _e=1e3;function yi(e,t,i,n){var p,h,T;const{state:l,toast:a,closeModal:s,navigate:d,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const v=Me[o]||{},m=tt[o]||[],w=290,B=360,C=20;function y(R){const P=v[R];return P?{x:P.x*w,y:P.y*B}:null}let M=`<svg width="${w}" height="${B}" viewBox="0 0 ${w} ${B}" xmlns="http://www.w3.org/2000/svg">`;for(const[R,P]of m){const U=y(R),A=y(P);!U||!A||(M+=`<line x1="${U.x}" y1="${U.y}" x2="${A.x}" y2="${A.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const R of Object.keys(v)){const P=y(R);if(!P)continue;const U=R.replace(/\d+/,""),A=r[U]||"#555";M+=`<circle cx="${P.x}" cy="${P.y}" r="${C}" fill="${A}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${P.x}" y="${P.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${U}</text>`}return M+="</svg>",M}const g=t.filter(v=>v.formation===o),f=g.length,j=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${_e.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${j?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${_e}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${_e.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=g.find(w=>!w.is_for_sale)||g[0];if(!v){a("Aucune carte à vendre","error");return}const{error:m}=await $.from("cards").delete().eq("id",v.id);if(m){a(m.message,"error");return}await $.from("users").update({credits:(l.profile.credits||0)+_e}).eq("id",l.profile.id),await c(),a(`+${_e.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),d("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){a("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",e.id),await $.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:v}),a("Carte mise en vente sur le marché !","success"),s(),d("collection")}),(T=document.getElementById("cancel-sell-form-btn"))==null||T.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),s(),d("collection")})}async function Tt(e,t,i,n){var M,R,P,U,A,H;const{state:l,toast:a,openModal:s,closeModal:d,navigate:c,refreshProfile:o}=n,r=e.player,u=t.filter(N=>N.player.id===r.id),g=u.length,f=gi[r.rarity]||1e3,j=r.rarity!=="legende",p=Ot(r),h=Ae(r,r.job),T=r.job2?Ae(r,r.job2):null,v=qe[r.job]||"#1A6B3C",m=r.job2?qe[r.job2]:null,w=Nt[r.rarity]||"#ccc",B=rt[r.country_code]||r.country_code||"",{data:C}=await $.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),y=C&&C.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${C.map(N=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${N.club_name} <span style="color:var(--gray-600)">(${N.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${N.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${N.source==="booster"?"Booster":N.price?N.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";s(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${w};flex-shrink:0">
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
            ${T!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${m}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${T}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${B}</div>
            ${(M=r.clubs)!=null&&M.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((R=r.clubs)==null?void 0:R.encoded_name)||"").slice(0,6)}</div>`}
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
    ${j&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(P=document.getElementById("close-detail"))==null||P.addEventListener("click",d),(U=document.getElementById("direct-sell-btn"))==null||U.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const N=u.find(z=>!z.is_for_sale)||u[0];if(!N){a("Aucune carte à vendre","error");return}const{error:V}=await $.from("cards").delete().eq("id",N.id);if(V){a(V.message,"error");return}await $.from("users").update({credits:(l.profile.credits||0)+f}).eq("id",l.profile.id),await o(),a(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),c("collection")}),(A=document.getElementById("market-sell-btn"))==null||A.addEventListener("click",async()=>{const N=parseInt(document.getElementById("sell-price").value);if(!N||N<1){a("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:N}).eq("id",e.id),await $.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:N}),a("Carte mise en vente sur le marché !","success"),d(),c("collection")}),(H=document.getElementById("cancel-sell-btn"))==null||H.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),d(),c("collection")})}const Re={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ue={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function He(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Pt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Ht(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function hi(e,t=44,i=58){var f;const n=e?He(e):null,l=e?Ht(e):null,a=Pt(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",d=ue[s]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),g=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${a?`<img src="${a}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${l?`<img src="${l}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Ye(e,t){const{state:i,navigate:n,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(a==null?void 0:a.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(a==null?void 0:a.length)>0?a.map(s=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((a==null?void 0:a.length)||0)+1}`);if(!s)return;const{data:d,error:c}=await $.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(c){l(c.message,"error");return}l("Deck créé !","success"),Lt(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Lt(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",s.dataset.name);if(!d||d===s.dataset.name)return;const{error:c}=await $.from("decks").update({name:d}).eq("id",s.dataset.rename);if(c){l(c.message,"error");return}l("Deck renommé !","success"),Ye(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:d}=await $.from("decks").delete().eq("id",s.dataset.delete);if(d){l(d.message,"error");return}l("Deck supprimé.","success"),Ye(e,t)})})}async function Lt(e,t,i){const{state:n,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await $.from("decks").select("*").eq("id",e).single(),{data:s}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),d=(s||[]).filter(f=>f.card_type==="player"&&f.player),c=(s||[]).filter(f=>f.card_type==="formation"),o=c.map(f=>f.formation).filter(Boolean),{data:r}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=a.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const g={deckId:e,name:a.name,formation:u,formationCardId:a.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:c,availableFormations:o};(r||[]).forEach(f=>{f.is_starter?g.slots[f.position]=f.card_id:g.subs.includes(f.card_id)||g.subs.push(f.card_id)}),ve(t,g,i)}function ve(e,t,i){var c;const{navigate:n}=i;Re[t.formation];const l=Mt(t.formation),a=l.filter(o=>t.slots[o]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Re),d=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${a}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${a<11?"disabled":""}>
        ${a<11?`Placez encore ${11-a} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,vi(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=Mt(t.formation),u={};r.forEach(g=>{t.slots[g]&&(u[g]=t.slots[g])}),t.slots=u,ve(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>_i(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),ve(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{wi(t,e,i)})}function vi(e,t,i,n){const l=e.querySelector("#deck-field");if(!l)return;const a=Me[t.formation]||{},s=Gt(t.formation)||[],d={};for(const T of i){const v=t.slots[T],m=v?t.playerCards.find(w=>w.id===v):null;d[T]=m?m.player:null}const c=300,o=300,r=48,u=64,g=13,f=16,j=38;function p(T){const v=a[T];return v?{x:v.x*c,y:v.y*o}:null}let h="";for(const[T,v]of s){const m=p(T),w=p(v);if(!m||!w)continue;const B=d[T]?{...d[T],club_id:d[T].club_id,country_code:d[T].country_code,rarity:d[T].rarity}:null,C=d[v]?{...d[v],club_id:d[v].club_id,country_code:d[v].country_code,rarity:d[v].rarity}:null,y=ge(B,C);y==="#ff3333"||y==="#cc2222"?h+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${y}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${y}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${y}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const T of i){const v=p(T);if(!v)continue;const m=d[T],w=T.replace(/\d+/,""),B=ue[w]||"#555",C=(v.x-r/2).toFixed(1),y=(v.y-u/2).toFixed(1),M={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[m==null?void 0:m.rarity]||"#aaa";if(m){const R=He(m),P=Ht(m),U=Pt(m.country_code),A=Number(w==="GK"?m.note_g:w==="DEF"?m.note_d:w==="MIL"?m.note_m:m.note_a)||0,H=u-g-f;h+=`<defs><clipPath id="dcp-${T}"><rect x="${C}" y="${(v.y-u/2+g).toFixed(1)}" width="${r}" height="${H}"/></clipPath></defs>`,h+=`<rect x="${C}" y="${y}" width="${r}" height="${u}" rx="5" fill="${B}"/>`,R&&(h+=`<image href="${R}" x="${C}" y="${(v.y-u/2+g).toFixed(1)}" width="${r}" height="${H}" clip-path="url(#dcp-${T})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${C}" y="${y}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${v.x.toFixed(1)}" y="${(v.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.surname_encoded||"").slice(0,9)}</text>`;const N=(v.y+u/2-f).toFixed(1);h+=`<rect x="${C}" y="${N}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,U&&(h+=`<image href="${U}" x="${(v.x-21).toFixed(1)}" y="${(v.y+u/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${v.x.toFixed(1)}" y="${(v.y+u/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`,P&&(h+=`<image href="${P}" x="${(v.x+r/2-14).toFixed(1)}" y="${(v.y+u/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${C}" y="${y}" width="${r}" height="${u}" rx="5" fill="none" stroke="${M}" stroke-width="2"/>`}else h+=`<rect x="${C}" y="${y}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${v.x.toFixed(1)}" y="${v.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${v.x.toFixed(1)}" y="${(v.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${w}</text>`;h+=`<rect x="${C}" y="${y}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${T}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-j} ${-j} ${c+j*2} ${o+j*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(T=>{T.addEventListener("click",()=>bi(T.dataset.pos,t,e,n))})}function bi(e,t,i,n){var g,f,j;const{openModal:l,closeModal:a}=n,s=e.replace(/\d+/,""),d=t.slots[e],c=d?t.playerCards.find(p=>p.id===d):null;(g=c==null?void 0:c.player)==null||g.id;const o=new Set;Object.entries(t.slots).forEach(([p,h])=>{var v;if(p===e||!h)return;const T=t.playerCards.find(m=>m.id===h);(v=T==null?void 0:T.player)!=null&&v.id&&o.add(T.player.id)}),t.subs.forEach(p=>{var T;const h=t.playerCards.find(v=>v.id===p);(T=h==null?void 0:h.player)!=null&&T.id&&o.add(h.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const h=p.player;return!(h.job===s||h.job2===s)||o.has(h.id)||r.has(h.id)?!1:(r.add(h.id),!0)});u.sort((p,h)=>{const T=s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a;return(s==="GK"?h.player.note_g:s==="DEF"?h.player.note_d:s==="MIL"?h.player.note_m:h.player.note_a)-T}),l(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var w,B;const h=p.player,T=s==="GK"?h.note_g:s==="DEF"?h.note_d:s==="MIL"?h.note_m:h.note_a,v=He(h),m={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[s]}">
            ${v?`<img src="${v}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ue[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(w=h.clubs)!=null&&w.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=h.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ue[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${m};flex-shrink:0">
            ${T}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",a),(j=document.getElementById("remove-player"))==null||j.addEventListener("click",()=>{delete t.slots[e],a(),ve(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,a(),ve(i,t,n)})})}function wi(e,t,i){var c;const{openModal:n,closeModal:l}=i,a=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(g=>g.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&a.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(g=>g.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&a.add(r.player.id)});const s=new Set,d=e.playerCards.filter(o=>{var r,u,g;return a.has((r=o.player)==null?void 0:r.id)||s.has((u=o.player)==null?void 0:u.id)?!1:(s.add((g=o.player)==null?void 0:g.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(o=>{var f;const r=o.player,u=He(r),g=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),l(),ve(t,e,i)})})}async function _i(e,t){const{state:i,toast:n,navigate:l}=t,a=e.formationCards.find(c=>c.formation===e.formation),s=(a==null?void 0:a.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{d.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{d.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),d.length>0){const{error:c}=await $.from("deck_cards").insert(d);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),l("decks")}function Mt(e){const t=Re[e]||Re["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function $i(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function ki(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,l)=>n+Number(l.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Ut=()=>Object.keys(Me),Ei=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],We={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ai(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const zt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ii={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ti={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ct(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Li(e){var r,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=zt[i],l=Ii[t.rarity]||"#ccc",a=Ct(t,i),s=t.job2?Ct(t,t.job2):null,d=t.job2?zt[t.job2]:null,c=Ai(t),o=Ti[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${l};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${n}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${n}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${d}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
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
  </div>`}function Mi(e){var l;const t={};(e.rates||[]).forEach(a=>{t[a.card_type]=(t[a.card_type]||0)+Number(a.percentage||0)});const i=((l=Object.entries(t).sort((a,s)=>s[1]-a[1])[0])==null?void 0:l[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function zi(e,{state:t,navigate:i,toast:n}){var s;const l=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let a=[];try{a=(await $i()).map(Mi)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}a.length||(a=Ei.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${l.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${a.map(d=>{const c=d.cost===0||l>=d.cost;return`<div class="booster-card ${c?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const c=a.find(o=>o.id===d.dataset.booster);if(c){d.style.opacity="0.5",d.style.pointerEvents="none";try{await Ci(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",c=>{c.stopPropagation();const o=a.find(r=>r.id===d.dataset.boosterId);Ri(o)})})}async function Ci(e,{state:t,toast:i,navigate:n,container:l}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Pi()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:a}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((a||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),d=new Set((a||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await jt(t.profile,e);else{const u=e.type||"player";u==="player"?c=await Bi(t.profile,e.cardCount,e.cost):u==="game_changer"?c=await Fi(t.profile,e.cardCount,e.cost):u==="formation"?c=await Di(t.profile,e.cost):c=await jt(t.profile,e)}c.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=s.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=d.has(u.formation))});const{data:o}=await $.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),Gi(c,e,n)}function ji(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function he(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Si(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>he(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>he(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&he(n)>=6),i.length||(i=e.filter(n=>he(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&he(n)>=1&&he(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function jt(e,t){if(t.cost>0){const{error:n}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const l=ki(t.rates);if(l){if(l.card_type==="player"){const a=g=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[g]||g,s=l.rarity?a(l.rarity):null;let d=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);s&&(d=d.eq("rarity",s));const{data:c}=await d;let o=c||[];if((l.note_min||l.note_max)&&(o=o.filter(g=>{const f=Math.max(Number(g.note_g)||0,Number(g.note_d)||0,Number(g.note_m)||0,Number(g.note_a)||0);return(!l.note_min||f>=l.note_min)&&(!l.note_max||f<=l.note_max)})),o.length||(l.note_min||l.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",l.note_min,"-",l.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:u}=await $.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(i.push({...u,player:r}),$.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(l.card_type==="game_changer"){const{data:a}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),s=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=s[Math.floor(Math.random()*s.length)].name,{data:o}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(l.card_type==="formation"){const a=Ut(),s=a[Math.floor(Math.random()*a.length)],{data:d}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();d!=null&&d[0]&&i.push(d[0])}}}return i}async function Bi(e,t,i){if(i>0){const{error:o}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=n.filter(o=>o.job==="GK"),a=n.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&l.length>0,d=[];for(let o=0;o<t;o++){const r=o===0&&s?l:o===0?a:n,u=ji(),g=Si(r,u);g&&d.push(g)}s&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await $.from("cards").insert(d.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{$.rpc("record_transfer",{p_card_id:o.id,p_player_id:d[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((o,r)=>({...c[r],player:o}))}async function Fi(e,t,i){const{error:n}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:l}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),a=l!=null&&l.length?l:Object.keys(We).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=a[Math.floor(Math.random()*a.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:d,error:c}=await $.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(d||[]).map(r=>{const u=l==null?void 0:l.find(g=>g.name===r.gc_type||g.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Di(e,t){const{error:i}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=Ut(),l=n[Math.floor(Math.random()*n.length)],{data:a,error:s}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:l}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),a||[]}function Gi(e,t,i){var U;if(!e||e.length===0){const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",A.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(A),(U=A.querySelector("#anim-close-err"))==null||U.addEventListener("click",()=>A.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let l=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=A=>A.touches&&A.touches[0]?A.touches[0].clientX:A.clientX;function o(A){l||(d=!0,s.style.opacity="1",r(A))}function r(A){if(!d||l)return;const H=a.getBoundingClientRect(),N=c(A)-H.left,V=Math.max(0,Math.min(1,N/H.width));s.style.width=V*H.width+"px",V>=.82&&g()}function u(){l||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{l||(s.style.transition="")},220))}function g(){var H;if(l)return;l=!0,d=!1,s.style.width="100%",s.style.opacity="1",(H=document.getElementById("cut-flash"))==null||H.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const A=document.getElementById("cut-hint");A&&(A.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",h(0)},620)}a.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),a.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let f=0,j=!1;const p=new Set;function h(A){f=A,document.getElementById("reveal-phase").style.display="flex",T(),v(A,0),y()}function T(){const A=document.getElementById("card-dots");A&&(A.innerHTML=e.map((H,N)=>`<div class="card-dot" data-i="${N}" style="width:8px;height:8px;border-radius:50%;background:${N===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),A.querySelectorAll(".card-dot").forEach(H=>H.addEventListener("click",()=>w(parseInt(H.dataset.i)))))}function v(A,H){var b;const N=e[A],V=document.getElementById("card-counter"),z=document.getElementById("card-track");V&&(V.textContent=`Carte ${A+1} / ${e.length}`);const E=N.card_type==="player"&&((b=N.player)==null?void 0:b.rarity)==="legende",I=!p.has(A);p.add(A);let q=0;if(N.card_type==="player"&&N.player){const x=N.player,L=x.job||"ATT";q=Number(L==="GK"?x.note_g:L==="DEF"?x.note_d:L==="MIL"?x.note_m:x.note_a)||0}const S=x=>{z.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${E?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${qi(N)}</div>
          ${N.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const L=document.getElementById("current-card-wrap");H!==0?(L.style.transition="none",L.style.transform=`translateX(${H>0?100:-100}%)`,requestAnimationFrame(()=>{L.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",L.style.transform="translateX(0)"})):L.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),x||E?R():P(),T()};I&&q>6&&N.card_type==="player"&&N.player?m(N,()=>S(!0)):S(!1)}function m(A,H){var S;j=!0;const N=A.player,V=`https://flagsapi.com/${N.country_code}/flat/64.png`,z=(S=N.clubs)==null?void 0:S.logo_url,E=document.getElementById("walkout-overlay"),I=document.getElementById("walkout-stage");if(!E||!I){j=!1,H();return}E.style.display="flex";const q=()=>{const b=I.firstElementChild;b&&(b.classList.remove("wo-in"),b.classList.add("wo-out"))};I.innerHTML=`<img class="wo-in" src="${V}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(q,2e3),setTimeout(()=>{var b;I.innerHTML=z?`<img class="wo-in" src="${z}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((b=N.clubs)==null?void 0:b.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(q,4450),setTimeout(()=>{E.style.display="none",I.innerHTML="",j=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),H()},4900)}function w(A){if(j||A<0||A>=e.length||A===f)return;const H=A>f?1:-1;f=A,v(A,H)}function B(){w(f+1)}function C(){w(f-1)}function y(){const A=document.getElementById("card-viewport");if(!A||A._swipeBound)return;A._swipeBound=!0;let H=0,N=0,V=0,z=!1;const E=x=>x.touches?x.touches[0].clientX:x.clientX,I=x=>x.touches?x.touches[0].clientY:x.clientY,q=x=>{z=!0,H=E(x),N=I(x),V=0},S=x=>{if(!z)return;V=E(x)-H;const L=I(x)-N;if(Math.abs(V)<Math.abs(L))return;const k=document.getElementById("current-card-wrap");k&&(k.style.transition="none",k.style.transform=`translateX(${V*.6}px) rotate(${V*.02}deg)`)},b=()=>{if(!z)return;z=!1;const x=document.getElementById("current-card-wrap"),L=55;V<=-L&&f<e.length-1?B():V>=L&&f>0?C():x&&(x.style.transition="transform .2s ease",x.style.transform="translateX(0)")};A.addEventListener("pointerdown",q),A.addEventListener("pointermove",S),A.addEventListener("pointerup",b),A.addEventListener("pointercancel",b),A.addEventListener("touchstart",q,{passive:!0}),A.addEventListener("touchmove",S,{passive:!0}),A.addEventListener("touchend",b),A.addEventListener("click",x=>{if(Math.abs(V)>8)return;const L=A.getBoundingClientRect();x.clientX-L.left>L.width/2?B():C()})}let M=null;function R(){const A=document.getElementById("fireworks-canvas");if(!A)return;A.width=window.innerWidth,A.height=window.innerHeight;const H=A.getContext("2d"),N=[];function V(){const E=Math.random()*A.width,I=Math.random()*A.height*.6,q=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],S=q[Math.floor(Math.random()*q.length)];for(let b=0;b<60;b++){const x=Math.PI*2/60*b,L=2+Math.random()*5;N.push({x:E,y:I,vx:Math.cos(x)*L,vy:Math.sin(x)*L,alpha:1,color:S,size:2+Math.random()*3})}}V(),M=setInterval(V,600);function z(){if(document.getElementById("fireworks-canvas")){H.clearRect(0,0,A.width,A.height);for(let E=N.length-1;E>=0;E--){const I=N[E];if(I.x+=I.vx,I.y+=I.vy+.08,I.vy*=.98,I.alpha-=.018,I.alpha<=0){N.splice(E,1);continue}H.globalAlpha=I.alpha,H.fillStyle=I.color,H.beginPath(),H.arc(I.x,I.y,I.size,0,Math.PI*2),H.fill()}H.globalAlpha=1,(M!==null||N.length>0)&&requestAnimationFrame(z)}}z()}function P(){M!==null&&(clearInterval(M),M=null);const A=document.getElementById("fireworks-canvas");A&&A.getContext("2d").clearRect(0,0,A.width,A.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{P(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{P(),n.remove(),i("boosters")})}function qi(e){var t,i;if(e.card_type==="player"&&e.player)return Li(e);if(e.card_type==="game_changer"){const n=e._gcDef,l=(n==null?void 0:n.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=a[n==null?void 0:n.color]||a.purple,c=s[n==null?void 0:n.color]||s.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=We[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((i=We[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${l?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Ri(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const l={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},a={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${a[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${l[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",s=>{s.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Ni()}function Ni(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Oi="simulation",Kt="VOTRE_ZONE_ID";function Pi(){switch(Oi){case"propellerads":return Hi();case"adsense":return Ui();default:return at()}}function at(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const l=document.getElementById("ad-cd"),a=document.getElementById("ad-skip");l&&(l.textContent=i),a&&(a.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),a&&(a.disabled=!1,a.style.cssText=a.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),a==null||a.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Hi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(at());window.propeller.push({zone_id:Kt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Ui(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(at());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Kt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const be={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},we={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function fe(e,t,i,n,l){var a;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(a=document.getElementById("msg-btn"))==null||a.addEventListener("click",l)}function oe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xe(e,t){var n,l;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((l=i.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ne(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Vt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Oe(e,t){const i=be[t]||be["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const d=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),c=Ne(d.length);d.forEach((o,r)=>{o._col=c[r]}),n[s]=d}return n}const a=[...e];for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let o=0;o<i[s];o++){let r=a.findIndex(u=>u.job===s);if(r===-1&&(r=a.findIndex(u=>u.job2===s)),r===-1&&(r=0),a[r]){const u={...a[r],_line:s};d.push(u),a.splice(r,1)}}const c=Ne(d.length);d.forEach((o,r)=>{o._col=c[r]}),n[s]=d}return n}function Yt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function de(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Wt(e,t,i){const l=new Set,a=t.filter(r=>{const u=r.gc_type||r.id;return l.has(u)?!1:(l.add(u),!0)});let s=[];function d(r,u){const g=r._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},j={purple:"#9b59b6",light_blue:"#00bcd4"},p=f[g==null?void 0:g.color]||f.purple,h=j[g==null?void 0:g.color]||j.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":h};background:${p};
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var u,g,f;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${a.map(j=>{const p=s.find(h=>h.gc_type===j.gc_type);return d(j,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(j=>{j.addEventListener("click",()=>{const p=j.dataset.id,h=a.find(v=>v.id===p);if(!h)return;const T=s.findIndex(v=>v.gc_type===h.gc_type);T>-1?s.splice(T,1):s.length<3&&s.push(h),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&c(s)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>c([])),(f=e.querySelector("#gc-reset"))==null||f.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}async function Ki(e,t,i){const{state:n,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!a||a.length===0){fe(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const s=a.map(r=>r.id),{data:d}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let c=0;function o(){var v,m,w,B,C;const r=a[c],u=(d||[]).filter(y=>y.deck_id===r.id),g=u.filter(y=>{var M;return y.is_starter&&((M=y.card)==null?void 0:M.player)}).map(y=>Xe(y.card,y.position)),f=u.find(y=>{var M;return((M=y.card)==null?void 0:M.card_type)==="formation"}),j=r.formation||((v=f==null?void 0:f.card)==null?void 0:v.formation)||"4-4-2",p=g.length>=11?Oe(g,j):null,h=g.length>=11;Yt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${j} · ${g.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===a.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===a.length-1?"0.1":"0.3"});color:${c===a.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===a.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Te(p,j,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${a.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${a.map((y,M)=>`<div style="width:7px;height:7px;border-radius:50%;background:${M===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const M=e.querySelector(".deck-preview-wrap svg");M&&(M.removeAttribute("width"),M.removeAttribute("height"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",M.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(m=document.getElementById("prev-deck"))==null||m.addEventListener("click",()=>{c>0&&(c--,o())}),(w=document.getElementById("next-deck"))==null||w.addEventListener("click",()=>{c<a.length-1&&(c++,o())}),(B=document.getElementById("validate-deck"))==null||B.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:r.id})}),(C=document.getElementById("cancel-deck-select"))==null||C.addEventListener("click",()=>{de(e),l("home")});const T=document.getElementById("deck-swipe-zone");if(T){let y=0,M=0;T.addEventListener("touchstart",R=>{y=R.touches[0].clientX,M=R.touches[0].clientY},{passive:!0}),T.addEventListener("touchend",R=>{const P=R.changedTouches[0].clientX-y,U=R.changedTouches[0].clientY-M;Math.abs(P)<40||Math.abs(P)<Math.abs(U)||(P<0&&c<a.length-1?(c++,o()):P>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function Xt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function pe(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:oe(e),l=Xt(e),a=e._line||e.job||"MIL",s=we[a]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(ie(e,a))||0)+(e.boost||0),o=Jt(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),g=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Je(e==null?void 0:e.country_code)?`<img src="${Je(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${l?`<img src="${l}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ke(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((a,s)=>{if(l+=pe(a,40,52),s<n.length-1){const d=ge(a,n[s+1]);l+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Je(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Jt(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ie(e,t,i,n,l=310,a=310){const s=Me[t]||{},d=Gt(t)||tt[t]||[],c={},o=["ATT","MIL","DEF","GK"];for(const v of o)(e[v]||[]).forEach((w,B)=>{c[`${v}${B+1}`]=w});function r(v){const m=s[v];return m?{x:m.x*l,y:m.y*a}:null}let u="";for(const[v,m]of d){const w=r(v),B=r(m);if(!w||!B)continue;const C=c[v],y=c[m],M=ge(C,y);M==="#00ff88"||M==="#FFD700"?(u+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${M}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,u+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${M}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):u+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${M}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,f=64,j=13,p=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[v,m]of Object.entries(c)){const w=r(v);if(!w||!m)continue;const B=v.replace(/[0-9]/g,""),C=we[B]||"#555",y=i==="attack"&&["MIL","ATT"].includes(B)&&!m.used||i==="defense"&&["GK","DEF","MIL"].includes(B)&&!m.used,M=n.includes(m.cardId);let R;i==="attack"?R=B==="MIL"?Number(m.note_m)||0:Number(m.note_a)||0:i==="defense"?R=B==="GK"?Number(m.note_g)||0:B==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0:R=Number(B==="GK"?m.note_g:B==="DEF"?m.note_d:B==="MIL"?m.note_m:m.note_a)||0,R=R+(m.boost||0);const P=(w.x-g/2).toFixed(1),U=(w.y-f/2).toFixed(1),A=m.used?.25:1,H=h[m==null?void 0:m.rarity]||h.normal,N=M?"#ff3030":H,V=M?3:(m==null?void 0:m.rarity)==="légende"||(m==null?void 0:m.rarity)==="pépite"?2.5:2,z=f-j-p;u+=`<defs><clipPath id="cp-${v}"><rect x="${P}" y="${(w.y-f/2+j).toFixed(1)}" width="${g}" height="${z}"/></clipPath></defs>`,u+=`<rect x="${P}" y="${U}" width="${g}" height="${f}" rx="5" fill="${C}" opacity="${A}"/>`;const E=oe(m);E&&!m.used&&(u+=`<image href="${E}" x="${P}" y="${(w.y-f/2+j).toFixed(1)}" width="${g}" height="${z}" clip-path="url(#cp-${v})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${P}" y="${U}" width="${g}" height="${j}" rx="4" fill="rgba(255,255,255,0.92)"/>`,u+=`<text x="${w.x.toFixed(1)}" y="${(w.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.name||"").slice(0,9)}</text>`;const I=(w.y+f/2-p).toFixed(1);if(u+=`<rect x="${P}" y="${I}" width="${g}" height="${p}" fill="rgba(255,255,255,0.92)"/>`,m.used)u+=`<text x="${w.x.toFixed(1)}" y="${(w.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const q=Je(m.country_code);q?u+=`<image href="${q}" x="${(w.x-20).toFixed(1)}" y="${(w.y+f/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:u+=`<text x="${(w.x-13).toFixed(1)}" y="${(w.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Jt(m.country_code)}</text>`,u+=`<text x="${w.x.toFixed(1)}" y="${(w.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${R}</text>`;const S=Xt(m);S?u+=`<image href="${S}" x="${(w.x+g/2-14).toFixed(1)}" y="${(w.y+f/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:m.clubName&&(u+=`<text x="${(w.x+14).toFixed(1)}" y="${(w.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(m.clubName||"").slice(0,3).toUpperCase()}</text>`),m.boost&&(u+=`<rect x="${(w.x+g/2-12).toFixed(1)}" y="${(w.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,u+=`<text x="${(w.x+g/2-5).toFixed(1)}" y="${(w.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${m.boost}</text>`)}u+=`<rect x="${P}" y="${U}" width="${g}" height="${f}" rx="5" fill="${M?"rgba(255,255,255,0.12)":"none"}" stroke="${N}" stroke-width="${V}" opacity="${A}"/>`,y&&(u+=`<rect x="${P}" y="${U}" width="${g}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${M?"selected":""}" data-card-id="${m.cardId}" data-role="${B}" style="cursor:pointer"/>`)}const T=38;return`<svg viewBox="${-T} ${-T} ${l+T*2} ${a+T*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${u}
  </svg>`}function Te(e,t,i,n,l=300,a=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ie(e,t,i,n,l,a)}
  </div>`}function Se(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Qt(e,t,i,n){var B;const{state:l,navigate:a,toast:s}=t;Yt(e);const d=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Ki(e,t,i);const c=d.deckId;let o,r,u,g;try{const C=await Promise.all([$.from("decks").select("formation,name").eq("id",c).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=C[0].data,u=C[0].error,r=C[1].data,g=C[1].error}catch(C){console.error("[Match] Exception chargement deck:",C),fe(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>a("home"));return}if(u||g){console.error("[Match] Erreur Supabase:",u||g),fe(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>a("home"));return}const f=(r||[]).filter(C=>{var y;return C.is_starter&&((y=C.card)==null?void 0:y.player)}).map(C=>Xe(C.card,C.position)),j=(r||[]).filter(C=>{var y;return!C.is_starter&&((y=C.card)==null?void 0:y.player)}).map(C=>Xe(C.card,C.position));if(f.length<11){fe(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>a("decks"));return}const p=(r||[]).find(C=>{var y;return((y=C.card)==null?void 0:y.card_type)==="formation"}),h=(o==null?void 0:o.formation)||((B=p==null?void 0:p.card)==null?void 0:B.formation)||"4-4-2",{data:T,error:v}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:m}=await $.from("gc_definitions").select("*").eq("is_active",!0),w=(T||[]).map(C=>({...C,_gcDef:(m==null?void 0:m.find(y=>y.name===C.gc_type||y.id===C.gc_definition_id))||null}));n({deckId:c,formation:h,starters:f,subsRaw:j,gcCardsEnriched:w,gcDefs:m||[]})}async function Vi(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",a=l.replace("vs_ai_",""),s=l;await Qt(e,t,l,async({deckId:d,formation:c,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:g})=>{try{const f=Oe(o,c),j=await Yi(c,a),p=async h=>{try{const{data:T,error:v}=await $.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:d,status:"in_progress"}).select().single();if(v){console.error("[MatchIA] Erreur création match:",v),fe(e,"⚠️","Impossible de créer le match ("+v.message+").","Retour",()=>t.navigate("home"));return}const m={gcDefs:g||[],matchId:T==null?void 0:T.id,mode:s,difficulty:a,formation:c,homeTeam:f,aiTeam:j,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Xi(e,m,t)}catch(T){console.error("[MatchIA] Exception launchMatch:",T),fe(e,"⚠️","Erreur au lancement du match : "+T.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}Wt(e,u,p)}catch(f){console.error("[MatchIA] Exception setup:",f),fe(e,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>t.navigate("home"))}})}async function Yi(e,t){var s,d;const{data:i}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Wi(e);const n=be[e]||be["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},a=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=a.filter(j=>j.job===c),r=a.filter(j=>j.job!==c),u=[...o,...r],g=[];for(let j=0;j<n[c];j++){const p=u[j]||a[j];p&&g.push({cardId:"ai-"+p.id+"-"+j,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((s=p.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((d=p.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:c})}const f=Ne(g.length);g.forEach((j,p)=>{j._col=f[p]}),l[c]=g}return l}function Wi(e){const t=be[e]||be["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<t[a];c++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:n[l%n.length],country_code:"XX",club_id:null,job:a,job2:null,note_g:a==="GK"?o:2,note_d:a==="DEF"?o:2,note_m:a==="MIL"?o:2,note_a:a==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:a}),l++}const d=Ne(s.length);s.forEach((c,o)=>{c._col=d[o]}),i[a]=s}return i}function Xi(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ie(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Ji(e,t,i),5e3)}function Ji(e,t,i){const n=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[];function a(p){return p.reduce((h,T)=>h+ie(T,"MIL"),0)}function s(p){let h=0;for(let T=0;T<p.length-1;T++){const v=ge(p[T],p[T+1]);v==="#00ff88"?h+=2:v==="#FFD700"&&(h+=1)}return h}const d=a(n)+s(n),c=a(l)+s(l),o=d>=c;function r(p,h,T,v){return`<div id="duel-row-${v}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${h}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((m,w)=>{const B=w<p.length-1?ge(m,p[w+1]):null,C=!B||B==="#ff3333"||B==="#cc2222",y=B==="#00ff88"?"+2":B==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${v}" data-idx="${w}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${pe({...m,note:ie(m,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${w<p.length-1?`<div class="duel-link duel-link-${v}" data-idx="${w}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${C?"rgba(255,255,255,0.12)":B};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${C?"none":`0 0 8px ${B}`}">
            ${y?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${B}">${y}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${v}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${a(p)} + ${s(p)} liens = <b style="color:#fff">${a(p)+s(p)}</b>
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

    ${r(l,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const p=(h,T)=>e.querySelectorAll(h).forEach((v,m)=>{setTimeout(()=>{v.style.opacity="1",v.style.transform="translateY(0) scale(1)"},T+m*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((h,T)=>{setTimeout(()=>{h.style.opacity="1"},T*70)}),900),setTimeout(()=>{const h=e.querySelector("#vs-label");h&&(h.style.opacity="1",h.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(T=>T.style.opacity="1")},1250),setTimeout(()=>{g("score-home",d,800),g("score-ai",c,800)},1500)};function g(p,h,T){const v=document.getElementById(p);if(!v)return;const m=performance.now(),w=B=>{const C=Math.min(1,(B-m)/T);v.textContent=Math.round(h*(1-Math.pow(1-C,3))),C<1?requestAnimationFrame(w):v.textContent=h};requestAnimationFrame(w)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const f=o?Vt():null;o&&(t.boostCard={value:f}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:oe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:l.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:oe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:d,aiTotal:c,text:`Duel milieu : ${t.clubName} ${d} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const j=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",re(e,t,i),t.attacker==="ai"&&setTimeout(()=>Qe(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),h=document.getElementById("score-ai"),T=document.getElementById(o?"duel-row-home":"duel-row-ai"),v=document.getElementById(o?"duel-row-ai":"duel-row-home"),m=o?p:h,w=o?h:p;m&&(m.style.fontSize="80px",m.style.color=o?"#FFD700":"#ff6b6b",m.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),w&&(w.style.opacity="0.25"),setTimeout(()=>{T&&(T.style.transformOrigin="center",T.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",T.style.zIndex="5"),setTimeout(()=>{var C;const B=document.getElementById("duel-shock");if(B){const y=(C=v||T)==null?void 0:C.getBoundingClientRect(),M=e.querySelector(".match-screen").getBoundingClientRect();y&&(B.style.top=y.top-M.top+y.height/2+"px"),B.style.animation="shockwave .5s ease-out forwards"}v&&(v.style.transformOrigin="center",v.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var C;const B=document.getElementById("duel-finale");B&&(B.innerHTML=`
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
          </button>`,B.style.transition="opacity .45s ease",B.style.opacity="1",B.style.pointerEvents="auto",(C=document.getElementById("start-match-btn"))==null||C.addEventListener("click",j))},600)},700)},2800)}function Qi(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>Se(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>Se(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${Se(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${Se(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function re(e,t,i){var p,h,T,v,m,w,B,C;const n=t.selected.map(y=>y.cardId),l=t.usedSubIds||[],a=t.homeSubs.filter(y=>!l.includes(y.cardId));Object.values(t.homeTeam).flat().filter(y=>y.used).length>0&&a.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",c=t.phase==="attack",o=t.phase==="defense",r=t.phase==="finished",u=t.gcCards.filter(y=>!t.usedGc.includes(y.id)),g=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const M=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ke((M.players||[]).map(R=>({...R,used:!1})),"#ff6b6b",M.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const M=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ke((M.players||[]).map(R=>({...R,used:!1})),"#00ff88",M.total)}
          </div>`}const y=t.log[t.log.length-1];return y?'<div style="padding:2px 4px">'+Qi(y)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const y=window.innerWidth>=700,M=(E,I,q)=>{var W,J;const S=(t.gcDefs||[]).find(te=>te.name===E.gc_type),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",L=(S==null?void 0:S.name)||E.gc_type,k=(S==null?void 0:S.effect)||((W=le[E.gc_type])==null?void 0:W.desc)||"",_=S!=null&&S.image_url?`/manager-wars/icons/${S.image_url}`:null,G=((J=le[E.gc_type])==null?void 0:J.icon)||"⚡",F=Math.round(q*.22),O=Math.round(q*.22),D=q-F-O,Y=L.length>12?7:9;return`<div class="gc-mini" data-gc-id="${E.id}" data-gc-type="${E.gc_type}"
          style="box-sizing:border-box;width:${I}px;height:${q}px;border-radius:10px;border:2px solid ${x};background:${b};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${F}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Y}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${I-6}px">${L}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${D}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_?`<img src="${_}" style="max-width:${I-10}px;max-height:${D-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(D*.55)}px">${G}</span>`}
          </div>
          <div style="height:${O}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${k.slice(0,38)}</span>
          </div>
        </div>`},R=(E,I)=>{var q;return`<div id="boost-card"
          style="box-sizing:border-box;width:${E}px;height:${I}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(I*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(I*.2)}px">⚡</div>
            <div style="font-size:${Math.round(I*.09)}px;color:#000;font-weight:900">+${(q=t.boostCard)==null?void 0:q.value}</div>
          </div>`},P=(E,I)=>I?R(110,150):M(E,110,150),U=(E,I)=>I?R(68,95):M(E,68,95),A=y?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",H=r?`<button id="btn-results" style="${A};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${A};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:c?`<button id="btn-action" style="${A};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:o?`<button id="btn-action" style="${A};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${A};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,N=c||o?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",V=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${y?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${a.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':a.map(E=>`<div class="sub-btn-col" data-sub-id="${E.cardId}" style="cursor:pointer;flex-shrink:0">${pe(E,44,58)}</div>`).join("")}
      </div>`,z=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Te(t.homeTeam,t.formation,t.phase,n,300,300)}
        </div>
      </div>`;return y?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${V}
          ${z}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${u.map(E=>P(E,!1)).join("")}
              ${g?P(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${H}${N}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${V}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Te(t.homeTeam,t.formation,t.phase,n,300,300)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${u.map(E=>U(E,!1)).join("")}
            ${g?U(null,!0):""}
          </div>
          <div>${H}${N}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(y=>{var M,R,P;if(y.type==="duel"){const U=y.isGoal,A=y.homeScored?"#FFD700":U?"#ff6b6b":"rgba(255,255,255,0.3)",H=y.homeScored?"⚽ BUT !":U?"⚽ BUT IA !":(M=y.homePlayers)!=null&&M.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${U?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${A};margin-bottom:4px">
                <div style="font-size:9px;color:${A};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${H}</div>
                ${(R=y.homePlayers)!=null&&R.length?`<div style="margin-bottom:3px">${ke(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
                ${(P=y.aiPlayers)!=null&&P.length?`<div style="opacity:0.7">${ke(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
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
  </div>`;function f(){const y=e.querySelector(".match-screen");if(!y)return;const M=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);y.style.bottom="auto",y.style.height=M+"px",y.style.minHeight=M+"px",y.style.maxHeight=M+"px",y.style.overflow="hidden";const R=e.querySelector("#mobile-action-bar"),P=e.querySelector("#mobile-play-area");R&&P&&(P.style.paddingBottom=R.offsetHeight+"px")}if(f(),setTimeout(f,120),setTimeout(f,400),setTimeout(f,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",f),window.visualViewport.addEventListener("scroll",f)),window.addEventListener("resize",f)),function(){const M=e.querySelector(".terrain-wrapper svg");M&&(M.removeAttribute("width"),M.removeAttribute("height"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",M.setAttribute("viewBox","-26 -26 352 352"),M.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const y=e.querySelector(".terrain-wrapper svg");y&&(y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let y=!1,M=30;const R=()=>document.getElementById("match-timer"),P=()=>{const U=R();if(!U)return;const A=String(Math.floor(M/60)).padStart(2,"0"),H=String(M%60).padStart(2,"0");U.textContent=` ${A}:${H}`,U.style.color=y?"#ff2222":"#ff9500",U.style.fontWeight="900"};P(),t._timerInt=setInterval(()=>{if(M--,M<0)if(!y)y=!0,M=15,P();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",U.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(U),setTimeout(()=>{U.remove(),Ee(e,t,i)},2500)}else P()},1e3)}(p=document.getElementById("match-quit"))==null||p.addEventListener("click",()=>{de(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ee(e,t,i))}),(h=document.getElementById("view-ai"))==null||h.addEventListener("click",()=>lo(t,i)),(T=document.getElementById("toggle-history"))==null||T.addEventListener("click",()=>{var y;(y=document.getElementById("match-history-panel"))==null||y.classList.add("open")}),(v=document.getElementById("close-history"))==null||v.addEventListener("click",()=>{var y;(y=document.getElementById("match-history-panel"))==null||y.classList.remove("open")}),(m=document.getElementById("btn-action"))==null||m.addEventListener("click",()=>{t.selected.length!==0&&(c?eo(e,t,i):o&&to(e,t,i))}),(w=document.getElementById("btn-results"))==null||w.addEventListener("click",()=>Ee(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(y=>{y.addEventListener("click",()=>Zi(y,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(y=>{y.addEventListener("click",()=>no(y.dataset.gcId,y.dataset.gcType,e,t,i))}),(B=document.getElementById("boost-card"))==null||B.addEventListener("click",()=>so(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(y=>{y.addEventListener("click",()=>St(e,t,i,y.dataset.subId))}),(C=document.getElementById("sub-btn-main"))==null||C.addEventListener("click",()=>St(e,t,i))}function Zi(e,t,i,n){const l=e.dataset.cardId,a=e.dataset.role,s=t.selected.findIndex(d=>d.cardId===l);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[a]||[]).find(c=>c.cardId===l);d&&t.selected.push({...d,_role:a,_line:a})}re(i,t,n)}function st(e,t,i){e.matchId&&$.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function eo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),st(t,i,i.state.profile.id);const n=t.selected.map(a=>({...(t.homeTeam[a._role]||[]).find(d=>d.cardId===a.cardId)||a,_line:a._role})),l=it(n,t.modifiers.home);t.pendingAttack={...l,players:[...n],side:"home"},t.selected.forEach(a=>{const s=(t.homeTeam[a._role]||[]).find(d=>d.cardId===a.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",re(e,t,i),setTimeout(()=>io(e,t,i),1200)}function to(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),st(t,i,i.state.profile.id);const n=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d,_line:d._role})),l=ot(n,t.modifiers.home);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId);c&&(c.used=!0)});const a=nt(t.pendingAttack.total,l.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:oe(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:oe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,re(e,t,i),lt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Le(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Le(e,t,i,"home-attack")}function Qe(e,t,i){st(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=Rt(n,"attack",t.difficulty);if(!l.length){Be(e,t,i);return}const a=it(l,t.modifiers.ai);t.pendingAttack={...a,players:l,side:"ai"},l.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${l.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:oe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,re(e,t,i),lt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Le(e,t,i,"home-attack")});return}t.phase="defense",re(e,t,i)}function io(e,t,i){const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=Rt(n,"defense",t.difficulty),a=l.length>0?ot(l,t.modifiers.ai).total:0;l.forEach(c=>{c.used=!0});const s=nt(t.pendingAttack.total,a,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:oe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiPlayers:l.map(c=>({name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:oe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,re(e,t,i),lt(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{Le(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,Le(e,t,i,"ai-attack")}function Le(e,t,i,n){if(t.round++,Zt(t)){Ee(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(a=>!a.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used).length){Be(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Be(e,t,i);return}setTimeout(()=>Qe(e,t,i),100);return}t.phase="attack",re(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(a=>!a.used).length){Be(e,t,i);return}t.phase="ai-attack",re(e,t,i),setTimeout(()=>Qe(e,t,i),800)}}function Zt(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(l=>!l.used));return!t&&!i}function Be(e,t,i){Zt(t)?Ee(e,t,i):(t.phase="attack",re(e,t,i))}function oo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const l=oe(e),a=oe(t),s=we[e.job]||"#555",d=we[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${c}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${a?`<img src="${a}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",u),setTimeout(u,2e3)}function $e(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function St(e,t,i,n=null){if(t.phase!=="attack"){$e("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$e(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.values(t.homeTeam).flat().filter(u=>u.used),a=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!l.length){$e("Aucun joueur utilisé à remplacer");return}if(!a.length){$e("Aucun remplaçant disponible");return}let s=0,d=Math.max(0,a.findIndex(u=>u.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var T,v,m,w,B,C;const u=l[s],g=a[d],f=Math.min(130,Math.round((window.innerWidth-90)/2)),j=Math.round(f*1.35),p=y=>`background:rgba(255,255,255,0.12);border:none;color:${y?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${y?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${g?pe({...g,used:!1,boost:0},f,j):"<div>—</div>"}</div>
        <button id="in-down" style="${p(d>=a.length-1)}" ${d>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${u?pe({...u,used:!1,boost:0},f,j):"<div>—</div>"}</div>
        <button id="out-down" style="${p(s>=l.length-1)}" ${s>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(T=o.querySelector("#sub-close"))==null||T.addEventListener("click",()=>o.remove()),(v=o.querySelector("#out-up"))==null||v.addEventListener("click",()=>{s>0&&(s--,r())}),(m=o.querySelector("#out-down"))==null||m.addEventListener("click",()=>{s<l.length-1&&(s++,r())}),(w=o.querySelector("#in-up"))==null||w.addEventListener("click",()=>{d>0&&(d--,r())}),(B=o.querySelector("#in-down"))==null||B.addEventListener("click",()=>{d<a.length-1&&(d++,r())});const h=(y,M,R,P)=>{const U=o.querySelector("#"+y);if(!U)return;let A=0;U.addEventListener("touchstart",H=>{A=H.touches[0].clientY},{passive:!0}),U.addEventListener("touchend",H=>{const N=H.changedTouches[0].clientY-A;if(Math.abs(N)<30)return;const V=M();N<0&&V<P-1?(R(V+1),r()):N>0&&V>0&&(R(V-1),r())},{passive:!0})};h("in-panel",()=>d,y=>d=y,a.length),h("out-panel",()=>s,y=>s=y,l.length),(C=o.querySelector("#sub-confirm"))==null||C.addEventListener("click",y=>{if(y.preventDefault(),y.stopPropagation(),c)return;c=!0;const M=l[s],R=a[d];if(!M||!R)return;let P=null,U=-1;for(const[H,N]of Object.entries(t.homeTeam)){const V=(N||[]).findIndex(z=>z.cardId===M.cardId);if(V!==-1){P=H,U=V;break}}if(U===-1||!P){$e("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const A={...R,_line:P,_col:M._col||0,used:!1,boost:0};t.homeTeam[P].splice(U,1,A),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(R.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:M.name,firstname:M.firstname,note:ie(M,P),portrait:oe(M),job:M.job,country_code:M.country_code,rarity:M.rarity,clubName:M.clubName,clubLogo:M.clubLogo},inPlayer:{name:R.name,firstname:R.firstname,note:ie(R,P),portrait:oe(R),job:R.job,country_code:R.country_code,rarity:R.rarity,clubName:R.clubName,clubLogo:R.clubLogo},text:`🔄 ${R.firstname} ${R.name} remplace ${M.firstname} ${M.name}`}),o.remove(),oo(M,R,()=>re(e,t,i))})}document.body.appendChild(o),r()}function no(e,t,i,n,l){var j,p;const a=(n.gcDefs||[]).find(h=>h.name===t),s=le[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[a==null?void 0:a.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[a==null?void 0:a.color]||"#b06ce0",o=(a==null?void 0:a.name)||t,r=(a==null?void 0:a.effect)||s.desc,u=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,g=s.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
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
    </div>`,document.body.appendChild(f),(j=f.querySelector("#gc-back"))==null||j.addEventListener("click",()=>f.remove()),(p=f.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{f.remove(),ao(e,t,i,n,l)})}const ro={BOOST_STAT:({stat:e="all",value:t=1,count:i=1,roles:n=[]},l)=>(Object.entries(l.homeTeam).filter(([s])=>!n.length||n.includes(s)).flatMap(([,s])=>s.filter(d=>!d.used)).slice(0,i).forEach(s=>{s.boost=(s.boost||0)+t,l.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"})}),!1),DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},l)=>{const a=n==="home"?l.homeTeam:l.aiTeam;return Object.entries(a).filter(([d])=>!i.length||i.includes(d)).flatMap(([,d])=>d.filter(c=>!c.used)).sort((d,c)=>(c.note_a||0)-(d.note_a||0)).slice(0,t).forEach(d=>{d.boost=(d.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${d.name} (IA)`,type:"info"})}),!1},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n)=>{const l=i==="home"?n.homeTeam:n.aiTeam;return Object.entries(l).filter(([s])=>!t.length||t.includes(s)).flatMap(([,s])=>s.filter(d=>!d.used)).sort((s,d)=>(d.note_a||0)-(s.note_a||0)).slice(0,e).forEach(s=>{s.used=!0,n.log.push({text:`❌ ${s.name} (IA) exclu !`,type:"info"})}),!1},REVIVE_PLAYER:({count:e=1,roles:t=[]},i)=>{const n=Object.entries(i.homeTeam).filter(([l])=>!t.length||t.includes(l)).flatMap(([,l])=>l.filter(a=>a.used)).slice(0,e);return n.length?(n.forEach(l=>{l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"})}),!1):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),!1)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function ao(e,t,i,n,l){n.usedGc.push(e);const a=n.gcDefs||[],s=a.find(c=>c.name===t)||a.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let d=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const c=ro[s.effect_type];c?c(s.effect_params||{},n,i,l)||(d=!0):(l.toast(`Effet "${s.effect_type}" non implémenté`,"error"),d=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,u)=>ie(u,"ATT")-ie(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}$.from("cards").delete().eq("id",e).then(()=>{}),d&&re(i,n,l)}function so(e,t,i){const n=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(l=>`
        <div class="player-boost-opt" data-card-id="${l.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${we[l.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ie(l,l._line||l.job)}</div>
          <div style="flex:1"><b>${l.firstname} ${l.name}</b><div style="font-size:11px;color:#888">${l._line||l.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const a=l.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[s]||[]).find(c=>c.cardId===a);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),re(e,t,i)})})}function lt(e,t,i,n,l){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");a.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${s}</div>
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
      <div style="width:50px;height:50px;border-radius:50%;background:${we[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(a);let d=!1;const c=()=>{d||(d=!0,a.remove(),setTimeout(()=>l(),50))};a.addEventListener("click",c),setTimeout(c,3500)}async function Ee(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,l=t.homeScore>t.aiScore,a=t.homeScore===t.aiScore,s=l?"victoire":a?"nul":"defaite",d=ui(t.mode,s);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?n.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+d,matches_played:(n.profile.matches_played||0)+1};l?c.wins=(n.profile.wins||0)+1:a?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await $.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${l?"🏆":a?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${l?"Victoire !":a?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),de(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),de(e),i.navigate("match",{matchMode:t.mode})})}function lo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ie(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function co(e,t){const{state:i}=t;await Qt(e,t,"random",({deckId:l,formation:a,starters:s,subsRaw:d,gcCardsEnriched:c,gcDefs:o})=>{const r=u=>{po(e,t,l,a,s,d,u,o||[])};if(!c.length){r([]);return}Wt(e,c,r)})}async function po(e,t,i,n,l,a,s=[],d=[]){var v;const{state:c,navigate:o,toast:r}=t;let u=!1,g=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const f=()=>document.getElementById("mm-status"),j=async(m=!0)=>{u=!0,g&&($.removeChannel(g),g=null),m&&await $.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(v=document.getElementById("mm-cancel"))==null||v.addEventListener("click",async()=>{try{await j(!0)}catch(m){console.warn("[Matchmaking] cleanup error:",m)}de(e),o("home")});const p=async(m,w,B)=>{u||(u=!0,g&&($.removeChannel(g),g=null),f()&&(f().textContent="Adversaire trouvé !"),await new Promise(C=>setTimeout(C,600)),e.isConnected!==!1&&uo(e,t,m,B,s,d))},{data:h,error:T}=await $.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(T||!(h!=null&&h.success)){r("Erreur de matchmaking","error"),de(e),o("home");return}if(h.matched){p(h.match_id,h.opponent_id,!1);return}f()&&(f().textContent="En attente d'un autre joueur..."),g=$.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},m=>{const w=m.new;w.status==="matched"&&w.match_id&&p(w.match_id,w.matched_with,!0)}).subscribe()}async function uo(e,t,i,n,l=[],a=[]){const{state:s,navigate:d,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",u=(l||[]).map(z=>z.id),g=(l||[]).map(z=>({id:z.id,gc_type:z.gc_type,_gcDef:z._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:f}=await $.from("matches").select("*").eq("id",i).single();if(!f){c("Match introuvable","error"),d("home");return}async function j(){const[{data:z,error:E},{data:I,error:q},{data:S},{data:b}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:f.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:f.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",f.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",f.away_id).single()]);E&&console.error("[PvP] get_deck_for_match p1 error:",E),q&&console.error("[PvP] get_deck_for_match p2 error:",q);function x(D,Y){return{cardId:D.card_id,position:Y||D.position,id:D.id,firstname:D.firstname,name:D.surname_encoded,country_code:D.country_code,club_id:D.club_id,job:D.job,job2:D.job2,note_g:Number(D.note_g)||0,note_d:Number(D.note_d)||0,note_m:Number(D.note_m)||0,note_a:Number(D.note_a)||0,rarity:D.rarity,skin:D.skin,hair:D.hair,hair_length:D.hair_length,clubName:D.club_encoded_name||null,clubLogo:D.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const L=((z==null?void 0:z.starters)||[]).map(D=>x(D,D.position)),k=((I==null?void 0:I.starters)||[]).map(D=>x(D,D.position)),_=((z==null?void 0:z.subs)||[]).map(D=>x(D,D.position)),G=((I==null?void 0:I.subs)||[]).map(D=>x(D,D.position)),F=(z==null?void 0:z.formation)||"4-4-2",O=(I==null?void 0:I.formation)||"4-4-2";return console.log("[PvP] p1Formation:",F,"p1 starters:",L.length,"positions:",L.map(D=>D.position)),console.log("[PvP] p2Formation:",O,"p2 starters:",k.length,"positions:",k.map(D=>D.position)),{p1Team:Oe(L,F),p2Team:Oe(k,O),p1Subs:_,p2Subs:G,p1Formation:F,p2Formation:O,p1Name:(S==null?void 0:S.club_name)||(S==null?void 0:S.pseudo)||"Joueur 1",p2Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?g:[],gcCardsFull_p2:n?[]:g,gcReady_p1:!0,gcReady_p2:!0,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let p=f.game_state&&Object.keys(f.game_state).length?f.game_state:null;if(!p)if(n){p=await j();const{data:z}=await $.from("matches").select("game_state").eq("id",i).single();!(z!=null&&z.game_state)||!Object.keys(z.game_state).length?await $.from("matches").update({game_state:p,turn_user_id:f.home_id}).eq("id",i):p=z.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let z=0;z<30&&!p;z++){await new Promise(I=>setTimeout(I,400));const{data:E}=await $.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(p=E.game_state)}if(!p){c("Erreur de synchronisation","error"),d("home");return}p.gc_p2=u,p.gcCardsFull_p2=g,await $.from("matches").update({game_state:p}).eq("id",i)}let h=!1;function T(z){var L;try{$.removeChannel(v)}catch{}const E=s.profile.id,I=z.winner_id===E,q=!!z.forfeit,S=p[o+"Score"]??0,b=p[r+"Score"]??0,x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:64px">${I?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${I?"#FFD700":"#ff6b6b"}">${I?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px;color:#fff">${p[o+"Name"]} ${S} – ${b} ${p[r+"Name"]}</div>
      ${q?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${I?"L'adversaire a quitté la partie":"Match perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(L=x.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{x.remove(),de(e),d("home")})}const v=$.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},z=>{const E=z.new;try{if(E.status==="finished"||E.forfeit){if(h)return;h=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),E.game_state&&(p=E.game_state),T(E);return}E.game_state&&(p=E.game_state,B())}catch(I){console.error("[PvP] Realtime render crash:",I,"gameState:",p)}}).subscribe();async function m(z){Object.assign(p,z),p.lastActionAt=new Date().toISOString();const{error:E}=await $.from("matches").update({game_state:p}).eq("id",i);E&&(console.error("[PvP] pushState DB error:",E.message,E),c("Erreur de synchronisation : "+E.message,"error"));try{B()}catch(I){console.error("[PvP] renderPvpScreen crash après pushState:",I),c("Erreur d'affichage : "+I.message,"error")}}async function w(){if(h)return;h=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null);const z=n?f.away_id:f.home_id;try{await $.from("matches").update({status:"finished",forfeit:!0,winner_id:z}).eq("id",i)}catch(E){console.warn("[PvP] forfeit DB error:",E)}try{$.removeChannel(v)}catch{}de(e),d("home")}function B(){var ft,gt,mt,xt,yt;const z=p[o+"Team"];p[r+"Team"];const E=p[o+"Score"],I=p[r+"Score"],q=p[o+"Name"],S=p[r+"Name"];if(p.phase==="gc-select")return C();if(p.phase==="reveal")return y();if(p.phase==="midfield")return M();if(p.phase==="finished")return H();const b=p.phase===o+"-attack",x=p.phase===o+"-defense",L=p.phase===r+"-attack"||p.phase===r+"-defense",k=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],_=k.map(K=>K.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const G=window.innerWidth>=700,F=p[o+"Subs"]||[],O=p["usedSubIds_"+o]||[],D=F.filter(K=>!O.includes(K.cardId)),Y=p["gcCardsFull_"+o]||[],W=p["usedGc_"+o]||[],J=Y.filter(K=>!W.includes(K.id)),te=p.boostOwner===o&&!p.boostUsed,ne=(K,Q,ee)=>{var wt,_t;const X=K._gcDef,ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[X==null?void 0:X.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ce={purple:"#b06ce0",light_blue:"#00d4ef"}[X==null?void 0:X.color]||"#b06ce0",ye=(X==null?void 0:X.name)||K.gc_type,ni=(X==null?void 0:X.effect)||((wt=le[K.gc_type])==null?void 0:wt.desc)||"",ht=X!=null&&X.image_url?`/manager-wars/icons/${X.image_url}`:null,ri=((_t=le[K.gc_type])==null?void 0:_t.icon)||"⚡",vt=Math.round(ee*.22),bt=Math.round(ee*.22),Ke=ee-vt-bt,ai=ye.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
        style="width:${Q}px;height:${ee}px;border-radius:10px;border:2px solid ${Ce};background:${ce};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${vt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ai}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Q-6}px">${ye}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Ke}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${Q-10}px;max-height:${Ke-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ke*.55)}px">${ri}</span>`}
        </div>
        <div style="height:${bt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ni.slice(0,38)}</span>
        </div>
      </div>`},ae=(K,Q)=>`<div id="pvp-boost-card" style="width:${K}px;height:${Q}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${G?22:18}px">⚡</div>
      <div style="font-size:${G?11:9}px;color:#000;font-weight:900">+${p.boostValue}</div>
    </div>`,se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${G?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${D.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':D.map(K=>`<div class="pvp-sub-btn" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${pe(K,G?60:44,G?78:58)}</div>`).join("")}
    </div>`,me=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${Te(z,p[o+"Formation"],b?"attack":x?"defense":"idle",_,300,300)}
      </div>
    </div>`,xe=G?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ze=b?`<button id="pvp-action" style="${xe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${k.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:x?`<button id="pvp-action" style="${xe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${k.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${xe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${S}</div>`,pt=b||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${k.length}/3 sélectionné(s)</div>`:"",ii=(()=>{const K=p.pendingAttack;if(x&&K&&Array.isArray(K.players))return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${S} ATTAQUE — Défendez !</div>
          ${ke(K.players.map(ce=>({...ce,used:!1})),"#ff6b6b",K.total)}
        </div>`;const Q=Array.isArray(p.log)?p.log:[],ee=Q[Q.length-1];return ee?`<div style="padding:7px 10px;border-left:3px solid ${ee.type==="goal"?"#FFD700":ee.type==="stop"?"#00ff88":ee.type==="attack"?"#ff6b6b":"rgba(255,255,255,0.6)"};font-size:12px;color:#fff">${ee.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),oi=(Array.isArray(p.log)?p.log:[]).length,ut=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${q} <span style="color:#FFD700;font-size:18px">${E}</span> – <span style="color:#FFD700;font-size:18px">${I}</span> ${S}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${L?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${L?`⏳ Tour de ${S}`:b?"⚔️ À vous d'attaquer !":x?"🛡️ À vous de défendre !":""}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${ii}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${oi})
      </button>`;if(G)e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ut}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          ${me}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${ze}${pt}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${te?ae(110,90):""}
            ${J.map(K=>ne(K,110,150)).join("")}
          </div>
        </div>
      </div>`;else{e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ut}
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
            ${te?ae(68,95):""}
          </div>
          <div>${ze}${pt}</div>
        </div>
      </div>`;const K=e.querySelector(".terrain-wrapper");K&&(K.innerHTML=Te(z,p[o+"Formation"],b?"attack":x?"defense":"idle",_,300,300))}if(e.querySelectorAll(".match-slot-hit").forEach(K=>{K.addEventListener("click",()=>{if(!b&&!x)return;const Q=K.dataset.cardId,ee=K.dataset.role,X=(z[ee]||[]).find(ye=>ye.cardId===Q);if(!X||X.used)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const ce=p["selected_"+o],Ce=ce.findIndex(ye=>ye.cardId===Q);Ce>-1?ce.splice(Ce,1):ce.length<3&&ce.push({...X,_role:ee}),B()})}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>{R()}),e.querySelectorAll(".pvp-gc-mini").forEach(K=>{K.addEventListener("click",()=>{A(K.dataset.gcId,K.dataset.gcType)})}),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",()=>{b?N():x&&V()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&w()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>{U()}),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>{P()}),function(){const Q=e.querySelector(".terrain-wrapper svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("viewBox","-26 -26 352 352"),Q.setAttribute("preserveAspectRatio","xMidYMid meet"));const ee=e.querySelector(".match-screen");if(ee){const X=e.clientHeight;X>50&&(ee.style.height=X+"px",ee.style.maxHeight=X+"px",ee.style.overflow="hidden")}}(),p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),(b||x)&&!h){let K=30,Q=!1;const ee=()=>document.getElementById("pvp-timer"),X=()=>{ee()&&(ee().textContent=K+"s",ee().style.color=Q?"#ff4444":"#fff")};X(),p._timerInt=setInterval(()=>{K--,K<0?Q?(clearInterval(p._timerInt),p._timerInt=null,w()):(Q=!0,K=15,X()):X()},1e3)}}function C(){var x;const z=p["gcReady_"+o],E=p["gcReady_"+r];Array.isArray(p["gc_"+o])||(p["gc_"+o]=[]);let I=p["gc_"+o];const q=3;function S(L,k){const _=L._gcDef,G={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},F={purple:"#9b59b6",light_blue:"#00bcd4"},O=G[_==null?void 0:_.color]||G.purple,D=F[_==null?void 0:_.color]||F.purple;return`<div class="pvp-gc-card" data-id="${L.id}"
        style="width:100px;border-radius:10px;border:3px solid ${k?"#FFD700":D};background:${O};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${k?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${k?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((_==null?void 0:_.name)||L.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(_==null?void 0:_.name)||L.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${_!=null&&_.image_url?`<img src="/manager-wars/icons/${_.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((_==null?void 0:_.effect)||"").slice(0,50)}</span>
        </div>
        ${k?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${q}</b> cartes · ${I.length}/${q}
        </div>
      </div>
      ${z?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${E?"Adversaire aussi.":`En attente de ${p[r+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${I.length?`⚡ Valider (${I.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,z)return;const b=o==="p1"?f.home_id:f.away_id;$.from("cards").select("id,gc_type").eq("owner_id",b).eq("card_type","game_changer").then(async({data:L})=>{const{data:k}=await $.from("gc_definitions").select("*").eq("is_active",!0),_=new Set,G=(L||[]).filter(O=>_.has(O.gc_type)?!1:(_.add(O.gc_type),!0)).map(O=>({...O,_gcDef:(k==null?void 0:k.find(D=>D.name===O.gc_type))||null})),F=document.getElementById("pvp-gc-grid");if(F){if(!G.length){F.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}F.innerHTML=G.map(O=>S(O,I.includes(O.id))).join(""),F.querySelectorAll(".pvp-gc-card").forEach(O=>{O.addEventListener("click",()=>{const D=O.dataset.id,Y=I.indexOf(D);Y>-1?I.splice(Y,1):I.length<q&&I.push(D),B()})})}}),(x=e.querySelector("#pvp-gc-validate"))==null||x.addEventListener("click",async()=>{const L=o==="p1"?f.home_id:f.away_id,{data:k}=await $.from("cards").select("id,gc_type").eq("owner_id",L).eq("card_type","game_changer").in("id",I),{data:_}=await $.from("gc_definitions").select("*").eq("is_active",!0),G=(k||[]).map(F=>({...F,_gcDef:(_==null?void 0:_.find(O=>O.name===F.gc_type))||null}));await m({["gcReady_"+o]:!0,["gcCardsFull_"+o]:G}),p["gcReady_"+r]&&await m({phase:"reveal"})})}function y(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ie(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,o==="p1"&&setTimeout(async()=>{await m({phase:"midfield"})},5e3)}function M(){const z=p[o+"Team"].MIL||[],E=p[r+"Team"].MIL||[];function I(k){return k.reduce((_,G)=>_+ie(G,"MIL"),0)}function q(k){let _=0;for(let G=0;G<k.length-1;G++){const F=ge(k[G],k[G+1]);F==="#00ff88"?_+=2:F==="#FFD700"&&(_+=1)}return _}const S=I(z)+q(z),b=I(E)+q(E),x=S>=b;function L(k,_,G){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${_}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${k.map((F,O)=>{const D=oe(F),Y=O<k.length-1?ge(F,k[O+1]):null,W=Y&&Y!=="#ff3333"&&Y!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${G};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${D?`<img src="${D}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${ie(F,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${F.name}</div>
            </div>
            ${Y?`<div style="width:14px;height:4px;border-radius:2px;background:${Y};flex-shrink:0;opacity:${W?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${I(k)} + ${q(k)} liens = <b style="color:#fff">${I(k)+q(k)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${L(z,p[o+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${S}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${b}</div>
      </div>

      ${L(E,p[r+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const k=document.getElementById("pvp-score-me"),_=document.getElementById("pvp-score-opp"),G=document.getElementById("pvp-midfield-result");k&&_&&(x?(k.style.fontSize="80px",k.style.color="#FFD700",_.style.opacity="0.25"):(_.style.fontSize="80px",_.style.color="#ff6b6b",k.style.opacity="0.25"));const F=p.p1Team.MIL||[],O=p.p2Team.MIL||[],D=I(F)+q(F),Y=I(O)+q(O),W=D>=Y?"p1":"p2";p[W+"Name"];let J=p.boostValue;J==null&&(J=Vt(),p.boostValue=J,p.boostOwner=W,p.boostUsed=!1),G&&(G.style.opacity="1",G.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${x?`${p[o+"Name"]} gagne le milieu de terrain et attaque !`:`${p[r+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${x?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${J}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(o!=="p1")return;const te=W;await m({phase:te+"-attack",attacker:te,round:1,boostValue:p.boostValue,boostUsed:!1,boostOwner:te})},1800)},600)}function R(){var q;const z=p[o+"Team"],E=Object.entries(z).flatMap(([S,b])=>(b||[]).filter(x=>!x.used).map(x=>({...x,_line:S})));if(!E.length)return;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",I.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(S=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",x=ie(S,S._line)+(S.boost||0);return`<div class="boost-pick-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(I),(q=I.querySelector("#boost-picker-close"))==null||q.addEventListener("click",()=>I.remove()),I.querySelectorAll(".boost-pick-item").forEach(S=>{S.addEventListener("click",async()=>{const b=S.dataset.cid,x=E.find(_=>_.cardId===b);if(!x)return;const L=p[o+"Team"],k=(L[x._line]||[]).find(_=>_.cardId===b);k&&(k.boost=(k.boost||0)+p.boostValue),I.remove(),await m({[o+"Team"]:L,boostUsed:!0})})})}function P(){var I;const z=Array.isArray(p.log)?p.log:[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${z.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...z].reverse().map(q=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${q.type==="goal"?"#FFD700":q.type==="defense"?"#00ff88":"rgba(255,255,255,0.5)"}">
                <div style="font-size:12px;color:#fff">${q.text||""}</div>
              </div>`).join("")}
      </div>`,document.body.appendChild(E),(I=E.querySelector("#pvp-hist-close"))==null||I.addEventListener("click",()=>E.remove())}function U(){var E;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",z.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ie(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(z),(E=z.querySelector("#pvp-view-opp-close"))==null||E.addEventListener("click",()=>z.remove())}function A(z,E){var D,Y;const q=(p["gcCardsFull_"+o]||[]).find(W=>W.id===z),S=q==null?void 0:q._gcDef,b=le[E]||{icon:"⚡",desc:"Carte spéciale."},x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",L={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",k=(S==null?void 0:S.name)||E,_=(S==null?void 0:S.effect)||b.desc,G=S!=null&&S.image_url?`/manager-wars/icons/${S.image_url}`:null,F=b.icon||"⚡",O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",O.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${L};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${L}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${G?`<img src="${G}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${F}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(O),(D=O.querySelector("#pvp-gc-back"))==null||D.addEventListener("click",()=>O.remove()),(Y=O.querySelector("#pvp-gc-use"))==null||Y.addEventListener("click",async()=>{O.remove();const W=p["usedGc_"+o]||[];W.push(z),await m({["usedGc_"+o]:W})})}function H(){var S;const z=p[o+"Score"],E=p[r+"Score"],I=z>E,q=z===E;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${I?"🏆":q?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${I?"Victoire !":q?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${z} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(S=document.getElementById("pvp-home"))==null||S.addEventListener("click",()=>{$.removeChannel(v),de(e),d("home")})}async function N(){const z=(p["selected_"+o]||[]).map(q=>({...(p[o+"Team"][q._role]||[]).find(b=>b.cardId===q.cardId)||q,_line:q._role}));if(!z.length)return;const E=it(z,p.modifiers[o]||{});z.forEach(q=>{const S=(p[o+"Team"][q._role]||[]).find(b=>b.cardId===q.cardId);S&&(S.used=!0)});const I=Array.isArray(p.log)?p.log:[];I.push({type:"attack",text:`⚔️ ${p[o+"Name"]} attaque (${E.total})`,players:z,total:E.total,side:o}),await m({pendingAttack:{...E,players:z,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:r+"-defense",log:I})}async function V(){const z=(p["selected_"+o]||[]).map(G=>({...(p[o+"Team"][G._role]||[]).find(O=>O.cardId===G.cardId)||G,_line:G._role})),E=ot(z,p.modifiers[o]||{});z.forEach(G=>{const F=(p[o+"Team"][G._role]||[]).find(O=>O.cardId===G.cardId);F&&(F.used=!0)});const I=nt(p.pendingAttack.total,E.total,p.modifiers[o]||{}),q=p.pendingAttack.side,S=I==="attack",b=p[q+"Score"]+(S?1:0),x=q==="p1"?"p2":"p1",L=(p.round||0)+1,k=L>10,_=Array.isArray(p.log)?p.log:[];_.push({type:"defense",text:`🛡️ ${p[o+"Name"]} défend (${E.total})`,players:z,total:E.total,side:o}),_.push({type:S?"goal":"stop",text:S?`⚽ BUT de ${p[q+"Name"]} ! (${p.pendingAttack.total} vs ${E.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${E.total})`}),await m({[q+"Score"]:b,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:k?"finished":x+"-attack",attacker:x,round:L,log:_}),k&&await $.from("matches").update({status:"finished"}).eq("id",i)}B()}const fo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function go(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await dt(e,t)}async function dt(e,t){const{state:i,toast:n}=t,{data:l}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:a}=await $.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(l||[]).filter(o=>o.seller_id!==i.profile.id),d=a||[];d.filter(o=>o.status==="active").length,e.innerHTML=`
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
  `;function c(o){const r=document.getElementById("mkt-content"),u=o==="buy"?s:d;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const g=o==="mine"?[...u].sort((f,j)=>f.status!==j.status?f.status==="active"?-1:1:new Date(j.listed_at)-new Date(f.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(f=>{var m,w,B,C;const j=(m=f.card)==null?void 0:m.player;if(!j)return"";const p=j.job==="GK"?j.note_g:j.job==="DEF"?j.note_d:j.job==="MIL"?j.note_m:j.note_a,h=fo[j.rarity],T=(i.profile.credits||0)>=f.price,v=f.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${v?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${yo(j.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${h};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${j.firstname} ${j.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${j.country_code} · ${((w=j.clubs)==null?void 0:w.encoded_name)||"—"} · ${j.rarity} · ${j.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((B=f.seller)==null?void 0:B.pseudo)||"—"}</div>`:v?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((C=f.buyer)==null?void 0:C.pseudo)||"—"} · ${f.sold_at?new Date(f.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(f.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${T?"":"disabled"} style="margin-top:4px">${T?"Acheter":"Trop cher"}</button>`:v?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>mo(f.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>xo(f.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function mo(e,t,i,n){var u;const{state:l,toast:a}=n,s=t.find(g=>g.id===e);if(!s)return;const d=s.price,c=l.profile.credits||0,o=(u=s.card)==null?void 0:u.player;if(c<d){a("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${d.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:g,error:f}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(f)throw new Error(f.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");l.profile.credits=c-d;const j=document.querySelector("[data-credits]")||document.querySelector(".credits-display");j&&(j.textContent=(c-d).toLocaleString("fr")+" cr."),a(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),dt(i,n)}catch(g){a("❌ "+g.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function xo(e,t,i){const{toast:n}=i,{data:l}=await $.from("market_listings").select("card_id").eq("id",e).single();await $.from("market_listings").update({status:"cancelled"}).eq("id",e),l&&await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id),n("Annonce retirée","success"),dt(t,i)}function yo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function ho(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${l&&l.length>0?l.map((a,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${a.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${a.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${a.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${a.trophies_top1} 🥈${a.trophies_top2} 🥉${a.trophies_top3}</div>
              <div style="color:var(--gray-600)">${a.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function vo(e,{state:t,navigate:i,toast:n}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await $.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(a||[]).filter(r=>r.status==="finished"),c=(a||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===l.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const g=r.winner_id===l.id,f=r.home_score===r.away_score&&r.status==="finished",j=r.status!=="finished"?"…":f?"N":g?"V":"D",p=r.status!=="finished"||f?"#888":g?"#1A6B3C":"#c0392b";let h=s[r.mode]||r.mode;r.away_id===null&&!h.startsWith("IA")&&(h="IA");const v=r.home_id===l.id?r.away:r.home;let m;r.away_id===null?m=h:v?m=`${v.club_name||v.pseudo} (${v.pseudo})`:m="Adversaire";let w="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(w=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const B=new Date(r.created_at),C=B.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+B.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),y=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${m}${w}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${C}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${y}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${j}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(a||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${c.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${c.map(o).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(o).join("")}
        </div>`:""}

      ${(a||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const Z={user:null,profile:null,page:"home",params:{}};function Fe(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function bo(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ze(){document.getElementById("modal-overlay").classList.add("hidden")}async function De(){if(!Z.user)return;const{data:e}=await $.from("users").select("*").eq("id",Z.user.id).single();e&&(Z.profile=e)}const ct="mw_theme";function Pe(){return localStorage.getItem(ct)||"light"}function wo(e){var t;localStorage.setItem(ct,e),et(e),(t=Z.profile)!=null&&t.id&&$.from("users").update({theme:e}).eq("id",Z.profile.id).then(()=>{})}function et(e){document.documentElement.setAttribute("data-theme",e)}function Ge(e,t={}){Z.page=e,Z.params=t,ei()}async function ei(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===Z.page)});const t=document.getElementById("nav-credits");t&&Z.profile&&(t.textContent=`💰 ${(Z.profile.credits||0).toLocaleString("fr")}`);const i={state:Z,navigate:Ge,toast:Fe,openModal:bo,closeModal:Ze,refreshProfile:De};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Z.page){case"home":await Et(e,i);break;case"collection":await mi(e,i);break;case"decks":await Ye(e,i);break;case"boosters":await zi(e,i);break;case"match":{(Z.params&&Z.params.matchMode||"vs_ai_easy")==="random"?await co(e,i):await Vi(e,i);break}case"market":await go(e,i);break;case"rankings":await ho(e,i);break;case"matches":await vo(e,i);break;default:await Et(e,i)}}function _o(){const e=document.getElementById("app"),t=Z.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",l=>{l.preventDefault(),Ge(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ge("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ge("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const l=Pe()==="dark"?"light":"dark";wo(l),Bt(l)}),Bt(Pe())}function Bt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function $o(){et(Pe()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Ze()}),document.getElementById("modal-close").addEventListener("click",Ze);const{data:{session:e}}=await $.auth.getSession();if(!e){Dt(),$t(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Fe});return}Z.user=e.user,await De(),Dt();try{const{data:t}=await $.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),si(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!Z.profile){li(document.getElementById("app"),{state:Z,navigate:async()=>{await De(),Ft()},toast:Fe,refreshProfile:De});return}Z.profile.theme&&Z.profile.theme!==Pe()&&(localStorage.setItem(ct,Z.profile.theme),et(Z.profile.theme)),Ft(),$.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(Z.user=null,Z.profile=null,document.getElementById("app").innerHTML="",$t(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Fe}))})}function ko(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ue(){const e=document.getElementById("app");e&&(e.style.height=ko()+"px")}window.addEventListener("resize",Ue);window.addEventListener("orientationchange",()=>setTimeout(Ue,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ue);function Ft(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ue(),_o(),ei()}function Dt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function ti(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}$o().catch(e=>{console.error("Échec du démarrage:",e),ti()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&ti("Le serveur met trop de temps à répondre.")},12e3);
