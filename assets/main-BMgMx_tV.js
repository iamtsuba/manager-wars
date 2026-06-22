import{s as j,F as yt,b as Ke,c as ti,l as Te,d as _i}from"./formation-links-CDBKB_z4.js";function Rt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await j.auth.signInWithPassword({email:n,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await j.auth.signUp({email:n,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function ki(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var k;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((k=document.getElementById("setup-club"))==null?void 0:k.value)||"MW",f=u.trim().split(" ").filter(Boolean),m=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),r&&(r.textContent=m,r.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await j.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await j.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:m}=await j.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(m)throw m;await Ei(t.user.id),await d(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Ei(e){const{data:t}=await j.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const u=Nt([...d]).slice(0,3);o.push(...u)}else o=Nt([...i]).slice(0,4);o.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await j.from("cards").insert(s),await j.from("users").update({first_booster_opened:!0}).eq("id",e)}function Nt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const Ti="2026.06.23-0005";async function Ot(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ti}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){Ai(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await j.auth.signOut(),window.location.reload()}))}function Ai(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ne(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Pt=["ATT","MIL","DEF","GK"];function ii(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Pt.indexOf(s._line),r=Pt.indexOf(a._line),u=Math.abs(o-r)===1;(s._line===a._line&&c||l&&u)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function ht(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=ii(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function bt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),n=ii(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function vt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function oi(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const d=[...n].sort((a,l)=>{const c=t==="attack"?ne(a,"ATT"):a._line==="GK"?ne(a,"GK"):ne(a,"DEF");return(t==="attack"?ne(l,"ATT"):l._line==="GK"?ne(l,"GK"):ne(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Ii(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ni={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},et={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ye=["GK","DEF","MIL","ATT"],Li=["Tous","GK","DEF","MIL","ATT"],Mi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},wt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ri(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Pe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function dt(e,t=""){var u,f;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=et[n],s=ni[i.rarity]||"#ccc",a=Pe(i,n),l=i.job2?Pe(i,i.job2):null,c=i.job2?et[i.job2]:null,o=ri(i),r=wt[i.country_code]||i.country_code||"";return`
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
  </div>`}function Ht(e){const t=e.job||"ATT",i=Pe(e,t),n=wt[e.country_code]||e.country_code||"";return`
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
  </div>`}async function zi(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await j.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await j.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(S=>S.card_type==="player"&&S.player),r=(l||[]).filter(S=>S.card_type==="game_changer"),u=(l||[]).filter(S=>S.card_type==="formation"),{data:f}=await j.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(f||[]).forEach(S=>{m[S.name]=S});const k=Object.keys(yt),p=Object.keys(be),y={};o.forEach(S=>{const E=S.player.id;y[E]=(y[E]||0)+1}),new Set(Object.keys(y).map(S=>String(S)));const I=new Set(u.map(S=>S.formation)),_=new Set(r.map(S=>S.gc_type));let z="player",b="Tous",L="",T=!1;function q(){return[...o].sort((S,E)=>{const G=Ye.indexOf(S.player.job),g=Ye.indexOf(E.player.job);return G!==g?G-g:(S.player.surname_encoded||"").localeCompare(E.player.surname_encoded||"")})}function H(){return[...c||[]].sort((S,E)=>{const G=Ye.indexOf(S.job),g=Ye.indexOf(E.job);return G!==g?G-g:(S.surname_encoded||"").localeCompare(E.surname_encoded||"")})}function V(){return q().filter(S=>{const E=S.player,G=b==="Tous"||E.job===b,g=!L||`${E.firstname} ${E.surname_encoded}`.toLowerCase().includes(L);return G&&g})}function v(){return H().filter(S=>{const E=b==="Tous"||S.job===b,G=!L||`${S.firstname} ${S.surname_encoded}`.toLowerCase().includes(L);return E&&G})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
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
  </div>`;function P(){const S=document.getElementById("col-filters");S&&(z==="player"?(S.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${L}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Li.map(E=>`
            <button class="filter-btn" data-job="${E}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${E===b?"var(--green)":"var(--gray-200)"};
                background:${E===b?"var(--green)":"#fff"};
                color:${E===b?"#fff":"var(--gray-600)"}">
              ${E}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${T?"var(--yellow)":"var(--gray-200)"};
              background:${T?"var(--yellow)":"#fff"};
              color:${T?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${T?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",E=>{L=E.target.value.toLowerCase(),A()}),e.querySelectorAll(".filter-btn").forEach(E=>{E.addEventListener("click",()=>{b=E.dataset.job,P(),A()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{T=!T,P(),A()})):(S.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${T?"var(--yellow)":"var(--gray-200)"};
              background:${T?"var(--yellow)":"#fff"};
              color:${T?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${T?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{T=!T,P(),A()})))}function A(){const S=document.getElementById("col-grid");S&&(z==="player"?ee(S):z==="formation"?pe(S):Q(S))}function U(S,E,G,g,x){x=x||"#7a28b8";const $=document.getElementById("col-grid"),h=document.getElementById("col-big");if(!$||!h)return;var w=0;function C(){h.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+E(S[w])+"</div>";var M=h.querySelector("[data-card-id],[data-form-id],[data-gc-id]");M&&M.addEventListener("click",function(){g(S[w])}),requestAnimationFrame(function(){var F=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!F||!h)){var D=h.clientHeight-8,B=h.clientWidth-24,N=F.offsetHeight,K=F.offsetWidth;if(N>0&&K>0&&D>40){var Z=Math.min(D/N,B/K,1);F.style.transform="scale("+Z.toFixed(3)+")",F.style.transformOrigin="top center"}}}),$.innerHTML=S.map(function(F,D){return'<div class="col-mini-item" data-idx="'+D+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(D===w?x:"transparent")+';transition:border-color .15s;overflow:hidden">'+G(F,D===w)+"</div>"}).join(""),$.querySelectorAll(".col-mini-item").forEach(function(F){F.addEventListener("click",function(){w=Number(F.dataset.idx),C(),F.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}C()}function R(S){var E=.54,G=Math.round(140*E),g=Math.round(310*E),x;if(!S||S._fake){var $=S?S.player:null;if(!$)return"";x=Ht($)}else x=dt(S,"");return'<div style="width:'+G+"px;height:"+g+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+E+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+x+"</div></div>"}function Y(S,E,G){E=E||100,G=G||140;var g=Ke[S]||{},x={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},$=Math.max(3,Math.round(E*.06)),h=Object.entries(g).map(function(C){var M=C[0],F=C[1],D=M.replace(/\d+$/,""),B=x[D]||"#888",N=Math.round(F.x*E),K=Math.round(F.y*G);return'<circle cx="'+N+'" cy="'+K+'" r="'+$+'" fill="'+B+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),w=Math.max(1,Math.round(E/50));return'<svg viewBox="0 0 '+E+" "+G+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+E+'" height="'+G+'" fill="#1A6B3C"/><rect x="'+Math.round(E*.2)+'" y="'+Math.round(G*.02)+'" width="'+Math.round(E*.6)+'" height="'+Math.round(G*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+w+'"/><line x1="0" y1="'+Math.round(G*.5)+'" x2="'+E+'" y2="'+Math.round(G*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+w+'"/><ellipse cx="'+Math.round(E*.5)+'" cy="'+Math.round(G*.5)+'" rx="'+Math.round(E*.18)+'" ry="'+Math.round(G*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+w+'"/><rect x="'+Math.round(E*.2)+'" y="'+Math.round(G*.82)+'" width="'+Math.round(E*.6)+'" height="'+Math.round(G*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+w+'"/>'+h+"</svg>"}function ie(S,E,G){var g=G>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+G+"</div>":"",x=E?'data-form-id="'+E.id+'"':"",$=S.length>7?14:S.length>5?16:19,h=!!E;return"<div "+x+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(h?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(h?"":"filter:grayscale(1);opacity:0.5")+'">'+g+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(h?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+$+"px;font-weight:900;color:"+(h?"#1A6B3C":"#aaa")+';line-height:1">'+S+'</div></div><div style="flex:1;overflow:hidden;background:'+(h?"#1A6B3C":"#ccc")+'">'+Y(S,140,220)+"</div></div>"}function re(S,E){var G=.54,g=Math.round(140*G),x=Math.round(305*G),$=Math.round(x*.22),h=x-$,w=S.length>7?5:7,C=Y(S,g,h),M=E?"1.5px solid #2a7a40":"1px solid #ddd",F=E?"":"filter:grayscale(1);opacity:0.45;",D=E?"#1A6B3C":"#bbb",B="#fff";return'<div style="width:'+g+"px;height:"+x+"px;border-radius:6px;border:"+M+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+F+'"><div style="height:'+$+"px;background:"+D+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+w+"px;font-weight:900;color:"+B+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(g-4)+'px">'+S+'</span></div><div style="height:'+h+'px;overflow:hidden;flex-shrink:0">'+C+"</div></div>"}function ee(S){if(T){const E=v();if(!E.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const G=E.map(g=>o.find(x=>x.player.id===g.id)||{_fake:!0,player:g,id:"fake-"+g.id});U(G,g=>g._fake?Ht(g.player):dt(g,""),g=>g._fake?R({player:g.player,id:"x",_fake:!0}):R(g),g=>{g._fake||Ut(g,o,y,t)},"#1A6B3C")}else{const E=V();if(!E.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const G={},g=[];E.forEach(x=>{G[x.player.id]||(G[x.player.id]=!0,g.push(x))}),U(g,x=>{const $=y[x.player.id]||1,h=$>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${$}</div>`:"",C=o.filter(M=>M.player.id===x.player.id&&M.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return dt(x,h+C)},x=>R(x),x=>Ut(x,o,y,t),"#1A6B3C")}}function pe(S){const E=T?k:[...I];if(!E.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const G=E.map(g=>({formation:g,card:u.find(x=>x.formation===g)||null,owned:I.has(g)}));U(G,({formation:g,card:x,owned:$})=>ie(g,$?x:null,$?u.filter(h=>h.formation===g).length:0),({formation:g,owned:x})=>re(g,x),({card:g,owned:x})=>{x&&g&&ji(g,u,t,s)},"#1A6B3C")}function Q(S){const E=Object.keys(m),G=T?E.length?E:p:[..._];if(!G.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const g=G.map(x=>({type:x,gc:be[x]||{icon:"⚡",desc:""},def:m[x]||null,owned:_.has(x),card:r.find($=>$.gc_type===x)||null}));U(g,({type:x,gc:$,def:h,owned:w,card:C})=>{const M=w?r.filter(fe=>fe.gc_type===x).length:0,F=M>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${M}</div>`:"",D=(h==null?void 0:h.gc_type)==="ultra_game_changer",B={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},N={purple:"#b06ce0",light_blue:"#00d4ef"},K=B[h==null?void 0:h.color]||B.purple,Z=N[h==null?void 0:h.color]||N.purple,le=(h==null?void 0:h.effect)||$.desc||"",ue=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null;return w&&C?`<div data-gc-id="${C.id}" data-gc-type="${x}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Z};background:${K};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Z}66;cursor:pointer">
          ${F}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${x.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${D?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ue?`<img src="${ue}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${$.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${le.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${x}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${$.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:x,gc:$,def:h,owned:w})=>w?(()=>{const C=Math.round(75.60000000000001),M=Math.round(310*.54),F=Math.round(M*.65),D=Math.round(M*.18),B={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},N={purple:"#9b59b6",light_blue:"#00bcd4"},K=B[h==null?void 0:h.color]||B.purple,Z=N[h==null?void 0:h.color]||N.purple,le=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null;return`<div style="width:${C}px;height:${M}px;border-radius:8px;background:${K};border:1px solid ${Z};display:flex;flex-direction:column;overflow:hidden"><div style="height:${D}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${C-6}px">${x}</span></div><div style="height:${F}px;display:flex;align-items:center;justify-content:center">${le?`<img src="${le}" style="max-width:${C-8}px;max-height:${F-4}px;object-fit:contain">`:`<span style="font-size:24px">${$.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((h==null?void 0:h.effect)||$.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const C=Math.round(75.60000000000001),M=Math.round(310*.54);return`<div style="width:${C}px;height:${M}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${$.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${x}</span></div>`})(),({type:x,owned:$,def:h})=>{$&&Si(x,h,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(S=>{S.addEventListener("click",()=>{z=S.dataset.tab,b="Tous",L="",T=!1,e.querySelectorAll(".col-tab-btn").forEach(E=>{const G=E.dataset.tab===z;E.style.borderBottomColor=G?"var(--green)":"transparent",E.style.color=G?"var(--green)":"var(--gray-600)"}),P(),A()})}),P(),A()}function Si(e,t,i){const n=be[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Re=1e3;function ji(e,t,i,n){var p,y,I;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const _=Ke[o]||{},z=yt[o]||[],b=290,L=360,T=20;function q(V){const v=_[V];return v?{x:v.x*b,y:v.y*L}:null}let H=`<svg width="${b}" height="${L}" viewBox="0 0 ${b} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[V,v]of z){const P=q(V),A=q(v);!P||!A||(H+=`<line x1="${P.x}" y1="${P.y}" x2="${A.x}" y2="${A.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const V of Object.keys(_)){const v=q(V);if(!v)continue;const P=V.replace(/\d+/,""),A=r[P]||"#555";H+=`<circle cx="${v.x}" cy="${v.y}" r="${T}" fill="${A}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,H+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${P}</text>`}return H+="</svg>",H}const f=t.filter(_=>_.formation===o),m=f.length,k=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Re.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${k?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Re}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Re.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=f.find(b=>!b.is_for_sale)||f[0];if(!_){s("Aucune carte à vendre","error");return}const{error:z}=await j.from("cards").delete().eq("id",_.id);if(z){s(z.message,"error");return}await j.from("users").update({credits:(d.profile.credits||0)+Re}).eq("id",d.profile.id),await c(),s(`+${Re.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(y=document.getElementById("market-sell-form-btn"))==null||y.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){s("Prix invalide","error");return}await j.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",e.id),await j.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:_}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(I=document.getElementById("cancel-sell-form-btn"))==null||I.addEventListener("click",async()=>{await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await j.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function Ut(e,t,i,n){var H,V,v,P,A,U;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=n,r=e.player,u=t.filter(R=>R.player.id===r.id),f=u.length,m=Mi[r.rarity]||1e3,k=r.rarity!=="legende",p=ri(r),y=Pe(r,r.job),I=r.job2?Pe(r,r.job2):null,_=et[r.job]||"#1A6B3C",z=r.job2?et[r.job2]:null,b=ni[r.rarity]||"#ccc",L=wt[r.country_code]||r.country_code||"",{data:T}=await j.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),q=T&&T.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${T.map(R=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${R.club_name} <span style="color:var(--gray-600)">(${R.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${R.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${b};flex-shrink:0">
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
            ${I!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${z}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${I}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${L}</div>
            ${(H=r.clubs)!=null&&H.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((V=r.clubs)==null?void 0:V.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${b}">${r.rarity.toUpperCase()}</div>
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
    ${q}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${m.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${k&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(v=document.getElementById("close-detail"))==null||v.addEventListener("click",l),(P=document.getElementById("direct-sell-btn"))==null||P.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${m.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const R=u.find(ie=>!ie.is_for_sale)||u[0];if(!R){s("Aucune carte à vendre","error");return}const{error:Y}=await j.from("cards").delete().eq("id",R.id);if(Y){s(Y.message,"error");return}await j.from("users").update({credits:(d.profile.credits||0)+m}).eq("id",d.profile.id),await o(),s(`+${m.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(A=document.getElementById("market-sell-btn"))==null||A.addEventListener("click",async()=>{const R=parseInt(document.getElementById("sell-price").value);if(!R||R<1){s("Prix invalide","error");return}await j.from("cards").update({is_for_sale:!0,sale_price:R}).eq("id",e.id),await j.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:R}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(U=document.getElementById("cancel-sell-btn"))==null||U.addEventListener("click",async()=>{await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await j.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const tt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ke={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ai(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function si(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Ci(e,t=44,i=58){var m;const n=e?at(e):null,d=e?si(e):null,s=ai(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=ke[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),f=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(m=e==null?void 0:e.clubs)!=null&&m.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ct(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await j.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Kt(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Kt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await j.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),ct(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await j.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await j.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),ct(e,t)})})}async function Kt(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("*").eq("id",e).single(),{data:a}=await j.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(m=>m.card_type==="player"&&m.player),c=(a||[]).filter(m=>m.card_type==="formation"),o=c.map(m=>m.formation).filter(Boolean),{data:r}=await j.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const f={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(r||[]).forEach(m=>{m.is_starter?f.slots[m.position]=m.card_id:f.subs.includes(m.card_id)||f.subs.push(m.card_id)}),Ce(t,f,i)}function Ce(e,t,i){var c;const{navigate:n}=i;tt[t.formation];const d=Vt(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(tt),l=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${Ci(r,44,58)}
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
  </div>`,Bi(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=Vt(t.formation),u={};r.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,Ce(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Gi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),Ce(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Di(t,e,i)})}function Bi(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const s=Ke[t.formation]||{},a=ti(t.formation)||[],l={};for(const I of i){const _=t.slots[I],z=_?t.playerCards.find(b=>b.id===_):null;l[I]=z?z.player:null}const c=300,o=300,r=48,u=64,f=13,m=16,k=38;function p(I){const _=s[I];return _?{x:_.x*c,y:_.y*o}:null}let y="";for(const[I,_]of a){const z=p(I),b=p(_);if(!z||!b)continue;const L=l[I]?{...l[I],club_id:l[I].club_id,country_code:l[I].country_code,rarity:l[I].rarity}:null,T=l[_]?{...l[_],club_id:l[_].club_id,country_code:l[_].country_code,rarity:l[_].rarity}:null,q=Te(L,T);q==="#ff3333"||q==="#cc2222"?y+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${q}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(y+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${q}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,y+=`<line x1="${z.x.toFixed(1)}" y1="${z.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${q}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const I of i){const _=p(I);if(!_)continue;const z=l[I],b=I.replace(/\d+/,""),L=ke[b]||"#555",T=(_.x-r/2).toFixed(1),q=(_.y-u/2).toFixed(1),H={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[z==null?void 0:z.rarity]||"#aaa";if(z){const V=at(z),v=si(z),P=ai(z.country_code),A=Number(b==="GK"?z.note_g:b==="DEF"?z.note_d:b==="MIL"?z.note_m:z.note_a)||0,U=u-f-m;y+=`<defs><clipPath id="dcp-${I}"><rect x="${T}" y="${(_.y-u/2+f).toFixed(1)}" width="${r}" height="${U}"/></clipPath></defs>`,y+=`<rect x="${T}" y="${q}" width="${r}" height="${u}" rx="5" fill="${L}"/>`,V&&(y+=`<image href="${V}" x="${T}" y="${(_.y-u/2+f).toFixed(1)}" width="${r}" height="${U}" clip-path="url(#dcp-${I})" preserveAspectRatio="xMidYMin slice"/>`),y+=`<rect x="${T}" y="${q}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,y+=`<text x="${_.x.toFixed(1)}" y="${(_.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(z.surname_encoded||"").slice(0,9)}</text>`;const R=(_.y+u/2-m).toFixed(1);y+=`<rect x="${T}" y="${R}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,P&&(y+=`<image href="${P}" x="${(_.x-21).toFixed(1)}" y="${(_.y+u/2-m+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),y+=`<text x="${_.x.toFixed(1)}" y="${(_.y+u/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`,v&&(y+=`<image href="${v}" x="${(_.x+r/2-14).toFixed(1)}" y="${(_.y+u/2-m+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),y+=`<rect x="${T}" y="${q}" width="${r}" height="${u}" rx="5" fill="none" stroke="${H}" stroke-width="2"/>`}else y+=`<rect x="${T}" y="${q}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,y+=`<text x="${_.x.toFixed(1)}" y="${_.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,y+=`<text x="${_.x.toFixed(1)}" y="${(_.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${b}</text>`;y+=`<rect x="${T}" y="${q}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${I}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-k} ${-k} ${c+k*2} ${o+k*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${y}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(I=>{I.addEventListener("click",()=>Fi(I.dataset.pos,t,e,n))})}function Fi(e,t,i,n){var f,m,k;const{openModal:d,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(p=>p.id===l):null;(f=c==null?void 0:c.player)==null||f.id;const o=new Set;Object.entries(t.slots).forEach(([p,y])=>{var _;if(p===e||!y)return;const I=t.playerCards.find(z=>z.id===y);(_=I==null?void 0:I.player)!=null&&_.id&&o.add(I.player.id)}),t.subs.forEach(p=>{var I;const y=t.playerCards.find(_=>_.id===p);(I=y==null?void 0:y.player)!=null&&I.id&&o.add(y.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const y=p.player;return!(y.job===a||y.job2===a)||o.has(y.id)||r.has(y.id)?!1:(r.add(y.id),!0)});u.sort((p,y)=>{const I=a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a;return(a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a)-I}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var b,L;const y=p.player,I=a==="GK"?y.note_g:a==="DEF"?y.note_d:a==="MIL"?y.note_m:y.note_a,_=at(y),z={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[y.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ke[a]}">
            ${_?`<img src="${_}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ke[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${y.firstname} ${y.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${y.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${y.country_code}">
              ${(b=y.clubs)!=null&&b.logo_url?`<img src="${y.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((L=y.clubs)==null?void 0:L.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${y.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ke[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${z};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(m=document.getElementById("close-selector"))==null||m.addEventListener("click",s),(k=document.getElementById("remove-player"))==null||k.addEventListener("click",()=>{delete t.slots[e],s(),Ce(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),Ce(i,t,n)})})}function Di(e,t,i){var c;const{openModal:n,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var r,u,f;return s.has((r=o.player)==null?void 0:r.id)||a.has((u=o.player)==null?void 0:u.id)?!1:(a.add((f=o.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var m;const r=o.player,u=at(r),f=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ke[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((m=r.clubs)==null?void 0:m.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ke[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),Ce(t,e,i)})})}async function Gi(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await j.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await j.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await j.from("deck_cards").insert(l);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Vt(e){const t=tt[e]||tt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function qi(){const{data:e}=await j.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await j.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function Ri(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const li=()=>Object.keys(Ke),Ni=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],pt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Oi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Yt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Pi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Hi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Wt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ui(e){var r,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Yt[i],d=Pi[t.rarity]||"#ccc",s=Wt(t,i),a=t.job2?Wt(t,t.job2):null,l=t.job2?Yt[t.job2]:null,c=Oi(t),o=Hi[t.country_code]||t.country_code||"";return`
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
  </div>`}function Ki(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Vi(e,{state:t,navigate:i,toast:n}){var a;const d=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await qi()).map(Ki)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Ni.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Yi(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(r=>r.id===l.dataset.boosterId);io(o)})})}async function Yi(e,{state:t,toast:i,navigate:n,container:d}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await ro()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await j.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Xt(t.profile,e);else{const u=e.type||"player";u==="player"?c=await Ji(t.profile,e.cardCount,e.cost):u==="game_changer"?c=await Qi(t.profile,e.cardCount,e.cost):u==="formation"?c=await Zi(t.profile,e.cost):c=await Xt(t.profile,e)}c.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:o}=await j.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),eo(c,e,n)}function Wi(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Me(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Xi(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Me(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Me(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Me(n)>=6),i.length||(i=e.filter(n=>Me(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Me(n)>=1&&Me(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Xt(e,t){if(t.cost>0){const{error:n}=await j.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const d=Ri(t.rates);if(d){if(d.card_type==="player"){const s=f=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[f]||f,a=d.rarity?s(d.rarity):null;let l=j.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(f=>{const m=Math.max(Number(f.note_g)||0,Number(f.note_d)||0,Number(f.note_m)||0,Number(f.note_a)||0);return(!d.note_min||m>=d.note_min)&&(!d.note_max||m<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:u}=await j.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(i.push({...u,player:r}),j.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await j.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await j.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=li(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await j.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function Ji(e,t,i){if(i>0){const{error:o}=await j.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await j.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(o=>o.job==="GK"),s=n.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const r=o===0&&a?d:o===0?s:n,u=Wi(),f=Xi(r,u);f&&l.push(f)}a&&await j.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await j.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{j.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,r)=>({...c[r],player:o}))}async function Qi(e,t,i){const{error:n}=await j.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await j.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(pt).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await j.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const u=d==null?void 0:d.find(f=>f.name===r.gc_type||f.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Zi(e,t){const{error:i}=await j.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=li(),d=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await j.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function eo(e,t,i){var P;if(!e||e.length===0){const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",A.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(A),(P=A.querySelector("#anim-close-err"))==null||P.addEventListener("click",()=>A.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=A=>A.touches&&A.touches[0]?A.touches[0].clientX:A.clientX;function o(A){d||(l=!0,a.style.opacity="1",r(A))}function r(A){if(!l||d)return;const U=s.getBoundingClientRect(),R=c(A)-U.left,Y=Math.max(0,Math.min(1,R/U.width));a.style.width=Y*U.width+"px",Y>=.82&&f()}function u(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function f(){var U;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(U=document.getElementById("cut-flash"))==null||U.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const A=document.getElementById("cut-hint");A&&(A.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let m=0,k=!1;const p=new Set;function y(A){m=A,document.getElementById("reveal-phase").style.display="flex",I(),_(A,0),q()}function I(){const A=document.getElementById("card-dots");A&&(A.innerHTML=e.map((U,R)=>`<div class="card-dot" data-i="${R}" style="width:8px;height:8px;border-radius:50%;background:${R===m?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),A.querySelectorAll(".card-dot").forEach(U=>U.addEventListener("click",()=>b(parseInt(U.dataset.i)))))}function _(A,U){var S;const R=e[A],Y=document.getElementById("card-counter"),ie=document.getElementById("card-track");Y&&(Y.textContent=`Carte ${A+1} / ${e.length}`);const re=R.card_type==="player"&&((S=R.player)==null?void 0:S.rarity)==="legende",ee=!p.has(A);p.add(A);let pe=0;if(R.card_type==="player"&&R.player){const E=R.player,G=E.job||"ATT";pe=Number(G==="GK"?E.note_g:G==="DEF"?E.note_d:G==="MIL"?E.note_m:E.note_a)||0}const Q=E=>{ie.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${re?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${to(R)}</div>
          ${R.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const G=document.getElementById("current-card-wrap");U!==0?(G.style.transition="none",G.style.transform=`translateX(${U>0?100:-100}%)`,requestAnimationFrame(()=>{G.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",G.style.transform="translateX(0)"})):G.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),E||re?V():v(),I()};ee&&pe>6&&R.card_type==="player"&&R.player?z(R,()=>Q(!0)):Q(!1)}function z(A,U){var Q;k=!0;const R=A.player,Y=`https://flagsapi.com/${R.country_code}/flat/64.png`,ie=(Q=R.clubs)==null?void 0:Q.logo_url,re=document.getElementById("walkout-overlay"),ee=document.getElementById("walkout-stage");if(!re||!ee){k=!1,U();return}re.style.display="flex";const pe=()=>{const S=ee.firstElementChild;S&&(S.classList.remove("wo-in"),S.classList.add("wo-out"))};ee.innerHTML=`<img class="wo-in" src="${Y}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(pe,2e3),setTimeout(()=>{var S;ee.innerHTML=ie?`<img class="wo-in" src="${ie}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((S=R.clubs)==null?void 0:S.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(pe,4450),setTimeout(()=>{re.style.display="none",ee.innerHTML="",k=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),U()},4900)}function b(A){if(k||A<0||A>=e.length||A===m)return;const U=A>m?1:-1;m=A,_(A,U)}function L(){b(m+1)}function T(){b(m-1)}function q(){const A=document.getElementById("card-viewport");if(!A||A._swipeBound)return;A._swipeBound=!0;let U=0,R=0,Y=0,ie=!1;const re=E=>E.touches?E.touches[0].clientX:E.clientX,ee=E=>E.touches?E.touches[0].clientY:E.clientY,pe=E=>{ie=!0,U=re(E),R=ee(E),Y=0},Q=E=>{if(!ie)return;Y=re(E)-U;const G=ee(E)-R;if(Math.abs(Y)<Math.abs(G))return;const g=document.getElementById("current-card-wrap");g&&(g.style.transition="none",g.style.transform=`translateX(${Y*.6}px) rotate(${Y*.02}deg)`)},S=()=>{if(!ie)return;ie=!1;const E=document.getElementById("current-card-wrap"),G=55;Y<=-G&&m<e.length-1?L():Y>=G&&m>0?T():E&&(E.style.transition="transform .2s ease",E.style.transform="translateX(0)")};A.addEventListener("pointerdown",pe),A.addEventListener("pointermove",Q),A.addEventListener("pointerup",S),A.addEventListener("pointercancel",S),A.addEventListener("touchstart",pe,{passive:!0}),A.addEventListener("touchmove",Q,{passive:!0}),A.addEventListener("touchend",S),A.addEventListener("click",E=>{if(Math.abs(Y)>8)return;const G=A.getBoundingClientRect();E.clientX-G.left>G.width/2?L():T()})}let H=null;function V(){const A=document.getElementById("fireworks-canvas");if(!A)return;A.width=window.innerWidth,A.height=window.innerHeight;const U=A.getContext("2d"),R=[];function Y(){const re=Math.random()*A.width,ee=Math.random()*A.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Q=pe[Math.floor(Math.random()*pe.length)];for(let S=0;S<60;S++){const E=Math.PI*2/60*S,G=2+Math.random()*5;R.push({x:re,y:ee,vx:Math.cos(E)*G,vy:Math.sin(E)*G,alpha:1,color:Q,size:2+Math.random()*3})}}Y(),H=setInterval(Y,600);function ie(){if(document.getElementById("fireworks-canvas")){U.clearRect(0,0,A.width,A.height);for(let re=R.length-1;re>=0;re--){const ee=R[re];if(ee.x+=ee.vx,ee.y+=ee.vy+.08,ee.vy*=.98,ee.alpha-=.018,ee.alpha<=0){R.splice(re,1);continue}U.globalAlpha=ee.alpha,U.fillStyle=ee.color,U.beginPath(),U.arc(ee.x,ee.y,ee.size,0,Math.PI*2),U.fill()}U.globalAlpha=1,(H!==null||R.length>0)&&requestAnimationFrame(ie)}}ie()}function v(){H!==null&&(clearInterval(H),H=null);const A=document.getElementById("fireworks-canvas");A&&A.getContext("2d").clearRect(0,0,A.width,A.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{v(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{v(),n.remove(),i("boosters")})}function to(e){var t,i;if(e.card_type==="player"&&e.player)return Ui(e);if(e.card_type==="game_changer"){const n=e._gcDef,d=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,c=a[n==null?void 0:n.color]||a.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=pt[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=((i=pt[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function io(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}oo()}function oo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const no="simulation",di="VOTRE_ZONE_ID";function ro(){switch(no){case"propellerads":return ao();case"adsense":return so();default:return $t()}}function $t(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ao(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e($t());window.propeller.push({zone_id:di,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function so(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e($t());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:di,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Be={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Fe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ee(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function me(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ut(e,t){var n,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function it(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ci(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ot(e,t){const i=Be[t]||Be["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=it(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let r=s.findIndex(u=>u.job===a);if(r===-1&&(r=s.findIndex(u=>u.job2===a)),r===-1&&(r=0),s[r]){const u={...s[r],_line:a};l.push(u),s.splice(r,1)}}const c=it(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}function _e(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function pi(e,t,i){const d=new Set,s=t.filter(r=>{const u=r.gc_type||r.id;return d.has(u)?!1:(d.add(u),!0)});let a=[];function l(r,u){const f=r._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},k={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[f==null?void 0:f.color]||m.purple,y=k[f==null?void 0:f.color]||k.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":y};background:${p};
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var u,f,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${s.map(k=>{const p=a.find(y=>y.gc_type===k.gc_type);return l(k,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(k=>{k.addEventListener("click",()=>{const p=k.dataset.id,y=s.find(_=>_.id===p);if(!y)return;const I=a.findIndex(_=>_.gc_type===y.gc_type);I>-1?a.splice(I,1):a.length<3&&a.push(y),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&c(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>c([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function lo(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){Ee(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(r=>r.id),{data:l}=await j.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var _,z,b,L,T;const r=s[c],u=(l||[]).filter(q=>q.deck_id===r.id),f=u.filter(q=>{var H;return q.is_starter&&((H=q.card)==null?void 0:H.player)}).map(q=>ut(q.card,q.position)),m=u.find(q=>{var H;return((H=q.card)==null?void 0:H.card_type)==="formation"}),k=r.formation||((_=m==null?void 0:m.card)==null?void 0:_.formation)||"4-4-2",p=f.length>=11?ot(f,k):null,y=f.length>=11;_e(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${k} · ${f.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Ue(p,k,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((q,H)=>`<div style="width:7px;height:7px;border-radius:50%;background:${H===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const H=e.querySelector(".deck-preview-wrap svg");H&&(H.removeAttribute("width"),H.removeAttribute("height"),H.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",H.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(z=document.getElementById("prev-deck"))==null||z.addEventListener("click",()=>{c>0&&(c--,o())}),(b=document.getElementById("next-deck"))==null||b.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(L=document.getElementById("validate-deck"))==null||L.addEventListener("click",()=>{y&&t.navigate("match",{matchMode:i,deckId:r.id})}),(T=document.getElementById("cancel-deck-select"))==null||T.addEventListener("click",()=>{ve(e),d("home")});const I=document.getElementById("deck-swipe-zone");if(I){let q=0,H=0;I.addEventListener("touchstart",V=>{q=V.touches[0].clientX,H=V.touches[0].clientY},{passive:!0}),I.addEventListener("touchend",V=>{const v=V.changedTouches[0].clientX-q,P=V.changedTouches[0].clientY-H;Math.abs(v)<40||Math.abs(v)<Math.abs(P)||(v<0&&c<s.length-1?(c++,o()):v>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function ui(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function we(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:me(e),d=ui(e),s=e._line||e.job||"MIL",a=Fe[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(ne(e,s))||0)+(e.boost||0),o=fi(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),m=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${m}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ft(e==null?void 0:e.country_code)?`<img src="${ft(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ze(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(d+=we(s,40,52),a<n.length-1){const l=Te(s,n[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ft(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function fi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function He(e,t,i,n,d=310,s=310,a=[]){const l=Ke[t]||{},c=ti(t)||yt[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const z of r)(e[z]||[]).forEach((L,T)=>{o[`${z}${T+1}`]=L});function u(z){const b=l[z];return b?{x:b.x*d,y:b.y*s}:null}let f="";for(const[z,b]of c){const L=u(z),T=u(b);if(!L||!T)continue;const q=o[z],H=o[b],V=Te(q,H);V==="#00ff88"||V==="#FFD700"?(f+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${T.x.toFixed(1)}" y2="${T.y.toFixed(1)}"
        stroke="${V}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${T.x.toFixed(1)}" y2="${T.y.toFixed(1)}"
        stroke="${V}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${T.x.toFixed(1)}" y2="${T.y.toFixed(1)}"
        stroke="${V}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=48,k=64,p=13,y=16,I={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[z,b]of Object.entries(o)){const L=u(z);if(!L||!b)continue;const T=z.replace(/[0-9]/g,""),q=Fe[T]||"#555",H=a.includes(b.cardId),V=i==="attack"&&(["MIL","ATT"].includes(T)||H)&&!b.used||i==="defense"&&["GK","DEF","MIL"].includes(T)&&!b.used,v=n.includes(b.cardId);let P;i==="attack"?P=H?Math.max(1,Number(b.note_a)||0):T==="MIL"?Number(b.note_m)||0:Number(b.note_a)||0:i==="defense"?P=T==="GK"?Number(b.note_g)||0:T==="MIL"?Number(b.note_m)||0:Number(b.note_d)||0:P=Number(T==="GK"?b.note_g:T==="DEF"?b.note_d:T==="MIL"?b.note_m:b.note_a)||0,P=P+(b.boost||0);const A=(L.x-m/2).toFixed(1),U=(L.y-k/2).toFixed(1),R=b.used?.25:v?.45:1,Y=I[b==null?void 0:b.rarity]||I.normal,ie=v?"#FFD700":Y,re=v?3:(b==null?void 0:b.rarity)==="légende"||(b==null?void 0:b.rarity)==="pépite"?2.5:2,ee=k-p-y;f+=`<defs><clipPath id="cp-${z}"><rect x="${A}" y="${(L.y-k/2+p).toFixed(1)}" width="${m}" height="${ee}"/></clipPath></defs>`,f+=`<rect x="${A}" y="${U}" width="${m}" height="${k}" rx="5" fill="${q}" opacity="${R}"/>`;const pe=me(b);pe&&!b.used&&(f+=`<image href="${pe}" x="${A}" y="${(L.y-k/2+p).toFixed(1)}" width="${m}" height="${ee}" clip-path="url(#cp-${z})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${A}" y="${U}" width="${m}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${L.x.toFixed(1)}" y="${(L.y-k/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(b.name||"").slice(0,9)}</text>`;const Q=(L.y+k/2-y).toFixed(1);if(f+=`<rect x="${A}" y="${Q}" width="${m}" height="${y}" fill="rgba(255,255,255,0.92)"/>`,b.used)f+=`<text x="${L.x.toFixed(1)}" y="${(L.y+k/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const S=ft(b.country_code);S?f+=`<image href="${S}" x="${(L.x-20).toFixed(1)}" y="${(L.y+k/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(L.x-13).toFixed(1)}" y="${(L.y+k/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${fi(b.country_code)}</text>`,f+=`<text x="${L.x.toFixed(1)}" y="${(L.y+k/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${P}</text>`;const E=ui(b);E?f+=`<image href="${E}" x="${(L.x+m/2-14).toFixed(1)}" y="${(L.y+k/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:b.clubName&&(f+=`<text x="${(L.x+14).toFixed(1)}" y="${(L.y+k/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(b.clubName||"").slice(0,3).toUpperCase()}</text>`),b.boost&&(f+=`<rect x="${(L.x+m/2-12).toFixed(1)}" y="${(L.y-k/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(L.x+m/2-5).toFixed(1)}" y="${(L.y-k/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${b.boost}</text>`)}f+=`<rect x="${A}" y="${U}" width="${m}" height="${k}" rx="5" fill="${v?"rgba(255,255,255,0.12)":"none"}" stroke="${ie}" stroke-width="${re}" opacity="${R}"/>`,V&&(f+=`<rect x="${A}" y="${U}" width="${m}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${v?"selected":""}" data-card-id="${b.cardId}" data-role="${T}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${d+_*2} ${s+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function Ue(e,t,i,n,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${He(e,t,i,n,d,s,a)}
  </div>`}function Se(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function gi(e,t,i,n){var L;const{state:d,navigate:s,toast:a}=t;_e(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return lo(e,t,i);const c=l.deckId;let o,r,u,f;try{const T=await Promise.all([j.from("decks").select("formation,name").eq("id",c).single(),j.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=T[0].data,u=T[0].error,r=T[1].data,f=T[1].error}catch(T){console.error("[Match] Exception chargement deck:",T),Ee(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),Ee(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const m=(r||[]).filter(T=>{var q;return T.is_starter&&((q=T.card)==null?void 0:q.player)}).map(T=>ut(T.card,T.position)),k=(r||[]).filter(T=>{var q;return!T.is_starter&&((q=T.card)==null?void 0:q.player)}).map(T=>ut(T.card,T.position));if(m.length<11){Ee(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>s("decks"));return}const p=(r||[]).find(T=>{var q;return((q=T.card)==null?void 0:q.card_type)==="formation"}),y=(o==null?void 0:o.formation)||((L=p==null?void 0:p.card)==null?void 0:L.formation)||"4-4-2",{data:I,error:_}=await j.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:z}=await j.from("gc_definitions").select("*").eq("is_active",!0),b=(I||[]).map(T=>({...T,_gcDef:(z==null?void 0:z.find(q=>q.name===T.gc_type||q.id===T.gc_definition_id))||null}));n({deckId:c,formation:y,starters:m,subsRaw:k,gcCardsEnriched:b,gcDefs:z||[]})}async function co(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await gi(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:f})=>{try{const m=ot(o,c),k=await po(c,s),p=async y=>{try{const{data:I,error:_}=await j.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(_){console.error("[MatchIA] Erreur création match:",_),Ee(e,"⚠️","Impossible de créer le match ("+_.message+").","Retour",()=>t.navigate("home"));return}const z={gcDefs:f||[],matchId:I==null?void 0:I.id,mode:a,difficulty:s,formation:c,homeTeam:m,aiTeam:k,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:y,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};fo(e,z,t)}catch(I){console.error("[MatchIA] Exception launchMatch:",I),Ee(e,"⚠️","Erreur au lancement du match : "+I.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}pi(e,u,p)}catch(m){console.error("[MatchIA] Exception setup:",m),Ee(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function po(e,t){var a,l;const{data:i}=await j.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return uo(e);const n=Be[e]||Be["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(k=>k.job===c),r=s.filter(k=>k.job!==c),u=[...o,...r],f=[];for(let k=0;k<n[c];k++){const p=u[k]||s[k];p&&f.push({cardId:"ai-"+p.id+"-"+k,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((a=p.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=p.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const m=it(f.length);f.forEach((k,p)=>{k._col=m[p]}),d[c]=f}return d}function uo(e){const t=Be[e]||Be["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=it(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function fo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${He(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>go(e,t,i),5e3)}function go(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(p){return p.reduce((y,I)=>y+ne(I,"MIL"),0)}function a(p){let y=0;for(let I=0;I<p.length-1;I++){const _=Te(p[I],p[I+1]);_==="#00ff88"?y+=2:_==="#FFD700"&&(y+=1)}return y}const l=s(n)+a(n),c=s(d)+a(d),o=l>=c;function r(p,y,I,_){return`<div id="duel-row-${_}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${y}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((z,b)=>{const L=b<p.length-1?Te(z,p[b+1]):null,T=!L||L==="#ff3333"||L==="#cc2222",q=L==="#00ff88"?"+2":L==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${_}" data-idx="${b}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${we({...z,note:ne(z,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${b<p.length-1?`<div class="duel-link duel-link-${_}" data-idx="${b}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${T?"rgba(255,255,255,0.12)":L};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${T?"none":`0 0 8px ${L}`}">
            ${q?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${L}">${q}</span>`:""}
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
  </div>`;const u=()=>{const p=(y,I)=>e.querySelectorAll(y).forEach((_,z)=>{setTimeout(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"},I+z*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((y,I)=>{setTimeout(()=>{y.style.opacity="1"},I*70)}),900),setTimeout(()=>{const y=e.querySelector("#vs-label");y&&(y.style.opacity="1",y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{f("score-home",l,800),f("score-ai",c,800)},1500)};function f(p,y,I){const _=document.getElementById(p);if(!_)return;const z=performance.now(),b=L=>{const T=Math.min(1,(L-z)/I);_.textContent=Math.round(y*(1-Math.pow(1-T,3))),T<1?requestAnimationFrame(b):_.textContent=y};requestAnimationFrame(b)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const m=o?ci():null;o&&(t.boostCard={value:m}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:ne(p,"MIL"),portrait:me(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:ne(p,"MIL"),portrait:me(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const k=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ce(e,t,i),t.attacker==="ai"&&setTimeout(()=>gt(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),y=document.getElementById("score-ai"),I=document.getElementById(o?"duel-row-home":"duel-row-ai"),_=document.getElementById(o?"duel-row-ai":"duel-row-home"),z=o?p:y,b=o?y:p;z&&(z.style.fontSize="80px",z.style.color=o?"#FFD700":"#ff6b6b",z.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),b&&(b.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var T;const L=document.getElementById("duel-shock");if(L){const q=(T=_||I)==null?void 0:T.getBoundingClientRect(),H=e.querySelector(".match-screen").getBoundingClientRect();q&&(L.style.top=q.top-H.top+q.height/2+"px"),L.style.animation="shockwave .5s ease-out forwards"}_&&(_.style.transformOrigin="center",_.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var T;const L=document.getElementById("duel-finale");L&&(L.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${m}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,L.style.transition="opacity .45s ease",L.style.opacity="1",L.style.pointerEvents="auto",(T=document.getElementById("start-match-btn"))==null||T.addEventListener("click",k))},600)},700)},2800)}function mo(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ce(e,t,i){var _,z,b,L,T,q,H,V;const n=t.selected.map(v=>v.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(v=>!d.includes(v.cardId));Object.values(t.homeTeam).flat().filter(v=>v.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs;const l=!["GK","DEF","MIL","ATT"].some(v=>(t.aiTeam[v]||[]).some(P=>!P.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(v=>!v.used),o=t.phase==="attack"&&l&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(v=>!v.used).map(v=>v.cardId):[];t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",f=t.phase==="defense",m=t.phase==="finished",k=t.gcCards.filter(v=>!t.usedGc.includes(v.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const P=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ze((P.players||[]).map(A=>({...A,used:!1})),"#ff6b6b",P.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const P=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ze((P.players||[]).map(A=>({...A,used:!1})),"#00ff88",P.total)}
          </div>`}const v=t.log[t.log.length-1];return v?'<div style="padding:2px 4px">'+mo(v)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const v=window.innerWidth>=700,P=(Q,S,E)=>{var N,K;const G=(t.gcDefs||[]).find(Z=>Z.name===Q.gc_type),g={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[G==null?void 0:G.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[G==null?void 0:G.color]||"#b06ce0",$=(G==null?void 0:G.name)||Q.gc_type,h=(G==null?void 0:G.effect)||((N=be[Q.gc_type])==null?void 0:N.desc)||"",w=G!=null&&G.image_url?`/manager-wars/icons/${G.image_url}`:null,C=((K=be[Q.gc_type])==null?void 0:K.icon)||"⚡",M=Math.round(E*.22),F=Math.round(E*.22),D=E-M-F,B=$.length>12?7:9;return`<div class="gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
          style="box-sizing:border-box;width:${S}px;height:${E}px;border-radius:10px;border:2px solid ${x};background:${g};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${M}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${B}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${S-6}px">${$}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${D}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${w?`<img src="${w}" style="max-width:${S-10}px;max-height:${D-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(D*.55)}px">${C}</span>`}
          </div>
          <div style="height:${F}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${h.slice(0,38)}</span>
          </div>
        </div>`},A=(Q,S)=>{var E;return`<div id="boost-card"
          style="box-sizing:border-box;width:${Q}px;height:${S}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(S*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(S*.2)}px">⚡</div>
            <div style="font-size:${Math.round(S*.09)}px;color:#000;font-weight:900">+${(E=t.boostCard)==null?void 0:E.value}</div>
          </div>`},U=(Q,S)=>S?A(110,150):P(Q,110,150),R=(Q,S)=>S?A(68,95):P(Q,68,95),Y=v?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ie=m?`<button id="btn-results" style="${Y};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${Y};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-action" style="${Y};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:f?`<button id="btn-action" style="${Y};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${Y};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,re=u||f?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",ee=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${v?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(Q=>`<div class="sub-btn-col" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${we(Q,44,58)}</div>`).join("")}
      </div>`,pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Ue(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return v?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${ee}
          ${pe}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${k.map(Q=>U(Q,!1)).join("")}
              ${p?U(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${ie}${re}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${ee}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ue(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${k.map(Q=>R(Q,!1)).join("")}
            ${p?R(null,!0):""}
          </div>
          <div>${ie}${re}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(v=>{var P,A,U;if(v.type==="duel"){const R=v.isGoal,Y=v.homeScored?"#FFD700":R?"#ff6b6b":"rgba(255,255,255,0.3)",ie=v.homeScored?"⚽ BUT !":R?"⚽ BUT IA !":(P=v.homePlayers)!=null&&P.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${R?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${Y};margin-bottom:4px">
                <div style="font-size:9px;color:${Y};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ie}</div>
                ${(A=v.homePlayers)!=null&&A.length?`<div style="margin-bottom:3px">${ze(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
                ${(U=v.aiPlayers)!=null&&U.length?`<div style="opacity:0.7">${ze(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
              </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${v.outPlayer?we({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${v.inPlayer?we({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:v.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${v.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${v.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function y(){const v=e.querySelector(".match-screen");if(!v)return;const P=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);v.style.bottom="auto",v.style.height=P+"px",v.style.minHeight=P+"px",v.style.maxHeight=P+"px",v.style.overflow="hidden";const A=e.querySelector("#mobile-action-bar"),U=e.querySelector("#mobile-play-area");A&&U&&(U.style.paddingBottom=A.offsetHeight+"px")}if(y(),setTimeout(y,120),setTimeout(y,400),setTimeout(y,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",y),window.visualViewport.addEventListener("scroll",y)),window.addEventListener("resize",y)),function(){const P=e.querySelector(".terrain-wrapper svg");P&&(P.removeAttribute("width"),P.removeAttribute("height"),P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",P.setAttribute("viewBox","-26 -26 352 352"),P.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const v=e.querySelector(".terrain-wrapper svg");v&&(v.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let v=!1,P=30;const A=()=>document.getElementById("match-timer"),U=()=>{const R=A();if(!R)return;const Y=String(Math.floor(P/60)).padStart(2,"0"),ie=String(P%60).padStart(2,"0");R.textContent=` ${Y}:${ie}`,R.style.color=v?"#ff2222":"#ff9500",R.style.fontWeight="900"};U(),t._timerInt=setInterval(()=>{if(P--,P<0)if(!v)v=!0,P=15,U();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(R),setTimeout(()=>{R.remove(),Oe(e,t,i)},2500)}else U()},1e3)}(_=document.getElementById("match-quit"))==null||_.addEventListener("click",()=>{ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Oe(e,t,i))}),(z=document.getElementById("view-ai"))==null||z.addEventListener("click",()=>Eo(t,i)),(b=document.getElementById("toggle-history"))==null||b.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.remove("open")}),(T=document.getElementById("btn-action"))==null||T.addEventListener("click",()=>{t.selected.length!==0&&(u?yo(e,t,i):f&&ho(e,t,i))}),(q=document.getElementById("btn-results"))==null||q.addEventListener("click",()=>Oe(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(v=>{v.addEventListener("click",()=>xo(v,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(v=>{v.addEventListener("click",()=>wo(v.dataset.gcId,v.dataset.gcType,e,t,i))}),(H=document.getElementById("boost-card"))==null||H.addEventListener("click",()=>ko(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(v=>{v.addEventListener("click",()=>Jt(e,t,i,v.dataset.subId))}),(V=document.getElementById("sub-btn-main"))==null||V.addEventListener("click",()=>Jt(e,t,i))}function xo(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}ce(i,t,n)}function _t(e,t,i){e.matchId&&j.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function yo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),_t(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=ht(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ce(e,t,i),setTimeout(()=>bo(e,t,i),1200)}function ho(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),_t(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=bt(n,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=vt(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:me(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:me(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ce(e,t,i),nt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{je(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,je(e,t,i,"home-attack")}function gt(e,t,i){_t(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=oi(n,"attack",t.difficulty);if(!d.length){Xe(e,t,i);return}const s=ht(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:me(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,ce(e,t,i),nt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{je(e,t,i,"home-attack")});return}t.phase="defense",ce(e,t,i)}function bo(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=oi(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(m=>({name:m.name,note:ne(m,m._line||m.job),portrait:me(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,ce(e,t,i),nt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{je(e,t,i,"ai-attack")});return}const a=d.length>0?bt(d,t.modifiers.ai).total:0;d.forEach(u=>{u.used=!0});const l=vt(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:me(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:me(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,ce(e,t,i),nt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{je(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,je(e,t,i,"ai-attack")}function je(e,t,i,n){if(t.round++,mi(t)){Oe(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Xe(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Xe(e,t,i);return}setTimeout(()=>gt(e,t,i),100);return}t.phase="attack",ce(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Xe(e,t,i);return}t.phase="ai-attack",ce(e,t,i),setTimeout(()=>gt(e,t,i),800)}}function mi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Xe(e,t,i){mi(t)?Oe(e,t,i):(t.phase="attack",ce(e,t,i))}function vo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=me(e),s=me(t),a=Fe[e.job]||"#555",l=Fe[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",u),setTimeout(u,2e3)}function Ne(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Jt(e,t,i,n=null){if(t.phase!=="attack"){Ne("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ne(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(u=>u.used),s=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!d.length){Ne("Aucun joueur utilisé à remplacer");return}if(!s.length){Ne("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(u=>u.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var I,_,z,b,L,T;const u=d[a],f=s[l],m=Math.min(130,Math.round((window.innerWidth-90)/2)),k=Math.round(m*1.35),p=q=>`background:rgba(255,255,255,0.12);border:none;color:${q?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${q?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${f?we({...f,used:!1,boost:0},m,k):"<div>—</div>"}</div>
        <button id="in-down" style="${p(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?we({...u,used:!1,boost:0},m,k):"<div>—</div>"}</div>
        <button id="out-down" style="${p(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(I=o.querySelector("#sub-close"))==null||I.addEventListener("click",()=>o.remove()),(_=o.querySelector("#out-up"))==null||_.addEventListener("click",()=>{a>0&&(a--,r())}),(z=o.querySelector("#out-down"))==null||z.addEventListener("click",()=>{a<d.length-1&&(a++,r())}),(b=o.querySelector("#in-up"))==null||b.addEventListener("click",()=>{l>0&&(l--,r())}),(L=o.querySelector("#in-down"))==null||L.addEventListener("click",()=>{l<s.length-1&&(l++,r())});const y=(q,H,V,v)=>{const P=o.querySelector("#"+q);if(!P)return;let A=0;P.addEventListener("touchstart",U=>{A=U.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",U=>{const R=U.changedTouches[0].clientY-A;if(Math.abs(R)<30)return;const Y=H();R<0&&Y<v-1?(V(Y+1),r()):R>0&&Y>0&&(V(Y-1),r())},{passive:!0})};y("in-panel",()=>l,q=>l=q,s.length),y("out-panel",()=>a,q=>a=q,d.length),(T=o.querySelector("#sub-confirm"))==null||T.addEventListener("click",q=>{if(q.preventDefault(),q.stopPropagation(),c)return;c=!0;const H=d[a],V=s[l];if(!H||!V)return;let v=null,P=-1;for(const[U,R]of Object.entries(t.homeTeam)){const Y=(R||[]).findIndex(ie=>ie.cardId===H.cardId);if(Y!==-1){v=U,P=Y;break}}if(P===-1||!v){Ne("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const A={...V,_line:v,_col:H._col||0,used:!1,boost:0};t.homeTeam[v].splice(P,1,A),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(V.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:H.name,firstname:H.firstname,note:ne(H,v),portrait:me(H),job:H.job,country_code:H.country_code,rarity:H.rarity,clubName:H.clubName,clubLogo:H.clubLogo},inPlayer:{name:V.name,firstname:V.firstname,note:ne(V,v),portrait:me(V),job:V.job,country_code:V.country_code,rarity:V.rarity,clubName:V.clubName,clubLogo:V.clubLogo},text:`🔄 ${V.firstname} ${V.name} remplace ${H.firstname} ${H.name}`}),o.remove(),vo(H,V,()=>ce(e,t,i))})}document.body.appendChild(o),r()}function wo(e,t,i,n,d){var k,p;const s=(n.gcDefs||[]).find(y=>y.name===t),a=be[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,f=a.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
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
    </div>`,document.body.appendChild(m),(k=m.querySelector("#gc-back"))==null||k.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),_o(e,t,i,n,d)})}function We(e,t,i,n,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",k=ne(u,f)+(u.boost||0),p=l.find(y=>y.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${m};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,m=e.find(p=>p.cardId===f);if(!m)return;const k=l.findIndex(p=>p.cardId===f);k>-1?l.splice(k,1):l.length<t&&l.push(m),c()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const $o={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(We(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(c=>{const o=(n.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),ce(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ce(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,a)=>{const l=n==="home"?d.homeTeam:d.aiTeam,c=n==="ai"?"adverse":"allié",o=Object.entries(l).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:r})));return o.length?(We(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,r=>{r.forEach(u=>{const m=((n==="home"?d.homeTeam:d.aiTeam)[u._line]||[]).find(k=>k.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),ce(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),ce(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const a=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:o})));return c.length?(We(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,o=>{o.forEach(r=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(m=>m.cardId===r.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ce(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ce(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(We(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),ce(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ce(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function _o(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=$o[a.effect_type];c?c(a.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,u)=>ne(u,"ATT")-ne(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}j.from("cards").delete().eq("id",e).then(()=>{}),l&&ce(i,n,d)}function ko(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Fe[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ne(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ce(e,t,i)})})}function nt(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Fe[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function Oe(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=Ii(t.mode,a);t.matchId&&await j.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?c.wins=(n.profile.wins||0)+1:s?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await j.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),ve(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),ve(e),i.navigate("match",{matchMode:t.mode})})}function Eo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${He(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function To(e,t){await gi(e,t,"random",({deckId:i,formation:n,starters:d,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const c=o=>Ao(e,t,i,n,d,s,o,l||[]);if(!a.length){c([]);return}pi(e,a,c)})}async function Ao(e,t,i,n,d,s,a=[],l=[]){var _;const{state:c,navigate:o,toast:r}=t;let u=!1,f=null;_e(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const m=async(z=!0)=>{u=!0,f&&(j.removeChannel(f),f=null),z&&await j.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(_=document.getElementById("mm-cancel"))==null||_.addEventListener("click",async()=>{try{await m(!0)}catch{}ve(e),o("home")});const k=async(z,b,L)=>{if(u)return;u=!0,f&&(j.removeChannel(f),f=null);const T=document.getElementById("mm-status");T&&(T.textContent="Adversaire trouvé !"),await new Promise(q=>setTimeout(q,600)),e.isConnected&&Io(e,t,z,L,a,l)},{data:p,error:y}=await j.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(y||!(p!=null&&p.success)){r("Erreur de matchmaking","error"),ve(e),o("home");return}if(p.matched){k(p.match_id,p.opponent_id,!1);return}const I=document.getElementById("mm-status");I&&(I.textContent="En attente d'un autre joueur..."),f=j.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},z=>{const b=z.new;b.status==="matched"&&b.match_id&&k(b.match_id,b.matched_with,!0)}).subscribe()}async function Io(e,t,i,n,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",u=(d||[]).map(g=>g.id),f=(d||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:m}=await j.from("matches").select("*").eq("id",i).single();if(!m){c("Match introuvable","error"),l("home");return}async function k(){const[{data:g},{data:x},{data:$},{data:h}]=await Promise.all([j.rpc("get_deck_for_match",{p_deck_id:m.home_deck_id}),j.rpc("get_deck_for_match",{p_deck_id:m.away_deck_id}),j.from("users").select("id,pseudo,club_name").eq("id",m.home_id).single(),j.from("users").select("id,pseudo,club_name").eq("id",m.away_id).single()]),w=B=>({cardId:B.card_id,position:B.position,id:B.id,firstname:B.firstname,name:B.surname_encoded,country_code:B.country_code,club_id:B.club_id,job:B.job,job2:B.job2,note_g:Number(B.note_g)||0,note_d:Number(B.note_d)||0,note_m:Number(B.note_m)||0,note_a:Number(B.note_a)||0,rarity:B.rarity,skin:B.skin,hair:B.hair,hair_length:B.hair_length,clubName:B.club_encoded_name||null,clubLogo:B.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),C=((g==null?void 0:g.starters)||[]).map(B=>w(B)),M=((x==null?void 0:x.starters)||[]).map(B=>w(B)),F=(g==null?void 0:g.formation)||"4-4-2",D=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:ot(C,F),p2Team:ot(M,D),p1Subs:((g==null?void 0:g.subs)||[]).map(B=>w(B)),p2Subs:((x==null?void 0:x.subs)||[]).map(B=>w(B)),p1Formation:F,p2Formation:D,p1Name:($==null?void 0:$.club_name)||($==null?void 0:$.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,lastActionAt:new Date().toISOString()}}let p=m.game_state&&Object.keys(m.game_state).length?m.game_state:null;if(!p)if(n){p=await k();const{data:g}=await j.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await j.from("matches").update({game_state:p,turn_user_id:m.home_id}).eq("id",i):p=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<30&&!p;g++){await new Promise($=>setTimeout($,400));const{data:x}=await j.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(p=x.game_state)}if(!p){c("Erreur de synchronisation","error"),l("home");return}p.gc_p2=u,p.gcCardsFull_p2=f,await j.from("matches").update({game_state:p}).eq("id",i)}let y=!1,I=null,_=!1;function z(g){var h,w;try{j.removeChannel(b)}catch{}const x=g.winner_id===a.profile.id;(h=$.remove)==null||h.call($);const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",$.innerHTML=`
      <div style="font-size:64px">${x?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${x?"#FFD700":"#ff6b6b"}">${x?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px">${p[o+"Name"]} ${p[o+"Score"]} – ${p[r+"Score"]} ${p[r+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild($),(w=$.querySelector("#pvp-end-home"))==null||w.addEventListener("click",()=>{$.remove(),ve(e),l("home")})}const b=j.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const x=g.new;try{if(x.status==="finished"||x.forfeit){if(y)return;y=!0,I&&(clearInterval(I),I=null),x.game_state&&(p=x.game_state),z(x);return}x.game_state&&(p=x.game_state,v())}catch($){console.error("[PvP] crash:",$)}}).subscribe();async function L(g){Object.assign(p,g),p.lastActionAt=new Date().toISOString();const{error:x}=await j.from("matches").update({game_state:p}).eq("id",i);x&&c("Erreur de synchronisation","error");try{v()}catch($){console.error("[PvP] renderPvpScreen crash:",$)}}async function T(){if(y)return;y=!0,I&&(clearInterval(I),I=null);const g=n?m.away_id:m.home_id,x=n?"p2":"p1",$=n?"p1":"p2",h={...p,[x+"Score"]:3,[$+"Score"]:0,phase:"finished"};try{await j.from("matches").update({status:"finished",forfeit:!0,winner_id:g,game_state:h}).eq("id",i)}catch{}try{j.removeChannel(b)}catch{}ve(e),l("home")}const q={BOOST_STAT:({value:g=1,count:x=1,roles:$=[]},h,w)=>{const C=h[o+"Team"],M=Object.entries(C).filter(([F])=>!$.length||$.includes(F)).flatMap(([F,D])=>D.filter(B=>!B.used).map(B=>({...B,_line:F})));if(!M.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),w(h);return}H(M,x,`Choisir ${x} joueur(s) à booster (+${g})`,F=>{F.forEach(D=>{const B=(C[D._line]||[]).find(N=>N.cardId===D.cardId);B&&(B.boost=(B.boost||0)+g,h.log.push({text:`⚡ +${g} sur ${B.name}`,type:"info"}))}),h[o+"Team"]=C,w(h)})},DEBUFF_STAT:({value:g=1,count:x=1,roles:$=[],target:h="ai"},w,C)=>{const M=h==="home"?o:r,F=w[M+"Team"],D=h==="home"?"allié":"adverse",B=Object.entries(F).filter(([N])=>!$.length||$.includes(N)).flatMap(([N,K])=>K.filter(Z=>!Z.used).map(Z=>({...Z,_line:N})));if(!B.length){w.log.push({text:`🎯 Aucun joueur ${D}`,type:"info"}),C(w);return}H(B,x,`Choisir ${x} joueur(s) ${D}(s) (-${g})`,N=>{N.forEach(K=>{const Z=(F[K._line]||[]).find(le=>le.cardId===K.cardId);Z&&(Z.boost=(Z.boost||0)-g,w.log.push({text:`🎯 -${g} sur ${Z.name}`,type:"info"}))}),w[M+"Team"]=F,C(w)})},GRAY_PLAYER:({count:g=1,roles:x=[],target:$="ai"},h,w)=>{const C=$==="home"?o:r,M=h[C+"Team"],F=$==="home"?"allié":"adverse",D=Object.entries(M).filter(([B])=>!x.length||x.includes(B)).flatMap(([B,N])=>N.filter(K=>!K.used).map(K=>({...K,_line:B})));if(!D.length){h.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),w(h);return}H(D,g,`Choisir ${g} joueur(s) ${F}(s) à exclure`,B=>{B.forEach(N=>{const K=(M[N._line]||[]).find(Z=>Z.cardId===N.cardId);K&&(K.used=!0,h.log.push({text:`❌ ${K.name} exclu !`,type:"info"}))}),h[C+"Team"]=M,w(h)})},REVIVE_PLAYER:({count:g=1,roles:x=[]},$,h)=>{const w=$[o+"Team"],C=Object.entries(w).filter(([M])=>!x.length||x.includes(M)).flatMap(([M,F])=>F.filter(D=>D.used).map(D=>({...D,_line:M})));if(!C.length){$.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h($);return}H(C,g,`Choisir ${g} joueur(s) à ressusciter`,M=>{M.forEach(F=>{const D=(w[F._line]||[]).find(B=>B.cardId===F.cardId);D&&(D.used=!1,$.log.push({text:`💫 ${D.name} ressuscité !`,type:"info"}))}),$[o+"Team"]=w,h($)})},REMOVE_GOAL:({},g,x)=>{const $=r+"Score";g[$]>0?(g[$]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(g)},ADD_GOAL_DRAW:({},g,x)=>{g[o+"Score"]===g[r+"Score"]?(g[o+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(g)},ADD_SUB:({value:g=1},x,$)=>{x.maxSubs=(x.maxSubs||3)+g,x.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),$(x)},CUSTOM:({},g,x)=>x(g)};function H(g,x,$,h){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let C=[];function M(){var D,B;const F=g.map(N=>{const K={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[N._line]||"#555",Z=ne(N,N._line)+(N.boost||0),ue=C.find(J=>J.cardId===N.cardId)?"#FFD700":"rgba(255,255,255,0.25)",fe=N.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${N.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ue};background:${K};overflow:hidden;cursor:pointer;${fe}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${N.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${N._line}</div>
        </div>`}).join("");w.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${$}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${C.length}/${x}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${C.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${C.length}/${x})
          </button>
        </div>`,(D=w.querySelector("#pp-close"))==null||D.addEventListener("click",()=>w.remove()),w.querySelectorAll(".pp-item").forEach(N=>{N.addEventListener("click",()=>{const K=N.dataset.cid,Z=g.find(ue=>ue.cardId===K),le=C.findIndex(ue=>ue.cardId===K);Z&&(le>-1?C.splice(le,1):C.length<x&&C.push(Z),M())})}),(B=w.querySelector("#pp-confirm"))==null||B.addEventListener("click",()=>{w.remove(),h(C)})}M(),document.body.appendChild(w)}async function V(g,x){const h=(p["gcCardsFull_"+o]||[]).find(F=>F.id===g),w=(h==null?void 0:h._gcDef)||(p.gcDefs||[]).find(F=>{var D;return F.name===x||((D=F.name)==null?void 0:D.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),C=[...p["usedGc_"+o]||[],g];if(w!=null&&w.effect_type&&w.effect_type!=="CUSTOM"){const F=q[w.effect_type];if(F){const D={...p};F(w.effect_params||{},D,async B=>{B["usedGc_"+o]=C,await L(B)});return}}const M={...p};switch(x){case"Remplacement+":M.maxSubs=(M.maxSubs||3)+1,M.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const F=r+"Score";M[F]>0&&(M[F]--,M.log.push({text:"🚫 But annulé",type:"info"}));break}}M["usedGc_"+o]=C,await L(M)}function v(){var Mt,zt,St,jt,Ct;if(p.phase==="reveal")return P();if(p.phase==="midfield")return U();if(p.phase==="finished")return G();const g=p[o+"Team"],x=p[r+"Team"],$=p[o+"Score"],h=p[r+"Score"],w=p[o+"Name"],C=p[r+"Name"],M=p.phase===o+"-attack",F=p.phase===o+"-defense",D=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],B=D.map(O=>O.cardId),N=window.innerWidth>=700,K=p[o+"Subs"]||[],Z=p["usedSubIds_"+o]||[],le=K.filter(O=>!Z.includes(O.cardId)),ue=p["gcCardsFull_"+o]||[],fe=p["usedGc_"+o]||[],J=ue.filter(O=>!fe.includes(O.id)),W=p.boostOwner===o&&!p.boostUsed,oe=!["GK","DEF","MIL","ATT"].some(O=>(x[O]||[]).some(X=>!X.used)),se=[...g.MIL||[],...g.ATT||[]].filter(O=>!O.used),ye=M&&oe&&se.length===0?[...g.GK||[],...g.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function ge(O,X,de){var Gt,qt;const te=O._gcDef,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[te==null?void 0:te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Le={purple:"#b06ce0",light_blue:"#00d4ef"}[te==null?void 0:te.color]||"#b06ce0",Ge=(te==null?void 0:te.name)||O.gc_type,qe=(te==null?void 0:te.effect)||((Gt=be[O.gc_type])==null?void 0:Gt.desc)||"",Bt=te!=null&&te.image_url?`/manager-wars/icons/${te.image_url}`:null,wi=((qt=be[O.gc_type])==null?void 0:qt.icon)||"⚡",Ft=Math.round(de*.22),Dt=Math.round(de*.22),lt=de-Ft-Dt,$i=Ge.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${X}px;height:${de}px;border-radius:10px;border:2px solid ${Le};background:${$e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Ft}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${$i}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${X-6}px">${Ge}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Bt?`<img src="${Bt}" style="max-width:${X-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${wi}</span>`}
        </div>
        <div style="height:${Dt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${qe.slice(0,38)}</span>
        </div>
      </div>`}function xe(O,X){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${X}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(X*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(X*.2)}px">⚡</div>
        <div style="font-size:${Math.round(X*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const he=(O,X)=>X?xe(110,150):ge(O,110,150),Ve=(O,X)=>X?xe(68,95):ge(O,68,95),De=N?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ae=M?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${D.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${D.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${C}</div>`,Tt=M||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${D.length}/3 sélectionné(s)</div>`:"",At=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${N?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${we(O,N?60:44,N?78:58)}</div>`).join("")}
    </div>`,It=M?"attack":F?"defense":"idle",hi=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
        ${Ue(g,p[o+"Formation"],It,B,300,300,ye)}
      </div>
    </div>`;function bi(O){if(O.type==="duel"){const X=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(O.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.homePlayers||[]).map(de=>Se(de)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${X?20:14}px;font-weight:900;color:${X?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${O.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${X?14:20}px;font-weight:900;color:${X?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${O.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.aiPlayers||[]).map(de=>Se(de)).join("")}
            </div>
          </div>
          ${O.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${O.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const vi=(()=>{var X,de;if(F&&((X=p.pendingAttack)!=null&&X.players)){const te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${C} ATTAQUE — Défendez !</div>
          ${ze((te.players||[]).map($e=>({...$e,used:!1})),"#ff6b6b",te.total)}
        </div>`}if(M&&((de=p.pendingAttack)!=null&&de.players)){const te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ze((te.players||[]).map($e=>({...$e,used:!1})),"#00ff88",te.total)}
        </div>`}const O=(p.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+bi(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Lt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${$} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${C}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${vi}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;_e(e),e.style.overflow="hidden",N?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Lt}
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${At}
          ${hi}
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${J.map(O=>he(O,!1)).join("")}
              ${W?he(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${Ae}${Tt}</div>
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Lt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${At}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ue(g,p[o+"Formation"],It,B,300,300,ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${J.map(O=>Ve(O,!1)).join("")}
            ${W?Ve(null,!0):""}
          </div>
          <div>${Ae}${Tt}</div>
        </div>
      </div>`;function Ie(){const O=e.querySelector(".match-screen");if(!O)return;const X=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=X+"px",O.style.minHeight=X+"px",O.style.maxHeight=X+"px",O.style.overflow="hidden";const de=e.querySelector("#mobile-action-bar"),te=e.querySelector("#mobile-play-area");de&&te&&(te.style.paddingBottom=de.offsetHeight+"px")}if(Ie(),setTimeout(Ie,120),setTimeout(Ie,400),_||(_=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ie),window.visualViewport.addEventListener("scroll",Ie)),window.addEventListener("resize",Ie)),function(){const X=e.querySelector(".terrain-wrapper svg");X&&(X.removeAttribute("width"),X.removeAttribute("height"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",X.setAttribute("viewBox","-26 -26 352 352"),X.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!M&&!F)return;const X=O.dataset.cardId,de=O.dataset.role,te=(g[de]||[]).find(qe=>qe.cardId===X);if(!te||te.used)return;const $e=ye.includes(X);if(M&&!["MIL","ATT"].includes(de)&&!$e)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const Le=p["selected_"+o],Ge=Le.findIndex(qe=>qe.cardId===X);Ge>-1?Le.splice(Ge,1):Le.length<3&&Le.push({...te,_role:de}),v()})}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>{if(!M){c("Remplacement uniquement avant une attaque","warning");return}re(O.dataset.subId)})}),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>Y(O.dataset.gcId,O.dataset.gcType))}),(Mt=e.querySelector("#pvp-boost-card"))==null||Mt.addEventListener("click",()=>ie()),(zt=e.querySelector("#pvp-action"))==null||zt.addEventListener("click",()=>{M?Q():F&&S()}),(St=e.querySelector("#pvp-quit"))==null||St.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&T()}),(jt=e.querySelector("#pvp-view-opp"))==null||jt.addEventListener("click",()=>ee()),(Ct=e.querySelector("#pvp-toggle-history"))==null||Ct.addEventListener("click",()=>pe()),I&&(clearInterval(I),I=null),(M||F)&&!y){let O=30,X=!1;const de=()=>document.getElementById("pvp-timer"),te=()=>{de()&&(de().textContent=O+"s",de().style.color=X?"#ff4444":"#fff")};te(),I=setInterval(()=>{O--,O<0?X?(clearInterval(I),I=null,T()):(X=!0,O=15,te()):te()},1e3)}}function P(){_e(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${He(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await L({phase:"midfield"})},5e3)}let A=!1;function U(){if(A)return;const g=p[o+"Team"].MIL||[],x=p[r+"Team"].MIL||[];function $(J){return J.reduce((W,oe)=>W+ne(oe,"MIL"),0)}function h(J){let W=0;for(let oe=0;oe<J.length-1;oe++){const se=Te(J[oe],J[oe+1]);se==="#00ff88"?W+=2:se==="#FFD700"&&(W+=1)}return W}const w=$(g)+h(g),C=$(x)+h(x),M=w>=C;function F(J,W,oe){return`<div id="duel-row-${oe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${W}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${J.map((se,ye)=>{const ge=ye<J.length-1?Te(se,J[ye+1]):null,xe=!ge||ge==="#ff3333"||ge==="#cc2222",he=ge==="#00ff88"?"+2":ge==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${oe}" data-idx="${ye}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${we({...se,note:ne(se,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ye<J.length-1?`<div class="duel-link duel-link-${oe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${xe?"rgba(255,255,255,0.12)":ge};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${xe?"none":`0 0 8px ${ge}`}">
              ${he?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ge}">${he}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${oe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${$(J)} + ${h(J)} liens = <b style="color:#fff">${$(J)+h(J)}</b>
        </div>
      </div>`}_e(e),e.innerHTML=`
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
      ${F(g,p[o+"Name"],"me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${F(x,p[r+"Name"],"opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const D=(J,W)=>e.querySelectorAll(J).forEach((oe,se)=>{setTimeout(()=>{oe.style.opacity="1",oe.style.transform="translateY(0) scale(1)"},W+se*90)});D(".duel-card-me",150),D(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((J,W)=>setTimeout(()=>{J.style.opacity="1"},W*70)),900),setTimeout(()=>{const J=e.querySelector("#pvp-vs");J&&(J.style.opacity="1",J.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(W=>W.style.opacity="1")},1250);function B(J,W,oe){const se=document.getElementById(J);if(!se)return;const ye=performance.now(),ge=xe=>{const he=Math.min(1,(xe-ye)/oe);se.textContent=Math.round(W*(1-Math.pow(1-he,3))),he<1?requestAnimationFrame(ge):se.textContent=W};requestAnimationFrame(ge)}setTimeout(()=>{B("pvp-score-me",w,800),B("pvp-score-opp",C,800)},1500);const N=p.p1Team.MIL||[],K=p.p2Team.MIL||[],Z=$(N)+h(N),le=$(K)+h(K),ue=Z>=le?"p1":"p2";let fe=p.boostValue;fe==null&&(fe=ci(),p.boostValue=fe,p.boostOwner=ue,p.boostUsed=!1),A=!0,setTimeout(()=>{const J=e.querySelector("#duel-row-"+(M?"me":"opp")),W=e.querySelector("#duel-row-"+(M?"opp":"me")),oe=document.getElementById("pvp-score-me"),se=document.getElementById("pvp-score-opp"),ye=M?oe:se,ge=M?se:oe;ye&&(ye.style.fontSize="80px",ye.style.color=M?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(M?",duelGlow 1.5s ease infinite .5s":"")),ge&&(ge.style.opacity="0.25"),setTimeout(()=>{J&&(J.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",J.style.zIndex="5"),setTimeout(()=>{const xe=document.getElementById("duel-shock");xe&&(xe.style.animation="shockwave .5s ease-out forwards"),W&&(W.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const xe=document.getElementById("pvp-duel-finale");if(!xe)return;const he=p.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+fe+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ve=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;xe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(M?"⚽ "+p[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+he+Ve,xe.style.transition="opacity .45s ease",xe.style.opacity="1",xe.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ae=ue;await L({phase:Ae+"-attack",attacker:Ae,round:1,boostValue:fe,boostUsed:!1,boostOwner:Ae})})},600)},700)},2800)}function R(g,x,$,h,w){const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const M=Array.from({length:10},(N,K)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${K%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][K%8]}</div>`).join(""),F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};C.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${M}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${h?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${x} – ${$}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(N=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${F[N.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${N.portrait?`<img src="${N.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(N.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(C);let D=!1;const B=()=>{D||(D=!0,C.remove(),setTimeout(()=>w(),50))};C.addEventListener("click",B),setTimeout(B,3500)}function Y(g,x){var Z,le,ue,fe;const h=(p["gcCardsFull_"+o]||[]).find(J=>J.id===g),w=h==null?void 0:h._gcDef,C={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[w==null?void 0:w.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",M={purple:"#b06ce0",light_blue:"#00d4ef"}[w==null?void 0:w.color]||"#b06ce0",F=(w==null?void 0:w.name)||x,D=(w==null?void 0:w.effect)||((Z=be[x])==null?void 0:Z.desc)||"Carte spéciale.",B=w!=null&&w.image_url?`/manager-wars/icons/${w.image_url}`:null,N=((le=be[x])==null?void 0:le.icon)||"⚡",K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",K.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${M};background:${C};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${M}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${F.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${F}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${B?`<img src="${B}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${N}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${D}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(K),(ue=K.querySelector("#pvp-gc-back"))==null||ue.addEventListener("click",()=>K.remove()),(fe=K.querySelector("#pvp-gc-use"))==null||fe.addEventListener("click",()=>{K.remove(),V(g,x)})}function ie(){var h;const g=p[o+"Team"],x=Object.entries(g).flatMap(([w,C])=>(C||[]).filter(M=>!M.used).map(M=>({...M,_line:w})));if(!x.length)return;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",$.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(w=>{const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",M=ne(w,w._line)+(w.boost||0);return`<div class="bp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${C};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild($),(h=$.querySelector("#bp-close"))==null||h.addEventListener("click",()=>$.remove()),$.querySelectorAll(".bp-item").forEach(w=>{w.addEventListener("click",async()=>{const C=w.dataset.cid,M=x.find(D=>D.cardId===C);if(!M)return;const F=(g[M._line]||[]).find(D=>D.cardId===C);F&&(F.boost=(F.boost||0)+p.boostValue),$.remove(),await L({[o+"Team"]:g,boostUsed:!0})})})}function re(g){var F;const x=p[o+"Subs"]||[],$=p["usedSubIds_"+o]||[],h=x.find(D=>D.cardId===g);if(!h)return;const w=p[o+"Team"],C=Object.entries(w).flatMap(([D,B])=>(B||[]).filter(N=>!N.used&&N.job===h.job).map(N=>({...N,_line:D})));if(!C.length){c("Aucun joueur compatible à remplacer","error");return}const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",M.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">Remplacer par ${h.firstname} ${h.name}</div>
        <button id="sp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${C.map(D=>{const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[D._line]||"#555",N=ne(D,D._line)+(D.boost||0);return`<div class="sp-item" data-cid="${D.cardId}" data-role="${D._line}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${B};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111">${D.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${N}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(M),(F=M.querySelector("#sp-close"))==null||F.addEventListener("click",()=>M.remove()),M.querySelectorAll(".sp-item").forEach(D=>{D.addEventListener("click",async()=>{const B=D.dataset.cid,N=D.dataset.role,K=(w[N]||[]).find(ue=>ue.cardId===B);if(!K)return;K.used=!0;const Z={...h,_line:N,position:K.position};(w[N]=w[N]||[]).push(Z);const le=[...$,g];M.remove(),await L({[o+"Team"]:w,["usedSubIds_"+o]:le})})})}function ee(){var x;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${He(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(x=g.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>g.remove())}function pe(){var $;const g=p.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(x),($=x.querySelector("#pvp-hist-close"))==null||$.addEventListener("click",()=>x.remove())}async function Q(){const g=p[o+"Team"],x=!["GK","DEF","MIL","ATT"].some(C=>(p[r+"Team"][C]||[]).some(M=>!M.used)),$=(p["selected_"+o]||[]).map(C=>{const M=(g[C._role]||[]).find(D=>D.cardId===C.cardId)||C,F=x&&["GK","DEF"].includes(C._role);return{...M,_line:C._role,...F?{note_a:Math.max(1,Number(M.note_a)||0)}:{}}});if(!$.length)return;const h=ht($,p.modifiers[o]||{});$.forEach(C=>{const M=(g[C._role]||[]).find(F=>F.cardId===C.cardId);M&&(M.used=!0)}),p["selected_"+o]=[],v();const w=[...p.log||[]];if(x){const C=(p[o+"Score"]||0)+1,M=$.map(K=>({name:K.name,note:ne(K,K._line||"ATT"),portrait:me(K),job:K.job}));w.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:M,homeTotal:h.total,aiTotal:0});const F=(p.round||0)+1,D=o==="p1"?"p2":"p1",B={...p,[o+"Team"]:g,[o+"Score"]:C},N=E(B);R(M,C,p[r+"Score"]||0,!0,async()=>{await L({[o+"Team"]:g,[o+"Score"]:C,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:N?"finished":D+"-attack",attacker:D,round:F,log:w}),N&&await j.from("matches").update({status:"finished"}).eq("id",i)});return}w.push({type:"duel",text:`⚔️ ${p[o+"Name"]} attaque (${h.total})`,players:$,total:h.total,side:o}),await L({[o+"Team"]:g,pendingAttack:{...h,players:$,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:r+"-defense",log:w})}async function S(){const g=p[o+"Team"],x=(p["selected_"+o]||[]).map(W=>({...(g[W._role]||[]).find(se=>se.cardId===W.cardId)||W,_line:W._role})),$=bt(x,p.modifiers[o]||{});x.forEach(W=>{const oe=(g[W._role]||[]).find(se=>se.cardId===W.cardId);oe&&(oe.used=!0)}),p["selected_"+o]=[],v();const h=vt(p.pendingAttack.total,$.total,p.modifiers[o]||{}),w=p.pendingAttack.side,C=h==="attack"||(h==null?void 0:h.goal),M=w==="p1"?"p2":"p1",F=(p.round||0)+1,D=(p.pendingAttack.players||[]).map(W=>({name:W.name,note:ne(W,W._line||"ATT"),portrait:me(W),job:W.job})),B=[...p.log||[]];B.push({type:"duel",isGoal:C,homeScored:C&&w===o,text:C?`⚽ BUT de ${p[w+"Name"]} ! (${p.pendingAttack.total} vs ${$.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${$.total})`,homePlayers:D,aiPlayers:x.map(W=>({name:W.name,note:ne(W,W._line||"DEF"),portrait:me(W),job:W.job})),homeTotal:p.pendingAttack.total,aiTotal:$.total});const N=C?(p[w+"Score"]||0)+1:p[w+"Score"]||0,K={...p,[o+"Team"]:g,[w+"Score"]:N},Z=E(K),le=K[M+"Team"],fe=!["GK","DEF","MIL","ATT"].some(W=>(le[W]||[]).some(oe=>!oe.used))||Z?"finished":M+"-attack",J=async()=>{await L({[o+"Team"]:g,[w+"Score"]:N,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:fe,attacker:M,round:F,log:B}),(fe==="finished"||Z)&&await j.from("matches").update({status:"finished"}).eq("id",i)};if(C){const W=w===o,oe=W?N:p[o+"Score"]||0,se=W?p[r+"Score"]||0:N;R(D,oe,se,W,J)}else await J()}function E(g){const x=["MIL","ATT","GK","DEF"].some(h=>(g.p1Team[h]||[]).some(w=>!w.used)),$=["MIL","ATT","GK","DEF"].some(h=>(g.p2Team[h]||[]).some(w=>!w.used));return!x&&!$}function G(){var w;const g=p[o+"Score"],x=p[r+"Score"],$=g>x,h=g===x;_e(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${$?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${$?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(w=document.getElementById("pvp-home"))==null||w.addEventListener("click",()=>{try{j.removeChannel(b)}catch{}ve(e),l("home")})}v()}const Lo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Mo(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await kt(e,t)}async function kt(e,t){const{state:i,toast:n}=t,{data:d}=await j.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  `;function c(o){const r=document.getElementById("mkt-content"),u=o==="buy"?a:l;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=o==="mine"?[...u].sort((m,k)=>m.status!==k.status?m.status==="active"?-1:1:new Date(k.listed_at)-new Date(m.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(m=>{var z,b,L,T;const k=(z=m.card)==null?void 0:z.player;if(!k)return"";const p=k.job==="GK"?k.note_g:k.job==="DEF"?k.note_d:k.job==="MIL"?k.note_m:k.note_a,y=Lo[k.rarity],I=(i.profile.credits||0)>=m.price,_=m.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${jo(k.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${y};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${k.firstname} ${k.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${k.country_code} · ${((b=k.clubs)==null?void 0:b.encoded_name)||"—"} · ${k.rarity} · ${k.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((L=m.seller)==null?void 0:L.pseudo)||"—"}</div>`:_?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((T=m.buyer)==null?void 0:T.pseudo)||"—"} · ${m.sold_at?new Date(m.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(m.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${m.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${m.id}" ${I?"":"disabled"} style="margin-top:4px">${I?"Acheter":"Trop cher"}</button>`:_?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${m.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(m=>{m.addEventListener("click",()=>zo(m.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(m=>{m.addEventListener("click",()=>So(m.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function zo(e,t,i,n){var u;const{state:d,toast:s}=n,a=t.find(f=>f.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(u=a.card)==null?void 0:u.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:f,error:m}=await j.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(m)throw new Error(m.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");d.profile.credits=c-l;const k=document.querySelector("[data-credits]")||document.querySelector(".credits-display");k&&(k.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),kt(i,n)}catch(f){s("❌ "+f.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function So(e,t,i){const{toast:n}=i,{data:d}=await j.from("market_listings").select("card_id").eq("id",e).single();await j.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),kt(t,i)}function jo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Co(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await j.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function Bo(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===d.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const f=r.winner_id===d.id,m=r.home_score===r.away_score&&r.status==="finished",k=r.status!=="finished"?"…":m?"N":f?"V":"D",p=r.status!=="finished"||m?"#888":f?"#1A6B3C":"#c0392b";let y=a[r.mode]||r.mode;r.away_id===null&&!y.startsWith("IA")&&(y="IA");const _=r.home_id===d.id?r.away:r.home;let z;r.away_id===null?z=y:_?z=`${_.club_name||_.pseudo} (${_.pseudo})`:z="Adversaire";let b="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(b=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const L=new Date(r.created_at),T=L.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+L.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),q=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${z}${b}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y} · ${T}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${q}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${k}</span>
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
  </div>`}const ae={user:null,profile:null,page:"home",params:{}};function Je(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Fo(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function mt(){document.getElementById("modal-overlay").classList.add("hidden")}async function Qe(){if(!ae.user)return;const{data:e}=await j.from("users").select("*").eq("id",ae.user.id).single();e&&(ae.profile=e)}const Et="mw_theme";function rt(){return localStorage.getItem(Et)||"light"}function Do(e){var t;localStorage.setItem(Et,e),xt(e),(t=ae.profile)!=null&&t.id&&j.from("users").update({theme:e}).eq("id",ae.profile.id).then(()=>{})}function xt(e){document.documentElement.setAttribute("data-theme",e)}function Ze(e,t={}){ae.page=e,ae.params=t,xi()}async function xi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===ae.page)});const t=document.getElementById("nav-credits");t&&ae.profile&&(t.textContent=`💰 ${(ae.profile.credits||0).toLocaleString("fr")}`);const i={state:ae,navigate:Ze,toast:Je,openModal:Fo,closeModal:mt,refreshProfile:Qe};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ae.page){case"home":await Ot(e,i);break;case"collection":await zi(e,i);break;case"decks":await ct(e,i);break;case"boosters":await Vi(e,i);break;case"match":{(ae.params&&ae.params.matchMode||"vs_ai_easy")==="random"?await To(e,i):await co(e,i);break}case"market":await Mo(e,i);break;case"rankings":await Co(e,i);break;case"matches":await Bo(e,i);break;default:await Ot(e,i)}}function Go(){const e=document.getElementById("app"),t=ae.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),Ze(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ze("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ze("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=rt()==="dark"?"light":"dark";Do(d),Qt(d)}),Qt(rt())}function Qt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function qo(){xt(rt()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&mt()}),document.getElementById("modal-close").addEventListener("click",mt);const{data:{session:e}}=await j.auth.getSession();if(!e){ei(),Rt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Je});return}ae.user=e.user,await Qe(),ei();try{const{data:t}=await j.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),_i(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!ae.profile){ki(document.getElementById("app"),{state:ae,navigate:async()=>{await Qe(),Zt()},toast:Je,refreshProfile:Qe});return}ae.profile.theme&&ae.profile.theme!==rt()&&(localStorage.setItem(Et,ae.profile.theme),xt(ae.profile.theme)),Zt(),j.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(ae.user=null,ae.profile=null,document.getElementById("app").innerHTML="",Rt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Je}))})}function Ro(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function st(){const e=document.getElementById("app");e&&(e.style.height=Ro()+"px")}window.addEventListener("resize",st);window.addEventListener("orientationchange",()=>setTimeout(st,150));window.visualViewport&&window.visualViewport.addEventListener("resize",st);function Zt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",st(),Go(),xi()}function ei(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function yi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}qo().catch(e=>{console.error("Échec du démarrage:",e),yi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&yi("Le serveur met trop de temps à répondre.")},12e3);
