import{s as C,F as kt,h as et,j as ai,l as Ce,i as Ti,k as Ai,b as Ii}from"./formation-links-CEzN0rcz.js";function Ut(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!r||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await C.auth.signInWithPassword({email:r,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!r||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await C.auth.signUp({email:r,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function Li(e,{state:t,navigate:i,toast:r,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var E;const o=document.getElementById("logo-preview"),n=document.getElementById("logo-initials"),u=((E=document.getElementById("setup-club"))==null?void 0:E.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),n&&(n.textContent=g,n.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(n=>n.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("step1-error");if(n.textContent="",o.length<3){n.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await C.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){n.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),n=document.getElementById("step2-error");if(n.textContent="",o.length<2){n.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await C.from("users").select("id").eq("club_name",o).maybeSingle();if(u){n.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await C.from("users").insert({id:t.user.id,pseudo:o,club_name:n,club_color1:s,club_color2:a,credits:1e4});if(g)throw g;await Mi(t.user.id),await d(),r(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Mi(e){const{data:t}=await C.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,r=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&r.length>0){const n=r[Math.floor(Math.random()*r.length)];o.push(n);const u=Kt([...d]).slice(0,3);o.push(...u)}else o=Kt([...i]).slice(0,4);o.forEach(n=>{s.push({owner_id:e,player_id:n.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await C.from("cards").insert(s),await C.from("users").update({first_booster_opened:!0}).eq("id",e)}function Kt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const zi="2026.06.24-2318";async function Vt(e,{state:t,navigate:i,toast:r}){var s,a;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${zi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){Si(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await C.auth.signOut(),window.location.reload()}))}function Si(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const r=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",r),i.addEventListener("click",d=>{d.target===i&&r()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{r(),e("match",{matchMode:d.dataset.mode})})})}const Ee={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function le(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Yt=["ATT","MIL","DEF","GK"];function si(e){let t=0;const i=e.length;for(let r=0;r<i;r++)for(let d=r+1;d<i;d++){const s=e[r],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Yt.indexOf(s._line),n=Yt.indexOf(a._line),u=Math.abs(o-n)===1;(s._line===a._line&&c||l&&u)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function Et(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),r=si(e);let d=i+r;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:r,total:Math.max(0,d)}}function Tt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),r=si(e);let d=i+r;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:r,total:Math.max(0,d)}}function At(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function li(e,t,i="easy"){const r=e.filter(a=>!a.used);if(!r.length)return[];const d=[...r].sort((a,l)=>{const c=t==="attack"?le(a,"ATT"):a._line==="GK"?le(a,"GK"):le(a,"DEF");return(t==="attack"?le(l,"ATT"):l._line==="GK"?le(l,"GK"):le(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function ji(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const di={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},st={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},tt=["GK","DEF","MIL","ATT"],Ci=["Tous","GK","DEF","MIL","ATT"],Bi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},It={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ci(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Je(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function xt(e,t=""){var u,f;const i=e.player;if(!i)return"";const r=i.job||"ATT",d=st[r],s=di[i.rarity]||"#ccc",a=Je(i,r),l=i.job2?Je(i,i.job2):null,c=i.job2?st[i.job2]:null,o=ci(i),n=It[i.country_code]||i.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Wt(e){const t=e.job||"ATT",i=Je(e,t),r=It[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${r}</div>
      </div>
    </div>
  </div>`}async function Fi(e,t){const{state:i,navigate:r,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await C.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await C.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(L=>L.card_type==="player"&&L.player),n=(l||[]).filter(L=>L.card_type==="game_changer"),u=(l||[]).filter(L=>L.card_type==="formation"),{data:f}=await C.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(f||[]).forEach(L=>{g[L.name]=L});const E=Object.keys(kt),p=Object.keys(Ee),y={};o.forEach(L=>{const k=L.player.id;y[k]=(y[k]||0)+1}),new Set(Object.keys(y).map(L=>String(L)));const A=new Set(u.map(L=>L.formation)),_=new Set(n.map(L=>L.gc_type));let M="player",v="Tous",B="",$=!1;function D(){return[...o].sort((L,k)=>{const G=tt.indexOf(L.player.job),N=tt.indexOf(k.player.job);return G!==N?G-N:(L.player.surname_encoded||"").localeCompare(k.player.surname_encoded||"")})}function U(){return[...c||[]].sort((L,k)=>{const G=tt.indexOf(L.job),N=tt.indexOf(k.job);return G!==N?G-N:(L.surname_encoded||"").localeCompare(k.surname_encoded||"")})}function Y(){return D().filter(L=>{const k=L.player,G=v==="Tous"||k.job===v,N=!B||`${k.firstname} ${k.surname_encoded}`.toLowerCase().includes(B);return G&&N})}function J(){return U().filter(L=>{const k=v==="Tous"||L.job===v,G=!B||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(B);return k&&G})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="player"?"var(--green)":"transparent"};
        color:${M==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="formation"?"var(--green)":"transparent"};
        color:${M==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="gc"?"var(--green)":"transparent"};
        color:${M==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function w(){const L=document.getElementById("col-filters");L&&(M==="player"?(L.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${B}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Ci.map(k=>`
            <button class="filter-btn" data-job="${k}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${k===v?"var(--green)":"var(--gray-200)"};
                background:${k===v?"var(--green)":"#fff"};
                color:${k===v?"#fff":"var(--gray-600)"}">
              ${k}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${$?"var(--yellow)":"var(--gray-200)"};
              background:${$?"var(--yellow)":"#fff"};
              color:${$?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${$?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",k=>{B=k.target.value.toLowerCase(),b()}),e.querySelectorAll(".filter-btn").forEach(k=>{k.addEventListener("click",()=>{v=k.dataset.job,w(),b()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{$=!$,w(),b()})):(L.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${$?"var(--yellow)":"var(--gray-200)"};
              background:${$?"var(--yellow)":"#fff"};
              color:${$?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${$?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{$=!$,w(),b()})))}function b(){const L=document.getElementById("col-grid");L&&(M==="player"?ee(L):M==="formation"?me(L):be(L))}function P(L,k,G,N,V){V=V||"#7a28b8";const x=document.getElementById("col-grid"),m=document.getElementById("col-big");if(!x||!m)return;var I=0;function j(){m.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+k(L[I])+"</div>";var h=m.querySelector("[data-card-id],[data-form-id],[data-gc-id]");h&&h.addEventListener("click",function(){N(L[I])}),requestAnimationFrame(function(){var z=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!z||!m)){var T=m.clientHeight-8,F=m.clientWidth-24,q=z.offsetHeight,S=z.offsetWidth;if(q>0&&S>0&&T>40){var O=Math.min(T/q,F/S,1);z.style.transform="scale("+O.toFixed(3)+")",z.style.transformOrigin="top center"}}}),x.innerHTML=L.map(function(z,T){return'<div class="col-mini-item" data-idx="'+T+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(T===I?V:"transparent")+';transition:border-color .15s;overflow:hidden">'+G(z,T===I)+"</div>"}).join(""),x.querySelectorAll(".col-mini-item").forEach(function(z){z.addEventListener("click",function(){I=Number(z.dataset.idx),j(),z.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}j()}function R(L){var k=.54,G=Math.round(140*k),N=Math.round(310*k),V;if(!L||L._fake){var x=L?L.player:null;if(!x)return"";V=Wt(x)}else V=xt(L,"");return'<div style="width:'+G+"px;height:"+N+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+k+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+V+"</div></div>"}function W(L,k,G){k=k||100,G=G||140;var N=et[L]||{},V={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},x=Math.max(3,Math.round(k*.06)),m=Object.entries(N).map(function(j){var h=j[0],z=j[1],T=h.replace(/\d+$/,""),F=V[T]||"#888",q=Math.round(z.x*k),S=Math.round(z.y*G);return'<circle cx="'+q+'" cy="'+S+'" r="'+x+'" fill="'+F+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),I=Math.max(1,Math.round(k/50));return'<svg viewBox="0 0 '+k+" "+G+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+k+'" height="'+G+'" fill="#1A6B3C"/><rect x="'+Math.round(k*.2)+'" y="'+Math.round(G*.02)+'" width="'+Math.round(k*.6)+'" height="'+Math.round(G*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+I+'"/><line x1="0" y1="'+Math.round(G*.5)+'" x2="'+k+'" y2="'+Math.round(G*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+I+'"/><ellipse cx="'+Math.round(k*.5)+'" cy="'+Math.round(G*.5)+'" rx="'+Math.round(k*.18)+'" ry="'+Math.round(G*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+I+'"/><rect x="'+Math.round(k*.2)+'" y="'+Math.round(G*.82)+'" width="'+Math.round(k*.6)+'" height="'+Math.round(G*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+I+'"/>'+m+"</svg>"}function ie(L,k,G){var N=G>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+G+"</div>":"",V=k?'data-form-id="'+k.id+'"':"",x=L.length>7?14:L.length>5?16:19,m=!!k;return"<div "+V+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(m?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(m?"":"filter:grayscale(1);opacity:0.5")+'">'+N+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(m?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+x+"px;font-weight:900;color:"+(m?"#1A6B3C":"#aaa")+';line-height:1">'+L+'</div></div><div style="flex:1;overflow:hidden;background:'+(m?"#1A6B3C":"#ccc")+'">'+W(L,140,220)+"</div></div>"}function ae(L,k){var G=.54,N=Math.round(140*G),V=Math.round(305*G),x=Math.round(V*.22),m=V-x,I=L.length>7?5:7,j=W(L,N,m),h=k?"1.5px solid #2a7a40":"1px solid #ddd",z=k?"":"filter:grayscale(1);opacity:0.45;",T=k?"#1A6B3C":"#bbb",F="#fff";return'<div style="width:'+N+"px;height:"+V+"px;border-radius:6px;border:"+h+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+z+'"><div style="height:'+x+"px;background:"+T+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+I+"px;font-weight:900;color:"+F+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(N-4)+'px">'+L+'</span></div><div style="height:'+m+'px;overflow:hidden;flex-shrink:0">'+j+"</div></div>"}function ee(L){if($){const k=J();if(!k.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const G=k.map(N=>o.find(V=>V.player.id===N.id)||{_fake:!0,player:N,id:"fake-"+N.id});P(G,N=>N._fake?Wt(N.player):xt(N,""),N=>N._fake?R({player:N.player,id:"x",_fake:!0}):R(N),N=>{N._fake||Xt(N,o,y,t)},"#1A6B3C")}else{const k=Y();if(!k.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const G={},N=[];k.forEach(V=>{G[V.player.id]||(G[V.player.id]=!0,N.push(V))}),P(N,V=>{const x=y[V.player.id]||1,m=x>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${x}</div>`:"",j=o.filter(h=>h.player.id===V.player.id&&h.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return xt(V,m+j)},V=>R(V),V=>Xt(V,o,y,t),"#1A6B3C")}}function me(L){const k=$?E:[...A];if(!k.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const G=k.map(N=>({formation:N,card:u.find(V=>V.formation===N)||null,owned:A.has(N)}));P(G,({formation:N,card:V,owned:x})=>ie(N,x?V:null,x?u.filter(m=>m.formation===N).length:0),({formation:N,owned:V})=>ae(N,V),({card:N,owned:V})=>{V&&N&&Gi(N,u,t,s)},"#1A6B3C")}function be(L){const k=Object.keys(g),G=$?k.length?k:p:[..._];if(!G.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const N=G.map(V=>({type:V,gc:Ee[V]||{icon:"⚡",desc:""},def:g[V]||null,owned:_.has(V),card:n.find(x=>x.gc_type===V)||null}));P(N,({type:V,gc:x,def:m,owned:I,card:j})=>{const h=I?n.filter(oe=>oe.gc_type===V).length:0,z=h>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${h}</div>`:"",T=(m==null?void 0:m.gc_type)==="ultra_game_changer",F={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},q={purple:"#b06ce0",light_blue:"#00d4ef"},S=F[m==null?void 0:m.color]||F.purple,O=q[m==null?void 0:m.color]||q.purple,K=(m==null?void 0:m.effect)||x.desc||"",te=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null;return I&&j?`<div data-gc-id="${j.id}" data-gc-type="${V}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${O};background:${S};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${O}66;cursor:pointer">
          ${z}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${V.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${V}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${T?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${te?`<img src="${te}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${x.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${K.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${V}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${x.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:V,gc:x,def:m,owned:I})=>I?(()=>{const j=Math.round(75.60000000000001),h=Math.round(310*.54),z=Math.round(h*.65),T=Math.round(h*.18),F={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},q={purple:"#9b59b6",light_blue:"#00bcd4"},S=F[m==null?void 0:m.color]||F.purple,O=q[m==null?void 0:m.color]||q.purple,K=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null;return`<div style="width:${j}px;height:${h}px;border-radius:8px;background:${S};border:1px solid ${O};display:flex;flex-direction:column;overflow:hidden"><div style="height:${T}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${j-6}px">${V}</span></div><div style="height:${z}px;display:flex;align-items:center;justify-content:center">${K?`<img src="${K}" style="max-width:${j-8}px;max-height:${z-4}px;object-fit:contain">`:`<span style="font-size:24px">${x.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((m==null?void 0:m.effect)||x.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const j=Math.round(75.60000000000001),h=Math.round(310*.54);return`<div style="width:${j}px;height:${h}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${x.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${V}</span></div>`})(),({type:V,owned:x,def:m})=>{x&&Di(V,m,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(L=>{L.addEventListener("click",()=>{M=L.dataset.tab,v="Tous",B="",$=!1,e.querySelectorAll(".col-tab-btn").forEach(k=>{const G=k.dataset.tab===M;k.style.borderBottomColor=G?"var(--green)":"transparent",k.style.color=G?"var(--green)":"var(--gray-600)"}),w(),b()})}),w(),b()}function Di(e,t,i){const r=Ee[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,n=(t==null?void 0:t.effect)||r.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ye=1e3;function Gi(e,t,i,r){var p,y,A;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,n={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const _=et[o]||{},M=kt[o]||[],v=290,B=360,$=20;function D(Y){const J=_[Y];return J?{x:J.x*v,y:J.y*B}:null}let U=`<svg width="${v}" height="${B}" viewBox="0 0 ${v} ${B}" xmlns="http://www.w3.org/2000/svg">`;for(const[Y,J]of M){const w=D(Y),b=D(J);!w||!b||(U+=`<line x1="${w.x}" y1="${w.y}" x2="${b.x}" y2="${b.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const Y of Object.keys(_)){const J=D(Y);if(!J)continue;const w=Y.replace(/\d+/,""),b=n[w]||"#555";U+=`<circle cx="${J.x}" cy="${J.y}" r="${$}" fill="${b}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,U+=`<text x="${J.x}" y="${J.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${w}</text>`}return U+="</svg>",U}const f=t.filter(_=>_.formation===o),g=f.length,E=!e.is_for_sale;r(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Ye.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ye}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Ye.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=f.find(v=>!v.is_for_sale)||f[0];if(!_){s("Aucune carte à vendre","error");return}const{error:M}=await C.from("cards").delete().eq("id",_.id);if(M){s(M.message,"error");return}await C.from("users").update({credits:(d.profile.credits||0)+Ye}).eq("id",d.profile.id),await c(),s(`+${Ye.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(y=document.getElementById("market-sell-form-btn"))==null||y.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){s("Prix invalide","error");return}await C.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",e.id),await C.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:_}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(A=document.getElementById("cancel-sell-form-btn"))==null||A.addEventListener("click",async()=>{await C.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await C.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function Xt(e,t,i,r){var U,Y,J,w,b,P;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=r,n=e.player,u=t.filter(R=>R.player.id===n.id),f=u.length,g=Bi[n.rarity]||1e3,E=n.rarity!=="legende",p=ci(n),y=Je(n,n.job),A=n.job2?Je(n,n.job2):null,_=st[n.job]||"#1A6B3C",M=n.job2?st[n.job2]:null,v=di[n.rarity]||"#ccc",B=It[n.country_code]||n.country_code||"",{data:$}=await C.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",n.id).order("transferred_at",{ascending:!0}),D=$&&$.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${$.map(R=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${R.club_name} <span style="color:var(--gray-600)">(${R.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${R.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${n.firstname} ${n.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${v};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${_}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${_}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${y}</text>
            </svg>
            ${A!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${M}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${A}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${B}</div>
            ${(U=n.clubs)!=null&&U.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Y=n.clubs)==null?void 0:Y.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${v}">${n.rarity.toUpperCase()}</div>
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
    ${E&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(J=document.getElementById("close-detail"))==null||J.addEventListener("click",l),(w=document.getElementById("direct-sell-btn"))==null||w.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${n.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const R=u.find(ie=>!ie.is_for_sale)||u[0];if(!R){s("Aucune carte à vendre","error");return}const{error:W}=await C.from("cards").delete().eq("id",R.id);if(W){s(W.message,"error");return}await C.from("users").update({credits:(d.profile.credits||0)+g}).eq("id",d.profile.id),await o(),s(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(b=document.getElementById("market-sell-btn"))==null||b.addEventListener("click",async()=>{const R=parseInt(document.getElementById("sell-price").value);if(!R||R<1){s("Prix invalide","error");return}await C.from("cards").update({is_for_sale:!0,sale_price:R}).eq("id",e.id),await C.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:R}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(P=document.getElementById("cancel-sell-btn"))==null||P.addEventListener("click",async()=>{await C.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await C.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const lt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Se={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ft(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ui(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function qi(e,t=44,i=58){var g;const r=e?ft(e):null,d=e?ui(e):null,s=pi(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=Se[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,n=Math.round(i*.19),u=Math.round(i*.25),f=i-n-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function yt(e,t){const{state:i,navigate:r,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await C.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await C.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Jt(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Jt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await C.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),yt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await C.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await C.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),yt(e,t)})})}async function Jt(e,t,i){const{state:r,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await C.from("decks").select("*").eq("id",e).single(),{data:a}=await C.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),l=(a||[]).filter(g=>g.card_type==="player"&&g.player),c=(a||[]).filter(g=>g.card_type==="formation"),o=c.map(g=>g.formation).filter(Boolean),{data:n}=await C.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const f={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(n||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),Pe(t,f,i)}function Pe(e,t,i){var c;const{navigate:r}=i;lt[t.formation];const d=Qt(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(lt),l=t.subs.map(o=>t.playerCards.find(n=>n.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${l.map(o=>{const n=o.player;return`<div style="position:relative;flex-shrink:0">
            ${qi(n,44,58)}
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
  </div>`,Ri(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const n=Qt(t.formation),u={};n.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,Pe(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Pi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(n=>n!==o.dataset.removeSub),Pe(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Oi(t,e,i)})}function Ri(e,t,i,r){const d=e.querySelector("#deck-field");if(!d)return;const s=et[t.formation]||{},a=ai(t.formation)||[],l={};for(const A of i){const _=t.slots[A],M=_?t.playerCards.find(v=>v.id===_):null;l[A]=M?M.player:null}const c=300,o=300,n=48,u=64,f=13,g=16,E=38;function p(A){const _=s[A];return _?{x:_.x*c,y:_.y*o}:null}let y="";for(const[A,_]of a){const M=p(A),v=p(_);if(!M||!v)continue;const B=l[A]?{...l[A],club_id:l[A].club_id,country_code:l[A].country_code,rarity:l[A].rarity}:null,$=l[_]?{...l[_],club_id:l[_].club_id,country_code:l[_].country_code,rarity:l[_].rarity}:null,D=Ce(B,$);D==="#ff3333"||D==="#cc2222"?y+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(y+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,y+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const A of i){const _=p(A);if(!_)continue;const M=l[A],v=A.replace(/\d+/,""),B=Se[v]||"#555",$=(_.x-n/2).toFixed(1),D=(_.y-u/2).toFixed(1),U={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[M==null?void 0:M.rarity]||"#aaa";if(M){const Y=ft(M),J=ui(M),w=pi(M.country_code),b=Number(v==="GK"?M.note_g:v==="DEF"?M.note_d:v==="MIL"?M.note_m:M.note_a)||0,P=u-f-g;y+=`<defs><clipPath id="dcp-${A}"><rect x="${$}" y="${(_.y-u/2+f).toFixed(1)}" width="${n}" height="${P}"/></clipPath></defs>`,y+=`<rect x="${$}" y="${D}" width="${n}" height="${u}" rx="5" fill="${B}"/>`,Y&&(y+=`<image href="${Y}" x="${$}" y="${(_.y-u/2+f).toFixed(1)}" width="${n}" height="${P}" clip-path="url(#dcp-${A})" preserveAspectRatio="xMidYMin slice"/>`),y+=`<rect x="${$}" y="${D}" width="${n}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,y+=`<text x="${_.x.toFixed(1)}" y="${(_.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(M.surname_encoded||"").slice(0,9)}</text>`;const R=(_.y+u/2-g).toFixed(1);y+=`<rect x="${$}" y="${R}" width="${n}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,w&&(y+=`<image href="${w}" x="${(_.x-21).toFixed(1)}" y="${(_.y+u/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),y+=`<text x="${_.x.toFixed(1)}" y="${(_.y+u/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${b}</text>`,J&&(y+=`<image href="${J}" x="${(_.x+n/2-14).toFixed(1)}" y="${(_.y+u/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),y+=`<rect x="${$}" y="${D}" width="${n}" height="${u}" rx="5" fill="none" stroke="${U}" stroke-width="2"/>`}else y+=`<rect x="${$}" y="${D}" width="${n}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,y+=`<text x="${_.x.toFixed(1)}" y="${_.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,y+=`<text x="${_.x.toFixed(1)}" y="${(_.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${v}</text>`;y+=`<rect x="${$}" y="${D}" width="${n}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${A}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-E} ${-E} ${c+E*2} ${o+E*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${y}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(A=>{A.addEventListener("click",()=>Ni(A.dataset.pos,t,e,r))})}function Ni(e,t,i,r){var f,g,E;const{openModal:d,closeModal:s}=r,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(p=>p.id===l):null;(f=c==null?void 0:c.player)==null||f.id;const o=new Set;Object.entries(t.slots).forEach(([p,y])=>{var _;if(p===e||!y)return;const A=t.playerCards.find(M=>M.id===y);(_=A==null?void 0:A.player)!=null&&_.id&&o.add(A.player.id)}),t.subs.forEach(p=>{var A;const y=t.playerCards.find(_=>_.id===p);(A=y==null?void 0:y.player)!=null&&A.id&&o.add(y.player.id)});const n=new Set,u=t.playerCards.filter(p=>{const y=p.player;return!(y.job===a||y.job2===a)||o.has(y.id)||n.has(y.id)?!1:(n.add(y.id),!0)});u.sort((p,y)=>{const A=a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a;return(a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a)-A}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var v,B;const y=p.player,A=a==="GK"?y.note_g:a==="DEF"?y.note_d:a==="MIL"?y.note_m:y.note_a,_=ft(y),M={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[y.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Se[a]}">
            ${_?`<img src="${_}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Se[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${y.firstname} ${y.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${y.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${y.country_code}">
              ${(v=y.clubs)!=null&&v.logo_url?`<img src="${y.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=y.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${y.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Se[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${M};flex-shrink:0">
            ${A}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",s),(E=document.getElementById("remove-player"))==null||E.addEventListener("click",()=>{delete t.slots[e],s(),Pe(i,t,r)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),Pe(i,t,r)})})}function Oi(e,t,i){var c;const{openModal:r,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const n=e.playerCards.find(f=>f.id===o);(u=n==null?void 0:n.player)!=null&&u.id&&s.add(n.player.id)}),e.subs.forEach(o=>{var u;const n=e.playerCards.find(f=>f.id===o);(u=n==null?void 0:n.player)!=null&&u.id&&s.add(n.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var n,u,f;return s.has((n=o.player)==null?void 0:n.id)||a.has((u=o.player)==null?void 0:u.id)?!1:(a.add((f=o.player)==null?void 0:f.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var g;const n=o.player,u=ft(n),f=n.job==="GK"?n.note_g:n.job==="DEF"?n.note_d:n.job==="MIL"?n.note_m:n.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Se[n.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${n.firstname} ${n.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${n.job} · ${n.country_code} · ${((g=n.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Se[n.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),Pe(t,e,i)})})}async function Pi(e,t){const{state:i,toast:r,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await C.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await C.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],n)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:n})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await C.from("deck_cards").insert(l);if(c){r(c.message,"error");return}}r("Deck enregistré ✅","success"),d("decks")}function Qt(e){const t=lt[e]||lt["4-4-2"],i=["GK1"];for(let r=1;r<=t.DEF;r++)i.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)i.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)i.push(`ATT${r}`);return i}async function Hi(){const{data:e}=await C.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await C.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(r=>r.booster_id===i.id)}))}function Ui(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,d)=>r+Number(d.percentage),0);let i=Math.random()*t;for(const r of e)if(i-=Number(r.percentage),i<=0)return r;return e[e.length-1]}const fi=()=>Object.keys(et),Ki=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ht={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Vi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Zt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Yi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Wi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ei(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Xi(e){var n,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",r=Zt[i],d=Yi[t.rarity]||"#ccc",s=ei(t,i),a=t.job2?ei(t,t.job2):null,l=t.job2?Zt[t.job2]:null,c=Vi(t),o=Wi[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${d};cursor:pointer;flex-shrink:0;position:relative">
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
        ${(n=t.clubs)!=null&&n.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ji(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:d[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Qi(e,{state:t,navigate:i,toast:r}){var a;const d=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Hi()).map(Ji)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Ki.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Zi(c,{state:t,toast:r,navigate:i,container:e})}catch(o){r(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(n=>n.id===l.dataset.boosterId);so(o)})})}async function Zi(e,{state:t,toast:i,navigate:r,container:d}){var n;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await po()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await C.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let c=[];if((n=e.rates)!=null&&n.length)c=await ti(t.profile,e);else{const u=e.type||"player";u==="player"?c=await io(t.profile,e.cardCount,e.cost):u==="game_changer"?c=await oo(t.profile,e.cardCount,e.cost):u==="formation"?c=await no(t.profile,e.cost):c=await ti(t.profile,e)}c.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:o}=await C.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),ro(c,e,r)}function eo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function qe(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function to(e,t){let i;switch(t){case"legende":i=e.filter(r=>r.rarity==="legende"),i.length||(i=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),i.length||(i=e.filter(r=>qe(r)>=6));break;case"special":i=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),i.length||(i=e.filter(r=>qe(r)>=6));break;case"normal_high":i=e.filter(r=>r.rarity==="normal"&&qe(r)>=6),i.length||(i=e.filter(r=>qe(r)>=6));break;default:i=e.filter(r=>r.rarity==="normal"&&qe(r)>=1&&qe(r)<=5),i.length||(i=e.filter(r=>r.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ti(e,t){if(t.cost>0){const{error:r}=await C.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(r)throw r}const i=[];for(let r=0;r<(t.cardCount||5);r++){const d=Ui(t.rates);if(d){if(d.card_type==="player"){const s=f=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[f]||f,a=d.rarity?s(d.rarity):null;let l=C.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(f=>{const g=Math.max(Number(f.note_g)||0,Number(f.note_d)||0,Number(f.note_m)||0,Number(f.note_a)||0);return(!d.note_min||g>=d.note_min)&&(!d.note_max||g<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const n=o[Math.floor(Math.random()*o.length)],{data:u}=await C.from("cards").insert({owner_id:e.id,player_id:n.id,card_type:"player"}).select().single();u&&(i.push({...u,player:n}),C.rpc("record_transfer",{p_card_id:u.id,p_player_id:n.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await C.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await C.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=fi(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await C.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function io(e,t,i){if(i>0){const{error:o}=await C.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:r}=await C.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=r.filter(o=>o.job==="GK"),s=r.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const n=o===0&&a?d:o===0?s:r,u=eo(),f=to(n,u);f&&l.push(f)}a&&await C.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await C.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,n)=>{C.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[n].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,n)=>({...c[n],player:o}))}async function oo(e,t,i){const{error:r}=await C.from("users").update({credits:e.credits-i}).eq("id",e.id);if(r)throw r;const{data:d}=await C.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(ht).map(n=>({name:n,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const n=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:n.name,gc_definition_id:n.id||null}}),{data:l,error:c}=await C.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(n=>{const u=d==null?void 0:d.find(f=>f.name===n.gc_type||f.id===n.gc_definition_id);return{...n,_gcDef:u||null}})}async function no(e,t){const{error:i}=await C.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const r=fi(),d=r[Math.floor(Math.random()*r.length)],{data:s,error:a}=await C.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function ro(e,t,i){var w;if(!e||e.length===0){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",b.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(b),(w=b.querySelector("#anim-close-err"))==null||w.addEventListener("click",()=>b.remove());return}const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=b=>b.touches&&b.touches[0]?b.touches[0].clientX:b.clientX;function o(b){d||(l=!0,a.style.opacity="1",n(b))}function n(b){if(!l||d)return;const P=s.getBoundingClientRect(),R=c(b)-P.left,W=Math.max(0,Math.min(1,R/P.width));a.style.width=W*P.width+"px",W>=.82&&f()}function u(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function f(){var P;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(P=document.getElementById("cut-flash"))==null||P.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const b=document.getElementById("cut-hint");b&&(b.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",n),window.addEventListener("pointerup",u),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",n,{passive:!0}),window.addEventListener("touchend",u);let g=0,E=!1;const p=new Set;function y(b){g=b,document.getElementById("reveal-phase").style.display="flex",A(),_(b,0),D()}function A(){const b=document.getElementById("card-dots");b&&(b.innerHTML=e.map((P,R)=>`<div class="card-dot" data-i="${R}" style="width:8px;height:8px;border-radius:50%;background:${R===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),b.querySelectorAll(".card-dot").forEach(P=>P.addEventListener("click",()=>v(parseInt(P.dataset.i)))))}function _(b,P){var L;const R=e[b],W=document.getElementById("card-counter"),ie=document.getElementById("card-track");W&&(W.textContent=`Carte ${b+1} / ${e.length}`);const ae=R.card_type==="player"&&((L=R.player)==null?void 0:L.rarity)==="legende",ee=!p.has(b);p.add(b);let me=0;if(R.card_type==="player"&&R.player){const k=R.player,G=k.job||"ATT";me=Number(G==="GK"?k.note_g:G==="DEF"?k.note_d:G==="MIL"?k.note_m:k.note_a)||0}const be=k=>{ie.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${ae?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${ao(R)}</div>
          ${R.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const G=document.getElementById("current-card-wrap");P!==0?(G.style.transition="none",G.style.transform=`translateX(${P>0?100:-100}%)`,requestAnimationFrame(()=>{G.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",G.style.transform="translateX(0)"})):G.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),k||ae?Y():J(),A()};ee&&me>6&&R.card_type==="player"&&R.player?M(R,()=>be(!0)):be(!1)}function M(b,P){var be;E=!0;const R=b.player,W=`https://flagsapi.com/${R.country_code}/flat/64.png`,ie=(be=R.clubs)==null?void 0:be.logo_url,ae=document.getElementById("walkout-overlay"),ee=document.getElementById("walkout-stage");if(!ae||!ee){E=!1,P();return}ae.style.display="flex";const me=()=>{const L=ee.firstElementChild;L&&(L.classList.remove("wo-in"),L.classList.add("wo-out"))};ee.innerHTML=`<img class="wo-in" src="${W}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(me,2e3),setTimeout(()=>{var L;ee.innerHTML=ie?`<img class="wo-in" src="${ie}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((L=R.clubs)==null?void 0:L.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(me,4450),setTimeout(()=>{ae.style.display="none",ee.innerHTML="",E=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),P()},4900)}function v(b){if(E||b<0||b>=e.length||b===g)return;const P=b>g?1:-1;g=b,_(b,P)}function B(){v(g+1)}function $(){v(g-1)}function D(){const b=document.getElementById("card-viewport");if(!b||b._swipeBound)return;b._swipeBound=!0;let P=0,R=0,W=0,ie=!1;const ae=k=>k.touches?k.touches[0].clientX:k.clientX,ee=k=>k.touches?k.touches[0].clientY:k.clientY,me=k=>{ie=!0,P=ae(k),R=ee(k),W=0},be=k=>{if(!ie)return;W=ae(k)-P;const G=ee(k)-R;if(Math.abs(W)<Math.abs(G))return;const N=document.getElementById("current-card-wrap");N&&(N.style.transition="none",N.style.transform=`translateX(${W*.6}px) rotate(${W*.02}deg)`)},L=()=>{if(!ie)return;ie=!1;const k=document.getElementById("current-card-wrap"),G=55;W<=-G&&g<e.length-1?B():W>=G&&g>0?$():k&&(k.style.transition="transform .2s ease",k.style.transform="translateX(0)")};b.addEventListener("pointerdown",me),b.addEventListener("pointermove",be),b.addEventListener("pointerup",L),b.addEventListener("pointercancel",L),b.addEventListener("touchstart",me,{passive:!0}),b.addEventListener("touchmove",be,{passive:!0}),b.addEventListener("touchend",L),b.addEventListener("click",k=>{if(Math.abs(W)>8)return;const G=b.getBoundingClientRect();k.clientX-G.left>G.width/2?B():$()})}let U=null;function Y(){const b=document.getElementById("fireworks-canvas");if(!b)return;b.width=window.innerWidth,b.height=window.innerHeight;const P=b.getContext("2d"),R=[];function W(){const ae=Math.random()*b.width,ee=Math.random()*b.height*.6,me=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],be=me[Math.floor(Math.random()*me.length)];for(let L=0;L<60;L++){const k=Math.PI*2/60*L,G=2+Math.random()*5;R.push({x:ae,y:ee,vx:Math.cos(k)*G,vy:Math.sin(k)*G,alpha:1,color:be,size:2+Math.random()*3})}}W(),U=setInterval(W,600);function ie(){if(document.getElementById("fireworks-canvas")){P.clearRect(0,0,b.width,b.height);for(let ae=R.length-1;ae>=0;ae--){const ee=R[ae];if(ee.x+=ee.vx,ee.y+=ee.vy+.08,ee.vy*=.98,ee.alpha-=.018,ee.alpha<=0){R.splice(ae,1);continue}P.globalAlpha=ee.alpha,P.fillStyle=ee.color,P.beginPath(),P.arc(ee.x,ee.y,ee.size,0,Math.PI*2),P.fill()}P.globalAlpha=1,(U!==null||R.length>0)&&requestAnimationFrame(ie)}}ie()}function J(){U!==null&&(clearInterval(U),U=null);const b=document.getElementById("fireworks-canvas");b&&b.getContext("2d").clearRect(0,0,b.width,b.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{J(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{J(),r.remove(),i("boosters")})}function ao(e){var t,i;if(e.card_type==="player"&&e.player)return Xi(e);if(e.card_type==="game_changer"){const r=e._gcDef,d=(r==null?void 0:r.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[r==null?void 0:r.color]||s.purple,c=a[r==null?void 0:r.color]||a.purple,o=(r==null?void 0:r.name)||e.gc_type||"Game Changer",n=(r==null?void 0:r.effect)||((t=ht[e.gc_type])==null?void 0:t.desc)||"",u=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,f=((i=ht[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${n.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function so(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
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
      </div>`,document.body.appendChild(r),r.addEventListener("click",a=>{a.target===r&&r.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>r.remove());return}lo()}function lo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const co="simulation",gi="VOTRE_ZONE_ID";function po(){switch(co){case"propellerads":return uo();case"adsense":return fo();default:return Lt()}}function Lt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(r),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function uo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Lt());window.propeller.push({zone_id:gi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function fo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Lt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:gi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const He={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ue={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function je(e,t,i,r,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function he(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function bt(e,t){var r,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((r=i.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function dt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function mi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ct(e,t){const i=He[t]||He["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,n)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(n.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=dt(l.length);l.forEach((o,n)=>{o._col=c[n]}),r[a]=l}return r}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let n=s.findIndex(u=>u.job===a);if(n===-1&&(n=s.findIndex(u=>u.job2===a)),n===-1&&(n=0),s[n]){const u={...s[n],_line:a};l.push(u),s.splice(n,1)}}const c=dt(l.length);l.forEach((o,n)=>{o._col=c[n]}),r[a]=l}return r}function ze(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ae(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function xi(e,t,i){const d=new Set,s=t.filter(n=>{const u=n.gc_type||n.id;return d.has(u)?!1:(d.add(u),!0)});let a=[];function l(n,u){const f=n._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},E={purple:"#9b59b6",light_blue:"#00bcd4"},p=g[f==null?void 0:f.color]||g.purple,y=E[f==null?void 0:f.color]||E.purple;return`<div class="gc-select-card" data-id="${n.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":y};background:${p};
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
    </div>`}const c=n=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(n)};function o(){var u,f,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const n=a.length>0;e.innerHTML=`
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
        ${s.map(E=>{const p=a.find(y=>y.gc_type===E.gc_type);return l(E,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(E=>{E.addEventListener("click",()=>{const p=E.dataset.id,y=s.find(_=>_.id===p);if(!y)return;const A=a.findIndex(_=>_.gc_type===y.gc_type);A>-1?a.splice(A,1):a.length<3&&a.push(y),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{n&&c(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>c([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function go(e,t,i){const{state:r,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await C.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){je(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(n=>n.id),{data:l}=await C.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var _,M,v,B,$;const n=s[c],u=(l||[]).filter(D=>D.deck_id===n.id),f=u.filter(D=>{var U;return D.is_starter&&((U=D.card)==null?void 0:U.player)}).map(D=>bt(D.card,D.position)),g=u.find(D=>{var U;return((U=D.card)==null?void 0:U.card_type)==="formation"}),E=n.formation||((_=g==null?void 0:g.card)==null?void 0:_.formation)||"4-4-2",p=f.length>=11?ct(f,E):null,y=f.length>=11;ze(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${n.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${E} · ${f.length}/11 ${n.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Ze(p,E,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((D,U)=>`<div style="width:7px;height:7px;border-radius:50%;background:${U===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const U=e.querySelector(".deck-preview-wrap svg");U&&(U.removeAttribute("width"),U.removeAttribute("height"),U.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",U.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(M=document.getElementById("prev-deck"))==null||M.addEventListener("click",()=>{c>0&&(c--,o())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(B=document.getElementById("validate-deck"))==null||B.addEventListener("click",()=>{y&&t.navigate("match",{matchMode:i,deckId:n.id})}),($=document.getElementById("cancel-deck-select"))==null||$.addEventListener("click",()=>{Ae(e),d("home")});const A=document.getElementById("deck-swipe-zone");if(A){let D=0,U=0;A.addEventListener("touchstart",Y=>{D=Y.touches[0].clientX,U=Y.touches[0].clientY},{passive:!0}),A.addEventListener("touchend",Y=>{const J=Y.changedTouches[0].clientX-D,w=Y.changedTouches[0].clientY-U;Math.abs(J)<40||Math.abs(J)<Math.abs(w)||(J<0&&c<s.length-1?(c++,o()):J>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function yi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function ke(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:he(e),d=yi(e),s=e._line||e.job||"MIL",a=Ue[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(le(e,s))||0)+(e.boost||0),o=hi(e==null?void 0:e.country_code),n=Math.round(i*.19),u=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${vt(e==null?void 0:e.country_code)?`<img src="${vt(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Re(e,t,i){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((s,a)=>{if(d+=ke(s,40,52),a<r.length-1){const l=Ce(s,r[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function vt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function hi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Qe(e,t,i,r,d=310,s=310,a=[]){const l=et[t]||{},c=ai(t)||kt[t]||[],o={},n=["ATT","MIL","DEF","GK"];for(const M of n)(e[M]||[]).forEach((B,$)=>{o[`${M}${$+1}`]=B});function u(M){const v=l[M];return v?{x:v.x*d,y:v.y*s}:null}let f="";for(const[M,v]of c){const B=u(M),$=u(v);if(!B||!$)continue;const D=o[M],U=o[v],Y=Ce(D,U);Y==="#00ff88"||Y==="#FFD700"?(f+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${Y}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${Y}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${Y}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,E=64,p=13,y=16,A={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[M,v]of Object.entries(o)){const B=u(M);if(!B||!v)continue;const $=M.replace(/[0-9]/g,""),D=Ue[$]||"#555",U=a.includes(v.cardId),Y=i==="attack"&&(["MIL","ATT"].includes($)||U)&&!v.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!v.used,J=r.includes(v.cardId);let w;i==="attack"?w=U?Math.max(1,Number(v.note_a)||0):$==="MIL"?Number(v.note_m)||0:Number(v.note_a)||0:i==="defense"?w=$==="GK"?Number(v.note_g)||0:$==="MIL"?Number(v.note_m)||0:Number(v.note_d)||0:w=Number($==="GK"?v.note_g:$==="DEF"?v.note_d:$==="MIL"?v.note_m:v.note_a)||0,w=w+(v.boost||0);const b=(B.x-g/2).toFixed(1),P=(B.y-E/2).toFixed(1),R=A[v==null?void 0:v.rarity]||A.normal;if(v.used){const L="/manager-wars/icons/carte-dos.png";f+=`<defs><clipPath id="cpback-${M}"><rect x="${b}" y="${P}" width="${g}" height="${E}" rx="5"/></clipPath></defs>`,f+=`<rect x="${b}" y="${P}" width="${g}" height="${E}" rx="5" fill="#1a1a1a"/>`,f+=`<image href="${L}" x="${b}" y="${P}" width="${g}" height="${E}" clip-path="url(#cpback-${M})" preserveAspectRatio="xMidYMid slice" opacity="0.92"/>`,f+=`<rect x="${b}" y="${P}" width="${g}" height="${E}" rx="5" fill="none" stroke="${R}" stroke-width="2" opacity="0.6"/>`;continue}const W=J?.45:1,ie=J?"#FFD700":R,ae=J?3:(v==null?void 0:v.rarity)==="légende"||(v==null?void 0:v.rarity)==="pépite"?2.5:2,ee=E-p-y;f+=`<defs><clipPath id="cp-${M}"><rect x="${b}" y="${(B.y-E/2+p).toFixed(1)}" width="${g}" height="${ee}"/></clipPath></defs>`,f+=`<rect x="${b}" y="${P}" width="${g}" height="${E}" rx="5" fill="${D}" opacity="${W}"/>`;const me=he(v);me&&(f+=`<image href="${me}" x="${b}" y="${(B.y-E/2+p).toFixed(1)}" width="${g}" height="${ee}" clip-path="url(#cp-${M})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${b}" y="${P}" width="${g}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${B.x.toFixed(1)}" y="${(B.y-E/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(v.name||"").slice(0,9)}</text>`;const be=(B.y+E/2-y).toFixed(1);f+=`<rect x="${b}" y="${be}" width="${g}" height="${y}" fill="rgba(255,255,255,0.92)"/>`;{const L=vt(v.country_code);L?f+=`<image href="${L}" x="${(B.x-20).toFixed(1)}" y="${(B.y+E/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(B.x-13).toFixed(1)}" y="${(B.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${hi(v.country_code)}</text>`,f+=`<text x="${B.x.toFixed(1)}" y="${(B.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${w}</text>`;const k=yi(v);k?f+=`<image href="${k}" x="${(B.x+g/2-14).toFixed(1)}" y="${(B.y+E/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:v.clubName&&(f+=`<text x="${(B.x+14).toFixed(1)}" y="${(B.y+E/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(v.clubName||"").slice(0,3).toUpperCase()}</text>`),v.boost&&(f+=`<rect x="${(B.x+g/2-12).toFixed(1)}" y="${(B.y-E/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(B.x+g/2-5).toFixed(1)}" y="${(B.y-E/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${v.boost}</text>`)}f+=`<rect x="${b}" y="${P}" width="${g}" height="${E}" rx="5" fill="${J?"rgba(255,255,255,0.12)":"none"}" stroke="${ie}" stroke-width="${ae}" opacity="${W}"/>`,Y&&(f+=`<rect x="${b}" y="${P}" width="${g}" height="${E}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${J?"selected":""}" data-card-id="${v.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${d+_*2} ${s+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function Ze(e,t,i,r,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Qe(e,t,i,r,d,s,a)}
  </div>`}function Ne(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function bi(e,t,i,r){var B;const{state:d,navigate:s,toast:a}=t;ze(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return go(e,t,i);const c=l.deckId;let o,n,u,f;try{const $=await Promise.all([C.from("decks").select("formation,name").eq("id",c).single(),C.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=$[0].data,u=$[0].error,n=$[1].data,f=$[1].error}catch($){console.error("[Match] Exception chargement deck:",$),je(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),je(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const g=(n||[]).filter($=>{var D;return $.is_starter&&((D=$.card)==null?void 0:D.player)}).map($=>bt($.card,$.position)),E=(n||[]).filter($=>{var D;return!$.is_starter&&((D=$.card)==null?void 0:D.player)}).map($=>bt($.card,$.position));if(g.length<11){je(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>s("decks"));return}const p=(n||[]).find($=>{var D;return((D=$.card)==null?void 0:D.card_type)==="formation"}),y=(o==null?void 0:o.formation)||((B=p==null?void 0:p.card)==null?void 0:B.formation)||"4-4-2",{data:A,error:_}=await C.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:M}=await C.from("gc_definitions").select("*").eq("is_active",!0),v=(A||[]).map($=>({...$,_gcDef:(M==null?void 0:M.find(D=>D.name===$.gc_type||D.id===$.gc_definition_id))||null}));r({deckId:c,formation:y,starters:g,subsRaw:E,gcCardsEnriched:v,gcDefs:M||[]})}async function mo(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await bi(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:n,gcCardsEnriched:u,gcDefs:f})=>{try{const g=ct(o,c),E=await xo(c,s),p=async y=>{try{const{data:A,error:_}=await C.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(_){console.error("[MatchIA] Erreur création match:",_),je(e,"⚠️","Impossible de créer le match ("+_.message+").","Retour",()=>t.navigate("home"));return}const M={gcDefs:f||[],matchId:A==null?void 0:A.id,mode:a,difficulty:s,formation:c,homeTeam:g,aiTeam:E,homeSubs:n,subsUsed:0,maxSubs:Math.min(n.length,3),homeScore:0,aiScore:0,gcCards:y,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ho(e,M,t)}catch(A){console.error("[MatchIA] Exception launchMatch:",A),je(e,"⚠️","Erreur au lancement du match : "+A.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}xi(e,u,p)}catch(g){console.error("[MatchIA] Exception setup:",g),je(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function xo(e,t){var a,l;const{data:i}=await C.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return yo(e);const r=He[e]||He["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(E=>E.job===c),n=s.filter(E=>E.job!==c),u=[...o,...n],f=[];for(let E=0;E<r[c];E++){const p=u[E]||s[E];p&&f.push({cardId:"ai-"+p.id+"-"+E,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((a=p.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=p.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const g=dt(f.length);f.forEach((E,p)=>{E._col=g[p]}),d[c]=f}return d}function yo(e){const t=He[e]||He["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:r[d%r.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=dt(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function ho(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Qe(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>bo(e,t,i),5e3)}function bo(e,t,i){const r=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(p){return p.reduce((y,A)=>y+le(A,"MIL"),0)}function a(p){let y=0;for(let A=0;A<p.length-1;A++){const _=Ce(p[A],p[A+1]);_==="#00ff88"?y+=2:_==="#FFD700"&&(y+=1)}return y}const l=s(r)+a(r),c=s(d)+a(d),o=l>=c;function n(p,y,A,_){return`<div id="duel-row-${_}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${y}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((M,v)=>{const B=v<p.length-1?Ce(M,p[v+1]):null,$=!B||B==="#ff3333"||B==="#cc2222",D=B==="#00ff88"?"+2":B==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${_}" data-idx="${v}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${ke({...M,note:le(M,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${v<p.length-1?`<div class="duel-link duel-link-${_}" data-idx="${v}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${$?"rgba(255,255,255,0.12)":B};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${$?"none":`0 0 8px ${B}`}">
            ${D?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${B}">${D}</span>`:""}
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

    ${n(r,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${n(d,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const p=(y,A)=>e.querySelectorAll(y).forEach((_,M)=>{setTimeout(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"},A+M*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((y,A)=>{setTimeout(()=>{y.style.opacity="1"},A*70)}),900),setTimeout(()=>{const y=e.querySelector("#vs-label");y&&(y.style.opacity="1",y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(A=>A.style.opacity="1")},1250),setTimeout(()=>{f("score-home",l,800),f("score-ai",c,800)},1500)};function f(p,y,A){const _=document.getElementById(p);if(!_)return;const M=performance.now(),v=B=>{const $=Math.min(1,(B-M)/A);_.textContent=Math.round(y*(1-Math.pow(1-$,3))),$<1?requestAnimationFrame(v):_.textContent=y};requestAnimationFrame(v)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const g=o?mi():null;o&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(p=>({name:p.name,note:le(p,"MIL"),portrait:he(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:le(p,"MIL"),portrait:he(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const E=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",fe(e,t,i),t.attacker==="ai"&&setTimeout(()=>wt(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),y=document.getElementById("score-ai"),A=document.getElementById(o?"duel-row-home":"duel-row-ai"),_=document.getElementById(o?"duel-row-ai":"duel-row-home"),M=o?p:y,v=o?y:p;M&&(M.style.fontSize="80px",M.style.color=o?"#FFD700":"#ff6b6b",M.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{A&&(A.style.transformOrigin="center",A.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",A.style.zIndex="5"),setTimeout(()=>{var $;const B=document.getElementById("duel-shock");if(B){const D=($=_||A)==null?void 0:$.getBoundingClientRect(),U=e.querySelector(".match-screen").getBoundingClientRect();D&&(B.style.top=D.top-U.top+D.height/2+"px"),B.style.animation="shockwave .5s ease-out forwards"}_&&(_.style.transformOrigin="center",_.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var $;const B=document.getElementById("duel-finale");B&&(B.innerHTML=`
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
          </button>`,B.style.transition="opacity .45s ease",B.style.opacity="1",B.style.pointerEvents="auto",($=document.getElementById("start-match-btn"))==null||$.addEventListener("click",E))},600)},700)},2800)}function vo(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>Ne(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>Ne(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${Ne(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${Ne(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function fe(e,t,i){var M,v,B,$,D,U,Y,J;const r=t.selected.map(w=>w.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(w=>!d.includes(w.cardId)),l=Object.values(t.homeTeam).flat().filter(w=>w.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(w=>(t.aiTeam[w]||[]).some(b=>!b.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(w=>!w.used),n=t.phase==="attack"&&c&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(w=>!w.used).map(w=>w.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",g=t.phase==="defense",E=t.phase==="finished",p=t.gcCards.filter(w=>!t.usedGc.includes(w.id)),y=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const b=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Re((b.players||[]).map(P=>({...P,used:!1})),"#ff6b6b",b.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const b=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Re((b.players||[]).map(P=>({...P,used:!1})),"#00ff88",b.total)}
          </div>`}const w=t.log[t.log.length-1];return w?'<div style="padding:2px 4px">'+vo(w)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const w=window.innerWidth>=700,b=(L,k,G)=>{var S,O;const N=(t.gcDefs||[]).find(K=>K.name===L.gc_type),V={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[N==null?void 0:N.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[N==null?void 0:N.color]||"#b06ce0",m=(N==null?void 0:N.name)||L.gc_type,I=(N==null?void 0:N.effect)||((S=Ee[L.gc_type])==null?void 0:S.desc)||"",j=N!=null&&N.image_url?`/manager-wars/icons/${N.image_url}`:null,h=((O=Ee[L.gc_type])==null?void 0:O.icon)||"⚡",z=Math.round(G*.22),T=Math.round(G*.22),F=G-z-T,q=m.length>12?7:9;return`<div class="gc-mini" data-gc-id="${L.id}" data-gc-type="${L.gc_type}"
          style="box-sizing:border-box;width:${k}px;height:${G}px;border-radius:10px;border:2px solid ${x};background:${V};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${z}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${q}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${k-6}px">${m}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${F}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${j?`<img src="${j}" style="max-width:${k-10}px;max-height:${F-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(F*.55)}px">${h}</span>`}
          </div>
          <div style="height:${T}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${I.slice(0,38)}</span>
          </div>
        </div>`},P=(L,k)=>{var G;return`<div id="boost-card"
          style="box-sizing:border-box;width:${L}px;height:${k}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(k*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(k*.2)}px">⚡</div>
            <div style="font-size:${Math.round(k*.09)}px;color:#000;font-weight:900">+${(G=t.boostCard)==null?void 0:G.value}</div>
          </div>`},R=(L,k)=>k?P(130,175):b(L,130,175),W=(L,k)=>k?P(68,95):b(L,68,95),ie=w?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ae=E?`<button id="btn-results" style="${ie};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${ie};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-action" style="${ie};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ie};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ie};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ee=f||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${w?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(L=>`<div class="sub-btn-col" data-sub-id="${L.cardId}" style="cursor:pointer;flex-shrink:0">${ke(L,76,100)}</div>`).join("")}
      </div>`,be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ze(t.homeTeam,t.formation,t.phase,r,300,300,n)}
        </div>
      </div>`;return w?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${be}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ae}${ee}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${p.map(L=>R(L,!1)).join("")}
            ${y?R(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ze(t.homeTeam,t.formation,t.phase,r,300,300,n)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${p.map(L=>W(L,!1)).join("")}
            ${y?W(null,!0):""}
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
          <div>${ae}${ee}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(w=>{var b,P,R;if(w.type==="duel"){const W=w.isGoal,ie=w.homeScored?"#FFD700":W?"#ff6b6b":"rgba(255,255,255,0.3)",ae=w.homeScored?"⚽ BUT !":W?"⚽ BUT IA !":(b=w.homePlayers)!=null&&b.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${W?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ie};margin-bottom:4px">
                <div style="font-size:9px;color:${ie};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ae}</div>
                ${(P=w.homePlayers)!=null&&P.length?`<div style="margin-bottom:3px">${Re(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
                ${(R=w.aiPlayers)!=null&&R.length?`<div style="opacity:0.7">${Re(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
              </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${w.outPlayer?ke({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${w.inPlayer?ke({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:w.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${w.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${w.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function A(){const w=e.querySelector(".match-screen");if(!w)return;const b=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);w.style.bottom="auto",w.style.height=b+"px",w.style.minHeight=b+"px",w.style.maxHeight=b+"px",w.style.overflow="hidden";const P=e.querySelector("#mobile-action-bar"),R=e.querySelector("#mobile-play-area");P&&R&&(R.style.paddingBottom=P.offsetHeight+"px")}if(A(),setTimeout(A,120),setTimeout(A,400),setTimeout(A,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",A),window.visualViewport.addEventListener("scroll",A)),window.addEventListener("resize",A)),function(){const b=e.querySelector(".terrain-wrapper svg");b&&(b.removeAttribute("width"),b.removeAttribute("height"),b.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",b.setAttribute("viewBox","-26 -26 352 352"),b.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const w=e.querySelector(".terrain-wrapper svg");w&&(w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let w=!1,b=30;const P=()=>document.getElementById("match-timer"),R=()=>{const W=P();if(!W)return;const ie=String(Math.floor(b/60)).padStart(2,"0"),ae=String(b%60).padStart(2,"0");W.textContent=` ${ie}:${ae}`,W.style.color=w?"#ff2222":"#ff9500",W.style.fontWeight="900"};R(),t._timerInt=setInterval(()=>{if(b--,b<0)if(!w)w=!0,b=15,R();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",W.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(W),setTimeout(()=>{W.remove(),Xe(e,t,i)},2500)}else R()},1e3)}(M=document.getElementById("match-quit"))==null||M.addEventListener("click",()=>{Ae(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Xe(e,t,i))}),(v=document.getElementById("view-ai"))==null||v.addEventListener("click",()=>Mo(t,i)),(B=document.getElementById("toggle-history"))==null||B.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.add("open")}),($=document.getElementById("close-history"))==null||$.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.remove("open")}),(D=document.getElementById("btn-action"))==null||D.addEventListener("click",()=>{t.selected.length!==0&&(f?$o(e,t,i):g&&_o(e,t,i))}),(U=document.getElementById("btn-results"))==null||U.addEventListener("click",()=>Xe(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(w=>{w.addEventListener("click",()=>wo(w,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(w=>{w.addEventListener("click",()=>To(w.dataset.gcId,w.dataset.gcType,e,t,i))}),(Y=document.getElementById("boost-card"))==null||Y.addEventListener("click",()=>Lo(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(w=>{w.addEventListener("click",()=>ii(e,t,i,w.dataset.subId))}),(J=document.getElementById("sub-btn-main"))==null||J.addEventListener("click",()=>ii(e,t,i))}function wo(e,t,i,r){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}fe(i,t,r)}function Mt(e,t,i){e.matchId&&C.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function $o(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Mt(t,i,i.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=r&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Et(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",fe(e,t,i),setTimeout(()=>ko(e,t,i),1200)}function _o(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Mt(t,i,i.state.profile.id);const r=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=Tt(r,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=At(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:he(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:he(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,fe(e,t,i),pt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Oe(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Oe(e,t,i,"home-attack")}function wt(e,t,i){Mt(t,i,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=li(r,"attack",t.difficulty);if(!d.length){ot(e,t,i);return}const s=Et(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:he(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,fe(e,t,i),pt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Oe(e,t,i,"home-attack")});return}t.phase="defense",fe(e,t,i)}function ko(e,t,i){var o,n;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=li(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(g=>({name:g.name,note:le(g,g._line||g.job),portrait:he(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((n=t.pendingAttack)==null?void 0:n.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,fe(e,t,i),pt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{Oe(e,t,i,"ai-attack")});return}const a=d.length>0?Tt(d,t.modifiers.ai).total:0;d.forEach(u=>{u.used=!0});const l=At(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:he(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:he(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,fe(e,t,i),pt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{Oe(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,Oe(e,t,i,"ai-attack")}function Oe(e,t,i,r){if(t.round++,vi(t)){Xe(e,t,i);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){ot(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){ot(e,t,i);return}setTimeout(()=>wt(e,t,i),100);return}t.phase="attack",fe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){ot(e,t,i);return}t.phase="ai-attack",fe(e,t,i),setTimeout(()=>wt(e,t,i),800)}}function vi(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(d=>!d.used));return!t&&!i}function ot(e,t,i){vi(t)?Xe(e,t,i):(t.phase="attack",fe(e,t,i))}function Eo(e,t,i){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=he(e),s=he(t),a=Ue[e.job]||"#555",l=Ue[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
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
  `,document.body.appendChild(r);let n=!1;const u=()=>{n||(n=!0,r.remove(),i())};r.addEventListener("click",u),setTimeout(u,2e3)}function We(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ii(e,t,i,r=null){if(t.phase!=="attack"){We("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){We(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(u=>u.used),s=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!d.length){We("Aucun joueur utilisé à remplacer");return}if(!s.length){We("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(u=>u.cardId===r)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function n(){var A,_,M,v,B,$;const u=d[a],f=s[l],g=Math.min(130,Math.round((window.innerWidth-90)/2)),E=Math.round(g*1.35),p=D=>`background:rgba(255,255,255,0.12);border:none;color:${D?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${D?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${f?ke({...f,used:!1,boost:0},g,E):"<div>—</div>"}</div>
        <button id="in-down" style="${p(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?ke({...u,used:!1,boost:0},g,E):"<div>—</div>"}</div>
        <button id="out-down" style="${p(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(A=o.querySelector("#sub-close"))==null||A.addEventListener("click",()=>o.remove()),(_=o.querySelector("#out-up"))==null||_.addEventListener("click",()=>{a>0&&(a--,n())}),(M=o.querySelector("#out-down"))==null||M.addEventListener("click",()=>{a<d.length-1&&(a++,n())}),(v=o.querySelector("#in-up"))==null||v.addEventListener("click",()=>{l>0&&(l--,n())}),(B=o.querySelector("#in-down"))==null||B.addEventListener("click",()=>{l<s.length-1&&(l++,n())});const y=(D,U,Y,J)=>{const w=o.querySelector("#"+D);if(!w)return;let b=0;w.addEventListener("touchstart",P=>{b=P.touches[0].clientY},{passive:!0}),w.addEventListener("touchend",P=>{const R=P.changedTouches[0].clientY-b;if(Math.abs(R)<30)return;const W=U();R<0&&W<J-1?(Y(W+1),n()):R>0&&W>0&&(Y(W-1),n())},{passive:!0})};y("in-panel",()=>l,D=>l=D,s.length),y("out-panel",()=>a,D=>a=D,d.length),($=o.querySelector("#sub-confirm"))==null||$.addEventListener("click",D=>{if(D.preventDefault(),D.stopPropagation(),c)return;c=!0;const U=d[a],Y=s[l];if(!U||!Y)return;let J=null,w=-1;for(const[P,R]of Object.entries(t.homeTeam)){const W=(R||[]).findIndex(ie=>ie.cardId===U.cardId);if(W!==-1){J=P,w=W;break}}if(w===-1||!J){We("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const b={...Y,_line:J,_col:U._col||0,used:!1,boost:0};t.homeTeam[J].splice(w,1,b),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Y.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:U.name,firstname:U.firstname,note:le(U,J),portrait:he(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},inPlayer:{name:Y.name,firstname:Y.firstname,note:le(Y,J),portrait:he(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},text:`🔄 ${Y.firstname} ${Y.name} remplace ${U.firstname} ${U.name}`}),o.remove(),Eo(U,Y,()=>fe(e,t,i))})}document.body.appendChild(o),n()}function To(e,t,i,r,d){var E,p;const s=(r.gcDefs||[]).find(y=>y.name===t),a=Ee[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,n=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,f=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
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
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${n}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(E=g.querySelector("#gc-back"))==null||E.addEventListener("click",()=>g.remove()),(p=g.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{g.remove(),Io(e,t,i,r,d)})}function it(e,t,i,r,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,n;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",E=le(u,f)+(u.boost||0),p=l.find(y=>y.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${E}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,g=e.find(p=>p.cardId===f);if(!g)return;const E=l.findIndex(p=>p.cardId===f);E>-1?l.splice(E,1):l.length<t&&l.push(g),c()})}),(n=a.querySelector("#gc-picker-confirm"))==null||n.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const Ao={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},r,d,s)=>{const a=Object.entries(r.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(it(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,r,l=>{l.forEach(c=>{const o=(r.homeTeam[c._line]||[]).find(n=>n.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),fe(d,r,s)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),fe(d,r,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:r="ai"},d,s,a)=>{const l=r==="home"?d.homeTeam:d.aiTeam,c=r==="ai"?"adverse":"allié",o=Object.entries(l).filter(([n])=>!i.length||i.includes(n)).flatMap(([n,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:n})));return o.length?(it(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,n=>{n.forEach(u=>{const g=((r==="home"?d.homeTeam:d.aiTeam)[u._line]||[]).find(E=>E.cardId===u.cardId);g&&(g.boost=(g.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${g.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),fe(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),fe(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},r,d,s)=>{const a=i==="home"?r.homeTeam:r.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,n])=>n.filter(u=>!u.used).map(u=>({...u,_line:o})));return c.length?(it(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,r,o=>{o.forEach(n=>{const f=((i==="home"?r.homeTeam:r.aiTeam)[n._line]||[]).find(g=>g.cardId===n.cardId);f&&(f.used=!0,r.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),fe(d,r,s)}),!0):(r.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),fe(d,r,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,r,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(it(s,e,`Choisir ${e} joueur(s) à ressusciter`,r,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),fe(r,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),fe(r,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Io(e,t,i,r,d){r.usedGc.push(e);const s=r.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=Ao[a.effect_type];c?c(a.effect_params||{},r,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(r.homeTeam).flatMap(([o,n])=>(n||[]).filter(u=>u.used).map(u=>({...u,_line:o})));c.length?(c[0].used=!1,r.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((n,u)=>le(u,"ATT")-le(n,"ATT"))[0];o.used=!0,r.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}C.from("cards").delete().eq("id",e).then(()=>{}),l&&fe(i,r,d)}function Lo(e,t,i){const r=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!r.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Ue[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${le(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),fe(e,t,i)})})}function pt(e,t,i,r,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,n)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${n%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][n%8]}
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
    ${r?"BUT !":"BUT IA !"}
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Ue[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function Xe(e,t,i){var n,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=ji(t.mode,a);t.matchId&&await C.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?r.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(r.profile.credits||0)+l,matches_played:(r.profile.matches_played||0)+1};d?c.wins=(r.profile.wins||0)+1:s?c.draws=(r.profile.draws||0)+1:c.losses=(r.profile.losses||0)+1,await C.from("users").update(c).eq("id",r.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(n=document.getElementById("res-home"))==null||n.addEventListener("click",()=>{o.remove(),Ae(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),Ae(e),i.navigate("match",{matchMode:t.mode})})}function Mo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Qe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function zo(e,t){await bi(e,t,"random",({deckId:i,formation:r,starters:d,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const c=o=>So(e,t,i,r,d,s,o,l||[]);if(!a.length){c([]);return}xi(e,a,c)})}async function So(e,t,i,r,d,s,a=[],l=[]){var _;const{state:c,navigate:o,toast:n}=t;let u=!1,f=null;ze(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(M=!0)=>{u=!0,f&&(C.removeChannel(f),f=null),M&&await C.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(_=document.getElementById("mm-cancel"))==null||_.addEventListener("click",async()=>{try{await g(!0)}catch{}Ae(e),o("home")});const E=async(M,v,B)=>{if(u)return;u=!0,f&&(C.removeChannel(f),f=null);const $=document.getElementById("mm-status");$&&($.textContent="Adversaire trouvé !"),await new Promise(D=>setTimeout(D,600)),e.isConnected&&jo(e,t,M,B,a,l)},{data:p,error:y}=await C.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(y||!(p!=null&&p.success)){n("Erreur de matchmaking","error"),Ae(e),o("home");return}if(p.matched){E(p.match_id,p.opponent_id,!1);return}const A=document.getElementById("mm-status");A&&(A.textContent="En attente d'un autre joueur..."),f=C.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},M=>{const v=M.new;v.status==="matched"&&v.match_id&&E(v.match_id,v.matched_with,!0)}).subscribe()}async function jo(e,t,i,r,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=r?"p1":"p2",n=r?"p2":"p1",u=(d||[]).map(x=>x.id),f=(d||[]).map(x=>({id:x.id,gc_type:x.gc_type,_gcDef:x._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await C.from("matches").select("*").eq("id",i).single();if(!g){c("Match introuvable","error"),l("home");return}async function E(){const[{data:x},{data:m},{data:I},{data:j}]=await Promise.all([C.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),C.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),C.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),C.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),h=S=>({cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),z=((x==null?void 0:x.starters)||[]).map(S=>h(S)),T=((m==null?void 0:m.starters)||[]).map(S=>h(S)),F=(x==null?void 0:x.formation)||"4-4-2",q=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:ct(z,F),p2Team:ct(T,q),p1Subs:((x==null?void 0:x.subs)||[]).map(S=>h(S)),p2Subs:((m==null?void 0:m.subs)||[]).map(S=>h(S)),p1Formation:F,p2Formation:q,p1Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 1",p2Name:(j==null?void 0:j.club_name)||(j==null?void 0:j.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?u:[],gc_p2:r?[]:u,gcCardsFull_p1:r?f:[],gcCardsFull_p2:r?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,lastActionAt:new Date().toISOString()}}let p=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!p)if(r){p=await E();const{data:x}=await C.from("matches").select("game_state").eq("id",i).single();!(x!=null&&x.game_state)||!Object.keys(x.game_state).length?await C.from("matches").update({game_state:p,turn_user_id:g.home_id}).eq("id",i):p=x.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let x=0;x<30&&!p;x++){await new Promise(I=>setTimeout(I,400));const{data:m}=await C.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(p=m.game_state)}if(!p){c("Erreur de synchronisation","error"),l("home");return}p.gc_p2=u,p.gcCardsFull_p2=f,await C.from("matches").update({game_state:p}).eq("id",i)}let y=!1,A=null,_=!1;const M=new Set;function v(x){var j,h;try{C.removeChannel(B)}catch{}const m=x.winner_id===a.profile.id;(j=document.getElementById("pvp-end-overlay"))==null||j.remove();const I=document.createElement("div");I.id="pvp-end-overlay",I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",I.innerHTML=`
      <div style="font-size:64px">${m?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${m?"#FFD700":"#ff6b6b"}">${m?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px">${p[o+"Name"]} ${p[o+"Score"]} – ${p[n+"Score"]} ${p[n+"Name"]}</div>
      ${x.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(I),(h=I.querySelector("#pvp-end-home"))==null||h.addEventListener("click",()=>{I.remove(),Ae(e),l("home")})}const B=C.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},x=>{const m=x.new;try{if(m.status==="finished"||m.forfeit){if(y)return;y=!0,A&&(clearInterval(A),A=null),m.game_state&&(p=m.game_state),v(m);return}if(m.game_state){const I=p;p=m.game_state;for(const S of["p1","p2"])for(const O of["GK","DEF","MIL","ATT"]){const K=(I[S+"Team"]||{})[O]||[];((p[S+"Team"]||{})[O]||[]).forEach(oe=>{const ge=K.find(ce=>ce.cardId===oe.cardId);ge!=null&&ge.used&&(oe.used=!0)})}const j=I[o+"Score"]||0,h=I[n+"Score"]||0,z=p[o+"Score"]||0,T=p[n+"Score"]||0,F=z>j,q=T>h;if((F||q)&&!M.has(p.round)){M.add(p.round);const S=[...p.log||[]].reverse().find(K=>K.isGoal),O=((S==null?void 0:S.homePlayers)||[]).map(K=>({name:K.name,note:K.note,portrait:K.portrait,job:K.job}));W(O,z,T,F,()=>w());return}w()}}catch(I){console.error("[PvP] crash:",I)}}).subscribe();async function $(x){Object.assign(p,x),p.lastActionAt=new Date().toISOString();const{error:m}=await C.from("matches").update({game_state:p}).eq("id",i);m&&c("Erreur de synchronisation","error");try{w()}catch(I){console.error("[PvP] renderPvpScreen crash:",I)}}async function D(){if(y)return;y=!0,A&&(clearInterval(A),A=null);const x=r?g.away_id:g.home_id,m=r?"p2":"p1",I=r?"p1":"p2",j={...p,[m+"Score"]:3,[I+"Score"]:0,phase:"finished"};try{await C.from("matches").update({status:"finished",forfeit:!0,winner_id:x,game_state:j}).eq("id",i)}catch{}try{C.removeChannel(B)}catch{}setTimeout(()=>{Ae(e),l("home")},800)}const U={BOOST_STAT:({value:x=1,count:m=1,roles:I=[]},j,h)=>{const z=j[o+"Team"],T=Object.entries(z).filter(([F])=>!I.length||I.includes(F)).flatMap(([F,q])=>q.filter(S=>!S.used).map(S=>({...S,_line:F})));if(!T.length){j.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(j);return}Y(T,m,`Choisir ${m} joueur(s) à booster (+${x})`,F=>{F.forEach(q=>{const S=(z[q._line]||[]).find(O=>O.cardId===q.cardId);S&&(S.boost=(S.boost||0)+x,j.log.push({text:`⚡ +${x} sur ${S.name}`,type:"info"}))}),j[o+"Team"]=z,h(j)})},DEBUFF_STAT:({value:x=1,count:m=1,roles:I=[],target:j="ai"},h,z)=>{const T=j==="home"?o:n,F=h[T+"Team"],q=j==="home"?"allié":"adverse",S=Object.entries(F).filter(([O])=>!I.length||I.includes(O)).flatMap(([O,K])=>K.filter(te=>!te.used).map(te=>({...te,_line:O})));if(!S.length){h.log.push({text:`🎯 Aucun joueur ${q}`,type:"info"}),z(h);return}Y(S,m,`Choisir ${m} joueur(s) ${q}(s) (-${x})`,O=>{O.forEach(K=>{const te=(F[K._line]||[]).find(oe=>oe.cardId===K.cardId);te&&(te.boost=(te.boost||0)-x,h.log.push({text:`🎯 -${x} sur ${te.name}`,type:"info"}))}),h[T+"Team"]=F,z(h)})},GRAY_PLAYER:({count:x=1,roles:m=[],target:I="ai"},j,h)=>{const z=I==="home"?o:n,T=j[z+"Team"],F=I==="home"?"allié":"adverse",q=Object.entries(T).filter(([S])=>!m.length||m.includes(S)).flatMap(([S,O])=>O.filter(K=>!K.used).map(K=>({...K,_line:S})));if(!q.length){j.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),h(j);return}Y(q,x,`Choisir ${x} joueur(s) ${F}(s) à exclure`,S=>{S.forEach(O=>{const K=(T[O._line]||[]).find(te=>te.cardId===O.cardId);K&&(K.used=!0,j.log.push({text:`❌ ${K.name} exclu !`,type:"info"}))}),j[z+"Team"]=T,h(j)})},REVIVE_PLAYER:({count:x=1,roles:m=[]},I,j)=>{const h=I[o+"Team"],z=Object.entries(h).filter(([T])=>!m.length||m.includes(T)).flatMap(([T,F])=>F.filter(q=>q.used).map(q=>({...q,_line:T})));if(!z.length){I.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),j(I);return}Y(z,x,`Choisir ${x} joueur(s) à ressusciter`,T=>{T.forEach(F=>{const q=(h[F._line]||[]).find(S=>S.cardId===F.cardId);q&&(q.used=!1,I.log.push({text:`💫 ${q.name} ressuscité !`,type:"info"}))}),I[o+"Team"]=h,j(I)})},REMOVE_GOAL:({},x,m)=>{const I=n+"Score";x[I]>0?(x[I]--,x.log.push({text:"🚫 Dernier but annulé !",type:"info"})):x.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(x)},ADD_GOAL_DRAW:({},x,m)=>{x[o+"Score"]===x[n+"Score"]?(x[o+"Score"]++,x.log.push({text:"🎯 But bonus !",type:"info"})):x.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(x)},ADD_SUB:({value:x=1},m,I)=>{m.maxSubs=(m.maxSubs||3)+x,m.log.push({text:`🔄 +${x} remplacement(s)`,type:"info"}),I(m)},CUSTOM:({},x,m)=>m(x)};function Y(x,m,I,j){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let z=[];function T(){var q,S;const F=x.map(O=>{const K={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[O._line]||"#555",te=le(O,O._line)+(O.boost||0),ge=z.find(Q=>Q.cardId===O.cardId)?"#FFD700":"rgba(255,255,255,0.25)",ce=O.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${O.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ge};background:${K};overflow:hidden;cursor:pointer;${ce}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${O.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${te}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${O._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${I}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${z.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${z.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${z.length}/${m})
          </button>
        </div>`,(q=h.querySelector("#pp-close"))==null||q.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(O=>{O.addEventListener("click",()=>{const K=O.dataset.cid,te=x.find(ge=>ge.cardId===K),oe=z.findIndex(ge=>ge.cardId===K);te&&(oe>-1?z.splice(oe,1):z.length<m&&z.push(te),T())})}),(S=h.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{h.remove(),j(z)})}T(),document.body.appendChild(h)}async function J(x,m){const j=(p["gcCardsFull_"+o]||[]).find(F=>F.id===x),h=(j==null?void 0:j._gcDef)||(p.gcDefs||[]).find(F=>{var q;return F.name===m||((q=F.name)==null?void 0:q.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),z=[...p["usedGc_"+o]||[],x];if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const F=U[h.effect_type];if(F){const q={...p};F(h.effect_params||{},q,async S=>{S["usedGc_"+o]=z,await $(S)});return}}const T={...p};switch(m){case"Remplacement+":T.maxSubs=(T.maxSubs||3)+1,T.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const F=n+"Score";T[F]>0&&(T[F]--,T.log.push({text:"🚫 But annulé",type:"info"}));break}}T["usedGc_"+o]=z,await $(T)}function w(){var Ct,Bt,Ft,Dt,Gt,qt;if(p.phase==="reveal")return b();if(p.phase==="midfield")return R();if(p.phase==="finished")return V();const x=p[o+"Team"],m=p[n+"Team"],I=p[o+"Score"],j=p[n+"Score"],h=p[o+"Name"],z=p[n+"Name"],T=p.phase===o+"-attack",F=p.phase===o+"-defense",q=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],S=q.map(H=>H.cardId),O=window.innerWidth>=700,K=p[o+"Subs"]||[],te=p["usedSubIds_"+o]||[],oe=K.filter(H=>!te.includes(H.cardId)),ge=p["gcCardsFull_"+o]||[],ce=p["usedGc_"+o]||[],Q=ge.filter(H=>!ce.includes(H.id)),X=p.boostOwner===o&&!p.boostUsed,re=!["GK","DEF","MIL","ATT"].some(H=>(m[H]||[]).some(Z=>!Z.used)),se=[...x.MIL||[],...x.ATT||[]].filter(H=>!H.used),ve=T&&re&&se.length===0?[...x.GK||[],...x.DEF||[]].filter(H=>!H.used).map(H=>H.cardId):[];function xe(H,Z,ue){var Pt,Ht;const ne=H._gcDef,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ne==null?void 0:ne.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ge={purple:"#b06ce0",light_blue:"#00d4ef"}[ne==null?void 0:ne.color]||"#b06ce0",Ke=(ne==null?void 0:ne.name)||H.gc_type,Ve=(ne==null?void 0:ne.effect)||((Pt=Ee[H.gc_type])==null?void 0:Pt.desc)||"",Rt=ne!=null&&ne.image_url?`/manager-wars/icons/${ne.image_url}`:null,ki=((Ht=Ee[H.gc_type])==null?void 0:Ht.icon)||"⚡",Nt=Math.round(ue*.22),Ot=Math.round(ue*.22),mt=ue-Nt-Ot,Ei=Ke.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}"
        style="box-sizing:border-box;width:${Z}px;height:${ue}px;border-radius:10px;border:2px solid ${Ge};background:${Me};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Nt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ei}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${Ke}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Rt?`<img src="${Rt}" style="max-width:${Z-10}px;max-height:${mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(mt*.55)}px">${ki}</span>`}
        </div>
        <div style="height:${Ot}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ve.slice(0,38)}</span>
        </div>
      </div>`}function ye(H,Z){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${H}px;height:${Z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Z*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Z*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Z*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const pe=(H,Z)=>Z?ye(130,175):xe(H,130,175),$e=(H,Z)=>Z?ye(68,95):xe(H,68,95),we=O?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",_e=T?`<button id="pvp-action" style="${we};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${q.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${we};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${q.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${z}</div>`,Te=T||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${q.length}/3 sélectionné(s)</div>`:"",Be=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${O?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${oe.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':oe.map(H=>`<div class="pvp-sub-btn" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${ke(H,O?76:44,O?100:58)}</div>`).join("")}
    </div>`,Ie=T?"attack":F?"defense":"idle",Le=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ze(x,p[o+"Formation"],Ie,S,300,300,ve)}
      </div>
    </div>`;function Fe(H){if(H.type==="duel"){const Z=(H.homeTotal||0)>=(H.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(H.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(H.homePlayers||[]).map(ue=>Ne(ue)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Z?20:14}px;font-weight:900;color:${Z?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${H.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Z?14:20}px;font-weight:900;color:${Z?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${H.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(H.aiPlayers||[]).map(ue=>Ne(ue)).join("")}
            </div>
          </div>
          ${H.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${H.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${H.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${H.type==="goal"?700:400};padding:3px 2px">${H.text||""}</div>`}const _i=(()=>{var Z,ue;if(F&&((Z=p.pendingAttack)!=null&&Z.players)){const ne=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${z} ATTAQUE — Défendez !</div>
          ${Re((ne.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",ne.total)}
        </div>`}if(T&&((ue=p.pendingAttack)!=null&&ue.players)){const ne=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${Re((ne.players||[]).map(Me=>({...Me,used:!1})),"#00ff88",ne.total)}
        </div>`}const H=(p.log||[]).slice(-1)[0];return H?'<div style="padding:2px 4px">'+Fe(H)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),jt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${I} – ${j}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${z}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${_i}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;ze(e),e.style.overflow="hidden",O?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${jt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Be}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Le}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${_e}${Te}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Q.map(H=>pe(H,!1)).join("")}
            ${X?pe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${jt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ze(x,p[o+"Formation"],Ie,S,300,300,ve)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Q.map(H=>$e(H,!1)).join("")}
            ${X?$e(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${T&&oe.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${T&&oe.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${T&&oe.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${T&&oe.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${oe.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+o]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${_e}${Te}</div>
        </div>
      </div>`;function De(){const H=e.querySelector(".match-screen");if(!H)return;const Z=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);H.style.height=Z+"px",H.style.minHeight=Z+"px",H.style.maxHeight=Z+"px",H.style.overflow="hidden";const ue=e.querySelector("#mobile-action-bar"),ne=e.querySelector("#mobile-play-area");ue&&ne&&(ne.style.paddingBottom=ue.offsetHeight+"px")}if(De(),setTimeout(De,120),setTimeout(De,400),_||(_=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",De),window.visualViewport.addEventListener("scroll",De)),window.addEventListener("resize",De)),function(){const Z=e.querySelector(".terrain-wrapper svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("viewBox","-26 -26 352 352"),Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(H=>{H.addEventListener("click",()=>{if(!T&&!F)return;const Z=H.dataset.cardId,ue=H.dataset.role,ne=(x[ue]||[]).find(Ve=>Ve.cardId===Z);if(!ne||ne.used)return;const Me=ve.includes(Z);if(T&&!["MIL","ATT"].includes(ue)&&!Me)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const Ge=p["selected_"+o],Ke=Ge.findIndex(Ve=>Ve.cardId===Z);Ke>-1?Ge.splice(Ke,1):Ge.length<3&&Ge.push({...ne,_role:ue}),w()})}),e.querySelectorAll(".pvp-sub-btn").forEach(H=>{H.addEventListener("click",()=>ee())}),(Ct=e.querySelector("#pvp-sub-open"))==null||Ct.addEventListener("click",()=>ee()),e.querySelectorAll(".pvp-gc-mini").forEach(H=>{H.addEventListener("click",()=>ie(H.dataset.gcId,H.dataset.gcType))}),(Bt=e.querySelector("#pvp-boost-card"))==null||Bt.addEventListener("click",()=>ae()),(Ft=e.querySelector("#pvp-action"))==null||Ft.addEventListener("click",()=>{T?k():F&&G()}),(Dt=e.querySelector("#pvp-quit"))==null||Dt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&D()}),(Gt=e.querySelector("#pvp-view-opp"))==null||Gt.addEventListener("click",()=>be()),(qt=e.querySelector("#pvp-toggle-history"))==null||qt.addEventListener("click",()=>L()),A&&(clearInterval(A),A=null),(T||F)&&!y){let H=30,Z=!1;const ue=()=>document.getElementById("pvp-timer"),ne=()=>{ue()&&(ue().textContent=H+"s",ue().style.color=Z?"#ff4444":"#fff")};ne(),A=setInterval(()=>{H--,H<0?Z?(clearInterval(A),A=null,D()):(Z=!0,H=15,ne()):ne()},1e3)}}function b(){ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Qe(p[n+"Team"],p[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await $({phase:"midfield"})},5e3)}let P=!1;function R(){if(P)return;const x=p[o+"Team"].MIL||[],m=p[n+"Team"].MIL||[];function I(Q){return Q.reduce((X,re)=>X+le(re,"MIL"),0)}function j(Q){let X=0;for(let re=0;re<Q.length-1;re++){const se=Ce(Q[re],Q[re+1]);se==="#00ff88"?X+=2:se==="#FFD700"&&(X+=1)}return X}const h=I(x)+j(x),z=I(m)+j(m),T=h>=z;function F(Q,X,re){return`<div id="duel-row-${re}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${X}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Q.map((se,ve)=>{const xe=ve<Q.length-1?Ce(se,Q[ve+1]):null,ye=!xe||xe==="#ff3333"||xe==="#cc2222",pe=xe==="#00ff88"?"+2":xe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${re}" data-idx="${ve}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${ke({...se,note:le(se,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ve<Q.length-1?`<div class="duel-link duel-link-${re}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":xe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${xe}`}">
              ${pe?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${xe}">${pe}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${re}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${I(Q)} + ${j(Q)} liens = <b style="color:#fff">${I(Q)+j(Q)}</b>
        </div>
      </div>`}ze(e),e.innerHTML=`
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
      ${F(x,p[o+"Name"],"me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${F(m,p[n+"Name"],"opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const q=(Q,X)=>e.querySelectorAll(Q).forEach((re,se)=>{setTimeout(()=>{re.style.opacity="1",re.style.transform="translateY(0) scale(1)"},X+se*90)});q(".duel-card-me",150),q(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Q,X)=>setTimeout(()=>{Q.style.opacity="1"},X*70)),900),setTimeout(()=>{const Q=e.querySelector("#pvp-vs");Q&&(Q.style.opacity="1",Q.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(X=>X.style.opacity="1")},1250);function S(Q,X,re){const se=document.getElementById(Q);if(!se)return;const ve=performance.now(),xe=ye=>{const pe=Math.min(1,(ye-ve)/re);se.textContent=Math.round(X*(1-Math.pow(1-pe,3))),pe<1?requestAnimationFrame(xe):se.textContent=X};requestAnimationFrame(xe)}setTimeout(()=>{S("pvp-score-me",h,800),S("pvp-score-opp",z,800)},1500);const O=p.p1Team.MIL||[],K=p.p2Team.MIL||[],te=I(O)+j(O),oe=I(K)+j(K),ge=te>=oe?"p1":"p2";let ce=p.boostValue;ce==null&&(ce=mi(),p.boostValue=ce,p.boostOwner=ge,p.boostUsed=!1),P=!0,setTimeout(()=>{const Q=e.querySelector("#duel-row-"+(T?"me":"opp")),X=e.querySelector("#duel-row-"+(T?"opp":"me")),re=document.getElementById("pvp-score-me"),se=document.getElementById("pvp-score-opp"),ve=T?re:se,xe=T?se:re;ve&&(ve.style.fontSize="80px",ve.style.color=T?"#FFD700":"#ff6b6b",ve.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),xe&&(xe.style.opacity="0.25"),setTimeout(()=>{Q&&(Q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Q.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),X&&(X.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var we;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const pe=p.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ce+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",$e=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+p[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+pe+$e,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(we=document.getElementById("pvp-start-match"))==null||we.addEventListener("click",async()=>{const _e=ge;await $({phase:_e+"-attack",attacker:_e,round:1,boostValue:ce,boostUsed:!1,boostOwner:_e})})},600)},700)},2800)}function W(x,m,I,j,h){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const T=Array.from({length:10},(O,K)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${K%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][K%8]}</div>`).join(""),F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};z.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${T}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${j?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${m} – ${I}
      </div>
      ${x!=null&&x.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${x.map(O=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${F[O.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${O.portrait?`<img src="${O.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(O.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(z);let q=!1;const S=()=>{q||(q=!0,z.remove(),setTimeout(()=>h(),50))};z.addEventListener("click",S),setTimeout(S,3500)}function ie(x,m){var te,oe,ge,ce;const j=(p["gcCardsFull_"+o]||[]).find(Q=>Q.id===x),h=j==null?void 0:j._gcDef,z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",T={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",F=(h==null?void 0:h.name)||m,q=(h==null?void 0:h.effect)||((te=Ee[m])==null?void 0:te.desc)||"Carte spéciale.",S=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,O=((oe=Ee[m])==null?void 0:oe.icon)||"⚡",K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",K.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${T};background:${z};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${T}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${F.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${F}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${O}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${q}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(K),(ge=K.querySelector("#pvp-gc-back"))==null||ge.addEventListener("click",()=>K.remove()),(ce=K.querySelector("#pvp-gc-use"))==null||ce.addEventListener("click",()=>{K.remove(),J(x,m)})}function ae(){var j;const x=p[o+"Team"],m=Object.entries(x).flatMap(([h,z])=>(z||[]).filter(T=>!T.used).map(T=>({...T,_line:h})));if(!m.length)return;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",I.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(h=>{const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",T=le(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${z};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(I),(j=I.querySelector("#bp-close"))==null||j.addEventListener("click",()=>I.remove()),I.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const z=h.dataset.cid,T=m.find(q=>q.cardId===z);if(!T)return;const F=(x[T._line]||[]).find(q=>q.cardId===z);F&&(F.boost=(F.boost||0)+p.boostValue),I.remove(),await $({[o+"Team"]:x,boostUsed:!0})})})}function ee(){if(!(p.phase===o+"-attack")){c("Remplacement uniquement avant votre attaque","warning");return}const m=p[o+"Team"],I=p["usedSubIds_"+o]||[],j=p.maxSubs||3;if(I.length>=j){c(`Maximum ${j} remplacements atteint`,"warning");return}const h=Object.entries(m).flatMap(([K,te])=>(te||[]).filter(oe=>oe.used).map(oe=>({...oe,_line:K}))),z=(p[o+"Subs"]||[]).filter(K=>!I.includes(K.cardId));if(!h.length){c("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){c("Aucun remplaçant disponible","warning");return}let T=0,F=0,q=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function O(){var X,re,se,ve,xe,ye;const K=h[T],te=z[F],oe=Math.min(130,Math.round((window.innerWidth-90)/2)),ge=Math.round(oe*1.35),ce=pe=>`background:rgba(255,255,255,0.12);border:none;color:${pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${pe?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${I.length}/${j})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ce(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${te?ke({...te,used:!1,boost:0},oe,ge):"<div>—</div>"}</div>
          <button id="pin-down" style="${ce(F>=z.length-1)}" ${F>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ce(T===0)}" ${T===0?"disabled":""}>▲</button>
          <div>${K?ke({...K,used:!1,boost:0},oe,ge):"<div>—</div>"}</div>
          <button id="pout-down" style="${ce(T>=h.length-1)}" ${T>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${T+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(X=S.querySelector("#psub-close"))==null||X.addEventListener("click",()=>S.remove()),(re=S.querySelector("#pout-up"))==null||re.addEventListener("click",()=>{T>0&&(T--,O())}),(se=S.querySelector("#pout-down"))==null||se.addEventListener("click",()=>{T<h.length-1&&(T++,O())}),(ve=S.querySelector("#pin-up"))==null||ve.addEventListener("click",()=>{F>0&&(F--,O())}),(xe=S.querySelector("#pin-down"))==null||xe.addEventListener("click",()=>{F<z.length-1&&(F++,O())});const Q=(pe,$e,we,_e)=>{const Te=S.querySelector("#"+pe);if(!Te)return;let Be=0;Te.addEventListener("touchstart",Ie=>{Be=Ie.touches[0].clientY},{passive:!0}),Te.addEventListener("touchend",Ie=>{const Le=Ie.changedTouches[0].clientY-Be;if(Math.abs(Le)<30)return;const Fe=$e();Le<0&&Fe<_e-1?(we(Fe+1),O()):Le>0&&Fe>0&&(we(Fe-1),O())},{passive:!0})};Q("pin-panel",()=>F,pe=>F=pe,z.length),Q("pout-panel",()=>T,pe=>T=pe,h.length),(ye=S.querySelector("#psub-confirm"))==null||ye.addEventListener("click",async pe=>{if(pe.preventDefault(),pe.stopPropagation(),q)return;q=!0;const $e=h[T],we=z[F];if(!$e||!we)return;const _e=$e._line,Te=(m[_e]||[]).findIndex(Le=>Le.cardId===$e.cardId);if(Te===-1){c("Erreur : joueur introuvable","error"),S.remove();return}const Be={...we,_line:_e,position:$e.position,used:!1,boost:0};m[_e].splice(Te,1,Be);const Ie=[...I,we.cardId];S.remove(),me($e,we,async()=>{await $({[o+"Team"]:m,[n+"Team"]:p[n+"Team"],["usedSubIds_"+o]:Ie})})})}document.body.appendChild(S),O()}function me(x,m,I){const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const z=(q,S,O)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${O}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${j[q.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${he(q)?`<img src="${he(q)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(q.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${z(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${z(x,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let T=!1;const F=()=>{T||(T=!0,h.remove(),setTimeout(()=>I(),50))};h.addEventListener("click",F),setTimeout(F,2200)}function be(){var m;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",x.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Qe(p[n+"Team"],p[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(x),(m=x.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>x.remove())}function L(){var I;const x=p.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${x.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...x].reverse().map(j=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${j.type==="goal"?"#FFD700":j.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${j.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(m),(I=m.querySelector("#pvp-hist-close"))==null||I.addEventListener("click",()=>m.remove())}async function k(){const x=p[o+"Team"],m=!["GK","DEF","MIL","ATT"].some(z=>(p[n+"Team"][z]||[]).some(T=>!T.used)),I=(p["selected_"+o]||[]).map(z=>{const T=(x[z._role]||[]).find(q=>q.cardId===z.cardId)||z,F=m&&["GK","DEF"].includes(z._role);return{...T,_line:z._role,...F?{note_a:Math.max(1,Number(T.note_a)||0)}:{}}});if(!I.length)return;const j=Et(I,p.modifiers[o]||{});I.forEach(z=>{const T=(x[z._role]||[]).find(F=>F.cardId===z.cardId);T&&(T.used=!0)}),p["selected_"+o]=[],w();const h=[...p.log||[]];if(m){const z=(p[o+"Score"]||0)+1,T=I.map(K=>({name:K.name,note:le(K,K._line||"ATT"),portrait:he(K),job:K.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:T,homeTotal:j.total,aiTotal:0});const F=(p.round||0)+1,q=o==="p1"?"p2":"p1",S={...p,[o+"Team"]:x,[o+"Score"]:z},O=N(S);M.add(F),W(T,z,p[n+"Score"]||0,!0,async()=>{await $({[o+"Team"]:x,[o+"Score"]:z,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:O?"finished":q+"-attack",attacker:q,round:F,log:h}),O&&await C.from("matches").update({status:"finished"}).eq("id",i)});return}h.push({type:"duel",text:`⚔️ ${p[o+"Name"]} attaque (${j.total})`,players:I,total:j.total,side:o}),await $({[o+"Team"]:x,[n+"Team"]:p[n+"Team"],pendingAttack:{...j,players:I,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:n+"-defense",log:h})}async function G(){const x=p[o+"Team"],m=(p["selected_"+o]||[]).map(X=>({...(x[X._role]||[]).find(se=>se.cardId===X.cardId)||X,_line:X._role})),I=Tt(m,p.modifiers[o]||{});m.forEach(X=>{const re=(x[X._role]||[]).find(se=>se.cardId===X.cardId);re&&(re.used=!0)}),p["selected_"+o]=[],w();const j=At(p.pendingAttack.total,I.total,p.modifiers[o]||{}),h=p.pendingAttack.side,z=j==="attack"||(j==null?void 0:j.goal),T=h==="p1"?"p2":"p1",F=(p.round||0)+1,q=(p.pendingAttack.players||[]).map(X=>({name:X.name,note:le(X,X._line||"ATT"),portrait:he(X),job:X.job})),S=[...p.log||[]];S.push({type:"duel",isGoal:z,homeScored:z&&h===o,text:z?`⚽ BUT de ${p[h+"Name"]} ! (${p.pendingAttack.total} vs ${I.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${I.total})`,homePlayers:q,aiPlayers:m.map(X=>({name:X.name,note:le(X,X._line||"DEF"),portrait:he(X),job:X.job})),homeTotal:p.pendingAttack.total,aiTotal:I.total});const O=z?(p[h+"Score"]||0)+1:p[h+"Score"]||0,K={...p,[o+"Team"]:x,[h+"Score"]:O},te=N(K),oe=K[T+"Team"],ce=!["GK","DEF","MIL","ATT"].some(X=>(oe[X]||[]).some(re=>!re.used))||te?"finished":T+"-attack",Q=async()=>{await $({[o+"Team"]:x,[n+"Team"]:p[n+"Team"],[h+"Score"]:O,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:ce,attacker:T,round:F,log:S}),(ce==="finished"||te)&&await C.from("matches").update({status:"finished"}).eq("id",i)};if(z){const X=h===o,re=X?O:p[o+"Score"]||0,se=X?p[n+"Score"]||0:O;M.add(F),W(q,re,se,X,Q)}else await Q()}function N(x){const m=["MIL","ATT","GK","DEF"].some(j=>(x.p1Team[j]||[]).some(h=>!h.used)),I=["MIL","ATT","GK","DEF"].some(j=>(x.p2Team[j]||[]).some(h=>!h.used));return!m&&!I}function V(){var h;const x=p[o+"Score"],m=p[n+"Score"],I=x>m,j=x===m;ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${I?"🏆":j?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${I?"Victoire !":j?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${x} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{C.removeChannel(B)}catch{}Ae(e),l("home")})}w()}const Co={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Bo(e,t){const{state:i,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await zt(e,t)}async function zt(e,t){const{state:i,toast:r}=t,{data:d}=await C.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await C.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  `;function c(o){const n=document.getElementById("mkt-content"),u=o==="buy"?a:l;if(u.length===0){n.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=o==="mine"?[...u].sort((g,E)=>g.status!==E.status?g.status==="active"?-1:1:new Date(E.listed_at)-new Date(g.listed_at)):u;n.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(g=>{var M,v,B,$;const E=(M=g.card)==null?void 0:M.player;if(!E)return"";const p=E.job==="GK"?E.note_g:E.job==="DEF"?E.note_d:E.job==="MIL"?E.note_m:E.note_a,y=Co[E.rarity],A=(i.profile.credits||0)>=g.price,_=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Go(E.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${y};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${E.firstname} ${E.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${E.country_code} · ${((v=E.clubs)==null?void 0:v.encoded_name)||"—"} · ${E.rarity} · ${E.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((B=g.seller)==null?void 0:B.pseudo)||"—"}</div>`:_?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${(($=g.buyer)==null?void 0:$.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${A?"":"disabled"} style="margin-top:4px">${A?"Acheter":"Trop cher"}</button>`:_?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,n.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>Fo(g.dataset.buy,u,e,t))}),n.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>Do(g.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(n=>{const u=n===o;n.style.background=u?"var(--green)":"#fff",n.style.color=u?"#fff":"var(--gray-600)",n.style.borderColor=u?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function Fo(e,t,i,r){var u;const{state:d,toast:s}=r,a=t.find(f=>f.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(u=a.card)==null?void 0:u.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const n=document.querySelector(`[data-buy="${e}"]`);n&&(n.disabled=!0,n.textContent="⏳");try{const{data:f,error:g}=await C.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(g)throw new Error(g.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");d.profile.credits=c-l;const E=document.querySelector("[data-credits]")||document.querySelector(".credits-display");E&&(E.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),zt(i,r)}catch(f){s("❌ "+f.message,"error"),n&&(n.disabled=!1,n.textContent="Acheter")}}async function Do(e,t,i){const{toast:r}=i,{data:d}=await C.from("market_listings").select("card_id").eq("id",e).single();await C.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await C.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),r("Annonce retirée","success"),zt(t,i)}function Go(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function qo(e,{state:t,navigate:i,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await C.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function Ro(e,{state:t,navigate:i,toast:r}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await C.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(n=>n.status==="finished"),c=(s||[]).filter(n=>n.status==="in_progress");function o(n){const u=n.home_id===d.id;u?n.home_score:n.away_score,u?n.away_score:n.home_score;const f=n.winner_id===d.id,g=n.home_score===n.away_score&&n.status==="finished",E=n.status!=="finished"?"…":g?"N":f?"V":"D",p=n.status!=="finished"||g?"#888":f?"#1A6B3C":"#c0392b";let y=a[n.mode]||n.mode;n.away_id===null&&!y.startsWith("IA")&&(y="IA");const _=n.home_id===d.id?n.away:n.home;let M;n.away_id===null?M=y:_?M=`${_.club_name||_.pseudo} (${_.pseudo})`:M="Adversaire";let v="";n.status==="in_progress"&&Date.now()-new Date(n.created_at).getTime()>3600*1e3&&(v=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const B=new Date(n.created_at),$=B.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+B.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=n.status==="finished"?`${n.home_score} - ${n.away_score}`:`${n.home_score||0} - ${n.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${M}${v}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y} · ${$}${n.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${E}</span>
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
  </div>`}Ti(Ii);const de={user:null,profile:null,page:"home",params:{}};function nt(e,t="info",i=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},i))}function No(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function $t(){document.getElementById("modal-overlay").classList.add("hidden")}async function rt(){if(!de.user)return;const{data:e}=await C.from("users").select("*").eq("id",de.user.id).single();e&&(de.profile=e)}const St="mw_theme";function ut(){return localStorage.getItem(St)||"light"}function Oo(e){var t;localStorage.setItem(St,e),_t(e),(t=de.profile)!=null&&t.id&&C.from("users").update({theme:e}).eq("id",de.profile.id).then(()=>{})}function _t(e){document.documentElement.setAttribute("data-theme",e)}function at(e,t={}){de.page=e,de.params=t,wi()}async function wi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(r=>{r.classList.toggle("active",r.dataset.page===de.page)});const t=document.getElementById("nav-credits");t&&de.profile&&(t.textContent=`💰 ${(de.profile.credits||0).toLocaleString("fr")}`);const i={state:de,navigate:at,toast:nt,openModal:No,closeModal:$t,refreshProfile:rt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',de.page){case"home":await Vt(e,i);break;case"collection":await Fi(e,i);break;case"decks":await yt(e,i);break;case"boosters":await Qi(e,i);break;case"match":{(de.params&&de.params.matchMode||"vs_ai_easy")==="random"?await zo(e,i):await mo(e,i);break}case"market":await Bo(e,i);break;case"rankings":await qo(e,i);break;case"matches":await Ro(e,i);break;default:await Vt(e,i)}}function Po(){const e=document.getElementById("app"),t=de.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",d=>{d.preventDefault(),at(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>at("home")),document.getElementById("nav-credits").addEventListener("click",()=>at("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=ut()==="dark"?"light":"dark";Oo(d),oi(d)}),oi(ut())}function oi(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Ho(){_t(ut()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&$t()}),document.getElementById("modal-close").addEventListener("click",$t);const{data:{session:e}}=await C.auth.getSession();if(!e){ri(),Ut(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:nt});return}de.user=e.user,await rt(),ri();try{const{data:t}=await C.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(r=>{i[r.formation]=r.links}),Ai(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!de.profile){Li(document.getElementById("app"),{state:de,navigate:async()=>{await rt(),ni()},toast:nt,refreshProfile:rt});return}de.profile.theme&&de.profile.theme!==ut()&&(localStorage.setItem(St,de.profile.theme),_t(de.profile.theme)),ni(),C.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(de.user=null,de.profile=null,document.getElementById("app").innerHTML="",Ut(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:nt}))})}function Uo(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function gt(){const e=document.getElementById("app");e&&(e.style.height=Uo()+"px")}window.addEventListener("resize",gt);window.addEventListener("orientationchange",()=>setTimeout(gt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",gt);function ni(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",gt(),Po(),wi()}function ri(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function $i(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}Ho().catch(e=>{console.error("Échec du démarrage:",e),$i()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&$i("Le serveur met trop de temps à répondre.")},12e3);
