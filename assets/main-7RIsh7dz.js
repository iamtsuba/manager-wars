import{s as j,F as xt,b as Ne,c as ei,l as ke,d as vi}from"./formation-links-CDBKB_z4.js";function qt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await j.auth.signInWithPassword({email:n,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await j.auth.signUp({email:n,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function wi(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var E;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),p=((E=document.getElementById("setup-club"))==null?void 0:E.value)||"MW",g=p.trim().split(" ").filter(Boolean),x=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():p.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),r&&(r.textContent=x,r.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await j.from("users").select("id").eq("pseudo",o).maybeSingle();if(p){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await j.from("users").select("id").eq("club_name",o).maybeSingle();if(p){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),g=document.getElementById("step3-finish");p.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:x}=await j.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(x)throw x;await $i(t.user.id),await d(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){p.textContent=x.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function $i(e){const{data:t}=await j.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const p=Rt([...d]).slice(0,3);o.push(...p)}else o=Rt([...i]).slice(0,4);o.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await j.from("cards").insert(s),await j.from("users").update({first_booster_opened:!0}).eq("id",e)}function Rt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const _i="2026.06.22-2206";async function Nt(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;d&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){ki(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await j.auth.signOut(),window.location.reload()}))}function ki(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const ye={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function re(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ot=["ATT","MIL","DEF","GK"];function ti(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Ot.indexOf(s._line),r=Ot.indexOf(a._line),p=Math.abs(o-r)===1;(s._line===a._line&&c||l&&p)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function yt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=ti(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function ht(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),n=ti(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function bt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function ii(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const d=[...n].sort((a,l)=>{const c=t==="attack"?re(a,"ATT"):a._line==="GK"?re(a,"GK"):re(a,"DEF");return(t==="attack"?re(l,"ATT"):l._line==="GK"?re(l,"GK"):re(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Ei(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const oi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Je={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},He=["GK","DEF","MIL","ATT"],Ti=["Tous","GK","DEF","MIL","ATT"],Ai={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},vt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ni(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ge(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function lt(e,t=""){var p,g;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=Je[n],s=oi[i.rarity]||"#ccc",a=Ge(i,n),l=i.job2?Ge(i,i.job2):null,c=i.job2?Je[i.job2]:null,o=ni(i),r=vt[i.country_code]||i.country_code||"";return`
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
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=i.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
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
  </div>`}async function Ii(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await j.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await j.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(S=>S.card_type==="player"&&S.player),r=(l||[]).filter(S=>S.card_type==="game_changer"),p=(l||[]).filter(S=>S.card_type==="formation"),{data:g}=await j.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(S=>{x[S.name]=S});const E=Object.keys(xt),u=Object.keys(ye),y={};o.forEach(S=>{const f=S.player.id;y[f]=(y[f]||0)+1}),new Set(Object.keys(y).map(S=>String(S)));const L=new Set(p.map(S=>S.formation)),_=new Set(r.map(S=>S.gc_type));let z="player",w="Tous",M="",T=!1;function D(){return[...o].sort((S,f)=>{const m=He.indexOf(S.player.job),h=He.indexOf(f.player.job);return m!==h?m-h:(S.player.surname_encoded||"").localeCompare(f.player.surname_encoded||"")})}function R(){return[...c||[]].sort((S,f)=>{const m=He.indexOf(S.job),h=He.indexOf(f.job);return m!==h?m-h:(S.surname_encoded||"").localeCompare(f.surname_encoded||"")})}function K(){return D().filter(S=>{const f=S.player,m=w==="Tous"||f.job===w,h=!M||`${f.firstname} ${f.surname_encoded}`.toLowerCase().includes(M);return m&&h})}function $(){return R().filter(S=>{const f=w==="Tous"||S.job===w,m=!M||`${S.firstname} ${S.surname_encoded}`.toLowerCase().includes(M);return f&&m})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="player"?"var(--green)":"transparent"};
        color:${z==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="formation"?"var(--green)":"transparent"};
        color:${z==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="gc"?"var(--green)":"transparent"};
        color:${z==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function q(){const S=document.getElementById("col-filters");S&&(z==="player"?(S.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${M}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Ti.map(f=>`
            <button class="filter-btn" data-job="${f}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${f===w?"var(--green)":"var(--gray-200)"};
                background:${f===w?"var(--green)":"#fff"};
                color:${f===w?"#fff":"var(--gray-600)"}">
              ${f}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${T?"var(--yellow)":"var(--gray-200)"};
              background:${T?"var(--yellow)":"#fff"};
              color:${T?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${T?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",f=>{M=f.target.value.toLowerCase(),A()}),e.querySelectorAll(".filter-btn").forEach(f=>{f.addEventListener("click",()=>{w=f.dataset.job,q(),A()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{T=!T,q(),A()})):(S.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${T?"var(--yellow)":"var(--gray-200)"};
              background:${T?"var(--yellow)":"#fff"};
              color:${T?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${T?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{T=!T,q(),A()})))}function A(){const S=document.getElementById("col-grid");S&&(z==="player"?J(S):z==="formation"?de(S):X(S))}function N(S,f,m,h,b){b=b||"#7a28b8";const v=document.getElementById("col-grid"),k=document.getElementById("col-big");if(!v||!k)return;var I=0;function F(){k.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+f(S[I])+"</div>";var B=k.querySelector("[data-card-id],[data-form-id],[data-gc-id]");B&&B.addEventListener("click",function(){h(S[I])}),requestAnimationFrame(function(){var C=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!C||!k)){var O=k.clientHeight-8,P=k.clientWidth-24,V=C.offsetHeight,Q=C.offsetWidth;if(V>0&&Q>0&&O>40){var W=Math.min(O/V,P/Q,1);C.style.transform="scale("+W.toFixed(3)+")",C.style.transformOrigin="top center"}}}),v.innerHTML=S.map(function(C,O){return'<div class="col-mini-item" data-idx="'+O+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(O===I?b:"transparent")+';transition:border-color .15s;overflow:hidden">'+m(C,O===I)+"</div>"}).join(""),v.querySelectorAll(".col-mini-item").forEach(function(C){C.addEventListener("click",function(){I=Number(C.dataset.idx),F(),C.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}F()}function G(S){var f=.54,m=Math.round(140*f),h=Math.round(310*f),b;if(!S||S._fake){var v=S?S.player:null;if(!v)return"";b=Pt(v)}else b=lt(S,"");return'<div style="width:'+m+"px;height:"+h+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+f+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+b+"</div></div>"}function U(S,f,m){f=f||100,m=m||140;var h=Ne[S]||{},b={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},v=Math.max(3,Math.round(f*.06)),k=Object.entries(h).map(function(F){var B=F[0],C=F[1],O=B.replace(/\d+$/,""),P=b[O]||"#888",V=Math.round(C.x*f),Q=Math.round(C.y*m);return'<circle cx="'+V+'" cy="'+Q+'" r="'+v+'" fill="'+P+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),I=Math.max(1,Math.round(f/50));return'<svg viewBox="0 0 '+f+" "+m+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+f+'" height="'+m+'" fill="#1A6B3C"/><rect x="'+Math.round(f*.2)+'" y="'+Math.round(m*.02)+'" width="'+Math.round(f*.6)+'" height="'+Math.round(m*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+I+'"/><line x1="0" y1="'+Math.round(m*.5)+'" x2="'+f+'" y2="'+Math.round(m*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+I+'"/><ellipse cx="'+Math.round(f*.5)+'" cy="'+Math.round(m*.5)+'" rx="'+Math.round(f*.18)+'" ry="'+Math.round(m*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+I+'"/><rect x="'+Math.round(f*.2)+'" y="'+Math.round(m*.82)+'" width="'+Math.round(f*.6)+'" height="'+Math.round(m*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+I+'"/>'+k+"</svg>"}function Z(S,f,m){var h=m>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+m+"</div>":"",b=f?'data-form-id="'+f.id+'"':"",v=S.length>7?14:S.length>5?16:19,k=!!f;return"<div "+b+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(k?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(k?"":"filter:grayscale(1);opacity:0.5")+'">'+h+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(k?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+v+"px;font-weight:900;color:"+(k?"#1A6B3C":"#aaa")+';line-height:1">'+S+'</div></div><div style="flex:1;overflow:hidden;background:'+(k?"#1A6B3C":"#ccc")+'">'+U(S,140,220)+"</div></div>"}function te(S,f){var m=.54,h=Math.round(140*m),b=Math.round(305*m),v=Math.round(b*.22),k=b-v,I=S.length>7?5:7,F=U(S,h,k),B=f?"1.5px solid #2a7a40":"1px solid #ddd",C=f?"":"filter:grayscale(1);opacity:0.45;",O=f?"#1A6B3C":"#bbb",P="#fff";return'<div style="width:'+h+"px;height:"+b+"px;border-radius:6px;border:"+B+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+C+'"><div style="height:'+v+"px;background:"+O+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+I+"px;font-weight:900;color:"+P+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(h-4)+'px">'+S+'</span></div><div style="height:'+k+'px;overflow:hidden;flex-shrink:0">'+F+"</div></div>"}function J(S){if(T){const f=$();if(!f.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const m=f.map(h=>o.find(b=>b.player.id===h.id)||{_fake:!0,player:h,id:"fake-"+h.id});N(m,h=>h._fake?Pt(h.player):lt(h,""),h=>h._fake?G({player:h.player,id:"x",_fake:!0}):G(h),h=>{h._fake||Ht(h,o,y,t)},"#1A6B3C")}else{const f=K();if(!f.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const m={},h=[];f.forEach(b=>{m[b.player.id]||(m[b.player.id]=!0,h.push(b))}),N(h,b=>{const v=y[b.player.id]||1,k=v>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${v}</div>`:"",F=o.filter(B=>B.player.id===b.player.id&&B.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return lt(b,k+F)},b=>G(b),b=>Ht(b,o,y,t),"#1A6B3C")}}function de(S){const f=T?E:[...L];if(!f.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const m=f.map(h=>({formation:h,card:p.find(b=>b.formation===h)||null,owned:L.has(h)}));N(m,({formation:h,card:b,owned:v})=>Z(h,v?b:null,v?p.filter(k=>k.formation===h).length:0),({formation:h,owned:b})=>te(h,b),({card:h,owned:b})=>{b&&h&&Mi(h,p,t,s)},"#1A6B3C")}function X(S){const f=Object.keys(x),m=T?f.length?f:u:[..._];if(!m.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const h=m.map(b=>({type:b,gc:ye[b]||{icon:"⚡",desc:""},def:x[b]||null,owned:_.has(b),card:r.find(v=>v.gc_type===b)||null}));N(h,({type:b,gc:v,def:k,owned:I,card:F})=>{const B=I?r.filter(ie=>ie.gc_type===b).length:0,C=B>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${B}</div>`:"",O=(k==null?void 0:k.gc_type)==="ultra_game_changer",P={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},V={purple:"#b06ce0",light_blue:"#00d4ef"},Q=P[k==null?void 0:k.color]||P.purple,W=V[k==null?void 0:k.color]||V.purple,le=(k==null?void 0:k.effect)||v.desc||"",Y=k!=null&&k.image_url?`/manager-wars/icons/${k.image_url}`:null;return I&&F?`<div data-gc-id="${F.id}" data-gc-type="${b}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${W};background:${Q};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${W}66;cursor:pointer">
          ${C}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${b.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${O?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Y?`<img src="${Y}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${v.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${le.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${b}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${v.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:b,gc:v,def:k,owned:I})=>I?(()=>{const F=Math.round(75.60000000000001),B=Math.round(310*.54),C=Math.round(B*.65),O=Math.round(B*.18),P={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},V={purple:"#9b59b6",light_blue:"#00bcd4"},Q=P[k==null?void 0:k.color]||P.purple,W=V[k==null?void 0:k.color]||V.purple,le=k!=null&&k.image_url?`/manager-wars/icons/${k.image_url}`:null;return`<div style="width:${F}px;height:${B}px;border-radius:8px;background:${Q};border:1px solid ${W};display:flex;flex-direction:column;overflow:hidden"><div style="height:${O}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${F-6}px">${b}</span></div><div style="height:${C}px;display:flex;align-items:center;justify-content:center">${le?`<img src="${le}" style="max-width:${F-8}px;max-height:${C-4}px;object-fit:contain">`:`<span style="font-size:24px">${v.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((k==null?void 0:k.effect)||v.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const F=Math.round(75.60000000000001),B=Math.round(310*.54);return`<div style="width:${F}px;height:${B}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${v.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${b}</span></div>`})(),({type:b,owned:v,def:k})=>{v&&Li(b,k,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(S=>{S.addEventListener("click",()=>{z=S.dataset.tab,w="Tous",M="",T=!1,e.querySelectorAll(".col-tab-btn").forEach(f=>{const m=f.dataset.tab===z;f.style.borderBottomColor=m?"var(--green)":"transparent",f.style.color=m?"var(--green)":"var(--gray-600)"}),q(),A()})}),q(),A()}function Li(e,t,i){const n=ye[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,p=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ce=1e3;function Mi(e,t,i,n){var u,y,L;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const _=Ne[o]||{},z=xt[o]||[],w=290,M=360,T=20;function D(K){const $=_[K];return $?{x:$.x*w,y:$.y*M}:null}let R=`<svg width="${w}" height="${M}" viewBox="0 0 ${w} ${M}" xmlns="http://www.w3.org/2000/svg">`;for(const[K,$]of z){const q=D(K),A=D($);!q||!A||(R+=`<line x1="${q.x}" y1="${q.y}" x2="${A.x}" y2="${A.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const K of Object.keys(_)){const $=D(K);if(!$)continue;const q=K.replace(/\d+/,""),A=r[q]||"#555";R+=`<circle cx="${$.x}" cy="${$.y}" r="${T}" fill="${A}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,R+=`<text x="${$.x}" y="${$.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>`}return R+="</svg>",R}const g=t.filter(_=>_.formation===o),x=g.length,E=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Ce.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${x-1} carte${x-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${x<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ce}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(u=document.getElementById("direct-sell-form-btn"))==null||u.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Ce.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=g.find(w=>!w.is_for_sale)||g[0];if(!_){s("Aucune carte à vendre","error");return}const{error:z}=await j.from("cards").delete().eq("id",_.id);if(z){s(z.message,"error");return}await j.from("users").update({credits:(d.profile.credits||0)+Ce}).eq("id",d.profile.id),await c(),s(`+${Ce.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(y=document.getElementById("market-sell-form-btn"))==null||y.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){s("Prix invalide","error");return}await j.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",e.id),await j.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:_}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(L=document.getElementById("cancel-sell-form-btn"))==null||L.addEventListener("click",async()=>{await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await j.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function Ht(e,t,i,n){var R,K,$,q,A,N;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=n,r=e.player,p=t.filter(G=>G.player.id===r.id),g=p.length,x=Ai[r.rarity]||1e3,E=r.rarity!=="legende",u=ni(r),y=Ge(r,r.job),L=r.job2?Ge(r,r.job2):null,_=Je[r.job]||"#1A6B3C",z=r.job2?Je[r.job2]:null,w=oi[r.rarity]||"#ccc",M=vt[r.country_code]||r.country_code||"",{data:T}=await j.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),D=T&&T.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${T.map(G=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${G.club_name} <span style="color:var(--gray-600)">(${G.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${G.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${G.source==="booster"?"Booster":G.price?G.price.toLocaleString("fr")+"€":"—"}</div>
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
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${y}</text>
            </svg>
            ${L!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${z}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${L}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${M}</div>
            ${(R=r.clubs)!=null&&R.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((K=r.clubs)==null?void 0:K.encoded_name)||"").slice(0,6)}</div>`}
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
    ${D}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${x.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),($=document.getElementById("close-detail"))==null||$.addEventListener("click",l),(q=document.getElementById("direct-sell-btn"))==null||q.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${x.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const G=p.find(Z=>!Z.is_for_sale)||p[0];if(!G){s("Aucune carte à vendre","error");return}const{error:U}=await j.from("cards").delete().eq("id",G.id);if(U){s(U.message,"error");return}await j.from("users").update({credits:(d.profile.credits||0)+x}).eq("id",d.profile.id),await o(),s(`+${x.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(A=document.getElementById("market-sell-btn"))==null||A.addEventListener("click",async()=>{const G=parseInt(document.getElementById("sell-price").value);if(!G||G<1){s("Prix invalide","error");return}await j.from("cards").update({is_for_sale:!0,sale_price:G}).eq("id",e.id),await j.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:G}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(N=document.getElementById("cancel-sell-btn"))==null||N.addEventListener("click",async()=>{await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await j.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const Qe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},$e={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ot(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ri(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ai(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function zi(e,t=44,i=58){var x;const n=e?ot(e):null,d=e?ai(e):null,s=ri(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=$e[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),p=Math.round(i*.25),g=i-r-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(x=e==null?void 0:e.clubs)!=null&&x.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function dt(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await j.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Kt(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Kt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await j.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),dt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await j.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await j.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),dt(e,t)})})}async function Kt(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("*").eq("id",e).single(),{data:a}=await j.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(x=>x.card_type==="player"&&x.player),c=(a||[]).filter(x=>x.card_type==="formation"),o=c.map(x=>x.formation).filter(Boolean),{data:r}=await j.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=s.formation||"4-4-2";o.length>0&&!o.includes(p)&&(p=o[0]);const g={deckId:e,name:s.name,formation:p,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(r||[]).forEach(x=>{x.is_starter?g.slots[x.position]=x.card_id:g.subs.includes(x.card_id)||g.subs.push(x.card_id)}),Le(t,g,i)}function Le(e,t,i){var c;const{navigate:n}=i;Qe[t.formation];const d=Ut(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Qe),l=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
  </div>`,Si(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=Ut(t.formation),p={};r.forEach(g=>{t.slots[g]&&(p[g]=t.slots[g])}),t.slots=p,Le(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Bi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),Le(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Ci(t,e,i)})}function Si(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const s=Ne[t.formation]||{},a=ei(t.formation)||[],l={};for(const L of i){const _=t.slots[L],z=_?t.playerCards.find(w=>w.id===_):null;l[L]=z?z.player:null}const c=300,o=300,r=48,p=64,g=13,x=16,E=38;function u(L){const _=s[L];return _?{x:_.x*c,y:_.y*o}:null}let y="";for(const[L,_]of a){const z=u(L),w=u(_);if(!z||!w)continue;const M=l[L]?{...l[L],club_id:l[L].club_id,country_code:l[L].country_code,rarity:l[L].rarity}:null,T=l[_]?{...l[_],club_id:l[_].club_id,country_code:l[_].country_code,rarity:l[_].rarity}:null,D=ke(M,T);D==="#ff3333"||D==="#cc2222"?y+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(y+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,y+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const L of i){const _=u(L);if(!_)continue;const z=l[L],w=L.replace(/\d+/,""),M=$e[w]||"#555",T=(_.x-r/2).toFixed(1),D=(_.y-p/2).toFixed(1),R={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[z==null?void 0:z.rarity]||"#aaa";if(z){const K=ot(z),$=ai(z),q=ri(z.country_code),A=Number(w==="GK"?z.note_g:w==="DEF"?z.note_d:w==="MIL"?z.note_m:z.note_a)||0,N=p-g-x;y+=`<defs><clipPath id="dcp-${L}"><rect x="${T}" y="${(_.y-p/2+g).toFixed(1)}" width="${r}" height="${N}"/></clipPath></defs>`,y+=`<rect x="${T}" y="${D}" width="${r}" height="${p}" rx="5" fill="${M}"/>`,K&&(y+=`<image href="${K}" x="${T}" y="${(_.y-p/2+g).toFixed(1)}" width="${r}" height="${N}" clip-path="url(#dcp-${L})" preserveAspectRatio="xMidYMin slice"/>`),y+=`<rect x="${T}" y="${D}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,y+=`<text x="${_.x.toFixed(1)}" y="${(_.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(z.surname_encoded||"").slice(0,9)}</text>`;const G=(_.y+p/2-x).toFixed(1);y+=`<rect x="${T}" y="${G}" width="${r}" height="${x}" fill="rgba(255,255,255,0.93)"/>`,q&&(y+=`<image href="${q}" x="${(_.x-21).toFixed(1)}" y="${(_.y+p/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),y+=`<text x="${_.x.toFixed(1)}" y="${(_.y+p/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`,$&&(y+=`<image href="${$}" x="${(_.x+r/2-14).toFixed(1)}" y="${(_.y+p/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),y+=`<rect x="${T}" y="${D}" width="${r}" height="${p}" rx="5" fill="none" stroke="${R}" stroke-width="2"/>`}else y+=`<rect x="${T}" y="${D}" width="${r}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,y+=`<text x="${_.x.toFixed(1)}" y="${_.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,y+=`<text x="${_.x.toFixed(1)}" y="${(_.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${w}</text>`;y+=`<rect x="${T}" y="${D}" width="${r}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${L}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-E} ${-E} ${c+E*2} ${o+E*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${y}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(L=>{L.addEventListener("click",()=>ji(L.dataset.pos,t,e,n))})}function ji(e,t,i,n){var g,x,E;const{openModal:d,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(u=>u.id===l):null;(g=c==null?void 0:c.player)==null||g.id;const o=new Set;Object.entries(t.slots).forEach(([u,y])=>{var _;if(u===e||!y)return;const L=t.playerCards.find(z=>z.id===y);(_=L==null?void 0:L.player)!=null&&_.id&&o.add(L.player.id)}),t.subs.forEach(u=>{var L;const y=t.playerCards.find(_=>_.id===u);(L=y==null?void 0:y.player)!=null&&L.id&&o.add(y.player.id)});const r=new Set,p=t.playerCards.filter(u=>{const y=u.player;return!(y.job===a||y.job2===a)||o.has(y.id)||r.has(y.id)?!1:(r.add(y.id),!0)});p.sort((u,y)=>{const L=a==="GK"?u.player.note_g:a==="DEF"?u.player.note_d:a==="MIL"?u.player.note_m:u.player.note_a;return(a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a)-L}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(u=>{var w,M;const y=u.player,L=a==="GK"?y.note_g:a==="DEF"?y.note_d:a==="MIL"?y.note_m:y.note_a,_=ot(y),z={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[y.rarity];return`<div class="player-option" data-card-id="${u.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${$e[a]}">
            ${_?`<img src="${_}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${$e[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${y.firstname} ${y.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${y.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${y.country_code}">
              ${(w=y.clubs)!=null&&w.logo_url?`<img src="${y.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((M=y.clubs)==null?void 0:M.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${y.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${$e[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${z};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",s),(E=document.getElementById("remove-player"))==null||E.addEventListener("click",()=>{delete t.slots[e],s(),Le(i,t,n)}),document.querySelectorAll(".player-option").forEach(u=>{u.addEventListener("click",()=>{t.slots[e]=u.dataset.cardId,s(),Le(i,t,n)})})}function Ci(e,t,i){var c;const{openModal:n,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var p;const r=e.playerCards.find(g=>g.id===o);(p=r==null?void 0:r.player)!=null&&p.id&&s.add(r.player.id)}),e.subs.forEach(o=>{var p;const r=e.playerCards.find(g=>g.id===o);(p=r==null?void 0:r.player)!=null&&p.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var r,p,g;return s.has((r=o.player)==null?void 0:r.id)||a.has((p=o.player)==null?void 0:p.id)?!1:(a.add((g=o.player)==null?void 0:g.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var x;const r=o.player,p=ot(r),g=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${$e[r.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((x=r.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${$e[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),Le(t,e,i)})})}async function Bi(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await j.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await j.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await j.from("deck_cards").insert(l);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Ut(e){const t=Qe[e]||Qe["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Fi(){const{data:e}=await j.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await j.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function Di(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const si=()=>Object.keys(Ne),Gi=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ct={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function qi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ni={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Yt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Oi(e){var r,p;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Vt[i],d=Ri[t.rarity]||"#ccc",s=Yt(t,i),a=t.job2?Yt(t,t.job2):null,l=t.job2?Vt[t.job2]:null,c=qi(t),o=Ni[t.country_code]||t.country_code||"";return`
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
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((p=t.clubs)==null?void 0:p.encoded_name)||"").slice(0,6)}</div>`}
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Ki(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(r=>r.id===l.dataset.boosterId);Zi(o)})})}async function Ki(e,{state:t,toast:i,navigate:n,container:d}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await io()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await j.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),l=new Set((s||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Wt(t.profile,e);else{const p=e.type||"player";p==="player"?c=await Yi(t.profile,e.cardCount,e.cost):p==="game_changer"?c=await Wi(t.profile,e.cardCount,e.cost):p==="formation"?c=await Xi(t.profile,e.cost):c=await Wt(t.profile,e)}c.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=a.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=l.has(p.formation))});const{data:o}=await j.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),Ji(c,e,n)}function Ui(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ae(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Vi(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Ae(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Ae(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Ae(n)>=6),i.length||(i=e.filter(n=>Ae(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Ae(n)>=1&&Ae(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Wt(e,t){if(t.cost>0){const{error:n}=await j.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const d=Di(t.rates);if(d){if(d.card_type==="player"){const s=g=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[g]||g,a=d.rarity?s(d.rarity):null;let l=j.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(g=>{const x=Math.max(Number(g.note_g)||0,Number(g.note_d)||0,Number(g.note_m)||0,Number(g.note_a)||0);return(!d.note_min||x>=d.note_min)&&(!d.note_max||x<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:p}=await j.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();p&&(i.push({...p,player:r}),j.rpc("record_transfer",{p_card_id:p.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await j.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await j.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=si(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await j.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function Yi(e,t,i){if(i>0){const{error:o}=await j.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await j.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(o=>o.job==="GK"),s=n.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const r=o===0&&a?d:o===0?s:n,p=Ui(),g=Vi(r,p);g&&l.push(g)}a&&await j.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await j.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{j.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,r)=>({...c[r],player:o}))}async function Wi(e,t,i){const{error:n}=await j.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await j.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(ct).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await j.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const p=d==null?void 0:d.find(g=>g.name===r.gc_type||g.id===r.gc_definition_id);return{...r,_gcDef:p||null}})}async function Xi(e,t){const{error:i}=await j.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=si(),d=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await j.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function Ji(e,t,i){var q;if(!e||e.length===0){const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",A.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(A),(q=A.querySelector("#anim-close-err"))==null||q.addEventListener("click",()=>A.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=A=>A.touches&&A.touches[0]?A.touches[0].clientX:A.clientX;function o(A){d||(l=!0,a.style.opacity="1",r(A))}function r(A){if(!l||d)return;const N=s.getBoundingClientRect(),G=c(A)-N.left,U=Math.max(0,Math.min(1,G/N.width));a.style.width=U*N.width+"px",U>=.82&&g()}function p(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function g(){var N;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(N=document.getElementById("cut-flash"))==null||N.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const A=document.getElementById("cut-hint");A&&(A.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",p),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",p);let x=0,E=!1;const u=new Set;function y(A){x=A,document.getElementById("reveal-phase").style.display="flex",L(),_(A,0),D()}function L(){const A=document.getElementById("card-dots");A&&(A.innerHTML=e.map((N,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),A.querySelectorAll(".card-dot").forEach(N=>N.addEventListener("click",()=>w(parseInt(N.dataset.i)))))}function _(A,N){var S;const G=e[A],U=document.getElementById("card-counter"),Z=document.getElementById("card-track");U&&(U.textContent=`Carte ${A+1} / ${e.length}`);const te=G.card_type==="player"&&((S=G.player)==null?void 0:S.rarity)==="legende",J=!u.has(A);u.add(A);let de=0;if(G.card_type==="player"&&G.player){const f=G.player,m=f.job||"ATT";de=Number(m==="GK"?f.note_g:m==="DEF"?f.note_d:m==="MIL"?f.note_m:f.note_a)||0}const X=f=>{Z.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${te?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${Qi(G)}</div>
          ${G.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const m=document.getElementById("current-card-wrap");N!==0?(m.style.transition="none",m.style.transform=`translateX(${N>0?100:-100}%)`,requestAnimationFrame(()=>{m.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",m.style.transform="translateX(0)"})):m.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),f||te?K():$(),L()};J&&de>6&&G.card_type==="player"&&G.player?z(G,()=>X(!0)):X(!1)}function z(A,N){var X;E=!0;const G=A.player,U=`https://flagsapi.com/${G.country_code}/flat/64.png`,Z=(X=G.clubs)==null?void 0:X.logo_url,te=document.getElementById("walkout-overlay"),J=document.getElementById("walkout-stage");if(!te||!J){E=!1,N();return}te.style.display="flex";const de=()=>{const S=J.firstElementChild;S&&(S.classList.remove("wo-in"),S.classList.add("wo-out"))};J.innerHTML=`<img class="wo-in" src="${U}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(de,2e3),setTimeout(()=>{var S;J.innerHTML=Z?`<img class="wo-in" src="${Z}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((S=G.clubs)==null?void 0:S.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(de,4450),setTimeout(()=>{te.style.display="none",J.innerHTML="",E=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),N()},4900)}function w(A){if(E||A<0||A>=e.length||A===x)return;const N=A>x?1:-1;x=A,_(A,N)}function M(){w(x+1)}function T(){w(x-1)}function D(){const A=document.getElementById("card-viewport");if(!A||A._swipeBound)return;A._swipeBound=!0;let N=0,G=0,U=0,Z=!1;const te=f=>f.touches?f.touches[0].clientX:f.clientX,J=f=>f.touches?f.touches[0].clientY:f.clientY,de=f=>{Z=!0,N=te(f),G=J(f),U=0},X=f=>{if(!Z)return;U=te(f)-N;const m=J(f)-G;if(Math.abs(U)<Math.abs(m))return;const h=document.getElementById("current-card-wrap");h&&(h.style.transition="none",h.style.transform=`translateX(${U*.6}px) rotate(${U*.02}deg)`)},S=()=>{if(!Z)return;Z=!1;const f=document.getElementById("current-card-wrap"),m=55;U<=-m&&x<e.length-1?M():U>=m&&x>0?T():f&&(f.style.transition="transform .2s ease",f.style.transform="translateX(0)")};A.addEventListener("pointerdown",de),A.addEventListener("pointermove",X),A.addEventListener("pointerup",S),A.addEventListener("pointercancel",S),A.addEventListener("touchstart",de,{passive:!0}),A.addEventListener("touchmove",X,{passive:!0}),A.addEventListener("touchend",S),A.addEventListener("click",f=>{if(Math.abs(U)>8)return;const m=A.getBoundingClientRect();f.clientX-m.left>m.width/2?M():T()})}let R=null;function K(){const A=document.getElementById("fireworks-canvas");if(!A)return;A.width=window.innerWidth,A.height=window.innerHeight;const N=A.getContext("2d"),G=[];function U(){const te=Math.random()*A.width,J=Math.random()*A.height*.6,de=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],X=de[Math.floor(Math.random()*de.length)];for(let S=0;S<60;S++){const f=Math.PI*2/60*S,m=2+Math.random()*5;G.push({x:te,y:J,vx:Math.cos(f)*m,vy:Math.sin(f)*m,alpha:1,color:X,size:2+Math.random()*3})}}U(),R=setInterval(U,600);function Z(){if(document.getElementById("fireworks-canvas")){N.clearRect(0,0,A.width,A.height);for(let te=G.length-1;te>=0;te--){const J=G[te];if(J.x+=J.vx,J.y+=J.vy+.08,J.vy*=.98,J.alpha-=.018,J.alpha<=0){G.splice(te,1);continue}N.globalAlpha=J.alpha,N.fillStyle=J.color,N.beginPath(),N.arc(J.x,J.y,J.size,0,Math.PI*2),N.fill()}N.globalAlpha=1,(R!==null||G.length>0)&&requestAnimationFrame(Z)}}Z()}function $(){R!==null&&(clearInterval(R),R=null);const A=document.getElementById("fireworks-canvas");A&&A.getContext("2d").clearRect(0,0,A.width,A.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{$(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{$(),n.remove(),i("boosters")})}function Qi(e){var t,i;if(e.card_type==="player"&&e.player)return Oi(e);if(e.card_type==="game_changer"){const n=e._gcDef,d=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,c=a[n==null?void 0:n.color]||a.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=ct[e.gc_type])==null?void 0:t.desc)||"",p=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((i=ct[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${d?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${p?`<img src="${p}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
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
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function oo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(wt());window.propeller.push({zone_id:li,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function no(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(wt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:li,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Me={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ze={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function _e(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function me(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pt(e,t){var n,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ze(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function di(){const e=Math.random()*100;return e<10?3:e<30?2:1}function et(e,t){const i=Me[t]||Me["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=Ze(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let r=s.findIndex(p=>p.job===a);if(r===-1&&(r=s.findIndex(p=>p.job2===a)),r===-1&&(r=0),s[r]){const p={...s[r],_line:a};l.push(p),s.splice(r,1)}}const c=Ze(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}function we(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function be(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,i){const d=new Set,s=t.filter(r=>{const p=r.gc_type||r.id;return d.has(p)?!1:(d.add(p),!0)});let a=[];function l(r,p){const g=r._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},E={purple:"#9b59b6",light_blue:"#00bcd4"},u=x[g==null?void 0:g.color]||x.purple,y=E[g==null?void 0:g.color]||E.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${p?"#FFD700":y};background:${u};
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var p,g,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${s.map(E=>{const u=a.find(y=>y.gc_type===E.gc_type);return l(E,!!u)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(E=>{E.addEventListener("click",()=>{const u=E.dataset.id,y=s.find(_=>_.id===u);if(!y)return;const L=a.findIndex(_=>_.gc_type===y.gc_type);L>-1?a.splice(L,1):a.length<3&&a.push(y),o()})}),(p=e.querySelector("#gc-launch"))==null||p.addEventListener("click",()=>{r&&c(a)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>c([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function ro(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){_e(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(r=>r.id),{data:l}=await j.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var _,z,w,M,T;const r=s[c],p=(l||[]).filter(D=>D.deck_id===r.id),g=p.filter(D=>{var R;return D.is_starter&&((R=D.card)==null?void 0:R.player)}).map(D=>pt(D.card,D.position)),x=p.find(D=>{var R;return((R=D.card)==null?void 0:R.card_type)==="formation"}),E=r.formation||((_=x==null?void 0:x.card)==null?void 0:_.formation)||"4-4-2",u=g.length>=11?et(g,E):null,y=g.length>=11;we(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${E} · ${g.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Re(u,E,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((D,R)=>`<div style="width:7px;height:7px;border-radius:50%;background:${R===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${y?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${y?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${y?"pointer":"default"}">
          ${y?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const R=e.querySelector(".deck-preview-wrap svg");R&&(R.removeAttribute("width"),R.removeAttribute("height"),R.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",R.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(z=document.getElementById("prev-deck"))==null||z.addEventListener("click",()=>{c>0&&(c--,o())}),(w=document.getElementById("next-deck"))==null||w.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(M=document.getElementById("validate-deck"))==null||M.addEventListener("click",()=>{y&&t.navigate("match",{matchMode:i,deckId:r.id})}),(T=document.getElementById("cancel-deck-select"))==null||T.addEventListener("click",()=>{be(e),d("home")});const L=document.getElementById("deck-swipe-zone");if(L){let D=0,R=0;L.addEventListener("touchstart",K=>{D=K.touches[0].clientX,R=K.touches[0].clientY},{passive:!0}),L.addEventListener("touchend",K=>{const $=K.changedTouches[0].clientX-D,q=K.changedTouches[0].clientY-R;Math.abs($)<40||Math.abs($)<Math.abs(q)||($<0&&c<s.length-1?(c++,o()):$>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function pi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function he(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:me(e),d=pi(e),s=e._line||e.job||"MIL",a=ze[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(re(e,s))||0)+(e.boost||0),o=ui(e==null?void 0:e.country_code),r=Math.round(i*.19),p=Math.round(i*.25),g=i-Math.round(i*.19)-Math.round(i*.25),x=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ut(e==null?void 0:e.country_code)?`<img src="${ut(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${o}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Fe(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(d+=he(s,40,52),a<n.length-1){const l=ke(s,n[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ut(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ui(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function qe(e,t,i,n,d=310,s=310,a=[]){const l=Ne[t]||{},c=ei(t)||xt[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const z of r)(e[z]||[]).forEach((M,T)=>{o[`${z}${T+1}`]=M});function p(z){const w=l[z];return w?{x:w.x*d,y:w.y*s}:null}let g="";for(const[z,w]of c){const M=p(z),T=p(w);if(!M||!T)continue;const D=o[z],R=o[w],K=ke(D,R);K==="#00ff88"||K==="#FFD700"?(g+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${T.x.toFixed(1)}" y2="${T.y.toFixed(1)}"
        stroke="${K}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${T.x.toFixed(1)}" y2="${T.y.toFixed(1)}"
        stroke="${K}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${T.x.toFixed(1)}" y2="${T.y.toFixed(1)}"
        stroke="${K}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,E=64,u=13,y=16,L={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[z,w]of Object.entries(o)){const M=p(z);if(!M||!w)continue;const T=z.replace(/[0-9]/g,""),D=ze[T]||"#555",R=a.includes(w.cardId),K=i==="attack"&&(["MIL","ATT"].includes(T)||R)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(T)&&!w.used,$=n.includes(w.cardId);let q;i==="attack"?q=R?Math.max(1,Number(w.note_a)||0):T==="MIL"?Number(w.note_m)||0:Number(w.note_a)||0:i==="defense"?q=T==="GK"?Number(w.note_g)||0:T==="MIL"?Number(w.note_m)||0:Number(w.note_d)||0:q=Number(T==="GK"?w.note_g:T==="DEF"?w.note_d:T==="MIL"?w.note_m:w.note_a)||0,q=q+(w.boost||0);const A=(M.x-x/2).toFixed(1),N=(M.y-E/2).toFixed(1),G=w.used?.25:1,U=L[w==null?void 0:w.rarity]||L.normal,Z=$?"#ff3030":U,te=$?3:(w==null?void 0:w.rarity)==="légende"||(w==null?void 0:w.rarity)==="pépite"?2.5:2,J=E-u-y;g+=`<defs><clipPath id="cp-${z}"><rect x="${A}" y="${(M.y-E/2+u).toFixed(1)}" width="${x}" height="${J}"/></clipPath></defs>`,g+=`<rect x="${A}" y="${N}" width="${x}" height="${E}" rx="5" fill="${D}" opacity="${G}"/>`;const de=me(w);de&&!w.used&&(g+=`<image href="${de}" x="${A}" y="${(M.y-E/2+u).toFixed(1)}" width="${x}" height="${J}" clip-path="url(#cp-${z})" preserveAspectRatio="xMidYMin slice"/>`),g+=`<rect x="${A}" y="${N}" width="${x}" height="${u}" rx="4" fill="rgba(255,255,255,0.92)"/>`,g+=`<text x="${M.x.toFixed(1)}" y="${(M.y-E/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(w.name||"").slice(0,9)}</text>`;const X=(M.y+E/2-y).toFixed(1);if(g+=`<rect x="${A}" y="${X}" width="${x}" height="${y}" fill="rgba(255,255,255,0.92)"/>`,w.used)g+=`<text x="${M.x.toFixed(1)}" y="${(M.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const S=ut(w.country_code);S?g+=`<image href="${S}" x="${(M.x-20).toFixed(1)}" y="${(M.y+E/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:g+=`<text x="${(M.x-13).toFixed(1)}" y="${(M.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ui(w.country_code)}</text>`,g+=`<text x="${M.x.toFixed(1)}" y="${(M.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${q}</text>`;const f=pi(w);f?g+=`<image href="${f}" x="${(M.x+x/2-14).toFixed(1)}" y="${(M.y+E/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:w.clubName&&(g+=`<text x="${(M.x+14).toFixed(1)}" y="${(M.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(w.clubName||"").slice(0,3).toUpperCase()}</text>`),w.boost&&(g+=`<rect x="${(M.x+x/2-12).toFixed(1)}" y="${(M.y-E/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,g+=`<text x="${(M.x+x/2-5).toFixed(1)}" y="${(M.y-E/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${w.boost}</text>`)}g+=`<rect x="${A}" y="${N}" width="${x}" height="${E}" rx="5" fill="${$?"rgba(255,255,255,0.12)":"none"}" stroke="${Z}" stroke-width="${te}" opacity="${G}"/>`,K&&(g+=`<rect x="${A}" y="${N}" width="${x}" height="${E}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${w.cardId}" data-role="${T}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${d+_*2} ${s+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${g}
  </svg>`}function Re(e,t,i,n,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${qe(e,t,i,n,d,s,a)}
  </div>`}function Ke(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function fi(e,t,i,n){var M;const{state:d,navigate:s,toast:a}=t;we(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return ro(e,t,i);const c=l.deckId;let o,r,p,g;try{const T=await Promise.all([j.from("decks").select("formation,name").eq("id",c).single(),j.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=T[0].data,p=T[0].error,r=T[1].data,g=T[1].error}catch(T){console.error("[Match] Exception chargement deck:",T),_e(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(p||g){console.error("[Match] Erreur Supabase:",p||g),_e(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const x=(r||[]).filter(T=>{var D;return T.is_starter&&((D=T.card)==null?void 0:D.player)}).map(T=>pt(T.card,T.position)),E=(r||[]).filter(T=>{var D;return!T.is_starter&&((D=T.card)==null?void 0:D.player)}).map(T=>pt(T.card,T.position));if(x.length<11){_e(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>s("decks"));return}const u=(r||[]).find(T=>{var D;return((D=T.card)==null?void 0:D.card_type)==="formation"}),y=(o==null?void 0:o.formation)||((M=u==null?void 0:u.card)==null?void 0:M.formation)||"4-4-2",{data:L,error:_}=await j.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:z}=await j.from("gc_definitions").select("*").eq("is_active",!0),w=(L||[]).map(T=>({...T,_gcDef:(z==null?void 0:z.find(D=>D.name===T.gc_type||D.id===T.gc_definition_id))||null}));n({deckId:c,formation:y,starters:x,subsRaw:E,gcCardsEnriched:w,gcDefs:z||[]})}async function ao(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await fi(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:r,gcCardsEnriched:p,gcDefs:g})=>{try{const x=et(o,c),E=await so(c,s),u=async y=>{try{const{data:L,error:_}=await j.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(_){console.error("[MatchIA] Erreur création match:",_),_e(e,"⚠️","Impossible de créer le match ("+_.message+").","Retour",()=>t.navigate("home"));return}const z={gcDefs:g||[],matchId:L==null?void 0:L.id,mode:a,difficulty:s,formation:c,homeTeam:x,aiTeam:E,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:y,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};co(e,z,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),_e(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!p.length){u([]);return}ci(e,p,u)}catch(x){console.error("[MatchIA] Exception setup:",x),_e(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function so(e,t){var a,l;const{data:i}=await j.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return lo(e);const n=Me[e]||Me["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(E=>E.job===c),r=s.filter(E=>E.job!==c),p=[...o,...r],g=[];for(let E=0;E<n[c];E++){const u=p[E]||s[E];u&&g.push({cardId:"ai-"+u.id+"-"+E,id:u.id,firstname:u.firstname,name:u.surname_encoded,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,clubName:((a=u.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=u.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const x=Ze(g.length);g.forEach((E,u)=>{E._col=x[u]}),d[c]=g}return d}function lo(e){const t=Me[e]||Me["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=Ze(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function co(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${qe(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>po(e,t,i),5e3)}function po(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(u){return u.reduce((y,L)=>y+re(L,"MIL"),0)}function a(u){let y=0;for(let L=0;L<u.length-1;L++){const _=ke(u[L],u[L+1]);_==="#00ff88"?y+=2:_==="#FFD700"&&(y+=1)}return y}const l=s(n)+a(n),c=s(d)+a(d),o=l>=c;function r(u,y,L,_){return`<div id="duel-row-${_}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${y}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${u.map((z,w)=>{const M=w<u.length-1?ke(z,u[w+1]):null,T=!M||M==="#ff3333"||M==="#cc2222",D=M==="#00ff88"?"+2":M==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${_}" data-idx="${w}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${he({...z,note:re(z,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${w<u.length-1?`<div class="duel-link duel-link-${_}" data-idx="${w}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${T?"rgba(255,255,255,0.12)":M};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${T?"none":`0 0 8px ${M}`}">
            ${D?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${M}">${D}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${_}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(u)} + ${a(u)} liens = <b style="color:#fff">${s(u)+a(u)}</b>
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
  </div>`;const p=()=>{const u=(y,L)=>e.querySelectorAll(y).forEach((_,z)=>{setTimeout(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"},L+z*90)});u(".duel-card-home",150),u(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((y,L)=>{setTimeout(()=>{y.style.opacity="1"},L*70)}),900),setTimeout(()=>{const y=e.querySelector("#vs-label");y&&(y.style.opacity="1",y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(L=>L.style.opacity="1")},1250),setTimeout(()=>{g("score-home",l,800),g("score-ai",c,800)},1500)};function g(u,y,L){const _=document.getElementById(u);if(!_)return;const z=performance.now(),w=M=>{const T=Math.min(1,(M-z)/L);_.textContent=Math.round(y*(1-Math.pow(1-T,3))),T<1?requestAnimationFrame(w):_.textContent=y};requestAnimationFrame(w)}requestAnimationFrame(p),t.attacker=o?"home":"ai";const x=o?di():null;o&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(u=>({name:u.name,note:re(u,"MIL"),portrait:me(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:re(u,"MIL"),portrait:me(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const E=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",se(e,t,i),t.attacker==="ai"&&setTimeout(()=>ft(e,t,i),800)};setTimeout(()=>{const u=document.getElementById("score-home"),y=document.getElementById("score-ai"),L=document.getElementById(o?"duel-row-home":"duel-row-ai"),_=document.getElementById(o?"duel-row-ai":"duel-row-home"),z=o?u:y,w=o?y:u;z&&(z.style.fontSize="80px",z.style.color=o?"#FFD700":"#ff6b6b",z.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),w&&(w.style.opacity="0.25"),setTimeout(()=>{L&&(L.style.transformOrigin="center",L.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",L.style.zIndex="5"),setTimeout(()=>{var T;const M=document.getElementById("duel-shock");if(M){const D=(T=_||L)==null?void 0:T.getBoundingClientRect(),R=e.querySelector(".match-screen").getBoundingClientRect();D&&(M.style.top=D.top-R.top+D.height/2+"px"),M.style.animation="shockwave .5s ease-out forwards"}_&&(_.style.transformOrigin="center",_.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var T;const M=document.getElementById("duel-finale");M&&(M.innerHTML=`
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
          </button>`,M.style.transition="opacity .45s ease",M.style.opacity="1",M.style.pointerEvents="auto",(T=document.getElementById("start-match-btn"))==null||T.addEventListener("click",E))},600)},700)},2800)}function uo(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>Ke(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>Ke(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${Ke(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${Ke(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function se(e,t,i){var _,z,w,M,T,D,R,K;const n=t.selected.map($=>$.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter($=>!d.includes($.cardId));Object.values(t.homeTeam).flat().filter($=>$.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs;const l=!["GK","DEF","MIL","ATT"].some($=>(t.aiTeam[$]||[]).some(q=>!q.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter($=>!$.used),o=t.phase==="attack"&&l&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter($=>!$.used).map($=>$.cardId):[];t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",p=t.phase==="attack",g=t.phase==="defense",x=t.phase==="finished",E=t.gcCards.filter($=>!t.usedGc.includes($.id)),u=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${Fe((q.players||[]).map(A=>({...A,used:!1})),"#ff6b6b",q.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const q=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Fe((q.players||[]).map(A=>({...A,used:!1})),"#00ff88",q.total)}
          </div>`}const $=t.log[t.log.length-1];return $?'<div style="padding:2px 4px">'+uo($)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const $=window.innerWidth>=700,q=(X,S,f)=>{var V,Q;const m=(t.gcDefs||[]).find(W=>W.name===X.gc_type),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",v=(m==null?void 0:m.name)||X.gc_type,k=(m==null?void 0:m.effect)||((V=ye[X.gc_type])==null?void 0:V.desc)||"",I=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,F=((Q=ye[X.gc_type])==null?void 0:Q.icon)||"⚡",B=Math.round(f*.22),C=Math.round(f*.22),O=f-B-C,P=v.length>12?7:9;return`<div class="gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
          style="box-sizing:border-box;width:${S}px;height:${f}px;border-radius:10px;border:2px solid ${b};background:${h};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${B}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${P}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${S-6}px">${v}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${O}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${I?`<img src="${I}" style="max-width:${S-10}px;max-height:${O-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(O*.55)}px">${F}</span>`}
          </div>
          <div style="height:${C}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${k.slice(0,38)}</span>
          </div>
        </div>`},A=(X,S)=>{var f;return`<div id="boost-card"
          style="box-sizing:border-box;width:${X}px;height:${S}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(S*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(S*.2)}px">⚡</div>
            <div style="font-size:${Math.round(S*.09)}px;color:#000;font-weight:900">+${(f=t.boostCard)==null?void 0:f.value}</div>
          </div>`},N=(X,S)=>S?A(110,150):q(X,110,150),G=(X,S)=>S?A(68,95):q(X,68,95),U=$?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Z=x?`<button id="btn-results" style="${U};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${U};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:p?`<button id="btn-action" style="${U};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${U};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${U};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,te=p||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",J=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${$?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(X=>`<div class="sub-btn-col" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${he(X,44,58)}</div>`).join("")}
      </div>`,de=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Re(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return $?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${J}
          ${de}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${E.map(X=>N(X,!1)).join("")}
              ${u?N(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${Z}${te}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${J}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Re(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${E.map(X=>G(X,!1)).join("")}
            ${u?G(null,!0):""}
          </div>
          <div>${Z}${te}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map($=>{var q,A,N;if($.type==="duel"){const G=$.isGoal,U=$.homeScored?"#FFD700":G?"#ff6b6b":"rgba(255,255,255,0.3)",Z=$.homeScored?"⚽ BUT !":G?"⚽ BUT IA !":(q=$.homePlayers)!=null&&q.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${G?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${U};margin-bottom:4px">
                <div style="font-size:9px;color:${U};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Z}</div>
                ${(A=$.homePlayers)!=null&&A.length?`<div style="margin-bottom:3px">${Fe($.homePlayers,"rgba(255,255,255,0.7)",$.homeTotal)}</div>`:""}
                ${(N=$.aiPlayers)!=null&&N.length?`<div style="opacity:0.7">${Fe($.aiPlayers,"#ff6b6b",$.aiTotal)}</div>`:""}
              </div>`}return $.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${$.outPlayer?he({...$.outPlayer,used:!0,_line:$.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${$.inPlayer?he({...$.inPlayer,_line:$.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:$.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${$.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${$.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function y(){const $=e.querySelector(".match-screen");if(!$)return;const q=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);$.style.bottom="auto",$.style.height=q+"px",$.style.minHeight=q+"px",$.style.maxHeight=q+"px",$.style.overflow="hidden";const A=e.querySelector("#mobile-action-bar"),N=e.querySelector("#mobile-play-area");A&&N&&(N.style.paddingBottom=A.offsetHeight+"px")}if(y(),setTimeout(y,120),setTimeout(y,400),setTimeout(y,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",y),window.visualViewport.addEventListener("scroll",y)),window.addEventListener("resize",y)),function(){const q=e.querySelector(".terrain-wrapper svg");q&&(q.removeAttribute("width"),q.removeAttribute("height"),q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",q.setAttribute("viewBox","-26 -26 352 352"),q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const $=e.querySelector(".terrain-wrapper svg");$&&($.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let $=!1,q=30;const A=()=>document.getElementById("match-timer"),N=()=>{const G=A();if(!G)return;const U=String(Math.floor(q/60)).padStart(2,"0"),Z=String(q%60).padStart(2,"0");G.textContent=` ${U}:${Z}`,G.style.color=$?"#ff2222":"#ff9500",G.style.fontWeight="900"};N(),t._timerInt=setInterval(()=>{if(q--,q<0)if(!$)$=!0,q=15,N();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",G.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(G),setTimeout(()=>{G.remove(),De(e,t,i)},2500)}else N()},1e3)}(_=document.getElementById("match-quit"))==null||_.addEventListener("click",()=>{be(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,De(e,t,i))}),(z=document.getElementById("view-ai"))==null||z.addEventListener("click",()=>$o(t,i)),(w=document.getElementById("toggle-history"))==null||w.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.add("open")}),(M=document.getElementById("close-history"))==null||M.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.remove("open")}),(T=document.getElementById("btn-action"))==null||T.addEventListener("click",()=>{t.selected.length!==0&&(p?go(e,t,i):g&&mo(e,t,i))}),(D=document.getElementById("btn-results"))==null||D.addEventListener("click",()=>De(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach($=>{$.addEventListener("click",()=>fo($,t,e,i))}),e.querySelectorAll(".gc-mini").forEach($=>{$.addEventListener("click",()=>ho($.dataset.gcId,$.dataset.gcType,e,t,i))}),(R=document.getElementById("boost-card"))==null||R.addEventListener("click",()=>wo(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach($=>{$.addEventListener("click",()=>Xt(e,t,i,$.dataset.subId))}),(K=document.getElementById("sub-btn-main"))==null||K.addEventListener("click",()=>Xt(e,t,i))}function fo(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}se(i,t,n)}function $t(e,t,i){e.matchId&&j.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function go(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),$t(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=yt(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",se(e,t,i),setTimeout(()=>xo(e,t,i),1200)}function mo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),$t(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=ht(n,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=bt(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:me(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:me(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,se(e,t,i),tt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Ie(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ie(e,t,i,"home-attack")}function ft(e,t,i){$t(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=ii(n,"attack",t.difficulty);if(!d.length){Ve(e,t,i);return}const s=yt(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:me(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,se(e,t,i),tt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Ie(e,t,i,"home-attack")});return}t.phase="defense",se(e,t,i)}function xo(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=ii(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(p=>(t.aiTeam[p]||[]).filter(g=>!g.used)).length){t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(x=>({name:x.name,note:re(x,x._line||x.job),portrait:me(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,se(e,t,i),tt(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{Ie(e,t,i,"ai-attack")});return}const a=d.length>0?ht(d,t.modifiers.ai).total:0;d.forEach(p=>{p.used=!0});const l=bt(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(p=>({name:p.name,note:p._line==="MIL"?p.note_m:p.note_a,portrait:me(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:p._line==="GK"?p.note_g:p._line==="MIL"?p.note_m:p.note_d,portrait:me(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,se(e,t,i),tt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{Ie(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,Ie(e,t,i,"ai-attack")}function Ie(e,t,i,n){if(t.round++,gi(t)){De(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ve(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ve(e,t,i);return}setTimeout(()=>ft(e,t,i),100);return}t.phase="attack",se(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ve(e,t,i);return}t.phase="ai-attack",se(e,t,i),setTimeout(()=>ft(e,t,i),800)}}function gi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Ve(e,t,i){gi(t)?De(e,t,i):(t.phase="attack",se(e,t,i))}function yo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=me(e),s=me(t),a=ze[e.job]||"#555",l=ze[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
  `,document.body.appendChild(n);let r=!1;const p=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",p),setTimeout(p,2e3)}function Be(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Xt(e,t,i,n=null){if(t.phase!=="attack"){Be("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Be(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(p=>p.used),s=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!d.length){Be("Aucun joueur utilisé à remplacer");return}if(!s.length){Be("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(p=>p.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var L,_,z,w,M,T;const p=d[a],g=s[l],x=Math.min(130,Math.round((window.innerWidth-90)/2)),E=Math.round(x*1.35),u=D=>`background:rgba(255,255,255,0.12);border:none;color:${D?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${D?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${u(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${g?he({...g,used:!1,boost:0},x,E):"<div>—</div>"}</div>
        <button id="in-down" style="${u(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${u(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${p?he({...p,used:!1,boost:0},x,E):"<div>—</div>"}</div>
        <button id="out-down" style="${u(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(L=o.querySelector("#sub-close"))==null||L.addEventListener("click",()=>o.remove()),(_=o.querySelector("#out-up"))==null||_.addEventListener("click",()=>{a>0&&(a--,r())}),(z=o.querySelector("#out-down"))==null||z.addEventListener("click",()=>{a<d.length-1&&(a++,r())}),(w=o.querySelector("#in-up"))==null||w.addEventListener("click",()=>{l>0&&(l--,r())}),(M=o.querySelector("#in-down"))==null||M.addEventListener("click",()=>{l<s.length-1&&(l++,r())});const y=(D,R,K,$)=>{const q=o.querySelector("#"+D);if(!q)return;let A=0;q.addEventListener("touchstart",N=>{A=N.touches[0].clientY},{passive:!0}),q.addEventListener("touchend",N=>{const G=N.changedTouches[0].clientY-A;if(Math.abs(G)<30)return;const U=R();G<0&&U<$-1?(K(U+1),r()):G>0&&U>0&&(K(U-1),r())},{passive:!0})};y("in-panel",()=>l,D=>l=D,s.length),y("out-panel",()=>a,D=>a=D,d.length),(T=o.querySelector("#sub-confirm"))==null||T.addEventListener("click",D=>{if(D.preventDefault(),D.stopPropagation(),c)return;c=!0;const R=d[a],K=s[l];if(!R||!K)return;let $=null,q=-1;for(const[N,G]of Object.entries(t.homeTeam)){const U=(G||[]).findIndex(Z=>Z.cardId===R.cardId);if(U!==-1){$=N,q=U;break}}if(q===-1||!$){Be("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const A={...K,_line:$,_col:R._col||0,used:!1,boost:0};t.homeTeam[$].splice(q,1,A),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(K.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:R.name,firstname:R.firstname,note:re(R,$),portrait:me(R),job:R.job,country_code:R.country_code,rarity:R.rarity,clubName:R.clubName,clubLogo:R.clubLogo},inPlayer:{name:K.name,firstname:K.firstname,note:re(K,$),portrait:me(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},text:`🔄 ${K.firstname} ${K.name} remplace ${R.firstname} ${R.name}`}),o.remove(),yo(R,K,()=>se(e,t,i))})}document.body.appendChild(o),r()}function ho(e,t,i,n,d){var E,u;const s=(n.gcDefs||[]).find(y=>y.name===t),a=ye[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,p=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,g=a.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
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
    </div>`,document.body.appendChild(x),(E=x.querySelector("#gc-back"))==null||E.addEventListener("click",()=>x.remove()),(u=x.querySelector("#gc-use"))==null||u.addEventListener("click",()=>{x.remove(),vo(e,t,i,n,d)})}function Ue(e,t,i,n,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const g=p._line||p.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g]||"#555",E=re(p,g)+(p.boost||0),u=l.find(y=>y.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${u?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${E}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${g}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.cid,x=e.find(u=>u.cardId===g);if(!x)return;const E=l.findIndex(u=>u.cardId===g);E>-1?l.splice(E,1):l.length<t&&l.push(x),c()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const bo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(Ue(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(c=>{const o=(n.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),se(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),se(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,a)=>{const l=n==="home"?d.homeTeam:d.aiTeam,c=n==="ai"?"adverse":"allié",o=Object.entries(l).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,p])=>p.filter(g=>!g.used).map(g=>({...g,_line:r})));return o.length?(Ue(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,r=>{r.forEach(p=>{const x=((n==="home"?d.homeTeam:d.aiTeam)[p._line]||[]).find(E=>E.cardId===p.cardId);x&&(x.boost=(x.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),se(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),se(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const a=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(p=>!p.used).map(p=>({...p,_line:o})));return c.length?(Ue(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,o=>{o.forEach(r=>{const g=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(x=>x.cardId===r.cardId);g&&(g.used=!0,n.log.push({text:`❌ ${g.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),se(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),se(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(Ue(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),se(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),se(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function vo(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=bo[a.effect_type];c?c(a.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(p=>p.used).map(p=>({...p,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,p)=>re(p,"ATT")-re(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}j.from("cards").delete().eq("id",e).then(()=>{}),l&&se(i,n,d)}function wo(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ze[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${re(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),se(e,t,i)})})}function tt(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${ze[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function De(e,t,i){var r,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=Ei(t.mode,a);t.matchId&&await j.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?c.wins=(n.profile.wins||0)+1:s?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await j.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),be(e),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{o.remove(),be(e),i.navigate("match",{matchMode:t.mode})})}function $o(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${qe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function _o(e,t){await fi(e,t,"random",({deckId:i,formation:n,starters:d,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const c=o=>ko(e,t,i,n,d,s,o,l||[]);if(!a.length){c([]);return}ci(e,a,c)})}async function ko(e,t,i,n,d,s,a=[],l=[]){var _;const{state:c,navigate:o,toast:r}=t;let p=!1,g=null;we(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const x=async(z=!0)=>{p=!0,g&&(j.removeChannel(g),g=null),z&&await j.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(_=document.getElementById("mm-cancel"))==null||_.addEventListener("click",async()=>{try{await x(!0)}catch{}be(e),o("home")});const E=async(z,w,M)=>{if(p)return;p=!0,g&&(j.removeChannel(g),g=null);const T=document.getElementById("mm-status");T&&(T.textContent="Adversaire trouvé !"),await new Promise(D=>setTimeout(D,600)),e.isConnected&&Eo(e,t,z,M,a,l)},{data:u,error:y}=await j.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(y||!(u!=null&&u.success)){r("Erreur de matchmaking","error"),be(e),o("home");return}if(u.matched){E(u.match_id,u.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),g=j.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},z=>{const w=z.new;w.status==="matched"&&w.match_id&&E(w.match_id,w.matched_with,!0)}).subscribe()}async function Eo(e,t,i,n,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",p=(d||[]).map(f=>f.id),g=(d||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await j.from("matches").select("*").eq("id",i).single();if(!x){c("Match introuvable","error"),l("home");return}async function E(){const[{data:f},{data:m},{data:h},{data:b}]=await Promise.all([j.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),j.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),j.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),j.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),v=C=>({cardId:C.card_id,position:C.position,id:C.id,firstname:C.firstname,name:C.surname_encoded,country_code:C.country_code,club_id:C.club_id,job:C.job,job2:C.job2,note_g:Number(C.note_g)||0,note_d:Number(C.note_d)||0,note_m:Number(C.note_m)||0,note_a:Number(C.note_a)||0,rarity:C.rarity,skin:C.skin,hair:C.hair,hair_length:C.hair_length,clubName:C.club_encoded_name||null,clubLogo:C.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),k=((f==null?void 0:f.starters)||[]).map(C=>v(C)),I=((m==null?void 0:m.starters)||[]).map(C=>v(C)),F=(f==null?void 0:f.formation)||"4-4-2",B=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:et(k,F),p2Team:et(I,B),p1Subs:((f==null?void 0:f.subs)||[]).map(C=>v(C)),p2Subs:((m==null?void 0:m.subs)||[]).map(C=>v(C)),p1Formation:F,p2Formation:B,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?p:[],gc_p2:n?[]:p,gcCardsFull_p1:n?g:[],gcCardsFull_p2:n?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,lastActionAt:new Date().toISOString()}}let u=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!u)if(n){u=await E();const{data:f}=await j.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await j.from("matches").update({game_state:u,turn_user_id:x.home_id}).eq("id",i):u=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<30&&!u;f++){await new Promise(h=>setTimeout(h,400));const{data:m}=await j.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(u=m.game_state)}if(!u){c("Erreur de synchronisation","error"),l("home");return}u.gc_p2=p,u.gcCardsFull_p2=g,await j.from("matches").update({game_state:u}).eq("id",i)}let y=!1,L=null,_=!1;function z(f){var b,v;try{j.removeChannel(w)}catch{}const m=f.winner_id===a.profile.id;(b=h.remove)==null||b.call(h);const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",h.innerHTML=`
      <div style="font-size:64px">${m?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${m?"#FFD700":"#ff6b6b"}">${m?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px">${u[o+"Name"]} ${u[o+"Score"]} – ${u[r+"Score"]} ${u[r+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(v=h.querySelector("#pvp-end-home"))==null||v.addEventListener("click",()=>{h.remove(),be(e),l("home")})}const w=j.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const m=f.new;try{if(m.status==="finished"||m.forfeit){if(y)return;y=!0,L&&(clearInterval(L),L=null),m.game_state&&(u=m.game_state),z(m);return}m.game_state&&(u=m.game_state,$())}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function M(f){Object.assign(u,f),u.lastActionAt=new Date().toISOString();const{error:m}=await j.from("matches").update({game_state:u}).eq("id",i);m&&c("Erreur de synchronisation","error");try{$()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function T(){if(y)return;y=!0,L&&(clearInterval(L),L=null);const f=n?x.away_id:x.home_id;try{await j.from("matches").update({status:"finished",forfeit:!0,winner_id:f}).eq("id",i)}catch{}try{j.removeChannel(w)}catch{}be(e),l("home")}const D={BOOST_STAT:({value:f=1,count:m=1,roles:h=[]},b,v)=>{const k=b[o+"Team"],I=Object.entries(k).filter(([F])=>!h.length||h.includes(F)).flatMap(([F,B])=>B.filter(C=>!C.used).map(C=>({...C,_line:F})));if(!I.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(b);return}R(I,m,`Choisir ${m} joueur(s) à booster (+${f})`,F=>{F.forEach(B=>{const C=(k[B._line]||[]).find(O=>O.cardId===B.cardId);C&&(C.boost=(C.boost||0)+f,b.log.push({text:`⚡ +${f} sur ${C.name}`,type:"info"}))}),b[o+"Team"]=k,v(b)})},DEBUFF_STAT:({value:f=1,count:m=1,roles:h=[],target:b="ai"},v,k)=>{const I=b==="home"?o:r,F=v[I+"Team"],B=b==="home"?"allié":"adverse",C=Object.entries(F).filter(([O])=>!h.length||h.includes(O)).flatMap(([O,P])=>P.filter(V=>!V.used).map(V=>({...V,_line:O})));if(!C.length){v.log.push({text:`🎯 Aucun joueur ${B}`,type:"info"}),k(v);return}R(C,m,`Choisir ${m} joueur(s) ${B}(s) (-${f})`,O=>{O.forEach(P=>{const V=(F[P._line]||[]).find(Q=>Q.cardId===P.cardId);V&&(V.boost=(V.boost||0)-f,v.log.push({text:`🎯 -${f} sur ${V.name}`,type:"info"}))}),v[I+"Team"]=F,k(v)})},GRAY_PLAYER:({count:f=1,roles:m=[],target:h="ai"},b,v)=>{const k=h==="home"?o:r,I=b[k+"Team"],F=h==="home"?"allié":"adverse",B=Object.entries(I).filter(([C])=>!m.length||m.includes(C)).flatMap(([C,O])=>O.filter(P=>!P.used).map(P=>({...P,_line:C})));if(!B.length){b.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),v(b);return}R(B,f,`Choisir ${f} joueur(s) ${F}(s) à exclure`,C=>{C.forEach(O=>{const P=(I[O._line]||[]).find(V=>V.cardId===O.cardId);P&&(P.used=!0,b.log.push({text:`❌ ${P.name} exclu !`,type:"info"}))}),b[k+"Team"]=I,v(b)})},REVIVE_PLAYER:({count:f=1,roles:m=[]},h,b)=>{const v=h[o+"Team"],k=Object.entries(v).filter(([I])=>!m.length||m.includes(I)).flatMap(([I,F])=>F.filter(B=>B.used).map(B=>({...B,_line:I})));if(!k.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(h);return}R(k,f,`Choisir ${f} joueur(s) à ressusciter`,I=>{I.forEach(F=>{const B=(v[F._line]||[]).find(C=>C.cardId===F.cardId);B&&(B.used=!1,h.log.push({text:`💫 ${B.name} ressuscité !`,type:"info"}))}),h[o+"Team"]=v,b(h)})},REMOVE_GOAL:({},f,m)=>{const h=r+"Score";f[h]>0?(f[h]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(f)},ADD_GOAL_DRAW:({},f,m)=>{f[o+"Score"]===f[r+"Score"]?(f[o+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(f)},ADD_SUB:({value:f=1},m,h)=>{m.maxSubs=(m.maxSubs||3)+f,m.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),h(m)},CUSTOM:({},f,m)=>m(f)};function R(f,m,h,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function I(){var B,C;const F=f.map(O=>{const P={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[O._line]||"#555",V=re(O,O._line)+(O.boost||0),W=k.find(Y=>Y.cardId===O.cardId)?"#FFD700":"rgba(255,255,255,0.25)",le=O.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${O.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${W};background:${P};overflow:hidden;cursor:pointer;${le}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${O.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${V}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${O._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${k.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${k.length}/${m})
          </button>
        </div>`,(B=v.querySelector("#pp-close"))==null||B.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(O=>{O.addEventListener("click",()=>{const P=O.dataset.cid,V=f.find(W=>W.cardId===P),Q=k.findIndex(W=>W.cardId===P);V&&(Q>-1?k.splice(Q,1):k.length<m&&k.push(V),I())})}),(C=v.querySelector("#pp-confirm"))==null||C.addEventListener("click",()=>{v.remove(),b(k)})}I(),document.body.appendChild(v)}async function K(f,m){const b=(u["gcCardsFull_"+o]||[]).find(F=>F.id===f),v=(b==null?void 0:b._gcDef)||(u.gcDefs||[]).find(F=>{var B;return F.name===m||((B=F.name)==null?void 0:B.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),k=[...u["usedGc_"+o]||[],f];if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const F=D[v.effect_type];if(F){const B={...u};F(v.effect_params||{},B,async C=>{C["usedGc_"+o]=k,await M(C)});return}}const I={...u};switch(m){case"Remplacement+":I.maxSubs=(I.maxSubs||3)+1,I.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const F=r+"Score";I[F]>0&&(I[F]--,I.log.push({text:"🚫 But annulé",type:"info"}));break}}I["usedGc_"+o]=k,await M(I)}function $(){var Lt,Mt,zt,St,jt,Ct;if(u.phase==="reveal")return q();if(u.phase==="midfield")return A();if(u.phase==="finished")return S();const f=u[o+"Team"],m=u[r+"Team"],h=u[o+"Score"],b=u[r+"Score"],v=u[o+"Name"],k=u[r+"Name"],I=u.phase===o+"-attack",F=u.phase===o+"-defense",B=!I&&!F,C=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],O=C.map(H=>H.cardId),P=window.innerWidth>=700,V=u[o+"Subs"]||[],Q=u["usedSubIds_"+o]||[],W=V.filter(H=>!Q.includes(H.cardId)),le=u["gcCardsFull_"+o]||[],Y=u["usedGc_"+o]||[],ie=le.filter(H=>!Y.includes(H.id)),ae=u.boostOwner===o&&!u.boostUsed,pe=!["GK","DEF","MIL","ATT"].some(H=>(m[H]||[]).some(ee=>!ee.used)),ge=[...f.MIL||[],...f.ATT||[]].filter(H=>!H.used),ce=I&&pe&&ge.length===0?[...f.GK||[],...f.DEF||[]].filter(H=>!H.used).map(H=>H.cardId):[];function ue(H,ee,fe){var Dt,Gt;const oe=H._gcDef,je={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[oe==null?void 0:oe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",at={purple:"#b06ce0",light_blue:"#00d4ef"}[oe==null?void 0:oe.color]||"#b06ce0",ve=(oe==null?void 0:oe.name)||H.gc_type,Pe=(oe==null?void 0:oe.effect)||((Dt=ye[H.gc_type])==null?void 0:Dt.desc)||"",Te=oe!=null&&oe.image_url?`/manager-wars/icons/${oe.image_url}`:null,bi=((Gt=ye[H.gc_type])==null?void 0:Gt.icon)||"⚡",Bt=Math.round(fe*.22),Ft=Math.round(fe*.22),st=fe-Bt-Ft;return`<div class="pvp-gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}" style="box-sizing:border-box;width:${ee}px;height:${fe}px;border-radius:10px;border:2px solid ${at};background:${je};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ve.length>12?7:9}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ee-6}px">${ve}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${st}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Te?`<img src="${Te}" style="max-width:${ee-10}px;max-height:${st-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(st*.55)}px">${bi}</span>`}
        </div>
        <div style="height:${Ft}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Pe.slice(0,38)}</span>
        </div>
      </div>`}function xe(H,ee){return`<div id="pvp-boost-card" style="box-sizing:border-box;width:${H}px;height:${ee}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
        <div style="font-size:${P?22:18}px">⚡</div>
        <div style="font-size:${P?11:9}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(H=>`<div class="pvp-sub-btn" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${he(H,P?60:44,P?78:58)}</div>`).join("")}
    </div>`,Et=I?"attack":F?"defense":"idle",yi=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${Re(f,u[o+"Formation"],Et,O,300,300,ce)}
      </div>
    </div>`,rt=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Tt=I?`<button id="pvp-action" style="${rt};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${C.length===0&&ce.length===0&&ge.length===0||C.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${rt};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${C.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${rt};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${k}</div>`,At=I||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${C.length}/3 sélectionné(s)</div>`:"",Oe=(u.log||[]).slice(-1)[0],hi=F&&((Lt=u.pendingAttack)!=null&&Lt.players)?`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE</div>
          ${Fe(u.pendingAttack.players.map(H=>({...H,used:!1})),"#ff6b6b",u.pendingAttack.total)}
        </div>`:Oe?`<div style="padding:7px 10px;border-left:3px solid ${Oe.type==="goal"?"#FFD700":Oe.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"};font-size:12px;color:#fff">${Oe.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>',It=`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${v} <span style="color:#FFD700;font-size:18px">${h}</span> – <span style="color:#FFD700;font-size:18px">${b}</span> ${k}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${B?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${B?`⏳ Tour de ${k}`:I?"⚔️ À vous d'attaquer !":"🛡️ À vous de défendre !"}
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${hi}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;we(e),e.style.overflow="hidden",P?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${It}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Se}
          ${yi}
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${ie.map(H=>ue(H,110,150)).join("")}
              ${ae?xe(110,150):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${Tt}${At}</div>
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${It}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Re(f,u[o+"Formation"],Et,O,300,300,ce)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${W.map(H=>`<div class="pvp-sub-btn" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${he(H,44,58)}</div>`).join("")}
            ${ie.map(H=>ue(H,68,95)).join("")}
            ${ae?xe(68,95):""}
          </div>
          <div>${Tt}${At}</div>
        </div>
      </div>`;function Ee(){const H=e.querySelector(".match-screen");if(!H)return;const ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);H.style.height=ee+"px",H.style.minHeight=ee+"px",H.style.maxHeight=ee+"px",H.style.overflow="hidden";const fe=e.querySelector("#mobile-action-bar"),oe=e.querySelector("#mobile-play-area");fe&&oe&&(oe.style.paddingBottom=fe.offsetHeight+"px")}if(Ee(),setTimeout(Ee,120),setTimeout(Ee,400),_||(_=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ee),window.visualViewport.addEventListener("scroll",Ee)),window.addEventListener("resize",Ee)),function(){const ee=e.querySelector(".terrain-wrapper svg");ee&&(ee.removeAttribute("width"),ee.removeAttribute("height"),ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ee.setAttribute("viewBox","-26 -26 352 352"),ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(H=>{H.addEventListener("click",()=>{if(!I&&!F)return;const ee=H.dataset.cardId,fe=H.dataset.role,je=(u[o+"Team"][fe]||[]).find(Te=>Te.cardId===ee);if(!je||je.used)return;const at=ce.includes(ee);if(I&&!["MIL","ATT"].includes(fe)&&!at)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const ve=u["selected_"+o],Pe=ve.findIndex(Te=>Te.cardId===ee);Pe>-1?ve.splice(Pe,1):ve.length<3&&ve.push({...je,_role:fe}),$()})}),e.querySelectorAll(".pvp-sub-btn").forEach(H=>{H.addEventListener("click",()=>{if(!I){c("Remplacement uniquement avant une attaque","warning");return}const ee=H.dataset.subId;U(ee)})}),e.querySelectorAll(".pvp-gc-mini").forEach(H=>{H.addEventListener("click",()=>N(H.dataset.gcId,H.dataset.gcType))}),(Mt=e.querySelector("#pvp-boost-card"))==null||Mt.addEventListener("click",()=>G()),(zt=e.querySelector("#pvp-action"))==null||zt.addEventListener("click",()=>{I?J():F&&de()}),(St=e.querySelector("#pvp-quit"))==null||St.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&T()}),(jt=e.querySelector("#pvp-view-opp"))==null||jt.addEventListener("click",()=>Z()),(Ct=e.querySelector("#pvp-toggle-history"))==null||Ct.addEventListener("click",()=>te()),L&&(clearInterval(L),L=null),(I||F)&&!y){let H=30,ee=!1;const fe=()=>document.getElementById("pvp-timer"),oe=()=>{fe()&&(fe().textContent=H+"s",fe().style.color=ee?"#ff4444":"#fff")};oe(),L=setInterval(()=>{H--,H<0?ee?(clearInterval(L),L=null,T()):(ee=!0,H=15,oe()):oe()},1e3)}}function q(){we(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${qe(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}function A(){const f=u[o+"Team"].MIL||[],m=u[r+"Team"].MIL||[];function h(Y){return Y.reduce((ie,ae)=>ie+re(ae,"MIL"),0)}function b(Y){let ie=0;for(let ae=0;ae<Y.length-1;ae++){const pe=ke(Y[ae],Y[ae+1]);pe==="#00ff88"?ie+=2:pe==="#FFD700"&&(ie+=1)}return ie}const v=h(f)+b(f),k=h(m)+b(m),I=v>=k;function F(Y,ie,ae){return`<div id="duel-row-${ae}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ie}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Y.map((pe,ge)=>{const ce=ge<Y.length-1?ke(pe,Y[ge+1]):null,ue=!ce||ce==="#ff3333"||ce==="#cc2222",xe=ce==="#00ff88"?"+2":ce==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ae}" data-idx="${ge}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${he({...pe,note:re(pe,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ge<Y.length-1?`<div class="duel-link duel-link-${ae}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ue?"rgba(255,255,255,0.12)":ce};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ue?"none":`0 0 8px ${ce}`}">
              ${xe?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ce}">${xe}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ae}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(Y)} + ${b(Y)} liens = <b style="color:#fff">${h(Y)+b(Y)}</b>
        </div>
      </div>`}we(e),e.innerHTML=`
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
      ${F(f,u[o+"Name"],"me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${F(m,u[r+"Name"],"opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(Y,ie)=>e.querySelectorAll(Y).forEach((ae,pe)=>{setTimeout(()=>{ae.style.opacity="1",ae.style.transform="translateY(0) scale(1)"},ie+pe*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Y,ie)=>setTimeout(()=>{Y.style.opacity="1"},ie*70)),900),setTimeout(()=>{const Y=e.querySelector("#pvp-vs");Y&&(Y.style.opacity="1",Y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ie=>ie.style.opacity="1")},1250);function C(Y,ie,ae){const pe=document.getElementById(Y);if(!pe)return;const ge=performance.now(),ce=ue=>{const xe=Math.min(1,(ue-ge)/ae);pe.textContent=Math.round(ie*(1-Math.pow(1-xe,3))),xe<1?requestAnimationFrame(ce):pe.textContent=ie};requestAnimationFrame(ce)}setTimeout(()=>{C("pvp-score-me",v,800),C("pvp-score-opp",k,800)},1500);const O=u.p1Team.MIL||[],P=u.p2Team.MIL||[],V=h(O)+b(O),Q=h(P)+b(P),W=V>=Q?"p1":"p2";let le=u.boostValue;le==null&&(le=di(),u.boostValue=le,u.boostOwner=W,u.boostUsed=!1),setTimeout(()=>{const Y=e.querySelector(`#duel-row-${I?"me":"opp"}`),ie=e.querySelector(`#duel-row-${I?"opp":"me"}`),ae=document.getElementById("pvp-score-me"),pe=document.getElementById("pvp-score-opp"),ge=I?ae:pe,ce=I?pe:ae;ge&&(ge.style.fontSize="80px",ge.style.color=I?"#FFD700":"#ff6b6b",ge.style.animation="duelPulse .5s ease"+(I?",duelGlow 1.5s ease infinite .5s":"")),ce&&(ce.style.opacity="0.25"),setTimeout(()=>{Y&&(Y.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Y.style.zIndex="5"),setTimeout(()=>{const ue=document.getElementById("duel-shock");ue&&(ue.style.animation="shockwave .5s ease-out forwards"),ie&&(ie.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var xe;const ue=document.getElementById("pvp-duel-finale");ue&&(ue.innerHTML=`
            <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">
              ${I?`⚽ ${u[o+"Name"]}<br>gagne le milieu et attaque !`:`😔 ${u[r+"Name"]}<br>gagne l'engagement et attaque !`}
            </div>
            ${I&&u.boostOwner===o?`
            <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)">
              <div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
              <div style="font-size:46px;line-height:1">⚡</div>
              <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${le}</div>
              <div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
            </div>`:""}
            <button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
              ▶ Commencer le match
            </button>`,ue.style.transition="opacity .45s ease",ue.style.opacity="1",ue.style.pointerEvents="auto",(xe=document.getElementById("pvp-start-match"))==null||xe.addEventListener("click",async()=>{if(o!=="p1")return;const Se=W;await M({phase:Se+"-attack",attacker:Se,round:1,boostValue:le,boostUsed:!1,boostOwner:Se})}))},600)},700)},2800)}function N(f,m){var V,Q,W,le;const b=(u["gcCardsFull_"+o]||[]).find(Y=>Y.id===f),v=b==null?void 0:b._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",I={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",F=(v==null?void 0:v.name)||m,B=(v==null?void 0:v.effect)||((V=ye[m])==null?void 0:V.desc)||"Carte spéciale.",C=v!=null&&v.image_url?`/manager-wars/icons/${v.image_url}`:null,O=((Q=ye[m])==null?void 0:Q.icon)||"⚡",P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",P.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${I};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${I}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${F.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${F}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${C?`<img src="${C}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${O}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${B}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(P),(W=P.querySelector("#pvp-gc-back"))==null||W.addEventListener("click",()=>P.remove()),(le=P.querySelector("#pvp-gc-use"))==null||le.addEventListener("click",()=>{P.remove(),K(f,m)})}function G(){var b;const f=u[o+"Team"],m=Object.entries(f).flatMap(([v,k])=>(k||[]).filter(I=>!I.used).map(I=>({...I,_line:v})));if(!m.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(v=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",I=re(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${I}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(b=h.querySelector("#bp-close"))==null||b.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const k=v.dataset.cid,I=m.find(B=>B.cardId===k);if(!I)return;const F=(f[I._line]||[]).find(B=>B.cardId===k);F&&(F.boost=(F.boost||0)+u.boostValue),h.remove(),await M({[o+"Team"]:f,boostUsed:!0})})})}function U(f){var F;const m=u[o+"Subs"]||[],h=u["usedSubIds_"+o]||[],b=m.find(B=>B.cardId===f);if(!b)return;const v=u[o+"Team"],k=Object.entries(v).flatMap(([B,C])=>(C||[]).filter(O=>!O.used&&O.job===b.job).map(O=>({...O,_line:B})));if(!k.length){c("Aucun joueur compatible à remplacer","error");return}const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",I.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">Remplacer par ${b.firstname} ${b.name}</div>
        <button id="sp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(B=>{const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",O=re(B,B._line)+(B.boost||0);return`<div class="sp-item" data-cid="${B.cardId}" data-role="${B._line}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${C};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111">${B.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(I),(F=I.querySelector("#sp-close"))==null||F.addEventListener("click",()=>I.remove()),I.querySelectorAll(".sp-item").forEach(B=>{B.addEventListener("click",async()=>{const C=B.dataset.cid,O=B.dataset.role,P=(v[O]||[]).find(W=>W.cardId===C);if(!P)return;P.used=!0;const V={...b,_line:O,position:P.position};(v[O]=v[O]||[]).push(V);const Q=[...h,f];I.remove(),await M({[o+"Team"]:v,["usedSubIds_"+o]:Q})})})}function Z(){var m;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${qe(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(m=f.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>f.remove())}function te(){var h;const f=u.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(b=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${b.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(m),(h=m.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>m.remove())}async function J(){const f=u[o+"Team"],m=!["GK","DEF","MIL","ATT"].some(k=>(u[r+"Team"][k]||[]).some(I=>!I.used)),h=(u["selected_"+o]||[]).map(k=>{const I=(f[k._role]||[]).find(B=>B.cardId===k.cardId)||k,F=m&&["GK","DEF"].includes(k._role);return{...I,_line:k._role,...F?{note_a:Math.max(1,Number(I.note_a)||0)}:{}}});if(!h.length)return;const b=yt(h,u.modifiers[o]||{});h.forEach(k=>{const I=(f[k._role]||[]).find(F=>F.cardId===k.cardId);I&&(I.used=!0)});const v=[...u.log||[]];if(v.push({type:"attack",text:`⚔️ ${u[o+"Name"]} attaque (${b.total})`,players:h,total:b.total,side:o}),m){u[o+"Score"]++,v.push({type:"goal",text:"⚽ BUT ! L'adversaire n'a plus de joueurs."});const k=(u.round||0)+1,I=o==="p1"?"p2":"p1",F=X({...u,[o+"Team"]:f});await M({[o+"Team"]:f,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:F?"finished":I+"-attack",attacker:I,round:k,log:v}),F&&await j.from("matches").update({status:"finished"}).eq("id",i);return}await M({[o+"Team"]:f,pendingAttack:{...b,players:h,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:r+"-defense",log:v})}async function de(){const f=u[o+"Team"],m=(u["selected_"+o]||[]).map(W=>({...(f[W._role]||[]).find(Y=>Y.cardId===W.cardId)||W,_line:W._role})),h=ht(m,u.modifiers[o]||{});m.forEach(W=>{const le=(f[W._role]||[]).find(Y=>Y.cardId===W.cardId);le&&(le.used=!0)});const b=bt(u.pendingAttack.total,h.total,u.modifiers[o]||{}),v=u.pendingAttack.side,k=b==="attack"||(b==null?void 0:b.goal),I=v==="p1"?"p2":"p1",F=(u.round||0)+1,B={...u,[o+"Team"]:f};k&&(B[v+"Score"]=(u[v+"Score"]||0)+1);const C=[...u.log||[]];C.push({type:"defense",text:`🛡️ ${u[o+"Name"]} défend (${h.total})`}),C.push({type:k?"goal":"stop",text:k?`⚽ BUT de ${u[v+"Name"]} ! (${u.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${h.total})`});const O=X(B),P=[...B[I+"Team"].MIL||[],...B[I+"Team"].ATT||[]].filter(W=>!W.used),V=[...B[I+"Team"].GK||[],...B[I+"Team"].DEF||[],...B[I+"Team"].MIL||[]].filter(W=>!W.used);let Q=I+"-attack";!P.length&&!V.length?Q="finished":!P.length&&V.length&&(Q=I+"-attack"),await M({...B,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:O?"finished":Q,attacker:I,round:F,log:C}),O&&await j.from("matches").update({status:"finished"}).eq("id",i)}function X(f){const m=["MIL","ATT","GK","DEF"].some(b=>(f.p1Team[b]||[]).some(v=>!v.used)),h=["MIL","ATT","GK","DEF"].some(b=>(f.p2Team[b]||[]).some(v=>!v.used));return!m&&!h}function S(){var v;const f=u[o+"Score"],m=u[r+"Score"],h=f>m,b=f===m;we(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{j.removeChannel(w)}catch{}be(e),l("home")})}$()}const To={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ao(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await _t(e,t)}async function _t(e,t){const{state:i,toast:n}=t,{data:d}=await j.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await j.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  `;function c(o){const r=document.getElementById("mkt-content"),p=o==="buy"?a:l;if(p.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const g=o==="mine"?[...p].sort((x,E)=>x.status!==E.status?x.status==="active"?-1:1:new Date(E.listed_at)-new Date(x.listed_at)):p;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(x=>{var z,w,M,T;const E=(z=x.card)==null?void 0:z.player;if(!E)return"";const u=E.job==="GK"?E.note_g:E.job==="DEF"?E.note_d:E.job==="MIL"?E.note_m:E.note_a,y=To[E.rarity],L=(i.profile.credits||0)>=x.price,_=x.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Mo(E.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${y};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${E.firstname} ${E.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${E.country_code} · ${((w=E.clubs)==null?void 0:w.encoded_name)||"—"} · ${E.rarity} · ${E.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((M=x.seller)==null?void 0:M.pseudo)||"—"}</div>`:_?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((T=x.buyer)==null?void 0:T.pseudo)||"—"} · ${x.sold_at?new Date(x.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(x.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${x.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${x.id}" ${L?"":"disabled"} style="margin-top:4px">${L?"Acheter":"Trop cher"}</button>`:_?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${x.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(x=>{x.addEventListener("click",()=>Io(x.dataset.buy,p,e,t))}),r.querySelectorAll("[data-cancel]").forEach(x=>{x.addEventListener("click",()=>Lo(x.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const p=r===o;r.style.background=p?"var(--green)":"#fff",r.style.color=p?"#fff":"var(--gray-600)",r.style.borderColor=p?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function Io(e,t,i,n){var p;const{state:d,toast:s}=n,a=t.find(g=>g.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(p=a.card)==null?void 0:p.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:g,error:x}=await j.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(x)throw new Error(x.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");d.profile.credits=c-l;const E=document.querySelector("[data-credits]")||document.querySelector(".credits-display");E&&(E.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),_t(i,n)}catch(g){s("❌ "+g.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function Lo(e,t,i){const{toast:n}=i,{data:d}=await j.from("market_listings").select("card_id").eq("id",e).single();await j.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),_t(t,i)}function Mo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function zo(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await j.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function So(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function o(r){const p=r.home_id===d.id;p?r.home_score:r.away_score,p?r.away_score:r.home_score;const g=r.winner_id===d.id,x=r.home_score===r.away_score&&r.status==="finished",E=r.status!=="finished"?"…":x?"N":g?"V":"D",u=r.status!=="finished"||x?"#888":g?"#1A6B3C":"#c0392b";let y=a[r.mode]||r.mode;r.away_id===null&&!y.startsWith("IA")&&(y="IA");const _=r.home_id===d.id?r.away:r.home;let z;r.away_id===null?z=y:_?z=`${_.club_name||_.pseudo} (${_.pseudo})`:z="Adversaire";let w="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(w=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const M=new Date(r.created_at),T=M.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+M.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${z}${w}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y} · ${T}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
        <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${E}</span>
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
  </div>`}const ne={user:null,profile:null,page:"home",params:{}};function Ye(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function jo(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function gt(){document.getElementById("modal-overlay").classList.add("hidden")}async function We(){if(!ne.user)return;const{data:e}=await j.from("users").select("*").eq("id",ne.user.id).single();e&&(ne.profile=e)}const kt="mw_theme";function it(){return localStorage.getItem(kt)||"light"}function Co(e){var t;localStorage.setItem(kt,e),mt(e),(t=ne.profile)!=null&&t.id&&j.from("users").update({theme:e}).eq("id",ne.profile.id).then(()=>{})}function mt(e){document.documentElement.setAttribute("data-theme",e)}function Xe(e,t={}){ne.page=e,ne.params=t,mi()}async function mi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===ne.page)});const t=document.getElementById("nav-credits");t&&ne.profile&&(t.textContent=`💰 ${(ne.profile.credits||0).toLocaleString("fr")}`);const i={state:ne,navigate:Xe,toast:Ye,openModal:jo,closeModal:gt,refreshProfile:We};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ne.page){case"home":await Nt(e,i);break;case"collection":await Ii(e,i);break;case"decks":await dt(e,i);break;case"boosters":await Hi(e,i);break;case"match":{(ne.params&&ne.params.matchMode||"vs_ai_easy")==="random"?await _o(e,i):await ao(e,i);break}case"market":await Ao(e,i);break;case"rankings":await zo(e,i);break;case"matches":await So(e,i);break;default:await Nt(e,i)}}function Bo(){const e=document.getElementById("app"),t=ne.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),Xe(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Xe("home")),document.getElementById("nav-credits").addEventListener("click",()=>Xe("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=it()==="dark"?"light":"dark";Co(d),Jt(d)}),Jt(it())}function Jt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Fo(){mt(it()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&gt()}),document.getElementById("modal-close").addEventListener("click",gt);const{data:{session:e}}=await j.auth.getSession();if(!e){Zt(),qt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ye});return}ne.user=e.user,await We(),Zt();try{const{data:t}=await j.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),vi(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!ne.profile){wi(document.getElementById("app"),{state:ne,navigate:async()=>{await We(),Qt()},toast:Ye,refreshProfile:We});return}ne.profile.theme&&ne.profile.theme!==it()&&(localStorage.setItem(kt,ne.profile.theme),mt(ne.profile.theme)),Qt(),j.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(ne.user=null,ne.profile=null,document.getElementById("app").innerHTML="",qt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ye}))})}function Do(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function nt(){const e=document.getElementById("app");e&&(e.style.height=Do()+"px")}window.addEventListener("resize",nt);window.addEventListener("orientationchange",()=>setTimeout(nt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",nt);function Qt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",nt(),Bo(),mi()}function Zt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function xi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Fo().catch(e=>{console.error("Échec du démarrage:",e),xi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&xi("Le serveur met trop de temps à répondre.")},12e3);
