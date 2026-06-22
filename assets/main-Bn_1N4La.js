import{s as S,F as xt,b as Ue,c as ei,l as Ee,d as $i}from"./formation-links-CDBKB_z4.js";function qt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await S.auth.signInWithPassword({email:n,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await S.auth.signUp({email:n,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function _i(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var _;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),p=((_=document.getElementById("setup-club"))==null?void 0:_.value)||"MW",g=p.trim().split(" ").filter(Boolean),m=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():p.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),r&&(r.textContent=m,r.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await S.from("users").select("id").eq("pseudo",o).maybeSingle();if(p){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await S.from("users").select("id").eq("club_name",o).maybeSingle();if(p){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),g=document.getElementById("step3-finish");p.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:m}=await S.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(m)throw m;await ki(t.user.id),await d(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){p.textContent=m.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function ki(e){const{data:t}=await S.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const p=Rt([...d]).slice(0,3);o.push(...p)}else o=Rt([...i]).slice(0,4);o.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await S.from("cards").insert(s),await S.from("users").update({first_booster_opened:!0}).eq("id",e)}function Rt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const Ei="2026.06.22-2328";async function Nt(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ei}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){Ti(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await S.auth.signOut(),window.location.reload()}))}function Ti(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const he={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function oe(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ot=["ATT","MIL","DEF","GK"];function ti(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Ot.indexOf(s._line),r=Ot.indexOf(a._line),p=Math.abs(o-r)===1;(s._line===a._line&&c||l&&p)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function yt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=ti(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function ht(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),n=ti(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function bt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function ii(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const d=[...n].sort((a,l)=>{const c=t==="attack"?oe(a,"ATT"):a._line==="GK"?oe(a,"GK"):oe(a,"DEF");return(t==="attack"?oe(l,"ATT"):l._line==="GK"?oe(l,"GK"):oe(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Ai(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const oi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ze={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ve=["GK","DEF","MIL","ATT"],Ii=["Tous","GK","DEF","MIL","ATT"],Li={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},vt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ni(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Oe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function lt(e,t=""){var p,g;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=Ze[n],s=oi[i.rarity]||"#ccc",a=Oe(i,n),l=i.job2?Oe(i,i.job2):null,c=i.job2?Ze[i.job2]:null,o=ni(i),r=vt[i.country_code]||i.country_code||"";return`
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
  </div>`}function Pt(e){const t=e.job||"ATT",i=Oe(e,t),n=vt[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Mi(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await S.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await S.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(z=>z.card_type==="player"&&z.player),r=(l||[]).filter(z=>z.card_type==="game_changer"),p=(l||[]).filter(z=>z.card_type==="formation"),{data:g}=await S.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(g||[]).forEach(z=>{m[z.name]=z});const _=Object.keys(xt),u=Object.keys(he),h={};o.forEach(z=>{const T=z.player.id;h[T]=(h[T]||0)+1}),new Set(Object.keys(h).map(z=>String(z)));const I=new Set(p.map(z=>z.formation)),$=new Set(r.map(z=>z.gc_type));let M="player",v="Tous",L="",k=!1;function G(){return[...o].sort((z,T)=>{const f=Ve.indexOf(z.player.job),x=Ve.indexOf(T.player.job);return f!==x?f-x:(z.player.surname_encoded||"").localeCompare(T.player.surname_encoded||"")})}function P(){return[...c||[]].sort((z,T)=>{const f=Ve.indexOf(z.job),x=Ve.indexOf(T.job);return f!==x?f-x:(z.surname_encoded||"").localeCompare(T.surname_encoded||"")})}function U(){return G().filter(z=>{const T=z.player,f=v==="Tous"||T.job===v,x=!L||`${T.firstname} ${T.surname_encoded}`.toLowerCase().includes(L);return f&&x})}function w(){return P().filter(z=>{const T=v==="Tous"||z.job===v,f=!L||`${z.firstname} ${z.surname_encoded}`.toLowerCase().includes(L);return T&&f})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="gc"?"var(--green)":"transparent"};
        color:${M==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function N(){const z=document.getElementById("col-filters");z&&(M==="player"?(z.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${L}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Ii.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===v?"var(--green)":"var(--gray-200)"};
                background:${T===v?"var(--green)":"#fff"};
                color:${T===v?"#fff":"var(--gray-600)"}">
              ${T}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${k?"var(--yellow)":"var(--gray-200)"};
              background:${k?"var(--yellow)":"#fff"};
              color:${k?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${k?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{L=T.target.value.toLowerCase(),E()}),e.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{v=T.dataset.job,N(),E()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{k=!k,N(),E()})):(z.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${k?"var(--yellow)":"var(--gray-200)"};
              background:${k?"var(--yellow)":"#fff"};
              color:${k?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${k?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{k=!k,N(),E()})))}function E(){const z=document.getElementById("col-grid");z&&(M==="player"?Z(z):M==="formation"?pe(z):Q(z))}function H(z,T,f,x,b){b=b||"#7a28b8";const A=document.getElementById("col-grid"),y=document.getElementById("col-big");if(!A||!y)return;var F=0;function j(){y.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+T(z[F])+"</div>";var D=y.querySelector("[data-card-id],[data-form-id],[data-gc-id]");D&&D.addEventListener("click",function(){x(z[F])}),requestAnimationFrame(function(){var B=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!B||!y)){var C=y.clientHeight-8,O=y.clientWidth-24,K=B.offsetHeight,X=B.offsetWidth;if(K>0&&X>0&&C>40){var re=Math.min(C/K,O/X,1);B.style.transform="scale("+re.toFixed(3)+")",B.style.transformOrigin="top center"}}}),A.innerHTML=z.map(function(B,C){return'<div class="col-mini-item" data-idx="'+C+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(C===F?b:"transparent")+';transition:border-color .15s;overflow:hidden">'+f(B,C===F)+"</div>"}).join(""),A.querySelectorAll(".col-mini-item").forEach(function(B){B.addEventListener("click",function(){F=Number(B.dataset.idx),j(),B.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}j()}function q(z){var T=.54,f=Math.round(140*T),x=Math.round(310*T),b;if(!z||z._fake){var A=z?z.player:null;if(!A)return"";b=Pt(A)}else b=lt(z,"");return'<div style="width:'+f+"px;height:"+x+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+T+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+b+"</div></div>"}function V(z,T,f){T=T||100,f=f||140;var x=Ue[z]||{},b={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},A=Math.max(3,Math.round(T*.06)),y=Object.entries(x).map(function(j){var D=j[0],B=j[1],C=D.replace(/\d+$/,""),O=b[C]||"#888",K=Math.round(B.x*T),X=Math.round(B.y*f);return'<circle cx="'+K+'" cy="'+X+'" r="'+A+'" fill="'+O+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),F=Math.max(1,Math.round(T/50));return'<svg viewBox="0 0 '+T+" "+f+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+T+'" height="'+f+'" fill="#1A6B3C"/><rect x="'+Math.round(T*.2)+'" y="'+Math.round(f*.02)+'" width="'+Math.round(T*.6)+'" height="'+Math.round(f*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+F+'"/><line x1="0" y1="'+Math.round(f*.5)+'" x2="'+T+'" y2="'+Math.round(f*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+F+'"/><ellipse cx="'+Math.round(T*.5)+'" cy="'+Math.round(f*.5)+'" rx="'+Math.round(T*.18)+'" ry="'+Math.round(f*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+F+'"/><rect x="'+Math.round(T*.2)+'" y="'+Math.round(f*.82)+'" width="'+Math.round(T*.6)+'" height="'+Math.round(f*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+F+'"/>'+y+"</svg>"}function te(z,T,f){var x=f>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+f+"</div>":"",b=T?'data-form-id="'+T.id+'"':"",A=z.length>7?14:z.length>5?16:19,y=!!T;return"<div "+b+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(y?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(y?"":"filter:grayscale(1);opacity:0.5")+'">'+x+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(y?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+A+"px;font-weight:900;color:"+(y?"#1A6B3C":"#aaa")+';line-height:1">'+z+'</div></div><div style="flex:1;overflow:hidden;background:'+(y?"#1A6B3C":"#ccc")+'">'+V(z,140,220)+"</div></div>"}function ne(z,T){var f=.54,x=Math.round(140*f),b=Math.round(305*f),A=Math.round(b*.22),y=b-A,F=z.length>7?5:7,j=V(z,x,y),D=T?"1.5px solid #2a7a40":"1px solid #ddd",B=T?"":"filter:grayscale(1);opacity:0.45;",C=T?"#1A6B3C":"#bbb",O="#fff";return'<div style="width:'+x+"px;height:"+b+"px;border-radius:6px;border:"+D+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+B+'"><div style="height:'+A+"px;background:"+C+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+F+"px;font-weight:900;color:"+O+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(x-4)+'px">'+z+'</span></div><div style="height:'+y+'px;overflow:hidden;flex-shrink:0">'+j+"</div></div>"}function Z(z){if(k){const T=w();if(!T.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const f=T.map(x=>o.find(b=>b.player.id===x.id)||{_fake:!0,player:x,id:"fake-"+x.id});H(f,x=>x._fake?Pt(x.player):lt(x,""),x=>x._fake?q({player:x.player,id:"x",_fake:!0}):q(x),x=>{x._fake||Ht(x,o,h,t)},"#1A6B3C")}else{const T=U();if(!T.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const f={},x=[];T.forEach(b=>{f[b.player.id]||(f[b.player.id]=!0,x.push(b))}),H(x,b=>{const A=h[b.player.id]||1,y=A>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${A}</div>`:"",j=o.filter(D=>D.player.id===b.player.id&&D.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return lt(b,y+j)},b=>q(b),b=>Ht(b,o,h,t),"#1A6B3C")}}function pe(z){const T=k?_:[...I];if(!T.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const f=T.map(x=>({formation:x,card:p.find(b=>b.formation===x)||null,owned:I.has(x)}));H(f,({formation:x,card:b,owned:A})=>te(x,A?b:null,A?p.filter(y=>y.formation===x).length:0),({formation:x,owned:b})=>ne(x,b),({card:x,owned:b})=>{b&&x&&Si(x,p,t,s)},"#1A6B3C")}function Q(z){const T=Object.keys(m),f=k?T.length?T:u:[...$];if(!f.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const x=f.map(b=>({type:b,gc:he[b]||{icon:"⚡",desc:""},def:m[b]||null,owned:$.has(b),card:r.find(A=>A.gc_type===b)||null}));H(x,({type:b,gc:A,def:y,owned:F,card:j})=>{const D=F?r.filter(Y=>Y.gc_type===b).length:0,B=D>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${D}</div>`:"",C=(y==null?void 0:y.gc_type)==="ultra_game_changer",O={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},K={purple:"#b06ce0",light_blue:"#00d4ef"},X=O[y==null?void 0:y.color]||O.purple,re=K[y==null?void 0:y.color]||K.purple,se=(y==null?void 0:y.effect)||A.desc||"",J=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null;return F&&j?`<div data-gc-id="${j.id}" data-gc-type="${b}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${re};background:${X};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${re}66;cursor:pointer">
          ${B}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${b.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${C?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${J?`<img src="${J}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${A.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${se.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${b}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${A.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:b,gc:A,def:y,owned:F})=>F?(()=>{const j=Math.round(75.60000000000001),D=Math.round(310*.54),B=Math.round(D*.65),C=Math.round(D*.18),O={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},K={purple:"#9b59b6",light_blue:"#00bcd4"},X=O[y==null?void 0:y.color]||O.purple,re=K[y==null?void 0:y.color]||K.purple,se=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null;return`<div style="width:${j}px;height:${D}px;border-radius:8px;background:${X};border:1px solid ${re};display:flex;flex-direction:column;overflow:hidden"><div style="height:${C}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${j-6}px">${b}</span></div><div style="height:${B}px;display:flex;align-items:center;justify-content:center">${se?`<img src="${se}" style="max-width:${j-8}px;max-height:${B-4}px;object-fit:contain">`:`<span style="font-size:24px">${A.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((y==null?void 0:y.effect)||A.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const j=Math.round(75.60000000000001),D=Math.round(310*.54);return`<div style="width:${j}px;height:${D}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${A.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${b}</span></div>`})(),({type:b,owned:A,def:y})=>{A&&zi(b,y,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(z=>{z.addEventListener("click",()=>{M=z.dataset.tab,v="Tous",L="",k=!1,e.querySelectorAll(".col-tab-btn").forEach(T=>{const f=T.dataset.tab===M;T.style.borderBottomColor=f?"var(--green)":"transparent",T.style.color=f?"var(--green)":"var(--gray-600)"}),N(),E()})}),N(),E()}function zi(e,t,i){const n=he[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,p=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const qe=1e3;function Si(e,t,i,n){var u,h,I;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const $=Ue[o]||{},M=xt[o]||[],v=290,L=360,k=20;function G(U){const w=$[U];return w?{x:w.x*v,y:w.y*L}:null}let P=`<svg width="${v}" height="${L}" viewBox="0 0 ${v} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[U,w]of M){const N=G(U),E=G(w);!N||!E||(P+=`<line x1="${N.x}" y1="${N.y}" x2="${E.x}" y2="${E.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const U of Object.keys($)){const w=G(U);if(!w)continue;const N=U.replace(/\d+/,""),E=r[N]||"#555";P+=`<circle cx="${w.x}" cy="${w.y}" r="${k}" fill="${E}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,P+=`<text x="${w.x}" y="${w.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${N}</text>`}return P+="</svg>",P}const g=t.filter($=>$.formation===o),m=g.length,_=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${qe.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${_?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${qe}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(u=document.getElementById("direct-sell-form-btn"))==null||u.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${qe.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const $=g.find(v=>!v.is_for_sale)||g[0];if(!$){s("Aucune carte à vendre","error");return}const{error:M}=await S.from("cards").delete().eq("id",$.id);if(M){s(M.message,"error");return}await S.from("users").update({credits:(d.profile.credits||0)+qe}).eq("id",d.profile.id),await c(),s(`+${qe.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const $=parseInt(document.getElementById("sell-price-form").value);if(!$||$<1){s("Prix invalide","error");return}await S.from("cards").update({is_for_sale:!0,sale_price:$}).eq("id",e.id),await S.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:$}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(I=document.getElementById("cancel-sell-form-btn"))==null||I.addEventListener("click",async()=>{await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await S.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function Ht(e,t,i,n){var P,U,w,N,E,H;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=n,r=e.player,p=t.filter(q=>q.player.id===r.id),g=p.length,m=Li[r.rarity]||1e3,_=r.rarity!=="legende",u=ni(r),h=Oe(r,r.job),I=r.job2?Oe(r,r.job2):null,$=Ze[r.job]||"#1A6B3C",M=r.job2?Ze[r.job2]:null,v=oi[r.rarity]||"#ccc",L=vt[r.country_code]||r.country_code||"",{data:k}=await S.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),G=k&&k.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${k.map(q=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${q.club_name} <span style="color:var(--gray-600)">(${q.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${q.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${q.source==="booster"?"Booster":q.price?q.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${v};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${$}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${$}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${I!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${M}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${I}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${L}</div>
            ${(P=r.clubs)!=null&&P.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((U=r.clubs)==null?void 0:U.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${v}">${r.rarity.toUpperCase()}</div>
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
    ${G}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${m.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${_&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(w=document.getElementById("close-detail"))==null||w.addEventListener("click",l),(N=document.getElementById("direct-sell-btn"))==null||N.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${m.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const q=p.find(te=>!te.is_for_sale)||p[0];if(!q){s("Aucune carte à vendre","error");return}const{error:V}=await S.from("cards").delete().eq("id",q.id);if(V){s(V.message,"error");return}await S.from("users").update({credits:(d.profile.credits||0)+m}).eq("id",d.profile.id),await o(),s(`+${m.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(E=document.getElementById("market-sell-btn"))==null||E.addEventListener("click",async()=>{const q=parseInt(document.getElementById("sell-price").value);if(!q||q<1){s("Prix invalide","error");return}await S.from("cards").update({is_for_sale:!0,sale_price:q}).eq("id",e.id),await S.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:q}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(H=document.getElementById("cancel-sell-btn"))==null||H.addEventListener("click",async()=>{await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await S.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const et={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},_e={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ri(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ai(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function ji(e,t=44,i=58){var m;const n=e?rt(e):null,d=e?ai(e):null,s=ri(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=_e[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),p=Math.round(i*.25),g=i-r-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(m=e==null?void 0:e.clubs)!=null&&m.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function dt(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await S.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await S.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Ut(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Ut(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await S.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),dt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await S.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await S.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),dt(e,t)})})}async function Ut(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await S.from("decks").select("*").eq("id",e).single(),{data:a}=await S.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(m=>m.card_type==="player"&&m.player),c=(a||[]).filter(m=>m.card_type==="formation"),o=c.map(m=>m.formation).filter(Boolean),{data:r}=await S.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=s.formation||"4-4-2";o.length>0&&!o.includes(p)&&(p=o[0]);const g={deckId:e,name:s.name,formation:p,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(r||[]).forEach(m=>{m.is_starter?g.slots[m.position]=m.card_id:g.subs.includes(m.card_id)||g.subs.push(m.card_id)}),je(t,g,i)}function je(e,t,i){var c;const{navigate:n}=i;et[t.formation];const d=Kt(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(et),l=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${ji(r,44,58)}
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
  </div>`,Ci(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=Kt(t.formation),p={};r.forEach(g=>{t.slots[g]&&(p[g]=t.slots[g])}),t.slots=p,je(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Di(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),je(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Fi(t,e,i)})}function Ci(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const s=Ue[t.formation]||{},a=ei(t.formation)||[],l={};for(const I of i){const $=t.slots[I],M=$?t.playerCards.find(v=>v.id===$):null;l[I]=M?M.player:null}const c=300,o=300,r=48,p=64,g=13,m=16,_=38;function u(I){const $=s[I];return $?{x:$.x*c,y:$.y*o}:null}let h="";for(const[I,$]of a){const M=u(I),v=u($);if(!M||!v)continue;const L=l[I]?{...l[I],club_id:l[I].club_id,country_code:l[I].country_code,rarity:l[I].rarity}:null,k=l[$]?{...l[$],club_id:l[$].club_id,country_code:l[$].country_code,rarity:l[$].rarity}:null,G=Ee(L,k);G==="#ff3333"||G==="#cc2222"?h+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${G}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const I of i){const $=u(I);if(!$)continue;const M=l[I],v=I.replace(/\d+/,""),L=_e[v]||"#555",k=($.x-r/2).toFixed(1),G=($.y-p/2).toFixed(1),P={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[M==null?void 0:M.rarity]||"#aaa";if(M){const U=rt(M),w=ai(M),N=ri(M.country_code),E=Number(v==="GK"?M.note_g:v==="DEF"?M.note_d:v==="MIL"?M.note_m:M.note_a)||0,H=p-g-m;h+=`<defs><clipPath id="dcp-${I}"><rect x="${k}" y="${($.y-p/2+g).toFixed(1)}" width="${r}" height="${H}"/></clipPath></defs>`,h+=`<rect x="${k}" y="${G}" width="${r}" height="${p}" rx="5" fill="${L}"/>`,U&&(h+=`<image href="${U}" x="${k}" y="${($.y-p/2+g).toFixed(1)}" width="${r}" height="${H}" clip-path="url(#dcp-${I})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${k}" y="${G}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${$.x.toFixed(1)}" y="${($.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(M.surname_encoded||"").slice(0,9)}</text>`;const q=($.y+p/2-m).toFixed(1);h+=`<rect x="${k}" y="${q}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,N&&(h+=`<image href="${N}" x="${($.x-21).toFixed(1)}" y="${($.y+p/2-m+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${$.x.toFixed(1)}" y="${($.y+p/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${E}</text>`,w&&(h+=`<image href="${w}" x="${($.x+r/2-14).toFixed(1)}" y="${($.y+p/2-m+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${k}" y="${G}" width="${r}" height="${p}" rx="5" fill="none" stroke="${P}" stroke-width="2"/>`}else h+=`<rect x="${k}" y="${G}" width="${r}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${$.x.toFixed(1)}" y="${$.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${$.x.toFixed(1)}" y="${($.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${v}</text>`;h+=`<rect x="${k}" y="${G}" width="${r}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${I}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-_} ${-_} ${c+_*2} ${o+_*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(I=>{I.addEventListener("click",()=>Bi(I.dataset.pos,t,e,n))})}function Bi(e,t,i,n){var g,m,_;const{openModal:d,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(u=>u.id===l):null;(g=c==null?void 0:c.player)==null||g.id;const o=new Set;Object.entries(t.slots).forEach(([u,h])=>{var $;if(u===e||!h)return;const I=t.playerCards.find(M=>M.id===h);($=I==null?void 0:I.player)!=null&&$.id&&o.add(I.player.id)}),t.subs.forEach(u=>{var I;const h=t.playerCards.find($=>$.id===u);(I=h==null?void 0:h.player)!=null&&I.id&&o.add(h.player.id)});const r=new Set,p=t.playerCards.filter(u=>{const h=u.player;return!(h.job===a||h.job2===a)||o.has(h.id)||r.has(h.id)?!1:(r.add(h.id),!0)});p.sort((u,h)=>{const I=a==="GK"?u.player.note_g:a==="DEF"?u.player.note_d:a==="MIL"?u.player.note_m:u.player.note_a;return(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)-I}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(u=>{var v,L;const h=u.player,I=a==="GK"?h.note_g:a==="DEF"?h.note_d:a==="MIL"?h.note_m:h.note_a,$=rt(h),M={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${u.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${_e[a]}">
            ${$?`<img src="${$}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${_e[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(v=h.clubs)!=null&&v.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((L=h.clubs)==null?void 0:L.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${_e[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${M};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(m=document.getElementById("close-selector"))==null||m.addEventListener("click",s),(_=document.getElementById("remove-player"))==null||_.addEventListener("click",()=>{delete t.slots[e],s(),je(i,t,n)}),document.querySelectorAll(".player-option").forEach(u=>{u.addEventListener("click",()=>{t.slots[e]=u.dataset.cardId,s(),je(i,t,n)})})}function Fi(e,t,i){var c;const{openModal:n,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var p;const r=e.playerCards.find(g=>g.id===o);(p=r==null?void 0:r.player)!=null&&p.id&&s.add(r.player.id)}),e.subs.forEach(o=>{var p;const r=e.playerCards.find(g=>g.id===o);(p=r==null?void 0:r.player)!=null&&p.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var r,p,g;return s.has((r=o.player)==null?void 0:r.id)||a.has((p=o.player)==null?void 0:p.id)?!1:(a.add((g=o.player)==null?void 0:g.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var m;const r=o.player,p=rt(r),g=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${_e[r.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((m=r.clubs)==null?void 0:m.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${_e[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),je(t,e,i)})})}async function Di(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await S.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await S.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await S.from("deck_cards").insert(l);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Kt(e){const t=et[e]||et["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Gi(){const{data:e}=await S.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await S.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function qi(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const si=()=>Object.keys(Ue),Ri=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ct={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ni(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Oi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Pi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Yt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Hi(e){var r,p;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Vt[i],d=Oi[t.rarity]||"#ccc",s=Yt(t,i),a=t.job2?Yt(t,t.job2):null,l=t.job2?Vt[t.job2]:null,c=Ni(t),o=Pi[t.country_code]||t.country_code||"";return`
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
  </div>`}function Ui(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Ki(e,{state:t,navigate:i,toast:n}){var a;const d=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Gi()).map(Ui)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Ri.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Vi(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(r=>r.id===l.dataset.boosterId);to(o)})})}async function Vi(e,{state:t,toast:i,navigate:n,container:d}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await no()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await S.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),l=new Set((s||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Wt(t.profile,e);else{const p=e.type||"player";p==="player"?c=await Xi(t.profile,e.cardCount,e.cost):p==="game_changer"?c=await Ji(t.profile,e.cardCount,e.cost):p==="formation"?c=await Qi(t.profile,e.cost):c=await Wt(t.profile,e)}c.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=a.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=l.has(p.formation))});const{data:o}=await S.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),Zi(c,e,n)}function Yi(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Le(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Wi(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Le(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Le(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Le(n)>=6),i.length||(i=e.filter(n=>Le(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Le(n)>=1&&Le(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Wt(e,t){if(t.cost>0){const{error:n}=await S.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const d=qi(t.rates);if(d){if(d.card_type==="player"){const s=g=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[g]||g,a=d.rarity?s(d.rarity):null;let l=S.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(g=>{const m=Math.max(Number(g.note_g)||0,Number(g.note_d)||0,Number(g.note_m)||0,Number(g.note_a)||0);return(!d.note_min||m>=d.note_min)&&(!d.note_max||m<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:p}=await S.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();p&&(i.push({...p,player:r}),S.rpc("record_transfer",{p_card_id:p.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await S.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await S.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=si(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await S.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function Xi(e,t,i){if(i>0){const{error:o}=await S.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await S.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(o=>o.job==="GK"),s=n.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const r=o===0&&a?d:o===0?s:n,p=Yi(),g=Wi(r,p);g&&l.push(g)}a&&await S.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await S.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{S.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,r)=>({...c[r],player:o}))}async function Ji(e,t,i){const{error:n}=await S.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await S.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(ct).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await S.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const p=d==null?void 0:d.find(g=>g.name===r.gc_type||g.id===r.gc_definition_id);return{...r,_gcDef:p||null}})}async function Qi(e,t){const{error:i}=await S.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=si(),d=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await S.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function Zi(e,t,i){var N;if(!e||e.length===0){const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",E.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(E),(N=E.querySelector("#anim-close-err"))==null||N.addEventListener("click",()=>E.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=E=>E.touches&&E.touches[0]?E.touches[0].clientX:E.clientX;function o(E){d||(l=!0,a.style.opacity="1",r(E))}function r(E){if(!l||d)return;const H=s.getBoundingClientRect(),q=c(E)-H.left,V=Math.max(0,Math.min(1,q/H.width));a.style.width=V*H.width+"px",V>=.82&&g()}function p(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function g(){var H;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(H=document.getElementById("cut-flash"))==null||H.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const E=document.getElementById("cut-hint");E&&(E.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",h(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",p),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",p);let m=0,_=!1;const u=new Set;function h(E){m=E,document.getElementById("reveal-phase").style.display="flex",I(),$(E,0),G()}function I(){const E=document.getElementById("card-dots");E&&(E.innerHTML=e.map((H,q)=>`<div class="card-dot" data-i="${q}" style="width:8px;height:8px;border-radius:50%;background:${q===m?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),E.querySelectorAll(".card-dot").forEach(H=>H.addEventListener("click",()=>v(parseInt(H.dataset.i)))))}function $(E,H){var z;const q=e[E],V=document.getElementById("card-counter"),te=document.getElementById("card-track");V&&(V.textContent=`Carte ${E+1} / ${e.length}`);const ne=q.card_type==="player"&&((z=q.player)==null?void 0:z.rarity)==="legende",Z=!u.has(E);u.add(E);let pe=0;if(q.card_type==="player"&&q.player){const T=q.player,f=T.job||"ATT";pe=Number(f==="GK"?T.note_g:f==="DEF"?T.note_d:f==="MIL"?T.note_m:T.note_a)||0}const Q=T=>{te.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${ne?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${eo(q)}</div>
          ${q.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const f=document.getElementById("current-card-wrap");H!==0?(f.style.transition="none",f.style.transform=`translateX(${H>0?100:-100}%)`,requestAnimationFrame(()=>{f.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",f.style.transform="translateX(0)"})):f.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),T||ne?U():w(),I()};Z&&pe>6&&q.card_type==="player"&&q.player?M(q,()=>Q(!0)):Q(!1)}function M(E,H){var Q;_=!0;const q=E.player,V=`https://flagsapi.com/${q.country_code}/flat/64.png`,te=(Q=q.clubs)==null?void 0:Q.logo_url,ne=document.getElementById("walkout-overlay"),Z=document.getElementById("walkout-stage");if(!ne||!Z){_=!1,H();return}ne.style.display="flex";const pe=()=>{const z=Z.firstElementChild;z&&(z.classList.remove("wo-in"),z.classList.add("wo-out"))};Z.innerHTML=`<img class="wo-in" src="${V}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(pe,2e3),setTimeout(()=>{var z;Z.innerHTML=te?`<img class="wo-in" src="${te}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((z=q.clubs)==null?void 0:z.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(pe,4450),setTimeout(()=>{ne.style.display="none",Z.innerHTML="",_=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),H()},4900)}function v(E){if(_||E<0||E>=e.length||E===m)return;const H=E>m?1:-1;m=E,$(E,H)}function L(){v(m+1)}function k(){v(m-1)}function G(){const E=document.getElementById("card-viewport");if(!E||E._swipeBound)return;E._swipeBound=!0;let H=0,q=0,V=0,te=!1;const ne=T=>T.touches?T.touches[0].clientX:T.clientX,Z=T=>T.touches?T.touches[0].clientY:T.clientY,pe=T=>{te=!0,H=ne(T),q=Z(T),V=0},Q=T=>{if(!te)return;V=ne(T)-H;const f=Z(T)-q;if(Math.abs(V)<Math.abs(f))return;const x=document.getElementById("current-card-wrap");x&&(x.style.transition="none",x.style.transform=`translateX(${V*.6}px) rotate(${V*.02}deg)`)},z=()=>{if(!te)return;te=!1;const T=document.getElementById("current-card-wrap"),f=55;V<=-f&&m<e.length-1?L():V>=f&&m>0?k():T&&(T.style.transition="transform .2s ease",T.style.transform="translateX(0)")};E.addEventListener("pointerdown",pe),E.addEventListener("pointermove",Q),E.addEventListener("pointerup",z),E.addEventListener("pointercancel",z),E.addEventListener("touchstart",pe,{passive:!0}),E.addEventListener("touchmove",Q,{passive:!0}),E.addEventListener("touchend",z),E.addEventListener("click",T=>{if(Math.abs(V)>8)return;const f=E.getBoundingClientRect();T.clientX-f.left>f.width/2?L():k()})}let P=null;function U(){const E=document.getElementById("fireworks-canvas");if(!E)return;E.width=window.innerWidth,E.height=window.innerHeight;const H=E.getContext("2d"),q=[];function V(){const ne=Math.random()*E.width,Z=Math.random()*E.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Q=pe[Math.floor(Math.random()*pe.length)];for(let z=0;z<60;z++){const T=Math.PI*2/60*z,f=2+Math.random()*5;q.push({x:ne,y:Z,vx:Math.cos(T)*f,vy:Math.sin(T)*f,alpha:1,color:Q,size:2+Math.random()*3})}}V(),P=setInterval(V,600);function te(){if(document.getElementById("fireworks-canvas")){H.clearRect(0,0,E.width,E.height);for(let ne=q.length-1;ne>=0;ne--){const Z=q[ne];if(Z.x+=Z.vx,Z.y+=Z.vy+.08,Z.vy*=.98,Z.alpha-=.018,Z.alpha<=0){q.splice(ne,1);continue}H.globalAlpha=Z.alpha,H.fillStyle=Z.color,H.beginPath(),H.arc(Z.x,Z.y,Z.size,0,Math.PI*2),H.fill()}H.globalAlpha=1,(P!==null||q.length>0)&&requestAnimationFrame(te)}}te()}function w(){P!==null&&(clearInterval(P),P=null);const E=document.getElementById("fireworks-canvas");E&&E.getContext("2d").clearRect(0,0,E.width,E.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{w(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{w(),n.remove(),i("boosters")})}function eo(e){var t,i;if(e.card_type==="player"&&e.player)return Hi(e);if(e.card_type==="game_changer"){const n=e._gcDef,d=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,c=a[n==null?void 0:n.color]||a.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=ct[e.gc_type])==null?void 0:t.desc)||"",p=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((i=ct[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function to(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}io()}function io(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const oo="simulation",li="VOTRE_ZONE_ID";function no(){switch(oo){case"propellerads":return ro();case"adsense":return ao();default:return wt()}}function wt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ro(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(wt());window.propeller.push({zone_id:li,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function ao(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(wt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:li,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Ce={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Be={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ke(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function ge(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pt(e,t){var n,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function tt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function di(){const e=Math.random()*100;return e<10?3:e<30?2:1}function it(e,t){const i=Ce[t]||Ce["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=tt(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let r=s.findIndex(p=>p.job===a);if(r===-1&&(r=s.findIndex(p=>p.job2===a)),r===-1&&(r=0),s[r]){const p={...s[r],_line:a};l.push(p),s.splice(r,1)}}const c=tt(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}function $e(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function be(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,i){const d=new Set,s=t.filter(r=>{const p=r.gc_type||r.id;return d.has(p)?!1:(d.add(p),!0)});let a=[];function l(r,p){const g=r._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},_={purple:"#9b59b6",light_blue:"#00bcd4"},u=m[g==null?void 0:g.color]||m.purple,h=_[g==null?void 0:g.color]||_.purple;return`<div class="gc-select-card" data-id="${r.id}"
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
    </div>`}const c=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var p,g,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${s.map(_=>{const u=a.find(h=>h.gc_type===_.gc_type);return l(_,!!u)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(_=>{_.addEventListener("click",()=>{const u=_.dataset.id,h=s.find($=>$.id===u);if(!h)return;const I=a.findIndex($=>$.gc_type===h.gc_type);I>-1?a.splice(I,1):a.length<3&&a.push(h),o()})}),(p=e.querySelector("#gc-launch"))==null||p.addEventListener("click",()=>{r&&c(a)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>c([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function so(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await S.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){ke(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(r=>r.id),{data:l}=await S.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var $,M,v,L,k;const r=s[c],p=(l||[]).filter(G=>G.deck_id===r.id),g=p.filter(G=>{var P;return G.is_starter&&((P=G.card)==null?void 0:P.player)}).map(G=>pt(G.card,G.position)),m=p.find(G=>{var P;return((P=G.card)==null?void 0:P.card_type)==="formation"}),_=r.formation||(($=m==null?void 0:m.card)==null?void 0:$.formation)||"4-4-2",u=g.length>=11?it(g,_):null,h=g.length>=11;$e(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${_} · ${g.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${He(u,_,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((G,P)=>`<div style="width:7px;height:7px;border-radius:50%;background:${P===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const P=e.querySelector(".deck-preview-wrap svg");P&&(P.removeAttribute("width"),P.removeAttribute("height"),P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",P.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(M=document.getElementById("prev-deck"))==null||M.addEventListener("click",()=>{c>0&&(c--,o())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(L=document.getElementById("validate-deck"))==null||L.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:r.id})}),(k=document.getElementById("cancel-deck-select"))==null||k.addEventListener("click",()=>{be(e),d("home")});const I=document.getElementById("deck-swipe-zone");if(I){let G=0,P=0;I.addEventListener("touchstart",U=>{G=U.touches[0].clientX,P=U.touches[0].clientY},{passive:!0}),I.addEventListener("touchend",U=>{const w=U.changedTouches[0].clientX-G,N=U.changedTouches[0].clientY-P;Math.abs(w)<40||Math.abs(w)<Math.abs(N)||(w<0&&c<s.length-1?(c++,o()):w>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function pi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function ve(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ge(e),d=pi(e),s=e._line||e.job||"MIL",a=Be[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(oe(e,s))||0)+(e.boost||0),o=ui(e==null?void 0:e.country_code),r=Math.round(i*.19),p=Math.round(i*.25),g=i-Math.round(i*.19)-Math.round(i*.25),m=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${m}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ut(e==null?void 0:e.country_code)?`<img src="${ut(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${o}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Me(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(d+=ve(s,40,52),a<n.length-1){const l=Ee(s,n[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ut(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ui(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Pe(e,t,i,n,d=310,s=310,a=[]){const l=Ue[t]||{},c=ei(t)||xt[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const M of r)(e[M]||[]).forEach((L,k)=>{o[`${M}${k+1}`]=L});function p(M){const v=l[M];return v?{x:v.x*d,y:v.y*s}:null}let g="";for(const[M,v]of c){const L=p(M),k=p(v);if(!L||!k)continue;const G=o[M],P=o[v],U=Ee(G,P);U==="#00ff88"||U==="#FFD700"?(g+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${U}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${U}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${L.x.toFixed(1)}" y1="${L.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${U}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=48,_=64,u=13,h=16,I={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[M,v]of Object.entries(o)){const L=p(M);if(!L||!v)continue;const k=M.replace(/[0-9]/g,""),G=Be[k]||"#555",P=a.includes(v.cardId),U=i==="attack"&&(["MIL","ATT"].includes(k)||P)&&!v.used||i==="defense"&&["GK","DEF","MIL"].includes(k)&&!v.used,w=n.includes(v.cardId);let N;i==="attack"?N=P?Math.max(1,Number(v.note_a)||0):k==="MIL"?Number(v.note_m)||0:Number(v.note_a)||0:i==="defense"?N=k==="GK"?Number(v.note_g)||0:k==="MIL"?Number(v.note_m)||0:Number(v.note_d)||0:N=Number(k==="GK"?v.note_g:k==="DEF"?v.note_d:k==="MIL"?v.note_m:v.note_a)||0,N=N+(v.boost||0);const E=(L.x-m/2).toFixed(1),H=(L.y-_/2).toFixed(1),q=v.used?.25:w?.45:1,V=I[v==null?void 0:v.rarity]||I.normal,te=w?"#FFD700":V,ne=w?3:(v==null?void 0:v.rarity)==="légende"||(v==null?void 0:v.rarity)==="pépite"?2.5:2,Z=_-u-h;g+=`<defs><clipPath id="cp-${M}"><rect x="${E}" y="${(L.y-_/2+u).toFixed(1)}" width="${m}" height="${Z}"/></clipPath></defs>`,g+=`<rect x="${E}" y="${H}" width="${m}" height="${_}" rx="5" fill="${G}" opacity="${q}"/>`;const pe=ge(v);pe&&!v.used&&(g+=`<image href="${pe}" x="${E}" y="${(L.y-_/2+u).toFixed(1)}" width="${m}" height="${Z}" clip-path="url(#cp-${M})" preserveAspectRatio="xMidYMin slice"/>`),g+=`<rect x="${E}" y="${H}" width="${m}" height="${u}" rx="4" fill="rgba(255,255,255,0.92)"/>`,g+=`<text x="${L.x.toFixed(1)}" y="${(L.y-_/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(v.name||"").slice(0,9)}</text>`;const Q=(L.y+_/2-h).toFixed(1);if(g+=`<rect x="${E}" y="${Q}" width="${m}" height="${h}" fill="rgba(255,255,255,0.92)"/>`,v.used)g+=`<text x="${L.x.toFixed(1)}" y="${(L.y+_/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const z=ut(v.country_code);z?g+=`<image href="${z}" x="${(L.x-20).toFixed(1)}" y="${(L.y+_/2-h+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:g+=`<text x="${(L.x-13).toFixed(1)}" y="${(L.y+_/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ui(v.country_code)}</text>`,g+=`<text x="${L.x.toFixed(1)}" y="${(L.y+_/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${N}</text>`;const T=pi(v);T?g+=`<image href="${T}" x="${(L.x+m/2-14).toFixed(1)}" y="${(L.y+_/2-h+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:v.clubName&&(g+=`<text x="${(L.x+14).toFixed(1)}" y="${(L.y+_/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(v.clubName||"").slice(0,3).toUpperCase()}</text>`),v.boost&&(g+=`<rect x="${(L.x+m/2-12).toFixed(1)}" y="${(L.y-_/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,g+=`<text x="${(L.x+m/2-5).toFixed(1)}" y="${(L.y-_/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${v.boost}</text>`)}g+=`<rect x="${E}" y="${H}" width="${m}" height="${_}" rx="5" fill="${w?"rgba(255,255,255,0.12)":"none"}" stroke="${te}" stroke-width="${ne}" opacity="${q}"/>`,U&&(g+=`<rect x="${E}" y="${H}" width="${m}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${w?"selected":""}" data-card-id="${v.cardId}" data-role="${k}" style="cursor:pointer"/>`)}const $=38;return`<svg viewBox="${-$} ${-$} ${d+$*2} ${s+$*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${g}
  </svg>`}function He(e,t,i,n,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Pe(e,t,i,n,d,s,a)}
  </div>`}function ze(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function fi(e,t,i,n){var L;const{state:d,navigate:s,toast:a}=t;$e(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return so(e,t,i);const c=l.deckId;let o,r,p,g;try{const k=await Promise.all([S.from("decks").select("formation,name").eq("id",c).single(),S.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=k[0].data,p=k[0].error,r=k[1].data,g=k[1].error}catch(k){console.error("[Match] Exception chargement deck:",k),ke(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(p||g){console.error("[Match] Erreur Supabase:",p||g),ke(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const m=(r||[]).filter(k=>{var G;return k.is_starter&&((G=k.card)==null?void 0:G.player)}).map(k=>pt(k.card,k.position)),_=(r||[]).filter(k=>{var G;return!k.is_starter&&((G=k.card)==null?void 0:G.player)}).map(k=>pt(k.card,k.position));if(m.length<11){ke(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>s("decks"));return}const u=(r||[]).find(k=>{var G;return((G=k.card)==null?void 0:G.card_type)==="formation"}),h=(o==null?void 0:o.formation)||((L=u==null?void 0:u.card)==null?void 0:L.formation)||"4-4-2",{data:I,error:$}=await S.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:M}=await S.from("gc_definitions").select("*").eq("is_active",!0),v=(I||[]).map(k=>({...k,_gcDef:(M==null?void 0:M.find(G=>G.name===k.gc_type||G.id===k.gc_definition_id))||null}));n({deckId:c,formation:h,starters:m,subsRaw:_,gcCardsEnriched:v,gcDefs:M||[]})}async function lo(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await fi(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:r,gcCardsEnriched:p,gcDefs:g})=>{try{const m=it(o,c),_=await co(c,s),u=async h=>{try{const{data:I,error:$}=await S.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if($){console.error("[MatchIA] Erreur création match:",$),ke(e,"⚠️","Impossible de créer le match ("+$.message+").","Retour",()=>t.navigate("home"));return}const M={gcDefs:g||[],matchId:I==null?void 0:I.id,mode:a,difficulty:s,formation:c,homeTeam:m,aiTeam:_,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};uo(e,M,t)}catch(I){console.error("[MatchIA] Exception launchMatch:",I),ke(e,"⚠️","Erreur au lancement du match : "+I.message,"Retour",()=>t.navigate("home"))}};if(!p.length){u([]);return}ci(e,p,u)}catch(m){console.error("[MatchIA] Exception setup:",m),ke(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function co(e,t){var a,l;const{data:i}=await S.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return po(e);const n=Ce[e]||Ce["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(_=>_.job===c),r=s.filter(_=>_.job!==c),p=[...o,...r],g=[];for(let _=0;_<n[c];_++){const u=p[_]||s[_];u&&g.push({cardId:"ai-"+u.id+"-"+_,id:u.id,firstname:u.firstname,name:u.surname_encoded,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,clubName:((a=u.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=u.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const m=tt(g.length);g.forEach((_,u)=>{_._col=m[u]}),d[c]=g}return d}function po(e){const t=Ce[e]||Ce["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=tt(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function uo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Pe(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>fo(e,t,i),5e3)}function fo(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(u){return u.reduce((h,I)=>h+oe(I,"MIL"),0)}function a(u){let h=0;for(let I=0;I<u.length-1;I++){const $=Ee(u[I],u[I+1]);$==="#00ff88"?h+=2:$==="#FFD700"&&(h+=1)}return h}const l=s(n)+a(n),c=s(d)+a(d),o=l>=c;function r(u,h,I,$){return`<div id="duel-row-${$}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${h}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${u.map((M,v)=>{const L=v<u.length-1?Ee(M,u[v+1]):null,k=!L||L==="#ff3333"||L==="#cc2222",G=L==="#00ff88"?"+2":L==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${$}" data-idx="${v}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${ve({...M,note:oe(M,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${v<u.length-1?`<div class="duel-link duel-link-${$}" data-idx="${v}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${k?"rgba(255,255,255,0.12)":L};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${k?"none":`0 0 8px ${L}`}">
            ${G?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${L}">${G}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${$}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
  </div>`;const p=()=>{const u=(h,I)=>e.querySelectorAll(h).forEach(($,M)=>{setTimeout(()=>{$.style.opacity="1",$.style.transform="translateY(0) scale(1)"},I+M*90)});u(".duel-card-home",150),u(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((h,I)=>{setTimeout(()=>{h.style.opacity="1"},I*70)}),900),setTimeout(()=>{const h=e.querySelector("#vs-label");h&&(h.style.opacity="1",h.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{g("score-home",l,800),g("score-ai",c,800)},1500)};function g(u,h,I){const $=document.getElementById(u);if(!$)return;const M=performance.now(),v=L=>{const k=Math.min(1,(L-M)/I);$.textContent=Math.round(h*(1-Math.pow(1-k,3))),k<1?requestAnimationFrame(v):$.textContent=h};requestAnimationFrame(v)}requestAnimationFrame(p),t.attacker=o?"home":"ai";const m=o?di():null;o&&(t.boostCard={value:m}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(u=>({name:u.name,note:oe(u,"MIL"),portrait:ge(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:oe(u,"MIL"),portrait:ge(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const _=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",de(e,t,i),t.attacker==="ai"&&setTimeout(()=>ft(e,t,i),800)};setTimeout(()=>{const u=document.getElementById("score-home"),h=document.getElementById("score-ai"),I=document.getElementById(o?"duel-row-home":"duel-row-ai"),$=document.getElementById(o?"duel-row-ai":"duel-row-home"),M=o?u:h,v=o?h:u;M&&(M.style.fontSize="80px",M.style.color=o?"#FFD700":"#ff6b6b",M.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var k;const L=document.getElementById("duel-shock");if(L){const G=(k=$||I)==null?void 0:k.getBoundingClientRect(),P=e.querySelector(".match-screen").getBoundingClientRect();G&&(L.style.top=G.top-P.top+G.height/2+"px"),L.style.animation="shockwave .5s ease-out forwards"}$&&($.style.transformOrigin="center",$.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var k;const L=document.getElementById("duel-finale");L&&(L.innerHTML=`
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
          </button>`,L.style.transition="opacity .45s ease",L.style.opacity="1",L.style.pointerEvents="auto",(k=document.getElementById("start-match-btn"))==null||k.addEventListener("click",_))},600)},700)},2800)}function go(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>ze(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>ze(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${ze(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${ze(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function de(e,t,i){var $,M,v,L,k,G,P,U;const n=t.selected.map(w=>w.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(w=>!d.includes(w.cardId));Object.values(t.homeTeam).flat().filter(w=>w.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs;const l=!["GK","DEF","MIL","ATT"].some(w=>(t.aiTeam[w]||[]).some(N=>!N.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(w=>!w.used),o=t.phase==="attack"&&l&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(w=>!w.used).map(w=>w.cardId):[];t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",p=t.phase==="attack",g=t.phase==="defense",m=t.phase==="finished",_=t.gcCards.filter(w=>!t.usedGc.includes(w.id)),u=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const N=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Me((N.players||[]).map(E=>({...E,used:!1})),"#ff6b6b",N.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const N=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Me((N.players||[]).map(E=>({...E,used:!1})),"#00ff88",N.total)}
          </div>`}const w=t.log[t.log.length-1];return w?'<div style="padding:2px 4px">'+go(w)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const w=window.innerWidth>=700,N=(Q,z,T)=>{var K,X;const f=(t.gcDefs||[]).find(re=>re.name===Q.gc_type),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",A=(f==null?void 0:f.name)||Q.gc_type,y=(f==null?void 0:f.effect)||((K=he[Q.gc_type])==null?void 0:K.desc)||"",F=f!=null&&f.image_url?`/manager-wars/icons/${f.image_url}`:null,j=((X=he[Q.gc_type])==null?void 0:X.icon)||"⚡",D=Math.round(T*.22),B=Math.round(T*.22),C=T-D-B,O=A.length>12?7:9;return`<div class="gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
          style="box-sizing:border-box;width:${z}px;height:${T}px;border-radius:10px;border:2px solid ${b};background:${x};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${D}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${O}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${z-6}px">${A}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${C}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${F?`<img src="${F}" style="max-width:${z-10}px;max-height:${C-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(C*.55)}px">${j}</span>`}
          </div>
          <div style="height:${B}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${y.slice(0,38)}</span>
          </div>
        </div>`},E=(Q,z)=>{var T;return`<div id="boost-card"
          style="box-sizing:border-box;width:${Q}px;height:${z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(z*.09)}px;color:#000;font-weight:900">+${(T=t.boostCard)==null?void 0:T.value}</div>
          </div>`},H=(Q,z)=>z?E(110,150):N(Q,110,150),q=(Q,z)=>z?E(68,95):N(Q,68,95),V=w?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",te=m?`<button id="btn-results" style="${V};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${V};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:p?`<button id="btn-action" style="${V};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${V};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${V};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ne=p||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Z=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${w?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(Q=>`<div class="sub-btn-col" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${ve(Q,44,58)}</div>`).join("")}
      </div>`,pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${He(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return w?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${Z}
          ${pe}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${_.map(Q=>H(Q,!1)).join("")}
              ${u?H(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${te}${ne}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${Z}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${He(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${_.map(Q=>q(Q,!1)).join("")}
            ${u?q(null,!0):""}
          </div>
          <div>${te}${ne}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(w=>{var N,E,H;if(w.type==="duel"){const q=w.isGoal,V=w.homeScored?"#FFD700":q?"#ff6b6b":"rgba(255,255,255,0.3)",te=w.homeScored?"⚽ BUT !":q?"⚽ BUT IA !":(N=w.homePlayers)!=null&&N.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${V};margin-bottom:4px">
                <div style="font-size:9px;color:${V};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${te}</div>
                ${(E=w.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${Me(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
                ${(H=w.aiPlayers)!=null&&H.length?`<div style="opacity:0.7">${Me(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
              </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${w.outPlayer?ve({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${w.inPlayer?ve({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:w.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${w.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${w.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function h(){const w=e.querySelector(".match-screen");if(!w)return;const N=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);w.style.bottom="auto",w.style.height=N+"px",w.style.minHeight=N+"px",w.style.maxHeight=N+"px",w.style.overflow="hidden";const E=e.querySelector("#mobile-action-bar"),H=e.querySelector("#mobile-play-area");E&&H&&(H.style.paddingBottom=E.offsetHeight+"px")}if(h(),setTimeout(h,120),setTimeout(h,400),setTimeout(h,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",h),window.visualViewport.addEventListener("scroll",h)),window.addEventListener("resize",h)),function(){const N=e.querySelector(".terrain-wrapper svg");N&&(N.removeAttribute("width"),N.removeAttribute("height"),N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",N.setAttribute("viewBox","-26 -26 352 352"),N.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const w=e.querySelector(".terrain-wrapper svg");w&&(w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let w=!1,N=30;const E=()=>document.getElementById("match-timer"),H=()=>{const q=E();if(!q)return;const V=String(Math.floor(N/60)).padStart(2,"0"),te=String(N%60).padStart(2,"0");q.textContent=` ${V}:${te}`,q.style.color=w?"#ff2222":"#ff9500",q.style.fontWeight="900"};H(),t._timerInt=setInterval(()=>{if(N--,N<0)if(!w)w=!0,N=15,H();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(q),setTimeout(()=>{q.remove(),Ne(e,t,i)},2500)}else H()},1e3)}($=document.getElementById("match-quit"))==null||$.addEventListener("click",()=>{be(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ne(e,t,i))}),(M=document.getElementById("view-ai"))==null||M.addEventListener("click",()=>ko(t,i)),(v=document.getElementById("toggle-history"))==null||v.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.remove("open")}),(k=document.getElementById("btn-action"))==null||k.addEventListener("click",()=>{t.selected.length!==0&&(p?xo(e,t,i):g&&yo(e,t,i))}),(G=document.getElementById("btn-results"))==null||G.addEventListener("click",()=>Ne(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(w=>{w.addEventListener("click",()=>mo(w,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(w=>{w.addEventListener("click",()=>vo(w.dataset.gcId,w.dataset.gcType,e,t,i))}),(P=document.getElementById("boost-card"))==null||P.addEventListener("click",()=>_o(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(w=>{w.addEventListener("click",()=>Xt(e,t,i,w.dataset.subId))}),(U=document.getElementById("sub-btn-main"))==null||U.addEventListener("click",()=>Xt(e,t,i))}function mo(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}de(i,t,n)}function $t(e,t,i){e.matchId&&S.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function xo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),$t(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=yt(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",de(e,t,i),setTimeout(()=>ho(e,t,i),1200)}function yo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),$t(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=ht(n,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=bt(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ge(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:ge(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,de(e,t,i),ot(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Se(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Se(e,t,i,"home-attack")}function ft(e,t,i){$t(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=ii(n,"attack",t.difficulty);if(!d.length){We(e,t,i);return}const s=yt(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ge(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,de(e,t,i),ot(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Se(e,t,i,"home-attack")});return}t.phase="defense",de(e,t,i)}function ho(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=ii(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(p=>(t.aiTeam[p]||[]).filter(g=>!g.used)).length){t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(m=>({name:m.name,note:oe(m,m._line||m.job),portrait:ge(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,de(e,t,i),ot(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{Se(e,t,i,"ai-attack")});return}const a=d.length>0?ht(d,t.modifiers.ai).total:0;d.forEach(p=>{p.used=!0});const l=bt(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(p=>({name:p.name,note:p._line==="MIL"?p.note_m:p.note_a,portrait:ge(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:p._line==="GK"?p.note_g:p._line==="MIL"?p.note_m:p.note_d,portrait:ge(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,de(e,t,i),ot(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{Se(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,Se(e,t,i,"ai-attack")}function Se(e,t,i,n){if(t.round++,gi(t)){Ne(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){We(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){We(e,t,i);return}setTimeout(()=>ft(e,t,i),100);return}t.phase="attack",de(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){We(e,t,i);return}t.phase="ai-attack",de(e,t,i),setTimeout(()=>ft(e,t,i),800)}}function gi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function We(e,t,i){gi(t)?Ne(e,t,i):(t.phase="attack",de(e,t,i))}function bo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=ge(e),s=ge(t),a=Be[e.job]||"#555",l=Be[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
  `,document.body.appendChild(n);let r=!1;const p=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",p),setTimeout(p,2e3)}function Re(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Xt(e,t,i,n=null){if(t.phase!=="attack"){Re("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Re(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(p=>p.used),s=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!d.length){Re("Aucun joueur utilisé à remplacer");return}if(!s.length){Re("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(p=>p.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var I,$,M,v,L,k;const p=d[a],g=s[l],m=Math.min(130,Math.round((window.innerWidth-90)/2)),_=Math.round(m*1.35),u=G=>`background:rgba(255,255,255,0.12);border:none;color:${G?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${G?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${u(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${g?ve({...g,used:!1,boost:0},m,_):"<div>—</div>"}</div>
        <button id="in-down" style="${u(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${u(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${p?ve({...p,used:!1,boost:0},m,_):"<div>—</div>"}</div>
        <button id="out-down" style="${u(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(I=o.querySelector("#sub-close"))==null||I.addEventListener("click",()=>o.remove()),($=o.querySelector("#out-up"))==null||$.addEventListener("click",()=>{a>0&&(a--,r())}),(M=o.querySelector("#out-down"))==null||M.addEventListener("click",()=>{a<d.length-1&&(a++,r())}),(v=o.querySelector("#in-up"))==null||v.addEventListener("click",()=>{l>0&&(l--,r())}),(L=o.querySelector("#in-down"))==null||L.addEventListener("click",()=>{l<s.length-1&&(l++,r())});const h=(G,P,U,w)=>{const N=o.querySelector("#"+G);if(!N)return;let E=0;N.addEventListener("touchstart",H=>{E=H.touches[0].clientY},{passive:!0}),N.addEventListener("touchend",H=>{const q=H.changedTouches[0].clientY-E;if(Math.abs(q)<30)return;const V=P();q<0&&V<w-1?(U(V+1),r()):q>0&&V>0&&(U(V-1),r())},{passive:!0})};h("in-panel",()=>l,G=>l=G,s.length),h("out-panel",()=>a,G=>a=G,d.length),(k=o.querySelector("#sub-confirm"))==null||k.addEventListener("click",G=>{if(G.preventDefault(),G.stopPropagation(),c)return;c=!0;const P=d[a],U=s[l];if(!P||!U)return;let w=null,N=-1;for(const[H,q]of Object.entries(t.homeTeam)){const V=(q||[]).findIndex(te=>te.cardId===P.cardId);if(V!==-1){w=H,N=V;break}}if(N===-1||!w){Re("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const E={...U,_line:w,_col:P._col||0,used:!1,boost:0};t.homeTeam[w].splice(N,1,E),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(U.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:P.name,firstname:P.firstname,note:oe(P,w),portrait:ge(P),job:P.job,country_code:P.country_code,rarity:P.rarity,clubName:P.clubName,clubLogo:P.clubLogo},inPlayer:{name:U.name,firstname:U.firstname,note:oe(U,w),portrait:ge(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},text:`🔄 ${U.firstname} ${U.name} remplace ${P.firstname} ${P.name}`}),o.remove(),bo(P,U,()=>de(e,t,i))})}document.body.appendChild(o),r()}function vo(e,t,i,n,d){var _,u;const s=(n.gcDefs||[]).find(h=>h.name===t),a=he[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,p=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,g=a.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
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
    </div>`,document.body.appendChild(m),(_=m.querySelector("#gc-back"))==null||_.addEventListener("click",()=>m.remove()),(u=m.querySelector("#gc-use"))==null||u.addEventListener("click",()=>{m.remove(),$o(e,t,i,n,d)})}function Ye(e,t,i,n,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const g=p._line||p.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g]||"#555",_=oe(p,g)+(p.boost||0),u=l.find(h=>h.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${u?"#FFD700":"rgba(255,255,255,0.25)"};background:${m};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${g}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.cid,m=e.find(u=>u.cardId===g);if(!m)return;const _=l.findIndex(u=>u.cardId===g);_>-1?l.splice(_,1):l.length<t&&l.push(m),c()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const wo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(Ye(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(c=>{const o=(n.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),de(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),de(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,a)=>{const l=n==="home"?d.homeTeam:d.aiTeam,c=n==="ai"?"adverse":"allié",o=Object.entries(l).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,p])=>p.filter(g=>!g.used).map(g=>({...g,_line:r})));return o.length?(Ye(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,r=>{r.forEach(p=>{const m=((n==="home"?d.homeTeam:d.aiTeam)[p._line]||[]).find(_=>_.cardId===p.cardId);m&&(m.boost=(m.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),de(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),de(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const a=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(p=>!p.used).map(p=>({...p,_line:o})));return c.length?(Ye(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,o=>{o.forEach(r=>{const g=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(m=>m.cardId===r.cardId);g&&(g.used=!0,n.log.push({text:`❌ ${g.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),de(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),de(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(Ye(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),de(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),de(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function $o(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=wo[a.effect_type];c?c(a.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(p=>p.used).map(p=>({...p,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,p)=>oe(p,"ATT")-oe(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}S.from("cards").delete().eq("id",e).then(()=>{}),l&&de(i,n,d)}function _o(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Be[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${oe(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),de(e,t,i)})})}function ot(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Be[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function Ne(e,t,i){var r,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=Ai(t.mode,a);t.matchId&&await S.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?c.wins=(n.profile.wins||0)+1:s?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await S.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),be(e),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{o.remove(),be(e),i.navigate("match",{matchMode:t.mode})})}function ko(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Pe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Eo(e,t){await fi(e,t,"random",({deckId:i,formation:n,starters:d,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const c=o=>To(e,t,i,n,d,s,o,l||[]);if(!a.length){c([]);return}ci(e,a,c)})}async function To(e,t,i,n,d,s,a=[],l=[]){var $;const{state:c,navigate:o,toast:r}=t;let p=!1,g=null;$e(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const m=async(M=!0)=>{p=!0,g&&(S.removeChannel(g),g=null),M&&await S.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};($=document.getElementById("mm-cancel"))==null||$.addEventListener("click",async()=>{try{await m(!0)}catch{}be(e),o("home")});const _=async(M,v,L)=>{if(p)return;p=!0,g&&(S.removeChannel(g),g=null);const k=document.getElementById("mm-status");k&&(k.textContent="Adversaire trouvé !"),await new Promise(G=>setTimeout(G,600)),e.isConnected&&Ao(e,t,M,L,a,l)},{data:u,error:h}=await S.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(h||!(u!=null&&u.success)){r("Erreur de matchmaking","error"),be(e),o("home");return}if(u.matched){_(u.match_id,u.opponent_id,!1);return}const I=document.getElementById("mm-status");I&&(I.textContent="En attente d'un autre joueur..."),g=S.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},M=>{const v=M.new;v.status==="matched"&&v.match_id&&_(v.match_id,v.matched_with,!0)}).subscribe()}async function Ao(e,t,i,n,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",p=(d||[]).map(f=>f.id),g=(d||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:m}=await S.from("matches").select("*").eq("id",i).single();if(!m){c("Match introuvable","error"),l("home");return}async function _(){const[{data:f},{data:x},{data:b},{data:A}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:m.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:m.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",m.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",m.away_id).single()]),y=C=>({cardId:C.card_id,position:C.position,id:C.id,firstname:C.firstname,name:C.surname_encoded,country_code:C.country_code,club_id:C.club_id,job:C.job,job2:C.job2,note_g:Number(C.note_g)||0,note_d:Number(C.note_d)||0,note_m:Number(C.note_m)||0,note_a:Number(C.note_a)||0,rarity:C.rarity,skin:C.skin,hair:C.hair,hair_length:C.hair_length,clubName:C.club_encoded_name||null,clubLogo:C.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),F=((f==null?void 0:f.starters)||[]).map(C=>y(C)),j=((x==null?void 0:x.starters)||[]).map(C=>y(C)),D=(f==null?void 0:f.formation)||"4-4-2",B=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:it(F,D),p2Team:it(j,B),p1Subs:((f==null?void 0:f.subs)||[]).map(C=>y(C)),p2Subs:((x==null?void 0:x.subs)||[]).map(C=>y(C)),p1Formation:D,p2Formation:B,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?p:[],gc_p2:n?[]:p,gcCardsFull_p1:n?g:[],gcCardsFull_p2:n?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,lastActionAt:new Date().toISOString()}}let u=m.game_state&&Object.keys(m.game_state).length?m.game_state:null;if(!u)if(n){u=await _();const{data:f}=await S.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await S.from("matches").update({game_state:u,turn_user_id:m.home_id}).eq("id",i):u=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<30&&!u;f++){await new Promise(b=>setTimeout(b,400));const{data:x}=await S.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(u=x.game_state)}if(!u){c("Erreur de synchronisation","error"),l("home");return}u.gc_p2=p,u.gcCardsFull_p2=g,await S.from("matches").update({game_state:u}).eq("id",i)}let h=!1,I=null,$=!1;function M(f){var A,y;try{S.removeChannel(v)}catch{}const x=f.winner_id===a.profile.id;(A=b.remove)==null||A.call(b);const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",b.innerHTML=`
      <div style="font-size:64px">${x?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${x?"#FFD700":"#ff6b6b"}">${x?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px">${u[o+"Name"]} ${u[o+"Score"]} – ${u[r+"Score"]} ${u[r+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(y=b.querySelector("#pvp-end-home"))==null||y.addEventListener("click",()=>{b.remove(),be(e),l("home")})}const v=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const x=f.new;try{if(x.status==="finished"||x.forfeit){if(h)return;h=!0,I&&(clearInterval(I),I=null),x.game_state&&(u=x.game_state),M(x);return}x.game_state&&(u=x.game_state,w())}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function L(f){Object.assign(u,f),u.lastActionAt=new Date().toISOString();const{error:x}=await S.from("matches").update({game_state:u}).eq("id",i);x&&c("Erreur de synchronisation","error");try{w()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function k(){if(h)return;h=!0,I&&(clearInterval(I),I=null);const f=n?m.away_id:m.home_id;try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:f}).eq("id",i)}catch{}try{S.removeChannel(v)}catch{}be(e),l("home")}const G={BOOST_STAT:({value:f=1,count:x=1,roles:b=[]},A,y)=>{const F=A[o+"Team"],j=Object.entries(F).filter(([D])=>!b.length||b.includes(D)).flatMap(([D,B])=>B.filter(C=>!C.used).map(C=>({...C,_line:D})));if(!j.length){A.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(A);return}P(j,x,`Choisir ${x} joueur(s) à booster (+${f})`,D=>{D.forEach(B=>{const C=(F[B._line]||[]).find(O=>O.cardId===B.cardId);C&&(C.boost=(C.boost||0)+f,A.log.push({text:`⚡ +${f} sur ${C.name}`,type:"info"}))}),A[o+"Team"]=F,y(A)})},DEBUFF_STAT:({value:f=1,count:x=1,roles:b=[],target:A="ai"},y,F)=>{const j=A==="home"?o:r,D=y[j+"Team"],B=A==="home"?"allié":"adverse",C=Object.entries(D).filter(([O])=>!b.length||b.includes(O)).flatMap(([O,K])=>K.filter(X=>!X.used).map(X=>({...X,_line:O})));if(!C.length){y.log.push({text:`🎯 Aucun joueur ${B}`,type:"info"}),F(y);return}P(C,x,`Choisir ${x} joueur(s) ${B}(s) (-${f})`,O=>{O.forEach(K=>{const X=(D[K._line]||[]).find(re=>re.cardId===K.cardId);X&&(X.boost=(X.boost||0)-f,y.log.push({text:`🎯 -${f} sur ${X.name}`,type:"info"}))}),y[j+"Team"]=D,F(y)})},GRAY_PLAYER:({count:f=1,roles:x=[],target:b="ai"},A,y)=>{const F=b==="home"?o:r,j=A[F+"Team"],D=b==="home"?"allié":"adverse",B=Object.entries(j).filter(([C])=>!x.length||x.includes(C)).flatMap(([C,O])=>O.filter(K=>!K.used).map(K=>({...K,_line:C})));if(!B.length){A.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),y(A);return}P(B,f,`Choisir ${f} joueur(s) ${D}(s) à exclure`,C=>{C.forEach(O=>{const K=(j[O._line]||[]).find(X=>X.cardId===O.cardId);K&&(K.used=!0,A.log.push({text:`❌ ${K.name} exclu !`,type:"info"}))}),A[F+"Team"]=j,y(A)})},REVIVE_PLAYER:({count:f=1,roles:x=[]},b,A)=>{const y=b[o+"Team"],F=Object.entries(y).filter(([j])=>!x.length||x.includes(j)).flatMap(([j,D])=>D.filter(B=>B.used).map(B=>({...B,_line:j})));if(!F.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),A(b);return}P(F,f,`Choisir ${f} joueur(s) à ressusciter`,j=>{j.forEach(D=>{const B=(y[D._line]||[]).find(C=>C.cardId===D.cardId);B&&(B.used=!1,b.log.push({text:`💫 ${B.name} ressuscité !`,type:"info"}))}),b[o+"Team"]=y,A(b)})},REMOVE_GOAL:({},f,x)=>{const b=r+"Score";f[b]>0?(f[b]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(f)},ADD_GOAL_DRAW:({},f,x)=>{f[o+"Score"]===f[r+"Score"]?(f[o+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(f)},ADD_SUB:({value:f=1},x,b)=>{x.maxSubs=(x.maxSubs||3)+f,x.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),b(x)},CUSTOM:({},f,x)=>x(f)};function P(f,x,b,A){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let F=[];function j(){var B,C;const D=f.map(O=>{const K={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[O._line]||"#555",X=oe(O,O._line)+(O.boost||0),se=F.find(Y=>Y.cardId===O.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=O.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${O.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${se};background:${K};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${O.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${X}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${O._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F.length}/${x}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${F.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${F.length}/${x})
          </button>
        </div>`,(B=y.querySelector("#pp-close"))==null||B.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(O=>{O.addEventListener("click",()=>{const K=O.dataset.cid,X=f.find(se=>se.cardId===K),re=F.findIndex(se=>se.cardId===K);X&&(re>-1?F.splice(re,1):F.length<x&&F.push(X),j())})}),(C=y.querySelector("#pp-confirm"))==null||C.addEventListener("click",()=>{y.remove(),A(F)})}j(),document.body.appendChild(y)}async function U(f,x){const A=(u["gcCardsFull_"+o]||[]).find(D=>D.id===f),y=(A==null?void 0:A._gcDef)||(u.gcDefs||[]).find(D=>{var B;return D.name===x||((B=D.name)==null?void 0:B.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),F=[...u["usedGc_"+o]||[],f];if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const D=G[y.effect_type];if(D){const B={...u};D(y.effect_params||{},B,async C=>{C["usedGc_"+o]=F,await L(C)});return}}const j={...u};switch(x){case"Remplacement+":j.maxSubs=(j.maxSubs||3)+1,j.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const D=r+"Score";j[D]>0&&(j[D]--,j.log.push({text:"🚫 But annulé",type:"info"}));break}}j["usedGc_"+o]=F,await L(j)}function w(){var Lt,Mt,zt,St,jt;if(u.phase==="reveal")return N();if(u.phase==="midfield")return H();if(u.phase==="finished")return T();const f=u[o+"Team"],x=u[r+"Team"],b=u[o+"Score"],A=u[r+"Score"],y=u[o+"Name"],F=u[r+"Name"],j=u.phase===o+"-attack",D=u.phase===o+"-defense",B=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],C=B.map(R=>R.cardId),O=window.innerWidth>=700,K=u[o+"Subs"]||[],X=u["usedSubIds_"+o]||[],re=K.filter(R=>!X.includes(R.cardId)),se=u["gcCardsFull_"+o]||[],J=u["usedGc_"+o]||[],Y=se.filter(R=>!J.includes(R.id)),ie=u.boostOwner===o&&!u.boostUsed,ce=!["GK","DEF","MIL","ATT"].some(R=>(x[R]||[]).some(W=>!W.used)),ue=[...f.MIL||[],...f.ATT||[]].filter(R=>!R.used),xe=j&&ce&&ue.length===0?[...f.GK||[],...f.DEF||[]].filter(R=>!R.used).map(R=>R.cardId):[];function fe(R,W,le){var Dt,Gt;const ee=R._gcDef,we={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ie={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",De=(ee==null?void 0:ee.name)||R.gc_type,Ge=(ee==null?void 0:ee.effect)||((Dt=he[R.gc_type])==null?void 0:Dt.desc)||"",Ct=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,vi=((Gt=he[R.gc_type])==null?void 0:Gt.icon)||"⚡",Bt=Math.round(le*.22),Ft=Math.round(le*.22),st=le-Bt-Ft,wi=De.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
        style="box-sizing:border-box;width:${W}px;height:${le}px;border-radius:10px;border:2px solid ${Ie};background:${we};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${wi}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${W-6}px">${De}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${st}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Ct?`<img src="${Ct}" style="max-width:${W-10}px;max-height:${st-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(st*.55)}px">${vi}</span>`}
        </div>
        <div style="height:${Ft}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ge.slice(0,38)}</span>
        </div>
      </div>`}function me(R,W){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${R}px;height:${W}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(W*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(W*.2)}px">⚡</div>
        <div style="font-size:${Math.round(W*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const ye=(R,W)=>W?me(110,150):fe(R,110,150),Ke=(R,W)=>W?me(68,95):fe(R,68,95),Fe=O?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Te=j?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${B.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${B.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${F}</div>`,Et=j||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${B.length}/3 sélectionné(s)</div>`:"",Tt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${O?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${re.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':re.map(R=>`<div class="pvp-sub-btn" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${ve(R,O?60:44,O?78:58)}</div>`).join("")}
    </div>`,At=j?"attack":D?"defense":"idle",yi=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
        ${He(f,u[o+"Formation"],At,C,300,300,xe)}
      </div>
    </div>`;function hi(R){if(R.type==="duel"){const W=(R.homeTotal||0)>=(R.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(R.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(R.homePlayers||[]).map(le=>ze(le)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${W?20:14}px;font-weight:900;color:${W?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${R.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${W?14:20}px;font-weight:900;color:${W?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${R.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(R.aiPlayers||[]).map(le=>ze(le)).join("")}
            </div>
          </div>
          ${R.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${R.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${R.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${R.type==="goal"?700:400};padding:3px 2px">${R.text||""}</div>`}const bi=(()=>{var W,le;if(D&&((W=u.pendingAttack)!=null&&W.players)){const ee=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${F} ATTAQUE — Défendez !</div>
          ${Me((ee.players||[]).map(we=>({...we,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(j&&((le=u.pendingAttack)!=null&&le.players)){const ee=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${Me((ee.players||[]).map(we=>({...we,used:!1})),"#00ff88",ee.total)}
        </div>`}const R=(u.log||[]).slice(-1)[0];return R?'<div style="padding:2px 4px">'+hi(R)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),It=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${A}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${bi}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;$e(e),e.style.overflow="hidden",O?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${It}
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${Tt}
          ${yi}
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${Y.map(R=>ye(R,!1)).join("")}
              ${ie?ye(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${Te}${Et}</div>
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${It}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${Tt}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${He(f,u[o+"Formation"],At,C,300,300,xe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Y.map(R=>Ke(R,!1)).join("")}
            ${ie?Ke(null,!0):""}
          </div>
          <div>${Te}${Et}</div>
        </div>
      </div>`;function Ae(){const R=e.querySelector(".match-screen");if(!R)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);R.style.height=W+"px",R.style.minHeight=W+"px",R.style.maxHeight=W+"px",R.style.overflow="hidden";const le=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");le&&ee&&(ee.style.paddingBottom=le.offsetHeight+"px")}if(Ae(),setTimeout(Ae,120),setTimeout(Ae,400),$||($=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ae),window.visualViewport.addEventListener("scroll",Ae)),window.addEventListener("resize",Ae)),function(){const W=e.querySelector(".terrain-wrapper svg");W&&(W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("viewBox","-26 -26 352 352"),W.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(R=>{R.addEventListener("click",()=>{if(!j&&!D)return;const W=R.dataset.cardId,le=R.dataset.role,ee=(f[le]||[]).find(Ge=>Ge.cardId===W);if(!ee||ee.used)return;const we=xe.includes(W);if(j&&!["MIL","ATT"].includes(le)&&!we)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const Ie=u["selected_"+o],De=Ie.findIndex(Ge=>Ge.cardId===W);De>-1?Ie.splice(De,1):Ie.length<3&&Ie.push({...ee,_role:le}),w()})}),e.querySelectorAll(".pvp-sub-btn").forEach(R=>{R.addEventListener("click",()=>{if(!j){c("Remplacement uniquement avant une attaque","warning");return}te(R.dataset.subId)})}),e.querySelectorAll(".pvp-gc-mini").forEach(R=>{R.addEventListener("click",()=>q(R.dataset.gcId,R.dataset.gcType))}),(Lt=e.querySelector("#pvp-boost-card"))==null||Lt.addEventListener("click",()=>V()),(Mt=e.querySelector("#pvp-action"))==null||Mt.addEventListener("click",()=>{j?pe():D&&Q()}),(zt=e.querySelector("#pvp-quit"))==null||zt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&k()}),(St=e.querySelector("#pvp-view-opp"))==null||St.addEventListener("click",()=>ne()),(jt=e.querySelector("#pvp-toggle-history"))==null||jt.addEventListener("click",()=>Z()),I&&(clearInterval(I),I=null),(j||D)&&!h){let R=30,W=!1;const le=()=>document.getElementById("pvp-timer"),ee=()=>{le()&&(le().textContent=R+"s",le().style.color=W?"#ff4444":"#fff")};ee(),I=setInterval(()=>{R--,R<0?W?(clearInterval(I),I=null,k()):(W=!0,R=15,ee()):ee()},1e3)}}function N(){$e(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Pe(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await L({phase:"midfield"})},5e3)}let E=!1;function H(){if(E)return;const f=u[o+"Team"].MIL||[],x=u[r+"Team"].MIL||[];function b(Y){return Y.reduce((ie,ce)=>ie+oe(ce,"MIL"),0)}function A(Y){let ie=0;for(let ce=0;ce<Y.length-1;ce++){const ue=Ee(Y[ce],Y[ce+1]);ue==="#00ff88"?ie+=2:ue==="#FFD700"&&(ie+=1)}return ie}const y=b(f)+A(f),F=b(x)+A(x),j=y>=F;function D(Y,ie,ce){return`<div id="duel-row-${ce}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ie}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Y.map((ue,xe)=>{const fe=xe<Y.length-1?Ee(ue,Y[xe+1]):null,me=!fe||fe==="#ff3333"||fe==="#cc2222",ye=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ce}" data-idx="${xe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${ve({...ue,note:oe(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${xe<Y.length-1?`<div class="duel-link duel-link-${ce}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${fe}`}">
              ${ye?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${ye}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ce}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(Y)} + ${A(Y)} liens = <b style="color:#fff">${b(Y)+A(Y)}</b>
        </div>
      </div>`}$e(e),e.innerHTML=`
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
      ${D(f,u[o+"Name"],"me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${D(x,u[r+"Name"],"opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(Y,ie)=>e.querySelectorAll(Y).forEach((ce,ue)=>{setTimeout(()=>{ce.style.opacity="1",ce.style.transform="translateY(0) scale(1)"},ie+ue*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Y,ie)=>setTimeout(()=>{Y.style.opacity="1"},ie*70)),900),setTimeout(()=>{const Y=e.querySelector("#pvp-vs");Y&&(Y.style.opacity="1",Y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ie=>ie.style.opacity="1")},1250);function C(Y,ie,ce){const ue=document.getElementById(Y);if(!ue)return;const xe=performance.now(),fe=me=>{const ye=Math.min(1,(me-xe)/ce);ue.textContent=Math.round(ie*(1-Math.pow(1-ye,3))),ye<1?requestAnimationFrame(fe):ue.textContent=ie};requestAnimationFrame(fe)}setTimeout(()=>{C("pvp-score-me",y,800),C("pvp-score-opp",F,800)},1500);const O=u.p1Team.MIL||[],K=u.p2Team.MIL||[],X=b(O)+A(O),re=b(K)+A(K),se=X>=re?"p1":"p2";let J=u.boostValue;J==null&&(J=di(),u.boostValue=J,u.boostOwner=se,u.boostUsed=!1),E=!0,setTimeout(()=>{const Y=e.querySelector("#duel-row-"+(j?"me":"opp")),ie=e.querySelector("#duel-row-"+(j?"opp":"me")),ce=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),xe=j?ce:ue,fe=j?ue:ce;xe&&(xe.style.fontSize="80px",xe.style.color=j?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(j?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{Y&&(Y.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Y.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),ie&&(ie.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const me=document.getElementById("pvp-duel-finale");if(!me)return;const ye=u.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ke=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(j?"⚽ "+u[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ye+Ke,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Te=se;await L({phase:Te+"-attack",attacker:Te,round:1,boostValue:J,boostUsed:!1,boostOwner:Te})})},600)},700)},2800)}function q(f,x){var X,re,se,J;const A=(u["gcCardsFull_"+o]||[]).find(Y=>Y.id===f),y=A==null?void 0:A._gcDef,F={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",j={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",D=(y==null?void 0:y.name)||x,B=(y==null?void 0:y.effect)||((X=he[x])==null?void 0:X.desc)||"Carte spéciale.",C=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,O=((re=he[x])==null?void 0:re.icon)||"⚡",K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",K.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${j};background:${F};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${j}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${D.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${D}</div>
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
      </div>`,document.body.appendChild(K),(se=K.querySelector("#pvp-gc-back"))==null||se.addEventListener("click",()=>K.remove()),(J=K.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{K.remove(),U(f,x)})}function V(){var A;const f=u[o+"Team"],x=Object.entries(f).flatMap(([y,F])=>(F||[]).filter(j=>!j.used).map(j=>({...j,_line:y})));if(!x.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(y=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",j=oe(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${F};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${j}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(A=b.querySelector("#bp-close"))==null||A.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const F=y.dataset.cid,j=x.find(B=>B.cardId===F);if(!j)return;const D=(f[j._line]||[]).find(B=>B.cardId===F);D&&(D.boost=(D.boost||0)+u.boostValue),b.remove(),await L({[o+"Team"]:f,boostUsed:!0})})})}function te(f){var D;const x=u[o+"Subs"]||[],b=u["usedSubIds_"+o]||[],A=x.find(B=>B.cardId===f);if(!A)return;const y=u[o+"Team"],F=Object.entries(y).flatMap(([B,C])=>(C||[]).filter(O=>!O.used&&O.job===A.job).map(O=>({...O,_line:B})));if(!F.length){c("Aucun joueur compatible à remplacer","error");return}const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",j.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">Remplacer par ${A.firstname} ${A.name}</div>
        <button id="sp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${F.map(B=>{const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",O=oe(B,B._line)+(B.boost||0);return`<div class="sp-item" data-cid="${B.cardId}" data-role="${B._line}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${C};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111">${B.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(j),(D=j.querySelector("#sp-close"))==null||D.addEventListener("click",()=>j.remove()),j.querySelectorAll(".sp-item").forEach(B=>{B.addEventListener("click",async()=>{const C=B.dataset.cid,O=B.dataset.role,K=(y[O]||[]).find(se=>se.cardId===C);if(!K)return;K.used=!0;const X={...A,_line:O,position:K.position};(y[O]=y[O]||[]).push(X);const re=[...b,f];j.remove(),await L({[o+"Team"]:y,["usedSubIds_"+o]:re})})})}function ne(){var x;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Pe(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(x=f.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>f.remove())}function Z(){var b;const f=u.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(A=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${A.type==="goal"?"#FFD700":A.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${A.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(x),(b=x.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>x.remove())}async function pe(){const f=u[o+"Team"],x=!["GK","DEF","MIL","ATT"].some(F=>(u[r+"Team"][F]||[]).some(j=>!j.used)),b=(u["selected_"+o]||[]).map(F=>{const j=(f[F._role]||[]).find(B=>B.cardId===F.cardId)||F,D=x&&["GK","DEF"].includes(F._role);return{...j,_line:F._role,...D?{note_a:Math.max(1,Number(j.note_a)||0)}:{}}});if(!b.length)return;const A=yt(b,u.modifiers[o]||{});b.forEach(F=>{const j=(f[F._role]||[]).find(D=>D.cardId===F.cardId);j&&(j.used=!0)});const y=[...u.log||[]];if(x){const F=(u[o+"Score"]||0)+1;y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:b.map(O=>({name:O.name,note:oe(O,O._line||"ATT"),portrait:ge(O),job:O.job})),homeTotal:A.total,aiTotal:0});const j=(u.round||0)+1,D=o==="p1"?"p2":"p1",B={...u,[o+"Team"]:f,[o+"Score"]:F},C=z(B);await L({[o+"Team"]:f,[o+"Score"]:F,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:C?"finished":D+"-attack",attacker:D,round:j,log:y}),C&&await S.from("matches").update({status:"finished"}).eq("id",i);return}y.push({type:"duel",text:`⚔️ ${u[o+"Name"]} attaque (${A.total})`,players:b,total:A.total,side:o}),await L({[o+"Team"]:f,pendingAttack:{...A,players:b,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:r+"-defense",log:y})}async function Q(){const f=u[o+"Team"],x=(u["selected_"+o]||[]).map(J=>({...(f[J._role]||[]).find(ie=>ie.cardId===J.cardId)||J,_line:J._role})),b=ht(x,u.modifiers[o]||{});x.forEach(J=>{const Y=(f[J._role]||[]).find(ie=>ie.cardId===J.cardId);Y&&(Y.used=!0)});const A=bt(u.pendingAttack.total,b.total,u.modifiers[o]||{}),y=u.pendingAttack.side,F=A==="attack"||(A==null?void 0:A.goal),j=y==="p1"?"p2":"p1",D=(u.round||0)+1,B=[...u.log||[]];B.push({type:"duel",isGoal:F,homeScored:F&&y===o,text:F?`⚽ BUT de ${u[y+"Name"]} ! (${u.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${b.total})`,homePlayers:(u.pendingAttack.players||[]).map(J=>({name:J.name,note:oe(J,J._line||"ATT"),portrait:ge(J),job:J.job})),aiPlayers:x.map(J=>({name:J.name,note:oe(J,J._line||"DEF"),portrait:ge(J),job:J.job})),homeTotal:u.pendingAttack.total,aiTotal:b.total});const C=F?(u[y+"Score"]||0)+1:u[y+"Score"]||0,O={...u,[o+"Team"]:f,[y+"Score"]:C},K=z(O),X=O[j+"Team"],se=!["GK","DEF","MIL","ATT"].some(J=>(X[J]||[]).some(Y=>!Y.used))||K?"finished":j+"-attack";await L({[o+"Team"]:f,[y+"Score"]:C,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:se,attacker:j,round:D,log:B}),(se==="finished"||K)&&await S.from("matches").update({status:"finished"}).eq("id",i)}function z(f){const x=["MIL","ATT","GK","DEF"].some(A=>(f.p1Team[A]||[]).some(y=>!y.used)),b=["MIL","ATT","GK","DEF"].some(A=>(f.p2Team[A]||[]).some(y=>!y.used));return!x&&!b}function T(){var y;const f=u[o+"Score"],x=u[r+"Score"],b=f>x,A=f===x;$e(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":A?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":A?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{S.removeChannel(v)}catch{}be(e),l("home")})}w()}const Io={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Lo(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await _t(e,t)}async function _t(e,t){const{state:i,toast:n}=t,{data:d}=await S.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await S.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
      </div>`;return}const g=o==="mine"?[...p].sort((m,_)=>m.status!==_.status?m.status==="active"?-1:1:new Date(_.listed_at)-new Date(m.listed_at)):p;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(m=>{var M,v,L,k;const _=(M=m.card)==null?void 0:M.player;if(!_)return"";const u=_.job==="GK"?_.note_g:_.job==="DEF"?_.note_d:_.job==="MIL"?_.note_m:_.note_a,h=Io[_.rarity],I=(i.profile.credits||0)>=m.price,$=m.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${$?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${So(_.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${h};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${_.firstname} ${_.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${_.country_code} · ${((v=_.clubs)==null?void 0:v.encoded_name)||"—"} · ${_.rarity} · ${_.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((L=m.seller)==null?void 0:L.pseudo)||"—"}</div>`:$?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((k=m.buyer)==null?void 0:k.pseudo)||"—"} · ${m.sold_at?new Date(m.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(m.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${m.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${m.id}" ${I?"":"disabled"} style="margin-top:4px">${I?"Acheter":"Trop cher"}</button>`:$?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${m.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(m=>{m.addEventListener("click",()=>Mo(m.dataset.buy,p,e,t))}),r.querySelectorAll("[data-cancel]").forEach(m=>{m.addEventListener("click",()=>zo(m.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const p=r===o;r.style.background=p?"var(--green)":"#fff",r.style.color=p?"#fff":"var(--gray-600)",r.style.borderColor=p?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function Mo(e,t,i,n){var p;const{state:d,toast:s}=n,a=t.find(g=>g.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(p=a.card)==null?void 0:p.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:g,error:m}=await S.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(m)throw new Error(m.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");d.profile.credits=c-l;const _=document.querySelector("[data-credits]")||document.querySelector(".credits-display");_&&(_.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),_t(i,n)}catch(g){s("❌ "+g.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function zo(e,t,i){const{toast:n}=i,{data:d}=await S.from("market_listings").select("card_id").eq("id",e).single();await S.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),_t(t,i)}function So(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function jo(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await S.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function Co(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await S.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function o(r){const p=r.home_id===d.id;p?r.home_score:r.away_score,p?r.away_score:r.home_score;const g=r.winner_id===d.id,m=r.home_score===r.away_score&&r.status==="finished",_=r.status!=="finished"?"…":m?"N":g?"V":"D",u=r.status!=="finished"||m?"#888":g?"#1A6B3C":"#c0392b";let h=a[r.mode]||r.mode;r.away_id===null&&!h.startsWith("IA")&&(h="IA");const $=r.home_id===d.id?r.away:r.home;let M;r.away_id===null?M=h:$?M=`${$.club_name||$.pseudo} (${$.pseudo})`:M="Adversaire";let v="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(v=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const L=new Date(r.created_at),k=L.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+L.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),G=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${M}${v}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${k}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${G}</span>
        <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${_}</span>
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
  </div>`}const ae={user:null,profile:null,page:"home",params:{}};function Xe(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Bo(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function gt(){document.getElementById("modal-overlay").classList.add("hidden")}async function Je(){if(!ae.user)return;const{data:e}=await S.from("users").select("*").eq("id",ae.user.id).single();e&&(ae.profile=e)}const kt="mw_theme";function nt(){return localStorage.getItem(kt)||"light"}function Fo(e){var t;localStorage.setItem(kt,e),mt(e),(t=ae.profile)!=null&&t.id&&S.from("users").update({theme:e}).eq("id",ae.profile.id).then(()=>{})}function mt(e){document.documentElement.setAttribute("data-theme",e)}function Qe(e,t={}){ae.page=e,ae.params=t,mi()}async function mi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===ae.page)});const t=document.getElementById("nav-credits");t&&ae.profile&&(t.textContent=`💰 ${(ae.profile.credits||0).toLocaleString("fr")}`);const i={state:ae,navigate:Qe,toast:Xe,openModal:Bo,closeModal:gt,refreshProfile:Je};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ae.page){case"home":await Nt(e,i);break;case"collection":await Mi(e,i);break;case"decks":await dt(e,i);break;case"boosters":await Ki(e,i);break;case"match":{(ae.params&&ae.params.matchMode||"vs_ai_easy")==="random"?await Eo(e,i):await lo(e,i);break}case"market":await Lo(e,i);break;case"rankings":await jo(e,i);break;case"matches":await Co(e,i);break;default:await Nt(e,i)}}function Do(){const e=document.getElementById("app"),t=ae.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),Qe(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Qe("home")),document.getElementById("nav-credits").addEventListener("click",()=>Qe("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=nt()==="dark"?"light":"dark";Fo(d),Jt(d)}),Jt(nt())}function Jt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Go(){mt(nt()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&gt()}),document.getElementById("modal-close").addEventListener("click",gt);const{data:{session:e}}=await S.auth.getSession();if(!e){Zt(),qt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Xe});return}ae.user=e.user,await Je(),Zt();try{const{data:t}=await S.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),$i(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!ae.profile){_i(document.getElementById("app"),{state:ae,navigate:async()=>{await Je(),Qt()},toast:Xe,refreshProfile:Je});return}ae.profile.theme&&ae.profile.theme!==nt()&&(localStorage.setItem(kt,ae.profile.theme),mt(ae.profile.theme)),Qt(),S.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(ae.user=null,ae.profile=null,document.getElementById("app").innerHTML="",qt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Xe}))})}function qo(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function at(){const e=document.getElementById("app");e&&(e.style.height=qo()+"px")}window.addEventListener("resize",at);window.addEventListener("orientationchange",()=>setTimeout(at,150));window.visualViewport&&window.visualViewport.addEventListener("resize",at);function Qt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",at(),Do(),mi()}function Zt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function xi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Go().catch(e=>{console.error("Échec du démarrage:",e),xi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&xi("Le serveur met trop de temps à répondre.")},12e3);
